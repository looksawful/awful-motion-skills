# AWFUL MOTION SKILLS

Reusable agent instructions and reviewed production pipelines for visual work with AI models.

The repository is designed to be handed to Codex or another file-capable agent together with a visual task. The agent reads `AGENTS.md`, routes through the project-local skills, and installs only the reviewed external specialist skills that the task actually needs.

## Scope

Current local skills cover:

- classical animation principles translated into operational motion rules;
- persistent character, person, pet and mascot consistency;
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

## External skills

The reviewed registry is:

```text
skills/vendor/registry.json
```

External source is not copied permanently into this repository. The installer clones only the selected upstream skill subtree into the gitignored `.agents/vendor/` directory and records the upstream commit used for that local copy.

```bash
python scripts/vendor_skills.py list
python scripts/vendor_skills.py list --tier core
python scripts/vendor_skills.py list --category video
python scripts/vendor_skills.py info comfyui-video-pipeline
python scripts/vendor_skills.py install comfyui-video-pipeline
python scripts/vendor_skills.py status
```

Use `install-tier` or `install-category` only when a working environment genuinely needs several skills at once. Installing everything makes agent routing worse, not better.

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
README.md
.agents/
  skills/
    visual-production-router/
    disney-animation-principles/
    character-consistency/
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
  visual-skill-catalog.md
  visual-production-pipelines.md
skills/
  vendor/
    registry.json
    README.md
scripts/
  vendor_skills.py
```

## Production principle

Keep identity, art direction, motion laws, continuity and QA independent from any single generation provider. Models and APIs can be replaced; the production contract should remain useful.
