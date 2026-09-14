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
  h1: 'Solaranlage in Appenzell Ausserrhoden: Förderung 2026 und neue Regeln ab 2027',
  intro: [
    'Appenzell Ausserrhoden ist 2026 ein Sonderfall: Für eine geeignete, netzgekoppelte Photovoltaikanlage kann der Kanton zusätzlich zur definitiven Einmalvergütung (EIV) des Bundes beitragen. Der kM-21-Beitrag beträgt höchstens 50 % der EIV, nicht 50 % der Investitionskosten. Entscheidend sind Inbetriebnahme, Leistung, Netzanschluss und Pronovo-Verfügung.',
    'Ab 2027 soll die Förderung stärker auf Winterstrom und Wärmedämmung ausgerichtet werden. Diese Logik ist vom 2026-Regime zu trennen.',
  ],
  quickFacts: [
    {
      value: 'max. 50 %',
      label: 'der definitiven EIV für Anlagen mit Inbetriebnahme ab 1. September 2025',
      sourceIds: ['ar-km21'],
    },
    {
      value: 'CHF 100’000',
      label: 'höchster kantonaler Beitrag pro Vorhaben',
      sourceIds: ['ar-km21'],
    },
    {
      value: 'mind. 2 kWp',
      label: 'für eine netzgekoppelte, beitragsberechtigte Anlage',
      sourceIds: ['ar-km21'],
    },
    {
      value: 'Gesuch 2026',
      label: 'nach Inbetriebnahme und rechtskräftiger Pronovo-Verfügung',
      sourceIds: ['ar-km21'],
    },
  ],
  sections: [
    {
      id: 'timeline',
      title: '2026 → Übergang → ab 2027',
      paragraphs: [
        'Für Inbetriebnahmen vom 1. Januar 2022 bis 31. August 2025 nennt kM-21 maximal 100 % der Bundes-EIV. Ab 1. September 2025 gilt aktuell maximal 50 % der definitiven EIV; beide Beiträge sind auf CHF 100’000 pro Vorhaben begrenzt.',
        'Für Anlagen vom 1. Januar bis 31. Dezember 2026, die weder winterstromoptimiert noch mit Wärmedämmung kombiniert sind, läuft die Übergangsfrist bis Ende 2027. Das Gesuch muss spätestens dann eingereicht sein; die übrigen Voraussetzungen bleiben massgebend.',
        'Ab 1. Januar 2027 sind mindestens 75° Modulneigung, CHF 300/kW zusätzlich zum nationalen Neigungswinkelbonus und CHF 90–150/m² für eine Dämmkombination vorgesehen. Das Gesuch soll vor Baubeginn eingereicht werden.',
      ],
      sourceIds: ['ar-km21', 'ar-2027'],
      module: {
        kind: 'timeline',
        title: 'Welche Regel gilt für mein Inbetriebnahmedatum?',
        intro: 'Die Daten trennen die bisherige, aktuelle und angekündigte Förderlogik.',
        items: [
          {
            title: '1. Januar 2022 bis 31. August 2025',
            value: 'max. 100 % EIV',
            text: 'Frühere Förderperiode mit maximal 100 % der definitiven Bundes-EIV.',
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
            text: 'Anlagen aus 2022–2026 ohne Winterstromoptimierung oder Dämmkombination können bis Ende 2027 einreichen.',
            sourceIds: ['ar-2027'],
          },
          {
            title: 'Ab 1. Januar 2027',
            value: 'vor Baubeginn',
            text: 'Vorgesehen: ab 75°, 300 CHF/kW zusätzlich und 90–150 CHF/m² bei Dämmung.',
            sourceIds: ['ar-2027'],
          },
        ],
      },
      notice: {
        title: '2026 und 2027 nicht vermischen',
        text: 'Die 50-%-Regel gehört zum aktuellen kM-21-Regime. Die Winterstrom- und Dämmkombinationen sind als Regelung ab 2027 ausgewiesen; vor der Planung ist die dann gültige Vollzugsversion zu kontrollieren.',
        status: 'future',
      },
    },
    {
      id: 'regeln',
      title: 'Wer erhält den kantonalen Beitrag 2026?',
      paragraphs: [
        'Beitragsberechtigt sind neue, netzgekoppelte Anlagen und Erweiterungen im Kanton ab 2 kWp, sofern sie eine EIV des Bundes erhalten. Für das kantonale Gesuch braucht es die rechtskräftige Pronovo-Verfügung. Reiner Ersatz, reine Sanierung sowie Unterhalt und Reparatur sind nicht beitragsberechtigt.',
        'HEIV ohne Eigenverbrauch und PV-Auktionsanlagen sind ausgeschlossen. Die bei einer Eigenstrompflicht verlangte Mindest-Anlagengrösse wird nicht zusätzlich vergütet. Drittbeiträge können den Kantonsbeitrag reduzieren; Gemeindebeiträge sind ausgenommen. Der Höhenbonus ab 1’500 m ü. M. wird nicht erhöht.',
      ],
      bullets: [
        'Netzanschluss und mindestens 2 kWp sind erforderlich.',
        'Die definitive Pronovo-Verfügung ist Berechnungsgrundlage.',
        'HEIV ohne Eigenverbrauch und PV-Auktionsanlagen sind ausgeschlossen.',
        'Drittbeiträge können den Kantonsbeitrag kürzen; Gemeindebeiträge bilden die Ausnahme.',
      ],
      sourceIds: ['ar-km21', 'pronovo-eiv'],
    },
    {
      id: 'statistik',
      title: 'Warum AR auf Winterstrom ausrichtet',
      paragraphs: [
        '2024 produzierte Ausserrhoden rund 80 GWh erneuerbaren Strom, entsprechend rund 24 % des kantonalen Verbrauchs. 77 % davon stammten aus Sonnenenergie. Ende 2024 waren rund 10 % der geeigneten Dächer und Fassaden mit PV belegt.',
        'Bis 2035 sollen mindestens 40 % des Stromverbrauchs aus erneuerbaren Energien im Kanton stammen. Dachlastige Anlagen liefern etwa drei Viertel im Sommerhalbjahr; steilere Anlagen verschieben Produktion in den Winter. Das ist keine Ertrags- oder Fördergarantie.',
      ],
      sourceIds: ['ar-energy-statistics', 'ar-energy-concept'],
      module: {
        kind: 'statistics',
        title: 'Ausserrhoder Ausgangslage',
        intro: 'Die Zahlen sind Kontext für die Förderausrichtung, keine Renditeprognose.',
        items: [
          {
            title: 'Erneuerbare Stromproduktion 2024',
            value: 'rund 80 GWh',
            text: 'Erneuerbarer Strom im Kanton 2024.',
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
            text: 'Anteil Sonnenenergie an dieser Produktion.',
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
            text: 'Dachlastig etwa drei Viertel im Sommer; steiler bedeutet mehr Winterstrom.',
            sourceIds: ['ar-energy-concept'],
          },
        ],
      },
    },
    {
      id: 'foerderung',
      title: 'Förderung in Appenzell Ausserrhoden 2026',
      paragraphs: [
        'Zuerst bestimmt Pronovo die Bundes-EIV. Darauf kann kM-21 2026 maximal 50 % der definitiven EIV bis CHF 100’000 pro Vorhaben ergänzen. Die Prozentzahl bezieht sich nicht auf die Installationskosten und ist keine Zusage für jedes Projekt.',
        'Das kantonale Gesuch erfolgt 2026 online nach Inbetriebnahme und rechtskräftiger Pronovo-Verfügung. Für die ab 2027 vorgesehene Winterstrom- oder Dämmförderung ist ein Gesuch vor Baubeginn einzuplanen.',
      ],
      sourceIds: ['ar-km21', 'ar-2027', 'pronovo-eiv'],
    },
    {
      id: 'bewilligung',
      title: 'Bewilligung, Planung und Einreichung',
      paragraphs: [
        'Die Förderanmeldung ersetzt keine baurechtliche Abklärung. Vor dem Auftrag sind Dachform, Schutzinteressen, Netzanschluss und Gemeindezuständigkeit zu klären. 2026 folgt das Fördergesuch nach Abschluss; für die ab 2027 angekündigten Varianten vor Baubeginn.',
        'Projekt- und Anlagendaten, Inbetriebnahme, Netzanschluss und definitive EIV-Verfügung gehören zusammen. Erweiterungen, Ersatzfälle und Drittbeiträge müssen separat eingeordnet werden.',
      ],
      sourceIds: ['ar-km21', 'ar-2027'],
    },
    {
      id: 'kosten',
      title: 'Kosten und Planung: acht Faktoren statt eines Pauschalpreises',
      paragraphs: [
        'Ein Preis hängt von Dachfläche, Leistung, Dachart, Gerüst, Elektroarbeiten, Speicher, Eigenverbrauch und Installateur ab. Auch Zugang, Zähler, Netzanschluss, Dachzustand und Dämmung können die Offerte verändern.',
        'Vergleichen Sie neben dem Endbetrag Modulfläche, Wechselrichter, Montage, Elektropositionen, Speicheroption, Garantien und Gesuchszuständigkeit.',
      ],
      sourceIds: ['ar-km21', 'ar-2027'],
    },
    {
      id: 'fuer-wen',
      title: 'Für wen lohnt sich eine Solaranlage hier besonders?',
      paragraphs: [
        'Die Ausgangslage ist besonders klar bei einem geeigneten Dach, verlässlichem Eigenverbrauch, Netzanschluss und einer EIV-fähigen Anlage ab 2 kWp. Bei hohem Eigenverbrauch sind HEIV-Ausschlussregel und Gebäudelast vor der Dimensionierung zu prüfen.',
        'Steile Dächer oder Fassaden können zur angekündigten Winterstromlogik passen. Eine geplante Dämmung ist als Gesamtprojekt zu bewerten; reine Ersatz-, Reparatur- oder Sanierungsarbeiten sind im kM-21 nicht beitragsberechtigt.',
      ],
      sourceIds: ['ar-km21', 'ar-2027'],
    },
  ],
  faqs: [
    {
      question: 'Wie hoch ist der kantonale PV-Beitrag 2026?',
      answer:
        'Ab 1. September 2025 sind maximal 50 % der definitiven EIV und höchstens CHF 100’000 pro Vorhaben möglich, nicht 50 % der Investitionskosten. Für 1. Januar 2022 bis 31. August 2025 nennt kM-21 maximal 100 % der EIV.',
      sourceIds: ['ar-km21'],
    },
    {
      question: 'Wann muss ich das Gesuch einreichen?',
      answer:
        '2026 nach Inbetriebnahme und rechtskräftiger definitiver Pronovo-Verfügung. Für die ab 2027 vorgesehene Winterstrom- oder Dämmförderung soll das Gesuch vor Baubeginn vorliegen.',
      sourceIds: ['ar-km21', 'ar-2027'],
    },
    {
      question: 'Welche Anlagen sind ausgeschlossen?',
      answer:
        'Ausgeschlossen sind reine Ersatz- und Sanierungsfälle, HEIV ohne Eigenverbrauch sowie PV-Auktionsanlagen. Die gesetzlich verlangte Mindest-Anlagengrösse wird bei einer Eigenstrompflicht nicht zusätzlich vergütet.',
      sourceIds: ['ar-km21'],
    },
    {
      question: 'Was ändert sich am 1. Januar 2027?',
      answer:
        'Die Förderung soll Winterstrom und PV mit Wärmedämmung priorisieren: mindestens 75°, CHF 300/kW zusätzlich zum nationalen Neigungswinkelbonus sowie CHF 90–150/m² bei Dämmung. Das Gesuch soll vor Baubeginn eingereicht werden.',
      sourceIds: ['ar-2027'],
    },
    {
      question: 'Was bedeutet Modulneigung ≥75°?',
      answer:
        'Gemeint ist der Winkel zur waagrechten Ebene. Ab 75° gilt eine Anlage im angekündigten AR-Ansatz als winterstromoptimiert. Das konkrete Projekt ist mit der gültigen Vollzugshilfe zu prüfen.',
      sourceIds: ['ar-2027'],
    },
    {
      question: 'Wie funktioniert die Übergangsfrist bis Ende 2027?',
      answer:
        'Anlagen vom 1. Januar 2022 bis 31. Dezember 2026 ohne Winterstromoptimierung und Dämmkombination können bis Ende 2027 einreichen. Das ist keine pauschale Auszahlungsgarantie; die übrigen Voraussetzungen bleiben massgebend.',
      sourceIds: ['ar-2027', 'ar-km21'],
    },
  ],
  sources: [...sources],
};