# Restored claims route audit

## Result

- Authoritative route inventory: **342** (**330 indexable + 12 non-indexable**).
- Routes checked: **342/342** (337 generated HTML + 5 live-rendered dynamic HTML).
- Routes where **100% free service** was restored: **32**.
- Routes where a **plain free service claim** was restored: **22**.
- **Unique routes with either restored free-service category:** **54**.
- Routes where a **qualified 100% tax deduction** was restored: **13**.
- Unqualified 100% tax snippets introduced: **0**.
- Source/support-only historical tax slots, not counted as page claims: **22**.
- Raw metadata restoration slots overridden by `pageMetadata`, tracked but not counted without visible output: **4**.
- **Coverage status:** all 342 routes were checked.

Counts are route counts, not occurrence counts. A route can appear once in each applicable category.

### Counts by language

| Language | Inventory routes | 100% free service | Plain free service | Unique free-service routes | Qualified 100% tax deduction |
| --- | ---: | ---: | ---: | ---: | ---: |
| DE | 99 | 8 | 6 | 14 | 4 |
| FR | 84 | 8 | 6 | 14 | 3 |
| EN | 79 | 8 | 5 | 13 | 3 |
| IT | 80 | 8 | 5 | 13 | 3 |
| **Total** | **342** | **32** | **22** | **54** | **13** |

## Controls and method

- Pre-restoration rendered baseline: commit `f61dc7b`, BUILD_ID `T-t_xjSbII5DXDQrpzhD8`.
- Final rendered build: BUILD_ID `UuyttG9GRh1CaWdl95wUv`.
- Historical original-slot source: commit `a0dbab8`.
- Ledgers read: `/tmp/restore-app-ledger.json`, `/tmp/restore-shared-ledger.json`, `/tmp/restore-blog-ledger.json`.
- Indexable paths come only from the captured SEO report. The 12 non-indexable pages are explicitly enumerated by this script. Framework errors, API endpoints, catch-all patterns, manifest totals, the build counter, and raw HTML counts do not change the denominator.
- Body semantic text excludes all script, style, template, SVG, and tag content, preventing React flight duplication. Metadata and structured FAQ JSON-LD are compared as separate surfaces.
- Free matching requires comparison/referral/service context (or an exact trust badge); free electricity and free products are excluded.
- Tax matching requires `100%`, tax/deduction context, and all three safeguards in the same semantic block: existing building, explicit exclusion of new builds, and taxable income. Partial qualifications, other tax percentages, and unrelated uses of 100% are not counted.
- Built-in negative regression fixtures reject free electricity, free products, and tax claims missing either the no-new-build or taxable-income clause.
- Shared-component fanout is counted only when the claim is present as a final rendered semantic delta. If HTML is unavailable, a route is counted only with an explicit ledger route mapping.
- The five force-dynamic FR city pages have no baseline or final generated HTML. Their current body/metadata/FAQ surfaces are fetched from `REPLIT_DEV_DOMAIN`; restoration status additionally requires an exact historical source/ledger slot. Raw metadata text documented as overridden by `pageMetadata` is not counted without a visible metadata delta.

### Artifact availability

- Missing pre-restoration inventory HTML (5): `/fr/solaire-bienne`, `/fr/solaire-fribourg`, `/fr/solaire-geneve`, `/fr/solaire-valais`, `/fr/solaire-vaud`.
- Missing final generated inventory HTML (5): `/fr/solaire-bienne`, `/fr/solaire-fribourg`, `/fr/solaire-geneve`, `/fr/solaire-valais`, `/fr/solaire-vaud`.
- Live-rendered dynamic replacements (5): `/fr/solaire-bienne`, `/fr/solaire-fribourg`, `/fr/solaire-geneve`, `/fr/solaire-valais`, `/fr/solaire-vaud`.
- Still unverified (0): none.
- Baseline app output contains 339 HTML files, of which 337 correspond to inventory routes.
- Final app output contains 339 HTML files, of which 337 correspond to inventory routes. The other 2 are framework support/error outputs, not additional routes in the 342-route denominator.

## Route-by-route matrix

| Route | Inventory class | Render evidence | 100% free service | Plain free service | Qualified 100% tax deduction |
| --- | --- | --- | --- | --- | --- |
| `/` | indexable | generated HTML (body, metadata, faq) | restored (rendered HTML delta; body, faq; components/CtaAnfrage.tsx:defaultsByLocale.de.subtitle; components/CtaAnfrage.tsx:defaultsByLocale.de.badges[0]; lib/faqData.ts:faqContent.de service answer; lib/i18n/de.ts:hero.free; lib/i18n/de.ts:usp.free.title) | — | — |
| `/balkonkraftwerk` | indexable | generated HTML (body) | — | — | — |
| `/bewilligungspflicht-solaranlage-schweiz` | indexable | generated HTML (body) | — | — | — |
| `/blog` | indexable | generated HTML (body) | restored (rendered HTML delta; body; components/PlzWidget.tsx:content.de.badges[2]) | — | — |
| `/blog/balkonkraftwerk-schweiz` | indexable | generated HTML (body) | — | — | — |
| `/blog/batteriespeicher-brandgefahr-sicherheit-schweiz` | indexable | generated HTML (body) | — | — | — |
| `/blog/batteriespeicher-solaranlage-lohnt-sich` | indexable | generated HTML (body) | — | — | — |
| `/blog/besten-solarinstallateur-schweiz-finden` | indexable | generated HTML (body, faq) | — | — | — |
| `/blog/chinesische-vs-europaeische-solarmodule-schweiz` | indexable | generated HTML (body) | — | — | — |
| `/blog/drei-solarofferten-vergleichen` | indexable | generated HTML (body, faq) | — | — | — |
| `/blog/eigenverbrauch-optimieren-solar` | indexable | generated HTML (body) | — | — | — |
| `/blog/fehler-solarofferten-vergleich` | indexable | generated HTML (body) | — | — | — |
| `/blog/foerderungen-photovoltaik-2026` | indexable | generated HTML (body) | — | — | restored (rendered HTML delta; body; lib/blogArticles.ts:foerderungen-photovoltaik-2026.de.sections[Kantonale Programme und Steuerabzug].bullets) |
| `/blog/fragen-an-den-solarteur` | indexable | generated HTML (body) | — | — | — |
| `/blog/komplettangebote-solaranlage-vergleichen` | indexable | generated HTML (body) | — | — | — |
| `/blog/lebensdauer-solaranlage-schweiz` | indexable | generated HTML (body) | — | — | — |
| `/blog/lohnt-sich-solaranlage-schweiz-2026` | indexable | generated HTML (body, faq) | — | — | — |
| `/blog/photovoltaik-anbieter-vergleich` | indexable | generated HTML (body, faq) | — | — | — |
| `/blog/photovoltaik-installateur-finden` | indexable | generated HTML (body) | — | — | — |
| `/blog/photovoltaik-landwirtschaft-schweiz` | indexable | generated HTML (body) | — | — | — |
| `/blog/photovoltaik-projektierung-schweiz` | indexable | generated HTML (no target claim) | — | — | — |
| `/blog/photovoltaik-steuerabzug-schweiz` | indexable | generated HTML (body) | — | — | — |
| `/blog/photovoltaik-waermepumpe-heizkosten` | indexable | generated HTML (no target claim) | — | — | — |
| `/blog/pv-kosten-einfamilienhaus-2026` | indexable | generated HTML (body) | — | — | — |
| `/blog/pv-speicher-investition` | indexable | generated HTML (no target claim) | — | — | — |
| `/blog/richtigen-solarinstallateur-schweiz-waehlen` | indexable | generated HTML (body) | — | — | — |
| `/blog/roi-photovoltaik-schweiz` | indexable | generated HTML (body) | — | — | — |
| `/blog/so-funktioniert-pvpro` | indexable | generated HTML (body, metadata, faq) | restored (rendered HTML delta; body, faq; content/autoblog/wie-funktioniert-pv-pro-ihr-weg-zur-massgeschneiderten-solaranlage.json:articles.de.faqs.0) | — | — |
| `/blog/solaranlage-anbieter-planung` | indexable | generated HTML (body) | — | — | — |
| `/blog/solaranlage-flachdach-kosten` | indexable | generated HTML (body) | — | — | — |
| `/blog/solaranlage-foerderung-kanton` | indexable | generated HTML (body) | — | — | — |
| `/blog/solaranlage-gewerbeimmobilien` | indexable | generated HTML (body, faq) | — | — | restored (rendered HTML delta; body, faq; content/autoblog/solaranlage-fur-gewerbeimmobilien-in-der-schweiz-der-ultimative-ratgeber-2026.json:articles.de.faqs.0) |
| `/blog/solaranlage-gewerbeplanung-fuenf-schritte` | indexable | generated HTML (body) | — | — | — |
| `/blog/solaranlage-installateur-konkurs-garantie-schweiz` | indexable | generated HTML (body) | — | — | — |
| `/blog/solaranlage-investition-2026` | indexable | generated HTML (body) | — | — | — |
| `/blog/solaranlage-kosten-schweiz-2026` | indexable | generated HTML (body, faq) | — | — | restored (rendered HTML delta; body, faq; content/autoblog/kosten-einer-solaranlage-in-der-schweiz-2026-der-komplette-preis-ratgeber.json:articles.de.sections.3.bullets.1; content/autoblog/kosten-einer-solaranlage-in-der-schweiz-2026-der-komplette-preis-ratgeber.json:articles.de.faqs.0) |
| `/blog/solaranlage-mehrfamilienhaus-kosten` | indexable | generated HTML (body) | — | — | — |
| `/blog/solaranlage-norddach-schweiz` | indexable | generated HTML (body) | — | — | — |
| `/blog/solaranlage-offerten-sparen` | indexable | generated HTML (body, faq) | — | — | — |
| `/blog/solaranlage-steuerabzug-schweiz-2026` | indexable | generated HTML (body) | — | restored (rendered HTML delta; body; lib/blogArticles.ts:solaranlage-steuerabzug-schweiz-2026.de.ctaText) | — |
| `/blog/solaranlage-versicherung-schweiz` | indexable | generated HTML (body) | — | — | — |
| `/blog/solaranlage-waermepumpe-kombinieren-schweiz` | indexable | generated HTML (body) | — | restored (rendered HTML delta; body; lib/blogArticles.ts:photovoltaik-mit-waermepumpe.de.ctaText) | — |
| `/blog/solaranlage-wartungskosten` | indexable | generated HTML (body) | — | — | — |
| `/blog/solaranlage-winter-schweiz` | indexable | generated HTML (body) | — | — | — |
| `/blog/solaranlagen-qualitaet-erkennen` | indexable | generated HTML (body) | — | — | — |
| `/blog/solarfirma-lokal-oder-national` | indexable | generated HTML (body) | — | — | — |
| `/blog/solarfirma-serioes-pruefen` | indexable | generated HTML (body) | — | restored (rendered HTML delta; body; content/autoblog/solarfirma-prufen-schweiz-so-finden-sie-seriose-photovoltaik-partner-2026.json:articles.de.ctaText) | — |
| `/blog/solarofferte-checkliste-hauseigentuemer` | indexable | generated HTML (body) | — | — | — |
| `/blog/solarofferten-checkliste-vergleichen` | indexable | generated HTML (body) | — | restored (rendered HTML delta; body; content/autoblog/solar-offerten-checkliste-2026-so-vergleichen-sie-photovoltaik-angebote-in-der-s.json:articles.de.ctaButton) | — |
| `/blog/solarpanel-installation-kosten` | indexable | generated HTML (body) | — | — | — |
| `/blog/solarrechner-schweiz-potenzial-kosten` | indexable | generated HTML (body) | — | — | — |
| `/blog/stromspeicher-rentabilitaet-schweiz` | indexable | generated HTML (body) | — | — | — |
| `/blog/unabhaengige-photovoltaik-beratung` | indexable | generated HTML (body) | — | restored (rendered HTML delta; body; content/autoblog/photovoltaik-beratung-unabhangig-so-finden-sie-die-beste-losung-in-der-schweiz-2.json:articles.de.ctaText) | — |
| `/blog/zertifizierten-solarteur-finden` | indexable | generated HTML (body) | — | — | — |
| `/blog/zev-solaranlage-eigenverbrauch` | indexable | generated HTML (body) | — | — | — |
| `/datenschutz` | indexable | generated HTML (no target claim) | — | — | — |
| `/faq` | indexable | generated HTML (body, faq) | restored (rendered HTML delta; body, faq; lib/faqData.ts:faqContent.de service answer) | — | — |
| `/foerderungen` | indexable | generated HTML (body) | — | — | — |
| `/foerderungen-kanton-zuerich` | indexable | generated HTML (body) | — | — | — |
| `/impressum` | indexable | generated HTML (no target claim) | — | — | — |
| `/photovoltaik-installation-schweiz` | indexable | generated HTML (body) | — | — | — |
| `/photovoltaik-komplettloesung-schweiz` | indexable | generated HTML (body, faq) | — | — | — |
| `/photovoltaik-kosten-pro-m2` | indexable | generated HTML (body) | — | — | — |
| `/photovoltaik-schweizer-klima` | indexable | generated HTML (body) | — | — | — |
| `/photovoltaik-wartung-kosten` | indexable | generated HTML (body) | — | — | — |
| `/solaranlage-aargau` | indexable | generated HTML (body, metadata) | — | — | — |
| `/solaranlage-appenzell` | indexable | generated HTML (body, metadata) | — | — | — |
| `/solaranlage-basel` | indexable | generated HTML (body, metadata) | — | — | — |
| `/solaranlage-bern` | indexable | generated HTML (body, metadata) | — | — | — |
| `/solaranlage-biel` | indexable | generated HTML (body, metadata) | — | — | — |
| `/solaranlage-einfamilienhaus` | indexable | generated HTML (body) | — | — | — |
| `/solaranlage-freiburg` | indexable | generated HTML (body, metadata) | — | — | — |
| `/solaranlage-glarus` | indexable | generated HTML (body, metadata) | — | — | — |
| `/solaranlage-graubunden` | indexable | generated HTML (body, metadata) | — | — | — |
| `/solaranlage-installieren-schweiz` | indexable | generated HTML (body, metadata, faq) | — | — | — |
| `/solaranlage-kosten` | indexable | generated HTML (body) | restored (rendered HTML delta; body; components/CtaAnfrage.tsx:defaultsByLocale.de.subtitle; components/CtaAnfrage.tsx:defaultsByLocale.de.badges[0]) | — | — |
| `/solaranlage-luzern` | indexable | generated HTML (body, metadata) | — | restored (rendered HTML delta; body; lib/city-content.ts:cityContents.luzern.heroDescription) | — |
| `/solaranlage-mehrfamilienhaus` | indexable | generated HTML (body) | — | — | — |
| `/solaranlage-mit-speicher` | indexable | generated HTML (body) | — | — | — |
| `/solaranlage-offerte-einholen` | indexable | generated HTML (body, metadata) | — | — | — |
| `/solaranlage-schaffhausen` | indexable | generated HTML (body, metadata) | — | — | — |
| `/solaranlage-schwyz` | indexable | generated HTML (body, metadata) | — | — | — |
| `/solaranlage-solothurn` | indexable | generated HTML (body, metadata) | — | — | — |
| `/solaranlage-st-gallen` | indexable | generated HTML (body, metadata) | — | — | — |
| `/solaranlage-thurgau` | indexable | generated HTML (body, metadata) | — | — | — |
| `/solaranlage-unterwalden` | indexable | generated HTML (body, metadata) | — | — | — |
| `/solaranlage-uri` | indexable | generated HTML (body, metadata) | — | — | — |
| `/solaranlage-wallis` | indexable | generated HTML (body, metadata) | — | — | — |
| `/solaranlage-zug` | indexable | generated HTML (body, metadata) | — | — | — |
| `/solaranlage-zurich` | indexable | generated HTML (body, metadata, faq) | — | — | restored (rendered HTML delta; body, faq; lib/city-content.ts:cityContents.zurich.incentives.programs Steuerabzug ZH; lib/city-content.ts:cityContents.zurich.faqs Welche Förderung) |
| `/solaranlagen-typen-vergleich` | indexable | generated HTML (body) | — | — | — |
| `/solarrechner` | indexable | generated HTML (body) | restored (rendered HTML delta; body; app/(de)/solarrechner/page.tsx:hero trust badge; components/CtaAnfrage.tsx:defaultsByLocale.de.subtitle; components/CtaAnfrage.tsx:defaultsByLocale.de.badges[0]) | — | — |
| `/ueber-uns` | indexable | generated HTML (body) | restored (rendered HTML delta; body; app/(de)/ueber-uns/page.tsx:transparency card: Kostenloser Service) | — | — |
| `/vergleichsportal-photovoltaik-schweiz` | indexable | generated HTML (body, faq) | — | — | — |
| `/wie-es-funktioniert` | indexable | generated HTML (body) | restored (rendered HTML delta; body; app/(de)/wie-es-funktioniert/page.tsx:step 1 detail; app/(de)/wie-es-funktioniert/page.tsx:benefits card: Kostenlos) | — | — |
| `/wie-funktioniert` | indexable | generated HTML (body) | — | — | — |
| `/fr` | indexable | generated HTML (body, metadata, faq) | restored (rendered HTML delta; body, faq; app/fr/page.tsx:homepage FAQ: Le service de PvPro.ch est-il vraiment gratuit?; components/CtaAnfrage.tsx:defaultsByLocale.fr.subtitle; components/CtaAnfrage.tsx:defaultsByLocale.fr.badges[0]; components/CtaAnfrage.tsx:defaultsByLocale.it.subtitle; components/CtaAnfrage.tsx:defaultsByLocale.it.badges[0]; lib/i18n/fr.ts:hero.free; lib/i18n/fr.ts:usp.free.title) | — | — |
| `/fr/a-propos` | indexable | generated HTML (body) | restored (rendered HTML delta; body; app/fr/a-propos/page.tsx:transparency card: Service gratuit) | — | — |
| `/fr/blog` | indexable | generated HTML (body) | restored (rendered HTML delta; body; components/PlzWidget.tsx:content.fr.badges[2]; components/PlzWidget.tsx:content.it.badges[2]) | — | — |
| `/fr/blog/assurance-installation-solaire-suisse` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/batterie-solaire-danger-incendie-securite-suisse` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/batterie-stockage-solaire-suisse` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/calculateur-solaire-potentiel-couts` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/centrale-balcon-suisse` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/checklist-offres-solaires` | indexable | generated HTML (body) | — | restored (rendered HTML delta; body; content/autoblog/solar-offerten-checkliste-2026-so-vergleichen-sie-photovoltaik-angebote-in-der-s.json:articles.fr.ctaButton) | — |
| `/fr/blog/checklist-offres-solaires-proprietaires` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/choisir-installateur-solaire-suisse` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/comment-fonctionne-pvpro` | indexable | generated HTML (body, faq) | restored (rendered HTML delta; body, faq; content/autoblog/wie-funktioniert-pv-pro-ihr-weg-zur-massgeschneiderten-solaranlage.json:articles.fr.faqs.0) | — | — |
| `/fr/blog/comparaison-fournisseurs-photovoltaiques` | indexable | generated HTML (body, faq) | — | — | — |
| `/fr/blog/comparaison-offres-solaires-completes` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/conception-photovoltaique-suisse` | indexable | generated HTML (no target claim) | — | — | — |
| `/fr/blog/conseil-photovoltaique-independant` | indexable | generated HTML (body, faq) | — | restored (rendered HTML delta; body; content/autoblog/photovoltaik-beratung-unabhangig-so-finden-sie-die-beste-losung-in-der-schweiz-2.json:articles.fr.ctaText) | — |
| `/fr/blog/cout-installation-panneaux-solaires` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/cout-installation-solaire-suisse` | indexable | generated HTML (body, faq) | — | — | restored (rendered HTML delta; body, faq; content/autoblog/kosten-einer-solaranlage-in-der-schweiz-2026-der-komplette-preis-ratgeber.json:articles.fr.sections.3.bullets.1; content/autoblog/kosten-einer-solaranlage-in-der-schweiz-2026-der-komplette-preis-ratgeber.json:articles.fr.faqs.0) |
| `/fr/blog/cout-maintenance-installation-solaire` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/cout-pv-maison-individuelle` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/cout-solaire-immeuble-locatif` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/cout-solaire-toit-plat` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/deduction-fiscale-panneau-solaire-suisse-2026` | indexable | generated HTML (body) | — | restored (rendered HTML delta; body; lib/blogArticles.ts:solaranlage-steuerabzug-schweiz-2026.fr.ctaText) | — |
| `/fr/blog/deduction-fiscale-photovoltaique` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/duree-installation-solaire-suisse` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/entreprise-solaire-locale-nationale` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/erreurs-comparaison-offres-solaires` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/fournisseurs-solaires-planification` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/identifier-qualite-installations-solaires` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/installateur-solaire-faillite-garantie-suisse` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/installation-solaire-immobilier-commercial` | indexable | generated HTML (body, faq) | — | — | restored (rendered HTML delta; body, faq; content/autoblog/solaranlage-fur-gewerbeimmobilien-in-der-schweiz-der-ultimative-ratgeber-2026.json:articles.fr.faqs.0) |
| `/fr/blog/installation-zev-autoconsommation` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/investissement-solaire-2026` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/maximiser-autoconsommation-solaire` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/offres-solaires-economies` | indexable | generated HTML (body, faq) | — | — | — |
| `/fr/blog/panneau-solaire-toit-nord-suisse` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/panneaux-solaires-chinois-vs-europeens-suisse` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/panneaux-solaires-hiver-suisse` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/panneaux-solaires-pompe-chaleur-suisse` | indexable | generated HTML (body) | — | restored (rendered HTML delta; body; lib/blogArticles.ts:photovoltaik-mit-waermepumpe.fr.ctaText) | — |
| `/fr/blog/photovoltaique-agriculture-suisse` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/photovoltaique-pompe-chaleur` | indexable | generated HTML (no target claim) | — | — | — |
| `/fr/blog/planification-solaire-entreprises-cinq-etapes` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/questions-au-specialiste-solaire` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/rentabilite-panneau-solaire-suisse-2026` | indexable | generated HTML (body, faq) | — | — | — |
| `/fr/blog/rentabilite-stockage-electricite-suisse` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/retour-investissement-solaire-suisse` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/stockage-pv-rentable` | indexable | generated HTML (no target claim) | — | — | — |
| `/fr/blog/subventions-photovoltaiques-2026` | indexable | generated HTML (body) | — | — | restored (rendered HTML delta; body; lib/blogArticles.ts:foerderungen-photovoltaik-2026.fr.sections[Kantonale Programme und Steuerabzug].bullets) |
| `/fr/blog/subventions-solaires-canton` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/trois-offres-solaires` | indexable | generated HTML (body, faq) | — | — | — |
| `/fr/blog/trouver-installateur-photovoltaique` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/trouver-installateur-solaire-certifie` | indexable | generated HTML (body) | — | — | — |
| `/fr/blog/trouver-meilleur-installateur-solaire-suisse` | indexable | generated HTML (body, faq) | — | — | — |
| `/fr/blog/verifier-entreprise-solaire` | indexable | generated HTML (body) | — | restored (rendered HTML delta; body; content/autoblog/solarfirma-prufen-schweiz-so-finden-sie-seriose-photovoltaik-partner-2026.json:articles.fr.ctaText) | — |
| `/fr/calculateur-solaire` | indexable | generated HTML (body) | restored (rendered HTML delta; body; app/fr/calculateur-solaire/page.tsx:hero trust badge; components/CtaAnfrage.tsx:defaultsByLocale.fr.subtitle; components/CtaAnfrage.tsx:defaultsByLocale.fr.badges[0]; components/CtaAnfrage.tsx:defaultsByLocale.it.subtitle; components/CtaAnfrage.tsx:defaultsByLocale.it.badges[0]) | — | — |
| `/fr/centrale-balcon` | indexable | generated HTML (body) | — | — | — |
| `/fr/comment-ca-marche` | indexable | generated HTML (body) | restored (rendered HTML delta; body; app/fr/comment-ca-marche/page.tsx:step 1 detail; app/fr/comment-ca-marche/page.tsx:benefits card: Gratuit) | — | — |
| `/fr/comparaison-types-panneaux-solaires` | indexable | generated HTML (body) | — | — | — |
| `/fr/comparateur-photovoltaique-suisse` | indexable | generated HTML (body, faq) | — | — | — |
| `/fr/cout-installation-solaire` | indexable | generated HTML (body) | restored (rendered HTML delta; body; components/CtaAnfrage.tsx:defaultsByLocale.fr.subtitle; components/CtaAnfrage.tsx:defaultsByLocale.fr.badges[0]; components/CtaAnfrage.tsx:defaultsByLocale.it.subtitle; components/CtaAnfrage.tsx:defaultsByLocale.it.badges[0]) | — | — |
| `/fr/cout-pv-par-m2` | indexable | generated HTML (body) | — | — | — |
| `/fr/demander-offre-panneau-solaire` | indexable | generated HTML (body, metadata) | — | — | — |
| `/fr/entretien-photovoltaique-couts` | indexable | generated HTML (body) | — | — | — |
| `/fr/faq` | indexable | generated HTML (body, faq) | restored (rendered HTML delta; body, faq; lib/faqData.ts:faqContent.fr service answer) | — | — |
| `/fr/fonctionnement-solaire` | indexable | generated HTML (body) | — | — | — |
| `/fr/installation-photovoltaique-suisse` | indexable | generated HTML (body) | — | — | — |
| `/fr/installer-panneau-solaire-suisse` | indexable | generated HTML (body, metadata, faq) | — | — | — |
| `/fr/mentions-legales` | indexable | generated HTML (no target claim) | — | — | — |
| `/fr/photovoltaique-climat-suisse` | indexable | generated HTML (body) | — | — | — |
| `/fr/protection-des-donnees` | indexable | generated HTML (no target claim) | — | — | — |
| `/fr/solaire-avec-batterie` | indexable | generated HTML (body) | — | — | — |
| `/fr/solaire-bienne` | indexable | live HTML; source/ledger historical baseline (body, metadata, faq) | — | — | — |
| `/fr/solaire-fribourg` | indexable | live HTML; source/ledger historical baseline (body, metadata, faq) | — | — | — |
| `/fr/solaire-geneve` | indexable | live HTML; source/ledger historical baseline (body, metadata) | — | restored (live-rendered claim + source/ledger baseline; body; lib/city-content.ts:cityContents.geneve.heroDescription) | — |
| `/fr/solaire-immeuble` | indexable | generated HTML (body) | — | — | — |
| `/fr/solaire-maison-individuelle` | indexable | generated HTML (body) | — | — | — |
| `/fr/solaire-valais` | indexable | live HTML; source/ledger historical baseline (body, metadata) | — | — | — |
| `/fr/solaire-vaud` | indexable | live HTML; source/ledger historical baseline (body, metadata) | — | — | — |
| `/fr/solution-complete-photovoltaique-suisse` | indexable | generated HTML (body, faq) | — | — | — |
| `/fr/subventions-solaires` | indexable | generated HTML (body) | — | — | — |
| `/fr/subventions-solaires-canton-zurich` | indexable | generated HTML (body) | — | — | — |
| `/en` | indexable | generated HTML (body, metadata, faq) | restored (rendered HTML delta; body, faq; app/en/page.tsx:homepage FAQ: Is PvPro.ch service really free?; components/CtaAnfrage.tsx:defaultsByLocale.en.subtitle; components/CtaAnfrage.tsx:defaultsByLocale.en.badges[0]; lib/faqData.ts:faqContent.en service answer; lib/i18n/en.ts:hero.free; lib/i18n/en.ts:usp.free.title) | — | — |
| `/en/about-us` | indexable | generated HTML (body) | restored (rendered HTML delta; body; app/en/about-us/page.tsx:transparency card: Free service) | — | — |
| `/en/balcony-power-station` | indexable | generated HTML (body) | — | — | — |
| `/en/blog` | indexable | generated HTML (body) | restored (rendered HTML delta; body; components/PlzWidget.tsx:content.en.badges[2]) | — | — |
| `/en/blog/agricultural-solar-system` | indexable | generated HTML (body) | — | — | — |
| `/en/blog/balcony-power-station-switzerland` | indexable | generated HTML (body) | — | — | — |
| `/en/blog/canton-solar-subsidies` | indexable | generated HTML (body) | — | — | — |
| `/en/blog/check-reliable-solar-company` | indexable | generated HTML (body) | — | restored (rendered HTML delta; body; content/autoblog/solarfirma-prufen-schweiz-so-finden-sie-seriose-photovoltaik-partner-2026.json:articles.en.ctaText) | — |
| `/en/blog/chinese-vs-european-solar-panels-switzerland` | indexable | generated HTML (body) | — | — | — |
| `/en/blog/choosing-solar-installer-switzerland` | indexable | generated HTML (body) | — | — | — |
| `/en/blog/commercial-property-solar` | indexable | generated HTML (body, faq) | — | — | restored (rendered HTML delta; body, faq; content/autoblog/solaranlage-fur-gewerbeimmobilien-in-der-schweiz-der-ultimative-ratgeber-2026.json:articles.en.faqs.0) |
| `/en/blog/commercial-solar-planning-steps` | indexable | generated HTML (body) | — | — | — |
| `/en/blog/compare-complete-solar-offers` | indexable | generated HTML (body) | — | — | — |
| `/en/blog/find-best-solar-installer-switzerland` | indexable | generated HTML (body, faq) | — | — | — |
| `/en/blog/find-certified-solar-installer` | indexable | generated HTML (no target claim) | — | — | — |
| `/en/blog/find-photovoltaic-installer` | indexable | generated HTML (body) | — | — | — |
| `/en/blog/flat-roof-solar-costs` | indexable | generated HTML (body) | — | — | — |
| `/en/blog/how-pvpro-works` | indexable | generated HTML (body, metadata, faq) | restored (rendered HTML delta; body, faq; content/autoblog/wie-funktioniert-pv-pro-ihr-weg-zur-massgeschneiderten-solaranlage.json:articles.en.faqs.0) | — | — |
| `/en/blog/independent-photovoltaic-consultation` | indexable | generated HTML (body) | — | restored (rendered HTML delta; body; content/autoblog/photovoltaik-beratung-unabhangig-so-finden-sie-die-beste-losung-in-der-schweiz-2.json:articles.en.ctaText) | — |
| `/en/blog/is-solar-worth-it-switzerland-2026` | indexable | generated HTML (body, faq) | — | — | — |
| `/en/blog/local-or-national-solar-company` | indexable | generated HTML (body) | — | — | — |
| `/en/blog/maximise-solar-self-consumption` | indexable | generated HTML (body) | — | — | — |
| `/en/blog/multifamily-solar-costs` | indexable | generated HTML (body) | — | — | — |
| `/en/blog/photovoltaic-provider-comparison` | indexable | generated HTML (body, faq) | — | — | — |
| `/en/blog/photovoltaics-heat-pump` | indexable | generated HTML (no target claim) | — | — | — |
| `/en/blog/pv-battery-investment` | indexable | generated HTML (no target claim) | — | — | — |
| `/en/blog/questions-for-solar-installer` | indexable | generated HTML (body, metadata) | — | — | — |
| `/en/blog/recognize-solar-system-quality` | indexable | generated HTML (body) | — | — | — |
| `/en/blog/single-family-solar-costs` | indexable | generated HTML (body) | — | — | — |
| `/en/blog/solar-battery-fire-risk-safety-switzerland` | indexable | generated HTML (body) | — | — | — |
| `/en/blog/solar-battery-storage-worth-it` | indexable | generated HTML (body) | — | — | — |
| `/en/blog/solar-battery-worthwhile` | indexable | generated HTML (body) | — | — | — |
| `/en/blog/solar-installer-bankruptcy-guarantee-switzerland` | indexable | generated HTML (body) | — | — | — |
| `/en/blog/solar-investment-2026` | indexable | generated HTML (body) | — | — | — |
| `/en/blog/solar-offer-checklist` | indexable | generated HTML (body) | — | restored (rendered HTML delta; body; content/autoblog/solar-offerten-checkliste-2026-so-vergleichen-sie-photovoltaik-angebote-in-der-s.json:articles.en.ctaButton) | — |
| `/en/blog/solar-offer-comparison-mistakes` | indexable | generated HTML (body) | — | — | — |
| `/en/blog/solar-panel-installation-cost` | indexable | generated HTML (body) | — | — | — |
| `/en/blog/solar-panel-insurance-switzerland` | indexable | generated HTML (body) | — | — | — |
| `/en/blog/solar-panel-tax-deduction-switzerland-2026` | indexable | generated HTML (body) | — | restored (rendered HTML delta; body; lib/blogArticles.ts:solaranlage-steuerabzug-schweiz-2026.en.ctaText) | — |
| `/en/blog/solar-panels-heat-pump-combination-switzerland` | indexable | generated HTML (body) | — | restored (rendered HTML delta; body; lib/blogArticles.ts:photovoltaik-mit-waermepumpe.en.ctaText) | — |
| `/en/blog/solar-panels-north-facing-roof-switzerland` | indexable | generated HTML (body) | — | — | — |
| `/en/blog/solar-panels-winter-switzerland` | indexable | generated HTML (body) | — | — | — |
| `/en/blog/solar-providers-planning` | indexable | generated HTML (body) | — | — | — |
| `/en/blog/solar-quotes-homeowners-checklist` | indexable | generated HTML (body) | — | — | — |
| `/en/blog/solar-quotes-savings` | indexable | generated HTML (body, faq) | — | — | — |
| `/en/blog/solar-subsidies-switzerland-2026` | indexable | generated HTML (body) | — | — | restored (rendered HTML delta; body; lib/blogArticles.ts:foerderungen-photovoltaik-2026.en.sections[Kantonale Programme und Steuerabzug].bullets) |
| `/en/blog/solar-system-maintenance` | indexable | generated HTML (body) | — | — | — |
| `/en/blog/solar-system-roi-switzerland` | indexable | generated HTML (body) | — | — | — |
| `/en/blog/solar-tax-deduction` | indexable | generated HTML (body) | — | — | — |
| `/en/blog/swiss-photovoltaic-planning` | indexable | generated HTML (no target claim) | — | — | — |
| `/en/blog/swiss-solar-calculator` | indexable | generated HTML (no target claim) | — | — | — |
| `/en/blog/swiss-solar-system-cost` | indexable | generated HTML (body, faq) | — | — | restored (rendered HTML delta; body, faq; content/autoblog/kosten-einer-solaranlage-in-der-schweiz-2026-der-komplette-preis-ratgeber.json:articles.en.sections.3.bullets.1; content/autoblog/kosten-einer-solaranlage-in-der-schweiz-2026-der-komplette-preis-ratgeber.json:articles.en.faqs.0) |
| `/en/blog/swiss-solar-system-lifespan` | indexable | generated HTML (body) | — | — | — |
| `/en/blog/three-solar-quotes` | indexable | generated HTML (body, faq) | — | — | — |
| `/en/blog/zev-solar-self-consumption` | indexable | generated HTML (no target claim) | — | — | — |
| `/en/complete-solar-solution-switzerland` | indexable | generated HTML (body, faq) | — | — | — |
| `/en/faq` | indexable | generated HTML (body, faq) | restored (rendered HTML delta; body, faq; lib/faqData.ts:faqContent.en service answer) | — | — |
| `/en/get-solar-panel-quotes` | indexable | generated HTML (body, metadata) | — | — | — |
| `/en/how-it-works` | indexable | generated HTML (body) | restored (rendered HTML delta; body; app/en/how-it-works/page.tsx:step 1 detail; app/en/how-it-works/page.tsx:benefits card: Free of charge) | — | — |
| `/en/how-solar-works` | indexable | generated HTML (body) | — | — | — |
| `/en/imprint` | indexable | generated HTML (no target claim) | — | — | — |
| `/en/privacy` | indexable | generated HTML (no target claim) | — | — | — |
| `/en/solar-apartment-building` | indexable | generated HTML (body) | — | — | — |
| `/en/solar-calculator` | indexable | generated HTML (body) | restored (rendered HTML delta; body; app/en/solar-calculator/page.tsx:hero trust badge; components/CtaAnfrage.tsx:defaultsByLocale.en.subtitle; components/CtaAnfrage.tsx:defaultsByLocale.en.badges[0]) | — | — |
| `/en/solar-comparison-portal-switzerland` | indexable | generated HTML (body, faq) | — | — | — |
| `/en/solar-cost-per-m2` | indexable | generated HTML (body) | — | — | — |
| `/en/solar-detached-house` | indexable | generated HTML (body) | — | — | — |
| `/en/solar-panel-costs` | indexable | generated HTML (body) | restored (rendered HTML delta; body; components/CtaAnfrage.tsx:defaultsByLocale.en.subtitle; components/CtaAnfrage.tsx:defaultsByLocale.en.badges[0]) | — | — |
| `/en/solar-panel-installation-process-switzerland` | indexable | generated HTML (body) | — | — | — |
| `/en/solar-panel-installation-switzerland` | indexable | generated HTML (body, metadata, faq) | — | — | — |
| `/en/solar-panel-maintenance-costs` | indexable | generated HTML (body) | — | — | — |
| `/en/solar-panel-types-comparison` | indexable | generated HTML (body) | — | — | — |
| `/en/solar-panels-swiss-climate` | indexable | generated HTML (body) | — | — | — |
| `/en/solar-subsidies` | indexable | generated HTML (body) | — | — | — |
| `/en/solar-subsidies-canton-zurich` | indexable | generated HTML (body) | — | — | — |
| `/en/solar-with-battery` | indexable | generated HTML (body) | — | — | — |
| `/it` | indexable | generated HTML (body, metadata, faq) | restored (rendered HTML delta; body, faq; components/CtaAnfrage.tsx:defaultsByLocale.fr.badges[0]; components/CtaAnfrage.tsx:defaultsByLocale.it.subtitle; components/CtaAnfrage.tsx:defaultsByLocale.it.badges[0]; lib/faqData.ts:faqContent.it service answer; lib/i18n/it.ts:hero.free; lib/i18n/it.ts:usp.free.title) | — | — |
| `/it/blog` | indexable | generated HTML (body) | restored (rendered HTML delta; body; components/PlzWidget.tsx:content.fr.badges[2]; components/PlzWidget.tsx:content.it.badges[2]) | — | — |
| `/it/blog/accumulo-batteria-impianto-solare` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/accumulo-pv-conviene` | indexable | generated HTML (no target claim) | — | — | — |
| `/it/blog/assicurazione-impianto-solare-svizzera` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/azienda-solare-locale-nazionale` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/batteria-solare-rischio-incendio-sicurezza-svizzera` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/calcolatore-solare-potenziale-costi` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/centrale-balcone-svizzera` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/checklist-offerte-solari` | indexable | generated HTML (body) | — | restored (rendered HTML delta; body; lib/city-content-it.ts:cityContentsIT.lugano.heroDescription; content/autoblog/solar-offerten-checkliste-2026-so-vergleichen-sie-photovoltaik-angebote-in-der-s.json:articles.it.ctaButton) | — |
| `/it/blog/checklist-offerte-solari-proprietari` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/come-funziona-pvpro` | indexable | generated HTML (body, metadata, faq) | restored (rendered HTML delta; body, faq; content/autoblog/wie-funktioniert-pv-pro-ihr-weg-zur-massgeschneiderten-solaranlage.json:articles.it.faqs.0) | — | — |
| `/it/blog/confronto-fornitori-fotovoltaico` | indexable | generated HTML (body, faq) | — | — | — |
| `/it/blog/confronto-offerte-complete-solari` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/consulenza-fotovoltaica-indipendente` | indexable | generated HTML (body, faq) | — | restored (rendered HTML delta; body; content/autoblog/photovoltaik-beratung-unabhangig-so-finden-sie-die-beste-losung-in-der-schweiz-2.json:articles.it.ctaText) | — |
| `/it/blog/convenienza-accumulatore-svizzera` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/costi-impianto-solare-svizzera` | indexable | generated HTML (body, faq) | — | — | restored (rendered HTML delta; body, faq; content/autoblog/kosten-einer-solaranlage-in-der-schweiz-2026-der-komplette-preis-ratgeber.json:articles.it.sections.3.bullets.1; content/autoblog/kosten-einer-solaranlage-in-der-schweiz-2026-der-komplette-preis-ratgeber.json:articles.it.faqs.0) |
| `/it/blog/costi-installazione-pannelli-solari` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/costi-manutenzione-impianti-solari` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/costi-pv-casa-unifamiliare` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/costi-solare-edificio-plurifamiliare` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/costi-solare-tetto-piano` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/detrazione-fiscale-fotovoltaico` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/detrazione-fiscale-impianto-solare-svizzera-2026` | indexable | generated HTML (body) | — | restored (rendered HTML delta; body; lib/blogArticles.ts:solaranlage-steuerabzug-schweiz-2026.it.ctaText) | — |
| `/it/blog/domande-al-solarteur` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/durata-impianto-solare-svizzera` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/errori-confronto-offerte-solari` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/fornitori-solari-pianificazione` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/fotovoltaico-agricoltura-svizzera` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/fotovoltaico-pompa-calore` | indexable | generated HTML (no target claim) | — | — | — |
| `/it/blog/impianti-solari-immobili-commerciali` | indexable | generated HTML (body, faq) | — | — | restored (rendered HTML delta; body, faq; content/autoblog/solaranlage-fur-gewerbeimmobilien-in-der-schweiz-der-ultimative-ratgeber-2026.json:articles.it.faqs.0) |
| `/it/blog/impianto-solare-pompa-calore-svizzera` | indexable | generated HTML (body) | — | restored (rendered HTML delta; body; lib/blogArticles.ts:photovoltaik-mit-waermepumpe.it.ctaText) | — |
| `/it/blog/impianto-solare-tetto-nord-svizzera` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/impianto-zev-autoconsumo` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/incentivi-fotovoltaici-svizzera-2026` | indexable | generated HTML (body) | — | — | restored (rendered HTML delta; body; lib/blogArticles.ts:foerderungen-photovoltaik-2026.it.sections[Kantonale Programme und Steuerabzug].bullets) |
| `/it/blog/incentivi-solari-cantone` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/installatore-solare-fallimento-garanzia-svizzera` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/investimento-impianto-solare-2026` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/massimizzare-autoconsumo-solare` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/offerte-solari-risparmio` | indexable | generated HTML (body, faq) | — | — | — |
| `/it/blog/pannelli-solari-cinesi-vs-europei-svizzera` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/pannelli-solari-inverno-svizzera` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/pianificazione-solare-aziendale-cinque-passi` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/progettazione-fotovoltaica-svizzera` | indexable | generated HTML (no target claim) | — | — | — |
| `/it/blog/riconoscere-qualita-impianti-solari` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/roi-impianto-solare-svizzera` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/scegliere-installatore-solare-svizzera` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/tre-offerte-solari` | indexable | generated HTML (body, faq) | — | — | — |
| `/it/blog/trovare-installatore-fotovoltaico` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/trovare-installatore-solare-certificato` | indexable | generated HTML (body) | — | — | — |
| `/it/blog/trovare-miglior-installatore-solare-svizzera` | indexable | generated HTML (body, faq) | — | — | — |
| `/it/blog/vale-la-pena-impianto-solare-svizzera-2026` | indexable | generated HTML (body, faq) | — | — | — |
| `/it/blog/verifica-azienda-solare-affidabile` | indexable | generated HTML (body) | — | restored (rendered HTML delta; body; content/autoblog/solarfirma-prufen-schweiz-so-finden-sie-seriose-photovoltaik-partner-2026.json:articles.it.ctaText) | — |
| `/it/calcolatore-solare` | indexable | generated HTML (body) | restored (rendered HTML delta; body; app/it/calcolatore-solare/page.tsx:hero trust badge; components/CtaAnfrage.tsx:defaultsByLocale.fr.badges[0]; components/CtaAnfrage.tsx:defaultsByLocale.it.subtitle; components/CtaAnfrage.tsx:defaultsByLocale.it.badges[0]) | — | — |
| `/it/centrale-balcone` | indexable | generated HTML (body) | — | — | — |
| `/it/chi-siamo` | indexable | generated HTML (body) | restored (rendered HTML delta; body; app/it/chi-siamo/page.tsx:transparency card: Servizio gratuito) | — | — |
| `/it/come-funziona` | indexable | generated HTML (body) | restored (rendered HTML delta; body; app/it/come-funziona/page.tsx:step 1 detail; app/it/come-funziona/page.tsx:benefits card: Gratuito) | — | — |
| `/it/come-funziona-solare` | indexable | generated HTML (body) | — | — | — |
| `/it/comparatore-fotovoltaico-svizzera` | indexable | generated HTML (body, faq) | — | — | — |
| `/it/confronto-tipi-impianti-solari` | indexable | generated HTML (body) | — | — | — |
| `/it/costi-impianto-solare` | indexable | generated HTML (body) | restored (rendered HTML delta; body; components/CtaAnfrage.tsx:defaultsByLocale.fr.badges[0]; components/CtaAnfrage.tsx:defaultsByLocale.it.subtitle; components/CtaAnfrage.tsx:defaultsByLocale.it.badges[0]) | — | — |
| `/it/costo-fv-per-m2` | indexable | generated HTML (body) | — | — | — |
| `/it/faq` | indexable | generated HTML (body, faq) | restored (rendered HTML delta; body, faq; lib/faqData.ts:faqContent.it service answer) | — | — |
| `/it/fotovoltaico-clima-svizzero` | indexable | generated HTML (body) | — | — | — |
| `/it/fotovoltaico-ticino` | indexable | generated HTML (body) | — | — | — |
| `/it/incentivi-solari` | indexable | generated HTML (body) | — | — | — |
| `/it/incentivi-solari-cantone-zurigo` | indexable | generated HTML (body) | — | — | — |
| `/it/installare-impianto-solare-svizzera` | indexable | generated HTML (body, metadata, faq) | — | — | — |
| `/it/manutenzione-fotovoltaico-costi` | indexable | generated HTML (body) | — | — | — |
| `/it/note-legali` | indexable | generated HTML (no target claim) | — | — | — |
| `/it/processo-installazione-fotovoltaico-svizzera` | indexable | generated HTML (body) | — | — | — |
| `/it/protezione-dati` | indexable | generated HTML (no target claim) | — | — | — |
| `/it/richiedere-preventivo-solare` | indexable | generated HTML (body, metadata) | — | — | — |
| `/it/solare-casa-unifamiliare` | indexable | generated HTML (body) | — | — | — |
| `/it/solare-con-accumulo` | indexable | generated HTML (body) | — | — | — |
| `/it/solare-condominio` | indexable | generated HTML (body) | — | — | — |
| `/it/soluzione-completa-fotovoltaico-svizzera` | indexable | generated HTML (body, faq) | — | — | — |
| `/anfrage` | non-indexable (form) | generated HTML (metadata) | — | — | — |
| `/fr/demande` | non-indexable (form) | generated HTML (metadata) | — | — | — |
| `/en/request` | non-indexable (form) | generated HTML (metadata) | — | — | — |
| `/it/richiesta` | non-indexable (form) | generated HTML (metadata) | — | — | — |
| `/danke` | non-indexable (conversion) | generated HTML (body) | — | — | — |
| `/fr/merci` | non-indexable (conversion) | generated HTML (body) | — | — | — |
| `/en/thank-you` | non-indexable (conversion) | generated HTML (body) | — | — | — |
| `/it/grazie` | non-indexable (conversion) | generated HTML (body) | — | — | — |
| `/pv-kosten` | non-indexable (non-SEO compatibility page) | generated HTML (no target claim) | — | — | — |
| `/fr/pv-kosten` | non-indexable (non-SEO compatibility page) | generated HTML (no target claim) | — | — | — |
| `/en/pv-kosten` | non-indexable (non-SEO compatibility page) | generated HTML (no target claim) | — | — | — |
| `/it/pv-kosten` | non-indexable (non-SEO compatibility page) | generated HTML (no target claim) | — | — | — |

## Historical original-slot evidence

Parsed from lines added when comparing pre-restoration `f61dc7b` to original `a0dbab8`. Ledger evidence below supplies route/dependency mapping; this source table alone never creates route fanout.

| Original source slot | Detected category | Original line |
| --- | --- | --- |
| `app/(de)/solaranlage-installieren-schweiz/page.tsx:10` | plain-free | description: 'Solaranlage installieren lassen in der Schweiz: Finden Sie zertifizierte Anbieter in Ihrem Kanton. Kostenlose Offerten vergleichen und bis zu 30% sparen mit PvPro.ch.', |
| `app/(de)/solaranlage-kosten/page.tsx:10` | plain-free | description: 'Was kostet eine Solaranlage in der Schweiz? Aktuelle Preise 2026: 15\'000 – 35\'000 CHF für ein Einfamilienhaus. Kosten pro kWp, Förderungen und Speicher. Kostenlose Offerten vergleichen.', |
| `app/(de)/ueber-uns/page.tsx:143` | 100-free | { title: 'Kostenloser Service', text: 'Unser Service ist 100% kostenlos für Hausbesitzer. Wir finanzieren uns ausschliesslich durch Provisionen der Installateure — ohne Aufpreis für Sie.' }, |
| `app/(de)/wie-es-funktioniert/page.tsx:56` | 100-free | { Icon: Euro,        title: 'Kostenlos',           text: 'Unser Service ist für Hausbesitzer zu 100% kostenlos. Wir finanzieren uns durch Installateurprovisionen.' }, |
| `app/(de)/wie-es-funktioniert/page.tsx:152` | plain-free | { q: 'Ist der Service wirklich kostenlos?', a: 'Ja, zu 100%. Wir finanzieren uns durch Provisionen der Installateure — ohne Aufpreis für Sie.' }, |
| `app/en/about-us/page.tsx:142` | 100-free | { title: 'Free service', text: 'Our service is 100% free for homeowners. We are funded solely by installer commissions — at no extra cost to you.' }, |
| `app/en/how-it-works/page.tsx:66` | 100-free | { Icon: Euro,        title: 'Free of charge',   text: 'Our service is 100% free for homeowners. We are funded by installer commissions — no extra cost for you.' }, |
| `app/en/how-it-works/page.tsx:159` | plain-free | { q: 'Is the service really free?', a: 'Yes, 100%. We are funded by installer commissions — at no extra cost to you.' }, |
| `app/en/layout.tsx:12` | plain-free | description: 'Compare solar system offers from certified installers in Switzerland for free. Save up to 30% by comparing. No obligation.', |
| `app/en/page.tsx:45` | 100-free | answer: 'Yes, our service is 100% free and non-binding for you. We are financed through commissions from our partner installers. You pay nothing for the referral and still receive the same prices as if you contacted the installer directly.' |
| `app/en/solar-panel-costs/page.tsx:11` | plain-free | description: 'How much does a solar installation cost in Switzerland? 2026 prices: CHF 15,000 – 35,000 for a detached house. Costs per kWp, subsidies and storage. Compare offers free of charge.', |
| `app/en/solar-panel-installation-switzerland/page.tsx:10` | plain-free | description: 'Solar panel installation in Switzerland: find certified providers in your canton. Compare free quotes and save up to 30% with PvPro.ch.', |
| `app/fr/a-propos/page.tsx:142` | 100-free | { title: 'Service gratuit', text: "Notre service est 100% gratuit pour les propriétaires. Nous nous finançons exclusivement par les commissions des installateurs — sans surcoût pour vous." }, |
| `app/fr/comment-ca-marche/page.tsx:66` | 100-free | { Icon: Euro,        title: 'Gratuit',              text: "Notre service est 100% gratuit pour les propriétaires. Nous nous finançons par des commissions des installateurs." }, |
| `app/fr/comment-ca-marche/page.tsx:159` | plain-free | { q: 'Le service est-il vraiment gratuit ?', a: "Oui, à 100%. Nous nous finançons par des commissions des installateurs — sans supplément pour vous." }, |
| `app/fr/cout-installation-solaire/page.tsx:11` | plain-free | description: 'Combien coûte une installation solaire en Suisse ? Prix 2026 : 15\'000 – 35\'000 CHF pour une maison individuelle. Coûts par kWp, subventions et stockage. Comparez des offres gratuitement.', |
| `app/fr/demander-offre-panneau-solaire/page.tsx:129` | plain-free | pour la même installation peuvent varier de plusieurs milliers de francs selon l&apos;installateur. PvPro.ch vous permet d&apos;obtenir gratuitement jusqu&apos;à 3 offres d&apos;installateurs locaux certifiés — en moins de 2 minutes. |
| `app/fr/installer-panneau-solaire-suisse/page.tsx:10` | plain-free | description: "Faire installer une installation solaire en Suisse : trouvez des installateurs certifiés dans votre canton. Comparez des offres gratuites et économisez jusqu'à 30% avec PvPro.ch.", |
| `app/fr/layout.tsx:12` | plain-free | description: 'Comparez gratuitement les offres d’installateurs solaires certifiés en Suisse. Économisez jusqu’à 30 %, sans engagement.', |
| `app/fr/page.tsx:45` | 100-free | answer: 'Oui, notre service est à 100% gratuit et sans engagement pour vous. Nous nous finançons par des commissions de nos installateurs partenaires. Vous ne payez rien pour l\'intermédiation et recevez néanmoins les mêmes prix qu\'en cas  |
| `app/it/chi-siamo/page.tsx:142` | 100-free | { title: 'Servizio gratuito', text: "Il nostro servizio è 100% gratuito per i proprietari. Ci finanziamo esclusivamente con le commissioni degli installatori — senza costi aggiuntivi per te." }, |
| `app/it/come-funziona/page.tsx:66` | 100-free | { Icon: Euro,        title: 'Gratuito',                 text: 'Il nostro servizio è 100% gratuito per i proprietari. Ci finanziamo con commissioni degli installatori.' }, |
| `app/it/come-funziona/page.tsx:159` | plain-free | { q: 'Il servizio è davvero gratuito?', a: "Sì, al 100%. Ci finanziamo con commissioni degli installatori — senza costi aggiuntivi per te." }, |
| `app/it/costi-impianto-solare/page.tsx:11` | plain-free | description: "Quanto costa un impianto solare in Svizzera? Prezzi 2026: 15'000 – 35'000 CHF per una casa unifamiliare. Costi per kWp, incentivi e accumulo. Confronta offerte gratuitamente.", |
| `app/it/installare-impianto-solare-svizzera/page.tsx:10` | plain-free | description: 'Installare un impianto solare in Svizzera: trova installatori certificati nel tuo Cantone. Confronta preventivi gratuiti e risparmia fino al 30% con PvPro.ch.', |
| `app/it/layout.tsx:12` | plain-free | description: 'Confronta gratuitamente le offerte di impianti fotovoltaici da installatori certificati in Ticino. Risparmia fino al 30% con il confronto. 100% senza impegno.', |
| `components/PlzWidget.tsx:22` | 100-free | badges: ['Keine Werbeanrufe', 'Geprüfte Installateure', '100% kostenlos'], |
| `components/PlzWidget.tsx:30` | 100-free | badges: ["Pas d'appels commerciaux", 'Installateurs certifiés', '100% gratuit'], |
| `components/PlzWidget.tsx:38` | 100-free | badges: ['No cold calls', 'Certified installers', '100% free'], |
| `components/PlzWidget.tsx:46` | 100-free | badges: ['Nessuna chiamata commerciale', 'Installatori certificati', '100% gratuito'], |
| `content/autoblog/kosten-einer-solaranlage-in-der-schweiz-2026-der-komplette-preis-ratgeber.json:53` | unqualified-tax | "Steuerabzüge zu 100% möglich, mit kantonalen Unterschiede.", |
| `content/autoblog/kosten-einer-solaranlage-in-der-schweiz-2026-der-komplette-preis-ratgeber.json:87` | unqualified-tax | "answer": "In fast allen Kantonen können Sie die Kosten zu 100% abziehen. Es gibt jedoch kantonale Unterschiede, insbesondere bei Neubauten." |
| `content/autoblog/kosten-einer-solaranlage-in-der-schweiz-2026-der-komplette-preis-ratgeber.json:143` | unqualified-tax | "Déductions fiscales possibles à 100%, avec des différences cantonales.", |
| `content/autoblog/kosten-einer-solaranlage-in-der-schweiz-2026-der-komplette-preis-ratgeber.json:177` | unqualified-tax | "answer": "Dans presque tous les cantons, vous pouvez déduire 100% des coûts. Cependant, il existe des différences cantonales, notamment pour les nouvelles constructions." |
| `content/autoblog/kosten-einer-solaranlage-in-der-schweiz-2026-der-komplette-preis-ratgeber.json:233` | unqualified-tax | "100% tax deductions possible, with cantonal differences.", |
| `content/autoblog/kosten-einer-solaranlage-in-der-schweiz-2026-der-komplette-preis-ratgeber.json:267` | unqualified-tax | "answer": "In almost all cantons, you can deduct costs by 100%. However, there are cantonal differences, especially for new buildings." |
| `content/autoblog/kosten-einer-solaranlage-in-der-schweiz-2026-der-komplette-preis-ratgeber.json:323` | unqualified-tax | "Detrazioni fiscali al 100% possibili, con variazioni cantonali.", |
| `content/autoblog/kosten-einer-solaranlage-in-der-schweiz-2026-der-komplette-preis-ratgeber.json:357` | unqualified-tax | "answer": "In quasi tutti i Cantoni puoi detrarre i costi al 100%. Tuttavia, ci sono differenze cantonali, specialmente per le nuove costruzioni." |
| `content/autoblog/photovoltaik-beratung-unabhangig-so-finden-sie-die-beste-losung-in-der-schweiz-2.json:77` | plain-free | "ctaText": "Nutzen Sie unser Netzwerk von zertifizierten Schweizer Fachbetrieben und sparen Sie bis zu 30% durch einen transparenten Offertenvergleich. Unser Service ist unverbindlich und kostenlos.", |
| `content/autoblog/photovoltaik-beratung-unabhangig-so-finden-sie-die-beste-losung-in-der-schweiz-2.json:168` | plain-free | "ctaText": "Profitez de notre réseau d'entreprises spécialisées suisses certifiées et économisez jusqu'à 30 % en comparant des offres transparentes. Notre service est sans engagement et gratuit.", |
| `content/autoblog/photovoltaik-beratung-unabhangig-so-finden-sie-die-beste-losung-in-der-schweiz-2.json:259` | plain-free | "ctaText": "Utilize our network of certified Swiss specialized companies and save up to 30% through a transparent comparison of offers. Our service is non-binding and free of charge.", |
| `content/autoblog/photovoltaik-beratung-unabhangig-so-finden-sie-die-beste-losung-in-der-schweiz-2.json:351` | plain-free | "ctaText": "Sfrutta la nostra rete di aziende specializzate svizzere certificate e risparmia fino al 30% attraverso un confronto trasparente delle offerte. Il nostro servizio è senza impegno e gratuito.", |
| `content/autoblog/solar-offerten-checkliste-2026-so-vergleichen-sie-photovoltaik-angebote-in-der-s.json:63` | plain-free | "ctaButton": "Jetzt Solar-Offerten kostenlos vergleichen und bis zu 30% sparen", |
| `content/autoblog/solar-offerten-checkliste-2026-so-vergleichen-sie-photovoltaik-angebote-in-der-s.json:139` | plain-free | "ctaButton": "Comparez dès maintenant les offres solaires gratuitement et économisez jusqu'à 30%", |
| `content/autoblog/solar-offerten-checkliste-2026-so-vergleichen-sie-photovoltaik-angebote-in-der-s.json:215` | plain-free | "ctaButton": "Compare Solar Offers for Free Now and Save Up to 30%", |
| `content/autoblog/solar-offerten-checkliste-2026-so-vergleichen-sie-photovoltaik-angebote-in-der-s.json:291` | plain-free | "ctaButton": "Ora confronta offerte solari gratuitamente e risparmia fino al 30%", |
| `content/autoblog/solar-offerten-warum-3-angebote-der-goldene-standard-in-der-schweiz-sind.json:71` | plain-free | "ctaText": "Nutzen Sie die Chance auf eine Ersparnis von bis zu 30 % und sichern Sie sich die beste handwerkliche Qualität für Ihr Dach. Fordern Sie jetzt Ihre 3 kostenlosen Solar-Offerten an.", |
| `content/autoblog/solar-offerten-warum-3-angebote-der-goldene-standard-in-der-schweiz-sind.json:156` | plain-free | "ctaText": "Profitez d'une opportunité d'économiser jusqu'à 30 % et assurez-vous de la meilleure qualité artisanale pour votre toit. Demandez dès maintenant vos 3 offres solaires gratuites.", |
| `content/autoblog/solar-offerten-warum-3-angebote-der-goldene-standard-in-der-schweiz-sind.json:241` | plain-free | "ctaText": "Take the opportunity to save up to 30% and secure the best craftsmanship for your roof. Request your 3 free solar quotes now.", |
| `content/autoblog/solar-offerten-warum-3-angebote-der-goldene-standard-in-der-schweiz-sind.json:326` | plain-free | "ctaText": "Sfruttate l'opportunità di un risparmio fino al 30% e garantitevi la migliore qualità artigianale per il vostro tetto. Richiedete subito le vostre 3 offerte solari gratuite.", |
| `content/autoblog/solaranlage-fur-gewerbeimmobilien-in-der-schweiz-der-ultimative-ratgeber-2026.json:96` | unqualified-tax | "answer": "Die Investitionskosten können zu 100 Prozent von der Steuer abgesetzt werden, was die Steuerlast im Installationsjahr senkt." |
| `content/autoblog/solaranlage-fur-gewerbeimmobilien-in-der-schweiz-der-ultimative-ratgeber-2026.json:195` | unqualified-tax | "answer": "Les coûts d'investissement peuvent être déduits à 100 % des impôts, ce qui réduit la charge fiscale l'année de l'installation." |
| `content/autoblog/solaranlage-fur-gewerbeimmobilien-in-der-schweiz-der-ultimative-ratgeber-2026.json:294` | unqualified-tax | "answer": "The investment costs can be 100 percent deducted from taxes, reducing the tax burden in the installation year." |
| `content/autoblog/solaranlage-fur-gewerbeimmobilien-in-der-schweiz-der-ultimative-ratgeber-2026.json:393` | unqualified-tax | "answer": "I costi di investimento possono essere dedotti al 100% dalle tasse, riducendo il carico fiscale nell'anno di installazione." |
| `content/autoblog/solarfirma-prufen-schweiz-so-finden-sie-seriose-photovoltaik-partner-2026.json:69` | plain-free | "ctaText": "Mit PVPro.ch machen wir Ihnen den Prozess so einfach wie möglich. Unser Netzwerk umfasst über 25 zertifizierte Schweizer Fachpartner. Vergleichen Sie kostenlos und unverbindlich Ihre Optionen und sichern Sie sich eine Ersparnis  |
| `content/autoblog/solarfirma-prufen-schweiz-so-finden-sie-seriose-photovoltaik-partner-2026.json:152` | plain-free | "ctaText": "Avec PVPro.ch, nous facilitons au maximum le processus. Notre réseau comprend plus de 25 partenaires suisses certifiés. Comparez gratuitement et sans engagement vos options et économisez jusqu'à 30 %.", |
| `content/autoblog/solarfirma-prufen-schweiz-so-finden-sie-seriose-photovoltaik-partner-2026.json:235` | plain-free | "ctaText": "With PVPro.ch, we make the process as easy as possible for you. Our network includes over 25 certified Swiss professional partners. Compare your options for free and without obligation, and secure savings of up to 30%.", |
| `content/autoblog/solarfirma-prufen-schweiz-so-finden-sie-seriose-photovoltaik-partner-2026.json:319` | plain-free | "ctaText": "Con PVPro.ch rendiamo il processo il più semplice possibile. Il nostro network include oltre 25 partner svizzeri certificati. Confrontate gratuitamente e senza impegno le vostre opzioni e ottenete un risparmio fino al 30%.", |
| `content/autoblog/solarpanel-installation-kosten-2026-was-kostet-photovoltaik-in-der-schweiz.json:65` | plain-free | "ctaText": "Die Solarpanel Installation Kosten 2026 sind durch Klarheit und Förderung kalkulierbar. Beginnen Sie Ihr Projekt mit einem fundierten Vergleich und sparen Sie bis zu 30 %. Holen Sie sich über PVPro.ch kostenlos und unverbindlich |
| `content/autoblog/solarpanel-installation-kosten-2026-was-kostet-photovoltaik-in-der-schweiz.json:144` | plain-free | "ctaText": "En 2026, les coûts d'installation de panneaux solaires sont calculables grâce à la clarté et aux subventions. Commencez votre projet avec une comparaison éclairée et économisez jusqu'à 30 %. Obtenez des offres gratuites et sans  |
| `content/autoblog/solarpanel-installation-kosten-2026-was-kostet-photovoltaik-in-der-schweiz.json:302` | plain-free | "ctaText": "I costi di installazione dei pannelli solari nel 2026 sono calcolabili grazie alla trasparenza e agli incentivi. Avviate il vostro progetto con un confronto informato e risparmiate fino al 30%. Ottenete gratuitamente e senza imp |
| `content/autoblog/wie-funktioniert-pv-pro-ihr-weg-zur-massgeschneiderten-solaranlage.json:70` | plain-free | "ctaText": "Mit PVPro.ch gewinnen Sie Klarheit und sparen bis zu 30% beim Kauf Ihrer Solaranlage. Unser Service ist kostenlos und unverbindlich.", |
| `content/autoblog/wie-funktioniert-pv-pro-ihr-weg-zur-massgeschneiderten-solaranlage.json:76` | 100-free | "question": "Ist die Nutzung von PVPro.ch wirklich zu 100% kostenlos?", |
| `content/autoblog/wie-funktioniert-pv-pro-ihr-weg-zur-massgeschneiderten-solaranlage.json:77` | plain-free | "answer": "Ja, die Nutzung unserer Plattform ist absolut kostenlos. Wir finanzieren uns über Vermittlungsgebühren, die von unseren Partnerbetrieben gezahlt werden." |
| `content/autoblog/wie-funktioniert-pv-pro-ihr-weg-zur-massgeschneiderten-solaranlage.json:162` | plain-free | "ctaText": "Avec PVPro.ch, gagnez en clarté et économisez jusqu'à 30 % sur l'achat de votre installation solaire. Notre service est gratuit et sans engagement.", |
| `content/autoblog/wie-funktioniert-pv-pro-ihr-weg-zur-massgeschneiderten-solaranlage.json:168` | 100-free | "question": "L'utilisation de PVPro.ch est-elle vraiment 100 % gratuite ?", |
| `content/autoblog/wie-funktioniert-pv-pro-ihr-weg-zur-massgeschneiderten-solaranlage.json:169` | plain-free | "answer": "Oui, l'utilisation de notre plateforme est absolument gratuite. Nous nous finançons par des frais de courtage payés par nos partenaires." |
| `content/autoblog/wie-funktioniert-pv-pro-ihr-weg-zur-massgeschneiderten-solaranlage.json:254` | plain-free | "ctaText": "With PVPro.ch, you gain clarity and save up to 30% on the purchase of your solar system. Our service is free and non-binding.", |
| `content/autoblog/wie-funktioniert-pv-pro-ihr-weg-zur-massgeschneiderten-solaranlage.json:260` | 100-free | "question": "Is using PVPro.ch really 100% free?", |
| `content/autoblog/wie-funktioniert-pv-pro-ihr-weg-zur-massgeschneiderten-solaranlage.json:261` | plain-free | "answer": "Yes, using our platform is absolutely free. We are financed through referral fees paid by our partner companies." |
| `content/autoblog/wie-funktioniert-pv-pro-ihr-weg-zur-massgeschneiderten-solaranlage.json:346` | plain-free | "ctaText": "Con PVPro.ch ottieni chiarezza e risparmi fino al 30% sull'acquisto del tuo impianto solare. Il nostro servizio è gratuito e senza impegno.", |
| `content/autoblog/wie-funktioniert-pv-pro-ihr-weg-zur-massgeschneiderten-solaranlage.json:352` | 100-free | "question": "L'utilizzo di PVPro.ch è davvero al 100% gratuito?", |
| `content/autoblog/wie-funktioniert-pv-pro-ihr-weg-zur-massgeschneiderten-solaranlage.json:353` | plain-free | "answer": "Sì, l'utilizzo della nostra piattaforma è assolutamente gratuito. Ci finanziamo tramite commissioni di intermediazione pagate dalle nostre aziende partner." |
| `content/autoblog/zev-solaranlage-schweiz-der-komplette-ratgeber-fur-den-eigenverbrauch-2026.json:64` | plain-free | "ctaText": "Eine ZEV Solaranlage ist der sichere Weg, um Immobilien wirtschaftlich und ökologisch aufzustellen. Vertrauen Sie auf geprüfte Expertise und sparen Sie bis zu 30 Prozent der Investitionskosten. Jetzt kostenlose Offerten für Ihre |
| `content/autoblog/zev-solaranlage-schweiz-der-komplette-ratgeber-fur-den-eigenverbrauch-2026.json:142` | plain-free | "ctaText": "Une installation solaire ZEV est la voie sûre pour positionner vos biens immobiliers de manière économique et écologique. Faites confiance à une expertise éprouvée et économisez jusqu'à 30 % sur vos coûts d'investissement. Obten |
| `content/autoblog/zev-solaranlage-schweiz-der-komplette-ratgeber-fur-den-eigenverbrauch-2026.json:298` | plain-free | "ctaText": "Un impianto solare ZEV è la via sicura per rendere le proprietà economiche ed ecologiche. Affidati a competenze comprovate e risparmia fino al 30 percento sui costi di investimento. Richiedi ora offerte gratuite per il tuo impia |
| `lib/blogArticles.ts:75` | plain-free | ctaText: 'Eine vollwertige Solaranlage spart Ihnen jährlich 10–20× mehr als ein Balkonkraftwerk. Vergleichen Sie kostenlos bis zu 3 Offerten.', |
| `lib/blogArticles.ts:121` | plain-free | ctaText: "Une installation solaire complète vous fait économiser 10 à 20 fois plus par an qu'une mini-centrale de balcon. Comparez gratuitement jusqu'à 3 offres.", |
| `lib/blogArticles.ts:167` | plain-free | ctaText: 'A full solar system saves you 10–20 times more per year than a balcony power station. Compare up to 3 quotes for free.', |
| `lib/blogArticles.ts:213` | plain-free | ctaText: "Un impianto fotovoltaico completo ti fa risparmiare 10–20 volte di più all'anno rispetto a un mini impianto da balcone. Confronta gratuitamente fino a 3 preventivi.", |
| `lib/blogArticles.ts:430` | unqualified-tax | bullets: ['Genf: SIG-Bonus +25% auf Installationskosten', 'Bern: Gebäudeprogramm bis CHF 1\'500', 'Wallis: kantonaler Beitrag bis CHF 2\'000', 'Alle Kantone: 100% Steuerabzug als Unterhalt'], |
| `lib/blogArticles.ts:477` | unqualified-tax | bullets: ["Genève: bonus SIG +25% sur les coûts d'installation", "Vaud: programme cantonal jusqu'à CHF 1'500", "Valais: contribution cantonale jusqu'à CHF 2'000", "Tous les cantons: déduction fiscale 100% en entretien"], |
| `lib/blogArticles.ts:524` | unqualified-tax | bullets: ['Geneva: SIG bonus +25% on installation costs', 'Vaud: cantonal programme up to CHF 1,500', 'Valais: cantonal contribution up to CHF 2,000', 'All cantons: 100% tax deduction as property maintenance'], |
| `lib/blogArticles.ts:571` | unqualified-tax | bullets: ["Ginevra: bonus SIG +25% sui costi di installazione", "Vaud: programma cantonale fino a CHF 1.500", "Vallese: contributo cantonale fino a CHF 2.000", "Ticino DFE: contributo cantonale fino a CHF 1.800", "Tutti i cantoni: deduzione |
| `lib/blogArticles.ts:2037` | plain-free | ctaText: "2026 und 2027 sind die letzten Jahre mit vollem Steuerabzug auf Bundesebene. Holen Sie jetzt kostenlos bis zu 3 Offerten von zertifizierten Installateuren aus Ihrem Kanton ein — und sichern Sie sich CHF 4'000–10'000 Steuerersparni |
| `lib/blogArticles.ts:2180` | plain-free | ctaText: "2026 et 2027 sont les dernières années avec pleine déduction fiscale au niveau fédéral. Demandez maintenant gratuitement jusqu'à 3 offres d'installateurs certifiés de votre canton — et sécurisez CHF 4'000–10'000 d'économie fiscale |
| `lib/blogArticles.ts:2320` | plain-free | ctaText: "2026 and 2027 are the last years with full tax deduction at the federal level. Request up to 3 free quotes from certified installers in your canton now — and secure CHF 4,000–10,000 in tax savings.", |
| `lib/blogArticles.ts:2460` | plain-free | ctaText: "Il 2026 e il 2027 sono gli ultimi anni con piena deduzione fiscale a livello federale. Richiedi ora gratuitamente fino a 3 preventivi da installatori certificati del tuo Cantone — e assicurati CHF 4'000–10'000 di risparmio fiscale |
| `lib/blogArticles.ts:2616` | plain-free | ctaText: 'Solaranlage mit Wärmepumpe kombinieren und bis zu 70% Heizkosten sparen — PvPro.ch vermittelt kostenlos zertifizierte Installateure, die beide Systeme aus einer Hand planen und installieren.', |
| `lib/blogArticles.ts:2774` | plain-free | ctaText: "Combinez panneau solaire et pompe à chaleur pour économiser jusqu'à 70% sur vos coûts de chauffage — PvPro.ch vous met gratuitement en contact avec des installateurs certifiés qui planifient et installent les deux systèmes.", |
| `lib/blogArticles.ts:2932` | plain-free | ctaText: 'Combine solar panels with a heat pump and save up to 70% on heating costs — PvPro.ch connects you free of charge with certified installers who plan and install both systems.', |
| `lib/blogArticles.ts:3090` | plain-free | ctaText: "Combina impianto solare e pompa di calore e risparmia fino al 70% sui costi di riscaldamento — PvPro.ch ti mette gratuitamente in contatto con installatori certificati che pianificano e installano entrambi i sistemi.", |
| `lib/blogArticles.ts:3194` | plain-free | highlight: 'Wer mindestens 3 Offerten vergleicht, spart im Schnitt CHF 2\'000–4\'000 für dieselbe Anlage. PvPro.ch übernimmt diesen Vergleich kostenlos für Sie.', |
| `lib/blogArticles.ts:3575` | plain-free | highlight: "Chi confronta almeno 3 preventivi risparmia in media CHF 2'000–4'000 per lo stesso impianto. PvPro.ch effettua questo confronto gratuitamente per voi.", |
| `lib/city-content-fr.ts:13` | plain-free | heroDescription: 'Genève, capitale internationale, offre d\'excellentes conditions pour l\'énergie solaire. Comparez gratuitement les offres d\'installateurs locaux certifiés et économisez jusqu\'à 30%.', |
| `lib/city-content-it.ts:13` | plain-free | heroDescription: 'Lugano, nel soleggiato Ticino, offre le migliori condizioni per l\'energia solare in tutta la Svizzera. Confronta gratuitamente le offerte di installatori locali certificati e risparmia fino al 30%.', |
| `lib/city-content.ts:100` | unqualified-tax | { name: 'Steuerabzug ZH', amount: '100%', description: 'Solaranlage vollständig als Unterhaltskosten absetzbar' }, |
| `lib/city-content.ts:108` | unqualified-tax | { question: 'Welche Förderung erhalte ich in Zürich 2026?', answer: 'Sie erhalten die bundesweite Einmalvergütung (EIV) via Pronovo, ergänzt durch den kantonalen Steuerabzug – die Anlage ist in ZH als Liegenschaftsunterhalt zu 100% absetzba |
| `lib/city-content.ts:161` | unqualified-tax | { name: 'Steuerabzug BE', amount: '100%', description: 'Anlagekosten als Unterhalt absetzbar' }, |
| `lib/city-content.ts:222` | unqualified-tax | { name: 'Steuerabzug BS/BL', amount: '100%', description: 'Vollständig als Liegenschaftsunterhalt absetzbar' }, |
| `lib/city-content.ts:248` | plain-free | heroDescription: 'Luzern kombiniert malerische Landschaft mit handfesten Solarvorteilen: 1\'598 Sonnenstunden, ein starkes kantonales Förderprogramm und lokale Installateure, die alpine Bedingungen kennen. Holen Sie jetzt Ihre kostenlose Ve |
| `lib/city-content.ts:282` | unqualified-tax | { name: 'Steuerabzug LU', amount: '100%', description: 'Anlagekosten absetzbar' }, |
| `lib/city-content.ts:402` | unqualified-tax | { name: 'Steuerabzug SG', amount: '100%', description: 'Vollständig absetzbar' }, |
| `lib/city-content.ts:462` | unqualified-tax | { name: 'Steuerabzug SZ', amount: '100%', description: 'Vorteilhaft wegen tiefer Steuern' }, |
| `lib/city-content.ts:522` | unqualified-tax | { name: 'Steuerabzug UR', amount: '100%', description: 'Anlagekosten absetzbar' }, |
| `lib/city-content.ts:582` | unqualified-tax | { name: 'Steuerabzug SH', amount: '100%', description: 'Anlagekosten absetzbar' }, |
| `lib/city-content.ts:642` | unqualified-tax | { name: 'Steuerabzug AI/AR', amount: '100%', description: 'Anlage steuerlich absetzbar' }, |
| `lib/city-content.ts:702` | unqualified-tax | { name: 'Steuerabzug GR', amount: '100%', description: 'Anlagekosten als Unterhalt absetzbar' }, |
| `lib/city-content.ts:762` | unqualified-tax | { name: 'Steuerabzug GL', amount: '100%', description: 'Anlagekosten absetzbar' }, |
| `lib/city-content.ts:822` | unqualified-tax | { name: 'Steuerabzug ZG', amount: '100%', description: 'Besonders wirksam dank tiefer Tarife' }, |
| `lib/city-content.ts:882` | unqualified-tax | { name: 'Steuerabzug OW/NW', amount: '100%', description: 'Anlagekosten absetzbar' }, |
| `lib/city-content.ts:942` | unqualified-tax | { name: 'Steuerabzug SO', amount: '100%', description: 'Vollständig als Unterhalt absetzbar' }, |
| `lib/city-content.ts:1002` | unqualified-tax | { name: 'Steuerabzug AG', amount: '100%', description: 'Vollständig als Unterhalt absetzbar' }, |
| `lib/city-content.ts:1028` | plain-free | heroDescription: "Genève bénéficie de 1'849 heures de soleil par an, d'une obligation solaire en vigueur et du programme SIG Prime Énergie. La Cité Internationale est devenue un leader européen de l'installation photovoltaïque. Demandez 3 o |
| `lib/city-content.ts:1062` | unqualified-tax | { name: "Déduction fiscale GE", amount: '100%', description: "Déductible comme entretien immobilier" }, |
| `lib/city-content.ts:1122` | unqualified-tax | { name: "Déduction fiscale VD", amount: '100%', description: "Déductible en entretien immobilier" }, |
| `lib/city-content.ts:1182` | unqualified-tax | { name: "Déduction fiscale VS", amount: '100%', description: "Déductible en entretien immobilier" }, |
| `lib/city-content.ts:1242` | unqualified-tax | { name: 'Deduzione fiscale TI', amount: '100%', description: 'Deducibile come manutenzione immobiliare' }, |
| `lib/city-content.ts:1304` | unqualified-tax | { name: 'Steuerliche Absetzbarkeit', amount: '100 % der Kosten', description: 'Alle Freiburger Gemeinden akzeptieren Solaranlagen als Unterhaltskosten – voll vom steuerbaren Einkommen absetzbar.' }, |
| `lib/city-content.ts:1442` | unqualified-tax | { name: 'Steuerliche Absetzbarkeit', amount: '100 % der Kosten', description: 'Solarinvestitionen sind im Kanton Wallis als Unterhaltskosten vollumfänglich abzugsfähig.' }, |
| `lib/city-content.ts:1511` | unqualified-tax | { name: 'Déductibilité fiscale', amount: '100 % des coûts', description: "Les installations solaires sont déductibles comme frais d'entretien dans toutes les communes fribourgeoises." }, |
| `lib/faqData.ts:45` | 100-free | answer: 'Ja, unser Service ist zu 100% kostenlos und unverbindlich für Sie. Wir finanzieren uns durch Provisionen von unseren Partner-Installateuren. Sie zahlen für die Vermittlung nichts und erhalten dennoch die gleichen Preise wie bei dir |
| `lib/faqData.ts:77` | 100-free | answer: "Oui, notre service est à 100% gratuit et sans engagement pour vous. Nous nous finançons par des commissions de nos installateurs partenaires. Vous ne payez rien pour l'intermédiation et recevez néanmoins les mêmes prix qu'en cas de |
| `lib/faqData.ts:109` | 100-free | answer: 'Yes, our service is 100% free and non-binding for you. We are financed through commissions from our partner installers. You pay nothing for the referral and still receive the same prices as if you contacted the installer directly.' |
| `lib/faqData.ts:141` | 100-free | answer: "Sì, il nostro servizio è al 100% gratuito e non vincolante per te. Ci finanziamo tramite commissioni dai nostri installatori partner. Non paghi nulla per l'intermediazione e ricevi comunque gli stessi prezzi come se contattassi dir |
| `lib/i18n/de.ts:28` | plain-free | description: 'Vergleichen Sie kostenlos Solaranlagen-Angebote von geprüften Installateuren in der Schweiz. Bis zu 30% sparen durch Angebotsvergleich.', |
| `lib/i18n/de.ts:134` | plain-free | homeDescription: 'Vergleichen Sie kostenlos Solaranlagen-Angebote von geprüften Installateuren in der Schweiz. Bis zu 30% sparen durch Angebotsvergleich. 100% unverbindlich.', |
| `lib/i18n/en.ts:30` | plain-free | description: 'Compare solar system offers from certified installers in Switzerland for free. Save up to 30% by comparing.', |
| `lib/i18n/en.ts:136` | plain-free | homeDescription: 'Compare solar system offers from certified installers in Switzerland for free. Save up to 30% by comparing. No obligation.', |
| `lib/i18n/fr.ts:30` | plain-free | description: 'Comparez gratuitement les offres d\'installations solaires d\'installateurs certifiés en Suisse. Économisez jusqu\'à 30% grâce à la comparaison.', |
| `lib/i18n/fr.ts:136` | plain-free | homeDescription: 'Comparez gratuitement les offres d\'installations solaires d\'installateurs certifiés en Suisse. Économisez jusqu\'à 30% grâce à la comparaison. 100% sans engagement.', |
| `lib/i18n/it.ts:30` | plain-free | description: 'Confronta gratuitamente le offerte di impianti fotovoltaici da installatori certificati in Ticino. Risparmia fino al 30% con il confronto.', |
| `lib/i18n/it.ts:136` | plain-free | homeDescription: 'Confronta gratuitamente le offerte di impianti fotovoltaici da installatori certificati in Ticino. Risparmia fino al 30% con il confronto. 100% senza impegno.', |

## Restoration ledger mapping

| Ledger | Category | Explicit routes | Source/slot |
| --- | --- | --- | --- |
| `restore-app-ledger.json` | 100-free | `/solarrechner` | rendered source slot; app/(de)/solarrechner/page.tsx:hero trust badge |
| `restore-app-ledger.json` | 100-free | `/ueber-uns` | rendered source slot; app/(de)/ueber-uns/page.tsx:transparency card: Kostenloser Service |
| `restore-app-ledger.json` | 100-free | `/wie-es-funktioniert` | rendered source slot; app/(de)/wie-es-funktioniert/page.tsx:step 1 detail |
| `restore-app-ledger.json` | 100-free | `/wie-es-funktioniert` | rendered source slot; app/(de)/wie-es-funktioniert/page.tsx:benefits card: Kostenlos |
| `restore-app-ledger.json` | 100-free | `/wie-es-funktioniert` | rendered source slot; app/(de)/wie-es-funktioniert/page.tsx:FAQ: Ist der Service wirklich kostenlos? |
| `restore-app-ledger.json` | 100-free | `/en/about-us` | rendered source slot; app/en/about-us/page.tsx:transparency card: Free service |
| `restore-app-ledger.json` | 100-free | `/en/how-it-works` | rendered source slot; app/en/how-it-works/page.tsx:step 1 detail |
| `restore-app-ledger.json` | 100-free | `/en/how-it-works` | rendered source slot; app/en/how-it-works/page.tsx:benefits card: Free of charge |
| `restore-app-ledger.json` | 100-free | `/en/how-it-works` | rendered source slot; app/en/how-it-works/page.tsx:FAQ: Is the service really free? |
| `restore-app-ledger.json` | 100-free | `/en` | rendered source slot; app/en/page.tsx:homepage FAQ: Is PvPro.ch service really free? |
| `restore-app-ledger.json` | 100-free | `/en/solar-calculator` | rendered source slot; app/en/solar-calculator/page.tsx:hero trust badge |
| `restore-app-ledger.json` | 100-free | `/fr/a-propos` | rendered source slot; app/fr/a-propos/page.tsx:transparency card: Service gratuit |
| `restore-app-ledger.json` | 100-free | `/fr/calculateur-solaire` | rendered source slot; app/fr/calculateur-solaire/page.tsx:hero trust badge |
| `restore-app-ledger.json` | 100-free | `/fr/comment-ca-marche` | rendered source slot; app/fr/comment-ca-marche/page.tsx:step 1 detail |
| `restore-app-ledger.json` | 100-free | `/fr/comment-ca-marche` | rendered source slot; app/fr/comment-ca-marche/page.tsx:benefits card: Gratuit |
| `restore-app-ledger.json` | 100-free | `/fr/comment-ca-marche` | rendered source slot; app/fr/comment-ca-marche/page.tsx:FAQ: Le service est-il vraiment gratuit ? |
| `restore-app-ledger.json` | 100-free | `/fr` | rendered source slot; app/fr/page.tsx:homepage FAQ: Le service de PvPro.ch est-il vraiment gratuit? |
| `restore-app-ledger.json` | 100-free | `/it/calcolatore-solare` | rendered source slot; app/it/calcolatore-solare/page.tsx:hero trust badge |
| `restore-app-ledger.json` | 100-free | `/it/chi-siamo` | rendered source slot; app/it/chi-siamo/page.tsx:transparency card: Servizio gratuito |
| `restore-app-ledger.json` | 100-free | `/it/come-funziona` | rendered source slot; app/it/come-funziona/page.tsx:step 1 detail |
| `restore-app-ledger.json` | 100-free | `/it/come-funziona` | rendered source slot; app/it/come-funziona/page.tsx:benefits card: Gratuito |
| `restore-app-ledger.json` | 100-free | `/it/come-funziona` | rendered source slot; app/it/come-funziona/page.tsx:FAQ: Il servizio è davvero gratuito? |
| `restore-app-ledger.json` | plain-free | `/solaranlage-kosten` | data/support only; app/(de)/solaranlage-kosten/page.tsx:raw base metadata description (effective description overridden by lib/pageMetadata.ts) |
| `restore-app-ledger.json` | plain-free | `/en/solar-panel-costs` | data/support only; app/en/solar-panel-costs/page.tsx:raw base metadata description (effective description overridden by lib/pageMetadata.ts) |
| `restore-app-ledger.json` | plain-free | `/fr/cout-installation-solaire` | data/support only; app/fr/cout-installation-solaire/page.tsx:raw base metadata description (effective description overridden by lib/pageMetadata.ts) |
| `restore-app-ledger.json` | plain-free | `/it/costi-impianto-solare` | data/support only; app/it/costi-impianto-solare/page.tsx:raw base metadata description (effective description overridden by lib/pageMetadata.ts) |
| `restore-shared-ledger.json` | 100-free | `/`, `/fr`, `/en`, `/it`, `/solarrechner`, `/fr/calculateur-solaire`, `/en/solar-calculator`, `/it/calcolatore-solare`, `/solaranlage-kosten`, `/fr/cout-installation-solaire`, `/en/solar-panel-costs`, `/it/costi-impianto-solare` | data/support only; components/CtaAnfrage.tsx:defaultsByLocale.de.subtitle |
| `restore-shared-ledger.json` | 100-free | `/`, `/fr`, `/en`, `/it`, `/solarrechner`, `/fr/calculateur-solaire`, `/en/solar-calculator`, `/it/calcolatore-solare`, `/solaranlage-kosten`, `/fr/cout-installation-solaire`, `/en/solar-panel-costs`, `/it/costi-impianto-solare` | data/support only; components/CtaAnfrage.tsx:defaultsByLocale.de.badges[0] |
| `restore-shared-ledger.json` | 100-free | `/`, `/fr`, `/en`, `/it`, `/solarrechner`, `/fr/calculateur-solaire`, `/en/solar-calculator`, `/it/calcolatore-solare`, `/solaranlage-kosten`, `/fr/cout-installation-solaire`, `/en/solar-panel-costs`, `/it/costi-impianto-solare` | data/support only; components/CtaAnfrage.tsx:defaultsByLocale.fr.subtitle |
| `restore-shared-ledger.json` | 100-free | `/`, `/fr`, `/en`, `/it`, `/solarrechner`, `/fr/calculateur-solaire`, `/en/solar-calculator`, `/it/calcolatore-solare`, `/solaranlage-kosten`, `/fr/cout-installation-solaire`, `/en/solar-panel-costs`, `/it/costi-impianto-solare` | data/support only; components/CtaAnfrage.tsx:defaultsByLocale.fr.badges[0] |
| `restore-shared-ledger.json` | 100-free | `/`, `/fr`, `/en`, `/it`, `/solarrechner`, `/fr/calculateur-solaire`, `/en/solar-calculator`, `/it/calcolatore-solare`, `/solaranlage-kosten`, `/fr/cout-installation-solaire`, `/en/solar-panel-costs`, `/it/costi-impianto-solare` | data/support only; components/CtaAnfrage.tsx:defaultsByLocale.en.subtitle |
| `restore-shared-ledger.json` | 100-free | `/`, `/fr`, `/en`, `/it`, `/solarrechner`, `/fr/calculateur-solaire`, `/en/solar-calculator`, `/it/calcolatore-solare`, `/solaranlage-kosten`, `/fr/cout-installation-solaire`, `/en/solar-panel-costs`, `/it/costi-impianto-solare` | data/support only; components/CtaAnfrage.tsx:defaultsByLocale.en.badges[0] |
| `restore-shared-ledger.json` | 100-free | `/`, `/fr`, `/en`, `/it`, `/solarrechner`, `/fr/calculateur-solaire`, `/en/solar-calculator`, `/it/calcolatore-solare`, `/solaranlage-kosten`, `/fr/cout-installation-solaire`, `/en/solar-panel-costs`, `/it/costi-impianto-solare` | data/support only; components/CtaAnfrage.tsx:defaultsByLocale.it.subtitle |
| `restore-shared-ledger.json` | 100-free | `/`, `/fr`, `/en`, `/it`, `/solarrechner`, `/fr/calculateur-solaire`, `/en/solar-calculator`, `/it/calcolatore-solare`, `/solaranlage-kosten`, `/fr/cout-installation-solaire`, `/en/solar-panel-costs`, `/it/costi-impianto-solare` | data/support only; components/CtaAnfrage.tsx:defaultsByLocale.it.badges[0] |
| `restore-shared-ledger.json` | 100-free | `/blog`, `/fr/blog`, `/en/blog`, `/it/blog` | data/support only; components/PlzWidget.tsx:content.de.badges[2] |
| `restore-shared-ledger.json` | 100-free | `/blog`, `/fr/blog`, `/en/blog`, `/it/blog` | data/support only; components/PlzWidget.tsx:content.fr.badges[2] |
| `restore-shared-ledger.json` | 100-free | `/blog`, `/fr/blog`, `/en/blog`, `/it/blog` | data/support only; components/PlzWidget.tsx:content.en.badges[2] |
| `restore-shared-ledger.json` | 100-free | `/blog`, `/fr/blog`, `/en/blog`, `/it/blog` | data/support only; components/PlzWidget.tsx:content.it.badges[2] |
| `restore-shared-ledger.json` | 100-free | `/`, `/en`, `/it`, `/faq`, `/fr/faq`, `/en/faq`, `/it/faq` | data/support only; lib/faqData.ts:faqContent.de service answer |
| `restore-shared-ledger.json` | 100-free | `/`, `/en`, `/it`, `/faq`, `/fr/faq`, `/en/faq`, `/it/faq` | data/support only; lib/faqData.ts:faqContent.fr service answer |
| `restore-shared-ledger.json` | 100-free | `/`, `/en`, `/it`, `/faq`, `/fr/faq`, `/en/faq`, `/it/faq` | data/support only; lib/faqData.ts:faqContent.en service answer |
| `restore-shared-ledger.json` | 100-free | `/`, `/en`, `/it`, `/faq`, `/fr/faq`, `/en/faq`, `/it/faq` | data/support only; lib/faqData.ts:faqContent.it service answer |
| `restore-shared-ledger.json` | 100-free | `/` | data/support only; lib/i18n/de.ts:hero.free |
| `restore-shared-ledger.json` | 100-free | `/` | data/support only; lib/i18n/de.ts:usp.free.title |
| `restore-shared-ledger.json` | 100-free | `/en` | data/support only; lib/i18n/en.ts:hero.free |
| `restore-shared-ledger.json` | 100-free | `/en` | data/support only; lib/i18n/en.ts:usp.free.title |
| `restore-shared-ledger.json` | 100-free | `/fr` | data/support only; lib/i18n/fr.ts:hero.free |
| `restore-shared-ledger.json` | 100-free | `/fr` | data/support only; lib/i18n/fr.ts:usp.free.title |
| `restore-shared-ledger.json` | 100-free | `/it` | data/support only; lib/i18n/it.ts:hero.free |
| `restore-shared-ledger.json` | 100-free | `/it` | data/support only; lib/i18n/it.ts:usp.free.title |
| `restore-shared-ledger.json` | plain-free | none | rendered source slot; lib/city-content-fr.ts:cityContentsFR.genf.heroDescription |
| `restore-shared-ledger.json` | plain-free | none | rendered source slot; lib/city-content-it.ts:cityContentsIT.lugano.heroDescription |
| `restore-shared-ledger.json` | plain-free | `/solaranlage-luzern` | rendered source slot; lib/city-content.ts:cityContents.luzern.heroDescription |
| `restore-shared-ledger.json` | plain-free | `/fr/solaire-geneve` | rendered source slot; lib/city-content.ts:cityContents.geneve.heroDescription |
| `restore-shared-ledger.json` | qualified-tax | `/solaranlage-zurich` | data/support only; lib/city-content.ts:cityContents.zurich.incentives.programs Steuerabzug ZH |
| `restore-shared-ledger.json` | qualified-tax | `/solaranlage-zurich` | rendered source slot; lib/city-content.ts:cityContents.zurich.faqs Welche Förderung |
| `restore-shared-ledger.json` | qualified-tax | `/solaranlage-bern` | data/support only; lib/city-content.ts:cityContents.bern.incentives.programs Steuerabzug BE |
| `restore-shared-ledger.json` | qualified-tax | `/solaranlage-basel` | data/support only; lib/city-content.ts:cityContents.basel.incentives.programs Steuerabzug BS/BL |
| `restore-shared-ledger.json` | qualified-tax | `/solaranlage-luzern` | data/support only; lib/city-content.ts:cityContents.luzern.incentives.programs Steuerabzug LU |
| `restore-shared-ledger.json` | qualified-tax | `/solaranlage-st-gallen` | data/support only; lib/city-content.ts:cityContents.stgallen.incentives.programs Steuerabzug SG |
| `restore-shared-ledger.json` | qualified-tax | `/solaranlage-schwyz` | data/support only; lib/city-content.ts:cityContents.schwyz.incentives.programs Steuerabzug SZ |
| `restore-shared-ledger.json` | qualified-tax | `/solaranlage-uri` | data/support only; lib/city-content.ts:cityContents.uri.incentives.programs Steuerabzug UR |
| `restore-shared-ledger.json` | qualified-tax | `/solaranlage-schaffhausen` | data/support only; lib/city-content.ts:cityContents.schaffhausen.incentives.programs Steuerabzug SH |
| `restore-shared-ledger.json` | qualified-tax | `/solaranlage-appenzell` | data/support only; lib/city-content.ts:cityContents.appenzell.incentives.programs Steuerabzug AI/AR |
| `restore-shared-ledger.json` | qualified-tax | `/solaranlage-graubunden` | data/support only; lib/city-content.ts:cityContents.graubuenden.incentives.programs Steuerabzug GR |
| `restore-shared-ledger.json` | qualified-tax | `/solaranlage-glarus` | data/support only; lib/city-content.ts:cityContents.glarus.incentives.programs Steuerabzug GL |
| `restore-shared-ledger.json` | qualified-tax | `/solaranlage-zug` | data/support only; lib/city-content.ts:cityContents.zug.incentives.programs Steuerabzug ZG |
| `restore-shared-ledger.json` | qualified-tax | `/solaranlage-unterwalden` | data/support only; lib/city-content.ts:cityContents.obwalden-nidwalden.incentives.programs Steuerabzug OW/NW |
| `restore-shared-ledger.json` | qualified-tax | `/solaranlage-solothurn` | data/support only; lib/city-content.ts:cityContents.solothurn.incentives.programs Steuerabzug SO |
| `restore-shared-ledger.json` | qualified-tax | `/solaranlage-aargau` | data/support only; lib/city-content.ts:cityContents.aargau.incentives.programs Steuerabzug AG |
| `restore-shared-ledger.json` | qualified-tax | `/fr/solaire-geneve` | data/support only; lib/city-content.ts:cityContents.geneve.incentives.programs Déduction fiscale GE |
| `restore-shared-ledger.json` | qualified-tax | `/fr/solaire-vaud` | data/support only; lib/city-content.ts:cityContents.vaud.incentives.programs Déduction fiscale VD |
| `restore-shared-ledger.json` | qualified-tax | `/fr/solaire-valais` | data/support only; lib/city-content.ts:cityContents.valais.incentives.programs Déduction fiscale VS |
| `restore-shared-ledger.json` | qualified-tax | `/it/fotovoltaico-ticino` | data/support only; lib/city-content.ts:cityContents.ticino.incentives.programs Deduzione fiscale TI |
| `restore-shared-ledger.json` | qualified-tax | `/solaranlage-freiburg` | data/support only; lib/city-content.ts:cityContents.freiburg.incentives.programs Steuerliche Absetzbarkeit |
| `restore-shared-ledger.json` | qualified-tax | `/solaranlage-wallis` | data/support only; lib/city-content.ts:cityContents.wallis.incentives.programs Steuerliche Absetzbarkeit |
| `restore-shared-ledger.json` | qualified-tax | `/fr/solaire-fribourg` | data/support only; lib/city-content.ts:cityContents.fribourg.incentives.programs Déductibilité fiscale |
| `restore-blog-ledger.json` | qualified-tax | `/blog/solaranlage-kosten-schweiz-2026` | rendered source slot; content/autoblog/kosten-einer-solaranlage-in-der-schweiz-2026-der-komplette-preis-ratgeber.json:articles.de.sections.3.bullets.1 |
| `restore-blog-ledger.json` | qualified-tax | `/fr/blog/cout-installation-solaire-suisse` | rendered source slot; content/autoblog/kosten-einer-solaranlage-in-der-schweiz-2026-der-komplette-preis-ratgeber.json:articles.fr.sections.3.bullets.1 |
| `restore-blog-ledger.json` | qualified-tax | `/en/blog/swiss-solar-system-cost` | rendered source slot; content/autoblog/kosten-einer-solaranlage-in-der-schweiz-2026-der-komplette-preis-ratgeber.json:articles.en.sections.3.bullets.1 |
| `restore-blog-ledger.json` | qualified-tax | `/it/blog/costi-impianto-solare-svizzera` | rendered source slot; content/autoblog/kosten-einer-solaranlage-in-der-schweiz-2026-der-komplette-preis-ratgeber.json:articles.it.sections.3.bullets.1 |
| `restore-blog-ledger.json` | qualified-tax | `/blog/solaranlage-kosten-schweiz-2026` | rendered source slot; content/autoblog/kosten-einer-solaranlage-in-der-schweiz-2026-der-komplette-preis-ratgeber.json:articles.de.faqs.0 |
| `restore-blog-ledger.json` | qualified-tax | `/fr/blog/cout-installation-solaire-suisse` | rendered source slot; content/autoblog/kosten-einer-solaranlage-in-der-schweiz-2026-der-komplette-preis-ratgeber.json:articles.fr.faqs.0 |
| `restore-blog-ledger.json` | qualified-tax | `/en/blog/swiss-solar-system-cost` | rendered source slot; content/autoblog/kosten-einer-solaranlage-in-der-schweiz-2026-der-komplette-preis-ratgeber.json:articles.en.faqs.0 |
| `restore-blog-ledger.json` | qualified-tax | `/it/blog/costi-impianto-solare-svizzera` | rendered source slot; content/autoblog/kosten-einer-solaranlage-in-der-schweiz-2026-der-komplette-preis-ratgeber.json:articles.it.faqs.0 |
| `restore-blog-ledger.json` | qualified-tax | `/blog/solaranlage-gewerbeimmobilien` | rendered source slot; content/autoblog/solaranlage-fur-gewerbeimmobilien-in-der-schweiz-der-ultimative-ratgeber-2026.json:articles.de.faqs.0 |
| `restore-blog-ledger.json` | qualified-tax | `/fr/blog/installation-solaire-immobilier-commercial` | rendered source slot; content/autoblog/solaranlage-fur-gewerbeimmobilien-in-der-schweiz-der-ultimative-ratgeber-2026.json:articles.fr.faqs.0 |
| `restore-blog-ledger.json` | qualified-tax | `/en/blog/commercial-property-solar` | rendered source slot; content/autoblog/solaranlage-fur-gewerbeimmobilien-in-der-schweiz-der-ultimative-ratgeber-2026.json:articles.en.faqs.0 |
| `restore-blog-ledger.json` | qualified-tax | `/it/blog/impianti-solari-immobili-commerciali` | rendered source slot; content/autoblog/solaranlage-fur-gewerbeimmobilien-in-der-schweiz-der-ultimative-ratgeber-2026.json:articles.it.faqs.0 |
| `restore-blog-ledger.json` | plain-free | `/blog/unabhaengige-photovoltaik-beratung` | rendered source slot; content/autoblog/photovoltaik-beratung-unabhangig-so-finden-sie-die-beste-losung-in-der-schweiz-2.json:articles.de.ctaText |
| `restore-blog-ledger.json` | plain-free | `/fr/blog/conseil-photovoltaique-independant` | rendered source slot; content/autoblog/photovoltaik-beratung-unabhangig-so-finden-sie-die-beste-losung-in-der-schweiz-2.json:articles.fr.ctaText |
| `restore-blog-ledger.json` | plain-free | `/en/blog/independent-photovoltaic-consultation` | rendered source slot; content/autoblog/photovoltaik-beratung-unabhangig-so-finden-sie-die-beste-losung-in-der-schweiz-2.json:articles.en.ctaText |
| `restore-blog-ledger.json` | plain-free | `/it/blog/consulenza-fotovoltaica-indipendente` | rendered source slot; content/autoblog/photovoltaik-beratung-unabhangig-so-finden-sie-die-beste-losung-in-der-schweiz-2.json:articles.it.ctaText |
| `restore-blog-ledger.json` | plain-free | `/blog/solarofferten-checkliste-vergleichen` | rendered source slot; content/autoblog/solar-offerten-checkliste-2026-so-vergleichen-sie-photovoltaik-angebote-in-der-s.json:articles.de.ctaButton |
| `restore-blog-ledger.json` | plain-free | `/fr/blog/checklist-offres-solaires` | rendered source slot; content/autoblog/solar-offerten-checkliste-2026-so-vergleichen-sie-photovoltaik-angebote-in-der-s.json:articles.fr.ctaButton |
| `restore-blog-ledger.json` | plain-free | `/en/blog/solar-offer-checklist` | rendered source slot; content/autoblog/solar-offerten-checkliste-2026-so-vergleichen-sie-photovoltaik-angebote-in-der-s.json:articles.en.ctaButton |
| `restore-blog-ledger.json` | plain-free | `/it/blog/checklist-offerte-solari` | rendered source slot; content/autoblog/solar-offerten-checkliste-2026-so-vergleichen-sie-photovoltaik-angebote-in-der-s.json:articles.it.ctaButton |
| `restore-blog-ledger.json` | plain-free | `/blog/solarfirma-serioes-pruefen` | rendered source slot; content/autoblog/solarfirma-prufen-schweiz-so-finden-sie-seriose-photovoltaik-partner-2026.json:articles.de.ctaText |
| `restore-blog-ledger.json` | plain-free | `/fr/blog/verifier-entreprise-solaire` | rendered source slot; content/autoblog/solarfirma-prufen-schweiz-so-finden-sie-seriose-photovoltaik-partner-2026.json:articles.fr.ctaText |
| `restore-blog-ledger.json` | plain-free | `/en/blog/check-reliable-solar-company` | rendered source slot; content/autoblog/solarfirma-prufen-schweiz-so-finden-sie-seriose-photovoltaik-partner-2026.json:articles.en.ctaText |
| `restore-blog-ledger.json` | plain-free | `/it/blog/verifica-azienda-solare-affidabile` | rendered source slot; content/autoblog/solarfirma-prufen-schweiz-so-finden-sie-seriose-photovoltaik-partner-2026.json:articles.it.ctaText |
| `restore-blog-ledger.json` | 100-free | `/blog/so-funktioniert-pvpro` | rendered source slot; content/autoblog/wie-funktioniert-pv-pro-ihr-weg-zur-massgeschneiderten-solaranlage.json:articles.de.faqs.0 |
| `restore-blog-ledger.json` | 100-free | `/fr/blog/comment-fonctionne-pvpro` | rendered source slot; content/autoblog/wie-funktioniert-pv-pro-ihr-weg-zur-massgeschneiderten-solaranlage.json:articles.fr.faqs.0 |
| `restore-blog-ledger.json` | 100-free | `/en/blog/how-pvpro-works` | rendered source slot; content/autoblog/wie-funktioniert-pv-pro-ihr-weg-zur-massgeschneiderten-solaranlage.json:articles.en.faqs.0 |
| `restore-blog-ledger.json` | 100-free | `/it/blog/come-funziona-pvpro` | rendered source slot; content/autoblog/wie-funktioniert-pv-pro-ihr-weg-zur-massgeschneiderten-solaranlage.json:articles.it.faqs.0 |
| `restore-blog-ledger.json` | qualified-tax | `/blog/foerderungen-photovoltaik-2026` | rendered source slot; lib/blogArticles.ts:foerderungen-photovoltaik-2026.de.sections[Kantonale Programme und Steuerabzug].bullets |
| `restore-blog-ledger.json` | qualified-tax | `/fr/blog/subventions-photovoltaiques-2026` | rendered source slot; lib/blogArticles.ts:foerderungen-photovoltaik-2026.fr.sections[Kantonale Programme und Steuerabzug].bullets |
| `restore-blog-ledger.json` | qualified-tax | `/en/blog/solar-subsidies-switzerland-2026` | rendered source slot; lib/blogArticles.ts:foerderungen-photovoltaik-2026.en.sections[Kantonale Programme und Steuerabzug].bullets |
| `restore-blog-ledger.json` | qualified-tax | `/it/blog/incentivi-fotovoltaici-svizzera-2026` | rendered source slot; lib/blogArticles.ts:foerderungen-photovoltaik-2026.it.sections[Kantonale Programme und Steuerabzug].bullets |
| `restore-blog-ledger.json` | plain-free | `/blog/solaranlage-steuerabzug-schweiz-2026` | rendered source slot; lib/blogArticles.ts:solaranlage-steuerabzug-schweiz-2026.de.ctaText |
| `restore-blog-ledger.json` | plain-free | `/fr/blog/deduction-fiscale-panneau-solaire-suisse-2026` | rendered source slot; lib/blogArticles.ts:solaranlage-steuerabzug-schweiz-2026.fr.ctaText |
| `restore-blog-ledger.json` | plain-free | `/en/blog/solar-panel-tax-deduction-switzerland-2026` | rendered source slot; lib/blogArticles.ts:solaranlage-steuerabzug-schweiz-2026.en.ctaText |
| `restore-blog-ledger.json` | plain-free | `/it/blog/detrazione-fiscale-impianto-solare-svizzera-2026` | rendered source slot; lib/blogArticles.ts:solaranlage-steuerabzug-schweiz-2026.it.ctaText |
| `restore-blog-ledger.json` | plain-free | `/blog/solaranlage-waermepumpe-kombinieren-schweiz` | rendered source slot; lib/blogArticles.ts:photovoltaik-mit-waermepumpe.de.ctaText |
| `restore-blog-ledger.json` | plain-free | `/fr/blog/panneaux-solaires-pompe-chaleur-suisse` | rendered source slot; lib/blogArticles.ts:photovoltaik-mit-waermepumpe.fr.ctaText |
| `restore-blog-ledger.json` | plain-free | `/en/blog/solar-panels-heat-pump-combination-switzerland` | rendered source slot; lib/blogArticles.ts:photovoltaik-mit-waermepumpe.en.ctaText |
| `restore-blog-ledger.json` | plain-free | `/it/blog/impianto-solare-pompa-calore-svizzera` | rendered source slot; lib/blogArticles.ts:photovoltaik-mit-waermepumpe.it.ctaText |

## Unqualified tax guard

No newly introduced unqualified 100% tax-deduction snippets were detected.
