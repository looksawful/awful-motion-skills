# AWFUL MOTION SKILLS

Reusable agent instructions and reviewed production pipelines for visual work with AI models.

The repository is designed to be handed to Codex or another file-capable agent together with a visual task. The agent reads `AGENTS.md` and `START_HERE.md`, routes through the project-local skills, and installs only the reviewed external specialist skills that the task actually needs.

## Scope

Current local skills cover:

- classical animation principles translated into operational motion rules;
- persistent character, person, pet and mascot consistency;
- mascot motion personality, idle/reaction/state vocabularies and signature effects;
- causal character VFX such as glasses glints, impacts, dust, trails and smears;
- concept art, reference analysis and visual-language specifications;
- sprite strips, sprite atlases, anchors, loops and effects;
- character/scenario writing for animation and games;
- storyboards, shot lists, directing and animatic planning;
- text-to-video, image-to-video, reference/keyframe video and multi-shot AI production;
- game characters, props, environments, tiles, textures, VFX and 2D/3D asset systems;
- visual QA for generated images, sprites, video and 3D/game assets.

Reviewed vendor routes add specialized execution for OpenAI image/sprite workflows, inference.sh, local ComfyUI, Higgsfield, MiniMax H3 prompting, HyperFrames motion graphics, Three.js/3D generation and other focused tools.

## Agent entrypoint

For broad visual work, read:

```text
AGENTS.md
START_HERE.md
.agents/skills/visual-production-router/SKILL.md
```

Then load only the local skills required by the task.

Example request to an agent:

```text
Use the AWFUL MOTION SKILLS repository as the visual-production contract.
Create a complete idle/walk/reaction sprite set from the approved character reference.
Preserve character identity, apply the animation-principle rules, use the sprite-production pipeline, inspect the result and report any unresolved visual defects.
```

The user should not need to know the names of every underlying vendor skill. The router is responsible for selecting them.

## AWFUL Picture Skills handoff

`looksawful/awful-picture-skills` is the companion still-image/identity hub. It owns illustration construction, character and mascot bibles, canonical still references, style locks, mockup/product fidelity and visual QA for images.

Motion consumes those approved identity/style locks. It must not silently redesign a recurring character while animating it.

## External skills

Reviewed registries are:

```text
skills/vendor/registry.json
skills/vendor/registry.extra.json
```

The primary registry contains the stable reviewed set. `registry.extra.json` contains additional reviewed installable/reference candidates discovered during deeper visual-production research. `scripts/vendor_skills.py` merges both registries and rejects duplicate ids.

External source is not copied permanently into this repository. The installer clones only the selected upstream skill subtree into the gitignored `.agents/vendor/` directory and records the upstream commit used for that local copy.

```bash
python scripts/vendor_skills.py list
python scripts/vendor_skills.py list --tier core
python scripts/vendor_skills.py list --category video
python scripts/vendor_skills.py info video-shotcraft
python scripts/vendor_skills.py install video-shotcraft
python scripts/vendor_skills.py status
```

Use `install-tier` or `install-category` only when a working environment genuinely needs several skills at once. Installing everything makes agent routing worse, not better.

Notable extra routes include:

- `video-shotcraft` for reusable cinematic shot recipes and product video production;
- `greybox-harness` for Blender previs before AI-video generation;
- `cinematic-director` for blocking, coverage and shot planning;
- `svg-character-animator` for vector mascot/character state machines;
- `hyperframes-animation` for deterministic coded motion;
- `remotion-clone-video` for frame-checked reference reconstruction;
- `video-to-skill` for turning demonstrated tutorials into reusable operational skills;
- `manim-video` for programmatic explanatory animation.

## Local ComfyUI

ComfyUI is treated as a first-class local execution backend rather than a collection of hardcoded workflow assumptions. The reviewed routes separate:

- API execution and result retrieval;
- workflow JSON construction;
- model-specific prompt engineering;
- video pipeline selection.

Agents must inspect the actual local inventory before assuming a checkpoint, custom node or workflow is installed.

## Repository structure

```text
AGENTS.md
START_HERE.md
README.md
.agents/
  skills/
    visual-production-router/
    disney-animation-principles/
    character-consistency/
    mascot-motion/
    character-effects-language/
    concept-and-style/
    awful-sprite-production/
    story-character-writing/
    storyboard-and-directing/
    ai-video-production/
    game-asset-production/
    visual-quality-review/
docs/
  disney-12-principles.md
  animation-review-checklist.md
  mascot-motion-bible-template.md
evals/
  routing.yaml
skills/
  vendor/
    registry.json
    registry.extra.json
    README.md
scripts/
  vendor_skills.py
  verify-skills.mjs
.github/workflows/
  verify-skills.yml
```

## Verification

```bash
npm run verify:skills
python scripts/vendor_skills.py list --tier recommended
```

GitHub Actions runs the structural verifier on every push to `main` and on pull requests.

## Production principle

Keep identity, art direction, motion laws, continuity and QA independent from any single generation provider. Models and APIs can be replaced; the production contract should remain useful.
