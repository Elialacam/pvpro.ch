import type { CantonGuide } from '../types';

const sources = [
  {
    id: 'gl-fp-2026',
    authority: "Canton de Glaris",
    title: "Programme d'encouragement de l'énergie 2026, version 3.2",
    url: 'https://www.gl.ch/public/upload/assets/65023/Flyer2026Apr.pdf?fp=1',
  },
  {
    id: 'gl-conditions',
    authority: "Canton de Glaris",
    title: "Conditions de financement, à compter de juillet 2026",
    url: 'https://www.gl.ch/public/upload/assets/67004/F%C3%B6rderbedingungen.pdf?fp=1',
  },
  {
    id: 'gl-energy-law',
    authority: "Canton de Glaris",
    title: "Ordonnance sur l'application de la législation énergétique",
    url: 'https://gesetze.gl.ch/app/de/texts_of_law/VII%20E%2F1%2F2%2F1',
  },
  {
    id: 'gl-programme-status',
    authority: "Canton de Glaris",
    title: "Programme d'encouragement – ​​Canton de Glaris",
    url: 'https://www.gl.ch/verwaltung/bau-und-umwelt/umwelt-wald-und-energie/umweltschutz-und-energie/energie/foerderprogramm.html/773',
  },
  {
    id: 'gl-solar-procedure',
    authority: "Canton de Glaris, Département de l'Energie",
    title: "Energy Meeting 2025 – Systèmes solaires et procédures de reporting",
    url: 'https://www.gl.ch/public/upload/assets/59548/Pr%C3%A4sentationen_Energietreff_2025.pdf?fp=2',
  },
  {
    id: 'pronovo-faq',
    authority: "Pronovo AG pour le compte de la Confédération",
    title: "Questions fréquemment posées sur le paiement unique (EIV) et les subventions solaires en Suisse",
    url: 'https://pronovo.ch/de/foerderung/photovoltaik/haeufige-fragen/',
  },
] as const;

export const guide: CantonGuide = {
  id: 'glarus',
  path: '/fr/solaire-glaris',
  canton: "Glaris",
  title: "Photovoltaïque à Glaris en 2026 : subventions pour fortes inclinaisons | PvPro.ch",
  description:
    "Photovoltaïque à Glaris : CHF 250/kWc pour les installations fortement inclinées admissibles, production propre dans le neuf, autorisations et subventions 2026.",
  h1: "Photovoltaïque à Glaris : subventions 2026 pour les installations fortement inclinées",
  intro: [
    "À Glaris, une zone photovoltaïque raide à partir de 75° peut être subventionnée en plus par le canton. La contribution s'élève à CHF 250/kWc, jusqu'à un maximum de CHF 15'000 si les conditions officielles sont remplies.",
    "Pour les nouveaux bâtiments, la propre règle d'électricité compte également avec une surface de référence énergétique de 10 W/m² et un maximum de 30 kWc. Le financement fédéral via Pronovo et la contribution de Glaris doivent être examinés séparément.",
  ],
  quickFacts: [
    {
      value: "≥75°",
      label: "Pente minimale pour la contribution cantonale à l'angle de pente",
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
    },
    {
      value: "CHF 250/kWc",
      label: "Contribution cantonale pour les composants d'installation photovoltaïque éligibles",
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
    },
    {
      value: "CHF 15'000",
      label: "Contribution cantonale maximale",
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
    },
    {
      value: "10W/m²",
      label: "Production minimale d’électricité propre pour les nouveaux bâtiments",
      sourceIds: ['gl-energy-law'],
    },
  ],
  sections: [
    {
      id: 'neigungscheck',
      title: "Pourquoi 75° est important à Glaris",
      paragraphs: [
        "Oui, une surface photovoltaïque de 75° ou plus peut être éligible à la contribution cantonale pour l'angle d'inclinaison. Toutefois, le financement ne s'applique qu'aux parties du système admissibles au financement et selon les conditions du programme actuel.",
      ],
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
      module: {
        kind: 'inclination-check',
        title: "75° – ma surface raide en vaut-elle la peine ?",
        intro: "Mesurez l'inclinaison du module par rapport au plan horizontal. Vérifiez ensuite le chemin de financement approprié et les conditions complètes du programme.",
        items: [
          {
            title: "Zone PV ≥75°",
            value: "≥75°",
            text: "Oui : Vérifiez la contribution cantonale pour l'angle d'inclinaison – CHF 250/kWp pour les parties d'installation photovoltaïque éligibles, au maximum CHF 15'000.",
            detail: "La contribution est liée aux conditions officielles de financement.",
            sourceIds: ['gl-fp-2026', 'gl-conditions'],
          },
          {
            title: "Surface PV <75°",
            value: "<75°",
            text: "Non : la contribution de Glaris pour les fortes pentes ne s'applique pas. Envisagez plutôt un financement fédéral régulier via Pronovo et d’autres voies appropriées.",
            detail: "Toute autre éligibilité doit être évaluée séparément.",
            sourceIds: ['gl-fp-2026', 'pronovo-faq'],
          },
        ],
      },
    },
    {
      id: 'foerderung',
      title: "Quel est le montant de la contribution cantonale?",
      paragraphs: [
        "La contribution cantonale s'élève à 250 CHF par kWc pour les parties d'installation photovoltaïque éligibles présentant une inclinaison d'au moins 75°. Le montant maximum est de 15 000 CHF.",
        "kWp décrit la puissance nominale d'un système photovoltaïque dans des conditions standard spécifiées. Toutes les zones de module du système ne comptent pas automatiquement pour le calcul : les parties éligibles et les autres conditions du programme doivent être vérifiées.",
        "Pour la mesure GL-31, la demande n'est introduite qu'après la décision finale pronovo. Il n'est donc pas correct de supposer de manière générale que le GL-31 sera soumis avant le début de la construction ; Le processus spécifique dépend des conditions de financement.",
        "Les contributions majorées pour l’enveloppe du bâtiment ne s’appliquent qu’aux mesures qui seront achevées dans les délais d’ici fin 2027. Cela ne donne lieu à aucun financement photovoltaïque général pour 2027.",
      ],
      sourceIds: ['gl-fp-2026', 'gl-conditions', 'pronovo-faq', 'gl-programme-status'],
    },
    {
      id: 'neubau',
      title: "Électricité propre obligatoire pour les nouveaux bâtiments",
      paragraphs: [
        "Oui. Dans les bâtiments neufs, une partie de l'électricité doit être produite soi-même : généralement 10 W par mètre carré de surface énergétique de référence (EBF), mais au maximum 30 kWc.",
        "La surface énergétique de référence est la surface du bâtiment qui est déterminante pour le calcul énergétique. kWp est la puissance électrique nominale des modules dans des conditions standards ; Les deux informations ne mesurent donc pas la même chose.",
        "Légalement, il s’agit de produire sa propre électricité et non d’une obligation générale d’équiper chaque maison existante de panneaux photovoltaïques. En pratique, le photovoltaïque constitue un moyen évident de répondre à la règle de l’électricité autoproduite.",
        "Si la production d'électricité propre prescrite n'est pas réalisée, un prélèvement de remplacement de 2000 CHF par kW non réalisé peut être pertinent dans le contexte juridique. Il convient de vérifier si et comment cela s'applique au projet spécifique en fonction des exigences légales.",
      ],
      sourceIds: ['gl-energy-law', 'gl-fp-2026'],
    },
    {
      id: 'solarthermie',
      title: "Combiner l’énergie photovoltaïque et solaire thermique",
      paragraphs: [
        "Oui, une combinaison peut être soutenue à hauteur de 2000 CHF si les exigences de la mesure M-08 sont remplies et qu'au moins 2 kWc de photovoltaïque sont disponibles.",
        "L'énergie solaire thermique génère de la chaleur, le photovoltaïque génère de l'électricité. La contribution n'est donc pas un bonus PV général : la combinaison doit être réalisée en même temps et les conditions de M-08 doivent être respectées dans le projet.",
      ],
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
    },
    {
      id: 'bewilligung',
      title: "Notification ou permis de construire ?",
      paragraphs: [
        "Tous les systèmes solaires ne nécessitent pas une application complète dans le bâtiment. Selon les cas, un système suffisamment adapté peut recourir à une procédure de reporting simplifiée.",
        "Les objets protégés et les situations particulières doivent être vérifiés séparément. Par conséquent, avant de passer la commande, vérifiez auprès de l'autorité compétente si un rapport est suffisant ou si une procédure appropriée est nécessaire.",
        "Une procédure de reporting ne constitue pas un engagement de financement. Il répond à la question du droit de la construction, tandis que Pronovo et les organismes cantonaux d'encouragement évaluent séparément les conditions de financement.",
      ],
      sourceIds: ['gl-solar-procedure', 'gl-energy-law'],
    },
    {
      id: 'pronovo',
      title: "Financement fédéral via Pronovo",
      paragraphs: [
        "Le financement national le plus important pour le photovoltaïque passe par Pronovo. Pour le paiement unique régulier (EIV), une puissance minimale de 2 kW s'applique actuellement ; le montant spécifique dépend du projet et des conditions fédérales.",
        "Les primes fédérales supplémentaires sont des options de financement volontaires et conditionnelles. Il s'agit par exemple d'un bonus d'angle d'inclinaison à partir de 75°, d'un bonus de place de stationnement pour les systèmes éligibles à partir de 100 kW et, depuis 2026, d'un bonus d'électricité hivernal dans des conditions particulières pour les systèmes à partir de 100 kW.",
        "La contribution de Glaris de 250 CHF/kWc en est distincte. L'EIV, les cotisations cantonales et les éventuelles primes fédérales ne peuvent pas être simplement ajoutées sans contrôle à un total garanti.",
      ],
      sourceIds: ['pronovo-faq', 'gl-fp-2026', 'gl-conditions'],
    },
    {
      id: 'kosten',
      title: "Combien coûte un système solaire ici ?",
      paragraphs: [
        "Le canton ne publie pas de prix fixe pour les installations solaires. Les facteurs décisifs sont le toit, la taille de l'installation, les travaux électriques et l'équipement.",
        "Comparez plusieurs offres pour un même projet. Faites attention aux différents postes et si les demandes de financement, la connexion au réseau et les travaux supplémentaires sont inclus dans l'étendue des prestations.",
      ],
      bullets: [
        "Surface du toit, forme du toit et surface utile des modules",
        "Taille du système, inclinaison des modules et modules sélectionnés",
        "Echafaudages, accès et logistique de chantier",
        "Travaux électriques, compteurs et branchement au réseau",
        "Onduleur",
        "Infrastructure de stockage et de recharge des batteries",
        "Consommation propre, pompe à chaleur et électromobilité",
        "Installateur, étendue des services et garanties",
      ],
      sourceIds: [],
    },
    {
      id: 'passt',
      title: "Pour qui l’énergie solaire à Glaris est-elle particulièrement intéressante ?",
      paragraphs: [
        "Un test est particulièrement intéressant sur une surface de toit ou de façade inclinée de 75° ou plus, sur un nouveau bâtiment ou si l'énergie photovoltaïque et solaire thermique sont planifiées ensemble. Dans ces cas-là, les règles cantonales et les canaux de financement peuvent influencer la planification précoce du projet.",
        "Planifiez ensemble le toit, la statique, le raccordement électrique, la propre consommation et la procédure appropriée. Une offre doit clairement indiquer quelles parties du système atteignent l'angle d'inclinaison et quelles conditions de financement sont encore ouvertes.",
      ],
      sourceIds: ['gl-fp-2026', 'gl-conditions', 'gl-energy-law', 'gl-solar-procedure'],
    },
  ],
  faqs: [
    {
      question: "Quel est le montant de la subvention photovoltaïque pour les systèmes en pente ?",
      answer:
        "Pour les parties d'installation photovoltaïque éligibles avec une inclinaison d'au moins 75°, la contribution cantonale s'élève à 250 CHF/kWp. Le montant maximum est de 15 000 CHF. Les deux déclarations ne s’appliquent que si les autres conditions du programme sont remplies.",
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
    },
    {
      question: "De quelle inclinaison ai-je besoin ?",
      answer:
        "Les parties éligibles du système photovoltaïque doivent être inclinées d’au moins 75°. L'angle est mesuré par rapport au plan horizontal. Si l'inclinaison est inférieure à 75°, cette contribution à l'angle d'inclinaison de Glaris ne s'applique pas.",
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
    },
    {
      question: "Quelle est la cotisation maximale ?",
      answer:
        "La contribution cantonale est limitée à CHF 15'000. Le montant de CHF 250/kWc s'applique uniquement aux parties d'installation éligibles selon les conditions en vigueur. Un système global plus vaste ne conduit pas automatiquement à une contribution plus élevée.",
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
    },
    {
      question: "Existe-t-il une obligation de produire sa propre électricité pour les nouveaux bâtiments ?",
      answer:
        "Oui. Les nouveaux bâtiments doivent généralement fournir 10 W/m² de surface de référence énergétique pour l'électricité autoproduite, avec un maximum de 30 kWc requis. Il s’agit d’une règle relative à l’électricité autoproduite et non d’une exigence générale en matière de photovoltaïque pour les maisons existantes.",
      sourceIds: ['gl-energy-law', 'gl-fp-2026'],
    },
    {
      question: "Que se passe-t-il si l’obligation de produire sa propre électricité n’est pas respectée ?",
      answer:
        "Dans le contexte juridique, un prélèvement de remplacement de 2000 CHF par kW non réalisé peut être pertinent. La question de savoir si une telle somme est due pour votre projet dépend des exigences légales et doit être vérifiée au cas par cas.",
      sourceIds: ['gl-energy-law'],
    },
    {
      question: "Le photovoltaïque peut-il être combiné avec l’énergie solaire thermique ?",
      answer:
        "Oui, dans le cadre de la mesure M-08, une contribution combinée de 2000 CHF peut être envisagée. Pour ce faire, les exigences du programme doivent être remplies, la mise en œuvre doit avoir lieu simultanément et au moins 2 kWc PV doivent être disponibles.",
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
    },
    {
      question: "Ai-je besoin d’un permis de construire ?",
      answer:
        "Pas toujours. Selon les cas, un système solaire suffisamment adapté peut recourir à une procédure de reporting simplifiée ; Les objets protégés et les cas particuliers doivent être vérifiés séparément. Avant la commande, l'organisme responsable doit confirmer la procédure pour le bâtiment concerné.",
      sourceIds: ['gl-solar-procedure', 'gl-energy-law'],
    },
    {
      question: "Quand dois-je soumettre la demande de GL-31 ?",
      answer:
        "La demande pour le GL-31 sera soumise après la décision finale de Pronovo. On ne peut donc pas prétendre à une date générale avant le début des travaux pour cette mesure ; Les conditions de financement actuelles de Glaris sont décisives.",
      sourceIds: ['gl-conditions', 'pronovo-faq'],
    },
    {
      question: "Que signifie la puissance minimale de 2 kW pour Pronovo ?",
      answer:
        "Le paiement unique régulier de la Confédération via Pronovo s'applique actuellement à partir d'une puissance système de 2 kW. D'autres primes fédérales, comme par exemple pour les pistes, les aires de stationnement ou l'électricité hivernale, ont leurs propres exigences et ne sont pas des montants qui peuvent être ajoutés automatiquement.",
      sourceIds: ['pronovo-faq'],
    },
  ],
  sources: [...sources],
};