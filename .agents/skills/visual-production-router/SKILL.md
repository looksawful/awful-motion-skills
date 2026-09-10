---
name: visual-production-router
description: Route any AWFUL visual-production task to the smallest useful set of local and reviewed vendor skills. Use for images, video, animation, characters, pets, mascots, sprites, concept art, storyboards, mockups, humans, game assets, 3D, style analysis, motion graphics and visual QA.
---

# AWFUL visual production router

This is the front door for broad visual work. Do not solve every request with one generic image or video prompt.

## Authority order

1. Current user constraints and supplied reference assets.
2. `AGENTS.md`.
3. AWFUL repository-local skills under `.agents/skills/`.
4. Reviewed vendor skills listed in `skills/vendor/registry.json`.
5. Generic model/provider advice.

Vendor guidance never overrides a user constraint or an AWFUL identity/motion/continuity rule.

When `looksawful/awful-picture-skills` contains an approved visual, character or mascot bible for the subject, consume its canonical still/reference and appearance invariants rather than rebuilding the character identity from motion derivatives. This repository owns temporal behavior, frame sequencing, directing and temporal QA.

## First classify the deliverable

Choose one primary deliverable and any supporting deliverables:

- single image or image edit;
- visual style/reference analysis;
- character concept or character bible;
- persistent character/mascot/pet identity;
- pose/expression/turnaround sheet;
- sprite sequence or sprite atlas;
- storyboard, shot list or animatic plan;
- generated video clip;
- multi-shot animated short;
- deterministic motion-graphics/composited video;
- product image/mockup/photoshoot;
- human/fashion/reference-consistent image set;
- game asset set;
- 3D asset or 2D-to-3D conversion;
- visual QA/review.

Do not let a supporting artifact replace the requested deliverable. A storyboard is not a finished video; a concept sheet is not a sprite atlas; a prompt is not a generated image when generation is available.

## Routing matrix

### General image generation/editing

Always load the relevant AWFUL style/identity skill first when consistency matters. Then prefer:

1. host-provided image generation capability when available;
2. `openai-imagegen` for a portable generation/edit workflow;
3. `inference-ai-image-generation` when model choice, LoRA, provider variety or cloud routing matters;
4. local ComfyUI skills when local workflow/model assets matter.

If the request is primarily still-image identity, illustration construction or a canonical appearance bible and `awful-picture-skills` is available, use that repository as the appearance-authority layer and return here for animation/video work.

### Character creation and consistency

Load:

- `character-consistency`;
- `concept-and-style` when the visual language is not locked;
- `disney-animation-principles` when the result will move;
- vendor `inference-character-design-sheet` for turnaround/expression/reference-sheet structure;
- vendor `ip-studio` when a reusable 2D identity package is explicitly useful.

A derived pose, expression, sprite or shot must consume the locked character identity. It must not silently redefine it.

### Pets and mascots

Load:

- `character-consistency`;
- `mascot-motion` for personality expressed through timing, posture, gesture, idles and reactions;
- `disney-animation-principles`;
- `character-effects-language` when the character has signature glints, dust, trails, impact marks, smears or other recurring effects;
- `awful-sprite-production` for frame-based output;
- vendor `openai-hatch-pet` when Codex-pet atlas/runtime rules are relevant;
- vendor `openai-sprite-pipeline` for strip generation and normalization.

### Sprites and sprite atlases

Load:

- `awful-sprite-production`;
- `character-consistency` for recurring characters;
- `mascot-motion` for pet/mascot state behavior;
- `character-effects-language` if effects have independent triggers/lifetimes;
- `disney-animation-principles` for performance and timing;
- vendor `openai-sprite-pipeline` as the preferred normalization workflow;
- vendor `2dimg2motion` as an optional reference-image-to-motion workflow.

### Storyboards and directing

Load:

- `storyboard-and-directing`;
- vendor `inference-storyboard-creation`;
- `disney-animation-principles` for animated performance;
- optional `director-skills` when screenplay/continuity/model-export routing is useful.

### Generated video

Load:

- `ai-video-production`;
- `storyboard-and-directing` for more than one beat/shot;
- `character-consistency` for recurring subjects;
- `mascot-motion` for mascot/pet performance;
- `character-effects-language` when signature effects must remain causal across shots;
- `disney-animation-principles` for animated subjects;
- choose exactly one primary execution backend first: `inference-ai-video-generation`, `higgsfield-generate`, or local `comfyui-video-pipeline`.

Do not call multiple paid backends merely to compare them unless comparison is part of the task.

### Motion graphics and deterministic video

Prefer deterministic composition when exact typography, layout, timing, transitions or reusable templates matter more than generative motion. Use `hyperframes-faceless-explainer` when its text-to-motion-graphics route fits. Combine generated image/video assets only where they add value.

### Product mockups / product photography

Load `concept-and-style` if art direction is not locked, then prefer `higgsfield-product-photoshoot`. Use `ads-product-photoshoot` when strict product fidelity, provenance and review gates are especially important. Do not alter packaging, geometry, label text or material identity unless explicitly requested.

### Human/fashion imagery

Use the general image backend plus a locked subject/reference contract. `photoreal-human-prompting` may be used when a non-editorial, less synthetic photographic result is desired. Use `higgsfield-product-photoshoot` for model-wearing/product interaction. Do not claim identity fidelity without comparing against supplied references.

### Game assets

Load:

- `game-asset-production`;
- `concept-and-style`;
- `character-consistency` for characters;
- `mascot-motion` for pet/mascot actors;
- `awful-sprite-production` for 2D animation;
- optional vendor `higgsfield-game-generation` for generation;
- optional `threejs-3d-generator` or `img2threejs` for 3D paths.

### 3D

Decide first whether the deliverable is:

- concept/reference only;
- generated mesh/GLB;
- rigged/animated asset;
- procedural Three.js reconstruction.

Use `img2threejs` for code-built procedural reconstruction; use `threejs-3d-generator` for provider-backed GLB/FBX generation; use Higgsfield when its generated 3D route is already the chosen backend. Never call a 2D concept image a 3D asset.

## Vendor installation

List candidates:

```bash
python scripts/vendor_skills.py list
python scripts/vendor_skills.py list --category sprites
python scripts/vendor_skills.py list --tier core
```

Inspect before installing:

```bash
python scripts/vendor_skills.py info openai-sprite-pipeline
```

Install only what the current task needs:

```bash
python scripts/vendor_skills.py install openai-sprite-pipeline
```

Do not automatically install every optional skill. Overlapping skills increase routing ambiguity and context cost.

## Planning contract

Before generation, internally record:

- requested final artifact;
- source/reference assets and which are authoritative;
- identity invariants;
- style invariants;
- motion invariants when relevant;
- dimensions/aspect/frame count/runtime format;
- selected local skills;
- selected vendor skills;
- selected execution backend;
- required QA evidence.

## Quality rule

Generation is an iteration loop, not a one-shot prompt:

`brief -> constraints -> reference/identity lock -> concept/key poses -> generation -> inspect -> diagnose -> surgical correction -> normalize/export -> final QA`

Never improve a failed generation by randomly appending generic quality adjectives. Diagnose the actual failure: identity drift, pose ambiguity, composition, temporal discontinuity, anatomy, material, camera, lighting, text, scale, anchor, loop seam or model limitation.
