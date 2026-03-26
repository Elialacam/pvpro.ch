import Link from 'next/link';
import { ChevronRight, Sun, Zap, TrendingDown, CheckCircle2, Home, Ruler, Award, Wrench } from 'lucide-react';
import { Metadata } from 'next';
import PhotovoltaikFaq from '@/components/PhotovoltaikFaq';

export const metadata: Metadata = {
  title: 'Coût photovoltaïque par m² Suisse : prix, exemples et calcul | PVPro.ch',
  description: 'Combien coûte le photovoltaïque par m² en Suisse ? Prix, exemples et coûts par kWp expliqués simplement. Comparez les offres maintenant.',
  alternates: {
    canonical: 'https://pvpro.ch/fr/cout-pv-par-m2',
    languages: {
      'de-CH': 'https://pvpro.ch/photovoltaik-kosten-pro-m2',
      'fr-CH': 'https://pvpro.ch/fr/cout-pv-par-m2',
      'en-CH': 'https://pvpro.ch/en/solar-cost-per-m2',
      'it-CH': 'https://pvpro.ch/it/costo-fv-per-m2',
      'x-default': 'https://pvpro.ch/photovoltaik-kosten-pro-m2',
    },
  },
};

const priceRows = [
  { label: 'Installation simple',        range: 'env. 200 – 250 CHF', color: '#6b7280', highlight: false },
  { label: 'Installation standard',      range: 'env. 250 – 350 CHF', color: '#F97316', highlight: true },
  { label: 'Installation haut de gamme', range: 'env. 350 – 400+ CHF', color: '#1e3a5f', highlight: false },
];

const comparisonRows = [
  { unit: 'par m²',  price: '200 – 400 CHF',      note: 'Première estimation approximative' },
  { unit: 'par kWp', price: "1'000 – 1'500 CHF",  note: 'Planification précise & devis' },
];

const exampleRows = [
  { position: 'Surface de toit',            value: '60 m²',              last: false },
  { position: 'Prix par m²',                value: '250 CHF',            last: false },
  { position: 'Prix total (valeur indicative)', value: "env. 15'000 CHF", last: true },
];

const factors = [
  { icon: Home,   title: 'Type de toit',          text: 'Un toit plat est souvent moins cher à installer qu\'un toit incliné complexe.' },
  { icon: Ruler,  title: 'Taille de l\'installation', text: 'Les grandes installations sont généralement moins chères par m² — effet d\'échelle.' },
  { icon: Award,  title: 'Qualité des modules',   text: 'Les modules haut de gamme coûtent plus cher mais offrent souvent une puissance plus élevée par m².' },
  { icon: Wrench, title: 'Effort de montage',     text: 'Les toits difficiles ou les travaux supplémentaires augmentent considérablement le prix.' },
];

export default function CoutPVParM2Page() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative bg-[#0f1f3d] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #F97316 0%, transparent 60%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/fr" className="hover:text-white/70 transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Coût photovoltaïque par m²</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Sun className="w-3.5 h-3.5" /> Coûts & prix
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Coût du photovoltaïque par m² en Suisse
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl">
              De nombreux propriétaires veulent rapidement comprendre le coût d'une installation solaire pour leur toit — sans détails techniques. En Suisse, les coûts du photovoltaïque se situent en moyenne entre{' '}
              <strong className="text-white">200 et 400 CHF par m²</strong>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { value: '200 – 400 CHF', label: 'par m² (valeur indicative)' },
                { value: '1 kWp ≈ 5–6 m²', label: 'surface nécessaire' },
                { value: '150 – 200 kWh', label: 'production par m²/an' },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl bg-white/5 border border-white/10 px-5 py-4">
                  <p className="text-2xl font-bold text-white mb-1">{s.value}</p>
                  <p className="text-xs text-white/50 uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 py-16 space-y-20">

        {/* ── Price table ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Aperçu des prix</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Combien coûte le photovoltaïque par m² ?</h2>
          <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-2xl">
            Les coûts par m² dépendent de la puissance des modules, de la qualité des composants, du type de toit et de la taille de l'installation.
          </p>
          <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="grid grid-cols-2 bg-gray-50 px-6 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
              <span>Catégorie</span><span>Prix par m²</span>
            </div>
            {priceRows.map((row) => (
              <div key={row.label} className={`grid grid-cols-2 px-6 py-5 border-t border-gray-100 ${row.highlight ? 'bg-orange-50' : 'bg-white'}`}>
                <span className="font-bold text-gray-800 text-sm sm:text-base">{row.label}</span>
                <span className="font-bold text-base sm:text-lg" style={{ color: row.color }}>{row.range}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3 italic">Ces valeurs servent d'orientation. Le prix exact dépend toujours du projet concret.</p>
        </section>

        {/* ── Why kWp ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Comprendre les unités</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Pourquoi ne calcule-t-on souvent pas en m² ?</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              En pratique, le photovoltaïque est souvent calculé en <strong className="text-gray-800">kWp (kilowatt-crête)</strong>, car les modules ont des puissances différentes, les surfaces de toit sont utilisables différemment et l'efficacité varie selon la technologie.
            </p>
            <div className="rounded-2xl bg-[#F97316]/5 border border-[#F97316]/20 p-6">
              <p className="text-sm font-bold text-[#F97316] mb-3">Conversion approximative</p>
              <p className="text-3xl font-bold text-gray-900 mb-4">1 kWp ≈ 5–6 m²</p>
              <div className="space-y-2 text-sm text-gray-600">
                {["Installation de 10 kWp → env. 50–60 m² de surface de toit", "Installation de 20 kWp → env. 100–120 m² de surface de toit"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img src="/images/asset-panel-closeup-1.png" alt="Panneaux solaires Suisse" className="w-full h-72 object-cover" />
          </div>
        </section>

        {/* ── m² vs kWp ── */}
        <section className="bg-gray-50 rounded-3xl p-8 sm:p-12">
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Comparaison</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Coûts par m² vs. coûts par kWp</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {comparisonRows.map((row) => (
              <div key={row.unit} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{row.unit}</p>
                <p className="text-3xl font-bold text-[#F97316] mb-2">{row.price}</p>
                <p className="text-sm text-gray-500">{row.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500 max-w-xl">
            Le prix par m² est plutôt adapté à une première estimation grossière. Pour une planification réaliste, le prix par kWp est généralement plus précis.
          </p>
        </section>

        {/* ── Example ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img src="/images/asset-haus-luftbild-2.png" alt="Maison individuelle avec installation solaire" className="w-full h-72 object-cover" />
          </div>
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Exemple de calcul</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Exemple : installation solaire pour une maison individuelle</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Une maison individuelle suisse typique avec 60 m² de surface de toit et env. 10 kWp de puissance :
            </p>
            <div className="rounded-2xl border border-gray-100 overflow-hidden mb-5 shadow-sm">
              {exampleRows.map((row, i) => (
                <div key={row.position} className={`flex justify-between items-center px-5 py-4 ${i !== 0 ? 'border-t border-gray-100' : ''} ${row.last ? 'bg-orange-50' : 'bg-white'}`}>
                  <span className={`text-sm ${row.last ? 'font-bold text-gray-900' : 'text-gray-600'}`}>{row.position}</span>
                  <span className={`font-bold ${row.last ? 'text-[#F97316] text-lg' : 'text-gray-900'}`}>{row.value}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-amber-50 border border-amber-100 p-4 text-sm text-amber-800 leading-relaxed">
              <strong>Remarque :</strong> En réalité, les coûts totaux sont souvent plus élevés (20'000–30'000 CHF), car l'onduleur, l'installation, la planification et le montage s'ajoutent.
            </div>
          </div>
        </section>

        {/* ── Factors ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Facteurs d'influence</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Quels facteurs influencent les coûts par m² ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {factors.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="flex gap-4 items-start bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Energy production ── */}
        <section className="rounded-3xl bg-[#0f1f3d] p-8 sm:p-12 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #F97316 0%, transparent 60%)' }} />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Production d'électricité</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Quelle quantité d'électricité produit 1 m² de photovoltaïque ?</h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Un mètre carré de photovoltaïque produit en Suisse environ{' '}
                <strong className="text-white">150 – 200 kWh d'électricité par an</strong>. La production exacte dépend de l'orientation, de la pente et de l'emplacement.
              </p>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
                <Zap className="w-6 h-6 text-[#F97316] flex-shrink-0" />
                <p className="text-sm text-white/80">
                  <strong className="text-white">50 m²</strong> → env. <strong className="text-white">7'500 – 10'000 kWh</strong> par an
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: '20 m²', kwh: "3'000 – 4'000 kWh/an", pct: 30 },
                { label: '40 m²', kwh: "6'000 – 8'000 kWh/an", pct: 60 },
                { label: '60 m²', kwh: "9'000 – 12'000 kWh/an", pct: 90 },
              ].map((row) => (
                <div key={row.label}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-white/70">{row.label}</span>
                    <span className="text-white font-bold">{row.kwh}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-[#F97316]" style={{ width: `${row.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Quand ça vaut ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Rentabilité</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Quand le photovoltaïque est-il rentable par m² ?</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Plus on consomme soi-même l'électricité produite, plus la rentabilité de l'installation est élevée.
            </p>
            <div className="space-y-3">
              {[
                'Le toit est bien orienté (sud, est/ouest)',
                'Le maximum d\'électricité est consommé soi-même',
                'La consommation électrique est élevée',
                'Le toit n\'est pas ombragé',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img src="/images/asset-beratung-indoor-1.png" alt="Conseil installation solaire Suisse" className="w-full h-72 object-cover" />
          </div>
        </section>

        {/* ── FAQ ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Questions fréquentes sur les coûts du photovoltaïque par m²
          </h2>
          <PhotovoltaikFaq />
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <TrendingDown className="w-10 h-10 text-[#F97316] mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Comparer les offres et calculer précisément les coûts
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Le coût par m² n'est qu'une estimation approximative. Via PVPro, obtenez gratuitement des devis d'installateurs certifiés — calculés précisément pour votre maison.
          </p>
          <Link
            href="/fr/demande"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
          >
            Obtenir des devis gratuits →
          </Link>
        </section>

      </div>
    </main>
  );
}
