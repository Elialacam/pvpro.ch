import type { CantonGuide } from '../types';

const sources = [
  { id: 'ti-ruen', authority: 'Canton of Ticino', title: 'Energy Use Ordinance (RUEn), Art. 14 and Art. 36', url: 'https://m3.ti.ch/CAN/RLeggi/public/index.php/raccolta-leggi/legge/num/870' },
  { id: 'ti-solar-meldeverfahren', authority: 'Canton of Ticino', title: 'Implementing Ordinance to the Building Act (RLE): solar installations', url: 'https://m3.ti.ch/CAN/RLeggi/public/index.php/raccolta-leggi/legge/num/407' },
  { id: 'ti-rfer', authority: 'Canton of Ticino', title: 'Renewable Energy Fund Ordinance (RFER), Art. 24–25', url: 'https://m3.ti.ch/CAN/RLeggi/public/index.php/raccolta-leggi/legge/num/525' },
  { id: 'ti-fer-2026', authority: 'Canton of Ticino / AET', title: 'RFER 2026: minimum payment, RCP and CLE', url: 'https://www4.ti.ch/tich/area-media/comunicati/dettaglio-comunicato?NEWS_ID=256850' },
  { id: 'pronovo-eiv', authority: 'Pronovo / Swiss Confederation', title: 'One-off payment (EIV) for photovoltaic installations', url: 'https://pronovo.ch/de/foerderung/photovoltaik' },
  { id: 'pronovo-tariff-calculator', authority: 'Pronovo / Swiss Confederation', title: 'Photovoltaic tariff calculator', url: 'https://pronovo.ch/de/services/tarifrechner' },
] as const;

export const guide: CantonGuide = {
  id: 'tessin', path: '/en/solar-panels-ticino', canton: 'Ticino',
  title: 'Solar panels in Ticino | PvPro.ch', description: 'Compare solar quotes for your Ticino project, including cantonal FER rules and federal support.',
  h1: 'Solar panels in Ticino: support, on-site electricity and FER 2026',
  intro: ['In Ticino, new buildings and equivalent projects must generally generate renewable electricity. Alongside Pronovo federal support, there is also the cantonal CU-FV and, since 2026, new FER rules for feed-in.','For sound planning, the municipality, grid connection, Pronovo and FER must be handled separately. The steps below show which body is responsible for what and which deadlines must be met.'],
  quickFacts: [
    { value: '10 W/m² new ERA', label: 'Requirement for new buildings and equivalent projects', sourceIds: ['ti-ruen'] },
    { value: 'Obligation strictly <30 kW', label: 'This requirement never calls for 30 kW or more', sourceIds: ['ti-ruen'] },
    { value: '30 days in advance', label: 'Notification to the municipality if no building permit is needed', sourceIds: ['ti-solar-meldeverfahren'] },
    { value: '12 months', label: 'FER notification from actual grid connection', sourceIds: ['ti-rfer'] },
  ],
  ctaAfterSection: 'verfahren',
  sections: [
    { id: 'verfahren', title: 'Distinguishing the municipality, Pronovo and FER procedures', paragraphs: ['Start by clarifying the building-law classification with the municipality and handle incentive procedures separately. The sequence shown is a guide; it does not mean Pronovo and FER applications must invariably be made one after the other.'], sourceIds: ['ti-solar-meldeverfahren','ti-rfer','pronovo-eiv'], module: { kind: 'fer-procedure', title: 'Municipality, Pronovo and FER — three different procedures', intro: 'These six stages show who is responsible. Confirm specific submission dates with the bodies involved so that parallel tasks and deadlines are handled correctly.', items: [
      { title: '1. Classify the project', value: 'Building project', text: 'Determine whether it is a new building, extension or conversion treated as a new building, and establish the new ERA and any exemption.', detail: 'ERA, or energy reference area, is the relevant heated floor area.', sourceIds: ['ti-ruen'] },
      { title: '2. Contact the municipality', value: 'Municipality', text: 'Clarify whether a building permit is required or notification is sufficient.', detail: 'Notification means filing a notice instead of following a standard building permit procedure.', sourceIds: ['ti-solar-meldeverfahren'] },
      { title: '3. Install and connect to the grid', value: 'Installation + grid', text: 'After completing the appropriate building procedure, install the system and document the actual grid connection.', detail: 'The grid-connection date starts the twelve-month deadline for notifying FER of commissioning.', sourceIds: ['ti-rfer'] },
      { title: '4. Handle federal support', value: 'Pronovo', text: 'Assess Pronovo’s federal one-off payment as a separate procedure and identify the appropriate category for the installation.', detail: 'Pronovo and the cantonal CU-FV are different support routes.', sourceIds: ['pronovo-eiv','ti-rfer'] },
      { title: '5. Notify FER separately', value: 'FER', text: 'Notify FER of commissioning no later than twelve months after actual grid connection; late notification may be excluded for photovoltaics.', detail: 'The building notification to the municipality does not replace this FER notification.', sourceIds: ['ti-rfer'] },
      { title: '6. Define self-consumption and surplus', value: 'RCP + CLE', text: 'For CU-FER installations from 2026, assess whether an RCP or CLE is suitable and how surplus is handled under FER/AET terms.', detail: 'RCP is a grouping for self-consumption; CLE is a local electricity community.', sourceIds: ['ti-fer-2026'] },
    ] } },
    { id: 'eigenstrom', title: 'On-site electricity requirement for new buildings, extensions and conversions', paragraphs: [
      'For a new building, extension or conversion treated as a new building, generally plan 10 W of renewable electricity generation per m² of new ERA. ERA means the relevant heated floor area.',
      'Required capacity remains strictly below 30 kW: this provision never requires 30 kW or more. This caps the obligation, not a voluntarily larger installation.',
      'If electricity generation is difficult or disproportionate, weighted building energy demand may instead be reduced by a further 5 kWh per m² per year. If the obligation is partly met, this additional efficiency requirement falls proportionally.',
    ], bullets: ['Exemption for an extension with less than 50 m² of new ERA','Exemption for an extension of less than 20% of the existing part and no more than 1,000 m²','Exemptions for certain ISOS townscapes and centres','Exemptions for protected cultural property and its protection perimeter'], sourceIds: ['ti-ruen'], notice: { title: 'The former 300 m² rule has expired', text: 'The transitional provision in Art. 36 RUEn required solar energy on 50% of the roof or façade for certain new buildings with more than 300 m² of relevant area. It was expressly limited to 31 December 2025 and is not a current obligation for 2026.', status: 'important' } },
    { id: 'meldung', title: 'Notification procedure: inform the municipality at least 30 days in advance', paragraphs: [
      'Submit a permit-exempt solar installation to the municipality at least 30 days before construction starts. Exempt from a permit does not mean exempt from procedure: notification replaces a standard building permit procedure.',
      'Prepare complete documents: owner’s name and address, parcel number, site plan at 1:500 or 1:1000, panel model, total capacity, roof plan and sections. The municipality forwards the documentation to SPAAS within ten days.',
      'Do not confuse the municipality’s ten-day forwarding period with the deadline of at least 30 days before construction. First clarify with the municipality where the project is located whether notification is sufficient.',
    ], sourceIds: ['ti-solar-meldeverfahren'] },
    { id: 'cu-fv', title: 'Cantonal CU-FV in addition to federal support', paragraphs: [
      'Assess the cantonal CU-FV separately from Pronovo. For installations commissioned since 1 April 2022, the payment up to 30 kW is calculated at 50% of the relevant RU-CH reference.',
      'Above 30 kW, 50% of RU-CH applies to the first 30 kW and one third of RU-CH to the remaining capacity. The cantonal payment is capped at CHF 250,000.',
      'Federal bonuses for inclination or altitude and HEIV are not included in calculating the cantonal payment. Under RFER conditions, total cantonal payments may also cover no more than 50% of recognised investment costs.',
      'Notify FER of commissioning within twelve months of actual grid connection. For photovoltaics, late notification may result in rejection of the cantonal-payment application.',
    ], sourceIds: ['ti-rfer'] },
    { id: 'rmin', title: 'FER Rmin 2026 for CU-FER installations below 150 kW', paragraphs: [
      'Since 1 January 2026, a minimum payment applies to CU-FER installations below 150 kW if AET’s purchase price is below the applicable minimum. It therefore does not automatically replace the AET price in every case.',
      'The minimum is 4.0 ct./kWh below 30 kW. For installations from 30 to 150 kW without self-consumption, it is 5.0 ct./kWh.',
      'For installations from 30 to 150 kW with self-consumption, weighting applies: 4.0 ct./kWh for the capacity share of the first 30 kW and 0.0 ct./kWh for the remaining share. The resulting installation-specific blended value is relevant when comparing AET’s purchase price.',
    ], sourceIds: ['ti-fer-2026'] },
    { id: 'rcp-cle', title: 'RCP and CLE with CU-FER since 2026', paragraphs: ['Since 1 January 2026, CU-FER installations can participate in an RCP or CLE. An RCP is a grouping for self-consumption; a CLE is a local electricity community.','Internally consumed energy is not sold to AET. Only the surplus remains subject to the applicable FER/AET terms. Clarify metering, internal allocation and treatment of surpluses before implementation.'], sourceIds: ['ti-fer-2026'] },
    { id: 'pronovo', title: 'Pronovo is the separate federal procedure', paragraphs: ['Apply for or assess the federal one-off payment independently of cantonal FER. EIV means one-off payment: KLEIV covers installations below 100 kW, GREIV those from 100 kW; HEIV without self-consumption is available only to eligible installation categories.','The base payment has been CHF 0 since 1 April 2024. The actual payment depends on the individual tariff and conditions; it is not a guaranteed fixed percentage of project costs.'], sourceIds: ['pronovo-eiv','pronovo-tariff-calculator'] },
    { id: 'batterie', title: 'Battery without a confirmed separate FER household payment', paragraphs: ['Do not budget a general cantonal FER bonus for a typical private solar battery. RFER confirms no separate standard payment for a home battery added to a normal solar installation.','Any municipal offer would need separate evidence for the specific location. Have storage shown as a separate, clearly labelled item in the quote.'], sourceIds: ['ti-rfer'] },
    { id: 'kosten', title: 'Make costs and planning comparable', paragraphs: ['Compare quotes on the same technical and administrative basis. They should state the new ERA, planned capacity, roof and electrical work, grid connection, metering concept and optional storage.','List Pronovo, CU-FV and feed-in assumptions as separate items. This shows which amounts are part of the offer and which are established only after a separate procedure.','PvPro.ch enables property owners to compare up to three suitable solar quotes free of charge and without obligation.'], bullets: ['Capacity and module layout on the same basis','Municipal procedure and required documents','Grid connection, meter and self-consumption concept','Pronovo and CU-FV shown separately','Battery as a clearly identifiable option'], sourceIds: ['ti-ruen','ti-solar-meldeverfahren','ti-rfer','pronovo-eiv'] },
  ],
  faqs: [
    { question: 'Does Ticino have an on-site electricity requirement for new buildings?', answer: 'Yes, generally 10 W/m² of new energy reference area.', sourceIds: ['ti-ruen'] },
    { question: 'Does the former 300 m² rule still apply?', answer: 'No. Art. 36 was expressly limited to 31 December 2025.', sourceIds: ['ti-ruen'] },
    { question: 'Does the Canton of Ticino support PV in addition to Pronovo?', answer: 'Yes, through FER’s CU-FV under the statutory conditions.', sourceIds: ['ti-rfer','pronovo-eiv'] },
    { question: 'How large is the cantonal payment?', answer: 'Up to 30 kW, generally 50% of the relevant RU-CH; a tiered formula applies to larger installations.', sourceIds: ['ti-rfer'] },
    { question: 'By when must commissioning be notified to FER?', answer: 'No later than twelve months after grid connection.', sourceIds: ['ti-rfer'] },
    { question: 'Can a CU-FER installation participate in a CLE?', answer: 'Yes, since 1 January 2026.', sourceIds: ['ti-fer-2026'] },
  ], sources: [...sources],
};