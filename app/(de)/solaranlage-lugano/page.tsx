import { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';
import { getCityContent } from '@/lib/city-content';
import { notFound } from 'next/navigation';
import FormContainer from '@/components/MultiStepForm/FormContainer';
import USPSection from '@/components/USPSection';
import TrustBadges from '@/components/TrustBadges';
import FAQ from '@/components/FAQ';
import RelatedCities from '@/components/RelatedCities';
import { Sun, MapPin, TrendingUp, CheckCircle, Zap, Euro, Award } from 'lucide-react';
import Image from 'next/image';

// Force static rendering
export const dynamic = 'force-static';
export const revalidate = false;

const citySlug = 'lugano';

export async function generateMetadata(): Promise<Metadata> {
  const city = getCityBySlug(citySlug);
  if (!city) return { title: 'Stadt nicht gefunden' };

  return {
    title: `Solaranlage Lugano Tessin - 2.157 Sonnenstunden | Photovoltaik Offerte`,
    description: `Solaranlage Lugano: Nr. 1 Solarstandort der Schweiz mit 2.157 Sonnenstunden! Vergleichen Sie kostenlos Offerten von geprüften Tessin-Solarteuren. Programma Energia Förderung bis 45%. CHF 8.800-23.000, netto ab 6.200 CHF.`,
    keywords: [
      'Solaranlage Lugano',
      'Photovoltaik Lugano',
      'Solarteur Lugano',
      'Solaranlage Tessin',
      'Programma Energia Ticino',
      'Pannelli solari Lugano',
      'Impianto fotovoltaico Lugano',
      'Solaranlage Kosten Lugano',
      'PV Anlage Lugano Ticino',
      'Solaranlage 2157 Sonnenstunden',
    ],
    alternates: {
      canonical: 'https://pvpro.ch/solaranlage-lugano',
    },
    openGraph: {
      title: 'Solaranlage Lugano Tessin - Schweizer Spitzenreiter Solar',
      description: '2.157 Sonnenstunden! Lugano ist der beste Solarstandort der Schweiz. Kostenlos Offerten vergleichen, bis 45% Förderung. Amortisation 4-5 Jahre.',
      url: 'https://pvpro.ch/solaranlage-lugano',
      type: 'website',
      locale: 'de_CH',
      siteName: 'PVPro',
    },
  };
}

export default function LuganoPage() {
  const city = getCityBySlug(citySlug);
  const content = getCityContent(citySlug);

  if (!city || !content) {
    notFound();
  }

  return (
    <>
      {/* Enhanced Schema Markup */}
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
                "name": "Solaranlage Lugano",
                "item": "https://pvpro.ch/solaranlage-lugano"
              }
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Photovoltaik Installation",
            "name": "Solaranlage Installation Lugano",
            "description": "Professionelle Solaranlagen-Installation in Lugano, Tessin. Spitzenreiter mit 2.157 Sonnenstunden.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "PVPro",
              "url": "https://pvpro.ch",
              "telephone": "+41774420059",
              "email": "info@pvpro.ch"
            },
            "areaServed": {
              "@type": "City",
              "name": "Lugano",
              "addressRegion": "TI",
              "addressCountry": "CH"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "CHF",
              "lowPrice": "8800",
              "highPrice": "23000",
              "offerCount": "3",
              "availability": "https://schema.org/InStock",
              "priceValidUntil": "2025-12-31"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "127"
            }
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": content.faqs.map(faq => ({
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

      {/* Hero Section - Unique for Lugano */}
      <section className="bg-gradient-to-br from-yellow-50 via-orange-50 to-primary-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
              <Sun className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-bold text-orange-600">
                2.157 Sonnenstunden - Schweizer Spitzenreiter!
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Solaranlage Lugano Tessin –{' '}
              <span className="text-orange-600">Beste Bedingungen der Schweiz</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {content.heroDescription}
            </p>

            {/* Lugano-specific Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-orange-600 mb-2">2.157</div>
                <div className="text-sm text-gray-600">Sonnenstunden/Jahr</div>
                <div className="text-xs text-gray-500 mt-1">Mehr als Zürich</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-green-600 mb-2">4-5</div>
                <div className="text-sm text-gray-600">Jahre Amortisation</div>
                <div className="text-xs text-gray-500 mt-1">Schneller ROI</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-primary mb-2">45%</div>
                <div className="text-sm text-gray-600">Förderung möglich</div>
                <div className="text-xs text-gray-500 mt-1">Bund + Ticino</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Programma Energia Ticino</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Tessin Solarteure</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Bis zu 3 Offerten</span>
              </div>
            </div>

            <a href="#formular" className="btn-primary text-lg px-8 py-4">
              Jetzt kostenlose Offerte anfordern
            </a>
          </div>
        </div>
      </section>

      {/* Why Solar in Lugano - UNIQUE CONTENT */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            {content.whySolarTitle}
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            {content.whySolarIntro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {content.whySolarReasons.map((reason, index) => (
              <div key={index} className="card hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                  {index === 0 && <Sun className="w-6 h-6 text-orange-600" />}
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

          {/* Detailed City Facts - UNIQUE CONTENT */}
          <div className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              {content.cityFactsTitle}
            </h3>
            <div className="prose prose-lg prose-gray max-w-none space-y-5">
              {content.cityFactsParagraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - UNIQUE FOR LUGANO */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Solaranlage Kosten in Lugano
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <Euro className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-gray-900">Investitionskosten</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-gray-600">5 kWp Anlage (typisch)</span>
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
                    <span className="text-gray-600">Nach Förderung</span>
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
                    <span className="text-gray-700 font-semibold">Amortisation</span>
                    <span className="text-xl font-bold text-primary">{content.pricing.roiYears} Jahre</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-orange-50 to-yellow-50">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-orange-600" />
                <h3 className="text-2xl font-bold text-gray-900">Lugano-Vorteil</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-gray-900">6.500 kWh/Jahr</div>
                    <div className="text-sm text-gray-600">5 kWp Anlage produziert mehr als im Mittelland</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-gray-900">2.400 CHF/Jahr</div>
                    <div className="text-sm text-gray-600">Jährliche Ersparnis durch hohe Erträge</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-gray-900">38% mehr Ertrag</div>
                    <div className="text-sm text-gray-600">vs. Zürich dank 2.157 Sonnenstunden</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Preisbeispiele Lugano</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 text-gray-700">Anlagengrösse</th>
                    <th className="text-left py-3 px-4 text-gray-700">Kosten brutto</th>
                    <th className="text-left py-3 px-4 text-gray-700">Nach Förderung</th>
                    <th className="text-left py-3 px-4 text-gray-700">Produktion/Jahr</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">4.5 kWp</td>
                    <td className="py-3 px-4">8.800 CHF</td>
                    <td className="py-3 px-4 font-bold text-green-600">6.200 CHF</td>
                    <td className="py-3 px-4">5.400-5.900 kWh</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">6.8 kWp</td>
                    <td className="py-3 px-4">11.800 CHF</td>
                    <td className="py-3 px-4 font-bold text-green-600">8.200 CHF</td>
                    <td className="py-3 px-4">7.800-8.800 kWh</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">10 kWp</td>
                    <td className="py-3 px-4">18.500 CHF</td>
                    <td className="py-3 px-4 font-bold text-green-600">12.500 CHF</td>
                    <td className="py-3 px-4">11.500-13.000 kWh</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Incentives Section - UNIQUE */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            {content.incentives.title}
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            {content.incentives.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.incentives.programs.map((program, index) => (
              <div key={index} className="card bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 flex-1">{program.name}</h3>
                  <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    {program.amount}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies - UNIQUE LUGANO CASES */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Erfolgsgeschichten aus Lugano
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.caseStudies.map((study, index) => (
              <div key={index} className="card hover:shadow-xl transition-shadow">
                <div className="bg-primary-50 rounded-lg p-4 mb-4">
                  <div className="text-2xl font-bold text-primary mb-1">{study.name}</div>
                  <div className="text-sm text-gray-600">{study.location}</div>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Anlagengrösse:</span>
                    <span className="font-bold text-gray-900">{study.systemSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Investition:</span>
                    <span className="font-bold text-green-600">{study.cost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ersparnis/Jahr:</span>
                    <span className="font-bold text-primary">{study.savings}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amortisation:</span>
                    <span className="font-bold text-orange-600">{study.payback}</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-700 italic leading-relaxed">
                    "{study.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solar Installation Hero with Image */}
      <section className="relative section-padding bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-solar-panels.webp"
            alt="Solaranlage Installation Lugano Tessin"
            fill
            className="object-cover opacity-30"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/75 to-gray-900/90"></div>
        </div>

        <div className="container-custom max-w-4xl relative z-10">
          <div className="text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Professionelle Installation im sonnigen Tessin
            </h2>
            <p className="text-xl text-white mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Erfahrene Solarteure aus Lugano und dem Tessin installieren Ihre massgeschneiderte Anlage
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/30 hover:bg-white/20 hover:border-white/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">2.157</div>
                <div className="text-sm text-white/90 font-medium">Sonnenstunden</div>
              </div>
              <div className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/30 hover:bg-white/20 hover:border-white/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">45%</div>
                <div className="text-sm text-white/90 font-medium">Förderung</div>
              </div>
              <div className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/30 hover:bg-white/20 hover:border-white/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">4-5</div>
                <div className="text-sm text-white/90 font-medium">Jahre ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Solarteure in Lugano und Umgebung
            </h2>
            <p className="text-gray-600">
              Unser Netzwerk umfasst geprüfte Fachbetriebe in der gesamten Region Ticino
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl h-[500px]">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDQF_fL_qx_1QZVlvJFNRl5ETBhjcJOFAE&q=Lugano,Schweiz&zoom=12`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Karte von Lugano"
            />
            <div className="absolute bottom-6 left-6 bg-white px-6 py-3 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-600" />
                <span className="font-semibold text-gray-900 text-lg">Lugano, Ticino</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <USPSection />

      {/* Form Section */}
      <section id="formular" className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Kostenlose Offerten für Lugano anfordern
            </h2>
            <p className="text-xl text-gray-600">
              Erhalten Sie bis zu 3 Angebote von lokalen Tessin-Solarteuren
            </p>
          </div>
          <FormContainer />
        </div>
      </section>

      <TrustBadges />

      {/* Testimonial - UNIQUE */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="card bg-gradient-to-br from-orange-50 to-yellow-50">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
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
                  <div className="text-sm text-gray-600">Lugano, Tessin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - UNIQUE 8 QUESTIONS */}
      <FAQ items={content.faqs} />

      <RelatedCities currentCitySlug={citySlug} currentCanton={city.canton} />

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Nutzen Sie die 2.157 Sonnenstunden in Lugano!
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Kostenlos, unverbindlich und in nur 2 Minuten
          </p>
          <a href="#formular" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block">
            Jetzt Offerte anfordern
          </a>
        </div>
      </section>
    </>
  );
}
