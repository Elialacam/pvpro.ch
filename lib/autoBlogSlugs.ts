/**
 * Canonical, locale-specific URLs for generated articles. `legacySlug` is the
 * immutable content-file identity; it is never a public canonical URL.
 */
export type BlogLocale = 'de' | 'it' | 'fr' | 'en';
export interface AutoBlogSlugRecord {
  legacySlug: string;
  slugs: Record<BlogLocale, string>;
}

const rows: [string, string, string, string, string][] = [
  ['fehler-beim-vergleich-von-solar-offerten-so-vermeiden-sie-teure-fehlentscheide','fehler-solarofferten-vergleich','errori-confronto-offerte-solari','erreurs-comparaison-offres-solaires','solar-offer-comparison-mistakes'],
  ['solar-offerten-checkliste-2026-so-vergleichen-sie-photovoltaik-angebote-in-der-s','solarofferten-checkliste-vergleichen','checklist-offerte-solari','checklist-offres-solaires','solar-offer-checklist'],
  ['photovoltaik-anbieter-vergleich-2026-so-finden-sie-den-besten-solarteur-in-der-s','photovoltaik-anbieter-vergleich','confronto-fornitori-fotovoltaico','comparaison-fournisseurs-photovoltaiques','photovoltaic-provider-comparison'],
  ['solarfirma-prufen-schweiz-so-finden-sie-seriose-photovoltaik-partner-2026','solarfirma-serioes-pruefen','verifica-azienda-solare-affidabile','verifier-entreprise-solaire','check-reliable-solar-company'],
  ['solaranlage-qualitat-erkennen-der-ultimative-ratgeber-fur-schweizer-hausbesitzer','solaranlagen-qualitaet-erkennen','riconoscere-qualita-impianti-solari','identifier-qualite-installations-solaires','recognize-solar-system-quality'],
  ['solar-offerten-warum-3-angebote-der-goldene-standard-in-der-schweiz-sind','drei-solarofferten-vergleichen','tre-offerte-solari','trois-offres-solaires','three-solar-quotes'],
  ['photovoltaik-beratung-unabhangig-so-finden-sie-die-beste-losung-in-der-schweiz-2','unabhaengige-photovoltaik-beratung','consulenza-fotovoltaica-indipendente','conseil-photovoltaique-independant','independent-photovoltaic-consultation'],
  ['wie-funktioniert-pv-pro-ihr-weg-zur-massgeschneiderten-solaranlage','so-funktioniert-pvpro','come-funziona-pvpro','comment-fonctionne-pvpro','how-pvpro-works'],
  ['kosten-einer-solaranlage-in-der-schweiz-2026-der-komplette-preis-ratgeber','solaranlage-kosten-schweiz-2026','costi-impianto-solare-svizzera','cout-installation-solaire-suisse','swiss-solar-system-cost'],
  ['solarfirma-lokal-oder-national-der-ultimative-ratgeber-fur-schweizer-hausbesitze','solarfirma-lokal-oder-national','azienda-solare-locale-nazionale','entreprise-solaire-locale-nationale','local-or-national-solar-company'],
  ['solarrechner-schweiz-2026-photovoltaik-potenzial-und-kosten-online-berechnen','solarrechner-schweiz-potenzial-kosten','calcolatore-solare-potenziale-costi','calculateur-solaire-potentiel-couts','swiss-solar-calculator'],
  ['pv-anlage-kosten-einfamilienhaus-2026-der-grosse-schweizer-preis-ratgeber','pv-kosten-einfamilienhaus-2026','costi-pv-casa-unifamiliare','cout-pv-maison-individuelle','single-family-solar-costs'],
  ['solaranlage-investition-sinnvoll-2026-warum-sich-photovoltaik-in-der-schweiz-jet','solaranlage-investition-2026','investimento-impianto-solare-2026','investissement-solaire-2026','solar-investment-2026'],
  ['photovoltaik-steuerabzug-schweiz-so-sparen-sie-2026-bei-ihrer-solaranlage','photovoltaik-steuerabzug-schweiz','detrazione-fiscale-fotovoltaico','deduction-fiscale-photovoltaique','solar-tax-deduction'],
  ['solaranlage-forderung-im-kanton-so-sichern-sie-sich-2026-die-maximalen-beitrage','solaranlage-foerderung-kanton','incentivi-solari-cantone','subventions-solaires-canton','canton-solar-subsidies'],
  ['photovoltaik-installateur-schweiz-den-passenden-experten-fur-ihr-solarprojekt-fi','photovoltaik-installateur-finden','trovare-installatore-fotovoltaico','trouver-installateur-photovoltaique','find-photovoltaic-installer'],
  ['zertifizierter-solarteur-gesucht-die-ultimative-checkliste-fur-die-schweiz-2026','zertifizierten-solarteur-finden','trovare-installatore-solare-certificato','trouver-installateur-solaire-certifie','find-certified-solar-installer'],
  ['fragen-an-den-solarteur-so-bereiten-sie-sich-auf-die-photovoltaik-experten-berat','fragen-an-den-solarteur','domande-al-solarteur','questions-au-specialiste-solaire','questions-for-solar-installer'],
  ['photovoltaik-projektierung-schweiz-der-komplette-leitfaden-fur-2026','photovoltaik-projektierung-schweiz','progettazione-fotovoltaica-svizzera','conception-photovoltaique-suisse','swiss-photovoltaic-planning'],
  ['solaranlage-komplettangebot-vergleich-die-ultimative-checkliste-fur-schweizer-ha','komplettangebote-solaranlage-vergleichen','confronto-offerte-complete-solari','comparaison-offres-solaires-completes','compare-complete-solar-offers'],
  ['solaranlage-mehrfamilienhaus-kosten-2026-der-grosse-schweizer-ratgeber','solaranlage-mehrfamilienhaus-kosten','costi-solare-edificio-plurifamiliare','cout-solaire-immeuble-locatif','multifamily-solar-costs'],
  ['zev-solaranlage-schweiz-der-komplette-ratgeber-fur-den-eigenverbrauch-2026','zev-solaranlage-eigenverbrauch','impianto-zev-autoconsumo','installation-zev-autoconsommation','zev-solar-self-consumption'],
  ['lebensdauer-solaranlage-schweiz-wie-lange-halt-photovoltaik-wirklich','lebensdauer-solaranlage-schweiz','durata-impianto-solare-svizzera','duree-installation-solaire-suisse','swiss-solar-system-lifespan'],
  ['solar-offerte-prufen-die-ultimative-checkliste-fur-schweizer-hauseigentumer-2026','solarofferte-checkliste-hauseigentuemer','checklist-offerte-solari-proprietari','checklist-offres-solaires-proprietaires','solar-quotes-homeowners-checklist'],
  ['solaranlage-fur-gewerbeimmobilien-in-der-schweiz-der-ultimative-ratgeber-2026','solaranlage-gewerbeimmobilien','impianti-solari-immobili-commerciali','installation-solaire-immobilier-commercial','commercial-property-solar'],
  ['gewerbe-photovoltaik-planung-in-5-schritten-zur-solaranlage-fur-ihr-unternehmen-','solaranlage-gewerbeplanung-fuenf-schritte','pianificazione-solare-aziendale-cinque-passi','planification-solaire-entreprises-cinq-etapes','commercial-solar-planning-steps'],
  ['solaranlage-flachdach-kosten-in-der-schweiz-der-komplette-ratgeber-2026','solaranlage-flachdach-kosten','costi-solare-tetto-piano','cout-solaire-toit-plat','flat-roof-solar-costs'],
  ['pv-anlage-fur-landwirtschaft-chancen-kosten-und-praxisbeispiele-2026-in-der-schw','photovoltaik-landwirtschaft-schweiz','fotovoltaico-agricoltura-svizzera','photovoltaique-agriculture-suisse','agricultural-solar-system'],
  ['solaranlage-anbieter-schweiz-der-grosse-ratgeber-fur-ihre-photovoltaik-planung-2','solaranlage-anbieter-planung','fornitori-solari-pianificazione','fournisseurs-solaires-planification','solar-providers-planning'],
  ['solarpanel-installation-kosten-2026-was-kostet-photovoltaik-in-der-schweiz','solarpanel-installation-kosten','costi-installazione-pannelli-solari','cout-installation-panneaux-solaires','solar-panel-installation-cost'],
  ['wann-lohnt-sich-ein-stromspeicher-in-der-schweiz-der-ratgeber-2026','stromspeicher-rentabilitaet-schweiz','convenienza-accumulatore-svizzera','rentabilite-stockage-electricite-suisse','solar-battery-worthwhile'],
  ['solaranlage-wartung-kosten-langlebigkeit-sicherstellen','solaranlage-wartungskosten','costi-manutenzione-impianti-solari','cout-maintenance-installation-solaire','solar-system-maintenance'],
  ['photovoltaik-mit-warmepumpe-heizkosten-senken-in-der-schweiz','photovoltaik-waermepumpe-heizkosten','fotovoltaico-pompa-calore','photovoltaique-pompe-chaleur','photovoltaics-heat-pump'],
  ['pv-anlage-mit-speicher-lohnt-sich-die-investition','pv-speicher-investition','accumulo-pv-conviene','stockage-pv-rentable','pv-battery-investment'],
  ['solaranlage-offerten-vergleichen','solaranlage-offerten-sparen','offerte-solari-risparmio','offres-solaires-economies','solar-quotes-savings'],
];

export const autoBlogSlugRegistry: AutoBlogSlugRecord[] = rows.map(([legacySlug, de, it, fr, en]) => ({ legacySlug, slugs: { de, it, fr, en } }));
export const autoBlogByLegacySlug = Object.fromEntries(autoBlogSlugRegistry.map((entry) => [entry.legacySlug, entry]));
export const autoBlogByLocaleSlug = Object.fromEntries(autoBlogSlugRegistry.flatMap((entry) =>
  (Object.keys(entry.slugs) as BlogLocale[]).map((locale) => [`${locale}:${entry.slugs[locale]}`, entry]),
));

export function getAutoBlogSlugRecord(slug: string, locale?: BlogLocale) {
  return autoBlogByLegacySlug[slug] ?? (locale ? autoBlogByLocaleSlug[`${locale}:${slug}`] : undefined);
}

export function autoBlogPath(record: AutoBlogSlugRecord, locale: BlogLocale): string {
  const base = locale === 'de' ? '/blog' : `/${locale}/blog`;
  return `${base}/${record.slugs[locale]}`;
}