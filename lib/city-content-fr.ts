/**
 * FRENCH CITY CONTENT - Geneva (Canton Genève)
 * Full French translation for Geneva solar installation page
 */

import { CityContent } from './city-content';
import { ECONOMIC_FACTS, FactsLocale, NumericRange, formatSwissNumber } from './facts';

function factRange(range: NumericRange, locale: FactsLocale): string {
  const joiner = locale === 'de' ? ' bis ' : '–';
  return `${formatSwissNumber(range.min)}${joiner}${formatSwissNumber(range.max)}`;
}

const afterFederalSubsidy5kw = {
  min: ECONOMIC_FACTS.systemCosts.bySize[5].min - 5 * ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30,
  max: ECONOMIC_FACTS.systemCosts.bySize[5].max - 5 * ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30,
};



export const cityContentsFR: Record<string, CityContent> = {
  genf: {
    slug: 'genf',
    image: '/images/asset-haus-luftbild-2.webp',
    heroHeadline: 'Installation Solaire Genève',
    heroSubheadline: 'Profitez des conditions solaires locales',
    heroDescription: 'Comparez gratuitement les offres d\'installateurs locaux certifiés.',

    whySolarTitle: 'Pourquoi Genève est-elle idéale pour l\'énergie solaire?',
    whySolarIntro: 'Genève bénéficie d’un climat local favorable au photovoltaïque.',
    whySolarReasons: [
      {
        title: 'Climat local favorable',
        description: 'Genève bénéficie d’un climat local favorable au photovoltaïque.'
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
      'Genève bénéficie d’un climat local favorable au photovoltaïque.',
      'Le marché de l\'énergie solaire à Genève est dynamique et mature. Le canton se distingue par des programmes de subventions exemplaires et un soutien complet aux propriétaires. Les Services Industriels de Genève (SIG) offrent des conseils professionnels et rachètent le surplus d\'électricité à des tarifs attractifs.',
      'Les coûts, la production et la rentabilité à Genève dépendent du bâtiment, du dimensionnement et de l’autoconsommation.',
      'Le Canton de Genève vise la neutralité climatique et encourage massivement le développement du solaire. Nos partenaires installateurs locaux certifiés vous accompagnent tout au long du processus - de la planification à l\'installation jusqu\'à l\'enregistrement des subventions. Les démarches administratives sont simplifiées et bien accompagnées.'
    ],

    pricing: {
      min: ECONOMIC_FACTS.systemCosts.perKwp.min,
      max: ECONOMIC_FACTS.systemCosts.perKwp.max,
      typical5kw: ECONOMIC_FACTS.systemCosts.bySize[5],
      afterSubsidy5kw: afterFederalSubsidy5kw,
      roiYears: factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'fr'),
    },

    incentives: {
      title: 'Subventions à Genève',
      description: 'Le Canton de Genève offre des programmes de subventions attrayants pour les installations photovoltaïques. En plus de la rétribution unique fédérale, vous bénéficiez de subventions cantonales et de déductions fiscales.',
      programs: [
        {
          name: 'Rétribution Unique Fédérale (RU)',
          amount: `${formatSwissNumber(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 0)} CHF par kWc`,
          description: 'Les coûts, la production et la rentabilité à Genève dépendent du bâtiment, du dimensionnement et de l’autoconsommation.'
        },
        {
          name: 'Subvention Canton de Genève',
          amount: 'Selon le programme en vigueur',
          description: 'Le Canton de Genève offre des subventions supplémentaires pour les installations solaires innovantes. Des bonus particuliers sont accordés pour les systèmes avec batteries de stockage et les solutions d\'autoconsommation collective.'
        },
        {
          name: 'Déductions fiscales Genève',
          amount: 'Selon le programme en vigueur',
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
        systemSize: 'Selon le projet',
        cost: 'Selon le projet',
        savings: 'Selon le projet',
        payback: 'Selon le projet',
        quote: 'Notre installation solaire fonctionne parfaitement depuis 2 ans. Les rendements sont excellents grâce au climat genevois favorable. Nous sommes ravis!'
      },
      {
        name: 'Immeuble Residentia SA',
        location: 'Genève-Champel',
        systemSize: 'Selon le projet',
        cost: 'Selon le projet',
        savings: 'Selon le projet',
        payback: 'Selon le projet',
        quote: 'L\'installation professionnelle et les subventions généreuses ont rendu ce projet très rentable. Un excellent investissement pour notre copropriété.'
      },
      {
        name: 'Entreprise TechGen Sàrl',
        location: 'Genève-Meyrin',
        systemSize: 'Selon le projet',
        cost: 'Selon le projet',
        savings: 'Selon le projet',
        payback: 'Selon le projet',
        quote: 'Notre installation solaire avec batterie nous rend largement indépendants du réseau. Une décision stratégique parfaite pour notre entreprise.'
      }
    ],

    faqs: [
      {
        question: 'Combien coûte une installation solaire à Genève?',
        answer: 'Les coûts, la production et la rentabilité à Genève dépendent du bâtiment, du dimensionnement et de l’autoconsommation.'
      },
      {
        question: 'Quelles subventions sont disponibles à Genève?',
        answer: 'Les coûts, la production et la rentabilité à Genève dépendent du bâtiment, du dimensionnement et de l’autoconsommation.'
      },
      {
        question: 'Combien produit une installation solaire à Genève?',
        answer: 'Genève bénéficie d’un climat local favorable au photovoltaïque.'
      },
      {
        question: 'Combien de temps faut-il pour amortir une installation à Genève?',
        answer: 'Les coûts, la production et la rentabilité à Genève dépendent du bâtiment, du dimensionnement et de l’autoconsommation.'
      },
      {
        question: 'Comment fonctionnent les Services Industriels de Genève (SIG)?',
        answer: 'Les SIG offrent un soutien complet pour les installations solaires: conseil professionnel, tarifs de rachat attractifs pour le surplus d\'électricité, et accompagnement administratif. Les SIG facilitent également les raccordements au réseau et l\'enregistrement auprès des autorités compétentes.'
      },
      {
        question: 'Une installation solaire est-elle rentable au bord du lac?',
        answer: 'Absolument! Les zones au bord du Lac Léman bénéficient d\'un climat particulièrement favorable. Le reflet de l\'eau peut même augmenter les rendements. Genève offre l\'une des meilleures rentabilités solaires de Suisse romande.'
      },
      {
        question: 'Quelle est la durée d\'installation d\'une installation solaire?',
        answer: 'De la demande à l\'installation, il faut compter en général 2-4 mois à Genève. Le montage sur le toit ne dure habituellement que 1-3 jours, selon la taille de l\'installation. Après l\'installation, la mise en service et l\'acceptation par les SIG ont lieu.'
      },
      {
        question: 'Une batterie de stockage vaut-elle la peine à Genève?',
        answer: 'Les coûts, la production et la rentabilité à Genève dépendent du bâtiment, du dimensionnement et de l’autoconsommation.'
      }
    ],

    testimonial: {
      initials: 'MD',
      name: 'Marie Dubois',
      quote: 'Genève offre d\'excellentes conditions pour l\'énergie solaire. Notre installation produit beaucoup plus que prévu. Avec PvPro.ch, nous avons reçu trois offres compétitives et choisi la meilleure. Un service vraiment recommandable!'
    }
  }
};
