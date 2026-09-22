import type { CantonGuide } from './types';

const sources = [
  {
    id: 'sg-energy-law',
    authority: 'Kanton St. Gallen',
    title: 'sGS 741.1 Energiegesetz, Art. 5b: Eigenstromerzeugung bei Neubauten',
    url: 'https://www.gesetzessammlung.sg.ch/app/de/texts_of_law/741.1',
  },
  {
    id: 'sg-energy-ordinance',
    authority: 'Kanton St. Gallen',
    title: 'sGS 741.11 Energieverordnung: Bemessung und Ersatzabgabe',
    url: 'https://www.gesetzessammlung.sg.ch/app/de/texts_of_law/741.11',
  },
  {
    id: 'sg-solar-procedure',
    authority: 'Kanton St. Gallen',
    title: 'Solaranlagen melden: kantonales Meldeformular und Erläuterungen',
    url: 'https://www.sg.ch/umwelt-natur/energie/formulare-und-hilfsmittel/solaranlagen-melden.html',
  },
  {
    id: 'sg-solar-fire-safety',
    authority: 'Kanton St. Gallen',
    title: 'Erläuterungen zum Meldeformular: Brandschutz bei Batteriespeichern',
    url: 'https://www.sg.ch/content/dam/sgch/umwelt-natur/energie/20260318_Erlaeuterungen_Meldeformular_Solaranlagen.pdf',
  },
  {
    id: 'sg-energy-funding',
    authority: 'Kanton St. Gallen',
    title: 'Sonderkredit zur Finanzierung der Energieförderung 2024–2030',
    url: 'https://www.sg.ch/news/sgch_allgemein/2023/11/klima--kitas--kreisgericht--kanton-empfiehlt-dreimal-ja.html',
  },
  {
    id: 'sg-agricultural-battery-funding',
    authority: 'Kanton St. Gallen, Landwirtschaftliche Kreditgenossenschaft',
    title: 'Ausgeschöpfte Beiträge für Batteriespeicher in der Landwirtschaft',
    url: 'https://www.sg.ch/news/sgch_landwirtschaftliche-kreditgenossenschaft/2025/12/aenderungen-bei-gewaehrung-von-beitraegen-und-investitionskredit.html',
  },
  {
    id: 'stadt-sg-energy-fund',
    authority: 'Stadt St. Gallen',
    title: 'Energiefonds: Förderung von Photovoltaikanlagen ab 2025',
    url: 'https://www.stadt.sg.ch/news/stsg_medienmitteilungen/2024/06/foerderung-von-photovoltaik-anlagen-sinkt-per-2025.html',
  },
  {
    id: 'pronovo-eiv',
    authority: 'Pronovo',
    title: 'Einmalvergütung für Photovoltaikanlagen: KLEIV, GREIV und HEIV',
    url: 'https://pronovo.ch/de/foerderung/photovoltaik',
  },
  {
    id: 'pronovo-tariff-calculator',
    authority: 'Pronovo',
    title: 'Tarifrechner für Photovoltaik',
    url: 'https://pronovo.ch/de/services/tarifrechner',
  },
] as const;

export const guide: CantonGuide = {
  id: 'st-gallen',
  path: '/solaranlage-st-gallen',
  canton: 'St. Gallen',
  title: 'Solaranlage St. Gallen: Eigenstrompflicht bei Neubauten | PvPro.ch',
  description:
    'Neubauten erfüllen die St. Galler Eigenstrompflicht mit Photovoltaik, zusätzlicher Energieeffizienz, einer ZEV-Lösung oder einer Ersatzabgabe.',
  h1: 'Solaranlage im Kanton St. Gallen: Eigenstrompflicht und Ersatzabgabe 2026',
  intro: [
    'Für Neubauten im Kanton St. Gallen gilt seit 1. Juli 2021 eine Eigenstromvorgabe. Sie lässt sich mit Photovoltaik, zusätzlicher Energieeffizienz, einer gemeinsamen ZEV-Lösung oder einer Ersatzabgabe erfüllen.',
    'Bei einer PV-Lösung sind 10 W pro m² Energiebezugsfläche (EBF) erforderlich, höchstens jedoch 30 kW pro Gebäude. Die EBF ist die beheizte, für die Energieberechnung relevante Gebäudefläche; 30 kW begrenzen nur die Pflicht, nicht die freiwillig installierte Anlagenleistung.',
  ],
  quickFacts: [
    {
      value: '10 W/m² EBF',
      label: 'Leistung für die PV-Erfüllung',
      sourceIds: ['sg-energy-law', 'sg-energy-ordinance'],
    },
    {
      value: 'Max. 30 kW',
      label: 'Geforderte Leistung pro Gebäude',
      sourceIds: ['sg-energy-law', 'sg-energy-ordinance'],
    },
    {
      value: 'CHF 2’700/kWp',
      label: 'Ersatzabgabe für die erforderliche Leistung',
      sourceIds: ['sg-energy-ordinance'],
    },
    {
      value: '30 Tage',
      label: 'Frist im Meldeverfahren',
      sourceIds: ['sg-solar-procedure'],
    },
  ],
  ctaAfterSection: 'erfuellung',
  sections: [
    {
      id: 'erfuellung',
      title: 'Vier Wege zur Erfüllung',
      paragraphs: [
        'Wählen Sie für den Energienachweis des Neubaus eine der vier zulässigen Lösungen und weisen Sie diese im Bauprojekt klar aus. Die Wege sind Alternativen; sie müssen nicht nacheinander durchlaufen werden.',
      ],
      sourceIds: ['sg-energy-law', 'sg-energy-ordinance'],
      module: {
        kind: 'compliance-options',
        title: 'Vier Wege zur Erfüllung',
        intro:
          'Vergleichen Sie die vier eigenständigen Möglichkeiten anhand des Gebäudes und der geplanten Nutzung.',
        items: [
          {
            title: 'Eigenstrom mit Photovoltaik',
            value: '10 W/m² EBF, max. 30 kW',
            text: 'Die erforderliche PV-Leistung beträgt 10 W pro m² Energiebezugsfläche und ist bei 30 kW pro Gebäude gedeckelt.',
            detail:
              'Die Obergrenze betrifft die verlangte Leistung. Eine freiwillig grössere Anlage bleibt möglich.',
            sourceIds: ['sg-energy-law', 'sg-energy-ordinance'],
          },
          {
            title: 'Zusätzliche Energieeffizienz',
            value: '−5 kWh/m² pro Jahr',
            text: 'Statt der Eigenstromproduktion kann der gewichtete Energiebedarf zusätzlich um 5 kWh pro m² und Jahr reduziert werden.',
            detail:
              'Die Effizienzlösung muss im Energienachweis des konkreten Bauprojekts belegt werden.',
            sourceIds: ['sg-energy-law', 'sg-energy-ordinance'],
          },
          {
            title: 'Gemeinsamer Eigenverbrauch im ZEV',
            value: 'Gemeinsame Erfüllung',
            text: 'Die Anforderung kann mit einer konformen Lösung innerhalb eines Zusammenschlusses zum Eigenverbrauch erfüllt werden.',
            detail:
              'Ein ZEV organisiert die gemeinsame Produktion und den gemeinsamen Eigenverbrauch mehrerer Beteiligter.',
            sourceIds: ['sg-energy-law', 'sg-energy-ordinance'],
          },
          {
            title: 'Ersatzabgabe',
            value: 'CHF 2’700 je erforderlichem kWp',
            text: 'Anstelle der vorgeschriebenen Eigenstromlösung kann eine Ersatzabgabe von CHF 2’700 pro kWp der erforderlichen Leistung gewählt werden.',
            detail:
              'Die Wahl wird im Baugesuch deklariert; die Abgabe wird zusammen mit den Baubewilligungsgebühren erhoben.',
            sourceIds: ['sg-energy-law', 'sg-energy-ordinance'],
          },
        ],
      },
    },
    {
      id: 'erweiterungen',
      title: 'Kleine Erweiterungen können ausgenommen sein',
      paragraphs: [
        'Prüfen Sie bei einer Erweiterung zuerst die neu geschaffene EBF. Die Vorgabe gilt nicht, wenn diese Fläche unter 50 m² liegt.',
        'Eine Ausnahme besteht ebenfalls, wenn die neue EBF höchstens 20% der bestehenden EBF und gleichzeitig höchstens 1’000 m² beträgt. Für die zweite Ausnahme müssen beide Grenzen eingehalten sein.',
      ],
      sourceIds: ['sg-energy-ordinance'],
    },
    {
      id: 'meldung',
      title: 'Meldeverfahren oder Baubewilligung klären',
      paragraphs: [
        'Melden Sie eine genügend angepasste Dach- oder Fassadenanlage 30 Tage vor der geplanten Ausführung bei der zuständigen Behörde. Das Meldeverfahren ist die Meldung anstelle eines normalen Baubewilligungsverfahrens.',
        'Wenn die Behörde innerhalb von 30 Tagen weder die Überführung in ein ordentliches oder vereinfachtes Verfahren noch eine Ablehnung mitteilt, darf das gemeldete Projekt ausgeführt werden. Freistehende Anlagen, bestimmte Anlagen entlang von Strassen sowie Vorhaben an geschützten Gebäuden oder in geschützten Bereichen benötigen weiterhin eine Baubewilligung.',
      ],
      sourceIds: ['sg-solar-procedure'],
    },
    {
      id: 'batterie',
      title: 'Batteriespeicher nach Kapazität einordnen',
      paragraphs: [
        'Klären Sie bei einem Speicher zuerst die Kapazität und ob die Solaranlage selbst nur meldepflichtig ist. Bei einer lediglich gemeldeten Solaranlage benötigt ein Batteriespeicher bis 100 kWh keine besondere Brandschutzbewilligung; über 100 kWh ist eine brandschutztechnische Bewilligung über die Gemeinde beziehungsweise die Gebäudeversicherung St. Gallen (GVSG) erforderlich.',
        'Diese Brandschutzregel ist kein Förderprogramm. Ein allgemeiner kantonaler Beitrag für Batteriespeicher in Einfamilienhäusern ist nicht ausgewiesen. Die Mittel des besonderen Landwirtschaftsprogramms für Batteriespeicher sind ausgeschöpft; seit 1. Januar 2026 werden dort keine neuen Gesuche berücksichtigt.',
      ],
      sourceIds: ['sg-solar-fire-safety', 'sg-agricultural-battery-funding'],
    },
    {
      id: 'foerderung',
      title: 'PV-Förderung über Pronovo und Gemeinden getrennt prüfen',
      paragraphs: [
        'Beantragen Sie die ordentliche PV-Förderung beim Bund über Pronovo und prüfen Sie kommunale Beiträge separat. Die Einmalvergütung (EIV) ist die bundesweite Einmalzahlung: KLEIV gilt für Anlagen unter 100 kW, GREIV ab 100 kW und HEIV für Anlagen ohne Eigenverbrauch in den dafür vorgesehenen Kategorien.',
        'Der Grundbeitrag der EIV beträgt seit 1. April 2024 CHF 0. Die individuelle Leistung, die Anlagenart und mögliche Boni bestimmen den Beitrag; ein bestimmter Prozentsatz ist nicht garantiert. Berechnen Sie den Bundesbeitrag deshalb mit dem Pronovo-Tarifrechner.',
        'Der kantonale Sonderkredit von CHF 59 Millionen für 2024 bis 2030 finanziert ein Portfolio verschiedener Energie- und Klimamassnahmen und ist kein eigener PV-Fonds. Als kommunales Beispiel führt die Stadt St. Gallen einen Energiefonds: Beim veröffentlichten Beispiel einer 10-kWp-Anlage entspricht der städtische Zusatzbeitrag der Hälfte des KLEIV-Leistungsbeitrags. Das ist ein Beitrag der Stadt, nicht des Kantons.',
      ],
      sourceIds: [
        'pronovo-eiv',
        'pronovo-tariff-calculator',
        'sg-energy-funding',
        'stadt-sg-energy-fund',
      ],
    },
    {
      id: 'kosten',
      title: 'Kosten und Projektumfang vergleichbar machen',
      paragraphs: [
        'Vergleichen Sie Offerten mit derselben erforderlichen Leistung und demselben Leistungsumfang. Lassen Sie PV-Module, Unterkonstruktion, Gerüst, Elektroarbeiten, Netzanschluss und einen optionalen Speicher getrennt ausweisen; Pronovo und kommunale Beiträge gehören ebenfalls in separate Positionen.',
        'Mit PvPro.ch können Eigentümer kostenlos und unverbindlich bis zu drei passende Solarofferten vergleichen.',
      ],
      bullets: [
        'EBF und daraus berechnete Pflichtleistung',
        'Gewählte Erfüllungsvariante im Energienachweis',
        'Melde- oder Bewilligungsverfahren',
        'Förderannahmen separat vom Anlagenpreis',
      ],
      sourceIds: [
        'sg-energy-law',
        'sg-energy-ordinance',
        'sg-solar-procedure',
        'pronovo-eiv',
      ],
    },
  ],
  faqs: [
    {
      question: 'Wie gross muss die Eigenstromanlage bei einem Neubau sein?',
      answer: '10 W/m² EBF, maximal 30 kW Pflicht.',
      sourceIds: ['sg-energy-ordinance'],
    },
    {
      question: 'Kann ich statt PV eine Abgabe bezahlen?',
      answer: 'Ja, CHF 2’700 pro erforderlichem kWp.',
      sourceIds: ['sg-energy-law', 'sg-energy-ordinance'],
    },
    {
      question: 'Kann ich die Pflicht über höhere Energieeffizienz erfüllen?',
      answer:
        'Ja, mit einer zusätzlichen Reduktion des gewichteten Energiebedarfs um 5 kWh/m²/Jahr.',
      sourceIds: ['sg-energy-law', 'sg-energy-ordinance'],
    },
    {
      question: 'Wie lange dauert das Meldeverfahren?',
      answer: '30 Tage.',
      sourceIds: ['sg-solar-procedure'],
    },
    {
      question: 'Fördert der Kanton meine normale PV-Anlage direkt?',
      answer:
        'Die reguläre PV-Förderung läuft primär über Pronovo; kommunale Programme sind separat zu prüfen.',
      sourceIds: ['pronovo-eiv', 'stadt-sg-energy-fund'],
    },
  ],
  sources: [...sources],
};