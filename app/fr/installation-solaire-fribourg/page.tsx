import { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';
import { getCityContent } from '@/lib/city-content';
import { notFound } from 'next/navigation';
import FormContainer from '@/components/MultiStepForm/FormContainer';
import FAQ from '@/components/FAQ';

const citySlug = 'fribourg';

export async function generateMetadata(): Promise<Metadata> {
  const city = getCityBySlug(citySlug);
  if (!city) return { title: 'Ville non trouvée' };
  return {
    title: `Installation Solaire Fribourg - Devis Gratuits | PVPro`,
    description: `Installation solaire à Fribourg: Comparez gratuitement les devis d'installateurs certifiés.`,
  };
}

export default function Page() {
  const city = getCityBySlug(citySlug);
  const content = getCityContent(citySlug);
  if (!city || !content) notFound();
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-primary-50 section-padding text-center">
        <div className="container-custom">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">Installation Solaire Fribourg</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">Comparez gratuitement les offres d'installateurs certifiés dans la région de Fribourg.</p>
          <a href="#formular" className="btn-primary text-lg px-8 py-4">Demander un devis gratuit</a>
        </div>
      </section>
      <section id="formular" className="section-padding">
        <div className="container-custom max-w-4xl"><FormContainer /></div>
      </section>
      <FAQ items={content.faqs} />
    </>
  );
}
