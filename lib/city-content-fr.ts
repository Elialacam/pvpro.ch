/**
 * FRENCH CITY CONTENT - Geneva (Canton Genève)
 * Full French translation for Geneva solar installation page
 */

import { CityContent } from './city-content';

export const cityContentsFR: Record<string, CityContent> = {
  genf: {
    slug: 'genf',
    heroHeadline: 'Installation Solaire Genève',
    heroSubheadline: 'Profitez de 1.849 heures d\'ensoleillement par an',
    heroDescription: 'Genève, capitale internationale, offre d\'excellentes conditions pour l\'énergie solaire. Comparez gratuitement les offres d\'installateurs locaux certifiés et économisez jusqu\'à 30%.',

    whySolarTitle: 'Pourquoi Genève est-elle idéale pour l\'énergie solaire?',
    whySolarIntro: 'Avec 1.849 heures d\'ensoleillement par an, Genève se classe parmi les meilleurs sites solaires de Suisse. Le climat lémanique doux et la forte sensibilisation écologique font de Genève un lieu privilégié pour les installations photovoltaïques.',
    whySolarReasons: [
      {
        title: '1.849 heures d\'ensoleillement',
        description: 'Genève bénéficie d\'un ensoleillement généreux avec 1.849 heures par an - nettement plus que le Plateau suisse. Les installations solaires produisent ici jusqu\'à 25% de plus qu\'à Zurich, ce qui améliore considérablement la rentabilité.'
      },
      {
        title: 'Subventions attractives à Genève',
        description: 'Le Canton de Genève offre d\'excellents programmes de subventions pour les installations solaires. En plus de la rétribution unique fédérale, il existe des subventions cantonales généreuses et des déductions fiscales avantageuses pour les propriétaires genevois.'
      },
      {
        title: 'Leader de la transition énergétique',
        description: 'Genève est pionnière en matière d\'énergies renouvelables. La ville et le canton soutiennent activement l\'expansion du solaire avec des conseils professionnels, des procédures simplifiées et une forte sensibilisation écologique de la population.'
      }
    ],

    cityFactsTitle: 'Genève: Excellence solaire au bord du lac',
    cityFactsParagraphs: [
      'Genève, ville internationale au bord du lac Léman, compte plus de 200.000 habitants et est le centre du canton homonyme. Avec 1.849 heures d\'ensoleillement par an, la ville offre d\'excellentes conditions pour les installations photovoltaïques. Le climat lémanique doux garantit des rendements élevés tout au long de l\'année.',
      'Le marché de l\'énergie solaire à Genève est dynamique et mature. Le canton se distingue par des programmes de subventions exemplaires et un soutien complet aux propriétaires. Les Services Industriels de Genève (SIG) offrent des conseils professionnels et rachètent le surplus d\'électricité à des tarifs attractifs.',
      'Une installation photovoltaïque de 5 kWp à Genève produit environ 5.800 kWh d\'électricité par an. Avec un taux élevé d\'autoconsommation, cela permet des économies annuelles de plus de CHF 2.000 et un amortissement en 6-8 ans. Les propriétaires genevois bénéficient également d\'avantages fiscaux considérables.',
      'Le Canton de Genève vise la neutralité climatique et encourage massivement le développement du solaire. Nos partenaires installateurs locaux certifiés vous accompagnent tout au long du processus - de la planification à l\'installation jusqu\'à l\'enregistrement des subventions. Les démarches administratives sont simplifiées et bien accompagnées.'
    ],

    pricing: {
      min: 9500,
      max: 25000,
      typical5kw: { min: 10500, max: 15500 },
      afterSubsidy5kw: { min: 7200, max: 11000 },
      roiYears: '6-8'
    },

    incentives: {
      title: 'Subventions à Genève',
      description: 'Le Canton de Genève offre des programmes de subventions attrayants pour les installations photovoltaïques. En plus de la rétribution unique fédérale, vous bénéficiez de subventions cantonales et de déductions fiscales.',
      programs: [
        {
          name: 'Rétribution Unique Fédérale (RU)',
          amount: 'Jusqu\'à CHF 3.500',
          description: 'La Confédération encourage les nouvelles installations photovoltaïques avec une rétribution unique couvrant jusqu\'à 30% des coûts d\'investissement. Pour une installation de 5 kWp à Genève, cela correspond à environ CHF 2.800-3.500.'
        },
        {
          name: 'Subvention Canton de Genève',
          amount: 'Supplémentaires 10-20%',
          description: 'Le Canton de Genève offre des subventions supplémentaires pour les installations solaires innovantes. Des bonus particuliers sont accordés pour les systèmes avec batteries de stockage et les solutions d\'autoconsommation collective.'
        },
        {
          name: 'Déductions fiscales Genève',
          amount: 'Jusqu\'à CHF 5.000/an',
          description: 'Les dépenses pour les installations solaires sont déductibles fiscalement à Genève. Cela réduit encore les coûts effectifs et améliore l\'amortissement de votre investissement solaire.'
        },
        {
          name: 'SIG - Services Industriels',
          amount: 'Tarifs de rachat attractifs',
          description: 'Les Services Industriels de Genève (SIG) rachètent le surplus d\'électricité solaire à des tarifs attractifs et offrent des conseils professionnels pour l\'optimisation de votre installation.'
        }
      ]
    },

    caseStudies: [
      {
        name: 'Famille Dubois',
        location: 'Genève-Eaux-Vives',
        systemSize: '5.8 kWp',
        cost: '13.200 CHF (net)',
        savings: '2.100 CHF/an',
        payback: '6,3 ans',
        quote: 'Notre installation solaire fonctionne parfaitement depuis 2 ans. Les rendements sont excellents grâce au bon ensoleillement genevois. Nous sommes ravis!'
      },
      {
        name: 'Immeuble Residentia SA',
        location: 'Genève-Champel',
        systemSize: '22 kWp',
        cost: '42.500 CHF (net)',
        savings: '6.800 CHF/an',
        payback: '6,2 ans',
        quote: 'L\'installation professionnelle et les subventions généreuses ont rendu ce projet très rentable. Un excellent investissement pour notre copropriété.'
      },
      {
        name: 'Entreprise TechGen Sàrl',
        location: 'Genève-Meyrin',
        systemSize: '30 kWp avec stockage',
        cost: '62.000 CHF (net)',
        savings: '10.500 CHF/an',
        payback: '5,9 ans',
        quote: 'Notre installation solaire avec batterie nous rend largement indépendants du réseau. Une décision stratégique parfaite pour notre entreprise.'
      }
    ],

    faqs: [
      {
        question: 'Combien coûte une installation solaire à Genève?',
        answer: 'Une installation photovoltaïque typique pour une maison individuelle à Genève coûte entre CHF 10.500 et CHF 15.500 bruts pour un système de 5 kWp. Après les subventions fédérales et cantonales, les coûts nets se réduisent à CHF 7.200-11.000. Avec une batterie de stockage, les coûts sont plus élevés, entre CHF 21.000 et CHF 30.000 bruts.'
      },
      {
        question: 'Quelles subventions sont disponibles à Genève?',
        answer: 'À Genève, vous bénéficiez de plusieurs programmes de subventions: 1) Rétribution Unique Fédérale (RU) jusqu\'à CHF 3.500, 2) Subventions cantonales supplémentaires de 10-20%, 3) Déductions fiscales jusqu\'à CHF 5.000/an, 4) Tarifs de rachat attractifs des SIG. Au total, jusqu\'à 40% des coûts d\'investissement peuvent être couverts.'
      },
      {
        question: 'Combien produit une installation solaire à Genève?',
        answer: 'À Genève, une installation de 1 kWp produit environ 1.150 kWh par an. Un système typique de 5 kWp génère donc environ 5.800 kWh/an, ce qui couvre le besoin annuel en électricité d\'une famille de 3-4 personnes. Grâce aux 1.849 heures d\'ensoleillement, les rendements sont excellents.'
      },
      {
        question: 'Combien de temps faut-il pour amortir une installation à Genève?',
        answer: 'Grâce aux bonnes conditions d\'ensoleillement et aux subventions attractives, une installation photovoltaïque à Genève s\'amortit en 6-8 ans. Avec une durée de vie de 25-30 ans, vous bénéficiez de 17-22 ans d\'électricité gratuite. Une batterie prolonge légèrement l\'amortissement mais augmente l\'autoconsommation.'
      },
      {
        question: 'Comment fonctionnent les Services Industriels de Genève (SIG)?',
        answer: 'Les SIG offrent un soutien complet pour les installations solaires: conseil professionnel, tarifs de rachat attractifs pour le surplus d\'électricité, et accompagnement administratif. Les SIG facilitent également les raccordements au réseau et l\'enregistrement auprès des autorités compétentes.'
      },
      {
        question: 'Une installation solaire est-elle rentable au bord du lac?',
        answer: 'Absolument! Les régions au bord du Lac Léman bénéficient d\'un climat particulièrement favorable avec un ensoleillement généreux. Le reflet de l\'eau peut même augmenter les rendements. Genève offre l\'une des meilleures rentabilités solaires de Suisse romande.'
      },
      {
        question: 'Quelle est la durée d\'installation d\'une installation solaire?',
        answer: 'De la demande à l\'installation, il faut compter en général 2-4 mois à Genève. Le montage sur le toit ne dure habituellement que 1-3 jours, selon la taille de l\'installation. Après l\'installation, la mise en service et l\'acceptation par les SIG ont lieu.'
      },
      {
        question: 'Une batterie de stockage vaut-elle la peine à Genève?',
        answer: 'Avec les bons rendements solaires à Genève, une batterie de stockage peut être très judicieuse. Vous pouvez augmenter votre autoconsommation de 30% à 60-70% et devenir ainsi plus indépendant du réseau. Le Canton de Genève encourage les systèmes avec stockage par des subventions supplémentaires.'
      }
    ],

    testimonial: {
      initials: 'MD',
      name: 'Marie Dubois',
      quote: 'Genève offre d\'excellentes conditions pour l\'énergie solaire. Notre installation produit beaucoup plus que prévu. Avec PVPro, nous avons reçu trois offres compétitives et choisi la meilleure. Un service vraiment recommandable!'
    }
  }
};
