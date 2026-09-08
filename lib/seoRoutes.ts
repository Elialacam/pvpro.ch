import { cities } from './cities';

export type SeoLocale = 'de' | 'it' | 'fr' | 'en';
export type SeoRouteGroup = {
  paths: Partial<Record<SeoLocale, string>>;
  priority?: number;
  changeFrequency?: 'weekly' | 'monthly' | 'yearly';
};

const four = (de: string, fr: string, en: string, it: string, priority = 0.85): SeoRouteGroup => ({
  paths: { de, fr, en, it }, priority,
});

/** The single inventory for indexable, non-article routes.  Do not add aliases,
 * forms, conversion pages, API endpoints, or locale fallbacks here. */
export const staticSeoRouteGroups: SeoRouteGroup[] = [
  four('/', '/fr', '/en', '/it', 1),
  four('/solaranlage-kosten', '/fr/cout-installation-solaire', '/en/solar-panel-costs', '/it/costi-impianto-solare', .9),
  four('/solaranlage-mit-speicher', '/fr/solaire-avec-batterie', '/en/solar-with-battery', '/it/solare-con-accumulo', .9),
  four('/solarrechner', '/fr/calculateur-solaire', '/en/solar-calculator', '/it/calcolatore-solare'),
  four('/solaranlage-einfamilienhaus', '/fr/solaire-maison-individuelle', '/en/solar-detached-house', '/it/solare-casa-unifamiliare'),
  four('/solaranlage-mehrfamilienhaus', '/fr/solaire-immeuble', '/en/solar-apartment-building', '/it/solare-condominio'),
  four('/photovoltaik-kosten-pro-m2', '/fr/cout-pv-par-m2', '/en/solar-cost-per-m2', '/it/costo-fv-per-m2'),
  four('/wie-funktioniert', '/fr/fonctionnement-solaire', '/en/how-solar-works', '/it/come-funziona-solare'),
  four('/wie-es-funktioniert', '/fr/comment-ca-marche', '/en/how-it-works', '/it/come-funziona', .75),
  four('/foerderungen', '/fr/subventions-solaires', '/en/solar-subsidies', '/it/incentivi-solari'),
  four('/vergleichsportal-photovoltaik-schweiz', '/fr/comparateur-photovoltaique-suisse', '/en/solar-comparison-portal-switzerland', '/it/comparatore-fotovoltaico-svizzera'),
  four('/solaranlage-installieren-schweiz', '/fr/installer-panneau-solaire-suisse', '/en/solar-panel-installation-switzerland', '/it/installare-impianto-solare-svizzera'),
  four('/solaranlage-offerte-einholen', '/fr/demander-offre-panneau-solaire', '/en/get-solar-panel-quotes', '/it/richiedere-preventivo-solare'),
  four('/foerderungen-kanton-zuerich', '/fr/subventions-solaires-canton-zurich', '/en/solar-subsidies-canton-zurich', '/it/incentivi-solari-cantone-zurigo'),
  four('/photovoltaik-schweizer-klima', '/fr/photovoltaique-climat-suisse', '/en/solar-panels-swiss-climate', '/it/fotovoltaico-clima-svizzero'),
  four('/photovoltaik-installation-schweiz', '/fr/installation-photovoltaique-suisse', '/en/solar-panel-installation-process-switzerland', '/it/processo-installazione-fotovoltaico-svizzera'),
  four('/photovoltaik-komplettloesung-schweiz', '/fr/solution-complete-photovoltaique-suisse', '/en/complete-solar-solution-switzerland', '/it/soluzione-completa-fotovoltaico-svizzera'),
  four('/photovoltaik-wartung-kosten', '/fr/entretien-photovoltaique-couts', '/en/solar-panel-maintenance-costs', '/it/manutenzione-fotovoltaico-costi'),
  four('/solaranlagen-typen-vergleich', '/fr/comparaison-types-panneaux-solaires', '/en/solar-panel-types-comparison', '/it/confronto-tipi-impianti-solari'),
  four('/faq', '/fr/faq', '/en/faq', '/it/faq', .75),
  four('/ueber-uns', '/fr/a-propos', '/en/about-us', '/it/chi-siamo', .7),
  four('/blog', '/fr/blog', '/en/blog', '/it/blog', .7),
  four('/balkonkraftwerk', '/fr/centrale-balcon', '/en/balcony-power-station', '/it/centrale-balcone', .7),
  four('/datenschutz', '/fr/protection-des-donnees', '/en/privacy', '/it/protezione-dati', .3),
  four('/impressum', '/fr/mentions-legales', '/en/imprint', '/it/note-legali', .3),
  { paths: { de: '/bewilligungspflicht-solaranlage-schweiz' }, priority: .8 },
  { paths: { fr: '/fr/solaire-geneve' }, priority: .8, changeFrequency: 'weekly' },
  { paths: { fr: '/fr/solaire-vaud' }, priority: .8, changeFrequency: 'weekly' },
  { paths: { it: '/it/fotovoltaico-ticino' }, priority: .9, changeFrequency: 'weekly' },
  { paths: { de: '/solaranlage-freiburg', fr: '/fr/solaire-fribourg' }, priority: .8, changeFrequency: 'weekly' },
  { paths: { de: '/solaranlage-biel', fr: '/fr/solaire-bienne' }, priority: .8, changeFrequency: 'weekly' },
  { paths: { de: '/solaranlage-wallis', fr: '/fr/solaire-valais' }, priority: .8, changeFrequency: 'weekly' },
  ...cities.filter(city => city.language === 'de' && !['freiburg', 'biel', 'wallis'].includes(city.slug))
    .map(city => ({ paths: { de: `/solaranlage-${city.slug}` }, priority: .8, changeFrequency: 'weekly' as const })),
];

const byPath = new Map<string, SeoRouteGroup>();
for (const group of staticSeoRouteGroups) {
  Object.values(group.paths).forEach(path => { if (path) byPath.set(path, group); });
}

export function seoRouteGroup(path: string): SeoRouteGroup | undefined {
  return byPath.get(path === '/' ? path : path.replace(/\/+$/, ''));
}