import type { CantonGuide } from './types';

export const guide: CantonGuide = {
  id: 'aargau',
  path: '/solaranlage-aargau',
  canton: 'Aargau',
  title: 'Solaranlage Aargau 2026: Pflicht & Förderung | PvPro.ch',
  description: 'Photovoltaik im Aargau: Solarpflicht bei Neubauten, Förderung, Meldeverfahren und Regeln für Dach und Fassade im Jahr 2026.',
  h1: 'Solaranlage im Aargau: Solarpflicht, Förderung und Bewilligung 2026',
  intro: [
    'Im Aargau gelten für grössere Neubauten klare Regeln zur Nutzung der Solarenergie. Auch genügend angepasste Fassadenanlagen können das Meldeverfahren nutzen.',
    'Für die Anlage selbst ist die Einmalvergütung des Bundes über Pronovo von den kantonalen Angeboten zu trennen. Der Kanton unterstützt Beratung und bestimmte Sanierungskombinationen, nicht pauschal jede PV-Anlage.',
  ],
  quickFacts: [
    { value: '>300 m²', label: 'anrechenbare Gebäudefläche als Schwelle bei betroffenen Neubauten', sourceIds: ['ag-solarbroschuere-2026', 'ag-energy-law'] },
    { value: '20 %', label: 'Mindestfläche für PV-Module oder Solarthermie, wenn die Pflicht greift', sourceIds: ['ag-solarbroschuere-2026', 'ag-energy-law'] },
    { value: '30 Tage', label: 'Wartefrist nach einer normalen Solar-Meldung ohne Einwand', sourceIds: ['ag-solarbroschuere-2026'] },
    { value: 'CHF 350', label: 'Kantonsbeitrag an die Grobberatung Eigenstrom; Eigenanteil ab CHF 150', sourceIds: ['ag-beratung-2026'] },
  ],
  sections: [
    {
      id: 'entscheidung',
      title: 'Entscheidungsbaum: Gilt die Aargauer Solarpflicht?',
      paragraphs: [
        'Die Pflicht aus § 26a Energieverordnung ist keine allgemeine Nachrüstungspflicht für bestehende Einfamilienhäuser. Sie betrifft bestimmte Neubauten und wird bereits in der Projektierung geprüft.',
      ],
      sourceIds: ['ag-energy-law', 'ag-solarbroschuere-2026'],
      module: {
        kind: 'decision-tree',
        title: 'Gilt die Solarpflicht für meinen Neubau?',
        intro: 'Beantworten Sie die Fragen in Reihenfolge. Jede Antwort zeigt den nächsten rechtlichen Prüfschritt.',
        items: [
          {
            title: '1. Ist es ein Neubau?',
            text: 'Nein: Aus § 26a folgt keine allgemeine Neubau-Solarpflicht für ein bestehendes Gebäude. Ja: Prüfen Sie Gebäudekategorie und anrechenbare Fläche.',
            sourceIds: ['ag-energy-law', 'ag-solarbroschuere-2026'],
          },
          {
            title: '2. Ist es ein Einfamilienhaus der SIA-Gebäudekategorie II?',
            text: 'Ja: Diese Einfamilienhäuser sind gemäss aktueller Aargauer Solarbroschüre von der Pflicht ausgenommen, auch wenn mehrere Gebäude zusammen mehr als 300 m² erreichen. Nein: Weiter mit der Flächenprüfung.',
            sourceIds: ['ag-solarbroschuere-2026'],
          },
          {
            title: '3. Beträgt die anrechenbare Gebäudefläche mehr als 300 m²?',
            text: 'Nein: Diese Solarpflicht greift nicht. Ja: Auf dem Dach oder an der Fassade ist grundsätzlich eine PV- oder Solarthermieanlage vorzusehen.',
            sourceIds: ['ag-energy-law', 'ag-solarbroschuere-2026'],
          },
          {
            title: '4. Greift eine gesetzliche Ausnahme?',
            text: 'Ja: Orts- oder Landschaftsschutz beziehungsweise wirtschaftliche Unverhältnismässigkeit kann befreien; dies muss fachlich beziehungsweise mit der Berechnungshilfe nachgewiesen werden. Nein: Die Anlage muss mindestens 20 % der anrechenbaren Gebäudefläche abdecken.',
            sourceIds: ['ag-energy-law', 'ag-solarbroschuere-2026'],
          },
        ],
      },
    },
    {
      id: 'solarpflicht',
      title: 'Was bedeutet die Aargauer Solarpflicht konkret?',
      paragraphs: [
        'Bei einem betroffenen Neubau kann die Solaranlage auf dem Dach oder an der Fassade liegen. Zulässig sind Photovoltaik oder Solarthermie. Entscheidend ist nicht eine bestimmte Kilowattzahl, sondern die gesetzlich definierte Fläche: Module und verglaste, selektiv beschichtete Absorber müssen zusammen mindestens 20 % der anrechenbaren Gebäudefläche ergeben.',
        'Die Regel ist deshalb nicht mit einer Pflicht für jedes bestehende Haus gleichzusetzen. Neben der SIA-Ausnahme für Einfamilienhäuser gelten weitere Ausnahmen für bestimmte Bauten wie Traglufthallen, Gewächshäuser mit verglastem Dach und Folientunnel.',
        'Eine Befreiung kann bei erhöhtem Orts- oder Landschaftsschutz oder wirtschaftlicher Unverhältnismässigkeit möglich sein. Die Solarbroschüre nennt zwei wirtschaftliche Prüfkriterien: fehlende Amortisation innert 25 Jahren sowie einen prognostizierten Jahresertrag unter 70 kWh/m² bei PV beziehungsweise 200 kWh/m² bei Solarthermie. Das sind gesetzliche Kriterien, keine Rendite- oder ROI-Zusagen.',
      ],
      bullets: [
        'Für eine betroffene Anlage gilt die Mindestfläche von 20 %, nicht eine pauschale kW-Vorgabe.',
        'Die Ausnahme muss im Bau- und Energienachweis nachvollziehbar begründet werden.',
      ],
      sourceIds: ['ag-energy-law', 'ag-solarbroschuere-2026'],
    },
    {
      id: 'foerderung',
      title: 'Förderungen 2026 im Aargau',
      paragraphs: [
        'Die Einmalvergütung (EIV) ist ein Bundesbeitrag und wird über Pronovo abgewickelt. Die Höhe wird projektbezogen nach den geltenden Bundesbedingungen bestimmt. Sie ist von den kantonalen Beratungs- und Gebäudehüllenbeiträgen getrennt.',
        'Für die Grobberatung Eigenstrom sieht das Aargauer Förderprogramm 2026 einen Kantonsbeitrag von CHF 350 vor. Die Kundinnen und Kunden beteiligen sich ab CHF 150. Besprochen werden unter anderem PV-Potenzial, Eigenverbrauch, Speicher, Elektromobilität und Stromverbrauch. Die Beratung ist somit eine Planungsleistung, kein zusätzlicher PV-Zuschuss.',
        'Ein weiterer Beitrag gehört zur Wärmedämmung und setzt die gleichzeitige Installation einer Photovoltaikanlage voraus. Bei einem begrünten Flachdach sind CHF 20 pro m² vorgesehen, bei einer Aufdachanlage auf dem Schrägdach CHF 30 pro m² und bei einer Indach- oder Fassadenanlage auf dem Schrägdach CHF 100 pro m².',
      ],
      bullets: [
        'Flachdach mit Begrünung und PV: +CHF 20/m² im Rahmen der Gebäudehüllenmassnahme.',
        'Schrägdach mit Aufdachanlage: +CHF 30/m² im Rahmen der Gebäudehüllenmassnahme.',
        'Schrägdach mit Indach- oder Fassadenanlage: +CHF 100/m² im Rahmen der Gebäudehüllenmassnahme.',
        'Diese drei Beträge sind kein Förderbeitrag für eine isoliert bestellte PV-Anlage. Das Gesuch für die förderberechtigte Sanierung ist vor Baubeginn zu prüfen.',
      ],
      sourceIds: ['ag-pronovo', 'ag-beratung-2026', 'ag-programm-2026'],
    },
    {
      id: 'bewilligung',
      title: 'Bewilligung oder Meldeverfahren?',
      paragraphs: [
        'Seit dem 1. Januar 2026 können genügend angepasste Anlagen auf dem Dach oder an der Fassade im Meldeverfahren abgewickelt werden. Das gilt nicht automatisch für jede Fassade: Schutzobjekte, sensible Ortsbilder und Anlagen, die nicht genügend angepasst sind, können ein Baubewilligungsverfahren erfordern.',
        'Die Meldung erfolgt mit dem kantonalen Solarmeldeformular über die Plattform EVEN. Vor dem Arbeitsbeginn müssen die verlangten Pläne, Massangaben, Datenblätter und der Orientierungsplan vollständig eingereicht werden.',
      ],
      sourceIds: ['ag-solarbroschuere-2026', 'ag-energy-law'],
      module: {
        kind: 'process-flow',
        title: 'Der Aargauer Verfahrensweg',
        intro: 'Die Einordnung hängt von Anpassung, Standort und Schutzstatus ab.',
        items: [
          {
            title: '1. Projekt einordnen',
            text: 'Genügend angepasste Dach- oder Fassadenanlage: Meldeverfahren prüfen. Nicht genügend angepasst, Schutzobjekt oder sensible Zone: Baubewilligung mit der Gemeinde klären.',
            sourceIds: ['ag-solarbroschuere-2026'],
          },
          {
            title: '2. Meldung über EVEN einreichen',
            text: 'Das Solarmeldeformular ist vor Baubeginn auszufüllen. Ansichtsplan, Schnitt mit Massangaben, Anlagendaten und Orientierungsplan gehören zu den verlangten Unterlagen.',
            sourceIds: ['ag-solarbroschuere-2026'],
          },
          {
            title: '3. 30 Tage abwarten',
            text: 'Eine meldepflichtige Anlage darf ausgeführt werden, wenn die Behörde innert 30 Tagen nach Eingang der Meldung keine Einwände erhebt. Bei Einwänden oder Bewilligungspflicht gilt der Entscheid der zuständigen Behörde.',
            sourceIds: ['ag-solarbroschuere-2026'],
          },
        ],
      },
    },
    {
      id: 'kosten',
      title: 'Kosten & Planung im Aargau',
      paragraphs: [
        'Ein kantonaler Einheitspreis für eine Solaranlage existiert nicht. Eine seriöse Offerte muss das konkrete Gebäude aufnehmen und die Arbeiten getrennt ausweisen. So lassen sich Förderbedingungen, Eigenverbrauch und die technische Ausführung miteinander prüfen.',
        'Für die Planung sind insbesondere diese acht Faktoren relevant:',
      ],
      bullets: [
        'Dachfläche und nutzbare Modulfläche',
        'Anlagenleistung und gewünschte Ausrichtung',
        'Dachart sowie Aufdach-, Indach- oder Fassadenlösung',
        'Gerüst und Zugang zur Baustelle',
        'Elektroarbeiten, Zähler und Netzanschluss',
        'Speicher und Ladeinfrastruktur',
        'erwarteter Eigenverbrauch im Haushalt',
        'Erfahrung und Leistungsumfang des Installateurs',
      ],
      sourceIds: ['ag-pronovo', 'ag-solarbroschuere-2026'],
    },
    {
      id: 'fuer-wen',
      title: 'Für wen lohnt sich eine Solaranlage im Aargau besonders?',
      paragraphs: [
        'Besonders klar ist der Planungsbedarf bei einem Neubau, der die Flächenschwelle überschreitet. Wer früh zwischen PV und Solarthermie entscheidet, kann Dach, Fassade, Elektroplanung und Energienachweis aufeinander abstimmen.',
        'Bei einem bestehenden Gebäude lohnt sich eine Grobberatung, wenn Dachsanierung, Speicher, Wärmepumpe, Elektromobilität oder eine höhere Eigenverbrauchsquote zusammen geplant werden. Wer gleichzeitig die Gebäudehülle dämmt, sollte die drei kombinierten Bonusfälle prüfen, sie aber nicht mit einer allgemeinen PV-Förderung verwechseln.',
      ],
      sourceIds: ['ag-energy-law', 'ag-beratung-2026', 'ag-programm-2026'],
    },
  ],
  faqs: [
    {
      question: 'Gilt im Aargau eine Solarpflicht?',
      answer: 'Ja, aber nicht für jedes Gebäude. Bei bestimmten Neubauten mit mehr als 300 m² anrechenbarer Gebäudefläche ist auf Dach oder Fassade grundsätzlich PV oder Solarthermie vorzusehen. Die Ausnahme für Einfamilienhäuser der SIA-Gebäudekategorie II und weitere gesetzliche Ausnahmen sind zu prüfen.',
      sourceIds: ['ag-energy-law', 'ag-solarbroschuere-2026'],
    },
    {
      question: 'Sind Einfamilienhäuser betroffen?',
      answer: 'Einfamilienhäuser der SIA-Gebäudekategorie II sind gemäss Solarbroschüre ausdrücklich von dieser Pflicht ausgenommen, auch wenn mehrere Gebäude zusammen mehr als 300 m² anrechenbare Gebäudefläche erreichen. Für andere Gebäudekategorien bleibt die Flächenprüfung relevant.',
      sourceIds: ['ag-solarbroschuere-2026'],
    },
    {
      question: 'Wie gross muss die Anlage bei einem betroffenen Neubau sein?',
      answer: 'Die PV-Module und verglasten, selektiv beschichteten Absorber einer Solarthermieanlage müssen zusammen mindestens 20 % der anrechenbaren Gebäudefläche ergeben. Eine pauschale kW-Mindestgrösse nennt diese Regel nicht.',
      sourceIds: ['ag-energy-law', 'ag-solarbroschuere-2026'],
    },
    {
      question: 'Braucht eine PV-Anlage eine Baubewilligung?',
      answer: 'Nicht zwingend. Eine genügend angepasste Anlage auf dem Dach oder an der Fassade kann meldepflichtig sein. Bei Schutzobjekten, sensiblen Zonen oder fehlender Anpassung ist eine Baubewilligung zu klären. Das Solarmeldeformular wird über EVEN eingereicht.',
      sourceIds: ['ag-solarbroschuere-2026'],
    },
    {
      question: 'Welche Förderung gibt es 2026?',
      answer: 'Die EIV des Bundes läuft über Pronovo. Zusätzlich unterstützt der Kanton die Grobberatung Eigenstrom mit CHF 350 bei einer Kundenbeteiligung ab CHF 150. Weitere Beträge von CHF 20, CHF 30 oder CHF 100 pro m² gehören zur Kombination von Gebäudehüllendämmung und PV, nicht zu einer eigenständigen PV-Förderung.',
      sourceIds: ['ag-pronovo', 'ag-beratung-2026', 'ag-programm-2026'],
    },
    {
      question: 'Gibt es einen Bonus bei Dachsanierung und Photovoltaik?',
      answer: 'Ja, wenn die PV gleichzeitig mit der geförderten Gebäudehüllenmassnahme umgesetzt wird. Der Bonus beträgt je nach Fall CHF 20/m² beim begrünten Flachdach, CHF 30/m² bei der Aufdachanlage am Schrägdach oder CHF 100/m² bei Indachanlagen am Schrägdach oder an der Fassade.',
      sourceIds: ['ag-programm-2026'],
    },
    {
      question: 'Wann darf ich nach der Meldung mit dem Bau beginnen?',
      answer: 'Bei einer meldepflichtigen, genügend angepassten Anlage darf die Ausführung erfolgen, wenn die Behörde innert 30 Tagen nach Eingang der Meldung keine Einwände erhebt. Vorher muss die Meldung über EVEN vollständig eingereicht sein.',
      sourceIds: ['ag-solarbroschuere-2026'],
    },
  ],
  sources: [
    { id: 'ag-solarbroschuere-2026', authority: 'Kanton Aargau', title: 'Solarbroschüre, 4. Auflage 2026', url: 'https://www.ag.ch/media/kanton-aargau/bvu/energie/bauen-energie/vollzugshilfen-und-formulare/solarbroschuere-2026.pdf' },
    { id: 'ag-energy-law', authority: 'Kanton Aargau', title: 'Energieverordnung § 26a und Energievollzug', url: 'https://gesetzessammlungen.ag.ch/app/de/texts_of_law/773.211/versions/3276' },
    { id: 'ag-programm-2026', authority: 'Kanton Aargau', title: 'Förderprogramm Energie 2026', url: 'https://www.ag.ch/media/kanton-aargau/bvu/energie/foerderungen/foerderprogramm-2026.pdf' },
    { id: 'ag-beratung-2026', authority: 'Kanton Aargau', title: 'Beratungen im Förderprogramm 2026', url: 'https://www.ag.ch/media/kanton-aargau/bvu/energie/foerderungen/beratungen-foerderprogramm.pdf' },
    { id: 'ag-pronovo', authority: 'Pronovo / Bund', title: 'Einmalvergütung (EIV) für Photovoltaikanlagen', url: 'https://pronovo.ch/de/foerderung/photovoltaik' },
  ],
};