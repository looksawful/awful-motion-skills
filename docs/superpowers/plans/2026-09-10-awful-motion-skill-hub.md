# AWFUL Motion Skill Hub implementation plan

Date: 2026-09-10

## Goal

Create a provider-neutral motion/animation/video skill hub for agents working with recurring characters, mascots, pets, sprites, storyboards, generated video, deterministic motion graphics, game assets and visual QA.

## Architecture

Appearance authority may come from `looksawful/awful-picture-skills`. This repository consumes approved identity/style locks and owns temporal behavior: acting, timing, spacing, effects over time, frame sequencing, directing, video production and temporal QA.

Authority:

`user instruction > repository policy > local motion skills > reviewed vendor skills > generic provider guidance`

## Implemented work

- [x] Keep the existing normalized 12 classical animation-principles contract as the core motion-law layer.
- [x] Keep existing character consistency, sprite, directing, AI-video, game-asset and visual-QA contracts.
- [x] Add mascot/pet motion personality and runtime-state rules.
- [x] Add causal character-effects language including signature glints, impact marks, dust, trails and smears.
- [x] Add mascot motion-bible template.
- [x] Add explicit handoff from `awful-picture-skills` identity/style bibles.
- [x] Expand visual-production router for mascots, effects, previs, deterministic video and workflow extraction.
- [x] Maintain a stable vendor registry and a separate expanded reviewed registry.
- [x] Extend vendor manager to merge both registries and reject duplicate ids.
- [x] Add reviewed routes for Video Shotcraft, Blender greybox/previs, cinematic directing, SVG character animation, HyperFrames animation, Remotion reconstruction, storyboard workflows, video-to-skill and Manim.
- [x] Expand skill catalog and production pipelines.
- [x] Add routing evals and repository-native structural verifier.
- [x] Validate Python vendor tools and both registries in GitHub Actions.
- [x] Keep actual vendor installation smoke tests manual/workflow-dispatch so normal CI does not clone/run unnecessary runtimes.

## Verification gates

Static repository validation:

```bash
npm run verify:skills
python scripts/check_registry.py
python scripts/vendor_skills.py list --tier recommended
```

Runtime vendor path validation remains an explicit workflow-dispatch action because it performs external clones. A passing static check does not claim that paid providers, credentials, models or local render runtimes are available.

## Future extension rule

Add provider-specific behavior beneath local motion/identity/continuity contracts. Do not create a second generic animation-principles skill merely because another provider uses different prompt syntax. A new vendor route must add a distinct capability, have an inspectable source path and preserve provenance.
