import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import TeamSection from '@/components/TeamSection';
import SwissMap from '@/components/SwissMap';
import FAQ from '@/components/FAQ';
import { cantons } from '@/lib/cities';
import { MapPin } from 'lucide-react';

export default function FrenchHomePage() {
  return (
    <>
      <Hero />
      <Testimonials />
      <TeamSection />
      <SwissMap />
      <HowItWorks />
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Installations solaires dans toute la Suisse
            </h2>
            <p className="text-xl text-gray-600">
              Nous mettons en relation avec des installateurs dans tous les cantons suisses
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {cantons.map((canton) => (
              <a
                key={canton.slug}
                href={canton.baseUrl}
                className="group flex items-center gap-2 p-4 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary-50 transition-all duration-200 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors truncate">
                    {canton.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {canton.abbreviation}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <FAQ />
    </>
  );
}
