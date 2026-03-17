export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readMin: number;
  tag: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'balkonkraftwerk-schweiz',
    title: 'Balkonkraftwerk Schweiz: erlaubt, Kosten und lohnt es sich wirklich?',
    excerpt: 'Sind Balkonkraftwerke in der Schweiz erlaubt? Kosten, Regeln und ob sich ein Balkonkraftwerk lohnt – mit ehrlichem Vergleich zur vollwertigen Solaranlage.',
    image: '/images/balkonkraftwerk-schweiz.png',
    author: 'PVPro Redaktion',
    date: '17. März 2026',
    readMin: 7,
    tag: 'Ratgeber',
  },
  {
    slug: 'solaranlage-winter-schweiz',
    title: 'Solaranlage im Winter: Wie effizient sind Panels bei Schnee und Kälte?',
    excerpt: 'Viele Hausbesitzer fragen sich, ob sich eine Solaranlage in der Schweiz auch im Winter lohnt. Die Antwort überrascht: Moderne PV-Anlagen produzieren auch bei Schnee und Kälte zuverlässig Strom.',
    image: '/images/blog-1.png',
    author: 'PVPro Redaktion',
    date: '12. März 2026',
    readMin: 5,
    tag: 'Ratgeber',
  },
  {
    slug: 'foerderungen-photovoltaik-2026',
    title: 'Photovoltaik-Förderungen in der Schweiz 2026: Alles was Sie wissen müssen',
    excerpt: 'Die Schweiz bietet attraktive Förderungen für Solaranlagen. Von der Einmalvergütung (EIV) bis zu kantonalen Programmen — hier finden Sie alle aktuellen Subventionen auf einen Blick.',
    image: '/images/blog-2.png',
    author: 'PVPro Redaktion',
    date: '5. März 2026',
    readMin: 7,
    tag: 'Förderungen',
  },
  {
    slug: 'batteriespeicher-solaranlage-lohnt-sich',
    title: 'Batteriespeicher für Ihre Solaranlage: Lohnt sich die Investition?',
    excerpt: 'Ein Batteriespeicher erhöht den Eigenverbrauch Ihrer Solaranlage erheblich. Wir analysieren Kosten, Amortisationszeit und wann sich ein Speicher für Schweizer Haushalte wirklich rentiert.',
    image: '/images/blog-3.png',
    author: 'PVPro Redaktion',
    date: '27. Februar 2026',
    readMin: 6,
    tag: 'Speicher',
  },
  {
    slug: 'richtigen-solarinstallateur-schweiz-waehlen',
    title: 'Den richtigen Solarinstallateur in der Schweiz wählen: 7 wichtige Kriterien',
    excerpt: 'Die Wahl des Installateurs ist entscheidend für Qualität und Wirtschaftlichkeit Ihrer Solaranlage. Mit diesen 7 Kriterien finden Sie den besten Anbieter in Ihrer Region.',
    image: '/images/blog-4.png',
    author: 'PVPro Redaktion',
    date: '18. Februar 2026',
    readMin: 4,
    tag: 'Ratgeber',
  },
  {
    slug: 'eigenverbrauch-optimieren-solar',
    title: 'Eigenverbrauch maximieren: So nutzen Sie Ihre Solarenergie optimal',
    excerpt: 'Mit cleveren Strategien können Sie bis zu 80% Ihrer Solarenergie selbst verbrauchen. Von der Verbrauchsplanung bis zur Wärmepumpe — diese Tipps helfen Ihnen, das Maximum herauszuholen.',
    image: '/images/blog-5.png',
    author: 'PVPro Redaktion',
    date: '10. Februar 2026',
    readMin: 5,
    tag: 'Tipps',
  },
  {
    slug: 'roi-photovoltaik-schweiz',
    title: 'ROI einer Solaranlage in der Schweiz: Wann amortisiert sich die Investition?',
    excerpt: 'Wie lange dauert es, bis sich eine Solaranlage in der Schweiz rechnet? Wir rechnen durch, welche Faktoren die Amortisationszeit beeinflussen und wann Sie mit Gewinnen rechnen können.',
    image: '/images/blog-6.png',
    author: 'PVPro Redaktion',
    date: '2. Februar 2026',
    readMin: 8,
    tag: 'Finanzen',
  },
];
