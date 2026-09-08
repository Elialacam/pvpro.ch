import { BLOG_ORIGIN, articleDates, authorDetails, sanitizeFaqs, type BlogLocale } from '@/lib/blogUtils';
import type { BlogArticle } from '@/lib/blogArticles';

type StructuredArticle = Pick<BlogArticle, 'title' | 'date' | 'locale' | 'image' | 'publishedAt' | 'modifiedAt'> & { faqs?: { question: string; answer: string }[] };

export default function ArticleStructuredData({ article, canonicalPath, faqs = article.faqs ?? [] }: { article: StructuredArticle; canonicalPath: string; faqs?: { question: string; answer: string }[] }) {
  const dates = articleDates(article);
  const author = authorDetails(article.locale as BlogLocale);
  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'Article', headline: article.title,
    datePublished: dates.publishedAt, dateModified: dates.modifiedAt,
    author: { '@type': 'Person', name: 'Elia Alacam', url: `${BLOG_ORIGIN}${author.href}` },
    publisher: { '@type': 'Organization', name: 'PvPro.ch', logo: { '@type': 'ImageObject', url: `${BLOG_ORIGIN}/logo-pvpro.png` } },
    image: `${BLOG_ORIGIN}${article.image}`, inLanguage: `${article.locale}-CH`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BLOG_ORIGIN}${canonicalPath}` },
  };
  const validFaqs = sanitizeFaqs(faqs);
  const faqSchema = validFaqs.length ? { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: validFaqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) } : null;
  return <>{[articleSchema, faqSchema].filter(Boolean).map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}</>;
}