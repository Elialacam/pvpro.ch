import type { CantonGuide } from './types';

export const guide: CantonGuide = {
  id: 'basel',
  path: '/solaranlage-basel',
  canton: 'Basel-Stadt / Basel-Landschaft',
  title: 'Solaranlage Basel 2026: Basel-Stadt vs. Baselland | PvPro.ch',
  description:
    'Photovoltaik in Basel: Förderung, Bewilligung und Solarpflicht unterscheiden sich zwischen Basel-Stadt und Basel-Landschaft deutlich.',
  h1: 'Solaranlage in Basel: Basel-Stadt oder Basel-Landschaft?',
  intro: [
    'Welche Förderung und welche Regeln gelten, hängt davon ab, auf welcher Seite der Kantonsgrenze Ihre Liegenschaft liegt.',
  ],
  quickFacts: [
    {
      value: 'bis CHF 100/m²',
      label: 'Dach: Sanierung zusammen mit PV',
      sourceIds: ['bs-solarkraftwerk'],
    },
    {
      value: 'bis CHF 140/m²',
      label: 'Fassade: Sanierung zusammen mit PV',
      sourceIds: ['bs-solarkraftwerk'],
    },
    {
      value: 'CHF 40/m²',
      label: 'Dach: PV-Bonus nur zusammen mit Wärmedämmung',
      sourceIds: ['bl-energie'],
    },
    {
      value: 'CHF 120/m²',
      label: 'Fassade: PV-Bonus nur zusammen mit Wärmedämmung',
      sourceIds: ['bl-energie'],
    },
  ],
  sections: [
    {
      id: 'vergleich',
      title: 'Basel-Stadt und Basel-Landschaft: fünf Unterschiede',
      paragraphs: [
        'Welche Regel gilt, entscheidet zuerst der Standort. Basel-Stadt und Basel-Landschaft haben unterschiedliche Förderungen und Verfahren.',
        'Die Beträge sind keine pauschale Vergütung für jede Photovoltaikanlage (PV). In Basel-Stadt gehören sie zu «Solarkraftwerk Basel», in Basel-Landschaft zu einem Gesuch für die Wärmedämmung (Dämmgesuch). Die Bundesförderung über Pronovo (Einmalvergütung, EIV) prüfen Sie separat.',
      ],
      sourceIds: ['bs-solarkraftwerk', 'bl-energie'],
      module: {
        kind: 'comparison',
        title: 'Die Kantonsgrenze entscheidet',
        intro: 'Gleiche Technik, aber andere Regeln je nach Kanton:',
        columns: ['Basel-Stadt', 'Basel-Landschaft'],
        items: [],
        rows: [
          {
            label: 'PV-Förderung',
            left: 'Bundesförderung separat prüfen. Der kantonale Zusatz gilt nur bei energetischer Sanierung mit PV.',
            right: 'Bundesförderung separat prüfen. Der kantonale Bonus gilt nur mit förderfähiger Wärmedämmung.',
            sourceIds: ['bs-solarkraftwerk', 'bl-energie'],
          },
          {
            label: 'Sanierung + PV',
            left: 'Dach: CHF 50/m², mit PV auf der Modulfläche CHF 100/m². Fassade: CHF 70/m², mit PV CHF 140/m².',
            right: 'PV-Bonus: CHF 40/m² Dach oder CHF 120/m² Fassade. Nur mit Wärmedämmung.',
            sourceIds: ['bs-solarkraftwerk', 'bl-energie'],
          },
          {
            label: 'Bewilligung',
            left: 'Bei Anlagen, die sich gut einfügen, kann eine Meldung genügen. Schutzbereiche und Kulturdenkmäler können eine Bewilligung verlangen.',
            right: 'In Bau- und Landwirtschaftszonen meist Meldung, mindestens 30 Tage vor Baubeginn. Schutzbereiche verlangen eine Bewilligung.',
            sourceIds: ['bs-permit', 'bl-permit'],
          },
          {
            label: 'Solarpflicht',
            left: 'Die Solaroffensive ist nur ein Entwurf. Geplant sind eine PV-Pflicht und 15 Jahre Übergang für bestehende Bauten.',
            right: 'Die Energie-Initiative «Potential nutzen» wurde am 8. März 2026 mit 67,6 % Nein abgelehnt. Es gibt deshalb keine neue allgemeine Nachrüstpflicht.',
            sourceIds: ['bs-offensive', 'bl-abstimmung'],
          },
          {
            label: 'Besonderheit 2026',
            left: 'Die Aktion fördert nur grossflächige Dachanlagen. 90 % der gut oder bestens geeigneten Fläche oder des technisch machbaren Potenzials müssen belegt werden.',
            right: 'Neue Gesuche sind seit dem 12. Januar 2026 möglich. Pro Gesuch gilt maximal CHF 100’000, pro Massnahme höchstens 50 % der zugelassenen Kosten.',
            sourceIds: ['bs-solarkraftwerk', 'bl-energie'],
          },
        ],
      },
    },
    {
      id: 'pflichten',
      title: 'Solarpflicht: Was gilt heute?',
      paragraphs: [
        'Nein. Die Solaroffensive Basel-Stadt ist noch kein geltendes Recht, und Basel-Landschaft hat keine neue allgemeine Nachrüstpflicht.',
        'Die Kantonsregierung hat in Basel-Stadt einen überarbeiteten Vorschlag an das Kantonsparlament weitergeleitet. Geplant sind eine Pflicht für gut geeignete Flächen und 15 Jahre Übergang für bestehende Gebäude.',
        'Solange die Vorlage nicht beschlossen und in Kraft ist, ist sie keine Pflicht zur Installation. Die Vorlage nennt rund 40 % des heutigen kantonalen Strombedarfs als mögliches Potenzial von Dächern und Fassaden.',
        'Das ist weder ein Ertragsversprechen noch eine Förderquote. In Basel-Landschaft wurde die Gesetzesinitiative «Potential nutzen – Versorgung sichern» (Solar-Initiative) am 8. März 2026 mit 67,6 % Nein verworfen.',
      ],
      bullets: [
        'Basel-Stadt: Solaroffensive geplant, 15 Jahre Übergang vorgesehen – noch kein geltendes Gesetz.',
        'Basel-Landschaft: 67,6 % Nein zur Energie-Initiative – keine neue allgemeine Nachrüstpflicht.',
        'Für Ihr Projekt zählen heute Standort und geltendes Bauverfahren, nicht eine politische Ankündigung.',
      ],
      sourceIds: ['bs-offensive', 'bl-abstimmung', 'bs-permit', 'bl-permit'],
      notice: {
        title: 'Geplant – noch nicht geltendes Recht',
        text: 'Bis ein Beschluss rechtlich gilt, gelten die heutigen Regeln. Prüfen Sie Eignung, Zone und Schutz des Gebäudes und reichen Sie das passende Verfahren ein.',
        status: 'future',
      },
    },
    {
      id: 'foerderung',
      title: 'Welche Förderung gilt 2026?',
      paragraphs: [
        'Die Kantonsgrenze entscheidet über die Förderung. Basel-Stadt zahlt nur bei energetischer Sanierung mit PV; Basel-Landschaft nur bei Wärmedämmung, die die Förderbedingungen erfüllt.',
        'In Basel-Stadt gelten 2026 bei «Solarkraftwerk Basel» CHF 50 pro m² Dach, mit PV auf der Modulfläche CHF 100. An der Fassade sind es CHF 70 beziehungsweise CHF 140.',
        'Die Verdoppelung gilt für die PV-Modulfläche, nicht automatisch für die ganze Gebäudehülle. Auf einer Dachanlage müssen grundsätzlich 90 % der geeigneten Fläche mit PV belegt werden.',
        'Gemeint ist die gut oder bestens geeignete Fläche in der Karte mit den geeigneten Flächen (Solarkataster) oder das technisch machbare Potenzial.',
        'Das Gesuch muss vor Baubeginn ins Portal. Eine reine PV-Anlage auf einem nicht zu sanierenden Dach erhält diese Beiträge nicht.',
        'Basel-Landschaft zahlt ab 2026 zusätzlich CHF 40 pro m² Modulfläche am Dach oder CHF 120 an der Fassade. Der Bonus gehört ins Dämmgesuch und gilt nicht für eine allein geplante PV-Anlage.',
        'Pro Gesuch sind höchstens CHF 100’000 und pro Massnahme höchstens 50 % der zugelassenen Kosten möglich. Neue Gesuche sind seit dem 12. Januar 2026 möglich.',
        'Die Bundesförderung über Pronovo, die Einmalvergütung (EIV), prüfen Sie separat. Sie ersetzt weder das kantonale Sanierungsgesuch noch eine Meldung oder Baubewilligung.',
        'Vor der Offerte sollte klar sein, ob Sie nur PV, PV plus Dämmung oder eine umfassende Sanierung planen.',
      ],
      bullets: [
        'Basel-Stadt: CHF 50/100 pro m² Dach und CHF 70/140 pro m² Fassade – nur Sanierung plus PV.',
        'Basel-Stadt: 90 % der geeigneten beziehungsweise technisch machbaren Dachfläche; Antrag vor Baubeginn.',
        'Basel-Landschaft: CHF 40/120 pro m² Modulfläche – nur zusammen mit Wärmedämmung.',
        'Basel-Landschaft: höchstens CHF 100’000 pro Gesuch und höchstens 50 % der zugelassenen Kosten pro Massnahme.',
      ],
      sourceIds: ['bs-solarkraftwerk', 'bl-energie'],
    },
    {
      id: 'bewilligung',
      title: 'Brauche ich eine Bewilligung oder reicht eine Meldung?',
      paragraphs: [
        'Ob eine Meldung reicht oder eine Baubewilligung nötig ist, hängt von Kanton, Zone und Schutz ab. Förderung und Bauvorschriften sind getrennt.',
        'In Basel-Stadt kann für eine Anlage, die sich gut einfügt, in bestimmten Zonen eine Meldung reichen. In Zonen mit besonderem Schutz (Schutz- oder Ortsbildzonen) und bei Kulturdenkmälern kann eine Baubewilligung nötig sein.',
        'Bei sichtbaren Fassaden und historischen Bauten sollten Sie die zuständige Stelle früh fragen. In Basel-Landschaft sind PV-Anlagen auf Dächern in Bau- und Landwirtschaftszonen grundsätzlich bewilligungsfrei.',
        'Sie müssen dort aber mindestens 30 Tage vor Beginn gemeldet werden. In Kern-, Ortsbild- und Denkmalschutzzonen, bei wichtigen Kultur- und Naturdenkmälern sowie ausserhalb der Bauzone kann eine Bewilligung nötig sein.',
        'Ein Fördergesuch ersetzt keine Meldung und keine Bewilligung. In Basel-Stadt muss der Antrag vor Baubeginn gestellt werden; im Baselbieter Energiepaket wird der PV-Bonus im Dämmgesuch geführt.',
      ],
      bullets: [
        'Adresse und Kanton festhalten. Danach Zone, Schutz des Gebäudes und Dach- oder Fassadenlösung prüfen.',
        'Meldung oder Baugesuch vor dem Start einreichen und die Fristen der zuständigen Stelle einplanen.',
        'Fördergesuch separat prüfen, besonders den Zeitpunkt vor Baubeginn.',
      ],
      sourceIds: ['bs-permit', 'bl-permit', 'bs-solarkraftwerk', 'bl-energie'],
    },
    {
      id: 'kosten',
      title: 'Was kostet eine Solaranlage hier?',
      paragraphs: [
        'Der Kanton veröffentlicht keinen festen PV-Preis. Entscheidend sind vor allem Dach, Anlagengrösse und gewünschte Ausstattung.',
        'Der sinnvollste Vergleich ist deshalb nicht ein pauschaler Online-Preis, sondern mehrere Offerten für dasselbe Projekt.',
      ],
      bullets: [
        'Dachfläche und Dachform, nutzbare Modulfläche, Unterkonstruktion und Zustand der Eindeckung',
        'Leistung der Anlage und gewählte Module',
        'Gerüst, Zugang und Baustellenlogistik',
        'Elektroarbeiten, Zähler und Netzanschluss',
        'Batteriespeicher und andere Zusatzkomponenten',
        'Eigenverbrauch und erwartetes Lastprofil',
        'Wechselrichter',
        'Installateur, Leistungsumfang, Garantien und Nachbetreuung',
      ],
      sourceIds: ['bs-solarkraftwerk', 'bl-energie'],
    },
    {
      id: 'fuer-wen',
      title: 'Für wen passt eine Solaranlage hier besonders?',
      paragraphs: [
        'Eine Solaranlage passt hier besonders, wenn Sie Sanierung und PV zusammen planen. In Basel-Stadt gilt das für «Solarkraftwerk Basel», in Basel-Landschaft für Wärmedämmung mit PV.',
        'In Basel-Stadt sollte die Vorgabe von 90 % erreichbar sein. Ohne Sanierung rechnen Sie die kantonale Aktion nicht ein, sondern prüfen Bundesförderung und Eigenverbrauch separat.',
        'In Basel-Landschaft passt der Bonus zu Eigentümerinnen und Eigentümern, die Wärmedämmung und PV gemeinsam planen. Bei vermieteten Gebäuden, Mehrfamilienhäusern oder kleinen Dachflächen sind zusätzlich Eigentum, Zählerplanung, Dachstatik und die Verteilung des Stromverbrauchs zu klären.',
      ],
      sourceIds: ['bs-solarkraftwerk', 'bl-energie'],
      module: {
        kind: 'jurisdiction-steps',
        title: 'Welche Basel-Regel gilt für mich?',
        intro: 'Prüfen Sie zuerst, auf welcher Seite der Kantonsgrenze Ihre Liegenschaft liegt:',
        columns: ['Liegenschaft in Basel-Stadt', 'Liegenschaft in Basel-Landschaft'],
        items: [
          {
            title: 'Liegenschaft in Basel-Stadt',
            text: '1. Standort und Solarkataster prüfen. 2. Dach- oder Fassadensanierung mit PV planen und prüfen, ob 90 % erreichbar sind. 3. Schutz und Verfahren abklären; Fördergesuch vor Baubeginn einreichen.',
            detail: 'Nur Sanierung plus PV gehört zu «Solarkraftwerk Basel». Eine reine PV-Anlage wird dadurch nicht zu einem Sanierungsprojekt.',
            sourceIds: ['bs-solarkraftwerk', 'bs-permit'],
          },
          {
            title: 'Liegenschaft in Basel-Landschaft',
            text: '1. Wärmedämmung und PV gemeinsam planen. 2. Dämmgesuch, Bonus für die Modulfläche, CHF 100’000 und 50 % prüfen. 3. Meldung mindestens 30 Tage vor Baubeginn einreichen oder bei Schutz ein Baugesuch starten.',
            detail: 'Der PV-Bonus ist an förderfähige Wärmedämmung gebunden. Er ist kein eigenständiger Zuschuss für eine normale PV-Anlage.',
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
        'Ja, aber es gibt keinen einheitlichen Basel-Bonus. In Basel-Stadt ist «Solarkraftwerk Basel» an energetische Sanierung plus PV gebunden. In Basel-Landschaft gilt der PV-Bonus nur mit Wärmedämmung; die Bundesförderung über Pronovo (Einmalvergütung, EIV) prüfen Sie separat.',
      sourceIds: ['bs-solarkraftwerk', 'bl-energie'],
    },
    {
      question: 'Was ist der Unterschied zwischen Basel-Stadt und Basel-Landschaft?',
      answer:
        'Die Kantone haben unterschiedliche Regeln. Basel-Stadt fördert Sanierung plus PV mit CHF 50/100 pro m² Dach und CHF 70/140 pro m² Fassade; bei Dachanlagen gilt grundsätzlich 90 %. Basel-Landschaft ergänzt Wärmedämmung um CHF 40/120 pro m² Modulfläche und hat eigene Regeln für Gesuche und Bauten.',
      sourceIds: ['bs-solarkraftwerk', 'bl-energie'],
    },
    {
      question: 'Ist die Solaroffensive in Basel-Stadt bereits Gesetz?',
      answer:
        'Nein. Die Solaroffensive ist ein geplanter Vorschlag für mehr PV und eine Pflicht für geeignete Flächen. Für bestehende Bauten sind 15 Jahre Übergang vorgesehen. Bis zum Inkrafttreten ist diese Pflicht kein geltendes Recht.',
      sourceIds: ['bs-offensive'],
    },
    {
      question: 'Wie funktioniert «Solarkraftwerk Basel»?',
      answer:
        'Sie kombinieren eine energetische Dach- oder Fassadensanierung mit PV auf der sanierten Fläche. Das Gesuch reichen Sie vor Baubeginn ein. Am Dach gelten CHF 50/100, an der Fassade CHF 70/140 pro m²; bei Dachanlagen ist die 90-%-Vorgabe zu beachten.',
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
        'Nein. Die Gesetzesinitiative «Potential nutzen – Versorgung sichern» (Solar-Initiative) wurde am 8. März 2026 mit 67,6 % Nein abgelehnt. Daraus entstand keine neue allgemeine Pflicht zum Nachrüsten. Für Meldung oder Bewilligung zählen weiterhin Zone, Schutz des Gebäudes und Anlage.',
      sourceIds: ['bl-abstimmung', 'bl-permit'],
    },
    {
      question: 'Wann brauche ich in Basel-Stadt eine Baubewilligung?',
      answer:
        'Das hängt von Anlage und Standort ab. Für eine Anlage, die sich gut einfügt, kann eine Meldung genügen. In Schutzbereichen, bei Kulturdenkmälern und bei sensiblen Dach- oder Fassadenlösungen kann eine Baubewilligung nötig sein; die zuständige Stelle sollte den Fall vor der Offerte einordnen.',
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