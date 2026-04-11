import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getBlogArticle, getBlogArticleSlugs } from '@/lib/blogArticles';
import BlogArticlePage from '@/components/BlogArticlePage';

interface Props {
  params: { slug: string };
}

const itSlugToDeSlug: Record<string, string> = {
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
  const deSlugs = getBlogArticleSlugs().map(slug => ({ slug }));
  const itSlugs = Object.keys(itSlugToDeSlug).map(slug => ({ slug }));
  return [...deSlugs, ...itSlugs];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const deSlug = resolveSlug(params.slug);
  const article = getBlogArticle(deSlug, 'it');
  if (!article) return {};
  return {
    title: `${article.title} | PVPro.ch`,
    description: article.metaDescription,
    alternates: {
      canonical: `https://www.pvpro.ch/it/blog/${params.slug}`,
      languages: {
        'de-CH': `https://www.pvpro.ch/blog/${deSlug}`,
        'fr-CH': `https://www.pvpro.ch/fr/blog/${deSlug}`,
        'en-CH': `https://www.pvpro.ch/en/blog/${deSlug}`,
        'it-CH': `https://www.pvpro.ch/it/blog/${params.slug}`,
        'x-default': `https://www.pvpro.ch/blog/${deSlug}`,
      },
    },
  };
}

export default function BlogPostItPage({ params }: Props) {
  const deSlug = resolveSlug(params.slug);
  const article = getBlogArticle(deSlug, 'it');
  if (!article) notFound();
  return <BlogArticlePage article={article} blogBase="/it/blog" homeHref="/it" />;
}
