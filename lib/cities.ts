export interface City {
  name: string;
  slug: string;
  canton: string;
  language: 'de' | 'fr' | 'it' | 'en';
  sunshineHours?: number;
  population?: number;
}

export const cities: City[] = [
  { name: 'Zürich ZH', slug: 'zuerich', canton: 'ZH', language: 'de', sunshineHours: 1566, population: 421878 },
  { name: 'Basel BS', slug: 'basel', canton: 'BS', language: 'de', sunshineHours: 1631, population: 177654 },
  { name: 'Bern BE', slug: 'bern', canton: 'BE', language: 'de', sunshineHours: 1694, population: 133883 },
  { name: 'Genève GE', slug: 'genf', canton: 'GE', language: 'fr', sunshineHours: 1849, population: 201813 },
  { name: 'Vaud VD', slug: 'lausanne', canton: 'VD', language: 'fr', sunshineHours: 1821, population: 138905 },
  { name: 'Winterthur', slug: 'winterthur', canton: 'ZH', language: 'de', sunshineHours: 1566, population: 111851 },
  { name: 'Luzern LU', slug: 'luzern', canton: 'LU', language: 'de', sunshineHours: 1598, population: 81691 },
  { name: 'St. Gallen SG', slug: 'st-gallen', canton: 'SG', language: 'de', sunshineHours: 1522, population: 75833 },
  { name: 'Ticino TI', slug: 'lugano', canton: 'TI', language: 'it', sunshineHours: 2157, population: 62315 },
  { name: 'Biel', slug: 'biel', canton: 'BE', language: 'de', sunshineHours: 1694, population: 55206 },
  { name: 'Thun', slug: 'thun', canton: 'BE', language: 'de', sunshineHours: 1694, population: 43476 },
  { name: 'Köniz', slug: 'koeniz', canton: 'BE', language: 'de', sunshineHours: 1694, population: 41705 },
  { name: 'Schaffhausen SH', slug: 'schaffhausen', canton: 'SH', language: 'de', sunshineHours: 1644, population: 36952 },
  { name: 'Fribourg FR', slug: 'fribourg', canton: 'FR', language: 'fr', sunshineHours: 1720, population: 38039 },
  { name: 'Graubünden GR', slug: 'chur', canton: 'GR', language: 'de', sunshineHours: 1803, population: 36336 },
  { name: 'Aargau AG', slug: 'aarau', canton: 'AG', language: 'de', sunshineHours: 1605, population: 21501 },
  { name: 'Zug ZG', slug: 'zug', canton: 'ZG', language: 'de', sunshineHours: 1598, population: 30542 },
  { name: 'Neuchâtel', slug: 'neuchatel', canton: 'NE', language: 'fr', sunshineHours: 1739, population: 33455 },
  { name: 'Solothurn SO', slug: 'solothurn', canton: 'SO', language: 'de', sunshineHours: 1631, population: 16777 },
  { name: 'Baden', slug: 'baden', canton: 'AG', language: 'de', sunshineHours: 1605, population: 19755 },
  { name: 'Thurgau TG', slug: 'thurgau', canton: 'TG', language: 'de', sunshineHours: 1600, population: 282911 },
  { name: 'Schwyz SZ', slug: 'schwyz', canton: 'SZ', language: 'de', sunshineHours: 1550, population: 162157 },
  { name: 'Glarus GL', slug: 'glarus', canton: 'GL', language: 'de', sunshineHours: 1500, population: 40633 },
  { name: 'Appenzell AI/AR', slug: 'appenzell', canton: 'AI', language: 'de', sunshineHours: 1520, population: 16128 },
  { name: 'Unterwalden OW/NW', slug: 'unterwalden', canton: 'OW', language: 'de', sunshineHours: 1530, population: 38000 },
  { name: 'Valais VS', slug: 'valais', canton: 'VS', language: 'fr', sunshineHours: 2000, population: 348503 },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(city => city.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map(city => city.slug);
}
