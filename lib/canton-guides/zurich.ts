import type { CantonGuide } from './types';

const sources = [
  { id: 'zh-bbv', authority: 'Kanton Zürich', title: 'Besondere Bauverordnung I: Eigenstromerzeugung', url: 'https://www.zhlex.zh.ch/Erlass.html?Open&Ordnr=700.21' },
  { id: 'zh-vollzug', authority: 'Kanton Zürich', title: 'Vollzugsordner Energie: Eigenstromerzeugung bei Neubauten', url: 'https://www.zh.ch/content/dam/zhweb/bilder-dokumente/themen/planen-bauen/bauvorschriften/bauvorschriften-im-energiebereich/energetische-bauvorschriften/vollzugsordner/vollzugsordner_energie_kanton-zh_Ausgabe_1_2023.pdf' },
  { id: 'zh-vorlage-6062', authority: 'Kanton Zürich', title: 'Vorlage 6062: Nutzung geeigneter Dächer für Solarenergie', url: 'https://www.kantonsrat.zh.ch/geschaefte/geschaeft/?id=ec16ee9593a744ab950f053a301d6f76' },
  { id: 'zh-meldeverfahren', authority: 'Kanton Zürich', title: 'Solaranlagen: Melde- und Bewilligungsverfahren', url: 'https://www.zh.ch/de/planen-bauen/baubewilligung/baueingabe-verfahren/meldeverfahren-solaranlagen-waermepumpen-eladestationen.html' },
  { id: 'zh-foerderprogramm', authority: 'Kanton Zürich', title: 'Förderprogramm Energie 2026', url: 'https://www.zh.ch/content/dam/zhweb/bilder-dokumente/themen/umwelt-tiere/energie/energieberatung-und-energiefoerderung/ktzh_foerderprogramm_2026.pdf' },
  { id: 'zh-landwirtschaft-batterie', authority: 'Kanton Zürich', title: 'Investitionshilfe 2026 für landwirtschaftliche Batteriespeicher', url: 'https://www.zh.ch/de/planen-bauen/bauvorschriften/bauen-an-besonderer-lage/bauen-ausserhalb-von-bauzonen/inhalt/landwirtschaftliche-bauten/investitionshilfen.html' },
  { id: 'zh-steuern', authority: 'Kantonales Steueramt Zürich', title: 'Steuerliche Behandlung von Photovoltaik, Batteriespeicher und Ladestation', url: 'https://www.zh.ch/de/steuern-finanzen/steuern/treuhaender/steuerbuch/steuerbuch-definition/zstb-30-8.html' },
  { id: 'stadt-pv', authority: 'Stadt Zürich', title: 'Förderbeiträge für Photovoltaikanlagen ab 1. August 2026', url: 'https://www.stadt-zuerich.ch/de/aktuell/medienmitteilungen/2026/06/stadt-zuerich-erhoeht-beitraege-fuer-pv-anlagen-und-foerdert-batteriespeicher.html' },
  { id: 'stadt-batterie', authority: 'Stadt Zürich', title: 'Stadt Zürich erhöht PV-Beiträge und fördert Batteriespeicher', url: 'https://www.stadt-zuerich.ch/de/aktuell/medienmitteilungen/2026/06/stadt-zuerich-erhoeht-beitraege-fuer-pv-anlagen-und-foerdert-batteriespeicher.html' },
] as const;

export const guide: CantonGuide = {
  id: 'zurich',
  path: '/solaranlage-zurich',
  canton: 'Zürich',
  title: 'Solaranlage Zürich: Kantonale Pflicht, städtische Förderung | PvPro.ch',
  description: 'Im Kanton Zürich gelten für Neubauten 10 W/m² Eigenstromleistung. Die erhöhten PV- und Batteriebeiträge ab August 2026 gelten nur in der Stadt Zürich.',
  h1: 'Solaranlage im Kanton Zürich: Pflicht, Meldeverfahren und Förderung 2026',
  intro: [
    'Im Kanton Zürich gilt 2026 für Neubauten weiterhin eine Eigenstromvorgabe von 10 W/m² Energiebezugsfläche. Die diskutierten 30 W/m² und eine stärkere Nutzung grosser Dächer sind geplant, aber noch nicht geltendes Recht.',
    'Förderbeiträge der Stadt Zürich dürfen nicht auf den ganzen Kanton übertragen werden. Seit 1. August 2026 fördert die Stadt sowohl PV als auch bestimmte Batteriespeicher; der Kanton kennt keinen allgemeinen entsprechenden Wohnhausbeitrag.',
  ],
  quickFacts: [
    { value: '10 W/m² EBF', label: 'heute geltende kantonale Neubauvorgabe', sourceIds: ['zh-bbv', 'zh-vollzug'] },
    { value: '30 Tage', label: 'Wartefrist im kantonalen Meldeverfahren', sourceIds: ['zh-meldeverfahren'] },
    { value: '01.08.2026', label: 'Start der erhöhten Beiträge der Stadt Zürich', sourceIds: ['stadt-pv', 'stadt-batterie'] },
    { value: 'CHF 1’000 + 100/kWh', label: 'Batteriebeitrag nur in der Stadt Zürich', sourceIds: ['stadt-batterie'] },
  ],
  ctaAfterSection: 'zustaendigkeit',
  sections: [
    {
      id: 'zustaendigkeit',
      title: 'Kanton Zürich oder Stadt Zürich?',
      paragraphs: [
        'Die kantonalen Bau- und Energievorschriften gelten im ganzen Kanton. Die erhöhten PV- und Batteriebeiträge sind dagegen ein kommunales Angebot und gelten nur für Anlagen auf Stadtzürcher Gebiet.',
        'Für eine Liegenschaft ausserhalb der Stadt sind Pronovo und allfällige Angebote der eigenen Gemeinde separat zu prüfen. Ein kantonales Programm für mehrmonatige oder saisonale Speicher schliesst Batteriespeicher ausdrücklich aus und ist kein Heimbatteriebonus.',
        'Die Investitionshilfe 2026 für landwirtschaftliche Batteriespeicher ist ein eigener Sonderfall: Der kantonale Rahmen von CHF 200’000 ist bereits ausgeschöpft. Dieses Agrarprogramm ist keine Förderung für normale Heimbatterien.',
      ],
      sourceIds: ['zh-bbv', 'zh-foerderprogramm', 'zh-landwirtschaft-batterie', 'stadt-pv', 'stadt-batterie'],
      module: {
        kind: 'zurich-jurisdictions',
        title: 'Zwei Ebenen, unterschiedliche Leistungen',
        intro: 'Der Standort entscheidet, ob die städtischen Beiträge überhaupt infrage kommen.',
        columns: ['Kanton Zürich', 'Stadt Zürich'],
        items: [
          { title: 'Kanton Zürich', value: 'Recht im ganzen Kanton', text: '10 W/m² bei Neubauten, 30-Tage-Meldeverfahren und keine allgemeine kantonale Förderung für gewöhnliche Wohnhaus-PV oder Heimbatterien.', detail: 'Steuerliche Abzugsfähigkeit kann bei Installation mindestens ein Jahr nach Neubau und mindestens einjähriger Bewohnung für PV, feste Wallbox und zugehörige Batterie infrage kommen.', sourceIds: ['zh-bbv', 'zh-meldeverfahren', 'zh-foerderprogramm', 'zh-steuern'] },
          { title: 'Stadt Zürich', value: 'Kommunale Beiträge ab 01.08.2026', text: 'PV-Gesamtbeiträge inklusive Pronovo und ein eigener Beitrag für qualifizierte stationäre Batteriespeicher.', detail: 'Nur für Projekte auf Stadtgebiet; Batteriegesuch vor Baubeginn einreichen.', sourceIds: ['stadt-pv', 'stadt-batterie'] },
        ],
      },
    },
    {
      id: 'eigenstrom',
      title: '10 W/m² sind geltendes Recht – 30 W/m² sind geplant',
      paragraphs: [
        'Bei Neubauten gelten mindestens 10 W Eigenstromleistung pro m² Energiebezugsfläche. Für PV wird die maximal verlangte Leistung über eine Belegung von 70% der anrechenbaren Gebäudefläche begrenzt; das ist keine Pflicht, 70% des Dachs mit Modulen zu bedecken.',
        'Anlagen auf demselben Grundstück oder innerhalb eines ZEV können angerechnet werden, wenn sie höchstens acht Jahre alt sind. Erweiterungen sind ausgenommen, wenn die neue EBF weniger als 50 m² beträgt oder höchstens 20% der bestehenden EBF und zugleich höchstens 1’000 m² umfasst. Alternativ kann auf Eigenstrom verzichtet werden, wenn der Grenzwert nach §47a um 20% verbessert wird. Eine Ersatzabgabe gibt es dafür nicht.',
      ],
      sourceIds: ['zh-bbv', 'zh-vollzug'],
      module: {
        kind: 'zurich-law-status',
        title: 'Heute geltend / geplant',
        intro: 'Für den Energienachweis zählt nur das tatsächlich in Kraft stehende Recht.',
        columns: ['Heute geltend', 'Geplant'],
        items: [
          { title: 'Aktuelle Vorgabe', value: '10 W/m² EBF', text: 'Die bestehende Eigenstromregel gilt für Neubauten mit den vorgesehenen Begrenzungen, Anrechnungen und Ausnahmen.', sourceIds: ['zh-bbv', 'zh-vollzug'] },
          { title: 'Politische Vorlage', value: '30 W/m² vorgesehen', text: 'Der Regierungsrat beabsichtigt eine Erhöhung; Vorlage 6062 zielt zudem auf die stärkere Nutzung geeigneter Dächer ab 300 m² bei Neubau und umfassender Dachsanierung, unter anderem abhängig von der Wirtschaftlichkeit.', detail: 'Am 21. September 2026 noch nicht als geltende 30-W-Regel behandeln.', sourceIds: ['zh-vorlage-6062'] },
        ],
      },
    },
    {
      id: 'stadtfoerderung',
      title: 'Beiträge der Stadt Zürich ab 1. August 2026',
      paragraphs: [
        'Die maximalen PV-Gesamtbeiträge der Stadt einschliesslich Pronovo bestehen aus CHF 5’000 Grundbeitrag, CHF 450/kWp bis 30 kWp, CHF 350 je weiterem kWp von 30 bis 100 kWp und CHF 310 je weiterem kWp oberhalb 100 kWp. Für bewilligungspflichtige PV auf einem Bestandesbau kommen höchstens CHF 3’000 hinzu. Pronovo darf nicht nochmals als zusätzlicher Betrag auf diese Gesamtmaxima addiert werden.',
        'Für einen qualifizierten Batteriespeicher zahlt die Stadt CHF 1’000 Grundbeitrag plus CHF 100/kWh; bei Second-Life-Batterien kommen CHF 100/kWh hinzu. Förderfähig sind mindestens 3 kWh, höchstens 100 kWh und maximal 1,5 kWh pro kW installierter erneuerbarer Leistung.',
        'Die Batterie muss stationär sein, hinter demselben Hausanschluss wie die PV liegen und in ein geeignetes Energiemanagementsystem eingebunden sein. Das Gesuch ist vor Baubeginn einzureichen.',
      ],
      sourceIds: ['stadt-pv', 'stadt-batterie'],
      notice: {
        title: 'Nur Stadt Zürich',
        text: 'Diese PV- und Batteriebeiträge sind kommunal. Sie gelten nicht automatisch in Winterthur oder einer anderen Zürcher Gemeinde.',
        status: 'important',
      },
    },
    {
      id: 'meldung',
      title: 'Meldeverfahren mit 30 Tagen Wartefrist',
      paragraphs: [
        'Viele genügend angepasste Dachanlagen können gemeldet werden. In Bauzonen gilt dies unter den Voraussetzungen auch für bestimmte Fassadenanlagen an Einfamilienhäusern und Gebäuden bis 11 m sowie für bestimmte freistehende Anlagen bis 20 m².',
        'Wenn die örtliche Baubehörde innert 30 Tagen nach der Empfangsbestätigung nichts anderes anordnet, darf gebaut werden. In Kernzonen, bei Ortsbild- oder Denkmalschutzinventaren und bei einer denkmalpflegerischen Schutzanordnung ist in der Regel eine Baubewilligung nötig. Prüfen Sie zudem, ob Ihre Gemeinde die Eingabe bereits über eBaugesucheZH führt.',
      ],
      sourceIds: ['zh-meldeverfahren'],
    },
  ],
  faqs: [
    { question: 'Gelten im Kanton Zürich 2026 bereits 30 W/m²?', answer: 'Nein. Geltendes Recht sind 10 W/m²; 30 W/m² sind eine geplante Erhöhung.', sourceIds: ['zh-bbv', 'zh-vorlage-6062'] },
    { question: 'Müssen 70% jedes Zürcher Dachs mit PV belegt werden?', answer: 'Nein. Die 70% begrenzen die maximal verlangte Leistung über die anrechenbare Gebäudefläche und sind keine pauschale Dachbelegungspflicht.', sourceIds: ['zh-vollzug'] },
    { question: 'Gibt es eine Ersatzabgabe statt Eigenstrom?', answer: 'Nein, Zürich sieht für diese Eigenstrompflicht keine Ersatzabgabe vor.', sourceIds: ['zh-vollzug'] },
    { question: 'Gelten die erhöhten PV-Beiträge in allen Zürcher Gemeinden?', answer: 'Nein. Die beschriebenen Beiträge gelten nur in der Stadt Zürich.', sourceIds: ['stadt-pv'] },
    { question: 'Welche Batterie fördert die Stadt Zürich?', answer: 'Eine stationäre Batterie ab 3 kWh am selben Hausanschluss wie die PV, mit geeignetem Energiemanagement und weiteren Kapazitätsgrenzen.', sourceIds: ['stadt-batterie'] },
    { question: 'Wann darf eine gemeldete Solaranlage gebaut werden?', answer: 'Wenn die lokale Baubehörde innert 30 Tagen nach der Empfangsbestätigung nichts anderes anordnet.', sourceIds: ['zh-meldeverfahren'] },
  ],
  sources: [...sources],
};