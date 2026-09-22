import type { CantonGuide } from '../types';

const sources = [
  { id: 'zg-energieverordnung', authority: 'Canton of Zug', title: 'Ordinance to the Energy Act: on-site electricity generation', url: 'https://bgs.zg.ch/app/de/texts_of_law/740.11' },
  { id: 'zg-vollzug', authority: 'Canton of Zug', title: 'On-site electricity generation for new buildings and extensions', url: 'https://zg.ch/de/planen-bauen/bauvorschriften/gebaeude-und-energie/energievorschriften-vollzug' },
  { id: 'zg-pbg', authority: 'Canton of Zug', title: 'Planning and Building Act § 44a: building notification for solar installations', url: 'https://bgs.zg.ch/app/de/texts_of_law/721.11' },
  { id: 'zg-foerderprogramm-2026', authority: 'Canton of Zug', title: '2026 Energy Funding Programme', url: 'https://cdn.zg.ch/dam/jcr:de631126-335b-431a-9153-7013803a29bc/20260428_F%C3%B6rderprogramm%20Energie%202026_KtZG_F%C3%B6rderbedingungen_1.2.pdf' },
  { id: 'pronovo-pv', authority: 'Pronovo Ltd on behalf of the Swiss Confederation', title: 'One-off payment for photovoltaic installations', url: 'https://pronovo.ch/de/foerderung/photovoltaik' },
] as const;

export const guide: CantonGuide = {
  id: 'zug', path: '/en/solar-panels-zug', canton: 'Zug',
  title: 'Solar panels in the Canton of Zug | PvPro.ch',
  description: 'Compare solar offers in Zug and clarify the on-site power obligation, replacement levy and 2026 funding.',
  h1: 'Solar panels in the Canton of Zug: on-site power obligation, replacement levy and 2026 funding',
  intro: [
    'For new buildings and non-minor extensions or additional storeys, Zug requires 10 W of on-site electricity capacity per m² of energy reference area. Formula: energy reference area × 10 W/m² = required capacity; this obligation never requires 30 kW or more.',
    'Anyone unable or unwilling to install the required system pays the municipality CHF 1,000 for each missing kW. Alternatively, subject to the statutory conditions, the obligation can be met collectively through a collective self-consumption arrangement.',
  ],
  quickFacts: [
    { value: '10 W/m² ERA', label: 'on-site power requirement for covered construction projects', sourceIds: ['zg-energieverordnung'] },
    { value: '<30 kW', label: 'the obligation never requires 30 kW or more', sourceIds: ['zg-energieverordnung'] },
    { value: 'CHF 1,000/kW', label: 'replacement levy for required capacity that is not installed', sourceIds: ['zg-energieverordnung'] },
    { value: '20 days', label: 'period without objection after receipt of the building notification', sourceIds: ['zg-pbg'] },
  ],
  ctaAfterSection: 'eigenstrom',
  sections: [
    {
      id: 'eigenstrom', title: 'Install PV or pay the replacement levy',
      paragraphs: [
        'The ordinance-level provisions on on-site electricity generation and the replacement levy have applied since 1 January 2023.',
        'First calculate the mandatory capacity using the project’s energy reference area. Extensions and additional storeys above the minor-work threshold are treated like new buildings for this provision.',
        'The replacement levy is paid to the municipality and earmarked for local renewable electricity production. It is not funding for the owner’s own installation and replaces only the unrealised part of the obligation.',
      ],
      sourceIds: ['zg-energieverordnung', 'zg-vollzug'],
      module: {
        kind: 'zug-power-choice', title: 'Two options after calculating capacity', intro: 'ERA × 10 W/m² gives the required on-site power capacity, always below 30 kW.',
        items: [
          { title: 'Install an on-site power system', value: '10 W/m² ERA', text: 'Provide the capacity on the building or collectively in a permitted self-consumption arrangement.', detail: 'Coordinate the project and collective self-consumption documentation with the municipality.', sourceIds: ['zg-energieverordnung', 'zg-vollzug'] },
          { title: 'Compensate for missing capacity', value: 'CHF 1,000/kW', text: 'The replacement levy is payable to the municipality for every required kW that is not installed.', detail: 'The funds are earmarked for local renewable electricity production.', sourceIds: ['zg-energieverordnung'] },
        ],
      },
    },
    {
      id: 'bonus', title: 'Insulate the roof or façade and add PV',
      paragraphs: [
        'Zug’s 2026 funding programme pays CHF 60/m² for eligible roof or façade insulation. If a new PV installation that provides full coverage as defined by the programme is installed on the same building element at the same time, a further CHF 60/m² of insulated area is added.',
        'This supplement is not a general CHF 60/m² payment for every new PV installation. Ordinary standalone PV is assessed through Pronovo; the programme does not confirm any general cantonal payment for ordinary home batteries.',
      ],
      sourceIds: ['zg-foerderprogramm-2026', 'pronovo-pv'],
      module: {
        kind: 'zug-renovation-bonus', title: 'When does PV count as full coverage?', intro: 'The threshold refers to the building element insulated at the same time.',
        items: [
          { title: 'Façade', value: 'at least 20%', text: 'At least 20% of the insulated façade area must be covered with new PV modules.', sourceIds: ['zg-foerderprogramm-2026'] },
          { title: 'Roof', value: 'at least 50%', text: 'At least 50% of the insulated roof area must be covered with new PV modules.', sourceIds: ['zg-foerderprogramm-2026'] },
        ],
      },
    },
    {
      id: 'verfahren', title: 'Building notification: allow 20 days for objections',
      paragraphs: [
        'Solar installations that do not significantly affect neighbours’ interests or public interests must be reported to the competent municipal authority in a building notification. If the authority raises no objection within 20 days of receipt, the project may proceed.',
        'Outside the building zone, the municipality forwards the documents to the Building Directorate. A building permit is always required on cultural and natural monuments of cantonal or national importance.',
      ],
      sourceIds: ['zg-pbg'],
    },
    {
      id: 'planung', title: 'Keep the obligation, funding and quotation clearly separate',
      paragraphs: [
        'Have the energy reference area, mandatory capacity, actual installed capacity and any replacement levy listed separately. For a collective self-consumption arrangement, it must also be clear how the shared compliance is achieved.',
        'For a renovation, the insulated building-element area, PV coverage ratio, building-envelope payment and PV funding belong in separate line items. This prevents the combined bonus from being incorrectly charged as a flat-rate PV payment.',
      ],
      sourceIds: ['zg-energieverordnung', 'zg-foerderprogramm-2026', 'pronovo-pv'],
    },
  ],
  faqs: [
    { question: 'How is Zug’s on-site power obligation calculated?', answer: 'Energy reference area × 10 W/m²; the rule never requires 30 kW or more.', sourceIds: ['zg-energieverordnung'] },
    { question: 'How much is the replacement levy?', answer: 'CHF 1,000 for each required but uninstalled kW.', sourceIds: ['zg-energieverordnung'] },
    { question: 'Can the obligation be met jointly through a collective self-consumption arrangement?', answer: 'Yes. Collective compliance through such an arrangement is possible subject to the statutory conditions.', sourceIds: ['zg-vollzug'] },
    { question: 'When may work begin after a building notification?', answer: 'If the municipality raises no objection within 20 days of receipt.', sourceIds: ['zg-pbg'] },
    { question: 'Does every Zug PV installation receive the additional CHF 60/m²?', answer: 'No. The supplement applies only with funded insulation and the defined full-coverage PV installation.', sourceIds: ['zg-foerderprogramm-2026'] },
  ],
  sources: [...sources],
};