import type { CantonGuide } from './types';

const sources = [
  { id: 'zg-energieverordnung', authority: 'Kanton Zug', title: 'Verordnung zum Energiegesetz: Eigenstromerzeugung', url: 'https://bgs.zg.ch/app/de/texts_of_law/740.11' },
  { id: 'zg-vollzug', authority: 'Kanton Zug', title: 'Eigenstromerzeugung bei Neubauten und Erweiterungen', url: 'https://zg.ch/de/planen-bauen/bauvorschriften/gebaeude-und-energie/energievorschriften-vollzug' },
  { id: 'zg-pbg', authority: 'Kanton Zug', title: 'Planungs- und Baugesetz § 44a: Bauanzeige für Solaranlagen', url: 'https://bgs.zg.ch/app/de/texts_of_law/721.11' },
  { id: 'zg-foerderprogramm-2026', authority: 'Kanton Zug', title: 'Förderprogramm Energie 2026', url: 'https://cdn.zg.ch/dam/jcr:de631126-335b-431a-9153-7013803a29bc/20260428_F%C3%B6rderprogramm%20Energie%202026_KtZG_F%C3%B6rderbedingungen_1.2.pdf' },
  { id: 'pronovo-pv', authority: 'Pronovo AG im Auftrag des Bundes', title: 'Einmalvergütung für Photovoltaikanlagen', url: 'https://pronovo.ch/de/foerderung/photovoltaik' },
] as const;

export const guide: CantonGuide = {
  id: 'zug',
  path: '/solaranlage-zug',
  canton: 'Zug',
  title: 'Solaranlage in Zug | PvPro.ch',
  description: 'Vergleichen Sie bis zu drei kostenlose Offerten geprüfter Solarteure für Ihre Solaranlage in Zug.',
  h1: 'Solaranlage im Kanton Zug: Eigenstrompflicht, Ersatzabgabe und Förderung 2026',
  intro: [
    'Bei Neubauten sowie nicht geringfügigen Erweiterungen und Aufstockungen verlangt Zug 10 W Eigenstromleistung pro m² Energiebezugsfläche. Formel: Energiebezugsfläche × 10 W/m² = erforderliche Leistung; 30 kW oder mehr werden aus dieser Pflicht nie verlangt.',
    'Wer die erforderliche Anlage nicht erstellen kann oder will, bezahlt der Gemeinde CHF 1’000 je fehlendem kW. Alternativ kann die Pflicht unter den gesetzlichen Bedingungen kollektiv über einen Zusammenschluss zum Eigenverbrauch erfüllt werden.',
  ],
  quickFacts: [
    { value: '10 W/m² EBF', label: 'Eigenstromvorgabe für erfasste Bauvorhaben', sourceIds: ['zg-energieverordnung'] },
    { value: '<30 kW', label: 'die Pflicht verlangt nie 30 kW oder mehr', sourceIds: ['zg-energieverordnung'] },
    { value: 'CHF 1’000/kW', label: 'Ersatzabgabe für nicht installierte Pflichtleistung', sourceIds: ['zg-energieverordnung'] },
    { value: '20 Tage', label: 'Frist ohne Einwand nach Eingang der Bauanzeige', sourceIds: ['zg-pbg'] },
  ],
  ctaAfterSection: 'eigenstrom',
  sections: [
    {
      id: 'eigenstrom',
      title: 'PV installieren oder Ersatzabgabe bezahlen',
      paragraphs: [
        'Die Regelung zur Eigenstromerzeugung und Ersatzabgabe gilt auf Verordnungsebene seit dem 1. Januar 2023.',
        'Berechnen Sie zuerst die Pflichtleistung mit der Energiebezugsfläche des Projekts. Erweiterungen und Aufstockungen oberhalb der Bagatellgrenze werden für diese Bestimmung wie Neubauten behandelt.',
        'Die Ersatzabgabe geht an die Gemeinde und ist zweckgebunden für die lokale Produktion erneuerbarer Elektrizität. Sie ist keine Förderung für die eigene Anlage und ersetzt nur den nicht realisierten Teil der Pflicht.',
      ],
      sourceIds: ['zg-energieverordnung', 'zg-vollzug'],
      module: {
        kind: 'zug-power-choice',
        title: 'Zwei Wege nach der Leistungsberechnung',
        intro: 'EBF × 10 W/m² ergibt die erforderliche Eigenstromleistung, stets unter 30 kW.',
        items: [
          { title: 'Eigenstromanlage realisieren', value: '10 W/m² EBF', text: 'Die Leistung auf dem Gebäude oder kollektiv im zulässigen ZEV bereitstellen.', detail: 'Vorhandene Projekt- und ZEV-Nachweise mit der Gemeinde abstimmen.', sourceIds: ['zg-energieverordnung', 'zg-vollzug'] },
          { title: 'Fehlende Leistung abgelten', value: 'CHF 1’000/kW', text: 'Für jedes erforderliche, aber nicht installierte kW wird die Ersatzabgabe an die Gemeinde fällig.', detail: 'Die Mittel sind für lokale erneuerbare Stromproduktion gebunden.', sourceIds: ['zg-energieverordnung'] },
        ],
      },
    },
    {
      id: 'bonus',
      title: 'Dach oder Fassade dämmen und PV ergänzen',
      paragraphs: [
        'Das Zuger Förderprogramm 2026 zahlt für die förderfähige Dämmung von Dach oder Fassade CHF 60/m². Wird auf demselben Bauteil gleichzeitig eine neue, programmgemäss vollflächige PV-Anlage erstellt, kommen weitere CHF 60/m² gedämmte Fläche hinzu.',
        'Dieser Zusatz ist kein allgemeiner Beitrag von CHF 60/m² für jede neue PV-Anlage. Gewöhnliche alleinstehende PV wird über Pronovo geprüft; ein allgemeiner kantonaler Förderbeitrag für normale Heimbatterien ist im Programm nicht bestätigt.',
      ],
      sourceIds: ['zg-foerderprogramm-2026', 'pronovo-pv'],
      module: {
        kind: 'zug-renovation-bonus',
        title: 'Wann gilt PV als vollflächig?',
        intro: 'Die Schwelle bezieht sich auf das gleichzeitig gedämmte Bauteil.',
        items: [
          { title: 'Fassade', value: 'mind. 20%', text: 'Mindestens 20% der gedämmten Fassadenfläche müssen mit neuen PV-Modulen belegt sein.', sourceIds: ['zg-foerderprogramm-2026'] },
          { title: 'Dach', value: 'mind. 50%', text: 'Mindestens 50% der gedämmten Dachfläche müssen mit neuen PV-Modulen belegt sein.', sourceIds: ['zg-foerderprogramm-2026'] },
        ],
      },
    },
    {
      id: 'verfahren',
      title: 'Bauanzeige: 20 Tage auf Einwände warten',
      paragraphs: [
        'Solaranlagen, die Nachbarinteressen und öffentliche Interessen nicht erheblich beeinträchtigen, sind der zuständigen Gemeindebehörde mit einer Bauanzeige zu melden. Erhebt die Behörde innert 20 Tagen nach Eingang keinen Einwand, darf das Vorhaben realisiert werden.',
        'Ausserhalb der Bauzone leitet die Gemeinde die Unterlagen an die Baudirektion weiter. Auf Kultur- und Naturdenkmälern von kantonaler oder nationaler Bedeutung ist stets eine Baubewilligung erforderlich.',
      ],
      sourceIds: ['zg-pbg'],
    },
    {
      id: 'planung',
      title: 'Pflicht, Förderung und Offerte sauber trennen',
      paragraphs: [
        'Lassen Sie Energiebezugsfläche, Pflichtleistung, tatsächlich installierte Leistung und eine allfällige Ersatzabgabe einzeln ausweisen. Bei einem ZEV muss zusätzlich nachvollziehbar sein, wie die gemeinsame Erfüllung erfolgt.',
        'Bei einer Sanierung gehören gedämmte Bauteilfläche, PV-Belegungsanteil, Gebäudehüllenbeitrag und PV-Förderung in getrennte Positionen. So wird der Kombinationsbonus nicht irrtümlich als pauschaler PV-Beitrag verrechnet.',
      ],
      sourceIds: ['zg-energieverordnung', 'zg-foerderprogramm-2026', 'pronovo-pv'],
    },
  ],
  faqs: [
    { question: 'Wie berechnet sich die Zuger Eigenstrompflicht?', answer: 'Energiebezugsfläche × 10 W/m²; aus der Vorschrift werden nie 30 kW oder mehr verlangt.', sourceIds: ['zg-energieverordnung'] },
    { question: 'Wie hoch ist die Ersatzabgabe?', answer: 'CHF 1’000 je erforderlichem, aber nicht installiertem kW.', sourceIds: ['zg-energieverordnung'] },
    { question: 'Kann die Pflicht gemeinsam über einen ZEV erfüllt werden?', answer: 'Ja, eine kollektive Erfüllung über einen ZEV ist unter den gesetzlichen Bedingungen möglich.', sourceIds: ['zg-vollzug'] },
    { question: 'Wann darf nach einer Bauanzeige gebaut werden?', answer: 'Wenn die Gemeinde innert 20 Tagen ab Eingang keinen Einwand erhebt.', sourceIds: ['zg-pbg'] },
    { question: 'Erhält jede Zuger PV-Anlage CHF 60/m² Zusatzbeitrag?', answer: 'Nein. Der Zusatz gilt nur zusammen mit einer geförderten Dämmung und bei der definierten vollflächigen PV-Belegung.', sourceIds: ['zg-foerderprogramm-2026'] },
  ],
  sources: [...sources],
};