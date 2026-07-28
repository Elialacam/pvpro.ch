import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import SwissMap from '@/components/SwissMapLazy';
import Testimonials from '@/components/Testimonials';
import TeamSection from '@/components/TeamSection';
import BlogSection from '@/components/BlogSection';
import CtaAnfrage from '@/components/CtaAnfrage';
import FAQ from '@/components/FAQ';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PV Pro - Confronta impianti fotovoltaici in Ticino | Preventivi gratuiti',
  description: 'Confronta gratuitamente fino a 3 preventivi per il tuo impianto fotovoltaico in Ticino. Risparmia tempo e denaro con PV Pro.',
};

export default function ItalianHomePage() {
  const defaultFAQs = [
    {
      question: 'Quanto costa un impianto fotovoltaico in Ticino?',
      answer: 'Un tipico impianto fotovoltaico per una casa unifamiliare costa tra CHF 9.500 e CHF 25.000. Il prezzo esatto dipende dalle dimensioni dell\'impianto, dalle caratteristiche del tetto e dai componenti utilizzati. Con un sistema di accumulo a batteria, i costi sono più elevati, tra CHF 19.500 e CHF 35.000.',
    },
    {
      question: 'Come funziona il servizio di intermediazione di PVPro?',
      answer: 'Compili il nostro breve modulo indicando le tue esigenze. Inoltriamo la tua richiesta a un massimo di 3 installatori certificati in Ticino. Questi preparano preventivi personalizzati per te. Tu confronti le offerte e scegli la migliore - senza alcun impegno.',
    },
    {
      question: 'Esistono sovvenzioni per gli impianti fotovoltaici in Ticino?',
      answer: 'Sì! In Ticino puoi beneficiare di diverse sovvenzioni: la Rimunerazione Unica (RU) della Confederazione copre fino al 30% dei costi d\'investimento. A questa si aggiungono gli incentivi cantonali e comunali ticinesi, oltre alle deduzioni fiscali. I nostri installatori partner ti aiutano a richiedere tutte le sovvenzioni disponibili.',
    },
    {
      question: 'Quanto tempo ci vuole per installare un impianto fotovoltaico?',
      answer: 'Dalla richiesta all\'installazione, ci vogliono solitamente 2-4 mesi. Il montaggio vero e proprio sul tetto dura di norma solo 1-3 giorni, a seconda delle dimensioni dell\'impianto. Dopo l\'installazione, seguono la messa in funzione e il collaudo da parte del gestore della rete.',
    },
    {
      question: 'Un impianto fotovoltaico conviene anche con poco sole?',
      answer: "Sì! E in Ticino ancora di più: con oltre 2'000 ore di sole all'anno è tra le zone più soleggiate della Svizzera. I moderni moduli fotovoltaici funzionano in modo efficiente anche con luce diffusa. Il periodo medio di ammortamento è di 10-15 anni, con una durata di vita di 25-30 anni.",
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
      <HowItWorks />
      <SwissMap />
      <Testimonials />
      <TeamSection />

      <BlogSection locale="it" />
      <CtaAnfrage />
      <FAQ />
    </>
  );
}
