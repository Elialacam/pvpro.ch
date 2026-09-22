---
name: Floating contact widget
description: Historical widget choices and mobile/CSS pitfalls that are not apparent from the active implementation.
---

The callback assistant and WhatsApp button have historically been alternatives, not two simultaneous floating contact controls.

Do not lock body scrolling for the floating callback assistant.

**Why:** A prior full-screen-style scroll lock trapped mobile visitors even though this widget is not a full-screen modal.

**How to apply:** Keep the underlying page scrollable when changing widget opening/closing behavior.

Check shared animation selectors before removing widget CSS.

**Why:** Removing WhatsApp-prefixed animation styles once broke an unrelated live-status indicator that reused them.

**How to apply:** Search every class/keyframe reference before deleting styles, even when the naming appears specific to the removed widget.