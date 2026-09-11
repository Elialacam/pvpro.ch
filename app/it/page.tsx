import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import SwissMap from '@/components/SwissMapLazy';
import TeamSection from '@/components/TeamSection';
import BlogSection from '@/components/BlogSection';
import CtaAnfrage from '@/components/CtaAnfrage';
import FAQ from '@/components/FAQ';
import FaqSchema from '@/components/FaqSchema';
import { Metadata } from 'next';
import { pageMetadata } from '@/lib/pageMetadata';
import { faqContent } from '@/lib/faqData';
import CantonGrid from '@/components/CantonGrid';

export const metadata: Metadata = pageMetadata({
  title: 'Preventivi fotovoltaico: 3 ditte verificate | PvPro.ch',
  description: 'Confronta gratuitamente fino a tre preventivi da installatori fotovoltaici certificati in Svizzera.',
}, { path: '/it', locale: 'it' });

export default function ItalianHomePage() {
  return (
    <>
      <FaqSchema faqs={faqContent.it.faqs} />

      <Hero />
      <HowItWorks />
      <ClientLogos label="I nostri installatori partner" />
      <TeamSection />
      <SwissMap />
      <Testimonials />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-gray-900 mb-4">
              Impianti fotovoltaici nei Cantoni svizzeri
            </h2>
            <p className="text-xl text-gray-600">
              Troviamo installatori verificati in tutta la Svizzera
            </p>
          </div>

          <CantonGrid locale="it" />
        </div>
      </section>

      <BlogSection locale="it" />
      <FAQ items={faqContent.it.faqs} />
      <CtaAnfrage />
    </>
  );
}
