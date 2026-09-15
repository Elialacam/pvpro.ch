import type { CantonGuide } from './types';

export const guide: CantonGuide = {
  id: 'aargau',
  path: '/solaranlage-aargau',
  canton: 'Aargau',
  title: 'Solaranlage Aargau 2026: Pflicht & Förderung | PvPro.ch',
  description: 'Photovoltaik im Aargau: Solarpflicht bei Neubauten, Förderung, Meldeverfahren und Regeln für Dach und Fassade im Jahr 2026.',
  h1: 'Solaranlage im Aargau: Was 2026 für Eigentümer gilt',
  intro: [
    'Im Aargau gilt die Solarpflicht nur für bestimmte Neubauten – nicht für jedes bestehende Haus. Hier erfahren Sie, welche Regeln gelten und welche Unterstützung es für Beratung und Sanierung gibt.',
  ],
  quickFacts: [
    { value: '>300 m²', label: 'massgebende Gebäudefläche bei betroffenen Neubauten', sourceIds: ['ag-solarbroschuere-2026', 'ag-energy-law'] },
    { value: '20 %', label: 'Mindestfläche für Module, wenn die Pflicht gilt', sourceIds: ['ag-solarbroschuere-2026', 'ag-energy-law'] },
    { value: '30 Tage', label: 'Wartefrist nach einer Meldung ohne Einwand', sourceIds: ['ag-solarbroschuere-2026'] },
    { value: 'CHF 350', label: 'Kantonsbeitrag für die Beratung zum selbst produzierten Strom; Eigenanteil ab CHF 150', sourceIds: ['ag-beratung-2026'] },
  ],
  sections: [
    {
      id: 'entscheidung',
      title: 'Entscheidungsbaum: Gilt die Aargauer Solarpflicht?',
      paragraphs: [
        'Nein, die Aargauer Solarpflicht nach § 26a der Energieverordnung gilt nicht für jedes Haus. Sie betrifft bestimmte Neubauten.',
        'Entscheidend ist die massgebende Gebäudefläche von mehr als 300 m². Einfamilienhäuser (SIA-Gebäudekategorie II) sind auch dann ausgenommen, wenn mehrere Gebäude zusammen mehr als 300 m² erreichen.',
      ],
      sourceIds: ['ag-energy-law', 'ag-solarbroschuere-2026'],
      notice: {
        title: 'Wichtig für Hauseigentümer',
        text: 'Mehr als 300 m² bedeuten nicht, dass jedes bestehende Einfamilienhaus eine Solarpflicht hat. Prüfen Sie Neubau, Gebäudekategorie, Fläche und mögliche Ausnahmen zusammen.',
        status: 'important',
      },
      module: {
        kind: 'decision-tree',
        title: 'Gilt die Solarpflicht für meinen Neubau?',
        intro: 'Beantworten Sie diese Fragen der Reihe nach. So sehen Sie schnell, ob die Pflicht für Ihr Projekt gilt.',
        items: [
          {
            title: '1. Ist es ein Neubau?',
            text: 'Nein: Diese Pflicht gilt nicht allgemein für bestehende Gebäude. Ja: Prüfen Sie Gebäudekategorie und massgebende Gebäudefläche.',
            sourceIds: ['ag-energy-law', 'ag-solarbroschuere-2026'],
          },
          {
            title: '2. Ist es ein Einfamilienhaus (SIA-Gebäudekategorie II)?',
            text: 'Ja: Diese Einfamilienhäuser sind nach der aktuellen Aargauer Solarbroschüre ausgenommen – auch wenn mehrere Gebäude zusammen mehr als 300 m² erreichen. Nein: Prüfen Sie die Fläche.',
            sourceIds: ['ag-solarbroschuere-2026'],
          },
          {
            title: '3. Ist die massgebende Gebäudefläche grösser als 300 m²?',
            text: 'Nein: Diese Pflicht greift nicht. Ja: Auf Dach oder Fassade ist grundsätzlich eine Anlage für Photovoltaik oder Solarthermie vorzusehen.',
            sourceIds: ['ag-energy-law', 'ag-solarbroschuere-2026'],
          },
          {
            title: '4. Gilt eine Ausnahme?',
            text: 'Ja: Schutzregeln oder zu hohe erwartete Kosten können eine Ausnahme ermöglichen. Die Details stehen unten. Nein: Die Anlage muss mindestens 20 % der massgebenden Gebäudefläche abdecken.',
            sourceIds: ['ag-energy-law', 'ag-solarbroschuere-2026'],
          },
        ],
      },
    },
    {
      id: 'solarpflicht',
      title: 'Was bedeutet die Aargauer Solarpflicht konkret?',
      paragraphs: [
        'Bei einem betroffenen Neubau müssen Photovoltaikmodule (PV-Module) oder eine solarthermische Anlage auf Dach oder Fassade mindestens 20 % der massgebenden Gebäudefläche abdecken. Entscheidend ist die Fläche, nicht eine bestimmte Leistung in Kilowatt.',
        'Zur Berechnung zählen Photovoltaikmodule und verglaste, selektiv beschichtete Absorber zusammen. Die für die Berechnung massgebende Gebäudefläche ist offiziell die «anrechenbare Gebäudefläche».',
        'Die Regel ist keine Pflicht für jedes bestehende Haus. Neben der Ausnahme für Einfamilienhäuser der Gebäudekategorie II gelten weitere Ausnahmen, zum Beispiel für Traglufthallen, Gewächshäuser mit verglastem Dach und Folientunnel.',
        'Eine Befreiung kann bei erhöhtem Orts- oder Landschaftsschutz oder wirtschaftlicher Unverhältnismässigkeit möglich sein. Als wirtschaftliche Kriterien nennt die Solarbroschüre eine fehlende Amortisation innert 25 Jahren sowie einen erwarteten Jahresertrag unter 70 kWh/m² bei Photovoltaik oder 200 kWh/m² bei Solarthermie. Diese Werte sind gesetzliche Kriterien, keine Rendite- oder Amortisationszusage.',
      ],
      bullets: [
        'Für eine betroffene Anlage gilt die Mindestfläche von 20 %, nicht eine pauschale Vorgabe in Kilowatt.',
        'Die Ausnahme muss im Bau- und Energienachweis nachvollziehbar begründet werden.',
      ],
      sourceIds: ['ag-energy-law', 'ag-solarbroschuere-2026'],
    },
    {
      id: 'foerderung',
      title: 'Förderungen 2026 im Aargau',
      paragraphs: [
        'Für die Solaranlage selbst ist die Einmalvergütung des Bundes (EIV) über Pronovo zuständig. Der Kanton zahlt CHF 350 an die Grobberatung zum selbst produzierten Strom; CHF 20, CHF 30 oder CHF 100 pro m² gibt es nur zusammen mit einer geförderten Sanierung und Photovoltaik.',
        'Die Höhe der EIV wird nach den geltenden Bundesbedingungen für das jeweilige Projekt bestimmt. Die EIV ist von der kantonalen Beratung und den Beiträgen an die Gebäudehülle getrennt.',
        'Bei der Grobberatung geht es unter anderem um das Potenzial für Photovoltaik, den Eigenverbrauch, einen Speicher, Elektromobilität und den Stromverbrauch. Die Kundinnen und Kunden beteiligen sich ab CHF 150. Die Beratung ist eine Planungsleistung und kein zusätzlicher Zuschuss zur Solaranlage.',
        'Die drei Beiträge zur Gebäudehülle setzen die gleichzeitige Installation einer Photovoltaikanlage voraus: CHF 20 pro m² bei einem begrünten Flachdach, CHF 30 pro m² bei einer Aufdachanlage auf dem Schrägdach und CHF 100 pro m² bei einer Indach- oder Fassadenanlage auf dem Schrägdach.',
      ],
      bullets: [
        'Flachdach mit Begrünung und PV: +CHF 20/m² im Rahmen der Gebäudehüllenmassnahme.',
        'Schrägdach mit Aufdachanlage: +CHF 30/m² im Rahmen der Gebäudehüllenmassnahme.',
        'Schrägdach mit Indach- oder Fassadenanlage: +CHF 100/m² im Rahmen der Gebäudehüllenmassnahme.',
        'Diese drei Beträge sind kein Beitrag für eine allein bestellte PV-Anlage. Das Gesuch für die förderberechtigte Sanierung ist vor Baubeginn zu prüfen.',
      ],
      sourceIds: ['ag-pronovo', 'ag-beratung-2026', 'ag-programm-2026'],
      notice: {
        title: 'Nicht verwechseln',
        text: 'CHF 350 bezahlt die Beratung, nicht die Solaranlage. Auch CHF 20, CHF 30 und CHF 100 pro m² sind an eine geförderte Gebäudehüllensanierung mit PV gebunden.',
        status: 'important',
      },
    },
    {
      id: 'bewilligung',
      title: 'Bewilligung oder Meldeverfahren?',
      paragraphs: [
        'Seit dem 1. Januar 2026 genügt für genügend angepasste Anlagen auf Dach oder Fassade oft eine Meldung (Meldeverfahren) statt eines vollständigen Baugesuchs. Das gilt nicht automatisch für jede Fassade.',
        'Bei Schutzobjekten, sensiblen Ortsbildern oder einer nicht genügend angepassten Anlage kann eine Baubewilligung nötig sein. Die Meldung erfolgt mit dem kantonalen Solarmeldeformular über die Online-Plattform EVEN.',
        'Vor dem Arbeitsbeginn müssen Ansichtsplan, Schnitt mit Massangaben, Anlagendaten, Datenblätter und Orientierungsplan vollständig eingereicht werden.',
      ],
      sourceIds: ['ag-solarbroschuere-2026', 'ag-energy-law'],
      module: {
        kind: 'process-flow',
        title: 'Der Aargauer Verfahrensweg',
        intro: 'Ob eine Meldung genügt, hängt von Gestaltung, Standort und Schutzstatus ab.',
        items: [
          {
            title: '1. Projekt einordnen',
            text: 'Genügend angepasste Dach- oder Fassadenanlage: Meldung prüfen. Nicht genügend angepasst, Schutzobjekt oder sensible Zone: Baubewilligung mit der Gemeinde klären.',
            sourceIds: ['ag-solarbroschuere-2026'],
          },
          {
            title: '2. Meldung über EVEN einreichen',
            text: 'Das Solarmeldeformular ist vor Baubeginn auszufüllen. Ansichtsplan, Schnitt mit Massangaben, Anlagendaten, Datenblätter und Orientierungsplan gehören dazu.',
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
      title: 'Was kostet eine Solaranlage hier?',
      paragraphs: [
        'Der Kanton veröffentlicht keinen festen PV-Preis. Entscheidend sind vor allem Dach, Anlagengrösse und gewünschte Ausstattung.',
        'Eine gute Offerte beschreibt das konkrete Gebäude und weist die Arbeiten einzeln aus. So können Sie Förderbedingungen, Eigenverbrauch und technische Ausführung vergleichen.',
        'Der sinnvollste Vergleich ist deshalb nicht ein pauschaler Online-Preis, sondern mehrere Offerten für dasselbe Projekt.',
      ],
      bullets: [
        'Dachfläche, Dachform und nutzbare Modulfläche; dazu die passende Aufdach-, Indach- oder Fassadenlösung',
        'Leistung und Ausrichtung der Anlage',
        'Gerüst, Zugang und Baustellenaufwand',
        'Elektroarbeiten, Zähler und Netzanschluss',
        'Wechselrichter',
        'Batteriespeicher und Ladeinfrastruktur',
        'erwarteter Eigenverbrauch im Haushalt',
        'Erfahrung, Garantien und Leistungsumfang des Installateurs',
      ],
      sourceIds: ['ag-pronovo', 'ag-solarbroschuere-2026'],
    },
    {
      id: 'fuer-wen',
      title: 'Für wen lohnt sich eine Solaranlage im Aargau besonders?',
      paragraphs: [
        'Besonders früh planen sollten Sie bei einem Neubau, der die Flächenschwelle überschreitet. Entscheiden Sie rechtzeitig zwischen Photovoltaik und Solarthermie, damit Dach, Fassade, Elektroplanung und Energienachweis zusammenpassen.',
        'Bei einem bestehenden Gebäude ist eine Grobberatung sinnvoll, wenn Dachsanierung, Speicher, Wärmepumpe, Elektromobilität oder ein höherer Eigenverbrauch gemeinsam geplant werden. Bei einer gleichzeitigen Dämmung der Gebäudehülle sollten Sie die drei Bonusfälle prüfen, aber nicht mit einer allgemeinen PV-Förderung verwechseln.',
      ],
      sourceIds: ['ag-energy-law', 'ag-beratung-2026', 'ag-programm-2026'],
    },
  ],
  faqs: [
    {
      question: 'Gilt im Aargau eine Solarpflicht?',
      answer: 'Ja, aber nicht für jedes Gebäude. Bei bestimmten Neubauten mit mehr als 300 m² massgebender Gebäudefläche ist auf Dach oder Fassade grundsätzlich Photovoltaik oder Solarthermie vorzusehen. Einfamilienhäuser der Gebäudekategorie II nach SIA und weitere gesetzliche Ausnahmen sind zu prüfen.',
      sourceIds: ['ag-energy-law', 'ag-solarbroschuere-2026'],
    },
    {
      question: 'Sind Einfamilienhäuser betroffen?',
      answer: 'Nein, Einfamilienhäuser der Gebäudekategorie II nach SIA sind gemäss Solarbroschüre ausdrücklich von dieser Pflicht ausgenommen. Das gilt auch, wenn mehrere Gebäude zusammen mehr als 300 m² massgebende Gebäudefläche erreichen; für andere Gebäudekategorien bleibt die Flächenprüfung wichtig.',
      sourceIds: ['ag-solarbroschuere-2026'],
    },
    {
      question: 'Wie gross muss die Anlage bei einem betroffenen Neubau sein?',
      answer: 'Photovoltaikmodule und verglaste, selektiv beschichtete Absorber einer solarthermischen Anlage müssen zusammen mindestens 20 % der massgebenden Gebäudefläche abdecken. Eine pauschale Mindestgrösse in Kilowatt nennt diese Regel nicht.',
      sourceIds: ['ag-energy-law', 'ag-solarbroschuere-2026'],
    },
    {
      question: 'Braucht eine PV-Anlage eine Baubewilligung?',
      answer: 'Nicht zwingend. Eine genügend angepasste Anlage auf Dach oder Fassade kann meldepflichtig sein. Bei Schutzobjekten, sensiblen Zonen oder fehlender Anpassung ist eine Baubewilligung zu klären; das Solarmeldeformular wird über EVEN eingereicht.',
      sourceIds: ['ag-solarbroschuere-2026'],
    },
    {
      question: 'Welche Förderung gibt es 2026?',
      answer: 'Die Einmalvergütung des Bundes (EIV) läuft über Pronovo. Zusätzlich unterstützt der Kanton die Grobberatung zum selbst produzierten Strom mit CHF 350; die Kundenbeteiligung beginnt bei CHF 150. CHF 20, CHF 30 oder CHF 100 pro m² gehören zur Kombination von Gebäudehüllendämmung und Photovoltaik, nicht zu einer eigenständigen PV-Förderung.',
      sourceIds: ['ag-pronovo', 'ag-beratung-2026', 'ag-programm-2026'],
    },
    {
      question: 'Gibt es einen Bonus bei Dachsanierung und Photovoltaik?',
      answer: 'Ja, wenn die Photovoltaik gleichzeitig mit der geförderten Gebäudehüllenmassnahme umgesetzt wird. Der Bonus beträgt je nach Fall CHF 20/m² beim begrünten Flachdach, CHF 30/m² bei der Aufdachanlage am Schrägdach oder CHF 100/m² bei Indachanlagen am Schrägdach oder an der Fassade.',
      sourceIds: ['ag-programm-2026'],
    },
    {
      question: 'Wann darf ich nach der Meldung mit dem Bau beginnen?',
      answer: 'Bei einer meldepflichtigen, genügend angepassten Anlage darf die Ausführung erfolgen, wenn die Behörde innert 30 Tagen nach Eingang der Meldung keine Einwände erhebt. Zuvor muss die Meldung über EVEN vollständig eingereicht sein.',
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