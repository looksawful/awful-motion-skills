---
name: mascot-motion
description: Use when designing, generating or reviewing motion for a recurring mascot, pet, UI character or desktop pet whose personality must remain recognizable across idle, reaction and action states.
---

# AWFUL Mascot Motion

A mascot should be recognizable by how it moves, not only by its drawing.

## Required companions

Read:

- `../character-consistency/SKILL.md`;
- `../disney-animation-principles/SKILL.md`;
- `../character-effects-language/SKILL.md` when signature effects exist;
- `../awful-sprite-production/SKILL.md` for frame-based output.

When a visual bible exists in `looksawful/awful-picture-skills`, treat its canonical reference, proportions, silhouette and visual invariants as upstream identity truth.

## Motion personality lock

Translate personality into observable motion dimensions:

- default posture;
- tempo: slow/deliberate, neutral, quick/nervous, etc.;
- gesture amplitude;
- anticipation size;
- hold length;
- symmetry/asymmetry tendency;
- rebound/settle character;
- gaze/head-turn behavior;
- idle activity level;
- interaction distance;
- response to success/failure;
- flexible parts that overlap or settle late.

Do not leave personality as adjectives that never affect poses or timing.

## State vocabulary

Define only states required by the target runtime. Common examples:

- idle;
- blink/breathe/look;
- directional attention;
- walk/run/move;
- interact/use object;
- success/celebrate;
- error/fail/frustration;
- surprise;
- rest/sit/sleep;
- enter/exit;
- project-specific special action.

Each state requires intent, start/end pose, loop/one-shot behavior, duration/fps target, and which secondary parts/effects participate.

## Disney-principle translation

Apply principles selectively:

- `anticipation`: prepare large reactions or actions, not every blink;
- `squash/stretch`: scale to material/body softness and preserve volume;
- `staging`: face and primary action remain readable at target size;
- `pose-to-pose`: author primary mascot acting through clear extremes;
- `follow-through/overlap`: hair, clothes, ears, tail, straps and jewelry react causally;
- `slow-in/out`: tune acceleration to personality and apparent mass;
- `arcs`: track organic parts along clean paths;
- `secondary action`: enrich the beat without replacing it;
- `timing`: give important expressions enough hold to read;
- `exaggeration`: amplify the intended attitude, not random body distortion;
- `solid form`: preserve identity and contact through deformation;
- `appeal`: preserve specific character attitude, including awkward/deadpan/grotesque when that is canonical.

## Idle rule

Idle animation must not look like a looping demonstration reel.

Prefer low-amplitude cycles with occasional sparse events. Separate:

- continuous base: breathing/body settle when appropriate;
- intermittent micro-events: blink, tiny gaze shift, ear twitch, finger adjustment;
- rare signature event: accessory reaction, special glance, effect accent.

Do not fire every optional behavior once per short loop. Repetition reveals the machinery.

## Reaction rule

A readable reaction normally follows:

`perception -> anticipation/processing -> primary reaction -> overlap/effect -> settle/hold`

The exact phases may collapse for very fast reactions, but the causal order must remain understandable.

## Signature motion

A mascot may have 1-3 reusable motion motifs. Record trigger and restraint, for example:

- confident head turn followed by a glasses glint;
- long hair settling after the skull stops;
- heavy boots creating a sharp planted contact and short rebound;
- tail forming a brief counter-arc during turns.

Do not reuse the same sparkle/bounce/dust language for every mascot.

## QA

Reject motion when:

- identity drifts between states;
- all parts reverse simultaneously without intentional rigidity;
- idle is too busy to function as idle;
- signature effect fires without a cause;
- generic cuteness overrides the character's actual personality;
- loops pop in root position, velocity or secondary-motion phase;
- the action is unreadable at target size;
- secondary motion/effects cover eyes, hands or primary silhouette without intent.
