---
name: Language selector fallbacks
description: Distinguishes visible language-switcher fallbacks from SEO hreflang equivalence.
---

The global language selector must show DE, IT, FR, and EN on every page. Use the same exact equivalents as hreflang when they exist; for a missing translation, link that selector option to the corresponding language homepage.

**Why:** The selector must remain useful on single-language canton pages, while hreflang must never claim that an unrelated homepage is an equivalent translation.

**How to apply:** Keep locale-home fallback logic limited to the visible selector. Hreflang and sitemap alternates must continue to list only real, reciprocal page equivalents.