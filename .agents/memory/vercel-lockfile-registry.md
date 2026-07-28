---
name: Vercel builds vs Replit npm proxy
description: package-lock.json can pick up Replit-internal registry URLs that break external (Vercel) builds
---

Installing/updating npm packages inside Replit (e.g. `npx update-browserslist-db`) can write `resolved` URLs pointing to `http://package-firewall.replit.local/npm/...` into package-lock.json.

**Why:** This site deploys via GitHub → Vercel; Vercel cannot reach Replit's internal package proxy, so `npm install` fails with ENOTFOUND and the production build breaks.

**How to apply:** After any npm install/update, before pushing to GitHub, check `grep -c replit.local package-lock.json` and rewrite offending URLs to `https://registry.npmjs.org`.
