import type { CantonGuide } from './types';

const sources = [
  { id: 'vd-energie-2026', authority: 'Kanton Waadt', title: 'Energiegesetzgebung bis 31. Dezember 2026', url: 'https://www.vd.ch/environnement/energie/legislation-2' },
  { id: 'vd-neues-gesetz', authority: 'Kanton Waadt', title: 'Neue Energiegesetzgebung ab 1. Januar 2027', url: 'https://www.vd.ch/djes/nouvelle-loi-sur-lenergie' },
  { id: 'vd-solarverfahren', authority: 'Kanton Waadt', title: 'Solaranlagen: Verfahren und kantonales Meldeformular', url: 'https://www.vd.ch/environnement/energie/formulaires-energie/procedures-et-autorisations-pour-les-dossiers-energie' },
  { id: 'vd-programme-2026', authority: 'Kanton Waadt', title: 'Programme Bâtiments 2026', url: 'https://www.vd.ch/fileadmin/user_upload/themes/environnement/energie/fichiers_pdf/conditions.PB2026.v.1.1.pdf' },
  { id: 'vd-patrimoine', authority: 'Kanton Waadt', title: 'Solaire photovoltaïque & Patrimoine', url: 'https://www.vd.ch/prestation/s04-demander-une-subvention-solaire-photovoltaique-patrimoine' },
  { id: 'vd-crowdfunding', authority: 'Kanton Waadt', title: 'Photovoltaikanlagen mit partizipativer Finanzierung', url: 'https://www.vd.ch/prestation/26-demander-une-subvention-pour-une-installation-photovoltaique-a-financement-participatif' },
  { id: 'pronovo-pv', authority: 'Pronovo AG im Auftrag des Bundes', title: 'Einmalvergütung für Photovoltaikanlagen', url: 'https://pronovo.ch/de/foerderung/photovoltaik' },
] as const;

export const guide: CantonGuide = {
  id: 'waadt',
  path: '/solaranlage-waadt',
  canton: 'Waadt',
  title: 'Solaranlage: Waadt | PvPro.ch',
  description: 'Vergleichen Sie Solarofferten für Ihr Projekt: Waadt.',
  h1: 'Solaranlage im Kanton Waadt: Was 2026 gilt – und was sich 2027 ändert',
  intro: [
    'Bis Ende 2026 gilt im Kanton Waadt noch das bisherige Energierecht: Neubauten müssen mindestens 20% ihres Elektrizitätsbedarfs mit erneuerbarer Energie decken. Photovoltaik ist dafür eine mögliche Lösung.',
    'Am 1. Januar 2027 tritt eine neue Energiegesetzgebung in Kraft. Sie erweitert die Solarnutzung insbesondere bei Neubauten und wichtigen Dachsanierungen; noch nicht bestätigte technische Ausführungsgrenzen dürfen aber nicht vorweggenommen werden.',
  ],
  quickFacts: [
    { value: '20%', label: 'erneuerbarer Anteil am Elektrizitätsbedarf neuer Gebäude bis Ende 2026', sourceIds: ['vd-energie-2026'] },
    { value: '01.01.2027', label: 'Inkrafttreten der neuen Energiegesetzgebung', sourceIds: ['vd-neues-gesetz'] },
    { value: '30 Tage', label: 'Zeit der Gemeinde zur Einordnung der Solarmeldung', sourceIds: ['vd-solarverfahren'] },
    { value: 'CHF 100/m²', label: 'M-01 bei U ≤0,15 und Kombination mit PV', sourceIds: ['vd-programme-2026'] },
  ],
  ctaAfterSection: 'wechsel',
  sections: [
    {
      id: 'wechsel',
      title: '2026 und das Recht ab 1. Januar 2027 klar trennen',
      paragraphs: [
        'Für ein 2026 eingereichtes Projekt bleibt die geltende 20%-Regel Ausgangspunkt. Zertifikate für grünen Strom erfüllen sie nicht; bei ungünstigem Standort oder ungenügender Dachfläche sind die vorgesehenen Ausnahmen konkret nachzuweisen.',
        'Der Grosse Rat verabschiedete das neue Gesetz am 3. Februar 2026 definitiv. Es gilt ab 1. Januar 2027 zusammen mit dem Ausführungsrecht und verstärkt die Solarnutzung bei Neubauten sowie wichtigen Dachsanierungen. Künftige W/m²-Werte oder weitere technische Schwellen sind ohne das anwendbare Ausführungsrecht nicht einzusetzen.',
      ],
      sourceIds: ['vd-energie-2026', 'vd-neues-gesetz'],
      module: {
        kind: 'vaud-transition',
        title: 'Heute geltend / ab 1. Januar 2027',
        intro: 'Massgebend ist, welches Recht zum Projektzeitpunkt anwendbar ist.',
        columns: ['Bis 31. Dezember 2026', 'Ab 1. Januar 2027'],
        items: [
          { title: 'Heute geltendes Recht', value: '20% Elektrizitätsbedarf', text: 'Neubauten decken mindestens 20% ihres Elektrizitätsbedarfs erneuerbar; PV ist eine mögliche Lösung. Grünstromzertifikate genügen nicht.', detail: 'Ausnahmen sind bei ungünstigem Standort oder ungenügender Dachfläche möglich.', sourceIds: ['vd-energie-2026'] },
          { title: 'Künftiges Recht', value: 'Mehr Solarnutzung', text: 'Die neue Gesetzgebung erfasst insbesondere Neubauten und wichtige Dachsanierungen stärker.', detail: 'Technische Schwellen des ab 2027 anwendbaren Ausführungsrechts nicht vorwegnehmen.', sourceIds: ['vd-neues-gesetz'] },
        ],
      },
    },
    {
      id: 'foerderung',
      title: 'Dämmung mit PV bringt einen höheren M-01-Beitrag',
      paragraphs: [
        'Für gewöhnliche alleinstehende PV-Anlagen verweist der Kanton auf die Einmalvergütung von Pronovo. Das Waadtländer Gebäudeprogramm ist nicht als pauschaler PV-Fonds zu verstehen.',
        'Bei M-01 beträgt der Beitrag CHF 40/m² bei U ≤0,20, CHF 70/m² bei U ≤0,15 und CHF 100/m² bei U ≤0,15 in Kombination mit PV. Für den Kombinationssatz muss PV mindestens 50% der betroffenen günstigen Flächen bedecken. Der Beitrag ist mit Pronovo kumulierbar, doch das Gesuch muss vor Arbeitsbeginn bewilligt sein.',
        'Für geschützte Gebäude und Ortsbilder übernimmt «Solaire photovoltaïque & Patrimoine» integrationsbedingte Mehrkosten bis höchstens CHF 20’000 je beteiligtem kantonalem Dienst, insgesamt maximal CHF 40’000. Diese Hilfe ist nicht mit dem M-01-Solarbonus kumulierbar.',
      ],
      sourceIds: ['vd-programme-2026', 'vd-patrimoine', 'pronovo-pv'],
    },
    {
      id: 'spezialprogramme',
      title: 'Crowdfunding ist ein Spezialprogramm, kein EFH-Standardbeitrag',
      paragraphs: [
        'Ein erstes förderfähiges Crowdfunding-PV-Projekt erhält CHF 3’000 plus CHF 70/kWc, spätere Projekte CHF 70/kWc; maximal sind CHF 30’000 möglich. Erforderlich sind mindestens 30 kWc und mindestens 20 Beteiligte mit je wenigstens CHF 500. Stockwerkeigentümergemeinschaften sind ausgeschlossen.',
        'Im Förderkatalog 2026 ist kein allgemeiner kantonaler Beitrag für eine normale Heimbatterie bestätigt. Kommunale Programme sind für den Standort separat zu prüfen.',
      ],
      sourceIds: ['vd-programme-2026', 'vd-crowdfunding'],
    },
    {
      id: 'verfahren',
      title: 'Gemeinde entscheidet innert 30 Tagen über das Verfahren',
      paragraphs: [
        'Viele Solaranlagen können vom normalen permis de construire befreit werden, müssen aber mit dem standardisierten Formular bei der Gemeinde angekündigt werden. Die 30 Tage sind kein automatisches Bewilligungsverfahren: Die Gemeinde entscheidet in dieser Zeit, ob die Befreiung greift oder ein ordentliches Verfahren erforderlich ist.',
        'Bei kantonal geschützten Gebäuden ist die Vereinfachung nicht automatisch anwendbar. Seit 1. Januar 2026 erleichtert das Bundesrecht unter seinen Bedingungen zudem bestimmte Fassadenanlagen, auch mit mehr als 8 m²; die konkrete Einordnung bleibt vor Baubeginn mit der Gemeinde zu klären.',
      ],
      sourceIds: ['vd-solarverfahren'],
    },
  ],
  faqs: [
    { question: 'Welche Solarregel gilt in der Waadt bis Ende 2026?', answer: 'Neubauten müssen mindestens 20% ihres Elektrizitätsbedarfs mit erneuerbarer Energie decken.', sourceIds: ['vd-energie-2026'] },
    { question: 'Kann ich die 20%-Vorgabe mit Grünstromzertifikaten erfüllen?', answer: 'Nein, der Kauf solcher Zertifikate erfüllt die Vorgabe nicht.', sourceIds: ['vd-energie-2026'] },
    { question: 'Gelten ab 2027 bereits bekannte feste W/m²-Werte?', answer: 'Die neue Gesetzgebung gilt ab 1. Januar 2027; technische Schwellen müssen dem dann anwendbaren Ausführungsrecht entnommen werden.', sourceIds: ['vd-neues-gesetz'] },
    { question: 'Wann beträgt M-01 CHF 100/m²?', answer: 'Bei U ≤0,15 in Kombination mit PV, wenn PV mindestens 50% der betroffenen günstigen Flächen bedeckt.', sourceIds: ['vd-programme-2026'] },
    { question: 'Bedeutet die 30-Tage-Frist eine automatische Bewilligung?', answer: 'Nein. Die Gemeinde nutzt sie zur Entscheidung, ob eine Befreiung möglich ist oder ein Baubewilligungsverfahren nötig wird.', sourceIds: ['vd-solarverfahren'] },
  ],
  sources: [...sources],
};