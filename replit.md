# PVPro - Swiss Solar Panel Comparison Website

## Logo Fixed Rules (DO NOT change)
- **Logo**: ALWAYS use `/logo-pvpro.png` as-is — NEVER apply CSS filters (`brightness`, `invert`, etc.) or any color transformation. The logo must always display in its original colors everywhere (header, footer, any page).

## SEO Fixed Rules (DO NOT change)
- **Canonical domain**: Always use `https://www.pvpro.ch` — NEVER `https://pvpro.ch` (without www)
- All `canonical` URLs, `metadataBase`, `og:url`, sitemap entries, structured data, and internal links must use `https://www.pvpro.ch`
- `robots.txt` Sitemap must point to `https://www.pvpro.ch/sitemap.xml`
- Vercel handles the redirect pvpro.ch → www.pvpro.ch at the infrastructure level

## Overview
PVPro is a multilingual solar panel comparison website for Switzerland. It helps users compare solar panel providers, get quotes, and find certified installers in their region.

## Tech Stack
- **Framework**: Next.js 14.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Framer Motion
- **Maps**: React Simple Maps

## Project Structure
```
app/                    # Next.js App Router pages
  (de)/                 # German language routes (default)
  en/                   # English language routes
  fr/                   # French language routes
  api/                  # API routes
components/             # Reusable React components
lib/                    # Utility functions and configurations
  i18n/                 # Internationalization files
hooks/                  # Custom React hooks
public/                 # Static assets
```

## Development
The development server runs on port 5000:
```bash
npm run dev -- -p 5000 -H 0.0.0.0
```

## Deployment
Production build uses Next.js start:
```bash
npm run build
npm run start -- -p 5000
```

## Languages Supported
- German (DE) - Default
- English (EN)
- French (FR)
- Italian (IT)

## Tracking & Cookie Consent
- **Cookie Banner**: GDPR/nLPD-compliant cookie consent banner (components/CookieConsent.tsx)
  - Categories: Necessary (always on), Analytics (Google Analytics, Clarity), Marketing (Meta Pixel, Google Ads)
  - 4 languages: DE/FR/IT/EN, auto-detected from URL path
  - Consent persisted in localStorage, shared across language changes
  - Tracking scripts (components/TrackingScripts.tsx) only load after user consent
- **Google Analytics**: G-ZE1BS0ZGK9
- **Google Ads**: AW-17901154625 (conversion: AW-17901154625/LyaGCIXE-fUbEMHi99dC)
- **Meta Pixel**: 1848326999213371
- **Microsoft Clarity**: u1ur4kb2kq
- **Consent logic**: lib/cookieConsent.ts (getConsent, setConsent, acceptAll, rejectAll, saveCustomConsent)
- **Analytics helpers**: lib/analytics.ts (all event dispatches check consent before firing)

## Company Data
- **Company**: NOBA Media Sagl
- **Address**: Via Santi Pietro e Paolo 16, 6953 Lugaggia, Switzerland
- **Contact**: anfrage@pvpro.ch, +41 77 977 07 50
- **Managing Director**: Elia Alacam (individual signatory)
- **Commercial Register**: CH-501.4.029.665-0, Canton of Ticino, Seat: Capriasca
- **UID**: CHE-236.020.113

## Form Submission (Web3Forms)
- **Key**: e5917515-5373-450c-963d-d6dcb976be42
- **Fields sent in EXACT order** (no property/roof/battery selections):
  1. DATE TIME - Swiss timezone (Europe/Zurich)
  2. FULL NAME - First + Last name
  3. PHONE NUMBER
  4. EMAIL
  5. COMPLETE ADDRESS - Full address from form
- **Subject**: "Neue Solaranfrage - {Full Name}"
- **From**: PVPro.ch

## Landing Pages (Facebook Ads - Message Match)
- `/lokale-installateure` - Angle: "Zuverlässige lokale Installateure" (German)
  - Hero with form, problem section, how it works, trust section with team photos
  - Footer first checkmark links to this page
- `/stromkosten-senken` - Angle: "Stromkosten mit Solarenergie reduzieren" (German)
  - Hero with form, rising costs section, own energy section, roof check CTA
  - Footer second checkmark links to this page

## Blog
- **Blog data**: `lib/blogPosts.ts` — 6 posts (Ratgeber, Förderungen, Speicher, Tipps, Finanzen)
- **BlogSection**: `components/BlogSection.tsx` — 3-card preview on homepage (before FAQ), links to `/blog`
- **Blog page**: `app/(de)/blog/page.tsx` — full 2-column layout; left = 6-post grid, right = sticky sidebar with PLZ widget + Themen
- **PlzWidget**: `components/PlzWidget.tsx` — client component; PLZ input (4 digits) → navigates to `/anfrage?plz=XXXX`
- Blog thumbnail images: `public/images/blog-1.png` … `blog-6.png` (copies of hero images)

## Pages Built
- `/wie-funktioniert` — Full interactive page: step-by-step animated process (5 steps, clickable), 4 Komponenten cards, production calculator (kWp slider + EV/Wärmepumpe toggles), 6 quick fact cards, FAQ accordion. Uses `components/WieFunktioniertInteractive.tsx`. Hero image: `public/images/wie-funktioniert-solaranlage.png`

## Multilingual Pages (FR/EN/IT) — Completed
All pages below exist in all 3 non-DE languages. DE originals are the master versions.

| DE slug | FR | EN | IT |
|---|---|---|---|
| `/ueber-uns` | `/fr/a-propos` | `/en/about-us` | `/it/chi-siamo` |
| `/danke` | `/fr/merci` | `/en/thank-you` | `/it/grazie` |
| `/solaranlage-kosten` | `/fr/cout-installation-solaire` | `/en/solar-panel-costs` | `/it/costi-impianto-solare` |
| `/solaranlage-mit-speicher` | `/fr/solaire-avec-batterie` | `/en/solar-with-battery` | `/it/solare-con-accumulo` |
| `/solarrechner` | `/fr/calculateur-solaire` | `/en/solar-calculator` | `/it/calcolatore-solare` |
| `/solaranlage-einfamilienhaus` | `/fr/solaire-maison-individuelle` | `/en/solar-detached-house` | `/it/solare-casa-unifamiliare` |
| `/solaranlage-mehrfamilienhaus` | `/fr/solaire-immeuble` | `/en/solar-apartment-building` | `/it/solare-condominio` |
| `/photovoltaik-kosten-pro-m2` | `/fr/cout-pv-par-m2` | `/en/solar-cost-per-m2` | `/it/costo-fv-per-m2` |
| `/wie-funktioniert` | `/fr/fonctionnement-solaire` | `/en/how-solar-works` | `/it/come-funziona-solare` |
| `/blog` | `/fr/blog` | `/en/blog` | `/it/blog` |
| (redirect) | `/fr/pv-kosten` → `/fr/cout-pv-par-m2` | `/en/pv-kosten` → `/en/solar-cost-per-m2` | `/it/pv-kosten` → `/it/costo-fv-per-m2` |

Previously completed FR/EN/IT pages: comment-ca-marche/how-it-works/come-funziona, subventions-solaires/solar-subsidies/incentivi-solari, faq, foerderungen (see older entries)

## Recent Changes
- 2026-03-18: Created all FR/EN/IT translations of major content pages (about, thank-you, costs, battery, calculator, detached house, apartment, pv-per-m2, how-solar-works, blog, redirects)
- 2026-03-12: Removed SolarForm from ALL pages — replaced with CTA cards/buttons linking to /anfrage. Affected: Hero, solarrechner, solaranlage-kosten, solaranlage-mit-speicher, lokale-installateure, stromkosten-senken, UniqueCityPage, CityGrid, FAQ, HowItWorks, SwissMap, SolarCalculator. All #formular scroll anchors removed.
- 2026-03-09: Created /lokale-installateure landing page for Facebook Ads (message match angle: local installers)
- 2026-03-09: Updated footer first checkmark to "Zuverlässige lokale Installateure" with link to landing page
- 2026-03-09: Added team images to public/images/
- 2026-02-19: Updated form submission to send exactly 5 fields: Date/Time, Full Name, Phone, Email, Complete Address (removed property/roof/battery data)
- 2026-02-11: Updated all legal/privacy pages (DE/FR/EN/IT) with real NOBA Media Sagl company data, full tracking disclosure, and nLPD/GDPR compliance
- 2026-02-11: Updated Footer and StructuredData with correct Lugaggia address
- 2026-02-10: Added GDPR/nLPD cookie consent banner with conditional tracking script loading
- 2026-02-10: Added Google Analytics (G-ZE1BS0ZGK9) and Google Ads (AW-17901154625) tracking
- 2026-02-10: Cleaned up duplicate/placeholder tracking scripts
- 2026-03-16: Added 15 new photo assets to public/images/ for use in new pages
- 2026-01-21: Imported project to Replit, configured for development and deployment

## Image Assets (public/images/)
Use these for new pages — do not link to attached_assets/ directly.

### Beratung / Consultation (indoor)
- `asset-beratung-indoor-1.png` — Frau zeigt Paar Solar-Plan am Laptop (Schweizer Küche)
- `asset-beratung-indoor-2.png` — Berater zeigt Solar-Dachplan am Laptop (junges Paar am Tisch)
- `asset-beratung-indoor-3.png` — Berater präsentiert Solar-Lösung (Paar am Tisch, Berge)

### Installateur / Technician (outdoor/roof)
- `asset-installateur-dach-1.png` — Installateur zeigt auf Solar-Dach (Paar im Garten)
- `asset-installateur-dach-2.png` — Installateur erklärt Solar-Dach (Frau vor Haus Nr. 42)
- `asset-installateur-dach-3.png` — Techniker auf Dach mit Solarpanelen (Alpenkulisse)
- `asset-installateur-dach-4.png` — Monteur installiert Solarpanele (Schweizer Dorf)
- `asset-installateur-tablet.png` — Installateur zeigt Tablet mit Solar-Daten (vor Haus)
- `asset-installateur-inspektion.png` — Inspektor mit Tablet vor Haus mit Solarpanelen

### Haus mit Solar + EV
- `asset-haus-solar-ev-1.png` — Luftaufnahme Haus mit Solar + E-Auto (dunkel, Schweiz)
- `asset-haus-solar-ev-2.png` — Luftaufnahme Haus mit Solar + weisses E-Auto (Schweiz)
- `asset-haus-solar-ev-3.png` — Tesla lädt an Haus mit Solarpanelen (Abendsonne)

### Schweizer Alpenlandschaft
- `asset-haus-alpen-1.png` — Drohne: Holzhaus mit Solar, Alpenkulisse (Sommer)
- `asset-haus-alpen-2.png` — Holzhaus mit Solar vor Eiger/Mönch/Jungfrau
- `asset-haus-alpen-3.png` — Holzhaus mit Solar + Gründach, Kühe auf Weide

### Installateur Montage (Dach, Arbeit)
- `asset-installateur-dach-5.png` — Techniker auf Dach mit Tablet (Schweizer Dorf, Sommer)
- `asset-installateur-montage-1.png` — Monteur schraubt Solarpanel auf Ziegeldach
- `asset-installateur-montage-2.png` — Monteur positioniert Solarpanel auf Ziegeldach

### Solarpanel Nahaufnahmen
- `asset-panel-closeup-1.png` — Solarpanele auf grauem Dach, blauer Himmel
- `asset-panel-closeup-2.png` — Nahaufnahme Solarpanel-Oberfläche (polykristallin)
- `asset-panel-closeup-3.png` — Solarpanele mit Halterung auf Tonziegeldach

### Haus mit Solar (Luftbild / Drohne)
- `asset-haus-luftbild-1.png` — Luftbild Holzhaus mit Solar, grüne Siedlung (Sommer)
- `asset-haus-luftbild-2.png` — Luftbild Einfamilienhaus mit Solar, Garten (Sommer)
- `asset-haus-luftbild-3.png` — Nahdrohne: Dach mit Solarpanelen, Wohnquartier
- `asset-haus-luftbild-4.png` — Draufsicht Dach mit schwarzen Solarpanelen (modern)

### Haus Modern (Architektur + Solar)
- `asset-haus-modern-1.png` — Modernes Holzhaus mit Solar, Garten bei Sonnenuntergang
- `asset-haus-modern-2.png` — Flaches Holzhaus mit Solar, Naturgarten (Abendlicht)
