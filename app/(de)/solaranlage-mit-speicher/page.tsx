import { Metadata } from 'next';
import SolarForm from '@/components/SolarForm';
import { CheckCircle, Battery, Zap, Sun, Moon, TrendingUp, PiggyBank, Shield } from 'lucide-react';


export const metadata: Metadata = {
  title: 'Solaranlage mit Speicher Schweiz - Kosten & Vorteile 2025 | PVPro',
  description: 'Solaranlage mit Batteriespeicher in der Schweiz. Kosten CHF 19.500-35.000, bis 80% Eigenverbrauch. Lohnt sich ein Speicher? Jetzt Offerten vergleichen!',
  keywords: [
    'Solaranlage mit Speicher Schweiz',
    'Photovoltaik Speicher Kosten',
    'Batteriespeicher Solaranlage',
    'Stromspeicher Schweiz',
    'PV Anlage mit Batterie',
    'Eigenverbrauch erhöhen',
    'Solarstrom speichern',
  ],
  alternates: {
    canonical: 'https://pvpro.ch/solaranlage-mit-speicher',
  },
  openGraph: {
    title: 'Solaranlage mit Speicher Schweiz - Kosten & Vorteile 2025',
    description: 'Lohnt sich ein Batteriespeicher? Kosten, Vorteile und wann sich die Investition rechnet.',
    url: 'https://pvpro.ch/solaranlage-mit-speicher',
    type: 'article',
    locale: 'de_CH',
    siteName: 'PVPro',
  },
};

const storageOptions = [
  {
    capacity: '5 kWh',
    price: '8.000 - 10.000',
    ideal: 'Kleiner Haushalt, 2 Personen',
    autonomy: '4-6 Stunden',
  },
  {
    capacity: '10 kWh',
    price: '12.000 - 15.000',
    ideal: 'Einfamilienhaus, 4 Personen',
    autonomy: '8-12 Stunden',
    popular: true,
  },
  {
    capacity: '15 kWh',
    price: '16.000 - 20.000',
    ideal: 'Grosser Haushalt, E-Auto',
    autonomy: '12-18 Stunden',
  },
];

const benefits = [
  {
    icon: Moon,
    title: 'Strom auch nachts',
    description: 'Nutzen Sie Ihren Solarstrom auch nach Sonnenuntergang',
  },
  {
    icon: TrendingUp,
    title: 'Bis 80% Eigenverbrauch',
    description: 'Steigern Sie Ihren Eigenverbrauch von 30% auf bis zu 80%',
  },
  {
    icon: Shield,
    title: 'Unabhängigkeit',
    description: 'Weniger abhängig vom Stromnetz und steigenden Preisen',
  },
  {
    icon: Zap,
    title: 'Notstromfunktion',
    description: 'Viele Speicher bieten Notstrom bei Stromausfall',
  },
];

const faqs = [
  {
    question: 'Lohnt sich ein Batteriespeicher in der Schweiz?',
    answer: 'Ein Speicher lohnt sich besonders, wenn Sie tagsüber wenig zu Hause sind und Ihren Solarstrom abends nutzen möchten. Bei aktuellen Strompreisen von über 30 Rp./kWh und sinkenden Batteriepreisen wird ein Speicher immer attraktiver. Die Amortisation liegt bei 10-15 Jahren.',
  },
  {
    question: 'Wie gross sollte der Speicher sein?',
    answer: 'Als Faustregel: Die Speicherkapazität sollte etwa dem halben Tagesverbrauch entsprechen. Für einen 4-Personen-Haushalt mit 12 kWh Tagesverbrauch empfiehlt sich ein 5-10 kWh Speicher. Grösser ist nicht immer besser – ein zu grosser Speicher wird nie voll geladen.',
  },
  {
    question: 'Kann ich einen Speicher nachrüsten?',
    answer: 'Ja, ein Speicher kann in den meisten Fällen nachgerüstet werden. Ideal ist jedoch die gemeinsame Planung mit der Solaranlage, da der Wechselrichter kompatibel sein muss. Bei einer Nachrüstung können zusätzliche Kosten für einen neuen Hybridwechselrichter entstehen.',
  },
  {
    question: 'Wie lange hält ein Batteriespeicher?',
    answer: 'Moderne Lithium-Ionen-Speicher halten 10-15 Jahre bzw. 6.000-10.000 Ladezyklen. Die meisten Hersteller geben 10 Jahre Garantie. Nach dieser Zeit hat der Speicher noch etwa 70-80% seiner ursprünglichen Kapazität.',
  },
  {
    question: 'Gibt es Förderungen für Batteriespeicher?',
    answer: 'In der Schweiz gibt es keine bundesweite Förderung speziell für Speicher. Einige Kantone und Gemeinden bieten jedoch Zuschüsse. Der Speicher ist aber zusammen mit der Solaranlage steuerlich absetzbar. Informieren Sie sich bei Ihrer Gemeinde über lokale Programme.',
  },
];

export default function SolaranlageMitSpeicherPage() {
  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Solaranlage mit Speicher Schweiz - Kosten & Vorteile 2025",
            "description": "Lohnt sich ein Batteriespeicher? Kosten, Vorteile und Amortisation.",
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
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold uppercase tracking-tight text-gray-900 mb-6">
              Solaranlage mit Speicher
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Maximieren Sie Ihren Eigenverbrauch und nutzen Sie Ihren Solarstrom
              auch nachts. Alles über Kosten, Vorteile und die richtige Speichergrösse.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Battery className="w-5 h-5 text-primary" />
                <span className="text-gray-700">Bis 80% Eigenverbrauch</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-gray-700">Ab CHF 8.000</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-gray-700">10 Jahre Garantie</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: With vs Without Storage */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-extrabold uppercase tracking-tight text-center text-gray-900 mb-12">
            Mit oder ohne Speicher?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border-2 border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-display font-extrabold uppercase tracking-tight text-gray-900 mb-4 flex items-center gap-2">
                <Sun className="w-6 h-6 text-yellow-500" />
                Ohne Speicher
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span className="text-gray-600">~30% Eigenverbrauch</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span className="text-gray-600">Strom nur tagsüber nutzbar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span className="text-gray-600">Überschuss wird eingespeist (~8-12 Rp./kWh)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span className="text-gray-600">Niedrigere Anfangsinvestition</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="text-2xl font-display font-extrabold uppercase tracking-tight text-gray-900">
                  CHF 9.500 - 25.000
                </div>
                <p className="text-sm text-gray-500">Nur Solaranlage</p>
              </div>
            </div>

            <div className="border-2 border-primary rounded-2xl p-6 bg-primary-50">
              <div className="bg-primary text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                Empfohlen
              </div>
              <h3 className="text-xl font-display font-extrabold uppercase tracking-tight text-gray-900 mb-4 flex items-center gap-2">
                <Battery className="w-6 h-6 text-primary" />
                Mit Speicher
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">60-80% Eigenverbrauch</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">Strom auch abends & nachts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">Mehr Unabhängigkeit</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">Optional Notstromfunktion</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-primary/20">
                <div className="text-2xl font-display font-extrabold uppercase tracking-tight text-primary">
                  CHF 19.500 - 40.000
                </div>
                <p className="text-sm text-gray-600">Solaranlage + Speicher</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storage Options */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-extrabold uppercase tracking-tight text-center text-gray-900 mb-4">
            Speichergrössen im Vergleich
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Die richtige Speichergrösse hängt von Ihrem Verbrauch und Lebensstil ab
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {storageOptions.map((option, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 ${option.popular ? 'border-2 border-primary bg-white shadow-lg' : 'border border-gray-200 bg-white'}`}
              >
                {option.popular && (
                  <div className="bg-primary text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                    Meistgewählt
                  </div>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <Battery className={`w-8 h-8 ${option.popular ? 'text-primary' : 'text-gray-400'}`} />
                  <div className="text-2xl font-display font-extrabold uppercase tracking-tight text-gray-900">{option.capacity}</div>
                </div>
                <div className="text-xl font-display font-extrabold uppercase tracking-tight text-gray-900 mb-4">
                  CHF {option.price}
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Ideal für: {option.ideal}</li>
                  <li>Autonomie: {option.autonomy}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-extrabold uppercase tracking-tight text-center text-gray-900 mb-12">
            Vorteile eines Batteriespeichers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-display font-extrabold uppercase tracking-tight text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="formular" className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-display font-extrabold uppercase tracking-tight text-center text-gray-900 mb-4">
              Jetzt Offerten mit Speicher vergleichen
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Erhalten Sie bis zu 3 Angebote für Solaranlage mit Batteriespeicher
              von geprüften Schweizer Installateuren
            </p>
            <SolarForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-extrabold uppercase tracking-tight text-center text-gray-900 mb-12">
            Häufige Fragen zu Solaranlagen mit Speicher
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-display font-extrabold uppercase tracking-tight text-gray-900 mb-2">{faq.question}</h3>
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
