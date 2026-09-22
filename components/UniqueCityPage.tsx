'use client';

import { useState, useEffect } from 'react';
import { City } from '@/lib/cities';
import { CityContent } from '@/lib/city-content';
import { auditText, getCantonAuditPage } from '@/lib/canton-audit';
import {
  ECONOMIC_FACTS,
  SYSTEM_PRICE_NOTES,
  getSourceNote,
  formatRangeForLocale,
} from '@/lib/facts';
import Link from 'next/link';
import USPSection from '@/components/USPSection';
import FAQ from '@/components/FAQ';
import FaqSchema from '@/components/FaqSchema';
import RelatedCities from '@/components/RelatedCities';
import { Sun, MapPin, TrendingUp, CheckCircle, Zap, Euro, Award } from 'lucide-react';
import Image from 'next/image';
import CantonGuidePage from '@/components/CantonGuidePage';
import type { CantonGuide } from '@/lib/canton-guides/types';

interface UniqueCityPageProps {
  city: City;
  content: CityContent;
  accentColor?: 'orange' | 'blue' | 'purple' | 'green' | 'red';
  /**
   * Canton pages without verified local data use the same layout while
   * omitting the template's city-specific claims. The default remains the
   * original city-page rendering.
   */
  suppressUnsupportedClaims?: boolean;
  guide?: CantonGuide;
}

function t(lang: string, de: string, fr: string, it: string, en: string = de) {
  if (lang === 'fr') return fr;
  if (lang === 'it') return it;
  if (lang === 'en') return en;
  return de;
}

function getFormUrl(lang: string) {
  if (lang === 'fr') return '/fr/demande';
  if (lang === 'it') return '/it/richiesta';
  if (lang === 'en') return '/en/request';
  return '/anfrage';
}

export default function UniqueCityPage({
  city,
  content,
  accentColor = 'orange',
  suppressUnsupportedClaims = false,
  guide,
}: UniqueCityPageProps) {
  const lang = city.language;
  const factsLocale = lang === 'fr' || lang === 'it' || lang === 'en' ? lang : 'de';
  const audit = getCantonAuditPage(city.slug, city.language);
  const pageContent = audit ? { ...content, ...audit.content } : content;
  const showGenericClaims = !suppressUnsupportedClaims && !audit;
  const systemCost = ECONOMIC_FACTS.systemCosts.bySize[5];
  const payback = city.canton === 'TI' || city.canton === 'VS'
    ? ECONOMIC_FACTS.systemPaybackYears.ticinoValais
    : ECONOMIC_FACTS.systemPaybackYears.plateau;
  const paybackText = formatRangeForLocale(payback, '', factsLocale).trim();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const colors = {
    orange: {
      gradient: 'from-yellow-50 via-orange-50 to-primary-50',
      badge: 'text-orange-600',
      badgeBg: 'text-orange-500',
      heading: 'text-orange-600',
      stats: 'text-orange-600',
      cta: 'from-orange-500 to-yellow-500',
      ctaButton: 'text-orange-600',
      icon: 'text-orange-600',
    },
    blue: {
      gradient: 'from-blue-50 via-indigo-50 to-primary-50',
      badge: 'text-blue-600',
      badgeBg: 'text-blue-500',
      heading: 'text-blue-600',
      stats: 'text-blue-600',
      cta: 'from-blue-600 to-indigo-600',
      ctaButton: 'text-blue-600',
      icon: 'text-blue-600',
    },
    purple: {
      gradient: 'from-purple-50 via-pink-50 to-primary-50',
      badge: 'text-purple-600',
      badgeBg: 'text-purple-500',
      heading: 'text-purple-600',
      stats: 'text-purple-600',
      cta: 'from-purple-600 to-pink-600',
      ctaButton: 'text-purple-600',
      icon: 'text-purple-600',
    },
    green: {
      gradient: 'from-green-50 via-emerald-50 to-primary-50',
      badge: 'text-green-600',
      badgeBg: 'text-green-500',
      heading: 'text-green-600',
      stats: 'text-green-600',
      cta: 'from-green-600 to-emerald-600',
      ctaButton: 'text-green-600',
      icon: 'text-green-600',
    },
    red: {
      gradient: 'from-red-50 via-rose-50 to-primary-50',
      badge: 'text-red-600',
      badgeBg: 'text-red-500',
      heading: 'text-red-600',
      stats: 'text-red-600',
      cta: 'from-red-600 to-rose-600',
      ctaButton: 'text-red-600',
      icon: 'text-red-600',
    },
  };

  const theme = colors[accentColor];
  const formUrl = getFormUrl(lang);
  const mapCountry = guide || suppressUnsupportedClaims || Boolean(audit)
    ? lang === 'fr'
      ? 'Suisse'
      : lang === 'it'
        ? 'Svizzera'
        : lang === 'en'
          ? 'Switzerland'
          : 'Schweiz'
    : 'Schweiz';
  const mapSection = (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-sans font-semibold tracking-tight text-gray-900 mb-3">
            {guide
              ? t(lang, `Solarprojekt in ${guide.canton}`, `Projet solaire en ${guide.canton}`, `Progetto solare in ${guide.canton}`, `Solar project in ${guide.canton}`)
              : suppressUnsupportedClaims
              ? t(lang, `Solarprojekte: ${city.name}`, `Projets solaires : ${city.name}`, `Progetti solari: ${city.name}`, `Solar projects: ${city.name}`)
              : t(lang, `Solarteure in ${city.name} und Umgebung`, `Installateurs solaires à ${city.name} et alentours`, `Installatori a ${city.name} e dintorni`, `Solar installers in and around ${city.name}`)}
          </h2>
          <p className="text-gray-600">
            {guide
              ? t(lang, `Karte und Orientierung für Ihr Solarprojekt in ${guide.canton}.`, `Carte et repères pour votre projet solaire en ${guide.canton}.`, `Mappa e orientamento per il vostro progetto solare in ${guide.canton}.`, `Map and guidance for your solar project in ${guide.canton}.`)
              : suppressUnsupportedClaims
              ? t(lang, `Informationen zu Solarprojekten in ${city.name}.`, `Informations sur les projets solaires liés à ${city.name}.`, `Informazioni sui progetti solari legati a ${city.name}.`, `Information about solar projects related to ${city.name}.`)
              : t(lang, `Unser Netzwerk umfasst geprüfte Fachbetriebe in der gesamten Kanton ${city.canton}`, `Notre réseau comprend des entreprises certifiées dans toute le canton ${city.canton}`, `La nostra rete comprende ditte certificate in tutto il Canton ${city.canton}`, `Our network includes solar professionals across canton ${city.canton}`)}
          </p>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-xl h-[500px]">
          {mounted && (
            <iframe src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ''}&q=${encodeURIComponent((guide?.canton ?? city.name) + ', ' + mapCountry)}&zoom=10&language=${lang}`} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={t(lang, `Karte von ${guide?.canton ?? city.name}`, `Carte de ${guide?.canton ?? city.name}`, `Mappa di ${guide?.canton ?? city.name}`, `Map of ${guide?.canton ?? city.name}`)} />
          )}
          <div className="absolute bottom-6 left-6 bg-white px-6 py-3 rounded-lg shadow-lg"><div className="flex items-center gap-2"><MapPin className={`w-5 h-5 ${theme.icon}`} /><span className="font-sans font-bold text-gray-900 text-lg">{guide?.canton ?? `${city.name}, ${city.canton}`}</span></div></div>
        </div>
      </div>
    </section>
  );

  if (guide) return <CantonGuidePage guide={guide} mapSection={mapSection} lang={lang} />;

  return (
    <>
      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${theme.gradient} section-padding`}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-semibold tracking-tight text-gray-900 mb-6 leading-tight">
              {pageContent.heroHeadline} –{' '}
              <span className={theme.heading}>{pageContent.heroSubheadline}</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {pageContent.heroDescription}
            </p>

            {/* City-specific Stats */}
            {showGenericClaims && <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-sans font-semibold tracking-tight text-green-600 mb-2">{paybackText}</div>
                <div className="text-sm text-gray-600">{t(lang, 'Jahre Amortisation', "Ans d'amortissement", 'Anni di ammortamento', 'Payback period')}</div>
                <div className="text-xs text-gray-500 mt-1">{t(lang, 'Schneller ROI', 'Retour rapide', 'ROI rapido', 'Faster ROI')}</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-sans font-semibold tracking-tight text-primary mb-2">Pronovo</div>
                <div className="text-sm text-gray-600">{t(lang, 'Bundesförderung prüfen', 'Vérifier l’aide fédérale', 'Verifica l’incentivo federale', 'Check federal support')}</div>
                <div className="text-xs text-gray-500 mt-1">{t(lang, 'Projektabhängig', 'Selon le projet', 'In base al progetto', 'Project dependent')}</div>
              </div>
            </div>}
            {showGenericClaims && <p className="mb-8 text-xs text-gray-500">{getSourceNote(factsLocale)}</p>}

            {showGenericClaims && <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{t(lang, 'Geprüfte Fachbetriebe', 'Installateurs certifiés', 'Ditte certificate', 'Verified installers')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{t(lang, 'Lokale Solarteure', 'Installateurs locaux', 'Installatori locali', 'Local installers')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{t(lang, 'Bis zu 3 Offerten', "Jusqu'à 3 offres", 'Fino a 3 preventivi', 'Up to 3 quotes')}</span>
              </div>
            </div>}

            <Link href={formUrl} className="btn-primary text-lg px-8 py-4 inline-block">
              {t(lang, 'Jetzt kostenlose Offerte anfordern', 'Demander une offre gratuite', 'Richiedi preventivo gratuito', 'Request a free quote')}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Solar in City - UNIQUE CONTENT */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-gray-900 mb-4 text-center">
            {pageContent.whySolarTitle}
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            {pageContent.whySolarIntro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pageContent.whySolarReasons.map((reason, index) => (
              <div key={index} className="card hover:shadow-xl transition-shadow bg-white">
                <div className={`w-12 h-12 bg-${accentColor}-50 rounded-lg flex items-center justify-center mb-4`}>
                  {index === 0 && <Sun className={`w-6 h-6 ${theme.icon}`} />}
                  {index === 1 && <TrendingUp className="w-6 h-6 text-green-600" />}
                  {index === 2 && <Award className="w-6 h-6 text-primary" />}
                </div>
                <h3 className="text-xl font-sans font-semibold tracking-tight text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {audit && (
        <section className="section-padding bg-white" aria-labelledby="audited-canton-data">
          <div className="container-custom max-w-6xl">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                {t(lang, 'Geprüfte kantonale Angaben', 'Informations cantonales vérifiées', 'Dati cantonali verificati', 'Verified cantonal information')}
              </p>
              <h2 id="audited-canton-data" className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-gray-900 mb-4">
                {t(lang, 'Förderung, Regeln und Zuständigkeit', 'Aides, règles et compétence', 'Incentivi, regole e competenze', 'Support, rules and responsibility')}
              </h2>
              <p className="text-gray-600">
                {t(lang,
                  'Die folgenden Angaben wurden am 11. September 2026 anhand offizieller Quellen geprüft. Beträge sind nur zusammen mit Zuständigkeit, Voraussetzungen und Zeitpunkt zu lesen.',
                  'Les informations suivantes ont été vérifiées le 11 septembre 2026 auprès de sources officielles. Les montants doivent être lus avec leur compétence, leurs conditions et leur date.',
                  'I dati seguenti sono stati verificati l’11 settembre 2026 su fonti ufficiali. Gli importi vanno letti insieme a competenza, requisiti e data.',
                  'The following information was checked on 11 September 2026 against official sources. Amounts must be read together with the responsible authority, eligibility and timing.'
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {audit.records.map((record) => (
                <article
                  key={`${record.jurisdiction_name}-${record.name}-${record.effective_from}`}
                  className={`rounded-2xl border p-6 ${record.future ? 'border-amber-200 bg-amber-50/60' : 'border-gray-200 bg-gray-50'}`}
                >
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                      {record.jurisdiction_name}
                    </span>
                    {record.future && (
                      <span className="text-xs font-semibold rounded-full bg-amber-100 text-amber-800 px-2 py-1">
                        {t(lang, 'Ab 2027', 'Dès 2027', 'Dal 2027', 'From 2027')}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-sans font-semibold tracking-tight text-gray-900 mb-2">{record.name}</h3>
                  <p className="text-gray-700 mb-4">{auditText(record.amount_label, lang)}</p>
                  <dl className="space-y-2 text-sm text-gray-600">
                    <div>
                      <dt className="inline font-semibold text-gray-800">{t(lang, 'Voraussetzungen: ', 'Conditions : ', 'Requisiti: ', 'Eligibility: ')}</dt>
                      <dd className="inline">{auditText(record.eligibility, lang)}</dd>
                    </div>
                    <div>
                      <dt className="inline font-semibold text-gray-800">{t(lang, 'Zeitpunkt: ', 'Moment : ', 'Tempistica: ', 'Timing: ')}</dt>
                      <dd className="inline">{auditText(record.timing, lang)}</dd>
                    </div>
                    <div>
                      <dt className="inline font-semibold text-gray-800">{t(lang, 'Gültig ab: ', 'Valable dès : ', 'Valido dal: ', 'Effective from: ')}</dt>
                      <dd className="inline">{record.effective_from}</dd>
                    </div>
                  </dl>
                  <a
                    href={record.source_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex mt-4 text-sm font-semibold text-primary hover:underline"
                  >
                    {t(lang, 'Offizielle Quelle öffnen', 'Ouvrir la source officielle', 'Apri la fonte ufficiale', 'Open official source')}
                  </a>
                  <p className="text-xs text-gray-500 mt-2">
                    {t(lang, 'Quelle geprüft am ', 'Source vérifiée le ', 'Fonte verificata il ', 'Source checked on ')}
                    {record.source_checked_at}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Incentives Section */}
      {showGenericClaims && <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-gray-900 mb-6">
                {t(lang,
                  'Solarförderung in der Schweiz: So funktioniert es wirklich',
                  "Aides solaires en Suisse: comment ça marche vraiment",
                  "Incentivi fotovoltaico in Svizzera: Come Funzionano",
                  'Solar support in Switzerland: how it works'
                )}
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  {t(lang,
                    'In der Schweiz wird die Installation einer Photovoltaikanlage durch offizielle Bundesförderprogramme unterstützt, die die Investitionskosten deutlich senken.',
                    "En Suisse, l'installation de panneaux photovoltaïques est soutenue par des programmes fédéraux qui réduisent significativement les coûts.",
                    "In Svizzera, l'installazione di un impianto fotovoltaico è supportata da programmi di incentivi federali che riducono i costi iniziali.",
                    'In Switzerland, photovoltaic installations are supported by official federal programmes that can reduce initial investment costs.'
                  )}
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>{t(lang,
                      'Einmalvergütung des Bundes über Pronovo – Berechnung und Voraussetzungen sind projektabhängig.',
                      'Rétribution unique fédérale via Pronovo – calcul et conditions selon le projet.',
                      'Rimunerazione unica federale tramite Pronovo – calcolo e requisiti dipendono dal progetto.',
                      'Federal one-off payment via Pronovo – calculation and eligibility depend on the project.'
                    )}</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>{t(lang,
                      'Einmalvergütung (EIV) nach Inbetriebnahme',
                      'Rétribution unique (RU) versée après la mise en service',
                      'Rimunerazione unica (RU) pagata dopo la messa in servizio',
                      'One-off remuneration (EIV) after commissioning'
                    )}</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>{t(lang,
                      'Mögliche kantonale Zusatzförderung',
                      'Aides cantonales possibles selon situation',
                      'Eventuali contributi cantonali aggiuntivi',
                      'Possible additional cantonal support'
                    )}</span>
                  </li>
                </ul>
                <p className="font-sans font-bold text-gray-900">
                  {t(lang,
                    'PvPro.ch hilft Ihnen, sich bei Förderungen, Kantonen und Offerten zurechtzufinden und verbindet Sie mit Fachpartnern, die auf dem neuesten Stand von 2026 sind.',
                    "PvPro.ch vous aide à naviguer parmi les aides, cantons et offres et vous met en contact avec des partenaires certifiés à jour en 2026.",
                    'PvPro.ch ti aiuta a navigare tra incentivi, cantoni e offerte, connettendoti con installatori qualificati aggiornati sulle normative 2026.',
                    'PvPro.ch helps you navigate support, cantonal requirements and quotes, connecting you with qualified partners familiar with current rules.'
                  )}
                </p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col items-center text-center justify-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 relative">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-sans font-semibold tracking-tight text-gray-900 mb-4 relative">
                 {t(lang, 'Förderung 2026', 'Aides 2026', 'Incentivi 2026', 'Support in 2026')}
              </h3>
              <div className="space-y-4 relative">
                <p className="text-lg text-gray-600 font-medium">
                   {t(lang,
                     'Einmalvergütung prüfen',
                     'Vérifier la rétribution unique',
                     'Verifica la rimunerazione unica',
                     'Check one-off support'
                   )}
                </p>
                <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-sans font-semibold tracking-tight text-sm">
                   {t(lang, 'Pronovo-EIV verfügbar', 'Pronovo RU disponible', 'Pronovo EIV Disponibile', 'Pronovo EIV available')}
                </div>
                 <p className="text-sm text-gray-500">
                   {t(lang,
                     'Betrag und Anspruch bei Pronovo anhand der aktuellen Projektdaten prüfen.',
                     'Vérifiez le montant et le droit auprès de Pronovo avec les données actuelles du projet.',
                     'Verifica importo e diritto presso Pronovo con i dati aggiornati del progetto.',
                     'Check the amount and eligibility with Pronovo using current project details.'
                   )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>}

      {/* Pricing Section - UNIQUE */}
      {showGenericClaims && <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-gray-900 mb-12 text-center">
            {t(lang,
               `Solaranlage Kosten in ${city.name}`,
               `Coût d'une installation solaire à ${city.name}`,
               `Costi impianto fotovoltaico a ${city.name}`,
               `Solar installation costs in ${city.name}`
            )}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-white">
              <div className="flex items-center gap-3 mb-4">
                <Euro className="w-8 h-8 text-primary" />
                   <h3 className="text-2xl font-sans font-semibold tracking-tight text-gray-900">
                   {t(lang, 'Investitionskosten', "Coûts d'investissement", 'Costi di investimento', 'Investment costs')}
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-gray-600">
                       {t(lang, '5 kWp Anlage (typisch)', 'Installation 5 kWc (typique)', 'Impianto 5 kWp (tipico)', '5 kWp installation (typical)')}
                    </span>
                    <span className="text-2xl font-sans font-semibold tracking-tight text-gray-900">
                      {formatRangeForLocale(systemCost, 'CHF', factsLocale)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-gray-600">
                       {t(lang, 'Richtwerte', 'Valeurs indicatives', 'Valori indicativi', 'Indicative values')}
                    </span>
                    <span className="text-sm text-gray-600 text-right max-w-[18rem]">
                      {getSourceNote(factsLocale)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">{SYSTEM_PRICE_NOTES[factsLocale]}</p>
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-sans font-bold">
                       {t(lang, 'Amortisation', 'Amortissement', 'Ammortamento', 'Payback period')}
                    </span>
                    <span className="text-xl font-sans font-semibold tracking-tight text-primary">
                       {paybackText} {t(lang, 'Jahre', 'ans', 'anni', 'years')}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`card bg-gradient-to-br from-${accentColor}-50 to-yellow-50`}>
              <div className="flex items-center gap-3 mb-4">
                <Zap className={`w-8 h-8 ${theme.icon}`} />
                <h3 className="text-2xl font-sans font-semibold tracking-tight text-gray-900">
                   {t(lang, `${city.name}-Vorteil`, `Avantage ${city.name}`, `Vantaggio ${city.name}`, `${city.name} advantage`)}
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-sans font-semibold tracking-tight text-gray-900">
                        {t(lang, 'Kosten vergleichen', 'Comparer les coûts', 'Confrontare i costi', 'Compare costs')}
                    </div>
                    <div className="text-sm text-gray-600">
                       {t(lang, 'Durch Offerten-Vergleich', 'En comparant les offres', 'Confrontando i preventivi', 'By comparing quotes')}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-sans font-semibold tracking-tight text-gray-900">
                       {t(lang, 'Lokale Förderung', 'Subventions locales', 'Sussidi locali', 'Local support')}
                    </div>
                    <div className="text-sm text-gray-600">
                       {t(lang, `Kanton ${city.canton} Programme`, `Programmes Canton ${city.canton}`, `Programmi Canton ${city.canton}`, `Canton ${city.canton} programmes`)}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-sans font-semibold tracking-tight text-gray-900">
                       {t(lang, 'Erfahrene Installateure', 'Installateurs expérimentés', 'Installatori esperti', 'Experienced installers')}
                    </div>
                    <div className="text-sm text-gray-600">
                       {t(lang, `Geprüfte Betriebe in ${city.name}`, `Entreprises certifiées à ${city.name}`, `Ditte certificate a ${city.name}`, `Verified businesses in ${city.name}`)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>}

      {/* Unique Canton Image Section */}
      {showGenericClaims && <section className="relative section-padding bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
           <Image
            src={pageContent.image}
             alt={t(lang, `Solaranlage Installation ${city.name}`, `Installation solaire ${city.name}`, `Impianto fotovoltaico ${city.name}`, `Solar installation ${city.name}`)}
            fill
            sizes="100vw"
            loading="lazy"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/75 to-gray-900/90"></div>
        </div>

        <div className="container-custom max-w-4xl relative z-10">
          <div className="text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight mb-4 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              {t(lang,
                `Professionelle Installation in ${city.name}`,
                `Installation professionnelle à ${city.name}`,
                `Installazione professionale a ${city.name}`,
                `Professional installation in ${city.name}`
              )}
            </h2>
            <p className="text-xl text-white mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              {t(lang,
                `Erfahrene Solarteure aus dem Kanton ${city.canton} installieren Ihre massgeschneiderte Anlage`,
                `Des installateurs expérimentés du canton ${city.canton} réalisent votre installation sur mesure`,
                `Installatori esperti a ${city.name} installano il tuo impianto su misura`,
                `Experienced installers in canton ${city.canton} create your tailored system`
              )}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/30 hover:bg-white/20 hover:border-white/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl font-sans font-semibold tracking-tight text-white mb-2 drop-shadow-lg">Pronovo</div>
                <div className="text-sm text-white/90 font-medium">
                   {t(lang, 'Bundesförderung', 'Aide fédérale', 'Incentivo federale', 'Federal support')}
                </div>
              </div>
              <div className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/30 hover:bg-white/20 hover:border-white/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                 <div className="text-4xl font-sans font-semibold tracking-tight text-white mb-2 drop-shadow-lg">{paybackText}</div>
                <div className="text-sm text-white/90 font-medium">
                   {t(lang, 'Jahre ROI', 'Ans ROI', 'Anni ROI', 'Years to ROI')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>}

      {mapSection}

       {showGenericClaims && <USPSection lang={lang} />}

       <FAQ items={pageContent.faqs} notes={!suppressUnsupportedClaims && !audit} />
       <FaqSchema faqs={pageContent.faqs} />

       {showGenericClaims && <RelatedCities currentCitySlug={pageContent.slug} currentCanton={city.canton} lang={lang} />}

      {/* Final CTA */}
      <section className={`section-padding bg-gradient-to-r ${theme.cta} text-white`}>
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight mb-4">
            {t(lang,
              `Starten Sie jetzt Ihr Solarprojekt in ${city.name}!`,
              `Lancez votre projet solaire à ${city.name} maintenant !`,
              `Inizia ora il tuo progetto solare in ${city.name}!`,
              `Start your solar project in ${city.name} now!`
            )}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {suppressUnsupportedClaims
              ? t(lang,
                'Informieren Sie sich unverbindlich über Ihr Solarprojekt.',
                'Informez-vous sans engagement sur votre projet solaire.',
                'Informati senza impegno sul tuo progetto solare.',
                'Learn about your solar project with no obligation.'
              )
              : t(lang,
                'Kostenlos, unverbindlich und in nur 2 Minuten',
                'Gratuit, sans engagement et en seulement 2 minutes',
                'Gratuito, senza impegno e in soli 2 minuti',
                'Free, with no obligation and in just 2 minutes'
              )}
          </p>
          <Link
            href={formUrl}
            className={`bg-white ${theme.ctaButton} hover:bg-gray-100 font-sans font-bold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block`}
          >
            {t(lang, 'Jetzt Offerte anfordern', 'Demander une offre', 'Richiedi preventivi', 'Request quotes now')}
          </Link>
        </div>
      </section>
    </>
  );
}
