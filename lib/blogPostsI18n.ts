/**
 * Translated blog post metadata (title, excerpt, tag) for FR / EN / IT.
 * The slug stays DE (detail pages are DE-only for now).
 * Author and date are locale-formatted but kept consistent.
 */

export interface BlogPostLocale {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  image: string;
  author: string;
  date: string;
  readMin: number;
}

const fr: BlogPostLocale[] = [
  {
    slug: 'balkonkraftwerk-schweiz',
    title: 'Mini-centrale solaire en Suisse: autorisée, coûts et vaut-elle vraiment la peine?',
    excerpt: 'Les mini-centrales solaires de balcon sont-elles autorisées en Suisse? Coûts, règles et comparaison honnête avec une installation solaire complète.',
    tag: 'Guide',
    image: '/images/balkonkraftwerk-schweiz.png',
    author: 'PVPro Rédaction',
    date: '17 mars 2026',
    readMin: 7,
  },
  {
    slug: 'solaranlage-winter-schweiz',
    title: 'Panneaux solaires en hiver: quelle efficacité sous la neige et le froid?',
    excerpt: "Les installations solaires modernes produisent de l'électricité même en hiver. La réponse sur leur efficacité en Suisse vous surprendra.",
    tag: 'Guide',
    image: '/images/blog-1.png',
    author: 'PVPro Rédaction',
    date: '12 mars 2026',
    readMin: 5,
  },
  {
    slug: 'foerderungen-photovoltaik-2026',
    title: 'Subventions solaires en Suisse 2026: tout ce que vous devez savoir',
    excerpt: "La Suisse offre des subventions attractives pour les installations solaires. De la rétribution unique aux programmes cantonaux — toutes les aides actuelles en un coup d'œil.",
    tag: 'Subventions',
    image: '/images/blog-2.png',
    author: 'PVPro Rédaction',
    date: '5 mars 2026',
    readMin: 7,
  },
  {
    slug: 'batteriespeicher-solaranlage-lohnt-sich',
    title: 'Batterie de stockage solaire: vaut-il la peine d\'investir?',
    excerpt: "Une batterie augmente considérablement l'autoconsommation de votre installation. Analyse des coûts et du retour sur investissement pour les ménages suisses.",
    tag: 'Stockage',
    image: '/images/blog-3.png',
    author: 'PVPro Rédaction',
    date: '27 février 2026',
    readMin: 6,
  },
  {
    slug: 'richtigen-solarinstallateur-schweiz-waehlen',
    title: 'Choisir le bon installateur solaire en Suisse: 7 critères essentiels',
    excerpt: 'Le choix de l\'installateur est décisif pour la qualité de votre installation. Ces 7 critères vous aident à trouver le meilleur prestataire dans votre région.',
    tag: 'Guide',
    image: '/images/blog-4.png',
    author: 'PVPro Rédaction',
    date: '18 février 2026',
    readMin: 4,
  },
  {
    slug: 'eigenverbrauch-optimieren-solar',
    title: 'Maximiser l\'autoconsommation: comment utiliser au mieux votre énergie solaire',
    excerpt: "Avec les bonnes stratégies, vous pouvez consommer jusqu'à 80% de votre énergie solaire vous-même. De la planification à la pompe à chaleur — nos conseils pratiques.",
    tag: 'Conseils',
    image: '/images/blog-5.png',
    author: 'PVPro Rédaction',
    date: '10 février 2026',
    readMin: 5,
  },
  {
    slug: 'roi-photovoltaik-schweiz',
    title: 'ROI d\'une installation solaire en Suisse: quand l\'investissement est-il rentabilisé?',
    excerpt: "Combien de temps faut-il pour qu'une installation solaire soit rentable en Suisse? Analyse des facteurs qui influencent le délai d'amortissement.",
    tag: 'Finances',
    image: '/images/blog-6.png',
    author: 'PVPro Rédaction',
    date: '2 février 2026',
    readMin: 8,
  },
];

const en: BlogPostLocale[] = [
  {
    slug: 'balkonkraftwerk-schweiz',
    title: 'Balcony solar station in Switzerland: legal, costs and is it worth it?',
    excerpt: 'Are balcony power stations allowed in Switzerland? Costs, rules and an honest comparison with a full solar system.',
    tag: 'Guide',
    image: '/images/balkonkraftwerk-schweiz.png',
    author: 'PVPro Editorial',
    date: 'March 17, 2026',
    readMin: 7,
  },
  {
    slug: 'solaranlage-winter-schweiz',
    title: 'Solar panels in winter: how efficient are they in snow and cold?',
    excerpt: 'Many homeowners wonder if solar panels pay off in Swiss winters. The answer is surprising: modern PV systems produce power reliably even in the cold.',
    tag: 'Guide',
    image: '/images/blog-1.png',
    author: 'PVPro Editorial',
    date: 'March 12, 2026',
    readMin: 5,
  },
  {
    slug: 'foerderungen-photovoltaik-2026',
    title: 'Solar subsidies in Switzerland 2026: everything you need to know',
    excerpt: 'Switzerland offers attractive subsidies for solar systems. From the one-time payment (EIV) to cantonal programs — all current incentives at a glance.',
    tag: 'Subsidies',
    image: '/images/blog-2.png',
    author: 'PVPro Editorial',
    date: 'March 5, 2026',
    readMin: 7,
  },
  {
    slug: 'batteriespeicher-solaranlage-lohnt-sich',
    title: 'Battery storage for your solar system: is the investment worth it?',
    excerpt: 'A battery storage system significantly increases self-consumption. We analyze costs and payback time for Swiss households.',
    tag: 'Storage',
    image: '/images/blog-3.png',
    author: 'PVPro Editorial',
    date: 'February 27, 2026',
    readMin: 6,
  },
  {
    slug: 'richtigen-solarinstallateur-schweiz-waehlen',
    title: 'Choosing the right solar installer in Switzerland: 7 key criteria',
    excerpt: 'The choice of installer is crucial for quality and value. These 7 criteria help you find the best provider in your region.',
    tag: 'Guide',
    image: '/images/blog-4.png',
    author: 'PVPro Editorial',
    date: 'February 18, 2026',
    readMin: 4,
  },
  {
    slug: 'eigenverbrauch-optimieren-solar',
    title: 'Maximising self-consumption: how to get the most from your solar energy',
    excerpt: 'With smart strategies you can self-consume up to 80% of your solar energy. From scheduling to heat pumps — practical tips for Swiss households.',
    tag: 'Tips',
    image: '/images/blog-5.png',
    author: 'PVPro Editorial',
    date: 'February 10, 2026',
    readMin: 5,
  },
  {
    slug: 'roi-photovoltaik-schweiz',
    title: 'ROI of a solar system in Switzerland: when does the investment pay off?',
    excerpt: 'How long does it take for a solar system in Switzerland to pay for itself? We calculate the key factors and when you can expect returns.',
    tag: 'Finance',
    image: '/images/blog-6.png',
    author: 'PVPro Editorial',
    date: 'February 2, 2026',
    readMin: 8,
  },
];

const it: BlogPostLocale[] = [
  {
    slug: 'balkonkraftwerk-schweiz',
    title: 'Mini impianto solare da balcone in Svizzera: permesso, costi e conviene?',
    excerpt: 'I mini impianti solari da balcone sono permessi in Svizzera? Costi, regole e confronto onesto con un impianto fotovoltaico completo.',
    tag: 'Guida',
    image: '/images/balkonkraftwerk-schweiz.png',
    author: 'PVPro Redazione',
    date: '17 marzo 2026',
    readMin: 7,
  },
  {
    slug: 'solaranlage-winter-schweiz',
    title: 'Pannelli solari in inverno: quanto sono efficienti con neve e freddo?',
    excerpt: 'Molti proprietari si chiedono se un impianto solare conviene in inverno. La risposta sorprende: i moderni impianti fotovoltaici producono energia anche con la neve.',
    tag: 'Guida',
    image: '/images/blog-1.png',
    author: 'PVPro Redazione',
    date: '12 marzo 2026',
    readMin: 5,
  },
  {
    slug: 'foerderungen-photovoltaik-2026',
    title: 'Incentivi fotovoltaici in Svizzera 2026: tutto quello che devi sapere',
    excerpt: 'La Svizzera offre interessanti incentivi per gli impianti solari. Dalla remunerazione unica (RU) ai programmi cantonali — tutti i sussidi attuali in un colpo d\'occhio.',
    tag: 'Incentivi',
    image: '/images/blog-2.png',
    author: 'PVPro Redazione',
    date: '5 marzo 2026',
    readMin: 7,
  },
  {
    slug: 'batteriespeicher-solaranlage-lohnt-sich',
    title: 'Accumulo batteria per il tuo impianto solare: vale la pena investire?',
    excerpt: 'Un sistema di accumulo aumenta notevolmente l\'autoconsumo. Analizziamo costi e tempi di ammortamento per le famiglie svizzere.',
    tag: 'Accumulo',
    image: '/images/blog-3.png',
    author: 'PVPro Redazione',
    date: '27 febbraio 2026',
    readMin: 6,
  },
  {
    slug: 'richtigen-solarinstallateur-schweiz-waehlen',
    title: 'Scegliere il giusto installatore solare in Svizzera: 7 criteri fondamentali',
    excerpt: 'La scelta dell\'installatore è decisiva per la qualità del tuo impianto. Questi 7 criteri ti aiutano a trovare il miglior fornitore nella tua regione.',
    tag: 'Guida',
    image: '/images/blog-4.png',
    author: 'PVPro Redazione',
    date: '18 febbraio 2026',
    readMin: 4,
  },
  {
    slug: 'eigenverbrauch-optimieren-solar',
    title: 'Massimizzare l\'autoconsumo: come sfruttare al meglio la tua energia solare',
    excerpt: 'Con le giuste strategie puoi autoconsummare fino all\'80% della tua energia solare. Dalla pianificazione alla pompa di calore — consigli pratici.',
    tag: 'Consigli',
    image: '/images/blog-5.png',
    author: 'PVPro Redazione',
    date: '10 febbraio 2026',
    readMin: 5,
  },
  {
    slug: 'roi-photovoltaik-schweiz',
    title: 'ROI di un impianto solare in Svizzera: quando si ammortizza l\'investimento?',
    excerpt: 'Quanto tempo ci vuole perché un impianto solare in Svizzera si ripaghi? Calcoliamo i fattori chiave e quando puoi aspettarti un rendimento.',
    tag: 'Finanze',
    image: '/images/blog-6.png',
    author: 'PVPro Redazione',
    date: '2 febbraio 2026',
    readMin: 8,
  },
];

export const blogPostsI18n: Record<string, BlogPostLocale[]> = { fr, en, it };
