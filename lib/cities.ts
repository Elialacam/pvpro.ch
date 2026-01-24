export interface Canton {
  name: string;
  slug: string;
  abbreviation: string;
  language: 'de' | 'fr' | 'it';
  sunshineHours?: number;
  baseUrl: string;
}

export const cantons: Canton[] = [
  { name: 'Zürich', slug: 'zurich', abbreviation: 'ZH', language: 'de', sunshineHours: 1566, baseUrl: '/solaranlage-zurich' },
  { name: 'Bern', slug: 'bern', abbreviation: 'BE', language: 'de', sunshineHours: 1694, baseUrl: '/solaranlage-bern' },
  { name: 'Luzern', slug: 'luzern', abbreviation: 'LU', language: 'de', sunshineHours: 1598, baseUrl: '/solaranlage-luzern' },
  { name: 'Basel', slug: 'basel', abbreviation: 'BS', language: 'de', sunshineHours: 1631, baseUrl: '/solaranlage-basel' },
  { name: 'Aargau', slug: 'aargau', abbreviation: 'AG', language: 'de', sunshineHours: 1605, baseUrl: '/solaranlage-aargau' },
  { name: 'St. Gallen', slug: 'st-gallen', abbreviation: 'SG', language: 'de', sunshineHours: 1522, baseUrl: '/solaranlage-st-gallen' },
  { name: 'Thurgau', slug: 'thurgau', abbreviation: 'TG', language: 'de', sunshineHours: 1600, baseUrl: '/solaranlage-thurgau' },
  { name: 'Solothurn', slug: 'solothurn', abbreviation: 'SO', language: 'de', sunshineHours: 1631, baseUrl: '/solaranlage-solothurn' },
  { name: 'Schwyz', slug: 'schwyz', abbreviation: 'SZ', language: 'de', sunshineHours: 1550, baseUrl: '/solaranlage-schwyz' },
  { name: 'Zug', slug: 'zug', abbreviation: 'ZG', language: 'de', sunshineHours: 1598, baseUrl: '/solaranlage-zug' },
  { name: 'Graubünden', slug: 'graubunden', abbreviation: 'GR', language: 'de', sunshineHours: 1803, baseUrl: '/solaranlage-graubunden' },
  { name: 'Glarus', slug: 'glarus', abbreviation: 'GL', language: 'de', sunshineHours: 1500, baseUrl: '/solaranlage-glarus' },
  { name: 'Schaffhausen', slug: 'schaffhausen', abbreviation: 'SH', language: 'de', sunshineHours: 1644, baseUrl: '/solaranlage-schaffhausen' },
  { name: 'Ticino', slug: 'ticino', abbreviation: 'TI', language: 'it', sunshineHours: 2157, baseUrl: '/it/fotovoltaico-ticino' },
  { name: 'Genève', slug: 'geneve', abbreviation: 'GE', language: 'fr', sunshineHours: 1849, baseUrl: '/fr/solaire-geneve' },
  { name: 'Vaud', slug: 'vaud', abbreviation: 'VD', language: 'fr', sunshineHours: 1821, baseUrl: '/fr/solaire-vaud' },
  { name: 'Fribourg', slug: 'fribourg', abbreviation: 'FR', language: 'fr', sunshineHours: 1720, baseUrl: '/fr/solaire-fribourg' },
  { name: 'Valais', slug: 'valais', abbreviation: 'VS', language: 'fr', sunshineHours: 1900, baseUrl: '/fr/solaire-valais' },
  { name: 'Appenzell', slug: 'appenzell', abbreviation: 'AI/AR', language: 'de', sunshineHours: 1520, baseUrl: '/solaranlage-appenzell' },
  { name: 'Unterwalden', slug: 'unterwalden', abbreviation: 'OW/NW', language: 'de', sunshineHours: 1530, baseUrl: '/solaranlage-unterwalden' },
];

export function getCantonBySlug(slug: string): Canton | undefined {
  return cantons.find(c => c.slug === slug);
}

export function getAllCantonSlugs(): string[] {
  return cantons.map(c => c.slug);
}
