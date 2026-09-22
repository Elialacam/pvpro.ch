import type { CantonGuide } from '../types';

const sources = [
  {
    id: 'gr-winterstrom',
    authority: "Office des Grisons pour l'énergie et les transports",
    title: "Systèmes photovoltaïques pour l'électricité hivernale, version 1/26",
    url: 'https://www.gr.ch/DE/institutionen/verwaltung/diem/aev/dokumenteee/leitfadenbedingungenpvwinterstrom.pdf',
  },
  {
    id: 'gr-flaechenpotenzial',
    authority: "Office des Grisons pour l'énergie et les transports",
    title: "Systèmes photovoltaïques pour exploiter le potentiel du territoire, version 1/26",
    url: 'https://www.gr.ch/DE/institutionen/verwaltung/diem/aev/dokumenteee/leitfadenbedingungenpvflaechenpotential.pdf',
  },
  {
    id: 'gr-energiegesetz',
    authority: "Canton des Grisons",
    title: "Loi sur l'énergie du canton des Grisons, au 31 décembre 2025",
    url: 'https://www.gr-lex.gr.ch/app/de/texts_of_law/820.200',
  },
  {
    id: 'gr-energieverordnung',
    authority: "Canton des Grisons",
    title: "Ordonnance sur l'énergie du canton des Grisons",
    url: 'https://www.gr-lex.gr.ch/data/820.210',
  },
  {
    id: 'pronovo-faq',
    authority: "Pronovo AG pour le compte de la Confédération",
    title: "Questions fréquemment posées sur le paiement unique (EIV) et les subventions solaires en Suisse",
    url: 'https://pronovo.ch/de/foerderung/photovoltaik/haeufige-fragen/',
  },
] as const;

export const guide: CantonGuide = {
  id: 'graubunden',
  path: '/fr/solaire-grisons',
  canton: "Grisons",
  title: "Photovoltaïque dans les Grisons en 2026 : subventions cantonales | PvPro.ch",
  description:
    "Dans les Grisons, l’électricité hivernale et l’exploitation de grandes surfaces photovoltaïques relèvent de deux subventions distinctes. Montants, conditions et demande 2026 en bref.",
  h1: "Photovoltaïque dans les Grisons : quelle subvention correspond à votre projet ?",
  intro: [
    "Dans le canton des Grisons, il existe deux voies cantonales pour le photovoltaïque : l’électricité hivernale et le potentiel de surface. Le choix dépend notamment de l’inclinaison, de l’orientation, du rayonnement et de la taille de l’installation.",
    "Les cotisations ne sont pas cumulables. Soumettez la demande avant le début de la construction, attendez l'assurance et vérifiez séparément Pronovo et les autres bonus fédéraux.",
  ],
  quickFacts: [
    {
      value: "CHF 300/kWc",
      label: "Électricité hivernale : pour une inclinaison de 60 à 90° et une orientation est–sud–ouest adaptée",
      sourceIds: ['gr-winterstrom'],
    },
    {
      value: "CHF 150/kWc",
      label: "Potentiel de surface : adapté aux grandes surfaces ; ne peut pas être combiné avec l'électricité d'hiver",
      sourceIds: ['gr-flaechenpotenzial'],
    },
  ],
  sections: [
    {
      id: 'foerderung',
      title: "Deux programmes cantonaux – mais pas en même temps",
      paragraphs: [
        "Les Grisons proposent deux dispositifs cantonaux pour le photovoltaïque : l’électricité hivernale et le potentiel de surface. Il faut choisir le dispositif adapté ; les deux programmes ne sont pas cumulables.",
        "Vous pouvez également vérifier le financement fédéral via Pronovo. Les contributions cantonales et autres contributions publiques peuvent représenter ensemble au maximum 50% des dépenses liées au projet. N'ajoutez donc pas simplement 300 CHF, 150 CHF, Pronovo et autres bonus à un total garanti.",
      ],
      sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial', 'gr-energiegesetz', 'pronovo-faq'],
      notice: {
        title: "Important pour la planification",
        text: "Les deux programmes grisons sont des alternatives, et non des subventions, qui sont automatiquement complémentaires. Vérifiez d’abord le mode de financement approprié, puis les limites légales pour toutes les contributions publiques ensemble.",
        status: 'important',
      },
      module: {
        kind: 'funding-selector',
        title: "Quel financement des Grisons est le bon ?",
        intro: "Affectez d’abord votre projet à une voie de financement. Les cartes détaillées ci-dessous montrent les valeurs complètes du programme.",
        items: [
          {
            title: "Électricité hivernale",
            text: "Système très raide et production hivernale au premier plan ? Vérifiez une inclinaison de 60 à 90°, d'est en sud à ouest, un rayonnement global supérieur à 1 250 kWh/m²a et au moins 3 kWc. Cotisation : CHF 300/kWc.",
            detail: "Cotisation minimale CHF 900, cotisation maximale CHF 200'000.",
            value: "CHF 300/kWc",
            sourceIds: ['gr-winterstrom'],
          },
          {
            title: "Potentiel de surface",
            text: "Vous utilisez une surface vaste et adaptée qui dépasse largement vos propres besoins ? Le programme nécessite au moins 50 % et au moins 3 kWc au-dessus de la propre consommation calculée de 20 W/m² EBF. Cotisation : CHF 150/kWc.",
            detail: "Cotisation minimale CHF 450, cotisation maximale CHF 50'000.",
            value: "CHF 150/kWc",
            sourceIds: ['gr-flaechenpotenzial'],
          },
          {
            title: "Aucun de ceux-ci",
            text: "Aucune de ces exigences ne vous convient ? Découvrez Pronovo et d’autres opportunités de financement. Les deux programmes cantonaux ne sont pas cumulés.",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial', 'pronovo-faq'],
          },
        ],
        columns: ["Électricité hivernale", "Potentiel de surface"],
        rows: [
          {
            label: "Contribution",
            left: "CHF 300/kWc",
            right: "CHF 150/kWc",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "Cotisation minimale",
            left: "CHF 900",
            right: "CHF 450",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "Cotisation maximale",
            left: "CHF 200'000",
            right: "CHF 50'000",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "Utilisation du bâtiment",
            left: "Vérifier l'adéquation selon les conditions du programme d'alimentation hivernal",
            right: "À dominante résidentielle : plus de 50 % de la surface énergétique de référence est utilisée pour l'habitation",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "Puissance/seuil minimum",
            left: "Au moins 3 kWc",
            right: "Au moins 50 % et au moins 3 kWc au-dessus de la propre consommation calculée",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "Calculer ses propres besoins",
            left: "Non mentionné comme seuil pour ce programme",
            right: "Surface de référence énergétique (EBF) de 20 W/m²",
            sourceIds: ['gr-flaechenpotenzial'],
          },
          {
            label: "Inclination",
            left: "60-90°",
            right: "Aucune exigence correspondante de 60° ; Ce qui compte, c'est l'utilisation de la terre",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "Alignement",
            left: "D’est en sud à ouest",
            right: "Environ du nord-est au sud au nord-ouest",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "Rayonnement mondial",
            left: "Plus de 1250 kWh/m²a",
            right: "Plus de 1250 kWh/m²a",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "Demande",
            left: "À soumettre avant les achats et les travaux ; Attendez l'assurance",
            right: "À soumettre avant les achats et les travaux ; Attendez l'assurance",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "portail",
            left: "energie.gr.ch / Portail des programmes de construction selon procédure",
            right: "energie.gr.ch / Portail des programmes de construction selon procédure",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "Assurance",
            left: "Valable 3 ans ; extensible pour un maximum de 2 ans",
            right: "Vérifier l'assurance et le délai liés au projet dans la décision",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "Accumulation",
            left: "Non cumulable avec le potentiel de zone",
            right: "Ne peut être combiné avec l'électricité d'hiver",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "Limite des contributions publiques",
            left: "Les contributions cantonales et autres contributions publiques couvrent ensemble un maximum de 50% des dépenses",
            right: "Les contributions cantonales et autres contributions publiques couvrent ensemble un maximum de 50% des dépenses",
            sourceIds: ['gr-energiegesetz', 'gr-energieverordnung'],
          },
        ],
      },
    },
    {
      id: 'winterstrom',
      title: "Puissance hivernale : pour les systèmes en pente raide",
      paragraphs: [
        "Le programme d'électricité hivernal paie 300 CHF par kWc. Il convient aux systèmes avec une inclinaison de 60 à 90°, une orientation d'est en sud à ouest, un rayonnement global supérieur à 1 250 kWh/m²a et une puissance d'au moins 3 kWc.",
        "La cotisation minimale est de 900 CHF, la cotisation maximale est de 200 000 CHF. La demande doit être déposée avant la réalisation des achats et des travaux ; attendez l'assurance avant de commander ou de commencer.",
      ],
      sourceIds: ['gr-winterstrom'],
    },
    {
      id: 'flaechenpotenzial',
      title: "Potentiel de la zone : si vous utilisez une zone plus adaptée",
      paragraphs: [
        "Le programme de potentiel de surface s'adresse aux bâtiments à usage majoritairement résidentiel : plus de 50 % de la surface de référence énergétique doit être utilisée pour l'habitation. Vous payez 150 CHF par kWc si le système est nettement supérieur à vos propres besoins calculés. Il doit dépasser ce seuil d'au moins 50 % et en plus d'au moins 3 kWc.",
        "Aux fins du calcul, 20 W/m² de surface de référence énergétique sont considérés comme la propre consommation calculée. En outre, le rayonnement global s'applique approximativement du nord-est au sud au nord-ouest et à plus de 1 250 kWh/m²a ; la cotisation minimale est de 450 CHF, la cotisation maximale est de 50 000 CHF.",
      ],
      sourceIds: ['gr-flaechenpotenzial'],
      notice: {
        title: "20 W/m² n'est pas l'exigence légale pour les nouvelles constructions",
        text: "L'EBF de 20 W/m² fait partie du calcul du programme de potentiel de surface. Pour les nouvelles constructions, l'obligation légale de produire sa propre électricité de 10 W/m² EBF s'applique séparément, avec un maximum de 30 kW.",
        status: 'important',
      },
    },
    {
      id: 'neubau',
      title: "Électricité propre obligatoire pour les nouveaux bâtiments",
      paragraphs: [
        "Pour les nouvelles constructions, il existe une obligation distincte de produire sa propre électricité : au moins 10 W/m² de la surface énergétique de référence (EBF), au maximum 30 kW. Il s’agit d’une performance minimale légale et non du seuil du programme de financement potentiel de la zone.",
        "L'obligation nécessite votre propre production d'électricité, pas nécessairement un système photovoltaïque spécifique. Les nouveaux bâtiments Minergie et les sites dont le rayonnement solaire est inférieur à 1 250 kWh/m²a sont légalement exclus. Il s’agit de l’énergie solaire par mètre carré et par an. Cette exception à l'obligation de construire de nouveaux bâtiments doit être distinguée des conditions de financement : les deux programmes photovoltaïques cantonaux exigent un rayonnement global supérieur à 1250 kWh/m²a.",
      ],
      sourceIds: ['gr-energiegesetz', 'gr-energieverordnung'],
    },
    {
      id: 'bund',
      title: "Pronovo et primes fédérales facultatives",
      paragraphs: [
        "Le paiement unique régulier de la Confédération passe par Pronovo et, selon la FAQ actuelle, s'applique à partir de 2 kW. Selon le système, des primes fédérales supplémentaires peuvent être possibles, par exemple un bonus d'angle d'inclinaison à partir de 75°, un bonus de place de parking pour les systèmes éligibles à partir de 100 kW ou un bonus d'électricité hivernal depuis 2026 sous conditions particulières pour les systèmes à partir de 100 kW.",
        "Ces primes fédérales ne forment pas automatiquement un montant total et ne font pas partie du programme grison d’électricité hivernale. Les conditions, la décision de subvention et la limite légale des contributions publiques doivent être vérifiées séparément pour chaque projet.",
      ],
      sourceIds: ['pronovo-faq', 'gr-winterstrom', 'gr-energiegesetz'],
    },
    {
      id: 'gesuch',
      title: "Quand faut-il déposer la candidature ?",
      paragraphs: [
        "En règle générale, déposez la demande cantonale avant le début des travaux. Selon le dossier, cela s'applique également en pratique avant les achats et les travaux : attendez d'abord la confirmation, puis commandez ou commencez à réaliser les travaux.",
        "Selon la procédure, la candidature est déposée via energie.gr.ch ou le portail du programme de construction. L'assurance électricité hivernale est valable 3 ans et peut être prolongée pour un maximum de 2 ans ; vérifiez le délai précis dans la décision.",
      ],
      sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
      notice: {
        title: "Ne postulez pas plus tard",
        text: "Une commande déjà passée ou des travaux commencés peuvent mettre en péril votre droit au financement. La demande et l'assurance appartiennent donc avant la commande et le début des travaux.",
        status: 'important',
      },
    },
    {
      id: 'bewilligung',
      title: "Autorisation et planification dans les Grisons",
      paragraphs: [
        "La question du financement et le droit de la construction sont deux critères différents. Clarifiez avec la commune compétente quelle méthode de construction s'applique à votre toit spécifique, l'emplacement et les éventuels intérêts de protection.",
        "Un engagement de financement cantonal ne remplace pas un permis de construire. Intégrez dès le début l'inclinaison, l'orientation, l'irradiation, le raccordement électrique et la date d'application dans la planification.",
      ],
      sourceIds: ['gr-energiegesetz', 'gr-energieverordnung', 'gr-winterstrom', 'gr-flaechenpotenzial'],
    },
    {
      id: 'kosten',
      title: "Combien coûte un système solaire ici ?",
      paragraphs: [
        "Le canton ne publie pas de prix fixe pour les installations solaires. Les facteurs décisifs sont le toit, la taille de l'installation, les travaux électriques et l'équipement.",
        "Comparez plusieurs offres pour un même projet et vérifiez les conditions de financement séparément du prix. De cette façon, vous pouvez voir quels postes sont inclus et quelles contributions ne peuvent être prises en compte qu'après confirmation.",
      ],
      bullets: [
        "Surface du toit, forme du toit et surface utile des modules",
        "Taille et conception du système",
        "Inclinaison, orientation et rayonnement global",
        "Effort d’échafaudages, d’accès et de chantier",
        "Travaux électriques, compteurs et branchement au réseau",
        "Onduleurs et technologie de protection",
        "Infrastructure de stockage et de recharge des batteries",
        "Garanties, enregistrement et étendue des services de l'installateur",
      ],
      sourceIds: ['pronovo-faq', 'gr-winterstrom', 'gr-flaechenpotenzial'],
    },
    {
      id: 'fuer-wen',
      title: "Quelle voie de financement convient à qui ?",
      paragraphs: [
        "L'électricité hivernale est particulièrement adaptée à un système en pente avec une orientation est-sud-ouest appropriée et un rayonnement global prouvé de plus de 1 250 kWh/m²a. Le potentiel de surface est approprié si vous utilisez une surface appropriée bien au-dessus de vos propres besoins calculés et atteignez le seuil de 50 % et 3 kWc.",
        "Lors de la construction d'un nouveau bâtiment, vous devez dès le départ coordonner l'obligation légale de produire votre propre électricité avec la planification de l'installation. Si vous ne respectez pas un seuil cantonal, vous pouvez vérifier séparément Pronovo et les primes fédérales spécifiques au système.",
      ],
      sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial', 'gr-energiegesetz', 'pronovo-faq'],
    },
  ],
  faqs: [
    {
      question: "Quel est le montant de l'aide à l'électricité en hiver dans les Grisons ?",
      answer:
        "Le programme paie 300 CHF par kWc, un minimum de 900 CHF et un maximum de 200 000 CHF. Elle s'applique aux systèmes appropriés avec une inclinaison de 60 à 90°, une orientation appropriée, un rayonnement global supérieur à 1 250 kWh/m²a et au moins 3 kWc.",
      sourceIds: ['gr-winterstrom'],
    },
    {
      question: "De quelle pente mon système a-t-il besoin pour l'alimentation hivernale ?",
      answer:
        "L'inclinaison pertinente est de 60 à 90°. De plus, le programme vérifie l'orientation est-sud-ouest, le rayonnement global de plus de 1250 kWh/m²a et la puissance minimale de 3 kWc.",
      sourceIds: ['gr-winterstrom'],
    },
    {
      question: "Quel est le financement du potentiel du territoire ?",
      answer:
        "Le potentiel de surface est financé à hauteur de 150 CHF par kWc, avec un minimum de 450 CHF et un maximum de 50 000 CHF. Le système doit dépasser la consommation interne calculée de 20 W/m² EBF d'au moins 50 % et d'au moins 3 kWc.",
      sourceIds: ['gr-flaechenpotenzial'],
    },
    {
      question: "Puis-je combiner électricité hivernale et potentiel du territoire ?",
      answer:
        "Non. Les deux programmes photovoltaïques cantonaux ne sont pas cumulables. Choisissez le mode de financement qui répond le mieux aux exigences de votre projet et vérifiez les contributions publiques supplémentaires inférieures à la limite légale de 50 %.",
      sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial', 'gr-energiegesetz'],
    },
    {
      question: "Quand dois-je soumettre la candidature ?",
      answer:
        "La demande doit généralement être soumise avant le début des travaux de construction et, selon les informations du programme, également avant les achats et les travaux. Attendez l'assurance avant de commander ou de démarrer le projet.",
      sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
    },
    {
      question: "Existe-t-il une obligation de produire sa propre électricité pour les nouvelles constructions dans les Grisons ?",
      answer:
        "Oui. Pour les nouveaux bâtiments, il existe une obligation distincte de produire sa propre électricité de 10 W/m² de surface de référence énergétique, avec un maximum de 30 kW. Ce n'est pas la même chose que le calcul de 20 W/m² du programme de potentiel de surface et ne constitue pas automatiquement une obligation photovoltaïque globale.",
      sourceIds: ['gr-energiegesetz', 'gr-energieverordnung'],
    },
    {
      question: "Puis-je également acheter Pronovo ?",
      answer:
        "Pronovo est le niveau fédéral et doit être vérifié séparément pour le système spécifique ; Selon la FAQ, le paiement unique régulier s'applique à partir de 2 kW. Les bonus fédéraux supplémentaires ont leurs propres exigences et ne peuvent pas être ajoutés à un total garanti sans vérification.",
      sourceIds: ['pronovo-faq', 'gr-energiegesetz'],
    },
    {
      question: "Quelle limite de financement dois-je prendre en compte ?",
      answer:
        "Les contributions cantonales et autres contributions publiques ne peuvent pas dépasser 50% des dépenses liées au projet. C'est pourquoi 300 CHF/kWc, 150 CHF/kWc, Pronovo et les éventuels bonus ne sont pas faciles à additionner.",
      sourceIds: ['gr-energiegesetz', 'gr-energieverordnung', 'gr-winterstrom', 'gr-flaechenpotenzial', 'pronovo-faq'],
    },
    {
      question: "Que signifie le seuil de 20 W/m² EBF ?",
      answer:
        "20 W/m² SRE correspond au besoin propre théorique utilisé comme seuil par le programme Potentiel de surface. Une installation est admissible si elle dépasse cette valeur d’au moins 50 % et d’au moins 3 kWc supplémentaires ; l’exigence légale pour les nouvelles constructions est en revanche de 10 W/m² SRE, avec un maximum de 30 kW.",
      sourceIds: ['gr-flaechenpotenzial', 'gr-energiegesetz', 'gr-energieverordnung'],
    },
    {
      question: "Quel rayonnement global s’applique aux deux programmes ?",
      answer:
        "Pour l'électricité hivernale et le potentiel de surface, le rayonnement global doit généralement être supérieur à 1250 kWh/m²a. En termes simples, le rayonnement global décrit la quantité d’énergie solaire qui arrive à un endroit par mètre carré et par an.",
      sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
    },
    {
      question: "Quelle est la durée de validité de l'assurance ?",
      answer:
        "Il y a généralement une période de 3 ans pour garantir le programme d'électricité hivernal. Il peut être prolongé pour une durée maximale de 2 ans ; La décision concrète reste déterminante.",
      sourceIds: ['gr-winterstrom'],
    },
    {
      question: "Où dois-je déposer la demande de financement ?",
      answer:
        "Le processus se déroule via energie.gr.ch ou le portail du programme de construction. Utilisez la procédure spécifiée pour votre programme et soumettez la demande avant les achats et les travaux.",
      sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
    },
    {
      question: "Ai-je besoin d’un permis de construire pour un établissement subventionné ?",
      answer:
        "Le seul programme de financement ne peut répondre à cette question. Clarifier avec la municipalité quelle méthode de construction s'applique à l'emplacement, à la conception et aux éventuels intérêts de protection ; L'engagement de financement ne remplace pas un permis de construire.",
      sourceIds: ['gr-energiegesetz', 'gr-energieverordnung'],
    },
  ],
  sources: [...sources],
};