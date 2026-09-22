import type { CantonGuide } from '../types';

const sources = [
  {
    id: 'gl-fp-2026',
    authority: "Canton of Glarus",
    title: "Energy funding program 2026, version 3.2",
    url: 'https://www.gl.ch/public/upload/assets/65023/Flyer2026Apr.pdf?fp=1',
  },
  {
    id: 'gl-conditions',
    authority: "Canton of Glarus",
    title: "Funding conditions, as of July 2026",
    url: 'https://www.gl.ch/public/upload/assets/67004/F%C3%B6rderbedingungen.pdf?fp=1',
  },
  {
    id: 'gl-energy-law',
    authority: "Canton of Glarus",
    title: "Ordinance on the enforcement of energy legislation",
    url: 'https://gesetze.gl.ch/app/de/texts_of_law/VII%20E%2F1%2F2%2F1',
  },
  {
    id: 'gl-programme-status',
    authority: "Canton of Glarus",
    title: "Funding program – Canton of Glarus",
    url: 'https://www.gl.ch/verwaltung/bau-und-umwelt/umwelt-wald-und-energie/umweltschutz-und-energie/energie/foerderprogramm.html/773',
  },
  {
    id: 'gl-solar-procedure',
    authority: "Canton of Glarus, Energy Department",
    title: "Energy Meeting 2025 – Solar systems and reporting procedures",
    url: 'https://www.gl.ch/public/upload/assets/59548/Pr%C3%A4sentationen_Energietreff_2025.pdf?fp=2',
  },
  {
    id: 'pronovo-faq',
    authority: "Pronovo AG on behalf of the federal government",
    title: "Frequently asked questions about the one-off payment (EIV) and solar subsidies in Switzerland",
    url: 'https://pronovo.ch/de/foerderung/photovoltaik/haeufige-fragen/',
  },
] as const;

export const guide: CantonGuide = {
  id: 'glarus',
  path: '/en/solar-panels-glarus',
  canton: "Glarus",
  title: "Solar panels in Glarus 2026: grants for steep PV | PvPro.ch",
  description:
    "Solar panels in Glarus: CHF 250/kWp for eligible steep installations, on-site generation in new buildings, permits and 2026 grants.",
  h1: "Solar panels in Glarus: 2026 grants for steep installations",
  intro: [
    "In Glarus, a steep PV area from 75° can be additionally subsidized by the canton. The contribution is CHF 250/kWp, up to a maximum of CHF 15,000 if the official conditions are met.",
    "For new buildings, the own electricity rule also counts with 10 W/m² energy reference area and a maximum of 30 kWp. Federal funding via Pronovo and the Glarus contribution must be examined separately.",
  ],
  quickFacts: [
    {
      value: "≥75°",
      label: "Minimum slope for the cantonal slope angle contribution",
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
    },
    {
      value: "CHF 250/kWp",
      label: "Cantonal contribution for eligible PV system components",
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
    },
    {
      value: "CHF 15,000",
      label: "Maximum cantonal contribution",
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
    },
    {
      value: "10W/m²",
      label: "Minimum own electricity output for new buildings",
      sourceIds: ['gl-energy-law'],
    },
  ],
  sections: [
    {
      id: 'neigungscheck',
      title: "Why 75° is important in Glarus",
      paragraphs: [
        "Yes, a PV area of ​​75° or more can be eligible for the cantonal tilt angle contribution. However, the funding only applies to the parts of the system that are eligible for funding and according to the conditions of the current program.",
      ],
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
      module: {
        kind: 'inclination-check',
        title: "75° – is my steep surface worth it?",
        intro: "Measure the module inclination to the horizontal plane. Then check the appropriate funding path and the complete program conditions.",
        items: [
          {
            title: "PV area ≥75°",
            value: "≥75°",
            text: "Yes: Check the cantonal tilt angle contribution – CHF 250/kWp for eligible PV system parts, a maximum of CHF 15,000.",
            detail: "The contribution is tied to the official funding conditions.",
            sourceIds: ['gl-fp-2026', 'gl-conditions'],
          },
          {
            title: "PV area <75°",
            value: "<75°",
            text: "No: The Glarus contribution for the steep incline does not apply. Instead, consider regular federal funding through Pronovo and other suitable avenues.",
            detail: "Any other eligibility must be assessed separately.",
            sourceIds: ['gl-fp-2026', 'pronovo-faq'],
          },
        ],
      },
    },
    {
      id: 'foerderung',
      title: "How high is the cantonal contribution?",
      paragraphs: [
        "The cantonal contribution is CHF 250 per kWp for eligible PV system parts with at least a 75° inclination. The maximum amount is CHF 15,000.",
        "kWp describes the nominal output of a PV system under specified standard conditions. Not every module area of ​​the system automatically counts for the calculation: the eligible parts and the other conditions of the program must be checked.",
        "For measure GL-31, the application is only submitted after the final pronovo decision. It is therefore not correct to generally assume that GL-31 will be submitted before construction begins; The specific process depends on the funding conditions.",
        "Increased contributions for the building envelope only apply to measures that are completed on time by the end of 2027. This does not result in any general PV funding for 2027.",
      ],
      sourceIds: ['gl-fp-2026', 'gl-conditions', 'pronovo-faq', 'gl-programme-status'],
    },
    {
      id: 'neubau',
      title: "Compulsory own electricity for new buildings",
      paragraphs: [
        "Yes. In new buildings, part of the electricity must be produced yourself: generally 10 W per square meter of energy reference area (EBF), but a maximum of 30 kWp.",
        "The energy reference area is the building area that is decisive for the energy calculation. kWp is the nominal electrical power of the modules under standard conditions; So the two pieces of information do not measure the same thing.",
        "Legally, it's about producing your own electricity and not about a blanket obligation to retrofit every existing house with photovoltaics. In practice, photovoltaics is an obvious way to meet the self-generated electricity rule.",
        "If the prescribed own electricity output is not realized, a replacement levy of CHF 2,000 per kW not realized may be relevant in the legal context. Whether and how it applies to the specific project must be checked based on the legal requirements.",
      ],
      sourceIds: ['gl-energy-law', 'gl-fp-2026'],
    },
    {
      id: 'solarthermie',
      title: "Combine PV and solar thermal energy",
      paragraphs: [
        "Yes, a combination can be supported with CHF 2,000 if the requirements of measure M-08 are met and at least 2 kWp of photovoltaics are available.",
        "Solar thermal energy generates heat, photovoltaics generates electricity. The contribution is therefore not a general PV bonus: the combination must be implemented at the same time and the conditions of M-08 must be adhered to in the project.",
      ],
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
    },
    {
      id: 'bewilligung',
      title: "Notification or building permit?",
      paragraphs: [
        "Not every solar system requires a complete building application. Depending on the case, a sufficiently adapted system can use a simplified reporting procedure.",
        "Protected objects and special situations must be checked separately. Therefore, before placing the order, clarify with the responsible authority whether a report is sufficient or whether a proper procedure is necessary.",
        "A reporting procedure is not a funding commitment. It answers the question of building law, while Pronovo and the cantonal funding bodies assess the funding conditions separately.",
      ],
      sourceIds: ['gl-solar-procedure', 'gl-energy-law'],
    },
    {
      id: 'pronovo',
      title: "Federal funding via Pronovo",
      paragraphs: [
        "The most important nationwide funding for photovoltaics runs through Pronovo. For the regular one-off payment (EIV), a minimum output of 2 kW currently applies; the specific amount depends on the project and federal conditions.",
        "Additional federal bonuses are voluntary, conditional funding options. These include, for example, a tilt angle bonus from 75°, a parking space bonus for qualifying systems from 100 kW and, since 2026, a winter electricity bonus under special conditions for systems from 100 kW.",
        "The Glarus contribution of CHF 250/kWp is separate from this. EIV, cantonal contributions and possible federal bonuses may not simply be added to a guaranteed total without checking.",
      ],
      sourceIds: ['pronovo-faq', 'gl-fp-2026', 'gl-conditions'],
    },
    {
      id: 'kosten',
      title: "How much does a solar system cost here?",
      paragraphs: [
        "The canton does not publish a fixed price for solar systems. The decisive factors are the roof, system size, electrical work and equipment.",
        "Compare multiple offers for the same project. Pay attention to the individual positions and whether funding applications, network connection and additional work are included in the scope of services.",
      ],
      bullets: [
        "Roof area, roof shape and usable module area",
        "System size, module inclination and selected modules",
        "Scaffolding, access and construction site logistics",
        "Electrical work, meters and mains connection",
        "Inverter",
        "Battery storage and charging infrastructure",
        "Own consumption, heat pump and electromobility",
        "Installer, scope of services and guarantees",
      ],
      sourceIds: [],
    },
    {
      id: 'passt',
      title: "Who is solar in Glarus particularly interesting for?",
      paragraphs: [
        "A test is particularly interesting on a steep roof or facade surface of 75° or more, on a new building or if PV and solar thermal energy are planned together. In these cases, cantonal rules and funding channels can influence early project planning.",
        "Plan the roof, statics, electrical connection, own consumption and the appropriate procedure together. An offer should clearly show which parts of the system reach the inclination angle and which funding conditions are still open.",
      ],
      sourceIds: ['gl-fp-2026', 'gl-conditions', 'gl-energy-law', 'gl-solar-procedure'],
    },
  ],
  faqs: [
    {
      question: "How much is the PV subsidy for steep systems?",
      answer:
        "For eligible PV system parts with at least a 75° inclination, the cantonal contribution is CHF 250/kWp. The maximum amount is CHF 15,000. Both statements only apply if the other program conditions are met.",
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
    },
    {
      question: "Which inclination do I need?",
      answer:
        "The eligible PV system parts must be inclined at least 75°. The angle is measured relative to the horizontal plane. If the inclination is below 75°, this Glarus inclination angle contribution does not apply.",
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
    },
    {
      question: "What is the maximum contribution?",
      answer:
        "The cantonal contribution is limited to CHF 15,000. The amount of CHF 250/kWp is only applied to the eligible system parts according to the current conditions. A larger overall system does not automatically lead to a higher contribution.",
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
    },
    {
      question: "Is there an obligation to generate your own electricity for new buildings?",
      answer:
        "Yes. New buildings must generally provide 10 W/m² of energy reference area for self-generated electricity, with a maximum of 30 kWp required. This is a self-generated electricity rule and not a general PV requirement for existing houses.",
      sourceIds: ['gl-energy-law', 'gl-fp-2026'],
    },
    {
      question: "What happens if the obligation to generate your own electricity is not met?",
      answer:
        "In the legal context, a replacement levy of CHF 2,000 per unrealized kW may be relevant. Whether it is owed for your project depends on the legal requirements and must be checked on a case-by-case basis.",
      sourceIds: ['gl-energy-law'],
    },
    {
      question: "Can PV be combined with solar thermal energy?",
      answer:
        "Yes, under measure M-08 a combination contribution of CHF 2,000 can be considered. To do this, the program requirements must be met, implementation must take place simultaneously and at least 2 kWp PV must be available.",
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
    },
    {
      question: "Do I need a building permit?",
      answer:
        "Not always. Depending on the case, a sufficiently adapted solar system can use a simplified reporting procedure; Protected objects and special cases must be checked separately. Before the order, the responsible body should confirm the procedure for the specific building.",
      sourceIds: ['gl-solar-procedure', 'gl-energy-law'],
    },
    {
      question: "When do I have to submit the application for GL-31?",
      answer:
        "The application for GL-31 will be submitted after Pronovo's final decision. A general point in time before the start of construction cannot therefore be claimed for this measure; The current Glarus funding conditions are decisive.",
      sourceIds: ['gl-conditions', 'pronovo-faq'],
    },
    {
      question: "What does the minimum power of 2 kW mean for Pronovo?",
      answer:
        "The regular one-off payment from the federal government via Pronovo currently applies from a system output of 2 kW. Other federal bonuses, such as for slopes, parking areas or winter electricity, have their own requirements and are not amounts that can be added automatically.",
      sourceIds: ['pronovo-faq'],
    },
  ],
  sources: [...sources],
};