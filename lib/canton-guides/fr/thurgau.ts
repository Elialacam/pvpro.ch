import type { CantonGuide } from '../types';

const sources = [
  { id: 'tg-env', authority: 'Canton de Thurgovie', title: 'Ordonnance sur l’utilisation de l’énergie (ENV), version en vigueur', url: 'https://www.rechtsbuch.tg.ch/app/de/texts_of_law/731.11' },
  { id: 'tg-eng-revision', authority: 'Grand Conseil du canton de Thurgovie', title: 'Objet 24/GE 7/146 : modification de la loi sur l’utilisation de l’énergie, statut terminé', url: 'https://parlament.tg.ch/de/geschaefte/?search=done&length=10&title=Energienutzung&legislatur=2024-2028' },
  { id: 'tg-solar-meldung', authority: 'Canton de Thurgovie', title: 'Ordonnance sur l’aménagement et les constructions § 50b – obligation d’annoncer les installations solaires', url: 'https://www.rechtsbuch.tg.ch/app/de/texts_of_law/700.1' },
  { id: 'tg-foerderprogramm', authority: 'Canton de Thurgovie, Office de l’énergie', title: 'Dépôt électronique des demandes et portail des subventions énergétiques', url: 'https://energie.tg.ch/hauptrubrik-2/wie-gehe-ich-vor.html/10651' },
  { id: 'ch-pronovo-pv', authority: 'Pronovo SA sur mandat de la Confédération', title: 'Rétribution unique pour les installations photovoltaïques', url: 'https://pronovo.ch/de/foerderung/photovoltaik' },
  { id: 'pronovo-tariff-calculator', authority: 'Pronovo SA sur mandat de la Confédération', title: 'Calculateur tarifaire photovoltaïque', url: 'https://pronovo.ch/de/services/tarifrechner' },
] as const;

export const guide: CantonGuide = {
  id: 'thurgau', path: '/fr/solaire-thurgovie', canton: 'Thurgovie',
  title: 'Installation photovoltaïque en Thurgovie | PvPro.ch', description: 'Comparez jusqu’à trois offres gratuites d’installateurs solaires vérifiés pour votre projet photovoltaïque en Thurgovie.',
  h1: 'Installation photovoltaïque en Thurgovie : autoproduction et règles 2026 pour les constructions neuves',
  intro: [
    'Une construction neuve en Thurgovie doit en principe prévoir 30 W de puissance d’autoproduction électrique par m² de surface de référence énergétique. La surface de référence énergétique (SRE) est la surface chauffée déterminante du bâtiment.',
    'Si la puissance d’autoproduction installée est plus faible, les besoins énergétiques du bâtiment doivent être encore réduits. Les petits agrandissements peuvent être exemptés ; l’état concret du projet est décisif pour l’annonce, les subventions et la révision législative.',
  ],
  quickFacts: [
    { value: '30 W/m² SRE', label: 'Puissance d’autoproduction pour les constructions neuves', sourceIds: ['tg-env'] },
    { value: '5 ou 10 kWh/m²/an', label: 'Réduction supplémentaire avec une puissance plus faible', sourceIds: ['tg-env'] },
    { value: '<50 m²', label: 'Un seuil d’exemption pour les petits agrandissements', sourceIds: ['tg-env'] },
    { value: '20 jours', label: 'Annonce avant les travaux pour les installations visées au § 50b', sourceIds: ['tg-solar-meldung'] },
  ],
  ctaAfterSection: 'effizienzloesung',
  sections: [
    { id: 'effizienzloesung', title: '30 W d’autoproduction ou efficacité supplémentaire du bâtiment', paragraphs: [
      'Pour une construction neuve, prévoyez d’abord 30 W de puissance d’autoproduction par m² SRE. Lorsque cette valeur est atteinte, l’exigence est remplie ; avec une puissance inférieure, une exigence énergétique supplémentaire s’applique à la place d’une taxe de remplacement.',
      'La réduction supplémentaire concerne les besoins pour le chauffage, l’eau chaude, le refroidissement et la ventilation. Elle ne se compense pas avec l’électricité produite : selon la puissance installée, le bâtiment doit réduire les besoins déterminants de 5 ou 10 kWh supplémentaires par m² et par an.',
    ], sourceIds: ['tg-env'], module: { kind: 'efficiency-decision', title: '30 W ou solution d’efficacité ?', intro: 'Comparez la puissance d’autoproduction prévue par m² SRE avec les trois niveaux et justifiez, si nécessaire, l’efficacité supplémentaire dans le justificatif énergétique.', items: [
      { title: 'Pleine puissance d’autoproduction', value: '30 W/m²', text: 'Avec 30 W de puissance d’autoproduction par m² de surface de référence énergétique, l’exigence pour la construction neuve est remplie.', detail: 'Aucune réduction supplémentaire selon la solution d’efficacité n’est requise à ce niveau.', sourceIds: ['tg-env'] },
      { title: 'Puissance d’autoproduction réduite', value: '15 à <30 W/m²', text: 'Avec au moins 15 mais moins de 30 W/m², les besoins pour le chauffage, l’eau chaude, le refroidissement et la ventilation doivent être réduits de 5 kWh/m² supplémentaires par an.', detail: 'L’efficacité supplémentaire du bâtiment est déterminante, et non une comparaison mathématique avec la production électrique.', sourceIds: ['tg-env'] },
      { title: 'Puissance d’autoproduction inférieure à 15 W/m²', value: '<15 W/m²', text: 'Avec moins de 15 W/m², les besoins pour le chauffage, l’eau chaude, le refroidissement et la ventilation doivent être réduits de 10 kWh/m² supplémentaires par an.', detail: 'La solution choisie et la puissance prévue devraient figurer clairement dans le justificatif énergétique.', sourceIds: ['tg-env'] },
    ] } },
    { id: 'erweiterungen', title: 'Les petits agrandissements peuvent être exemptés', paragraphs: [
      'Pour un agrandissement, vérifiez la nouvelle SRE avant d’appliquer l’exigence des constructions neuves. L’exemption vaut si la nouvelle surface de référence énergétique est inférieure à 50 m².',
      'Une exemption est aussi possible si la nouvelle SRE représente au maximum 20% de la SRE existante et ne dépasse simultanément pas 1’000 m². Ces deux conditions doivent être remplies.',
    ], sourceIds: ['tg-env'] },
    { id: 'oeffentliche-bauten', title: 'La règle des 85% concerne les collectivités publiques', paragraphs: [
      'Pour une habitation privée, ne considérez pas la règle des 85% de rayonnement global comme une obligation générale lors de toute rénovation de toiture. Les dispositions en vigueur des § 4a à § 4d relèvent du rôle exemplaire des collectivités publiques.',
      'Pour les constructions neuves, transformations ou rénovations profondes et rénovations complètes de toiture du canton, des communes et d’autres organismes et établissements de droit public, le potentiel solaire des surfaces appropriées dès 85% de rayonnement global est pertinent. Cette exigence pour les bâtiments publics ne devient pas automatiquement une obligation générale pour les toitures privées.',
    ], sourceIds: ['tg-env'] },
    { id: 'revision', title: 'Évaluer la révision législative pour le projet concret', paragraphs: [
      'Pour la demande de permis, utilisez la version effectivement en vigueur au moment du projet. Le 2 septembre 2026, le Grand Conseil a achevé l’examen de la révision de la loi sur l’utilisation de l’énergie et publié une version finale.',
      'La seule fin des débats parlementaires ne prouve pas encore l’entrée en vigueur. Avant le dépôt du projet, vérifiez donc dans le recueil des lois cantonales quelles dispositions s’appliquent.',
    ], sourceIds: ['tg-eng-revision', 'tg-env'], notice: { title: 'Révision terminée le 2 septembre 2026', text: 'Pour un projet de construction, ce n’est pas uniquement la version finale du Grand Conseil qui est déterminante, mais le droit effectivement en vigueur.', status: 'important' } },
    { id: 'meldung', title: 'Vérifier l’obligation d’annonce 20 jours avant les travaux', paragraphs: [
      'Clarifiez avec la commune si votre projet est dispensé de permis et relève du § 50b. L’annonce remplace une procédure ordinaire de permis : les installations solaires de plus de 35 m² dispensées de permis par le droit fédéral doivent être annoncées 20 jours avant le début des travaux.',
      'L’annonce doit comprendre une description de l’installation et de son intégration. Pour les installations en zone d’activités, une communication de la surface et de la puissance suffit aux conditions prévues ; il convient de vérifier au préalable avec la commune si ces indications simplifiées suffisent pour le projet concret.',
    ], sourceIds: ['tg-solar-meldung'] },
    { id: 'foerderung', title: 'Vérifier séparément les demandes de subvention avant les travaux', paragraphs: [
      'Déposez toute demande relative aux mesures du programme cantonal avant le début des travaux de construction ou d’installation. Les mesures et conditions disponibles doivent être vérifiées directement dans le portail cantonal ; aucun montant forfaitaire cantonal pour une installation photovoltaïque ordinaire ne peut en être déduit.',
      'Le soutien fédéral ordinaire passe par la rétribution unique (RU) de Pronovo. La PRU concerne les installations de moins de 100 kW, la GRU celles dès 100 kW ; la RUE ne vaut que pour les catégories prévues sans consommation propre. Depuis le 1er avril 2024, la contribution de base est de CHF 0, tandis que puissance, type d’installation et éventuels bonus déterminent le montant individuel. Aucun pourcentage fixe n’est garanti.',
      'Il faut également vérifier avant le projet dans le portail si les batteries sont actuellement subventionnées par le canton et à quelles conditions. Les conditions publiées autrefois pour le programme 2021 ne constituent pas une preuve fiable pour 2026.',
    ], sourceIds: ['tg-foerderprogramm', 'ch-pronovo-pv', 'pronovo-tariff-calculator'] },
    { id: 'kosten', title: 'Comparer coûts et planification sur une même base', paragraphs: [
      'Comparez les offres avec la même SRE, la même puissance d’autoproduction prévue et le même niveau d’efficacité. Modules, onduleur, sous-construction, échafaudage, travaux électriques, raccordement au réseau et stockage optionnel devraient aussi être clairement indiqués.',
      'Séparez les subventions fédérales, les éventuelles mesures cantonales et le prix avant déduction des aides. Les hypothèses incluses dans l’offre et les contributions encore à confirmer restent ainsi identifiables.',
      'Avec PvPro.ch, les propriétaires peuvent comparer gratuitement et sans engagement jusqu’à trois offres solaires adaptées.',
    ], bullets: ['Surface de référence énergétique et W/m² retenus', 'Justificatif de la solution d’efficacité choisie', 'Travaux de montage, d’échafaudage et d’électricité', 'Hypothèses de subventions séparées du prix de l’installation'], sourceIds: ['tg-env', 'tg-foerderprogramm', 'ch-pronovo-pv', 'pronovo-tariff-calculator'] },
  ],
  faqs: [
    { question: 'Combien d’électricité propre une construction neuve doit-elle produire en Thurgovie ?', answer: '30 W/m² de surface de référence énergétique.', sourceIds: ['tg-env'] },
    { question: 'Puis-je installer moins de photovoltaïque ?', answer: 'Oui, si les besoins énergétiques sont davantage réduits selon la solution de remplacement.', sourceIds: ['tg-env'] },
    { question: 'La règle des 85% de rayonnement global s’applique-t-elle automatiquement à chaque toiture privée ?', answer: 'Pas comme affirmation générale selon l’actuel § 4c ; cette règle relève du rôle exemplaire des collectivités publiques.', sourceIds: ['tg-env'] },
    { question: 'Combien de temps à l’avance faut-il annoncer une installation solaire dispensée de permis ?', answer: 'Pour les installations visées au § 50b, 20 jours avant le début des travaux.', sourceIds: ['tg-solar-meldung'] },
    { question: 'La révision de la loi sur l’énergie de septembre 2026 est-elle déjà contraignante ?', answer: 'Le Grand Conseil a achevé ses débats ; pour un projet concret, la version de la loi effectivement en vigueur est déterminante.', sourceIds: ['tg-eng-revision', 'tg-env'] },
  ], sources: [...sources],
};