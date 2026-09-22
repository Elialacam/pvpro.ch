import type { CantonGuide } from './types';

const sources = [
  {
    id: 'sz-energy-ordinance',
    authority: 'Kanton Schwyz',
    title: 'Kantonale Energieverordnung, § 24d',
    url: 'https://www.sz.ch/public/upload/assets/32457/420_111.pdf?fp=24#page=9',
  },
  {
    id: 'sz-own-electricity',
    authority: 'Kanton Schwyz',
    title: 'Eigenstromerzeugungspflicht und kantonaler Solarkataster',
    url: 'https://www.sz.ch/umweltdepartement/amt-fuer-umwelt-und-energie/energie-und-klima/energieversorgung/solarenergie.html/8756-8758-8802-9447-9453-10708-11115-11093',
  },
  {
    id: 'sz-solar-guide-2026',
    authority: 'Kanton Schwyz',
    title: 'Planungshilfe für Solaranlagen am Gebäude: eBau SZ und Meldefrist',
    url: 'https://www.sz.ch/public/upload/assets/75112/Planungshilfe_fuer_Solaranlagen_am_Gebaeude.pdf',
  },
  {
    id: 'sz-energy-funding-2026',
    authority: 'Kanton Schwyz',
    title: 'Energieförderprogramm 2026',
    url: 'https://www.sz.ch/verwaltung/umweltdepartement/amt-fuer-umwelt-und-energie/energie-und-klima/foerderprogramme.html/8756-8758-8802-9447-9453-10708-11116',
  },
  {
    id: 'sz-agricultural-battery',
    authority: 'Kanton Schwyz, Amt für Landwirtschaft',
    title: 'Investitionshilfen: Batteriespeicher zur Speicherung nachhaltiger Energie',
    url: 'https://www.sz.ch/volkswirtschaftsdepartement/amt-fuer-landwirtschaft/bauliche-massnahmen/oekonomiegebaeude/beitragsgesuch-batteriespeicher-zur-speicherung-nachhaltiger-energie.html/8756-8758-8802-10373-11060-11206-11186-13336',
  },
  {
    id: 'pronovo-eiv-2026',
    authority: 'Pronovo',
    title: 'Einmalvergütung für Photovoltaikanlagen',
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
  id: 'schwyz',
  path: '/solaranlage-schwyz',
  canton: 'Schwyz',
  title: 'Solaranlage Schwyz: Solarkataster und Eigenstrompflicht | PvPro.ch',
  description:
    'Bei Neubauten im Kanton Schwyz gelten grundsätzlich 10 W/m² Eigenstromleistung, höchstens 30 kW. Der kantonale Solarkataster zeigt mögliche Ausnahmen.',
  h1: 'Solaranlage im Kanton Schwyz: Eigenstrompflicht, Solarkataster und Förderung 2026',
  intro: [
    'Bei Neubauten und Ersatzneubauten im Kanton Schwyz gilt seit 1. Mai 2022 grundsätzlich eine Eigenstrompflicht. Ob sie für Ihr Gebäude greift, entscheidet sich aber erst nach der Prüfung des kantonalen Solarkatasters und der vorgesehenen Ausnahmen.',
    'Ist die Pflicht anwendbar, sind 10 W Leistung pro m² Energiebezugsfläche einzuplanen, höchstens jedoch 30 kW Pflichtleistung. Eine Ersatzabgabe ist nicht möglich.',
  ],
  quickFacts: [
    {
      value: '10 W/m² EBF',
      label: 'Vorgabe bei anwendbarer Eigenstrompflicht',
      sourceIds: ['sz-energy-ordinance'],
    },
    {
      value: '30 kW',
      label: 'Obergrenze der verlangten Leistung',
      sourceIds: ['sz-energy-ordinance'],
    },
    {
      value: '1’120 kWh/m²/Jahr',
      label: 'Strahlungsschwelle gemäss Solarkataster',
      sourceIds: ['sz-energy-ordinance', 'sz-own-electricity'],
    },
    {
      value: '20 Tage',
      label: 'Meldung vor Baubeginn, wenn das Meldeverfahren gilt',
      sourceIds: ['sz-solar-guide-2026'],
    },
  ],
  ctaAfterSection: 'pflicht-check',
  sections: [
    {
      id: 'pflicht-check',
      title: 'Gilt die Eigenstrompflicht für mein Gebäude?',
      paragraphs: [
        'Prüfen Sie zuerst die Art des Bauvorhabens und danach den Standort im kantonalen Solarkataster. Erst wenn diese Einordnung und die Ausnahmen geklärt sind, lässt sich die erforderliche Leistung berechnen.',
      ],
      sourceIds: ['sz-energy-ordinance', 'sz-own-electricity'],
      module: {
        kind: 'solar-cadastre-check',
        title: 'Gilt die Eigenstrompflicht für mein Gebäude?',
        intro:
          'Gehen Sie die fünf Schritte der Reihe nach durch. Eine Ausnahme beendet die Prüfung der Pflicht für das betreffende Vorhaben.',
        items: [
          {
            title: '1. Neubau oder Ersatzneubau einordnen',
            value: 'Seit 1.5.2022',
            text: 'Die Eigenstrompflicht betrifft grundsätzlich Neubauten und Ersatzneubauten. Bei einer Erweiterung gelten eigene Ausnahmegrenzen, die in Schritt 4 geprüft werden.',
            sourceIds: ['sz-energy-ordinance', 'sz-own-electricity'],
          },
          {
            title: '2. Solarkataster und Globalstrahlung prüfen',
            value: '≥ 1’120 kWh/m²/Jahr',
            text: 'Der kantonale Solarkataster ist die massgebende Grundlage. Liegt das Gebäude in einem Gebiet mit weniger als 1’120 kWh Globalstrahlung pro m² und Jahr, gilt die Ausnahme.',
            detail:
              'Der Wert bezeichnet einen jährlichen Strahlungsertrag pro Fläche und keine Anlagenleistung.',
            sourceIds: ['sz-energy-ordinance', 'sz-own-electricity'],
          },
          {
            title: '3. Minergie-Standard klären',
            value: 'Minergie = Ausnahme',
            text: 'Erreicht der Neubau den Minergie-Standard, ist er von der Vorgabe nach § 24d kEnV ausgenommen.',
            sourceIds: ['sz-energy-ordinance'],
          },
          {
            title: '4. Erweiterung gegen beide Regeln prüfen',
            value: '< 50 m² oder ≤ 20% und ≤ 1’000 m²',
            text: 'Eine Erweiterung ist ausgenommen, wenn die neue Energiebezugsfläche unter 50 m² liegt. Ebenfalls ausgenommen ist sie, wenn sie höchstens 20% der bestehenden Energiebezugsfläche und gleichzeitig höchstens 1’000 m² beträgt.',
            detail:
              'Bei der zweiten Variante müssen die 20%-Grenze und die Grenze von 1’000 m² zusammen eingehalten sein.',
            sourceIds: ['sz-energy-ordinance'],
          },
          {
            title: '5. Pflichtleistung berechnen',
            value: '10 W/m² EBF · höchstens 30 kW Pflicht',
            text: 'Multiplizieren Sie die Energiebezugsfläche mit 10 W/m². Die EBF ist die beheizte relevante Gebäudefläche; verlangt werden können pro Gebäude höchstens 30 kW.',
            detail:
              'Die 30 kW begrenzen nur die verlangte Pflichtleistung. Eine freiwillig grössere PV-Anlage bleibt möglich.',
            sourceIds: ['sz-energy-ordinance'],
          },
        ],
      },
    },
    {
      id: 'erfuellung',
      title: 'Pflicht erfüllen: eigene Anlage oder ZEV',
      paragraphs: [
        'Ist Ihr Gebäude pflichtig, muss eine konforme Eigenstromlösung umgesetzt werden; eine Ersatzabgabe als Zahlung anstelle der vorgeschriebenen Lösung gibt es in Schwyz nicht.',
        'Für eine Gesamtüberbauung kann die Vorgabe auch gemeinsam in einem Zusammenschluss zum Eigenverbrauch, kurz ZEV, erfüllt werden. Ein ZEV organisiert den gemeinsamen Eigenverbrauch, sofern dafür eine neue oder erweiterte Stromerzeugungsanlage vorhanden ist. Eine beliebige bestehende Anlage eines Nachbarn genügt deshalb nicht automatisch.',
      ],
      sourceIds: ['sz-energy-ordinance', 'sz-own-electricity'],
      notice: {
        title: 'Keine Ersatzabgabe',
        text: 'Die Eigenstrompflicht kann im Kanton Schwyz nicht durch eine Ersatzabgabe abgelöst werden.',
        status: 'important',
      },
    },
    {
      id: 'meldung',
      title: 'Solaranlage über eBau SZ melden',
      paragraphs: [
        'Erfüllt die Anlage die Vorgaben zu Standort und Integration, reichen Sie die Baumeldung über eBau SZ mindestens 20 Tage vor Baubeginn ein. Das Meldeverfahren ist die Meldung statt einer normalen Baubewilligung.',
        'Die Gemeinde am Anlagenstandort ist die erste Anlaufstelle. Sie kann innerhalb der 20 Tage mitteilen, dass doch ein vereinfachtes oder ordentliches Bewilligungsverfahren nötig ist; ohne eine solche Mitteilung kann nach Ablauf der Wartefrist begonnen werden.',
        'Bereiten Sie Situationsplan, Feuerwehrplan beziehungsweise Orientierung, Dachaufsicht mit Abständen, Dachquerschnitt mit Aufbauhöhe sowie technische Datenblätter und Produktbeschreibungen vor. Je nach Projekt kommt eine Blendbeurteilung hinzu; bei bestimmten Fassadenanlagen über 11 m Höhe ist zudem ein PV-Brandschutzkonzept erforderlich.',
      ],
      sourceIds: ['sz-solar-guide-2026'],
    },
    {
      id: 'foerderung',
      title: 'PV-Förderung kommt regulär vom Bund',
      paragraphs: [
        'Für eine normale Photovoltaikanlage auf einem Wohnhaus gibt es keinen allgemeinen kantonalen PV-Beitrag. Zuständig ist die Bundesförderung über Pronovo; allfällige Programme der Gemeinde sind separat bei der Standortgemeinde zu prüfen. Solarthermie kann dagegen Teil des kantonalen Förderprogramms sein.',
        'Die Einmalvergütung, kurz EIV, wird individuell berechnet. Pronovo unterscheidet KLEIV für Anlagen unter 100 kW, GREIV ab 100 kW und HEIV für Anlagen ohne Eigenverbrauch in den dafür vorgesehenen Kategorien. Der Grundbeitrag beträgt seit 1. April 2024 CHF 0; Leistung, Anlagetyp und anwendbare Boni bestimmen den Beitrag, nicht ein garantiertes Prozentversprechen.',
        'Der ausgeschöpfte Förderansatz des Amts für Landwirtschaft für Batterien im Zusammenhang mit nachhaltiger Energie ist kein Speicherbeitrag für ein gewöhnliches Einfamilienhaus. Der Kanton nimmt dafür derzeit keine neuen Gesuche an.',
      ],
      sourceIds: [
        'sz-energy-funding-2026',
        'sz-agricultural-battery',
        'pronovo-eiv-2026',
        'pronovo-tariff-calculator',
      ],
    },
    {
      id: 'ablauf',
      title: 'So bereiten Sie das Projekt praktisch vor',
      paragraphs: [
        'Starten Sie mit Bauart, Solarkataster und EBF, bevor Sie eine Anlage dimensionieren lassen. So basiert die Offerte auf der tatsächlich geltenden Pflicht und nicht auf einer pauschalen Annahme.',
      ],
      bullets: [
        'Neubau, Ersatzneubau oder Erweiterung eindeutig einordnen',
        'Standort und Globalstrahlung im kantonalen Solarkataster prüfen',
        'EBF dokumentieren, Ausnahmen klären und Pflichtleistung berechnen',
        'Anlage planen und das Verfahren vorab mit der Gemeinde abstimmen',
        'Unterlagen über eBau SZ mindestens 20 Tage vor Baubeginn einreichen',
        'Pronovo-Beitrag getrennt mit dem offiziellen Tarifrechner bestimmen',
      ],
      sourceIds: [
        'sz-energy-ordinance',
        'sz-own-electricity',
        'sz-solar-guide-2026',
        'pronovo-eiv-2026',
        'pronovo-tariff-calculator',
      ],
    },
    {
      id: 'kosten',
      title: 'Kosten und Planung vergleichbar machen',
      paragraphs: [
        'Vergleichen Sie Angebote mit derselben Pflichtleistung, derselben geplanten Anlagengrösse und einem klar abgegrenzten Leistungsumfang. Relevant sind insbesondere Dachgeometrie, Unterkonstruktion, Gerüst, Elektroarbeiten, Netzanschluss, Dokumentation und optionale Speicherpositionen.',
        'Lassen Sie die Pronovo-Annahme separat ausweisen und behandeln Sie kommunale Beiträge nur nach bestätigter Prüfung. Mit PvPro.ch können Eigentümer kostenlos und unverbindlich bis zu drei passende Solarofferten auf einer einheitlichen Projektgrundlage vergleichen.',
      ],
      sourceIds: ['sz-energy-ordinance', 'pronovo-eiv-2026', 'pronovo-tariff-calculator'],
    },
  ],
  faqs: [
    {
      question: 'Muss jeder Neubau in Schwyz eine PV-Anlage haben?',
      answer:
        'Nein. Entscheidend sind unter anderem Standort im Solarkataster, Globalstrahlung und Ausnahmen nach §24d kEnV.',
      sourceIds: ['sz-energy-ordinance', 'sz-own-electricity'],
    },
    {
      question: 'Wie gross muss die Anlage sein?',
      answer:
        'Mindestens 10 W pro m² EBF, wobei nicht mehr als 30 kW verlangt werden.',
      sourceIds: ['sz-energy-ordinance'],
    },
    {
      question: 'Kann ich stattdessen eine Ersatzabgabe bezahlen?',
      answer: 'Nein.',
      sourceIds: ['sz-own-electricity'],
    },
    {
      question: 'Wie früh muss ich eine Solaranlage melden?',
      answer:
        'In der Regel mindestens 20 Tage vor Baubeginn, wenn das Meldeverfahren anwendbar ist.',
      sourceIds: ['sz-solar-guide-2026'],
    },
    {
      question: 'Fördert der Kanton Schwyz Photovoltaik?',
      answer:
        'Normale PV-Anlagen werden kantonal nicht direkt gefördert; dafür gibt es die Bundesförderung über Pronovo.',
      sourceIds: ['sz-energy-funding-2026', 'pronovo-eiv-2026'],
    },
  ],
  sources: [...sources],
};