# Visual skill catalog

This catalog explains the reviewed external skills declared in `skills/vendor/registry.json` and how they fit the AWFUL local contracts.

The registry is intentionally capability-oriented. Multiple general image generators are less useful than one image backend plus strong skills for identity, style, sprites, directing and QA.

## Core execution and production skills

| Registry id | Main role | Best use | Execution |
|---|---|---|---|
| `openai-imagegen` | general image generation/editing | concept images, edits, reference-guided generation, mockup source images | host-native or API/CLI |
| `openai-sprite-pipeline` | sprite generation + normalization | action strips, scale/anchor normalization, preview QA | local processing + image backend |
| `inference-ai-image-generation` | multi-model image routing | GPT Image/FLUX/Gemini/Seedream and other image models through one route | cloud API |
| `inference-ai-video-generation` | multi-model video routing | text/image/reference video, model/provider comparison when genuinely needed | cloud API |
| `inference-character-design-sheet` | character reference sheets | turnarounds, expression sheets, palette/identity consistency | prompt + cloud tooling |
| `inference-storyboard-creation` | storyboard planning | shot vocabulary, camera, continuity, panel planning, animatic preparation | prompt + cloud tooling |
| `comfyui-api` | local ComfyUI execution | queue workflows, monitor jobs, retrieve results, offline workflow handoff | local |
| `comfyui-workflow-builder` | ComfyUI graph construction | txt2img, img2img, inpainting, ControlNet, LoRA, upscale workflow JSON | local |
| `comfyui-video-pipeline` | local AI video | Wan/FramePack/AnimateDiff-style local video routes based on actual inventory | local |
| `higgsfield-generate` | broad media generation | image, video, reference workflows, 3D/audio when Higgsfield is selected | cloud API |

## Recommended specialist skills

| Registry id | Main role | Best use | Execution |
|---|---|---|---|
| `openai-hatch-pet` | pet/mascot atlas workflow | Codex-pet-style state atlases and pet-specific animation QA | local + image backend |
| `comfyui-prompt-engineer` | model-specific prompt syntax | FLUX/SDXL/Wan-style prompt differences in local ComfyUI | local/prompt |
| `higgsfield-product-photoshoot` | product/mockup/fashion imagery | studio, lifestyle, person-with-product, try-on, hero/banner, conceptual product | cloud API |
| `higgsfield-game-generation` | generated game assets | sprites, tileable textures, animated 3D assets, game audio | cloud API |
| `ip-studio` | reusable 2D character identity | persistent character/mascot/pet package and derivative poses/states | prompt + image backend |
| `2dimg2motion` | reference image to sprite motion | action frames and sprite-sheet generation from locked 2D character art | prompt + image backend |
| `minimax-h3-prompt-writing` | H3 video prompting | text/image/frame/reference-conditioned H3 prompt structure | prompt-only |
| `hyperframes-faceless-explainer` | deterministic motion video | typography, diagrams, explainers and HTML/GSAP-rendered motion where exact layout matters | local |
| `img2threejs` | procedural image-to-3D | reconstruct reference objects/characters as staged Three.js code with visual correction | local |
| `design-dna` | reference/style decomposition | structured design tokens, visual language and effect analysis | prompt-only |

## Optional specialist skills

| Registry id | Main role | Best use | Execution |
|---|---|---|---|
| `threejs-3d-generator` | generated 3D assets | Tripo-backed text/image-to-3D, texturing, rigging, retargeting, GLB/FBX | cloud API |
| `photoreal-human-prompting` | less synthetic photography prompts | people/fashion/lifestyle images where ordinary generations look overly polished or artificial | prompt-only |
| `oil-icon` | coherent generated icon sets | sheet-first icon generation, slicing and transparent output | local + image backend |
| `ads-product-photoshoot` | product-fidelity photo variants | product advertising workflows with explicit fidelity/provenance/review gates | image-backend dependent |
| `director-skills` | filmmaking workflow router | story, screenplay scenes, shot lists, visual bibles, continuity and model prompt packages | prompt-only |

## Reference-only workflows

These are intentionally not installed as generic vendor skills by the manager because their execution depends on a specific platform/runtime. They remain useful design references.

| Registry id | Why it is useful | Why reference-only |
|---|---|---|
| `minimax-3d-animation-short` | strong story-first animated-short workflow with character/environment cards, shots, generation and review | designed around MiniMax Hub Canvas execution rather than a generic file-capable agent |
| `tencent-workrally` | project/series/shot/asset schemas plus image/video/audio/3D production management | depends on WorkRally platform and credentials |

## Local AWFUL skills and their responsibility

Vendor skills do not replace the repository's own rules.

| Local skill | Responsibility |
|---|---|
| `visual-production-router` | choose the smallest correct pipeline |
| `disney-animation-principles` | performance, weight, timing, arcs, overlap, staging and appeal |
| `character-consistency` | preserve recurring identity across images/frames/shots |
| `concept-and-style` | art direction, reference roles, reusable visual-language spec |
| `awful-sprite-production` | sprite geometry, anchors, loops, normalization, effects |
| `story-character-writing` | characters/scenes/dialogue/game narrative as visible action |
| `storyboard-and-directing` | shot design, camera, blocking, geography, continuity |
| `ai-video-production` | shot generation, backend selection, manifests and temporal QA |
| `game-asset-production` | runtime-aware coherent 2D/3D asset systems |
| `visual-quality-review` | inspect actual artifacts and diagnose defects |

## Provider overlap rules

### Image generation

Pick one primary backend first. `openai-imagegen`, `inference-ai-image-generation`, Higgsfield and ComfyUI overlap at execution level. Do not load all of them unless the task explicitly requires provider comparison or fallback planning.

The non-overlapping value usually comes from combining the backend with:

- `character-consistency` for identity;
- `concept-and-style` for art direction;
- `inference-character-design-sheet` for character sheets;
- `awful-sprite-production` + `openai-sprite-pipeline` for animation frames;
- `visual-quality-review` for acceptance.

### Video generation

Choose between cloud routing, Higgsfield or local ComfyUI based on reference needs, available models, privacy/local compute, cost and required control. `minimax-h3-prompt-writing` is a model-specific prompt layer rather than a competing general backend.

### Style

Use `concept-and-style` as the model-neutral source of truth. `design-dna` is a useful structured analysis specialist. Provider-specific style libraries may inform prompt construction but should not become the project's only style definition.

### 3D

Choose by desired artifact:

- code-built procedural Three.js: `img2threejs`;
- generated GLB/FBX with provider-backed rig/texturing: `threejs-3d-generator`;
- Higgsfield ecosystem: `higgsfield-generate` or `higgsfield-game-generation`;
- 2D concept only: use the image/concept pipeline instead of pretending a render is a 3D asset.

## Evaluated but not placed in the default registry

Some useful projects were deliberately not added as default routes because their role is already covered or their scope is too narrow.

- `freestylefly/awesome-gpt-image-2` / `gpt-image-2-style-library`: a large, current GPT-Image-2-specific style/template library. Useful for provider-specific prompt exploration, but `concept-and-style` remains the canonical model-neutral style layer.
- `jiemianduan/image-to-prompt`: solid reverse-prompt workflow that distinguishes observation from inference. Its core responsibility overlaps the stricter reference decomposition already enforced by `concept-and-style` and `character-consistency`.
- broad catch-all skill collections: excluded when a smaller upstream specialist has clearer provenance and less routing ambiguity.

These can be promoted into `registry.json` later if a concrete workflow demonstrates that they add distinct capability rather than duplicate context.

## Installation examples

Character/sprite production:

```bash
python scripts/vendor_skills.py install inference-character-design-sheet
python scripts/vendor_skills.py install openai-sprite-pipeline
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

3D/game asset production:

```bash
python scripts/vendor_skills.py install img2threejs
python scripts/vendor_skills.py install higgsfield-game-generation
```
