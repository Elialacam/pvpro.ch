import type { CantonGuide } from './types';

export const guide: CantonGuide = {
  id: 'appenzell-innerrhoden',
  path: '/solaranlage-appenzell-innerrhoden',
  canton: 'Appenzell Innerrhoden',
  title: 'Solaranlage Appenzell Innerrhoden: Förderung & Regeln | PvPro.ch',
  description: 'Photovoltaik in Appenzell Innerrhoden: EIV des Bundes, Solarberatung für CHF 100, Eigenstrompflicht bei Neubauten und Bewilligung.',
  h1: 'Solaranlage in Appenzell Innerrhoden: Förderung, Beratung und Bewilligung',
  intro: [
    'In Appenzell Innerrhoden wird die Photovoltaikanlage selbst vor allem über die Einmalvergütung des Bundes und Pronovo unterstützt. Das kantonale Angebot ist eine konkrete Solarberatung, kein pauschaler PV-Zuschuss.',
    'Bei neuen Gebäuden verlangt das geltende Energierecht einen Teil eigener Stromproduktion. Ob PV, welches Verfahren und welche Nachweise passen, sollte deshalb vor dem Baugesuch geklärt werden.',
  ],
  quickFacts: [
    { value: '1.4.2020', label: 'Inkrafttreten von revidiertem Energiegesetz und Energieverordnung', sourceIds: ['ai-energievollzug', 'ai-implementation-2020'] },
    { value: 'CHF 100', label: 'Kundenbeteiligung für die Impulsberatung Solarenergie', sourceIds: ['ai-programme'] },
    { value: 'kostenlos', label: 'Solarberatung bei gleichzeitiger Impulsberatung «erneuerbar heizen»', sourceIds: ['ai-programme'] },
    { value: 'keine', label: 'Ersatzabgabe für die Eigenstromanforderung', sourceIds: ['ai-implementation-2020'] },
  ],
  sections: [
    {
      id: 'saeulen',
      title: 'Appenzell Innerrhoden in drei Säulen',
      paragraphs: [
        'Für eine realistische Planung müssen drei Dinge getrennt werden: Geld vom Bund, Beratung durch das kantonale Programm und die Einordnung im Bauverfahren. So wird die CHF-100-Beratung nicht versehentlich als Beitrag an Module oder Speicher verstanden.',
      ],
      sourceIds: ['ai-pronovo', 'ai-programme', 'ai-solaranlagen'],
      module: {
        kind: 'pillars',
        title: 'Was bei einem Solarprojekt in AI zusammenkommt',
        intro: 'Die drei Säulen haben verschiedene Zuständigkeiten und Bedingungen.',
        items: [
          {
            title: 'Bundesförderung',
            text: 'Die EIV für die PV-Anlage wird über Pronovo beantragt und nach den geltenden Bundesbedingungen berechnet. Ein allgemeiner kantonaler PV-Top-up ist für AI nicht belegt.',
            sourceIds: ['ai-pronovo'],
          },
          {
            title: 'CHF 100 Solarberatung',
            text: 'Die Impulsberatung Solarenergie wird ausschliesslich durch den Verein Energie AR/AI durchgeführt. Die Kundenbeteiligung beträgt CHF 100; mit der gleichzeitig durchgeführten Beratung «erneuerbar heizen» ist sie gratis.',
            sourceIds: ['ai-programme'],
          },
          {
            title: 'Meldung oder Bewilligung',
            text: 'Eine genügend angepasste Solaranlage auf einem Dach in Bau- oder Landwirtschaftszone ist meldepflichtig. Andere Anlagen brauchen eine Bewilligung.',
            sourceIds: ['ai-solaranlagen'],
          },
        ],
      },
    },
    {
      id: 'eigenstrom',
      title: 'Eigenstrom bei Neubauten',
      paragraphs: [
        'Das revidierte Energiegesetz und die revidierte Energieverordnung von Appenzell Innerrhoden sind am 1. April 2020 in Kraft getreten. Bei neuen Häusern muss ein Teil des Stroms selbst produziert werden; Photovoltaik ist eine mögliche Umsetzung.',
        'Die Eigenstromanforderung gilt nach der kantonalen Vollzugshilfe auch für Anbauten oder Aufstockungen, wenn sie die Grenze für Bagatell-Erweiterungen überschreiten. Die konkrete Anlagengrösse ist im Energienachweis festzulegen; eine allgemeine kW-Zahl wird hier nicht vorgegeben.',
        'Wichtig für die Planung: In AI kann keine Ersatzabgabe geleistet werden. Ebenso ist keine Kompensation an verschiedenen Gebäuden möglich. Ein Überschuss auf einem anderen Gebäude ersetzt die Anforderung am betroffenen Neubau daher nicht.',
        'Auch ein nach Minergie zertifiziertes Gebäude muss die Anforderungen an die Eigenstromerzeugung erfüllen. Eine Befreiung kann bei besonderen Verhältnissen möglich sein, ist aber mit weitergehender Energieeffizienz und dem kantonalen Nachweis zu begründen.',
      ],
      sourceIds: ['ai-energievollzug', 'ai-implementation-2020'],
    },
    {
      id: 'foerderung',
      title: 'Förderung richtig einordnen',
      paragraphs: [
        'Die EIV ist die relevante Förderung für die PV-Anlage selbst. Pronovo ist für das Bundesverfahren zuständig; Bedingungen, Termine und der projektbezogene Betrag müssen dort geprüft werden. Der Kanton AI nennt dagegen kein allgemeines PV-Prozentmodell wie ein Investitionszuschuss.',
        'Das kantonale Programm fördert die Impulsberatung Solarenergie für thermische oder elektrische Solaranlagen. Die Kundenbeteiligung beträgt CHF 100. Die Beratung behandelt die Entscheidung vor der Investition und wird ausschliesslich durch den Verein Energie AR/AI durchgeführt.',
        'Wer zusätzlich und zeitgleich die Impulsberatung «erneuerbar heizen» beim Verein bucht, erhält die Solarberatung kostenlos. Kostenlos bedeutet hier: keine Kundenbeteiligung für diese kombinierte Beratung; es bedeutet nicht, dass die Solaranlage oder der Strom gratis wird.',
      ],
      sourceIds: ['ai-pronovo', 'ai-programme'],
    },
    {
      id: 'bewilligung',
      title: 'Brauche ich eine Baubewilligung?',
      paragraphs: [
        'Für genügend angepasste Solaranlagen auf Dächern in Bau- und Landwirtschaftszonen besteht eine Meldepflicht. Das kantonale Merkblatt und Formular sind vor dem Start mit der zuständigen Stelle zu klären.',
        'Nicht auf dem Dach montierte oder nicht genügend angepasste Anlagen sowie Projekte an Schutzobjekten oder in Schutzzonen brauchen hingegen eine Bewilligung. Dazu zählen insbesondere Ortsbildschutz- und Landschaftsschutzzonen. Eine Dachanlage ist daher nicht allein wegen ihrer PV-Technik automatisch bewilligungsfrei.',
      ],
      sourceIds: ['ai-solaranlagen'],
      module: {
        kind: 'process-flow',
        title: 'Verfahren in drei Prüfschritten',
        intro: 'Standort und Gestaltung bestimmen, ob eine Meldung genügt.',
        items: [
          {
            title: '1. Dach und Zone prüfen',
            text: 'Ja, Dachanlage in Bau- oder Landwirtschaftszone: Anpassung prüfen und Meldepflicht vorbereiten. Nein, anderer Standort oder andere Zone: Bewilligung abklären.',
            sourceIds: ['ai-solaranlagen'],
          },
          {
            title: '2. Anpassung und Schutzstatus klären',
            text: 'Ist die Anlage genügend angepasst und betrifft sie kein Schutzobjekt? Dann ist die Meldung der vorgesehene Weg. Bei fehlender Anpassung, Schutzobjekt oder Schutz- beziehungsweise Ortsbildzone ist ein Baugesuch nötig.',
            sourceIds: ['ai-solaranlagen'],
          },
          {
            title: '3. Energienachweis abschliessen',
            text: 'Bei einem Baugesuch ist das Energiedossier mit den notwendigen Formularen, Plänen und Nachweisen einzureichen. Nach Abschluss bestätigt die Bauherrschaft die vorschriftsgemässe Ausführung vor Bezug oder Inbetriebnahme.',
            sourceIds: ['ai-energievollzug'],
          },
        ],
      },
    },
    {
      id: 'kosten',
      title: 'Kosten & Planung in Appenzell Innerrhoden',
      paragraphs: [
        'AI veröffentlicht keinen Einheitspreis für eine private Solaranlage. Die Offerte hängt vom konkreten Gebäude und vom gewünschten Energiesystem ab. Die CHF 100 der Solarberatung sind eine Kundenbeteiligung für Beratung und kein Beitrag an die Investition.',
        'Für vergleichbare Offerten sollten mindestens acht Punkte separat beschrieben werden:',
      ],
      bullets: [
        'Dachfläche und nutzbare Modulfläche',
        'Anlagenleistung und Ausrichtung',
        'Dachart, Unterkonstruktion und Anpassung',
        'Gerüst, Zugang und Baustellenaufwand',
        'Elektroarbeiten, Zähler und Netzanschluss',
        'Speicher sowie Ladepunkt für Elektromobilität',
        'erwarteter Eigenverbrauch',
        'Installateur, Garantien und Dokumentation',
      ],
      sourceIds: ['ai-programme', 'ai-solaranlagen', 'ai-pronovo'],
    },
    {
      id: 'fuer-wen',
      title: 'Für wen lohnt sich eine Solaranlage hier besonders?',
      paragraphs: [
        'Für Bauherrschaften eines neuen Hauses ist die frühe Abklärung besonders wichtig: Eigenstrom, Energienachweis, Dachgestaltung und Netzanschluss werden gemeinsam geplant. Bei einer grösseren Erweiterung oder Aufstockung sollte die Bagatellgrenze ebenfalls mit der Energiefachstelle geprüft werden.',
        'Bei bestehenden Dächern ist die Solarberatung sinnvoll, wenn erst Potenzial, Eigenverbrauch und die Einbindung in Heizung oder Mobilität geklärt werden sollen. Wer ein Schutzobjekt besitzt oder in einer Ortsbild- beziehungsweise Landschaftsschutzzone plant, sollte die Verfahrensfrage vor einer Offertbestellung stellen.',
      ],
      bullets: [
        'Neubau oder relevante Erweiterung: Eigenstrompflicht und Energienachweis zuerst klären.',
        'Bestehendes Gebäude: Beratung vor der Investitionsentscheidung nutzen.',
        'Schutzobjekt oder Schutzzone: Melde- und Bewilligungsverfahren früh mit der Behörde abstimmen.',
      ],
      sourceIds: ['ai-implementation-2020', 'ai-energievollzug', 'ai-programme', 'ai-solaranlagen'],
    },
  ],
  faqs: [
    {
      question: 'Gibt es in Appenzell Innerrhoden einen kantonalen PV-Beitrag?',
      answer: 'Für die PV-Anlage ist die EIV des Bundes über Pronovo belegt. Das kantonale Angebot ist die Impulsberatung Solarenergie; ein allgemeiner kantonaler Investitionszuschuss für PV wird in den hier geprüften AI-Quellen nicht ausgewiesen.',
      sourceIds: ['ai-pronovo', 'ai-programme'],
    },
    {
      question: 'Was kostet die Solarberatung?',
      answer: 'Die Kundenbeteiligung an der Impulsberatung Solarenergie beträgt CHF 100. Die Beratung wird ausschliesslich durch den Verein Energie AR/AI durchgeführt.',
      sourceIds: ['ai-programme'],
    },
    {
      question: 'Wann ist die Beratung kostenlos?',
      answer: 'Wenn die Solarberatung gleichzeitig mit der Impulsberatung «erneuerbar heizen» durch den Verein Energie AR/AI stattfindet, ist die Solarberatung gratis. Das bezieht sich auf die Beratung, nicht auf die Solaranlage.',
      sourceIds: ['ai-programme'],
    },
    {
      question: 'Müssen Neubauten eigenen Strom produzieren?',
      answer: 'Ja. Seit dem 1. April 2020 verlangt das AI-Energierecht bei neuen Häusern einen Teil eigener Stromproduktion. Die Anforderung gilt nach der Vollzugshilfe auch für Anbauten und Aufstockungen oberhalb der Bagatellgrenze. PV ist eine mögliche Lösung.',
      sourceIds: ['ai-energievollzug', 'ai-implementation-2020'],
    },
    {
      question: 'Müssen Minergie-Gebäude ebenfalls Eigenstrom produzieren?',
      answer: 'Ja. Auch nach Minergie zertifizierte Gebäude müssen die Anforderungen an die Eigenstromerzeugung nach dem AI-Energierecht erfüllen.',
      sourceIds: ['ai-implementation-2020'],
    },
    {
      question: 'Brauche ich eine Baubewilligung?',
      answer: 'Eine genügend angepasste Dachanlage in Bau- oder Landwirtschaftszone ist meldepflichtig. Anlagen ausserhalb dieses Falls, an Schutzobjekten oder in Ortsbild- und Landschaftsschutzzonen brauchen eine Bewilligung.',
      sourceIds: ['ai-solaranlagen'],
    },
    {
      question: 'Wer zahlt die EIV?',
      answer: 'Die EIV ist die Bundesförderung und wird über Pronovo abgewickelt. Die kantonale Solarberatung ist davon getrennt und ersetzt die EIV nicht.',
      sourceIds: ['ai-pronovo', 'ai-programme'],
    },
  ],
  sources: [
    { id: 'ai-pronovo', authority: 'Pronovo / Bund', title: 'Einmalvergütung (EIV) für Photovoltaikanlagen', url: 'https://pronovo.ch/de/foerderung/photovoltaik' },
    { id: 'ai-programme', authority: 'Kanton Appenzell Innerrhoden', title: 'Kantonale Förderung: Impulsberatung Solarenergie', url: 'https://www.ai.ch/themen/planen-und-bauen/energie/foerderprogramme/gebaeudesanierung' },
    { id: 'ai-energievollzug', authority: 'Kanton Appenzell Innerrhoden', title: 'Energievollzug und Anforderungen für Neubauten', url: 'https://ai.ch/themen/planen-und-bauen/energie/energievollzug' },
    { id: 'ai-implementation-2020', authority: 'Kanton Appenzell Innerrhoden', title: 'Hinweise für die Vollzugspraxis des kantonalen Energiegesetzes, Version 1', url: 'https://ai.ch/themen/planen-und-bauen/energie/energievollzug/dokumente/hinweise-vollzugspraxis-energ-ai-v-1.pdf/download' },
    { id: 'ai-solaranlagen', authority: 'Kanton Appenzell Innerrhoden', title: 'Solaranlagen: Melde- und Bewilligungsverfahren', url: 'https://www.ai.ch/themen/planen-und-bauen/baugesuch-1/solaranlagen' },
  ],
};