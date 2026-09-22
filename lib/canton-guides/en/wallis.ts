import type { CantonGuide } from '../types';

const sources = [
  { id: 'vs-energiegesetz', authority: 'Canton of Valais', title: 'Energy Act of 8 September 2023', url: 'https://lex.vs.ch/app/de/texts_of_law/730.1' },
  { id: 'vs-energieverordnung', authority: 'Canton of Valais', title: 'Energy Ordinance', url: 'https://lex.vs.ch/app/de/texts_of_law/730.100' },
  { id: 'vs-solar', authority: 'Canton of Valais, Energy and Hydropower Service', title: 'Solar energy: obligations, procedures and funding', url: 'https://www.vs.ch/de/web/energie/solarenergie' },
  { id: 'vs-bauverfahren', authority: 'Canton of Valais', title: 'Solar installations exempt from permits and notification procedure', url: 'https://www.vs.ch/web/energie/mettre-en-place-une-installation-solaire' },
  { id: 'vs-steuern-pv', authority: 'Canton of Valais', title: 'Tax treatment of photovoltaic installations', url: 'https://www.vs.ch/web/energie/programmes-de-promotion/aides-financieres' },
  { id: 'pronovo-pv', authority: 'Pronovo Ltd on behalf of the Swiss Confederation', title: 'One-off payment for photovoltaic installations', url: 'https://pronovo.ch/de/foerderung/photovoltaik' },
] as const;

export const guide: CantonGuide = {
  id: 'wallis', path: '/en/solar-panels-valais', canton: 'Valais',
  title: 'Solar panels in Valais | PvPro.ch',
  description: 'Compare solar offers in Valais and check the obligations for new buildings, roof renovations and large roofs.',
  h1: 'Solar panels in Valais: PV obligations for new buildings and roof renovations in 2026',
  intro: [
    'Valais energy legislation has applied since 1 January 2025. It requires on-site power not only for new buildings and certain extensions: removing the roof covering from an existing building can also trigger a solar obligation.',
    'Large roofs of more than 500 m² are additionally subject to a long-term installation obligation. The project type, energy reference area, roof area being worked on and any exceptions must therefore be examined separately.',
  ],
  quickFacts: [
    { value: '20 W/m² ERA', label: 'minimum capacity for covered new buildings, extensions and roof renovations', sourceIds: ['vs-energiegesetz', 'vs-energieverordnung'] },
    { value: 'max. 30 kW', label: 'upper limit on the capacity required in these cases', sourceIds: ['vs-energiegesetz', 'vs-energieverordnung'] },
    { value: '>500 m²', label: 'roof area triggering the long-term installation obligation', sourceIds: ['vs-energiegesetz'] },
    { value: '30 days', label: 'advance notice for permit-exempt projects', sourceIds: ['vs-bauverfahren'] },
  ],
  ctaAfterSection: 'dachsanierung',
  sections: [
    {
      id: 'dachsanierung', title: 'Valais roof-renovation check',
      paragraphs: [
        'When the roof covering is removed, an existing building must generally produce some of the electricity or heat it consumes. For PV, the ordinance specifies at least 20 W/m² of energy reference area, capped at 30 kW.',
        'The required installation area may occupy no more than 80% of the roof surfaces from which the covering is removed. Minor repairs that do not remove the roof covering must therefore be classified differently from actual reroofing.',
      ],
      sourceIds: ['vs-energiegesetz', 'vs-energieverordnung'],
      module: {
        kind: 'valais-roof-check', title: 'Is your roof being opened?', intro: 'Work through these steps in order.',
        items: [
          { title: '1. Establish the scope', value: 'Roof covering removed?', text: 'For a minor repair, clarify the specific scope separately; if the roof covering is removed, check the obligation.', sourceIds: ['vs-energiegesetz'] },
          { title: '2. Check the exceptions', value: 'Four exceptions', text: 'Possible exceptions are an overall GEAK/CECB class C after renovation, simultaneous energy renovation of all façades, work only on the north side, or exclusively summer use.', sourceIds: ['vs-energiegesetz'] },
          { title: '3. Calculate capacity', value: '20 W/m² ERA', text: 'Without an exception, allow for at least 20 W per m² of energy reference area, but no more than 30 kW.', sourceIds: ['vs-energieverordnung'] },
          { title: '4. Limit the roof area', value: 'max. 80%', text: 'The required PV area need not occupy more than 80% of the newly covered roof area.', sourceIds: ['vs-energieverordnung'] },
        ],
      },
    },
    {
      id: 'neubau', title: 'New buildings and extensions: 20 W/m², no more than 30 kW',
      paragraphs: [
        'New buildings and covered extensions must achieve at least 20 W of renewable on-site power capacity per m² of energy reference area, or ERA. This obligation never requires more than 30 kW.',
        'An extension is exempt if its new ERA is less than 50 m². It is also exempt if it amounts to less than 20% of the existing ERA and is no larger than 1,000 m². A specific statutory exception applies to Minergie buildings already equipped with PV.',
        'Subject to the statutory conditions, the corresponding production can also be provided through a financial stake in a renewable installation in Valais or a neighbouring canton, or through a collective self-consumption arrangement.',
      ],
      sourceIds: ['vs-energiegesetz', 'vs-energieverordnung'],
    },
    {
      id: 'grossdaecher', title: 'Roofs over 500 m²: a separate 25-year rule',
      paragraphs: [
        'Buildings with more than 500 m² of roof area must be equipped to generate electricity within 25 years of the Act entering into force. This covers surfaces with average annual irradiation above 1,200 kWh/m².',
        'The required capacity is limited by the existing electrical connection capacity. The requirement is met either with PV on at least 40% of the roof area or with at least 20 W/m² of energy reference area.',
      ],
      sourceIds: ['vs-energiegesetz', 'vs-energieverordnung'],
      module: {
        kind: 'valais-large-roofs', title: 'Assessment route for a large roof', intro: 'This obligation is separate from the roof-renovation rule.',
        items: [
          { title: '1. Roof area', value: '>500 m²', text: 'Only roofs above this threshold fall under this long-term rule.', sourceIds: ['vs-energiegesetz'] },
          { title: '2. Solar potential', value: '>1,200 kWh/m²/year', text: 'Roof surfaces above the specified average annual irradiation are relevant.', sourceIds: ['vs-energiegesetz'] },
          { title: '3. Deadline', value: '25 years', text: 'The equipment must be installed within 25 years of the 1 January 2025 commencement date.', sourceIds: ['vs-energiegesetz'] },
          { title: '4. Compliance', value: '40% of roof or 20 W/m² ERA', text: 'Either option satisfies the area or capacity requirement; connection capacity remains the upper limit.', sourceIds: ['vs-energieverordnung'] },
        ],
      },
    },
    {
      id: 'verfahren', title: 'Handle notification and funding separately',
      paragraphs: [
        'If a solar installation is exempt from the standard building permit procedure, it must be notified to the competent authority 30 days before work begins. Installations on cultural monuments or natural sites of cantonal or national importance still require a permit.',
        'For ordinary photovoltaics, the canton refers applicants to Pronovo. The Valais Buildings Programme supports other renovation and heating measures and is not a flat-rate cantonal PV payment. Municipal assistance must be checked separately; no general cantonal bonus for ordinary home batteries is confirmed.',
        'For existing buildings, eligible investment costs can be deducted from taxable income under cantonal tax guidelines. The canton provides special tax treatment for proceeds up to 10,000 kWh. Check the current guideline through the official solar-energy link; it does not establish any guaranteed tax saving.',
      ],
      sourceIds: ['vs-bauverfahren', 'vs-solar', 'vs-steuern-pv', 'pronovo-pv'],
    },
  ],
  faqs: [
    { question: 'Does every minor roof repair in Valais trigger a solar obligation?', answer: 'No. A key point is whether the roof covering is removed.', sourceIds: ['vs-energiegesetz'] },
    { question: 'What requirement applies to a covered roof renovation?', answer: 'At least 20 W/m² ERA, capped at 30 kW; the PV area is limited to 80% of the newly covered area.', sourceIds: ['vs-energieverordnung'] },
    { question: 'Which exception may apply after a roof renovation?', answer: 'Examples include an overall GEAK/CECB class C, simultaneous energy renovation of all façades, work only on the north side, or exclusively summer use.', sourceIds: ['vs-energiegesetz'] },
    { question: 'What applies to roofs over 500 m²?', answer: 'Where irradiation is sufficient, a 25-year rule applies; either 40% roof coverage or 20 W/m² ERA is required.', sourceIds: ['vs-energiegesetz', 'vs-energieverordnung'] },
    { question: 'Where is an ordinary Valais PV installation funded?', answer: 'Standard PV funding is requested through Pronovo; any municipal payments must be checked separately.', sourceIds: ['vs-solar', 'pronovo-pv'] },
  ],
  sources: [...sources],
};