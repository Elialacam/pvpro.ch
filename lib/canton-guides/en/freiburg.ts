import type { CantonGuide } from '../types';

const sources = [
  { id: 'fr-solar-permit', authority: 'Canton of Fribourg / Etat de Fribourg', title: 'Solar installations – building permits', url: 'https://www.fr.ch/territoire-amenagement-et-constructions/permis-de-construire-et-autorisations/permis-de-construire/permis-de-construire-installations-solaires' },
  { id: 'fr-energy-law', authority: 'Canton of Fribourg', title: 'Energy Regulations (SGF 770.11), Article 25', url: 'https://bdlf.fr.ch/app/de/texts_of_law/770.11' },
  { id: 'fr-energy-subsidies', authority: 'Canton of Fribourg / Etat de Fribourg', title: 'Energy subsidy programme', url: 'https://www.fr.ch/deef/sde/programmes-de-subventions-en-matiere-denergie' },
  { id: 'fr-pronovo-faq', authority: 'Pronovo AG on behalf of the Swiss Confederation', title: 'Frequently asked questions on the one-off payment (EIV) and Swiss solar support', url: 'https://pronovo.ch/de/foerderung/photovoltaik/haeufige-fragen/' },
] as const;

export const guide: CantonGuide = {
  id: 'freiburg', path: '/en/solar-panels-fribourg', canton: 'Fribourg',
  title: 'Solar panels in Fribourg: duties and permits | PvPro.ch',
  description: 'Photovoltaics in the Canton of Fribourg: on-site electricity for new buildings, Pronovo support and notification procedures for roofs and façades.',
  h1: 'Solar panels in the Canton of Fribourg: what owners need to know in 2026',
  intro: [
    'A new building in the Canton of Fribourg must produce some of its own electricity. This is not a general PV requirement for every existing home.',
    'Since 2026, sufficiently integrated roof and façade installations may qualify for notification instead of a full building application. This guide clearly explains the on-site electricity rule, deadline, support and main exemptions.',
  ],
  quickFacts: [
    { value: '10 W/m²', label: 'Minimum output for on-site electricity in an affected new building', sourceIds: ['fr-energy-law'] },
    { value: '30 kW', label: 'Maximum output that may be required under the new-building rule', sourceIds: ['fr-energy-law'] },
    { value: '30 days', label: 'General deadline for the relevant notification before construction starts', sourceIds: ['fr-solar-permit'] },
    { value: '2026', label: 'Since this year, suitable façade systems can be assessed through notification', sourceIds: ['fr-solar-permit'] },
  ],
  sections: [
    { id: 'neubau', title: 'Must new buildings in Fribourg produce their own electricity?', paragraphs: [
      'Yes. New buildings are required to produce electricity on site. In practice this is often achieved with photovoltaics, but the law does not impose a PV system across the board on every house.',
      'The minimum is 10 W/m² of energy reference area (ERA). The ERA is the building area used for the energy calculation; it is not simply the same as the available roof area. No more than 30 kW may be required in total.',
      'Certain small extensions are exempt. The statutory exemption applies to an extension of less than 50 m², or one amounting to no more than 20% of the existing building and no more than 1,000 m²; the specific project must be checked in the energy compliance documentation.',
    ], sourceIds: ['fr-energy-law'], notice: { title: 'No general PV requirement for every home', text: 'Fribourg’s rule concerns on-site electricity production in new buildings. It does not automatically require an existing home to be retrofitted with a photovoltaic system.', status: 'important' }, module: { kind: 'project-check', title: 'What applies to my project?', intro: 'Check these two questions in sequence and independently: first the on-site electricity rule, then the correct procedure for the installation.', items: [
      { title: '1. Is it a new building?', text: 'Yes: check on-site electricity production—at least 10 W/m² ERA; by law no more than 30 kW may be required. No: this new-building rule does not create a general on-site electricity requirement for an existing home.', detail: 'Small extensions may be exempt: less than 50 m², or no more than 20% of the existing building and no more than 1,000 m².', sourceIds: ['fr-energy-law'] },
      { title: '2. Is the roof or façade sufficiently integrated?', text: 'Yes: check the notification procedure and generally send the notification to the municipality 30 days before construction starts. No: clarify the building permit with the municipality; it may still be required for a protected property or sensitive townscape.', detail: 'Since 1 January 2026, sufficiently integrated façade installations may also be notified subject to the procedure’s conditions.', sourceIds: ['fr-solar-permit'] },
    ] } },
    { id: 'bewilligung', title: 'Notification or building permit?', paragraphs: [
      'For many sufficiently integrated solar projects, notification may be enough instead of a full building application. Depending on the case, this applies to roof installations and, since 1 January 2026, suitable façade installations.',
      'A notification is a simplified communication to the municipality, not automatic approval for every project. A building permit may be required for protected properties, sensitive townscapes or an installation that is not sufficiently integrated.',
      'Under the relevant façade rule, notification is generally made 30 days before construction starts. If an ordinary building procedure is required, applications in the Canton of Fribourg are submitted through FRIAC, the cantonal online building-application portal.',
    ], bullets: ['Notification procedure: submit project documents to the municipality on time.', 'Protected property or sensitive townscape: clarify the building permit early with the competent authority.', 'Ordinary building application: use FRIAC, the cantonal online portal.'], sourceIds: ['fr-solar-permit'] },
    { id: 'foerderung', title: 'Solar support in the Canton of Fribourg', paragraphs: [
      'Support for a photovoltaic system itself is generally provided by the Swiss Confederation through Pronovo. According to Pronovo’s FAQ, the standard one-off payment (EIV) is available from a minimum output of 2 kW; the exact amount depends on the project, output, type of system and support model.',
      'Additional federal bonuses do not form an automatic total. Depending on the project, examples include an inclination-angle bonus from 75°, a parking-area bonus for qualifying systems from 100 kW, or, since 2026, a winter-electricity bonus under special conditions for systems from 100 kW. Each bonus has its own conditions and cannot simply be added to other contributions.',
      'The cantonal Buildings Programme is separate. It must not be presented as a general Fribourg subsidy for every PV installation; a specific building measure and its application must be assessed separately against the official conditions.',
    ], sourceIds: ['fr-pronovo-faq', 'fr-energy-subsidies'], notice: { title: 'Keep federal support and the cantonal programme separate', text: 'Pronovo assesses federal PV support. Cantonal building programmes may support their own energy measures, but they are not a flat PV contribution for every home.', status: 'important' } },
    { id: 'begriffe', title: 'The key terms, simply explained', paragraphs: [
      'W/m² means watts per square metre. The 10 W/m² refers to the new building’s energy reference area and describes the required output for on-site electricity production.',
      'ERA means energy reference area. It is the calculated building area used for energy requirements, not automatically the area available for solar modules.',
      'A notification procedure is the simplified notification of a project to the municipality. A building permit is the ordinary procedure when the project requires closer examination because of design, conservation or other reasons.',
    ], sourceIds: ['fr-energy-law', 'fr-solar-permit'] },
    { id: 'kosten', title: 'What does a solar installation cost here?', paragraphs: [
      'The canton does not publish a fixed price for solar installations. The roof, system size, electrical work and equipment are decisive.',
      'Compare several quotes for the same project. This shows whether roof work, connection, storage and the requested output have each been included fully and transparently.',
    ], bullets: ['Roof area, roof shape and usable module area', 'System size and output', 'Scaffolding, access and site work', 'Electrical work, meter and grid connection', 'Inverter', 'Battery storage and charging infrastructure', 'Self-consumption, heat pump and electric car', 'Installer, scope of services and warranties'], sourceIds: ['fr-pronovo-faq', 'fr-solar-permit'] },
    { id: 'fuer-wen', title: 'Who should be particularly interested in solar in Fribourg?', paragraphs: [
      'Owners of a new building should plan especially early because on-site electricity production belongs in the energy compliance documentation. A larger suitable roof area, or an already planned roof or façade renovation, can also be the right time for coordinated planning.',
      'Solar is also a good fit for a household with a heat pump or electric car if self-consumption and the connection are planned together. Whether the system makes sense depends on the roof, consumption, procedure and specific quote; no fixed returns can be inferred.',
    ], sourceIds: ['fr-energy-law', 'fr-solar-permit', 'fr-pronovo-faq'] },
  ],
  faqs: [
    { question: 'Is there a solar requirement in the Canton of Fribourg?', answer: 'New buildings must produce electricity on site, but there is no general PV requirement for every existing home. In practice, photovoltaics can fulfil the rule. Small extensions may be exempt below the statutory thresholds.', sourceIds: ['fr-energy-law'] },
    { question: 'How much electricity must a new building produce itself?', answer: 'An affected new building must provide at least 10 W/m² of energy reference area for on-site electricity production. No more than 30 kW may be required in total. The energy reference area is the building area relevant to the energy calculation.', sourceIds: ['fr-energy-law'] },
    { question: 'What does 10 W/m² mean?', answer: 'W/m² means watts per square metre. The 10 W/m² is applied to the new building’s energy reference area, not simply to usable roof area. This determines the output required for on-site electricity production.', sourceIds: ['fr-energy-law'] },
    { question: 'Are small additions and extensions affected?', answer: 'Certain small extensions are exempt. The statutory exemption concerns an extension of less than 50 m², or no more than 20% of the existing building and no more than 1,000 m². The exact classification must be checked for the specific construction project.', sourceIds: ['fr-energy-law'] },
    { question: 'Must I submit a building application for a PV system?', answer: 'Not always. A sufficiently integrated installation may qualify for notification instead of a full building application. A building permit may be required for protected properties, sensitive townscapes or insufficient integration; an ordinary application is submitted through FRIAC.', sourceIds: ['fr-solar-permit'] },
    { question: 'What changed for façades in 2026?', answer: 'Since 1 January 2026, sufficiently integrated solar installations on façades may also use a notification procedure subject to the applicable conditions. This does not automatically apply to every façade. Protected properties and sensitive townscapes may still require a building permit.', sourceIds: ['fr-solar-permit'] },
    { question: 'How early must I notify a qualifying façade installation?', answer: 'Under this procedure, notification is generally submitted to the municipality 30 days before construction starts. Integration, protection status and complete documents should be clarified first. The deadline does not replace an additional building permit when one is required.', sourceIds: ['fr-solar-permit'] },
    { question: 'What support is available for a solar installation in Fribourg?', answer: 'PV investment support itself is generally provided by the Swiss Confederation through Pronovo. According to Pronovo’s FAQ, the standard one-off payment is available from 2 kW, while the exact support depends on the project and federal conditions. Cantonal building programmes are separate and are not a general PV subsidy.', sourceIds: ['fr-pronovo-faq', 'fr-energy-subsidies'] },
    { question: 'Which additional federal bonuses may be relevant?', answer: 'Depending on the project, optional federal bonuses with their own conditions include an inclination-angle bonus from 75°, a parking-area bonus for qualifying systems from 100 kW and, since 2026, a winter-electricity bonus under special conditions from 100 kW. These bonuses are not guaranteed and must not be combined into a flat total.', sourceIds: ['fr-pronovo-faq'] },
    { question: 'What applies to a protected building?', answer: 'Protected properties and sensitive townscapes may still require a building permit. Simplified notification for a sufficiently integrated installation is therefore not automatically possible. Clarify the protection status early with the municipality or competent building authority.', sourceIds: ['fr-solar-permit'] },
  ],
  sources: [...sources],
};