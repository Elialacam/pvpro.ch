import Link from 'next/link';
import { ChevronRight, ArrowRight, Wrench, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Solar Panel Maintenance Costs Switzerland 2026 – What Does Maintenance Cost? | PVPro.ch',
  description: 'How much does solar panel maintenance cost in Switzerland? Cleaning, inspection, repair — all costs at a glance. Find out more at PVPro.ch.',
  alternates: {
    canonical: 'https://pvpro.ch/en/solar-panel-maintenance-costs',
    languages: {
      'de-CH': 'https://pvpro.ch/photovoltaik-wartung-kosten',
      'fr-CH': 'https://pvpro.ch/fr/entretien-photovoltaique-couts',
      'en': 'https://pvpro.ch/en/solar-panel-maintenance-costs',
      'it-CH': 'https://pvpro.ch/it/manutenzione-fotovoltaico-costi',
      'x-default': 'https://pvpro.ch/photovoltaik-wartung-kosten',
    },
  },
  openGraph: {
    title: 'Solar Panel Maintenance Costs Switzerland 2026 – What Does Maintenance Cost?',
    description: 'Cleaning, inspection, repair — all solar panel maintenance costs in Switzerland at a glance.',
    url: 'https://pvpro.ch/en/solar-panel-maintenance-costs',
    type: 'website',
    locale: 'en_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: 'Do I need to clean my solar panels regularly?',
    answer: 'In Switzerland, rain is sufficient in most cases. In areas with heavy bird activity or in dusty regions, manual cleaning once a year is recommended.',
  },
  {
    question: 'How much does a maintenance contract for a solar system cost?',
    answer: "Many installers offer maintenance contracts for CHF 150–300 per year, which include an annual inspection and minor repairs.",
  },
  {
    question: 'How long does an inverter last?',
    answer: "Inverters typically last 10 to 15 years. A replacement costs between CHF 1,500 and 3,000 depending on the model.",
  },
  {
    question: 'Do I lose the warranty if I do the maintenance myself?',
    answer: 'The visual inspection and cleaning of the modules can be done without voiding the warranty. However, electrical work must be carried out by a certified specialist.',
  },
  {
    question: 'How do I know if my system is not producing optimally?',
    answer: "Via the digital monitoring of the inverter, you can track daily production. If production deviates significantly from the previous year without an obvious reason, you should request an inspection.",
  },
  {
    question: 'Who can carry out maintenance on my solar system?',
    answer: 'Certified Swiss installers offer maintenance services. PVPro.ch also connects you with service partners for existing systems on request.',
  },
];

const services = [
  { title: "Visual inspection of modules", text: "Once a year, the modules should be checked for dirt, cracks, discolouration or damage. Bird droppings, leaves and moss can noticeably reduce production." },
  { title: "Module cleaning", text: "In Switzerland, rain is usually sufficient to keep the modules clean. In dusty regions or with heavy bird activity, manual cleaning may be useful." },
  { title: "Inverter inspection", text: "The inverter is the heart of the system. It should be checked annually for errors, overheating and correct functioning." },
  { title: "Electrical connection checks", text: "Cable connections, connectors and terminals can loosen over time. Regular checks prevent failures and fire risks." },
  { title: "Production monitoring", text: "Modern systems have digital monitoring. Anyone who regularly monitors production data will immediately detect deviations." },
  { title: "Roof inspection", text: "During the annual inspection, the roof around the mounting should also be checked — for watertightness and stability of the substructure." },
];

const costs = [
  { service: "Annual inspection (without cleaning)", cost: "CHF 100–200" },
  { service: "Module cleaning", cost: "CHF 100–300 depending on size" },
  { service: "Inverter replacement (after 10–15 years)", cost: "CHF 1,500–3,000" },
  { service: "Minor damage repair", cost: "CHF 200–500" },
  { service: "Annual total costs (average)", cost: "CHF 150–300/year", highlight: true },
];

const frequencies = [
  { measure: "Visual inspection", frequency: "2x per year (recommended)" },
  { measure: "Professional inspection", frequency: "1x per year" },
  { measure: "Module cleaning", frequency: "As needed, min. 1x per year" },
  { measure: "Inverter check", frequency: "1x per year" },
  { measure: "Electrical check", frequency: "Every 2–3 years" },
  { measure: "Inverter replacement", frequency: "After 10–15 years" },
];

export default function SolarPanelMaintenanceCostsPage() {
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
            <span className="text-white/70">Maintenance &amp; Costs</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Wrench className="w-3.5 h-3.5" /> Maintenance &amp; Operation
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Solar Panel Maintenance in Switzerland — Costs and Process
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              A solar panel system requires little maintenance — but not none. Those who regularly check and maintain their system ensure full output over the entire lifespan of 25–30 years. This page explains what maintenance involves, what it costs and how often the system should be checked.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: 'CHF 150–300', sub: "typical maintenance costs per year", note: "incl. inspection and minor cleaning" },
              { val: '1x per year', sub: "recommended inspection", note: "professional by certified specialist" },
              { val: '25–30 years', sub: "lifespan with good maintenance", note: "with manufacturer performance warranty" },
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

        <section>
          <div className="mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Services overview</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What does solar panel maintenance include?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div key={i} className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                  <Wrench className="w-5 h-5 text-[#F97316]" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Cost overview</p>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">How much does maintenance cost in Switzerland?</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Over the entire lifespan of 25 years, this amounts to maintenance costs of approximately CHF 4,000–7,500 — a small amount compared to the total investment.
            </p>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                    <th className="text-left px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Service</th>
                    <th className="text-right px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {costs.map((row, i) => (
                    <tr key={row.service} className={row.highlight ? 'bg-orange-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className={`px-5 py-3.5 text-sm ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-700'}`}>{row.service}</td>
                      <td className={`px-5 py-3.5 text-right font-bold text-sm ${row.highlight ? 'text-[#F97316]' : 'text-gray-900'}`}>{row.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Maintenance intervals</p>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">How often should a solar system be maintained?</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              A good installer will explain all warranties and recommended maintenance intervals transparently before purchase.
            </p>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                    <th className="text-left px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Measure</th>
                    <th className="text-right px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {frequencies.map((row, i) => (
                    <tr key={row.measure} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-5 py-3.5 text-gray-700 text-sm">{row.measure}</td>
                      <td className="px-5 py-3.5 text-right font-bold text-gray-900 text-sm">{row.frequency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <Wrench className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Submit a maintenance request now</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Do you have an existing system that needs maintenance? Or are you planning a new system and would like to take out a maintenance contract straight away? We connect you with the right partner.
          </p>
          <Link href="/en/request" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            Get free quote <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

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
        </section>

      </div>
      <FaqSchema faqs={faqs} />
    </main>
  );
}
