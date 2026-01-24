import { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';
import { getCityContent } from '@/lib/city-content';
import { notFound } from 'next/navigation';
import FormContainer from '@/components/MultiStepForm/FormContainer';
import FAQ from '@/components/FAQ';

const citySlug = 'appenzell';

export async function generateMetadata(): Promise<Metadata> {
  const city = getCityBySlug(citySlug);
  if (!city) return { title: 'Region nicht gefunden' };
  return {
    title: `Solaranlage Appenzell AI/AR - Kostenlose Offerten | PVPro`,
    description: `Solaranlage in Appenzell: Vergleichen Sie kostenlos Offerten von geprüften Solarteuren.`,
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
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">Solaranlage Appenzell AI/AR</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">Vergleichen Sie kostenlos Angebote von geprüften Solarteuren in Appenzell (AI/AR).</p>
          <a href="#formular" className="btn-primary text-lg px-8 py-4">Jetzt Offerte anfordern</a>
        </div>
      </section>
      <section id="formular" className="section-padding">
        <div className="container-custom max-w-4xl"><FormContainer /></div>
      </section>
      <FAQ />
    </>
  );
}
