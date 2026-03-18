import Link from 'next/link';
import { ChevronRight, Sun, CheckCircle2, TrendingUp, Users, Building2, Zap, ArrowRight, BarChart3 } from 'lucide-react';
import { Metadata } from 'next';
import MehrfamilienhausRechner, { MehrfamilienhausFaq } from '@/components/MehrfamilienhausRechner';

export const metadata: Metadata = {
  title: 'Installation solaire immeuble Suisse : coûts, ZEC et rentabilité | PVPro.ch',
  description: 'Combien coûte une installation solaire pour un immeuble ? Coûts, ZEC, taille et rentabilité pour plusieurs logements en Suisse.',
  alternates: {
    canonical: 'https://www.pvpro.ch/fr/solaire-immeuble',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solaranlage-mehrfamilienhaus',
      'fr-CH': 'https://www.pvpro.ch/fr/solaire-immeuble',
      'en-CH': 'https://www.pvpro.ch/en/solar-apartment-building',
      'it-CH': 'https://www.pvpro.ch/it/solare-condominio',
      'x-default': 'https://www.pvpro.ch/solaranlage-mehrfamilienhaus',
    },
  },
};

const costRows = [
  { size: 'Petite installation (15–30 kWp)', price: "env. 40'000 – 80'000 CHF", highlight: false },
  { size: 'Installation moyenne (30–60 kWp)', price: "env. 80'000 – 150'000 CHF", highlight: true },
  { size: 'Grande installation (60+ kWp)', price: "150'000 CHF +", highlight: false },
];

const sizeGuide = [
  { logements: '5–10 logements',    kwp: 'env. 20–40 kWp', m2: 'env. 100–240 m²' },
  { logements: '10–20 logements',   kwp: 'env. 40–80 kWp', m2: 'env. 200–480 m²' },
  { logements: 'Grands bâtiments',  kwp: '80 kWp +',       m2: '480 m² +' },
];

const benefits = [
  { icon: TrendingUp, title: 'Autoconsommation élevée', text: 'Avec de nombreux utilisateurs, l\'électricité solaire est consommée régulièrement tout au long de la journée.' },
  { icon: Users,      title: 'Coûts réduits pour tous', text: 'L\'électricité solaire est moins chère que l\'électricité du réseau. Tous les locataires en profitent directement.' },
  { icon: Building2,  title: 'Valeur immobilière en hausse', text: 'Les bâtiments avec installations solaires sont plus attractifs pour les locataires et les acheteurs.' },
  { icon: BarChart3,  title: 'Prix de l\'énergie stables', text: 'L\'indépendance des hausses des prix de l\'électricité protège les propriétaires et les locataires à long terme.' },
];

export default function SolaireImmeubleage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative bg-[#0f1f3d] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/fr" className="hover:text-white/70 transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Solaire immeuble</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Building2 className="w-3.5 h-3.5" />Immeubles résidentiels
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Installation solaire pour immeuble : coûts, ZEC et rentabilité
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Les immeubles résidentiels présentent un énorme potentiel pour le photovoltaïque. Grâce à la communauté de production d'électricité (ZEC), tous les locataires peuvent profiter directement de l'électricité solaire.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '60–75%', label: 'Autoconsommation possible' },
                { value: '25+ ans', label: 'Durée de vie' },
                { value: '10–15 ans', label: 'Amortissement' },
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
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Avantages</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Pourquoi le solaire pour un immeuble ?</h2>
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
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Aperçu des prix</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Coûts selon la taille</h2>
          </div>
          <div className="max-w-2xl mx-auto mb-10">
            {costRows.map((row) => (
              <div key={row.size} className={`flex flex-col sm:flex-row sm:justify-between sm:items-center p-6 mb-3 rounded-2xl border ${row.highlight ? 'border-orange-200' : 'border-gray-100'}`}
                style={row.highlight ? { background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' } : {}}>
                <div className="flex items-center gap-2 mb-1 sm:mb-0">
                  {row.highlight && <span className="text-[10px] bg-orange-500 text-white font-bold px-1.5 py-0.5 rounded-full uppercase">Populaire</span>}
                  <span className="font-bold text-gray-900">{row.size}</span>
                </div>
                <span className="font-bold text-[#F97316]">{row.price}</span>
              </div>
            ))}
          </div>
          <div className="max-w-2xl mx-auto">
            <h3 className="font-bold text-gray-900 mb-4">Guide de dimensionnement</h3>
            <div className="rounded-2xl overflow-hidden border border-gray-100">
              <div className="grid grid-cols-3 bg-gray-900 text-gray-400 text-xs font-bold uppercase tracking-widest">
                {['Logements', 'Puissance', 'Surface'].map(h => <div key={h} className="px-5 py-3">{h}</div>)}
              </div>
              {sizeGuide.map((row) => (
                <div key={row.logements} className="grid grid-cols-3 border-t border-gray-100">
                  <div className="px-5 py-4 font-bold text-gray-900">{row.logements}</div>
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
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Calcul personnalisé</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Calculez votre immeuble</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Obtenir des devis pour votre immeuble</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">Recevez jusqu'à 3 devis d'installateurs certifiés.</p>
            <Link href="/fr/demande" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
              Obtenir des devis gratuits <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
