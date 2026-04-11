import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/blogPosts';
import { blogPostsI18n } from '@/lib/blogPostsI18n';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const labels: Record<string, { eyebrow: string; title: string; viewAll: string; viewAllMobile: string; blogHref: string; min: string }> = {
  de: {
    eyebrow: 'Blog & News',
    title: 'Neuigkeiten & Ratgeber',
    viewAll: 'Alle Artikel',
    viewAllMobile: 'Alle Artikel ansehen',
    blogHref: '/blog',
    min: 'Min.',
  },
  fr: {
    eyebrow: 'Blog & Actualités',
    title: 'Actualités & Conseils',
    viewAll: 'Tous les articles',
    viewAllMobile: 'Voir tous les articles',
    blogHref: '/fr/blog',
    min: 'min.',
  },
  en: {
    eyebrow: 'Blog & News',
    title: 'News & Guides',
    viewAll: 'All articles',
    viewAllMobile: 'View all articles',
    blogHref: '/en/blog',
    min: 'min.',
  },
  it: {
    eyebrow: 'Blog & Notizie',
    title: 'Notizie & Consigli',
    viewAll: 'Tutti gli articoli',
    viewAllMobile: 'Vedi tutti gli articoli',
    blogHref: '/it/blog',
    min: 'min.',
  },
};

interface Props {
  locale?: string;
}

export default function BlogSection({ locale = 'de' }: Props) {
  const t = labels[locale] ?? labels.de;

  const allPosts = locale !== 'de' && blogPostsI18n[locale]
    ? blogPostsI18n[locale]
    : blogPosts;

  const featured = allPosts.slice(0, 3);

  function articleHref(post: { slug: string; href?: string }) {
    if (post.href) return post.href;
    return locale === 'de' ? `/blog/${post.slug}` : `/${locale}/blog/${post.slug}`;
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-2">{t.eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              {t.title}
            </h2>
          </div>
          <Link
            href={t.blogHref}
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors group"
          >
            {t.viewAll}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((post) => (
            <Link
              key={post.slug}
              href={articleHref(post)}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700 px-2.5 py-1 rounded-full">
                  {post.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 text-base leading-snug mb-3 group-hover:text-[#F97316] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 mt-5 pt-4 border-t border-gray-100 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readMin} {t.min}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 text-center sm:hidden">
          <Link
            href={t.blogHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#F97316]"
          >
            {t.viewAllMobile} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
