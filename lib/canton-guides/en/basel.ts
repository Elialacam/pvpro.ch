import type { CantonGuide } from '../types';

export const guide: CantonGuide = {
  id: 'basel', path: '/en/solar-panels-basel', canton: 'Basel-Stadt / Basel-Landschaft',
  title: 'Solar panels in Basel 2026: city vs country | PvPro.ch',
  description: 'Photovoltaics in Basel: support, permits and solar requirements differ markedly between Basel-Stadt and Basel-Landschaft.',
  h1: 'Solar panels in Basel: Basel-Stadt or Basel-Landschaft?',
  intro: ['The support and rules that apply depend on which side of the cantonal boundary your property is located.'],
  quickFacts: [
    { value: 'up to CHF 100/m²', label: 'Roof: renovation together with PV', sourceIds: ['bs-solarkraftwerk'] },
    { value: 'up to CHF 140/m²', label: 'Façade: renovation together with PV', sourceIds: ['bs-solarkraftwerk'] },
    { value: 'CHF 40/m²', label: 'Roof: PV bonus only together with thermal insulation', sourceIds: ['bl-energie'] },
    { value: 'CHF 120/m²', label: 'Façade: PV bonus only together with thermal insulation', sourceIds: ['bl-energie'] },
  ],
  sections: [
    { id: 'vergleich', title: 'Basel-Stadt and Basel-Landschaft: five differences', paragraphs: [
      'Location determines which rule applies. Basel-Stadt and Basel-Landschaft have different support schemes and procedures.',
      'The amounts are not a flat payment for every photovoltaic (PV) installation. In Basel-Stadt they are part of “Solarkraftwerk Basel”; in Basel-Landschaft they form part of an application for thermal insulation. Check federal support through Pronovo—the one-off payment (EIV)—separately.',
    ], sourceIds: ['bs-solarkraftwerk', 'bl-energie'], module: { kind: 'comparison', title: 'The cantonal boundary makes the difference', intro: 'The same technology, but different rules in each canton:', columns: ['Basel-Stadt', 'Basel-Landschaft'], items: [], rows: [
      { label: 'PV support', left: 'Check federal support separately. The additional cantonal contribution applies only to an energy renovation with PV.', right: 'Check federal support separately. The cantonal bonus applies only with eligible thermal insulation.', sourceIds: ['bs-solarkraftwerk', 'bl-energie'] },
      { label: 'Renovation + PV', left: 'Roof: CHF 50/m², or CHF 100/m² on the module area with PV. Façade: CHF 70/m², or CHF 140/m² with PV.', right: 'PV bonus: CHF 40/m² for a roof or CHF 120/m² for a façade. Only with thermal insulation.', sourceIds: ['bs-solarkraftwerk', 'bl-energie'] },
      { label: 'Permit', left: 'Notification may be sufficient for well-integrated systems. Protected areas and cultural monuments may require a permit.', right: 'Usually notification in building and agricultural zones, at least 30 days before construction starts. Protected areas require a permit.', sourceIds: ['bs-permit', 'bl-permit'] },
      { label: 'Solar requirement', left: 'The solar initiative is only a draft. A PV requirement and a 15-year transition for existing buildings are planned.', right: 'The “Use the potential” energy initiative was rejected on 8 March 2026 with 67.6% voting no. There is therefore no new general retrofit requirement.', sourceIds: ['bs-offensive', 'bl-abstimmung'] },
      { label: 'Special point in 2026', left: 'The scheme supports only large-scale roof installations. 90% of the well or very well suited area, or of the technically feasible potential, must be covered.', right: 'New applications have been possible since 12 January 2026. A maximum of CHF 100,000 applies per application and no more than 50% of eligible costs per measure.', sourceIds: ['bs-solarkraftwerk', 'bl-energie'] },
    ] } },
    { id: 'pflichten', title: 'Solar requirement: what applies today?', paragraphs: [
      'No. The Basel-Stadt solar initiative is not yet applicable law, and Basel-Landschaft has no new general retrofit requirement.',
      'In Basel-Stadt, the cantonal government has forwarded a revised proposal to the cantonal parliament. It plans a requirement for well-suited areas and a 15-year transition for existing buildings.',
      'Until the proposal is adopted and enters into force, there is no installation requirement. The proposal identifies roofs and façades as having potential equivalent to about 40% of current cantonal electricity demand.',
      'This is neither a yield promise nor a funding rate. In Basel-Landschaft, the legislative initiative “Use the potential – secure supply” (solar initiative) was rejected on 8 March 2026 with 67.6% voting no.',
    ], bullets: [
      'Basel-Stadt: solar initiative planned, 15-year transition proposed—not yet applicable law.',
      'Basel-Landschaft: 67.6% voted no to the energy initiative—no new general retrofit requirement.',
      'For your project today, the location and current building procedure matter, not a political announcement.',
    ], sourceIds: ['bs-offensive', 'bl-abstimmung', 'bs-permit', 'bl-permit'], notice: { title: 'Planned—not yet applicable law', text: 'Current rules continue to apply until a decision has legal effect. Check the building’s suitability, zone and protection status, and submit the correct procedure.', status: 'future' } },
    { id: 'foerderung', title: 'What support applies in 2026?', paragraphs: [
      'The cantonal boundary determines the support. Basel-Stadt pays only for energy renovation with PV; Basel-Landschaft only for thermal insulation that meets the support conditions.',
      'In Basel-Stadt, “Solarkraftwerk Basel” rates in 2026 are CHF 50 per m² of roof, rising to CHF 100 on the PV module area. For a façade, the rates are CHF 70 and CHF 140 respectively.',
      'The doubling applies to the PV module area, not automatically to the entire building envelope. A roof installation must generally cover 90% of the suitable area with PV.',
      'This means the area shown as well or very well suited in the solar suitability map (solar cadastre), or the technically feasible potential.',
      'The application must be submitted through the portal before construction starts. A stand-alone PV system on a roof that is not being renovated does not receive these contributions.',
      'From 2026, Basel-Landschaft also pays CHF 40 per m² of module area on a roof or CHF 120 on a façade. The bonus belongs in the insulation application and does not apply to a PV system planned on its own.',
      'A maximum of CHF 100,000 is available per application and no more than 50% of eligible costs per measure. New applications have been possible since 12 January 2026.',
      'Check federal support through Pronovo, the one-off payment (EIV), separately. It replaces neither the cantonal renovation application nor a notification or building permit.',
      'Before requesting a quote, establish whether you are planning PV only, PV plus insulation, or a comprehensive renovation.',
    ], bullets: [
      'Basel-Stadt: CHF 50/100 per m² of roof and CHF 70/140 per m² of façade—renovation plus PV only.',
      'Basel-Stadt: 90% of the suitable or technically feasible roof area; apply before construction starts.',
      'Basel-Landschaft: CHF 40/120 per m² of module area—only together with thermal insulation.',
      'Basel-Landschaft: no more than CHF 100,000 per application and 50% of eligible costs per measure.',
    ], sourceIds: ['bs-solarkraftwerk', 'bl-energie'] },
    { id: 'bewilligung', title: 'Do I need a permit, or is notification enough?', paragraphs: [
      'Whether notification is enough or a building permit is needed depends on the canton, zone and protection status. Support and building regulations are separate.',
      'In Basel-Stadt, notification may be enough in certain zones for a well-integrated installation. A building permit may be needed in specially protected zones and for cultural monuments.',
      'For visible façades and historic buildings, ask the competent authority early. In Basel-Landschaft, rooftop PV systems in building and agricultural zones are generally exempt from permits.',
      'They must nevertheless be notified at least 30 days before work starts. A permit may be needed in core, townscape and monument protection zones, for important cultural and natural monuments, and outside the building zone.',
      'A support application replaces neither notification nor a permit. In Basel-Stadt, the application must be made before construction starts; in the Basel-Landschaft energy package, the PV bonus is included in the insulation application.',
    ], bullets: [
      'Record the address and canton. Then check the zone, building protection status and roof or façade solution.',
      'Submit the notification or building application before starting and allow for the competent authority’s deadlines.',
      'Check the support application separately, especially the deadline before construction starts.',
    ], sourceIds: ['bs-permit', 'bl-permit', 'bs-solarkraftwerk', 'bl-energie'] },
    { id: 'kosten', title: 'What does a solar installation cost here?', paragraphs: [
      'The canton does not publish a fixed PV price. The main factors are the roof, system size and desired equipment.',
      'The most useful comparison is therefore not a flat online price, but several quotes for the same project.',
    ], bullets: ['Roof area and shape, usable module area, mounting structure and condition of the roof covering', 'System output and selected modules', 'Scaffolding, access and site logistics', 'Electrical work, meter and grid connection', 'Battery storage and other additional components', 'Self-consumption and expected load profile', 'Inverter', 'Installer, scope of services, warranties and aftercare'], sourceIds: ['bs-solarkraftwerk', 'bl-energie'] },
    { id: 'fuer-wen', title: 'Who is a solar installation here particularly suitable for?', paragraphs: [
      'A solar installation is particularly suitable if you plan renovation and PV together. In Basel-Stadt this applies to “Solarkraftwerk Basel”; in Basel-Landschaft, to thermal insulation with PV.',
      'In Basel-Stadt, it should be possible to meet the 90% condition. Without a renovation, do not include the cantonal scheme in your calculation; assess federal support and self-consumption separately.',
      'In Basel-Landschaft, the bonus suits owners planning thermal insulation and PV together. For rented buildings, apartment blocks or small roof areas, ownership, meter planning, roof structure and the distribution of electricity consumption must also be clarified.',
    ], sourceIds: ['bs-solarkraftwerk', 'bl-energie'], module: { kind: 'jurisdiction-steps', title: 'Which Basel rule applies to me?', intro: 'First check on which side of the cantonal boundary your property lies:', columns: ['Property in Basel-Stadt', 'Property in Basel-Landschaft'], items: [
      { title: 'Property in Basel-Stadt', text: '1. Check the location and solar cadastre. 2. Plan a roof or façade renovation with PV and check whether 90% is achievable. 3. Clarify protection and procedure; submit the support application before construction starts.', detail: 'Only renovation plus PV belongs to “Solarkraftwerk Basel”. A stand-alone PV system does not thereby become a renovation project.', sourceIds: ['bs-solarkraftwerk', 'bs-permit'] },
      { title: 'Property in Basel-Landschaft', text: '1. Plan thermal insulation and PV together. 2. Check the insulation application, module-area bonus, CHF 100,000 limit and 50% cap. 3. Submit notification at least 30 days before construction starts, or begin a building application if protection applies.', detail: 'The PV bonus is tied to eligible thermal insulation. It is not a stand-alone subsidy for an ordinary PV system.', sourceIds: ['bl-energie', 'bl-permit'] },
    ] } },
  ],
  faqs: [
    { question: 'Is cantonal PV support available in Basel?', answer: 'Yes, but there is no single Basel bonus. In Basel-Stadt, “Solarkraftwerk Basel” is tied to energy renovation plus PV. In Basel-Landschaft, the PV bonus applies only with thermal insulation; check federal support through Pronovo—the one-off payment (EIV)—separately.', sourceIds: ['bs-solarkraftwerk', 'bl-energie'] },
    { question: 'What is the difference between Basel-Stadt and Basel-Landschaft?', answer: 'The cantons have different rules. Basel-Stadt supports renovation plus PV with CHF 50/100 per m² of roof and CHF 70/140 per m² of façade; roof installations generally follow the 90% rule. Basel-Landschaft adds CHF 40/120 per m² of module area to thermal insulation and has its own application and construction rules.', sourceIds: ['bs-solarkraftwerk', 'bl-energie'] },
    { question: 'Is the Basel-Stadt solar initiative already law?', answer: 'No. The solar initiative is a planned proposal for more PV and a requirement on suitable areas. A 15-year transition is proposed for existing buildings. Until it enters into force, this requirement is not applicable law.', sourceIds: ['bs-offensive'] },
    { question: 'How does “Solarkraftwerk Basel” work?', answer: 'You combine an energy renovation of the roof or façade with PV on the renovated area. Submit the application before construction starts. Roof rates are CHF 50/100 and façade rates CHF 70/140 per m²; roof installations must observe the 90% condition.', sourceIds: ['bs-solarkraftwerk'] },
    { question: 'How much is the Basel-Landschaft PV bonus in 2026?', answer: 'The bonus is CHF 40 per m² of module area on a roof and CHF 120 on a façade. It belongs in the insulation application, not a PV project planned on its own. A maximum of CHF 100,000 is available per application and no more than 50% of eligible costs per measure.', sourceIds: ['bl-energie'] },
    { question: 'Does Basel-Landschaft have a general solar requirement for existing homes?', answer: 'No. The legislative initiative “Use the potential – secure supply” (solar initiative) was rejected on 8 March 2026 with 67.6% voting no. It created no new general retrofit requirement. The zone, building protection status and system continue to determine whether notification or a permit is needed.', sourceIds: ['bl-abstimmung', 'bl-permit'] },
    { question: 'When do I need a building permit in Basel-Stadt?', answer: 'That depends on the system and location. Notification may be enough for a well-integrated system. A building permit may be needed in protected areas, for cultural monuments and for sensitive roof or façade solutions; the competent authority should classify the case before you request a quote.', sourceIds: ['bs-permit', 'bs-offensive'] },
  ],
  sources: [
    { id: 'bs-solarkraftwerk', authority: 'Canton of Basel-Stadt', title: 'Solarkraftwerk Basel scheme: support contributions', url: 'https://www.bs.ch/wsu/aue/abteilung-energie/aktion-solarkraftwerk-basel' },
    { id: 'bs-permit', authority: 'Canton of Basel-Stadt', title: 'Do I need a building permit?', url: 'https://www.bs.ch/themen/umwelt-und-bauen/bauen-im-kanton-basel-stadt/brauche-ich-eine-baubewilligung' },
    { id: 'bs-offensive', authority: 'Grand Council of Basel-Stadt', title: 'Cantonal government report on the solar initiative (25 June 2025, business 25.0921.01)', url: 'https://grosserrat.bs.ch/dokumente/100410/000000410351.pdf' },
    { id: 'bl-energie', authority: 'Canton of Basel-Landschaft', title: 'New incentives in the 2026 cantonal support programme', url: 'https://www.baselland.ch/politik-und-behorden/direktionen/bau-und-umweltschutzdirektion/umweltschutz-energie/medienmitteilungen/neue-anreize-im-kantonalen-foerderprogramm' },
    { id: 'bl-permit', authority: 'Canton of Basel-Landschaft', title: 'Solar installations / heat pumps: notification and permit requirements', url: 'https://www.baselland.ch/politik-und-behorden/direktionen/bau-und-umweltschutzdirektion/bauinspektorat/solaranlagen-waermepumpen' },
    { id: 'bl-abstimmung', authority: 'Canton of Basel-Landschaft', title: 'Vote result: “Use the potential – secure supply” (8 March 2026)', url: 'https://abstimmungen.bl.ch/app/archive/de/vote/ct-13-160.html' },
  ],
};