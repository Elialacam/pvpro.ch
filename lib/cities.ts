export interface Location {
  name: string;
  slug: string;
  canton: string;
  language: 'de' | 'fr' | 'it' | 'en';
  sunshineHours?: number;
  population?: number;
  type: 'city' | 'canton';
  url: string;
}

export type City = Location;

export const locations: Location[] = [
  // Cantons (New Primary Targets)
  { name: 'Zürich', slug: 'zurich', canton: 'ZH', language: 'de', sunshineHours: 1566, type: 'canton', url: '/solaranlage-zurich' },
  { name: 'Bern', slug: 'bern', canton: 'BE', language: 'de', sunshineHours: 1694, type: 'canton', url: '/solaranlage-bern' },
  { name: 'Luzern', slug: 'luzern', canton: 'LU', language: 'de', sunshineHours: 1598, type: 'canton', url: '/solaranlage-luzern' },
  { name: 'Basel', slug: 'basel', canton: 'BS', language: 'de', sunshineHours: 1631, type: 'canton', url: '/solaranlage-basel' },
  { name: 'Aargau', slug: 'aargau', canton: 'AG', language: 'de', sunshineHours: 1605, type: 'canton', url: '/solaranlage-aargau' },
  { name: 'St. Gallen', slug: 'st-gallen', canton: 'SG', language: 'de', sunshineHours: 1522, type: 'canton', url: '/solaranlage-st-gallen' },
  { name: 'Thurgau', slug: 'thurgau', canton: 'TG', language: 'de', sunshineHours: 1644, type: 'canton', url: '/solaranlage-thurgau' },
  { name: 'Solothurn', slug: 'solothurn', canton: 'SO', language: 'de', sunshineHours: 1631, type: 'canton', url: '/solaranlage-solothurn' },
  { name: 'Schwyz', slug: 'schwyz', canton: 'SZ', language: 'de', sunshineHours: 1566, type: 'canton', url: '/solaranlage-schwyz' },
  { name: 'Zug', slug: 'zug', canton: 'ZG', language: 'de', sunshineHours: 1598, type: 'canton', url: '/solaranlage-zug' },
  { name: 'Graubünden', slug: 'graubunden', canton: 'GR', language: 'de', sunshineHours: 1803, type: 'canton', url: '/solaranlage-graubunden' },
  { name: 'Glarus', slug: 'glarus', canton: 'GL', language: 'de', sunshineHours: 1566, type: 'canton', url: '/solaranlage-glarus' },
  { name: 'Schaffhausen', slug: 'schaffhausen', canton: 'SH', language: 'de', sunshineHours: 1644, type: 'canton', url: '/solaranlage-schaffhausen' },
  { name: 'Ticino', slug: 'ticino', canton: 'TI', language: 'it', sunshineHours: 2157, type: 'canton', url: '/it/fotovoltaico-ticino' },
  { name: 'Genève', slug: 'geneve', canton: 'GE', language: 'fr', sunshineHours: 1849, type: 'canton', url: '/fr/solaire-geneve' },
  { name: 'Vaud', slug: 'vaud', canton: 'VD', language: 'fr', sunshineHours: 1821, type: 'canton', url: '/fr/solaire-vaud' },
  { name: 'Fribourg', slug: 'fribourg', canton: 'FR', language: 'fr', sunshineHours: 1720, type: 'canton', url: '/fr/solaire-fribourg' },
  { name: 'Valais', slug: 'valais', canton: 'VS', language: 'fr', sunshineHours: 1803, type: 'canton', url: '/fr/solaire-valais' },
  { name: 'Appenzell', slug: 'appenzell', canton: 'AI/AR', language: 'de', sunshineHours: 1522, type: 'canton', url: '/solaranlage-appenzell' },
  { name: 'Unterwalden', slug: 'unterwalden', canton: 'OW/NW', language: 'de', sunshineHours: 1598, type: 'canton', url: '/solaranlage-unterwalden' }
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find(loc => loc.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return locations.map(loc => loc.slug);
}

// Keep backward compatibility for existing code using "cities"
export const cities = locations;
export const getCityBySlug = getLocationBySlug;
export const getAllCitySlugs = getAllLocationSlugs;
