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

  const heroStats = article.sections.find(s => s.stats && s.stats.length > 0)?.stats ?? [];

  const backLabel =
    article.locale === 'fr' ? 'Retour au blog' :
    article.locale === 'it' ? 'Torna al blog' :
    article.locale === 'en' ? 'Back to blog' :
    'Zurück zum Blog';

  const relatedLabel =
    article.locale === 'fr' ? 'Articles connexes' :
    article.locale === 'it' ? 'Altri articoli' :
    article.locale === 'en' ? 'Related articles' :
    'Weitere Artikel';

  const relatedPagesLabel =
    article.locale === 'fr' ? 'Pages connexes' :
    article.locale === 'it' ? 'Pagine correlate' :
    article.locale === 'en' ? 'Related pages' :
    'Weiterführende Seiten';

  const faqLabel =
    article.locale === 'fr' ? 'Questions fréquentes' :
    article.locale === 'it' ? 'Domande frequenti' :
    article.locale === 'en' ? 'Frequently Asked Questions' :
    'Häufig gestellte Fragen';

  return (
    <main className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-14 overflow-hidden min-h-[540px]">
        {/* Background image */}
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(13,17,23,0.88) 0%, rgba(26,34,54,0.82) 100%)' }} />
        {/* Orange radial glow */}
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, #F97316 0%, transparent 55%)' }} />

        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href={homeHref} className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href={blogBase} className="hover:text-white/70 transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70 line-clamp-1">{article.title.split(':')[0]}</span>
          </nav>

          {/* Meta + title + intro */}
          <div className="max-w-3xl mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                {article.tag}
              </span>
              <span className="flex items-center gap-1.5 text-white/40 text-xs">
                <Calendar className="w-3.5 h-3.5" /> {article.date}
              </span>
              <span className="flex items-center gap-1.5 text-white/40 text-xs">
                <Clock className="w-3.5 h-3.5" /> {article.readMin} min
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              {article.title}
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">{article.intro}</p>
          </div>

          {/* Hero stats cards */}
          {heroStats.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {heroStats.map(s => (
                <div key={s.label} className="rounded-2xl p-4 text-center" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <p className="text-lg font-bold text-white mb-0.5">{s.value}</p>
                  <p className="text-[#F97316] text-xs font-semibold leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── BODY ── */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* ── Main content ── */}
          <article className="lg:col-span-2 space-y-14">

            {article.sections.map((section, i) => (
              <section key={i} className="scroll-mt-24">

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5 leading-tight">
                  {section.heading}
                </h2>

                {section.content.map((para, j) => (
                  <p key={j} className="text-gray-600 leading-relaxed mb-4 text-base">{para}</p>
                ))}

                {section.stats && section.stats.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
                    {section.stats.map(s => (
                      <div key={s.label} className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-center">
                        <p className="text-xs text-gray-400 uppercase tracking-wide mb-1 leading-tight">{s.label}</p>
                        <p className="font-bold text-gray-900 text-sm">{s.value}</p>
                      </div>
                    ))}
                  </div>
                )}

                {section.bullets && section.bullets.length > 0 && (
                  <ul className="space-y-2.5 my-5">
                    {section.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.highlight && (
                  <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5 flex gap-3 mt-5">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-amber-800 font-medium text-sm leading-relaxed">{section.highlight}</p>
                  </div>
                )}

              </section>
            ))}

            {/* ── CTA block ── */}
            <section className="rounded-3xl p-8 text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
              <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #F97316 0%, transparent 55%)' }} />
              <div className="relative">
                <h2 className="text-2xl font-bold text-white mb-3">{article.ctaHeading}</h2>
                <p className="text-gray-400 leading-relaxed mb-6 text-sm">{article.ctaText}</p>
                <Link
                  href={article.formUrl}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
                >
                  {article.ctaButton} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </section>

            {/* ── FAQ ── */}
            {article.faqs.length > 0 && (
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">{faqLabel}</h2>
                <div className="space-y-3">
                  {article.faqs.map((faq, i) => (
                    <details key={i} className="group rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm">
                      <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-900 text-sm select-none list-none">
                        {faq.question}
                        <span className="ml-4 text-[#F97316] flex-shrink-0 text-xl font-light group-open:rotate-45 transition-transform duration-200">+</span>
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

          {/* ── Sidebar ── */}
          <aside>
            <div className="lg:sticky lg:top-28 space-y-5">

              {/* CTA card */}
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
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{relatedLabel}</p>
                  <div className="space-y-3">
                    {relatedPosts.map(p => (
                      <Link
                        key={p.slug}
                        href={p.href ?? `${blogBase}/${p.slug}`}
                        className="flex items-start gap-2 text-sm text-gray-700 hover:text-[#F97316] transition-colors leading-snug border-b border-gray-50 last:border-0 pb-2.5 last:pb-0"
                      >
                        <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-[#F97316]" />
                        {p.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Related pages */}
              {article.relatedPageLinks && article.relatedPageLinks.length > 0 && (
                <div className="rounded-2xl border border-gray-100 p-5 shadow-sm bg-white">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{relatedPagesLabel}</p>
                  <div className="space-y-3">
                    {article.relatedPageLinks.map(p => (
                      <Link
                        key={p.href}
                        href={p.href}
                        className="flex items-start gap-2 text-sm text-gray-700 hover:text-[#F97316] transition-colors leading-snug border-b border-gray-50 last:border-0 pb-2.5 last:pb-0"
                      >
                        <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-[#F97316]" />
                        {p.label}
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
                ← {backLabel}
              </Link>

            </div>
          </aside>

        </div>
      </div>

    </main>
  );
}
