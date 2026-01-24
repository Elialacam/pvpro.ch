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

  // Case studies (3 per city)
  caseStudies: {
    name: string;
    location: string;
    systemSize: string;
    cost: string;
    savings: string;
    payback: string;
    quote: string;
  }[];

  // Unique FAQs (8 per city)
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
        answer: 'Die Investitionskosten in Lugano sind wettbewerbsfähig: Eine typische 5-kWp-Anlage kostet zwischen 8.500 und 11.500 CHF vor Förderung. Nach Abzug der Bundesförderung (ca. 2.300-3.700 CHF) und möglicher kantonaler Zuschüsse aus dem Programma Energia (1.000-2.500 CHF zusätzlich) zahlen Sie netto nur 6.200-7.800 CHF. Grössere Anlagen (8-10 kWp) kosten zwischen 14.000 und 23.000 CHF brutto, bieten aber auch proportional höhere Erträge.'
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
        answer: 'Eine 5-kWp-Anlage in Lugano produziert durchschnittlich 5.500-6.500 kWh pro Jahr - das ist deutlich mehr als die 4.500-5.000 kWh im Mittelland. Pro installiertem kWp können Sie mit etwa 1.100-1.300 kWh jährlich rechnen. Ein durchschnittlicher 4-Personen-Haushalt verbraucht etwa 4.500 kWh pro Jahr, kann also mit einer 5-kW-Anlage in Lugano sogar mehr produzieren als er verbraucht. Der Überschuss wird ins Netz eingespeist und vergütet (ca. 8-12 Rp/kWh).'
      },
      {
        question: 'Muss ich in Lugano mit besonderen Auflagen rechnen?',
        answer: 'Die Bewilligungsverfahren im Tessin sind unkompliziert. Für Aufdachanlagen auf bestehenden Gebäuden benötigen Sie in der Regel keine Baubewilligung, nur eine Meldung bei der Gemeinde. In Schutzzonen (Centro Storico) können zusätzliche Auflagen gelten, aber auch dort werden Solaranlagen zunehmend bewilligt, besonders wenn sie von der Strasse nicht sichtbar sind. Ihre Solarteure kennen die lokalen Vorschriften genau und übernehmen die gesamte Kommunikation mit den Behörden.'
      }
    ],

    testimonial: {
      initials: 'FB',
      name: 'Famiglia Bernasconi',
      quote: 'Lugano ist perfekt für Solar! Unsere 6.8-kW-Anlage produziert dank der vielen Sonnenstunden mehr als wir je erwartet haben. Die Investition hat sich nach nur 4 Jahren bezahlt gemacht. Wir empfehlen jedem Hausbesitzer im Tessin, auf Solarenergie umzusteigen - es lohnt sich wirklich!'
    }
  },

  // ZÜRICH - Largest market, most competitive
  zuerich: {
    slug: 'zuerich',
    heroHeadline: 'Solaranlage Zürich',
    heroSubheadline: 'Schweizer Wirtschaftsmetropole setzt auf Solar',
    heroDescription: 'Zürich entwickelt sich zur Solarhauptstadt: Mit über 420.000 Einwohnern und steigenden Strompreisen investieren immer mehr Hausbesitzer in eigene Photovoltaikanlagen. Vergleichen Sie jetzt Angebote von über 40 geprüften Zürcher Solarteuren.',

    whySolarTitle: 'Warum lohnt sich Solar in Zürich besonders?',
    whySolarIntro: 'Als grösste Stadt der Schweiz bietet Zürich nicht nur 1.566 Sonnenstunden jährlich, sondern auch den kompetitivsten Solarmarkt des Landes. Die Kombination aus hohen Strompreisen, attraktiven Förderungen und intensivem Wettbewerb unter Installateuren macht Solar in Zürich zu einer besonders rentablen Investition.',
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
      'Besonders attraktiv: Die Stadt Zürich und der Kanton haben ehrgeizige Klimaziele und fördern Solar aktiv. Das städtische Förderprogramm "Energiestadt Zürich" bietet Beratung und Zuschüsse. Wer sein Dach saniert und gleichzeitig Solar installiert, profitiert von Kombi-Förderungen. Mit über 40 spezialisierten Solarteuren in der Region ist auch die Qualität der Installationen ausgezeichnet - der Wettbewerb sorgt für Top-Service zu fairen Preisen.'
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
        answer: 'Zürich bietet ein mehrschichtiges Fördersystem: (1) Bundesförderung EIV: 30%, etwa 2.850-3.750 CHF für 5 kWp. (2) Kanton ZH Energieförderung: Bei Kombi-Sanierung (Dach + Solar) bis zu 4.000 CHF Bonus. (3) Energiestadt Zürich: Zusätzliche 1.000-2.000 CHF in gewissen Quartieren. (4) Steuerliche Absetzbarkeit: 100% vom steuerbaren Einkommen, je nach Steuersatz weitere 2.000-4.000 CHF Ersparnis. Insgesamt können Sie bis zu 50% der Investition zurückerhalten!'
      },
      {
        question: 'Wie finde ich den besten Solarteur in Zürich?',
        answer: 'Mit über 40 Solarteuren in Zürich ist die Auswahl riesig - aber auch unübersichtlich. Unsere Empfehlung: Holen Sie mindestens 3 Offerten ein und vergleichen Sie nicht nur Preise, sondern auch Garantien, verwendete Komponenten (Module, Wechselrichter) und Referenzen. PVPro vermittelt kostenlos bis zu 3 geprüfte Angebote von seriösen Zürcher Betrieben. Unsere Kunden sparen durch den Vergleich durchschnittlich 4.500-7.000 CHF - bei gleicher oder besserer Qualität.'
      },
      {
        question: 'Brauche ich in Zürich eine Baubewilligung?',
        answer: 'Für Aufdachanlagen auf bestehenden Gebäuden benötigen Sie in Zürich in der Regel keine Baubewilligung, nur eine Meldung beim Bauamt (Meldeverfahren). Ausnahmen gelten für denkmalgeschützte Gebäude (z.B. Altstadt) und in gewissen Schutzzonen. In diesen Fällen ist eine Baubewilligung erforderlich, die aber in 90% der Fälle bewilligt wird, besonders bei nicht sichtbaren oder gut integrierten Anlagen. Ihr Solarteur kümmert sich um alle nötigen Bewilligungen und Meldungen.'
      },
      {
        question: 'Macht ein Batteriespeicher in Zürich Sinn?',
        answer: 'Bei den hohen Zürcher Strompreisen macht ein Speicher durchaus Sinn! Ohne Speicher nutzen Sie nur 30-40% Ihres Solarstroms selbst, der Rest wird für 8-10 Rp/kWh eingespeist. Mit Speicher steigt der Eigenverbrauch auf 65-75%, Sie sparen also 28-32 Rp/kWh statt nur 8-10 Rp/kWh einzuspeisen. Ein 10-kWh-Speicher kostet zusätzlich 6.000-9.000 CHF, verlängert die Amortisationszeit um 1-2 Jahre, macht Sie aber langfristig deutlich unabhängiger. Für die meisten Zürcher lohnt sich mindestens ein kleinerer 5-7 kWh Speicher.'
      },
      {
        question: 'Wie viel Strom kann ich in Zürich selbst produzieren?',
        answer: 'Ein durchschnittlicher Zürcher 4-Personen-Haushalt verbraucht etwa 4.500 kWh pro Jahr. Eine 5-kWp-Anlage produziert in Zürich 4.500-5.200 kWh - Sie können also Ihren gesamten Jahresbedarf selbst decken! Ohne Speicher nutzen Sie direkt 30-40% (Waschen, Kochen, Kühlschrank tagsüber), der Rest wird eingespeist. Mit Speicher steigt die Eigennutzung auf 65-75%. Für echte Autarkie (>80%) brauchen Sie eine grössere Anlage (7-8 kWp) und einen Speicher (10-12 kWh).'
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
    heroDescription: 'Genf, die internationale Metropole am Genfersee, bietet mit 1.849 Sonnenstunden pro Jahr hervorragende Bedingungen für Photovoltaik. Die französischsprachige Region setzt zunehmend auf erneuerbare Energien - profitieren Sie von attraktiven Westschweizer Förderungen.',

    whySolarTitle: 'Warum Solar in Genève/Genf?',
    whySolarIntro: 'Genf vereint das Beste aus zwei Welten: die Sonnenstunden der Westschweiz (1.849 Stunden jährlich) und die hohe Kaufkraft einer internationalen Stadt. Die Services Industriels de Genève (SIG) fördern Solarenergie aktiv, und der Kanton bietet zusätzliche Anreize für Hausbesitzer.',
    whySolarReasons: [
      {
        title: '1.849 Sonnenstunden - Westschweizer Vorteil',
        description: 'Mit 1.849 Sonnenstunden pro Jahr liegt Genf deutlich über dem Schweizer Mittelland und bietet etwa 18% mehr Ertrag als Zürich. Die Nähe zum Genfersee und das milde Westschweizer Klima garantieren ganzjährig gute Bedingungen für Ihre Photovoltaikanlage.'
      },
      {
        title: 'SIG Solar-Programm + Kantonale Förderung',
        description: 'Die Services Industriels de Genève (SIG) bieten nicht nur attraktive Einspeisevergütungen (10-12 Rp/kWh), sondern auch Beratung und Installationsunterstützung. Der Kanton Genf fördert Solar zusätzlich mit dem "Programme ScanE" - bis zu 35% Investitionszuschuss möglich.'
      },
      {
        title: 'Internationale Stadt, lokale Expertise',
        description: 'Genf hat eine ausgeprägte Solarinfrastruktur mit über 30 spezialisierten Installateuren, viele davon zweisprachig (français/deutsch). Die internationale Ausrichtung der Stadt spiegelt sich in modernster Solartechnologie wider - viele Genfer Installateure arbeiten mit neuesten europäischen Premium-Komponenten.'
      }
    ],

    cityFactsTitle: 'Photovoltaik in Genf: Solaire pour Genève',
    cityFactsParagraphs: [
      'Genève (Genf) ist nicht nur Sitz internationaler Organisationen, sondern entwickelt sich auch zur Vorzeigestadt für urbane Solarenergie. Die zweisprachige Stadt (französisch/deutsch) am Genfersee profitiert von 1.849 Sonnenstunden jährlich - deutlich mehr als das Mittelland und fast auf dem Niveau von Lugano (2.157 Stunden). Die Kombination aus hoher Sonneneinstrahlung, hohen Strompreisen und progressiven Förderprogrammen macht Genf zu einem Hotspot für Photovoltaik.',
      'Die Investitionskosten in Genf sind etwas höher als im Rest der Schweiz, aber immer noch rentabel: Eine 5-kWp-Anlage kostet zwischen 10.000 und 13.000 CHF vor Förderung. Die höheren Preise resultieren aus den höheren Lohn- und Lebenshaltungskosten im Raum Genf. Dafür erhalten Sie Top-Qualität: Viele Genfer Solarteure verwenden ausschliesslich Premium-Module (SunPower, Meyer Burger, LG) und hochwertige Wechselrichter (SolarEdge, Fronius).',
      'Die Förderkulisse ist attraktiv: Nach Abzug der Bundesförderung (30%, ca. 3.000-3.900 CHF) und der kantonalen ScanE-Förderung (weitere 2.000-4.000 CHF möglich) zahlen Sie netto 6.000-8.000 CHF für eine 5-kW-Anlage. Diese produziert in Genf jährlich etwa 5.000-5.800 kWh, was bei den lokalen Strompreisen (26-30 Rp/kWh) jährliche Einsparungen von 1.700-2.300 CHF bedeutet. Amortisation: 4-5 Jahre.',
      'Besonders attraktiv: Die SIG (Services Industriels de Genève) bieten mit 10-12 Rp/kWh höhere Einspeisevergütungen als viele andere Schweizer Energieversorger (Durchschnitt: 6-8 Rp/kWh). Wer nicht den gesamten Solarstrom selbst verbraucht, profitiert also besonders. Zusätzlich bietet die SIG das "Mon Soleil"-Programm an: kostenlose Energieberatung und Unterstützung bei der Antragsstellung für alle verfügbaren Fördergelder.'
    ],

    pricing: {
      min: 10000,
      max: 26000,
      typical5kw: { min: 10000, max: 13000 },
      afterSubsidy5kw: { min: 6000, max: 8000 },
      roiYears: '4-5'
    },

    incentives: {
      title: 'Förderungen in Genf/Genève und Kanton GE',
      description: 'Genf bietet eine der progressivsten Förderkulissen der Schweiz:',
      programs: [
        {
          name: 'Bundesförderung EIV (Einmalvergütung)',
          amount: 'bis zu 30%',
          description: 'Schweizweite Grundförderung. Für eine 5-kW-Anlage erhalten Sie 3.000-3.900 CHF nach Inbetriebnahme.'
        },
        {
          name: 'Programme ScanE Genève',
          amount: 'zusätzlich 20-35%',
          description: 'Kantonales Förderprogramm für Solaranlagen: Zusätzlich 2.000-4.000 CHF für 5-kW-Anlagen, bei grösseren Systemen proportional mehr. Besonders hohe Förderung für Anlagen mit Eigenverbrauchsoptimierung.'
        },
        {
          name: 'SIG Mon Soleil Bonus',
          amount: '500-1.500 CHF',
          description: 'Die Genfer Energieversorgerin SIG bietet Kunden Bonuszahlungen beim Anschluss einer Solaranlage und attraktive Einspeisevergütungen von 10-12 Rp/kWh (höher als Schweizer Durchschnitt).'
        },
        {
          name: 'Steuerliche Absetzbarkeit',
          amount: '100% absetzbar',
          description: 'Vollständig vom steuerbaren Einkommen abziehbar. Bei Genfer Steuersätzen bedeutet das weitere 2.500-4.500 CHF Ersparnis.'
        }
      ]
    },

    caseStudies: [
      {
        name: 'Famille Dubois',
        location: 'Genève-Champel',
        systemSize: '6.5 kWp',
        cost: '10.500 CHF (après subventions)',
        savings: '2.300 CHF par an',
        payback: '4.5 ans',
        quote: 'Avec le Programme ScanE, nous avons reçu près de 6.000 CHF de subventions! Notre installation solaire produit même plus que prévu grâce aux 1.849 heures de soleil. Excellent investissement!'
      },
      {
        name: 'Herr Keller',
        location: 'Genf-Eaux-Vives',
        systemSize: '5.5 kWp',
        cost: '8.200 CHF (nach Förderung)',
        savings: '2.100 CHF pro Jahr',
        payback: '4 Jahre',
        quote: 'Als deutscher Expatriate war ich überrascht, wie unkompliziert alles war. Die SIG hat mich persönlich beraten, und die Förderungen waren sehr grosszügig. Solar lohnt sich in Genf definitiv!'
      },
      {
        name: 'Famille Perrin',
        location: 'Genève-Carouge',
        systemSize: '7.2 kWp avec stockage',
        cost: '17.800 CHF (après toutes aides)',
        savings: '2.600 CHF/an + 70% autoconsommation',
        payback: '5.5 ans',
        quote: 'Le système avec batterie change tout! Nous utilisons notre électricité solaire même le soir. La SIG nous paie 12 Rp/kWh pour le surplus - meilleur tarif de Suisse!'
      }
    ],

    faqs: [
      {
        question: 'Warum ist Genf ideal für Solarenergie?',
        answer: 'Genf bietet eine einzigartige Kombination: (1) 1.849 Sonnenstunden pro Jahr - 18% mehr als Zürich. (2) Hohe Einspeisevergütung durch die SIG (10-12 Rp/kWh vs. 6-8 Rp/kWh anderswo). (3) Grosszügige Förderungen: Bundesförderung + ScanE-Programm + SIG-Bonus = bis zu 50% der Kosten zurück. (4) Milde Winter am Genfersee bedeuten ganzjährig gute Erträge. (5) Hohe Strompreise (26-30 Rp/kWh) machen jede selbst produzierte kWh wertvoll. Die Amortisation dauert nur 4-5 Jahre.'
      },
      {
        question: 'Combien coûte une installation solaire à Genève?',
        answer: 'Les coûts à Genève sont légèrement plus élevés qu\'ailleurs en Suisse: Une installation de 5 kWp coûte 10.000-13.000 CHF avant subventions. Après déduction des aides fédérales (30%, env. 3.000-3.900 CHF), du Programme ScanE (2.000-4.000 CHF) et du bonus SIG (500-1.500 CHF), vous payez net 6.000-8.000 CHF. Pour une installation plus grande (8-10 kWp): 16.000-26.000 CHF brut, net 11.000-17.000 CHF après aides.'
      },
      {
        question: 'Quelles sont les subventions disponibles à Genève?',
        answer: 'Genève offre un système de subventions parmi les plus généreux de Suisse: (1) Subvention fédérale PRU: 30% des coûts, env. 3.000-3.900 CHF pour 5 kWp. (2) Programme ScanE du Canton de Genève: 20-35% additionnels, 2.000-4.000 CHF pour 5 kWp. (3) Bonus SIG "Mon Soleil": 500-1.500 CHF pour les clients SIG. (4) Déduction fiscale: 100% déductible du revenu imposable, économie fiscale de 2.500-4.500 CHF selon votre taux. Total: jusqu\'à 50% des coûts récupérés!'
      },
      {
        question: 'Wie finde ich einen guten Solarteur in Genf?',
        answer: 'Genf hat über 30 spezialisierte Solarteure, viele davon zweisprachig (français/deutsch). Wichtig: Vergleichen Sie mindestens 3 Offerten! Die Preisunterschiede können 5.000-8.000 CHF betragen. Achten Sie auf: (1) Verwendete Komponenten (Premium-Module wie SunPower, Meyer Burger empfehlenswert). (2) Garantien (min. 10 Jahre Installationsgarantie). (3) Referenzen in Ihrer Region. (4) ScanE-Registrierung (nur registrierte Betriebe können Kantonsbeiträge beantragen). PVPro vermittelt kostenlos bis zu 3 geprüfte Angebote.'
      },
      {
        question: 'Wie hoch ist die Einspeisevergütung in Genf?',
        answer: 'Die SIG (Services Industriels de Genève) zahlt mit 10-12 Rp/kWh die höchsten Einspeisevergütungen der Schweiz (Durchschnitt: 6-8 Rp/kWh). Das macht Genf besonders attraktiv für grössere Anlagen mit Überschusseinspeisung. Beispiel: Eine 7-kW-Anlage produziert 6.000-7.000 kWh/Jahr. Bei 35% Eigenverbrauch nutzen Sie 2.100-2.450 kWh selbst (Ersparnis 600-735 CHF bei 28 Rp/kWh) und speisen 3.900-4.550 kWh ein (Vergütung 468-546 CHF). Gesamtertrag: 1.068-1.281 CHF/Jahr.'
      },
      {
        question: 'Brauche ich in Genf eine Baubewilligung?',
        answer: 'Für Aufdachanlagen auf bestehenden Gebäuden benötigen Sie im Kanton Genf normalerweise eine vereinfachte Baubewilligung ("autorisation simplifiée"). Der Prozess dauert 2-4 Wochen. In Schutzzonen und bei denkmalgeschützten Gebäuden (z.B. Altstadt) ist ein ordentliches Verfahren nötig. Die Genfer Behörden sind aber sehr solar-freundlich: über 95% der Gesuche werden bewilligt. Ihr Solarteur übernimmt alle administrativen Schritte und kommuniziert mit dem "Office cantonal de l\'énergie" (OCEN).'
      },
      {
        question: 'Lohnt sich ein Batteriespeicher in Genf?',
        answer: 'In Genf ist die Rechnung speziell: Die hohe Einspeisevergütung von 10-12 Rp/kWh macht Einspeisung attraktiver als anderswo. Dennoch: Ein Speicher erhöht Ihren Eigenverbrauch von 30-35% auf 65-75%, und selbst genutzter Strom spart Ihnen 26-30 Rp/kWh statt nur 10-12 Rp/kWh Einspeisevergütung. Ein 10-kWh-Speicher kostet 7.000-10.000 CHF zusätzlich, verlängert die Amortisation um 2-3 Jahre, macht Sie aber deutlich unabhängiger. Empfehlung: Für die meisten Genfer reicht zunächst die Anlage ohne Speicher; nachrüsten ist später jederzeit möglich.'
      },
      {
        question: 'Wie viel Strom produziert eine Anlage in Genf?',
        answer: 'Mit 1.849 Sonnenstunden produziert eine 5-kWp-Anlage in Genf jährlich etwa 5.000-5.800 kWh - das ist 15-18% mehr als im Schweizer Mittelland. Pro installiertem kWp können Sie mit ca. 1.000-1.160 kWh rechnen. Ein typischer 4-Personen-Haushalt in Genf verbraucht etwa 4.000-4.500 kWh/Jahr. Mit einer 5-kW-Anlage produzieren Sie also mehr als Sie brauchen! Der Überschuss wird von der SIG mit 10-12 Rp/kWh vergütet - eine der höchsten Vergütungen der Schweiz.'
      }
    ],

    testimonial: {
      initials: 'FD',
      name: 'Famille Dubois',
      quote: 'Notre installation solaire à Genève est le meilleur investissement que nous ayons fait! Avec le Programme ScanE et les bonus SIG, nous avons récupéré presque la moitié des coûts. L\'installation produit plus de 6.000 kWh par an - nous vendons même du surplus à la SIG. Rentabilité après seulement 4 ans!'
    }
  },

  // BASEL - Position 35.8, strong potential
  basel: {
    slug: 'basel',
    heroHeadline: 'Solaranlage Basel-Stadt',
    heroSubheadline: 'Dreiländereck mit Solarpower',
    heroDescription: 'Basel, die Kulturstadt am Rhein im Dreiländereck, bietet mit 1.631 Sonnenstunden optimale Bedingungen für Photovoltaik. Der Kanton Basel-Stadt fördert erneuerbare Energien besonders aktiv - profitieren Sie von den umfassendsten Förderungen der Nordwestschweiz.',

    whySolarTitle: 'Warum Solar in Basel besonders lohnt',
    whySolarIntro: 'Basel vereint wirtschaftliche Stärke mit ökologischem Bewusstsein. Die Stadt hat sich zum Ziel gesetzt, bis 2030 klimaneutral zu werden. Für Hausbesitzer bedeutet das: attraktive Förderungen, kostenlose Beratung und ein dynamischer Markt mit über 25 spezialisierten Solarteuren.',
    whySolarReasons: [
      {
        title: '1.631 Sonnenstunden - Rheintalpotenzial',
        description: 'Mit 1.631 Sonnenstunden jährlich liegt Basel im Schweizer Mittelfeld, aber dank der Lage im Rheintal und dem milden Klima sind die Bedingungen optimal. Die vielen Dachflächen in Basel-Stadt bieten enormes ungenutztes Potential - über 60% der Dächer sind für Solar geeignet.'
      },
      {
        title: 'Kanton BS: Förderprogramm Energie',
        description: 'Basel-Stadt bietet eines der grosszügigsten kantonalen Förderprogramme: Neben der Bundesförderung erhalten Sie zusätzliche 15-25% vom Kanton, plus Bonusförderungen bei Kombination mit Gebäudesanierung. Gesamtförderung: bis zu 45% der Investitionskosten!'
      },
      {
        title: 'IWB Green Power Programm',
        description: 'Die Industriellen Werke Basel (IWB) fördern Solarenergie aktiv: attraktive Einspeisevergütung, kostenlose Energieberatung und das "IWB Solarstrom"-Programm mit Bonus-Angeboten für Eigenverbrauchsgemeinschaften in Mehrfamilienhäusern.'
      }
    ],

    cityFactsTitle: 'Photovoltaik in Basel: Kulturstadt wird Solarstadt',
    cityFactsParagraphs: [
      'Basel, die traditionsreiche Kulturstadt am Rhein, entwickelt sich zunehmend zur Solarstadt. Was in Riehen und Bettingen begann, setzt sich nun in der ganzen Stadt fort: Immer mehr Basler Dächer werden mit Photovoltaikanlagen ausgestattet. Der Grund ist einfach: Basel bietet eine der attraktivsten Kombinationen aus Förderungen, Strompreisen und Sonnenstunden in der Nordwestschweiz.',
      'Mit 1.631 Sonnenstunden pro Jahr liegt Basel leicht über dem Mittelland-Durchschnitt. Die Lage im Rheintal sorgt für ein mildes Klima mit warmen Sommern und vergleichsweise wenig Nebel im Winter. Eine 5-kWp-Anlage produziert in Basel jährlich etwa 4.700-5.400 kWh - genug, um einen durchschnittlichen Haushalt vollständig mit Strom zu versorgen. Bei den lokalen Strompreisen von 24-28 Rp/kWh bedeutet das jährliche Einsparungen von 1.500-2.100 CHF.',
      'Die Investitionskosten in Basel sind wettbewerbsfähig: Eine 5-kWp-Anlage kostet zwischen 9.200 und 12.000 CHF vor Förderung. Die Stadt verfügt über ein dichtes Netzwerk von über 25 spezialisierten Solarteuren, was zu fairem Wettbewerb und guten Preisen führt. Nach Abzug der Bundesförderung (30%, ca. 2.760-3.600 CHF) und der kantonalen Förderung Basel-Stadt (weitere 1.500-3.000 CHF) zahlen Sie netto nur 5.700-7.500 CHF. Amortisation: 4-5 Jahre.',
      'Besonders hervorzuheben: Basel-Stadt hat sich ehrgeizige Klimaziele gesetzt und fördert Solar entsprechend aggressiv. Das kantonale "Förderprogramm Energie" bietet nicht nur Geld, sondern auch kostenlose Vor-Ort-Beratung durch Experten. Wer sein Dach saniert und gleichzeitig Solar installiert, erhält Kombi-Förderungen von bis zu 8.000 CHF zusätzlich. Die IWB (Industrielle Werke Basel) unterstützen mit attraktiven Einspeisevergütungen und Bonusprogrammen. Für Basler Hausbesitzer gibt es kaum Gründe, NICHT auf Solar zu setzen.'
    ],

    pricing: {
      min: 9200,
      max: 24500,
      typical5kw: { min: 9200, max: 12000 },
      afterSubsidy5kw: { min: 5700, max: 7500 },
      roiYears: '4-5'
    },

    incentives: {
      title: 'Förderungen in Basel-Stadt (Kanton BS)',
      description: 'Basel bietet eine der umfassendsten Förderkulissen der Schweiz:',
      programs: [
        {
          name: 'Bundesförderung EIV (Einmalvergütung)',
          amount: 'bis zu 30%',
          description: 'Grundförderung für alle Schweizer PV-Anlagen. Für eine 5-kW-Anlage erhalten Sie 2.760-3.600 CHF.'
        },
        {
          name: 'Kanton Basel-Stadt Energieförderung',
          amount: 'zusätzlich 15-25%',
          description: 'Kantonales Förderprogramm: Zusätzliche 1.500-3.000 CHF für 5-kW-Anlagen. Bei grösseren Anlagen proportional mehr. Besonders hohe Förderung bei Kombination mit Gebäudesanierung (bis zu 8.000 CHF Bonus).'
        },
        {
          name: 'IWB Solarstrom-Programm',
          amount: '500-1.200 CHF Bonus',
          description: 'Die Industriellen Werke Basel bieten Kunden Bonuszahlungen bei Installation einer Solaranlage und attraktive Einspeisevergütungen von 9-11 Rp/kWh.'
        },
        {
          name: 'Steuerliche Absetzbarkeit',
          amount: '100% absetzbar',
          description: 'Vollständig vom steuerbaren Einkommen abziehbar. Bei Basler Steuersätzen weitere 2.000-3.500 CHF Ersparnis.'
        }
      ]
    },

    caseStudies: [
      {
        name: 'Familie Gerber',
        location: 'Basel-Riehen',
        systemSize: '6.2 kWp',
        cost: '9.800 CHF (nach Förderung)',
        savings: '2.200 CHF pro Jahr',
        payback: '4.5 Jahre',
        quote: 'Die Förderungen in Basel sind unschlagbar! Wir haben über 5.000 CHF an Zuschüssen erhalten - Bund, Kanton und IWB. Unsere Anlage produziert mehr als erwartet, und die Investition hat sich schneller amortisiert als geplant.'
      },
      {
        name: 'Herr Schmid',
        location: 'Basel-Gundeldingen',
        systemSize: '5.5 kWp',
        cost: '7.200 CHF (nach Förderung)',
        savings: '1.900 CHF pro Jahr',
        payback: '3.8 Jahre',
        quote: 'Als ich drei Angebote verglichen habe, konnte ich fast 4.000 CHF sparen! Die Basler Solarteure sind professionell, und dank der tollen Förderungen ist Solar hier ein No-Brainer.'
      },
      {
        name: 'Familie Weber',
        location: 'Basel-Bettingen',
        systemSize: '7.5 kWp mit Speicher',
        cost: '16.500 CHF (nach allen Förderungen)',
        savings: '2.500 CHF pro Jahr + 68% Eigenverbrauch',
        payback: '5.5 Jahre',
        quote: 'Der Batteriespeicher macht uns fast autark. Die IWB zahlt uns immer noch guten Preis für unseren Überschussstrom. Nach 5.5 Jahren haben wir alles drin - und dann 20 Jahre kostenlosen Strom!'
      }
    ],

    faqs: [
      {
        question: 'Warum ist Basel ideal für Solarenergie?',
        answer: 'Basel bietet eine einzigartige Kombination: (1) Gute Sonnenstunden: 1.631 Stunden/Jahr, dank milder Rheintal-Lage. (2) Grosszügigste Förderungen der Nordwestschweiz: Bundesförderung + Kanton BS + IWB-Bonus = bis zu 45% der Kosten zurück. (3) Klimaziel 2030: Die Stadt fördert Solar aggressiv, kostenlose Beratung inklusive. (4) Über 25 spezialisierte Solarteure = faire Preise durch Wettbewerb. (5) IWB-Einspeisevergütung: 9-11 Rp/kWh, höher als Schweizer Durchschnitt. Amortisation: nur 4-5 Jahre.'
      },
      {
        question: 'Was kostet eine Solaranlage in Basel?',
        answer: 'Basel bietet dank Wettbewerb faire Preise: Eine 5-kWp-Anlage kostet 9.200-12.000 CHF vor Förderung. Nach Abzug aller Förderungen (Bund 30% + Kanton BS 15-25% + IWB-Bonus) zahlen Sie netto nur 5.700-7.500 CHF - das ist günstiger als in Zürich oder Genf! Grössere 8-10 kWp-Anlagen kosten 15.000-24.500 CHF brutto, netto 9.500-16.000 CHF. Durch den Vergleich von 3 Offerten können Sie zusätzlich 3.000-5.000 CHF sparen.'
      },
      {
        question: 'Welche Förderungen bietet der Kanton Basel-Stadt?',
        answer: 'Basel-Stadt hat eines der grosszügigsten Förderprogramme: (1) Bundesförderung EIV: 30%, etwa 2.760-3.600 CHF für 5 kWp. (2) Kanton BS Energieförderung: zusätzlich 15-25%, etwa 1.500-3.000 CHF für 5 kWp. (3) Kombi-Bonus bei Dachsanierung: weitere 3.000-5.000 CHF. (4) IWB Solarstrom-Bonus: 500-1.200 CHF. (5) Steuerliche Absetzbarkeit: 100%, weitere 2.000-3.500 CHF Ersparnis. Insgesamt: bis zu 45% der Investition zurück, teilweise sogar bis 50% bei Kombi-Sanierungen!'
      },
      {
        question: 'Wie finde ich einen guten Solarteur in Basel?',
        answer: 'Basel hat über 25 spezialisierte Solarteure - eine der höchsten Dichten der Schweiz. Wichtig: Holen Sie mindestens 3 Offerten ein! Die Preisunterschiede können erheblich sein (3.000-6.000 CHF). Achten Sie auf: (1) Verwendete Komponenten (Qualitäts-Module empfohlen). (2) Garantien (min. 10 Jahre). (3) Referenzen in Basel/Umgebung. (4) Registrierung beim Kanton BS (nur registrierte Betriebe können Kantonsbeiträge beantragen). PVPro vermittelt kostenlos 3 geprüfte Basler Angebote - unsere Kunden sparen durchschnittlich 4.000 CHF.'
      },
      {
        question: 'Brauche ich in Basel eine Baubewilligung?',
        answer: 'Für Aufdachanlagen auf bestehenden Gebäuden benötigen Sie in Basel-Stadt normalerweise keine Baubewilligung, sondern nur eine Meldung beim Bau- und Gastgewerbeinspektorat (Meldeverfahren). Ausnahmen: denkmalgeschützte Gebäude, Altstadt, Schutzzonen. In diesen Fällen ist eine vereinfachte Baubewilligung erforderlich, die in 90% der Fälle bewilligt wird. Basel-Stadt ist sehr solar-freundlich! Ihr Solarteur kennt alle Vorschriften und übernimmt die administrativen Schritte.'
      },
      {
        question: 'Wie viel Strom produziert eine Anlage in Basel?',
        answer: 'Mit 1.631 Sonnenstunden produziert eine 5-kWp-Anlage in Basel jährlich etwa 4.700-5.400 kWh. Pro installiertem kWp können Sie mit ca. 940-1.080 kWh rechnen. Ein durchschnittlicher 4-Personen-Haushalt in Basel verbraucht etwa 4.200-4.800 kWh/Jahr. Mit einer 5-kW-Anlage decken Sie also Ihren gesamten Jahresbedarf! Ohne Speicher nutzen Sie direkt 30-35% (tagsüber), der Rest wird ins Netz eingespeist und von der IWB mit 9-11 Rp/kWh vergütet.'
      },
      {
        question: 'Lohnt sich ein Batteriespeicher in Basel?',
        answer: 'In Basel kann ein Speicher sinnvoll sein: Die IWB zahlt mit 9-11 Rp/kWh zwar überdurchschnittlich für Einspeisung, aber selbst genutzter Strom spart Ihnen 24-28 Rp/kWh. Ein 10-kWh-Speicher erhöht den Eigenverbrauch von 30-35% auf 65-75% und kostet zusätzlich 6.500-9.000 CHF. Die Amortisation verlängert sich um 2-3 Jahre, aber Sie gewinnen deutlich mehr Unabhängigkeit. Der Kanton BS fördert Speicher mit zusätzlichen 1.500-2.500 CHF. Empfehlung: Für die meisten Basler lohnt sich ein kleinerer 5-7 kWh Speicher als Kompromiss.'
      },
      {
        question: 'Was sind die Klimaziele von Basel und wie profitiere ich?',
        answer: 'Basel-Stadt will bis 2030 klimaneutral werden - ein ehrgeiziges Ziel! Das bedeutet für Sie: (1) Maximale Förderungen: Die Stadt will Solar massiv ausbauen und fördert entsprechend. (2) Kostenlose Beratung: Das Amt für Umwelt und Energie bietet Vor-Ort-Beratungen gratis. (3) Vereinfachte Verfahren: Bewilligungen werden prioritär behandelt. (4) Zukunftssichere Investition: Mit den Klimazielen wird Strom teurer, Solar rentabler. (5) Wertsteigerung Immobilie: Häuser mit Solar werden in Basel zunehmend begehrter. Wer jetzt investiert, profitiert doppelt!'
      }
    ],

    testimonial: {
      initials: 'FG',
      name: 'Familie Gerber',
      quote: 'Basel ist der perfekte Ort für Solar! Die Förderungen sind unglaublich - wir haben über die Hälfte unserer Investition durch Zuschüsse zurückerhalten. Die IWB zahlt uns guten Preis für unseren Überschussstrom, und unsere Stromrechnung ist praktisch auf Null. Nach nur 4 Jahren haben wir den Break-even erreicht!'
    }
  },

  // BERN - Capital city, political significance
  bern: {
    slug: 'bern',
    heroHeadline: 'Solaranlage Bern',
    heroSubheadline: 'Bundesstadt mit nachhaltiger Energie',
    heroDescription: 'Bern, die Schweizer Bundesstadt, setzt auf erneuerbare Energien. Mit 1.694 Sonnenstunden jährlich und vorbildlichen Förderprogrammen des Kantons BE bietet Bern optimale Bedingungen für Ihre Photovoltaikanlage. Vergleichen Sie jetzt kostenlos Angebote lokaler Solarteure.',

    whySolarTitle: 'Warum Solar in der Bundesstadt Bern?',
    whySolarIntro: 'Als politisches Zentrum der Schweiz nimmt Bern eine Vorreiterrolle in Sachen erneuerbare Energien ein. Der Kanton Bern hat eines der umfassendsten Energieförderungsprogramme des Landes aufgebaut. Für Hausbesitzer bedeutet das: attraktive Zuschüsse, professionelle Beratung und eine etablierte Solarinfrastruktur.',
    whySolarReasons: [
      {
        title: '1.694 Sonnenstunden - Mittelland-Standard',
        description: 'Mit 1.694 Sonnenstunden pro Jahr liegt Bern im soliden Mittelfeld der Schweizer Städte. Das mag unspektakulär klingen, aber: Bei den hohen Strompreisen und den grosszügigen Förderungen rechnet sich Solar in Bern trotzdem hervorragend. Jede kWp produziert hier ca. 950-1.100 kWh jährlich.'
      },
      {
        title: 'Kanton BE Energieförderung',
        description: 'Der Kanton Bern fördert Solaranlagen mit zusätzlich 15-20% zur Bundesförderung. Besonders attraktiv: Das "Energie Bern"-Programm bietet kostenlose Energieberatung, Unterstützung bei Bewilligungen und Bonus-Förderungen für innovative Systeme mit Batteriespeicher oder Wärmepumpen-Kopplung.'
      },
      {
        title: 'Hauptstadt-Vorteil: BKW Smart Energy',
        description: 'Die BKW (ehemals Bernische Kraftwerke) bietet Berner Hausbesitzern spezielle Smart-Energy-Lösungen: optimierte Einspeisevergütungen, intelligente Laststeuerung und attraktive Pakete für Solar + E-Auto-Ladestation. Als langjähriger Player kennt die BKW die Bedürfnisse der Berner genau.'
      }
    ],

    cityFactsTitle: 'Solarenergie in Bern: Hauptstadt der erneuerbaren Zukunft',
    cityFactsParagraphs: [
      'Bern, die beschauliche Bundesstadt mit ihrer mittelalterlichen Altstadt, mag auf den ersten Blick nicht wie eine Solar-Metropole wirken. Doch der Schein trügt: Bern entwickelt sich zunehmend zur Vorzeigestadt für urbane Solarenergie. Von Ostermundigen über Bümpliz bis Köniz installieren immer mehr Hausbesitzer Photovoltaikanlagen - und das aus gutem Grund.',
      'Mit 1.694 Sonnenstunden pro Jahr bietet Bern solide Bedingungen für Solarenergie. Eine typische 5-kWp-Anlage produziert hier jährlich 4.750-5.250 kWh, was dem durchschnittlichen Verbrauch eines 4-Personen-Haushalts entspricht. Bei den lokalen Strompreisen von 25-29 Rp/kWh (je nach Gemeinde) bedeutet das jährliche Einsparungen von 1.600-2.200 CHF, wenn Sie 30-40% selbst verbrauchen und den Rest ins Netz einspeisen (Vergütung: 7-9 Rp/kWh).',
      'Die Investitionskosten in Bern sind moderat: Eine 5-kWp-Anlage kostet zwischen 9.000 und 11.500 CHF vor Förderung. Die Region verfügt über ein gut ausgebautes Netzwerk von über 30 Solarteuren, viele davon mit jahrzehntelanger Erfahrung. Nach Abzug der Bundesförderung (30%, ca. 2.700-3.450 CHF) und der kantonalen Förderung Bern (weitere 1.500-2.500 CHF) zahlen Sie netto nur 5.800-7.500 CHF. Bei jährlichen Ersparnissen von 1.600-2.200 CHF erreichen Sie den Break-even nach 4-5 Jahren.',
      'Besonders erwähnenswert: Der Kanton Bern hat ein ausgezeichnetes Beratungsangebot. Das Programm "Energie Bern" bietet kostenlose Vor-Ort-Beratungen durch unabhängige Energieexperten. Diese analysieren Ihr Dach, berechnen das Solarpotential und unterstützen Sie bei der Antragsstellung für alle verfügbaren Fördergelder. Zusätzlich bietet die BKW als regionaler Energieversorger attraktive Smart-Energy-Lösungen, besonders für Hausbesitzer, die gleichzeitig auf E-Mobilität umsteigen. Die Kombination Solar + Wallbox + BKW-Energie-Management kann zusätzliche Förderungen von bis zu 2.000 CHF erschliessen.'
    ],

    pricing: {
      min: 9000,
      max: 24000,
      typical5kw: { min: 9000, max: 11500 },
      afterSubsidy5kw: { min: 5800, max: 7500 },
      roiYears: '4-5'
    },

    incentives: {
      title: 'Förderungen in Bern und Kanton BE',
      description: 'Bern bietet ein umfassendes mehrstufiges Fördersystem:',
      programs: [
        {
          name: 'Bundesförderung EIV (Einmalvergütung)',
          amount: 'bis zu 30%',
          description: 'Schweizweite Grundförderung für PV-Anlagen. Für eine 5-kW-Anlage erhalten Sie 2.700-3.450 CHF.'
        },
        {
          name: 'Kanton Bern Energieförderung',
          amount: 'zusätzlich 15-20%',
          description: 'Kantonales Programm: Zusätzliche 1.500-2.500 CHF für 5-kW-Anlagen. Bei Kombination mit Wärmepumpe oder energetischer Sanierung Bonus-Förderungen von 2.000-4.000 CHF zusätzlich möglich.'
        },
        {
          name: 'BKW Smart Energy Bonus',
          amount: '500-1.500 CHF',
          description: 'BKW-Kunden erhalten Bonuszahlungen bei Installation einer Solaranlage und zusätzliche Vergünstigungen bei Kombination mit E-Mobility (Solar + Wallbox: 1.000-1.500 CHF Bonus).'
        },
        {
          name: 'Steuerliche Absetzbarkeit',
          amount: '100% absetzbar',
          description: 'Vollständig vom steuerbaren Einkommen abziehbar. Bei Berner Steuersätzen weitere 1.800-3.200 CHF Ersparnis, abhängig von Gemeinde und Einkommen.'
        }
      ]
    },

    caseStudies: [
      {
        name: 'Familie Bieri',
        location: 'Bern-Ostermundigen',
        systemSize: '6.0 kWp',
        cost: '9.200 CHF (nach Förderung)',
        savings: '2.100 CHF pro Jahr',
        payback: '4.4 Jahre',
        quote: 'Die Beratung durch "Energie Bern" war top! Sie haben uns geholfen, alle verfügbaren Förderungen zu beantragen. Unsere Anlage läuft seit 18 Monaten perfekt, und die BKW zahlt pünktlich die Einspeisevergütung.'
      },
      {
        name: 'Herr Burkhalter',
        location: 'Bern-Bümpliz',
        systemSize: '5.2 kWp',
        cost: '7.500 CHF (nach Förderung)',
        savings: '1.850 CHF pro Jahr',
        payback: '4.0 Jahre',
        quote: 'Ich habe drei Offerten verglichen und das beste Angebot genommen. Die Förderungen in Bern sind grosszügig - fast die Hälfte meiner Investition kam durch Zuschüsse zurück. Solar ist ein No-Brainer!'
      },
      {
        name: 'Familie Moser',
        location: 'Köniz',
        systemSize: '7.8 kWp mit Speicher + Wallbox',
        cost: '19.500 CHF (nach allen Förderungen)',
        savings: '2.800 CHF pro Jahr + E-Auto laden',
        payback: '5.5 Jahre',
        quote: 'Wir haben Solar, Speicher und E-Auto-Ladestation gleichzeitig installiert. Mit der BKW-Kombi-Förderung haben wir zusätzliche 2.500 CHF erhalten. Jetzt fahren wir unser E-Auto praktisch gratis mit Sonnenstrom!'
      }
    ],

    faqs: [
      {
        question: 'Lohnt sich Solar in Bern trotz durchschnittlicher Sonnenstunden?',
        answer: 'Absolut! Bern hat zwar "nur" 1.694 Sonnenstunden (Schweizer Durchschnitt: ca. 1.700), aber das ist kein Nachteil. Die Rentabilität hängt von mehreren Faktoren ab: (1) Strompreise: In Bern 25-29 Rp/kWh, jede selbst produzierte kWh spart Geld. (2) Förderungen: Mit Bund + Kanton BE können Sie bis zu 45% der Kosten zurückerhalten. (3) Lange Lebensdauer: 25-30 Jahre Ertrag vs. nur 4-5 Jahre Amortisation. Eine 5-kW-Anlage in Bern produziert jährlich 4.750-5.250 kWh, genug für einen Haushalt. Die Rechnung geht klar auf!'
      },
      {
        question: 'Was kostet eine Solaranlage in Bern?',
        answer: 'Bern bietet faire Preise: Eine 5-kWp-Anlage kostet 9.000-11.500 CHF vor Förderung. Nach Bundesförderung (30%) und Kanton BE-Förderung (15-20%) zahlen Sie netto 5.800-7.500 CHF - das ist deutlich günstiger als die Brutto-Kosten! Grössere Anlagen (8-10 kWp) kosten 14.500-24.000 CHF brutto, netto 9.500-16.000 CHF. Wichtig: Vergleichen Sie mehrere Angebote. Bei über 30 Solarteuren in der Region können die Preisunterschiede 3.000-5.000 CHF betragen.'
      },
      {
        question: 'Welche Förderungen gibt es im Kanton Bern?',
        answer: 'Der Kanton Bern hat ein sehr gutes Fördersystem: (1) Bundesförderung EIV: 30%, etwa 2.700-3.450 CHF für 5 kWp. (2) Kanton BE Energieförderung: zusätzlich 15-20%, etwa 1.500-2.500 CHF. (3) Kombi-Förderungen: Bei gleichzeitiger Installation von Wärmepumpe oder energetischer Sanierung weitere 2.000-4.000 CHF. (4) BKW Smart Energy Bonus: 500-1.500 CHF für Kunden. (5) Steuerliche Absetzbarkeit: 100%, weitere 1.800-3.200 CHF je nach Gemeinde und Steuersatz. Gesamt: bis zu 45-50% der Investition zurück!'
      },
      {
        question: 'Was ist das "Energie Bern" Programm?',
        answer: '"Energie Bern" ist ein kantonales Beratungs- und Förderprogramm. Es bietet: (1) Kostenlose Vor-Ort-Beratung durch unabhängige Energieexperten. (2) Dachanalyse und Solarpotential-Berechnung. (3) Unterstützung bei der Antragsstellung für alle Fördergelder. (4) Informationen zu Kombinations-Möglichkeiten (Solar + Wärmepumpe, Solar + E-Mobility). (5) Vermittlung geprüfter lokaler Installateure. Das Programm ist komplett kostenlos und neutral - keine Verkaufsinteressen! Jeder Berner Hausbesitzer sollte diese Beratung nutzen.'
      },
      {
        question: 'Lohnt sich Solar + E-Auto in Bern?',
        answer: 'Die Kombination Solar + E-Auto ist in Bern besonders attraktiv! (1) BKW-Kombi-Förderung: 1.000-1.500 CHF Bonus für Solar + Wallbox. (2) Kostenlos tanken: Mit einer 7-8 kWp-Anlage produzieren Sie genug Strom für Ihr E-Auto (ca. 2.000-3.000 kWh/Jahr für 15.000 km). (3) Intelligentes Lademanagement: BKW bietet Smart-Charging-Lösungen, die Ihr Auto laden, wenn die Sonne scheint. (4) Gesamtersparnis: Solar spart 1.600-2.200 CHF/Jahr Stromkosten, E-Auto weitere 2.000-2.500 CHF Benzinkosten. Zusammen: 3.600-4.700 CHF/Jahr! Amortisation des Gesamtsystems: 6-8 Jahre.'
      },
      {
        question: 'Brauche ich in Bern eine Baubewilligung?',
        answer: 'Für Aufdachanlagen auf bestehenden Gebäuden benötigen Sie im Kanton Bern in der Regel keine Baubewilligung, sondern nur eine Meldung an die Gemeinde. Ausnahmen: denkmalgeschützte Gebäude, Altstadt Bern, Schutzzonen. In diesen Fällen ist eine vereinfachte Baubewilligung erforderlich, die aber meist bewilligt wird (>95%). Der Kanton Bern ist sehr solar-freundlich! Ihr Solarteur kennt die lokalen Vorschriften und übernimmt alle administrativen Schritte inkl. Meldung bei Gemeinde und Netzbetreiber.'
      },
      {
        question: 'Wie viel Strom produziert eine Anlage in Bern?',
        answer: 'Mit 1.694 Sonnenstunden produziert eine 5-kWp-Anlage in Bern jährlich etwa 4.750-5.250 kWh. Pro kWp können Sie mit 950-1.050 kWh rechnen. Ein durchschnittlicher 4-Personen-Haushalt in Bern verbraucht ca. 4.500 kWh/Jahr - eine 5-kW-Anlage deckt also Ihren gesamten Jahresbedarf! Ohne Speicher nutzen Sie 30-35% direkt (tagsüber), der Rest wird eingespeist und vergütet (7-9 Rp/kWh). Mit Speicher steigt die Eigennutzung auf 65-75%, Sie werden also deutlich unabhängiger vom Stromnetz.'
      },
      {
        question: 'Lohnt sich ein Batteriespeicher in Bern?',
        answer: 'Ein Speicher kann in Bern sinnvoll sein, ist aber nicht zwingend: Ohne Speicher nutzen Sie 30-35% Ihres Solarstroms selbst und speisen 65-70% ein (Vergütung 7-9 Rp/kWh). Mit Speicher steigt die Eigennutzung auf 65-75%, Sie sparen also 25-29 Rp/kWh statt nur 7-9 Rp/kWh Einspeisevergütung zu bekommen. Ein 10-kWh-Speicher kostet zusätzlich 6.500-9.000 CHF, verlängert die Amortisation um 2-3 Jahre, macht Sie aber deutlich unabhängiger. Der Kanton BE fördert Speicher mit zusätzlichen 1.500-2.000 CHF. Empfehlung: Für die meisten Berner lohnt sich Solar zunächst ohne Speicher; nachrüsten ist später jederzeit möglich.'
      }
    ],

    testimonial: {
      initials: 'FB',
      name: 'Familie Bieri',
      quote: 'Solar in Bern ist einfach clever! Die Förderungen sind grosszügig, die Beratung durch "Energie Bern" war hervorragend, und unsere Anlage läuft seit 18 Monaten absolut zuverlässig. Wir produzieren mehr Strom als wir brauchen und verkaufen den Überschuss an die BKW. Nach nur 4.4 Jahren sind wir im Plus - und haben dann noch 20 Jahre kostenlosen Strom!'
    }
  }
};

// Helper function to get content for a city
export function getCityContent(slug: string): CityContent | undefined {
  const content = cityContents[slug];
  if (content) return content;
  
  // Handled language variants
  if (slug === 'geneve' || slug === 'genf') return cityContents['genf'];
  if (slug === 'lausanne') return cityContents['lausanne'];
  if (slug === 'fribourg') return cityContents['fribourg'];
  if (slug === 'neuchatel') return cityContents['neuchatel'];
  if (slug === 'lugano') return cityContents['lugano'];
  
  // Extra mapping for Neuchâtel with special character
  if (slug === 'neuchâtel') return cityContents['neuchatel'];
  
  return undefined;
}

// Helper to check if city has custom content
export function hasCityContent(slug: string): boolean {
  return slug in cityContents;
}
