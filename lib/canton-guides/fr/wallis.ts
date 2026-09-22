import type { CantonGuide } from '../types';

const sources = [
  { id: 'vs-energiegesetz', authority: 'Canton du Valais', title: 'Loi sur l’énergie du 8 septembre 2023', url: 'https://lex.vs.ch/app/de/texts_of_law/730.1' },
  { id: 'vs-energieverordnung', authority: 'Canton du Valais', title: 'Ordonnance sur l’énergie', url: 'https://lex.vs.ch/app/de/texts_of_law/730.100' },
  { id: 'vs-solar', authority: 'Canton du Valais, Service de l’énergie et des forces hydrauliques', title: 'Énergie solaire : obligations, procédures et subventions', url: 'https://www.vs.ch/de/web/energie/solarenergie' },
  { id: 'vs-bauverfahren', authority: 'Canton du Valais', title: 'Installations solaires dispensées d’autorisation et procédure d’annonce', url: 'https://www.vs.ch/web/energie/mettre-en-place-une-installation-solaire' },
  { id: 'vs-steuern-pv', authority: 'Canton du Valais', title: 'Traitement fiscal des installations photovoltaïques', url: 'https://www.vs.ch/web/energie/programmes-de-promotion/aides-financieres' },
  { id: 'pronovo-pv', authority: 'Pronovo SA sur mandat de la Confédération', title: 'Rétribution unique pour les installations photovoltaïques', url: 'https://pronovo.ch/de/foerderung/photovoltaik' },
] as const;

export const guide: CantonGuide = {
  id: 'wallis', path: '/fr/solaire-valais', canton: 'Valais',
  title: 'Installation photovoltaïque en Valais | PvPro.ch',
  description: 'Comparez des offres photovoltaïques en Valais et vérifiez les obligations pour bâtiments neufs, toitures rénovées et grands toits.',
  h1: 'Installation solaire en Valais : obligation photovoltaïque pour construction neuve et rénovation de toiture en 2026',
  intro: [
    'La législation valaisanne sur l’énergie est en vigueur depuis le 1er janvier 2025. Elle n’exige pas seulement une autoproduction électrique pour les bâtiments neufs et certaines extensions : enlever la couverture d’un bâtiment existant peut aussi déclencher une obligation solaire.',
    'Les grands toits de plus de 500 m² sont en outre soumis à une obligation d’équipement à long terme. Le type de projet, la surface de référence énergétique, la surface de toiture traitée et les éventuelles exceptions doivent donc être examinés séparément.',
  ],
  quickFacts: [
    { value: '20 W/m² SRE', label: 'puissance minimale pour les constructions neuves, extensions et rénovations de toiture concernées', sourceIds: ['vs-energiegesetz', 'vs-energieverordnung'] },
    { value: 'max. 30 kW', label: 'plafond de la puissance exigée dans ces cas', sourceIds: ['vs-energiegesetz', 'vs-energieverordnung'] },
    { value: '>500 m²', label: 'surface de toiture soumise à l’obligation d’équipement à long terme', sourceIds: ['vs-energiegesetz'] },
    { value: '30 jours', label: 'annonce préalable pour les projets dispensés d’autorisation', sourceIds: ['vs-bauverfahren'] },
  ],
  ctaAfterSection: 'dachsanierung',
  sections: [
    {
      id: 'dachsanierung', title: 'Vérification d’une rénovation de toiture en Valais',
      paragraphs: [
        'Lorsque la couverture est enlevée, un bâtiment existant doit en principe produire lui-même une partie de l’électricité ou de la chaleur qu’il consomme. Pour le photovoltaïque, l’ordonnance précise une puissance minimale de 20 W/m² de surface de référence énergétique, plafonnée à 30 kW.',
        'La surface d’installation exigée ne peut occuper plus de 80% des surfaces de toiture dont la couverture est enlevée. Les petites réparations sans enlèvement de la couverture doivent donc être classées autrement qu’une véritable réfection.',
      ],
      sourceIds: ['vs-energiegesetz', 'vs-energieverordnung'],
      module: {
        kind: 'valais-roof-check', title: 'Votre toit est-il ouvert ?', intro: 'Suivez les étapes dans cet ordre.',
        items: [
          { title: '1. Déterminer l’ampleur', value: 'Couverture enlevée ?', text: 'Pour une simple petite réparation, clarifier séparément l’ampleur concrète ; si la couverture est enlevée, vérifier l’obligation.', sourceIds: ['vs-energiegesetz'] },
          { title: '2. Vérifier les exceptions', value: 'Quatre exceptions', text: 'Sont possibles : classe globale C du CECB après rénovation, rénovation énergétique simultanée de toutes les façades, versant nord uniquement ou utilisation exclusivement estivale.', sourceIds: ['vs-energiegesetz'] },
          { title: '3. Calculer la puissance', value: '20 W/m² SRE', text: 'Sans exception, il faut prévoir au moins 20 W par m² de surface de référence énergétique, mais au maximum 30 kW.', sourceIds: ['vs-energieverordnung'] },
          { title: '4. Limiter la surface du toit', value: 'max. 80%', text: 'La surface photovoltaïque nécessaire ne doit pas occuper plus de 80% de la surface de toiture nouvellement couverte.', sourceIds: ['vs-energieverordnung'] },
        ],
      },
    },
    {
      id: 'neubau', title: 'Constructions neuves et extensions : 20 W/m², au maximum 30 kW',
      paragraphs: [
        'Les constructions neuves et extensions concernées doivent atteindre au moins 20 W de puissance renouvelable autoproduite par m² de surface de référence énergétique, ou SRE. Cette obligation n’exige jamais plus de 30 kW.',
        'Une extension est exemptée si la nouvelle SRE est inférieure à 50 m². Elle l’est également si elle représente moins de 20% de la SRE existante tout en ne dépassant pas 1’000 m². Une exception légale spécifique s’applique aux bâtiments Minergie déjà équipés de photovoltaïque.',
        'Aux conditions légales, la production correspondante peut aussi être assurée par une participation financière à une installation renouvelable en Valais ou dans un canton voisin, ou par un regroupement dans le cadre de la consommation propre.',
      ],
      sourceIds: ['vs-energiegesetz', 'vs-energieverordnung'],
    },
    {
      id: 'grossdaecher', title: 'Toits de plus de 500 m² : une règle propre sur 25 ans',
      paragraphs: [
        'Les bâtiments dont la toiture dépasse 500 m² doivent être équipés pour produire de l’électricité dans les 25 ans suivant l’entrée en vigueur de la loi. Sont concernées les surfaces recevant un rayonnement annuel moyen supérieur à 1’200 kWh/m².',
        'La puissance exigée est limitée par la puissance de raccordement électrique existante. L’exigence est remplie soit avec du photovoltaïque sur au moins 40% de la surface de toiture, soit avec au moins 20 W/m² de surface de référence énergétique.',
      ],
      sourceIds: ['vs-energiegesetz', 'vs-energieverordnung'],
      module: {
        kind: 'valais-large-roofs', title: 'Parcours de vérification pour un grand toit', intro: 'Cette obligation doit être distinguée de la règle sur la rénovation de toiture.',
        items: [
          { title: '1. Surface du toit', value: '>500 m²', text: 'Seuls les toits dépassant ce seuil relèvent de cette règle à long terme.', sourceIds: ['vs-energiegesetz'] },
          { title: '2. Potentiel solaire', value: '>1’200 kWh/m²/an', text: 'Les surfaces de toiture dépassant le rayonnement annuel moyen fixé sont pertinentes.', sourceIds: ['vs-energiegesetz'] },
          { title: '3. Délai', value: '25 ans', text: 'L’équipement doit intervenir dans les 25 ans suivant l’entrée en vigueur du 1er janvier 2025.', sourceIds: ['vs-energiegesetz'] },
          { title: '4. Respect de l’exigence', value: '40% du toit ou 20 W/m² SRE', text: 'L’une des deux variantes satisfait à l’exigence de surface ou de puissance ; la puissance de raccordement reste le plafond.', sourceIds: ['vs-energieverordnung'] },
        ],
      },
    },
    {
      id: 'verfahren', title: 'Traiter séparément l’annonce et les subventions',
      paragraphs: [
        'Lorsqu’une installation solaire est dispensée de la procédure ordinaire de permis de construire, elle doit être annoncée à l’autorité compétente 30 jours avant le début des travaux. Les installations sur des monuments culturels ou sites naturels d’importance cantonale ou nationale restent soumises à autorisation.',
        'Pour le photovoltaïque ordinaire, le canton renvoie à Pronovo. Le Programme Bâtiments valaisan soutient d’autres mesures de rénovation et de chauffage et ne constitue pas une contribution cantonale forfaitaire au photovoltaïque. Les aides communales doivent être vérifiées séparément ; aucun bonus cantonal général pour les batteries domestiques ordinaires n’est confirmé.',
        'Pour les bâtiments existants, les coûts d’investissement imputables peuvent être déduits du revenu imposable selon les directives fiscales cantonales. Pour des revenus allant jusqu’à 10’000 kWh, le canton prévoit un traitement fiscal particulier. Consultez la directive actuelle par le lien officiel sur l’énergie solaire ; elle ne permet pas de déduire une économie fiscale garantie.',
      ],
      sourceIds: ['vs-bauverfahren', 'vs-solar', 'vs-steuern-pv', 'pronovo-pv'],
    },
  ],
  faqs: [
    { question: 'Toute petite réparation de toiture déclenche-t-elle une obligation solaire en Valais ?', answer: 'Non. Il faut notamment déterminer si la couverture est enlevée.', sourceIds: ['vs-energiegesetz'] },
    { question: 'Quelle exigence s’applique à une rénovation de toiture concernée ?', answer: 'Au moins 20 W/m² SRE, au maximum 30 kW ; la surface photovoltaïque est limitée à 80% de la surface nouvellement couverte.', sourceIds: ['vs-energieverordnung'] },
    { question: 'Quelle exception peut s’appliquer après une rénovation de toiture ?', answer: 'Notamment une classe globale C du CECB, la rénovation énergétique simultanée de toutes les façades, le seul versant nord ou une utilisation exclusivement estivale.', sourceIds: ['vs-energiegesetz'] },
    { question: 'Quelles règles valent pour les toits de plus de 500 m² ?', answer: 'Si le rayonnement est suffisant, une règle de 25 ans s’applique ; il faut occuper 40% du toit ou atteindre 20 W/m² SRE.', sourceIds: ['vs-energiegesetz', 'vs-energieverordnung'] },
    { question: 'Où demander une subvention pour une installation photovoltaïque valaisanne ordinaire ?', answer: 'Les subventions photovoltaïques ordinaires sont demandées à Pronovo ; les éventuelles contributions communales doivent être vérifiées séparément.', sourceIds: ['vs-solar', 'pronovo-pv'] },
  ],
  sources: [...sources],
};