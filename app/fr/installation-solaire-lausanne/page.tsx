import { Metadata } from 'next';
import FormContainer from '@/components/MultiStepForm/FormContainer';
import FAQ from '@/components/FAQ';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Installation Solaire Lausanne - Devis Gratuits | PVPro`,
    description: `Installation solaire à Lausanne: Comparez gratuitement les devis d'installateurs certifiés.`,
  };
}

export default function Page() {
  const faqs = [
    {
      question: "Quelle est la rentabilité d'une installation solaire à Lausanne ?",
      answer: "À Lausanne, une installation solaire s'amortit généralement en 10 à 12 ans, avec une durée de vie de plus de 25 ans."
    }
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-primary-50 section-padding text-center">
        <div className="container-custom">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">Installation Solaire Lausanne</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">Comparez gratuitement les offres d'installateurs certifiés dans la région de Lausanne.</p>
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
