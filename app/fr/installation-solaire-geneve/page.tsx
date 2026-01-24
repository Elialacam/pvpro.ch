import { Metadata } from 'next';
import FormContainer from '@/components/MultiStepForm/FormContainer';
import FAQ from '@/components/FAQ';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Installation Solaire Genève - Devis Gratuits | PVPro`,
    description: `Installation solaire à Genève: Comparez gratuitement les devis d'installateurs certifiés.`,
  };
}

export default function Page() {
  const faqs = [
    {
      question: "Pourquoi choisir l'énergie solaire a Genève ?",
      answer: "Genève est l'un des cantons les plus ensoleillés de Suisse. Produire votre propre électricité vous permet de devenir plus indépendant face aux hausses de prix."
    },
    {
      question: "Quelles aides financières pour le solaire à Genève ?",
      answer: "En plus de la PRU fédérale, Genève propose des programmes d'accompagnement spécifiques pour la transition énergétique."
    }
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-primary-50 section-padding text-center">
        <div className="container-custom">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">Installation Solaire Genève</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">Comparez gratuitement les offres d'installateurs certifiés dans le canton de Genève.</p>
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
