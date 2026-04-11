import Link from 'next/link';
import { ChevronRight, ArrowRight, Zap, CheckCircle, XCircle } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Comparaison types panneaux solaires Suisse 2026 – Lequel me convient ? | PVPro.ch',
  description: "Comparaison des différents types d'installations solaires en Suisse : monocristallin, polycristallin, couche mince, bifacial. Quelles sont les différences et lequel vaut la peine ?",
  alternates: {
    canonical: 'https://www.pvpro.ch/fr/comparaison-types-panneaux-solaires',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solaranlagen-typen-vergleich',
      'fr-CH': 'https://www.pvpro.ch/fr/comparaison-types-panneaux-solaires',
      'en': 'https://www.pvpro.ch/en/solar-panel-types-comparison',
      'it-CH': 'https://www.pvpro.ch/it/confronto-tipi-impianti-solari',
      'x-default': 'https://www.pvpro.ch/solaranlagen-typen-vergleich',
    },
  },
  openGraph: {
    title: 'Comparaison types panneaux solaires Suisse 2026 – Lequel me convient ?',
    description: "Monocristallin, polycristallin, couche mince, bifacial — tous les types en comparaison directe pour la Suisse.",
    url: 'https://www.pvpro.ch/fr/comparaison-types-panneaux-solaires',
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

type ModuleType = {
  name: string;
  badge: string;
  badgeColor: string;
  intro: string;
  avantages: string[];
  inconvenients: string[];
  fazit: string;
};

const modulesTypes: ModuleType[] = [
  {
    name: 'Modules monocristallins — le standard en Suisse',
    badge: 'Recommandé pour la Suisse',
    badgeColor: 'bg-orange-100 text-orange-700',
    intro: "Les modules monocristallins sont aujourd'hui de loin le choix le plus fréquent pour les maisons individuelles suisses. Ils sont composés d'un seul cristal de silicium et présentent le rendement le plus élevé de toutes les technologies courantes.",
    avantages: [
      'Rendement le plus élevé (18–22%)',
      'Meilleure performance par temps couvert et lumière diffuse',
      'Compact — idéal pour les petites surfaces de toit',
      'Longue durée de vie et haute fiabilité',
      'Esthétique attrayante (uniformément noir)',
    ],
    inconvenients: [
      'Coût plus élevé que les modules polycristallins',
      'Légère réduction de performance à très haute température',
    ],
    fazit: "Pour la plupart des ménages suisses, le meilleur choix — surtout dans le Plateau souvent nuageux.",
  },
  {
    name: "Modules polycristallins — l'option économique",
    badge: 'Budget & grandes surfaces',
    badgeColor: 'bg-blue-100 text-blue-700',
    intro: "Les modules polycristallins sont composés de plusieurs cristaux de silicium et ont un rendement légèrement inférieur aux monocristallins. Ils sont de plus en plus remplacés par des alternatives plus performantes.",
    avantages: [
      "Moins chers à l'achat",
      'Éprouvés et fiables',
      'Bien adaptés aux grandes surfaces de toit',
    ],
    inconvenients: [
      'Rendement plus faible (15–17%)',
      'Plus grande surface nécessaire pour la même puissance',
      'Reconnaissable à leur aspect bleu chatoyant',
    ],
    fazit: "Intéressant pour les grandes surfaces de toit avec un petit budget. De moins en moins répandu en Suisse.",
  },
  {
    name: 'Modules à couche mince — pour les applications spéciales',
    badge: 'Applications spéciales',
    badgeColor: 'bg-gray-100 text-gray-700',
    intro: "Les modules à couche mince sont déposés sur un support mince et sont plus flexibles que les modules cristallins. Ils conviennent particulièrement aux toits plats et aux applications non conventionnelles.",
    avantages: [
      'Légers et flexibles',
      'Bon marché à la fabrication',
      'Fonctionnent bien à haute température',
    ],
    inconvenients: [
      'Rendement le plus faible (10–13%)',
      'Nécessitent nettement plus de surface',
      'Durée de vie plus courte que les modules cristallins',
    ],
    fazit: "Peu recommandable pour les installations standard en Suisse. Intéressant pour des applications spéciales comme l'intégration en façade.",
  },
  {
    name: 'Modules bifaciaux — plus de courant grâce à la face arrière',
    badge: 'Neige & toits plats',
    badgeColor: 'bg-green-100 text-green-700',
    intro: "Les modules bifaciaux produisent de l'électricité des deux côtés — à l'avant par la lumière directe du soleil, à l'arrière par la lumière réfléchie. Avec de la neige ou des revêtements de toit clairs, le surplus de production est particulièrement élevé.",
    avantages: [
      'Rendement le plus élevé dans les bonnes conditions',
      'Particulièrement efficace avec la neige (réfléchit la lumière)',
      'Idéal pour les toits plats avec espace sous les modules',
    ],
    inconvenients: [
      'Plus cher que les modules monocristallins',
      'Le surplus de production dépend fortement de la configuration',
      'Pas toujours utile sur les toits en pente normaux',
    ],
    fazit: "Intéressant pour les régions enneigées et les toits plats. Pour les toits en pente normaux en Suisse, généralement pas d'avantage significatif.",
  },
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

        {/* ── Tableau d'aperçu ── */}
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

        {/* ── Les quatre types en détail ── */}
        <section>
          <div className="mb-8">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Comparaison détaillée</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Les quatre types en détail</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modulesTypes.map((m, i) => (
              <div key={i} className="rounded-3xl p-8 border border-gray-200 bg-white shadow-sm">
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${m.badgeColor}`}>{m.badge}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{m.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {i === 2
                    ? <>Les modules à couche mince sont déposés sur un support mince et sont plus flexibles que les modules cristallins. Ils conviennent particulièrement aux{' '}
                      <Link href="/fr/solaire-immeuble" className="text-[#F97316] hover:underline font-medium">toits plats</Link>{' '}
                      et aux applications non conventionnelles.</>
                    : i === 3
                    ? <>Les modules bifaciaux produisent de l&apos;électricité des deux côtés — à l&apos;avant par la lumière directe du soleil, à l&apos;arrière par la lumière réfléchie. Avec de la neige ou des revêtements de toit clairs, le surplus de production est particulièrement élevé. Idéal pour les{' '}
                      <Link href="/fr/solaire-immeuble" className="text-[#F97316] hover:underline font-medium">toits plats</Link>.</>
                    : m.intro}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div>
                    <p className="text-xs font-bold text-green-700 uppercase tracking-widest mb-2">Avantages</p>
                    <ul className="space-y-1.5">
                      {m.avantages.map((v, j) => (
                        <li key={j} className="flex items-start gap-1.5 text-sm text-gray-700">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                          {v}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-red-700 uppercase tracking-widest mb-2">Inconvénients</p>
                    <ul className="space-y-1.5">
                      {m.inconvenients.map((n, j) => (
                        <li key={j} className="flex items-start gap-1.5 text-sm text-gray-700">
                          <XCircle className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                          {n}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-orange-50 border border-orange-100 rounded-xl px-4 py-3">
                  <p className="text-sm text-gray-700"><span className="font-bold text-orange-700">Conclusion : </span>{m.fazit}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Aide à la décision ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Aide à la décision</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Quel type me convient ?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Le choix dépend de votre situation concrète. Pour une{' '}
              <Link href="/fr/solaire-maison-individuelle" className="text-[#F97316] hover:underline font-medium">maison individuelle</Link>{' '}
              en Suisse, le monocristallin est presque toujours le meilleur choix — surtout dans le{' '}
              <Link href="/fr/photovoltaique-climat-suisse" className="text-[#F97316] hover:underline font-medium">climat suisse</Link>{' '}
              avec beaucoup de lumière diffuse.
            </p>
            <p className="text-gray-600 leading-relaxed">
              En pratique, un{' '}
              <Link href="/fr/installer-panneau-solaire-suisse" className="text-[#F97316] hover:underline font-medium">installateur certifié</Link>{' '}
              recommande le type de module adapté après inspection de votre toit. PVPro.ch met en relation avec des{' '}
              <Link href="/fr/comparateur-photovoltaique-suisse" className="text-[#F97316] hover:underline font-medium">fournisseurs</Link>{' '}
              qui connaissent toutes les technologies et conseillent de manière neutre.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
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

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <Zap className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Quel type convient à votre toit ?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Un installateur certifié de votre région analyse votre toit et recommande le type de module optimal pour votre situation — gratuitement et sans engagement.
          </p>
          <Link href="/fr/demander-offre-panneau-solaire" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            Demander une offre gratuite <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-gray-500 text-sm mt-5">
            D&apos;abord{' '}
            <Link href="/fr/demander-offre-panneau-solaire" className="text-[#F97316] hover:underline font-medium">comparer des offres</Link>?{' '}
            Plus d&apos;infos sur les{' '}
            <Link href="/fr/cout-installation-solaire" className="text-[#F97316] hover:underline font-medium">coûts d&apos;une installation solaire</Link>.
          </p>
        </section>

        {/* ── FAQ ── */}
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
          <div className="text-center mt-10">
            <p className="text-gray-500 text-sm mb-4">Plus d&apos;informations :</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/fr/cout-installation-solaire" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Coûts installation solaire
              </Link>
              <Link href="/fr/photovoltaique-climat-suisse" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Photovoltaïque et climat suisse
              </Link>
              <Link href="/fr/solaire-maison-individuelle" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Solaire maison individuelle
              </Link>
              <Link href="/fr/solaire-immeuble" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Solaire immeuble
              </Link>
              <Link href="/fr/demander-offre-panneau-solaire" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                Demander une offre <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
      <FaqSchema faqs={faqs} />
    </main>
  );
}
