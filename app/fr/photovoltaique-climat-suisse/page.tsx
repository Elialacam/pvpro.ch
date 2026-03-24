import Link from 'next/link';
import { ChevronRight, ArrowRight, Sun, CheckCircle, FileText } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Photovoltaïque et climat suisse 2026 – Quelle installation choisir ? | PVPro.ch',
  description: "Quels panneaux photovoltaïques conviennent au climat suisse ? Neige, froid, brouillard — nous expliquons ce qui compte vraiment et quels modules fonctionnent le mieux en Suisse.",
  alternates: {
    canonical: 'https://www.pvpro.ch/fr/photovoltaique-climat-suisse',
    languages: {
      'de-CH': 'https://www.pvpro.ch/photovoltaik-schweizer-klima',
      'fr-CH': 'https://www.pvpro.ch/fr/photovoltaique-climat-suisse',
      'en': 'https://www.pvpro.ch/en/solar-panels-swiss-climate',
      'it-CH': 'https://www.pvpro.ch/it/fotovoltaico-clima-svizzero',
      'x-default': 'https://www.pvpro.ch/photovoltaik-schweizer-klima',
    },
  },
  openGraph: {
    title: "Photovoltaïque et climat suisse 2026 – Quelle installation choisir ?",
    description: "Neige, froid, brouillard — quels panneaux solaires fonctionnent le mieux en Suisse ?",
    url: 'https://www.pvpro.ch/fr/photovoltaique-climat-suisse',
    type: 'website',
    locale: 'fr_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: "Les panneaux solaires fonctionnent-ils par temps couvert ?",
    answer: "Oui. Les modules modernes produisent de l'électricité même sous un ciel couvert, bien qu'avec une puissance réduite. La lumière diffuse est partiellement convertie en énergie.",
  },
  {
    question: "Faut-il enlever la neige des panneaux ?",
    answer: "En général non. Sur les toits inclinés, la neige glisse rapidement. Le déneigement est généralement inutile et peut endommager les modules.",
  },
  {
    question: "Les panneaux produisent-ils de l'électricité en hiver ?",
    answer: "Oui, mais moins qu'en été. En hiver, les heures d'ensoleillement sont plus courtes et l'angle est plus faible. Une installation bien dimensionnée produit tout de même une contribution utile.",
  },
  {
    question: "Les modules solaires résistent-ils à l'hiver ?",
    answer: "Oui. Les modules de qualité sont conçus pour des températures jusqu'à -40°C et supportent des charges de neige de plusieurs centaines de kilogrammes par mètre carré.",
  },
  {
    question: "Quels cantons sont les plus adaptés au photovoltaïque ?",
    answer: "Le Tessin, avec plus de 2'100 heures d'ensoleillement, offre les meilleures conditions. Mais même dans le Plateau et en Suisse orientale, une installation solaire est rentable — le délai d'amortissement est un peu plus long, mais reste attractif.",
  },
];

const modules = [
  {
    title: 'Modules monocristallins',
    badge: 'Recommandé Plateau',
    text: "Le choix le plus courant pour la Suisse. Haut rendement même par lumière diffuse, robustes et durables. Idéaux pour le Plateau et les Préalpes.",
  },
  {
    title: 'Modules bifaciaux',
    badge: 'Idéaux sous la neige',
    text: "Produisent également de l'électricité par l'arrière — particulièrement utile lorsque la neige réfléchit la lumière. Intéressants pour les régions enneigées.",
  },
  {
    title: 'Faible coefficient de température',
    badge: 'Régions d\'altitude',
    text: "Plus le coefficient de température est faible, meilleures sont les performances par temps froid. Particulièrement pertinent pour les régions d'altitude.",
  },
];

const ensoleillement = [
  { region: 'Tessin (Lugano)', heures: "env. 2'157" },
  { region: 'Valais (Sion)', heures: "env. 2'000" },
  { region: 'Région du Léman', heures: "env. 1'800" },
  { region: 'Plateau (Zurich, Berne)', heures: "env. 1'500–1'600" },
  { region: 'Suisse orientale (St-Gall)', heures: "env. 1'500" },
];

export default function PhotovoltaiquClimatSuissePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/fr" className="hover:text-white/70 transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/fr/fonctionnement-solaire" className="hover:text-white/70 transition-colors">Énergie solaire</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Photovoltaïque et climat suisse</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Sun className="w-3.5 h-3.5" /> Technologie &amp; Climat
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Quels panneaux photovoltaïques conviennent au climat suisse ?
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              De nombreux propriétaires en Suisse se demandent : une installation solaire est-elle vraiment rentable quand il fait souvent nuageux, froid ou enneigé ? La réponse surprend : les panneaux photovoltaïques modernes fonctionnent même sous la neige, le brouillard et par grand froid — et sont parfois plus efficaces que dans des régions plus chaudes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: "1'300–2'100", sub: "Heures de soleil selon le canton", note: "selon l'altitude et la région" },
              { val: '+5–10%', sub: 'Rendement supplémentaire par froid', note: "grâce à l'effet de température" },
              { val: '25–30 ans', sub: 'Durée de vie en climat suisse', note: 'avec garantie fabricant' },
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

        {/* ── Ensoleillement ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Production par région</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Comment le climat suisse influence-t-il la production solaire ?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              La Suisse bénéficie d&apos;un climat très varié — du Plateau brumeux au Tessin ensoleillé. Ce que beaucoup ignorent : les modules photovoltaïques ont besoin de lumière, pas de chaleur. Et la lumière ne manque pas en Suisse, même en hiver.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Même sur le Plateau, avec ses 1&apos;500 heures d&apos;ensoleillement en moyenne, une installation de 10 kWc produit environ 9&apos;000–10&apos;000 kWh par an. Découvrez les{' '}
              <Link href="/fr/cout-installation-solaire" className="text-[#F97316] hover:underline font-medium">coûts d&apos;une installation solaire</Link>{' '}
              en Suisse.
            </p>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                    <th className="text-left px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Région</th>
                    <th className="text-right px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Heures/an</th>
                  </tr>
                </thead>
                <tbody>
                  {ensoleillement.map((row, i) => (
                    <tr key={row.region} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-5 py-3.5 text-gray-700">{row.region}</td>
                      <td className="px-5 py-3.5 text-right font-semibold text-gray-900">{row.heures}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Neige et froid ── */}
        <section>
          <div className="mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Fonctionnement hivernal</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Que se passe-t-il avec les panneaux sous la neige et par grand froid ?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Neige',
                badge: 'Pas de problème',
                text: "La neige sur les modules réduit brièvement la production. Sur les toits inclinés, elle glisse rapidement — les modules eux-mêmes dégagent légèrement de la chaleur. Après une chute de neige, l'installation est généralement à pleine puissance en quelques heures.",
              },
              {
                title: 'Froid',
                badge: 'Même avantageux',
                text: "Les modules photovoltaïques fonctionnent plus efficacement par temps froid qu'à la chaleur. À partir d'environ 25°C, le rendement baisse légèrement. Au printemps et en automne frais, les modules produisent souvent à pleine puissance.",
              },
              {
                title: 'Brouillard',
                badge: 'Réduit, pas nul',
                text: "Par temps brumeux, la production est réduite mais pas nulle. La lumière diffuse est partiellement convertie en électricité par les modules modernes. Les modules monocristallins de haute performance sont particulièrement efficaces dans ces conditions.",
              },
            ].map(c => (
              <div key={c.title} className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-2.5 py-1 rounded-full mb-4">{c.badge}</span>
                <h3 className="font-bold text-gray-900 text-base mb-3">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-orange-50 border border-orange-200 rounded-xl p-5">
            <p className="text-orange-800 text-sm leading-relaxed">
              <strong className="text-orange-600">Conseil :</strong> Lisez notre article détaillé sur les{' '}
              <Link href="/fr/blog/solaranlage-winter-schweiz" className="text-[#F97316] hover:underline font-medium">panneaux solaires en hiver</Link>{' '}
              avec des chiffres de production concrets et le bonus hivernal 2026.
            </p>
          </div>
        </section>

        {/* ── Quels modules ── */}
        <section>
          <div className="mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Choix des modules</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Quels modules sont particulièrement adaptés à la Suisse ?
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl">
              Tous les modules ne sont pas égaux face au climat suisse. Ces caractéristiques sont importantes :
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {modules.map(m => (
              <div key={m.title} className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-2.5 py-1 rounded-full mb-4">{m.badge}</span>
                <h3 className="font-bold text-gray-900 text-base mb-3">{m.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Tous les cantons ── */}
        <section className="rounded-3xl p-10 sm:p-12" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
          <div className="max-w-3xl">
            <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Le solaire partout en Suisse ?</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
              Le solaire est-il rentable dans tous les cantons suisses ?
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Oui — même dans les cantons moins ensoleillés, une installation solaire est rentable. Voici pourquoi :
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Les prix de l\'électricité en Suisse sont élevés',
                <>La subvention fédérale (<Link href="/fr/subventions-solaires" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">rétribution unique RU</Link>) s&apos;applique dans toute la Suisse</>,
                'Les modules modernes produisent efficacement même par lumière diffuse',
                'Le délai d\'amortissement est de 8 à 10 ans même sur le Plateau',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-5">
              <p className="text-orange-200 text-sm leading-relaxed">
                Au Tessin, une installation s&apos;amortit en seulement 4 à 6 ans — le meilleur résultat de toute la Suisse. Dans le canton de Zurich, le délai est de 7 à 9 ans.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <FileText className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Vérifiez maintenant si votre toit est adapté au solaire
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Quel que soit le canton et le climat — nos installateurs certifiés calculent le potentiel de votre toit et vous établissent une offre gratuite et personnalisée.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/fr/demande"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
              style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
            >
              Demander une offre gratuite <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-5">
            Comparer d&apos;abord les{' '}
            <Link href="/fr/demander-offre-panneau-solaire" className="text-[#F97316] hover:underline font-medium">offres solaires</Link>{' '}
            ou les{' '}
            <Link href="/fr/comparateur-photovoltaique-suisse" className="text-[#F97316] hover:underline font-medium">fournisseurs</Link> ?
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
              <Link href="/fr/subventions-solaires" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Subventions solaires
              </Link>
              <Link href="/fr/cout-installation-solaire" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Coûts installation
              </Link>
              <Link href="/fr/comparateur-photovoltaique-suisse" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Comparer les installateurs
              </Link>
              <Link href="/fr/demande" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
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
