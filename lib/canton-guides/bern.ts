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
  h1: 'Solaranlage im Kanton Bern: Was sich seit 2026 geändert hat',
  intro: [
    'Seit dem 1. Januar 2026 gelten im Kanton Bern neue Regeln für Solarenergie. Neubauten und Erweiterungen müssen mindestens 10 % der anrechenbaren Gebäudefläche nutzen; geeignete Dächer sind grundsätzlich weitgehend auszustatten. Eine umfassende Dachsanierung löst bei bestehenden Bauten eine Meldepflicht aus, nicht automatisch eine PV-Installationspflicht.',
    'Auch grössere neue Parkplätze fallen darunter. Die PV-Förderung läuft weiterhin über Bund und Pronovo.',
  ],
  quickFacts: [
    {
      value: '10 %',
      label: 'Solarenergienutzung der anrechenbaren Gebäudefläche bei Neubauten und Erweiterungen',
      sourceIds: ['be-solarpflicht', 'be-keng'],
    },
    {
      value: '60 %',
      label: 'der gut geeigneten Brutto-Dachfläche, grundsätzlich bei Neubauten und Erweiterungen',
      sourceIds: ['be-solarpflicht', 'be-kenv'],
    },
    {
      value: '7 Arbeitstage',
      label: 'Mindestvorlauf für ein eigenständiges PV-Meldeverfahren ohne Bewilligung',
      sourceIds: ['be-vollzug', 'be-kenv'],
    },
    {
      value: '80 / 50',
      label: 'Abstellplätze: ab 80 öffentlich und kostenpflichtig, bei Eignung; P+R mehr als 50',
      sourceIds: ['be-solarpflicht', 'be-vollzug'],
    },
  ],
  sections: [
    {
      id: 'regeln',
      title: 'Die Berner Solarregeln seit 1. Januar 2026',
      paragraphs: [
        'Neue Bauten und Erweiterungen brauchen Solarenergienutzung auf mindestens 10 % der anrechenbaren Gebäudefläche. Gut geeignete Dächer ab 1’000 kWh/m²a sollen mindestens 60 % ihrer Bruttofläche nutzen. Die Pflicht kann teilweise oder vollständig an der Fassade erfüllt werden; 60 % bedeutet nicht automatisch 60 % jedes einzelnen Dachs.',
        'Für kleine neue Wohngebäude bis 300 m² gilt: mindestens so viel Solarenergie, wie für den halben Normbedarf nötig ist. Eine Ausnahme unter 50 m² aGF greift nur, wenn zugleich keine geeignete Einzeldachfläche von mindestens 50 m² vorhanden ist. Das ist nicht die allgemeine 60-%-Regel.',
      ],
      sourceIds: ['be-solarpflicht', 'be-keng', 'be-kenv'],
      module: {
        kind: 'regulatory-checklist',
        title: '2026: Welche Regel trifft mein Vorhaben?',
        items: [
          {
            title: 'Neubau oder Erweiterung',
            text: 'Prüfen, ob mindestens 10 % der anrechenbaren Gebäudefläche für Solarenergienutzung vorgesehen sind.',
            sourceIds: ['be-solarpflicht', 'be-keng'],
          },
          {
            title: 'Kleine Wohngebäude',
            text: 'Bei kleinen Wohngebäuden bis 300 m² anrechenbarer Gebäudefläche gilt mindestens der Solarenergiebedarf für die Hälfte des Normbedarfs.',
            sourceIds: ['be-solarpflicht', 'be-kenv'],
          },
          {
            title: 'Umfassende Dachsanierung',
            text: 'Ab 50 % betroffener Bruttodachfläche ist eine Meldung zur Solareignung erforderlich; das ist keine automatische Installationspflicht.',
            sourceIds: ['be-solarpflicht', 'be-vollzug'],
          },
          {
            title: 'Neuer grosser Parkplatz',
            text: 'Neue Aussenparkplätze ab 80 öffentlich zugänglichen und bewirtschafteten Plätzen sind bei Eignung solaraktiv zu überdachen; neue P+R-Anlagen mit mehr als 50 Plätzen ebenfalls.',
            sourceIds: ['be-solarpflicht', 'be-vollzug'],
          },
        ],
      },
    },
    {
      id: 'dachsanierung',
      title: 'Dachsanierung: Meldepflicht ist nicht automatisch Solarpflicht',
      paragraphs: [
        'Bei bestehenden Bauten gilt die Meldepflicht, wenn mindestens 50 % der Bruttodachfläche neu eingedeckt oder abgedichtet werden. Die Meldung dokumentiert Solareignung und geschätzte Installationskosten und läuft über eBau. Dachflächen unter 20 m² sind ausgenommen.',
        'Das bedeutet nicht: «Bei jeder Dachsanierung muss PV installiert werden.» Die Meldung schafft Transparenz; Bau, Eignung, Baurecht und Entscheid der Eigentümerschaft bleiben separat.',
      ],
      sourceIds: ['be-solarpflicht', 'be-vollzug', 'be-kenv'],
      module: {
        kind: 'roof-explainer',
        title: 'Was die Dachmeldung tatsächlich auslöst',
        items: [
          {
            title: '1. Umfang bestimmen',
            text: 'Ermitteln, ob Neueindeckung oder Abdichtung mindestens die Hälfte der Bruttodachfläche betrifft.',
            sourceIds: ['be-solarpflicht', 'be-vollzug'],
          },
          {
            title: '2. Eignung und Kosten dokumentieren',
            text: 'Die Meldung enthält den Nachweis zur Eignung für Solarenergienutzung und die geschätzten Installationskosten.',
            sourceIds: ['be-solarpflicht'],
          },
          {
            title: '3. Rechtzeitig melden',
            text: 'Bei einem bewilligungsfreien Vorhaben muss die Meldung spätestens sieben Arbeitstage vor Arbeitsbeginn eingereicht sein.',
            sourceIds: ['be-vollzug', 'be-kenv'],
          },
          {
            title: '4. Entscheid separat treffen',
            text: 'Eignung und Kostenschätzung lösen nicht automatisch die Pflicht aus, eine PV-Anlage zu installieren.',
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
        'Neue Aussenparkplätze ab 80 öffentlich zugänglichen und kostenpflichtigen Plätzen brauchen bei Eignung eine solaraktive Überdachung. Das gilt auch für neue P+R-Anlagen im Freien mit mehr als 50 Plätzen. Auf geeigneter Fläche sind mindestens 50 % solaraktiv zu überdachen; Ausnahmen bleiben möglich.',
        'Bestehende P+R-Anlagen sind bei umfassender Sanierung, spätestens bis 31. Dezember 2035, nachzurüsten. Unter 1’000 kWh/m²a solare Einstrahlung kann befreien; jedes andere bestehende Parkplatzareal ist nicht pauschal erfasst.',
      ],
      sourceIds: ['be-solarpflicht', 'be-vollzug', 'be-keng'],
    },
    {
      id: 'foerderung',
      title: 'Förderung im Kanton Bern',
      paragraphs: [
        'PV wird in Bern grundsätzlich über Bund und Pronovo gefördert. Für kleinere Anlagen ist die KLEIV, für grössere die GREIV relevant, jeweils nach Bundesbedingungen. Daraus folgt keine pauschale kantonale Prozentförderung für jedes Wohnhaus.',
        'Der Kanton fördert bestimmte Gesamtsanierungen und energieeffiziente Neubauten, in denen PV oder Solarthermie anrechenbar sein kann. Das ist von der PV-EIV getrennt und kein allgemeiner PV-Zuschuss. Bedingungen und Gesuchzeitpunkt sind vor dem Auftrag zu prüfen.',
      ],
      sourceIds: ['pronovo-eiv', 'be-solarpflicht'],
    },
    {
      id: 'bewilligung',
      title: 'Bewilligung oder Meldung?',
      paragraphs: [
        'Auch eine baubewilligungsfreie Solaranlage kann meldepflichtig sein. Für das eigenständige PV-Meldeverfahren gilt: spätestens sieben Arbeitstage vor Baubeginn. Die separate Meldung bei umfassender Dachsanierung läuft über eBau. Lage, Gestaltung und Schutzinteressen entscheiden über eine Baubewilligung.',
        'Bei Baudenkmal, Schutzumgebung oder nicht angepasster Anlage die Gemeinde früh einbeziehen. Pronovo-Gesuch und Meldung ersetzen keine Baurechtsprüfung.',
      ],
      sourceIds: ['be-vollzug', 'be-solarpflicht', 'pronovo-eiv'],
    },
    {
      id: 'kosten',
      title: 'Kosten und Planung: acht Faktoren',
      paragraphs: [
        'Bern veröffentlicht keine pauschale PV-Preisliste. Eine Offerte hängt von Dachfläche, Leistung, Dachart, Gerüst, Elektroarbeiten, Speicher, Eigenverbrauch und Installateur ab. Dachzustand, Zugang, Zähler, Netzanschluss und Schutzauflagen können sie ebenfalls verändern.',
        'Die Kostenschätzung bei einer Dachsanierung ist Teil der Meldung, aber keine Investitionspflicht. Vergleichen Sie die Offertpositionen, Anmeldung und Garantien.',
      ],
      sourceIds: ['be-solarpflicht', 'be-vollzug'],
    },
    {
      id: 'fuer-wen',
      title: 'Für wen lohnt sich eine Solaranlage im Kanton Bern besonders?',
      paragraphs: [
        'Bei Neubau oder Erweiterung gehört Solarenergie früh in die Projektierung. Bei kleinen Wohngebäuden bis 300 m² gilt der halbe Normbedarf, sonst die Kombination aus 10 % und geeigneten Dachflächen. Bei umfassender Dachsanierung sind Eignung und Kosten zu melden, ohne daraus eine Installationspflicht abzuleiten.',
        'Ob sie sinnvoll ist, hängt von Dach, Verbrauch und Offerte ab. Grosse Parkplätze, Schutzobjekte, Fassaden und ungewöhnliche Dachformen früh abklären.',
      ],
      sourceIds: ['be-solarpflicht', 'be-keng', 'be-vollzug'],
    },
  ],
  faqs: [
    {
      question: 'Gilt im Kanton Bern seit 2026 eine Solarpflicht?',
      answer:
        'Ja. Seit 1. Januar 2026 gelten Regeln für Neubauten, Erweiterungen und bestimmte grosse Parkplätze. Neubauten und Erweiterungen müssen mindestens 10 % der anrechenbaren Gebäudefläche nutzen. Eine umfassende Dachsanierung löst dagegen grundsätzlich eine Meldung aus, nicht automatisch eine Installationspflicht.',
      sourceIds: ['be-solarpflicht', 'be-keng'],
    },
    {
      question: 'Wie viel Dachfläche muss bei einem Neubau genutzt werden?',
      answer:
        'Gut geeignete Dächer ab 1’000 kWh/m²a sollen mindestens 60 % der Bruttofläche nutzen. Eine Befreiung kann greifen, wenn die neue aGF unter 50 m² liegt und keine geeignete Einzeldachfläche von mindestens 50 m² vorhanden ist. Die Fassade ist möglich; bei kleinen Wohngebäuden bis 300 m² gilt die Sonderregel mit dem halben Normbedarf.',
      sourceIds: ['be-solarpflicht', 'be-kenv'],
    },
    {
      question: 'Bedeutet eine Dachsanierung automatisch, dass ich PV installieren muss?',
      answer:
        'Nein. Bei mindestens 50 % betroffener Bruttodachfläche entsteht eine Meldepflicht. Sie dokumentiert Solareignung und geschätzte Kosten, ist aber kein automatischer Befehl, PV zu installieren.',
      sourceIds: ['be-solarpflicht', 'be-vollzug'],
    },
    {
      question: 'Wann gilt eine Dachsanierung als umfassend?',
      answer:
        'Wenn mindestens 50 % der Bruttodachfläche neu eingedeckt oder abgedichtet werden. Dachflächen unter 20 m² sind ausgenommen; die konkrete Abgrenzung ist mit der Vollzugshilfe zu prüfen.',
      sourceIds: ['be-solarpflicht', 'be-vollzug', 'be-kenv'],
    },
    {
      question: 'Wann muss ich die Meldung einreichen?',
      answer:
        'Bei einem bewilligungsfreien eigenständigen PV-Meldeverfahren spätestens sieben Arbeitstage vor Arbeitsbeginn. Die separate Meldung zur Solareignung bei einer umfassenden Dachsanierung läuft über eBau. Bei Schutzobjekten oder anderem Bewilligungstatbestand kann zusätzlich eine Baubewilligung nötig sein.',
      sourceIds: ['be-vollzug', 'be-kenv'],
    },
    {
      question: 'Welche Regeln gelten für grosse Parkplätze?',
      answer:
        'Neue Aussenparkplätze ab 80 öffentlich zugänglichen und kostenpflichtigen Plätzen sowie neue geeignete P+R-Anlagen mit mehr als 50 Plätzen brauchen eine solaraktive Überdachung. Auf geeigneter Fläche sind mindestens 50 % zu überdachen; unter 1’000 kWh/m²a Einstrahlung sind Ausnahmen möglich. Bestehende P+R-Anlagen sind bei umfassender Sanierung, spätestens bis 31. Dezember 2035, nachzurüsten.',
      sourceIds: ['be-solarpflicht', 'be-vollzug'],
    },
    {
      question: 'Welche PV-Förderung gibt es im Kanton Bern?',
      answer:
        'PV wird grundsätzlich über Bund und Pronovo unterstützt, insbesondere KLEIV oder GREIV. Der Kanton fördert daneben bestimmte Gesamtsanierungen oder energieeffiziente Neubauten mit anrechenbarer PV. Eine allgemeine kantonale PV-Quote folgt daraus nicht.',
      sourceIds: ['pronovo-eiv', 'be-solarpflicht'],
    },
  ],
  sources: [...sources],
};