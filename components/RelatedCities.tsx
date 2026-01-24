import Link from 'next/link';
import { cantons } from '@/lib/cities';
import { MapPin } from 'lucide-react';

interface RelatedCitiesProps {
  currentCantonSlug: string;
}

export default function RelatedCities({ currentCantonSlug }: RelatedCitiesProps) {
  const relatedCantons = cantons
    .filter(c => c.slug !== currentCantonSlug)
    .slice(0, 6);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom max-w-6xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
          Solaranlagen in weiteren Schweizer Kantonen
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedCantons.map((canton) => (
            <Link
              key={canton.slug}
              href={canton.baseUrl}
              className="group card hover:shadow-lg hover:border-primary-200 transition-all duration-200"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors mb-1">
                    {canton.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Kanton {canton.abbreviation}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
