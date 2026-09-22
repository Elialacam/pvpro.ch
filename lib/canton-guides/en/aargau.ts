import type { CantonGuide } from "../types";
export const guide: CantonGuide = {
  id: "aargau",
  path: "/en/solar-panels-aargau",
  canton: "Aargau",
  title: "Solar panels in Aargau 2026: requirements and support | PvPro.ch",
  description:
    "Solar power in Aargau: requirements for new buildings, grants, notification procedure, and roof and façade rules in 2026.",
  h1: "Solar panels in Aargau: what property owners need to know in 2026",
  intro: [
    "In Aargau, the solar requirement applies only to certain new buildings, not every existing home. This guide explains the rules and the support available for advice and renovation.",
  ],
  quickFacts: [
    {
      value: ">300 m²",
      label: "relevant building area for affected new buildings",
      sourceIds: ["ag-solarbroschuere-2026", "ag-energy-law"],
    },
    {
      value: "20%",
      label: "minimum module area where the requirement applies",
      sourceIds: ["ag-solarbroschuere-2026", "ag-energy-law"],
    },
    {
      value: "30 days",
      label: "waiting period after an unopposed notification",
      sourceIds: ["ag-solarbroschuere-2026"],
    },
    {
      value: "CHF 350",
      label:
        "cantonal contribution towards advice on self-generated electricity; client share from CHF 150",
      sourceIds: ["ag-beratung-2026"],
    },
  ],
  sections: [
    {
      id: "entscheidung",
      title: "Decision tree: does Aargau’s solar requirement apply?",
      paragraphs: [
        "No, Aargau’s solar requirement under section 26a of the Energy Ordinance does not apply to every home. It concerns certain new buildings.",
        "The key threshold is a relevant building area of more than 300 m². Single-family homes (SIA building category II) are exempt even if several buildings together exceed 300 m².",
      ],
      sourceIds: ["ag-energy-law", "ag-solarbroschuere-2026"],
      notice: {
        title: "Important for homeowners",
        text: "More than 300 m² does not mean every existing single-family home is subject to a solar requirement. Consider the new-build status, building category, area and possible exemptions together.",
        status: "important",
      },
      module: {
        kind: "decision-tree",
        title: "Does the solar requirement apply to my new building?",
        intro:
          "Answer these questions in order to see quickly whether your project is affected.",
        items: [
          {
            title: "1. Is it a new building?",
            text: "No: this requirement does not generally apply to existing buildings. Yes: check the building category and relevant building area.",
            sourceIds: ["ag-energy-law", "ag-solarbroschuere-2026"],
          },
          {
            title: "2. Is it a single-family home (SIA building category II)?",
            text: "Yes: the current Aargau solar brochure exempts these homes, even where several buildings together exceed 300 m². No: check the area.",
            sourceIds: ["ag-solarbroschuere-2026"],
          },
          {
            title: "3. Is the relevant building area greater than 300 m²?",
            text: "No: this requirement does not apply. Yes: a photovoltaic or solar thermal installation must generally be provided on the roof or façade.",
            sourceIds: ["ag-energy-law", "ag-solarbroschuere-2026"],
          },
          {
            title: "4. Does an exemption apply?",
            text: "Yes: protection rules or excessively high expected costs may permit an exemption. Details follow below. No: the installation must cover at least 20% of the relevant building area.",
            sourceIds: ["ag-energy-law", "ag-solarbroschuere-2026"],
          },
        ],
      },
    },
    {
      id: "solarpflicht",
      title: "What does Aargau’s solar requirement mean in practice?",
      paragraphs: [
        "On an affected new building, photovoltaic modules or a solar thermal installation on the roof or façade must cover at least 20% of the relevant building area. Area is decisive, not a specified output in kilowatts.",
        "Photovoltaic modules and glazed, selectively coated absorbers are added together for the calculation. The official term for the building area used is the “chargeable building area”.",
        "The rule does not apply to every existing home. Besides the exemption for category II single-family homes, there are further exemptions, including air-supported structures, greenhouses with glazed roofs and polytunnels.",
        "An exemption may be possible where townscape or landscape protection is heightened, or where the cost is economically disproportionate. The brochure cites failure to pay back within 25 years and expected annual yields below 70 kWh/m² for photovoltaics or 200 kWh/m² for solar thermal as economic criteria. These are statutory criteria, not a return or payback guarantee.",
      ],
      bullets: [
        "The minimum area is 20% for an affected installation; there is no blanket kilowatt requirement.",
        "The exemption must be substantiated in the building and energy documentation.",
      ],
      sourceIds: ["ag-energy-law", "ag-solarbroschuere-2026"],
    },
    {
      id: "foerderung",
      title: "Aargau support in 2026",
      paragraphs: [
        "The federal one-off payment (EIV), administered by Pronovo, supports the solar installation itself. The canton pays CHF 350 towards initial advice on self-generated electricity; CHF 20, CHF 30 or CHF 100 per m² is available only together with a supported renovation and photovoltaics.",
        "The EIV amount is set under the applicable federal conditions for the project. It is separate from cantonal advice and contributions for the building envelope.",
        "The initial advice covers topics including photovoltaic potential, self-consumption, storage, electric mobility and electricity use. Clients contribute at least CHF 150. This is a planning service, not another grant for the installation.",
        "The three building-envelope contributions require simultaneous installation of photovoltaics: CHF 20 per m² for a green flat roof, CHF 30 per m² for a roof-mounted system on a pitched roof, and CHF 100 per m² for an integrated or façade installation on a pitched roof.",
      ],
      bullets: [
        "Green flat roof with PV: +CHF 20/m² as part of the building-envelope measure.",
        "Pitched roof with roof-mounted system: +CHF 30/m² as part of the building-envelope measure.",
        "Pitched roof with integrated or façade system: +CHF 100/m² as part of the building-envelope measure.",
        "These three amounts do not support a stand-alone PV order. Check the application for the eligible renovation before construction starts.",
      ],
      sourceIds: ["ag-pronovo", "ag-beratung-2026", "ag-programm-2026"],
      notice: {
        title: "Do not confuse these payments",
        text: "CHF 350 pays for advice, not the solar installation. The CHF 20, CHF 30 and CHF 100 per m² payments are also tied to a supported building-envelope renovation with PV.",
        status: "important",
      },
    },
    {
      id: "bewilligung",
      title: "Planning permission or notification?",
      paragraphs: [
        "Since 1 January 2026, sufficiently adapted roof or façade installations can often be notified instead of requiring a full planning application. This does not automatically apply to every façade.",
        "Planning permission may be required for protected properties, sensitive townscapes or installations that are not sufficiently adapted. Notifications use the cantonal solar form on the EVEN online platform.",
        "Before work starts, a complete elevation, dimensioned section, installation data, data sheets and location plan must be submitted.",
      ],
      sourceIds: ["ag-solarbroschuere-2026", "ag-energy-law"],
      module: {
        kind: "process-flow",
        title: "The Aargau procedure",
        intro:
          "Whether notification is sufficient depends on the design, location and protection status.",
        items: [
          {
            title: "1. Classify the project",
            text: "Sufficiently adapted roof or façade installation: check notification. If it is not sufficiently adapted, concerns a protected property or is in a sensitive zone: clarify planning permission with the municipality.",
            sourceIds: ["ag-solarbroschuere-2026"],
          },
          {
            title: "2. Submit notification through EVEN",
            text: "Complete the solar notification form before construction starts. Include an elevation, dimensioned section, installation data, data sheets and location plan.",
            sourceIds: ["ag-solarbroschuere-2026"],
          },
          {
            title: "3. Wait 30 days",
            text: "A notifiable installation may proceed if the authority raises no objection within 30 days of receiving the notification. If objections are raised or permission is required, the competent authority’s decision applies.",
            sourceIds: ["ag-solarbroschuere-2026"],
          },
        ],
      },
    },
    {
      id: "kosten",
      title: "What does a solar installation cost here?",
      paragraphs: [
        "The canton does not publish a fixed PV price. The main factors are the roof, system size and chosen equipment.",
        "A good quote describes the specific building and itemises the work. This lets you compare support conditions, self-consumption and technical execution.",
        "The most useful comparison is therefore not a generic online price, but several quotes for the same project.",
      ],
      bullets: [
        "Roof area, roof form and usable module area, plus the suitable roof-mounted, integrated or façade solution",
        "System output and orientation",
        "Scaffolding, access and site work",
        "Electrical work, meter and grid connection",
        "Inverter",
        "Battery storage and charging infrastructure",
        "Expected household self-consumption",
        "Installer experience, warranties and scope",
      ],
      sourceIds: ["ag-pronovo", "ag-solarbroschuere-2026"],
    },
    {
      id: "fuer-wen",
      title: "Who stands to benefit most from solar panels in Aargau?",
      paragraphs: [
        "Plan particularly early for a new building above the area threshold. Choose between photovoltaics and solar thermal in good time so that the roof, façade, electrical design and energy compliance documentation align.",
        "For an existing building, initial advice is useful when combining a roof renovation, battery, heat pump, electric mobility or higher self-consumption. If the building envelope is insulated at the same time, check the three bonus cases, but do not mistake them for general PV support.",
      ],
      sourceIds: ["ag-energy-law", "ag-beratung-2026", "ag-programm-2026"],
    },
  ],
  faqs: [
    {
      question: "Is there a solar requirement in Aargau?",
      answer:
        "Yes, but not for every building. Certain new buildings with more than 300 m² of relevant building area must generally provide photovoltaics or solar thermal on the roof or façade. The exemption for SIA category II single-family homes and other statutory exemptions must be checked.",
      sourceIds: ["ag-energy-law", "ag-solarbroschuere-2026"],
    },
    {
      question: "Are single-family homes affected?",
      answer:
        "No. The solar brochure expressly exempts SIA category II single-family homes, even if several buildings together exceed 300 m² of relevant building area. The area test remains important for other categories.",
      sourceIds: ["ag-solarbroschuere-2026"],
    },
    {
      question:
        "How large must the installation be on an affected new building?",
      answer:
        "Photovoltaic modules and glazed, selectively coated absorbers in a solar thermal installation must together cover at least 20% of the relevant building area. The rule sets no blanket minimum in kilowatts.",
      sourceIds: ["ag-energy-law", "ag-solarbroschuere-2026"],
    },
    {
      question: "Does a PV installation need planning permission?",
      answer:
        "Not necessarily. A sufficiently adapted roof or façade installation may only need notification. Permission must be clarified for protected properties, sensitive zones or insufficiently adapted systems; submit the form through EVEN.",
      sourceIds: ["ag-solarbroschuere-2026"],
    },
    {
      question: "What support is available in 2026?",
      answer:
        "The federal one-off payment (EIV) is administered by Pronovo. The canton also contributes CHF 350 towards initial advice on self-generated electricity, with a client share from CHF 150. CHF 20, CHF 30 or CHF 100 per m² applies to a combination of building-envelope insulation and photovoltaics, not stand-alone PV support.",
      sourceIds: ["ag-pronovo", "ag-beratung-2026", "ag-programm-2026"],
    },
    {
      question: "Is there a bonus for roof renovation and photovoltaics?",
      answer:
        "Yes, if the photovoltaics are installed at the same time as the supported building-envelope measure. The bonus is CHF 20/m² for a green flat roof, CHF 30/m² for a roof-mounted system on a pitched roof, or CHF 100/m² for an integrated pitched-roof or façade installation.",
      sourceIds: ["ag-programm-2026"],
    },
    {
      question: "When may construction start after notification?",
      answer:
        "A sufficiently adapted, notifiable installation may proceed if the authority raises no objection within 30 days of receiving the notification. The notification must first be submitted in full through EVEN.",
      sourceIds: ["ag-solarbroschuere-2026"],
    },
  ],
  sources: [
    {
      id: "ag-solarbroschuere-2026",
      authority: "Canton of Aargau",
      title: "Solar brochure, 4th edition 2026",
      url: "https://www.ag.ch/media/kanton-aargau/bvu/energie/bauen-energie/vollzugshilfen-und-formulare/solarbroschuere-2026.pdf",
    },
    {
      id: "ag-energy-law",
      authority: "Canton of Aargau",
      title: "Energy Ordinance section 26a and energy-law implementation",
      url: "https://gesetzessammlungen.ag.ch/app/de/texts_of_law/773.211/versions/3276",
    },
    {
      id: "ag-programm-2026",
      authority: "Canton of Aargau",
      title: "2026 energy support programme",
      url: "https://www.ag.ch/media/kanton-aargau/bvu/energie/foerderungen/foerderprogramm-2026.pdf",
    },
    {
      id: "ag-beratung-2026",
      authority: "Canton of Aargau",
      title: "Advice under the 2026 support programme",
      url: "https://www.ag.ch/media/kanton-aargau/bvu/energie/foerderungen/beratungen-foerderprogramm.pdf",
    },
    {
      id: "ag-pronovo",
      authority: "Pronovo / Swiss Confederation",
      title: "One-off payment (EIV) for photovoltaic installations",
      url: "https://pronovo.ch/de/foerderung/photovoltaik",
    },
  ],
};
