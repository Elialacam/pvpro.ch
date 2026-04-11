import Link from 'next/link';
import { ChevronRight, ArrowRight, Shield, Wrench, CheckCircle, AlertCircle } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: "Entretien photovoltaïque coûts Suisse 2026 – Combien coûte la maintenance ? | PVPro.ch",
  description: "Combien coûte l'entretien d'une installation photovoltaïque en Suisse ? Nettoyage, inspection, réparation — tous les coûts en un coup d'œil. Informez-vous sur PVPro.ch.",
  alternates: {
    canonical: 'https://www.pvpro.ch/fr/entretien-photovoltaique-couts',
    languages: {
      'de-CH': 'https://www.pvpro.ch/photovoltaik-wartung-kosten',
      'fr-CH': 'https://www.pvpro.ch/fr/entretien-photovoltaique-couts',
      'en': 'https://www.pvpro.ch/en/solar-panel-maintenance-costs',
      'it-CH': 'https://www.pvpro.ch/it/manutenzione-fotovoltaico-costi',
      'x-default': 'https://www.pvpro.ch/photovoltaik-wartung-kosten',
    },
  },
  openGraph: {
    title: "Entretien photovoltaïque coûts Suisse 2026 – Combien coûte la maintenance ?",
    description: "Nettoyage, inspection, réparation — tous les coûts d'entretien pour le photovoltaïque en Suisse en un coup d'œil.",
    url: 'https://www.pvpro.ch/fr/entretien-photovoltaique-couts',
    type: 'website',
    locale: 'fr_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: "Dois-je nettoyer régulièrement mon installation solaire ?",
    answer: "En Suisse, la pluie suffit dans la plupart des cas. En cas de forte fiente d'oiseaux ou dans les régions poussiéreuses, il est recommandé de procéder à un nettoyage manuel une fois par an.",
  },
  {
    question: "Combien coûte un contrat d'entretien pour une installation solaire ?",
    answer: "De nombreux installateurs proposent des contrats d'entretien pour 150–300 CHF par an, qui comprennent une inspection annuelle et de petites réparations.",
  },
  {
    question: "Quelle est la durée de vie d'un onduleur ?",
    answer: "Les onduleurs durent généralement 10 à 15 ans. Un remplacement coûte entre 1'500 et 3'000 CHF selon le modèle.",
  },
  {
    question: "Perds-je la garantie si je fais l'entretien moi-même ?",
    answer: "L'inspection visuelle et le nettoyage des modules peuvent être effectués sans perdre la garantie. Les travaux électriques doivent cependant être réalisés par une entreprise spécialisée certifiée.",
  },
  {
    question: "Comment savoir si mon installation ne produit pas de manière optimale ?",
    answer: "Via le monitoring numérique de l'onduleur, vous pouvez suivre la production quotidienne. Si la production s'écarte significativement de l'année précédente sans raison apparente, vous devriez demander une inspection.",
  },
  {
    question: "Qui peut assurer l'entretien de mon installation solaire ?",
    answer: "Les installateurs suisses certifiés proposent des services d'entretien. PVPro.ch met également en relation avec des partenaires de service pour les installations existantes.",
  },
];

const prestations = [
  { title: "Inspection visuelle des modules", text: "Une fois par an, les modules doivent être contrôlés pour détecter toute saleté, fissure, décoloration ou dommage. Les fientes d'oiseaux, les feuilles et la mousse peuvent réduire notablement la production." },
  { title: "Nettoyage des modules", text: "En Suisse, la pluie suffit généralement à maintenir les modules propres. Dans les régions poussiéreuses ou en cas de forte présence d'oiseaux, un nettoyage manuel peut s'avérer utile." },
  { title: "Inspection de l'onduleur", text: "L'onduleur est au cœur de l'installation. Il doit être contrôlé annuellement pour détecter les erreurs, la surchauffe et le bon fonctionnement." },
  { title: "Contrôle des connexions électriques", text: "Les connexions de câbles, les connecteurs et les raccords peuvent se desserrer avec le temps. Un contrôle régulier prévient les pannes et les risques d'incendie." },
  { title: "Monitoring de la production", text: "Les installations modernes disposent d'un monitoring numérique. Qui suit régulièrement les données de production détecte immédiatement les écarts." },
  { title: "Contrôle du toit", text: "Lors de l'inspection annuelle, le toit autour du montage doit également être contrôlé — pour l'étanchéité et la stabilité de la sous-construction." },
];

const couts = [
  { prestation: "Inspection annuelle (sans nettoyage)", cout: "100–200 CHF" },
  { prestation: "Nettoyage des modules", cout: "100–300 CHF selon la taille" },
  { prestation: "Remplacement onduleur (après 10–15 ans)", cout: "1'500–3'000 CHF" },
  { prestation: "Réparation petits dommages", cout: "200–500 CHF" },
  { prestation: "Coûts annuels totaux (moyenne)", cout: "150–300 CHF/an", highlight: true },
];

const frequences = [
  { mesure: "Contrôle visuel", frequence: "2x par an (recommandé)" },
  { mesure: "Inspection professionnelle", frequence: "1x par an" },
  { mesure: "Nettoyage des modules", frequence: "Selon besoins, min. 1x par an" },
  { mesure: "Contrôle onduleur", frequence: "1x par an" },
  { mesure: "Contrôle électrique", frequence: "Tous les 2–3 ans" },
  { mesure: "Remplacement onduleur", frequence: "Après 10–15 ans" },
];

const garanties = [
  { komp: 'Modules', text: '25–30 ans de garantie de performance (min. 80% de la puissance nominale)' },
  { komp: 'Onduleur', text: '5–12 ans de garantie fabricant, prolongeable' },
  { komp: 'Montage', text: "Dépend de l'installateur, typiquement 5–10 ans" },
];

export default function EntretienPhotovoltaiqueCoutsPage() {
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
            <span className="text-white/70">Entretien &amp; Coûts</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Wrench className="w-3.5 h-3.5" /> Entretien &amp; Exploitation
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Entretien d&apos;une installation photovoltaïque en Suisse — Coûts et déroulement
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Une installation photovoltaïque nécessite peu d&apos;entretien — mais pas aucun. Celui qui contrôle et entretient régulièrement son installation garantit la pleine puissance pendant toute la durée de vie de 25 à 30 ans. Cette page explique ce que comprend l&apos;entretien, ce qu&apos;il coûte et à quelle fréquence l&apos;installation doit être contrôlée.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: '150–300 CHF', sub: "coûts d'entretien typiques par an", note: "incl. inspection et petit nettoyage" },
              { val: '1x par an', sub: "inspection recommandée", note: "professionnelle par une entreprise spécialisée" },
              { val: '25–30 ans', sub: "durée de vie avec bon entretien", note: "avec garantie de performance des fabricants" },
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

        {/* ── Pourquoi l'entretien est-il important ? ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Pourquoi ça vaut la peine</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Pourquoi l&apos;entretien est-il important ?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Une installation négligée produit moins d&apos;électricité — souvent sans que le propriétaire s&apos;en aperçoive. Des modules encrassés, des connexions desserrées ou un onduleur vieillissant peuvent réduire la production de 10–20%.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Un entretien régulier protège votre investissement et garantit que l&apos;installation fonctionne toujours à un niveau optimal — pendant toute la durée de vie de 25 à 30 ans.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <AlertCircle className="w-5 h-5" />, label: 'Installation non entretenue', val: '−10–20% de rendement', color: 'bg-red-50 border-red-200 text-red-700' },
              { icon: <CheckCircle className="w-5 h-5" />, label: 'Installation entretenue', val: '100% de performance', color: 'bg-green-50 border-green-200 text-green-700' },
              { icon: <Shield className="w-5 h-5" />, label: 'Protection garantie', val: '25–30 ans', color: 'bg-blue-50 border-blue-200 text-blue-700' },
              { icon: <Wrench className="w-5 h-5" />, label: "Coûts d'entretien", val: 'dès 150 CHF/an', color: 'bg-orange-50 border-orange-200 text-orange-700' },
            ].map(item => (
              <div key={item.label} className={`rounded-2xl p-5 border ${item.color} flex flex-col items-center text-center gap-2`}>
                {item.icon}
                <p className="text-xs font-semibold uppercase tracking-wide">{item.label}</p>
                <p className="font-bold text-sm">{item.val}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Que comprend l'entretien ? ── */}
        <section>
          <div className="mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Vue d&apos;ensemble des prestations</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Que comprend l&apos;entretien d&apos;une installation solaire ?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {prestations.map((p, i) => (
              <div key={i} className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                  <Wrench className="w-5 h-5 text-[#F97316]" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Coûts & Fréquences ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Aperçu des coûts</p>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">Combien coûte l&apos;entretien en Suisse ?</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Sur toute la durée de vie de 25 ans, cela représente des coûts d&apos;entretien d&apos;environ 4&apos;000–7&apos;500 CHF — un faible montant par rapport à l&apos;investissement total.
            </p>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                    <th className="text-left px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Prestation</th>
                    <th className="text-right px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Coût</th>
                  </tr>
                </thead>
                <tbody>
                  {couts.map((row, i) => (
                    <tr key={row.prestation} className={row.highlight ? 'bg-orange-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className={`px-5 py-3.5 text-sm ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-700'}`}>{row.prestation}</td>
                      <td className={`px-5 py-3.5 text-right font-bold text-sm ${row.highlight ? 'text-[#F97316]' : 'text-gray-900'}`}>{row.cout}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Intervalles d&apos;entretien</p>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">À quelle fréquence l&apos;installation doit-elle être entretenue ?</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Pour une{' '}
              <Link href="/fr/solution-complete-photovoltaique-suisse" className="text-[#F97316] hover:underline font-medium">solution complète</Link>{' '}
              avec batterie et pompe à chaleur, les mêmes intervalles s&apos;appliquent — l&apos;installateur se charge de la coordination.
            </p>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                    <th className="text-left px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Mesure</th>
                    <th className="text-right px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Fréquence</th>
                  </tr>
                </thead>
                <tbody>
                  {frequences.map((row, i) => (
                    <tr key={row.mesure} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-5 py-3.5 text-gray-700 text-sm">{row.mesure}</td>
                      <td className="px-5 py-3.5 text-right font-bold text-gray-900 text-sm">{row.frequence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Soi-même & Garanties ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="rounded-3xl p-8" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Travaux personnels</p>
            <h2 className="text-xl font-bold text-gray-900 mb-5">Puis-je faire l&apos;entretien moi-même ?</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              L&apos;inspection visuelle et le nettoyage simple peuvent être réalisés par le propriétaire lui-même. Pour tout ce qui est électrique — connexions, onduleur, raccords — il faut obligatoirement faire appel à une entreprise spécialisée certifiée.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
              <p className="text-orange-800 text-sm">
                <strong className="text-orange-600">Important :</strong> Les travaux sur le toit doivent toujours être réalisés par des professionnels pour des raisons de sécurité.
              </p>
            </div>
          </div>
          <div className="rounded-3xl p-8" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
            <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Garanties</p>
            <h2 className="text-xl font-bold text-white mb-5">
              Quelles{' '}
              <Link href="/fr/cout-installation-solaire" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">garanties</Link>{' '}
              existent sur une installation solaire ?
            </h2>
            <ul className="space-y-4">
              {garanties.map((g, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold text-sm">{g.komp}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{g.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-gray-500 text-sm mt-5">
              Un bon{' '}
              <Link href="/fr/comparateur-photovoltaique-suisse" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">fournisseur</Link>{' '}
              vous explique toutes les garanties et les intervalles d&apos;entretien recommandés de manière transparente avant l&apos;achat.
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <Wrench className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Faire une demande d&apos;entretien maintenant</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Avez-vous une installation existante qui doit être entretenue ? Ou planifiez-vous une nouvelle installation et souhaitez-vous conclure un contrat d&apos;entretien ? Nous vous mettons en relation avec le bon partenaire.
          </p>
          <Link href="/fr/demander-offre-panneau-solaire" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            Demander une offre gratuite <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-gray-500 text-sm mt-5">
            D&apos;abord{' '}
            <Link href="/fr/demander-offre-panneau-solaire" className="text-[#F97316] hover:underline font-medium">comparer des offres</Link>?{' '}
            Ou tous les{' '}
            <Link href="/fr/comparateur-photovoltaique-suisse" className="text-[#F97316] hover:underline font-medium">fournisseurs en un coup d&apos;œil</Link>?
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
              <Link href="/fr/comment-ca-marche" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Comment fonctionne une installation solaire ?
              </Link>
              <Link href="/fr/solaire-avec-batterie" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Solaire avec batterie
              </Link>
              <Link href="/fr/solution-complete-photovoltaique-suisse" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Solution complète
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
