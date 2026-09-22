import type { CantonGuide } from '../types';

const sources = [
  { id: 'ur-neues-energierecht', authority: 'Canton of Uri', title: 'New energy legislation from 1 October 2026', url: 'https://www.ur.ch/energie/1534' },
  { id: 'ur-rechtsbuch', authority: 'Canton of Uri', title: 'Uri statute book: energy legislation', url: 'https://www.ur.ch/_doc/449221' },
  { id: 'ur-solarmeldung', authority: 'Canton of Uri', title: 'Notification of a solar installation', url: 'https://www.ur.ch/dienstleistungen/4641' },
  { id: 'ur-foerderprogramm-2026', authority: 'Canton of Uri', title: 'Uri Energy Incentive Programme 2026', url: 'https://www.ur.ch/mmdirektionen/132233' },
  { id: 'pronovo-pv', authority: 'Pronovo Ltd on behalf of the Swiss Confederation', title: 'One-off payment for photovoltaic installations', url: 'https://pronovo.ch/de/foerderung/photovoltaik' },
] as const;

export const guide: CantonGuide = {
  id: 'uri', path: '/en/solar-panels-uri', canton: 'Uri',
  title: 'Solar panels in Uri | PvPro.ch',
  description: 'Compare up to three free quotes from vetted solar installers for your photovoltaic project in Uri.',
  h1: 'Solar panels in the canton of Uri: new rules from 1 October 2026',
  intro: [
    'Uri is undergoing a change of law in 2026. The temporary cantonal transitional rule ended on 31 December 2025; from 1 October 2026, new Uri requirements apply to large new buildings, extensions and substantial roof renovations.',
    'For a specific project, the project type, chargeable building area and relevant date must therefore be assessed together. The former CHF 2,500 per missing kW is not a confirmed substitute charge under the new law.',
  ],
  quickFacts: [
    { value: '01.10.2026', label: 'New Uri energy law enters into force', sourceIds: ['ur-neues-energierecht'] },
    { value: '40 W/m²', label: 'Solar capacity for new buildings from 300 m²', sourceIds: ['ur-rechtsbuch'] },
    { value: '20 W/m²', label: 'Requirement for covered extensions and roof renovations', sourceIds: ['ur-rechtsbuch'] },
    { value: 'CHF 1,000 + 250/kWp', label: 'Payment for eligible winter-solar PV', sourceIds: ['ur-foerderprogramm-2026'] },
  ],
  ctaAfterSection: 'rechtswechsel',
  sections: [
    { id: 'rechtswechsel', title: 'Which rules apply when in 2026?', paragraphs: [
      'The temporary cantonal rule, limited to the end of 2025, with 20 W/m² and a substitute charge of CHF 2,500 per missing kW must not be carried forward into 2026. Until the new Uri law takes effect, the federal framework in force since 1 January 2025 for new buildings larger than 300 m² must also be considered in 2026.',
      'From 1 October 2026, the new cantonal law requires 40 or 20 W/m² of chargeable building area, depending on the project. Existing installations count provided their capacity has not already been used to fulfil another statutory obligation.',
    ], sourceIds: ['ur-neues-energierecht', 'ur-rechtsbuch'],
      module: { kind: 'uri-transition', title: 'Timeline and project decision', intro: 'Read the three time periods first, then identify the category for your building project.', items: [
        { title: 'Until 31 December 2025', value: 'Old rule ended', text: 'The temporary transitional rule, including the substitute charge that applied at the time, has expired.', sourceIds: ['ur-rechtsbuch'] },
        { title: '1 January to 30 September 2026', value: 'Consider federal law', text: 'The federal solar framework must be checked for new buildings over 300 m²; the new Uri rule does not yet apply.', sourceIds: ['ur-neues-energierecht'] },
        { title: 'From 1 October 2026', value: 'New Uri law', text: 'The energy legislation approved by Uri voters on 8 March 2026 enters into force.', sourceIds: ['ur-neues-energierecht'] },
        { title: 'New building', value: '≥300 m²: 40 W/m²', text: 'For at least 300 m² of chargeable building area, 40 W of solar capacity per m² is required.', sourceIds: ['ur-rechtsbuch'] },
        { title: 'Extension', value: '>300 m²: 20 W/m²', text: 'If the total chargeable building area exceeds 300 m² after the extension, 20 W/m² applies to the entire area.', sourceIds: ['ur-rechtsbuch'] },
        { title: 'Substantial roof renovation', value: '≥300 m²: 20 W/m²', text: 'If the roof is renovated externally and this triggers thermal-insulation requirements, buildings of 300 m² or more are subject to a total of 20 W/m².', sourceIds: ['ur-rechtsbuch'] },
      ] },
      notice: { title: 'Do not assume a new substitute charge', text: 'The former CHF 2,500/kW charge belonged to the rule that expired at the end of 2025. No equivalent charge is confirmed for the new obligation from 1 October 2026.', status: 'important' },
    },
    { id: 'erfuellung', title: 'Capacity limit and alternative compliance', paragraphs: [
      'The required solar capacity is limited by the building’s existing electrical connection capacity. Have the connection capacity, chargeable building area and any existing solar capacity not already credited elsewhere documented in the energy compliance report.',
      'The obligation can be met with Minergie certification. Subject to the stated conditions, an additional improvement to the building envelope is also possible: the QH,li limit for space-heating demand must be improved by 5 kWh per m² per year compared with the standard requirement.',
    ], sourceIds: ['ur-rechtsbuch'] },
    { id: 'foerderung', title: 'Winter-solar PV and integrated solar façades', paragraphs: [
      'Uri’s 2026 programme supports winter-solar PV on existing buildings from 2 kWp where modules are inclined at 60 to 90 degrees. It provides a CHF 1,000 base payment plus CHF 250 per kWp, up to CHF 50,000 per installation. New buildings and the mere replacement of an existing installation are excluded.',
      'CHF 100,000 is available for this winter-electricity measure. The full energy programme contains around CHF 2.1 million for various measures, not photovoltaics alone. Once a complete application has been submitted, work may in some cases begin at the applicant’s own risk before the final decision.',
      'For a building-envelope renovation with an integrated PV façade inclined at 60 to 90 degrees, CHF 400/m² of renovated area is available. The winter-electricity payment and this façade payment cannot be combined. The complete application must be submitted before installation starts; for a payment of CHF 10,000 or more, the buildings programme requires a GEAK Plus.',
      'For work on the building envelope, the incentive payment must amount to at least CHF 3,000. GEAK Plus is the cantonal building energy certificate with an advisory report.',
      'Support for bidirectional charging stations is not a general bonus for stationary home batteries. A standard PV installation can be assessed separately for federal support from Pronovo.',
    ], sourceIds: ['ur-foerderprogramm-2026', 'pronovo-pv'] },
    { id: 'verfahren', title: 'Clarify the solar installation with the municipality before construction', paragraphs: [
      'Submit the cantonal “Notification of a solar installation” form to the responsible municipal building authority. The installation type and location determine whether notification is sufficient or a building application is required.',
      'No uniform cantonal deadline of 20 or 30 days is reliably confirmed for this Uri form. Agree the submission and construction-start dates directly with the municipality, and do not start on the basis of a deadline taken from another canton.',
    ], sourceIds: ['ur-solarmeldung'] },
  ],
  faqs: [
    { question: 'Does the CHF 2,500 substitute charge per missing kW still apply in Uri in 2026?', answer: 'No. This charge belonged to the temporary rule that ended on 31 December 2025.', sourceIds: ['ur-rechtsbuch'] },
    { question: 'What requirement applies to a large new building from 1 October 2026?', answer: 'From 300 m² of chargeable building area, 40 W/m² is required.', sourceIds: ['ur-rechtsbuch'] },
    { question: 'Can an existing PV installation be credited?', answer: 'Yes, provided its capacity does not already fulfil another statutory obligation.', sourceIds: ['ur-rechtsbuch'] },
    { question: 'How is winter-solar PV supported in 2026?', answer: 'On existing buildings, from at least 2 kWp and at an inclination of 60 to 90 degrees, with CHF 1,000 plus CHF 250/kWp, up to CHF 50,000.', sourceIds: ['ur-foerderprogramm-2026'] },
    { question: 'Is there a fixed 20- or 30-day deadline for Uri solar notifications?', answer: 'No such uniform cantonal deadline is confirmed; the date must be agreed with the municipal building authority.', sourceIds: ['ur-solarmeldung'] },
  ],
  sources: [...sources],
};