import type { CantonGuide } from '../types';

const sources = [
  { id: 'ur-neues-energierecht', authority: 'Canton d’Uri', title: 'Nouvelle législation sur l’énergie dès le 1er octobre 2026', url: 'https://www.ur.ch/energie/1534' },
  { id: 'ur-rechtsbuch', authority: 'Canton d’Uri', title: 'Recueil systématique uranais : législation sur l’énergie', url: 'https://www.ur.ch/_doc/449221' },
  { id: 'ur-solarmeldung', authority: 'Canton d’Uri', title: 'Annonce d’une installation solaire', url: 'https://www.ur.ch/dienstleistungen/4641' },
  { id: 'ur-foerderprogramm-2026', authority: 'Canton d’Uri', title: 'Programme d’encouragement Énergie Uri 2026', url: 'https://www.ur.ch/mmdirektionen/132233' },
  { id: 'pronovo-pv', authority: 'Pronovo SA sur mandat de la Confédération', title: 'Rétribution unique pour les installations photovoltaïques', url: 'https://pronovo.ch/de/foerderung/photovoltaik' },
] as const;

export const guide: CantonGuide = {
  id: 'uri', path: '/fr/solaire-uri', canton: 'Uri',
  title: 'Installation photovoltaïque à Uri | PvPro.ch',
  description: 'Comparez jusqu’à trois offres gratuites d’installateurs solaires vérifiés pour votre projet photovoltaïque à Uri.',
  h1: 'Installation photovoltaïque dans le canton d’Uri : nouvelles règles dès le 1er octobre 2026',
  intro: [
    'En 2026, Uri connaît un changement de droit. La disposition transitoire cantonale limitée dans le temps a pris fin le 31 décembre 2025 ; dès le 1er octobre 2026, de nouvelles prescriptions uranaises s’appliquent aux grandes constructions neuves, aux agrandissements et aux rénovations importantes de toiture.',
    'Pour un projet concret, il faut donc examiner conjointement le type de projet, la surface de bâtiment imputable et la date déterminante. Les anciens CHF 2’500 par kW manquant ne constituent pas une taxe de remplacement confirmée par le nouveau droit.',
  ],
  quickFacts: [
    { value: '01.10.2026', label: 'Entrée en vigueur du nouveau droit uranais de l’énergie', sourceIds: ['ur-neues-energierecht'] },
    { value: '40 W/m²', label: 'Puissance solaire pour les constructions neuves dès 300 m²', sourceIds: ['ur-rechtsbuch'] },
    { value: '20 W/m²', label: 'Prescription pour les agrandissements et rénovations de toiture concernés', sourceIds: ['ur-rechtsbuch'] },
    { value: 'CHF 1’000 + 250/kWp', label: 'Subvention pour le photovoltaïque hivernal éligible', sourceIds: ['ur-foerderprogramm-2026'] },
  ],
  ctaAfterSection: 'rechtswechsel',
  sections: [
    {
      id: 'rechtswechsel', title: 'Quelles règles s’appliquent à quel moment en 2026 ?',
      paragraphs: [
        'La disposition transitoire cantonale limitée à fin 2025, qui prévoyait 20 W/m² et une taxe de remplacement de CHF 2’500 par kW manquant, ne peut pas être reconduite en 2026. Jusqu’à l’entrée en vigueur du nouveau droit uranais, il faut aussi tenir compte en 2026 du cadre fédéral applicable depuis le 1er janvier 2025 aux constructions neuves de plus de 300 m².',
        'Dès le 1er octobre 2026, le nouveau droit cantonal exige, selon le projet, 40 ou 20 W/m² de surface de bâtiment imputable. Les installations existantes sont prises en compte pour autant que leur puissance ne serve pas déjà à remplir une autre obligation légale.',
      ],
      sourceIds: ['ur-neues-energierecht', 'ur-rechtsbuch'],
      module: { kind: 'uri-transition', title: 'Calendrier et décision selon le projet', intro: 'Lisez d’abord les trois étapes temporelles, puis classez votre projet de construction.',
        items: [
          { title: 'Jusqu’au 31 décembre 2025', value: 'Ancienne règle terminée', text: 'La disposition transitoire limitée dans le temps, y compris la taxe de remplacement alors prévue, a expiré.', sourceIds: ['ur-rechtsbuch'] },
          { title: 'Du 1er janvier au 30 septembre 2026', value: 'Tenir compte du droit fédéral', text: 'Pour les nouveaux bâtiments de plus de 300 m², le cadre solaire fédéral doit être vérifié ; la nouvelle règle uranaise ne s’applique pas encore.', sourceIds: ['ur-neues-energierecht'] },
          { title: 'Dès le 1er octobre 2026', value: 'Nouveau droit uranais', text: 'La législation sur l’énergie acceptée par le peuple uranais le 8 mars 2026 entre en vigueur.', sourceIds: ['ur-neues-energierecht'] },
          { title: 'Construction neuve', value: '≥300 m² : 40 W/m²', text: 'À partir de 300 m² de surface de bâtiment imputable, 40 W de puissance solaire par m² sont prévus.', sourceIds: ['ur-rechtsbuch'] },
          { title: 'Agrandissement', value: '>300 m² : 20 W/m²', text: 'Si la surface totale imputable du bâtiment dépasse 300 m² après l’agrandissement, 20 W/m² s’appliquent à toute la surface.', sourceIds: ['ur-rechtsbuch'] },
          { title: 'Rénovation importante de toiture', value: '≥300 m² : 20 W/m²', text: 'Si la toiture est rénovée depuis l’extérieur et que cela déclenche des prescriptions d’isolation thermique, les bâtiments dès 300 m² sont soumis à un total de 20 W/m².', sourceIds: ['ur-rechtsbuch'] },
        ] },
      notice: { title: 'Ne pas supposer une nouvelle taxe de remplacement', text: 'L’ancienne taxe de CHF 2’500/kW relevait de la règle arrivée à échéance fin 2025. Aucune taxe analogue n’est confirmée pour la nouvelle obligation dès le 1er octobre 2026.', status: 'important' },
    },
    { id: 'erfuellung', title: 'Limite de puissance et autre mode de conformité', paragraphs: [
      'La puissance solaire exigée est limitée par la puissance de raccordement électrique existante du bâtiment. Faites consigner dans le justificatif énergétique la puissance de raccordement, la surface de bâtiment imputable et la puissance solaire existante qui n’a pas encore été prise en compte ailleurs.',
      'L’obligation peut être remplie par une certification Minergie. Aux conditions prévues, une amélioration supplémentaire de l’enveloppe du bâtiment est aussi possible : la valeur limite des besoins de chaleur pour le chauffage QH,li doit être améliorée de 5 kWh par m² et par an par rapport à l’exigence ordinaire.',
    ], sourceIds: ['ur-rechtsbuch'] },
    { id: 'foerderung', title: 'Photovoltaïque hivernal et façade solaire intégrée', paragraphs: [
      'Le programme uranais 2026 soutient le photovoltaïque hivernal sur les bâtiments existants dès 2 kWp, avec des modules inclinés de 60 à 90 degrés. Il prévoit une contribution de base de CHF 1’000 plus CHF 250 par kWp, plafonnée à CHF 50’000 par installation. Les constructions neuves et le simple remplacement d’une installation existante sont exclus.',
      'CHF 100’000 sont disponibles pour cette mesure consacrée à l’électricité hivernale. L’ensemble du programme énergétique comprend environ CHF 2,1 millions pour diverses mesures, et non pour le seul photovoltaïque. Une fois la demande complète déposée, les travaux peuvent éventuellement commencer avant la décision définitive, aux propres risques du requérant.',
      'Pour une rénovation de l’enveloppe avec façade photovoltaïque intégrée inclinée de 60 à 90 degrés, CHF 400/m² de surface rénovée sont prévus. La contribution pour l’électricité hivernale et celle pour la façade ne sont pas cumulables. La demande complète doit être déposée avant le début de l’installation ; dès CHF 10’000 de contribution, le programme bâtiments exige un CECB Plus.',
      'Pour une intervention sur l’enveloppe du bâtiment, la subvention doit atteindre au moins CHF 3’000. CECB Plus désigne le Certificat énergétique cantonal des bâtiments assorti d’un rapport de conseil.',
      'Le soutien aux bornes de recharge bidirectionnelles n’est pas un bonus général pour les batteries domestiques stationnaires. Une installation photovoltaïque ordinaire peut faire l’objet d’un examen séparé pour les subventions fédérales de Pronovo.',
    ], sourceIds: ['ur-foerderprogramm-2026', 'pronovo-pv'] },
    { id: 'verfahren', title: 'Clarifier l’installation solaire auprès de la commune avant les travaux', paragraphs: [
      'Déposez le formulaire cantonal « Annonce d’une installation solaire » auprès de l’autorité communale compétente en matière de construction. Le type et l’emplacement de l’installation permettent de déterminer si l’annonce suffit ou si une demande de permis de construire est nécessaire.',
      'Aucun délai cantonal uniforme de 20 ou 30 jours n’est confirmé de manière fiable pour ce formulaire uranais. Convenez donc directement avec la commune des dates de dépôt et de début des travaux, sans vous fonder sur un délai repris d’un autre canton.',
    ], sourceIds: ['ur-solarmeldung'] },
  ],
  faqs: [
    { question: 'La taxe de remplacement de CHF 2’500 par kW manquant s’applique-t-elle encore à Uri en 2026 ?', answer: 'Non. Cette taxe relevait de la règle temporaire qui a pris fin le 31 décembre 2025.', sourceIds: ['ur-rechtsbuch'] },
    { question: 'Quelle prescription s’applique dès le 1er octobre 2026 à une grande construction neuve ?', answer: 'À partir de 300 m² de surface de bâtiment imputable, 40 W/m² sont prévus.', sourceIds: ['ur-rechtsbuch'] },
    { question: 'Une installation photovoltaïque existante peut-elle être prise en compte ?', answer: 'Oui, pour autant que sa puissance ne remplisse pas déjà une autre obligation légale.', sourceIds: ['ur-rechtsbuch'] },
    { question: 'Comment le photovoltaïque hivernal est-il subventionné en 2026 ?', answer: 'Sur les bâtiments existants, dès 2 kWp et avec une inclinaison de 60 à 90 degrés : CHF 1’000 plus CHF 250/kWp, au maximum CHF 50’000.', sourceIds: ['ur-foerderprogramm-2026'] },
    { question: 'L’annonce solaire uranaise est-elle soumise à un délai fixe de 20 ou 30 jours ?', answer: 'Un tel délai cantonal uniforme n’est pas confirmé ; la date doit être clarifiée avec l’autorité communale compétente.', sourceIds: ['ur-solarmeldung'] },
  ],
  sources: [...sources],
};