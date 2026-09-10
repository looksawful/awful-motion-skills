---
name: disney-animation-principles
description: Use for designing, generating, implementing, reviewing or repairing animation, sprite sheets, character motion, motion graphics, UI motion and generated video using the classical 12 principles of animation.
---

# 12 animation principles for AI agents

Use the classical 12 principles as motion constraints. Do not treat them as a style preset and do not force all twelve into every shot.

## Required workflow

1. Identify the primary action and intended feeling.
2. Establish mass, material, flexibility and contact conditions.
3. Block key poses/states before polishing in-betweens.
4. Decide which principles materially improve this motion.
5. Implement timing, spacing, arcs, anticipation, overlap and exaggeration intentionally.
6. Add secondary actions only after the primary action reads clearly.
7. Inspect silhouettes, continuity and settling behavior.
8. Review against `docs/animation-review-checklist.md`.

## 1. Squash and Stretch

### Agent instruction

Use deformation to communicate weight, flexibility, impact, acceleration or softness while preserving perceived volume.

### Do

- compress a flexible form at impact or load;
- stretch along the direction of fast motion or release;
- compensate one axis when another axis changes so the subject does not appear to gain/lose mass unintentionally;
- reduce deformation for rigid/heavy materials and increase it for soft/cartoon materials;
- apply subtle squash/stretch to faces, torsos, cloth or UI shapes only when it supports the style.

### Do not

- uniformly scale the whole subject as a lazy substitute for deformation;
- change identity, anatomy or object volume randomly between frames;
- squash rigid metal, stone or mechanical parts unless the visual language explicitly stylizes them.

### Pass condition

The viewer should read a change in force or elasticity, not a continuity error.

## 2. Anticipation

### Agent instruction

Prepare the viewer for a significant action with a readable setup in the opposite direction, a pause, a gaze shift, a compression or another precursor.

### Do

- crouch before a jump;
- pull a limb back before a strike;
- shift gaze/head before a turn;
- compress or reverse a UI element slightly before a large launch when stylistically appropriate;
- scale anticipation with action importance.

### Do not

- add anticipation to every tiny motion;
- make anticipation longer or more visually dominant than the action it prepares;
- reveal the wrong direction or create false intention unless misdirection is deliberate.

### Pass condition

The main action feels prepared and readable rather than abrupt.

## 3. Staging

### Agent instruction

Make the intended action, emotion or information the clearest thing in the frame.

### Do

- preserve a readable silhouette at important poses;
- reduce competing motion near the focal action;
- use composition, contrast, depth, camera, lighting and pauses to guide attention;
- sequence simultaneous actions so the viewer can parse them;
- design poses that read at thumbnail size when possible.

### Do not

- animate every layer with equal intensity;
- hide important contacts or gestures behind props/effects;
- let secondary VFX cover the face, hands or key silhouette unless that obstruction is intentional.

### Pass condition

A viewer can identify the primary action without explanation.

## 4. Straight Ahead Action and Pose to Pose

### Agent instruction

Choose the construction method based on the motion.

Use **pose to pose** when proportion, acting, readability, synchronization or exact endpoints matter. Define extremes, contacts, breakdowns and then in-betweens.

Use **straight ahead** when organic, chaotic or evolving motion benefits from frame-to-frame discovery: smoke, cloth accents, liquid, loose scribbles, some effects.

Use a hybrid for most complex shots: pose-to-pose for the main body, straight-ahead for secondary/effects.

### Do not

- generate dozens of in-betweens before key poses are approved;
- allow straight-ahead generation to drift character identity or proportions;
- over-control organic effects until they become mechanically repetitive.

### Pass condition

Key storytelling poses remain intentional while fluid elements retain life.

## 5. Follow Through and Overlapping Action

### Agent instruction

Different parts must not start, stop and reverse at exactly the same time unless the object is intentionally rigid.

### Do

- let hair, sleeves, coat hems, straps, tails, jewelry or loose props lag behind the driver;
- let secondary masses continue briefly after the torso/root stops;
- add overshoot and settle proportional to mass, stiffness and damping;
- offset related parts by a few frames or by equivalent continuous-time delays;
- preserve causal hierarchy: root leads, attached parts react.

### Do not

- offset every part by the same amount;
- let accessories move before their driver without a cause;
- keep oscillation running forever when the motion should settle.

### Pass condition

The subject feels connected but not rigidly synchronized.

## 6. Slow In and Slow Out

### Agent instruction

Use spacing to show acceleration and deceleration. Most natural actions do not move at constant speed.

### Do

- place poses/frames closer together near starts, stops and holds when easing is appropriate;
- use faster spacing through the middle of a decisive move;
- tune easing to mass: heavy objects generally resist acceleration/deceleration more than light ones;
- use near-linear motion only when mechanically appropriate.

### Do not

- apply identical generic ease-in-out curves to every property;
- over-ease impacts, cuts, mechanical snaps or deliberately sharp actions;
- confuse duration with spacing: two motions can have the same duration but different acceleration profiles.

### Pass condition

Velocity changes feel intentional and compatible with the subject's mass and mechanism.

## 7. Arcs

### Agent instruction

Favor curved trajectories for organic joints, limbs, heads, thrown objects, camera moves and attached parts unless mechanics require a straight path.

### Do

- check wrist, elbow, head, hips and feet trajectories across frames;
- use arcs for turns, gestures and swings;
- maintain coherent pivot points;
- allow ballistic objects to follow gravity-informed trajectories when realism is intended.

### Do not

- let hands or heads jitter through accidental zig-zags;
- force arcs onto pistons, sliders, rails or intentionally linear interfaces;
- change the center of rotation frame to frame without reason.

### Pass condition

Tracked points describe clean, intentional paths rather than noise.

## 8. Secondary Action

### Agent instruction

Add a subordinate action that reinforces character, emotion, rhythm or context without competing with the primary action.

### Do

- add a blink, breath, finger adjustment, clothing reaction or prop response;
- use a brief glasses glint at a head-turn or attitude beat when that is a character-specific motif;
- let secondary action occur at a lower visual priority than the main action;
- delay secondary detail until the main action already reads.

### Do not

- add unrelated decorative motion simply to make the frame busy;
- use secondary action to compensate for a weak primary pose;
- repeat the same sparkle/bounce/dust effect on every character.

### Pass condition

Removing the secondary action would make the shot less rich, but not change what the primary action means.

## 9. Timing

### Agent instruction

Use duration, holds and frame count to communicate weight, intent, emotion and rhythm.

### Do

- define action duration before generating dense in-betweens;
- use shorter timing for nervous/light/snappy motion and longer timing for heavy/deliberate motion, subject to context;
- insert holds where the viewer needs to read a pose or idea;
- vary rhythm instead of spacing every beat evenly;
- design loops with intentional phase lengths.

### Do not

- equate more frames with better animation;
- keep all actions at the same tempo;
- make important poses so brief that they cannot be read.

### Pass condition

The motion's apparent weight and mood agree with the intended performance.

## 10. Exaggeration

### Agent instruction

Amplify the clearest truthful idea in the motion instead of adding random distortion.

### Do

- push a silhouette, anticipation, expression, spacing, recoil or reaction beyond literal realism when the style allows;
- exaggerate one or two meaningful dimensions rather than everything simultaneously;
- preserve internal logic: a pushed anticipation should produce a correspondingly readable action;
- scale exaggeration to style, shot size and emotional intensity.

### Do not

- confuse exaggeration with noise, extra effects or arbitrary scale changes;
- destroy identity or material logic unless transformation is intentional;
- push every beat equally, which removes contrast.

### Pass condition

The intended idea reads faster and stronger without becoming incoherent.

## 11. Solid Drawing / Solid Form

### Agent instruction

Maintain convincing structure, volume, balance and perspective across motion. In non-drawn media, interpret this as solid form and spatial consistency.

### Do

- preserve character proportions and recognizable volumes across frames;
- keep feet, hands and props attached consistently;
- respect perspective and foreshortening;
- preserve center of gravity and believable balance;
- avoid accidental left/right symmetry in expressive poses when asymmetry improves life;
- for 3D/UI/object motion, preserve spatial construction and pivot logic.

### Do not

- let anatomy, costume geometry, facial features or object topology mutate between frames;
- allow contact points to slide unless sliding is part of the motion;
- mistake model inconsistency for expressive deformation.

### Pass condition

The subject looks like the same constructed object/character throughout the sequence.

## 12. Appeal

### Agent instruction

Make the motion and poses engaging, readable and specific to the subject. Appeal does not mean cute, smooth or conventionally beautiful.

### Do

- preserve distinctive silhouette, rhythm, attitude and character-specific behavior;
- design poses with clear line of action;
- use asymmetry and contrast where useful;
- keep motion consistent with the requested personality and art direction;
- make even ugly, awkward, grotesque or deadpan characters intentionally designed rather than generic.

### Do not

- default to anime, glossy mascot, cute bounce or commercial-cartoon mannerisms unless requested;
- smooth away awkwardness when awkwardness is part of the character;
- replace specificity with generic polish.

### Pass condition

The subject feels intentionally authored and recognizable from its motion, not merely technically animated.

## Cross-principle priority

When principles conflict, use this order:

1. intent and readability;
2. identity and continuity;
3. timing and weight;
4. staging and silhouette;
5. arcs/easing/overlap;
6. secondary action and effects;
7. decorative exaggeration.

A clear restrained action is better than a noisy action that technically contains more principles.

## Medium-specific translation

### Sprite sheets / frame generation

Block extremes first. Keep camera, scale, costume and identity locked. Generate contact/breakdown poses before dense in-betweens. Separate character motion from effects whenever the pipeline allows it.

### UI / CSS / GSAP

Translate principles into state transitions, transform origins, easing curves, overshoot, hierarchy and sequencing. Avoid character-like squash/stretch when it harms interface clarity. Respect reduced-motion preferences.

### 3D / Blender

Apply principles through poses, graph-editor spacing, arcs, overlap, constraints, secondary simulations and silhouette. Do not let simulations replace authored primary action.

### Motion graphics / After Effects

Use graph curves, anticipation, overshoot, stagger and hierarchy deliberately. Avoid applying the same easing preset to every layer.

### Generated video

Describe motion causally across time: setup -> action -> follow-through -> settle. Lock identity, camera and scene continuity. Explicitly state which elements lead, lag, deform and recover.

## Final instruction

Never report “applied Disney principles” as evidence by itself. State or verify the observable motion decisions that implement the relevant principles.
