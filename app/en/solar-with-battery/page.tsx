import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Battery, Sun, Home, Zap, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';
import { Metadata } from 'next';
import { SpeicherGroesse, SpeicherFAQ } from '@/components/SpeicherVergleich';

export const metadata: Metadata = {
  title: 'Solar installation with battery storage: costs, benefits and size | PVPro.ch',
  description: 'How does a solar installation with battery storage work? Costs, benefits, storage size and self-consumption in Switzerland.',
  alternates: {
    canonical: 'https://www.pvpro.ch/en/solar-with-battery',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solaranlage-mit-speicher',
      'fr-CH': 'https://www.pvpro.ch/fr/solaire-avec-batterie',
      'en-CH': 'https://www.pvpro.ch/en/solar-with-battery',
      'it-CH': 'https://www.pvpro.ch/it/solare-con-accumulo',
      'x-default': 'https://www.pvpro.ch/solaranlage-mit-speicher',
    },
  },
};

const benefits = [
  { icon: TrendingUp, title: 'Less grid electricity', text: 'You buy significantly less electricity from your energy supplier — day after day.' },
  { icon: Zap,        title: 'Lower electricity costs', text: 'In the long run, your electricity costs fall considerably, especially with rising prices.' },
  { icon: Home,       title: 'More independence',       text: 'Less dependence on the electricity market — even in the evenings and at night.' },
  { icon: Sun,        title: 'Use solar power',         text: 'The electricity you generate yourself is no longer fed unused into the grid.' },
];

const whenUseful = [
  'An electric car is charged',
  'A heat pump is operated',
  'Electricity consumption in the evenings is high',
  'The goal is to use as much solar power as possible yourself',
];

export default function SolarWithBatteryPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative pt-28 pb-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/blog-3.png" alt="Solar installation with battery storage" fill className="object-cover" priority />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-10">
            <Link href="/en" className="hover:text-gray-300 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-300 font-medium">Solar with battery</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                <Battery className="w-3.5 h-3.5" /> Battery storage
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                Solar installation with battery: costs, benefits and how it works
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                A battery storage system allows you to use the solar power you generate yourself even in the evenings and at night — instead of feeding it into the grid.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '70%',      label: 'Self-consumption possible' },
                  { value: '8–15 kWh', label: 'Typical storage size' },
                  { value: '25–40k',   label: 'CHF total cost' },
                ].map(s => (
                  <div key={s.label} className="rounded-2xl p-4 text-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <p className="text-xl font-bold text-white">{s.value}</p>
                    <p className="text-xs text-gray-500 mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl p-8" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <p className="text-white font-bold text-lg mb-6">Self-consumption comparison</p>
              <div className="flex flex-col gap-6">
                {[
                  { label: 'Without storage', pct: 30, color: '#6b7280' },
                  { label: 'With storage',    pct: 70, color: '#F97316' },
                ].map(item => (
                  <div key={item.label}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400 font-medium">{item.label}</span>
                      <span className="text-sm font-bold" style={{ color: item.color }}>~{item.pct}%</span>
                    </div>
                    <div className="h-4 rounded-full overflow-hidden bg-white/10">
                      <div className="h-full rounded-full" style={{ width: `${item.pct}%`, background: item.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Benefits</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Why battery storage?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="rounded-2xl border border-gray-100 p-7 hover:shadow-lg transition-shadow">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                    <Icon className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{b.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Storage size</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">What size battery do I need?</h2>
            <p className="text-gray-500 mt-2 max-w-lg mx-auto">The calculator shows the optimal storage size for your consumption.</p>
          </div>
          <SpeicherGroesse />
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">When is it useful?</p>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-6">Is storage worth it?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">A battery storage system is particularly worthwhile in the following cases:</p>
              <div className="flex flex-col gap-3">
                {whenUseful.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F97316] flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
              <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">Storage cost</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-5">Price overview</h3>
              {[
                { size: '5 kWh',  price: "CHF 4'000 – 6'000" },
                { size: '10 kWh', price: "CHF 7'000 – 10'000" },
                { size: '15 kWh', price: "CHF 12'000 – 15'000" },
              ].map((row) => (
                <div key={row.size} className="flex justify-between items-center py-3 border-b border-orange-100 last:border-b-0">
                  <span className="font-bold text-gray-900">{row.size}</span>
                  <span className="font-bold text-[#F97316]">{row.price}</span>
                </div>
              ))}
              <p className="text-xs text-gray-400 mt-4">Indicative costs excluding installation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <SpeicherFAQ />
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="rounded-3xl p-10 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Get quotes with battery storage</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">Receive up to 3 comparison quotes from certified installers.</p>
            <Link href="/en/request" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
              Get free quotes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
