---
name: Roof analysis boundaries
description: User-approved scope and external Google key restrictions for the roof-selection feature.
---

Roof analysis is a viewing aid, not lead enrichment. Adding solar information to lead delivery, confirmation emails, analytics or persistent customer records requires separate authorization.

**Why:** The user explicitly approved only an optional analysis inside the existing address step, using official BFE roof data over Google satellite imagery, without changing other form behavior.

**How to apply:** Keep roof selections independent of submission data and allow the customer to continue when analysis fails.

For multiple selected faces, show a single suitability class using the simple arithmetic mean of all their numeric BFE classes, rounded upward with Math.ceil. Do not area-weight, deduplicate class values, or show a mixed-class label.

**Why:** The user explicitly chose this summary convention over “Gemischt”; it is a PvPro.ch aggregation of BFE face classes, not an official BFE building classification.

**How to apply:** A single face retains its official class; an empty selection remains blank (dash). Keep other statistics and original per-face values unchanged.

The user restricted the existing Google browser key to pvpro.ch and www.pvpro.ch on 2026-09-24. A failed Google map in Replit preview is therefore expected, not evidence that the implementation is broken.

**Why:** The user intentionally limited referrers and specified that the final real-map test belongs on the PvPro domain.

**How to apply:** Do not loosen key restrictions to make preview tests pass. Distinguish simulated interaction tests and live BFE checks from the remaining real Google-map verification on an authorized domain.