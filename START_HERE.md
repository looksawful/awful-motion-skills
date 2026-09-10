# Start here

Use this repository as the motion/video half of the AWFUL visual-production system.

## Read order

1. Read `AGENTS.md`.
2. Read `.agents/skills/visual-production-router/SKILL.md`.
3. When an approved Picture visual contract exists, load `.agents/skills/picture-handoff-consumer/SKILL.md` before animation.
4. Load only the smallest relevant local specialist set.
5. Read `skills/vendor/registry.json` only when a task needs an external runtime or specialist.
6. Apply `.agents/skills/visual-quality-review/SKILL.md` and `docs/animation-review-checklist.md` before claiming completion when rendered evidence is available.

## Typical routes

- picture handoff: `picture-handoff-consumer` -> task-specific motion route
- character animation: `picture-handoff-consumer + character-consistency + disney-animation-principles` when a Picture contract exists
- mascot/pet: `picture-handoff-consumer + character-consistency + mascot-motion + disney-animation-principles`, adding `character-effects-language` when signature FX exist
- sprite animation: `picture-handoff-consumer + character-consistency + awful-sprite-production + disney-animation-principles`, adding `mascot-motion` for pets/mascots
- story/character writing: `story-character-writing`
- storyboard/shot plan: `storyboard-and-directing`, adding Disney rules for animated performance
- generated video: `ai-video-production + storyboard-and-directing + character-consistency` as needed
- game assets: `game-asset-production`, adding sprite/character specialists only when relevant
- final review: `visual-quality-review` plus the specialist needed to interpret the artifact

## Cross-repository boundary

Use `looksawful/awful-picture-skills` as the source of truth for visual identity, illustration construction, character/mascot bibles, style locks, mockup/product fidelity and canonical still references.

This repository consumes those locks through `picture-handoff-consumer` and owns timing, acting, effects over time, frame sequencing, directing, video and temporal QA.

A motion derivative must not silently redesign its source character.

See `docs/picture-motion-handoff.md` and `schemas/picture-motion-handoff.schema.json`.
