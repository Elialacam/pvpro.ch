import type { GuideModule as GuideModuleType } from '@/lib/canton-guides/types';
import type { ReactNode } from 'react';

interface GuideModuleProps {
  module: GuideModuleType;
  sourceLinks: (ids: string[]) => ReactNode;
}

function ItemMeta({ item, sourceLinks }: { item: GuideModuleType['items'][number]; sourceLinks: GuideModuleProps['sourceLinks'] }) {
  return <>{item.detail && <p className="mt-2 text-sm font-medium text-primary">{item.detail}</p>}{sourceLinks(item.sourceIds)}</>;
}

function DecisionTree({ module, sourceLinks }: GuideModuleProps) {
  return (
    <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 sm:p-8">
      <ol className="mx-auto max-w-2xl space-y-8">
        {module.items.map((item, index) => {
          const branches = [...item.text.matchAll(/(?:^|\s)(Ja|Nein):\s([\s\S]*?)(?=\s(?:Ja|Nein):|$)/g)];
          return (
            <li key={item.title} className="relative">
              {index > 0 && <span aria-hidden="true" className="absolute -top-8 left-1/2 h-8 border-l-2 border-primary/50" />}
              <h4 className="relative rounded-xl bg-gray-900 p-4 text-center font-sans font-bold text-white">{item.title}</h4>
              {branches.length === 2 ? (
                <div className="grid gap-3 pt-4 sm:grid-cols-2">
                  {branches.map(([, label, text]) => (
                    <div key={label} className="relative rounded-xl border border-gray-200 bg-white p-4">
                      <span aria-hidden="true" className="absolute -top-4 left-1/2 h-4 border-l-2 border-primary/50" />
                      <span className="inline-block rounded-full bg-primary/15 px-3 py-1 text-xs font-bold text-gray-900">{label}</span>
                      <p className="mt-2 text-sm leading-relaxed text-gray-700">{text}</p>
                    </div>
                  ))}
                </div>
              ) : <p className="mt-3 leading-relaxed text-gray-700">{item.text}</p>}
              <ItemMeta item={item} sourceLinks={sourceLinks} />
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function ProcessFlow({ module, sourceLinks }: GuideModuleProps) {
  return <ol className="flex flex-col gap-3 md:flex-row md:items-stretch md:gap-0">{module.items.map((item, index) => <li key={item.title} className="flex flex-1 items-stretch md:flex-col">
    <article className="flex-1 rounded-xl border border-gray-200 bg-white p-5"><span className="font-sans text-sm font-bold text-primary">Schritt {index + 1}</span><h3 className="mt-2 font-sans font-bold text-gray-900">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-gray-700">{item.text}</p><ItemMeta item={item} sourceLinks={sourceLinks} /></article>
    {index < module.items.length - 1 && <span aria-hidden className="ml-5 h-5 border-l-2 border-primary/40 md:mx-auto md:my-0 md:h-auto md:w-8 md:border-l-0 md:border-t-2" />}
  </li>)}</ol>;
}

function Checklist({ module, sourceLinks }: GuideModuleProps) {
  return <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">{module.items.map((item, index) => <article key={item.title} className="flex gap-4 border-b border-gray-200 p-5 last:border-0">
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">{index + 1}</span><div><h3 className="font-sans font-bold text-gray-900">{item.title}</h3><p className="mt-1 leading-relaxed text-gray-700">{item.text}</p><ItemMeta item={item} sourceLinks={sourceLinks} /></div>
  </article>)}</div>;
}

function RoofExplainer({ module, sourceLinks }: GuideModuleProps) {
  return <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr]"><aside className="rounded-2xl bg-gray-900 p-7 text-white"><p className="text-sm font-bold uppercase tracking-wider text-primary-200">Wichtig</p><h3 className="mt-3 font-sans text-2xl font-bold">Eine Meldung ist keine Installationspflicht.</h3><p className="mt-4 leading-relaxed text-gray-200">Die Meldepflicht bei einer umfassenden Dachsanierung dokumentiert die solare Eignung. Ob eine Solaranlage gebaut werden muss, beurteilt sich nach den eigenen Regeln.</p></aside>
    <div className="space-y-3">{module.items.map(item => <article key={item.title} className="rounded-xl border border-gray-200 bg-white p-5"><h3 className="font-sans font-bold text-gray-900">{item.title}</h3><p className="mt-2 leading-relaxed text-gray-700">{item.text}</p><ItemMeta item={item} sourceLinks={sourceLinks} /></article>)}</div>
  </div>;
}

export default function GuideModule({ module, sourceLinks }: GuideModuleProps) {
  let content: ReactNode;
  if (module.kind === 'decision-tree') content = <DecisionTree module={module} sourceLinks={sourceLinks} />;
  else if (module.kind === 'process-flow') content = <ProcessFlow module={module} sourceLinks={sourceLinks} />;
  else if (module.kind === 'regulatory-checklist') content = <Checklist module={module} sourceLinks={sourceLinks} />;
  else if (module.kind === 'roof-explainer') content = <RoofExplainer module={module} sourceLinks={sourceLinks} />;
  else if (module.kind === 'comparison') content = <div className="rounded-2xl border border-gray-200 bg-white"><div className="grid grid-cols-2 bg-gray-900 text-white sm:grid-cols-3"><div className="hidden p-4 sm:block" /><b className="p-4">{module.columns?.[0]}</b><b className="p-4">{module.columns?.[1]}</b></div>{module.rows?.map(row => <div key={row.label} className="grid grid-cols-2 border-t border-gray-200 text-sm sm:grid-cols-3"><b className="col-span-2 bg-gray-50 p-4 text-gray-900 sm:col-span-1">{row.label}</b><p className="p-4 text-gray-700">{row.left}</p><p className="p-4 text-gray-700">{row.right}{sourceLinks(row.sourceIds)}</p></div>)}</div>;
  else if (module.kind === 'timeline') content = <ol className="ml-3 border-l-2 border-primary/30 pl-8">{module.items.map(item => <li key={item.title} className="relative pb-8 last:pb-0"><span className="absolute -left-[2.45rem] top-1 h-4 w-4 rounded-full border-4 border-white bg-primary" /><h3 className="font-sans text-xl font-bold text-gray-900">{item.title}</h3><p className="mt-2 leading-relaxed text-gray-700">{item.text}</p><ItemMeta item={item} sourceLinks={sourceLinks} /></li>)}</ol>;
  else if (module.kind === 'statistics') content = <div className="grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-2">{module.items.map(item => <div key={item.title} className="bg-white p-6"><p className="font-sans text-3xl font-bold text-primary">{item.value}</p><h3 className="mt-2 font-semibold text-gray-900">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-gray-600">{item.text}</p><ItemMeta item={item} sourceLinks={sourceLinks} /></div>)}</div>;
  else if (module.kind === 'pillars') content = <div className="grid divide-y divide-gray-200 overflow-hidden rounded-2xl border border-gray-200 bg-white md:grid-cols-3 md:divide-x md:divide-y-0">{module.items.map((item, i) => <article key={item.title} className="p-7"><span className="font-sans text-sm font-bold text-primary">0{i + 1}</span><h3 className="mt-6 font-sans text-xl font-bold text-gray-900">{item.title}</h3><p className="mt-3 leading-relaxed text-gray-700">{item.text}</p><ItemMeta item={item} sourceLinks={sourceLinks} /></article>)}</div>;
  else content = <div className="grid gap-5 md:grid-cols-2">{module.items.map(item => <article key={item.title} className="rounded-2xl border-2 border-gray-200 bg-gray-50 p-6"><h3 className="font-sans text-xl font-bold text-gray-900">{item.title}</h3><p className="mt-3 leading-relaxed text-gray-700">{item.text}</p><ItemMeta item={item} sourceLinks={sourceLinks} /></article>)}</div>;
  return <div data-guide-module={module.kind}><h3 className="font-sans text-2xl font-bold text-gray-900">{module.title}</h3>{module.intro && <p className="mt-2 leading-relaxed text-gray-600">{module.intro}</p>}<div className="mt-5">{content}</div></div>;
}