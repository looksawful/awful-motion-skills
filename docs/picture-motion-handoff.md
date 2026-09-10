# Picture -> Motion handoff

The two repositories form one production system with an explicit ownership boundary.

`looksawful/awful-picture-skills` defines canonical appearance. `looksawful/awful-motion-skills` consumes that appearance and defines behavior over time.

## Flow

```text
brief
  -> Picture orchestrator
  -> reference roles + identity/style lock
  -> representative still/model sheet
  -> visual QA
  -> picture-motion handoff
  -> Motion picture-handoff-consumer
  -> character/mascot/sprite/video route
  -> Disney/acting/effects rules
  -> temporal generation or deterministic animation
  -> temporal QA + canonical appearance comparison
```

## Versioning

`schemas/picture-motion-handoff.schema.json` is the Motion-side compatibility mirror for contract version 1. The Picture-side schema is the authoring source. When the authoring contract version changes, Motion must explicitly add support for that version rather than accepting unknown fields silently.

## Failure handling

If motion requires a new costume geometry, silhouette, signature accessory, material treatment, canonical expression design or other appearance-level decision, return it as a proposed Picture revision. Do not redefine canonical appearance inside a motion derivative.
