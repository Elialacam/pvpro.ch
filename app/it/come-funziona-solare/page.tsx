import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import WieFunktioniertInteractive from '@/components/WieFunktioniertInteractive';
import FaqSchema from '@/components/FaqSchema';

const wfFaqs = [
  { question: 'Come funziona un impianto solare, spiegato semplicemente?', answer: "I moduli solari producono corrente continua dalla luce solare. Un inverter la converte in corrente alternata utilizzabile, che viene consumata direttamente in casa o immessa in rete." },
  { question: 'Qual è la differenza tra fotovoltaico e impianto solare?', answer: "Il fotovoltaico produce elettricità dalla luce. La termosolare invece produce calore (es. per l'acqua calda). Nell'uso quotidiano, «impianto solare» viene spesso usato come sinonimo di fotovoltaico." },
  { question: 'Quanto produce un modulo solare da 800 watt al giorno?', answer: "Un sistema da 800 watt produce in estate circa 2–4 kWh al giorno. In inverno la produzione è notevolmente inferiore, poiché i giorni sono più corti e il sole è più basso." },
  { question: 'Un pannello solare può far funzionare un frigorifero?', answer: "Sì, un pannello solare può far funzionare un frigorifero — ma di solito non in modo permanente da solo. Per questo è necessario un sistema più grande o un accumulo." },
  { question: 'Si può essere autonomi con il fotovoltaico?', answer: "Non completamente. Senza accumulo e in inverno, si rimane parzialmente dipendenti dall'energia di rete. Con un grande accumulo a batteria, tuttavia, si possono raggiungere gradi di autoapprovvigionamento molto elevati." },
  { question: 'Cosa produce un impianto solare in inverno?', answer: "In inverno un impianto solare produce notevolmente meno elettricità — ma non zero. I giorni più corti e gli angoli solari più bassi riducono la produzione, ma l'elettricità viene comunque generata." },
  { question: 'Quanto dura un accumulo da 10 kWh?', answer: "Un accumulo da 10 kWh copre, a seconda del nucleo familiare, la sera e la notte. Con un consumo elevato (es. pompa di calore), si scarica più rapidamente." },
];

export const metadata: Metadata = {
  title: 'Come funziona un impianto solare? Spiegato semplicemente (Svizzera) | PVPro.ch',
  description: 'Come funziona un impianto solare? Spiegazione semplice con esempi, produzione di energia e risposte alle domande frequenti sul fotovoltaico.',
  alternates: {
    canonical: 'https://www.pvpro.ch/it/come-funziona-solare',
    languages: {
      'de-CH': 'https://www.pvpro.ch/wie-funktioniert',
      'fr-CH': 'https://www.pvpro.ch/fr/fonctionnement-solaire',
      'en-CH': 'https://www.pvpro.ch/en/how-solar-works',
      'it-CH': 'https://www.pvpro.ch/it/come-funziona-solare',
      'x-default': 'https://www.pvpro.ch/wie-funktioniert',
    },
  },
};

export default function ComeFunzionaSolarePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative bg-[#0f1f3d] pt-28 pb-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-8">
            <Link href="/it" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Come funziona un impianto solare</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div className="pb-12">
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-4">Tecnologia & conoscenza</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Come funziona un impianto solare? Spiegato semplicemente
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Un impianto solare converte la luce solare direttamente in elettricità — basandosi sull'effetto fotoelettrico. Questa pagina spiega come funziona e cosa può produrre il tuo impianto, passo dopo passo.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/it/richiesta"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
                >
                  Ricevi un preventivo gratuito <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/it/calcolatore-solare"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-white/80 text-sm border border-white/20 hover:border-white/40 transition-colors"
                >
                  Calcola la produzione
                </Link>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden self-center shadow-2xl mb-8">
              <img
                src="/images/wie-funktioniert-solaranlage.webp"
                alt="Come funziona un impianto solare – illustrazione con sole, moduli solari, inverter, accumulo ed elettricità domestica"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro strip ── */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { val: '25–30 anni', label: 'Durata moduli' },
              { val: '22%', label: 'Rend. max.' },
              { val: '9–11k', label: 'kWh/anno per 10 kWp' },
              { val: '0 CHF', label: 'Carburante necessario' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl sm:text-3xl font-bold text-[#F97316]">{s.val}</p>
                <p className="text-xs text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intro text ── */}
      <section className="py-14">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Il principio è semplice
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Un impianto fotovoltaico (FV) si basa sul cosiddetto <strong>effetto fotoelettrico</strong>: quando la luce colpisce determinati materiali, vengono liberati degli elettroni e si genera corrente elettrica.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I moduli solari sul vostro tetto contengono migliaia di queste celle. Convertono la luce solare direttamente e silenziosamente in elettricità — senza parti mobili, senza emissioni, senza rumore.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 border border-gray-100 p-6">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Fotovoltaico vs. solare termico</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#F97316]/20">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Fotovoltaico</p>
                    <p className="text-gray-500 text-xs mt-0.5">Produce <strong>elettricità</strong> dalla luce solare. È ciò che la maggior parte delle persone intende per «impianto solare».</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100">
                  <span className="text-2xl">🌡️</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Solare termico</p>
                    <p className="text-gray-500 text-xs mt-0.5">Produce <strong>calore</strong> dalla luce solare — tipicamente per la preparazione di acqua calda o il riscaldamento.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Interactive section (steps + components + calculator + FAQ) ── */}
      <WieFunktioniertInteractive />

      {/* ── CTA bottom ── */}
      <section className="py-16 bg-[#0f1f3d] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 30% 60%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Pronti per il vostro impianto solare?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
            Confrontate ora gratuitamente i preventivi di installatori certificati nella vostra regione — senza impegno e in pochi minuti.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/it/richiesta"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-xl"
              style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
            >
              Ricevi un preventivo gratuito <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/it/costi-impianto-solare"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white/80 text-sm border border-white/20 hover:border-white/40 transition-colors"
            >
              Calcola i costi
            </Link>
          </div>
        </div>
      </section>

      <FaqSchema faqs={wfFaqs} />
    </main>
  );
}
