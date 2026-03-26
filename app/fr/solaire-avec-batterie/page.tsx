import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Battery, Sun, Home, Zap, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';
import { Metadata } from 'next';
import { SpeicherGroesse, SpeicherFAQ } from '@/components/SpeicherVergleich';

export const metadata: Metadata = {
  title: 'Installation solaire avec batterie : coûts, avantages et fonctionnement | PVPro.ch',
  description: 'Comment fonctionne une installation solaire avec batterie ? Coûts, avantages, taille du stockage et autoconsommation en Suisse.',
  alternates: {
    canonical: 'https://pvpro.ch/fr/solaire-avec-batterie',
    languages: {
      'de-CH': 'https://pvpro.ch/solaranlage-mit-speicher',
      'fr-CH': 'https://pvpro.ch/fr/solaire-avec-batterie',
      'en-CH': 'https://pvpro.ch/en/solar-with-battery',
      'it-CH': 'https://pvpro.ch/it/solare-con-accumulo',
      'x-default': 'https://pvpro.ch/solaranlage-mit-speicher',
    },
  },
};

const avantages = [
  { icon: TrendingUp, title: 'Moins d\'électricité achetée',  text: 'Vous achetez beaucoup moins d\'électricité au fournisseur — jour après jour.' },
  { icon: Zap,        title: 'Coûts d\'électricité réduits',  text: 'À long terme, vos coûts d\'électricité baissent considérablement, surtout avec la hausse des prix.' },
  { icon: Home,       title: 'Plus d\'indépendance',          text: 'Moins de dépendance au marché de l\'électricité — même le soir et la nuit.' },
  { icon: Sun,        title: 'Utiliser l\'énergie solaire',   text: 'L\'électricité autoproduite n\'est plus injectée inutilisée dans le réseau.' },
];

const quandUtile = [
  'Une voiture électrique est chargée',
  'Une pompe à chaleur est exploitée',
  'La consommation d\'électricité le soir est élevée',
  'L\'objectif est d\'utiliser au maximum l\'électricité solaire en autoconsommation',
];

export default function SolaireAvecBatteriePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── HERO ── */}
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
                  { label: 'Sans stockage', pct: 30, color: '#6b7280' },
                  { label: 'Avec stockage',  pct: 70, color: '#F97316' },
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
              <p className="text-xs text-gray-500 mt-6">Valeurs moyennes pour une maison individuelle avec une installation solaire de 10 kWp</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FONCTIONNEMENT ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Fonctionnement</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6">
                Comment fonctionne une installation solaire avec batterie ?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Une installation photovoltaïque produit de l'électricité à partir de l'énergie solaire pendant la journée. Celle-ci est d'abord utilisée directement dans le foyer — pour les appareils, l'éclairage ou les pompes à chaleur.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Si l'installation produit plus que nécessaire, le stockage batterie stocke automatiquement l'énergie. Le soir ou la nuit, il la restitue. Une régulation intelligente assure une répartition optimale.
              </p>

              <div className="flex items-center gap-3 flex-wrap">
                {[
                  { icon: Sun,     label: 'Installation solaire', color: '#F97316' },
                  { icon: Battery, label: 'Stockage',             color: '#3b82f6' },
                  { icon: Home,    label: 'Maison',               color: '#10b981' },
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
              <Image src="/images/hero-family-solar.png" alt="Installation solaire avec stockage batterie" width={700} height={500} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── AVANTAGES ── */}
      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Pourquoi ça vaut la peine ?</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Les avantages d'un stockage batterie
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              Sans stockage, seuls <strong className="text-gray-800">30%</strong> de l'électricité solaire produite sont utilisés directement. Avec un stockage, cette valeur passe à <strong className="text-gray-800">60–70%</strong>.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {avantages.map(a => {
              const Icon = a.icon;
              return (
                <div key={a.title} className="rounded-2xl border border-gray-100 bg-white p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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

      {/* ── COÛTS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Coûts & prix</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6">
                Combien coûte une installation solaire avec batterie ?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Les coûts dépendent de la taille de l'installation, de la capacité du stockage, du type de toit et de la qualité des composants. Voici des valeurs indicatives typiques pour une maison individuelle :
              </p>

              <div className="flex flex-col gap-3">
                {[
                  { label: 'Installation photovoltaïque (env. 10 kWp)', range: "18'000 – 25'000 CHF", highlight: false },
                  { label: 'Stockage batterie',                          range: "8'000 – 15'000 CHF",  highlight: false },
                  { label: 'Installation complète',                      range: "25'000 – 40'000 CHF", highlight: true  },
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
                Grâce aux programmes de subventions et à l'autoconsommation accrue, l'installation peut être rentable économiquement sur plusieurs années.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/blog-5.png" alt="Coûts installation solaire Suisse" width={700} height={500} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── TAILLE DU STOCKAGE (INTERACTIVE) ── */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-orange-400 uppercase tracking-widest mb-3">Taille du stockage</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
                Quelle doit être la taille de votre stockage batterie ?
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                La taille idéale dépend de la consommation électrique de votre foyer et de la taille de votre installation solaire. Un stockage trop grand peut être moins judicieux économiquement.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Choisissez votre profil de foyer pour voir la taille de stockage recommandée et l'autoconsommation attendue.
              </p>
            </div>
            <SpeicherGroesse />
          </div>
        </div>
      </section>

      {/* ── PRODUCTION + QUAND ÇA VAUT ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/blog-1.png" alt="Production électricité solaire" width={700} height={500} className="w-full h-auto object-cover" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Production d'électricité</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6">
                Combien d'électricité produit une installation solaire ?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Une installation de 10 kWp typique produit en Suisse environ <strong>9'000 – 11'000 kWh par an</strong> — soit environ <strong>25–40 kWh</strong> par jour.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                La quantité exacte dépend de l'orientation du toit, de l'angle d'inclinaison et de l'ensoleillement régional.
              </p>

              <p className="font-bold text-gray-900 mb-4">Un stockage est particulièrement utile si…</p>
              <div className="flex flex-col gap-2.5">
                {quandUtile.map(w => (
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
              Questions fréquentes sur le stockage batterie
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
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-4">Comparer les offres</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Comparez maintenant votre installation solaire avec stockage
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
              Les coûts peuvent varier considérablement selon l'installateur et les composants. Obtenez gratuitement jusqu'à 3 devis et comparez-les.
            </p>
            <Link
              href="/fr/demande"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity"
              style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
            >
              Obtenir des devis gratuits
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
