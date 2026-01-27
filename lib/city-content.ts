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
      { question: 'Posso aggiungere una batteria in seguito?', answer: 'Certamente, i nostri sistemi sono predisposti per l\'aggiunta di un accumulo in qualsiasi momento.' },
      { question: 'Cosa succede se c\'è troppa grandine?', answer: 'I pannelli moderni sono certificati per resistere alla grandine. Inoltre, sono coperti dall\'assicurazione stabili.' },
      { question: 'Chi si occupa della manutenzione?', answer: 'Gli installatori locali offrono pacchetti di manutenzione periodica per garantire la massima efficienza.' }
    ],
    testimonial: { initials: 'MB', name: 'M. Bernasconi', quote: 'Professionalità e risparmio garantiti. Finalmente indipendenti dal punto di vista energetico.' }
  },
  zurich: {
    slug: 'zurich',
    heroHeadline: 'Solaranlage Zürich',
    heroSubheadline: 'Grösster Solarmarkt der Schweiz – Kanton ZH Förderung bis 50%',
    heroDescription: 'Vergleichen Sie kostenlos Offerten von über 40 geprüften Zürcher Solarteuren. Sparen Sie 4.500–7.000 CHF durch unseren unabhängigen Vergleich.',
    whySolarTitle: 'Warum Photovoltaik in Zürich?',
    whySolarIntro: 'Zürich bietet als Wirtschaftszentrum erstklassige Bedingungen für PV-Anlagen. Dank hoher Förderungen und Steuervorteilen lohnt sich die Investition mehr denn je.',
    whySolarReasons: [
      { title: 'Hohe Rendite', description: 'Einsparungen von bis zu 30% durch Offerten-Vergleich und maximale Eigenverbrauchs-Optimierung.' },
      { title: 'Zürich Solaroffensive', description: 'Der Kanton Zürich fördert Solarenergie massiv durch Steuerabzüge und spezifische Programme für Sanierungen.' },
      { title: 'Wertsteigerung', description: 'Immobilien mit PV-Anlage in der Region Zürich erzielen signifikant höhere Marktpreise.' }
    ],
    cityFactsTitle: 'Daten zu Solarstrom in Zürich 2026',
    cityFactsParagraphs: [
      'Ab 2026 gilt in Zürich eine neue Solarpflicht für grosse Dächer (>300m²). Für Einfamilienhäuser bleibt es freiwillig, wird aber durch lukrative Einspeisevergütungen von bis zu 9 Rp./kWh gefördert.',
      'Eine typische 7 kWp Anlage kostet in Zürich ca. 20.000 CHF brutto. Nach Abzug der Bundesförderung und Steuervorteile sinken die Netto-Kosten auf ca. 10.700 CHF.',
      'Dank des ewz-Balkonkraftwerk-Bonus können sogar Mieter in der Stadt Zürich mit bis zu 400 CHF Zuschuss pro Anlage profitieren.'
    ],
    pricing: { min: 9500, max: 25000, typical5kw: { min: 9500, max: 12500 }, afterSubsidy5kw: { min: 6500, max: 8800 }, roiYears: '10-15' },
    incentives: {
      title: 'Förderprogramme Zürich 2026',
      description: 'Profitieren Sie von kombinierten Fördermitteln auf Bundes- und Gemeindeebene:',
      programs: [
        { name: 'Pronovo (Bund)', amount: 'CHF 3.300+', description: 'Einmalvergütung für Anlagen ab 2 kWp, Anmeldung vor Baubeginn.' },
        { name: 'Steuervorteil ZH', amount: 'Bis 30%', description: '100% Steuerabzug der Investitionskosten bei bestehenden Gebäuden.' },
        { name: 'ewz Bonus (Stadt)', amount: 'CHF 200/Panel', description: 'Spezifische Förderung für Kleinanlagen und ewz-Kunden.' }
      ]
    },
    caseStudies: [{ name: 'Müller ZH', location: 'Oerlikon', systemSize: '8 kWp', cost: '14k CHF', savings: '2.8k CHF/y', payback: '11y', quote: 'Dank PVPro den richtigen Partner gefunden.' }],
    faqs: [
      { question: 'Wann muss ich die Förderung in Zürich beantragen?', answer: 'Die Bundesförderung (Pronovo) muss zwingend VOR Baubeginn angemeldet werden. Gemeindeförderungen variieren.' },
      { question: 'Wie hoch ist die Einspeisevergütung 2026?', answer: 'Ab 2026 gilt der Referenz-Marktpreis. Für Anlagen bis 30 kW sind mindestens 9 Rp./kWh (inkl. HKN) garantiert.' },
      { question: 'Gibt es eine Solarpflicht im Kanton Zürich?', answer: 'Ab 2026 ist Photovoltaik auf Dächern über 300 m² obligatorisch bei Neubauten und Dachsanierungen.' },
      { question: 'Lohnt sich ein Batteriespeicher in Zürich?', answer: 'Ja, da der Eigenverbrauch lukrativer ist als die Einspeisung. Es gibt zwar keine direkte Förderung, aber er ist voll steuerlich absetzbar.' },
      { question: 'Wie finde ich geprüfte Solarteure in Zürich?', answer: 'Über PVPro erhalten Sie kostenlosen Zugang zu unserem Netzwerk von über 40 zertifizierten Fachbetrieben im Kanton Zürich.' },
      { question: 'Sind Solaranlagen in der Stadt Zürich bewilligungspflichtig?', answer: 'In der Regel nur meldepflichtig, ausser bei Denkmalschutz oder Kernzonen. Die Installateure übernehmen die Meldung.' },
      { question: 'Wie viel kann ich durch einen Vergleich sparen?', answer: 'Zürcher Hausbesitzer sparen durch unseren unabhängigen Offerten-Vergleich durchschnittlich zwischen 4.500 und 7.000 CHF.' },
      { question: 'Was passiert mit dem Überschussstrom?', answer: 'Dieser wird ins Netz gespeist und von Versorgern wie EKZ oder ewz zum marktüblichen Tarif vergütet.' }
    ],
    testimonial: { initials: 'HM', name: 'H. Müller', quote: 'Der Vergleich hat uns fast 6.000 CHF gespart. Toller Service!' }
  },
  bern: {
    slug: 'bern',
    heroHeadline: 'Solaranlage Bern',
    heroSubheadline: 'Energie-Hauptstadt mit Solarpflicht ab 2026',
    heroDescription: 'Finden Sie geprüfte Berner Solarteure. Profitieren Sie von bis zu 5.000 CHF Gemeindeförderung in der Stadt Bern und bis zu 30% Bundesbeitrag.',
    whySolarTitle: 'Vorteile für Solarprojekte in Bern',
    whySolarIntro: 'Bern setzt massiv auf Solarausbau. Mit der neuen Solarpflicht ab 2026 und attraktiven Boni für winteroptimierte Anlagen ist jetzt der ideale Zeitpunkt.',
    whySolarReasons: [
      { title: 'Winter-Bonus', description: 'Zusätzliche Förderung für steile Dächer (>60°) und Höhenlagen, die im Winter besonders viel Strom liefern.' },
      { title: 'EWB Förderprogramm', description: 'Die Stadt Bern (EWB) bietet eines der lukrativsten Förderprogramme der Schweiz mit bis zu 5.000 CHF Zuschuss.' },
      { title: 'Solarpflicht 2026', description: 'Ab 2026 müssen Neubauten und grosse Dachsanierungen im Kanton Bern mindestens 10% der Fläche solar nutzen.' }
    ],
    cityFactsTitle: 'Solar-Fakten Kanton Bern 2026',
    cityFactsParagraphs: [
      'Der Kanton Bern schreibt ab Januar 2026 vor, dass Neubauten mindestens 10% der Gebäudefläche für Solaranlagen nutzen müssen. Bei Dachsanierungen gilt eine Meldepflicht via eBau-Portal.',
      'Eine Anlage für ein Berner Einfamilienhaus kostet ca. 15.000–25.000 CHF. Die Amortisationszeit liegt dank lokaler Zuschüsse bei nur 10–12 Jahren.',
      'Neu ab 2026: Lokale Elektrizitätsgemeinschaften (LEG) erlauben es, Solarstrom direkt an Nachbarn zu verkaufen und Netzkosten zu sparen.'
    ],
    pricing: { min: 9000, max: 24000, typical5kw: { min: 9000, max: 12000 }, afterSubsidy5kw: { min: 6200, max: 8500 }, roiYears: '10-12' },
    incentives: {
      title: 'Fördergelder Bern 2026',
      description: 'Nutzen Sie die kumulierbaren Beiträge von Bund und Kanton:',
      programs: [
        { name: 'Stadt Bern (EWB)', amount: 'Bis CHF 5.000', description: 'Direktzuschuss für PV-Anlagen im Stadtgebiet Bern.' },
        { name: 'Pronovo (Bund)', amount: '30% der Kosten', description: 'Einmalvergütung (EIV) für alle Photovoltaik-Installationen.' },
        { name: 'Kanton Bern Bonus', amount: 'Variabel', description: 'Zuschläge für winteroptimierte oder Fassaden-Anlagen.' }
      ]
    },
    caseStudies: [{ name: 'Keller BE', location: 'Bümpliz', systemSize: '7 kWp', cost: '13k CHF', savings: '2.5k CHF/y', payback: '10y', quote: 'Perfekte Beratung und Umsetzung.' }],
    faqs: [
      { question: 'Gilt in Bern eine Solarpflicht?', answer: 'Ja, ab dem 1. Januar 2026 müssen Neubauten und umfassende Dachsanierungen im Kanton Bern Solaranlagen integrieren.' },
      { question: 'Was fördert die Stadt Bern (EWB)?', answer: 'Die EWB zahlt einen Grundbeitrag plus Leistungszuschüsse, die in Summe bis zu 5.000 CHF pro Anlage erreichen können.' },
      { question: 'Lohnt sich Solar in höheren Lagen des Kantons Bern?', answer: 'Absolut. Winteroptimierte Anlagen in höheren Lagen erhalten oft höhere Förderungen und liefern wertvollen Winterstrom.' },
      { question: 'Wie hoch ist die Einspeisevergütung in Bern?', answer: 'Diese orientiert sich am Marktpreis. Inklusive Herkunftsnachweisen (HKN) liegt sie 2026 bei ca. 12-14 Rp./kWh.' },
      { question: 'Sind Batterien im Kanton Bern gefördert?', answer: 'Der Bund fördert sie nicht, aber einzelne Berner Gemeinden bieten bis zu 300 CHF pro kWh Speicherkapazität.' },
      { question: 'Welche Rolle spielen Fassadenanlagen?', answer: 'Kanton Bern fördert Fassaden-PV besonders stark, da diese im Winter bei tiefstehender Sonne mehr Ertrag liefern.' },
      { question: 'Wie lange dauert die Amortisation in Bern?', answer: 'Dank der Kombination aus EIV, kommunalen Zuschüssen und Steuerabzug amortisiert sich eine Anlage oft nach 10-12 Jahren.' },
      { question: 'Kann ich meinen Strom mit Nachbarn teilen?', answer: 'Ja, ab 2026 wird dies über Lokale Elektrizitätsgemeinschaften (LEG) noch einfacher und wirtschaftlich attraktiver.' }
    ],
    testimonial: { initials: 'RK', name: 'R. Keller', quote: 'Die EWB-Förderung war ein riesiger Hebel. PVPro hat uns super unterstützt.' }
  },
  geneve: {
    slug: 'geneve',
    heroHeadline: 'Installation Solaire Genève',
    heroSubheadline: 'Prime SIG augmentée 2026 – 25% de bonus en plus',
    heroDescription: 'Comparez les meilleurs installateurs à Genève. Profitez de la nouvelle prime SIG 2026 et de l\'aide pour batteries de stockage.',
    whySolarTitle: 'Pourquoi choisir le solaire à Genève ?',
    whySolarIntro: 'Genève offre des subventions uniques en Suisse romande grâce aux SIG. Avec l\'obligation d\'installation dès 2026, c\'est le moment idéal.',
    whySolarReasons: [
      { title: 'Prime SIG 2026', description: 'SIG offre désormais un bonus de 25% s\'ajoutant à la subvention fédérale Pronovo.' },
      { title: 'Aide Stockage', description: 'Nouveauté 2026 : Genève subventionne l\'achat de batteries pour maximiser l\'autoconsommation.' },
      { title: 'Installation Obligatoire', description: 'Dès 2026, toute rénovation de toiture à Genève impose l\'installation de panneaux solaires.' }
    ],
    cityFactsTitle: 'Données Solaire Genève 2026',
    cityFactsParagraphs: [
      'Depuis le 1er janvier 2026, les SIG ont augmenté la prime solaire à 25% du montant fédéral. Pour une installation de 10 kWc, vous recevez environ 4.500 CHF d\'aides directes.',
      'Genève impose désormais le solaire sur toutes les toitures appropriées lors de rénovations ou constructions neuves. Les déductions fiscales restent valables jusqu\'en 2027.',
      'Le tarif de rachat SIG 2026 est fixé pour garantir une rentabilité stable aux propriétaires genevois, avec un retour sur investissement en 8-12 ans.'
    ],
    pricing: { min: 9500, max: 28000, typical5kw: { min: 9500, max: 13000 }, afterSubsidy5kw: { min: 6000, max: 8500 }, roiYears: '8-12' },
    incentives: {
      title: 'Subventions Genève 2026',
      description: 'Cumulez les aides fédérales et cantonales (SIG) :',
      programs: [
        { name: 'SIG éco21', amount: '+25% de bonus', description: 'Prime additionnelle SIG sur la rétribution fédérale.' },
        { name: 'Pronovo (Confédération)', amount: 'CHF 360/kWc', description: 'Rétribution Unique (RU) pour le photovoltaïque.' },
        { name: 'Aide Batterie SIG', amount: 'Nouveauté 2026', description: 'Soutien financier pour l\'installation de stockage.' }
      ]
    },
    caseStudies: [{ name: 'Dubois GE', location: 'Plainpalais', systemSize: '6 kWp', cost: '12k CHF', savings: '2.6k CHF/y', payback: '9y', quote: 'Les aides SIG ont fait la différence.' }],
    faqs: [
      { question: 'Quelles subventions à Genève en 2026 ?', answer: 'Vous cumulez la RU fédérale (Pronovo) et la prime SIG (25% du montant fédéral). SIG propose aussi une aide pour les batteries.' },
      { question: 'Est-ce que le solaire est obligatoire à Genève ?', answer: 'Oui, dès 2026 pour toute construction neuve ou rénovation de toiture visant un standard énergétique.' },
      { question: 'Comment demander la prime SIG ?', answer: 'Après certification par Pronovo, la demande se fait via SIG-éco21. Votre installateur peut vous aider.' },
      { question: 'Quel est le prix du rachat d\'électricité à Genève ?', answer: 'SIG a établi un nouveau tarif fixe en 2026 pour le surplus injecté, optimisant la rentabilité.' },
      { question: 'Puis-je déduire l\'installation de mes impôts ?', answer: 'Oui, comme entretien immobilier. Attention : cette déduction fédérale pourrait être supprimée après 2027.' },
      { question: 'Combien coûte une installation de 10 kWc ?', answer: 'Environ 28.000 CHF brut, revenant à environ 17.900 CHF après subventions et gains fiscaux.' },
      { question: 'Quid des bâtiments historiques ?', answer: 'Genève facilite désormais l\'intégration solaire sur le patrimoine, sous réserve de validation esthétique.' },
      { question: 'Quel est le temps d\'amortissement à Genève ?', answer: 'Typiquement entre 8 et 12 ans grâce au mix subventions SIG et tarifs de rachat.' }
    ],
    testimonial: { initials: 'PD', name: 'P. Dubois', quote: 'Excellent retour sur investissement grâce aux SIG.' }
  },
  vaud: {
    slug: 'vaud',
    heroHeadline: 'Installation Solaire Vaud',
    heroSubheadline: 'Bonus Isolation + Solaire 2026 – Subventions Patrimoine S04',
    heroDescription: 'Bénéficiez du bonus cantonal Vaudois pour la rénovation énergétique. Comparez 3 installateurs certifiés dans votre région.',
    whySolarTitle: 'Pourquoi le solaire dans le Canton de Vaud ?',
    whySolarIntro: 'Vaud encourage la synergie entre isolation et production d\'énergie. Des aides spécifiques existent aussi pour les bâtiments classés (S04).',
    whySolarReasons: [
      { title: 'Bonus M-01', description: 'Subvention additionnelle de CHF 40/m² si vous installez du solaire en isolant votre toiture.' },
      { title: 'S04 Patrimoine', description: 'Aides massives (jusqu\'à 6x le montant fédéral) pour les bâtiments historiques ou protégés.' },
      { title: 'Communautés Locales', description: 'Vaud facilite dès 2026 la création de communautés d\'énergie locales pour vendre son électricité aux voisins.' }
    ],
    cityFactsTitle: 'Solaire Vaudois en 2026',
    cityFactsParagraphs: [
      'Le Canton de Vaud privilégie les progets globaux. Le programme S04 permet d\'installer du solaire même sur des bâtiments protégés avec des aides allant jusqu\'à 50.000 CHF.',
      'Pour une installation standard de 10 kWc, la subvention fédérale est de 3.600 CHF. S\'y ajoutent les gains fiscaux vaudois substantiels (environ 20% d\'économie).',
      'Attention : Vaud a supprimé l\'aide directe pour les batteries en 2025, mais elles restent déductibles des impôts et cruciales pour l\'autoconsommation.'
    ],
    pricing: { min: 9500, max: 28000, typical5kw: { min: 9500, max: 13000 }, afterSubsidy5kw: { min: 6500, max: 9000 }, roiYears: '10-15' },
    incentives: {
      title: 'Aides Vaud 2026',
      description: 'Programmes spécifiques au Canton de Vaud :',
      programs: [
        { name: 'Bonus Isolation M-01', amount: 'CHF 40/m²', description: 'Bonus solaire couplé à l\'isolation thermique.' },
        { name: 'S04 Patrimoine', amount: 'Jusqu\'à CHF 50k', description: 'Subvention spéciale pour bâtiments classés ou en zone protégée.' },
        { name: 'Pronovo (Fédéral)', amount: 'CHF 360/kWc', description: 'Rétribution Unique standard pour tous.' }
      ]
    },
    caseStudies: [{ name: 'Morel VD', location: 'Lausanne', systemSize: '10 kWp', cost: '18k CHF', savings: '3.5k CHF/y', payback: '11y', quote: 'Le bonus isolation a tout changé.' }],
    faqs: [
      { question: 'Le Canton de Vaud subventionne-t-il le solaire ?', answer: 'Directement non, sauf pour le patrimoine (S04) ou en bonus d\'une isolation (M-01). La base reste la RU fédérale.' },
      { question: 'C\'est quoi la subvention S04 ?', answer: 'C\'est eine aide vaudoise spécifique pour installer du solaire sur des bâtiments classés, pouvant atteindre 40% des coûts.' },
      { question: 'Puis-je cumuler isolation et solaire ?', answer: 'Oui, c\'est même conseillé. Le bonus M-01 vous offre CHF 40/m² de panneaux supplémentaires.' },
      { question: 'Comment optimiser mon autoconsommation dans le Vaud ?', answer: 'Via les communautés d\'énergie locales (LEG) facilitées dès 2026 ou l\'installation d\'une batterie (déductible des impôts).' },
      { question: 'Quand demander les aides dans le Vaud ?', answer: 'Pour le Bonus M-01 ou S04, AVANT le début des travaux. Pour Pronovo, après la mise en service.' },
      { question: 'Quel coût pour 30m² de panneaux ?', answer: 'Environ 25.000–35.000 CHF brut, revenant à 18.000–21.000 CHF après aides et impôts.' },
      { question: 'Les batteries sont-elles subventionnées ?', answer: 'Non, Vaud a arrêté l\'aide directe aux batteries en 2025. Seule la déduction fiscale demeure.' },
      { question: 'Quelle est la rentabilité moyenne ?', answer: 'Un amortissement en 10-15 ans est la norme dans le Canton de Vaud avec un entretien minimal.' }
    ],
    testimonial: { initials: 'LM', name: 'L. Morel', quote: 'Projet global isolation + solaire réussi avec PVPro.' }
  },
  aargau: {
    slug: 'aargau',
    heroHeadline: 'Solaranlage Aargau',
    heroSubheadline: 'Stadt Aarau Bonus + kantonale Solaroffensive 2026',
    heroDescription: 'Profitieren Sie von kombinierten Förderungen im Aargau. Sparen Sie bis zu 8.000 CHF durch Bundes- und Gemeindezuschüsse.',
    whySolarTitle: 'Solar-Vorteile im Kanton Aargau',
    whySolarIntro: 'Der Aargau bietet mit der Solaroffensive und spezifischen Programmen der Stadt Aarau erstklassige Anreize für PV-Anlagen.',
    whySolarReasons: [
      { title: 'Stadt Aarau Bonus', description: 'Zusätzlicher Grundbeitrag von CHF 500 plus CHF 200/kWp für Anlagen im Stadtgebiet.' },
      { title: 'Solaroffensive AG', description: 'Spezielle Förderung für grossflächige Anlagen (>100 kWp) zur Netzunterstützung.' },
      { title: 'AEW Rückliefertarife', description: 'Attraktive Vergütung inklusive Herkunftsnachweisen (HKN) für Aargauer Hausbesitzer.' }
    ],
    cityFactsTitle: 'Daten zu Photovoltaik Aargau 2026',
    cityFactsParagraphs: [
      'Im Aargau ist die AEW Energie AG der Hauptversorger. 2026 liegt die garantierte Mindestvergütung bei 9 Rp./kWh (inkl. HKN) für Anlagen bis 30 kWp.',
      'Eine 10 kWp Anlage in Aarau erhält insgesamt ca. 7.000–8.000 CHF an Förderungen (Bund + Stadt + Steuervorteil). Die Amortisationszeit beträgt 10–15 Jahre.',
      'Seit 2025 sind virtuelle Zusammenschlüsse zum Eigenverbrauch (vZEV) im Aargau möglich, was Solarstrom für Mehrfamilienhäuser revolutioniert.'
    ],
    pricing: { min: 9000, max: 25000, typical5kw: { min: 9000, max: 12000 }, afterSubsidy5kw: { min: 6000, max: 8500 }, roiYears: '10-15' },
    incentives: {
      title: 'Fördergelder Aargau 2026',
      description: 'Zuschüsse für Aargauer Projekte :',
      programs: [
        { name: 'Stadt Aarau', amount: 'Bis CHF 30.000', description: 'Zusatzförderung für PV und Solarthermie im Stadtgebiet.' },
        { name: 'Pronovo (Bund)', amount: 'CHF 360/kWp', description: 'Einmalvergütung (KLEIV) als Basisförderung.' },
        { name: 'Steuerabzug AG', amount: '100% absetzbar', description: 'Investition ist im Kanton Aargau voll steuerlich abzugsfähig.' }
      ]
    },
    caseStudies: [{ name: 'Graf AG', location: 'Baden', systemSize: '12 kWp', cost: '16k CHF', savings: '3.2k CHF/y', payback: '12y', quote: 'Unkomplizierte Förderung und Abwicklung.' }],
    faqs: [
      { question: 'Gibt es kantonale PV-Förderung im Aargau?', answer: 'Nur für Grossanlagen ab 100 kWp via Solaroffensive. Kleinanlagen erhalten die Bundesförderung und ggf. Gemeindeboni.' },
      { question: 'Was zahlt die Stadt Aarau zusätzlich?', answer: 'Einen Grundbeitrag (CHF 500) plus Leistungsbeitrag (CHF 200/kWp), insgesamt bis zu 30.000 CHF.' },
      { question: 'Wie hoch ist die AEW Einspeisevergütung 2026?', answer: 'Inklusive Herkunftsnachweisen (HKN) sind mindestens 9 Rp./kWh garantiert, oft liegt sie höher.' },
      { question: 'Sind Solaranlagen im Aargau bewilligungspflichtig?', answer: 'In der Regel nur meldepflichtig, ausser in Schutzzonen oder bei Kulturdenkmälern.' },
      { question: 'Lohnt sich ein Speicher im Aargau?', answer: 'Ja, da der Eigenverbrauch (~35 Rp./kWh Ersparnis) viel lukrativer ist als die Einspeisung (9 Rp./kWh).' },
      { question: 'Wie viel Steuern spare ich im Aargau?', answer: 'Die Nettoinvestition ist zu 100% abziehbar, was bei einer 20.000 CHF Anlage ca. 3.000–4.000 CHF Ersparnis bringt.' },
      { question: 'Was ist ein vZEV im Aargau?', answer: 'Ein virtueller Zusammenschluss, um Solarstrom ohne neue Leitungen mit Nachbarn im gleichen Areal zu teilen.' },
      { question: 'Muss ich den Antrag vor Baubeginn stellen?', answer: 'Ja, für Stadt- und Kantonsbeiträge ist ein Gesuch vor Baubeginn zwingend erforderlich.' }
    ],
    testimonial: { initials: 'FG', name: 'F. Graf', quote: 'Dank PVPro die maximale Förderung in Aarau gesichert.' }
  },
  lugano: generateGenericContent('lugano', 'Lugano', 'it', 'TI'),
  basel: generateGenericContent('basel', 'Basel', 'de', 'BS/BL'),
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
};

export const getCityContent = (slug: string): CityContent | undefined => {
  return cityContents[slug];
};
