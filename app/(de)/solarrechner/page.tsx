import { Metadata } from 'next';
import SolarCalculator from '@/components/SolarCalculator';
import SolarForm from '@/components/SolarForm';
import { CheckCircle, Calculator, Zap, TrendingUp, PiggyBank } from 'lucide-react';


export const metadata: Metadata = {
  title: 'Solarrechner Schweiz - Kosten & Ertrag berechnen | PVPro',
  description: 'Kostenloser Solarrechner für die Schweiz. Berechnen Sie in 30 Sekunden Kosten, Ertrag und Amortisation Ihrer Solaranlage. Jetzt Potenzial ermitteln!',
  keywords: [
    'Solarrechner Schweiz',
    'Photovoltaik Rechner',
    'PV Rechner Schweiz',
    'Solaranlage berechnen',
    'Photovoltaik Ertrag berechnen',
    'Solarstrom Rechner',
    'Eigenverbrauch berechnen',
  ],
  alternates: {
    canonical: 'https://pvpro.ch/solarrechner',
  },
  openGraph: {
    title: 'Solarrechner Schweiz - Kosten & Ertrag berechnen',
    description: 'Kostenloser Solarrechner. Berechnen Sie Kosten, Ertrag und Amortisation Ihrer Solaranlage in der Schweiz.',
    url: 'https://pvpro.ch/solarrechner',
    type: 'website',
    locale: 'de_CH',
    siteName: 'PVPro',
  },
};

const benefits = [
  {
    icon: Calculator,
    title: 'Sofortige Berechnung',
    description: 'Erhalten Sie in Sekunden eine erste Einschätzung für Ihre Solaranlage',
  },
  {
    icon: Zap,
    title: 'Ertrag ermitteln',
    description: 'Sehen Sie, wie viel Strom Sie mit Ihrer Dachfläche produzieren können',
  },
  {
    icon: PiggyBank,
    title: 'Kosten verstehen',
    description: 'Realistische Kostenschätzung basierend auf Schweizer Marktpreisen',
  },
  {
    icon: TrendingUp,
    title: 'Amortisation planen',
    description: 'Erfahren Sie, wann sich Ihre Investition amortisiert hat',
  },
];

const faqs = [
  {
    question: 'Wie genau ist der Solarrechner?',
    answer: 'Unser Solarrechner gibt Ihnen eine gute erste Orientierung. Er basiert auf Durchschnittswerten für die Schweiz (ca. 1.100 kWh pro kWp). Für eine exakte Berechnung sollten Sie eine professionelle Beratung vor Ort einholen, die Faktoren wie Dachausrichtung, Verschattung und lokale Gegebenheiten berücksichtigt.',
  },
  {
    question: 'Wie viel m² Dachfläche brauche ich pro kWp?',
    answer: 'In der Schweiz rechnet man mit etwa 6-7 m² Dachfläche pro kWp bei modernen Modulen. Für eine typische 10 kWp Anlage benötigen Sie also etwa 60-70 m² nutzbare Dachfläche.',
  },
  {
    question: 'Was ist die typische Amortisationszeit in der Schweiz?',
    answer: 'Die durchschnittliche Amortisationszeit liegt in der Schweiz bei 8-12 Jahren, abhängig von Strompreis, Eigenverbrauchsanteil und erhaltenen Förderungen. Bei steigenden Strompreisen verkürzt sich diese Zeit weiter.',
  },
];

export default function SolarrechnerPage() {
  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "PVPro Solarrechner",
            "description": "Kostenloser Solarrechner für die Schweiz",
            "url": "https://pvpro.ch/solarrechner",
            "applicationCategory": "Calculator",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "CHF"
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
            <h1 className="text-4xl sm:text-5xl font-display font-medium tracking-normal text-gray-900 mb-6">
              Solarrechner Schweiz
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Berechnen Sie kostenlos das Potenzial Ihrer Solaranlage.
              Kosten, Ertrag und Amortisation in wenigen Sekunden.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-gray-700">100% kostenlos</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-gray-700">Sofortige Ergebnisse</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-gray-700">Schweizer Daten</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-xl mx-auto">
            <SolarCalculator />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-medium tracking-normal text-center text-gray-900 mb-12">
            Warum unseren Solarrechner nutzen?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-display font-medium tracking-normal text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-medium tracking-normal text-center text-gray-900 mb-12">
              So funktioniert die Berechnung
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-display font-medium tracking-normal">
                  1
                </div>
                <h3 className="font-display font-medium tracking-normal text-gray-900 mb-2">Dachfläche eingeben</h3>
                <p className="text-gray-600 text-sm">
                  Schätzen Sie Ihre verfügbare Dachfläche in m². Tipp: Länge x Breite.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-display font-medium tracking-normal">
                  2
                </div>
                <h3 className="font-display font-medium tracking-normal text-gray-900 mb-2">Verbrauch angeben</h3>
                <p className="text-gray-600 text-sm">
                  Ihr jährlicher Stromverbrauch steht auf der Stromrechnung (kWh/Jahr).
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-display font-medium tracking-normal">
                  3
                </div>
                <h3 className="font-display font-medium tracking-normal text-gray-900 mb-2">Ergebnis erhalten</h3>
                <p className="text-gray-600 text-sm">
                  Sehen Sie sofort Kosten, Ertrag und wann sich die Anlage amortisiert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="formular" className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-display font-medium tracking-normal text-center text-gray-900 mb-4">
              Bereit für konkrete Offerten?
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Unser Rechner gibt eine erste Orientierung. Für verbindliche Angebote
              vermitteln wir Sie an geprüfte Schweizer Solarteure.
            </p>
            <SolarForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-medium tracking-normal text-center text-gray-900 mb-12">
            Häufige Fragen zum Solarrechner
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-display font-medium tracking-normal text-gray-900 mb-2">{faq.question}</h3>
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
