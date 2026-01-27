import { City } from '@/lib/cities';
import { CityContent } from '@/lib/city-content';
import SolarForm from '@/components/SolarForm';
import USPSection from '@/components/USPSection';
import TrustBadges from '@/components/TrustBadges';
import FAQ from '@/components/FAQ';
import RelatedCities from '@/components/RelatedCities';
import { Sun, MapPin, TrendingUp, CheckCircle, Zap, Euro, Award } from 'lucide-react';
import Image from 'next/image';

interface UniqueCityPageProps {
  city: City;
  content: CityContent;
  accentColor?: 'orange' | 'blue' | 'purple' | 'green' | 'red';
}

export default function UniqueCityPage({ city, content, accentColor = 'orange' }: UniqueCityPageProps) {
  // Color variants
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

  return (
    <>
      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${theme.gradient} section-padding`}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
              <Sun className={`w-4 h-4 ${theme.badgeBg}`} />
              <span className={`text-sm font-bold ${theme.badge}`}>
                {city.sunshineHours} {city.language === 'it' ? 'Ore di sole' : 'Sonnenstunden'} - {content.heroSubheadline}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {content.heroHeadline} –{' '}
              <span className={theme.heading}>{content.heroSubheadline}</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {content.heroDescription}
            </p>

            {/* City-specific Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className={`text-3xl font-bold ${theme.stats} mb-2`}>{city.sunshineHours || '1560'}</div>
                <div className="text-sm text-gray-600">
                  {city.language === 'it' ? 'Ore di sole/anno' : 'Sonnenstunden/Jahr'}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {city.language === 'it' ? 'Condizioni ottimali' : 'Optimale Bedingungen'}
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-green-600 mb-2">{content.pricing.roiYears}</div>
                <div className="text-sm text-gray-600">
                  {city.language === 'it' ? 'Anni di ammortamento' : 'Jahre Amortisation'}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {city.language === 'it' ? 'ROI rapido' : 'Schneller ROI'}
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-primary mb-2">45%</div>
                <div className="text-sm text-gray-600">
                  {city.language === 'it' ? 'Sussidi possibili' : 'Förderung möglich'}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {city.language === 'it' ? 'Confederazione + Cantone' : 'Bund + Kanton'}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  {city.language === 'it' ? 'Ditte certificate' : 'Geprüfte Fachbetriebe'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  {city.language === 'it' ? 'Installatori locali' : 'Lokale Solarteure'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  {city.language === 'it' ? 'Fino a 3 preventivi' : 'Bis zu 3 Offerten'}
                </span>
              </div>
            </div>

            <a href="#formular" className="btn-primary text-lg px-8 py-4">
              {city.language === 'it' ? 'Richiedi preventivo gratuito' : 'Jetzt kostenlose Offerte anfordern'}
            </a>
          </div>
        </div>
      </section>

      {/* Form Section immediately after Hero */}
      <section id="formular" className="section-padding bg-white pt-0">
        <div className="container-custom max-w-[500px]">
          <div className="card shadow-2xl border-2 border-primary/20 p-0 overflow-hidden">
            <div className="bg-gray-50/50 py-6 px-4 border-b border-gray-100">
              <div className="text-center">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                  {city.language === 'it' ? 'Ottieni i tuoi preventivi gratuiti' : 'Erhalten Sie Ihre kostenlosen Offerten'}
                </h2>
                <p className="text-sm text-gray-600">
                  {city.language === 'it' 
                    ? 'In soli 2 minuti - gratuito e senza impegno' 
                    : 'In nur 2 Minuten – kostenlos und unverbindlich'}
                </p>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <SolarForm />
            </div>
          </div>
        </div>
      </section>

      {/* Why Solar in City - UNIQUE CONTENT */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {city.language === 'it' ? 'Incentivi Solari in Svizzera: Come Funzionano' : 'Solarförderung in der Schweiz: So funktioniert es wirklich'}
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  {city.language === 'it' 
                    ? 'In Svizzera, l\'installazione di un impianto fotovoltaico è supportata da schemi di incentivi federali ufficiali progettati per ridurre significativamente i costi iniziali.' 
                    : 'In der Schweiz wird die Installation einer Photovoltaikanlage durch offizielle Bundesförderprogramme unterstützt, die die Investitionskosten deutlich senken.'}
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>{city.language === 'it' ? 'Copertura fino al 30% dei costi di investimento' : 'Abdeckung von bis zu 30% der Investitionskosten'}</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>{city.language === 'it' ? 'Rimunerazione unica pagata dopo la messa in servizio' : 'Einmalvergütung (EIV) nach Inbetriebnahme'}</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>{city.language === 'it' ? 'Bonus per altitudine e superfici inclinate' : 'Zusatzboni für Höhenlagen und steile Flächen'}</span>
                  </li>
                </ul>
                <p className="font-semibold text-gray-900">
                  {city.language === 'it' 
                    ? 'PVPro.ch ti aiuta a navigare tra incentivi, cantoni e offerte, connettendoti con installatori qualificati aggiornati sulle normative 2026.' 
                    : 'PVPro.ch hilft Ihnen, sich bei Förderungen, Kantonen und Offerten zurechtzufinden und verbindet Sie mit Fachpartnern, die auf dem neuesten Stand von 2026 sind.'}
                </p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col items-center text-center justify-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 relative">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 relative">
                {city.language === 'it' ? 'Incentivi 2026' : 'Förderung 2026'}
              </h3>
              <div className="space-y-4 relative">
                <p className="text-lg text-gray-600 font-medium">
                  {city.language === 'it' 
                    ? 'Risparmia fino al 30% immediatamente' 
                    : 'Sparen Sie bis zu 30% sofort'}
                </p>
                <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold text-sm">
                  {city.language === 'it' ? 'Pronovo EIV Disponibile' : 'Pronovo-EIV verfügbar'}
                </div>
                <p className="text-sm text-gray-500">
                  {city.language === 'it' 
                    ? 'Incentivi federali per nuovi impianti garantiti per tutto il 2026.' 
                    : 'Bundesförderung für Neuanlagen für das gesamte Jahr 2026 garantiert.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - UNIQUE */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            {city.language === 'it' ? `Costi impianto fotovoltaico a ${city.name}` : `Solaranlage Kosten in ${city.name}`}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-white">
              <div className="flex items-center gap-3 mb-4">
                <Euro className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-gray-900">
                  {city.language === 'it' ? 'Costi di investimento' : 'Investitionskosten'}
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-gray-600">
                      {city.language === 'it' ? 'Impianto 5 kWp (tipico)' : '5 kWp Anlage (typisch)'}
                    </span>
                    <span className="text-2xl font-bold text-gray-900">
                      {content.pricing.typical5kw.min.toLocaleString()}-{content.pricing.typical5kw.max.toLocaleString()} CHF
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-gray-600">
                      {city.language === 'it' ? 'Dopo i sussidi' : 'Nach Förderung'}
                    </span>
                    <span className="text-2xl font-bold text-green-600">
                      {content.pricing.afterSubsidy5kw.min.toLocaleString()}-{content.pricing.afterSubsidy5kw.max.toLocaleString()} CHF
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '28%' }}></div>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">
                      {city.language === 'it' ? 'Ammortamento' : 'Amortisation'}
                    </span>
                    <span className="text-xl font-bold text-primary">
                      {content.pricing.roiYears} {city.language === 'it' ? 'anni' : 'Jahre'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`card bg-gradient-to-br from-${accentColor}-50 to-yellow-50`}>
              <div className="flex items-center gap-3 mb-4">
                <Zap className={`w-8 h-8 ${theme.icon}`} />
                <h3 className="text-2xl font-bold text-gray-900">
                  {city.language === 'it' ? `Vantaggio ${city.name}` : `${city.name}-Vorteil`}
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-gray-900">
                      {city.language === 'it' ? 'Risparmia fino al 30%' : 'Bis 30% sparen'}
                    </div>
                    <div className="text-sm text-gray-600">
                      {city.language === 'it' ? 'Confrontando i preventivi' : 'Durch Offerten-Vergleich'}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-gray-900">
                      {city.language === 'it' ? 'Sussidi locali' : 'Lokale Förderung'}
                    </div>
                    <div className="text-sm text-gray-600">
                      {city.language === 'it' ? `Programmi Canton ${city.canton}` : `Kanton ${city.canton} Programme`}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-gray-900">
                      {city.language === 'it' ? 'Installatori esperti' : 'Erfahrene Installateure'}
                    </div>
                    <div className="text-sm text-gray-600">
                      {city.language === 'it' ? `Ditte certificate a ${city.name}` : `Geprüfte Betriebe in ${city.name}`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Installation Hero with Image */}
      <section className="relative section-padding bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-solar-panels.webp"
            alt={`Solaranlage Installation ${city.name}`}
            fill
            className="object-cover opacity-30"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/75 to-gray-900/90"></div>
        </div>

        <div className="container-custom max-w-4xl relative z-10">
          <div className="text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              {city.language === 'it' ? `Installazione professionale a ${city.name}` : `Professionelle Installation in ${city.name}`}
            </h2>
            <p className="text-xl text-white mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              {city.language === 'it' 
                ? `Installatori esperti a ${city.name} installano il tuo impianto su misura` 
                : `Erfahrene Solarteure aus ${city.name} installano Ihre massgeschneiderte Anlage`}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/30 hover:bg-white/20 hover:border-white/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">{city.sunshineHours}</div>
                <div className="text-sm text-white/90 font-medium">
                  {city.language === 'it' ? 'Ore di sole' : 'Sonnenstunden'}
                </div>
              </div>
              <div className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/30 hover:bg-white/20 hover:border-white/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">45%</div>
                <div className="text-sm text-white/90 font-medium">
                  {city.language === 'it' ? 'Sussidi' : 'Förderung'}
                </div>
              </div>
              <div className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/30 hover:bg-white/20 hover:border-white/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">{content.pricing.roiYears}</div>
                <div className="text-sm text-white/90 font-medium">
                  {city.language === 'it' ? 'Anni ROI' : 'Jahre ROI'}
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              {city.language === 'it' ? `Installatori a ${city.name} e dintorni` : `Solarteure in ${city.name} und Umgebung`}
            </h2>
            <p className="text-gray-600">
              {city.language === 'it' 
                ? `La nostra rete comprende ditte certificate in tutto il Canton ${city.canton}` 
                : `Unser Netzwerk umfasst geprüfte Fachbetriebe in der gesamten Region ${city.canton}`}
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
              title={`Karte von ${city.name}`}
            />
            <div className="absolute bottom-6 left-6 bg-white px-6 py-3 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <MapPin className={`w-5 h-5 ${theme.icon}`} />
                <span className="font-semibold text-gray-900 text-lg">{city.name}, {city.canton}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <USPSection />

      {/* Testimonial - UNIQUE */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className={`card bg-white shadow-lg`}>
            <div className="flex items-start gap-4">
              <div className={`w-16 h-16 bg-${accentColor}-600 rounded-full flex items-center justify-center flex-shrink-0`}>
                <span className="text-2xl font-bold text-white">{content.testimonial.initials}</span>
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
                  <div className="font-bold text-gray-900">{content.testimonial.name}</div>
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {city.language === 'it' 
              ? `Inizia ora il tuo progetto solare a ${city.name}!` 
              : `Starten Sie jetzt Ihr Solarprojekt in ${city.name}!`}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {city.language === 'it' 
              ? 'Gratuito, senza impegno e in soli 2 minuti' 
              : 'Kostenlos, unverbindlich und in nur 2 Minuten'}
          </p>
          <a href="#formular" className={`bg-white ${theme.ctaButton} hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block`}>
            {city.language === 'it' ? 'Richiedi preventivi' : 'Jetzt Offerte anfordern'}
          </a>
        </div>
      </section>
    </>
  );
}
