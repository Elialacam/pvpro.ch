import Link from 'next/link';
import { ChevronRight, ArrowRight, Sun, CheckCircle, FileText } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: "Subventions solaires canton de Zurich 2026 – RU, obligation solaire & aides | PVPro.ch",
  description: "Quelles subventions pour les panneaux solaires dans le canton de Zurich 2026 ? RU, aides cantonales, obligation solaire et comment faire la demande. Informez-vous maintenant.",
  alternates: {
    canonical: 'https://www.pvpro.ch/fr/subventions-solaires-canton-zurich',
    languages: {
      'de-CH': 'https://www.pvpro.ch/foerderungen-kanton-zuerich',
      'fr-CH': 'https://www.pvpro.ch/fr/subventions-solaires-canton-zurich',
      'en': 'https://www.pvpro.ch/en/solar-subsidies-canton-zurich',
      'it-CH': 'https://www.pvpro.ch/it/incentivi-solari-cantone-zurigo',
      'x-default': 'https://www.pvpro.ch/foerderungen-kanton-zuerich',
    },
  },
  openGraph: {
    title: "Subventions solaires canton de Zurich 2026 – RU, obligation solaire & aides",
    description: "Toutes les subventions pour panneaux solaires dans le canton de Zurich 2026.",
    url: 'https://www.pvpro.ch/fr/subventions-solaires-canton-zurich',
    type: 'website',
    locale: 'fr_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: "Quel est le montant de la subvention pour une installation solaire dans le canton de Zurich ?",
    answer: "La subvention fédérale (RU) est d'environ 300 à 400 CHF par kWc. Pour une installation de 10 kWc, cela représente environ 3'500 CHF. Des programmes cantonaux et des déductions fiscales s'y ajoutent.",
  },
  {
    question: "L'obligation solaire s'applique-t-elle aussi aux maisons existantes dans le canton de Zurich ?",
    answer: "L'obligation solaire s'applique actuellement principalement aux nouvelles constructions et aux grandes rénovations de toiture. Les maisons existantes ne sont pas directement concernées, mais peuvent bénéficier volontairement de toutes les subventions.",
  },
  {
    question: "Qui s'occupe de la demande de subvention ?",
    answer: "En règle générale, l'installateur certifié s'occupe de l'inscription à la RU auprès de Pronovo. Il aide également pour les demandes de subventions cantonales.",
  },
  {
    question: "Puis-je déduire l'installation solaire fiscalement dans le canton de Zurich ?",
    answer: "Oui. Les investissements dans des installations solaires peuvent être déduits fiscalement en tant que mesures d'économie d'énergie — tant au niveau fédéral que dans le canton de Zurich.",
  },
  {
    question: "Combien de temps faut-il avant que la subvention soit versée ?",
    answer: "La RU est généralement versée quelques mois après l'inscription auprès de Pronovo. Les subventions cantonales peuvent prendre plus de temps selon le programme.",
  },
];

export default function SubventionsSolairesCantonZurichPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/fr" className="hover:text-white/70 transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/fr/subventions-solaires" className="hover:text-white/70 transition-colors">Subventions</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Canton de Zurich</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Sun className="w-3.5 h-3.5" /> Subventions &amp; Aides
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Subventions panneaux solaires canton de Zurich 2026
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Le canton de Zurich fait partie des cantons les plus actifs de Suisse dans le développement de l'énergie solaire. En plus de la subvention fédérale, les habitantes et habitants du canton de Zurich profitent de programmes cantonaux supplémentaires et d'une obligation légale de panneaux solaires pour les nouvelles constructions. Cette page explique clairement toutes les possibilités de subvention actuelles.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: '300–400 CHF/kWc', sub: 'Subvention fédérale RU', note: 'versement unique après installation' },
              { val: 'Obligation solaire', sub: 'depuis 2023 pour les nouvelles constructions', note: 'valable dans tout le canton de Zurich' },
              { val: '7–9 ans', sub: "Amortissement dans le canton de Zurich", note: 'grâce aux subventions et aux faibles coûts énergétiques' },
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

        {/* Subvention fédérale */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Niveau fédéral</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Subvention fédérale : la rétribution unique (RU)</h2>
            <p className="text-gray-600 leading-relaxed mb-6">La principale subvention pour les installations solaires en Suisse est la rétribution unique (RU) de la Confédération. Elle est valable dans le canton de Zurich et gérée par Pronovo.</p>
            <ul className="space-y-3 mb-6">
              {[
                "Montant : env. 300–400 CHF par kWc de puissance installée",
                "Versée une seule fois après l'installation",
                "Pas de demande annuelle nécessaire",
                "L'installateur s'occupe généralement de l'inscription pour vous",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <p className="text-orange-800 text-sm leading-relaxed">
                Pour une installation typique de 10 kWc, cela correspond à une subvention d'environ <strong>3'500 CHF</strong>.
              </p>
            </div>
          </div>
          <div>
            <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
              <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-5">RU — Exemple de calcul 10 kWc</p>
              <div className="space-y-4">
                {[
                  { label: "Coûts d'installation", value: "28'000 CHF" },
                  { label: 'RU Subvention fédérale', value: "− 3'500 CHF" },
                  { label: 'Déduction fiscale (env.)', value: "− 2'800 CHF" },
                  { label: 'Coûts effectifs', value: "env. 21'700 CHF", highlight: true },
                ].map(r => (
                  <div key={r.label} className={`flex justify-between items-center rounded-xl px-5 py-3 ${r.highlight ? 'bg-orange-500/20 border border-orange-500/30' : 'bg-white/5'}`}>
                    <span className={`text-sm font-medium ${r.highlight ? 'text-orange-300' : 'text-white/70'}`}>{r.label}</span>
                    <span className={`font-bold ${r.highlight ? 'text-orange-400' : 'text-white'}`}>{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Subventions cantonales */}
        <section>
          <div className="mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Niveau cantonal</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Subventions cantonales dans le canton de Zurich</h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl">En plus de la RU, les propriétaires zurichois peuvent bénéficier des mesures cantonales suivantes :</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Programme d'encouragement énergétique", text: "Contributions pour les installations photovoltaïques combinées avec des pompes à chaleur ou l'isolation des bâtiments.", badge: 'Canton de Zurich' },
              { title: 'Communautés électriques locales (CEL)', text: "Dès 2026, vous pouvez vendre l'électricité solaire directement au quartier — ce qui réduit les frais de réseau jusqu'à 40%.", badge: 'Dès 2026' },
              { title: 'Déductions fiscales', text: "Les investissements dans des installations solaires peuvent être déduits fiscalement au niveau fédéral et dans le canton de Zurich.", badge: 'Confédération & Canton' },
            ].map(c => (
              <div key={c.title} className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-2.5 py-1 rounded-full mb-4">{c.badge}</span>
                <h3 className="font-bold text-gray-900 text-base mb-3">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Obligation solaire */}
        <section className="rounded-3xl p-10 sm:p-12" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
          <div className="max-w-3xl">
            <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Obligation légale</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Obligation solaire dans le canton de Zurich</h2>
            <p className="text-gray-400 leading-relaxed mb-6">Depuis 2023, une obligation légale de panneaux solaires est en vigueur dans le canton de Zurich pour :</p>
            <ul className="space-y-3 mb-8">
              {["Les nouvelles constructions d'une certaine taille", "Les grandes rénovations de toiture"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-5">
              <p className="text-orange-200 text-sm leading-relaxed"><strong className="text-orange-400">Conseil :</strong> Ceux qui doivent de toute façon construire ou rénover devraient voir l'obligation solaire comme une opportunité — la subvention est entièrement garantie pour 2026.</p>
            </div>
          </div>
        </section>

        {/* Comment faire la demande */}
        <section>
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Étape par étape</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Comment demander la subvention dans le canton de Zurich ?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: '1', title: "Mandater l'installateur", text: "Un installateur certifié de votre région examine votre installation et clarifie toutes les possibilités de subvention." },
              { n: '2', title: "Installer l'installation", text: "Après l'installation, l'installateur inscrit l'installation auprès de Pronovo pour la RU." },
              { n: '3', title: 'Demander la subvention cantonale', text: "Pour les subventions cantonales, une demande séparée est déposée auprès de l'Office cantonal des déchets, de l'eau, de l'énergie et de l'air (AWEL)." },
              { n: '4', title: 'Versement', text: "La RU est généralement versée quelques mois après l'inscription. Les subventions cantonales suivent selon le programme." },
            ].map(step => (
              <div key={step.n} className="rounded-2xl p-7 text-center" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-base mx-auto mb-5" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>{step.n}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-3">Étape {step.n} — {step.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <FileText className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Profitez maintenant de toutes les subventions dans le canton de Zurich</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">Nos installateurs certifiés dans le canton de Zurich connaissent tous les programmes de subvention en cours et s'occupent de la demande — vous n'avez rien à faire.</p>
          <Link href="/fr/demande" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            Demander une offre gratuite <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* FAQ */}
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
