import { Metadata } from 'next';
import FormContainer from '@/components/MultiStepForm/FormContainer';
import FAQ from '@/components/FAQ';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Impianto Fotovoltaico Lugano - Preventivi Gratuiti | PVPro`,
    description: `Impianto fotovoltaico a Lugano: Confronta gratuitamente i preventivi di installatori certificati.`,
  };
}

export default function Page() {
  const faqs = [
    {
      question: "Perché installare pannelli solari a Lugano ?",
      answer: "Lugano è la città più soleggiata della Svizzera. Con oltre 2100 ore di sole l'anno, il rendimento dei pannelli fotovoltaici è ai massimi livelli nazionali."
    }
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-orange-50 to-primary-50 section-padding text-center">
        <div className="container-custom">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">Impianto Fotovoltaico Lugano</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">Confronta gratuitamente le offerte di installatori certificati nella regione di Lugano.</p>
          <a href="#formular" className="btn-primary text-lg px-8 py-4">Richiedi un preventivo gratuito</a>
        </div>
      </section>
      <section id="formular" className="section-padding">
        <div className="container-custom max-w-4xl"><FormContainer /></div>
      </section>
      <FAQ items={faqs} />
    </>
  );
}
