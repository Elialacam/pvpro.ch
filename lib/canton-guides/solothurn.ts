import type { CantonGuide } from './types';

const sources = [
  {
    id: 'so-vote-2025',
    authority: 'Kanton Solothurn',
    title: 'Abstimmung vom 9. Februar 2025: Totalrevision des Energiegesetzes',
    url: 'https://so.ch/verwaltung/staatskanzlei/medien/medienmitteilung/news/energiegesetz-mehrheit-sagt-nein',
  },
  {
    id: 'so-energy-law',
    authority: 'Kanton Solothurn',
    title: 'Energiegesetz von 1991, geltende Fassung seit 2015',
    url: 'https://bgs.so.ch/app/de/texts_of_law/941.21',
  },
  {
    id: 'so-solar-notification',
    authority: 'Kanton Solothurn, Amt für Raumplanung',
    title: 'Kantonaler Richtplan E-2.5: Meldung von Solaranlagen',
    url: 'https://so.ch/fileadmin/internet/bjd/bjd-arp/Richtplanung/pdf/Richtplantext/E-2_5.pdf',
  },
  {
    id: 'so-ebauso',
    authority: 'Kanton Solothurn',
    title: 'Elektronisches Baubewilligungsverfahren eBauSO',
    url: 'https://so.ch/services/baubewilligungsverfahren',
  },
  {
    id: 'so-energy-funding',
    authority: 'Kanton Solothurn, Energiefachstelle',
    title: 'Kantonales Förderprogramm Energie: Fördermassnahmen',
    url: 'https://energie.so.ch/foerderung/foerdermassnahmen',
  },
  {
    id: 'so-tax-book',
    authority: 'Kantonales Steueramt Solothurn',
    title: 'Steuerbuch: Betrieb einer Photovoltaikanlage',
    url: 'https://steuerbuch.so.ch/steuern/einkommenssteuer/ertraege-aus-unbeweglichem-vermoegen-und-liegenschaftskosten/27-nr-4',
  },
  {
    id: 'pronovo-eiv',
    authority: 'Pronovo',
    title: 'Einmalvergütung für Photovoltaikanlagen',
    url: 'https://pronovo.ch/de/foerderung/photovoltaik',
  },
  {
    id: 'pronovo-tariff-calculator',
    authority: 'Pronovo',
    title: 'Tarifrechner für Photovoltaik',
    url: 'https://pronovo.ch/de/services/tarifrechner',
  },
] as const;

export const guide: CantonGuide = {
  id: 'solothurn',
  path: '/solaranlage-solothurn',
  canton: 'Solothurn',
  title: 'Solaranlage in Solothurn | PvPro.ch',
  description:
    'Vergleichen Sie bis zu drei kostenlose Offerten geprüfter Solarteure für Ihre Solaranlage in Solothurn.',
  h1: 'Solaranlage im Kanton Solothurn: Was 2026 wirklich gilt',
  intro: [
    'Für Solaranlagen in Solothurn gilt 2026 keine neue allgemeine 10-W/m²-Pflicht aus der geplanten Totalrevision: Die Vorlage wurde am 9. Februar 2025 abgelehnt.',
    'Für Eigentümer wichtig sind stattdessen das geltende Energiegesetz, die Meldung bewilligungsfreier Anlagen mindestens 30 Tage vor Baubeginn und die Bundesförderung über Pronovo.',
  ],
  quickFacts: [
    {
      value: '57,52% Nein',
      label: 'Totalrevision am 9. Februar 2025 abgelehnt',
      sourceIds: ['so-vote-2025'],
    },
    {
      value: 'Keine neue 10-W/m²-Pflicht',
      label: 'Vorgabe der abgelehnten Revision gilt nicht',
      sourceIds: ['so-vote-2025', 'so-energy-law'],
    },
    {
      value: 'Mind. 30 Tage',
      label: 'Meldung vor Baubeginn',
      sourceIds: ['so-solar-notification'],
    },
    {
      value: 'EIV über Pronovo',
      label: 'Zentraler Förderweg für normale PV-Anlagen',
      sourceIds: ['pronovo-eiv', 'so-energy-funding'],
    },
  ],
  ctaAfterSection: 'rechtslage',
  sections: [
    {
      id: 'rechtslage',
      title: 'Was gilt – und was gilt nicht?',
      paragraphs: [
        'Planen Sie Ihr Projekt nach dem bestehenden Recht und nicht nach Unterlagen zur abgelehnten Totalrevision. Die Abstimmung endete mit 57,52% Nein und 42,48% Ja; damit erhielt Solothurn kein neues Energiegesetz.',
        'Das Energiegesetz von 1991 in der seit 2015 geltenden Fassung bleibt massgebend. Es enthält zusammen mit der Energieverordnung Anforderungen für Neubauten und Erweiterungen, etwa zum Wärmebedarf und zum Anteil nicht erneuerbarer Energie, aber keine neue allgemeine kantonale Pflicht von 10 W Photovoltaikleistung pro m² Energiebezugsfläche. Die Energiebezugsfläche (EBF) ist die beheizte relevante Gebäudefläche.',
      ],
      sourceIds: ['so-vote-2025', 'so-energy-law'],
      module: {
        kind: 'current-law-comparison',
        title: 'Was gilt – und was gilt nicht?',
        intro:
          'Trennen Sie geltendes Recht und verfügbare Verfahren konsequent von den Inhalten der abgelehnten Totalrevision.',
        items: [
          {
            title: 'Bestehendes Energiegesetz',
            value: 'Gilt',
            text: 'Massgebend bleibt das Energiegesetz von 1991 in der seit 2015 geltenden Fassung, nicht die vorgeschlagene Totalrevision.',
            sourceIds: ['so-energy-law', 'so-vote-2025'],
          },
          {
            title: 'Meldeverfahren mit 30-Tage-Frist',
            value: 'Gilt',
            text: 'Eine nach Bundesrecht bewilligungsfreie Solaranlage ist der zuständigen Baubehörde mindestens 30 Tage vor Baubeginn zu melden. Das Meldeverfahren ist die Meldung statt eines normalen Baubewilligungsverfahrens.',
            detail: 'Aus dem Ablauf der Frist folgt keine automatische Bewilligung.',
            sourceIds: ['so-ebauso'],
          },
          {
            title: 'eBauSO',
            value: 'Gilt',
            text: 'Die kantonale Plattform stellt für bewilligungsfreie Anlagen den eigenen Vorgang «Meldung Solaranlage» bereit.',
            sourceIds: ['so-solar-notification'],
          },
          {
            title: 'Bundesförderung über Pronovo',
            value: 'Gilt',
            text: 'Die direkte Förderung normaler PV-Anlagen läuft primär über die Einmalvergütung des Bundes bei Pronovo.',
            sourceIds: ['pronovo-eiv'],
          },
          {
            title: 'Neue Pflicht von 10 W/m²',
            value: 'Gilt nicht',
            text: 'Die allgemeine Vorgabe aus der abgelehnten Totalrevision ist 2026 kein geltendes kantonales Recht.',
            detail: 'Die Abstimmung vom 9. Februar 2025 darf nicht wie ein Inkrafttreten behandelt werden.',
            sourceIds: ['so-vote-2025', 'so-energy-law'],
          },
          {
            title: 'Geplante Förderboni',
            value: 'Gilt nicht',
            text: 'Die mit der Revision geplanten Beiträge für Dach- oder Fassadensanierungen, Winterstrom, Speicher und bidirektionale Infrastruktur sind nicht als aktive allgemeine Förderung auszugeben.',
            sourceIds: ['so-vote-2025', 'so-energy-funding'],
          },
        ],
      },
    },
    {
      id: 'meldung',
      title: 'Bewilligungsfreie Solaranlage richtig melden',
      paragraphs: [
        'Klären Sie zuerst mit der zuständigen Baubehörde, ob Ihre Anlage nach Bundesrecht bewilligungsfrei ist. Trifft dies zu, müssen Sie die Anlage mindestens 30 Tage vor Baubeginn melden.',
        'Reichen Sie einen Baubeschrieb, einen Situationsplan und einen Fassadenplan ein. Über eBauSO steht dafür der Vorgang «Meldung Solaranlage» zur Verfügung. Die Meldung ersetzt bei diesen Anlagen das normale Baubewilligungsverfahren, ist aber weder ein Verzicht auf Unterlagen noch eine automatische Genehmigung nach 30 Tagen.',
      ],
      bullets: [
        'Zuständige Baubehörde der Gemeinde früh kontaktieren',
        'Baubeschrieb vorbereiten',
        'Situationsplan beilegen',
        'Fassadenplan beilegen',
        'Mindestens 30 Tage vor Baubeginn melden',
      ],
      sourceIds: ['so-solar-notification', 'so-ebauso'],
    },
    {
      id: 'foerderung',
      title: 'Photovoltaik-Förderung über Pronovo berechnen',
      paragraphs: [
        'Berechnen Sie die direkte Förderung einer normalen PV-Anlage separat über Pronovo. Die Einmalvergütung (EIV) ist ein einmaliger Förderbeitrag des Bundes; sie ist nicht mit den kantonalen Fördermassnahmen für andere Gebäudearbeiten gleichzusetzen.',
        'Pronovo unterscheidet 2026 die KLEIV für Anlagen unter 100 kW und die GREIV ab 100 kW. Die HEIV betrifft Anlagen ohne Eigenverbrauch nur in den dafür vorgesehenen Kategorien. Der Grundbeitrag der EIV beträgt seit 1. April 2024 CHF 0; entscheidend sind insbesondere Leistung, Anlagetyp und anwendbare Boni.',
        'Lassen Sie den Bundesbeitrag individuell mit dem Pronovo-Tarifrechner berechnen. Ein bestimmter Prozentsatz der Investition ist nicht garantiert und sollte in einer Offerte nicht pauschal zugesichert werden.',
      ],
      sourceIds: ['pronovo-eiv', 'pronovo-tariff-calculator'],
    },
    {
      id: 'kantonale-beitraege',
      title: 'Kantonale Programme richtig einordnen',
      paragraphs: [
        'Rechnen Sie bei einer normalen PV-Anlage nicht mit einem allgemeinen kantonalen Direktbeitrag. Das kantonale Energieprogramm fördert andere Massnahmen wie Wärmedämmung, erneuerbare Heizungen, Minergie und Solarthermie.',
        'Eine PV-Anlage kann zwar Bestandteil eines Minergie-Projekts sein und eine EIV des Bundes erhalten. Die Stromproduktion selbst wird dadurch aber nicht zur kantonalen Minergie-Fördermassnahme. Solarthermie ist ebenfalls eine eigene Technik und darf nicht mit Photovoltaik gleichgesetzt werden.',
        'Behandeln Sie Hinweise auf geplante Beiträge für PV bei Dach- oder Fassadensanierungen, Winterstrom, Batteriespeicher oder bidirektionale Infrastruktur nicht als aktive Programme. Diese Massnahmen waren im Umfeld der abgelehnten Totalrevision geplant.',
      ],
      sourceIds: ['so-energy-funding', 'so-vote-2025', 'pronovo-eiv'],
    },
    {
      id: 'batterie',
      title: 'Batteriespeicher: Steuerabzug statt unbestätigtem Zuschuss prüfen',
      paragraphs: [
        'Planen Sie eine Hausbatterie ohne pauschalen kantonalen Zuschuss: Ein allgemeiner direkter Batteriespeicher-Beitrag ist für 2026 nicht bestätigt.',
        'Bei bestehenden Gebäuden können Ausgaben für einen Speicher zusammen mit einer Anlage für erneuerbare Energie unter bestimmten Bedingungen steuerlich abzugsfähig sein; für Neubauten bestehen insbesondere Einschränkungen. Ein Steuerabzug reduziert das steuerbare Einkommen und ist keine Auszahlung oder direkte Kürzung der bereits geschuldeten Steuer um denselben Betrag. Lassen Sie die Einordnung für Ihr Gebäude und Ihre Steuerlage prüfen.',
      ],
      sourceIds: ['so-tax-book', 'so-energy-funding'],
    },
    {
      id: 'kosten',
      title: 'Kosten und Planung vergleichbar machen',
      paragraphs: [
        'Vergleichen Sie Angebote auf derselben technischen und administrativen Grundlage. Dachgeometrie, Verschattung, Unterkonstruktion, Gerüst, Elektroarbeiten, Netzanschluss und eine optionale Batterie sollten einzeln erkennbar sein.',
        'Weisen Sie die erwartete Pronovo-EIV separat vom Anlagenpreis aus und behandeln Sie mögliche Steuerabzüge nicht wie einen garantierten Förderbeitrag. Klären Sie zudem, wer die Meldung über eBauSO vorbereitet und die verlangten Pläne liefert.',
        'Mit PvPro.ch können Eigentümer kostenlos und unverbindlich bis zu drei passende Solarofferten für dasselbe Projekt vergleichen.',
      ],
      bullets: [
        'Anlagenleistung und Modulbelegung',
        'Montage, Unterkonstruktion und Gerüst',
        'Elektroarbeiten und Netzanschluss',
        'Meldung und Planunterlagen',
        'Pronovo-EIV separat ausgewiesen',
        'Batteriespeicher als klar bezeichnete Option',
      ],
      sourceIds: ['so-solar-notification', 'so-ebauso', 'pronovo-eiv'],
    },
  ],
  faqs: [
    {
      question: 'Gibt es 2026 eine allgemeine PV-Pflicht für Neubauten in Solothurn?',
      answer: 'Nein, nicht aufgrund der 2025 abgelehnten Totalrevision.',
      sourceIds: ['so-vote-2025', 'so-energy-law'],
    },
    {
      question: 'Wie früh muss ich meine Solaranlage melden?',
      answer: 'Mindestens 30 Tage vor Baubeginn.',
      sourceIds: ['so-ebauso'],
    },
    {
      question: 'Wo erfolgt die Meldung?',
      answer:
        'Bei der zuständigen Baubehörde; eBauSO unterstützt eine eigene Meldung Solaranlage.',
      sourceIds: ['so-solar-notification'],
    },
    {
      question: 'Gibt es kantonale PV-Fördergelder?',
      answer:
        'Für normale PV-Anlagen ist die Bundesförderung über Pronovo zentral; kantonale Gebäudeförderprogramme betreffen andere Massnahmen.',
      sourceIds: ['so-energy-funding', 'pronovo-eiv'],
    },
    {
      question: 'Wird eine Hausbatterie gefördert?',
      answer:
        'Ein allgemeiner kantonaler Direktbeitrag konnte für 2026 nicht bestätigt werden; steuerliche Abzüge können bei bestehenden Gebäuden relevant sein.',
      sourceIds: ['so-tax-book', 'so-energy-funding'],
    },
  ],
  sources: [...sources],
};