# Visual production pipelines

These recipes show how an agent should combine AWFUL local contracts and reviewed vendor specialists. They are routing defaults, not mandatory provider stacks.

When an approved visual/character/mascot bible exists in `looksawful/awful-picture-skills`, use its canonical still and appearance invariants as upstream identity truth. AWFUL MOTION owns temporal behavior, directing, frame sequencing and temporal QA.

## 1. Character from one approved reference

Goal: produce a reusable character package without losing source identity.

```text
approved reference
-> character-consistency
-> concept-and-style only when visual language needs clarification
-> inference-character-design-sheet or selected image backend
-> turnaround + expression + pose sheets
-> visual-quality-review
-> approved character master/bible
```

Rules:

- the approved source remains the identity source;
- generated side/back views do not override the source front view;
- uncertain unseen details are explicit design decisions;
- lock hard invariants before generating motion.

## 2. Living pet / mascot / desktop character

Goal: build a personality-driven state system and production-ready animation set.

```text
approved visual bible/reference
-> character-consistency
-> mascot-motion
-> disney-animation-principles
-> character-effects-language when signature FX exist
-> state/action inventory
-> key poses/extremes
-> awful-sprite-production for raster/frame output
-> openai-sprite-pipeline for normalization
-> optional openai-hatch-pet for Codex-pet runtime conventions
-> optional svg-character-animator for vector/state-machine runtime
-> playback + loop + target-size QA
-> visual-quality-review
```

Recommended state categories:

- low-amplitude idle variants;
- blink/breath/gaze/micro-reaction;
- directional attention;
- locomotion;
- click/hover/attention response when used in UI;
- emotional reactions specific to the character;
- one-shot signature actions;
- enter/exit/rest/sleep when the runtime needs them;
- transitions between states;
- signature effects tied to specific physical or personality events.

Do not make every idle state bounce or trigger every optional effect once per loop. Character comes from timing, posture, holds, anticipation and restrained secondary motion.

## 3. Sprite set for a game character

Goal: runtime-ready actions rather than an illustrative sprite sheet.

```text
character master
-> game-asset-production runtime constraints
-> character-consistency
-> mascot-motion when the actor is a pet/mascot
-> disney-animation-principles
-> action list + direction list + fps/frame counts
-> key poses
-> awful-sprite-production
-> openai-sprite-pipeline or 2dimg2motion
-> normalize root/scale/alpha
-> atlas export + metadata
-> native-scale/in-engine QA
```

Lock cell size, pivot/root anchor, direction conventions, frame order and animation metadata before producing the complete set.

## 4. Character concept from a text brief

Goal: explore materially different directions, then lock one character.

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

Do not spend high-cost generation on dozens of polished renders before silhouette and proportion decisions exist.

## 5. Style from references

Goal: create a reusable visual system instead of repeatedly asking for "the same style".

```text
reference set
-> concept-and-style
-> optional design-dna
-> classify identity/style/composition/material/camera roles
-> extract shape/proportion/palette/material/light/camera/composition rules
-> define anti-rules
-> create style card
-> generate validation asset A
-> generate different validation asset B from same card
-> compare family resemblance and drift
```

The style card passes only if it produces related assets across different compositions without copying a source image.

## 6. Storyboard from script/chat/idea

Goal: convert narrative into shotable visual beats.

```text
idea/chat/script
-> story-character-writing when story structure is incomplete
-> storyboard-and-directing
-> scene geography
-> beat list
-> shot list
-> inference-storyboard-creation or film-storyboard-skill
-> generated panels with locked character/environment references
-> continuity review
-> timing pass
-> animatic-ready manifest
```

Each shot needs a visible narrative job and continuity handoff.

## 7. AI animated short / cartoon

Goal: multi-shot generated animation with recurring characters and controlled continuity.

```text
premise
-> story-character-writing
-> concept-and-style / approved picture-skill visual bible
-> character-consistency
-> mascot-motion for mascot/pet actors
-> character/environment masters
-> storyboard-and-directing
-> storyboard + shot manifest
-> disney-animation-principles
-> character-effects-language for recurring FX
-> keyframe stills
-> optional greybox-harness for complex geography/camera previs
-> ai-video-production
-> one selected generation backend per shot
-> shot QA
-> edit/assembly
-> sound/music/dialogue path when required
-> final continuity + visual-quality-review
```

Possible execution backends:

- `inference-ai-video-generation` for broad cloud model routing;
- `higgsfield-generate` for Higgsfield's reference/media ecosystem;
- local `comfyui-video-pipeline` for controllable local generation;
- `minimax-h3-prompt-writing` when H3 is explicitly selected.

Do not force a whole film into one generation request. Preserve approved stills, shot geography and continuity state across cuts.

## 8. Single image-to-video character shot

Goal: animate an approved still without redesigning the subject.

```text
approved still
-> character-consistency
-> mascot-motion when relevant
-> disney-animation-principles
-> character-effects-language when signature FX occur
-> define start/end/action/overlap/camera
-> ai-video-production
-> image-to-video backend
-> inspect actual playback
-> repair identity/physics/camera failure if present
```

Use causal temporal descriptions. Keep the primary action narrow enough for the clip duration.

## 9. Complex AI-video scene with Blender previs

Goal: solve geography, blocking and camera before spending generations on the final shot.

```text
script/shot intent
-> storyboard-and-directing
-> greybox-harness
-> rough Blender geometry + actor proxies
-> camera/blocking/cut timing
-> render previs/key references
-> approve geography
-> ai-video-production
-> selected video backend
-> compare generated shot against previs intent
-> continuity QA
```

Use previs when spatial continuity, camera path, multiple actors or product choreography is difficult. Do not build a greybox for a simple static portrait shot.

## 10. Local ComfyUI image production

Goal: use local models, LoRAs and controls rather than a cloud-only workflow.

```text
visual brief
-> relevant AWFUL style/identity contract
-> comfyui-api capability check
-> inspect actual model/custom-node inventory
-> comfyui-prompt-engineer when model-specific prompting matters
-> comfyui-workflow-builder
-> queue workflow
-> retrieve output
-> visual-quality-review
```

Do not invent checkpoint names or custom-node availability. Build from actual local inventory.

## 11. Local ComfyUI video production

Goal: controllable local image-to-video/text-to-video generation.

```text
shot contract
-> ai-video-production
-> character-consistency when recurring subject
-> disney-animation-principles when stylized acting matters
-> comfyui-api
-> inventory check
-> comfyui-video-pipeline
-> workflow execution
-> playback/frame inspection
-> targeted correction
```

Model/VRAM/resolution assumptions are runtime facts and must be checked rather than hardcoded from old documentation.

## 12. Product mockup / virtual photoshoot

Goal: product-faithful studio/lifestyle/person-with-product imagery.

```text
product source asset
-> identify hard product invariants
-> concept-and-style for campaign direction if needed
-> higgsfield-product-photoshoot
-> studio/lifestyle/person/try-on/conceptual mode as required
-> verify packaging/geometry/logo/material fidelity
-> visual-quality-review
```

Use `ads-product-photoshoot` as an optional alternative when provenance and strict product-fidelity gates are central. Never silently redraw packaging or invent label text.

## 13. Product video

Goal: controlled commercial/product motion rather than a random cinematic clip.

```text
product identity/assets
-> product invariants
-> storyboard-and-directing
-> video-shotcraft for reusable shot recipes when appropriate
-> optional greybox-harness for complex 3D choreography
-> choose deterministic or generative execution per shot
-> ai-video-production for generated shots
-> assembly/sound
-> product fidelity + temporal QA
```

Exact labels, typography and logos should remain deterministic/composited when generation cannot guarantee them.

## 14. Human/fashion image set

Goal: recurring person or fashion subject with coherent photography.

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

## 15. Game asset pack

Goal: coherent runtime-ready 2D/3D production family.

```text
game/runtime constraints
-> game-asset-production
-> concept-and-style
-> asset manifest
-> per-category production:
   characters -> character-consistency + sprites/3D
   mascot/pets -> mascot-motion + effects language
   props -> image/3D route
   environment -> concept + tile/module rules
   VFX -> motion/readability rules
   UI art/icons -> coherent sheet/set generation
-> runtime-aware QA
```

Generate representative hero and secondary assets early to prove the visual system scales before producing the entire inventory.

## 16. 2D concept to 3D game/web asset

Goal: turn an approved image into an actual 3D deliverable.

### Procedural Three.js route

```text
approved image
-> game-asset-production constraints
-> img2threejs
-> staged reconstruction
-> visual comparison
-> pivot/material/animation readiness checks
```

### Generated GLB/FBX route

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

## 17. Vector mascot / UI pet

Goal: responsive runtime animation without raster sprite atlases.

```text
approved vector character
-> character-consistency
-> mascot-motion
-> disney-animation-principles
-> character-effects-language when needed
-> svg-character-animator
-> define state machine + transitions
-> idle/action/reaction implementation
-> runtime interaction QA
```

Use this when SVG structure can remain stable and runtime-driven states are more useful than pre-rendered frames.

## 18. Deterministic explainer / motion graphics

Goal: precise type/layout/chart/UI motion that remains reproducible.

```text
script/content
-> storyboard-and-directing
-> design/style lock
-> hyperframes-animation / hyperframes-faceless-explainer / video-shotcraft / manim-video
-> generated media only for selected assets or shots
-> exact typography/layout/timing verification
-> render
-> full playback QA
```

Use deterministic rendering whenever generative video would make text, diagrams, layout or timing harder to control.

## 19. Reconstruct an owned/reference motion piece as editable code

Goal: reproduce the observable timing/layout/motion structure of material the user is authorized to use as editable Remotion-style code.

```text
reference video
-> extract frames/timing evidence
-> storyboard-and-directing
-> remotion-clone-video
-> implement composition
-> render representative stills
-> compare against reference
-> iterate locally
-> full render + playback QA
```

Reconstruct observable behavior and layout; do not infer unavailable source project internals as facts.

## 20. Turn a visual tutorial into a reusable agent skill

Goal: capture a demonstrated workflow as evidence-grounded instructions for later agents.

```text
tutorial/video/course
-> video-to-skill
-> identify demonstrated steps, parameters, dependencies and checkpoints
-> separate demonstrated facts from adaptation
-> create local/vendor candidate skill
-> add provenance/source references
-> test the procedure where tooling exists
-> review for conflicts with AWFUL contracts
```

This route is especially useful when a visual technique must be reproduced strictly from a tutorial rather than improvised from a transcript summary.

## 21. Visual review / repair only

Goal: audit existing generated media rather than regenerate from scratch.

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
