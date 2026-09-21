import type { CantonGuide } from './types';

const sources = [
  { id: 'vs-energiegesetz', authority: 'Kanton Wallis', title: 'Energiegesetz vom 8. September 2023', url: 'https://lex.vs.ch/app/de/texts_of_law/730.1' },
  { id: 'vs-energieverordnung', authority: 'Kanton Wallis', title: 'Energieverordnung', url: 'https://lex.vs.ch/app/de/texts_of_law/730.100' },
  { id: 'vs-solar', authority: 'Kanton Wallis, Dienststelle für Energie und Wasserkraft', title: 'Solarenergie: Pflichten, Verfahren und Förderung', url: 'https://www.vs.ch/de/web/energie/solarenergie' },
  { id: 'vs-bauverfahren', authority: 'Kanton Wallis', title: 'Bewilligungsfreie Solaranlagen und Meldeverfahren', url: 'https://www.vs.ch/web/energie/mettre-en-place-une-installation-solaire' },
  { id: 'vs-steuern-pv', authority: 'Kanton Wallis', title: 'Steuerliche Behandlung von Photovoltaikanlagen', url: 'https://www.vs.ch/web/energie/programmes-de-promotion/aides-financieres' },
  { id: 'pronovo-pv', authority: 'Pronovo AG im Auftrag des Bundes', title: 'Einmalvergütung für Photovoltaikanlagen', url: 'https://pronovo.ch/de/foerderung/photovoltaik' },
] as const;

export const guide: CantonGuide = {
  id: 'wallis',
  path: '/solaranlage-wallis',
  canton: 'Wallis',
  title: 'Solaranlage in Wallis | PvPro.ch',
  description: 'Vergleichen Sie bis zu drei kostenlose Offerten geprüfter Solarteure für Ihre Solaranlage in Wallis.',
  h1: 'Solaranlage im Wallis: PV-Pflicht bei Neubau und Dachsanierung 2026',
  intro: [
    'Die Walliser Energiegesetzgebung gilt seit 1. Januar 2025. Sie verlangt nicht nur bei Neubauten und bestimmten Erweiterungen Eigenstrom: Auch das Entfernen einer Dachdeckung kann bei einem bestehenden Gebäude eine Solarpflicht auslösen.',
    'Für grosse Dächer über 500 m² besteht zusätzlich eine langfristige Ausrüstungspflicht. Projektart, Energiebezugsfläche, bearbeitete Dachfläche und allfällige Ausnahmen müssen deshalb getrennt geprüft werden.',
  ],
  quickFacts: [
    { value: '20 W/m² EBF', label: 'Mindestleistung bei erfassten Neubauten, Erweiterungen und Dachsanierungen', sourceIds: ['vs-energiegesetz', 'vs-energieverordnung'] },
    { value: 'max. 30 kW', label: 'Obergrenze der verlangten Leistung in diesen Fällen', sourceIds: ['vs-energiegesetz', 'vs-energieverordnung'] },
    { value: '>500 m²', label: 'Dachfläche für die langfristige Ausrüstungspflicht', sourceIds: ['vs-energiegesetz'] },
    { value: '30 Tage', label: 'Voranmeldung bei bewilligungsfreien Projekten', sourceIds: ['vs-bauverfahren'] },
  ],
  ctaAfterSection: 'dachsanierung',
  sections: [
    {
      id: 'dachsanierung',
      title: 'Dachsanierungs-Check Wallis',
      paragraphs: [
        'Wird die Dachdeckung entfernt, muss ein bestehendes Gebäude grundsätzlich einen Teil seiner verbrauchten Elektrizität oder Wärme selbst erzeugen. Für PV konkretisiert die Verordnung dies mit mindestens 20 W/m² Energiebezugsfläche, höchstens 30 kW.',
        'Die verlangte Anlagenfläche darf höchstens 80% jener Dachflächen beanspruchen, deren Deckung entfernt wird. Kleine Reparaturen ohne Entfernung der Dachdeckung sind deshalb anders einzuordnen als eine eigentliche Neueindeckung.',
      ],
      sourceIds: ['vs-energiegesetz', 'vs-energieverordnung'],
      module: {
        kind: 'valais-roof-check',
        title: 'Wird Ihr Dach geöffnet?',
        intro: 'Gehen Sie die Schritte in dieser Reihenfolge durch.',
        items: [
          { title: '1. Umfang bestimmen', value: 'Dachdeckung entfernt?', text: 'Bei einer blossen Kleinreparatur den konkreten Umfang separat klären; bei entfernter Dachdeckung die Pflicht prüfen.', sourceIds: ['vs-energiegesetz'] },
          { title: '2. Ausnahme prüfen', value: 'Vier Ausnahmen', text: 'Möglich sind Gesamtklasse GEAK C nach der Sanierung, gleichzeitige energetische Sanierung aller Fassaden, nur die Nordseite oder ausschliessliche Sommernutzung.', sourceIds: ['vs-energiegesetz'] },
          { title: '3. Leistung berechnen', value: '20 W/m² EBF', text: 'Ohne Ausnahme sind mindestens 20 W pro m² Energiebezugsfläche anzusetzen, jedoch höchstens 30 kW.', sourceIds: ['vs-energieverordnung'] },
          { title: '4. Dachfläche begrenzen', value: 'max. 80%', text: 'Die erforderliche PV-Fläche muss nicht mehr als 80% der neu eingedeckten Dachfläche beanspruchen.', sourceIds: ['vs-energieverordnung'] },
        ],
      },
    },
    {
      id: 'neubau',
      title: 'Neubauten und Erweiterungen: 20 W/m², höchstens 30 kW',
      paragraphs: [
        'Neubauten und erfasste Erweiterungen müssen mindestens 20 W erneuerbare Eigenstromleistung pro m² Energiebezugsfläche, kurz EBF oder SRE, erreichen. Aus dieser Pflicht werden nie mehr als 30 kW verlangt.',
        'Eine Erweiterung ist ausgenommen, wenn die neue EBF weniger als 50 m² beträgt. Ebenfalls ausgenommen ist sie, wenn sie weniger als 20% der bestehenden EBF ausmacht und zugleich höchstens 1’000 m² umfasst. Für bereits mit PV ausgestattete Minergie-Gebäude besteht eine spezifische gesetzliche Ausnahme.',
        'Unter den gesetzlichen Bedingungen kann die entsprechende Produktion auch über eine finanzielle Beteiligung an einer erneuerbaren Anlage im Wallis oder einem Nachbarkanton beziehungsweise über einen Zusammenschluss zum Eigenverbrauch erfüllt werden.',
      ],
      sourceIds: ['vs-energiegesetz', 'vs-energieverordnung'],
    },
    {
      id: 'grossdaecher',
      title: 'Dächer über 500 m²: eigene 25-Jahres-Regel',
      paragraphs: [
        'Gebäude mit mehr als 500 m² Dachfläche müssen innert 25 Jahren seit Inkrafttreten des Gesetzes zur Elektrizitätsproduktion ausgerüstet werden. Erfasst werden Flächen mit einer mittleren jährlichen Einstrahlung von mehr als 1’200 kWh/m².',
        'Die geforderte Leistung ist durch die bestehende elektrische Anschlussleistung begrenzt. Erfüllt wird die Vorgabe entweder mit PV auf mindestens 40% der Dachfläche oder mit mindestens 20 W/m² Energiebezugsfläche.',
      ],
      sourceIds: ['vs-energiegesetz', 'vs-energieverordnung'],
      module: {
        kind: 'valais-large-roofs',
        title: 'Prüfpfad für ein Grossdach',
        intro: 'Diese Pflicht ist von der Dachsanierungsregel zu unterscheiden.',
        items: [
          { title: '1. Dachfläche', value: '>500 m²', text: 'Nur Dächer oberhalb dieser Schwelle fallen in diese langfristige Regel.', sourceIds: ['vs-energiegesetz'] },
          { title: '2. Solarpotenzial', value: '>1’200 kWh/m²/Jahr', text: 'Relevant sind Dachflächen oberhalb der festgelegten mittleren Jahreseinstrahlung.', sourceIds: ['vs-energiegesetz'] },
          { title: '3. Frist', value: '25 Jahre', text: 'Die Ausrüstung muss innert 25 Jahren seit dem Inkrafttreten am 1. Januar 2025 erfolgen.', sourceIds: ['vs-energiegesetz'] },
          { title: '4. Erfüllung', value: '40% Dach oder 20 W/m² EBF', text: 'Eine der beiden Varianten erfüllt die Flächen-/Leistungsvorgabe; die Anschlussleistung bleibt Obergrenze.', sourceIds: ['vs-energieverordnung'] },
        ],
      },
    },
    {
      id: 'verfahren',
      title: 'Meldung und Förderung separat bearbeiten',
      paragraphs: [
        'Ist eine Solaranlage vom normalen Baubewilligungsverfahren befreit, muss sie der zuständigen Behörde 30 Tage vor Arbeitsbeginn gemeldet werden. Anlagen auf Kulturdenkmälern oder Naturstätten von kantonaler oder nationaler Bedeutung bleiben bewilligungspflichtig.',
        'Für gewöhnliche Photovoltaik verweist der Kanton auf Pronovo. Das Walliser Gebäudeprogramm fördert andere Sanierungs- und Heizungsmassnahmen und ist kein pauschaler kantonaler PV-Beitrag. Kommunale Hilfen sind separat zu prüfen; ein allgemeiner kantonaler Bonus für normale Heimbatterien ist nicht bestätigt.',
        'Bei bestehenden Gebäuden können die anrechenbaren Investitionskosten nach den kantonalen Steuerrichtlinien vom steuerbaren Einkommen abgezogen werden. Für Erträge bis 10’000 kWh sieht der Kanton eine besondere steuerliche Behandlung vor. Prüfen Sie dafür die aktuelle Richtlinie über den offiziellen Solarenergie-Link; daraus lässt sich keine garantierte Steuerersparnis ableiten.',
      ],
      sourceIds: ['vs-bauverfahren', 'vs-solar', 'vs-steuern-pv', 'pronovo-pv'],
    },
  ],
  faqs: [
    { question: 'Löst jede kleine Dachreparatur im Wallis eine Solarpflicht aus?', answer: 'Nein. Entscheidend ist insbesondere, ob die Dachdeckung entfernt wird.', sourceIds: ['vs-energiegesetz'] },
    { question: 'Wie hoch ist die Vorgabe bei einer erfassten Dachsanierung?', answer: 'Mindestens 20 W/m² EBF, höchstens 30 kW; die PV-Fläche ist auf 80% der neu eingedeckten Fläche begrenzt.', sourceIds: ['vs-energieverordnung'] },
    { question: 'Welche Ausnahme kann nach einer Dachsanierung greifen?', answer: 'Unter anderem eine globale GEAK-Klasse C, die gleichzeitige energetische Sanierung aller Fassaden, nur die Nordseite oder ausschliessliche Sommernutzung.', sourceIds: ['vs-energiegesetz'] },
    { question: 'Was gilt für Dächer über 500 m²?', answer: 'Bei ausreichender Einstrahlung gilt eine 25-Jahres-Regel; nötig sind 40% Dachbelegung oder 20 W/m² EBF.', sourceIds: ['vs-energiegesetz', 'vs-energieverordnung'] },
    { question: 'Wo wird eine normale Walliser PV-Anlage gefördert?', answer: 'Die reguläre PV-Förderung wird über Pronovo beantragt; allfällige kommunale Beiträge sind separat zu prüfen.', sourceIds: ['vs-solar', 'pronovo-pv'] },
  ],
  sources: [...sources],
};