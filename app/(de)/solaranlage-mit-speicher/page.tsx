import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Battery, Sun, Home, Zap, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';
import { Metadata } from 'next';
import { SpeicherGroesse, SpeicherFAQ } from '@/components/SpeicherVergleich';

export const metadata: Metadata = {
  title: 'Solaranlage mit Speicher: Kosten, Vorteile und Speichergröße in der Schweiz | PVPro.ch',
  description: 'Wie funktioniert eine Solaranlage mit Speicher? Erfahren Sie Kosten, Vorteile, Speichergrößen und wie viel Strom Sie selbst nutzen können.',
  alternates: {
    canonical: 'https://www.pvpro.ch/solaranlage-mit-speicher',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solaranlage-mit-speicher',
      'fr-CH': 'https://www.pvpro.ch/fr/solaire-avec-batterie',
      'en-CH': 'https://www.pvpro.ch/en/solar-with-battery',
      'it-CH': 'https://www.pvpro.ch/it/solare-con-accumulo',
      'x-default': 'https://www.pvpro.ch/solaranlage-mit-speicher',
    },
  },
};

const vorteile = [
  { icon: TrendingUp, title: 'Weniger Strom kaufen',       text: 'Sie beziehen deutlich weniger Strom vom Energieversorger — Tag für Tag.' },
  { icon: Zap,        title: 'Tiefere Stromkosten',        text: 'Langfristig sinken Ihre Stromkosten erheblich, gerade bei steigenden Preisen.' },
  { icon: Home,       title: 'Mehr Unabhängigkeit',        text: 'Weniger Abhängigkeit vom Strommarkt — auch abends und nachts.' },
  { icon: Sun,        title: 'Solarstrom optimal nutzen',  text: 'Der selbst erzeugte Strom wird nicht mehr ungenutzt ins Netz eingespeist.' },
];

const wennSinnvoll = [
  'Ein Elektroauto wird geladen',
  'Eine Wärmepumpe wird betrieben',
  'Der Stromverbrauch am Abend ist hoch',
  'Möglichst viel Solarstrom selbst genutzt werden soll',
];

export default function SolaranlageMitSpeicherPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/blog-3.webp" alt="Solaranlage mit Speicher" fill className="object-cover" priority />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-10">
            <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-300 font-medium">Solaranlage mit Speicher</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                <Battery className="w-3.5 h-3.5" /> Batteriespeicher
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                Solaranlage mit Speicher: Kosten, Vorteile und Funktionsweise
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Ein Batteriespeicher ermöglicht es, den selbst erzeugten Solarstrom auch abends und nachts zu nutzen — statt ihn ins Netz einzuspeisen.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '70%',      label: 'Eigenverbrauch möglich' },
                  { value: '8–15 kWh', label: 'Typische Speichergrösse' },
                  { value: '25–40k',   label: 'CHF Gesamtkosten' },
                ].map(s => (
                  <div key={s.label} className="rounded-2xl p-4 text-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <p className="text-xl font-bold text-white">{s.value}</p>
                    <p className="text-xs text-gray-500 mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl p-8" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <p className="text-white font-bold text-lg mb-6">Eigenverbrauch im Vergleich</p>
              <div className="flex flex-col gap-6">
                {[
                  { label: 'Ohne Speicher', pct: 30, color: '#6b7280' },
                  { label: 'Mit Speicher',  pct: 70, color: '#F97316' },
                ].map(item => (
                  <div key={item.label}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400 font-medium">{item.label}</span>
                      <span className="text-sm font-bold" style={{ color: item.color }}>~{item.pct}%</span>
                    </div>
                    <div className="h-4 rounded-full overflow-hidden bg-white/10">
                      <div className="h-full rounded-full" style={{ width: `${item.pct}%`, background: item.color }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-6">Durchschnittswerte für ein Einfamilienhaus mit 10 kWp Solaranlage</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WIE FUNKTIONIERT ES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Funktionsweise</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6">
                Wie funktioniert eine Solaranlage mit Speicher?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Eine Photovoltaikanlage erzeugt tagsüber Strom aus Sonnenenergie. Dieser wird zunächst direkt im Haushalt genutzt — für Geräte, Beleuchtung oder Wärmepumpen.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Wenn die Anlage mehr produziert als gerade benötigt wird, speichert der Batteriespeicher die Energie automatisch. Am Abend oder nachts gibt er den Strom wieder ab. Eine intelligente Steuerung sorgt für optimale Verteilung.
              </p>

              <div className="flex items-center gap-3 flex-wrap">
                {[
                  { icon: Sun,     label: 'Solaranlage', color: '#F97316' },
                  { icon: Battery, label: 'Speicher',    color: '#3b82f6' },
                  { icon: Home,    label: 'Haushalt',    color: '#10b981' },
                ].map((item, i, arr) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="flex flex-col items-center gap-2 rounded-2xl px-5 py-4 border border-gray-100 shadow-sm">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${item.color}18` }}>
                          <Icon className="w-5 h-5" style={{ color: item.color }} />
                        </div>
                        <p className="text-xs font-bold text-gray-700">{item.label}</p>
                      </div>
                      {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-gray-300 flex-shrink-0" />}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/hero-family-solar.webp" alt="Solaranlage mit Batteriespeicher" width={700} height={500} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── VORTEILE ── */}
      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Warum lohnt es sich?</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Die Vorteile eines Batteriespeichers
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              Ohne Speicher werden oft nur <strong className="text-gray-800">30%</strong> des erzeugten Solarstroms direkt genutzt. Mit Speicher steigt dieser Wert auf <strong className="text-gray-800">60–70%</strong>.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vorteile.map(v => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="rounded-2xl border border-gray-100 bg-white p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                    <Icon className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── KOSTEN ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Kosten & Preise</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6">
                Was kostet eine Solaranlage mit Speicher?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Die Kosten hängen von Anlagengrösse, Speicherkapazität, Dachtyp und Komponentenqualität ab. Hier typische Richtwerte für ein Einfamilienhaus:
              </p>

              <div className="flex flex-col gap-3">
                {[
                  { label: 'Photovoltaikanlage (ca. 10 kWp)', range: "18'000 – 25'000 CHF", highlight: false },
                  { label: 'Batteriespeicher',                 range: "8'000 – 15'000 CHF",  highlight: false },
                  { label: 'Gesamtanlage',                     range: "25'000 – 40'000 CHF", highlight: true  },
                ].map(row => (
                  <div
                    key={row.label}
                    className={`flex items-center justify-between rounded-2xl px-6 py-4 ${row.highlight ? 'border-2 border-orange-200' : 'border border-gray-100'}`}
                    style={row.highlight ? { background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' } : { background: '#f9fafb' }}
                  >
                    <p className={`font-medium text-sm ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-700'}`}>{row.label}</p>
                    <p className={`font-bold ${row.highlight ? 'text-[#F97316] text-lg' : 'text-gray-900'}`}>{row.range}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4">
                Durch Förderprogramme und höheren Eigenverbrauch kann sich die Anlage über mehrere Jahre wirtschaftlich auszahlen.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/blog-5.webp" alt="Kosten Solaranlage Schweiz" width={700} height={500} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── SPEICHERGRÖSSE (INTERACTIVE) ── */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-orange-400 uppercase tracking-widest mb-3">Speichergrösse</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
                Wie gross sollte Ihr Batteriespeicher sein?
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Die ideale Grösse hängt vom Stromverbrauch Ihres Haushalts und der Grösse Ihrer Solaranlage ab. Ein zu grosser Speicher kann wirtschaftlich weniger sinnvoll sein.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Wählen Sie Ihr Haushaltsprofil, um die empfohlene Speichergrösse und den erwarteten Eigenverbrauch zu sehen.
              </p>
            </div>
            <SpeicherGroesse />
          </div>
        </div>
      </section>

      {/* ── STROMPRODUKTION + WANN LOHNT ES SICH ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/blog-1.webp" alt="Solarstrom Produktion" width={700} height={500} className="w-full h-auto object-cover" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Stromproduktion</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6">
                Wie viel Strom produziert eine Solaranlage?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Eine typische 10-kWp-Anlage produziert in der Schweiz jährlich rund <strong>9'000 – 11'000 kWh</strong> — das entspricht täglich ca. <strong>25–40 kWh</strong>.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Die genaue Menge hängt von Dachausrichtung, Neigungswinkel und der regionalen Sonneneinstrahlung ab.
              </p>

              <p className="font-bold text-gray-900 mb-4">Ein Speicher lohnt sich besonders wenn…</p>
              <div className="flex flex-col gap-2.5">
                {wennSinnvoll.map(w => (
                  <div key={w} className="flex items-center gap-3 rounded-xl px-4 py-3 bg-gray-50 border border-gray-100">
                    <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0" />
                    <p className="text-sm text-gray-700">{w}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              Häufig gestellte Fragen zum Batteriespeicher
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <SpeicherFAQ />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="rounded-3xl p-10 sm:p-16 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-4">Angebote vergleichen</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Jetzt Solaranlage mit Speicher vergleichen
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
              Die Kosten können je nach Installateur und Komponenten stark variieren. Holen Sie kostenlos bis zu 3 Offerten ein und vergleichen Sie.
            </p>
            <Link
              href="/anfrage"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity"
              style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
            >
              Kostenlose Offerte anfordern
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/photovoltaik-komplettloesung-schweiz"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-gray-700 text-sm border border-gray-300 hover:border-gray-500 transition-colors bg-white"
            >
              Photovoltaik Komplettlösung mit Speicher
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
