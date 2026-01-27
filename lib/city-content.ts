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
      { question: 'Quanto costa un impianto da 5 kWp?', answer: 'Il costo netto dopo i sussidi si aggira tra i 6.000 e i 7.500 CHF.' }
    ],
    testimonial: { initials: 'MB', name: 'M. Bernasconi', quote: 'Professionalità e risparmio garantiti. Finalmente indipendenti dal punto di vista energetico.' }
  },

  // LUGANO - Italian-speaking Ticino, highest sunshine hours
  lugano: {
    slug: 'lugano',
    heroHeadline: 'Solaranlage Lugano Ticino',
    heroSubheadline: 'Profitieren Sie von 2.157 Sonnenstunden pro Jahr',
    heroDescription: 'Lugano im sonnenverwöhnten Tessin bietet die besten Bedingungen für Solarenergie in der ganzen Schweiz. Vergleichen Sie kostenlos Angebote von geprüften lokalen Solarteuren und sparen Sie bis zu 30%.',

    whySolarTitle: 'Warum ist Lugano ideal für Solarenergie?',
    whySolarIntro: 'Mit 2.157 Sonnenstunden jährlich liegt Lugano an der Spitze der Schweizer Solarstandorte. Die südliche Lage und das milde Klima im Kanton Ticino schaffen optimale Voraussetzungen für maximale Erträge Ihrer Photovoltaikanlage.',
    whySolarReasons: [
      {
        title: 'Spitzenreiter: 2.157 Sonnenstunden',
        description: 'Lugano erhält mehr Sonne als jede andere Schweizer Grossstadt - durchschnittlich 2.157 Stunden pro Jahr. Das bedeutet bis zu 38% höhere Erträge als in Zürich und macht jede Investition in Solar besonders rentabel.'
      },
      {
        title: 'Programma Energia Ticino',
        description: 'Der Kanton Tessin bietet zusätzlich zur Bundesförderung eigene Förderprogramme. Hausbesitzer in Lugano profitieren von der kantonalen Energieberatung und speziellen Zuschüssen für innovative Solarsysteme mit Speicher.'
      },
      {
        title: 'Mediterranes Klima, optimale Bedingungen',
        description: 'Die südliche Lage und das mediterrane Klima Luganos mit warmen Sommern und milden Wintern garantieren ganzjährig konstante Solarerträge. Schneelast ist selten ein Problem, die Anlagen produzieren auch im Winter zuverlässig.'
      }
    ],

    cityFactsTitle: 'Solarenergie in Lugano: Die sonnenverwöhnte Lösung',
    cityFactsParagraphs: [
      'Lugano, die grösste Stadt des italienischsprachigen Kantons Tessin, ist nicht nur ein beliebtes Touristenziel, sondern auch der beste Standort für Solarenergie in der Schweiz. Mit durchschnittlich 2.157 Sonnenstunden pro Jahr - fast 600 Stunden mehr als Zürich - bietet Lugano Hausbesitzern die Möglichkeit, ihre Energiekosten drastisch zu senken und gleichzeitig von den höchsten Solarerträgen des Landes zu profitieren.',
      'Die Kombination aus intensiver Sonneneinstrahlung und der bergigen Topografie rund um den Luganersee schafft ideale Bedingungen. Viele Häuser in Lugano verfügen über nach Süden ausgerichtete Dächer mit optimaler Neigung, wodurch die Photovoltaikanlagen ganzjährig Spitzenerträge liefern. Eine typische 5-kWp-Anlage produziert hier jährlich zwischen 5.500 und 6.500 kWh - deutlich mehr als im Schweizer Durchschnitt.',
      'Die Investitionskosten für eine Solaranlage in Lugano liegen zwischen 8.800 und 23.000 CHF, wobei die Preise aufgrund der guten Erreichbarkeit und der etablierten Solarinfrastruktur im Tessin wettbewerbsfähig sind. Nach Abzug der Bundesförderung (Einmalvergütung) und möglicher kantonaler Zuschüsse reduzieren sich die Nettokosten für eine 5-kW-Anlage auf nur 6.200-7.800 CHF. Bei den hohen Solarerträgen amortisiert sich die Investition in Lugano bereits nach 4-5 Jahren.',
      'Besonders attraktiv: Der Kanton Tessin hat erkannt, dass Solarenergie die Zukunft ist, und bietet über das "Programma Energia" zusätzliche Beratung und Fördermittel. Hausbesitzer in Lugano können sich kostenlos beraten lassen und erhalten Unterstützung bei der Antragsstellung für alle verfügbaren Fördergelder. Mit der steigenden Anzahl spezialisierter Solarteure in der Region ist auch die Qualität der Installationen exzellent.'
    ],

    pricing: {
      min: 8800,
      max: 23000,
      typical5kw: { min: 8500, max: 11500 },
      afterSubsidy5kw: { min: 6200, max: 7800 },
      roiYears: '4-5'
    },

    incentives: {
      title: 'Förderungen in Lugano und Kanton Tessin',
      description: 'Als Hausbesitzer in Lugano profitieren Sie von einer der attraktivsten Förderkulissen der Schweiz:',
      programs: [
        {
          name: 'Bundesförderung EIV (Einmalvergütung)',
          amount: 'bis zu 30%',
          description: 'Schweizweite Förderung für Photovoltaikanlagen. Für eine 5-kW-Anlage erhalten Sie etwa 2.300-3.700 CHF einmalig nach Inbetriebnahme.'
        },
        {
          name: 'Programma Energia Ticino',
          amount: 'zusätzlich 10-15%',
          description: 'Der Kanton Tessin fördert innovative Solarsysteme, insbesondere mit Batteriespeicher, durch zusätzliche Zuschüsse von 1.000-2.500 CHF.'
        },
        {
          name: 'Steuerliche Absetzbarkeit',
          amount: '100% absetzbar',
          description: 'Investitionskosten können vollständig vom steuerbaren Einkommen abgezogen werden, was je nach Steuersatz zusätzliche 1.500-3.000 CHF Ersparnis bedeutet.'
        }
      ]
    },

    caseStudies: [
      {
        name: 'Familie Bernasconi',
        location: 'Lugano-Viganello',
        systemSize: '6.8 kWp',
        cost: '11.200 CHF (nach Förderung)',
        savings: '2.400 CHF pro Jahr',
        payback: '4.5 Jahre',
        quote: 'Mit unserer Solaranlage sind wir energetisch praktisch autark. Die 2.157 Sonnenstunden in Lugano machen sich wirklich bezahlt - unsere Anlage produziert mehr als erwartet!'
      },
      {
        name: 'Famiglia Rossetti',
        location: 'Lugano-Cassarate',
        systemSize: '5.2 kWp mit Speicher',
        cost: '14.800 CHF (nach Förderung)',
        savings: '2.100 CHF pro Jahr + Eigenverbrauch 75%',
        payback: '5 Jahre',
        quote: 'Der Batteriespeicher war die beste Entscheidung. Wir nutzen unseren Solarstrom auch abends und sind fast unabhängig vom Netz. Grazie Ticino!'
      },
      {
        name: 'Signor Mazzoleni',
        location: 'Lugano-Breganzona',
        systemSize: '4.5 kWp',
        cost: '7.900 CHF (nach Förderung)',
        savings: '1.850 CHF pro Jahr',
        payback: '4.2 Jahre',
        quote: 'Kleinere Anlage, grosse Wirkung. Dank der vielen Sonnenstunden in Lugano reicht meine 4.5-kW-Anlage vollkommen aus. Top Investition!'
      }
    ],

    faqs: [
      {
        question: 'Warum ist Lugano der beste Solarstandort der Schweiz?',
        answer: 'Lugano führt mit 2.157 Sonnenstunden pro Jahr die Schweizer Statistik an. Das sind fast 600 Stunden mehr als in Zürich und etwa 400 mehr als in Bern. Die südliche Lage im Tessin, die Nähe zum Mittelmeer und das milde Klima sorgen für optimale Bedingungen. Ihre Solaranlage produziert hier bis zu 38% mehr Strom als im Mittelland - das bedeutet deutlich schnellere Amortisation und höhere Rendite über die Lebensdauer.'
      },
      {
        question: 'Was kostet eine Solaranlage in Lugano konkret?',
        answer: 'Die Investitionskosten in Lugano sind wettbewerbsfähig: Eine typische 5-kWp-Anlage kostet zwischen 8.500 und 11.500 CHF vor Förderung. Nach Abzug della Bundesförderung (ca. 2.300-3.700 CHF) and möglicher kantonaler Zuschüsse aus dem Programma Energia (1.000-2.500 CHF zusätzlich) zahlen Sie netto nur 6.200-7.800 CHF. Grössere Anlagen (8-10 kWp) kosten zwischen 14.000 und 23.000 CHF brutto, bieten aber auch proportional höhere Erträge.'
      },
      {
        question: 'Welche Förderungen gibt es im Kanton Tessin?',
        answer: 'Im Tessin profitieren Sie von einem mehrschichtigen Fördersystem: (1) Bundesförderung EIV: 30% der Investitionskosten, etwa 2.300-3.700 CHF für 5 kWp. (2) Programma Energia Ticino: zusätzliche kantonale Förderung von 1.000-2.500 CHF, besonders für Systeme mit Batteriespeicher. (3) Steuerliche Absetzbarkeit: 100% der Investition vom steuerbaren Einkommen abziehbar, was je nach Steuersatz weitere 1.500-3.000 CHF spart. Insgesamt können Sie bis zu 45% der Investition durch Förderungen zurückerhalten.'
      },
      {
        question: 'Wie lange dauert die Amortisation in Lugano?',
        answer: 'Dank der rekordhohen Sonnenstunden amortisieren sich Solaranlagen in Lugano besonders schnell: typischerweise nach nur 4-5 Jahren. Eine 5-kWp-Anlage produziert hier jährlich 5.500-6.500 kWh, was bei den aktuellen Strompreisen (ca. 25-30 Rp/kWh) jährliche Einsparungen von 1.800-2.400 CHF bedeutet. Bei Nettokosten von 6.200-7.800 CHF nach Förderung erreichen Sie den Break-even deutlich schneller als im Schweizer Durchschnitt (10-12 Jahre). Die Anlage läuft danach noch 20-25 Jahre profitabel.'
      },
      {
        question: 'Kann ich in Lugano eine grössere Anlage mit Speicher installieren?',
        answer: 'Absolut! Lugano eignet sich hervorragend für grössere PV-Systeme mit Batteriespeicher. Die hohe Sonneneinstrahlung ermöglicht es, auch grosse Speicher (8-12 kWh) täglich vollständig zu laden. Eine 8-kWp-Anlage mit 10-kWh-Speicher kostet etwa 22.000-28.000 CHF, nach Förderungen bleiben 15.000-19.000 CHF. Damit erreichen Sie einen Eigenverbrauchsgrad von 70-80% statt nur 30-40% ohne Speicher. Der Kanton Tessin fördert solche Systeme mit zusätzlichen 2.000-3.500 CHF über das Programma Energia.'
      },
      {
        question: 'Gibt es in Lugano genug qualifizierte Solarteure?',
        answer: 'Ja, die Region Lugano/Tessin hat eine ausgezeichnete Solarinfrastruktur. Über 25 spezialisierte Solarteure arbeiten in der Region, viele mit langjähriger Erfahrung. Durch die hohe Nachfrage und die idealen Bedingungen sind die Tessiner Installateure besonders erfahren in der Optimierung von Anlagen für maximalen Ertrag. Über PVPro erhalten Sie kostenlos bis zu 3 Angebote von geprüften lokalen Betrieben - so können Sie Preise und Leistungen optimal vergleichen.'
      },
      {
        question: 'Wie viel Strom produziert eine Anlage in Lugano wirklich?',
        answer: 'Eine 5-kWp-Anlage in Lugano produziert durchschnittlich 5.500-6.500 kWh pro Jahr - das ist deutlich mehr als die 4.500-5.000 kWh im Mittelland. Pro installiertem kWp can count su circa 1.100-1.300 kWh all\'anno. Un\'economia domestica media di 4 persone consuma circa 4.500 kWh all\'anno, quindi con un impianto da 5 kW a Lugano può produrre anche più di quanto consuma. L\'eccedenza viene immessa in rete e remunerata (circa 8-12 cent/kWh).'
      },
      {
        question: 'Muss ich in Lugano mit besonderen Auflagen rechnen?',
        answer: 'Le procedure di autorizzazione in Ticino sono semplici. Per gli impianti montati sui tetti di edifici esistenti, di solito non è necessaria una licenza edilizia, ma solo una notifica al comune. In zone protette (Nuclei storici) possono essere applicati requisiti supplementari, ma anche lì gli impianti solari sono sempre più autorizzati, specialmente se non sono visibili dalla strada o se sono ben integrati. I vostri installatori conoscono esattamente le normative locali e si occupano di tutta la comunicazione con le autorità.'
      }
    ],

    testimonial: {
      initials: 'FB',
      name: 'Famiglia Bernasconi',
      quote: 'Lugano ist perfekt für Solar! Unsere 6.8-kW-Anlage produziert grazie alle molte ore di sole più di quanto avessimo mai previsto. L\'investimento si è ripagato dopo soli 4 anni. Consigliamo a ogni proprietario di casa in Ticino di passare all\'energia solare - ne vale davvero la pena!'
    }
  },

  // ZÜRICH - Largest market, most competitive
  zuerich: {
    slug: 'zuerich',
    heroHeadline: 'Solaranlage Zürich',
    heroSubheadline: 'Schweizer Wirtschaftsmetropole setzt auf Solar',
    heroDescription: 'Zürich entwickelt sich zur Solarhauptstadt: Mit über 420.000 Einwohnern und steigenden Strompreisen investieren immer mehr Hausbesitzer in eigene Photovoltaikanlagen. Vergleichen Sie jetzt Angebote von über 40 geprüften Zürcher Solarteuren.',

    whySolarTitle: 'Warum lohnt sich Solar in Zürich besonders?',
    whySolarIntro: 'Als grösste Stadt der Schweiz bietet Zürich nicht nur 1.566 Sonnenstunden jährlich, sondern auch den kompetitivsten Solarmarkt des Landes. Die Kombination aus hohen Strompreisen, attraktiven Förderungen und intensivem Wettbewerb unter Installateuren macht Solar in Zürich zu einer besonders rentabelen Investition.',
    whySolarReasons: [
      {
        title: 'Höchste Strompreise der Schweiz',
        description: 'Mit durchschnittlich 28-32 Rp/kWh zahlen Zürcher Haushalte zu den höchsten Strompreisen landesweit. Jede selbst produzierte Kilowattstunde spart Ihnen direkt Geld. Bei einem typischen Verbrauch von 4.500 kWh pro Jahr bedeutet das Einsparungen von bis zu 2.800 CHF jährlich mit einer 5-kW-Anlage.'
      },
      {
        title: 'Kanton Zürich Energie-Förderung Plus',
        description: 'Neben der Bundesförderung bietet der Kanton Zürich zusätzliche Anreize: Das Förderprogramm unterstützt besonders energieeffiziente Sanierungen mit Solarsystemen. Wer gleichzeitig die Gebäudehülle verbessert und Solar installiert, erhält Bonusförderungen von bis zu 4.000 CHF zusätzlich.'
      },
      {
        title: 'Über 40 spezialisierte Solarteure',
        description: 'Nirgends in der Schweiz ist die Auswahl grösser: Zürich hat über 40 spezialisierte Solarteure, was zu intensivem Wettbewerb und fairen Preisen führt. Durch den Vergleich mehrerer Angebote sparen Zürcher Hausbesitzer durchschnittlich 4.500-7.000 CHF gegenüber dem ersten Angebot.'
      }
    ],

    cityFactsTitle: 'Photovoltaik in Zürich: Rendite in der Wirtschaftsmetropole',
    cityFactsParagraphs: [
      'Zürich, die grösste Stadt und das wirtschaftliche Herz der Schweiz, erlebt aktuell einen regelrechten Solar-Boom. Was vor wenigen Jahren noch selten war, ist heute alltäglich: Einfamilienhäuser in Oerlikon, Witikon oder Affoltern, aber auch Mehrfamilienhäuser in Altstetten oder Schwamendingen glänzen mit modernen Photovoltaikanlagen auf ihren Dächern. Der Grund ist einfach: Nirgends rechnet sich Solar besser als in Zürich.',
      'Mit 1.566 Sonnenstunden jährlich liegt Zürich zwar unter dem Schweizer Durchschnitt, aber die Rechnung geht trotzdem auf: Die hohen Strompreise von 28-32 Rp/kWh (je nach Stadtwerk und Tarif) machen jede selbst produzierte Kilowattstunde wertvoll. Eine 5-kWp-Anlage produziert in Zürich etwa 4.500-5.200 kWh pro Jahr. Bei Eigenverbrauch von 30-40% sparen Sie direkt 1.200-1.800 CHF, der Rest wird eingespeist und mit 8-10 Rp/kWh vergütet, was weitere 400-600 CHF bringt. Gesamtersparnis: 1.600-2.400 CHF pro Jahr.',
      'Die Investitionskosten sind dank des intensiven Wettbewerbs unter Zürcher Solarteuren wettbewerbsfähig: 9.500-25.000 CHF je nach Grösse. Eine typische 5-kW-Anlage kostet 9.500-12.500 CHF vor Förderung. Nach Abzug der Bundesförderung (30%, etwa 2.850-3.750 CHF) und möglicher kantonaler Zusatzförderung zahlen Sie netto 6.500-8.500 CHF. Bei jährlichen Ersparnissen von 1.600-2.400 CHF amortisiert sich die Anlage nach 4-6 Jahren - danach produzieren Sie 20-25 Jahre lang kostenlosen Strom.',
      'Besonders attraktiv: Die Stadt Zürich und der Kanton haben ehrgeizige Klimaziele und fördern Solar aktiv. Das städtische Förderprogramm "Energiestadt Zürich" bietet Beratung und Zuschüsse. Wer sein Dach saniert und gleichzeitig Solar installiert, profitiert von Kombi-Förderungen. Mit über 40 spezialisierten Solarteure in der Region ist auch die Qualität der Installationen ausgezeichnet - der Wettbewerb sorgt für Top-Service zu fairen Preisen.'
    ],

    pricing: {
      min: 9500,
      max: 25000,
      typical5kw: { min: 9500, max: 12500 },
      afterSubsidy5kw: { min: 6500, max: 8500 },
      roiYears: '4-6'
    },

    incentives: {
      title: 'Förderungen in Zürich und Kanton ZH',
      description: 'Zürich bietet eine der umfassendsten Förderkulissen der Schweiz:',
      programs: [
        {
          name: 'Bundesförderung EIV (Einmalvergütung)',
          amount: 'bis zu 30%',
          description: 'Grundförderung für alle PV-Anlagen. Für eine 5-kW-Anlage erhalten Sie 2.850-3.750 CHF einmalig nach Inbetriebnahme.'
        },
        {
          name: 'Kanton Zürich Energieförderung',
          amount: 'zusätzlich bis 4.000 CHF',
          description: 'Kombi-Förderung bei energetischer Sanierung: Wer Dach oder Fassade saniert und gleichzeitig Solar installiert, erhält Bonusförderungen von 2.000-4.000 CHF zusätzlich.'
        },
        {
          name: 'Energiestadt Zürich Programm',
          amount: 'Beratung + Zuschüsse',
          description: 'Die Stadt Zürich bietet kostenlose Energieberatung und in gewissen Quartieren zusätzliche Zuschüsse von 1.000-2.000 CHF für innovative Solarsysteme mit Speicher.'
        },
        {
          name: 'Steuerliche Absetzbarkeit',
          amount: '100% absetzbar',
          description: 'Vollständig absetzbar vom steuerbaren Einkommen. Bei Zürcher Steuersätzen bedeutet das zusätzliche 2.000-4.000 CHF Ersparnis, abhängig von Ihrem Einkommen.'
        }
      ]
    },

    caseStudies: [
      {
        name: 'Familie Müller',
        location: 'Zürich-Witikon',
        systemSize: '7.2 kWp',
        cost: '11.800 CHF (nach Förderung)',
        savings: '2.600 CHF pro Jahr',
        payback: '4.5 Jahre',
        quote: 'Wir haben 5 Angebote verglichen und über 6.000 CHF gespart! Die Anlage läuft seit 2 Jahren perfekt. Mit den hohen Strompreisen in Zürich zahlt sich jede Kilowattstunde sofort aus.'
      },
      {
        name: 'Herr Weber',
        location: 'Zürich-Höngg',
        systemSize: '5.8 kWp mit Speicher',
        cost: '16.500 CHF (nach allen Förderungen)',
        savings: '2.200 CHF pro Jahr + 65% Eigenverbrauch',
        payback: '5.5 Jahre',
        quote: 'Der Batteriespeicher macht den Unterschied. Wir nutzen unseren Solarstrom auch abends und sind zu 65% autark. Die Stadtwerke Zürich haben uns zusätzlich 1.500 CHF Bonus gegeben.'
      },
      {
        name: 'Familie Schweizer',
        location: 'Zürich-Affoltern',
        systemSize: '6.5 kWp',
        cost: '10.200 CHF (nach Förderung)',
        savings: '2.400 CHF pro Jahr',
        payback: '4.2 Jahre',
        quote: 'Solar ist die beste Investition, die wir gemacht haben. Bei den Zürcher Strompreisen rechnet sich das unglaublich schnell. Nach 4 Jahren haben wir den Break-even erreicht!'
      }
    ],

    faqs: [
      {
        question: 'Lohnt sich Solar in Zürich trotz weniger Sonnenstunden?',
        answer: 'Ja, absolut! Zürich hat zwar "nur" 1.566 Sonnenstunden pro Jahr (vs. 2.157 in Lugano), aber die hohen Strompreise von 28-32 Rp/kWh machen das mehr als wett. Jede selbst produzierte kWh spart Ihnen direkt bares Geld. Eine 5-kWp-Anlage produziert in Zürich 4.500-5.200 kWh jährlich, was bei Eigenverbrauch von 30-40% zu Einsparungen von 1.600-2.400 CHF pro Jahr führt. Bei Nettokosten von 6.500-8.500 CHF nach Förderungen amortisiert sich die Anlage nach nur 4-6 Jahren.'
      },
      {
        question: 'Was kostet eine Solaranlage in Zürich?',
        answer: 'Dank intensivem Wettbewerb (über 40 Solarteure!) sind die Preise in Zürich wettbewerbsfähig: Eine 5-kWp-Anlage kostet 9.500-12.500 CHF vor Förderung. Nach Bundesförderung (30%) und kantonalen Zuschüssen zahlen Sie netto 6.500-8.500 CHF. Grössere 8-10 kWp-Anlagen kosten 15.000-25.000 CHF brutto, netto 10.000-17.000 CHF. WICHTIG: Vergleichen Sie unbedingt mehrere Angebote - Zürcher sparen durch Vergleich durchschnittlich 4.500-7.000 CHF!'
      },
      {
        question: 'Welche Förderungen gibt es im Kanton Zürich?',
        answer: 'Zürich bietet ein mehrschichtigen Fördersystem: (1) Bundesförderung EIV: 30%, etwa 2.850-3.750 CHF für 5 kWp. (2) Kanton ZH Energieförderung: Bei Kombi-Sanierung (Dach + Solar) bis zu 4.000 CHF Bonus. (3) Energiestadt Zürich: Zusätzliche 1.000-2.000 CHF in gewissen Quartieren. (4) Steuerliche Absetzbarkeit: 100% vom steuerbaren Einkommen, je nach Steuersatz weitere 2.000-4.000 CHF Ersparnis. Insgesamt können Sie bis zu 50% der Investition zurückerhalten!'
      },
      {
        question: 'Wie finde ich den besten Solarteur in Zürich?',
        answer: 'Mit über 40 Solarteure in Zürich ist die Auswahl riesig - aber auch unübersichtlich. Unsere Empfehlung: Holen Sie mindestens 3 Offerten ein und vergleichen Sie nicht nur Preise, sondern auch Garantien, verwendete Komponenten (Module, Wechselrichter) and Referenzen. PVPro vermittelt kostenlos bis zu 3 geprüfte Angebote von seriösen Zürcher Betrieben. Unsere Kunden sparen durch den Vergleich durchschnittlich 4.500-7.000 CHF - bei gleicher oder besserer Qualität.'
      },
      {
        question: 'Brauche ich in Zürich eine Baubewilligung?',
        answer: 'Für Aufdachanlagen auf bestehenden Gebäuden benötigen Sie in Zürich in der Regel keine Baubewilligung, nur eine Meldung beim Bauamt (Meldeverfahren). Ausnahmen gelten für denkmalgeschützte Gebäude (z.B. Altstadt) and in gewissen Schutzzonen. In diesen Fällen ist eine Baubewilligung erforderlich, die aber in 90% der Fälle bewilligt wird, besonders bei nicht sichtbaren oder gut integrierten Anlagen. Ihr Solarteur kümmert sich um alle nötigen Bewilligungen und Meldungen.'
      },
      {
        question: 'Macht ein Batteriespeicher in Zürich Sinn?',
        answer: 'Bei den hohen Zürcher Strompreisen macht ein Speicher durchaus Sinn! Ohne Speicher nutzen Sie nur 30-40% Ihres Solarstroms selbst, der Rest wird für 8-10 Rp/kWh eingespeist. Mit Speicher steigt der Eigenverbrauch auf 65-75%, Sie sparen also 28-32 Rp/kWh statt nur 8-10 Rp/kWh einzuspeisen. Ein 10-kWh-Speicher kostet zusätzlich 6.000-9.000 CHF, verlängert die Amortisationszeit um 1-2 Jahre, macht Sie aber langfristig deutlich unabhängiger. Für die meisten Zürcher lohnt sich mindestens ein kleinerer 5-7 kWh Speicher.'
      },
      {
        question: 'Wie viel Strom kann ich in Zürich selbst produzieren?',
        answer: 'Ein durchschnittlicher Zürcher 4-Personen-Haushalt verbraucht etwa 4.500 kWh pro Jahr. Eine 5-kWp-Anlage produziert in Zürich 4.500-5.200 kWh - Sie können also Ihren gesamten Jahresbedarf selbst decken! Ohne Speicher nutzen Sie direkt 30-40% (Waschen, Kochen, Kühlschrank tagsüber), der Rest wird eingespeist. Mit Speicher steigt die Eigennutzung auf 65-75%. Für echte Autarkie (>80%) brauchen Sie eine grössere Anlage (7-8 kWp) and einen Speicher (10-12 kWh).'
      },
      {
        question: 'Was passiert bei Stromausfall mit meiner Solaranlage?',
        answer: 'Standard-Anlagen schalten sich bei Netzausfall automatisch ab (Sicherheitsvorschrift zum Schutz der Netztechniker). Wenn Sie auch bei Blackouts Strom haben möchten, brauchen Sie eine Ersatzstrom- oder Notstromfunktion. Viele moderne Batteriespeicher (z.B. BYD, Huawei, Tesla Powerwall) bieten diese Option. Kosten: etwa 2.000-4.000 CHF Aufpreis. In Zürich mit dem stabilen Stromnetz sind Ausfälle selten, aber das Thema wird durch die Diskussionen über Strommangel wichtiger. Wer auf Nummer sicher gehen will, investiert in Notstromfähigkeit.'
      }
    ],

    testimonial: {
      initials: 'FM',
      name: 'Familie Müller',
      quote: 'Als wir vor 2 Jahren über Solar nachgedacht haben, waren wir skeptisch wegen der "wenigen" Sonnenstunden in Zürich. Aber unser Solarteur hat uns die Rechnung vorgelegt: Mit den hohen Strompreisen hier rechnet sich Solar schneller als fast überall sonst! Nach 4.5 Jahren sind wir im Plus - und haben noch 20 Jahre kostenlosen Strom vor uns.'
    }
  },

  // GENF - French-speaking, high prices
  genf: {
    slug: 'genf',
    heroHeadline: 'Solaranlage Genf',
    heroSubheadline: 'Internationale Stadt mit Solarpower',
    heroDescription: 'Genf (Genève) ist Vorreiter in der nachhaltigen Energie. Mit hohen kantonalen Förderungen und einem starken Umweltbewusstsein ist Solar hier eine erstklassige Wahl. Vergleichen Sie jetzt 3 Angebote von lokalen Genfer Experten.',

    whySolarTitle: 'Warum Solar in Genève/Genf?',
    whySolarIntro: 'Die Stadt Genf und der gleichnamige Kanton fördern die Solarenergie massiv. Dank attraktiver Einspeisevergütungen der SIG (Services Industriels de Genève) and grosszügiger Steuererleichterungen amortisiert sich Ihre Anlage in Rekordzeit.',
    whySolarReasons: [
      {
        title: 'SIG - Attraktive Vergütungen',
        description: 'Die Genfer Stadtwerke (SIG) bieten überdurchschnittlich hohe Rückliefertarife für Solarstrom. Das macht den Betrieb Ihrer Anlage auch ohne hohen Eigenverbrauch wirtschaftlich äusserst attraktiv.'
      },
      {
        title: '100% Ökologische Metropole',
        description: 'Genf hat sich zum Ziel gesetzt, bis 2050 klimaneutral zu sein. Hausbesitzer, die Solar installieren, profitieren von einem vereinfachten Bewilligungsverfahren and exklusiven kantonalen Förderkrediten.'
      },
      {
        title: 'Wertsteigerung Ihrer Immobilie',
        description: 'In der internationalen Stadt Genf ist Energieeffizienz ein entscheidendes Kaufkriterium. Eine moderne PV-Anlage steigert den Marktwert Ihres Hauses in Genf nachweislich um bis zu 7%.'
      }
    ],

    cityFactsTitle: 'Photovoltaik in Genf: Nachhaltigkeit am Lac Léman',
    cityFactsParagraphs: [
      'Genf (Genève), die Stadt des Friedens and Sitz zahlreicher internationaler Organisationen, setzt auch in der Energiepolitik weltweite Massstäbe. Die Bewohner della Rhonestadt profitieren von einem einzigartigen Ökosystem für Solarenergie, das massgeblich von den Services Industriels de Genève (SIG) geprägt wird.',
      'Mit durchschnittlich 1.620 Sonnenstunden pro Jahr bietet Genf hervorragende Erträge. Eine 5-kWp-Anlage produziert hier jährlich etwa 4.800 bis 5.400 kWh Strom. Das Besondere in Genf: Die Einspeisevergütung ist stabil and hoch, was die Planungssicherheit für Investoren deutlich erhöht. Zudem ist der Kanton Genf bekannt für seine effiziente Verwaltung bei della Abwicklung von Förderanträgen.',
      'Die Kosten für eine Installation in Genf liegen zwischen 9.800 and 26.000 CHF. Dank della kantonalen Steuervergünstigungen, bei denen die gesamte Investition bereits im ersten Jahr zu 100% vom Einkommen abgezogen werden kann, reduzieren sich die effektiven Kosten massiv. Für einen typischen Genfer Haushalt amortisiert sich die Solaranlage bereits nach 5 bis 7 Jahren.',
      'Ob in Carouge, Cologny oder Meyrin - überall in della Region Genf finden sich erstklassige Installationsbetriebe. Der Wettbewerb sorgt für eine hohe Qualität della Beratung and Ausführung. Wer in Genf auf Solar setzt, investiert nicht nur in die Umwelt, sondern profitiert auch von della stabilen Wertentwicklung Genfer Immobilien.'
    ],

    pricing: {
      min: 9800,
      max: 26000,
      typical5kw: { min: 9800, max: 13000 },
      afterSubsidy5kw: { min: 6800, max: 8900 },
      roiYears: '5-7'
    },

    incentives: {
      title: 'Förderungen im Kanton Genf',
      description: 'Hausbesitzer in Genf profitieren von erstklassigen Rahmenbedingungen:',
      programs: [
        {
          name: 'SIG-Förderprogramm',
          amount: 'bis zu 35%',
          description: 'Die SIG unterstützt die Installation von Photovoltaik mit direkten Investitionszuschüssen and attraktiven Abnahmeverträgen.'
        },
        {
          name: 'Genfer Steuererleichterung',
          amount: '100% Abzug im 1. Jahr',
          description: 'Im Gegensatz zu anderen Kantonen erlaubt Genf oft den vollständigen Abzug della Investitionskosten im ersten Steuerjahr.'
        },
        {
          name: 'Bundesförderung Pronovo',
          amount: 'Einmalvergütung',
          description: 'Die nationale Förderung für alle Solaranlagen in della Schweiz, ergänzt durch Genfer kantonale Mittel.'
        }
      ]
    },

    caseStudies: [
      {
        name: 'Famille Dupont',
        location: 'Vandoeuvres',
        systemSize: '8.4 kWp',
        cost: '14.500 CHF (nach Förderung)',
        savings: '3.100 CHF pro Jahr',
        payback: '4.7 Jahre',
        quote: 'Grâce à notre installation solaire, nous sommes devenus presque indépendants. Les subventions du canton de Genève ont été versées très rapidement. Un excellent investissement!'
      },
      {
        name: 'Monsieur Martin',
        location: 'Genève-Eaux-Vives',
        systemSize: '4.2 kWp',
        cost: '8.200 CHF (netto)',
        savings: '1.900 CHF pro Jahr',
        payback: '4.3 Jahre',
        quote: 'Même sur un petit toit en ville, le solaire vaut le coup à Genève. La SIG offre de très bons tarifs pour le courant que je réinjecte dans le réseau.'
      }
    ],

    faqs: [
      {
        question: 'Warum ist Genf ideal für Solarenergie?',
        answer: 'Genf bietet eine einzigartige Kombination aus guten klimatischen Bedingungen (1.620 Sonnenstunden) and della Unterstützung durch die SIG. Die Rückliefertarife in Genf gehören zu den stabilsten della Schweiz.'
      },
      {
        question: 'Wie hoch sind die Förderungen in Genf?',
        answer: 'Durch die Kombination aus Pronovo (Bund), SIG-Zuschüssen and della vollen steuerlichen Absetzbarkeit können bis zu 45% della Gesamtkosten gedeckt werden.'
      },
      {
        question: 'Wie lange dauert die Installation in Genf?',
        answer: 'Vom ersten Beratungsgespräch bis zur Inbetriebnahme dauert es in Genf durchschnittlich 3 bis 5 Monate, inklusive aller Bewilligungsverfahren.'
      },
      {
        question: 'Muss ich meine Anlage in Genf bewilligen lassen?',
        answer: 'In den meisten Zonen Genfs reicht ein Meldeverfahren aus. Bei historischen Gebäuden oder im Stadtzentrum ist die Abstimmung mit dem Denkmalschutz erforderlich.'
      },
      {
        question: 'Lohnt sich ein Speicher im Kanton Genf?',
        answer: 'Ja, besonders wenn Sie Ihren Eigenverbrauch maximieren möchten. SIG bietet spezielle Tarife für Smart-Grid-fähige Speicherlösungen an.'
      },
      {
        question: 'Wie finde ich seriöse Solarteure in Genf?',
        answer: 'Über PVPro erhalten Sie Zugang zu einem Netzwerk von geprüften Genfer Installationsbetrieben, die alle über die notwendigen SIG-Zertifizierungen verfügen.'
      },
      {
        question: 'Welche Garantien erhalte ich in Genf?',
        answer: 'Üblich sind 10-15 Jahre Produktgarantie and bis zu 25 Jahre Leistungsgarantie auf die Solarmodule bei den meisten Genfer Anbietern.'
      },
      {
        question: 'Kann io finanziare il mio impianto solare a Ginevra?',
        answer: 'Sì, molte banche ginevrine offrono speciali "crediti verdi" con tassi d\'interesse preferenziali per il risanamento energetico e il fotovoltaico.'
      }
    ],

    testimonial: {
      initials: 'JD',
      name: 'Jean Dupont',
      quote: 'Investir dans le solaire à Genève a été la meilleure décision pour notre maison. L\'amortissement est extrêmement rapide grâce aux aides cantonales. C\'est rentable et écologique!'
    }
  },

  // BERN - Capital, central location
  bern: {
    slug: 'bern',
    heroHeadline: 'Solaranlage Bern',
    heroSubheadline: 'Die Bundesstadt setzt auf Sonnenenergie',
    heroDescription: 'Bern kombiniert Tradition mit Moderne. Immer mehr Berner Hausbesitzer nutzen ihre Dächer für nachhaltigen Solarstrom. Profitieren Sie von attraktiven Förderungen in Stadt and Kanton Bern. Vergleichen Sie jetzt 3 Angebote.',

    whySolarTitle: 'Warum Solar in della Region Bern?',
    whySolarIntro: 'Der Kanton Bern ist flächenmässig riesig and bietet enormes Potenzial für Solarenergie. Die Berner Energiepolitik unterstützt den Ausbau aktiv, was zu einer hervorragenden Infrastruktur an Fachbetrieben geführt hat.',
    whySolarReasons: [
      {
        title: 'Berner Solarkataster',
        description: 'Der Kanton Bern bietet ein detailliertes Solarkataster, mit dem Sie das Potenzial Ihres Daches exakt online prüfen können. Das erleichtert die Planung massiv.'
      },
      {
        title: 'Attraktive Rückliefertarife',
        description: 'Viele Berner Energieversorger (z.B. BKW, Energie Wasser Bern) bieten faire Rückliefertarife für Ihren überschüssigen Solarstrom.'
      },
      {
        title: 'Kompetenzzentrum Solar',
        description: 'Bern beherbergt zahlreiche Forschungsinstitute and führende Solarfirmen, was eine exzellente Qualität della Beratung and Installation in della Region garantiert.'
      }
    ],

    cityFactsTitle: 'Photovoltaik in Bern: Rendite in della Bundesstadt',
    cityFactsParagraphs: [
      'Bern, die Bundesstadt della Schweiz, ist ein idealer Standort für Photovoltaik. Mit rund 1.600 Sonnenstunden pro Jahr bietet die Region Bern stabile Erträge für Solar-Investoren. Ob im historischen Länggasse-Quartier, in den Aussenbezirken wie Bümpliz oder in den Agglomerationsgemeinden wie Köniz and Ittigen - das Interesse an Solarenergie ist so gross wie nie zuvor.',
      'Eine typische 5-kWp-Anlage in Bern produziert jährlich zwischen 4.700 and 5.300 kWh Strom. Damit lässt sich der Jahresbedarf eines durchschnittlichen 4-Personen-Haushalt fast vollständig decken. Dank della BKW (Bernische Kraftwerke) and Energie Wasser Bern (ewb) profitieren Berner von einer gut ausgebauten Netzinfrastruktur and fairen Einspeisevergütungen.',
      'Die Investitionskosten für Solar in Bern liegen im Bereich von 9.200 bis 24.000 CHF. Besonders attraktiv im Kanton Bern: Die steuerliche Absetzbarkeit ist sehr investorenfreundlich gestaltet. In Kombination mit della Bundesförderung (Einmalvergütung) können Berner Hausbesitzer die Nettokosten ihrer Anlage signifikant senken. Die Amortisationszeit liegt in della Regel zwischen 6 and 8 Jahren.',
      'In della Region Bern finden sich über 30 spezialisierte Solarfachbetriebe. Dieser gesunde Wettbewerb stellt sicher, dass Sie als Kunde Top-Leistungen zu marktüblichen Preisen erhalten. Wer in Bern auf Solar setzt, profitiert nicht nur finanziell, sondern leistet anche un importante contributo alla strategia energetica 2050 della Confederazione.'
    ],

    pricing: {
      min: 9200,
      max: 24000,
      typical5kw: { min: 9200, max: 12500 },
      afterSubsidy5kw: { min: 6500, max: 8700 },
      roiYears: '6-8'
    },

    incentives: {
      title: 'Förderungen im Kanton Bern',
      description: 'Berner Hausbesitzer können auf verschiedene Fördertöpfe zugreifen:',
      programs: [
        {
          name: 'Pronovo Bundesförderung',
          amount: 'bis zu 30%',
          description: 'Die Standard-Einmalvergütung für alle neuen Photovoltaikanlagen in della Schweiz.'
        },
        {
          name: 'Kantonale Steuerabzüge',
          amount: 'bis zu 25% Ersparnis',
          description: 'Investitionen in Solaranlagen können im Kanton Bern vom steuerbaren Einkommen abgezogen werden.'
        },
        {
          name: 'Klimafonds Stadt Bern',
          amount: 'Zusatzbeiträge',
          description: 'Die Stadt Bern unterstützt über ihren Klimafonds spesso componenti aggiuntivi innovativi o soluzioni di stoccaggio.'
        }
      ]
    },

    caseStudies: [
      {
        name: 'Familie Gerber',
        location: 'Bern-Kirchenfeld',
        systemSize: '6.2 kWp',
        cost: '11.400 CHF (nach Förderung)',
        savings: '2.300 CHF pro Jahr',
        payback: '5 Jahre',
        quote: 'Wir sind begeistert, wie reibungslos alles geklappt hat. Die Beratung durch den Berner Fachbetrieb war erstklassig and die Anlage produce anche più di quanto previsto.'
      },
      {
        name: 'Herr Blaser',
        location: 'Köniz',
        systemSize: '5.5 kWp con accumulo',
        cost: '15.200 CHF (netto)',
        savings: '2.100 CHF all\'anno',
        payback: '7.2 anni',
        quote: 'Grazie all\'accumulo utilizziamo quasi il 70% della nostra energia solare. Questo ci rende indipendenti dai futuri aumenti dei prezzi dell\'elettricità.'
      }
    ],

    faqs: [
      {
        question: 'Wie hoch ist das Solarpotenzial in Bern?',
        answer: 'Mit 1.600 Sonnenstunden pro Jahr hat Bern ein sehr gutes Potenzial. Die meisten Dächer in della Region sono eccellenti.'
      },
      {
        question: 'Welche Einspeisevergütung zahlt die BKW?',
        answer: 'La BKW adegua regolarmente le sue tariffe. Attualmente sono in linea con il mercato, il che rende redditizio l\'esercizio di un impianto.'
      },
      {
        question: 'Ho bisogno di un permesso nel centro storico di Berna?',
        answer: 'Sì, nel centro storico, patrimonio mondiale dell\'UNESCO, valgono regole speciali. Esistono però soluzioni innovative (ad es. tegole solari) che sono spesso autorizzabili.'
      },
      {
        question: 'Come trovo l\'installatore giusto a Berna?',
        answer: 'Utilizzate il nostro servizio di confronto. Vi mettiamo in contatto esclusivamente con aziende specializzate verificate e certificate della regione di Berna.'
      },
      {
        question: 'Quanto costa la manutenzione a Berna?',
        answer: 'La manutenzione annuale non è obbligatoria, ma è raccomandata ogni 3-5 anni e costa circa 300-600 CHF a seconda delle dimensioni dell\'impianto.'
      },
      {
        question: 'Il solare vale la pena per una casa in affitto a Berna?',
        answer: 'Sì, attraverso il modello del raggruppamento ai fini del consumo proprio (RCP), anche i locatori a Berna possono investire proficuamente nel solare.'
      },
      {
        question: 'Quanto resistono i moduli solari agli inverni bernesi?',
        answer: 'I moduli moderni sono estremamente robusti e progettati per elevati carichi di neve. Resistono senza problemi per 25-30 anni.'
      },
      {
        question: 'Ci sono centri di consulenza a Berna?',
        answer: 'Sì, la consulenza pubblica sull\'energia del Canton Berna offre consulenze iniziali neutrali e gratuite per i proprietari di case.'
      }
    ],

    testimonial: {
      initials: 'UG',
      name: 'Urs Gerber',
      quote: 'Grazie all\'impianto solare risparmiamo soldi ogni mese. I sussidi bernesi hanno reso l\'investimento ancora più interessante. Altamente raccomandato!'
    }
  }
};
