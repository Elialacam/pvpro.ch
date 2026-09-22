import type { CantonGuide } from '../types';

const sources = [
  { id: 'sz-energy-ordinance', authority: 'Canton of Schwyz', title: 'Cantonal Energy Ordinance, section 24d', url: 'https://www.sz.ch/public/upload/assets/32457/420_111.pdf?fp=24#page=9' },
  { id: 'sz-own-electricity', authority: 'Canton of Schwyz', title: 'On-site electricity generation requirement and cantonal solar cadastre', url: 'https://www.sz.ch/umweltdepartement/amt-fuer-umwelt-und-energie/energie-und-klima/energieversorgung/solarenergie.html/8756-8758-8802-9447-9453-10708-11115-11093' },
  { id: 'sz-solar-guide-2026', authority: 'Canton of Schwyz', title: 'Planning guide for solar installations on buildings: eBau SZ and notification period', url: 'https://www.sz.ch/public/upload/assets/75112/Planungshilfe_fuer_Solaranlagen_am_Gebaeude.pdf' },
  { id: 'sz-energy-funding-2026', authority: 'Canton of Schwyz', title: '2026 energy incentive programme', url: 'https://www.sz.ch/verwaltung/umweltdepartement/amt-fuer-umwelt-und-energie/energie-und-klima/foerderprogramme.html/8756-8758-8802-9447-9453-10708-11116' },
  { id: 'sz-agricultural-battery', authority: 'Canton of Schwyz, Office for Agriculture', title: 'Investment assistance: battery storage for sustainable energy', url: 'https://www.sz.ch/volkswirtschaftsdepartement/amt-fuer-landwirtschaft/bauliche-massnahmen/oekonomiegebaeude/beitragsgesuch-batteriespeicher-zur-speicherung-nachhaltiger-energie.html/8756-8758-8802-10373-11060-11206-11186-13336' },
  { id: 'pronovo-eiv-2026', authority: 'Pronovo', title: 'One-off payment for photovoltaic installations', url: 'https://pronovo.ch/de/foerderung/photovoltaik' },
  { id: 'pronovo-tariff-calculator', authority: 'Pronovo', title: 'Photovoltaic tariff calculator', url: 'https://pronovo.ch/de/services/tarifrechner' },
] as const;

export const guide: CantonGuide = {
  id: 'schwyz', path: '/en/solar-panels-schwyz', canton: 'Schwyz',
  title: 'Solar panels in Schwyz | PvPro.ch',
  description: 'Compare up to three free quotes from vetted solar installers for your photovoltaic project in the canton of Schwyz.',
  h1: 'Solar panels in the canton of Schwyz: on-site generation, solar cadastre and incentives in 2026',
  intro: [
    'Since 1 May 2022, new buildings and replacement buildings in the canton of Schwyz have generally been subject to an on-site electricity generation requirement. Whether it applies to your building can only be determined after checking the cantonal solar cadastre and the specified exemptions.',
    'Where the requirement applies, 10 W of capacity per m² of energy reference area must be planned, subject to a maximum mandatory capacity of 30 kW. Paying a substitute levy is not an option.',
  ],
  quickFacts: [
    { value: '10 W/m² ERA', label: 'Requirement where on-site generation is mandatory', sourceIds: ['sz-energy-ordinance'] },
    { value: '30 kW', label: 'Maximum capacity required', sourceIds: ['sz-energy-ordinance'] },
    { value: '1,120 kWh/m²/year', label: 'Irradiation threshold in the solar cadastre', sourceIds: ['sz-energy-ordinance', 'sz-own-electricity'] },
    { value: '20 days', label: 'Notification before construction starts where the notification procedure applies', sourceIds: ['sz-solar-guide-2026'] },
  ],
  ctaAfterSection: 'pflicht-check',
  sections: [
    {
      id: 'pflicht-check', title: 'Does the on-site generation requirement apply to my building?',
      paragraphs: ['First establish the type of construction project, then check its location in the cantonal solar cadastre. The required capacity can only be calculated after this classification and the exemptions have been clarified.'],
      sourceIds: ['sz-energy-ordinance', 'sz-own-electricity'],
      module: {
        kind: 'solar-cadastre-check', title: 'Does the on-site generation requirement apply to my building?',
        intro: 'Work through the five steps in order. If an exemption applies, the assessment ends for the project concerned.',
        items: [
          { title: '1. Classify a new or replacement building', value: 'Since 1 May 2022', text: 'The requirement generally applies to new buildings and replacement buildings. Extensions have separate exemption thresholds, which are checked in step 4.', sourceIds: ['sz-energy-ordinance', 'sz-own-electricity'] },
          { title: '2. Check the solar cadastre and global irradiation', value: '≥ 1,120 kWh/m²/year', text: 'The cantonal solar cadastre is the authoritative basis. The exemption applies if the building is in an area receiving less than 1,120 kWh of global irradiation per m² per year.', detail: 'This figure is annual irradiation per unit of area, not installation capacity.', sourceIds: ['sz-energy-ordinance', 'sz-own-electricity'] },
          { title: '3. Clarify the Minergie standard', value: 'Minergie = exemption', text: 'A new building that meets the Minergie standard is exempt from the requirement under section 24d kEnV.', sourceIds: ['sz-energy-ordinance'] },
          { title: '4. Check an extension against both rules', value: '< 50 m² or ≤ 20% and ≤ 1,000 m²', text: 'An extension is exempt if its new energy reference area is below 50 m². It is also exempt if it is no more than 20% of the existing energy reference area and no more than 1,000 m² at the same time.', detail: 'Under the second option, both the 20% threshold and the 1,000 m² threshold must be met.', sourceIds: ['sz-energy-ordinance'] },
          { title: '5. Calculate the mandatory capacity', value: '10 W/m² ERA · maximum requirement 30 kW', text: 'Multiply the energy reference area by 10 W/m². The ERA is the relevant heated floor area of the building; no more than 30 kW can be required per building.', detail: 'The 30 kW cap only limits the mandatory capacity. A larger PV installation may still be installed voluntarily.', sourceIds: ['sz-energy-ordinance'] },
        ],
      },
    },
    {
      id: 'erfuellung', title: 'Complying with the requirement: your own installation or a ZEV',
      paragraphs: [
        'If your building is subject to the requirement, a compliant on-site generation solution must be implemented; Schwyz does not allow a substitute levy to be paid instead of providing the prescribed solution.',
        'For an overall development, the requirement can also be met jointly through a grouping for self-consumption, known as a ZEV. A ZEV organises shared self-consumption, provided a new or expanded electricity generation installation is available. An arbitrary existing installation belonging to a neighbour is therefore not automatically sufficient.',
      ],
      sourceIds: ['sz-energy-ordinance', 'sz-own-electricity'],
      notice: { title: 'No substitute levy', text: 'In the canton of Schwyz, the on-site generation requirement cannot be replaced by paying a substitute levy.', status: 'important' },
    },
    {
      id: 'meldung', title: 'Notify the solar installation through eBau SZ',
      paragraphs: [
        'If the installation meets the location and integration requirements, submit the building notification through eBau SZ at least 20 days before construction starts. The notification procedure means giving notice instead of applying for a standard building permit.',
        'The municipality where the installation is located is the first point of contact. Within the 20 days, it may advise that a simplified or ordinary permit procedure is nevertheless required; if no such notice is issued, work may start once the waiting period has expired.',
        'Prepare a site plan, fire service plan or orientation drawing, roof plan showing clearances, roof section showing the structure height, and technical data sheets and product descriptions. Depending on the project, a glare assessment may also be needed; certain façade installations over 11 m high additionally require a PV fire safety plan.',
      ],
      sourceIds: ['sz-solar-guide-2026'],
    },
    {
      id: 'foerderung', title: 'PV incentives generally come from the federal government',
      paragraphs: [
        'There is no general cantonal PV payment for an ordinary photovoltaic installation on a residential building. Federal incentives are administered by Pronovo; any municipal programmes must be checked separately with the municipality where the property is located. Solar thermal systems, by contrast, may be included in the cantonal incentive programme.',
        'The one-off payment is calculated individually. Pronovo distinguishes KLEIV for installations below 100 kW, GREIV from 100 kW and HEIV for installations without self-consumption in the designated categories. The base payment has been CHF 0 since 1 April 2024; capacity, installation type and applicable bonuses determine the payment, not a guaranteed percentage.',
        'The Office for Agriculture’s fully allocated scheme for batteries used with sustainable energy is not a storage payment for an ordinary detached house. The canton is currently not accepting new applications.',
      ],
      sourceIds: ['sz-energy-funding-2026', 'sz-agricultural-battery', 'pronovo-eiv-2026', 'pronovo-tariff-calculator'],
    },
    {
      id: 'ablauf', title: 'How to prepare the project in practice',
      paragraphs: ['Start with the construction type, solar cadastre and ERA before having an installation sized. This ensures that the quote is based on the requirement that actually applies, rather than a blanket assumption.'],
      bullets: [
        'Clearly classify the project as a new building, replacement building or extension',
        'Check the location and global irradiation in the cantonal solar cadastre',
        'Document the ERA, clarify exemptions and calculate mandatory capacity',
        'Plan the installation and agree the procedure with the municipality in advance',
        'Submit documents through eBau SZ at least 20 days before construction starts',
        'Calculate the Pronovo payment separately using the official tariff calculator',
      ],
      sourceIds: ['sz-energy-ordinance', 'sz-own-electricity', 'sz-solar-guide-2026', 'pronovo-eiv-2026', 'pronovo-tariff-calculator'],
    },
    {
      id: 'kosten', title: 'Make costs and plans comparable',
      paragraphs: [
        'Compare quotes based on the same mandatory capacity, the same planned installation size and a clearly defined scope. Roof geometry, mounting structure, scaffolding, electrical work, grid connection, documentation and optional storage items are particularly relevant.',
        'Have the assumed Pronovo payment shown separately and only include municipal payments once they have been confirmed. PvPro.ch lets property owners compare up to three suitable solar quotes free of charge and without obligation, all based on the same project specification.',
      ],
      sourceIds: ['sz-energy-ordinance', 'pronovo-eiv-2026', 'pronovo-tariff-calculator'],
    },
  ],
  faqs: [
    { question: 'Does every new building in Schwyz need a PV installation?', answer: 'No. Relevant factors include its location in the solar cadastre, global irradiation and the exemptions under section 24d kEnV.', sourceIds: ['sz-energy-ordinance', 'sz-own-electricity'] },
    { question: 'How large must the installation be?', answer: 'At least 10 W per m² of ERA, with no more than 30 kW required.', sourceIds: ['sz-energy-ordinance'] },
    { question: 'Can I pay a substitute levy instead?', answer: 'No.', sourceIds: ['sz-own-electricity'] },
    { question: 'How early must I notify a solar installation?', answer: 'Usually at least 20 days before construction starts, where the notification procedure applies.', sourceIds: ['sz-solar-guide-2026'] },
    { question: 'Does the canton of Schwyz subsidise photovoltaics?', answer: 'Ordinary PV installations do not receive direct cantonal incentives; federal incentives are available through Pronovo.', sourceIds: ['sz-energy-funding-2026', 'pronovo-eiv-2026'] },
  ],
  sources: [...sources],
};