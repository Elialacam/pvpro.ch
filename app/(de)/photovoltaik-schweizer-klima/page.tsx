import Link from 'next/link';
import { ChevronRight, ArrowRight, Sun, CheckCircle, FileText } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Photovoltaik Schweizer Klima 2026 – Welche Anlage passt? | PVPro.ch',
  description: 'Welche Photovoltaik Anlagen eignen sich für das Schweizer Klima? Schnee, Kälte, Nebel — wir erklären, was wirklich zählt und welche Module in der Schweiz am besten funktionieren.',
  alternates: {
    canonical: 'https://www.pvpro.ch/photovoltaik-schweizer-klima',
    languages: {
      'de-CH': 'https://www.pvpro.ch/photovoltaik-schweizer-klima',
      'fr-CH': 'https://www.pvpro.ch/fr/photovoltaique-climat-suisse',
      'en': 'https://www.pvpro.ch/en/solar-panels-swiss-climate',
      'it-CH': 'https://www.pvpro.ch/it/fotovoltaico-clima-svizzero',
      'x-default': 'https://www.pvpro.ch/photovoltaik-schweizer-klima',
    },
  },
  openGraph: {
    title: 'Photovoltaik Schweizer Klima 2026 – Welche Anlage passt?',
    description: 'Schnee, Kälte, Nebel — welche Solarmodule funktionieren im Schweizer Klima am besten?',
    url: 'https://www.pvpro.ch/photovoltaik-schweizer-klima',
    type: 'website',
    locale: 'de_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: 'Funktioniert eine Solaranlage auch bei Bewölkung?',
    answer: 'Ja. Moderne Module produzieren auch bei bedecktem Himmel Strom, wenn auch mit reduzierter Leistung. Diffuses Licht wird teilweise in Energie umgewandelt.',
  },
  {
    question: 'Muss ich Schnee von den Modulen räumen?',
    answer: 'In der Regel nicht. Auf geneigten Dächern rutscht Schnee schnell ab. Das Räumen ist meist nicht nötig und kann die Module beschädigen.',
  },
  {
    question: 'Produziert eine Solaranlage im Winter überhaupt Strom?',
    answer: 'Ja, aber weniger als im Sommer. Im Winter sind die Sonnenstunden kürzer und der Winkel flacher. Eine gut dimensionierte Anlage produziert auch im Winter einen nützlichen Beitrag.',
  },
  {
    question: 'Sind Solarmodule winterfest?',
    answer: 'Ja. Hochwertige Module sind für Temperaturen bis -40°C ausgelegt und halten Schneelasten von mehreren hundert Kilogramm pro Quadratmeter stand.',
  },
  {
    question: 'Welche Kantone eignen sich am besten für Photovoltaik?',
    answer: "Das Tessin hat mit über 2'100 Sonnenstunden den besten Ausgangspunkt. Aber auch im Mittelland und in der Ostschweiz lohnt sich eine Solaranlage — die Amortisationszeit ist etwas länger, aber immer noch attraktiv.",
  },
];

const modules = [
  {
    title: 'Monokristalline Module',
    badge: 'Empfehlung Mittelland',
    text: 'Die häufigste Wahl für die Schweiz. Hoher Wirkungsgrad auch bei diffusem Licht, robust und langlebig. Ideal für das Mittelland und die Voralpen.',
  },
  {
    title: 'Bifaziale Module',
    badge: 'Ideal bei Schnee',
    text: 'Produzieren auch von der Rückseite Strom — besonders nützlich bei Schnee, der das Licht reflektiert. Interessant für Regionen mit viel Schnee.',
  },
  {
    title: 'Niedriger Temperaturkoeffizient',
    badge: 'Berglagen',
    text: 'Je kleiner der Temperaturkoeffizient, desto besser die Leistung bei Kälte. Besonders relevant für Höhenlagen in der Schweiz.',
  },
];

const sonnenstunden = [
  { region: 'Tessin (Lugano)', stunden: "ca. 2'157" },
  { region: 'Wallis (Sitten)', stunden: "ca. 2'000" },
  { region: 'Genferseeregion', stunden: "ca. 1'800" },
  { region: 'Mittelland (Zürich, Bern)', stunden: "ca. 1'500–1'600" },
  { region: 'Ostschweiz (St. Gallen)', stunden: "ca. 1'500" },
];

export default function PhotovoltaikSchweizKlimaPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/wie-funktioniert" className="hover:text-white/70 transition-colors">Solaranlage</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Photovoltaik im Schweizer Klima</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Sun className="w-3.5 h-3.5" /> Technik &amp; Klima
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Welche Photovoltaik Anlagen eignen sich für das Schweizer Klima?
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Viele Hausbesitzer in der Schweiz fragen sich: Lohnt sich eine Solaranlage wirklich, wenn es oft bewölkt, kalt oder schneebedeckt ist? Die Antwort überrascht viele: Moderne Photovoltaikanlagen funktionieren auch bei Schnee, Nebel und tiefen Temperaturen zuverlässig — und in manchen Fällen sogar besser als in wärmeren Regionen.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: "1'300–2'100", sub: 'Sonnenstunden je nach Kanton', note: 'je nach Höhenlage und Region' },
              { val: '+5–10%', sub: 'Mehrertrag bei Kälte', note: 'dank physikalischem Temperatureffekt' },
              { val: '25–30 Jahre', sub: 'Lebensdauer auch im Schweizer Klima', note: 'mit Herstellergarantie' },
            ].map(s => (
              <div key={s.val} className="rounded-2xl p-5 text-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <p className="text-xl font-bold text-white mb-0.5">{s.val}</p>
                <p className="text-[#F97316] text-sm font-semibold">{s.sub}</p>
                <p className="text-gray-500 text-xs mt-1">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 py-16 space-y-20">

        {/* ── Sonnenstunden ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Solarertrag nach Region</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Wie beeinflusst das Schweizer Klima die Solarproduktion?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Die Schweiz hat ein sehr vielfältiges Klima — vom nebligen Mittelland bis zum sonnigen{' '}
              <Link href="/it/fotovoltaico-ticino" className="text-[#F97316] hover:underline font-medium">Tessin</Link>.
              Was viele nicht wissen: Photovoltaikmodule brauchen kein heisses Wetter, sondern Licht. Und Licht gibt es in der Schweiz reichlich, auch im Winter.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Selbst im Mittelland mit durchschnittlich 1&apos;500 Sonnenstunden produziert eine 10-kWp-Anlage rund 9&apos;000–10&apos;000 kWh pro Jahr — genug für einen grossen Teil des Strombedarfs eines Einfamilienhauses. Erfahren Sie mehr über die{' '}
              <Link href="/solaranlage-kosten" className="text-[#F97316] hover:underline font-medium">Kosten einer Solaranlage</Link>{' '}
              in der Schweiz.
            </p>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                    <th className="text-left px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Region</th>
                    <th className="text-right px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Sonnenstunden/Jahr</th>
                  </tr>
                </thead>
                <tbody>
                  {sonnenstunden.map((row, i) => (
                    <tr key={row.region} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-5 py-3.5 text-gray-700">{row.region}</td>
                      <td className="px-5 py-3.5 text-right font-semibold text-gray-900">{row.stunden}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Schnee und Kälte ── */}
        <section>
          <div className="mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Winterbetrieb</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Was passiert mit Solarmodulen bei Schnee und Kälte?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Schnee',
                badge: 'Kein Problem',
                text: 'Schnee auf Modulen reduziert kurzfristig die Produktion. Jedoch rutscht Schnee auf geneigten Dächern in der Regel schnell ab — die Module selbst helfen dabei, da sie leicht Wärme abgeben. Nach einem Schneefall ist die Anlage meist innerhalb von Stunden wieder voll produktiv.',
              },
              {
                title: 'Kälte',
                badge: 'Sogar vorteilhaft',
                text: 'Photovoltaikmodule arbeiten bei Kälte effizienter als bei Hitze. Ab etwa 25°C sinkt der Wirkungsgrad leicht. Im kühlen Schweizer Frühling und Herbst hingegen produzieren die Module oft auf Hochtouren. Mehr dazu in unserem Artikel über die Solaranlage im Winter.',
              },
              {
                title: 'Nebel',
                badge: 'Reduziert, nicht null',
                text: 'Im Nebel ist die Produktion reduziert, aber nicht null. Diffuses Licht wird von modernen Modulen noch teilweise in Strom umgewandelt. Besonders leistungsstarke monokristalline Module sind hier im Vorteil.',
              },
            ].map(c => (
              <div key={c.title} className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-2.5 py-1 rounded-full mb-4">{c.badge}</span>
                <h3 className="font-bold text-gray-900 text-base mb-3">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-orange-50 border border-orange-200 rounded-xl p-5">
            <p className="text-orange-800 text-sm leading-relaxed">
              <strong className="text-orange-600">Tipp:</strong> Lesen Sie unseren ausführlichen Artikel über{' '}
              <Link href="/blog/solaranlage-winter-schweiz" className="text-[#F97316] hover:underline font-medium">Solaranlage im Winter</Link>{' '}
              mit konkreten Produktionszahlen und dem Winterstrombonus 2026.
            </p>
          </div>
        </section>

        {/* ── Welche Module ── */}
        <section>
          <div className="mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Modulwahl</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Welche Module eignen sich besonders für die Schweiz?
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl">
              Nicht alle Module sind gleich gut für das Schweizer Klima geeignet. Diese Eigenschaften sind wichtig:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {modules.map(m => (
              <div key={m.title} className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-2.5 py-1 rounded-full mb-4">{m.badge}</span>
                <h3 className="font-bold text-gray-900 text-base mb-3">{m.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Alle Kantone ── */}
        <section className="rounded-3xl p-10 sm:p-12" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
          <div className="max-w-3xl">
            <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Lohnt sich Solar überall?</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
              Lohnt sich eine Solaranlage in allen Schweizer Kantonen?
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Ja — auch in sonnenarmen Kantonen lohnt sich eine Solaranlage. Die Gründe:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Die Strompreise in der Schweiz sind hoch',
                <>Die Bundesförderung (<Link href="/foerderungen" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">Einmalvergütung EIV</Link>) gilt in der ganzen Schweiz</>,
                'Moderne Module auch bei diffusem Licht effizient produzieren',
                <>Die Amortisationszeit liegt auch im Mittelland bei 8–10 Jahren</>,
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-5">
              <p className="text-orange-200 text-sm leading-relaxed">
                Im{' '}
                <Link href="/it/fotovoltaico-ticino" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">Tessin</Link>{' '}
                amortisiert sich eine Anlage bereits in 4–6 Jahren — der beste Wert der ganzen Schweiz. Im{' '}
                <Link href="/solaranlage-zurich" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">Kanton Zürich</Link>{' '}
                liegt die Amortisationszeit bei 7–9 Jahren.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <FileText className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Jetzt prüfen, ob sich eine Solaranlage für Ihr Dach lohnt
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Unabhängig vom Kanton und Klima — unsere zertifizierten Installateure berechnen das Potenzial Ihres Daches und erstellen Ihnen eine kostenlose, massgeschneiderte Offerte.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/anfrage"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
              style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
            >
              Kostenlose Offerte anfordern <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-5">
            Möchten Sie zuerst{' '}
            <Link href="/solaranlage-offerte-einholen" className="text-[#F97316] hover:underline font-medium">Offerten vergleichen</Link>?{' '}
            Oder{' '}
            <Link href="/vergleichsportal-photovoltaik-schweiz" className="text-[#F97316] hover:underline font-medium">Anbieter vergleichen</Link>?
          </p>
        </section>

        {/* ── FAQ ── */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Häufige Fragen</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Häufig gestellte Fragen</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-900 text-sm select-none list-none">
                  {faq.question}
                  <span className="ml-4 text-[#F97316] flex-shrink-0 text-lg group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-50">
                  <p className="pt-4">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-500 text-sm mb-4">Weitere Informationen:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/foerderungen" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Förderungen Schweiz
              </Link>
              <Link href="/solaranlage-kosten" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Kosten Solaranlage
              </Link>
              <Link href="/vergleichsportal-photovoltaik-schweiz" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Anbieter vergleichen
              </Link>
              <Link href="/blog/solaranlage-winter-schweiz" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Solaranlage im Winter
              </Link>
              <Link href="/anfrage" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                Offerte anfragen <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>

      <FaqSchema faqs={faqs} />
    </main>
  );
}
