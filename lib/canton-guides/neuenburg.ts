import type { CantonGuide } from './types';

export const guide: CantonGuide = {
  id: 'neuenburg',
  path: '/solaranlage-neuenburg',
  canton: 'Neuenburg',
  title: 'Solaranlage Neuenburg 2026: PV-Pflicht & Batterie | PvPro.ch',
  description: '15 W/m² bei Neubauten und neue Speicherförderung seit März 2026: die wichtigsten PV-Regeln im Kanton Neuenburg und passende Offerten.',
  h1: 'Solaranlage in Neuenburg: PV-Pflicht und Batteriespeicher 2026',
  intro: [
    'Neuenburg verbindet klare Eigenstromvorgaben für Neubauten mit einer neuen kantonalen Förderung für Photovoltaik-Batterien. Entscheidend ist, beide Instrumente sauber voneinander zu trennen.',
  ],
  quickFacts: [
    { value: '15 W/m² SRE', label: 'Eigenstrom im Neubau; mindestens 1 kW installierte Leistung', sourceIds: ['ne-relcen'] },
    { value: 'CHF 800 + CHF 80/kWh', label: 'Kantonaler Batteriebeitrag unter den Förderbedingungen', sourceIds: ['ne-battery-order', 'ne-battery-page'] },
    { value: 'ab 1.3.2026', label: 'kantonale Speicherförderung für PV-Batterien', sourceIds: ['ne-battery-order', 'ne-battery-page'] },
    { value: 'max. 50%', label: 'Anteil der Gesamtinvestition als Batteriebeitrag', sourceIds: ['ne-battery-order', 'ne-battery-page'] },
  ],
  ctaAfterSection: 'batterycheck',
  sections: [
    {
      id: 'neubaupflicht',
      title: 'Eigenstrom im Neubau und Batteriespeicher unterscheiden',
      paragraphs: [
        'Die beiden Mindestwerte für Neubauten gelten zusammen: Die Energiebezugsfläche, auch SRE genannt, bestimmt die Leistungsvorgabe. Zugleich gilt eine Mindestleistung unabhängig von dieser Flächenrechnung.',
        'Das ist eine Vorgabe zur eigenen Stromerzeugung, keine Pflicht zum Kauf einer Batterie. Die kantonale Speicherförderung ist ein separates Instrument und kann auch bei einer bestehenden PV-Anlage relevant sein.',
      ],
      sourceIds: ['ne-relcen'],
    },
    {
      id: 'batterycheck',
      title: 'Passt Ihr Speicher zum kantonalen Programm?',
      paragraphs: [
        'Prüfen Sie die folgenden Voraussetzungen gemeinsam. Die Beitragsformel allein ist noch keine Förderzusage; insbesondere kann nicht jede installierte Speicherkapazität vollständig berücksichtigt werden.',
      ],
      sourceIds: ['ne-battery-order', 'ne-battery-page'],
      module: {
        kind: 'battery-eligibility',
        title: 'Batterie-Fördercheck 2026',
        intro: 'Beitragsformel: CHF 800 pro Anlage + CHF 80/kWh installierter Speicherkapazität.',
        items: [
          {
            title: 'Kapazität >3 kWh',
            text: 'Die Batterie muss eine Kapazität von mehr als 3 kWh haben.',
            value: '>3 kWh',
            sourceIds: ['ne-battery-order', 'ne-battery-page'],
          },
          {
            title: 'Förderfähige Kapazität',
            text: 'Förderfähig ist höchstens das Zweifache der installierten PV-Leistung in kWc.',
            detail: 'Maximal 2 × installierte PV-Leistung in kWc',
            sourceIds: ['ne-battery-order', 'ne-battery-page'],
          },
          {
            title: 'Beitragsobergrenze',
            text: 'Der gesamte Beitrag darf höchstens 50% der Gesamtinvestition betragen.',
            value: 'max. 50%',
            sourceIds: ['ne-battery-order', 'ne-battery-page'],
          },
          {
            title: 'Gebäude, PV und Eigenverbrauch',
            text: 'Vorausgesetzt werden ein Wohngebäude, eine PV-Anlage vor Ort und dass ein Teil des Solarstroms selbst verbraucht wird.',
            sourceIds: ['ne-battery-order', 'ne-battery-page'],
          },
          {
            title: 'Inbetriebnahme ab 1. März 2026',
            text: 'Förderfähig sind Batteriespeicher, die ab dem 1. März 2026 in Betrieb genommen wurden. Massgebend ist der entsprechende Sicherheitsnachweis.',
            detail: 'Sicherheitsnachweis massgebend',
            sourceIds: ['ne-battery-order', 'ne-battery-page'],
          },
        ],
      },
      notice: {
        title: 'Alle Filter zusammen prüfen',
        text: 'Die Beitragsformel allein reicht nicht für die Förderfähigkeit. Kapazität, PV-Leistung, Investitionsanteil, Gebäude, Eigenverbrauch und Sicherheitsnachweis gehören zum vollständigen Check.',
        status: 'important',
      },
    },
    {
      id: 'bestehende-pv',
      title: 'Batterie zu einer bestehenden PV-Anlage',
      paragraphs: [
        'Eine bestehende PV-Anlage schliesst die Batteriesubvention nicht aus. Die Förderung gilt auch in Verbindung mit einer bestehenden PV-Anlage, sofern sie sich vor Ort befindet, ein Teil des Solarstroms selbst verbraucht wird und die übrigen Förderbedingungen erfüllt sind.',
        'Damit bleibt die Unterscheidung wichtig: Die Eigenstromvorgabe mit 15 W/m² SRE und mindestens 1 kW richtet sich an neue Gebäude. Die Batterieprüfung kann dagegen auch eine Ergänzung zu einer bestehenden PV-Anlage betreffen.',
      ],
      bullets: [
        'Bestehende PV-Anlage vor Ort ist möglich.',
        'Ein Teil des Solarstroms muss selbst verbraucht werden.',
        'Die übrigen Bedingungen des Batterie-Förderchecks bleiben bestehen.',
      ],
      sourceIds: ['ne-battery-order', 'ne-battery-page', 'ne-relcen'],
    },
    {
      id: 'nachweis',
      title: 'Welche Angaben für den Fördercheck wichtig sind',
      paragraphs: [
        'Für die Einordnung sollten die installierte PV-Leistung in kWc, die installierte Speicherkapazität und die Gesamtinvestition klar getrennt ausgewiesen werden. So lässt sich die förderfähige Kapazität im Verhältnis zur PV-Leistung prüfen und die Obergrenze des Beitrags nachvollziehen.',
        'Bei Speichern ab dem 1. März 2026 ist der entsprechende Sicherheitsnachweis massgebend. Zusätzlich müssen Wohngebäude, PV-Anlage vor Ort und Eigenverbrauch zusammen mit den übrigen Förderbedingungen betrachtet werden.',
      ],
      bullets: [
        'Installierte PV-Leistung in kWc und installierte Speicherkapazität separat betrachten.',
        'Gesamtinvestition für die 50%-Obergrenze ausweisen.',
        'Sicherheitsnachweis und Eigenverbrauch in die Prüfung einbeziehen.',
      ],
      sourceIds: ['ne-battery-order', 'ne-battery-page'],
    },
    {
      id: 'kosten',
      title: 'Kosten einer PV-Anlage mit Batteriespeicher',
      paragraphs: [
        'Die Kosten hängen nicht allein von der PV-Leistung ab. Bei einer Batterie zählen insbesondere die nutzbare Kapazität, die Kompatibilität des Wechselrichters und die Einbindung in die bestehende oder neue Anlage. Der kantonale Beitrag ist dabei eine Förderregel und keine Zusage für eine bestimmte Wirtschaftlichkeit.',
        'Vergleichen Sie Offerten deshalb anhand derselben Projektgrundlage. Die Batterieauslegung sollte getrennt von der PV-Auslegung nachvollziehbar sein, damit Leistung, Kapazität und elektrische Arbeiten nicht vermischt werden.',
      ],
      bullets: [
        'Nutzbare Speicherkapazität und passende Batteriegrösse',
        'Wechselrichter und technische Kompatibilität',
        'Schaltschrank und weitere elektrische Arbeiten',
        'Einbindung in eine neue oder bestehende PV-Anlage',
      ],
      sourceIds: ['ne-battery-order', 'ne-battery-page'],
    },
    {
      id: 'offerten',
      title: 'Passende Offerten für PV und Speicher vergleichen',
      paragraphs: [
        'PvPro hilft Eigentümern, bis zu drei passende Angebote für Photovoltaik und – falls gewünscht – Speicherlösungen unverbindlich zu vergleichen.',
        'Lassen Sie in den Angeboten die PV-Leistung, die installierte und nutzbare Speicherkapazität sowie die elektrischen Arbeiten getrennt aufführen. Damit können Sie den Batterie-Fördercheck und die technische Ausführung auf derselben Grundlage prüfen.',
      ],
      sourceIds: [],
    },
  ],
  faqs: [
    {
      question: 'Wie viel Eigenstrom muss ein Neubau in Neuenburg erzeugen?',
      answer: 'Für neue Gebäude verlangt das kantonale Energierecht mindestens 15 W/m² Energiebezugsfläche beziehungsweise SRE und mindestens 1 kW installierte Leistung.',
      sourceIds: ['ne-relcen'],
    },
    {
      question: 'Seit wann gibt es die kantonale Förderung für PV-Batterien?',
      answer: 'Förderfähig sind Batteriespeicher, die ab dem 1. März 2026 in Betrieb genommen wurden; massgebend ist der entsprechende Sicherheitsnachweis.',
      sourceIds: ['ne-battery-order', 'ne-battery-page'],
    },
    {
      question: 'Wie wird die Batteriesubvention berechnet?',
      answer: 'Der Beitrag besteht aus CHF 800 pro Anlage plus CHF 80 pro kWh installierter Speicherkapazität und darf höchstens 50% der Gesamtinvestition betragen.',
      sourceIds: ['ne-battery-order', 'ne-battery-page'],
    },
    {
      question: 'Welche Batteriegrösse wird gefördert?',
      answer: 'Die Batterie muss eine Kapazität von mehr als 3 kWh haben; die förderfähige Kapazität ist auf das Zweifache der installierten PV-Leistung in kWc begrenzt.',
      sourceIds: ['ne-battery-order', 'ne-battery-page'],
    },
    {
      question: 'Kann die Batterie zu einer bestehenden PV-Anlage ergänzt werden?',
      answer: 'Ja. Die Förderung gilt auch in Verbindung mit einer bestehenden PV-Anlage, sofern sie sich vor Ort befindet, ein Teil des Solarstroms selbst verbraucht wird und die übrigen Förderbedingungen erfüllt sind.',
      sourceIds: ['ne-battery-order', 'ne-battery-page'],
    },
  ],
  sources: [
    {
      id: 'ne-relcen',
      authority: 'Kanton Neuenburg',
      title: 'Règlement d’exécution de la loi cantonale sur l’énergie (RELCEn)',
      url: 'https://rsn.ne.ch/DATA/program/books/RSN2021/20214/htm/74010.htm',
    },
    {
      id: 'ne-battery-order',
      authority: 'Kanton Neuenburg',
      title: '740.13 : Arrêté relatif au subventionnement des batteries de stockage d’électricité photovoltaïque (ASBaSt), du 4 février 2026',
      url: 'https://rsn.ne.ch/DATA/program/books/rsne/htm/740.13.htm',
    },
    {
      id: 'ne-battery-page',
      authority: 'Kanton Neuenburg',
      title: 'Subventions pour les batteries domestiques de stockage d’électricité photovoltaïque | ne.ch',
      url: 'https://www.ne.ch/themes/energie-et-environnement/energie/subventions-pour-les-batteries-domestiques-de-stockage-delectricite-photovoltaique',
    },
  ],
};