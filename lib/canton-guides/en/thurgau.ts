import type { CantonGuide } from '../types';

const sources = [
  { id: 'tg-env', authority: 'Canton of Thurgau', title: 'Energy Use Ordinance (ENV), current version', url: 'https://www.rechtsbuch.tg.ch/app/de/texts_of_law/731.11' },
  { id: 'tg-eng-revision', authority: 'Grand Council of the Canton of Thurgau', title: 'Business 24/GE 7/146: amendment of the Energy Use Act, status completed', url: 'https://parlament.tg.ch/de/geschaefte/?search=done&length=10&title=Energienutzung&legislatur=2024-2028' },
  { id: 'tg-solar-meldung', authority: 'Canton of Thurgau', title: 'Planning and Building Ordinance § 50b – notification requirement for solar installations', url: 'https://www.rechtsbuch.tg.ch/app/de/texts_of_law/700.1' },
  { id: 'tg-foerderprogramm', authority: 'Canton of Thurgau, Energy Office', title: 'Electronic applications and energy incentive portal', url: 'https://energie.tg.ch/hauptrubrik-2/wie-gehe-ich-vor.html/10651' },
  { id: 'ch-pronovo-pv', authority: 'Pronovo Ltd on behalf of the Swiss Confederation', title: 'One-off payment for photovoltaic installations', url: 'https://pronovo.ch/de/foerderung/photovoltaik' },
  { id: 'pronovo-tariff-calculator', authority: 'Pronovo Ltd on behalf of the Swiss Confederation', title: 'Photovoltaic tariff calculator', url: 'https://pronovo.ch/de/services/tarifrechner' },
] as const;

export const guide: CantonGuide = {
  id: 'thurgau', path: '/en/solar-panels-thurgau', canton: 'Thurgau',
  title: 'Solar panels in Thurgau | PvPro.ch', description: 'Compare up to three free quotes from vetted solar installers for your photovoltaic project in Thurgau.',
  h1: 'Solar panels in Thurgau: on-site electricity requirement and 2026 rules for new buildings',
  intro: [
    'A new building in Thurgau must generally provide 30 W of on-site electricity capacity per m² of energy reference area. The energy reference area (ERA) is the relevant heated floor area of the building.',
    'If less on-site electricity capacity is installed, the building’s energy demand must be reduced further. Small extensions may be exempt; the specific project status is decisive for notification, incentives and the legislative revision.',
  ],
  quickFacts: [
    { value: '30 W/m² ERA', label: 'On-site electricity capacity for new buildings', sourceIds: ['tg-env'] },
    { value: '5 or 10 kWh/m²/year', label: 'Additional reduction with lower capacity', sourceIds: ['tg-env'] },
    { value: '<50 m²', label: 'One exemption threshold for small extensions', sourceIds: ['tg-env'] },
    { value: '20 days', label: 'Notification before construction for installations under § 50b', sourceIds: ['tg-solar-meldung'] },
  ],
  ctaAfterSection: 'effizienzloesung',
  sections: [
    { id: 'effizienzloesung', title: '30 W of on-site electricity or additional building efficiency', paragraphs: [
      'For a new building, start by planning 30 W of on-site electricity capacity per m² ERA. Meeting this value fulfils the requirement; if capacity is lower, an additional energy requirement applies instead of a substitute charge.',
      'The additional reduction concerns energy demand for heating, hot water, cooling and ventilation. It is not offset against the electricity generated: depending on installed on-site electricity capacity, the building must reduce the relevant energy demand by a further 5 or 10 kWh per m² per year.',
    ], sourceIds: ['tg-env'], module: { kind: 'efficiency-decision', title: '30 W or the efficiency option?', intro: 'Compare planned on-site electricity capacity per m² ERA with the three levels and, where necessary, document the additional efficiency in the energy compliance report.', items: [
      { title: 'Full on-site electricity capacity', value: '30 W/m²', text: 'At 30 W of on-site electricity capacity per m² of energy reference area, the requirement for a new building is met.', detail: 'No additional reduction under the efficiency option is required at this level.', sourceIds: ['tg-env'] },
      { title: 'Reduced on-site electricity capacity', value: '15 to <30 W/m²', text: 'At least 15 but less than 30 W/m² requires an additional 5 kWh/m² annual reduction in energy demand for heating, hot water, cooling and ventilation.', detail: 'The relevant factor is additional building efficiency, not a calculated comparison with electricity generation.', sourceIds: ['tg-env'] },
      { title: 'On-site electricity capacity below 15 W/m²', value: '<15 W/m²', text: 'Below 15 W/m², energy demand for heating, hot water, cooling and ventilation must be reduced by an additional 10 kWh/m² per year.', detail: 'The chosen option and planned on-site electricity capacity should be stated clearly in the energy compliance report.', sourceIds: ['tg-env'] },
    ] } },
    { id: 'erweiterungen', title: 'Small extensions may be exempt from the requirement', paragraphs: [
      'For an extension, check the newly created ERA before applying the new-building requirement. The exemption applies if the new energy reference area is less than 50 m².',
      'An exemption is also possible if the new ERA amounts to no more than 20% of the existing ERA and is also no more than 1,000 m². Both conditions must be met under this second option.',
    ], sourceIds: ['tg-env'] },
    { id: 'oeffentliche-bauten', title: 'The 85% rule applies to public authorities', paragraphs: [
      'For a private home, do not treat the 85% global-radiation rule as a general obligation whenever a roof is renovated. The current provisions in § 4a to § 4d fall under the public sector’s duty to lead by example.',
      'For new buildings, major conversions or renovations, and comprehensive roof renovations by the canton, municipalities and other public-law bodies and institutions, the solar potential of suitable surfaces from 85% global radiation is relevant. This requirement for public buildings does not automatically become a general obligation for private roofs.',
    ], sourceIds: ['tg-env'] },
    { id: 'revision', title: 'Assess the legislative revision for the specific project', paragraphs: [
      'Use the version actually in force at the time of the project for the building application. On 2 September 2026, the Grand Council completed deliberations on the revision of the Energy Use Act and published a final version.',
      'Completion of parliamentary deliberations alone does not prove entry into force. Before submitting the project, therefore check the cantonal statute collection to establish which provisions apply.',
    ], sourceIds: ['tg-eng-revision', 'tg-env'], notice: { title: 'Revision completed on 2 September 2026', text: 'For a building project, the decisive law is not simply the Grand Council’s final version, but the law actually in force.', status: 'important' } },
    { id: 'meldung', title: 'Check the notification requirement 20 days before construction', paragraphs: [
      'Clarify with the municipality whether your project is exempt from a permit and falls under § 50b. Notification replaces a standard building permit procedure: solar installations exempt from a permit under federal law and larger than 35 m² must be notified 20 days before construction begins.',
      'The notification must include a description of the installation and its integration. For installations in employment zones, notice of area and capacity is sufficient under the stated conditions; whether this simplified information is sufficient for a particular project should be clarified with the municipality in advance.',
    ], sourceIds: ['tg-solar-meldung'] },
    { id: 'foerderung', title: 'Check incentive applications separately before construction', paragraphs: [
      'Submit an application for cantonal programme measures before construction or installation work begins. Current measures and conditions must be checked directly in the cantonal incentive portal; no flat cantonal amount for a standard PV installation can be inferred from it.',
      'Standard federal PV support is provided through Pronovo’s one-off payment (EIV). KLEIV covers installations below 100 kW, GREIV those from 100 kW; HEIV applies only to the specified categories without self-consumption. The base payment has been CHF 0 since 1 April 2024, while capacity, installation type and possible bonuses determine the individual payment. No fixed support percentage is guaranteed.',
      'Whether battery storage currently receives cantonal support, and under which conditions, should also be checked in the incentive portal before the project starts. Conditions previously published for the 2021 programme are not reliable evidence for 2026.',
    ], sourceIds: ['tg-foerderprogramm', 'ch-pronovo-pv', 'pronovo-tariff-calculator'] },
    { id: 'kosten', title: 'Compare costs and planning on the same basis', paragraphs: [
      'Compare quotes using the same ERA, planned on-site electricity capacity and selected efficiency level. Modules, inverter, mounting structure, scaffolding, electrical work, grid connection and optional storage should also be itemised clearly.',
      'Keep federal support, possible cantonal programme measures and the price before incentive deductions separate. This shows which assumptions are included in the quote and which payments still require confirmation.',
      'PvPro.ch enables property owners to compare up to three suitable solar quotes free of charge and without obligation.',
    ], bullets: ['Energy reference area and applied W/m²', 'Evidence for the selected efficiency option', 'Installation, scaffolding and electrical work', 'Incentive assumptions separate from the installation price'], sourceIds: ['tg-env', 'tg-foerderprogramm', 'ch-pronovo-pv', 'pronovo-tariff-calculator'] },
  ],
  faqs: [
    { question: 'How much on-site electricity must a new building in Thurgau generate?', answer: '30 W/m² of energy reference area.', sourceIds: ['tg-env'] },
    { question: 'Can I install less PV capacity?', answer: 'Yes, if energy demand is reduced further under the alternative option.', sourceIds: ['tg-env'] },
    { question: 'Does the 85% global-radiation rule automatically apply to every private roof?', answer: 'Not as a general statement under the current § 4c rule; that rule forms part of the public sector’s duty to lead by example.', sourceIds: ['tg-env'] },
    { question: 'How early must a permit-exempt solar installation be notified?', answer: 'For installations covered by § 50b, 20 days before construction begins.', sourceIds: ['tg-solar-meldung'] },
    { question: 'Is the September 2026 energy-law revision already binding?', answer: 'The Grand Council has completed deliberations; for a specific project, the version of the law actually in force is decisive.', sourceIds: ['tg-eng-revision', 'tg-env'] },
  ], sources: [...sources],
};