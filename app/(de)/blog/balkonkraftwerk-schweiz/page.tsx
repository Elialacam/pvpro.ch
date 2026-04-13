import Link from 'next/link';
import { ChevronRight, Calendar, Clock, CheckCircle2, XCircle, ArrowRight, AlertTriangle, Zap, TrendingUp } from 'lucide-react';
import { Metadata } from 'next';
import BalkonFaq from '@/components/BalkonFaq';

export const metadata: Metadata = {
  title: 'Balkonkraftwerk Schweiz: erlaubt, Kosten und lohnt es sich wirklich? | PVPro.ch',
  description: 'Sind Balkonkraftwerke in der Schweiz erlaubt? Kosten, Regeln und ob sich ein Balkonkraftwerk lohnt – mit ehrlichem Vergleich zur Solaranlage.',
  alternates: { canonical: 'https://www.pvpro.ch/blog/balkonkraftwerk-schweiz' },
};

const comparisonRows = [
  { factor: 'Kosten', balkon: "300 – 1'200 CHF", solar: "20'000 – 35'000 CHF", winner: 'balkon' },
  { factor: 'Leistung', balkon: '300 – 800 Watt', solar: "8'000 – 12'000 Watt", winner: 'solar' },
  { factor: 'Jahresproduktion', balkon: '200 – 600 kWh', solar: "8'000 – 12'000 kWh", winner: 'solar' },
  { factor: 'Einsparung/Jahr', balkon: '50 – 150 CHF', solar: "1'500 – 3'000 CHF", winner: 'solar' },
  { factor: 'Amortisation', balkon: '3 – 6 Jahre', solar: '8 – 12 Jahre', winner: 'balkon' },
  { factor: 'Wertsteigerung', balkon: 'Keine', solar: 'Ja (Immobilie)', winner: 'solar' },
  { factor: 'Förderung', balkon: 'Keine', solar: 'EIV + kantonal', winner: 'solar' },
  { factor: 'Zielgruppe', balkon: 'Mieter', solar: 'Eigentümer', winner: null },
];

export default function BalkonkraftwerkSchweizPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero mit Foto ── */}
      <section className="relative bg-[#0f1f3d] pt-28 pb-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-white/70 transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Balkonkraftwerk Schweiz</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end pb-0">
            <div className="pb-12">
              <div className="flex items-center gap-3 mb-5">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F97316]/20 text-orange-400 uppercase tracking-widest">Ratgeber</span>
                <span className="flex items-center gap-1.5 text-white/40 text-xs">
                  <Calendar className="w-3.5 h-3.5" /> 17. März 2026
                </span>
                <span className="flex items-center gap-1.5 text-white/40 text-xs">
                  <Clock className="w-3.5 h-3.5" /> 7 Min. Lesezeit
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Balkonkraftwerk Schweiz: Was ist erlaubt — und lohnt es sich wirklich?
              </h1>
              <p className="text-white/70 text-lg leading-relaxed">
                Ein Balkonkraftwerk klingt verlockend. Doch wie viel Strom produziert es wirklich — und wann ist eine vollwertige Solaranlage die deutlich bessere Wahl?
              </p>
            </div>
            <div className="relative h-80 lg:h-[440px] rounded-t-2xl overflow-hidden self-end">
              <img
                src="/images/balkonkraftwerk-schweiz.webp"
                alt="Balkonkraftwerk Schweiz – Mini-Solaranlage auf Balkon mit Alpenblick"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f3d]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Article body ── */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Main content */}
          <article className="lg:col-span-2 space-y-14">

            {/* Intro */}
            <section>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                In der Schweiz werden Balkonkraftwerke immer beliebter — vor allem bei Mietern oder Personen, die keine grosse Solaranlage installieren können. Doch wer ein eigenes Haus besitzt, sollte sich die entscheidende Frage stellen:
              </p>
              <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5 flex gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-amber-800 font-medium text-sm leading-relaxed">
                  Ist ein Balkonkraftwerk wirklich die beste Lösung — oder verpasse ich damit die deutlich grössere Einsparung einer vollwertigen Solaranlage?
                </p>
              </div>
            </section>

            {/* Was ist ein BKW */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Was ist ein Balkonkraftwerk?</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Ein Balkonkraftwerk ist eine Mini-Solaranlage für den Eigengebrauch: typischerweise 1–2 Solarmodule mit einer Leistung zwischen 300 und 800 Watt, angeschlossen über eine normale Steckdose. Der produzierte Strom wird direkt im Haushalt verbraucht.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'Module', value: '1–2' },
                  { label: 'Max. Leistung', value: '800 W' },
                  { label: 'Produktion/Jahr', value: '200–600 kWh' },
                  { label: 'Einsparung/Jahr', value: '50–150 CHF' },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl bg-gray-50 border border-gray-100 p-4 text-center">
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">{s.label}</p>
                    <p className="font-bold text-gray-900 text-sm">{s.value}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Erlaubt? */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Sind Balkonkraftwerke in der Schweiz erlaubt?</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Ja — grundsätzlich erlaubt, aber mit klaren Regeln. Viele unterschätzen den bürokratischen Aufwand.
              </p>
              <div className="space-y-3">
                {[
                  { ok: true, text: 'Anlage muss beim Netzbetreiber gemeldet werden (meist kostenlos)' },
                  { ok: true, text: 'Sicherheitsvorschriften müssen eingehalten werden' },
                  { ok: false, text: 'Anlagen über 800 W sind nicht einfach plug-and-play erlaubt' },
                  { ok: false, text: 'Anlagen mit 2000 W benötigen spezielle Genehmigungen' },
                  { ok: false, text: 'Nicht angemeldete Anlagen können abgeschaltet werden' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    {item.ok
                      ? <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      : <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    }
                    <span className="text-gray-700 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Strom produziert */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Wie viel Strom produziert ein Balkonkraftwerk?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Ein typisches Balkonkraftwerk produziert ca. <strong>200–600 kWh pro Jahr</strong> — das entspricht dem Grundverbrauch einiger Geräte (Kühlschrank, Standby). Für den Grossteil des Haushaltsstroms reicht das bei weitem nicht.
              </p>
              {/* Visual comparison bars */}
              <div className="rounded-2xl bg-gray-50 border border-gray-100 p-6 space-y-5">
                <p className="font-bold text-gray-900 text-sm mb-4">Vergleich: Jahresproduktion</p>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Balkonkraftwerk (800 W)</span>
                    <span className="font-bold text-gray-800">bis 600 kWh</span>
                  </div>
                  <div className="h-4 rounded-full bg-gray-200">
                    <div className="h-4 rounded-full bg-gray-400" style={{ width: '5%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Solaranlage (10 kWp)</span>
                    <span className="font-bold text-[#F97316]">9'000 – 11'000 kWh</span>
                  </div>
                  <div className="h-4 rounded-full bg-gray-200">
                    <div className="h-4 rounded-full bg-[#F97316]" style={{ width: '90%' }} />
                  </div>
                </div>
                <p className="text-xs text-gray-400">Eine vollwertige Solaranlage produziert <strong>15–20× mehr Strom</strong> pro Jahr.</p>
              </div>
            </section>

            {/* Comparison table */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Balkonkraftwerk vs. Solaranlage — der direkte Vergleich</h2>
              <p className="text-gray-500 text-sm mb-6">Für Hauseigentümer ist der Unterschied enorm.</p>
              <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <div className="grid grid-cols-3 bg-gray-50 px-5 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  <span>Faktor</span>
                  <span className="text-center">Balkonkraftwerk</span>
                  <span className="text-center text-[#F97316]">Solaranlage</span>
                </div>
                {comparisonRows.map((row) => (
                  <div key={row.factor} className="grid grid-cols-3 px-5 py-3.5 border-t border-gray-100 bg-white text-sm">
                    <span className="font-bold text-gray-800">{row.factor}</span>
                    <span className={`text-center ${row.winner === 'balkon' ? 'text-green-600 font-bold' : 'text-gray-500'}`}>{row.balkon}</span>
                    <span className={`text-center ${row.winner === 'solar' ? 'text-[#F97316] font-bold' : 'text-gray-500'}`}>{row.solar}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl bg-[#F97316]/5 border border-[#F97316]/20 p-4">
                <p className="text-sm font-bold text-gray-900 mb-1">Fazit:</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Ein Balkonkraftwerk ist eine kleine Ergänzung — eine Solaranlage ist eine <strong>echte Energielösung</strong>. Wer ein Haus besitzt, lässt mit einem Balkonkraftwerk jährlich tausende Franken Einsparung auf dem Tisch.
                </p>
              </div>
            </section>

            {/* Wann lohnt sich was */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Wann ist eine Solaranlage die bessere Wahl?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="rounded-2xl border border-gray-100 p-6 bg-white shadow-sm">
                  <p className="font-bold text-gray-500 text-sm mb-4 uppercase tracking-wide">Balkonkraftwerk sinnvoll wenn…</p>
                  <div className="space-y-2">
                    {['Sie zur Miete wohnen', 'Keine eigene Dachfläche verfügbar ist', 'Minimaler Installationsaufwand gewünscht', 'Erstes Kennenlernen mit Solarstrom'].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-[#F97316]/30 p-6 bg-orange-50 shadow-sm">
                  <p className="font-bold text-[#F97316] text-sm mb-4 uppercase tracking-wide">Solaranlage sinnvoll wenn…</p>
                  <div className="space-y-2">
                    {['Sie Eigentümer eines Hauses sind', 'Stromkosten deutlich senken möchten', 'Langfristige Unabhängigkeit anstreben', 'Immobilienwert steigern wollen'].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Alternative */}
            <section className="rounded-3xl bg-[#0f1f3d] p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #F97316 0%, transparent 55%)' }} />
              <div className="relative">
                <TrendingUp className="w-8 h-8 text-[#F97316] mb-4" />
                <h2 className="text-2xl font-bold text-white mb-3">Alternative: Solaranlage statt Balkonkraftwerk</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  Viele starten mit der Idee eines Balkonkraftwerks und stellen dann fest: <strong className="text-white">Der Effekt ist zu klein.</strong>
                </p>
                <p className="text-white/70 leading-relaxed mb-6">
                  Eine vollwertige Solaranlage spart Ihnen jährlich <strong className="text-white">1'500 – 3'000 CHF</strong> — das ist 10–20× mehr als ein Balkonkraftwerk. Und mit der Einmalvergütung (EIV) und kantonalen Förderungen sinken die Anschaffungskosten deutlich.
                </p>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { icon: Zap, label: '15–20×', sub: 'mehr Stromproduktion' },
                    { icon: TrendingUp, label: '10–20×', sub: 'mehr Einsparung/Jahr' },
                    { icon: CheckCircle2, label: '100%', sub: 'Förderung verfügbar' },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="rounded-xl bg-white/5 border border-white/10 p-3 text-center">
                        <Icon className="w-5 h-5 text-[#F97316] mx-auto mb-1" />
                        <p className="font-bold text-white text-lg">{item.label}</p>
                        <p className="text-white/50 text-xs">{item.sub}</p>
                      </div>
                    );
                  })}
                </div>
                <Link
                  href="/anfrage"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
                >
                  Kostenlose Offerte anfordern <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Häufig gestellte Fragen zu Balkonkraftwerk Schweiz
              </h2>
              <BalkonFaq />
            </section>

          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Key facts box */}
            <div className="sticky top-28">
              <div className="rounded-2xl border border-gray-100 p-6 shadow-sm bg-white mb-6">
                <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-4">Auf einen Blick</p>
                <div className="space-y-3 text-sm">
                  {[
                    { label: 'Erlaubt in CH?', value: 'Ja, mit Anmeldung' },
                    { label: 'Max. Leistung', value: '800 Watt (plug-and-play)' },
                    { label: 'Kosten', value: '300 – 1\'200 CHF' },
                    { label: 'Produktion/Jahr', value: '200 – 600 kWh' },
                    { label: 'Einsparung/Jahr', value: '50 – 150 CHF' },
                    { label: 'Anmeldepflicht', value: 'Ja, beim Netzbetreiber' },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-start gap-2 py-2 border-b border-gray-50 last:border-0">
                      <span className="text-gray-500">{item.label}</span>
                      <span className="font-bold text-gray-900 text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA sidebar */}
              <div className="rounded-2xl p-6 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                <Zap className="w-8 h-8 text-[#F97316] mx-auto mb-3" />
                <p className="font-bold text-gray-900 text-base mb-2">Eigentümer?</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Eine vollwertige Solaranlage spart Ihnen 10× mehr als ein Balkonkraftwerk.
                </p>
                <Link
                  href="/anfrage"
                  className="block w-full py-3 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
                >
                  Jetzt Offerte holen →
                </Link>
              </div>

              {/* Related articles */}
              <div className="rounded-2xl border border-gray-100 p-5 shadow-sm bg-white mt-6">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Weitere Artikel</p>
                <div className="space-y-3">
                  {[
                    { href: '/blog/roi-photovoltaik-schweiz', title: 'ROI einer Solaranlage: Wann amortisiert sich die Investition?' },
                    { href: '/blog/foerderungen-photovoltaik-2026', title: 'Photovoltaik-Förderungen 2026 in der Schweiz' },
                    { href: '/blog/batteriespeicher-solaranlage-lohnt-sich', title: 'Batteriespeicher: Lohnt sich die Investition?' },
                  ].map((a) => (
                    <Link key={a.href} href={a.href} className="block text-sm text-gray-700 hover:text-[#F97316] transition-colors leading-snug border-b border-gray-50 last:border-0 pb-2 last:pb-0">
                      → {a.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
