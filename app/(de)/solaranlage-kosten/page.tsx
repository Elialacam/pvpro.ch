import { Metadata } from 'next';
import CtaAnfrage from '@/components/CtaAnfrage';
import Link from 'next/link';
import { CheckCircle, Sun, Home, Building2, Battery, Calculator, TrendingUp, PiggyBank } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solaranlage Kosten Schweiz 2025 – Was kostet eine Solaranlage? | PVPro',
  description: 'Was kostet eine Solaranlage in der Schweiz? Aktuelle Preise 2025: 15\'000 – 35\'000 CHF für ein Einfamilienhaus. Kosten pro kWp, Förderungen und Speicher. Kostenlose Offerten vergleichen.',
  keywords: [
    'Solaranlage Kosten Schweiz',
    'Was kostet eine Solaranlage',
    'Photovoltaik Kosten Schweiz',
    'Solaranlage Preis Einfamilienhaus',
    'PV Anlage Kosten kWp',
    '10 kW Solaranlage Kosten',
    'Solaranlage mit Speicher Kosten',
    'Solaranlage Förderung Schweiz',
  ],
  alternates: {
    canonical: 'https://www.pvpro.ch/solaranlage-kosten',
  },
  openGraph: {
    title: 'Solaranlage Kosten Schweiz 2025 – Aktuelle Preise & Förderungen',
    description: 'Aktuelle Preise für Solaranlagen in der Schweiz. 15\'000 – 35\'000 CHF für Einfamilienhaus nach Förderung. Alle Infos zu Kosten, kWp-Preis und Speicher.',
    url: 'https://www.pvpro.ch/solaranlage-kosten',
    type: 'article',
    locale: 'de_CH',
    siteName: 'PVPro',
  },
};

const costTable = [
  { size: '5 kWp', production: '4\'500 – 5\'000 kWh', price: '13\'000 – 18\'000 CHF', area: 'ca. 30 – 35 m²', ideal: 'Kleines Haus' },
  { size: '8 kWp', production: '7\'500 – 8\'000 kWh', price: '18\'000 – 25\'000 CHF', area: 'ca. 50 – 55 m²', ideal: 'Einfamilienhaus' },
  { size: '10 kWp', production: '9\'000 – 10\'000 kWh', price: '22\'000 – 30\'000 CHF', area: 'ca. 62 – 68 m²', ideal: 'Grosses EFH / MFH' },
];

const storageTable = [
  { size: '5 kWh', price: '4\'000 – 6\'000 CHF' },
  { size: '10 kWh', price: '7\'000 – 10\'000 CHF' },
];

const costFactors = [
  {
    icon: Building2,
    title: 'Anlagengrösse',
    text: 'Grössere Anlagen haben meist geringere Kosten pro kWp, da die Installationskosten auf mehr Leistung verteilt werden.',
  },
  {
    icon: Home,
    title: 'Dachfläche',
    text: 'Je grösser die verfügbare Dachfläche, desto grösser kann die Anlage dimensioniert werden.',
  },
  {
    icon: Home,
    title: 'Dachtyp',
    text: 'Flachdächer oder komplizierte Dächer können höhere Montagekosten verursachen.',
  },
  {
    icon: Sun,
    title: 'Komponenten',
    text: 'Hochwertige Module oder Wechselrichter können den Preis nach oben beeinflussen, bieten aber längere Garantien.',
  },
];

const faqs = [
  {
    question: 'Was kostet eine Photovoltaikanlage für ein Einfamilienhaus?',
    answer: 'Die meisten Solaranlagen für Einfamilienhäuser kosten in der Schweiz zwischen 18\'000 und 30\'000 CHF nach Abzug der Förderungen (EIV). Für eine typische Anlage von 8 bis 10 kWp ist dies der übliche Preisbereich.',
  },
  {
    question: 'Wie viel kostet eine 10 kW Solaranlage in der Schweiz?',
    answer: 'Eine Photovoltaikanlage mit 10 kWp kostet in der Schweiz typischerweise zwischen 22\'000 und 30\'000 CHF. Nach Abzug der Einmalvergütung (EIV) vom Bund können die Nettokosten deutlich tiefer ausfallen. Eine solche Anlage produziert ca. 9\'000 – 10\'000 kWh Strom pro Jahr.',
  },
  {
    question: 'Wie viel Strom produziert eine Solaranlage?',
    answer: 'In der Schweiz produziert eine Solaranlage pro kWp Leistung etwa 900 – 1\'000 kWh Strom pro Jahr. Eine 10 kWp Anlage erzeugt also rund 9\'000 – 10\'000 kWh jährlich – das reicht oft, um einen grossen Teil des Stromverbrauchs eines Einfamilienhauses zu decken.',
  },
  {
    question: 'Lohnt sich eine Solaranlage in der Schweiz?',
    answer: 'Ja. Durch steigende Strompreise und die verfügbaren Förderungen amortisieren sich viele Anlagen in der Schweiz innerhalb von 10 bis 15 Jahren. Bei einer Lebensdauer von 25 – 30 Jahren bedeutet das jahrelanger kostenloser Strom vom eigenen Dach.',
  },
  {
    question: 'Wie viele Solarmodule braucht ein Einfamilienhaus?',
    answer: 'Für eine typische Anlage von 8 bis 10 kWp werden in der Regel 20 bis 30 Solarmodule benötigt, abhängig von der Modulleistung (meist 400 – 450 Watt pro Modul).',
  },
  {
    question: 'Wie gross muss mein Dach für eine Solaranlage sein?',
    answer: 'Für 1 kWp Leistung werden ungefähr 6 bis 7 m² Dachfläche benötigt. Eine 10 kWp Anlage benötigt somit ca. 60 – 70 m² geeignete Dachfläche.',
  },
  {
    question: 'Welche Förderungen gibt es für Solaranlagen in der Schweiz?',
    answer: 'In der Schweiz gibt es die Einmalvergütung (EIV) vom Bund. Die typischen Förderbeträge liegen bei ungefähr 300 – 400 CHF pro kWp. Zusätzlich bieten viele Kantone und Gemeinden eigene Förderprogramme. Die Investition ist zudem steuerlich absetzbar.',
  },
  {
    question: 'Was kostet eine Solaranlage mit Batteriespeicher?',
    answer: 'Ein Batteriespeicher erhöht die Kosten der Solaranlage zusätzlich: ein 5 kWh Speicher kostet ca. 4\'000 – 6\'000 CHF, ein 10 kWh Speicher ca. 7\'000 – 10\'000 CHF. Mit Speicher erhöht sich der Eigenverbrauch des selbst produzierten Stroms deutlich.',
  },
];

export default function SolaranlageKostenPage() {
  return (
    <>
      {/* Schema.org: Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Was kostet eine Solaranlage in der Schweiz? Aktuelle Preise 2025",
            "description": "Aktuelle Kosten für Solaranlagen in der Schweiz. 5–10 kWp Anlagen, Kosten pro kWp, Förderungen und Batteriespeicher.",
            "author": { "@type": "Organization", "name": "PVPro" },
            "publisher": { "@type": "Organization", "name": "PVPro", "url": "https://www.pvpro.ch" },
            "datePublished": "2025-01-01",
            "dateModified": new Date().toISOString().split('T')[0],
          })
        }}
      />
      {/* Schema.org: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
            }))
          })
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-50 to-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-sans font-semibold tracking-normal text-gray-900 mb-6 leading-tight">
              Was kostet eine Solaranlage in der Schweiz?
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Die Kosten hängen hauptsächlich von der Grösse der Anlage, der Dachfläche und den verwendeten Komponenten ab.
            </p>
            <p className="text-xl text-gray-600 mb-8">
              Für ein typisches Einfamilienhaus liegen die Preise meist zwischen:
            </p>
            <div className="inline-block bg-primary text-white rounded-2xl px-10 py-6 mb-8">
              <div className="text-4xl sm:text-5xl font-bold mb-1">15'000 – 35'000 CHF</div>
              <div className="text-primary-100 text-base">nach Abzug der Förderungen</div>
            </div>
            <p className="text-gray-600">
              Eine durchschnittliche Anlage für ein Einfamilienhaus hat eine Leistung von etwa <strong>8 bis 10 kWp</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Preistabelle */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-sans font-semibold tracking-normal text-center text-gray-900 mb-4">
            Kosten einer Solaranlage für ein Einfamilienhaus
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Typische Preisbereiche für Photovoltaikanlagen in der Schweiz
          </p>

          {/* Desktop table */}
          <div className="hidden md:block max-w-4xl mx-auto mb-10 overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-6 py-4 font-semibold">Anlagengrösse</th>
                  <th className="px-6 py-4 font-semibold">Stromproduktion pro Jahr</th>
                  <th className="px-6 py-4 font-semibold">Dachfläche (ca.)</th>
                  <th className="px-6 py-4 font-semibold">Kosten (ca.)</th>
                </tr>
              </thead>
              <tbody>
                {costTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{row.size}</td>
                    <td className="px-6 py-4 text-gray-700">{row.production}</td>
                    <td className="px-6 py-4 text-gray-700">{row.area}</td>
                    <td className="px-6 py-4 font-bold text-primary">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4 mb-10">
            {costTable.map((row, i) => (
              <div key={i} className={`rounded-2xl p-5 border-2 ${i === 1 ? 'border-primary bg-primary-50' : 'border-gray-200 bg-white'}`}>
                {i === 1 && (
                  <div className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3">
                    Beliebteste Grösse
                  </div>
                )}
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xl font-bold text-gray-900">{row.size}</span>
                  <span className="text-xl font-bold text-primary">{row.price}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div><span className="font-medium">Produktion:</span> {row.production}</div>
                  <div><span className="font-medium">Dachfläche:</span> {row.area}</div>
                </div>
                <div className="text-xs text-gray-400 mt-2">Ideal für: {row.ideal}</div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 max-w-3xl mx-auto text-sm text-gray-600 text-center">
            Diese Preise enthalten normalerweise: <strong>Solarmodule, Wechselrichter, Montage und Installation.</strong> Der tatsächliche Preis hängt von Dachtyp, Ausrichtung und gewählten Komponenten ab.
          </div>
        </div>
      </section>

      {/* Kosten pro kWp */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-sans font-semibold tracking-normal text-gray-900 mb-4">
              Kosten pro kWp in der Schweiz
            </h2>
            <p className="text-gray-600 mb-6">
              Die Kosten für eine Photovoltaikanlage werden häufig pro kWp (Kilowatt Peak) berechnet.
              In der Schweiz liegen die durchschnittlichen Kosten bei:
            </p>
            <div className="bg-white rounded-2xl border-2 border-primary p-8 text-center mb-6">
              <div className="text-4xl font-bold text-primary mb-2">1'800 – 2'800 CHF <span className="text-2xl">pro kWp</span></div>
              <p className="text-gray-600 text-sm mt-2">
                Der Preis pro kWp sinkt bei grösseren Anlagen, da Installationskosten besser verteilt werden können.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10 kW Solaranlage – dedizierte Sektion für wichtige Google-Abfrage */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-sans font-semibold tracking-normal text-gray-900 mb-4">
              Was kostet eine 10 kW Solaranlage in der Schweiz?
            </h2>
            <p className="text-gray-600 mb-6">
              Eine Photovoltaikanlage mit <strong>10 kWp Leistung</strong> kostet in der Schweiz typischerweise:
            </p>
            <div className="bg-primary-50 rounded-2xl p-8 mb-6">
              <div className="text-4xl font-bold text-primary mb-3">22'000 – 30'000 CHF</div>
              <p className="text-gray-700 text-sm">nach Abzug der Förderungen</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-3">
                <Sun className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Jährliche Stromproduktion</p>
                  <p className="text-gray-600">Eine 10 kWp Anlage produziert in der Schweiz ungefähr <strong>9'000 – 10'000 kWh Strom pro Jahr</strong>. Das reicht oft aus, um einen grossen Teil des Stromverbrauchs eines Einfamilienhauses zu decken.</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-5 bg-yellow-50 border border-yellow-200 rounded-xl">
              <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-yellow-800 text-sm">
                Für eine 10 kWp Anlage benötigen Sie ca. <strong>62 – 68 m² Dachfläche</strong> und 20 – 25 Solarmodule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solaranlage mit Speicher */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-sans font-semibold tracking-normal text-gray-900 mb-4">
              Wie viel kostet eine Solaranlage mit Speicher?
            </h2>
            <p className="text-gray-600 mb-6">
              Ein Batteriespeicher erhöht die Kosten einer Solaranlage – er ermöglicht aber, mehr eigenen Strom zu nutzen und weniger ins Netz einzuspeisen.
            </p>

            <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-200 mb-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="px-6 py-4 font-semibold">Speichergrösse</th>
                    <th className="px-6 py-4 font-semibold">Kosten (ca.)</th>
                  </tr>
                </thead>
                <tbody>
                  {storageTable.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 font-semibold text-gray-900 flex items-center gap-2">
                        <Battery className="w-4 h-4 text-primary" />{row.size}
                      </td>
                      <td className="px-6 py-4 font-bold text-primary">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="md:hidden space-y-3 mb-6">
              {storageTable.map((row, i) => (
                <div key={i} className="flex justify-between items-center bg-white rounded-xl border border-gray-200 px-5 py-4">
                  <div className="flex items-center gap-2 font-semibold text-gray-900">
                    <Battery className="w-4 h-4 text-primary" />{row.size}
                  </div>
                  <span className="font-bold text-primary">{row.price}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 mb-4">
              Ein Speicher kann den Eigenverbrauch des selbst produzierten Stroms deutlich erhöhen.
            </p>
            <Link
              href="/solaranlage-mit-speicher"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              → Mehr Informationen: Solaranlage mit Speicher
            </Link>
          </div>
        </div>
      </section>

      {/* Kostenfaktoren */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-sans font-semibold tracking-normal text-center text-gray-900 mb-4">
            Welche Faktoren beeinflussen die Kosten?
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Die wichtigsten Faktoren, die den Preis einer Solaranlage in der Schweiz bestimmen
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {costFactors.map((f, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <f.icon className="w-9 h-9 text-primary mb-4" />
                <h3 className="text-lg font-sans font-semibold tracking-normal text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Förderungen */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-sans font-semibold tracking-normal text-gray-900 mb-4">
              Förderungen für Solaranlagen in der Schweiz
            </h2>
            <p className="text-gray-600 mb-6">
              In der Schweiz unterstützt der Bund Photovoltaikanlagen mit der sogenannten <strong>Einmalvergütung (EIV)</strong>.
              Diese Förderung reduziert die Investitionskosten deutlich.
            </p>
            <div className="bg-primary-50 rounded-2xl p-8 mb-6">
              <div className="flex items-start gap-4">
                <PiggyBank className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <p className="text-2xl font-bold text-primary mb-1">300 – 400 CHF pro kWp</p>
                  <p className="text-gray-700">Typische Förderbeträge des Bundes (EIV). Die Höhe hängt von der Anlagengrösse ab.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Rechenbeispiel: 10 kWp Anlage
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Bruttokosten</span>
                  <span className="font-medium">CHF 26'000</span>
                </div>
                <div className="flex justify-between text-primary">
                  <span>– Einmalvergütung EIV (ca. 350 CHF/kWp)</span>
                  <span className="font-medium">– CHF 3'500</span>
                </div>
                <div className="flex justify-between text-primary">
                  <span>– Kantonale Förderung (Beispiel)</span>
                  <span className="font-medium">– CHF 2'000</span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between">
                  <span className="font-semibold text-gray-900">Effektive Kosten (Beispiel)</span>
                  <span className="font-bold text-xl text-primary">CHF 20'500</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-3">Richtwert. Tatsächliche Förderungen je nach Kanton und Anlagengrösse.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Rechner CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-primary-50 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6">
            <Calculator className="w-14 h-14 text-primary flex-shrink-0" />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Solar Rechner: Kosten berechnen</h3>
              <p className="text-gray-600 text-sm">
                Schätzen Sie die Kosten Ihrer Solaranlage anhand Ihrer Dachfläche und Ihres Stromverbrauchs.
              </p>
            </div>
            <Link href="/solarrechner" className="btn-primary px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap flex-shrink-0">
              Solar Rechner starten →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Offerte */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <CtaAnfrage
              title="Jetzt kostenlose Offerten erhalten"
              subtitle="Vergleichen Sie bis zu 3 Angebote von geprüften Schweizer Solarteuren. In 2 Minuten fertig."
              ctaText="Kostenlose Offerte anfordern"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-sans font-semibold tracking-normal text-center text-gray-900 mb-4">
            FAQ – Häufige Fragen zu Solaranlage Kosten
          </h2>
          <p className="text-center text-gray-600 mb-10">Antworten auf die häufigsten Fragen rund um die Kosten einer Solaranlage in der Schweiz</p>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-sans font-semibold tracking-normal text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kurz gesagt / Summary box */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-gray-200 p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kurz gesagt</h2>
            <p className="text-gray-600 mb-4">Eine Solaranlage kostet in der Schweiz typischerweise:</p>
            <div className="text-4xl font-bold text-primary mb-3">15'000 – 35'000 CHF</div>
            <p className="text-gray-600 text-sm mb-6">für ein Einfamilienhaus</p>
            <p className="text-gray-500 text-sm">
              Die genauen Kosten hängen von der Dachfläche, der Anlagengrösse und den möglichen Förderungen ab.
              Holen Sie sich unverbindlich 3 Offerten von geprüften Installateuren ein.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
