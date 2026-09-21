'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import FaqSchema from '@/components/FaqSchema';
import GuideModule from '@/components/canton-guides/GuideModule';
import GuideHero from '@/components/canton-guides/GuideHero';
import GuideStyles from '@/components/canton-guides/GuideStyles';
import NextGuideProcess from '@/components/canton-guides/NextGuideProcess';
import type { CantonGuide } from '@/lib/canton-guides/types';
import { finalGuideIds } from '@/lib/canton-guides/types';

interface CantonGuidePageProps {
  guide: CantonGuide;
  mapSection: ReactNode;
}

function OfferCta({ final = false }: { final?: boolean }) {
  return (
    <section className={final ? 'guide-final' : 'guide-cta-band'}>
      <div className="container-custom">
        <div className="guide-cta-box">
          <h2>{final ? 'Ihr Solarprojekt konkret planen' : 'Offerten auf gleicher Grundlage vergleichen'}</h2>
          <p>{final ? 'Starten Sie mit einer klaren Anfrage für Ihr konkretes Projekt.' : 'Der sinnvollste Vergleich: mehrere Offerten für dasselbe Projekt.'}</p>
          <Link href="/anfrage" className="guide-button">Bis zu 3 Solarofferten vergleichen</Link>
          <p className="guide-microcopy">Kostenlos · Unverbindlich · Passende Fachbetriebe</p>
        </div>
      </div>
    </section>
  );
}

function anchorLabel(id: string, title: string) {
  const labels: Record<string, string> = {
    kosten: 'Kosten',
    foerderung: 'Förderung',
    bewilligung: 'Bewilligung',
    solarpflicht: 'Solarpflicht',
    dachsanierung: 'Dachsanierung',
    regelung: 'Regeln',
  };
  return labels[id] ?? title.split(':')[0];
}

export default function CantonGuidePage({ guide, mapSection }: CantonGuidePageProps) {
  const isFinalGuide = finalGuideIds.includes(guide.id);
  const isDossierGuide = isFinalGuide || ['luzern', 'neuenburg', 'nidwalden', 'obwalden', 'schaffhausen'].includes(guide.id);
  const hasRefinedProcess = ['freiburg', 'genf', 'glarus', 'graubunden', 'jura'].includes(guide.id);
  const sourceLabel = (ids: string[]) => {
    if (!ids.length) return null;
    return <small className="guide-source-links">Quellen: {ids.map((id, index) => (
      <a key={id} href={`#quelle-${id}`} aria-label={`Quelle ${id}`}>
        {guide.sources.findIndex(source => source.id === id) + 1}{index < ids.length - 1 ? ',' : ''}
      </a>
    ))}</small>;
  };

  return (
    <article data-canton-guide={guide.id} className={isDossierGuide ? 'dossier-guide' : undefined}>
      <GuideStyles />
      <GuideHero guide={guide} />

      <nav aria-label="Inhalt dieser Seite" className="guide-anchor-nav">
        <div className="container-custom">
          {guide.sections.map(section => (
            <a key={section.id} href={`#${section.id}`}>{anchorLabel(section.id, section.title)}</a>
          ))}
        </div>
      </nav>

      {guide.sections.map((section, index) => {
        const isCosts = section.id === 'kosten';
        const bullets = section.bullets ?? [];
        return (
          <div key={section.id}>
            <section id={section.id} className={`guide-section scroll-mt-24 ${index % 2 ? 'guide-section--tint' : ''}`}>
              <div className={`container-custom guide-reading ${section.module ? 'guide-reading--module' : ''}`}>
                <h2>{section.title}</h2>
                {section.paragraphs[0] && <p className="guide-answer-first">{section.paragraphs[0]}</p>}

                {bullets.length > 0 && (
                  <ul className={isCosts ? 'guide-cost-grid' : 'guide-bullets'}>
                    {bullets.map(bullet => isCosts && !isDossierGuide ? <span key={bullet}>{bullet}</span> : <li key={bullet}>{bullet}</li>)}
                  </ul>
                )}

                {section.module && (
                  <div className="guide-module-wrap">
                    <GuideModule module={section.module} sourceLinks={sourceLabel} />
                  </div>
                )}

                {section.notice && (
                  <aside className="guide-notice">
                    <h3>{section.notice.title}</h3>
                    <p>{section.notice.text}</p>
                  </aside>
                )}

                {section.paragraphs.slice(1).length > 0 && (
                  <div className="guide-body-copy">
                    {section.paragraphs.slice(1).map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                )}
                {sourceLabel(section.sourceIds)}
              </div>
            </section>
            {(isDossierGuide ? section.id === guide.ctaAfterSection : isCosts) && <OfferCta />}
          </div>
        );
      })}

      {isFinalGuide ? <NextGuideProcess /> : isDossierGuide ? null : hasRefinedProcess ? <NextGuideProcess /> : (
        <section className="guide-process">
          <div className="container-custom">
            <h2>So funktioniert der Vergleich über PvPro.ch</h2>
            <ol className="guide-process-list">
              <li><b>01</b><h3>Projekt beschreiben</h3><p>Kurz Angaben zu Gebäude und Solarprojekt machen.</p></li>
              <li><b>02</b><h3>Bis zu 3 passende Fachbetriebe</h3><p>Wir prüfen Ihre Anfrage und leiten sie passend weiter.</p></li>
              <li><b>03</b><h3>Offerten vergleichen</h3><p>Leistung, Anlage und Preis in Ruhe vergleichen.</p></li>
            </ol>
          </div>
        </section>
      )}

      {isDossierGuide ? <div className="dossier-guide-map">{mapSection}</div> : mapSection}

      <section className="guide-faq">
        <div className="container-custom">
          <h2>Häufige Fragen</h2>
          <dl>{guide.faqs.map(faq => (
            <div key={faq.question}>
              <dt data-faq-question>{faq.question}</dt>
              <dd><span data-faq-answer>{faq.answer}</span></dd>
              {sourceLabel(faq.sourceIds)}
            </div>
          ))}</dl>
        </div>
      </section>

      {isDossierGuide && <OfferCta final />}

      <section className="guide-sources">
        <div className="container-custom">
          <h2>Quellen &amp; Stand</h2>
          <p className="guide-answer-first">{isFinalGuide ? 'Stand: 21. September 2026' : isDossierGuide ? 'Stand: 15. September 2026' : 'Stand: September 2026'}</p>
          <ul>{guide.sources.map(source => (
            <li id={`quelle-${source.id}`} key={source.id} className="scroll-mt-24">
              <span><b>{source.authority}</b><span>{source.title}</span></span>
              <a href={source.url} target="_blank" rel="noreferrer">Offizielle Quelle</a>
            </li>
          ))}</ul>
        </div>
      </section>

      {!isDossierGuide && <OfferCta final />}
      <FaqSchema faqs={guide.faqs} />
    </article>
  );
}