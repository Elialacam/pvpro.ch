import type { CantonGuide } from './types';

const sources = [
  {
    id: 'gr-winterstrom',
    authority: 'Amt für Energie und Verkehr Graubünden',
    title: 'Photovoltaikanlagen für Winterstrom, Version 1/26',
    url: 'https://www.gr.ch/DE/institutionen/verwaltung/diem/aev/dokumenteee/leitfadenbedingungenpvwinterstrom.pdf',
  },
  {
    id: 'gr-flaechenpotenzial',
    authority: 'Amt für Energie und Verkehr Graubünden',
    title: 'Photovoltaikanlagen zur Nutzung des Flächenpotenzials, Version 1/26',
    url: 'https://www.gr.ch/DE/institutionen/verwaltung/diem/aev/dokumenteee/leitfadenbedingungenpvflaechenpotential.pdf',
  },
  {
    id: 'gr-energiegesetz',
    authority: 'Kanton Graubünden',
    title: 'Energiegesetz des Kantons Graubünden, Stand 31.12.2025',
    url: 'https://www.gr-lex.gr.ch/app/de/texts_of_law/820.200',
  },
  {
    id: 'gr-energieverordnung',
    authority: 'Kanton Graubünden',
    title: 'Energieverordnung des Kantons Graubünden',
    url: 'https://www.gr-lex.gr.ch/data/820.210',
  },
  {
    id: 'pronovo-faq',
    authority: 'Pronovo AG im Auftrag des Bundes',
    title: 'Häufige Fragen zur Einmalvergütung (EIV) und Solarförderung Schweiz',
    url: 'https://pronovo.ch/de/foerderung/photovoltaik/haeufige-fragen/',
  },
] as const;

export const guide: CantonGuide = {
  id: 'graubunden',
  path: '/solaranlage-graubunden',
  canton: 'Graubünden',
  title: 'Solaranlage Graubünden 2026: PV-Förderung | PvPro.ch',
  description:
    'Graubünden fördert Winterstrom und grosse PV-Flächennutzung unterschiedlich. Beiträge, Voraussetzungen und Gesuch 2026 einfach erklärt.',
  h1: 'Solaranlage in Graubünden: Welche PV-Förderung passt zu Ihrem Projekt?',
  intro: [
    'Im Kanton Graubünden gibt es zwei kantonale Wege für PV: Winterstrom und Flächenpotenzial. Welcher passt, hängt unter anderem von Neigung, Ausrichtung, Einstrahlung und Anlagengrösse ab.',
    'Die Beiträge sind nicht kumulierbar. Reichen Sie das Gesuch vor Baubeginn ein, warten Sie die Zusicherung ab und prüfen Sie Pronovo sowie weitere Bundesboni getrennt.',
  ],
  quickFacts: [
    {
      value: 'CHF 300/kWp',
      label: 'Winterstrom: für 60–90° Neigung und passende Ost–Süd–West-Ausrichtung',
      sourceIds: ['gr-winterstrom'],
    },
    {
      value: 'CHF 150/kWp',
      label: 'Flächenpotenzial: für grosse geeignete Flächen; nicht mit Winterstrom kumulierbar',
      sourceIds: ['gr-flaechenpotenzial'],
    },
  ],
  sections: [
    {
      id: 'foerderung',
      title: 'Zwei kantonale Programme – aber nicht gleichzeitig',
      paragraphs: [
        'Graubünden hat zwei kantonale PV-Förderwege: Winterstrom und Flächenpotenzial. Sie wählen den passenden Weg; beide Programme sind nicht miteinander kumulierbar.',
        'Zusätzlich können Sie die Bundesförderung über Pronovo prüfen. Kantonale Beiträge und andere öffentliche Beiträge dürfen projektbezogen zusammen höchstens 50 % der Aufwendungen ausmachen. Addieren Sie deshalb nicht einfach CHF 300, CHF 150, Pronovo und weitere Boni zu einer garantierten Gesamtsumme.',
      ],
      sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial', 'gr-energiegesetz', 'pronovo-faq'],
      notice: {
        title: 'Wichtig für die Planung',
        text: 'Die beiden Bündner Programme sind Alternativen, keine Zuschüsse, die automatisch nebeneinander stehen. Prüfen Sie zuerst den passenden Förderweg und danach die gesetzlichen Grenzen für alle öffentlichen Beiträge zusammen.',
        status: 'important',
      },
      module: {
        kind: 'funding-selector',
        title: 'Welche Bündner Förderung passt?',
        intro: 'Ordnen Sie Ihr Projekt zuerst einem Förderweg zu. Die Detailkarten darunter zeigen die vollständigen Programmwerte.',
        items: [
          {
            title: 'Winterstrom',
            text: 'Sehr steile Anlage und Winterproduktion im Vordergrund? Prüfen Sie 60–90° Neigung, Ost bis Süd bis West, mehr als 1250 kWh/m²a Globalstrahlung und mindestens 3 kWp. Beitrag: CHF 300/kWp.',
            detail: 'Mindestbeitrag CHF 900, Höchstbeitrag CHF 200’000.',
            value: 'CHF 300/kWp',
            sourceIds: ['gr-winterstrom'],
          },
          {
            title: 'Flächenpotenzial',
            text: 'Sie nutzen eine grosse geeignete Fläche deutlich über dem Eigenbedarf? Das Programm verlangt mindestens 50 % und mindestens 3 kWp über dem rechnerischen Eigenbedarf von 20 W/m² EBF. Beitrag: CHF 150/kWp.',
            detail: 'Mindestbeitrag CHF 450, Höchstbeitrag CHF 50’000.',
            value: 'CHF 150/kWp',
            sourceIds: ['gr-flaechenpotenzial'],
          },
          {
            title: 'Keines davon',
            text: 'Keine dieser Voraussetzungen passt? Prüfen Sie Pronovo und andere Fördermöglichkeiten. Die beiden kantonalen Programme werden nicht miteinander kombiniert.',
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial', 'pronovo-faq'],
          },
        ],
        columns: ['Winterstrom', 'Flächenpotenzial'],
        rows: [
          {
            label: 'Beitrag',
            left: 'CHF 300/kWp',
            right: 'CHF 150/kWp',
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: 'Mindestbeitrag',
            left: 'CHF 900',
            right: 'CHF 450',
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: 'Höchstbeitrag',
            left: 'CHF 200’000',
            right: 'CHF 50’000',
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: 'Gebäudenutzung',
            left: 'Eignung nach den Bedingungen des Winterstrom-Programms prüfen',
            right: 'Überwiegend Wohnen: mehr als 50 % der Energiebezugsfläche dienen dem Wohnen',
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: 'Mindestleistung / Schwelle',
            left: 'Mindestens 3 kWp',
            right: 'Mindestens 50 % und mindestens 3 kWp über dem rechnerischen Eigenbedarf',
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: 'Rechnerischer Eigenbedarf',
            left: 'Für dieses Programm nicht als Schwelle genannt',
            right: '20 W/m² Energiebezugsfläche (EBF)',
            sourceIds: ['gr-flaechenpotenzial'],
          },
          {
            label: 'Neigung',
            left: '60–90°',
            right: 'Keine entsprechende 60°-Pflicht; entscheidend ist die Flächennutzung',
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: 'Ausrichtung',
            left: 'Ost bis Süd bis West',
            right: 'Ungefähr Nordost über Süd bis Nordwest',
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: 'Globalstrahlung',
            left: 'Mehr als 1250 kWh/m²a',
            right: 'Mehr als 1250 kWh/m²a',
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: 'Gesuch',
            left: 'Vor Anschaffungen und Arbeiten einreichen; Zusicherung abwarten',
            right: 'Vor Anschaffungen und Arbeiten einreichen; Zusicherung abwarten',
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: 'Portal',
            left: 'energie.gr.ch / Gebäudeprogramm-Portal gemäss Verfahren',
            right: 'energie.gr.ch / Gebäudeprogramm-Portal gemäss Verfahren',
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: 'Zusicherung',
            left: 'Gilt 3 Jahre; höchstens um 2 Jahre verlängerbar',
            right: 'Projektbezogene Zusicherung und Frist im Entscheid prüfen',
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: 'Kumulation',
            left: 'Nicht mit Flächenpotenzial kumulierbar',
            right: 'Nicht mit Winterstrom kumulierbar',
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: 'Grenze für öffentliche Beiträge',
            left: 'Kantonale und andere öffentliche Beiträge zusammen höchstens 50 % der Aufwendungen',
            right: 'Kantonale und andere öffentliche Beiträge zusammen höchstens 50 % der Aufwendungen',
            sourceIds: ['gr-energiegesetz', 'gr-energieverordnung'],
          },
        ],
      },
    },
    {
      id: 'winterstrom',
      title: 'Winterstrom: für steile Anlagen',
      paragraphs: [
        'Das Winterstrom-Programm zahlt CHF 300 pro kWp. Es passt zu Anlagen mit 60–90° Neigung, einer Ausrichtung von Ost über Süd bis West, mehr als 1250 kWh/m²a Globalstrahlung und mindestens 3 kWp Leistung.',
        'Der Mindestbeitrag beträgt CHF 900, der Höchstbeitrag CHF 200’000. Das Gesuch muss vor Anschaffungen und Arbeiten eingereicht werden; warten Sie die Zusicherung ab, bevor Sie bestellen oder beginnen.',
      ],
      sourceIds: ['gr-winterstrom'],
    },
    {
      id: 'flaechenpotenzial',
      title: 'Flächenpotenzial: wenn Sie mehr geeignete Fläche nutzen',
      paragraphs: [
        'Das Programm Flächenpotenzial richtet sich an Gebäude mit überwiegender Wohnnutzung: Mehr als 50 % der Energiebezugsfläche müssen dem Wohnen dienen. Es zahlt CHF 150 pro kWp, wenn die Anlage deutlich über dem rechnerischen Eigenbedarf liegt. Sie muss diese Schwelle um mindestens 50 % und zusätzlich um mindestens 3 kWp übersteigen.',
        'Für die Rechnung gelten 20 W/m² Energiebezugsfläche als rechnerischer Eigenbedarf. Zusätzlich gelten ungefähr Nordost über Süd bis Nordwest und mehr als 1250 kWh/m²a Globalstrahlung; der Mindestbeitrag beträgt CHF 450, der Höchstbeitrag CHF 50’000.',
      ],
      sourceIds: ['gr-flaechenpotenzial'],
      notice: {
        title: '20 W/m² ist nicht die gesetzliche Neubaupflicht',
        text: 'Die 20 W/m² EBF gehören zur Berechnung des Programms Flächenpotenzial. Bei Neubauten gilt separat die gesetzliche Eigenstrompflicht von 10 W/m² EBF, höchstens 30 kW.',
        status: 'important',
      },
    },
    {
      id: 'neubau',
      title: 'Eigenstrompflicht bei Neubauten',
      paragraphs: [
        'Bei Neubauten besteht separat eine Pflicht zur Eigenstromproduktion: mindestens 10 W/m² der Energiebezugsfläche (EBF), höchstens 30 kW. Das ist eine gesetzliche Mindestleistung und nicht die Schwelle des Förderprogramms Flächenpotenzial.',
        'Die Pflicht verlangt eigene Stromproduktion, nicht zwingend eine bestimmte PV-Anlage. Gesetzlich ausgenommen sind unter anderem Minergie-Neubauten und Standorte mit einer Solarstrahlung unter 1250 kWh/m²a. Gemeint ist die Sonnenenergie pro Quadratmeter und Jahr. Diese Ausnahme von der Neubaupflicht ist von den Förderbedingungen zu unterscheiden: Beide kantonalen PV-Programme verlangen eine Globalstrahlung über 1250 kWh/m²a.',
      ],
      sourceIds: ['gr-energiegesetz', 'gr-energieverordnung'],
    },
    {
      id: 'bund',
      title: 'Pronovo und optionale Bundesboni',
      paragraphs: [
        'Die reguläre Einmalvergütung des Bundes läuft über Pronovo und gilt nach den aktuellen FAQ ab 2 kW. Je nach Anlage können zusätzlich Bundesboni infrage kommen, zum Beispiel ein Neigungswinkelbonus ab 75°, ein Parkflächenbonus für qualifizierende Anlagen ab 100 kW oder ein Winterstrombonus seit 2026 unter besonderen Bedingungen für Anlagen ab 100 kW.',
        'Diese Bundesboni sind keine automatische Gesamtsumme und nicht das Bündner Winterstrom-Programm. Voraussetzungen, Förderentscheid und die gesetzliche Grenze für öffentliche Beiträge müssen für das konkrete Projekt separat geprüft werden.',
      ],
      sourceIds: ['pronovo-faq', 'gr-winterstrom', 'gr-energiegesetz'],
    },
    {
      id: 'gesuch',
      title: 'Wann muss das Gesuch eingereicht werden?',
      paragraphs: [
        'Reichen Sie das kantonale Gesuch grundsätzlich vor Baubeginn ein. Nach dem Dossier gilt das auch praktisch vor Anschaffungen und Arbeiten: Erst die Zusicherung abwarten, dann bestellen oder mit der Ausführung beginnen.',
        'Das Gesuch läuft gemäss Verfahren über energie.gr.ch beziehungsweise das Gebäudeprogramm-Portal. Die Zusicherung für Winterstrom gilt 3 Jahre und kann höchstens um 2 Jahre verlängert werden; prüfen Sie die konkrete Frist im Entscheid.',
      ],
      sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
      notice: {
        title: 'Nicht nachträglich beantragen',
        text: 'Ein bereits erteilter Auftrag oder begonnene Arbeiten können den Förderanspruch gefährden. Das Gesuch und die Zusicherung gehören deshalb vor die Bestellung und den Baustart.',
        status: 'important',
      },
    },
    {
      id: 'bewilligung',
      title: 'Bewilligung und Planung in Graubünden',
      paragraphs: [
        'Die Förderfrage und das Baurecht sind zwei verschiedene Prüfungen. Klären Sie mit der zuständigen Gemeinde, welches Bauverfahren für Ihr konkretes Dach, den Standort und allfällige Schutzinteressen gilt.',
        'Eine kantonale Förderzusage ersetzt keine Baubewilligung. Lassen Sie Neigung, Ausrichtung, Einstrahlung, Netzanschluss und den Gesuchstermin früh in die Planung aufnehmen.',
      ],
      sourceIds: ['gr-energiegesetz', 'gr-energieverordnung', 'gr-winterstrom', 'gr-flaechenpotenzial'],
    },
    {
      id: 'kosten',
      title: 'Was kostet eine Solaranlage hier?',
      paragraphs: [
        'Der Kanton veröffentlicht keinen festen Preis für Solaranlagen. Entscheidend sind Dach, Anlagengrösse, Elektroarbeiten und Ausstattung.',
        'Vergleichen Sie mehrere Offerten für dasselbe Projekt und prüfen Sie Förderbedingungen getrennt vom Preis. So sehen Sie, welche Positionen enthalten sind und welche Beiträge erst nach einer Zusicherung berücksichtigt werden dürfen.',
      ],
      bullets: [
        'Dachfläche, Dachform und nutzbare Modulfläche',
        'Anlagengrösse und Auslegung',
        'Neigung, Ausrichtung und Globalstrahlung',
        'Gerüst, Zugang und Baustellenaufwand',
        'Elektroarbeiten, Zähler und Netzanschluss',
        'Wechselrichter und Schutztechnik',
        'Batteriespeicher und Ladeinfrastruktur',
        'Garantien, Anmeldung und Leistungsumfang des Installateurs',
      ],
      sourceIds: ['pronovo-faq', 'gr-winterstrom', 'gr-flaechenpotenzial'],
    },
    {
      id: 'fuer-wen',
      title: 'Für wen passt welcher Förderweg?',
      paragraphs: [
        'Winterstrom passt vor allem zu einer steilen Anlage mit passender Ost–Süd–West-Ausrichtung und nachgewiesener Globalstrahlung über 1250 kWh/m²a. Flächenpotenzial passt, wenn Sie eine geeignete Fläche deutlich über dem rechnerischen Eigenbedarf nutzen und die 50-%- sowie 3-kWp-Schwelle erreichen.',
        'Bei einem Neubau sollten Sie die gesetzliche Eigenstrompflicht von Anfang an mit der Anlagenplanung abstimmen. Wer keine kantonale Schwelle erfüllt, kann Pronovo und die anlagenspezifischen Bundesboni separat prüfen.',
      ],
      sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial', 'gr-energiegesetz', 'pronovo-faq'],
    },
  ],
  faqs: [
    {
      question: 'Wie hoch ist die Winterstrom-Förderung in Graubünden?',
      answer:
        'Das Programm zahlt CHF 300 pro kWp, mindestens CHF 900 und höchstens CHF 200’000. Es gilt für passende Anlagen mit 60–90° Neigung, geeigneter Ausrichtung, mehr als 1250 kWh/m²a Globalstrahlung und mindestens 3 kWp.',
      sourceIds: ['gr-winterstrom'],
    },
    {
      question: 'Welche Neigung braucht meine Anlage für Winterstrom?',
      answer:
        'Die relevante Neigung liegt bei 60–90°. Zusätzlich prüft das Programm die Ausrichtung von Ost bis Süd bis West, die Globalstrahlung von mehr als 1250 kWh/m²a und die Mindestleistung von 3 kWp.',
      sourceIds: ['gr-winterstrom'],
    },
    {
      question: 'Was ist die Förderung für Flächenpotenzial?',
      answer:
        'Flächenpotenzial wird mit CHF 150 pro kWp gefördert, mindestens CHF 450 und höchstens CHF 50’000. Die Anlage muss den rechnerischen Eigenbedarf von 20 W/m² EBF um mindestens 50 % und mindestens 3 kWp übersteigen.',
      sourceIds: ['gr-flaechenpotenzial'],
    },
    {
      question: 'Kann ich Winterstrom und Flächenpotenzial kombinieren?',
      answer:
        'Nein. Die beiden kantonalen PV-Programme sind nicht miteinander kumulierbar. Wählen Sie den Förderweg, dessen Voraussetzungen Ihr Projekt am besten erfüllt, und prüfen Sie weitere öffentliche Beiträge zusätzlich unter der gesetzlichen 50-%-Grenze.',
      sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial', 'gr-energiegesetz'],
    },
    {
      question: 'Wann muss ich das Gesuch einreichen?',
      answer:
        'Das Gesuch muss grundsätzlich vor Baubeginn eingereicht werden, nach den Programmhinweisen auch vor Anschaffungen und Arbeiten. Warten Sie die Zusicherung ab, bevor Sie bestellen oder mit dem Projekt beginnen.',
      sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
    },
    {
      question: 'Gilt bei Neubauten in Graubünden eine Eigenstrompflicht?',
      answer:
        'Ja. Bei Neubauten gilt separat eine Pflicht zur Eigenstromproduktion von 10 W/m² Energiebezugsfläche, höchstens 30 kW. Das ist nicht dasselbe wie die 20-W/m²-Rechnung des Programms Flächenpotenzial und nicht automatisch eine pauschale PV-Pflicht.',
      sourceIds: ['gr-energiegesetz', 'gr-energieverordnung'],
    },
    {
      question: 'Kann ich Pronovo zusätzlich beziehen?',
      answer:
        'Pronovo ist die Bundesebene und muss für die konkrete Anlage separat geprüft werden; die reguläre Einmalvergütung gilt nach den FAQ ab 2 kW. Zusätzliche Bundesboni haben eigene Voraussetzungen und dürfen nicht ohne Prüfung zu einer garantierten Gesamtsumme addiert werden.',
      sourceIds: ['pronovo-faq', 'gr-energiegesetz'],
    },
    {
      question: 'Welche Fördergrenze muss ich beachten?',
      answer:
        'Kantonale Beiträge und andere öffentliche Beiträge dürfen zusammen projektbezogen 50 % der Aufwendungen nicht überschreiten. Deshalb sind CHF 300/kWp, CHF 150/kWp, Pronovo und mögliche Boni nicht einfach zusammenzurechnen.',
      sourceIds: ['gr-energiegesetz', 'gr-energieverordnung', 'gr-winterstrom', 'gr-flaechenpotenzial', 'pronovo-faq'],
    },
    {
      question: 'Was bedeutet die Schwelle von 20 W/m² EBF?',
      answer:
        '20 W/m² EBF ist der rechnerische Eigenbedarf, den das Programm Flächenpotenzial für seine Schwelle ansetzt. Förderfähig ist eine Anlage, die diesen Wert um mindestens 50 % und zusätzlich um mindestens 3 kWp übersteigt; die gesetzliche Neubaupflicht beträgt dagegen 10 W/m² EBF und höchstens 30 kW.',
      sourceIds: ['gr-flaechenpotenzial', 'gr-energiegesetz', 'gr-energieverordnung'],
    },
    {
      question: 'Welche Globalstrahlung gilt für die beiden Programme?',
      answer:
        'Für Winterstrom und Flächenpotenzial muss die Globalstrahlung grundsätzlich mehr als 1250 kWh/m²a betragen. Die Globalstrahlung beschreibt vereinfacht, wie viel Sonnenenergie pro Quadratmeter und Jahr am Standort ankommt.',
      sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
    },
    {
      question: 'Wie lange gilt die Zusicherung?',
      answer:
        'Für die Zusicherung des Winterstrom-Programms gilt grundsätzlich eine Frist von 3 Jahren. Sie kann höchstens um 2 Jahre verlängert werden; massgebend bleibt der konkrete Entscheid.',
      sourceIds: ['gr-winterstrom'],
    },
    {
      question: 'Wo reiche ich das Fördergesuch ein?',
      answer:
        'Das Verfahren läuft über energie.gr.ch beziehungsweise das Gebäudeprogramm-Portal. Verwenden Sie das für Ihr Programm angegebene Verfahren und reichen Sie das Gesuch vor Anschaffungen und Arbeiten ein.',
      sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
    },
    {
      question: 'Brauche ich für eine geförderte Anlage eine Baubewilligung?',
      answer:
        'Das lässt sich nicht allein aus dem Förderprogramm beantworten. Klären Sie mit der Gemeinde, welches Bauverfahren für Standort, Gestaltung und allfällige Schutzinteressen gilt; die Förderzusage ersetzt keine Baubewilligung.',
      sourceIds: ['gr-energiegesetz', 'gr-energieverordnung'],
    },
  ],
  sources: [...sources],
};