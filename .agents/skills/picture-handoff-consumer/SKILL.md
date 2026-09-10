---
name: picture-handoff-consumer
description: Use when animation, video, sprites or temporal effects consume an approved visual identity or style contract from looksawful/awful-picture-skills.
---

# Picture Handoff Consumer

`awful-picture-skills` owns canonical appearance. This skill validates that Motion has enough explicit appearance state to animate without redesigning the source.

## Acceptable input

Prefer a handoff that validates against `schemas/picture-motion-handoff.schema.json` or the authoritative matching schema in `looksawful/awful-picture-skills`.

Required semantic fields:

- contract `version` and stable `artifact_id`;
- at least one canonical reference with explicit semantic roles;
- `preserve`, `vary`, `avoid` sets;
- identity invariants;
- style invariants;
- delivery/runtime appearance constraints;
- the temporal dimensions delegated to Motion.

## Validation before animation

1. Confirm canonical reference(s) exist or are actually available to the agent.
2. Confirm identity and style rules are observable, not only adjectives.
3. Confirm `preserve`, `vary` and `avoid` do not contradict one another.
4. Confirm requested motion does not require an unapproved appearance redesign.
5. Confirm Motion-owned fields include the temporal dimensions needed by the task.
6. Record any unknown appearance property as unknown. Do not infer it from a derivative frame.

If the contract is incomplete but the canonical reference is available, preserve visible appearance and explicitly record the missing field. If a missing field would materially change identity, stop that branch of generation and return a proposed picture-contract revision rather than silently deciding it in Motion.

## Ownership boundary

Picture owns:

- identity, silhouette and proportions;
- palette/material/render language;
- canonical still references;
- approved expression/pose appearance where specified;
- still-image composition/camera locks that are marked preserve;
- signature accessories and visual attachment points.

Motion owns only the delegated temporal behavior:

- timing and spacing;
- anticipation;
- arcs;
- follow-through/overlap;
- secondary action;
- effects timing;
- shot timing;
- temporal QA.

Motion may exaggerate movement under the Disney principles, but deformation must return to and remain compatible with the approved identity/form contract.

## Downstream routing

After validation load only what the task needs:

- mascot/pet: `character-consistency + mascot-motion + disney-animation-principles`;
- sprite: `character-consistency + awful-sprite-production + disney-animation-principles`;
- video: `character-consistency + ai-video-production`, adding directing/Disney/effects as needed;
- signature FX: `character-effects-language`.

## QA

Every final derivative must be compared against the canonical appearance source, not merely the previous generated frame. A temporally smooth sequence with visual identity drift fails.
