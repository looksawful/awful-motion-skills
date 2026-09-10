---
name: character-effects-language
description: Use when a character, mascot or pet has recurring sparkles, glints, dust, impact marks, trails, glow, smears or other signature effects that must be causally triggered and consistent across animations.
---

# AWFUL Character Effects Language

Effects are secondary animation with causes, lifetimes and hierarchy. They are not stickers applied because the frame looks empty.

## Effects contract

For every recurring effect define:

- `name`;
- `owner`: character/prop/environment;
- `purpose`: readability, material cue, impact, emotion, rhythm or identity;
- `trigger`;
- `spawn_location` and attachment logic;
- `orientation` or plane behavior;
- `onset` relative to the primary action;
- `duration` or frame range;
- `shape_language`;
- `motion_path`;
- `growth_decay`;
- `opacity/brightness hierarchy`;
- `occlusion` behavior;
- `safe_zones` that must remain readable;
- `frequency`/cooldown for repeated states;
- `forbidden_contexts`;
- loop behavior when relevant.

## Causality rule

An effect must have a visible cause unless it is explicitly ambient/magical by design.

Examples:

- impact burst follows contact;
- dust follows foot/ground interaction;
- trail inherits velocity and direction from the moving source;
- cloth/hair smear follows fast motion of that part;
- lens/glasses glint follows a readable alignment of surface, head turn and key-light/view relation;
- emotion symbol follows the reaction beat, not an arbitrary timer.

## Glasses star-glint recipe

Use only for a character whose bible defines this as a signature motif.

```yaml
effect: glasses-star-glint
purpose: attitude/material accent
trigger:
  - head_turn_crosses_key_light
  - confident_pose_peak
spawn_location: one lens highlight point
orientation: follows lens plane
onset: at or just after pose peak
duration_frames: 2-4
shape_language: compact four-point star unless the character bible says otherwise
frequency: sparse
constraints:
  - never cover both eyes
  - never fire on every idle loop
  - never float independently of the glasses
  - preserve face readability
  - disappear cleanly before the next unrelated beat
```

## Disney-principle mapping

- **Staging:** effect never outranks the primary action unless the effect itself is the story beat.
- **Follow-through/overlap:** trails and residue may continue after the driver stops, proportional to their physical/graphic logic.
- **Arcs:** trailing elements inherit a coherent path rather than jitter.
- **Secondary action:** signature effects enrich personality but cannot rescue weak primary acting.
- **Timing:** short accents need clear onset/peak/decay; persistent effects need phase control.
- **Exaggeration:** amplify the meaningful cue, not every parameter at once.

## Layer model

Prefer conceptual separation:

1. character body;
2. attached props/accessories;
3. contact effects;
4. trailing effects;
5. expression/signature accents;
6. ambient effects.

Export separately when the runtime needs independent timing or when baking effects would make loops/variants harder to reuse.

## Loop rule

For loops, effects must either:

- complete their full birth/life/death cycle inside the loop; or
- maintain phase continuity across the seam.

Do not cut a sparkle, trail, smoke puff or dust particle in half at last-frame -> first-frame.

## Restraint

A signature effect is memorable partly because it is not constant. Prefer one or two effects strongly tied to the character over a universal collection of sparkles, glow, dust and bounce.

## Failure diagnosis

Reject/repair:

- effect with no causal trigger;
- effect covering the focal face/action;
- detached highlight/glint;
- wrong movement direction;
- effect appearing before its cause;
- identical effects pasted onto unrelated characters;
- loop-seam pop;
- effect geometry/style drifting between states;
- excessive frequency that turns a signature into visual noise.
