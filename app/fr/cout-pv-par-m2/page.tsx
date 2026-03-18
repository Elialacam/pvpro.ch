import Link from 'next/link';
import { ChevronRight, Sun, Home, Ruler, Award, Wrench } from 'lucide-react';
import { Metadata } from 'next';
import PhotovoltaikFaq from '@/components/PhotovoltaikFaq';

export const metadata: Metadata = {
  title: 'Coût photovoltaïque par m² Suisse : prix, exemples et calcul | PVPro.ch',
  description: 'Combien coûte le photovoltaïque par m² en Suisse ? Prix, exemples et coûts par kWp expliqués simplement. Comparez les offres maintenant.',
  alternates: { canonical: 'https://www.pvpro.ch/fr/cout-pv-par-m2' },
};

const priceRows = [
  { label: 'Installation simple',   range: 'env. 200 – 250 CHF', color: '#6b7280', highlight: false },
  { label: 'Installation standard', range: 'env. 250 – 350 CHF', color: '#F97316', highlight: true },
  { label: 'Installation haut de gamme', range: 'env. 350 – 400+ CHF', color: '#1e3a5f', highlight: false },
];

const factors = [
  { icon: Home,  title: 'Type de toit',          text: 'Un toit plat est souvent moins cher à installer qu\'un toit en pente complexe.' },
  { icon: Ruler, title: 'Taille de l\'installation', text: 'Les grandes installations sont généralement moins chères par m² grâce aux effets d\'échelle.' },
  { icon: Award, title: 'Qualité des modules',   text: 'Les modules haut de gamme coûtent plus cher mais offrent souvent une puissance plus élevée par m².' },
  { icon: Wrench, title: 'Effort de montage',    text: 'Les toits difficiles ou les travaux supplémentaires augmentent significativement le prix.' },
];

export default function CoutPVParM2Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative bg-[#0f1f3d] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #F97316 0%, transparent 60%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/fr" className="hover:text-white/70 transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Coût photovoltaïque par m²</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Sun className="w-3.5 h-3.5" />Coûts & prix
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Coût du photovoltaïque par m² en Suisse
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl">
              De nombreux propriétaires veulent rapidement comprendre le coût d'une installation solaire pour leur toit — sans détails techniques. En Suisse, les coûts du photovoltaïque se situent en moyenne entre{' '}
              <strong className="text-white">200 et 400 CHF par m²</strong>.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 max-w-md">
              {[
                { unit: 'par m²', price: '200 – 400 CHF', note: 'Première estimation approximative' },
                { unit: 'par kWp', price: "1'000 – 1'500 CHF", note: 'Planification précise & offre' },
              ].map(r => (
                <div key={r.unit} className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <p className="text-xl font-bold text-white mb-1">{r.price}</p>
                  <p className="text-xs text-orange-400 font-bold uppercase tracking-wide mb-2">{r.unit}</p>
                  <p className="text-xs text-gray-500">{r.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Fourchettes de prix</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Coûts selon la qualité</h2>
          </div>
          <div className="max-w-2xl mx-auto mb-6">
            {priceRows.map((row) => (
              <div key={row.label} className={`flex flex-col sm:flex-row sm:justify-between sm:items-center p-6 mb-3 rounded-2xl border ${row.highlight ? 'border-orange-200' : 'border-gray-100'}`}
                style={row.highlight ? { background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' } : {}}>
                <div className="flex items-center gap-2 mb-1 sm:mb-0">
                  {row.highlight && <span className="text-[10px] bg-orange-500 text-white font-bold px-1.5 py-0.5 rounded-full uppercase">Standard</span>}
                  <span className="font-bold text-gray-900">{row.label}</span>
                </div>
                <span className="font-bold" style={{ color: row.color }}>{row.range}</span>
              </div>
            ))}
          </div>
          <div className="max-w-2xl mx-auto p-6 rounded-2xl border border-orange-100" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
            <p className="font-bold text-gray-900 mb-3">Exemple de calcul</p>
            {[
              { label: 'Surface de toit', value: '60 m²' },
              { label: 'Prix par m²', value: '250 CHF' },
              { label: 'Prix total (indicatif)', value: "env. 15'000 CHF", bold: true },
            ].map(r => (
              <div key={r.label} className="flex justify-between py-2 border-b border-orange-100 last:border-b-0">
                <span className="text-sm text-gray-600">{r.label}</span>
                <span className={`text-sm ${r.bold ? 'font-bold text-[#F97316]' : 'text-gray-900'}`}>{r.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Facteurs de coût</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Qu'est-ce qui influence le prix par m² ?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {factors.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="rounded-2xl bg-white p-7 border border-gray-100 hover:shadow-md transition-shadow">
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

      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <PhotovoltaikFaq />
        </div>
      </section>

      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="rounded-3xl p-10 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Obtenir un devis précis</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">Recevez jusqu'à 3 devis d'installateurs certifiés avec prix exacts.</p>
            <Link href="/fr/demande" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
              Obtenir des devis gratuits →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
