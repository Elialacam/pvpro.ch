import type { CantonGuide } from './types';

const sources = [
  {
    id: 'gl-fp-2026',
    authority: 'Kanton Glarus',
    title: 'Energie-Förderprogramm 2026, Version 3.2',
    url: 'https://www.gl.ch/public/upload/assets/65023/Flyer2026Apr.pdf?fp=1',
  },
  {
    id: 'gl-conditions',
    authority: 'Kanton Glarus',
    title: 'Förderbedingungen, Stand Juli 2026',
    url: 'https://www.gl.ch/public/upload/assets/67004/F%C3%B6rderbedingungen.pdf?fp=1',
  },
  {
    id: 'gl-energy-law',
    authority: 'Kanton Glarus',
    title: 'Verordnung über den Vollzug der Energiegesetzgebung',
    url: 'https://gesetze.gl.ch/app/de/texts_of_law/VII%20E%2F1%2F2%2F1',
  },
  {
    id: 'gl-programme-status',
    authority: 'Kanton Glarus',
    title: 'Förderprogramm – Kanton Glarus',
    url: 'https://www.gl.ch/verwaltung/bau-und-umwelt/umwelt-wald-und-energie/umweltschutz-und-energie/energie/foerderprogramm.html/773',
  },
  {
    id: 'gl-solar-procedure',
    authority: 'Kanton Glarus, Fachstelle Energie',
    title: 'Energietreff 2025 – Solaranlagen und Meldeverfahren',
    url: 'https://www.gl.ch/public/upload/assets/59548/Pr%C3%A4sentationen_Energietreff_2025.pdf?fp=2',
  },
  {
    id: 'pronovo-faq',
    authority: 'Pronovo AG im Auftrag des Bundes',
    title: 'Häufige Fragen zur Einmalvergütung (EIV) und Solarförderung Schweiz',
    url: 'https://pronovo.ch/de/foerderung/photovoltaik/haeufige-fragen/',
  },
] as const;

export const guide: CantonGuide = {
  id: 'glarus',
  path: '/solaranlage-glarus',
  canton: 'Glarus',
  title: 'Solaranlage Glarus 2026: Förderung für steile PV | PvPro.ch',
  description:
    'Photovoltaik in Glarus: CHF 250/kWp für förderfähige steile Anlagen, Eigenstrom bei Neubauten, Bewilligung und Förderung 2026.',
  h1: 'Solaranlage in Glarus: Förderung für steile Anlagen 2026',
  intro: [
    'In Glarus kann eine steile PV-Fläche ab 75° zusätzlich kantonal gefördert werden. Der Beitrag beträgt CHF 250/kWp, höchstens CHF 15’000, wenn die offiziellen Bedingungen erfüllt sind.',
    'Bei Neubauten zählt ausserdem die Eigenstromregel mit 10 W/m² Energiebezugsfläche und höchstens 30 kWp. Bundesförderung über Pronovo und der Glarner Beitrag sind getrennt zu prüfen.',
  ],
  quickFacts: [
    {
      value: '≥75°',
      label: 'Mindestneigung für den kantonalen Neigungswinkelbeitrag',
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
    },
    {
      value: 'CHF 250/kWp',
      label: 'Kantonaler Beitrag für förderfähige PV-Anlagenteile',
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
    },
    {
      value: 'CHF 15’000',
      label: 'Maximaler kantonaler Beitrag',
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
    },
    {
      value: '10 W/m²',
      label: 'Eigenstrom-Mindestleistung bei Neubauten',
      sourceIds: ['gl-energy-law'],
    },
  ],
  sections: [
    {
      id: 'neigungscheck',
      title: 'Warum 75° in Glarus wichtig sind',
      paragraphs: [
        'Ja, eine PV-Fläche ab 75° kann für den kantonalen Neigungswinkelbeitrag infrage kommen. Die Förderung gilt aber nur für die förderfähigen Anlagenteile und nach den Bedingungen des aktuellen Programms.',
      ],
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
      module: {
        kind: 'inclination-check',
        title: '75° – lohnt sich meine steile Fläche?',
        intro: 'Messen Sie die Modulneigung zur waagrechten Ebene. Danach prüfen Sie den passenden Förderweg und die vollständigen Programmbedingungen.',
        items: [
          {
            title: 'PV-Fläche ≥75°',
            value: '≥75°',
            text: 'Ja: Den kantonalen Neigungswinkelbeitrag prüfen – CHF 250/kWp für förderfähige PV-Anlagenteile, höchstens CHF 15’000.',
            detail: 'Der Beitrag ist an die offiziellen Förderbedingungen gebunden.',
            sourceIds: ['gl-fp-2026', 'gl-conditions'],
          },
          {
            title: 'PV-Fläche <75°',
            value: '<75°',
            text: 'Nein: Der Glarner Beitrag für die steile Neigung greift nicht. Prüfen Sie stattdessen die reguläre Bundesförderung über Pronovo und andere passende Wege.',
            detail: 'Eine andere Förderfähigkeit muss separat beurteilt werden.',
            sourceIds: ['gl-fp-2026', 'pronovo-faq'],
          },
        ],
      },
    },
    {
      id: 'foerderung',
      title: 'Wie hoch ist der kantonale Beitrag?',
      paragraphs: [
        'Der kantonale Beitrag beträgt CHF 250 pro kWp für förderfähige PV-Anlagenteile mit mindestens 75° Neigung. Der Maximalbetrag liegt bei CHF 15’000.',
        'kWp beschreibt die Nennleistung einer PV-Anlage unter festgelegten Standardbedingungen. Für die Berechnung zählt nicht automatisch jede Modulfläche der Anlage: Die förderfähigen Teile und die übrigen Bedingungen des Programms müssen geprüft werden.',
        'Bei der Massnahme GL-31 wird das Gesuch erst nach dem definitiven Pronovo-Entscheid eingereicht. Es ist deshalb nicht richtig, für GL-31 pauschal eine Einreichung vor Baubeginn anzunehmen; der konkrete Ablauf richtet sich nach den Förderbedingungen.',
        'Erhöhte Beiträge für die Gebäudehülle gelten nur für Massnahmen, die fristgerecht bis Ende 2027 fertiggestellt werden. Daraus folgt keine allgemeine PV-Förderung für das Jahr 2027.',
      ],
      sourceIds: ['gl-fp-2026', 'gl-conditions', 'pronovo-faq', 'gl-programme-status'],
    },
    {
      id: 'neubau',
      title: 'Eigenstrompflicht bei Neubauten',
      paragraphs: [
        'Ja. Bei Neubauten muss ein Teil des Stroms selbst produziert werden: grundsätzlich 10 W pro Quadratmeter Energiebezugsfläche (EBF), höchstens jedoch 30 kWp.',
        'Die Energiebezugsfläche ist die Gebäudefläche, die für die energetische Berechnung massgebend ist. kWp ist die elektrische Nennleistung der Module unter Standardbedingungen; die beiden Angaben messen also nicht dasselbe.',
        'Rechtlich geht es um eigene Stromproduktion und nicht um eine pauschale Pflicht, jedes bestehende Haus mit Photovoltaik nachzurüsten. Photovoltaik ist in der Praxis ein naheliegender Weg, die Eigenstromregel zu erfüllen.',
        'Wenn die vorgeschriebene Eigenstromleistung nicht realisiert wird, kann im gesetzlichen Kontext eine Ersatzabgabe von CHF 2’000 pro nicht realisiertem kW relevant werden. Ob und wie sie im konkreten Vorhaben greift, muss anhand der gesetzlichen Voraussetzungen geprüft werden.',
      ],
      sourceIds: ['gl-energy-law', 'gl-fp-2026'],
    },
    {
      id: 'solarthermie',
      title: 'PV und Solarthermie kombinieren',
      paragraphs: [
        'Ja, eine Kombination kann mit CHF 2’000 unterstützt werden, wenn die Voraussetzungen der Massnahme M-08 erfüllt sind und mindestens 2 kWp Photovoltaik vorhanden sind.',
        'Solarthermie erzeugt Wärme, Photovoltaik Strom. Der Beitrag ist deshalb kein allgemeiner PV-Bonus: Die Kombination muss gleichzeitig umgesetzt werden und die Bedingungen von M-08 müssen im Projekt eingehalten werden.',
      ],
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
    },
    {
      id: 'bewilligung',
      title: 'Meldung oder Baubewilligung?',
      paragraphs: [
        'Nicht jede Solaranlage braucht ein vollständiges Baugesuch. Eine genügend angepasste Anlage kann je nach Fall über ein vereinfachtes Meldeverfahren laufen.',
        'Schutzobjekte und besondere Situationen müssen separat geprüft werden. Klären Sie deshalb vor dem Auftrag mit der zuständigen Stelle, ob eine Meldung reicht oder ein ordentliches Verfahren nötig ist.',
        'Ein Meldeverfahren ist keine Förderzusage. Es beantwortet die baurechtliche Frage, während Pronovo und die kantonalen Förderstellen die Förderbedingungen separat beurteilen.',
      ],
      sourceIds: ['gl-solar-procedure', 'gl-energy-law'],
    },
    {
      id: 'pronovo',
      title: 'Bundesförderung über Pronovo',
      paragraphs: [
        'Die wichtigste bundesweite Förderung für Photovoltaik läuft über Pronovo. Für die reguläre Einmalvergütung (EIV) gilt aktuell eine Mindestleistung von 2 kW; die konkrete Höhe hängt vom Projekt und den Bundesbedingungen ab.',
        'Zusätzliche Bundesboni sind freiwillige, an Bedingungen geknüpfte Förderwege. Dazu gehören zum Beispiel ein Neigungswinkelbonus ab 75°, ein Parkflächenbonus für qualifizierende Anlagen ab 100 kW und seit 2026 ein Winterstrombonus unter besonderen Bedingungen für Anlagen ab 100 kW.',
        'Der Glarner Beitrag von CHF 250/kWp ist davon getrennt. EIV, kantonale Beiträge und mögliche Bundesboni dürfen nicht ohne Prüfung einfach zu einer garantierten Gesamtsumme addiert werden.',
      ],
      sourceIds: ['pronovo-faq', 'gl-fp-2026', 'gl-conditions'],
    },
    {
      id: 'kosten',
      title: 'Was kostet eine Solaranlage hier?',
      paragraphs: [
        'Der Kanton veröffentlicht keinen festen Preis für Solaranlagen. Entscheidend sind Dach, Anlagengrösse, Elektroarbeiten und Ausstattung.',
        'Vergleichen Sie mehrere Offerten für dasselbe Projekt. Achten Sie dabei auf die einzelnen Positionen und darauf, ob Fördergesuche, Netzanschluss und Nebenarbeiten im Leistungsumfang enthalten sind.',
      ],
      bullets: [
        'Dachfläche, Dachform und nutzbare Modulfläche',
        'Anlagengrösse, Modulneigung und gewählte Module',
        'Gerüst, Zugang und Baustellenlogistik',
        'Elektroarbeiten, Zähler und Netzanschluss',
        'Wechselrichter',
        'Batteriespeicher und Ladeinfrastruktur',
        'Eigenverbrauch, Wärmepumpe und Elektromobilität',
        'Installateur, Leistungsumfang und Garantien',
      ],
      sourceIds: [],
    },
    {
      id: 'passt',
      title: 'Für wen ist Solar in Glarus besonders interessant?',
      paragraphs: [
        'Besonders interessant ist eine Prüfung bei einer steilen Dach- oder Fassadenfläche ab 75°, bei einem Neubau oder wenn PV und Solarthermie gemeinsam geplant werden. In diesen Fällen können kantonale Regeln und Förderwege die frühe Projektplanung beeinflussen.',
        'Planen Sie Dach, Statik, Elektroanschluss, Eigenverbrauch und das passende Verfahren gemeinsam. Eine Offerte sollte klar zeigen, welche Anlagenteile den Neigungswinkel erreichen und welche Förderbedingungen noch offen sind.',
      ],
      sourceIds: ['gl-fp-2026', 'gl-conditions', 'gl-energy-law', 'gl-solar-procedure'],
    },
  ],
  faqs: [
    {
      question: 'Wie hoch ist die PV-Förderung für steile Anlagen?',
      answer:
        'Für förderfähige PV-Anlagenteile mit mindestens 75° Neigung beträgt der kantonale Beitrag CHF 250/kWp. Der Maximalbetrag liegt bei CHF 15’000. Beide Angaben gelten nur, wenn die weiteren Programmbedingungen erfüllt sind.',
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
    },
    {
      question: 'Welche Neigung brauche ich?',
      answer:
        'Die förderfähigen PV-Anlagenteile müssen mindestens 75° geneigt sein. Der Winkel wird zur waagrechten Ebene gemessen. Bei einer Neigung unter 75° greift dieser Glarner Neigungswinkelbeitrag nicht.',
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
    },
    {
      question: 'Wie hoch ist der maximale Beitrag?',
      answer:
        'Der kantonale Beitrag ist auf CHF 15’000 begrenzt. Der Betrag von CHF 250/kWp wird nur auf die förderfähigen Anlagenteile nach den aktuellen Bedingungen angewendet. Eine grössere Gesamtanlage führt deshalb nicht automatisch zu einem höheren Beitrag.',
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
    },
    {
      question: 'Gilt bei Neubauten eine Eigenstrompflicht?',
      answer:
        'Ja. Neubauten müssen grundsätzlich 10 W/m² Energiebezugsfläche selbst erzeugten Strom vorsehen, wobei höchstens 30 kWp verlangt werden. Das ist eine Eigenstromregel und keine allgemeine PV-Pflicht für bestehende Häuser.',
      sourceIds: ['gl-energy-law', 'gl-fp-2026'],
    },
    {
      question: 'Was passiert, wenn die Eigenstrompflicht nicht erfüllt wird?',
      answer:
        'Im gesetzlichen Kontext kann eine Ersatzabgabe von CHF 2’000 pro nicht realisiertem kW relevant werden. Ob sie für Ihr Vorhaben geschuldet ist, hängt von den gesetzlichen Voraussetzungen ab und muss im Einzelfall geprüft werden.',
      sourceIds: ['gl-energy-law'],
    },
    {
      question: 'Kann PV mit Solarthermie kombiniert gefördert werden?',
      answer:
        'Ja, unter der Massnahme M-08 kann ein Kombinationsbeitrag von CHF 2’000 infrage kommen. Dafür müssen die Programmvoraussetzungen erfüllt sein, die Umsetzung gleichzeitig erfolgen und mindestens 2 kWp PV vorhanden sein.',
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
    },
    {
      question: 'Brauche ich eine Baubewilligung?',
      answer:
        'Nicht immer. Eine genügend angepasste Solaranlage kann je nach Fall über ein vereinfachtes Meldeverfahren laufen; Schutzobjekte und Sonderfälle müssen separat geprüft werden. Vor dem Auftrag sollte die zuständige Stelle das Verfahren für das konkrete Gebäude bestätigen.',
      sourceIds: ['gl-solar-procedure', 'gl-energy-law'],
    },
    {
      question: 'Wann muss ich das Gesuch für GL-31 einreichen?',
      answer:
        'Das Gesuch für GL-31 wird nach dem definitiven Entscheid von Pronovo eingereicht. Für diese Massnahme darf deshalb nicht pauschal ein Zeitpunkt vor Baubeginn behauptet werden; massgebend sind die aktuellen Glarner Förderbedingungen.',
      sourceIds: ['gl-conditions', 'pronovo-faq'],
    },
    {
      question: 'Was bedeutet die Mindestleistung von 2 kW bei Pronovo?',
      answer:
        'Die reguläre Einmalvergütung des Bundes über Pronovo gilt aktuell ab einer Anlagenleistung von 2 kW. Weitere Bundesboni, etwa für Neigung, Parkflächen oder Winterstrom, haben eigene Voraussetzungen und sind keine automatisch addierbaren Beträge.',
      sourceIds: ['pronovo-faq'],
    },
  ],
  sources: [...sources],
};