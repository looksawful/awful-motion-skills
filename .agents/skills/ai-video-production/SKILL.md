---
name: ai-video-production
description: Plan, generate, inspect and assemble AI video while preserving character identity, shot continuity, camera logic and motion intent. Use for text-to-video, image-to-video, reference-to-video and multi-shot AI animation.
---

# AWFUL AI video production

A video model is a shot generator, not a substitute for directing, continuity or editing.

## Choose the production mode first

Classify the job as one of:

- single text-to-video shot;
- image-to-video shot;
- first/last-frame or keyframe-conditioned shot;
- reference/identity-conditioned shot;
- multi-shot sequence;
- animated short;
- talking/performing character;
- hybrid generative + deterministic composition.

Do not force a multi-shot idea into one long generative clip merely because the provider accepts a longer duration.

## Required companion rules

- Use `storyboard-and-directing` for more than one narrative beat or camera setup.
- Use `character-consistency` for recurring people/characters/pets.
- Use `disney-animation-principles` for stylized character/object performance.
- Use `concept-and-style` when art direction is not already locked.

## Shot contract

Before generation define:

- shot purpose;
- subject and identity reference;
- start state;
- end state;
- one primary action;
- important secondary action;
- camera framing;
- camera movement, if any;
- subject movement path;
- environment motion;
- duration;
- intended cut point;
- sound/dialogue requirement;
- continuity inherited from previous shot;
- continuity handed to next shot.

Prefer one major camera idea and one major subject action per short shot. Generators become less reliable when a short clip combines several independent camera moves, redesigns, complex actions and environment transitions.

## Prompt order

Write prompts causally, roughly in this order:

1. subject/identity and locked appearance;
2. setting and spatial relation;
3. start pose/state;
4. primary action over time;
5. physical follow-through/secondary motion;
6. camera framing/movement;
7. lighting/material/style constraints;
8. end pose/state;
9. explicit continuity/negative constraints.

Prefer temporal descriptions such as:

`weight shifts left -> torso turns -> coat lags -> head catches up -> glasses glint at the extreme -> body stops -> coat overshoots -> settle`

over decorative phrases such as `dynamic cinematic smooth animation`.

## Identity strategy

For recurring characters:

- establish approved master references first;
- reuse the minimum strong reference set;
- keep costume/version explicit;
- generate difficult new views as approved stills before asking the video model to invent them during motion;
- use first-frame/image conditioning when identity matters more than open-ended composition;
- do not accept a shot with face/costume drift merely because its movement is attractive.

## Keyframe strategy

When control matters, split the problem:

1. generate/approve the still key pose;
2. verify identity/composition;
3. animate from the approved image;
4. inspect temporal behavior;
5. repair only the failing layer.

For transitions that require exact endpoints, prefer first/last-frame or keyframe-conditioned workflows where supported.

## Motion and physics

Specify apparent material properties:

- body mass;
- cloth stiffness;
- hair weight;
- prop inertia;
- foot/ground contact;
- impact response;
- wind direction;
- gravity/up direction;
- rigid vs deformable parts.

Reject floaty motion when weight/contact matters. Reject random deformation when the object should remain rigid.

## Camera discipline

Camera motion must have a reason. Define start framing, path and end framing. Avoid combining dolly, orbit, zoom, roll and handheld shake unless the shot specifically requires that choreography.

For continuity across cuts, track:

- screen direction;
- eyeline;
- subject side/orientation;
- focal subject size;
- light direction;
- environment geography;
- prop state;
- action phase.

## Backend choice

Choose one primary backend per shot:

- `inference-ai-video-generation` for broad model/provider routing;
- `higgsfield-generate` for its reference-aware image/video/3D ecosystem;
- `comfyui-video-pipeline` for local controllable workflows;
- `minimax-h3-prompt-writing` when H3 is the selected model.

Inspect backend capabilities before promising first/last frame, reference video, audio, lip sync or a particular resolution. Model features change.

## Multi-shot workflow

`script/brief -> visual bible -> character/environment anchors -> storyboard -> shot manifest -> keyframes -> per-shot generation -> shot QA -> assembly -> audio -> final continuity review`

Maintain a shot manifest with:

- shot id;
- duration;
- aspect ratio/resolution;
- references;
- prompt version;
- selected model/workflow;
- seed when meaningful;
- input/output files;
- continuity notes;
- known defects;
- approval state.

## Inspection gate

Inspect actual output, not only prompts. Check:

- subject identity;
- anatomy/geometry stability;
- action readability;
- contact/weight;
- camera path;
- background topology;
- object permanence;
- costume/prop continuity;
- text/logos if present;
- temporal flicker;
- frame-edge mutations;
- start/end usefulness for editing;
- loop seam if looping;
- audio sync when applicable.

## Repair policy

Diagnose before regenerating. Choose the smallest repair:

- prompt correction;
- stronger reference/keyframe;
- shorter shot;
- split into two shots;
- different model/workflow;
- video edit/reframe;
- inpaint still/keyframe then regenerate motion;
- deterministic compositing for text/UI/effects;
- hide a minor defect with an editorial cut only when it does not damage meaning.

Do not call repeated blind regeneration a pipeline.
