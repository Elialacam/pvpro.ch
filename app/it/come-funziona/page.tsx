import Link from 'next/link';
import { ChevronRight, FileText, Search, CheckCircle, Clock, ShieldCheck, Euro, Phone } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Come funziona – PVPro.ch | Preventivi solari in 3 passi',
  description: 'Scopri come funziona PVPro: compila il modulo, ricevi fino a 3 preventivi certificati e scegli il miglior installatore. Gratuito e senza impegno.',
  alternates: {
    canonical: 'https://www.pvpro.ch/it/come-funziona',
    languages: {
      'de-CH': 'https://www.pvpro.ch/wie-es-funktioniert',
      'fr-CH': 'https://www.pvpro.ch/fr/comment-ca-marche',
      'en-CH': 'https://www.pvpro.ch/en/how-it-works',
      'it-CH': 'https://www.pvpro.ch/it/come-funziona',
      'x-default': 'https://www.pvpro.ch/wie-es-funktioniert',
    },
  },
};

const steps = [
  {
    number: '1',
    Icon: FileText,
    title: 'Compila il modulo',
    subtitle: 'Meno di 2 minuti',
    description: 'Inserisci i tuoi dati di contatto e indirizzo nel nostro semplice modulo online. Non servono conoscenze tecniche — ti guidiamo passo dopo passo.',
    details: [
      'Nome, telefono ed e-mail',
      'Indirizzo completo del tuo immobile',
      'Nessun account o registrazione richiesta',
      '100% gratuito e senza impegno',
    ],
  },
  {
    number: '2',
    Icon: Search,
    title: 'Troviamo gli installatori certificati',
    subtitle: 'Entro 24–48 ore',
    description: 'Appena riceviamo la tua richiesta, la inoltriamo a fino a 3 installatori solari certificati nella tua regione. Ogni partner della nostra rete è stato verificato in anticipo: certificazioni, referenze e qualità.',
    details: [
      'Fino a 3 preventivi indipendenti',
      'Solo professionisti certificati',
      'Installatori della tua regione',
      'Offerte personalizzate per il tuo tetto',
    ],
  },
  {
    number: '3',
    Icon: CheckCircle,
    title: 'Confronta e scegli',
    subtitle: 'Senza pressioni, senza obblighi',
    description: 'Ricevi le offerte degli installatori direttamente e confronti prezzi, servizi e condizioni con calma. Decidi liberamente se e quale offerta accettare — senza alcuna pressione.',
    details: [
      'Prezzi reali, nessuna offerta civetta',
      'Nessun installatore ha la priorità',
      'Nessun contratto con PVPro',
      'Decisione libera, senza minimo',
    ],
  },
];

const benefits = [
  { Icon: Clock,       title: 'Risparmio di tempo',      text: 'Invece di contattare tu stesso più installatori, PVPro lo fa per te — in meno di 2 minuti.' },
  { Icon: ShieldCheck, title: 'Qualità certificata',      text: 'Solo installatori con certificazioni valide, attestazioni assicurative e referenze positive.' },
  { Icon: Euro,        title: 'Gratuito',                 text: 'Il nostro servizio è 100% gratuito per i proprietari. Ci finanziamo con commissioni degli installatori.' },
  { Icon: Phone,       title: 'Supporto personalizzato',  text: 'Per qualsiasi domanda, il nostro team è disponibile per telefono ed e-mail.' },
];

export default function ComeFunzionaPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-10">
          <Link href="/it" className="hover:text-gray-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-700 font-medium">Come funziona</span>
        </nav>

        {/* Page header */}
        <div className="max-w-3xl mb-20">
          <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Semplice e trasparente</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
            Il miglior preventivo solare in 3 passi
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            PVPro rende il confronto degli impianti solari semplice, veloce e gratuito. Non devi contattare più installatori da solo — lo facciamo noi per te.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-0 mb-24">
          {steps.map((step, i) => {
            const Icon = step.Icon;
            return (
              <div key={step.number} className="relative">
                {i < steps.length - 1 && (
                  <div className="absolute left-9 top-[88px] w-0.5 h-[calc(100%-40px)] bg-gradient-to-b from-orange-200 to-orange-100 hidden sm:block" />
                )}
                <div className="flex flex-col sm:flex-row gap-8 pb-16">
                  <div className="flex-shrink-0 flex flex-col items-center sm:items-start gap-0">
                    <div className="relative w-[72px] h-[72px] rounded-2xl flex items-center justify-center shadow-md" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                      <Icon className="w-8 h-8 text-white" />
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-xs font-semibold text-[#F97316] uppercase tracking-widest mb-1">{step.subtitle}</p>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-5 max-w-xl">{step.description}</p>
                    <ul className="flex flex-col gap-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-center gap-2.5 text-sm text-gray-600">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                            <span className="text-[#F97316] text-[10px] font-bold">✓</span>
                          </span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Perché PVPro?</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">I vantaggi in sintesi</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => {
              const Icon = b.Icon;
              return (
                <div key={b.title} className="rounded-2xl border border-gray-100 p-7 hover:shadow-lg transition-shadow">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                    <Icon className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{b.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ teaser */}
        <div className="rounded-2xl border border-gray-100 p-8 sm:p-10 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Domande frequenti</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { q: 'Il servizio è davvero gratuito?', a: "Sì, al 100%. Ci finanziamo con commissioni degli installatori — senza costi aggiuntivi per te." },
              { q: "Sono obbligato ad accettare un'offerta?", a: 'No. Puoi rifiutare tutti i preventivi senza alcuna conseguenza.' },
              { q: 'Quanto tempo per ricevere i preventivi?', a: 'Di solito entro 24–48 ore dalla tua richiesta.' },
              { q: 'In quali regioni opera PVPro?', a: 'Siamo attivi in tutta la Svizzera, in tutti i 26 cantoni.' },
            ].map((faq) => (
              <div key={faq.q}>
                <p className="font-bold text-gray-900 mb-1 text-sm">{faq.q}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100">
            <Link href="/it/faq" className="text-sm font-semibold text-[#F97316] hover:underline">
              Vedi tutte le FAQ →
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-10 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Inizia gratuitamente ora</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Compila il modulo in meno di 2 minuti e ricevi fino a 3 preventivi da installatori certificati.
          </p>
          <Link
            href="/it/richiesta"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
          >
            Ottieni preventivi gratuiti →
          </Link>
        </div>

      </div>
    </main>
  );
}
