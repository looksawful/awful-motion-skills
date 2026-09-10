# Mascot Motion Bible Template

Use together with the canonical visual/mascot bible from `looksawful/awful-picture-skills` when one exists.

## Identity source

- character/mascot id:
- canonical visual reference:
- visual bible version/path:
- approved costume/version:

## Motion personality

- default posture:
- tempo:
- gesture amplitude:
- anticipation tendency:
- hold tendency:
- asymmetry tendency:
- rebound/settle behavior:
- gaze/head-turn behavior:
- idle activity level:
- interaction distance:

## Physical hierarchy

- root/driver:
- rigid parts:
- flexible parts:
- lead parts:
- lag parts:
- expected settle order:

## State table

| State | Intent | Loop/one-shot | Duration/FPS | Key poses | Overlap parts | Effects | Exit/settle |
|---|---|---|---|---|---|---|---|
| idle | | | | | | | |
| look | | | | | | | |
| move | | | | | | | |
| interact | | | | | | | |
| success | | | | | | | |
| fail | | | | | | | |
| rest | | | | | | | |

Add project-specific states as required by the actual runtime.

## Signature effects

For each effect:

```yaml
name:
owner:
purpose:
trigger:
spawn_location:
orientation:
onset:
duration_frames:
shape_language:
motion_path:
growth_decay:
safe_zones:
frequency:
forbidden_contexts:
loop_behavior:
```

## Accessibility / reduced motion

- states requiring a reduced-motion alternative:
- static fallback poses:
- effects disabled or simplified:

## QA

- identity stable across states:
- primary action readable at target size:
- timing matches personality:
- arcs clean:
- root/contact stable where required:
- overlap causal:
- effects causal and subordinate:
- loops close in position, velocity and phase:
- no recurring state feels like generic mascot motion:
