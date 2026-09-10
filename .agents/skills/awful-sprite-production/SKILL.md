---
name: awful-sprite-production
description: Design, generate, normalize and review frame-by-frame character sprites and sprite atlases with stable identity, anchors, readable motion and loop continuity.
---

# AWFUL sprite production

Use this for pets, mascots, game characters, UI characters, stickers and any discrete frame animation.

## Required companion skills

- Read `disney-animation-principles` for motion design.
- Read `character-consistency` for recurring subjects.
- Prefer vendor `openai-sprite-pipeline` for whole-strip generation, normalization and preview tooling when available.
- Use vendor `openai-hatch-pet` when the destination is a Codex pet or its atlas conventions are intentionally being adapted.

## Do not start from in-betweens

Design the motion in this order:

1. purpose/state;
2. start pose;
3. anticipation if needed;
4. main extreme/contact pose;
5. opposite/recovery extreme when relevant;
6. settle or loop return;
7. breakdown poses;
8. in-betweens.

If the extremes do not read at target size, adding more frames only creates smoother ambiguity.

## Sequence specification

Before generation define:

- state/action name;
- direction/facing;
- loop vs one-shot;
- intended fps/playback duration;
- exact frame count;
- frame/cell dimensions;
- atlas layout;
- root/ground anchor;
- camera scale;
- transparent/opaque background requirement;
- layers or effects expected;
- first-frame lock when continuing an existing shipped asset.

## Whole-strip rule

When the image backend can follow a sheet layout reliably, generate one action strip or one tightly related row at a time rather than unrelated single frames. Keep:

- same character;
- same facing direction;
- same palette/material/line language;
- same cell scale;
- same camera;
- exact frame slots;
- no labels or decorative scene composition.

Do not ask one generation to invent a giant atlas containing unrelated actions, directions and expressions unless there is a proven backend-specific reason.

## Anchor and normalization

Generated pixels are raw material, not final sprite geometry.

Normalize after generation:

- crop each frame consistently;
- align a stable semantic anchor, usually ground contact/root;
- normalize character scale against the approved reference frame;
- preserve intentional vertical travel such as jumps;
- preserve intentional squash/stretch rather than erasing it as "scale drift";
- remove background contamination;
- keep alpha clean;
- export exact requested dimensions.

Never center every frame independently if doing so destroys actual motion.

## Motion continuity

Neighboring frames must have causal continuity in:

- center of mass;
- foot/hand contacts;
- limb trajectory;
- hair/clothing lag;
- prop attachment;
- gaze/head direction;
- effects birth/life/death;
- lighting and cast shadow when those are part of the sprite.

For loops, inspect the last-to-first transition as carefully as every internal transition. Check pose, position, velocity and secondary-motion phase.

## Effects

Treat effects as authored motion layers:

- contact effects appear because of impact/contact;
- trailing effects inherit direction and speed from the source;
- sparkle/glint effects trigger from a readable material/view/light event;
- ambient effects must not obscure silhouette;
- secondary effects may settle after the body but must not create a false loop seam.

If effects need independent runtime timing, export them separately rather than baking everything into the character atlas.

## Directional sets

Do not assume mirroring is valid. Mirroring is allowed only when:

- the character design is sufficiently symmetric;
- handed props/accessories do not matter;
- text/logos are absent;
- the motion meaning survives the flip.

When mirroring an animation, preserve temporal frame order. Spatial mirroring is not time reversal.

## Review sheet

Before delivery create or inspect a preview that shows:

- all frames at native scale;
- enlarged nearest-neighbor view when pixel art;
- animation playback at target fps;
- loop boundary;
- anchor overlay when debugging drift;
- action silhouette without effects when readability is in doubt.

## Hard failures

Reject the asset if any of these occur:

- wrong frame count/order;
- identity or costume mutation;
- frame-to-frame camera zoom;
- unexplained body-size drift;
- crawling ground anchor during a planted action;
- unintended background pixels;
- clipped anatomy/effects;
- teleporting props/accessories;
- unreadable action at target display size;
- obvious loop pop;
- atlas dimensions incompatible with the runtime contract.
