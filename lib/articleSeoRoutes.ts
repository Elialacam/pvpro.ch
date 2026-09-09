import { autoBlogPath, getAutoBlogSlugRecord, type BlogLocale } from './autoBlogSlugs';

export const manualArticleLocaleSlugs: Record<string, Record<BlogLocale, string>> = {
  'lohnt-sich-solaranlage-schweiz-2026': { de: 'lohnt-sich-solaranlage-schweiz-2026', fr: 'rentabilite-panneau-solaire-suisse-2026', en: 'is-solar-worth-it-switzerland-2026', it: 'vale-la-pena-impianto-solare-svizzera-2026' },
  'solaranlage-steuerabzug-schweiz-2026': { de: 'solaranlage-steuerabzug-schweiz-2026', fr: 'deduction-fiscale-panneau-solaire-suisse-2026', en: 'solar-panel-tax-deduction-switzerland-2026', it: 'detrazione-fiscale-impianto-solare-svizzera-2026' },
  'solaranlage-waermepumpe-kombinieren-schweiz': { de: 'solaranlage-waermepumpe-kombinieren-schweiz', fr: 'panneaux-solaires-pompe-chaleur-suisse', en: 'solar-panels-heat-pump-combination-switzerland', it: 'impianto-solare-pompa-calore-svizzera' },
  'besten-solarinstallateur-schweiz-finden': { de: 'besten-solarinstallateur-schweiz-finden', fr: 'trouver-meilleur-installateur-solaire-suisse', en: 'find-best-solar-installer-switzerland', it: 'trovare-miglior-installatore-solare-svizzera' },
  'batteriespeicher-brandgefahr-sicherheit-schweiz': { de: 'batteriespeicher-brandgefahr-sicherheit-schweiz', fr: 'batterie-solaire-danger-incendie-securite-suisse', en: 'solar-battery-fire-risk-safety-switzerland', it: 'batteria-solare-rischio-incendio-sicurezza-svizzera' },
  'solaranlage-installateur-konkurs-garantie-schweiz': { de: 'solaranlage-installateur-konkurs-garantie-schweiz', fr: 'installateur-solaire-faillite-garantie-suisse', en: 'solar-installer-bankruptcy-guarantee-switzerland', it: 'installatore-solare-fallimento-garanzia-svizzera' },
  'solaranlage-versicherung-schweiz': { de: 'solaranlage-versicherung-schweiz', fr: 'assurance-installation-solaire-suisse', en: 'solar-panel-insurance-switzerland', it: 'assicurazione-impianto-solare-svizzera' },
  'chinesische-vs-europaeische-solarmodule-schweiz': { de: 'chinesische-vs-europaeische-solarmodule-schweiz', fr: 'panneaux-solaires-chinois-vs-europeens-suisse', en: 'chinese-vs-european-solar-panels-switzerland', it: 'pannelli-solari-cinesi-vs-europei-svizzera' },
  'solaranlage-norddach-schweiz': { de: 'solaranlage-norddach-schweiz', fr: 'panneau-solaire-toit-nord-suisse', en: 'solar-panels-north-facing-roof-switzerland', it: 'impianto-solare-tetto-nord-svizzera' },
  'balkonkraftwerk-schweiz': { de: 'balkonkraftwerk-schweiz', fr: 'centrale-balcon-suisse', en: 'balcony-power-station-switzerland', it: 'centrale-balcone-svizzera' },
  'solaranlage-winter-schweiz': { de: 'solaranlage-winter-schweiz', fr: 'panneaux-solaires-hiver-suisse', en: 'solar-panels-winter-switzerland', it: 'pannelli-solari-inverno-svizzera' },
  'foerderungen-photovoltaik-2026': { de: 'foerderungen-photovoltaik-2026', fr: 'subventions-photovoltaiques-2026', en: 'solar-subsidies-switzerland-2026', it: 'incentivi-fotovoltaici-svizzera-2026' },
  'batteriespeicher-solaranlage-lohnt-sich': { de: 'batteriespeicher-solaranlage-lohnt-sich', fr: 'batterie-stockage-solaire-suisse', en: 'solar-battery-storage-worth-it', it: 'accumulo-batteria-impianto-solare' },
  'richtigen-solarinstallateur-schweiz-waehlen': { de: 'richtigen-solarinstallateur-schweiz-waehlen', fr: 'choisir-installateur-solaire-suisse', en: 'choosing-solar-installer-switzerland', it: 'scegliere-installatore-solare-svizzera' },
  'eigenverbrauch-optimieren-solar': { de: 'eigenverbrauch-optimieren-solar', fr: 'maximiser-autoconsommation-solaire', en: 'maximise-solar-self-consumption', it: 'massimizzare-autoconsumo-solare' },
  'roi-photovoltaik-schweiz': { de: 'roi-photovoltaik-schweiz', fr: 'retour-investissement-solaire-suisse', en: 'solar-system-roi-switzerland', it: 'roi-impianto-solare-svizzera' },
};

const manualByLocaleSlug = new Map<string, Record<BlogLocale, string>>();
Object.values(manualArticleLocaleSlugs).forEach(group => {
  (Object.keys(group) as BlogLocale[]).forEach(locale => manualByLocaleSlug.set(`${locale}:${group[locale]}`, group));
});

export function articleLocalePaths(slug: string, locale: BlogLocale): Record<BlogLocale, string> {
  const auto = getAutoBlogSlugRecord(slug, locale);
  if (auto) return Object.fromEntries((['de', 'fr', 'en', 'it'] as BlogLocale[]).map(language => [language, autoBlogPath(auto, language)])) as Record<BlogLocale, string>;
  const group = manualByLocaleSlug.get(`${locale}:${slug}`) ?? manualArticleLocaleSlugs[slug];
  const slugs = group ?? { de: slug, fr: slug, en: slug, it: slug };
  return Object.fromEntries((['de', 'fr', 'en', 'it'] as BlogLocale[]).map(language => [
    language,
    `${language === 'de' ? '' : `/${language}`}/blog/${slugs[language]}`,
  ])) as Record<BlogLocale, string>;
}

export function articleAlternates(slug: string, locale: BlogLocale) {
  const paths = articleLocalePaths(slug, locale);
  const base = 'https://www.pvpro.ch';
  return {
    canonical: `${base}${paths[locale]}`,
    languages: {
      'de-CH': `${base}${paths.de}`,
      'fr-CH': `${base}${paths.fr}`,
      'en-CH': `${base}${paths.en}`,
      'it-CH': `${base}${paths.it}`,
      'x-default': `${base}${paths.de}`,
    },
  };
}