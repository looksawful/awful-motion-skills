---
name: visual-quality-review
description: Inspect generated images, character sheets, sprites, storyboards, mockups, game assets and video for visual, identity, temporal and production defects before accepting or exporting them.
---

# AWFUL visual quality review

Never approve generated media from the prompt alone. Inspect the actual artifact whenever the environment provides image/video/frame access.

## Review in layers

### 1. Contract

Check the requested facts first:

- correct deliverable type;
- dimensions/aspect ratio;
- frame/page/shot count;
- transparency/background requirement;
- format;
- required subjects/assets;
- forbidden text/elements;
- reference fidelity requirements.

A visually strong asset with the wrong dimensions or format still fails the contract.

### 2. Composition/readability

Check:

- focal hierarchy;
- silhouette;
- cropping;
- tangencies;
- accidental mergers;
- negative space;
- subject scale;
- background competition;
- readability at actual target size.

### 3. Identity/continuity

When subjects recur, compare with `character-consistency`:

- silhouette/proportions;
- face/hair/fur;
- costume/material;
- accessories;
- palette;
- handedness/asymmetry;
- props;
- environment geography;
- lighting/time state.

### 4. Anatomy/geometry

Inspect hands, feet, joints, eyes, mouth, teeth, ears, glasses, thin objects, repeated patterns, intersections, attachment points and object topology. For stylized work, judge against the chosen stylization rather than anatomical realism, but reject accidental mutations.

### 5. Material/light

Check whether material behavior is coherent:

- rigid objects stay rigid;
- cloth behaves like cloth;
- glass/metal/plastic/skin/fur do not randomly swap response;
- cast shadows belong to objects;
- reflections/highlights follow plausible surfaces unless stylization deliberately breaks this.

### 6. Text/logos

When exact text or a logo matters, inspect it as data, not decoration. Reject misspellings, substituted glyphs, invented marks and distorted official assets. Prefer deterministic typography/compositing when exactness is required.

### 7. Motion/video

For temporal work inspect actual playback and representative frames:

- identity drift;
- geometry flicker;
- object permanence;
- frame-edge mutation;
- foot/contact sliding;
- weight/inertia;
- camera continuity;
- temporal aliasing;
- sudden lighting/background changes;
- effect continuity;
- start/end editability;
- loop seam;
- lip/audio sync where relevant.

Read `disney-animation-principles` and `docs/animation-review-checklist.md` for character/performance review.

### 8. Sprite-specific

Read `awful-sprite-production`. Verify:

- exact frame order/count;
- stable scale/anchor;
- intended vertical travel preserved;
- alpha cleanliness;
- atlas grid;
- native-scale readability;
- last-to-first loop.

### 9. Game/3D-specific

Read `game-asset-production`. Verify import scale/orientation/pivot, textures, seams, LOD/budget assumptions, collision/attachment points and runtime appearance.

## Diagnose before changing the prompt

Classify each defect as one of:

- brief/constraint failure;
- identity failure;
- composition failure;
- anatomy/geometry failure;
- material/lighting failure;
- text/logo failure;
- motion/physics failure;
- temporal continuity failure;
- technical/export failure;
- backend capability limitation.

Then choose the smallest repair. Generic quality adjectives do not repair specific geometry, identity or continuity failures.

## Severity

- **BLOCKER**: unusable or violates a hard contract.
- **MAJOR**: visible failure that damages identity, action, meaning or professional use.
- **MINOR**: local defect safe to repair without redesign.
- **NOTE**: optional improvement, not a failure.

## Completion evidence

Before claiming completion state internally what was actually checked:

- source/metadata only;
- still image inspected;
- contact sheet inspected;
- animation playback inspected;
- representative video frames inspected;
- full video playback inspected;
- runtime/in-engine import inspected.

Never upgrade one kind of evidence into another. A source-code review is not a visual review, and three extracted frames are not proof that a 20-second clip has no temporal defects.
