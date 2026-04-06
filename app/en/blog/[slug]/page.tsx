import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getBlogArticle, getBlogArticleSlugs } from '@/lib/blogArticles';
import BlogArticlePage from '@/components/BlogArticlePage';

interface Props {
  params: { slug: string };
}

const enSlugToDeSlug: Record<string, string> = {
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
  const deSlugs = getBlogArticleSlugs().map(slug => ({ slug }));
  const enSlugs = Object.keys(enSlugToDeSlug).map(slug => ({ slug }));
  return [...deSlugs, ...enSlugs];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const deSlug = resolveSlug(params.slug);
  const article = getBlogArticle(deSlug, 'en');
  if (!article) return {};
  return {
    title: `${article.title} | PVPro.ch`,
    description: article.metaDescription,
    alternates: {
      canonical: `https://www.pvpro.ch/en/blog/${params.slug}`,
      languages: {
        'de-CH': `https://www.pvpro.ch/blog/${deSlug}`,
        'fr-CH': `https://www.pvpro.ch/fr/blog/${deSlug}`,
        'en-CH': `https://www.pvpro.ch/en/blog/${params.slug}`,
        'it-CH': `https://www.pvpro.ch/it/blog/${deSlug}`,
        'x-default': `https://www.pvpro.ch/blog/${deSlug}`,
      },
    },
  };
}

export default function BlogPostEnPage({ params }: Props) {
  const deSlug = resolveSlug(params.slug);
  const article = getBlogArticle(deSlug, 'en');
  if (!article) notFound();
  return <BlogArticlePage article={article} blogBase="/en/blog" homeHref="/en" />;
}
