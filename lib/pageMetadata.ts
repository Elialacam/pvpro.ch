import type { Metadata } from 'next';
import { cities } from '@/lib/cities';
import { seoRouteGroup } from '@/lib/seoRoutes';

const SITE_URL = 'https://www.pvpro.ch';

const ogLocales = {
  de: 'de_CH',
  it: 'it_CH',
  fr: 'fr_CH',
  en: 'en_CH',
} as const;

const deCantonNames: Record<string, string> = {
  ZH: 'Zürich',
  'BS/BL': 'Basel-Stadt und Basel-Landschaft',
  BE: 'Bern',
  LU: 'Luzern',
  TG: 'Thurgau',
  SG: 'St. Gallen',
  SZ: 'Schwyz',
  UR: 'Uri',
  SH: 'Schaffhausen',
  'AI/AR': 'Appenzell Innerrhoden und Ausserrhoden',
  GR: 'Graubünden',
  GL: 'Glarus',
  ZG: 'Zug',
  'OW/NW': 'Obwalden und Nidwalden',
  SO: 'Solothurn',
  AG: 'Aargau',
  FR: 'Freiburg',
  VS: 'Wallis',
};

const frCantonNames: Record<string, string> = {
  GE: 'Genève',
  VD: 'Vaud',
  VS: 'Valais',
  FR: 'Fribourg',
  BE: 'Berne',
};

type PageLocale = keyof typeof ogLocales;
type PageType = 'website' | 'article';

interface PageMetadataOptions {
  path: string;
  locale: PageLocale;
  type?: PageType;
}

function normalizePath(path: string): string {
  const withLeadingSlash = path.startsWith('/') ? path : `/${path}`;
  if (withLeadingSlash === '/') return '/';
  return withLeadingSlash.replace(/\/+$/, '');
}

function titleText(title: Metadata['title']): string {
  if (typeof title === 'string') return title;
  if (title && typeof title === 'object') {
    if ('absolute' in title && title.absolute) return title.absolute;
    if ('default' in title && title.default) return title.default;
  }
  return 'PVPro.ch';
}

const TITLE_SUFFIX = ' | PVPro.ch';
const MAX_TITLE_LENGTH = 60;

function shortenTitleBase(title: string): string {
  const maxBaseLength = MAX_TITLE_LENGTH - TITLE_SUFFIX.length;
  if (title.length <= maxBaseLength) return title;

  const candidate = title.slice(0, maxBaseLength - 1);
  const lastSpace = candidate.lastIndexOf(' ');
  const shortened = candidate
    .slice(0, lastSpace >= 32 ? lastSpace : maxBaseLength - 1)
    .replace(/[\s,:;–—-]+$/, '');

  return `${shortened}…`;
}

function brandedTitle(title: string, preserveLength = false): string {
  const normalizedBrand = title
    .replace(/PV\s*Pro(?:\.ch)?/gi, 'PVPro.ch')
    .replace(/\s*\|\s*PVPro\.ch\s*[–—-]\s*/gi, ' – ')
    .trim();
  const withoutSuffix = normalizedBrand
    .replace(/(?:\s*[|–—-]\s*PVPro\.ch\s*)+$/i, '')
    .trim();
  const titleBase = preserveLength ? withoutSuffix : shortenTitleBase(withoutSuffix);

  return titleBase ? `${titleBase}${TITLE_SUFFIX}` : 'PVPro.ch';
}

function cleanDescription(description: string): string {
  const clean = description.replace(/\s+/g, ' ').trim();
  if (clean.length <= 155) return clean;

  const shortened = clean.slice(0, 155);
  const lastSpace = shortened.lastIndexOf(' ');
  const text = shortened
    .slice(0, lastSpace > 100 ? lastSpace : 154)
    .replace(/[,:;–—-]\s*$/, '');
  return `${text.slice(0, 154)}.`;
}

function cantonMetadata(path: string, locale: PageLocale): { title: string; description: string } | undefined {
  if (locale === 'de') {
    const slug = path.replace(/^\/solaranlage-/, '');
    const city = cities.find((entry) => entry.slug === slug && entry.language === 'de');
    if (city) {
      const cantonName = deCantonNames[city.canton] || city.name;
      return {
        title: `Solaranlage ${city.name}: Offerten von geprüften Solarteuren`,
        description: `Erhalten Sie bis zu 3 kostenlose Offerten für Ihre Solaranlage im Kanton ${cantonName} von geprüften Solarteuren.`,
      };
    }
  }

  if (locale === 'fr') {
    const slug = path.replace(/^\/fr\/solaire-/, '');
    const city = cities.find((entry) => entry.slug === slug && entry.language === 'fr');
    if (city) {
      const cantonName = frCantonNames[city.canton] || city.name;
      return {
        title: `Installation solaire ${city.name} : offres d’installateurs certifiés`,
        description: `Comparez jusqu’à 3 offres gratuites pour votre installation solaire dans le canton de ${cantonName}, auprès d’installateurs certifiés.`,
      };
    }
  }

  return undefined;
}

export function pageMetadata(
  metadata: Metadata,
  { path, locale, type = 'website' }: PageMetadataOptions,
): Metadata {
  const canonicalPath = normalizePath(path);
  const url = canonicalPath === '/' ? SITE_URL : `${SITE_URL}${canonicalPath}`;
  const canton = cantonMetadata(canonicalPath, locale);
  const title = brandedTitle(canton?.title || titleText(metadata.title), Boolean(canton));
  const description = cleanDescription(canton?.description || (typeof metadata.description === 'string' ? metadata.description : ''));
  const { keywords: _keywords, openGraph: sourceOpenGraph, twitter: sourceTwitter, ...metadataWithoutKeywords } = metadata;
  const routeGroup = seoRouteGroup(canonicalPath);
  const languages = routeGroup ? {
    ...Object.fromEntries(Object.entries(routeGroup.paths).map(([language, route]) => [`${language}-CH`, `${SITE_URL}${route}`])),
    'x-default': `${SITE_URL}${routeGroup.paths.de ?? Object.values(routeGroup.paths)[0]}`,
  } : metadata.alternates?.languages;

  return {
    ...metadataWithoutKeywords,
    authors: metadata.authors?.length ? metadata.authors : [{ name: 'PVPro.ch' }],
    title: { absolute: title },
    description,
    alternates: {
      ...metadata.alternates,
      canonical: url,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      ...sourceOpenGraph,
      type,
      locale: ogLocales[locale],
      url,
      siteName: 'PVPro.ch',
      title,
      description,
      images: sourceOpenGraph?.images || ['/og-image.jpg'],
    },
    twitter: {
      ...sourceTwitter,
      card: 'summary_large_image',
      title,
      description,
      images: sourceTwitter?.images || ['/og-image.jpg'],
    },
  };
}

export function canonicalUrl(path: string): string {
  const canonicalPath = normalizePath(path);
  return canonicalPath === '/' ? SITE_URL : `${SITE_URL}${canonicalPath}`;
}