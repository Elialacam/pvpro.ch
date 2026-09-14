import type { CantonGuide } from './types';

export const guide: CantonGuide = {
  id: 'basel',
  path: '/solaranlage-basel',
  canton: 'Basel-Stadt / Basel-Landschaft',
  title: 'Solaranlage Basel 2026: Basel-Stadt vs. Baselland | PvPro.ch',
  description:
    'Photovoltaik in Basel: Förderung, Bewilligung und Solarpflicht unterscheiden sich zwischen Basel-Stadt und Basel-Landschaft deutlich.',
  h1: 'Solaranlage in Basel: Basel-Stadt und Basel-Landschaft im Vergleich',
  intro: [
    'Bei Solarprojekten in Basel entscheidet die Kantonsgrenze.',
    'Basel-Stadt und Basel-Landschaft haben 2026 unterschiedliche Förderprogramme und Verfahren.',
  ],
  quickFacts: [
    {
      value: 'CHF 50 / 100 pro m²',
      label: 'Basel-Stadt: saniertes Dach, mit PV auf der Modulfläche verdoppelt',
      sourceIds: ['bs-solarkraftwerk'],
    },
    {
      value: 'CHF 70 / 140 pro m²',
      label: 'Basel-Stadt: sanierte Fassade, mit PV auf der Modulfläche verdoppelt',
      sourceIds: ['bs-solarkraftwerk'],
    },
    {
      value: '+CHF 40 / 120 pro m²',
      label: 'Basel-Landschaft: PV-Bonus nur zusammen mit Wärmedämmung',
      sourceIds: ['bl-energie'],
    },
    {
      value: '90 %',
      label: 'Basel-Stadt: geeignete Dachfläche bei der Aktion Solarkraftwerk Basel',
      sourceIds: ['bs-solarkraftwerk'],
    },
    {
      value: '12. Januar 2026',
      label: 'Basel-Landschaft: Gesuche für die neuen Fördermassnahmen',
      sourceIds: ['bl-energie'],
    },
  ],
  sections: [
    {
      id: 'vergleich',
      title: 'Basel-Stadt vs. Basel-Landschaft: fünf Unterschiede',
      paragraphs: [
        'Die kurze Ortsangabe «Basel» reicht für ein Solarprojekt nicht. Basel-Stadt und Basel-Landschaft haben eigene Förderstellen, Bauverfahren und politische Vorlagen. Entscheidend ist der Standort der Liegenschaft.',
        'Die Beträge in der Übersicht sind keine pauschale Vergütung für jede neue PV-Anlage: In Basel-Stadt gehören sie zu «Solarkraftwerk Basel», im Baselbiet zum Wärmedämmgesuch. Die Bundesförderung über EIV beziehungsweise Pronovo ist separat zu prüfen.',
      ],
      sourceIds: ['bs-solarkraftwerk', 'bl-energie'],
      module: {
        kind: 'comparison',
        title: 'Die Kantonsgrenze entscheidet',
        intro: 'Gleiche Technologie, aber unterschiedliche kantonale Logik:',
        columns: ['Basel-Stadt', 'Basel-Landschaft'],
        items: [],
        rows: [
          {
            label: 'PV-Förderung',
            left: 'Grundsätzlich Bundesförderung; der kantonale Zusatz ist an energetische Sanierung plus PV gebunden.',
            right: 'Bundesförderung separat prüfen; der kantonale Bonus gilt nur mit förderfähiger Wärmedämmung.',
            sourceIds: ['bs-solarkraftwerk', 'bl-energie'],
          },
          {
            label: 'Sanierung + PV',
            left: 'Dach CHF 50/m², mit PV auf der sanierten Modulfläche CHF 100/m². Fassade CHF 70/m², mit PV CHF 140/m².',
            right: 'Zusätzlicher PV-Bonus von CHF 40/m² Modulfläche am Dach oder CHF 120/m² an der Fassade – nur im Dämmprogramm.',
            sourceIds: ['bs-solarkraftwerk', 'bl-energie'],
          },
          {
            label: 'Bewilligung',
            left: 'Für angepasste Anlagen kann eine Meldung genügen; Schutzbereiche und Kulturdenkmäler können eine Bewilligung erfordern.',
            right: 'In Bau- und Landwirtschaftszonen meist Meldung mindestens 30 Tage vor Baubeginn; Schutzbereiche werden bewilligungspflichtig.',
            sourceIds: ['bs-permit', 'bl-permit'],
          },
          {
            label: 'Solarpflicht / politischer Stand',
            left: 'Die Solaroffensive ist ein geplanter Entwurf, noch kein geltendes Recht. Vorgesehen sind eine PV-Pflicht und eine Übergangsfrist von 15 Jahren für bestehende Bauten.',
            right: 'Die Energie-Initiative «Potential nutzen» wurde am 8. März 2026 mit 67,6 % Nein abgelehnt. Daraus entstand keine neue allgemeine Nachrüstpflicht.',
            sourceIds: ['bs-offensive', 'bl-abstimmung'],
          },
          {
            label: 'Besonderheit 2026',
            left: 'Die Aktion fördert nur grossflächige Dachanlagen: 90 % der gut oder bestens geeigneten Fläche beziehungsweise des technisch machbaren Potenzials müssen belegt werden.',
            right: 'Neue Gesuche für die Massnahme starteten am 12. Januar 2026. Pro Gesuch gilt maximal CHF 100’000 und pro Massnahme höchstens 50 % der zugelassenen Kosten.',
            sourceIds: ['bs-solarkraftwerk', 'bl-energie'],
          },
        ],
      },
    },
    {
      id: 'pflichten',
      title: 'Regeln, Solaroffensive und politische Lage',
      paragraphs: [
        'Die «Solaroffensive» Basel-Stadt ist von der heutigen Rechtslage zu trennen. Der Regierungsrat hat einen revidierten Vorschlag an den Grossen Rat weitergeleitet: Geplant sind eine Pflicht für gut geeignete Flächen und eine Übergangsfrist von 15 Jahren für bestehende Gebäude. Solange die Vorlage nicht beschlossen und in Kraft gesetzt ist, gilt sie nicht als Installationspflicht.',
        'Das Projekt nennt rund 40 % des heutigen kantonalen Strombedarfs als mögliches Potenzial von Dächern und Fassaden. Das ist kein Ertragsversprechen und keine Förderquote. Im Baselbiet wurde die Gesetzesinitiative «Potential nutzen – Versorgung sichern» (Solar-Initiative) am 8. März 2026 mit 67,6 % Nein verworfen; eine neue allgemeine Nachrüstpflicht entstand nicht.',
      ],
      bullets: [
        'Basel-Stadt: geplante Solaroffensive, 15 Jahre Übergang – nicht als geltendes Gesetz behandeln.',
        'Basel-Landschaft: 67,6 % Nein zur Energie-Initiative – keine neue allgemeine Nachrüstpflicht.',
        'Heute zählt der konkrete Standort und das geltende Bauverfahren, nicht eine politische Ankündigung.',
      ],
      sourceIds: ['bs-offensive', 'bl-abstimmung', 'bs-permit', 'bl-permit'],
      notice: {
        title: 'Geplant – noch nicht geltendes Recht',
        text: 'Bis zu einem rechtskräftigen Beschluss gelten heutige Regeln: Eignung, Zone und Schutzstatus abklären und das richtige Verfahren einreichen.',
        status: 'future',
      },
    },
    {
      id: 'foerderung',
      title: 'Förderungen 2026: Sanierung und PV auseinanderhalten',
      paragraphs: [
        'In Basel-Stadt setzt «Solarkraftwerk Basel» eine energetische Dach- oder Fassadensanierung mit PV auf der sanierten Fläche voraus. Pro m² Dach gelten CHF 50, mit PV auf der Modulfläche CHF 100; an der Fassade CHF 70 beziehungsweise CHF 140. Die Verdoppelung betrifft die PV-Modulfläche, nicht automatisch die ganze Gebäudehülle.',
        'Bei einer Dachanlage müssen grundsätzlich 90 % der gut oder bestens geeigneten Fläche gemäss Solarkataster beziehungsweise des technisch machbaren Potenzials mit PV belegt werden. Das Gesuch gehört vor Baubeginn ins Portal. Eine reine PV-Anlage auf einem nicht zu sanierenden Dach darf diese Beiträge nicht als Standalone-Zuschuss einrechnen.',
        'Basel-Landschaft ergänzt Wärmedämmung und PV ab 2026 um CHF 40 pro m² Modulfläche am Dach oder CHF 120 an der Fassade. Der Bonus gehört ins Dämmgesuch und ist nicht für eine isolierte PV-Anlage gedacht. Maximal sind CHF 100’000 pro Gesuch und 50 % der zugelassenen Kosten pro Massnahme anrechenbar; neue Gesuche sind seit dem 12. Januar 2026 möglich.',
        'Die EIV des Bundes beziehungsweise Pronovo ist separat zu prüfen. Sie ersetzt weder das kantonale Sanierungsgesuch noch Meldung oder Baubewilligung. Vor einer Offerte sollte klar sein, ob nur PV, PV plus Dämmung oder eine umfassende Sanierung geplant ist.',
      ],
      bullets: [
        'BS: 50/100 CHF pro m² Dach und 70/140 CHF pro m² Fassade – nur energetische Sanierung plus PV.',
        'BS: 90-%-Vorgabe für geeignete beziehungsweise technisch machbare Dachfläche; Antrag vor Baubeginn.',
        'BL: +40/+120 CHF pro m² Modulfläche – nur zusammen mit der vorgesehenen Wärmedämmung.',
        'BL: maximal CHF 100’000 pro Gesuch und maximal 50 % der zugelassenen Kosten pro Massnahme.',
      ],
      sourceIds: ['bs-solarkraftwerk', 'bl-energie'],
    },
    {
      id: 'bewilligung',
      title: 'Bewilligung oder Meldung: zuerst Kanton und Schutzstatus prüfen',
      paragraphs: [
        'In Basel-Stadt kann für eine genügend angepasste Anlage in bestimmten Zonen das Meldeverfahren ausreichen. In Schutz- oder Ortsbildzonen sowie bei Kulturdenkmälern kann eine Baubewilligung nötig sein. Bei sichtbaren Fassaden und historischen Bauten sollte die zuständige Stelle früh einbezogen werden.',
        'In Basel-Landschaft sind PV-Anlagen auf Dächern in Bau- und Landwirtschaftszonen grundsätzlich bewilligungsfrei, aber mindestens 30 Tage vor Beginn zu melden. Kern-, Ortsbild- und Denkmalschutzzonen, wichtige Kultur- und Naturdenkmäler sowie Anlagen ausserhalb der Bauzone können eine Bewilligung erfordern.',
        'Förderung und Baurecht bleiben getrennt: Ein Fördergesuch ersetzt keine Meldung oder Bewilligung. In BS ist der Antrag vor Baubeginn entscheidend; im BL-Energiepaket wird der PV-Bonus im Dämmgesuch geführt.',
      ],
      bullets: [
        'Adresse und Kanton zuerst festhalten; anschliessend Zone, Schutzstatus und Dach- oder Fassadenlösung prüfen.',
        'Meldung oder Baugesuch vor dem Start einreichen und die Fristen der zuständigen Stelle einplanen.',
        'Fördergesuch separat kontrollieren – insbesondere den Zeitpunkt vor Baubeginn.',
      ],
      sourceIds: ['bs-permit', 'bl-permit', 'bs-solarkraftwerk', 'bl-energie'],
    },
    {
      id: 'kosten',
      title: 'Kosten & Planung: acht Faktoren statt Pauschalpreis',
      paragraphs: [
        'Für Basel gibt es keinen seriösen Einheitspreis. Kanton, Sanierungsumfang und technische Ausgangslage verändern die Rechnung. Vergleichen Sie Angebote mit derselben Leistung, Dachlösung und klar ausgewiesenen Nebenarbeiten. Für Budget und Offertenvergleich zählen diese acht Faktoren:',
      ],
      bullets: [
        'Dachfläche und nutzbare Modulfläche',
        'Leistung der Anlage und gewählte Module',
        'Dachart, Unterkonstruktion und Zustand der Eindeckung',
        'Gerüst, Zugang und Baustellenlogistik',
        'Elektroarbeiten, Zähler und Netzanschluss',
        'Speicher oder andere Zusatzkomponenten',
        'Eigenverbrauch und erwartetes Lastprofil',
        'Installateur, Leistungsumfang, Garantien und Nachbetreuung',
      ],
      sourceIds: ['bs-solarkraftwerk', 'bl-energie'],
    },
    {
      id: 'fuer-wen',
      title: 'Für wen lohnt sich eine Solaranlage hier besonders?',
      paragraphs: [
        'In Basel-Stadt passt die Aktion besonders zu einer ohnehin geplanten Dach- oder Fassadensanierung, wenn die 90-%-Vorgabe erreichbar ist. Ohne Sanierung sollte die kantonale Aktion nicht eingerechnet, sondern Bundesförderung und Eigenverbrauch separat geprüft werden.',
        'Im Baselbiet richtet sich der Bonus an Eigentümerinnen und Eigentümer, die Wärmedämmung und PV gemeinsam planen. Bei vermieteten Gebäuden, Mehrfamilienhäusern oder kleinen Dachflächen kommen Eigentum, Zählerkonzept, Statik und Verbrauchsaufteilung dazu.',
      ],
      sourceIds: ['bs-solarkraftwerk', 'bl-energie'],
      module: {
        kind: 'jurisdiction-steps',
        title: 'Welche Basel-Regel gilt für mich?',
        intro: 'Zwei nicht klickbare Wege für die erste Projektprüfung:',
        columns: ['Liegenschaft in Basel-Stadt', 'Liegenschaft in Basel-Landschaft'],
        items: [
          {
            title: 'Liegenschaft in Basel-Stadt',
            text: '1. Standort und Solarkataster prüfen. 2. Entscheiden, ob Dach- oder Fassadensanierung gleichzeitig mit PV erfolgt und ob die 90-%-Vorgabe realistisch ist. 3. Schutzstatus sowie Melde- oder Bewilligungsverfahren abklären und das Fördergesuch vor Baubeginn einreichen.',
            detail: 'Nur Sanierung plus PV gehört zur Aktion «Solarkraftwerk Basel»; eine reine PV-Anlage wird dadurch nicht nachträglich zu einem Sanierungsprojekt.',
            sourceIds: ['bs-solarkraftwerk', 'bs-permit'],
          },
          {
            title: 'Liegenschaft in Basel-Landschaft',
            text: '1. Prüfen, ob Wärmedämmung und PV gemeinsam geplant werden. 2. Dämmgesuch mit dem Bonus für die Modulfläche und den Grenzen von CHF 100’000 beziehungsweise 50 % abgleichen. 3. Meldung mindestens 30 Tage vor Baubeginn einreichen oder bei Schutzstatus ein Baugesuch starten.',
            detail: 'Der PV-Bonus ist an die förderfähige Wärmedämmung gebunden und kein eigenständiger Zuschuss für eine normale PV-Anlage.',
            sourceIds: ['bl-energie', 'bl-permit'],
          },
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'Gibt es in Basel eine kantonale PV-Förderung?',
      answer:
        'Ja, aber nicht als einheitlichen Basel-Bonus. In BS ist «Solarkraftwerk Basel» an energetische Sanierung plus PV gebunden; in BL gilt der PV-Bonus nur mit Wärmedämmung. Die EIV des Bundes ist separat zu prüfen.',
      sourceIds: ['bs-solarkraftwerk', 'bl-energie'],
    },
    {
      question: 'Was ist der Unterschied zwischen Basel-Stadt und Basel-Landschaft?',
      answer:
        'BS fördert Sanierung plus PV mit CHF 50/100 pro m² Dach und CHF 70/140 pro m² Fassade; bei Dachanlagen gilt grundsätzlich 90 %. BL ergänzt Wärmedämmung um CHF 40/120 pro m² Modulfläche und hat eigene Gesuchs- und Bauregeln.',
      sourceIds: ['bs-solarkraftwerk', 'bl-energie'],
    },
    {
      question: 'Ist die Solaroffensive in Basel-Stadt bereits Gesetz?',
      answer:
        'Nein. Sie ist ein geplanter Vorschlag für den PV-Ausbau und eine Pflicht für geeignete Flächen. Für bestehende Bauten sind 15 Jahre Übergang vorgesehen; bis zum Inkrafttreten gilt die Pflicht nicht als heutiges Recht.',
      sourceIds: ['bs-offensive'],
    },
    {
      question: 'Wie funktioniert «Solarkraftwerk Basel»?',
      answer:
        'Sie kombinieren energetische Dach- oder Fassadensanierung mit PV auf der sanierten Fläche und reichen das Gesuch vor Baubeginn ein. Am Dach gelten CHF 50/100, an der Fassade CHF 70/140 pro m²; bei Dachanlagen ist die 90-%-Vorgabe zu beachten.',
      sourceIds: ['bs-solarkraftwerk'],
    },
    {
      question: 'Wie hoch ist der PV-Bonus im Baselbiet 2026?',
      answer:
        'Der Bonus beträgt CHF 40 pro m² Modulfläche am Dach und CHF 120 an der Fassade. Er gehört zum Dämmgesuch, nicht zu einer allein geplanten PV-Anlage. Pro Gesuch sind maximal CHF 100’000 und pro Massnahme höchstens 50 % der zugelassenen Kosten möglich.',
      sourceIds: ['bl-energie'],
    },
    {
      question: 'Hat Basel-Landschaft eine allgemeine Solarpflicht für bestehende Häuser?',
      answer:
        'Nein. Die Gesetzesinitiative «Potential nutzen – Versorgung sichern» (Solar-Initiative) wurde am 8. März 2026 mit 67,6 % Nein abgelehnt; daraus entstand keine neue allgemeine Nachrüstpflicht. Für Meldung oder Bewilligung zählen weiterhin Zone, Schutzstatus und Anlage.',
      sourceIds: ['bl-abstimmung', 'bl-permit'],
    },
    {
      question: 'Wann brauche ich in Basel-Stadt eine Baubewilligung?',
      answer:
        'Das hängt von Anlage und Standort ab. Für genügend angepasste Anlagen kann eine Meldung genügen; Schutzbereiche, Kulturdenkmäler und sensible Dach- oder Fassadenlösungen können eine Baubewilligung erfordern. Die zuständige Stelle sollte den Fall vor der Offerte einordnen.',
      sourceIds: ['bs-permit', 'bs-offensive'],
    },
  ],
  sources: [
    {
      id: 'bs-solarkraftwerk',
      authority: 'Kanton Basel-Stadt',
      title: 'Aktion Solarkraftwerk Basel: Förderbeiträge',
      url: 'https://www.bs.ch/wsu/aue/abteilung-energie/aktion-solarkraftwerk-basel',
    },
    {
      id: 'bs-permit',
      authority: 'Kanton Basel-Stadt',
      title: 'Brauche ich eine Baubewilligung?',
      url: 'https://www.bs.ch/themen/umwelt-und-bauen/bauen-im-kanton-basel-stadt/brauche-ich-eine-baubewilligung',
    },
    {
      id: 'bs-offensive',
      authority: 'Grosser Rat Basel-Stadt',
      title: 'Ratschlag des Regierungsrats zur Solaroffensive (25.06.2025, Geschäft 25.0921.01)',
      url: 'https://grosserrat.bs.ch/dokumente/100410/000000410351.pdf',
    },
    {
      id: 'bl-energie',
      authority: 'Kanton Basel-Landschaft',
      title: 'Neue Anreize im kantonalen Förderprogramm 2026',
      url: 'https://www.baselland.ch/politik-und-behorden/direktionen/bau-und-umweltschutzdirektion/umweltschutz-energie/medienmitteilungen/neue-anreize-im-kantonalen-foerderprogramm',
    },
    {
      id: 'bl-permit',
      authority: 'Kanton Basel-Landschaft',
      title: 'Solaranlagen / Wärmepumpen: Melde- und Bewilligungspflicht',
      url: 'https://www.baselland.ch/politik-und-behorden/direktionen/bau-und-umweltschutzdirektion/bauinspektorat/solaranlagen-waermepumpen',
    },
    {
      id: 'bl-abstimmung',
      authority: 'Kanton Basel-Landschaft',
      title: 'Abstimmungsergebnis: «Potential nutzen – Versorgung sichern» (8. März 2026)',
      url: 'https://abstimmungen.bl.ch/app/archive/de/vote/ct-13-160.html',
    },
  ],
};