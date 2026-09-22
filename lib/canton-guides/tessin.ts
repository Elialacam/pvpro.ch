import type { CantonGuide } from './types';

const sources = [
  {
    id: 'ti-ruen',
    authority: 'Kanton Tessin',
    title: 'Regolamento sull’utilizzazione dell’energia (RUEn), Art. 14 und Art. 36',
    url: 'https://m3.ti.ch/CAN/RLeggi/public/index.php/raccolta-leggi/legge/num/870',
  },
  {
    id: 'ti-solar-meldeverfahren',
    authority: 'Kanton Tessin',
    title: 'Regolamento di applicazione della legge edilizia (RLE): Solaranlagen',
    url: 'https://m3.ti.ch/CAN/RLeggi/public/index.php/raccolta-leggi/legge/num/407',
  },
  {
    id: 'ti-rfer',
    authority: 'Kanton Tessin',
    title: 'Regolamento del Fondo per le energie rinnovabili (RFER), Art. 24–25',
    url: 'https://m3.ti.ch/CAN/RLeggi/public/index.php/raccolta-leggi/legge/num/525',
  },
  {
    id: 'ti-fer-2026',
    authority: 'Kanton Tessin / AET',
    title: 'RFER 2026: Mindestvergütung sowie RCP und CLE',
    url: 'https://www4.ti.ch/tich/area-media/comunicati/dettaglio-comunicato?NEWS_ID=256850',
  },
  {
    id: 'pronovo-eiv',
    authority: 'Pronovo / Bund',
    title: 'Einmalvergütung (EIV) für Photovoltaikanlagen',
    url: 'https://pronovo.ch/de/foerderung/photovoltaik',
  },
  {
    id: 'pronovo-tariff-calculator',
    authority: 'Pronovo / Bund',
    title: 'Tarifrechner für Photovoltaik',
    url: 'https://pronovo.ch/de/services/tarifrechner',
  },
] as const;

export const guide: CantonGuide = {
  id: 'tessin',
  path: '/solaranlage-tessin',
  canton: 'Tessin',
  title: 'Solaranlage Tessin: Eigenstrompflicht und FER | PvPro.ch',
  description: 'Für Neubauten im Tessin gelten 10 W/m² Eigenstromleistung. Die FER-Meldung muss innert 12 Monaten nach dem tatsächlichen Netzanschluss erfolgen.',
  h1: 'Solaranlage im Tessin: Förderung, Eigenstrompflicht und FER 2026',
  intro: [
    'Im Tessin müssen Neubauten und vergleichbare Vorhaben grundsätzlich erneuerbaren Strom erzeugen. Gleichzeitig gibt es neben der Bundesförderung von Pronovo den kantonalen CU-FV und seit 2026 neue FER-Regeln für die Einspeisung.',
    'Für eine saubere Planung sind Gemeinde, Netzanschluss, Pronovo und FER getrennt zu bearbeiten. Die folgenden Schritte zeigen, welche Stelle wofür zuständig ist und welche Fristen Sie einhalten müssen.',
  ],
  quickFacts: [
    {
      value: '10 W/m² neue SRE',
      label: 'Vorgabe für Neubauten und vergleichbare Vorhaben',
      sourceIds: ['ti-ruen'],
    },
    {
      value: 'Pflicht strikt <30 kW',
      label: '30 kW oder mehr werden aus dieser Vorgabe nie verlangt',
      sourceIds: ['ti-ruen'],
    },
    {
      value: '30 Tage vorher',
      label: 'Meldung an die Gemeinde, falls keine Baubewilligung nötig ist',
      sourceIds: ['ti-solar-meldeverfahren'],
    },
    {
      value: '12 Monate',
      label: 'FER-Meldung ab tatsächlichem Netzanschluss',
      sourceIds: ['ti-rfer'],
    },
  ],
  ctaAfterSection: 'verfahren',
  sections: [
    {
      id: 'verfahren',
      title: 'Gemeinde, Pronovo und FER richtig einordnen',
      paragraphs: [
        'Starten Sie mit der baulichen Einordnung bei der Gemeinde und führen Sie die Förderverfahren separat. Die Reihenfolge im Überblick dient der Orientierung; sie bedeutet nicht, dass Pronovo und FER in jedem Projekt zwingend nacheinander beantragt werden müssen.',
      ],
      sourceIds: ['ti-solar-meldeverfahren', 'ti-rfer', 'pronovo-eiv'],
      module: {
        kind: 'fer-procedure',
        title: 'Gemeinde, Pronovo und FER – drei verschiedene Verfahren',
        intro:
          'Diese sechs Stationen zeigen die Zuständigkeiten. Klären Sie konkrete Eingabezeitpunkte mit den beteiligten Stellen, damit parallele Arbeitsschritte und Fristen korrekt behandelt werden.',
        items: [
          {
            title: '1. Projekt einordnen',
            value: 'Bauprojekt',
            text: 'Prüfen, ob es sich um einen Neubau, eine Erweiterung oder einen einem Neubau gleichgestellten Umbau handelt, und die neue SRE sowie eine mögliche Ausnahme bestimmen.',
            detail: 'SRE beziehungsweise Energiebezugsfläche ist die beheizte relevante Gebäudefläche.',
            sourceIds: ['ti-ruen'],
          },
          {
            title: '2. Gemeinde kontaktieren',
            value: 'Gemeinde',
            text: 'Mit der Gemeinde klären, ob eine Baubewilligung nötig ist oder das Meldeverfahren genügt.',
            detail: 'Meldeverfahren bedeutet eine Meldung anstelle eines normalen Baubewilligungsverfahrens.',
            sourceIds: ['ti-solar-meldeverfahren'],
          },
          {
            title: '3. Installieren und ans Netz anschliessen',
            value: 'Anlage + Netz',
            text: 'Nach Abschluss des passenden Bauverfahrens die Anlage installieren und den tatsächlichen Netzanschluss dokumentieren.',
            detail: 'Das Datum des Netzanschlusses setzt die Zwölfmonatsfrist für die FER-Inbetriebnahmemeldung in Gang.',
            sourceIds: ['ti-rfer'],
          },
          {
            title: '4. Bundesförderung bearbeiten',
            value: 'Pronovo',
            text: 'Die Einmalvergütung des Bundes bei Pronovo als eigenes Förderverfahren prüfen und die für die Anlage passende Kategorie bestimmen.',
            detail: 'Pronovo und der kantonale CU-FV sind unterschiedliche Förderwege.',
            sourceIds: ['pronovo-eiv', 'ti-rfer'],
          },
          {
            title: '5. FER separat melden',
            value: 'FER',
            text: 'Die Inbetriebnahme spätestens zwölf Monate nach dem tatsächlichen Netzanschluss beim FER melden; eine verspätete Meldung kann bei Photovoltaik ausgeschlossen werden.',
            detail: 'Die bauliche Meldung an die Gemeinde ersetzt diese FER-Meldung nicht.',
            sourceIds: ['ti-rfer'],
          },
          {
            title: '6. Eigenverbrauch und Überschuss festlegen',
            value: 'RCP + CLE',
            text: 'Bei CU-FER-Anlagen seit 2026 prüfen, ob ein RCP oder eine CLE sinnvoll ist und wie der Überschuss nach den FER-/AET-Bedingungen behandelt wird.',
            detail: 'RCP steht für den Zusammenschluss zum Eigenverbrauch; CLE bezeichnet eine lokale Elektrizitätsgemeinschaft.',
            sourceIds: ['ti-fer-2026'],
          },
        ],
      },
    },
    {
      id: 'eigenstrom',
      title: 'Eigenstrompflicht bei Neubau, Erweiterung und Umbau',
      paragraphs: [
        'Planen Sie bei einem Neubau, einer Erweiterung oder einem einem Neubau gleichgestellten Umbau grundsätzlich 10 W erneuerbare Stromerzeugung pro m² neuer SRE ein. SRE beziehungsweise Energiebezugsfläche bezeichnet die beheizte relevante Gebäudefläche.',
        'Die verlangte Leistung bleibt strikt unter 30 kW: Aus dieser Vorschrift wird nie eine Leistung von 30 kW oder mehr gefordert. Das ist eine Obergrenze der Pflicht und keine Begrenzung für eine freiwillig grösser geplante Anlage.',
        'Ist die Stromerzeugungsanlage schwierig umzusetzen oder unverhältnismässig, kann der gewichtete Energiebedarf des Gebäudes stattdessen um weitere 5 kWh pro m² und Jahr reduziert werden. Wird die Eigenstrompflicht teilweise erfüllt, sinkt auch diese zusätzliche Effizienzanforderung proportional.',
      ],
      bullets: [
        'Ausnahme bei einer Erweiterung mit weniger als 50 m² neuer SRE',
        'Ausnahme bei einer Erweiterung um weniger als 20% des bestehenden Teils und gleichzeitig höchstens 1’000 m²',
        'Ausnahmen für bestimmte ISOS-Ortsbilder und Kerne',
        'Ausnahmen für geschützte Kulturgüter und deren Schutzperimeter',
      ],
      sourceIds: ['ti-ruen'],
      notice: {
        title: 'Die frühere 300-m²-Regel ist abgelaufen',
        text: 'Die Übergangsbestimmung von Art. 36 RUEn verlangte bei bestimmten Neubauten mit mehr als 300 m² massgebender Fläche Solarenergie auf 50% von Dach oder Fassade. Sie war ausdrücklich bis 31. Dezember 2025 befristet und ist keine aktuelle Pflicht für 2026.',
        status: 'important',
      },
    },
    {
      id: 'meldung',
      title: 'Meldeverfahren: Gemeinde mindestens 30 Tage vorher informieren',
      paragraphs: [
        'Reichen Sie eine bewilligungsfreie Solaranlage mindestens 30 Tage vor Baubeginn bei der Gemeinde ein. Bewilligungsfrei bedeutet nicht verfahrensfrei: Das Meldeverfahren ist die Meldung anstelle eines normalen Baubewilligungsverfahrens.',
        'Bereiten Sie die Unterlagen vollständig vor: Name und Adresse der Eigentümerschaft, Parzellennummer, Situationsplan im Massstab 1:500 oder 1:1000, Panelmodell, Gesamtleistung, Dachaufsicht und Schnitte. Die Gemeinde leitet die Dokumentation innerhalb von zehn Tagen an die SPAAS weiter.',
        'Die Zehntagesfrist für die Weiterleitung durch die Gemeinde ist nicht mit der Frist von mindestens 30 Tagen vor Baubeginn zu verwechseln. Ob für ein konkretes Vorhaben tatsächlich die Meldung genügt, klären Sie zuerst mit der Standortgemeinde.',
      ],
      sourceIds: ['ti-solar-meldeverfahren'],
    },
    {
      id: 'cu-fv',
      title: 'Kantonaler CU-FV zusätzlich zur Bundesförderung',
      paragraphs: [
        'Prüfen Sie den kantonalen CU-FV getrennt von Pronovo. Für Anlagen, die seit 1. April 2022 in Betrieb genommen wurden, berechnet sich der Beitrag bis 30 kW mit 50% der massgebenden RU-CH-Referenz.',
        'Bei Anlagen über 30 kW gelten 50% der RU-CH für die ersten 30 kW und ein Drittel der RU-CH für die restliche Leistung. Der kantonale Beitrag ist auf CHF 250’000 begrenzt.',
        'Bundesboni für Neigung oder Höhenlage sowie die HEIV werden für die Berechnung des kantonalen Beitrags nicht mitgezählt. Zudem dürfen die kantonalen Beiträge unter den Bedingungen des RFER zusammen höchstens 50% der anerkannten Investitionskosten erreichen.',
        'Melden Sie die Inbetriebnahme beim FER innerhalb von zwölf Monaten nach dem tatsächlichen Netzanschluss. Bei Photovoltaik kann eine verspätete Meldung dazu führen, dass das Gesuch um den kantonalen Beitrag nicht angenommen wird.',
      ],
      sourceIds: ['ti-rfer'],
    },
    {
      id: 'rmin',
      title: 'Rmin FER 2026 für CU-FER-Anlagen unter 150 kW',
      paragraphs: [
        'Seit 1. Januar 2026 greift für CU-FER-Anlagen unter 150 kW eine Mindestvergütung, wenn der AET-Abnahmepreis unter dem massgebenden Mindestwert liegt. Sie ersetzt den AET-Preis also nicht automatisch in jedem Fall.',
        'Für Anlagen unter 30 kW beträgt der Mindestwert 4.0 Rp./kWh. Für Anlagen von 30 bis 150 kW ohne Eigenverbrauch sind es 5.0 Rp./kWh.',
        'Bei Anlagen von 30 bis 150 kW mit Eigenverbrauch wird gewichtet: 4.0 Rp./kWh für den Leistungsanteil der ersten 30 kW und 0.0 Rp./kWh für den restlichen Leistungsanteil. Der daraus entstehende anlagenspezifische Mischwert ist für den Vergleich mit dem AET-Abnahmepreis relevant.',
      ],
      sourceIds: ['ti-fer-2026'],
    },
    {
      id: 'rcp-cle',
      title: 'RCP und CLE mit CU-FER seit 2026',
      paragraphs: [
        'Seit 1. Januar 2026 können Anlagen mit CU-FER an einem RCP oder einer CLE teilnehmen. Ein RCP ist ein Zusammenschluss zum Eigenverbrauch; eine CLE ist eine lokale Elektrizitätsgemeinschaft.',
        'Intern verbrauchte Energie wird dabei nicht an AET verkauft. Nur der Überschuss bleibt den anwendbaren FER-/AET-Bedingungen unterstellt. Lassen Sie deshalb Messkonzept, interne Zuordnung des Stroms und Behandlung der Überschüsse vor der Umsetzung klären.',
      ],
      sourceIds: ['ti-fer-2026'],
    },
    {
      id: 'pronovo',
      title: 'Pronovo ist das separate Bundesverfahren',
      paragraphs: [
        'Beantragen beziehungsweise prüfen Sie die Einmalvergütung des Bundes unabhängig vom kantonalen FER. EIV bedeutet Einmalvergütung: KLEIV gilt für Anlagen unter 100 kW, GREIV für Anlagen ab 100 kW; die HEIV ohne Eigenverbrauch steht nur den dafür berechtigten Anlagenkategorien offen.',
        'Der Grundbeitrag beträgt seit 1. April 2024 CHF 0. Die konkrete Vergütung richtet sich nach dem individuellen Tarif und den Förderbedingungen; sie ist kein garantiert fester Prozentsatz der Projektkosten.',
      ],
      sourceIds: ['pronovo-eiv', 'pronovo-tariff-calculator'],
    },
    {
      id: 'batterie',
      title: 'Batterie ohne bestätigten separaten FER-Haushaltsbeitrag',
      paragraphs: [
        'Kalkulieren Sie für eine übliche private Solarbatterie keinen allgemeinen kantonalen FER-Bonus ein. Im RFER ist kein separater Standardbeitrag für eine Heimbatterie zu einer normalen Solaranlage bestätigt.',
        'Ein allfälliges kommunales Angebot müsste für den konkreten Standort separat belegt werden. Lassen Sie den Speicher in der Offerte deshalb als eigene, klar bezeichnete Position ausweisen.',
      ],
      sourceIds: ['ti-rfer'],
    },
    {
      id: 'kosten',
      title: 'Kosten und Planung vergleichbar machen',
      paragraphs: [
        'Vergleichen Sie Offerten auf derselben technischen und administrativen Grundlage. Ausgewiesen sein sollten insbesondere neue SRE, geplante Leistung, Dach- und Elektroarbeiten, Netzanschluss, Messkonzept sowie optionaler Speicher.',
        'Führen Sie Pronovo, CU-FV und Annahmen zur Einspeisung als getrennte Positionen. So bleibt sichtbar, welche Beträge Teil des Angebots sind und welche erst nach einem eigenen Verfahren feststehen.',
        'Mit PvPro.ch können Eigentümer kostenlos und unverbindlich bis zu drei passende Solarofferten vergleichen.',
      ],
      bullets: [
        'Leistung und Belegungsplan auf gleicher Basis',
        'Gemeindeverfahren und erforderliche Unterlagen',
        'Netzanschluss, Zähler und Eigenverbrauchskonzept',
        'Pronovo und CU-FV separat ausgewiesen',
        'Batterie als klar erkennbare Option',
      ],
      sourceIds: ['ti-ruen', 'ti-solar-meldeverfahren', 'ti-rfer', 'pronovo-eiv'],
    },
  ],
  faqs: [
    {
      question: 'Gibt es im Tessin eine Eigenstrompflicht für Neubauten?',
      answer: 'Ja, grundsätzlich 10 W/m² neuer Energiebezugsfläche.',
      sourceIds: ['ti-ruen'],
    },
    {
      question: 'Gilt die frühere 300-m²-Regel noch?',
      answer: 'Nein, Art. 36 war ausdrücklich bis zum 31.12.2025 befristet.',
      sourceIds: ['ti-ruen'],
    },
    {
      question: 'Fördert der Kanton Tessin PV zusätzlich zu Pronovo?',
      answer: 'Ja, über den CU-FV des FER unter den gesetzlichen Bedingungen.',
      sourceIds: ['ti-rfer', 'pronovo-eiv'],
    },
    {
      question: 'Wie hoch ist der kantonale Beitrag?',
      answer:
        'Bis 30 kW grundsätzlich 50% der massgebenden RU-CH; für grössere Anlagen gilt eine gestaffelte Formel.',
      sourceIds: ['ti-rfer'],
    },
    {
      question: 'Bis wann muss die Inbetriebnahme beim FER gemeldet werden?',
      answer: 'Spätestens zwölf Monate nach dem Netzanschluss.',
      sourceIds: ['ti-rfer'],
    },
    {
      question: 'Kann eine CU-FER-Anlage an einer CLE teilnehmen?',
      answer: 'Ja, seit 1. Januar 2026.',
      sourceIds: ['ti-fer-2026'],
    },
  ],
  sources: [...sources],
};