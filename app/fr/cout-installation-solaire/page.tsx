import { Metadata } from 'next';
import CtaAnfrage from '@/components/CtaAnfrage';
import Link from 'next/link';
import { CheckCircle, Sun, Home, Building2, Battery, Calculator, TrendingUp, PiggyBank } from 'lucide-react';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Coût installation solaire Suisse 2026 – Combien coûte une installation ? | PVPro',
  description: 'Combien coûte une installation solaire en Suisse ? Prix 2026 : 15\'000 – 35\'000 CHF pour une maison individuelle. Coûts par kWp, subventions et stockage. Comparez des offres gratuitement.',
  keywords: [
    'Coût installation solaire Suisse',
    'Prix panneau solaire Suisse',
    'Photovoltaïque coût Suisse',
    'Prix installation solaire maison',
    'PV coût par kWp',
    'Installation 10 kW coût',
    'Installation solaire avec stockage coût',
    'Subvention solaire Suisse',
  ],
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
  openGraph: {
    title: 'Coût installation solaire Suisse 2026 – Prix actuels & subventions',
    description: 'Prix actuels pour les installations solaires en Suisse. 15\'000 – 35\'000 CHF pour une maison individuelle après subvention. Toutes les infos sur les coûts, le prix kWp et le stockage.',
    url: 'https://www.pvpro.ch/fr/cout-installation-solaire',
    type: 'article',
    locale: 'fr_CH',
    siteName: 'PVPro',
  },
};

const costTable = [
  { size: '5 kWp', production: "4'500 – 5'000 kWh", price: "13'000 – 18'000 CHF", area: 'env. 30 – 35 m²', ideal: 'Petite maison' },
  { size: '8 kWp', production: "7'500 – 8'000 kWh", price: "18'000 – 25'000 CHF", area: 'env. 50 – 55 m²', ideal: 'Maison individuelle' },
  { size: '10 kWp', production: "9'000 – 10'000 kWh", price: "22'000 – 30'000 CHF", area: 'env. 62 – 68 m²', ideal: 'Grande MI / immeuble' },
];

const storageTable = [
  { size: '5 kWh', price: "4'000 – 6'000 CHF" },
  { size: '10 kWh', price: "7'000 – 10'000 CHF" },
];

const costFactors = [
  {
    icon: Building2,
    title: "Taille de l'installation",
    text: "Les grandes installations ont généralement un coût par kWp plus faible, car les coûts d'installation sont répartis sur une puissance plus importante.",
  },
  {
    icon: Home,
    title: 'Surface de toit',
    text: "Plus la surface de toit disponible est grande, plus l'installation peut être dimensionnée généreusement.",
  },
  {
    icon: Home,
    title: 'Type de toit',
    text: 'Les toits plats ou de forme complexe peuvent entraîner des coûts de montage plus élevés.',
  },
  {
    icon: Sun,
    title: 'Composants',
    text: "Des modules ou onduleurs de haute qualité peuvent augmenter le prix, mais offrent de meilleures garanties et une durée de vie plus longue.",
  },
];

const faqs = [
  {
    question: "Quel est le coût d'une installation photovoltaïque pour une maison individuelle ?",
    answer: "La plupart des installations solaires pour maisons individuelles coûtent en Suisse entre 18'000 et 30'000 CHF après déduction des subventions (RU). Pour une installation typique de 8 à 10 kWp, c'est la fourchette habituelle.",
  },
  {
    question: "Combien coûte une installation solaire de 10 kW en Suisse ?",
    answer: "Une installation photovoltaïque de 10 kWp coûte en Suisse typiquement entre 22'000 et 30'000 CHF. Après déduction de la rétribution unique (RU) de la Confédération, les coûts nets peuvent être nettement inférieurs. Une telle installation produit environ 9'000 – 10'000 kWh d'électricité par an.",
  },
  {
    question: "Quelle quantité d'électricité produit une installation solaire ?",
    answer: "En Suisse, une installation solaire produit par kWp de puissance environ 900 – 1'000 kWh d'électricité par an. Une installation de 10 kWp produit donc environ 9'000 – 10'000 kWh annuellement.",
  },
  {
    question: "L'énergie solaire est-elle rentable en Suisse ?",
    answer: "Oui. Grâce à la hausse des prix de l'électricité et aux subventions disponibles, de nombreuses installations en Suisse s'amortissent en 10 à 15 ans. Pour une durée de vie de 25 à 30 ans, cela signifie des années d'électricité gratuite depuis son propre toit.",
  },
  {
    question: "De combien de modules solaires a besoin une maison individuelle ?",
    answer: "Pour une installation typique de 8 à 10 kWp, il faut généralement 20 à 30 modules solaires, selon la puissance des modules (généralement 400 – 450 Watt par module).",
  },
  {
    question: "Quelle doit être la taille de mon toit pour une installation solaire ?",
    answer: "Pour 1 kWp de puissance, il faut environ 6 à 7 m² de surface de toit. Une installation de 10 kWp nécessite donc environ 60 – 70 m² de surface de toit adaptée.",
  },
  {
    question: "Quelles subventions existent pour les installations solaires en Suisse ?",
    answer: "En Suisse, la Confédération propose la rétribution unique (RU). Les montants de subvention typiques sont d'environ 300 – 400 CHF par kWp. En plus, de nombreux cantons et communes proposent leurs propres programmes. L'investissement est également déductible fiscalement.",
  },
  {
    question: "Combien coûte une installation solaire avec stockage par batterie ?",
    answer: "Un stockage par batterie augmente les coûts de l'installation solaire : un stockage de 5 kWh coûte environ 4'000 – 6'000 CHF, un stockage de 10 kWh environ 7'000 – 10'000 CHF. Avec un stockage, l'autoconsommation du courant autoproduit augmente nettement.",
  },
];

export default function CoutInstallationSolairePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Combien coûte une installation solaire en Suisse ? Prix actuels 2026",
            "description": "Coûts actuels pour les installations solaires en Suisse. Installations 5–10 kWp, coûts par kWp, subventions et stockage par batterie.",
            "author": { "@type": "Organization", "name": "PVPro" },
            "publisher": { "@type": "Organization", "name": "PVPro", "url": "https://www.pvpro.ch" },
            "datePublished": "2025-01-01",
            "dateModified": new Date().toISOString().split('T')[0],
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
            }))
          })
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-50 to-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-sans font-semibold tracking-normal text-gray-900 mb-6 leading-tight">
              Combien coûte une installation solaire en Suisse ?
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Les coûts dépendent principalement de la taille de l'installation, de la surface de toit et des composants utilisés.
            </p>
            <p className="text-xl text-gray-600 mb-8">
              Pour une maison individuelle typique, les prix se situent généralement entre :
            </p>
            <div className="inline-block bg-primary text-white rounded-2xl px-10 py-6 mb-8">
              <div className="text-4xl sm:text-5xl font-bold mb-1">15'000 – 35'000 CHF</div>
              <div className="text-primary-100 text-base">après déduction des subventions</div>
            </div>
            <p className="text-gray-600">
              Une installation moyenne pour une maison individuelle a une puissance d'environ <strong>8 à 10 kWp</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Tableau des prix */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-sans font-semibold tracking-normal text-center text-gray-900 mb-4">
            Coût d'une installation solaire pour une maison individuelle
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Fourchettes de prix typiques pour les installations photovoltaïques en Suisse
          </p>

          {/* Desktop table */}
          <div className="hidden md:block max-w-4xl mx-auto mb-10 overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-6 py-4 font-semibold">Taille</th>
                  <th className="px-6 py-4 font-semibold">Production annuelle</th>
                  <th className="px-6 py-4 font-semibold">Surface (env.)</th>
                  <th className="px-6 py-4 font-semibold">Coût (env.)</th>
                </tr>
              </thead>
              <tbody>
                {costTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{row.size}</td>
                    <td className="px-6 py-4 text-gray-700">{row.production}</td>
                    <td className="px-6 py-4 text-gray-700">{row.area}</td>
                    <td className="px-6 py-4 font-bold text-primary">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4 mb-10">
            {costTable.map((row, i) => (
              <div key={i} className={`rounded-2xl p-5 border-2 ${i === 1 ? 'border-primary bg-primary-50' : 'border-gray-200 bg-white'}`}>
                {i === 1 && (
                  <div className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3">
                    Taille la plus populaire
                  </div>
                )}
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xl font-bold text-gray-900">{row.size}</span>
                  <span className="text-xl font-bold text-primary">{row.price}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div><span className="font-medium">Production :</span> {row.production}</div>
                  <div><span className="font-medium">Surface :</span> {row.area}</div>
                </div>
                <div className="text-xs text-gray-400 mt-2">Idéal pour : {row.ideal}</div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 max-w-3xl mx-auto text-sm text-gray-600 text-center">
            Ces prix incluent habituellement : <strong>modules solaires, onduleur, montage et installation.</strong> Le prix réel dépend du type de toit, de l'orientation et des composants choisis.
          </div>
        </div>
      </section>

      {/* Coût par kWp */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-sans font-semibold tracking-normal text-gray-900 mb-4">
              Coût par kWp en Suisse
            </h2>
            <p className="text-gray-600 mb-6">
              Le coût d'une installation photovoltaïque est souvent calculé par kWp (kilowatt crête).
              En Suisse, les coûts moyens se situent à :
            </p>
            <div className="bg-white rounded-2xl border-2 border-primary p-8 text-center mb-6">
              <div className="text-4xl font-bold text-primary mb-2">1'800 – 2'800 CHF <span className="text-2xl">par kWp</span></div>
              <p className="text-gray-600 text-sm mt-2">
                Le prix par kWp diminue pour les grandes installations, car les coûts d'installation peuvent être mieux répartis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation 10 kW */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-sans font-semibold tracking-normal text-gray-900 mb-4">
              Combien coûte une installation solaire de 10 kW en Suisse ?
            </h2>
            <p className="text-gray-600 mb-6">
              Une installation photovoltaïque de <strong>10 kWp</strong> coûte en Suisse typiquement :
            </p>
            <div className="bg-primary-50 rounded-2xl p-8 mb-6">
              <div className="text-4xl font-bold text-primary mb-3">22'000 – 30'000 CHF</div>
              <p className="text-gray-700 text-sm">après déduction des subventions</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-3">
                <Sun className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Production annuelle d'électricité</p>
                  <p className="text-gray-600">Une installation de 10 kWp produit en Suisse environ <strong>9'000 – 10'000 kWh d'électricité par an</strong>. C'est souvent suffisant pour couvrir une grande partie de la consommation d'une maison individuelle.</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-5 bg-yellow-50 border border-yellow-200 rounded-xl">
              <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-yellow-800 text-sm">
                Pour une installation de 10 kWp, il vous faut environ <strong>62 – 68 m² de surface de toit</strong> et 20 à 25 modules solaires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation avec stockage */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-sans font-semibold tracking-normal text-gray-900 mb-4">
              Combien coûte une installation solaire avec stockage ?
            </h2>
            <p className="text-gray-600 mb-6">
              Un stockage par batterie augmente les coûts d'une installation solaire — mais il permet d'utiliser davantage de courant autoproduit et d'en injecter moins dans le réseau.
            </p>

            <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-200 mb-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="px-6 py-4 font-semibold">Capacité de stockage</th>
                    <th className="px-6 py-4 font-semibold">Coût (env.)</th>
                  </tr>
                </thead>
                <tbody>
                  {storageTable.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 font-semibold text-gray-900 flex items-center gap-2">
                        <Battery className="w-4 h-4 text-primary" />{row.size}
                      </td>
                      <td className="px-6 py-4 font-bold text-primary">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="md:hidden space-y-3 mb-6">
              {storageTable.map((row, i) => (
                <div key={i} className="flex justify-between items-center bg-white rounded-xl border border-gray-200 px-5 py-4">
                  <div className="flex items-center gap-2 font-semibold text-gray-900">
                    <Battery className="w-4 h-4 text-primary" />{row.size}
                  </div>
                  <span className="font-bold text-primary">{row.price}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 mb-4">
              Un stockage peut augmenter considérablement l'autoconsommation du courant autoproduit.
            </p>
            <Link
              href="/fr/solaire-avec-batterie"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              → Plus d'informations : Installation solaire avec stockage
            </Link>
          </div>
        </div>
      </section>

      {/* Facteurs de coût */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-sans font-semibold tracking-normal text-center text-gray-900 mb-4">
            Quels facteurs influencent les coûts ?
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Les principaux facteurs qui déterminent le prix d'une installation solaire en Suisse
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {costFactors.map((f, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <f.icon className="w-9 h-9 text-primary mb-4" />
                <h3 className="text-lg font-sans font-semibold tracking-normal text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subventions */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-sans font-semibold tracking-normal text-gray-900 mb-4">
              Subventions pour les installations solaires en Suisse
            </h2>
            <p className="text-gray-600 mb-6">
              En Suisse, la Confédération soutient les installations photovoltaïques avec la <strong>rétribution unique (RU)</strong>.
              Cette subvention réduit sensiblement les coûts d'investissement.
            </p>
            <div className="bg-primary-50 rounded-2xl p-8 mb-6">
              <div className="flex items-start gap-4">
                <PiggyBank className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <p className="text-2xl font-bold text-primary mb-1">300 – 400 CHF par kWp</p>
                  <p className="text-gray-700">Montants de subvention typiques de la Confédération (RU). Le montant dépend de la taille de l'installation.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Exemple de calcul : installation 10 kWp
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Coût brut</span>
                  <span className="font-medium">CHF 26'000</span>
                </div>
                <div className="flex justify-between text-primary">
                  <span>– Rétribution unique RU (env. 350 CHF/kWp)</span>
                  <span className="font-medium">– CHF 3'500</span>
                </div>
                <div className="flex justify-between text-primary">
                  <span>– Subvention cantonale (exemple)</span>
                  <span className="font-medium">– CHF 2'000</span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between">
                  <span className="font-semibold text-gray-900">Coût effectif (exemple)</span>
                  <span className="font-bold text-xl text-primary">CHF 20'500</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-3">Valeur indicative. Subventions réelles selon le canton et la taille de l'installation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculateur CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-primary-50 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6">
            <Calculator className="w-14 h-14 text-primary flex-shrink-0" />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Calculateur solaire : estimer les coûts</h3>
              <p className="text-gray-600 text-sm">
                Estimez les coûts de votre installation solaire en fonction de votre surface de toit et de votre consommation d'électricité.
              </p>
            </div>
            <Link href="/fr/calculateur-solaire" className="btn-primary px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap flex-shrink-0">
              Démarrer le calculateur →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Offres */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <CtaAnfrage
              title="Obtenir des devis gratuits maintenant"
              subtitle="Comparez jusqu'à 3 offres d'installateurs suisses certifiés. En 2 minutes c'est fait."
              ctaText="Demander un devis gratuit"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-sans font-semibold tracking-normal text-center text-gray-900 mb-4">
            FAQ – Questions fréquentes sur le coût des installations solaires
          </h2>
          <p className="text-center text-gray-600 mb-10">Réponses aux questions les plus fréquentes sur le coût d'une installation solaire en Suisse</p>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-sans font-semibold tracking-normal text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* En résumé */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-gray-200 p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">En résumé</h2>
            <p className="text-gray-600 mb-4">Une installation solaire coûte en Suisse typiquement :</p>
            <div className="text-4xl font-bold text-primary mb-3">15'000 – 35'000 CHF</div>
            <p className="text-gray-600 text-sm mb-6">pour une maison individuelle</p>
            <p className="text-gray-500 text-sm">
              Les coûts exacts dépendent de la surface de toit, de la taille de l'installation et des subventions disponibles.
              Demandez 3 offres sans engagement auprès d'installateurs certifiés.
            </p>
          </div>
        </div>
      </section>

      <FaqSchema faqs={faqs} />
    </>
  );
}
