import Link from 'next/link';
import { ChevronRight, Building2, ArrowRight, TrendingUp, Users, BarChart3 } from 'lucide-react';
import { Metadata } from 'next';
import MehrfamilienhausRechner, { MehrfamilienhausFaq } from '@/components/MehrfamilienhausRechner';

export const metadata: Metadata = {
  title: 'Impianto solare condominio Svizzera: costi, CEP e redditività | PVPro.ch',
  description: 'Quanto costa un impianto solare per un condominio? Costi, CEP, dimensioni e redditività per più unità abitative in Svizzera.',
  alternates: { canonical: 'https://www.pvpro.ch/it/solare-condominio' },
};

const costRows = [
  { size: 'Impianto piccolo (15–30 kWp)', price: "ca. 40'000 – 80'000 CHF", highlight: false },
  { size: 'Impianto medio (30–60 kWp)', price: "ca. 80'000 – 150'000 CHF", highlight: true },
  { size: 'Impianto grande (60+ kWp)', price: "150'000 CHF +", highlight: false },
];

const sizeGuide = [
  { unita: '5–10 appartamenti',   kwp: 'ca. 20–40 kWp', m2: 'ca. 100–240 m²' },
  { unita: '10–20 appartamenti',  kwp: 'ca. 40–80 kWp', m2: 'ca. 200–480 m²' },
  { unita: 'Edifici più grandi',  kwp: '80 kWp +',       m2: '480 m² +' },
];

const benefits = [
  { icon: TrendingUp, title: 'Autoconsumo elevato', text: 'Con molti utenti, l\'energia solare viene consumata regolarmente durante tutto il giorno — ideale per i condomini.' },
  { icon: Users,      title: 'Costi inferiori per tutti', text: 'L\'energia solare è più economica dell\'energia di rete. Tutti i condòmini ne beneficiano direttamente.' },
  { icon: Building2,  title: 'Valore immobiliare in aumento', text: 'Gli edifici con impianti solari sono più attrattivi per inquilini e acquirenti.' },
  { icon: BarChart3,  title: 'Prezzi energetici stabili', text: 'L\'indipendenza dagli aumenti dei prezzi dell\'energia protegge proprietari e inquilini a lungo termine.' },
];

export default function SolareCondominioPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative bg-[#0f1f3d] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/it" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Solare condominio</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Building2 className="w-3.5 h-3.5" />Condomini
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Solare per condomini: costi, CEP e redditività
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              I condomini offrono un enorme potenziale per il fotovoltaico. Grazie alla comunità di energia locale (CEP), tutti i condòmini possono beneficiare direttamente dell'energia solare.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '60–75%', label: 'Autoconsumo possibile' },
                { value: '25+ anni', label: 'Vita utile' },
                { value: '10–15 anni', label: 'Ammortamento' },
              ].map(s => (
                <div key={s.label} className="rounded-2xl p-4 text-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <p className="text-xl font-bold text-white">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Vantaggi</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Perché il solare per un condominio?</h2>
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
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Panoramica prezzi</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Costi per dimensione</h2>
          </div>
          <div className="max-w-2xl mx-auto mb-10">
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
          </div>
          <div className="max-w-2xl mx-auto">
            <h3 className="font-bold text-gray-900 mb-4">Guida al dimensionamento</h3>
            <div className="rounded-2xl overflow-hidden border border-gray-100">
              <div className="grid grid-cols-3 bg-gray-900 text-gray-400 text-xs font-bold uppercase tracking-widest">
                {['Appartamenti', 'Potenza', 'Superficie'].map(h => <div key={h} className="px-5 py-3">{h}</div>)}
              </div>
              {sizeGuide.map((row) => (
                <div key={row.unita} className="grid grid-cols-3 border-t border-gray-100">
                  <div className="px-5 py-4 font-bold text-gray-900">{row.unita}</div>
                  <div className="px-5 py-4 text-[#F97316] font-bold">{row.kwp}</div>
                  <div className="px-5 py-4 text-gray-600">{row.m2}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Calcolo personalizzato</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Calcola il tuo condominio</h2>
          </div>
          <MehrfamilienhausRechner />
        </div>
      </section>

      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <MehrfamilienhausFaq />
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="rounded-3xl p-10 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Ricevi preventivi per il tuo condominio</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">Ricevi fino a 3 preventivi da installatori certificati.</p>
            <Link href="/anfrage" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
              Ottieni preventivi gratuiti <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
