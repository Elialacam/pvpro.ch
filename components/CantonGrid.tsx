import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { cantonAreas, type CantonLocale } from '@/lib/cantons';

interface CantonGridProps {
  locale: CantonLocale;
}

export default function CantonGrid({ locale }: CantonGridProps) {
  return (
    <div data-canton-grid={locale} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {cantonAreas.map((area) => (
        <Link
          key={area.id}
          href={area.paths[locale]}
          className="group flex items-center gap-2 p-4 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary-50 transition-all duration-200 cursor-pointer"
        >
          <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="font-sans font-bold text-gray-900 group-hover:text-primary transition-colors truncate">
              {area.names[locale]}
            </div>
            <div className="text-xs text-gray-500">
              {area.code}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}