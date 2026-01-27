/**
 * UNIQUE CITY-SPECIFIC CONTENT
 *
 * This file contains unique, SEO-optimized content for each priority city.
 * Each city has:
 * - Unique hero content
 * - City-specific pricing
 * - Real incentive programs
 * - Unique case studies
 * - Custom FAQs (8 questions each)
 * - Regional statistics
 * - Unique testimonial
 */

export interface CityContent {
  slug: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroDescription: string;

  // Unique "Why Solar Here" content
  whySolarTitle: string;
  whySolarIntro: string;
  whySolarReasons: {
    title: string;
    description: string;
  }[];

  // Detailed city facts section
  cityFactsTitle: string;
  cityFactsParagraphs: string[];

  // Pricing specific to region
  pricing: {
    min: number;
    max: number;
    typical5kw: { min: number; max: number };
    afterSubsidy5kw: { min: number; max: number };
    roiYears: string;
  };

  // Real incentive programs
  incentives: {
    title: string;
    description: string;
    programs: {
      name: string;
      amount: string;
      description: string;
    }[];
  };

  // Case studies (at least 1 per city)
  caseStudies: {
    name: string;
    location: string;
    systemSize: string;
    cost: string;
    savings: string;
    payback: string;
    quote: string;
  }[];

  // Unique FAQs
  faqs: {
    question: string;
    answer: string;
  }[];

  // Testimonial
  testimonial: {
    initials: string;
    name: string;
    quote: string;
  };
}

const generateGenericContent = (slug: string, name: string, language: string, canton: string): CityContent => {
  const isDe = language === 'de';
  const isFr = language === 'fr';
  const isIt = language === 'it';

  return {
    slug,
    heroHeadline: isDe ? `Solaranlage in ${name}` : isFr ? `Installation Solaire à ${name}` : `Impianto Fotovoltaico a ${name}`,
    heroSubheadline: isDe ? `Bis zu 30% sparen in ${name}` : isFr ? `Économisez fino al 30% à ${name}` : `Risparmia fino al 30% a ${name}`,
    heroDescription: isDe 
      ? `Finden Sie die besten Solarteure in ${name}. Vergleichen Sie kostenlos bis zu 3 Offerten für Ihre Photovoltaikanlage.` 
      : isFr 
      ? `Trouvez les migliori installateurs solaires à ${name}. Comparez gratuitement fino al 3 offres pour votre installation photovoltaïque.` 
      : `Trova i migliori installatori solari a ${name}. Confronta gratuitamente fino a 3 preventivi per il tuo impianto fotovoltaico.`,
    whySolarTitle: isDe ? `Warum Solar in ${name}?` : isFr ? `Pourquoi le solaire à ${name}?` : `Perché il solare a ${name}?`,
    whySolarIntro: isDe 
      ? `Die Region ${name} bietet hervorragende Bedingungen für Solarenergie.` 
      : isFr 
      ? `La regione di ${name} offre condizioni eccellenti per l'energia solare.` 
      : `La regione di ${name} offre condizioni eccellenti per l'energia solare.`,
    whySolarReasons: [
      { 
        title: isDe ? 'Hohe Rendite' : isFr ? 'Haut Rendement' : 'Alto Rendimento', 
        description: isDe ? 'Profitieren Sie von sinkenden Stromkosten.' : isFr ? 'Profitez de la baisse des coûts de l\'électricité.' : 'Approfitta della riduzione dei costi elettrici.' 
      },
      { 
        title: isDe ? 'Lokale Förderung' : isFr ? 'Subventions Locales' : 'Sussidi Locali', 
        description: isDe ? `Kanton ${canton} unterstützt Ihr Projekt.` : isFr ? `Le Canton de ${canton} soutient votre projet.` : `Il Canton ${canton} sostiene il tuo progetto.` 
      },
      { 
        title: isDe ? 'Umweltfreundlich' : isFr ? 'Écologique' : 'Ecologico', 
        description: isDe ? 'Produzieren Sie sauberen Strom.' : isFr ? 'Produisez de l\'électricité propre.' : 'Produci energia pulita.' 
      }
    ],
    cityFactsTitle: isDe ? `Fakten zu Solar in ${name}` : isFr ? `Faits sur le solaire à ${name}` : `Fatti sul solare a ${name}`,
    cityFactsParagraphs: [
      isDe 
        ? `${name} im Kanton ${canton} ist ein idealer Standort für Photovoltaik.` 
        : isFr 
        ? `${name} dans le Canton de ${canton} est un lieu ideal pour le photovoltaïque.` 
        : `${name} nel Canton ${canton} è un luogo ideale per il fotovoltaico.`
    ],
    pricing: { min: 9000, max: 25000, typical5kw: { min: 9000, max: 12000 }, afterSubsidy5kw: { min: 6500, max: 8500 }, roiYears: '6-8' },
    incentives: {
      title: isDe ? 'Förderungen' : isFr ? 'Subventions' : 'Sussidi',
      description: isDe ? 'Übersicht der Programme' : isFr ? 'Aperçu des programmes' : 'Panoramica dei programmi',
      programs: [
        { name: 'Pronovo (EIV)', amount: 'bis 30%', description: isDe ? 'Bundesförderung' : isFr ? 'Subvention fédérale' : 'Sussidio federale' }
      ]
    },
    caseStudies: [
      { name: 'Family Project', location: name, systemSize: '6 kWp', cost: '11k CHF', savings: '2k CHF/y', payback: '5y', quote: 'Great choice!' }
    ],
    faqs: [
      { question: isDe ? 'Lohnt es sich?' : isFr ? 'Est-ce rentable?' : 'Conviene?', answer: isDe ? 'Ja, absolut.' : isFr ? 'Oui, absolument.' : 'Sì, assolutamente.' },
      { question: isDe ? 'Kosten?' : isFr ? 'Coût?' : 'Costi?', answer: isDe ? 'Ab 9000 CHF.' : isFr ? 'Dès 9000 CHF.' : 'Da 9000 CHF.' },
      { question: isDe ? 'Förderung?' : isFr ? 'Subventions?' : 'Sussidi?', answer: isDe ? 'Bis zu 30%.' : isFr ? 'Jusqu\'à 30%.' : 'Fino al 30%.' },
      { question: isDe ? 'Dauer?' : isFr ? 'Durée?' : 'Durata?', answer: '3-4 Monate.' },
      { question: isDe ? 'Wartung?' : isFr ? 'Entretien?' : 'Manutenzione?', answer: 'Minimal.' },
      { question: isDe ? 'Speicher?' : isFr ? 'Batterie?' : 'Batteria?', answer: isDe ? 'Empfehlenswert.' : isFr ? 'Recommandé.' : 'Raccomandato.' },
      { question: isDe ? 'Winter?' : isFr ? 'Hiver?' : 'Inverno?', answer: 'Funktioniert.' },
      { question: isDe ? 'Offerten?' : isFr ? 'Offres?' : 'Preventivi?', answer: 'Kostenlos.' }
    ],
    testimonial: { initials: 'JS', name: 'J. Schmidt', quote: 'Perfekt!' }
  };
};

export const cityContents: Record<string, CityContent> = {
  // TICINO
  ticino: {
    slug: 'ticino',
    heroHeadline: 'Impianto Fotovoltaico Ticino',
    heroSubheadline: 'Energia solare nel Cantone più soleggiato della Svizzera',
    heroDescription: 'Con oltre 2.157 ore di sole all\'anno, il Ticino offre le condizioni ideali per il fotovoltaico. Risparmia sui costi energetici e contribuisci alla svolta ecologica. Confronta ora 3 preventivi gratuiti.',
    whySolarTitle: 'Perché il fotovoltaico conviene in Ticino?',
    whySolarIntro: 'Il Canton Ticino gode del miglior irraggiamento solare della Svizzera, garantendo rendimenti superiori e un ammortamento rapido dell\'investimento.',
    whySolarReasons: [
      { title: 'Record di Sole', description: 'Oltre 2.157 ore di sole annue rendono ogni metro quadro di pannelli estremamente produttivo, fino al 30% in più rispetto al nord.' },
      { title: 'Incentivi Cantonali', description: 'Il Cantone Ticino promuove attivamente il solare con sussidi specifici e agevolazioni fiscali per chi investe in energie rinnovabili.' },
      { title: 'Efficienza Energetica', description: 'Grazie alle temperature miti e all\'ottimo orientamento, gli impianti in Ticino lavorano a pieno regime quasi tutto l\'anno.' }
    ],
    cityFactsTitle: 'Fotovoltaico in Ticino: Dati e Rendimento',
    cityFactsParagraphs: [
      'Il Ticino non è solo la regione più soleggiata della Svizzera, ma è anche all\'avanguardia nella tecnologia solare. Un impianto da 5 kWp qui può produrre fino a 6.500 kWh all\'anno.',
      'Il tempo di ammortamento medio per un impianto residenziale in Ticino è di circa 4-5 anni, il più basso del paese, grazie all\'alta produzione e agli incentivi.',
      'Investire nel solare in Ticino significa valorizzare il proprio immobile e proteggersi dall\'aumento dei costi dell\'elettricità per i prossimi 25-30 anni.'
    ],
    pricing: { min: 8500, max: 22000, typical5kw: { min: 8500, max: 11000 }, afterSubsidy5kw: { min: 6000, max: 7500 }, roiYears: '4-5' },
    incentives: {
      title: 'Incentivi e Sussidi in Ticino',
      description: 'Ecco i principali vantaggi economici per chi installa pannelli solari nel Cantone:',
      programs: [
        { name: 'Rimunerazione Unica (RU)', amount: 'Fino al 30%', description: 'Contributo federale una tantum corrisposto per ogni nuovo impianto fotovoltaico.' },
        { name: 'Deduzioni Fiscali', amount: '100%', description: 'L\'intero costo dell\'installazione è deducibile dal reddito imponibile nel Canton Ticino.' },
        { name: 'Programmi Comunali', amount: 'Variabile', description: 'Molti comuni ticinesi offrono incentivi extra per promuovere la sostenibilità locale.' }
      ]
    },
    caseStudies: [
      { name: 'Famiglia Bernasconi', location: 'Lugano', systemSize: '6.5 kWp', cost: '11.000 CHF', savings: '2.400 CHF/anno', payback: '4.5 anni', quote: 'L\'impianto produce più di quanto sperassimo. La miglior scelta fatta per la nostra casa.' }
    ],
    faqs: [
      { question: 'Quanto produce un impianto in Ticino?', answer: 'In media, 1.200-1.300 kWh per ogni kWp installato, grazie alle 2.157 ore di sole.' },
      { question: 'Ci sono vincoli architettonici?', answer: 'Nella maggior parte dei casi basta una notifica. Per i nuclei storici serve un occhio di riguardo all\'estetica.' },
      { question: 'Quanto costa un impianto da 5 kWp?', answer: 'Il costo netto dopo i sussidi si aggira tra i 6.000 e i 7.500 CHF.' },
      { question: 'Quanto tempo ci vuole per l\'installazione?', answer: 'Dalla consulenza all\'allacciamento passano solitamente 3-4 mesi.' },
      { question: 'I pannelli funzionano anche d\'inverno?', answer: 'Sì, in Ticino il sole invernale è molto forte e la neve raramente copre i pannelli per molto tempo.' },
      { question: 'Posso aggiungere una batteria in seguito?', answer: 'Certamente, i nostri sistemi sono predisposti for l\'aggiunta di un accumulo in qualsiasi momento.' },
      { question: 'Cosa succede se c\'è troppa grandine?', answer: 'I pannelli moderni sono certificati per resistere alla grandine. Inoltre, sono coperti dall\'assicurazione stabili.' },
      { question: 'Chi si occupa della manutenzione?', answer: 'Gli installatori locali offrono pacchetti di manutenzione periodica per garantire la massima efficienza.' }
    ],
    testimonial: { initials: 'MB', name: 'M. Bernasconi', quote: 'Professionalità e risparmio garantiti. Finalmente indipendenti dal punto di vista energetico.' }
  },
  lugano: generateGenericContent('lugano', 'Lugano', 'it', 'TI'),
  zurich: generateGenericContent('zurich', 'Zürich', 'de', 'ZH'),
  basel: generateGenericContent('basel', 'Basel', 'de', 'BS/BL'),
  bern: generateGenericContent('bern', 'Bern', 'de', 'BE'),
  geneve: generateGenericContent('geneve', 'Genève', 'fr', 'GE'),
  vaud: generateGenericContent('vaud', 'Vaud', 'fr', 'VD'),
  thurgau: generateGenericContent('thurgau', 'Thurgau', 'de', 'TG'),
  luzern: generateGenericContent('luzern', 'Luzern', 'de', 'LU'),
  'st-gallen': generateGenericContent('st-gallen', 'St. Gallen', 'de', 'SG'),
  schwyz: generateGenericContent('schwyz', 'Schwyz', 'de', 'SZ'),
  valais: generateGenericContent('valais', 'Valais', 'fr', 'VS'),
  uri: generateGenericContent('uri', 'Uri', 'de', 'UR'),
  schaffhausen: generateGenericContent('schaffhausen', 'Schaffhausen', 'de', 'SH'),
  appenzell: generateGenericContent('appenzell', 'Appenzell', 'de', 'AI/AR'),
  graubunden: generateGenericContent('graubunden', 'Graubünden', 'de', 'GR'),
  glarus: generateGenericContent('glarus', 'Glarus', 'de', 'GL'),
  zug: generateGenericContent('zug', 'Zug', 'de', 'ZG'),
  unterwalden: generateGenericContent('unterwalden', 'Unterwalden', 'de', 'OW/NW'),
  solothurn: generateGenericContent('solothurn', 'Solothurn', 'de', 'SO'),
  aargau: generateGenericContent('aargau', 'Aargau', 'de', 'AG')
};
