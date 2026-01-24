import { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';
import { cityContentsFR } from '@/lib/city-content-fr';
import { notFound } from 'next/navigation';
import FormContainer from '@/components/MultiStepForm/FormContainer';
import USPSection from '@/components/USPSection';
import TrustBadges from '@/components/TrustBadges';
import FAQ from '@/components/FAQ';
import RelatedCities from '@/components/RelatedCities';
import { Sun, MapPin, TrendingUp, CheckCircle, Zap, Euro, Award } from 'lucide-react';
import Image from 'next/image';

export const dynamic = 'force-static';
export const revalidate = false;

const citySlug = 'genf';

export async function generateMetadata(): Promise<Metadata> {
  const city = getCityBySlug(citySlug);
  if (!city) return { title: 'Ville non trouvée' };

  return {
    title: `Installation Solaire Genève - 1.849 Heures d'Ensoleillement | Devis Gratuits`,
    description: `Installation solaire Genève: 1.849 heures d'ensoleillement! Comparez gratuitement les devis d'installateurs certifiés à Genève. Subventions jusqu'à 40%. CHF 9.500-25.000, net dès 7.200 CHF.`,
    keywords: [
      'Installation solaire Genève',
      'Photovoltaïque Genève',
      'Installateur solaire Genève',
      'Panneau solaire Genève',
      'Subventions solaires Genève',
      'SIG Genève énergie solaire',
      'Prix installation solaire Genève',
      'Photovoltaïque Canton Genève',
    ],
    alternates: {
      canonical: 'https://pvpro.ch/fr/installation-solaire-geneve',
      languages: {
        'de-CH': 'https://pvpro.ch/solaranlage-genf',
        'fr-CH': 'https://pvpro.ch/fr/installation-solaire-geneve',
        'it-CH': 'https://pvpro.ch/it/impianto-fotovoltaico-ginevra',
      },
    },
    openGraph: {
      title: 'Installation Solaire Genève - Excellence solaire lémanique',
      description: '1.849 heures d\'ensoleillement! Genève offre d\'excellentes conditions solaires. Comparez gratuitement les devis, jusqu\'à 40% de subventions. Amortissement 6-8 ans.',
      url: 'https://pvpro.ch/fr/installation-solaire-geneve',
      type: 'website',
      locale: 'fr_CH',
      siteName: 'PVPro',
    },
  };
}

export default function GeneveFrenchPage() {
  const city = getCityBySlug(citySlug);
  const content = cityContentsFR[citySlug];

  if (!city || !content) {
    notFound();
  }

  return (
    <>
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
                "name": "Accueil",
                "item": "https://pvpro.ch/fr"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Installation Solaire Genève",
                "item": "https://pvpro.ch/fr/installation-solaire-geneve"
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
            "serviceType": "Installation Photovoltaïque",
            "name": "Installation Solaire Genève",
            "description": "Installation professionnelle d'installations solaires à Genève. Excellence avec 1.849 heures d'ensoleillement.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "PVPro",
              "url": "https://pvpro.ch",
              "telephone": "+41774420059",
              "email": "info@pvpro.ch"
            },
            "areaServed": {
              "@type": "City",
              "name": "Genève",
              "addressRegion": "GE",
              "addressCountry": "CH"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "CHF",
              "lowPrice": "9500",
              "highPrice": "25000",
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

      {/* Hero Section - French */}
      <section className="bg-gradient-to-br from-blue-50 via-sky-50 to-primary-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
              <Sun className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-bold text-blue-600">
                1.849 heures d'ensoleillement - Excellence lémanique!
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Installation Solaire Genève –{' '}
              <span className="text-blue-600">Capital International de l'Énergie Verte</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {content.heroDescription}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">1.849</div>
                <div className="text-sm text-gray-600">Heures d'ensoleillement/an</div>
                <div className="text-xs text-gray-500 mt-1">Excellent climat</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-green-600 mb-2">6-8</div>
                <div className="text-sm text-gray-600">Années d'amortissement</div>
                <div className="text-xs text-gray-500 mt-1">ROI rapide</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-primary mb-2">40%</div>
                <div className="text-sm text-gray-600">Subventions possibles</div>
                <div className="text-xs text-gray-500 mt-1">Fédéral + Canton</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Subventions SIG</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Installateurs certifiés</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Jusqu'à 3 devis</span>
              </div>
            </div>

            <a href="#formular" className="btn-primary text-lg px-8 py-4">
              Demander un devis gratuit maintenant
            </a>
          </div>
        </div>
      </section>

      {/* Why Solar in Geneva */}
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
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  {index === 0 && <Sun className="w-6 h-6 text-blue-600" />}
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

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-10">
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

      {/* Pricing Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Coûts d'Installation Solaire à Genève
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <Euro className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-gray-900">Coûts d'investissement</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-gray-600">Installation 5 kWp (typique)</span>
                    <span className="text-2xl font-bold text-gray-900">
                      {content.pricing.typical5kw.min.toLocaleString()}-{content.pricing.typical5kw.max.toLocaleString()} CHF
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-gray-600">Après subventions</span>
                    <span className="text-2xl font-bold text-green-600">
                      {content.pricing.afterSubsidy5kw.min.toLocaleString()}-{content.pricing.afterSubsidy5kw.max.toLocaleString()} CHF
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '32%' }}></div>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">Amortissement</span>
                    <span className="text-xl font-bold text-primary">{content.pricing.roiYears} ans</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-blue-50 to-sky-50">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Avantage Genève</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-gray-900">5.800 kWh/an</div>
                    <div className="text-sm text-gray-600">Installation 5 kWp produit excellents rendements</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-gray-900">2.000 CHF/an</div>
                    <div className="text-sm text-gray-600">Économies annuelles grâce aux bons rendements</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-gray-900">25% plus de rendement</div>
                    <div className="text-sm text-gray-600">vs. Zurich grâce à 1.849 heures d'ensoleillement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Incentives Section */}
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

      {/* Case Studies */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Réussites à Genève
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
                    <span className="text-gray-600">Taille:</span>
                    <span className="font-bold text-gray-900">{study.systemSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Investissement:</span>
                    <span className="font-bold text-green-600">{study.cost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Économies/an:</span>
                    <span className="font-bold text-primary">{study.savings}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amortissement:</span>
                    <span className="font-bold text-blue-600">{study.payback}</span>
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

      {/* Google Maps */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Installateurs solaires à Genève et environs
            </h2>
            <p className="text-gray-600">
              Notre réseau comprend des entreprises certifiées dans toute la région genevoise
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl h-[500px]">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDQF_fL_qx_1QZVlvJFNRl5ETBhjcJOFAE&q=Genève,Suisse&zoom=12`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte de Genève"
            />
            <div className="absolute bottom-6 left-6 bg-white px-6 py-3 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-gray-900 text-lg">Genève, Canton GE</span>
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
              Demandez des devis gratuits pour Genève
            </h2>
            <p className="text-xl text-gray-600">
              Recevez jusqu'à 3 offres d'installateurs locaux genevois
            </p>
          </div>
          <FormContainer />
        </div>
      </section>

      <TrustBadges />

      {/* Testimonial */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="card bg-gradient-to-br from-blue-50 to-sky-50">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
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
                  <div className="text-sm text-gray-600">Genève</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={content.faqs} />

      <RelatedCities currentCitySlug={citySlug} currentCanton={city.canton} />

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-500 to-sky-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Profitez des 1.849 heures d'ensoleillement à Genève!
          </h2>
          <p className="text-xl mb-8 text-blue-50">
            Gratuit, sans engagement et en seulement 2 minutes
          </p>
          <a href="#formular" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block">
            Demander un devis maintenant
          </a>
        </div>
      </section>
    </>
  );
}
