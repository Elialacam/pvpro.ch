import type { CantonGuide } from "../types";
const sources = [
  {
    id: "ar-km21",
    authority: "Canton d’Appenzell Rhodes-Extérieures",
    title: "kM-21 Installation photovoltaïque",
    url: "https://ar.ch/verwaltung/departement-bau-und-volkswirtschaft/amt-fuer-umwelt/energie/foerderung/kantonale-foerderung/km-21-photovoltaikanlage-1-1",
  },
  {
    id: "ar-2027",
    authority: "Canton d’Appenzell Rhodes-Extérieures",
    title: "Subventions cantonales et adaptation dès le 1er janvier 2027",
    url: "https://ar.ch/verwaltung/departement-bau-und-volkswirtschaft/amt-fuer-umwelt/energie/foerderung/kantonale-foerderung",
  },
  {
    id: "ar-energy-statistics",
    authority: "Canton d’Appenzell Rhodes-Extérieures",
    title: "Énergie solaire et potentiels solaires",
    url: "https://ar.ch/verwaltung/departement-bau-und-volkswirtschaft/amt-fuer-umwelt/energie/erneuerbare-energien/solarenergie",
  },
  {
    id: "ar-energy-concept",
    authority: "Canton d’Appenzell Rhodes-Extérieures",
    title: "Stratégie énergétique cantonale 2026–2035",
    url: "https://ar.ch/verwaltung/kantonskanzlei/rechtsdienst/politische-rechte/vernehmlassungen/abgeschlossene-vernehmlassungen/2026",
  },
  {
    id: "pronovo-eiv",
    authority: "Pronovo SA sur mandat de la Confédération",
    title: "Subventions pour installations photovoltaïques",
    url: "https://pronovo.ch/de/foerderung/photovoltaik",
  },
] as const;
export const guide: CantonGuide = {
  id: "appenzell-ausserrhoden",
  path: "/fr/solaire-appenzell-rhodes-exterieures",
  canton: "Appenzell Rhodes-Extérieures",
  title:
    "Photovoltaïque en Appenzell Rhodes-Extérieures: aides 2026/27 | PvPro.ch",
  description:
    "Aides PV en Appenzell Rhodes-Extérieures: supplément de 50% de la RU en 2026, transition et nouvelle aide au courant hivernal dès 2027.",
  h1: "Photovoltaïque en Appenzell Rhodes-Extérieures: aides 2026 et changements dès 2027",
  intro: [
    "En 2026, Appenzell Rhodes-Extérieures peut soutenir une installation solaire en plus des subventions fédérales. Dès 2027, les aides devraient davantage viser le courant hivernal et l’isolation thermique. La règle dépend du calendrier du projet.",
  ],
  quickFacts: [
    {
      value: "2026",
      label: "Jusqu’à 50 % de la subvention fédérale définitive en supplément",
      sourceIds: ["ar-km21"],
    },
    {
      value: "2027",
      label: "Aides davantage axées sur le courant hivernal",
      sourceIds: ["ar-2027"],
    },
    {
      value: "≥75°",
      label: "Inclinaison requise pour l’aide au courant hivernal dès 2027",
      sourceIds: ["ar-2027"],
    },
    {
      value: "CHF 300/kW",
      label: "Contribution prévue pour les installations hivernales dès 2027",
      sourceIds: ["ar-2027"],
    },
    {
      value: "Avant les travaux",
      label: "À l’avenir, déposer la demande au préalable",
      sourceIds: ["ar-2027"],
    },
  ],
  sections: [
    {
      id: "timeline",
      title: "2026 → transition → dès 2027",
      paragraphs: [
        "La date déterminante est celle du début de la fourniture d’électricité. Du 1er janvier 2022 au 31 août 2025, kM-21 permettait au maximum 100 % de la contribution unique fédérale (RU); depuis le 1er septembre 2025, le maximum actuel est de 50 %, avec dans les deux cas un plafond de CHF 100’000 par projet.",
        "Pour les installations fournissant leur première électricité entre le 1er janvier et le 31 décembre 2026, un délai transitoire court jusqu’à fin 2027 si elles ne sont ni optimisées pour l’hiver ni combinées à une isolation. Les 50 % portent sur la contribution fédérale, pas sur l’investissement. La demande doit parvenir au plus tard fin 2027; les autres conditions restent déterminantes.",
        "Dès le 1er janvier 2027 sont prévus une inclinaison d’au moins 75°, CHF 300/kW en plus du bonus national lié à l’inclinaison et CHF 90–150/m² pour une combinaison avec isolation. La demande devrait alors précéder les travaux.",
      ],
      sourceIds: ["ar-km21", "ar-2027"],
      module: {
        kind: "timeline",
        title: "Quelle règle vaut au début de la fourniture d’électricité?",
        intro: "Les dates indiquent l’aide applicable à chaque moment.",
        items: [
          {
            title: "Du 1er janvier 2022 au 31 août 2025",
            value: "max. 100 % RU",
            text: "Période antérieure: au maximum 100 % de la RU fédérale définitive.",
            sourceIds: ["ar-km21"],
          },
          {
            title: "Du 1er septembre 2025 à fin 2026",
            value: "max. 50 % RU",
            text: "Règle 2026 actuelle pour les installations éligibles; CHF 100’000 au plus par projet.",
            sourceIds: ["ar-km21"],
          },
          {
            title: "Transition jusqu’à fin 2027",
            value: "Demande au plus tard fin 2027",
            text: "Les installations 2022–2026 sans optimisation hivernale ni isolation combinée peuvent déposer leur demande jusqu’à fin 2027.",
            sourceIds: ["ar-2027"],
          },
          {
            title: "Dès le 1er janvier 2027",
            value: "avant les travaux",
            text: "Prévus: au moins 75°, CHF 300/kW supplémentaires et CHF 90–150/m² avec isolation.",
            sourceIds: ["ar-2027"],
          },
        ],
      },
      notice: {
        title: "Ne pas confondre 2026 et 2027",
        text: "La règle des 50 % relève de l’actuel kM-21. Le courant hivernal et l’isolation sont prévus dès 2027; vérifiez les directives alors en vigueur avant de planifier.",
        status: "future",
      },
    },
    {
      id: "regeln",
      title: "Qui reçoit la contribution cantonale en 2026?",
      paragraphs: [
        "La contribution 2026 couvre une nouvelle installation de production solaire ou son extension dans le canton, raccordée au réseau, d’au moins 2 kWp et bénéficiant d’une aide fédérale. Il faut la décision définitive de Pronovo, officiellement entrée en force; simples remplacement, assainissement, entretien et réparations sont exclus.",
        "La rétribution unique élevée sans consommation propre (HEIV sans consommation propre) et les installations issues d’enchères PV sont exclues. Si une obligation d’autoproduction impose une taille minimale, cette part n’est pas soutenue en plus. Les contributions de tiers peuvent réduire celle du canton, sauf celles des communes; le bonus d’altitude dès 1’500 m n’est pas augmenté.",
      ],
      bullets: [
        "Raccordement au réseau et au moins 2 kWp sont requis.",
        "La décision Pronovo définitive fonde le calcul.",
        "La HEIV sans consommation propre et les installations issues d’enchères PV sont exclues.",
        "Les contributions de tiers peuvent réduire celle du canton; les contributions communales font exception.",
      ],
      sourceIds: ["ar-km21", "pronovo-eiv"],
    },
    {
      id: "statistik",
      title: "Pourquoi AR mise sur le courant hivernal",
      paragraphs: [
        "AR oriente davantage les aides vers l’hiver, car les installations plus raides déplacent davantage de production vers cette saison. En 2024, les Rhodes-Extérieures ont produit quelque 80 GWh d’électricité renouvelable, soit environ 24 % de la consommation cantonale; 77 % provenaient du solaire.",
        "Fin 2024, le PV couvrait environ 10 % des toits et façades appropriés. D’ici 2035, au moins 40 % de la consommation cantonale devra provenir des énergies renouvelables; les installations principalement en toiture produisent environ trois quarts durant le semestre d’été. Ce n’est pas une garantie de rendement ou d’aide.",
      ],
      sourceIds: ["ar-energy-statistics", "ar-energy-concept"],
      module: {
        kind: "statistics",
        title: "Situation initiale des Rhodes-Extérieures",
        intro:
          "Les chiffres expliquent l’orientation des aides, sans constituer une prévision de rentabilité.",
        items: [
          {
            title: "Production renouvelable 2024",
            value: "environ 80 GWh",
            text: "Électricité renouvelable dans le canton en 2024.",
            sourceIds: ["ar-energy-concept"],
          },
          {
            title: "Part de la consommation cantonale",
            value: "environ 24 %",
            text: "Part de la consommation électrique cantonale.",
            sourceIds: ["ar-energy-concept"],
          },
          {
            title: "Part de l’énergie solaire",
            value: "77 %",
            text: "Part du solaire dans cette production.",
            sourceIds: ["ar-energy-concept"],
          },
          {
            title: "Toits et façades appropriés",
            value: "environ 10 % équipés",
            text: "État fin 2024.",
            sourceIds: ["ar-energy-statistics", "ar-energy-concept"],
          },
          {
            title: "Objectif cantonal 2035",
            value: "au moins 40 %",
            text: "Objectif pour la consommation électrique cantonale.",
            sourceIds: ["ar-energy-concept"],
          },
          {
            title: "Semestre d’été des installations en toiture",
            value: "environ trois quarts",
            text: "Elles produisent environ trois quarts en été; les plus raides produisent davantage en hiver.",
            sourceIds: ["ar-energy-concept"],
          },
        ],
      },
    },
    {
      id: "foerderung",
      title: "Subventions 2026 en Appenzell Rhodes-Extérieures",
      paragraphs: [
        "En 2026, kM-21 peut compléter jusqu’à 50 % de la RU fédérale définitive, au maximum CHF 100’000 par projet. Ces 50 % ne portent pas sur les coûts d’installation et ne sont pas garantis pour chaque projet.",
        "Pronovo détermine d’abord la RU fédérale. En 2026, la demande cantonale se fait en ligne après mise en service et décision Pronovo entrée en force; pour les aides hivernales ou à l’isolation prévues dès 2027, prévoyez une demande avant les travaux.",
      ],
      sourceIds: ["ar-km21", "ar-2027", "pronovo-eiv"],
    },
    {
      id: "bewilligung",
      title: "Autorisation, planification et dépôt",
      paragraphs: [
        "La demande de subvention ne remplace pas l’examen du droit de la construction. Avant la commande, clarifiez forme du toit, intérêts de protection, raccordement et compétence communale; en 2026, la demande suit l’achèvement, tandis que les variantes annoncées dès 2027 l’exigent avant les travaux.",
        "Données du projet et de l’installation, mise en service, raccordement et décision RU définitive vont ensemble. Extensions, remplacements et contributions de tiers doivent être classés séparément.",
      ],
      sourceIds: ["ar-km21", "ar-2027"],
    },
    {
      id: "kosten",
      title: "Combien coûte une installation solaire ici?",
      paragraphs: [
        "Le canton ne publie aucun prix PV fixe. Le toit, la taille et les équipements sont déterminants.",
        "Accès, compteur, raccordement, état du toit et isolation peuvent aussi modifier l’offre. Outre le total, comparez surface des modules, montage, postes électriques, batterie, garanties et responsabilité des demandes.",
        "Le meilleur comparatif repose sur plusieurs offres pour le même projet, non sur un prix forfaitaire en ligne.",
      ],
      bullets: [
        "Surface et forme du toit",
        "Puissance de l’installation",
        "Échafaudage",
        "Travaux électriques",
        "Batterie",
        "Autoconsommation",
        "Onduleur",
        "Installateur / prestations",
      ],
      sourceIds: ["ar-km21", "ar-2027"],
    },
    {
      id: "fuer-wen",
      title: "À qui une installation solaire profite-t-elle particulièrement?",
      paragraphs: [
        "La situation est particulièrement claire avec un toit approprié, une autoconsommation fiable, un raccordement et une installation éligible à la RU dès 2 kWp. En cas d’autoconsommation élevée, vérifiez l’exclusion de la HEIV et la charge du bâtiment avant le dimensionnement.",
        "Les toits raides ou façades peuvent convenir à la logique hivernale annoncée. Une isolation prévue doit être évaluée comme projet global; simples remplacement, réparation ou assainissement ne sont pas éligibles à kM-21.",
      ],
      sourceIds: ["ar-km21", "ar-2027"],
    },
  ],
  faqs: [
    {
      question: "Quel est le montant de la contribution PV cantonale en 2026?",
      answer:
        "Depuis le 1er septembre 2025, jusqu’à 50 % de la RU définitive sont possibles, au maximum CHF 100’000 par projet. Ce ne sont pas 50 % de l’investissement. Du 1er janvier 2022 au 31 août 2025, kM-21 indiquait au maximum 100 % de la RU.",
      sourceIds: ["ar-km21"],
    },
    {
      question: "Quand dois-je déposer ma demande?",
      answer:
        "En 2026, après la première fourniture d’électricité et la décision définitive de Pronovo. Pour les aides hivernales ou à l’isolation prévues dès 2027, avant les travaux.",
      sourceIds: ["ar-km21", "ar-2027"],
    },
    {
      question: "Quelles installations sont exclues?",
      answer:
        "Sont exclus les simples remplacements et assainissements, la rétribution unique élevée sans consommation propre (HEIV sans consommation propre) et les installations issues d’enchères PV. La taille minimale imposée par une obligation d’autoproduction ne reçoit pas d’aide supplémentaire.",
      sourceIds: ["ar-km21"],
    },
    {
      question: "Que change le 1er janvier 2027?",
      answer:
        "Dès le 1er janvier 2027, les aides devraient privilégier le courant hivernal et le photovoltaïque combiné à l’isolation thermique: une inclinaison des modules d’au moins 75°, CHF 300/kW en plus du bonus national lié à l’angle d’inclinaison et CHF 90–150/m² en cas d’isolation sont prévus. La demande devrait être déposée avant le début des travaux.",
      sourceIds: ["ar-2027"],
    },
    {
      question: "Que signifie une inclinaison ≥75°?",
      answer:
        "Il s’agit de l’angle par rapport à l’horizontale. Dès 75°, l’installation est considérée optimisée pour l’hiver selon l’approche AR annoncée. Vérifiez le projet avec l’aide à l’exécution alors en vigueur.",
      sourceIds: ["ar-2027"],
    },
    {
      question: "Comment fonctionne le délai transitoire jusqu’à fin 2027?",
      answer:
        "Les installations du 1er janvier 2022 au 31 décembre 2026 sans optimisation hivernale ni combinaison avec isolation peuvent déposer une demande jusqu’à fin 2027. Ce n’est pas une garantie générale; les autres conditions restent déterminantes.",
      sourceIds: ["ar-2027", "ar-km21"],
    },
  ],
  sources: [...sources],
};
