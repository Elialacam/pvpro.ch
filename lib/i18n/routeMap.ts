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

  // ─── Vergleichsportal / Solar comparison portal ──────────────────────────────
  '/vergleichsportal-photovoltaik-schweiz':        { de: '/vergleichsportal-photovoltaik-schweiz', fr: '/fr/comparateur-photovoltaique-suisse', en: '/en/solar-comparison-portal-switzerland', it: '/it/comparatore-fotovoltaico-svizzera' },
  '/fr/comparateur-photovoltaique-suisse':          { de: '/vergleichsportal-photovoltaik-schweiz', fr: '/fr/comparateur-photovoltaique-suisse', en: '/en/solar-comparison-portal-switzerland', it: '/it/comparatore-fotovoltaico-svizzera' },
  '/en/solar-comparison-portal-switzerland':        { de: '/vergleichsportal-photovoltaik-schweiz', fr: '/fr/comparateur-photovoltaique-suisse', en: '/en/solar-comparison-portal-switzerland', it: '/it/comparatore-fotovoltaico-svizzera' },
  '/it/comparatore-fotovoltaico-svizzera':          { de: '/vergleichsportal-photovoltaik-schweiz', fr: '/fr/comparateur-photovoltaique-suisse', en: '/en/solar-comparison-portal-switzerland', it: '/it/comparatore-fotovoltaico-svizzera' },

  // ─── Solaranlage installieren / Installation ─────────────────────────────────
  '/solaranlage-installieren-schweiz':              { de: '/solaranlage-installieren-schweiz', fr: '/fr/installer-panneau-solaire-suisse', en: '/en/solar-panel-installation-switzerland', it: '/it/installare-impianto-solare-svizzera' },
  '/fr/installer-panneau-solaire-suisse':           { de: '/solaranlage-installieren-schweiz', fr: '/fr/installer-panneau-solaire-suisse', en: '/en/solar-panel-installation-switzerland', it: '/it/installare-impianto-solare-svizzera' },
  '/en/solar-panel-installation-switzerland':       { de: '/solaranlage-installieren-schweiz', fr: '/fr/installer-panneau-solaire-suisse', en: '/en/solar-panel-installation-switzerland', it: '/it/installare-impianto-solare-svizzera' },
  '/it/installare-impianto-solare-svizzera':        { de: '/solaranlage-installieren-schweiz', fr: '/fr/installer-panneau-solaire-suisse', en: '/en/solar-panel-installation-switzerland', it: '/it/installare-impianto-solare-svizzera' },

  // ─── Offerte einholen / Get quotes ───────────────────────────────────────────
  '/solaranlage-offerte-einholen':                  { de: '/solaranlage-offerte-einholen', fr: '/fr/demander-offre-panneau-solaire', en: '/en/get-solar-panel-quotes', it: '/it/richiedere-preventivo-solare' },
  '/fr/demander-offre-panneau-solaire':             { de: '/solaranlage-offerte-einholen', fr: '/fr/demander-offre-panneau-solaire', en: '/en/get-solar-panel-quotes', it: '/it/richiedere-preventivo-solare' },
  '/en/get-solar-panel-quotes':                     { de: '/solaranlage-offerte-einholen', fr: '/fr/demander-offre-panneau-solaire', en: '/en/get-solar-panel-quotes', it: '/it/richiedere-preventivo-solare' },
  '/it/richiedere-preventivo-solare':               { de: '/solaranlage-offerte-einholen', fr: '/fr/demander-offre-panneau-solaire', en: '/en/get-solar-panel-quotes', it: '/it/richiedere-preventivo-solare' },

  // ─── Förderung Kanton Zürich ─────────────────────────────────────────────────
  '/foerderungen-kanton-zuerich':                   { de: '/foerderungen-kanton-zuerich', fr: '/fr/subventions-solaires-canton-zurich', en: '/en/solar-subsidies-canton-zurich', it: '/it/incentivi-solari-cantone-zurigo' },
  '/fr/subventions-solaires-canton-zurich':         { de: '/foerderungen-kanton-zuerich', fr: '/fr/subventions-solaires-canton-zurich', en: '/en/solar-subsidies-canton-zurich', it: '/it/incentivi-solari-cantone-zurigo' },
  '/en/solar-subsidies-canton-zurich':              { de: '/foerderungen-kanton-zuerich', fr: '/fr/subventions-solaires-canton-zurich', en: '/en/solar-subsidies-canton-zurich', it: '/it/incentivi-solari-cantone-zurigo' },
  '/it/incentivi-solari-cantone-zurigo':            { de: '/foerderungen-kanton-zuerich', fr: '/fr/subventions-solaires-canton-zurich', en: '/en/solar-subsidies-canton-zurich', it: '/it/incentivi-solari-cantone-zurigo' },

  // ─── Photovoltaik Schweizer Klima ────────────────────────────────────────────
  '/photovoltaik-schweizer-klima':                  { de: '/photovoltaik-schweizer-klima', fr: '/fr/photovoltaique-climat-suisse', en: '/en/solar-panels-swiss-climate', it: '/it/fotovoltaico-clima-svizzero' },
  '/fr/photovoltaique-climat-suisse':               { de: '/photovoltaik-schweizer-klima', fr: '/fr/photovoltaique-climat-suisse', en: '/en/solar-panels-swiss-climate', it: '/it/fotovoltaico-clima-svizzero' },
  '/en/solar-panels-swiss-climate':                 { de: '/photovoltaik-schweizer-klima', fr: '/fr/photovoltaique-climat-suisse', en: '/en/solar-panels-swiss-climate', it: '/it/fotovoltaico-clima-svizzero' },
  '/it/fotovoltaico-clima-svizzero':                { de: '/photovoltaik-schweizer-klima', fr: '/fr/photovoltaique-climat-suisse', en: '/en/solar-panels-swiss-climate', it: '/it/fotovoltaico-clima-svizzero' },

  // ─── Photovoltaik Installation Schweiz ───────────────────────────────────────
  '/photovoltaik-installation-schweiz':             { de: '/photovoltaik-installation-schweiz', fr: '/fr/installation-photovoltaique-suisse', en: '/en/solar-panel-installation-process-switzerland', it: '/it/processo-installazione-fotovoltaico-svizzera' },
  '/fr/installation-photovoltaique-suisse':         { de: '/photovoltaik-installation-schweiz', fr: '/fr/installation-photovoltaique-suisse', en: '/en/solar-panel-installation-process-switzerland', it: '/it/processo-installazione-fotovoltaico-svizzera' },
  '/en/solar-panel-installation-process-switzerland': { de: '/photovoltaik-installation-schweiz', fr: '/fr/installation-photovoltaique-suisse', en: '/en/solar-panel-installation-process-switzerland', it: '/it/processo-installazione-fotovoltaico-svizzera' },
  '/it/processo-installazione-fotovoltaico-svizzera': { de: '/photovoltaik-installation-schweiz', fr: '/fr/installation-photovoltaique-suisse', en: '/en/solar-panel-installation-process-switzerland', it: '/it/processo-installazione-fotovoltaico-svizzera' },

  // ─── Photovoltaik Komplettlösung ─────────────────────────────────────────────
  '/photovoltaik-komplettloesung-schweiz':          { de: '/photovoltaik-komplettloesung-schweiz', fr: '/fr/solution-complete-photovoltaique-suisse', en: '/en/complete-solar-solution-switzerland', it: '/it/soluzione-completa-fotovoltaico-svizzera' },
  '/fr/solution-complete-photovoltaique-suisse':    { de: '/photovoltaik-komplettloesung-schweiz', fr: '/fr/solution-complete-photovoltaique-suisse', en: '/en/complete-solar-solution-switzerland', it: '/it/soluzione-completa-fotovoltaico-svizzera' },
  '/en/complete-solar-solution-switzerland':        { de: '/photovoltaik-komplettloesung-schweiz', fr: '/fr/solution-complete-photovoltaique-suisse', en: '/en/complete-solar-solution-switzerland', it: '/it/soluzione-completa-fotovoltaico-svizzera' },
  '/it/soluzione-completa-fotovoltaico-svizzera':   { de: '/photovoltaik-komplettloesung-schweiz', fr: '/fr/solution-complete-photovoltaique-suisse', en: '/en/complete-solar-solution-switzerland', it: '/it/soluzione-completa-fotovoltaico-svizzera' },

  // ─── Photovoltaik Wartung Kosten ─────────────────────────────────────────────
  '/photovoltaik-wartung-kosten':                   { de: '/photovoltaik-wartung-kosten', fr: '/fr/entretien-photovoltaique-couts', en: '/en/solar-panel-maintenance-costs', it: '/it/manutenzione-fotovoltaico-costi' },
  '/fr/entretien-photovoltaique-couts':             { de: '/photovoltaik-wartung-kosten', fr: '/fr/entretien-photovoltaique-couts', en: '/en/solar-panel-maintenance-costs', it: '/it/manutenzione-fotovoltaico-costi' },
  '/en/solar-panel-maintenance-costs':              { de: '/photovoltaik-wartung-kosten', fr: '/fr/entretien-photovoltaique-couts', en: '/en/solar-panel-maintenance-costs', it: '/it/manutenzione-fotovoltaico-costi' },
  '/it/manutenzione-fotovoltaico-costi':            { de: '/photovoltaik-wartung-kosten', fr: '/fr/entretien-photovoltaique-couts', en: '/en/solar-panel-maintenance-costs', it: '/it/manutenzione-fotovoltaico-costi' },

  // ─── Solaranlagen Typen Vergleich ────────────────────────────────────────────
  '/solaranlagen-typen-vergleich':                  { de: '/solaranlagen-typen-vergleich', fr: '/fr/comparaison-types-panneaux-solaires', en: '/en/solar-panel-types-comparison', it: '/it/confronto-tipi-impianti-solari' },
  '/fr/comparaison-types-panneaux-solaires':        { de: '/solaranlagen-typen-vergleich', fr: '/fr/comparaison-types-panneaux-solaires', en: '/en/solar-panel-types-comparison', it: '/it/confronto-tipi-impianti-solari' },
  '/en/solar-panel-types-comparison':               { de: '/solaranlagen-typen-vergleich', fr: '/fr/comparaison-types-panneaux-solaires', en: '/en/solar-panel-types-comparison', it: '/it/confronto-tipi-impianti-solari' },
  '/it/confronto-tipi-impianti-solari':             { de: '/solaranlagen-typen-vergleich', fr: '/fr/comparaison-types-panneaux-solaires', en: '/en/solar-panel-types-comparison', it: '/it/confronto-tipi-impianti-solari' },

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
