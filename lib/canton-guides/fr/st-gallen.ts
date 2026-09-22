import type { CantonGuide } from '../types';

const sources = [
  {
    id: 'sg-energy-law',
    authority: 'Canton de Saint-Gall',
    title: 'sGS 741.1 Loi sur l’énergie, art. 5b : autoproduction d’électricité dans les constructions neuves',
    url: 'https://www.gesetzessammlung.sg.ch/app/de/texts_of_law/741.1',
  },
  {
    id: 'sg-energy-ordinance',
    authority: 'Canton de Saint-Gall',
    title: 'sGS 741.11 Ordonnance sur l’énergie : dimensionnement et taxe de remplacement',
    url: 'https://www.gesetzessammlung.sg.ch/app/de/texts_of_law/741.11',
  },
  {
    id: 'sg-solar-procedure',
    authority: 'Canton de Saint-Gall',
    title: 'Annonce des installations solaires : formulaire cantonal et explications',
    url: 'https://www.sg.ch/umwelt-natur/energie/formulare-und-hilfsmittel/solaranlagen-melden.html',
  },
  {
    id: 'sg-solar-fire-safety',
    authority: 'Canton de Saint-Gall',
    title: 'Explications relatives au formulaire d’annonce : protection incendie des batteries de stockage',
    url: 'https://www.sg.ch/content/dam/sgch/umwelt-natur/energie/20260318_Erlaeuterungen_Meldeformular_Solaranlagen.pdf',
  },
  {
    id: 'sg-energy-funding',
    authority: 'Canton de Saint-Gall',
    title: 'Crédit spécial pour le financement des subventions énergétiques 2024–2030',
    url: 'https://www.sg.ch/news/sgch_allgemein/2023/11/klima--kitas--kreisgericht--kanton-empfiehlt-dreimal-ja.html',
  },
  {
    id: 'sg-agricultural-battery-funding',
    authority: 'Canton de Saint-Gall, Coopérative de crédit agricole',
    title: 'Contributions épuisées pour les batteries de stockage dans l’agriculture',
    url: 'https://www.sg.ch/news/sgch_landwirtschaftliche-kreditgenossenschaft/2025/12/aenderungen-bei-gewaehrung-von-beitraegen-und-investitionskredit.html',
  },
  {
    id: 'stadt-sg-energy-fund',
    authority: 'Ville de Saint-Gall',
    title: 'Fonds pour l’énergie : subventions des installations photovoltaïques dès 2025',
    url: 'https://www.stadt.sg.ch/news/stsg_medienmitteilungen/2024/06/foerderung-von-photovoltaik-anlagen-sinkt-per-2025.html',
  },
  {
    id: 'pronovo-eiv',
    authority: 'Pronovo',
    title: 'Rétribution unique pour les installations photovoltaïques : PRU, GRU et RUE',
    url: 'https://pronovo.ch/de/foerderung/photovoltaik',
  },
  {
    id: 'pronovo-tariff-calculator',
    authority: 'Pronovo',
    title: 'Calculateur tarifaire pour le photovoltaïque',
    url: 'https://pronovo.ch/de/services/tarifrechner',
  },
] as const;

export const guide: CantonGuide = {
  id: 'st-gallen',
  path: '/fr/solaire-saint-gall',
  canton: 'Saint-Gall',
  title: 'Installation photovoltaïque à Saint-Gall : autoproduction dans le neuf | PvPro.ch',
  description:
    'À Saint-Gall, les constructions neuves peuvent satisfaire à l’obligation d’autoproduction par le photovoltaïque, une efficacité énergétique supplémentaire, une solution RCP ou une taxe de remplacement.',
  h1: 'Installation photovoltaïque dans le canton de Saint-Gall : autoproduction et taxe de remplacement 2026',
  intro: [
    'Depuis le 1er juillet 2021, les constructions neuves du canton de Saint-Gall sont soumises à une exigence d’autoproduction électrique. Elle peut être satisfaite par le photovoltaïque, une efficacité énergétique supplémentaire, une solution commune de RCP ou une taxe de remplacement.',
    'La solution photovoltaïque exige 10 W par m² de surface de référence énergétique (SRE), mais au maximum 30 kW par bâtiment. La SRE est la surface chauffée du bâtiment pertinente pour le calcul énergétique ; les 30 kW plafonnent uniquement l’obligation, et non la puissance installée volontairement.',
  ],
  quickFacts: [
    {
      value: '10 W/m² SRE',
      label: 'Puissance pour satisfaire à l’exigence par le photovoltaïque',
      sourceIds: ['sg-energy-law', 'sg-energy-ordinance'],
    },
    {
      value: 'Max. 30 kW',
      label: 'Puissance exigée par bâtiment',
      sourceIds: ['sg-energy-law', 'sg-energy-ordinance'],
    },
    {
      value: 'CHF 2’700/kWp',
      label: 'Taxe de remplacement pour la puissance exigée',
      sourceIds: ['sg-energy-ordinance'],
    },
    {
      value: '30 jours',
      label: 'Délai de la procédure d’annonce',
      sourceIds: ['sg-solar-procedure'],
    },
  ],
  ctaAfterSection: 'erfuellung',
  sections: [
    {
      id: 'erfuellung',
      title: 'Quatre façons de satisfaire à l’exigence',
      paragraphs: [
        'Pour le justificatif énergétique de la construction neuve, choisissez l’une des quatre solutions admises et indiquez-la clairement dans le projet de construction. Il s’agit d’alternatives ; elles ne doivent pas être suivies successivement.',
      ],
      sourceIds: ['sg-energy-law', 'sg-energy-ordinance'],
      module: {
        kind: 'compliance-options',
        title: 'Quatre façons de satisfaire à l’exigence',
        intro:
          'Comparez les quatre possibilités indépendantes en fonction du bâtiment et de l’utilisation prévue.',
        items: [
          {
            title: 'Autoproduction par le photovoltaïque',
            value: '10 W/m² SRE, max. 30 kW',
            text: 'La puissance photovoltaïque exigée est de 10 W par m² de surface de référence énergétique et est plafonnée à 30 kW par bâtiment.',
            detail:
              'Le plafond concerne la puissance exigée. Il reste possible d’installer volontairement une installation plus grande.',
            sourceIds: ['sg-energy-law', 'sg-energy-ordinance'],
          },
          {
            title: 'Efficacité énergétique supplémentaire',
            value: '−5 kWh/m² par an',
            text: 'Au lieu de produire sa propre électricité, il est possible de réduire les besoins énergétiques pondérés de 5 kWh supplémentaires par m² et par an.',
            detail:
              'La solution d’efficacité doit être justifiée dans le justificatif énergétique du projet de construction concret.',
            sourceIds: ['sg-energy-law', 'sg-energy-ordinance'],
          },
          {
            title: 'Consommation propre commune dans un RCP',
            value: 'Satisfaction commune',
            text: 'L’exigence peut être satisfaite par une solution conforme au sein d’un regroupement dans le cadre de la consommation propre.',
            detail:
              'Un RCP organise la production et la consommation propre communes de plusieurs participants.',
            sourceIds: ['sg-energy-law', 'sg-energy-ordinance'],
          },
          {
            title: 'Taxe de remplacement',
            value: 'CHF 2’700 par kWp exigé',
            text: 'Au lieu de la solution d’autoproduction prescrite, il est possible de choisir une taxe de remplacement de CHF 2’700 par kWp de puissance exigée.',
            detail:
              'Ce choix est déclaré dans la demande de permis de construire ; la taxe est perçue avec les émoluments du permis.',
            sourceIds: ['sg-energy-law', 'sg-energy-ordinance'],
          },
        ],
      },
    },
    {
      id: 'erweiterungen',
      title: 'Les petits agrandissements peuvent être exemptés',
      paragraphs: [
        'En cas d’agrandissement, vérifiez d’abord la nouvelle SRE. L’exigence ne s’applique pas si cette surface est inférieure à 50 m².',
        'Une exception existe également si la nouvelle SRE ne dépasse pas 20% de la SRE existante et, simultanément, 1’000 m². Ces deux limites doivent être respectées pour la seconde exception.',
      ],
      sourceIds: ['sg-energy-ordinance'],
    },
    {
      id: 'meldung',
      title: 'Clarifier si une annonce ou un permis de construire est nécessaire',
      paragraphs: [
        'Annoncez une installation en toiture ou en façade suffisamment adaptée à l’autorité compétente 30 jours avant l’exécution prévue. La procédure d’annonce consiste à signaler le projet au lieu de suivre une procédure ordinaire de permis de construire.',
        'Si, dans les 30 jours, l’autorité ne communique ni le transfert vers une procédure ordinaire ou simplifiée ni un refus, le projet annoncé peut être réalisé. Les installations isolées, certaines installations le long des routes ainsi que les projets sur des bâtiments protégés ou dans des secteurs protégés continuent de nécessiter un permis de construire.',
      ],
      sourceIds: ['sg-solar-procedure'],
    },
    {
      id: 'batterie',
      title: 'Classer les batteries de stockage selon leur capacité',
      paragraphs: [
        'Pour un système de stockage, clarifiez d’abord sa capacité et si l’installation solaire elle-même est uniquement soumise à annonce. Lorsque l’installation solaire a seulement fait l’objet d’une annonce, une batterie de stockage jusqu’à 100 kWh ne nécessite aucune autorisation particulière de protection incendie ; au-delà de 100 kWh, une autorisation technique de protection incendie de la commune ou de l’Assurance immobilière de Saint-Gall (GVSG) est requise.',
        'Cette règle de protection incendie ne constitue pas un programme de subventions. Aucune contribution cantonale générale pour les batteries de stockage des maisons individuelles n’est indiquée. Les moyens du programme agricole spécial pour les batteries sont épuisés ; aucune nouvelle demande n’y est prise en compte depuis le 1er janvier 2026.',
      ],
      sourceIds: ['sg-solar-fire-safety', 'sg-agricultural-battery-funding'],
    },
    {
      id: 'foerderung',
      title: 'Vérifier séparément les subventions photovoltaïques de Pronovo et des communes',
      paragraphs: [
        'Demandez les subventions photovoltaïques ordinaires à la Confédération par l’intermédiaire de Pronovo et vérifiez séparément les contributions communales. La rétribution unique (RU) est le versement unique fédéral : la PRU s’applique aux installations de moins de 100 kW, la GRU dès 100 kW et la RUE aux installations sans consommation propre dans les catégories prévues.',
        'Depuis le 1er avril 2024, la contribution de base de la RU est de CHF 0. La puissance individuelle, le type d’installation et les éventuels bonus déterminent la contribution ; aucun pourcentage donné n’est garanti. Calculez donc la contribution fédérale à l’aide du calculateur tarifaire de Pronovo.',
        'Le crédit spécial cantonal de CHF 59 millions pour la période 2024 à 2030 finance un portefeuille de différentes mesures énergétiques et climatiques et ne constitue pas un fonds photovoltaïque distinct. La Ville de Saint-Gall offre un exemple communal avec son fonds pour l’énergie : dans l’exemple publié d’une installation de 10 kWp, la contribution supplémentaire de la Ville correspond à la moitié de la contribution liée à la puissance de la PRU. Il s’agit d’une contribution de la Ville, et non du Canton.',
      ],
      sourceIds: [
        'pronovo-eiv',
        'pronovo-tariff-calculator',
        'sg-energy-funding',
        'stadt-sg-energy-fund',
      ],
    },
    {
      id: 'kosten',
      title: 'Rendre les coûts et l’étendue du projet comparables',
      paragraphs: [
        'Comparez les offres sur la base de la même puissance exigée et de la même étendue de prestations. Faites indiquer séparément les modules photovoltaïques, la sous-construction, l’échafaudage, les travaux électriques, le raccordement au réseau et le stockage optionnel ; les contributions de Pronovo et des communes doivent également figurer dans des postes distincts.',
        'Avec PvPro.ch, les propriétaires peuvent comparer gratuitement et sans engagement jusqu’à trois offres solaires adaptées.',
      ],
      bullets: [
        'SRE et puissance obligatoire calculée à partir de celle-ci',
        'Variante choisie pour satisfaire à l’exigence dans le justificatif énergétique',
        'Procédure d’annonce ou d’autorisation',
        'Hypothèses de subventions séparées du prix de l’installation',
      ],
      sourceIds: [
        'sg-energy-law',
        'sg-energy-ordinance',
        'sg-solar-procedure',
        'pronovo-eiv',
      ],
    },
  ],
  faqs: [
    {
      question: 'Quelle doit être la taille de l’installation d’autoproduction d’une construction neuve ?',
      answer: '10 W/m² SRE, avec une obligation plafonnée à 30 kW.',
      sourceIds: ['sg-energy-ordinance'],
    },
    {
      question: 'Puis-je payer une taxe au lieu d’installer du photovoltaïque ?',
      answer: 'Oui, CHF 2’700 par kWp exigé.',
      sourceIds: ['sg-energy-law', 'sg-energy-ordinance'],
    },
    {
      question: 'Puis-je satisfaire à l’obligation par une efficacité énergétique accrue ?',
      answer:
        'Oui, en réduisant encore les besoins énergétiques pondérés de 5 kWh/m²/an.',
      sourceIds: ['sg-energy-law', 'sg-energy-ordinance'],
    },
    {
      question: 'Combien de temps dure la procédure d’annonce ?',
      answer: '30 jours.',
      sourceIds: ['sg-solar-procedure'],
    },
    {
      question: 'Le Canton subventionne-t-il directement mon installation photovoltaïque ordinaire ?',
      answer:
        'Le soutien photovoltaïque ordinaire passe principalement par Pronovo ; les programmes communaux doivent être vérifiés séparément.',
      sourceIds: ['pronovo-eiv', 'stadt-sg-energy-fund'],
    },
  ],
  sources: [...sources],
};