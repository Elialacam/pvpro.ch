import Link from 'next/link';
import { ChevronRight, CheckCircle, ArrowRight, Star, BarChart2, Users } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Comparateur Photovoltaïque Suisse 2026 – Comparer les fournisseurs | PVPro.ch',
  description: "Comparez gratuitement les fournisseurs photovoltaïques en Suisse. PVPro.ch est le principal comparateur suisse pour les installations solaires – jusqu'à 3 offres d'installateurs certifiés.",
  alternates: {
    canonical: 'https://www.pvpro.ch/fr/comparateur-photovoltaique-suisse',
    languages: {
      'de-CH': 'https://www.pvpro.ch/vergleichsportal-photovoltaik-schweiz',
      'fr-CH': 'https://www.pvpro.ch/fr/comparateur-photovoltaique-suisse',
      'en': 'https://www.pvpro.ch/en/solar-comparison-portal-switzerland',
      'it-CH': 'https://www.pvpro.ch/it/comparatore-fotovoltaico-svizzera',
      'x-default': 'https://www.pvpro.ch/vergleichsportal-photovoltaik-schweiz',
    },
  },
  openGraph: {
    title: 'Comparateur Photovoltaïque Suisse 2026 – Comparer les fournisseurs',
    description: "Comparez gratuitement les fournisseurs photovoltaïques en Suisse. Jusqu'à 3 offres d'installateurs certifiés.",
    url: 'https://www.pvpro.ch/fr/comparateur-photovoltaique-suisse',
    type: 'website',
    locale: 'fr_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: 'PVPro.ch est-il vraiment gratuit ?',
    answer: "Oui, pour les propriétaires le service est entièrement gratuit et sans engagement. Nous nous finançons via une commission versée par les installateurs — pas par vous.",
  },
  {
    question: "Combien d'offres vais-je recevoir ?",
    answer: "Vous recevez jusqu'à 3 offres personnalisées d'installateurs locaux certifiés. Vous avez ainsi immédiatement une base de comparaison.",
  },
  {
    question: "Qui sont les installateurs du réseau PVPro ?",
    answer: "Nous collaborons avec plus de 500 entreprises suisses certifiées. Chaque installateur est vérifié avant d'être admis dans notre réseau.",
  },
  {
    question: "Puis-je utiliser PVPro.ch pour un immeuble locatif ?",
    answer: "Oui, nous transmettons des offres pour les maisons individuelles, les immeubles locatifs et les bâtiments commerciaux dans toute la Suisse.",
  },
  {
    question: "Combien de temps faut-il pour recevoir des offres ?",
    answer: "Dans la plupart des cas, vous recevez les premières offres dans les 24 à 48 heures suivant votre demande.",
  },
  {
    question: "Dois-je m'engager à quelque chose ?",
    answer: "Non. Vous pouvez comparer les offres et décider librement — sans aucun engagement.",
  },
];

const reasons = [
  {
    title: 'Transparence des prix',
    text: "Vous voyez immédiatement ce que coûte réellement une installation dans votre région",
  },
  {
    title: 'Comparaison de qualité',
    text: "Uniquement des installateurs certifiés avec une expérience reconnue",
  },
  {
    title: 'Gain de temps',
    text: "Plutôt que de chercher vous-même, vous obtenez tout en un coup d'œil",
  },
];

const criteria = [
  { title: 'Certification', text: "Vérifiez que l'entreprise possède des qualifications reconnues (ex. electrosuisse, Swissolar)" },
  { title: 'Expérience locale', text: "Un installateur de votre région connaît les subventions cantonales et les procédures d'autorisation" },
  { title: 'Références', text: "Demandez des projets réalisés dans votre commune" },
  { title: 'Garanties', text: "Les prestataires sérieux offrent des garanties claires sur les modules, l'onduleur et la pose" },
  { title: 'Prix transparents', text: "Pas de frais cachés — tout est écrit dans l'offre" },
];

const tableRows = [
  { label: 'Coût pour le client', pvpro: 'Gratuit', others: 'Souvent des frais cachés' },
  { label: 'Installateurs vérifiés', pvpro: 'Oui, certifiés', others: 'Pas toujours' },
  { label: 'Entreprises locales', pvpro: 'Oui, de votre région', others: 'Souvent non locales' },
  { label: "Pas d'appels publicitaires", pvpro: 'Garanti', others: 'Non garanti' },
  { label: 'Plateforme suisse', pvpro: 'Oui', others: 'Souvent étrangère' },
];

export default function ComparateurPhotovoltaiqueSuissePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/fr" className="hover:text-white/70 transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Comparateur photovoltaïque</span>
          </nav>

          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <BarChart2 className="w-3.5 h-3.5" /> Installateurs &amp; Comparaison
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Comparateur d&apos;installations photovoltaïques en Suisse
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Vous souhaitez installer une installation solaire en Suisse ? Lequel des prestataires est le bon ? Les prix varient fortement, la qualité encore davantage. PVPro.ch est le comparateur suisse indépendant qui met en relation les propriétaires avec des{' '}
              <Link href="/fr/demande" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">installateurs locaux certifiés</Link>{' '}
              — gratuitement et sans engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: 'Gratuit & sans engagement', sub: 'aucun risque', note: 'entièrement gratuit pour les propriétaires' },
              { val: "Jusqu'à 3 offres", sub: "d'installateurs certifiés", note: 'personnalisées pour votre toit' },
              { val: '500+ partenaires', sub: 'dans toute la Suisse', note: 'entreprises certifiées dans votre région' },
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

        {/* ── Pourquoi comparer ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Pourquoi comparer ?</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Pourquoi faire une comparaison de prestataires ?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              De nombreux propriétaires ne contactent qu&apos;un seul installateur et signent la première offre. C&apos;est souvent une erreur coûteuse. Pour la même installation, les prix peuvent varier entre différents installateurs de plusieurs milliers de francs.
            </p>
            <p className="text-gray-700 font-semibold mb-4">Une comparaison vaut la peine pour trois raisons :</p>
            <ul className="space-y-4">
              {reasons.map(r => (
                <li key={r.title} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">
                    <strong className="text-gray-900">{r.title} :</strong> {r.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden">
            <img
              src="/images/asset-beratung-indoor-2.webp"
              alt="Comparaison installateurs photovoltaïques Suisse"
              className="w-full h-72 object-cover rounded-3xl"
            />
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mt-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Le saviez-vous ?</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Ceux qui comparent au moins 3 offres économisent en moyenne 15 à 25 % par rapport à la première offre — soit jusqu&apos;à 5 000 CHF pour une installation typique.
              </p>
            </div>
          </div>
        </section>

        {/* ── Comment ça marche ── */}
        <section>
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">C&apos;est simple</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Comment fonctionne PVPro.ch comme comparateur ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              PVPro.ch n&apos;est pas un simple annuaire. Nous vérifions chaque installateur de notre réseau et ne transmettons que des entreprises certifiées de votre région.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: '1', title: 'Remplir le formulaire', text: 'En 2 minutes, vous décrivez votre toit, votre consommation électrique et vos souhaits.' },
              { n: '2', title: 'Recevoir les offres', text: "Jusqu'à 3 installateurs locaux vous envoient des offres personnalisées directement." },
              { n: '3', title: 'Comparer et choisir', text: 'Vous comparez les prix, les composants et les références — et décidez librement.' },
            ].map(step => (
              <div key={step.n} className="rounded-2xl p-8 text-center" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-5"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                  {step.n}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">Étape {step.n} — {step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Quels installateurs ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-3xl overflow-hidden">
            <img
              src="/images/asset-installateur-dach-2.webp"
              alt="Installateur photovoltaïque certifié Suisse"
              className="w-full h-72 object-cover rounded-3xl object-top"
            />
          </div>
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Critères de qualité</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Quels installateurs sont recommandables en Suisse ?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Il existe des centaines d&apos;installateurs photovoltaïques en Suisse. La qualité varie fortement. À quoi devez-vous faire attention ?
            </p>
            <ul className="space-y-4 mb-6">
              {criteria.map(c => (
                <li key={c.title} className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-sm leading-relaxed">
                    <strong className="text-gray-900">{c.title} :</strong> {c.text}
                  </span>
                </li>
              ))}
            </ul>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <p className="text-orange-800 text-sm leading-relaxed">
                <strong>PVPro.ch vérifie tous ces critères pour vous</strong> et ne transmet que des entreprises qui respectent nos standards.
              </p>
            </div>
          </div>
        </section>

        {/* ── Tableau comparatif ── */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">La différence</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Qu&apos;est-ce qui distingue PVPro.ch des autres comparateurs ?
            </h2>
          </div>
          <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                  <th className="text-left px-6 py-4 text-white/60 font-semibold w-2/5"></th>
                  <th className="px-6 py-4 text-white font-bold text-center">PVPro.ch</th>
                  <th className="px-6 py-4 text-white/60 font-semibold text-center">Autres portails</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-gray-700 font-medium">{row.label}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center gap-1.5 text-green-700 font-semibold">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {row.pvpro}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-400">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <Users className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Comparer gratuitement les prestataires
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Remplissez notre formulaire en 2 minutes et recevez jusqu&apos;à 3 offres d&apos;{' '}
            <Link href="/fr/demande" className="text-[#F97316] hover:underline font-medium">installateurs certifiés</Link>{' '}
            de votre région — gratuitement et sans engagement.
          </p>
          <Link
            href="/fr/demande"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
          >
            Demander une offre gratuite <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* ── FAQ ── */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Questions fréquentes</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Questions fréquemment posées
            </h2>
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
            <p className="text-gray-500 text-sm mb-4">Plus d&apos;informations sur les panneaux solaires :</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/fr/cout-installation-solaire" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Coût installation solaire
              </Link>
              <Link href="/fr/subventions-solaires" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Subventions &amp; RUP
              </Link>
              <Link href="/fr/solaire-maison-individuelle" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Maison individuelle
              </Link>
              <Link href="/fr/solaire-immeuble" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Immeuble locatif
              </Link>
              <Link href="/fr/installer-panneau-solaire-suisse" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Installateurs dans votre région
              </Link>
              <Link href="/fr/demander-offre-panneau-solaire" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Demander et comparer des offres
              </Link>
              <Link href="/fr/solution-complete-photovoltaique-suisse" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Prestataires de solutions complètes
              </Link>
              <Link href="/fr/subventions-solaires-canton-zurich" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Subventions Canton de Zurich
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
