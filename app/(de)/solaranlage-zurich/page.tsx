
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';
import { cityContents, CityContent } from '@/lib/city-content';
import { notFound } from 'next/navigation';
import UniqueCityPage from '@/components/UniqueCityPage';

// This is a template for the city pages.
const citySlug = 'zurich';

export default function CityPage() {
  const city = getCityBySlug(citySlug);
  if (!city) notFound();
  const content = cityContents[citySlug] || cityContents['zurich'];
  return (
    <>
      <UniqueCityPage city={city} content={content} accentColor="blue" />
      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <ArrowRight className="w-4 h-4 text-[#F97316] flex-shrink-0" />
              <p className="text-gray-600 text-sm">
                Informationen zur{' '}
                <Link href="/bewilligungspflicht-solaranlage-schweiz" className="text-[#F97316] hover:underline font-medium">
                  Bewilligungspflicht im Kanton Zürich
                </Link>
                {' '}— Wann brauchen Sie eine Baugenehmigung und wann genügt eine Meldung?
              </p>
            </div>
            <div className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <ArrowRight className="w-4 h-4 text-[#F97316] flex-shrink-0" />
              <p className="text-gray-600 text-sm">
                <Link href="/foerderungen-kanton-zuerich" className="text-[#F97316] hover:underline font-medium">
                  Alle Förderungen im Kanton Zürich
                </Link>
                {' '}— EIV, kantonale Beiträge, Solarpflicht und steuerliche Abzüge im Detail.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
