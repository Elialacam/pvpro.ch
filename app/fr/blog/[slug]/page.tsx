import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getBlogArticle, getBlogArticleSlugs } from '@/lib/blogArticles';
import BlogArticlePage from '@/components/BlogArticlePage';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getBlogArticleSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getBlogArticle(params.slug, 'fr');
  if (!article) return {};
  return {
    title: `${article.title} | PVPro.ch`,
    description: article.metaDescription,
    alternates: {
      canonical: `https://www.pvpro.ch/fr/blog/${params.slug}`,
      languages: {
        'de-CH': `https://www.pvpro.ch/blog/${params.slug}`,
        'fr-CH': `https://www.pvpro.ch/fr/blog/${params.slug}`,
        'en-CH': `https://www.pvpro.ch/en/blog/${params.slug}`,
        'it-CH': `https://www.pvpro.ch/it/blog/${params.slug}`,
        'x-default': `https://www.pvpro.ch/blog/${params.slug}`,
      },
    },
  };
}

export default function BlogPostFrPage({ params }: Props) {
  const article = getBlogArticle(params.slug, 'fr');
  if (!article) notFound();
  return <BlogArticlePage article={article} blogBase="/fr/blog" homeHref="/fr" />;
}
