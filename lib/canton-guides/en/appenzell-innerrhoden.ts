import type { CantonGuide } from "../types";
export const guide: CantonGuide = {
  id: "appenzell-innerrhoden",
  path: "/en/solar-panels-appenzell-innerrhoden",
  canton: "Appenzell Innerrhoden",
  title: "Solar panels in Appenzell Innerrhoden: support and rules | PvPro.ch",
  description:
    "Solar power in Appenzell Innerrhoden: federal EIV, CHF 100 solar advice, on-site generation for new buildings, and permits.",
  h1: "Solar panels in Appenzell Innerrhoden: support, advice and permits",
  intro: [
    "In Appenzell Innerrhoden, solar-installation support comes from the Swiss Confederation through Pronovo. The separate cantonal solar consultation costs CHF 100. New buildings must generate some of their own electricity. Here are the key rules.",
  ],
  quickFacts: [
    {
      value: "CHF 100",
      label: "cost of solar advice, not a grant for the PV installation",
      sourceIds: ["ai-programme"],
    },
    {
      value: "Free",
      label:
        "when solar advice takes place together with the “renewable heating” consultation",
      sourceIds: ["ai-programme"],
    },
    {
      value: "Pronovo",
      label: "solar-installation support comes from the Swiss Confederation",
      sourceIds: ["ai-pronovo"],
    },
    {
      value: "New buildings",
      label: "must generate some of their own electricity",
      sourceIds: ["ai-energievollzug", "ai-implementation-2020"],
    },
  ],
  sections: [
    {
      id: "saeulen",
      title: "Appenzell Innerrhoden in three pillars",
      paragraphs: [
        "For a solar project in Appenzell Innerrhoden, distinguish federal support, advice and the building procedure. You pay CHF 100 for advice; it is not a contribution towards the installation.",
      ],
      sourceIds: ["ai-pronovo", "ai-programme", "ai-solaranlagen"],
      notice: {
        title: "Do not confuse them",
        text: "CHF 100 is the cost of advice, not support for the photovoltaic installation. Installation support is provided by the Swiss Confederation through Pronovo.",
        status: "important",
      },
      module: {
        kind: "pillars",
        title: "The three parts of a solar project",
        intro: "Each part has different responsibilities and conditions.",
        items: [
          {
            title: "Federal support",
            text: "The federal one-off payment (EIV) for a photovoltaic installation is administered by Pronovo. The reviewed sources show no general cantonal installation grant in Appenzell Innerrhoden.",
            sourceIds: ["ai-pronovo"],
          },
          {
            title: "CHF 100 solar advice",
            text: "The Energie AR/AI association’s initial solar-energy consultation costs CHF 100. It is free when held at the same time as the “renewable heating” consultation.",
            sourceIds: ["ai-programme"],
          },
          {
            title: "Notification or permission",
            text: "A sufficiently adapted rooftop solar installation in a building or agricultural zone requires notification. Other installations need planning permission.",
            sourceIds: ["ai-solaranlagen"],
          },
        ],
      },
    },
    {
      id: "eigenstrom",
      title: "On-site electricity in new buildings",
      paragraphs: [
        "Yes. Since 1 April 2020, a new building must generate some of its own electricity; photovoltaics are one way to comply.",
        "The revised Appenzell Innerrhoden Energy Act and Energy Ordinance took effect on 1 April 2020. Under the cantonal implementation guide, the requirement also applies to extensions and additional storeys above the minor-extension threshold.",
      ],
      bullets: [
        "The specific system size is set in the energy compliance documentation. No general kilowatt figure is prescribed.",
        "Appenzell Innerrhoden does not allow a substitute levy or offsetting through another building.",
        "A surplus on another building does not replace the requirement on the affected new building.",
        "A Minergie-certified building must also meet the on-site electricity requirement.",
        "An exemption may be possible in special circumstances. It must be justified through enhanced energy efficiency and the cantonal documentation.",
      ],
      sourceIds: ["ai-energievollzug", "ai-implementation-2020"],
      notice: {
        title: "Important for new buildings",
        text: "There is no substitute levy for the on-site electricity requirement in Appenzell Innerrhoden. Surplus electricity from another building is not a substitute either.",
        status: "important",
      },
    },
    {
      id: "foerderung",
      title: "Understanding the available support",
      paragraphs: [
        "Photovoltaic installations qualify for the federal one-off payment (EIV) through Pronovo. The reviewed sources show no general cantonal investment contribution for the installation in Appenzell Innerrhoden.",
        "Pronovo handles the federal procedure. Check the conditions, deadlines and project-specific amount there.",
        "The cantonal programme supports an initial solar-energy consultation for thermal or electrical solar installations. The client pays CHF 100, and only the Energie AR/AI association provides the consultation.",
        "If you also book the association’s “renewable heating” initial consultation at the same time, the solar consultation is free. This means no client charge for the combined advice, not a free solar installation or free electricity.",
      ],
      sourceIds: ["ai-pronovo", "ai-programme"],
    },
    {
      id: "bewilligung",
      title: "Do I need planning permission?",
      paragraphs: [
        "A sufficiently adapted rooftop solar installation in a building or agricultural zone generally only requires notification. Other installations, protected properties or protected zones require planning permission.",
        "Installations that are not roof-mounted or not sufficiently adapted also require permission. This applies particularly in townscape and landscape protection zones; rooftop photovoltaics are not automatically exempt.",
        "Clarify the cantonal information sheet and form with the competent authority before starting.",
      ],
      sourceIds: ["ai-solaranlagen"],
      module: {
        kind: "process-flow",
        title: "Three procedural checks",
        intro:
          "Location and design determine whether notification is sufficient.",
        items: [
          {
            title:
              "1. Is the installation on a roof in a building or agricultural zone?",
            text: "Yes: check that it is sufficiently adapted and prepare the notification. No: clarify planning permission.",
            sourceIds: ["ai-solaranlagen"],
          },
          {
            title:
              "2. Is it sufficiently adapted, with no protected property affected?",
            text: "Yes: notification is the intended route. Permission is required if adaptation is insufficient or a protected property, protected zone or townscape zone is affected.",
            sourceIds: ["ai-solaranlagen"],
          },
          {
            title: "3. Complete the energy documentation",
            text: "For a planning application, submit the energy file, forms, plans and evidence. The client then confirms compliant execution before occupation or before the installation starts operating.",
            sourceIds: ["ai-energievollzug"],
          },
        ],
      },
    },
    {
      id: "kosten",
      title: "What does a solar installation cost here?",
      paragraphs: [
        "The canton publishes no fixed PV price. The roof, system size and chosen equipment are the main factors.",
        "The CHF 100 solar-advice fee is a client contribution for advice, not an investment grant. A good quote describes the actual building and itemises the work.",
        "The most useful comparison is therefore not a generic online price, but several quotes for the same project.",
      ],
      bullets: [
        "Roof area, roof form and usable module area, plus roof type, substructure and adaptation",
        "System output and orientation",
        "Scaffolding, access and site work",
        "Electrical work, meter and grid connection",
        "Inverter",
        "Battery storage and electric-vehicle charge point",
        "Expected self-consumption",
        "Installer, warranties, documentation and scope",
      ],
      sourceIds: ["ai-programme", "ai-solaranlagen", "ai-pronovo"],
    },
    {
      id: "fuer-wen",
      title: "Who stands to benefit most from a solar installation here?",
      paragraphs: [
        "Early clarification is especially important for a new home: on-site generation, energy documentation, roof design and grid connection are planned together. For a larger extension or additional storey, check the minor-extension threshold with the cantonal energy office.",
        "For existing roofs, solar advice is useful if potential, self-consumption and links with heating or mobility remain open. Owners of protected properties, or projects in townscape or landscape protection zones, should clarify the procedure before requesting quotes.",
      ],
      bullets: [
        "New building or relevant extension: clarify on-site generation and energy documentation first.",
        "Existing building: use advice before the investment decision.",
        "Protected property or zone: coordinate notification and permission early with the authority.",
      ],
      sourceIds: [
        "ai-implementation-2020",
        "ai-energievollzug",
        "ai-programme",
        "ai-solaranlagen",
      ],
    },
  ],
  faqs: [
    {
      question: "Does Appenzell Innerrhoden offer a cantonal PV contribution?",
      answer:
        "The federal one-off payment (EIV) through Pronovo is documented for photovoltaic installations. The cantonal offer is the initial solar-energy consultation; the reviewed sources show no general cantonal investment grant for the installation.",
      sourceIds: ["ai-pronovo", "ai-programme"],
    },
    {
      question: "What does the solar consultation cost?",
      answer:
        "Solar advice costs CHF 100 and is provided exclusively by the Energie AR/AI association.",
      sourceIds: ["ai-programme"],
    },
    {
      question: "When is the consultation free?",
      answer:
        "It is free when held by Energie AR/AI at the same time as its “renewable heating” initial consultation. This applies to advice, not the solar installation.",
      sourceIds: ["ai-programme"],
    },
    {
      question: "Must new buildings generate their own electricity?",
      answer:
        "Yes. Since 1 April 2020, Appenzell Innerrhoden energy law has required new homes to generate some electricity on site. The guide also applies the requirement to extensions and additional storeys above the minor-extension threshold; photovoltaics are one solution.",
      sourceIds: ["ai-energievollzug", "ai-implementation-2020"],
    },
    {
      question: "Must Minergie buildings also generate their own electricity?",
      answer:
        "Yes. Minergie-certified buildings must also meet Appenzell Innerrhoden energy-law requirements for on-site electricity generation.",
      sourceIds: ["ai-implementation-2020"],
    },
    {
      question: "Do I need planning permission?",
      answer:
        "A sufficiently adapted rooftop installation in a building or agricultural zone requires notification. Installations outside this case, on protected properties or in townscape and landscape protection zones require permission.",
      sourceIds: ["ai-solaranlagen"],
    },
    {
      question: "Who pays the EIV?",
      answer:
        "The federal one-off payment (EIV) is administered through Pronovo. Cantonal solar advice is separate and does not replace the EIV.",
      sourceIds: ["ai-pronovo", "ai-programme"],
    },
  ],
  sources: [
    {
      id: "ai-pronovo",
      authority: "Pronovo / Swiss Confederation",
      title: "One-off payment (EIV) for photovoltaic installations",
      url: "https://pronovo.ch/de/foerderung/photovoltaik",
    },
    {
      id: "ai-programme",
      authority: "Canton of Appenzell Innerrhoden",
      title: "Cantonal support: initial solar-energy consultation",
      url: "https://www.ai.ch/themen/planen-und-bauen/energie/foerderprogramme/gebaeudesanierung",
    },
    {
      id: "ai-energievollzug",
      authority: "Canton of Appenzell Innerrhoden",
      title: "Energy-law implementation and new-building requirements",
      url: "https://ai.ch/themen/planen-und-bauen/energie/energievollzug",
    },
    {
      id: "ai-implementation-2020",
      authority: "Canton of Appenzell Innerrhoden",
      title: "Guidance on cantonal Energy Act implementation, version 1",
      url: "https://ai.ch/themen/planen-und-bauen/energie/energievollzug/dokumente/hinweise-vollzugspraxis-energ-ai-v-1.pdf/download",
    },
    {
      id: "ai-solaranlagen",
      authority: "Canton of Appenzell Innerrhoden",
      title: "Solar installations: notification and permission procedure",
      url: "https://www.ai.ch/themen/planen-und-bauen/baugesuch-1/solaranlagen",
    },
  ],
};
