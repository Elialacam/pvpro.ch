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

const frSlugToDeSlug: Record<string, string> = {
  'panneau-solaire-toit-nord-suisse':                  'solaranlage-norddach-schweiz',
  'panneaux-solaires-chinois-vs-europeens-suisse':     'chinesische-vs-europaeische-solarmodule-schweiz',
  'assurance-installation-solaire-suisse':             'solaranlage-versicherung-schweiz',
  'installateur-solaire-faillite-garantie-suisse':     'solaranlage-installateur-konkurs-garantie-schweiz',
  'batterie-solaire-danger-incendie-securite-suisse': 'batteriespeicher-brandgefahr-sicherheit-schweiz',
  'trouver-meilleur-installateur-solaire-suisse':  'besten-solarinstallateur-schweiz-finden',
  'panneaux-solaires-pompe-chaleur-suisse':        'solaranlage-waermepumpe-kombinieren-schweiz',
  'deduction-fiscale-panneau-solaire-suisse-2026': 'solaranlage-steuerabzug-schweiz-2026',
  'rentabilite-panneau-solaire-suisse-2026':       'lohnt-sich-solaranlage-schweiz-2026',
  'centrale-balcon-suisse':            'balkonkraftwerk-schweiz',
  'panneaux-solaires-hiver-suisse':    'solaranlage-winter-schweiz',
  'subventions-photovoltaiques-2026':  'foerderungen-photovoltaik-2026',
  'batterie-stockage-solaire-suisse':  'batteriespeicher-solaranlage-lohnt-sich',
  'choisir-installateur-solaire-suisse': 'richtigen-solarinstallateur-schweiz-waehlen',
  'maximiser-autoconsommation-solaire': 'eigenverbrauch-optimieren-solar',
  'retour-investissement-solaire-suisse': 'roi-photovoltaik-schweiz',
};

function resolveSlug(slug: string): string {
  return frSlugToDeSlug[slug] ?? slug;
}

export async function generateStaticParams() {
  const deSlugs = getBlogArticleSlugs().filter(slug => !autoBlogByLegacySlug[slug]).map(slug => ({ slug }));
  const autoSlugs = getAutoArticleLocaleSlugs('fr').map(slug => ({ slug }));
  const frSlugs = Object.keys(frSlugToDeSlug).map(slug => ({ slug }));
  return [...deSlugs, ...autoSlugs, ...frSlugs];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const auto = getAutoBlogSlugRecord(slug, 'fr');
  const deSlug = auto?.legacySlug ?? resolveSlug(slug);
  const article = getBlogArticle(deSlug, 'fr');
  if (!article) return pageMetadata({}, { path: `/fr/blog/${slug}`, locale: 'fr', type: 'article' });
  return pageMetadata({
    title: `${article.title} | PVPro.ch`,
    description: article.metaDescription,
    authors: [{ name: 'Elia Alacam' }],
    alternates: articleAlternates(slug, 'fr'),
  }, { path: auto ? autoBlogPath(auto, 'fr') : `/fr/blog/${slug}`, locale: 'fr', type: 'article' });
}

export default async function BlogPostFrPage({ params }: Props) {
  const { slug } = await params;
  const deSlug = getAutoBlogSlugRecord(slug, 'fr')?.legacySlug ?? resolveSlug(slug);
  const article = getBlogArticle(deSlug, 'fr');
  if (!article) notFound();
  return <BlogArticlePage article={article} blogBase="/fr/blog" homeHref="/fr" canonicalPath={getAutoBlogSlugRecord(slug, 'fr') ? autoBlogPath(getAutoBlogSlugRecord(slug, 'fr')!, 'fr') : `/fr/blog/${slug}`} />;
}
