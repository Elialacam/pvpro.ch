# PVPro - Swiss Solar Panel Comparison Website

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

## Design System (Active)
- **Primary color**: `#16A34A` (green-600) — replaces old gold (#D4AF37) everywhere
- **Font**: Plus Jakarta Sans (400–800 weights), CSS variable `--font-jakarta`, configured in tailwind.config.ts and layout.tsx
- **Hero**: Full-bleed `/images/hero-solar-panels.webp`, dark gradient overlay, white text, green pill badge, green checkmarks, green CTA
- **Header**: Clean white frosted-glass (always), green LiveBar, scrolled shadow effect, green CTA button
- **LiveBar**: Green background (`#16A34A`), live pulse dot, rolling request counter, anti-spam messaging
- **btn-primary**: `rounded-xl font-semibold bg-primary hover:bg-primary-700 shadow`
- **section-padding**: `py-16 md:py-24`
- **card**: `rounded-2xl`
- **CookieConsent**: "Alle akzeptieren" button updated from yellow → green primary

## Recent Changes
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
- 2026-01-21: Imported project to Replit, configured for development and deployment
