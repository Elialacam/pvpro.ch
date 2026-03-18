import Link from 'next/link';
import { ChevronRight, Sun, Zap, TrendingDown, CheckCircle2, Home, Ruler, Award, Wrench } from 'lucide-react';
import { Metadata } from 'next';
import PhotovoltaikFaq from '@/components/PhotovoltaikFaq';

export const metadata: Metadata = {
  title: 'Photovoltaik Kosten pro m² Schweiz: Preise, Beispiele und Berechnung | PVPro.ch',
  description: 'Wie viel kostet Photovoltaik pro m² in der Schweiz? Preise, Beispiele und Kosten pro kWp einfach erklärt. Jetzt Angebote vergleichen.',
  alternates: {
    canonical: 'https://www.pvpro.ch/photovoltaik-kosten-pro-m2',
    languages: {
      'de-CH': 'https://www.pvpro.ch/photovoltaik-kosten-pro-m2',
      'fr-CH': 'https://www.pvpro.ch/fr/cout-pv-par-m2',
      'en-CH': 'https://www.pvpro.ch/en/solar-cost-per-m2',
      'it-CH': 'https://www.pvpro.ch/it/costo-fv-per-m2',
      'x-default': 'https://www.pvpro.ch/photovoltaik-kosten-pro-m2',
    },
  },
};

const priceRows = [
  { label: 'Einfache Anlage', range: 'ca. 200 – 250 CHF', color: '#6b7280', highlight: false },
  { label: 'Standardanlage', range: 'ca. 250 – 350 CHF', color: '#F97316', highlight: true },
  { label: 'Hochwertige Anlage', range: 'ca. 350 – 400+ CHF', color: '#1e3a5f', highlight: false },
];

const comparisonRows = [
  { unit: 'pro m²', price: '200 – 400 CHF', note: 'Erste grobe Einschätzung' },
  { unit: 'pro kWp', price: "1'000 – 1'500 CHF", note: 'Genauere Planung & Offerte' },
];

const exampleRows = [
  { position: 'Dachfläche', value: '60 m²', last: false },
  { position: 'Preis pro m²', value: '250 CHF', last: false },
  { position: 'Gesamtpreis (Richtwert)', value: "ca. 15'000 CHF", last: true },
];

const factors = [
  { icon: Home, title: 'Dachtyp', text: 'Ein Flachdach ist oft günstiger zu installieren als ein komplexes Steildach.' },
  { icon: Ruler, title: 'Anlagengrösse', text: 'Grössere Anlagen sind pro m² meist günstiger — Skaleneffekt.' },
  { icon: Award, title: 'Modulqualität', text: 'Hochwertige Module kosten mehr, liefern aber oft höhere Leistung pro m².' },
  { icon: Wrench, title: 'Montageaufwand', text: 'Schwierige Dächer oder zusätzliche Arbeiten erhöhen den Preis deutlich.' },
];

export default function PhotovoltaikKostenProM2Page() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative bg-[#0f1f3d] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #F97316 0%, transparent 60%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Photovoltaik Kosten pro m²</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Sun className="w-3.5 h-3.5" /> Kosten & Preise
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Photovoltaik Kosten pro m² in der Schweiz
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl">
              Viele Hausbesitzer möchten schnell verstehen, wie teuer eine Solaranlage für ihr Dach ist — ohne technische Details. In der Schweiz liegen die Kosten für Photovoltaik durchschnittlich zwischen{' '}
              <strong className="text-white">200 und 400 CHF pro m²</strong>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { value: '200 – 400 CHF', label: 'pro m² Richtwert' },
                { value: '1 kWp ≈ 5–6 m²', label: 'Flächenbedarf' },
                { value: '150 – 200 kWh', label: 'Strom pro m²/Jahr' },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl bg-white/5 border border-white/10 px-5 py-4">
                  <p className="text-2xl font-bold text-white mb-1">{s.value}</p>
                  <p className="text-xs text-white/50 uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 py-16 space-y-20">

        {/* ── Price table ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Preisübersicht</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Was kostet Photovoltaik pro m²?</h2>
          <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-2xl">
            Die Kosten pro Quadratmeter hängen von Leistung der Module, Qualität der Komponenten, Dachtyp und Anlagengrösse ab.
          </p>
          <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="grid grid-cols-2 bg-gray-50 px-6 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
              <span>Kategorie</span><span>Preis pro m²</span>
            </div>
            {priceRows.map((row) => (
              <div key={row.label} className={`grid grid-cols-2 px-6 py-5 border-t border-gray-100 ${row.highlight ? 'bg-orange-50' : 'bg-white'}`}>
                <span className="font-bold text-gray-800 text-sm sm:text-base">{row.label}</span>
                <span className="font-bold text-base sm:text-lg" style={{ color: row.color }}>{row.range}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3 italic">Diese Werte dienen als Orientierung. Der genaue Preis hängt immer vom konkreten Projekt ab.</p>
        </section>

        {/* ── Why kWp ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Einheiten verstehen</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Warum rechnet man oft nicht in m²?</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              In der Praxis wird Photovoltaik meist in <strong className="text-gray-800">kWp (Kilowatt Peak)</strong> berechnet, weil Module unterschiedliche Leistung haben, Dachflächen unterschiedlich nutzbar sind und die Effizienz je nach Technologie variiert.
            </p>
            <div className="rounded-2xl bg-[#F97316]/5 border border-[#F97316]/20 p-6">
              <p className="text-sm font-bold text-[#F97316] mb-3">Grobe Umrechnung</p>
              <p className="text-3xl font-bold text-gray-900 mb-4">1 kWp ≈ 5–6 m²</p>
              <div className="space-y-2 text-sm text-gray-600">
                {["10 kWp Anlage → ca. 50–60 m² Dachfläche", "20 kWp Anlage → ca. 100–120 m² Dachfläche"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img src="/images/asset-panel-closeup-1.png" alt="Solarpanele Schweiz" className="w-full h-72 object-cover" />
          </div>
        </section>

        {/* ── m² vs kWp ── */}
        <section className="bg-gray-50 rounded-3xl p-8 sm:p-12">
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Vergleich</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Kosten pro m² vs. Kosten pro kWp</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {comparisonRows.map((row) => (
              <div key={row.unit} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{row.unit}</p>
                <p className="text-3xl font-bold text-[#F97316] mb-2">{row.price}</p>
                <p className="text-sm text-gray-500">{row.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500 max-w-xl">
            Der Preis pro m² eignet sich eher für eine erste grobe Einschätzung. Für eine realistische Planung ist der Preis pro kWp meist genauer.
          </p>
        </section>

        {/* ── Example ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img src="/images/asset-haus-luftbild-2.png" alt="Einfamilienhaus mit Solaranlage" className="w-full h-72 object-cover" />
          </div>
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Rechenbeispiel</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Beispiel: Solaranlage für ein Einfamilienhaus</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Ein typisches Schweizer Einfamilienhaus mit 60 m² Dachfläche und ca. 10 kWp Leistung:
            </p>
            <div className="rounded-2xl border border-gray-100 overflow-hidden mb-5 shadow-sm">
              {exampleRows.map((row, i) => (
                <div key={row.position} className={`flex justify-between items-center px-5 py-4 ${i !== 0 ? 'border-t border-gray-100' : ''} ${row.last ? 'bg-orange-50' : 'bg-white'}`}>
                  <span className={`text-sm ${row.last ? 'font-bold text-gray-900' : 'text-gray-600'}`}>{row.position}</span>
                  <span className={`font-bold ${row.last ? 'text-[#F97316] text-lg' : 'text-gray-900'}`}>{row.value}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-amber-50 border border-amber-100 p-4 text-sm text-amber-800 leading-relaxed">
              <strong>Hinweis:</strong> In der Realität liegen die Gesamtkosten oft höher (20'000 – 30'000 CHF), da Wechselrichter, Installation, Planung und Montage zusätzlich eingerechnet werden.
            </div>
          </div>
        </section>

        {/* ── Factors ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Einflussfaktoren</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Welche Faktoren beeinflussen die Kosten pro m²?</h2>
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

        {/* ── Energy production ── */}
        <section className="rounded-3xl bg-[#0f1f3d] p-8 sm:p-12 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #F97316 0%, transparent 60%)' }} />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Stromproduktion</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Wie viel Strom produziert 1 m² Photovoltaik?</h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Ein Quadratmeter Photovoltaik produziert in der Schweiz ungefähr{' '}
                <strong className="text-white">150 – 200 kWh Strom pro Jahr</strong>. Die genaue Produktion hängt von Ausrichtung, Neigung und Standort ab.
              </p>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
                <Zap className="w-6 h-6 text-[#F97316] flex-shrink-0" />
                <p className="text-sm text-white/80">
                  <strong className="text-white">50 m²</strong> → ca. <strong className="text-white">7'500 – 10'000 kWh</strong> jährlich
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: '20 m²', kwh: "3'000 – 4'000 kWh/Jahr", pct: 30 },
                { label: '40 m²', kwh: "6'000 – 8'000 kWh/Jahr", pct: 60 },
                { label: '60 m²', kwh: "9'000 – 12'000 kWh/Jahr", pct: 90 },
              ].map((row) => (
                <div key={row.label}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-white/70">{row.label}</span>
                    <span className="text-white font-bold">{row.kwh}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-[#F97316]" style={{ width: `${row.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Lohnt sich ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Wirtschaftlichkeit</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Wann lohnt sich Photovoltaik pro m²?</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Je mehr Strom selbst verbraucht wird, desto höher ist die Wirtschaftlichkeit der Anlage.
            </p>
            <div className="space-y-3">
              {[
                'Das Dach ist gut ausgerichtet (Süd, Ost/West)',
                'Möglichst viel Strom wird selbst genutzt',
                'Der Stromverbrauch ist hoch',
                'Das Dach ist nicht verschattet',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img src="/images/asset-beratung-indoor-1.png" alt="Solaranlage Beratung Schweiz" className="w-full h-72 object-cover" />
          </div>
        </section>

        {/* ── FAQ ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Häufig gestellte Fragen zu Photovoltaik Kosten pro m²
          </h2>
          <PhotovoltaikFaq />
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <TrendingDown className="w-10 h-10 text-[#F97316] mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Angebote vergleichen und Kosten genau berechnen
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Die Kosten pro m² sind nur eine grobe Orientierung. Über PVPro erhalten Sie kostenlos Offerten von geprüften Installateuren — genau berechnet für Ihr Haus.
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
