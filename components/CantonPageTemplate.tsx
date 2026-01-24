import { Metadata } from 'next';
import { getCantonBySlug } from '@/lib/cities';
import { notFound } from 'next/navigation';
import FormContainer from '@/components/MultiStepForm/FormContainer';
import FAQ from '@/components/FAQ';

interface Props {
  slug: string;
  title: string;
  description: string;
  lang: 'de' | 'fr' | 'it';
}

export default function CantonPage({ slug, title, description, lang }: Props) {
  const canton = getCantonBySlug(slug);
  if (!canton) notFound();

  const ctaText = {
    de: 'Jetzt kostenlose Offerte anfordern',
    fr: 'Demander un devis gratuit',
    it: 'Richiedi un preventivo gratuito'
  }[lang];

  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-primary-50 section-padding text-center">
        <div className="container-custom">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">{title}</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{description}</p>
          <a href="#formular" className="btn-primary text-lg px-8 py-4">{ctaText}</a>
        </div>
      </section>
      <section id="formular" className="section-padding">
        <div className="container-custom max-w-4xl"><FormContainer /></div>
      </section>
      <FAQ />
    </>
  );
}
