import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import WieFunktioniertInteractive from '@/components/WieFunktioniertInteractive';
import FaqSchema from '@/components/FaqSchema';

const wfFaqs = [
  { question: 'How does a solar installation work, simply explained?', answer: 'Solar modules generate direct current from sunlight. An inverter converts this into usable alternating current, which is used directly in the household or fed into the grid.' },
  { question: 'What is the difference between photovoltaics and a solar installation?', answer: "Photovoltaics generates electricity from light. Solar thermal, on the other hand, generates heat (e.g. for hot water). In everyday use, 'solar installation' is often used as a synonym for photovoltaics." },
  { question: 'What does an 800 watt solar module produce per day?', answer: 'An 800-watt system produces around 2–4 kWh per day in summer. In winter, production is significantly lower as the days are shorter and the sun is lower.' },
  { question: 'Can a solar panel run a refrigerator?', answer: 'Yes, a solar panel can run a refrigerator — but usually not permanently on its own. For that, a larger system or storage is required.' },
  { question: 'Can you be self-sufficient with photovoltaics?', answer: 'Not completely. Without storage and in winter, you remain partially dependent on grid electricity. However, with a large battery storage system, you can achieve a very high degree of self-sufficiency.' },
  { question: 'What does a solar installation produce in winter?', answer: 'In winter, a solar installation produces significantly less electricity — but not nothing. Shorter days and lower sun angles reduce production, but electricity is still generated.' },
  { question: 'How long does a 10 kWh storage last?', answer: 'A 10 kWh storage covers the evening and night for most households. With high consumption (e.g. heat pump), it discharges faster.' },
];

export const metadata: Metadata = {
  title: 'How does a solar installation work? Simply explained (Switzerland) | PVPro.ch',
  description: 'How does a solar installation work? Simple explanation with examples, electricity production and answers to frequently asked questions about photovoltaics.',
  alternates: {
    canonical: 'https://www.pvpro.ch/en/how-solar-works',
    languages: {
      'de-CH': 'https://www.pvpro.ch/wie-funktioniert',
      'fr-CH': 'https://www.pvpro.ch/fr/fonctionnement-solaire',
      'en-CH': 'https://www.pvpro.ch/en/how-solar-works',
      'it-CH': 'https://www.pvpro.ch/it/come-funziona-solare',
      'x-default': 'https://www.pvpro.ch/wie-funktioniert',
    },
  },
};

export default function HowSolarWorksPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative bg-[#0f1f3d] pt-28 pb-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-8">
            <Link href="/en" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">How a solar installation works</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div className="pb-12">
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-4">Technology & knowledge</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                How does a solar installation work? Simply explained
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                A solar installation converts sunlight directly into electricity — based on the photoelectric effect. This page explains how it works and what your installation can produce, step by step.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/en/request"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
                >
                  Get a free quote <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/en/solar-calculator"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-white/80 text-sm border border-white/20 hover:border-white/40 transition-colors"
                >
                  Calculate production
                </Link>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden self-center shadow-2xl mb-8">
              <img
                src="/images/wie-funktioniert-solaranlage.webp"
                alt="How a solar installation works – illustration with sun, solar modules, inverter, storage and household electricity"
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
              { val: '25–30 yrs', label: 'Module lifespan' },
              { val: '22%', label: 'Max. efficiency' },
              { val: '9–11k', label: 'kWh/year at 10 kWp' },
              { val: '0 CHF', label: 'Fuel required' },
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
                The principle is simple
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A photovoltaic system (PV system) is based on the so-called <strong>photoelectric effect</strong>: when light hits certain materials, electrons are released and electrical current is generated.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The solar modules on your roof contain thousands of such cells. They convert sunlight directly and silently into electricity — without moving parts, without emissions, without noise.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 border border-gray-100 p-6">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Photovoltaics vs. solar thermal</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#F97316]/20">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Photovoltaics</p>
                    <p className="text-gray-500 text-xs mt-0.5">Generates <strong>electricity</strong> from sunlight. This is what most people mean when they talk about a "solar installation".</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100">
                  <span className="text-2xl">🌡️</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Solar thermal</p>
                    <p className="text-gray-500 text-xs mt-0.5">Generates <strong>heat</strong> from sunlight — typically for hot water or heating.</p>
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
            Ready for your own solar installation?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
            Compare free quotes from vetted installers in your region now — no obligation, done in minutes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/en/request"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-xl"
              style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
            >
              Get a free quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/en/solar-panel-costs"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white/80 text-sm border border-white/20 hover:border-white/40 transition-colors"
            >
              Calculate costs
            </Link>
          </div>
        </div>
      </section>

      <FaqSchema faqs={wfFaqs} />
    </main>
  );
}
