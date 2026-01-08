export interface City {
  name: string;
  slug: string;
  canton: string;
  sunshineHours?: number;
  population?: number;
}

export const cities: City[] = [
  { name: 'Zürich', slug: 'zuerich', canton: 'ZH', sunshineHours: 1566, population: 421878 },
  { name: 'Basel', slug: 'basel', canton: 'BS', sunshineHours: 1631, population: 177654 },
  { name: 'Bern', slug: 'bern', canton: 'BE', sunshineHours: 1694, population: 133883 },
  { name: 'Genf', slug: 'genf', canton: 'GE', sunshineHours: 1849, population: 201813 },
  { name: 'Lausanne', slug: 'lausanne', canton: 'VD', sunshineHours: 1821, population: 138905 },
  { name: 'Winterthur', slug: 'winterthur', canton: 'ZH', sunshineHours: 1566, population: 111851 },
  { name: 'Luzern', slug: 'luzern', canton: 'LU', sunshineHours: 1598, population: 81691 },
  { name: 'St. Gallen', slug: 'st-gallen', canton: 'SG', sunshineHours: 1522, population: 75833 },
  { name: 'Lugano', slug: 'lugano', canton: 'TI', sunshineHours: 2157, population: 62315 },
  { name: 'Biel', slug: 'biel', canton: 'BE', sunshineHours: 1694, population: 55206 },
  { name: 'Thun', slug: 'thun', canton: 'BE', sunshineHours: 1694, population: 43476 },
  { name: 'Köniz', slug: 'koeniz', canton: 'BE', sunshineHours: 1694, population: 41705 },
  { name: 'Schaffhausen', slug: 'schaffhausen', canton: 'SH', sunshineHours: 1644, population: 36952 },
  { name: 'Fribourg', slug: 'fribourg', canton: 'FR', sunshineHours: 1720, population: 38039 },
  { name: 'Chur', slug: 'chur', canton: 'GR', sunshineHours: 1803, population: 36336 },
  { name: 'Aarau', slug: 'aarau', canton: 'AG', sunshineHours: 1605, population: 21501 },
  { name: 'Zug', slug: 'zug', canton: 'ZG', sunshineHours: 1598, population: 30542 },
  { name: 'Neuchâtel', slug: 'neuchatel', canton: 'NE', sunshineHours: 1739, population: 33455 },
  { name: 'Solothurn', slug: 'solothurn', canton: 'SO', sunshineHours: 1631, population: 16777 },
  { name: 'Baden', slug: 'baden', canton: 'AG', sunshineHours: 1605, population: 19755 },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(city => city.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map(city => city.slug);
}
