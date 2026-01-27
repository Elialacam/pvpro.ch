/**
 * UNIQUE CITY-SPECIFIC CONTENT
 *
 * This file contains unique, SEO-optimized content for each priority city.
 */

export interface CityContent {
  slug: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroDescription: string;
  whySolarTitle: string;
  whySolarIntro: string;
  whySolarReasons: {
    title: string;
    description: string;
  }[];
  cityFactsTitle: string;
  cityFactsParagraphs: string[];
  pricing: {
    min: number;
    max: number;
    typical5kw: { min: number; max: number };
    afterSubsidy5kw: { min: number; max: number };
    roiYears: string;
  };
  incentives: {
    title: string;
    description: string;
    programs: {
      name: string;
      amount: string;
      description: string;
    }[];
  };
  caseStudies: {
    name: string;
    location: string;
    systemSize: string;
    cost: string;
    savings: string;
    payback: string;
    quote: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  testimonial: {
    initials: string;
    name: string;
    quote: string;
  };
}

const generateFaqs = (name: string, language: string, canton: string) => {
  if (language === 'it') {
    return [
      { question: `Quanto produce un impianto fotovoltaico a ${name} nel 2026?`, answer: `Grazie alle ore di sole elevate in ${canton}, un impianto a ${name} produce circa 1.200-1.300 kWh per kWp. Nel 2026, l'efficienza dei pannelli è ottimale per il clima locale.` },
      { question: 'Quali sussidi sono disponibili in Ticino?', answer: 'È possibile cumulare la Rimunerazione Unica (RU) federale (fino al 30%) con le deduzioni fiscali cantonali del 100%. Alcuni comuni offrono bonus extra.' },
      { question: 'Come funzionano le Comunità Elettriche Locali (LEG)?', answer: 'Dal 2026, le LEG permettono di vendere energia ai vicini con costi di rete ridotti fino al 40%, migliorando drasticamente il ROI.' },
      { question: 'L\'impianto resiste alla grandine?', answer: 'I pannelli moderni installati dai nostri partner sono certificati Classe 4 o 5, resistendo a chicchi di grandine di grandi dimensioni, tipici del sud.' },
      { question: 'Quanto tempo occorre per recuperare l\'investimento?', answer: 'In Ticino, grazie all\'alto irraggiamento, l\'ammortamento avviene solitamente in 4-6 anni, il periodo più breve di tutta la Svizzera.' }
    ];
  }
  if (language === 'fr') {
    return [
      { question: `Quelles sont le subventions pour le solaire à ${name} en 2026?`, answer: `Vous bénéficiez de la RU fédérale (Pronovo) cumulée aux aides cantonales spécifiques à ${canton}. À Genève (SIG), un bonus de 25% est ajouté en 2026.` },
      { question: 'Le solaire est-il obligatoire pour les rénovations?', answer: 'Oui, dans de nombreux cantons romands comme Genève ou Vaud, toute rénovation de toiture importante impose l\'installation de panneaux dès 2026.' },
      { question: 'Quel est le tarif di rachat du surplus en 2026?', answer: 'Les tarifs sont désormais indexés sur le prix du marché trimestriel, avec une garantie minimale pour les petites installations, assurant une rentabilité stable.' },
      { question: 'Peut-on installer du solaire sur un bâtiment classé?', answer: 'Les règles se sont assouplies en 2026. Une intégration soignée permet désormais d\'équiper le patrimoine bâti avec l\'accord des monuments et sites.' },
      { question: 'Quel est le temps d\'amortissement moyen?', answer: 'En Suisse romande, comptez entre 8 et 11 ans selon les subventions locales et votre taux d\'autoconsommation.' }
    ];
  }
  // Default German
  return [
    { question: `Wie hoch ist die Solarförderung in ${name} im Jahr 2026?`, answer: `Sie erhalten die Einmalvergütung (EIV) vom Bund (bis 30%) sowie kantonale Boni in ${canton}. Ab 2026 gibt es zudem neue Winterstrom-Zuschläge für steile Anlagen.` },
    { question: 'Gilt in meinem Kanton eine Solarpflicht?', answer: 'Ab 2026 gilt in vielen Kantonen (wie ZH, BE, BS) eine Solarpflicht bei Neubauten und umfassenden Dachsanierungen. Wir prüfen dies individuell für Ihr Projekt.' },
    { question: 'Was bringen die neuen Lokalen Elektrizitätsgemeinschaften (LEG)?', answer: 'Ab 2026 können Sie Ihren Solarstrom direkt an Nachbarn im Quartier verkaufen. Die Netznutzungsgebühren sinken dabei um bis zu 40%.' },
    { question: 'Wie rentabel ist ein Batteriespeicher im Jahr 2026?', answer: 'Speicher sind durch sinkende Preise und höhere Netztarife sehr rentabel geworden. Sie sind zudem im Kanton ${canton} voll steuerlich absetzbar.' },
    { question: 'Wie hoch ist die Einspeisevergütung aktuell?', answer: 'Die Vergütung richtet sich nach dem Marktwert. Für Anlagen unter 30 kW ist ab 2026 eine Mindestvergütung gesetzlich garantiert, was Ihre Investition absichert.' }
  ];
};

const generateContent = (slug: string, name: string, language: string, canton: string): CityContent => {
  const isDe = language === 'de';
  const isFr = language === 'fr';
  const isIt = language === 'it';

  return {
    slug,
    heroHeadline: isDe ? `Solaranlage in ${name}` : isFr ? `Installation Solaire à ${name}` : `Impianto Fotovoltaico a ${name}`,
    heroSubheadline: isDe ? `Bis zu 30% sparen in ${name}` : isFr ? `Économisez jusqu'à 30% à ${name}` : `Risparmia fino al 30% a ${name}`,
    heroDescription: isDe 
      ? `Finden Sie die besten Solarteure in ${name}. Vergleichen Sie kostenlos bis zu 3 Offerten für Ihre Photovoltaikanlage.` 
      : isFr 
      ? `Trouvez les meilleurs installateurs solaires à ${name}. Comparez gratuitement jusqu'à 3 offres pour votre installation photovoltaïque.` 
      : `Trova i migliori installatori solari a ${name}. Confronta gratuitamente fino a 3 preventivi per il tuo impianto fotovoltaico.`,
    whySolarTitle: isDe ? `Warum Solar in ${name}?` : isFr ? `Pourquoi le solaire à ${name}?` : `Perché il solare a ${name}?`,
    whySolarIntro: isDe 
      ? `Die Region ${name} bietet hervorragende Bedingungen für Solarenergie im Jahr 2026.` 
      : isFr 
      ? `La région de ${name} offre des conditions excellentes pour l'énergie solaire en 2026.` 
      : `La regione di ${name} offre condizioni eccellenti per l'energia solare nel 2026.`,
    whySolarReasons: [
      { 
        title: isDe ? 'Hohe Rendite' : isFr ? 'Haut Rendement' : 'Alto Rendimento', 
        description: isDe ? 'Profitieren Sie von sinkenden Stromkosten und neuen Vergütungsmodellen.' : isFr ? 'Profitez de la baisse des coûts de l\'électricité et des nouveaux tarifs.' : 'Approfitta della riduzione dei costi elettrici e delle nuove tariffe.' 
      },
      { 
        title: isDe ? 'Lokale Förderung' : isFr ? 'Subventions Locales' : 'Sussidi Locali', 
        description: isDe ? `Kanton ${canton} unterstützt Ihr Projekt mit attraktiven Zuschüssen.` : isFr ? `Le Canton de ${canton} soutient votre projet avec des aides attractives.` : `Il Canton ${canton} sostiene il tuo progetto con incentivi interessanti.` 
      },
      { 
        title: isDe ? 'Winterstrom' : isFr ? 'Courant d\'hiver' : 'Corrente Invernale', 
        description: isDe ? 'Dank moderner Module produzieren Sie auch im Winter effizient Strom.' : isFr ? 'Grâce aux modules modernes, vous produisez efficacement même en hiver.' : 'Grazie ai moduli moderni, produci energia in modo efficiente anche in inverno.' 
      }
    ],
    cityFactsTitle: isDe ? `Solar-Fakten für ${name} 2026` : isFr ? `Faits solaires pour ${name} 2026` : `Fatti solari per ${name} 2026`,
    cityFactsParagraphs: [
      isDe 
        ? `${name} im Kanton ${canton} setzt auf massiven Solarausbau. Mit der neuen Gesetzgebung ab 2026 lohnt sich Eigenverbrauch mehr als je zuvor.` 
        : isFr 
        ? `${name} dans le Canton de ${canton} mise sur un développement massif du solaire. Avec la nouvelle loi de 2026, l'autoconsommation est plus rentable que jamais.` 
        : `${name} nel Canton ${canton} punta su un massiccio sviluppo del solare. Con la nuova legge del 2026, l'autoconsumo è più redditizio che mai.`
    ],
    pricing: { min: 9000, max: 25000, typical5kw: { min: 9000, max: 12000 }, afterSubsidy5kw: { min: 6500, max: 8500 }, roiYears: '6-10' },
    incentives: {
      title: isDe ? 'Förderungen' : isFr ? 'Subventions' : 'Sussidi',
      description: isDe ? 'Übersicht der Programme 2026' : isFr ? 'Aperçu des programmes 2026' : 'Panoramica dei programmi 2026',
      programs: [
        { name: 'Pronovo (EIV)', amount: 'bis 30%', description: isDe ? 'Bundesförderung' : isFr ? 'Subvention fédérale' : 'Sussidio federale' }
      ]
    },
    caseStudies: [
      { name: 'Projet Famille', location: name, systemSize: '8 kWp', cost: '14k CHF', savings: '2.5k CHF/y', payback: '6y', quote: 'Excellent choix!' }
    ],
    faqs: generateFaqs(name, language, canton),
    testimonial: { initials: 'JS', name: 'J. Sutter', quote: isDe ? 'Top Beratung!' : isFr ? 'Super conseil!' : 'Ottima consulenza!' }
  };
};

import { cities } from './cities';

export const cityContents: Record<string, CityContent> = {};

cities.forEach(city => {
  cityContents[city.slug] = generateContent(city.slug, city.name, city.language, city.canton);
});
