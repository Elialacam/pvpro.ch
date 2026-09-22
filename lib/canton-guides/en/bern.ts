import type { CantonGuide } from '../types';

const sources = [
  { id: 'be-solarpflicht', authority: 'Canton of Bern, Directorate for Economic Affairs, Energy and the Environment', title: 'Information on the solar requirement from 2026', url: 'https://www.weu.be.ch/de/start/themen/energie/solarpflicht.html' },
  { id: 'be-keng', authority: 'Canton of Bern', title: 'Cantonal Energy Act, Articles 39a–39e', url: 'https://www.belex.sites.be.ch/app/de/texts_of_law/741.1' },
  { id: 'be-kenv', authority: 'Canton of Bern', title: 'Cantonal Energy Ordinance, Articles 19a–19h', url: 'https://www.belex.sites.be.ch/app/de/texts_of_law/741.111' },
  { id: 'be-vollzug', authority: 'Canton of Bern, Office for the Environment and Energy', title: 'EN-Solar BE implementation guide – solar installation requirement', url: 'https://www.weu.be.ch/content/dam/weu/dokumente/aue/de/energievorschriften-bauen/aue-EN-Solar_BE_Vollzugshilfe_de.pdf' },
  { id: 'pronovo-eiv', authority: 'Pronovo AG on behalf of the Swiss Confederation', title: 'Support for photovoltaic installations', url: 'https://pronovo.ch/de/foerderung/photovoltaik' },
] as const;

export const guide: CantonGuide = {
  id: 'bern', path: '/en/solar-panels-bern', canton: 'Bern',
  title: 'Solar panels in Bern: new rules from 2026 | PvPro.ch',
  description: 'New solar rules have applied in the Canton of Bern since 2026 to new buildings, extensions, roof renovations and larger car parks.',
  h1: 'Solar panels in the Canton of Bern: the new rules since 2026',
  intro: ['New rules have applied in the Canton of Bern since 1 January 2026 to new buildings, extensions and larger car parks. For a comprehensive roof renovation, you must report whether solar energy is feasible, but this does not automatically require you to install a solar system.'],
  quickFacts: [
    { value: '10%', label: 'Minimum share of the relevant building area for certain new buildings and extensions', sourceIds: ['be-solarpflicht', 'be-keng'] },
    { value: '60%', label: 'Of well-suited roof area, as a rule for new buildings and extensions', sourceIds: ['be-solarpflicht', 'be-kenv'] },
    { value: '7 working days', label: 'Minimum notice for a separate notification of a permit-exempt solar installation', sourceIds: ['be-vollzug', 'be-kenv'] },
    { value: 'Roof renovation', label: 'Notification requirement ≠ automatic PV requirement', sourceIds: ['be-solarpflicht', 'be-vollzug'] },
  ],
  sections: [
    {
      id: 'regeln', title: 'Bern’s solar rules since 1 January 2026',
      paragraphs: [
        'Since 1 January 2026, new buildings and extensions must use solar energy on at least 10% of the building area relevant to the calculation (officially: eligible building area). Well-suited roofs receiving at least 1,000 kWh of solar energy per square metre per year (1,000 kWh/m²a) should use at least 60% of their total roof area (gross roof area); the requirement may be met partly or entirely on the façade.',
        'The 60% therefore does not automatically mean 60% of every individual roof. For small new residential buildings up to 300 m², the requirement is instead at least enough solar energy to cover half the standard energy demand. An exemption for less than 50 m² of relevant building area applies only if there is also no suitable individual roof area of at least 50 m². This special rule is not the general 60% rule.',
      ],
      sourceIds: ['be-solarpflicht', 'be-keng', 'be-kenv'],
      module: { kind: 'regulatory-checklist', title: '2026: which rule applies to my project?', items: [
        { title: 'New building or extension', text: 'Provide solar energy for at least 10% of the relevant building area.', sourceIds: ['be-solarpflicht', 'be-keng'] },
        { title: 'Small residential buildings', text: 'For small residential buildings up to 300 m², solar energy must cover at least half the standard energy demand.', sourceIds: ['be-solarpflicht', 'be-kenv'] },
        { title: 'Comprehensive roof renovation', text: 'If at least 50% of the gross roof area is affected, solar suitability must be reported; this is not an automatic installation requirement.', sourceIds: ['be-solarpflicht', 'be-vollzug'] },
        { title: 'New large car park', text: 'New outdoor car parks with at least 80 publicly accessible, managed spaces require a canopy with solar modules if the site is suitable. This also applies to new park-and-ride facilities (P+R) with more than 50 spaces.', sourceIds: ['be-solarpflicht', 'be-vollzug'] },
      ] },
    },
    {
      id: 'dachsanierung', title: 'Roof renovation: notification does not automatically mean a solar requirement',
      paragraphs: [
        'No. In the Canton of Bern, a comprehensive roof renovation triggers a notification requirement, but not automatically a requirement to install a photovoltaic (PV) system.',
        'The notification requirement applies to existing buildings when at least 50% of the gross roof area is re-covered or sealed. The notification via eBau records solar suitability and estimated installation costs; roof areas under 20 m² are exempt.',
        'The notification creates transparency. Construction, suitability, building law and the owner’s decision remain separate matters.',
      ],
      sourceIds: ['be-solarpflicht', 'be-vollzug', 'be-kenv'],
      module: { kind: 'roof-explainer', title: 'What the roof notification actually triggers', items: [
        { title: '1. Check the scope', text: 'Check whether re-covering or sealing affects at least 50% of the gross roof area.', sourceIds: ['be-solarpflicht', 'be-vollzug'] },
        { title: '2. State suitability and costs', text: 'The notification includes suitability for using solar energy and the estimated installation costs.', sourceIds: ['be-solarpflicht'] },
        { title: '3. Submit in time', text: 'For a permit-exempt project, the notification must be submitted no later than 7 working days before work begins.', sourceIds: ['be-vollzug', 'be-kenv'] },
        { title: '4. Make a separate decision', text: 'Suitability and a cost estimate do not automatically create a requirement to install PV.', sourceIds: ['be-solarpflicht', 'be-vollzug'] },
      ] },
      notice: { title: 'Important distinction', text: 'A comprehensive roof renovation on an existing building triggers the notification requirement. The installation requirement for new buildings and extensions is legally separate.', status: 'important' },
    },
    {
      id: 'parkplaetze', title: 'New rules for larger car parks',
      paragraphs: [
        'New outdoor car parks with at least 80 publicly accessible, paid spaces require a canopy with solar modules if the site is suitable. This also applies to new outdoor park-and-ride facilities (P+R) with more than 50 spaces.',
        'At least 50% of suitable space must be covered with solar modules; exemptions remain possible. Existing P+R facilities must be upgraded during a comprehensive renovation, and by 31 December 2035 at the latest.',
        'An exemption may be possible below 1,000 kWh of solar energy per square metre per year (1,000 kWh/m²a). Other existing parking sites are not covered across the board.',
      ],
      sourceIds: ['be-solarpflicht', 'be-vollzug', 'be-keng'],
    },
    {
      id: 'foerderung', title: 'Solar support in the Canton of Bern',
      paragraphs: [
        'Federal support is administered through Pronovo. Smaller systems qualify for the one-off payment for small photovoltaic installations (KLEIV), while larger systems receive the corresponding support for large installations (GREIV), in each case subject to federal conditions; this does not create a general cantonal percentage subsidy for every home.',
        'The canton supports certain comprehensive renovations and energy-efficient new buildings for which PV or solar thermal systems may count. This support is separate from the federal one-off payment for PV (EIV) and is not a general PV subsidy. Check the conditions and application timing before placing an order.',
      ],
      sourceIds: ['pronovo-eiv', 'be-solarpflicht'],
    },
    {
      id: 'bewilligung', title: 'Permit or notification?',
      paragraphs: [
        'Even a solar installation exempt from a building permit may require notification. A separate PV notification must be submitted no later than 7 working days before construction begins.',
        'The separate notification for a comprehensive roof renovation is submitted via eBau. Location, design and conservation interests determine whether a building permit is required. For a listed building, protected surroundings or a system that is not appropriately integrated, involve the municipality early; a Pronovo application and notification do not replace the building-law review.',
      ],
      sourceIds: ['be-vollzug', 'be-solarpflicht', 'pronovo-eiv'],
    },
    {
      id: 'kosten', title: 'What does a solar installation cost here?',
      paragraphs: [
        'The canton does not publish a fixed PV price. The main factors are the roof, system size and desired equipment.',
        'Roof condition, access, meter, grid connection and conservation requirements can also affect the quote. The cost estimate for a roof renovation forms part of the notification, but does not create an obligation to invest.',
        'The most useful comparison is therefore not a flat online price, but several quotes for the same project. Compare line items, registration work and warranties.',
      ],
      bullets: ['Roof area and shape', 'System output', 'Scaffolding', 'Electrical work', 'Battery storage', 'Self-consumption', 'Inverter', 'Installer / scope of services'],
      sourceIds: ['be-solarpflicht', 'be-vollzug'],
    },
    {
      id: 'fuer-wen', title: 'Who particularly benefits from a solar installation in the Canton of Bern?',
      paragraphs: [
        'For a new building or extension, solar energy must be included early in project planning. Small residential buildings up to 300 m² follow the rule of half the standard energy demand; otherwise the combination of 10% and suitable roof areas applies. For a comprehensive roof renovation, suitability and costs must be reported without this creating an installation requirement.',
        'Whether a system makes sense depends on the roof, consumption and quote. Large car parks, protected properties, façades and unusual roof shapes should be assessed early.',
      ],
      sourceIds: ['be-solarpflicht', 'be-keng', 'be-vollzug'],
    },
  ],
  faqs: [
    { question: 'Has a solar requirement applied in the Canton of Bern since 2026?', answer: 'Yes, for certain projects. Rules for new buildings, extensions and certain large car parks have applied since 1 January 2026. New buildings and extensions must use at least 10% of the building area relevant to the calculation. A comprehensive roof renovation, by contrast, generally triggers a notification, not automatically an installation requirement.', sourceIds: ['be-solarpflicht', 'be-keng'] },
    { question: 'How much roof area must a new building use?', answer: 'Well-suited roofs receiving at least 1,000 kWh of solar energy per square metre per year (1,000 kWh/m²a) should use at least 60% of the total roof area. An exemption may apply if the relevant building area is under 50 m² and there is no suitable individual roof area of at least 50 m². A façade may be used; small residential buildings up to 300 m² follow the special rule of half the standard energy demand.', sourceIds: ['be-solarpflicht', 'be-kenv'] },
    { question: 'Does a roof renovation automatically mean I must install PV?', answer: 'No. If at least 50% of the roof area (gross roof area) is affected, notification is required. It records solar suitability and estimated costs, but does not automatically require the installation of a photovoltaic (PV) system.', sourceIds: ['be-solarpflicht', 'be-vollzug'] },
    { question: 'When is a roof renovation considered comprehensive?', answer: 'A roof renovation is comprehensive if at least 50% of the total roof area (gross roof area) is re-covered or sealed. Roof areas under 20 m² are exempt; use the implementation guide to assess the specific boundary.', sourceIds: ['be-solarpflicht', 'be-vollzug', 'be-kenv'] },
    { question: 'When must I submit the notification?', answer: 'For a separate, permit-exempt PV notification procedure, no later than 7 working days before work begins. The separate notification of solar suitability for a comprehensive roof renovation is submitted via eBau. A building permit may also be required for protected properties or for another permit-triggering circumstance.', sourceIds: ['be-vollzug', 'be-kenv'] },
    { question: 'What rules apply to large car parks?', answer: 'New outdoor car parks with at least 80 publicly accessible, paid spaces and new park-and-ride facilities (P+R) with more than 50 spaces require a canopy with solar modules if the site is suitable. At least 50% of suitable space must be covered; exemptions are possible below 1,000 kWh of solar energy per square metre per year (1,000 kWh/m²a). Existing P+R facilities must be upgraded during a comprehensive renovation, and by 31 December 2035 at the latest.', sourceIds: ['be-solarpflicht', 'be-vollzug'] },
    { question: 'What PV support is available in the Canton of Bern?', answer: 'PV is generally supported by the Swiss Confederation through Pronovo, particularly through the one-off payment for small photovoltaic installations (KLEIV) or the corresponding support for large installations (GREIV). The canton also supports certain comprehensive renovations or energy-efficient new buildings where PV can count. This does not create a general cantonal PV funding rate.', sourceIds: ['pronovo-eiv', 'be-solarpflicht'] },
  ],
  sources: [...sources],
};