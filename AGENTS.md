# AWFUL MOTION SKILLS agent instructions

This repository is a reusable visual-production knowledge layer for AI agents and generative models. It covers animation principles, character consistency, concept art, sprites, storyboards, AI video, visual style, game assets, 3D routing, mockups, people/product imagery and visual QA.

Treat repository-local skills as executable working contracts, not inspirational reading.

## Read first

1. Read `README.md` and `START_HERE.md`.
2. For any broad visual request, start with `.agents/skills/visual-production-router/SKILL.md`.
3. Load only the project-local skills required by the requested deliverable.
4. If external execution guidance is useful, inspect `skills/vendor/registry.json` and install only the relevant reviewed vendor skill with `scripts/vendor_skills.py`.
5. Before claiming completion, inspect the actual generated artifact whenever the environment supports it and use `.agents/skills/visual-quality-review/SKILL.md`.

## Authority order

When instructions conflict, use this order:

1. explicit user constraints and supplied/approved source assets;
2. this `AGENTS.md`;
3. relevant AWFUL skills under `.agents/skills/`;
4. reviewed vendor skills installed from `skills/vendor/registry.json`;
5. generic provider/model guidance.

External skills are specialists. They never override the user's locked character, style, format, continuity or motion requirements.

## Cross-repository visual authority

For recurring visual subjects, still-image identity and appearance may be defined by `looksawful/awful-picture-skills`.

When an approved visual/character/mascot bible exists there, treat its canonical reference, silhouette, proportions, palette, rendering language and `preserve/vary/avoid` fields as the appearance source of truth. This repository consumes those locks and owns timing, acting, frame sequencing, effects over time, directing and temporal QA.

A motion derivative must not silently redesign its source character.

## Core production rule

Do not jump directly from a vague request to a one-shot generation prompt when the deliverable depends on identity, continuity, timing, runtime geometry or a reusable visual system.

Use the smallest appropriate pipeline:

`brief -> constraints -> reference/identity/style lock -> plan/key poses/shots -> generation -> inspection -> diagnosis -> focused correction -> normalization/export -> QA`

A prompt is not the final artifact when generation is available. A generated image is not a sprite atlas until it satisfies frame/anchor/runtime constraints. A storyboard is not a finished video. A successful API response is not proof that the output is visually correct.

## Project-local skill routing

### `visual-production-router`

Front door for broad visual tasks. Classifies the deliverable and chooses the smallest useful local + vendor skill set.

### `disney-animation-principles`

Operational form of the classical 12 animation principles. Use for character/object performance, sprites, generated animation, motion graphics and motion review.

### `character-consistency`

Locks observable identity invariants for recurring people, characters, pets and mascots across poses, expressions, frames and shots.

### `mascot-motion`

Turns mascot/pet personality into observable timing, gesture, idle, reaction and state behavior. Use for recurring UI mascots, game pets and desktop pets together with character consistency and Disney principles.

### `character-effects-language`

Defines causal reusable effects such as glasses glints, impact marks, dust, trails, smears and signature accents through trigger/onset/duration/layer/safe-zone contracts.

### `concept-and-style`

Reference analysis, art direction, visual-language specification and concept-art development. Separates identity, style, composition, material, lighting and camera roles.

### `awful-sprite-production`

Frame/action planning, whole-strip generation strategy, normalization, anchors, loops, effects and sprite-atlas QA.

### `story-character-writing`

Characters, arcs, scenes, dialogue, short-form narrative and game narrative written as visible/performable actions that can be storyboarded and animated.

### `storyboard-and-directing`

Scene geography, shot design, staging, camera logic, continuity, generated storyboard panels and animatic-ready timing.

### `ai-video-production`

Text-to-video, image-to-video, reference/keyframe-conditioned shots, multi-shot production, shot manifests, backend choice and temporal QA.

### `game-asset-production`

Coherent runtime-aware asset systems for characters, props, environments, tiles, textures, VFX, UI art and 2D/3D game assets.

### `visual-quality-review`

Artifact inspection across dimensions, composition, identity, anatomy/geometry, material/light, text/logo fidelity, temporal continuity, sprites, games and 3D.

## Animation principle policy

The classical 12 animation principles are defaults, not twelve effects that must be forced into every shot.

- Convert principles into visible motion decisions instead of merely naming them.
- Apply a principle only when it improves clarity, weight, rhythm, personality or continuity.
- Never add squash/stretch, overshoot, sparkles, bounce, smear or secondary motion merely because an animation exists.
- Preserve requested art direction. Motion principles govern movement, not visual identity.
- Do not convert realistic motion into rubber-hose/cartoon motion unless exaggeration is appropriate.
- Do not imitate Disney characters, franchise assets or proprietary visual identity. Use the general animation principles only.
- Prefer one readable idea per beat over simultaneous decorative motion everywhere.

For every motion task identify internally:

- primary action;
- apparent mass/flexibility/material;
- key poses or state changes;
- anticipation when useful;
- acceleration/deceleration profile;
- motion path/arcs;
- leading/lagging/overshooting parts;
- subordinate secondary action;
- timing and spacing;
- controlled exaggeration;
- staging/readability;
- character-specific accents;
- continuity and reduced-motion/static fallback where the medium requires it.

## Character and reference contract

When a recurring subject is involved:

- identify one current master identity source;
- distinguish identity references from pose, style, environment and material references;
- preserve hard invariants such as silhouette, proportions, hair/fur mass, costume hierarchy, palette and recurring asymmetries;
- do not let a derivative pose/frame/shot silently redefine the master identity;
- treat unseen details as design decisions rather than recovered facts;
- compare derivatives against the master before approval.

When the user supplies a reference image, inspect it before making claims about its contents. Do not infer original prompts, seeds, models, lenses or generation settings as facts.

## Mascot and character-effects contract

For recurring mascots/pets:

- translate personality into observable posture, tempo, gesture amplitude, holds, anticipation, rebound and idle behavior;
- keep a finite runtime-driven state vocabulary rather than inventing unrelated actions;
- use low-amplitude continuous idle motion plus sparse micro-events and rarer signature events;
- author signature effects per character rather than applying generic sparkles/bounce/dust to everyone;
- define every effect by a cause/trigger, location, onset, lifetime, motion, hierarchy and safe zones;
- keep effects subordinate to face, hands and the primary silhouette unless the effect itself is the story beat.

A glasses star glint, for example, belongs at a readable light/head-turn or attitude event, follows the lens plane, normally lasts only a few frames, should not cover both eyes and must not fire on every idle loop.

## Generated frame and sprite contract

When generating frame sequences or sprite sheets:

- define action/state, direction, loop/one-shot status, frame count, fps/duration, cell size, atlas layout and root/ground anchor first;
- design readable extremes before in-betweens;
- keep identity, costume, palette, proportions and camera stable unless the action intentionally changes them;
- preserve apparent volume through squash/stretch instead of random body-size changes;
- keep neighboring frames causally continuous;
- avoid teleporting hands, props, features, shadows or accessories;
- keep line/render/material language and perspective stable;
- normalize generated frames by semantic anchor and approved scale after generation;
- preserve intentional travel and deformation while removing accidental drift;
- keep character/prop/contact/trailing/ambient effects conceptually separable when useful;
- verify the last-to-first transition for loops;
- never add text labels inside generated sprite sheets unless explicitly requested.

## AI video contract

For every generated shot define start state, end state, one primary action, important secondary motion, framing, camera motion, subject path, duration, continuity inherited from the previous shot and continuity handed to the next.

For multi-shot work maintain a shot manifest. Prefer approved still/keyframe references when identity or composition matters. Inspect actual playback for identity drift, geometry flicker, object permanence, contact/weight, camera path, background topology, costume/prop continuity, editability and audio sync when relevant.

Do not ask a short generative clip to solve multiple independent camera moves, redesigns and narrative beats when splitting the sequence gives better control.

## Style and concept contract

A useful style description must encode reusable mechanisms rather than only adjectives or artist/source names. Separate:

- silhouette/shape language;
- proportion language;
- palette roles;
- material/texture;
- edge/line treatment;
- lighting;
- lens/camera;
- composition;
- density/detail budget;
- typography/graphic treatment when relevant;
- motion language;
- explicit anti-rules.

Extract high-level visual logic from references. Do not copy proprietary logos, exact character identities, distinctive protected assets or a living artist's signature identity as the requested output.

## Vendor skill policy

Reviewed external skills are declared in `skills/vendor/registry.json`.

- Install vendor skills only when the current task needs them.
- Installed copies live under `.agents/vendor/` and are intentionally gitignored.
- Do not commit third-party skill copies merely for convenience.
- Record/inspect upstream provenance and license before redistributing third-party source.
- Treat provider authentication, paid generation and model availability as execution dependencies, not repository guarantees.
- Never expose API keys or tokens in prompts, reports, commits or generated manifests.
- Reference-only entries are workflow research, not generic drop-in skills.

Typical commands:

```bash
python scripts/vendor_skills.py list
python scripts/vendor_skills.py list --category sprites
python scripts/vendor_skills.py info openai-sprite-pipeline
python scripts/vendor_skills.py install openai-sprite-pipeline
python scripts/vendor_skills.py status
```

## Backend discipline

Choose the backend after defining the visual problem.

- Prefer a host-provided image generation/editing capability when it satisfies the request.
- Use cloud multi-model routers when provider/model flexibility is useful.
- Use local ComfyUI when local checkpoints, LoRAs, ControlNet, explicit graph control or offline/private execution matter.
- Use deterministic composition/rendering for typography, UI, exact layout and repeatable motion graphics when generative video would reduce control.
- Use specialized 3D routes only when the requested output is actually a mesh/GLB/procedural model rather than a 2D concept image.

Do not run multiple paid providers simply to create more options unless comparison is part of the task.

## Change discipline

- Keep shared contracts testable and observable.
- Prefer one reusable local skill over several near-duplicate prompt files.
- Add medium/provider-specific behavior below shared identity/style/motion contracts rather than forking those contracts into contradictory copies.
- Do not hardcode provider model IDs when the provider exposes runtime discovery.
- Do not assume a vendor skill's old capability list is current. Probe or inspect the current provider when execution depends on it.
- Do not modify supplied source assets unless the requested task is an edit/transformation.
- Keep generated artifacts, credentials, caches and installed vendor copies out of repository source unless they are intentional versioned project assets.

## Visual completion rule

A visual result is complete only when the requested artifact exists in the required format and the evidence supports the claim:

- single images require inspection when possible;
- recurring characters require identity comparison;
- sprites require frame, anchor, scale, alpha and loop checks;
- video requires temporal inspection, not only prompt review;
- game assets require runtime-aware scale/pivot/import checks;
- 3D assets require geometry/orientation/material/export checks;
- exact text/logos require direct fidelity inspection.

State limitations explicitly when actual rendering/playback/runtime verification is unavailable. Never promote source inspection into visual evidence.
