import type { CantonGuide } from './types';

const sources = [
  {
    id: 'tg-env',
    authority: 'Kanton Thurgau',
    title: 'Energienutzungsverordnung (ENV), geltende Fassung',
    url: 'https://www.rechtsbuch.tg.ch/app/de/texts_of_law/731.11',
  },
  {
    id: 'tg-eng-revision',
    authority: 'Grosser Rat des Kantons Thurgau',
    title: 'Geschäft 24/GE 7/146: Änderung des Gesetzes über die Energienutzung, Status abgeschlossen',
    url: 'https://parlament.tg.ch/de/geschaefte/?search=done&length=10&title=Energienutzung&legislatur=2024-2028',
  },
  {
    id: 'tg-solar-meldung',
    authority: 'Kanton Thurgau',
    title: 'Verordnung zum Planungs- und Baugesetz § 50b – Meldepflicht für Solaranlagen',
    url: 'https://www.rechtsbuch.tg.ch/app/de/texts_of_law/700.1',
  },
  {
    id: 'tg-foerderprogramm',
    authority: 'Kanton Thurgau, Amt für Energie',
    title: 'Elektronische Gesuchseingabe und Energieförderportal',
    url: 'https://energie.tg.ch/hauptrubrik-2/wie-gehe-ich-vor.html/10651',
  },
  {
    id: 'ch-pronovo-pv',
    authority: 'Pronovo AG im Auftrag des Bundes',
    title: 'Einmalvergütung für Photovoltaikanlagen',
    url: 'https://pronovo.ch/de/foerderung/photovoltaik',
  },
  {
    id: 'pronovo-tariff-calculator',
    authority: 'Pronovo AG im Auftrag des Bundes',
    title: 'Tarifrechner für Photovoltaik',
    url: 'https://pronovo.ch/de/services/tarifrechner',
  },
] as const;

export const guide: CantonGuide = {
  id: 'thurgau',
  path: '/solaranlage-thurgau',
  canton: 'Thurgau',
  title: 'Solaranlage in Thurgau | PvPro.ch',
  description:
    'Vergleichen Sie bis zu drei kostenlose Offerten geprüfter Solarteure für Ihre Solaranlage in Thurgau.',
  h1: 'Solaranlage im Thurgau: Eigenstrompflicht und Regeln für Neubauten 2026',
  intro: [
    'Für einen Neubau im Thurgau sind grundsätzlich 30 W Eigenstromleistung pro m² Energiebezugsfläche einzuplanen. Die Energiebezugsfläche (EBF) ist die beheizte relevante Gebäudefläche.',
    'Wird weniger Eigenstromleistung installiert, muss der Energiebedarf des Gebäudes zusätzlich gesenkt werden. Kleine Erweiterungen können ausgenommen sein; bei Meldung, Förderung und der Gesetzesrevision ist der konkrete Projektstand entscheidend.',
  ],
  quickFacts: [
    {
      value: '30 W/m² EBF',
      label: 'Eigenstromleistung bei Neubauten',
      sourceIds: ['tg-env'],
    },
    {
      value: '5 oder 10 kWh/m²/Jahr',
      label: 'Zusätzliche Reduktion bei geringerer Leistung',
      sourceIds: ['tg-env'],
    },
    {
      value: '<50 m²',
      label: 'Eine Ausnahmegrenze für kleine Erweiterungen',
      sourceIds: ['tg-env'],
    },
    {
      value: '20 Tage',
      label: 'Meldung vor Baubeginn bei Anlagen nach § 50b',
      sourceIds: ['tg-solar-meldung'],
    },
  ],
  ctaAfterSection: 'effizienzloesung',
  sections: [
    {
      id: 'effizienzloesung',
      title: '30 W Eigenstrom oder zusätzliche Gebäudeeffizienz',
      paragraphs: [
        'Planen Sie beim Neubau zuerst mit 30 W Eigenstromleistung pro m² EBF. Wird dieser Wert erreicht, ist die Vorgabe erfüllt; bei einer tieferen Leistung kommt anstelle einer Ersatzabgabe eine zusätzliche energetische Anforderung zur Anwendung.',
        'Die zusätzliche Reduktion betrifft den Energiebedarf für Heizung, Warmwasser, Kühlung und Lüftung. Sie ist keine Gegenrechnung zur erzeugten Strommenge: Je nach installierter Eigenstromleistung muss das Gebäude den massgebenden Energiebedarf um weitere 5 oder 10 kWh pro m² und Jahr senken.',
      ],
      sourceIds: ['tg-env'],
      module: {
        kind: 'efficiency-decision',
        title: '30 W oder Effizienzlösung?',
        intro:
          'Vergleichen Sie die geplante Eigenstromleistung pro m² EBF mit den drei Stufen und weisen Sie die zusätzliche Effizienz gegebenenfalls im Energienachweis nach.',
        items: [
          {
            title: 'Volle Eigenstromleistung',
            value: '30 W/m²',
            text: 'Mit 30 W Eigenstromleistung pro m² Energiebezugsfläche ist die Vorgabe für den Neubau erfüllt.',
            detail: 'Für diese Stufe ist keine zusätzliche Reduktion nach der Effizienzlösung erforderlich.',
            sourceIds: ['tg-env'],
          },
          {
            title: 'Reduzierte Eigenstromleistung',
            value: '15 bis <30 W/m²',
            text: 'Bei mindestens 15, aber weniger als 30 W/m² muss der Energiebedarf für Heizung, Warmwasser, Kühlung und Lüftung zusätzlich um 5 kWh/m² pro Jahr gesenkt werden.',
            detail: 'Massgebend ist die zusätzliche Gebäudeeffizienz, nicht ein rechnerischer Vergleich mit der Stromproduktion.',
            sourceIds: ['tg-env'],
          },
          {
            title: 'Eigenstromleistung unter 15 W/m²',
            value: '<15 W/m²',
            text: 'Bei weniger als 15 W/m² muss der Energiebedarf für Heizung, Warmwasser, Kühlung und Lüftung zusätzlich um 10 kWh/m² pro Jahr gesenkt werden.',
            detail: 'Die gewählte Lösung sollte zusammen mit der geplanten Eigenstromleistung im Energienachweis klar ausgewiesen sein.',
            sourceIds: ['tg-env'],
          },
        ],
      },
    },
    {
      id: 'erweiterungen',
      title: 'Kleine Erweiterungen können von der Vorgabe ausgenommen sein',
      paragraphs: [
        'Prüfen Sie bei einer Erweiterung die neu geschaffene EBF, bevor Sie die Neubauvorgabe übernehmen. Die Ausnahme gilt, wenn die neue Energiebezugsfläche weniger als 50 m² beträgt.',
        'Eine Ausnahme ist ebenfalls möglich, wenn die neue EBF höchstens 20% der bestehenden EBF ausmacht und zugleich höchstens 1’000 m² beträgt. Bei dieser zweiten Variante müssen beide Bedingungen erfüllt sein.',
      ],
      sourceIds: ['tg-env'],
    },
    {
      id: 'oeffentliche-bauten',
      title: 'Die 85%-Regel betrifft die öffentliche Hand',
      paragraphs: [
        'Für ein privates Wohnhaus sollten Sie die 85%-Globalstrahlungs-Regel nicht als allgemeine Pflicht bei jeder Dachsanierung einplanen. Die geltenden Bestimmungen in § 4a bis § 4d stehen unter der Vorbildfunktion der öffentlichen Hand.',
        'Bei Neubauten, tiefgreifenden Umbau- oder Sanierungsmassnahmen und umfassenden Dachsanierungen von Kanton, Gemeinden sowie weiteren öffentlich-rechtlichen Körperschaften und Anstalten ist das Solarpotenzial geeigneter Flächen ab 85% Globalstrahlung relevant. Diese Vorgabe für öffentliche Bauten wird nicht automatisch zu einer allgemeinen privaten Dachpflicht.',
      ],
      sourceIds: ['tg-env'],
    },
    {
      id: 'revision',
      title: 'Gesetzesrevision für das konkrete Projekt einordnen',
      paragraphs: [
        'Verwenden Sie für das Baugesuch die Fassung, die zum Projektzeitpunkt tatsächlich in Kraft steht. Der Grosse Rat hat die Beratung der Revision des Gesetzes über die Energienutzung am 2. September 2026 abgeschlossen und eine Schlussfassung veröffentlicht.',
        'Der Abschluss der parlamentarischen Beratung allein belegt noch kein Inkrafttreten. Lassen Sie deshalb vor der Projekteingabe anhand der kantonalen Gesetzessammlung prüfen, welche Vorschriften anwendbar sind.',
      ],
      sourceIds: ['tg-eng-revision', 'tg-env'],
      notice: {
        title: 'Revision am 2. September 2026 abgeschlossen',
        text: 'Für ein Bauprojekt ist nicht allein die Schlussfassung des Grossen Rates, sondern das tatsächlich in Kraft stehende Recht massgebend.',
        status: 'important',
      },
    },
    {
      id: 'meldung',
      title: 'Meldepflicht 20 Tage vor Baubeginn prüfen',
      paragraphs: [
        'Klären Sie mit der Gemeinde, ob Ihr Vorhaben bewilligungsfrei ist und unter § 50b fällt. Das Meldeverfahren bedeutet eine Meldung anstelle einer normalen Baubewilligung: Bei bundesrechtlich bewilligungsfreien Solaranlagen mit mehr als 35 m² Fläche ist die Meldung 20 Tage vor Baubeginn einzureichen.',
        'Der Meldung ist eine Beschreibung der Anlage und ihrer Integration beizulegen. Für Anlagen in Arbeitszonen genügt unter den vorgesehenen Bedingungen eine Mitteilung zu Fläche und Leistung; ob diese vereinfachte Angabe für das konkrete Projekt ausreicht, sollte vorab mit der Gemeinde geklärt werden.',
      ],
      sourceIds: ['tg-solar-meldung'],
    },
    {
      id: 'foerderung',
      title: 'Fördergesuche vor Baubeginn getrennt prüfen',
      paragraphs: [
        'Reichen Sie ein Gesuch für kantonale Programmmassnahmen vor Beginn der Bau- oder Installationsarbeiten ein. Welche Massnahmen und Konditionen aktuell verfügbar sind, muss direkt im kantonalen Förderportal geprüft werden; ein pauschaler kantonaler Betrag für eine gewöhnliche PV-Anlage lässt sich daraus nicht ableiten.',
        'Die reguläre PV-Förderung des Bundes läuft über die Einmalvergütung (EIV) von Pronovo. KLEIV bezeichnet Anlagen unter 100 kW, GREIV Anlagen ab 100 kW; die HEIV gilt nur für die vorgesehenen Kategorien von Anlagen ohne Eigenverbrauch. Seit 1. April 2024 beträgt der Grundbeitrag CHF 0, während Leistung, Anlagenart und mögliche Boni den individuellen Beitrag bestimmen. Ein fixer Förderprozentsatz ist nicht garantiert.',
        'Ob Batteriespeicher aktuell kantonal gefördert werden und zu welchen Bedingungen, sollte ebenfalls vor Projektstart im Förderportal geprüft werden. Die früher publizierten Konditionen des Programms 2021 sind kein verlässlicher Nachweis für 2026.',
      ],
      sourceIds: ['tg-foerderprogramm', 'ch-pronovo-pv', 'pronovo-tariff-calculator'],
    },
    {
      id: 'kosten',
      title: 'Kosten und Planung auf derselben Grundlage vergleichen',
      paragraphs: [
        'Vergleichen Sie Offerten mit derselben EBF, derselben geplanten Eigenstromleistung und derselben gewählten Effizienzstufe. Zusätzlich sollten Module, Wechselrichter, Unterkonstruktion, Gerüst, Elektroarbeiten, Netzanschluss und optionale Speicherpositionen klar ausgewiesen sein.',
        'Halten Sie Bundesförderung, mögliche kantonale Programmmassnahmen und den Preis vor Förderabzug getrennt. So bleibt nachvollziehbar, welche Annahmen im Angebot enthalten sind und welche Beiträge noch bestätigt werden müssen.',
        'Mit PvPro.ch können Eigentümer kostenlos und unverbindlich bis zu drei passende Solarofferten vergleichen.',
      ],
      bullets: [
        'Energiebezugsfläche und angesetzte W/m²',
        'Nachweis der gewählten Effizienzlösung',
        'Montage-, Gerüst- und Elektroarbeiten',
        'Förderannahmen separat vom Anlagenpreis',
      ],
      sourceIds: [
        'tg-env',
        'tg-foerderprogramm',
        'ch-pronovo-pv',
        'pronovo-tariff-calculator',
      ],
    },
  ],
  faqs: [
    {
      question: 'Wie viel Eigenstrom muss ein Neubau im Thurgau erzeugen?',
      answer: '30 W/m² Energiebezugsfläche.',
      sourceIds: ['tg-env'],
    },
    {
      question: 'Kann ich weniger PV installieren?',
      answer: 'Ja, wenn der Energiebedarf gemäss Ersatzlösung zusätzlich reduziert wird.',
      sourceIds: ['tg-env'],
    },
    {
      question: 'Gilt die 85%-Globalstrahlungs-Regel automatisch für jedes private Dach?',
      answer:
        'Nicht als allgemeine Aussage aus der aktuell geltenden §4c-Regel; diese steht in der Vorbildfunktion der öffentlichen Hand.',
      sourceIds: ['tg-env'],
    },
    {
      question: 'Wie früh muss eine bewilligungsfreie Solaranlage gemeldet werden?',
      answer: 'Bei den von §50b erfassten Anlagen 20 Tage vor Baubeginn.',
      sourceIds: ['tg-solar-meldung'],
    },
    {
      question: 'Ist die Energiegesetzrevision vom September 2026 schon verbindlich?',
      answer:
        'Der Grosse Rat hat die Beratung abgeschlossen; für ein konkretes Projekt ist die tatsächlich in Kraft stehende Gesetzesfassung massgebend.',
      sourceIds: ['tg-eng-revision', 'tg-env'],
    },
  ],
  sources: [...sources],
};