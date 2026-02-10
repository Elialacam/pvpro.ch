# PVPro - Swiss Solar Panel Comparison Website

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

## Recent Changes
- 2026-02-10: Added GDPR/nLPD cookie consent banner with conditional tracking script loading
- 2026-02-10: Added Google Analytics (G-ZE1BS0ZGK9) and Google Ads (AW-17901154625) tracking
- 2026-02-10: Cleaned up duplicate/placeholder tracking scripts
- 2026-01-21: Imported project to Replit, configured for development and deployment
