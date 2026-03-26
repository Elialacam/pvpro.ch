import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import TeamSection from '@/components/TeamSection';
import SwissMap from '@/components/SwissMap';
import BlogSection from '@/components/BlogSection';
import Link from 'next/link';
import { cities } from '@/lib/cities';
import { MapPin } from 'lucide-react';

import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';
import { faqContent } from '@/lib/faqData';

export const metadata: Metadata = {
  title: 'PV Pro - Solaranlagen in der Schweiz vergleichen | Kostenlose Offerten',
  description: 'Vergleichen Sie kostenlos bis zu 3 Offerten für Ihre Photovoltaikanlage in der Schweiz. Sparen Sie Zeit und Geld mit PV Pro.',
};

export default function HomePage() {
  return (
    <>

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Solar Installation",
            "provider": {
              "@type": "Electrician",
              "name": "Solar Installation City"
            },
            "areaServed": {
              "@type": "City",
              "name": "City"
            }
          })
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://pvpro.ch"
              }
            ]
          })
        }}
      />

      <Hero />
      <HowItWorks />
      <Testimonials />
      <TeamSection />
      <SwissMap />

      {/* Cities Section - Internal Linking */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-gray-900 mb-4">
              Solaranlagen in der ganzen Schweiz
            </h2>
            <p className="text-xl text-gray-600">
              Wir vermitteln Solarteure in allen grösseren Schweizer Städten
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {cities.map((city) => {
              let href = '';
              if (city.language === 'fr') {
                href = `/fr/solaire-${city.slug}`;
              } else if (city.language === 'it') {
                href = `/it/fotovoltaico-${city.slug}`;
              } else {
                href = `/solaranlage-${city.slug}`;
              }
              
              return (
                <Link
                  key={city.slug}
                  href={href}
                  className="group flex items-center gap-2 p-4 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary-50 transition-all duration-200 cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-sans font-bold text-gray-900 group-hover:text-primary transition-colors truncate">
                      {city.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {city.canton}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <BlogSection />
      <FaqSchema faqs={faqContent.de.faqs} />
    </>
  );
}
