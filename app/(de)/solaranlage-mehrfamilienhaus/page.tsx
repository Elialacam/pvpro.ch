import Link from 'next/link';
import { ChevronRight, Sun, CheckCircle2, TrendingUp, Users, Building2, Zap, ArrowRight, BarChart3 } from 'lucide-react';
import { Metadata } from 'next';
import MehrfamilienhausRechner, { MehrfamilienhausFaq } from '@/components/MehrfamilienhausRechner';

export const metadata: Metadata = {
  title: 'Solaranlage Mehrfamilienhaus Schweiz: Kosten, ZEV und Wirtschaftlichkeit | PVPro.ch',
  description: 'Was kostet eine Solaranlage für ein Mehrfamilienhaus? Erfahren Sie Kosten, ZEV, Grösse und wie sich Solarstrom für mehrere Parteien lohnt.',
  alternates: {
    canonical: 'https://pvpro.ch/solaranlage-mehrfamilienhaus',
    languages: {
      'de-CH': 'https://pvpro.ch/solaranlage-mehrfamilienhaus',
      'fr-CH': 'https://pvpro.ch/fr/solaire-immeuble',
      'en-CH': 'https://pvpro.ch/en/solar-apartment-building',
      'it-CH': 'https://pvpro.ch/it/solare-condominio',
      'x-default': 'https://pvpro.ch/solaranlage-mehrfamilienhaus',
    },
  },
};

const costRows = [
  { size: 'Kleine Anlage (15–30 kWp)', price: "ca. 40'000 – 80'000 CHF", highlight: false },
  { size: 'Mittlere Anlage (30–60 kWp)', price: "ca. 80'000 – 150'000 CHF", highlight: true },
  { size: 'Grosse Anlage (60+ kWp)', price: "150'000 CHF +", highlight: false },
];

const sizeGuide = [
  { wohnungen: '5–10 Wohnungen', kwp: 'ca. 20–40 kWp', m2: 'ca. 100–240 m²' },
  { wohnungen: '10–20 Wohnungen', kwp: 'ca. 40–80 kWp', m2: 'ca. 200–480 m²' },
  { wohnungen: 'Grössere Gebäude', kwp: '80 kWp +', m2: '480 m² +' },
];

const exampleRows = [
  { label: 'Wohnungen', value: '10' },
  { label: 'Leistung', value: '50 kWp' },
  { label: 'Kosten', value: "ca. 100'000 CHF" },
  { label: 'Nutzungsmodell', value: 'ZEV' },
  { label: 'Eigenverbrauchsanteil', value: '60–75 %', highlight: true },
];

const benefits = [
  { icon: TrendingUp, title: 'Höherer Eigenverbrauch', text: 'Durch viele Nutzer wird der Solarstrom gleichmässig über den Tag verbraucht — ideal für Mehrfamilienhäuser.' },
  { icon: Users, title: 'Geringere Kosten für alle', text: 'Solarstrom ist günstiger als Netzstrom. Alle Parteien profitieren direkt von niedrigeren Stromrechnungen.' },
  { icon: Building2, title: 'Immobilienwert steigt', text: 'Gebäude mit Solaranlage sind attraktiver für Mieter und Käufer — ein nachhaltiger Investitionsvorteil.' },
  { icon: BarChart3, title: 'Stabile Energiepreise', text: 'Unabhängigkeit von Strompreissteigerungen schützt Eigentümer und Mieter langfristig.' },
];

const wirtschaftFaktoren = [
  { title: 'Eigenverbrauch', text: 'Je höher der Eigenverbrauch, desto besser die Rendite. In MFH wird ein grosser Teil direkt verbraucht.' },
  { title: 'Anlagengrösse', text: 'Grössere Anlagen sind effizienter und günstiger pro kWp — Skaleneffekte.' },
  { title: 'Verbrauchsverhalten', text: 'Gleichmässiger Stromverbrauch über den Tag erhöht die Nutzung des Solarstroms.' },
  { title: 'ZEV-Struktur', text: 'Eine gute Organisation und Zählerinfrastruktur im Gebäude ist entscheidend.' },
];

export default function SolaranlageMehrfamilienhausPage() {
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
            <span className="text-white/70">Solaranlage Mehrfamilienhaus</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                <Sun className="w-3.5 h-3.5" /> Für Immobilieneigentümer
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Solaranlage für Mehrfamilienhaus: Kosten, ZEV und Vorteile
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Mehrfamilienhäuser bieten ideale Voraussetzungen für Photovoltaik: grosse Dachflächen, viele Nutzer und hoher Eigenverbrauch durch das ZEV-Modell. Das macht sie besonders{' '}
                <strong className="text-white">effizient und wirtschaftlich</strong>.
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
                { value: '20–120 kWp', label: 'Typische Anlagengrösse' },
                { value: "40'000–150'000+", label: 'CHF Investition' },
                { value: 'ZEV', label: 'Gemeinsames Nutzungsmodell' },
                { value: '60–75 %', label: 'Eigenverbrauchsanteil' },
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

        {/* ── ZEV explainer ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Funktionsweise</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Wie funktioniert eine Solaranlage im Mehrfamilienhaus?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              In einem Mehrfamilienhaus wird der Solarstrom zentral produziert und dann auf die Bewohner verteilt. Die häufigste Lösung in der Schweiz ist der{' '}
              <strong className="text-gray-800">Zusammenschluss zum Eigenverbrauch (ZEV)</strong>.
            </p>
            <div className="rounded-2xl bg-[#F97316]/5 border border-[#F97316]/20 p-6 space-y-3">
              <p className="font-bold text-gray-900 mb-2">Beim ZEV gilt:</p>
              {[
                'Strom wird direkt im Gebäude genutzt',
                'Jede Wohnung hat einen eigenen Zähler',
                'Abrechnung erfolgt intern — oft günstiger als Netzstrom',
                'Überschüssiger Strom wird ins Netz eingespeist',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          {/* ZEV flow diagram */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img src="/images/asset-haus-luftbild-3.png" alt="Mehrfamilienhaus mit Solaranlage" className="w-full h-80 object-cover" />
          </div>
        </section>

        {/* ── Interactive calculator ── */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Anlagenrechner</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Wie gross sollte die Anlage sein?
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                Die optimale Grösse hängt vom Gesamtstromverbrauch des Gebäudes ab. Wählen Sie die Anzahl Wohnungen und erhalten Sie eine erste Orientierung.
              </p>
              <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5 space-y-3">
                {sizeGuide.map((row) => (
                  <div key={row.wohnungen} className="flex justify-between items-center">
                    <span className="text-sm font-bold text-gray-700">{row.wohnungen}</span>
                    <div className="text-right">
                      <span className="text-sm font-bold text-[#F97316]">{row.kwp}</span>
                      <span className="text-xs text-gray-400 ml-2">/ {row.m2}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3">
              <MehrfamilienhausRechner />
            </div>
          </div>
        </section>

        {/* ── Cost table ── */}
        <section className="bg-gray-50 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Kosten</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Was kostet eine Solaranlage für ein Mehrfamilienhaus?
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Je grösser die Anlage, desto günstiger wird sie <strong className="text-gray-800">pro kWp</strong> — Skaleneffekte wirken bei grossen Gebäuden besonders stark.
              </p>
              <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="grid grid-cols-2 bg-gray-100 px-5 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  <span>Anlage</span><span>Richtwert</span>
                </div>
                {costRows.map((row) => (
                  <div key={row.size} className={`grid grid-cols-2 px-5 py-4 border-t border-gray-200 ${row.highlight ? 'bg-orange-50' : 'bg-white'}`}>
                    <span className="font-bold text-gray-800 text-sm">{row.size}</span>
                    <span className={`font-bold text-sm ${row.highlight ? 'text-[#F97316]' : 'text-gray-700'}`}>{row.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img src="/images/asset-installateur-dach-5.png" alt="Solaranlage Mehrfamilienhaus Montage" className="w-full h-72 object-cover" />
            </div>
          </div>
        </section>

        {/* ── Abrechnungsmodell ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Abrechnung</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Wie wird Solarstrom im Mehrfamilienhaus berechnet?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { step: '1', title: 'Solarstrom produzieren', text: 'Die PV-Anlage auf dem Dach erzeugt tagsüber Strom für das gesamte Gebäude.' },
              { step: '2', title: 'Intern verteilen (ZEV)', text: 'Der Strom wird über das gebäudeinterne Netz direkt an alle Wohnungen verteilt.' },
              { step: '3', title: 'Transparent abrechnen', text: 'Jede Wohnung zahlt per Unterzähler nur für den tatsächlich verbrauchten Solarstrom.' },
            ].map((item) => (
              <div key={item.step} className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-9 h-9 rounded-full bg-[#F97316] text-white font-bold text-sm flex items-center justify-center mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why worthwhile ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Wirtschaftlichkeit</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Warum lohnt sich eine Solaranlage im Mehrfamilienhaus?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="flex gap-4 items-start bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{b.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{b.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Capital investment ── */}
        <section className="rounded-3xl bg-[#0f1f3d] p-8 sm:p-12 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 75% 50%, #F97316 0%, transparent 55%)' }} />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Kapitalanlage</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ist ein Mehrfamilienhaus eine gute Kapitalanlage mit Photovoltaik?
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Ja, in vielen Fällen. Eine Solaranlage kann zusätzliche Einnahmen generieren, Betriebskosten senken und die Attraktivität für Mieter erhöhen.
              </p>
              <div className="space-y-3">
                {[
                  'Strom an Mieter günstiger als Netzstrom verkaufen',
                  'Betriebskosten dauerhaft senken',
                  'Attraktivität für Mieter und Käufer erhöhen',
                  'Langfristig den Immobilienwert steigern',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/asset-haus-solar-ev-1.png" alt="Mehrfamilienhaus Solaranlage Investition" className="w-full h-72 object-cover" />
            </div>
          </div>
        </section>

        {/* ── Wirtschaftlichkeit factors ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Rentabilität</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Welche Faktoren beeinflussen die Wirtschaftlichkeit?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {wirtschaftFaktoren.map((f, i) => (
              <div key={f.title} className="flex gap-4 items-start bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#F97316] text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Example ── */}
        <section className="bg-gray-50 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Rechenbeispiel</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Beispiel: Solaranlage Mehrfamilienhaus
              </h2>
              <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                {exampleRows.map((row, i) => (
                  <div key={row.label} className={`flex justify-between items-center px-6 py-4 ${i !== 0 ? 'border-t border-gray-200' : ''} ${row.highlight ? 'bg-orange-50' : 'bg-white'}`}>
                    <span className={`text-sm ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-600'}`}>{row.label}</span>
                    <span className={`font-bold ${row.highlight ? 'text-[#F97316] text-base' : 'text-gray-900 text-sm'}`}>{row.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3 italic">
                Durch den gemeinsamen Verbrauch kann ein grosser Teil des Stroms direkt im Gebäude genutzt werden.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img src="/images/asset-beratung-indoor-3.png" alt="Mehrfamilienhaus Solaranlage Planung" className="w-full h-72 object-cover" />
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Häufig gestellte Fragen zur Solaranlage Mehrfamilienhaus
          </h2>
          <MehrfamilienhausFaq />
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <Zap className="w-10 h-10 text-[#F97316] mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Angebote vergleichen und Anlage optimal planen
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Jede Immobilie ist unterschiedlich und benötigt eine individuelle Lösung. Über PVPro vergleichen Sie kostenlos mehrere Angebote und finden die beste Lösung für Ihr Gebäude.
          </p>
          <Link
            href="/anfrage"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
          >
            Kostenlose Offerte anfordern →
          </Link>
          <p className="text-gray-500 text-sm mt-5">
            Mehrere Angebote vergleichen?{' '}
            <Link href="/vergleichsportal-photovoltaik-schweiz" className="text-[#F97316] hover:underline font-medium">Anbieter für Mehrfamilienhäuser vergleichen</Link>
            {' '}·{' '}
            <Link href="/solaranlage-offerte-einholen" className="text-[#F97316] hover:underline font-medium">Offerten für Ihr Mehrfamilienhaus</Link>
            {' '}·{' '}
            <Link href="/photovoltaik-installation-schweiz" className="text-[#F97316] hover:underline font-medium">Ablauf der Photovoltaik Installation</Link>
            {' '}·{' '}
            <Link href="/photovoltaik-komplettloesung-schweiz" className="text-[#F97316] hover:underline font-medium">Komplettlösung für Mehrfamilienhäuser</Link>
          </p>
        </section>

      </div>
    </main>
  );
}
