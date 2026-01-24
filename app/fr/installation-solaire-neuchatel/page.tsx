import { Metadata } from 'next';
import FormContainer from '@/components/MultiStepForm/FormContainer';
import FAQ from '@/components/FAQ';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Installation Solaire Neuchâtel - Devis Gratuits | PVPro`,
    description: `Installation solaire à Neuchâtel: Comparez gratuitement les devis d'installateurs certifiés.`,
  };
}

export default function Page() {
  const faqs = [
    {
      question: "Pourquoi installer des panneaux solaires à Neuchâtel ?",
      answer: "Neuchâtel bénéficie d'un excellent ensoleillement. L'installation de panneaux solaires permet de réduire vos factures d'électricité tout en valorisant votre patrimoine immobilier."
    },
    {
      question: "Quelles sont les subventions disponibles à Neuchâtel ?",
      answer: "Les propriétaires à Neuchâtel peuvent bénéficier de la rétribution unique (PRU) de la Confédération, couvrant jusqu'à 30% de l'investissement."
    }
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-primary-50 section-padding text-center">
        <div className="container-custom">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">Installation Solaire Neuchâtel</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">Comparez gratuitement les offres d'installateurs certifiés dans le canton de Neuchâtel.</p>
          <a href="#formular" className="btn-primary text-lg px-8 py-4">Demander un devis gratuit</a>
        </div>
      </section>
      <section id="formular" className="section-padding">
        <div className="container-custom max-w-4xl"><FormContainer /></div>
      </section>
      <FAQ items={faqs} />
    </>
  );
}
