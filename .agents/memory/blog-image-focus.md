---
name: Blog image focal points
description: How blog card/hero images are smart-centered via precomputed focal points
---
Blog images are smart-centered with per-image `object-position` from `lib/imageFocus.ts` (`getImageFocus(src)`, fallback `50% 50%`).
**Why:** default center/top cropping cut off the subject on many blog photos; user asked for AI-based smart centering (Jul 2026).
**How to apply:** when adding/changing blog images, rerun `npm run generate:image-focus` (sharp attention-crop saliency) and paste output into `lib/imageFocus.ts`. Applied in BlogSection, the 4 locale blog listing pages, and BlogArticlePage hero.
