'use client';

import { useState, type ReactNode } from 'react';
import type { GuideModule } from '@/lib/canton-guides/types';
import { cantonGuideUi, type CantonGuideLanguage } from '@/lib/canton-guide-ui';

type Props = { module: GuideModule; sourceLinks: (ids: string[]) => ReactNode; lang?: CantonGuideLanguage };
type GuideItem = GuideModule['items'][number];

function ItemMeta({ item, sourceLinks }: { item: GuideItem; sourceLinks: Props['sourceLinks'] }) {
  return <>{item.detail && <p className="guide-module-detail">{item.detail}</p>}{sourceLinks(item.sourceIds)}</>;
}

function splitBranches(text: string, lang: CantonGuideLanguage) {
  const { yes, no } = cantonGuideUi[lang].module;
  const pattern = new RegExp(`(?:^|\\s)(${yes}|${no}):\\s([\\s\\S]*?)(?=\\s(?:${yes}|${no}):|$)`, 'g');
  return [...text.matchAll(pattern)].map(([, label, branch]) => ({ label, text: branch.trim() }));
}

function ProjectCheck({ module, sourceLinks, lang = 'de' }: Props) {
  return <div className="next-project-check">{module.items.map(item => {
    const branches = splitBranches(item.text, lang);
    return <section className="next-project-stage" key={item.title} data-next-label={cantonGuideUi[lang].module.next}>
      <h4>{item.title}</h4>
      <div className="next-project-options">{branches.length === 2 ? branches.map(branch => <article className="next-project-option" key={branch.label}><b>{branch.label}</b><p>{branch.text}</p></article>) : <p className="guide-module-text">{item.text}</p>}</div>
      <ItemMeta item={item} sourceLinks={sourceLinks} />
    </section>;
  })}</div>;
}

function Triggers({ module, sourceLinks, lang = 'de' }: Props) {
  const ui = cantonGuideUi[lang].module;
  return <><div className="next-trigger-dashboard">{module.items.map((item, index) => <article className="next-trigger-card" key={item.title}><b>{ui.trigger} 0{index + 1}</b><h4>{item.title}</h4><p>{item.text}</p><ItemMeta item={item} sourceLinks={sourceLinks} /></article>)}</div><p className="next-trigger-none"><b>{ui.noTriggerTitle}</b> {ui.noTriggerText}</p></>;
}

function Inclination({ module, sourceLinks, lang = 'de' }: Props) {
  return (
    <div className="next-inclination">
      <div className="next-angle-stage" aria-label={cantonGuideUi[lang].module.inclinationAria}>
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

function FundingSelector({ module, sourceLinks, lang = 'de' }: Props) {
  const [choice, setChoice] = useState(0);
  const active = module.items[choice] ?? module.items[0];
  const ui = cantonGuideUi[lang].module;
  const columns = module.columns ?? ui.defaultColumns;
  return (
    <>
      <fieldset className="next-selector">
        <legend>{ui.selectorLegend}</legend>
        <div className="next-selector-options">{module.items.map((item, index) => (
          <label className="next-selector-option" key={item.title}>
            <input type="radio" name={`funding-${module.title}`} value={String(index)} checked={choice === index} onChange={() => setChoice(index)} />
            <span><b>{item.title}</b><small>{item.value || ui.checkFundingPath}</small></span>
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

function Traffic({ module, sourceLinks, lang = 'de' }: Props) {
  const ids = [...new Set(module.items.flatMap(item => item.sourceIds))];
  const ui = cantonGuideUi[lang].module;
  return <><div className="next-traffic">{module.items.map(item => <article className="next-traffic-card" key={item.title}><p className="next-traffic-status"><i className="next-traffic-dot" aria-hidden />{item.value || ui.status}</p><h4>{item.title}</h4><p>{item.text}</p><ItemMeta item={item} sourceLinks={sourceLinks} /></article>)}</div><p className="next-status-date">{ui.fundingNotice}{sourceLinks(ids)}</p></>;
}

export default function NextGuideModule({ module, sourceLinks, lang = 'de' }: Props) {
  let content: ReactNode;
  if (module.kind === 'project-check') content = <ProjectCheck module={module} sourceLinks={sourceLinks} lang={lang} />;
  else if (module.kind === 'obligation-triggers') content = <Triggers module={module} sourceLinks={sourceLinks} lang={lang} />;
  else if (module.kind === 'inclination-check') content = <Inclination module={module} sourceLinks={sourceLinks} lang={lang} />;
  else if (module.kind === 'funding-selector') content = <FundingSelector module={module} sourceLinks={sourceLinks} lang={lang} />;
  else content = <Traffic module={module} sourceLinks={sourceLinks} lang={lang} />;
  return <div data-guide-module={module.kind} className={`guide-module next-module guide-module--${module.kind}`}><h3>{module.title}</h3>{module.intro && <p className="guide-module-intro">{module.intro}</p>}<div className="guide-module-content">{content}</div></div>;
}