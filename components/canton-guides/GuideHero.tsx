'use client';

import Link from 'next/link';
import type { CantonGuide } from '@/lib/canton-guides/types';
import { finalGuideIds, closingGuideIds } from '@/lib/canton-guides/types';
import { cantonGuideRequestHref, cantonGuideUi, type CantonGuideLanguage } from '@/lib/canton-guide-ui';
import NextGuideHero from './NextGuideHero';
import DossierGuideHero from './DossierGuideHero';

interface GuideHeroProps {
  guide: CantonGuide;
  lang?: CantonGuideLanguage;
}

type HeroFact = CantonGuide['quickFacts'][number];

function isFact(fact: HeroFact | undefined): fact is HeroFact {
  return Boolean(fact);
}

function FactSources({ guide, facts, lang }: { guide: CantonGuide; facts: HeroFact[]; lang: CantonGuideLanguage }) {
  const ids = [...new Set(facts.flatMap(fact => fact.sourceIds))];
  if (!ids.length) return null;

  return (
    <small className="guide-visual-sources">
      {cantonGuideUi[lang].sources}: {ids.map((id, index) => (
        <a key={id} href={`#quelle-${id}`} aria-label={cantonGuideUi[lang].sourceAria(id)}>
          {guide.sources.findIndex(source => source.id === id) + 1}{index < ids.length - 1 ? ',' : ''}
        </a>
      ))}
    </small>
  );
}

function MetricGrid({ guide, facts, lang }: { guide: CantonGuide; facts: HeroFact[]; lang: CantonGuideLanguage }) {
  return (
    <div className="guide-metric-grid">
      {facts.map(fact => (
        <div key={`${fact.value}-${fact.label}`}>
          <strong>{fact.value}</strong>
          <span>{fact.label}</span>
          <FactSources guide={guide} facts={[fact]} lang={lang} />
        </div>
      ))}
    </div>
  );
}

function HeroVisual({ guide, lang = 'de' }: GuideHeroProps) {
  const facts = guide.quickFacts;
  const labels = cantonGuideUi[lang].hero.visual;

  if (guide.id === 'aargau') {
    return (
      <div className="guide-hero-visual guide-hero-aargau">
        <p className="guide-visual-kicker">{labels.solarRequirement}</p>
        <MetricGrid guide={guide} facts={facts} lang={lang} />
      </div>
    );
  }

  if (guide.id === 'appenzell-ausserrhoden') {
    const [current, future, inclination, rate, application] = facts;
    return (
      <div className="guide-hero-visual guide-hero-ar">
        <p className="guide-visual-kicker">{labels.fundingChange}</p>
        <div className="guide-year-line">
          {current && <div><b>{current.value}</b><span>{current.label}</span><FactSources guide={guide} facts={[current]} lang={lang} /></div>}
          {current && future && <i aria-hidden>→</i>}
          {future && <div><b>{future.value}</b><span>{future.label}</span><FactSources guide={guide} facts={[future]} lang={lang} /></div>}
        </div>
        <div className="guide-visual-foot">
          {[inclination, rate, application].filter(isFact).map(fact => (
            <span key={`${fact.value}-${fact.label}`} className="guide-visual-fact">
              <b>{fact.value}</b><em>{fact.label}</em><FactSources guide={guide} facts={[fact]} lang={lang} />
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (guide.id === 'appenzell-innerrhoden') {
    const [consultation, freeWithHeating, pronovo, newBuild] = facts;
    return (
      <div className="guide-hero-visual guide-hero-ai">
        <p className="guide-visual-kicker">{labels.advice}</p>
        {consultation && <><strong className="guide-big-number">{consultation.value}</strong><b className="guide-big-label">{consultation.label}</b><FactSources guide={guide} facts={[consultation]} lang={lang} /></>}
        {freeWithHeating && <p className="guide-visual-copy">{freeWithHeating.value} · {freeWithHeating.label}<FactSources guide={guide} facts={[freeWithHeating]} lang={lang} /></p>}
        <ul>{[pronovo, newBuild].filter(isFact).map(fact => <li key={`${fact.value}-${fact.label}`}><b>{fact.value}</b> {fact.label}<FactSources guide={guide} facts={[fact]} lang={lang} /></li>)}</ul>
      </div>
    );
  }

  if (guide.id === 'basel') {
    const [bsRoof, bsFacade, blRoof, blFacade] = facts;
    const groups = [
      { title: 'BASEL-STADT', facts: [bsRoof, bsFacade] },
      { title: 'BASEL-LANDSCHAFT', facts: [blRoof, blFacade] },
    ];
    return (
      <div className="guide-hero-visual guide-hero-basel">
        <p className="guide-visual-kicker">{labels.propertyLocation}</p>
        <div className="guide-canton-split">{groups.map(group => (
          <div key={group.title}><b>{group.title}</b>{group.facts.filter(isFact).map(fact => (
            <span key={`${fact.value}-${fact.label}`}><strong>{fact.value}</strong>{fact.label}<FactSources guide={guide} facts={[fact]} lang={lang} /></span>
          ))}</div>
        ))}</div>
      </div>
    );
  }

  return (
    <div className="guide-hero-visual guide-hero-bern">
      <p className="guide-visual-kicker">{labels.newSince2026}</p>
      <MetricGrid guide={guide} facts={facts} lang={lang} />
    </div>
  );
}

export default function GuideHero({ guide, lang = 'de' }: GuideHeroProps) {
  const ui = cantonGuideUi[lang];
  if (closingGuideIds.includes(guide.id) || finalGuideIds.includes(guide.id) || ['luzern', 'neuenburg', 'nidwalden', 'obwalden', 'schaffhausen'].includes(guide.id)) return <DossierGuideHero guide={guide} lang={lang} />;
  if (['freiburg', 'genf', 'glarus', 'graubunden', 'jura'].includes(String(guide.id))) return <NextGuideHero guide={guide} lang={lang} />;
  return (
    <section className={`guide-hero guide-hero--${guide.id}`}>
      <div className="container-custom guide-hero-layout">
        <div className="guide-hero-copy">
          <p className="guide-eyebrow">{ui.hero.eyebrow}</p>
          <h1>{guide.h1}</h1>
          <div className="guide-hero-lead">{guide.intro.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
          <Link href={cantonGuideRequestHref(lang, guide)} className="guide-button">{ui.offer.button}</Link>
          <p className="guide-microcopy">{ui.offer.microcopy}</p>
        </div>
        <HeroVisual guide={guide} lang={lang} />
      </div>
    </section>
  );
}