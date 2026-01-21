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

## Recent Changes
- 2026-01-21: Imported project to Replit, configured for development and deployment
