import { MetadataRoute } from 'next';
import { cities } from '@/lib/cities';
import { getBlogArticleSlugs } from '@/lib/blogArticles';

const BASE = 'https://www.pvpro.ch';
const NOW = new Date();

type Freq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

// Full 4-language entry — generates one sitemap entry per locale, all cross-linked via hreflang
function entry(
  dePath: string,
  frPath: string,
  enPath: string,
  itPath: string,
  priority: number,
  freq: Freq = 'monthly',
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

// DE-only entry — self-referencing hreflang
function entryDe(path: string, priority: number, freq: Freq = 'monthly') {
  return [{
    url: `${BASE}${path}`,
    lastModified: NOW,
    changeFrequency: freq,
    priority,
    alternates: {
      languages: {
        'de-CH': `${BASE}${path}`,
        'x-default': `${BASE}${path}`,
      },
    },
  }];
}

// FR-only entry — self-referencing hreflang
function entryFr(path: string, priority: number, freq: Freq = 'monthly') {
  return [{
    url: `${BASE}${path}`,
    lastModified: NOW,
    changeFrequency: freq,
    priority,
    alternates: {
      languages: {
        'fr-CH': `${BASE}${path}`,
        'x-default': `${BASE}${path}`,
      },
    },
  }];
}

// IT-only entry — self-referencing hreflang
function entryIt(path: string, priority: number, freq: Freq = 'monthly') {
  return [{
    url: `${BASE}${path}`,
    lastModified: NOW,
    changeFrequency: freq,
    priority,
    alternates: {
      languages: {
        'it-CH': `${BASE}${path}`,
        'x-default': `${BASE}${path}`,
      },
    },
  }];
}

export default function sitemap(): MetadataRoute.Sitemap {

  // ── Homepages (all 4 locales) ─────────────────────────────────────────────────
  const homepages = [
    ...entry('/', '/fr', '/en', '/it', 1.0, 'weekly'),
  ];

  // ── Core content pages (4 languages each) ────────────────────────────────────
  const corePages = [
    // Solar costs
    ...entry(
      '/solaranlage-kosten',
      '/fr/cout-installation-solaire',
      '/en/solar-panel-costs',
      '/it/costi-impianto-solare',
      0.9,
    ),
    // Battery storage
    ...entry(
      '/solaranlage-mit-speicher',
      '/fr/solaire-avec-batterie',
      '/en/solar-with-battery',
      '/it/solare-con-accumulo',
      0.9,
    ),
    // Solar calculator
    ...entry(
      '/solarrechner',
      '/fr/calculateur-solaire',
      '/en/solar-calculator',
      '/it/calcolatore-solare',
      0.85,
    ),
    // Detached house
    ...entry(
      '/solaranlage-einfamilienhaus',
      '/fr/solaire-maison-individuelle',
      '/en/solar-detached-house',
      '/it/solare-casa-unifamiliare',
      0.85,
    ),
    // Apartment building
    ...entry(
      '/solaranlage-mehrfamilienhaus',
      '/fr/solaire-immeuble',
      '/en/solar-apartment-building',
      '/it/solare-condominio',
      0.85,
    ),
    // PV cost per m²
    ...entry(
      '/photovoltaik-kosten-pro-m2',
      '/fr/cout-pv-par-m2',
      '/en/solar-cost-per-m2',
      '/it/costo-fv-per-m2',
      0.85,
    ),
    // How solar works
    ...entry(
      '/wie-funktioniert',
      '/fr/fonctionnement-solaire',
      '/en/how-solar-works',
      '/it/come-funziona-solare',
      0.85,
    ),
    // Subsidies / Förderungen
    ...entry(
      '/foerderungen',
      '/fr/subventions-solaires',
      '/en/solar-subsidies',
      '/it/incentivi-solari',
      0.85,
    ),
    // FAQ
    ...entry(
      '/faq',
      '/fr/faq',
      '/en/faq',
      '/it/faq',
      0.75,
    ),
    // About us
    ...entry(
      '/ueber-uns',
      '/fr/a-propos',
      '/en/about-us',
      '/it/chi-siamo',
      0.7,
    ),
    // Contact / Quote form
    ...entry(
      '/anfrage',
      '/fr/demande',
      '/en/request',
      '/it/richiesta',
      0.8,
    ),
    // Thank-you pages (low priority, no crawl value)
    ...entry(
      '/danke',
      '/fr/merci',
      '/en/thank-you',
      '/it/grazie',
      0.2,
      'yearly',
    ),
  ];

  // ── Blog ─────────────────────────────────────────────────────────────────────
  const blogPages = [
    // Blog listing pages
    ...entry('/blog', '/fr/blog', '/en/blog', '/it/blog', 0.7, 'weekly'),
    // Individual blog posts (7 slugs × 4 locales)
    ...getBlogArticleSlugs().flatMap((slug) =>
      entry(
        `/blog/${slug}`,
        `/fr/blog/${slug}`,
        `/en/blog/${slug}`,
        `/it/blog/${slug}`,
        0.6,
        'monthly',
      ),
    ),
  ];

  // ── DE-only content pages ─────────────────────────────────────────────────────
  const deOnlyPages = [
    // Permit requirements
    ...entryDe('/bewilligungspflicht-solaranlage-schweiz', 0.8),
    // Balcony power station
    ...entryDe('/balkonkraftwerk', 0.7),
  ];

  // ── Canton pages — German-speaking cantons ────────────────────────────────────
  // Each DE canton page is DE-only: self-referencing hreflang de-CH + x-default
  const deCities = cities.filter(c => c.language === 'de');
  const deCityPages = deCities.flatMap(city =>
    entryDe(`/solaranlage-${city.slug}`, 0.8, 'weekly'),
  );
  // DE cantons covered: Zürich, Basel, Bern, Thurgau, Luzern, St. Gallen,
  //   Schwyz, Uri, Schaffhausen, Appenzell, Graubünden, Glarus, Zug,
  //   Unterwalden, Solothurn, Aargau

  // ── Canton pages — French-speaking cantons ────────────────────────────────────
  // FR canton pages: self-referencing hreflang fr-CH + x-default
  const frCityPages = [
    ...entryFr('/fr/solaire-geneve', 0.8, 'weekly'),
    ...entryFr('/fr/solaire-vaud',   0.8, 'weekly'),
    ...entryFr('/fr/solaire-valais', 0.8, 'weekly'),
  ];

  // ── Canton pages — Italian-speaking canton ────────────────────────────────────
  // IT canton pages: self-referencing hreflang it-CH + x-default
  const itCityPages = [
    ...entryIt('/it/fotovoltaico-ticino', 0.9, 'weekly'),
  ];

  // ── Legal pages (4 languages, cross-linked) ───────────────────────────────────
  const legalPages = [
    // Privacy policy
    ...entry(
      '/datenschutz',
      '/fr/protection-des-donnees',
      '/en/privacy',
      '/it/protezione-dati',
      0.3,
      'yearly',
    ),
    // Legal notice / Impressum
    ...entry(
      '/impressum',
      '/fr/mentions-legales',
      '/en/imprint',
      '/it/note-legali',
      0.3,
      'yearly',
    ),
  ];

  return [
    ...homepages,
    ...corePages,
    ...blogPages,
    ...deOnlyPages,
    ...deCityPages,
    ...frCityPages,
    ...itCityPages,
    ...legalPages,
  ];
}
