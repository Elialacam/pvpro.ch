import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, CheckCircle, Info, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import FoerderRechner from '@/components/FoerderRechner';

export const metadata: Metadata = {
  title: 'Förderungen für Solaranlagen in der Schweiz 2026 | PVPro.ch',
  description: 'Einmalvergütung (EIV), kantonale Förderprogramme und steuerliche Abzüge für Photovoltaikanlagen in der Schweiz. Jetzt Förderung berechnen.',
};

const tableRows = [
  { size: '5 kWp',  foerderung: "ca. 1'800 CHF", gesamtkosten: "ca. 13'000 CHF", effektiv: "ca. 11'200 CHF" },
  { size: '8 kWp',  foerderung: "ca. 2'800 CHF", gesamtkosten: "ca. 20'800 CHF", effektiv: "ca. 18'000 CHF", highlight: true },
  { size: '10 kWp', foerderung: "ca. 3'500 CHF", gesamtkosten: "ca. 25'000 CHF", effektiv: "ca. 21'500 CHF" },
];

const processSteps = [
  { n: '1', title: 'Installation',       text: 'Photovoltaikanlage durch einen zertifizierten Installateur montieren lassen.' },
  { n: '2', title: 'Registrierung',      text: 'Anlage bei Pronovo (pronovo.ch) anmelden — der Installateur übernimmt das oft für Sie.' },
  { n: '3', title: 'Prüfung',            text: 'Die zuständigen Stellen prüfen die Anlage und die Unterlagen.' },
  { n: '4', title: 'Auszahlung der EIV', text: 'Die Einmalvergütung wird normalerweise einige Monate nach der Registrierung ausbezahlt.' },
];

const kantonaleMassnahmen = [
  'Batteriespeicher für Solaranlagen',
  'Systeme zur Erhöhung des Eigenverbrauchs',
  'Energieeffiziente Gebäudetechnik',
];

const wirtschaftlichkeit = [
  'Stromverbrauch des Haushalts',
  'Eigenverbrauchsanteil',
  'Grösse der Solaranlage',
  'Entwicklung der Strompreise',
];

export default function FoerderungenPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        {/* Background image */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero-solar-panels.webp"
            alt="Solaranlage Schweiz"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-10">
            <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-300 font-medium">Förderungen</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                Staatliche Förderung 2026
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                Förderung für<br />Solaranlagen in<br />der Schweiz
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
                Der Bund unterstützt den Ausbau von Photovoltaikanlagen mit der <strong className="text-white">Einmalvergütung (EIV)</strong>. Diese reduziert Ihre Investitionskosten direkt und macht Solarenergie wirtschaftlich attraktiver.
              </p>

              {/* Key stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '300–400', unit: 'CHF/kWp', label: 'Förderung' },
                  { value: '10–15',   unit: 'Jahre',    label: 'Amortisation' },
                  { value: '30%',     unit: 'Rabatt',   label: 'Investition' },
                ].map(s => (
                  <div key={s.label} className="rounded-2xl p-4 text-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <p className="text-2xl font-bold text-white">{s.value}</p>
                    <p className="text-xs text-orange-400 font-semibold">{s.unit}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive calculator */}
            <div>
              <FoerderRechner />
            </div>
          </div>
        </div>
      </section>

      {/* ── EIV EXPLANATION ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Einmalvergütung (EIV)</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6">
                Was ist die Einmalvergütung?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Die Einmalvergütung ist die wichtigste Bundesförderung für Photovoltaikanlagen in der Schweiz. Sie wird vom Bund bereitgestellt und über die Organisation <strong>Pronovo</strong> verwaltet.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Sie erhalten die Zahlung <strong>einmalig</strong> nach der Installation und Registrierung Ihrer Anlage — kein jährlicher Antrag, kein bürokratischer Aufwand.
              </p>

              {/* KLEIV / GREIV cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl p-5 border-2 border-orange-100" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                  <p className="font-bold text-gray-900 text-lg mb-1">KLEIV</p>
                  <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide mb-3">Kleine Einmalvergütung</p>
                  <p className="text-sm text-gray-600 leading-relaxed">Für kleinere Photovoltaikanlagen — am häufigsten genutzt für private Einfamilienhäuser.</p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-orange-600 font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    Ideal für Privatpersonen
                  </div>
                </div>
                <div className="rounded-2xl p-5 border border-gray-100" style={{ background: '#f9fafb' }}>
                  <p className="font-bold text-gray-900 text-lg mb-1">GREIV</p>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Grosse Einmalvergütung</p>
                  <p className="text-sm text-gray-600 leading-relaxed">Für grössere Photovoltaikanlagen mit höherer Leistung — z.B. Mehrfamilienhäuser oder Gewerbe.</p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-gray-500 font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    Für grössere Anlagen
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/blog-2.png"
                alt="Förderung Solaranlage Schweiz"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FÖRDERUNG TABLE ── */}
      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Förderübersicht</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Wie hoch ist die Förderung?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              Die Förderung liegt typischerweise bei <strong className="text-gray-800">300–400 CHF pro kWp</strong> installierter Leistung. Je grösser die Anlage, desto höher der Betrag.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Table */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <div className="grid grid-cols-4 gap-0" style={{ background: 'linear-gradient(135deg, #1a2236, #0d1117)' }}>
                {['Anlagengrösse', 'Förderung (EIV)', 'Gesamtkosten', 'Effektiv'].map(h => (
                  <div key={h} className="px-5 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">{h}</div>
                ))}
              </div>
              {tableRows.map((row) => (
                <div
                  key={row.size}
                  className={`grid grid-cols-4 gap-0 border-t transition-colors ${row.highlight ? 'border-orange-100' : 'border-gray-100'}`}
                  style={row.highlight ? { background: 'linear-gradient(135deg, #fff7ed, #fff5eb)' } : { background: '#fff' }}
                >
                  <div className="px-5 py-5 font-bold text-gray-900 flex items-center gap-2">
                    {row.highlight && <span className="text-[10px] bg-orange-500 text-white font-bold px-1.5 py-0.5 rounded-full uppercase">Beliebt</span>}
                    {row.size}
                  </div>
                  <div className="px-5 py-5 font-bold text-[#F97316]">{row.foerderung}</div>
                  <div className="px-5 py-5 text-gray-600">{row.gesamtkosten}</div>
                  <div className="px-5 py-5 font-bold text-green-600">{row.effektiv}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 text-center mt-4 flex items-center justify-center gap-1.5">
              <Info className="w-3.5 h-3.5" />
              Richtwerte. Die genaue Höhe hängt von der aktuellen Förderstruktur und der Anlagengrösse ab.
            </p>
          </div>
        </div>
      </section>

      {/* ── EXAMPLE CALCULATION ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-family-solar.png"
                alt="Einfamilienhaus mit Solaranlage"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Rechenbeispiel</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Beispiel für ein Einfamilienhaus
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Viele Einfamilienhäuser installieren eine Anlage mit <strong>8–10 kWp</strong>, die jährlich rund <strong>8'000–10'000 kWh</strong> Strom produziert.
              </p>

              {/* Calculation breakdown */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between rounded-2xl px-6 py-4 border border-gray-100">
                  <p className="text-gray-700 font-medium">Kosten der Solaranlage (10 kWp)</p>
                  <p className="font-bold text-gray-900">CHF 25'000</p>
                </div>
                <div className="flex items-center justify-between rounded-2xl px-6 py-4 border border-orange-100" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                  <p className="text-orange-700 font-medium">Einmalvergütung (EIV)</p>
                  <p className="font-bold text-[#F97316]">− CHF 3'500</p>
                </div>
                <div className="h-px bg-gray-200" />
                <div className="flex items-center justify-between rounded-2xl px-6 py-5 border-2 border-green-200" style={{ background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)' }}>
                  <div>
                    <p className="font-bold text-gray-900">Effektive Investition</p>
                    <p className="text-xs text-green-600 mt-0.5">Nach Abzug der Bundesförderung</p>
                  </div>
                  <p className="font-bold text-green-700 text-2xl">CHF 21'500</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KANTONE + PROCESS ── */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Kantonale Förderungen */}
            <div>
              <p className="text-sm font-semibold text-orange-400 uppercase tracking-widest mb-3">Zusätzliche Förderungen</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
                Kantonale Förderprogramme
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Neben der Bundesförderung bieten viele Kantone zusätzliche Programme an. Die verfügbaren Förderungen unterscheiden sich von Kanton zu Kanton.
              </p>
              <div className="flex flex-col gap-3">
                {kantonaleMassnahmen.map(m => (
                  <div key={m} className="flex items-center gap-3 rounded-xl px-5 py-4" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <p className="text-gray-300 text-sm">{m}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl px-5 py-4 flex items-start gap-3" style={{ background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.2)' }}>
                <Info className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-orange-300 leading-relaxed">
                  Unsere Partner-Installateure kennen alle kantonalen Förderprogramme in Ihrer Region und helfen Ihnen bei der Beantragung.
                </p>
              </div>
            </div>

            {/* Process steps */}
            <div>
              <p className="text-sm font-semibold text-orange-400 uppercase tracking-widest mb-3">Ablauf</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
                Wie erhalte ich die Förderung?
              </h2>
              <div className="flex flex-col gap-0">
                {processSteps.map((step, i) => (
                  <div key={step.n} className="flex gap-5 pb-8 relative">
                    {/* Connector */}
                    {i < processSteps.length - 1 && (
                      <div className="absolute left-[19px] top-10 w-0.5 h-full" style={{ background: 'rgba(249,115,22,0.2)' }} />
                    )}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm relative z-10" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                      {step.n}
                    </div>
                    <div className="pt-1">
                      <p className="font-bold text-white mb-1">{step.title}</p>
                      <p className="text-sm text-gray-400 leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── LOHNT ES SICH ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Wirtschaftlichkeit</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-5">
                Lohnt sich eine Solaranlage trotz Investitionskosten?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Dank staatlicher Förderungen und steigender Strompreise lohnt sich eine Solaranlage für viele Schweizer Haushalte. Viele Anlagen amortisieren sich innerhalb von <strong>10–15 Jahren</strong> bei einer Lebensdauer von 25–30 Jahren.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Die tatsächliche Wirtschaftlichkeit hängt von folgenden Faktoren ab:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {wirtschaftlichkeit.map(f => (
                  <div key={f} className="flex items-center gap-2.5 rounded-xl px-4 py-3 border border-gray-100 bg-gray-50">
                    <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0" />
                    <p className="text-sm text-gray-700">{f}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/blog-5.png"
                alt="Wirtschaftlichkeit Solaranlage"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Bewilligungspflicht ── */}
      <section style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 pb-4">
          <div className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
            <ArrowRight className="w-4 h-4 text-[#F97316] flex-shrink-0" />
            <p className="text-gray-600 text-sm">
              Benötigen Sie eine Bewilligung?{' '}
              <Link href="/bewilligungspflicht-solaranlage-schweiz" className="text-[#F97316] hover:underline font-medium">
                Alle Infos zur Bewilligungspflicht für Solaranlagen in der Schweiz →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="rounded-3xl p-10 sm:p-16 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-4">Jetzt profitieren</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Förderung optimal nutzen?
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
              Unsere Partner-Installateure kennen alle aktuellen Förderprogramme und kümmern sich um die Beantragung — Sie müssen sich um nichts kümmern.
            </p>
            <Link
              href="/anfrage"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
            >
              Kostenlose Offerte anfordern
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
