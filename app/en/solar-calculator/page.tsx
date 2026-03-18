import { Metadata } from 'next';
import SolarCalculator from '@/components/SolarCalculator';
import CtaAnfrage from '@/components/CtaAnfrage';
import { CheckCircle, Calculator, Zap, TrendingUp, PiggyBank } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solar Calculator Switzerland – Calculate costs and yield | PVPro',
  description: 'Free solar calculator for Switzerland. Calculate the costs, yield and payback period of your solar installation in 30 seconds.',
  alternates: {
    canonical: 'https://www.pvpro.ch/en/solar-calculator',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solarrechner',
      'fr-CH': 'https://www.pvpro.ch/fr/calculateur-solaire',
      'en-CH': 'https://www.pvpro.ch/en/solar-calculator',
      'it-CH': 'https://www.pvpro.ch/it/calcolatore-solare',
      'x-default': 'https://www.pvpro.ch/solarrechner',
    },
  },
};

const benefits = [
  { icon: Calculator, title: 'Instant calculation',    description: 'Get a first estimate for your solar installation in seconds.' },
  { icon: Zap,        title: 'Calculate yield',        description: 'See how much electricity you can produce with your roof area.' },
  { icon: PiggyBank,  title: 'Understand costs',       description: 'Realistic cost estimate based on Swiss market prices.' },
  { icon: TrendingUp, title: 'Plan your payback',      description: 'Find out when your investment will have paid for itself.' },
];

const faqs = [
  { question: 'How accurate is the solar calculator?', answer: "Our solar calculator gives you a good first orientation. It is based on Swiss average values: 6.5 m² per kWp, 950 kWh of production per kWp and CHF 2,200 installation costs per kWp. For an exact calculation, we recommend a professional on-site consultation." },
  { question: 'What is kWp?', answer: 'kWp (kilowatt peak) is the unit of measurement for the nominal output of a photovoltaic installation. 1 kWp corresponds to approximately 6.5 m² of panel area in Switzerland.' },
  { question: 'How much electricity can I use myself?', answer: 'Without storage, you can use around 25–35% of the electricity yourself. With a battery storage system, self-consumption rises to around 60–75%.' },
  { question: 'How do I get a precise quote?', answer: 'The calculator gives you a good first estimate. For an exact quote, get up to 3 free offers from certified installers through PVPro.' },
];

export default function SolarCalculatorPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative bg-[#0f1f3d] pt-28 pb-16">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Calculator className="w-3.5 h-3.5" />Free tool
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Solar Calculator Switzerland
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Calculate the costs, yield and payback period of your solar installation in 30 seconds.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <SolarCalculator />
        </div>
      </section>

      <section className="py-16" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900">What you will learn</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="rounded-2xl bg-white p-7 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                    <Icon className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{b.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently asked questions</h2>
            <div className="flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <CtaAnfrage />
        </div>
      </section>
    </main>
  );
}
