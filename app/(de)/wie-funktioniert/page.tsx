import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import WieFunktioniertInteractive from '@/components/WieFunktioniertInteractive';
import FaqSchema from '@/components/FaqSchema';

const wfFaqs = [
  { question: 'Wie funktioniert eine Solaranlage einfach erklärt?', answer: 'Solarmodule erzeugen aus Sonnenlicht Gleichstrom. Ein Wechselrichter wandelt diesen in nutzbaren Wechselstrom um, der direkt im Haushalt verwendet oder ins Netz eingespeist wird.' },
  { question: 'Was ist der Unterschied zwischen Photovoltaik und Solaranlage?', answer: 'Photovoltaik erzeugt Strom aus Licht. Solarthermie dagegen erzeugt Wärme (z.B. für Warmwasser). Im Alltag wird "Solaranlage" meist als Synonym für Photovoltaik verwendet.' },
  { question: 'Was bringt ein 800 Watt Solarmodul am Tag?', answer: 'Ein 800-Watt-System produziert im Sommer etwa 2–4 kWh pro Tag. Im Winter ist die Produktion deutlich geringer, da die Tage kürzer und die Sonne tiefer steht.' },
  { question: 'Kann ein Solarpanel einen Kühlschrank betreiben?', answer: 'Ja, ein Solarpanel kann einen Kühlschrank betreiben — aber meist nicht dauerhaft alleine. Dafür ist ein grösseres System oder ein Speicher notwendig.' },
  { question: 'Ist man mit Photovoltaik autark?', answer: 'Nicht vollständig. Ohne Speicher und im Winter bleibt man teilweise auf Strom aus dem Netz angewiesen. Mit einem grossen Batteriespeicher kann man jedoch sehr hohe Eigenversorgungsgrade erreichen.' },
  { question: 'Was bringt eine Solaranlage im Winter?', answer: 'Im Winter produziert eine Solaranlage deutlich weniger Strom — aber nicht nichts. Kürzere Tage und tiefere Sonnenwinkel reduzieren die Produktion, Strom wird aber weiterhin erzeugt.' },
  { question: 'Wie lange reicht ein 10 kWh Speicher?', answer: 'Ein 10-kWh-Speicher deckt je nach Haushalt den Abend und die Nacht ab. Bei hohem Verbrauch (z.B. Wärmepumpe) wird er schneller entladen.' },
];

export const metadata: Metadata = {
  title: 'Wie funktioniert eine Solaranlage? Einfach erklärt (Schweiz) | PVPro.ch',
  description: 'Wie funktioniert eine Solaranlage? Einfache Erklärung mit Beispielen, Stromproduktion und Antworten auf häufige Fragen zur Photovoltaik.',
  alternates: {
    canonical: 'https://www.pvpro.ch/wie-funktioniert',
    languages: {
      'de-CH': 'https://www.pvpro.ch/wie-funktioniert',
      'fr-CH': 'https://www.pvpro.ch/fr/fonctionnement-solaire',
      'en-CH': 'https://www.pvpro.ch/en/how-solar-works',
      'it-CH': 'https://www.pvpro.ch/it/come-funziona-solare',
      'x-default': 'https://www.pvpro.ch/wie-funktioniert',
    },
  },
};

export default function WieFunktioniertPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative bg-[#0f1f3d] pt-28 pb-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />

        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Wie funktioniert eine Solaranlage</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div className="pb-12">
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-4">Technik & Wissen</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Wie funktioniert eine Solaranlage? Einfach erklärt
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Eine Solaranlage wandelt Sonnenlicht direkt in Strom um — basierend auf dem photoelektrischen Effekt. Wie genau das funktioniert und was Ihre Anlage leistet, erklärt diese Seite verständlich Schritt für Schritt.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/anfrage"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
                >
                  Offerte anfordern <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#rechner"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-white/80 text-sm border border-white/20 hover:border-white/40 transition-colors"
                >
                  Produktion berechnen
                </a>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative rounded-3xl overflow-hidden self-center shadow-2xl mb-8">
              <img
                src="/images/wie-funktioniert-solaranlage.png"
                alt="Wie funktioniert eine Solaranlage – Illustration mit Sonne, Solarmodulen, Wechselrichter, Speicher und Hausstrom"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro strip ── */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { val: '25–30 J.', label: 'Lebensdauer Module' },
              { val: '22%', label: 'Max. Wirkungsgrad' },
              { val: '9–11k', label: 'kWh/Jahr bei 10 kWp' },
              { val: '0 CHF', label: 'Treibstoff nötig' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl sm:text-3xl font-bold text-[#F97316]">{s.val}</p>
                <p className="text-xs text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intro text ── */}
      <section className="py-14">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Das Prinzip dahinter ist einfach
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Eine Photovoltaikanlage (PV-Anlage) basiert auf dem sogenannten <strong>photoelektrischen Effekt</strong>: Wenn Licht auf bestimmte Materialien trifft, werden Elektronen freigesetzt und es entsteht elektrischer Strom.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Die Solarmodule auf Ihrem Dach enthalten tausende solcher Zellen. Diese wandeln Sonnenlicht direkt und lautlos in Strom um — ohne bewegliche Teile, ohne Abgase, ohne Lärm.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 border border-gray-100 p-6">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Photovoltaik vs. Solarthermie</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#F97316]/20">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Photovoltaik</p>
                    <p className="text-gray-500 text-xs mt-0.5">Erzeugt <strong>Strom</strong> aus Sonnenlicht. Das meinen die meisten, wenn sie von "Solaranlage" sprechen.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100">
                  <span className="text-2xl">🌡️</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Solarthermie</p>
                    <p className="text-gray-500 text-xs mt-0.5">Erzeugt <strong>Wärme</strong> aus Sonnenlicht — typisch für Warmwasserbereitung oder Heizung.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Interactive section (steps + components + calculator + FAQ) ── */}
      <WieFunktioniertInteractive />

      {/* ── CTA bottom ── */}
      <section className="py-16 bg-[#0f1f3d] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 30% 60%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Bereit für Ihre eigene Solaranlage?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
            Vergleichen Sie jetzt kostenlos Offerten von geprüften Installateuren in Ihrer Region — unverbindlich und in wenigen Minuten.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/anfrage"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-xl"
              style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
            >
              Kostenlose Offerte anfordern <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/solaranlage-kosten"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white/80 text-sm border border-white/20 hover:border-white/40 transition-colors"
            >
              Kosten berechnen
            </Link>
          </div>
        </div>
      </section>

      <FaqSchema faqs={wfFaqs} />
    </main>
  );
}
