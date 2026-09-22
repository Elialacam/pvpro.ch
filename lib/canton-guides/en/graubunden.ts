import type { CantonGuide } from '../types';

const sources = [
  {
    id: 'gr-winterstrom',
    authority: "Grisons Office for Energy and Transport",
    title: "Photovoltaic systems for winter electricity, version 1/26",
    url: 'https://www.gr.ch/DE/institutionen/verwaltung/diem/aev/dokumenteee/leitfadenbedingungenpvwinterstrom.pdf',
  },
  {
    id: 'gr-flaechenpotenzial',
    authority: "Grisons Office for Energy and Transport",
    title: "Photovoltaic systems for using the area's potential, version 1/26",
    url: 'https://www.gr.ch/DE/institutionen/verwaltung/diem/aev/dokumenteee/leitfadenbedingungenpvflaechenpotential.pdf',
  },
  {
    id: 'gr-energiegesetz',
    authority: "Canton of Graubünden",
    title: "Energy law of the canton of Graubünden, as of December 31, 2025",
    url: 'https://www.gr-lex.gr.ch/app/de/texts_of_law/820.200',
  },
  {
    id: 'gr-energieverordnung',
    authority: "Canton of Graubünden",
    title: "Energy Ordinance of the Canton of Graubünden",
    url: 'https://www.gr-lex.gr.ch/data/820.210',
  },
  {
    id: 'pronovo-faq',
    authority: "Pronovo AG on behalf of the federal government",
    title: "Frequently asked questions about the one-off payment (EIV) and solar subsidies in Switzerland",
    url: 'https://pronovo.ch/de/foerderung/photovoltaik/haeufige-fragen/',
  },
] as const;

export const guide: CantonGuide = {
  id: 'graubunden',
  path: '/en/solar-panels-grisons',
  canton: "Grisons",
  title: "Solar panels in the Grisons 2026: cantonal grants | PvPro.ch",
  description:
    "The Grisons has separate grants for winter electricity and extensive use of suitable PV surfaces. A clear guide to the amounts, conditions and 2026 application process.",
  h1: "Solar panels in the Grisons: which PV grant suits your project?",
  intro: [
    "In the canton of Graubünden there are two cantonal paths for PV: winter electricity and area potential. Which one is right depends, among other things, on the inclination, orientation, radiation and system size.",
    "The contributions cannot be cumulated. Submit the application before construction begins, wait for the assurance and check Pronovo and other federal bonuses separately.",
  ],
  quickFacts: [
    {
      value: "CHF 300/kWp",
      label: "Winter electricity: for a 60–90° tilt and a suitable east–south–west orientation",
      sourceIds: ['gr-winterstrom'],
    },
    {
      value: "CHF 150/kWp",
      label: "Area potential: suitable for large areas; cannot be combined with winter electricity",
      sourceIds: ['gr-flaechenpotenzial'],
    },
  ],
  sections: [
    {
      id: 'foerderung',
      title: "Two cantonal programs – but not at the same time",
      paragraphs: [
        "Graubünden has two cantonal PV funding channels: winter electricity and area potential. You choose the appropriate path; Both programs cannot be combined with one another.",
        "You can also check federal funding via Pronovo. Cantonal contributions and other public contributions may together account for a maximum of 50% of project-related expenses. Therefore, do not simply add CHF 300, CHF 150, Pronovo and other bonuses to a guaranteed total.",
      ],
      sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial', 'gr-energiegesetz', 'pronovo-faq'],
      notice: {
        title: "Important for planning",
        text: "The two Graubünden programs are alternatives, not subsidies, that automatically stand next to each other. First check the appropriate funding method and then the legal limits for all public contributions together.",
        status: 'important',
      },
      module: {
        kind: 'funding-selector',
        title: "Which Graubünden funding is right?",
        intro: "First assign your project to a funding route. The detailed maps below show the complete program values.",
        items: [
          {
            title: "Winter electricity",
            text: "Very steep system and winter production in the foreground? Check 60-90° tilt, east to south to west, more than 1250 kWh/m²a global radiation and at least 3 kWp. Contribution: CHF 300/kWp.",
            detail: "Minimum contribution CHF 900, maximum contribution CHF 200,000.",
            value: "CHF 300/kWp",
            sourceIds: ['gr-winterstrom'],
          },
          {
            title: "Area potential",
            text: "Do you use a large, suitable area that significantly exceeds your own needs? The program requires at least 50% and at least 3 kWp above the calculated own consumption of 20 W/m² EBF. Contribution: CHF 150/kWp.",
            detail: "Minimum contribution CHF 450, maximum contribution CHF 50,000.",
            value: "CHF 150/kWp",
            sourceIds: ['gr-flaechenpotenzial'],
          },
          {
            title: "None of these",
            text: "None of these requirements fit? Check out Pronovo and other funding opportunities. The two cantonal programs are not combined.",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial', 'pronovo-faq'],
          },
        ],
        columns: ["Winter electricity", "Surface potential"],
        rows: [
          {
            label: "Contribution",
            left: "CHF 300/kWp",
            right: "CHF 150/kWp",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "Minimum contribution",
            left: "CHF 900",
            right: "CHF 450",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "Maximum contribution",
            left: "CHF 200,000",
            right: "CHF 50,000",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "Building use",
            left: "Check suitability according to the conditions of the winter power program",
            right: "Predominantly residential: more than 50% of the energy reference area is used for living",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "Minimum power/threshold",
            left: "At least 3 kWp",
            right: "At least 50% and at least 3 kWp above the calculated own consumption",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "Calculating own needs",
            left: "Not mentioned as a threshold for this program",
            right: "20 W/m² energy reference area (EBF)",
            sourceIds: ['gr-flaechenpotenzial'],
          },
          {
            label: "Inclination",
            left: "60-90°",
            right: "No corresponding 60° requirement; What matters is the use of land",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "Alignment",
            left: "East to south to west",
            right: "Approximately northeast to south to northwest",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "Global radiation",
            left: "More than 1250 kWh/m²a",
            right: "More than 1250 kWh/m²a",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "Request",
            left: "Submit before purchases and work; Wait for assurance",
            right: "Submit before purchases and work; Wait for assurance",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "portal",
            left: "energie.gr.ch / Building program portal according to procedure",
            right: "energie.gr.ch / Building program portal according to procedure",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "Assurance",
            left: "Valid for 3 years; extendable for a maximum of 2 years",
            right: "Check project-related assurance and deadline in the decision",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "Accumulation",
            left: "Cannot be cumulated with area potential",
            right: "Cannot be combined with winter electricity",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "Limit on public contributions",
            left: "Cantonal and other public contributions together cover a maximum of 50% of expenses",
            right: "Cantonal and other public contributions together cover a maximum of 50% of expenses",
            sourceIds: ['gr-energiegesetz', 'gr-energieverordnung'],
          },
        ],
      },
    },
    {
      id: 'winterstrom',
      title: "Winter power: for steep systems",
      paragraphs: [
        "The winter electricity program pays CHF 300 per kWp. It is suitable for systems with a 60-90° inclination, an orientation from east to south to west, more than 1250 kWh/m²a global radiation and at least 3 kWp output.",
        "The minimum contribution is CHF 900, the maximum contribution is CHF 200,000. The application must be submitted before purchases and work are carried out; wait for assurance before ordering or starting.",
      ],
      sourceIds: ['gr-winterstrom'],
    },
    {
      id: 'flaechenpotenzial',
      title: "Area potential: if you use more suitable area",
      paragraphs: [
        "The area potential program is aimed at buildings with predominantly residential use: more than 50% of the energy reference area must be used for living. You pay CHF 150 per kWp if the system is significantly higher than your calculated own requirements. It must exceed this threshold by at least 50% and additionally by at least 3 kWp.",
        "For the purposes of the calculation, 20 W/m² of energy reference area is considered as the calculated own consumption. In addition, approximately northeast to south to northwest and more than 1250 kWh/m²a global radiation apply; the minimum contribution is CHF 450, the maximum contribution is CHF 50,000.",
      ],
      sourceIds: ['gr-flaechenpotenzial'],
      notice: {
        title: "20 W/m² is not the legal requirement for new buildings",
        text: "The 20 W/m² EBF is part of the calculation of the area potential program. For new buildings, the statutory requirement to generate your own electricity of 10 W/m² EBF applies separately, with a maximum of 30 kW.",
        status: 'important',
      },
    },
    {
      id: 'neubau',
      title: "Compulsory own electricity for new buildings",
      paragraphs: [
        "For new buildings, there is a separate obligation to produce your own electricity: at least 10 W/m² of the energy reference area (EBF), a maximum of 30 kW. This is a legal minimum performance and not the threshold of the area potential funding program.",
        "The obligation requires your own electricity production, not necessarily a specific PV system. New Minergie buildings and locations with solar radiation below 1250 kWh/m²a are legally excluded. This refers to the solar energy per square meter and year. This exception to the obligation to build new buildings must be distinguished from the funding conditions: Both cantonal PV programs require global radiation of over 1250 kWh/m²a.",
      ],
      sourceIds: ['gr-energiegesetz', 'gr-energieverordnung'],
    },
    {
      id: 'bund',
      title: "Pronovo and optional federal bonuses",
      paragraphs: [
        "The federal government's regular one-off payment runs through Pronovo and, according to the current FAQ, applies from 2 kW. Depending on the system, additional federal bonuses may be possible, for example a tilt angle bonus from 75°, a parking space bonus for qualifying systems from 100 kW or a winter electricity bonus since 2026 under special conditions for systems from 100 kW.",
        "These federal bonuses do not automatically form a total and are not the Grisons winter-electricity programme. The conditions, grant decision and legal cap on public contributions must be checked separately for the specific project.",
      ],
      sourceIds: ['pronovo-faq', 'gr-winterstrom', 'gr-energiegesetz'],
    },
    {
      id: 'gesuch',
      title: "When does the application have to be submitted?",
      paragraphs: [
        "As a general rule, submit the cantonal application before construction begins. According to the dossier, this also applies in practice before purchases and work: first wait for the confirmation, then order or start carrying out the work.",
        "According to the procedure, the application is submitted via energie.gr.ch or the building program portal. The assurance for winter power is valid for 3 years and can be extended for a maximum of 2 years; check the specific deadline in the decision.",
      ],
      sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
      notice: {
        title: "Do not apply later",
        text: "An order that has already been placed or work that has begun can jeopardize your claim to funding. The request and the assurance therefore belong before the order and the start of construction.",
        status: 'important',
      },
    },
    {
      id: 'bewilligung',
      title: "Approval and planning in Graubünden",
      paragraphs: [
        "The funding issue and building law are two different tests. Clarify with the responsible municipality which construction method applies to your specific roof, the location and any protection interests.",
        "A cantonal funding commitment does not replace a building permit. Have the inclination, orientation, irradiation, power connection and the application date included in the planning early on.",
      ],
      sourceIds: ['gr-energiegesetz', 'gr-energieverordnung', 'gr-winterstrom', 'gr-flaechenpotenzial'],
    },
    {
      id: 'kosten',
      title: "How much does a solar system cost here?",
      paragraphs: [
        "The canton does not publish a fixed price for solar systems. The decisive factors are the roof, system size, electrical work and equipment.",
        "Compare multiple offers for the same project and check funding conditions separately from the price. This way you can see which positions are included and which contributions can only be taken into account after a confirmation.",
      ],
      bullets: [
        "Roof area, roof shape and usable module area",
        "System size and design",
        "Tilt, orientation and global radiation",
        "Scaffolding, access and construction site effort",
        "Electrical work, meters and mains connection",
        "Inverters and protection technology",
        "Battery storage and charging infrastructure",
        "Guarantees, registration and scope of services of the installer",
      ],
      sourceIds: ['pronovo-faq', 'gr-winterstrom', 'gr-flaechenpotenzial'],
    },
    {
      id: 'fuer-wen',
      title: "Which funding path is suitable for whom?",
      paragraphs: [
        "Winter electricity is particularly suitable for a steep system with a suitable east-south-west orientation and proven global radiation of over 1250 kWh/m²a. Area potential is suitable if you use a suitable area well above your calculated own needs and reach the 50% and 3 kWp threshold.",
        "When building a new building, you should coordinate the legal obligation to generate your own electricity with the system planning right from the start. If you do not meet a cantonal threshold, you can check Pronovo and the system-specific federal bonuses separately.",
      ],
      sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial', 'gr-energiegesetz', 'pronovo-faq'],
    },
  ],
  faqs: [
    {
      question: "How high is the winter electricity subsidy in Graubünden?",
      answer:
        "The program pays CHF 300 per kWp, a minimum of CHF 900 and a maximum of CHF 200,000. It applies to suitable systems with a 60–90° inclination, suitable orientation, more than 1250 kWh/m²a global radiation and at least 3 kWp.",
      sourceIds: ['gr-winterstrom'],
    },
    {
      question: "What slope does my system need for winter power?",
      answer:
        "The relevant inclination is 60–90°. In addition, the program checks the orientation from east to south to west, global radiation of more than 1250 kWh/m²a and the minimum power of 3 kWp.",
      sourceIds: ['gr-winterstrom'],
    },
    {
      question: "What is the funding for area potential?",
      answer:
        "Area potential is funded at CHF 150 per kWp, a minimum of CHF 450 and a maximum of CHF 50,000. The system must exceed the calculated internal consumption of 20 W/m² EBF by at least 50% and at least 3 kWp.",
      sourceIds: ['gr-flaechenpotenzial'],
    },
    {
      question: "Can I combine winter electricity and area potential?",
      answer:
        "No. The two cantonal PV programs cannot be combined with one another. Choose the funding method that best meets the requirements of your project and check for additional public contributions below the statutory 50% limit.",
      sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial', 'gr-energiegesetz'],
    },
    {
      question: "When do I have to submit the application?",
      answer:
        "The application must generally be submitted before construction begins and, according to the program information, also before purchases and work. Wait for assurance before ordering or starting the project.",
      sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
    },
    {
      question: "Is there an obligation to generate your own electricity for new buildings in Graubünden?",
      answer:
        "Yes. For new buildings, there is a separate obligation to produce your own electricity of 10 W/m² energy reference area, a maximum of 30 kW. This is not the same as the 20 W/m² calculation of the area potential program and is not automatically a blanket PV obligation.",
      sourceIds: ['gr-energiegesetz', 'gr-energieverordnung'],
    },
    {
      question: "Can I also purchase Pronovo?",
      answer:
        "Pronovo is the federal level and must be checked separately for the specific system; According to the FAQ, the regular one-off payment applies from 2 kW. Additional federal bonuses have their own requirements and may not be added to a guaranteed total without checking.",
      sourceIds: ['pronovo-faq', 'gr-energiegesetz'],
    },
    {
      question: "What funding limit do I have to consider?",
      answer:
        "Cantonal contributions and other public contributions together may not exceed 50% of project-related expenses. That's why CHF 300/kWp, CHF 150/kWp, Pronovo and possible bonuses are not easy to add up.",
      sourceIds: ['gr-energiegesetz', 'gr-energieverordnung', 'gr-winterstrom', 'gr-flaechenpotenzial', 'pronovo-faq'],
    },
    {
      question: "What does the threshold of 20 W/m² EBF mean?",
      answer:
        "20 W/m² EBF is the calculated own requirement that the Area Potential program uses for its threshold. A system that exceeds this value by at least 50% and additionally by at least 3 kWp is eligible for funding; The statutory requirement for new construction, however, is 10 W/m² EBF and a maximum of 30 kW.",
      sourceIds: ['gr-flaechenpotenzial', 'gr-energiegesetz', 'gr-energieverordnung'],
    },
    {
      question: "Which global radiation applies to the two programs?",
      answer:
        "For winter electricity and area potential, global radiation must generally be more than 1250 kWh/m²a. In simple terms, global radiation describes how much solar energy arrives at the location per square meter per year.",
      sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
    },
    {
      question: "How long is the assurance valid?",
      answer:
        "There is generally a period of 3 years to guarantee the winter electricity program. It can be extended for a maximum of 2 years; The specific decision remains decisive.",
      sourceIds: ['gr-winterstrom'],
    },
    {
      question: "Where do I submit the funding application?",
      answer:
        "The process runs via energie.gr.ch or the building program portal. Use the procedure specified for your program and submit the application before purchases and work.",
      sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
    },
    {
      question: "Do I need a building permit for a subsidized facility?",
      answer:
        "This cannot be answered from the funding program alone. Clarify with the municipality which construction method applies to the location, design and any protection interests; The funding commitment does not replace a building permit.",
      sourceIds: ['gr-energiegesetz', 'gr-energieverordnung'],
    },
  ],
  sources: [...sources],
};