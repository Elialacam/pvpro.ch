import Link from 'next/link';
import { ChevronRight, ArrowRight, Wrench, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: "Entretien photovoltaïque coûts Suisse 2026 – Combien coûte la maintenance ? | PVPro.ch",
  description: "Combien coûte l'entretien d'une installation photovoltaïque en Suisse ? Nettoyage, inspection, réparation — tous les coûts en un coup d'œil. Informez-vous sur PVPro.ch.",
  alternates: {
    canonical: 'https://pvpro.ch/fr/entretien-photovoltaique-couts',
    languages: {
      'de-CH': 'https://pvpro.ch/photovoltaik-wartung-kosten',
      'fr-CH': 'https://pvpro.ch/fr/entretien-photovoltaique-couts',
      'en': 'https://pvpro.ch/en/solar-panel-maintenance-costs',
      'it-CH': 'https://pvpro.ch/it/manutenzione-fotovoltaico-costi',
      'x-default': 'https://pvpro.ch/photovoltaik-wartung-kosten',
    },
  },
  openGraph: {
    title: "Entretien photovoltaïque coûts Suisse 2026 – Combien coûte la maintenance ?",
    description: "Nettoyage, inspection, réparation — tous les coûts d'entretien pour le photovoltaïque en Suisse en un coup d'œil.",
    url: 'https://pvpro.ch/fr/entretien-photovoltaique-couts',
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
              Un bon installateur vous explique toutes les garanties et les intervalles d&apos;entretien recommandés de manière transparente avant l&apos;achat.
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

        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <Wrench className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Faire une demande d&apos;entretien maintenant</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Avez-vous une installation existante qui doit être entretenue ? Ou planifiez-vous une nouvelle installation et souhaitez-vous conclure un contrat d&apos;entretien ? Nous vous mettons en relation avec le bon partenaire.
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
