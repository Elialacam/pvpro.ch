export type CantonLocale = 'de' | 'fr' | 'it' | 'en';

export interface CantonArea {
  id: string;
  code: string;
  names: Record<CantonLocale, string>;
  paths: Record<CantonLocale, string>;
}

/**
 * The 25 canton areas shown in the localized home-page grids.
 *
 * Basel represents both Basel-Stadt and Basel-Landschaft. Biel/Bienne is
 * intentionally not part of this registry: its existing DE/FR pages remain
 * available, but are kept outside the canton-area grid.
 */
export const cantonAreas: CantonArea[] = [
  {
    id: 'aargau',
    code: 'AG',
    names: { de: 'Aargau', fr: 'Argovie', it: 'Argovia', en: 'Aargau' },
    paths: {
      de: '/solaranlage-aargau',
      fr: '/fr/solaire-argovie',
      it: '/it/fotovoltaico-argovia',
      en: '/en/solar-panels-aargau',
    },
  },
  {
    id: 'appenzell-ausserrhoden',
    code: 'AR',
    names: {
      de: 'Appenzell Ausserrhoden',
      fr: 'Appenzell Rhodes-Extérieures',
      it: 'Appenzello Esterno',
      en: 'Appenzell Ausserrhoden',
    },
    paths: {
      de: '/solaranlage-appenzell-ausserrhoden',
      fr: '/fr/solaire-appenzell-rhodes-exterieures',
      it: '/it/fotovoltaico-appenzello-esterno',
      en: '/en/solar-panels-appenzell-ausserrhoden',
    },
  },
  {
    id: 'appenzell-innerrhoden',
    code: 'AI',
    names: {
      de: 'Appenzell Innerrhoden',
      fr: 'Appenzell Rhodes-Intérieures',
      it: 'Appenzello Interno',
      en: 'Appenzell Innerrhoden',
    },
    paths: {
      de: '/solaranlage-appenzell-innerrhoden',
      fr: '/fr/solaire-appenzell-rhodes-interieures',
      it: '/it/fotovoltaico-appenzello-interno',
      en: '/en/solar-panels-appenzell-innerrhoden',
    },
  },
  {
    id: 'basel',
    code: 'BS/BL',
    names: { de: 'Basel', fr: 'Bâle', it: 'Basilea', en: 'Basel' },
    paths: {
      de: '/solaranlage-basel',
      fr: '/fr/solaire-bale',
      it: '/it/fotovoltaico-basilea',
      en: '/en/solar-panels-basel',
    },
  },
  {
    id: 'bern',
    code: 'BE',
    names: { de: 'Bern', fr: 'Berne', it: 'Berna', en: 'Bern' },
    paths: {
      de: '/solaranlage-bern',
      fr: '/fr/solaire-berne',
      it: '/it/fotovoltaico-berna',
      en: '/en/solar-panels-bern',
    },
  },
  {
    id: 'freiburg',
    code: 'FR',
    names: { de: 'Freiburg', fr: 'Fribourg', it: 'Friburgo', en: 'Fribourg' },
    paths: {
      de: '/solaranlage-freiburg',
      fr: '/fr/solaire-fribourg',
      it: '/it/fotovoltaico-friburgo',
      en: '/en/solar-panels-fribourg',
    },
  },
  {
    id: 'genf',
    code: 'GE',
    names: { de: 'Genf', fr: 'Genève', it: 'Ginevra', en: 'Geneva' },
    paths: {
      de: '/solaranlage-genf',
      fr: '/fr/solaire-geneve',
      it: '/it/fotovoltaico-ginevra',
      en: '/en/solar-panels-geneva',
    },
  },
  {
    id: 'glarus',
    code: 'GL',
    names: { de: 'Glarus', fr: 'Glaris', it: 'Glarona', en: 'Glarus' },
    paths: {
      de: '/solaranlage-glarus',
      fr: '/fr/solaire-glaris',
      it: '/it/fotovoltaico-glarona',
      en: '/en/solar-panels-glarus',
    },
  },
  {
    id: 'graubunden',
    code: 'GR',
    names: { de: 'Graubünden', fr: 'Grisons', it: 'Grigioni', en: 'Grisons' },
    paths: {
      de: '/solaranlage-graubunden',
      fr: '/fr/solaire-grisons',
      it: '/it/fotovoltaico-grigioni',
      en: '/en/solar-panels-grisons',
    },
  },
  {
    id: 'jura',
    code: 'JU',
    names: { de: 'Jura', fr: 'Jura', it: 'Giura', en: 'Jura' },
    paths: {
      de: '/solaranlage-jura',
      fr: '/fr/solaire-jura',
      it: '/it/fotovoltaico-giura',
      en: '/en/solar-panels-jura',
    },
  },
  {
    id: 'luzern',
    code: 'LU',
    names: { de: 'Luzern', fr: 'Lucerne', it: 'Lucerna', en: 'Lucerne' },
    paths: {
      de: '/solaranlage-luzern',
      fr: '/fr/solaire-lucerne',
      it: '/it/fotovoltaico-lucerna',
      en: '/en/solar-panels-lucerne',
    },
  },
  {
    id: 'neuenburg',
    code: 'NE',
    names: { de: 'Neuenburg', fr: 'Neuchâtel', it: 'Neuchâtel', en: 'Neuchâtel' },
    paths: {
      de: '/solaranlage-neuenburg',
      fr: '/fr/solaire-neuchatel',
      it: '/it/fotovoltaico-neuchatel',
      en: '/en/solar-panels-neuchatel',
    },
  },
  {
    id: 'nidwalden',
    code: 'NW',
    names: { de: 'Nidwalden', fr: 'Nidwald', it: 'Nidvaldo', en: 'Nidwalden' },
    paths: {
      de: '/solaranlage-nidwalden',
      fr: '/fr/solaire-nidwald',
      it: '/it/fotovoltaico-nidvaldo',
      en: '/en/solar-panels-nidwalden',
    },
  },
  {
    id: 'obwalden',
    code: 'OW',
    names: { de: 'Obwalden', fr: 'Obwald', it: 'Obvaldo', en: 'Obwalden' },
    paths: {
      de: '/solaranlage-obwalden',
      fr: '/fr/solaire-obwald',
      it: '/it/fotovoltaico-obvaldo',
      en: '/en/solar-panels-obwalden',
    },
  },
  {
    id: 'schaffhausen',
    code: 'SH',
    names: { de: 'Schaffhausen', fr: 'Schaffhouse', it: 'Sciaffusa', en: 'Schaffhausen' },
    paths: {
      de: '/solaranlage-schaffhausen',
      fr: '/fr/solaire-schaffhouse',
      it: '/it/fotovoltaico-sciaffusa',
      en: '/en/solar-panels-schaffhausen',
    },
  },
  {
    id: 'schwyz',
    code: 'SZ',
    names: { de: 'Schwyz', fr: 'Schwytz', it: 'Svitto', en: 'Schwyz' },
    paths: {
      de: '/solaranlage-schwyz',
      fr: '/fr/solaire-schwytz',
      it: '/it/fotovoltaico-svitto',
      en: '/en/solar-panels-schwyz',
    },
  },
  {
    id: 'solothurn',
    code: 'SO',
    names: { de: 'Solothurn', fr: 'Soleure', it: 'Soletta', en: 'Solothurn' },
    paths: {
      de: '/solaranlage-solothurn',
      fr: '/fr/solaire-soleure',
      it: '/it/fotovoltaico-soletta',
      en: '/en/solar-panels-solothurn',
    },
  },
  {
    id: 'st-gallen',
    code: 'SG',
    names: { de: 'St. Gallen', fr: 'Saint-Gall', it: 'San Gallo', en: 'St. Gallen' },
    paths: {
      de: '/solaranlage-st-gallen',
      fr: '/fr/solaire-saint-gall',
      it: '/it/fotovoltaico-san-gallo',
      en: '/en/solar-panels-st-gallen',
    },
  },
  {
    id: 'tessin',
    code: 'TI',
    names: { de: 'Tessin', fr: 'Tessin', it: 'Ticino', en: 'Ticino' },
    paths: {
      de: '/solaranlage-tessin',
      fr: '/fr/solaire-tessin',
      it: '/it/fotovoltaico-ticino',
      en: '/en/solar-panels-ticino',
    },
  },
  {
    id: 'thurgau',
    code: 'TG',
    names: { de: 'Thurgau', fr: 'Thurgovie', it: 'Turgovia', en: 'Thurgau' },
    paths: {
      de: '/solaranlage-thurgau',
      fr: '/fr/solaire-thurgovie',
      it: '/it/fotovoltaico-turgovia',
      en: '/en/solar-panels-thurgau',
    },
  },
  {
    id: 'uri',
    code: 'UR',
    names: { de: 'Uri', fr: 'Uri', it: 'Uri', en: 'Uri' },
    paths: {
      de: '/solaranlage-uri',
      fr: '/fr/solaire-uri',
      it: '/it/fotovoltaico-uri',
      en: '/en/solar-panels-uri',
    },
  },
  {
    id: 'waadt',
    code: 'VD',
    names: { de: 'Waadt', fr: 'Vaud', it: 'Vaud', en: 'Vaud' },
    paths: {
      de: '/solaranlage-waadt',
      fr: '/fr/solaire-vaud',
      it: '/it/fotovoltaico-vaud',
      en: '/en/solar-panels-vaud',
    },
  },
  {
    id: 'wallis',
    code: 'VS',
    names: { de: 'Wallis', fr: 'Valais', it: 'Vallese', en: 'Valais' },
    paths: {
      de: '/solaranlage-wallis',
      fr: '/fr/solaire-valais',
      it: '/it/fotovoltaico-vallese',
      en: '/en/solar-panels-valais',
    },
  },
  {
    id: 'zug',
    code: 'ZG',
    names: { de: 'Zug', fr: 'Zoug', it: 'Zugo', en: 'Zug' },
    paths: {
      de: '/solaranlage-zug',
      fr: '/fr/solaire-zoug',
      it: '/it/fotovoltaico-zugo',
      en: '/en/solar-panels-zug',
    },
  },
  {
    id: 'zuerich',
    code: 'ZH',
    names: { de: 'Zürich', fr: 'Zurich', it: 'Zurigo', en: 'Zurich' },
    paths: {
      de: '/solaranlage-zurich',
      fr: '/fr/solaire-zurich',
      it: '/it/fotovoltaico-zurigo',
      en: '/en/solar-panels-zurich',
    },
  },
];