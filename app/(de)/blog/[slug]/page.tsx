import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { pageMetadata } from '@/lib/pageMetadata';
import { getBlogArticle, getBlogArticleSlugs } from '@/lib/blogArticles';
import { getAutoArticleLocaleSlugs } from '@/lib/autoBlog';
import { getAutoBlogSlugRecord, autoBlogPath, autoBlogByLegacySlug } from '@/lib/autoBlogSlugs';
import BlogArticlePage from '@/components/BlogArticlePage';
import { articleAlternates } from '@/lib/articleSeoRoutes';
import { articleMetaDescription, articleSeoTitle } from '@/lib/blogUtils';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [...getBlogArticleSlugs().filter(slug => !autoBlogByLegacySlug[slug]), ...getAutoArticleLocaleSlugs('de')].map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const auto = getAutoBlogSlugRecord(slug, 'de');
  const article = getBlogArticle(auto?.legacySlug ?? slug, 'de');
  if (!article) return {};
  return pageMetadata({
    title: articleSeoTitle(article),
    description: articleMetaDescription(article.metaDescription, article.locale, article.slug),
    authors: [{ name: 'Elia Alacam' }],
    alternates: articleAlternates(slug, 'de'),
  }, { path: auto ? autoBlogPath(auto, 'de') : `/blog/${slug}`, locale: 'de', type: 'article' });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = getBlogArticle(getAutoBlogSlugRecord(slug, 'de')?.legacySlug ?? slug, 'de');
  if (!article) notFound();
  return <BlogArticlePage article={article} blogBase="/blog" homeHref="/" canonicalPath={getAutoBlogSlugRecord(slug, 'de') ? autoBlogPath(getAutoBlogSlugRecord(slug, 'de')!, 'de') : `/blog/${slug}`} />;
}
