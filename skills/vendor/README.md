# Reviewed vendor skills

This directory contains the reviewed registries for external visual-production agent skills:

- `registry.json`: stable core/recommended/optional routes;
- `registry.extra.json`: additional reviewed specialists and reference workflows discovered during deeper motion/video research.

`scripts/vendor_skills.py` merges both files into one runtime catalog and rejects duplicate ids. `scripts/check_registry.py` validates both files and checks cross-registry id/source collisions.

Third-party skill source is not vendored into the repository by default. The installer clones only the selected upstream skill subtree into `.agents/vendor/<skill-id>/`, records the upstream commit in `.awful-vendor.json`, and leaves the installed copy outside Git source through `.gitignore`.

## Why this exists

The repository needs specialist workflows without turning into a frozen copy of multiple upstream projects. Keeping registries in source and installed copies as local state provides:

- clear provenance;
- smaller repository history;
- easier upstream refresh;
- fewer duplicate/contradictory instructions;
- explicit separation between AWFUL rules and provider-specific execution;
- a Windows-friendly path that does not depend on symbolic links.

## Tiers

- `core`: high-value route used frequently across visual production.
- `recommended`: strong specialist used when its domain matches the task.
- `optional`: useful narrower alternative or extension.
- `reference`: valuable workflow research but not a generic portable runtime skill.

Tier does not mean that every `core` skill should be installed for every task. Install the smallest relevant set.

## Execution types

Registry entries describe how a skill actually works. Common examples include:

- `prompt-only`: reusable instructions, no generation backend by itself;
- `local`: runs local tooling/workflows;
- `local-code`: coded runtime such as SVG/JS state animation;
- `local-blender`: local Blender/previs execution;
- `local-plus-image-backend`: local processing plus an image generator;
- `cloud-api`: provider/API execution and usually authentication/cost;
- `prompt-plus-cloud-api`: planning/prompting combined with provider tooling;
- `host-preferred-or-api`: prefer the host's native media tool, with documented API fallback;
- provider/platform-specific execution modes: useful only when that platform is available.

Do not confuse installing a skill with installing/authenticating its external provider or runtime.

## Commands

```bash
python scripts/vendor_skills.py list
python scripts/vendor_skills.py list --tier core
python scripts/vendor_skills.py list --category character
python scripts/vendor_skills.py info inference-character-design-sheet
python scripts/vendor_skills.py install inference-character-design-sheet
python scripts/vendor_skills.py info greybox-harness
python scripts/vendor_skills.py install greybox-harness
python scripts/vendor_skills.py install-category sprites
python scripts/vendor_skills.py status
python scripts/vendor_skills.py remove inference-character-design-sheet
```

`--force` may be used with `install`, `install-tier` or `install-category` to refresh the local copy from current upstream.

## Selection policy

Prefer capability diversity over duplicate brands. A character project may need one image backend, one character-consistency workflow, one motion contract, one sprite normalization workflow and one QA workflow. It usually does not need several general text-to-image wrappers loaded at the same time.

AWFUL repository-local contracts remain authoritative. A vendor skill may explain how to call a provider or use a runtime, but it cannot redefine the approved character, art direction, motion, output geometry or acceptance criteria.

Use `docs/visual-skill-catalog.md` to understand overlap and `docs/visual-production-pipelines.md` for end-to-end combinations.

## Root-scoped skills

Some external projects define their `SKILL.md` at repository root and keep required `scripts/`, `references/`, templates or assets below it. The installer disables sparse checkout for these root-scoped entries before copying them so the local skill is complete.

Nested skills continue to use Git sparse checkout so a large upstream repository does not need to be fully materialized.

## Verification

Static validation:

```bash
python scripts/check_registry.py
python -m py_compile scripts/vendor_skills.py scripts/check_registry.py
```

Representative real installation smoke tests run through `.github/workflows/vendor-smoke.yml` when registry/installer tooling changes. The matrix intentionally includes both nested and root-scoped external skills.

## Licensing and provenance

External skills remain owned and licensed by their upstream projects. Before copying or redistributing third-party source beyond local installation, inspect the upstream repository license and any referenced assets or model terms. Do not assume a repository source license also grants unrestricted rights to model weights, generated reference assets, fonts, trademarks or third-party examples.

Installation writes the upstream repository and commit into `.agents/vendor/<id>/.awful-vendor.json` so local provenance is inspectable.

Never commit credentials, API keys, provider session tokens or generated secret-bearing config files.
