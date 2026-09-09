---
name: AutoSEO blog pipeline
description: How auto-generated blog articles flow into the site (webhook → OpenAI → GitHub commit → Vercel)
---

Auto-published articles live as JSON in `content/autoblog/<slug>.json` (all 4 locales in one file), merged into the hand-written blog via the getters in `lib/blogArticles.ts` and `getAutoBlogCards()` on the 4 listing pages. Auto articles use ONE shared slug across locales (the locale `[slug]` resolvers fall back to the raw slug when it's not in their translation dictionaries).

**Why:** the hand-written articles are a 6000-line TS file; committing TS edits from a webhook is fragile, JSON files are safe to write programmatically. Production runs on Vercel, so publication = GitHub commit (Git Data API, single atomic commit for article+image) → auto rebuild.

**How to apply:** endpoint is `app/api/autoseo/route.ts`; needs `AUTOSEO_WEBHOOK_SECRET`, `OPENAI_API_KEY`, `GITHUB_TOKEN` set **in Vercel** (Replit secrets don't propagate there). Translation prompts must keep the "never the word Region" rule. Never reintroduce per-file Contents-API commits (double deploys, race conditions).
