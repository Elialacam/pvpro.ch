export interface City {
  name: string;
  slug: string;
  canton: string;
  language: 'de' | 'fr' | 'it' | 'en';
  sunshineHours: number;
  population?: number;
}

export const cities: City[] = [
  { name: 'Zürich', slug: 'zurich', canton: 'ZH', language: 'de', sunshineHours: 1566 },
  { name: 'Basel', slug: 'basel', canton: 'BS/BL', language: 'de', sunshineHours: 1631 },
  { name: 'Bern', slug: 'bern', canton: 'BE', language: 'de', sunshineHours: 1694 },
  { name: 'Genève', slug: 'geneve', canton: 'GE', language: 'fr', sunshineHours: 1849 },
  { name: 'Vaud', slug: 'vaud', canton: 'VD', language: 'fr', sunshineHours: 1821 },
  { name: 'Thurgau', slug: 'thurgau', canton: 'TG', language: 'de', sunshineHours: 1566 },
  { name: 'Luzern', slug: 'luzern', canton: 'LU', language: 'de', sunshineHours: 1598 },
  { name: 'St. Gallen', slug: 'st-gallen', canton: 'SG', language: 'de', sunshineHours: 1522 },
  { name: 'Ticino', slug: 'ticino', canton: 'TI', language: 'it', sunshineHours: 2157 },
  { name: 'Schwyz', slug: 'schwyz', canton: 'SZ', language: 'de', sunshineHours: 1694 },
  { name: 'Valais', slug: 'valais', canton: 'VS', language: 'fr', sunshineHours: 1849 },
  { name: 'Uri', slug: 'uri', canton: 'UR', language: 'de', sunshineHours: 1694 },
  { name: 'Schaffhausen', slug: 'schaffhausen', canton: 'SH', language: 'de', sunshineHours: 1644 },
  { name: 'Appenzell', slug: 'appenzell', canton: 'AI/AR', language: 'de', sunshineHours: 1720 },
  { name: 'Graubünden', slug: 'graubunden', canton: 'GR', language: 'de', sunshineHours: 1803 },
  { name: 'Glarus', slug: 'glarus', canton: 'GL', language: 'de', sunshineHours: 1605 },
  { name: 'Zug', slug: 'zug', canton: 'ZG', language: 'de', sunshineHours: 1598 },
  { name: 'Unterwalden', slug: 'unterwalden', canton: 'OW/NW', language: 'de', sunshineHours: 1739 },
  { name: 'Solothurn', slug: 'solothurn', canton: 'SO', language: 'de', sunshineHours: 1631 },
  { name: 'Aargau', slug: 'aargau', canton: 'AG', language: 'de', sunshineHours: 1605 },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(city => city.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map(city => city.slug);
}
