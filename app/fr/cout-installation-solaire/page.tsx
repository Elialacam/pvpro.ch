import { Metadata } from 'next';
import { pageMetadata } from '@/lib/pageMetadata';
import CtaAnfrage from '@/components/CtaAnfrage';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Sun, Home, Building2, Battery, Calculator, TrendingUp, PiggyBank } from 'lucide-react';
import FaqSchema from '@/components/FaqSchema';
import { ECONOMIC_FACTS, SOURCE_NOTES, SYSTEM_PRICE_NOTES, STORAGE_PRICE_NOTES, formatChfForLocale, formatRangeForLocale } from '@/lib/facts';

const facts = ECONOMIC_FACTS;
const frRange = (range: { min: number; max: number }, unit: string) => formatRangeForLocale(range, unit, 'fr');
const annualProduction = (kwp: number) => ({
  min: kwp * facts.production.plateauKwhPerKwp.min,
  max: kwp * facts.production.plateauKwhPerKwp.max,
});
const roofArea = (kwp: number) => formatRangeForLocale(
  { min: kwp * facts.roofAreaM2PerKwp, max: kwp * facts.roofAreaM2PerKwp },
  'm²',
  'fr',
).replace(/^de (.+) à \1 /, '$1 ');

const baseMetadata: Metadata = {
  title: 'Coût installation solaire Suisse 2026 – Combien coûte une installation ? | PvPro.ch',
  description: `Combien coûte une installation solaire en Suisse ? Prix 2026 : ${frRange(facts.systemCosts.bySize[10], 'CHF')} pour 10 kWp. Coûts par kWp, subventions et stockage. Comparez des offres gratuitement.`,
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
    description: `Prix actuels pour les installations solaires en Suisse. ${frRange(facts.systemCosts.bySize[10], 'CHF')} pour 10 kWp, sans stockage.`,
    url: 'https://www.pvpro.ch/fr/cout-installation-solaire',
    type: 'article',
    locale: 'fr_CH',
    siteName: 'PvPro.ch',
  },
};

const costTable = [
  { size: '5 kWp', production: frRange(annualProduction(5), 'kWh'), price: frRange(facts.systemCosts.bySize[5], 'CHF'), area: roofArea(5), ideal: 'Petite maison' },
  { size: '8 kWp', production: frRange(annualProduction(8), 'kWh'), price: frRange(facts.systemCosts.bySize[8], 'CHF'), area: roofArea(8), ideal: 'Maison individuelle' },
  { size: '10 kWp', production: frRange(annualProduction(10), 'kWh'), price: frRange(facts.systemCosts.bySize[10], 'CHF'), area: roofArea(10), ideal: 'Grande MI / immeuble' },
];

const storageTable = [
  { size: '5 kWh', price: frRange(facts.storageCosts.byCapacity[5], 'CHF') },
  { size: '10 kWh', price: frRange(facts.storageCosts.byCapacity[10], 'CHF') },
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
    answer: `Une installation de 8 kWp coûte ${frRange(facts.systemCosts.bySize[8], 'CHF')} et une installation de 10 kWp ${frRange(facts.systemCosts.bySize[10], 'CHF')}, avant subventions et sans stockage.`,
  },
  {
    question: "Combien coûte une installation solaire de 10 kW en Suisse ?",
    answer: `Une installation photovoltaïque de 10 kWp coûte ${frRange(facts.systemCosts.bySize[10], 'CHF')}. La RU est d'environ ${formatChfForLocale(facts.incentives.tenKwpApprox, 'fr')}. Sur le Plateau, elle produit ${frRange(annualProduction(10), 'kWh')} par an.`,
  },
  {
    question: "Quelle quantité d'électricité produit une installation solaire ?",
    answer: `Sur le Plateau, une installation solaire produit ${frRange(facts.production.plateauKwhPerKwp, 'kWh par kWp')} par an.`,
  },
  {
    question: "L'énergie solaire est-elle rentable en Suisse ?",
    answer: `Oui. Sur le Plateau, l'amortissement indicatif est de ${frRange(facts.systemPaybackYears.plateau, 'ans')}. La durée de vie des modules est de ${frRange(facts.moduleLifetimeYears, 'ans')}.`,
  },
  {
    question: "De combien de modules solaires a besoin une maison individuelle ?",
    answer: "Pour une installation typique de 8 à 10 kWp, il faut généralement 20 à 30 modules solaires, selon la puissance des modules (généralement 400 – 450 Watt par module).",
  },
  {
    question: "Quelle doit être la taille de mon toit pour une installation solaire ?",
    answer: `Il faut environ ${facts.roofAreaM2PerKwp.toLocaleString('fr-CH')} m² de surface de toit par kWp.`,
  },
  {
    question: "Quelles subventions existent pour les installations solaires en Suisse ?",
    answer: `La RU Pronovo est de ${formatChfForLocale(facts.incentives.pronovoPerKwpUpTo30, 'fr')} par kWp jusqu'à 30 kWp, plus une contribution de base.`,
  },
  {
    question: "Combien coûte une installation solaire avec stockage par batterie ?",
    answer: `Un stockage de 5 kWh coûte ${frRange(facts.storageCosts.byCapacity[5], 'CHF')}, un stockage de 10 kWh ${frRange(facts.storageCosts.byCapacity[10], 'CHF')}.`,
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
            "author": { "@type": "Organization", "name": "PvPro.ch" },
            "publisher": { "@type": "Organization", "name": "PvPro.ch", "url": "https://www.pvpro.ch" },
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
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
                 <div className="text-4xl sm:text-5xl font-bold mb-1">{frRange(facts.systemCosts.bySize[10], 'CHF')}</div>
                 <div className="text-primary-100 text-base">pour 10 kWp, avant subventions</div>
              </div>
              <p className="text-gray-600">
                Une installation moyenne pour une maison individuelle a une puissance d'environ <strong>8 à 10 kWp</strong>.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/asset-haus-luftbild-2.webp"
                alt="Installation solaire sur une maison individuelle suisse – vue aérienne"
                width={700}
                height={500}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto object-cover"
                priority
              />
            </div>
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
          <p className="text-xs text-gray-500 text-center mt-4">{SYSTEM_PRICE_NOTES.fr}</p>
          <p className="text-xs text-gray-500 text-center mt-1">{SOURCE_NOTES.fr}</p>
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
               <div className="text-4xl font-bold text-primary mb-2">{frRange(facts.systemCosts.perKwp, 'CHF')} <span className="text-2xl">par kWp</span></div>
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
               <div className="text-4xl font-bold text-primary mb-3">{frRange(facts.systemCosts.bySize[10], 'CHF')}</div>
               <p className="text-gray-700 text-sm">coût brut, sans stockage</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-3">
                <Sun className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Production annuelle d'électricité</p>
                   <p className="text-gray-600">Sur le Plateau, une installation de 10 kWp produit environ <strong>{frRange(annualProduction(10), 'kWh d’électricité par an')}</strong>.</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-5 bg-yellow-50 border border-yellow-200 rounded-xl">
              <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-yellow-800 text-sm">
                 Pour une installation de 10 kWp, il faut environ <strong>{roofArea(10)} de surface de toit</strong>.
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
            <p className="text-xs text-gray-500 mb-4">{STORAGE_PRICE_NOTES.fr}</p>
            <p className="text-xs text-gray-500 mb-4">{SOURCE_NOTES.fr}</p>

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
                   <p className="text-2xl font-bold text-primary mb-1">{formatChfForLocale(facts.incentives.pronovoPerKwpUpTo30, 'fr')} par kWp</p>
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
                   <span className="font-medium">{frRange(facts.systemCosts.bySize[10], 'CHF')}</span>
                </div>
                <div className="flex justify-between text-primary">
                   <span>– Rétribution unique RU</span>
                   <span className="font-medium">– {formatChfForLocale(facts.incentives.tenKwpApprox, 'fr')}</span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between">
                  <span className="font-semibold text-gray-900">Coût effectif (exemple)</span>
                   <span className="font-bold text-xl text-primary">{frRange({ min: facts.systemCosts.bySize[10].min - facts.incentives.tenKwpApprox, max: facts.systemCosts.bySize[10].max - facts.incentives.tenKwpApprox }, 'CHF')}</span>
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
             <div className="text-4xl font-bold text-primary mb-3">{frRange(facts.systemCosts.bySize[10], 'CHF')}</div>
             <p className="text-gray-600 text-sm mb-2">pour 10 kWp, sans stockage</p>
             <p className="text-xs text-gray-500 mb-6">{SYSTEM_PRICE_NOTES.fr} {SOURCE_NOTES.fr}</p>
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

export const metadata: Metadata = pageMetadata(baseMetadata, { path: '/fr/cout-installation-solaire', locale: 'fr' });
