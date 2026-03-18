import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Battery, Sun, Home, Zap, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';
import { Metadata } from 'next';
import { SpeicherGroesse, SpeicherFAQ } from '@/components/SpeicherVergleich';

export const metadata: Metadata = {
  title: 'Installation solaire avec batterie : coûts, avantages et taille | PVPro.ch',
  description: 'Comment fonctionne une installation solaire avec batterie ? Coûts, avantages, taille du stockage et autoconsommation en Suisse.',
  alternates: {
    canonical: 'https://www.pvpro.ch/fr/solaire-avec-batterie',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solaranlage-mit-speicher',
      'fr-CH': 'https://www.pvpro.ch/fr/solaire-avec-batterie',
      'en-CH': 'https://www.pvpro.ch/en/solar-with-battery',
      'it-CH': 'https://www.pvpro.ch/it/solare-con-accumulo',
      'x-default': 'https://www.pvpro.ch/solaranlage-mit-speicher',
    },
  },
};

const avantages = [
  { icon: TrendingUp, title: 'Moins d\'électricité achetée',   text: 'Vous achetez beaucoup moins d\'électricité au fournisseur — jour après jour.' },
  { icon: Zap,        title: 'Coûts d\'électricité réduits',   text: 'À long terme, vos coûts d\'électricité baissent considérablement, surtout avec la hausse des prix.' },
  { icon: Home,       title: 'Plus d\'indépendance',           text: 'Moins de dépendance au marché de l\'électricité — même le soir et la nuit.' },
  { icon: Sun,        title: 'Utiliser l\'énergie solaire',    text: 'L\'électricité autoproduite n\'est plus injectée inutilisée dans le réseau.' },
];

const quandUtile = [
  'Une voiture électrique est chargée',
  'Une pompe à chaleur est exploitée',
  'La consommation d\'électricité le soir est élevée',
  'L\'objectif est d\'utiliser un maximum d\'électricité solaire en autoconsommation',
];

export default function SolaireAvecBatteriePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative pt-28 pb-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/blog-3.png" alt="Installation solaire avec batterie" fill className="object-cover" priority />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-10">
            <Link href="/fr" className="hover:text-gray-300 transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-300 font-medium">Solaire avec batterie</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                <Battery className="w-3.5 h-3.5" /> Stockage batterie
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                Installation solaire avec batterie : coûts, avantages et fonctionnement
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Un stockage batterie permet d'utiliser l'électricité solaire autoproduite même le soir et la nuit — au lieu de l'injecter dans le réseau.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '70%',      label: 'Autoconsommation possible' },
                  { value: '8–15 kWh', label: 'Taille typique du stockage' },
                  { value: '25–40k',   label: 'CHF coût total' },
                ].map(s => (
                  <div key={s.label} className="rounded-2xl p-4 text-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <p className="text-xl font-bold text-white">{s.value}</p>
                    <p className="text-xs text-gray-500 mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl p-8" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <p className="text-white font-bold text-lg mb-6">Autoconsommation comparée</p>
              <div className="flex flex-col gap-6">
                {[
                  { label: 'Sans batterie', pct: 30, color: '#6b7280' },
                  { label: 'Avec batterie',  pct: 70, color: '#F97316' },
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
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Avantages</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Pourquoi un stockage batterie ?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {avantages.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.title} className="rounded-2xl border border-gray-100 p-7 hover:shadow-lg transition-shadow">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                    <Icon className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{a.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{a.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Taille du stockage</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Quelle taille de batterie ?</h2>
            <p className="text-gray-500 mt-2 max-w-lg mx-auto">Le calculateur indique la taille de stockage optimale selon votre consommation.</p>
          </div>
          <SpeicherGroesse />
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Quand est-ce utile ?</p>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-6">Le stockage vaut-il le coup ?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">Un système de stockage batterie est particulièrement intéressant dans les cas suivants :</p>
              <div className="flex flex-col gap-3">
                {quandUtile.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F97316] flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
              <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">Coût du stockage</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-5">Aperçu des prix</h3>
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
              <p className="text-xs text-gray-400 mt-4">Coûts indicatifs hors installation.</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Obtenir des devis avec batterie</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">Recevez jusqu'à 3 devis comparatifs d'installateurs certifiés.</p>
            <Link href="/fr/demande" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
              Obtenir des devis gratuits <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
