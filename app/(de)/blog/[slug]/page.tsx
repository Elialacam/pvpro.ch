import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getBlogArticle, getBlogArticleSlugs } from '@/lib/blogArticles';
import BlogArticlePage from '@/components/BlogArticlePage';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getBlogArticleSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug, 'de');
  if (!article) return {};
  return {
    title: `${article.title} | PVPro.ch`,
    description: article.metaDescription,
    alternates: {
      canonical: `https://www.pvpro.ch/blog/${slug}`,
      languages: {
        'de-CH': `https://www.pvpro.ch/blog/${slug}`,
        'fr-CH': `https://www.pvpro.ch/fr/blog/${slug}`,
        'en-CH': `https://www.pvpro.ch/en/blog/${slug}`,
        'it-CH': `https://www.pvpro.ch/it/blog/${slug}`,
        'x-default': `https://www.pvpro.ch/blog/${slug}`,
      },
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = getBlogArticle(slug, 'de');
  if (!article) notFound();
  return <BlogArticlePage article={article} blogBase="/blog" homeHref="/" />;
}
