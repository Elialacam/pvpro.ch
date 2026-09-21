'use client';

import type { CantonGuide } from '@/lib/canton-guides/types';
import DossierGuideStyles from './DossierGuideStyles';

type Fact = CantonGuide['quickFacts'][number];

const finalLabels: Record<string, string> = {
  uri: 'Der Wechsel am 1. Oktober',
  waadt: '2026 und der Ausblick auf 2027',
  wallis: 'Neubau, Dachsanierung & Grossdach',
  zug: 'Eigenstrom oder Ersatzabgabe',
  zurich: 'Kanton und Stadt unterscheiden',
  schwyz: 'Solarkataster & Eigenstrom',
  solothurn: 'Was 2026 wirklich gilt',
  'st-gallen': 'Vier Wege zur Erfüllung',
  tessin: 'Gemeinde, Pronovo & FER',
  thurgau: 'Eigenstrom oder Effizienz',
};

function Sources({ guide, fact }: { guide: CantonGuide; fact: Fact }) {
  if (!fact.sourceIds.length) return null;
  return <small className="dossier-fact-sources">Quellen: {fact.sourceIds.map((id, index) => (
    <a key={id} href={`#quelle-${id}`}>{guide.sources.findIndex(source => source.id === id) + 1}{index < fact.sourceIds.length - 1 ? ', ' : ''}</a>
  ))}</small>;
}

export default function DossierGuideHero({ guide }: { guide: CantonGuide }) {
  const cantonId = guide.id as string;
  const label = cantonId === 'luzern' ? 'Bauvorhaben prüfen' : cantonId === 'neuenburg' ? 'Batterie & Förderung' : cantonId === 'nidwalden' ? 'Eigenstrom planen' : cantonId === 'obwalden' ? 'Winterstrom fördern' : 'Neue Regeln einordnen';

  return <>
    <DossierGuideStyles />
    <section className={`guide-hero dossier-guide-hero dossier-guide-hero--${cantonId}`}>
      <div className="container-custom dossier-hero-frame">
        <div className="dossier-hero-copy">
          <p className="guide-eyebrow">Kantonale Informationen · Stand September 2026</p>
          <h1>{guide.h1}</h1>
          <div className="guide-hero-lead">{guide.intro.slice(0, 2).map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
          <a href="/anfrage" className="guide-button">Bis zu 3 Solarofferten vergleichen</a>
          <p className="guide-microcopy">Kostenlos · Unverbindlich · Passende Fachbetriebe</p>
        </div>
        <aside className="dossier-fact-shelf" aria-label={`${guide.canton}: wichtige Eckwerte`}>
           <p className="dossier-shelf-label">{finalLabels[cantonId] ?? label}</p>
          <div className={`dossier-facts dossier-facts--${Math.min(guide.quickFacts.length, 4)}`}>
            {guide.quickFacts.slice(0, 4).map(fact => <article key={`${fact.value}-${fact.label}`}>
              <strong>{fact.value}</strong>
              <span>{fact.label}</span>
              <Sources guide={guide} fact={fact} />
            </article>)}
          </div>
        </aside>
      </div>
    </section>
  </>;
}