# Animation review checklist

Use this checklist after generation/implementation and before claiming an animation is complete.

Score each applicable item:

- `0` — failed or absent;
- `1` — present but weak/inconsistent;
- `2` — clear and intentional;
- `N/A` — genuinely not applicable.

Do not inflate the score by forcing principles that the shot does not need.

## Hard failures

Any applicable hard failure blocks approval regardless of total score:

- character/object identity drifts unintentionally between frames;
- costume, anatomy, face, prop, perspective or camera changes without cause;
- contact points teleport or slide unintentionally;
- the primary action cannot be identified from the animation itself;
- a loop has an obvious positional/velocity discontinuity when a seamless loop was requested;
- secondary effects hide or contradict the primary action;
- frame order or motion direction is incoherent;
- the result violates an explicit style, pose, camera or continuity constraint;
- reduced-motion behavior is required by the target product but missing.

## 1. Squash and Stretch

- [ ] Deformation communicates force, weight or flexibility.
- [ ] Perceived volume is preserved unless intentional transformation occurs.
- [ ] Rigidity/softness matches the material and style.
- [ ] Deformation returns cleanly to the intended resting form.

## 2. Anticipation

- [ ] Important actions have a readable setup when appropriate.
- [ ] Anticipation points toward the intended action rather than confusing it.
- [ ] Anticipation duration/intensity is proportional to the main action.

## 3. Staging

- [ ] The primary action is the strongest visual event.
- [ ] Key silhouettes and contacts remain readable.
- [ ] Camera, composition and effects do not obscure the action.
- [ ] Competing motions are sequenced or reduced.

## 4. Straight Ahead / Pose to Pose

- [ ] Key poses/extremes are intentional and readable.
- [ ] In-betweens preserve identity and trajectory.
- [ ] Organic/effect motion is allowed enough variation without uncontrolled drift.
- [ ] The chosen construction method matches the motion type.

## 5. Follow Through / Overlap

- [ ] Main mass leads attached secondary masses appropriately.
- [ ] Hair, cloth, accessories and loose parts lag/overshoot according to mass and stiffness.
- [ ] Settling motion decays instead of oscillating forever.
- [ ] Parts do not all start/stop on the same frame unless intentionally rigid.

## 6. Slow In / Slow Out

- [ ] Acceleration and deceleration are visible where appropriate.
- [ ] Easing is not an identical generic curve on every property.
- [ ] Snaps, impacts and mechanical moves remain sharp where they should.
- [ ] Spacing communicates mass and intention.

## 7. Arcs

- [ ] Organic points follow clean trajectories.
- [ ] Pivots remain coherent.
- [ ] No accidental hand/head/prop zig-zag is visible.
- [ ] Linear trajectories are reserved for mechanically appropriate motion.

## 8. Secondary Action

- [ ] Secondary motion supports character, emotion, context or rhythm.
- [ ] It remains visually subordinate to the primary action.
- [ ] It appears at a motivated beat rather than continuously.
- [ ] Character-specific motifs are consistent with that character.

Examples of valid character-specific secondary actions include a brief star glint on glasses during a head turn, delayed coat/hair motion, a small jewelry settle, a blink or prop reaction. The effect must be motivated by the action.

## 9. Timing

- [ ] Duration matches apparent weight and mood.
- [ ] Holds are long enough to read important poses.
- [ ] Rhythm has useful contrast rather than uniform pacing.
- [ ] Frame count is serving motion, not merely increasing smoothness.

## 10. Exaggeration

- [ ] Exaggeration strengthens the main idea.
- [ ] The amount matches style and shot intensity.
- [ ] Exaggeration preserves identity and internal logic.
- [ ] Not every beat is pushed equally.

## 11. Solid Form

- [ ] Proportions and volumes remain consistent.
- [ ] Perspective/foreshortening remains coherent.
- [ ] Center of gravity and balance are believable for the chosen style.
- [ ] Feet, hands, accessories and props stay attached and spatially consistent.

## 12. Appeal

- [ ] Motion feels specific to this character/object rather than generic.
- [ ] Strong poses have a readable line of action or visual intent.
- [ ] Awkwardness, ugliness, stiffness or deadpan behavior is preserved when intentionally part of the design.
- [ ] The result does not default to cute/anime/glossy mascot behavior without a request for it.

## Continuity checks for generated sprites/video

- [ ] same camera and framing unless camera motion is authored;
- [ ] same character scale and body proportions;
- [ ] same costume construction and accessories;
- [ ] same lighting direction unless changing light is part of the shot;
- [ ] same palette/rendering/line treatment;
- [ ] face/hair/features do not mutate;
- [ ] effect origin remains attached to its physical/visual cause;
- [ ] loop endpoints match in pose, position and motion phase when looping.

## Approval rule

Approve only if:

1. there are no applicable hard failures;
2. the primary action reads clearly;
3. all applicable principles score at least `1`;
4. the principles most important to the shot score `2`;
5. secondary effects and polish do not compensate for weak timing, poses or continuity.

When a result fails, repair primary action, key poses, timing and continuity before adding more effects.
