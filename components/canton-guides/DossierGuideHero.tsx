'use client';

import type { CantonGuide } from '@/lib/canton-guides/types';
import { cantonGuideRequestHref, cantonGuideUi, type CantonGuideLanguage } from '@/lib/canton-guide-ui';
import DossierGuideStyles from './DossierGuideStyles';

type Fact = CantonGuide['quickFacts'][number];

function Sources({ guide, fact, lang }: { guide: CantonGuide; fact: Fact; lang: CantonGuideLanguage }) {
  if (!fact.sourceIds.length) return null;
  return <small className="dossier-fact-sources">{cantonGuideUi[lang].sources}: {fact.sourceIds.map((id, index) => (
    <a key={id} href={`#quelle-${id}`} aria-label={cantonGuideUi[lang].sourceAria(id)}>{guide.sources.findIndex(source => source.id === id) + 1}{index < fact.sourceIds.length - 1 ? ', ' : ''}</a>
  ))}</small>;
}

export default function DossierGuideHero({ guide, lang = 'de' }: { guide: CantonGuide; lang?: CantonGuideLanguage }) {
  const cantonId = guide.id as string;
  const ui = cantonGuideUi[lang];
  const label = ui.hero.dossierLabels[cantonId] ?? ui.hero.dossierLabels.default;

  return <>
    <DossierGuideStyles />
    <section className={`guide-hero dossier-guide-hero dossier-guide-hero--${cantonId}`}>
      <div className="container-custom dossier-hero-frame">
        <div className="dossier-hero-copy">
          <p className="guide-eyebrow">{ui.hero.eyebrow}</p>
          <h1>{guide.h1}</h1>
          <div className="guide-hero-lead">{guide.intro.slice(0, 2).map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
          <a href={cantonGuideRequestHref(lang, guide)} className="guide-button">{ui.offer.button}</a>
          <p className="guide-microcopy">{ui.offer.microcopy}</p>
        </div>
        <aside className="dossier-fact-shelf" aria-label={ui.hero.keyFactsAria(guide.canton)}>
           <p className="dossier-shelf-label">{label}</p>
          <div className={`dossier-facts dossier-facts--${Math.min(guide.quickFacts.length, 4)}`}>
            {guide.quickFacts.slice(0, 4).map(fact => <article key={`${fact.value}-${fact.label}`}>
              <strong>{fact.value}</strong>
              <span>{fact.label}</span>
              <Sources guide={guide} fact={fact} lang={lang} />
            </article>)}
          </div>
        </aside>
      </div>
    </section>
  </>;
}