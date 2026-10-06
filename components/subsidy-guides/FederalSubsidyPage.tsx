import Link from 'next/link';
import FoerderRechner from '@/components/FoerderRechner';
import {
  ECONOMIC_FACTS,
  SYSTEM_PRICE_NOTES,
  calculatePronovoVariableContribution,
  formatChfForLocale,
  formatRangeForLocale,
  getSystemCostRange,
} from '@/lib/facts';
import { subsidyContent, subsidyPaths } from './content';
import { Checklist, ContentSection, Contents, GuideFooter, GuideHero, OfficialLink, Process, SourceNote, container } from './shared';
import type { SubsidyLocale } from './types';
import styles from './guides.module.css';

export function FederalSubsidyPage({ locale }: { locale: SubsidyLocale }) {
  const tx = subsidyContent[locale];
  const guide = tx.federal;
  const rows = [5, 8, 10, 15].map(kwp => {
    const costs = getSystemCostRange(kwp);
    const variable = calculatePronovoVariableContribution(kwp);
    return {
      kwp,
      gross: formatRangeForLocale(costs, 'CHF', locale),
      variable: formatChfForLocale(variable, locale),
      difference: formatRangeForLocale({ min: costs.min - variable, max: costs.max - variable }, 'CHF', locale),
    };
  });
  return (
    <article lang={locale} className={`${styles.root} font-sans bg-[#fefefe] text-[#0f1f3d] min-h-[100dvh]`}>
      <GuideHero locale={locale} kind="federal" />
      <Contents locale={locale} kind="federal" extra={{ id: tx.examplesId, title: tx.examplesTitle }} />
      <div className={`${container} py-14 sm:py-20 space-y-16 sm:space-y-20`}>
        <ContentSection section={guide.sections[0]} />
        <section id={tx.examplesId}>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl tracking-tight mb-4">{tx.examplesTitle}</h2>
          <p className="text-slate-600 leading-relaxed max-w-3xl mb-8">{tx.examplesIntro}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            {[ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, ECONOMIC_FACTS.incentives.pronovoPerKwpOver30].map((rate, i) => (
              <div key={rate} className="rounded-2xl bg-[#0f1f3d] p-6 sm:p-7">
                <p className="text-[#fcb210] text-3xl font-bold mb-2">{formatChfForLocale(rate, locale)}</p>
                <p className="text-white/80 text-sm">{tx.rateLabels[i]}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-8">{tx.rateNote}</p>
          <div role="region" aria-label={tx.tableCaption} tabIndex={0} className="overflow-x-auto rounded-2xl border border-slate-200 focus-visible:outline focus-visible:outline-[#fcb210] focus-visible:outline-offset-4">
            <table className="w-full min-w-[760px] text-left text-sm">
              <caption className="p-5 text-left font-semibold text-[#0f1f3d] bg-[#f8fafc]">{tx.tableCaption}</caption>
              <thead className="bg-[#0f1f3d] text-white/85">
                <tr>{tx.tableHeaders.map(label => <th key={label} scope="col" className="px-5 py-5 font-semibold leading-relaxed">{label}</th>)}</tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.kwp} className={`border-t border-slate-200 ${i % 2 ? 'bg-[#f8fafc]' : 'bg-[#fefefe]'}`}>
                    <th scope="row" className="px-5 py-6 whitespace-nowrap font-bold">{row.kwp} kWp</th>
                    <td className="px-5 py-6">{row.gross}</td>
                    <td className="px-5 py-6 font-bold text-[#a66e00]">{row.variable}</td>
                    <td className="px-5 py-6 font-semibold">{row.difference}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed mt-4 mb-5">{SYSTEM_PRICE_NOTES[locale]}</p>
          <SourceNote locale={locale} prices />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start mt-12">
            <div className="lg:col-span-2">
              <h3 className="font-sans font-bold text-2xl sm:text-3xl mb-4">{tx.calculatorTitle}</h3>
              <p className="text-slate-600 leading-relaxed">{tx.examplesIntro}</p>
            </div>
            <div className={`lg:col-span-3 ${styles.calculator}`}>
              <p className="rounded-2xl border border-[#fcb210]/30 bg-[#fffbeb] p-5 mb-4 text-sm font-medium leading-relaxed">{tx.calculatorNote}</p>
              <FoerderRechner />
            </div>
          </div>
        </section>
        <ContentSection section={guide.sections[1]} />
        <Link href={subsidyPaths.cantonal[locale]} className="flex items-center justify-between gap-4 rounded-2xl border border-[#fcb210]/30 bg-[#fffbeb] px-6 py-5 font-semibold underline underline-offset-4 decoration-[#fcb210] hover:decoration-2">{tx.crossCantonal}<span aria-hidden="true">→</span></Link>
        <Process section={guide.process} />
        <Checklist guide={guide} />
        <OfficialLink locale={locale} />
        <GuideFooter locale={locale} kind="federal" />
      </div>
    </article>
  );
}
