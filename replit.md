# PVPro - Swiss Solar Panel Comparison Website

## Overview
PVPro is a multilingual solar panel comparison website for Switzerland. Its primary purpose is to help users compare solar panel providers, obtain quotes, and locate certified installers in their region, facilitating the transition to solar energy across Switzerland.

## User Preferences
- **Logo**: In the **header**, ALWAYS use `/logo-pvpro.png` as-is — NEVER apply CSS filters (`brightness`, `invert`, etc.) or any color transformation. In the **footer** (dark background), use `/logo-pvpro-white.png` — a pre-generated white version of the logo (created via ImageMagick, no CSS filter applied). NEVER use CSS filters on the logo anywhere.
- **Canonical domain**: Always use `https://www.pvpro.ch` — NEVER `https://pvpro.ch` (without www).
- All `canonical` URLs, `metadataBase`, `og:url`, sitemap entries, structured data, and internal links must use `https://www.pvpro.ch`.
- `robots.txt` Sitemap must point to `https://www.pvpro.ch/sitemap.xml`.
- Vercel handles the redirect pvpro.ch → www.pvpro.ch at the infrastructure level.
- **Sitemap handler**: `app/api/sitemap/route.ts` — generates full XML with `xmlns:xhtml` namespace and `<xhtml:link hreflang>` tags (126 URLs, 4 locales each, includes photovoltaik-schweizer-klima group).
- **Routing**: `next.config.js` uses `beforeFiles` rewrite `/sitemap.xml` → `/api/sitemap` (beforeFiles takes precedence over file-based routes).
- **Stub files**: `app/sitemap.ts` (exports generateSitemaps stub) and `app/sitemap.xml/route.ts` (empty stub) — DO NOT DELETE these, they coexist via the Next.js patch.
- **Next.js patch**: `scripts/patch-next-sorted-routes.js` neutralizes the route conflict check in `node_modules/next/dist/shared/lib/router/utils/sorted-routes.js`; applied via `postinstall` and `prebuild` in `package.json` so it survives `npm install`.
- Form submission fields must be sent in the EXACT order: DATE TIME, FULL NAME, PHONE NUMBER, EMAIL, COMPLETE ADDRESS.

## System Architecture
The project is built with Next.js 14.2 and TypeScript, utilizing Tailwind CSS for styling, React Hook Form with Zod for form handling, and Framer Motion for animations. React Simple Maps is used for geographical representations. The application supports German (default), English, French, and Italian.

The project structure is organized with `app/` for Next.js App Router pages (including locale-specific routing for `(de)`, `en`, `fr`), `api/` for API routes, `components/` for reusable React components, `lib/` for utility functions and configurations (including `i18n/` for internationalization), `hooks/` for custom React hooks, and `public/` for static assets.

Key architectural decisions include:
- **Multilingual Support**: Comprehensive i18n implementation with distinct URL paths for each language (`/fr`, `/en`, `/it`). All core content pages, forms, and blog posts are translated and accessible via locale-specific routes.
- **SEO Optimization**: Strict adherence to canonical domain and URL structures, with a custom sitemap generation process to ensure proper indexing and internationalization handling for search engines.
- **Cookie Consent**: Implementation of a GDPR/nLPD-compliant cookie consent banner with granular control over analytics and marketing scripts, ensuring user privacy and legal compliance. Tracking scripts are conditionally loaded based on user consent.
- **Form Management**: Centralized form handling via `AnfrageForm.tsx` component, which is locale-aware and uses Web3Forms for submissions. The form submission captures essential user details without extensive property-specific selections.
- **Dynamic Content Rendering**: Blog posts and city-specific content are dynamically rendered using shared templates and localized data files, allowing for scalable content management across multiple languages and regions.
- **UI/UX**: Emphasis on interactive elements such as step-by-step animated processes and production calculators to enhance user engagement. The design leverages Tailwind CSS for a consistent and responsive user experience.
- **Content Structure**: Blog content is separated into post metadata (`blogPosts.ts`, `blogPostsI18n.ts`) and full article content (`blogArticles.ts`) to facilitate multilingual content management and dynamic rendering.

## External Dependencies
- **Next.js**: Web framework
- **React**: UI library
- **TypeScript**: Programming language
- **Tailwind CSS**: Utility-first CSS framework
- **React Hook Form**: Form management library
- **Zod**: Schema declaration and validation library
- **Framer Motion**: Animation library
- **React Simple Maps**: Library for creating interactive maps
- **Web3Forms**: Form submission service (Key: `e5917515-5373-450c-963d-d6dcb976be42`)
- **Google Analytics**: Web analytics service (ID: `G-ZE1BS0ZGK9`)
- **Google Ads**: Advertising service (Conversion ID: `AW-17901154625`, Conversion Label: `LyaGCIXE-fUbEMHi99dC`)
- **Meta Pixel**: Advertising and analytics service (ID: `1848326999213371`)
- **Microsoft Clarity**: User behavior analytics tool (ID: `u1ur4kb2kq`)