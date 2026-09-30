---
name: Address step scope
description: Why manual entry and roof analysis were withdrawn, and Google browser-key constraints.
---

Keep the quote funnel's address step focused on selecting an autocomplete suggestion. Reintroducing manual address fields, roof analysis or a satellite map requires explicit approval.

**Why:** The user reported that leads had stopped after manual entry and roof analysis were introduced, and explicitly approved removing both rather than reverting unrelated improvements. The causal link was not established; do not claim those additions caused the decline.

**How to apply:** Preserve lead delivery, confirmation emails, attribution, mobile usability and exclusion of the callback popup from the form when simplifying the funnel. Test submissions must be intercepted, not sent to real lead or email destinations.

The user intentionally restricted the Google browser key to pvpro.ch and www.pvpro.ch on 2026-09-24.

**Why:** Referrer restrictions are intentional; failed Google loading in preview is not by itself a production defect.

**How to apply:** Do not loosen the restrictions to pass preview tests. Clearly distinguish mocked autocomplete tests from live-provider verification on an authorized domain.