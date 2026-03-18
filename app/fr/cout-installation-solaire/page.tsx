import Link from 'next/link';
import { ChevronRight, CheckCircle, Sun, Home, Building2, Battery, Calculator, TrendingUp } from 'lucide-react';
import { Metadata } from 'next';
import CtaAnfrage from '@/components/CtaAnfrage';

export const metadata: Metadata = {
  title: 'Coût installation solaire Suisse 2026 – Prix d\'un panneau solaire | PVPro',
  description: 'Combien coûte une installation solaire en Suisse ? Prix 2026 : 15\'000 – 35\'000 CHF pour une maison individuelle. Coûts par kWp, subventions et stockage. Comparez des offres gratuitement.',
  alternates: {
    canonical: 'https://www.pvpro.ch/fr/cout-installation-solaire',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solaranlage-kosten',
      'fr-CH': 'https://www.pvpro.ch/fr/cout-installation-solaire',
      'en-CH': 'https://www.pvpro.ch/en/solar-panel-costs',
      'it-CH': 'https://www.pvpro.ch/it/costi-impianto-solare',
      'x-default': 'https://www.pvpro.ch/solaranlage-kosten',
    },
  },
};

const costTable = [
  { size: '5 kWp',  production: "4'500 – 5'000 kWh", price: "13'000 – 18'000 CHF", area: 'env. 30 – 35 m²', ideal: 'Petite maison' },
  { size: '8 kWp',  production: "7'500 – 8'000 kWh", price: "18'000 – 25'000 CHF", area: 'env. 50 – 55 m²', ideal: 'Maison individuelle', highlight: true },
  { size: '10 kWp', production: "9'000 – 10'000 kWh", price: "22'000 – 30'000 CHF", area: 'env. 62 – 68 m²', ideal: 'Grande MI / immeuble' },
];

const costFactors = [
  { icon: Building2, title: 'Taille de l\'installation', text: 'Les grandes installations ont un coût par kWp moins élevé grâce aux économies d\'échelle.' },
  { icon: Home,      title: 'Surface de toit', text: 'Plus la surface disponible est grande, plus l\'installation peut être dimensionnée généreusement.' },
  { icon: Home,      title: 'Type de toit', text: 'Les toits plats ou complexes peuvent entraîner des coûts de montage plus élevés.' },
  { icon: Sun,       title: 'Composants', text: 'Des modules ou onduleurs de haute qualité peuvent augmenter le prix mais offrent de meilleures garanties.' },
];

const faqs = [
  { question: 'Quel est le coût d\'une installation solaire pour une maison individuelle ?', answer: "La plupart des installations solaires pour maisons individuelles coûtent entre 18'000 et 30'000 CHF en Suisse après déduction des subventions (RU). Pour une installation typique de 8 à 10 kWp, c'est la fourchette habituelle." },
  { question: 'Combien coûte une installation de 10 kW en Suisse ?', answer: "Une installation photovoltaïque de 10 kWp coûte typiquement entre 22'000 et 30'000 CHF en Suisse. Après déduction de la rétribution unique (RU) de la Confédération, les coûts nets peuvent être nettement inférieurs. Une telle installation produit environ 9'000 à 10'000 kWh d'électricité par an." },
  { question: 'Quelle électricité produit une installation solaire ?', answer: "En Suisse, une installation solaire produit environ 900 à 1'000 kWh par kWp et par an. Une installation de 10 kWp produit donc environ 9'000 à 10'000 kWh annuellement." },
  { question: 'L\'énergie solaire est-elle rentable en Suisse ?', answer: "Oui. Avec la hausse des prix de l'électricité et les subventions disponibles, la plupart des installations s'amortissent en 10 à 15 ans, pour une durée de vie de 25 à 30 ans." },
];

export default function CoutInstallationSolairePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative bg-[#0f1f3d] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/fr" className="hover:text-white/70 transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Coût installation solaire</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Calculator className="w-3.5 h-3.5" />Prix 2026
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Coût d'une installation solaire en Suisse
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl">
              La plupart des maisons individuelles en Suisse paient entre{' '}
              <strong className="text-white">15'000 et 35'000 CHF</strong> pour une installation photovoltaïque complète — selon la taille, le type de toit et les composants choisis.
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-lg">
              {[
                { value: "1'400 – 2'200", unit: 'CHF/kWp', label: 'Coût moyen' },
                { value: "300 – 400",     unit: 'CHF/kWp', label: 'Subvention RU' },
                { value: '10 – 15',       unit: 'ans',     label: 'Amortissement' },
              ].map(s => (
                <div key={s.label} className="rounded-2xl p-4 text-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <p className="text-lg font-bold text-white">{s.value}</p>
                  <p className="text-xs text-orange-400 font-semibold">{s.unit}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
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
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Prix selon la taille</h2>
          </div>
          <div className="overflow-x-auto rounded-3xl shadow-xl border border-gray-100 mb-6">
            <table className="w-full">
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #1a2236, #0d1117)' }}>
                  {['Taille', 'Production annuelle', 'Prix (brut)', 'Surface requise', 'Idéal pour'].map(h => (
                    <th key={h} className="px-5 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {costTable.map((row) => (
                  <tr key={row.size} className={`border-t ${row.highlight ? 'border-orange-100' : 'border-gray-100'}`}
                    style={row.highlight ? { background: 'linear-gradient(135deg, #fff7ed, #fff5eb)' } : {}}>
                    <td className="px-5 py-5 font-bold text-gray-900">
                      <div className="flex items-center gap-2">
                        {row.highlight && <span className="text-[10px] bg-orange-500 text-white font-bold px-1.5 py-0.5 rounded-full">Populaire</span>}
                        {row.size}
                      </div>
                    </td>
                    <td className="px-5 py-5 text-gray-600">{row.production}</td>
                    <td className="px-5 py-5 font-bold text-[#F97316]">{row.price}</td>
                    <td className="px-5 py-5 text-gray-600">{row.area}</td>
                    <td className="px-5 py-5 text-gray-600">{row.ideal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 text-center">Prix bruts avant subventions. La rétribution unique réduit les coûts de 300–400 CHF/kWp.</p>
        </div>
      </section>

      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Facteurs de coût</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Qu'est-ce qui influence le prix ?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {costFactors.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="rounded-2xl p-6 bg-white border border-gray-100 hover:shadow-md transition-shadow">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Avantages du solaire</p>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-6">Pourquoi investir ?</h2>
              <div className="flex flex-col gap-3">
                {['Réduire significativement les coûts d\'électricité', 'Augmenter l\'indépendance énergétique', 'Augmenter la valeur immobilière', 'Utiliser de l\'énergie durable directement depuis le toit', 'Subventions fédérales & cantonales disponibles'].map(b => (
                  <div key={b} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F97316] flex-shrink-0" />
                    <span className="text-gray-600">{b}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 rounded-2xl border border-orange-100" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                <div className="flex items-center gap-3 mb-2">
                  <Battery className="w-5 h-5 text-[#F97316]" />
                  <p className="font-bold text-gray-900">Avec système de stockage</p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Un système de stockage de batteries augmente l'autoconsommation jusqu'à 70%. Coût supplémentaire :{' '}
                  <strong className="text-gray-800">7'000 – 15'000 CHF</strong> selon la capacité.
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Questions fréquentes</p>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-6">FAQ sur les coûts</h2>
              <div className="flex flex-col gap-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="rounded-2xl border border-gray-100 p-6">
                    <h3 className="font-bold text-gray-900 mb-2 text-sm">{faq.question}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <CtaAnfrage />
        </div>
      </section>
    </main>
  );
}
