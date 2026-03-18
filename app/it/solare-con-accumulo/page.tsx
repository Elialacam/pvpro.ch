import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Battery, Sun, Home, Zap, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';
import { Metadata } from 'next';
import { SpeicherGroesse, SpeicherFAQ } from '@/components/SpeicherVergleich';

export const metadata: Metadata = {
  title: 'Impianto solare con accumulo: costi, vantaggi e dimensionamento | PVPro.ch',
  description: 'Come funziona un impianto solare con accumulo? Costi, vantaggi, dimensionamento e autoconsumo in Svizzera.',
  alternates: { canonical: 'https://www.pvpro.ch/it/solare-con-accumulo' },
};

const vantaggi = [
  { icon: TrendingUp, title: 'Meno energia dalla rete',  text: 'Acquisti molto meno energia dal fornitore — giorno dopo giorno.' },
  { icon: Zap,        title: 'Costi energetici ridotti',  text: 'A lungo termine i tuoi costi energetici diminuiscono notevolmente, soprattutto con i prezzi in aumento.' },
  { icon: Home,       title: 'Più indipendenza',          text: 'Meno dipendenza dal mercato dell\'energia — anche la sera e di notte.' },
  { icon: Sun,        title: 'Usa l\'energia solare',     text: 'L\'energia autoprodotta non viene più immessa inutilizzata nella rete.' },
];

const quandoUtile = [
  'Un\'auto elettrica viene caricata',
  'Una pompa di calore viene utilizzata',
  'Il consumo di energia la sera è elevato',
  'L\'obiettivo è utilizzare la massima energia solare in autoconsumo',
];

export default function SolareConAccumuloPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative pt-28 pb-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/blog-3.png" alt="Impianto solare con accumulo" fill className="object-cover" priority />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-10">
            <Link href="/it" className="hover:text-gray-300 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-300 font-medium">Solare con accumulo</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                <Battery className="w-3.5 h-3.5" /> Accumulo a batteria
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                Impianto solare con accumulo: costi, vantaggi e funzionamento
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Un accumulo a batteria permette di utilizzare l'energia solare autoprodotta anche la sera e di notte — invece di immetterla nella rete.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '70%',      label: 'Autoconsumo possibile' },
                  { value: '8–15 kWh', label: 'Dimensione tipica accumulo' },
                  { value: '25–40k',   label: 'CHF costo totale' },
                ].map(s => (
                  <div key={s.label} className="rounded-2xl p-4 text-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <p className="text-xl font-bold text-white">{s.value}</p>
                    <p className="text-xs text-gray-500 mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl p-8" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <p className="text-white font-bold text-lg mb-6">Confronto autoconsumo</p>
              <div className="flex flex-col gap-6">
                {[
                  { label: 'Senza accumulo', pct: 30, color: '#6b7280' },
                  { label: 'Con accumulo',   pct: 70, color: '#F97316' },
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
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Vantaggi</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Perché l'accumulo a batteria?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vantaggi.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="rounded-2xl border border-gray-100 p-7 hover:shadow-lg transition-shadow">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                    <Icon className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Dimensionamento</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Quale dimensione di accumulo?</h2>
            <p className="text-gray-500 mt-2 max-w-lg mx-auto">Il calcolatore indica la dimensione ottimale in base al tuo consumo.</p>
          </div>
          <SpeicherGroesse />
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Quando è utile?</p>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-6">L'accumulo conviene?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">Un sistema di accumulo a batteria è particolarmente conveniente nei seguenti casi:</p>
              <div className="flex flex-col gap-3">
                {quandoUtile.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F97316] flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
              <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">Costo accumulo</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-5">Panoramica prezzi</h3>
              {[
                { size: '5 kWh',  price: "4'000 – 6'000 CHF" },
                { size: '10 kWh', price: "7'000 – 10'000 CHF" },
                { size: '15 kWh', price: "12'000 – 15'000 CHF" },
              ].map((row) => (
                <div key={row.size} className="flex justify-between items-center py-3 border-b border-orange-100 last:border-b-0">
                  <span className="font-bold text-gray-900">{row.size}</span>
                  <span className="font-bold text-[#F97316]">{row.price}</span>
                </div>
              ))}
              <p className="text-xs text-gray-400 mt-4">Costi indicativi esclusa installazione.</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Ricevi preventivi con accumulo</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">Ricevi fino a 3 preventivi comparativi da installatori certificati.</p>
            <Link href="/anfrage" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
              Ottieni preventivi gratuiti <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
