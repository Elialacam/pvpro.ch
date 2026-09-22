import type { CantonGuide } from '../types';

const sources = [
  { id: 'zh-bbv', authority: 'Kanton Zürich', title: 'Special Building Ordinance I: on-site electricity generation', url: 'https://www.zhlex.zh.ch/Erlass.html?Open&Ordnr=700.21' },
  { id: 'zh-vollzug', authority: 'Kanton Zürich', title: 'Energy enforcement manual: on-site electricity generation in new buildings', url: 'https://www.zh.ch/content/dam/zhweb/bilder-dokumente/themen/planen-bauen/bauvorschriften/bauvorschriften-im-energiebereich/energetische-bauvorschriften/vollzugsordner/vollzugsordner_energie_kanton-zh_Ausgabe_1_2023.pdf' },
  { id: 'zh-vorlage-6062', authority: 'Kanton Zürich', title: 'Proposal 6062: using suitable roofs for solar energy', url: 'https://www.kantonsrat.zh.ch/geschaefte/geschaeft/?id=ec16ee9593a744ab950f053a301d6f76' },
  { id: 'zh-meldeverfahren', authority: 'Kanton Zürich', title: 'Solar installations: notification and permit procedures', url: 'https://www.zh.ch/de/planen-bauen/baubewilligung/baueingabe-verfahren/meldeverfahren-solaranlagen-waermepumpen-eladestationen.html' },
  { id: 'zh-foerderprogramm', authority: 'Kanton Zürich', title: '2026 energy incentive programme', url: 'https://www.zh.ch/content/dam/zhweb/bilder-dokumente/themen/umwelt-tiere/energie/energieberatung-und-energiefoerderung/ktzh_foerderprogramm_2026.pdf' },
  { id: 'zh-landwirtschaft-batterie', authority: 'Kanton Zürich', title: '2026 investment assistance for agricultural battery storage', url: 'https://www.zh.ch/de/planen-bauen/bauvorschriften/bauen-an-besonderer-lage/bauen-ausserhalb-von-bauzonen/inhalt/landwirtschaftliche-bauten/investitionshilfen.html' },
  { id: 'zh-steuern', authority: 'Kantonales Steueramt Zürich', title: 'Tax treatment of photovoltaics, battery storage and charging stations', url: 'https://www.zh.ch/de/steuern-finanzen/steuern/treuhaender/steuerbuch/steuerbuch-definition/zstb-30-8.html' },
  { id: 'stadt-pv', authority: 'Stadt Zürich', title: 'Grants for photovoltaic installations from 1 August 2026', url: 'https://www.stadt-zuerich.ch/de/aktuell/medienmitteilungen/2026/06/stadt-zuerich-erhoeht-beitraege-fuer-pv-anlagen-und-foerdert-batteriespeicher.html' },
  { id: 'stadt-batterie', authority: 'Stadt Zürich', title: 'City of Zurich increases PV grants and supports battery storage', url: 'https://www.stadt-zuerich.ch/de/aktuell/medienmitteilungen/2026/06/stadt-zuerich-erhoeht-beitraege-fuer-pv-anlagen-und-foerdert-batteriespeicher.html' },
] as const;

export const guide: CantonGuide = {
  id: 'zurich',
  path: '/en/solar-panels-zurich',
  canton: 'Zurich',
  title: 'Solar panels in Zurich | PvPro.ch',
  description: 'Compare up to three free quotes from vetted solar installers for your photovoltaic system in the canton of Zurich.',
  h1: 'Solar panels in the canton of Zurich: mandate, notification and grants in 2026',
  intro: [
    'In the canton of Zurich, the on-site electricity generation requirement of 10 W/m² of energy reference area continues to apply to new buildings in 2026. The proposed 30 W/m² and greater use of large roofs are planned, but are not yet current law.',
    'Grants offered by the City of Zurich must not be treated as applying throughout the canton. Since 1 August 2026, the City has supported both PV and certain battery storage systems; the Canton has no equivalent general grant for residential buildings.',
  ],
  quickFacts: [
    { value: '10 W/m² ERA', label: 'current cantonal requirement for new buildings', sourceIds: ['zh-bbv', 'zh-vollzug'] },
    { value: '30 days', label: 'waiting period in the cantonal notification procedure', sourceIds: ['zh-meldeverfahren'] },
    { value: '01.08.2026', label: 'start of the City of Zurich’s increased grants', sourceIds: ['stadt-pv', 'stadt-batterie'] },
    { value: 'CHF 1’000 + 100/kWh', label: 'battery grant available only in the City of Zurich', sourceIds: ['stadt-batterie'] },
  ],
  ctaAfterSection: 'zustaendigkeit',
  sections: [
    {
      id: 'zustaendigkeit',
      title: 'Canton of Zurich or City of Zurich?',
      paragraphs: [
        'Cantonal building and energy rules apply throughout the canton. The increased PV and battery grants, however, are a municipal offering and apply only to installations within the City of Zurich.',
        'For a property outside the city, Pronovo support and any offers from the relevant municipality must be checked separately. A cantonal programme for multi-month or seasonal storage expressly excludes battery storage and is not a home-battery incentive.',
        'The 2026 investment assistance for agricultural battery storage is a separate special case: the cantonal allocation of CHF 200’000 has already been exhausted. This agricultural programme does not fund ordinary home batteries.',
      ],
      sourceIds: ['zh-bbv', 'zh-foerderprogramm', 'zh-landwirtschaft-batterie', 'stadt-pv', 'stadt-batterie'],
      module: {
        kind: 'zurich-jurisdictions',
        title: 'Two levels, different support',
        intro: 'The site determines whether the municipal grants are available at all.',
        columns: ['Canton of Zurich', 'City of Zurich'],
        items: [
          { title: 'Canton of Zurich', value: 'Law applying throughout the canton', text: '10 W/m² for new buildings, a notification procedure with a 30-day period, and no general cantonal grant for ordinary residential PV or home batteries.', detail: 'PV, a permanently installed wallbox and the associated battery may qualify for an income-tax deduction if installed at least one year after the new building was completed and after it has been occupied for at least one year.', sourceIds: ['zh-bbv', 'zh-meldeverfahren', 'zh-foerderprogramm', 'zh-steuern'] },
          { title: 'City of Zurich', value: 'Municipal grants from 01.08.2026', text: 'Total PV grants including Pronovo, plus a separate grant for qualifying stationary battery storage.', detail: 'Only for projects within city boundaries; submit the battery application before construction starts.', sourceIds: ['stadt-pv', 'stadt-batterie'] },
        ],
      },
    },
    {
      id: 'eigenstrom',
      title: '10 W/m² is current law; 30 W/m² is planned',
      paragraphs: [
        'New buildings must provide at least 10 W of on-site electricity generation capacity per m² of energy reference area. For PV, the maximum capacity required is capped using 70% of the relevant building area; this does not mean that modules must cover 70% of the roof.',
        'Installations on the same plot or within a ZEV can be counted if they are no more than eight years old. Extensions are exempt if the new ERA is below 50 m², or if it is no more than 20% of the existing ERA and no more than 1’000 m² at the same time. Alternatively, on-site generation can be omitted if the limit under §47a is improved by 20%. There is no substitute levy for this.',
      ],
      sourceIds: ['zh-bbv', 'zh-vollzug'],
      module: {
        kind: 'zurich-law-status',
        title: 'Current / planned',
        intro: 'Only the law actually in force counts for energy-compliance documentation.',
        columns: ['Current', 'Planned'],
        items: [
          { title: 'Current requirement', value: '10 W/m² ERA', text: 'The existing on-site electricity rule applies to new buildings, including the specified caps, credits and exemptions.', sourceIds: ['zh-bbv', 'zh-vollzug'] },
          { title: 'Policy proposal', value: '30 W/m² proposed', text: 'The Government Council intends to increase the requirement; proposal 6062 also aims to make greater use of suitable roofs measuring 300 m² or more on new buildings and during comprehensive roof renovations, depending in part on economic viability.', detail: 'As at 21 September 2026, do not treat 30 W/m² as the current rule.', sourceIds: ['zh-vorlage-6062'] },
        ],
      },
    },
    {
      id: 'stadtfoerderung',
      title: 'City of Zurich grants from 1 August 2026',
      paragraphs: [
        'The City’s maximum total PV grants, including Pronovo, consist of a CHF 5’000 base grant, CHF 450/kWp up to 30 kWp, CHF 350 for each additional kWp from 30 to 100 kWp, and CHF 310 for each additional kWp above 100 kWp. Up to CHF 3’000 is added for PV requiring a permit on an existing building. Pronovo must not be added again on top of these total maximum amounts.',
        'For a qualifying battery storage system, the City pays a CHF 1’000 base grant plus CHF 100/kWh; second-life batteries receive a further CHF 100/kWh. Eligible systems must have a capacity of at least 3 kWh and no more than 100 kWh, capped at 1.5 kWh per kW of installed renewable generation capacity.',
        'The battery must be stationary, located behind the same building connection as the PV system and integrated into a suitable energy-management system. The application must be submitted before construction starts.',
      ],
      sourceIds: ['stadt-pv', 'stadt-batterie'],
      notice: {
        title: 'City of Zurich only',
        text: 'These PV and battery grants are municipal. They do not automatically apply in Winterthur or any other municipality in the canton of Zurich.',
        status: 'important',
      },
    },
    {
      id: 'meldung',
      title: 'Notification procedure with a 30-day waiting period',
      paragraphs: [
        'Many sufficiently integrated rooftop installations can use the notification procedure. In building zones, subject to the applicable conditions, this also covers certain façade installations on detached houses and buildings up to 11 m high, as well as certain free-standing installations up to 20 m².',
        'Construction may begin if the local building authority does not issue different instructions within 30 days of confirming receipt. A building permit is generally required in core zones, for sites or monuments included in heritage inventories, and where a heritage-protection order applies. You should also check whether your municipality already handles submissions through eBaugesucheZH.',
      ],
      sourceIds: ['zh-meldeverfahren'],
    },
  ],
  faqs: [
    { question: 'Does 30 W/m² already apply in the canton of Zurich in 2026?', answer: 'No. Current law requires 10 W/m²; 30 W/m² is a planned increase.', sourceIds: ['zh-bbv', 'zh-vorlage-6062'] },
    { question: 'Must PV cover 70% of every roof in Zurich?', answer: 'No. The 70% figure caps the maximum capacity required by reference to the relevant building area; it is not a blanket roof-coverage mandate.', sourceIds: ['zh-vollzug'] },
    { question: 'Is there a substitute levy instead of on-site electricity generation?', answer: 'No. Zurich does not provide for a substitute levy for this on-site generation requirement.', sourceIds: ['zh-vollzug'] },
    { question: 'Do the increased PV grants apply in every municipality in the canton of Zurich?', answer: 'No. The grants described apply only in the City of Zurich.', sourceIds: ['stadt-pv'] },
    { question: 'Which batteries does the City of Zurich support?', answer: 'A stationary battery of at least 3 kWh behind the same building connection as the PV system, with suitable energy management and subject to the other capacity limits.', sourceIds: ['stadt-batterie'] },
    { question: 'When can construction of a notified solar installation begin?', answer: 'When the local building authority does not issue different instructions within 30 days of confirming receipt.', sourceIds: ['zh-meldeverfahren'] },
  ],
  sources: [...sources],
};