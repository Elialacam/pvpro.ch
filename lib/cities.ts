export interface City {
  name: string;
  slug: string;
  canton: string;
  language: 'de' | 'fr' | 'it' | 'en';
  sunshineHours?: number;
  population?: number;
}

export const cities: City[] = [
  { name: 'Zürich', slug: 'zurich', canton: 'ZH', language: 'de' },
  { name: 'Basel', slug: 'basel', canton: 'BS/BL', language: 'de' },
  { name: 'Bern', slug: 'bern', canton: 'BE', language: 'de' },
  { name: 'Genève', slug: 'geneve', canton: 'GE', language: 'fr' },
  { name: 'Vaud', slug: 'vaud', canton: 'VD', language: 'fr' },
  { name: 'Thurgau', slug: 'thurgau', canton: 'TG', language: 'de' },
  { name: 'Luzern', slug: 'luzern', canton: 'LU', language: 'de' },
  { name: 'St. Gallen', slug: 'st-gallen', canton: 'SG', language: 'de' },
  { name: 'Ticino', slug: 'ticino', canton: 'TI', language: 'it' },
  { name: 'Schwyz', slug: 'schwyz', canton: 'SZ', language: 'de' },
  { name: 'Valais', slug: 'valais', canton: 'VS', language: 'fr' },
  { name: 'Uri', slug: 'uri', canton: 'UR', language: 'de' },
  { name: 'Schaffhausen', slug: 'schaffhausen', canton: 'SH', language: 'de' },
  { name: 'Appenzell', slug: 'appenzell', canton: 'AI/AR', language: 'de' },
  { name: 'Graubünden', slug: 'graubunden', canton: 'GR', language: 'de' },
  { name: 'Glarus', slug: 'glarus', canton: 'GL', language: 'de' },
  { name: 'Zug', slug: 'zug', canton: 'ZG', language: 'de' },
  { name: 'Unterwalden', slug: 'unterwalden', canton: 'OW/NW', language: 'de' },
  { name: 'Solothurn', slug: 'solothurn', canton: 'SO', language: 'de' },
  { name: 'Aargau', slug: 'aargau', canton: 'AG', language: 'de' },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(city => city.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map(city => city.slug);
}
