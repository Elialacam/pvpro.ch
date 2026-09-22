'use client';

import type { ReactNode } from 'react';
import type { GuideModule } from '@/lib/canton-guides/types';
import ClosingGuideStyles from './ClosingGuideStyles';
import { cantonGuideUi, type CantonGuideLanguage } from '@/lib/canton-guide-ui';

interface Props {
  module: GuideModule;
  sourceLinks: (ids: string[]) => ReactNode;
  lang?: CantonGuideLanguage;
}

type GuideItem = GuideModule['items'][number];

function ItemContent({ item, sourceLinks }: { item: GuideItem; sourceLinks: Props['sourceLinks'] }) {
  return <>
    {item.value && item.value !== item.title ? <strong className="closing-item-value">{item.value}</strong> : null}
    <h4>{item.title}</h4>
    <p>{item.text}</p>
    {item.detail ? <p className="closing-item-detail">{item.detail}</p> : null}
    {sourceLinks(item.sourceIds)}
  </>;
}

function UriTransition({ module, sourceLinks, lang = 'de' }: Props) {
  const timeline = module.items.slice(0, 3);
  const branches = module.items.slice(3, 6);
  return <div className="closing-uri">
    <ol className="closing-uri-timeline">
      {timeline.map((item, index) => <li key={item.title}>
        <span className="closing-uri-dot" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
        <div><ItemContent item={item} sourceLinks={sourceLinks} /></div>
      </li>)}
    </ol>
    {branches.length ? <div className="closing-uri-decisions">
      <p className="closing-kicker">{cantonGuideUi[lang].module.closing.checkFromOctober}</p>
      <div>{branches.map(item => <article key={item.title}><ItemContent item={item} sourceLinks={sourceLinks} /></article>)}</div>
    </div> : null}
  </div>;
}

function SplitColumns({ module, sourceLinks, className, labels }: Props & { className: string; labels: [string, string] }) {
  const midpoint = Math.ceil(module.items.length / 2);
  const leftItems = module.items.slice(0, midpoint);
  const rightItems = module.items.slice(midpoint);
  return <div className={`closing-split ${className}`}>
    <section><header><span>01</span><h4>{module.columns?.[0] || labels[0]}</h4></header><div className="closing-column-items">
      {leftItems.map(item => <article key={item.title}><ItemContent item={item} sourceLinks={sourceLinks} /></article>)}
    </div></section>
    <section><header><span>02</span><h4>{module.columns?.[1] || labels[1]}</h4></header><div className="closing-column-items">
      {rightItems.map(item => <article key={item.title}><ItemContent item={item} sourceLinks={sourceLinks} /></article>)}
    </div></section>
  </div>;
}

function Pathway({ module, sourceLinks, mini = false }: Props & { mini?: boolean }) {
  return <ol className={`closing-pathway${mini ? ' closing-pathway--mini' : ''}`}>
    {module.items.map((item, index) => <li key={item.title}>
      <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
      <div><ItemContent item={item} sourceLinks={sourceLinks} /></div>
    </li>)}
  </ol>;
}

function ZugPowerChoice({ module, sourceLinks, lang = 'de' }: Props) {
  const ui = cantonGuideUi[lang].module.closing;
  return <div className="closing-zug-choice">
    <div className="closing-formula" aria-label={ui.formulaAria}>
      <span>{ui.ownPower}</span><b>EBF × 10 W/m²</b>
    </div>
    <div className="closing-choice-cards">
      {module.items.map((item, index) => <article key={item.title} className={index === 0 ? 'closing-choice-card--solar' : 'closing-choice-card--fee'}>
        <span className="closing-choice-no">{ui.option} {index + 1}</span><ItemContent item={item} sourceLinks={sourceLinks} />
      </article>)}
    </div>
  </div>;
}

function RenovationBonus({ module, sourceLinks }: Props) {
  return <div className="closing-bonus-cards">
    {module.items.map(item => <article key={item.title}><div className="closing-bonus-rule" aria-hidden="true" /><ItemContent item={item} sourceLinks={sourceLinks} /></article>)}
  </div>;
}

function ModuleRows({ module, sourceLinks }: Props) {
  if (!module.rows?.length) return null;
  return <dl className="closing-rows">
    {module.rows.map(row => <div key={row.label}>
      <dt>{row.label}</dt><dd>{row.left}</dd><dd>{row.right}</dd><dd className="closing-row-sources">{sourceLinks(row.sourceIds)}</dd>
    </div>)}
  </dl>;
}

export default function ClosingGuideModule({ module, sourceLinks, lang = 'de' }: Props) {
  const kind = module.kind as string;
  const ui = cantonGuideUi[lang].module.closing;
  let content: ReactNode;

  if (kind === 'uri-transition') content = <UriTransition module={module} sourceLinks={sourceLinks} lang={lang} />;
  else if (kind === 'vaud-transition') content = <SplitColumns module={module} sourceLinks={sourceLinks} className="closing-split--vaud" labels={ui.vaudColumns} />;
  else if (kind === 'valais-roof-check') content = <Pathway module={module} sourceLinks={sourceLinks} />;
  else if (kind === 'valais-large-roofs') content = <Pathway module={module} sourceLinks={sourceLinks} mini />;
  else if (kind === 'zug-power-choice') content = <ZugPowerChoice module={module} sourceLinks={sourceLinks} lang={lang} />;
  else if (kind === 'zug-renovation-bonus') content = <RenovationBonus module={module} sourceLinks={sourceLinks} />;
  else if (kind === 'zurich-jurisdictions') content = <SplitColumns module={module} sourceLinks={sourceLinks} className="closing-split--jurisdictions" labels={ui.zurichJurisdictions} />;
  else if (kind === 'zurich-law-status') content = <SplitColumns module={module} sourceLinks={sourceLinks} className="closing-split--law" labels={ui.zurichLaw} />;
  else content = <Pathway module={module} sourceLinks={sourceLinks} />;

  return <section className={`guide-module closing-guide-module closing-guide-module--${kind}`} data-guide-module={kind}>
    <ClosingGuideStyles />
    <h3>{module.title}</h3>
    {module.intro ? <p className="guide-module-intro">{module.intro}</p> : null}
    <div className="closing-module-content">{content}</div>
    <ModuleRows module={module} sourceLinks={sourceLinks} />
  </section>;
}