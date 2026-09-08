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

const enSlugToDeSlug: Record<string, string> = {
  'solar-panels-north-facing-roof-switzerland':       'solaranlage-norddach-schweiz',
  'chinese-vs-european-solar-panels-switzerland':     'chinesische-vs-europaeische-solarmodule-schweiz',
  'solar-panel-insurance-switzerland':                'solaranlage-versicherung-schweiz',
  'solar-installer-bankruptcy-guarantee-switzerland': 'solaranlage-installateur-konkurs-garantie-schweiz',
  'solar-battery-fire-risk-safety-switzerland':     'batteriespeicher-brandgefahr-sicherheit-schweiz',
  'find-best-solar-installer-switzerland':          'besten-solarinstallateur-schweiz-finden',
  'solar-panels-heat-pump-combination-switzerland': 'solaranlage-waermepumpe-kombinieren-schweiz',
  'solar-panel-tax-deduction-switzerland-2026': 'solaranlage-steuerabzug-schweiz-2026',
  'is-solar-worth-it-switzerland-2026':         'lohnt-sich-solaranlage-schweiz-2026',
  'balcony-power-station-switzerland':   'balkonkraftwerk-schweiz',
  'solar-panels-winter-switzerland':     'solaranlage-winter-schweiz',
  'solar-subsidies-switzerland-2026':    'foerderungen-photovoltaik-2026',
  'solar-battery-storage-worth-it':      'batteriespeicher-solaranlage-lohnt-sich',
  'choosing-solar-installer-switzerland': 'richtigen-solarinstallateur-schweiz-waehlen',
  'maximise-solar-self-consumption':     'eigenverbrauch-optimieren-solar',
  'solar-system-roi-switzerland':        'roi-photovoltaik-schweiz',
};

function resolveSlug(slug: string): string {
  return enSlugToDeSlug[slug] ?? slug;
}

export async function generateStaticParams() {
  const deSlugs = getBlogArticleSlugs().filter(slug => !autoBlogByLegacySlug[slug]).map(slug => ({ slug }));
  const autoSlugs = getAutoArticleLocaleSlugs('en').map(slug => ({ slug }));
  const enSlugs = Object.keys(enSlugToDeSlug).map(slug => ({ slug }));
  return [...deSlugs, ...autoSlugs, ...enSlugs];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const auto = getAutoBlogSlugRecord(slug, 'en');
  const deSlug = auto?.legacySlug ?? resolveSlug(slug);
  const article = getBlogArticle(deSlug, 'en');
  if (!article) return {};
  return pageMetadata({
    title: `${article.title} | PVPro.ch`,
    description: article.metaDescription,
    authors: [{ name: 'Elia Alacam' }],
    alternates: articleAlternates(slug, 'en'),
  }, { path: auto ? autoBlogPath(auto, 'en') : `/en/blog/${slug}`, locale: 'en', type: 'article' });
}

export default async function BlogPostEnPage({ params }: Props) {
  const { slug } = await params;
  const deSlug = getAutoBlogSlugRecord(slug, 'en')?.legacySlug ?? resolveSlug(slug);
  const article = getBlogArticle(deSlug, 'en');
  if (!article) notFound();
  return <BlogArticlePage article={article} blogBase="/en/blog" homeHref="/en" canonicalPath={getAutoBlogSlugRecord(slug, 'en') ? autoBlogPath(getAutoBlogSlugRecord(slug, 'en')!, 'en') : `/en/blog/${slug}`} />;
}
