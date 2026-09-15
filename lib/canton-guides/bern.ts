import type { CantonGuide } from './types';

const sources = [
  {
    id: 'be-solarpflicht',
    authority: 'Kanton Bern, Wirtschafts-, Energie- und Umweltdirektion',
    title: 'Informationen zur Solarpflicht ab 2026',
    url: 'https://www.weu.be.ch/de/start/themen/energie/solarpflicht.html',
  },
  {
    id: 'be-keng',
    authority: 'Kanton Bern',
    title: 'Kantonales Energiegesetz, Art. 39a–39e',
    url: 'https://www.belex.sites.be.ch/app/de/texts_of_law/741.1',
  },
  {
    id: 'be-kenv',
    authority: 'Kanton Bern',
    title: 'Kantonale Energieverordnung, Art. 19a–19h',
    url: 'https://www.belex.sites.be.ch/app/de/texts_of_law/741.111',
  },
  {
    id: 'be-vollzug',
    authority: 'Kanton Bern, Amt für Umwelt und Energie',
    title: 'Vollzugshilfe EN-Solar BE – Solarausstattungspflicht',
    url: 'https://www.weu.be.ch/content/dam/weu/dokumente/aue/de/energievorschriften-bauen/aue-EN-Solar_BE_Vollzugshilfe_de.pdf',
  },
  {
    id: 'pronovo-eiv',
    authority: 'Pronovo AG im Auftrag des Bundes',
    title: 'Förderung von Photovoltaikanlagen',
    url: 'https://pronovo.ch/de/foerderung/photovoltaik',
  },
] as const;

export const guide: CantonGuide = {
  id: 'bern',
  path: '/solaranlage-bern',
  canton: 'Bern',
  title: 'Solaranlage Bern: neue Solarpflicht 2026 | PvPro.ch',
  description:
    'Seit 2026 gelten im Kanton Bern neue Solarregeln für Neubauten, Erweiterungen, Dachsanierungen und grössere Parkplätze.',
  h1: 'Solaranlage im Kanton Bern: Die neuen Regeln seit 2026',
  intro: [
    'Seit 1. Januar 2026 gelten im Kanton Bern neue Regeln für Neubauten, Erweiterungen und grössere Parkplätze. Bei einer umfassenden Dachsanierung müssen Sie melden, ob Solarenergie möglich ist – das ist aber keine automatische Pflicht, eine Solaranlage zu bauen.',
  ],
  quickFacts: [
    {
      value: '10 %',
      label: 'Mindestanteil der massgebenden Gebäudefläche bei bestimmten Neubauten und Erweiterungen',
      sourceIds: ['be-solarpflicht', 'be-keng'],
    },
    {
      value: '60 %',
      label: 'Der gut geeigneten Dachfläche, grundsätzlich bei Neubauten und Erweiterungen',
      sourceIds: ['be-solarpflicht', 'be-kenv'],
    },
    {
      value: '7 Arbeitstage',
      label: 'Mindestvorlauf für eine eigenständige Meldung einer Solaranlage ohne Bewilligung',
      sourceIds: ['be-vollzug', 'be-kenv'],
    },
    {
      value: 'Dachsanierung',
      label: 'Meldepflicht ≠ automatische PV-Pflicht',
      sourceIds: ['be-solarpflicht', 'be-vollzug'],
    },
  ],
  sections: [
    {
      id: 'regeln',
      title: 'Die Berner Solarregeln seit 1. Januar 2026',
      paragraphs: [
        'Seit 1. Januar 2026 müssen Neubauten und Erweiterungen mindestens 10 % der für die Berechnung wichtigen Gebäudefläche für Solarenergie nutzen (offiziell: anrechenbare Gebäudefläche). Gut geeignete Dächer mit mindestens 1’000 kWh Sonnenenergie pro Quadratmeter und Jahr (1’000 kWh/m²a) sollen mindestens 60 % ihrer gesamten Dachfläche (Brutto-Dachfläche) nutzen; die Pflicht kann teilweise oder vollständig an der Fassade erfüllt werden.',
        'Die 60 % bedeuten also nicht automatisch 60 % jedes einzelnen Dachs. Für kleine neue Wohngebäude bis 300 m² gilt stattdessen mindestens so viel Solarenergie, wie für den normalen Energiebedarf (Normbedarf) nötig ist. Eine Ausnahme bei weniger als 50 m² der wichtigen Gebäudefläche greift nur, wenn zugleich keine geeignete Einzeldachfläche von mindestens 50 m² vorhanden ist. Diese Sonderregel ist nicht die allgemeine 60-%-Regel.',
      ],
      sourceIds: ['be-solarpflicht', 'be-keng', 'be-kenv'],
      module: {
        kind: 'regulatory-checklist',
        title: '2026: Welche Regel trifft mein Vorhaben?',
        items: [
          {
            title: 'Neubau oder Erweiterung',
            text: 'Mindestens 10 % der wichtigen Gebäudefläche für Solarenergie vorsehen.',
            sourceIds: ['be-solarpflicht', 'be-keng'],
          },
          {
            title: 'Kleine Wohngebäude',
            text: 'Bei kleinen Wohngebäuden bis 300 m² gilt mindestens Solarenergie für die Hälfte des normalen Energiebedarfs (Normbedarf).',
            sourceIds: ['be-solarpflicht', 'be-kenv'],
          },
          {
            title: 'Umfassende Dachsanierung',
            text: 'Ab 50 % betroffener Bruttodachfläche ist eine Meldung zur Solareignung nötig; das ist keine automatische Installationspflicht.',
            sourceIds: ['be-solarpflicht', 'be-vollzug'],
          },
          {
            title: 'Neuer grosser Parkplatz',
            text: 'Neue Aussenparkplätze ab 80 öffentlich zugänglichen und bewirtschafteten Plätzen brauchen eine Überdachung mit Solarmodulen, wenn die Fläche dafür geeignet ist. Das gilt auch für neue Park-and-Ride-Anlagen (P+R) mit mehr als 50 Plätzen.',
            sourceIds: ['be-solarpflicht', 'be-vollzug'],
          },
        ],
      },
    },
    {
      id: 'dachsanierung',
      title: 'Dachsanierung: Meldepflicht ist nicht automatisch Solarpflicht',
      paragraphs: [
        'Nein. Eine umfassende Dachsanierung löst im Kanton Bern eine Meldepflicht aus – aber nicht automatisch eine Pflicht, eine Photovoltaikanlage (PV-Anlage) zu installieren.',
        'Die Meldepflicht gilt bei bestehenden Bauten, wenn mindestens 50 % der Bruttodachfläche neu eingedeckt oder abgedichtet werden. Die Meldung über eBau dokumentiert Solareignung und geschätzte Installationskosten; Dachflächen unter 20 m² sind ausgenommen.',
        'Die Meldung schafft Transparenz. Bau, Eignung, Baurecht und der Entscheid der Eigentümerschaft bleiben davon getrennt.',
      ],
      sourceIds: ['be-solarpflicht', 'be-vollzug', 'be-kenv'],
      module: {
        kind: 'roof-explainer',
        title: 'Was die Dachmeldung tatsächlich auslöst',
        items: [
          {
            title: '1. Umfang prüfen',
            text: 'Prüfen, ob Neueindeckung oder Abdichtung mindestens 50 % der Bruttodachfläche betrifft.',
            sourceIds: ['be-solarpflicht', 'be-vollzug'],
          },
          {
            title: '2. Eignung und Kosten angeben',
            text: 'Die Meldung enthält die Eignung für Solarenergienutzung und die geschätzten Installationskosten.',
            sourceIds: ['be-solarpflicht'],
          },
          {
            title: '3. Rechtzeitig melden',
            text: 'Bei einem bewilligungsfreien Vorhaben muss die Meldung spätestens 7 Arbeitstage vor Arbeitsbeginn eingereicht sein.',
            sourceIds: ['be-vollzug', 'be-kenv'],
          },
          {
            title: '4. Entscheid separat treffen',
            text: 'Eignung und Kostenschätzung lösen nicht automatisch eine Pflicht zur PV-Installation aus.',
            sourceIds: ['be-solarpflicht', 'be-vollzug'],
          },
        ],
      },
      notice: {
        title: 'Wichtige Abgrenzung',
        text: 'Eine umfassende Dachsanierung bei einem bestehenden Gebäude löst die Meldepflicht aus. Die Installationspflicht für Neubauten und Erweiterungen ist davon rechtlich getrennt.',
        status: 'important',
      },
    },
    {
      id: 'parkplaetze',
      title: 'Neue Regeln für grössere Parkplätze',
      paragraphs: [
        'Neue Aussenparkplätze ab 80 öffentlich zugänglichen und kostenpflichtigen Plätzen brauchen eine Überdachung mit Solarmodulen, wenn die Fläche dafür geeignet ist. Das gilt auch für neue Park-and-Ride-Anlagen (P+R) im Freien mit mehr als 50 Plätzen.',
        'Auf geeigneter Fläche sind mindestens 50 % mit Solarmodulen zu überdachen; Ausnahmen bleiben möglich. Bestehende P+R-Anlagen sind bei umfassender Sanierung, spätestens bis 31. Dezember 2035, nachzurüsten.',
        'Bei weniger als 1’000 kWh Sonnenenergie pro Quadratmeter und Jahr (1’000 kWh/m²a) kann eine Ausnahme möglich sein. Andere bestehende Parkplatzareale sind nicht pauschal erfasst.',
      ],
      sourceIds: ['be-solarpflicht', 'be-vollzug', 'be-keng'],
    },
    {
      id: 'foerderung',
      title: 'Förderung im Kanton Bern',
      paragraphs: [
        'Die Förderung des Bundes läuft über Pronovo. Für kleinere Anlagen gilt die Einmalvergütung für kleine Photovoltaikanlagen (KLEIV), für grössere Anlagen die entsprechende Förderung für Grossanlagen (GREIV), jeweils nach den Bundesbedingungen; daraus folgt keine pauschale kantonale Prozentförderung für jedes Wohnhaus.',
        'Der Kanton fördert bestimmte Gesamtsanierungen und energieeffiziente Neubauten, bei denen PV oder Solarthermie anrechenbar sein kann. Diese Förderung ist von der Bundesförderung für PV, der Einmalvergütung (EIV), getrennt und kein allgemeiner PV-Zuschuss. Bedingungen und Gesuchzeitpunkt sind vor dem Auftrag zu prüfen.',
      ],
      sourceIds: ['pronovo-eiv', 'be-solarpflicht'],
    },
    {
      id: 'bewilligung',
      title: 'Bewilligung oder Meldung?',
      paragraphs: [
        'Auch eine baubewilligungsfreie Solaranlage kann meldepflichtig sein. Für die eigenständige PV-Meldung gilt: spätestens 7 Arbeitstage vor Baubeginn.',
        'Die separate Meldung bei umfassender Dachsanierung läuft über eBau. Lage, Gestaltung und Schutzinteressen entscheiden über eine Baubewilligung. Bei Baudenkmal, Schutzumgebung oder nicht angepasster Anlage ist die Gemeinde früh einzubeziehen; Pronovo-Gesuch und Meldung ersetzen keine Baurechtsprüfung.',
      ],
      sourceIds: ['be-vollzug', 'be-solarpflicht', 'pronovo-eiv'],
    },
    {
      id: 'kosten',
      title: 'Was kostet eine Solaranlage hier?',
      paragraphs: [
        'Der Kanton veröffentlicht keinen festen PV-Preis. Entscheidend sind vor allem Dach, Anlagengrösse und gewünschte Ausstattung.',
        'Dachzustand, Zugang, Zähler, Netzanschluss und Schutzauflagen können die Offerte ebenfalls verändern. Die Kostenschätzung bei einer Dachsanierung ist Teil der Meldung, aber keine Investitionspflicht.',
        'Der sinnvollste Vergleich ist deshalb nicht ein pauschaler Online-Preis, sondern mehrere Offerten für dasselbe Projekt. Vergleichen Sie dabei Offertpositionen, Anmeldung und Garantien.',
      ],
      bullets: [
        'Dachfläche und Dachform',
        'Leistung der Anlage',
        'Gerüst',
        'Elektroarbeiten',
        'Batteriespeicher',
        'Eigenverbrauch',
        'Wechselrichter',
        'Installateur / Leistungsumfang',
      ],
      sourceIds: ['be-solarpflicht', 'be-vollzug'],
    },
    {
      id: 'fuer-wen',
      title: 'Für wen lohnt sich eine Solaranlage im Kanton Bern besonders?',
      paragraphs: [
        'Bei einem Neubau oder einer Erweiterung gehört Solarenergie früh in die Projektierung. Bei kleinen Wohngebäuden bis 300 m² gilt die Hälfte des normalen Energiebedarfs, sonst die Kombination aus 10 % und geeigneten Dachflächen; bei umfassender Dachsanierung sind Eignung und Kosten zu melden, ohne dass daraus eine Installationspflicht folgt.',
        'Ob eine Anlage sinnvoll ist, hängt von Dach, Verbrauch und Offerte ab. Grosse Parkplätze, Schutzobjekte, Fassaden und ungewöhnliche Dachformen sind früh abzuklären.',
      ],
      sourceIds: ['be-solarpflicht', 'be-keng', 'be-vollzug'],
    },
  ],
  faqs: [
    {
      question: 'Gilt im Kanton Bern seit 2026 eine Solarpflicht?',
      answer:
        'Ja, für bestimmte Vorhaben. Seit 1. Januar 2026 gelten Regeln für Neubauten, Erweiterungen und bestimmte grosse Parkplätze. Neubauten und Erweiterungen müssen mindestens 10 % der für die Berechnung wichtigen Gebäudefläche nutzen. Eine umfassende Dachsanierung löst dagegen grundsätzlich eine Meldung aus, nicht automatisch eine Installationspflicht.',
      sourceIds: ['be-solarpflicht', 'be-keng'],
    },
    {
      question: 'Wie viel Dachfläche muss bei einem Neubau genutzt werden?',
      answer:
        'Gut geeignete Dächer mit mindestens 1’000 kWh Sonnenenergie pro Quadratmeter und Jahr (1’000 kWh/m²a) sollen mindestens 60 % der gesamten Dachfläche nutzen. Eine Befreiung kann greifen, wenn die für die Berechnung wichtige Gebäudefläche unter 50 m² liegt und keine geeignete Einzeldachfläche von mindestens 50 m² vorhanden ist. Die Fassade ist möglich; bei kleinen Wohngebäuden bis 300 m² gilt die Sonderregel mit der Hälfte des normalen Energiebedarfs (Normbedarf).',
      sourceIds: ['be-solarpflicht', 'be-kenv'],
    },
    {
      question: 'Bedeutet eine Dachsanierung automatisch, dass ich PV installieren muss?',
      answer:
        'Nein. Bei mindestens 50 % betroffener Dachfläche (Bruttodachfläche) entsteht eine Meldepflicht. Sie dokumentiert Solareignung und geschätzte Kosten, ist aber keine automatische Pflicht, eine Photovoltaikanlage (PV-Anlage) zu installieren.',
      sourceIds: ['be-solarpflicht', 'be-vollzug'],
    },
    {
      question: 'Wann gilt eine Dachsanierung als umfassend?',
      answer:
        'Eine Dachsanierung gilt als umfassend, wenn mindestens 50 % der gesamten Dachfläche (Bruttodachfläche) neu eingedeckt oder abgedichtet werden. Dachflächen unter 20 m² sind ausgenommen; die konkrete Abgrenzung ist mit der Vollzugshilfe zu prüfen.',
      sourceIds: ['be-solarpflicht', 'be-vollzug', 'be-kenv'],
    },
    {
      question: 'Wann muss ich die Meldung einreichen?',
      answer:
        'Bei einem bewilligungsfreien eigenständigen PV-Meldeverfahren spätestens 7 Arbeitstage vor Arbeitsbeginn. Die separate Meldung zur Solareignung bei einer umfassenden Dachsanierung läuft über eBau. Bei Schutzobjekten oder anderem Bewilligungstatbestand kann zusätzlich eine Baubewilligung nötig sein.',
      sourceIds: ['be-vollzug', 'be-kenv'],
    },
    {
      question: 'Welche Regeln gelten für grosse Parkplätze?',
      answer:
        'Neue Aussenparkplätze ab 80 öffentlich zugänglichen und kostenpflichtigen Plätzen sowie neue Park-and-Ride-Anlagen (P+R) mit mehr als 50 Plätzen brauchen eine Überdachung mit Solarmodulen, wenn die Fläche dafür geeignet ist. Auf geeigneter Fläche sind mindestens 50 % zu überdachen; unter 1’000 kWh Sonnenenergie pro Quadratmeter und Jahr (1’000 kWh/m²a) sind Ausnahmen möglich. Bestehende P+R-Anlagen sind bei umfassender Sanierung, spätestens bis 31. Dezember 2035, nachzurüsten.',
      sourceIds: ['be-solarpflicht', 'be-vollzug'],
    },
    {
      question: 'Welche PV-Förderung gibt es im Kanton Bern?',
      answer:
        'PV wird grundsätzlich über Bund und Pronovo unterstützt, insbesondere über die Einmalvergütung für kleine Photovoltaikanlagen (KLEIV) oder die entsprechende Förderung für Grossanlagen (GREIV). Der Kanton fördert daneben bestimmte Gesamtsanierungen oder energieeffiziente Neubauten mit anrechenbarer PV. Eine allgemeine kantonale PV-Quote folgt daraus nicht.',
      sourceIds: ['pronovo-eiv', 'be-solarpflicht'],
    },
  ],
  sources: [...sources],
};