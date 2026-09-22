import type { CantonGuide } from '../types';

const sources = [
  { id: 'vd-energie-2026', authority: 'Canton of Vaud', title: 'Energy legislation until 31 December 2026', url: 'https://www.vd.ch/environnement/energie/legislation-2' },
  { id: 'vd-neues-gesetz', authority: 'Canton of Vaud', title: 'New energy legislation from 1 January 2027', url: 'https://www.vd.ch/djes/nouvelle-loi-sur-lenergie' },
  { id: 'vd-solarverfahren', authority: 'Canton of Vaud', title: 'Solar installations: procedure and cantonal notification form', url: 'https://www.vd.ch/environnement/energie/formulaires-energie/procedures-et-autorisations-pour-les-dossiers-energie' },
  { id: 'vd-programme-2026', authority: 'Canton of Vaud', title: 'Buildings Programme 2026', url: 'https://www.vd.ch/fileadmin/user_upload/themes/environnement/energie/fichiers_pdf/conditions.PB2026.v.1.1.pdf' },
  { id: 'vd-patrimoine', authority: 'Canton of Vaud', title: 'Solar photovoltaics and heritage', url: 'https://www.vd.ch/prestation/s04-demander-une-subvention-solaire-photovoltaique-patrimoine' },
  { id: 'vd-crowdfunding', authority: 'Canton of Vaud', title: 'Photovoltaic installations with participatory financing', url: 'https://www.vd.ch/prestation/26-demander-une-subvention-pour-une-installation-photovoltaique-a-financement-participatif' },
  { id: 'pronovo-pv', authority: 'Pronovo Ltd on behalf of the Swiss Confederation', title: 'One-off payment for photovoltaic installations', url: 'https://pronovo.ch/de/foerderung/photovoltaik' },
] as const;

export const guide: CantonGuide = {
  id: 'waadt', path: '/en/solar-panels-vaud', canton: 'Vaud',
  title: 'Solar panels in the Canton of Vaud | PvPro.ch',
  description: 'Compare solar offers in Vaud and understand which rules apply in 2026 and what changes from 2027.',
  h1: 'Solar panels in the Canton of Vaud: what applies in 2026 and what changes in 2027',
  intro: [
    'The current energy law remains in force in the Canton of Vaud until the end of 2026: new buildings must cover at least 20% of their electricity needs with renewable energy. Photovoltaics are one possible solution.',
    'New energy legislation enters into force on 1 January 2027. It expands the use of solar energy, particularly for new buildings and major roof renovations; however, technical implementation limits that have not yet been confirmed must not be anticipated.',
  ],
  quickFacts: [
    { value: '20%', label: 'renewable share of new buildings’ electricity needs until the end of 2026', sourceIds: ['vd-energie-2026'] },
    { value: '01.01.2027', label: 'new energy legislation enters into force', sourceIds: ['vd-neues-gesetz'] },
    { value: '30 days', label: 'time for the municipality to classify the solar notification', sourceIds: ['vd-solarverfahren'] },
    { value: 'CHF 100/m²', label: 'M-01 where U ≤0.15 and insulation is combined with PV', sourceIds: ['vd-programme-2026'] },
  ],
  ctaAfterSection: 'wechsel',
  sections: [
    {
      id: 'wechsel', title: 'Clearly distinguish 2026 from the law applying from 1 January 2027',
      paragraphs: [
        'For a project submitted in 2026, the current 20% rule remains the starting point. Green electricity certificates do not satisfy it; where the site is unsuitable or the roof area insufficient, the available exceptions must be demonstrated in concrete terms.',
        'The Grand Council definitively adopted the new law on 3 February 2026. It applies from 1 January 2027 together with the implementing law and strengthens solar use for new buildings and major roof renovations. Future W/m² figures or other technical thresholds must not be used without the applicable implementing law.',
      ],
      sourceIds: ['vd-energie-2026', 'vd-neues-gesetz'],
      module: {
        kind: 'vaud-transition', title: 'Current rules / from 1 January 2027', intro: 'The law applicable when the project is undertaken is decisive.', columns: ['Until 31 December 2026', 'From 1 January 2027'],
        items: [
          { title: 'Current law', value: '20% of electricity needs', text: 'New buildings cover at least 20% of their electricity needs from renewable sources; PV is one possible solution. Green electricity certificates are not sufficient.', detail: 'Exceptions are possible if the site is unsuitable or the roof area is insufficient.', sourceIds: ['vd-energie-2026'] },
          { title: 'Future law', value: 'More solar use', text: 'The new legislation places stronger requirements particularly on new buildings and major roof renovations.', detail: 'Do not anticipate technical thresholds in the implementing law that applies from 2027.', sourceIds: ['vd-neues-gesetz'] },
        ],
      },
    },
    {
      id: 'foerderung', title: 'Insulation combined with PV receives a higher M-01 payment',
      paragraphs: [
        'For ordinary standalone PV installations, the canton refers applicants to Pronovo’s one-off payment. The Vaud Buildings Programme should not be understood as a general flat-rate PV fund.',
        'Under M-01, the payment is CHF 40/m² where U ≤0.20, CHF 70/m² where U ≤0.15, and CHF 100/m² where U ≤0.15 in combination with PV. For the combined rate, PV must cover at least 50% of the suitable surfaces concerned. The payment can be combined with Pronovo, but the application must be approved before work begins.',
        'For protected buildings and sites, “Solaire photovoltaïque & Patrimoine” covers additional integration costs up to CHF 20,000 for each participating cantonal service, with an overall maximum of CHF 40,000. This assistance cannot be combined with the M-01 solar bonus.',
      ],
      sourceIds: ['vd-programme-2026', 'vd-patrimoine', 'pronovo-pv'],
    },
    {
      id: 'spezialprogramme', title: 'Crowdfunding is a special programme, not a standard single-family-home payment',
      paragraphs: [
        'A first eligible crowdfunded PV project receives CHF 3,000 plus CHF 70/kWp; subsequent projects receive CHF 70/kWp. The maximum is CHF 30,000. At least 30 kWp and at least 20 participants investing no less than CHF 500 each are required. Condominium owners’ associations are excluded.',
        'The 2026 funding catalogue does not confirm any general cantonal payment for an ordinary home battery. Municipal programmes must be checked separately for the relevant location.',
      ],
      sourceIds: ['vd-programme-2026', 'vd-crowdfunding'],
    },
    {
      id: 'verfahren', title: 'The municipality decides the procedure within 30 days',
      paragraphs: [
        'Many solar installations can be exempted from the standard building permit, but must be notified to the municipality using the standard form. The 30 days do not amount to automatic approval: during this period, the municipality decides whether the exemption applies or an ordinary procedure is required.',
        'The simplified process does not automatically apply to buildings under cantonal protection. Since 1 January 2026, federal law has also facilitated certain façade installations under its conditions, including those larger than 8 m²; the municipality must still clarify the specific classification before work begins.',
      ],
      sourceIds: ['vd-solarverfahren'],
    },
  ],
  faqs: [
    { question: 'Which solar rule applies in Vaud until the end of 2026?', answer: 'New buildings must cover at least 20% of their electricity needs with renewable energy.', sourceIds: ['vd-energie-2026'] },
    { question: 'Can I meet the 20% requirement with green electricity certificates?', answer: 'No. Purchasing such certificates does not satisfy the requirement.', sourceIds: ['vd-energie-2026'] },
    { question: 'Do known fixed W/m² figures already apply from 2027?', answer: 'The new legislation applies from 1 January 2027; technical thresholds must be taken from the implementing law applicable at that time.', sourceIds: ['vd-neues-gesetz'] },
    { question: 'When is the M-01 payment CHF 100/m²?', answer: 'Where U ≤0.15 in combination with PV, provided PV covers at least 50% of the suitable surfaces concerned.', sourceIds: ['vd-programme-2026'] },
    { question: 'Does the 30-day period mean automatic approval?', answer: 'No. The municipality uses it to decide whether an exemption is possible or a building permit procedure is required.', sourceIds: ['vd-solarverfahren'] },
  ],
  sources: [...sources],
};