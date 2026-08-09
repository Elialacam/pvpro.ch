---
name: Next.js upgrade to v16
description: Notes on the forced upgrade from 14.2.22 to 16.3.0 and breaking changes fixed
---

# Next.js 16.3.0 Upgrade (forced — v14.2.22 blocked by CVE policy)

**Why:** next@14.2.22 was blocked by Replit's security policy (Critical CVE). `next@latest` (16.3.0) installed successfully.

## Breaking changes fixed

1. **`eslint` option in next.config.js** — removed (no longer supported in Next.js 16; lint is separate now)
2. **`swcMinify: true`** — removed (no longer a valid option in Next.js 16)
3. **`allowedDevOrigins`** — added `['127.0.0.1', '<replit-dev-domain>']` to avoid cross-origin dev resource blocks
4. **`app/sitemap.xml/route.ts` + `app/sitemap.ts`** — both conflicted in Next.js 16; deleted both; actual sitemap served by `/api/sitemap` via rewrite in next.config.js
5. **`middleware.ts` deprecation** — Next.js 16 prefers `proxy.ts`; left as-is (just a warning, not breaking)

**How to apply:** If Next.js is reinstalled or upgraded, expect these same warnings. The fix is already in next.config.js and the sitemap files are removed.
