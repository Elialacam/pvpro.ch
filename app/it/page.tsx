import Hero from '@/components/Hero';
import SolarForm from '@/components/SolarForm';
import HowItWorks from '@/components/HowItWorks';
import SwissMap from '@/components/SwissMap';
import Testimonials from '@/components/Testimonials';
import TeamSection from '@/components/TeamSection';
import FAQ from '@/components/FAQ';
import { cantons } from '@/lib/cities';
import { MapPin } from 'lucide-react';

export default function ItalianHomePage() {
  return (
    <>
      <Hero />
      <div id="formular">
        <SolarForm />
      </div>
      <HowItWorks />
      <SwissMap />
      <Testimonials />
      <TeamSection />
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Impianti fotovoltaici in tutta la Svizzera
            </h2>
            <p className="text-xl text-gray-600">
              Ti mettiamo in contatto con installatori in tutti i cantoni svizzeri
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
