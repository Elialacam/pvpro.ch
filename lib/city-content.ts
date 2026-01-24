export interface CityContent {
  slug: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroDescription: string;
  whySolarTitle: string;
  whySolarIntro: string;
  whySolarReasons: { title: string; description: string }[];
  cityFactsTitle: string;
  cityFactsParagraphs: string[];
  pricing: { min: number; max: number; typical5kw: { min: number; max: number }; afterSubsidy5kw: { min: number; max: number }; roiYears: string };
  incentives: { title: string; description: string; programs: { name: string; amount: string; description: string }[] };
  caseStudies: { name: string; location: string; systemSize: string; cost: string; savings: string; payback: string; quote: string }[];
  faqs: { question: string; answer: string }[];
  testimonial: { initials: string; name: string; quote: string };
}

export const cityContents: Record<string, CityContent> = {
  zurich: {
    slug: 'zurich',
    heroHeadline: 'Solaranlage Kanton Zürich',
    heroSubheadline: 'Energieautarkie in der Wirtschaftsmetropole',
    heroDescription: 'Zürich setzt auf Solar. Vergleichen Sie jetzt Angebote von geprüften Zürcher Solarteuren.',
    whySolarTitle: 'Warum Solar in Zürich?',
    whySolarIntro: 'Zürich bietet ideale Bedingungen.',
    whySolarReasons: [{ title: 'Hohe Strompreise', description: 'Sparen Sie bares Geld.' }],
    cityFactsTitle: 'Fakten für Zürich',
    cityFactsParagraphs: ['Zürich ist führend.'],
    pricing: { min: 9500, max: 25000, typical5kw: { min: 9500, max: 12500 }, afterSubsidy5kw: { min: 6500, max: 8500 }, roiYears: '4-6' },
    incentives: { title: 'Förderung ZH', description: 'Kantonale Programme.', programs: [{ name: 'EIV', amount: '30%', description: 'Bundesförderung.' }] },
    caseStudies: [{ name: 'Familie Müller', location: 'Zürich', systemSize: '7.2 kWp', cost: '11.8k', savings: '2.6k', payback: '4.5y', quote: 'Top!' }],
    faqs: [{ question: 'Lohnt es sich?', answer: 'Ja!' }],
    testimonial: { initials: 'FM', name: 'Müller', quote: 'Super!' }
  },
  ticino: {
    slug: 'ticino',
    heroHeadline: 'Fotovoltaico Ticino',
    heroSubheadline: '2.157 ore di sole all\'anno',
    heroDescription: 'Il Ticino è il miglior luogo in Svizzera per il fotovoltaico.',
    whySolarTitle: 'Perché il fotovoltaico in Ticino?',
    whySolarIntro: 'Il sole splende di più qui.',
    whySolarReasons: [{ title: 'Sole record', description: 'Più energia prodotta.' }],
    cityFactsTitle: 'Fatti per il Ticino',
    cityFactsParagraphs: ['Il Ticino investe nel futuro.'],
    pricing: { min: 8800, max: 23000, typical5kw: { min: 8500, max: 11500 }, afterSubsidy5kw: { min: 6200, max: 7800 }, roiYears: '4-5' },
    incentives: { title: 'Incentivi Ticino', description: 'Programma Energia.', programs: [{ name: 'EIV', amount: '30%', description: 'Nazionale.' }] },
    caseStudies: [{ name: 'Famiglia Bernasconi', location: 'Lugano', systemSize: '6.8 kWp', cost: '11.2k', savings: '2.4k', payback: '4.5y', quote: 'Perfetto!' }],
    faqs: [{ question: 'Conviene?', answer: 'Sì!' }],
    testimonial: { initials: 'FB', name: 'Bernasconi', quote: 'Eccellente!' }
  },
  geneve: {
    slug: 'geneve',
    heroHeadline: 'Solaire Genève',
    heroSubheadline: 'Genève mise sulla durabilité',
    heroDescription: 'Le canton de Genève offre des conditions excellentes.',
    whySolarTitle: 'Pourquoi le solaire à Genève?',
    whySolarIntro: 'Genève est à la pointe.',
    whySolarReasons: [{ title: 'Soleil', description: 'Haut rendement.' }],
    cityFactsTitle: 'Faits pour Genève',
    cityFactsParagraphs: ['Genève s\'engage.'],
    pricing: { min: 9500, max: 25000, typical5kw: { min: 9500, max: 12500 }, afterSubsidy5kw: { min: 6500, max: 8500 }, roiYears: '4-6' },
    incentives: { title: 'Subventions GE', description: 'Canton de Genève.', programs: [{ name: 'EIV', amount: '30%', description: 'Fédéral.' }] },
    caseStudies: [{ name: 'Famille Dupont', location: 'Genève', systemSize: '5.5 kWp', cost: '10k', savings: '2k', payback: '5y', quote: 'Génial!' }],
    faqs: [{ question: 'Est-ce rentable?', answer: 'Oui!' }],
    testimonial: { initials: 'FD', name: 'Dupont', quote: 'Très bien!' }
  }
};

export function getCityContent(slug: string): CityContent | undefined {
  return cityContents[slug];
}
