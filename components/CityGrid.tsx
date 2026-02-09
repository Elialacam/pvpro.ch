'use client';

import { MapPin } from 'lucide-react';

interface City {
  name: string;
  canton: string;
  slug: string;
}

interface CityGridProps {
  cities: City[];
}

export default function CityGrid({ cities }: CityGridProps) {
  const scrollToForm = () => {
    const formElement = document.getElementById('formular');
    if (formElement) {
      const elementPosition = formElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - (window.innerHeight / 2) + (formElement.offsetHeight / 2);
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {cities.map((city) => (
        <button
          key={city.slug}
          onClick={scrollToForm}
          className="group flex items-center gap-2 p-4 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary-50 transition-all duration-200 cursor-pointer text-left w-full"
        >
          <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="font-display font-semibold text-gray-900 group-hover:text-primary transition-colors truncate">
              {city.name}
            </div>
            <div className="text-xs text-gray-500">
              {city.canton}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
