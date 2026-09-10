# Visual skill catalog

This catalog explains the reviewed external skills declared in `skills/vendor/registry.json` and `skills/vendor/registry.extra.json`, how they fit the AWFUL local contracts, and where overlapping tools should not be combined blindly.

The registry is capability-oriented. One image backend plus strong identity, directing, sprite and QA skills is usually more useful than several near-identical generators.

## Local AWFUL contracts

These are authoritative inside this repository. Vendor skills are execution specialists beneath them.

| Local skill | Responsibility |
|---|---|
| `visual-production-router` | classify the requested artifact and choose the smallest correct pipeline |
| `disney-animation-principles` | performance, weight, timing, spacing, arcs, overlap, staging and appeal |
| `character-consistency` | preserve recurring identity across images, views, frames and shots |
| `mascot-motion` | turn mascot/pet personality into posture, tempo, idle, reaction and state behavior |
| `character-effects-language` | causal reusable glints, impact marks, dust, trails, smears and signature effects |
| `concept-and-style` | art direction, reference roles and reusable visual-language specification |
| `awful-sprite-production` | frame planning, sprite geometry, anchors, loops, normalization and effects |
| `story-character-writing` | characters, scenes, dialogue and game/animation narrative as visible action |
| `storyboard-and-directing` | shot design, camera, blocking, geography, continuity and animatic planning |
| `ai-video-production` | generated-shot contracts, manifests, backend selection and temporal QA |
| `game-asset-production` | runtime-aware coherent 2D/3D asset systems |
| `visual-quality-review` | inspect actual artifacts and diagnose visual/temporal/technical defects |

When an approved visual/character/mascot bible exists in `looksawful/awful-picture-skills`, its canonical still and appearance invariants are upstream identity truth. AWFUL MOTION consumes those locks and owns temporal behavior.

## Stable core execution skills

| Registry id | Main role | Best use | Execution |
|---|---|---|---|
| `openai-imagegen` | general image generation/editing | concept images, edits, reference-guided generation and source imagery | host-native or API/CLI |
| `openai-sprite-pipeline` | sprite generation + normalization | action strips, scale/anchor normalization and preview QA | local processing + image backend |
| `inference-ai-image-generation` | multi-model image routing | GPT Image, FLUX, Gemini, Seedream and other image models through one route | cloud API |
| `inference-ai-video-generation` | multi-model video routing | text/image/reference video and provider/model routing | cloud API |
| `inference-character-design-sheet` | character reference sheets | turnarounds, expressions, palettes and consistency-oriented sheets | prompt + cloud tooling |
| `inference-storyboard-creation` | storyboard planning | shot vocabulary, camera, continuity, panels and animatic preparation | prompt + cloud tooling |
| `comfyui-api` | local ComfyUI execution | queue workflows, inspect availability, monitor jobs and retrieve results | local |
| `comfyui-workflow-builder` | ComfyUI graph construction | txt2img, img2img, inpaint, ControlNet, LoRA and upscale workflow JSON | local |
| `comfyui-video-pipeline` | local AI video | Wan/FramePack/AnimateDiff-style video routes based on actual local inventory | local |
| `higgsfield-generate` | broad media generation | image, video, reference workflows and provider-specific 3D/audio routes | cloud API |

## Stable recommended specialists

| Registry id | Main role | Best use | Execution |
|---|---|---|---|
| `openai-hatch-pet` | pet/mascot atlas workflow | Codex-pet-style state atlases and pet animation QA | local + image backend |
| `comfyui-prompt-engineer` | model-specific prompt syntax | FLUX/SDXL/Wan prompting differences in local ComfyUI | local/prompt |
| `higgsfield-product-photoshoot` | product/mockup/fashion imagery | studio, lifestyle, person-with-product, try-on, hero/banner and conceptual product | cloud API |
| `higgsfield-game-generation` | generated game assets | sprites, tileable textures, animated 3D assets and game audio | cloud API |
| `ip-studio` | reusable 2D character identity | persistent character/mascot/pet packages and derivative states | prompt + image backend |
| `2dimg2motion` | reference image to sprite motion | action frames and sprite-sheet generation from locked 2D art | prompt + image backend |
| `minimax-h3-prompt-writing` | H3 video prompting | text/image/frame/reference-conditioned H3 prompt structure | prompt-only |
| `hyperframes-faceless-explainer` | deterministic motion video | typography, diagrams and HTML/GSAP-rendered explainers | local |
| `img2threejs` | procedural image-to-3D | reconstruct reference objects/characters as staged Three.js code | local |
| `design-dna` | reference/style decomposition | structured design tokens, visual language and effect analysis | prompt-only |

## Extra reviewed motion/video specialists

These live in `registry.extra.json`. They are useful distinct capabilities rather than default dependencies.

| Registry id | Main role | Best use | Execution |
|---|---|---|---|
| `video-shotcraft` | reusable shot recipes | cinematic/product video, 2.5D moves, beat-synced edits and Remotion production | local + runtime |
| `greybox-harness` | Blender previs | lock scene geography, camera, blocking and cut timing before expensive generated-video shots | local Blender |
| `cinematic-director` | directing/previs | beats, blocking, coverage, shot rationale, keyframes and continuity | prompt-only |
| `svg-character-animator` | vector character runtime | SVG mascot/UI pet state machines, transforms, morphs, idle/action states | local code |
| `hyperframes-animation` | deterministic animation knowledge | GSAP/Lottie/Three.js/CSS/WAAPI motion inside HyperFrames | local |
| `remotion-clone-video` | reference reconstruction | frame-extract -> storyboard -> code -> render-stills -> compare for editable Remotion recreation | local |
| `video-storyboard-gen` | generated-video storyboard specialist | shot lists, continuity and Seedance-oriented prompt output | prompt-only |
| `film-storyboard-skill` | sequence-board generation | script-to-storyboard and image-generation-oriented panel planning | prompt + image backend |
| `video-to-skill` | tutorial workflow extraction | turn visual-production tutorials/courses into evidence-grounded reusable skills | local + media tools |
| `manim-video` | programmatic explainer animation | diagrams, algorithms, educational/data storytelling with deterministic Python animation | local |
| `marketingskills-video` | commercial video routing | product demos, social/commercial video context across AI/programmatic tools | prompt + selected runtime |
| `animation-review` | coded UI/web motion critique | specialist review of interface/web animation craft | review-only |

## Optional specialists from the stable registry

| Registry id | Main role | Best use | Execution |
|---|---|---|---|
| `threejs-3d-generator` | generated 3D assets | Tripo-backed text/image-to-3D, texturing, rigging, retargeting, GLB/FBX | cloud API |
| `photoreal-human-prompting` | less synthetic photography prompts | people/fashion/lifestyle imagery when generic results look overprocessed | prompt-only |
| `oil-icon` | coherent generated icon sets | sheet-first icon generation, slicing and transparent output | local + image backend |
| `ads-product-photoshoot` | product-fidelity photo variants | product advertising with explicit fidelity/provenance/review gates | image-backend dependent |
| `director-skills` | filmmaking workflow router | story, screenplay scenes, shot lists, visual bibles, continuity and prompt packages | prompt-only |

## Reference-only workflows

These are useful research/design references but are intentionally not installable as generic runtime skills.

| Registry id | Why useful | Why reference-only |
|---|---|---|
| `minimax-3d-animation-short` | end-to-end animated-short workflow from story through characters, shots, generation and review | tied to MiniMax Hub Canvas execution |
| `minimax-3d-animation-short-research` | independently captured version of the same broad short-film workflow | platform-specific MiniMax Hub runtime |
| `tencent-workrally` | project/series/shot/asset schemas plus image/video/audio/3D production management | depends on WorkRally platform |
| `animation-principles-research` | broad external interpretation of the classical animation principles | AWFUL's local normalized Disney-principles contract remains authoritative |

## Provider overlap rules

### Image generation

Pick one primary backend first. `openai-imagegen`, `inference-ai-image-generation`, Higgsfield and ComfyUI overlap at execution level. Do not load all of them unless the task explicitly requires provider comparison or fallback planning.

Combine the chosen backend with non-overlapping contracts:

- `character-consistency` for identity;
- `concept-and-style` for art direction;
- `inference-character-design-sheet` for turnarounds/expressions;
- `awful-sprite-production` + `openai-sprite-pipeline` for animation frames;
- `visual-quality-review` for acceptance.

### Mascots and pets

Use local `character-consistency + mascot-motion + disney-animation-principles`. Add `character-effects-language` only if signature FX exist. Add `awful-sprite-production` for frame output. `openai-hatch-pet`, `openai-sprite-pipeline`, `ip-studio`, `2dimg2motion` and `svg-character-animator` are different execution/specialization layers, not five substitutes for the same contract.

### Video generation

Choose cloud multi-model routing, Higgsfield or local ComfyUI based on reference needs, available models, privacy/local compute, cost and control. `minimax-h3-prompt-writing` is a model-specific prompt layer, not a competing general backend.

For multi-shot work, use `storyboard-and-directing` first. Use `greybox-harness` when scene geography/camera blocking is difficult enough to justify previs before generation.

### Deterministic motion

Use `hyperframes-animation`, `hyperframes-faceless-explainer`, `video-shotcraft`, Remotion-style routes or Manim when exact text, graphics, UI, timing or reproducibility matters more than generative motion. Generated video is not automatically the best medium for every animated deliverable.

### Style

Use `concept-and-style` as the model-neutral source of truth. `design-dna` is a structured analysis specialist. Provider-specific style libraries may inform prompt construction but should not become the project's only style definition.

### 3D

Choose by desired artifact:

- code-built procedural Three.js: `img2threejs`;
- generated GLB/FBX with provider-backed rig/texturing: `threejs-3d-generator`;
- Blender previs, not final asset generation: `greybox-harness`;
- Higgsfield ecosystem: `higgsfield-generate` / `higgsfield-game-generation`;
- 2D concept only: use the image/concept pipeline instead of treating a render as a 3D asset.

## Particularly useful evaluated projects not promoted to default routing

- `freestylefly/awesome-gpt-image-2` / `gpt-image-2-style-library`: a large current GPT-Image-2-specific style/template library. Useful for provider-specific prompt exploration, but `concept-and-style` remains the canonical model-neutral style layer.
- `jiemianduan/image-to-prompt`: a good reverse-prompt workflow that distinguishes observation from inference. Its main responsibility overlaps the stricter reference decomposition already enforced locally.
- broad catch-all skill collections: excluded when a smaller upstream specialist has clearer provenance and less routing ambiguity.

## Installation examples

Character/sprite production:

```bash
python scripts/vendor_skills.py install inference-character-design-sheet
python scripts/vendor_skills.py install openai-sprite-pipeline
```

Pet/mascot runtime support:

```bash
python scripts/vendor_skills.py install openai-hatch-pet
python scripts/vendor_skills.py install svg-character-animator
```

Local ComfyUI image/video production:

```bash
python scripts/vendor_skills.py install comfyui-api
python scripts/vendor_skills.py install comfyui-workflow-builder
python scripts/vendor_skills.py install comfyui-prompt-engineer
python scripts/vendor_skills.py install comfyui-video-pipeline
```

Product/person/mockup production:

```bash
python scripts/vendor_skills.py install higgsfield-product-photoshoot
```

Previs + generated video:

```bash
python scripts/vendor_skills.py install greybox-harness
python scripts/vendor_skills.py install inference-ai-video-generation
```

Deterministic motion/video:

```bash
python scripts/vendor_skills.py install hyperframes-animation
python scripts/vendor_skills.py install video-shotcraft
```

3D/game asset production:

```bash
python scripts/vendor_skills.py install img2threejs
python scripts/vendor_skills.py install higgsfield-game-generation
```

The installer records upstream commit provenance in each local `.agents/vendor/<id>/.awful-vendor.json`. Installed copies are runtime state and remain gitignored.
