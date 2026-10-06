---
name: Screenshot-only hydration warning
description: Distinguish screenshot tooling DOM changes from actual React hydration bugs.
---

When a screenshot capture reports an input hydration mismatch involving only an injected inline `caret-color: transparent`, verify the same route in an ordinary Playwright browser before changing app code.

**Why:** Screenshot tooling injected this style into native checklist inputs during hydration; a clean browser load of the same page produced no console error. Suppressing hydration warnings in the component would hide genuine problems without addressing the cause.

**How to apply:** Inspect the full mismatch diff and compare with a normal browser console. Do not assume all hydration errors are tooling-related.
