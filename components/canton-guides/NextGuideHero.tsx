'use client';

import type { CantonGuide } from '@/lib/canton-guides/types';
import { cantonGuideRequestHref, cantonGuideUi, type CantonGuideLanguage } from '@/lib/canton-guide-ui';
import NextGuideAdditions from './NextGuideAdditions';
import NextGuideStyles from './NextGuideStyles';

type Fact = CantonGuide['quickFacts'][number];

function FactSources({ guide, fact, lang }: { guide: CantonGuide; fact: Fact; lang: CantonGuideLanguage }) {
  if (!fact.sourceIds.length) return null;
  return (
    <small className="guide-visual-sources">
      {cantonGuideUi[lang].sources}: {fact.sourceIds.map((id, index) => (
        <a key={id} href={`#quelle-${id}`} aria-label={cantonGuideUi[lang].sourceAria(id)}>
          {guide.sources.findIndex(source => source.id === id) + 1}
          {index < fact.sourceIds.length - 1 ? ',' : ''}
        </a>
      ))}
    </small>
  );
}

function StandardFact({ guide, fact, lang }: { guide: CantonGuide; fact: Fact; lang: CantonGuideLanguage }) {
  return <article className="next-hero-fact"><strong>{fact.value}</strong><span>{fact.label}</span><FactSources guide={guide} fact={fact} lang={lang} /></article>;
}

function FreiburgHero({ guide, lang }: { guide: CantonGuide; lang: CantonGuideLanguage }) {
  const [minimum, cap, notice, facades] = guide.quickFacts;
  return <div className="next-fr-check">
    <p className="next-fr-question">{cantonGuideUi[lang].hero.next.newBuildPlanned}</p>
    <div className="next-fr-primary"><strong>{minimum.value}</strong><span>{minimum.label}</span><FactSources guide={guide} fact={minimum} lang={lang} /></div>
    <div className="next-fr-limits">
      {[cap, notice, facades].map(fact => <StandardFact key={fact.label} guide={guide} fact={fact} lang={lang} />)}
    </div>
  </div>;
}

function GenfHero({ guide, lang }: { guide: CantonGuide; lang: CantonGuideLanguage }) {
  const triggers = guide.quickFacts.slice(0, 3);
  const deadline = guide.quickFacts[3];
  return <div className="next-ge-triggers">
    <div className="next-ge-trigger-row">{triggers.map((fact, index) => <article key={fact.label}><b>0{index + 1}</b><strong>{fact.value}</strong><span>{fact.label}</span><FactSources guide={guide} fact={fact} lang={lang} /></article>)}</div>
    <div className="next-ge-deadline"><strong>{deadline.value}</strong><span>{deadline.label}</span><FactSources guide={guide} fact={deadline} lang={lang} /></div>
  </div>;
}

function GlarusHero({ guide, lang }: { guide: CantonGuide; lang: CantonGuideLanguage }) {
  const [angle, ...facts] = guide.quickFacts;
  return <div className="next-gl-hero">
    <div className="next-gl-angle">
      <figure className="next-gl-drawing">
        <svg viewBox="0 0 220 190" aria-hidden="true">
          <path d="M25 160H205" stroke="#839486" strokeWidth="2" />
          <path d="M70 160L108.82 15.11L150 160Z" fill="#d8e3d5" />
          <path d="M108.82 15.11L150 160" fill="none" stroke="#839486" strokeWidth="3" />
          <g transform="translate(70 160) rotate(-75)">
            <rect x="0" y="-12" width="150" height="24" rx="3" fill="#193e39" stroke="#f4f5ed" strokeWidth="3" />
            <path d="M25-10V10M50-10V10M75-10V10M100-10V10M125-10V10M2 0H148" stroke="#89b1a8" strokeWidth="1.5" />
          </g>
          <path d="M120 160A50 50 0 0 0 82.94 111.70" fill="none" stroke="#b28a16" strokeWidth="3" />
          <circle cx="70" cy="160" r="4" fill="#193e39" />
        </svg>
        <figcaption>{cantonGuideUi[lang].hero.next.horizontalAngle}</figcaption>
      </figure>
      <div className="next-gl-angle-copy"><strong>{angle.value}</strong><span lang={lang}>{lang === 'de' ? angle.label.replace('Neigungswinkelbeitrag', 'Neigungswinkel\u00adbeitrag') : angle.label}</span><FactSources guide={guide} fact={angle} lang={lang} /></div>
    </div>
    <div className="next-gl-rest">{facts.map(fact => <article className="next-gl-fact" key={fact.label}><strong>{fact.value}</strong><div><p>{fact.label}</p><FactSources guide={guide} fact={fact} lang={lang} /></div></article>)}</div>
  </div>;
}

function GraubundenHero({ guide, lang }: { guide: CantonGuide; lang: CantonGuideLanguage }) {
  return <><div className="next-hero-split">{guide.quickFacts.map(fact => <article key={fact.label}><strong>{fact.value}</strong><span>{fact.label}</span><FactSources guide={guide} fact={fact} lang={lang} /></article>)}</div><p className="next-hero-note">{cantonGuideUi[lang].hero.next.notCombinable}</p></>;
}

function JuraHero({ guide, lang }: { guide: CantonGuide; lang: CantonGuideLanguage }) {
  const ids = [...new Set(guide.quickFacts.flatMap(fact => fact.sourceIds))];
  const ui = cantonGuideUi[lang];
  return <><div className="next-status-list">{guide.quickFacts.map(fact => <article key={fact.label}><b>{fact.label}</b><span>{fact.value}</span><FactSources guide={guide} fact={fact} lang={lang} /></article>)}</div><p className="next-hero-note">{ui.hero.next.fundingNotice} <small>{ui.sources}: {ids.map((id, index) => <a key={id} href={`#quelle-${id}`} aria-label={ui.sourceAria(id)}>{guide.sources.findIndex(source => source.id === id) + 1}{index < ids.length - 1 ? ',' : ''}</a>)}</small></p></>;
}

export default function NextGuideHero({ guide, lang = 'de' }: { guide: CantonGuide; lang?: CantonGuideLanguage }) {
  const id = guide.id;
  const ui = cantonGuideUi[lang];
  let visual;
  if (id === 'freiburg') visual = <FreiburgHero guide={guide} lang={lang} />;
  else if (id === 'genf') visual = <GenfHero guide={guide} lang={lang} />;
  else if (id === 'glarus') visual = <GlarusHero guide={guide} lang={lang} />;
  else if (id === 'graubunden') visual = <GraubundenHero guide={guide} lang={lang} />;
  else visual = <JuraHero guide={guide} lang={lang} />;

  return <><NextGuideStyles /><NextGuideAdditions /><section className={`guide-hero next-guide-hero guide-hero--${id}`}>
    <div className="container-custom guide-hero-layout">
      <div className="guide-hero-copy">
        <p className="guide-eyebrow">{ui.hero.eyebrow}</p>
        <h1>{guide.h1}</h1>
        <div className="guide-hero-lead">{guide.intro.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
        <a href={cantonGuideRequestHref(lang, guide)} className="guide-button">{ui.offer.button}</a>
        <p className="guide-microcopy">{ui.offer.microcopy}</p>
      </div>
      <div className="guide-hero-visual">
        <p className="guide-visual-kicker">{id === 'jura' ? ui.hero.visual.fundingStatus : id === 'graubunden' ? ui.hero.visual.twoFundingPaths : id === 'glarus' ? ui.hero.visual.inclinationCheck : id === 'genf' ? ui.hero.visual.solarRelevance : ui.hero.visual.newBuildCheck}</p>
        {visual}
      </div>
    </div>
  </section></>;
}