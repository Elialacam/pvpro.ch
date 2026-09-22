import type { GuideModule as GuideModuleType } from '@/lib/canton-guides/types';
import type { ReactNode } from 'react';
import NextGuideModule from './NextGuideModule';
import DossierGuideModule from './DossierGuideModule';
import FinalGuideModule from './FinalGuideModule';
import ClosingGuideModule from './ClosingGuideModule';
import { cantonGuideUi, type CantonGuideLanguage } from '@/lib/canton-guide-ui';

interface GuideModuleProps {
  module: GuideModuleType;
  sourceLinks: (ids: string[]) => ReactNode;
  lang?: CantonGuideLanguage;
}

function ItemMeta({ item, sourceLinks }: { item: GuideModuleType['items'][number]; sourceLinks: GuideModuleProps['sourceLinks'] }) {
  return <>{item.detail && <p className="guide-module-detail">{item.detail}</p>}{sourceLinks(item.sourceIds)}</>;
}

function DecisionTree({ module, sourceLinks, lang = 'de' }: GuideModuleProps) {
  const labels = cantonGuideUi[lang].module;
  const branchPattern = new RegExp(`(?:^|\\s)(${labels.yes}|${labels.no}):\\s([\\s\\S]*?)(?=\\s(?:${labels.yes}|${labels.no}):|$)`, 'g');
  return (
    <div className="guide-decision">
      <ol>
        {module.items.map((item, index) => {
          const branches = [...item.text.matchAll(branchPattern)];
          return (
            <li key={item.title}>
              {index > 0 && <span aria-hidden="true" className="guide-decision-connector" />}
              <h4>{item.title}</h4>
              {branches.length === 2 ? (
                <div className="guide-branches">
                  {branches.map(([, label, text]) => (
                    <div key={label}>
                      <span>{label}</span>
                      <p>{text}</p>
                    </div>
                  ))}
                </div>
              ) : <p className="guide-module-text">{item.text}</p>}
              <ItemMeta item={item} sourceLinks={sourceLinks} />
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function ProcessFlow({ module, sourceLinks, lang = 'de' }: GuideModuleProps) {
  return <ol className="guide-module-process">{module.items.map((item, index) => <li key={item.title}>
    <article><span>{cantonGuideUi[lang].module.step} {index + 1}</span><h3>{item.title}</h3><p>{item.text}</p><ItemMeta item={item} sourceLinks={sourceLinks} /></article>
    {index < module.items.length - 1 && <i aria-hidden />}
  </li>)}</ol>;
}

function Checklist({ module, sourceLinks }: GuideModuleProps) {
  return <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">{module.items.map((item, index) => <article key={item.title} className="flex gap-4 border-b border-gray-200 p-5 last:border-0">
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">{index + 1}</span><div><h3 className="font-sans font-bold text-gray-900">{item.title}</h3><p className="mt-1 leading-relaxed text-gray-700">{item.text}</p><ItemMeta item={item} sourceLinks={sourceLinks} /></div>
  </article>)}</div>;
}

function RoofExplainer({ module, sourceLinks, lang = 'de' }: GuideModuleProps) {
  const ui = cantonGuideUi[lang].module;
  return <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr]"><aside className="rounded-2xl bg-gray-900 p-7 text-white"><p className="text-sm font-bold uppercase tracking-wider text-primary-200">{ui.important}</p><h3 className="mt-3 font-sans text-2xl font-bold">{ui.roofNoticeTitle}</h3><p className="mt-4 leading-relaxed text-gray-200">{ui.roofNoticeText}</p></aside>
    <div className="space-y-3">{module.items.map(item => <article key={item.title} className="rounded-xl border border-gray-200 bg-white p-5"><h3 className="font-sans font-bold text-gray-900">{item.title}</h3><p className="mt-2 leading-relaxed text-gray-700">{item.text}</p><ItemMeta item={item} sourceLinks={sourceLinks} /></article>)}</div>
  </div>;
}

export default function GuideModule({ module, sourceLinks, lang = 'de' }: GuideModuleProps) {
  if (['uri-transition', 'vaud-transition', 'valais-roof-check', 'valais-large-roofs', 'zug-power-choice', 'zug-renovation-bonus', 'zurich-jurisdictions', 'zurich-law-status'].includes(module.kind)) return <ClosingGuideModule module={module} sourceLinks={sourceLinks} lang={lang} />;
  if (['solar-cadastre-check', 'current-law-comparison', 'compliance-options', 'fer-procedure', 'efficiency-decision'].includes(module.kind)) return <FinalGuideModule module={module} sourceLinks={sourceLinks} lang={lang} />;
  if (['roof-duty-check', 'battery-eligibility', 'own-power-steps', 'winter-angle', 'solar-law-timeline'].includes(module.kind)) return <DossierGuideModule module={module} sourceLinks={sourceLinks} lang={lang} />;
  if (['project-check', 'obligation-triggers', 'inclination-check', 'funding-selector', 'funding-status'].includes(String(module.kind))) return <NextGuideModule module={module} sourceLinks={sourceLinks} lang={lang} />;
  let content: ReactNode;
  if (module.kind === 'decision-tree') content = <DecisionTree module={module} sourceLinks={sourceLinks} lang={lang} />;
  else if (module.kind === 'process-flow') content = <ProcessFlow module={module} sourceLinks={sourceLinks} lang={lang} />;
  else if (module.kind === 'regulatory-checklist') content = <Checklist module={module} sourceLinks={sourceLinks} />;
  else if (module.kind === 'roof-explainer') content = <RoofExplainer module={module} sourceLinks={sourceLinks} lang={lang} />;
  else if (module.kind === 'comparison') content = <div className="rounded-2xl border border-gray-200 bg-white"><div className="grid grid-cols-2 bg-gray-900 text-white sm:grid-cols-3"><div className="hidden p-4 sm:block" /><b className="p-4">{module.columns?.[0]}</b><b className="p-4">{module.columns?.[1]}</b></div>{module.rows?.map(row => <div key={row.label} className="grid grid-cols-2 border-t border-gray-200 text-sm sm:grid-cols-3"><b className="col-span-2 bg-gray-50 p-4 text-gray-900 sm:col-span-1">{row.label}</b><p className="p-4 text-gray-700">{row.left}</p><p className="p-4 text-gray-700">{row.right}{sourceLinks(row.sourceIds)}</p></div>)}</div>;
  else if (module.kind === 'timeline') content = <ol className="ml-3 border-l-2 border-primary/30 pl-8">{module.items.map(item => <li key={item.title} className="relative pb-8 last:pb-0"><span className="absolute -left-[2.45rem] top-1 h-4 w-4 rounded-full border-4 border-white bg-primary" /><h3 className="font-sans text-xl font-bold text-gray-900">{item.title}</h3><p className="mt-2 leading-relaxed text-gray-700">{item.text}</p><ItemMeta item={item} sourceLinks={sourceLinks} /></li>)}</ol>;
  else if (module.kind === 'statistics') content = <div className="grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-2">{module.items.map(item => <div key={item.title} className="bg-white p-6"><p className="font-sans text-3xl font-bold text-primary">{item.value}</p><h3 className="mt-2 font-semibold text-gray-900">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-gray-600">{item.text}</p><ItemMeta item={item} sourceLinks={sourceLinks} /></div>)}</div>;
  else if (module.kind === 'pillars') content = <div className="grid divide-y divide-gray-200 overflow-hidden rounded-2xl border border-gray-200 bg-white md:grid-cols-3 md:divide-x md:divide-y-0">{module.items.map((item, i) => <article key={item.title} className="p-7"><span className="font-sans text-sm font-bold text-primary">0{i + 1}</span><h3 className="mt-6 font-sans text-xl font-bold text-gray-900">{item.title}</h3><p className="mt-3 leading-relaxed text-gray-700">{item.text}</p><ItemMeta item={item} sourceLinks={sourceLinks} /></article>)}</div>;
  else content = <div className="grid gap-5 md:grid-cols-2">{module.items.map(item => <article key={item.title} className="rounded-2xl border-2 border-gray-200 bg-gray-50 p-6"><h3 className="font-sans text-xl font-bold text-gray-900">{item.title}</h3><p className="mt-3 leading-relaxed text-gray-700">{item.text}</p><ItemMeta item={item} sourceLinks={sourceLinks} /></article>)}</div>;
  return <div data-guide-module={module.kind} className={`guide-module guide-module--${module.kind}`}><h3>{module.title}</h3>{module.intro && <p className="guide-module-intro">{module.intro}</p>}<div className="guide-module-content">{content}</div></div>;
}