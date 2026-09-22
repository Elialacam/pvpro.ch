import type { CantonGuide } from '../types';

const sources = [
  {
    id: 'so-vote-2025',
    authority: 'Canton de Soleure',
    title: 'Votation du 9 février 2025 : révision totale de la loi sur l’énergie',
    url: 'https://so.ch/verwaltung/staatskanzlei/medien/medienmitteilung/news/energiegesetz-mehrheit-sagt-nein',
  },
  {
    id: 'so-energy-law',
    authority: 'Canton de Soleure',
    title: 'Loi sur l’énergie de 1991, version en vigueur depuis 2015',
    url: 'https://bgs.so.ch/app/de/texts_of_law/941.21',
  },
  {
    id: 'so-solar-notification',
    authority: 'Canton de Soleure, Office de l’aménagement du territoire',
    title: 'Plan directeur cantonal E-2.5 : annonce des installations solaires',
    url: 'https://so.ch/fileadmin/internet/bjd/bjd-arp/Richtplanung/pdf/Richtplantext/E-2_5.pdf',
  },
  {
    id: 'so-ebauso',
    authority: 'Canton de Soleure',
    title: 'Procédure électronique d’autorisation de construire eBauSO',
    url: 'https://so.ch/services/baubewilligungsverfahren',
  },
  {
    id: 'so-energy-funding',
    authority: 'Canton de Soleure, Service de l’énergie',
    title: 'Programme cantonal d’encouragement énergétique : mesures de soutien',
    url: 'https://energie.so.ch/foerderung/foerdermassnahmen',
  },
  {
    id: 'so-tax-book',
    authority: 'Office cantonal des impôts de Soleure',
    title: 'Manuel fiscal : exploitation d’une installation photovoltaïque',
    url: 'https://steuerbuch.so.ch/steuern/einkommenssteuer/ertraege-aus-unbeweglichem-vermoegen-und-liegenschaftskosten/27-nr-4',
  },
  {
    id: 'pronovo-eiv',
    authority: 'Pronovo',
    title: 'Rétribution unique pour les installations photovoltaïques',
    url: 'https://pronovo.ch/de/foerderung/photovoltaik',
  },
  {
    id: 'pronovo-tariff-calculator',
    authority: 'Pronovo',
    title: 'Calculateur de tarifs pour le photovoltaïque',
    url: 'https://pronovo.ch/de/services/tarifrechner',
  },
] as const;

export const guide: CantonGuide = {
  id: 'solothurn',
  path: '/fr/solaire-soleure',
  canton: 'Soleure',
  title: 'Solaire à Soleure : aucune nouvelle obligation en 2026',
  description:
    'La révision énergétique a été rejetée en 2025 : aucune nouvelle obligation de 10 W/m² ne s’applique à Soleure. Les installations dispensées d’autorisation doivent être annoncées 30 jours avant les travaux.',
  h1: 'Installation solaire dans le canton de Soleure : ce qui s’applique vraiment en 2026',
  intro: [
    'En 2026, aucune nouvelle obligation générale de 10 W/m² issue de la révision totale prévue ne s’applique aux installations solaires à Soleure : le projet a été rejeté le 9 février 2025.',
    'Pour les propriétaires, ce sont plutôt la loi sur l’énergie en vigueur, l’annonce des installations dispensées d’autorisation au moins 30 jours avant le début des travaux et l’aide fédérale versée par Pronovo qui importent.',
  ],
  quickFacts: [
    {
      value: '57,52% de non',
      label: 'Révision totale rejetée le 9 février 2025',
      sourceIds: ['so-vote-2025'],
    },
    {
      value: 'Aucune nouvelle obligation de 10 W/m²',
      label: 'La prescription de la révision rejetée ne s’applique pas',
      sourceIds: ['so-vote-2025', 'so-energy-law'],
    },
    {
      value: 'Au moins 30 jours',
      label: 'Annonce avant le début des travaux',
      sourceIds: ['so-solar-notification'],
    },
    {
      value: 'Rétribution unique via Pronovo',
      label: 'Principale aide pour les installations photovoltaïques ordinaires',
      sourceIds: ['pronovo-eiv', 'so-energy-funding'],
    },
  ],
  ctaAfterSection: 'rechtslage',
  sections: [
    {
      id: 'rechtslage',
      title: 'Qu’est-ce qui s’applique et qu’est-ce qui ne s’applique pas ?',
      paragraphs: [
        'Planifiez votre projet selon le droit en vigueur et non d’après les documents relatifs à la révision totale rejetée. La votation s’est soldée par 57,52% de non et 42,48% de oui ; Soleure n’a donc pas adopté de nouvelle loi sur l’énergie.',
        'La loi sur l’énergie de 1991, dans sa version en vigueur depuis 2015, reste déterminante. Avec l’ordonnance sur l’énergie, elle fixe des exigences pour les constructions neuves et les agrandissements, par exemple concernant les besoins de chaleur et la part d’énergie non renouvelable, mais elle n’instaure pas de nouvelle obligation cantonale générale de 10 W de puissance photovoltaïque par m² de surface de référence énergétique. Cette dernière correspond à la surface chauffée pertinente du bâtiment.',
      ],
      sourceIds: ['so-vote-2025', 'so-energy-law'],
      module: {
        kind: 'current-law-comparison',
        title: 'Qu’est-ce qui s’applique et qu’est-ce qui ne s’applique pas ?',
        intro:
          'Distinguez clairement le droit en vigueur et les procédures disponibles du contenu de la révision totale rejetée.',
        items: [
          {
            title: 'Loi sur l’énergie existante',
            value: 'S’applique',
            text: 'La loi sur l’énergie de 1991, dans sa version en vigueur depuis 2015, reste déterminante, et non la révision totale proposée.',
            sourceIds: ['so-energy-law', 'so-vote-2025'],
          },
          {
            title: 'Procédure d’annonce avec délai de 30 jours',
            value: 'S’applique',
            text: 'Une installation solaire dispensée d’autorisation selon le droit fédéral doit être annoncée à l’autorité compétente en matière de construction au moins 30 jours avant le début des travaux. Cette annonce remplace la procédure ordinaire d’autorisation de construire.',
            detail: 'L’expiration du délai n’entraîne pas d’autorisation automatique.',
            sourceIds: ['so-ebauso'],
          },
          {
            title: 'eBauSO',
            value: 'S’applique',
            text: 'La plateforme cantonale propose une démarche spécifique « Annonce d’une installation solaire » pour les installations dispensées d’autorisation.',
            sourceIds: ['so-solar-notification'],
          },
          {
            title: 'Aide fédérale via Pronovo',
            value: 'S’applique',
            text: 'Le soutien direct aux installations photovoltaïques ordinaires passe principalement par la rétribution unique fédérale gérée par Pronovo.',
            sourceIds: ['pronovo-eiv'],
          },
          {
            title: 'Nouvelle obligation de 10 W/m²',
            value: 'Ne s’applique pas',
            text: 'En 2026, la prescription générale de la révision totale rejetée ne constitue pas du droit cantonal en vigueur.',
            detail: 'La votation du 9 février 2025 ne doit pas être interprétée comme une entrée en vigueur.',
            sourceIds: ['so-vote-2025', 'so-energy-law'],
          },
          {
            title: 'Bonus d’encouragement prévus',
            value: 'Ne s’appliquent pas',
            text: 'Les contributions prévues par la révision pour la rénovation des toitures ou des façades, l’électricité hivernale, le stockage et les infrastructures bidirectionnelles ne doivent pas être présentées comme des aides générales actives.',
            sourceIds: ['so-vote-2025', 'so-energy-funding'],
          },
        ],
      },
    },
    {
      id: 'meldung',
      title: 'Annoncer correctement une installation solaire dispensée d’autorisation',
      paragraphs: [
        'Vérifiez d’abord auprès de l’autorité compétente en matière de construction si votre installation est dispensée d’autorisation selon le droit fédéral. Si c’est le cas, vous devez l’annoncer au moins 30 jours avant le début des travaux.',
        'Déposez un descriptif du projet, un plan de situation et un plan des façades. La démarche « Annonce d’une installation solaire » est disponible à cette fin sur eBauSO. Pour ces installations, l’annonce remplace la procédure ordinaire d’autorisation de construire, mais elle ne dispense pas de fournir les documents et ne vaut pas approbation automatique après 30 jours.',
      ],
      bullets: [
        'Contacter rapidement l’autorité communale compétente en matière de construction',
        'Préparer le descriptif du projet',
        'Joindre le plan de situation',
        'Joindre le plan des façades',
        'Effectuer l’annonce au moins 30 jours avant le début des travaux',
      ],
      sourceIds: ['so-solar-notification', 'so-ebauso'],
    },
    {
      id: 'foerderung',
      title: 'Calculer l’aide photovoltaïque via Pronovo',
      paragraphs: [
        'Calculez séparément avec Pronovo le soutien direct accordé à une installation photovoltaïque ordinaire. La rétribution unique est une contribution fédérale versée une seule fois ; elle ne doit pas être confondue avec les mesures cantonales d’encouragement destinées à d’autres travaux sur les bâtiments.',
        'En 2026, Pronovo distingue la PRU pour les installations de moins de 100 kW et la GRU à partir de 100 kW. La RUE concerne uniquement les installations sans consommation propre appartenant aux catégories prévues. Depuis le 1er avril 2024, la contribution de base de la rétribution unique est de CHF 0 ; la puissance, le type d’installation et les bonus applicables sont notamment déterminants.',
        'Faites calculer individuellement la contribution fédérale avec le calculateur de tarifs de Pronovo. Aucun pourcentage donné de l’investissement n’est garanti et une offre ne devrait pas le promettre de manière forfaitaire.',
      ],
      sourceIds: ['pronovo-eiv', 'pronovo-tariff-calculator'],
    },
    {
      id: 'kantonale-beitraege',
      title: 'Évaluer correctement les programmes cantonaux',
      paragraphs: [
        'Pour une installation photovoltaïque ordinaire, ne comptez pas sur une contribution cantonale directe générale. Le programme énergétique cantonal soutient d’autres mesures, telles que l’isolation thermique, les chauffages renouvelables, Minergie et le solaire thermique.',
        'Une installation photovoltaïque peut certes faire partie d’un projet Minergie et recevoir une rétribution unique fédérale. La production d’électricité ne devient toutefois pas pour autant une mesure cantonale d’encouragement Minergie. Le solaire thermique est également une technologie distincte et ne doit pas être assimilé au photovoltaïque.',
        'Ne considérez pas comme des programmes actifs les indications relatives aux contributions prévues pour le photovoltaïque lors de rénovations de toitures ou de façades, pour l’électricité hivernale, les batteries de stockage ou les infrastructures bidirectionnelles. Ces mesures étaient prévues dans le cadre de la révision totale rejetée.',
      ],
      sourceIds: ['so-energy-funding', 'so-vote-2025', 'pronovo-eiv'],
    },
    {
      id: 'batterie',
      title: 'Batterie de stockage : vérifier la déduction fiscale plutôt qu’une aide non confirmée',
      paragraphs: [
        'Planifiez une batterie domestique sans tabler sur une subvention cantonale forfaitaire : aucune contribution directe générale aux batteries de stockage n’est confirmée pour 2026.',
        'Pour les bâtiments existants, les dépenses consacrées à un système de stockage associé à une installation utilisant une énergie renouvelable peuvent être fiscalement déductibles sous certaines conditions ; des restrictions s’appliquent notamment aux constructions neuves. Une déduction fiscale réduit le revenu imposable : ce n’est ni un versement ni une réduction directe du même montant de l’impôt déjà dû. Faites vérifier le traitement applicable à votre bâtiment et à votre situation fiscale.',
      ],
      sourceIds: ['so-tax-book', 'so-energy-funding'],
    },
    {
      id: 'kosten',
      title: 'Rendre les coûts et la planification comparables',
      paragraphs: [
        'Comparez les offres sur une même base technique et administrative. La géométrie du toit, l’ombrage, la sous-structure, l’échafaudage, les travaux électriques, le raccordement au réseau et une éventuelle batterie devraient apparaître séparément.',
        'Présentez la rétribution unique Pronovo attendue séparément du prix de l’installation et ne traitez pas les éventuelles déductions fiscales comme une contribution garantie. Déterminez aussi qui prépare l’annonce via eBauSO et fournit les plans demandés.',
        'Avec PvPro.ch, les propriétaires peuvent comparer gratuitement et sans engagement jusqu’à trois offres solaires adaptées au même projet.',
      ],
      bullets: [
        'Puissance de l’installation et disposition des modules',
        'Montage, sous-structure et échafaudage',
        'Travaux électriques et raccordement au réseau',
        'Annonce et documents de planification',
        'Rétribution unique Pronovo indiquée séparément',
        'Batterie de stockage clairement désignée comme option',
      ],
      sourceIds: ['so-solar-notification', 'so-ebauso', 'pronovo-eiv'],
    },
  ],
  faqs: [
    {
      question: 'Existe-t-il en 2026 une obligation photovoltaïque générale pour les constructions neuves à Soleure ?',
      answer: 'Non, pas en vertu de la révision totale rejetée en 2025.',
      sourceIds: ['so-vote-2025', 'so-energy-law'],
    },
    {
      question: 'Combien de temps à l’avance dois-je annoncer mon installation solaire ?',
      answer: 'Au moins 30 jours avant le début des travaux.',
      sourceIds: ['so-ebauso'],
    },
    {
      question: 'Où l’annonce doit-elle être effectuée ?',
      answer:
        'Auprès de l’autorité compétente en matière de construction ; eBauSO propose une démarche spécifique pour annoncer une installation solaire.',
      sourceIds: ['so-solar-notification'],
    },
    {
      question: 'Existe-t-il des aides cantonales pour le photovoltaïque ?',
      answer:
        'Pour les installations photovoltaïques ordinaires, l’aide fédérale via Pronovo est centrale ; les programmes cantonaux pour les bâtiments concernent d’autres mesures.',
      sourceIds: ['so-energy-funding', 'pronovo-eiv'],
    },
    {
      question: 'Une batterie domestique est-elle subventionnée ?',
      answer:
        'Aucune contribution cantonale directe générale n’a pu être confirmée pour 2026 ; des déductions fiscales peuvent être pertinentes pour les bâtiments existants.',
      sourceIds: ['so-tax-book', 'so-energy-funding'],
    },
  ],
  sources: [...sources],
};