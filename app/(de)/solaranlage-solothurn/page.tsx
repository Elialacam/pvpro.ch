import { Metadata } from 'next';
import { getCityBySlug, getAllCitySlugs, City } from '@/lib/cities';
import { notFound } from 'next/navigation';
import FormContainer from '@/components/MultiStepForm/FormContainer';
import USPSection from '@/components/USPSection';
import TrustBadges from '@/components/TrustBadges';
import FAQ from '@/components/FAQ';
import RelatedCities from '@/components/RelatedCities';
import { Sun, MapPin, TrendingUp, CheckCircle } from 'lucide-react';
import Image from 'next/image';

// Force static rendering
export const dynamic = 'force-static';
export const revalidate = false;

interface PageProps {
  params: {
    city: string;
  };
}

// Generate static params for all cities at build time
export async function generateStaticParams() {
  const slugs = getAllCitySlugs();
  return slugs.map((slug) => ({
    city: slug,
  }));
}

// Force static generation for all city pages
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = getCityBySlug('solothurn');

  if (!city) {
    return {
      title: 'Stadt nicht gefunden',
    };
  }

  return {
    title: `Solaranlage ${city.name} ${city.canton} - Photovoltaik Offerte vergleichen`,
    description: `Solaranlage ${city.name}: Kostenlos Offerten von geprüften Solarteure vergleichen. ${city.sunshineHours ? `${city.sunshineHours} Sonnenstunden/Jahr` : 'Ideale Bedingungen'}. Bis zu 30% sparen, 100% unverbindlich.`,
    keywords: [
      `Solaranlage ${city.name}`,
      `Photovoltaik ${city.name}`,
      `Solarteur ${city.name}`,
      `Solaranlage Kosten ${city.name}`,
      `Solaranlage ${city.canton}`,
      `PV Anlage ${city.name}`,
      `Photovoltaik Offerte ${city.name}`,
      `Solaranlage mit Speicher ${city.name}`,
      `Solar Schweiz ${city.canton}`,
    ],
    alternates: {
      canonical: `https://pvpro.ch/solaranlage-${'solothurn'}`,
    },
    openGraph: {
      title: `Solaranlage ${city.name} - Photovoltaik Offerte vergleichen`,
      description: `Kostenlos Solaranlagen-Angebote in ${city.name} vergleichen. ${city.sunshineHours ? `${city.sunshineHours} Sonnenstunden` : 'Top Bedingungen'}. Geprüfte lokale Installateure, bis zu 30% sparen.`,
      url: `https://pvpro.ch/solaranlage-${'solothurn'}`,
      type: 'website',
      locale: 'de_CH',
      siteName: 'PVPro',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Solaranlage ${city.name} - Photovoltaik Offerte`,
      description: `Kostenlos Solaranlagen-Angebote in ${city.name} vergleichen. Bis zu 30% sparen.`,
    },
  };
}

export default function CityPage({ params }: PageProps) {
  const city = getCityBySlug('solothurn');

  if (!city) {
    notFound();
  }

  const localFAQs = [
    {
      question: `Was kostet eine Solaranlage in ${city.name}?`,
      answer: `Die Kosten für eine Solaranlage in ${city.name} liegen typischerweise zwischen 9.500 und 25.000 CHF für ein Einfamilienhaus. Der genaue Preis hängt von der Anlagengrösse, Dachbeschaffenheit und den gewählten Komponenten ab. Durch unseren Vergleich können Sie bis zu 30% sparen.`,
    },
    {
      question: `Gibt es Förderungen für Solaranlagen in ${city.name}?`,
      answer: `Ja! In ${city.name} profitieren Sie von der Einmalvergütung (EIV) des Bundes, die bis zu 30% der Investitionskosten deckt. Zusätzlich können kantonale Förderprogramme im Kanton ${city.canton} verfügbar sein. Unsere Partner-Installateure helfen Ihnen bei der Beantragung aller Förderungen.`,
    },
    {
      question: `Wie finde ich den besten Solarteur in ${city.name}?`,
      answer: `Mit PVPro erhalten Sie bis zu 3 kostenlose Angebote von geprüften Solarteuren in ${city.name} und Umgebung. So können Sie Preise, Leistungen und Konditionen direkt vergleichen und den besten Installateur für Ihr Projekt wählen.`,
    },
    {
      question: `Lohnt sich eine Solaranlage in ${city.name}?`,
      answer: `Ja, definitiv! ${city.name} bietet ${city.sunshineHours ? `durchschnittlich ${city.sunshineHours} Sonnenstunden pro Jahr` : 'gute Bedingungen für Solarenergie'}. Mit steigenden Strompreisen amortisiert sich eine Solaranlage in der Regel nach 10-15 Jahren, bei einer Lebensdauer von 25-30 Jahren. Zusätzlich steigern Sie die Energieunabhängigkeit und den Wert Ihrer Immobilie.`,
    },
  ];

  return (
    <>
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://pvpro.ch"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": `Solaranlage ${city.name}`,
                "item": `https://pvpro.ch/solaranlage-${'solothurn'}`
              }
            ]
          })
        }}
      />

      {/* LocalBusiness Schema for City */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Solaranlage Installation",
            "provider": {
              "@type": "LocalBusiness",
              "name": "PVPro",
              "url": "https://pvpro.ch",
              "telephone": "+41774420059",
              "email": "info@pvpro.ch"
            },
            "areaServed": {
              "@type": "City",
              "name": city.name,
              "addressRegion": city.canton,
              "addressCountry": "CH"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "CHF",
              "availability": "https://schema.org/InStock",
              "description": `Kostenlose Offerten für Solaranlagen in ${city.name}`,
              "url": `https://pvpro.ch/solaranlage-${'solothurn'}`
            }
          })
        }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": localFAQs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-gray-700">
                {city.name}, Kanton {city.canton}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Solaranlage in {city.name} –{' '}
              <span className="text-primary">Photovoltaik Offerte vergleichen</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Finden Sie die besten Solarteure in {city.name} und sparen Sie bis zu 30% durch den kostenlosen Vergleich mehrerer Angebote.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium">Geprüfte Fachbetriebe</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium">100% kostenlos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium">Bis zu 3 Offerten</span>
              </div>
            </div>

            <a href="#formular" className="btn-primary">
              Jetzt kostenlose Offerte anfordern
            </a>
          </div>
        </div>
      </section>

      {/* Why Solar in City Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Warum Solar in {city.name}?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                <Sun className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {city.sunshineHours ? `${city.sunshineHours} Sonnenstunden` : 'Ideale Bedingungen'}
              </h3>
              <p className="text-gray-600">
                {city.sunshineHours
                  ? `${city.name} bietet durchschnittlich ${city.sunshineHours} Sonnenstunden pro Jahr – perfekt für Solarenergie.`
                  : `${city.name} bietet ausgezeichnete Bedingungen für die Nutzung von Solarenergie.`}
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Attraktive Förderungen
              </h3>
              <p className="text-gray-600">
                Im Kanton {city.canton} profitieren Sie von Bundesförderungen und möglicherweise zusätzlichen kantonalen Programmen.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Lokale Experten
              </h3>
              <p className="text-gray-600">
                Unser Netzwerk umfasst geprüfte Solarteure in {city.name} und Umgebung, die Ihre Region bestens kennen.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Solarenergie in {city.name}: Die wichtigsten Fakten
            </h3>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed mb-4">
                Als Hausbesitzer in {city.name} stehen Sie vor einer zukunftsweisenden Entscheidung: die Installation einer Photovoltaikanlage.
                Die Region bietet hervorragende Voraussetzungen für die Nutzung von Solarenergie, und mit steigenden Strompreisen wird die
                Investition in eine eigene Solaranlage immer attraktiver.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Eine typische 5-kWp-Solaranlage für ein Einfamilienhaus in {city.name} kostet zwischen 6.700 und 8.800 CHF nach Abzug der
                Förderungen. Diese Anlage produziert jährlich etwa 4.500-5.500 kWh Strom, was den durchschnittlichen Bedarf eines Haushalts
                abdeckt. Durch Eigenverbrauch und Einspeisung ins Netz amortisiert sich die Anlage typischerweise nach 4-6 Jahren.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Mit PVPro finden Sie schnell und einfach die passenden Solarteure in {city.name}. Vergleichen Sie kostenlos mehrere
                Angebote und profitieren Sie von unserem schweizweiten Netzwerk geprüfter Fachbetriebe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Installation Hero Section with Background Image */}
      <section className="relative section-padding bg-gray-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-solar-panels.webp"
            alt={`Solaranlage Installation in ${city.name}`}
            fill
            className="object-cover opacity-30"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/75 to-gray-900/90"></div>
        </div>

        {/* Content */}
        <div className="container-custom max-w-4xl relative z-10">
          <div className="text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Professionelle Solarinstallation in {city.name}
            </h2>
            <p className="text-xl text-white mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Erfahrene Solarteure aus Ihrer Region installieren Ihre massgeschneiderte Photovoltaikanlage
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/30 hover:bg-white/20 hover:border-white/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">25+</div>
                <div className="text-sm text-white/90 font-medium">Jahre Lebensdauer</div>
              </div>
              <div className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/30 hover:bg-white/20 hover:border-white/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">30%</div>
                <div className="text-sm text-white/90 font-medium">Förderung möglich</div>
              </div>
              <div className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/30 hover:bg-white/20 hover:border-white/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">4-6</div>
                <div className="text-sm text-white/90 font-medium">Jahre Amortisation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Solarteure in {city.name} und Umgebung
            </h2>
            <p className="text-gray-600">
              Unser Netzwerk umfasst geprüfte Fachbetriebe in der gesamten Region {city.canton}
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl h-[500px]">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDQF_fL_qx_1QZVlvJFNRl5ETBhjcJOFAE&q=${encodeURIComponent(city.name + ', Schweiz')}&zoom=12`}
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
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-semibold text-gray-900 text-lg">{city.name}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <USPSection />

      {/* Form Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Kostenlose Offerten für {city.name} anfordern
            </h2>
            <p className="text-xl text-gray-600">
              Erhalten Sie bis zu 3 Angebote von lokalen Solarteuren
            </p>
          </div>
          <FormContainer />
        </div>
      </section>

      <TrustBadges />

      {/* Local Testimonial */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="card">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-primary">FM</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  "Dank PVPro haben wir schnell und unkompliziert drei Angebote von Solarteuren in {city.name} erhalten.
                  Der Vergleich hat sich gelohnt – wir haben über 7.000 CHF gespart! Die Installation verlief reibungslos und
                  unsere Anlage produziert mehr Strom als erwartet."
                </p>
                <div>
                  <div className="font-bold text-gray-900">Familie Meier</div>
                  <div className="text-sm text-gray-600">{city.name}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={localFAQs} />

      <RelatedCities currentCitySlug={'solothurn'} currentCanton={city.canton} />

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Starten Sie jetzt Ihr Solarprojekt in {city.name}
          </h2>
          <p className="text-xl mb-8 text-primary-50">
            Kostenlos, unverbindlich und in nur 2 Minuten
          </p>
          <a href="#formular" className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block">
            Jetzt Offerte anfordern
          </a>
        </div>
      </section>
    </>
  );
}
