---
name: Image assets — content vs og/social
description: Which images may be optimized/converted to WebP and which must stay as-is
---

# Content images vs og/social images

- **Content images** (on-site blog/article hero backgrounds, card thumbnails, in-page
  section images) MAY be converted to WebP and resized.
- **og/social images** (the dedicated `og-*` assets referenced from `openGraph.images`)
  must stay JPG/PNG — social crawlers (Facebook etc.) handle JPG/PNG reliably, not WebP.
- **Logos & favicons** must never be converted or CSS-filtered (see replit.md).

**Why:** blog cover content images double as the on-site article hero, which makes them
look like og:images — but they are NOT. The blog article route does not set `og:image`;
og uses only the dedicated og asset. So converting covers to WebP is safe and does not
degrade social previews.

**How to apply:** before bulk-converting any image, grep for the file inside
`openGraph` / `url: '/images/` blocks first. If absent there, it's a content image and
safe to convert. Resize heroes/covers to ~1600px max, small in-page section images to
~1200px max, WebP quality ~82.

# Build quirk
- `npm run build` can fail with `ENOENT rename .next/export/500.html` on a **dirty**
  `.next`. Fix: `rm -rf .next && npm run build`. Not a code error.
