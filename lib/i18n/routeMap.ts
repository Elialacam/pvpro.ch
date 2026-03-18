/**
 * Route map: maps each path to its equivalent in all locales.
 * Used by the LanguageSwitcher to navigate to the correct translated page.
 * Key = full path (including locale prefix for non-DE), value = record per locale.
 */
export const routeMap: Record<string, Record<string, string>> = {

  // ─── Home ───────────────────────────────────────────────────────────────────
  '/':    { de: '/',   fr: '/fr', en: '/en', it: '/it' },
  '/fr':  { de: '/',   fr: '/fr', en: '/en', it: '/it' },
  '/en':  { de: '/',   fr: '/fr', en: '/en', it: '/it' },
  '/it':  { de: '/',   fr: '/fr', en: '/en', it: '/it' },

  // ─── Anfrage / Demande / Request / Richiesta ────────────────────────────────
  '/anfrage':      { de: '/anfrage', fr: '/fr/demande', en: '/en/request', it: '/it/richiesta' },
  '/fr/demande':   { de: '/anfrage', fr: '/fr/demande', en: '/en/request', it: '/it/richiesta' },
  '/en/request':   { de: '/anfrage', fr: '/fr/demande', en: '/en/request', it: '/it/richiesta' },
  '/it/richiesta': { de: '/anfrage', fr: '/fr/demande', en: '/en/request', it: '/it/richiesta' },

  // ─── Danke / Thank you ──────────────────────────────────────────────────────
  '/danke':        { de: '/danke',        fr: '/fr/merci',    en: '/en/thank-you', it: '/it/grazie' },
  '/fr/merci':     { de: '/danke',        fr: '/fr/merci',    en: '/en/thank-you', it: '/it/grazie' },
  '/en/thank-you': { de: '/danke',        fr: '/fr/merci',    en: '/en/thank-you', it: '/it/grazie' },
  '/it/grazie':    { de: '/danke',        fr: '/fr/merci',    en: '/en/thank-you', it: '/it/grazie' },

  // ─── Wie es funktioniert (process overview) ─────────────────────────────────
  '/wie-es-funktioniert':   { de: '/wie-es-funktioniert', fr: '/fr/comment-ca-marche', en: '/en/how-it-works',    it: '/it/come-funziona' },
  '/fr/comment-ca-marche':  { de: '/wie-es-funktioniert', fr: '/fr/comment-ca-marche', en: '/en/how-it-works',    it: '/it/come-funziona' },
  '/en/how-it-works':       { de: '/wie-es-funktioniert', fr: '/fr/comment-ca-marche', en: '/en/how-it-works',    it: '/it/come-funziona' },
  '/it/come-funziona':      { de: '/wie-es-funktioniert', fr: '/fr/comment-ca-marche', en: '/en/how-it-works',    it: '/it/come-funziona' },

  // ─── Wie funktioniert Solaranlage (technical how-solar-works) ───────────────
  '/wie-funktioniert':          { de: '/wie-funktioniert', fr: '/fr/fonctionnement-solaire', en: '/en/how-solar-works',  it: '/it/come-funziona-solare' },
  '/fr/fonctionnement-solaire': { de: '/wie-funktioniert', fr: '/fr/fonctionnement-solaire', en: '/en/how-solar-works',  it: '/it/come-funziona-solare' },
  '/en/how-solar-works':        { de: '/wie-funktioniert', fr: '/fr/fonctionnement-solaire', en: '/en/how-solar-works',  it: '/it/come-funziona-solare' },
  '/it/come-funziona-solare':   { de: '/wie-funktioniert', fr: '/fr/fonctionnement-solaire', en: '/en/how-solar-works',  it: '/it/come-funziona-solare' },

  // ─── Förderungen / Subventions ───────────────────────────────────────────────
  '/foerderungen':          { de: '/foerderungen', fr: '/fr/subventions-solaires', en: '/en/solar-subsidies', it: '/it/incentivi-solari' },
  '/fr/subventions-solaires': { de: '/foerderungen', fr: '/fr/subventions-solaires', en: '/en/solar-subsidies', it: '/it/incentivi-solari' },
  '/en/solar-subsidies':    { de: '/foerderungen', fr: '/fr/subventions-solaires', en: '/en/solar-subsidies', it: '/it/incentivi-solari' },
  '/it/incentivi-solari':   { de: '/foerderungen', fr: '/fr/subventions-solaires', en: '/en/solar-subsidies', it: '/it/incentivi-solari' },

  // ─── FAQ ────────────────────────────────────────────────────────────────────
  '/faq':     { de: '/faq', fr: '/fr/faq', en: '/en/faq', it: '/it/faq' },
  '/fr/faq':  { de: '/faq', fr: '/fr/faq', en: '/en/faq', it: '/it/faq' },
  '/en/faq':  { de: '/faq', fr: '/fr/faq', en: '/en/faq', it: '/it/faq' },
  '/it/faq':  { de: '/faq', fr: '/fr/faq', en: '/en/faq', it: '/it/faq' },

  // ─── Über uns / About ───────────────────────────────────────────────────────
  '/ueber-uns':   { de: '/ueber-uns', fr: '/fr/a-propos', en: '/en/about-us', it: '/it/chi-siamo' },
  '/fr/a-propos': { de: '/ueber-uns', fr: '/fr/a-propos', en: '/en/about-us', it: '/it/chi-siamo' },
  '/en/about-us': { de: '/ueber-uns', fr: '/fr/a-propos', en: '/en/about-us', it: '/it/chi-siamo' },
  '/it/chi-siamo':{ de: '/ueber-uns', fr: '/fr/a-propos', en: '/en/about-us', it: '/it/chi-siamo' },

  // ─── Solaranlage Kosten ──────────────────────────────────────────────────────
  '/solaranlage-kosten':           { de: '/solaranlage-kosten', fr: '/fr/cout-installation-solaire', en: '/en/solar-panel-costs', it: '/it/costi-impianto-solare' },
  '/fr/cout-installation-solaire': { de: '/solaranlage-kosten', fr: '/fr/cout-installation-solaire', en: '/en/solar-panel-costs', it: '/it/costi-impianto-solare' },
  '/en/solar-panel-costs':         { de: '/solaranlage-kosten', fr: '/fr/cout-installation-solaire', en: '/en/solar-panel-costs', it: '/it/costi-impianto-solare' },
  '/it/costi-impianto-solare':     { de: '/solaranlage-kosten', fr: '/fr/cout-installation-solaire', en: '/en/solar-panel-costs', it: '/it/costi-impianto-solare' },

  // ─── Solaranlage mit Speicher ────────────────────────────────────────────────
  '/solaranlage-mit-speicher':  { de: '/solaranlage-mit-speicher', fr: '/fr/solaire-avec-batterie', en: '/en/solar-with-battery', it: '/it/solare-con-accumulo' },
  '/fr/solaire-avec-batterie':  { de: '/solaranlage-mit-speicher', fr: '/fr/solaire-avec-batterie', en: '/en/solar-with-battery', it: '/it/solare-con-accumulo' },
  '/en/solar-with-battery':     { de: '/solaranlage-mit-speicher', fr: '/fr/solaire-avec-batterie', en: '/en/solar-with-battery', it: '/it/solare-con-accumulo' },
  '/it/solare-con-accumulo':    { de: '/solaranlage-mit-speicher', fr: '/fr/solaire-avec-batterie', en: '/en/solar-with-battery', it: '/it/solare-con-accumulo' },

  // ─── Solarrechner / Calculator ───────────────────────────────────────────────
  '/solarrechner':          { de: '/solarrechner', fr: '/fr/calculateur-solaire', en: '/en/solar-calculator', it: '/it/calcolatore-solare' },
  '/fr/calculateur-solaire':{ de: '/solarrechner', fr: '/fr/calculateur-solaire', en: '/en/solar-calculator', it: '/it/calcolatore-solare' },
  '/en/solar-calculator':   { de: '/solarrechner', fr: '/fr/calculateur-solaire', en: '/en/solar-calculator', it: '/it/calcolatore-solare' },
  '/it/calcolatore-solare': { de: '/solarrechner', fr: '/fr/calculateur-solaire', en: '/en/solar-calculator', it: '/it/calcolatore-solare' },

  // ─── Einfamilienhaus ────────────────────────────────────────────────────────
  '/solaranlage-einfamilienhaus':      { de: '/solaranlage-einfamilienhaus', fr: '/fr/solaire-maison-individuelle', en: '/en/solar-detached-house', it: '/it/solare-casa-unifamiliare' },
  '/fr/solaire-maison-individuelle':   { de: '/solaranlage-einfamilienhaus', fr: '/fr/solaire-maison-individuelle', en: '/en/solar-detached-house', it: '/it/solare-casa-unifamiliare' },
  '/en/solar-detached-house':          { de: '/solaranlage-einfamilienhaus', fr: '/fr/solaire-maison-individuelle', en: '/en/solar-detached-house', it: '/it/solare-casa-unifamiliare' },
  '/it/solare-casa-unifamiliare':      { de: '/solaranlage-einfamilienhaus', fr: '/fr/solaire-maison-individuelle', en: '/en/solar-detached-house', it: '/it/solare-casa-unifamiliare' },

  // ─── Mehrfamilienhaus ────────────────────────────────────────────────────────
  '/solaranlage-mehrfamilienhaus':  { de: '/solaranlage-mehrfamilienhaus', fr: '/fr/solaire-immeuble', en: '/en/solar-apartment-building', it: '/it/solare-condominio' },
  '/fr/solaire-immeuble':           { de: '/solaranlage-mehrfamilienhaus', fr: '/fr/solaire-immeuble', en: '/en/solar-apartment-building', it: '/it/solare-condominio' },
  '/en/solar-apartment-building':   { de: '/solaranlage-mehrfamilienhaus', fr: '/fr/solaire-immeuble', en: '/en/solar-apartment-building', it: '/it/solare-condominio' },
  '/it/solare-condominio':          { de: '/solaranlage-mehrfamilienhaus', fr: '/fr/solaire-immeuble', en: '/en/solar-apartment-building', it: '/it/solare-condominio' },

  // ─── PV Kosten pro m² ────────────────────────────────────────────────────────
  '/photovoltaik-kosten-pro-m2': { de: '/photovoltaik-kosten-pro-m2', fr: '/fr/cout-pv-par-m2', en: '/en/solar-cost-per-m2', it: '/it/costo-fv-per-m2' },
  '/fr/cout-pv-par-m2':          { de: '/photovoltaik-kosten-pro-m2', fr: '/fr/cout-pv-par-m2', en: '/en/solar-cost-per-m2', it: '/it/costo-fv-per-m2' },
  '/en/solar-cost-per-m2':       { de: '/photovoltaik-kosten-pro-m2', fr: '/fr/cout-pv-par-m2', en: '/en/solar-cost-per-m2', it: '/it/costo-fv-per-m2' },
  '/it/costo-fv-per-m2':         { de: '/photovoltaik-kosten-pro-m2', fr: '/fr/cout-pv-par-m2', en: '/en/solar-cost-per-m2', it: '/it/costo-fv-per-m2' },

  // ─── Blog ────────────────────────────────────────────────────────────────────
  '/blog':    { de: '/blog', fr: '/fr/blog', en: '/en/blog', it: '/it/blog' },
  '/fr/blog': { de: '/blog', fr: '/fr/blog', en: '/en/blog', it: '/it/blog' },
  '/en/blog': { de: '/blog', fr: '/fr/blog', en: '/en/blog', it: '/it/blog' },
  '/it/blog': { de: '/blog', fr: '/fr/blog', en: '/en/blog', it: '/it/blog' },

  // ─── Datenschutz / Privacy ───────────────────────────────────────────────────
  '/datenschutz':              { de: '/datenschutz', fr: '/fr/protection-des-donnees', en: '/en/privacy', it: '/it/protezione-dati' },
  '/fr/protection-des-donnees':{ de: '/datenschutz', fr: '/fr/protection-des-donnees', en: '/en/privacy', it: '/it/protezione-dati' },
  '/en/privacy':               { de: '/datenschutz', fr: '/fr/protection-des-donnees', en: '/en/privacy', it: '/it/protezione-dati' },
  '/it/protezione-dati':       { de: '/datenschutz', fr: '/fr/protection-des-donnees', en: '/en/privacy', it: '/it/protezione-dati' },

  // ─── Impressum / Legal ───────────────────────────────────────────────────────
  '/impressum':         { de: '/impressum', fr: '/fr/mentions-legales', en: '/en/imprint', it: '/it/note-legali' },
  '/fr/mentions-legales':{ de: '/impressum', fr: '/fr/mentions-legales', en: '/en/imprint', it: '/it/note-legali' },
  '/en/imprint':        { de: '/impressum', fr: '/fr/mentions-legales', en: '/en/imprint', it: '/it/note-legali' },
  '/it/note-legali':    { de: '/impressum', fr: '/fr/mentions-legales', en: '/en/imprint', it: '/it/note-legali' },

  // ─── Balkonkraftwerk (DE only — no translation) ──────────────────────────────
  '/balkonkraftwerk': { de: '/balkonkraftwerk', fr: '/fr/blog', en: '/en/blog', it: '/it/blog' },

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
