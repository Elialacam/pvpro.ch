import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cantonAreas } from '@/lib/cantons';
import { subsidyContent, subsidyPaths, zurichSubsidyPaths } from './content';
import { Checklist, ContentSection, Contents, GuideFooter, GuideHero, OfficialLink, Process, SourceNote, container } from './shared';
import type { SubsidyLocale } from './types';
import styles from './guides.module.css';

export function CantonalSubsidyPage({ locale }: { locale: SubsidyLocale }) {
  const tx = subsidyContent[locale];
  const guide = tx.cantonal;
  return (
    <article lang={locale} className={`${styles.root} font-sans bg-[#fefefe] text-[#0f1f3d] min-h-[100dvh]`}>
      <GuideHero locale={locale} kind="cantonal" />
      <Contents locale={locale} kind="cantonal" extra={{ id: tx.directoryId, title: tx.directoryTitle }} />
      <div className={`${container} py-14 sm:py-20 space-y-16 sm:space-y-20`}>
        <ContentSection section={guide.sections[0]} />
        <Link href={subsidyPaths.federal[locale]} className="flex items-center justify-between gap-4 rounded-2xl bg-[#fffbeb] border border-[#fcb210]/30 p-6 font-semibold underline underline-offset-4 decoration-[#fcb210] hover:decoration-2">{tx.crossFederal}<ArrowRight aria-hidden="true" className="w-5 h-5 shrink-0" /></Link>
        <ContentSection section={guide.sections[1]} />
        <ContentSection section={guide.sections[2]} />
        <Process section={guide.process} />
        <Checklist guide={guide} />
        <section id={tx.directoryId}>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl tracking-tight mb-4">{tx.directoryTitle}</h2>
          <p className="text-slate-600 leading-relaxed max-w-3xl mb-8">{tx.directoryIntro}</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {cantonAreas.map(canton => (
              <li key={canton.id}>
                <Link href={canton.paths[locale]} className="flex items-center justify-between gap-3 h-full rounded-xl border border-slate-200 bg-[#f8fafc] px-5 py-4 hover:border-[#fcb210] transition-colors">
                  <span className="flex items-center gap-3">
                    <span aria-hidden="true" className="text-xs font-bold bg-[#fcb210]/15 rounded-lg px-2 py-2 min-w-[42px] text-center">{canton.code}</span>
                    <span className="font-semibold text-sm">{canton.names[locale]}</span>
                  </span>
                  <ArrowRight aria-hidden="true" className="w-4 h-4 shrink-0 text-[#a66e00]" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-xs text-slate-500 leading-relaxed mt-5">{tx.directoryNote}</p>
          <aside className="rounded-2xl border border-[#fcb210]/30 bg-[#fffbeb] p-6 sm:p-8 mt-8">
            <Link href={zurichSubsidyPaths[locale]} className="inline-flex items-center gap-2 text-lg font-bold underline underline-offset-4 decoration-[#fcb210] hover:decoration-2">{tx.zurichTitle}<ArrowRight aria-hidden="true" className="w-5 h-5 shrink-0" /></Link>
            <p className="text-sm leading-relaxed text-slate-600 mt-3">{tx.zurichNote}</p>
          </aside>
        </section>
        <SourceNote locale={locale} />
        <OfficialLink locale={locale} />
        <GuideFooter locale={locale} kind="cantonal" />
      </div>
    </article>
  );
}
