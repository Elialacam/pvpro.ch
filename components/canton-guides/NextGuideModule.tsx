'use client';

import { useState, type ReactNode } from 'react';
import type { GuideModule } from '@/lib/canton-guides/types';

type Props = { module: GuideModule; sourceLinks: (ids: string[]) => ReactNode };
type GuideItem = GuideModule['items'][number];

function ItemMeta({ item, sourceLinks }: { item: GuideItem; sourceLinks: Props['sourceLinks'] }) {
  return <>{item.detail && <p className="guide-module-detail">{item.detail}</p>}{sourceLinks(item.sourceIds)}</>;
}

function splitBranches(text: string) {
  return [...text.matchAll(/(?:^|\s)(Ja|Nein):\s([\s\S]*?)(?=\s(?:Ja|Nein):|$)/g)].map(([, label, branch]) => ({ label, text: branch.trim() }));
}

function ProjectCheck({ module, sourceLinks }: Props) {
  return <div className="next-project-check">{module.items.map(item => {
    const branches = splitBranches(item.text);
    return <section className="next-project-stage" key={item.title}>
      <h4>{item.title}</h4>
      <div className="next-project-options">{branches.length === 2 ? branches.map(branch => <article className="next-project-option" key={branch.label}><b>{branch.label}</b><p>{branch.text}</p></article>) : <p className="guide-module-text">{item.text}</p>}</div>
      <ItemMeta item={item} sourceLinks={sourceLinks} />
    </section>;
  })}</div>;
}

function Triggers({ module, sourceLinks }: Props) {
  return <><div className="next-trigger-dashboard">{module.items.map((item, index) => <article className="next-trigger-card" key={item.title}><b>TRIGGER 0{index + 1}</b><h4>{item.title}</h4><p>{item.text}</p><ItemMeta item={item} sourceLinks={sourceLinks} /></article>)}</div><p className="next-trigger-none"><b>Keine dieser Situationen?</b> Dann besteht nicht automatisch aufgrund dieser drei Regeln eine Pflicht. Andere Vorschriften und Schutzinteressen bleiben zu prüfen.</p></>;
}

function Inclination({ module, sourceLinks }: Props) {
  return (
    <div className="next-inclination">
      <div className="next-angle-stage" aria-label="Vereinfachtes Diagramm einer steilen Photovoltaikfläche mit 75 Grad Neigung">
        <i className="next-ground" /><i className="next-house" /><i className="next-panel" /><b className="next-angle-label">75°</b>
      </div>
      <div className="next-inclination-copy">{module.items.map(item => (
        <article key={item.title}>
          <strong>{item.value || item.title}</strong><span>{item.title}</span>
          <p className="guide-module-text">{item.text}</p><ItemMeta item={item} sourceLinks={sourceLinks} />
        </article>
      ))}</div>
    </div>
  );
}

function FundingSelector({ module, sourceLinks }: Props) {
  const [choice, setChoice] = useState(0);
  const active = module.items[choice] ?? module.items[0];
  const columns = module.columns ?? ['Winterstrom', 'Flächenpotenzial'];
  return (
    <>
      <fieldset className="next-selector">
        <legend>Wie ist meine Anlage geplant?</legend>
        <div className="next-selector-options">{module.items.map((item, index) => (
          <label className="next-selector-option" key={item.title}>
            <input type="radio" name={`funding-${module.title}`} value={String(index)} checked={choice === index} onChange={() => setChoice(index)} />
            <span><b>{item.title}</b><small>{item.value || 'Förderweg prüfen'}</small></span>
          </label>
        ))}</div>
        <div className="next-selector-result" aria-live="polite">
          <b>{active.title}</b><p>{active.text}</p>{active.detail && <p>{active.detail}</p>}{sourceLinks(active.sourceIds)}
        </div>
      </fieldset>
      <div className="next-programmes">{columns.map((column, columnIndex) => (
        <article className="next-programme" key={column}>
          <h4>{column}</h4>
          <dl>{module.rows?.map(row => (
            <div key={row.label}><dt>{row.label}</dt><dd>{columnIndex === 0 ? row.left : row.right}{sourceLinks(row.sourceIds)}</dd></div>
          ))}</dl>
        </article>
      ))}</div>
    </>
  );
}

function Traffic({ module, sourceLinks }: Props) {
  const ids = [...new Set(module.items.flatMap(item => item.sourceIds))];
  return <><div className="next-traffic">{module.items.map(item => <article className="next-traffic-card" key={item.title}><p className="next-traffic-status"><i className="next-traffic-dot" aria-hidden />{item.value || 'Status'}</p><h4>{item.title}</h4><p>{item.text}</p><ItemMeta item={item} sourceLinks={sourceLinks} /></article>)}</div><p className="next-status-date">Stand: 15. September 2026. Förderbudgets können sich ändern – vor Auftrag aktuellen Stand prüfen.{sourceLinks(ids)}</p></>;
}

export default function NextGuideModule({ module, sourceLinks }: Props) {
  let content: ReactNode;
  if (module.kind === 'project-check') content = <ProjectCheck module={module} sourceLinks={sourceLinks} />;
  else if (module.kind === 'obligation-triggers') content = <Triggers module={module} sourceLinks={sourceLinks} />;
  else if (module.kind === 'inclination-check') content = <Inclination module={module} sourceLinks={sourceLinks} />;
  else if (module.kind === 'funding-selector') content = <FundingSelector module={module} sourceLinks={sourceLinks} />;
  else content = <Traffic module={module} sourceLinks={sourceLinks} />;
  return <div data-guide-module={module.kind} className={`guide-module next-module guide-module--${module.kind}`}><h3>{module.title}</h3>{module.intro && <p className="guide-module-intro">{module.intro}</p>}<div className="guide-module-content">{content}</div></div>;
}