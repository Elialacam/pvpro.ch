import { Metadata } from 'next';
import { pageMetadata } from '@/lib/pageMetadata';
import CtaAnfrage from '@/components/CtaAnfrage';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Sun, Home, Building2, Battery, Calculator, TrendingUp, PiggyBank } from 'lucide-react';
import FaqSchema from '@/components/FaqSchema';
import {
  ECONOMIC_FACTS,
  SOURCE_NOTES,
  SYSTEM_PRICE_NOTES,
  STORAGE_PRICE_NOTES,
  formatChf,
  formatRangeForLocale,
} from '@/lib/facts';

const itRange = (range: { readonly min: number; readonly max: number }, unit: string) =>
  formatRangeForLocale(range, unit, 'it');
const cost10 = ECONOMIC_FACTS.systemCosts.bySize[10];
const ru10 = ECONOMIC_FACTS.incentives.tenKwpApprox;
const exampleKwp = 10;

export const metadata: Metadata = pageMetadata({
  title: 'Costi impianto solare Svizzera 2026 – Quanto costa un impianto fotovoltaico? | PvPro.ch',
  description: `Quanto costa un impianto solare in Svizzera? Prezzi 2026: ${itRange(cost10, 'CHF')} per 10 kWp, senza accumulo. Costi per kWp, incentivi e accumulo.`,
  alternates: {
    canonical: 'https://www.pvpro.ch/it/costi-impianto-solare',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solaranlage-kosten',
      'fr-CH': 'https://www.pvpro.ch/fr/cout-installation-solaire',
      'en-CH': 'https://www.pvpro.ch/en/solar-panel-costs',
      'it-CH': 'https://www.pvpro.ch/it/costi-impianto-solare',
      'x-default': 'https://www.pvpro.ch/solaranlage-kosten',
    },
  },
  openGraph: {
    title: "Costi impianto solare Svizzera 2026 – Prezzi attuali & incentivi",
    description: `Prezzi attuali per impianti solari in Svizzera. ${itRange(cost10, 'CHF')} per 10 kWp prima degli incentivi. Informazioni su costi, prezzo kWp e accumulo.`,
    url: 'https://www.pvpro.ch/it/costi-impianto-solare',
    type: 'article',
    locale: 'it_CH',
    siteName: 'PvPro.ch',
  },
}, { path: '/it/costi-impianto-solare', locale: 'it' });

const costTable = [
  { size: '5 kWp', production: itRange({ min: 5 * ECONOMIC_FACTS.production.plateauKwhPerKwp.min, max: 5 * ECONOMIC_FACTS.production.plateauKwhPerKwp.max }, 'kWh'), price: itRange(ECONOMIC_FACTS.systemCosts.bySize[5], 'CHF'), area: `${5 * ECONOMIC_FACTS.roofAreaM2PerKwp} m²`, ideal: 'Casa piccola' },
  { size: '8 kWp', production: itRange({ min: 8 * ECONOMIC_FACTS.production.plateauKwhPerKwp.min, max: 8 * ECONOMIC_FACTS.production.plateauKwhPerKwp.max }, 'kWh'), price: itRange(ECONOMIC_FACTS.systemCosts.bySize[8], 'CHF'), area: `${8 * ECONOMIC_FACTS.roofAreaM2PerKwp} m²`, ideal: 'Casa unifamiliare' },
  { size: '10 kWp', production: itRange({ min: 10 * ECONOMIC_FACTS.production.plateauKwhPerKwp.min, max: 10 * ECONOMIC_FACTS.production.plateauKwhPerKwp.max }, 'kWh'), price: itRange(cost10, 'CHF'), area: `${10 * ECONOMIC_FACTS.roofAreaM2PerKwp} m²`, ideal: 'Grande CU / condominio' },
];

const storageTable = [
  { size: '5 kWh', price: itRange(ECONOMIC_FACTS.storageCosts.byCapacity[5], 'CHF') },
  { size: '10 kWh', price: itRange(ECONOMIC_FACTS.storageCosts.byCapacity[10], 'CHF') },
];

const costFactors = [
  {
    icon: Building2,
    title: "Dimensione dell'impianto",
    text: "Gli impianti più grandi hanno generalmente costi per kWp inferiori, poiché i costi di installazione vengono ripartiti su una potenza maggiore.",
  },
  {
    icon: Home,
    title: 'Superficie del tetto',
    text: 'Più grande è la superficie del tetto disponibile, più grande può essere dimensionato l\'impianto.',
  },
  {
    icon: Home,
    title: 'Tipo di tetto',
    text: 'I tetti piani o dalle forme complesse possono comportare costi di montaggio più elevati.',
  },
  {
    icon: Sun,
    title: 'Componenti',
    text: 'Moduli o inverter di alta qualità possono aumentare il prezzo, ma offrono garanzie più lunghe e una maggiore durata di vita.',
  },
];

const faqs = [
  {
    question: 'Quanto costa un impianto fotovoltaico per una casa unifamiliare?',
    answer: `Un impianto da 8 kWp costa ${itRange(ECONOMIC_FACTS.systemCosts.bySize[8], 'CHF')}; uno da 10 kWp costa ${itRange(cost10, 'CHF')}. Sono costi lordi senza accumulo.`,
  },
  {
    question: 'Quanto costa un impianto solare da 10 kW in Svizzera?',
    answer: `Un impianto fotovoltaico da 10 kWp costa ${itRange(cost10, 'CHF')}. La RU è di circa ${formatChf(ru10)}. Sull'Altopiano produce ${itRange({ min: 10 * ECONOMIC_FACTS.production.plateauKwhPerKwp.min, max: 10 * ECONOMIC_FACTS.production.plateauKwhPerKwp.max }, 'kWh')} all'anno.`,
  },
  {
    question: 'Quanta elettricità produce un impianto solare?',
    answer: `Sull'Altopiano un impianto produce ${itRange(ECONOMIC_FACTS.production.plateauKwhPerKwp, 'kWh per kWp')} all'anno.`,
  },
  {
    question: 'Un impianto solare conviene in Svizzera?',
    answer: `Sì. Sull'Altopiano l'ammortamento indicativo è ${itRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'anni')}. La durata dei moduli è ${itRange(ECONOMIC_FACTS.moduleLifetimeYears, 'anni')}.`,
  },
  {
    question: 'Di quanti moduli solari ha bisogno una casa unifamiliare?',
    answer: 'Il numero di moduli dipende dalla potenza dei moduli scelti e dalla superficie utilizzabile.',
  },
  {
    question: 'Quanto deve essere grande il mio tetto per un impianto solare?',
    answer: `Per 1 kWp servono circa ${ECONOMIC_FACTS.roofAreaM2PerKwp} m². Per 10 kWp servono circa ${10 * ECONOMIC_FACTS.roofAreaM2PerKwp} m².`,
  },
  {
    question: 'Quali incentivi esistono per gli impianti solari in Svizzera?',
    answer: `La RU Pronovo è di ${formatChf(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30)} per kWp fino a 30 kWp e ${formatChf(ECONOMIC_FACTS.incentives.pronovoPerKwpOver30)} oltre, più il contributo base.`,
  },
  {
    question: 'Quanto costa un impianto solare con accumulo a batteria?',
    answer: `Un accumulo da 5 kWh costa ${itRange(ECONOMIC_FACTS.storageCosts.byCapacity[5], 'CHF')}; uno da 10 kWh costa ${itRange(ECONOMIC_FACTS.storageCosts.byCapacity[10], 'CHF')}.`,
  },
];

export default function CostiImpiantoSolarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Quanto costa un impianto solare in Svizzera? Prezzi attuali 2026",
            "description": `Costi attuali per impianti solari in Svizzera. Esempio da ${exampleKwp} kWp, costi per kWp, incentivi e accumulo a batteria.`,
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
                Quanto costa un impianto solare in Svizzera?
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                I costi dipendono principalmente dalle dimensioni dell'impianto, dalla superficie del tetto e dai componenti utilizzati.
              </p>
              <p className="text-xl text-gray-600 mb-8">
                Per una tipica casa unifamiliare, i prezzi si situano generalmente tra:
              </p>
              <div className="inline-block bg-primary text-white rounded-2xl px-10 py-6 mb-8">
                <div className="text-4xl sm:text-5xl font-bold mb-1">{itRange(cost10, 'CHF')}</div>
                <div className="text-primary-100 text-base">costo lordo per 10 kWp, senza accumulo</div>
              </div>
              <p className="text-gray-600">
                Il dimensionamento di un impianto per una casa unifamiliare dipende dal consumo e dal tetto.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/asset-haus-luftbild-2.webp"
                alt="Impianto solare su casa unifamiliare svizzera – vista aerea"
                width={700}
                height={500}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
          <p className="text-xs text-gray-400 text-center mt-4">{SYSTEM_PRICE_NOTES.it}</p>
          <p className="text-xs text-gray-400 text-center mt-1">{SOURCE_NOTES.it}</p>
        </div>
      </section>

      {/* Tabella dei prezzi */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-sans font-semibold tracking-normal text-center text-gray-900 mb-4">
            Costo di un impianto solare per una casa unifamiliare
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Fasce di prezzo tipiche per impianti fotovoltaici in Svizzera
          </p>

          {/* Desktop table */}
          <div className="hidden md:block max-w-4xl mx-auto mb-10 overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-6 py-4 font-semibold">Dimensione</th>
                  <th className="px-6 py-4 font-semibold">Produzione annua</th>
                  <th className="px-6 py-4 font-semibold">Superficie (ca.)</th>
                  <th className="px-6 py-4 font-semibold">Costo (ca.)</th>
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
                    Dimensione più popolare
                  </div>
                )}
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xl font-bold text-gray-900">{row.size}</span>
                  <span className="text-xl font-bold text-primary">{row.price}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div><span className="font-medium">Produzione:</span> {row.production}</div>
                  <div><span className="font-medium">Superficie:</span> {row.area}</div>
                </div>
                <div className="text-xs text-gray-400 mt-2">Ideale per: {row.ideal}</div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 max-w-3xl mx-auto text-sm text-gray-600 text-center">
            Questi prezzi includono normalmente: <strong>moduli solari, inverter, montaggio e installazione.</strong> Il prezzo effettivo dipende dal tipo di tetto, dall'orientamento e dai componenti scelti.
          </div>
        </div>
      </section>

      {/* Costo per kWp */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-sans font-semibold tracking-normal text-gray-900 mb-4">
              Costo per kWp in Svizzera
            </h2>
            <p className="text-gray-600 mb-6">
              Il costo di un impianto fotovoltaico viene spesso calcolato per kWp (kilowatt di picco).
              In Svizzera i costi medi si situano a:
            </p>
            <div className="bg-white rounded-2xl border-2 border-primary p-8 text-center mb-6">
              <div className="text-4xl font-bold text-primary mb-2">{itRange(ECONOMIC_FACTS.systemCosts.perKwp, 'CHF')} <span className="text-2xl">per kWp</span></div>
              <p className="text-gray-600 text-sm mt-2">
                Il prezzo per kWp diminuisce per gli impianti più grandi, poiché i costi di installazione possono essere meglio distribuiti.
              </p>
            </div>
            <p className="text-xs text-gray-400">{SYSTEM_PRICE_NOTES.it}</p>
            <p className="text-xs text-gray-400 mt-1">{SOURCE_NOTES.it}</p>
          </div>
        </div>
      </section>

      {/* Impianto da 10 kW */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-sans font-semibold tracking-normal text-gray-900 mb-4">
              Quanto costa un impianto solare da 10 kW in Svizzera?
            </h2>
            <p className="text-gray-600 mb-6">
              Un impianto fotovoltaico da <strong>{exampleKwp} kWp</strong> costa in Svizzera tipicamente:
            </p>
            <div className="bg-primary-50 rounded-2xl p-8 mb-6">
               <div className="text-4xl font-bold text-primary mb-3">{itRange(cost10, 'CHF')}</div>
               <p className="text-gray-700 text-sm">costo lordo, senza accumulo</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-3">
                <Sun className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Produzione annua di elettricità</p>
                   <p className="text-gray-600">Un impianto da 10 kWp produce sull'Altopiano <strong>{itRange({ min: 10 * ECONOMIC_FACTS.production.plateauKwhPerKwp.min, max: 10 * ECONOMIC_FACTS.production.plateauKwhPerKwp.max }, 'kWh all’anno')}</strong>.</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-5 bg-yellow-50 border border-yellow-200 rounded-xl">
              <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-yellow-800 text-sm">
                 Per un impianto da 10 kWp occorrono circa <strong>{10 * ECONOMIC_FACTS.roofAreaM2PerKwp} m² di superficie del tetto</strong>.
              </p>
            </div>
            <p className="text-xs text-gray-400">{STORAGE_PRICE_NOTES.it}</p>
            <p className="text-xs text-gray-400 mt-1">{SOURCE_NOTES.it}</p>
          </div>
        </div>
      </section>

      {/* Impianto con accumulo */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-sans font-semibold tracking-normal text-gray-900 mb-4">
              Quanto costa un impianto solare con accumulo?
            </h2>
            <p className="text-gray-600 mb-6">
              Un accumulo a batteria aumenta i costi di un impianto solare — ma consente di utilizzare più corrente autoprodotta e di immetterne meno in rete.
            </p>

            <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-200 mb-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="px-6 py-4 font-semibold">Capacità di accumulo</th>
                    <th className="px-6 py-4 font-semibold">Costo (ca.)</th>
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
              Un accumulo può aumentare considerevolmente l'autoconsumo dell'elettricità autoprodotta.
            </p>
            <Link
              href="/it/solare-con-accumulo"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              → Maggiori informazioni: Impianto solare con accumulo
            </Link>
          </div>
        </div>
      </section>

      {/* Fattori di costo */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-sans font-semibold tracking-normal text-center text-gray-900 mb-4">
            Quali fattori influenzano i costi?
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            I principali fattori che determinano il prezzo di un impianto solare in Svizzera
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

      {/* Incentivi */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-sans font-semibold tracking-normal text-gray-900 mb-4">
              Incentivi per gli impianti solari in Svizzera
            </h2>
            <p className="text-gray-600 mb-6">
              In Svizzera, la Confederazione sostiene gli impianti fotovoltaici con la cosiddetta <strong>rimunerazione unica (RU)</strong>.
              Questo incentivo riduce sensibilmente i costi di investimento.
            </p>
            <div className="bg-primary-50 rounded-2xl p-8 mb-6">
              <div className="flex items-start gap-4">
                <PiggyBank className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <p className="text-2xl font-bold text-primary mb-1">{formatChf(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30)} per kWp fino a 30 kWp</p>
                  <p className="text-gray-700">Importi di incentivo tipici della Confederazione (RU). L'importo dipende dalla dimensione dell'impianto.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Esempio di calcolo: impianto da {exampleKwp} kWp
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Costo lordo</span>
                  <span className="font-medium">{itRange(cost10, 'CHF')}</span>
                </div>
                <div className="flex justify-between text-primary">
                  <span>– Rimunerazione unica RU</span>
                  <span className="font-medium">– {formatChf(ru10)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between">
                  <span className="font-semibold text-gray-900">Costo effettivo (esempio)</span>
                  <span className="font-bold text-xl text-primary">{itRange({ min: cost10.min - ru10, max: cost10.max - ru10 }, 'CHF')}</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-3">{SOURCE_NOTES.it}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calcolatore CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-primary-50 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6">
            <Calculator className="w-14 h-14 text-primary flex-shrink-0" />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Calcolatore solare: calcola i costi</h3>
              <p className="text-gray-600 text-sm">
                Stima i costi del tuo impianto solare in base alla superficie del tetto e al tuo consumo elettrico.
              </p>
            </div>
            <Link href="/it/calcolatore-solare" className="btn-primary px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap flex-shrink-0">
              Avvia il calcolatore →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Preventivi */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <CtaAnfrage
              title="Richiedi preventivi gratuiti ora"
              subtitle="Confronta fino a 3 offerte di installatori svizzeri certificati. Pronto in 2 minuti."
              ctaText="Richiedi preventivo gratuito"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-sans font-semibold tracking-normal text-center text-gray-900 mb-4">
            FAQ – Domande frequenti sui costi degli impianti solari
          </h2>
          <p className="text-center text-gray-600 mb-10">Risposte alle domande più frequenti sui costi di un impianto solare in Svizzera</p>
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

      {/* In sintesi */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-gray-200 p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">In sintesi</h2>
            <p className="text-gray-600 mb-4">Un impianto solare costa in Svizzera tipicamente:</p>
            <div className="text-4xl font-bold text-primary mb-3">{itRange(cost10, 'CHF')}</div>
            <p className="text-gray-600 text-sm mb-2">per 10 kWp, lordo e senza accumulo</p>
            <p className="text-xs text-gray-400 mb-6">{SYSTEM_PRICE_NOTES.it}</p>
            <p className="text-gray-500 text-sm">
              I costi esatti dipendono dalla superficie del tetto, dalla dimensione dell'impianto e dagli incentivi disponibili.
              Richiedete 3 preventivi senza impegno da installatori certificati.
            </p>
          </div>
        </div>
      </section>

      <FaqSchema faqs={faqs} />
    </>
  );
}
