import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getBlogArticle, getBlogArticleSlugs } from '@/lib/blogArticles';
import BlogArticlePage from '@/components/BlogArticlePage';

interface Props {
  params: { slug: string };
}

const frSlugToDeSlug: Record<string, string> = {
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
  const deSlugs = getBlogArticleSlugs().map(slug => ({ slug }));
  const frSlugs = Object.keys(frSlugToDeSlug).map(slug => ({ slug }));
  return [...deSlugs, ...frSlugs];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const deSlug = resolveSlug(params.slug);
  const article = getBlogArticle(deSlug, 'fr');
  if (!article) return {};
  return {
    title: `${article.title} | PVPro.ch`,
    description: article.metaDescription,
    alternates: {
      canonical: `https://www.pvpro.ch/fr/blog/${params.slug}`,
      languages: {
        'de-CH': `https://www.pvpro.ch/blog/${deSlug}`,
        'fr-CH': `https://www.pvpro.ch/fr/blog/${params.slug}`,
        'en-CH': `https://www.pvpro.ch/en/blog/${deSlug}`,
        'it-CH': `https://www.pvpro.ch/it/blog/${deSlug}`,
        'x-default': `https://www.pvpro.ch/blog/${deSlug}`,
      },
    },
  };
}

export default function BlogPostFrPage({ params }: Props) {
  const deSlug = resolveSlug(params.slug);
  const article = getBlogArticle(deSlug, 'fr');
  if (!article) notFound();
  return <BlogArticlePage article={article} blogBase="/fr/blog" homeHref="/fr" />;
}
