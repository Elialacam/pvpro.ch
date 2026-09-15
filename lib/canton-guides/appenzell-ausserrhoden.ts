import type { CantonGuide } from './types';

const sources = [
  {
    id: 'ar-km21',
    authority: 'Kanton Appenzell Ausserrhoden',
    title: 'kM-21 Photovoltaikanlage',
    url: 'https://ar.ch/verwaltung/departement-bau-und-volkswirtschaft/amt-fuer-umwelt/energie/foerderung/kantonale-foerderung/km-21-photovoltaikanlage-1-1',
  },
  {
    id: 'ar-2027',
    authority: 'Kanton Appenzell Ausserrhoden',
    title: 'Kantonale Förderung und Anpassung ab 1. Januar 2027',
    url: 'https://ar.ch/verwaltung/departement-bau-und-volkswirtschaft/amt-fuer-umwelt/energie/foerderung/kantonale-foerderung',
  },
  {
    id: 'ar-energy-statistics',
    authority: 'Kanton Appenzell Ausserrhoden',
    title: 'Solarenergie und Solarpotenziale',
    url: 'https://ar.ch/verwaltung/departement-bau-und-volkswirtschaft/amt-fuer-umwelt/energie/erneuerbare-energien/solarenergie',
  },
  {
    id: 'ar-energy-concept',
    authority: 'Kanton Appenzell Ausserrhoden',
    title: 'Kantonales Energiekonzept 2026–2035',
    url: 'https://ar.ch/verwaltung/kantonskanzlei/rechtsdienst/politische-rechte/vernehmlassungen/abgeschlossene-vernehmlassungen/2026',
  },
  {
    id: 'pronovo-eiv',
    authority: 'Pronovo AG im Auftrag des Bundes',
    title: 'Förderung von Photovoltaikanlagen',
    url: 'https://pronovo.ch/de/foerderung/photovoltaik',
  },
] as const;

export const guide: CantonGuide = {
  id: 'appenzell-ausserrhoden',
  path: '/solaranlage-appenzell-ausserrhoden',
  canton: 'Appenzell Ausserrhoden',
  title: 'Solaranlage Appenzell Ausserrhoden: Förderung 2026/27 | PvPro.ch',
  description:
    'PV-Förderung in Appenzell Ausserrhoden: 50 % Zusatz zur EIV 2026, Übergangsregel und neue Winterstrom-Förderung ab 2027.',
  h1: 'Solaranlage in Appenzell Ausserrhoden: Förderung 2026 und Änderungen ab 2027',
  intro: [
    '2026 kann Appenzell Ausserrhoden eine Solaranlage zusätzlich zur Bundesförderung unterstützen. Ab 2027 soll die Förderung stärker auf Winterstrom und Wärmedämmung ausgerichtet werden. Welche Regel gilt, hängt vom Zeitpunkt Ihres Projekts ab.',
  ],
  quickFacts: [
    {
      value: '2026',
      label: 'Bis zu 50 % der definitiven Bundesförderung zusätzlich',
      sourceIds: ['ar-km21'],
    },
    {
      value: '2027',
      label: 'Förderung stärker auf Winterstrom ausgerichtet',
      sourceIds: ['ar-2027'],
    },
    {
      value: '≥75°',
      label: 'Neigung für die Winterstrom-Förderung ab 2027',
      sourceIds: ['ar-2027'],
    },
    {
      value: 'CHF 300/kW',
      label: 'Vorgesehener Beitrag für Winterstrom-Anlagen ab 2027',
      sourceIds: ['ar-2027'],
    },
    {
      value: 'Vor Baubeginn',
      label: 'Gesuch künftig im Voraus einreichen',
      sourceIds: ['ar-2027'],
    },
  ],
  sections: [
    {
      id: 'timeline',
      title: '2026 → Übergang → ab 2027',
      paragraphs: [
        'Entscheidend ist der Zeitpunkt, ab dem die Anlage Strom liefert. Vom 1. Januar 2022 bis 31. August 2025 waren nach kM-21 maximal 100 % des einmaligen Beitrags des Bundes (Einmalvergütung, EIV) möglich; ab 1. September 2025 sind es aktuell maximal 50 %, in beiden Fällen höchstens CHF 100’000 pro Vorhaben.',
        'Für Anlagen, die vom 1. Januar bis 31. Dezember 2026 erstmals Strom liefern, gilt eine Übergangsfrist bis Ende 2027, wenn sie weder winterstromoptimiert noch mit Wärmedämmung kombiniert sind. Die 50 % beziehen sich auf den einmaligen Bundesbeitrag, nicht auf die Investitionskosten. Das Gesuch muss spätestens Ende 2027 eingereicht sein; die übrigen Voraussetzungen bleiben massgebend.',
        'Ab 1. Januar 2027 sind mindestens 75° Modulneigung, CHF 300/kW zusätzlich zum nationalen Neigungswinkelbonus und CHF 90–150/m² für eine Dämmkombination vorgesehen. Das Gesuch soll dann vor Baubeginn eingereicht werden.',
      ],
      sourceIds: ['ar-km21', 'ar-2027'],
      module: {
        kind: 'timeline',
        title: 'Welche Regel gilt für den Zeitpunkt, ab dem die Anlage Strom liefert?',
        intro: 'Die Daten zeigen, welche Förderung zum jeweiligen Zeitpunkt gilt.',
        items: [
          {
            title: '1. Januar 2022 bis 31. August 2025',
            value: 'max. 100 % EIV',
            text: 'Frühere Förderperiode: maximal 100 % der definitiven Bundes-EIV.',
            sourceIds: ['ar-km21'],
          },
          {
            title: 'Ab 1. September 2025 bis Ende 2026',
            value: 'max. 50 % EIV',
            text: 'Aktuelle 2026-Regel für berechtigte Anlagen; höchstens CHF 100’000 pro Vorhaben.',
            sourceIds: ['ar-km21'],
          },
          {
            title: 'Übergang bis Ende 2027',
            value: 'Gesuch spätestens Ende 2027',
            text: 'Anlagen aus 2022–2026 ohne Winterstromoptimierung oder Dämmkombination können bis Ende 2027 ein Gesuch einreichen.',
            sourceIds: ['ar-2027'],
          },
          {
            title: 'Ab 1. Januar 2027',
            value: 'vor Baubeginn',
            text: 'Vorgesehen: mindestens 75°, 300 CHF/kW zusätzlich und 90–150 CHF/m² bei Dämmung.',
            sourceIds: ['ar-2027'],
          },
        ],
      },
      notice: {
        title: '2026 und 2027 nicht vermischen',
        text: 'Die 50-%-Regel gehört zur aktuellen kM-21-Förderung. Winterstrom und Dämmung sind ab 2027 vorgesehen; vor der Planung ist die dann gültige Anleitung zu prüfen.',
        status: 'future',
      },
    },
    {
      id: 'regeln',
      title: 'Wer erhält den kantonalen Beitrag 2026?',
      paragraphs: [
        'Den kantonalen Beitrag 2026 erhalten Sie für eine neue Anlage zur Stromerzeugung aus Sonnenlicht (Photovoltaikanlage, PV-Anlage) oder eine Erweiterung im Kanton, die ans Stromnetz angeschlossen ist, mindestens 2 kWp leistet und Bundesförderung erhält. Für das Gesuch brauchen Sie den endgültigen Förderentscheid von Pronovo (offiziell: rechtskräftige Pronovo-Verfügung); ein reiner Ersatz, eine reine Sanierung, Unterhalt und Reparaturen sind ausgeschlossen.',
        'Eine hohe Einmalvergütung ohne Eigenverbrauch (HEIV ohne Eigenverbrauch) und PV-Auktionsanlagen sind ausgeschlossen. Wenn eine Eigenstrompflicht eine Mindestgrösse verlangt, wird dieser Teil nicht zusätzlich vergütet. Beiträge von Dritten können den Kantonsbeitrag reduzieren, Gemeindebeiträge sind ausgenommen; der Höhenbonus ab 1’500 m ü. M. wird nicht erhöht.',
      ],
      bullets: [
        'Netzanschluss und mindestens 2 kWp sind erforderlich.',
        'Die definitive Pronovo-Verfügung ist die Berechnungsgrundlage.',
        'HEIV ohne Eigenverbrauch und PV-Auktionsanlagen sind ausgeschlossen.',
        'Drittbeiträge können den Kantonsbeitrag kürzen; Gemeindebeiträge bilden die Ausnahme.',
      ],
      sourceIds: ['ar-km21', 'pronovo-eiv'],
    },
    {
      id: 'statistik',
      title: 'Warum AR auf Winterstrom ausrichtet',
      paragraphs: [
        'AR richtet die Förderung stärker auf Winterstrom aus, weil steilere Anlagen mehr Strom in den Winter verschieben. 2024 produzierte Ausserrhoden rund 80 GWh (Gigawattstunden) erneuerbaren Strom, rund 24 % des kantonalen Verbrauchs; 77 % davon stammten aus Sonnenenergie.',
        'Ende 2024 waren rund 10 % der geeigneten Dächer und Fassaden mit PV belegt. Bis 2035 sollen mindestens 40 % des kantonalen Stromverbrauchs aus erneuerbaren Energien stammen; dachlastige Anlagen liefern etwa drei Viertel im Sommerhalbjahr. Das ist keine Ertrags- oder Fördergarantie.',
      ],
      sourceIds: ['ar-energy-statistics', 'ar-energy-concept'],
      module: {
        kind: 'statistics',
        title: 'Ausserrhoder Ausgangslage',
        intro: 'Die Zahlen erklären die Förderausrichtung, sind aber keine Renditeprognose.',
        items: [
          {
            title: 'Erneuerbare Stromproduktion 2024',
            value: 'rund 80 GWh',
            text: 'Erneuerbarer Strom im Kanton im Jahr 2024.',
            sourceIds: ['ar-energy-concept'],
          },
          {
            title: 'Anteil am kantonalen Verbrauch',
            value: 'rund 24 %',
            text: 'Anteil am kantonalen Stromverbrauch.',
            sourceIds: ['ar-energy-concept'],
          },
          {
            title: 'Anteil Sonnenenergie',
            value: '77 %',
            text: 'Anteil der Sonnenenergie an dieser Produktion.',
            sourceIds: ['ar-energy-concept'],
          },
          {
            title: 'Geeignete Dächer und Fassaden',
            value: 'rund 10 % belegt',
            text: 'Stand Ende 2024.',
            sourceIds: ['ar-energy-statistics', 'ar-energy-concept'],
          },
          {
            title: 'Kantonales Ziel 2035',
            value: 'mind. 40 %',
            text: 'Ziel für den kantonalen Stromverbrauch.',
            sourceIds: ['ar-energy-concept'],
          },
          {
            title: 'Sommerhalbjahr bei dachlastigen Anlagen',
            value: 'etwa drei Viertel',
            text: 'Dachlastige Anlagen liefern etwa drei Viertel im Sommer; steilere Anlagen liefern mehr Winterstrom.',
            sourceIds: ['ar-energy-concept'],
          },
        ],
      },
    },
    {
      id: 'foerderung',
      title: 'Förderung in Appenzell Ausserrhoden 2026',
      paragraphs: [
        '2026 kann kM-21 höchstens 50 % der definitiven Bundes-EIV ergänzen, maximal CHF 100’000 pro Vorhaben. Die 50 % beziehen sich nicht auf die Installationskosten und sind keine Zusage für jedes Projekt.',
        'Pronovo bestimmt zuerst die Bundes-EIV. Das kantonale Gesuch erfolgt 2026 online nach Inbetriebnahme und rechtskräftiger Pronovo-Verfügung; für die ab 2027 vorgesehene Winterstrom- oder Dämmförderung ist ein Gesuch vor Baubeginn einzuplanen.',
      ],
      sourceIds: ['ar-km21', 'ar-2027', 'pronovo-eiv'],
    },
    {
      id: 'bewilligung',
      title: 'Bewilligung, Planung und Einreichung',
      paragraphs: [
        'Die Förderanmeldung ersetzt keine baurechtliche Abklärung. Vor dem Auftrag sind Dachform, Schutzinteressen, Netzanschluss und Gemeindezuständigkeit zu klären; 2026 folgt das Fördergesuch nach Abschluss, für die ab 2027 angekündigten Varianten vor Baubeginn.',
        'Projekt- und Anlagendaten, Inbetriebnahme, Netzanschluss und definitive EIV-Verfügung gehören zusammen. Erweiterungen, Ersatzfälle und Drittbeiträge müssen separat eingeordnet werden.',
      ],
      sourceIds: ['ar-km21', 'ar-2027'],
    },
    {
      id: 'kosten',
      title: 'Was kostet eine Solaranlage hier?',
      paragraphs: [
        'Der Kanton veröffentlicht keinen festen PV-Preis. Entscheidend sind vor allem Dach, Anlagengrösse und gewünschte Ausstattung.',
        'Auch Zugang, Zähler, Netzanschluss, Dachzustand und Dämmung können die Offerte verändern. Vergleichen Sie neben dem Endbetrag Modulfläche, Montage, Elektropositionen, Speicheroption, Garantien und Gesuchszuständigkeit.',
        'Der sinnvollste Vergleich ist deshalb nicht ein pauschaler Online-Preis, sondern mehrere Offerten für dasselbe Projekt.',
      ],
      bullets: [
        'Dachfläche und Dachform',
        'Leistung der Anlage',
        'Gerüst',
        'Elektroarbeiten',
        'Batteriespeicher',
        'Eigenverbrauch',
        'Wechselrichter',
        'Installateur / Leistungsumfang',
      ],
      sourceIds: ['ar-km21', 'ar-2027'],
    },
    {
      id: 'fuer-wen',
      title: 'Für wen lohnt sich eine Solaranlage hier besonders?',
      paragraphs: [
        'Besonders klar ist die Ausgangslage bei einem geeigneten Dach, verlässlichem Eigenverbrauch, Netzanschluss und einer EIV-fähigen Anlage ab 2 kWp. Bei hohem Eigenverbrauch sind die HEIV-Ausschlussregel und die Gebäudelast vor der Dimensionierung zu prüfen.',
        'Steile Dächer oder Fassaden können zur angekündigten Winterstromlogik passen. Eine geplante Dämmung ist als Gesamtprojekt zu bewerten; reine Ersatz-, Reparatur- oder Sanierungsarbeiten sind im kM-21 nicht beitragsberechtigt.',
      ],
      sourceIds: ['ar-km21', 'ar-2027'],
    },
  ],
  faqs: [
    {
      question: 'Wie hoch ist der kantonale PV-Beitrag 2026?',
      answer:
        'Ab 1. September 2025 sind maximal 50 % der definitiven EIV möglich, höchstens CHF 100’000 pro Vorhaben. Das sind nicht 50 % der Investitionskosten. Für den Zeitraum vom 1. Januar 2022 bis 31. August 2025 nennt kM-21 maximal 100 % der EIV.',
      sourceIds: ['ar-km21'],
    },
    {
      question: 'Wann muss ich das Gesuch einreichen?',
      answer:
        '2026 reichen Sie das Gesuch nach dem ersten Stromliefern und dem endgültigen Förderentscheid von Pronovo ein. Für die ab 2027 vorgesehene Winterstrom- oder Dämmförderung soll das Gesuch vor Baubeginn vorliegen.',
      sourceIds: ['ar-km21', 'ar-2027'],
    },
    {
      question: 'Welche Anlagen sind ausgeschlossen?',
      answer:
        'Ausgeschlossen sind reine Ersatz- und Sanierungsfälle, eine hohe Einmalvergütung ohne Eigenverbrauch (HEIV ohne Eigenverbrauch) sowie PV-Auktionsanlagen. Die gesetzlich verlangte Mindest-Anlagengrösse wird bei einer Eigenstrompflicht nicht zusätzlich vergütet.',
      sourceIds: ['ar-km21'],
    },
    {
      question: 'Was ändert sich am 1. Januar 2027?',
      answer:
        'Ab 1. Januar 2027 soll die Förderung Winterstrom und PV mit Wärmedämmung priorisieren: vorgesehen sind mindestens 75°, CHF 300/kW zusätzlich zum nationalen Neigungswinkelbonus sowie CHF 90–150/m² bei Dämmung. Das Gesuch soll vor Baubeginn eingereicht werden.',
      sourceIds: ['ar-2027'],
    },
    {
      question: 'Was bedeutet Modulneigung ≥75°?',
      answer:
        'Gemeint ist der Winkel zur waagrechten Ebene. Ab 75° gilt eine Anlage im angekündigten AR-Ansatz als winterstromoptimiert. Prüfen Sie das konkrete Projekt mit der dann gültigen Vollzugshilfe.',
      sourceIds: ['ar-2027'],
    },
    {
      question: 'Wie funktioniert die Übergangsfrist bis Ende 2027?',
      answer:
        'Anlagen vom 1. Januar 2022 bis 31. Dezember 2026 ohne Winterstromoptimierung und Dämmkombination können bis Ende 2027 ein Gesuch einreichen. Das ist keine pauschale Auszahlungsgarantie; die übrigen Voraussetzungen bleiben massgebend.',
      sourceIds: ['ar-2027', 'ar-km21'],
    },
  ],
  sources: [...sources],
};