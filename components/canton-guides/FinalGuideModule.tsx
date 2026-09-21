'use client';

import type { ReactNode } from 'react';
import type { GuideModule } from '@/lib/canton-guides/types';
import FinalGuideStyles from './FinalGuideStyles';

interface Props {
  module: GuideModule;
  sourceLinks: (ids: string[]) => ReactNode;
}

type GuideItem = GuideModule['items'][number];

function ItemContent({ item, sourceLinks }: { item: GuideItem; sourceLinks: Props['sourceLinks'] }) {
  return <>
    {item.value && item.value !== item.title ? <strong className="final-value">{item.value}</strong> : null}
    <h4>{item.title}</h4>
    <p>{item.text}</p>
    {item.detail ? <p className="final-detail">{item.detail}</p> : null}
    {sourceLinks(item.sourceIds)}
  </>;
}

function SolarCadastreCheck({ module, sourceLinks }: Props) {
  return <ol className="final-cadastre-flow">
    {module.items.map(item => <li key={item.title}><div><ItemContent item={item} sourceLinks={sourceLinks} /></div></li>)}
  </ol>;
}

function CurrentLawComparison({ module, sourceLinks }: Props) {
  const applicable = module.items.filter(item => item.value === 'Gilt');
  const rejected = module.items.filter(item => item.value === 'Gilt nicht');
  const remainder = module.items.filter(item => item.value !== 'Gilt' && item.value !== 'Gilt nicht');
  return <div className="final-law-comparison">
    <section className="final-law-column" aria-label="Geltendes Recht">
      <h4>Gilt</h4>
      <ul className="final-law-list">{applicable.map(item => <li key={item.title}><ItemContent item={item} sourceLinks={sourceLinks} /></li>)}</ul>
    </section>
    <section className="final-law-column final-law-column--not" aria-label="Nicht geltende Revision">
      <h4>Gilt nicht</h4>
      <ul className="final-law-list">{[...rejected, ...remainder].map(item => <li key={item.title}><ItemContent item={item} sourceLinks={sourceLinks} /></li>)}</ul>
    </section>
  </div>;
}

function ComplianceOptions({ module, sourceLinks }: Props) {
  return <div className="final-options">
    {module.items.map(item => <article className="final-option" key={item.title}><ItemContent item={item} sourceLinks={sourceLinks} /></article>)}
  </div>;
}

function FerProcedure({ module, sourceLinks }: Props) {
  return <ol className="final-fer-flow">
    {module.items.map(item => <li key={item.title}>
        <ItemContent item={item} sourceLinks={sourceLinks} />
      </li>)}
  </ol>;
}

function EfficiencyDecision({ module, sourceLinks }: Props) {
  return <div className="final-efficiency">
    {module.items.map(item => <article key={item.title}>
      <span className="final-branch-status">{item.value?.includes('30 W/m²') && !item.value.includes('<') ? 'Erfüllt' : 'Reduktion'}</span>
      <ItemContent item={item} sourceLinks={sourceLinks} />
    </article>)}
  </div>;
}

function ModuleRows({ module, sourceLinks }: Props) {
  if (!module.rows?.length) return null;
  return <dl className="final-rows">{module.rows.map(row => <div key={row.label}>
    <dt>{row.label}</dt><dd>{row.left}</dd><dd>{row.right}</dd><dd className="final-row-sources">{sourceLinks(row.sourceIds)}</dd>
  </div>)}</dl>;
}

export default function FinalGuideModule({ module, sourceLinks }: Props) {
  const kind = module.kind as string;
  let content: ReactNode;
  if (kind === 'solar-cadastre-check') content = <SolarCadastreCheck module={module} sourceLinks={sourceLinks} />;
  else if (kind === 'current-law-comparison') content = <CurrentLawComparison module={module} sourceLinks={sourceLinks} />;
  else if (kind === 'compliance-options') content = <ComplianceOptions module={module} sourceLinks={sourceLinks} />;
  else if (kind === 'fer-procedure') content = <FerProcedure module={module} sourceLinks={sourceLinks} />;
  else content = <EfficiencyDecision module={module} sourceLinks={sourceLinks} />;

  return <section className={`guide-module final-guide-module final-guide-module--${kind}`} data-guide-module={kind}>
    <FinalGuideStyles />
    <h3>{module.title}</h3>
    {module.intro ? <p className="guide-module-intro">{module.intro}</p> : null}
    <div className="final-module-content">{content}</div>
    <ModuleRows module={module} sourceLinks={sourceLinks} />
  </section>;
}