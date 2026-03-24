import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'FAQ – Domande frequenti | PVPro.ch',
  description: 'Risposte alle domande più frequenti sugli impianti solari in Svizzera: costi, incentivi, installazione e altro.',
  alternates: {
    canonical: 'https://www.pvpro.ch/it/faq',
    languages: {
      'de-CH': 'https://www.pvpro.ch/faq',
      'fr-CH': 'https://www.pvpro.ch/fr/faq',
      'en-CH': 'https://www.pvpro.ch/en/faq',
      'it-CH': 'https://www.pvpro.ch/it/faq',
      'x-default': 'https://www.pvpro.ch/faq',
    },
  },
};

const faqs = [
  { q: 'Il servizio di PVPro è gratuito?', a: 'Sì, il nostro servizio è completamente gratuito per i proprietari immobiliari. Ci finanziamo con commissioni degli installatori partner — senza alcun costo aggiuntivo per te.' },
  { q: 'Quanto costa un impianto solare in Svizzera?', a: 'Per una casa unifamiliare, i prezzi si situano generalmente tra 15\'000 e 35\'000 CHF dopo le deduzioni degli incentivi. Dipende dalla dimensione dell\'impianto, dal tipo di tetto e dai componenti scelti.' },
  { q: 'Quali incentivi esistono per il solare in Svizzera?', a: 'La Confederazione offre la remunerazione unica (RU): circa 300–400 CHF per kWp. Molti cantoni offrono inoltre propri programmi. L\'investimento è anche detraibile fiscalmente.' },
  { q: 'Quanto dura l\'installazione?', a: 'L\'installazione vera e propria dura generalmente 1–3 giorni a seconda della dimensione dell\'impianto. Dal primo contatto alla messa in servizio, calcola circa 4–8 settimane.' },
  { q: 'Quanta elettricità produce un impianto solare?', a: 'In Svizzera, un impianto solare produce circa 900–1\'000 kWh per kWp all\'anno. Un impianto da 10 kWp produce quindi circa 9\'000–10\'000 kWh all\'anno.' },
  { q: 'Sono obbligato ad accettare un\'offerta?', a: 'No. Puoi rifiutare tutti i preventivi senza alcuna conseguenza. Nessun contratto viene stipulato con PVPro.' },
  { q: 'Quanto tempo ci vuole per ricevere i preventivi?', a: 'Di regola, ricevi le offerte entro 24–48 ore dalla tua richiesta.' },
  { q: 'Vale la pena il solare in Svizzera?', a: 'Sì. Grazie all\'aumento dei prezzi dell\'elettricità e agli incentivi disponibili, la maggior parte degli impianti si ammortizza entro 10–15 anni, con una durata di vita di 25–30 anni.' },
  { q: 'Come scelgo la dimensione giusta dell\'impianto?', a: 'La dimensione ideale dipende dal consumo annuo di elettricità, dalla superficie disponibile sul tetto e dal budget. I nostri installatori partner ti consiglieranno personalmente.' },
  { q: 'PVPro è attivo in tutta la Svizzera?', a: 'Sì, operiamo in tutti i 26 cantoni svizzeri — nella Svizzera tedescofona, francofona e italofona.' },
];

export default function FaqItPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-10">
          <Link href="/it" className="hover:text-gray-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-700 font-medium">FAQ</span>
        </nav>

        <div className="mb-12">
          <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-2">Aiuto & supporto</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">Domande frequenti</h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            Qui trovi le risposte alle domande più frequenti sugli impianti solari, gli incentivi e il nostro servizio di intermediazione in Svizzera.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-900 text-sm select-none list-none">
                  {faq.q}
                  <span className="ml-4 text-[#F97316] flex-shrink-0 text-lg group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-50">
                  <p className="pt-4">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>

        <div className="rounded-2xl p-10 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Hai altre domande?</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">Il nostro team è felice di aiutarti. Richiedi ora i tuoi preventivi gratuiti.</p>
          <Link href="/it/richiesta" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            Ottieni preventivi gratuiti →
          </Link>
        </div>
      </div>
      <FaqSchema faqs={faqs.map(f => ({ question: f.q, answer: f.a }))} />
    </main>
  );
}
