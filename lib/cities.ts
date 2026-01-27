export interface City {
  name: string;
  slug: string;
  canton: string;
  language: 'de' | 'fr' | 'it' | 'en';
  sunshineHours?: number;
  population?: number;
}

export const cities: City[] = [
  { name: 'Zürich', slug: 'zuerich', canton: 'ZH', language: 'de', sunshineHours: 1566, population: 421878 },
  { name: 'Basel', slug: 'basel', canton: 'BS', language: 'de', sunshineHours: 1631, population: 177654 },
  { name: 'Bern', slug: 'bern', canton: 'BE', language: 'de', sunshineHours: 1694, population: 133883 },
  { name: 'Genf', slug: 'genf', canton: 'GE', language: 'fr', sunshineHours: 1849, population: 201813 },
  { name: 'Vaud', slug: 'lausanne', canton: 'VD', language: 'fr', sunshineHours: 1821, population: 138905 },
  { name: 'Winterthur', slug: 'winterthur', canton: 'ZH', language: 'de', sunshineHours: 1566, population: 111851 },
  { name: 'Luzern', slug: 'luzern', canton: 'LU', language: 'de', sunshineHours: 1598, population: 81691 },
  { name: 'St. Gallen', slug: 'st-gallen', canton: 'SG', language: 'de', sunshineHours: 1522, population: 75833 },
  { name: 'Lugano', slug: 'lugano', canton: 'TI', language: 'it', sunshineHours: 2157, population: 62315 },
  { name: 'Biel', slug: 'biel', canton: 'BE', language: 'de', sunshineHours: 1694, population: 55206 },
  { name: 'Thun', slug: 'thun', canton: 'BE', language: 'de', sunshineHours: 1694, population: 43476 },
  { name: 'Köniz', slug: 'koeniz', canton: 'BE', language: 'de', sunshineHours: 1694, population: 41705 },
  { name: 'Schaffhausen', slug: 'schaffhausen', canton: 'SH', language: 'de', sunshineHours: 1644, population: 36952 },
  { name: 'Fribourg', slug: 'fribourg', canton: 'FR', language: 'fr', sunshineHours: 1720, population: 38039 },
  { name: 'Chur', slug: 'chur', canton: 'GR', language: 'de', sunshineHours: 1803, population: 36336 },
  { name: 'Aarau', slug: 'aarau', canton: 'AG', language: 'de', sunshineHours: 1605, population: 21501 },
  { name: 'Zug', slug: 'zug', canton: 'ZG', language: 'de', sunshineHours: 1598, population: 30542 },
  { name: 'Neuchâtel', slug: 'neuchatel', canton: 'NE', language: 'fr', sunshineHours: 1739, population: 33455 },
  { name: 'Solothurn', slug: 'solothurn', canton: 'SO', language: 'de', sunshineHours: 1631, population: 16777 },
  { name: 'Baden', slug: 'baden', canton: 'AG', language: 'de', sunshineHours: 1605, population: 19755 },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(city => city.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map(city => city.slug);
}
