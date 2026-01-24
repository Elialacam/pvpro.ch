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
  { name: 'Bern', slug: 'bern', canton: 'BE', language: 'de', sunshineHours: 1694, population: 133883 },
  { name: 'Luzern', slug: 'luzern', canton: 'LU', language: 'de', sunshineHours: 1598, population: 81691 },
  { name: 'Basel', slug: 'basel', canton: 'BS', language: 'de', sunshineHours: 1631, population: 177654 },
  { name: 'Aargau', slug: 'aarau', canton: 'AG', language: 'de', sunshineHours: 1605, population: 21501 },
  { name: 'St. Gallen', slug: 'st-gallen', canton: 'SG', language: 'de', sunshineHours: 1522, population: 75833 },
  { name: 'Thurgau', slug: 'thurgau', canton: 'TG', language: 'de', sunshineHours: 1605, population: 19755 },
  { name: 'Solothurn', slug: 'solothurn', canton: 'SO', language: 'de', sunshineHours: 1631, population: 16777 },
  { name: 'Schwyz', slug: 'schwyz', canton: 'SZ', language: 'de', sunshineHours: 1598, population: 81691 },
  { name: 'Zug', slug: 'zug', canton: 'ZG', language: 'de', sunshineHours: 1598, population: 30542 },
  { name: 'Graubünden', slug: 'chur', canton: 'GR', language: 'de', sunshineHours: 1803, population: 36336 },
  { name: 'Glarus', slug: 'glarus', canton: 'GL', language: 'de', sunshineHours: 1631, population: 16777 },
  { name: 'Schaffhausen', slug: 'schaffhausen', canton: 'SH', language: 'de', sunshineHours: 1644, population: 36952 },
  { name: 'Ticino', slug: 'lugano', canton: 'TI', language: 'it', sunshineHours: 2157, population: 62315 },
  { name: 'Genève', slug: 'genf', canton: 'GE', language: 'fr', sunshineHours: 1849, population: 201813 },
  { name: 'Vaud', slug: 'lausanne', canton: 'VD', language: 'fr', sunshineHours: 1821, population: 138905 },
  { name: 'Fribourg', slug: 'fribourg', canton: 'FR', language: 'fr', sunshineHours: 1720, population: 38039 },
  { name: 'Valais', slug: 'valais', canton: 'VS', language: 'fr', sunshineHours: 1849, population: 201813 },
  { name: 'Appenzell', slug: 'appenzell', canton: 'AI/AR', language: 'de', sunshineHours: 1522, population: 75833 },
  { name: 'Unterwalden', slug: 'unterwalden', canton: 'OW/NW', language: 'de', sunshineHours: 1598, population: 81691 },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(city => city.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map(city => city.slug);
}
