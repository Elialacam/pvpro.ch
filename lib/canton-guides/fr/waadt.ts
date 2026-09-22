import type { CantonGuide } from '../types';

const sources = [
  { id: 'vd-energie-2026', authority: 'Canton de Vaud', title: 'Législation sur l’énergie jusqu’au 31 décembre 2026', url: 'https://www.vd.ch/environnement/energie/legislation-2' },
  { id: 'vd-neues-gesetz', authority: 'Canton de Vaud', title: 'Nouvelle législation sur l’énergie dès le 1er janvier 2027', url: 'https://www.vd.ch/djes/nouvelle-loi-sur-lenergie' },
  { id: 'vd-solarverfahren', authority: 'Canton de Vaud', title: 'Installations solaires : procédure et formulaire cantonal d’annonce', url: 'https://www.vd.ch/environnement/energie/formulaires-energie/procedures-et-autorisations-pour-les-dossiers-energie' },
  { id: 'vd-programme-2026', authority: 'Canton de Vaud', title: 'Programme Bâtiments 2026', url: 'https://www.vd.ch/fileadmin/user_upload/themes/environnement/energie/fichiers_pdf/conditions.PB2026.v.1.1.pdf' },
  { id: 'vd-patrimoine', authority: 'Canton de Vaud', title: 'Solaire photovoltaïque & Patrimoine', url: 'https://www.vd.ch/prestation/s04-demander-une-subvention-solaire-photovoltaique-patrimoine' },
  { id: 'vd-crowdfunding', authority: 'Canton de Vaud', title: 'Installations photovoltaïques à financement participatif', url: 'https://www.vd.ch/prestation/26-demander-une-subvention-pour-une-installation-photovoltaique-a-financement-participatif' },
  { id: 'pronovo-pv', authority: 'Pronovo SA sur mandat de la Confédération', title: 'Rétribution unique pour les installations photovoltaïques', url: 'https://pronovo.ch/de/foerderung/photovoltaik' },
] as const;

export const guide: CantonGuide = {
  id: 'waadt', path: '/fr/solaire-vaud', canton: 'Vaud',
  title: 'Installation solaire dans le canton de Vaud | PvPro.ch',
  description: 'Comparez des offres photovoltaïques dans le canton de Vaud et distinguez les règles de 2026 de celles applicables dès 2027.',
  h1: 'Installation solaire dans le canton de Vaud : ce qui s’applique en 2026 et change en 2027',
  intro: [
    'Jusqu’à fin 2026, le droit actuel de l’énergie reste applicable dans le canton de Vaud : les bâtiments neufs doivent couvrir au moins 20% de leurs besoins en électricité avec de l’énergie renouvelable. Le photovoltaïque constitue une solution possible.',
    'Une nouvelle législation sur l’énergie entrera en vigueur le 1er janvier 2027. Elle étend notamment le recours au solaire pour les bâtiments neufs et les rénovations importantes de toiture ; les limites techniques d’exécution qui ne sont pas encore confirmées ne doivent toutefois pas être anticipées.',
  ],
  quickFacts: [
    { value: '20%', label: 'part renouvelable des besoins en électricité des bâtiments neufs jusqu’à fin 2026', sourceIds: ['vd-energie-2026'] },
    { value: '01.01.2027', label: 'entrée en vigueur de la nouvelle législation sur l’énergie', sourceIds: ['vd-neues-gesetz'] },
    { value: '30 jours', label: 'délai de la commune pour déterminer la procédure applicable à l’annonce solaire', sourceIds: ['vd-solarverfahren'] },
    { value: 'CHF 100/m²', label: 'M-01 avec U ≤0,15 et combinaison avec du photovoltaïque', sourceIds: ['vd-programme-2026'] },
  ],
  ctaAfterSection: 'wechsel',
  sections: [
    {
      id: 'wechsel', title: 'Distinguer clairement 2026 du droit applicable dès le 1er janvier 2027',
      paragraphs: [
        'Pour un projet déposé en 2026, la règle actuelle des 20% reste le point de départ. Les certificats d’électricité verte ne permettent pas de la respecter ; en cas d’emplacement défavorable ou de surface de toiture insuffisante, les exceptions prévues doivent être démontrées concrètement.',
        'Le Grand Conseil a définitivement adopté la nouvelle loi le 3 février 2026. Elle s’appliquera dès le 1er janvier 2027 avec le droit d’exécution et renforcera le recours au solaire pour les bâtiments neufs et les rénovations importantes de toiture. De futures valeurs en W/m² ou d’autres seuils techniques ne doivent pas être appliqués sans le droit d’exécution pertinent.',
      ],
      sourceIds: ['vd-energie-2026', 'vd-neues-gesetz'],
      module: {
        kind: 'vaud-transition', title: 'Droit actuel / dès le 1er janvier 2027', intro: 'Le droit applicable au moment du projet est déterminant.', columns: ['Jusqu’au 31 décembre 2026', 'Dès le 1er janvier 2027'],
        items: [
          { title: 'Droit actuellement applicable', value: '20% des besoins en électricité', text: 'Les bâtiments neufs couvrent au moins 20% de leurs besoins en électricité par des sources renouvelables ; le photovoltaïque est une solution possible. Les certificats d’électricité verte ne suffisent pas.', detail: 'Des exceptions sont possibles si l’emplacement est défavorable ou la surface de toiture insuffisante.', sourceIds: ['vd-energie-2026'] },
          { title: 'Droit futur', value: 'Davantage de solaire', text: 'La nouvelle législation vise plus fortement, en particulier, les bâtiments neufs et les rénovations importantes de toiture.', detail: 'Ne pas anticiper les seuils techniques du droit d’exécution applicable dès 2027.', sourceIds: ['vd-neues-gesetz'] },
        ],
      },
    },
    {
      id: 'foerderung', title: 'Une isolation combinée au photovoltaïque augmente la subvention M-01',
      paragraphs: [
        'Pour les installations photovoltaïques ordinaires et indépendantes, le canton renvoie à la rétribution unique de Pronovo. Le Programme Bâtiments vaudois ne doit pas être compris comme un fonds photovoltaïque forfaitaire.',
        'Pour M-01, la subvention s’élève à CHF 40/m² avec U ≤0,20, à CHF 70/m² avec U ≤0,15 et à CHF 100/m² avec U ≤0,15 en combinaison avec du photovoltaïque. Pour bénéficier du taux combiné, le photovoltaïque doit couvrir au moins 50% des surfaces favorables concernées. La subvention est cumulable avec Pronovo, mais la demande doit être approuvée avant le début des travaux.',
        'Pour les bâtiments et sites protégés, « Solaire photovoltaïque & Patrimoine » prend en charge les surcoûts d’intégration à concurrence de CHF 20’000 par service cantonal participant, avec un maximum total de CHF 40’000. Cette aide n’est pas cumulable avec le bonus solaire M-01.',
      ],
      sourceIds: ['vd-programme-2026', 'vd-patrimoine', 'pronovo-pv'],
    },
    {
      id: 'spezialprogramme', title: 'Le financement participatif est un programme spécial, pas une subvention standard pour maison individuelle',
      paragraphs: [
        'Un premier projet photovoltaïque à financement participatif éligible reçoit CHF 3’000 plus CHF 70/kWc ; les projets suivants reçoivent CHF 70/kWc. Le plafond est de CHF 30’000. Il faut au moins 30 kWc et 20 participants investissant chacun au moins CHF 500. Les communautés de propriétaires par étages sont exclues.',
        'Le catalogue des subventions 2026 ne confirme aucune contribution cantonale générale pour une batterie domestique ordinaire. Les programmes communaux doivent être vérifiés séparément selon le lieu.',
      ],
      sourceIds: ['vd-programme-2026', 'vd-crowdfunding'],
    },
    {
      id: 'verfahren', title: 'La commune détermine la procédure dans un délai de 30 jours',
      paragraphs: [
        'De nombreuses installations solaires peuvent être dispensées du permis de construire ordinaire, mais doivent être annoncées à la commune au moyen du formulaire standardisé. Les 30 jours ne constituent pas une autorisation automatique : la commune décide pendant ce délai si la dispense s’applique ou si une procédure ordinaire est nécessaire.',
        'Pour les bâtiments protégés au niveau cantonal, la simplification ne s’applique pas automatiquement. Depuis le 1er janvier 2026, le droit fédéral facilite aussi, à ses conditions, certaines installations en façade, y compris de plus de 8 m² ; leur classement concret doit rester clarifié avec la commune avant le début des travaux.',
      ],
      sourceIds: ['vd-solarverfahren'],
    },
  ],
  faqs: [
    { question: 'Quelle règle solaire s’applique dans le canton de Vaud jusqu’à fin 2026 ?', answer: 'Les bâtiments neufs doivent couvrir au moins 20% de leurs besoins en électricité avec de l’énergie renouvelable.', sourceIds: ['vd-energie-2026'] },
    { question: 'Puis-je respecter l’exigence des 20% avec des certificats d’électricité verte ?', answer: 'Non, l’achat de tels certificats ne satisfait pas à l’exigence.', sourceIds: ['vd-energie-2026'] },
    { question: 'Des valeurs fixes connues en W/m² s’appliquent-elles déjà dès 2027 ?', answer: 'La nouvelle législation s’applique dès le 1er janvier 2027 ; les seuils techniques doivent être tirés du droit d’exécution alors applicable.', sourceIds: ['vd-neues-gesetz'] },
    { question: 'Quand M-01 atteint-il CHF 100/m² ?', answer: 'Avec U ≤0,15 en combinaison avec du photovoltaïque, si celui-ci couvre au moins 50% des surfaces favorables concernées.', sourceIds: ['vd-programme-2026'] },
    { question: 'Le délai de 30 jours équivaut-il à une autorisation automatique ?', answer: 'Non. La commune l’utilise pour décider si une dispense est possible ou si une procédure de permis de construire est nécessaire.', sourceIds: ['vd-solarverfahren'] },
  ],
  sources: [...sources],
};