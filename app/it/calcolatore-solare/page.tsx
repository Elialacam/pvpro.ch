import { Metadata } from 'next';
import SolarCalculator from '@/components/SolarCalculator';
import CtaAnfrage from '@/components/CtaAnfrage';
import { Calculator, Zap, TrendingUp, PiggyBank } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Calcolatore solare Svizzera – Calcola costi e rendimento | PVPro',
  description: 'Calcolatore solare gratuito per la Svizzera. Calcola in 30 secondi i costi, il rendimento e l\'ammortamento del tuo impianto solare.',
  alternates: { canonical: 'https://www.pvpro.ch/it/calcolatore-solare' },
};

const benefits = [
  { icon: Calculator, title: 'Calcolo immediato',       description: 'Ottieni in pochi secondi una prima stima per il tuo impianto solare.' },
  { icon: Zap,        title: 'Calcola il rendimento',   description: 'Scopri quanta elettricità puoi produrre con la tua superficie di tetto.' },
  { icon: PiggyBank,  title: 'Comprendi i costi',       description: 'Stima realistica basata sui prezzi del mercato svizzero.' },
  { icon: TrendingUp, title: 'Pianifica l\'ammortamento', description: 'Scopri quando il tuo investimento si sarà ripagato.' },
];

const faqs = [
  { question: 'Quanto è preciso il calcolatore?', answer: "Il nostro calcolatore ti dà un primo orientamento. Si basa su valori medi svizzeri: 6,5 m² per kWp, 950 kWh di produzione per kWp e 2'200 CHF di costi di installazione per kWp. Per un calcolo esatto, raccomandiamo una consulenza professionale in loco." },
  { question: 'Cos\'è il kWp?', answer: 'Il kWp (kilowatt di picco) è l\'unità di misura della potenza nominale di un impianto fotovoltaico. 1 kWp corrisponde a circa 6,5 m² di superficie dei pannelli in Svizzera.' },
  { question: 'Quanta elettricità posso consumare da solo?', answer: 'Senza accumulo puoi usare circa il 25–35% dell\'elettricità tu stesso. Con un sistema di accumulo a batteria, l\'autoconsumo sale a circa il 60–75%.' },
  { question: 'Come ottengo un preventivo preciso?', answer: 'Il calcolatore ti dà una buona prima stima. Per un preventivo esatto, ottieni fino a 3 offerte gratuite da installatori certificati tramite PVPro.' },
];

export default function CalcolatoreSOlarePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative bg-[#0f1f3d] pt-28 pb-16">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Calculator className="w-3.5 h-3.5" />Strumento gratuito
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Calcolatore solare Svizzera
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Calcola in 30 secondi i costi, il rendimento e l'ammortamento del tuo impianto solare.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <SolarCalculator />
        </div>
      </section>

      <section className="py-16" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Cosa impari</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="rounded-2xl bg-white p-7 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                    <Icon className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{b.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Domande frequenti</h2>
            <div className="flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <CtaAnfrage />
        </div>
      </section>
    </main>
  );
}
