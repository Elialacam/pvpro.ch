import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Battery, Sun, Home, Zap, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';
import { Metadata } from 'next';
import { SpeicherGroesse, SpeicherFAQ } from '@/components/SpeicherVergleich';

export const metadata: Metadata = {
  title: 'Solar installation with battery storage: costs, benefits and how it works | PVPro.ch',
  description: 'How does a solar installation with battery storage work? Costs, benefits, storage size and self-consumption in Switzerland explained simply.',
  alternates: {
    canonical: 'https://pvpro.ch/en/solar-with-battery',
    languages: {
      'de-CH': 'https://pvpro.ch/solaranlage-mit-speicher',
      'fr-CH': 'https://pvpro.ch/fr/solaire-avec-batterie',
      'en-CH': 'https://pvpro.ch/en/solar-with-battery',
      'it-CH': 'https://pvpro.ch/it/solare-con-accumulo',
      'x-default': 'https://pvpro.ch/solaranlage-mit-speicher',
    },
  },
};

const benefits = [
  { icon: TrendingUp, title: 'Less electricity purchased', text: 'You buy significantly less electricity from your energy supplier — day after day.' },
  { icon: Zap,        title: 'Lower electricity costs',   text: 'In the long run, your electricity costs fall considerably, especially as prices rise.' },
  { icon: Home,       title: 'More independence',         text: 'Less dependence on the electricity market — even in the evening and at night.' },
  { icon: Sun,        title: 'Use solar energy optimally', text: 'The electricity you generate yourself is no longer fed into the grid unused.' },
];

const whenWorthwhile = [
  'An electric car is being charged',
  'A heat pump is running',
  'Evening electricity consumption is high',
  'The goal is to use as much solar electricity as possible directly',
];

export default function SolarWithBatteryPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/blog-3.png" alt="Solar installation with battery storage" fill className="object-cover" priority />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-10">
            <Link href="/en" className="hover:text-gray-300 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-300 font-medium">Solar with battery storage</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                <Battery className="w-3.5 h-3.5" /> Battery storage
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                Solar installation with battery storage: costs, benefits and how it works
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Battery storage lets you use the solar electricity you generate yourself even in the evening and at night — instead of feeding it into the grid.
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
              <p className="text-white font-bold text-lg mb-6">Self-consumption compared</p>
              <div className="flex flex-col gap-6">
                {[
                  { label: 'Without storage', pct: 30, color: '#6b7280' },
                  { label: 'With storage',     pct: 70, color: '#F97316' },
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
              <p className="text-xs text-gray-500 mt-6">Average values for a detached house with a 10 kWp solar installation</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">How it works</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6">
                How does a solar installation with battery storage work?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                A photovoltaic installation generates electricity from solar energy during the day. This is first used directly in the household — for appliances, lighting or heat pumps.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                If the installation produces more than is currently needed, the battery storage automatically stores the energy. In the evening or at night, it releases it again. An intelligent controller ensures optimal distribution.
              </p>

              <div className="flex items-center gap-3 flex-wrap">
                {[
                  { icon: Sun,     label: 'Solar installation', color: '#F97316' },
                  { icon: Battery, label: 'Storage',            color: '#3b82f6' },
                  { icon: Home,    label: 'Household',          color: '#10b981' },
                ].map((item, i, arr) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="flex flex-col items-center gap-2 rounded-2xl px-5 py-4 border border-gray-100 shadow-sm">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${item.color}18` }}>
                          <Icon className="w-5 h-5" style={{ color: item.color }} />
                        </div>
                        <p className="text-xs font-bold text-gray-700">{item.label}</p>
                      </div>
                      {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-gray-300 flex-shrink-0" />}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/hero-family-solar.png" alt="Solar installation with battery storage" width={700} height={500} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Why it's worth it</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              The benefits of battery storage
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              Without storage, only <strong className="text-gray-800">30%</strong> of the solar electricity produced is used directly. With storage, this figure rises to <strong className="text-gray-800">60–70%</strong>.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(b => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="rounded-2xl border border-gray-100 bg-white p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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

      {/* ── COSTS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Costs & prices</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6">
                How much does a solar installation with battery storage cost?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Costs depend on the system size, storage capacity, roof type and component quality. Typical guide prices for a detached house:
              </p>

              <div className="flex flex-col gap-3">
                {[
                  { label: 'Photovoltaic installation (approx. 10 kWp)', range: "18,000 – 25,000 CHF", highlight: false },
                  { label: 'Battery storage',                             range: "8,000 – 15,000 CHF",  highlight: false },
                  { label: 'Complete system',                             range: "25,000 – 40,000 CHF", highlight: true  },
                ].map(row => (
                  <div
                    key={row.label}
                    className={`flex items-center justify-between rounded-2xl px-6 py-4 ${row.highlight ? 'border-2 border-orange-200' : 'border border-gray-100'}`}
                    style={row.highlight ? { background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' } : { background: '#f9fafb' }}
                  >
                    <p className={`font-medium text-sm ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-700'}`}>{row.label}</p>
                    <p className={`font-bold ${row.highlight ? 'text-[#F97316] text-lg' : 'text-gray-900'}`}>{row.range}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4">
                Thanks to subsidy programmes and higher self-consumption, the system can pay for itself economically over several years.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/blog-5.png" alt="Solar installation costs Switzerland" width={700} height={500} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── STORAGE SIZE (INTERACTIVE) ── */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-orange-400 uppercase tracking-widest mb-3">Storage size</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
                How large should your battery storage be?
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                The ideal size depends on your household's electricity consumption and the size of your solar installation. An oversized storage can be less economically sensible.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Select your household profile to see the recommended storage size and expected self-consumption.
              </p>
            </div>
            <SpeicherGroesse />
          </div>
        </div>
      </section>

      {/* ── ELECTRICITY PRODUCTION + WHEN WORTHWHILE ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/blog-1.png" alt="Solar electricity production" width={700} height={500} className="w-full h-auto object-cover" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Electricity production</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6">
                How much electricity does a solar installation produce?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                A typical 10 kWp installation in Switzerland produces around <strong>9,000–11,000 kWh per year</strong> — that's approximately <strong>25–40 kWh</strong> per day.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                The exact amount depends on the roof orientation, tilt angle and regional solar irradiation.
              </p>

              <p className="font-bold text-gray-900 mb-4">Battery storage is especially worthwhile when…</p>
              <div className="flex flex-col gap-2.5">
                {whenWorthwhile.map(w => (
                  <div key={w} className="flex items-center gap-3 rounded-xl px-4 py-3 bg-gray-50 border border-gray-100">
                    <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0" />
                    <p className="text-sm text-gray-700">{w}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              Frequently asked questions about battery storage
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <SpeicherFAQ />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="rounded-3xl p-10 sm:p-16 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-4">Compare offers</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Compare solar installations with storage now
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
              Costs can vary significantly depending on the installer and components. Get up to 3 free quotes and compare them.
            </p>
            <Link
              href="/en/request"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity"
              style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
            >
              Get free quotes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
