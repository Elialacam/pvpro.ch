import type { CantonGuide } from './types';

const sources = [
  {
    id: 'fr-solar-permit',
    authority: 'Kanton Freiburg / Etat de Fribourg',
    title: 'Installations solaires – permis de construire',
    url: 'https://www.fr.ch/territoire-amenagement-et-constructions/permis-de-construire-et-autorisations/permis-de-construire/permis-de-construire-installations-solaires',
  },
  {
    id: 'fr-energy-law',
    authority: 'Kanton Freiburg',
    title: 'Energiereglement (SGF 770.11), Art. 25',
    url: 'https://bdlf.fr.ch/app/de/texts_of_law/770.11',
  },
  {
    id: 'fr-energy-subsidies',
    authority: 'Kanton Freiburg / Etat de Fribourg',
    title: 'Programme de subventions en matière d’énergie',
    url: 'https://www.fr.ch/deef/sde/programmes-de-subventions-en-matiere-denergie',
  },
  {
    id: 'fr-pronovo-faq',
    authority: 'Pronovo AG im Auftrag des Bundes',
    title: 'Häufige Fragen zur Einmalvergütung (EIV) und Solarförderung Schweiz',
    url: 'https://pronovo.ch/de/foerderung/photovoltaik/haeufige-fragen/',
  },
] as const;

export const guide: CantonGuide = {
  id: 'freiburg',
  path: '/solaranlage-freiburg',
  canton: 'Freiburg',
  title: 'Solaranlage Freiburg 2026: Pflicht & Bewilligung | PvPro.ch',
  description:
    'Photovoltaik im Kanton Freiburg: Eigenstrom bei Neubauten, Pronovo-Förderung und Meldeverfahren für Dach und Fassade einfach erklärt.',
  h1: 'Solaranlage im Kanton Freiburg: Was 2026 für Eigentümer gilt',
  intro: [
    'Bei einem Neubau im Kanton Freiburg muss ein Teil des Stroms selbst produziert werden. Das ist keine allgemeine PV-Pflicht für jedes bestehende Haus.',
    'Für genügend angepasste Dach- und Fassadenanlagen kann seit 2026 eine Meldung statt eines vollständigen Baugesuchs genügen. Hier finden Sie Eigenstromregel, Frist, Förderung und die wichtigsten Ausnahmen einfach erklärt.',
  ],
  quickFacts: [
    {
      value: '10 W/m²',
      label: 'Mindestleistung für Eigenstrom bei einem betroffenen Neubau',
      sourceIds: ['fr-energy-law'],
    },
    {
      value: '30 kW',
      label: 'Höchstleistung, die bei der Neubaupflicht verlangt werden darf',
      sourceIds: ['fr-energy-law'],
    },
    {
      value: '30 Tage',
      label: 'Grundsätzliche Frist für die entsprechende Meldung vor Baubeginn',
      sourceIds: ['fr-solar-permit'],
    },
    {
      value: '2026',
      label: 'Seit dann können passende Fassadenanlagen im Meldeverfahren geprüft werden',
      sourceIds: ['fr-solar-permit'],
    },
  ],
  sections: [
    {
      id: 'neubau',
      title: 'Müssen Neubauten in Freiburg eigenen Strom produzieren?',
      paragraphs: [
        'Ja. Bei Neubauten gilt eine Pflicht zur Eigenstromproduktion. In der Praxis wird sie oft mit Photovoltaik erfüllt, rechtlich ist aber nicht pauschal eine PV-Anlage für jedes Haus vorgeschrieben.',
        'Die Vorgabe beträgt mindestens 10 W/m² der Energiebezugsfläche (EBF). Die EBF ist die Gebäudefläche, die für die Energieberechnung massgebend ist; sie ist nicht einfach dasselbe wie die verfügbare Dachfläche. Insgesamt dürfen höchstens 30 kW verlangt werden.',
        'Bestimmte kleine Erweiterungen sind ausgenommen. Die gesetzliche Ausnahme greift bei einer Erweiterung von weniger als 50 m² oder bei höchstens 20 % des bestehenden Gebäudes und höchstens 1’000 m²; das konkrete Vorhaben ist mit dem Energienachweis zu prüfen.',
      ],
      sourceIds: ['fr-energy-law'],
      notice: {
        title: 'Keine allgemeine PV-Pflicht für jedes Haus',
        text: 'Die Freiburger Regel betrifft die Eigenstromproduktion bei Neubauten. Für ein bestehendes Haus folgt daraus nicht automatisch eine Pflicht zur Nachrüstung einer Photovoltaikanlage.',
        status: 'important',
      },
      module: {
        kind: 'project-check',
        title: 'Was gilt für mein Projekt?',
        intro:
          'Prüfen Sie die zwei Fragen nacheinander und unabhängig voneinander: zuerst die Eigenstromregel, danach das passende Verfahren für die Anlage.',
        items: [
          {
            title: '1. Ist es ein Neubau?',
            text: 'Ja: Eigenstromproduktion prüfen: mindestens 10 W/m² EBF; gesetzlich dürfen höchstens 30 kW verlangt werden. Nein: Aus dieser Neubau-Regel folgt keine allgemeine Eigenstrompflicht für ein bestehendes Haus.',
            detail:
              'Kleine Erweiterungen können ausgenommen sein: weniger als 50 m² oder höchstens 20 % des Bestands und höchstens 1’000 m².',
            sourceIds: ['fr-energy-law'],
          },
          {
            title: '2. Ist Dach oder Fassade genügend angepasst?',
            text: 'Ja: Meldeverfahren prüfen und die Meldung grundsätzlich 30 Tage vor Baubeginn an die Gemeinde senden. Nein: Baubewilligung mit der Gemeinde klären; bei einem Schutzobjekt oder einem sensiblen Ortsbild ist sie weiterhin möglich.',
            detail:
              'Seit 1. Januar 2026 können auch genügend angepasste Fassadenanlagen unter den Voraussetzungen des Verfahrens gemeldet werden.',
            sourceIds: ['fr-solar-permit'],
          },
        ],
      },
    },
    {
      id: 'bewilligung',
      title: 'Meldung oder Baubewilligung?',
      paragraphs: [
        'Für viele genügend angepasste Solarprojekte kann eine Meldung statt eines vollständigen Baugesuchs genügen. Das gilt je nach Fall für Dach- und seit 1. Januar 2026 auch für passende Fassadenanlagen.',
        'Eine Meldung ist eine vereinfachte Mitteilung an die Gemeinde und keine automatische Bewilligung für jedes Projekt. Bei Schutzobjekten, sensiblen Ortsbildern oder einer nicht genügend angepassten Anlage kann eine Baubewilligung erforderlich sein.',
        'Bei der entsprechenden Fassadenregel erfolgt die Meldung grundsätzlich 30 Tage vor Baubeginn. Wenn ein ordentliches Bauverfahren nötig ist, laufen die Baugesuche im Kanton Freiburg über FRIAC, das kantonale Online-Portal für Baugesuche.',
      ],
      bullets: [
        'Meldeverfahren: Projektunterlagen fristgerecht bei der Gemeinde einreichen.',
        'Schutzobjekt oder sensibles Ortsbild: Baubewilligung früh mit der zuständigen Stelle klären.',
        'Ordentliches Baugesuch: FRIAC als kantonales Online-Portal verwenden.',
      ],
      sourceIds: ['fr-solar-permit'],
    },
    {
      id: 'foerderung',
      title: 'Förderung im Kanton Freiburg',
      paragraphs: [
        'Die eigentliche Förderung einer Photovoltaikanlage läuft grundsätzlich über den Bund und Pronovo. Die reguläre Einmalvergütung (EIV) ist gemäss Pronovo-FAQ ab einer Mindestleistung von 2 kW möglich; die konkrete Höhe hängt vom Projekt, der Leistung, der Anlagenart und dem Fördermodell ab.',
        'Zusätzliche Bundesboni sind keine automatische Gesamtsumme. Je nach Projekt können zum Beispiel ein Neigungswinkelbonus ab 75°, ein Parkflächenbonus für qualifizierende Anlagen ab 100 kW oder seit 2026 ein Winterstrombonus unter besonderen Bedingungen für Anlagen ab 100 kW relevant sein. Jeder Bonus hat eigene Voraussetzungen und darf nicht einfach mit anderen Beiträgen addiert werden.',
        'Das kantonale Gebäudeprogramm ist davon getrennt. Es darf nicht als allgemeiner Freiburger Zuschuss für jede PV-Anlage dargestellt werden; eine konkrete Gebäudemassnahme und ihr Gesuch sind separat nach den offiziellen Bedingungen zu prüfen.',
      ],
      sourceIds: ['fr-pronovo-faq', 'fr-energy-subsidies'],
      notice: {
        title: 'Bundesförderung und kantonales Programm trennen',
        text: 'Pronovo prüft die Bundesförderung für PV. Kantonale Gebäudeprogramme können eigene energetische Massnahmen unterstützen, sind aber kein pauschaler PV-Beitrag für jedes Wohnhaus.',
        status: 'important',
      },
    },
    {
      id: 'begriffe',
      title: 'Die wichtigsten Begriffe einfach erklärt',
      paragraphs: [
        'W/m² bedeutet Watt pro Quadratmeter. Die 10 W/m² beziehen sich auf die Energiebezugsfläche des Neubaus und beschreiben die verlangte Leistung für die Eigenstromproduktion.',
        'EBF steht für Energiebezugsfläche. Gemeint ist die berechnete Gebäudefläche für energetische Vorgaben, nicht automatisch die Fläche, auf der Solarmodule Platz haben.',
        'Ein Meldeverfahren ist die vereinfachte Meldung eines Vorhabens an die Gemeinde. Eine Baubewilligung ist dagegen das ordentliche Verfahren, wenn das Projekt wegen Gestaltung, Schutz oder anderer Gründe genauer geprüft werden muss.',
      ],
      sourceIds: ['fr-energy-law', 'fr-solar-permit'],
    },
    {
      id: 'kosten',
      title: 'Was kostet eine Solaranlage hier?',
      paragraphs: [
        'Der Kanton veröffentlicht keinen festen Preis für Solaranlagen. Entscheidend sind Dach, Anlagengrösse, Elektroarbeiten und Ausstattung.',
        'Vergleichen Sie mehrere Offerten für dasselbe Projekt. So sehen Sie, ob Dacharbeiten, Anschluss, Speicher und die gewünschte Leistung jeweils vollständig und nachvollziehbar eingerechnet sind.',
      ],
      bullets: [
        'Dachfläche, Dachform und nutzbare Modulfläche',
        'Anlagengrösse und Leistung',
        'Gerüst, Zugang und Baustellenaufwand',
        'Elektroarbeiten, Zähler und Netzanschluss',
        'Wechselrichter',
        'Batteriespeicher und Ladeinfrastruktur',
        'Eigenverbrauch, Wärmepumpe und Elektroauto',
        'Installateur, Leistungsumfang und Garantien',
      ],
      sourceIds: ['fr-pronovo-faq', 'fr-solar-permit'],
    },
    {
      id: 'fuer-wen',
      title: 'Für wen ist Solar in Freiburg besonders interessant?',
      paragraphs: [
        'Besonders früh planen sollten Eigentümerinnen und Eigentümer eines Neubaus, weil die Eigenstromproduktion in den Energienachweis gehört. Auch eine grössere geeignete Dachfläche oder eine ohnehin geplante Dach- oder Fassadensanierung kann der richtige Zeitpunkt für eine gemeinsame Planung sein.',
        'Solar passt ausserdem gut zu einem Haushalt mit Wärmepumpe oder Elektroauto, wenn Eigenverbrauch und Anschluss gemeinsam geplant werden. Ob die Anlage sinnvoll ist, hängt von Dach, Verbrauch, Verfahren und konkreter Offerte ab; feste Renditen lassen sich daraus nicht ableiten.',
      ],
      sourceIds: ['fr-energy-law', 'fr-solar-permit', 'fr-pronovo-faq'],
    },
  ],
  faqs: [
    {
      question: 'Gilt im Kanton Freiburg eine Solarpflicht?',
      answer:
        'Bei Neubauten gilt eine Pflicht zur Eigenstromproduktion, aber keine allgemeine PV-Pflicht für jedes bestehende Haus. In der Praxis kann Photovoltaik diese Vorgabe erfüllen. Kleine Erweiterungen können unter den gesetzlichen Schwellen ausgenommen sein.',
      sourceIds: ['fr-energy-law'],
    },
    {
      question: 'Wie viel eigenen Strom muss ein Neubau produzieren?',
      answer:
        'Ein betroffener Neubau muss mindestens 10 W/m² Energiebezugsfläche für die Eigenstromproduktion vorsehen. Insgesamt dürfen höchstens 30 kW verlangt werden. Die Energiebezugsfläche ist die für die Energieberechnung massgebende Gebäudefläche.',
      sourceIds: ['fr-energy-law'],
    },
    {
      question: 'Was bedeutet 10 W/m²?',
      answer:
        'W/m² bedeutet Watt pro Quadratmeter. Die 10 W/m² werden auf die Energiebezugsfläche des Neubaus angewendet, nicht einfach auf die nutzbare Dachfläche. Daraus ergibt sich die verlangte Leistung für die Eigenstromproduktion.',
      sourceIds: ['fr-energy-law'],
    },
    {
      question: 'Sind kleine Anbauten und Erweiterungen betroffen?',
      answer:
        'Bestimmte kleine Erweiterungen sind ausgenommen. Die gesetzliche Ausnahme betrifft eine Erweiterung von weniger als 50 m² oder höchstens 20 % des Bestands und höchstens 1’000 m². Die genaue Einordnung gehört in die Prüfung des konkreten Bauvorhabens.',
      sourceIds: ['fr-energy-law'],
    },
    {
      question: 'Muss ich für eine PV-Anlage ein Baugesuch einreichen?',
      answer:
        'Nicht immer. Für eine genügend angepasste Anlage kann eine Meldung statt eines vollständigen Baugesuchs genügen. Bei Schutzobjekten, sensiblen Ortsbildern oder fehlender Anpassung kann eine Baubewilligung erforderlich sein; bei einem ordentlichen Verfahren wird das Gesuch über FRIAC eingereicht.',
      sourceIds: ['fr-solar-permit'],
    },
    {
      question: 'Was hat sich 2026 bei Fassaden geändert?',
      answer:
        'Seit 1. Januar 2026 können auch genügend angepasste Solaranlagen an Fassaden unter den geltenden Voraussetzungen über ein Meldeverfahren laufen. Das gilt nicht automatisch für jede Fassade. Schutzobjekte und sensible Ortsbilder können weiterhin eine Baubewilligung verlangen.',
      sourceIds: ['fr-solar-permit'],
    },
    {
      question: 'Wie früh muss ich eine entsprechende Fassadenanlage melden?',
      answer:
        'Die Meldung erfolgt bei diesem Verfahren grundsätzlich 30 Tage vor Baubeginn an die Gemeinde. Vorher sollten Anpassung, Schutzstatus und die vollständigen Unterlagen geklärt sein. Die Frist ersetzt keine zusätzliche Baubewilligung, wenn diese erforderlich ist.',
      sourceIds: ['fr-solar-permit'],
    },
    {
      question: 'Welche Förderung gibt es für eine Solaranlage in Freiburg?',
      answer:
        'Die eigentliche PV-Investitionsförderung läuft grundsätzlich über den Bund und Pronovo. Die reguläre Einmalvergütung ist gemäss Pronovo-FAQ ab 2 kW möglich, wobei die konkrete Förderung vom Projekt und den Bundesbedingungen abhängt. Kantonale Gebäudeprogramme sind davon getrennt und kein allgemeiner PV-Zuschuss.',
      sourceIds: ['fr-pronovo-faq', 'fr-energy-subsidies'],
    },
    {
      question: 'Welche zusätzlichen Bundesboni können relevant sein?',
      answer:
        'Je nach Projekt gibt es optionale Bundesboni mit eigenen Voraussetzungen, zum Beispiel einen Neigungswinkelbonus ab 75°, einen Parkflächenbonus für qualifizierende Anlagen ab 100 kW oder seit 2026 einen Winterstrombonus unter besonderen Bedingungen ab 100 kW. Diese Boni sind nicht garantiert und dürfen nicht als pauschale Gesamtsumme zusammengerechnet werden.',
      sourceIds: ['fr-pronovo-faq'],
    },
    {
      question: 'Was gilt bei einem geschützten Gebäude?',
      answer:
        'Schutzobjekte und sensible Ortsbilder können weiterhin eine Baubewilligung verlangen. Eine vereinfachte Meldung für eine genügend angepasste Anlage ist deshalb nicht automatisch möglich. Klären Sie den Schutzstatus früh mit der Gemeinde oder der zuständigen Baubehörde.',
      sourceIds: ['fr-solar-permit'],
    },
  ],
  sources: [...sources],
};