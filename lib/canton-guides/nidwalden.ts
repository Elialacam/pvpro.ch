import type { CantonGuide } from './types';

const sources = [
  {
    id: 'nwlaw641.1',
    authority: 'Kanton Nidwalden',
    title: 'NG 641.1 – Gesetz über die sparsame Energienutzung',
    url: 'https://gesetze.nw.ch/app/de/texts_of_law/641.1',
  },
  {
    id: 'programme40289',
    authority: 'Kanton Nidwalden',
    title: 'Förderprogramm Energie 2026',
    url: 'https://www.nw.ch/energiefachstellepub/40289',
  },
  {
    id: 'notification37780',
    authority: 'Kanton Nidwalden',
    title: 'BK Meldeformular Solaranlagen | Kanton Nidwalden Online',
    url: 'https://www.nw.ch/baukoordpub/37780',
  },
] as const;

export const guide: CantonGuide = {
  id: 'nidwalden',
  path: '/solaranlage-nidwalden',
  canton: 'Nidwalden',
  title: 'Solaranlage Nidwalden 2026: Pflicht & Förderung | PvPro.ch',
  description:
    '10 W/m² Eigenstrom, Ersatzabgabe und der Gebäudehüllen-Bonus mit Photovoltaik: die wichtigsten Regeln für Solaranlagen in Nidwalden.',
  h1: 'Solaranlage in Nidwalden: Eigenstrompflicht und Förderung 2026',
  intro: [
    'Nidwalden hat eine klar berechenbare Eigenstromvorgabe und verbindet energetische Gebäudesanierungen unter bestimmten Bedingungen mit zusätzlicher PV-Förderwirkung.',
    'Für die Eigenstromregel zählt die neu geschaffene Energiebezugsfläche (EBF). Die Gebäudesanierungsförderung ist davon getrennt: CHF 120/m² betrifft ein gefördertes wärmegedämmtes Bauteil in Kombination mit vollflächiger PV und nicht die PV-Fläche selbst.',
  ],
  quickFacts: [
    {
      value: '10 W/m²',
      label: 'Mindestleistung je m² neu geschaffener EBF',
      sourceIds: ['nwlaw641.1'],
    },
    {
      value: 'max. 30 kW',
      label: 'Obergrenze der Eigenstromvorgabe',
      sourceIds: ['nwlaw641.1'],
    },
    {
      value: 'CHF 1’000/kW',
      label: 'Ersatzabgabe je nicht realisiertem erforderlichem kW',
      sourceIds: ['nwlaw641.1'],
    },
    {
      value: 'CHF 60 → CHF 120/m²',
      label: 'Beitrag für ein gefördertes wärmegedämmtes Bauteil',
      sourceIds: ['programme40289'],
    },
  ],
  sections: [
    {
      id: 'eigenstrompflicht',
      title: 'Die 10-W/m²-Regel in drei Schritten',
      paragraphs: [
        'Für die Eigenstrompflicht ist die neu geschaffene Energiebezugsfläche (EBF) der Ausgangspunkt. Die Berechnung lässt sich in drei klaren Schritten ordnen.',
      ],
      sourceIds: ['nwlaw641.1'],
      module: {
        kind: 'own-power-steps',
        title: '10-W/m²-Regel in drei Schritten',
        intro: 'Neue EBF × 10 W/m² → resultierende Leistung → Obergrenze 30 kW.',
        items: [
          {
            title: '1. Neu geschaffene EBF',
            value: 'Neue EBF × 10 W/m²',
            text: 'Massgebend ist die neu geschaffene Energiebezugsfläche des Projekts.',
            detail: 'Die gesetzliche Vorgabe beträgt mindestens 10 W Leistung pro m² neu geschaffener EBF.',
            sourceIds: ['nwlaw641.1'],
          },
          {
            title: '2. Resultierende Leistung',
            value: 'EBF × 10 W/m²',
            text: 'Aus der Fläche ergibt sich die mindestens sicherzustellende Leistung für die Eigenstromvorgabe.',
            detail: 'Die Rechnung verbindet die neu geschaffene EBF mit dem Mindestwert von 10 W/m².',
            sourceIds: ['nwlaw641.1'],
          },
          {
            title: '3. Obergrenze anwenden',
            value: 'Höchstens 30 kW',
            text: 'Aufgrund dieser Vorgabe müssen höchstens 30 kW sichergestellt werden.',
            detail: 'Die Obergrenze gehört zur Eigenstromvorgabe.',
            sourceIds: ['nwlaw641.1'],
          },
        ],
      },
      notice: {
        title: 'Alternative bei nicht realisierter Leistung',
        text: 'Für die nicht realisierte erforderliche Leistung sieht das kantonale Recht eine Ersatzabgabe von CHF 1’000 pro kW vor.',
        status: 'important',
      },
    },
    {
      id: 'gebaeudehuelle-pv',
      title: 'Gebäudehülle und PV getrennt einordnen',
      paragraphs: [
        'Der Gebäudehüllen-Beitrag bezieht sich auf das geförderte wärmegedämmte Bauteil – nicht auf die PV-Fläche. Die Kombination mit vollflächiger PV kann den Satz nach Programm erhöhen.',
      ],
      sourceIds: ['programme40289'],
      module: {
        kind: 'comparison',
        items: [],
        title: 'CHF 60/m² oder CHF 120/m²?',
        intro: 'Entscheidend ist, ob die PV die Programmdefinition «vollflächig» erfüllt.',
        columns: ['Gebäudehülle', 'Gebäudehülle + PV'],
        rows: [
          {
            label: 'Beitrag',
            left: 'CHF 60/m² für das geförderte wärmegedämmte Bauteil',
            right: 'CHF 120/m² für das geförderte wärmegedämmte Bauteil in Kombination mit PV',
            sourceIds: ['programme40289'],
          },
          {
            label: 'Vollflächige PV',
            left: 'Gebäudehüllen-Beitrag ohne den höheren Kombinationssatz',
            right: '20% der Fassade oder 50% des Flachdachs beziehungsweise geneigten Dachs mit PV belegt',
            sourceIds: ['programme40289'],
          },
          {
            label: 'Einordnung',
            left: 'Beitrag für das gedämmte Bauteil, nicht für die PV-Fläche',
            right: 'Kein allgemeiner PV-Zuschuss; normale PV-Anlagen werden grundsätzlich über den Bund gefördert.',
            sourceIds: ['programme40289'],
          },
        ],
      },
      notice: {
        title: 'Fördergesuch vor Baubeginn',
        text: 'Das Gesuch für die Gebäudesanierung muss grundsätzlich vor Baubeginn eingereicht werden; die kantonalen Beiträge stehen zudem unter den Bedingungen und verfügbaren Krediten des Programms.',
        status: 'important',
      },
    },
    {
      id: 'meldung',
      title: 'Meldeformular für Solaranlagen',
      paragraphs: [
        'Für das Solarprojekt steht das aktualisierte BK-Meldeformular Solaranlagen des Kantons Nidwalden zur Verfügung. Verwenden Sie die kantonale Vorlage für die projektbezogenen Angaben und klären Sie besondere Fragen vor der Umsetzung mit der zuständigen Stelle.',
      ],
      sourceIds: ['notification37780'],
    },
    {
      id: 'kosten',
      title: 'Kostenfaktoren für Ihr Projekt',
      paragraphs: [
        'Die Kosten hängen von der Projektgrösse und den baulichen Voraussetzungen ab. Vergleichen Sie Offerten nur, wenn sie dieselben Arbeiten und dieselbe erforderliche Leistung ausweisen.',
        'Bei einer Kombination mit Dämmarbeiten lohnt sich eine klare Aufteilung: Welche Position betrifft die Gebäudehülle, welche die Solaranlage und welche beide Gewerke? Lassen Sie insbesondere Gerüst und Nebenarbeiten nachvollziehbar zuordnen. Der höhere Gebäudehüllen-Beitrag ist kein Grund, sämtliche Kosten der gemeinsamen Baustelle als PV-Kosten zu vergleichen.',
        'Bitten Sie die Anbieter, die verwendete Energiebezugsfläche und die daraus abgeleitete Leistung im Angebot zu nennen. Bei einer zusätzlichen Batterie hilft eine getrennte Preisposition. So können Sie eine Variante ohne Speicher mit derselben PV-Anlage vergleichen und erkennen, ob Preisunterschiede aus der Dimensionierung oder aus zusätzlichen Arbeiten entstehen.',
        'Mit PvPro.ch vergleichen Eigentümer bis zu drei unverbindliche Solarofferten auf einer vergleichbaren Projektbasis.',
      ],
      bullets: [
        'geforderte Leistung aus der neu geschaffenen EBF',
        'Dachfläche und Dachgeometrie',
        'Montage, Gerüst und Zugänglichkeit',
        'Elektroarbeiten und elektrische Verteilung',
        'Batteriespeicher',
        'Koordination mit der Dämmung von Dach oder Fassade',
      ],
      sourceIds: [],
    },
  ],
  ctaAfterSection: 'eigenstrompflicht',
  faqs: [
    {
      question: 'Wie wird die Eigenstrompflicht in Nidwalden berechnet?',
      answer: 'Massgebend sind mindestens 10 W Leistung pro m² neu geschaffener Energiebezugsfläche.',
      sourceIds: ['nwlaw641.1'],
    },
    {
      question: 'Gibt es eine Obergrenze für die Pflicht?',
      answer: 'Ja. Aufgrund dieser Vorgabe müssen höchstens 30 kW sichergestellt werden.',
      sourceIds: ['nwlaw641.1'],
    },
    {
      question: 'Was passiert, wenn die erforderliche Leistung nicht realisiert wird?',
      answer: 'Für die nicht realisierte erforderliche Leistung sieht das kantonale Recht eine Ersatzabgabe von CHF 1’000 pro kW vor.',
      sourceIds: ['nwlaw641.1'],
    },
    {
      question: 'Zahlt Nidwalden CHF 120/m² für jede Photovoltaikanlage?',
      answer:
        'Nein. CHF 120/m² betreffen ein gefördertes wärmegedämmtes Bauteil in Kombination mit einer nach Programmdefinition vollflächigen PV-Anlage; normale PV-Anlagen werden grundsätzlich über den Bund gefördert.',
      sourceIds: ['programme40289'],
    },
    {
      question: 'Wann muss ein Fördergesuch für die Gebäudesanierung gestellt werden?',
      answer:
        'Das Gesuch muss grundsätzlich vor Baubeginn eingereicht werden; die kantonalen Beiträge stehen zudem unter den Bedingungen und verfügbaren Krediten des Programms.',
      sourceIds: ['programme40289'],
    },
  ],
  sources: [...sources],
};