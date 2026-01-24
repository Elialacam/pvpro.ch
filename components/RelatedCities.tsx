import Link from 'next/link';
import { cities, City } from '@/lib/cities';
import { MapPin } from 'lucide-react';

interface RelatedCitiesProps {
  currentCitySlug: string;
  currentCanton: string;
}

export default function RelatedCities({ currentCitySlug, currentCanton }: RelatedCitiesProps) {
  const sameCanton = cities.filter(
    city => city.canton === currentCanton && city.slug !== currentCitySlug
  );

  const otherCities = cities.filter(
    city => city.canton !== currentCanton && city.slug !== currentCitySlug
  );

  const relatedCities = [
    ...sameCanton.slice(0, 3),
    ...otherCities.slice(0, 6 - Math.min(sameCanton.length, 3))
  ].slice(0, 6);

  if (relatedCities.length === 0) return null;

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom max-w-6xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
          Solaranlagen in weiteren Schweizer Staedten
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedCities.map((city) => (
            <Link
              key={city.slug}
              href={`/solaranlage-${city.slug}`}
              className="group card hover:shadow-lg hover:border-primary-200 transition-all duration-200"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors mb-1">
                    {city.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Kanton {city.canton}
                  </p>
                  {city.sunshineHours && (
                    <p className="text-xs text-gray-500 mt-1">
                      {city.sunshineHours} Sonnenstunden/Jahr
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-600 font-semibold transition-colors"
          >
            Alle Schweizer Staedte anzeigen
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
