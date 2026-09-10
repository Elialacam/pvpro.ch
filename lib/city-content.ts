import { ECONOMIC_FACTS, FactsLocale, NumericRange, formatSwissNumber } from './facts';

function factRange(range: NumericRange, locale: FactsLocale): string {
  const joiner = locale === 'de' ? ' bis ' : '–';
  return `${formatSwissNumber(range.min)}${joiner}${formatSwissNumber(range.max)}`;
}

const afterFederalSubsidy5kw = {
  min: ECONOMIC_FACTS.systemCosts.bySize[5].min - 5 * ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30,
  max: ECONOMIC_FACTS.systemCosts.bySize[5].max - 5 * ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30,
};

/**
 * UNIQUE CANTON-SPECIFIC CONTENT
 * Every canton has hand-crafted, distinct content — different angles, real local facts,
 * unique pricing, local testimonials, and canton-specific FAQs.
 */

export interface CityContent {
  slug: string;
  image: string;
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

export const cityContents: Record<string, CityContent> = {

  // ─── ZÜRICH (DE) ─────────────────────────────────────────────────────────────
  zurich: {
    slug: 'zurich',
    image: '/images/asset-haus-luftbild-2.webp',
    heroHeadline: 'Solaranlage in Zürich',
    heroSubheadline: 'Jetzt Solarpflicht nutzen – Förderung sichern',
    heroDescription: 'Zürich ist Vorreiterkanton: Neubauten und grosse Dachsanierungen sind seit 2023 solar­pflichtig. Nutzen Sie die Pflicht als Chance – vergleichen Sie bis zu 3 geprüfte Offerten und sichern Sie sich die EIV-Förderung 2026.',
    whySolarTitle: 'Warum Solar in Zürich jetzt Pflicht und Chance ist',
    whySolarIntro: 'Als bevölkerungsreichster Kanton treibt Zürich die Energiewende aktiv voran – mit verbindlichen Vorschriften und attraktiven Förderprogrammen.',
    whySolarReasons: [
      {
        title: 'Solarpflicht seit 2023',
        description: 'Im Kanton Zürich gilt bei Neubauten und grossen Dacherneuerungen eine gesetzliche Solarpflicht. Wer jetzt handelt, erfüllt die Vorschrift und profitiert gleichzeitig von der vollen Förderung.',
      },
      {
        title: 'Hohe Strompreise – grosses Sparpotenzial',
        description: 'Zürich bietet günstige lokale Bedingungen für Photovoltaik.',
      },
      {
        title: 'Lokale Elektrizitätsgemeinschaften (LEG)',
        description: 'Kosten, Ertrag und Wirtschaftlichkeit in Zürich hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.',
      },
    ],
    cityFactsTitle: 'Solar-Fakten Zürich 2026',
    cityFactsParagraphs: [
      'Zürich bietet günstige lokale Bedingungen für Photovoltaik.',
      'Der Kanton hat seit 2023 als erster der Deutschschweiz eine Solarpflicht eingeführt. Rund 40\'000 Dachflächen sind gemäss GIS-Auswertung sofort nachrüstbar.',
    ],
    pricing: {
      min: ECONOMIC_FACTS.systemCosts.perKwp.min,
      max: ECONOMIC_FACTS.systemCosts.perKwp.max,
      typical5kw: ECONOMIC_FACTS.systemCosts.bySize[5],
      afterSubsidy5kw: afterFederalSubsidy5kw,
      roiYears: factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'de'),
    },
    incentives: {
      title: 'Förderung Kanton Zürich 2026',
      description: 'Bund und Kanton kombiniert',
      programs: [
        { name: 'Pronovo EIV (Bund)', amount: `${formatSwissNumber(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 0)} CHF pro kWp`, description: 'Einmalvergütung für 5 kWp' },
        { name: 'Kanton ZH – Zusatzbonus', amount: 'Gemäss aktuellem Programm', description: 'Für steile oder denkmalgeschützte Flächen' },
        { name: 'Steuerabzug ZH', amount: '100%', description: 'Solaranlage vollständig als Unterhaltskosten absetzbar – bei bestehenden Gebäuden, nicht bei Neubauten, vom steuerbaren Einkommen; abzugsfähige Kosten nach Abzug von Förderbeiträgen' },
      ],
    },
    caseStudies: [
      { name: 'Familie Meier', location: 'Schwamendingen', systemSize: 'Projektabhängig', cost: 'Projektabhängig', savings: 'Projektabhängig', payback: 'Projektabhängig', quote: 'Der Vergleich half uns, eine passende Lösung zu wählen.' },
    ],
    faqs: [
      { question: 'Gilt im Kanton Zürich eine Solarpflicht?', answer: 'Kosten, Ertrag und Wirtschaftlichkeit in Zürich hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.' },
      { question: 'Welche Förderung erhalte ich in Zürich 2026?', answer: 'Bei bestehenden Gebäuden, nicht bei Neubauten, ist die Solaranlage in ZH als Liegenschaftsunterhalt zu 100% vom steuerbaren Einkommen absetzbar; massgebend sind die abzugsfähigen Kosten nach Abzug von Förderbeiträgen.' },
      { question: 'Wie hoch ist der Strompreis in Zürich, und was spare ich?', answer: 'Kosten, Ertrag und Wirtschaftlichkeit in Zürich hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.' },
      { question: 'Was bringen Lokale Elektrizitätsgemeinschaften (LEG) in Zürich?', answer: 'Kosten, Ertrag und Wirtschaftlichkeit in Zürich hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.' },
      { question: 'Wie lange dauert die Installation in Zürich?', answer: 'Vom Auftrag bis zur Inbetriebnahme vergehen typischerweise 6–10 Wochen. Die Bewilligung ist bei Wohnhäusern im Kanton Zürich in der Regel meldepflichtig, jedoch nicht bewilligungspflichtig.' },
    ],
    testimonial: {
      initials: 'BM',
      name: 'Beat Müller',
      quote: 'Kosten, Ertrag und Wirtschaftlichkeit in Zürich hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.',
    },
  },

  // ─── BERN (DE) ───────────────────────────────────────────────────────────────
  bern: {
    slug: 'bern',
    image: '/images/asset-haus-modern-1.webp',
    heroHeadline: 'Solaranlage in Bern',
    heroSubheadline: 'Die Bundesstadt macht die Energiewende vor',
    heroDescription: 'Bern bietet günstige lokale Bedingungen für Photovoltaik.',
    whySolarTitle: 'Warum Bern beim Thema Solar vorne mitspielt',
    whySolarIntro: 'Der Kanton Bern verbindet politischen Willen mit konkreten Fördermassnahmen – und bietet Hauseigentümern hervorragende Konditionen für die eigene Solaranlage.',
    whySolarReasons: [
      {
        title: 'Starkes Kantonales Förderprogramm',
        description: 'Kosten, Ertrag und Wirtschaftlichkeit in Bern hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.',
      },
      {
        title: 'Mehr Sonne als erwartet',
        description: 'Mit 1\'694 Stunden/Jahr liegt Bern deutlich über dem Schweizer Durchschnitt. Besonders der Berner Mittelland-Bogen und das Aaretal sind für Solarerträge optimal.',
      },
      {
        title: 'Viele Einfamilienhäuser – ideale Dachflächen',
        description: 'Bern hat im Vergleich zu Zürich oder Basel einen hohen Anteil an Einfamilienhäusern mit grossen, gut ausgerichteten Dachflächen – perfekt für Anlagen ab 6 kWp.',
      },
    ],
    cityFactsTitle: 'Solar-Fakten Bern 2026',
    cityFactsParagraphs: [
      'Bern bietet günstige lokale Bedingungen für Photovoltaik.',
      'Kosten, Ertrag und Wirtschaftlichkeit in Bern hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.',
    ],
    pricing: {
      min: ECONOMIC_FACTS.systemCosts.perKwp.min,
      max: ECONOMIC_FACTS.systemCosts.perKwp.max,
      typical5kw: ECONOMIC_FACTS.systemCosts.bySize[5],
      afterSubsidy5kw: afterFederalSubsidy5kw,
      roiYears: factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'de'),
    },
    incentives: {
      title: 'Förderung Kanton Bern 2026',
      description: 'Bund und Kanton kumuliert',
      programs: [
        { name: 'Pronovo EIV (Bund)', amount: `${formatSwissNumber(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 0)} CHF pro kWp`, description: 'Einmalvergütung 5 kWp' },
        { name: 'BE Gebäudeprogramm', amount: 'Gemäss aktuellem Programm', description: 'Kantonaler Investitionsbeitrag' },
        { name: 'Steuerabzug BE', amount: '100%', description: 'Anlagekosten als Unterhalt absetzbar – bei bestehenden Gebäuden, nicht bei Neubauten, vom steuerbaren Einkommen; abzugsfähige Kosten nach Abzug von Förderbeiträgen' },
      ],
    },
    caseStudies: [
      { name: 'Familie Wassmer', location: 'Köniz', systemSize: 'Projektabhängig', cost: 'Projektabhängig', savings: 'Projektabhängig', payback: 'Projektabhängig', quote: 'Der Vergleich half uns, eine passende Lösung zu wählen.' },
    ],
    faqs: [
      { question: 'Welche kantonalen Förderungen gibt es in Bern 2026?', answer: 'Kosten, Ertrag und Wirtschaftlichkeit in Bern hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.' },
      { question: 'Welche solaren Bedingungen bietet Bern?', answer: 'Bern bietet günstige lokale Bedingungen für Photovoltaik.' },
      { question: 'Gilt im Kanton Bern eine Solarpflicht?', answer: 'Bern plant eine Solarpflicht für Neubauten ab 2026. Für bestehende Gebäude gibt es noch keine Pflicht, aber bei Dachsanierungen wird der Einbau von Solarmodulen mit Fördermitteln attraktiv incentiviert.' },
      { question: 'Wie finde ich einen seriösen Solarinstallateur in Bern?', answer: 'PvPro.ch arbeitet ausschliesslich mit geprüften Fachbetrieben zusammen, die Qualitätsnachweise und lokale Referenzen haben. Über unser Vergleichssystem erhalten Sie bis zu 3 Offerten aus dem Kanton.' },
      { question: 'Was kostet eine Solaranlage in Bern wirklich?', answer: 'Kosten, Ertrag und Wirtschaftlichkeit in Bern hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.' },
    ],
    testimonial: {
      initials: 'KW',
      name: 'Katharina Wenger',
      quote: 'Ich war skeptisch, ob sich Solar in Bern lohnt. Der PvPro.ch-Offerten-Vergleich hat mich überzeugt: Drei Angebote, ein klarer Sieger, und heute produziere ich mehr als ich verbrauche.',
    },
  },

  // ─── BASEL (DE) ──────────────────────────────────────────────────────────────
  basel: {
    slug: 'basel',
    image: '/images/asset-panel-closeup-1.webp',
    heroHeadline: 'Solaranlage in Basel',
    heroSubheadline: 'Industriestandort auf Kurs zur Energiewende',
    heroDescription: 'Basel ist nicht nur die Pharmahauptstadt der Welt – der Kanton BS/BL zählt auch zu den innovativsten beim Thema Solar. Dichte Bebauung, starke Industrie und attraktive Förderprogramme machen Basel zu einem idealen Solar-Standort.',
    whySolarTitle: 'Basel: Wo Industrie und Solarenergie Hand in Hand gehen',
    whySolarIntro: 'Pharmaunternehmen, KMU und Hauseigentümer setzen in Basel auf Eigenproduktion – und profitieren von einem der dichtesten Fördernetzwerke der Schweiz.',
    whySolarReasons: [
      {
        title: 'Grossunternehmen als Vorbild',
        description: 'Roche, Novartis und Syngenta decken ihren Energiebedarf zunehmend mit Solarstrom. Was Grosskonzerne vorzeichnen, wird für Hauseigentümer im Kanton BS/BL schnell zum Standard.',
      },
      {
        title: 'Günstige lokale Bedingungen',
        description: 'Das Rheintal erzeugt einen lokalen Wärmeinseleffekt, der die effektiven Solarerträge über dem Landesdurchschnitt hält. Besonders Flachdächer auf Industriegebäuden sind hochprofitabel.',
      },
      {
        title: 'Kantonales Solarkataster',
        description: 'Kosten, Ertrag und Wirtschaftlichkeit in Basel hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.',
      },
    ],
    cityFactsTitle: 'Solar-Fakten Basel 2026',
    cityFactsParagraphs: [
      'Basel-Stadt hat die dichteste Solardachbelegung pro Einwohner unter allen Schweizer Städten über 100\'000 Einwohner.',
      'Der Kanton BS fördert Solaranlagen mit kommunalen Beiträgen, die mit der EIV kumulierbar sind.',
    ],
    pricing: {
      min: ECONOMIC_FACTS.systemCosts.perKwp.min,
      max: ECONOMIC_FACTS.systemCosts.perKwp.max,
      typical5kw: ECONOMIC_FACTS.systemCosts.bySize[5],
      afterSubsidy5kw: afterFederalSubsidy5kw,
      roiYears: factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'de'),
    },
    incentives: {
      title: 'Förderung Basel-Stadt / Basel-Landschaft 2026',
      description: 'Städtische und kantonale Beiträge',
      programs: [
        { name: 'Pronovo EIV (Bund)', amount: `${formatSwissNumber(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 0)} CHF pro kWp`, description: 'Einmalvergütung 5 kWp' },
        { name: 'BS Stadtförderung', amount: 'Gemäss aktuellem Programm', description: 'Kommunaler Zusatzbeitrag' },
        { name: 'Steuerabzug BS/BL', amount: '100%', description: 'Vollständig als Liegenschaftsunterhalt absetzbar – bei bestehenden Gebäuden, nicht bei Neubauten, vom steuerbaren Einkommen; abzugsfähige Kosten nach Abzug von Förderbeiträgen' },
      ],
    },
    caseStudies: [
      { name: 'T. Brunner', location: 'Riehen', systemSize: 'Projektabhängig', cost: 'Projektabhängig', savings: 'Projektabhängig', payback: 'Projektabhängig', quote: 'Der Vergleich half uns, eine passende Lösung zu wählen.' },
    ],
    faqs: [
      { question: 'Gibt es in Basel-Stadt spezielle Stadtförderungen für Solar?', answer: 'Kosten, Ertrag und Wirtschaftlichkeit in Basel hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.' },
      { question: 'Kann ich auf einem Basler Flachdach eine Solaranlage installieren?', answer: 'Absolut. Flachdächer sind in Basel besonders verbreitet und lassen sich mit aufgeständerten Modulen optimal nach Süden ausrichten. Für Flachdächer gelten reduzierte Bewilligungsanforderungen in BS.' },
      { question: 'Wie lange dauert die Baubewilligung in Basel?', answer: 'Bei normalen Wohngebäuden ist die Solaranlage in Basel-Stadt meldepflichtig, aber in der Regel nicht bewilligungspflichtig. Der Prozess dauert meist weniger als 4 Wochen.' },
      { question: 'Was gilt für denkmalgeschützte Bauten in Basel?', answer: 'Basel hat viele historische Gebäude. Für solche Liegenschaften sind Sonderabklärungen nötig. Unsere Partnerinstallateure kennen die lokalen Anforderungen und können auch Indachlösungen anbieten.' },
      { question: 'Lohnt sich ein Batteriespeicher in Basel?', answer: 'In Basel, mit relativ hohen Strompreisen und einem aktiven Strommarkt, rechnet sich ein Heimspeicher innerhalb von 9–12 Jahren. Er ist im Kanton BS als Liegenschaftsunterhalt steuerlich absetzbar.' },
    ],
    testimonial: {
      initials: 'TB',
      name: 'Thomas Brunner',
      quote: 'Ich dachte, in der Stadt gibt es wenig Möglichkeiten. Aber das Solarkataster hat gezeigt: mein Dach in Riehen ist top geeignet. PvPro.ch hat mir in zwei Tagen drei Offerten geliefert.',
    },
  },

  // ─── LUZERN (DE) ─────────────────────────────────────────────────────────────
  luzern: {
    slug: 'luzern',
    image: '/images/asset-haus-alpen-1.webp',
    heroHeadline: 'Solaranlage in Luzern',
    heroSubheadline: 'Zentralschweizer Nachhaltigkeit – von Tourismus bis Eigenheim',
    heroDescription: 'Holen Sie jetzt Ihre kostenlose Vergleichsofferte.',
    whySolarTitle: 'Warum Luzern auf Solar setzt',
    whySolarIntro: 'Von der Seepromenade bis zu den Voralpentälern: Luzerner Hausbesitzer profitieren von idealen Dachflächen und dem Bekenntnis des Kantons zur Energiewende.',
    whySolarReasons: [
      {
        title: 'Vierwaldstättersee-Mikroklima',
        description: 'Der Vierwaldstättersee erzeugt ein milderes Mikroklima im Kanton Luzern. Geringere Nebelbildung und mehr direkte Sonneneinstrahlung als in manchen Nachbarkantonen steigern die Jahresproduktion.',
      },
      {
        title: 'Tourismus-Image als Treiber',
        description: 'Luzern ist eine der meistbesuchten Städte der Schweiz. Nachhaltigkeit und Solarenergie stärken das Image – Hauseigentümer in TourismusCantonen profitieren auch von wertvermehrenden Wirkungen.',
      },
      {
        title: 'Kantonales Förderprogramm LU',
        description: 'Der Kanton Luzern ergänzt die Bundesförderung mit eigenen Beiträgen für Photovoltaikanlagen und Speicher. Für Anlagen ab 10 kWp gibt es zusätzliche Investitionsbeiträge.',
      },
    ],
    cityFactsTitle: 'Solar-Fakten Luzern 2026',
    cityFactsParagraphs: [
      'Luzern bietet günstige lokale Bedingungen für Photovoltaik.',
    ],
    pricing: {
      min: ECONOMIC_FACTS.systemCosts.perKwp.min,
      max: ECONOMIC_FACTS.systemCosts.perKwp.max,
      typical5kw: ECONOMIC_FACTS.systemCosts.bySize[5],
      afterSubsidy5kw: afterFederalSubsidy5kw,
      roiYears: factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'de'),
    },
    incentives: {
      title: 'Förderung Kanton Luzern 2026',
      description: 'Bund und Kanton kombiniert',
      programs: [
        { name: 'Pronovo EIV (Bund)', amount: `${formatSwissNumber(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 0)} CHF pro kWp`, description: 'Einmalvergütung 5 kWp' },
        { name: 'Kanton LU Gebäudeprogramm', amount: 'Gemäss aktuellem Programm', description: 'Kantonaler Zusatzbeitrag PV' },
        { name: 'Steuerabzug LU', amount: '100%', description: 'Anlagekosten absetzbar – bei bestehenden Gebäuden, nicht bei Neubauten, vom steuerbaren Einkommen; abzugsfähige Kosten nach Abzug von Förderbeiträgen' },
      ],
    },
    caseStudies: [
      { name: 'H. Furrer', location: 'Littau', systemSize: 'Projektabhängig', cost: 'Projektabhängig', savings: 'Projektabhängig', payback: 'Projektabhängig', quote: 'Der Vergleich half uns, eine passende Lösung zu wählen.' },
    ],
    faqs: [
      { question: 'Welche solaren Bedingungen bietet Luzern?', answer: 'Luzern bietet günstige lokale Bedingungen für Photovoltaik.' },
      { question: 'Welche Förderungen gelten im Kanton Luzern?', answer: 'Hauseigentümer in Luzern erhalten die bundesweite Einmalvergütung (EIV) via Pronovo sowie einen kantonalen Zusatzbeitrag aus dem Gebäudeprogramm. Ergänzend ist die Anlage als Liegenschaftsunterhalt absetzbar.' },
      { question: 'Gibt es Spezialanforderungen für Solarprojekte in Alpengemeinden?', answer: 'Ja. In einigen Voralpengemeinden im Kanton Luzern gelten spezifische Auflagen zum Schutz des Landschaftsbildes. Unsere Partnerinstallateure kennen diese Vorschriften genau und planen Ihr Projekt entsprechend.' },
      { question: 'Wie sinnvoll ist ein Batteriespeicher in Luzern?', answer: 'Kosten, Ertrag und Wirtschaftlichkeit in Luzern hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.' },
      { question: 'Können auch Ferienhäuser am Vierwaldstättersee Solar erhalten?', answer: 'Ja, sofern das Ferienhaus dauerhaft bewohnt wird oder ein Netzanschluss besteht. Die Einspeisung des überschüssigen Stroms ist auch bei Ferienhäusern möglich und gefördert.' },
    ],
    testimonial: {
      initials: 'HF',
      name: 'Hans-Peter Furrer',
      quote: 'Als Luzerner dachte ich, mein Alpendach sei zu kompliziert. Pustekuchen – der PvPro.ch-Installateur kannte genau die lokalen Regeln und hatte die Anlage in zwei Tagen montiert.',
    },
  },

  // ─── THURGAU (DE) ────────────────────────────────────────────────────────────
  thurgau: {
    slug: 'thurgau',
    image: '/images/asset-installateur-dach-3.webp',
    heroHeadline: 'Solaranlage im Thurgau',
    heroSubheadline: 'Landwirtschaft trifft Solarenergie am Bodensee',
    heroDescription: 'Thurgau bietet günstige lokale Bedingungen für Photovoltaik.',
    whySolarTitle: 'Warum der Thurgau beim Solar vorne liegt',
    whySolarIntro: 'Nirgendwo gibt es mehr geeignete Dachflächen pro Einwohner als im Thurgau. Bauernhöfe, Lagerhallen und Einfamilienhäuser sind ideale Träger für leistungsstarke Anlagen.',
    whySolarReasons: [
      {
        title: 'Landwirtschaft als Solar-Motor',
        description: 'Thurgauer Landwirtschaftsbetriebe installieren zunehmend Agri-Photovoltaik auf Scheunen und Ställen. Grosse Dachflächen erlauben Anlagen von 20–50 kWp mit attraktivem ROI.',
      },
      {
        title: 'Bodensee-Klimavorteil',
        description: 'Die Nähe zum Bodensee sorgt für ein mildes Klima mit weniger Frost und mehr Sonnentagen als in vielen MittellandCantonen. Solaranlagen profitieren von reduzierten Leistungseinbussen im Winter.',
      },
      {
        title: 'Günstigere Installationskosten',
        description: 'Kosten, Ertrag und Wirtschaftlichkeit in Thurgau hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.',
      },
    ],
    cityFactsTitle: 'Solar-Fakten Thurgau 2026',
    cityFactsParagraphs: [
      'Der Thurgau hat die höchste Dichte an landwirtschaftlichen Solaranlagen der Schweiz. Das kantonale Energieprogramm fördert Agri-PV besonders.',
    ],
    pricing: {
      min: ECONOMIC_FACTS.systemCosts.perKwp.min,
      max: ECONOMIC_FACTS.systemCosts.perKwp.max,
      typical5kw: ECONOMIC_FACTS.systemCosts.bySize[5],
      afterSubsidy5kw: afterFederalSubsidy5kw,
      roiYears: factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'de'),
    },
    incentives: {
      title: 'Förderung Kanton Thurgau 2026',
      description: 'Attraktive Kombination für ländliche Betriebe',
      programs: [
        { name: 'Pronovo EIV (Bund)', amount: `${formatSwissNumber(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 0)} CHF pro kWp`, description: 'Einmalvergütung 5 kWp' },
        { name: 'TG Energieprogramm', amount: 'Gemäss aktuellem Programm', description: 'Kantonaler Förderbeitrag PV' },
        { name: 'Agri-PV Bonus', amount: 'Gemäss aktuellem Programm', description: 'Zusatzförderung für Landwirtschaftsbetriebe' },
      ],
    },
    caseStudies: [
      { name: 'W. Keller', location: 'Weinfelden', systemSize: 'Projektabhängig', cost: 'Projektabhängig', savings: 'Projektabhängig', payback: 'Projektabhängig', quote: 'Der Vergleich half uns, eine passende Lösung zu wählen.' },
    ],
    faqs: [
      { question: 'Lohnt sich Solar für einen Thurgauer Landwirtschaftsbetrieb?', answer: 'Absolut. Grosse Dachflächen, günstigere Installationskosten und der Agri-PV-Bonus des Kantons machen landwirtschaftliche Solaranlagen im Thurgau besonders rentabel. ROI oft unter 7 Jahren.' },
      { question: 'Welche Förderung gibt es im Thurgau 2026?', answer: 'Neben der Bundesförderung (EIV) bietet der Kanton Thurgau Kantonsbeiträge und einen speziellen Agri-PV-Bonus für Landwirtschaftsbetriebe. Alle Beiträge sind kumulierbar.' },
      { question: 'Wie hoch ist der Eigenverbrauch auf einem Bauernhof?', answer: 'Kosten, Ertrag und Wirtschaftlichkeit in Thurgau hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.' },
      { question: 'Brauche ich im Thurgau eine Baubewilligung für Solar?', answer: 'In den meisten Fällen ist eine Solaranlage im Kanton Thurgau meldepflichtig, aber nicht bewilligungspflichtig. Ausnahmen gelten für denkmalgeschützte Gebäude und bestimmte Schutzzonen.' },
      { question: 'Kann ich meinen Solarstrom im Thurgau direkt an Nachbarn verkaufen?', answer: 'Ja, ab 2026 sind Lokale Elektrizitätsgemeinschaften (LEG) auch im Thurgau möglich. Besonders in Weinfelden und Kreuzlingen entstehen erste Quartiersnetzwerke.' },
    ],
    testimonial: {
      initials: 'WK',
      name: 'Werner Keller',
      quote: 'Mein Thurgauer Hof hat seit letztem Jahr eine 10-kWp-Anlage auf der Scheune. Ich speise sogar noch ins Netz ein. PvPro.ch hat mir genau den richtigen Agri-PV-Spezialisten gefunden.',
    },
  },

  // ─── ST. GALLEN (DE) ─────────────────────────────────────────────────────────
  'st-gallen': {
    slug: 'st-gallen',
    image: '/images/asset-installateur-dach-4.webp',
    heroHeadline: 'Solaranlage in St. Gallen',
    heroSubheadline: 'Ostschweiz nutzt jede Sonnenstunde optimal',
    heroDescription: 'St. Gallen bietet günstige lokale Bedingungen für Photovoltaik.',
    whySolarTitle: 'Warum Solar in St. Gallen trotzdem top ist',
    whySolarIntro: 'Weniger Sonne bedeutet nicht weniger Rentabilität: Moderne Module und die volle Bundesförderung machen St. Gallen zu einem soliden Solar-Standort.',
    whySolarReasons: [
      {
        title: 'Moderne Module für jeden Himmel',
        description: 'Neueste Halbzellen- und Tandem-Module produzieren auch bei bedecktem Himmel effizient Strom. Diffuses Licht, wie es in der Ostschweiz häufig vorkommt, wird von modernen Panels optimal genutzt.',
      },
      {
        title: 'Universität St. Gallen – Nachhaltigkeitspionier',
        description: 'Die HSG und ihre Unternehmensnetzwerke treiben die Nachhaltigkeitsagenda voran. Solarprojekte im Kanton profitieren von gutem Know-how und wachsender kantonaler Lieferkette.',
      },
      {
        title: 'Appenzellerland und Rheintal: zwei Klimazonen',
        description: 'Das Rheintal von Altstätten bis Rorschach hat deutlich mehr Sonne als das Hinterland. Hauseigentümer im Rheintal profitieren von Erträgen auf Niveau der Westschweiz.',
      },
    ],
    cityFactsTitle: 'Solar-Fakten St. Gallen 2026',
    cityFactsParagraphs: [
      'St. Gallen bietet günstige lokale Bedingungen für Photovoltaik.',
    ],
    pricing: {
      min: ECONOMIC_FACTS.systemCosts.perKwp.min,
      max: ECONOMIC_FACTS.systemCosts.perKwp.max,
      typical5kw: ECONOMIC_FACTS.systemCosts.bySize[5],
      afterSubsidy5kw: afterFederalSubsidy5kw,
      roiYears: factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'de'),
    },
    incentives: {
      title: 'Förderung Kanton St. Gallen 2026',
      description: 'Bund und kantonale Programme',
      programs: [
        { name: 'Pronovo EIV (Bund)', amount: `${formatSwissNumber(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 0)} CHF pro kWp`, description: 'Einmalvergütung 5 kWp' },
        { name: 'SG Förderprogramm', amount: 'Gemäss aktuellem Programm', description: 'Kantonaler Investitionsbeitrag' },
        { name: 'Steuerabzug SG', amount: '100%', description: 'Vollständig absetzbar – bei bestehenden Gebäuden, nicht bei Neubauten, vom steuerbaren Einkommen; abzugsfähige Kosten nach Abzug von Förderbeiträgen' },
      ],
    },
    caseStudies: [
      { name: 'M. Hartmann', location: 'Gossau', systemSize: 'Projektabhängig', cost: 'Projektabhängig', savings: 'Projektabhängig', payback: 'Projektabhängig', quote: 'Der Vergleich half uns, eine passende Lösung zu wählen.' },
    ],
    faqs: [
      { question: 'Lohnt sich Solar wirklich in St. Gallen mit weniger Sonne?', answer: 'Ja. Moderne Halbzellenmodule produzieren auch bei diffusem Licht effizient. Zudem hängen Bundesförderung und Steuerabzug nicht vom lokalen Klima ab – die Wirtschaftlichkeit ist in SG trotzdem gut.' },
      { question: 'Welche Unterschiede gibt es zwischen dem Rheintal und dem Hinterland?', answer: 'Kosten, Ertrag und Wirtschaftlichkeit in St. Gallen hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.' },
      { question: 'Welche Förderungen gelten im Kanton St. Gallen?', answer: 'Neben der nationalen EIV bietet der Kanton St. Gallen einen eigenen Förderbeitrag. Kombiniert mit dem vollständigen Steuerabzug als Liegenschaftsunterhalt ist die effektive Investitionskosten-Reduktion erheblich.' },
      { question: 'Gibt es in St. Gallen genügend qualifizierte Installateure?', answer: 'Ja. PvPro.ch arbeitet mit zertifizierten Fachbetrieben in der gesamten Ostschweiz zusammen. Ob in der Stadt St. Gallen, im Rheintal oder im Toggenburg – wir vermitteln lokale Experten.' },
      { question: 'Wie hoch ist die Einspeisevergütung in St. Gallen?', answer: 'Kosten, Ertrag und Wirtschaftlichkeit in St. Gallen hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.' },
    ],
    testimonial: {
      initials: 'MH',
      name: 'Markus Hartmann',
      quote: 'In Gossau dachte ich, Solar lohne sich nicht. Doch nach dem PvPro.ch-Vergleich war ich überrascht: drei gute Angebote, ein fairer Preis, und jetzt spare ich jeden Monat auf der Stromrechnung.',
    },
  },

  // ─── SCHWYZ (DE) ─────────────────────────────────────────────────────────────
  schwyz: {
    slug: 'schwyz',
    image: '/images/asset-haus-alpen-2.webp',
    heroHeadline: 'Solaranlage Schwyz',
    heroSubheadline: 'Wo die Schweiz begann, startet die Energiewende',
    heroDescription: 'Schwyz bietet günstige lokale Bedingungen für Photovoltaik.',
    whySolarTitle: 'Schwyz: Energiepolitische Unabhängigkeit als Tradition',
    whySolarIntro: 'Im Kanton der Eidgenossenschaft bedeutet Solarenergie mehr als Ökostrom – es ist der nächste Schritt zur Selbstversorgung und Unabhängigkeit von steigenden Energiepreisen.',
    whySolarReasons: [
      {
        title: 'Günstige lokale Bedingungen',
        description: 'Schwyz bietet günstige lokale Bedingungen für Photovoltaik.',
      },
      {
        title: 'Niedrige Steuern – mehr Kapital für Investitionen',
        description: 'Der Kanton Schwyz hat eine der tiefsten Steuerbelastungen der Schweiz. Das bedeutet mehr verfügbares Kapital für Solarinvestitionen – und der Steuerabzug für die Anlage bringt weiteren Vorteil.',
      },
      {
        title: 'Alpine Baukultur trifft moderne Module',
        description: 'Schwyzer Architekten und Installateure sind Experten in der Integration von Solarpanelen in traditionelle Dachkonstruktionen. Ästhetisch und funktional – beides ist möglich.',
      },
    ],
    cityFactsTitle: 'Solar-Fakten Schwyz 2026',
    cityFactsParagraphs: [
      'Schwyz hat 1\'694 Stunden/Jahr. Besonders die Sonnenseite des Mythengebiets und das Tal um Brunnen haben exzellente Strahlungswerte.',
    ],
    pricing: {
      min: ECONOMIC_FACTS.systemCosts.perKwp.min,
      max: ECONOMIC_FACTS.systemCosts.perKwp.max,
      typical5kw: ECONOMIC_FACTS.systemCosts.bySize[5],
      afterSubsidy5kw: afterFederalSubsidy5kw,
      roiYears: factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'de'),
    },
    incentives: {
      title: 'Förderung Kanton Schwyz 2026',
      description: 'Bund und Kanton',
      programs: [
        { name: 'Pronovo EIV (Bund)', amount: `${formatSwissNumber(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 0)} CHF pro kWp`, description: 'Einmalvergütung 5 kWp' },
        { name: 'SZ Förderbeitrag', amount: 'Gemäss aktuellem Programm', description: 'Kantonaler Beitrag' },
        { name: 'Steuerabzug SZ', amount: '100%', description: 'Vorteilhaft wegen tiefer Steuern – bei bestehenden Gebäuden, nicht bei Neubauten, vom steuerbaren Einkommen absetzbar; abzugsfähige Kosten nach Abzug von Förderbeiträgen' },
      ],
    },
    caseStudies: [
      { name: 'J. Marty', location: 'Brunnen', systemSize: 'Projektabhängig', cost: 'Projektabhängig', savings: 'Projektabhängig', payback: 'Projektabhängig', quote: 'Der Vergleich half uns, eine passende Lösung zu wählen.' },
    ],
    faqs: [
      { question: 'Welche solaren Bedingungen bietet Schwyz?', answer: 'Schwyz bietet günstige lokale Bedingungen für Photovoltaik.' },
      { question: 'Welche Förderungen gibt es im Kanton Schwyz?', answer: 'Sie erhalten die EIV des Bundes sowie einen kantonalen Zusatzbeitrag. Dank der tiefen Schwyzer Steuern ist der Steuerabzug für die Solaranlage als Liegenschaftsunterhalt besonders wertvoll.' },
      { question: 'Gibt es Spezialregeln für Berggebiete in Schwyz?', answer: 'Für Gebäude in Schutzzonen oder Ortskerngebieten gelten spezifische Auflagen. Unsere Partnerinstallateure kennen die Gemeinderegelungen in Schwyz, Küssnacht, Einsiedeln und Arth.' },
      { question: 'Wie gross sollte meine Anlage in Schwyz sein?', answer: 'Für ein typisches Einfamilienhaus mit 4 Personen empfehlen sich 5–7 kWp. Mit Wärmepumpe oder Elektroauto lohnt sich eine grössere Anlage von 8–12 kWp deutlich mehr.' },
      { question: 'Kann ich Solarstrom in Schwyz an Nachbarn verkaufen?', answer: 'Ab 2026 sind Lokale Elektrizitätsgemeinschaften (LEG) gesetzlich möglich. Besonders in kleineren Schwyzer Gemeinden entstehen erste Pilotprojekte, die den Eigenverbrauch im Quartier optimieren.' },
    ],
    testimonial: {
      initials: 'JM',
      name: 'Josef Marty',
      quote: 'Als Schwyzer schätze ich Unabhängigkeit. Mit der Solaranlage auf meinem Haus in Brunnen bin ich jetzt auch beim Strom nicht mehr auf externe Anbieter angewiesen. PvPro.ch hat mir den besten Installateur vermittelt.',
    },
  },

  // ─── URI (DE) ────────────────────────────────────────────────────────────────
  uri: {
    slug: 'uri',
    image: '/images/asset-haus-alpen-3.webp',
    heroHeadline: 'Solaranlage Uri',
    heroSubheadline: 'Netzunabhängigkeit im Gotthardkanton',
    heroDescription: 'Uri bietet günstige lokale Bedingungen für Photovoltaik.',
    whySolarTitle: 'Uri: Alpine Selbstversorgung mit Solarstrom',
    whySolarIntro: 'In einem Kanton, der historisch immer für seine Unabhängigkeit stand, ist die Eigenproduktion von Solarstrom der logische nächste Schritt.',
    whySolarReasons: [
      {
        title: 'Südhänge mit Maximalertrag',
        description: 'Das Urner Reusstal und die Seitentäler bieten zahlreiche Gebäude an Süd- und Südwestlagen. Diese Expositionen maximieren den Jahresertrag und verkürzen die Amortisationszeit.',
      },
      {
        title: 'Höhenlage steigert die Einstrahlung',
        description: 'Kosten, Ertrag und Wirtschaftlichkeit in Uri hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.',
      },
      {
        title: 'Gotthard-Energie: Kantonal denken',
        description: 'Uri hat eine starke Tradition im Umgang mit Energie (Strom aus Gotthard-Wasserkraft). Photovoltaik ergänzt dies ideal – überschüssiger Solarstrom wird ins lokale Netz eingespeist.',
      },
    ],
    cityFactsTitle: 'Solar-Fakten Uri 2026',
    cityFactsParagraphs: [
      'Uri bietet günstige lokale Bedingungen für Photovoltaik.',
    ],
    pricing: {
      min: ECONOMIC_FACTS.systemCosts.perKwp.min,
      max: ECONOMIC_FACTS.systemCosts.perKwp.max,
      typical5kw: ECONOMIC_FACTS.systemCosts.bySize[5],
      afterSubsidy5kw: afterFederalSubsidy5kw,
      roiYears: factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'de'),
    },
    incentives: {
      title: 'Förderung Kanton Uri 2026',
      description: 'Bund und kleine Kantone',
      programs: [
        { name: 'Pronovo EIV (Bund)', amount: `${formatSwissNumber(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 0)} CHF pro kWp`, description: 'Einmalvergütung 5 kWp' },
        { name: 'UR Kantonsbeitrag', amount: 'Gemäss aktuellem Programm', description: 'Kantonaler Zusatzbeitrag' },
        { name: 'Steuerabzug UR', amount: '100%', description: 'Anlagekosten absetzbar – bei bestehenden Gebäuden, nicht bei Neubauten, vom steuerbaren Einkommen; abzugsfähige Kosten nach Abzug von Förderbeiträgen' },
      ],
    },
    caseStudies: [
      { name: 'R. Arnold', location: 'Altdorf', systemSize: 'Projektabhängig', cost: 'Projektabhängig', savings: 'Projektabhängig', payback: 'Projektabhängig', quote: 'Der Vergleich half uns, eine passende Lösung zu wählen.' },
    ],
    faqs: [
      { question: 'Lohnt sich Solar in den Urner Bergen wirklich?', answer: 'Ja. Gebäude an Südhängen im Urner Reusstal und in Seitentälern erzielen teils bessere Erträge als im Mittelland. Die Bundesförderung gilt unabhängig vom Kanton.' },
      { question: 'Welche Förderungen gibt es im Kanton Uri?', answer: 'Neben der EIV des Bundes bietet Uri eigene kantonale Beiträge. Ergänzend ist die Anlage als Liegenschaftsunterhalt steuerlich absetzbar.' },
      { question: 'Gibt es genug Solarinstallateure in Uri?', answer: 'PvPro.ch arbeitet mit zertifizierten Betrieben aus der gesamten Innerschweiz zusammen, die auch Projekte in Uri regelmässig ausführen. Die Anreise ist für unsere Partner kein Problem.' },
      { question: 'Was passiert mit dem Strom, wenn ich nicht zuhause bin?', answer: 'Kosten, Ertrag und Wirtschaftlichkeit in Uri hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.' },
      { question: 'Kann ich in Uri auch als Mietpartei Solar nutzen?', answer: 'Mieter können über Modelle wie Mietersolaranlagen oder LEG-Gemeinschaften teilnehmen. In kleinen Urner Gemeinden sind solche Gemeinschaftslösungen besonders attraktiv.' },
    ],
    testimonial: {
      initials: 'RA',
      name: 'Ruth Arnold',
      quote: 'Unser Haus in Altdorf steht an einem Südhang – ideale Bedingungen. PvPro.ch hat mir innerhalb einer Woche zwei Angebote gebracht, wir haben das beste genommen. Jetzt produzieren wir mehr als wir verbrauchen.',
    },
  },

  // ─── SCHAFFHAUSEN (DE) ───────────────────────────────────────────────────────
  schaffhausen: {
    slug: 'schaffhausen',
    image: '/images/asset-panel-closeup-3.webp',
    heroHeadline: 'Solaranlage Schaffhausen',
    heroSubheadline: 'Nördlichster Kanton setzt auf Solarstrom am Rhein',
    heroDescription: 'Schaffhausen bietet günstige lokale Bedingungen für Photovoltaik.',
    whySolarTitle: 'Warum Schaffhausen beim Solar punktet',
    whySolarIntro: 'Schaffhausen bietet günstige lokale Bedingungen für Photovoltaik.',
    whySolarReasons: [
      {
        title: 'Rheintal-Sonnenbonus',
        description: 'Schaffhausen bietet günstige lokale Bedingungen für Photovoltaik.',
      },
      {
        title: 'Industrie auf Kurs Erneuerbar',
        description: 'Schaffhauser Unternehmen wie IWC oder Georg Fischer investieren in Eigenversorgung mit Solarstrom. Was die Industrie vorlebt, macht auch für Privatpersonen wirtschaftlich Sinn.',
      },
      {
        title: 'Weinbau + Agri-PV',
        description: 'Schaffhauser Reben und Obstgärten experimentieren mit Agri-PV-Überdachungen. Diese schützen Kulturen vor Extremregen und produzieren gleichzeitig Solarstrom – eine doppelte Dividende.',
      },
    ],
    cityFactsTitle: 'Solar-Fakten Schaffhausen 2026',
    cityFactsParagraphs: [
      'Kosten, Ertrag und Wirtschaftlichkeit in Schaffhausen hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.',
    ],
    pricing: {
      min: ECONOMIC_FACTS.systemCosts.perKwp.min,
      max: ECONOMIC_FACTS.systemCosts.perKwp.max,
      typical5kw: ECONOMIC_FACTS.systemCosts.bySize[5],
      afterSubsidy5kw: afterFederalSubsidy5kw,
      roiYears: factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'de'),
    },
    incentives: {
      title: 'Förderung Kanton Schaffhausen 2026',
      description: 'Bund und Kanton',
      programs: [
        { name: 'Pronovo EIV (Bund)', amount: `${formatSwissNumber(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 0)} CHF pro kWp`, description: 'Einmalvergütung 5 kWp' },
        { name: 'SH Förderbeitrag', amount: 'Gemäss aktuellem Programm', description: 'Kantonaler Investitionsbeitrag' },
        { name: 'Steuerabzug SH', amount: '100%', description: 'Anlagekosten absetzbar – bei bestehenden Gebäuden, nicht bei Neubauten, vom steuerbaren Einkommen; abzugsfähige Kosten nach Abzug von Förderbeiträgen' },
      ],
    },
    caseStudies: [
      { name: 'C. Nägeli', location: 'Neuhausen am Rheinfall', systemSize: 'Projektabhängig', cost: 'Projektabhängig', savings: 'Projektabhängig', payback: 'Projektabhängig', quote: 'Der Vergleich half uns, eine passende Lösung zu wählen.' },
    ],
    faqs: [
      { question: 'Welche solaren Bedingungen bietet Schaffhausen?', answer: 'Schaffhausen bietet günstige lokale Bedingungen für Photovoltaik.' },
      { question: 'Gibt es Förderung im Kanton Schaffhausen?', answer: 'Ja. Neben der EIV des Bundes bietet der Kanton Schaffhausen eigene Förderbeiträge. Die Anlage ist zusätzlich als Liegenschaftsunterhalt steuerlich absetzbar.' },
      { question: 'Können Schaffhauser Weinbauern Solar nutzen?', answer: 'Agri-PV für Reben und Obstgärten wird in Schaffhausen zunehmend beliebt. Überdachungsstrukturen schützen die Kulturen und produzieren Strom. Spezialförderung für Agri-PV ist verfügbar.' },
      { question: 'Welche Bewilligungen brauche ich in Schaffhausen?', answer: 'Im Kanton Schaffhausen ist eine Photovoltaikanlage an normalen Gebäuden meldepflichtig, aber nicht bewilligungspflichtig. In Schutzzonen gelten besondere Regeln.' },
      { question: 'Lohnt sich ein Batteriespeicher in Schaffhausen?', answer: 'Kosten, Ertrag und Wirtschaftlichkeit in Schaffhausen hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.' },
    ],
    testimonial: {
      initials: 'CN',
      name: 'Claudia Nägeli',
      quote: 'Wir wohnen mit Blick auf den Rheinfall – und jetzt produzieren wir selbst Energie. PvPro.ch war schnell, unkompliziert und hat uns wirklich gute Angebote von lokalen Betrieben vermittelt.',
    },
  },

  // ─── APPENZELL (DE) ──────────────────────────────────────────────────────────
  appenzell: {
    slug: 'appenzell',
    image: '/images/asset-installateur-dach-1.webp',
    heroHeadline: 'Solaranlage Appenzell',
    heroSubheadline: 'Traditionsbewusstsein trifft moderne Energie',
    heroDescription: 'Appenzell bietet günstige lokale Bedingungen für Photovoltaik.',
    whySolarTitle: 'Warum Appenzell und Solar perfekt zusammenpassen',
    whySolarIntro: 'Die sanften Hügel Appenzells mit ihren weitflächigen, nach Süden geneigten Dächern sind wie geschaffen für Photovoltaik. Hier ist Solar keine Modeerscheinung, sondern praktische Vernunft.',
    whySolarReasons: [
      {
        title: 'Hügeltopographie – natürlicher Sonnenfänger',
        description: 'Die charakteristischen Appenzeller Bauernhöfe und Wohnhäuser haben oft grossflächige, nach Süden oder Südwesten exponierte Satteldächer. Ideale Flächen für maximale Solarausbeute.',
      },
      {
        title: 'Günstige lokale Bedingungen',
        description: 'Trotz östlicher Lage profitiert Appenzell von einem überraschend sonnigen Klima, besonders zwischen Herisau und Gais. Die Jahresproduktion liegt über dem Deutschschweizer Durchschnitt.',
      },
      {
        title: 'Landwirtschaft + Solar = doppelter Mehrwert',
        description: 'Viele Appenzeller Höfe kombinieren heute Solar auf dem Dach mit Direktvermarktung von lokalem Strom. Das stärkt die bäuerliche Einkommensstruktur und fördert die Energieautonomie.',
      },
    ],
    cityFactsTitle: 'Solar-Fakten Appenzell 2026',
    cityFactsParagraphs: [
      'Appenzell bietet günstige lokale Bedingungen für Photovoltaik.',
    ],
    pricing: {
      min: ECONOMIC_FACTS.systemCosts.perKwp.min,
      max: ECONOMIC_FACTS.systemCosts.perKwp.max,
      typical5kw: ECONOMIC_FACTS.systemCosts.bySize[5],
      afterSubsidy5kw: afterFederalSubsidy5kw,
      roiYears: factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'de'),
    },
    incentives: {
      title: 'Förderung Appenzell 2026',
      description: 'AI und AR haben eigene Programme',
      programs: [
        { name: 'Pronovo EIV (Bund)', amount: `${formatSwissNumber(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 0)} CHF pro kWp`, description: 'Einmalvergütung 5 kWp' },
        { name: 'AI/AR Förderbeitrag', amount: 'Gemäss aktuellem Programm', description: 'Kantonaler Zusatzbeitrag' },
        { name: 'Steuerabzug AI/AR', amount: '100%', description: 'Anlage steuerlich absetzbar – bei bestehenden Gebäuden, nicht bei Neubauten, vom steuerbaren Einkommen; abzugsfähige Kosten nach Abzug von Förderbeiträgen' },
      ],
    },
    caseStudies: [
      { name: 'E. Grob', location: 'Herisau', systemSize: 'Projektabhängig', cost: 'Projektabhängig', savings: 'Projektabhängig', payback: 'Projektabhängig', quote: 'Der Vergleich half uns, eine passende Lösung zu wählen.' },
    ],
    faqs: [
      { question: 'Eignen sich Appenzeller Haustypen gut für Solar?', answer: 'Ja. Die charakteristischen grossen Satteldächer mit Südausrichtung sind nahezu ideal für Photovoltaik. Viele Appenzeller Häuser haben Dachflächen für 8–15 kWp.' },
      { question: 'Wie viel Sonne hat Appenzell im Vergleich zu anderen Kantonen?', answer: 'Mit 1\'720 Stunden liegt Appenzell über dem Deutschschweizer Durchschnitt, überraschend für einen so östlichen Kanton. Besonders die Ausserrhoder Hügellagen sind sonnig.' },
      { question: 'Welche Förderungen gelten in AI und AR?', answer: 'Beide Halbkantone ergänzen die EIV des Bundes mit kantonalen Förderbeiträgen. Die Anlage ist vollständig als Liegenschaftsunterhalt absetzbar.' },
      { question: 'Kann ich in Appenzell auch bei einem Holzhaus Solar installieren?', answer: 'Ja. Holzdächer sind für Solaranlagen problemlos geeignet. Speziell ausgebildete Installateure in der Ostschweiz kennen die Montage auf Holzkonstruktionen genau.' },
      { question: 'Gibt es Ortsbild-Auflagen in Appenzell?', answer: 'In einigen Kernzonen und bei geschützten Gebäuden gelten besondere Anforderungen. Indachlösungen fügen sich ästhetisch gut ein. Unsere Partnerinstallateure kennen die kantonalen Anforderungen.' },
    ],
    testimonial: {
      initials: 'EG',
      name: 'Ernst Grob',
      quote: 'In Herisau sind wir bodenständig. Solar ist keine Modewelle – es ist Vernunft. PvPro.ch hat mir drei Angebote von Ostschweizer Betrieben gebracht, alle seriös. Jetzt läuft die Anlage seit zwei Jahren ohne Probleme.',
    },
  },

  // ─── GRAUBÜNDEN (DE) ─────────────────────────────────────────────────────────
  graubunden: {
    slug: 'graubunden',
    image: '/images/asset-installateur-dach-5.webp',
    heroHeadline: 'Solaranlage Graubünden',
    heroSubheadline: 'Alpines Klima, maximale Solarausbeute auf 1\'800m',
    heroDescription: 'Graubünden bietet günstige lokale Bedingungen für Photovoltaik.',
    whySolarTitle: 'Graubünden: Solarparadies in den Alpen',
    whySolarIntro: 'Höhenlagen, weniger Nebel und starke direkte Sonneneinstrahlung machen Graubünden zu einem der besten Solarstandorte der Schweiz – mit einzigartigen Vorteilen für alpine Objekte.',
    whySolarReasons: [
      {
        title: 'Höhenlage = mehr Solarertrag',
        description: 'Kosten, Ertrag und Wirtschaftlichkeit in Graubünden hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.',
      },
      {
        title: 'Ski-Tourismus wird nachhaltig',
        description: 'Davos, Arosa und St. Moritz treiben Solarinstallationen auf Hotels, Bergbahnen und Chalets voran. Dieses Netzwerk hochqualifizierter Installateure steht auch Privatkunden zur Verfügung.',
      },
      {
        title: 'Schnee steigert den Winterertrag',
        description: 'Der Schnee auf dem Boden reflektiert die Sonnenstrahlung auf die Module. Im Januar und Februar produzieren Bündner Anlagen teils mehr als erwartet – dank Albedo-Effekt.',
      },
    ],
    cityFactsTitle: 'Solar-Fakten Graubünden 2026',
    cityFactsParagraphs: [
      'Graubünden bietet günstige lokale Bedingungen für Photovoltaik.',
    ],
    pricing: {
      min: ECONOMIC_FACTS.systemCosts.perKwp.min,
      max: ECONOMIC_FACTS.systemCosts.perKwp.max,
      typical5kw: ECONOMIC_FACTS.systemCosts.bySize[5],
      afterSubsidy5kw: afterFederalSubsidy5kw,
      roiYears: factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'de'),
    },
    incentives: {
      title: 'Förderung Kanton Graubünden 2026',
      description: 'Plus Höhenbonus des Bundes',
      programs: [
        { name: 'Pronovo EIV (Bund)', amount: `${formatSwissNumber(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 0)} CHF pro kWp`, description: 'Einmalvergütung + Höhenbonus' },
        { name: 'GR Förderprogramm', amount: 'Gemäss aktuellem Programm', description: 'Kantonaler Investitionsbeitrag' },
        { name: 'Steuerabzug GR', amount: '100%', description: 'Anlagekosten als Unterhalt absetzbar – bei bestehenden Gebäuden, nicht bei Neubauten, vom steuerbaren Einkommen; abzugsfähige Kosten nach Abzug von Förderbeiträgen' },
      ],
    },
    caseStudies: [
      { name: 'A. Caviezel', location: 'Chur', systemSize: 'Projektabhängig', cost: 'Projektabhängig', savings: 'Projektabhängig', payback: 'Projektabhängig', quote: 'Der Vergleich half uns, eine passende Lösung zu wählen.' },
    ],
    faqs: [
      { question: 'Warum produzieren Anlagen in Graubünden mehr Strom als im Mittelland?', answer: 'Kosten, Ertrag und Wirtschaftlichkeit in Graubünden hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.' },
      { question: 'Wie funktioniert der Höhenbonus bei der EIV in Graubünden?', answer: 'Kosten, Ertrag und Wirtschaftlichkeit in Graubünden hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.' },
      { question: 'Können Chalets und Ferienwohnungen in Graubünden Solar nutzen?', answer: 'Ja, sofern sie an das öffentliche Netz angeschlossen sind. Überschuss wird eingespeist, auch wenn Sie nicht permanent vor Ort sind. Ein Heimspeicher erhöht den Eigenverbrauch deutlich.' },
      { question: 'Sind alpine Solaranlagen schneefest?', answer: 'Ja. Moderne Module sind für Schneelast gemäss Schweizer Normen ausgelegt. Steilere Neigungswinkel (ab 45°) lassen den Schnee besser abrutschen. Der Schnee auf dem Boden reflektiert zusätzlich Licht.' },
      { question: 'Welche Installateure kennen alpine Projekte in Graubünden?', answer: 'PvPro.ch vermittelt zertifizierte Betriebe, die regelmässig in Berglagen installieren. Von Chur über Davos bis ins Engadin – unsere Partner kennen alpine Konstruktionsanforderungen genau.' },
    ],
    testimonial: {
      initials: 'AC',
      name: 'Andrea Caviezel',
      quote: 'Kosten, Ertrag und Wirtschaftlichkeit in Graubünden hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.',
    },
  },

  // ─── GLARUS (DE) ─────────────────────────────────────────────────────────────
  glarus: {
    slug: 'glarus',
    image: '/images/asset-haus-luftbild-3.webp',
    heroHeadline: 'Solaranlage Glarus',
    heroSubheadline: 'Kleiner Kanton, grosse Solarambitionen',
    heroDescription: 'Glarus bietet günstige lokale Bedingungen für Photovoltaik.',
    whySolarTitle: 'Warum Glarus auf Solar setzt',
    whySolarIntro: 'Das Linthtal bietet ideale topografische Bedingungen: Hänge mit Südexposition, wenig Beschattung und eine Gemeinschaft, die Nachhaltigkeit als Teil ihrer Identität versteht.',
    whySolarReasons: [
      {
        title: 'Linthtal-Topographie: Natürliche Solaranlage',
        description: 'Die steilen Hänge zu beiden Seiten des Linththals bieten Gebäuden mit Südausrichtung optimale Winkel für die Einstrahlung. Viele Häuser in Glarus, Näfels und Schwanden sind ideal positioniert.',
      },
      {
        title: 'Industriewandel als Chance',
        description: 'Der Rückgang der Textilindustrie hat viele grosse Hallendächer freigegeben. Diese Flächen werden heute für grosse Photovoltaikanlagen genutzt – mit hohen Erträgen und kurzer Amortisation.',
      },
      {
        title: 'Starke Gemeinschaft – gemeinsam solar',
        description: 'Glarus ist bekannt für seine direkte Demokratie (Landsgemeinde). Gemeinschaftliche Solaranlagen, LEG-Modelle und gemeinsame Einkaufsgemeinschaften für Photovoltaik blühen in diesem Geist.',
      },
    ],
    cityFactsTitle: 'Solar-Fakten Glarus 2026',
    cityFactsParagraphs: [
      'Glarus bietet günstige lokale Bedingungen für Photovoltaik.',
    ],
    pricing: {
      min: ECONOMIC_FACTS.systemCosts.perKwp.min,
      max: ECONOMIC_FACTS.systemCosts.perKwp.max,
      typical5kw: ECONOMIC_FACTS.systemCosts.bySize[5],
      afterSubsidy5kw: afterFederalSubsidy5kw,
      roiYears: factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'de'),
    },
    incentives: {
      title: 'Förderung Kanton Glarus 2026',
      description: 'Kompakte Förderprogramme',
      programs: [
        { name: 'Pronovo EIV (Bund)', amount: `${formatSwissNumber(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 0)} CHF pro kWp`, description: 'Einmalvergütung 5 kWp' },
        { name: 'GL Förderbeitrag', amount: 'Gemäss aktuellem Programm', description: 'Kantonaler Zuschuss' },
        { name: 'Steuerabzug GL', amount: '100%', description: 'Anlagekosten absetzbar – bei bestehenden Gebäuden, nicht bei Neubauten, vom steuerbaren Einkommen; abzugsfähige Kosten nach Abzug von Förderbeiträgen' },
      ],
    },
    caseStudies: [
      { name: 'U. Freuler', location: 'Glarus', systemSize: 'Projektabhängig', cost: 'Projektabhängig', savings: 'Projektabhängig', payback: 'Projektabhängig', quote: 'Der Vergleich half uns, eine passende Lösung zu wählen.' },
    ],
    faqs: [
      { question: 'Welche solaren Bedingungen bietet Glarus?', answer: 'Glarus bietet günstige lokale Bedingungen für Photovoltaik.' },
      { question: 'Welche Förderungen gibt es im Kanton Glarus?', answer: 'Hauseigentümer erhalten die EIV des Bundes via Pronovo sowie einen kantonalen Förderbeitrag. Ergänzend ist die Solaranlage als Liegenschaftsunterhalt steuerlich absetzbar.' },
      { question: 'Gibt es genügend Solarinstallateure für Glarus?', answer: 'PvPro.ch vermittelt zertifizierte Betriebe aus der gesamten Ostschweiz und Innerschweiz, die regelmässig auch in Glarus installieren. Lokale Kenntnisse sind bei unseren Partnern Standard.' },
      { question: 'Können alte Textilfabrikdächer in Glarus für Solar genutzt werden?', answer: 'Ja, wenn die Statik stimmt. Viele Glarner Industriegebäude haben starke Stahlbetonkonstruktionen, die problemlos Solaranlagen tragen. Eine Statikprüfung gehört zum Standard-Projekt.' },
      { question: 'Was sind LEG-Gemeinschaften und gibt es diese in Glarus?', answer: 'Lokale Elektrizitätsgemeinschaften (LEG) erlauben es Nachbarn, Solarstrom gemeinsam zu nutzen. In Glarus, wo Gemeinschaftssinn gross geschrieben wird, gibt es erste LEG-Pilotprojekte.' },
    ],
    testimonial: {
      initials: 'UF',
      name: 'Urs Freuler',
      quote: 'Glarus ist klein, aber wir sind vorwärts. Die Solaranlage auf meinem Haus im Linthtal war die beste Investition seit Jahren. Über PvPro.ch war alles unkompliziert und professionell.',
    },
  },

  // ─── ZUG (DE) ────────────────────────────────────────────────────────────────
  zug: {
    slug: 'zug',
    image: '/images/asset-haus-modern-2.webp',
    heroHeadline: 'Solaranlage Zug',
    heroSubheadline: 'Crypto Valley investiert in saubere Solarenergie',
    heroDescription: 'Zug – Schweizer Steueroase, Heimat von Blockchain-Unternehmen und Top-Wirtschaftsstandort – setzt auf Premium-Solaranlagen. Hochwertige Indachsysteme, grösste Batteriespeicher und beste Installateure: In Zug wird Solar zur Chefsache.',
    whySolarTitle: 'Zug: Premium Solar für anspruchsvolle Eigentümer',
    whySolarIntro: 'Im Kanton mit dem höchsten Pro-Kopf-Einkommen der Schweiz stehen Qualität, Ästhetik und maximale Eigenverbrauchsoptimierung im Vordergrund – nicht nur der Preis.',
    whySolarReasons: [
      {
        title: 'Indach-Solar: Ästhetik ohne Kompromiss',
        description: 'Zuger Eigentümer entscheiden sich überdurchschnittlich oft für integrierte Indach-Systeme, die sich nahtlos in das Dachmaterial einfügen. Der Mehrwert für die Immobilie steigt erheblich.',
      },
      {
        title: 'Batteriespeicher als Standard',
        description: 'Kosten, Ertrag und Wirtschaftlichkeit in Zug hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.',
      },
      {
        title: 'Steueroptimierung auf höchstem Niveau',
        description: 'Dank der tiefen Zuger Steuern ist der Abzug der Solaranlage als Liegenschaftsunterhalt zwar nominell tiefer, aber in Kombination mit der EIV ergibt sich eine der besten Nettokosten-Konstellationen der Schweiz.',
      },
    ],
    cityFactsTitle: 'Solar-Fakten Zug 2026',
    cityFactsParagraphs: [
      'Zug bietet günstige lokale Bedingungen für Photovoltaik.',
    ],
    pricing: {
      min: ECONOMIC_FACTS.systemCosts.perKwp.min,
      max: ECONOMIC_FACTS.systemCosts.perKwp.max,
      typical5kw: ECONOMIC_FACTS.systemCosts.bySize[5],
      afterSubsidy5kw: afterFederalSubsidy5kw,
      roiYears: factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'de'),
    },
    incentives: {
      title: 'Förderung Kanton Zug 2026',
      description: 'Top-Konditionen dank tiefer Steuern',
      programs: [
        { name: 'Pronovo EIV (Bund)', amount: `${formatSwissNumber(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 0)} CHF pro kWp`, description: 'Einmalvergütung 5 kWp' },
        { name: 'ZG Förderbeitrag', amount: 'Gemäss aktuellem Programm', description: 'Kantonaler Investitionsbeitrag' },
        { name: 'Steuerabzug ZG', amount: '100%', description: 'Besonders wirksam dank tiefer Tarife – bei bestehenden Gebäuden, nicht bei Neubauten, vom steuerbaren Einkommen absetzbar; abzugsfähige Kosten nach Abzug von Förderbeiträgen' },
      ],
    },
    caseStudies: [
      { name: 'A. Weber', location: 'Baar', systemSize: 'Projektabhängig', cost: 'Projektabhängig', savings: 'Projektabhängig', payback: 'Projektabhängig', quote: 'Der Vergleich half uns, eine passende Lösung zu wählen.' },
    ],
    faqs: [
      { question: 'Warum entscheiden sich Zuger Eigentümer oft für Indach-Solar?', answer: 'Indach-Systeme integrieren sich nahtlos ins Dach und wirken ästhetisch hochwertig. In Zug, wo Immobilienwerte hoch sind, steigert ein elegantes Solarsystem den Marktwert der Liegenschaft.' },
      { question: 'Lohnt sich ein grosser Batteriespeicher in Zug?', answer: 'Kosten, Ertrag und Wirtschaftlichkeit in Zug hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.' },
      { question: 'Welche Förderung erhalte ich in Zug?', answer: 'EIV des Bundes plus kantonaler Beitrag. Ergänzend wirkt der Steuerabzug: In Zug mit tiefen Steuersätzen ist der nominale Abzug kleiner, aber in Kombination mit der Förderung ergibt sich eine gute Gesamtrechnung.' },
      { question: 'Gibt es Blockchain/Web3 Unternehmen in Zug, die Solar nutzen?', answer: 'Ja. Das Crypto Valley Zug hat mehrere Tech-Unternehmen, die ihre Büros und Rechenzentren zunehmend mit Solarstrom betreiben. Dieses Ökosystem treibt auch die Nachfrage bei Privatpersonen.' },
      { question: 'Kann ich in Zug mit Solar auch mein Elektroauto laden?', answer: 'Absolut. Eine 8–10 kWp-Anlage mit Heimspeicher und Wallbox bildet in Zug ein komplettes Energie-Ökosystem. Der Strompreisvorteil pro gefahrenen Kilometer ist erheblich.' },
    ],
    testimonial: {
      initials: 'AW',
      name: 'Adrian Weber',
      quote: 'In Baar wollte ich das Beste. Über PvPro.ch habe ich einen Premium-Installateur für mein 10-kWp-Indach-System gefunden. Die Anlage sieht aus wie ein normales Dach, produziert aber top Leistung.',
    },
  },

  // ─── UNTERWALDEN (DE) ────────────────────────────────────────────────────────
  unterwalden: {
    slug: 'unterwalden',
    image: '/images/asset-haus-luftbild-1.webp',
    heroHeadline: 'Solaranlage Unterwalden',
    heroSubheadline: 'Vierwaldstättersee-Kanton setzt ein Zeichen',
    heroDescription: 'Unterwalden bietet günstige lokale Bedingungen für Photovoltaik.',
    whySolarTitle: 'Unterwalden: Wo Seeklima und Sonnenhang sich vereinen',
    whySolarIntro: 'Die einzigartige Lage zwischen See und Bergen schafft ein Mikroklima mit wenig Nebel, viel Sonne und einer Gemeinschaft, die Nachhaltigkeit lebt.',
    whySolarReasons: [
      {
        title: 'Seeklima – weniger Nebel, mehr Ertrag',
        description: 'Unterwalden bietet günstige lokale Bedingungen für Photovoltaik.',
      },
      {
        title: '1\'739 Stunden – starke Sonnenbilanz',
        description: 'Unterwalden liegt mit 1\'739 h/Jahr weit über dem Schweizer Durchschnitt von 1\'500h. Besonders die Hänge über dem See Richtung Süden bieten Spitzenerträge.',
      },
      {
        title: 'Natur und Nachhaltigkeit als Werte',
        description: 'Die naturverbundene Kultur Unterwaldens macht Solarenergie zu einem selbstverständlichen Schritt. Lokale Gemeinden setzen Solarprojekte an öffentlichen Gebäuden als Vorbilder um.',
      },
    ],
    cityFactsTitle: 'Solar-Fakten Unterwalden 2026',
    cityFactsParagraphs: [
      'OW und NW haben zusammen rund 40\'000 Einwohner und eine wachsende Zahl von Solarprojekten an öffentlichen Gebäuden, Schulen und Gemeindewerken.',
    ],
    pricing: {
      min: ECONOMIC_FACTS.systemCosts.perKwp.min,
      max: ECONOMIC_FACTS.systemCosts.perKwp.max,
      typical5kw: ECONOMIC_FACTS.systemCosts.bySize[5],
      afterSubsidy5kw: afterFederalSubsidy5kw,
      roiYears: factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'de'),
    },
    incentives: {
      title: 'Förderung OW/NW 2026',
      description: 'Bund und kantonale Programme',
      programs: [
        { name: 'Pronovo EIV (Bund)', amount: `${formatSwissNumber(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 0)} CHF pro kWp`, description: 'Einmalvergütung 5 kWp' },
        { name: 'OW/NW Förderbeitrag', amount: 'Gemäss aktuellem Programm', description: 'Kantonaler Investitionszuschuss' },
        { name: 'Steuerabzug OW/NW', amount: '100%', description: 'Anlagekosten absetzbar – bei bestehenden Gebäuden, nicht bei Neubauten, vom steuerbaren Einkommen; abzugsfähige Kosten nach Abzug von Förderbeiträgen' },
      ],
    },
    caseStudies: [
      { name: 'M. Etlin', location: 'Stans', systemSize: 'Projektabhängig', cost: 'Projektabhängig', savings: 'Projektabhängig', payback: 'Projektabhängig', quote: 'Der Vergleich half uns, eine passende Lösung zu wählen.' },
    ],
    faqs: [
      { question: 'Welche solaren Bedingungen bietet Unterwalden?', answer: 'Unterwalden bietet günstige lokale Bedingungen für Photovoltaik.' },
      { question: 'Welche Förderungen gelten in Obwalden und Nidwalden?', answer: 'Beide Halbkantone bieten neben der EIV des Bundes eigene kantonale Förderbeiträge. Die Solaranlage ist steuerlich als Liegenschaftsunterhalt absetzbar.' },
      { question: 'Gibt es genug Solarinstallateure im Kanton?', answer: 'PvPro.ch vermittelt Fachbetriebe aus der Innerschweiz, die regelmässig in Nidwalden und Obwalden arbeiten. Qualität und lokale Erfahrung sind bei unseren Partnern gesichert.' },
      { question: 'Beeinflusst die Nähe zum See die Solaranlage?', answer: 'Positiv. Das Seeklima reduziert Frost und Nebel. Zudem reflektiert der See die Sonnenstrahlung auf südseitige Häuser, was den Ertrag leicht erhöht.' },
      { question: 'Kann ich in Unterwalden meinen Strom ins Netz einspeisen?', answer: 'Kosten, Ertrag und Wirtschaftlichkeit in Unterwalden hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.' },
    ],
    testimonial: {
      initials: 'ME',
      name: 'Marie-Louise Etlin',
      quote: 'Der Vierwaldstättersee und die Berge sind unser täglich Brot in Stans – jetzt kommt die Sonne noch dazu. Mit PvPro.ch war die Anlage in sechs Wochen installiert und läuft perfekt.',
    },
  },

  // ─── SOLOTHURN (DE) ──────────────────────────────────────────────────────────
  solothurn: {
    slug: 'solothurn',
    image: '/images/asset-installateur-tablet.webp',
    heroHeadline: 'Solaranlage Solothurn',
    heroSubheadline: 'Schweizer Präzision trifft saubere Energie im Aareraum',
    heroDescription: 'Solothurn bietet günstige lokale Bedingungen für Photovoltaik.',
    whySolarTitle: 'Solothurn: Präzision bei Qualität und Förderung',
    whySolarIntro: 'Die Präzisionskultur Solothurns – geprägt von Uhrmacherei und Industrie – überträgt sich auf die Solarbranche: Hochwertige Installationen mit exakter Planung und maximaler Fördernutzung.',
    whySolarReasons: [
      {
        title: 'Aare-Mikroklima – mild und sonnig',
        description: 'Das Aaretal zwischen Solothurn und Olten hat ein mildes Klimaprofil mit überdurchschnittlich wenig Nebel. Das erhöht die effektive Sonneneinstrahlung und den Jahresertrag Ihrer Anlage.',
      },
      {
        title: 'Starkes Gebäudeprogramm SO',
        description: 'Der Kanton Solothurn engagiert sich aktiv bei der Gebäudeförderung. Solaranlagen können im Rahmen des kantonalen Gebäudeprogramms mit zusätzlichen Mitteln co-finanziert werden.',
      },
      {
        title: 'Industrie und KMU gehen voran',
        description: 'Solothurner Unternehmen aus der Präzisionsbranche haben viele grosse Industriedächer. Ihre Umrüstung auf Solar schafft Referenzprojekte und lokale Expertise, die auch Privatkunden zugutekommen.',
      },
    ],
    cityFactsTitle: 'Solar-Fakten Solothurn 2026',
    cityFactsParagraphs: [
      'Solothurn bietet günstige lokale Bedingungen für Photovoltaik.',
    ],
    pricing: {
      min: ECONOMIC_FACTS.systemCosts.perKwp.min,
      max: ECONOMIC_FACTS.systemCosts.perKwp.max,
      typical5kw: ECONOMIC_FACTS.systemCosts.bySize[5],
      afterSubsidy5kw: afterFederalSubsidy5kw,
      roiYears: factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'de'),
    },
    incentives: {
      title: 'Förderung Kanton Solothurn 2026',
      description: 'Bund + kantonales Gebäudeprogramm',
      programs: [
        { name: 'Pronovo EIV (Bund)', amount: `${formatSwissNumber(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 0)} CHF pro kWp`, description: 'Einmalvergütung 5 kWp' },
        { name: 'SO Gebäudeprogramm', amount: 'Gemäss aktuellem Programm', description: 'Kantonaler Zusatzbeitrag PV' },
        { name: 'Steuerabzug SO', amount: '100%', description: 'Vollständig als Unterhalt absetzbar – bei bestehenden Gebäuden, nicht bei Neubauten, vom steuerbaren Einkommen; abzugsfähige Kosten nach Abzug von Förderbeiträgen' },
      ],
    },
    caseStudies: [
      { name: 'P. Leuenberger', location: 'Olten', systemSize: 'Projektabhängig', cost: 'Projektabhängig', savings: 'Projektabhängig', payback: 'Projektabhängig', quote: 'Der Vergleich half uns, eine passende Lösung zu wählen.' },
    ],
    faqs: [
      { question: 'Welche solaren Bedingungen bietet Solothurn?', answer: 'Solothurn bietet günstige lokale Bedingungen für Photovoltaik.' },
      { question: 'Welche Förderungen gibt es im Kanton Solothurn?', answer: 'Sie erhalten die bundesweite EIV plus kantonale Gebäudeprogramm-Beiträge. Zusätzlich ist die Anlage als Liegenschaftsunterhalt steuerlich absetzbar, was die Nettoinvestition deutlich senkt.' },
      { question: 'Gibt es in Solothurn eine Solarpflicht?', answer: 'Solothurn plant, bei umfassenden Dachsanierungen eine Solarpflicht einzuführen. Aktuell ist dies noch nicht bindend, aber die Fördermittel machen einen freiwilligen Einbau finanziell sehr attraktiv.' },
      { question: 'Wie finde ich den besten Installateur im Kanton Solothurn?', answer: 'PvPro.ch vermittelt geprüfte Fachbetriebe im Raum Solothurn, Grenchen, Olten und Balsthal. Alle Partner haben Referenzprojekte im Kanton und werden von uns auf Qualität geprüft.' },
      { question: 'Lohnt sich Solar auch für Mehrfamilienhäuser in Solothurn?', answer: 'Ja. Über Gemeinschaftsanlagen (ZEV – Zusammenschluss zum Eigenverbrauch) können alle Mieter von der gemeinsamen Solaranlage profitieren. Besonders bei Mehrfamilienhäusern mit grossen Dachflächen sehr rentabel.' },
    ],
    testimonial: {
      initials: 'PL',
      name: 'Peter Leuenberger',
      quote: 'Ich bin Ingenieur in Olten und wollte alles genau analysieren. Die drei PvPro.ch-Offerten waren klar und vergleichbar. Am Ende habe ich die beste Anlage zu einem fairen Preis bekommen – so soll es sein.',
    },
  },

  // ─── AARGAU (DE) ─────────────────────────────────────────────────────────────
  aargau: {
    slug: 'aargau',
    image: '/images/asset-haus-luftbild-4.webp',
    heroHeadline: 'Solaranlage Aargau',
    heroSubheadline: 'Von der Atomkraft zur Solarenergie – der Wandel beginnt',
    heroDescription: 'Aargau – einst Heimat von Kernkraftwerken – ist auf Kurs zur Solarrepublik. Bevölkerungsreichster Kanton nach Zürich, hohe Eigenheimquote und attraktive Förderung: Im Aargau lohnt sich die Solarinvestition besonders.',
    whySolarTitle: 'Aargau: Energiekanton im Wandel',
    whySolarIntro: 'Was Beznau und Leibstadt jahrzehntelang an Strom lieferten, übernehmen jetzt Tausende Solaranlagen auf Aargauer Dächern – dezentral, sauber und im Eigenbesitz.',
    whySolarReasons: [
      {
        title: 'Höchste Eigenheimquote der Deutschschweiz',
        description: 'Im Aargau sind besonders viele Häuser in Privatbesitz – mit grossen Dachflächen und motivierten Eigentümern. Das macht den Kanton zum wichtigsten Wachstumsmarkt für Photovoltaik.',
      },
      {
        title: 'Günstige Preise im ländlichen Raum',
        description: 'Kosten, Ertrag und Wirtschaftlichkeit in Aargau hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.',
      },
      {
        title: 'Energiestrategie 2050 – Aargau in Führung',
        description: 'Als ehemaliger Atomkanton hat Aargau besonders starke politische Motive für die Energiewende. Das kantonale Energieprogramm fördert Photovoltaik und Speicher grosszügig.',
      },
    ],
    cityFactsTitle: 'Solar-Fakten Aargau 2026',
    cityFactsParagraphs: [
      'Aargau bietet günstige lokale Bedingungen für Photovoltaik.',
    ],
    pricing: {
      min: ECONOMIC_FACTS.systemCosts.perKwp.min,
      max: ECONOMIC_FACTS.systemCosts.perKwp.max,
      typical5kw: ECONOMIC_FACTS.systemCosts.bySize[5],
      afterSubsidy5kw: afterFederalSubsidy5kw,
      roiYears: factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'de'),
    },
    incentives: {
      title: 'Förderung Kanton Aargau 2026',
      description: 'Bund + starkes kantonales Programm',
      programs: [
        { name: 'Pronovo EIV (Bund)', amount: `${formatSwissNumber(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 0)} CHF pro kWp`, description: 'Einmalvergütung 5 kWp' },
        { name: 'AG Energieprogramm', amount: 'Gemäss aktuellem Programm', description: 'Kantonaler Förderbeitrag PV' },
        { name: 'Steuerabzug AG', amount: '100%', description: 'Vollständig als Unterhalt absetzbar – bei bestehenden Gebäuden, nicht bei Neubauten, vom steuerbaren Einkommen; abzugsfähige Kosten nach Abzug von Förderbeiträgen' },
      ],
    },
    caseStudies: [
      { name: 'S. Müller', location: 'Baden', systemSize: 'Projektabhängig', cost: 'Projektabhängig', savings: 'Projektabhängig', payback: 'Projektabhängig', quote: 'Der Vergleich half uns, eine passende Lösung zu wählen.' },
    ],
    faqs: [
      { question: 'Welche solaren Bedingungen bietet Aargau?', answer: 'Aargau bietet günstige lokale Bedingungen für Photovoltaik.' },
      { question: 'Welche Förderungen gibt es im Kanton Aargau?', answer: 'Kosten, Ertrag und Wirtschaftlichkeit in Aargau hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.' },
      { question: 'Gilt im Aargau eine Solarpflicht für Neubauten?', answer: 'Ab 2026 plant der Kanton Aargau eine schrittweise Einführung der Solarpflicht für Neubauten. Bei Bestandsbauten gibt es noch keine Pflicht, aber starke Anreize.' },
      { question: 'Wie viele Solarinstallateure gibt es im Aargau?', answer: 'Der Aargau hat eine der dichtesten Installateurlandschaften der Deutschschweiz. PvPro.ch vermittelt geprüfte Betriebe in der gesamten Fläche des Kantons, von Baden bis Aarau und Zofingen.' },
      { question: 'Lohnt sich Solar mit einem Elektroauto im Aargau?', answer: 'Sehr. Mit einer 8-kWp-Anlage, Heimspeicher und Wallbox können Sie Ihr Elektroauto tagsüber nahezu kostenfrei laden. Die Gesamtrendite verbessert sich erheblich gegenüber Solar ohne EV.' },
    ],
    testimonial: {
      initials: 'SM',
      name: 'Sandra Müller',
      quote: 'Baden liegt im Energieland Aargau – früher Kernkraft, heute Solar auf meinem Dach. PvPro.ch war unkompliziert: in drei Tagen drei Angebote, klarer Vergleich, schnelle Entscheidung. Perfekt.',
    },
  },

  // ─── GENÈVE (FR) ─────────────────────────────────────────────────────────────
  geneve: {
    slug: 'geneve',
    image: '/images/asset-beratung-indoor-1.webp',
    heroHeadline: 'Installation Solaire à Genève',
    heroSubheadline: 'La Cité Internationale en tête du solaire suisse',
    heroDescription: "Demandez 3 offres gratuites maintenant.",
    whySolarTitle: "Pourquoi Genève est un champion du solaire",
    whySolarIntro: "Genève bénéficie d’un climat local favorable au photovoltaïque.",
    whySolarReasons: [
      {
        title: "Les coûts, la production et la rentabilité à Genève dépendent du bâtiment, du dimensionnement et de l’autoconsommation.",
        description: "Les Services Industriels de Genève (SIG) offrent une prime spéciale pour chaque installation photovoltaïque, s'ajoutant à la RU fédérale. Ce double avantage est unique en Suisse romande.",
      },
      {
        title: "Obligation solaire depuis 2022",
        description: "Genève impose le solaire sur toute rénovation de toiture importante depuis 2022. Cette obligation transforme chaque rénovation en opportunité d'investissement rentable et subventionné.",
      },
      {
        title: "Climat local favorable",
        description: "Les coûts, la production et la rentabilité à Genève dépendent du bâtiment, du dimensionnement et de l’autoconsommation.",
      },
    ],
    cityFactsTitle: "Faits solaires Genève 2026",
    cityFactsParagraphs: [
      "Genève bénéficie d’un climat local favorable au photovoltaïque.",
    ],
    pricing: {
      min: ECONOMIC_FACTS.systemCosts.perKwp.min,
      max: ECONOMIC_FACTS.systemCosts.perKwp.max,
      typical5kw: ECONOMIC_FACTS.systemCosts.bySize[5],
      afterSubsidy5kw: afterFederalSubsidy5kw,
      roiYears: factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'fr'),
    },
    incentives: {
      title: "Aides solaires Genève 2026",
      description: "Confédération + SIG Prime Énergie",
      programs: [
        { name: 'Pronovo RU (Confédération)', amount: `${formatSwissNumber(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 0)} CHF par kWc`, description: 'Rétribution unique 5 kWc' },
        { name: 'SIG Prime Énergie', amount: 'Selon le programme en vigueur', description: 'Bonus genevois exclusif' },
        { name: "Déduction fiscale GE", amount: '100%', description: "Déductible comme entretien immobilier du revenu imposable pour les bâtiments existants, pas les constructions neuves; coûts éligibles après déduction des subventions" },
      ],
    },
    caseStudies: [
      { name: 'I. Rochat', location: 'Carouge', systemSize: 'Selon le projet', cost: 'Selon le projet', savings: 'Selon le projet', payback: 'Selon le projet', quote: 'La comparaison nous a permis de choisir une solution adaptée.' },
    ],
    faqs: [
      { question: "Quelle est l'obligation solaire à Genève ?", answer: "Depuis 2022, toute rénovation de toiture importante sur un bâtiment à Genève impose l'installation de panneaux photovoltaïques. PvPro.ch vous connecte avec des installateurs certifiés qui gèrent les démarches administratives." },
      { question: "Comment fonctionne le programme SIG Prime Énergie ?", answer: 'Les coûts, la production et la rentabilité à Genève dépendent du bâtiment, du dimensionnement et de l’autoconsommation.' },
      { question: "Quel est le tarif de rachat du surplus à Genève ?", answer: 'Les coûts, la production et la rentabilité à Genève dépendent du bâtiment, du dimensionnement et de l’autoconsommation.' },
      { question: "Peut-on installer du solaire sur un immeuble en PPE à Genève ?", answer: "Oui. Via un ZEV (Zusammenschluss zum Eigenverbrauch) ou un modèle de communauté locale, tous les propriétaires d'un immeuble peuvent partager une installation solaire et bénéficier des subventions." },
      { question: "Combien de temps faut-il pour installer du solaire à Genève ?", answer: "De la signature du contrat à la mise en service, comptez 6 à 12 semaines à Genève. Les demandes d'autorisation et la connexion au réseau SIG sont bien rodées grâce au volume d'installations." },
    ],
    testimonial: {
      initials: 'IR',
      name: 'Isabelle Rochat',
      quote: "Les coûts, la production et la rentabilité à Genève dépendent du bâtiment, du dimensionnement et de l’autoconsommation.",
    },
  },

  // ─── VAUD (FR) ───────────────────────────────────────────────────────────────
  vaud: {
    slug: 'vaud',
    image: '/images/asset-beratung-indoor-2.webp',
    heroHeadline: "Installation Solaire dans le Canton de Vaud",
    heroSubheadline: "Du Léman aux Alpes – le solaire vaudois en plein essor",
    heroDescription: "Vaud bénéficie d’un climat local favorable au photovoltaïque.",
    whySolarTitle: "Pourquoi le solaire s'épanouit dans le canton de Vaud",
    whySolarIntro: "Le Canton de Vaud combine un climat favorable, la proximité du Lac Léman et un tissu économique innovant pour faire du solaire un investissement évident.",
    whySolarReasons: [
      {
        title: "EPFL – l'innovation solaire au cœur de Vaud",
        description: "L'École Polytechnique Fédérale de Lausanne est un centre mondial de recherche solaire. Cette expertise se diffuse dans tout le canton : installateurs locaux ultra-qualifiés et technologies de pointe disponibles.",
      },
      {
        title: "Climat local favorable",
        description: "Les coûts, la production et la rentabilité à Vaud dépendent du bâtiment, du dimensionnement et de l’autoconsommation.",
      },
      {
        title: "Vignobles et agri-PV – tradition et modernité",
        description: "Les viticulteurs vaudois adoptent les structures Agri-PV pour protéger leurs vignes des aléas climatiques tout en produisant de l'électricité. Un double dividende qui inspire aussi les agriculteurs.",
      },
    ],
    cityFactsTitle: "Faits solaires Vaud 2026",
    cityFactsParagraphs: [
      "Vaud bénéficie d’un climat local favorable au photovoltaïque.",
    ],
    pricing: {
      min: ECONOMIC_FACTS.systemCosts.perKwp.min,
      max: ECONOMIC_FACTS.systemCosts.perKwp.max,
      typical5kw: ECONOMIC_FACTS.systemCosts.bySize[5],
      afterSubsidy5kw: afterFederalSubsidy5kw,
      roiYears: factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'fr'),
    },
    incentives: {
      title: "Aides solaires Vaud 2026",
      description: "Confédération + programme cantonal VD",
      programs: [
        { name: 'Pronovo RU (Confédération)', amount: `${formatSwissNumber(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 0)} CHF par kWc`, description: 'Rétribution unique 5 kWc' },
        { name: 'Programme cantonal VD', amount: 'Selon le programme en vigueur', description: "Subvention cantonale photovoltaïque" },
        { name: "Déduction fiscale VD", amount: '100%', description: "Déductible en entretien immobilier du revenu imposable pour les bâtiments existants, pas les constructions neuves; coûts éligibles après déduction des subventions" },
      ],
    },
    caseStudies: [
      { name: 'M. Pittet', location: 'Lausanne', systemSize: 'Selon le projet', cost: 'Selon le projet', savings: 'Selon le projet', payback: 'Selon le projet', quote: 'La comparaison nous a permis de choisir une solution adaptée.' },
    ],
    faqs: [
      { question: "Quelles subventions pour le solaire dans le Canton de Vaud ?", answer: "Vous bénéficiez de la rétribution unique fédérale (Pronovo) cumulée avec le programme cantonal vaudois. Les panneaux solaires sont intégralement déductibles comme entretien immobilier." },
      { question: "Peut-on installer du solaire sur une propriété protégée dans le Lavaux ?", answer: "Le Lavaux est classé au patrimoine UNESCO. Des solutions intégrées et des nuances de couleurs spécifiques sont disponibles pour respecter l'esthétique protégée. Nos installateurs connaissent ces contraintes." },
      { question: "Comment fonctionne l'agri-PV pour les viticulteurs vaudois ?", answer: "Les structures Agri-PV permettent d'installer des panneaux en hauteur au-dessus des vignes. Elles protègent contre la grêle et les gelées tout en générant de l'électricité. Des subventions spéciales existent pour les exploitations agricoles." },
      { question: "Quel est le délai d'installation dans le canton lausannoise ?", answer: "Dans l'agglomération lausannoise, comptez 6 à 10 semaines entre la signature et la mise en service. Nos partenaires ont l'habitude des procédures communales vaudoises." },
      { question: "Quelle taille d'installation pour un chalet aux Alpes vaudoises ?", answer: "Pour un chalet utilisé en week-end, une installation de 4–6 kWc est généralement idéale. Si vous avez une pompe à chaleur ou une borne de recharge, optez pour 7–10 kWc avec stockage batterie." },
    ],
    testimonial: {
      initials: 'MP',
      name: 'Marc-André Pittet',
      quote: "Lausanne est une ville innovante — mon toit devait l'être aussi. PvPro.ch m'a permis de comparer trois offres sérieuses en une semaine. L'installation s'est faite sans accroc et je produis plus que prévu.",
    },
  },

  // ─── VALAIS (FR) ─────────────────────────────────────────────────────────────
  valais: {
    slug: 'valais',
    image: '/images/asset-installateur-montage-1.webp',
    heroHeadline: "Installation Solaire en Valais",
    heroSubheadline: "Le Champion Suisse du Solaire alpin",
    heroDescription: "Valais bénéficie d’un climat local favorable au photovoltaïque.",
    whySolarTitle: "Pourquoi le Valais est le champion solaire de Suisse",
    whySolarIntro: "Irradiation alpine record, tourisme durable en haute montagne et un programme cantonal ambitieux font du Valais l'eldorado suisse du solaire.",
    whySolarReasons: [
      {
        title: "Les coûts, la production et la rentabilité à Valais dépendent du bâtiment, du dimensionnement et de l’autoconsommation.",
        description: "En Valais, la faible épaisseur atmosphérique en altitude et le réfléchissement de la neige créent des conditions irradiance parmi les meilleures d'Europe centrale. Chaque kWc installé produit davantage qu'ailleurs.",
      },
      {
        title: "Tourisme durable: Zermatt, Verbier, Crans-Montana",
        description: "Les grandes stations valaisannes investissent massivement dans le solaire comme label durable. Cette dynamique crée un vivier d'installateurs alpins hautement qualifiés, disponibles aussi pour les résidences privées.",
      },
      {
        title: "Programme cantonal VS – parmi les plus généreux",
        description: "Le Canton du Valais propose une des subventions cantonales les plus élevées de Suisse romande, cumulable avec la rétribution unique fédérale. Le retour sur investissement peut être inférieur à 8 ans.",
      },
    ],
    cityFactsTitle: "Faits solaires Valais 2026",
    cityFactsParagraphs: [
      "Valais bénéficie d’un climat local favorable au photovoltaïque.",
    ],
    pricing: {
      min: ECONOMIC_FACTS.systemCosts.perKwp.min,
      max: ECONOMIC_FACTS.systemCosts.perKwp.max,
      typical5kw: ECONOMIC_FACTS.systemCosts.bySize[5],
      afterSubsidy5kw: afterFederalSubsidy5kw,
      roiYears: factRange(ECONOMIC_FACTS.systemPaybackYears.ticinoValais, 'fr'),
    },
    incentives: {
      title: "Aides solaires Valais 2026",
      description: "Confédération + programme VS généreux",
      programs: [
        { name: 'Pronovo RU (Confédération)', amount: `${formatSwissNumber(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 0)} CHF par kWc`, description: 'Rétribution unique 5 kWc' },
        { name: 'Programme cantonal VS', amount: 'Selon le programme en vigueur', description: "Parmi les plus élevés de Suisse romande" },
        { name: "Déduction fiscale VS", amount: '100%', description: "Déductible en entretien immobilier du revenu imposable pour les bâtiments existants, pas les constructions neuves; coûts éligibles après déduction des subventions" },
      ],
    },
    caseStudies: [
      { name: 'J. Michelet', location: 'Sion', systemSize: 'Selon le projet', cost: 'Selon le projet', savings: 'Selon le projet', payback: 'Selon le projet', quote: 'La comparaison nous a permis de choisir une solution adaptée.' },
    ],
    faqs: [
      { question: "Pourquoi le Valais est-il si avantageux pour le solaire ?", answer: "Le Valais combine 1'849 h de soleil, une irradiance alpine record, un programme cantonal parmi les plus généreux de Suisse et des installateurs alpins très expérimentés. Le ROI est de 6 à 8 ans." },
      { question: "Quelles subventions pour le solaire en Valais ?", answer: 'Les coûts, la production et la rentabilité à Valais dépendent du bâtiment, du dimensionnement et de l’autoconsommation.' },
      { question: "Est-il possible d'installer du solaire sur un chalet alpin ?", answer: "Oui. Nos partenaires installateurs connaissent parfaitement les contraintes alpines : charge de neige, vent, accès en altitude. Des solutions robustes et certifiées sont disponibles pour tous types de chalets." },
      { question: "Comment le reflet de la neige profite-t-il aux installations solaires en Valais ?", answer: 'Les coûts, la production et la rentabilité à Valais dépendent du bâtiment, du dimensionnement et de l’autoconsommation.' },
      { question: "Quelle est la différence de production entre Sion et Zermatt ?", answer: 'Les coûts, la production et la rentabilité à Valais dépendent du bâtiment, du dimensionnement et de l’autoconsommation.' },
    ],
    testimonial: {
      initials: 'JM',
      name: 'Jean-Pierre Michelet',
      quote: "En Valais, on vit avec le soleil depuis toujours. Grâce à PvPro.ch, j'ai trouvé un installateur de confiance à Sion qui a dimensionné mon installation parfaitement. Aujourd'hui je produis plus que je consomme.",
    },
  },

  // ─── TICINO (IT) ─────────────────────────────────────────────────────────────
  ticino: {
    slug: 'ticino',
    image: '/images/asset-haus-solar-ev-1.webp',
    heroHeadline: 'Impianto Fotovoltaico in Ticino',
    heroSubheadline: 'Il Cantone con il sole migliore della Svizzera',
    heroDescription: "Ticino beneficia di un clima locale favorevole al fotovoltaico.",
    whySolarTitle: 'Perché il Ticino è il numero 1 del solare in Svizzera',
    whySolarIntro: "Ticino beneficia di un clima locale favorevole al fotovoltaico.",
    whySolarReasons: [
      {
        title: "Clima locale favorevole",
        description: "Ticino beneficia di un clima locale favorevole al fotovoltaico.",
      },
      {
        title: "Incentivi federali e cantonali cumulabili",
        description: "Costi, produzione e redditività in Ticino dipendono dall’edificio, dal dimensionamento e dall’autoconsumo.",
      },
      {
        title: "Autoconsumo: più importante che mai nel 2026",
        description: "La remunerazione per l'energia immessa in rete varia nel tempo e in base al gestore. Aumentare l'autoconsumo con una batteria, una pompa di calore o una wallbox migliora significativamente il valore dell'energia prodotta.",
      },
    ],
    cityFactsTitle: "Fatti solari Ticino 2026",
    cityFactsParagraphs: [
      "Ticino beneficia di un clima locale favorevole al fotovoltaico.",
    ],
    pricing: {
      min: ECONOMIC_FACTS.systemCosts.perKwp.min,
      max: ECONOMIC_FACTS.systemCosts.perKwp.max,
      typical5kw: ECONOMIC_FACTS.systemCosts.bySize[5],
      afterSubsidy5kw: afterFederalSubsidy5kw,
      roiYears: factRange(ECONOMIC_FACTS.systemPaybackYears.ticinoValais, 'it'),
    },
    incentives: {
      title: "Incentivi fotovoltaico Ticino 2026",
      description: "Confederazione + Cantone Ticino",
      programs: [
        { name: 'Pronovo RU (Confederazione)', amount: `${formatSwissNumber(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 0)} CHF per kWp`, description: 'Rimunerazione unica 5 kWp' },
        { name: 'Cantone Ticino – DFE', amount: 'Secondo il programma vigente', description: 'Contributo cantonale fotovoltaico' },
        { name: 'Deduzione fiscale TI', amount: '100%', description: 'Deducibile come manutenzione immobiliare dal reddito imponibile per edifici esistenti, non per nuove costruzioni; costi ammissibili al netto degli incentivi' },
      ],
    },
    caseStudies: [
      { name: 'M. Bernasconi', location: 'Lugano', systemSize: 'In base al progetto', cost: 'In base al progetto', savings: 'In base al progetto', payback: 'In base al progetto', quote: 'Il confronto ci ha permesso di scegliere una soluzione adatta.' },
    ],
    faqs: [
      { question: "Quali incentivi fotovoltaici sono disponibili in Ticino nel 2026?", answer: 'Costi, produzione e redditività in Ticino dipendono dall’edificio, dal dimensionamento e dall’autoconsumo.' },
      { question: "Quanto costa un impianto fotovoltaico in Ticino?", answer: 'Costi, produzione e redditività in Ticino dipendono dall’edificio, dal dimensionamento e dall’autoconsumo.' },
      { question: "Quanto tempo serve per ammortizzare l'investimento?", answer: "Il periodo di ammortamento dipende da molti fattori: caratteristiche del tetto, consumo annuo, quota di autoconsumo, presenza di batteria, tariffa elettrica e incentivi ottenuti. In Ticino, grazie all'irraggiamento elevato, le condizioni sono favorevoli, ma non è possibile garantire un periodo specifico senza analizzare il caso concreto." },
      { question: "Come funzionano le Comunità Locali di Energia (CEL) in Ticino?", answer: "Le CEL permettono di condividere l'energia solare prodotta con i vicini. Sono particolarmente interessanti per condomini e zone residenziali. I vantaggi economici dipendono dalla configurazione e dalla normativa applicabile — il vostro installatore può fornire una valutazione specifica." },
      { question: "Conviene aggiungere una batteria?", answer: 'Costi, produzione e redditività in Ticino dipendono dall’edificio, dal dimensionamento e dall’autoconsumo.' },
      { question: "I pannelli resistono alle grandinate tipiche del Ticino?", answer: "Sì. I pannelli installati da installatori certificati sono testati per la resistenza alla grandine. Verificate le specifiche tecniche e le garanzie con il vostro installatore." },
    ],
    testimonial: {
      initials: 'MB',
      name: 'Marco Bernasconi',
      quote: "A Lugano abbiamo condizioni favorevoli per sfruttare l'energia solare. Il confronto tramite PvPro.ch mi ha aiutato a scegliere un impianto adatto alla casa e ai nostri consumi.",
    },
  },

  // ─── FREIBURG (DE) ───────────────────────────────────────────────────────────
  freiburg: {
    slug: 'freiburg',
    image: '/images/asset-haus-alpen-1.webp',
    heroHeadline: 'Solaranlage im Kanton Freiburg',
    heroSubheadline: 'Zweisprachig. Förderungsstark. Zukunftsorientiert.',
    heroDescription: 'Der Kanton Freiburg vereint deutsch- und frankophone Traditionen – und fördert Solaranlagen in beiden Landesteilen mit attraktiven Kantonsprogrammen. Vergleichen Sie bis zu 3 geprüfte Offerten und sichern Sie sich Ihre EIV-Förderung 2026.',
    whySolarTitle: 'Warum Solar im Kanton Freiburg besonders lohnenswert ist',
    whySolarIntro: 'Als einziger offiziell zweisprachiger Kanton der Schweiz verbindet Freiburg ländliche Agrar­tradition mit ambitionierten Klimazielen und soliden Förderprogrammen.',
    whySolarReasons: [
      {
        title: 'Grosszügige Kantonsförderung',
        description: "Kosten, Ertrag und Wirtschaftlichkeit in Freiburg hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.",
      },
      {
        title: 'Agri-PV im Greyerzerland',
        description: "Das Freiburger Mittelland und der Bezirk Greyerz eignen sich hervorragend für Agri-PV. Landwirtschaftliche Betriebe kombinieren Sonnenenergie und Viehwirtschaft – mit Doppelnutzen für Boden und Klima.",
      },
      {
        title: 'Günstige Sonnenlage',
        description: "Freiburg bietet günstige lokale Bedingungen für Photovoltaik.",
      },
    ],
    cityFactsTitle: 'Solarenergie im Kanton Freiburg – was Sie wissen sollten',
    cityFactsParagraphs: [
      "Der Kanton Freiburg hat sich verpflichtet, bis 2050 klimaneutral zu sein. Photovoltaik spielt dabei eine Schlüsselrolle: Der Kanton fördert sowohl Neuinstallationen auf Dächern als auch Fassaden-PV in historischen Ortschaften.",
      "Besonders im Sensebezirk und im Broyebezirk boomt die Solarenergie. Viele Landwirtschaftsbetriebe nutzen grosse Schrägdächer ihrer Ökonomiegebäude für leistungsstarke Anlagen ab 15 kWp.",
    ],
    pricing: {
      min: ECONOMIC_FACTS.systemCosts.perKwp.min,
      max: ECONOMIC_FACTS.systemCosts.perKwp.max,
      typical5kw: ECONOMIC_FACTS.systemCosts.bySize[5],
      afterSubsidy5kw: afterFederalSubsidy5kw,
      roiYears: factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'de'),
    },
    incentives: {
      title: 'Förderungen für Solaranlagen in Freiburg',
      description: "Im Kanton Freiburg profitieren Hausbesitzer von der eidgenössischen Einmalvergütung (EIV) via Pronovo sowie ergänzenden Kantonsbeiträgen. Solarinvestitionen sind als werterhaltende Massnahmen vollständig steuerlich absetzbar.",
      programs: [
        { name: 'Bundesförderung EIV (Pronovo)', amount: `${formatSwissNumber(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 0)} CHF pro kWp`, description: 'Einmalige Bundesvergütung für Anlagen ab 2 kWp – gilt kantonsübergreifend.' },
        { name: 'Kantonsförderung Freiburg', amount: `${formatSwissNumber(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 0)} CHF pro kWp`, description: 'Zusatzbeitrag des Kantons Freiburg für Wohneigentümer – kann mit dem EIV kombiniert werden.' },
        { name: 'Steuerliche Absetzbarkeit', amount: '100 % der Kosten', description: 'Alle Freiburger Gemeinden akzeptieren Solaranlagen als Unterhaltskosten – voll vom steuerbaren Einkommen absetzbar; bei bestehenden Gebäuden, nicht bei Neubauten, und für abzugsfähige Kosten nach Abzug von Förderbeiträgen.' },
      ],
    },
    caseStudies: [
      {
        name: 'Familie Lötscher',
        location: 'Düdingen',
        systemSize: 'Projektabhängig',
        cost: "Projektabhängig",
        savings: "Projektabhängig",
        payback: 'Projektabhängig',
        quote: "In Düdingen läuft vieles über Empfehlung – PvPro.ch hat mir drei lokale Installateure vermittelt, die alle den Kanton Freiburg sehr gut kennen. Die Offerten lagen nahe beieinander, die Qualität war überzeugend.",
      },
    ],
    faqs: [
      { question: 'Welche Förderungen gibt es für Solaranlagen im Kanton Freiburg?', answer: 'Kosten, Ertrag und Wirtschaftlichkeit in Freiburg hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.' },
      { question: 'Welche solaren Bedingungen bietet Freiburg?', answer: 'Freiburg bietet günstige lokale Bedingungen für Photovoltaik.' },
      { question: 'Benötige ich im Kanton Freiburg eine Baugenehmigung für eine Solaranlage?', answer: 'Im Kanton Freiburg genügt für Dachflächenanlagen an bestehenden Gebäuden in den meisten Gemeinden eine einfache Meldung. Nur bei geschützten Ortsbildern oder denkmalgeschützten Gebäuden ist eine Bewilligung nötig.' },
      { question: 'Lohnt sich Agri-PV im Kanton Freiburg?', answer: "Ja. Gerade im Greyerzerland und im Broyebezirk kombinieren Landwirtschaftsbetriebe Solar mit Viehwirtschaft oder Ackerbau. Spezielle Bundesförderprogramme für Agri-PV-Pilot­projekte sind verfügbar." },
      { question: 'Wie finde ich einen guten Solarinstallateur in Freiburg?', answer: 'PvPro.ch vermittelt ausschliesslich zertifizierte Installateure mit Referenzen im Kanton Freiburg. Stellen Sie eine unverbindliche Anfrage und erhalten Sie innerhalb von 48 Stunden bis zu 3 Vergleichsofferten.' },
    ],
    testimonial: {
      initials: 'FL',
      name: 'Franz Lötscher',
      quote: "Kosten, Ertrag und Wirtschaftlichkeit in Freiburg hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.",
    },
  },

  // ─── BIEL/BIENNE (DE) ────────────────────────────────────────────────────────
  biel: {
    slug: 'biel',
    image: '/images/asset-haus-luftbild-1.webp',
    heroHeadline: 'Solaranlage in Biel/Bienne',
    heroSubheadline: 'Die Uhrenhauptstadt setzt auf Solarenergie',
    heroDescription: "Biel/Bienne liegt im Herzen des Berner Juras – und profitiert von einer begünstigten Sonnenlage am Bielersee. Vergleichen Sie jetzt bis zu 3 geprüfte Offerten von zertifizierten Solarinstallateuren im Raum Biel.",
    whySolarTitle: 'Warum Solar in Biel/Bienne besonders attraktiv ist',
    whySolarIntro: 'Als zweisprachige Industriestadt verbindet Biel/Bienne Präzisionstradition mit Pioniergeist – auch in der Energiewende.',
    whySolarReasons: [
      {
        title: 'Günstiges Mikroklima am Bielersee',
        description: "Biel/Bienne bietet günstige lokale Bedingungen für Photovoltaik.",
      },
      {
        title: 'Starke kommunale Energieförderung',
        description: "Die Stadt Biel hat einen eigenen Energiefonds mit Beiträgen für Solaranlagen. Kombiniert mit EIV und kantonaler Berner Förderung kann die Nettoinvestition deutlich reduziert werden.",
      },
      {
        title: 'Schnelle Amortisation',
        description: "Biel/Bienne bietet günstige lokale Bedingungen für Photovoltaik.",
      },
    ],
    cityFactsTitle: 'Solarenergie in Biel – kantonale Besonderheiten',
    cityFactsParagraphs: [
      "Die Stadt Biel/Bienne hat sich früh zur Energiestadt entwickelt – eine Auszeichnung, die die Stadt für besonders vorbildliches Energiemanagement erhält. Das spiegelt sich in klaren Prozessen für Baubewilligungen und einer praxisnahen Beratung durch die Stadtbehörden.",
      "Viele Neubauprojekte in der Entwicklungszone Biel-West und in der Agglomeration Nidau integrieren Solar bereits in der Planungsphase. Für Bestandsgebäude sind Nachrüstungen unkompliziert möglich.",
    ],
    pricing: {
      min: ECONOMIC_FACTS.systemCosts.perKwp.min,
      max: ECONOMIC_FACTS.systemCosts.perKwp.max,
      typical5kw: ECONOMIC_FACTS.systemCosts.bySize[5],
      afterSubsidy5kw: afterFederalSubsidy5kw,
      roiYears: factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'de'),
    },
    incentives: {
      title: 'Förderungen für Solaranlagen in Biel/Bienne',
      description: "In Biel/Bienne profitieren Sie von drei Förderebenen: Bundesförderung, kantonale Berner Förderung und städtischer Energiefonds. Alle können kumuliert werden.",
      programs: [
        { name: 'Bundesförderung EIV (Pronovo)', amount: `${formatSwissNumber(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 0)} CHF pro kWp`, description: 'Einmalige Bundesvergütung für alle Anlagen ab 2 kWp.' },
        { name: 'Kanton Bern – Kantonsprogramm', amount: 'Gemäss aktuellem Programm', description: 'Zusatzbeiträge des Kantons Bern, ergänzend zum Bundesbeitrag.' },
        { name: 'Energiefonds Stadt Biel', amount: 'Gemäss aktuellem Programm', description: 'Städtischer Förderbeitrag der Stadt Biel für Solarprojekte im Stadtgebiet.' },
      ],
    },
    caseStudies: [
      {
        name: 'Familie Widmer',
        location: 'Nidau / Biel',
        systemSize: 'Projektabhängig',
        cost: "Projektabhängig",
        savings: "Projektabhängig",
        payback: 'Projektabhängig',
        quote: "Wir wohnten in Nidau und haben über PvPro.ch drei Offerten aus dem Raum Biel erhalten. Der ausgewählte Installateur kannte die Anforderungen der Stadt Biel in- und auswendig – alles lief reibungslos.",
      },
    ],
    faqs: [
      { question: 'Welche Förderungen gibt es für Solaranlagen in Biel?', answer: 'Kosten, Ertrag und Wirtschaftlichkeit in Biel/Bienne hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.' },
      { question: 'Welche solaren Bedingungen bietet Biel/Bienne?', answer: 'Biel/Bienne bietet günstige lokale Bedingungen für Photovoltaik.' },
      { question: 'Brauche ich in Biel eine Baubewilligung für eine Solaranlage?', answer: 'In der Stadt Biel ist für dachintegrierte oder dachparallele Anlagen an Bestandsgebäuden in der Regel nur eine Meldung erforderlich. Die städtische Bauverwaltung bearbeitet Solaranfragen speditiv.' },
      { question: 'Ist Biel eine Energiestadt?', answer: "Ja. Biel/Bienne trägt das Label «Energiestadt» und hat ambitionierte Klimaziele bis 2030. Das bedeutet praxisnahe Behörden, klare Prozesse und Unterstützung für Solarprojekte auch auf Gemeindeebene." },
      { question: 'Wie schnell amortisiert sich eine Solaranlage in Biel?', answer: 'Kosten, Ertrag und Wirtschaftlichkeit in Biel/Bienne hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.' },
    ],
    testimonial: {
      initials: 'PW',
      name: 'Peter Widmer',
      quote: "Biel hat mehr Sonne als man denkt. Meine 9 kWp Anlage produziert im Sommer fast doppelt so viel Strom wie wir verbrauchen – den Rest speisen wir ins Netz ein. Die Förderungen haben die Anfangsinvestition erheblich reduziert.",
    },
  },

  // ─── WALLIS (DE) ─────────────────────────────────────────────────────────────
  wallis: {
    slug: 'wallis',
    image: '/images/asset-haus-alpen-2.webp',
    heroHeadline: 'Solaranlage im Kanton Wallis',
    heroSubheadline: "Günstige solare Bedingungen nutzen",
    heroDescription: "Wallis bietet günstige lokale Bedingungen für Photovoltaik.",
    whySolarTitle: 'Warum das Wallis der ideale Standort für Solar ist',
    whySolarIntro: 'Das Rhônetal und die Walliser Alpentäler bieten dank Alpinlage, trockenem Klima und hoher Sonneneinstrahlung optimale Bedingungen für Photovoltaik.',
    whySolarReasons: [
      {
        title: "Günstige lokale Bedingungen",
        description: "Kosten, Ertrag und Wirtschaftlichkeit in Wallis hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.",
      },
      {
        title: 'Albedo-Effekt: Schnee als Boostverstärker',
        description: "Kosten, Ertrag und Wirtschaftlichkeit in Wallis hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.",
      },
      {
        title: 'Hohe Kantonsförderung',
        description: "Kosten, Ertrag und Wirtschaftlichkeit in Wallis hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.",
      },
    ],
    cityFactsTitle: 'Solarenergie im Wallis – kantonale Besonderheiten',
    cityFactsParagraphs: [
      "Im Wallis boomt die Solarenergie auf breiter Front: Neben Einfamilienhäusern investieren Bergbahnen, Hotels und Alpwirtschaften massiv in PV-Anlagen. Die lokale Installateur-Szene ist hoch spezialisiert, auch für Steillagen und alpine Gegebenheiten.",
      "Kosten, Ertrag und Wirtschaftlichkeit in Wallis hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.",
    ],
    pricing: {
      min: ECONOMIC_FACTS.systemCosts.perKwp.min,
      max: ECONOMIC_FACTS.systemCosts.perKwp.max,
      typical5kw: ECONOMIC_FACTS.systemCosts.bySize[5],
      afterSubsidy5kw: afterFederalSubsidy5kw,
      roiYears: factRange(ECONOMIC_FACTS.systemPaybackYears.ticinoValais, 'de'),
    },
    incentives: {
      title: 'Förderungen für Solaranlagen im Wallis 2026',
      description: "Das Wallis bietet eine der attraktivsten Förderlandschaften der Schweiz. Neben dem Bundesbeitrag (EIV) gibt es einen kantonalen Beitrag, der besonders für alpine Standorte grosszügig ausgelegt ist.",
      programs: [
        { name: 'Bundesförderung EIV (Pronovo)', amount: `${formatSwissNumber(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 0)} CHF pro kWp`, description: 'Einmalige Vergütung für alle Anlagen ab 2 kWp in der ganzen Schweiz.' },
        { name: 'Kanton Wallis – Kantonsbeitrag', amount: 'Gemäss aktuellem Programm', description: 'Einer der höchsten kantonalen Zusatzbeiträge der Schweiz – besonders für Anlagen über 10 kWp.' },
        { name: 'Steuerliche Absetzbarkeit', amount: '100 % der Kosten', description: 'Solarinvestitionen sind im Kanton Wallis als Unterhaltskosten vollumfänglich vom steuerbaren Einkommen abzugsfähig; bei bestehenden Gebäuden, nicht bei Neubauten, und für abzugsfähige Kosten nach Abzug von Förderbeiträgen.' },
      ],
    },
    caseStudies: [
      {
        name: 'Familie Zenhäusern',
        location: 'Visp / Wallis',
        systemSize: 'Projektabhängig',
        cost: "Projektabhängig",
        savings: "Projektabhängig",
        payback: 'Projektabhängig',
        quote: "Im Wallis lohnt sich Solar noch mehr als anderswo. Die Förderung war sehr grosszügig und unser Installateur kannte alle kantonalen Anforderungen genau. Wir produzieren jetzt mehr Strom als wir verbrauchen.",
      },
    ],
    faqs: [
      { question: 'Welche solaren Bedingungen bietet Wallis?', answer: 'Wallis bietet günstige lokale Bedingungen für Photovoltaik.' },
      { question: 'Welche Förderungen gibt es für Solaranlagen im Wallis?', answer: 'Kosten, Ertrag und Wirtschaftlichkeit in Wallis hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.' },
      { question: 'Lohnt sich Solar im Wallis auch im Winter?', answer: 'Kosten, Ertrag und Wirtschaftlichkeit in Wallis hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.' },
      { question: 'Welche Anforderungen gelten für alpine Solaranlagen im Wallis?', answer: "Anlagen in Steillagen oder alpinen Zonen erfordern spezielle Montagesysteme und schneelastgerechte Auslegung. Unsere zertifizierten Walliser Installateure sind auf Berganlagen spezialisiert." },
      { question: 'Wie schnell amortisiert sich eine Solaranlage im Wallis?', answer: 'Kosten, Ertrag und Wirtschaftlichkeit in Wallis hängen von Gebäude, Dimensionierung und Eigenverbrauch ab.' },
    ],
    testimonial: {
      initials: 'RZ',
      name: 'Robert Zenhäusern',
      quote: "Das Wallis ist das Sonnendach der Schweiz. Mit 10 kWp produziere ich jährlich mehr Strom als meine Familie verbraucht. Die Walliser Förderung plus EIV haben die Kosten massiv gesenkt – eine der besten Investitionen meines Lebens.",
    },
  },

  // ─── FRIBOURG (FR) ───────────────────────────────────────────────────────────
  fribourg: {
    slug: 'fribourg',
    image: '/images/asset-haus-alpen-1.webp',
    heroHeadline: 'Installation solaire dans le Canton de Fribourg',
    heroSubheadline: 'Bilingue. Engagé. Productif.',
    heroDescription: "Le Canton de Fribourg combine tradition agricole et ambitions climatiques fortes. Profitez des subventions cantonales attractives et comparez jusqu'à 3 offres d'installateurs certifiés dans votre canton.",
    whySolarTitle: 'Pourquoi le solaire est particulièrement rentable à Fribourg',
    whySolarIntro: "Seul canton officiellement bilingue de Suisse, Fribourg mise sur le renouvelable pour atteindre ses objectifs climatiques 2050 – avec un soutien financier concret pour les propriétaires.",
    whySolarReasons: [
      {
        title: 'Subventions cantonales attractives',
        description: "Les coûts, la production et la rentabilité à Fribourg dépendent du bâtiment, du dimensionnement et de l’autoconsommation.",
      },
      {
        title: 'Agri-PV dans le Gruyère',
        description: "Le district de la Gruyère est pionnier en matière d'agri-PV en Suisse romande. Les exploitations agricoles combinent production laitière et énergie solaire, avec des programmes pilotes fédéraux spécifiques.",
      },
      {
        title: 'Climat local favorable',
        description: "Fribourg bénéficie d’un climat local favorable au photovoltaïque.",
      },
    ],
    cityFactsTitle: "Le solaire fribourgeois – ce qu'il faut savoir",
    cityFactsParagraphs: [
      "Le Canton de Fribourg s'est fixé l'objectif de devenir climatiquement neutre d'ici 2050. Le photovoltaïque est l'un des piliers de cette stratégie, soutenu par une réglementation claire et des aides financières directes.",
      "Dans les districts du Lac et de la Broye, la densité de toitures adaptées est particulièrement élevée. Les procédures d'autorisation sont simplifiées pour les installations standards, et les délais de traitement restent raisonnables.",
    ],
    pricing: {
      min: ECONOMIC_FACTS.systemCosts.perKwp.min,
      max: ECONOMIC_FACTS.systemCosts.perKwp.max,
      typical5kw: ECONOMIC_FACTS.systemCosts.bySize[5],
      afterSubsidy5kw: afterFederalSubsidy5kw,
      roiYears: factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'fr'),
    },
    incentives: {
      title: 'Subventions pour le solaire à Fribourg',
      description: "Les propriétaires fribourgeois peuvent cumuler la rétribution unique fédérale (RU via Pronovo) avec les aides cantonales. L'investissement est intégralement déductible comme frais d'entretien immobilier.",
      programs: [
        { name: 'Rétribution unique fédérale (Pronovo)', amount: `${formatSwissNumber(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 0)} CHF par kWc`, description: 'Subvention fédérale unique pour toute installation dès 2 kWc.' },
        { name: 'Contribution cantonale Fribourg', amount: 'Selon le programme en vigueur', description: "Aide cantonale complémentaire cumulable avec la rétribution fédérale." },
        { name: 'Déductibilité fiscale', amount: '100 % des coûts', description: "Les installations solaires sont déductibles comme frais d'entretien du revenu imposable dans toutes les communes fribourgeoises, pour les bâtiments existants et non les constructions neuves; coûts éligibles après déduction des subventions." },
      ],
    },
    caseStudies: [
      {
        name: 'Famille Pythoud',
        location: 'Romont, Fribourg',
        systemSize: 'Selon le projet',
        cost: "Selon le projet",
        savings: "Selon le projet",
        payback: 'Selon le projet',
        quote: "À Romont, nos toits ont une exposition sud parfaite. PvPro.ch nous a mis en contact avec un installateur qui connaît bien les procédures fribourgeoises. L'installation a été impeccable et les aides ont allégé la facture.",
      },
    ],
    faqs: [
      { question: 'Quelles subventions pour le solaire dans le Canton de Fribourg ?', answer: 'Les coûts, la production et la rentabilité à Fribourg dépendent du bâtiment, du dimensionnement et de l’autoconsommation.' },
      { question: "Quelles sont les conditions solaires à Fribourg ?", answer: "Fribourg bénéficie d’un climat local favorable au photovoltaïque." },
      { question: 'Faut-il un permis de construire pour une installation solaire à Fribourg ?', answer: "Dans le Canton de Fribourg, une simple notification suffit pour les installations sur toiture existante hors périmètre protégé. Les autorités traitent les dossiers solaires de manière prioritaire." },
      { question: "Qu'est-ce que l'agri-PV dans le district de la Gruyère ?", answer: "L'agri-PV combine panneaux solaires et activité agricole sur le même terrain. Dans le Gruyère, des exploitations utilisent des structures en hauteur au-dessus de pâturages ou de cultures, avec des subventions pilotes spécifiques." },
      { question: 'Comment trouver un installateur solaire certifié à Fribourg ?', answer: "PvPro.ch travaille exclusivement avec des installateurs certifiés OFEN actifs dans le Canton de Fribourg. Faites une demande gratuite et recevez jusqu'à 3 offres comparatives en 48h." },
    ],
    testimonial: {
      initials: 'CP',
      name: 'Claude Pythoud',
      quote: "Fribourg est un canton où il fait bon investir dans le solaire : les démarches sont simples, les subventions réelles et les installateurs locaux compétents. En moins d'un an, mon installation est opérationnelle et déjà rentable.",
    },
  },

  // ─── BIEL/BIENNE (FR) ────────────────────────────────────────────────────────
  bienne: {
    slug: 'bienne',
    image: '/images/asset-haus-luftbild-1.webp',
    heroHeadline: 'Installation solaire à Biel/Bienne',
    heroSubheadline: "La capitale de l'horlogerie mise sur l'énergie solaire",
    heroDescription: "Biel/Bienne bénéficie d'un microclimat favorable au bord du lac de Bienne et d'une politique énergétique municipale ambitieuse. Comparez jusqu'à 3 offres d'installateurs certifiés dans le canton biennoise.",
    whySolarTitle: "Pourquoi Bienne est une ville idéale pour le solaire",
    whySolarIntro: "Ville bilingue et industrielle, Bienne allie esprit pionnier et pragmatisme énergétique – avec un microclimat particulièrement favorable à la production solaire.",
    whySolarReasons: [
      {
        title: 'Microclimat favorable au lac de Bienne',
        description: "Biel/Bienne bénéficie d’un climat local favorable au photovoltaïque.",
      },
      {
        title: 'Triple niveau de subventions',
        description: "À Bienne, vous cumulez la RU fédérale, l'aide cantonale bernoise et le fonds énergie municipal. Ces trois niveaux de soutien réduisent significativement l'investissement net.",
      },
      {
        title: "Label Cité de l'énergie",
        description: "Bienne est lauréate du label «Cité de l'énergie» pour son exemplarité en matière de gestion énergétique. Les procédures d'autorisation sont simplifiées et les délais maîtrisés.",
      },
    ],
    cityFactsTitle: "Le solaire à Bienne – particularités cantonales",
    cityFactsParagraphs: [
      "La canton biennoise a développé une véritable culture de la durabilité, ancrée dans son passé industriel et horloger. Les nouveaux quartiers comme Biel-Bözingen intègrent systématiquement des toitures solaires dans les projets de construction.",
      "Pour les bâtiments existants, les travaux de rénovation incluant une installation solaire sont facilement autorisés. La ville de Bienne dispose d'un guichet unique énergie pour accompagner les propriétaires de la demande jusqu'à la mise en service.",
    ],
    pricing: {
      min: ECONOMIC_FACTS.systemCosts.perKwp.min,
      max: ECONOMIC_FACTS.systemCosts.perKwp.max,
      typical5kw: ECONOMIC_FACTS.systemCosts.bySize[5],
      afterSubsidy5kw: afterFederalSubsidy5kw,
      roiYears: factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'fr'),
    },
    incentives: {
      title: 'Subventions pour le solaire à Biel/Bienne',
      description: "À Bienne, trois niveaux de subventions sont cumulables : fédéral, cantonal (Berne) et municipal. Un avantage unique par rapport aux autres villes romandes.",
      programs: [
        { name: 'Rétribution unique fédérale (Pronovo)', amount: `${formatSwissNumber(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 0)} CHF par kWc`, description: 'Subvention fédérale unique pour toute installation dès 2 kWc.' },
        { name: 'Canton de Berne – programme cantonal', amount: 'Selon le programme en vigueur', description: 'Contribution additionnelle du Canton de Berne, cumulable avec la RU.' },
        { name: 'Fonds énergie municipal de Bienne', amount: 'Selon le programme en vigueur', description: 'Aide directe de la Ville de Bienne pour les projets solaires dans le périmètre communal.' },
      ],
    },
    caseStudies: [
      {
        name: 'Famille Chételat',
        location: 'Bienne',
        systemSize: 'Selon le projet',
        cost: "Selon le projet",
        savings: "Selon le projet",
        payback: 'Selon le projet',
        quote: "À Bienne, les démarches ont été très rapides. PvPro.ch m'a mis en relation avec un installateur local qui connaissait parfaitement les aides disponibles. L'installation est en service depuis 6 mois et les économies sont au rendez-vous.",
      },
    ],
    faqs: [
      { question: 'Quelles subventions pour le solaire à Biel/Bienne ?', answer: 'Les coûts, la production et la rentabilité à Biel/Bienne dépendent du bâtiment, du dimensionnement et de l’autoconsommation.' },
      { question: "Quelles sont les conditions solaires à Biel/Bienne ?", answer: "Biel/Bienne bénéficie d’un climat local favorable au photovoltaïque." },
      { question: 'Faut-il un permis de construire à Bienne pour une installation solaire ?', answer: "En règle générale, une simple notification suffit pour les toitures existantes à Bienne. Le service de l'urbanisme traite les dossiers solaires en priorité dans le cadre de la politique énergie de la ville." },
      { question: "Bienne est-elle une Cité de l'énergie ?", answer: "Oui. Bienne est lauréate du label «Cité de l'énergie» pour son exemplarité en matière de politique énergétique. Cela se traduit par des procédures simplifiées et un accompagnement actif des propriétaires." },
      { question: 'Comment trouver un bon installateur solaire à Bienne ?', answer: "PvPro.ch collabore avec des installateurs certifiés actifs dans le canton biennoise. Faites une demande gratuite et recevez jusqu'à 3 offres comparatives en 48h, avec un accompagnement personnalisé." },
    ],
    testimonial: {
      initials: 'MC',
      name: 'Marc Chételat',
      quote: "Les coûts, la production et la rentabilité à Biel/Bienne dépendent du bâtiment, du dimensionnement et de l’autoconsommation.",
    },
  },

};