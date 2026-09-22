import type { CantonGuide } from '../types';

const sources = [
  {
    id: 'ge-obligation',
    authority: "République et canton de Genève",
    title: "Solaire – obligation constructions neuves et rénovations",
    url: 'https://www.ge.ch/installer-panneaux-solaires-batiment/solaire-obligation-constructions-neuves-renovations',
  },
  {
    id: 'ge-consommateurs',
    authority: "République et canton de Genève",
    title: "Solaire – obligation pour les consommateurs (>0,2 GWh/an)",
    url: 'https://www.ge.ch/installer-panneaux-solaires-batiment/solaire-obligation-moyens-consommateurs-conso-elec02gwh',
  },
  {
    id: 'ge-meldung',
    authority: "Genève Energie",
    title: "Panneaux solaires et pompes à chaleur : délai d'annonce d'ouverture de chantier réduit à 14 jours",
    url: 'https://www.ge.ch/blog/geneve-energie/panneaux-solaires-pompes-chaleur-delai-annonce-ouverture-chantier-reduit-14-jours-12-02-2026',
  },
  {
    id: 'ge-foerderung',
    authority: "OCEN, République et Canton de Genève",
    title: "Subventions énergétiques 2026 : 80 millions de francs",
    url: 'https://www.ge.ch/blog/geneve-energie/subventions-energetiques-2026-80-millions-francs-accelerer-renovation-du-parc-bati-genevois-2-02-2026',
  },
  {
    id: 'ge-pronovo',
    authority: "Pronovo AG pour le compte de la Confédération",
    title: "Questions fréquemment posées sur le paiement unique (EIV) et les subventions solaires en Suisse",
    url: 'https://pronovo.ch/de/foerderung/photovoltaik/haeufige-fragen/',
  },
] as const;

export const guide: CantonGuide = {
  id: 'genf',
  path: '/fr/solaire-geneve',
  canton: "Genève",
  title: "Photovoltaïque à Genève en 2026 : obligations et subventions | PvPro.ch",
  description:
    "Photovoltaïque à Genève : obligations pour les constructions neuves et les rénovations de toiture, exceptions prévues et procédures applicables en 2026.",
  h1: "Photovoltaïque à Genève : dans quels cas est-il obligatoire en 2026 ?",
  intro: [
    "A Genève, le solaire peut être obligatoire pour les nouvelles constructions, les rénovations de toiture et certaines rénovations liées à l'énergie. Des zones de toit appropriées doivent toujours être utilisées.",
    "Pour les sites dont la consommation d'électricité par an est supérieure à 0,2 GWh, l'échéance photovoltaïque fixée à 2030 s'applique généralement. Pour certains systèmes ne nécessitant pas de permis, 14 jours de notification avant le début des travaux suffisent depuis février 2026.",
  ],
  quickFacts: [
    {
      value: "Nouveau bâtiment",
      label: "Utilisez toujours des zones de toit adaptées à l'énergie solaire",
      sourceIds: ['ge-obligation'],
    },
    {
      value: "Rénovation de toiture",
      label: "Peut déclencher l’obligation d’utilisation solaire",
      sourceIds: ['ge-obligation'],
    },
    {
      value: ">0,2 GWh/an",
      label: "seuil pour les gros consommateurs d’électricité ; PV en gros jusqu'en 2030",
      sourceIds: ['ge-consommateurs'],
    },
    {
      value: "14 jours",
      label: "Notification avant le début des travaux pour certains projets ne nécessitant pas de permis",
      sourceIds: ['ge-meldung'],
    },
  ],
  sections: [
    {
      id: 'pflicht',
      title: "Quand le solaire est-il obligatoire à Genève ?",
      paragraphs: [
        "Oui, l'utilisation de l'énergie solaire peut être obligatoire à Genève. Cela s'applique particulièrement aux nouvelles constructions, aux rénovations de toiture et aux sites dont la consommation électrique annuelle est supérieure à 0,2 GWh.",
        "L'obligation concerne les surfaces de toiture appropriées et ne s'applique pas automatiquement à chaque bâtiment d'habitation existant. Les exceptions reconnues et autres rénovations liées à l'énergie doivent être vérifiées au cas par cas.",
      ],
      sourceIds: ['ge-obligation', 'ge-consommateurs'],
      module: {
        kind: 'obligation-triggers',
        title: "Quand le solaire sera-t-il obligatoire à Genève ?",
        intro:
          "En plus de ces trois déclencheurs, certaines rénovations énergétiques peuvent également être incluses. L'impossibilité technique, l'efficacité économique disproportionnée et les intérêts protecteurs peuvent être reconnus comme des exceptions.",
        items: [
          {
            title: "Nouveau bâtiment",
            text: "Les surfaces de toit appropriées d'un nouveau bâtiment doivent toujours être utilisées pour l'énergie solaire.",
            sourceIds: ['ge-obligation'],
          },
          {
            title: "Rénovation de toiture",
            text: "Une rénovation de toiture peut déclencher l'obligation d'utiliser l'énergie solaire. Par conséquent, vérifiez la surface du toit et les exceptions possibles avant de planifier.",
            sourceIds: ['ge-obligation'],
          },
          {
            title: "Plus gros consommateur d’électricité",
            text: "Si la consommation d'électricité dépasse 0,2 GWh par an, les toitures adaptées doivent généralement être équipées de panneaux photovoltaïques d'ici 2030, sauf exception reconnue.",
            sourceIds: ['ge-consommateurs'],
          },
        ],
      },
    },
    {
      id: 'dachsanierung',
      title: "Qu’est-ce qui s’applique à une rénovation de toiture ?",
      paragraphs: [
        "A Genève, la rénovation des toitures fait partie des projets pouvant déclencher une obligation d'utilisation du solaire. Cela concerne la surface de toit appropriée, pas automatiquement chaque toit ni chaque maison existante.",
        "Certaines rénovations économes en énergie peuvent également être pertinentes. Par conséquent, avant de passer la commande, demandez-lui de préciser si votre projet spécifique relève de l'obligation et s'il existe une exception reconnue.",
      ],
      sourceIds: ['ge-obligation'],
      notice: {
        title: "Toutes les rénovations ne sont pas identiques",
        text: "Les Règles de Genève distinguent les bâtiments neufs, les rénovations de toiture, certaines rénovations liées à l'énergie et les autres bâtiments. Cela n’entraîne pas d’exigence générale en matière de photovoltaïque pour toutes les maisons existantes.",
        status: 'important',
      },
    },
    {
      id: 'verbraucher',
      title: "La règle 2030 pour les gros consommateurs d’électricité",
      paragraphs: [
        "Si un lieu consomme plus de 0,2 GWh d’électricité par an, il est considéré comme un grand consommateur d’électricité pour cette règle. Les toitures adaptées doivent généralement être équipées de photovoltaïque d’ici 2030.",
        "0,2 GWh correspond à 200 000 kWh. Pour une maison unifamiliale normale, ce seuil n’est généralement pas le point pertinent ; Ce qui est important, c'est la consommation annuelle réelle du site.",
        "Même avec cette règle, des exceptions reconnues restent possibles. Il s’agit notamment de l’impossibilité technique, d’une efficacité économique disproportionnée et d’intérêts protecteurs.",
      ],
      sourceIds: ['ge-consommateurs', 'ge-obligation'],
    },
    {
      id: 'ausnahmen',
      title: "Quelles sont les exceptions ?",
      paragraphs: [
        "Oui, des exceptions sont possibles si l’énergie solaire sur la surface de toit appropriée n’est pas techniquement possible ou est économiquement disproportionnée. Les intérêts de protection peuvent également s’opposer à l’utilisation de l’énergie solaire.",
        "Une exception ne s’applique pas à tous les projets. L'organisme responsable doit examiner la situation particulière et les conditions applicables.",
      ],
      bullets: [
        "Techniquement impossible : l'utilisation de l'énergie solaire ne peut pas être mise en œuvre en raison de la situation structurelle ou technique spécifique.",
        "Économiquement disproportionné : l’effort est disproportionné au regard des conditions applicables.",
        "Intérêts de protection : Les monuments, paysages urbains ou autres intérêts de protection peuvent justifier une exception.",
      ],
      sourceIds: ['ge-obligation', 'ge-consommateurs'],
    },
    {
      id: 'bewilligung',
      title: "Autorisation et règle des 14 jours",
      paragraphs: [
        "Non, un système solaire ne nécessite pas toujours une application complète dans le bâtiment. Les systèmes suffisamment adaptés peuvent être sans licence dans les conditions applicables ; les règles formelles s’appliquent toujours.",
        "Depuis février 2026, le délai de déclaration du début de construction pour certains projets solaires ne nécessitant pas de permis a été raccourci de 30 à 14 jours. Dans ces cas, la notification doit être faite 14 jours avant le début des travaux.",
        "La question de savoir si cette procédure simplifiée est suffisante dépend du projet spécifique. OCEN est pertinent pour les questions sur le contenu énergétique, et OAC est également pertinent pour les questions sur le droit de la construction.",
      ],
      sourceIds: ['ge-meldung', 'ge-obligation'],
      module: {
        kind: 'process-flow',
        title: "Clarifier avant le début des travaux",
        intro: "Les 14 jours ne s'appliquent qu'aux projets correspondants qui ne nécessitent pas de permis. Vérifiez la procédure avant le début des travaux ou des commandes.",
        items: [
          {
            title: "Classer le projet",
            text: "Vérifiez si le système est suffisamment adapté et si une procédure sans autorisation est possible.",
            sourceIds: ['ge-obligation'],
          },
          {
            title: "Signaler le début des travaux",
            text: "Depuis février 2026, la notification des projets non autorisés concernés doit être effectuée 14 jours avant le début des travaux.",
            sourceIds: ['ge-meldung'],
          },
          {
            title: "Clarifier la position",
            text: "L’OCEN est pertinent pour les questions énergétiques. L'OAC doit être consulté pour la classification selon le droit de la construction et la demande de construction nécessaire.",
            sourceIds: ['ge-obligation', 'ge-meldung'],
          },
        ],
      },
    },
    {
      id: 'foerderung',
      title: "Financement à Genève",
      paragraphs: [
        "Le budget énergétique de Genève pour 2026 s'élève au total à 80 millions de francs. Il s’agit de l’intégralité du budget énergétique, et non d’un simple pot de financement photovoltaïque.",
        "Les financements spécifiques au photovoltaïque et les programmes de financement des bâtiments doivent être examinés séparément. Les candidatures aux programmes de construction concernés doivent généralement être déposées avant le début des travaux.",
        "Le financement fédéral le plus important pour le photovoltaïque passe par Pronovo. Le paiement unique régulier (EIV) s'applique actuellement à partir d'une puissance minimale de 2 kW. Les primes fédérales supplémentaires, telles que la prime d'angle d'inclinaison à partir de 75°, la prime d'aire de stationnement pour les installations éligibles à partir de 100 kW ou la prime d'électricité d'hiver 2026 pour les installations à partir de 100 kW dans des conditions particulières, ont leurs propres exigences et ne peuvent pas être cumulées comme un total fixe.",
      ],
      sourceIds: ['ge-foerderung', 'ge-pronovo'],
      notice: {
        title: "80 millions de francs ne correspondent pas à un financement photovoltaïque de 80 millions de francs",
        text: "Le numéro décrit l'ensemble du budget énergétique de Genève pour 2026. Le fait que votre installation photovoltaïque ou une mesure de construction soit soutenue dépend du programme approprié et du moment de la demande.",
        status: 'important',
      },
    },
    {
      id: 'begriffe',
      title: "Les règles solaires de Genève expliquées simplement",
      paragraphs: [
        "Le photovoltaïque (PV) produit de l'électricité à l'aide de modules solaires. Lorsqu’une règle parle d’énergie solaire ou d’utilisation du solaire, elle ne désigne pas automatiquement uniquement un système technique spécifique ; c'est le règlement spécifique qui décide.",
        "Une surface de toiture adaptée est une surface de toiture pouvant être utilisée pour l'énergie solaire conformément au cahier des charges de Genève. Dans le cas d'un projet sans permis, l'absence de permis de construire ne signifie pas qu'aucune notification ou aucune autre règle ne s'applique.",
      ],
      bullets: [
        "GWh : Un gigawattheure est une unité d’électricité. 0,2 GWh correspond à 200 000 kWh.",
        "Procédure de notification : Le début de la construction est annoncé à l'autorité compétente sans qu'il soit nécessaire de présenter une demande de construction complète. Cela ne s'applique que si les exigences légales sont remplies.",
        "Rénovation énergétique : Il s'agit d'une rénovation liée à la consommation d'énergie ou à l'approvisionnement en énergie. Certaines de ces rénovations peuvent également être un élément déclencheur.",
        "OCEN et OAC : L'OCEN est l'agence cantonale de l'énergie. L’OAC est pertinent pour les questions concernant le processus de permis de construire.",
      ],
      sourceIds: ['ge-obligation', 'ge-consommateurs', 'ge-meldung'],
    },
    {
      id: 'kosten',
      title: "Combien coûte un système solaire ici ?",
      paragraphs: [
        "Le canton ne publie pas de prix fixe pour les installations solaires. Les facteurs décisifs sont le toit, la taille de l'installation, les travaux électriques et l'équipement.",
        "Comparez plusieurs offres pour un même projet. Vérifiez si tous les travaux, permis ou rapports, la connexion réseau et les garanties sont décrits de la même manière.",
      ],
      bullets: [
        "Superficie du toit, forme et état du toit",
        "Taille du système et performances des modules",
        "Zone d'orientation et de module utilisable",
        "Effort d’échafaudages, d’accès et de chantier",
        "Travaux électriques, compteurs et branchement au réseau",
        "Onduleur",
        "Infrastructure de stockage et de recharge des batteries",
        "Etendue de l'offre, garanties et entreprise spécialisée",
      ],
      sourceIds: ['ge-obligation', 'ge-pronovo'],
    },
    {
      id: 'fuer-wen',
      title: "Qui s’intéresse particulièrement au solaire à Genève ?",
      paragraphs: [
        "Les propriétaires qui construisent de nouveaux bâtiments, rénovent le toit ou envisagent une rénovation économe en énergie devraient se renseigner particulièrement tôt. Si la consommation électrique est élevée, l’échéance de 2030 peut également être importante.",
        "Même sans exigence automatique, un système adapté peut avoir du sens si le toit, la consommation et l'équipement correspondent. Les facteurs décisifs sont la surface spécifique du toit, les besoins en électricité, l'offre et les conditions de financement applicables.",
      ],
      sourceIds: ['ge-obligation', 'ge-consommateurs', 'ge-pronovo'],
    },
  ],
  faqs: [
    {
      question: "Le photovoltaïque est-il obligatoire pour un nouveau bâtiment à Genève ?",
      answer:
        "L'énergie solaire doit toujours être utilisée sur des surfaces de toit appropriées d'un nouveau bâtiment. La règle n’est pas une exigence générale pour chaque système photovoltaïque de chaque maison existante ; les exceptions reconnues doivent être examinées.",
      sourceIds: ['ge-obligation'],
    },
    {
      question: "Qu’est-ce qui s’applique à une rénovation de toiture ?",
      answer:
        "Une rénovation de toiture peut déclencher l'obligation d'utiliser l'énergie solaire à Genève. Son application dans votre cas dépend du projet spécifique, de la surface de toit appropriée et des exceptions possibles.",
      sourceIds: ['ge-obligation'],
    },
    {
      question: "Est-ce que chaque maison existante doit installer du photovoltaïque ?",
      answer:
        "Non. Les règles de Genève ne créent pas d'exigence générale en matière de photovoltaïque pour chaque maison existante. Cependant, une rénovation de toiture, une rénovation énergétique spécifique ou une consommation électrique très élevée peuvent être pertinentes.",
      sourceIds: ['ge-obligation', 'ge-consommateurs'],
    },
    {
      question: "Que signifie la limite de 0,2 GWh ?",
      answer:
        "0,2 GWh correspond à 200 000 kWh de consommation électrique par an. Les emplacements situés au-dessus de cette limite doivent généralement équiper les toitures appropriées de panneaux photovoltaïques d'ici 2030, sauf exception reconnue.",
      sourceIds: ['ge-consommateurs'],
    },
    {
      question: "Y a-t-il des exceptions ?",
      answer:
        "Oui. Une exception peut être possible en cas d'impossibilité technique, d'efficacité économique disproportionnée ou d'intérêts de protection contradictoires. La situation spécifique doit être examinée selon les lignes directrices de Genève.",
      sourceIds: ['ge-obligation', 'ge-consommateurs'],
    },
    {
      question: "Ai-je besoin d’un permis de construire ?",
      answer:
        "Non, pas toujours. Les systèmes suffisamment adaptés peuvent être sans licence dans les conditions applicables ; D'autres projets peuvent nécessiter des procédures de construction appropriées.",
      sourceIds: ['ge-obligation', 'ge-meldung'],
    },
    {
      question: "Que signifie le délai de 14 jours ?",
      answer:
        "Pour certains projets solaires qui ne nécessitent pas de permis, le début des travaux doit être annoncé 14 jours à l'avance depuis février 2026. Le délai raccourci ne s'applique pas automatiquement à tous les projets solaires.",
      sourceIds: ['ge-meldung'],
    },
    {
      question: "Les 80 millions de francs suisses sont-ils un financement purement photovoltaïque ?",
      answer:
        "Non. 80 millions de francs représentent l’intégralité du budget énergétique de Genève pour 2026 et non une simple cagnotte de financement photovoltaïque. Les programmes spécifiques de financement et de construction du PV doivent être examinés séparément selon leurs propres conditions.",
      sourceIds: ['ge-foerderung'],
    },
    {
      question: "D’autres rénovations énergétiques peuvent-elles déclencher l’obligation ?",
      answer:
        "Oui, certaines rénovations liées à l'énergie, en plus des nouvelles constructions et des rénovations de toiture, peuvent tomber sous le coup du Règlement Genevois d'Utilisation du Solaire. Que ce soit le cas dépend du type et de la portée du projet spécifique.",
      sourceIds: ['ge-obligation'],
    },
    {
      question: "Comment fonctionne le financement fédéral via Pronovo ?",
      answer:
        "Le financement fédéral le plus important pour le photovoltaïque passe par Pronovo ; Le paiement unique régulier s'applique actuellement à partir de 2 kW. Les primes fédérales supplémentaires, par exemple pour les angles d'inclinaison à partir de 75° ou les systèmes éligibles à partir de 100 kW, sont des possibilités de financement volontaires avec leurs propres exigences et ne peuvent pas être ajoutées sous forme de forfait à d'autres contributions pour créer une somme garantie.",
      sourceIds: ['ge-pronovo'],
    },
    {
      question: "Où puis-je obtenir des informations sur le droit de l’énergie et de la construction ?",
      answer:
        "L'OCEN est pertinent à Genève pour les questions liées à l'énergie. L'OAC est également important pour la classification du droit de la construction et pour toute application en matière de construction.",
      sourceIds: ['ge-obligation', 'ge-meldung'],
    },
  ],
  sources: [...sources],
};