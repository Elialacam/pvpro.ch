import Link from 'next/link';
import { ChevronRight, Sun, CheckCircle2, Home, Ruler, Cpu, Wrench, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import EinfamilienhausRechner, { EinfamilienhausFaq } from '@/components/EinfamilienhausRechner';

export const metadata: Metadata = {
  title: 'Solaranlage Einfamilienhaus Schweiz: Kosten, Grösse und Vorteile | PVPro.ch',
  description: 'Was kostet eine Solaranlage für ein Einfamilienhaus in der Schweiz? Preise, Grösse, Förderung und Tipps einfach erklärt. Jetzt Angebote vergleichen.',
  alternates: {
    canonical: 'https://www.pvpro.ch/solaranlage-einfamilienhaus',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solaranlage-einfamilienhaus',
      'fr-CH': 'https://www.pvpro.ch/fr/solaire-maison-individuelle',
      'en-CH': 'https://www.pvpro.ch/en/solar-detached-house',
      'it-CH': 'https://www.pvpro.ch/it/solare-casa-unifamiliare',
      'x-default': 'https://www.pvpro.ch/solaranlage-einfamilienhaus',
    },
  },
};

const costRows = [
  { size: 'Kleine Anlage (6–8 kWp)', price: "ca. 20'000 – 25'000 CHF", highlight: false },
  { size: 'Standard (8–10 kWp)', price: "ca. 25'000 – 30'000 CHF", highlight: true },
  { size: 'Grössere Anlage (10–15 kWp)', price: "ca. 30'000 – 35'000 CHF", highlight: false },
];

const exampleRows = [
  { label: 'Dachfläche', value: '60 m²' },
  { label: 'Leistung', value: '10 kWp' },
  { label: 'Kosten', value: "ca. 25'000 – 30'000 CHF" },
  { label: 'Förderung EIV', value: "ca. 3'600 CHF" },
  { label: 'Effektive Kosten', value: "ca. 20'000 – 26'000 CHF", highlight: true },
];

const factors = [
  { icon: Home, title: 'Dachgrösse und Ausrichtung', text: 'Süddächer liefern die beste Leistung. Ost-/Westdächer sind ebenfalls gut geeignet.' },
  { icon: Ruler, title: 'Anlagengrösse', text: 'Grössere Anlagen sind pro kWp günstiger — Skaleneffekte wirken sich auf den Preis aus.' },
  { icon: Cpu, title: 'Technik und Komponenten', text: 'Module, Wechselrichter und optionaler Speicher beeinflussen Kosten und Leistung.' },
  { icon: Wrench, title: 'Installationsaufwand', text: 'Komplexe Dächer oder schwierige Zugänge erhöhen den Montageaufwand.' },
];

const benefits = [
  'Stromkosten deutlich senken',
  'Unabhängigkeit vom Strommarkt erhöhen',
  'Wert der Immobilie steigern',
  'Nachhaltige Energie direkt vom Dach nutzen',
];

export default function SolaranlageEinfamilienhausPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative bg-[#0f1f3d] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Solaranlage Einfamilienhaus</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                <Sun className="w-3.5 h-3.5" /> Für Hausbesitzer
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Solaranlage für Einfamilienhaus: Kosten, Grösse und Vorteile
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Eine Solaranlage senkt Ihre Stromkosten und macht Sie unabhängiger. Typischerweise wird ein Einfamilienhaus mit <strong className="text-white">8–12 kWp</strong> ausgestattet — das entspricht ca. <strong className="text-white">50–70 m²</strong> Dachfläche.
              </p>
              <Link
                href="/anfrage"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
                style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
              >
                Kostenlose Offerte anfordern <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '8–12 kWp', label: 'Typische Anlagengrösse' },
                { value: "25'000–30'000", label: 'CHF Investition' },
                { value: "9'000–11'000", label: 'kWh Produktion/Jahr' },
                { value: '25–30 Jahre', label: 'Lebensdauer' },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl bg-white/5 border border-white/10 px-5 py-4">
                  <p className="text-xl sm:text-2xl font-bold text-white mb-1">{s.value}</p>
                  <p className="text-xs text-white/50 uppercase tracking-wide leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 py-16 space-y-20">

        {/* ── Interactive calculator ── */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Grössenrechner</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Wie gross sollte Ihre Solaranlage sein?
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Die optimale Grösse hängt vom Stromverbrauch ab. Als Faustregel gilt:{' '}
                <strong className="text-gray-800">1'000 kWh Verbrauch → ca. 1–2 kWp Anlage.</strong>
              </p>
              <p className="text-gray-500 leading-relaxed">
                Wenn Sie eine Wärmepumpe oder ein Elektroauto haben, lohnt sich oft eine grössere Anlage. Nutzen Sie den Rechner rechts, um eine erste Empfehlung zu erhalten.
              </p>
            </div>
            <div className="lg:col-span-3">
              <EinfamilienhausRechner />
            </div>
          </div>
        </section>

        {/* ── Cost table ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Kosten</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Was kostet eine Solaranlage für ein Einfamilienhaus?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Für eine typische 10-kWp-Anlage mit ca. 50 m² Dachfläche sind Investitionen von rund{' '}
              <strong className="text-gray-800">25'000 bis 30'000 CHF</strong> realistisch.
              Nach Förderungen und Steuerabzügen kann der effektive Preis deutlich tiefer liegen.
            </p>
            <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="grid grid-cols-2 bg-gray-50 px-5 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
                <span>Anlagengrösse</span><span>Richtwert</span>
              </div>
              {costRows.map((row) => (
                <div key={row.size} className={`grid grid-cols-2 px-5 py-4 border-t border-gray-100 ${row.highlight ? 'bg-orange-50' : 'bg-white'}`}>
                  <span className="font-bold text-gray-800 text-sm">{row.size}</span>
                  <span className={`font-bold text-sm ${row.highlight ? 'text-[#F97316]' : 'text-gray-700'}`}>{row.price}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img src="/images/asset-installateur-dach-1.png" alt="Solaranlage Einfamilienhaus Schweiz" className="w-full h-80 object-cover" />
          </div>
        </section>

        {/* ── Production ── */}
        <section className="rounded-3xl bg-[#0f1f3d] p-8 sm:p-12 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #F97316 0%, transparent 55%)' }} />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Stromproduktion</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Wie viel Strom produziert eine Solaranlage?
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Eine typische Anlage auf einem Einfamilienhaus produziert{' '}
                <strong className="text-white">ca. 9'000 – 11'000 kWh pro Jahr</strong> — das entspricht dem Grossteil des Strombedarfs eines Haushalts.
              </p>
              {[
                { label: '8 kWp Anlage', value: "7'200 – 8'800 kWh/Jahr", pct: 65 },
                { label: '10 kWp Anlage', value: "9'000 – 11'000 kWh/Jahr", pct: 80 },
                { label: '12 kWp Anlage', value: "10'800 – 13'200 kWh/Jahr", pct: 95 },
              ].map((row) => (
                <div key={row.label} className="mb-4">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-white/70">{row.label}</span>
                    <span className="text-white font-bold">{row.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-[#F97316]" style={{ width: `${row.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/asset-haus-luftbild-1.png" alt="Einfamilienhaus mit Solaranlage" className="w-full h-72 object-cover" />
            </div>
          </div>
        </section>

        {/* ── Lohnt sich ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img src="/images/asset-beratung-indoor-2.png" alt="Solaranlage Beratung" className="w-full h-80 object-cover" />
          </div>
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Wirtschaftlichkeit</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Lohnt sich eine Solaranlage für ein Einfamilienhaus?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Ja, in den meisten Fällen lohnt sich eine Photovoltaikanlage langfristig. Durch Eigenverbrauch und Förderungen amortisiert sich die Anlage über die Jahre.
            </p>
            <div className="space-y-3">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Förderung ── */}
        <section className="bg-gray-50 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Förderungen</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Förderungen für Solaranlagen in der Schweiz
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Für eine 10-kWp-Anlage entspricht die Bundesförderung etwa <strong className="text-gray-800">3'600 CHF</strong>. Dazu kommen kantonale Förderungen und Steuerabzüge.
              </p>
              <div className="space-y-3">
                {[
                  'Einmalvergütung (EIV) vom Bund: ca. 360 CHF pro kWp',
                  'Zusätzliche kantonale Förderprogramme',
                  'Steuerliche Abzüge auf Bundesebene',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/foerderungen" className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-[#F97316] hover:underline">
                Alle Förderungen ansehen <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Investition (10 kWp)', value: "25'000 – 30'000 CHF", color: 'text-gray-800' },
                { label: 'Bundesförderung EIV', value: '– 3\'600 CHF', color: 'text-green-600' },
                { label: 'Kantonale Förderung', value: 'variiert', color: 'text-green-600' },
                { label: 'Steuerabzüge', value: 'variiert', color: 'text-green-600' },
                { label: 'Effektive Kosten', value: "ca. 20'000 – 26'000 CHF", color: 'text-[#F97316]', highlight: true },
              ].map((row, i) => (
                <div key={row.label} className={`flex justify-between items-center px-5 py-3.5 rounded-xl ${row.highlight ? 'bg-orange-50 border border-orange-100' : 'bg-white border border-gray-100'}`}>
                  <span className={`text-sm ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-600'}`}>{row.label}</span>
                  <span className={`font-bold text-sm ${row.color}`}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Speicher ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Speicher</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Mit oder ohne Batteriespeicher?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-100 p-6 shadow-sm bg-white">
              <p className="font-bold text-gray-900 text-lg mb-1">Ohne Speicher</p>
              <p className="text-sm text-gray-400 mb-4">Günstigere Variante</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-300 flex-shrink-0" /><span>Günstigere Anschaffung</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-300 flex-shrink-0" /><span>Schnellere Amortisation</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-300 flex-shrink-0" /><span>Eigenverbrauch ca. 25–40 %</span></div>
              </div>
            </div>
            <div className="rounded-2xl border border-[#F97316]/30 p-6 shadow-sm bg-orange-50">
              <p className="font-bold text-gray-900 text-lg mb-1">Mit Batteriespeicher</p>
              <p className="text-sm text-[#F97316] font-semibold mb-4">Empfohlen bei hohem Verbrauch</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0" /><span>Eigenverbrauch bis 50–65 %</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0" /><span>Strom auch am Abend nutzen</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0" /><span>Höhere Unabhängigkeit</span></div>
              </div>
            </div>
          </div>
          <Link href="/solaranlage-mit-speicher" className="inline-flex items-center gap-2 mt-5 text-sm font-bold text-[#F97316] hover:underline">
            Mehr über Batteriespeicher erfahren <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* ── Factors ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Einflussfaktoren</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Welche Faktoren beeinflussen die Kosten?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {factors.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="flex gap-4 items-start bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Example ── */}
        <section className="bg-gray-50 rounded-3xl p-8 sm:p-12">
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Rechenbeispiel</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Beispiel: Solaranlage für ein Einfamilienhaus</h2>
          <div className="max-w-lg">
            <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              {exampleRows.map((row, i) => (
                <div key={row.label} className={`flex justify-between items-center px-6 py-4 ${i !== 0 ? 'border-t border-gray-100' : ''} ${row.highlight ? 'bg-orange-50' : 'bg-white'}`}>
                  <span className={`text-sm ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-600'}`}>{row.label}</span>
                  <span className={`font-bold ${row.highlight ? 'text-[#F97316] text-base' : 'text-gray-900 text-sm'}`}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Häufig gestellte Fragen zur Solaranlage Einfamilienhaus
          </h2>
          <EinfamilienhausFaq />
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <Sun className="w-10 h-10 text-[#F97316] mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Angebote vergleichen und Kosten optimieren
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Die Preise für Solaranlagen unterscheiden sich stark je nach Anbieter. Über PVPro erhalten Sie kostenlos bis zu 3 Offerten von geprüften Installateuren in Ihrer Region.
          </p>
          <Link
            href="/anfrage"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
          >
            Kostenlose Offerte anfordern →
          </Link>
        </section>

      </div>
    </main>
  );
}
