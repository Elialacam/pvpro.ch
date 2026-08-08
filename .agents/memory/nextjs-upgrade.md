---
name: Next.js upgrade and patch
description: next@14.2.22 is blocked by Replit CVE policy; project now runs on 14.2.35. The sorted-routes patch script must match the new throw string format.
---

## Rule
Do not attempt to install or restore `next@14.2.22` — it is blocked by the Replit package-firewall (Critical CVE). The project uses `next@14.2.35`.

**Why:** When node_modules were lost and `npm install` was attempted, next@14.2.22 was blocked. Upgrading to 14.2.35 resolved it.

**How to apply:** If npm install ever fails with a 403 on next@14.2.22, update `package.json` to `"next": "14.2.35"` and delete `package-lock.json` before retrying.

## Sorted-routes patch
`scripts/patch-next-sorted-routes.js` patches `node_modules/next/dist/shared/lib/router/utils/sorted-routes.js` to allow `/sitemap.xml` to coexist with the metadata catch-all route. If the patch says "Already patched or pattern not found" on a fresh install, apply it manually via node inline or by directly commenting out the `throw new Error('You cannot define a route with the same specificity...')` line.
