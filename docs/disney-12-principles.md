# The 12 classical animation principles

This document is a detailed reference for AI agents. The canonical project behavior lives in `.agents/skills/disney-animation-principles/SKILL.md`.

The principles were codified by Frank Thomas and Ollie Johnston in *The Illusion of Life: Disney Animation* (1981), based on practices developed by Disney animators. They are general animation principles, not instructions to copy a Disney visual style.

## Principle map

| # | Principle | Main question for an agent |
|---|---|---|
| 1 | Squash and Stretch | Does deformation communicate force, weight or flexibility without accidental volume drift? |
| 2 | Anticipation | Is the important action prepared so the viewer can read it? |
| 3 | Staging | Is the intended action/emotion the clearest event in the frame? |
| 4 | Straight Ahead / Pose to Pose | Is the sequence built with the right balance of planned key poses and organic frame-to-frame motion? |
| 5 | Follow Through / Overlap | Do attached parts lag, overshoot and settle according to physical/graphic hierarchy? |
| 6 | Slow In / Slow Out | Does spacing show intentional acceleration and deceleration? |
| 7 | Arcs | Do organic trajectories follow clean, believable paths? |
| 8 | Secondary Action | Does supporting motion add personality/context without stealing focus? |
| 9 | Timing | Do duration, spacing and holds communicate weight, mood and rhythm? |
| 10 | Exaggeration | Is the clearest truthful idea pushed enough for the chosen style? |
| 11 | Solid Drawing / Solid Form | Does the subject remain structurally consistent in volume, balance and perspective? |
| 12 | Appeal | Is the motion readable, specific and intentionally authored for this subject? |

## How agents should reason about the principles

The principles are interdependent. A jump is not solved by adding a squash frame. The agent must treat the motion as a causal chain:

`intent -> anticipation -> primary action -> contact/extreme -> follow-through -> settle`

Timing, spacing and arcs control how that chain unfolds. Staging controls whether the viewer can read it. Solid form protects continuity. Exaggeration increases clarity. Secondary action adds personality only after the primary action works.

## Priority by failure type

### If motion feels weak or unclear

Check, in order:

1. staging;
2. key poses;
3. anticipation;
4. timing;
5. exaggeration.

### If motion feels mechanical or robotic

Check:

1. slow in / slow out;
2. arcs;
3. overlapping action;
4. follow-through;
5. secondary action.

### If generated frames look unstable

Check:

1. solid form;
2. camera/framing continuity;
3. root/contact stability;
4. key-pose construction;
5. in-between generation drift.

### If motion is busy but still bad

Remove effects and secondary actions first. Repair the main action, timing and staging before adding polish.

## Character animation translation

For a character, decompose the body into a motion hierarchy:

`root/hips -> torso -> shoulders/head -> limbs -> hands/feet -> hair/clothing/accessories -> effects`

This hierarchy is not absolute, but it gives the model a causal default. A head turn may lead glasses and hair; a torso stop may be followed by coat and bag motion; a foot contact may produce a brief impact effect.

### Character-specific motifs

Signature effects should be attached to a readable cause and a personality beat.

Example: a character wearing dark glasses may get a short star-shaped specular glint when the head reaches a confident turn or pose. The glint should appear after/at the head orientation that catches the light, last briefly, and disappear before it becomes the main action.

Other motifs can include:

- delayed coat tails for a fashion-heavy silhouette;
- boot impact compression or dust for a heavier walk;
- jewelry lag on turns;
- loose sleeves trailing hand gestures;
- small idle asymmetries such as blink, breath or weight shift.

Do not assign the same motif to every character.

## Sprite-sheet translation

An agent making a sprite sheet should first decide the animation topology instead of directly generating a rectangular page of vaguely related poses.

For a non-looping action, a useful default structure is:

`rest -> anticipation -> extreme/action -> contact/overshoot -> recovery -> settle`

For a loop:

`key A -> transition -> key B -> transition -> key A`

The first and last states must connect not only in position, but also in velocity and overlapping-action phase.

### Sprite requirements

- consistent canvas and camera;
- consistent character scale;
- consistent anchor/root point;
- readable extremes;
- no duplicated frames pretending to be motion;
- no random costume/face/hand mutations;
- effects placed consistently relative to their source;
- transparent background when the production pipeline requires one;
- no labels or captions unless explicitly requested.

## UI and web motion translation

The principles should be translated, not copied literally.

Examples:

- **anticipation**: slight pre-press/compression before a large launch action;
- **staging**: animate the state change users must notice, not every neighboring element;
- **slow in/out**: use tailored easing based on interaction purpose;
- **follow-through**: restrained overshoot or stagger in a composed transition;
- **secondary action**: supporting icon/text detail after the primary navigation/state movement;
- **solid form**: stable layout, transform origin and spatial relationships;
- **appeal**: motion language appropriate to the product rather than generic bouncy presets.

Accessibility overrides flourish. If `prefers-reduced-motion` is relevant, preserve comprehension with a reduced or static transition.

## 3D translation

In 3D, the principles live primarily in pose design, curves, spacing, constraints, contact, silhouette and delayed secondary systems.

Agents should inspect:

- center of gravity;
- foot locking and contact;
- graph-editor spacing;
- motion trails/arcs;
- hierarchy of rotation offsets;
- cloth/hair/simulation damping;
- camera staging;
- silhouette at extremes.

Simulation is not a substitute for authored acting. The main performance should work before cloth, hair, particles or procedural secondary systems are enabled.

## Generated video translation

Text/image/video models should receive time-aware causal instructions rather than a pile of adjectives.

Prefer specifications like:

- character shifts weight to the rear foot;
- shoulders dip for anticipation;
- head and torso initiate the turn;
- coat hem lags by a fraction of the action;
- glasses catch a single brief glint at the turn extreme;
- body stops first, hair and coat overshoot and settle;
- camera remains locked;
- identity, outfit, proportions and lighting remain unchanged.

This is more reliable than requesting “smooth dynamic Disney-like animation,” which does not specify the motion and invites style drift.

## Sources

- Frank Thomas and Ollie Johnston, *The Illusion of Life: Disney Animation*, 1981.
- Adobe, “Understanding the 12 principles of animation”: https://www.adobe.com/creativecloud/animation/discover/principles-of-animation.html

The secondary source confirms the standard twelve-item list and summarizes their continued use across contemporary animation and web motion.
