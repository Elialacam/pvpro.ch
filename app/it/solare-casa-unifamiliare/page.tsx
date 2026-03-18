import Link from 'next/link';
import { ChevronRight, Sun, CheckCircle2, Home, Ruler, Cpu, Wrench, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import EinfamilienhausRechner, { EinfamilienhausFaq } from '@/components/EinfamilienhausRechner';

export const metadata: Metadata = {
  title: 'Impianto solare casa unifamiliare Svizzera: costi, dimensioni e vantaggi | PVPro.ch',
  description: 'Quanto costa un impianto solare per una casa unifamiliare in Svizzera? Prezzi, dimensioni, incentivi e consigli spiegati semplicemente. Confronta le offerte ora.',
  alternates: { canonical: 'https://www.pvpro.ch/it/solare-casa-unifamiliare' },
};

const costRows = [
  { size: 'Impianto piccolo (6–8 kWp)', price: "ca. 20'000 – 25'000 CHF", highlight: false },
  { size: 'Standard (8–10 kWp)', price: "ca. 25'000 – 30'000 CHF", highlight: true },
  { size: 'Impianto grande (10–15 kWp)', price: "ca. 30'000 – 35'000 CHF", highlight: false },
];

const exampleRows = [
  { label: 'Superficie tetto', value: '60 m²' },
  { label: 'Potenza', value: '10 kWp' },
  { label: 'Costi', value: "ca. 25'000 – 30'000 CHF" },
  { label: 'Incentivo RU', value: "ca. 3'600 CHF" },
  { label: 'Costi effettivi', value: "ca. 20'000 – 26'000 CHF", highlight: true },
];

const factors = [
  { icon: Home,  title: 'Dimensione e orientamento tetto', text: 'I tetti esposti a sud offrono le migliori prestazioni. Anche quelli est/ovest sono adatti.' },
  { icon: Ruler, title: 'Dimensione dell\'impianto',       text: 'Gli impianti più grandi costano meno per kWp — le economie di scala influiscono sul prezzo.' },
  { icon: Cpu,   title: 'Tecnologia e componenti',         text: 'I moduli, gli inverter e l\'accumulo opzionale influiscono su costi e prestazioni.' },
  { icon: Wrench, title: 'Sforzo di installazione',        text: 'I tetti complessi o difficili da raggiungere aumentano lo sforzo di montaggio.' },
];

const benefits = ['Ridurre significativamente i costi dell\'energia', 'Aumentare l\'indipendenza energetica', 'Aumentare il valore immobiliare', 'Utilizzare energia sostenibile direttamente dal tetto'];

export default function SolareCasaUnifamiliarePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative bg-[#0f1f3d] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/it" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Solare casa unifamiliare</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                <Sun className="w-3.5 h-3.5" />Per i proprietari
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Impianto solare per casa unifamiliare: costi, dimensioni e vantaggi
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Un impianto solare è uno degli investimenti più redditizi per i proprietari svizzeri — con l'aumento dei prezzi dell'energia e gli incentivi disponibili.
              </p>
              <div className="flex flex-col gap-2">
                {benefits.map(b => (
                  <div key={b} className="flex items-center gap-2.5 text-white/70 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0" />{b}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl p-8" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <p className="text-white font-bold text-lg mb-5">Esempio di calcolo — 10 kWp</p>
              {exampleRows.map((row) => (
                <div key={row.label} className={`flex justify-between py-3 border-b last:border-b-0 ${row.highlight ? 'border-orange-500/30' : 'border-white/10'}`}>
                  <span className="text-sm text-gray-400">{row.label}</span>
                  <span className={`text-sm font-bold ${row.highlight ? 'text-[#F97316]' : 'text-white'}`}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Panoramica prezzi</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Costi per dimensione</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            {costRows.map((row) => (
              <div key={row.size} className={`flex flex-col sm:flex-row sm:justify-between sm:items-center p-6 mb-3 rounded-2xl border ${row.highlight ? 'border-orange-200' : 'border-gray-100'}`}
                style={row.highlight ? { background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' } : {}}>
                <div className="flex items-center gap-2 mb-1 sm:mb-0">
                  {row.highlight && <span className="text-[10px] bg-orange-500 text-white font-bold px-1.5 py-0.5 rounded-full uppercase">Popolare</span>}
                  <span className="font-bold text-gray-900">{row.size}</span>
                </div>
                <span className="font-bold text-[#F97316]">{row.price}</span>
              </div>
            ))}
            <p className="text-xs text-gray-400 text-center mt-3">Costi lordi prima degli incentivi. La RU riduce i costi di circa 300–400 CHF/kWp.</p>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Calcolo personalizzato</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Calcola il tuo impianto</h2>
          </div>
          <EinfamilienhausRechner />
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Fattori di costo</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Cosa influisce sul prezzo?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {factors.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                    <Icon className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <EinfamilienhausFaq />
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="rounded-3xl p-10 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Ricevi preventivi per la tua casa</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">Ricevi fino a 3 preventivi da installatori certificati nella tua regione.</p>
            <Link href="/it/richiesta" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
              Ottieni preventivi gratuiti <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
