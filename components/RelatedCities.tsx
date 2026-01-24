import Link from 'next/link';
import { MapPin } from 'lucide-react';

const CANTONS = [
  { name: 'Zürich', abbr: 'ZH', slug: 'solaranlage-zurich', lang: 'de' },
  { name: 'Bern', abbr: 'BE', slug: 'solaranlage-bern', lang: 'de' },
  { name: 'Luzern', abbr: 'LU', slug: 'solaranlage-luzern', lang: 'de' },
  { name: 'Basel', abbr: 'BS', slug: 'solaranlage-basel', lang: 'de' },
  { name: 'Aargau', abbr: 'AG', slug: 'solaranlage-aargau', lang: 'de' },
  { name: 'St. Gallen', abbr: 'SG', slug: 'solaranlage-st-gallen', lang: 'de' },
  { name: 'Thurgau', abbr: 'TG', slug: 'solaranlage-thurgau', lang: 'de' },
  { name: 'Solothurn', abbr: 'SO', slug: 'solaranlage-solothurn', lang: 'de' },
  { name: 'Schwyz', abbr: 'SZ', slug: 'solaranlage-schwyz', lang: 'de' },
  { name: 'Zug', abbr: 'ZG', slug: 'solaranlage-zug', lang: 'de' },
  { name: 'Graubünden', abbr: 'GR', slug: 'solaranlage-graubunden', lang: 'de' },
  { name: 'Glarus', abbr: 'GL', slug: 'solaranlage-glarus', lang: 'de' },
  { name: 'Schaffhausen', abbr: 'SH', slug: 'solaranlage-schaffhausen', lang: 'de' },
  { name: 'Ticino', abbr: 'TI', slug: 'fotovoltaico-ticino', lang: 'it' },
  { name: 'Genève', abbr: 'GE', slug: 'solaire-geneve', lang: 'fr' },
  { name: 'Vaud', abbr: 'VD', slug: 'solaire-vaud', lang: 'fr' },
  { name: 'Fribourg', abbr: 'FR', slug: 'solaire-fribourg', lang: 'fr' },
  { name: 'Valais', abbr: 'VS', slug: 'solaire-valais', lang: 'fr' },
  { name: 'Appenzell', abbr: 'AI/AR', slug: 'solaranlage-appenzell', lang: 'de' },
  { name: 'Unterwalden', abbr: 'OW/NW', slug: 'solaranlage-unterwalden', lang: 'de' },
];

interface RelatedCitiesProps {
  currentCitySlug?: string;
  currentCanton?: string;
}

export default function RelatedCities({ currentCitySlug, currentCanton }: RelatedCitiesProps) {
  return (
    <section className="section-padding bg-gray-900 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Regionale Photovoltaik-Angebote
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Finden Sie spezialisierte Installateure in Ihrem Kanton per Klick.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {CANTONS.map((canton) => (
            <Link
              key={canton.abbr}
              href={`/${canton.slug}`}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-white font-semibold group-hover:text-primary transition-colors">
                    {canton.name}
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    {canton.abbr}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
