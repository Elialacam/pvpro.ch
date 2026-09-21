import type { CantonGuide } from './types';

const sources = [
  {
    id: 'ur-neues-energierecht',
    authority: 'Kanton Uri',
    title: 'Neue Energiegesetzgebung ab 1. Oktober 2026',
    url: 'https://www.ur.ch/energie/1534',
  },
  {
    id: 'ur-rechtsbuch',
    authority: 'Kanton Uri',
    title: 'Urner Rechtsbuch: Energiegesetzgebung',
    url: 'https://www.ur.ch/_doc/449221',
  },
  {
    id: 'ur-solarmeldung',
    authority: 'Kanton Uri',
    title: 'Meldung einer Solaranlage',
    url: 'https://www.ur.ch/dienstleistungen/4641',
  },
  {
    id: 'ur-foerderprogramm-2026',
    authority: 'Kanton Uri',
    title: 'Förderprogramm Energie Uri 2026',
    url: 'https://www.ur.ch/mmdirektionen/132233',
  },
  {
    id: 'pronovo-pv',
    authority: 'Pronovo AG im Auftrag des Bundes',
    title: 'Einmalvergütung für Photovoltaikanlagen',
    url: 'https://pronovo.ch/de/foerderung/photovoltaik',
  },
] as const;

export const guide: CantonGuide = {
  id: 'uri',
  path: '/solaranlage-uri',
  canton: 'Uri',
  title: 'Solaranlage in Uri | PvPro.ch',
  description: 'Vergleichen Sie bis zu drei kostenlose Offerten geprüfter Solarteure für Ihre Solaranlage in Uri.',
  h1: 'Solaranlage im Kanton Uri: Neue Solarregeln ab 1. Oktober 2026',
  intro: [
    'Uri befindet sich 2026 in einem Rechtswechsel. Die befristete kantonale Übergangsregel endete am 31. Dezember 2025; ab 1. Oktober 2026 gelten neue Urner Vorgaben für grosse Neubauten, Erweiterungen und eingreifende Dachsanierungen.',
    'Für ein konkretes Projekt sind deshalb Projektart, anrechenbare Gebäudefläche und massgebender Zeitpunkt gemeinsam zu prüfen. Die früheren CHF 2’500 pro fehlendem kW sind keine bestätigte Ersatzabgabe des neuen Rechts.',
  ],
  quickFacts: [
    { value: '01.10.2026', label: 'Inkrafttreten des neuen Urner Energierechts', sourceIds: ['ur-neues-energierecht'] },
    { value: '40 W/m²', label: 'Solarleistung für Neubauten ab 300 m²', sourceIds: ['ur-rechtsbuch'] },
    { value: '20 W/m²', label: 'Vorgabe für erfasste Erweiterungen und Dachsanierungen', sourceIds: ['ur-rechtsbuch'] },
    { value: 'CHF 1’000 + 250/kWp', label: 'Beitrag für förderfähige Winterstrom-PV', sourceIds: ['ur-foerderprogramm-2026'] },
  ],
  ctaAfterSection: 'rechtswechsel',
  sections: [
    {
      id: 'rechtswechsel',
      title: 'Was gilt wann im Jahr 2026?',
      paragraphs: [
        'Die bis Ende 2025 befristete kantonale Übergangsregel mit 20 W/m² und CHF 2’500 Ersatzabgabe pro fehlendem kW darf nicht auf 2026 fortgeschrieben werden. Im Jahr 2026 ist bis zum Inkrafttreten des neuen Urner Rechts auch der seit 1. Januar 2025 geltende bundesrechtliche Rahmen für Neubauten mit mehr als 300 m² zu beachten.',
        'Ab 1. Oktober 2026 verlangt das neue kantonale Recht je nach Vorhaben 40 oder 20 W/m² anrechenbare Gebäudefläche. Bereits vorhandene Anlagen zählen mit, soweit ihre Leistung nicht schon zur Erfüllung einer anderen gesetzlichen Pflicht verwendet wird.',
      ],
      sourceIds: ['ur-neues-energierecht', 'ur-rechtsbuch'],
      module: {
        kind: 'uri-transition',
        title: 'Zeitachse und Projektentscheid',
        intro: 'Lesen Sie zuerst die drei Zeitstufen und ordnen Sie danach Ihr Bauvorhaben ein.',
        items: [
          { title: 'Bis 31. Dezember 2025', value: 'Alte Regel beendet', text: 'Die befristete Übergangsregel einschliesslich der damaligen Ersatzabgabe ist ausgelaufen.', sourceIds: ['ur-rechtsbuch'] },
          { title: '1. Januar bis 30. September 2026', value: 'Bundesrecht beachten', text: 'Für neue Gebäude über 300 m² ist der bundesrechtliche Solarrahmen zu prüfen; die neue Urner Regel gilt noch nicht.', sourceIds: ['ur-neues-energierecht'] },
          { title: 'Ab 1. Oktober 2026', value: 'Neues Urner Recht', text: 'Die vom Urner Stimmvolk am 8. März 2026 angenommene Energiegesetzgebung tritt in Kraft.', sourceIds: ['ur-neues-energierecht'] },
          { title: 'Neubau', value: '≥300 m²: 40 W/m²', text: 'Bei mindestens 300 m² anrechenbarer Gebäudefläche sind 40 W Solarleistung pro m² vorgesehen.', sourceIds: ['ur-rechtsbuch'] },
          { title: 'Erweiterung', value: '>300 m²: 20 W/m²', text: 'Überschreitet die gesamte anrechenbare Gebäudefläche nach der Erweiterung 300 m², gelten 20 W/m² für die gesamte Fläche.', sourceIds: ['ur-rechtsbuch'] },
          { title: 'Eingreifende Dachsanierung', value: '≥300 m²: 20 W/m²', text: 'Wird das Dach von aussen saniert und werden dadurch Wärmeschutzvorschriften ausgelöst, gelten bei Gebäuden ab 300 m² insgesamt 20 W/m².', sourceIds: ['ur-rechtsbuch'] },
        ],
      },
      notice: {
        title: 'Keine neue Ersatzabgabe unterstellen',
        text: 'Die frühere Abgabe von CHF 2’500/kW gehörte zur Ende 2025 ausgelaufenen Regel. Für die neue Pflicht ab 1. Oktober 2026 ist keine gleichartige Abgabe bestätigt.',
        status: 'important',
      },
    },
    {
      id: 'erfuellung',
      title: 'Leistungsgrenze und alternative Erfüllung',
      paragraphs: [
        'Die verlangte Solarleistung wird durch die bestehende elektrische Anschlussleistung des Gebäudes begrenzt. Lassen Sie Anschlussleistung, anrechenbare Gebäudefläche und bereits vorhandene, noch nicht anderweitig angerechnete Solarleistung im Energienachweis dokumentieren.',
        'Die Pflicht kann mit einer Minergie-Zertifizierung erfüllt werden. Unter den vorgesehenen Bedingungen ist auch eine zusätzliche Verbesserung der Gebäudehülle möglich: Der Grenzwert des Heizwärmebedarfs QH,li muss gegenüber der normalen Anforderung um 5 kWh pro m² und Jahr verbessert werden.',
      ],
      sourceIds: ['ur-rechtsbuch'],
    },
    {
      id: 'foerderung',
      title: 'Winterstrom-PV und integrierte Solarfassade',
      paragraphs: [
        'Das Urner Programm 2026 unterstützt Winterstrom-PV auf bestehenden Gebäuden ab 2 kWp bei einer Modulneigung von 60 bis 90 Grad. Vorgesehen sind CHF 1’000 Grundbeitrag plus CHF 250 pro kWp, höchstens CHF 50’000 pro Anlage. Neubauten und der blosse Ersatz einer bestehenden Anlage sind ausgeschlossen.',
        'Für diese Winterstrom-Massnahme stehen CHF 100’000 zur Verfügung. Das gesamte Energieprogramm umfasst rund CHF 2,1 Millionen für verschiedene Massnahmen, nicht allein für Photovoltaik. Nach vollständiger Gesuchseinreichung kann vor dem definitiven Entscheid allenfalls auf eigenes Risiko begonnen werden.',
        'Bei einer Gebäudehüllensanierung mit integrierter PV-Fassade und 60 bis 90 Grad Neigung sind CHF 400/m² sanierte Fläche vorgesehen. Der Winterstrom-Beitrag und dieser Fassadenbeitrag sind nicht miteinander kumulierbar. Das vollständige Gesuch muss vor Installationsbeginn vorliegen; ab CHF 10’000 Beitrag ist beim Gebäudehüllenprogramm ein GEAK Plus erforderlich.',
        'Beim Eingriff an der Gebäudehülle muss der Förderbeitrag mindestens CHF 3’000 erreichen. GEAK Plus bezeichnet den Gebäudeenergieausweis mit Beratungsbericht.',
        'Die Förderung bidirektionaler Ladestationen ist kein allgemeiner Bonus für stationäre Heimbatterien. Eine reguläre PV-Anlage kann separat für die Bundesförderung von Pronovo geprüft werden.',
      ],
      sourceIds: ['ur-foerderprogramm-2026', 'pronovo-pv'],
    },
    {
      id: 'verfahren',
      title: 'Solaranlage vor Baubeginn bei der Gemeinde einordnen',
      paragraphs: [
        'Reichen Sie das kantonale Formular «Meldung einer Solaranlage» bei der zuständigen Gemeindebaubehörde ein. Anhand von Anlagenart und Standort wird geklärt, ob die Meldung genügt oder ein Baugesuch nötig ist.',
        'Für dieses Urner Formular ist keine einheitliche kantonale Frist von 20 oder 30 Tagen belastbar bestätigt. Stimmen Sie den Eingabe- und Baustarttermin deshalb direkt mit der Gemeinde ab und beginnen Sie nicht aufgrund einer aus einem anderen Kanton übernommenen Frist.',
      ],
      sourceIds: ['ur-solarmeldung'],
    },
  ],
  faqs: [
    { question: 'Gelten in Uri 2026 noch CHF 2’500 Ersatzabgabe pro fehlendem kW?', answer: 'Nein. Diese Abgabe gehörte zur befristeten Regel, die am 31. Dezember 2025 endete.', sourceIds: ['ur-rechtsbuch'] },
    { question: 'Welche Vorgabe gilt ab 1. Oktober 2026 für einen grossen Neubau?', answer: 'Ab 300 m² anrechenbarer Gebäudefläche sind 40 W/m² vorgesehen.', sourceIds: ['ur-rechtsbuch'] },
    { question: 'Kann eine bestehende PV-Anlage angerechnet werden?', answer: 'Ja, sofern ihre Leistung nicht bereits eine andere gesetzliche Pflicht erfüllt.', sourceIds: ['ur-rechtsbuch'] },
    { question: 'Wie wird Winterstrom-PV 2026 gefördert?', answer: 'Auf bestehenden Gebäuden bei mindestens 2 kWp und 60 bis 90 Grad Neigung mit CHF 1’000 plus CHF 250/kWp, maximal CHF 50’000.', sourceIds: ['ur-foerderprogramm-2026'] },
    { question: 'Gilt für die Urner Solarmeldung eine feste 20- oder 30-Tage-Frist?', answer: 'Eine solche einheitliche kantonale Frist ist nicht bestätigt; der Termin ist mit der Gemeindebaubehörde zu klären.', sourceIds: ['ur-solarmeldung'] },
  ],
  sources: [...sources],
};