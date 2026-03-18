/**
 * Route map: maps each DE slug to its equivalent in FR/EN/IT.
 * Used by the LanguageSwitcher to navigate to the correct translated page.
 * Key = DE path (no locale prefix), value = record per locale.
 */
export const routeMap: Record<string, Record<string, string>> = {
  '/': { de: '/', fr: '/fr', en: '/en', it: '/it' },
  '/anfrage': { de: '/anfrage', fr: '/anfrage', en: '/anfrage', it: '/anfrage' },
  '/danke': { de: '/danke', fr: '/fr/merci', en: '/en/thank-you', it: '/it/grazie' },

  '/wie-funktioniert': { de: '/wie-funktioniert', fr: '/fr/comment-ca-marche', en: '/en/how-it-works', it: '/it/come-funziona' },
  '/wie-funktioniert-solar': { de: '/wie-funktioniert', fr: '/fr/fonctionnement-solaire', en: '/en/how-solar-works', it: '/it/come-funziona-solare' },

  '/foerderungen': { de: '/foerderungen', fr: '/fr/subventions-solaires', en: '/en/solar-subsidies', it: '/it/incentivi-solari' },
  '/faq': { de: '/faq', fr: '/fr/faq', en: '/en/faq', it: '/it/faq' },
  '/ueber-uns': { de: '/ueber-uns', fr: '/fr/a-propos', en: '/en/about-us', it: '/it/chi-siamo' },

  '/solaranlage-kosten': { de: '/solaranlage-kosten', fr: '/fr/cout-installation-solaire', en: '/en/solar-panel-costs', it: '/it/costi-impianto-solare' },
  '/solaranlage-mit-speicher': { de: '/solaranlage-mit-speicher', fr: '/fr/solaire-avec-batterie', en: '/en/solar-with-battery', it: '/it/solare-con-accumulo' },
  '/solarrechner': { de: '/solarrechner', fr: '/fr/calculateur-solaire', en: '/en/solar-calculator', it: '/it/calcolatore-solare' },
  '/solaranlage-einfamilienhaus': { de: '/solaranlage-einfamilienhaus', fr: '/fr/solaire-maison-individuelle', en: '/en/solar-detached-house', it: '/it/solare-casa-unifamiliare' },
  '/solaranlage-mehrfamilienhaus': { de: '/solaranlage-mehrfamilienhaus', fr: '/fr/solaire-immeuble', en: '/en/solar-apartment-building', it: '/it/solare-condominio' },
  '/photovoltaik-kosten-pro-m2': { de: '/photovoltaik-kosten-pro-m2', fr: '/fr/cout-pv-par-m2', en: '/en/solar-cost-per-m2', it: '/it/costo-fv-per-m2' },

  '/blog': { de: '/blog', fr: '/fr/blog', en: '/en/blog', it: '/it/blog' },

  '/datenschutz': { de: '/datenschutz', fr: '/fr/protection-des-donnees', en: '/en/privacy', it: '/it/protezione-dati' },
  '/impressum': { de: '/impressum', fr: '/fr/mentions-legales', en: '/en/imprint', it: '/it/note-legali' },

  // FR slugs (key = FR path without prefix)
  '/fr/merci': { de: '/danke', fr: '/fr/merci', en: '/en/thank-you', it: '/it/grazie' },
  '/fr/comment-ca-marche': { de: '/wie-funktioniert', fr: '/fr/comment-ca-marche', en: '/en/how-it-works', it: '/it/come-funziona' },
  '/fr/fonctionnement-solaire': { de: '/wie-funktioniert', fr: '/fr/fonctionnement-solaire', en: '/en/how-solar-works', it: '/it/come-funziona-solare' },
  '/fr/subventions-solaires': { de: '/foerderungen', fr: '/fr/subventions-solaires', en: '/en/solar-subsidies', it: '/it/incentivi-solari' },
  '/fr/faq': { de: '/faq', fr: '/fr/faq', en: '/en/faq', it: '/it/faq' },
  '/fr/a-propos': { de: '/ueber-uns', fr: '/fr/a-propos', en: '/en/about-us', it: '/it/chi-siamo' },
  '/fr/cout-installation-solaire': { de: '/solaranlage-kosten', fr: '/fr/cout-installation-solaire', en: '/en/solar-panel-costs', it: '/it/costi-impianto-solare' },
  '/fr/solaire-avec-batterie': { de: '/solaranlage-mit-speicher', fr: '/fr/solaire-avec-batterie', en: '/en/solar-with-battery', it: '/it/solare-con-accumulo' },
  '/fr/calculateur-solaire': { de: '/solarrechner', fr: '/fr/calculateur-solaire', en: '/en/solar-calculator', it: '/it/calcolatore-solare' },
  '/fr/solaire-maison-individuelle': { de: '/solaranlage-einfamilienhaus', fr: '/fr/solaire-maison-individuelle', en: '/en/solar-detached-house', it: '/it/solare-casa-unifamiliare' },
  '/fr/solaire-immeuble': { de: '/solaranlage-mehrfamilienhaus', fr: '/fr/solaire-immeuble', en: '/en/solar-apartment-building', it: '/it/solare-condominio' },
  '/fr/cout-pv-par-m2': { de: '/photovoltaik-kosten-pro-m2', fr: '/fr/cout-pv-par-m2', en: '/en/solar-cost-per-m2', it: '/it/costo-fv-per-m2' },
  '/fr/blog': { de: '/blog', fr: '/fr/blog', en: '/en/blog', it: '/it/blog' },
  '/fr/protection-des-donnees': { de: '/datenschutz', fr: '/fr/protection-des-donnees', en: '/en/privacy', it: '/it/protezione-dati' },
  '/fr/mentions-legales': { de: '/impressum', fr: '/fr/mentions-legales', en: '/en/imprint', it: '/it/note-legali' },

  // EN slugs
  '/en/thank-you': { de: '/danke', fr: '/fr/merci', en: '/en/thank-you', it: '/it/grazie' },
  '/en/how-it-works': { de: '/wie-funktioniert', fr: '/fr/comment-ca-marche', en: '/en/how-it-works', it: '/it/come-funziona' },
  '/en/how-solar-works': { de: '/wie-funktioniert', fr: '/fr/fonctionnement-solaire', en: '/en/how-solar-works', it: '/it/come-funziona-solare' },
  '/en/solar-subsidies': { de: '/foerderungen', fr: '/fr/subventions-solaires', en: '/en/solar-subsidies', it: '/it/incentivi-solari' },
  '/en/faq': { de: '/faq', fr: '/fr/faq', en: '/en/faq', it: '/it/faq' },
  '/en/about-us': { de: '/ueber-uns', fr: '/fr/a-propos', en: '/en/about-us', it: '/it/chi-siamo' },
  '/en/solar-panel-costs': { de: '/solaranlage-kosten', fr: '/fr/cout-installation-solaire', en: '/en/solar-panel-costs', it: '/it/costi-impianto-solare' },
  '/en/solar-with-battery': { de: '/solaranlage-mit-speicher', fr: '/fr/solaire-avec-batterie', en: '/en/solar-with-battery', it: '/it/solare-con-accumulo' },
  '/en/solar-calculator': { de: '/solarrechner', fr: '/fr/calculateur-solaire', en: '/en/solar-calculator', it: '/it/calcolatore-solare' },
  '/en/solar-detached-house': { de: '/solaranlage-einfamilienhaus', fr: '/fr/solaire-maison-individuelle', en: '/en/solar-detached-house', it: '/it/solare-casa-unifamiliare' },
  '/en/solar-apartment-building': { de: '/solaranlage-mehrfamilienhaus', fr: '/fr/solaire-immeuble', en: '/en/solar-apartment-building', it: '/it/solare-condominio' },
  '/en/solar-cost-per-m2': { de: '/photovoltaik-kosten-pro-m2', fr: '/fr/cout-pv-par-m2', en: '/en/solar-cost-per-m2', it: '/it/costo-fv-per-m2' },
  '/en/blog': { de: '/blog', fr: '/fr/blog', en: '/en/blog', it: '/it/blog' },
  '/en/privacy': { de: '/datenschutz', fr: '/fr/protection-des-donnees', en: '/en/privacy', it: '/it/protezione-dati' },
  '/en/imprint': { de: '/impressum', fr: '/fr/mentions-legales', en: '/en/imprint', it: '/it/note-legali' },

  // IT slugs
  '/it/grazie': { de: '/danke', fr: '/fr/merci', en: '/en/thank-you', it: '/it/grazie' },
  '/it/come-funziona': { de: '/wie-funktioniert', fr: '/fr/comment-ca-marche', en: '/en/how-it-works', it: '/it/come-funziona' },
  '/it/come-funziona-solare': { de: '/wie-funktioniert', fr: '/fr/fonctionnement-solaire', en: '/en/how-solar-works', it: '/it/come-funziona-solare' },
  '/it/incentivi-solari': { de: '/foerderungen', fr: '/fr/subventions-solaires', en: '/en/solar-subsidies', it: '/it/incentivi-solari' },
  '/it/faq': { de: '/faq', fr: '/fr/faq', en: '/en/faq', it: '/it/faq' },
  '/it/chi-siamo': { de: '/ueber-uns', fr: '/fr/a-propos', en: '/en/about-us', it: '/it/chi-siamo' },
  '/it/costi-impianto-solare': { de: '/solaranlage-kosten', fr: '/fr/cout-installation-solaire', en: '/en/solar-panel-costs', it: '/it/costi-impianto-solare' },
  '/it/solare-con-accumulo': { de: '/solaranlage-mit-speicher', fr: '/fr/solaire-avec-batterie', en: '/en/solar-with-battery', it: '/it/solare-con-accumulo' },
  '/it/calcolatore-solare': { de: '/solarrechner', fr: '/fr/calculateur-solaire', en: '/en/solar-calculator', it: '/it/calcolatore-solare' },
  '/it/solare-casa-unifamiliare': { de: '/solaranlage-einfamilienhaus', fr: '/fr/solaire-maison-individuelle', en: '/en/solar-detached-house', it: '/it/solare-casa-unifamiliare' },
  '/it/solare-condominio': { de: '/solaranlage-mehrfamilienhaus', fr: '/fr/solaire-immeuble', en: '/en/solar-apartment-building', it: '/it/solare-condominio' },
  '/it/costo-fv-per-m2': { de: '/photovoltaik-kosten-pro-m2', fr: '/fr/cout-pv-par-m2', en: '/en/solar-cost-per-m2', it: '/it/costo-fv-per-m2' },
  '/it/blog': { de: '/blog', fr: '/fr/blog', en: '/en/blog', it: '/it/blog' },
  '/it/protezione-dati': { de: '/datenschutz', fr: '/fr/protection-des-donnees', en: '/en/privacy', it: '/it/protezione-dati' },
  '/it/note-legali': { de: '/impressum', fr: '/fr/mentions-legales', en: '/en/imprint', it: '/it/note-legali' },
};

/**
 * Given the current full pathname, return the equivalent path for the target locale.
 * Falls back to locale home if no mapping found.
 */
export function getLocalizedRoute(pathname: string, targetLocale: string): string {
  // Strip trailing slash except root
  const clean = pathname.replace(/\/$/, '') || '/';

  // Direct lookup
  if (routeMap[clean]) {
    return routeMap[clean][targetLocale] ?? (targetLocale === 'de' ? '/' : `/${targetLocale}`);
  }

  // Fallback: home for target locale
  return targetLocale === 'de' ? '/' : `/${targetLocale}`;
}
