import type { CantonGuide } from '../types';

const sources = [
  { id: 'zh-bbv', authority: 'Kanton Zürich', title: 'Ordonnance spéciale sur les constructions I : production propre d’électricité', url: 'https://www.zhlex.zh.ch/Erlass.html?Open&Ordnr=700.21' },
  { id: 'zh-vollzug', authority: 'Kanton Zürich', title: 'Dossier d’exécution Énergie : production propre d’électricité dans les nouvelles constructions', url: 'https://www.zh.ch/content/dam/zhweb/bilder-dokumente/themen/planen-bauen/bauvorschriften/bauvorschriften-im-energiebereich/energetische-bauvorschriften/vollzugsordner/vollzugsordner_energie_kanton-zh_Ausgabe_1_2023.pdf' },
  { id: 'zh-vorlage-6062', authority: 'Kanton Zürich', title: 'Projet 6062 : utilisation des toitures adaptées à l’énergie solaire', url: 'https://www.kantonsrat.zh.ch/geschaefte/geschaeft/?id=ec16ee9593a744ab950f053a301d6f76' },
  { id: 'zh-meldeverfahren', authority: 'Kanton Zürich', title: 'Installations solaires : procédures d’annonce et d’autorisation', url: 'https://www.zh.ch/de/planen-bauen/baubewilligung/baueingabe-verfahren/meldeverfahren-solaranlagen-waermepumpen-eladestationen.html' },
  { id: 'zh-foerderprogramm', authority: 'Kanton Zürich', title: 'Programme de subventions Énergie 2026', url: 'https://www.zh.ch/content/dam/zhweb/bilder-dokumente/themen/umwelt-tiere/energie/energieberatung-und-energiefoerderung/ktzh_foerderprogramm_2026.pdf' },
  { id: 'zh-landwirtschaft-batterie', authority: 'Kanton Zürich', title: 'Aide à l’investissement 2026 pour les batteries de stockage agricoles', url: 'https://www.zh.ch/de/planen-bauen/bauvorschriften/bauen-an-besonderer-lage/bauen-ausserhalb-von-bauzonen/inhalt/landwirtschaftliche-bauten/investitionshilfen.html' },
  { id: 'zh-steuern', authority: 'Kantonales Steueramt Zürich', title: 'Traitement fiscal du photovoltaïque, des batteries de stockage et des bornes de recharge', url: 'https://www.zh.ch/de/steuern-finanzen/steuern/treuhaender/steuerbuch/steuerbuch-definition/zstb-30-8.html' },
  { id: 'stadt-pv', authority: 'Stadt Zürich', title: 'Subventions pour les installations photovoltaïques dès le 1er août 2026', url: 'https://www.stadt-zuerich.ch/de/aktuell/medienmitteilungen/2026/06/stadt-zuerich-erhoeht-beitraege-fuer-pv-anlagen-und-foerdert-batteriespeicher.html' },
  { id: 'stadt-batterie', authority: 'Stadt Zürich', title: 'La Ville de Zurich augmente les contributions au photovoltaïque et subventionne les batteries de stockage', url: 'https://www.stadt-zuerich.ch/de/aktuell/medienmitteilungen/2026/06/stadt-zuerich-erhoeht-beitraege-fuer-pv-anlagen-und-foerdert-batteriespeicher.html' },
] as const;

export const guide: CantonGuide = {
  id: 'zurich',
  path: '/fr/solaire-zurich',
  canton: 'Zurich',
  title: 'Installation photovoltaïque à Zurich | PvPro.ch',
  description: 'Comparez jusqu’à trois offres gratuites d’installateurs solaires vérifiés pour votre installation photovoltaïque dans le canton de Zurich.',
  h1: 'Installation photovoltaïque dans le canton de Zurich : obligation, annonce et subventions 2026',
  intro: [
    'Dans le canton de Zurich, l’exigence de production propre d’électricité de 10 W/m² de surface de référence énergétique reste applicable aux nouvelles constructions en 2026. Le passage discuté à 30 W/m² et l’utilisation accrue des grandes toitures sont prévus, mais ne constituent pas encore le droit en vigueur.',
    'Les subventions de la Ville de Zurich ne doivent pas être étendues à l’ensemble du canton. Depuis le 1er août 2026, la Ville soutient à la fois le photovoltaïque et certaines batteries de stockage ; le Canton ne connaît pas de contribution générale comparable pour les immeubles d’habitation.',
  ],
  quickFacts: [
    { value: '10 W/m² SRE', label: 'exigence cantonale actuellement applicable aux nouvelles constructions', sourceIds: ['zh-bbv', 'zh-vollzug'] },
    { value: '30 jours', label: 'délai d’attente de la procédure cantonale d’annonce', sourceIds: ['zh-meldeverfahren'] },
    { value: '01.08.2026', label: 'entrée en vigueur des contributions rehaussées de la Ville de Zurich', sourceIds: ['stadt-pv', 'stadt-batterie'] },
    { value: 'CHF 1’000 + 100/kWh', label: 'contribution pour batterie réservée à la Ville de Zurich', sourceIds: ['stadt-batterie'] },
  ],
  ctaAfterSection: 'zustaendigkeit',
  sections: [
    {
      id: 'zustaendigkeit',
      title: 'Canton de Zurich ou Ville de Zurich ?',
      paragraphs: [
        'Les prescriptions cantonales en matière de construction et d’énergie s’appliquent dans tout le canton. En revanche, les contributions rehaussées pour le photovoltaïque et les batteries sont une offre communale, réservée aux installations situées sur le territoire de la Ville de Zurich.',
        'Pour un bien situé hors de la ville, il faut examiner séparément les aides de Pronovo et les éventuelles offres de la commune concernée. Un programme cantonal destiné au stockage sur plusieurs mois ou au stockage saisonnier exclut expressément les batteries et ne constitue pas une prime pour batterie domestique.',
        'L’aide à l’investissement 2026 pour les batteries de stockage agricoles est un cas particulier distinct : l’enveloppe cantonale de CHF 200’000 est déjà épuisée. Ce programme agricole n’est pas une subvention pour les batteries domestiques ordinaires.',
      ],
      sourceIds: ['zh-bbv', 'zh-foerderprogramm', 'zh-landwirtschaft-batterie', 'stadt-pv', 'stadt-batterie'],
      module: {
        kind: 'zurich-jurisdictions',
        title: 'Deux échelons, des prestations différentes',
        intro: 'L’emplacement détermine si les contributions communales entrent en ligne de compte.',
        columns: ['Canton de Zurich', 'Ville de Zurich'],
        items: [
          { title: 'Canton de Zurich', value: 'Droit applicable dans tout le canton', text: '10 W/m² pour les nouvelles constructions, procédure d’annonce avec délai de 30 jours et aucune subvention cantonale générale pour le photovoltaïque ordinaire des immeubles d’habitation ou les batteries domestiques.', detail: 'Une déduction du revenu imposable peut entrer en ligne de compte pour le photovoltaïque, une borne murale fixe et la batterie correspondante si l’installation intervient au moins un an après la construction du bâtiment et après au moins une année d’occupation.', sourceIds: ['zh-bbv', 'zh-meldeverfahren', 'zh-foerderprogramm', 'zh-steuern'] },
          { title: 'Ville de Zurich', value: 'Contributions communales dès le 01.08.2026', text: 'Contributions totales au photovoltaïque, y compris Pronovo, et contribution propre pour les batteries stationnaires répondant aux critères.', detail: 'Uniquement pour les projets sur le territoire de la ville ; déposer la demande concernant la batterie avant le début des travaux.', sourceIds: ['stadt-pv', 'stadt-batterie'] },
        ],
      },
    },
    {
      id: 'eigenstrom',
      title: '10 W/m² relèvent du droit en vigueur ; 30 W/m² sont prévus',
      paragraphs: [
        'Les nouvelles constructions doivent assurer au moins 10 W de puissance de production propre d’électricité par m² de surface de référence énergétique. Pour le photovoltaïque, la puissance maximale exigée est plafonnée sur la base d’une occupation de 70 % de la surface de bâtiment prise en compte ; il ne s’agit pas d’une obligation de couvrir 70 % du toit de modules.',
        'Les installations situées sur la même parcelle ou au sein d’un RCP peuvent être prises en compte si elles ont huit ans au plus. Les agrandissements sont exemptés lorsque la nouvelle SRE est inférieure à 50 m², ou qu’elle ne dépasse pas 20 % de la SRE existante tout en restant au maximum à 1’000 m². Il est aussi possible de renoncer à la production propre d’électricité si la valeur limite selon le §47a est améliorée de 20 %. Aucune taxe de remplacement n’est prévue à cet effet.',
      ],
      sourceIds: ['zh-bbv', 'zh-vollzug'],
      module: {
        kind: 'zurich-law-status',
        title: 'En vigueur aujourd’hui / prévu',
        intro: 'Seul le droit effectivement en vigueur compte pour la justification énergétique.',
        columns: ['En vigueur aujourd’hui', 'Prévu'],
        items: [
          { title: 'Exigence actuelle', value: '10 W/m² SRE', text: 'La règle actuelle sur la production propre d’électricité s’applique aux nouvelles constructions avec les plafonds, prises en compte et exceptions prévus.', sourceIds: ['zh-bbv', 'zh-vollzug'] },
          { title: 'Projet politique', value: '30 W/m² prévus', text: 'Le Conseil d’État entend relever l’exigence ; le projet 6062 vise en outre une utilisation accrue des toitures adaptées dès 300 m² lors d’une nouvelle construction ou d’une rénovation complète du toit, notamment sous réserve de rentabilité.', detail: 'Au 21 septembre 2026, ne pas encore considérer les 30 W/m² comme une règle en vigueur.', sourceIds: ['zh-vorlage-6062'] },
        ],
      },
    },
    {
      id: 'stadtfoerderung',
      title: 'Contributions de la Ville de Zurich dès le 1er août 2026',
      paragraphs: [
        'Les contributions totales maximales de la Ville pour le photovoltaïque, Pronovo comprise, se composent d’une contribution de base de CHF 5’000, de CHF 450/kWp jusqu’à 30 kWp, de CHF 350 par kWp supplémentaire entre 30 et 100 kWp et de CHF 310 par kWp supplémentaire au-delà de 100 kWp. Un montant maximal de CHF 3’000 s’ajoute pour une installation photovoltaïque soumise à autorisation sur un bâtiment existant. La contribution Pronovo ne doit pas être ajoutée une nouvelle fois à ces plafonds globaux.',
        'Pour une batterie de stockage répondant aux critères, la Ville verse une contribution de base de CHF 1’000, plus CHF 100/kWh ; CHF 100/kWh supplémentaires sont accordés aux batteries de seconde vie. Sont éligibles les capacités d’au moins 3 kWh, de 100 kWh au maximum et ne dépassant pas 1,5 kWh par kW de puissance renouvelable installée.',
        'La batterie doit être stationnaire, se trouver derrière le même raccordement domestique que l’installation photovoltaïque et être intégrée à un système de gestion de l’énergie approprié. La demande doit être déposée avant le début des travaux.',
      ],
      sourceIds: ['stadt-pv', 'stadt-batterie'],
      notice: {
        title: 'Ville de Zurich uniquement',
        text: 'Ces subventions pour le photovoltaïque et les batteries sont communales. Elles ne s’appliquent pas automatiquement à Winterthour ni dans une autre commune zurichoise.',
        status: 'important',
      },
    },
    {
      id: 'meldung',
      title: 'Procédure d’annonce avec un délai d’attente de 30 jours',
      paragraphs: [
        'De nombreuses installations en toiture suffisamment adaptées peuvent faire l’objet d’une annonce. Dans les zones à bâtir et sous réserve des conditions prévues, cela vaut également pour certaines installations en façade de maisons individuelles et de bâtiments jusqu’à 11 m, ainsi que pour certaines installations isolées jusqu’à 20 m².',
        'Les travaux peuvent commencer si l’autorité locale chargée des constructions n’en décide pas autrement dans les 30 jours suivant l’accusé de réception. Dans les zones centrales, pour les objets figurant dans un inventaire des sites ou des monuments historiques et en présence d’une mesure de protection patrimoniale, un permis de construire est généralement nécessaire. Vérifiez également si votre commune traite déjà le dépôt par eBaugesucheZH.',
      ],
      sourceIds: ['zh-meldeverfahren'],
    },
  ],
  faqs: [
    { question: 'Les 30 W/m² s’appliquent-ils déjà dans le canton de Zurich en 2026 ?', answer: 'Non. Le droit en vigueur fixe 10 W/m² ; 30 W/m² correspondent à une hausse prévue.', sourceIds: ['zh-bbv', 'zh-vorlage-6062'] },
    { question: 'Faut-il couvrir de photovoltaïque 70 % de chaque toit zurichois ?', answer: 'Non. Les 70 % plafonnent la puissance maximale exigée en fonction de la surface de bâtiment prise en compte et ne constituent pas une obligation générale de couverture du toit.', sourceIds: ['zh-vollzug'] },
    { question: 'Existe-t-il une taxe de remplacement au lieu de produire sa propre électricité ?', answer: 'Non, Zurich ne prévoit pas de taxe de remplacement pour cette obligation de production propre.', sourceIds: ['zh-vollzug'] },
    { question: 'Les contributions rehaussées au photovoltaïque s’appliquent-elles dans toutes les communes zurichoises ?', answer: 'Non. Les contributions décrites ne valent que dans la Ville de Zurich.', sourceIds: ['stadt-pv'] },
    { question: 'Quelles batteries la Ville de Zurich subventionne-t-elle ?', answer: 'Une batterie stationnaire d’au moins 3 kWh placée derrière le même raccordement domestique que le photovoltaïque, dotée d’une gestion de l’énergie appropriée et respectant les autres limites de capacité.', sourceIds: ['stadt-batterie'] },
    { question: 'Quand une installation solaire annoncée peut-elle être construite ?', answer: 'Lorsque l’autorité locale chargée des constructions n’en décide pas autrement dans les 30 jours suivant l’accusé de réception.', sourceIds: ['zh-meldeverfahren'] },
  ],
  sources: [...sources],
};