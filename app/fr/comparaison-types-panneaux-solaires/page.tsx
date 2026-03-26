import Link from 'next/link';
import { ChevronRight, ArrowRight, Zap, CheckCircle, XCircle } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Comparaison types panneaux solaires Suisse 2026 – Lequel me convient ? | PVPro.ch',
  description: "Comparaison des différents types d'installations solaires en Suisse : monocristallin, polycristallin, couche mince, bifacial. Quelles sont les différences et lequel vaut la peine ?",
  alternates: {
    canonical: 'https://pvpro.ch/fr/comparaison-types-panneaux-solaires',
    languages: {
      'de-CH': 'https://pvpro.ch/solaranlagen-typen-vergleich',
      'fr-CH': 'https://pvpro.ch/fr/comparaison-types-panneaux-solaires',
      'en': 'https://pvpro.ch/en/solar-panel-types-comparison',
      'it-CH': 'https://pvpro.ch/it/confronto-tipi-impianti-solari',
      'x-default': 'https://pvpro.ch/solaranlagen-typen-vergleich',
    },
  },
  openGraph: {
    title: 'Comparaison types panneaux solaires Suisse 2026 – Lequel me convient ?',
    description: "Monocristallin, polycristallin, couche mince, bifacial — tous les types en comparaison directe pour la Suisse.",
    url: 'https://pvpro.ch/fr/comparaison-types-panneaux-solaires',
    type: 'website',
    locale: 'fr_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: "Quels panneaux solaires sont les plus populaires en Suisse ?",
    answer: "Les panneaux monocristallins sont de loin les plus installés en Suisse. Ils offrent le meilleur rendement même par temps couvert et sont idéaux pour le climat suisse.",
  },
  {
    question: "Quelle est la différence entre monocristallin et polycristallin ?",
    answer: "Les panneaux monocristallins ont un rendement plus élevé et sont plus compacts, mais coûtent un peu plus cher. Les panneaux polycristallins sont moins chers, mais nécessitent plus de surface pour la même puissance.",
  },
  {
    question: "Les panneaux bifaciaux valent-ils la peine pour une maison individuelle normale ?",
    answer: "Sur un toit en pente normal, le gain de production par la face arrière est faible. Les panneaux bifaciaux sont surtout intéressants sur les toits plats ou dans les régions enneigées.",
  },
  {
    question: "Quels panneaux durent le plus longtemps ?",
    answer: "Tous les panneaux cristallins de haute qualité ont une garantie de performance de 25 à 30 ans. Le choix du fabricant est souvent plus important que la technologie.",
  },
  {
    question: "Peut-on combiner différents types de panneaux sur le même toit ?",
    answer: "C'est techniquement possible, mais pas recommandé en pratique. Des panneaux différents ont des caractéristiques électriques différentes, ce qui peut réduire les performances du système.",
  },
  {
    question: "Quel type de panneau convient le mieux au climat suisse ?",
    answer: "Les panneaux monocristallins sont le meilleur choix pour le climat suisse — ils offrent de bonnes performances même par temps couvert et avec une lumière diffuse, et sont robustes face à la neige et au froid.",
  },
];

const tableau = [
  { type: 'Monocristallin', rendement: '18–22%', couts: 'Moyen–Élevé', ideal: "Petites surfaces, haute efficacité" },
  { type: 'Polycristallin', rendement: '15–17%', couts: 'Bas', ideal: "Grandes surfaces, option économique" },
  { type: 'Couche mince', rendement: '10–13%', couts: 'Bas', ideal: "Toits plats, applications spéciales" },
  { type: 'Bifacial', rendement: '20–24%', couts: 'Élevé', ideal: "Régions enneigées, toits plats" },
];

const situationsTableau = [
  { situation: 'Petit toit, puissance maximale', recommandation: 'Monocristallin' },
  { situation: 'Grand toit, petit budget', recommandation: 'Polycristallin' },
  { situation: 'Toit plat, région enneigée', recommandation: 'Bifacial' },
  { situation: 'Façade ou toit non conventionnel', recommandation: 'Couche mince' },
  { situation: 'Maison individuelle standard Suisse', recommandation: 'Monocristallin', highlight: true },
];

export default function ComparaisonTypesPanneauxSolairesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/fr" className="hover:text-white/70 transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/fr/installer-panneau-solaire-suisse" className="hover:text-white/70 transition-colors">Solaire</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Types de panneaux</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Zap className="w-3.5 h-3.5" /> Technique &amp; Comparaison
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Comparaison des types de panneaux solaires — lequel correspond à votre situation ?
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Toutes les installations solaires ne se valent pas. Selon le type de toit, le budget et l&apos;objectif, il existe différentes technologies et configurations. Cette page explique les principaux types de manière compréhensible — sans jargon technique.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: '22%', sub: 'rendement max. monocristallin', note: 'meilleure valeur en conditions standard' },
              { val: '4 types', sub: 'en comparaison directe', note: 'mono, poly, couche mince, bifacial' },
              { val: '25–30 ans', sub: 'durée de vie de tous les types', note: 'avec garantie de performance' },
            ].map(s => (
              <div key={s.val} className="rounded-2xl p-5 text-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <p className="text-xl font-bold text-white mb-0.5">{s.val}</p>
                <p className="text-[#F97316] text-sm font-semibold">{s.sub}</p>
                <p className="text-gray-500 text-xs mt-1">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 py-16 space-y-20">

        <section>
          <div className="mb-8">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Vue d&apos;ensemble</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Les principaux types de panneaux solaires</h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                  <th className="text-left px-5 py-4 text-white/80 font-semibold text-xs uppercase tracking-wider">Type</th>
                  <th className="text-center px-5 py-4 text-white/80 font-semibold text-xs uppercase tracking-wider">Rendement</th>
                  <th className="text-center px-5 py-4 text-white/80 font-semibold text-xs uppercase tracking-wider">Coûts</th>
                  <th className="text-left px-5 py-4 text-white/80 font-semibold text-xs uppercase tracking-wider hidden sm:table-cell">Idéal pour</th>
                </tr>
              </thead>
              <tbody>
                {tableau.map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-4 font-bold text-gray-900 text-sm">{row.type}</td>
                    <td className="px-5 py-4 text-center font-bold text-[#F97316] text-sm">{row.rendement}</td>
                    <td className="px-5 py-4 text-center text-gray-700 text-sm">{row.couts}</td>
                    <td className="px-5 py-4 text-gray-600 text-sm hidden sm:table-cell">{row.ideal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <div className="mb-8">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Aide à la décision</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Quel type me convient ?</h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm max-w-2xl">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                  <th className="text-left px-5 py-4 text-white/80 font-semibold text-xs uppercase tracking-wider">Situation</th>
                  <th className="text-right px-5 py-4 text-white/80 font-semibold text-xs uppercase tracking-wider">Recommandation</th>
                </tr>
              </thead>
              <tbody>
                {situationsTableau.map((row, i) => (
                  <tr key={row.situation} className={row.highlight ? 'bg-orange-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className={`px-5 py-3.5 text-sm ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-700'}`}>{row.situation}</td>
                    <td className={`px-5 py-3.5 text-right font-bold text-sm ${row.highlight ? 'text-[#F97316]' : 'text-gray-900'}`}>{row.recommandation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <Zap className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Quel type convient à votre toit ?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Un installateur certifié de votre région analyse votre toit et recommande le type de module optimal pour votre situation — gratuitement et sans engagement.
          </p>
          <Link href="/fr/demande" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            Demander une offre gratuite <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Questions fréquentes</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Questions fréquemment posées</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-900 text-sm select-none list-none">
                  {faq.question}
                  <span className="ml-4 text-[#F97316] flex-shrink-0 text-lg group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-50">
                  <p className="pt-4">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
      <FaqSchema faqs={faqs} />
    </main>
  );
}
