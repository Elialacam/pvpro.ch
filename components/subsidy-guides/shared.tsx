import Link from 'next/link';
import { ArrowRight, CheckCircle, ChevronRight, FileText, Info, Sun } from 'lucide-react';
import { companyRoutes } from '@/components/company/content';
import { getSourceNote } from '@/lib/facts';
import { subsidyContent, subsidyPaths } from './content';
import type { GuideContent, GuideKind, GuideSection, SubsidyLocale } from './types';

export const container = 'max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16';
const linkStyle = 'font-semibold text-[#0f1f3d] underline decoration-[#fcb210] underline-offset-4 hover:decoration-2';
const headingStyle = 'font-sans text-3xl sm:text-4xl font-bold tracking-tight text-[#0f1f3d] leading-tight';

export function GuideHero({ locale, kind }: { locale: SubsidyLocale; kind: GuideKind }) {
  const tx = subsidyContent[locale];
  const guide = tx[kind];
  const home = locale === 'de' ? '/' : `/${locale}`;
  return (
    <section className="relative bg-[#0f1f3d] pt-28 pb-16 sm:pb-20 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 75% 35%, #fcb210 0%, transparent 55%)' }} />
      <div className={`relative ${container}`}>
        <nav aria-label={tx.breadcrumb} className="flex flex-wrap items-center gap-2 text-sm text-white/60 mb-10">
          <Link href={home} className="hover:text-white">{tx.home}</Link>
          <ChevronRight aria-hidden="true" className="h-3.5 w-3.5" />
          <Link href={companyRoutes[locale].subsidy} className="hover:text-white">{tx.overview}</Link>
          <ChevronRight aria-hidden="true" className="h-3.5 w-3.5" />
          <span aria-current="page" className="text-white/90">{guide.shortTitle}</span>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-3">
            <p className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold tracking-widest text-[#fcb210] bg-[#fcb210]/10 border border-[#fcb210]/20 mb-5">
              <Sun aria-hidden="true" className="h-4 w-4 shrink-0" />{guide.eyebrow}
            </p>
            <h1 className="text-4xl sm:text-5xl font-sans font-bold text-white tracking-tight leading-tight mb-6">{guide.title}</h1>
            <p className="text-lg text-white/75 leading-relaxed mb-8">{guide.intro}</p>
            <Link href={companyRoutes[locale].quote} className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#ffc812] to-[#fcb210] px-6 sm:px-7 py-4 text-sm font-bold text-[#0f1f3d] hover:opacity-90 transition-opacity">
              {tx.quote}<ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
            </Link>
          </div>
          <aside className="lg:col-span-2 rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8">
            <FileText aria-hidden="true" className="h-9 w-9 text-[#fcb210] mb-5" />
            <h2 className="font-sans text-xl font-bold text-white mb-5">{guide.summaryTitle}</h2>
            <ul className="space-y-5">
              {guide.summary.map(item => <li key={item} className="flex gap-3 text-white/80 text-sm leading-relaxed"><CheckCircle aria-hidden="true" className="w-5 h-5 text-[#fcb210] shrink-0 mt-0.5" /><span>{item}</span></li>)}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function Contents({ locale, kind, extra }: { locale: SubsidyLocale; kind: GuideKind; extra: { id: string; title: string } }) {
  const tx = subsidyContent[locale];
  const guide = tx[kind];
  const links = [...guide.sections, extra, guide.process];
  return (
    <nav aria-label={tx.contents} className="bg-[#f8fafc] border-b border-[#0f1f3d]/10 py-6">
      <div className={container}>
        <p className="font-bold text-sm text-[#0f1f3d] mb-3">{tx.contents}</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          {links.map(item => <li key={item.id}><Link href={`#${item.id}`} className={linkStyle}>{item.title}</Link></li>)}
        </ul>
      </div>
    </nav>
  );
}

export function ContentSection({ section }: { section: GuideSection }) {
  return (
    <section id={section.id}>
      <div className="max-w-3xl mb-8">
        <h2 className={`${headingStyle} mb-4`}>{section.title}</h2>
        <p className="text-slate-600 leading-relaxed">{section.intro}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {section.cards.map((card, index) => (
          <article key={card.title} className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 sm:p-7">
            <span aria-hidden="true" className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#fcb210]/15 text-[#0f1f3d] font-bold text-sm mb-4">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="text-lg font-sans font-bold text-[#0f1f3d] mb-3">{card.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Process({ section }: { section: GuideSection }) {
  return (
    <section id={section.id} className="bg-[#0f1f3d] rounded-3xl p-6 sm:p-10 lg:p-12">
      <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white leading-tight mb-4">{section.title}</h2>
      <p className="text-white/70 leading-relaxed max-w-3xl mb-10">{section.intro}</p>
      <ol className="space-y-7">
        {section.cards.map((step, index) => (
          <li key={step.title} className="flex gap-4 sm:gap-6">
            <span aria-hidden="true" className="shrink-0 rounded-full w-10 h-10 bg-[#fcb210] text-[#0f1f3d] flex items-center justify-center font-bold">{index + 1}</span>
            <div className="border-b border-white/10 pb-7 flex-1">
              <h3 className="font-sans font-bold text-white text-lg mb-2">{step.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed max-w-3xl">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Checklist({ guide }: { guide: GuideContent }) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
      <div className="lg:col-span-2">
        <FileText aria-hidden="true" className="w-10 h-10 text-[#c28500] mb-5" />
        <h2 className={`${headingStyle} mb-4`}>{guide.checklistTitle}</h2>
        <p className="text-slate-600 leading-relaxed">{guide.checklistIntro}</p>
      </div>
      <ul className="lg:col-span-3 rounded-2xl border border-[#fcb210]/30 bg-[#fffbeb] divide-y divide-[#fcb210]/20 px-5 sm:px-7">
        {guide.checklist.map(item => <li key={item} className="flex gap-3 py-5 text-sm text-slate-700 leading-relaxed"><CheckCircle aria-hidden="true" className="w-5 h-5 text-[#a66e00] shrink-0 mt-0.5" /><span>{item}</span></li>)}
      </ul>
    </section>
  );
}

export function SourceNote({ locale, prices = false }: { locale: SubsidyLocale; prices?: boolean }) {
  const tx = subsidyContent[locale];
  return (
    <aside className="rounded-2xl bg-[#f8fafc] border border-slate-200 p-5 sm:p-6 flex items-start gap-3">
      <Info aria-hidden="true" className="w-5 h-5 shrink-0 text-[#a66e00] mt-0.5" />
      <div className="text-sm leading-relaxed text-slate-600">
        <p>{tx.modelNote}</p>
        <p className="mt-3 text-xs">{getSourceNote(locale)}</p>
        {prices && <p className="mt-3">{tx.tableNote}</p>}
      </div>
    </aside>
  );
}

export function OfficialLink({ locale }: { locale: SubsidyLocale }) {
  const tx = subsidyContent[locale];
  return (
    <aside className="rounded-2xl border border-[#fcb210]/30 bg-[#fffbeb] p-6 sm:p-8">
      <a href="https://pronovo.ch/" className={`inline-flex items-center gap-2 text-lg ${linkStyle}`}>{tx.official}<ArrowRight aria-hidden="true" className="w-5 h-5 shrink-0" /></a>
      <p className="mt-3 text-sm text-slate-600 leading-relaxed">{tx.officialNote}</p>
    </aside>
  );
}

export function GuideFooter({ locale, kind }: { locale: SubsidyLocale; kind: GuideKind }) {
  const tx = subsidyContent[locale];
  const guide = tx[kind];
  const otherKind = kind === 'federal' ? 'cantonal' : 'federal';
  return (
    <>
      <section className="max-w-4xl mx-auto">
        <h2 className={`${headingStyle} mb-8`}>{guide.faqTitle}</h2>
        <div className="space-y-3">
          {guide.faqs.map(faq => (
            <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-[#f8fafc]">
              <summary className="cursor-pointer flex items-center justify-between gap-4 p-5 sm:p-6 text-sm sm:text-base font-semibold text-[#0f1f3d] list-none">
                {faq.question}<span aria-hidden="true" className="text-[#a66e00] text-2xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mx-5 sm:mx-6 pb-6 pt-4 border-t border-slate-200 text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="rounded-3xl bg-[#fffbeb] border border-[#fcb210]/20 p-7 sm:p-12 text-center">
        <h2 className={`${headingStyle} mb-4 max-w-3xl mx-auto`}>{guide.ctaTitle}</h2>
        <p className="max-w-2xl mx-auto text-slate-600 leading-relaxed mb-7">{guide.ctaText}</p>
        <Link href={companyRoutes[locale].quote} className="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[#ffc812] to-[#fcb210] rounded-full px-7 py-4 font-bold text-[#0f1f3d] text-sm hover:opacity-90 transition-opacity">
          {tx.quote}<ArrowRight aria-hidden="true" className="w-4 h-4 shrink-0" />
        </Link>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mt-7 text-sm">
          <Link href={subsidyPaths[otherKind][locale]} className={linkStyle}>{otherKind === 'federal' ? tx.crossFederal : tx.crossCantonal}</Link>
          <Link href={companyRoutes[locale].subsidy} className={linkStyle}>{tx.overview}</Link>
        </div>
      </section>
    </>
  );
}
