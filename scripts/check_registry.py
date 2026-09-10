#!/usr/bin/env python3
"""Static validation for AWFUL Motion vendor registries."""

from __future__ import annotations

import json
import sys
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
REGISTRIES = [
    ROOT / "skills" / "vendor" / "registry.json",
    ROOT / "skills" / "vendor" / "registry.extra.json",
]
TIERS = {"core", "recommended", "optional", "reference"}
REQUIRED = {
    "id",
    "name",
    "repo",
    "source_path",
    "tier",
    "categories",
    "execution",
    "portable",
    "notes",
}


def fail(message: str) -> None:
    raise ValueError(message)


def load_registry(path: Path) -> dict:
    data = json.loads(path.read_text(encoding="utf-8"))
    if data.get("version") != 1:
        fail(f"{path.name}: registry version must be 1")
    skills = data.get("skills")
    if not isinstance(skills, list) or not skills:
        fail(f"{path.name}: skills must be a non-empty array")
    return data


def main() -> int:
    registries = [load_registry(path) for path in REGISTRIES]
    skills = [skill for data in registries for skill in data.get("skills", [])]

    ids: set[str] = set()
    sources: set[tuple[str, str]] = set()

    for index, skill in enumerate(skills):
        if not isinstance(skill, dict):
            fail(f"skills[{index}] must be an object")

        missing = REQUIRED - skill.keys()
        if missing:
            fail(f"skills[{index}] missing: {', '.join(sorted(missing))}")

        skill_id = skill["id"]
        if not isinstance(skill_id, str) or not skill_id.strip():
            fail(f"skills[{index}].id must be a non-empty string")
        if skill_id in ids:
            fail(f"duplicate id across registries: {skill_id}")
        ids.add(skill_id)

        if skill["tier"] not in TIERS:
            fail(f"{skill_id}: unsupported tier {skill['tier']!r}")

        if not isinstance(skill["portable"], bool):
            fail(f"{skill_id}: portable must be boolean")
        if skill["tier"] == "reference" and skill["portable"]:
            fail(f"{skill_id}: reference entries must be non-portable")

        categories = skill["categories"]
        if not isinstance(categories, list) or not categories:
            fail(f"{skill_id}: categories must be a non-empty array")
        if any(not isinstance(value, str) or not value.strip() for value in categories):
            fail(f"{skill_id}: categories contain invalid values")
        if len(categories) != len(set(categories)):
            fail(f"{skill_id}: duplicate categories")

        repo = skill["repo"]
        parsed = urlparse(repo)
        if parsed.scheme != "https" or parsed.netloc != "github.com":
            fail(f"{skill_id}: repo must be an https://github.com URL")

        source_path = skill["source_path"]
        if not isinstance(source_path, str) or not source_path:
            fail(f"{skill_id}: source_path must be a non-empty string")
        path_parts = Path(source_path).parts
        if source_path.startswith(("/", "\\")) or ".." in path_parts:
            fail(f"{skill_id}: unsafe source_path {source_path!r}")

        pair = (repo.rstrip("/"), source_path.rstrip("/"))
        if pair in sources:
            fail(f"duplicate upstream source across registries: {repo} / {source_path}")
        sources.add(pair)

        for text_field in ("name", "execution", "notes"):
            if not isinstance(skill[text_field], str) or not skill[text_field].strip():
                fail(f"{skill_id}: {text_field} must be a non-empty string")

    print(f"registries ok: {len(skills)} reviewed skills across {len(REGISTRIES)} files")
    return 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except (OSError, json.JSONDecodeError, ValueError) as exc:
        print(f"registry invalid: {exc}", file=sys.stderr)
        sys.exit(1)
