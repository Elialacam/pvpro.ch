import type { CantonGuide } from './types';

const sources = [
  {
    id: 'ge-obligation',
    authority: 'République et canton de Genève',
    title: 'Solaire – obligation constructions neuves et rénovations',
    url: 'https://www.ge.ch/installer-panneaux-solaires-batiment/solaire-obligation-constructions-neuves-renovations',
  },
  {
    id: 'ge-consommateurs',
    authority: 'République et canton de Genève',
    title: 'Solaire – obligation moyens consommateurs (>0,2 GWh/an)',
    url: 'https://www.ge.ch/installer-panneaux-solaires-batiment/solaire-obligation-moyens-consommateurs-conso-elec02gwh',
  },
  {
    id: 'ge-meldung',
    authority: 'Genève Energie',
    title: 'Panneaux solaires et pompes à chaleur: délai d’annonce d’ouverture de chantier réduit à 14 jours',
    url: 'https://www.ge.ch/blog/geneve-energie/panneaux-solaires-pompes-chaleur-delai-annonce-ouverture-chantier-reduit-14-jours-12-02-2026',
  },
  {
    id: 'ge-foerderung',
    authority: 'OCEN, République et canton de Genève',
    title: 'Subventions énergétiques 2026: 80 millions de francs',
    url: 'https://www.ge.ch/blog/geneve-energie/subventions-energetiques-2026-80-millions-francs-accelerer-renovation-du-parc-bati-genevois-2-02-2026',
  },
  {
    id: 'ge-pronovo',
    authority: 'Pronovo AG im Auftrag des Bundes',
    title: 'Häufige Fragen zur Einmalvergütung (EIV) und Solarförderung Schweiz',
    url: 'https://pronovo.ch/de/foerderung/photovoltaik/haeufige-fragen/',
  },
] as const;

export const guide: CantonGuide = {
  id: 'genf',
  path: '/solaranlage-genf',
  canton: 'Genf',
  title: 'Solaranlage Genf 2026: Solarpflicht & Förderung | PvPro.ch',
  description:
    'Photovoltaik in Genf: Wann Solar bei Neubau oder Dachsanierung Pflicht ist, welche Ausnahmen gelten und was 2026 bei Bewilligungen gilt.',
  h1: 'Solaranlage in Genf: Wann Photovoltaik 2026 Pflicht ist',
  intro: [
    'In Genf kann Solar bei Neubauten, Dachsanierungen und bestimmten energetischen Renovationen Pflicht sein. Geeignete Dachflächen müssen grundsätzlich genutzt werden.',
    'Für Standorte mit mehr als 0,2 GWh Stromverbrauch pro Jahr gilt grundsätzlich eine PV-Frist bis 2030. Bei bestimmten bewilligungsfreien Anlagen reichen seit Februar 2026 14 Tage Meldung vor Baubeginn.',
  ],
  quickFacts: [
    {
      value: 'Neubau',
      label: 'Geeignete Dachflächen grundsätzlich solar nutzen',
      sourceIds: ['ge-obligation'],
    },
    {
      value: 'Dachsanierung',
      label: 'Kann die Solarnutzungspflicht auslösen',
      sourceIds: ['ge-obligation'],
    },
    {
      value: '>0,2 GWh/Jahr',
      label: 'Schwelle für grössere Stromverbraucher; PV grundsätzlich bis 2030',
      sourceIds: ['ge-consommateurs'],
    },
    {
      value: '14 Tage',
      label: 'Meldung vor Baubeginn bei bestimmten bewilligungsfreien Projekten',
      sourceIds: ['ge-meldung'],
    },
  ],
  sections: [
    {
      id: 'pflicht',
      title: 'Wann ist Solar in Genf Pflicht?',
      paragraphs: [
        'Ja, in Genf kann die Nutzung von Solarenergie vorgeschrieben sein. Das gilt vor allem bei Neubauten, bei Dachrenovationen und bei Standorten mit einem jährlichen Stromverbrauch von mehr als 0,2 GWh.',
        'Die Pflicht betrifft geeignete Dachflächen und ist nicht automatisch eine Vorschrift für jedes bestehende Wohnhaus. Anerkannte Ausnahmen und andere energetische Renovationen müssen im Einzelfall mitgeprüft werden.',
      ],
      sourceIds: ['ge-obligation', 'ge-consommateurs'],
      module: {
        kind: 'obligation-triggers',
        title: 'Wann wird Solar in Genf Pflicht?',
        intro:
          'Neben diesen drei Auslösern können bestimmte energetische Renovationen darunterfallen. Technische Unmöglichkeit, unverhältnismässige Wirtschaftlichkeit und Schutzinteressen können anerkannte Ausnahmen sein.',
        items: [
          {
            title: 'Neubau',
            text: 'Geeignete Dachflächen eines Neubaus müssen grundsätzlich für Solarenergie genutzt werden.',
            sourceIds: ['ge-obligation'],
          },
          {
            title: 'Dachsanierung',
            text: 'Eine Dachrenovation kann die Solarnutzungspflicht auslösen. Prüfen Sie deshalb die Dachfläche und mögliche Ausnahmen vor der Planung.',
            sourceIds: ['ge-obligation'],
          },
          {
            title: 'Grösserer Stromverbraucher',
            text: 'Bei mehr als 0,2 GWh Stromverbrauch pro Jahr müssen geeignete Dachflächen grundsätzlich bis 2030 mit PV ausgestattet werden, soweit keine anerkannte Ausnahme greift.',
            sourceIds: ['ge-consommateurs'],
          },
        ],
      },
    },
    {
      id: 'dachsanierung',
      title: 'Was gilt bei einer Dachsanierung?',
      paragraphs: [
        'Eine Dachrenovation gehört in Genf zu den Vorhaben, die eine Pflicht zur Solarnutzung auslösen können. Das betrifft die geeignete Dachfläche, nicht automatisch jedes Dach und nicht jedes bestehende Haus.',
        'Auch bestimmte energetische Renovationen können relevant sein. Lassen Sie deshalb vor dem Auftrag klären, ob Ihr konkretes Vorhaben unter die Pflicht fällt und ob eine anerkannte Ausnahme vorliegt.',
      ],
      sourceIds: ['ge-obligation'],
      notice: {
        title: 'Nicht jede Renovation ist gleich',
        text: 'Die Genfer Regeln unterscheiden zwischen Neubau, Dachrenovation, bestimmten energetischen Renovationen und anderen Gebäuden. Eine allgemeine PV-Pflicht für alle bestehenden Häuser folgt daraus nicht.',
        status: 'important',
      },
    },
    {
      id: 'verbraucher',
      title: 'Die 2030-Regel für grössere Stromverbraucher',
      paragraphs: [
        'Verbraucht ein Standort mehr als 0,2 GWh Strom pro Jahr, gilt er für diese Regel als grösserer Stromverbraucher. Die geeigneten Dachflächen müssen grundsätzlich bis 2030 mit Photovoltaik ausgerüstet werden.',
        '0,2 GWh entsprechen 200’000 kWh. Für ein normales Einfamilienhaus ist diese Schwelle meist nicht der relevante Punkt; wichtig ist der tatsächliche Jahresverbrauch des Standorts.',
        'Auch bei dieser Regel bleiben anerkannte Ausnahmen möglich. Dazu zählen technische Unmöglichkeit, unverhältnismässige Wirtschaftlichkeit und Schutzinteressen.',
      ],
      sourceIds: ['ge-consommateurs', 'ge-obligation'],
    },
    {
      id: 'ausnahmen',
      title: 'Welche Ausnahmen gibt es?',
      paragraphs: [
        'Ja, Ausnahmen sind möglich, wenn Solar auf der geeigneten Dachfläche technisch nicht möglich oder wirtschaftlich unverhältnismässig ist. Auch Schutzinteressen können gegen eine Solarnutzung sprechen.',
        'Eine Ausnahme gilt nicht pauschal für jedes Projekt. Die zuständige Stelle muss die konkrete Situation und die geltenden Bedingungen prüfen.',
      ],
      bullets: [
        'Technisch nicht möglich: Die Solarnutzung kann wegen der konkreten baulichen oder technischen Situation nicht umgesetzt werden.',
        'Wirtschaftlich unverhältnismässig: Der Aufwand steht unter den geltenden Bedingungen in keinem angemessenen Verhältnis.',
        'Schutzinteressen: Denkmal-, Ortsbild- oder andere Schutzinteressen können eine Ausnahme begründen.',
      ],
      sourceIds: ['ge-obligation', 'ge-consommateurs'],
    },
    {
      id: 'bewilligung',
      title: 'Bewilligung und 14-Tage-Regel',
      paragraphs: [
        'Nein, eine Solaranlage braucht nicht in jedem Fall ein vollständiges Baugesuch. Genügend angepasste Anlagen können unter den geltenden Voraussetzungen bewilligungsfrei sein; die formalen Regeln gelten trotzdem.',
        'Seit Februar 2026 wurde bei bestimmten bewilligungsfreien Solarprojekten die Frist für die Meldung des Baustarts von 30 auf 14 Tage verkürzt. Die Meldung muss in diesen Fällen 14 Tage vor dem Baubeginn erfolgen.',
        'Ob dieses vereinfachte Verfahren genügt, hängt vom konkreten Projekt ab. Bei Fragen zum Energieinhalt ist OCEN relevant, bei baurechtlichen Fragen auch OAC.',
      ],
      sourceIds: ['ge-meldung', 'ge-obligation'],
      module: {
        kind: 'process-flow',
        title: 'Vor dem Baustart klären',
        intro: 'Die 14 Tage gelten nur für entsprechende bewilligungsfreie Vorhaben. Prüfen Sie das Verfahren, bevor Arbeiten oder Bestellungen starten.',
        items: [
          {
            title: 'Projekt einordnen',
            text: 'Prüfen, ob die Anlage genügend angepasst und damit ein bewilligungsfreies Verfahren möglich ist.',
            sourceIds: ['ge-obligation'],
          },
          {
            title: 'Baustart melden',
            text: 'Bei den betroffenen bewilligungsfreien Projekten muss die Meldung seit Februar 2026 14 Tage vor dem Baustart erfolgen.',
            sourceIds: ['ge-meldung'],
          },
          {
            title: 'Stelle klären',
            text: 'OCEN ist für Energiefragen relevant. Für die baurechtliche Einordnung und ein nötiges Baugesuch ist OAC beizuziehen.',
            sourceIds: ['ge-obligation', 'ge-meldung'],
          },
        ],
      },
    },
    {
      id: 'foerderung',
      title: 'Förderung in Genf',
      paragraphs: [
        'Das Genfer Energieförderbudget beträgt 2026 insgesamt CHF 80 Mio. Das ist das gesamte Budget für Energie, nicht ein reiner PV-Fördertopf.',
        'Die konkrete Förderung für Photovoltaik und die Förderprogramme für Gebäude müssen getrennt geprüft werden. Gesuche für relevante Gebäudeprogramme sind grundsätzlich vor Beginn der Arbeiten einzureichen.',
        'Die wichtigste Bundesförderung für Photovoltaik läuft über Pronovo. Die reguläre Einmalvergütung (EIV) gilt aktuell ab einer Mindestleistung von 2 kW. Zusätzliche Bundesboni, etwa der Neigungswinkelbonus ab 75°, der Parkflächenbonus für qualifizierende Anlagen ab 100 kW oder der Winterstrombonus 2026 für Anlagen ab 100 kW unter besonderen Bedingungen, haben eigene Voraussetzungen und dürfen nicht als feste Gesamtsumme zusammengerechnet werden.',
      ],
      sourceIds: ['ge-foerderung', 'ge-pronovo'],
      notice: {
        title: 'CHF 80 Mio. sind nicht CHF 80 Mio. PV-Förderung',
        text: 'Die Zahl beschreibt das gesamte Genfer Energieförderbudget 2026. Ob Ihre PV-Anlage oder eine Gebäudemassnahme unterstützt wird, hängt vom passenden Programm und dem Zeitpunkt des Gesuchs ab.',
        status: 'important',
      },
    },
    {
      id: 'begriffe',
      title: 'Genfer Solarregeln einfach erklärt',
      paragraphs: [
        'Photovoltaik (PV) erzeugt mit Solarmodulen Strom. Wenn eine Regel von Solarenergie oder Solarnutzung spricht, ist damit nicht automatisch nur eine bestimmte technische Anlage gemeint; die konkrete Vorschrift entscheidet.',
        'Eine geeignete Dachfläche ist eine Dachfläche, die nach den Genfer Vorgaben für Solarenergie genutzt werden kann. Bei einem bewilligungsfreien Projekt bedeutet die fehlende Baubewilligung nicht, dass keine Meldung oder keine weiteren Regeln gelten.',
      ],
      bullets: [
        'GWh: Eine Gigawattstunde ist eine Einheit für Strom. 0,2 GWh entsprechen 200’000 kWh.',
        'Meldeverfahren: Der Baustart wird der zuständigen Stelle angekündigt, ohne dass ein vollständiges Baugesuch nötig ist. Das gilt nur, wenn die gesetzlichen Voraussetzungen erfüllt sind.',
        'Energetische Renovation: Gemeint ist eine Renovation mit Bezug zum Energieverbrauch oder zur Energieversorgung. Bestimmte solche Renovationen können ebenfalls ein Auslöser sein.',
        'OCEN und OAC: OCEN ist die kantonale Energiefachstelle. OAC ist für Fragen zum Baubewilligungsverfahren relevant.',
      ],
      sourceIds: ['ge-obligation', 'ge-consommateurs', 'ge-meldung'],
    },
    {
      id: 'kosten',
      title: 'Was kostet eine Solaranlage hier?',
      paragraphs: [
        'Der Kanton veröffentlicht keinen festen Preis für Solaranlagen. Entscheidend sind Dach, Anlagengrösse, Elektroarbeiten und Ausstattung.',
        'Vergleichen Sie mehrere Offerten für dasselbe Projekt. Prüfen Sie dabei, ob alle Arbeiten, Bewilligungen oder Meldungen, der Netzanschluss und die Garantien gleich beschrieben sind.',
      ],
      bullets: [
        'Dachfläche, Dachform und Zustand',
        'Anlagengrösse und Modulleistung',
        'Ausrichtung und nutzbare Modulfläche',
        'Gerüst, Zugang und Baustellenaufwand',
        'Elektroarbeiten, Zähler und Netzanschluss',
        'Wechselrichter',
        'Batteriespeicher und Ladeinfrastruktur',
        'Offertumfang, Garantien und Fachbetrieb',
      ],
      sourceIds: ['ge-obligation', 'ge-pronovo'],
    },
    {
      id: 'fuer-wen',
      title: 'Für wen ist Solar in Genf besonders interessant?',
      paragraphs: [
        'Besonders früh prüfen sollten Eigentümerinnen und Eigentümer, die neu bauen, das Dach sanieren oder eine energetische Renovation planen. Bei einem grossen Stromverbrauch kann zusätzlich die Frist bis 2030 wichtig werden.',
        'Auch ohne automatische Pflicht kann eine passende Anlage sinnvoll sein, wenn Dach, Verbrauch und Ausstattung zusammenpassen. Entscheidend sind die konkrete Dachfläche, der Strombedarf, die Offerte und die anwendbaren Förderbedingungen.',
      ],
      sourceIds: ['ge-obligation', 'ge-consommateurs', 'ge-pronovo'],
    },
  ],
  faqs: [
    {
      question: 'Ist Photovoltaik bei einem Neubau in Genf Pflicht?',
      answer:
        'Auf geeigneten Dachflächen eines Neubaus muss Solarenergie grundsätzlich genutzt werden. Die Regel ist keine pauschale Pflicht für jede PV-Anlage auf jedem bestehenden Haus; anerkannte Ausnahmen müssen geprüft werden.',
      sourceIds: ['ge-obligation'],
    },
    {
      question: 'Was gilt bei einer Dachsanierung?',
      answer:
        'Eine Dachrenovation kann in Genf die Pflicht zur Solarnutzung auslösen. Ob sie in Ihrem Fall greift, hängt vom konkreten Vorhaben, der geeigneten Dachfläche und möglichen Ausnahmen ab.',
      sourceIds: ['ge-obligation'],
    },
    {
      question: 'Muss jedes bestehende Haus PV installieren?',
      answer:
        'Nein. Die Genfer Regeln schaffen keine allgemeine PV-Pflicht für jedes bestehende Haus. Relevant können aber eine Dachrenovation, eine bestimmte energetische Renovation oder ein sehr hoher Stromverbrauch sein.',
      sourceIds: ['ge-obligation', 'ge-consommateurs'],
    },
    {
      question: 'Was bedeutet die Grenze von 0,2 GWh?',
      answer:
        '0,2 GWh entsprechen 200’000 kWh Stromverbrauch pro Jahr. Standorte über dieser Grenze müssen geeignete Dachflächen grundsätzlich bis 2030 mit PV ausstatten, wenn keine anerkannte Ausnahme greift.',
      sourceIds: ['ge-consommateurs'],
    },
    {
      question: 'Gibt es Ausnahmen?',
      answer:
        'Ja. Eine Ausnahme kann bei technischer Unmöglichkeit, unverhältnismässiger Wirtschaftlichkeit oder entgegenstehenden Schutzinteressen möglich sein. Die konkrete Situation muss nach den Genfer Vorgaben geprüft werden.',
      sourceIds: ['ge-obligation', 'ge-consommateurs'],
    },
    {
      question: 'Brauche ich eine Baubewilligung?',
      answer:
        'Nein, nicht immer. Genügend angepasste Anlagen können unter den geltenden Voraussetzungen bewilligungsfrei sein; bei anderen Projekten kann ein ordentliches Bauverfahren nötig werden.',
      sourceIds: ['ge-obligation', 'ge-meldung'],
    },
    {
      question: 'Was bedeutet die 14-Tage-Frist?',
      answer:
        'Bei bestimmten bewilligungsfreien Solarprojekten muss der Baustart seit Februar 2026 14 Tage vorher gemeldet werden. Die verkürzte Frist gilt nicht automatisch für jedes Solarprojekt.',
      sourceIds: ['ge-meldung'],
    },
    {
      question: 'Sind die CHF 80 Mio. eine reine PV-Förderung?',
      answer:
        'Nein. CHF 80 Mio. ist das gesamte Genfer Energieförderbudget für 2026 und kein reiner PV-Fördertopf. Die konkrete PV-Förderung und Gebäudeprogramme müssen nach ihren eigenen Bedingungen getrennt geprüft werden.',
      sourceIds: ['ge-foerderung'],
    },
    {
      question: 'Können andere energetische Renovationen die Pflicht auslösen?',
      answer:
        'Ja, bestimmte energetische Renovationen können neben Neubauten und Dachrenovationen unter die Genfer Solarnutzungsregeln fallen. Ob das so ist, hängt von der Art und dem Umfang des konkreten Projekts ab.',
      sourceIds: ['ge-obligation'],
    },
    {
      question: 'Wie funktioniert die Bundesförderung über Pronovo?',
      answer:
        'Die wichtigste Bundesförderung für Photovoltaik läuft über Pronovo; die reguläre Einmalvergütung gilt aktuell ab 2 kW. Zusätzliche Bundesboni, etwa für Neigungswinkel ab 75° oder qualifizierende Anlagen ab 100 kW, sind freiwillige Förderwege mit eigenen Voraussetzungen und dürfen nicht pauschal mit anderen Beiträgen zu einer garantierten Summe addiert werden.',
      sourceIds: ['ge-pronovo'],
    },
    {
      question: 'Wo erhalte ich Auskunft zu Energie und Baurecht?',
      answer:
        'Für Fragen zur Energie ist in Genf OCEN relevant. Für die baurechtliche Einordnung und ein allfälliges Baugesuch ist auch OAC wichtig.',
      sourceIds: ['ge-obligation', 'ge-meldung'],
    },
  ],
  sources: [...sources],
};