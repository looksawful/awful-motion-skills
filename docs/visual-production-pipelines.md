# Visual production pipelines

These recipes show how an agent should combine AWFUL local contracts and reviewed vendor specialists. They are routing defaults, not mandatory provider stacks.

## 1. Character from one approved reference

Goal: produce a reusable character package without losing the source identity.

Pipeline:

```text
reference image
-> character-consistency
-> concept-and-style only if visual language needs clarification
-> inference-character-design-sheet or selected image backend
-> turnaround + expression + pose sheets
-> visual-quality-review
-> approved character master/bible
```

Rules:

- the supplied/approved image remains the identity source;
- generated side/back views do not override the source front view;
- uncertain unseen details are explicit design decisions;
- lock hard invariants before generating motion.

## 2. Living pet / mascot / desktop character

Goal: create a personality-driven state system and sprite atlas.

Pipeline:

```text
approved character
-> character-consistency
-> disney-animation-principles
-> state/action inventory
-> key poses/extremes
-> awful-sprite-production
-> openai-sprite-pipeline
-> optional openai-hatch-pet for Codex-pet runtime conventions
-> normalize anchors/scale/alpha
-> playback/loop review
-> visual-quality-review
```

Recommended state categories:

- idle variants;
- blink/breath/micro-reaction;
- locomotion;
- look/turn directions;
- click/hover/attention reaction when used in UI;
- happy/annoyed/surprised/sleepy or other character-specific emotional states;
- one-shot signature actions;
- transitions between states;
- effects that are tied to specific physical/character events.

Do not make every idle state bounce. Personality should come from timing, pose and characteristic secondary motion.

## 3. Sprite set for a game character

Goal: production-ready actions rather than an illustrative sprite sheet.

Pipeline:

```text
character master
-> game-asset-production runtime constraints
-> disney-animation-principles
-> action list + direction list + fps/frame counts
-> key poses
-> awful-sprite-production
-> openai-sprite-pipeline or 2dimg2motion
-> normalize
-> atlas export
-> in-engine/native-scale QA
```

Lock cell size, pivot/root anchor, direction conventions and animation metadata before generating the full set.

## 4. Character concept from a text brief

Goal: explore several materially different directions, then lock one character.

Pipeline:

```text
brief
-> concept-and-style
-> silhouette/thumbnails
-> selected image backend
-> 3-6 distinct directions
-> select/refine
-> character-consistency
-> inference-character-design-sheet
-> turnaround/expression/material details
-> visual-quality-review
```

Do not generate dozens of polished full renders before silhouette/proportion decisions are made.

## 5. Style from references

Goal: create a reusable visual system instead of repeatedly asking for "the same style".

Pipeline:

```text
reference set
-> concept-and-style
-> optional design-dna
-> classify each reference role
-> extract shape/proportion/palette/material/light/camera/composition rules
-> define anti-rules
-> create style card
-> generate one validation asset
-> generate a second different asset from the same card
-> compare consistency
```

The style card passes only if it can reproduce family resemblance across different compositions without copying a source image.

## 6. Storyboard from script/chat/idea

Goal: convert narrative into shotable visual beats.

Pipeline:

```text
idea/chat/script
-> story-character-writing when story structure is incomplete
-> storyboard-and-directing
-> scene geography
-> beat list
-> shot list
-> inference-storyboard-creation
-> generated panels with locked character/environment references
-> continuity review
-> timing pass
-> animatic-ready manifest
```

Each shot needs a visible narrative job and continuity handoff.

## 7. AI animated short / cartoon

Goal: multi-shot generated animation with recurring characters and controlled continuity.

Pipeline:

```text
premise
-> story-character-writing
-> concept-and-style
-> character-consistency
-> character/environment masters
-> storyboard-and-directing
-> storyboard + shot manifest
-> disney-animation-principles for performance
-> keyframe stills
-> ai-video-production
-> one selected backend per shot
-> shot QA
-> edit/assembly
-> sound/music/dialogue path when required
-> final continuity + visual-quality-review
```

Possible execution backends:

- inference.sh multi-model video route;
- Higgsfield;
- local ComfyUI;
- MiniMax H3 with `h3-prompt-writing` when H3 is explicitly selected.

Do not force a whole film into a single generation request. Preserve approved stills as continuity anchors.

## 8. Single image-to-video character shot

Goal: animate an approved still without redesigning the character.

Pipeline:

```text
approved still
-> character-consistency
-> disney-animation-principles
-> define start/end/action/overlap/camera
-> ai-video-production
-> image-to-video backend
-> inspect actual playback
-> repair identity/physics/camera failure if present
```

Prefer action descriptions with temporal cause/effect. Keep the primary action narrow enough for the clip duration.

## 9. Local ComfyUI image production

Goal: use local models/LoRAs/controls rather than a cloud-only workflow.

Pipeline:

```text
visual brief
-> relevant AWFUL style/identity skill
-> comfyui-api capability check
-> inspect actual model/custom-node inventory
-> comfyui-prompt-engineer if model-specific prompting matters
-> comfyui-workflow-builder
-> queue workflow
-> retrieve output
-> visual-quality-review
```

Do not invent checkpoint names or custom-node availability. The workflow must be built from the actual local inventory.

## 10. Local ComfyUI video production

Goal: controllable local image-to-video/text-to-video generation.

Pipeline:

```text
shot contract
-> ai-video-production
-> character-consistency when recurring subject
-> comfyui-api
-> inventory check
-> comfyui-video-pipeline
-> workflow execution
-> playback/frame inspection
-> targeted correction
```

Model/VRAM/resolution assumptions are runtime facts and must be checked rather than hardcoded from documentation.

## 11. Product mockup / virtual photoshoot

Goal: product-faithful studio/lifestyle/person-with-product imagery.

Pipeline:

```text
product source asset
-> identify hard product invariants
-> concept-and-style for campaign direction if needed
-> higgsfield-product-photoshoot
-> studio/lifestyle/person/try-on/conceptual mode as required
-> verify packaging/geometry/logo/material fidelity
-> visual-quality-review
```

Use `ads-product-photoshoot` as an optional alternative when provenance and strict product-fidelity gates are central.

Never silently redraw packaging or invent label text.

## 12. Human/fashion image set

Goal: recurring person or fashion subject with coherent photography.

Pipeline:

```text
approved subject/reference assets
-> character-consistency adapted to person identity
-> concept-and-style
-> optional photoreal-human-prompting
-> selected image backend
-> inspect face/body/clothing/reference fidelity
-> visual-quality-review
```

For a model interacting with a product, route through `higgsfield-product-photoshoot` when appropriate.

## 13. Game asset pack

Goal: coherent runtime-ready 2D/3D production family.

Pipeline:

```text
game/runtime constraints
-> game-asset-production
-> concept-and-style
-> asset manifest
-> per-category production:
   characters -> character-consistency + sprites/3D
   props -> image/3D route
   environment -> concept + tile/module rules
   VFX -> motion/readability rules
   UI art/icons -> coherent sheet/set generation
-> runtime-aware QA
```

Generate representative hero and secondary assets early to prove that the style system scales before producing the entire inventory.

## 14. 2D concept to 3D game/web asset

Goal: turn an approved image into an actual 3D deliverable.

Choose one route:

### Procedural Three.js

```text
approved image
-> game-asset-production constraints
-> img2threejs
-> staged reconstruction
-> visual comparison
-> pivot/material/animation readiness checks
```

### Generated GLB/FBX

```text
approved image
-> game-asset-production constraints
-> threejs-3d-generator or selected Higgsfield 3D route
-> generate/model
-> texture
-> rig/animate when required
-> export
-> runtime import QA
```

A render preview is evidence about appearance, not proof that topology, rig or runtime import is correct.

## 15. Deterministic explainer / motion graphics

Goal: precise type/layout/chart/UI motion that should remain repeatable.

Pipeline:

```text
script/content
-> storyboard-and-directing
-> design/style lock
-> hyperframes-faceless-explainer or equivalent deterministic composition
-> generated media only for selected shots/assets
-> exact typography/layout/timing verification
-> render
-> final playback QA
```

Use deterministic rendering whenever generative video would make text, diagrams, layout or timing harder to control.

## 16. Visual review / repair only

Goal: audit existing generated media rather than generate from scratch.

Pipeline:

```text
artifact + brief/reference
-> visual-quality-review
-> load only the domain skill needed for diagnosis
-> classify blocker/major/minor/note
-> choose smallest repair
-> regenerate/edit/normalize only affected layer
-> re-inspect
```

Do not restart an entire production when a local repair preserves more approved work.
