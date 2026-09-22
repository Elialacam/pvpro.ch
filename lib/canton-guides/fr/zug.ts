import type { CantonGuide } from '../types';

const sources = [
  { id: 'zg-energieverordnung', authority: 'Canton de Zoug', title: 'Ordonnance relative à la loi sur l’énergie : autoproduction électrique', url: 'https://bgs.zg.ch/app/de/texts_of_law/740.11' },
  { id: 'zg-vollzug', authority: 'Canton de Zoug', title: 'Autoproduction électrique pour les constructions neuves et extensions', url: 'https://zg.ch/de/planen-bauen/bauvorschriften/gebaeude-und-energie/energievorschriften-vollzug' },
  { id: 'zg-pbg', authority: 'Canton de Zoug', title: 'Loi sur l’aménagement et les constructions, § 44a : annonce de travaux pour installations solaires', url: 'https://bgs.zg.ch/app/de/texts_of_law/721.11' },
  { id: 'zg-foerderprogramm-2026', authority: 'Canton de Zoug', title: 'Programme de subventions Énergie 2026', url: 'https://cdn.zg.ch/dam/jcr:de631126-335b-431a-9153-7013803a29bc/20260428_F%C3%B6rderprogramm%20Energie%202026_KtZG_F%C3%B6rderbedingungen_1.2.pdf' },
  { id: 'pronovo-pv', authority: 'Pronovo SA sur mandat de la Confédération', title: 'Rétribution unique pour les installations photovoltaïques', url: 'https://pronovo.ch/de/foerderung/photovoltaik' },
] as const;

export const guide: CantonGuide = {
  id: 'zug', path: '/fr/solaire-zoug', canton: 'Zoug',
  title: 'Installation photovoltaïque dans le canton de Zoug | PvPro.ch',
  description: 'Comparez des offres photovoltaïques à Zoug et clarifiez l’obligation d’autoproduction, la taxe de remplacement et les subventions 2026.',
  h1: 'Installation solaire dans le canton de Zoug : obligation d’autoproduction, taxe de remplacement et subventions 2026',
  intro: [
    'Pour les constructions neuves ainsi que les extensions et surélévations non mineures, Zoug exige 10 W de puissance électrique autoproduite par m² de surface de référence énergétique. Formule : surface de référence énergétique × 10 W/m² = puissance requise ; cette obligation n’exige jamais 30 kW ou plus.',
    'Quiconque ne peut ou ne veut pas réaliser l’installation requise verse à la commune CHF 1’000 par kW manquant. Aux conditions légales, l’obligation peut aussi être remplie collectivement au moyen d’un regroupement dans le cadre de la consommation propre.',
  ],
  quickFacts: [
    { value: '10 W/m² SRE', label: 'exigence d’autoproduction électrique pour les projets de construction concernés', sourceIds: ['zg-energieverordnung'] },
    { value: '<30 kW', label: 'l’obligation n’exige jamais 30 kW ou plus', sourceIds: ['zg-energieverordnung'] },
    { value: 'CHF 1’000/kW', label: 'taxe de remplacement pour la puissance obligatoire non installée', sourceIds: ['zg-energieverordnung'] },
    { value: '20 jours', label: 'délai sans opposition après réception de l’annonce de travaux', sourceIds: ['zg-pbg'] },
  ],
  ctaAfterSection: 'eigenstrom',
  sections: [
    {
      id: 'eigenstrom', title: 'Installer du photovoltaïque ou payer la taxe de remplacement',
      paragraphs: [
        'Les dispositions sur l’autoproduction électrique et la taxe de remplacement sont en vigueur au niveau de l’ordonnance depuis le 1er janvier 2023.',
        'Calculez d’abord la puissance obligatoire à partir de la surface de référence énergétique du projet. Les extensions et surélévations dépassant le seuil de minime importance sont traitées comme des constructions neuves pour cette disposition.',
        'La taxe de remplacement revient à la commune et doit servir à la production locale d’électricité renouvelable. Ce n’est pas une subvention pour sa propre installation ; elle ne remplace que la part non réalisée de l’obligation.',
      ],
      sourceIds: ['zg-energieverordnung', 'zg-vollzug'],
      module: {
        kind: 'zug-power-choice', title: 'Deux voies après le calcul de la puissance', intro: 'SRE × 10 W/m² donne la puissance d’autoproduction requise, toujours inférieure à 30 kW.',
        items: [
          { title: 'Réaliser une installation d’autoproduction', value: '10 W/m² SRE', text: 'Fournir la puissance sur le bâtiment ou collectivement dans un regroupement de consommation propre admis.', detail: 'Coordonner avec la commune les justificatifs du projet et du regroupement.', sourceIds: ['zg-energieverordnung', 'zg-vollzug'] },
          { title: 'Compenser la puissance manquante', value: 'CHF 1’000/kW', text: 'Pour chaque kW requis mais non installé, la taxe de remplacement est due à la commune.', detail: 'Les fonds sont affectés à la production locale d’électricité renouvelable.', sourceIds: ['zg-energieverordnung'] },
        ],
      },
    },
    {
      id: 'bonus', title: 'Isoler le toit ou la façade et ajouter du photovoltaïque',
      paragraphs: [
        'Le programme de subventions zougois 2026 verse CHF 60/m² pour l’isolation éligible du toit ou de la façade. Si une nouvelle installation photovoltaïque couvrant toute la surface selon le programme est réalisée simultanément sur le même élément de construction, CHF 60/m² de surface isolée supplémentaires sont accordés.',
        'Ce supplément n’est pas une contribution générale de CHF 60/m² pour toute nouvelle installation photovoltaïque. Le photovoltaïque ordinaire indépendant est examiné par Pronovo ; le programme ne confirme aucune subvention cantonale générale pour les batteries domestiques ordinaires.',
      ],
      sourceIds: ['zg-foerderprogramm-2026', 'pronovo-pv'],
      module: {
        kind: 'zug-renovation-bonus', title: 'Quand le photovoltaïque est-il considéré comme couvrant toute la surface ?', intro: 'Le seuil se rapporte à l’élément de construction isolé simultanément.',
        items: [
          { title: 'Façade', value: 'au moins 20%', text: 'Au moins 20% de la surface de façade isolée doit être couverte de nouveaux modules photovoltaïques.', sourceIds: ['zg-foerderprogramm-2026'] },
          { title: 'Toit', value: 'au moins 50%', text: 'Au moins 50% de la surface de toit isolée doit être couverte de nouveaux modules photovoltaïques.', sourceIds: ['zg-foerderprogramm-2026'] },
        ],
      },
    },
    {
      id: 'verfahren', title: 'Annonce de travaux : attendre 20 jours d’éventuelles oppositions',
      paragraphs: [
        'Les installations solaires qui ne portent pas une atteinte considérable aux intérêts des voisins et aux intérêts publics doivent être annoncées à l’autorité communale compétente. Si l’autorité ne s’y oppose pas dans les 20 jours suivant la réception, le projet peut être réalisé.',
        'Hors de la zone à bâtir, la commune transmet le dossier à la Direction des travaux publics. Un permis de construire est toujours requis sur les monuments culturels et naturels d’importance cantonale ou nationale.',
      ],
      sourceIds: ['zg-pbg'],
    },
    {
      id: 'planung', title: 'Distinguer clairement obligation, subventions et offre',
      paragraphs: [
        'Faites indiquer séparément la surface de référence énergétique, la puissance obligatoire, la puissance effectivement installée et l’éventuelle taxe de remplacement. Pour un regroupement de consommation propre, la manière dont l’obligation est remplie en commun doit aussi être compréhensible.',
        'Lors d’une rénovation, la surface de l’élément isolé, le taux de couverture photovoltaïque, la contribution à l’enveloppe du bâtiment et la subvention photovoltaïque doivent figurer dans des postes distincts. Le bonus combiné ne sera ainsi pas facturé à tort comme une contribution photovoltaïque forfaitaire.',
      ],
      sourceIds: ['zg-energieverordnung', 'zg-foerderprogramm-2026', 'pronovo-pv'],
    },
  ],
  faqs: [
    { question: 'Comment l’obligation d’autoproduction zougoise est-elle calculée ?', answer: 'Surface de référence énergétique × 10 W/m² ; la prescription n’exige jamais 30 kW ou plus.', sourceIds: ['zg-energieverordnung'] },
    { question: 'Quel est le montant de la taxe de remplacement ?', answer: 'CHF 1’000 par kW requis mais non installé.', sourceIds: ['zg-energieverordnung'] },
    { question: 'L’obligation peut-elle être remplie en commun par un regroupement de consommation propre ?', answer: 'Oui, un accomplissement collectif par un regroupement est possible aux conditions légales.', sourceIds: ['zg-vollzug'] },
    { question: 'Quand peut-on construire après une annonce de travaux ?', answer: 'Lorsque la commune ne soulève aucune opposition dans les 20 jours suivant la réception.', sourceIds: ['zg-pbg'] },
    { question: 'Toute installation photovoltaïque zougoise reçoit-elle le supplément de CHF 60/m² ?', answer: 'Non. Il ne vaut qu’avec une isolation subventionnée et le taux défini de couverture photovoltaïque sur toute la surface.', sourceIds: ['zg-foerderprogramm-2026'] },
  ],
  sources: [...sources],
};