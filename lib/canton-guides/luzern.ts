import type { CantonGuide } from './types';

const sources = [
  {
    id: 'lu-keng',
    authority: 'Kanton Luzern, Umwelt und Energie',
    title: 'KEnG kompakt - Kanton Luzern',
    url: 'https://uwe.lu.ch/Energiegesetz/KEnG_kompakt',
  },
  {
    id: 'lu-foerderprogramme',
    authority: 'Kanton Luzern, Umwelt und Energie',
    title: 'Förderprogramme Energie - Kanton Luzern',
    url: 'https://uwe.lu.ch/themen/energie/foerderprogramme',
  },
  {
    id: 'lu-even',
    authority: 'Kanton Luzern, Umwelt und Energie',
    title: 'Energienachweise ab 01.01.2026 - Kanton Luzern',
    url: 'https://uwe.lu.ch/Energiegesetz/Energienachweise_ab_Anfang_2026',
  },
  {
    id: 'lu-solar',
    authority: 'Kanton Luzern, Umwelt und Energie',
    title: 'Solarenergie - Kanton Luzern - Umwelt und Energie',
    url: 'https://uwe.lu.ch/themen/energie/erneuerbare_energien/Solar',
  },
] as const;

export const guide: CantonGuide = {
  id: 'luzern',
  path: '/solaranlage-luzern',
  canton: 'Luzern',
  title: 'Solaranlage Luzern 2026: Pflicht, Förderung & Offerten | PvPro.ch',
  description:
    'Was gilt im Kanton Luzern bei Neubau und Dachsanierung? Eigenstrom, Ersatzabgabe, Förderung und passende Solarofferten im Überblick.',
  h1: 'Solaranlage in Luzern: Regeln, Förderung und Offerten 2026',
  intro: [
    'Bei Neubauten und bestimmten Dachsanierungen gelten im Kanton Luzern klare Vorgaben zur Eigenstromerzeugung. Hier sehen Sie, was für Ihr Projekt gilt und welche Förderwege relevant sind.',
    'Seit 1. März 2025 ist die Einordnung von Neubau, Dachsanierung sowie Reparatur und Unterhalt besonders wichtig. Seit 2026 wird der Energienachweis über die digitale Plattform EVEN abgewickelt.',
  ],
  quickFacts: [
    {
      value: 'Seit 1.3.2025',
      label: 'Eigenstrom bei Neubau und Dachsanierung',
      sourceIds: ['lu-keng'],
    },
    {
      value: 'Max. CHF 1’000',
      label: 'je fehlendem kW Ersatzabgabe',
      sourceIds: ['lu-keng'],
    },
    {
      value: 'PV-Förderung',
      label: 'Bund / Pronovo',
      sourceIds: ['lu-foerderprogramme'],
    },
    {
      value: '2026',
      label: 'Energienachweis via EVEN',
      sourceIds: ['lu-even'],
    },
  ],
  ctaAfterSection: 'dach-check',
  sections: [
    {
      id: 'dach-check',
      title: 'Neubau, Dachsanierung oder Reparatur: Was gilt für mein Dach?',
      paragraphs: [
        'Seit 1. März 2025 ist im Kanton Luzern bei Neubauten und bei bestehenden Gebäuden mit einer Dachsanierung die Eigenstromerzeugung relevant. Der erste Schritt ist deshalb die Einordnung des Vorhabens.',
      ],
      sourceIds: ['lu-keng', 'lu-solar'],
      module: {
        kind: 'roof-duty-check',
        title: 'Was gilt für mein Dach?',
        intro:
          'Ordnen Sie das Vorhaben ein und prüfen Sie danach, ob die Anforderung mit Eigenstrom erfüllt wird oder eine Ersatzabgabe zu prüfen ist.',
        items: [
          {
            title: 'Neubau',
            value: 'Eigenstromregel',
            text: 'Bei einem Neubau das Potenzial zur Stromerzeugung angemessen nutzen und die Eigenstromregel für das Projekt prüfen.',
            sourceIds: ['lu-keng'],
          },
          {
            title: 'Echte Dachsanierung',
            value: 'Eigenstromregel',
            text: 'Bei einem bestehenden Gebäude mit einer Dachsanierung gilt ebenfalls: Das Potenzial zur Stromerzeugung ist angemessen zu nutzen.',
            sourceIds: ['lu-keng'],
          },
          {
            title: 'Reparatur / Unterhalt',
            value: 'Nicht automatisch Dachsanierung',
            text: 'Reine Reparatur- und Unterhaltsarbeiten nicht pauschal mit einer umfassenden Dachsanierung gleichsetzen; das konkrete Vorhaben anhand der kantonalen Vollzugshilfe prüfen.',
            sourceIds: ['lu-solar', 'lu-keng'],
          },
          {
            title: 'Anforderung erfüllt',
            value: 'Eigenstrom',
            text: 'Wenn die Anforderung erfüllt ist, mit der vorgesehenen PV beziehungsweise Eigenstromerzeugung weiterplanen.',
            sourceIds: ['lu-keng'],
          },
          {
            title: 'Anforderung nicht erfüllt',
            value: 'Ersatzabgabe',
            text: 'Wenn die Anforderung nicht erfüllt ist, eine Ersatzabgabe prüfen. Sie beträgt maximal CHF 1’000 pro kW der minimal erforderlichen, aber nicht realisierten Leistung.',
            sourceIds: ['lu-keng'],
          },
        ],
      },
    },
    {
      id: 'even',
      title: 'Energienachweis 2026: Abwicklung über EVEN',
      paragraphs: [
        'Klären Sie mit dem planenden Fachbetrieb, wer den Energienachweis für Ihr Vorhaben vorbereitet und die digitale Abwicklung übernimmt. So sind technische Planung und Dokumentation aufeinander abgestimmt.',
      ],
      sourceIds: ['lu-even'],
      notice: {
        title: 'EVEN ab 1. Januar 2026',
        text: 'Seit 1. Januar 2026 wird der Energienachweis im Kanton Luzern über die digitale Plattform EVEN abgewickelt.',
        status: 'important',
      },
    },
    {
      id: 'foerderung',
      title: 'PV-Förderung über Bund und Pronovo',
      paragraphs: [
        'Für die reguläre Förderung einer Photovoltaikanlage ist der Bund beziehungsweise Pronovo zuständig. Ein allgemeiner kantonaler PV-Beitrag ergibt sich aus den hier aufgeführten Luzerner Programmen nicht.',
        'Lassen Sie eine erwartete Förderung in der Offerte separat ausweisen. Für einen nachvollziehbaren Vergleich brauchen Sie zunächst den Anlagenpreis vor Förderabzug und danach die Grundlage der angenommenen Unterstützung. Eine mögliche Ersatzabgabe ist kein Förderbeitrag, sondern ein eigener Vergleichsposten.',
      ],
      sourceIds: ['lu-foerderprogramme', 'lu-keng'],
    },
    {
      id: 'vorhaben',
      title: 'Dacharbeiten und Solaranlage gemeinsam vorbereiten',
      paragraphs: [
        'Beschreiben Sie dem Fachbetrieb möglichst genau, welche Arbeiten am Dach geplant sind. Fotos, vorhandene Pläne und eine Beschreibung des Dachaufbaus helfen, das Vorhaben anhand der kantonalen Vollzugshilfe einzuordnen. Die Bezeichnung «Dacharbeiten» allein sagt noch wenig über den tatsächlichen Eingriff aus.',
        'Stimmen Sie anschliessend die Arbeiten am Gebäude mit der PV-Montage ab. Fragen Sie, welche Gerüst- und Nebenarbeiten bereits in der Dachofferte enthalten sind und welche zusätzlich für die Solaranlage angeboten werden. So vermeiden Sie einen Preisvergleich mit unterschiedlichen Leistungsumfängen.',
      ],
      sourceIds: ['lu-solar', 'lu-keng'],
    },
    {
      id: 'kosten',
      title: 'Was kostet eine Solaranlage in Luzern?',
      paragraphs: [
        'Ein pauschaler Anlagenpreis ersetzt keine Offerte für Ihr Gebäude. Die folgenden Positionen sollten im Angebot nachvollziehbar enthalten oder ausdrücklich ausgeschlossen sein.',
        'In Luzern kommt ein weiterer Vergleichspunkt dazu: Die technische Lösung und eine mögliche Ersatzabgabe sollten nicht mit unterschiedlichen Projektannahmen verglichen werden. Fordern Sie deshalb Offerten auf derselben Grundlage an.',
        'Mit PvPro.ch können Eigentümer kostenlos und unverbindlich bis zu drei passende Solarofferten vergleichen.',
      ],
      bullets: [
        'Dachfläche und Dachgeometrie',
        'Zugänglichkeit und Gerüste',
        'Integration in das Gebäude',
        'Elektrotableau',
        'Batteriespeicher',
        'Nebenarbeiten',
      ],
      sourceIds: ['lu-keng', 'lu-solar'],
    },
    {
      id: 'offerten-pruefen',
      title: 'Welche Unterschiede zwischen Offerten sind wichtig?',
      paragraphs: [
        'Prüfen Sie nicht nur den Endpreis, sondern auch die angebotene Leistung und die Aufteilung der Arbeiten. Ist eine Batterie eine Wahlmöglichkeit oder bereits eingerechnet? Sind Elektroarbeiten und Anpassungen am Tableau enthalten? Welche Positionen werden nach Aufwand abgerechnet?',
        'Bitten Sie bei Abweichungen um eine kurze Erläuterung und eine vergleichbare Angebotsvariante. Erst wenn Leistung, Gebäudearbeiten und optionale Ausstattung gleich eingeordnet sind, lässt sich beurteilen, ob ein Preisunterschied aus dem Umfang oder aus dem Angebot selbst entsteht.',
      ],
      sourceIds: [],
    },
  ],
  faqs: [
    {
      question: 'Gilt die Eigenstrompflicht in Luzern auch bei einer Dachsanierung?',
      answer:
        'Ja. Bei Neubauten und bestehenden Gebäuden mit einer Dachsanierung muss das Potenzial zur Stromerzeugung angemessen genutzt werden; alternativ ist eine Ersatzabgabe möglich.',
      sourceIds: ['lu-keng'],
    },
    {
      question: 'Wie hoch kann die Ersatzabgabe sein?',
      answer:
        'Sie beträgt maximal CHF 1’000 pro kW der minimal erforderlichen, aber nicht realisierten Leistung.',
      sourceIds: ['lu-keng'],
    },
    {
      question: 'Ist jede kleine Dachreparatur automatisch eine Dachsanierung?',
      answer:
        'Nein. Reine Reparatur- und Unterhaltsarbeiten dürfen nicht pauschal mit einer umfassenden Dachsanierung gleichgesetzt werden; das konkrete Vorhaben sollte anhand der kantonalen Vollzugshilfe geprüft werden.',
      sourceIds: ['lu-solar', 'lu-keng'],
    },
    {
      question: 'Fördert der Kanton Luzern normale Photovoltaikanlagen direkt?',
      answer:
        'Die reguläre Förderung von Photovoltaikanlagen erfolgt über die Bundesförderung beziehungsweise Pronovo; kantonale Programme dürfen nicht als allgemeiner PV-Beitrag dargestellt werden.',
      sourceIds: ['lu-foerderprogramme'],
    },
    {
      question: 'Was ändert sich beim Energienachweis 2026?',
      answer:
        'Seit 1. Januar 2026 wird der Energienachweis im Kanton Luzern über die digitale Plattform EVEN abgewickelt.',
      sourceIds: ['lu-even'],
    },
  ],
  sources: [...sources],
};