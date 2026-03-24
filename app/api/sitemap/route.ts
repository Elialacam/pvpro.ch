import { cities } from '@/lib/cities';
import { getBlogArticleSlugs } from '@/lib/blogArticles';

const BASE = 'https://www.pvpro.ch';
const TODAY = new Date().toISOString().split('T')[0];

// ── Helpers ────────────────────────────────────────────────────────────────────

function xlink(hreflang: string, href: string): string {
  return `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}"/>`;
}

function urlBlock(
  loc: string,
  freq: string,
  priority: string,
  altLines: string[],
): string {
  return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${priority}</priority>
${altLines.join('\n')}
  </url>`;
}

// Full 4-language group — 4 <url> blocks, each with de/fr/en/it + x-default
function entry4(
  de: string,
  fr: string,
  en: string,
  it: string,
  priority: number,
  freq = 'monthly',
): string {
  const p = String(priority);
  const alts = [
    xlink('de',        `${BASE}${de}`),
    xlink('fr',        `${BASE}${fr}`),
    xlink('en',        `${BASE}${en}`),
    xlink('it',        `${BASE}${it}`),
    xlink('x-default', `${BASE}${de}`),
  ];
  return [de, fr, en, it]
    .map((path) => urlBlock(`${BASE}${path}`, freq, p, alts))
    .join('');
}

// DE-only page
function entryDe(path: string, priority: number, freq = 'monthly'): string {
  return urlBlock(`${BASE}${path}`, freq, String(priority), [
    xlink('de',        `${BASE}${path}`),
    xlink('x-default', `${BASE}${path}`),
  ]);
}

// FR-only page
function entryFr(path: string, priority: number, freq = 'monthly'): string {
  return urlBlock(`${BASE}${path}`, freq, String(priority), [
    xlink('fr',        `${BASE}${path}`),
    xlink('x-default', `${BASE}${path}`),
  ]);
}

// IT-only page
function entryIt(path: string, priority: number, freq = 'monthly'): string {
  return urlBlock(`${BASE}${path}`, freq, String(priority), [
    xlink('it',        `${BASE}${path}`),
    xlink('x-default', `${BASE}${path}`),
  ]);
}

// Bilingual DE+FR — 2 <url> blocks with de/fr/x-default
function entryDeFr(
  de: string,
  fr: string,
  priority: number,
  freq = 'monthly',
): string {
  const p = String(priority);
  const alts = [
    xlink('de',        `${BASE}${de}`),
    xlink('fr',        `${BASE}${fr}`),
    xlink('x-default', `${BASE}${de}`),
  ];
  return urlBlock(`${BASE}${de}`, freq, p, alts)
       + urlBlock(`${BASE}${fr}`, freq, p, alts);
}

// ── Route handler ──────────────────────────────────────────────────────────────

export async function GET() {
  const bilingualDeSlugs = new Set(['freiburg', 'biel', 'wallis']);
  const deCities = cities.filter(
    (c) => c.language === 'de' && !bilingualDeSlugs.has(c.slug),
  );
  const blogSlugs = getBlogArticleSlugs();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <!-- ── Homepages ──────────────────────────────────────────────────────────── -->
${entry4('/', '/fr', '/en', '/it', 1.0, 'weekly')}

  <!-- ── Core content pages ────────────────────────────────────────────────── -->
${entry4('/solaranlage-kosten', '/fr/cout-installation-solaire', '/en/solar-panel-costs', '/it/costi-impianto-solare', 0.9)}
${entry4('/solaranlage-mit-speicher', '/fr/solaire-avec-batterie', '/en/solar-with-battery', '/it/solare-con-accumulo', 0.9)}
${entry4('/solarrechner', '/fr/calculateur-solaire', '/en/solar-calculator', '/it/calcolatore-solare', 0.85)}
${entry4('/solaranlage-einfamilienhaus', '/fr/solaire-maison-individuelle', '/en/solar-detached-house', '/it/solare-casa-unifamiliare', 0.85)}
${entry4('/solaranlage-mehrfamilienhaus', '/fr/solaire-immeuble', '/en/solar-apartment-building', '/it/solare-condominio', 0.85)}
${entry4('/photovoltaik-kosten-pro-m2', '/fr/cout-pv-par-m2', '/en/solar-cost-per-m2', '/it/costo-fv-per-m2', 0.85)}
${entry4('/wie-funktioniert', '/fr/fonctionnement-solaire', '/en/how-solar-works', '/it/come-funziona-solare', 0.85)}
${entry4('/foerderungen', '/fr/subventions-solaires', '/en/solar-subsidies', '/it/incentivi-solari', 0.85)}
${entry4('/vergleichsportal-photovoltaik-schweiz', '/fr/comparateur-photovoltaique-suisse', '/en/solar-comparison-portal-switzerland', '/it/comparatore-fotovoltaico-svizzera', 0.85)}
${entry4('/solaranlage-installieren-schweiz', '/fr/installer-panneau-solaire-suisse', '/en/solar-panel-installation-switzerland', '/it/installare-impianto-solare-svizzera', 0.85)}
${entry4('/solaranlage-offerte-einholen', '/fr/demander-offre-panneau-solaire', '/en/get-solar-panel-quotes', '/it/richiedere-preventivo-solare', 0.85)}
${entry4('/foerderungen-kanton-zuerich', '/fr/subventions-solaires-canton-zurich', '/en/solar-subsidies-canton-zurich', '/it/incentivi-solari-cantone-zurigo', 0.85)}
${entry4('/faq', '/fr/faq', '/en/faq', '/it/faq', 0.75)}
${entry4('/ueber-uns', '/fr/a-propos', '/en/about-us', '/it/chi-siamo', 0.7)}
${entry4('/anfrage', '/fr/demande', '/en/request', '/it/richiesta', 0.8)}
${entry4('/danke', '/fr/merci', '/en/thank-you', '/it/grazie', 0.2, 'yearly')}

  <!-- ── Blog ──────────────────────────────────────────────────────────────── -->
${entry4('/blog', '/fr/blog', '/en/blog', '/it/blog', 0.7, 'weekly')}
${blogSlugs.map((slug) => entry4(`/blog/${slug}`, `/fr/blog/${slug}`, `/en/blog/${slug}`, `/it/blog/${slug}`, 0.6)).join('')}

  <!-- ── Balcony power station (4 languages) ───────────────────────────────── -->
${entry4('/balkonkraftwerk', '/fr/centrale-balcon', '/en/balcony-power-station', '/it/centrale-balcone', 0.7)}

  <!-- ── DE-only pages ─────────────────────────────────────────────────────── -->
${entryDe('/bewilligungspflicht-solaranlage-schweiz', 0.8)}

  <!-- ── DE canton pages ───────────────────────────────────────────────────── -->
${deCities.map((city) => entryDe(`/solaranlage-${city.slug}`, 0.8, 'weekly')).join('')}

  <!-- ── FR-only canton pages ──────────────────────────────────────────────── -->
${entryFr('/fr/solaire-geneve', 0.8, 'weekly')}
${entryFr('/fr/solaire-vaud',   0.8, 'weekly')}

  <!-- ── IT canton page ────────────────────────────────────────────────────── -->
${entryIt('/it/fotovoltaico-ticino', 0.9, 'weekly')}

  <!-- ── Bilingual canton pages (DE ↔ FR) ──────────────────────────────────── -->
${entryDeFr('/solaranlage-freiburg', '/fr/solaire-fribourg', 0.8, 'weekly')}
${entryDeFr('/solaranlage-biel',     '/fr/solaire-bienne',   0.8, 'weekly')}
${entryDeFr('/solaranlage-wallis',   '/fr/solaire-valais',   0.8, 'weekly')}

  <!-- ── Legal pages ───────────────────────────────────────────────────────── -->
${entry4('/datenschutz', '/fr/protection-des-donnees', '/en/privacy', '/it/protezione-dati', 0.3, 'yearly')}
${entry4('/impressum', '/fr/mentions-legales', '/en/imprint', '/it/note-legali', 0.3, 'yearly')}

</urlset>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
