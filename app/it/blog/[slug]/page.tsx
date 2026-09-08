import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getBlogArticle, getBlogArticleSlugs } from '@/lib/blogArticles';
import BlogArticlePage from '@/components/BlogArticlePage';
import { pageMetadata } from '@/lib/pageMetadata';
import { getAutoArticleLocaleSlugs } from '@/lib/autoBlog';
import { autoBlogPath, autoBlogByLegacySlug, getAutoBlogSlugRecord } from '@/lib/autoBlogSlugs';
import { articleAlternates } from '@/lib/articleSeoRoutes';

interface Props {
  params: Promise<{ slug: string }>;
}

const itSlugToDeSlug: Record<string, string> = {
  'impianto-solare-tetto-nord-svizzera':                 'solaranlage-norddach-schweiz',
  'pannelli-solari-cinesi-vs-europei-svizzera':          'chinesische-vs-europaeische-solarmodule-schweiz',
  'assicurazione-impianto-solare-svizzera':              'solaranlage-versicherung-schweiz',
  'installatore-solare-fallimento-garanzia-svizzera':    'solaranlage-installateur-konkurs-garantie-schweiz',
  'batteria-solare-rischio-incendio-sicurezza-svizzera': 'batteriespeicher-brandgefahr-sicherheit-schweiz',
  'trovare-miglior-installatore-solare-svizzera':     'besten-solarinstallateur-schweiz-finden',
  'impianto-solare-pompa-calore-svizzera':            'solaranlage-waermepumpe-kombinieren-schweiz',
  'detrazione-fiscale-impianto-solare-svizzera-2026': 'solaranlage-steuerabzug-schweiz-2026',
  'vale-la-pena-impianto-solare-svizzera-2026':       'lohnt-sich-solaranlage-schweiz-2026',
  'centrale-balcone-svizzera':         'balkonkraftwerk-schweiz',
  'pannelli-solari-inverno-svizzera':  'solaranlage-winter-schweiz',
  'incentivi-fotovoltaici-svizzera-2026': 'foerderungen-photovoltaik-2026',
  'accumulo-batteria-impianto-solare': 'batteriespeicher-solaranlage-lohnt-sich',
  'scegliere-installatore-solare-svizzera': 'richtigen-solarinstallateur-schweiz-waehlen',
  'massimizzare-autoconsumo-solare':   'eigenverbrauch-optimieren-solar',
  'roi-impianto-solare-svizzera':      'roi-photovoltaik-schweiz',
};

function resolveSlug(slug: string): string {
  return itSlugToDeSlug[slug] ?? slug;
}

export async function generateStaticParams() {
  const deSlugs = getBlogArticleSlugs().filter(slug => !autoBlogByLegacySlug[slug]).map(slug => ({ slug }));
  const autoSlugs = getAutoArticleLocaleSlugs('it').map(slug => ({ slug }));
  const itSlugs = Object.keys(itSlugToDeSlug).map(slug => ({ slug }));
  return [...deSlugs, ...autoSlugs, ...itSlugs];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const auto = getAutoBlogSlugRecord(slug, 'it');
  const deSlug = auto?.legacySlug ?? resolveSlug(slug);
  const article = getBlogArticle(deSlug, 'it');
  if (!article) return {};
  return pageMetadata({
    title: `${article.title} | PVPro.ch`,
    description: article.metaDescription,
    authors: [{ name: 'Elia Alacam' }],
    alternates: articleAlternates(slug, 'it'),
  }, { path: auto ? autoBlogPath(auto, 'it') : `/it/blog/${slug}`, locale: 'it', type: 'article' });
}

export default async function BlogPostItPage({ params }: Props) {
  const { slug } = await params;
  const deSlug = getAutoBlogSlugRecord(slug, 'it')?.legacySlug ?? resolveSlug(slug);
  const article = getBlogArticle(deSlug, 'it');
  if (!article) notFound();
  return <BlogArticlePage article={article} blogBase="/it/blog" homeHref="/it" canonicalPath={getAutoBlogSlugRecord(slug, 'it') ? autoBlogPath(getAutoBlogSlugRecord(slug, 'it')!, 'it') : `/it/blog/${slug}`} />;
}
