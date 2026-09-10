---
name: character-consistency
description: Lock and preserve a character, person, pet or mascot across images, poses, expressions, sprite frames and video shots. Use whenever a recurring subject must remain recognizably the same.
---

# AWFUL character consistency

Identity consistency is a production contract, not a vague request to "keep the same character".

## Establish the identity source

Choose exactly one current master identity source:

- user-provided approved image;
- approved character sheet;
- approved character-bible package;
- explicitly approved generated master frame.

Additional references may clarify details, but they do not overrule the master unless the user says so.

## Build an internal identity lock

Record only observable or explicitly supplied traits:

- silhouette and overall proportions;
- head/body ratio;
- face shape and feature placement;
- hair mass, contour, length and parting;
- skin/fur/material colors;
- outfit pieces, lengths, layering and fit;
- footwear;
- accessories and where they attach;
- recurring asymmetries;
- palette relationships;
- line/render/material language;
- scale cues;
- details that must never appear.

Separate them into:

- **hard invariants**: must remain unchanged;
- **pose-dependent traits**: may deform with view/action;
- **optional accents**: may appear only when the shot calls for them.

Do not invent hidden anatomy or costume construction and then treat the invention as canonical.

## Multi-view contract

For turnaround, pose or expression sets:

- keep camera model and lens language stable unless a different camera is intentional;
- preserve height and body-part ratios;
- preserve clothing hem lengths and accessory placement;
- infer side/back information conservatively from the master;
- mark uncertain unseen details as design decisions, not recovered facts;
- do not use a bad generated side view to redefine the front view.

## Motion contract

When the character moves:

- load `disney-animation-principles`;
- preserve apparent volume through deformation;
- preserve root height/contact logic where the action requires it;
- keep face topology and feature spacing coherent between neighboring frames;
- make hair/clothes/accessories follow the body through causal overlap rather than changing shape arbitrarily;
- preserve left/right distinguishing features through turns and mirrored states;
- keep signature effects subordinate to the action.

## Reference prompting

When the backend accepts reference images:

- pass the minimum useful reference set;
- identify each reference role in the prompt: identity, outfit, pose, style, environment or material;
- never let a style reference silently become an identity reference;
- prefer one strong identity anchor over a contradictory pile of references;
- for editing, explicitly state which regions/properties must remain unchanged.

## Consistency ledger

For multi-shot or multi-asset work, maintain a compact ledger containing:

- character id/name;
- master reference path/id;
- current approved costume/version;
- palette;
- locked physical traits;
- signature motion/effects;
- approved deviations;
- known failure modes.

Every generated derivative consumes this ledger. Only an explicit redesign updates it.

## Failure diagnosis

Reject or repair outputs with:

- silhouette drift;
- face drift;
- hair mass changing without physical cause;
- clothing redesign between frames;
- accessory teleportation;
- unexplained palette changes;
- inconsistent limb proportions;
- camera/view changes masquerading as anatomy changes;
- left/right details swapping incorrectly;
- a recurring character becoming a generic model archetype.

## QA gate

Before accepting a derivative, compare it against the master at three scales:

1. thumbnail: silhouette, palette, costume read;
2. medium: proportions, hair, face, accessory placement;
3. close: identifying details and unintended mutations.

A beautiful image that fails identity is a failed character asset.
