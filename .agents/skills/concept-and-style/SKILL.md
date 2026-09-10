---
name: concept-and-style
description: Develop concept art and a reusable visual-language specification from a brief or references without copying source identity. Use for art direction, style exploration, character/world/prop concepts, reference analysis and consistent multi-asset visual systems.
---

# AWFUL concept and style

Do not reduce art direction to a list of adjectives. Build a visual system that another agent or model can actually reuse.

## Separate subject, style and composition

For every reference, classify what it is allowed to control:

- identity/subject;
- silhouette/shape language;
- palette/color relationships;
- material/texture;
- line/edge treatment;
- lighting;
- lens/camera;
- composition;
- typography/graphic treatment;
- motion language;
- mood/narrative tone.

One reference does not automatically control all categories.

## Reference-analysis rule

Extract general visual properties and relationships. Do not copy a proprietary logo, exact character identity, protected composition, distinctive asset or a living artist's signature manner as the requested output identity.

Useful extraction describes mechanisms, for example:

- large asymmetrical dark silhouette against sparse light field;
- compressed neutral palette with one acidic accent;
- hard frontal flash and rapid falloff;
- rough dry line over flat blocks;
- low camera with exaggerated foreground scale;
- intentionally awkward negative space.

Unhelpful extraction merely names a source and tells the model to copy it.

## Visual-language spec

When consistency matters, create an internal style card with:

- 3-7 dominant visual principles;
- shape language;
- proportion language;
- palette roles rather than only hex values;
- contrast rules;
- material/texture rules;
- edge/line rules;
- lighting rules;
- camera/lens rules;
- composition rules;
- density/detail budget;
- typography rules if applicable;
- motion principles if applicable;
- explicit anti-rules.

The anti-rules are important. Record what would make the work become generic, cute, glossy, anime-like, over-rendered, corporate, game-default, stock-photo-like or otherwise wrong for the brief.

## Concept-art pipeline

Use progressive commitment:

1. brief and constraints;
2. reference decomposition;
3. 3-6 materially different concept directions;
4. silhouette/thumbnails;
5. choose the strongest direction from evidence or user constraints;
6. shape/proportion refinement;
7. palette/material/lighting pass;
8. production views or hero concept;
9. consistency audit;
10. handoff spec for image/video/3D/sprite production.

Do not spend high-cost generation on polished detail before silhouette and composition are viable.

## Character concepts

Pair with `character-consistency`. A character concept should define:

- readable silhouette;
- proportion strategy;
- face/hair mass;
- costume hierarchy;
- footwear/accessories;
- recurring asymmetry or motif;
- palette roles;
- material/line language;
- expression range;
- pose/personality range;
- animation affordances: what can squash, trail, swing, flap, glint or remain rigid.

## Environment concepts

Define:

- foreground/midground/background hierarchy;
- traversal or staging zones when relevant;
- scale anchors;
- repeating modular language;
- hero landmarks;
- atmospheric depth;
- lighting direction/time-state;
- material families;
- empty-space budget for characters/UI/action.

## Prop/product concepts

Define:

- primary silhouette;
- functional hierarchy;
- material separation;
- scale;
- seams/joints/interaction points;
- views needed for downstream 3D or animation;
- what must remain physically plausible vs what may be stylized.

## Backend routing

- Use `design-dna` when a structured reference/style profile is helpful.
- Use `inference-ai-image-generation` or `openai-imagegen` to render concepts.
- Use local ComfyUI when model/control/LoRA workflows are part of the project.
- Use `inference-character-design-sheet` for production-ready character sheets.

## Acceptance gate

A style system passes only if a second asset can be produced from the spec and still feels related without copying the first asset's exact composition. If consistency depends on repeatedly showing the model the same finished image and saying "same style", the specification is incomplete.
