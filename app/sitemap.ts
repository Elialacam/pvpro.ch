import { MetadataRoute } from 'next';
import { cities } from '@/lib/cities';
import { getBlogArticleSlugs } from '@/lib/blogArticles';

const BASE = 'https://www.pvpro.ch';
const NOW = new Date();

type Freq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

function entry(
  dePath: string,
  frPath: string,
  enPath: string,
  itPath: string,
  priority: number,
  freq: Freq = 'weekly',
) {
  const makeUrl = (path: string) => `${BASE}${path}`;
  const langs = {
    'de-CH': makeUrl(dePath),
    'fr-CH': makeUrl(frPath),
    'en-CH': makeUrl(enPath),
    'it-CH': makeUrl(itPath),
    'x-default': makeUrl(dePath),
  };

  return [dePath, frPath, enPath, itPath].map((path) => ({
    url: makeUrl(path),
    lastModified: NOW,
    changeFrequency: freq,
    priority,
    alternates: { languages: langs },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {

  // ── Core pages ──────────────────────────────────────────────────────────────
  const corePages = [
    ...entry('/', '/fr', '/en', '/it', 1.0),
    ...entry('/solaranlage-kosten', '/fr/cout-installation-solaire', '/en/solar-panel-costs', '/it/costi-impianto-solare', 0.9),
    ...entry('/solaranlage-mit-speicher', '/fr/solaire-avec-batterie', '/en/solar-with-battery', '/it/solare-con-accumulo', 0.9),
    ...entry('/solarrechner', '/fr/calculateur-solaire', '/en/solar-calculator', '/it/calcolatore-solare', 0.85),
    ...entry('/solaranlage-einfamilienhaus', '/fr/solaire-maison-individuelle', '/en/solar-detached-house', '/it/solare-casa-unifamiliare', 0.85),
    ...entry('/solaranlage-mehrfamilienhaus', '/fr/solaire-immeuble', '/en/solar-apartment-building', '/it/solare-condominio', 0.85),
    ...entry('/photovoltaik-kosten-pro-m2', '/fr/cout-pv-par-m2', '/en/solar-cost-per-m2', '/it/costo-fv-per-m2', 0.85),
    ...entry('/wie-funktioniert', '/fr/fonctionnement-solaire', '/en/how-solar-works', '/it/come-funziona-solare', 0.85),
    ...entry('/ueber-uns', '/fr/a-propos', '/en/about-us', '/it/chi-siamo', 0.7),
    ...entry('/anfrage', '/fr/demande', '/en/request', '/it/richiesta', 0.8),
    ...entry('/danke', '/fr/merci', '/en/thank-you', '/it/grazie', 0.2, 'monthly'),
  ];

  // ── Blog listing ─────────────────────────────────────────────────────────────
  const blogListPages = [
    ...entry('/blog', '/fr/blog', '/en/blog', '/it/blog', 0.8),
  ];

  // ── Blog posts (7 slugs × 4 locales) ─────────────────────────────────────────
  const blogPostPages = getBlogArticleSlugs().flatMap((slug) =>
    entry(
      `/blog/${slug}`,
      `/fr/blog/${slug}`,
      `/en/blog/${slug}`,
      `/it/blog/${slug}`,
      0.75,
    ),
  );

  // ── Förderungen / Subventions pages ──────────────────────────────────────────
  const foerderungPages = [
    ...entry(
      '/foerderungen-photovoltaik',
      '/fr/subventions-solaires',
      '/en/solar-subsidies',
      '/it/incentivi-solari',
      0.85,
    ),
  ];

  // ── Landing pages (DE only – no translations) ─────────────────────────────
  const deOnlyPages = [
    { url: `${BASE}/lokale-installateure`, lastModified: NOW, changeFrequency: 'weekly' as Freq, priority: 0.9 },
    { url: `${BASE}/stromkosten-senken`, lastModified: NOW, changeFrequency: 'weekly' as Freq, priority: 0.9 },
  ];

  // ── Canton pages ─────────────────────────────────────────────────────────────
  const deCities   = cities.filter(c => c.language === 'de');
  const frCities   = cities.filter(c => c.language === 'fr');
  const itCities   = cities.filter(c => c.language === 'it');

  const deCityPages = deCities.map(city => ({
    url: `${BASE}/solaranlage-${city.slug}`,
    lastModified: NOW,
    changeFrequency: 'weekly' as Freq,
    priority: 0.85,
  }));

  const frCityPages = frCities.map(city => ({
    url: `${BASE}/fr/solaire-${city.slug}`,
    lastModified: NOW,
    changeFrequency: 'weekly' as Freq,
    priority: 0.85,
  }));

  const itCityPages = itCities.map(city => ({
    url: `${BASE}/it/fotovoltaico-${city.slug}`,
    lastModified: NOW,
    changeFrequency: 'weekly' as Freq,
    priority: 0.90,
  }));

  // ── Legal pages ────────────────────────────────────────────────────────────
  const legalPages = [
    { url: `${BASE}/datenschutz`, lastModified: NOW, changeFrequency: 'yearly' as Freq, priority: 0.2 },
    { url: `${BASE}/impressum`, lastModified: NOW, changeFrequency: 'yearly' as Freq, priority: 0.2 },
    { url: `${BASE}/it/protezione-dati`, lastModified: NOW, changeFrequency: 'yearly' as Freq, priority: 0.2 },
    { url: `${BASE}/it/note-legali`, lastModified: NOW, changeFrequency: 'yearly' as Freq, priority: 0.2 },
  ];

  return [
    ...corePages,
    ...blogListPages,
    ...blogPostPages,
    ...foerderungPages,
    ...deOnlyPages,
    ...deCityPages,
    ...frCityPages,
    ...itCityPages,
    ...legalPages,
  ];
}
