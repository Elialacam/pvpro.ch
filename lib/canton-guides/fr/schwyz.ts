import type { CantonGuide } from '../types';

const sources = [
  { id: 'sz-energy-ordinance', authority: 'Canton de Schwytz', title: 'Ordonnance cantonale sur l’énergie, § 24d', url: 'https://www.sz.ch/public/upload/assets/32457/420_111.pdf?fp=24#page=9' },
  { id: 'sz-own-electricity', authority: 'Canton de Schwytz', title: 'Obligation de produire sa propre électricité et cadastre solaire cantonal', url: 'https://www.sz.ch/umweltdepartement/amt-fuer-umwelt-und-energie/energie-und-klima/energieversorgung/solarenergie.html/8756-8758-8802-9447-9453-10708-11115-11093' },
  { id: 'sz-solar-guide-2026', authority: 'Canton de Schwytz', title: 'Aide à la planification des installations solaires sur les bâtiments : eBau SZ et délai d’annonce', url: 'https://www.sz.ch/public/upload/assets/75112/Planungshilfe_fuer_Solaranlagen_am_Gebaeude.pdf' },
  { id: 'sz-energy-funding-2026', authority: 'Canton de Schwytz', title: 'Programme d’encouragement énergétique 2026', url: 'https://www.sz.ch/verwaltung/umweltdepartement/amt-fuer-umwelt-und-energie/energie-und-klima/foerderprogramme.html/8756-8758-8802-9447-9453-10708-11116' },
  { id: 'sz-agricultural-battery', authority: 'Canton de Schwytz, Office de l’agriculture', title: 'Aides à l’investissement : batteries destinées au stockage d’énergie durable', url: 'https://www.sz.ch/volkswirtschaftsdepartement/amt-fuer-landwirtschaft/bauliche-massnahmen/oekonomiegebaeude/beitragsgesuch-batteriespeicher-zur-speicherung-nachhaltiger-energie.html/8756-8758-8802-10373-11060-11206-11186-13336' },
  { id: 'pronovo-eiv-2026', authority: 'Pronovo', title: 'Rétribution unique pour les installations photovoltaïques', url: 'https://pronovo.ch/de/foerderung/photovoltaik' },
  { id: 'pronovo-tariff-calculator', authority: 'Pronovo', title: 'Calculateur tarifaire pour le photovoltaïque', url: 'https://pronovo.ch/de/services/tarifrechner' },
] as const;

export const guide: CantonGuide = {
  id: 'schwyz', path: '/fr/solaire-schwytz', canton: 'Schwytz',
  title: 'Installation photovoltaïque à Schwytz | PvPro.ch',
  description: 'Comparez jusqu’à trois offres gratuites d’installateurs solaires vérifiés pour votre projet photovoltaïque dans le canton de Schwytz.',
  h1: 'Installation photovoltaïque dans le canton de Schwytz : autoproduction, cadastre solaire et subventions 2026',
  intro: [
    'Depuis le 1er mai 2022, les bâtiments neufs et les constructions de remplacement du canton de Schwytz sont en principe soumis à une obligation de produire leur propre électricité. Son application à votre bâtiment dépend toutefois de l’examen du cadastre solaire cantonal et des exceptions prévues.',
    'Lorsque l’obligation s’applique, il faut prévoir 10 W de puissance par m² de surface de référence énergétique, mais au maximum 30 kW de puissance obligatoire. Aucune taxe de remplacement n’est possible.',
  ],
  quickFacts: [
    { value: '10 W/m² SRE', label: 'Exigence lorsque l’obligation d’autoproduction s’applique', sourceIds: ['sz-energy-ordinance'] },
    { value: '30 kW', label: 'Plafond de la puissance exigée', sourceIds: ['sz-energy-ordinance'] },
    { value: '1’120 kWh/m²/an', label: 'Seuil d’ensoleillement selon le cadastre solaire', sourceIds: ['sz-energy-ordinance', 'sz-own-electricity'] },
    { value: '20 jours', label: 'Annonce avant le début des travaux si la procédure d’annonce s’applique', sourceIds: ['sz-solar-guide-2026'] },
  ],
  ctaAfterSection: 'pflicht-check',
  sections: [
    {
      id: 'pflicht-check', title: 'L’obligation d’autoproduction s’applique-t-elle à mon bâtiment?',
      paragraphs: ['Vérifiez d’abord la nature du projet de construction, puis son emplacement dans le cadastre solaire cantonal. La puissance requise ne peut être calculée qu’après avoir clarifié cette classification et les exceptions.'],
      sourceIds: ['sz-energy-ordinance', 'sz-own-electricity'],
      module: {
        kind: 'solar-cadastre-check', title: 'L’obligation d’autoproduction s’applique-t-elle à mon bâtiment?',
        intro: 'Suivez les cinq étapes dans l’ordre. Une exception met fin à l’examen de l’obligation pour le projet concerné.',
        items: [
          { title: '1. Classer le bâtiment neuf ou la construction de remplacement', value: 'Depuis le 1.5.2022', text: 'L’obligation concerne en principe les bâtiments neufs et les constructions de remplacement. Les extensions sont soumises à leurs propres seuils d’exception, examinés à l’étape 4.', sourceIds: ['sz-energy-ordinance', 'sz-own-electricity'] },
          { title: '2. Vérifier le cadastre solaire et le rayonnement global', value: '≥ 1’120 kWh/m²/an', text: 'Le cadastre solaire cantonal constitue la référence déterminante. Le bâtiment bénéficie de l’exception s’il se trouve dans un secteur recevant moins de 1’120 kWh de rayonnement global par m² et par an.', detail: 'Cette valeur désigne un apport annuel de rayonnement par unité de surface, et non la puissance d’une installation.', sourceIds: ['sz-energy-ordinance', 'sz-own-electricity'] },
          { title: '3. Clarifier le standard Minergie', value: 'Minergie = exception', text: 'Si le bâtiment neuf atteint le standard Minergie, il est exempté de l’exigence prévue au § 24d kEnV.', sourceIds: ['sz-energy-ordinance'] },
          { title: '4. Vérifier l’extension selon les deux règles', value: '< 50 m² ou ≤ 20% et ≤ 1’000 m²', text: 'Une extension est exemptée si la nouvelle surface de référence énergétique est inférieure à 50 m². Elle l’est également si elle ne dépasse pas 20% de la surface existante et, simultanément, 1’000 m².', detail: 'Dans la seconde variante, la limite de 20% et celle de 1’000 m² doivent être respectées conjointement.', sourceIds: ['sz-energy-ordinance'] },
          { title: '5. Calculer la puissance obligatoire', value: '10 W/m² SRE · obligation plafonnée à 30 kW', text: 'Multipliez la surface de référence énergétique par 10 W/m². La SRE est la surface chauffée du bâtiment pertinente pour le calcul énergétique; la puissance exigée est limitée à 30 kW par bâtiment.', detail: 'Les 30 kW plafonnent uniquement la puissance obligatoire. Il reste possible d’installer volontairement une installation photovoltaïque plus grande.', sourceIds: ['sz-energy-ordinance'] },
        ],
      },
    },
    {
      id: 'erfuellung', title: 'Satisfaire à l’obligation : installation propre ou RCP',
      paragraphs: [
        'Si votre bâtiment est soumis à l’obligation, une solution d’autoproduction conforme doit être réalisée; à Schwytz, il n’existe pas de taxe de remplacement permettant de se substituer à la solution prescrite.',
        'Pour un ensemble immobilier, l’exigence peut aussi être satisfaite collectivement dans le cadre d’un regroupement dans le cadre de la consommation propre, ou RCP. Un RCP organise la consommation propre commune à condition de disposer d’une installation de production électrique nouvelle ou agrandie. N’importe quelle installation existante d’un voisin ne suffit donc pas automatiquement.',
      ],
      sourceIds: ['sz-energy-ordinance', 'sz-own-electricity'],
      notice: { title: 'Aucune taxe de remplacement', text: 'Dans le canton de Schwytz, l’obligation d’autoproduction ne peut pas être remplacée par le paiement d’une taxe.', status: 'important' },
    },
    {
      id: 'meldung', title: 'Annoncer l’installation solaire via eBau SZ',
      paragraphs: [
        'Si l’installation respecte les exigences d’emplacement et d’intégration, déposez l’annonce de construction via eBau SZ au moins 20 jours avant le début des travaux. La procédure d’annonce remplace une demande ordinaire de permis de construire.',
        'La commune où se trouve l’installation est le premier interlocuteur. Elle peut indiquer pendant ces 20 jours qu’une procédure d’autorisation simplifiée ou ordinaire est finalement nécessaire; sans communication de ce type, les travaux peuvent commencer à l’expiration du délai d’attente.',
        'Préparez le plan de situation, le plan des sapeurs-pompiers ou le schéma d’orientation, la vue du toit avec les distances, la coupe du toit avec la hauteur de la structure ainsi que les fiches techniques et descriptions des produits. Selon le projet, une évaluation de l’éblouissement peut s’ajouter; certaines installations en façade de plus de 11 m de hauteur nécessitent en outre un concept de protection incendie photovoltaïque.',
      ],
      sourceIds: ['sz-solar-guide-2026'],
    },
    {
      id: 'foerderung', title: 'Les subventions photovoltaïques proviennent généralement de la Confédération',
      paragraphs: [
        'Une installation photovoltaïque ordinaire sur un immeuble d’habitation ne bénéficie pas d’une contribution cantonale générale. Les subventions fédérales relèvent de Pronovo; les éventuels programmes communaux doivent être vérifiés séparément auprès de la commune concernée. Le solaire thermique peut en revanche faire partie du programme cantonal d’encouragement.',
        'La rétribution unique, RU, est calculée individuellement. Pronovo distingue la PRU pour les installations de moins de 100 kW, la GRU à partir de 100 kW et la RU-EI pour les installations sans consommation propre dans les catégories prévues. Depuis le 1er avril 2024, la contribution de base est de CHF 0; le montant dépend de la puissance, du type d’installation et des bonus applicables, et non d’un pourcentage garanti.',
        'Le dispositif épuisé de l’Office de l’agriculture pour les batteries liées à l’énergie durable n’est pas une contribution au stockage destinée à une maison individuelle ordinaire. Le canton n’accepte actuellement aucune nouvelle demande.',
      ],
      sourceIds: ['sz-energy-funding-2026', 'sz-agricultural-battery', 'pronovo-eiv-2026', 'pronovo-tariff-calculator'],
    },
    {
      id: 'ablauf', title: 'Préparer concrètement le projet',
      paragraphs: ['Commencez par le type de construction, le cadastre solaire et la SRE avant de faire dimensionner une installation. L’offre reposera ainsi sur l’obligation effectivement applicable plutôt que sur une hypothèse générale.'],
      bullets: [
        'Classer clairement le projet comme bâtiment neuf, construction de remplacement ou extension',
        'Vérifier l’emplacement et le rayonnement global dans le cadastre solaire cantonal',
        'Documenter la SRE, clarifier les exceptions et calculer la puissance obligatoire',
        'Planifier l’installation et convenir au préalable de la procédure avec la commune',
        'Déposer les documents via eBau SZ au moins 20 jours avant le début des travaux',
        'Déterminer séparément la contribution Pronovo avec le calculateur tarifaire officiel',
      ],
      sourceIds: ['sz-energy-ordinance', 'sz-own-electricity', 'sz-solar-guide-2026', 'pronovo-eiv-2026', 'pronovo-tariff-calculator'],
    },
    {
      id: 'kosten', title: 'Rendre les coûts et la planification comparables',
      paragraphs: [
        'Comparez des offres fondées sur la même puissance obligatoire, la même taille d’installation prévue et un périmètre de prestations clairement défini. La géométrie du toit, la sous-construction, l’échafaudage, les travaux électriques, le raccordement au réseau, la documentation et les options de stockage sont notamment déterminants.',
        'Faites apparaître séparément l’estimation Pronovo et ne tenez compte des contributions communales qu’après confirmation. Avec PvPro.ch, les propriétaires peuvent comparer gratuitement et sans engagement jusqu’à trois offres solaires adaptées sur une base de projet identique.',
      ],
      sourceIds: ['sz-energy-ordinance', 'pronovo-eiv-2026', 'pronovo-tariff-calculator'],
    },
  ],
  faqs: [
    { question: 'Chaque bâtiment neuf à Schwytz doit-il avoir une installation photovoltaïque?', answer: 'Non. L’emplacement dans le cadastre solaire, le rayonnement global et les exceptions prévues au § 24d kEnV sont notamment déterminants.', sourceIds: ['sz-energy-ordinance', 'sz-own-electricity'] },
    { question: 'Quelle doit être la taille de l’installation?', answer: 'Au moins 10 W par m² de SRE, la puissance exigée étant plafonnée à 30 kW.', sourceIds: ['sz-energy-ordinance'] },
    { question: 'Puis-je payer une taxe de remplacement à la place?', answer: 'Non.', sourceIds: ['sz-own-electricity'] },
    { question: 'Combien de temps à l’avance dois-je annoncer une installation solaire?', answer: 'En règle générale, au moins 20 jours avant le début des travaux si la procédure d’annonce est applicable.', sourceIds: ['sz-solar-guide-2026'] },
    { question: 'Le canton de Schwytz subventionne-t-il le photovoltaïque?', answer: 'Les installations photovoltaïques ordinaires ne sont pas directement subventionnées par le canton; elles bénéficient des subventions fédérales via Pronovo.', sourceIds: ['sz-energy-funding-2026', 'pronovo-eiv-2026'] },
  ],
  sources: [...sources],
};