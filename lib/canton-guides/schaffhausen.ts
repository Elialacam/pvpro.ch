import type { CantonGuide } from './types';

const sources = [
  {
    id: 'sh-energy-law',
    authority: 'Kanton Schaffhausen',
    title: 'Energiegesetz und Energieverordnung, Stand 1.1.2026',
    url: 'https://sh.ch/CMS/get/file/464b4c76-1ffc-47b5-99f4-2d7d1fab9e85',
  },
  {
    id: 'sh-funding-2026',
    authority: 'Kanton Schaffhausen',
    title: 'Energieförderprogramm 2026',
    url: 'https://sh.ch/CMS/get/file/7dcdc4d7-1c24-40d7-a236-57a1367787e6',
  },
  {
    id: 'sh-notification',
    authority: 'Kanton Schaffhausen',
    title: 'Meldeverfahren Solaranlagen',
    url: 'https://services.sh.ch/',
  },
  {
    id: 'sh-solar-energy',
    authority: 'Kanton Schaffhausen',
    title: 'Sonnenenergie – Kanton Schaffhausen',
    url: 'https://www.sh.ch/CMS/Webseite/Kanton-Schaffhausen/Beh-rde/Verwaltung/Baudepartement/Departementssekretariat-Baudepartement/Energiefachstelle/Erneuerbare-Energien/Sonnenenergie-1634826-DE.html',
  },
] as const;

export const guide: CantonGuide = {
  id: 'schaffhausen',
  path: '/solaranlage-schaffhausen',
  canton: 'Schaffhausen',
  title: 'Solaranlage Schaffhausen 2026: neue Regeln & Förderung | PvPro.ch',
  description:
    'Neue Solarregeln seit 2026, Vorgaben für Dach und Fassade sowie Batterie-Förderung: das gilt für Photovoltaik in Schaffhausen.',
  h1: 'Solaranlage in Schaffhausen: neue Solarregeln 2026',
  intro: [
    'Seit 2026 gilt in Schaffhausen ein neues Energiegesetz. Für Neubauten, Dachflächen, Winterstrom und Batteriespeicher bestehen konkrete Regeln – mit einem wichtigen Übergangszeitraum bei Dachsanierungen.',
  ],
  quickFacts: [
    {
      value: '1.1.2026',
      label: 'Neues Energiegesetz in Kraft',
      sourceIds: ['sh-energy-law'],
    },
    {
      value: '≥85% Globalstrahlung',
      label: 'Geeignete Dachflächen in der relevanten Regelung',
      sourceIds: ['sh-energy-law'],
    },
    {
      value: '≥75% Globalstrahlung',
      label: 'Südfassade für Winterstrom bei Neubauten',
      sourceIds: ['sh-energy-law'],
    },
    {
      value: 'CHF 1’000',
      label: 'Batteriebeitrag, max. 25% der geförderten Gesamtinvestition',
      sourceIds: ['sh-funding-2026'],
    },
  ],
  ctaAfterSection: 'timeline',
  sections: [
    {
      id: 'timeline',
      title: 'Neubau und Dachsanierung haben unterschiedliche Startpunkte',
      paragraphs: [
        'Ordnen Sie zuerst das Bauvorhaben ein. Für einen Neubau und für Arbeiten an einem bestehenden Gebäude ist nicht dieselbe zeitliche Regelung massgebend.',
      ],
      sourceIds: ['sh-energy-law'],
      module: {
        kind: 'solar-law-timeline',
        title: 'Was gilt 2026 – was nach der Übergangsfrist?',
        intro: 'Die zeitliche Einordnung ist entscheidend: Neubau und Dachsanierung folgen nicht demselben Startpunkt.',
        items: [
          {
            title: '1. Januar 2026: neues Energiegesetz',
            value: '1.1.2026',
            text: 'Für Neubauten verlangt das neue Energiegesetz, das solare Potenzial insbesondere geeigneter Dachflächen zur Stromerzeugung zu nutzen oder die vorgesehenen zusätzlichen Effizienzmassnahmen zu erfüllen.',
            sourceIds: ['sh-energy-law'],
          },
          {
            title: 'Geeignete Flächen und Winterstrom',
            value: '≥85% / ≥75%',
            text: 'Die relevante Regelung erfasst geeignete Dachflächen ab 85% Globalstrahlung. Für Winterstrom bei Neubauten ist zudem eine Südfassade ab 75% Globalstrahlung vorgesehen; mindestens die Hälfte der opaken geeigneten Fläche ist zusätzlich zu berücksichtigen, vorbehaltlich Ausnahmen.',
            detail: 'Die Angaben in Prozent beziehen sich auf Globalstrahlung, nicht auf einen Winkel.',
            sourceIds: ['sh-energy-law'],
          },
          {
            title: 'Art. 27: umfassende Dachsanierung >300 m²',
            value: '1 Jahr Übergang',
            text: 'Art. 27 betrifft umfassende Dachsanierungen von Wohn- und Nichtwohnbauten mit mehr als 300 m² anrechenbarer Gebäudefläche. Ab dem Inkrafttreten am 1. Januar 2026 gilt dafür eine einjährige Übergangsfrist.',
            detail: 'Wenn die Regel anwendbar ist, sieht die Verordnung 30 W/m² EBF vor; technische und wirtschaftliche Voraussetzungen sowie Schutzinteressen bleiben relevant.',
            sourceIds: ['sh-energy-law'],
          },
        ],
      },
    },
    {
      id: 'neubau',
      title: 'Neubau: Dach und Südfassade gemeinsam planen',
      paragraphs: [
        'Die Südfassade ist für die Winterstromfrage ein eigener Planungspunkt. Lassen Sie die geeigneten Dach- und Fassadenflächen im Projekt getrennt darstellen, statt nur eine Gesamtfläche für Solarmodule zu nennen.',
        'Für den Vergleich sollten die angesetzten Strahlungswerte und die berücksichtigte opake Fassadenfläche nachvollziehbar sein. Fragen Sie auch, welche Ausnahmen für Ihr Vorhaben geprüft wurden. Wenn die vorgesehenen zusätzlichen Effizienzmassnahmen als Alternative betrachtet werden, sollte die gewählte Lösung im Projekt klar benannt werden.',
      ],
      sourceIds: ['sh-energy-law'],
    },
    {
      id: 'dachsanierung',
      title: 'Dachsanierung: Welche Angaben braucht die Prüfung?',
      paragraphs: [
        'Die anrechenbare Gebäudefläche für den Anwendungsbereich von Art. 27 ist nicht mit der Dachfläche gleichzusetzen. Auch die Energiebezugsfläche für die Leistungsvorgabe hat eine andere Funktion. Lassen Sie die jeweiligen Flächen deshalb in der Projektbeurteilung ausdrücklich zuordnen.',
        'Beschreiben Sie zudem den Umfang der vorgesehenen Dacharbeiten. Für eine belastbare Entscheidung gehören technische Machbarkeit, wirtschaftliche Voraussetzungen und mögliche Schutzinteressen zusammen betrachtet. Eine Flächenzahl allein beantwortet noch nicht, ob und wie die Regel auf Ihr Vorhaben anzuwenden ist.',
      ],
      sourceIds: ['sh-energy-law'],
    },
    {
      id: 'batterie',
      title: 'Batterieförderung 2026: eigene Bedingungen',
      paragraphs: [
        'Der kantonale Batteriebeitrag folgt eigenen Bedingungen und ist von der bundesweiten PV-Förderung über Pronovo getrennt zu betrachten. Prüfen Sie für die Speicherposition insbesondere:',
        'Lassen Sie im Angebot die nutzbare Kapazität und den Speicherpreis separat ausweisen. So ist erkennbar, auf welche Batterie sich die Förderannahme bezieht. Eine Offerte mit Speicher lässt sich sonst nur schwer mit einer reinen PV-Offerte vergleichen.',
      ],
      bullets: [
        'Stationärer Batteriespeicher an einer netzgekoppelten PV-Anlage',
        'Mindestens 10 kWh nutzbare Kapazität',
        'CHF 1’000 pro Anlage',
        'Höchstens 25% der Gesamtinvestition',
      ],
      sourceIds: ['sh-funding-2026'],
    },
    {
      id: 'meldung',
      title: 'Bewilligungsfreie Anlagen trotzdem melden',
      paragraphs: [
        'Bewilligungsfreie Solarstromanlagen auf Dächern und Fassaden müssen nach kantonaler Vorgabe mindestens 30 Tage vor Baubeginn gemeldet werden.',
        'Klären Sie früh, wer die Meldung übernimmt und welche Projektunterlagen dafür bereitstehen sollen. «Bewilligungsfrei» bedeutet hier nicht, dass auf die Meldung verzichtet werden kann.',
      ],
      sourceIds: ['sh-notification', 'sh-solar-energy'],
    },
    {
      id: 'kosten',
      title: 'Kosten und Offerten vergleichen',
      paragraphs: [
        'Für den Offertenvergleich zählen die tatsächlich geeignete Fläche, Globalstrahlung und Verschattung, Dach und gegebenenfalls Fassade, Unterkonstruktion, Elektroarbeiten und Batterie.',
        'Vergleichen Sie mehrere Angebote auf derselben Projektbasis. Halten Sie dabei den kantonalen Batteriebeitrag und die bundesweite PV-Förderung über Pronovo getrennt.',
        'Mit PvPro.ch können Eigentümer bis zu drei passende Solarofferten kostenlos und unverbindlich vergleichen – auf Basis desselben Projekts.',
      ],
      bullets: [
        'Tatsächlich geeignete Dach- und Fassadenfläche',
        'Globalstrahlung und Verschattung',
        'Unterkonstruktion und Montage',
        'Elektroarbeiten und Batteriespeicher',
      ],
      sourceIds: ['sh-energy-law', 'sh-funding-2026'],
    },
  ],
  faqs: [
    {
      question: 'Welche Solarregel gilt seit 2026 für Neubauten in Schaffhausen?',
      answer:
        'Seit 1. Januar 2026 verlangt das neue Energiegesetz, dass Neubauten das solare Potenzial insbesondere geeigneter Dachflächen zur Stromerzeugung nutzen oder die vorgesehenen zusätzlichen Effizienzmassnahmen erfüllen.',
      sourceIds: ['sh-energy-law'],
    },
    {
      question: 'Muss bei jeder Dachsanierung schon 2026 sofort Photovoltaik installiert werden?',
      answer:
        'Nein, so darf die Regel nicht dargestellt werden. Art. 27 über umfassende Dachsanierungen hat ab Inkrafttreten des Gesetzes eine einjährige Übergangsfrist; die Übergangsregel muss deshalb ausdrücklich berücksichtigt werden.',
      sourceIds: ['sh-energy-law'],
    },
    {
      question: 'Welche Dachsanierungen betrifft Art. 27 grundsätzlich?',
      answer:
        'Die Regel betrifft umfassende Dachsanierungen von Wohn- und Nichtwohnbauten mit mehr als 300 m² anrechenbarer Gebäudefläche, soweit die technischen und wirtschaftlichen Voraussetzungen erfüllt sind; Schutzinteressen können Ausnahmen begründen.',
      sourceIds: ['sh-energy-law'],
    },
    {
      question: 'Gibt es 2026 einen kantonalen Beitrag für Batteriespeicher?',
      answer:
        'Ja. Für förderfähige stationäre Batteriespeicher an netzgekoppelten PV-Anlagen sieht das Programm CHF 1’000 pro Anlage vor, höchstens 25% der Gesamtinvestition; die nutzbare Kapazität muss mindestens 10 kWh betragen.',
      sourceIds: ['sh-funding-2026'],
    },
    {
      question: 'Muss eine bewilligungsfreie Solaranlage trotzdem gemeldet werden?',
      answer:
        'Ja. Bewilligungsfreie Solarstromanlagen auf Dächern und Fassaden müssen nach kantonaler Vorgabe mindestens 30 Tage vor Baubeginn gemeldet werden.',
      sourceIds: ['sh-notification', 'sh-solar-energy'],
    },
  ],
  sources: [...sources],
};