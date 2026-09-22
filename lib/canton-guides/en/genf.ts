import type { CantonGuide } from '../types';

const sources = [
  {
    id: 'ge-obligation',
    authority: "Republic and canton of Geneva",
    title: "Solar energy – requirements for new buildings and renovations",
    url: 'https://www.ge.ch/installer-panneaux-solaires-batiment/solaire-obligation-constructions-neuves-renovations',
  },
  {
    id: 'ge-consommateurs',
    authority: "Republic and canton of Geneva",
    title: "Solar energy – requirements for medium-sized consumers (>0.2 GWh/year)",
    url: 'https://www.ge.ch/installer-panneaux-solaires-batiment/solaire-obligation-moyens-consommateurs-conso-elec02gwh',
  },
  {
    id: 'ge-meldung',
    authority: "Geneva Energy",
    title: "Solar panels and heat pumps: notice period before construction reduced to 14 days",
    url: 'https://www.ge.ch/blog/geneve-energie/panneaux-solaires-pompes-chaleur-delai-annonce-ouverture-chantier-reduit-14-jours-12-02-2026',
  },
  {
    id: 'ge-foerderung',
    authority: "OCEN, Republic and Canton of Geneva",
    title: "2026 energy grants: 80 million francs",
    url: 'https://www.ge.ch/blog/geneve-energie/subventions-energetiques-2026-80-millions-francs-accelerer-renovation-du-parc-bati-genevois-2-02-2026',
  },
  {
    id: 'ge-pronovo',
    authority: "Pronovo AG on behalf of the federal government",
    title: "Frequently asked questions about the one-off payment (EIV) and solar subsidies in Switzerland",
    url: 'https://pronovo.ch/de/foerderung/photovoltaik/haeufige-fragen/',
  },
] as const;

export const guide: CantonGuide = {
  id: 'genf',
  path: '/en/solar-panels-geneva',
  canton: "Geneva",
  title: "Solar panels in Geneva 2026: requirements and grants | PvPro.ch",
  description:
    "Solar panels in Geneva: requirements for new buildings and roof renovations, recognised exceptions and the permitting rules for 2026.",
  h1: "Solar panels in Geneva: when PV is mandatory in 2026",
  intro: [
    "In Geneva, solar may be mandatory for new buildings, roof renovations and certain energy-related renovations. Suitable roof areas must always be used.",
    "For locations with more than 0.2 GWh of electricity consumption per year, a PV deadline of 2030 generally applies. For certain systems that do not require a permit, 14 days of notification before the start of construction has been sufficient since February 2026.",
  ],
  quickFacts: [
    {
      value: "New building",
      label: "Always use suitable roof areas for solar energy",
      sourceIds: ['ge-obligation'],
    },
    {
      value: "Roof renovation",
      label: "Can trigger the solar usage obligation",
      sourceIds: ['ge-obligation'],
    },
    {
      value: ">0.2 GWh/year",
      label: "threshold for larger electricity consumers; PV basically until 2030",
      sourceIds: ['ge-consommateurs'],
    },
    {
      value: "14 days",
      label: "Notification before the start of construction for certain projects that do not require a permit",
      sourceIds: ['ge-meldung'],
    },
  ],
  sections: [
    {
      id: 'pflicht',
      title: "When is solar mandatory in Geneva?",
      paragraphs: [
        "Yes, the use of solar energy may be mandatory in Geneva. This particularly applies to new buildings, roof renovations and locations with an annual electricity consumption of more than 0.2 GWh.",
        "The obligation concerns suitable roof areas and is not automatically a requirement for every existing residential building. Recognized exceptions and other energy-related renovations must be checked on a case-by-case basis.",
      ],
      sourceIds: ['ge-obligation', 'ge-consommateurs'],
      module: {
        kind: 'obligation-triggers',
        title: "When will solar be mandatory in Geneva?",
        intro:
          "In addition to these three triggers, certain energy renovations can also be included. Technical impossibility, disproportionate economic efficiency and protective interests can be recognized exceptions.",
        items: [
          {
            title: "New building",
            text: "Suitable roof areas of a new building must always be used for solar energy.",
            sourceIds: ['ge-obligation'],
          },
          {
            title: "Roof renovation",
            text: "A roof renovation can trigger the obligation to use solar. Therefore, check the roof area and possible exceptions before planning.",
            sourceIds: ['ge-obligation'],
          },
          {
            title: "Larger electricity consumer",
            text: "If electricity consumption exceeds 0.2 GWh per year, suitable roof areas must generally be equipped with PV by 2030, unless a recognized exception applies.",
            sourceIds: ['ge-consommateurs'],
          },
        ],
      },
    },
    {
      id: 'dachsanierung',
      title: "What applies to a roof renovation?",
      paragraphs: [
        "In Geneva, roof renovation is one of the projects that can trigger an obligation to use solar. This concerns the suitable roof area, not automatically every roof and not every existing house.",
        "Certain energy-saving renovations can also be relevant. Therefore, before placing the order, have it clarified whether your specific project falls under the obligation and whether there is a recognized exception.",
      ],
      sourceIds: ['ge-obligation'],
      notice: {
        title: "Not every renovation is the same",
        text: "The Geneva Rules distinguish between new buildings, roof renovations, certain energy-related renovations and other buildings. This does not result in a general PV requirement for all existing houses.",
        status: 'important',
      },
    },
    {
      id: 'verbraucher',
      title: "The 2030 rule for larger electricity consumers",
      paragraphs: [
        "If a location consumes more than 0.2 GWh of electricity per year, it is considered a major electricity consumer for this rule. The suitable roof areas must generally be equipped with photovoltaics by 2030.",
        "0.2 GWh corresponds to 200,000 kWh. For a normal single-family home, this threshold is usually not the relevant point; What is important is the actual annual consumption of the location.",
        "Even with this rule, recognized exceptions remain possible. These include technical impossibility, disproportionate economic efficiency and protective interests.",
      ],
      sourceIds: ['ge-consommateurs', 'ge-obligation'],
    },
    {
      id: 'ausnahmen',
      title: "What exceptions are there?",
      paragraphs: [
        "Yes, exceptions are possible if solar on the suitable roof area is not technically possible or is economically disproportionate. Protection interests can also speak against solar use.",
        "An exception does not apply across the board to every project. The responsible body must examine the specific situation and the applicable conditions.",
      ],
      bullets: [
        "Technically not possible: Solar use cannot be implemented due to the specific structural or technical situation.",
        "Economically disproportionate: The effort is disproportionate under the applicable conditions.",
        "Protection interests: Monument, townscape or other protection interests can justify an exception.",
      ],
      sourceIds: ['ge-obligation', 'ge-consommateurs'],
    },
    {
      id: 'bewilligung',
      title: "Authorization and 14-day rule",
      paragraphs: [
        "No, a solar system does not always require a complete building application. Sufficiently adapted systems can be license-free under the applicable conditions; the formal rules still apply.",
        "Since February 2026, the deadline for reporting the start of construction for certain solar projects that do not require a permit has been shortened from 30 to 14 days. In these cases, notification must be made 14 days before construction begins.",
        "Whether this simplified procedure is sufficient depends on the specific project. OCEN is relevant for questions about energy content, and OAC is also relevant for questions about building law.",
      ],
      sourceIds: ['ge-meldung', 'ge-obligation'],
      module: {
        kind: 'process-flow',
        title: "Clarify before construction starts",
        intro: "The 14 days only apply to corresponding projects that do not require a permit. Check the procedure before work or orders start.",
        items: [
          {
            title: "Classify project",
            text: "Check whether the system has been sufficiently adapted and whether a procedure without a permit is possible.",
            sourceIds: ['ge-obligation'],
          },
          {
            title: "Report start of construction",
            text: "Since February 2026, notification of the affected non-licensed projects must be made 14 days before the start of construction.",
            sourceIds: ['ge-meldung'],
          },
          {
            title: "Clarify position",
            text: "OCEN is relevant to energy issues. OAC must be consulted for the building law classification and the necessary building application.",
            sourceIds: ['ge-obligation', 'ge-meldung'],
          },
        ],
      },
    },
    {
      id: 'foerderung',
      title: "Funding in Geneva",
      paragraphs: [
        "Geneva's energy funding budget for 2026 is a total of CHF 80 million. This is the entire budget for energy, not a pure PV funding pot.",
        "The specific funding for photovoltaics and the funding programs for buildings must be examined separately. Applications for relevant building programs must generally be submitted before work begins.",
        "The most important federal funding for photovoltaics runs through Pronovo. The regular one-time payment (EIV) currently applies from a minimum output of 2 kW. Additional federal bonuses, such as the tilt angle bonus from 75°, the parking area bonus for qualifying systems from 100 kW or the winter electricity bonus 2026 for systems from 100 kW under special conditions, have their own requirements and may not be added up as a fixed total.",
      ],
      sourceIds: ['ge-foerderung', 'ge-pronovo'],
      notice: {
        title: "CHF 80 million is not CHF 80 million PV funding",
        text: "The number describes the entire Geneva energy funding budget for 2026. Whether your PV system or a building measure is supported depends on the appropriate program and the time of the application.",
        status: 'important',
      },
    },
    {
      id: 'begriffe',
      title: "Geneva solar rules simply explained",
      paragraphs: [
        "Photovoltaics (PV) generates electricity using solar modules. When a rule speaks of solar energy or solar use, it does not automatically mean only a specific technical system; the specific regulation decides.",
        "A suitable roof area is a roof area that can be used for solar energy in accordance with the Geneva specifications. In the case of a project without a permit, the lack of a building permit does not mean that no notification or no further rules apply.",
      ],
      bullets: [
        "GWh: A gigawatt hour is a unit of electricity. 0.2 GWh corresponds to 200,000 kWh.",
        "Notification procedure: The start of construction is announced to the responsible authority without the need for a complete building application. This only applies if the legal requirements are met.",
        "Energy renovation: This refers to a renovation related to energy consumption or energy supply. Certain such renovations can also be a trigger.",
        "OCEN and OAC: OCEN is the cantonal energy agency. OAC is relevant for questions about the building permit process.",
      ],
      sourceIds: ['ge-obligation', 'ge-consommateurs', 'ge-meldung'],
    },
    {
      id: 'kosten',
      title: "How much does a solar system cost here?",
      paragraphs: [
        "The canton does not publish a fixed price for solar systems. The decisive factors are the roof, system size, electrical work and equipment.",
        "Compare multiple offers for the same project. Check whether all work, permits or reports, the network connection and the guarantees are described in the same way.",
      ],
      bullets: [
        "Roof area, roof shape and condition",
        "System size and module performance",
        "Orientation and usable module area",
        "Scaffolding, access and construction site effort",
        "Electrical work, meters and mains connection",
        "Inverter",
        "Battery storage and charging infrastructure",
        "Scope of offer, guarantees and specialist company",
      ],
      sourceIds: ['ge-obligation', 'ge-pronovo'],
    },
    {
      id: 'fuer-wen',
      title: "Who is particularly interested in solar in Geneva?",
      paragraphs: [
        "Owners who are building new buildings, renovating the roof or planning an energy-efficient renovation should check particularly early. If there is a high level of electricity consumption, the deadline of 2030 may also be important.",
        "Even without an automatic requirement, a suitable system can make sense if the roof, consumption and equipment match. The decisive factors are the specific roof area, the electricity requirement, the offer and the applicable funding conditions.",
      ],
      sourceIds: ['ge-obligation', 'ge-consommateurs', 'ge-pronovo'],
    },
  ],
  faqs: [
    {
      question: "Is photovoltaics mandatory for a new building in Geneva?",
      answer:
        "Solar energy must always be used on suitable roof surfaces of a new building. The rule is not a blanket requirement for every PV system on every existing house; recognized exceptions must be examined.",
      sourceIds: ['ge-obligation'],
    },
    {
      question: "What applies to a roof renovation?",
      answer:
        "A roof renovation can trigger the obligation to use solar in Geneva. Whether it applies in your case depends on the specific project, the suitable roof area and possible exceptions.",
      sourceIds: ['ge-obligation'],
    },
    {
      question: "Does every existing home have to install PV?",
      answer:
        "No. The Geneva rules do not create a general PV requirement for every existing house. However, a roof renovation, a specific energy renovation or very high electricity consumption can be relevant.",
      sourceIds: ['ge-obligation', 'ge-consommateurs'],
    },
    {
      question: "What does the limit of 0.2 GWh mean?",
      answer:
        "0.2 GWh corresponds to 200,000 kWh of electricity consumption per year. Locations above this limit must generally equip suitable roof areas with PV by 2030, unless a recognized exception applies.",
      sourceIds: ['ge-consommateurs'],
    },
    {
      question: "Are there exceptions?",
      answer:
        "Yes. An exception may be possible in the event of technical impossibility, disproportionate economic efficiency or conflicting protective interests. The specific situation must be examined according to the Geneva guidelines.",
      sourceIds: ['ge-obligation', 'ge-consommateurs'],
    },
    {
      question: "Do I need a building permit?",
      answer:
        "No, not always. Sufficiently adapted systems can be license-free under the applicable conditions; Other projects may require proper construction procedures.",
      sourceIds: ['ge-obligation', 'ge-meldung'],
    },
    {
      question: "What does the 14 day period mean?",
      answer:
        "For certain solar projects that do not require a permit, the start of construction must be reported 14 days in advance since February 2026. The shortened deadline does not automatically apply to every solar project.",
      sourceIds: ['ge-meldung'],
    },
    {
      question: "Is the CHF 80 million pure PV funding?",
      answer:
        "No. CHF 80 million is the entire Geneva energy funding budget for 2026 and not a pure PV funding pot. The specific PV funding and building programs must be examined separately on their own terms.",
      sourceIds: ['ge-foerderung'],
    },
    {
      question: "Can other energy renovations trigger the obligation?",
      answer:
        "Yes, certain energy-related renovations, in addition to new buildings and roof renovations, can fall under the Geneva Solar Use Rules. Whether this is the case depends on the type and scope of the specific project.",
      sourceIds: ['ge-obligation'],
    },
    {
      question: "How does federal funding via Pronovo work?",
      answer:
        "The most important federal funding for photovoltaics runs through Pronovo; The regular one-off payment currently applies from 2 kW. Additional federal bonuses, for example for tilt angles from 75° or qualifying systems from 100 kW, are voluntary funding options with their own requirements and may not be added as a flat rate with other contributions to create a guaranteed sum.",
      sourceIds: ['ge-pronovo'],
    },
    {
      question: "Where can I get information about energy and building law?",
      answer:
        "OCEN is relevant in Geneva for questions about energy. OAC is also important for the building law classification and any building application.",
      sourceIds: ['ge-obligation', 'ge-meldung'],
    },
  ],
  sources: [...sources],
};