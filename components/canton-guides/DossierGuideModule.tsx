'use client';

import type { ReactNode } from 'react';
import type { GuideModule } from '@/lib/canton-guides/types';

interface Props {
  module: GuideModule;
  sourceLinks: (ids: string[]) => ReactNode;
}

function ItemValue({ item }: { item: GuideModule['items'][number] }) {
  if (!item.value || item.value === item.title) return null;
  return <strong className="dossier-item-value">{item.value}</strong>;
}

function ItemSources({ item, sourceLinks }: { item: GuideModule['items'][number]; sourceLinks: Props['sourceLinks'] }) {
  return <>{item.detail && <p className="dossier-item-detail">{item.detail}</p>}{sourceLinks(item.sourceIds)}</>;
}

function RoofDuty({ module, sourceLinks }: Props) {
  const paths = module.items.slice(0, 3);
  const outcomes = module.items.slice(3);
  return <div className="dossier-roof-tree"><ol className="dossier-roof-paths">{paths.map((item, index) => <li key={item.title}>
    <span className="dossier-step-no">0{index + 1}</span><div><ItemValue item={item} /><h4>{item.title}</h4><p>{item.text}</p><ItemSources item={item} sourceLinks={sourceLinks} /></div>
  </li>)}</ol>{outcomes.length ? <div className="dossier-roof-outcomes"><h4>Danach prüfen</h4><div>{outcomes.map(item => <article key={item.title}><ItemValue item={item} /><h4>{item.title}</h4><p>{item.text}</p><ItemSources item={item} sourceLinks={sourceLinks} /></article>)}</div></div> : null}</div>;
}

function Battery({ module, sourceLinks }: Props) {
  return <div className="dossier-battery"><p className="dossier-formula">{module.intro}</p><div className="dossier-checklist">{module.items.map((item, index) => <article key={item.title}>
    <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><div><ItemValue item={item} /><h4>{item.title}</h4><p>{item.text}</p><ItemSources item={item} sourceLinks={sourceLinks} /></div>
  </article>)}</div></div>;
}

function OwnPower({ module, sourceLinks }: Props) {
  return <ol className="dossier-power-steps">{module.items.map((item, index) => <li key={item.title}><span>Schritt {index + 1}</span><ItemValue item={item} /><h4>{item.title}</h4><p>{item.text}</p><ItemSources item={item} sourceLinks={sourceLinks} /></li>)}</ol>;
}

function WinterAngle({ module, sourceLinks }: Props) {
  return <div className="dossier-winter">
    <figure className="dossier-angle-figure">
      <svg viewBox="0 0 560 280" role="img" aria-labelledby="angle-title angle-desc">
        <title id="angle-title">Neigungswinkel von 75 bis 90 Grad</title><desc id="angle-desc">Eine Solaranlage ist steil über einer horizontalen Grundlinie dargestellt. Der gelbe Bogen markiert den Bereich von 75 bis 90 Grad.</desc>
        <path d="M48 230H512" className="dossier-svg-ground" />
        <path d="M160 230L160 118L300 230Z" className="dossier-svg-house" />
        <path d="M160 230L196 95A140 140 0 0 0 160 90Z" className="dossier-svg-wedge" />
        <g transform="translate(160 230) rotate(-75)" className="dossier-svg-panel">
          <rect x="0" y="-17" width="140" height="34" rx="2" />
          <path d="M24-17V17M48-17V17M72-17V17M96-17V17M120-17V17M0 0H140" />
        </g>
        <path d="M196 95A140 140 0 0 0 160 90" className="dossier-svg-arc" />
        <path d="M196 95L185 99M160 90L171 90" className="dossier-svg-ticks" />
        <circle cx="158" cy="230" r="5" className="dossier-svg-pivot" />
        <text x="206" y="113" className="dossier-svg-label">75°</text><text x="128" y="82" className="dossier-svg-label">90°</text>
        <text x="282" y="257" className="dossier-svg-caption">Horizontale</text>
      </svg>
      <figcaption>Förderbereich: steile Anlage mit 75° bis 90° Neigung</figcaption>
    </figure>
    <div className="dossier-winter-facts">{module.items.map(item => <article key={item.title}><ItemValue item={item} /><h4>{item.title}</h4><p>{item.text}</p><ItemSources item={item} sourceLinks={sourceLinks} /></article>)}</div>
    <div className="dossier-sequence" aria-label="Ablauf"><b>Gesuch</b><i>→</i><b>Eingangsbestätigung</b><i>→</i><b>Bau</b><i>→</i><b>Abschluss</b></div>
  </div>;
}

function LawTimeline({ module, sourceLinks }: Props) {
  return <div className="dossier-law-timeline">{module.items.map((item, index) => {
    const isTransition = /art\.\s*27|übergang/i.test(`${item.title} ${item.value ?? ''}`) || (index > 1 && /30\s*w/i.test(`${item.title} ${item.text} ${item.detail ?? ''}`));
    return <article key={item.title} className={isTransition ? 'dossier-law-transition' : 'dossier-law-now'}>
    <span>{isTransition ? 'Übergang' : 'Ab 2026'}</span><ItemValue item={item} /><h4>{item.title}</h4><p>{item.text}</p><ItemSources item={item} sourceLinks={sourceLinks} />
  </article>;
  })}</div>;
}

export default function DossierGuideModule({ module, sourceLinks }: Props) {
  const kind = module.kind as string;
  let content: ReactNode;
  if (kind === 'roof-duty-check') content = <RoofDuty module={module} sourceLinks={sourceLinks} />;
  else if (kind === 'battery-eligibility') content = <Battery module={module} sourceLinks={sourceLinks} />;
  else if (kind === 'own-power-steps') content = <OwnPower module={module} sourceLinks={sourceLinks} />;
  else if (kind === 'winter-angle') content = <WinterAngle module={module} sourceLinks={sourceLinks} />;
  else content = <LawTimeline module={module} sourceLinks={sourceLinks} />;
  return <section className={`guide-module dossier-module dossier-module--${kind}`} data-guide-module={kind}>
    <h3>{module.title}</h3>
    {kind !== 'battery-eligibility' && module.intro && <p className="guide-module-intro">{module.intro}</p>}
    <div className="guide-module-content">{content}</div>
    {module.rows?.length ? <dl className="dossier-rows">{module.rows.map(row => <div key={row.label}><dt>{row.label}</dt><dd>{row.left}</dd><dd>{row.right}</dd><dd className="dossier-row-sources">{sourceLinks(row.sourceIds)}</dd></div>)}</dl> : null}
  </section>;
}