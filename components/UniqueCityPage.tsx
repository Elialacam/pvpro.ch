'use client';

import { City } from '@/lib/cities';
import { CityContent } from '@/lib/city-content';
import Link from 'next/link';
import USPSection from '@/components/USPSection';
import FAQ from '@/components/FAQ';
import RelatedCities from '@/components/RelatedCities';
import { Sun, MapPin, TrendingUp, CheckCircle, Zap, Euro, Award } from 'lucide-react';
import Image from 'next/image';

interface UniqueCityPageProps {
  city: City;
  content: CityContent;
  accentColor?: 'orange' | 'blue' | 'purple' | 'green' | 'red';
}

function t(lang: string, de: string, fr: string, it: string) {
  if (lang === 'fr') return fr;
  if (lang === 'it') return it;
  return de;
}

function getFormUrl(lang: string) {
  if (lang === 'fr') return '/fr/demande';
  if (lang === 'it') return '/it/richiesta';
  return '/anfrage';
}

export default function UniqueCityPage({ city, content, accentColor = 'orange' }: UniqueCityPageProps) {
  const lang = city.language;

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

  return (
    <>
      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${theme.gradient} section-padding`}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
              <Sun className={`w-4 h-4 ${theme.badgeBg}`} />
              <span className={`text-sm font-sans font-semibold tracking-tight ${theme.badge}`}>
                {city.sunshineHours} {t(lang, 'Sonnenstunden', 'heures de soleil', 'Ore di sole')} — {content.heroSubheadline}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-semibold tracking-tight text-gray-900 mb-6 leading-tight">
              {content.heroHeadline} –{' '}
              <span className={theme.heading}>{content.heroSubheadline}</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {content.heroDescription}
            </p>

            {/* City-specific Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className={`text-3xl font-sans font-semibold tracking-tight ${theme.stats} mb-2`}>{city.sunshineHours}</div>
                <div className="text-sm text-gray-600">{t(lang, 'Sonnenstunden/Jahr', 'Heures de soleil/an', 'Ore di sole/anno')}</div>
                <div className="text-xs text-gray-500 mt-1">{t(lang, 'Optimale Bedingungen', 'Conditions optimales', 'Condizioni ottimali')}</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-sans font-semibold tracking-tight text-green-600 mb-2">{content.pricing.roiYears}</div>
                <div className="text-sm text-gray-600">{t(lang, 'Jahre Amortisation', "Ans d'amortissement", 'Anni di ammortamento')}</div>
                <div className="text-xs text-gray-500 mt-1">{t(lang, 'Schneller ROI', 'Retour rapide', 'ROI rapido')}</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-sans font-semibold tracking-tight text-primary mb-2">45%</div>
                <div className="text-sm text-gray-600">{t(lang, 'Förderung möglich', 'Aides possibles', 'Sussidi possibili')}</div>
                <div className="text-xs text-gray-500 mt-1">{t(lang, 'Bund + Kanton', 'Confédération + Canton', 'Confederazione + Cantone')}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{t(lang, 'Geprüfte Fachbetriebe', 'Installateurs certifiés', 'Ditte certificate')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{t(lang, 'Lokale Solarteure', 'Installateurs locaux', 'Installatori locali')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{t(lang, 'Bis zu 3 Offerten', "Jusqu'à 3 offres", 'Fino a 3 preventivi')}</span>
              </div>
            </div>

            <Link href={formUrl} className="btn-primary text-lg px-8 py-4 inline-block">
              {t(lang, 'Jetzt kostenlose Offerte anfordern', 'Demander une offre gratuite', 'Richiedi preventivo gratuito')}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Solar in City - UNIQUE CONTENT */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-gray-900 mb-4 text-center">
            {content.whySolarTitle}
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            {content.whySolarIntro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.whySolarReasons.map((reason, index) => (
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

      {/* Incentives Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-gray-900 mb-6">
                {t(lang,
                  'Solarförderung in der Schweiz: So funktioniert es wirklich',
                  "Aides solaires en Suisse: comment ça marche vraiment",
                  "Incentivi fotovoltaico in Svizzera: Come Funzionano"
                )}
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  {t(lang,
                    'In der Schweiz wird die Installation einer Photovoltaikanlage durch offizielle Bundesförderprogramme unterstützt, die die Investitionskosten deutlich senken.',
                    "En Suisse, l'installation de panneaux photovoltaïques est soutenue par des programmes fédéraux qui réduisent significativement les coûts.",
                    "In Svizzera, l'installazione di un impianto fotovoltaico è supportata da programmi di incentivi federali che riducono i costi iniziali."
                  )}
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>{t(lang,
                      'Abdeckung von bis zu 30% der Investitionskosten',
                      "Couverture jusqu'à 30% des coûts d'investissement",
                      'Copertura fino al 30% dei costi di investimento'
                    )}</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>{t(lang,
                      'Einmalvergütung (EIV) nach Inbetriebnahme',
                      'Rétribution unique (RU) versée après la mise en service',
                      'Rimunerazione unica (RU) pagata dopo la messa in servizio'
                    )}</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>{t(lang,
                      'Zusatzboni für Höhenlagen und steile Flächen',
                      'Bonus supplémentaires pour les toits en pente et en altitude',
                      'Bonus per altitudine e superfici inclinate'
                    )}</span>
                  </li>
                </ul>
                <p className="font-sans font-bold text-gray-900">
                  {t(lang,
                    'PVPro.ch hilft Ihnen, sich bei Förderungen, Kantonen und Offerten zurechtzufinden und verbindet Sie mit Fachpartnern, die auf dem neuesten Stand von 2026 sind.',
                    "PVPro.ch vous aide à naviguer parmi les aides, cantons et offres et vous met en contact avec des partenaires certifiés à jour en 2026.",
                    'PVPro.ch ti aiuta a navigare tra incentivi, cantoni e offerte, connettendoti con installatori qualificati aggiornati sulle normative 2026.'
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
                {t(lang, 'Förderung 2026', 'Aides 2026', 'Incentivi 2026')}
              </h3>
              <div className="space-y-4 relative">
                <p className="text-lg text-gray-600 font-medium">
                  {t(lang, 'Sparen Sie bis zu 30% sofort', "Économisez jusqu'à 30% immédiatement", 'Risparmia fino al 30% immediatamente')}
                </p>
                <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-sans font-semibold tracking-tight text-sm">
                  {t(lang, 'Pronovo-EIV verfügbar', 'Pronovo RU disponible', 'Pronovo EIV Disponibile')}
                </div>
                <p className="text-sm text-gray-500">
                  {t(lang,
                    'Bundesförderung für Neuanlagen für das gesamte Jahr 2026 garantiert.',
                    "Subvention fédérale pour nouvelles installations garantie pour toute l'année 2026.",
                    'Incentivi federali per nuovi impianti garantiti per tutto il 2026.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - UNIQUE */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-gray-900 mb-12 text-center">
            {t(lang,
              `Solaranlage Kosten in ${city.name}`,
              `Coût d'une installation solaire à ${city.name}`,
              `Costi impianto fotovoltaico a ${city.name}`
            )}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-white">
              <div className="flex items-center gap-3 mb-4">
                <Euro className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-sans font-semibold tracking-tight text-gray-900">
                  {t(lang, 'Investitionskosten', "Coûts d'investissement", 'Costi di investimento')}
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-gray-600">
                      {t(lang, '5 kWp Anlage (typisch)', 'Installation 5 kWc (typique)', 'Impianto 5 kWp (tipico)')}
                    </span>
                    <span className="text-2xl font-sans font-semibold tracking-tight text-gray-900">
                      {content.pricing.typical5kw.min.toLocaleString()}–{content.pricing.typical5kw.max.toLocaleString()} CHF
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-gray-600">
                      {t(lang, 'Nach Förderung', 'Après subventions', 'Dopo i sussidi')}
                    </span>
                    <span className="text-2xl font-sans font-semibold tracking-tight text-green-600">
                      {content.pricing.afterSubsidy5kw.min.toLocaleString()}–{content.pricing.afterSubsidy5kw.max.toLocaleString()} CHF
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '28%' }}></div>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-sans font-bold">
                      {t(lang, 'Amortisation', 'Amortissement', 'Ammortamento')}
                    </span>
                    <span className="text-xl font-sans font-semibold tracking-tight text-primary">
                      {content.pricing.roiYears} {t(lang, 'Jahre', 'ans', 'anni')}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`card bg-gradient-to-br from-${accentColor}-50 to-yellow-50`}>
              <div className="flex items-center gap-3 mb-4">
                <Zap className={`w-8 h-8 ${theme.icon}`} />
                <h3 className="text-2xl font-sans font-semibold tracking-tight text-gray-900">
                  {t(lang, `${city.name}-Vorteil`, `Avantage ${city.name}`, `Vantaggio ${city.name}`)}
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-sans font-semibold tracking-tight text-gray-900">
                      {t(lang, 'Bis 30% sparen', "Jusqu'à 30% d'économies", 'Risparmia fino al 30%')}
                    </div>
                    <div className="text-sm text-gray-600">
                      {t(lang, 'Durch Offerten-Vergleich', 'En comparant les offres', 'Confrontando i preventivi')}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-sans font-semibold tracking-tight text-gray-900">
                      {t(lang, 'Lokale Förderung', 'Subventions locales', 'Sussidi locali')}
                    </div>
                    <div className="text-sm text-gray-600">
                      {t(lang, `Kanton ${city.canton} Programme`, `Programmes Canton ${city.canton}`, `Programmi Canton ${city.canton}`)}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-sans font-semibold tracking-tight text-gray-900">
                      {t(lang, 'Erfahrene Installateure', 'Installateurs expérimentés', 'Installatori esperti')}
                    </div>
                    <div className="text-sm text-gray-600">
                      {t(lang, `Geprüfte Betriebe in ${city.name}`, `Entreprises certifiées à ${city.name}`, `Ditte certificate a ${city.name}`)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Canton Image Section */}
      <section className="relative section-padding bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={content.image}
            alt={t(lang, `Solaranlage Installation ${city.name}`, `Installation solaire ${city.name}`, `Impianto fotovoltaico ${city.name}`)}
            fill
            className="object-cover opacity-30"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/75 to-gray-900/90"></div>
        </div>

        <div className="container-custom max-w-4xl relative z-10">
          <div className="text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight mb-4 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              {t(lang,
                `Professionelle Installation in ${city.name}`,
                `Installation professionnelle à ${city.name}`,
                `Installazione professionale a ${city.name}`
              )}
            </h2>
            <p className="text-xl text-white mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              {t(lang,
                `Erfahrene Solarteure aus der Region ${city.canton} installieren Ihre massgeschneiderte Anlage`,
                `Des installateurs expérimentés de la région ${city.canton} réalisent votre installation sur mesure`,
                `Installatori esperti a ${city.name} installano il tuo impianto su misura`
              )}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/30 hover:bg-white/20 hover:border-white/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl font-sans font-semibold tracking-tight text-white mb-2 drop-shadow-lg">{city.sunshineHours}</div>
                <div className="text-sm text-white/90 font-medium">
                  {t(lang, 'Sonnenstunden', 'Heures de soleil', 'Ore di sole')}
                </div>
              </div>
              <div className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/30 hover:bg-white/20 hover:border-white/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl font-sans font-semibold tracking-tight text-white mb-2 drop-shadow-lg">45%</div>
                <div className="text-sm text-white/90 font-medium">
                  {t(lang, 'Förderung', 'Subventions', 'Sussidi')}
                </div>
              </div>
              <div className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/30 hover:bg-white/20 hover:border-white/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl font-sans font-semibold tracking-tight text-white mb-2 drop-shadow-lg">{content.pricing.roiYears}</div>
                <div className="text-sm text-white/90 font-medium">
                  {t(lang, 'Jahre ROI', 'Ans ROI', 'Anni ROI')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-sans font-semibold tracking-tight text-gray-900 mb-3">
              {t(lang,
                `Solarteure in ${city.name} und Umgebung`,
                `Installateurs solaires à ${city.name} et alentours`,
                `Installatori a ${city.name} e dintorni`
              )}
            </h2>
            <p className="text-gray-600">
              {t(lang,
                `Unser Netzwerk umfasst geprüfte Fachbetriebe in der gesamten Region ${city.canton}`,
                `Notre réseau comprend des entreprises certifiées dans toute la région ${city.canton}`,
                `La nostra rete comprende ditte certificate in tutto il Canton ${city.canton}`
              )}
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl h-[500px]">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDQF_fL_qx_1QZVlvJFNRl5ETBhjcJOFAE&q=${encodeURIComponent(city.name + ', Schweiz')}&zoom=10`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t(lang, `Karte von ${city.name}`, `Carte de ${city.name}`, `Mappa di ${city.name}`)}
            />
            <div className="absolute bottom-6 left-6 bg-white px-6 py-3 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <MapPin className={`w-5 h-5 ${theme.icon}`} />
                <span className="font-sans font-bold text-gray-900 text-lg">{city.name}, {city.canton}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <USPSection />

      {/* Testimonial - UNIQUE */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="card bg-white shadow-lg">
            <div className="flex items-start gap-4">
              <div className={`w-16 h-16 bg-${accentColor}-600 rounded-full flex items-center justify-center flex-shrink-0`}>
                <span className="text-2xl font-sans font-semibold tracking-tight text-white">{content.testimonial.initials}</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 italic text-lg">
                  "{content.testimonial.quote}"
                </p>
                <div>
                  <div className="font-sans font-semibold tracking-tight text-gray-900">{content.testimonial.name}</div>
                  <div className="text-sm text-gray-600">{city.name}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={content.faqs} />

      <RelatedCities currentCitySlug={content.slug} currentCanton={city.canton} />

      {/* Final CTA */}
      <section className={`section-padding bg-gradient-to-r ${theme.cta} text-white`}>
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight mb-4">
            {t(lang,
              `Starten Sie jetzt Ihr Solarprojekt in ${city.name}!`,
              `Lancez votre projet solaire à ${city.name} maintenant !`,
              `Inizia ora il tuo progetto solare a ${city.name}!`
            )}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t(lang,
              'Kostenlos, unverbindlich und in nur 2 Minuten',
              'Gratuit, sans engagement et en seulement 2 minutes',
              'Gratuito, senza impegno e in soli 2 minuti'
            )}
          </p>
          <Link
            href={formUrl}
            className={`bg-white ${theme.ctaButton} hover:bg-gray-100 font-sans font-bold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block`}
          >
            {t(lang, 'Jetzt Offerte anfordern', 'Demander une offre', 'Richiedi preventivi')}
          </Link>
        </div>
      </section>
    </>
  );
}
