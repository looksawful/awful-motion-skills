# AWFUL MOTION SKILLS agent instructions

This repository stores motion-design rules for AI agents and generative models. Treat repository-local skills as executable working contracts, not inspirational reading.

## Read first

1. Read `README.md`.
2. For any animation-design, animation-generation, sprite-sheet, motion-graphics, character-performance, UI-motion or motion-review task, read `.agents/skills/disney-animation-principles/SKILL.md`.
3. Use `docs/disney-12-principles.md` when you need the detailed principle-by-principle reference.
4. Before claiming completion, run the reasoning checklist in `docs/animation-review-checklist.md` against the result.

## Core rule

Do not merely name the 12 principles. Convert them into visible motion decisions.

For every motion task, the agent must identify:

- the primary action;
- the subject's apparent mass, flexibility and material;
- the key poses or state changes;
- anticipation before the main action when appropriate;
- acceleration/deceleration profile;
- motion path or arc;
- parts that lag, overshoot or settle;
- secondary action that supports, but does not compete with, the primary action;
- timing and spacing;
- controlled exaggeration;
- silhouette/readability/staging;
- any character-specific motion accent;
- reduced-motion or static fallback when the target medium requires accessibility support.

If these decisions are absent, the motion is under-specified.

## Principle application policy

The classical 12 principles are defaults, not twelve effects that must be forced into every shot.

- Apply a principle only when it improves clarity, weight, rhythm, personality or continuity.
- Never add squash/stretch, overshoot, sparkles, bounce, smear or secondary motion merely because an animation exists.
- Preserve the user's requested style. The principles control movement, not art direction.
- Do not convert realistic motion into rubber-hose/cartoon motion unless exaggeration is explicitly appropriate.
- Do not imitate Disney characters, franchise assets or a proprietary visual identity. Use the general animation principles only.
- Prefer one readable idea per beat over simultaneous decorative motion everywhere.

## Required planning output for agents

Before generating or implementing animation, produce an internal motion plan with at least:

1. **Intent** — what the viewer must understand or feel.
2. **Primary action** — the dominant motion.
3. **Key poses/states** — start, anticipation, action, overshoot/contact if relevant, settle/end.
4. **Timing** — durations, holds and relative speed.
5. **Spacing/easing** — acceleration and deceleration behavior.
6. **Arcs** — trajectories for bodies, limbs, props, camera or UI elements.
7. **Overlap** — which parts lead, lag and settle later.
8. **Secondary action** — optional supporting behavior.
9. **Exaggeration** — what is amplified and why.
10. **Staging** — how attention is kept on the primary action.
11. **Continuity** — volume, proportions, identity, contact points and direction.
12. **Verification** — what must be checked in the result.

Do not expose this planning format to the end user unless requested; it is an execution contract for agents.

## Generated frame and sprite-sheet contract

When generating frame sequences or sprite sheets:

- keep character identity, costume, palette, body proportions and camera consistent unless the animation explicitly changes them;
- keep the root/contact point stable relative to the intended motion;
- preserve volume through squash/stretch instead of randomly changing body size;
- make neighboring frames causally continuous;
- avoid teleporting hands, props, facial features, shadows or accessories;
- avoid arbitrary changes in line quality, rendering style or perspective between frames;
- design readable extremes before generating in-betweens;
- keep effects on separate conceptual layers when possible: character, prop, contact effect, trailing effect, ambient effect;
- ensure looping sequences close cleanly in position, velocity and phase when a loop is requested;
- never use text labels inside generated sprite sheets unless explicitly requested.

## Character-specific accents

A recurring character may have one or two signature secondary effects or motion motifs, but they must follow the action instead of replacing it.

Examples:

- glasses may catch a brief star-shaped glint at a readable head turn or attitude beat;
- loose hair may lag and settle after the skull stops;
- long coat hems may trail the hips and overshoot on a turn;
- heavy boots may produce a sharper contact pose and shorter rebound;
- jewelry may use delayed overlapping motion;
- a stylized UI mascot may use a tiny blink, breath or accessory reaction during an idle.

Signature effects should be authored per character and reused consistently. Do not sprinkle identical sparkles, dust, bounce or glow across unrelated characters as generic decoration.

## Change discipline

- Keep principle definitions stable unless correcting an error or clarifying application.
- Prefer adding medium-specific guidance below the shared principles instead of forking the principles into contradictory copies.
- Keep rules testable: state observable success/failure conditions wherever possible.
- Separate motion principles from implementation technology. CSS, GSAP, After Effects, Blender, Canvas, WebGL, sprites and video-generation models may implement the same motion law differently.
- Do not claim a visual result passes review if you have not actually inspected the rendered frames/video when such inspection is available.

## Completion rule

A motion result is not complete merely because it moves. It is complete when the main action reads clearly, timing supports intent, mass and continuity are believable for the chosen style, secondary motion is subordinate, and the result survives the checklist in `docs/animation-review-checklist.md`.
