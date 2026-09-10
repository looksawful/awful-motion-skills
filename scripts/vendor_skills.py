#!/usr/bin/env python3
"""Install reviewed external agent skills into .agents/vendor without committing them.

The registry is repository source. Installed vendor copies are local execution state.
This script intentionally depends only on Python stdlib + git.
"""

from __future__ import annotations

import argparse
import json
import shutil
import subprocess
import sys
import tempfile
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REGISTRY_PATH = ROOT / "skills" / "vendor" / "registry.json"
INSTALL_ROOT = ROOT / ".agents" / "vendor"


def run(cmd: list[str], cwd: Path | None = None) -> str:
    try:
        proc = subprocess.run(
            cmd,
            cwd=cwd,
            check=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            encoding="utf-8",
        )
    except FileNotFoundError as exc:
        raise SystemExit(f"required executable not found: {cmd[0]}") from exc
    except subprocess.CalledProcessError as exc:
        detail = (exc.stderr or exc.stdout or "command failed").strip()
        raise SystemExit(f"command failed: {' '.join(cmd)}\n{detail}") from exc
    return proc.stdout.strip()


def load_registry() -> dict:
    try:
        return json.loads(REGISTRY_PATH.read_text(encoding="utf-8"))
    except FileNotFoundError as exc:
        raise SystemExit(f"registry not found: {REGISTRY_PATH}") from exc
    except json.JSONDecodeError as exc:
        raise SystemExit(f"invalid registry JSON: {exc}") from exc


def skills_by_id(registry: dict) -> dict[str, dict]:
    return {item["id"]: item for item in registry.get("skills", [])}


def skill_md_for(target: Path, source_path: str) -> Path:
    if source_path == ".":
        return target / "SKILL.md"
    return target / "SKILL.md"


def install_one(item: dict, force: bool = False) -> None:
    if not item.get("portable", False):
        raise SystemExit(
            f"{item['id']} is reference-only/non-portable. Read its registry notes instead of installing it as a generic skill."
        )

    target = INSTALL_ROOT / item["id"]
    if target.exists():
        if not force:
            print(f"already installed: {item['id']} -> {target}")
            return
        shutil.rmtree(target)

    INSTALL_ROOT.mkdir(parents=True, exist_ok=True)
    repo = item["repo"]
    source_path = item.get("source_path", ".")

    with tempfile.TemporaryDirectory(prefix="awful-motion-skill-") as tmp:
        checkout = Path(tmp) / "repo"
        run(["git", "clone", "--depth", "1", "--filter=blob:none", "--sparse", repo, str(checkout)])

        if source_path != ".":
            run(["git", "sparse-checkout", "set", "--cone", source_path], cwd=checkout)
            source = checkout / source_path
        else:
            source = checkout

        expected = source / "SKILL.md"
        if not expected.is_file():
            raise SystemExit(
                f"upstream skill layout changed: expected {source_path}/SKILL.md in {repo}"
            )

        commit = run(["git", "rev-parse", "HEAD"], cwd=checkout)
        shutil.copytree(source, target, ignore=shutil.ignore_patterns(".git"))

    metadata = {
        "id": item["id"],
        "name": item.get("name"),
        "repo": repo,
        "source_path": source_path,
        "upstream_commit": commit,
        "installed_at": datetime.now(timezone.utc).isoformat(),
        "tier": item.get("tier"),
        "categories": item.get("categories", []),
    }
    (target / ".awful-vendor.json").write_text(
        json.dumps(metadata, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )
    print(f"installed: {item['id']} -> {target}")


def list_skills(registry: dict, category: str | None = None, tier: str | None = None) -> None:
    for item in registry.get("skills", []):
        if category and category not in item.get("categories", []):
            continue
        if tier and tier != item.get("tier"):
            continue
        portable = "portable" if item.get("portable") else "reference-only"
        installed = "installed" if (INSTALL_ROOT / item["id"]).exists() else "not-installed"
        cats = ",".join(item.get("categories", []))
        print(f"{item['id']:<36} {item.get('tier','-'):<11} {portable:<14} {installed:<13} {cats}")


def info(item: dict) -> None:
    print(json.dumps(item, indent=2, ensure_ascii=False))


def status(registry: dict) -> None:
    known = skills_by_id(registry)
    if not INSTALL_ROOT.exists():
        print("no vendor skills installed")
        return
    for path in sorted(p for p in INSTALL_ROOT.iterdir() if p.is_dir()):
        meta_path = path / ".awful-vendor.json"
        if meta_path.is_file():
            try:
                meta = json.loads(meta_path.read_text(encoding="utf-8"))
                short = str(meta.get("upstream_commit", "unknown"))[:12]
                print(f"{path.name}: {short} ({meta.get('repo','unknown')})")
            except json.JSONDecodeError:
                print(f"{path.name}: metadata-invalid")
        elif path.name in known:
            print(f"{path.name}: unmanaged-copy")
        else:
            print(f"{path.name}: unknown-directory")


def remove(skill_id: str) -> None:
    target = INSTALL_ROOT / skill_id
    if not target.exists():
        print(f"not installed: {skill_id}")
        return
    shutil.rmtree(target)
    print(f"removed: {skill_id}")


def main() -> int:
    parser = argparse.ArgumentParser(description="AWFUL MOTION reviewed vendor-skill manager")
    sub = parser.add_subparsers(dest="command", required=True)

    p_list = sub.add_parser("list", help="list reviewed skills")
    p_list.add_argument("--category")
    p_list.add_argument("--tier", choices=["core", "recommended", "optional", "reference"])

    p_info = sub.add_parser("info", help="show one registry entry")
    p_info.add_argument("skill_id")

    p_install = sub.add_parser("install", help="install one portable skill")
    p_install.add_argument("skill_id")
    p_install.add_argument("--force", action="store_true")

    p_tier = sub.add_parser("install-tier", help="install every portable skill in one tier")
    p_tier.add_argument("tier", choices=["core", "recommended", "optional"])
    p_tier.add_argument("--force", action="store_true")

    p_cat = sub.add_parser("install-category", help="install portable skills matching a category")
    p_cat.add_argument("category")
    p_cat.add_argument("--force", action="store_true")

    p_remove = sub.add_parser("remove", help="remove an installed vendor copy")
    p_remove.add_argument("skill_id")

    sub.add_parser("status", help="show locally installed vendor copies")

    args = parser.parse_args()
    registry = load_registry()
    index = skills_by_id(registry)

    if args.command == "list":
        list_skills(registry, args.category, args.tier)
    elif args.command == "info":
        item = index.get(args.skill_id)
        if not item:
            raise SystemExit(f"unknown skill: {args.skill_id}")
        info(item)
    elif args.command == "install":
        item = index.get(args.skill_id)
        if not item:
            raise SystemExit(f"unknown skill: {args.skill_id}")
        install_one(item, force=args.force)
    elif args.command == "install-tier":
        matches = [x for x in registry["skills"] if x.get("tier") == args.tier and x.get("portable")]
        for item in matches:
            install_one(item, force=args.force)
    elif args.command == "install-category":
        matches = [
            x for x in registry["skills"]
            if args.category in x.get("categories", []) and x.get("portable")
        ]
        if not matches:
            raise SystemExit(f"no portable skills in category: {args.category}")
        for item in matches:
            install_one(item, force=args.force)
    elif args.command == "remove":
        remove(args.skill_id)
    elif args.command == "status":
        status(registry)
    return 0


if __name__ == "__main__":
    sys.exit(main())
