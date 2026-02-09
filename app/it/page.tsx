import Hero from '@/components/Hero';
import SolarForm from '@/components/SolarForm';
import HowItWorks from '@/components/HowItWorks';
import SwissMap from '@/components/SwissMap';
import Testimonials from '@/components/Testimonials';
import TeamSection from '@/components/TeamSection';
import FAQ from '@/components/FAQ';
import { cities } from '@/lib/cities';
import CityGrid from '@/components/CityGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PV Pro - Confronta impianti fotovoltaici in Svizzera | Preventivi gratuiti',
  description: 'Confronta gratuitamente fino a 3 preventivi per il tuo impianto fotovoltaico in Svizzera. Risparmia tempo e denaro con PV Pro.',
};

export default function ItalianHomePage() {
  const defaultFAQs = [
    {
      question: 'Quanto costa un impianto fotovoltaico in Svizzera?',
      answer: 'Un tipico impianto fotovoltaico per una casa unifamiliare costa tra CHF 9.500 e CHF 25.000. Il prezzo esatto dipende dalle dimensioni dell\'impianto, dalle caratteristiche del tetto e dai componenti utilizzati. Con un sistema di accumulo a batteria, i costi sono più elevati, tra CHF 19.500 e CHF 35.000.',
    },
    {
      question: 'Come funziona il servizio di intermediazione di PVPro?',
      answer: 'Compili il nostro breve modulo indicando le tue esigenze. Inoltriamo la tua richiesta a un massimo di 3 installatori certificati nella tua regione. Questi preparano preventivi personalizzati per te. Tu confronti le offerte e scegli la migliore - senza alcun impegno.',
    },
    {
      question: 'Esistono sovvenzioni per gli impianti fotovoltaici in Svizzera?',
      answer: 'Sì! La Svizzera offre diverse sovvenzioni: la Rimunerazione Unica (RU) della Confederazione copre fino al 30% dei costi d\'investimento. Inoltre, esistono programmi di incentivi cantonali e comunali, oltre a deduzioni fiscali. I nostri installatori partner ti aiutano a richiedere tutte le sovvenzioni disponibili.',
    },
    {
      question: 'Quanto tempo ci vuole per installare un impianto fotovoltaico?',
      answer: 'Dalla richiesta all\'installazione, ci vogliono solitamente 2-4 mesi. Il montaggio vero e proprio sul tetto dura di norma solo 1-3 giorni, a seconda delle dimensioni dell\'impianto. Dopo l\'installazione, seguono la messa in funzione e il collaudo da parte del gestore della rete.',
    },
    {
      question: 'Un impianto fotovoltaico conviene anche con poco sole?',
      answer: 'Sì! Anche nelle regioni meno soleggiate della Svizzera, gli impianti fotovoltaici producono abbastanza elettricità per ammortizzarsi. I moderni moduli fotovoltaici funzionano in modo efficiente anche con luce diffusa. Il periodo medio di ammortamento in Svizzera è di 10-15 anni, con una durata di vita di 25-30 anni.',
    },
    {
      question: 'Il servizio di PVPro è davvero gratuito?',
      answer: 'Sì, il nostro servizio è al 100% gratuito e senza impegno per te. Ci finanziamo tramite commissioni dai nostri installatori partner. Non paghi nulla per l\'intermediazione e ricevi comunque gli stessi prezzi che se contattassi direttamente l\'installatore.',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": defaultFAQs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      <Hero />
      <div id="formular">
        <SolarForm />
      </div>
      <HowItWorks />
      <SwissMap />
      <Testimonials />
      <TeamSection />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold uppercase tracking-tight text-gray-900 mb-4">
              Impianti fotovoltaici in tutta la Svizzera
            </h2>
            <p className="text-xl text-gray-600">
              Ti mettiamo in contatto con installatori in tutte le principali città svizzere
            </p>
          </div>

          <CityGrid cities={cities} />
        </div>
      </section>

      <FAQ />
    </>
  );
}
