import Link from 'next/link';
import { ChevronRight, ArrowRight, Zap, CheckCircle, XCircle } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Solar Panel Types Comparison Switzerland 2026 – Which One Suits Me? | PVPro.ch',
  description: 'Comparison of different solar panel types in Switzerland: monocrystalline, polycrystalline, thin-film, bifacial. What are the differences and which is worth it?',
  alternates: {
    canonical: 'https://www.pvpro.ch/en/solar-panel-types-comparison',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solaranlagen-typen-vergleich',
      'fr-CH': 'https://www.pvpro.ch/fr/comparaison-types-panneaux-solaires',
      'en': 'https://www.pvpro.ch/en/solar-panel-types-comparison',
      'it-CH': 'https://www.pvpro.ch/it/confronto-tipi-impianti-solari',
      'x-default': 'https://www.pvpro.ch/solaranlagen-typen-vergleich',
    },
  },
  openGraph: {
    title: 'Solar Panel Types Comparison Switzerland 2026 – Which One Suits Me?',
    description: 'Monocrystalline, polycrystalline, thin-film, bifacial — all types in direct comparison for Switzerland.',
    url: 'https://www.pvpro.ch/en/solar-panel-types-comparison',
    type: 'website',
    locale: 'en_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: 'Which solar panels are most popular in Switzerland?',
    answer: 'Monocrystalline panels are by far the most commonly installed in Switzerland. They offer the best efficiency even in overcast conditions and are ideal for the Swiss climate.',
  },
  {
    question: 'What is the difference between monocrystalline and polycrystalline?',
    answer: 'Monocrystalline panels have higher efficiency and are more compact, but cost a bit more. Polycrystalline panels are cheaper, but need more space for the same output.',
  },
  {
    question: 'Are bifacial panels worth it for a normal single-family home?',
    answer: 'On a normal pitched roof, the additional production from the rear side is small. Bifacial panels are most worthwhile on flat roofs or in snow regions.',
  },
  {
    question: 'Which panels last the longest?',
    answer: 'All high-quality crystalline panels have a performance warranty of 25–30 years. The choice of manufacturer is often more important than the technology.',
  },
  {
    question: 'Can I combine different panel types on the same roof?',
    answer: 'This is technically possible, but not recommended in practice. Different panels have different electrical characteristics, which can reduce system performance.',
  },
  {
    question: 'Which panel type best suits the Swiss climate?',
    answer: 'Monocrystalline panels are the best choice for the Swiss climate — they deliver good output even in overcast conditions and with diffuse light, and are robust against snow and cold.',
  },
];

const table = [
  { type: 'Monocrystalline', efficiency: '18–22%', costs: 'Medium–High', ideal: 'Small roofs, high efficiency' },
  { type: 'Polycrystalline', efficiency: '15–17%', costs: 'Low', ideal: 'Large roofs, budget option' },
  { type: 'Thin-film', efficiency: '10–13%', costs: 'Low', ideal: 'Flat roofs, special applications' },
  { type: 'Bifacial', efficiency: '20–24%', costs: 'High', ideal: 'Snow regions, flat roofs' },
];

const situationsTable = [
  { situation: 'Small roof, maximum output', recommendation: 'Monocrystalline' },
  { situation: 'Large roof, small budget', recommendation: 'Polycrystalline' },
  { situation: 'Flat roof, snow region', recommendation: 'Bifacial' },
  { situation: 'Façade or unconventional roof', recommendation: 'Thin-film' },
  { situation: 'Standard single-family home Switzerland', recommendation: 'Monocrystalline', highlight: true },
];

type PanelType = {
  name: string;
  badge: string;
  badgeColor: string;
  intro: string;
  pros: string[];
  cons: string[];
  verdict: string;
};

const panelTypes: PanelType[] = [
  {
    name: 'Monocrystalline panels — the standard in Switzerland',
    badge: 'Recommended for Switzerland',
    badgeColor: 'bg-orange-100 text-orange-700',
    intro: 'Monocrystalline panels are today by far the most common choice for Swiss single-family homes. They consist of a single silicon crystal and have the highest efficiency of all common technologies.',
    pros: [
      'Highest efficiency (18–22%)',
      'Best performance in diffuse light and overcast conditions',
      'Compact — ideal for smaller roof areas',
      'Long lifespan and high reliability',
      'Aesthetically pleasing (uniformly black)',
    ],
    cons: [
      'Higher cost than polycrystalline panels',
      'Slight performance reduction at very high temperatures',
    ],
    verdict: 'For most Swiss households the best choice — especially in the often overcast Midlands.',
  },
  {
    name: 'Polycrystalline panels — the budget option',
    badge: 'Budget & large areas',
    badgeColor: 'bg-blue-100 text-blue-700',
    intro: 'Polycrystalline panels consist of multiple silicon crystals and have a slightly lower efficiency than monocrystalline. They are increasingly being replaced by higher-performance alternatives.',
    pros: [
      'Lower purchase price',
      'Proven and reliable',
      'Well suited for large roof areas',
    ],
    cons: [
      'Lower efficiency (15–17%)',
      'Larger area needed for the same output',
      'Recognisable by their blue-shimmering appearance',
    ],
    verdict: 'Interesting for large roof areas with a small budget. Increasingly less common in Switzerland.',
  },
  {
    name: 'Thin-film panels — for special applications',
    badge: 'Special applications',
    badgeColor: 'bg-gray-100 text-gray-700',
    intro: 'Thin-film panels are deposited on a thin substrate and are more flexible than crystalline panels. They are particularly suitable for flat roofs and unconventional applications.',
    pros: [
      'Light and flexible',
      'Low manufacturing cost',
      'Perform well at high temperatures',
    ],
    cons: [
      'Lowest efficiency (10–13%)',
      'Require significantly more area',
      'Shorter lifespan than crystalline panels',
    ],
    verdict: 'Rarely recommended for standard installations in Switzerland. Interesting for special applications such as façade integration.',
  },
  {
    name: 'Bifacial panels — more power from the rear side',
    badge: 'Snow & flat roofs',
    badgeColor: 'bg-green-100 text-green-700',
    intro: 'Bifacial panels generate electricity from both sides — from direct sunlight at the front, and from reflected light at the rear. The additional yield is particularly high with snow or light roof coverings.',
    pros: [
      'Highest yield under the right conditions',
      'Particularly effective with snow (reflects light)',
      'Ideal for flat roofs with gap to the roof surface',
    ],
    cons: [
      'More expensive than monocrystalline panels',
      'Additional yield depends strongly on installation',
      'Not always beneficial on normal pitched roofs',
    ],
    verdict: 'Interesting for snow regions and flat roofs. For normal pitched roofs in Switzerland, usually no significant advantage.',
  },
];

export default function SolarPanelTypesComparisonPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/en" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/en/solar-panel-installation-switzerland" className="hover:text-white/70 transition-colors">Solar</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Panel Types</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Zap className="w-3.5 h-3.5" /> Technology &amp; Comparison
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Solar Panel Types Compared — which suits your situation?
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Not all solar panels are equal. Depending on your roof type, budget and goals, there are different technologies and configurations. This page explains the main types in plain language — without technical jargon — so you can make an informed decision.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: '22%', sub: 'max. efficiency monocrystalline', note: 'best value under standard conditions' },
              { val: '4 types', sub: 'in direct comparison', note: 'mono, poly, thin-film, bifacial' },
              { val: '25–30 years', sub: 'lifespan of all types', note: 'with manufacturer performance warranty' },
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

        {/* ── Overview table ── */}
        <section>
          <div className="mb-8">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Overview</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">The main solar panel types at a glance</h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                  <th className="text-left px-5 py-4 text-white/80 font-semibold text-xs uppercase tracking-wider">Type</th>
                  <th className="text-center px-5 py-4 text-white/80 font-semibold text-xs uppercase tracking-wider">Efficiency</th>
                  <th className="text-center px-5 py-4 text-white/80 font-semibold text-xs uppercase tracking-wider">Costs</th>
                  <th className="text-left px-5 py-4 text-white/80 font-semibold text-xs uppercase tracking-wider hidden sm:table-cell">Ideal for</th>
                </tr>
              </thead>
              <tbody>
                {table.map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-4 font-bold text-gray-900 text-sm">{row.type}</td>
                    <td className="px-5 py-4 text-center font-bold text-[#F97316] text-sm">{row.efficiency}</td>
                    <td className="px-5 py-4 text-center text-gray-700 text-sm">{row.costs}</td>
                    <td className="px-5 py-4 text-gray-600 text-sm hidden sm:table-cell">{row.ideal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── The four types in detail ── */}
        <section>
          <div className="mb-8">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Detailed comparison</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">The four types in detail</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {panelTypes.map((m, i) => (
              <div key={i} className="rounded-3xl p-8 border border-gray-200 bg-white shadow-sm">
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${m.badgeColor}`}>{m.badge}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{m.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {i === 2
                    ? <>Thin-film panels are deposited on a thin substrate and are more flexible than crystalline panels. They are particularly suitable for{' '}
                      <Link href="/en/solar-apartment-building" className="text-[#F97316] hover:underline font-medium">flat roofs</Link>{' '}
                      and unconventional applications.</>
                    : i === 3
                    ? <>Bifacial panels generate electricity from both sides — from direct sunlight at the front, and from reflected light at the rear. The additional yield is particularly high with snow or light roof coverings. Ideal for{' '}
                      <Link href="/en/solar-apartment-building" className="text-[#F97316] hover:underline font-medium">flat roofs</Link>.</>
                    : m.intro}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div>
                    <p className="text-xs font-bold text-green-700 uppercase tracking-widest mb-2">Advantages</p>
                    <ul className="space-y-1.5">
                      {m.pros.map((v, j) => (
                        <li key={j} className="flex items-start gap-1.5 text-sm text-gray-700">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                          {v}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-red-700 uppercase tracking-widest mb-2">Disadvantages</p>
                    <ul className="space-y-1.5">
                      {m.cons.map((n, j) => (
                        <li key={j} className="flex items-start gap-1.5 text-sm text-gray-700">
                          <XCircle className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                          {n}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-orange-50 border border-orange-100 rounded-xl px-4 py-3">
                  <p className="text-sm text-gray-700"><span className="font-bold text-orange-700">Verdict: </span>{m.verdict}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Decision guide ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Decision guide</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Which type is right for me?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The choice depends on your specific situation. For a{' '}
              <Link href="/en/solar-detached-house" className="text-[#F97316] hover:underline font-medium">single-family home</Link>{' '}
              in Switzerland, monocrystalline is almost always the best choice — especially in the{' '}
              <Link href="/en/solar-panels-swiss-climate" className="text-[#F97316] hover:underline font-medium">Swiss climate</Link>{' '}
              with a lot of diffuse light.
            </p>
            <p className="text-gray-600 leading-relaxed">
              In practice, a certified{' '}
              <Link href="/en/solar-panel-installation-switzerland" className="text-[#F97316] hover:underline font-medium">installer</Link>{' '}
              recommends the right panel type after inspecting your roof. PVPro.ch connects you with{' '}
              <Link href="/en/solar-comparison-portal-switzerland" className="text-[#F97316] hover:underline font-medium">providers</Link>{' '}
              who know all technologies and give neutral advice.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                  <th className="text-left px-5 py-4 text-white/80 font-semibold text-xs uppercase tracking-wider">Situation</th>
                  <th className="text-right px-5 py-4 text-white/80 font-semibold text-xs uppercase tracking-wider">Recommendation</th>
                </tr>
              </thead>
              <tbody>
                {situationsTable.map((row, i) => (
                  <tr key={row.situation} className={row.highlight ? 'bg-orange-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className={`px-5 py-3.5 text-sm ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-700'}`}>{row.situation}</td>
                    <td className={`px-5 py-3.5 text-right font-bold text-sm ${row.highlight ? 'text-[#F97316]' : 'text-gray-900'}`}>{row.recommendation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <Zap className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Which type suits your roof?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            A certified installer from your region will analyse your roof and recommend the optimal panel type for your situation — free of charge and without obligation.
          </p>
          <Link href="/en/get-solar-panel-quotes" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            Get free quote <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-gray-500 text-sm mt-5">
            First{' '}
            <Link href="/en/get-solar-panel-quotes" className="text-[#F97316] hover:underline font-medium">compare quotes</Link>?{' '}
            More about the{' '}
            <Link href="/en/solar-panel-costs" className="text-[#F97316] hover:underline font-medium">costs of a solar system</Link>.
          </p>
        </section>

        {/* ── FAQ ── */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Frequently asked questions</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
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
            <p className="text-gray-500 text-sm mb-4">More information:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/en/solar-panel-costs" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Solar panel costs
              </Link>
              <Link href="/en/solar-panels-swiss-climate" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Solar panels in the Swiss climate
              </Link>
              <Link href="/en/solar-detached-house" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Solar for detached house
              </Link>
              <Link href="/en/solar-apartment-building" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Solar for apartment building
              </Link>
              <Link href="/en/get-solar-panel-quotes" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                Get a quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
      <FaqSchema faqs={faqs} />
    </main>
  );
}
