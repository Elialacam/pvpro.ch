import { Metadata } from 'next';
import SolarForm from '@/components/SolarForm';
import FAQ from '@/components/FAQ';
import { CheckCircle, Calculator, Sun, Zap, PiggyBank, TrendingUp, Home, Building2 } from 'lucide-react';

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata: Metadata = {
  title: 'Solaranlage Kosten Schweiz 2025 - Preise, Förderung & Rechner | PVPro',
  description: 'Was kostet eine Solaranlage in der Schweiz? Aktuelle Preise 2025: CHF 9.500-25.000 für Einfamilienhaus. Mit Förderung bis 30% günstiger. Jetzt kostenlos Offerten vergleichen!',
  keywords: [
    'Solaranlage Kosten Schweiz',
    'Photovoltaik Kosten',
    'PV Anlage Preis',
    'Solaranlage Preis Schweiz',
    'Photovoltaik Kosten pro m2',
    'Solaranlage Einfamilienhaus Kosten',
    'PV Anlage Kosten pro kWp',
    'Solaranlage Förderung Schweiz',
  ],
  alternates: {
    canonical: 'https://pvpro.ch/solaranlage-kosten',
  },
  openGraph: {
    title: 'Solaranlage Kosten Schweiz 2025 - Kompletter Preisguide',
    description: 'Aktuelle Preise für Solaranlagen in der Schweiz. Von CHF 9.500 bis 25.000. Förderungen, Amortisation und kostenloser Offertvergleich.',
    url: 'https://pvpro.ch/solaranlage-kosten',
    type: 'article',
    locale: 'de_CH',
    siteName: 'PVPro',
  },
};

const costData = [
  {
    type: 'Klein',
    size: '3-5 kWp',
    area: '20-35 m²',
    priceRange: '9.500 - 14.000',
    ideal: 'Wohnung / Kleines Haus',
    icon: Home,
  },
  {
    type: 'Mittel',
    size: '6-10 kWp',
    area: '40-70 m²',
    priceRange: '14.000 - 22.000',
    ideal: 'Einfamilienhaus',
    icon: Home,
  },
  {
    type: 'Gross',
    size: '11-15 kWp',
    area: '75-105 m²',
    priceRange: '22.000 - 35.000',
    ideal: 'Grosses Haus / MFH',
    icon: Building2,
  },
];

const faqs = [
  {
    question: 'Was kostet eine Solaranlage pro m² in der Schweiz?',
    answer: 'In der Schweiz kostet eine Solaranlage zwischen CHF 250 und CHF 400 pro m² Modulfläche. Ein typisches Einfamilienhaus mit 50 m² Dachfläche kostet somit zwischen CHF 12.500 und CHF 20.000. Der genaue Preis hängt von der Modulqualität, dem Montagesystem und den örtlichen Gegebenheiten ab.',
  },
  {
    question: 'Wie viel kostet eine 10 kWp Solaranlage in der Schweiz?',
    answer: 'Eine 10 kWp Solaranlage kostet in der Schweiz zwischen CHF 18.000 und CHF 25.000 vor Förderung. Nach Abzug der Einmalvergütung (EIV) vom Bund reduzieren sich die Nettokosten auf etwa CHF 13.000 bis CHF 20.000. Je nach Kanton können weitere Förderungen hinzukommen.',
  },
  {
    question: 'Lohnt sich eine Solaranlage in der Schweiz finanziell?',
    answer: 'Ja, eine Solaranlage lohnt sich in der Schweiz sehr gut. Bei aktuellen Strompreisen von über 30 Rappen/kWh und Förderungen von bis zu 30% amortisiert sich eine Anlage in 8-12 Jahren. Bei einer Lebensdauer von 25-30 Jahren ergibt das 15-20 Jahre kostenlosen Strom.',
  },
  {
    question: 'Welche Förderungen gibt es für Solaranlagen in der Schweiz?',
    answer: 'In der Schweiz gibt es die Einmalvergütung (EIV) vom Bund, die bis zu 30% der Kosten abdeckt. Zusätzlich bieten viele Kantone und Gemeinden eigene Förderprogramme. Die Investition ist zudem vollständig von den Steuern absetzbar. Unsere Partner helfen Ihnen bei allen Anträgen.',
  },
  {
    question: 'Kosten Solaranlagen mit Speicher mehr?',
    answer: 'Ja, ein Batteriespeicher kostet zusätzlich CHF 8.000 bis CHF 15.000, je nach Kapazität (5-15 kWh). Mit Speicher erhöhen Sie Ihren Eigenverbrauch von etwa 30% auf 60-80%. Ob sich ein Speicher lohnt, hängt von Ihrem Verbrauchsprofil und den lokalen Stromtarifen ab.',
  },
];

export default function SolaranlageKostenPage() {
  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Solaranlage Kosten Schweiz 2025 - Kompletter Preisguide",
            "description": "Aktuelle Preise für Solaranlagen in der Schweiz. Von CHF 9.500 bis 25.000.",
            "author": {
              "@type": "Organization",
              "name": "PVPro"
            },
            "publisher": {
              "@type": "Organization",
              "name": "PVPro",
              "url": "https://pvpro.ch"
            },
            "datePublished": "2025-01-01",
            "dateModified": new Date().toISOString().split('T')[0]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
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
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Solaranlage Kosten Schweiz 2025
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Aktuelle Preise, Förderungen und was Sie wirklich für eine Photovoltaikanlage bezahlen.
              Transparent und unabhängig.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-gray-700">Ab CHF 9.500</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-gray-700">Bis 30% Förderung</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-gray-700">8-12 Jahre Amortisation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Aktuelle Preise für Solaranlagen
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Übersicht der typischen Kosten für Photovoltaikanlagen in der Schweiz (Stand 2025)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {costData.map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 border-2 ${index === 1 ? 'border-primary bg-primary-50' : 'border-gray-200 bg-white'}`}
              >
                {index === 1 && (
                  <div className="bg-primary text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                    Beliebteste Grösse
                  </div>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <item.icon className={`w-8 h-8 ${index === 1 ? 'text-primary' : 'text-gray-400'}`} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{item.type}</h3>
                    <p className="text-gray-600">{item.size}</p>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  CHF {item.priceRange}
                </div>
                <p className="text-gray-600 mb-4">Dachfläche: {item.area}</p>
                <p className="text-sm text-gray-500">Ideal für: {item.ideal}</p>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 max-w-3xl mx-auto">
            <p className="text-yellow-800 text-center">
              <strong>Hinweis:</strong> Dies sind Richtwerte. Der tatsächliche Preis hängt von Dachtyp,
              Ausrichtung, gewählten Komponenten und regionalen Faktoren ab.
              Holen Sie sich kostenlos 3 individuelle Offerten ein.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Factors */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Was beeinflusst die Kosten?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Sun className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Anlagengrösse</h3>
              <p className="text-gray-600 text-sm">
                Grössere Anlagen sind pro kWp günstiger. Ab 10 kWp sinken die Kosten pro kWp deutlich.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Zap className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Modulqualität</h3>
              <p className="text-gray-600 text-sm">
                Premium-Module kosten mehr, bieten aber höhere Effizienz und längere Garantien.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Home className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dachtyp</h3>
              <p className="text-gray-600 text-sm">
                Flachdächer und komplexe Dachformen erhöhen die Montagekosten um 10-20%.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <PiggyBank className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Speicher</h3>
              <p className="text-gray-600 text-sm">
                Ein Batteriespeicher erhöht die Kosten um CHF 8.000-15.000, steigert aber den Eigenverbrauch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Förderung Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Förderungen reduzieren Ihre Kosten
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Mit den verfügbaren Förderungen zahlen Sie deutlich weniger
            </p>

            <div className="bg-primary-50 rounded-2xl p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">30%</div>
                  <p className="text-gray-700">Einmalvergütung (EIV) vom Bund</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">+10-20%</div>
                  <p className="text-gray-700">Kantonale Förderungen (variiert)</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <p className="text-gray-700">Steuerlich absetzbar</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Rechenbeispiel: 10 kWp Anlage
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Bruttokosten</span>
                  <span className="font-medium">CHF 22.000</span>
                </div>
                <div className="flex justify-between text-primary">
                  <span>- Einmalvergütung (EIV)</span>
                  <span className="font-medium">- CHF 5.400</span>
                </div>
                <div className="flex justify-between text-primary">
                  <span>- Steuerersparnis (ca.)</span>
                  <span className="font-medium">- CHF 3.300</span>
                </div>
                <div className="border-t border-gray-300 pt-3 flex justify-between">
                  <span className="font-bold text-gray-900">Effektive Kosten</span>
                  <span className="font-bold text-xl text-primary">CHF 13.300</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA with Form */}
      <section id="formular" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Jetzt kostenlose Offerten erhalten
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Vergleichen Sie bis zu 3 Angebote von geprüften Schweizer Solarteuren
            </p>
            <SolarForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Häufige Fragen zu Solaranlage Kosten
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
