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
    image: '/images/asset-haus-luftbild-2.png',
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
        description: 'Mit über 1\'560 Sonnenstunden pro Jahr und den schweizweit höchsten Tarifen von Elektrizitätsgesellschaften amortisiert sich eine 5-kWp-Anlage in Zürich typischerweise in 7–9 Jahren.',
      },
      {
        title: 'Lokale Elektrizitätsgemeinschaften (LEG)',
        description: 'Ab 2026 können Zürcherinnen ihren Solarstrom direkt ans Quartier verkaufen. Netzgebühren sinken um bis zu 40% – ein enormer Zusatzvorteil im dichten Stadtgebiet.',
      },
    ],
    cityFactsTitle: 'Solar-Fakten Zürich 2026',
    cityFactsParagraphs: [
      'Zürich verzeichnet rund 1\'566 Sonnenstunden pro Jahr. Im städtischen Gebiet lohnen sich selbst Nordwest-Flächen dank hohen Eigenverbrauchsquoten.',
      'Der Kanton hat seit 2023 als erster der Deutschschweiz eine Solarpflicht eingeführt. Rund 40\'000 Dachflächen sind gemäss GIS-Auswertung sofort nachrüstbar.',
    ],
    pricing: {
      min: 9000,
      max: 28000,
      typical5kw: { min: 11000, max: 14000 },
      afterSubsidy5kw: { min: 7800, max: 10000 },
      roiYears: '7–9',
    },
    incentives: {
      title: 'Förderung Kanton Zürich 2026',
      description: 'Bund und Kanton kombiniert',
      programs: [
        { name: 'Pronovo EIV (Bund)', amount: 'bis CHF 3\'400', description: 'Einmalvergütung für 5 kWp' },
        { name: 'Kanton ZH – Zusatzbonus', amount: '+10%', description: 'Für steile oder denkmalgeschützte Flächen' },
        { name: 'Steuerabzug ZH', amount: '100%', description: 'Solaranlage vollständig als Unterhaltskosten absetzbar' },
      ],
    },
    caseStudies: [
      { name: 'Familie Meier', location: 'Schwamendingen', systemSize: '6.5 kWp', cost: 'CHF 13\'500', savings: 'CHF 2\'200/J', payback: '8 J', quote: 'Endlich ist unsere Anlage installiert – die Offerten-Vergleich via PVPro hat uns CHF 3\'000 gespart.' },
    ],
    faqs: [
      { question: 'Gilt im Kanton Zürich eine Solarpflicht?', answer: 'Ja. Seit 2023 sind Neubauten und Dachsanierungen über 300 m² im Kanton Zürich verpflichtet, eine Photovoltaikanlage zu installieren. PVPro hilft Ihnen, schnell die richtigen Fachbetriebe zu finden.' },
      { question: 'Welche Förderung erhalte ich in Zürich 2026?', answer: 'Sie erhalten die bundesweite Einmalvergütung (EIV) via Pronovo, ergänzt durch den kantonalen Steuerabzug – die Anlage ist in ZH als Liegenschaftsunterhalt zu 100% absetzbar. Das senkt die Nettokosten erheblich.' },
      { question: 'Wie hoch ist der Strompreis in Zürich, und was spare ich?', answer: 'Zürich hat mit rund 28–34 Rp./kWh einen der höchsten Strompreise der Deutschschweiz. Eine 5-kWp-Anlage erzeugt im Schnitt 5\'000 kWh/Jahr – Ersparnis: bis zu CHF 1\'700 jährlich.' },
      { question: 'Was bringen Lokale Elektrizitätsgemeinschaften (LEG) in Zürich?', answer: 'Ab 2026 dürfen Sie Ihren überschüssigen Solarstrom direkt an Nachbarn im Quartier verkaufen. Die Netzgebühren reduzieren sich um 30–40%. Besonders lohnend in dichten Zürcher Wohngebieten.' },
      { question: 'Wie lange dauert die Installation in Zürich?', answer: 'Vom Auftrag bis zur Inbetriebnahme vergehen typischerweise 6–10 Wochen. Die Bewilligung ist bei Wohnhäusern im Kanton Zürich in der Regel meldepflichtig, jedoch nicht bewilligungspflichtig.' },
    ],
    testimonial: {
      initials: 'BM',
      name: 'Beat Müller',
      quote: 'Dank PVPro habe ich drei Offerten verglichen und die beste Firma in Schwamendingen gefunden. Die Anlage läuft seit einem Jahr perfekt – die Stromrechnung ist um 70% gesunken.',
    },
  },

  // ─── BERN (DE) ───────────────────────────────────────────────────────────────
  bern: {
    slug: 'bern',
    image: '/images/asset-haus-modern-1.png',
    heroHeadline: 'Solaranlage in Bern',
    heroSubheadline: 'Die Bundesstadt macht die Energiewende vor',
    heroDescription: 'Bern hat 1\'694 Sonnenstunden pro Jahr – deutlich mehr als viele denken. Als Bundeshauptstadt setzt der Kanton mit einem starken Förderprogramm und ehrgeizigen Klimazielen ein Zeichen. Vergleichen Sie jetzt bis zu 3 Offerten.',
    whySolarTitle: 'Warum Bern beim Thema Solar vorne mitspielt',
    whySolarIntro: 'Der Kanton Bern verbindet politischen Willen mit konkreten Fördermassnahmen – und bietet Hauseigentümern hervorragende Konditionen für die eigene Solaranlage.',
    whySolarReasons: [
      {
        title: 'Starkes Kantonales Förderprogramm',
        description: 'Bern ergänzt die bundesweite EIV mit eigenen kantonalen Investitionsbeiträgen. Speicher werden separat gefördert, was die Gesamtförderung auf bis zu 35% drücken kann.',
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
      'Bern hat 1\'694 Sonnenstunden pro Jahr. Der Kanton hat sich zum Ziel gesetzt, bis 2040 bilanziell 100% erneuerbare Energie zu produzieren.',
      'Das bernische Gebäudeprogramm fördert Solaranlagen mit bis zu CHF 1\'500 zusätzlich zu den Bundesbeiträgen – kumulierbar mit der EIV.',
    ],
    pricing: {
      min: 9000,
      max: 26000,
      typical5kw: { min: 10000, max: 13000 },
      afterSubsidy5kw: { min: 7000, max: 9500 },
      roiYears: '7–9',
    },
    incentives: {
      title: 'Förderung Kanton Bern 2026',
      description: 'Bund und Kanton kumuliert',
      programs: [
        { name: 'Pronovo EIV (Bund)', amount: 'bis CHF 3\'400', description: 'Einmalvergütung 5 kWp' },
        { name: 'BE Gebäudeprogramm', amount: 'bis CHF 1\'500', description: 'Kantonaler Investitionsbeitrag' },
        { name: 'Steuerabzug BE', amount: '100%', description: 'Anlagekosten als Unterhalt absetzbar' },
      ],
    },
    caseStudies: [
      { name: 'Familie Wassmer', location: 'Köniz', systemSize: '7 kWp', cost: 'CHF 12\'800', savings: 'CHF 2\'100/J', payback: '8 J', quote: 'PVPro hat uns die ganze Bürokratie abgenommen – von der Förderung bis zum Installateurvergleich.' },
    ],
    faqs: [
      { question: 'Welche kantonalen Förderungen gibt es in Bern 2026?', answer: 'Neben der bundesweiten Einmalvergütung (EIV) bietet das Kantonale Gebäudeprogramm Bern bis zu CHF 1\'500 Zusatzbeitrag. Batteriespeicher können separat mit bis zu CHF 800 gefördert werden.' },
      { question: 'Lohnt sich Solar in Bern auch im Winter?', answer: 'Ja. Mit 1\'694 Sonnenstunden und modernen bifazialen Modulen produzieren Berner Anlagen auch im Winter sinnvoll Strom. Besonders Anlagen auf steilen Süddächern profitieren vom Winterstrombonus.' },
      { question: 'Gilt im Kanton Bern eine Solarpflicht?', answer: 'Bern plant eine Solarpflicht für Neubauten ab 2026. Für bestehende Gebäude gibt es noch keine Pflicht, aber bei Dachsanierungen wird der Einbau von Solarmodulen mit Fördermitteln attraktiv incentiviert.' },
      { question: 'Wie finde ich einen seriösen Solarinstallateur in Bern?', answer: 'PVPro arbeitet ausschliesslich mit geprüften Fachbetrieben zusammen, die Qualitätsnachweise und lokale Referenzen haben. Über unser Vergleichssystem erhalten Sie bis zu 3 Offerten aus der Region.' },
      { question: 'Was kostet eine Solaranlage in Bern wirklich?', answer: 'Eine typische 5-kWp-Anlage kostet in Bern zwischen CHF 10\'000 und CHF 13\'000. Nach EIV und kantonalem Beitrag reduziert sich die Nettobelastung auf CHF 7\'000–9\'500 – mit Steuerabzug noch weniger.' },
    ],
    testimonial: {
      initials: 'KW',
      name: 'Katharina Wenger',
      quote: 'Ich war skeptisch, ob sich Solar in Bern lohnt. Der PVPro-Offerten-Vergleich hat mich überzeugt: Drei Angebote, ein klarer Sieger, und heute produziere ich mehr als ich verbrauche.',
    },
  },

  // ─── BASEL (DE) ──────────────────────────────────────────────────────────────
  basel: {
    slug: 'basel',
    image: '/images/asset-panel-closeup-1.png',
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
        title: '1\'631 Sonnenstunden – plus Rheintal-Effekt',
        description: 'Das Rheintal erzeugt einen lokalen Wärmeinseleffekt, der die effektiven Solarerträge über dem Landesdurchschnitt hält. Besonders Flachdächer auf Industriegebäuden sind hochprofitabel.',
      },
      {
        title: 'Kantonales Solarkataster',
        description: 'Basel-Stadt bietet ein öffentliches Solarkataster, das die Eignung jedes Daches sofort sichtbar macht. Über 85% der Basler Dächer sind für Photovoltaik geeignet.',
      },
    ],
    cityFactsTitle: 'Solar-Fakten Basel 2026',
    cityFactsParagraphs: [
      'Basel-Stadt hat die dichteste Solardachbelegung pro Einwohner unter allen Schweizer Städten über 100\'000 Einwohner.',
      'Der Kanton BS fördert Solaranlagen mit kommunalen Beiträgen, die mit der EIV kumulierbar sind.',
    ],
    pricing: {
      min: 9000,
      max: 26000,
      typical5kw: { min: 10000, max: 13500 },
      afterSubsidy5kw: { min: 7000, max: 9500 },
      roiYears: '7–9',
    },
    incentives: {
      title: 'Förderung Basel-Stadt / Basel-Landschaft 2026',
      description: 'Städtische und kantonale Beiträge',
      programs: [
        { name: 'Pronovo EIV (Bund)', amount: 'bis CHF 3\'400', description: 'Einmalvergütung 5 kWp' },
        { name: 'BS Stadtförderung', amount: 'bis CHF 2\'000', description: 'Kommunaler Zusatzbeitrag' },
        { name: 'Steuerabzug BS/BL', amount: '100%', description: 'Vollständig als Liegenschaftsunterhalt absetzbar' },
      ],
    },
    caseStudies: [
      { name: 'T. Brunner', location: 'Riehen', systemSize: '5.5 kWp', cost: 'CHF 11\'500', savings: 'CHF 1\'900/J', payback: '8 J', quote: 'Die städtische Förderung hat den Unterschied gemacht. PVPro hat mir die drei besten Installateure direkt in Riehen gezeigt.' },
    ],
    faqs: [
      { question: 'Gibt es in Basel-Stadt spezielle Stadtförderungen für Solar?', answer: 'Ja. Basel-Stadt bietet neben der EIV des Bundes kommunale Förderbeiträge bis CHF 2\'000 für neue Photovoltaikanlagen. Diese sind nicht antragspflichtig, sondern werden nach Installation gemeldet.' },
      { question: 'Kann ich auf einem Basler Flachdach eine Solaranlage installieren?', answer: 'Absolut. Flachdächer sind in Basel besonders verbreitet und lassen sich mit aufgeständerten Modulen optimal nach Süden ausrichten. Für Flachdächer gelten reduzierte Bewilligungsanforderungen in BS.' },
      { question: 'Wie lange dauert die Baubewilligung in Basel?', answer: 'Bei normalen Wohngebäuden ist die Solaranlage in Basel-Stadt meldepflichtig, aber in der Regel nicht bewilligungspflichtig. Der Prozess dauert meist weniger als 4 Wochen.' },
      { question: 'Was gilt für denkmalgeschützte Bauten in Basel?', answer: 'Basel hat viele historische Gebäude. Für solche Liegenschaften sind Sonderabklärungen nötig. Unsere Partnerinstallateure kennen die lokalen Anforderungen und können auch Indachlösungen anbieten.' },
      { question: 'Lohnt sich ein Batteriespeicher in Basel?', answer: 'In Basel, mit relativ hohen Strompreisen und einem aktiven Strommarkt, rechnet sich ein Heimspeicher innerhalb von 9–12 Jahren. Er ist im Kanton BS als Liegenschaftsunterhalt steuerlich absetzbar.' },
    ],
    testimonial: {
      initials: 'TB',
      name: 'Thomas Brunner',
      quote: 'Ich dachte, in der Stadt gibt es wenig Möglichkeiten. Aber das Solarkataster hat gezeigt: mein Dach in Riehen ist top geeignet. PVPro hat mir in zwei Tagen drei Offerten geliefert.',
    },
  },

  // ─── LUZERN (DE) ─────────────────────────────────────────────────────────────
  luzern: {
    slug: 'luzern',
    image: '/images/asset-haus-alpen-1.png',
    heroHeadline: 'Solaranlage in Luzern',
    heroSubheadline: 'Zentralschweizer Nachhaltigkeit – von Tourismus bis Eigenheim',
    heroDescription: 'Luzern kombiniert malerische Landschaft mit handfesten Solarvorteilen: 1\'598 Sonnenstunden, ein starkes kantonales Förderprogramm und lokale Installateure, die alpine Bedingungen kennen. Holen Sie jetzt Ihre kostenlose Vergleichsofferte.',
    whySolarTitle: 'Warum Luzern auf Solar setzt',
    whySolarIntro: 'Von der Seepromenade bis zu den Voralpentälern: Luzerner Hausbesitzer profitieren von idealen Dachflächen und dem Bekenntnis des Kantons zur Energiewende.',
    whySolarReasons: [
      {
        title: 'Vierwaldstättersee-Mikroklima',
        description: 'Der Vierwaldstättersee erzeugt ein milderes Mikroklima in der Region Luzern. Geringere Nebelbildung und mehr direkte Sonneneinstrahlung als in manchen Nachbarkantonen steigern die Jahresproduktion.',
      },
      {
        title: 'Tourismus-Image als Treiber',
        description: 'Luzern ist eine der meistbesuchten Städte der Schweiz. Nachhaltigkeit und Solarenergie stärken das Image – Hauseigentümer in Tourismusregionen profitieren auch von wertvermehrenden Wirkungen.',
      },
      {
        title: 'Kantonales Förderprogramm LU',
        description: 'Der Kanton Luzern ergänzt die Bundesförderung mit eigenen Beiträgen für Photovoltaikanlagen und Speicher. Für Anlagen ab 10 kWp gibt es zusätzliche Investitionsbeiträge.',
      },
    ],
    cityFactsTitle: 'Solar-Fakten Luzern 2026',
    cityFactsParagraphs: [
      'Luzern verzeichnet 1\'598 Sonnenstunden pro Jahr. Besonders die Seegemeinden zwischen Luzern und Küssnacht zeigen sehr gute Einstrahlungswerte.',
    ],
    pricing: {
      min: 9000,
      max: 25000,
      typical5kw: { min: 10000, max: 13000 },
      afterSubsidy5kw: { min: 7000, max: 9000 },
      roiYears: '8–10',
    },
    incentives: {
      title: 'Förderung Kanton Luzern 2026',
      description: 'Bund und Kanton kombiniert',
      programs: [
        { name: 'Pronovo EIV (Bund)', amount: 'bis CHF 3\'400', description: 'Einmalvergütung 5 kWp' },
        { name: 'Kanton LU Gebäudeprogramm', amount: 'bis CHF 1\'200', description: 'Kantonaler Zusatzbeitrag PV' },
        { name: 'Steuerabzug LU', amount: '100%', description: 'Anlagekosten absetzbar' },
      ],
    },
    caseStudies: [
      { name: 'H. Furrer', location: 'Littau', systemSize: '8 kWp', cost: 'CHF 14\'000', savings: 'CHF 2\'400/J', payback: '9 J', quote: 'Luzerner Installateure kennen unsere Dächer. PVPro hat mir in einer Woche drei Offerten vom Fachmann gebracht.' },
    ],
    faqs: [
      { question: 'Wie viel Sonne scheint in Luzern wirklich?', answer: 'Luzern verzeichnet im Jahresmittel 1\'598 Sonnenstunden. Das liegt im soliden Mittelfeld der Schweiz. Eine typische 5-kWp-Anlage produziert in der Region Luzern rund 4\'800–5\'200 kWh pro Jahr.' },
      { question: 'Welche Förderungen gelten im Kanton Luzern?', answer: 'Hauseigentümer in Luzern erhalten die bundesweite Einmalvergütung (EIV) via Pronovo sowie einen kantonalen Zusatzbeitrag aus dem Gebäudeprogramm. Ergänzend ist die Anlage als Liegenschaftsunterhalt absetzbar.' },
      { question: 'Gibt es Spezialanforderungen für Solarprojekte in Alpengemeinden?', answer: 'Ja. In einigen Voralpengemeinden im Kanton Luzern gelten spezifische Auflagen zum Schutz des Landschaftsbildes. Unsere Partnerinstallateure kennen diese Vorschriften genau und planen Ihr Projekt entsprechend.' },
      { question: 'Wie sinnvoll ist ein Batteriespeicher in Luzern?', answer: 'Mit einem Heimspeicher erhöhen Sie Ihren Eigenverbrauch von typisch 30% auf bis zu 70%. In Luzern mit mittelhohen Strompreisen rechnet sich ein Speicher in ca. 10–12 Jahren.' },
      { question: 'Können auch Ferienhäuser am Vierwaldstättersee Solar erhalten?', answer: 'Ja, sofern das Ferienhaus dauerhaft bewohnt wird oder ein Netzanschluss besteht. Die Einspeisung des überschüssigen Stroms ist auch bei Ferienhäusern möglich und gefördert.' },
    ],
    testimonial: {
      initials: 'HF',
      name: 'Hans-Peter Furrer',
      quote: 'Als Luzerner dachte ich, mein Alpendach sei zu kompliziert. Pustekuchen – der PVPro-Installateur kannte genau die lokalen Regeln und hatte die Anlage in zwei Tagen montiert.',
    },
  },

  // ─── THURGAU (DE) ────────────────────────────────────────────────────────────
  thurgau: {
    slug: 'thurgau',
    image: '/images/asset-installateur-dach-3.png',
    heroHeadline: 'Solaranlage im Thurgau',
    heroSubheadline: 'Landwirtschaft trifft Solarenergie am Bodensee',
    heroDescription: 'Der Thurgau ist der Kanton der grossen Dachflächen: Landwirtschaftsbetriebe, Einfamilienhäuser und Gewerbegebäude bieten ideale Voraussetzungen für Solaranlagen. Mit dem Bodensee-Mikroklima und 1\'566 Sonnenstunden lohnt sich die Investition.',
    whySolarTitle: 'Warum der Thurgau beim Solar vorne liegt',
    whySolarIntro: 'Nirgendwo gibt es mehr geeignete Dachflächen pro Einwohner als im Thurgau. Bauernhöfe, Lagerhallen und Einfamilienhäuser sind ideale Träger für leistungsstarke Anlagen.',
    whySolarReasons: [
      {
        title: 'Landwirtschaft als Solar-Motor',
        description: 'Thurgauer Landwirtschaftsbetriebe installieren zunehmend Agri-Photovoltaik auf Scheunen und Ställen. Grosse Dachflächen erlauben Anlagen von 20–50 kWp mit attraktivem ROI.',
      },
      {
        title: 'Bodensee-Klimavorteil',
        description: 'Die Nähe zum Bodensee sorgt für ein mildes Klima mit weniger Frost und mehr Sonnentagen als in vielen Mittellandregionen. Solaranlagen profitieren von reduzierten Leistungseinbussen im Winter.',
      },
      {
        title: 'Günstigere Installationskosten',
        description: 'Im ländlichen Thurgau sind die Handwerkerkosten tiefer als in städtischen Kantonen. Eine 5-kWp-Anlage ist hier im Schnitt CHF 1\'000–2\'000 günstiger als in Zürich oder Basel.',
      },
    ],
    cityFactsTitle: 'Solar-Fakten Thurgau 2026',
    cityFactsParagraphs: [
      'Der Thurgau hat die höchste Dichte an landwirtschaftlichen Solaranlagen der Schweiz. Das kantonale Energieprogramm fördert Agri-PV besonders.',
    ],
    pricing: {
      min: 8000,
      max: 22000,
      typical5kw: { min: 9000, max: 12000 },
      afterSubsidy5kw: { min: 6300, max: 8500 },
      roiYears: '7–9',
    },
    incentives: {
      title: 'Förderung Kanton Thurgau 2026',
      description: 'Attraktive Kombination für ländliche Betriebe',
      programs: [
        { name: 'Pronovo EIV (Bund)', amount: 'bis CHF 3\'400', description: 'Einmalvergütung 5 kWp' },
        { name: 'TG Energieprogramm', amount: 'bis CHF 1\'000', description: 'Kantonaler Förderbeitrag PV' },
        { name: 'Agri-PV Bonus', amount: 'bis CHF 500/kWp', description: 'Zusatzförderung für Landwirtschaftsbetriebe' },
      ],
    },
    caseStudies: [
      { name: 'W. Keller', location: 'Weinfelden', systemSize: '10 kWp', cost: 'CHF 17\'000', savings: 'CHF 2\'800/J', payback: '8 J', quote: 'Auf meiner Scheune produziere ich jetzt mehr Strom als mein Betrieb verbraucht. PVPro hat mir genau den richtigen Spezialisten für landwirtschaftliche Anlagen vermittelt.' },
    ],
    faqs: [
      { question: 'Lohnt sich Solar für einen Thurgauer Landwirtschaftsbetrieb?', answer: 'Absolut. Grosse Dachflächen, günstigere Installationskosten und der Agri-PV-Bonus des Kantons machen landwirtschaftliche Solaranlagen im Thurgau besonders rentabel. ROI oft unter 7 Jahren.' },
      { question: 'Welche Förderung gibt es im Thurgau 2026?', answer: 'Neben der Bundesförderung (EIV) bietet der Kanton Thurgau Kantonsbeiträge und einen speziellen Agri-PV-Bonus für Landwirtschaftsbetriebe. Alle Beiträge sind kumulierbar.' },
      { question: 'Wie hoch ist der Eigenverbrauch auf einem Bauernhof?', answer: 'Landwirtschaftsbetriebe haben oft einen hohen Eigenverbrauch durch Kühlung, Beleuchtung und Geräte. Mit einer passend dimensionierten Anlage können viele Höfe 60–80% ihres Stroms selbst decken.' },
      { question: 'Brauche ich im Thurgau eine Baubewilligung für Solar?', answer: 'In den meisten Fällen ist eine Solaranlage im Kanton Thurgau meldepflichtig, aber nicht bewilligungspflichtig. Ausnahmen gelten für denkmalgeschützte Gebäude und bestimmte Schutzzonen.' },
      { question: 'Kann ich meinen Solarstrom im Thurgau direkt an Nachbarn verkaufen?', answer: 'Ja, ab 2026 sind Lokale Elektrizitätsgemeinschaften (LEG) auch im Thurgau möglich. Besonders in Weinfelden und Kreuzlingen entstehen erste Quartiersnetzwerke.' },
    ],
    testimonial: {
      initials: 'WK',
      name: 'Werner Keller',
      quote: 'Mein Thurgauer Hof hat seit letztem Jahr eine 10-kWp-Anlage auf der Scheune. Ich speise sogar noch ins Netz ein. PVPro hat mir genau den richtigen Agri-PV-Spezialisten gefunden.',
    },
  },

  // ─── ST. GALLEN (DE) ─────────────────────────────────────────────────────────
  'st-gallen': {
    slug: 'st-gallen',
    image: '/images/asset-installateur-dach-4.png',
    heroHeadline: 'Solaranlage in St. Gallen',
    heroSubheadline: 'Ostschweiz nutzt jede Sonnenstunde optimal',
    heroDescription: 'St. Gallen hat mit 1\'522 Stunden die tiefsten Sonnenstunden unter den Deutschschweizer Kantonen – und trotzdem rechnen sich Solaranlagen. Denn was an direkter Sonne fehlt, kompensiert die exzellente Bundesförderung. Holen Sie jetzt 3 Vergleichsofferten.',
    whySolarTitle: 'Warum Solar in St. Gallen trotzdem top ist',
    whySolarIntro: 'Weniger Sonne bedeutet nicht weniger Rentabilität: Moderne Module und die volle Bundesförderung machen St. Gallen zu einem soliden Solar-Standort.',
    whySolarReasons: [
      {
        title: 'Moderne Module für jeden Himmel',
        description: 'Neueste Halbzellen- und Tandem-Module produzieren auch bei bedecktem Himmel effizient Strom. Diffuses Licht, wie es in der Ostschweiz häufig vorkommt, wird von modernen Panels optimal genutzt.',
      },
      {
        title: 'Universität St. Gallen – Nachhaltigkeitspionier',
        description: 'Die HSG und ihre Unternehmensnetzwerke treiben die Nachhaltigkeitsagenda voran. Solarprojekte in der Region profitieren von gutem Know-how und wachsender regionaler Lieferkette.',
      },
      {
        title: 'Appenzellerland und Rheintal: zwei Klimazonen',
        description: 'Das Rheintal von Altstätten bis Rorschach hat deutlich mehr Sonne als das Hinterland. Hauseigentümer im Rheintal profitieren von Erträgen auf Niveau der Westschweiz.',
      },
    ],
    cityFactsTitle: 'Solar-Fakten St. Gallen 2026',
    cityFactsParagraphs: [
      'Im Rheintal (SG) liegen die effektiven Sonnenstunden um 10–15% höher als im Kantonsmittel. Besonders Rorschach und Altstätten haben optimale Bedingungen.',
    ],
    pricing: {
      min: 8500,
      max: 23000,
      typical5kw: { min: 9500, max: 12500 },
      afterSubsidy5kw: { min: 6500, max: 9000 },
      roiYears: '8–11',
    },
    incentives: {
      title: 'Förderung Kanton St. Gallen 2026',
      description: 'Bund und regionale Programme',
      programs: [
        { name: 'Pronovo EIV (Bund)', amount: 'bis CHF 3\'400', description: 'Einmalvergütung 5 kWp' },
        { name: 'SG Förderprogramm', amount: 'bis CHF 900', description: 'Kantonaler Investitionsbeitrag' },
        { name: 'Steuerabzug SG', amount: '100%', description: 'Vollständig absetzbar' },
      ],
    },
    caseStudies: [
      { name: 'M. Hartmann', location: 'Gossau', systemSize: '6 kWp', cost: 'CHF 11\'500', savings: 'CHF 1\'700/J', payback: '10 J', quote: 'Ich war unsicher wegen des Klimas in St. Gallen. PVPro hat mir erklärt, dass moderne Module auch bei grauem Himmel gut funktionieren.' },
    ],
    faqs: [
      { question: 'Lohnt sich Solar wirklich in St. Gallen mit weniger Sonne?', answer: 'Ja. Moderne Halbzellenmodule produzieren auch bei diffusem Licht effizient. Zudem sind Bundesförderung und Steuerabzug unabhängig von der Sonnenscheindauer – die Wirtschaftlichkeit ist in SG trotzdem gut.' },
      { question: 'Welche Unterschiede gibt es zwischen dem Rheintal und dem Hinterland?', answer: 'Das Rheintal (Rorschach, Altstätten) hat 10–15% mehr Sonneneinstrahlung als das Appenzellerland. Wenn Sie im Rheintal wohnen, liegen Ihre Erträge auf Niveau anderer Schweizer Mittellandkantone.' },
      { question: 'Welche Förderungen gelten im Kanton St. Gallen?', answer: 'Neben der nationalen EIV bietet der Kanton St. Gallen einen eigenen Förderbeitrag. Kombiniert mit dem vollständigen Steuerabzug als Liegenschaftsunterhalt ist die effektive Investitionskosten-Reduktion erheblich.' },
      { question: 'Gibt es in St. Gallen genügend qualifizierte Installateure?', answer: 'Ja. PVPro arbeitet mit zertifizierten Fachbetrieben in der gesamten Ostschweiz zusammen. Ob in der Stadt St. Gallen, im Rheintal oder im Toggenburg – wir vermitteln lokale Experten.' },
      { question: 'Wie hoch ist die Einspeisevergütung in St. Gallen?', answer: 'Die Einspeisevergütung richtet sich nach dem jeweiligen Netzbetreiber. In SG sind es typisch 8–12 Rp./kWh für den eingespeisten Überschuss. Eigenverbrauch rechnet sich mit 28–32 Rp./kWh immer besser.' },
    ],
    testimonial: {
      initials: 'MH',
      name: 'Markus Hartmann',
      quote: 'In Gossau dachte ich, Solar lohne sich nicht. Doch nach dem PVPro-Vergleich war ich überrascht: drei gute Angebote, ein fairer Preis, und jetzt spare ich jeden Monat auf der Stromrechnung.',
    },
  },

  // ─── SCHWYZ (DE) ─────────────────────────────────────────────────────────────
  schwyz: {
    slug: 'schwyz',
    image: '/images/asset-haus-alpen-2.png',
    heroHeadline: 'Solaranlage Schwyz',
    heroSubheadline: 'Wo die Schweiz begann, startet die Energiewende',
    heroDescription: 'Der Urkanton Schwyz schreibt Geschichte – jetzt auch in der Energieproduktion. Mit 1\'694 Sonnenstunden und einer Kultur der Unabhängigkeit ist Solar für Schwyzer Hauseigentümer nicht nur Ökologie, sondern auch eine Frage der Selbstbestimmung.',
    whySolarTitle: 'Schwyz: Energiepolitische Unabhängigkeit als Tradition',
    whySolarIntro: 'Im Kanton der Eidgenossenschaft bedeutet Solarenergie mehr als Ökostrom – es ist der nächste Schritt zur Selbstversorgung und Unabhängigkeit von steigenden Energiepreisen.',
    whySolarReasons: [
      {
        title: '1\'694 Sonnenstunden – Bestmarke für die Innerschweiz',
        description: 'Schwyz liegt bei den Sonnenstunden über dem Schweizer Durchschnitt. Besonders das Muota- und Schwyzertal sowie die Rigi-Nordseite bieten hervorragende Südexpositionen.',
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
      min: 9000,
      max: 25000,
      typical5kw: { min: 10000, max: 13000 },
      afterSubsidy5kw: { min: 7000, max: 9000 },
      roiYears: '7–9',
    },
    incentives: {
      title: 'Förderung Kanton Schwyz 2026',
      description: 'Bund und Kanton',
      programs: [
        { name: 'Pronovo EIV (Bund)', amount: 'bis CHF 3\'400', description: 'Einmalvergütung 5 kWp' },
        { name: 'SZ Förderbeitrag', amount: 'bis CHF 800', description: 'Kantonaler Beitrag' },
        { name: 'Steuerabzug SZ', amount: '100%', description: 'Vorteilhaft wegen tiefer Steuern' },
      ],
    },
    caseStudies: [
      { name: 'J. Marty', location: 'Brunnen', systemSize: '7.5 kWp', cost: 'CHF 13\'500', savings: 'CHF 2\'200/J', payback: '8 J', quote: 'Im Kanton Schwyz legen wir Wert auf Selbstständigkeit. Mit Solar bin ich jetzt auch beim Strom unabhängiger.' },
    ],
    faqs: [
      { question: 'Wie viel Sonne scheint im Kanton Schwyz?', answer: 'Schwyz verzeichnet im Schnitt 1\'694 Sonnenstunden pro Jahr – mehr als viele vermuten. Das ist mehr als Zürich oder St. Gallen und entspricht fast dem Schweizer Idealwert.' },
      { question: 'Welche Förderungen gibt es im Kanton Schwyz?', answer: 'Sie erhalten die EIV des Bundes sowie einen kantonalen Zusatzbeitrag. Dank der tiefen Schwyzer Steuern ist der Steuerabzug für die Solaranlage als Liegenschaftsunterhalt besonders wertvoll.' },
      { question: 'Gibt es Spezialregeln für Berggebiete in Schwyz?', answer: 'Für Gebäude in Schutzzonen oder Ortskerngebieten gelten spezifische Auflagen. Unsere Partnerinstallateure kennen die Gemeinderegelungen in Schwyz, Küssnacht, Einsiedeln und Arth.' },
      { question: 'Wie gross sollte meine Anlage in Schwyz sein?', answer: 'Für ein typisches Einfamilienhaus mit 4 Personen empfehlen sich 5–7 kWp. Mit Wärmepumpe oder Elektroauto lohnt sich eine grössere Anlage von 8–12 kWp deutlich mehr.' },
      { question: 'Kann ich Solarstrom in Schwyz an Nachbarn verkaufen?', answer: 'Ab 2026 sind Lokale Elektrizitätsgemeinschaften (LEG) gesetzlich möglich. Besonders in kleineren Schwyzer Gemeinden entstehen erste Pilotprojekte, die den Eigenverbrauch im Quartier optimieren.' },
    ],
    testimonial: {
      initials: 'JM',
      name: 'Josef Marty',
      quote: 'Als Schwyzer schätze ich Unabhängigkeit. Mit der Solaranlage auf meinem Haus in Brunnen bin ich jetzt auch beim Strom nicht mehr auf externe Anbieter angewiesen. PVPro hat mir den besten Installateur vermittelt.',
    },
  },

  // ─── URI (DE) ────────────────────────────────────────────────────────────────
  uri: {
    slug: 'uri',
    image: '/images/asset-haus-alpen-3.png',
    heroHeadline: 'Solaranlage Uri',
    heroSubheadline: 'Netzunabhängigkeit im Gotthardkanton',
    heroDescription: 'Uri ist klein, aber energiepolitisch bedeutsam: Der Gotthardkanton hat 1\'694 Sonnenstunden und viele Gebäude an Südhängen – ideal für Solar. Dazu kommt die Idee der Selbstversorgung, die in Uri tief verwurzelt ist.',
    whySolarTitle: 'Uri: Alpine Selbstversorgung mit Solarstrom',
    whySolarIntro: 'In einem Kanton, der historisch immer für seine Unabhängigkeit stand, ist die Eigenproduktion von Solarstrom der logische nächste Schritt.',
    whySolarReasons: [
      {
        title: 'Südhänge mit Maximalertrag',
        description: 'Das Urner Reusstal und die Seitentäler bieten zahlreiche Gebäude an Süd- und Südwestlagen. Diese Expositionen maximieren den Jahresertrag und verkürzen die Amortisationszeit.',
      },
      {
        title: 'Höhenlage steigert die Einstrahlung',
        description: 'In höheren Lagen des Kantons Uri ist die Sonneneinstrahlung 5–10% höher als im Mittelland, weil weniger atmosphärische Absorption stattfindet. Das erhöht den Jahresertrag der Anlage.',
      },
      {
        title: 'Gotthard-Energie: Regional denken',
        description: 'Uri hat eine starke Tradition im Umgang mit Energie (Strom aus Gotthard-Wasserkraft). Photovoltaik ergänzt dies ideal – überschüssiger Solarstrom wird ins lokale Netz eingespeist.',
      },
    ],
    cityFactsTitle: 'Solar-Fakten Uri 2026',
    cityFactsParagraphs: [
      'Uri verzeichnet 1\'694 Sonnenstunden pro Jahr. Bergnahe Lagen können durch reduzierte Luftmasse effektiv bis zu 10% mehr Einstrahlung erhalten.',
    ],
    pricing: {
      min: 8500,
      max: 23000,
      typical5kw: { min: 9500, max: 12500 },
      afterSubsidy5kw: { min: 6500, max: 8800 },
      roiYears: '8–10',
    },
    incentives: {
      title: 'Förderung Kanton Uri 2026',
      description: 'Bund und kleine Kantone',
      programs: [
        { name: 'Pronovo EIV (Bund)', amount: 'bis CHF 3\'400', description: 'Einmalvergütung 5 kWp' },
        { name: 'UR Kantonsbeitrag', amount: 'bis CHF 700', description: 'Kantonaler Zusatzbeitrag' },
        { name: 'Steuerabzug UR', amount: '100%', description: 'Anlagekosten absetzbar' },
      ],
    },
    caseStudies: [
      { name: 'R. Arnold', location: 'Altdorf', systemSize: '6 kWp', cost: 'CHF 11\'000', savings: 'CHF 1\'800/J', payback: '9 J', quote: 'In Uri sind wir es gewohnt, auf uns selbst zu zählen. Mit Solar gilt das jetzt auch für Strom.' },
    ],
    faqs: [
      { question: 'Lohnt sich Solar in den Urner Bergen wirklich?', answer: 'Ja. Gebäude an Südhängen im Urner Reusstal und in Seitentälern erzielen teils bessere Erträge als im Mittelland. Die Bundesförderung gilt unabhängig vom Kanton.' },
      { question: 'Welche Förderungen gibt es im Kanton Uri?', answer: 'Neben der EIV des Bundes bietet Uri eigene kantonale Beiträge. Ergänzend ist die Anlage als Liegenschaftsunterhalt steuerlich absetzbar.' },
      { question: 'Gibt es genug Solarinstallateure in Uri?', answer: 'PVPro arbeitet mit zertifizierten Betrieben aus der gesamten Innerschweiz zusammen, die auch Projekte in Uri regelmässig ausführen. Die Anreise ist für unsere Partner kein Problem.' },
      { question: 'Was passiert mit dem Strom, wenn ich nicht zuhause bin?', answer: 'Nicht selbst verbrauchter Strom wird automatisch ins lokale Netz eingespeist, und Sie erhalten eine Vergütung vom Netzbetreiber (typisch 8–14 Rp./kWh). Ein Heimspeicher erhöht den Eigenverbrauch.' },
      { question: 'Kann ich in Uri auch als Mietpartei Solar nutzen?', answer: 'Mieter können über Modelle wie Mietersolaranlagen oder LEG-Gemeinschaften teilnehmen. In kleinen Urner Gemeinden sind solche Gemeinschaftslösungen besonders attraktiv.' },
    ],
    testimonial: {
      initials: 'RA',
      name: 'Ruth Arnold',
      quote: 'Unser Haus in Altdorf steht an einem Südhang – ideale Bedingungen. PVPro hat mir innerhalb einer Woche zwei Angebote gebracht, wir haben das beste genommen. Jetzt produzieren wir mehr als wir verbrauchen.',
    },
  },

  // ─── SCHAFFHAUSEN (DE) ───────────────────────────────────────────────────────
  schaffhausen: {
    slug: 'schaffhausen',
    image: '/images/asset-panel-closeup-3.png',
    heroHeadline: 'Solaranlage Schaffhausen',
    heroSubheadline: 'Nördlichster Kanton setzt auf Solarstrom am Rhein',
    heroDescription: 'Schaffhausen am Rhein – nördlichster Schweizer Kanton und Heimat des grössten Wasserfalls Europas – hat 1\'644 Sonnenstunden pro Jahr. Starke Industrie, Weinbau und Einfamilienhäuser machen Solar im Kanton zu einer lohnenden Investition.',
    whySolarTitle: 'Warum Schaffhausen beim Solar punktet',
    whySolarIntro: 'Trotz nördlicher Lage bietet Schaffhausen solide Sonnenstunden und profitiert von der deutschen Grenze sowie einem starken Industriestandort, der auf Solarstrom umstellt.',
    whySolarReasons: [
      {
        title: 'Rheintal-Sonnenbonus',
        description: 'Das Rheintal von Schaffhausen bis zur deutschen Grenze geniesst ein kontinentales Klima mit mehr Sonnenstunden als das Schweizer Mittelland. Lokale Messungen zeigen bis zu 1\'680 h/Jahr in der Stadtregion.',
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
      'Schaffhausen liegt klimatisch zwischen Mittelland und süddeutschem Raum. Die effektive Jahreseinstrahlung beträgt ca. 1\'200–1\'250 kWh/m², was solide Erträge ermöglicht.',
    ],
    pricing: {
      min: 9000,
      max: 24000,
      typical5kw: { min: 10000, max: 13000 },
      afterSubsidy5kw: { min: 7000, max: 9000 },
      roiYears: '7–9',
    },
    incentives: {
      title: 'Förderung Kanton Schaffhausen 2026',
      description: 'Bund und Kanton',
      programs: [
        { name: 'Pronovo EIV (Bund)', amount: 'bis CHF 3\'400', description: 'Einmalvergütung 5 kWp' },
        { name: 'SH Förderbeitrag', amount: 'bis CHF 1\'000', description: 'Kantonaler Investitionsbeitrag' },
        { name: 'Steuerabzug SH', amount: '100%', description: 'Anlagekosten absetzbar' },
      ],
    },
    caseStudies: [
      { name: 'C. Nägeli', location: 'Neuhausen am Rheinfall', systemSize: '5.5 kWp', cost: 'CHF 11\'000', savings: 'CHF 1\'850/J', payback: '8 J', quote: 'Der Rheinfall macht Strom – jetzt mache ich es auch. PVPro hat mir drei lokale Angebote in einer Woche gebracht.' },
    ],
    faqs: [
      { question: 'Wie viel Sonne gibt es in Schaffhausen pro Jahr?', answer: 'Schaffhausen hat im Jahresmittel rund 1\'644 Sonnenstunden. Die Stadtregion und das Rheintal haben oft mehr. Eine 5-kWp-Anlage produziert dort typischerweise 5\'000–5\'400 kWh/Jahr.' },
      { question: 'Gibt es Förderung im Kanton Schaffhausen?', answer: 'Ja. Neben der EIV des Bundes bietet der Kanton Schaffhausen eigene Förderbeiträge. Die Anlage ist zusätzlich als Liegenschaftsunterhalt steuerlich absetzbar.' },
      { question: 'Können Schaffhauser Weinbauern Solar nutzen?', answer: 'Agri-PV für Reben und Obstgärten wird in Schaffhausen zunehmend beliebt. Überdachungsstrukturen schützen die Kulturen und produzieren Strom. Spezialförderung für Agri-PV ist verfügbar.' },
      { question: 'Welche Bewilligungen brauche ich in Schaffhausen?', answer: 'Im Kanton Schaffhausen ist eine Photovoltaikanlage an normalen Gebäuden meldepflichtig, aber nicht bewilligungspflichtig. In Schutzzonen gelten besondere Regeln.' },
      { question: 'Lohnt sich ein Batteriespeicher in Schaffhausen?', answer: 'Mit einem Heimspeicher erhöhen Sie den Eigenverbrauch auf bis zu 70%. Angesichts steigender Strompreise im Kanton Schaffhausen rechnet sich ein Speicher in 9–11 Jahren.' },
    ],
    testimonial: {
      initials: 'CN',
      name: 'Claudia Nägeli',
      quote: 'Wir wohnen mit Blick auf den Rheinfall – und jetzt produzieren wir selbst Energie. PVPro war schnell, unkompliziert und hat uns wirklich gute Angebote von lokalen Betrieben vermittelt.',
    },
  },

  // ─── APPENZELL (DE) ──────────────────────────────────────────────────────────
  appenzell: {
    slug: 'appenzell',
    image: '/images/asset-installateur-dach-1.png',
    heroHeadline: 'Solaranlage Appenzell',
    heroSubheadline: 'Traditionsbewusstsein trifft moderne Energie',
    heroDescription: 'Appenzell Innerrhoden und Ausserrhoden stehen für Tradition und Bodenständigkeit – und genau diese Qualitäten machen Solar so attraktiv: zuverlässig, langlebig und unabhängig von Energielieferanten. 1\'720 Sonnenstunden Jahr für Jahr.',
    whySolarTitle: 'Warum Appenzell und Solar perfekt zusammenpassen',
    whySolarIntro: 'Die sanften Hügel Appenzells mit ihren weitflächigen, nach Süden geneigten Dächern sind wie geschaffen für Photovoltaik. Hier ist Solar keine Modeerscheinung, sondern praktische Vernunft.',
    whySolarReasons: [
      {
        title: 'Hügeltopographie – natürlicher Sonnenfänger',
        description: 'Die charakteristischen Appenzeller Bauernhöfe und Wohnhäuser haben oft grossflächige, nach Süden oder Südwesten exponierte Satteldächer. Ideale Flächen für maximale Solarausbeute.',
      },
      {
        title: '1\'720 Sonnenstunden – über dem Schweizer Mittel',
        description: 'Trotz östlicher Lage profitiert Appenzell von einem überraschend sonnigen Klima, besonders zwischen Herisau und Gais. Die Jahresproduktion liegt über dem Deutschschweizer Durchschnitt.',
      },
      {
        title: 'Landwirtschaft + Solar = doppelter Mehrwert',
        description: 'Viele Appenzeller Höfe kombinieren heute Solar auf dem Dach mit Direktvermarktung von regionalem Strom. Das stärkt die bäuerliche Einkommensstruktur und fördert die Energieautonomie.',
      },
    ],
    cityFactsTitle: 'Solar-Fakten Appenzell 2026',
    cityFactsParagraphs: [
      'Appenzell AI/AR verzeichnet 1\'720 Sonnenstunden pro Jahr. Die Hügellagen mit Südexposition erzielen Spitzenwerte unter den Innerrhoder und Ausserrhoder Gemeinden.',
    ],
    pricing: {
      min: 8500,
      max: 23000,
      typical5kw: { min: 9500, max: 12500 },
      afterSubsidy5kw: { min: 6500, max: 8800 },
      roiYears: '7–9',
    },
    incentives: {
      title: 'Förderung Appenzell 2026',
      description: 'AI und AR haben eigene Programme',
      programs: [
        { name: 'Pronovo EIV (Bund)', amount: 'bis CHF 3\'400', description: 'Einmalvergütung 5 kWp' },
        { name: 'AI/AR Förderbeitrag', amount: 'bis CHF 900', description: 'Kantonaler Zusatzbeitrag' },
        { name: 'Steuerabzug AI/AR', amount: '100%', description: 'Anlage steuerlich absetzbar' },
      ],
    },
    caseStudies: [
      { name: 'E. Grob', location: 'Herisau', systemSize: '7 kWp', cost: 'CHF 12\'500', savings: 'CHF 2\'100/J', payback: '8 J', quote: 'Unser Appenzeller Dach war wie gemacht dafür. PVPro hat uns ohne viel Aufwand mit dem richtigen Installateur zusammengebracht.' },
    ],
    faqs: [
      { question: 'Eignen sich Appenzeller Haustypen gut für Solar?', answer: 'Ja. Die charakteristischen grossen Satteldächer mit Südausrichtung sind nahezu ideal für Photovoltaik. Viele Appenzeller Häuser haben Dachflächen für 8–15 kWp.' },
      { question: 'Wie viel Sonne hat Appenzell im Vergleich zu anderen Kantonen?', answer: 'Mit 1\'720 Stunden liegt Appenzell über dem Deutschschweizer Durchschnitt, überraschend für einen so östlichen Kanton. Besonders die Ausserrhoder Hügellagen sind sonnig.' },
      { question: 'Welche Förderungen gelten in AI und AR?', answer: 'Beide Halbkantone ergänzen die EIV des Bundes mit kantonalen Förderbeiträgen. Die Anlage ist vollständig als Liegenschaftsunterhalt absetzbar.' },
      { question: 'Kann ich in Appenzell auch bei einem Holzhaus Solar installieren?', answer: 'Ja. Holzdächer sind für Solaranlagen problemlos geeignet. Speziell ausgebildete Installateure in der Ostschweiz kennen die Montage auf Holzkonstruktionen genau.' },
      { question: 'Gibt es Ortsbild-Auflagen in Appenzell?', answer: 'In einigen Kernzonen und bei geschützten Gebäuden gelten besondere Anforderungen. Indachlösungen fügen sich ästhetisch gut ein. Unsere Partnerinstallateure kennen die regionalen Anforderungen.' },
    ],
    testimonial: {
      initials: 'EG',
      name: 'Ernst Grob',
      quote: 'In Herisau sind wir bodenständig. Solar ist keine Modewelle – es ist Vernunft. PVPro hat mir drei Angebote von Ostschweizer Betrieben gebracht, alle seriös. Jetzt läuft die Anlage seit zwei Jahren ohne Probleme.',
    },
  },

  // ─── GRAUBÜNDEN (DE) ─────────────────────────────────────────────────────────
  graubunden: {
    slug: 'graubunden',
    image: '/images/asset-installateur-dach-5.png',
    heroHeadline: 'Solaranlage Graubünden',
    heroSubheadline: 'Alpines Klima, maximale Solarausbeute auf 1\'800m',
    heroDescription: 'Graubünden – der grösste Schweizer Kanton – bietet die besten natürlichen Voraussetzungen für Solar: 1\'803 Sonnenstunden, Höhenlagen mit weniger Luftfilterung und eine Skitourismus-Infrastruktur, die zunehmend auf Solarstrom umsteigt.',
    whySolarTitle: 'Graubünden: Solarparadies in den Alpen',
    whySolarIntro: 'Höhenlagen, weniger Nebel und starke direkte Sonneneinstrahlung machen Graubünden zu einem der besten Solarstandorte der Schweiz – mit einzigartigen Vorteilen für alpine Objekte.',
    whySolarReasons: [
      {
        title: 'Höhenlage = mehr Solarertrag',
        description: 'Auf 800–2\'000 m ü.M. ist die Atmosphäre dünner und filtert weniger Sonnenstrahlung. Anlagen in Graubünden erzielen pro kWp bis zu 15% mehr Ertrag als im Mittelland.',
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
      'Graubünden hat mit 1\'803 Sonnenstunden und dem Höhenbonus die besten Voraussetzungen unter den Deutschschweizer Kantonen. In Chur selbst sind es 1\'780 h/Jahr.',
    ],
    pricing: {
      min: 9000,
      max: 28000,
      typical5kw: { min: 10500, max: 14000 },
      afterSubsidy5kw: { min: 7300, max: 10000 },
      roiYears: '6–9',
    },
    incentives: {
      title: 'Förderung Kanton Graubünden 2026',
      description: 'Plus Höhenbonus des Bundes',
      programs: [
        { name: 'Pronovo EIV (Bund)', amount: 'bis CHF 3\'900', description: 'Einmalvergütung + Höhenbonus' },
        { name: 'GR Förderprogramm', amount: 'bis CHF 1\'200', description: 'Kantonaler Investitionsbeitrag' },
        { name: 'Steuerabzug GR', amount: '100%', description: 'Anlagekosten als Unterhalt absetzbar' },
      ],
    },
    caseStudies: [
      { name: 'A. Caviezel', location: 'Chur', systemSize: '8 kWp', cost: 'CHF 14\'000', savings: 'CHF 2\'500/J', payback: '7 J', quote: 'Auf 650m in Chur produziere ich mehr als gedacht. Der Höhenbonus und die tolle Beratung über PVPro haben den Unterschied gemacht.' },
    ],
    faqs: [
      { question: 'Warum produzieren Anlagen in Graubünden mehr Strom als im Mittelland?', answer: 'In höheren Lagen filtert die Atmosphäre weniger UV- und Globalstrahlung. Zudem ist der Himmel in den Bergen oft klarer. Pro 1\'000m Höhe steigt der Ertrag um etwa 5–10%.' },
      { question: 'Wie funktioniert der Höhenbonus bei der EIV in Graubünden?', answer: 'Pronovo (Bundesförderbehörde) zahlt für Anlagen in Berggebieten einen Zusatzbetrag zur EIV. Anlagen ab 500m ü.M. und auf steilen Flächen erhalten bis zu 15% mehr Förderung.' },
      { question: 'Können Chalets und Ferienwohnungen in Graubünden Solar nutzen?', answer: 'Ja, sofern sie an das öffentliche Netz angeschlossen sind. Überschuss wird eingespeist, auch wenn Sie nicht permanent vor Ort sind. Ein Heimspeicher erhöht den Eigenverbrauch deutlich.' },
      { question: 'Sind alpine Solaranlagen schneefest?', answer: 'Ja. Moderne Module sind für Schneelast gemäss Schweizer Normen ausgelegt. Steilere Neigungswinkel (ab 45°) lassen den Schnee besser abrutschen. Der Schnee auf dem Boden reflektiert zusätzlich Licht.' },
      { question: 'Welche Installateure kennen alpine Projekte in Graubünden?', answer: 'PVPro vermittelt zertifizierte Betriebe, die regelmässig in Berglagen installieren. Von Chur über Davos bis ins Engadin – unsere Partner kennen alpine Konstruktionsanforderungen genau.' },
    ],
    testimonial: {
      initials: 'AC',
      name: 'Andrea Caviezel',
      quote: 'Chur ist sonnig, und auf meinem Dach macht die Höhe den Unterschied. Dank PVPro und einem guten Bündner Installateur produziere ich 20% mehr als anfangs geschätzt – das war eine Überraschung.',
    },
  },

  // ─── GLARUS (DE) ─────────────────────────────────────────────────────────────
  glarus: {
    slug: 'glarus',
    image: '/images/asset-haus-luftbild-3.png',
    heroHeadline: 'Solaranlage Glarus',
    heroSubheadline: 'Kleiner Kanton, grosse Solarambitionen',
    heroDescription: 'Glarus ist der flächenkleinste Kanton der Schweiz – aber in Sachen Solar geht man grosse Schritte. Mit 1\'605 Sonnenstunden, einer aktiven Gemeinde und dem Wandel vom Textil- zum Solarstandort setzt Glarus ein Zeichen.',
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
      'Glarus hat 1\'605 Sonnenstunden pro Jahr. Das Linthtal ist durchschnittlich 30% sonniger als die kantonalen Tallagen, was für viele Gebäude exzellente Bedingungen schafft.',
    ],
    pricing: {
      min: 8500,
      max: 22000,
      typical5kw: { min: 9500, max: 12000 },
      afterSubsidy5kw: { min: 6500, max: 8500 },
      roiYears: '8–10',
    },
    incentives: {
      title: 'Förderung Kanton Glarus 2026',
      description: 'Kompakte Förderprogramme',
      programs: [
        { name: 'Pronovo EIV (Bund)', amount: 'bis CHF 3\'400', description: 'Einmalvergütung 5 kWp' },
        { name: 'GL Förderbeitrag', amount: 'bis CHF 700', description: 'Kantonaler Zuschuss' },
        { name: 'Steuerabzug GL', amount: '100%', description: 'Anlagekosten absetzbar' },
      ],
    },
    caseStudies: [
      { name: 'U. Freuler', location: 'Glarus', systemSize: '6.5 kWp', cost: 'CHF 11\'500', savings: 'CHF 1\'950/J', payback: '9 J', quote: 'Im Linthtal mit dem Südhang war Solar für mich klar. PVPro hat mir schnell die richtigen Partner in der Ostschweiz gezeigt.' },
    ],
    faqs: [
      { question: 'Lohnt sich Solar im Kanton Glarus?', answer: 'Ja, besonders für Gebäude mit Südexposition im Linthtal. Mit 1\'605 Sonnenstunden, Bundesförderung und kantonalen Beiträgen rechnet sich eine Anlage in 8–10 Jahren.' },
      { question: 'Welche Förderungen gibt es im Kanton Glarus?', answer: 'Hauseigentümer erhalten die EIV des Bundes via Pronovo sowie einen kantonalen Förderbeitrag. Ergänzend ist die Solaranlage als Liegenschaftsunterhalt steuerlich absetzbar.' },
      { question: 'Gibt es genügend Solarinstallateure für Glarus?', answer: 'PVPro vermittelt zertifizierte Betriebe aus der gesamten Ostschweiz und Innerschweiz, die regelmässig auch in Glarus installieren. Lokale Kenntnisse sind bei unseren Partnern Standard.' },
      { question: 'Können alte Textilfabrikdächer in Glarus für Solar genutzt werden?', answer: 'Ja, wenn die Statik stimmt. Viele Glarner Industriegebäude haben starke Stahlbetonkonstruktionen, die problemlos Solaranlagen tragen. Eine Statikprüfung gehört zum Standard-Projekt.' },
      { question: 'Was sind LEG-Gemeinschaften und gibt es diese in Glarus?', answer: 'Lokale Elektrizitätsgemeinschaften (LEG) erlauben es Nachbarn, Solarstrom gemeinsam zu nutzen. In Glarus, wo Gemeinschaftssinn gross geschrieben wird, gibt es erste LEG-Pilotprojekte.' },
    ],
    testimonial: {
      initials: 'UF',
      name: 'Urs Freuler',
      quote: 'Glarus ist klein, aber wir sind vorwärts. Die Solaranlage auf meinem Haus im Linthtal war die beste Investition seit Jahren. Über PVPro war alles unkompliziert und professionell.',
    },
  },

  // ─── ZUG (DE) ────────────────────────────────────────────────────────────────
  zug: {
    slug: 'zug',
    image: '/images/asset-haus-modern-2.png',
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
        description: 'In Zug ist ein Heimspeicher bei fast jeder neuen Solaranlage dabei. Mit hohen Strompreisen und anspruchsvollen Autarkie-Zielen rechnen sich grosse Speicher (10–20 kWh) schneller als anderswo.',
      },
      {
        title: 'Steueroptimierung auf höchstem Niveau',
        description: 'Dank der tiefen Zuger Steuern ist der Abzug der Solaranlage als Liegenschaftsunterhalt zwar nominell tiefer, aber in Kombination mit der EIV ergibt sich eine der besten Nettokosten-Konstellationen der Schweiz.',
      },
    ],
    cityFactsTitle: 'Solar-Fakten Zug 2026',
    cityFactsParagraphs: [
      'Zug hat 1\'598 Sonnenstunden pro Jahr und ist mit 40km² der kleinste Zentralschweizer Kanton. Die hohe Immobiliendichte bedeutet viele optimierbare Dachflächen.',
    ],
    pricing: {
      min: 11000,
      max: 32000,
      typical5kw: { min: 13000, max: 17000 },
      afterSubsidy5kw: { min: 9500, max: 13000 },
      roiYears: '6–8',
    },
    incentives: {
      title: 'Förderung Kanton Zug 2026',
      description: 'Top-Konditionen dank tiefer Steuern',
      programs: [
        { name: 'Pronovo EIV (Bund)', amount: 'bis CHF 3\'400', description: 'Einmalvergütung 5 kWp' },
        { name: 'ZG Förderbeitrag', amount: 'bis CHF 1\'000', description: 'Kantonaler Investitionsbeitrag' },
        { name: 'Steuerabzug ZG', amount: '100%', description: 'Besonders wirksam dank tiefer Tarife' },
      ],
    },
    caseStudies: [
      { name: 'A. Weber', location: 'Baar', systemSize: '10 kWp + Speicher', cost: 'CHF 28\'000', savings: 'CHF 4\'100/J', payback: '7 J', quote: 'In Zug machen wir alles richtig – auch Solar. PVPro hat mir die besten Premiuminstallateure für mein Indach-System in Baar vermittelt.' },
    ],
    faqs: [
      { question: 'Warum entscheiden sich Zuger Eigentümer oft für Indach-Solar?', answer: 'Indach-Systeme integrieren sich nahtlos ins Dach und wirken ästhetisch hochwertig. In Zug, wo Immobilienwerte hoch sind, steigert ein elegantes Solarsystem den Marktwert der Liegenschaft.' },
      { question: 'Lohnt sich ein grosser Batteriespeicher in Zug?', answer: 'Mit Strompreisen von 30–36 Rp./kWh und hohem Autarkie-Anspruch rechnet sich ein 15-kWh-Speicher in Zug in 9–11 Jahren. Kombiniert mit einem Elektroauto sinkt die Amortisationszeit.' },
      { question: 'Welche Förderung erhalte ich in Zug?', answer: 'EIV des Bundes plus kantonaler Beitrag. Ergänzend wirkt der Steuerabzug: In Zug mit tiefen Steuersätzen ist der nominale Abzug kleiner, aber in Kombination mit der Förderung ergibt sich eine gute Gesamtrechnung.' },
      { question: 'Gibt es Blockchain/Web3 Unternehmen in Zug, die Solar nutzen?', answer: 'Ja. Das Crypto Valley Zug hat mehrere Tech-Unternehmen, die ihre Büros und Rechenzentren zunehmend mit Solarstrom betreiben. Dieses Ökosystem treibt auch die Nachfrage bei Privatpersonen.' },
      { question: 'Kann ich in Zug mit Solar auch mein Elektroauto laden?', answer: 'Absolut. Eine 8–10 kWp-Anlage mit Heimspeicher und Wallbox bildet in Zug ein komplettes Energie-Ökosystem. Der Strompreisvorteil pro gefahrenen Kilometer ist erheblich.' },
    ],
    testimonial: {
      initials: 'AW',
      name: 'Adrian Weber',
      quote: 'In Baar wollte ich das Beste. Über PVPro habe ich einen Premium-Installateur für mein 10-kWp-Indach-System gefunden. Die Anlage sieht aus wie ein normales Dach, produziert aber top Leistung.',
    },
  },

  // ─── UNTERWALDEN (DE) ────────────────────────────────────────────────────────
  unterwalden: {
    slug: 'unterwalden',
    image: '/images/asset-haus-luftbild-1.png',
    heroHeadline: 'Solaranlage Unterwalden',
    heroSubheadline: 'Vierwaldstättersee-Region setzt ein Zeichen',
    heroDescription: 'Ob Stans in Nidwalden oder Sarnen in Obwalden – die Region Unterwalden am Vierwaldstättersee bietet 1\'739 Sonnenstunden und ein mildes Seeklima, das Solaranlagen optimale Produktionsbedingungen bietet.',
    whySolarTitle: 'Unterwalden: Wo Seeklima und Sonnenhang sich vereinen',
    whySolarIntro: 'Die einzigartige Lage zwischen See und Bergen schafft ein Mikroklima mit wenig Nebel, viel Sonne und einer Gemeinschaft, die Nachhaltigkeit lebt.',
    whySolarReasons: [
      {
        title: 'Seeklima – weniger Nebel, mehr Ertrag',
        description: 'Der Vierwaldstättersee wirkt als Wärmespeicher und reduziert die Nebelhäufigkeit. Sarnen und Stans haben im Herbst und Winter deutlich mehr Sonnenstunden als das Schweizer Mittelland.',
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
      min: 9000,
      max: 25000,
      typical5kw: { min: 10000, max: 13000 },
      afterSubsidy5kw: { min: 7000, max: 9000 },
      roiYears: '7–9',
    },
    incentives: {
      title: 'Förderung OW/NW 2026',
      description: 'Bund und kantonale Programme',
      programs: [
        { name: 'Pronovo EIV (Bund)', amount: 'bis CHF 3\'400', description: 'Einmalvergütung 5 kWp' },
        { name: 'OW/NW Förderbeitrag', amount: 'bis CHF 900', description: 'Kantonaler Investitionszuschuss' },
        { name: 'Steuerabzug OW/NW', amount: '100%', description: 'Anlagekosten absetzbar' },
      ],
    },
    caseStudies: [
      { name: 'M. Etlin', location: 'Stans', systemSize: '7 kWp', cost: 'CHF 12\'500', savings: 'CHF 2\'200/J', payback: '8 J', quote: 'Am Vierwaldstättersee ist die Sonne ein Geschenk – jetzt nutze ich sie auch. PVPro hat die beste Firma in Stans für mich gefunden.' },
    ],
    faqs: [
      { question: 'Wie viel Sonne gibt es in Unterwalden?', answer: 'Unterwalden (OW/NW) verzeichnet 1\'739 Sonnenstunden pro Jahr, deutlich mehr als das Mittelland. Die Seelage sorgt für wenig Nebel und mehr effektive Sonnennutzung.' },
      { question: 'Welche Förderungen gelten in Obwalden und Nidwalden?', answer: 'Beide Halbkantone bieten neben der EIV des Bundes eigene kantonale Förderbeiträge. Die Solaranlage ist steuerlich als Liegenschaftsunterhalt absetzbar.' },
      { question: 'Gibt es genug Solarinstallateure in der Region?', answer: 'PVPro vermittelt Fachbetriebe aus der Innerschweiz, die regelmässig in Nidwalden und Obwalden arbeiten. Qualität und lokale Erfahrung sind bei unseren Partnern gesichert.' },
      { question: 'Beeinflusst die Nähe zum See die Solaranlage?', answer: 'Positiv. Das Seeklima reduziert Frost und Nebel. Zudem reflektiert der See die Sonnenstrahlung auf südseitige Häuser, was den Ertrag leicht erhöht.' },
      { question: 'Kann ich in Unterwalden meinen Strom ins Netz einspeisen?', answer: 'Ja. Die lokalen Energieversorger in OW und NW nehmen überschüssigen Solarstrom ins Netz auf und vergüten ihn. Die Vergütung liegt typisch bei 8–13 Rp./kWh.' },
    ],
    testimonial: {
      initials: 'ME',
      name: 'Marie-Louise Etlin',
      quote: 'Der Vierwaldstättersee und die Berge sind unser täglich Brot in Stans – jetzt kommt die Sonne noch dazu. Mit PVPro war die Anlage in sechs Wochen installiert und läuft perfekt.',
    },
  },

  // ─── SOLOTHURN (DE) ──────────────────────────────────────────────────────────
  solothurn: {
    slug: 'solothurn',
    image: '/images/asset-installateur-tablet.png',
    heroHeadline: 'Solaranlage Solothurn',
    heroSubheadline: 'Schweizer Präzision trifft saubere Energie im Aareraum',
    heroDescription: 'Solothurn – Stadt der Barockkirchen und präzisen Uhrmacher – verbindet Tradition mit Moderne. Mit 1\'631 Sonnenstunden und einem starken Gebäudeprogramm lohnt sich Photovoltaik im gesamten Aarekorridor besonders.',
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
      'Solothurn hat 1\'631 Sonnenstunden pro Jahr. Besonders die flache Aarezone zwischen Grenchen und Olten bietet sehr gute Installationsbedingungen.',
    ],
    pricing: {
      min: 9000,
      max: 24000,
      typical5kw: { min: 9500, max: 12500 },
      afterSubsidy5kw: { min: 6500, max: 8800 },
      roiYears: '7–9',
    },
    incentives: {
      title: 'Förderung Kanton Solothurn 2026',
      description: 'Bund + kantonales Gebäudeprogramm',
      programs: [
        { name: 'Pronovo EIV (Bund)', amount: 'bis CHF 3\'400', description: 'Einmalvergütung 5 kWp' },
        { name: 'SO Gebäudeprogramm', amount: 'bis CHF 1\'200', description: 'Kantonaler Zusatzbeitrag PV' },
        { name: 'Steuerabzug SO', amount: '100%', description: 'Vollständig als Unterhalt absetzbar' },
      ],
    },
    caseStudies: [
      { name: 'P. Leuenberger', location: 'Olten', systemSize: '6 kWp', cost: 'CHF 11\'500', savings: 'CHF 1\'950/J', payback: '8 J', quote: 'Als Solothurner Ingenieur schätze ich Präzision. PVPro hat mir drei präzise Angebote geliefert – das beste war klar erkennbar.' },
    ],
    faqs: [
      { question: 'Was macht Solothurn zu einem guten Solar-Kanton?', answer: 'Das milde Aareklima mit wenig Nebel, 1\'631 Sonnenstunden und ein kantonales Gebäudeprogramm machen Solothurn zu einem attraktiven Solar-Standort mit solidem ROI.' },
      { question: 'Welche Förderungen gibt es im Kanton Solothurn?', answer: 'Sie erhalten die bundesweite EIV plus kantonale Gebäudeprogramm-Beiträge. Zusätzlich ist die Anlage als Liegenschaftsunterhalt steuerlich absetzbar, was die Nettoinvestition deutlich senkt.' },
      { question: 'Gibt es in Solothurn eine Solarpflicht?', answer: 'Solothurn plant, bei umfassenden Dachsanierungen eine Solarpflicht einzuführen. Aktuell ist dies noch nicht bindend, aber die Fördermittel machen einen freiwilligen Einbau finanziell sehr attraktiv.' },
      { question: 'Wie finde ich den besten Installateur in der Region Solothurn?', answer: 'PVPro vermittelt geprüfte Fachbetriebe im Raum Solothurn, Grenchen, Olten und Balsthal. Alle Partner haben Referenzprojekte in der Region und werden von uns auf Qualität geprüft.' },
      { question: 'Lohnt sich Solar auch für Mehrfamilienhäuser in Solothurn?', answer: 'Ja. Über Gemeinschaftsanlagen (ZEV – Zusammenschluss zum Eigenverbrauch) können alle Mieter von der gemeinsamen Solaranlage profitieren. Besonders bei Mehrfamilienhäusern mit grossen Dachflächen sehr rentabel.' },
    ],
    testimonial: {
      initials: 'PL',
      name: 'Peter Leuenberger',
      quote: 'Ich bin Ingenieur in Olten und wollte alles genau analysieren. Die drei PVPro-Offerten waren klar und vergleichbar. Am Ende habe ich die beste Anlage zu einem fairen Preis bekommen – so soll es sein.',
    },
  },

  // ─── AARGAU (DE) ─────────────────────────────────────────────────────────────
  aargau: {
    slug: 'aargau',
    image: '/images/asset-haus-luftbild-4.png',
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
        description: 'Solarinstallationen im Aargau sind im Durchschnitt 10–15% günstiger als in Zürich. Der lokale Handwerkermarkt ist gut entwickelt und die Konkurrenz zwischen Installateuren hält die Preise fair.',
      },
      {
        title: 'Energiestrategie 2050 – Aargau in Führung',
        description: 'Als ehemaliger Atomkanton hat Aargau besonders starke politische Motive für die Energiewende. Das kantonale Energieprogramm fördert Photovoltaik und Speicher grosszügig.',
      },
    ],
    cityFactsTitle: 'Solar-Fakten Aargau 2026',
    cityFactsParagraphs: [
      'Aargau hat 1\'605 Sonnenstunden/Jahr und zählt die meisten installierten Photovoltaikanlagen unter den ländlich geprägten Kantonen der Schweiz.',
    ],
    pricing: {
      min: 8500,
      max: 24000,
      typical5kw: { min: 9000, max: 12000 },
      afterSubsidy5kw: { min: 6300, max: 8500 },
      roiYears: '7–9',
    },
    incentives: {
      title: 'Förderung Kanton Aargau 2026',
      description: 'Bund + starkes kantonales Programm',
      programs: [
        { name: 'Pronovo EIV (Bund)', amount: 'bis CHF 3\'400', description: 'Einmalvergütung 5 kWp' },
        { name: 'AG Energieprogramm', amount: 'bis CHF 1\'500', description: 'Kantonaler Förderbeitrag PV' },
        { name: 'Steuerabzug AG', amount: '100%', description: 'Vollständig als Unterhalt absetzbar' },
      ],
    },
    caseStudies: [
      { name: 'S. Müller', location: 'Baden', systemSize: '7.5 kWp', cost: 'CHF 12\'500', savings: 'CHF 2\'300/J', payback: '8 J', quote: 'Früher hat das KKW hier Strom gemacht – jetzt mein Dach. PVPro hat mir schnell die besten Aargauer Installateure vermittelt.' },
    ],
    faqs: [
      { question: 'Warum ist Aargau ein attraktiver Solar-Kanton?', answer: 'Hohe Eigenheimquote, günstigere Installationskosten als in städtischen Kantonen, 1\'605 Sonnenstunden und ein starkes kantonales Energieprogramm machen Aargau zu einem der besten Solar-Standorte der Deutschschweiz.' },
      { question: 'Welche Förderungen gibt es im Kanton Aargau?', answer: 'Hauseigentümer erhalten die bundesweite EIV plus das kantonale Aargauer Energieprogramm (bis CHF 1\'500 für 5 kWp). Zusätzlich sind alle Kosten als Liegenschaftsunterhalt absetzbar.' },
      { question: 'Gilt im Aargau eine Solarpflicht für Neubauten?', answer: 'Ab 2026 plant der Kanton Aargau eine schrittweise Einführung der Solarpflicht für Neubauten. Bei Bestandsbauten gibt es noch keine Pflicht, aber starke Anreize.' },
      { question: 'Wie viele Solarinstallateure gibt es im Aargau?', answer: 'Der Aargau hat eine der dichtesten Installateurlandschaften der Deutschschweiz. PVPro vermittelt geprüfte Betriebe in der gesamten Fläche des Kantons, von Baden bis Aarau und Zofingen.' },
      { question: 'Lohnt sich Solar mit einem Elektroauto im Aargau?', answer: 'Sehr. Mit einer 8-kWp-Anlage, Heimspeicher und Wallbox können Sie Ihr Elektroauto tagsüber nahezu kostenfrei laden. Die Gesamtrendite verbessert sich erheblich gegenüber Solar ohne EV.' },
    ],
    testimonial: {
      initials: 'SM',
      name: 'Sandra Müller',
      quote: 'Baden liegt im Energieland Aargau – früher Kernkraft, heute Solar auf meinem Dach. PVPro war unkompliziert: in drei Tagen drei Angebote, klarer Vergleich, schnelle Entscheidung. Perfekt.',
    },
  },

  // ─── GENÈVE (FR) ─────────────────────────────────────────────────────────────
  geneve: {
    slug: 'geneve',
    image: '/images/asset-beratung-indoor-1.png',
    heroHeadline: 'Installation Solaire à Genève',
    heroSubheadline: 'La Cité Internationale en tête du solaire suisse',
    heroDescription: "Genève bénéficie de 1'849 heures de soleil par an, d'une obligation solaire en vigueur et du programme SIG Prime Énergie. La Cité Internationale est devenue un leader européen de l'installation photovoltaïque. Demandez 3 offres gratuites maintenant.",
    whySolarTitle: "Pourquoi Genève est un champion du solaire",
    whySolarIntro: "Entre le programme SIG, l'obligation solaire et les 1'849 heures d'ensoleillement, Genève offre un écosystème solaire unique en Suisse.",
    whySolarReasons: [
      {
        title: "SIG Prime Énergie – bonus genevois de 25%",
        description: "Les Services Industriels de Genève (SIG) offrent une prime spéciale pour chaque installation photovoltaïque, s'ajoutant à la RU fédérale. Ce double avantage est unique en Suisse romande.",
      },
      {
        title: "Obligation solaire depuis 2022",
        description: "Genève impose le solaire sur toute rénovation de toiture importante depuis 2022. Cette obligation transforme chaque rénovation en opportunité d'investissement rentable et subventionné.",
      },
      {
        title: "1'849 heures de soleil – bien au-dessus de la moyenne",
        description: "Genève est l'une des villes les plus ensoleillées de Suisse. Une installation de 5 kWc produit environ 5'800 kWh par an, soit une économie annuelle de jusqu'à CHF 2'000.",
      },
    ],
    cityFactsTitle: "Faits solaires Genève 2026",
    cityFactsParagraphs: [
      "Genève compte 1'849 heures de soleil par an et est leader suisse en matière de politique solaire obligatoire.",
    ],
    pricing: {
      min: 10000,
      max: 30000,
      typical5kw: { min: 12000, max: 16000 },
      afterSubsidy5kw: { min: 8000, max: 11000 },
      roiYears: '7–9',
    },
    incentives: {
      title: "Aides solaires Genève 2026",
      description: "Confédération + SIG Prime Énergie",
      programs: [
        { name: 'Pronovo RU (Confédération)', amount: "jusqu'à CHF 3'400", description: 'Rétribution unique 5 kWc' },
        { name: 'SIG Prime Énergie', amount: '+25%', description: 'Bonus genevois exclusif' },
        { name: "Déduction fiscale GE", amount: '100%', description: "Déductible comme entretien immobilier" },
      ],
    },
    caseStudies: [
      { name: 'I. Rochat', location: 'Carouge', systemSize: '6 kWc', cost: "CHF 14'500", savings: "CHF 2'400/an", payback: '8 ans', quote: "Le bonus SIG a fait toute la différence. PVPro m'a trouvé un excellent installateur genevois en quelques jours." },
    ],
    faqs: [
      { question: "Quelle est l'obligation solaire à Genève ?", answer: "Depuis 2022, toute rénovation de toiture importante sur un bâtiment à Genève impose l'installation de panneaux photovoltaïques. PVPro vous connecte avec des installateurs certifiés qui gèrent les démarches administratives." },
      { question: "Comment fonctionne le programme SIG Prime Énergie ?", answer: "Les SIG offrent une prime de 25% supplémentaire sur le coût de l'installation solaire, cumulable avec la rétribution unique fédérale (Pronovo). C'est le programme cantonal le plus généreux de Suisse romande." },
      { question: "Quel est le tarif de rachat du surplus à Genève ?", answer: "Les SIG rachètent votre surplus à environ 10–14 ct./kWh selon le tarif trimestriel. L'autoconsommation reste bien plus rentable à 30–35 ct./kWh économisés." },
      { question: "Peut-on installer du solaire sur un immeuble en PPE à Genève ?", answer: "Oui. Via un ZEV (Zusammenschluss zum Eigenverbrauch) ou un modèle de communauté locale, tous les propriétaires d'un immeuble peuvent partager une installation solaire et bénéficier des subventions." },
      { question: "Combien de temps faut-il pour installer du solaire à Genève ?", answer: "De la signature du contrat à la mise en service, comptez 6 à 12 semaines à Genève. Les demandes d'autorisation et la connexion au réseau SIG sont bien rodées grâce au volume d'installations." },
    ],
    testimonial: {
      initials: 'IR',
      name: 'Isabelle Rochat',
      quote: "À Carouge, j'hésitais entre plusieurs installateurs. PVPro m'a envoyé trois offres comparables en une semaine. Avec le bonus SIG, mon installation a coûté 28% de moins que prévu. Je recommande vivement.",
    },
  },

  // ─── VAUD (FR) ───────────────────────────────────────────────────────────────
  vaud: {
    slug: 'vaud',
    image: '/images/asset-beratung-indoor-2.png',
    heroHeadline: "Installation Solaire dans le Canton de Vaud",
    heroSubheadline: "Du Léman aux Alpes – le solaire vaudois en plein essor",
    heroDescription: "Vaud bénéficie de 1'821 heures de soleil, d'un réseau d'installateurs dense autour de Lausanne et d'un programme cantonal d'aides attrayant. Du vignoble lavallois aux chalets du Pays-d'Enhaut, chaque toit est une opportunité.",
    whySolarTitle: "Pourquoi le solaire s'épanouit dans le canton de Vaud",
    whySolarIntro: "Le Canton de Vaud combine un ensoleillement exceptionnel, la proximité du Lac Léman et un tissu économique innovant pour faire du solaire un investissement évident.",
    whySolarReasons: [
      {
        title: "EPFL – l'innovation solaire au cœur de Vaud",
        description: "L'École Polytechnique Fédérale de Lausanne est un centre mondial de recherche solaire. Cette expertise se diffuse dans tout le canton : installateurs locaux ultra-qualifiés et technologies de pointe disponibles.",
      },
      {
        title: "1'821 heures de soleil et le Léman comme amplificateur",
        description: "Le Lac Léman réfléchit la lumière sur les versants nord, augmentant l'ensoleillement des communes lacustres de 5 à 10%. Nyon, Morges et Montreux bénéficient de cette double exposition.",
      },
      {
        title: "Vignobles et agri-PV – tradition et modernité",
        description: "Les viticulteurs vaudois adoptent les structures Agri-PV pour protéger leurs vignes des aléas climatiques tout en produisant de l'électricité. Un double dividende qui inspire aussi les agriculteurs.",
      },
    ],
    cityFactsTitle: "Faits solaires Vaud 2026",
    cityFactsParagraphs: [
      "Vaud compte 1'821 heures de soleil et est le deuxième canton romand le plus ensoleillé après Valais. Lausanne enregistre en moyenne 1'800 h/an.",
    ],
    pricing: {
      min: 10000,
      max: 28000,
      typical5kw: { min: 11000, max: 15000 },
      afterSubsidy5kw: { min: 7500, max: 10500 },
      roiYears: '7–9',
    },
    incentives: {
      title: "Aides solaires Vaud 2026",
      description: "Confédération + programme cantonal VD",
      programs: [
        { name: 'Pronovo RU (Confédération)', amount: "jusqu'à CHF 3'400", description: 'Rétribution unique 5 kWc' },
        { name: 'Programme cantonal VD', amount: "jusqu'à CHF 1'500", description: "Subvention cantonale photovoltaïque" },
        { name: "Déduction fiscale VD", amount: '100%', description: "Déductible en entretien immobilier" },
      ],
    },
    caseStudies: [
      { name: 'M. Pittet', location: 'Lausanne', systemSize: '7 kWc', cost: "CHF 14'000", savings: "CHF 2'300/an", payback: '8 ans', quote: "À Lausanne, les toits sont parfaits pour le solaire. PVPro m'a mis en contact avec un excellent installateur vaudois en 48h." },
    ],
    faqs: [
      { question: "Quelles subventions pour le solaire dans le Canton de Vaud ?", answer: "Vous bénéficiez de la rétribution unique fédérale (Pronovo) cumulée avec le programme cantonal vaudois. Les panneaux solaires sont intégralement déductibles comme entretien immobilier." },
      { question: "Peut-on installer du solaire sur une propriété protégée dans le Lavaux ?", answer: "Le Lavaux est classé au patrimoine UNESCO. Des solutions intégrées et des nuances de couleurs spécifiques sont disponibles pour respecter l'esthétique protégée. Nos installateurs connaissent ces contraintes." },
      { question: "Comment fonctionne l'agri-PV pour les viticulteurs vaudois ?", answer: "Les structures Agri-PV permettent d'installer des panneaux en hauteur au-dessus des vignes. Elles protègent contre la grêle et les gelées tout en générant de l'électricité. Des subventions spéciales existent pour les exploitations agricoles." },
      { question: "Quel est le délai d'installation dans la région lausannoise ?", answer: "Dans l'agglomération lausannoise, comptez 6 à 10 semaines entre la signature et la mise en service. Nos partenaires ont l'habitude des procédures communales vaudoises." },
      { question: "Quelle taille d'installation pour un chalet aux Alpes vaudoises ?", answer: "Pour un chalet utilisé en week-end, une installation de 4–6 kWc est généralement idéale. Si vous avez une pompe à chaleur ou une borne de recharge, optez pour 7–10 kWc avec stockage batterie." },
    ],
    testimonial: {
      initials: 'MP',
      name: 'Marc-André Pittet',
      quote: "Lausanne est une ville innovante — mon toit devait l'être aussi. PVPro m'a permis de comparer trois offres sérieuses en une semaine. L'installation s'est faite sans accroc et je produis plus que prévu.",
    },
  },

  // ─── VALAIS (FR) ─────────────────────────────────────────────────────────────
  valais: {
    slug: 'valais',
    image: '/images/asset-installateur-montage-1.png',
    heroHeadline: "Installation Solaire en Valais",
    heroSubheadline: "Le Champion Suisse du Solaire alpin",
    heroDescription: "Le Valais est le deuxième canton le plus ensoleillé de Suisse avec 1'849 heures par an et une irradiance alpine exceptionnelle. Des stations comme Zermatt et Sion ont fait du Valais la vitrine nationale de l'énergie solaire. Demandez vos offres maintenant.",
    whySolarTitle: "Pourquoi le Valais est le champion solaire de Suisse",
    whySolarIntro: "Irradiation alpine record, tourisme durable en haute montagne et un programme cantonal ambitieux font du Valais l'eldorado suisse du solaire.",
    whySolarReasons: [
      {
        title: "Irradiance alpine record – jusqu'à 1'500 kWh/m²/an",
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
      "Le Valais enregistre 1'849 heures d'ensoleillement en fond de vallée et jusqu'à 2'200 heures sur les hauts plateaux. C'est le deuxième meilleur canton de Suisse après le Tessin.",
    ],
    pricing: {
      min: 9500,
      max: 27000,
      typical5kw: { min: 10500, max: 14000 },
      afterSubsidy5kw: { min: 7000, max: 10000 },
      roiYears: '6–8',
    },
    incentives: {
      title: "Aides solaires Valais 2026",
      description: "Confédération + programme VS généreux",
      programs: [
        { name: 'Pronovo RU (Confédération)', amount: "jusqu'à CHF 3'400", description: 'Rétribution unique 5 kWc' },
        { name: 'Programme cantonal VS', amount: "jusqu'à CHF 2'000", description: "Parmi les plus élevés de Suisse romande" },
        { name: "Déduction fiscale VS", amount: '100%', description: "Déductible en entretien immobilier" },
      ],
    },
    caseStudies: [
      { name: 'J. Michelet', location: 'Sion', systemSize: '8 kWc', cost: "CHF 14'500", savings: "CHF 2'800/an", payback: '7 ans', quote: "À Sion, le soleil est notre richesse depuis toujours. PVPro m'a aidé à la transformer en énergie propre avec une installation parfaite." },
    ],
    faqs: [
      { question: "Pourquoi le Valais est-il si avantageux pour le solaire ?", answer: "Le Valais combine 1'849 h de soleil, une irradiance alpine record, un programme cantonal parmi les plus généreux de Suisse et des installateurs alpins très expérimentés. Le ROI est de 6 à 8 ans." },
      { question: "Quelles subventions pour le solaire en Valais ?", answer: "Vous bénéficiez de la rétribution unique fédérale (Pronovo) plus la subvention cantonale valaisanne, l'une des plus élevées de Suisse. La combinaison peut réduire le coût net jusqu'à 40%." },
      { question: "Est-il possible d'installer du solaire sur un chalet alpin ?", answer: "Oui. Nos partenaires installateurs connaissent parfaitement les contraintes alpines : charge de neige, vent, accès en altitude. Des solutions robustes et certifiées sont disponibles pour tous types de chalets." },
      { question: "Comment le reflet de la neige profite-t-il aux installations solaires en Valais ?", answer: "La neige réfléchit jusqu'à 80% de l'irradiation solaire sur les panneaux (effet albédo). En janvier-février, les installations valaisannes peuvent produire 30% de plus qu'en plaine grâce à cet effet." },
      { question: "Quelle est la différence de production entre Sion et Zermatt ?", answer: "Zermatt (1'600 m) produit environ 15% de plus que Sion (500 m) pour la même installation, grâce à l'altitude et à un ensoleillement plus direct. Dans les deux cas, le Valais surpasse la majorité des autres cantons." },
    ],
    testimonial: {
      initials: 'JM',
      name: 'Jean-Pierre Michelet',
      quote: "En Valais, on vit avec le soleil depuis toujours. Grâce à PVPro, j'ai trouvé un installateur de confiance à Sion qui a dimensionné mon installation parfaitement. Aujourd'hui je produis plus que je consomme.",
    },
  },

  // ─── TICINO (IT) ─────────────────────────────────────────────────────────────
  ticino: {
    slug: 'ticino',
    image: '/images/asset-haus-solar-ev-1.png',
    heroHeadline: 'Impianto Fotovoltaico in Ticino',
    heroSubheadline: 'Il Cantone con il sole migliore della Svizzera',
    heroDescription: "Il Ticino è il paradiso svizzero del solare: 2'157 ore di sole all'anno, clima mediterraneo e il ROI più breve di tutta la Svizzera (4–6 anni). Ogni tetto ticinese è un potenziale generatore di energia pulita e risparmio.",
    whySolarTitle: 'Perché il Ticino è il numero 1 del solare in Svizzera',
    whySolarIntro: "Con 2'157 ore di sole, temperature miti e un ecosistema di installatori esperti, il Ticino offre le migliori condizioni fotovoltaiche dell'intera Confederazione.",
    whySolarReasons: [
      {
        title: "2'157 ore di sole – record svizzero",
        description: "Il Ticino registra più ore di sole di qualsiasi altro cantone svizzero. Lugano supera persino alcune città del nord Italia. Una installazione da 5 kWp produce fino a 6'500 kWh/anno – il 25% in più rispetto a Zurigo.",
      },
      {
        title: "ROI di 4–6 anni – il più veloce della Svizzera",
        description: "Grazie all'irraggiamento eccezionale, gli impianti ticinesi si ammortizzano in soli 4–6 anni, rispetto agli 8–10 anni della Svizzera tedesca. Una volta ammortizzato, ogni kWh è puro guadagno.",
      },
      {
        title: "Clima mediterraneo + palme = condizioni ottimali",
        description: "L'aria mite del Ticino riduce le perdite termiche dei pannelli. I moduli moderni producono più efficientemente con temperature moderate che nei cantoni nordici più freddi. L'effetto è misurabile: fino al 5% di resa in più.",
      },
    ],
    cityFactsTitle: "Fatti solari Ticino 2026",
    cityFactsParagraphs: [
      "Il Ticino ha 2'157 ore di sole/anno. Lugano registra mediamente 1'240 kWh/m² di irraggiamento globale – il valore più alto della Svizzera.",
    ],
    pricing: {
      min: 8500,
      max: 24000,
      typical5kw: { min: 9000, max: 12000 },
      afterSubsidy5kw: { min: 6200, max: 8200 },
      roiYears: '4–6',
    },
    incentives: {
      title: "Incentivi fotovoltaico Ticino 2026",
      description: "Confederazione + Cantone Ticino",
      programs: [
        { name: 'Pronovo RU (Confederazione)', amount: "fino a CHF 3'400", description: 'Rimunerazione unica 5 kWp' },
        { name: 'Cantone Ticino – DFE', amount: "fino a CHF 1'800", description: 'Contributo cantonale fotovoltaico' },
        { name: 'Deduzione fiscale TI', amount: '100%', description: 'Deducibile come manutenzione immobiliare' },
      ],
    },
    caseStudies: [
      { name: 'M. Bernasconi', location: 'Lugano', systemSize: '7 kWp', cost: "CHF 12'500", savings: "CHF 2'800/anno", payback: '5 anni', quote: 'A Lugano il sole è un capitale. Grazie a PVPro ho trovato l\'installatore giusto in 48 ore – ora produco abbondanza ogni giorno.' },
    ],
    faqs: [
      { question: "Perché il Ticino è il miglior cantone per il fotovoltaico?", answer: "Con 2'157 ore di sole, il Ticino ha la maggiore irradiazione solare di tutta la Svizzera. Una installazione da 5 kWp produce 6'000–6'500 kWh/anno, quasi il doppio rispetto ai cantoni del nord." },
      { question: "Quali sussidi esistono in Ticino nel 2026?", answer: "Potete cumulare la Rimunerazione Unica (RU) federale tramite Pronovo con il contributo cantonale ticinese. Aggiungendo la deduzione fiscale al 100%, i costi netti si riducono fino al 40%." },
      { question: "Come funzionano le Comunità Elettriche Locali (CEL) in Ticino?", answer: "Dal 2026, le CEL permettono di condividere l'energia solare prodotta con i vicini, riducendo i costi di rete fino al 40%. Particolarmente efficaci nei condomini e nelle zone residenziali dense come Lugano e Locarno." },
      { question: "I pannelli resistono alle grandinate tipiche del Ticino?", answer: "Sì. Tutti i pannelli installati dai nostri partner sono certificati Classe 4 o 5 per la resistenza alla grandine (chicchi fino a 45 mm). Le garanzie coprono 25–30 anni, incluse condizioni meteorologiche estreme." },
      { question: "Quanto dura l'ammortamento di un impianto fotovoltaico in Ticino?", answer: "Grazie all'irraggiamento eccezionale e agli incentivi, il periodo di ammortamento in Ticino è di 4–6 anni – il più breve della Svizzera. Dopo, ogni anno di produzione è puro risparmio o guadagno." },
    ],
    testimonial: {
      initials: 'MB',
      name: 'Marco Bernasconi',
      quote: "A Lugano il sole splende 2'000 ore l'anno – è una ricchezza che stavo sprecando. Da quando ho installato il mio impianto tramite PVPro, la bolletta elettrica è quasi a zero. In 5 anni sarà già ammortizzato.",
    },
  },

};