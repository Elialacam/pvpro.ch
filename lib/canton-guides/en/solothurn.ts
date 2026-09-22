import type { CantonGuide } from '../types';

const sources = [
  { id: 'so-vote-2025', authority: 'Canton of Solothurn', title: 'Vote of 9 February 2025: complete revision of the Energy Act', url: 'https://so.ch/verwaltung/staatskanzlei/medien/medienmitteilung/news/energiegesetz-mehrheit-sagt-nein' },
  { id: 'so-energy-law', authority: 'Canton of Solothurn', title: '1991 Energy Act, version in force since 2015', url: 'https://bgs.so.ch/app/de/texts_of_law/941.21' },
  { id: 'so-solar-notification', authority: 'Canton of Solothurn, Spatial Planning Office', title: 'Cantonal structure plan E-2.5: notification of solar installations', url: 'https://so.ch/fileadmin/internet/bjd/bjd-arp/Richtplanung/pdf/Richtplantext/E-2_5.pdf' },
  { id: 'so-ebauso', authority: 'Canton of Solothurn', title: 'eBauSO electronic building permit procedure', url: 'https://so.ch/services/baubewilligungsverfahren' },
  { id: 'so-energy-funding', authority: 'Canton of Solothurn, Energy Office', title: 'Cantonal energy incentive programme: supported measures', url: 'https://energie.so.ch/foerderung/foerdermassnahmen' },
  { id: 'so-tax-book', authority: 'Solothurn Cantonal Tax Office', title: 'Tax manual: operating a photovoltaic installation', url: 'https://steuerbuch.so.ch/steuern/einkommenssteuer/ertraege-aus-unbeweglichem-vermoegen-und-liegenschaftskosten/27-nr-4' },
  { id: 'pronovo-eiv', authority: 'Pronovo', title: 'One-off payment for photovoltaic installations', url: 'https://pronovo.ch/de/foerderung/photovoltaik' },
  { id: 'pronovo-tariff-calculator', authority: 'Pronovo', title: 'Photovoltaic tariff calculator', url: 'https://pronovo.ch/de/services/tarifrechner' },
] as const;

export const guide: CantonGuide = {
  id: 'solothurn', path: '/en/solar-panels-solothurn', canton: 'Solothurn',
  title: 'Solar panels in Solothurn | PvPro.ch',
  description: 'Compare up to three free quotes from vetted solar installers for your photovoltaic project in the canton of Solothurn.',
  h1: 'Solar panels in the canton of Solothurn: what actually applies in 2026',
  intro: [
    'In 2026, solar installations in Solothurn are not subject to the new general 10 W/m² requirement proposed in the complete revision: voters rejected the bill on 9 February 2025.',
    'Property owners should instead focus on the current Energy Act, the requirement to notify permit-exempt installations at least 30 days before construction starts, and federal incentives through Pronovo.',
  ],
  quickFacts: [
    { value: '57.52% no', label: 'Complete revision rejected on 9 February 2025', sourceIds: ['so-vote-2025'] },
    { value: 'No new 10 W/m² requirement', label: 'The rejected revision’s requirement does not apply', sourceIds: ['so-vote-2025', 'so-energy-law'] },
    { value: 'At least 30 days', label: 'Notification before construction starts', sourceIds: ['so-solar-notification'] },
    { value: 'One-off payment via Pronovo', label: 'Main incentive route for ordinary PV installations', sourceIds: ['pronovo-eiv', 'so-energy-funding'] },
  ],
  ctaAfterSection: 'rechtslage',
  sections: [
    {
      id: 'rechtslage', title: 'What applies—and what does not?',
      paragraphs: [
        'Plan your project under current law, not documents relating to the rejected complete revision. The vote ended with 57.52% voting no and 42.48% voting yes, so Solothurn did not receive a new Energy Act.',
        'The 1991 Energy Act, in the version in force since 2015, remains authoritative. Together with the Energy Ordinance, it sets requirements for new buildings and extensions, including heat demand and the share of non-renewable energy, but it does not impose a new general cantonal requirement of 10 W of photovoltaic capacity per m² of energy reference area. The energy reference area (ERA) is the relevant heated floor area of the building.',
      ],
      sourceIds: ['so-vote-2025', 'so-energy-law'],
      module: {
        kind: 'current-law-comparison', title: 'What applies—and what does not?',
        intro: 'Keep current law and available procedures clearly separate from the content of the rejected complete revision.',
        items: [
          { title: 'Existing Energy Act', value: 'Applies', text: 'The authoritative legislation remains the 1991 Energy Act in the version in force since 2015, not the proposed complete revision.', sourceIds: ['so-energy-law', 'so-vote-2025'] },
          { title: 'Notification procedure with a 30-day period', value: 'Applies', text: 'A solar installation that is exempt from a permit under federal law must be notified to the competent building authority at least 30 days before construction starts. Notification takes the place of a standard building permit procedure.', detail: 'Expiry of the period does not constitute automatic approval.', sourceIds: ['so-ebauso'] },
          { title: 'eBauSO', value: 'Applies', text: 'For permit-exempt installations, the cantonal platform provides a dedicated “Solar installation notification” process.', sourceIds: ['so-solar-notification'] },
          { title: 'Federal incentives through Pronovo', value: 'Applies', text: 'Direct support for ordinary PV installations is provided primarily through the federal one-off payment administered by Pronovo.', sourceIds: ['pronovo-eiv'] },
          { title: 'New 10 W/m² requirement', value: 'Does not apply', text: 'The general requirement in the rejected complete revision is not cantonal law in force in 2026.', detail: 'The vote on 9 February 2025 must not be treated as if the legislation had entered into force.', sourceIds: ['so-vote-2025', 'so-energy-law'] },
          { title: 'Planned incentive bonuses', value: 'Do not apply', text: 'The payments proposed with the revision for roof or façade renovations, winter electricity, storage and bidirectional infrastructure must not be presented as active general incentives.', sourceIds: ['so-vote-2025', 'so-energy-funding'] },
        ],
      },
    },
    {
      id: 'meldung', title: 'How to notify a permit-exempt solar installation correctly',
      paragraphs: [
        'First ask the competent building authority whether your installation is permit-exempt under federal law. If it is, you must notify the installation at least 30 days before construction starts.',
        'Submit a project description, site plan and façade plan. eBauSO provides a “Solar installation notification” process for this purpose. For these installations, notification replaces the standard building permit procedure, but it does not dispense with the documents or result in automatic approval after 30 days.',
      ],
      bullets: ['Contact the competent municipal building authority early', 'Prepare a project description', 'Include a site plan', 'Include a façade plan', 'Give notice at least 30 days before construction starts'],
      sourceIds: ['so-solar-notification', 'so-ebauso'],
    },
    {
      id: 'foerderung', title: 'Calculate photovoltaic incentives through Pronovo',
      paragraphs: [
        'Calculate direct support for an ordinary PV installation separately through Pronovo. The one-off payment is a one-time federal incentive and is not the same as cantonal support for other building work.',
        'In 2026, Pronovo distinguishes KLEIV for installations below 100 kW and GREIV from 100 kW. HEIV only covers installations without self-consumption in the designated categories. The base payment has been CHF 0 since 1 April 2024; capacity, installation type and applicable bonuses are particularly important.',
        'Have the federal payment calculated individually with Pronovo’s tariff calculator. A specific percentage of the investment is not guaranteed and should not be promised as a blanket amount in a quote.',
      ],
      sourceIds: ['pronovo-eiv', 'pronovo-tariff-calculator'],
    },
    {
      id: 'kantonale-beitraege', title: 'Put cantonal programmes in the correct context',
      paragraphs: [
        'Do not expect a general direct cantonal payment for an ordinary PV installation. The cantonal energy programme supports other measures such as thermal insulation, renewable heating, Minergie and solar thermal systems.',
        'A PV installation may form part of a Minergie project and receive a federal one-off payment. However, this does not make the electricity generation itself a cantonal Minergie incentive measure. Solar thermal technology is also distinct and must not be equated with photovoltaics.',
        'Do not treat references to planned PV payments for roof or façade renovations, winter electricity, battery storage or bidirectional infrastructure as active programmes. These measures were planned in connection with the rejected complete revision.',
      ],
      sourceIds: ['so-energy-funding', 'so-vote-2025', 'pronovo-eiv'],
    },
    {
      id: 'batterie', title: 'Battery storage: check for a tax deduction, not an unconfirmed grant',
      paragraphs: [
        'Plan a home battery without assuming a blanket cantonal grant: no general direct battery-storage payment has been confirmed for 2026.',
        'For existing buildings, expenditure on storage together with a renewable-energy installation may be tax-deductible under certain conditions; restrictions apply in particular to new buildings. A tax deduction reduces taxable income—it is not a payout or a direct reduction of tax already due by the same amount. Have the treatment of your building and tax circumstances checked.',
      ],
      sourceIds: ['so-tax-book', 'so-energy-funding'],
    },
    {
      id: 'kosten', title: 'Make costs and plans comparable',
      paragraphs: [
        'Compare quotes on the same technical and administrative basis. Roof geometry, shading, mounting structure, scaffolding, electrical work, grid connection and an optional battery should be identifiable as separate items.',
        'Show the expected Pronovo one-off payment separately from the installation price and do not treat possible tax deductions like a guaranteed incentive payment. Also clarify who will prepare the eBauSO notification and supply the required plans.',
        'PvPro.ch lets property owners compare up to three suitable solar quotes for the same project, free of charge and without obligation.',
      ],
      bullets: ['Installation capacity and module layout', 'Installation, mounting structure and scaffolding', 'Electrical work and grid connection', 'Notification and planning documents', 'Pronovo one-off payment shown separately', 'Battery storage clearly identified as an option'],
      sourceIds: ['so-solar-notification', 'so-ebauso', 'pronovo-eiv'],
    },
  ],
  faqs: [
    { question: 'Is there a general PV requirement for new buildings in Solothurn in 2026?', answer: 'No, not as a result of the complete revision rejected in 2025.', sourceIds: ['so-vote-2025', 'so-energy-law'] },
    { question: 'How early must I notify my solar installation?', answer: 'At least 30 days before construction starts.', sourceIds: ['so-ebauso'] },
    { question: 'Where do I submit the notification?', answer: 'To the competent building authority; eBauSO provides a dedicated solar installation notification.', sourceIds: ['so-solar-notification'] },
    { question: 'Are cantonal PV incentives available?', answer: 'Federal incentives through Pronovo are the main option for ordinary PV installations; cantonal building programmes cover other measures.', sourceIds: ['so-energy-funding', 'pronovo-eiv'] },
    { question: 'Is a home battery subsidised?', answer: 'No general direct cantonal payment has been confirmed for 2026; tax deductions may be relevant for existing buildings.', sourceIds: ['so-tax-book', 'so-energy-funding'] },
  ],
  sources: [...sources],
};