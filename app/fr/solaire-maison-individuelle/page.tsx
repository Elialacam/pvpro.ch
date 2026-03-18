import Link from 'next/link';
import { ChevronRight, Sun, CheckCircle2, Home, Ruler, Cpu, Wrench, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import EinfamilienhausRechner, { EinfamilienhausFaq } from '@/components/EinfamilienhausRechner';

export const metadata: Metadata = {
  title: 'Installation solaire maison individuelle Suisse : coûts, taille et avantages | PVPro.ch',
  description: 'Combien coûte une installation solaire pour une maison individuelle en Suisse ? Prix, taille, subventions et conseils expliqués simplement. Comparez les offres maintenant.',
  alternates: { canonical: 'https://www.pvpro.ch/fr/solaire-maison-individuelle' },
};

const costRows = [
  { size: 'Petite installation (6–8 kWp)', price: "env. 20'000 – 25'000 CHF", highlight: false },
  { size: 'Standard (8–10 kWp)', price: "env. 25'000 – 30'000 CHF", highlight: true },
  { size: 'Grande installation (10–15 kWp)', price: "env. 30'000 – 35'000 CHF", highlight: false },
];

const exampleRows = [
  { label: 'Surface de toit', value: '60 m²' },
  { label: 'Puissance', value: '10 kWp' },
  { label: 'Coûts', value: "env. 25'000 – 30'000 CHF" },
  { label: 'Subvention RU', value: "env. 3'600 CHF" },
  { label: 'Coûts effectifs', value: "env. 20'000 – 26'000 CHF", highlight: true },
];

const factors = [
  { icon: Home,  title: 'Taille et orientation du toit', text: 'Les toits orientés sud offrent les meilleures performances. Les toits est/ouest sont également bien adaptés.' },
  { icon: Ruler, title: 'Taille de l\'installation',     text: 'Les grandes installations sont moins chères par kWp — les effets d\'échelle jouent sur le prix.' },
  { icon: Cpu,   title: 'Technologie et composants',     text: 'Les modules, onduleurs et stockage optionnel influencent coûts et performances.' },
  { icon: Wrench, title: 'Effort d\'installation',       text: 'Les toits complexes ou difficiles d\'accès augmentent l\'effort de montage.' },
];

const benefits = ['Réduire significativement les coûts d\'électricité', 'Augmenter l\'indépendance énergétique', 'Augmenter la valeur immobilière', 'Utiliser de l\'énergie durable directement depuis le toit'];

export default function SolaireMaisonIndividuellePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative bg-[#0f1f3d] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/fr" className="hover:text-white/70 transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Solaire maison individuelle</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                <Sun className="w-3.5 h-3.5" />Pour les propriétaires
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Installation solaire pour maison individuelle : coûts, taille et avantages
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Une installation solaire est l'un des investissements les plus rentables pour les propriétaires suisses — avec la hausse des prix de l'électricité et les subventions disponibles.
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
              <p className="text-white font-bold text-lg mb-5">Exemple de calcul — 10 kWp</p>
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
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Aperçu des prix</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Coûts selon la taille</h2>
          </div>
          <div className="max-w-2xl mx-auto">
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
            <p className="text-xs text-gray-400 text-center mt-3">Coûts bruts avant subventions. La RU réduit les coûts d'environ 300–400 CHF/kWp.</p>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Calcul personnalisé</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Calculez votre installation</h2>
          </div>
          <EinfamilienhausRechner />
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Facteurs de coût</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Qu'est-ce qui influence le prix ?</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Obtenir des devis pour votre maison</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">Recevez jusqu'à 3 devis d'installateurs certifiés dans votre région.</p>
            <Link href="/fr/demande" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
              Obtenir des devis gratuits <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
