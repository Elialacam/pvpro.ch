import type { CantonGuide } from './types';

const sources = [
  {
    id: 'ow-foerdermodell-2026',
    authority: 'Kanton Obwalden',
    title: 'Kantonales Fördermodell 2026 – Winter-PV',
    url: 'https://www.ow.ch/_doc/438737',
  },
  {
    id: 'ow-solaranlagen',
    authority: 'Kanton Obwalden',
    title: 'Solaranlagen – Kanton Obwalden',
    url: 'https://www.ow.ch/bau/6508',
  },
  {
    id: 'ow-ausfuehrungsbestimmungen',
    authority: 'Kanton Obwalden',
    title: 'Ausführungsbestimmungen über die Solaranlagen',
    url: 'https://gdb.ow.ch/api/de/versions/1753/pdf_file_with_annexes',
  },
] as const;

export const guide: CantonGuide = {
  id: 'obwalden',
  path: '/solaranlage-obwalden',
  canton: 'Obwalden',
  title: 'Solaranlage Obwalden 2026: Winter-PV & Förderung | PvPro.ch',
  description:
    'Obwalden fördert winteroptimierte Photovoltaik mit 75°–90° Neigung. Förderbedingungen, Meldeweg und Solarofferten für 2026 im Überblick.',
  h1: 'Solaranlage in Obwalden: Winter-PV und Förderung 2026',
  intro: [
    'Obwalden setzt 2026 einen besonderen Schwerpunkt auf winteroptimierte Photovoltaik. Für steile und vertikale Lösungen gelten eigene kantonale Förderbedingungen.',
  ],
  quickFacts: [
    {
      value: '75°–90°',
      label: 'Neigungswinkel für winteroptimierte PV',
      sourceIds: ['ow-foerdermodell-2026'],
    },
    {
      value: 'ab 2 kWp',
      label: 'Mindestleistung für den kantonalen Beitrag',
      sourceIds: ['ow-foerdermodell-2026'],
    },
    {
      value: 'CHF 1’000 + CHF 750/kWp',
      label: 'Beitragsformel des Fördermodells 2026',
      sourceIds: ['ow-foerdermodell-2026'],
    },
    {
      value: 'max. CHF 8’000',
      label: 'Obergrenze des kantonalen Beitrags',
      sourceIds: ['ow-foerdermodell-2026'],
    },
  ],
  sections: [
    {
      id: 'winter-pv',
      title: 'Winter-PV in Obwalden: der Winkel als Ausgangspunkt',
      paragraphs: [
        'Das kantonale Fördermodell 2026 richtet sich ausdrücklich auf winteroptimierte Photovoltaikanlagen. Entscheidend ist eine steile oder vertikale Ausrichtung im Bereich von 75° bis 90°. Damit steht nicht die allgemeine PV-Anlage im Vordergrund, sondern eine Lösung, die nach den kantonalen Kriterien auf die Winterproduktion ausgerichtet ist.',
        'Für die Projektierung sollten Dach- oder Fassadenfläche, Ausrichtung und die geplante Leistung gemeinsam betrachtet werden. Der Fördercheck beginnt mit dem Neigungswinkel und der Mindestleistung. Erst danach lässt sich beurteilen, ob das konkrete Vorhaben die Bedingungen des Fördermodells erfüllt.',
      ],
      sourceIds: ['ow-foerdermodell-2026'],
      module: {
        kind: 'winter-angle',
        title: 'Winter-PV-Winkelmesser',
        intro:
          'Das vollständige Gesuch muss vor Baubeginn eingereicht werden; ein automatischer Anspruch auf den Beitrag besteht nicht.',
        items: [
          {
            title: 'Neigung 75°–90°',
            value: '75°–90°',
            text: 'Als winteroptimiert gelten Photovoltaikanlagen mit einem Neigungswinkel von 75° bis 90°.',
            detail: 'Der Winkel ist der erste Prüfpunkt für das kantonale Fördermodell 2026.',
            sourceIds: ['ow-foerdermodell-2026'],
          },
          {
            title: 'Mindestleistung',
            value: 'ab 2 kWp',
            text: 'Der kantonale Beitrag setzt bei einer Photovoltaikanlage ab 2 kWp an.',
            detail: 'Die Mindestleistung ist zusammen mit dem Neigungswinkel zu prüfen.',
            sourceIds: ['ow-foerdermodell-2026'],
          },
          {
            title: 'Beitragsformel',
            value: 'CHF 1’000 + CHF 750/kWp',
            text: 'Der Beitrag besteht aus CHF 1’000 pauschal plus CHF 750 pro kWp.',
            detail: 'Massgebend sind die Bedingungen des Fördermodells 2026.',
            sourceIds: ['ow-foerdermodell-2026'],
          },
          {
            title: 'Beitragsobergrenze',
            value: 'max. CHF 8’000',
            text: 'Der kantonale Beitrag beträgt höchstens CHF 8’000.',
            sourceIds: ['ow-foerdermodell-2026'],
          },
        ],
      },
    },
    {
      id: 'foerderung',
      title: 'Fördermodell und Pronovo getrennt prüfen',
      paragraphs: [
        'Das Obwaldner Fördermodell richtet sich gezielt an winteroptimierte PV, nicht allgemein an jede Photovoltaikanlage. Klären Sie vor der Wahl der Montagevariante, ob Ihr Vorhaben die Bedingungen erfüllt und welche Unterlagen für das Gesuch benötigt werden.',
        'Kantonale Förderung und die Instrumente von Pronovo sind getrennt zu betrachten. Das Fördermodell verweist zusätzlich auf Pronovo; ob mehrere Beiträge zusammenwirken, hängt von den jeweiligen Bedingungen ab. Eine Kombination darf daher nicht pauschal als sicher angenommen werden.',
      ],
      bullets: [
        'Neigungswinkel und Mindestleistung anhand des konkreten Projekts prüfen',
        'vollständige Unterlagen vor dem Baubeginn einreichen',
        'eine mögliche Kumulation mit Pronovo projektbezogen abklären',
      ],
      sourceIds: ['ow-foerdermodell-2026'],
    },
    {
      id: 'meldeweg',
      title: 'Meldeweg: Solarmeldeformular beim Bauamt',
      paragraphs: [
        'Für eine Solaranlage sieht das kantonale Verfahren die Einreichung des Solarmeldeformulars beim zuständigen kommunalen Bauamt vor.',
        'Bei besonderen Lagen sind zusätzliche Abklärungen möglich. Das betrifft etwa Vorhaben ausserhalb der Bauzone oder Situationen mit Schutzinteressen. Diese Punkte sollten vor der Umsetzung geklärt werden, damit Meldeweg und Fördergesuch nicht aneinander vorbeilaufen.',
      ],
      bullets: [
        'Solarmeldeformular für das konkrete Vorhaben vorbereiten',
        'zuständiges kommunales Bauamt einbeziehen',
        'ausserhalb der Bauzone oder bei Schutzinteressen zusätzliche Abklärungen vorsehen',
      ],
      sourceIds: ['ow-solaranlagen', 'ow-ausfuehrungsbestimmungen'],
    },
    {
      id: 'kosten',
      title: 'Kosten einer steilen oder integrierten Lösung',
      paragraphs: [
        'Bei einer stark geneigten oder in die Fassade integrierten Anlage zählen nicht nur Module und Wechselrichter. Unterkonstruktion, Montage, Zugänglichkeit, Geometrie und die Integration in die Fassade können den Aufwand des konkreten Projekts prägen.',
        'Eine Offerte sollte diese Positionen nachvollziehbar ausweisen und den kantonalen Beitrag getrennt von allfälligen Instrumenten des Bundes behandeln. So bleibt sichtbar, welche technische Lösung angeboten wird und welche Förderbedingungen noch geprüft werden müssen.',
        'PvPro.ch ermöglicht einen kostenlosen und unverbindlichen Vergleich von bis zu drei Angeboten für das konkrete Solarprojekt in Obwalden.',
      ],
      bullets: [
        'Module und Wechselrichter',
        'Unterkonstruktion und Montage',
        'Zugänglichkeit und Baustellenaufwand',
        'Geometrie und Fassadenintegration',
      ],
      sourceIds: [],
    },
  ],
  ctaAfterSection: 'winter-pv',
  faqs: [
    {
      question: 'Welche PV-Anlagen gelten in Obwalden als winteroptimiert?',
      answer:
        'Das kantonale Fördermodell 2026 definiert winteroptimierte Photovoltaikanlagen mit einem Neigungswinkel von 75° bis 90°.',
      sourceIds: ['ow-foerdermodell-2026'],
    },
    {
      question: 'Wie hoch ist der kantonale Beitrag für Winter-PV?',
      answer:
        'Ab 2 kWp beträgt der Beitrag CHF 1’000 pauschal plus CHF 750 pro kWp, höchstens jedoch CHF 8’000.',
      sourceIds: ['ow-foerdermodell-2026'],
    },
    {
      question: 'Kann der Antrag nach dem Bau eingereicht werden?',
      answer:
        'Nein. Die vollständigen Gesuchsunterlagen müssen vor Baubeginn eingereicht werden; eine rückwirkende Förderung ist ausgeschlossen.',
      sourceIds: ['ow-foerdermodell-2026'],
    },
    {
      question: 'Kann die kantonale Winter-PV-Förderung mit anderen Beiträgen kombiniert werden?',
      answer:
        'Das Fördermodell 2026 erlaubt Kumulationen grundsätzlich, sofern die jeweiligen Bedingungen eingehalten werden, und verweist zusätzlich auf Pronovo. Die konkrete Kombination muss projektbezogen geprüft werden.',
      sourceIds: ['ow-foerdermodell-2026'],
    },
    {
      question: 'Wo wird eine Solaranlage in Obwalden gemeldet?',
      answer:
        'Das kantonale Verfahren sieht die Einreichung des Solarmeldeformulars beim zuständigen kommunalen Bauamt vor; bei besonderen Lagen, etwa ausserhalb der Bauzone oder bei Schutzinteressen, sind zusätzliche Abklärungen möglich.',
      sourceIds: ['ow-solaranlagen', 'ow-ausfuehrungsbestimmungen'],
    },
  ],
  sources: [...sources],
};