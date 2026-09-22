import type { CantonGuide } from "../types";
const sources = [
  {
    id: "ar-km21",
    authority: "Canton of Appenzell Ausserrhoden",
    title: "kM-21 photovoltaic installation",
    url: "https://ar.ch/verwaltung/departement-bau-und-volkswirtschaft/amt-fuer-umwelt/energie/foerderung/kantonale-foerderung/km-21-photovoltaikanlage-1-1",
  },
  {
    id: "ar-2027",
    authority: "Canton of Appenzell Ausserrhoden",
    title: "Cantonal support and changes from 1 January 2027",
    url: "https://ar.ch/verwaltung/departement-bau-und-volkswirtschaft/amt-fuer-umwelt/energie/foerderung/kantonale-foerderung",
  },
  {
    id: "ar-energy-statistics",
    authority: "Canton of Appenzell Ausserrhoden",
    title: "Solar energy and solar potential",
    url: "https://ar.ch/verwaltung/departement-bau-und-volkswirtschaft/amt-fuer-umwelt/energie/erneuerbare-energien/solarenergie",
  },
  {
    id: "ar-energy-concept",
    authority: "Canton of Appenzell Ausserrhoden",
    title: "Cantonal energy strategy 2026–2035",
    url: "https://ar.ch/verwaltung/kantonskanzlei/rechtsdienst/politische-rechte/vernehmlassungen/abgeschlossene-vernehmlassungen/2026",
  },
  {
    id: "pronovo-eiv",
    authority: "Pronovo AG on behalf of the Swiss Confederation",
    title: "Support for photovoltaic installations",
    url: "https://pronovo.ch/de/foerderung/photovoltaik",
  },
] as const;
export const guide: CantonGuide = {
  id: "appenzell-ausserrhoden",
  path: "/en/solar-panels-appenzell-ausserrhoden",
  canton: "Appenzell Ausserrhoden",
  title:
    "Solar panels in Appenzell Ausserrhoden: support in 2026/27 | PvPro.ch",
  description:
    "PV support in Appenzell Ausserrhoden: 50% supplement to the EIV in 2026, transitional rules, and new winter-power support from 2027.",
  h1: "Solar panels in Appenzell Ausserrhoden: 2026 support and changes from 2027",
  intro: [
    "In 2026, Appenzell Ausserrhoden may support a solar installation in addition to federal funding. From 2027, support is intended to focus more on winter electricity and thermal insulation. The applicable rule depends on the timing of your project.",
  ],
  quickFacts: [
    {
      value: "2026",
      label: "Up to 50% of the definitive federal payment in addition",
      sourceIds: ["ar-km21"],
    },
    {
      value: "2027",
      label: "Support focuses more strongly on winter electricity",
      sourceIds: ["ar-2027"],
    },
    {
      value: "≥75°",
      label: "Inclination for winter-power support from 2027",
      sourceIds: ["ar-2027"],
    },
    {
      value: "CHF 300/kW",
      label: "Planned contribution for winter-power installations from 2027",
      sourceIds: ["ar-2027"],
    },
    {
      value: "Before construction",
      label: "Future applications must be submitted in advance",
      sourceIds: ["ar-2027"],
    },
  ],
  sections: [
    {
      id: "timeline",
      title: "2026 → transition → from 2027",
      paragraphs: [
        "The decisive date is when the installation starts supplying electricity. From 1 January 2022 to 31 August 2025, kM-21 allowed up to 100% of the federal one-off payment (EIV); from 1 September 2025 the current maximum is 50%, in both cases capped at CHF 100,000 per project.",
        "Installations first supplying electricity from 1 January to 31 December 2026 have a transition period until the end of 2027 if they are neither optimised for winter electricity nor combined with insulation. The 50% refers to the federal one-off payment, not investment costs. Apply by the end of 2027; all other conditions remain decisive.",
        "From 1 January 2027, the plans provide for a module inclination of at least 75°, CHF 300/kW in addition to the national inclination bonus, and CHF 90–150/m² for a combination with insulation. Applications should then be filed before construction starts.",
      ],
      sourceIds: ["ar-km21", "ar-2027"],
      module: {
        kind: "timeline",
        title:
          "Which rule applies when the installation starts supplying electricity?",
        intro: "The dates show the support applicable at each point.",
        items: [
          {
            title: "1 January 2022 to 31 August 2025",
            value: "max. 100% EIV",
            text: "Earlier support period: up to 100% of the definitive federal EIV.",
            sourceIds: ["ar-km21"],
          },
          {
            title: "From 1 September 2025 to end of 2026",
            value: "max. 50% EIV",
            text: "Current 2026 rule for eligible installations; no more than CHF 100,000 per project.",
            sourceIds: ["ar-km21"],
          },
          {
            title: "Transition until the end of 2027",
            value: "Apply by end of 2027",
            text: "Installations from 2022–2026 without winter optimisation or an insulation combination may apply until the end of 2027.",
            sourceIds: ["ar-2027"],
          },
          {
            title: "From 1 January 2027",
            value: "before construction",
            text: "Planned: at least 75°, an additional CHF 300/kW and CHF 90–150/m² with insulation.",
            sourceIds: ["ar-2027"],
          },
        ],
      },
      notice: {
        title: "Do not mix up 2026 and 2027",
        text: "The 50% rule belongs to the current kM-21 support. Winter electricity and insulation are planned from 2027; check the instructions then in force before planning.",
        status: "future",
      },
    },
    {
      id: "regeln",
      title: "Who receives the cantonal contribution in 2026?",
      paragraphs: [
        "The 2026 cantonal contribution covers a new grid-connected solar electricity installation or extension in the canton with at least 2 kWp that receives federal support. The application requires Pronovo’s final support decision (formally, a legally binding Pronovo ruling). Simple replacement, renovation, maintenance and repairs are excluded.",
        "A high one-off payment without self-consumption (HEIV without self-consumption) and PV auction installations are excluded. If an on-site electricity obligation imposes a minimum size, that portion is not additionally supported. Third-party contributions can reduce the cantonal payment, except municipal contributions; the altitude bonus from 1,500 metres above sea level is not increased.",
      ],
      bullets: [
        "Grid connection and at least 2 kWp are required.",
        "The definitive Pronovo ruling is the calculation basis.",
        "HEIV without self-consumption and PV auction installations are excluded.",
        "Third-party contributions may reduce the cantonal amount; municipal contributions are the exception.",
      ],
      sourceIds: ["ar-km21", "pronovo-eiv"],
    },
    {
      id: "statistik",
      title: "Why AR is focusing on winter electricity",
      paragraphs: [
        "AR is focusing support more strongly on winter electricity because steeper installations shift more generation into winter. In 2024, Ausserrhoden generated around 80 GWh of renewable electricity, about 24% of cantonal consumption; 77% came from solar energy.",
        "At the end of 2024, PV covered around 10% of suitable roofs and façades. By 2035, renewable energy should provide at least 40% of cantonal electricity consumption; roof-oriented installations generate about three quarters in the summer half-year. This is not a yield or funding guarantee.",
      ],
      sourceIds: ["ar-energy-statistics", "ar-energy-concept"],
      module: {
        kind: "statistics",
        title: "The starting point in Ausserrhoden",
        intro:
          "The figures explain the direction of support but are not a return forecast.",
        items: [
          {
            title: "Renewable electricity generation in 2024",
            value: "around 80 GWh",
            text: "Renewable electricity in the canton in 2024.",
            sourceIds: ["ar-energy-concept"],
          },
          {
            title: "Share of cantonal consumption",
            value: "around 24%",
            text: "Share of cantonal electricity consumption.",
            sourceIds: ["ar-energy-concept"],
          },
          {
            title: "Solar energy share",
            value: "77%",
            text: "Solar energy’s share of this generation.",
            sourceIds: ["ar-energy-concept"],
          },
          {
            title: "Suitable roofs and façades",
            value: "around 10% covered",
            text: "Position at the end of 2024.",
            sourceIds: ["ar-energy-statistics", "ar-energy-concept"],
          },
          {
            title: "Cantonal target for 2035",
            value: "at least 40%",
            text: "Target share of cantonal electricity consumption.",
            sourceIds: ["ar-energy-concept"],
          },
          {
            title: "Summer half-year for roof-oriented systems",
            value: "about three quarters",
            text: "Roof-oriented systems supply about three quarters in summer; steeper systems supply more winter electricity.",
            sourceIds: ["ar-energy-concept"],
          },
        ],
      },
    },
    {
      id: "foerderung",
      title: "Support in Appenzell Ausserrhoden in 2026",
      paragraphs: [
        "In 2026, kM-21 can supplement up to 50% of the definitive federal EIV, capped at CHF 100,000 per project. The 50% does not refer to installation costs and is not guaranteed for every project.",
        "Pronovo first determines the federal EIV. In 2026, the cantonal application is submitted online after commissioning and the legally binding Pronovo ruling; for planned winter-power or insulation support from 2027, allow for an application before construction.",
      ],
      sourceIds: ["ar-km21", "ar-2027", "pronovo-eiv"],
    },
    {
      id: "bewilligung",
      title: "Permission, planning and submission",
      paragraphs: [
        "The support application does not replace checks under building law. Before placing an order, clarify roof form, protection interests, grid connection and municipal responsibility. The 2026 support application follows completion; the announced variants from 2027 require it before construction.",
        "Project and installation data, commissioning, grid connection and the definitive EIV ruling belong together. Extensions, replacements and third-party payments must be classified separately.",
      ],
      sourceIds: ["ar-km21", "ar-2027"],
    },
    {
      id: "kosten",
      title: "What does a solar installation cost here?",
      paragraphs: [
        "The canton publishes no fixed PV price. The roof, system size and chosen equipment are the main factors.",
        "Access, meter, grid connection, roof condition and insulation can also alter a quote. Besides the total, compare module area, installation, electrical items, storage option, warranties and responsibility for applications.",
        "The most useful comparison is therefore not a generic online price, but several quotes for the same project.",
      ],
      bullets: [
        "Roof area and form",
        "System output",
        "Scaffolding",
        "Electrical work",
        "Battery storage",
        "Self-consumption",
        "Inverter",
        "Installer / scope",
      ],
      sourceIds: ["ar-km21", "ar-2027"],
    },
    {
      id: "fuer-wen",
      title: "Who stands to benefit most from a solar installation here?",
      paragraphs: [
        "The case is clearest with a suitable roof, reliable self-consumption, grid connection and an EIV-eligible installation of at least 2 kWp. Where self-consumption is high, check the HEIV exclusion and building load before sizing.",
        "Steep roofs or façades may fit the announced winter-power approach. Assess planned insulation as an overall project; simple replacement, repair or renovation work is ineligible under kM-21.",
      ],
      sourceIds: ["ar-km21", "ar-2027"],
    },
  ],
  faqs: [
    {
      question: "How much is the cantonal PV contribution in 2026?",
      answer:
        "From 1 September 2025, up to 50% of the definitive EIV is possible, capped at CHF 100,000 per project. This is not 50% of investment costs. From 1 January 2022 to 31 August 2025, kM-21 specifies up to 100% of the EIV.",
      sourceIds: ["ar-km21"],
    },
    {
      question: "When must I apply?",
      answer:
        "In 2026, apply after first supplying electricity and receiving Pronovo’s final support decision. For planned winter-power or insulation support from 2027, apply before construction.",
      sourceIds: ["ar-km21", "ar-2027"],
    },
    {
      question: "Which installations are excluded?",
      answer:
        "Simple replacement and renovation cases, the high one-off payment without self-consumption (HEIV without self-consumption), and PV auction installations are excluded. The statutory minimum system size under an on-site generation obligation receives no additional support.",
      sourceIds: ["ar-km21"],
    },
    {
      question: "What changes on 1 January 2027?",
      answer:
        "From 1 January 2027, support is intended to prioritise winter electricity and PV with thermal insulation: a module inclination of at least 75°, CHF 300/kW in addition to the national inclination-angle bonus, and CHF 90–150/m² with insulation are planned. The application should be submitted before construction starts.",
      sourceIds: ["ar-2027"],
    },
    {
      question: "What does module inclination ≥75° mean?",
      answer:
        "It is the angle from the horizontal. At 75° or more, an installation is considered winter-optimised under the announced AR approach. Check the specific project against the implementation guide then in force.",
      sourceIds: ["ar-2027"],
    },
    {
      question: "How does the transition period to the end of 2027 work?",
      answer:
        "Installations from 1 January 2022 to 31 December 2026 without winter optimisation and an insulation combination may apply until the end of 2027. This is not a blanket payment guarantee; all other conditions remain decisive.",
      sourceIds: ["ar-2027", "ar-km21"],
    },
  ],
  sources: [...sources],
};
