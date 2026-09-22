---
name: Multilingual canton maintenance
description: Editorial source rules and deliberate rendering/development tradeoffs for canton localization.
---

The current German guide is the sole editorial source for IT, FR and EN. Preserve its full factual depth, section order, module structure, exceptions and source references; old localized city-template copy is not a translation source.

**Why:** The user explicitly requires complete, natural Swiss localization rather than shortened translations or independent local claims. Identical paragraph counts alone do not prove completeness: a translated FAQ previously omitted a future effective date and shortened the name of a federal bonus.

**How to apply:** Check semantic conditions as well as structure and numeric parity. Keep already-strong German metadata; do not rewrite it simply to create variation. Missing guide translations must fail explicitly, not fall back to German.

Static locale-specific root documents are intentional. Full document navigation across locale roots is accepted in exchange for correct server-rendered HTML language without making every public page dynamically rendered.

**Why:** Reading request headers in a single root would remove static rendering across the public site; client-only language changes would leave the served HTML incorrect.

**How to apply:** Preserve server-side locale language and static generation when changing layout architecture.

Use Webpack with bounded development memory in this workspace; the production build can continue using its existing bundler.

**Why:** Following the multi-root rollout, Turbopack development compilation and filesystem-cache writes repeatedly delayed requests beyond 120 seconds on the workspace filesystem. The same pages responded normally with Webpack, but compiling all 100 routes and running browsers together exhausted the workspace's 8 GB memory limit. Production compilation was already successful.

**How to apply:** Do not remove the development bundler flag, heap cap or bounded entry retention as cosmetic cleanup. Run full HTTP crawls and interactive checks as separable stages rather than recompiling every route after a browser-only failure. Reassess with measured timings and memory use if the environment or Next.js version changes.