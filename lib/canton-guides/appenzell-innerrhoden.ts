import type { CantonGuide } from './types';

export const guide: CantonGuide = {
  id: 'appenzell-innerrhoden',
  path: '/solaranlage-appenzell-innerrhoden',
  canton: 'Appenzell Innerrhoden',
  title: 'Solaranlage Appenzell Innerrhoden: Förderung & Regeln | PvPro.ch',
  description: 'Photovoltaik in Appenzell Innerrhoden: EIV des Bundes, Solarberatung für CHF 100, Eigenstrompflicht bei Neubauten und Bewilligung.',
  h1: 'Solaranlage in Appenzell Innerrhoden: Förderung, Beratung und Bewilligung',
  intro: [
    'In Appenzell Innerrhoden kommt die Förderung der Solaranlage vom Bund über Pronovo. Die kantonale Solarberatung ist davon getrennt und kostet CHF 100. Bei Neubauten muss ein Teil des Stroms selbst produziert werden. Hier finden Sie die wichtigsten Regeln.',
  ],
  quickFacts: [
    { value: 'CHF 100', label: 'Kosten der Solarberatung, nicht ein Förderbeitrag für die PV-Anlage', sourceIds: ['ai-programme'] },
    { value: 'Kostenlos', label: 'Wenn die Solarberatung gleichzeitig mit der Beratung «erneuerbar heizen» stattfindet', sourceIds: ['ai-programme'] },
    { value: 'Pronovo', label: 'Die Förderung der Solaranlage kommt vom Bund', sourceIds: ['ai-pronovo'] },
    { value: 'Neubauten', label: 'Müssen einen Teil des Stroms selbst produzieren', sourceIds: ['ai-energievollzug', 'ai-implementation-2020'] },
  ],
  sections: [
    {
      id: 'saeulen',
      title: 'Appenzell Innerrhoden in drei Säulen',
      paragraphs: [
        'Bei einem Solarprojekt in Appenzell Innerrhoden müssen Sie drei Dinge trennen: Bundesförderung, Beratung und Bauverfahren. CHF 100 bezahlen Sie für die Beratung – nicht als Beitrag an die Solaranlage.',
      ],
      sourceIds: ['ai-pronovo', 'ai-programme', 'ai-solaranlagen'],
      notice: {
        title: 'Nicht verwechseln',
        text: 'CHF 100 sind die Kosten der Beratung, nicht die Förderung der Photovoltaikanlage. Die Förderung der Anlage läuft über den Bund und Pronovo.',
        status: 'important',
      },
      module: {
        kind: 'pillars',
        title: 'Was bei einem Solarprojekt zusammenkommt',
        intro: 'Die drei Teile haben verschiedene Zuständigkeiten und Bedingungen.',
        items: [
          {
            title: 'Bundesförderung',
            text: 'Die Einmalvergütung des Bundes (EIV) für eine Photovoltaikanlage (PV-Anlage) läuft über Pronovo. Ein allgemeiner kantonaler Zuschuss für die Anlage ist in den geprüften Quellen für Appenzell Innerrhoden nicht ausgewiesen.',
            sourceIds: ['ai-pronovo'],
          },
          {
            title: 'CHF 100 Solarberatung',
            text: 'Die Impulsberatung Solarenergie des Vereins Energie AR/AI kostet CHF 100. Wenn sie gleichzeitig mit der Beratung «erneuerbar heizen» durchgeführt wird, ist sie kostenlos.',
            sourceIds: ['ai-programme'],
          },
          {
            title: 'Meldung oder Bewilligung',
            text: 'Eine genügend angepasste Solaranlage auf einem Dach in Bau- oder Landwirtschaftszone ist meldepflichtig. Andere Anlagen brauchen eine Baubewilligung.',
            sourceIds: ['ai-solaranlagen'],
          },
        ],
      },
    },
    {
      id: 'eigenstrom',
      title: 'Eigenstrom bei Neubauten',
      paragraphs: [
        'Ja. Seit dem 1. April 2020 muss bei einem neuen Gebäude ein Teil des Stroms selbst produziert werden; Photovoltaik ist eine mögliche Umsetzung.',
        'Das revidierte Energiegesetz und die revidierte Energieverordnung von Appenzell Innerrhoden sind am 1. April 2020 in Kraft getreten. Die Eigenstrompflicht gilt nach der kantonalen Vollzugshilfe auch für Anbauten und Aufstockungen, wenn sie die Grenze für Bagatell-Erweiterungen überschreiten.',
      ],
      bullets: [
        'Die konkrete Anlagengrösse wird im Energienachweis festgelegt. Eine allgemeine Zahl in Kilowatt ist nicht vorgegeben.',
        'Eine Ersatzabgabe ist in Appenzell Innerrhoden nicht möglich. Auch eine Kompensation über ein anderes Gebäude ist ausgeschlossen.',
        'Ein Überschuss auf einem anderen Gebäude ersetzt die Anforderung am betroffenen Neubau nicht.',
        'Auch ein nach Minergie zertifiziertes Gebäude muss die Anforderungen an die eigene Stromproduktion erfüllen.',
        'Eine Befreiung kann bei besonderen Verhältnissen möglich sein. Sie muss mit weitergehender Energieeffizienz und dem kantonalen Nachweis begründet werden.',
      ],
      sourceIds: ['ai-energievollzug', 'ai-implementation-2020'],
      notice: {
        title: 'Wichtig für Neubauten',
        text: 'In Appenzell Innerrhoden gibt es für die Eigenstrompflicht keine Ersatzabgabe. Stromüberschuss von einem anderen Gebäude zählt ebenfalls nicht als Ersatz.',
        status: 'important',
      },
    },
    {
      id: 'foerderung',
      title: 'Förderung richtig einordnen',
      paragraphs: [
        'Für die Photovoltaikanlage gilt die Einmalvergütung des Bundes (EIV) über Pronovo. Appenzell Innerrhoden weist in den geprüften Quellen keinen allgemeinen kantonalen Investitionsbeitrag für die Anlage aus.',
        'Pronovo ist für das Bundesverfahren zuständig. Bedingungen, Termine und der projektbezogene Betrag müssen dort geprüft werden.',
        'Das kantonale Programm fördert die Impulsberatung Solarenergie für thermische oder elektrische Solaranlagen. Die Kundenbeteiligung beträgt CHF 100; die Beratung wird ausschliesslich durch den Verein Energie AR/AI durchgeführt.',
        'Wenn Sie zusätzlich und gleichzeitig die Impulsberatung «erneuerbar heizen» beim Verein buchen, ist die Solarberatung kostenlos. Das bedeutet: keine Kundenbeteiligung für diese kombinierte Beratung – nicht, dass Solaranlage oder Strom gratis sind.',
      ],
      sourceIds: ['ai-pronovo', 'ai-programme'],
    },
    {
      id: 'bewilligung',
      title: 'Brauche ich eine Baubewilligung?',
      paragraphs: [
        'Für eine genügend angepasste Solaranlage auf einem Dach in Bau- oder Landwirtschaftszone genügt grundsätzlich eine Meldung (Meldeverfahren). Für andere Anlagen, Schutzobjekte oder Schutzzonen brauchen Sie eine Baubewilligung.',
        'Nicht auf dem Dach montierte oder nicht genügend angepasste Anlagen brauchen ebenfalls eine Bewilligung. Das gilt insbesondere in Ortsbildschutz- und Landschaftsschutzzonen; eine Dachanlage ist nicht allein wegen ihrer Photovoltaik automatisch bewilligungsfrei.',
        'Das kantonale Merkblatt und Formular sollten Sie vor dem Start mit der zuständigen Stelle klären.',
      ],
      sourceIds: ['ai-solaranlagen'],
      module: {
        kind: 'process-flow',
        title: 'Verfahren in drei Prüfschritten',
        intro: 'Standort und Gestaltung entscheiden, ob eine Meldung genügt.',
        items: [
          {
            title: '1. Liegt die Anlage auf einem Dach in Bau- oder Landwirtschaftszone?',
            text: 'Ja: Prüfen Sie, ob die Anlage genügend angepasst ist, und bereiten Sie die Meldung vor. Nein: Klären Sie eine Baubewilligung ab.',
            sourceIds: ['ai-solaranlagen'],
          },
          {
            title: '2. Ist die Anlage genügend angepasst und kein Schutzobjekt betroffen?',
            text: 'Ja: Die Meldung ist der vorgesehene Weg. Bei fehlender Anpassung, einem Schutzobjekt oder einer Schutz- beziehungsweise Ortsbildzone ist ein Baugesuch nötig.',
            sourceIds: ['ai-solaranlagen'],
          },
          {
            title: '3. Energienachweis abschliessen',
            text: 'Bei einem Baugesuch reichen Sie Energiedossier, Formulare, Pläne und Nachweise ein. Danach bestätigt die Bauherrschaft die vorschriftsgemässe Ausführung vor dem Bezug oder bevor die Anlage in Betrieb geht.',
            sourceIds: ['ai-energievollzug'],
          },
        ],
      },
    },
    {
      id: 'kosten',
      title: 'Was kostet eine Solaranlage hier?',
      paragraphs: [
        'Der Kanton veröffentlicht keinen festen PV-Preis. Entscheidend sind vor allem Dach, Anlagengrösse und gewünschte Ausstattung.',
        'Die CHF 100 der Solarberatung sind eine Kundenbeteiligung für Beratung und kein Beitrag an die Investition. Eine gute Offerte beschreibt das konkrete Gebäude und weist die Arbeiten einzeln aus.',
        'Der sinnvollste Vergleich ist deshalb nicht ein pauschaler Online-Preis, sondern mehrere Offerten für dasselbe Projekt.',
      ],
      bullets: [
        'Dachfläche, Dachform und nutzbare Modulfläche; dazu Dachart, Unterkonstruktion und Anpassung',
        'Leistung und Ausrichtung der Anlage',
        'Gerüst, Zugang und Baustellenaufwand',
        'Elektroarbeiten, Zähler und Netzanschluss',
        'Wechselrichter',
        'Batteriespeicher und Ladepunkt für Elektromobilität',
        'erwarteter Eigenverbrauch',
        'Installateur, Garantien, Dokumentation und Leistungsumfang',
      ],
      sourceIds: ['ai-programme', 'ai-solaranlagen', 'ai-pronovo'],
    },
    {
      id: 'fuer-wen',
      title: 'Für wen lohnt sich eine Solaranlage hier besonders?',
      paragraphs: [
        'Für ein neues Haus ist die frühe Abklärung besonders wichtig: Eigenstrom, Energienachweis, Dachgestaltung und Netzanschluss werden gemeinsam geplant. Bei einer grösseren Erweiterung oder Aufstockung sollten Sie die Bagatellgrenze mit der Energiefachstelle prüfen.',
        'Bei bestehenden Dächern ist die Solarberatung sinnvoll, wenn Potenzial, Eigenverbrauch und die Verbindung mit Heizung oder Mobilität noch offen sind. Wer ein Schutzobjekt besitzt oder in einer Ortsbild- beziehungsweise Landschaftsschutzzone plant, sollte das Verfahren vor einer Offertbestellung klären.',
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
      answer: 'Für die Photovoltaikanlage ist die Einmalvergütung des Bundes (EIV) über Pronovo belegt. Das kantonale Angebot ist die Impulsberatung Solarenergie; ein allgemeiner kantonaler Investitionszuschuss für die Anlage wird in den geprüften Quellen nicht ausgewiesen.',
      sourceIds: ['ai-pronovo', 'ai-programme'],
    },
    {
      question: 'Was kostet die Solarberatung?',
      answer: 'Die Solarberatung kostet CHF 100. Sie wird ausschliesslich durch den Verein Energie AR/AI durchgeführt.',
      sourceIds: ['ai-programme'],
    },
    {
      question: 'Wann ist die Beratung kostenlos?',
      answer: 'Wenn die Solarberatung gleichzeitig mit der Impulsberatung «erneuerbar heizen» durch den Verein Energie AR/AI stattfindet, ist die Solarberatung kostenlos. Das gilt für die Beratung, nicht für die Solaranlage.',
      sourceIds: ['ai-programme'],
    },
    {
      question: 'Müssen Neubauten eigenen Strom produzieren?',
      answer: 'Ja. Seit dem 1. April 2020 verlangt das Energierecht von Appenzell Innerrhoden bei neuen Häusern einen Teil eigener Stromproduktion. Die Anforderung gilt nach der Vollzugshilfe auch für Anbauten und Aufstockungen oberhalb der Bagatellgrenze; Photovoltaik ist eine mögliche Lösung.',
      sourceIds: ['ai-energievollzug', 'ai-implementation-2020'],
    },
    {
      question: 'Müssen Minergie-Gebäude ebenfalls Eigenstrom produzieren?',
      answer: 'Ja. Auch nach Minergie zertifizierte Gebäude müssen die Anforderungen an die eigene Stromproduktion nach dem Energierecht von Appenzell Innerrhoden erfüllen.',
      sourceIds: ['ai-implementation-2020'],
    },
    {
      question: 'Brauche ich eine Baubewilligung?',
      answer: 'Eine genügend angepasste Dachanlage in Bau- oder Landwirtschaftszone ist meldepflichtig. Anlagen ausserhalb dieses Falls, an Schutzobjekten oder in Ortsbild- und Landschaftsschutzzonen brauchen eine Baubewilligung.',
      sourceIds: ['ai-solaranlagen'],
    },
    {
      question: 'Wer zahlt die EIV?',
      answer: 'Die Einmalvergütung des Bundes (EIV) wird über Pronovo abgewickelt. Die kantonale Solarberatung ist davon getrennt und ersetzt die EIV nicht.',
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