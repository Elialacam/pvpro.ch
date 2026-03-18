export function getLocaleFromPath(pathname: string): string {
  if (pathname.startsWith('/fr')) return 'fr';
  if (pathname.startsWith('/en')) return 'en';
  if (pathname.startsWith('/it')) return 'it';
  return 'de';
}

export function getFormUrl(pathname: string): string {
  const locale = getLocaleFromPath(pathname);
  const map: Record<string, string> = {
    de: '/anfrage',
    fr: '/fr/demande',
    en: '/en/request',
    it: '/it/richiesta',
  };
  return map[locale];
}

export function getDankeUrl(locale: string): string {
  const map: Record<string, string> = {
    de: '/danke',
    fr: '/fr/merci',
    en: '/en/thank-you',
    it: '/it/grazie',
  };
  return map[locale] ?? '/danke';
}
