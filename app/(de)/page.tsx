import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import TeamSection from '@/components/TeamSection';
import SwissMap from '@/components/SwissMapLazy';
import BlogSection from '@/components/BlogSection';
import CtaAnfrage from '@/components/CtaAnfrage';
import CantonGrid from '@/components/CantonGrid';

import { Metadata } from 'next';
import { pageMetadata } from '@/lib/pageMetadata';
import FaqSchema from '@/components/FaqSchema';
import { faqContent } from '@/lib/faqData';

export const metadata: Metadata = pageMetadata({
  title: 'Solar-Offerten vergleichen: 3 geprüfte Betriebe | PvPro.ch',
  description: 'Vergleichen Sie kostenlos bis zu drei Offerten von geprüften Schweizer Solarbetrieben für Ihre Solaranlage.',
}, { path: '/', locale: 'de' });

export default function HomePage() {
  return (
    <>

      <Hero />
      <HowItWorks />
      <ClientLogos label="Unsere Partner-Installateure" />
      <TeamSection />
      <SwissMap />
      <Testimonials />

      {/* Cities Section - Internal Linking */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-gray-900 mb-4">
              Solaranlagen in der ganzen Schweiz
            </h2>
            <p className="text-xl text-gray-600">
              Wir vermitteln geprüfte Solarteure in der ganzen Schweiz
            </p>
          </div>

          <CantonGrid locale="de" />
        </div>
      </section>

      <BlogSection />
      <CtaAnfrage />
      <FaqSchema faqs={faqContent.de.faqs} />
    </>
  );
}
