// i18n configuration for pvpro.ch

export type Locale = 'de' | 'fr' | 'en';

export const locales: Locale[] = ['de', 'fr', 'en'];

export const defaultLocale: Locale = 'de';

export const localeNames: Record<Locale, string> = {
  de: 'DE',
  fr: 'FR',
  en: 'EN',
};

export const localeRegions: Record<Locale, string> = {
  de: 'de-CH',
  fr: 'fr-CH',
  en: 'en-CH',
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment && isValidLocale(firstSegment)) {
    return firstSegment;
  }

  return defaultLocale;
}

export function removeLocaleFromPathname(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment && isValidLocale(firstSegment)) {
    return '/' + segments.slice(1).join('/');
  }

  return pathname;
}
