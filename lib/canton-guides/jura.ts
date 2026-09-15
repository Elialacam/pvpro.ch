import type { CantonGuide } from './types';

const sources = [
  {
    id: 'ju-programme',
    authority: 'République et Canton du Jura',
    title: 'Programme Bâtiments – Förderstatus 2026',
    url: 'https://www.jura.ch/fr/Autorites/Administration/DEC/SDT/Energie/Subventions/Programme-Batiments/Programme-Batiments.html',
  },
  {
    id: 'ju-energy-law',
    authority: 'République et Canton du Jura',
    title: 'Ordonnance sur l’énergie, Eigenstromregel',
    url: 'https://rsju.jura.ch/fr/viewdocument.html?download=1&id=38231&idn=20131',
  },
  {
    id: 'ju-solar-permit',
    authority: 'République et Canton du Jura',
    title: 'Panneaux solaires – permis de construire',
    url: 'https://www.jura.ch/fr/Autorites/Administration/DEC/SDT/Permis-de-construire/Panneaux-solaires/Panneaux-solaires.html',
  },
  {
    id: 'ju-jurac',
    authority: 'République et Canton du Jura',
    title: 'JURAC – elektronisches Baugesuchsportal',
    url: 'https://www.jura.ch/fr/Autorites/JURAC/Requerants-Auteurs-du-projet/JURAC-Requerants-auteurs-du-projet.html',
  },
  {
    id: 'ju-foerderportal',
    authority: 'Kantonale Energieförderung',
    title: 'Förderportal für die kantonalen Programme',
    url: 'https://portal.energie-foerderung.ch',
  },
  {
    id: 'ju-pronovo',
    authority: 'Pronovo AG im Auftrag des Bundes',
    title: 'Häufige Fragen zur Einmalvergütung (EIV) und Solarförderung Schweiz',
    url: 'https://pronovo.ch/de/foerderung/photovoltaik/haeufige-fragen/',
  },
] as const;

export const guide: CantonGuide = {
  id: 'jura',
  path: '/solaranlage-jura',
  canton: 'Jura',
  title: 'Solaranlage Jura 2026: Förderung & Regeln | PvPro.ch',
  description:
    'Photovoltaik im Jura: aktueller Förderstatus September 2026, Eigenstrom bei Neubauten, Pronovo, Meldeverfahren und JURAC.',
  h1: 'Solaranlage im Jura: Förderung und Regeln – Stand September 2026',
  intro: [
    'Am 15. September 2026 zählt im Jura der aktuelle Förderstatus. Das reguläre Gebäude-Förderbudget ist weitgehend ausgeschöpft; M-01 steht auf der Warteliste.',
    'Pronovo und mögliche Restmittel des Impulsprogramms prüfen Sie separat. Bei Neubauten gelten 10 W/m² EBF Eigenstrom, höchstens 30 kW. Je nach Anlage kann eine Meldung genügen; die Gemeinde entscheidet über das Verfahren.',
  ],
  quickFacts: [
    {
      value: 'Separat prüfen',
      label: 'Pronovo / Bund: aktuelle PV-Förderung',
      sourceIds: ['ju-pronovo'],
    },
    {
      value: 'Warteliste',
      label: 'M-01 Gebäudeehülle',
      sourceIds: ['ju-programme'],
    },
    {
      value: 'Restmittel prüfen',
      label: 'Impulsprogramm: aktueller Stand',
      sourceIds: ['ju-programme'],
    },
  ],
  sections: [
    {
      id: 'foerderung',
      title: 'Welche Fördermittel sind aktuell noch verfügbar?',
      paragraphs: [
        'Nach dem kantonalen Stand vom 15. September 2026 ist das reguläre Gebäude-Förderbudget 2026 weitgehend ausgeschöpft. M-01 steht auf der Warteliste; Pronovo und das Impulsprogramm müssen Sie separat prüfen.',
        'Die aktuelle Bundesförderung für Photovoltaikanlagen läuft über Pronovo. Die reguläre Einmalvergütung (EIV) gilt aktuell ab 2 kW. Zusätzliche Bundesboni, zum Beispiel für Neigung, Parkflächen oder Winterstrom, haben eigene Voraussetzungen und dürfen nicht einfach als gemeinsame Fördersumme gerechnet werden.',
        'Das Impulsprogramm und ausschliesslich vom Bund finanzierte Gebäudemassnahmen sind getrennt vom regulären kantonalen Budget zu prüfen. M-01 betrifft die Gebäudehülle und ist keine allgemeine PV-Förderung. Ein ausgeschöpftes kantonales Budget bedeutet deshalb nicht, dass jede andere Förderung ebenfalls ausgeschöpft ist.',
      ],
      sourceIds: ['ju-programme', 'ju-pronovo'],
      module: {
        kind: 'funding-status',
        title: 'Förderampel Jura',
        intro: 'Stand: 15. September 2026. Prüfen Sie den Status vor Auftrag und Baubeginn erneut.',
        items: [
          {
            title: 'Pronovo / Bund',
            text: 'Aktuelle Bundesförderung für Photovoltaik separat prüfen. Die Einmalvergütung und mögliche Bundesboni richten sich nach den jeweiligen Voraussetzungen.',
            detail: 'EIV aktuell ab 2 kW; optionale Boni nicht automatisch addieren.',
            value: 'Separat prüfen',
            sourceIds: ['ju-pronovo'],
          },
          {
            title: 'Impulsprogramm',
            text: 'Mögliche Restmittel des Impulsprogramms sind getrennt vom regulären Gebäude-Förderbudget zu beurteilen. Prüfen Sie den aktuellen Betrag vor dem Auftrag.',
            value: 'Restmittel prüfen',
            sourceIds: ['ju-programme'],
          },
          {
            title: 'M-01 Gebäudeehülle',
            text: 'M-01 betrifft die Gebäudehülle, nicht eine allgemeine PV-Förderung. Für diese Massnahme besteht aktuell eine Warteliste.',
            value: 'Warteliste',
            sourceIds: ['ju-programme'],
          },
        ],
      },
    },
    {
      id: 'jahresbudget',
      title: 'Warum der aktuelle Status wichtiger ist als das Jahresbudget',
      paragraphs: [
        'Das Gesamtprogramm startete Anfang 2026 mit CHF 3,893 Mio.: rund CHF 1,18 Mio. stammten vom Kanton und CHF 2,713 Mio. vom Bund.',
        'Diese Aufteilung beschreibt das Budget zu Jahresbeginn. Sie bedeutet nicht, dass im September noch der gleiche Betrag verfügbar ist. Entscheidend ist deshalb die aktuelle Auskunft zum jeweiligen Programm und nicht der alte Jahresanfangs-Prospekt.',
      ],
      sourceIds: ['ju-programme'],
    },
    {
      id: 'neubau',
      title: 'Eigenstrom bei Neubauten',
      paragraphs: [
        'Bei Neubauten gilt im Jura eine Eigenstrompflicht von 10 W/m² EBF, höchstens 30 kW.',
        'EBF bedeutet Energiebezugsfläche. Gemeint ist die Fläche, die für die Energieberechnung des Gebäudes zählt. Die Regel betrifft die Eigenstromerzeugung und ist nicht automatisch eine allgemeine PV-Pflicht für jedes bestehende Haus.',
        'Die Einheiten sind einfach zu lesen: W/m² beschreibt die verlangte Leistung pro Quadratmeter EBF, kW die gesamte Leistung der Anlage. Ob die Vorgabe erfüllt ist und welche Lösung passt, gehört in die frühe Planung des Neubaus.',
      ],
      sourceIds: ['ju-energy-law'],
    },
    {
      id: 'bewilligung',
      title: 'Meldung oder Baugesuch?',
      paragraphs: [
        'Nein, eine Baubewilligung ist nicht immer nötig. Solaranlagen können bei Einhaltung der bundesrechtlichen Bedingungen teilweise über eine Meldung an die Gemeinde laufen.',
        'Eine Meldung ist eine Anzeige an die Gemeinde statt eines vollständigen Baugesuchs. Die Gemeinde entscheidet, ob ein ordentliches Verfahren erforderlich ist.',
        'Wenn ein Baugesuch nötig ist, wird JURAC verwendet. JURAC ist das elektronische Portal des Kantons für Baugesuche.',
      ],
      sourceIds: ['ju-solar-permit', 'ju-jurac'],
    },
    {
      id: 'vor-bestellung',
      title: 'Was Sie vor einer Bestellung prüfen sollten',
      paragraphs: [
        'Klären Sie Förderung, Verfahren und Gemeinde vor der Bestellung. Fördergesuche für relevante Gebäudeprogramme müssen grundsätzlich vor Beginn der geförderten Arbeiten eingereicht werden.',
        'So vermeiden Sie, dass ein Auftrag erteilt wird, bevor der aktuelle Förderstatus oder das nötige Verfahren feststeht.',
        'Für Gesuche zu den kantonalen Gebäudeprogrammen nutzen Sie das Förderportal portal.energie-foerderung.ch. Es ist vom Bauportal JURAC und von der PV-Bundesförderung über Pronovo zu unterscheiden.',
      ],
      bullets: [
        'Pronovo und die aktuelle EIV für Ihre Anlage',
        'aktueller kantonaler Status für Gebäudeprogramme und Impulsprogramm',
        'Gemeinde: Meldeverfahren oder ordentliches Baugesuch',
        'Bauprozess und JURAC, falls ein Baugesuch nötig ist',
        'Fördergesuch vor Beginn der geförderten Arbeiten',
      ],
      sourceIds: ['ju-programme', 'ju-solar-permit', 'ju-jurac', 'ju-pronovo', 'ju-foerderportal'],
    },
    {
      id: 'kosten',
      title: 'Was kostet eine Solaranlage hier?',
      paragraphs: [
        'Der Kanton veröffentlicht keinen festen Preis für Solaranlagen. Entscheidend sind Dach, Anlagengrösse, Elektroarbeiten und Ausstattung.',
        'Der Endpreis hängt vom konkreten Gebäude und vom gewünschten Leistungsumfang ab. Vergleichen Sie deshalb mehrere Offerten für dasselbe Projekt und prüfen Sie Förderbedingungen getrennt von den Investitionskosten.',
      ],
      bullets: [
        'Dachfläche und Dachform',
        'Anlagengrösse und Leistung',
        'Gerüst, Zugang und Baustellenaufwand',
        'Elektroarbeiten, Zähler und Netzanschluss',
        'Wechselrichter',
        'Batteriespeicher',
        'Eigenverbrauch und Verbrauchsprofil',
        'Leistungsumfang und Garantien des Installateurs',
      ],
      sourceIds: ['ju-programme', 'ju-pronovo'],
    },
  ],
  faqs: [
    {
      question: 'Gibt es im Jura eine Eigenstrompflicht bei Neubauten?',
      answer:
        'Ja. Bei Neubauten gilt eine Pflicht zur Eigenstromerzeugung. Für bestehende Häuser folgt daraus keine allgemeine PV-Pflicht.',
      sourceIds: ['ju-energy-law'],
    },
    {
      question: 'Wie viel Eigenstrom muss ein Neubau produzieren?',
      answer:
        'Die Mindestleistung beträgt 10 W/m² EBF. Mehr als 30 kW müssen nach dieser Regel nicht verlangt werden.',
      sourceIds: ['ju-energy-law'],
    },
    {
      question: 'Ist das Förderbudget 2026 noch verfügbar?',
      answer:
        'Das reguläre Gebäude-Förderbudget ist laut kantonalem Stand vom 15. September 2026 weitgehend ausgeschöpft. Die CHF 3,893 Mio. vom Jahresanfang sind deshalb kein Beleg für heute noch verfügbares Geld.',
      sourceIds: ['ju-programme'],
    },
    {
      question: 'Was bedeutet die Warteliste bei M-01?',
      answer:
        'M-01 steht aktuell auf der Warteliste. M-01 gehört zur Förderung der Gebäudehülle und ist keine allgemeine PV-Förderung.',
      sourceIds: ['ju-programme'],
    },
    {
      question: 'Muss ich mein Gesuch vor Baubeginn stellen?',
      answer:
        'Ja, relevante Gesuche für Gebäudeprogramme müssen grundsätzlich vor Beginn der geförderten Arbeiten eingereicht werden. Prüfen Sie den aktuellen Status und die Bedingungen, bevor Sie den Auftrag erteilen.',
      sourceIds: ['ju-programme'],
    },
    {
      question: 'Brauche ich für PV immer eine Baubewilligung?',
      answer:
        'Nein. Unter den geltenden Voraussetzungen kann eine Meldung an die Gemeinde genügen. Die Gemeinde prüft, ob ein ordentliches Bauverfahren nötig wird.',
      sourceIds: ['ju-solar-permit'],
    },
    {
      question: 'Wer entscheidet über das Verfahren?',
      answer:
        'Die Gemeinde entscheidet, ob eine Meldung genügt oder ein ordentliches Verfahren erforderlich ist. Klären Sie diese Frage vor dem Arbeitsbeginn mit der zuständigen Gemeinde.',
      sourceIds: ['ju-solar-permit'],
    },
    {
      question: 'Was ist JURAC?',
      answer:
        'JURAC ist das elektronische Portal für kantonale Baugesuche. Wenn für Ihr Solarprojekt ein Baugesuch nötig ist, wird es dort eingereicht.',
      sourceIds: ['ju-jurac'],
    },
    {
      question: 'Was ist Pronovo und ab welcher Leistung gilt die Einmalvergütung?',
      answer:
        'Pronovo bearbeitet die aktuelle Bundesförderung für Photovoltaikanlagen. Die reguläre Einmalvergütung gilt aktuell ab einer Mindestleistung von 2 kW.',
      sourceIds: ['ju-pronovo'],
    },
    {
      question: 'Kann ich kantonale Beiträge und Bundesboni einfach addieren?',
      answer:
        'Nein. Pronovo-Förderung, kantonale Programme und optionale Bundesboni müssen jeweils nach ihren eigenen Voraussetzungen geprüft werden. Eine pauschale Gesamtsumme ist nicht zugesichert.',
      sourceIds: ['ju-programme', 'ju-pronovo'],
    },
    {
      question: 'Was bedeutet EBF?',
      answer:
        'EBF steht für Energiebezugsfläche. Das ist die Fläche, die für die Energieberechnung des Gebäudes massgebend ist.',
      sourceIds: ['ju-energy-law'],
    },
  ],
  sources: [...sources],
};