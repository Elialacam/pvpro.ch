import type { CantonGuide } from '../types';

const sources = [
  { id: 'sg-energy-law', authority: 'Canton of St. Gallen', title: 'sGS 741.1 Energy Act, Art. 5b: on-site electricity generation in new buildings', url: 'https://www.gesetzessammlung.sg.ch/app/de/texts_of_law/741.1' },
  { id: 'sg-energy-ordinance', authority: 'Canton of St. Gallen', title: 'sGS 741.11 Energy Ordinance: calculation and substitute levy', url: 'https://www.gesetzessammlung.sg.ch/app/de/texts_of_law/741.11' },
  { id: 'sg-solar-procedure', authority: 'Canton of St. Gallen', title: 'Notifying solar installations: cantonal form and guidance', url: 'https://www.sg.ch/umwelt-natur/energie/formulare-und-hilfsmittel/solaranlagen-melden.html' },
  { id: 'sg-solar-fire-safety', authority: 'Canton of St. Gallen', title: 'Guidance on the notification form: fire safety for battery storage', url: 'https://www.sg.ch/content/dam/sgch/umwelt-natur/energie/20260318_Erlaeuterungen_Meldeformular_Solaranlagen.pdf' },
  { id: 'sg-energy-funding', authority: 'Canton of St. Gallen', title: 'Special credit to fund energy incentives from 2024 to 2030', url: 'https://www.sg.ch/news/sgch_allgemein/2023/11/klima--kitas--kreisgericht--kanton-empfiehlt-dreimal-ja.html' },
  { id: 'sg-agricultural-battery-funding', authority: 'Canton of St. Gallen, Agricultural Credit Cooperative', title: 'Fully allocated contributions for battery storage in agriculture', url: 'https://www.sg.ch/news/sgch_landwirtschaftliche-kreditgenossenschaft/2025/12/aenderungen-bei-gewaehrung-von-beitraegen-und-investitionskredit.html' },
  { id: 'stadt-sg-energy-fund', authority: 'City of St. Gallen', title: 'Energy fund: support for photovoltaic installations from 2025', url: 'https://www.stadt.sg.ch/news/stsg_medienmitteilungen/2024/06/foerderung-von-photovoltaik-anlagen-sinkt-per-2025.html' },
  { id: 'pronovo-eiv', authority: 'Pronovo', title: 'One-off payment for photovoltaic installations: KLEIV, GREIV and HEIV', url: 'https://pronovo.ch/de/foerderung/photovoltaik' },
  { id: 'pronovo-tariff-calculator', authority: 'Pronovo', title: 'Photovoltaic tariff calculator', url: 'https://pronovo.ch/de/services/tarifrechner' },
] as const;

export const guide: CantonGuide = {
  id: 'st-gallen', path: '/en/solar-panels-st-gallen', canton: 'St. Gallen',
  title: 'Solar panels in St. Gallen | PvPro.ch',
  description: 'Compare up to three free quotes from vetted solar installers for your photovoltaic project in the canton of St. Gallen.',
  h1: 'Solar panels in the canton of St. Gallen: on-site generation requirement and substitute levy in 2026',
  intro: [
    'New buildings in the canton of St. Gallen have been subject to an on-site electricity requirement since 1 July 2021. It can be met with photovoltaics, additional energy efficiency, a shared ZEV solution or a substitute levy.',
    'For the PV option, 10 W per m² of energy reference area (ERA) is required, subject to a maximum of 30 kW per building. The ERA is the heated floor area relevant to the energy calculation; 30 kW only caps the requirement, not the capacity installed voluntarily.',
  ],
  quickFacts: [
    { value: '10 W/m² ERA', label: 'Capacity required for PV compliance', sourceIds: ['sg-energy-law', 'sg-energy-ordinance'] },
    { value: 'Max. 30 kW', label: 'Required capacity per building', sourceIds: ['sg-energy-law', 'sg-energy-ordinance'] },
    { value: 'CHF 2,700/kWp', label: 'Substitute levy on the required capacity', sourceIds: ['sg-energy-ordinance'] },
    { value: '30 days', label: 'Period under the notification procedure', sourceIds: ['sg-solar-procedure'] },
  ],
  ctaAfterSection: 'erfuellung',
  sections: [
    {
      id: 'erfuellung', title: 'Four ways to comply',
      paragraphs: ['Choose one of the four permitted solutions for the new building’s energy compliance documentation and identify it clearly in the building project. These are alternatives; they do not have to be completed in sequence.'],
      sourceIds: ['sg-energy-law', 'sg-energy-ordinance'],
      module: {
        kind: 'compliance-options', title: 'Four ways to comply', intro: 'Compare the four independent options in light of the building and its intended use.',
        items: [
          { title: 'On-site electricity from photovoltaics', value: '10 W/m² ERA, max. 30 kW', text: 'The required PV capacity is 10 W per m² of energy reference area and is capped at 30 kW per building.', detail: 'The cap applies to the required capacity. A larger installation may still be installed voluntarily.', sourceIds: ['sg-energy-law', 'sg-energy-ordinance'] },
          { title: 'Additional energy efficiency', value: '−5 kWh/m² per year', text: 'Instead of generating electricity on site, weighted energy demand may be reduced by an additional 5 kWh per m² per year.', detail: 'The efficiency solution must be documented in the energy compliance evidence for the specific building project.', sourceIds: ['sg-energy-law', 'sg-energy-ordinance'] },
          { title: 'Shared self-consumption in a ZEV', value: 'Joint compliance', text: 'The requirement can be met with a compliant solution within a grouping for self-consumption.', detail: 'A ZEV organises shared generation and self-consumption among several participants.', sourceIds: ['sg-energy-law', 'sg-energy-ordinance'] },
          { title: 'Substitute levy', value: 'CHF 2,700 per required kWp', text: 'Instead of the prescribed on-site generation solution, a substitute levy of CHF 2,700 per kWp of required capacity may be chosen.', detail: 'The choice is declared in the building application; the levy is collected with the building permit fees.', sourceIds: ['sg-energy-law', 'sg-energy-ordinance'] },
        ],
      },
    },
    { id: 'erweiterungen', title: 'Small extensions may be exempt', paragraphs: ['For an extension, first check the newly created ERA. The requirement does not apply if this area is below 50 m².', 'An exemption also applies if the new ERA is no more than 20% of the existing ERA and no more than 1,000 m² at the same time. Both thresholds must be met for this second exemption.'], sourceIds: ['sg-energy-ordinance'] },
    {
      id: 'meldung', title: 'Clarify whether notification or a building permit is required',
      paragraphs: [
        'Notify the competent authority of a sufficiently adapted roof or façade installation 30 days before the planned work. The notification procedure means giving notice instead of using a standard building permit procedure.',
        'If the authority does not advise within 30 days that the project is being transferred to an ordinary or simplified procedure, or that it has been rejected, the notified project may proceed. Free-standing installations, certain installations along roads, and projects on protected buildings or in protected areas still require a building permit.',
      ],
      sourceIds: ['sg-solar-procedure'],
    },
    {
      id: 'batterie', title: 'Classify battery storage by capacity',
      paragraphs: [
        'For storage, first clarify its capacity and whether the solar installation itself only requires notification. Where a solar installation is merely notified, a battery up to 100 kWh needs no special fire safety permit; above 100 kWh, a fire safety permit is required through the municipality or the St. Gallen Building Insurance institution (GVSG).',
        'This fire safety rule is not an incentive programme. No general cantonal payment for battery storage in detached houses is specified. Funding under the special agricultural battery programme has been exhausted; no new applications have been considered there since 1 January 2026.',
      ],
      sourceIds: ['sg-solar-fire-safety', 'sg-agricultural-battery-funding'],
    },
    {
      id: 'foerderung', title: 'Check PV incentives from Pronovo and municipalities separately',
      paragraphs: [
        'Apply for standard PV incentives from the federal government through Pronovo and check municipal payments separately. The one-off payment is the nationwide single payment: KLEIV applies to installations below 100 kW, GREIV from 100 kW and HEIV to installations without self-consumption in the designated categories.',
        'The base payment has been CHF 0 since 1 April 2024. The individual capacity, installation type and possible bonuses determine the payment; no particular percentage is guaranteed. Calculate the federal payment with Pronovo’s tariff calculator.',
        'The cantonal special credit of CHF 59 million for 2024 to 2030 funds a portfolio of energy and climate measures and is not a dedicated PV fund. The City of St. Gallen’s energy fund is a municipal example: in its published example of a 10 kWp installation, the city’s additional payment equals half of the KLEIV capacity payment. This is a city payment, not a cantonal one.',
      ],
      sourceIds: ['pronovo-eiv', 'pronovo-tariff-calculator', 'sg-energy-funding', 'stadt-sg-energy-fund'],
    },
    {
      id: 'kosten', title: 'Make costs and project scope comparable',
      paragraphs: ['Compare quotes with the same required capacity and scope. Have PV modules, mounting structure, scaffolding, electrical work, grid connection and optional storage itemised separately; Pronovo and municipal payments should also be separate items.', 'PvPro.ch lets property owners compare up to three suitable solar quotes free of charge and without obligation.'],
      bullets: ['ERA and the mandatory capacity calculated from it', 'Selected compliance option in the energy documentation', 'Notification or permit procedure', 'Incentive assumptions separate from the installation price'],
      sourceIds: ['sg-energy-law', 'sg-energy-ordinance', 'sg-solar-procedure', 'pronovo-eiv'],
    },
  ],
  faqs: [
    { question: 'How large must the on-site generation installation for a new building be?', answer: '10 W/m² ERA, with a maximum mandatory capacity of 30 kW.', sourceIds: ['sg-energy-ordinance'] },
    { question: 'Can I pay a levy instead of installing PV?', answer: 'Yes, CHF 2,700 per required kWp.', sourceIds: ['sg-energy-law', 'sg-energy-ordinance'] },
    { question: 'Can I comply through greater energy efficiency?', answer: 'Yes, with an additional reduction in weighted energy demand of 5 kWh/m²/year.', sourceIds: ['sg-energy-law', 'sg-energy-ordinance'] },
    { question: 'How long does the notification procedure take?', answer: '30 days.', sourceIds: ['sg-solar-procedure'] },
    { question: 'Does the canton directly subsidise my ordinary PV installation?', answer: 'Standard PV incentives are provided primarily through Pronovo; municipal programmes must be checked separately.', sourceIds: ['pronovo-eiv', 'stadt-sg-energy-fund'] },
  ],
  sources: [...sources],
};