'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import FaqSchema from '@/components/FaqSchema';
import GuideModule from '@/components/canton-guides/GuideModule';
import GuideHero from '@/components/canton-guides/GuideHero';
import GuideStyles from '@/components/canton-guides/GuideStyles';
import NextGuideProcess from '@/components/canton-guides/NextGuideProcess';
import type { CantonGuide } from '@/lib/canton-guides/types';
import { finalGuideIds, closingGuideIds } from '@/lib/canton-guides/types';
import {
  cantonGuideRequestHref,
  cantonGuideUi,
  type CantonGuideLanguage,
} from '@/lib/canton-guide-ui';

interface CantonGuidePageProps {
  guide: CantonGuide;
  mapSection: ReactNode;
  lang?: CantonGuideLanguage;
}

function OfferCta({ guide, lang, final = false }: { guide: CantonGuide; lang: CantonGuideLanguage; final?: boolean }) {
  const ui = cantonGuideUi[lang];
  return (
    <section className={final ? 'guide-final' : 'guide-cta-band'}>
      <div className="container-custom">
        <div className="guide-cta-box">
          <h2>{final ? ui.offer.finalTitle : ui.offer.compareTitle}</h2>
          <p>{final ? ui.offer.finalText : ui.offer.compareText}</p>
          <Link href={cantonGuideRequestHref(lang, guide)} className="guide-button">{ui.offer.button}</Link>
          <p className="guide-microcopy">{ui.offer.microcopy}</p>
        </div>
      </div>
    </section>
  );
}

function anchorLabel(id: string, title: string, lang: CantonGuideLanguage) {
  const ui = cantonGuideUi[lang];
  const labels: Record<string, string> = {
    kosten: ui.anchors.costs,
    foerderung: ui.anchors.funding,
    bewilligung: ui.anchors.permit,
    solarpflicht: ui.anchors.solarRequirement,
    dachsanierung: ui.anchors.roofRenovation,
    regelung: ui.anchors.rules,
  };
  return labels[id] ?? title.split(':')[0];
}

export default function CantonGuidePage({ guide, mapSection, lang = 'de' }: CantonGuidePageProps) {
  const ui = cantonGuideUi[lang];
  const isFinalGuide = finalGuideIds.includes(guide.id) || closingGuideIds.includes(guide.id);
  const isDossierGuide = isFinalGuide || ['luzern', 'neuenburg', 'nidwalden', 'obwalden', 'schaffhausen'].includes(guide.id);
  const hasRefinedProcess = ['freiburg', 'genf', 'glarus', 'graubunden', 'jura'].includes(guide.id);
  const sourceLabel = (ids: string[]) => {
    if (!ids.length) return null;
    return <small className="guide-source-links">{ui.sources}: {ids.map((id, index) => (
      <a key={id} href={`#quelle-${id}`} aria-label={ui.sourceAria(id)}>
        {guide.sources.findIndex(source => source.id === id) + 1}{index < ids.length - 1 ? ',' : ''}
      </a>
    ))}</small>;
  };

  return (
    <article data-canton-guide={guide.id} className={isDossierGuide ? 'dossier-guide' : undefined}>
      <GuideStyles />
      <GuideHero guide={guide} lang={lang} />

      <nav aria-label={ui.navigationLabel} className="guide-anchor-nav">
        <div className="container-custom">
          {guide.sections.map(section => (
            <a key={section.id} href={`#${section.id}`}>{anchorLabel(section.id, section.title, lang)}</a>
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
                    <GuideModule module={section.module} sourceLinks={sourceLabel} lang={lang} />
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
            {(isDossierGuide ? section.id === guide.ctaAfterSection : isCosts) && <OfferCta guide={guide} lang={lang} />}
          </div>
        );
      })}

      {isFinalGuide ? <NextGuideProcess lang={lang} /> : isDossierGuide ? null : hasRefinedProcess ? <NextGuideProcess lang={lang} /> : (
        <section className="guide-process">
          <div className="container-custom">
            <h2>{ui.process.title}</h2>
            <ol className="guide-process-list">
              {ui.process.steps.map((step, index) => (
                <li key={step.title}><b>{String(index + 1).padStart(2, '0')}</b><h3>{step.title}</h3><p>{step.text}</p></li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {isDossierGuide ? <div className="dossier-guide-map">{mapSection}</div> : mapSection}

      <section className="guide-faq">
        <div className="container-custom">
          <h2>{ui.faqTitle}</h2>
          <dl>{guide.faqs.map(faq => (
            <div key={faq.question}>
              <dt data-faq-question>{faq.question}</dt>
              <dd><span data-faq-answer>{faq.answer}</span></dd>
              {sourceLabel(faq.sourceIds)}
            </div>
          ))}</dl>
        </div>
      </section>

      {isDossierGuide && <OfferCta guide={guide} lang={lang} final />}

      <section className="guide-sources">
        <div className="container-custom">
          <h2>{ui.sourcesTitle}</h2>
          <p className="guide-answer-first">{isFinalGuide ? ui.dates.final : isDossierGuide ? ui.dates.dossier : ui.dates.standard}</p>
          <ul>{guide.sources.map(source => (
            <li id={`quelle-${source.id}`} key={source.id} className="scroll-mt-24">
              <span><b>{source.authority}</b><span>{source.title}</span></span>
              <a href={source.url} target="_blank" rel="noreferrer">{ui.officialSource}</a>
            </li>
          ))}</ul>
        </div>
      </section>

      {!isDossierGuide && <OfferCta guide={guide} lang={lang} final />}
      <FaqSchema faqs={guide.faqs} />
    </article>
  );
}