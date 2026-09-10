---
name: game-asset-production
description: Plan, generate and validate coherent 2D/3D game asset sets including characters, sprites, props, environments, textures, VFX, UI art and audio-facing manifests.
---

# AWFUL game asset production

Game art is a system of assets under runtime constraints, not a folder of attractive isolated renders.

## Establish runtime constraints first

Record:

- engine/runtime;
- camera/view: side, top-down, isometric, perspective 3D, etc.;
- target resolution and display scale;
- unit/scale convention;
- pivot/origin convention;
- lighting strategy;
- palette/style constraints;
- texture/material budget;
- alpha requirements;
- animation/state requirements;
- export formats;
- performance budget where relevant.

## Asset taxonomy

Use stable categories:

- characters;
- enemies/NPCs;
- props/interactables;
- environment/modules;
- terrain/tilemaps;
- weapons/tools/held items;
- pickups/items;
- VFX;
- UI/illustrative icons;
- decals/signage;
- textures/materials;
- 3D models/rigs/animations;
- audio references when the visual event needs SFX synchronization.

## Visual system

Pair with `concept-and-style`. Define shared:

- silhouette vocabulary;
- scale tiers;
- material families;
- edge/line treatment;
- lighting/shadow rules;
- palette roles;
- detail density by gameplay importance;
- VFX shape/color language;
- UI/world-art relationship.

Hero assets may have more detail, but they must still belong to the same world.

## Characters

Pair with `character-consistency` and `awful-sprite-production` for 2D animation. Define gameplay-readable states before decorative poses:

- idle;
- locomotion;
- primary action/attack/use;
- hit/reaction;
- death/disable when relevant;
- interaction;
- special/state transitions;
- directional variants.

Every state must remain readable at actual gameplay scale.

## Tiles and environment modules

For tileable assets:

- verify edge continuity;
- establish grid/cell size;
- distinguish walkable/blocking/decorative roles;
- create transitions/corners/endcaps where needed;
- avoid high-frequency noise that destroys character readability;
- keep collision/gameplay semantics separate from decorative imagery.

## Props

For interactive props define:

- closed/default state;
- active/open/used state;
- damaged/disabled state when needed;
- pivot/hinge/socket points;
- interaction side;
- collider proxy expectations;
- required animation or VFX attachments.

## VFX

VFX must communicate gameplay state before spectacle. Specify:

- trigger;
- anticipation/charge;
- contact/peak;
- decay;
- color/shape semantics;
- world-space vs screen-space behavior;
- additive/alpha expectations;
- frame count/fps for sprite VFX;
- readability against common backgrounds.

## 3D routing

Use `img2threejs` for procedural Three.js reconstruction from a reference when code-built geometry is desired. Use `threejs-3d-generator` for provider-backed generated GLB/FBX, rigging and animation. Use `higgsfield-game-generation` when its assets-only workflow is the selected provider.

For shipped 3D define:

- units and up axis;
- origin/pivot;
- naming;
- triangle/LOD target;
- UV/material expectations;
- texture sizes;
- skeleton/animation naming;
- collision proxy;
- export format, preferably GLB/glTF where appropriate to the runtime.

## Asset manifest

Every production batch should be representable as a manifest with:

- stable asset id;
- category;
- source/master reference;
- generation source/model/workflow;
- dimensions or 3D scale;
- pivot/anchor;
- animation metadata;
- dependencies;
- output path;
- license/provenance for sourced assets;
- QA state.

Do not make filenames the only semantic API.

## QA

Inspect assets in context, not only on white backgrounds. Check:

- visual coherence;
- gameplay readability;
- consistent scale;
- correct alpha;
- pivots/anchors;
- animation loops;
- tile seams;
- texture seams;
- 3D orientation and scale;
- clipping/intersections;
- state differentiation;
- runtime import compatibility;
- performance budget.

An asset is not production-ready because the generation itself succeeded.
