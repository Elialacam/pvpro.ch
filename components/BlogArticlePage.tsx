import Link from 'next/link';
import { ChevronRight, Calendar, Clock, ArrowRight, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { BlogArticle } from '@/lib/blogArticles';
import { blogPosts } from '@/lib/blogPosts';
import { blogPostsI18n } from '@/lib/blogPostsI18n';
import FaqSchema from '@/components/FaqSchema';

interface Props {
  article: BlogArticle;
  blogBase: string;
  homeHref: string;
}

export default function BlogArticlePage({ article, blogBase, homeHref }: Props) {
  const relatedPosts = article.locale === 'de'
    ? blogPosts.filter(p => article.relatedSlugs.includes(p.slug))
    : (blogPostsI18n[article.locale] ?? []).filter(p => article.relatedSlugs.includes(p.slug));

  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative bg-[#0f1f3d] pt-28 pb-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-8">
            <Link href={homeHref} className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href={blogBase} className="hover:text-white/70 transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70 line-clamp-1">{article.title.split(':')[0]}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end pb-0">
            <div className="pb-12">
              <div className="flex items-center gap-3 mb-5">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F97316]/20 text-orange-400 uppercase tracking-widest">
                  {article.tag}
                </span>
                <span className="flex items-center gap-1.5 text-white/40 text-xs">
                  <Calendar className="w-3.5 h-3.5" /> {article.date}
                </span>
                <span className="flex items-center gap-1.5 text-white/40 text-xs">
                  <Clock className="w-3.5 h-3.5" /> {article.readMin} min
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                {article.title}
              </h1>
              <p className="text-white/70 text-lg leading-relaxed">{article.intro}</p>
            </div>
            <div className="relative h-80 lg:h-[440px] rounded-t-2xl overflow-hidden self-end">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f3d]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Main content */}
          <article className="lg:col-span-2 space-y-14">

            {article.sections.map((section, i) => (
              <section key={i}>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">{section.heading}</h2>

                {section.content.map((para, j) => (
                  <p key={j} className="text-gray-600 leading-relaxed mb-4">{para}</p>
                ))}

                {section.stats && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5">
                    {section.stats.map((s) => (
                      <div key={s.label} className="rounded-xl bg-gray-50 border border-gray-100 p-4 text-center">
                        <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">{s.label}</p>
                        <p className="font-bold text-gray-900 text-sm">{s.value}</p>
                      </div>
                    ))}
                  </div>
                )}

                {section.bullets && (
                  <ul className="space-y-2 my-4">
                    {section.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.highlight && (
                  <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5 flex gap-3 mt-4">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-amber-800 font-medium text-sm leading-relaxed">{section.highlight}</p>
                  </div>
                )}
              </section>
            ))}

            {/* CTA section */}
            <section className="rounded-3xl bg-[#0f1f3d] p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #F97316 0%, transparent 55%)' }} />
              <div className="relative">
                <h2 className="text-2xl font-bold text-white mb-3">{article.ctaHeading}</h2>
                <p className="text-white/70 leading-relaxed mb-6">{article.ctaText}</p>
                <Link
                  href={article.formUrl}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
                >
                  {article.ctaButton} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </section>

            {/* FAQ */}
            {article.faqs.length > 0 && (
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">FAQ</h2>
                <div className="space-y-4">
                  {article.faqs.map((faq, i) => (
                    <details key={i} className="group rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm">
                      <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-900 text-sm select-none list-none">
                        {faq.question}
                        <span className="ml-4 text-[#F97316] flex-shrink-0 text-lg group-open:rotate-45 transition-transform duration-200">+</span>
                      </summary>
                      <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-50">
                        <p className="pt-4">{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}

          {article.faqs.length > 0 && <FaqSchema faqs={article.faqs} />}
          </article>

          {/* Sidebar */}
          <aside>
            <div className="lg:sticky lg:top-28 space-y-6">

              {/* CTA box */}
              <div className="rounded-2xl p-6 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                <p className="font-bold text-gray-900 text-base mb-2">{article.ctaHeading}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{article.ctaText}</p>
                <Link
                  href={article.formUrl}
                  className="block w-full py-3 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
                >
                  {article.ctaButton} →
                </Link>
              </div>

              {/* Related articles */}
              {relatedPosts.length > 0 && (
                <div className="rounded-2xl border border-gray-100 p-5 shadow-sm bg-white">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                    {article.locale === 'de' ? 'Weitere Artikel' :
                      article.locale === 'fr' ? 'Articles connexes' :
                        article.locale === 'it' ? 'Altri articoli' : 'Related articles'}
                  </p>
                  <div className="space-y-3">
                    {relatedPosts.map((p) => (
                      <Link
                        key={p.slug}
                        href={`${blogBase}/${p.slug}`}
                        className="block text-sm text-gray-700 hover:text-[#F97316] transition-colors leading-snug border-b border-gray-50 last:border-0 pb-2 last:pb-0"
                      >
                        → {p.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Back to blog */}
              <Link
                href={blogBase}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#F97316] transition-colors"
              >
                ← {article.locale === 'de' ? 'Zurück zum Blog' :
                  article.locale === 'fr' ? 'Retour au blog' :
                    article.locale === 'it' ? 'Torna al blog' : 'Back to blog'}
              </Link>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
