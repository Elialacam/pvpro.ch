# Economic facts and route audit

## Verified scope

- 330 indexable routes: 96 DE, 81 FR, 77 IT and 76 EN.
- 342 static pages generated successfully by the production build.
- 16 hand-written article identities × 4 locales: 64 article records.
- 35 generated article files × 4 locales: 140 article records.
- 35/35 generated JSON files parsed successfully and contain all four locales.

The complete, explicit route-by-route inventory is in
`seo-metadata-report.md`. It lists all 330 paths together with the final title
and description that were checked. This replaces the previous glob-only route
claim.

The remaining 12 generated pages are intentionally non-indexable. They are
included in the 342-page production build and in the source, component,
metadata, FAQ, alt-text and content audits:

- forms: `/anfrage`, `/en/request`, `/fr/demande`, `/it/richiesta`;
- conversion pages: `/danke`, `/en/thank-you`, `/fr/merci`, `/it/grazie`;
- compatibility aliases: `/pv-kosten`, `/en/pv-kosten`, `/fr/pv-kosten`,
  `/it/pv-kosten`.

Framework not-found handlers and `/api/sitemap` are not counted as generated
content pages.

## Facts handling

`lib/facts.ts` is the canonical source for the supplied system prices,
incentives, production, self-consumption, electricity/feed-in tariffs,
payback, module lifetime and battery values. Supported figures in TypeScript
sources are rendered through facts imports and formatters.

Unsupported numeric figures were removed physically from TypeScript and
generated JSON sources. There is no runtime regex that strips article prose or
replaces valid facts with generic source notes. Four exact, non-numeric source
sentinels in the first manual balcony article are structurally removed together
with any empty card or section before rendering. Blog pages display the
localized source note from `lib/facts.ts`.

All numeric sunshine-hour claims and their dedicated rows/cards were removed.
The final scans contain no sunshine-hour metric, `Profil H4`, or forbidden
`region` wording in visible DE/FR/IT/EN content.

## Removed unmatched claim inventory

The following distinct values had no supplied correspondence and were removed
rather than replaced with invented numbers. Equivalent DE/FR/IT/EN formatting
is listed once:

- Sunshine: 1'300–2'100, 1'500, 1'600–2'100, 1'600–1'900,
  more than 2'000, more than 2'100, 1'849, 2'157 and 1'522 hours/year,
  plus all other canton-table sunshine totals and calculations based on them.
- Balcony-device examples: 300–1'200 CHF purchase price; 200–600 kWh/year;
  50–150 CHF/year; 3–6 years; 2–4 kWh/day; and the unsupported 10–20×
  annual-savings comparison.
- Rooftop-system comparison examples: 20'000–35'000 CHF;
  8'000–12'000 kWh/year; 1'500–3'000 CHF/year; 8–12 years.
- Unsupported system prices: 13'000–18'000, 18'000–25'000,
  22'000–30'000, 15'000–35'000, 18'000–30'000, 20'000–35'000,
  25'000–30'000, 25'000–35'000, 25'000–40'000, 35'000–55'000,
  36'000–58'000 and 40'000–150'000 CHF.
- Unsupported per-kWp prices: 1'800–2'800, 2'000–3'000, 2'000–4'000,
  2'500–3'500, 2'600–3'500, 2'700–3'300, 2'800–3'600 and
  3'000–10'000 CHF/kWp.
- Permits/administration: 200–800 CHF.
- Grants not supplied in the catalogue: 300–400 CHF/kWp; approximately
  3'500 CHF for 10 kWp; approximately 1'800, 2'800 and 3'500 CHF for
  5, 8 and 10 kWp examples; 35%; 40% grid-fee reduction; 7–9 years;
  and unsupported municipal, utility, alpine and altitude bonuses.
- Taxes: 1'522 and approximately 2'800 CHF; 20–25%, 25% and 30%;
  the unsupported 21'700 CHF net example based on 28'000, 3'500 and
  2'800 CHF; plus all other numeric tax-return and tax-saving examples.
- Property and quote claims: 5–10% property-value increase; 10–20%,
  20–30%, 30–40% and 40% offer-comparison savings; 2'440 CHF; and the
  numeric claim that three offers are required.
- Unsupported storage prices: 4'000–6'000 CHF for 5 kWh;
  7'000–10'000 CHF for 10 kWh; 7'500–8'000 CHF for 15 kWh;
  4'000–8'000, 4'000–10'000, 3'000–10'000, 1'000–5'000,
  2'000–2'500, 3'500–5'500, 3'550–5'450 and 7'000–12'000 CHF.
- Unsupported production: 900–1'000, 900–950, 880–920, 860–900,
  800–1'000, 1'000–1'200, 1'050–1'080 and 1'080–1'100 kWh/kWp;
  4'500–5'000, 7'500–8'000, 8'000–10'000, 9'000–10'000,
  9'000–11'000 and 10'000–12'000 kWh/year.
- Unsupported roof/winter production percentages: 20–35%, 25–40%,
  40–70%, 50–70%, 60–75%, 65–80%, 70–80%, 70–85%, 15–25%
  and 15–20%, plus other numeric winter, orientation and north-roof yield
  claims.
- Unsupported self-consumption: 10–20%, 20–30%, 30–40%, 40–50%,
  40–60%, 40–80%, 50–60%, 50–70%, 60–70%, 60–75%, 65–75%,
  70–80%, 75–80%, 80–90% and 99%; multipliers 1.5×, 2×, 2–3× and 3×.
- Unsupported annual savings/value: 100–200, 150–300, 200–500,
  1'000–5'000, 2'000–3'000 and 2'000–4'000 CHF/year; standalone
  annual examples 3'200, 3'600, 3'900, 4'335, 6'100, 7'000 and
  8'000 CHF; plus numeric heat-pump, EV and wallbox savings.
- Unsupported payback: 1–2, 2–3, 3–4, 4–6, 5–6, 6–8, 6–9, 7–9,
  7–10, 8–10, 8–11, 8–12, 9–10, 9–12, 10–12, 10–15, 11–13
  and 15–25 years, plus claims of a two-year effect.
- Unsupported battery/component performance: 500–1'000,
  1'000–2'000, 2'000–4'000, 3'000–6'000, 4'000–8'000,
  5'000–10'000, 6'000–10'000 and 8'000–12'000 cycles; degradation
  0.5–1%, 1–2%, 2–3%, 2–4%, 3–5%, 5–10% and 10–15%; residual
  capacity 60–70%, 70–80%, 80–85%, 80–90%, 85–90%, 88–94%,
  90%, 92%, 95%, 98% and 99%.
- Unsupported battery payback/lifetime and component warranties: 5–10,
  8–14, 10–12, 10–15, 12–15, 15–20, 20–25, 25–30 and 30–40 years;
  product-warranty periods of 10, 12, 15, 20, 25 and 30 years.
- Unsupported roof/module examples: 30–35, 40–50, 50–55, 50–60,
  50–65, 60–70, 60–75, 62–68, 65–80 and 70–85 m²; 20–25 and
  20–30 modules; 400–450 W; 85–90%, 87–88%, 90–95% and 98%.
- Unsupported electricity prices: 4.6, 15–20, 20–25, 22, 25, 28–34, 30,
  23.5, 23.8, 25–30 and 30–40 ct/kWh.
- An unsupported `0 CHF` fuel claim was changed to the non-numeric statement
  that solar generation requires no fuel.
- Promotional `100% free` claims were changed to the same non-numeric
  `free` wording in all four locales.

Legal warranty periods, dates, system-control bounds, household examples and
technical limits outside the requested economic catalogue were retained where
they were not claims covered by `lib/facts.ts`.

## Changed-file inventory

151 project files were added or modified:

- 85 route files: 22 DE, 21 FR, 21 IT and 21 EN;
- 17 shared components:
  `AnfrageForm`, `BlogArticlePage`, `CtaAnfrage`,
  `EinfamilienhausRechner`, `FAQ`, `FoerderRechner`, `Header`,
  `MehrfamilienhausRechner`, `PhotovoltaikFaq`, `PlzWidget`,
  `RelatedCities`, `SolarCalculator`, `SpeicherVergleich`, `USPSection`,
  `UniqueCityPage`, `WieFunktioniertInteractive`, `testimonialsData`;
- 32 files under `content/autoblog/`;
- 14 library files: `autoBlog`, `blogArticles`, `blogPosts`,
  `blogPostsI18n`, `cities`, `city-content`, `city-content-fr`,
  `city-content-it`, `facts`, `faqData` and the four locale dictionaries;
- `scripts/audit-economic-facts.js`;
- `seo-facts-route-audit.md` and `seo-metadata-report.md`.

The four homepage H1 texts remain unchanged from their original source.
Distinct canton/city editorial text was preserved; only unsupported numeric
claims and sunshine containers were removed.

## Final checks

```text
node scripts/audit-economic-facts.js
  Economic facts audit: no covered hardcoded claims found.

npm run audit:seo-metadata
  Audited 330 indexable routes. Max title: 59; max description: 155.

npm run build
  Compiled successfully; generated 342/342 static pages.

JSON parse
  Autoblog JSON valid: 35.

git diff --check
  Passed.
```
