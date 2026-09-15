'use client';

import type { CantonGuide } from '@/lib/canton-guides/types';
import NextGuideAdditions from './NextGuideAdditions';
import NextGuideStyles from './NextGuideStyles';

type Fact = CantonGuide['quickFacts'][number];

function FactSources({ guide, fact }: { guide: CantonGuide; fact: Fact }) {
  if (!fact.sourceIds.length) return null;
  return (
    <small className="guide-visual-sources">
      Quellen: {fact.sourceIds.map((id, index) => (
        <a key={id} href={`#quelle-${id}`}>
          {guide.sources.findIndex(source => source.id === id) + 1}
          {index < fact.sourceIds.length - 1 ? ',' : ''}
        </a>
      ))}
    </small>
  );
}

function StandardFact({ guide, fact }: { guide: CantonGuide; fact: Fact }) {
  return <article className="next-hero-fact"><strong>{fact.value}</strong><span>{fact.label}</span><FactSources guide={guide} fact={fact} /></article>;
}

function FreiburgHero({ guide }: { guide: CantonGuide }) {
  const [minimum, cap, notice, facades] = guide.quickFacts;
  return <div className="next-fr-check">
    <p className="next-fr-question">Neubau geplant?</p>
    <div className="next-fr-primary"><strong>{minimum.value}</strong><span>{minimum.label}</span><FactSources guide={guide} fact={minimum} /></div>
    <div className="next-fr-limits">
      {[cap, notice, facades].map(fact => <StandardFact key={fact.label} guide={guide} fact={fact} />)}
    </div>
  </div>;
}

function GenfHero({ guide }: { guide: CantonGuide }) {
  const triggers = guide.quickFacts.slice(0, 3);
  const deadline = guide.quickFacts[3];
  return <div className="next-ge-triggers">
    <div className="next-ge-trigger-row">{triggers.map((fact, index) => <article key={fact.label}><b>0{index + 1}</b><strong>{fact.value}</strong><span>{fact.label}</span><FactSources guide={guide} fact={fact} /></article>)}</div>
    <div className="next-ge-deadline"><strong>{deadline.value}</strong><span>{deadline.label}</span><FactSources guide={guide} fact={deadline} /></div>
  </div>;
}

function GlarusHero({ guide }: { guide: CantonGuide }) {
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
        <figcaption>75° zur Horizontalen</figcaption>
      </figure>
      <div className="next-gl-angle-copy"><strong>{angle.value}</strong><span lang="de">{angle.label.replace('Neigungswinkelbeitrag', 'Neigungswinkel\u00adbeitrag')}</span><FactSources guide={guide} fact={angle} /></div>
    </div>
    <div className="next-gl-rest">{facts.map(fact => <article className="next-gl-fact" key={fact.label}><strong>{fact.value}</strong><div><p>{fact.label}</p><FactSources guide={guide} fact={fact} /></div></article>)}</div>
  </div>;
}

function GraubundenHero({ guide }: { guide: CantonGuide }) {
  return <><div className="next-hero-split">{guide.quickFacts.map(fact => <article key={fact.label}><strong>{fact.value}</strong><span>{fact.label}</span><FactSources guide={guide} fact={fact} /></article>)}</div><p className="next-hero-note">Nicht miteinander kombinierbar.</p></>;
}

function JuraHero({ guide }: { guide: CantonGuide }) {
  const ids = [...new Set(guide.quickFacts.flatMap(fact => fact.sourceIds))];
  return <><div className="next-status-list">{guide.quickFacts.map(fact => <article key={fact.label}><b>{fact.label}</b><span>{fact.value}</span><FactSources guide={guide} fact={fact} /></article>)}</div><p className="next-hero-note">Stand: 15. September 2026. Förderbudgets können sich ändern – vor Auftrag aktuellen Stand prüfen. <small>Quellen: {ids.map((id, index) => <a key={id} href={`#quelle-${id}`}>{guide.sources.findIndex(source => source.id === id) + 1}{index < ids.length - 1 ? ',' : ''}</a>)}</small></p></>;
}

export default function NextGuideHero({ guide }: { guide: CantonGuide }) {
  const id = guide.id;
  let visual;
  if (id === 'freiburg') visual = <FreiburgHero guide={guide} />;
  else if (id === 'genf') visual = <GenfHero guide={guide} />;
  else if (id === 'glarus') visual = <GlarusHero guide={guide} />;
  else if (id === 'graubunden') visual = <GraubundenHero guide={guide} />;
  else visual = <JuraHero guide={guide} />;

  return <><NextGuideStyles /><NextGuideAdditions /><section className={`guide-hero next-guide-hero guide-hero--${id}`}>
    <div className="container-custom guide-hero-layout">
      <div className="guide-hero-copy">
        <p className="guide-eyebrow">Kantonale Informationen · Stand September 2026</p>
        <h1>{guide.h1}</h1>
        <div className="guide-hero-lead">{guide.intro.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
        <a href="/anfrage" className="guide-button">Bis zu 3 Solarofferten vergleichen</a>
        <p className="guide-microcopy">Kostenlos · Unverbindlich · Passende Fachbetriebe</p>
      </div>
      <div className="guide-hero-visual">
        <p className="guide-visual-kicker">{id === 'jura' ? 'Förderstatus' : id === 'graubunden' ? 'Zwei Förderwege' : id === 'glarus' ? 'Neigungs-Check' : id === 'genf' ? 'Wann Solar relevant wird' : 'Neubau-Check'}</p>
        {visual}
      </div>
    </div>
  </section></>;
}