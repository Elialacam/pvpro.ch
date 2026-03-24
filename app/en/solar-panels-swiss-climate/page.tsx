import Link from 'next/link';
import { ChevronRight, ArrowRight, Sun, CheckCircle, FileText } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Solar Panels & Swiss Climate 2026 – Which System Fits? | PVPro.ch',
  description: 'Which solar panels are suited for the Swiss climate? Snow, cold, fog — we explain what really matters and which modules work best in Switzerland.',
  alternates: {
    canonical: 'https://www.pvpro.ch/en/solar-panels-swiss-climate',
    languages: {
      'de-CH': 'https://www.pvpro.ch/photovoltaik-schweizer-klima',
      'fr-CH': 'https://www.pvpro.ch/fr/photovoltaique-climat-suisse',
      'en': 'https://www.pvpro.ch/en/solar-panels-swiss-climate',
      'it-CH': 'https://www.pvpro.ch/it/fotovoltaico-clima-svizzero',
      'x-default': 'https://www.pvpro.ch/photovoltaik-schweizer-klima',
    },
  },
  openGraph: {
    title: 'Solar Panels & Swiss Climate 2026 – Which System Fits?',
    description: 'Snow, cold, fog — which solar modules work best in the Swiss climate?',
    url: 'https://www.pvpro.ch/en/solar-panels-swiss-climate',
    type: 'website',
    locale: 'en_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: 'Do solar panels work on cloudy days?',
    answer: 'Yes. Modern modules produce electricity even under an overcast sky, though with reduced output. Diffuse light is partially converted into energy.',
  },
  {
    question: 'Do I need to clear snow from my panels?',
    answer: 'Generally no. On sloped roofs, snow slides off quickly. Clearing is usually unnecessary and can damage the modules.',
  },
  {
    question: 'Do solar panels produce electricity in winter?',
    answer: 'Yes, but less than in summer. In winter, sunshine hours are shorter and the angle is lower. A well-dimensioned system still makes a useful contribution in winter.',
  },
  {
    question: 'Are solar modules winterproof?',
    answer: 'Yes. High-quality modules are designed for temperatures down to -40°C and withstand snow loads of several hundred kilograms per square metre.',
  },
  {
    question: 'Which cantons are best for solar panels?',
    answer: "Ticino, with over 2,100 sunshine hours, offers the best conditions. But even in the Plateau and eastern Switzerland, solar panels are worthwhile — the payback period is slightly longer but still attractive.",
  },
];

const modules = [
  {
    title: 'Monocrystalline Modules',
    badge: 'Recommended Plateau',
    text: 'The most common choice for Switzerland. High efficiency even in diffuse light, robust and durable. Ideal for the Plateau and Pre-Alps.',
  },
  {
    title: 'Bifacial Modules',
    badge: 'Great in Snow',
    text: 'Also generate electricity from the rear — particularly useful when snow reflects light onto the back of the panels. Interesting for snow-heavy regions.',
  },
  {
    title: 'Low Temperature Coefficient',
    badge: 'High Altitudes',
    text: 'The lower the temperature coefficient, the better the performance in cold weather. Especially relevant for high-altitude locations in Switzerland.',
  },
];

const sunshine = [
  { region: 'Ticino (Lugano)', hours: 'approx. 2,157' },
  { region: 'Valais (Sion)', hours: 'approx. 2,000' },
  { region: 'Lake Geneva region', hours: 'approx. 1,800' },
  { region: 'Plateau (Zurich, Bern)', hours: 'approx. 1,500–1,600' },
  { region: 'Eastern Switzerland (St. Gallen)', hours: 'approx. 1,500' },
];

export default function SolarPanelsSwissClimatePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/en" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/en/how-solar-works" className="hover:text-white/70 transition-colors">Solar Energy</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Solar Panels & Swiss Climate</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Sun className="w-3.5 h-3.5" /> Technology &amp; Climate
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Which Solar Panels Are Suited for the Swiss Climate?
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Many homeowners in Switzerland wonder: is a solar system really worth it when the weather is often cloudy, cold or snowy? The answer surprises many: modern photovoltaic systems work reliably in snow, fog and low temperatures — and in some cases even better than in warmer regions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: '1,300–2,100', sub: 'Sunshine hours by canton', note: 'depending on altitude and region' },
              { val: '+5–10%', sub: 'Extra yield in cold weather', note: 'thanks to the temperature effect' },
              { val: '25–30 years', sub: 'Lifespan in the Swiss climate', note: 'with manufacturer warranty' },
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

        {/* ── Sunshine hours ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Solar yield by region</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              How does the Swiss climate affect solar production?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Switzerland has a very diverse climate — from the foggy Plateau to the sunny Ticino. What many do not know: photovoltaic modules need light, not heat. And there is plenty of light in Switzerland, even in winter.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Even on the Plateau with an average of 1,500 sunshine hours, a 10 kWp system produces around 9,000–10,000 kWh per year. Discover the{' '}
              <Link href="/en/solar-panel-costs" className="text-[#F97316] hover:underline font-medium">costs of a solar system</Link>{' '}
              in Switzerland.
            </p>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                    <th className="text-left px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Region</th>
                    <th className="text-right px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Sunshine hours/year</th>
                  </tr>
                </thead>
                <tbody>
                  {sunshine.map((row, i) => (
                    <tr key={row.region} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-5 py-3.5 text-gray-700">{row.region}</td>
                      <td className="px-5 py-3.5 text-right font-semibold text-gray-900">{row.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Snow and cold ── */}
        <section>
          <div className="mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Winter operation</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              What happens to solar modules in snow and cold weather?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Snow',
                badge: 'No problem',
                text: 'Snow on modules briefly reduces production. On sloped roofs, snow generally slides off quickly — the modules themselves help by releasing a small amount of heat. After a snowfall, the system is usually back to full output within hours.',
              },
              {
                title: 'Cold',
                badge: 'Even beneficial',
                text: 'Photovoltaic modules actually work more efficiently in cold weather than in heat. Above around 25°C, efficiency drops slightly. In the cool Swiss spring and autumn, modules often operate at peak performance.',
              },
              {
                title: 'Fog',
                badge: 'Reduced, not zero',
                text: 'In fog, production is reduced but not zero. Diffuse light is still partially converted into electricity by modern modules. High-performance monocrystalline modules have a particular advantage here.',
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
              <strong className="text-orange-600">Tip:</strong> Read our detailed article on{' '}
              <Link href="/en/blog/solaranlage-winter-schweiz" className="text-[#F97316] hover:underline font-medium">solar panels in winter</Link>{' '}
              with concrete production figures and the 2026 winter bonus.
            </p>
          </div>
        </section>

        {/* ── Which modules ── */}
        <section>
          <div className="mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Module selection</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Which modules are particularly well suited to Switzerland?
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl">
              Not all modules are equally well suited to the Swiss climate. These characteristics matter:
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

        {/* ── All cantons ── */}
        <section className="rounded-3xl p-10 sm:p-12" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
          <div className="max-w-3xl">
            <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Solar worth it everywhere?</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
              Is solar worthwhile in all Swiss cantons?
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Yes — even in less sunny cantons, a solar system pays off. Here is why:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Electricity prices in Switzerland are high',
                <>The federal subsidy (<Link href="/en/solar-subsidies" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">one-time payment OTS</Link>) applies throughout Switzerland</>,
                'Modern modules produce efficiently even in diffuse light',
                'The payback period is 8–10 years even on the Plateau',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-5">
              <p className="text-orange-200 text-sm leading-relaxed">
                In Ticino, a system pays for itself in just 4–6 years — the best figure in all of Switzerland. In the canton of Zurich, the payback period is 7–9 years.
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
            Check now whether solar is right for your roof
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Regardless of canton and climate — our certified installers calculate the potential of your roof and provide a free, tailored quote.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/en/request"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
              style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
            >
              Get free quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-5">
            First compare{' '}
            <Link href="/en/get-solar-panel-quotes" className="text-[#F97316] hover:underline font-medium">solar quotes</Link>{' '}
            or{' '}
            <Link href="/en/solar-comparison-portal-switzerland" className="text-[#F97316] hover:underline font-medium">providers</Link>?
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
              <Link href="/en/solar-subsidies" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Solar subsidies
              </Link>
              <Link href="/en/solar-panel-costs" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Solar panel costs
              </Link>
              <Link href="/en/solar-comparison-portal-switzerland" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Compare installers
              </Link>
              <Link href="/en/request" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
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
