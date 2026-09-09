import { ECONOMIC_FACTS, STORAGE_PRICE_NOTES, formatRangeForLocale, formatSwissNumber, type FactsLocale, type NumericRange } from './facts';

const factRange = (range: NumericRange, locale: FactsLocale): string =>
  formatRangeForLocale(range, '', locale).trim();
const factNumber = (value: number): string => formatSwissNumber(value);
const removedClaimPlaceholders = new Set([
  'Die konkrete Angabe hängt vom Projekt ab.',
  'La valeur concrète dépend du projet.',
  'The specific value depends on the project.',
  'Il valore concreto dipende dal progetto.',
]);
const storagePrice = (
  capacity: keyof typeof ECONOMIC_FACTS.storageCosts.byCapacity,
  locale: FactsLocale,
): string => {
  const range = factRange(ECONOMIC_FACTS.storageCosts.byCapacity[capacity], locale);
  return locale === 'en' ? `CHF ${range}` : `${range} CHF`;
};

/**
 * Full blog article content for all 7 posts × 4 locales (DE / FR / EN / IT).
 * Used by the dynamic /blog/[slug] route in each locale.
 */

export interface ArticleSection {
  heading: string;
  content: string[];
  bullets?: string[];
  stats?: { label: string; value: string }[];
  highlight?: string;
}

export interface BlogArticle {
  slug: string;
  locale: 'de' | 'fr' | 'en' | 'it';
  title: string;
  /** Short, route-specific title used only for document and social metadata. */
  seoTitle?: string;
  metaDescription: string;
  image: string;
  date: string;
  /** ISO editorial dates. Manual articles derive this deterministically from date. */
  publishedAt?: string;
  modifiedAt?: string;
  readMin: number;
  tag: string;
  intro: string;
  sections: ArticleSection[];
  ctaHeading: string;
  ctaText: string;
  ctaButton: string;
  formUrl: string;
  relatedSlugs: string[];
  relatedPageLinks?: { label: string; href: string }[];
  faqs: { question: string; answer: string }[];
}

const articles: BlogArticle[] = [

  // ─── BALKONKRAFTWERK (DE) ─────────────────────────────────────────────────
  {
    slug: 'balkonkraftwerk-schweiz',
    locale: 'de',
    title: 'Balkonkraftwerk Schweiz: erlaubt, Kosten und lohnt es sich wirklich?',
    metaDescription: 'Sind Balkonkraftwerke in der Schweiz erlaubt? Kosten, Regeln und ob sich ein Balkonkraftwerk lohnt – mit ehrlichem Vergleich zur vollwertigen Solaranlage.',
    image: '/images/balkonkraftwerk-schweiz.webp',
    date: '17. März 2026',
    readMin: 7,
    tag: 'Ratgeber',
    intro: 'Ein Balkonkraftwerk klingt verlockend: günstig, schnell installiert und kein Aufwand. Doch wie viel Strom produziert es wirklich – und wann ist eine vollwertige Solaranlage die deutlich bessere Wahl?',
    sections: [
      {
        heading: 'Was ist ein Balkonkraftwerk?',
        content: ['Ein Balkonkraftwerk ist eine Mini-Solaranlage für den Eigengebrauch: typischerweise 1–2 Solarmodule mit 300–800 Watt, angeschlossen über eine normale Steckdose. Der produzierte Strom wird direkt im Haushalt verbraucht.', 'In der Schweiz werden Balkonkraftwerke immer beliebter – besonders bei Mietern oder Personen ohne eigenes Dach. Doch wer ein Eigenheim besitzt, sollte die Entscheidung gut abwägen.'],
        stats: [{ label: 'Module', value: '1–2' }, { label: 'Max. Leistung', value: '800 W' }, { label: 'Produktion/Jahr', value: 'Die konkrete Angabe hängt vom Projekt ab.' }, { label: 'Einsparung/Jahr', value: 'Die konkrete Angabe hängt vom Projekt ab.' }],
      },
      {
        heading: 'Sind Balkonkraftwerke in der Schweiz erlaubt?',
        content: ['Ja – grundsätzlich erlaubt, aber mit klaren Regeln. Anlage muss beim Netzbetreiber gemeldet werden. Anlagen über 800 Watt sind nicht einfach plug-and-play erlaubt und benötigen Genehmigungen.'],
        bullets: ['Anmeldung beim Netzbetreiber ist Pflicht', 'Max. 800 W für Plug-and-Play-Betrieb', 'Sicherheitsvorschriften müssen eingehalten werden', 'Nicht angemeldete Anlagen können abgeschaltet werden'],
      },
      {
        heading: 'Wie viel Strom produziert ein Balkonkraftwerk?',
        content: ['Für den Grossteil des Haushaltsstroms reicht das bei weitem nicht.', 'Die konkrete Angabe hängt vom Projekt ab.'],
        highlight: 'Die konkrete Angabe hängt vom Projekt ab.',
      },
      {
        heading: 'Wann ist eine Solaranlage die bessere Wahl?',
        content: ['Als Eigentümer eines Hauses mit geeignetem Dach ist eine vollwertige Solaranlage fast immer die rentablere Lösung.'],
        bullets: ['Eigentümer eines Hauses: Solaranlage klar besser', 'Mieter oder ohne geeignetes Dach: Balkonkraftwerk sinnvoll', 'Solaranlage steigert den Immobilienwert', 'EIV-Förderung nur für vollwertige Anlagen'],
      },
    ],
    ctaHeading: 'Als Hauseigentümer: Jetzt Offerte vergleichen',
    ctaText: 'Eine vollwertige Solaranlage produziert deutlich mehr Strom als ein Balkonkraftwerk. Vergleichen Sie kostenlos bis zu 3 Offerten.',
    ctaButton: 'Kostenlose Offerte anfordern',
    formUrl: '/anfrage',
    relatedSlugs: ['roi-photovoltaik-schweiz', 'foerderungen-photovoltaik-2026', 'batteriespeicher-solaranlage-lohnt-sich'],
    faqs: [
      { question: 'Brauche ich in der Schweiz eine Bewilligung für ein Balkonkraftwerk?', answer: 'Keine formelle Baubewilligung, aber eine Anmeldung beim Netzbetreiber ist Pflicht. Dieser muss die Anlage in sein System aufnehmen. Nicht angemeldete Anlagen können abgeschaltet werden.' },
      { question: 'Wie hoch ist die Einsparung mit einem Balkonkraftwerk?', answer: 'Die Einsparung hängt von Ausrichtung und Eigenverbrauch ab. Eine vollwertige Solaranlage kann deutlich mehr beitragen.' },
      { question: 'Kann ich als Mieter ein Balkonkraftwerk installieren?', answer: 'Grundsätzlich ja, aber Sie benötigen die Zustimmung Ihres Vermieters. Das Gerät muss sicher befestigt sein und die Anmeldung beim Netzbetreiber erfolgen.' },
      { question: 'Lohnt sich ein Balkonkraftwerk für Hauseigentümer?', answer: 'Für Hauseigentümer mit einem geeigneten Dach ist eine vollwertige Solaranlage fast immer die viel rentablere Option.' },
    ],
  },

  // ─── BALKONKRAFTWERK (FR) ─────────────────────────────────────────────────
  {
    slug: 'balkonkraftwerk-schweiz',
    locale: 'fr',
    title: 'Mini-centrale solaire de balcon en Suisse: autorisée, coûts et vaut-elle la peine?',
    metaDescription: 'Les mini-centrales solaires de balcon sont-elles autorisées en Suisse? Coûts, règles et comparaison honnête avec une installation solaire complète.',
    image: '/images/balkonkraftwerk-schweiz.webp',
    date: '17 mars 2026',
    readMin: 7,
    tag: 'Guide',
    intro: "Une mini-centrale solaire de balcon semble séduisante: peu chère, vite installée et sans tracas. Mais quelle électricité produit-elle vraiment – et quand une installation solaire complète est-elle bien plus avantageuse?",
    sections: [
      {
        heading: "Qu'est-ce qu'une mini-centrale solaire de balcon?",
        content: ["Une mini-centrale de balcon est une installation solaire miniature pour l'autoproduction: typiquement 1–2 panneaux solaires avec 300–800 W, branché sur une prise normale. Le courant produit est consommé directement dans le logement.", "En Suisse, ces appareils gagnent en popularité – surtout chez les locataires. Mais les propriétaires doivent bien peser leur décision."],
        stats: [{ label: 'Panneaux', value: '1–2' }, { label: 'Puissance max.', value: '800 W' }, { label: 'Production/an', value: 'La valeur concrète dépend du projet.' }, { label: 'Économie/an', value: 'La valeur concrète dépend du projet.' }],
      },
      {
        heading: 'Les mini-centrales de balcon sont-elles autorisées en Suisse?',
        content: ["Oui – en principe autorisées, mais avec des règles strictes. L'installation doit être annoncée au gestionnaire de réseau. Les appareils de plus de 800 W nécessitent des autorisations spéciales."],
        bullets: ["Annonce obligatoire auprès du gestionnaire de réseau", "Max. 800 W pour un fonctionnement plug-and-play", "Les normes de sécurité doivent être respectées", "Les installations non déclarées peuvent être déconnectées"],
      },
      {
        heading: 'Quelle électricité produit une mini-centrale de balcon?',
        content: ["Pour la majeure partie de la consommation du ménage, c'est insuffisant.", "La valeur concrète dépend du projet."],
        highlight: "La valeur concrète dépend du projet.",
      },
      {
        heading: "Quand l'installation solaire complète est-elle plus avantageuse?",
        content: ["Pour les propriétaires d'une maison avec un toit adapté, une installation complète est presque toujours plus rentable."],
        bullets: ["Propriétaire avec toit adapté: installation solaire clairement plus avantageuse", "Locataire ou sans toit: mini-centrale de balcon utile", "L'installation solaire valorise le bien immobilier", "La RU fédérale ne s'applique qu'aux installations complètes"],
      },
    ],
    ctaHeading: "Propriétaire? Comparez jusqu'à 3 offres gratuitement",
    ctaText: "Une installation solaire complète produit nettement plus d'électricité qu'une centrale de balcon. Comparez gratuitement jusqu'à 3 offres.",
    ctaButton: 'Demander une offre gratuite',
    formUrl: '/fr/demande',
    relatedSlugs: ['roi-photovoltaik-schweiz', 'foerderungen-photovoltaik-2026', 'batteriespeicher-solaranlage-lohnt-sich'],
    faqs: [
      { question: "Ai-je besoin d'une autorisation pour une mini-centrale de balcon en Suisse?", answer: "Pas de permis de construire formel, mais une annonce au gestionnaire de réseau est obligatoire. Les installations non déclarées peuvent être déconnectées." },
      { question: "Quelle est l'économie réelle avec une mini-centrale de balcon?", answer: "L'économie dépend de l'orientation et du taux d'autoconsommation. Une installation solaire complète peut apporter une contribution nettement plus importante." },
      { question: "Un locataire peut-il installer une mini-centrale de balcon?", answer: "Oui, en principe, mais l'accord du propriétaire est nécessaire. L'appareil doit être fixé de manière sécurisée et déclaré au gestionnaire de réseau." },
      { question: "Est-ce rentable pour un propriétaire?", answer: "Pour un propriétaire avec un toit adapté, une installation solaire complète est presque toujours bien plus rentable." },
    ],
  },

  // ─── BALKONKRAFTWERK (EN) ─────────────────────────────────────────────────
  {
    slug: 'balkonkraftwerk-schweiz',
    locale: 'en',
    title: 'Balcony power station in Switzerland: legal, costs and is it worth it?',
    metaDescription: 'Are balcony power stations allowed in Switzerland? Costs, rules and an honest comparison with a full solar system.',
    image: '/images/balkonkraftwerk-schweiz.webp',
    date: 'March 17, 2026',
    readMin: 7,
    tag: 'Guide',
    intro: 'A balcony power station sounds appealing: low cost, quick to install, and hassle-free. But how much electricity does it actually produce – and when is a full solar system the far better choice?',
    sections: [
      {
        heading: 'What is a balcony power station?',
        content: ['A balcony power station is a mini solar system for self-generation: typically 1–2 solar panels with 300–800 W output, connected via a standard socket. The electricity is consumed directly in the home.', 'In Switzerland, these devices are growing in popularity – especially among renters. But homeowners should think carefully before choosing one over a full system.'],
        stats: [{ label: 'Panels', value: '1–2' }, { label: 'Max. output', value: '800 W' }, { label: 'Production/year', value: 'The specific value depends on the project.' }, { label: 'Savings/year', value: 'The specific value depends on the project.' }],
      },
      {
        heading: 'Are balcony power stations legal in Switzerland?',
        content: ['Yes – generally allowed, but with clear rules. The installation must be registered with your grid operator. Devices over 800 W are not simple plug-and-play and require special approvals.'],
        bullets: ['Registration with grid operator is mandatory', 'Max. 800 W for plug-and-play operation', 'Safety regulations must be followed', 'Unregistered systems can be disconnected'],
      },
      {
        heading: 'How much electricity does a balcony power station produce?',
        content: ['The specific value depends on the project.', 'The specific value depends on the project.'],
        highlight: 'The specific value depends on the project.',
      },
      {
        heading: 'When is a full solar system the better choice?',
        content: ['For homeowners with a suitable roof, a full solar system is almost always the more profitable choice.'],
        bullets: ['Homeowner with suitable roof: full solar system clearly better', 'Renter or without a roof: balcony power station useful', 'Solar system increases property value', 'EIV subsidy only applies to full systems'],
      },
    ],
    ctaHeading: 'Homeowner? Compare up to 3 free quotes now',
    ctaText: 'A full solar system produces substantially more electricity than a balcony power station. Compare up to 3 quotes for free.',
    ctaButton: 'Request a free quote',
    formUrl: '/en/request',
    relatedSlugs: ['roi-photovoltaik-schweiz', 'foerderungen-photovoltaik-2026', 'batteriespeicher-solaranlage-lohnt-sich'],
    faqs: [
      { question: 'Do I need a permit for a balcony power station in Switzerland?', answer: 'No formal building permit, but registration with your grid operator is mandatory. Unregistered systems can be disconnected.' },
      { question: 'How much can I save with a balcony power station?', answer: 'Savings depend on orientation and self-consumption. A full solar system can make a substantially larger contribution.' },
      { question: 'Can a renter install a balcony power station?', answer: "Yes in principle, but you need your landlord's consent. The device must be securely fixed and registered with the grid operator." },
      { question: 'Is it worth it for homeowners?', answer: 'For homeowners with a suitable roof, a full solar system is almost always far more profitable.' },
    ],
  },

  // ─── BALKONKRAFTWERK (IT) ─────────────────────────────────────────────────
  {
    slug: 'balkonkraftwerk-schweiz',
    locale: 'it',
    title: 'Mini impianto solare da balcone in Svizzera: permesso, costi e conviene?',
    metaDescription: 'I mini impianti solari da balcone sono permessi in Svizzera? Costi, regole e confronto onesto con un impianto fotovoltaico completo.',
    image: '/images/balkonkraftwerk-schweiz.webp',
    date: '17 marzo 2026',
    readMin: 7,
    tag: 'Guida',
    intro: "Un mini impianto solare da balcone sembra allettante: economico, facile da installare e senza burocrazia. Ma quanta energia produce davvero – e quando un impianto fotovoltaico completo è la scelta molto più vantaggiosa?",
    sections: [
      {
        heading: "Cos'è un mini impianto solare da balcone?",
        content: ["Un mini impianto da balcone è una piccola installazione solare per l'autoproduzione: tipicamente 1–2 pannelli solari con 300–800 W, collegati a una presa normale. L'energia prodotta viene consumata direttamente nell'abitazione.", "In Svizzera questi dispositivi stanno diventando sempre più popolari – soprattutto tra gli affittuari. Ma i proprietari dovrebbero valutare attentamente prima di sceglierli rispetto a un impianto completo."],
        stats: [{ label: 'Pannelli', value: '1–2' }, { label: 'Potenza max.', value: '800 W' }, { label: 'Produzione/anno', value: 'Il valore concreto dipende dal progetto.' }, { label: 'Risparmio/anno', value: 'Il valore concreto dipende dal progetto.' }],
      },
      {
        heading: 'I mini impianti da balcone sono permessi in Svizzera?',
        content: ["Sì – in linea di principio permessi, ma con regole precise. L'impianto deve essere registrato presso il gestore di rete. I dispositivi sopra gli 800 W non sono semplici plug-and-play e richiedono autorizzazioni speciali."],
        bullets: ["Registrazione presso il gestore di rete obbligatoria", "Max. 800 W per il funzionamento plug-and-play", "Le norme di sicurezza devono essere rispettate", "Gli impianti non registrati possono essere disconnessi"],
      },
      {
        heading: 'Quanta energia produce un mini impianto da balcone?',
        content: ["Per la maggior parte del consumo familiare non è sufficiente."],
      },
      {
        heading: "Quando l'impianto fotovoltaico completo è la scelta migliore?",
        content: ["Per i proprietari con un tetto adatto, un impianto completo è quasi sempre l'opzione più redditizia."],
        bullets: ["Proprietario con tetto adatto: impianto completo molto più conveniente", "Affittuario o senza tetto: mini impianto da balcone utile", "L'impianto solare aumenta il valore dell'immobile", "La RU federale si applica solo agli impianti completi"],
      },
    ],
    ctaHeading: "Proprietario? Confronta fino a 3 preventivi gratis",
    ctaText: "Un impianto fotovoltaico completo può contribuire molto più di un mini impianto da balcone. Confronta gratuitamente fino a 3 preventivi.",
    ctaButton: 'Richiedi preventivo gratuito',
    formUrl: '/it/richiesta',
    relatedSlugs: ['roi-photovoltaik-schweiz', 'foerderungen-photovoltaik-2026', 'batteriespeicher-solaranlage-lohnt-sich'],
    faqs: [
      { question: "Ho bisogno di un permesso per un mini impianto da balcone in Svizzera?", answer: "Non è richiesto un permesso edilizio formale, ma la registrazione presso il gestore di rete è obbligatoria. Gli impianti non registrati possono essere disconnessi." },
      { question: "Quanto risparmio con un mini impianto da balcone?", answer: "Il risparmio varia in base all'orientamento e all'autoconsumo. Un impianto fotovoltaico completo può fornire un contributo nettamente maggiore." },
      { question: "Un affittuario può installare un mini impianto da balcone?", answer: "Sì in linea di principio, ma è necessario il consenso del proprietario. Il dispositivo deve essere fissato in modo sicuro e registrato presso il gestore di rete." },
      { question: "Conviene per i proprietari di casa?", answer: "Per i proprietari con un tetto adatto, un impianto fotovoltaico completo è quasi sempre molto più redditizio." },
    ],
  },

  // ─── SOLAR IM WINTER (DE) ────────────────────────────────────────────────────
  {
    slug: 'solaranlage-winter-schweiz',
    locale: 'de',
    title: 'Solaranlage im Winter: Wie effizient sind Panels bei Schnee und Kälte?',
    metaDescription: 'Produzieren Solaranlagen im Schweizer Winter wirklich Strom? Fakten zu Schnee, Kälte, Neigungswinkel und dem neuen Winterstrombonus 2026.',
    image: '/images/solarmodule-nass-alpen-eiger.webp',
    date: '12. März 2026',
    readMin: 5,
    tag: 'Ratgeber',
    intro: 'Viele Hausbesitzer fragen sich, ob sich eine Solaranlage in der Schweiz auch im Winter lohnt. Die Antwort überrascht: Moderne Photovoltaikanlagen produzieren auch bei Schnee und Kälte zuverlässig Strom – und der neue Winterstrombonus 2026 macht sie noch attraktiver.',
    sections: [
      {
        heading: 'Solaranlagen im Winter: Was wirklich zählt',
        content: ['Viele denken, Solaranlagen seien im Winter nutzlos. Das Gegenteil ist wahr: Kalte Temperaturen verbessern die Effizienz von Solarmodulen. Photovoltaikzellen arbeiten bei niedrigen Temperaturen physikalisch effizienter als bei Hitze – der sogenannte Temperaturkoeffizient wirkt positiv.'],
        stats: [{ label: 'Schneeabrutschen', value: 'ab 35°' }],
      },
      {
        heading: 'Schnee auf den Modulen: Problem oder Kleinigkeit?',
        content: ['Schnee auf den Modulen reduziert kurzfristig die Produktion. Zudem heizt die schwarze Moduloberfläche auf und schmilzt die Schneedecke.', 'Für Flachdächer empfehlen wir eine Aufständerung mit mindestens 15–20° Neigung, um Schneeakkumulation zu minimieren und gleichzeitig die Winterproduktion zu maximieren.'],
        bullets: ['Neigung ab 35°: Schnee rutscht selbst ab', 'Schwarze Oberfläche schmilzt Schnee aktiv', 'Flachdächer: Aufständerung mit 15–20° empfohlen', 'Neue bifaziale Module nutzen Schnee-Reflexion'],
      },
      {
        heading: 'Der Winterstrombonus 2026: Neue Förderung für steile Anlagen',
        content: ['Ab 2026 belohnt der Bund Solaranlagen mit steilerer Neigung (ab 60°) und guter Winterproduktion mit einem Winterstrombonus.', 'Dieser Bonus ist besonders relevant für Berggebiete in der Schweiz, wo der Winter länger dauert und die Schneereflexion die Produktion zusätzlich steigert.'],
      },
    ],
    ctaHeading: 'Solaranlage das ganze Jahr nutzen – jetzt Offerte holen',
    ctaText: 'Eine moderne Solaranlage produziert 12 Monate lang Strom. Holen Sie jetzt 3 kostenlose Offerten und profitieren Sie vom Winterstrombonus 2026.',
    ctaButton: 'Jetzt kostenlose Offerte anfordern',
    formUrl: '/anfrage',
    relatedSlugs: ['roi-photovoltaik-schweiz', 'eigenverbrauch-optimieren-solar', 'batteriespeicher-solaranlage-lohnt-sich'],
    relatedPageLinks: [{ label: 'Photovoltaik im Schweizer Klima', href: '/photovoltaik-schweizer-klima' }],
    faqs: [
      { question: 'Produziert meine Solaranlage im Winter überhaupt Strom?', answer: 'Ja, definitiv. Kalte Temperaturen verbessern sogar die Effizienz der Zellen.' },
      { question: 'Muss ich Schnee von meinen Solarmodulen entfernen?', answer: 'In der Regel nicht. Bei einer Neigung über 35° rutscht Schnee selbst innerhalb von 1–3 sonnigen Tagen ab. Die schwarze Moduloberfläche hilft dabei, Schnee aktiv zu schmelzen.' },
      { question: 'Was ist der Winterstrombonus 2026?', answer: 'Der Bund belohnt ab 2026 Anlagen mit steiler Neigung (ab 60°) mit einem Zusatzbonus auf die EIV.' },
      { question: 'Lohnt sich Solar auch in einem schneereich Kanton wie Graubünden?', answer: 'Ja, sogar besonders gut. Schnee reflektiert Sonnenlicht auf die Module (Albedo-Effekt) und steigert den Ertrag. Graubündner Anlagen produzieren im Winter oft mehr als Mittellandsanlagen.' },
    ],
  },

  // ─── SOLAR IM WINTER (FR) ────────────────────────────────────────────────────
  {
    slug: 'solaranlage-winter-schweiz',
    locale: 'fr',
    title: 'Panneaux solaires en hiver: quelle efficacité sous la neige et le froid?',
    metaDescription: "Les installations solaires modernes produisent de l'électricité même en hiver suisse. Faits sur la neige, le froid et le bonus d'hiver 2026.",
    image: '/images/solarmodule-nass-alpen-eiger.webp',
    date: '12 mars 2026',
    readMin: 5,
    tag: 'Guide',
    intro: "Beaucoup de propriétaires se demandent si une installation solaire est rentable en hiver suisse. La réponse est surprenante: les installations photovoltaïques modernes produisent de l'électricité même par neige et froid – et le nouveau bonus d'hiver 2026 les rend encore plus attractives.",
    sections: [
      {
        heading: 'Installations solaires en hiver: ce qui compte vraiment',
        content: ["Beaucoup pensent que les panneaux solaires sont inutiles en hiver. C'est faux: les températures froides améliorent l'efficacité des modules solaires. Les cellules photovoltaïques fonctionnent mieux physiquement par temps froid que par chaleur."],
        stats: [{ label: 'Glissement de neige', value: 'dès 35°' }],
      },
      {
        heading: 'La neige sur les panneaux: un problème ou une bagatelle?',
        content: ["La neige sur les panneaux réduit temporairement la production. De plus, la surface noire des modules chauffe et fait fondre la neige.", "Pour les toits plats, nous recommandons une inclinaison de 15–20° minimum pour minimiser l'accumulation de neige."],
        bullets: ["Inclinaison dès 35°: la neige glisse d'elle-même", "La surface noire fait fondre la neige activement", "Toits plats: inclinaison de 15–20° recommandée", "Les nouveaux modules bifaciaux utilisent la réflexion de la neige"],
      },
      {
        heading: "Le bonus d'hiver 2026: nouvelle aide pour les installations inclinées",
        content: ["Dès 2026, la Confédération récompense les installations solaires très inclinées (dès 60°) avec un bonus d'hiver.", "Ce bonus est particulièrement pertinent pour les zones alpines suisses, où l'hiver dure plus longtemps et où la réflexion de la neige augmente la production."],
      },
    ],
    ctaHeading: "Profitez du solaire toute l'année – demandez une offre",
    ctaText: "Une installation solaire moderne produit de l'électricité 12 mois par an. Obtenez 3 offres gratuites et profitez du bonus d'hiver 2026.",
    ctaButton: 'Demander une offre gratuite',
    formUrl: '/fr/demande',
    relatedSlugs: ['roi-photovoltaik-schweiz', 'eigenverbrauch-optimieren-solar', 'batteriespeicher-solaranlage-lohnt-sich'],
    faqs: [
      { question: "Mon installation solaire produit-elle de l'électricité en hiver?", answer: "Oui, certainement. Les températures froides améliorent même l'efficacité des cellules." },
      { question: "Dois-je enlever la neige de mes panneaux solaires?", answer: "En général non. La surface noire des modules aide à faire fondre la neige activement." },
      { question: "Qu'est-ce que le bonus d'hiver 2026?", answer: "La Confédération récompense dès 2026 les installations très inclinées (dès 60°) avec un bonus sur la RU." },
      { question: "Le solaire est-il rentable dans un canton enneigé comme le Valais?", answer: "Oui, encore plus. La neige réfléchit le rayonnement solaire sur les panneaux (effet albédo) et augmente le rendement. Les installations valaisannes produisent souvent plus en hiver que celles du Plateau." },
    ],
  },

  // ─── SOLAR IM WINTER (EN) ────────────────────────────────────────────────────
  {
    slug: 'solaranlage-winter-schweiz',
    locale: 'en',
    title: 'Solar panels in winter: how efficient are they in snow and cold?',
    metaDescription: 'Do solar panels work in a Swiss winter? Facts about snow, cold temperatures, tilt angle and the new winter power bonus 2026.',
    image: '/images/solarmodule-nass-alpen-eiger.webp',
    date: 'March 12, 2026',
    readMin: 5,
    tag: 'Guide',
    intro: 'Many homeowners wonder if solar panels are worthwhile in a Swiss winter. The answer is surprising: modern solar systems produce electricity reliably even in snow and cold – and the new 2026 winter power bonus makes them even more attractive.',
    sections: [
      {
        heading: 'Solar panels in winter: what really matters',
        content: ['Many people assume solar panels are useless in winter. The opposite is true: cold temperatures actually improve the efficiency of solar modules. PV cells work better physically at low temperatures than in heat.'],
        stats: [{ label: 'Snow slides off', value: 'from 35°' }],
      },
      {
        heading: 'Snow on the panels: a problem or a minor issue?',
        content: ['Snow on panels temporarily reduces output. The black module surface also heats up and melts the snow cover.', 'For flat roofs, we recommend mounting at 15–20° tilt to minimise snow accumulation and maximise winter production.'],
        bullets: ['Tilt from 35°: snow slides off naturally', 'Black surface actively melts snow', 'Flat roofs: 15–20° tilt recommended', 'New bifacial modules use snow reflection'],
      },
      {
        heading: 'The 2026 winter power bonus: new subsidy for steep installations',
        content: ['From 2026, the Swiss federal government rewards solar installations with steep tilt angles (from 60°) and good winter production with a winter power bonus.', 'This bonus is especially relevant for alpine cantons, where winter lasts longer and snow reflection boosts production further.'],
      },
    ],
    ctaHeading: 'Get solar working year-round – request a quote now',
    ctaText: 'A modern solar system produces electricity 12 months a year. Get 3 free quotes now and benefit from the 2026 winter power bonus.',
    ctaButton: 'Request a free quote',
    formUrl: '/en/request',
    relatedSlugs: ['roi-photovoltaik-schweiz', 'eigenverbrauch-optimieren-solar', 'batteriespeicher-solaranlage-lohnt-sich'],
    faqs: [
      { question: 'Does my solar system produce electricity in winter?', answer: 'Yes, definitely. Cold temperatures actually improve cell efficiency.' },
      { question: 'Do I need to remove snow from my solar panels?', answer: 'Generally no. The black module surface helps melt snow actively.' },
      { question: 'What is the 2026 winter power bonus?', answer: 'The Swiss government rewards steep installations (from 60° tilt) with a bonus on the EIV subsidy from 2026.' },
      { question: 'Is solar worth it in a snowy canton like Grisons?', answer: 'Yes, even more so. Snow reflects sunlight onto the panels (albedo effect) and increases yields. Grisons installations often produce more in winter than those on the Swiss Plateau.' },
    ],
  },

  // ─── SOLAR IM WINTER (IT) ────────────────────────────────────────────────────
  {
    slug: 'solaranlage-winter-schweiz',
    locale: 'it',
    title: 'Pannelli solari in inverno: quanto sono efficienti con neve e freddo?',
    metaDescription: "I pannelli solari funzionano d'inverno in Svizzera? Fatti su neve, freddo, angolo di inclinazione e il nuovo bonus energia invernale 2026.",
    image: '/images/solarmodule-nass-alpen-eiger.webp',
    date: '12 marzo 2026',
    readMin: 5,
    tag: 'Guida',
    intro: "Molti proprietari si chiedono se un impianto solare convenga anche d'inverno in Svizzera. La risposta sorprende: i moderni impianti fotovoltaici producono energia affidabilmente anche con neve e freddo – e il nuovo bonus energia invernale 2026 li rende ancora più interessanti.",
    sections: [
      {
        heading: "Impianti solari d'inverno: cosa conta davvero",
        content: ["In molti pensano che i pannelli solari siano inutili d'inverno. È falso: le temperature fredde migliorano l'efficienza dei moduli solari. Le celle fotovoltaiche funzionano fisicamente meglio a basse temperature che al caldo."],
        stats: [{ label: 'Neve scivolante', value: 'da 35°' }],
      },
      {
        heading: 'Neve sui pannelli: un problema o una piccola cosa?',
        content: ["La neve sui pannelli riduce temporaneamente la produzione. Inoltre la superficie nera dei moduli si scalda e scioglie lo strato di neve.", "Per i tetti piani raccomandiamo un'inclinazione di almeno 15–20° per minimizzare l'accumulo di neve."],
        bullets: ["Inclinazione da 35°: la neve scivola via da sola", "La superficie nera scioglie la neve attivamente", "Tetti piani: inclinazione di 15–20° raccomandata", "I nuovi moduli bifacciali sfruttano la riflessione della neve"],
      },
      {
        heading: "Il bonus energia invernale 2026: nuovo incentivo per impianti inclinati",
        content: ["Dal 2026, la Confederazione premia gli impianti solari con forte inclinazione (da 60°) con un bonus energia invernale.", "Questo bonus è particolarmente rilevante per le zone alpine svizzere, dove l'inverno dura più a lungo e la riflessione della neve aumenta ulteriormente la produzione."],
      },
    ],
    ctaHeading: "Sfrutta il solare tutto l'anno – richiedi un preventivo",
    ctaText: "Un moderno impianto solare produce energia per 12 mesi all'anno. Ottieni 3 preventivi gratuiti e approfitta del bonus invernale 2026.",
    ctaButton: 'Richiedi preventivo gratuito',
    formUrl: '/it/richiesta',
    relatedSlugs: ['roi-photovoltaik-schweiz', 'eigenverbrauch-optimieren-solar', 'batteriespeicher-solaranlage-lohnt-sich'],
    faqs: [
      { question: "Il mio impianto solare produce energia d'inverno?", answer: "Sì, assolutamente. Le temperature fredde migliorano addirittura l'efficienza delle celle." },
      { question: "Devo togliere la neve dai miei pannelli solari?", answer: "In generale no. La superficie nera dei moduli aiuta a sciogliere attivamente la neve." },
      { question: "Cos'è il bonus energia invernale 2026?", answer: "La Confederazione premia dal 2026 gli impianti molto inclinati (da 60°) con un bonus sulla RU." },
      { question: "Il solare conviene in un cantone nevoso come i Grigioni?", answer: "Sì, ancora di più. La neve riflette la luce solare sui pannelli (effetto albedo) e aumenta la resa. Gli impianti grigionesi producono spesso d'inverno più di quelli dell'Altopiano svizzero." },
    ],
  },

  // ─── FÖRDERUNGEN (DE) ────────────────────────────────────────────────────────
  {
    slug: 'foerderungen-photovoltaik-2026',
    locale: 'de',
    title: 'Photovoltaik-Förderungen in der Schweiz 2026: Alles was Sie wissen müssen',
    metaDescription: 'Alle Schweizer Solarförderungen 2026: Einmalvergütung (EIV), kantonale Programme, Steuerabzüge und Schritt-für-Schritt-Anleitung zur Förderbeantragung.',
    image: '/images/solarinstallateure-vergleich-beratung.webp',
    date: '5. März 2026',
    readMin: 7,
    tag: 'Förderungen',
    intro: 'Die Schweiz bietet 2026 attraktive Förderungen für Solaranlagen auf mehreren Ebenen: Bundesbeiträge via Pronovo, kantonale Zusatzprogramme und vollständige Steuerabzüge. Wir erklären, wie Sie das Maximum herausholen.',
    sections: [
      {
        heading: 'Die Einmalvergütung (EIV): Bundesförderung für alle',
        content: ['Die Einmalvergütung (EIV) ist die wichtigste Bundesförderung für neue Solaranlagen.', 'Die EIV wird einmalig nach erfolgreicher Inbetriebnahme überwiesen – kein laufender Beitrag, keine Rückzahlung.'],
        stats: [{ label: 'Auszahlung', value: 'Einmalig' }],
      },
      {
        heading: 'Kantonale Programme und Steuerabzug',
        content: ['Viele Kantone ergänzen die EIV mit eigenen Programmen.'],
      },
      {
        heading: 'Schritt-für-Schritt: So beantragen Sie Ihre Förderung',
        content: ['Die gute Nachricht: Ihr Installateur übernimmt in der Regel die komplette Förderanmeldung. Trotzdem ist es wichtig, den Prozess zu verstehen, damit nichts vergessen geht.'],
        bullets: ['1. Anlage installieren lassen (Installateur meldet an)', '2. Pronovo-Antrag stellen (meist durch Installateur)', '3. Abnahme durch Netzbetreiber', '4. EIV-Zahlung nach Prüfung', '5. Kantonalen Beitrag separat beantragen (falls nötig)', '6. Steuerabzug in nächste Steuererklärung'],
        highlight: 'PvPro.ch-Partnerinstallateure erledigen die komplette Förderung – Sie müssen nichts selbst ausfüllen.',
      },
      {
        heading: 'Neue Förderungen 2026: Was ist neu?',
        content: ['Das Jahr 2026 bringt wichtige Neuerungen: Winterstrombonus für steile Anlagen, LEG-Förderung (Lokale Elektrizitätsgemeinschaften) und in mehreren Kantonen neue Solarpflicht-Regelungen, die gleichzeitig mit erhöhten Fördergeldern verknüpft sind.'],
        bullets: ['LEG-Förderung: Bonus für Gemeinschaftsanlagen', 'Solarpflicht ZH/BE: Pflicht + volle Förderung kombiniert', 'Batteriespeicher: separate kantonale Beiträge'],
      },
    ],
    ctaHeading: 'Förderung sichern – jetzt Offerte anfordern',
    ctaText: 'Unsere Partnerinstallateure sichern Ihnen die maximale Förderung. Kostenlos, unverbindlich und mit garantierter EIV-Abwicklung.',
    ctaButton: 'Jetzt kostenlose Offerte anfordern',
    formUrl: '/anfrage',
    relatedSlugs: ['roi-photovoltaik-schweiz', 'batteriespeicher-solaranlage-lohnt-sich', 'richtigen-solarinstallateur-schweiz-waehlen'],
    faqs: [
      { question: 'Wie wird die EIV berechnet?', answer: 'Die EIV berechnet sich nach einer Formel: Grundbetrag + kWp-Beitrag.' },
      { question: 'Kann ich EIV und kantonale Förderung gleichzeitig beantragen?', answer: 'Ja, beide Förderungen sind kumulierbar. Die EIV läuft via Pronovo (Bund), die kantonale Förderung separat über die kantonale Stelle. Ihr Installateur koordiniert beide Anträge.' },
      { question: 'Wann wird die EIV ausbezahlt?', answer: 'Die EIV wird nach erfolgreicher Inbetriebnahme und Prüfung durch Pronovo ausgezahlt.' },
      { question: 'Gilt der Steuerabzug in allen Schweizer Kantonen?', answer: 'Ja. In allen 26 Kantonen können Solaranlagen als Liegenschaftsunterhalt von den Steuern abgezogen werden. Die Höhe des effektiven Vorteils variiert je nach kantonalem Steuertarif.' },
    ],
  },

  // ─── FÖRDERUNGEN (FR) ────────────────────────────────────────────────────────
  {
    slug: 'foerderungen-photovoltaik-2026',
    locale: 'fr',
    title: 'Subventions solaires en Suisse 2026: tout ce que vous devez savoir',
    metaDescription: "Toutes les aides solaires suisses 2026: rétribution unique (RU), programmes cantonaux, déductions fiscales et guide pour obtenir le maximum.",
    image: '/images/solarinstallateure-vergleich-beratung.webp',
    date: '5 mars 2026',
    readMin: 7,
    tag: 'Subventions',
    intro: "La Suisse offre en 2026 des aides attractives pour les installations solaires à plusieurs niveaux: contributions fédérales via Pronovo, programmes cantonaux complémentaires et déductions fiscales complètes. Voici comment maximiser vos avantages.",
    sections: [
      {
        heading: 'La rétribution unique (RU): aide fédérale pour tous',
        content: ["La rétribution unique (RU) est la principale aide fédérale pour les nouvelles installations solaires.", "La RU est versée en une seule fois après la mise en service – pas de contribution continue, pas de remboursement."],
        stats: [{ label: 'Versement', value: 'Unique' }],
      },
      {
        heading: "Programmes cantonaux et déduction fiscale",
        content: ["De nombreux cantons complètent la RU avec leurs propres programmes.", "Dans la plupart des cantons, l'installation est également déductible comme entretien immobilier."],
        bullets: ["Tous les cantons: déduction fiscale comme entretien"],
      },
      {
        heading: 'Étape par étape: comment obtenir vos subventions',
        content: ["Bonne nouvelle: votre installateur prend généralement en charge toute la procédure de subvention. Il est néanmoins important de comprendre le processus."],
        bullets: ["1. Faire installer l'installation (l'installateur déclare)", "2. Déposer la demande Pronovo (généralement par l'installateur)", "3. Réception par le gestionnaire de réseau", "4. Versement RU après contrôle", "5. Demander séparément la contribution cantonale (si nécessaire)", "6. Déduction fiscale dans la prochaine déclaration"],
        highlight: "Les installateurs partenaires de PvPro.ch s'occupent de toutes les démarches – vous n'avez rien à remplir.",
      },
      {
        heading: 'Nouvelles aides 2026: quoi de neuf?',
        content: ["L'année 2026 apporte des nouveautés importantes: bonus d'hiver pour les installations inclinées, aide pour les Communautés Locales d'Énergie (CLE) et dans plusieurs cantons, de nouvelles règles d'obligation solaire liées à des aides accrues."],
        bullets: ["Aide CLE: bonus pour les installations communautaires", "Obligation solaire ZH/BE: obligation + pleine aide combinée", "Batteries: contributions cantonales séparées"],
      },
    ],
    ctaHeading: "Obtenez vos subventions – demandez une offre maintenant",
    ctaText: "Nos installateurs partenaires vous garantissent les subventions maximales. Gratuit, sans engagement et avec prise en charge garantie de la RU.",
    ctaButton: 'Demander une offre gratuite',
    formUrl: '/fr/demande',
    relatedSlugs: ['roi-photovoltaik-schweiz', 'batteriespeicher-solaranlage-lohnt-sich', 'richtigen-solarinstallateur-schweiz-waehlen'],
    faqs: [
      { question: "Comment la RU est-elle calculée?", answer: "La RU est calculée selon une formule: montant de base + contribution par kWc." },
      { question: "Puis-je demander la RU et les aides cantonales simultanément?", answer: "Oui, les deux aides sont cumulables. La RU passe par Pronovo (Confédération), l'aide cantonale séparément par le service cantonal. Votre installateur coordonne les deux demandes." },
      { question: "Quand la RU est-elle versée?", answer: "La RU est versée après la mise en service réussie et le contrôle par Pronovo." },
      { question: "La déduction fiscale s'applique-t-elle dans tous les cantons suisses?", answer: "Oui. Dans les 26 cantons, les installations solaires peuvent être déduites comme entretien immobilier. L'avantage effectif varie selon le taux d'imposition cantonal." },
    ],
  },

  // ─── FÖRDERUNGEN (EN) ────────────────────────────────────────────────────────
  {
    slug: 'foerderungen-photovoltaik-2026',
    locale: 'en',
    title: 'Solar subsidies in Switzerland 2026: everything you need to know',
    metaDescription: 'All Swiss solar subsidies 2026: one-time payment (EIV), cantonal programmes, tax deductions and a step-by-step guide to claiming the maximum.',
    image: '/images/solarinstallateure-vergleich-beratung.webp',
    date: 'March 5, 2026',
    readMin: 7,
    tag: 'Subsidies',
    intro: 'Switzerland offers attractive solar subsidies in 2026 on multiple levels: federal contributions via Pronovo, cantonal top-up programmes and full tax deductions. Here is how to maximise your benefits.',
    sections: [
      {
        heading: 'The one-time payment (EIV): federal subsidy for everyone',
        content: ['The one-time payment (EIV) is the main federal subsidy for new solar installations.', "It is paid once after successful commissioning – no ongoing contribution, no repayment."],
        stats: [{ label: 'Payment', value: 'One-time' }],
      },
      {
        heading: 'Cantonal programmes and tax deductions',
        content: ['Many cantons supplement the EIV with their own programmes.'],
        bullets: ['All cantons: tax deduction as property maintenance'],
      },
      {
        heading: 'Step by step: how to claim your subsidies',
        content: ['Good news: your installer typically handles the complete subsidy process. Still, it is worth understanding the steps.'],
        bullets: ['1. Have installation completed (installer registers)', '2. File Pronovo application (usually by installer)', '3. Acceptance by grid operator', '4. EIV payment after review', '5. Apply separately for cantonal contribution (if applicable)', '6. Tax deduction in next tax return'],
        highlight: 'PvPro.ch partner installers handle all paperwork – you do not need to fill in anything.',
      },
      {
        heading: 'New subsidies 2026: what is new?',
        content: ['2026 brings important changes: winter power bonus for steep installations, Local Energy Community (LEC) subsidies and in several cantons new solar obligation rules linked to increased funding.'],
        bullets: ['LEC subsidy: bonus for community installations', 'Solar obligation ZH/BE: obligation + full subsidy combined', 'Batteries: separate cantonal contributions'],
      },
    ],
    ctaHeading: 'Secure your subsidies – request a quote now',
    ctaText: 'Our partner installers guarantee you the maximum subsidy. Free, non-binding and with guaranteed EIV processing.',
    ctaButton: 'Request a free quote',
    formUrl: '/en/request',
    relatedSlugs: ['roi-photovoltaik-schweiz', 'batteriespeicher-solaranlage-lohnt-sich', 'richtigen-solarinstallateur-schweiz-waehlen'],
    faqs: [
      { question: 'How is the EIV calculated?', answer: 'The EIV is calculated using a formula: base amount + per-kWp contribution.' },
      { question: 'Can I claim the EIV and cantonal subsidy at the same time?', answer: 'Yes, both subsidies can be combined. The EIV goes through Pronovo (federal), the cantonal subsidy separately through the cantonal office. Your installer coordinates both applications.' },
      { question: 'When is the EIV paid?', answer: 'The EIV is paid after successful commissioning and review by Pronovo.' },
      { question: 'Does the tax deduction apply in all Swiss cantons?', answer: 'Yes. In all 26 cantons, solar installations can be deducted as property maintenance. The effective benefit varies by cantonal tax rate.' },
    ],
  },

  // ─── FÖRDERUNGEN (IT) ────────────────────────────────────────────────────────
  {
    slug: 'foerderungen-photovoltaik-2026',
    locale: 'it',
    title: 'Incentivi fotovoltaici in Svizzera 2026: tutto quello che devi sapere',
    metaDescription: "Tutti gli incentivi solari svizzeri 2026: Remunerazione Unica (RU), programmi cantonali, deduzioni fiscali e guida passo per passo per ottenere il massimo.",
    image: '/images/solarinstallateure-vergleich-beratung.webp',
    date: '5 marzo 2026',
    readMin: 7,
    tag: 'Incentivi',
    intro: "La Svizzera offre nel 2026 incentivi attrattivi per gli impianti solari su più livelli: contributi federali tramite Pronovo, programmi cantonali complementari e deduzioni fiscali complete. Ecco come massimizzare i vantaggi.",
    sections: [
      {
        heading: 'La Remunerazione Unica (RU): incentivo federale per tutti',
        content: ["La Remunerazione Unica (RU) è il principale incentivo federale per i nuovi impianti solari.", "La RU viene versata una sola volta dopo la messa in servizio – nessun contributo continuativo, nessun rimborso."],
        stats: [{ label: 'Versamento', value: 'Unico' }],
      },
      {
        heading: 'Programmi cantonali e deduzione fiscale',
        content: ["Molti cantoni integrano la RU con programmi propri."],
        bullets: ["Tutti i cantoni: deduzione fiscale come manutenzione"],
      },
      {
        heading: 'Passo per passo: come ottenere gli incentivi',
        content: ["Buona notizia: il tuo installatore si occupa generalmente di tutta la procedura di incentivazione. Vale comunque la pena capire il processo."],
        bullets: ["1. Fare installare l'impianto (l'installatore registra)", "2. Presentare la domanda Pronovo (di solito dall'installatore)", "3. Collaudo da parte del gestore di rete", "4. Pagamento RU dopo la verifica", "5. Richiedere separatamente il contributo cantonale (se necessario)", "6. Deduzione fiscale nella prossima dichiarazione dei redditi"],
        highlight: "Gli installatori partner di PvPro.ch si occupano di tutte le pratiche – non devi compilare nulla tu stesso.",
      },
      {
        heading: 'Nuovi incentivi 2026: cosa c\'è di nuovo?',
        content: ["Il 2026 porta novità importanti: bonus energia invernale per impianti inclinati, incentivi per le Comunità Elettriche Locali (CEL) e in diversi cantoni nuove regole sull'obbligo solare collegate a maggiori fondi."],
        bullets: ["Incentivi CEL: bonus per impianti comunitari", "Obbligo solare TI/ZH: obbligo + piena agevolazione combinata", "Batterie: contributi cantonali separati"],
      },
    ],
    ctaHeading: "Assicurati gli incentivi – richiedi un preventivo ora",
    ctaText: "I nostri installatori partner ti garantiscono il massimo degli incentivi. Gratuito, senza impegno e con gestione garantita della RU.",
    ctaButton: 'Richiedi preventivo gratuito',
    formUrl: '/it/richiesta',
    relatedSlugs: ['roi-photovoltaik-schweiz', 'batteriespeicher-solaranlage-lohnt-sich', 'richtigen-solarinstallateur-schweiz-waehlen'],
    faqs: [
      { question: "Come viene calcolata la RU?", answer: "La RU viene calcolata con una formula: importo base + contributo per kWp." },
      { question: "Posso richiedere la RU e il contributo cantonale contemporaneamente?", answer: "Sì, i due incentivi sono cumulabili. La RU passa attraverso Pronovo (federale), il contributo cantonale separatamente tramite l'ufficio cantonale. Il tuo installatore coordina entrambe le domande." },
      { question: "Quando viene pagata la RU?", answer: "La RU viene pagata dopo la messa in servizio riuscita e la verifica da parte di Pronovo." },
      { question: "La deduzione fiscale si applica in tutti i cantoni svizzeri?", answer: "Sì. In tutti i 26 cantoni, gli impianti solari possono essere dedotti come manutenzione immobiliare. Il vantaggio effettivo varia in base all'aliquota fiscale cantonale." },
    ],
  },

  // ─── BATTERIESPEICHER (DE) ───────────────────────────────────────────────────
  {
    slug: 'batteriespeicher-solaranlage-lohnt-sich',
    locale: 'de',
    title: 'Batteriespeicher für Ihre Solaranlage: Lohnt sich die Investition?',
    metaDescription: 'Kosten, Kapazitäten und ROI von Heimspeichern für Solaranlagen in der Schweiz 2026. Wann lohnt sich ein Batteriespeicher wirklich?',
    image: '/images/swissvolt-batteriespeicher-keller.webp',
    date: '27. Februar 2026',
    readMin: 6,
    tag: 'Speicher',
    intro: 'Ein Batteriespeicher erhöht Ihren Eigenverbrauch erheblich – aber lohnt er sich auch finanziell? Wir analysieren Kosten, Amortisationszeit und zeigen, für wen ein Heimspeicher in der Schweiz 2026 besonders rentabel ist.',
    sections: [
      {
        heading: 'Wie funktioniert ein Heimspeicher?',
        content: ['Ein Heimspeicher speichert überschüssigen Solarstrom, der tagsüber produziert, aber nicht sofort verbraucht wird. Nachts oder an bewölkten Tagen wird dieser gespeicherte Strom genutzt, anstatt teuren Netzstrom zu beziehen.'],
        stats: [{ label: 'Eigenverbrauch ohne Speicher', value: `${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, 'de')}%` }, { label: 'Eigenverbrauch mit Speicher', value: `${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withStorage, 'de')}%` }, { label: 'Amortisation der Batterie', value: `${factRange(ECONOMIC_FACTS.storageCosts.paybackYears, 'de')} Jahre` }],
      },
      {
        heading: 'Kosten und Kapazitäten 2026',
        content: ['Die Preise für Heimspeicher sind in den letzten Jahren deutlich gesunken.', 'Die ideale Speichergrösse hängt von Ihrer Anlage und Ihrem Verbrauch ab.', STORAGE_PRICE_NOTES.de],
        bullets: [`5 kWh: ${storagePrice(5, 'de')}`, `10 kWh: ${storagePrice(10, 'de')}`, `15 kWh: ${storagePrice(15, 'de')}`, `20 kWh: ${storagePrice(20, 'de')}`],
      },
      {
        heading: 'Für wen lohnt sich ein Batteriespeicher besonders?',
        content: ['Ein Heimspeicher lohnt sich besonders für Haushalte mit hohem Abendverbrauch, Wärmepumpe oder Elektroauto.'],
        bullets: ['Haushalt mit Wärmepumpe: sehr rentabel', 'Elektroauto-Besitzer: Nacht-Ladung mit eigenem Solarstrom', 'Hoher Abendverbrauch: Speicher optimal', 'Gewerbe mit Verbrauch auch ausserhalb der Solarzeiten'],
      },
      {
        heading: 'Steuerliche Behandlung und Förderung von Speichern',
        content: ['Gute Nachricht: In allen Schweizer Kantonen ist auch der Batteriespeicher als Teil der Solaranlage steuerlich absetzbar. Einige Kantone wie Bern, Luzern und Aargau fördern Speicher zusätzlich mit eigenen Kantonsbeiträgen.'],
        bullets: ['Alle Kantone: Speicher als Unterhalt absetzbar', 'Separate kantonale Speicherförderungen sind je nach Standort möglich', 'Kombination mit Wärmepumpe oft zusätzlich gefördert'],
      },
    ],
    ctaHeading: 'Solaranlage mit Speicher – jetzt Offerte holen',
    ctaText: 'Unsere Partnerinstallateure dimensionieren den idealen Speicher für Ihren Haushalt. Kostenlose Analyse und Offerte in wenigen Tagen.',
    ctaButton: 'Jetzt kostenlose Offerte anfordern',
    formUrl: '/anfrage',
    relatedSlugs: ['eigenverbrauch-optimieren-solar', 'roi-photovoltaik-schweiz', 'foerderungen-photovoltaik-2026'],
    relatedPageLinks: [{ label: 'Wartungskosten Solaranlage', href: '/photovoltaik-wartung-kosten' }],
    faqs: [
      { question: 'Wie gross sollte mein Heimspeicher sein?', answer: 'Mit Elektroauto oder Wärmepumpe darf es gerne mehr sein.' },
      { question: 'Wie lange hält ein Batteriespeicher?', answer: 'Die Lebensdauer hängt von Hersteller, Zellchemie, Nutzung und Garantiebedingungen ab.' },
      { question: 'Gibt es Förderung für Batteriespeicher in der Schweiz?', answer: 'Das Hinzufügen eines Batteriespeichers erhöht die Einmalvergütung (EIV) des Bundes nicht. Separate kantonale Speicherförderungen können je nach Standort verfügbar sein.' },
      { question: 'Kann ich einen Speicher nachträglich installieren?', answer: 'Ja, in den meisten Fällen ist eine nachträgliche Installation möglich. Moderne Wechselrichter haben oft bereits eine Speicher-Schnittstelle. Der Aufwand ist etwas höher, aber es ist technisch problemlos möglich.' },
    ],
  },

  // ─── BATTERIESPEICHER (FR) ───────────────────────────────────────────────────
  {
    slug: 'batteriespeicher-solaranlage-lohnt-sich',
    locale: 'fr',
    title: "Batterie de stockage solaire: vaut-il la peine d'investir?",
    metaDescription: "Coûts, capacités et ROI des batteries domestiques pour installations solaires en Suisse 2026. Quand une batterie est-elle vraiment rentable?",
    image: '/images/swissvolt-batteriespeicher-keller.webp',
    date: '27 février 2026',
    readMin: 6,
    tag: 'Stockage',
    intro: "Une batterie de stockage augmente considérablement votre autoconsommation – mais est-elle aussi rentable financièrement? Nous analysons les coûts, le délai d'amortissement et montrons pour qui une batterie est particulièrement avantageuse en Suisse.",
    sections: [
      {
        heading: "Comment fonctionne un système de stockage domestique?",
        content: ["Un système de stockage domestique accumule le surplus d'énergie solaire produit pendant la journée mais non consommé immédiatement. La nuit ou par temps couvert, cette énergie stockée est utilisée plutôt que d'acheter de l'électricité au réseau."],
        stats: [{ label: 'Autoconso. sans batterie', value: `${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, 'fr')}%` }, { label: 'Autoconso. avec batterie', value: `${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withStorage, 'fr')}%` }, { label: 'Amortissement de la batterie', value: `${factRange(ECONOMIC_FACTS.storageCosts.paybackYears, 'fr')} ans` }],
      },
      {
        heading: 'Coûts et capacités en 2026',
        content: ["Les prix des batteries domestiques dépendent de leur capacité et de l'installation. Pour comparer les offres, vérifiez que la pose et la mise en service sont comprises.", "La taille idéale dépend de votre installation et de votre consommation.", STORAGE_PRICE_NOTES.fr],
        bullets: [`5 kWh: ${storagePrice(5, 'fr')}`, `10 kWh: ${storagePrice(10, 'fr')}`, `15 kWh: ${storagePrice(15, 'fr')}`, `20 kWh: ${storagePrice(20, 'fr')}`],
      },
      {
        heading: 'Pour qui une batterie est-elle particulièrement rentable?',
        content: [`Une batterie est particulièrement utile pour les ménages avec une consommation élevée en soirée, une pompe à chaleur ou une voiture électrique. L'autoconsommation peut alors atteindre ${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withStorage, 'fr')}%.`],
        bullets: ["Ménage avec pompe à chaleur: très rentable", "Propriétaire de VE: charge nocturne avec son propre solaire", "Forte consommation en soirée: batterie optimale", "PME avec consommation aussi hors des heures solaires"],
        highlight: "Avec une voiture électrique et une pompe à chaleur, une batterie peut augmenter l'autoconsommation.",
      },
      {
        heading: 'Déductions fiscales et subventions pour les batteries',
        content: ["Bonne nouvelle: dans tous les cantons suisses, la batterie est aussi déductible fiscalement en tant que partie de l'installation solaire. Certains cantons comme Berne, Lucerne et Argovie subventionnent les batteries avec des contributions cantonales supplémentaires."],
        bullets: ["Tous les cantons: batterie déductible en entretien", "Des aides cantonales séparées pour le stockage peuvent s'appliquer selon le lieu", "Combinaison avec pompe à chaleur souvent subventionnée en plus"],
      },
    ],
    ctaHeading: "Installation solaire avec batterie – demandez une offre",
    ctaText: "Nos installateurs partenaires dimensionnent la batterie idéale pour votre ménage. Analyse gratuite et offre en quelques jours.",
    ctaButton: 'Demander une offre gratuite',
    formUrl: '/fr/demande',
    relatedSlugs: ['eigenverbrauch-optimieren-solar', 'roi-photovoltaik-schweiz', 'foerderungen-photovoltaik-2026'],
    faqs: [
      { question: "Quelle taille de batterie pour mon installation?", answer: "Avec une voiture électrique ou une pompe à chaleur, on peut aller plus haut." },
      { question: "Quelle est la durée de vie d'une batterie?", answer: "La durée de vie dépend du fabricant, de la technologie des cellules, de l'utilisation et des conditions de garantie." },
      { question: "Y a-t-il des subventions pour les batteries en Suisse?", answer: "L'ajout d'une batterie n'augmente pas la rétribution unique (RU) fédérale. Des aides cantonales séparées pour le stockage peuvent s'appliquer selon le lieu." },
      { question: "Peut-on ajouter une batterie après coup?", answer: "Oui, dans la plupart des cas, une installation ultérieure est possible. Les onduleurs modernes ont souvent déjà une interface de stockage. L'effort est un peu plus élevé, mais techniquement sans problème." },
    ],
  },

  // ─── BATTERIESPEICHER (EN) ───────────────────────────────────────────────────
  {
    slug: 'batteriespeicher-solaranlage-lohnt-sich',
    locale: 'en',
    title: 'Battery storage for your solar system: is the investment worth it?',
    metaDescription: 'Costs, capacities and ROI of home batteries for solar systems in Switzerland 2026. When does a battery storage system truly pay off?',
    image: '/images/swissvolt-batteriespeicher-keller.webp',
    date: 'February 27, 2026',
    readMin: 6,
    tag: 'Storage',
    intro: 'A battery storage system significantly increases your self-consumption – but does it make financial sense too? We analyse costs, payback times and show who benefits most from a home battery in Switzerland.',
    sections: [
      {
        heading: 'How does a home battery work?',
        content: ['A home battery stores surplus solar electricity produced during the day that is not immediately consumed. At night or on cloudy days, this stored electricity is used instead of buying expensive grid power.'],
        stats: [{ label: 'Self-consumption without battery', value: `${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, 'en')}%` }, { label: 'Self-consumption with battery', value: `${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withStorage, 'en')}%` }, { label: 'Battery payback', value: `${factRange(ECONOMIC_FACTS.storageCosts.paybackYears, 'en')} years` }],
      },
      {
        heading: 'Costs and capacities in 2026',
        content: ['Battery prices have fallen significantly in recent years.', 'The ideal battery size depends on your system and consumption.', STORAGE_PRICE_NOTES.en],
        bullets: [`5 kWh: ${storagePrice(5, 'en')}`, `10 kWh: ${storagePrice(10, 'en')}`, `15 kWh: ${storagePrice(15, 'en')}`, `20 kWh: ${storagePrice(20, 'en')}`],
      },
      {
        heading: 'Who benefits most from a home battery?',
        content: ['A home battery is especially profitable for households with high evening consumption, a heat pump or an electric vehicle.'],
        bullets: ['Household with heat pump: very profitable', 'EV owner: night-time charging with own solar', 'High evening consumption: battery optimal', 'Businesses with consumption outside solar hours'],
      },
      {
        heading: 'Tax treatment and subsidies for batteries',
        content: ['Good news: in all Swiss cantons, the battery is also tax-deductible as part of the solar installation. Some cantons such as Bern, Lucerne and Aargau pay additional cantonal contributions specifically for storage.'],
        bullets: ['All cantons: battery deductible as property maintenance', 'Separate cantonal storage incentives may apply depending on location', 'Combination with heat pump often additionally subsidised'],
      },
    ],
    ctaHeading: 'Solar system with battery – get a quote now',
    ctaText: 'Our partner installers will size the ideal battery for your household. Free analysis and quote within a few days.',
    ctaButton: 'Request a free quote',
    formUrl: '/en/request',
    relatedSlugs: ['eigenverbrauch-optimieren-solar', 'roi-photovoltaik-schweiz', 'foerderungen-photovoltaik-2026'],
    faqs: [
      { question: 'How large should my home battery be?', answer: 'With an EV or heat pump, you can go higher.' },
      { question: 'How long does a home battery last?', answer: 'Lifetime depends on the manufacturer, cell chemistry, usage and warranty terms.' },
      { question: 'Are there subsidies for batteries in Switzerland?', answer: 'Adding a battery does not increase the federal one-time payment (EIV). Separate cantonal storage incentives may apply depending on location.' },
      { question: 'Can I add a battery retrospectively?', answer: 'Yes, in most cases a retrofit is possible. Modern inverters often already have a storage interface. The effort is slightly higher, but technically straightforward.' },
    ],
  },

  // ─── BATTERIESPEICHER (IT) ───────────────────────────────────────────────────
  {
    slug: 'batteriespeicher-solaranlage-lohnt-sich',
    locale: 'it',
    title: "Accumulo batteria per il tuo impianto solare: vale la pena investire?",
    metaDescription: "Costi, capacità e ROI degli accumulatori domestici per impianti solari in Svizzera 2026. Quando conviene davvero una batteria?",
    image: '/images/swissvolt-batteriespeicher-keller.webp',
    date: '27 febbraio 2026',
    readMin: 6,
    tag: 'Accumulo',
    intro: "Un sistema di accumulo aumenta notevolmente il tuo autoconsumo – ma conviene anche finanziariamente? Analizziamo costi, tempi di ammortamento e mostriamo per chi una batteria domestica è particolarmente vantaggiosa in Svizzera.",
    sections: [
      {
        heading: "Come funziona un sistema di accumulo domestico?",
        content: ["Un sistema di accumulo domestico immagazzina l'energia solare in eccesso prodotta durante il giorno ma non consumata immediatamente. Di notte o nei giorni nuvolosi, questa energia accumulata viene utilizzata invece di acquistare energia costosa dalla rete."],
        stats: [{ label: 'Autoconsumo senza batteria', value: `${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, 'it')}%` }, { label: 'Autoconsumo con batteria', value: `${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withStorage, 'it')}%` }, { label: 'Ammortamento della batteria', value: `${factRange(ECONOMIC_FACTS.storageCosts.paybackYears, 'it')} anni` }],
      },
      {
        heading: 'Costi e capacità nel 2026',
        content: ["I prezzi delle batterie domestiche sono calati significativamente negli ultimi anni.", "La dimensione ideale dipende dal tuo impianto e dal tuo consumo.", STORAGE_PRICE_NOTES.it],
        bullets: [`5 kWh: ${storagePrice(5, 'it')}`, `10 kWh: ${storagePrice(10, 'it')}`, `15 kWh: ${storagePrice(15, 'it')}`, `20 kWh: ${storagePrice(20, 'it')}`],
      },
      {
        heading: 'Per chi conviene particolarmente una batteria?',
        content: ["Una batteria è particolarmente utile per le famiglie con un consumo elevato la sera, una pompa di calore o un'auto elettrica."],
        bullets: ["Famiglia con pompa di calore: molto redditizio", "Proprietario di auto elettrica: ricarica notturna con il proprio solare", "Alto consumo serale: batteria ottimale", "Aziende con consumo anche fuori dalle ore solari"],
      },
      {
        heading: 'Trattamento fiscale e incentivi per le batterie',
        content: ["Buona notizia: in tutti i cantoni svizzeri, anche la batteria è deducibile fiscalmente come parte dell'impianto solare. Alcuni cantoni come Berna, Lucerna e Argovia pagano contributi cantonali aggiuntivi specifici per l'accumulo."],
        bullets: ["Tutti i cantoni: batteria deducibile come manutenzione", "Possono essere disponibili incentivi cantonali separati per l'accumulo", "Combinazione con pompa di calore spesso incentivata in aggiunta"],
      },
    ],
    ctaHeading: "Impianto solare con batteria – richiedi un preventivo",
    ctaText: "I nostri installatori partner dimensionano la batteria ideale per la tua famiglia. Analisi gratuita e preventivo in pochi giorni.",
    ctaButton: 'Richiedi preventivo gratuito',
    formUrl: '/it/richiesta',
    relatedSlugs: ['eigenverbrauch-optimieren-solar', 'roi-photovoltaik-schweiz', 'foerderungen-photovoltaik-2026'],
    faqs: [
      { question: "Quanto grande deve essere la mia batteria?", answer: "Con un'auto elettrica o una pompa di calore puoi andare oltre." },
      { question: "Quanto dura una batteria domestica?", answer: 'La durata dipende dal produttore, dalla chimica delle celle, dall’uso e dalle condizioni di garanzia.' },
      { question: "Ci sono incentivi per le batterie in Svizzera?", answer: "L'aggiunta di una batteria non aumenta la Remunerazione Unica (RU) federale. Possono essere disponibili incentivi cantonali separati per l'accumulo." },
      { question: "Posso aggiungere una batteria in un secondo momento?", answer: "Sì, nella maggior parte dei casi un retrofit è possibile. I moderni inverter hanno spesso già un'interfaccia per l'accumulo. Lo sforzo è leggermente maggiore, ma tecnicamente non ci sono problemi." },
    ],
  },

  // ─── INSTALLATEUR WÄHLEN (DE) ────────────────────────────────────────────────
  {
    slug: 'richtigen-solarinstallateur-schweiz-waehlen',
    locale: 'de',
    title: 'Den richtigen Solarinstallateur wählen: 7 wichtige Kriterien',
    metaDescription: '7 Kriterien für die Wahl des besten Solarinstallateurs in der Schweiz. Zertifizierungen, Referenzen, Garantien und wie PvPro.ch den Vergleich vereinfacht.',
    image: '/images/solarinstallateure-offerte-beratung.webp',
    date: '18. Februar 2026',
    readMin: 4,
    tag: 'Ratgeber',
    intro: 'Die Wahl des Installateurs ist die wichtigste Entscheidung beim Solarprojekt – wichtiger als der Preis. Ein schlechter Installateur kostet Sie langfristig mehr als ein günstigeres Angebot einspart. Hier sind die 7 entscheidenden Kriterien.',
    sections: [
      {
        heading: '1–3: Qualifikation, Zertifizierungen und Erfahrung',
        content: ['Verlangen Sie immer den Nachweis einer eidgenössisch anerkannten Qualifikation. Der Installateur sollte im STROM-Register eingetragen sein und nachweislich Erfahrung mit Anlagen in Ihrer Grössenklasse haben.'],
        bullets: ['Elektrofachmann mit Strom-Register-Eintrag', 'Pronovo-Registrierung für EIV-Abwicklung', 'Mindestens 20 Referenzanlagen', 'Erfahrung mit lokalen Netzbetreibern'],
        highlight: 'Nur registrierte Installateure können die EIV-Förderung beantragen – prüfen Sie dies immer.',
      },
      {
        heading: '4–5: Offerte, Planung und Garantien',
        content: ['Eine gute Offerte enthält immer: Detaillierter Systemplan, Ertragsprognose, Komponentenliste mit Herstellern, Installations- und Materialgarantien getrennt.'],
        bullets: ['Ertragsprognose mit/ohne Speicher'],
      },
      {
        heading: '6–7: Lokale Präsenz und After-Sales-Service',
        content: ['Bevorzugen Sie lokale Installationsbetriebe, die in Ihrem Kanton ansässig sind und schnell auf Serviceanfragen reagieren können. Ein Unternehmen, das 200 km entfernt sitzt, wird bei Problemen langsam reagieren.', 'Fragen Sie explizit nach dem After-Sales-Service: Wer kommt für die jährliche Wartung? Wie lange ist der Ansprechpartner erreichbar?'],
        bullets: ['Betrieb in Ihrem Kanton', 'Jährliche Wartung angeboten', 'Erreichbarer Ansprechpartner nach Installation', 'Referenzkunden in Ihrer Gemeinde befragbar'],
      },
    ],
    ctaHeading: 'Jetzt bis zu 3 geprüfte Offerten vergleichen',
    ctaText: 'PvPro.ch prüft jeden Installateur nach diesen 7 Kriterien vor. Sie erhalten nur Offerten von qualifizierten, lokalen Fachbetrieben.',
    ctaButton: 'Jetzt kostenlose Offerte anfordern',
    formUrl: '/anfrage',
    relatedSlugs: ['foerderungen-photovoltaik-2026', 'roi-photovoltaik-schweiz', 'solaranlage-winter-schweiz'],
    faqs: [
      { question: 'Welche Zertifizierungen sind für Solarinstallateure in der Schweiz Pflicht?', answer: 'Der Installateur muss im STROM-Register des NIV (Niederspannungs-Installationsverordnung) eingetragen sein. Für die EIV-Beantragung ist zusätzlich eine Pronovo-Registrierung nötig.' },
      { question: 'Wie viele Offerten sollte ich einholen?', answer: 'Mindestens 3 Offerten von verschiedenen Betrieben. PvPro.ch liefert Ihnen bis zu 3 geprüfte Offerten in wenigen Tagen.' },
      { question: 'Was tun, wenn der Installateur nach der Installation nicht mehr erreichbar ist?', answer: 'Dokumentieren Sie alles schriftlich und wählen Sie einen etablierten Betrieb mit Referenzen. PvPro.ch-Partner haben alle mindestens 3 Jahre Betriebsgeschichte und lokale Präsenz.' },
      { question: 'Gibt es schwarze Schafe in der Solarbranche?', answer: 'Leider ja. Häufige Warnsignale: Kein lokaler Betrieb, keine schriftliche Offerte, Druck für sofortige Unterschrift, fehlende Zertifizierungsnachweise. Über PvPro.ch erhalten Sie ausschliesslich geprüfte Betriebe.' },
    ],
  },

  // ─── INSTALLATEUR WÄHLEN (FR) ────────────────────────────────────────────────
  {
    slug: 'richtigen-solarinstallateur-schweiz-waehlen',
    locale: 'fr',
    title: 'Choisir le bon installateur solaire en Suisse: 7 critères essentiels',
    metaDescription: "7 critères pour choisir le meilleur installateur solaire en Suisse. Certifications, références, garanties et comment PvPro.ch simplifie la comparaison.",
    image: '/images/solarinstallateure-offerte-beratung.webp',
    date: '18 février 2026',
    readMin: 4,
    tag: 'Guide',
    intro: "Le choix de l'installateur est la décision la plus importante pour votre projet solaire – plus importante que le prix. Un mauvais installateur vous coûtera plus à long terme qu'une offre moins chère ne peut vous faire économiser. Voici les 7 critères décisifs.",
    sections: [
      {
        heading: '1–3: Qualifications, certifications et expérience',
        content: ["Exigez toujours la preuve d'une qualification reconnue. L'installateur doit être inscrit dans le registre compétent et avoir une expérience prouvée avec des installations de votre taille."],
        bullets: ["Technicien électricien avec certification reconnue", "Enregistrement Pronovo pour la gestion de la RU", "Au moins 20 installations de référence", "Expérience avec les gestionnaires de réseau locaux"],
        highlight: "Seuls les installateurs enregistrés peuvent demander la RU – vérifiez-le toujours.",
      },
      {
        heading: '4–5: Offre, planification et garanties',
        content: ["Une bonne offre contient toujours: plan système détaillé, prévision de production, liste des composants avec fabricants, garanties d'installation et de matériel séparées."],
        bullets: ["Prévision de production avec et sans batterie"],
      },
      {
        heading: '6–7: Présence locale et service après-vente',
        content: ["Privilégiez les installateurs locaux établis dans votre canton qui peuvent répondre rapidement aux demandes de service. Une entreprise à 200 km répondra lentement en cas de problème.", "Demandez explicitement le service après-vente: qui vient pour la maintenance annuelle? Combien de temps l'interlocuteur est-il joignable?"],
        bullets: ["Entreprise dans votre canton", "Maintenance annuelle proposée", "Interlocuteur joignable après installation", "Clients de référence dans votre commune"],
      },
    ],
    ctaHeading: "Comparez maintenant jusqu'à 3 offres vérifiées",
    ctaText: "PvPro.ch vérifie chaque installateur selon ces 7 critères. Vous ne recevez que des offres d'entreprises qualifiées et locales.",
    ctaButton: 'Demander une offre gratuite',
    formUrl: '/fr/demande',
    relatedSlugs: ['foerderungen-photovoltaik-2026', 'roi-photovoltaik-schweiz', 'solaranlage-winter-schweiz'],
    faqs: [
      { question: "Quelles certifications sont obligatoires pour les installateurs solaires en Suisse?", answer: "L'installateur doit être inscrit dans le registre compétent selon l'OIBT. Pour la demande de RU, une inscription auprès de Pronovo est également nécessaire." },
      { question: "Combien d'offres devrait-on obtenir?", answer: "Au moins 3 offres de différentes entreprises. PvPro.ch vous livre jusqu'à 3 offres vérifiées en quelques jours." },
      { question: "Que faire si l'installateur n'est plus joignable après l'installation?", answer: "Documentez tout par écrit et choisissez une entreprise établie avec références. Les partenaires PvPro.ch ont tous au moins 3 ans d'activité et une présence locale." },
      { question: "Y a-t-il de mauvais acteurs dans le secteur solaire?", answer: "Malheureusement oui. Signaux d'alarme fréquents: pas d'entreprise locale, pas d'offre écrite, pression pour signature immédiate, absence de preuves de certification. Via PvPro.ch, vous ne recevez que des entreprises vérifiées." },
    ],
  },

  // ─── INSTALLATEUR WÄHLEN (EN) ────────────────────────────────────────────────
  {
    slug: 'richtigen-solarinstallateur-schweiz-waehlen',
    locale: 'en',
    title: 'Choosing the right solar installer in Switzerland: 7 key criteria',
    metaDescription: '7 criteria for choosing the best solar installer in Switzerland. Certifications, references, guarantees and how PvPro.ch simplifies comparison.',
    image: '/images/solarinstallateure-offerte-beratung.webp',
    date: 'February 18, 2026',
    readMin: 4,
    tag: 'Guide',
    intro: 'Choosing the installer is the most important decision in your solar project – more important than the price. A poor installer will cost you more in the long run than a cheap offer saves. Here are the 7 decisive criteria.',
    sections: [
      {
        heading: '1–3: Qualifications, certifications and experience',
        content: ['Always ask for proof of a recognised qualification. The installer must be registered in the relevant electrical register and have proven experience with systems of your size.'],
        bullets: ['Electrician with official register entry', 'Pronovo registration for EIV processing', 'At least 20 reference installations', 'Experience with local grid operators'],
        highlight: 'Only registered installers can apply for the EIV subsidy – always check this.',
      },
      {
        heading: '4–5: Quote, planning and guarantees',
        content: ['A good quote always includes: detailed system plan, yield forecast, component list with manufacturers, separate installation and material guarantees.'],
        bullets: ['Yield forecast with and without battery'],
      },
      {
        heading: '6–7: Local presence and after-sales service',
        content: ['Prefer local installers based in your canton who can respond quickly to service requests. A company 200 km away will be slow to respond when problems arise.', 'Ask explicitly about after-sales service: who comes for annual maintenance? How long is the contact person reachable?'],
        bullets: ['Company in your canton', 'Annual maintenance offered', 'Reachable contact person after installation', 'Reference customers in your municipality'],
      },
    ],
    ctaHeading: 'Compare up to 3 vetted quotes now',
    ctaText: 'PvPro.ch vets every installer against these 7 criteria. You only receive quotes from qualified, local companies.',
    ctaButton: 'Request a free quote',
    formUrl: '/en/request',
    relatedSlugs: ['foerderungen-photovoltaik-2026', 'roi-photovoltaik-schweiz', 'solaranlage-winter-schweiz'],
    faqs: [
      { question: 'What certifications are required for solar installers in Switzerland?', answer: 'The installer must be registered in the relevant electrical register under NIV. For the EIV application, an additional Pronovo registration is needed.' },
      { question: 'How many quotes should I obtain?', answer: 'At least 3 quotes from different companies. PvPro.ch delivers up to 3 vetted quotes within a few days.' },
      { question: 'What to do if the installer is unreachable after installation?', answer: 'Document everything in writing and choose an established company with references. PvPro.ch partners all have at least 3 years of trading history and local presence.' },
      { question: 'Are there bad actors in the solar industry?', answer: 'Unfortunately yes. Common warning signs: no local company, no written quote, pressure for immediate signature, missing certification proof. Via PvPro.ch you only receive vetted companies.' },
    ],
  },

  // ─── INSTALLATEUR WÄHLEN (IT) ────────────────────────────────────────────────
  {
    slug: 'richtigen-solarinstallateur-schweiz-waehlen',
    locale: 'it',
    title: 'Scegliere il giusto installatore solare in Svizzera: 7 criteri fondamentali',
    metaDescription: "7 criteri per scegliere il miglior installatore solare in Svizzera. Certificazioni, referenze, garanzie e come PvPro.ch semplifica il confronto.",
    image: '/images/solarinstallateure-offerte-beratung.webp',
    date: '18 febbraio 2026',
    readMin: 4,
    tag: 'Guida',
    intro: "La scelta dell'installatore è la decisione più importante nel tuo progetto solare – più importante del prezzo. Un cattivo installatore ti costerà di più a lungo termine di quanto ti faccia risparmiare un'offerta economica. Ecco i 7 criteri decisivi.",
    sections: [
      {
        heading: '1–3: Qualifiche, certificazioni ed esperienza',
        content: ["Richiedi sempre la prova di una qualifica riconosciuta. L'installatore deve essere iscritto nel registro competente e avere un'esperienza comprovata con impianti della tua dimensione."],
        bullets: ["Elettricista con iscrizione nel registro ufficiale", "Registrazione Pronovo per la gestione della RU", "Almeno 20 impianti di riferimento", "Esperienza con i gestori di rete locali"],
        highlight: "Solo gli installatori registrati possono richiedere la RU – verificalo sempre.",
      },
      {
        heading: '4–5: Offerta, pianificazione e garanzie',
        content: ["Un buon preventivo contiene sempre: piano sistema dettagliato, previsione di produzione, lista dei componenti con produttori, garanzie di installazione e materiale separate."],
        bullets: ["Previsione di produzione con e senza batteria"],
      },
      {
        heading: '6–7: Presenza locale e servizio post-vendita',
        content: ["Preferisci installatori locali con sede nel tuo Cantone che possono rispondere rapidamente alle richieste di assistenza. Un'azienda a 200 km risponderà lentamente in caso di problemi.", "Chiedi esplicitamente del servizio post-vendita: chi viene per la manutenzione annuale? Per quanto tempo è raggiungibile il referente?"],
        bullets: ["Azienda nel tuo Cantone", "Manutenzione annuale offerta", "Referente raggiungibile dopo l'installazione", "Clienti di riferimento nel tuo comune"],
      },
    ],
    ctaHeading: "Confronta ora fino a 3 preventivi verificati",
    ctaText: "PvPro.ch verifica ogni installatore secondo questi 7 criteri. Ricevi solo preventivi da aziende qualificate e locali.",
    ctaButton: 'Richiedi preventivo gratuito',
    formUrl: '/it/richiesta',
    relatedSlugs: ['foerderungen-photovoltaik-2026', 'roi-photovoltaik-schweiz', 'solaranlage-winter-schweiz'],
    faqs: [
      { question: "Quali certificazioni sono obbligatorie per gli installatori solari in Svizzera?", answer: "L'installatore deve essere iscritto nel registro elettrico competente secondo l'OIBT. Per la richiesta della RU è necessaria anche un'iscrizione presso Pronovo." },
      { question: "Quanti preventivi dovrei richiedere?", answer: "Almeno 3 preventivi da aziende diverse. PvPro.ch ti fornisce fino a 3 preventivi verificati in pochi giorni." },
      { question: "Cosa fare se l'installatore non è più raggiungibile dopo l'installazione?", answer: "Documenta tutto per iscritto e scegli un'azienda affermata con referenze. I partner PvPro.ch hanno tutti almeno 3 anni di attività e presenza locale." },
      { question: "Ci sono operatori scorretti nel settore solare?", answer: "Purtroppo sì. Segnali di allarme comuni: nessuna azienda locale, nessun preventivo scritto, pressione per firma immediata, mancanza di prove di certificazione. Tramite PvPro.ch ricevi solo aziende verificate." },
    ],
  },

  // ─── EIGENVERBRAUCH (DE) ─────────────────────────────────────────────────────
  {
    slug: 'eigenverbrauch-optimieren-solar',
    locale: 'de',
    title: 'Eigenverbrauch maximieren: So nutzen Sie Ihre Solarenergie optimal',
    metaDescription: "Strategien zur Maximierung des Eigenverbrauchs einer Solaranlage in der Schweiz.",
    image: '/images/solar-energieertrag-tablet-chalet.webp',
    date: '10. Februar 2026',
    readMin: 5,
    tag: 'Tipps',
    intro: `Der Eigenverbrauch ist der Schlüssel zur Rentabilität Ihrer Solaranlage. Mit cleveren Strategien können Sie ${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withStorage, 'de')}% Ihrer Solarenergie selbst nutzen.`,
    sections: [
      {
        heading: 'Warum Eigenverbrauch so wichtig ist',
        content: ['Jeder Prozentpunkt mehr Eigenverbrauch verbessert Ihren ROI deutlich.'],
        stats: [{ label: 'Eigenverbrauch ohne Speicher', value: `${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, 'de')}%` }, { label: 'Eigenverbrauch mit Speicher', value: `${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withStorage, 'de')}%` }],
      },
      {
        heading: 'Strategie 1: Zeitgesteuerte Geräte verschieben',
        content: ['Spülmaschine, Waschmaschine und Wäschetrockner verbrauchen viel Strom – und lassen sich problemlos auf die Mittagsstunden (11–15 Uhr) programmieren, wenn die Solarproduktion am höchsten ist. Moderne Geräte mit Timer oder Smart-Home-Steuerung machen dies einfach.'],
        bullets: ['Waschmaschine: auf 12–14 Uhr stellen', 'Spülmaschine: nach dem Mittagessen', 'Trockner: im Anschluss an die Waschmaschine', 'Brauchwasser-Erwärmung: tagsüber boosten'],
      },
      {
        heading: 'Strategie 2: Wärmepumpe und E-Auto integrieren',
        content: [`Eine Wärmepumpe und ein Elektroauto können den Eigenverbrauch ohne Speicher in den typischen Bereich von ${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, 'de')}% bringen, wenn sie gezielt während der Solarproduktion betrieben werden.`, 'Smarte Ladesteuerungen (z.B. myEnergi zappi) laden das Auto nur dann, wenn genug Solarstrom vorhanden ist. Wärmepumpen mit Solar-Integration heizen den Speicher tagsüber auf.'],
        bullets: ['Smart-Ladestation: nur laden wenn Sonne scheint', 'Luft-Wasser-WP kompatibel mit allen Solaranlagen'],
      },
      {
        heading: 'Strategie 3: Lokale Elektrizitätsgemeinschaft (LEG)',
        content: ['Ab 2026 können Sie Ihren Überschussstrom direkt an Nachbarn im selben Gebiet verkaufen. In einer LEG erhalten Sie mehr als den Einspeisetarif und Ihre Nachbarn zahlen weniger als den Netzpreis – eine Win-Win-Situation.'],
        bullets: ['Gründung über den lokalen Netzbetreiber', 'Besonders attraktiv in Mehrfamilienhäusern und Siedlungen'],
      },
    ],
    ctaHeading: 'Maximale Eigenverbrauchsoptimierung – jetzt Offerte holen',
    ctaText: 'PvPro.ch-Installateure planen von Anfang an auf maximalen Eigenverbrauch. Kostenlose Beratung und Offerte.',
    ctaButton: 'Jetzt kostenlose Offerte anfordern',
    formUrl: '/anfrage',
    relatedSlugs: ['batteriespeicher-solaranlage-lohnt-sich', 'roi-photovoltaik-schweiz', 'foerderungen-photovoltaik-2026'],
    faqs: [
      { question: 'Was ist ein realistischer Eigenverbrauch ohne Speicher?', answer: `Typischerweise ${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, 'de')}% für einen normalen Haushalt.` },
      { question: 'Lohnt sich ein Heimspeicher nur wegen des Eigenverbrauchs?', answer: 'In den meisten Fällen ja, wenn Sie einen hohen Abend- und Nachtverbrauch haben. Wenn Sie ein E-Auto oder eine Wärmepumpe haben, kann der Eigenverbrauch ohne Speicher bereits sehr hoch sein.' },
      { question: 'Wie funktioniert eine Lokale Elektrizitätsgemeinschaft (LEG)?', answer: 'Nachbarn schliessen sich zusammen und teilen Solarstrom untereinander. Die Gründung erfolgt über den lokalen Netzbetreiber.' },
      { question: 'Können Smart-Home-Systeme den Eigenverbrauch automatisch optimieren?', answer: 'Ja. Systeme wie Fronius Solar.web, SMA Sunny Home Manager oder Loxone können Geräte automatisch steuern und den Eigenverbrauch ohne manuellen Aufwand maximieren.' },
    ],
  },

  // ─── EIGENVERBRAUCH (FR) ─────────────────────────────────────────────────────
  {
    slug: 'eigenverbrauch-optimieren-solar',
    locale: 'fr',
    title: "Maximiser l'autoconsommation: comment utiliser au mieux votre énergie solaire",
    metaDescription: `Stratégies pour maximiser l'autoconsommation d'une installation solaire en Suisse. De la programmation temporelle aux CLE – comment utiliser jusqu'à ${factNumber(ECONOMIC_FACTS.selfConsumptionPercent.withStorage.max)}% soi-même.`,
    image: '/images/solar-energieertrag-tablet-chalet.webp',
    date: '10 février 2026',
    readMin: 5,
    tag: 'Conseils',
    intro: `L'autoconsommation est la clé de la rentabilité de votre installation solaire. Avec les bonnes stratégies, vous pouvez utiliser vous-même ${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withStorage, 'fr')}% de votre énergie solaire.`,
    sections: [
      {
        heading: "Pourquoi l'autoconsommation est si importante",
        content: ["Chaque point de pourcentage d'autoconsommation supplémentaire améliore votre ROI."],
        stats: [{ label: 'Autoconsommation sans batterie', value: `${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, 'fr')}%` }, { label: 'Autoconsommation avec batterie', value: `${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withStorage, 'fr')}%` }],
      },
      {
        heading: 'Stratégie 1: Décaler les appareils programmables',
        content: ["Lave-vaisselle, lave-linge et sèche-linge consomment beaucoup – et peuvent facilement être programmés aux heures de pointe solaire (11h–15h). Les appareils modernes avec minuterie ou domotique rendent cela simple."],
        bullets: ["Lave-linge: programmer à 12h–14h", "Lave-vaisselle: après le repas de midi", "Sèche-linge: à la suite du lave-linge", "Chauffe-eau: boost pendant les heures solaires"],
      },
      {
        heading: 'Stratégie 2: Intégrer pompe à chaleur et voiture électrique',
        content: [`Une pompe à chaleur et une voiture électrique peuvent porter l'autoconsommation sans batterie dans la plage typique de ${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, 'fr')}% lorsqu'elles fonctionnent pendant la production solaire.`, "Les bornes de recharge intelligentes (ex. myEnergi zappi) ne chargent que lorsqu'il y a suffisamment d'énergie solaire disponible."],
        bullets: ["Borne de recharge intelligente: charge uniquement au soleil", "PAC air-eau compatible avec toutes les installations solaires"],
      },
      {
        heading: 'Stratégie 3: Communauté Locale d\'Énergie (CLE)',
        content: ["Dès 2026, vous pouvez vendre votre surplus d'électricité directement à des voisins dans la même zone. Dans une CLE, vous recevez plus que le tarif d'injection et vos voisins paient moins que le prix du réseau – une situation gagnant-gagnant."],
        bullets: ["Création via le gestionnaire de réseau local", "Particulièrement attractif dans les immeubles et les quartiers"],
      },
    ],
    ctaHeading: "Autoconsommation maximale – demandez une offre",
    ctaText: "Les installateurs PvPro.ch planifient dès le départ pour une autoconsommation maximale. Conseil gratuit et offre sans engagement.",
    ctaButton: 'Demander une offre gratuite',
    formUrl: '/fr/demande',
    relatedSlugs: ['batteriespeicher-solaranlage-lohnt-sich', 'roi-photovoltaik-schweiz', 'foerderungen-photovoltaik-2026'],
    faqs: [
      { question: "Quel est le taux d'autoconsommation réaliste sans batterie?", answer: `Typiquement ${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, 'fr')}% pour un ménage normal.` },
      { question: "Une batterie est-elle rentable uniquement pour l'autoconsommation?", answer: "Dans la plupart des cas oui, si vous avez une consommation élevée le soir et la nuit. Si vous avez un VE ou une PAC, l'autoconsommation peut déjà être très élevée sans batterie." },
      { question: "Comment fonctionne une Communauté Locale d'Énergie (CLE)?", answer: "Des voisins se regroupent et partagent l'énergie solaire entre eux. La création passe par le gestionnaire de réseau local." },
      { question: "Les systèmes domotiques peuvent-ils optimiser automatiquement l'autoconsommation?", answer: "Oui. Des systèmes comme Fronius Solar.web, SMA Sunny Home Manager ou Loxone peuvent contrôler automatiquement les appareils et maximiser l'autoconsommation sans effort manuel." },
    ],
  },

  // ─── EIGENVERBRAUCH (EN) ─────────────────────────────────────────────────────
  {
    slug: 'eigenverbrauch-optimieren-solar',
    locale: 'en',
    title: 'Maximising self-consumption: how to get the most from your solar energy',
    metaDescription: `Strategies to maximise solar self-consumption in Switzerland. From timer-controlled appliances to Local Energy Communities – how to use up to ${factNumber(ECONOMIC_FACTS.selfConsumptionPercent.withStorage.max)}% yourself.`,
    image: '/images/solar-energieertrag-tablet-chalet.webp',
    date: 'February 10, 2026',
    readMin: 5,
    tag: 'Tips',
    intro: `Self-consumption is the key to solar profitability. With smart strategies, you can use ${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withStorage, 'en')}% of your solar energy yourself.`,
    sections: [
      {
        heading: 'Why self-consumption matters so much',
        content: ['Every additional percentage point of self-consumption improves the economics of the system.'],
        stats: [{ label: 'Self-consumption without storage', value: `${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, 'en')}%` }, { label: 'Self-consumption with storage', value: `${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withStorage, 'en')}%` }],
      },
      {
        heading: 'Strategy 1: Shift programmable appliances',
        content: ['Dishwasher, washing machine and tumble dryer use a lot of electricity – and can easily be programmed to run during peak solar hours (11am–3pm). Modern appliances with timers or smart home controls make this simple.'],
        bullets: ['Washing machine: set to 12pm–2pm', 'Dishwasher: after lunch', 'Tumble dryer: right after the washing machine', 'Hot water: boost during solar hours'],
      },
      {
        heading: 'Strategy 2: Integrate heat pump and EV',
        content: [`A heat pump and an electric vehicle can move self-consumption without storage into the typical ${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, 'en')}% range when operated during solar production.`, 'Smart chargers (e.g. myEnergi zappi) only charge when sufficient solar electricity is available.'],
        bullets: ['EV charged on solar: savings compared with grid electricity', 'Heat pump at maximum during day: use more of the solar production', 'Smart charger: charges when solar production is available', 'Air-source heat pump compatible with all solar systems'],
      },
      {
        heading: 'Strategy 3: Local Energy Community (LEC)',
        content: ['From 2026, you can sell your surplus electricity directly to neighbours in the same area. In an LEC, you receive more than the feed-in tariff and your neighbours pay less than the grid price – a win-win.'],
        bullets: ['Setup through the local grid operator', 'Especially attractive in apartment buildings and housing estates'],
      },
    ],
    ctaHeading: 'Maximum self-consumption optimisation – request a quote',
    ctaText: 'PvPro.ch installers plan for maximum self-consumption from the start. Free consultation and quote.',
    ctaButton: 'Request a free quote',
    formUrl: '/en/request',
    relatedSlugs: ['batteriespeicher-solaranlage-lohnt-sich', 'roi-photovoltaik-schweiz', 'foerderungen-photovoltaik-2026'],
    faqs: [
      { question: 'What is a realistic self-consumption rate without a battery?', answer: `Typically ${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, 'en')}% for a normal household.` },
      { question: 'Is a home battery worth it purely for self-consumption?', answer: 'In most cases yes, if you have high evening and night consumption. If you have an EV or heat pump, self-consumption can already be very high without a battery.' },
      { question: 'How does a Local Energy Community (LEC) work?', answer: 'Neighbours group together and share solar electricity between them. Setup is handled through the local grid operator.' },
      { question: 'Can smart home systems automatically optimise self-consumption?', answer: 'Yes. Systems like Fronius Solar.web, SMA Sunny Home Manager or Loxone can automatically control appliances and maximise self-consumption without manual effort.' },
    ],
  },

  // ─── EIGENVERBRAUCH (IT) ─────────────────────────────────────────────────────
  {
    slug: 'eigenverbrauch-optimieren-solar',
    locale: 'it',
    title: "Massimizzare l'autoconsumo: come sfruttare al meglio la tua energia solare",
    metaDescription: `Strategie per massimizzare l'autoconsumo di un impianto solare in Svizzera. Dalla programmazione temporale alle CEL – come consumare fino all'${factNumber(ECONOMIC_FACTS.selfConsumptionPercent.withStorage.max)}% da soli.`,
    image: '/images/solar-energieertrag-tablet-chalet.webp',
    date: '10 febbraio 2026',
    readMin: 5,
    tag: 'Consigli',
    intro: `L'autoconsumo è la chiave della redditività del tuo impianto solare. Con le giuste strategie puoi utilizzare da solo il ${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withStorage, 'it')}% della tua energia solare.`,
    sections: [
      {
        heading: "Perché l'autoconsumo è così importante",
        content: ["Ogni punto percentuale aggiuntivo di autoconsumo migliora significativamente il tuo ROI."],
        stats: [{ label: 'Autoconsumo senza accumulo', value: `${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, 'it')}%` }, { label: 'Autoconsumo con accumulo', value: `${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withStorage, 'it')}%` }],
      },
      {
        heading: 'Strategia 1: Spostare gli apparecchi programmabili',
        content: ["Lavastoviglie, lavatrice e asciugatrice consumano molto – e possono facilmente essere programmati nelle ore di picco solare (11–15). I moderni apparecchi con timer o domotica rendono questo semplice."],
        bullets: ["Lavatrice: impostare alle 12–14", "Lavastoviglie: dopo il pranzo", "Asciugatrice: subito dopo la lavatrice", "Acqua calda sanitaria: boost durante le ore solari"],
      },
      {
        heading: "Strategia 2: Integrare pompa di calore e auto elettrica",
        content: [`Una pompa di calore e un'auto elettrica possono portare l'autoconsumo senza accumulo nella fascia tipica del ${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, 'it')}% se funzionano durante la produzione solare.`, "Le wallbox intelligenti (es. myEnergi zappi) caricano solo quando è disponibile sufficiente energia solare."],
        bullets: ["Wallbox intelligente: carica solo quando c'è il sole", "Pompa di calore aria-acqua compatibile con tutti gli impianti solari"],
      },
      {
        heading: "Strategia 3: Comunità Elettrica Locale (CEL)",
        content: ["Dal 2026 puoi vendere la tua eccedenza di energia direttamente ai vicini nella stessa zona. In una CEL ricevi di più rispetto alla tariffa di immissione e i tuoi vicini pagano meno del prezzo di rete – una situazione win-win."],
        bullets: ["Istituzione tramite il gestore di rete locale", "Particolarmente attrattivo nei condomini e nei quartieri"],
      },
    ],
    ctaHeading: "Massimizzazione autoconsumo – richiedi un preventivo",
    ctaText: "Gli installatori PvPro.ch pianificano fin dall'inizio per un autoconsumo massimo. Consulenza gratuita e preventivo senza impegno.",
    ctaButton: 'Richiedi preventivo gratuito',
    formUrl: '/it/richiesta',
    relatedSlugs: ['batteriespeicher-solaranlage-lohnt-sich', 'roi-photovoltaik-schweiz', 'foerderungen-photovoltaik-2026'],
    faqs: [
      { question: "Qual è un tasso di autoconsumo realistico senza batteria?", answer: `Tipicamente il ${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, 'it')}% per una famiglia normale.` },
      { question: "Una batteria domestica conviene solo per l'autoconsumo?", answer: "Nella maggior parte dei casi sì, se hai un alto consumo serale e notturno. Se hai un'auto elettrica o una pompa di calore, l'autoconsumo può già essere molto alto senza batteria." },
      { question: "Come funziona una Comunità Elettrica Locale (CEL)?", answer: "I vicini si raggruppano e condividono l'energia solare tra loro. Istituzione tramite il gestore di rete locale." },
      { question: "I sistemi domotici possono ottimizzare automaticamente l'autoconsumo?", answer: "Sì. Sistemi come Fronius Solar.web, SMA Sunny Home Manager o Loxone possono controllare automaticamente gli apparecchi e massimizzare l'autoconsumo senza sforzo manuale." },
    ],
  },

  // ─── ROI (DE) ────────────────────────────────────────────────────────────────
  {
    slug: 'roi-photovoltaik-schweiz',
    locale: 'de',
    title: 'ROI einer Solaranlage in der Schweiz: Wann amortisiert sich die Investition?',
    metaDescription: 'Wie lange dauert die Amortisation einer Solaranlage in der Schweiz? ROI-Berechnung, Einflussfaktoren und kantonale Unterschiede für 2026.',
    image: '/images/solar-monitoring-tablet-haus.webp',
    date: '2. Februar 2026',
    readMin: 8,
    tag: 'Finanzen',
    intro: 'Wie lange, bis sich eine Solaranlage in der Schweiz wirklich rechnet? Diese Frage ist komplexer als sie scheint – denn der ROI variiert je nach Kanton, Systemgrösse und Nutzungsweise erheblich. Wir rechnen es durch.',
    sections: [
      {
        heading: 'Wie berechnet sich der ROI einer Solaranlage?',
        content: ['Der Return on Investment (ROI) einer Solaranlage ergibt sich aus: (Jährliche Einsparungen + Einspeisevergütung) ÷ (Investitionskosten – Förderungen). Die Amortisationszeit in Jahren ist der Kehrwert des jährlichen ROI.'],
        stats: [{ label: 'Amortisation Mittelland', value: `${factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'de')} Jahre` }, { label: 'Amortisation Tessin und Wallis', value: `${factRange(ECONOMIC_FACTS.systemPaybackYears.ticinoValais, 'de')} Jahre` }],
      },
      {
        heading: 'Einflussfaktoren: Was den ROI am meisten bestimmt',
        content: ['Die drei wichtigsten Faktoren sind: Produktion am Standort, Eigenverbrauchsquote und lokaler Strompreis. Ein Haushalt in Lugano mit Wärmepumpe hat einen völlig anderen ROI als ein Haushalt in St. Gallen ohne Speicher.'],
        bullets: ['Produktion am Standort', `Eigenverbrauch ohne Speicher: ${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, 'de')}%`, `Eigenverbrauch mit Speicher: ${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withStorage, 'de')}%`, `Medianstrompreis: ${factNumber(ECONOMIC_FACTS.electricityMedianCtPerKwh)} Rp./kWh`, 'Förderung gemäss den geltenden Programmen'],
      },
      {
        heading: 'ROI-Vergleich nach Kantonen 2026',
        content: [`Die Amortisationszeit hängt vom Standort, der Produktion, dem Eigenverbrauch und dem Strompreis ab. Für das Mittelland gelten ${factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'de')} Jahre, für das Tessin und Wallis ${factRange(ECONOMIC_FACTS.systemPaybackYears.ticinoValais, 'de')} Jahre.`],
        bullets: [`Mittelland: ${factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'de')} Jahre`, `Tessin und Wallis: ${factRange(ECONOMIC_FACTS.systemPaybackYears.ticinoValais, 'de')} Jahre`],
        highlight: 'Der Standort und der Eigenverbrauch bestimmen die Amortisationszeit.',
      },
      {
        heading: 'Was passiert nach der Amortisation?',
        content: [`Solaranlagen haben eine Lebensdauer von ${factRange(ECONOMIC_FACTS.moduleLifetimeYears, 'de')} Jahren.`],
      },
    ],
    ctaHeading: 'ROI Ihrer Anlage berechnen – kostenlose Analyse',
    ctaText: 'Unsere Partnerinstallateure berechnen den genauen ROI für Ihre spezifische Situation. Kostenlose Beratung und Offerte.',
    ctaButton: 'Jetzt kostenlose Offerte anfordern',
    formUrl: '/anfrage',
    relatedSlugs: ['foerderungen-photovoltaik-2026', 'eigenverbrauch-optimieren-solar', 'batteriespeicher-solaranlage-lohnt-sich'],
    faqs: [
      { question: 'Wie lange dauert die Amortisation einer Solaranlage in der Schweiz?', answer: `Im Mittelland dauert sie typischerweise ${factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'de')} Jahre, im Tessin und Wallis ${factRange(ECONOMIC_FACTS.systemPaybackYears.ticinoValais, 'de')} Jahre. Die konkrete Zeit hängt von Systemgrösse, Standort und Nutzung ab.` },
      { question: 'Welchen Einfluss hat der Strompreis auf den ROI?', answer: `Einen grossen. Die Schweizer Medianstromkosten liegen bei ${factNumber(ECONOMIC_FACTS.electricityMedianCtPerKwh)} Rp./kWh. Die kantonalen Tarife unterscheiden sich; die Quelle ist ElCom 2026.` },
      { question: 'Verbessert sich der ROI mit einem Batteriespeicher?', answer: 'Oft ja, wenn Sie einen hohen Abend-/Nachtverbrauch haben.' },
      { question: 'Steigert eine Solaranlage den Immobilienwert?', answer: 'Ja. Besonders in energiebewussten Kantonen wie Zürich oder Genf ist der Effekt messbar.' },
    ],
  },

  // ─── ROI (FR) ────────────────────────────────────────────────────────────────
  {
    slug: 'roi-photovoltaik-schweiz',
    locale: 'fr',
    title: "ROI d'une installation solaire en Suisse: quand l'investissement est-il rentabilisé?",
    metaDescription: "Combien de temps faut-il pour qu'une installation solaire en Suisse s'amortisse? Calcul du ROI, facteurs d'influence et différences cantonales pour 2026.",
    image: '/images/solar-monitoring-tablet-haus.webp',
    date: '2 février 2026',
    readMin: 8,
    tag: 'Finances',
    intro: "Combien de temps avant qu'une installation solaire en Suisse soit vraiment rentable? Cette question est plus complexe qu'elle n'y paraît – car le ROI varie considérablement selon le canton, la taille du système et le mode d'utilisation. Voici les chiffres.",
    sections: [
      {
        heading: "Comment se calcule le ROI d'une installation solaire?",
        content: ["Le retour sur investissement (ROI) d'une installation solaire résulte de: (Économies annuelles + rémunération injection) ÷ (Coûts d'investissement – subventions). La durée d'amortissement est l'inverse du ROI annuel."],
        stats: [{ label: 'Amortissement Plateau', value: `${factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'fr')} ans` }, { label: 'Amortissement Tessin et Valais', value: `${factRange(ECONOMIC_FACTS.systemPaybackYears.ticinoValais, 'fr')} ans` }],
      },
      {
        heading: "Facteurs d'influence: ce qui détermine le plus le ROI",
        content: ["Les trois facteurs les plus importants sont: (1) la production sur place, (2) le taux d'autoconsommation et (3) le prix local de l'électricité. Un ménage à Lugano avec une pompe à chaleur a un ROI complètement différent d'un ménage à St-Gall sans stockage."],
        bullets: ["Production sur place", `Autoconsommation sans batterie: ${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, 'fr')}%`, `Autoconsommation avec batterie: ${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withStorage, 'fr')}%`, `Prix médian de l'électricité: ${factNumber(ECONOMIC_FACTS.electricityMedianCtPerKwh)} ct./kWh`, "Subventions selon les programmes applicables"],
      },
      {
        heading: 'Comparaison ROI par canton en 2026',
        content: [`L'amortissement dépend du lieu, de la production, de l'autoconsommation et du prix de l'électricité. Sur le Plateau, il faut généralement compter ${factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'fr')} ans, et au Tessin et en Valais ${factRange(ECONOMIC_FACTS.systemPaybackYears.ticinoValais, 'fr')} ans.`],
        bullets: [`Plateau: ${factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'fr')} ans`, `Tessin et Valais: ${factRange(ECONOMIC_FACTS.systemPaybackYears.ticinoValais, 'fr')} ans`],
        highlight: "Le lieu et l'autoconsommation déterminent la durée d'amortissement.",
      },
      {
        heading: "Que se passe-t-il après l'amortissement?",
        content: [`Les modules solaires ont une durée de vie de ${factRange(ECONOMIC_FACTS.moduleLifetimeYears, 'fr')} ans.`],
      },
    ],
    ctaHeading: "Calculez le ROI de votre installation – analyse gratuite",
    ctaText: "Nos installateurs partenaires calculent le ROI exact pour votre situation spécifique. Conseil gratuit et offre sans engagement.",
    ctaButton: 'Demander une offre gratuite',
    formUrl: '/fr/demande',
    relatedSlugs: ['foerderungen-photovoltaik-2026', 'eigenverbrauch-optimieren-solar', 'batteriespeicher-solaranlage-lohnt-sich'],
    faqs: [
      { question: "Quelle est la durée d'amortissement d'une installation solaire en Suisse?", answer: `Sur le Plateau, il faut généralement compter ${factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'fr')} ans, et au Tessin et en Valais ${factRange(ECONOMIC_FACTS.systemPaybackYears.ticinoValais, 'fr')} ans.` },
      { question: "Quelle est l'influence du prix de l'électricité sur le ROI?", answer: "Très grande. La hausse des prix de l'électricité améliore automatiquement le ROI des installations existantes." },
      { question: "Le ROI s'améliore-t-il avec une batterie?", answer: "Souvent oui, si vous avez une consommation élevée le soir et la nuit." },
      { question: "Une installation solaire valorise-t-elle le bien immobilier?", answer: "Oui. L'effet est particulièrement mesurable dans des zones soucieuses de l'énergie comme Genève ou Lausanne." },
    ],
  },

  // ─── ROI (EN) ────────────────────────────────────────────────────────────────
  {
    slug: 'roi-photovoltaik-schweiz',
    locale: 'en',
    title: 'ROI of a solar system in Switzerland: when does the investment pay off?',
    metaDescription: 'How long does it take for a solar system in Switzerland to pay for itself? ROI calculation, influencing factors and cantonal differences for 2026.',
    image: '/images/solar-monitoring-tablet-haus.webp',
    date: 'February 2, 2026',
    readMin: 8,
    tag: 'Finance',
    intro: 'How long until a solar system in Switzerland truly pays off? This question is more complex than it seems – the ROI varies considerably by canton, system size and usage pattern. Here are the numbers.',
    sections: [
      {
        heading: 'How is the ROI of a solar system calculated?',
        content: ['The return on investment (ROI) of a solar system is: (Annual savings + feed-in income) ÷ (Investment costs – subsidies). The payback period in years is the reciprocal of the annual ROI.'],
        stats: [{ label: 'Swiss Plateau payback', value: `${factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'en')} years` }, { label: 'Ticino and Valais payback', value: `${factRange(ECONOMIC_FACTS.systemPaybackYears.ticinoValais, 'en')} years` }],
      },
      {
        heading: 'Key factors: what determines ROI most',
        content: ['The three most important factors are: (1) production at the site, (2) self-consumption rate and (3) local electricity price. A household in Lugano with a heat pump has a completely different ROI than one in St. Gallen without storage.'],
        bullets: ['Production at the site', `Self-consumption without storage: ${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, 'en')}%`, `Self-consumption with storage: ${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withStorage, 'en')}%`, `Median electricity price: ${factNumber(ECONOMIC_FACTS.electricityMedianCtPerKwh)} ct/kWh`, 'Subsidies according to the applicable programmes'],
      },
      {
        heading: 'ROI comparison by canton in 2026',
        content: [`Payback depends on the site, production, self-consumption and electricity price. In the Swiss Plateau it typically takes ${factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'en')} years, and in Ticino and Valais ${factRange(ECONOMIC_FACTS.systemPaybackYears.ticinoValais, 'en')} years.`],
        bullets: [`Swiss Plateau: ${factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'en')} years`, `Ticino and Valais: ${factRange(ECONOMIC_FACTS.systemPaybackYears.ticinoValais, 'en')} years`],
        highlight: 'The site and self-consumption determine the payback period.',
      },
      {
        heading: 'What happens after payback?',
        content: [`Solar modules have a lifetime of ${factRange(ECONOMIC_FACTS.moduleLifetimeYears, 'en')} years.`],
      },
    ],
    ctaHeading: 'Calculate your system ROI – free analysis',
    ctaText: 'Our partner installers calculate the exact ROI for your specific situation. Free consultation and quote.',
    ctaButton: 'Request a free quote',
    formUrl: '/en/request',
    relatedSlugs: ['foerderungen-photovoltaik-2026', 'eigenverbrauch-optimieren-solar', 'batteriespeicher-solaranlage-lohnt-sich'],
    faqs: [
      { question: 'How long does a solar system take to pay off in Switzerland?', answer: `In the Swiss Plateau it typically takes ${factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'en')} years, and in Ticino and Valais ${factRange(ECONOMIC_FACTS.systemPaybackYears.ticinoValais, 'en')} years. The exact period depends on system size, site and usage.` },
      { question: 'How much does electricity price affect ROI?', answer: `Significantly. The Swiss median electricity price is ${factNumber(ECONOMIC_FACTS.electricityMedianCtPerKwh)} ct/kWh. Cantonal tariffs differ; the source is ElCom 2026.` },
      { question: 'Does ROI improve with a battery?', answer: 'Often yes, if you have high evening and night consumption.' },
      { question: 'Does a solar system increase property value?', answer: 'Yes. The effect is particularly measurable in energy-conscious cantons like Zurich or Geneva.' },
    ],
  },

  // ─── ROI (IT) ────────────────────────────────────────────────────────────────
  {
    slug: 'roi-photovoltaik-schweiz',
    locale: 'it',
    title: "ROI di un impianto solare in Svizzera: quando si ammortizza l'investimento?",
    metaDescription: "Quanto tempo ci vuole perché un impianto solare in Svizzera si ripaghi? Calcolo del ROI, fattori di influenza e differenze cantonali per il 2026.",
    image: '/images/solar-monitoring-tablet-haus.webp',
    date: '2 febbraio 2026',
    readMin: 8,
    tag: 'Finanze',
    intro: "Quanto tempo prima che un impianto solare in Svizzera convenga davvero? Questa domanda è più complessa di quanto sembri – il ROI varia notevolmente per cantone, dimensione del sistema e modalità di utilizzo. Ecco i numeri.",
    sections: [
      {
        heading: "Come si calcola il ROI di un impianto solare?",
        content: ["Il ritorno sull'investimento (ROI) di un impianto solare è: (Risparmio annuale + proventi da immissione) ÷ (Costi di investimento – incentivi). Il periodo di ammortamento in anni è il reciproco del ROI annuale."],
        stats: [{ label: 'Ammortamento Altopiano', value: `${factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'it')} anni` }, { label: 'Ammortamento Ticino e Vallese', value: `${factRange(ECONOMIC_FACTS.systemPaybackYears.ticinoValais, 'it')} anni` }, { label: 'Durata impianto', value: `${factRange(ECONOMIC_FACTS.moduleLifetimeYears, 'it')} anni` }],
      },
      {
        heading: "Fattori chiave: cosa determina di più il ROI",
        content: ["I tre fattori più importanti sono: (1) produzione sul posto, (2) tasso di autoconsumo e (3) prezzo locale dell'energia. Una famiglia a Lugano con una pompa di calore ha un ROI completamente diverso da una a San Gallo senza accumulo."],
        bullets: ["Produzione sul posto", `Autoconsumo senza accumulo: ${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, 'it')}%`, `Autoconsumo con accumulo: ${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withStorage, 'it')}%`, `Prezzo mediano dell'energia: ${factNumber(ECONOMIC_FACTS.electricityMedianCtPerKwh)} ct./kWh`, "Incentivi secondo i programmi applicabili"],
      },
      {
        heading: 'Confronto ROI per cantone nel 2026',
        content: [`L'ammortamento dipende dal luogo, dalla produzione, dall'autoconsumo e dal prezzo dell'energia. Sull'Altopiano richiede in genere ${factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'it')} anni, in Ticino e Vallese ${factRange(ECONOMIC_FACTS.systemPaybackYears.ticinoValais, 'it')} anni.`],
        bullets: [`Altopiano: ${factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'it')} anni`, `Ticino e Vallese: ${factRange(ECONOMIC_FACTS.systemPaybackYears.ticinoValais, 'it')} anni`],
        highlight: "Il luogo e l'autoconsumo determinano il periodo di ammortamento.",
      },
      {
        heading: "Cosa succede dopo l'ammortamento?",
        content: [`I moduli solari hanno una durata di ${factRange(ECONOMIC_FACTS.moduleLifetimeYears, 'it')} anni.`],
      },
    ],
    ctaHeading: "Calcola il ROI del tuo impianto – analisi gratuita",
    ctaText: "I nostri installatori partner calcolano il ROI esatto per la tua situazione specifica. Consulenza gratuita e preventivo senza impegno.",
    ctaButton: 'Richiedi preventivo gratuito',
    formUrl: '/it/richiesta',
    relatedSlugs: ['foerderungen-photovoltaik-2026', 'eigenverbrauch-optimieren-solar', 'batteriespeicher-solaranlage-lohnt-sich'],
    faqs: [
      { question: "Quanto tempo ci vuole perché un impianto solare si ammortizzi in Svizzera?", answer: `Sull'Altopiano richiede in genere ${factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'it')} anni, in Ticino e Vallese ${factRange(ECONOMIC_FACTS.systemPaybackYears.ticinoValais, 'it')} anni.` },
      { question: "Quanto influisce il prezzo dell'energia sul ROI?", answer: "Moltissimo. L'aumento dei prezzi dell'energia migliora automaticamente il ROI degli impianti esistenti." },
      { question: "Il ROI migliora con una batteria?", answer: "Spesso sì, se hai un alto consumo serale e notturno." },
      { question: "Un impianto solare aumenta il valore dell'immobile?", answer: "Sì. L'effetto è particolarmente misurabile in zone attente all'energia come Zurigo o Ginevra." },
    ],
  },


  // ─── LOHNT SICH (DE) ─────────────────────────────────────────────────────
  {
    slug: 'lohnt-sich-solaranlage-schweiz-2026',
    locale: 'de',
    title: 'Lohnt sich eine Solaranlage in der Schweiz 2026?',
    metaDescription: 'Lohnt sich eine Solaranlage in der Schweiz 2026 wirklich? Kosten, Förderung, Amortisation und Vergleich nach Kanton — mit echten Zahlen und ohne Schönfärberei.',
    image: '/images/bauernhaus-solaranlage-abend-eiger.webp',
    date: '3. Mai 2026',
    readMin: 10,
    tag: 'Ratgeber',
    intro: "Lohnt sich eine Solaranlage in der Schweiz 2026 wirklich? Ja — aber nicht für jeden gleich. Ob sich eine Solaranlage lohnt, hängt von Ihrem Kanton, Ihrem Stromverbrauch, Ihrer Dachausrichtung und davon ab, wie klug Sie die verfügbaren Förderungen nutzen. Nach drei Jahren Erfahrung mit über 1'000 vermittelten Anlagen in der ganzen Schweiz haben wir eine klare Antwort — mit echten Zahlen, ohne Schönfärberei.",
    sections: [
      {
        heading: 'Lohnt sich eine Solaranlage 2026 — die kurze Antwort',
        content: [
          "Lohnt sich eine Solaranlage in der Schweiz 2026? Ja, und zwar mehr als je zuvor. Drei Entwicklungen machen 2026 zum besten Jahr, um in eine Solaranlage zu investieren:",
          "Zweitens sind die Strompreise in der Schweiz gestiegen.",
          "Drittens läuft die steuerliche Absetzbarkeit Ende 2027 aus. Wer wartet, verliert diesen Vorteil.",
        ],
        stats: [
          { label: 'Typische Amortisation 2026', value: `${factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'de')} Jahre` },
        ],
      },
      {
        heading: 'Wie viel kann ich tatsächlich sparen?',
        content: [
          "So sieht die Rechnung für ein typisches Einfamilienhaus aus:",
          "Nach der Amortisation produziert die Anlage weiterhin Strom und senkt den Netzbezug.",
        ],
        highlight: "Die tatsächliche Rendite hängt von Produktion, Eigenverbrauch, Strompreis und Investitionskosten ab.",
      },
      {
        heading: 'Lohnt sich eine Solaranlage in der Schweiz 2026 je nach Kanton?',
        content: [
          "Die Schweiz ist kein homogenes Land — Produktion, Strompreise und Förderungen variieren stark zwischen den Kantonen. Die Frage, ob sich eine Solaranlage lohnt, hat je nach Wohnort eine andere Antwort.",
        ],
        bullets: [
          `Mittelland: ${factRange(ECONOMIC_FACTS.production.plateauKwhPerKwp, 'de')} kWh pro kWp und Jahr`,
          `Tessin und Wallis: ${factRange(ECONOMIC_FACTS.production.ticinoValaisKwhPerKwp, 'de')} kWh pro kWp und Jahr`,
          "Strompreise: kantonal unterschiedlich → Quelle: ElCom 2026",
        ],
        highlight: "Auch im Mittelland kann sich eine Solaranlage lohnen. Die Amortisation hängt von Produktion, Eigenverbrauch und Strompreis ab.",
      },
      {
        heading: 'Für wen lohnt sich eine Solaranlage besonders?',
        content: [
          "Aus unserer Erfahrung mit über 1'000 Anlagen in der Schweiz lohnt sich eine Solaranlage am meisten für diese Situationen:",
        ],
        bullets: [
          "Hausbesitzer mit hohem Tagesverbrauch: Wer tagsüber zu Hause ist — Homeoffice, Kinder, Pensionierte — verbraucht den Solarstrom direkt.",
          "Haushalte mit Wärmepumpe können Solarstrom gezielt für Heizung und Warmwasser nutzen.",
          "Haushalte mit Elektroauto können den Eigenverbrauch durch Laden während der Solarproduktion erhöhen.",
          "Mehrfamilienhausbesitzer mit ZEV: Ein Zusammenschluss zum Eigenverbrauch erlaubt den direkten Verkauf des Solarstroms an Mieter — das erhöht die Rendite erheblich.",
          "Wer die steuerliche Absetzbarkeit noch nutzen will: Die Möglichkeit läuft Ende 2027 aus.",
        ],
      },
      {
        heading: 'Für wen lohnt sich eine Solaranlage weniger?',
        content: [
          "Ehrlichkeit ist uns wichtig. Lohnt sich eine Solaranlage in der Schweiz 2026 für jeden? Nicht immer gleich stark. Es gibt Situationen, in denen die Wirtschaftlichkeit eingeschränkt ist:",
        ],
        bullets: [
          "Die Amortisationszeit verlängert sich spürbar — eine professionelle Analyse ist besonders wichtig.",
          "Moderne Optimierer und Mikroinverter können helfen, erhöhen aber die Kosten.",
          "Wer in 2–3 Jahren verkauft, profitiert finanziell weniger.",
          "Sehr altes Dach: Wenn das Dach in den nächsten 5–10 Jahren saniert werden muss, sollte man Sanierung und Solaranlage kombinieren. Eine Anlage auf einem maroden Dach ist nicht sinnvoll.",
        ],
      },
      {
        heading: 'Was ändert sich 2026 bei der Förderung?',
        content: [
          "Neue Rückliefervergütung ab Marktpreis: Ab 2026 orientiert sich die Rückliefervergütung am Börsenpreis des Stroms. Im Sommer kann die Vergütung sinken, wenn viele Anlagen gleichzeitig einspeisen.",
          "Steuerliche Absetzbarkeit läuft 2027 aus: Die Möglichkeit, die gesamte Investition als Liegenschaftsunterhalt von der Steuer abzuziehen, gilt nur noch bis Ende 2027. Die Planung und Installation dauert 4–12 Wochen — wer diesen Vorteil nutzen möchte, sollte jetzt handeln.",
          "Neue Lokale Elektrizitätsgemeinschaften (LEG) ab 2026: Hausbesitzer können ihren überschüssigen Solarstrom direkt an Nachbarn verkaufen — ohne gemeinsames Dach. Das eröffnet neue Möglichkeiten für Quartierslösungen und erhöht die Wirtschaftlichkeit für alle Beteiligten.",
        ],
      },
      {
        heading: 'Lohnt sich eine Solaranlage mit oder ohne Batteriespeicher?',
        content: [
          "Eine der häufigsten Fragen, die wir von Schweizer Hausbesitzern erhalten: Lohnt sich eine Solaranlage mit oder ohne Batteriespeicher besser?",
        ],
        bullets: [
          `Ohne Speicher: typischer Eigenverbrauch ${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, 'de')}%`,
          `Mit Speicher: typischer Eigenverbrauch ${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withStorage, 'de')}%`,
        ],
        highlight: "Fazit: Eine Solaranlage ohne Speicher lohnt sich sofort. Ein Speicher lohnt sich dann, wenn der Abendverbrauch hoch ist oder ein E-Auto und eine Wärmepumpe vorhanden sind. Wer eine Anlage plant, sollte den Wechselrichter so wählen, dass ein Speicher später problemlos nachgerüstet werden kann.",
      },
      {
        heading: "Unsere Empfehlung nach 1'000+ vermittelten Anlagen",
        content: [
          "Lohnt sich eine Solaranlage in der Schweiz 2026? Nach drei Jahren Erfahrung und über 1'000 vermittelten Anlagen können wir eines sagen: Der häufigste Fehler ist nicht zu früh zu investieren — sondern zu lange zu warten und dabei Steuervorteil, Förderung und Stromkostenersparnis zu verlieren.",
          "Der zweitgrösste Fehler ist, nur eine einzige Offerte einzuholen. Für die gleiche Anlage variieren die Preise zwischen verschiedenen Installateuren um mehrere tausend Franken.",
          "PvPro.ch vermittelt kostenlos bis zu 3 zertifizierte Installateure aus Ihrem Kanton. In 2 Minuten Formular ausfüllen — und innerhalb von 48 Stunden haben Sie konkrete Angebote zum Vergleichen.",
        ],
      },
    ],
    ctaHeading: 'Jetzt berechnen, ob sich eine Solaranlage für Ihr Dach lohnt',
    ctaText: "Lohnt sich eine Solaranlage in der Schweiz 2026 für Ihr Haus? In 2 Minuten Formular ausfüllen — wir vermitteln Ihnen bis zu 3 kostenlose Offerten von zertifizierten Installateuren aus Ihrem Kanton. Vergleichen Sie und entscheiden Sie frei.",
    ctaButton: 'Kostenlose Offerte anfordern',
    formUrl: '/anfrage',
    relatedSlugs: ['solaranlage-steuerabzug-schweiz-2026', 'solaranlage-waermepumpe-kombinieren-schweiz', 'besten-solarinstallateur-schweiz-finden', 'batteriespeicher-brandgefahr-sicherheit-schweiz', 'roi-photovoltaik-schweiz', 'foerderungen-photovoltaik-2026'],
    relatedPageLinks: [
      { label: 'Förderungen & Einmalvergütung (EIV)', href: '/foerderungen' },
      { label: 'Solaranlage mit Batteriespeicher', href: '/solaranlage-mit-speicher' },
      { label: 'Solaranlage Einfamilienhaus', href: '/solaranlage-einfamilienhaus' },
      { label: 'Solaranlage Mehrfamilienhaus / ZEV', href: '/solaranlage-mehrfamilienhaus' },
      { label: 'Solaranlage Kosten Schweiz', href: '/solaranlage-kosten' },
      { label: 'Kostenloser Solarrechner', href: '/solarrechner' },
      { label: 'Offerten vergleichen', href: '/solaranlage-offerte-einholen' },
    ],
    faqs: [
      { question: 'Lohnt sich eine Solaranlage in der Schweiz 2026 wirklich?', answer: "Ja. Dank gesunkener Modulpreise, gestiegener Strompreise und attraktiver Förderung lohnt sich eine Solaranlage in der Schweiz 2026 mehr als je zuvor." },
      { question: 'Lohnt sich eine Solaranlage in der Schweiz auch bei weniger Sonneneinstrahlung?', answer: `Ja. Im Mittelland liegt die typische Produktion bei ${factRange(ECONOMIC_FACTS.production.plateauKwhPerKwp, 'de')} kWh pro kWp und Jahr. Die Amortisation beträgt dort ${factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'de')} Jahre.` },
      { question: 'Wann amortisiert sich eine Solaranlage in der Schweiz?', answer: `Im Mittelland dauert die Amortisation ${factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'de')} Jahre, im Tessin und Wallis ${factRange(ECONOMIC_FACTS.systemPaybackYears.ticinoValais, 'de')} Jahre.` },
      { question: 'Lohnt sich eine Solaranlage ohne Batteriespeicher?', answer: "Ja. Eine Solaranlage ohne Speicher ist bereits rentabel. Ob er sich lohnt, hängt vom Verbrauchsprofil ab." },
      { question: 'Welcher Kanton in der Schweiz eignet sich am besten für Solarenergie?', answer: `Im Tessin und Wallis liegt die typische Produktion bei ${factRange(ECONOMIC_FACTS.production.ticinoValaisKwhPerKwp, 'de')} kWh pro kWp und Jahr. Im Mittelland sind es ${factRange(ECONOMIC_FACTS.production.plateauKwhPerKwp, 'de')} kWh pro kWp und Jahr.` },
      { question: 'Lohnt sich eine Solaranlage für ein Mehrfamilienhaus?', answer: "Ja, oft sogar besser als für ein Einfamilienhaus. Die grössere Dachfläche ermöglicht eine leistungsstärkere Anlage. Mit einem ZEV (Zusammenschluss zum Eigenverbrauch) kann der Strom direkt an die Mieter verkauft werden — das erhöht die Rendite erheblich." },
      { question: 'Was passiert mit der Steuerabzugsmöglichkeit nach 2027?', answer: "Die Möglichkeit, die Investition als Liegenschaftsunterhalt steuerlich abzuziehen, läuft Ende 2027 aus. Wer noch davon profitieren möchte, sollte die Installation zeitnah planen — denn von der Offerte bis zur Inbetriebnahme vergehen 4–12 Wochen." },
      { question: 'Wie finde ich den günstigsten Installateur in meinem Kanton?', answer: "Indem Sie mindestens 3 Offerten vergleichen. PvPro.ch vermittelt kostenlos bis zu 3 zertifizierte Installateure aus Ihrem Kanton — ohne Werbeanrufe und ohne Verpflichtung." },
    ],
  },

  // ─── LOHNT SICH (FR) ─────────────────────────────────────────────────────
  {
    slug: 'lohnt-sich-solaranlage-schweiz-2026',
    locale: 'fr',
    title: "Vaut-il la peine d'installer des panneaux solaires en Suisse en 2026?",
    metaDescription: "Vaut-il la peine d'investir dans une installation solaire en Suisse en 2026? Coûts, subventions, amortissement et comparaison par canton — avec de vrais chiffres, sans embellissement.",
    image: '/images/bauernhaus-solaranlage-abend-eiger.webp',
    date: '3 mai 2026',
    readMin: 10,
    tag: 'Guide',
    intro: "Vaut-il vraiment la peine d'investir dans une installation solaire en Suisse en 2026? Oui — mais pas de la même manière pour tout le monde. La rentabilité dépend de votre canton, de votre consommation, de l'orientation de votre toit et de la manière dont vous exploitez les subventions disponibles.",
    sections: [
      {
        heading: "Installation solaire 2026 — la réponse courte",
        content: [
          "Vaut-il la peine d'investir dans une installation solaire en Suisse en 2026? Oui, plus que jamais. Trois évolutions font de 2026 la meilleure année pour investir:",
          "Deuxièmement, les prix de l'électricité en Suisse ont augmenté.",
          "Troisièmement, la déductibilité fiscale expire fin 2027. Celui qui investit maintenant peut encore déduire l'intégralité de l'investissement de son impôt sur le revenu. Attendre, c'est perdre cet avantage.",
        ],
        stats: [
          { label: 'Amortissement typique 2026', value: `${factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'fr')} ans` },
        ],
      },
      {
        heading: "Combien puis-je réellement économiser?",
        content: [
          "Voici le calcul pour une maison individuelle typique:",
          "Après l'amortissement, l'installation continue à produire et réduit les achats d'électricité au réseau.",
        ],
        highlight: "Le rendement réel dépend de la production, de l'autoconsommation, du prix de l'électricité et de l'investissement.",
      },
      {
        heading: "Vaut-il la peine selon le canton?",
        content: [
          "La Suisse n'est pas un pays homogène — la production, les prix de l'électricité et les subventions varient fortement d'un canton à l'autre.",
        ],
        bullets: [
          `Plateau: ${factRange(ECONOMIC_FACTS.production.plateauKwhPerKwp, 'fr')} kWh par kWc et par an`,
          `Tessin et Valais: ${factRange(ECONOMIC_FACTS.production.ticinoValaisKwhPerKwp, 'fr')} kWh par kWc et par an`,
          "Prix de l'électricité: différents selon le canton → source: ElCom 2026",
        ],
        highlight: "Une installation solaire peut aussi être rentable sur le Plateau. L'amortissement dépend de la production, de l'autoconsommation et du prix de l'électricité.",
      },
      {
        heading: "Pour qui une installation solaire est-elle particulièrement rentable?",
        content: [
          "D'après notre expérience avec plus de 1'000 installations en Suisse, une installation solaire est la plus rentable dans ces situations:",
        ],
        bullets: [
          "Propriétaires avec une consommation élevée en journée: Ceux qui sont à la maison en journée — télétravail, enfants, retraités — consomment directement l'énergie solaire.",
          "Les ménages équipés d'une pompe à chaleur peuvent utiliser le solaire pour le chauffage et l'eau chaude.",
          "Les ménages avec une voiture électrique peuvent augmenter l'autoconsommation en rechargeant pendant la production solaire.",
          "Propriétaires d'immeubles avec RCP: Un regroupement dans le cadre de la consommation propre permet de vendre l'énergie directement aux locataires — ce qui augmente considérablement le rendement.",
          "Ceux qui veulent encore profiter de la déductibilité fiscale: La possibilité expire fin 2027.",
        ],
      },
      {
        heading: "Pour qui une installation solaire est-elle moins rentable?",
        content: [
          "La transparence est importante pour nous. Une installation solaire vaut-elle la peine pour tout le monde en 2026? Pas toujours de la même manière. Il existe des situations où la rentabilité est réduite:",
        ],
        bullets: [
          "L'amortissement se prolonge sensiblement — une analyse professionnelle est particulièrement importante.",
          "Des optimiseurs modernes peuvent atténuer le problème, mais augmentent les coûts.",
          "Celui qui vend dans 2–3 ans en profite moins financièrement.",
          "Toit très ancien: Si le toit doit être rénové dans les 5–10 prochaines années, il vaut mieux combiner rénovation et installation solaire. Installer des panneaux sur un toit délabré n'est pas judicieux.",
        ],
      },
      {
        heading: "Qu'est-ce qui change en 2026 pour les subventions?",
        content: [
          "Nouvelle rétribution pour l'injection au prix du marché: Depuis 2026, la rétribution est basée sur le prix de bourse de l'électricité. En été, quand de nombreuses installations injectent simultanément, la rétribution peut baisser.",
          "La déductibilité fiscale expire en 2027: La possibilité de déduire l'investissement comme entretien immobilier ne vaut que jusqu'à fin 2027. La planification et l'installation durent 4–12 semaines — il faut agir maintenant.",
          "Nouvelles communautés locales d'électricité (CLE) depuis 2026: Les propriétaires peuvent vendre leur surplus d'énergie solaire directement aux voisins — sans toit commun. Cela crée de nouvelles opportunités et augmente la rentabilité pour tous.",
        ],
      },
      {
        heading: "Installation solaire avec ou sans batterie?",
        content: [
          "L'une des questions les plus fréquentes que nous recevons de propriétaires suisses: une installation solaire avec ou sans batterie est-elle plus rentable?",
        ],
        bullets: [
          `Sans batterie: autoconsommation typique de ${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, 'fr')}%`,
          `Avec batterie: autoconsommation typique de ${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withStorage, 'fr')}%`,
        ],
        highlight: "Conclusion: Une installation solaire sans batterie est rentable immédiatement. Une batterie est intéressante si la consommation en soirée est élevée ou si vous possédez une voiture électrique ou une pompe à chaleur. Lors de la planification, choisissez un onduleur compatible avec l'ajout futur d'une batterie.",
      },
      {
        heading: "Notre recommandation après plus de 1'000 installations",
        content: [
          "Une installation solaire vaut-elle la peine en Suisse en 2026? Après trois ans d'expérience et plus de 1'000 installations, nous pouvons affirmer: l'erreur la plus fréquente n'est pas d'investir trop tôt — c'est d'attendre trop longtemps et de perdre l'avantage fiscal, les subventions et les économies sur l'électricité.",
          "La deuxième erreur la plus fréquente est de ne demander qu'une seule offre. Pour la même installation, les prix entre installateurs peuvent varier de plusieurs milliers de francs.",
          "PvPro.ch met gratuitement en relation jusqu'à 3 installateurs certifiés de votre canton. Remplissez le formulaire en 2 minutes — et recevez des offres concrètes dans les 48 heures.",
        ],
      },
    ],
    ctaHeading: "Calculez maintenant si les panneaux solaires valent la peine pour votre toit",
    ctaText: "Une installation solaire vaut-elle la peine pour votre maison en Suisse en 2026? Remplissez le formulaire en 2 minutes — nous vous mettons en contact avec jusqu'à 3 installateurs certifiés de votre canton. Comparez et décidez librement.",
    ctaButton: 'Demander une offre gratuite',
    formUrl: '/fr/demande',
    relatedSlugs: ['solaranlage-steuerabzug-schweiz-2026', 'solaranlage-waermepumpe-kombinieren-schweiz', 'besten-solarinstallateur-schweiz-finden', 'batteriespeicher-brandgefahr-sicherheit-schweiz', 'roi-photovoltaik-schweiz', 'foerderungen-photovoltaik-2026'],
    relatedPageLinks: [
      { label: 'Subventions & Rétribution unique (RU)', href: '/fr/subventions-solaires' },
      { label: 'Solaire avec batterie', href: '/fr/solaire-avec-batterie' },
      { label: 'PV maison individuelle', href: '/fr/solaire-maison-individuelle' },
      { label: 'PV immeuble résidentiel', href: '/fr/solaire-immeuble' },
      { label: "Coût installation solaire", href: '/fr/cout-installation-solaire' },
      { label: 'Calculateur solaire gratuit', href: '/fr/calculateur-solaire' },
      { label: 'Demander des offres solaires', href: '/fr/demander-offre-panneau-solaire' },
    ],
    faqs: [
      { question: "Une installation solaire vaut-elle vraiment la peine en Suisse en 2026?", answer: "Oui. Grâce à la baisse des prix des modules, à la hausse des prix de l'électricité et à des subventions attractives, une installation solaire vaut plus la peine que jamais en Suisse en 2026." },
      { question: "Une installation solaire vaut-elle la peine en Suisse avec un rayonnement solaire plus faible?", answer: "Oui." },
      { question: "Quand une installation solaire s'amortit-elle en Suisse?", answer: `Sur le Plateau, il faut généralement compter ${factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'fr')} ans, et au Tessin et en Valais ${factRange(ECONOMIC_FACTS.systemPaybackYears.ticinoValais, 'fr')} ans. La durée exacte dépend du système, du lieu et de l'utilisation.` },
      { question: "Une installation solaire sans batterie vaut-elle la peine?", answer: "Oui. Une installation sans batterie est déjà rentable. Sa rentabilité dépend du profil de consommation." },
      { question: "Quel canton suisse est le plus adapté à l'énergie solaire?", answer: `Au Tessin et en Valais, la production typique est de ${factRange(ECONOMIC_FACTS.production.ticinoValaisKwhPerKwp, 'fr')} kWh par kWc et par an. Sur le Plateau, elle est de ${factRange(ECONOMIC_FACTS.production.plateauKwhPerKwp, 'fr')} kWh par kWc et par an.` },
      { question: "Une installation solaire vaut-elle la peine pour un immeuble?", answer: "Oui, souvent encore mieux que pour une maison individuelle. La grande surface de toit permet une installation plus puissante. Avec un RCP, le courant peut être vendu directement aux locataires — ce qui augmente considérablement le rendement." },
      { question: "Que se passe-t-il avec la déductibilité fiscale après 2027?", answer: "La possibilité de déduire l'investissement comme entretien immobilier expire fin 2027. Pour en profiter, il faut planifier l'installation rapidement — de l'offre à la mise en service, il faut compter 4–12 semaines." },
      { question: "Comment trouver l'installateur le moins cher dans mon canton?", answer: "En comparant au moins 3 offres. PvPro.ch met gratuitement en contact jusqu'à 3 installateurs certifiés de votre canton — sans appels publicitaires et sans engagement." },
    ],
  },

  // ─── LOHNT SICH (EN) ─────────────────────────────────────────────────────
  {
    slug: 'lohnt-sich-solaranlage-schweiz-2026',
    locale: 'en',
    title: 'Is Solar Worth It in Switzerland 2026? An Honest Answer with Real Numbers',
    metaDescription: 'Is a solar panel system worth it in Switzerland in 2026? Costs, subsidies, payback period and comparison by canton — with real numbers, no sugarcoating.',
    image: '/images/bauernhaus-solaranlage-abend-eiger.webp',
    date: 'May 3, 2026',
    readMin: 10,
    tag: 'Guide',
    intro: "Is solar worth it in Switzerland in 2026? Yes — but not equally for everyone. Whether a solar system pays off depends on your canton, electricity consumption, roof orientation and how smartly you use the available subsidies. After three years of experience with over 1,000 installations arranged across Switzerland, we have a clear answer — with real numbers and no sugarcoating.",
    sections: [
      {
        heading: 'Is solar worth it in 2026? — the short answer',
        content: [
          "Is solar worth it in Switzerland in 2026? Yes, more than ever. Three developments make 2026 the best year to invest in a solar system:",
          "Second, electricity prices in Switzerland have risen.",
          "Third, tax deductibility expires at the end of 2027. Those who invest now can still deduct the full investment from their income tax. Waiting means losing this advantage.",
        ],
        stats: [
          { label: 'Typical payback 2026', value: `${factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'en')} years` },
        ],
      },
      {
        heading: 'How much can I actually save?',
        content: [
          "Here is the calculation for a typical detached house:",
          "After payback, the system continues to produce electricity and reduce grid purchases.",
        ],
        highlight: "The actual return depends on production, self-consumption, electricity prices and investment costs.",
      },
      {
        heading: 'Is solar worth it in Switzerland in 2026, canton by canton?',
        content: [
          "Switzerland is not a homogeneous country — production, electricity prices and subsidies vary greatly between cantons.",
        ],
        bullets: [
          `Swiss Plateau: ${factRange(ECONOMIC_FACTS.production.plateauKwhPerKwp, 'en')} kWh per kWp and year`,
          `Ticino and Valais: ${factRange(ECONOMIC_FACTS.production.ticinoValaisKwhPerKwp, 'en')} kWh per kWp and year`,
          "Electricity prices: differ by canton → source: ElCom 2026",
        ],
        highlight: "Solar can also be worthwhile in the Swiss Plateau. Payback depends on production, self-consumption and electricity price.",
      },
      {
        heading: 'For whom is solar particularly worthwhile?',
        content: [
          "Based on our experience with over 1,000 installations in Switzerland, solar pays off most in these situations:",
        ],
        bullets: [
          "Homeowners with high daytime consumption: Those who are home during the day — home office, children, retirees — consume the solar electricity directly.",
          "Households with a heat pump can use solar electricity for heating and hot water.",
          "Households with an electric car can increase self-consumption by charging during solar production.",
          "Apartment building owners with self-consumption groups: A self-consumption community allows selling solar electricity directly to tenants — this significantly increases returns.",
          "Those who still want to use the tax deduction: The option expires at end of 2027.",
        ],
      },
      {
        heading: 'For whom is solar less worthwhile?',
        content: [
          "Honesty matters to us. Is solar worth it in Switzerland in 2026 for everyone? Not always equally. There are situations where the economics are limited:",
        ],
        bullets: [
          "Payback extends noticeably — a professional analysis is particularly important.",
          "Modern optimisers can mitigate the problem but increase costs.",
          "Those selling in 2–3 years benefit less financially.",
          "Very old roof: If the roof needs renovation in the next 5–10 years, combining the renovation with the solar installation is best. Installing panels on a dilapidated roof is not advisable.",
        ],
      },
      {
        heading: 'What changes in 2026 for subsidies?',
        content: [
          "In summer, when many systems feed in simultaneously, the tariff may fall.",
          "Tax deductibility expires in 2027: The option to deduct the full investment as property maintenance expires at end of 2027. Planning and installation takes 4–12 weeks — act now.",
          "New local electricity communities (LEC) from 2026: Homeowners can sell their surplus solar electricity directly to neighbours — without a shared roof. This opens new possibilities and increases economics for all parties.",
        ],
      },
      {
        heading: 'Solar with or without battery storage?',
        content: [
          "One of the most frequent questions we receive from Swiss homeowners: is solar more worthwhile with or without battery storage?",
        ],
        bullets: [
          `Without storage: typical self-consumption ${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, 'en')}%`,
          `With storage: typical self-consumption ${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withStorage, 'en')}%`,
        ],
        highlight: "Conclusion: A solar system without storage pays off immediately. Storage makes sense when evening consumption is high or you have an electric car and heat pump. When planning, choose an inverter that allows battery storage to be added later.",
      },
      {
        heading: "Our recommendation after 1,000+ installations arranged",
        content: [
          "Is solar worth it in Switzerland in 2026? After three years of experience and over 1,000 installations arranged, we can say: the most common mistake is not investing too early — it is waiting too long and losing the tax advantage, subsidies and electricity cost savings.",
          "The second most common mistake is requesting only one quote. For the same system, prices between installers can vary by several thousand francs.",
          "PvPro.ch connects you free of charge with up to 3 certified installers in your canton. Fill in the form in 2 minutes — and receive concrete quotes within 48 hours.",
        ],
      },
    ],
    ctaHeading: 'Calculate now whether solar is worth it for your roof',
    ctaText: "Is solar worth it in Switzerland in 2026 for your home? Fill in the form in 2 minutes — we connect you with up to 3 free quotes from certified installers in your canton. Compare and decide freely.",
    ctaButton: 'Request a free quote',
    formUrl: '/en/request',
    relatedSlugs: ['solaranlage-steuerabzug-schweiz-2026', 'solaranlage-waermepumpe-kombinieren-schweiz', 'besten-solarinstallateur-schweiz-finden', 'batteriespeicher-brandgefahr-sicherheit-schweiz', 'roi-photovoltaik-schweiz', 'foerderungen-photovoltaik-2026'],
    relatedPageLinks: [
      { label: 'Subsidies & One-Time Payment (OTP)', href: '/en/solar-subsidies' },
      { label: 'Solar with battery storage', href: '/en/solar-with-battery' },
      { label: 'Solar for detached houses', href: '/en/solar-detached-house' },
      { label: 'Solar for apartment buildings', href: '/en/solar-apartment-building' },
      { label: 'Solar system costs', href: '/en/solar-panel-costs' },
      { label: 'Free solar calculator', href: '/en/solar-calculator' },
      { label: 'Compare solar quotes', href: '/en/get-solar-panel-quotes' },
    ],
    faqs: [
      { question: 'Is solar really worth it in Switzerland in 2026?', answer: 'Yes. Thanks to falling module prices, rising electricity prices and attractive subsidies, solar is more worthwhile than ever in Switzerland in 2026.' },
      { question: 'Is solar worth it in Switzerland with lower solar irradiation?', answer: 'Yes.' },
      { question: 'When does a solar system pay back in Switzerland?', answer: `Payback is ${factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'en')} years on the Swiss Plateau and ${factRange(ECONOMIC_FACTS.systemPaybackYears.ticinoValais, 'en')} years in Ticino and Valais.` },
      { question: 'Is solar worth it without battery storage?', answer: 'Yes. A solar system without storage is already profitable. Whether it is worthwhile depends on your consumption profile.' },
      { question: 'Which Swiss canton is best suited for solar energy?', answer: `In Ticino and Valais, typical production is ${factRange(ECONOMIC_FACTS.production.ticinoValaisKwhPerKwp, 'en')} kWh per kWp and year. In the Swiss Plateau it is ${factRange(ECONOMIC_FACTS.production.plateauKwhPerKwp, 'en')} kWh per kWp and year.` },
      { question: 'Is solar worth it for an apartment building?', answer: "Yes, often even better than for a detached house. The larger roof area allows a more powerful system. With a self-consumption community, electricity can be sold directly to tenants — significantly increasing returns." },
      { question: 'What happens to tax deductibility after 2027?', answer: 'The option to deduct the investment as property maintenance expires at end of 2027. Those who still want to benefit should plan the installation soon — from quote to commissioning takes 4–12 weeks.' },
      { question: 'How do I find the cheapest installer in my canton?', answer: 'By comparing at least 3 quotes. PvPro.ch connects you free of charge with up to 3 certified installers in your canton — no sales calls and no commitment.' },
    ],
  },

  // ─── LOHNT SICH (IT) ─────────────────────────────────────────────────────
  {
    slug: 'lohnt-sich-solaranlage-schweiz-2026',
    locale: 'it',
    title: 'Vale la pena installare un impianto solare in Svizzera nel 2026?',
    metaDescription: 'Vale la pena installare un impianto solare in Svizzera nel 2026? Costi, incentivi, ammortamento e confronto per cantone — con numeri reali, senza abbellire la realtà.',
    image: '/images/bauernhaus-solaranlage-abend-eiger.webp',
    date: '3 maggio 2026',
    readMin: 10,
    tag: 'Guida',
    intro: "Vale davvero la pena installare un impianto solare in Svizzera nel 2026? Sì — ma non allo stesso modo per tutti. La convenienza dipende dal cantone, dal consumo elettrico, dall'orientamento del tetto e da come si sfruttano gli incentivi disponibili. Dopo tre anni di esperienza con oltre 1'000 impianti realizzati in tutta la Svizzera, abbiamo una risposta chiara — con numeri reali, senza abbellire la realtà.",
    sections: [
      {
        heading: 'Vale la pena nel 2026? — la risposta breve',
        content: [
          "Vale la pena installare un impianto solare in Svizzera nel 2026? Sì, più che mai. Tre sviluppi rendono il 2026 il miglior anno per investire:",
          "In secondo luogo, i prezzi dell'energia in Svizzera sono aumentati.",
          "In terzo luogo, la detraibilità fiscale scade a fine 2027. Chi investe ora può ancora detrarre l'intero investimento dall'imposta sul reddito. Chi aspetta perde questo vantaggio.",
        ],
        stats: [
          { label: 'Ammortamento tipico 2026', value: `${factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'it')} anni` },
        ],
      },
      {
        heading: 'Quanto posso risparmiare concretamente?',
        content: [
          "Ecco il calcolo per una tipica casa unifamiliare:",
          "Dopo l'ammortamento, l'impianto continua a produrre energia e riduce gli acquisti dalla rete.",
        ],
        highlight: "Il rendimento effettivo dipende dalla produzione, dall'autoconsumo, dal prezzo dell'energia e dall'investimento.",
      },
      {
        heading: 'Vale la pena per cantone?',
        content: [
          "La Svizzera non è un paese omogeneo — la produzione, i prezzi dell'energia e gli incentivi variano notevolmente da cantone a cantone.",
        ],
        bullets: [
          `Altopiano: ${factRange(ECONOMIC_FACTS.production.plateauKwhPerKwp, 'it')} kWh per kWp all'anno`,
          `Ticino e Vallese: ${factRange(ECONOMIC_FACTS.production.ticinoValaisKwhPerKwp, 'it')} kWh per kWp all'anno`,
          "Prezzi dell'energia: diversi per cantone → fonte: ElCom 2026",
        ],
        highlight: "Un impianto solare può convenire anche sull'Altopiano. L'ammortamento dipende da produzione, autoconsumo e prezzo dell'energia.",
      },
      {
        heading: 'Per chi vale la pena particolarmente?',
        content: [
          "Dalla nostra esperienza con oltre 1'000 impianti in Svizzera, un impianto solare conviene di più in queste situazioni:",
        ],
        bullets: [
          "Proprietari con alto consumo diurno: Chi è a casa di giorno — telelavoro, bambini, pensionati — consuma direttamente l'energia solare.",
          "Le famiglie con pompa di calore possono usare l'energia solare per riscaldamento e acqua calda.",
          "Le famiglie con auto elettrica possono aumentare l'autoconsumo ricaricando durante la produzione solare.",
          "Proprietari di condomini con CAC: Un consorzio per l'autoconsumo permette di vendere l'energia direttamente agli inquilini — aumentando notevolmente la redditività.",
          "Chi vuole ancora sfruttare la detraibilità fiscale: La possibilità scade a fine 2027.",
        ],
      },
      {
        heading: 'Per chi conviene meno?',
        content: [
          "La trasparenza è importante per noi. Vale la pena per tutti in Svizzera nel 2026? Non sempre allo stesso modo. Esistono situazioni in cui la convenienza economica è ridotta:",
        ],
        bullets: [
          "L'ammortamento si allunga sensibilmente — un'analisi professionale è particolarmente importante.",
          "Gli ottimizzatori moderni possono attenuare il problema, ma aumentano i costi.",
          "Prevista vendita della casa entro pochi anni: Un impianto solare può aumentare il valore dell'immobile, ma chi vende a breve ne beneficia meno finanziariamente.",
          "Tetto molto vecchio: Se il tetto deve essere risanato nei prossimi 5–10 anni, è meglio combinare il risanamento con l'installazione solare. Installare un impianto su un tetto fatiscente non è sensato.",
        ],
      },
      {
        heading: 'Cosa cambia nel 2026 per gli incentivi?',
        content: [
          "Nuova remunerazione per l'immissione al prezzo di mercato: Dal 2026 la remunerazione si basa sul prezzo di borsa dell'energia. In estate, quando molti impianti immettono simultaneamente, la remunerazione può scendere.",
          "La detraibilità fiscale scade nel 2027: La possibilità di detrarre l'investimento come manutenzione immobiliare vale solo fino a fine 2027. La pianificazione e l'installazione richiedono 4–12 settimane — è il momento di agire.",
          "Nuove comunità locali dell'energia (CLE) dal 2026: I proprietari possono vendere il surplus di energia solare direttamente ai vicini — senza un tetto comune. Questo apre nuove possibilità e aumenta la convenienza per tutti.",
        ],
      },
      {
        heading: 'Impianto solare con o senza accumulo?',
        content: [
          "Una delle domande più frequenti che riceviamo dai proprietari svizzeri: conviene di più un impianto solare con o senza accumulatore?",
        ],
        bullets: [
          `Senza accumulo: autoconsumo tipico ${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, 'it')}%`,
          `Con accumulo: autoconsumo ca. ${factRange(ECONOMIC_FACTS.selfConsumptionPercent.withStorage, 'it')}%, particolarmente conveniente con auto elettrica o pompa di calore`,
        ],
        highlight: "Conclusione: Un impianto solare senza accumulo è già conveniente. L'accumulo conviene quando il consumo serale è elevato o si dispone di un'auto elettrica e una pompa di calore. In fase di pianificazione, scegliere un inverter compatibile con l'aggiunta futura di un accumulatore.",
      },
      {
        heading: "La nostra raccomandazione dopo oltre 1'000 impianti realizzati",
        content: [
          "Vale la pena un impianto solare in Svizzera nel 2026? Dopo tre anni di esperienza e oltre 1'000 impianti realizzati possiamo affermare: l'errore più frequente non è investire troppo presto — è aspettare troppo a lungo e perdere il vantaggio fiscale, gli incentivi e i risparmi sui costi dell'energia.",
          "Il secondo errore più frequente è richiedere un solo preventivo. Per lo stesso impianto, i prezzi tra diversi installatori possono variare di migliaia di franchi.",
          "PvPro.ch mette gratuitamente in contatto con fino a 3 installatori certificati della propria Cantone. Compilare il modulo in 2 minuti — e ricevere offerte concrete entro 48 ore.",
        ],
      },
    ],
    ctaHeading: 'Calcola subito se un impianto solare conviene per il tuo tetto',
    ctaText: "Vale la pena un impianto solare in Svizzera nel 2026 per la tua casa? Compila il modulo in 2 minuti — ti mettiamo in contatto con fino a 3 preventivi gratuiti da installatori certificati del tuo Cantone. Confronta e decidi liberamente.",
    ctaButton: 'Richiedi preventivo gratuito',
    formUrl: '/it/richiesta',
    relatedSlugs: ['solaranlage-steuerabzug-schweiz-2026', 'solaranlage-waermepumpe-kombinieren-schweiz', 'besten-solarinstallateur-schweiz-finden', 'batteriespeicher-brandgefahr-sicherheit-schweiz', 'roi-photovoltaik-schweiz', 'foerderungen-photovoltaik-2026'],
    relatedPageLinks: [
      { label: 'Incentivi & Remunerazione unica (RU)', href: '/it/incentivi-solari' },
      { label: 'Solare con accumulo', href: '/it/solare-con-accumulo' },
      { label: 'Fotovoltaico casa unifamiliare', href: '/it/solare-casa-unifamiliare' },
      { label: 'Fotovoltaico condominio', href: '/it/solare-condominio' },
      { label: 'Costi impianto solare', href: '/it/costi-impianto-solare' },
      { label: 'Calcolatore solare gratuito', href: '/it/calcolatore-solare' },
      { label: 'Richiedere preventivi solari', href: '/it/richiedere-preventivo-solare' },
    ],
    faqs: [
      { question: 'Vale davvero la pena un impianto solare in Svizzera nel 2026?', answer: `Sì. Grazie al calo dei prezzi dei moduli, all'aumento dei prezzi dell'energia e agli incentivi, un impianto solare può convenire. Nell'Altopiano l'ammortamento richiede ${factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'it')} anni, in Ticino e Vallese ${factRange(ECONOMIC_FACTS.systemPaybackYears.ticinoValais, 'it')} anni. La durata dei moduli è di ${factRange(ECONOMIC_FACTS.moduleLifetimeYears, 'it')} anni.` },
      { question: 'Vale la pena un impianto solare in Svizzera con meno irraggiamento?', answer: "Sì." },
      { question: 'Quando si ammortizza un impianto solare in Svizzera?', answer: `Nell'Altopiano l'ammortamento richiede ${factRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'it')} anni, in Ticino e Vallese ${factRange(ECONOMIC_FACTS.systemPaybackYears.ticinoValais, 'it')} anni.` },
      { question: 'Vale la pena un impianto solare senza accumulo?', answer: "Sì. Un impianto senza accumulo è già redditizio. La convenienza dipende dal profilo di consumo." },
      { question: "Quale cantone svizzero è più adatto all'energia solare?", answer: `In Ticino e Vallese la produzione tipica è di ${factRange(ECONOMIC_FACTS.production.ticinoValaisKwhPerKwp, 'it')} kWh per kWp all'anno; sull'Altopiano è di ${factRange(ECONOMIC_FACTS.production.plateauKwhPerKwp, 'it')} kWh per kWp all'anno.` },
      { question: 'Vale la pena un impianto solare per un condominio?', answer: "Sì, spesso anche meglio che per una casa unifamiliare. La grande superficie del tetto permette un impianto più potente. Con un CAC (consorzio per l'autoconsumo) l'energia può essere venduta direttamente agli inquilini — aumentando notevolmente la redditività." },
      { question: 'Cosa succede alla detraibilità fiscale dopo il 2027?', answer: "La possibilità di detrarre l'investimento come manutenzione immobiliare scade a fine 2027. Chi vuole ancora beneficiarne dovrebbe pianificare l'installazione presto — dal preventivo alla messa in servizio passano 4–12 settimane." },
      { question: "Come trovo l'installatore più conveniente nel mio Cantone?", answer: "Confrontando almeno 3 preventivi. PvPro.ch mette gratuitamente in contatto con fino a 3 installatori certificati del tuo Cantone — senza chiamate pubblicitarie e senza impegno." },
    ],
  },

  // ─── STEUERABZUG (DE) ────────────────────────────────────────────────────
  {
    slug: 'solaranlage-steuerabzug-schweiz-2026',
    locale: 'de',
    title: 'Solaranlage von der Steuer abziehen in der Schweiz — was Sie 2026 noch wissen müssen',
    metaDescription: 'Solaranlage von der Steuer abziehen in der Schweiz: Wie viel können Sie sparen? Alle Kantone im Vergleich und warum 2026/2027 die letzte Chance ist. Jetzt informieren.',
    image: '/images/steuererklaerung-solaranlage-schweiz.webp',
    date: '3. Mai 2026',
    readMin: 10,
    tag: 'Förderung & Steuern',
    intro: "Die steuerliche Absetzbarkeit einer Solaranlage in der Schweiz ist einer der grössten und am wenigsten bekannten Vorteile für Hausbesitzer. Doch dieser Vorteil hat ein Ablaufdatum: Ab 2028 entfällt der Steuerabzug auf Bundesebene voraussichtlich vollständig. 2026 und 2027 sind die letzten Jahre, um noch davon zu profitieren.",
    sections: [
      {
        heading: 'Was bedeutet steuerliche Absetzbarkeit einer Solaranlage?',
        content: [
          "In der Schweiz gilt die Installation einer Solaranlage auf einem bestehenden Gebäude als Liegenschaftsunterhalt — also als werterhaltende oder wertvermehrende Massnahme. Diese Kosten können direkt vom steuerbaren Einkommen abgezogen werden, genau wie eine Dachsanierung oder eine neue Heizung.",
        ],
        stats: [
          { label: 'Letzte Chance für Steuerabzug', value: 'Ende 2027' },
        ],
        bullets: [
          "Die gesamten Installationskosten der Solaranlage",
          "Der Batteriespeicher (in den meisten Kantonen, wenn gleichzeitig installiert)",
          "Planungskosten und Bewilligungsgebühren",
          "Zukünftige Wartungs- und Unterhaltskosten der Anlage (jährlich absetzbar)",
        ],
        highlight: "Nicht abzugsfähig: Anlagen auf Neubauten (in den meisten Kantonen). Fördergelder wie die EIV müssen von der abzugsfähigen Investitionssumme abgezogen werden.",
      },
      {
        heading: 'Warum ist 2026 die letzte grosse Chance für den Steuerabzug?',
        content: [
          "Am 28. September 2025 hat die Schweizer Stimmbevölkerung mit 57.7% die Abschaffung des Eigenmietwerts angenommen. Diese Reform hat direkte Konsequenzen für alle Hausbesitzer.",
          "Ab 1. Januar 2028 entfällt auf Bundesebene: der Abzug für Liegenschaftsunterhalt, der Abzug für energetische Sanierungsmassnahmen — und damit auch der Steuerabzug für neue Solaranlagen.",
          "Einige Kantone können eigene Abzugsmöglichkeiten für Energiespar- und Umweltschutzmassnahmen beibehalten — aber nur bis maximal 2050, und nicht alle werden das tun. Auf Bundesebene ist der Vorteil definitiv weg.",
        ],
        highlight: "Die Konsequenz: Wer bis Ende 2027 eine Solaranlage installiert, profitiert noch vom vollen Steuerabzug auf Bundesebene.",
      },
      {
        heading: 'Wie viel können Sie konkret sparen? Rechenbeispiele',
        content: [
          "Die Höhe der Steuerersparnis hängt von der Investitionssumme, dem Kanton und dem persönlichen Grenzsteuersatz ab.",
        ],
        highlight: "Steuer-Tipp: Wer im Dezember eine Teilzahlung leistet und den Rest im Januar zahlt, kann den Abzug auf zwei Steuerjahre verteilen. Das ist besonders sinnvoll, wenn die Gesamtinvestition das steuerbare Einkommen in einem Jahr stark reduzieren würde. Sprechen Sie mit Ihrem Steuerberater.",
      },
      {
        heading: 'Solaranlage Steuerabzug: Kantonaler Vergleich',
        content: [
          "Die steuerliche Behandlung von Solaranlagen variiert zwischen den Kantonen. Hier der aktuelle Überblick:",
        ],
        bullets: [
          "Zürich: ✅ Investition absetzbar, ✅ Speicher (gleichzeitig), ✅ Nettoprinzip — Zusatzförderung Stadt Zürich",
          "Aargau: ✅ Investition absetzbar, ✅ Speicher (auch Nachrüstung), Bruttoprinzip — Speicher auch nachträglich absetzbar",
          "St. Gallen: ✅ Investition absetzbar, ✅ Speicher (auch Nachrüstung), Nettoprinzip — Energieförderung kantonal",
          "Basel-Stadt: ✅ Investition absetzbar, ✅ Speicher, ✅ Nettoprinzip — Zusätzliche städtische Programme",
          "Obwalden: ✅ Investition absetzbar, ✅ Speicher, ✅ Nettoprinzip — Förderung auf Anfrage",
          "Schwyz: ✅ Investition absetzbar, ✅ Speicher (gleichzeitig), ✅ Nettoprinzip — Kantonale Förderung",
          "Wallis: ✅ Investition absetzbar, ✅ Speicher (gleichzeitig), ✅ Nettoprinzip — Kantonale Energieförderung",
          "Solothurn: ✅ Investition absetzbar, ❌ Speicher nicht absetzbar, Bruttoprinzip",
          "Uri: ✅ Investition absetzbar, ❌ Speicher nicht absetzbar, Bruttoprinzip",
          "Zug: ✅ Investition absetzbar, ❌ Speicher nicht absetzbar, Nettoprinzip",
        ],
        highlight: "Hinweis: Die Angaben sind Richtwerte. Kantone können ihre Praxis ändern. Bitte konsultieren Sie Ihr kantonales Steueramt oder einen Steuerberater für Ihre konkrete Situation.",
      },
      {
        heading: 'Wie funktioniert der Steuerabzug in der Praxis?',
        content: [
          "Schritt 1 — Investition tätigen: Sie beauftragen einen zertifizierten Installateur und bezahlen die Anlage. Bewahren Sie alle Rechnungen sorgfältig auf.",
          "Schritt 2 — Fördergelder beantragen: Ihr Installateur stellt den EIV-Antrag bei Pronovo. Die ausbezahlte EIV müssen Sie von der abzugsfähigen Investitionssumme abziehen.",
          "Schritt 3 — Steuererklärung: Im Jahr der Investition tragen Sie die abzugsfähigen Kosten als Liegenschaftsunterhalt in Ihre Steuererklärung ein. Die EIV, wenn im gleichen Jahr ausbezahlt, muss als Einkommen deklariert werden.",
          "Schritt 4 — Jährliche Unterhaltskosten: Auch in den Folgejahren können Sie Wartungskosten, Reinigungskosten und eventuelle Reparaturen als Liegenschaftsunterhalt abziehen.",
        ],
      },
      {
        heading: 'Was ist mit dem Batteriespeicher?',
        content: [
          "Die steuerliche Behandlung des Batteriespeichers ist kantonal unterschiedlich — aber in den meisten Kantonen absetzbar.",
        ],
        bullets: [
          "Speicher zusammen mit Anlage installiert: In den Kantonen AG, BE, OW, SZ, ZH und VS ist der Speicher absetzbar, wenn er gleichzeitig mit der PV-Anlage installiert wird.",
          "Speicher nachträglich installiert: In den Kantonen AG, BE, OW, SZ und SG ist auch eine Batterienachrüstung steuerlich absetzbar.",
          "Speicher nicht absetzbar: In den Kantonen SO, UR und ZG kann der Batteriespeicher generell nicht geltend gemacht werden.",
        ],
        highlight: "Empfehlung: Installieren Sie Anlage und Speicher gleichzeitig — das maximiert die steuerlichen Vorteile und vereinfacht die Deklaration.",
      },
      {
        heading: 'Wie wird der Solarstromertrag besteuert?',
        content: [
          "Eigenverbrauch: Der selbst verbrauchte Solarstrom wird in der Schweiz nicht besteuert. Was Sie selbst produzieren und selbst verbrauchen, ist steuerfrei — ein weiterer Grund, den Eigenverbrauch zu maximieren.",
          "Eingespeister Strom (Rückliefervergütung): Der ins Netz eingespeiste Strom wird als Einkommen besteuert. Die meisten Kantone wenden heute das Nettoprinzip an — es wird nur besteuert, was effektiv ausbezahlt wird. Bei kleinen Anlagen und hohem Eigenverbrauch kann der steuerbare Betrag gering sein.",
          "Fördergelder (EIV): Die Einmalvergütung gilt als Einkommen und muss im Jahr der Auszahlung deklariert werden. Sie reduziert zudem die abzugsfähige Investitionssumme.",
        ],
      },
      {
        heading: 'Warum Sie jetzt handeln sollten — und nicht 2027',
        content: [
          "1. Die Planung braucht Zeit: Von der ersten Offerte bis zur Inbetriebnahme einer Solaranlage vergehen 4–12 Wochen. Wer bis Ende 2027 installiert haben möchte, muss spätestens im Herbst 2027 bestellen — und die Installateure werden dann überlastet sein.",
          "2. Die Kosten steigen unter Druck: Wenn alle kurz vor Ende 2027 bestellen, entstehen Engpässe. Erfahrungsgemäss steigen Preise und Wartezeiten, wenn viele gleichzeitig bestellen.",
          "3. Jedes Jahr ohne Anlage kostet Geld: Wer heute investiert statt 2027, spart schon jetzt Stromkosten.",
        ],
        highlight: "Die häufigste Reaktion: «Dann warte ich noch ein Jahr.» Das klingt logisch, ist aber riskant — die Kapazitäten der Installateure werden in den letzten Monaten vor Ende 2027 knapp sein, und die Preise steigen unter Druck.",
      },
    ],
    ctaHeading: 'Steuerabzug noch nutzen — jetzt Offerte einholen',
    ctaText: "2026 und 2027 sind die letzten Jahre mit vollem Steuerabzug auf Bundesebene.",
    ctaButton: 'Kostenlose Offerte anfordern',
    formUrl: '/anfrage',
    relatedSlugs: ['lohnt-sich-solaranlage-schweiz-2026', 'foerderungen-photovoltaik-2026', 'batteriespeicher-solaranlage-lohnt-sich'],
    relatedPageLinks: [
      { label: 'Förderungen & Einmalvergütung (EIV)', href: '/foerderungen' },
      { label: 'Solaranlage mit Batteriespeicher', href: '/solaranlage-mit-speicher' },
      { label: 'Förderungen Kanton Zürich', href: '/foerderungen-kanton-zuerich' },
      { label: 'Solaranlage Zürich', href: '/solaranlage-zurich' },
      { label: 'Solaranlage Kosten Schweiz', href: '/solaranlage-kosten' },
      { label: 'Offerten vergleichen', href: '/solaranlage-offerte-einholen' },
      { label: 'Installation & Ablauf', href: '/solaranlage-installieren-schweiz' },
      { label: 'Lohnt sich eine Solaranlage 2026?', href: '/blog/lohnt-sich-solaranlage-schweiz-2026' },
    ],
    faqs: [
      { question: 'Kann ich eine Solaranlage in der Schweiz von der Steuer abziehen?', answer: "Ja. In fast allen Schweizer Kantonen können die Investitionskosten einer Solaranlage auf einem bestehenden Gebäude als Liegenschaftsunterhalt vom steuerbaren Einkommen abgezogen werden. Dieser Vorteil gilt jedoch nur noch bis Ende 2027 auf Bundesebene." },
      { question: 'Bis wann kann ich eine Solaranlage steuerlich abziehen?', answer: "Auf Bundesebene läuft die Möglichkeit des Steuerabzugs voraussichtlich mit Ende 2027 aus — als Folge der Abschaffung des Eigenmietwerts, die am 28. September 2025 angenommen wurde. Einige Kantone könnten eigene Abzugsmöglichkeiten beibehalten." },
      { question: 'Kann ich den Steuerabzug auf zwei Jahre verteilen?', answer: "Ja. Wenn Sie im Dezember eine Teilzahlung leisten und den Rest im Januar zahlen, können Sie die Investition auf zwei Steuerjahre verteilen. Das ist steuerlich oft vorteilhafter, wenn die Gesamtsumme das Einkommen eines einzelnen Jahres stark reduzieren würde." },
      { question: 'Ist auch der Batteriespeicher steuerlich absetzbar?', answer: "In den meisten Kantonen ja, besonders wenn er gleichzeitig mit der Solaranlage installiert wird. In einigen Kantonen ist sogar eine spätere Nachrüstung absetzbar. Ausnahmen sind SO, UR und ZG." },
      { question: 'Muss ich die Einmalvergütung (EIV) versteuern?', answer: "Ja, die EIV gilt als Einkommen und muss im Jahr der Auszahlung deklariert werden. Sie reduziert zudem die abzugsfähige Investitionssumme. Praktisch bedeutet das: Sie ziehen nur die Nettoinvestition (abzüglich EIV) als Liegenschaftsunterhalt ab." },
      { question: 'Gilt der Steuerabzug auch bei Neubauten?', answer: "In den meisten Kantonen nicht direkt — Neubauten gelten nicht als Liegenschaftsunterhalt. Eine Ausnahme ist der Kanton Luzern. Für bestehende Gebäude (in der Regel mindestens 5 Jahre alt) ist der Abzug in fast allen Kantonen möglich." },
      { question: 'Was passiert nach 2028 mit dem Steuerabzug?', answer: "Auf Bundesebene entfällt der Steuerabzug für Liegenschaftsunterhalt voraussichtlich ab 1. Januar 2028. Einige Kantone können eigene Regelungen beibehalten. Wer von der Bundesregelung profitieren möchte, muss bis Ende 2027 installiert haben." },
    ],
  },

  // ─── STEUERABZUG (FR) ────────────────────────────────────────────────────
  {
    slug: 'solaranlage-steuerabzug-schweiz-2026',
    locale: 'fr',
    title: 'Déduction fiscale panneau solaire Suisse 2026 — ce que vous devez encore savoir',
    metaDescription: "Déduire votre panneau solaire de vos impôts en Suisse: combien pouvez-vous économiser? Tous les cantons comparés et pourquoi 2026/2027 est la dernière chance.",
    image: '/images/steuererklaerung-solaranlage-schweiz.webp',
    date: '3 mai 2026',
    readMin: 10,
    tag: 'Aides & Fiscalité',
    intro: "La déductibilité fiscale d'une installation solaire en Suisse est l'un des avantages les plus importants et les moins connus pour les propriétaires. Mais cet avantage a une date d'expiration: à partir de 2028, la déduction fiscale sera vraisemblablement supprimée entièrement au niveau fédéral. 2026 et 2027 sont les dernières années pour en profiter.",
    sections: [
      {
        heading: "Que signifie la déductibilité fiscale d'une installation solaire?",
        content: [
          "En Suisse, l'installation d'une installation solaire sur un bâtiment existant est considérée comme de l'entretien immobilier — c'est-à-dire une mesure conservatrice ou amélioratrice de valeur. Ces coûts peuvent être déduits directement du revenu imposable, tout comme une rénovation de toiture ou un nouveau chauffage.",
        ],
        stats: [
          { label: 'Dernière chance pour déduction', value: 'Fin 2027' },
        ],
        bullets: [
          "L'intégralité des coûts d'installation de l'installation solaire",
          "Le système de stockage par batterie (dans la plupart des cantons, si installé simultanément)",
          "Les frais de planification et les taxes de permis",
          "Les futurs frais d'entretien et de maintenance de l'installation (déductibles annuellement)",
        ],
        highlight: "Non déductible: installations sur les nouvelles constructions (dans la plupart des cantons). Les subventions comme la RU doivent être déduites du montant déductible.",
      },
      {
        heading: "Pourquoi 2026 est-il la dernière grande chance pour la déduction fiscale?",
        content: [
          "Le 28 septembre 2025, le peuple suisse a approuvé à 57,7% la suppression de la valeur locative. Cette réforme a des conséquences directes pour tous les propriétaires.",
          "À partir du 1er janvier 2028, au niveau fédéral: la déduction pour entretien immobilier disparaît, ainsi que la déduction pour les mesures d'assainissement énergétique — et donc aussi la déduction fiscale pour les nouvelles installations solaires.",
          "Certains cantons peuvent conserver leurs propres possibilités de déduction pour les mesures d'économie d'énergie et de protection de l'environnement — mais seulement jusqu'en 2050 au maximum, et tous ne le feront pas. Au niveau fédéral, l'avantage disparaît définitivement.",
        ],
        highlight: "La conséquence: celui qui installe une installation solaire avant fin 2027 profite encore de la pleine déduction fiscale au niveau fédéral.",
      },
      {
        heading: "Combien pouvez-vous économiser concrètement? Exemples de calcul",
        content: [
          "Le montant de l'économie fiscale dépend du montant investi, du canton et du taux marginal d'imposition personnel.",
        ],
        highlight: "Astuce fiscale: En effectuant un paiement partiel en décembre et le solde en janvier, vous pouvez répartir la déduction sur deux années fiscales. C'est particulièrement intéressant si l'investissement total réduirait fortement le revenu imposable d'une seule année. Consultez votre conseiller fiscal.",
      },
      {
        heading: "Déduction fiscale panneau solaire: comparaison cantonale",
        content: [
          "Le traitement fiscal des installations solaires varie selon les cantons. Voici le panorama actuel:",
        ],
        bullets: [
          "Zurich: ✅ Investissement déductible, ✅ Batterie (simultanée), ✅ Principe net — Subvention supplémentaire ville de Zurich",
          "Argovie: ✅ Investissement déductible, ✅ Batterie (aussi ajout ultérieur), Principe brut — Batterie aussi déductible en ajout",
          "Saint-Gall: ✅ Investissement déductible, ✅ Batterie (aussi ajout ultérieur), Principe net — Promotion énergétique cantonale",
          "Bâle-Ville: ✅ Investissement déductible, ✅ Batterie, ✅ Principe net — Programmes municipaux supplémentaires",
          "Obwald: ✅ Investissement déductible, ✅ Batterie, ✅ Principe net — Promotion sur demande",
          "Schwyz: ✅ Investissement déductible, ✅ Batterie (simultanée), ✅ Principe net — Promotion cantonale",
          "Valais: ✅ Investissement déductible, ✅ Batterie (simultanée), ✅ Principe net — Promotion énergétique cantonale",
          "Soleure: ✅ Investissement déductible, ❌ Batterie non déductible, Principe brut",
          "Uri: ✅ Investissement déductible, ❌ Batterie non déductible, Principe brut",
          "Zoug: ✅ Investissement déductible, ❌ Batterie non déductible, Principe net",
        ],
        highlight: "Note: Ces informations sont des valeurs indicatives. Les cantons peuvent modifier leur pratique. Veuillez consulter votre office cantonal des impôts ou un conseiller fiscal pour votre situation concrète.",
      },
      {
        heading: "Comment fonctionne la déduction fiscale en pratique?",
        content: [
          "Étape 1 — Réaliser l'investissement: Vous mandatez un installateur certifié et payez l'installation. Conservez soigneusement toutes les factures.",
          "Étape 2 — Demander les subventions: Votre installateur dépose la demande de RU auprès de Pronovo. La RU versée doit être déduite du montant d'investissement déductible.",
          "Étape 3 — Déclaration d'impôts: Dans l'année de l'investissement, vous inscrivez les coûts déductibles comme entretien immobilier dans votre déclaration d'impôts. La RU, si versée la même année, doit être déclarée comme revenu.",
          "Étape 4 — Frais d'entretien annuels: Les années suivantes également, vous pouvez déduire les frais d'entretien, de nettoyage et les éventuelles réparations comme entretien immobilier.",
        ],
      },
      {
        heading: "Qu'en est-il du système de stockage par batterie?",
        content: [
          "Le traitement fiscal du système de stockage par batterie varie selon les cantons — mais il est déductible dans la plupart d'entre eux.",
        ],
        bullets: [
          "Batterie installée en même temps que l'installation: Dans les cantons AG, BE, OW, SZ, ZH et VS, la batterie est déductible si elle est installée simultanément avec l'installation PV.",
          "Batterie installée ultérieurement: Dans les cantons AG, BE, OW, SZ et SG, une mise à niveau ultérieure de la batterie est également déductible fiscalement.",
          "Batterie non déductible: Dans les cantons SO, UR et ZG, le système de stockage par batterie ne peut généralement pas être déclaré.",
        ],
        highlight: "Recommandation: Installez l'installation et la batterie simultanément — cela maximise les avantages fiscaux et simplifie la déclaration.",
      },
      {
        heading: "Comment la production d'énergie solaire est-elle imposée?",
        content: [
          "Autoconsommation: L'énergie solaire autoconsommée n'est pas imposée en Suisse. Ce que vous produisez et consommez vous-même est exonéré d'impôt — une raison supplémentaire de maximiser l'autoconsommation.",
          "Électricité injectée (rétribution pour l'injection): L'électricité injectée dans le réseau est imposée comme revenu. La plupart des cantons appliquent aujourd'hui le principe net — seul ce qui est effectivement versé est imposé. Pour une petite installation avec une autoconsommation élevée, le montant imposable peut être faible.",
          "Subventions (RU): La rétribution unique est considérée comme un revenu et doit être déclarée dans l'année de versement. Elle réduit également le montant d'investissement déductible.",
        ],
      },
      {
        heading: "Pourquoi agir maintenant — et pas en 2027",
        content: [
          "1. La planification prend du temps: De la première offre à la mise en service d'une installation solaire, il faut compter 4–12 semaines. Celui qui souhaite être installé avant fin 2027 doit commander au plus tard à l'automne 2027 — et les installateurs seront alors surchargés.",
          "2. Les coûts augmentent sous pression: Quand tout le monde commande peu avant fin 2027, des goulets d'étranglement apparaissent. Les prix et les délais d'attente augmentent quand beaucoup commandent simultanément.",
          "3. Chaque année sans installation coûte de l'argent: Celui qui investit maintenant plutôt qu'en 2027 économise déjà des coûts d'électricité.",
        ],
        highlight: "La réaction la plus fréquente: «J'attends encore un an.» Ça semble logique, mais c'est risqué — les capacités des installateurs seront limitées dans les derniers mois avant fin 2027, et les prix augmenteront sous pression.",
      },
    ],
    ctaHeading: "Profitez encore de la déduction fiscale — demandez une offre maintenant",
    ctaText: "2026 et 2027 sont les dernières années avec pleine déduction fiscale au niveau fédéral.",
    ctaButton: 'Demander une offre gratuite',
    formUrl: '/fr/demande',
    relatedSlugs: ['lohnt-sich-solaranlage-schweiz-2026', 'foerderungen-photovoltaik-2026', 'batteriespeicher-solaranlage-lohnt-sich'],
    relatedPageLinks: [
      { label: 'Subventions & Rétribution unique (RU)', href: '/fr/subventions-solaires' },
      { label: 'Solaire avec batterie', href: '/fr/solaire-avec-batterie' },
      { label: "Coût installation solaire", href: '/fr/cout-installation-solaire' },
      { label: 'Demander des offres solaires', href: '/fr/demander-offre-panneau-solaire' },
      { label: "Vaut-il la peine en 2026?", href: '/fr/blog/rentabilite-panneau-solaire-suisse-2026' },
    ],
    faqs: [
      { question: "Puis-je déduire une installation solaire de mes impôts en Suisse?", answer: "Oui. Dans presque tous les cantons suisses, les coûts d'investissement d'une installation solaire sur un bâtiment existant peuvent être déduits du revenu imposable en tant qu'entretien immobilier. Cet avantage n'est valable que jusqu'à fin 2027 au niveau fédéral." },
      { question: "Jusqu'à quand puis-je déduire fiscalement une installation solaire?", answer: "Au niveau fédéral, la possibilité de déduction fiscale devrait expirer fin 2027 — suite à la suppression de la valeur locative approuvée le 28 septembre 2025. Certains cantons pourraient conserver leurs propres possibilités de déduction." },
      { question: "Puis-je répartir la déduction fiscale sur deux ans?", answer: "Oui. En effectuant un paiement partiel en décembre et le solde en janvier, vous pouvez répartir l'investissement sur deux années fiscales. C'est souvent fiscalement plus avantageux si le montant total réduirait fortement le revenu imposable d'une seule année." },
      { question: "Le système de stockage par batterie est-il également déductible fiscalement?", answer: "Dans la plupart des cantons oui, surtout s'il est installé simultanément avec l'installation solaire. Dans certains cantons, une mise à niveau ultérieure est également déductible. Les exceptions sont SO, UR et ZG." },
      { question: "Dois-je imposer la rétribution unique (RU)?", answer: "Oui, la RU est considérée comme un revenu et doit être déclarée dans l'année de versement. Elle réduit également le montant d'investissement déductible. Pratiquement, cela signifie que vous déduisez uniquement l'investissement net (moins la RU) comme entretien immobilier." },
      { question: "La déduction fiscale s'applique-t-elle aussi aux nouvelles constructions?", answer: "Dans la plupart des cantons non directement — les nouvelles constructions ne sont pas considérées comme de l'entretien immobilier. Le canton de Lucerne est une exception. Pour les bâtiments existants (généralement au moins 5 ans), la déduction est possible dans presque tous les cantons." },
      { question: "Que se passe-t-il avec la déduction fiscale après 2028?", answer: "Au niveau fédéral, la déduction fiscale pour entretien immobilier devrait disparaître à partir du 1er janvier 2028. Certains cantons peuvent maintenir leurs propres règles. Celui qui souhaite profiter de la règle fédérale doit être installé avant fin 2027." },
    ],
  },

  // ─── STEUERABZUG (EN) ────────────────────────────────────────────────────
  {
    slug: 'solaranlage-steuerabzug-schweiz-2026',
    locale: 'en',
    title: 'Solar Panel Tax Deduction Switzerland 2026 — Last Chance Until 2027',
    metaDescription: 'Claiming a solar panel system on your Swiss taxes: how much can you save? All cantons compared and why 2026/2027 is the last chance. Find out now.',
    image: '/images/steuererklaerung-solaranlage-schweiz.webp',
    date: 'May 3, 2026',
    readMin: 10,
    tag: 'Subsidies & Tax',
    intro: "The tax deductibility of a solar panel system in Switzerland is one of the biggest and least known advantages for homeowners. But this advantage has an expiry date: from 2028, the tax deduction will likely be abolished entirely at the federal level. 2026 and 2027 are the last years to act.",
    sections: [
      {
        heading: 'What does tax deductibility of a solar system mean?',
        content: [
          "In Switzerland, installing a solar system on an existing building is classified as property maintenance — that is, a value-preserving or value-enhancing measure. These costs can be deducted directly from taxable income, just like a roof renovation or a new heating system.",
        ],
        stats: [
          { label: 'Last chance for tax deduction', value: 'End of 2027' },
        ],
        bullets: [
          "The full installation costs of the solar system",
          "The battery storage system (in most cantons, if installed simultaneously)",
          "Planning costs and permit fees",
          "Future maintenance and servicing costs of the system (deductible annually)",
        ],
        highlight: "Not deductible: systems on new buildings (in most cantons). Subsidies such as the OTP must be deducted from the deductible investment amount.",
      },
      {
        heading: 'Why is 2026 the last big chance for the tax deduction?',
        content: [
          "On 28 September 2025, the Swiss electorate approved the abolition of the imputed rental value by 57.7%. This reform has direct consequences for all homeowners.",
          "From 1 January 2028, at the federal level: the deduction for property maintenance disappears, along with the deduction for energy efficiency measures — and therefore also the tax deduction for new solar systems.",
          "Some cantons may retain their own deduction options for energy-saving and environmental protection measures — but only until 2050 at most, and not all will do so. At the federal level, the advantage is definitively gone.",
        ],
        highlight: "The consequence: anyone who installs a solar system before end of 2027 still benefits from the full federal tax deduction.",
      },
      {
        heading: 'How much can you save? Calculation examples',
        content: [
          "The amount of tax saving depends on the investment amount, the canton and your personal marginal tax rate.",
        ],
        highlight: "Tax tip: By making a partial payment in December and the remainder in January, you can spread the deduction across two tax years. This is particularly advantageous if the total investment would significantly reduce taxable income in a single year. Consult your tax adviser.",
      },
      {
        heading: 'Solar panel tax deduction: cantonal comparison',
        content: [
          "The tax treatment of solar systems varies between cantons. Here is the current overview:",
        ],
        bullets: [
          "Zurich: ✅ Investment deductible, ✅ Battery (simultaneous), ✅ Net principle — Additional subsidy City of Zurich",
          "Aargau: ✅ Investment deductible, ✅ Battery (also retrofit), Gross principle — Battery also deductible as retrofit",
          "St. Gallen: ✅ Investment deductible, ✅ Battery (also retrofit), Net principle — Cantonal energy promotion",
          "Basel-Stadt: ✅ Investment deductible, ✅ Battery, ✅ Net principle — Additional municipal programmes",
          "Obwalden: ✅ Investment deductible, ✅ Battery, ✅ Net principle — Promotion on request",
          "Schwyz: ✅ Investment deductible, ✅ Battery (simultaneous), ✅ Net principle — Cantonal promotion",
          "Valais: ✅ Investment deductible, ✅ Battery (simultaneous), ✅ Net principle — Cantonal energy promotion",
          "Solothurn: ✅ Investment deductible, ❌ Battery not deductible, Gross principle",
          "Uri: ✅ Investment deductible, ❌ Battery not deductible, Gross principle",
          "Zug: ✅ Investment deductible, ❌ Battery not deductible, Net principle",
        ],
        highlight: "Note: These figures are indicative values. Cantons may change their practice. Please consult your cantonal tax office or a tax adviser for your specific situation.",
      },
      {
        heading: 'How does the tax deduction work in practice?',
        content: [
          "Step 1 — Make the investment: You commission a certified installer and pay for the system. Keep all invoices carefully.",
          "Step 2 — Apply for subsidies: Your installer submits the OTP application to Pronovo. The OTP paid out must be deducted from the deductible investment amount.",
          "Step 3 — Tax return: In the year of investment, you enter the deductible costs as property maintenance in your tax return. The OTP, if paid out in the same year, must be declared as income.",
          "Step 4 — Annual maintenance costs: In subsequent years too, you can deduct maintenance costs, cleaning costs and any repairs as property maintenance.",
        ],
      },
      {
        heading: 'What about battery storage?',
        content: [
          "The tax treatment of battery storage varies between cantons — but it is deductible in most of them.",
        ],
        bullets: [
          "Battery installed together with the system: In cantons AG, BE, OW, SZ, ZH and VS, the battery is deductible if installed simultaneously with the PV system.",
          "Battery installed later: In cantons AG, BE, OW, SZ and SG, a battery retrofit is also tax-deductible.",
          "Battery not deductible: In cantons SO, UR and ZG, the battery storage system generally cannot be claimed.",
        ],
        highlight: "Recommendation: Install the system and battery simultaneously — this maximises tax benefits and simplifies the declaration.",
      },
      {
        heading: 'How is solar electricity production taxed?',
        content: [
          "Self-consumption: Solar electricity consumed by yourself is not taxed in Switzerland. What you produce and consume yourself is tax-free — another reason to maximise self-consumption.",
          "Electricity fed into the grid (feed-in tariff): Electricity fed into the grid is taxed as income. Most cantons today apply the net principle — only what is actually paid out is taxed. For a small system with high self-consumption, the taxable amount may be low.",
          "Subsidies (OTP): The one-time payment is considered income and must be declared in the year of payment. It also reduces the deductible investment amount.",
        ],
      },
      {
        heading: 'Why you should act now — not in 2027',
        content: [
          "1. Planning takes time: From the first quote to commissioning a solar system takes 4–12 weeks. Anyone who wants to be installed before end of 2027 must order by autumn 2027 at the latest — and installers will be overloaded by then.",
          "2. Costs rise under pressure: When everyone orders just before end of 2027, bottlenecks arise. Experience shows that prices and waiting times increase when many order simultaneously.",
          "3. Every year without a system costs money: Investing now rather than in 2027 means saving electricity costs immediately.",
        ],
        highlight: "The most common reaction: 'I'll wait another year.' That sounds logical, but it is risky — installer capacities will be limited in the final months before end of 2027, and prices will rise under pressure.",
      },
    ],
    ctaHeading: 'Use the tax deduction while you still can — request a quote now',
    ctaText: "2026 and 2027 are the last years with full tax deduction at the federal level.",
    ctaButton: 'Request a free quote',
    formUrl: '/en/request',
    relatedSlugs: ['lohnt-sich-solaranlage-schweiz-2026', 'foerderungen-photovoltaik-2026', 'batteriespeicher-solaranlage-lohnt-sich'],
    relatedPageLinks: [
      { label: 'Subsidies & One-Time Payment (OTP)', href: '/en/solar-subsidies' },
      { label: 'Solar with battery storage', href: '/en/solar-with-battery' },
      { label: 'Solar system costs', href: '/en/solar-panel-costs' },
      { label: 'Compare solar quotes', href: '/en/get-solar-panel-quotes' },
      { label: 'Is solar worth it in 2026?', href: '/en/blog/is-solar-worth-it-switzerland-2026' },
    ],
    faqs: [
      { question: 'Can I claim a solar system on my taxes in Switzerland?', answer: "Yes. In almost all Swiss cantons, the investment costs of a solar system on an existing building can be deducted from taxable income as property maintenance. However, this advantage is only valid until end of 2027 at the federal level." },
      { question: 'Until when can I claim a solar system for tax purposes?', answer: "At the federal level, the tax deduction option is expected to expire at end of 2027 — as a result of the abolition of the imputed rental value approved on 28 September 2025. Some cantons may retain their own deduction options." },
      { question: 'Can I spread the tax deduction across two years?', answer: "Yes. By making a partial payment in December and the remainder in January, you can spread the investment across two tax years. This is often fiscally more advantageous if the total amount would significantly reduce taxable income in a single year." },
      { question: 'Is battery storage also tax-deductible?', answer: "In most cantons yes, especially if installed simultaneously with the solar system. In some cantons, a later retrofit is also deductible. Exceptions are SO, UR and ZG." },
      { question: 'Do I have to pay tax on the one-time payment (OTP)?', answer: "Yes, the OTP is considered income and must be declared in the year of payment. It also reduces the deductible investment amount. In practice: you deduct only the net investment (minus OTP) as property maintenance." },
      { question: 'Does the tax deduction apply to new buildings?', answer: "In most cantons not directly — new buildings are not considered property maintenance. The canton of Lucerne is an exception. For existing buildings (generally at least 5 years old), the deduction is possible in almost all cantons." },
      { question: 'What happens to the tax deduction after 2028?', answer: "At the federal level, the tax deduction for property maintenance is expected to disappear from 1 January 2028. Some cantons may maintain their own rules. Anyone who wants to benefit from the federal rule must be installed before end of 2027." },
    ],
  },

  // ─── STEUERABZUG (IT) ────────────────────────────────────────────────────
  {
    slug: 'solaranlage-steuerabzug-schweiz-2026',
    locale: 'it',
    title: 'Detrazione fiscale impianto solare Svizzera 2026 — ultima chance fino al 2027',
    metaDescription: "Detrarre l'impianto solare dalle tasse in Svizzera: quanto si può risparmiare? Tutti i cantoni a confronto e perché il 2026/2027 è l'ultima possibilità.",
    image: '/images/steuererklaerung-solaranlage-schweiz.webp',
    date: '3 maggio 2026',
    readMin: 10,
    tag: 'Incentivi & Fisco',
    intro: "La detraibilità fiscale di un impianto solare in Svizzera è uno dei vantaggi più significativi e meno conosciuti per i proprietari di immobili. Ma questo vantaggio ha una data di scadenza: dal 2028, la deduzione fiscale sarà presumibilmente eliminata completamente a livello federale. Il 2026 e il 2027 sono gli ultimi anni per agire.",
    sections: [
      {
        heading: "Cosa significa la detraibilità fiscale di un impianto solare?",
        content: [
          "In Svizzera, l'installazione di un impianto solare su un edificio esistente è classificata come manutenzione immobiliare — ovvero una misura che conserva o aumenta il valore. Questi costi possono essere detratti direttamente dal reddito imponibile, esattamente come un risanamento del tetto o un nuovo sistema di riscaldamento.",
        ],
        stats: [
          { label: 'Ultima chance deduzione fiscale', value: 'Fine 2027' },
        ],
        bullets: [
          "L'intero costo di installazione dell'impianto solare",
          "Il sistema di accumulo a batteria (nella maggior parte dei cantoni, se installato simultaneamente)",
          "Costi di pianificazione e tasse per i permessi",
          "Futuri costi di manutenzione dell'impianto (detraibili annualmente)",
        ],
        highlight: "Non detraibile: impianti su nuove costruzioni (nella maggior parte dei cantoni). Gli incentivi come la RU devono essere sottratti dall'importo detraibile dell'investimento.",
      },
      {
        heading: "Perché il 2026 è l'ultima grande opportunità per la deduzione fiscale?",
        content: [
          "Il 28 settembre 2025 il popolo svizzero ha approvato con il 57,7% l'abolizione del valore locativo. Questa riforma ha conseguenze dirette per tutti i proprietari di immobili.",
          "Dal 1° gennaio 2028, a livello federale: la deduzione per la manutenzione immobiliare scompare, insieme alla deduzione per le misure di risparmio energetico — e quindi anche la deduzione fiscale per i nuovi impianti solari.",
          "Alcuni cantoni possono mantenere proprie possibilità di deduzione per le misure di risparmio energetico e di protezione ambientale — ma solo fino al 2050 al massimo, e non tutti lo faranno. A livello federale, il vantaggio scompare definitivamente.",
        ],
        highlight: "La conseguenza: chi installa un impianto solare entro fine 2027 beneficia ancora della piena deduzione fiscale federale.",
      },
      {
        heading: "Quanto si può risparmiare concretamente? Esempi di calcolo",
        content: [
          "L'entità del risparmio fiscale dipende dall'importo investito, dal cantone e dall'aliquota marginale personale.",
        ],
        highlight: "Consiglio fiscale: Effettuando un pagamento parziale a dicembre e il saldo a gennaio, è possibile distribuire la deduzione su due anni fiscali. Ciò è particolarmente vantaggioso se l'investimento totale ridurrebbe notevolmente il reddito imponibile di un singolo anno. Consultare il proprio consulente fiscale.",
      },
      {
        heading: "Detrazione fiscale impianto solare: confronto cantonale",
        content: [
          "Il trattamento fiscale degli impianti solari varia tra i cantoni. Ecco il panorama attuale:",
        ],
        bullets: [
          "Zurigo: ✅ Investimento detraibile, ✅ Batteria (simultanea), ✅ Principio netto — Incentivo aggiuntivo città di Zurigo",
          "Argovia: ✅ Investimento detraibile, ✅ Batteria (anche integrazione), Principio lordo — Batteria detraibile anche come integrazione",
          "San Gallo: ✅ Investimento detraibile, ✅ Batteria (anche integrazione), Principio netto — Incentivi energetici cantonali",
          "Basilea-Città: ✅ Investimento detraibile, ✅ Batteria, ✅ Principio netto — Programmi comunali aggiuntivi",
          "Obvaldo: ✅ Investimento detraibile, ✅ Batteria, ✅ Principio netto — Incentivi su richiesta",
          "Svitto: ✅ Investimento detraibile, ✅ Batteria (simultanea), ✅ Principio netto — Incentivi cantonali",
          "Vallese: ✅ Investimento detraibile, ✅ Batteria (simultanea), ✅ Principio netto — Incentivi energetici cantonali",
          "Soletta: ✅ Investimento detraibile, ❌ Batteria non detraibile, Principio lordo",
          "Uri: ✅ Investimento detraibile, ❌ Batteria non detraibile, Principio lordo",
          "Zugo: ✅ Investimento detraibile, ❌ Batteria non detraibile, Principio netto",
        ],
        highlight: "Nota: I dati sono valori indicativi. I cantoni possono modificare la propria prassi. Consultare l'ufficio cantonale delle imposte o un consulente fiscale per la propria situazione concreta.",
      },
      {
        heading: "Come funziona la deduzione fiscale nella pratica?",
        content: [
          "Passo 1 — Effettuare l'investimento: Si incarica un installatore certificato e si paga l'impianto. Conservare attentamente tutte le fatture.",
          "Passo 2 — Richiedere gli incentivi: L'installatore presenta la domanda di RU a Pronovo. La RU versata deve essere sottratta dall'importo di investimento detraibile.",
          "Passo 3 — Dichiarazione dei redditi: Nell'anno dell'investimento si inseriscono i costi detraibili come manutenzione immobiliare nella dichiarazione dei redditi. La RU, se versata nello stesso anno, deve essere dichiarata come reddito.",
          "Passo 4 — Costi di manutenzione annuali: Anche negli anni successivi si possono detrarre i costi di manutenzione, pulizia e le eventuali riparazioni come manutenzione immobiliare.",
        ],
      },
      {
        heading: "Cosa succede con l'accumulatore a batteria?",
        content: [
          "Il trattamento fiscale dell'accumulatore a batteria varia tra i cantoni — ma nella maggior parte è detraibile.",
        ],
        bullets: [
          "Batteria installata insieme all'impianto: Nei cantoni AG, BE, OW, SZ, ZH e VS la batteria è detraibile se installata contemporaneamente all'impianto FV.",
          "Batteria installata successivamente: Nei cantoni AG, BE, OW, SZ e SG anche una batteria aggiunta successivamente è fiscalmente detraibile.",
          "Batteria non detraibile: Nei cantoni SO, UR e ZG l'accumulatore a batteria non può essere generalmente dichiarato.",
        ],
        highlight: "Raccomandazione: Installare impianto e batteria contemporaneamente — ciò massimizza i vantaggi fiscali e semplifica la dichiarazione.",
      },
      {
        heading: "Come viene tassata la produzione di energia solare?",
        content: [
          "Autoconsumo: L'energia solare autoconsumata non è tassata in Svizzera. Ciò che si produce e si consuma direttamente è esente da imposta — un ulteriore motivo per massimizzare l'autoconsumo.",
          "Energia immessa in rete (remunerazione per l'immissione): L'energia immessa nella rete è tassata come reddito. La maggior parte dei cantoni applica oggi il principio netto — viene tassato solo ciò che viene effettivamente versato. Per un piccolo impianto con alto autoconsumo, l'importo imponibile può essere basso.",
          "Incentivi (RU): La remunerazione unica è considerata reddito e deve essere dichiarata nell'anno del versamento. Riduce inoltre l'importo di investimento detraibile.",
        ],
      },
      {
        heading: "Perché agire ora — e non nel 2027",
        content: [
          "1. La pianificazione richiede tempo: Dal primo preventivo alla messa in servizio di un impianto solare passano 4–12 settimane. Chi vuole essere installato entro fine 2027 deve ordinare al più tardi nell'autunno 2027 — e gli installatori saranno sovraccarichi.",
          "2. I costi aumentano sotto pressione: Quando tutti ordinano poco prima di fine 2027, si creano colli di bottiglia. L'esperienza mostra che prezzi e tempi di attesa aumentano quando molti ordinano contemporaneamente.",
          "3. Ogni anno senza impianto costa denaro: Chi investe ora invece che nel 2027 risparmia già ora sui costi dell'energia.",
        ],
        highlight: "La reazione più frequente: «Aspetto ancora un anno.» Sembra logico, ma è rischioso — le capacità degli installatori saranno limitate negli ultimi mesi prima di fine 2027, e i prezzi aumenteranno sotto pressione.",
      },
    ],
    ctaHeading: "Sfrutta ancora la deduzione fiscale — richiedi subito un preventivo",
    ctaText: "Il 2026 e il 2027 sono gli ultimi anni con piena deduzione fiscale a livello federale.",
    ctaButton: 'Richiedi preventivo gratuito',
    formUrl: '/it/richiesta',
    relatedSlugs: ['lohnt-sich-solaranlage-schweiz-2026', 'foerderungen-photovoltaik-2026', 'batteriespeicher-solaranlage-lohnt-sich'],
    relatedPageLinks: [
      { label: 'Incentivi & Remunerazione unica (RU)', href: '/it/incentivi-solari' },
      { label: 'Solare con accumulo', href: '/it/solare-con-accumulo' },
      { label: 'Costi impianto solare', href: '/it/costi-impianto-solare' },
      { label: 'Richiedere preventivi solari', href: '/it/richiedere-preventivo-solare' },
      { label: 'Vale la pena nel 2026?', href: '/it/blog/vale-la-pena-impianto-solare-svizzera-2026' },
    ],
    faqs: [
      { question: "Posso detrarre un impianto solare dalle tasse in Svizzera?", answer: "Sì. In quasi tutti i cantoni svizzeri i costi di investimento di un impianto solare su un edificio esistente possono essere detratti dal reddito imponibile come manutenzione immobiliare. Questo vantaggio vale però solo fino a fine 2027 a livello federale." },
      { question: "Fino a quando posso detrarre fiscalmente un impianto solare?", answer: "A livello federale, la possibilità di deduzione fiscale dovrebbe scadere a fine 2027 — in seguito all'abolizione del valore locativo approvata il 28 settembre 2025. Alcuni cantoni potrebbero mantenere proprie possibilità di deduzione." },
      { question: "Posso distribuire la deduzione fiscale su due anni?", answer: "Sì. Effettuando un pagamento parziale a dicembre e il saldo a gennaio, è possibile distribuire l'investimento su due anni fiscali. Questo è spesso fiscalmente più vantaggioso se l'importo totale ridurrebbe notevolmente il reddito imponibile di un singolo anno." },
      { question: "Anche l'accumulatore a batteria è fiscalmente detraibile?", answer: "Nella maggior parte dei cantoni sì, soprattutto se installato contemporaneamente all'impianto solare. In alcuni cantoni è detraibile anche un'aggiunta successiva. Le eccezioni sono SO, UR e ZG." },
      { question: "Devo dichiarare la remunerazione unica (RU)?", answer: "Sì, la RU è considerata reddito e deve essere dichiarata nell'anno del versamento. Riduce inoltre l'importo di investimento detraibile. In pratica: si detrae solo l'investimento netto (meno la RU) come manutenzione immobiliare." },
      { question: "La deduzione fiscale vale anche per le nuove costruzioni?", answer: "Nella maggior parte dei cantoni no direttamente — le nuove costruzioni non sono considerate manutenzione immobiliare. Il canton Lucerna è un'eccezione. Per gli edifici esistenti (generalmente almeno 5 anni) la deduzione è possibile in quasi tutti i cantoni." },
      { question: "Cosa succede alla deduzione fiscale dopo il 2028?", answer: "A livello federale la deduzione fiscale per la manutenzione immobiliare dovrebbe scomparire dal 1° gennaio 2028. Alcuni cantoni possono mantenere proprie normative. Chi vuole beneficiare della norma federale deve essere installato entro fine 2027." },
    ],
  },

  // ─── SOLARANLAGE + WÄRMEPUMPE (DE) ───────────────────────────────────────
  {
    slug: 'solaranlage-waermepumpe-kombinieren-schweiz',
    locale: 'de',
    title: 'Solaranlage mit Wärmepumpe kombinieren in der Schweiz — lohnt es sich 2026?',
    metaDescription: 'Solaranlage mit Wärmepumpe kombinieren in der Schweiz: Kosten, Ersparnis und Förderung 2026. Wann lohnt sich die Kombination wirklich? Mit Rechenbeispielen von PvPro.ch.',
    image: '/images/solaranlage-waermepumpe-chalet-winter.webp',
    date: '3. Mai 2026',
    readMin: 10,
    tag: 'Ratgeber',
    intro: 'Solaranlage mit Wärmepumpe kombinieren — das ist die effizienteste Energielösung für Schweizer Hausbesitzer 2026. Die Wärmepumpe braucht Strom, die Solaranlage produziert ihn. Diese Seite erklärt, wie die Kombination funktioniert, was sie kostet und für wen sie sich besonders lohnt.',
    sections: [
      {
        heading: 'Warum ist die Kombination Solaranlage und Wärmepumpe so effizient?',
        content: [
          'Wenn Sie Ihre Wärmepumpe mit Solarstrom betreiben, sinken die effektiven Heizkosten dramatisch. Das ist der Kern der Kombination — und der Grund, warum immer mehr Schweizer Hausbesitzer auf dieses System setzen.',
          'Die Jahresarbeitszahl (JAZ) entscheidet, wie effizient die Kombination ist. Je höher die JAZ, desto weniger Strom braucht die Pumpe — und desto mehr profitieren Sie von Ihrem Solarstrom:',
        ],
      },
      {
        heading: 'Welche Förderungen gibt es für die Kombination in der Schweiz?',
        content: [
          'Solaranlage und Wärmepumpe werden in der Schweiz separat gefördert — das heisst, Sie erhalten Fördergelder für beide Komponenten.',
        ],
        highlight: "Der Steuerabzug läuft Ende 2027 aus — 2026 und 2027 sind die letzten Jahre mit vollem steuerlichem Abzug.",
      },
      {
        heading: 'Solaranlage mit Wärmepumpe kombinieren — welcher Typ passt?',
        content: [
          'Nicht jede Wärmepumpe eignet sich gleich gut für die Kombination mit einer Solaranlage.',
          "Luft-Wasser-Wärmepumpe (die häufigste Wahl): Keine Bohrung nötig, braucht aber mehr Solarstrom als andere Typen. Ideal für Bestandsgebäude und kleineres Budget.",
          "Ideal für Neubauten und maximale Effizienz.",
          'Wasser-Wasser-Wärmepumpe (die stärkste): Sehr effizient, benötigt aber Grundwasser in ausreichender Menge. Nicht überall möglich, Genehmigung nötig.',
        ],
        highlight: 'Für die meisten Schweizer Einfamilienhäuser ist die Luft-Wasser-Wärmepumpe in Kombination mit einer Solaranlage die praktischste und wirtschaftlichste Lösung.',
      },
      {
        heading: 'Brauche ich einen Batteriespeicher dazu?',
        content: [
          'Nicht zwingend — aber ein Batteriespeicher erhöht den Eigenverbrauch erheblich.',
          'Ohne Speicher: Im Sommer läuft die Wärmepumpe für Warmwasser direkt mit Solarstrom. Im Winter — wenn die Wärmepumpe am meisten Strom braucht — produziert die Solaranlage wenig.',
          'Mit Speicher: Solarstrom aus dem Mittag wird gespeichert und abends für die Wärmepumpe genutzt.',
          'Mit Speicher + Smart-Heizsteuerung: Die Wärmepumpe lädt tagsüber den Warmwasserspeicher mit Solarstrom vor (Wärme-Pufferspeicher).',
        ],
        highlight: 'Ein Energiemanagementsystem, das die Wärmepumpe automatisch dann einschaltet, wenn die Solaranlage Überschuss produziert, ist oft wertvoller als ein teurer Batteriespeicher.',
      },
      {
        heading: 'Für wen lohnt sich die Kombination besonders?',
        content: [
          'Hausbesitzer mit alter Öl- oder Gasheizung: Der Umstieg von Öl/Gas auf Wärmepumpe + Solar reduziert die Energiekosten am stärksten. Die Kombination der Fördergelder ist hier maximal.',
          'Neubauten und Totalsanierungen: Bei einem Neubau ist die Integration von Anfang an optimal geplant. Fussbodenheizung und gut gedämmte Hülle maximieren die Effizienz der Wärmepumpe.',
          'Haushalte mit E-Auto: Wer ein Elektroauto hat oder plant, braucht ohnehin mehr Strom. Die Solaranlage muss entsprechend grösser dimensioniert werden — und die Kombination lohnt sich noch mehr.',
        ],
        bullets: [
          'Alte Öl- oder Gasheizung: maximale Einsparung und kombinierte Fördergelder',
          'Neubauten: optimale Integration von Anfang an',
          'E-Auto-Besitzer: grössere Anlage, noch mehr Ersparnis',
          "Investition 2026/2027: Steuerabzug für Solaranlage UND Wärmepumpe vor Ablauf 2027 nutzen",
        ],
      },
      {
        heading: 'Schritt für Schritt: So gehen Sie vor',
        content: [
          'Schritt 1 — Energiebedarf analysieren: Wie viel Strom verbraucht Ihr Haushalt? Wie viel Wärme braucht Ihr Gebäude? Ist das Gebäude gut gedämmt? Ein zertifizierter Installateur beantwortet diese Fragen beim kostenlosen Beratungsgespräch.',
          'Schritt 2 — System dimensionieren: Solaranlage und Wärmepumpe müssen aufeinander abgestimmt sein. Eine zu kleine Solaranlage deckt den WP-Strombedarf nicht — eine zu grosse produziert unnötigen Überschuss.',
          "Schritt 3 — Offerten vergleichen: Mindestens 3 Offerten einholen ist bei einer so grossen Investition Pflicht.",
          'Schritt 4 — Fördergelder beantragen: Für das Gebäudeprogramm (Wärmepumpe) muss der Förderantrag vor Baubeginn eingereicht werden. Für die EIV (Solaranlage) stellt der Installateur den Antrag nach der Installation.',
          'Schritt 5 — Installation und Inbetriebnahme: Solaranlage und Wärmepumpe können gleichzeitig oder zeitlich versetzt installiert werden. Bei gleichzeitiger Installation sparen Sie Gerüstkosten.',
        ],
      },
    ],
    ctaHeading: 'Jetzt Kombination Solaranlage + Wärmepumpe anfragen',
    ctaText: 'Lassen Sie Solaranlage und Wärmepumpe gemeinsam auf den Energiebedarf Ihres Gebäudes abstimmen.',
    ctaButton: 'Kostenlose Offerte anfordern',
    formUrl: '/anfrage',
    relatedSlugs: ['lohnt-sich-solaranlage-schweiz-2026', 'solaranlage-steuerabzug-schweiz-2026', 'batteriespeicher-solaranlage-lohnt-sich'],
    relatedPageLinks: [
      { label: 'Solaranlage mit Speicher', href: '/solaranlage-mit-speicher' },
      { label: 'Förderungen & EIV', href: '/foerderungen' },
      { label: 'Kosten Solaranlage Schweiz', href: '/solaranlage-kosten' },
      { label: 'Photovoltaik Komplettlösung', href: '/photovoltaik-komplettloesung-schweiz' },
      { label: 'Solaranlage Steuerabzug 2026', href: '/blog/solaranlage-steuerabzug-schweiz-2026' },
      { label: 'Offerten einholen & vergleichen', href: '/solaranlage-offerte-einholen' },
      { label: 'Solaranlage installieren Schweiz', href: '/solaranlage-installieren-schweiz' },
      { label: 'Solaranlage Einfamilienhaus', href: '/solaranlage-einfamilienhaus' },
    ],
    faqs: [
      { question: 'Lohnt sich eine Solaranlage mit Wärmepumpe in der Schweiz 2026?', answer: "Ja, die Kombination ist eine der rentabelsten Energieinvestitionen überhaupt." },
      { question: 'Wie gross muss die Solaranlage für eine Wärmepumpe sein?', answer: 'Die Anlage sollte anhand des Stromverbrauchs der Wärmepumpe, des Haushaltsverbrauchs, der Dachfläche und des Standorts dimensioniert werden.' },
      { question: 'Welche Wärmepumpe passt am besten zur Solaranlage?', answer: 'Alle Wärmepumpentypen lassen sich mit einer Solaranlage kombinieren. Die Luft-Wasser-Wärmepumpe ist am verbreitetsten und günstigsten. Die Sole-Wasser-Wärmepumpe ist effizienter und braucht weniger Solarstrom, kostet aber mehr.' },
      { question: 'Brauche ich einen Batteriespeicher für die Kombination?', answer: 'Oft ist ein Energiemanagementsystem, das die Wärmepumpe automatisch bei Solarüberschuss einschaltet, wirtschaftlicher als ein teurer Batteriespeicher.' },
      { question: 'Welche Förderungen gibt es für Solaranlage und Wärmepumpe zusammen?', answer: "Solaranlage und Wärmepumpe werden separat gefördert. Kantonale Programme und die steuerliche Behandlung müssen für den Standort geprüft werden." },
      { question: 'Kann ich eine Wärmepumpe nachträglich zu meiner bestehenden Solaranlage hinzufügen?', answer: 'Ja, das ist problemlos möglich. Allerdings sollte die bestehende Solaranlage gross genug dimensioniert sein.' },
    ],
  },

  // ─── SOLARANLAGE + WÄRMEPUMPE (FR) ───────────────────────────────────────
  {
    slug: 'solaranlage-waermepumpe-kombinieren-schweiz',
    locale: 'fr',
    title: 'Combiner panneau solaire et pompe à chaleur en Suisse — est-ce rentable en 2026?',
    metaDescription: 'Combiner panneau solaire et pompe à chaleur en Suisse: coûts, économies et subventions 2026. Quand est-ce vraiment rentable? Avec des exemples chiffrés de PvPro.ch.',
    image: '/images/solaranlage-waermepumpe-chalet-winter.webp',
    date: '3 mai 2026',
    readMin: 10,
    tag: 'Guide',
    intro: "Combiner panneau solaire et pompe à chaleur — c'est la solution énergétique la plus efficace pour les propriétaires suisses en 2026. La pompe à chaleur consomme de l'électricité, le panneau solaire en produit. Simple en théorie — et en pratique aussi. Cette page explique comment fonctionne la combinaison, ce qu'elle coûte et pour qui elle est particulièrement rentable.",
    sections: [
      {
        heading: 'Pourquoi la combinaison panneau solaire et pompe à chaleur est-elle si efficace?',
        content: [
          "Si vous faites fonctionner votre pompe à chaleur avec de l'électricité solaire, vos coûts de chauffage effectifs chutent considérablement. C'est le cœur de la combinaison — et la raison pour laquelle de plus en plus de propriétaires suisses adoptent ce système.",
          "Le coefficient de performance saisonnier (COP annuel) détermine l'efficacité de la combinaison. Plus le COP est élevé, moins la pompe consomme d'électricité:",
        ],
      },
      {
        heading: 'Quelles subventions pour la combinaison en Suisse?',
        content: [
          "Le panneau solaire et la pompe à chaleur sont subventionnés séparément en Suisse — vous recevez donc des aides pour les deux composants.",
        ],
        highlight: "La déduction fiscale expire fin 2027 — 2026 et 2027 sont les dernières années pour en profiter pleinement.",
      },
      {
        heading: 'Combiner panneau solaire et pompe à chaleur — quel type choisir?',
        content: [
          'Toutes les pompes à chaleur ne se combinent pas avec les mêmes performances à un panneau solaire.',
          "Pompe à chaleur air-eau (le choix le plus fréquent): Pas de forage nécessaire, mais consomme plus d'électricité solaire que les autres types. Idéale pour les bâtiments existants et les budgets plus modestes.",
          "Idéale pour les nouvelles constructions.",
          "Pompe à chaleur eau-eau (la plus puissante): Très efficace, mais nécessite de l'eau souterraine en quantité suffisante. Pas possible partout, autorisation requise.",
        ],
        highlight: "Pour la plupart des maisons individuelles suisses, la pompe à chaleur air-eau combinée à un panneau solaire est la solution la plus pratique et la plus économique.",
      },
      {
        heading: "Ai-je besoin d'une batterie de stockage?",
        content: [
          "Pas obligatoirement — mais une batterie augmente considérablement le taux d'autoconsommation.",
          "Sans batterie: En été, la PAC fonctionne directement avec l'électricité solaire pour l'eau chaude. En hiver — quand la PAC consomme le plus — le panneau solaire produit peu.",
          "Avec batterie: L'électricité solaire de midi est stockée et utilisée le soir pour la PAC.",
          "Avec batterie + gestion intelligente du chauffage: La PAC préchauffe le ballon d'eau chaude le jour avec l'énergie solaire.",
        ],
        highlight: "Un système de gestion de l'énergie qui active automatiquement la pompe à chaleur lors des surplus solaires est souvent plus rentable qu'une batterie coûteuse.",
      },
      {
        heading: 'Pour qui la combinaison est-elle particulièrement intéressante?',
        content: [
          "Propriétaires avec une ancienne chaudière à mazout ou à gaz: Le passage à pompe à chaleur + solaire réduit le plus les coûts énergétiques. La combinaison des subventions est maximale ici.",
          "Nouvelles constructions et rénovations complètes: L'intégration est planifiée de manière optimale dès le départ. Un plancher chauffant et une enveloppe bien isolée maximisent l'efficacité de la PAC.",
          "Ménages avec voiture électrique: Besoin de plus d'électricité de toute façon — le panneau solaire doit être dimensionné en conséquence — et la combinaison est encore plus rentable.",
        ],
        bullets: [
          'Ancienne chaudière mazout/gaz: économies maximales et subventions cumulées',
          'Nouvelles constructions: intégration optimale dès le départ',
          "Propriétaires de voiture électrique: plus grande installation, plus d'économies",
          "Investissement 2026/2027: déduction fiscale pour les deux systèmes avant l'expiration 2027",
        ],
      },
      {
        heading: 'Étape par étape: comment procéder?',
        content: [
          "Étape 1 — Analyser les besoins énergétiques: Quelle est votre consommation électrique? Combien de chaleur votre bâtiment nécessite-t-il? Un installateur certifié répond à ces questions lors d'une consultation gratuite.",
          "Étape 2 — Dimensionner le système: Le panneau solaire et la pompe à chaleur doivent être adaptés l'un à l'autre. Un système trop petit ne couvre pas les besoins en électricité de la PAC.",
          "Étape 3 — Comparer les offres: Demander au moins 3 offres est indispensable pour un tel investissement.",
          "Étape 4 — Demander les subventions: Pour le Programme Bâtiments (PAC), la demande doit être déposée avant le début des travaux. Pour la RU (solaire), l'installateur dépose la demande après l'installation.",
          "Étape 5 — Installation et mise en service: Le panneau solaire et la PAC peuvent être installés simultanément ou successivement. Une installation simultanée permet d'économiser les frais d'échafaudage.",
        ],
      },
    ],
    ctaHeading: 'Demandez maintenant la combinaison panneau solaire + pompe à chaleur',
    ctaText: "Faites dimensionner ensemble l'installation solaire et la pompe à chaleur selon les besoins énergétiques du bâtiment.",
    ctaButton: 'Demander un devis gratuit',
    formUrl: '/fr/contact',
    relatedSlugs: ['lohnt-sich-solaranlage-schweiz-2026', 'solaranlage-steuerabzug-schweiz-2026', 'batteriespeicher-solaranlage-lohnt-sich'],
    relatedPageLinks: [
      { label: 'Solaire avec batterie', href: '/fr/solaire-avec-batterie' },
      { label: 'Subventions & RU', href: '/fr/subventions-solaires' },
      { label: 'Coût installation solaire', href: '/fr/cout-installation-solaire' },
      { label: 'Solution photovoltaïque complète', href: '/fr/solution-complete-photovoltaique-suisse' },
      { label: 'Déduction fiscale solaire 2026', href: '/fr/blog/deduction-fiscale-panneau-solaire-suisse-2026' },
      { label: 'Demander des devis solaires', href: '/fr/demander-offre-panneau-solaire' },
      { label: 'Installer panneau solaire Suisse', href: '/fr/installer-panneau-solaire-suisse' },
      { label: 'Solaire maison individuelle', href: '/fr/solaire-maison-individuelle' },
    ],
    faqs: [
      { question: 'Est-ce rentable de combiner un panneau solaire et une pompe à chaleur en Suisse en 2026?', answer: "Oui, la combinaison est l'un des investissements énergétiques les plus rentables." },
      { question: 'Quelle taille de panneau solaire pour une pompe à chaleur?', answer: "Le dimensionnement doit tenir compte de la consommation de la pompe à chaleur et du ménage, de la toiture et du site." },
      { question: 'Quelle pompe à chaleur convient le mieux au panneau solaire?', answer: "Tous les types de pompes à chaleur peuvent être combinés avec un panneau solaire. La pompe air-eau est la plus répandue et la moins chère. La pompe géothermique est plus efficace et consomme moins d'électricité solaire, mais coûte plus cher." },
      { question: "Ai-je besoin d'une batterie pour la combinaison?", answer: "Un système de gestion de l'énergie activant automatiquement la PAC lors des surplus solaires est souvent plus économique qu'une batterie coûteuse." },
      { question: 'Quelles subventions pour le panneau solaire et la pompe à chaleur ensemble?', answer: "Le solaire et la pompe à chaleur sont soutenus séparément. Les programmes cantonaux et le traitement fiscal doivent être vérifiés pour le lieu concerné." },
      { question: 'Puis-je ajouter une pompe à chaleur à mon installation solaire existante?', answer: "Oui, c'est tout à fait possible. Cependant, l'installation solaire existante doit être suffisamment dimensionnée." },
    ],
  },

  // ─── SOLARANLAGE + WÄRMEPUMPE (EN) ───────────────────────────────────────
  {
    slug: 'solaranlage-waermepumpe-kombinieren-schweiz',
    locale: 'en',
    title: 'Combining Solar Panels and Heat Pump in Switzerland — Is It Worth It in 2026?',
    metaDescription: 'Solar panels and heat pump combination in Switzerland: costs, savings and subsidies 2026. When does the combination really pay off? With calculation examples from PvPro.ch.',
    image: '/images/solaranlage-waermepumpe-chalet-winter.webp',
    date: '3 May 2026',
    readMin: 10,
    tag: 'Guide',
    intro: 'Combining solar panels with a heat pump is the most efficient energy solution for Swiss homeowners in 2026. The heat pump needs electricity, the solar panels produce it. Simple in theory — and in practice too. This page explains how the combination works, what it costs and who benefits most.',
    sections: [
      {
        heading: 'Why is the solar panel and heat pump combination so efficient?',
        content: [
          'Running your heat pump on solar electricity drastically reduces effective heating costs. That is the core of the combination — and why more and more Swiss homeowners are adopting this system.',
          'The Seasonal Coefficient of Performance (SCOP) determines how efficient the combination is. The higher the SCOP, the less electricity the pump needs:',
        ],
      },
      {
        heading: 'What subsidies are available for the combination in Switzerland?',
        content: [
          'Solar panels and heat pumps are subsidized separately in Switzerland — meaning you receive support for both components.',
        ],
        highlight: 'The tax deduction expires at the end of 2027 — 2026 and 2027 are the last years to take full advantage.',
      },
      {
        heading: 'Solar panels and heat pump — which type is best?',
        content: [
          'Not all heat pumps combine equally well with solar panels.',
          'Air-to-water heat pump (most common choice): No drilling required, but uses more solar electricity than other types. Ideal for existing buildings and smaller budgets.',
          'Ideal for new builds and maximum efficiency.',
          'Water-source heat pump (most powerful): Highly efficient, but requires sufficient groundwater availability. Not possible everywhere, permit required.',
        ],
        highlight: 'For most Swiss single-family homes, the air-to-water heat pump combined with solar panels is the most practical and economical solution.',
      },
      {
        heading: 'Do I need a battery storage system?',
        content: [
          'Not necessarily — but a battery significantly increases self-consumption.',
          'Without battery: In summer, the heat pump runs directly on solar electricity for hot water. In winter — when the heat pump uses most electricity — solar production is low.',
          'With battery: Solar electricity from midday is stored and used in the evening for the heat pump.',
          'With battery + smart heating control: The heat pump pre-heats the hot water tank during the day using solar energy.',
        ],
        highlight: 'An energy management system that automatically activates the heat pump when solar surplus is available is often more cost-effective than an expensive battery.',
      },
      {
        heading: 'Who benefits most from the combination?',
        content: [
          'Homeowners with old oil or gas heating: Switching from oil/gas to heat pump + solar reduces energy costs the most. The combination of subsidies is maximum here.',
          'New builds and full renovations: Integration is optimally planned from the start. Underfloor heating and a well-insulated building envelope maximize heat pump efficiency.',
          'Households with electric vehicles: Anyone with or planning an EV already needs more electricity. The solar system must be dimensioned accordingly — and the combination pays off even more.',
        ],
        bullets: [
          'Old oil/gas heating: maximum savings and combined subsidies',
          'New constructions: optimal integration from the start',
          'Electric vehicle owners: larger installation, even more savings',
          'Investing in 2026/2027: tax deduction for both systems before 2027 expiry',
        ],
      },
      {
        heading: 'Step by step: how to proceed',
        content: [
          'Step 1 — Analyse energy needs: How much electricity does your household use? How much heat does your building need? Is it well insulated? A certified installer answers these questions in a free consultation.',
          'Step 2 — Size the system: Solar panels and heat pump must be matched to each other. A system that is too small will not cover the heat pump\'s electricity needs.',
          'Step 3 — Compare quotes: Getting at least 3 quotes is essential for such a large investment.',
          'Step 4 — Apply for subsidies: For the Buildings Programme (heat pump), the application must be submitted before work begins. For the OTP (solar panels), the installer submits the application after installation.',
          'Step 5 — Installation and commissioning: Solar panels and heat pump can be installed simultaneously or in stages. Simultaneous installation saves scaffolding costs.',
        ],
      },
    ],
    ctaHeading: 'Request solar panel + heat pump combination now',
    ctaText: 'Have the solar system and heat pump sized together for the building’s energy needs.',
    ctaButton: 'Request free quote',
    formUrl: '/en/contact',
    relatedSlugs: ['lohnt-sich-solaranlage-schweiz-2026', 'solaranlage-steuerabzug-schweiz-2026', 'batteriespeicher-solaranlage-lohnt-sich'],
    relatedPageLinks: [
      { label: 'Solar with battery storage', href: '/en/solar-with-battery' },
      { label: 'Subsidies & one-time payment', href: '/en/solar-subsidies' },
      { label: 'Solar system costs', href: '/en/solar-panel-costs' },
      { label: 'Complete solar solution', href: '/en/complete-solar-solution-switzerland' },
      { label: 'Solar tax deduction 2026', href: '/en/blog/solar-panel-tax-deduction-switzerland-2026' },
      { label: 'Get solar quotes', href: '/en/get-solar-panel-quotes' },
      { label: 'Solar panel installation Switzerland', href: '/en/solar-panel-installation-switzerland' },
      { label: 'Solar for detached houses', href: '/en/solar-detached-house' },
    ],
    faqs: [
      { question: 'Is it worth combining solar panels and a heat pump in Switzerland in 2026?', answer: 'Yes, the combination is one of the most profitable energy investments available.' },
      { question: 'What size solar panels do I need for a heat pump?', answer: 'Sizing should account for heat-pump and household electricity use, available roof area and the location.' },
      { question: 'Which heat pump works best with solar panels?', answer: 'All types of heat pumps can be combined with solar panels. The air-to-water heat pump is the most common and least expensive. The ground-source heat pump is more efficient and uses less solar electricity, but costs more.' },
      { question: 'Do I need battery storage for the combination?', answer: 'An energy management system that automatically activates the heat pump when solar surplus is available is often more economical than an expensive battery.' },
      { question: 'What subsidies are available for solar panels and heat pump together?', answer: 'Solar and heat pumps are supported separately. Check the applicable cantonal programmes and tax treatment for the location.' },
      { question: 'Can I add a heat pump to my existing solar installation?', answer: 'Yes, this is perfectly possible. However, the existing solar installation should be large enough.' },
    ],
  },

  // ─── SOLARANLAGE + WÄRMEPUMPE (IT) ───────────────────────────────────────
  {
    slug: 'solaranlage-waermepumpe-kombinieren-schweiz',
    locale: 'it',
    title: 'Combinare impianto solare e pompa di calore in Svizzera — conviene nel 2026?',
    metaDescription: "Combinare impianto solare e pompa di calore in Svizzera: costi, risparmio e incentivi 2026. Quando conviene davvero la combinazione? Con esempi di calcolo di PvPro.ch.",
    image: '/images/solaranlage-waermepumpe-chalet-winter.webp',
    date: '3 maggio 2026',
    readMin: 10,
    tag: 'Guida',
    intro: "Combinare impianto solare e pompa di calore — è la soluzione energetica più efficiente per i proprietari svizzeri nel 2026. La pompa di calore ha bisogno di elettricità, l'impianto solare la produce. Semplice in teoria — e anche in pratica. Questa pagina spiega come funziona la combinazione, quanto costa e per chi è particolarmente conveniente.",
    sections: [
      {
        heading: "Perché la combinazione impianto solare e pompa di calore è così efficiente?",
        content: [
          "Se si fa funzionare la pompa di calore con l'elettricità solare, i costi di riscaldamento effettivi si riducono drasticamente. Questo è il cuore della combinazione — e il motivo per cui sempre più proprietari svizzeri adottano questo sistema.",
          "Il coefficiente di prestazione stagionale (COP annuo) determina l'efficienza della combinazione. Più alto è il COP, meno elettricità consuma la pompa:",
        ],
      },
      {
        heading: 'Quali incentivi esistono per la combinazione in Svizzera?',
        content: [
          "L'impianto solare e la pompa di calore sono incentivati separatamente in Svizzera — il che significa che si ricevono sussidi per entrambi i componenti.",
        ],
        highlight: "La deduzione fiscale scade a fine 2027 — il 2026 e il 2027 sono gli ultimi anni per sfruttarla appieno.",
      },
      {
        heading: "Combinare impianto solare e pompa di calore — quale tipo scegliere?",
        content: [
          "Non tutte le pompe di calore si combinano ugualmente bene con un impianto solare.",
          "Pompa di calore aria-acqua (la scelta più comune): Non richiede perforazione, ma consuma più elettricità solare rispetto agli altri tipi. Ideale per edifici esistenti e budget più contenuti.",
          "La profondità di perforazione e la durata della sonda dipendono dal progetto. Ideale per nuove costruzioni.",
          "Pompa di calore acqua-acqua (la più potente): Molto efficiente, ma richiede disponibilità sufficiente di acqua di falda. Non possibile ovunque, necessaria autorizzazione.",
        ],
      },
      {
        heading: 'Ho bisogno di un accumulo a batteria?',
        content: [
          "Non necessariamente — ma una batteria aumenta notevolmente il tasso di autoconsumo.",
          "Senza batteria: In estate, la pompa di calore funziona direttamente con l'elettricità solare per l'acqua calda. In inverno — quando la pompa consuma di più — l'impianto solare produce poco.",
          "Con batteria: L'elettricità solare di mezzogiorno viene immagazzinata e utilizzata la sera per la pompa di calore.",
          "Con batteria + controllo intelligente del riscaldamento: La pompa di calore preriscalda il serbatoio di acqua calda durante il giorno con l'energia solare (accumulo termico).",
        ],
        highlight: "Un sistema di gestione dell'energia che attiva automaticamente la pompa di calore in caso di surplus solare è spesso più conveniente di una costosa batteria.",
      },
      {
        heading: 'Per chi conviene particolarmente la combinazione?',
        content: [
          "Proprietari con vecchia caldaia a gasolio o a gas: Il passaggio da gasolio/gas a pompa di calore + solare riduce al massimo i costi energetici. La combinazione degli incentivi è massima in questo caso.",
          "Nuove costruzioni e ristrutturazioni totali: L'integrazione è pianificata in modo ottimale fin dall'inizio. Il riscaldamento a pavimento e l'involucro ben isolato massimizzano l'efficienza della pompa di calore.",
          "Famiglie con auto elettrica: Chi ha o prevede un'auto elettrica ha comunque bisogno di più elettricità. L'impianto solare deve essere dimensionato di conseguenza — e la combinazione conviene ancora di più.",
        ],
        bullets: [
          'Vecchia caldaia a gasolio/gas: massimo risparmio e incentivi combinati',
          "Nuove costruzioni: integrazione ottimale fin dall'inizio",
          'Proprietari di auto elettrica: impianto più grande, ancora più risparmio',
          'Investimento 2026/2027: deduzione fiscale per entrambi i sistemi prima della scadenza 2027',
        ],
      },
      {
        heading: 'Passo dopo passo: come procedere',
        content: [
          "Passo 1 — Analizzare il fabbisogno energetico: Quanto consuma elettricamente la sua famiglia? Quanta energia termica richiede il suo edificio? È ben isolato? Un installatore certificato risponde a queste domande durante una consulenza gratuita.",
          "Passo 2 — Dimensionare il sistema: L'impianto solare e la pompa di calore devono essere adattati l'uno all'altro. Un sistema troppo piccolo non copre il fabbisogno elettrico della pompa.",
          "Passo 3 — Confrontare i preventivi: Richiedere almeno 3 preventivi è indispensabile per un investimento così importante.",
          "Passo 4 — Richiedere gli incentivi: Per il Programma Edifici (pompa di calore), la domanda deve essere presentata prima dell'inizio dei lavori. Per la RU (impianto solare), l'installatore presenta la domanda dopo l'installazione.",
          "Passo 5 — Installazione e messa in servizio: L'impianto solare e la pompa di calore possono essere installati contemporaneamente o in fasi successive. Un'installazione simultanea consente di risparmiare sui costi dei ponteggi.",
        ],
      },
    ],
    ctaHeading: 'Richiedi ora la combinazione impianto solare + pompa di calore',
    ctaText: "Fai dimensionare insieme impianto solare e pompa di calore in base al fabbisogno energetico dell'edificio.",
    ctaButton: 'Richiedi preventivo gratuito',
    formUrl: '/it/richiesta',
    relatedSlugs: ['lohnt-sich-solaranlage-schweiz-2026', 'solaranlage-steuerabzug-schweiz-2026', 'batteriespeicher-solaranlage-lohnt-sich'],
    relatedPageLinks: [
      { label: 'Solare con accumulo', href: '/it/solare-con-accumulo' },
      { label: 'Incentivi & Remunerazione unica (RU)', href: '/it/incentivi-solari' },
      { label: 'Costi impianto solare', href: '/it/costi-impianto-solare' },
      { label: 'Soluzione fotovoltaica completa', href: '/it/soluzione-completa-fotovoltaico-svizzera' },
      { label: 'Detrazione fiscale solare 2026', href: '/it/blog/detrazione-fiscale-impianto-solare-svizzera-2026' },
      { label: 'Richiedere preventivi solari', href: '/it/richiedere-preventivo-solare' },
      { label: 'Installare impianto solare Svizzera', href: '/it/installare-impianto-solare-svizzera' },
      { label: 'Solare casa unifamiliare', href: '/it/solare-casa-unifamiliare' },
    ],
    faqs: [
      { question: "Conviene combinare impianto solare e pompa di calore in Svizzera nel 2026?", answer: "Sì, la combinazione è uno degli investimenti energetici più redditizi in assoluto." },
      { question: "Quanto deve essere grande l'impianto solare per una pompa di calore?", answer: "Il dimensionamento deve considerare il consumo della pompa di calore e della famiglia, la superficie del tetto e la località." },
      { question: "Quale pompa di calore si abbina meglio all'impianto solare?", answer: "Tutti i tipi di pompe di calore possono essere combinati con un impianto solare. La pompa aria-acqua è la più diffusa e meno costosa. La pompa geotermica è più efficiente e consuma meno elettricità solare, ma costa di più." },
      { question: "Ho bisogno di un accumulo a batteria per la combinazione?", answer: "Un sistema di gestione dell'energia che attiva automaticamente la pompa di calore in caso di surplus solare è spesso più conveniente di una costosa batteria." },
      { question: "Quali incentivi esistono per impianto solare e pompa di calore insieme?", answer: "Solare e pompa di calore sono sostenuti separatamente. Occorre verificare i programmi cantonali e il trattamento fiscale applicabili alla località." },
      { question: "Posso aggiungere una pompa di calore al mio impianto solare esistente?", answer: "Sì, è perfettamente possibile. Tuttavia, l'impianto solare esistente deve essere sufficientemente dimensionato." },
    ],
  },


  // ─── BESTEN SOLARINSTALLATEUR FINDEN (DE) ────────────────────────────────
  {
    slug: 'besten-solarinstallateur-schweiz-finden',
    locale: 'de',
    title: 'Besten Solarinstallateur in der Schweiz finden 2026 – So geht\'s richtig',
    metaDescription: 'Wie finden Sie den besten Solarinstallateur in Ihrem Kanton in der Schweiz? Warum lokal besser ist, worauf Sie achten müssen und wie PvPro.ch die Suche für Sie übernimmt.',
    image: '/images/installateur-solarmodul-dach-alpen.webp',
    date: '3. Mai 2026',
    readMin: 10,
    tag: 'Ratgeber',
    intro: 'Wer in der Schweiz eine Solaranlage kaufen möchte, steht vor einer Frage, die auf den ersten Blick einfach klingt: Wer ist der beste Solarinstallateur in meinem Kanton? Die Antwort ist komplizierter als gedacht — denn in der Schweiz gibt es Hunderte von Installateuren, die Qualität variiert enorm, und nationale Anbieter sind nicht immer besser als lokale Fachbetriebe. Wir helfen Ihnen, den richtigen Installateur zu finden — basierend auf drei Jahren Erfahrung und über 1\'000 vermittelten Anlagen in der ganzen Schweiz.',
    sections: [
      {
        heading: 'Warum ist die Wahl des Installateurs so wichtig?',
        content: [
          'Die Solaranlage selbst macht nur einen Teil der Investition aus. Der Installateur entscheidet über vier entscheidende Faktoren:',
          'Die Qualität der Installation: Eine schlecht montierte Anlage verliert über die Jahre Leistung, hat höhere Ausfallrisiken und kann im schlimmsten Fall Dachschäden verursachen. Ein erfahrener lokaler Installateur kennt die Dachtypen in Ihrem Kanton und installiert korrekt.',
          'Wer nur einen Installateur anfragt und unterschreibt, zahlt oft zu viel.',
          'Den Service nach der Installation: Wer kümmert sich, wenn die Anlage nach drei Jahren einen Fehler zeigt? Ein lokaler Installateur ist in 30 Minuten bei Ihnen. Ein nationaler Anbieter schickt vielleicht einen Techniker, der aus einer anderen Kanton kommt.',
          'Die Förderbeantragung: Ein erfahrener lokaler Installateur kennt die kantonalen Förderprogramme und die Besonderheiten des lokalen Netzbetreibers — und beantragt alles korrekt und rechtzeitig.',
        ],
        stats: [
          { value: '25+', label: 'geprüfte Fachbetriebe im PvPro.ch-Netzwerk' },
          { value: '48 Stunden', label: 'bis zur ersten Offerte' },
        ],
      },
      {
        heading: 'Lokaler Installateur vs. nationaler Anbieter — was ist besser?',
        content: [
          'Diese Frage beschäftigt viele Hausbesitzer. Hier die ehrliche Antwort — ein Vergleich der wichtigsten Kriterien:',
        ],
        bullets: [
          'Kenntnis lokaler Vorschriften: Lokaler Fachbetrieb ✅ Sehr gut — Nationaler Anbieter ⚠️ Variabel',
          'Kantonale Förderungen: Lokaler Fachbetrieb ✅ Kennt alle Programme — Nationaler Anbieter ⚠️ Nicht immer aktuell',
          'Reaktionszeit bei Problemen: Lokaler Fachbetrieb ✅ 30–60 Minuten — Nationaler Anbieter ❌ Oft Tage',
          'Preis: Lokaler Fachbetrieb ✅ Oft günstiger — Nationaler Anbieter ❌ Oft teurer (Overhead)',
          'Referenzen in Ihrem Kanton: Lokaler Fachbetrieb ✅ Viele lokale Projekte — Nationaler Anbieter ⚠️ Variabel',
          'Bekanntheit / Marketing: Lokaler Fachbetrieb ⚠️ Weniger sichtbar — Nationaler Anbieter ✅ Gross',
        ],
        highlight: 'Ein zertifizierter lokaler Fachbetrieb ist in den meisten Fällen die bessere Wahl — wenn man ihn findet. Genau das ist die Herausforderung, die PvPro.ch für Sie löst.',
      },
      {
        heading: 'Wie finde ich den besten Solarinstallateur in meinem Kanton?',
        content: [
          'Es gibt mehrere Wege — wir erklären ehrlich, was funktioniert und was nicht:',
          'Weg 1 — Google-Suche: Sie suchen "Solarinstallateur + Ihr Kanton" und bekommen eine Liste von Unternehmen. Das Problem: Die obersten Ergebnisse sind oft grosse nationale Anbieter mit viel Werbebudget — nicht unbedingt die besten in Ihrem Kanton. Kleine, hervorragende Fachbetriebe erscheinen selten auf der ersten Seite.',
          'Weg 2 — Empfehlungen von Nachbarn oder Bekannten: Das ist eine der verlässlichsten Methoden — wenn Ihr Nachbar gute Erfahrungen gemacht hat, ist das ein starkes Signal. Der Nachteil: Sie haben vielleicht nur eine oder zwei Empfehlungen und keinen Preisvergleich.',
          'Weg 3 — Swissolar-Verzeichnis: Swissolar führt eine Liste von qualifizierten Installateuren. Das ist ein guter Ausgangspunkt für die Zertifizierungsprüfung, aber kein Preisvergleich-Tool.',
          'Weg 4 — PvPro.ch: Sie füllen einmal ein Formular in 2 Minuten aus. Wir schicken Ihre Anfrage an bis zu 3 geprüfte, zertifizierte Installateure aus Ihrem Kanton — die Ihnen innerhalb von 48 Stunden massgeschneiderte Offerten senden. Sie vergleichen und wählen frei. Kein Aufwand, keine Werbeanrufe, keine Verpflichtung.',
        ],
      },
      {
        heading: 'Worauf muss ich bei der Wahl des Installateurs achten?',
        content: [
          'Nicht jeder Installateur ist gleich gut. Diese sechs Kriterien sollten Sie prüfen:',
          '1. Zertifizierung: Ein seriöser Solarinstallateur in der Schweiz hat eine anerkannte Zertifizierung — idealerweise von Swissolar (Solarprofi-Label) oder electrosuisse. Diese Zertifizierungen belegen, dass der Betrieb die nötigen technischen Kenntnisse hat und regelmässig weitergebildet wird.',
          '2. Lokale Erfahrung: Hat der Installateur nachgewiesene Projekte in Ihrem Kanton? Kennt er die lokalen Netzbetreiber, die kantonalen Förderprogramme und die üblichen Dachtypen in Ihrer Gegend?',
          '3. Referenzen: Fragen Sie nach abgeschlossenen Projekten in Ihrer Gemeinde. Ein guter Installateur kann Ihnen Referenzkunden nennen, die Sie kontaktieren können.',
          '4. Was steht in der Offerte? Eine professionelle Offerte enthält immer: Anlagengrösse in kWp, Modulhersteller und -typ, Wechselrichtermarke, Montagesystem, Installationskosten separat, geschätzte Jahresproduktion, Förderung und Garantien. Wenn diese Punkte fehlen, ist das ein Warnsignal.',
          '5. Garantien: Welche Garantien bietet der Installateur auf die Montagearbeit?',
          '6. Versicherung: Ist der Betrieb für allfällige Schäden während der Installation versichert? Das sollte immer gefragt werden.',
        ],
      },
      {
        heading: 'Die 7 häufigsten Fehler bei der Installateur-Wahl',
        content: [
          'Aus unserer Erfahrung mit über 1\'000 vermittelten Anlagen sehen wir immer wieder die gleichen Fehler:',
        ],
        bullets: [
          'Fehler 1 — Nur einen Installateur anfragen: Der häufigste und teuerste Fehler. Ohne Vergleich wissen Sie nie, ob der Preis fair ist.',
          'Fehler 2 — Den billigsten wählen: Billig ist nicht immer gut. Minderwertige Module, ungenaue Dimensionierung oder schlechte Montagearbeit können langfristig Mehrkosten verursachen. Qualität hat ihren Preis.',
          'Fehler 3 — Keine Referenzen prüfen: Viele Hausbesitzer unterschreiben eine Offerte, ohne je nach Referenzen gefragt zu haben. Ein Anruf bei einem früheren Kunden des Installateurs kann sehr aufschlussreich sein.',
          'Fehler 4 — Keine schriftliche Offerte verlangen: Mündliche Zusagen zählen nicht. Alles — Preis, Komponenten, Garantien, Fristen — muss schriftlich in der Offerte stehen.',
          'Fehler 5 — Die Förderbeantragung dem Installateur überlassen ohne nachzufragen: Die meisten Installateure übernehmen die Anmeldung bei Pronovo für die EIV. Fragen Sie aber explizit nach: Ist das im Preis inbegriffen? Bis wann wird der Antrag gestellt?',
          'Fehler 6 — Anlage zu klein dimensionieren: Viele Hausbesitzer kaufen die kleinste Anlage, die gerade so reicht. Wenn später ein E-Auto oder eine Wärmepumpe dazukommt, reicht die Kapazität nicht mehr. Besser etwas grösser planen.',
          'Fehler 7 — Den Installateur nicht nach dem After-Sales-Service fragen: Was passiert nach der Installation? Wer wartet die Anlage? Gibt es einen Wartungsvertrag?',
        ],
        highlight: 'PvPro.ch übernimmt diesen Vergleich kostenlos für Sie.',
      },
      {
        heading: 'Wie prüft PvPro.ch die Installateure im Netzwerk?',
        content: [
          'PvPro.ch ist kein offenes Verzeichnis, in das sich jeder eintragen kann. Jeder Installateur in unserem Netzwerk wird geprüft:',
          'Das Resultat: Wenn Sie über PvPro.ch eine Offerte erhalten, wissen Sie bereits, dass der Installateur die Mindeststandards erfüllt. Sie müssen die Zertifizierung nicht mehr selbst prüfen.',
        ],
        bullets: [
          'Zertifizierung: Nachweis einer anerkannten Qualifikation (Swissolar, electrosuisse oder gleichwertig)',
          'Versicherungsnachweis: Betriebshaftpflicht vorhanden',
          'Referenzprojekte: Nachgewiesene Erfahrung in der jeweiligen Kanton',
          'Cantonale Präsenz: Nur Betriebe, die tatsächlich in Ihrem Kanton tätig sind — keine nationalen Call-Center, die Aufträge weiterverkaufen',
          'Qualitätskontrolle: Laufende Überprüfung anhand von Kundenfeedback',
        ],
      },
      {
        heading: 'Warum ist ein lokaler Installateur besonders wichtig in der Schweiz?',
        content: [
          'Die Schweiz ist ein föderales Land — und das gilt auch für Solaranlagen. Was im Kanton Zürich gilt, gilt nicht unbedingt im Kanton Bern:',
          'Kantonale Förderprogramme: Viele Kantone haben eigene Förderprogramme zusätzlich zur Bundesförderung. Ein lokaler Installateur kennt diese Programme und beantragt sie automatisch für Sie. Ein nationaler Anbieter ohne lokale Kenntnis vergisst sie oft.',
          'Lokale Netzbetreiber: Jede Gemeinde hat ihren eigenen Netzbetreiber mit eigenen Prozessen für die Anmeldung der Anlage und die Rückliefervergütung. Ein lokaler Installateur kennt den Prozess bei Ihrem Netzbetreiber — und vermeidet Verzögerungen.',
          'Kantonale Bewilligungsverfahren: Auch wenn die meisten Anlagen bewilligungsfrei sind, gibt es kantonale und kommunale Besonderheiten. Ein lokaler Installateur weiss, was in Ihrer Gemeinde gilt.',
          `Schneller Service: Wenn nach der Installation etwas nicht stimmt, ist ein lokaler Betrieb in kurzer Zeit bei Ihnen. Das gibt Sicherheit über die typische Modullebensdauer von ${factRange(ECONOMIC_FACTS.moduleLifetimeYears, 'de')} Jahren.`,
        ],
        highlight: 'Ein lokaler Installateur kennt die kantonalen Förderprogramme, den lokalen Netzbetreiber und ist bei Problemen schnell vor Ort — das ist in der Schweiz besonders wichtig.',
      },
    ],
    ctaHeading: 'Jetzt den besten Solarinstallateur in Ihrem Kanton finden',
    ctaText: 'PvPro.ch übernimmt die Suche für Sie. In 2 Minuten Formular ausfüllen — wir vermitteln Ihnen bis zu 3 geprüfte, zertifizierte Installateure aus Ihrem Kanton. Kostenlos, unverbindlich, ohne Werbeanrufe.',
    ctaButton: 'Kostenlose Offerte anfordern',
    formUrl: '/anfrage',
    relatedSlugs: ['lohnt-sich-solaranlage-schweiz-2026', 'richtigen-solarinstallateur-schweiz-waehlen', 'solaranlage-installateur-konkurs-garantie-schweiz', 'solaranlage-waermepumpe-kombinieren-schweiz'],
    relatedPageLinks: [
      { label: 'Offerten einholen & vergleichen', href: '/solaranlage-offerte-einholen' },
      { label: 'Solaranlage Kosten Schweiz', href: '/solaranlage-kosten' },
      { label: 'Förderungen & EIV', href: '/foerderungen' },
    ],
    faqs: [
      { question: 'Wie finde ich den besten Solarinstallateur in meinem Kanton in der Schweiz?', answer: 'Der einfachste Weg ist, über PvPro.ch bis zu 3 kostenlose Offerten von geprüften lokalen Installateuren einzuholen. So vergleichen Sie Preise und Qualität, ohne selbst recherchieren zu müssen. Alternativ können Sie das Swissolar-Verzeichnis nutzen oder Nachbarn um Empfehlungen bitten.' },
      { question: 'Was kostet es, über PvPro.ch Offerten einzuholen?', answer: 'Für Hausbesitzer ist der Service vollständig kostenlos und unverbindlich. PvPro.ch finanziert sich über eine Vermittlungsgebühr, die der beauftragte Installateur zahlt — nicht Sie.' },
      { question: 'Wie lange dauert es, bis ich Offerten erhalte?', answer: 'In der Regel erhalten Sie die ersten Offerten innerhalb von 24–48 Stunden nach Ihrer Anfrage.' },
      { question: 'Wie erkenne ich einen seriösen Solarinstallateur in der Schweiz?', answer: 'Achten Sie auf: anerkannte Zertifizierung (Swissolar-Solarprofi oder electrosuisse), lokale Referenzprojekte, vollständige schriftliche Offerte mit allen Komponenten und Garantien, und Versicherungsnachweis. PvPro.ch prüft all das vorab für Sie.' },
      { question: 'Ist ein nationaler Anbieter oder ein lokaler Betrieb besser?', answer: 'In den meisten Fällen ist ein zertifizierter lokaler Fachbetrieb die bessere Wahl — er kennt die kantonalen Förderprogramme, die lokalen Netzbetreiber und ist bei Problemen schnell vor Ort. Nationale Anbieter haben oft höhere Preise durch grösseren Overhead.' },
      { question: 'Kann ich den Installateur nach den Offerten noch wechseln?', answer: 'Ja, Sie sind zu nichts verpflichtet, solange Sie keine Auftragsbestätigung unterzeichnet haben. Sie können alle Offerten ablehnen oder nach weiteren Angeboten fragen.' },
      { question: 'Was passiert, wenn der Installateur nach der Installation nicht mehr reagiert?', answer: 'Das ist ein reales Risiko bei unseriösen Betrieben. Deshalb vermittelt PvPro.ch nur geprüfte Betriebe mit nachgewiesener lokaler Präsenz. Zudem haben Sie bei Streitigkeiten die Möglichkeit, sich an die Swissolar-Ombudsstelle zu wenden.' },
    ],
  },

  // ─── BESTEN SOLARINSTALLATEUR FINDEN (FR) ────────────────────────────────
  {
    slug: 'besten-solarinstallateur-schweiz-finden',
    locale: 'fr',
    title: 'Trouver le meilleur installateur solaire en Suisse en 2026 – Le guide complet',
    metaDescription: 'Comment trouver le meilleur installateur solaire dans votre canton en Suisse? Pourquoi local est mieux, les critères essentiels et comment PvPro.ch simplifie la recherche.',
    image: '/images/installateur-solarmodul-dach-alpen.webp',
    date: '3 mai 2026',
    readMin: 10,
    tag: 'Guide',
    intro: "Si vous souhaitez acheter une installation solaire en Suisse, vous vous posez une question qui semble simple à première vue: quel est le meilleur installateur solaire dans mon canton? La réponse est plus compliquée qu'on ne le pense — car il existe des centaines d'installateurs en Suisse, la qualité varie énormément, et les prestataires nationaux ne sont pas toujours meilleurs que les entreprises locales spécialisées.",
    sections: [
      {
        heading: "Pourquoi le choix de l'installateur est-il si important?",
        content: [
          "L'installation solaire elle-même ne représente qu'une partie de l'investissement. L'installateur détermine quatre facteurs décisifs:",
          "La qualité de l'installation: Une installation mal montée perd de la puissance au fil des années, présente des risques de pannes plus élevés et peut, dans le pire des cas, causer des dommages au toit. Un installateur local expérimenté connaît les types de toits de votre canton et installe correctement.",
          "Celui qui ne demande qu'un seul devis et signe paie souvent trop cher.",
          "Le service après installation: Qui s'occupe si l'installation présente une anomalie après trois ans? Un installateur local est chez vous en 30 minutes. Un prestataire national envoie peut-être un technicien venant d'une autre canton.",
          "La demande de subventions: Un installateur local expérimenté connaît les programmes de subventions cantonaux et les particularités du gestionnaire de réseau local — et soumet tout correctement et dans les délais.",
        ],
        stats: [
          { value: '25+', label: "entreprises qualifiées dans le réseau PvPro.ch" },
          { value: '48 heures', label: "jusqu'au premier devis" },
        ],
      },
      {
        heading: 'Installateur local vs. prestataire national — lequel est le meilleur?',
        content: [
          "Cette question préoccupe de nombreux propriétaires. Voici la réponse honnête — une comparaison des critères les plus importants:",
        ],
        bullets: [
          'Connaissance des réglementations locales: Entreprise locale ✅ Très bonne — Prestataire national ⚠️ Variable',
          'Subventions cantonales: Entreprise locale ✅ Connaît tous les programmes — Prestataire national ⚠️ Pas toujours à jour',
          'Temps de réaction en cas de problème: Entreprise locale ✅ 30–60 minutes — Prestataire national ❌ Souvent des jours',
          'Prix: Entreprise locale ✅ Souvent moins cher — Prestataire national ❌ Souvent plus cher (frais généraux)',
          'Références dans votre canton: Entreprise locale ✅ Nombreux projets locaux — Prestataire national ⚠️ Variable',
          'Notoriété / Marketing: Entreprise locale ⚠️ Moins visible — Prestataire national ✅ Important',
        ],
        highlight: "Dans la plupart des cas, une entreprise locale certifiée est le meilleur choix — si on la trouve. C'est précisément le défi que PvPro.ch résout pour vous.",
      },
      {
        heading: 'Comment trouver le meilleur installateur solaire dans mon canton?',
        content: [
          "Il existe plusieurs façons — nous expliquons honnêtement ce qui fonctionne et ce qui ne fonctionne pas:",
          "Voie 1 — Recherche Google: Vous cherchez «installateur solaire + votre canton» et obtenez une liste d'entreprises. Le problème: les premiers résultats sont souvent de grands prestataires nationaux avec un gros budget publicitaire — pas nécessairement les meilleurs de votre canton. Les petites entreprises spécialisées excellentes apparaissent rarement en première page.",
          "Voie 2 — Recommandations de voisins ou de connaissances: C'est l'une des méthodes les plus fiables — si votre voisin a eu une bonne expérience, c'est un signal fort. L'inconvénient: vous n'avez peut-être qu'une ou deux recommandations et pas de comparaison de prix.",
          "Voie 3 — Répertoire Swissolar: Swissolar tient une liste d'installateurs qualifiés. C'est un bon point de départ pour la vérification des certifications, mais pas un outil de comparaison de prix.",
          "Voie 4 — PvPro.ch: Vous remplissez un formulaire en 2 minutes. Nous envoyons votre demande à jusqu'à 3 installateurs vérifiés et certifiés de votre canton — qui vous envoient des offres sur mesure dans les 48 heures. Vous comparez et choisissez librement. Aucun effort, aucun appel publicitaire, aucune obligation.",
        ],
      },
      {
        heading: "À quoi dois-je faire attention dans le choix de l'installateur?",
        content: [
          "Tous les installateurs ne se valent pas. Voici les six critères à vérifier:",
          "1. Certification: Un installateur solaire sérieux en Suisse possède une certification reconnue — idéalement de Swissolar (label Solarprofi) ou d'electrosuisse. Ces certifications attestent que l'entreprise possède les compétences techniques nécessaires et se forme régulièrement.",
          "2. Expérience locale: L'installateur a-t-il des projets avérés dans votre canton ou votre canton? Connaît-il les gestionnaires de réseau locaux, les programmes de subventions cantonaux et les types de toits courants dans votre canton?",
          "3. Références: Demandez des projets réalisés dans votre commune. Un bon installateur peut vous indiquer des clients de référence que vous pouvez contacter.",
          "4. Que contient l'offre? Une offre professionnelle contient toujours: la taille de l'installation en kWc, le fabricant et le type de modules, la marque de l'onduleur, le système de montage, les coûts d'installation séparés, la production annuelle estimée, les subventions et les garanties. Si ces éléments manquent, c'est un signal d'alarme.",
          "5. Garanties: Quelles garanties l'installateur offre-t-il sur le travail de montage?",
          "6. Assurance: L'entreprise est-elle assurée pour les éventuels dommages pendant l'installation? Cela doit toujours être demandé.",
        ],
      },
      {
        heading: "Les 7 erreurs les plus fréquentes dans le choix de l'installateur",
        content: [
          "D'après notre expérience avec plus de 1'000 installations intermédiées, nous voyons toujours les mêmes erreurs:",
        ],
        bullets: [
          "Erreur 1 — Ne demander qu'un seul devis: L'erreur la plus fréquente et la plus coûteuse. Sans comparaison, vous ne saurez jamais si le prix est équitable.",
          "Erreur 2 — Choisir le moins cher: Bon marché n'est pas toujours bon. Des modules de qualité inférieure, un dimensionnement imprécis ou un mauvais travail de montage peuvent entraîner des surcoûts à long terme. La qualité a son prix.",
          "Erreur 3 — Ne pas vérifier les références: De nombreux propriétaires signent une offre sans jamais avoir demandé de références. Un appel à un ancien client de l'installateur peut être très instructif.",
          "Erreur 4 — Ne pas exiger d'offre écrite: Les promesses verbales ne comptent pas. Tout — prix, composants, garanties, délais — doit figurer par écrit dans l'offre.",
          "Erreur 5 — Laisser la demande de subventions à l'installateur sans se renseigner: La plupart des installateurs se chargent de l'inscription auprès de Pronovo pour la RU. Mais demandez-le explicitement: est-ce inclus dans le prix? Pour quand la demande sera-t-elle déposée?",
          "Erreur 6 — Dimensionner l'installation trop petite: De nombreux propriétaires achètent la plus petite installation qui suffira tout juste. Si plus tard une voiture électrique ou une pompe à chaleur s'ajoute, la capacité sera insuffisante. Mieux vaut prévoir un peu plus grand.",
          "Erreur 7 — Ne pas demander à l'installateur son service après-vente: Que se passe-t-il après l'installation? Qui entretient l'installation? Y a-t-il un contrat de maintenance?",
        ],
        highlight: "PvPro.ch effectue cette comparaison gratuitement pour vous.",
      },
      {
        heading: 'Comment PvPro.ch vérifie-t-il les installateurs du réseau?',
        content: [
          "PvPro.ch n'est pas un répertoire ouvert dans lequel n'importe qui peut s'inscrire. Chaque installateur de notre réseau est vérifié:",
          "Le résultat: Lorsque vous recevez une offre via PvPro.ch, vous savez déjà que l'installateur respecte les standards minimaux. Vous n'avez plus besoin de vérifier la certification vous-même.",
        ],
        bullets: [
          'Certification: Preuve d\'une qualification reconnue (Swissolar, electrosuisse ou équivalent)',
          'Attestation d\'assurance: Responsabilité civile professionnelle disponible',
          'Projets de référence: Expérience avérée dans le canton concerné',
          'Présence cantonale: Uniquement des entreprises réellement actives dans votre canton — pas de centres d\'appels nationaux qui revendent les commandes',
          'Contrôle qualité: Vérification continue sur la base des retours clients',
        ],
      },
      {
        heading: 'Pourquoi un installateur local est-il particulièrement important en Suisse?',
        content: [
          "La Suisse est un pays fédéral — et cela s'applique aussi aux installations solaires. Ce qui est valable dans le canton de Zurich ne l'est pas nécessairement dans le canton de Berne:",
          "Programmes de subventions cantonaux: De nombreux cantons disposent de leurs propres programmes de subventions en plus des aides fédérales. Un installateur local connaît ces programmes et les demande automatiquement pour vous. Un prestataire national sans connaissance locale les oublie souvent.",
          "Gestionnaires de réseau locaux: Chaque commune a son propre gestionnaire de réseau avec ses propres processus pour l'inscription de l'installation et la rétribution pour l'électricité injectée. Un installateur local connaît la procédure auprès de votre gestionnaire de réseau — et évite les retards.",
          "Procédures d'autorisation cantonales: Même si la plupart des installations sont exemptées d'autorisation, il existe des particularités cantonales et communales. Un installateur local sait ce qui est valable dans votre commune.",
          `Service rapide: Si quelque chose ne va pas après l'installation, une entreprise locale intervient rapidement. Cela sécurise la durée de vie typique des panneaux de ${factRange(ECONOMIC_FACTS.moduleLifetimeYears, 'fr')} ans.`,
        ],
        highlight: "Un installateur local connaît les programmes de subventions cantonaux, le gestionnaire de réseau local et est rapidement sur place en cas de problème — c'est particulièrement important en Suisse.",
      },
    ],
    ctaHeading: 'Trouvez maintenant le meilleur installateur solaire dans votre canton',
    ctaText: "PvPro.ch prend en charge la recherche pour vous. Remplissez le formulaire en 2 minutes — nous vous mettons en contact avec jusqu'à 3 installateurs vérifiés et certifiés de votre canton. Gratuit, sans engagement, sans appels publicitaires.",
    ctaButton: 'Demander un devis gratuit',
    formUrl: '/fr/demande',
    relatedSlugs: ['lohnt-sich-solaranlage-schweiz-2026', 'richtigen-solarinstallateur-schweiz-waehlen', 'solaranlage-installateur-konkurs-garantie-schweiz', 'solaranlage-waermepumpe-kombinieren-schweiz'],
    relatedPageLinks: [
      { label: 'Demander des offres et comparer', href: '/fr/demander-offre-panneau-solaire' },
      { label: 'Coût installation solaire Suisse', href: '/fr/cout-installation-solaire' },
      { label: 'Subventions & RU', href: '/fr/subventions-solaires' },
    ],
    faqs: [
      { question: 'Comment trouver le meilleur installateur solaire dans mon canton en Suisse?', answer: "Le moyen le plus simple est d'obtenir jusqu'à 3 devis gratuits d'installateurs locaux vérifiés via PvPro.ch. Vous comparez ainsi les prix et la qualité sans avoir à faire des recherches vous-même. Vous pouvez également utiliser le répertoire Swissolar ou demander des recommandations à vos voisins." },
      { question: 'Combien coûte l\'obtention de devis via PvPro.ch?', answer: "Pour les propriétaires, le service est entièrement gratuit et sans engagement. PvPro.ch se finance par une commission de courtage payée par l'installateur mandaté — pas par vous." },
      { question: 'Combien de temps faut-il pour recevoir des devis?', answer: "En règle générale, vous recevez les premiers devis dans les 24–48 heures suivant votre demande." },
      { question: 'Comment reconnaître un installateur solaire sérieux en Suisse?', answer: "Recherchez: une certification reconnue (Swissolar-Solarprofi ou electrosuisse), des projets de référence locaux, une offre écrite complète avec tous les composants et garanties, et une attestation d'assurance. PvPro.ch vérifie tout cela au préalable pour vous." },
      { question: 'Un prestataire national ou une entreprise locale est-il meilleur?', answer: "Dans la plupart des cas, une entreprise locale certifiée est le meilleur choix — elle connaît les programmes de subventions cantonaux, les gestionnaires de réseau locaux et est rapidement sur place en cas de problème. Les prestataires nationaux ont souvent des prix plus élevés en raison de frais généraux importants." },
      { question: "Puis-je changer d'installateur après avoir reçu les devis?", answer: "Oui, vous n'êtes à rien obligé tant que vous n'avez pas signé une confirmation de commande. Vous pouvez refuser tous les devis ou demander d'autres offres." },
      { question: "Que se passe-t-il si l'installateur ne répond plus après l'installation?", answer: "C'est un risque réel avec les entreprises peu sérieuses. C'est pourquoi PvPro.ch ne met en relation qu'avec des entreprises vérifiées ayant une présence locale avérée. En cas de litige, vous avez également la possibilité de vous adresser à l'organe de médiation de Swissolar." },
    ],
  },

  // ─── BESTEN SOLARINSTALLATEUR FINDEN (EN) ────────────────────────────────
  {
    slug: 'besten-solarinstallateur-schweiz-finden',
    locale: 'en',
    title: 'How to Find the Best Solar Installer in Switzerland 2026 – The Complete Guide',
    metaDescription: 'How to find the best solar installer in your canton in Switzerland? Why local is better, what to look for, and how PvPro.ch does the search for you.',
    image: '/images/installateur-solarmodul-dach-alpen.webp',
    date: '3 May 2026',
    readMin: 10,
    tag: 'Guide',
    intro: "If you want to buy a solar system in Switzerland, you face a question that seems simple at first: who is the best solar installer in my canton? The answer is more complicated than expected — there are hundreds of installers in Switzerland, quality varies enormously, and national providers are not always better than local specialists. We help you find the right installer — backed by three years of experience and over 1'000 brokered installations across Switzerland.",
    sections: [
      {
        heading: 'Why is the choice of installer so important?',
        content: [
          'The solar system itself represents only part of the investment. The installer determines four decisive factors:',
          'The quality of installation: A poorly mounted system loses performance over the years, has higher failure risks, and can in the worst case cause roof damage. An experienced local installer knows the roof types in your canton and installs correctly.',
          "Those who ask only one installer and sign often pay too much.",
          'After-sales service: Who takes care of things if the system shows a fault after three years? A local installer is with you in 30 minutes. A national provider might send a technician from another canton.',
          'Subsidy applications: An experienced local installer knows the cantonal subsidy programmes and the specifics of the local grid operator — and submits everything correctly and on time.',
        ],
        stats: [
          { value: '25+', label: 'qualified companies in the PvPro.ch network' },
          { value: '48 hours', label: 'until the first quote' },
        ],
      },
      {
        heading: 'Local installer vs. national provider — which is better?',
        content: [
          'This question concerns many homeowners. Here is the honest answer — a comparison of the most important criteria:',
        ],
        bullets: [
          'Knowledge of local regulations: Local specialist ✅ Very good — National provider ⚠️ Variable',
          'Cantonal subsidies: Local specialist ✅ Knows all programmes — National provider ⚠️ Not always up to date',
          'Response time for problems: Local specialist ✅ 30–60 minutes — National provider ❌ Often days',
          'Price: Local specialist ✅ Often cheaper — National provider ❌ Often more expensive (overhead)',
          'References in your canton: Local specialist ✅ Many local projects — National provider ⚠️ Variable',
          'Brand awareness / Marketing: Local specialist ⚠️ Less visible — National provider ✅ Large',
        ],
        highlight: 'A certified local specialist is in most cases the better choice — if you can find one. That is precisely the challenge PvPro.ch solves for you.',
      },
      {
        heading: 'How do I find the best solar installer in my canton?',
        content: [
          "There are several ways — we explain honestly what works and what doesn't:",
          'Way 1 — Google search: You search "solar installer + your canton" and get a list of companies. The problem: the top results are often large national providers with big advertising budgets — not necessarily the best in your canton. Small, excellent specialists rarely appear on the first page.',
          'Way 2 — Recommendations from neighbours or acquaintances: This is one of the most reliable methods — if your neighbour has had a good experience, that is a strong signal. The downside: you may have only one or two recommendations and no price comparison.',
          'Way 3 — Swissolar directory: Swissolar maintains a list of qualified installers. This is a good starting point for checking certifications, but it is not a price comparison tool.',
          'Way 4 — PvPro.ch: You fill out a form once in 2 minutes. We send your enquiry to up to 3 verified, certified installers from your canton — who send you tailored quotes within 48 hours. You compare and choose freely. No effort, no advertising calls, no obligation.',
        ],
      },
      {
        heading: 'What do I need to look for when choosing an installer?',
        content: [
          'Not every installer is equally good. Here are the six criteria you should check:',
          '1. Certification: A reputable solar installer in Switzerland has a recognised certification — ideally from Swissolar (Solarprofi label) or electrosuisse. These certifications prove that the company has the necessary technical knowledge and undergoes regular training.',
          '2. Local experience: Does the installer have proven projects in your canton or canton? Do they know the local grid operators, the cantonal subsidy programmes, and the common roof types in your area?',
          '3. References: Ask for completed projects in your municipality. A good installer can provide you with reference customers you can contact.',
          '4. What is in the quote? A professional quote always contains: system size in kWp, module manufacturer and type, inverter brand, mounting system, installation costs separately, estimated annual output, subsidies, and warranties. If these points are missing, that is a warning sign.',
          '5. Warranties: What warranties does the installer offer on the mounting work?',
          '6. Insurance: Is the company insured for any damage during installation? This should always be asked.',
        ],
      },
      {
        heading: 'The 7 most common mistakes when choosing an installer',
        content: [
          "From our experience with over 1'000 brokered installations, we see the same mistakes again and again:",
        ],
        bullets: [
          "Mistake 1 — Only asking one installer: The most frequent and costly mistake. Without comparison, you will never know if the price is fair.",
          'Mistake 2 — Choosing the cheapest: Cheap is not always good. Inferior modules, inaccurate sizing, or poor mounting work can create additional long-term costs. Quality has its price.',
          'Mistake 3 — Not checking references: Many homeowners sign a quote without ever having asked for references. A call to a former customer of the installer can be very revealing.',
          'Mistake 4 — Not requesting a written quote: Verbal promises do not count. Everything — price, components, warranties, deadlines — must be in writing in the quote.',
          'Mistake 5 — Leaving the subsidy application to the installer without asking: Most installers handle the registration with Pronovo for the OTS. But ask explicitly: is that included in the price? By when will the application be submitted?',
          'Mistake 6 — Sizing the system too small: Many homeowners buy the smallest system that will just be sufficient. If an electric car or a heat pump is added later, the capacity will no longer be enough. Better to plan a little larger.',
          'Mistake 7 — Not asking the installer about after-sales service: What happens after installation? Who maintains the system? Is there a maintenance contract?',
        ],
        highlight: "PvPro.ch does this comparison free of charge for you.",
      },
      {
        heading: 'How does PvPro.ch verify the installers in the network?',
        content: [
          'PvPro.ch is not an open directory where anyone can register. Every installer in our network is verified:',
          'The result: When you receive a quote via PvPro.ch, you already know that the installer meets the minimum standards. You no longer need to check the certification yourself.',
        ],
        bullets: [
          'Certification: Proof of a recognised qualification (Swissolar, electrosuisse or equivalent)',
          'Insurance proof: Public liability insurance in place',
          'Reference projects: Proven experience in the respective canton',
          'Cantonal presence: Only companies that are actually active in your canton — no national call centres that resell orders',
          'Quality control: Ongoing verification based on customer feedback',
        ],
      },
      {
        heading: 'Why is a local installer particularly important in Switzerland?',
        content: [
          'Switzerland is a federal country — and that applies to solar systems too. What applies in the canton of Zurich does not necessarily apply in the canton of Berne:',
          'Cantonal subsidy programmes: Many cantons have their own subsidy programmes in addition to federal support. A local installer knows these programmes and applies for them automatically for you. A national provider without local knowledge often forgets them.',
          'Local grid operators: Each municipality has its own grid operator with its own processes for registering the system and the feed-in compensation. A local installer knows the process at your grid operator — and avoids delays.',
          'Cantonal permit procedures: Even if most systems are permit-free, there are cantonal and municipal specifics. A local installer knows what applies in your municipality.',
          `Fast service: If something is not right after installation, a local company can respond quickly. This supports the typical panel lifetime of ${factRange(ECONOMIC_FACTS.moduleLifetimeYears, 'en')} years.`,
        ],
        highlight: 'A local installer knows the cantonal subsidy programmes, the local grid operator, and is quickly on site in case of problems — this is particularly important in Switzerland.',
      },
    ],
    ctaHeading: 'Find the best solar installer in your canton now',
    ctaText: 'PvPro.ch takes care of the search for you. Fill in the form in 2 minutes — we connect you with up to 3 verified, certified installers from your canton. Free, no obligation, no advertising calls.',
    ctaButton: 'Request a free quote',
    formUrl: '/en/request',
    relatedSlugs: ['lohnt-sich-solaranlage-schweiz-2026', 'richtigen-solarinstallateur-schweiz-waehlen', 'solaranlage-installateur-konkurs-garantie-schweiz', 'solaranlage-waermepumpe-kombinieren-schweiz'],
    relatedPageLinks: [
      { label: 'Get & compare quotes', href: '/en/get-solar-panel-quotes' },
      { label: 'Solar system costs Switzerland', href: '/en/solar-panel-costs' },
      { label: 'Subsidies & OTS', href: '/en/solar-subsidies' },
    ],
    faqs: [
      { question: 'How do I find the best solar installer in my canton in Switzerland?', answer: "The easiest way is to obtain up to 3 free quotes from verified local installers via PvPro.ch. This lets you compare prices and quality without having to do the research yourself. Alternatively, you can use the Swissolar directory or ask neighbours for recommendations." },
      { question: 'How much does it cost to get quotes via PvPro.ch?', answer: "For homeowners, the service is completely free and non-binding. PvPro.ch finances itself through a brokerage fee paid by the contracted installer — not by you." },
      { question: 'How long does it take to receive quotes?', answer: 'You will generally receive the first quotes within 24–48 hours of your enquiry.' },
      { question: 'How do I recognise a reputable solar installer in Switzerland?', answer: 'Look for: recognised certification (Swissolar Solarprofi or electrosuisse), local reference projects, complete written quote with all components and warranties, and proof of insurance. PvPro.ch checks all of this in advance for you.' },
      { question: 'Is a national provider or a local company better?', answer: 'In most cases, a certified local specialist is the better choice — they know the cantonal subsidy programmes, the local grid operators, and are quickly on site in case of problems. National providers often have higher prices due to greater overhead.' },
      { question: 'Can I still change the installer after receiving the quotes?', answer: 'Yes, you are not obligated to anything as long as you have not signed an order confirmation. You can reject all quotes or ask for additional offers.' },
      { question: 'What happens if the installer no longer responds after installation?', answer: 'This is a real risk with disreputable companies. That is why PvPro.ch only brokers verified companies with proven local presence. In case of disputes, you also have the option of contacting the Swissolar ombudsman.' },
    ],
  },

  // ─── BESTEN SOLARINSTALLATEUR FINDEN (IT) ────────────────────────────────
  {
    slug: 'besten-solarinstallateur-schweiz-finden',
    locale: 'it',
    title: 'Come trovare il miglior installatore solare in Svizzera nel 2026 – La guida completa',
    metaDescription: 'Come trovare il miglior installatore solare nel tuo Cantone in Svizzera?',
    image: '/images/installateur-solarmodul-dach-alpen.webp',
    date: '3 maggio 2026',
    readMin: 10,
    tag: 'Guida',
    intro: "Chi vuole acquistare un impianto solare in Svizzera si trova di fronte a una domanda che a prima vista sembra semplice: chi è il miglior installatore solare nel mio Cantone? La risposta è più complicata di quanto si pensi — in Svizzera esistono centinaia di installatori, la qualità varia enormemente e i fornitori nazionali non sono sempre migliori delle aziende locali specializzate. Vi aiutiamo a trovare l'installatore giusto — forti di tre anni di esperienza e di oltre 1'000 impianti installati in tutta la Svizzera.",
    sections: [
      {
        heading: "Perché la scelta dell'installatore è così importante?",
        content: [
          "L'impianto solare stesso rappresenta solo una parte dell'investimento. L'installatore determina quattro fattori decisivi:",
          "La qualità dell'installazione: Un impianto montato male perde prestazioni nel corso degli anni, presenta rischi di guasti più elevati e può, nel peggiore dei casi, causare danni al tetto. Un installatore locale esperto conosce i tipi di tetti del vostro Cantone e installa correttamente.",
          "Chi chiede un solo preventivo e firma spesso paga troppo.",
          "Il servizio post-installazione: Chi si occupa se l'impianto mostra un guasto dopo tre anni? Un installatore locale è da voi in 30 minuti. Un fornitore nazionale manda forse un tecnico proveniente da un'altra Cantone.",
          "La richiesta di sovvenzioni: Un installatore locale esperto conosce i programmi di sovvenzione cantonali e le specificità del gestore di rete locale — e presenta tutto correttamente e nei tempi previsti.",
        ],
        stats: [
          { value: '25+', label: 'aziende qualificate nella rete PvPro.ch' },
          { value: '48 ore', label: 'fino al primo preventivo' },
        ],
      },
      {
        heading: 'Installatore locale vs. fornitore nazionale — quale è meglio?',
        content: [
          "Questa domanda preoccupa molti proprietari di case. Ecco la risposta onesta — un confronto dei criteri più importanti:",
        ],
        bullets: [
          'Conoscenza delle normative locali: Azienda locale ✅ Molto buona — Fornitore nazionale ⚠️ Variabile',
          'Sovvenzioni cantonali: Azienda locale ✅ Conosce tutti i programmi — Fornitore nazionale ⚠️ Non sempre aggiornato',
          'Tempo di risposta in caso di problemi: Azienda locale ✅ 30–60 minuti — Fornitore nazionale ❌ Spesso giorni',
          'Prezzo: Azienda locale ✅ Spesso più conveniente — Fornitore nazionale ❌ Spesso più caro (costi generali)',
          'Referenze nel vostro Cantone: Azienda locale ✅ Numerosi progetti locali — Fornitore nazionale ⚠️ Variabile',
          'Notorietà / Marketing: Azienda locale ⚠️ Meno visibile — Fornitore nazionale ✅ Grande',
        ],
        highlight: "Un'azienda locale certificata è nella maggior parte dei casi la scelta migliore — se la si trova. È precisamente questa la sfida che PvPro.ch risolve per voi.",
      },
      {
        heading: 'Come trovo il miglior installatore solare nel mio Cantone?',
        content: [
          "Esistono diversi modi — spieghiamo onestamente cosa funziona e cosa no:",
          "Via 1 — Ricerca Google: Cercate «installatore solare + il vostro cantone» e ottenete un elenco di aziende. Il problema: i primi risultati sono spesso grandi fornitori nazionali con un grande budget pubblicitario — non necessariamente i migliori del vostro Cantone. Le piccole aziende specializzate eccellenti appaiono raramente alla prima pagina.",
          "Via 2 — Raccomandazioni di vicini o conoscenti: È uno dei metodi più affidabili — se il vostro vicino ha avuto una buona esperienza, è un segnale forte. Lo svantaggio: forse avete solo una o due raccomandazioni e nessun confronto di prezzi.",
          "Via 3 — Elenco Swissolar: Swissolar mantiene un elenco di installatori qualificati. È un buon punto di partenza per la verifica delle certificazioni, ma non è uno strumento di confronto prezzi.",
          "Via 4 — PvPro.ch: Compilate un modulo una volta in 2 minuti. Inviamo la vostra richiesta a fino a 3 installatori verificati e certificati del vostro Cantone — che vi inviano preventivi su misura entro 48 ore. Confrontate e scegliete liberamente. Nessuno sforzo, nessuna chiamata pubblicitaria, nessun obbligo.",
        ],
      },
      {
        heading: "A cosa devo fare attenzione nella scelta dell'installatore?",
        content: [
          "Non tutti gli installatori sono ugualmente bravi. Ecco i sei criteri da verificare:",
          "1. Certificazione: Un installatore solare serio in Svizzera ha una certificazione riconosciuta — idealmente di Swissolar (label Solarprofi) o di electrosuisse. Queste certificazioni attestano che l'azienda possiede le competenze tecniche necessarie e si aggiorna regolarmente.",
          "2. Esperienza locale: L'installatore ha progetti comprovati nel vostro cantone o nel vostro Cantone? Conosce i gestori di rete locali, i programmi di sovvenzione cantonali e i tipi di tetti comuni nella vostra zona?",
          "3. Referenze: Chiedete progetti completati nel vostro comune. Un buon installatore può fornirvi clienti di riferimento che potete contattare.",
          "4. Cosa contiene il preventivo? Un preventivo professionale contiene sempre: la dimensione dell'impianto in kWp, il produttore e il tipo di moduli, la marca dell'inverter, il sistema di montaggio, i costi di installazione separati, la produzione annua stimata, le sovvenzioni e le garanzie. Se questi punti mancano, è un segnale d'allarme.",
          "5. Garanzie: Quali garanzie offre l'installatore sul lavoro di montaggio?",
          "6. Assicurazione: L'azienda è assicurata per eventuali danni durante l'installazione? Va sempre chiesto.",
        ],
      },
      {
        heading: "I 7 errori più frequenti nella scelta dell'installatore",
        content: [
          "Dalla nostra esperienza con oltre 1'000 impianti installati, vediamo sempre gli stessi errori:",
        ],
        bullets: [
          "Errore 1 — Chiedere un solo preventivo: L'errore più frequente e più costoso. Senza confronto, non saprete mai se il prezzo è equo.",
          "Errore 2 — Scegliere il più economico: Economico non è sempre buono. Moduli di qualità inferiore, dimensionamento impreciso o un cattivo lavoro di montaggio possono generare costi aggiuntivi a lungo termine. La qualità ha il suo prezzo.",
          "Errore 3 — Non verificare le referenze: Molti proprietari firmano un preventivo senza aver mai chiesto referenze. Una telefonata a un ex cliente dell'installatore può essere molto istruttiva.",
          "Errore 4 — Non richiedere un preventivo scritto: Le promesse verbali non contano. Tutto — prezzo, componenti, garanzie, scadenze — deve essere scritto nel preventivo.",
          "Errore 5 — Lasciare la richiesta di sovvenzione all'installatore senza informarsi: La maggior parte degli installatori si occupa dell'iscrizione presso Pronovo per la RU. Ma chiedetelo esplicitamente: è incluso nel prezzo? Entro quando verrà presentata la domanda?",
          "Errore 6 — Dimensionare l'impianto troppo piccolo: Molti proprietari acquistano il più piccolo impianto che basterà appena. Se in seguito si aggiunge un'auto elettrica o una pompa di calore, la capacità non sarà più sufficiente. Meglio pianificare un po' più grande.",
          "Errore 7 — Non chiedere all'installatore del servizio post-vendita: Cosa succede dopo l'installazione? Chi effettua la manutenzione dell'impianto? C'è un contratto di manutenzione? Queste domande vengono spesso dimenticate — e sono particolarmente importanti per un investimento di lunga durata.",
        ],
        highlight: "PvPro.ch effettua questo confronto gratuitamente per voi.",
      },
      {
        heading: 'Come verifica PvPro.ch gli installatori della rete?',
        content: [
          "PvPro.ch non è un elenco aperto in cui chiunque può iscriversi. Ogni installatore della nostra rete viene verificato:",
          "Il risultato: Quando ricevete un preventivo tramite PvPro.ch, sapete già che l'installatore soddisfa gli standard minimi. Non dovete più verificare voi stessi la certificazione.",
        ],
        bullets: [
          'Certificazione: Prova di una qualifica riconosciuta (Swissolar, electrosuisse o equivalente)',
          'Attestazione assicurativa: Responsabilità civile professionale disponibile',
          'Progetti di riferimento: Esperienza comprovata nella rispettiva Cantone',
          'Presenza cantonale: Solo aziende realmente attive nel vostro Cantone — nessun call center nazionale che rivende gli ordini',
          'Controllo qualità: Verifica continua sulla base del feedback dei clienti',
        ],
      },
      {
        heading: 'Perché un installatore locale è particolarmente importante in Svizzera?',
        content: [
          "La Svizzera è un paese federale — e questo vale anche per gli impianti solari. Ciò che è valido nel cantone di Zurigo non lo è necessariamente nel cantone di Berna:",
          "Programmi di sovvenzione cantonali: Molti cantoni dispongono di propri programmi di sovvenzione in aggiunta agli aiuti federali. Un installatore locale conosce questi programmi e li richiede automaticamente per voi.",
          "Gestori di rete locali: Ogni comune ha il proprio gestore di rete con i propri processi per la registrazione dell'impianto e la retribuzione per l'energia immessa in rete. Un installatore locale conosce la procedura presso il vostro gestore di rete — ed evita i ritardi.",
          "Procedure di autorizzazione cantonali: Anche se la maggior parte degli impianti è esente da autorizzazione, esistono particolarità cantonali e comunali. Un installatore locale sa cosa è valido nel vostro comune.",
          "Servizio rapido: Se dopo l'installazione qualcosa non va, un'azienda locale è da voi in poco tempo.",
        ],
        highlight: "Un installatore locale conosce i programmi di sovvenzione cantonali, il gestore di rete locale ed è rapidamente sul posto in caso di problemi — questo è particolarmente importante in Svizzera.",
      },
    ],
    ctaHeading: 'Trovate ora il miglior installatore solare nel vostro Cantone',
    ctaText: "PvPro.ch si occupa della ricerca per voi. Compilate il modulo in 2 minuti — vi mettiamo in contatto con fino a 3 installatori verificati e certificati del vostro Cantone. Gratuito, senza impegno, senza chiamate pubblicitarie.",
    ctaButton: 'Richiedere un preventivo gratuito',
    formUrl: '/it/richiesta',
    relatedSlugs: ['lohnt-sich-solaranlage-schweiz-2026', 'richtigen-solarinstallateur-schweiz-waehlen', 'solaranlage-installateur-konkurs-garantie-schweiz', 'solaranlage-waermepumpe-kombinieren-schweiz'],
    relatedPageLinks: [
      { label: 'Richiedere preventivi e confrontare', href: '/it/richiedere-preventivo-solare' },
      { label: 'Costi impianto solare Svizzera', href: '/it/costi-impianto-solare' },
      { label: 'Sovvenzioni & RU', href: '/it/incentivi-solari' },
    ],
    faqs: [
      { question: 'Come trovo il miglior installatore solare nel mio Cantone in Svizzera?', answer: "Il modo più semplice è ottenere fino a 3 preventivi gratuiti da installatori locali verificati tramite PvPro.ch. In questo modo confrontate prezzi e qualità senza dover fare ricerche da soli. In alternativa, potete utilizzare l'elenco Swissolar o chiedere raccomandazioni ai vostri vicini." },
      { question: 'Quanto costa ottenere preventivi tramite PvPro.ch?', answer: "Per i proprietari di case, il servizio è completamente gratuito e senza impegno. PvPro.ch si finanzia tramite una commissione di intermediazione pagata dall'installatore incaricato — non da voi." },
      { question: 'Quanto tempo ci vuole per ricevere i preventivi?', answer: "Di norma ricevete i primi preventivi entro 24–48 ore dalla vostra richiesta." },
      { question: 'Come riconosco un installatore solare serio in Svizzera?', answer: "Cercate: certificazione riconosciuta (Swissolar-Solarprofi o electrosuisse), progetti di riferimento locali, preventivo scritto completo con tutti i componenti e le garanzie, e attestazione assicurativa. PvPro.ch verifica tutto questo in anticipo per voi." },
      { question: "È meglio un fornitore nazionale o un'azienda locale?", answer: "Nella maggior parte dei casi, un'azienda locale certificata è la scelta migliore — conosce i programmi di sovvenzione cantonali, i gestori di rete locali ed è rapidamente sul posto in caso di problemi. I fornitori nazionali hanno spesso prezzi più elevati a causa di maggiori costi generali." },
      { question: "Posso ancora cambiare installatore dopo aver ricevuto i preventivi?", answer: "Sì, non siete obbligati a nulla finché non avete firmato una conferma d'ordine. Potete rifiutare tutti i preventivi o chiedere ulteriori offerte." },
      { question: "Cosa succede se l'installatore non risponde più dopo l'installazione?", answer: "Questo è un rischio reale con le aziende poco serie. Per questo motivo PvPro.ch mette in contatto solo con aziende verificate con una presenza locale comprovata. In caso di controversie, avete anche la possibilità di rivolgervi all'organo di mediazione di Swissolar." },
    ],
  },

  // ─── BATTERIESPEICHER BRANDGEFAHR (DE) ─────────────────────────────────────
  {
    slug: 'batteriespeicher-brandgefahr-sicherheit-schweiz',
    locale: 'de',
    title: 'Ist ein Batteriespeicher gefährlich? Was Sie wirklich wissen müssen',
    metaDescription: 'Ist ein Batteriespeicher für die Solaranlage wirklich gefährlich? Was Sie über LFP-Batterien, Sicherheitsstandards und Aufstellort wissen müssen.',
    image: '/images/aurora-energy-batteriespeicher.webp',
    date: '3. Mai 2026',
    readMin: 10,
    tag: 'Ratgeber',
    intro: 'Immer mehr Schweizer Hausbesitzer fragen sich: Ist ein Batteriespeicher im Keller wirklich sicher? Berichte über brennende Batterien in Elektroautos und vereinzelte Vorfälle bei Heimspeichern haben Unsicherheit geschaffen. Die ehrliche Antwort: Moderne Batteriespeicher für Solaranlagen sind sehr sicher — deutlich sicherer als viele andere Geräte, die Sie täglich benutzen. Aber es gibt wichtige Unterschiede zwischen den Technologien, und es gibt richtige und falsche Aufstellorte. In diesem Artikel erklären wir Ihnen alles, was Sie wissen müssen — ehrlich, ohne Werbung und ohne Verharmlosung.',
    sections: [
      {
        heading: 'Die Fakten: Wie hoch ist das Brandrisiko wirklich?',
        content: [
          'Die Antwort kommt aus einer Studie der renommierten Rheinisch-Westfälischen Technischen Hochschule (RWTH) Aachen vom Dezember 2024 — einer der grössten je durchgeführten Untersuchungen zur Sicherheit von Heimspeichern.',
          "Für Heimspeicher sind sichere LFP-Technologie und fachgerechte Installation entscheidend.",
          'Ein Batteriespeicher muss nach Herstellerangaben installiert und betrieben werden.',
          'Ein moderner LFP-Batteriespeicher ist damit 50-mal sicherer als das allgemeine Hausbrand-Risiko — und sicherer als Ihre Waschmaschine.',
        ],
        stats: [
          { value: '—', label: 'Brandrisiko: keine Angabe aus facts.ts' },
          { value: '50x sicherer', label: 'als das allgemeine Hausbrand-Risiko' },
        ],
      },
      {
        heading: 'Warum haben manche Batterien einen schlechten Ruf?',
        content: [
          'Die Berichte über brennende Batterien betreffen fast ausschliesslich NMC-Batterien (Nickel-Mangan-Kobalt) — eine ältere Technologie, die in frühen Heimspeichern und vor allem in Elektroautos und Smartphones eingesetzt wird.',
          'NMC-Batterien sind chemisch instabiler bei Überhitzung, können bei Überladung oder mechanischen Schäden in Brand geraten und setzen bei thermischem Durchgehen Sauerstoff frei — was das Feuer anfacht. Sie werden in Heimspeichern kaum noch eingesetzt.',
          'LFP-Batterien (Lithium-Eisenphosphat) sind chemisch sehr stabil, selbst bei Überhitzung. Unter normalen Bedingungen ist das Risiko eines thermischen Durchgehens gering. LFP ist heute bei neuen Heimspeichern weit verbreitet.',
          'Fazit: Wenn Sie heute einen neuen Batteriespeicher kaufen, erhalten Sie mit hoher Wahrscheinlichkeit eine LFP-Batterie — die sicherste verfügbare Technologie für Heimspeicher.',
        ],
      },
      {
        heading: 'Was ist LFP und warum ist sie so sicher?',
        content: [
          'LFP steht für Lithium-Eisenphosphat (LiFePO₄). Diese Zellchemie hat gegenüber älteren Lithium-Technologien entscheidende Vorteile.',
          "Thermische Stabilität: LFP-Zellen beginnen erst bei über 270°C zu zerfallen — NMC-Zellen bereits ab 150°C. Bei einem Hausbrand wäre selbst dann kein thermisches Durchgehen zu erwarten.",
          'Kein Sauerstoff bei Überhitzung: Andere Lithium-Technologien können bei Überhitzung Sauerstoff freisetzen, der das Feuer intensiviert. LFP tut das nicht — das Feuer kann sich nicht selbst anfachen.',
          'Mechanische Robustheit: LFP-Zellen halten selbst starken mechanischen Belastungen stand. Der berühmte "Nageltest" — ein Nagel wird in die Batterie getrieben — verursacht bei LFP keine Brandreaktion.',
          "Damit übertreffen sie NMC-Batterien deutlich.",
          'Bekannte Hersteller mit LFP-Technologie: BYD (HVM/HVS), Huawei (Luna), Fronius (Reserva), Fenecon (Home) — alle Marktführer setzen heute auf LFP.',
        ],
      },
      {
        heading: 'Wo darf ich einen Batteriespeicher aufstellen?',
        content: [
          'Die Aufstellung ist entscheidend für die Sicherheit. In der Schweiz gilt:',
          'Temperatur: 5–35°C ideal (LFP verliert bei Kälte etwas Leistung, ist aber sicher). Kein direktes Sonnenlicht. Ausreichende Belüftung. Mindestabstand zu brennbaren Materialien gemäss Herstellerangaben. Nicht in Fluchtwegen aufstellen.',
        ],
        bullets: [
          'Keller (trocken, belüftet) ✅',
          'Hauswirtschaftsraum ✅',
          'Garage (bei geeignetem Speicher) ✅',
          'Technikkeller ✅',
          'Fluchtwege — verboten ❌',
          'Direktes Sonnenlicht — vermeiden ❌',
        ],
        highlight: 'Laut VKF (Vereinigung Kantonaler Feuerversicherungen) dürfen LFP-Batteriespeicher in allen Räumen aufgestellt werden — ohne spezielle Brandschutzauflagen, die über die Herstellerangaben hinausgehen.',
      },
      {
        heading: 'Welche Sicherheitsstandards sollte ein Speicher haben?',
        content: [
          'Beim Kauf eines Batteriespeichers sollten Sie auf folgende Zertifizierungen achten:',
          'IEC 62619 — Internationale Sicherheitsanforderungen für stationäre Lithium-Batterien.',
          'VDE-AR-E 2510-50 — Deutsche Norm für Heimspeicher — in der Schweiz anerkannt.',
          'CE-Kennzeichnung — Erfüllung europäischer Sicherheitsstandards.',
          'Ein seriöser Installateur in der Schweiz verbaut nur Speicher mit diesen Zertifizierungen. Fragen Sie explizit danach, bevor Sie unterschreiben.',
        ],
      },
      {
        heading: 'Was ist das Batteriemanagementsystem (BMS) und warum ist es wichtig?',
        content: [
          'Jeder moderne Batteriespeicher hat ein Batteriemanagementsystem (BMS) — das ist die elektronische Schutzschicht, die verhindert, dass die Batterie in gefährliche Zustände gerät.',
          'Das BMS überwacht in Echtzeit: die Temperatur jeder einzelnen Zelle, den Ladestand und die Entladetiefe, den Stromfluss und die Spannung sowie das Zellbalancing (alle Zellen gleichmässig laden/entladen).',
          'Bei Abweichungen greift das BMS sofort ein und unterbricht den Stromfluss. Es ist die wichtigste Sicherheitskomponente eines Speichers — und ein Qualitätsmerkmal, das günstige No-Name-Produkte oft nicht richtig umsetzen.',
        ],
        highlight: 'Empfehlung: Kaufen Sie nur Speicher von bekannten Herstellern mit bewährtem BMS — auch wenn der Preis etwas höher ist.',
      },
      {
        heading: 'Was ist mit chinesischen Batterien — sind die sicher?',
        content: [
          'Diese Frage stellen viele Schweizer Hausbesitzer, da chinesische Hersteller wie BYD und Huawei auf dem Schweizer Markt weit verbreitet sind.',
          'Die ehrliche Antwort: Ja, die führenden chinesischen Hersteller sind sicher — wenn man die richtigen kauft. BYD und Huawei sind weltweit führend in der LFP-Technologie und erfüllen alle relevanten internationalen Sicherheitsstandards (IEC 62619, CE, UN 38.3). Ihre Produkte werden regelmässig von unabhängigen Instituten getestet.',
          'Der Unterschied liegt bei No-Name-Produkten aus dem Niedrigpreissegment — dort kann die Qualitätskontrolle mangelhaft sein. Diese sollten Sie vermeiden.',
          'Unsere Empfehlung: Kaufen Sie Markenprodukte von bekannten Herstellern — ob chinesisch oder europäisch spielt eine untergeordnete Rolle. Wichtiger ist die Zertifizierung und die Garantie.',
        ],
      },
      {
        heading: 'Checkliste: Worauf Sie beim Kauf achten sollten',
        content: [
          'Bevor Sie einen Batteriespeicher kaufen, prüfen Sie diese Punkte:',
        ],
        bullets: [
          '✅ LFP-Technologie — fragen Sie explizit nach der Zellchemie',
          '✅ IEC 62619 Zertifizierung — internationale Sicherheitsnorm',
          '✅ CE-Kennzeichnung — europäischer Standard',
          '✅ Bewährtes BMS — von einem Markenhersteller',
          '✅ Zertifizierter Installateur — elektrische Installation nur vom Fachmann',
          '✅ Korrekter Aufstellort — gemäss Herstellerangaben und VKF-Richtlinien',
          '✅ Brandschutzversicherung prüfen — ob Ihre Hausversicherung Speicher abdeckt',
        ],
      },
      {
        heading: 'Was sagt die Schweizer Versicherung dazu?',
        content: [
          'Ein wichtiger praktischer Punkt: Ist Ihr Batteriespeicher durch die Hausversicherung gedeckt?',
          'In den meisten Schweizer Kantonen ist der Batteriespeicher als fester Bestandteil der Liegenschaft automatisch durch die Gebäudeversicherung gedeckt — genau wie eine Heizungsanlage oder ein Wechselrichter.',
          'Prüfen Sie trotzdem folgende Punkte: Informieren Sie Ihre Gebäudeversicherung über die Installation. Klären Sie, ob Schäden durch Kurzschluss oder Fehlfunktion abgedeckt sind. Bei Mietobjekten: Prüfen Sie die Police des Vermieters.',
          'Ein seriöser lokaler Installateur beantwortet Ihnen diese Fragen — er kennt die Gepflogenheiten in Ihrem Kanton.',
        ],
      },
    ],
    faqs: [
      { question: 'Ist ein Batteriespeicher für die Solaranlage gefährlich?', answer: 'Moderne LFP-Batteriespeicher sind auf Sicherheit ausgelegt. Eine korrekte Installation, ausreichende Belüftung und die Herstellerangaben sind entscheidend.' },
      { question: 'Kann ein Batteriespeicher explodieren?', answer: 'Explosionen bei modernen LFP-Heimspeichern sind praktisch ausgeschlossen. Die Chemie der LFP-Zellen ist so stabil, dass selbst bei mechanischen Schäden keine Kettenreaktion ausgelöst wird. Ältere NMC-Technologien haben ein höheres Risiko — werden aber in neuen Heimspeichern kaum noch eingesetzt.' },
      { question: 'Wo darf ich einen Batteriespeicher aufstellen?', answer: 'LFP-Batteriespeicher dürfen in allen Räumen aufgestellt werden — Keller, Hauswirtschaftsraum, Garage. Wichtig: trockener Ort, 5–35°C Umgebungstemperatur, ausreichende Belüftung und Mindestabstände zu brennbaren Materialien gemäss Herstellerangaben.' },
      { question: 'Sind chinesische Batteriespeicher sicher?', answer: 'Die führenden chinesischen Hersteller wie BYD und Huawei produzieren qualitativ hochwertige LFP-Speicher, die alle internationalen Sicherheitsstandards erfüllen. Zu vermeiden sind No-Name-Produkte aus dem Niedrigpreissegment ohne anerkannte Zertifizierungen.' },
      { question: 'Wie lange hält ein Batteriespeicher?', answer: 'Die Lebensdauer hängt von Hersteller, Zellchemie, Nutzung und Garantiebedingungen ab.' },
      { question: 'Muss ich meinen Batteriespeicher bei der Versicherung melden?', answer: 'Ja, empfohlen. In den meisten Schweizer Kantonen ist der Speicher als Gebäudebestandteil automatisch durch die Gebäudeversicherung gedeckt. Melden Sie die Installation trotzdem, um sicherzugehen, dass Schäden abgedeckt sind.' },
      { question: 'Welche Zertifizierungen sollte ein sicherer Batteriespeicher haben?', answer: 'Mindestens IEC 62619 (internationale Norm für stationäre Lithium-Batterien), CE-Kennzeichnung und UN 38.3. Für den Schweizer Markt ist auch die VDE-AR-E 2510-50 ein anerkanntes Qualitätsmerkmal.' },
    ],
    ctaHeading: 'Sicheren Batteriespeicher in Ihrem Kanton finden',
    ctaText: 'PvPro.ch vermittelt nur zertifizierte Installateure, die ausschliesslich geprüfte LFP-Speicher mit anerkannten Sicherheitszertifizierungen verbauen. Kostenlos bis zu 3 Offerten einholen — und sicher investieren.',
    ctaButton: 'Kostenlose Offerte anfordern',
    formUrl: '/anfrage',
    relatedSlugs: ['lohnt-sich-solaranlage-schweiz-2026', 'besten-solarinstallateur-schweiz-finden', 'solaranlage-installateur-konkurs-garantie-schweiz', 'solaranlage-versicherung-schweiz', 'solaranlage-waermepumpe-kombinieren-schweiz'],
    relatedPageLinks: [
      { label: 'Solaranlage mit Batteriespeicher', href: '/solaranlage-mit-speicher' },
      { label: 'Förderungen & EIV', href: '/foerderungen' },
      { label: 'Solaranlage Kosten', href: '/solaranlage-kosten' },
      { label: 'Offerten vergleichen', href: '/solaranlage-offerte-einholen' },
    ],
  },

  // ─── BATTERIESPEICHER BRANDGEFAHR (FR) ─────────────────────────────────────
  {
    slug: 'batteriespeicher-brandgefahr-sicherheit-schweiz',
    locale: 'fr',
    title: "Un système de stockage de batteries est-il dangereux? Ce que vous devez vraiment savoir",
    metaDescription: "Un système de stockage de batteries pour installation solaire est-il vraiment dangereux? Ce qu'il faut savoir sur les batteries LFP, les normes de sécurité et le lieu d'installation.",
    image: '/images/aurora-energy-batteriespeicher.webp',
    date: '3 mai 2026',
    readMin: 10,
    tag: 'Guide',
    intro: "De plus en plus de propriétaires suisses se demandent: un système de stockage de batteries dans la cave est-il vraiment sûr? Des rapports sur des batteries en feu dans les voitures électriques et quelques incidents isolés avec des systèmes domestiques ont créé de l'incertitude. La réponse honnête: les systèmes de stockage de batteries modernes pour installations solaires sont très sûrs — bien plus sûrs que de nombreux autres appareils que vous utilisez quotidiennement. Mais il existe des différences importantes entre les technologies, et il y a des emplacements d'installation corrects et incorrects. Dans cet article, nous vous expliquons tout ce que vous devez savoir — honnêtement, sans publicité et sans minimiser les risques.",
    sections: [
      {
        heading: "Les faits: quel est réellement le risque d'incendie?",
        content: [
          "La réponse provient d'une étude de la renommée Université technique rhénane-westphalienne (RWTH) d'Aix-la-Chapelle de décembre 2024 — l'une des plus grandes enquêtes jamais réalisées sur la sécurité des systèmes de stockage domestiques.",
          "Pour les systèmes de stockage domestiques, la technologie LFP et une installation professionnelle sont essentielles.",
          "Le système doit être installé et utilisé selon les instructions du fabricant.",
          "Un système de stockage LFP moderne est ainsi 50 fois plus sûr que le risque général d'incendie d'un logement — et plus sûr que votre machine à laver.",
        ],
        stats: [
          { value: '—', label: "Risque d'incendie: aucune valeur dans facts.ts" },
          { value: '50x plus sûr', label: "que le risque général d'incendie d'un logement" },
        ],
      },
      {
        heading: 'Pourquoi certaines batteries ont-elles mauvaise réputation?',
        content: [
          "Les rapports sur des batteries en feu concernent presque exclusivement les batteries NMC (nickel-manganèse-cobalt) — une technologie plus ancienne utilisée dans les premiers systèmes domestiques et surtout dans les voitures électriques et les smartphones.",
          "Les batteries NMC sont chimiquement moins stables en cas de surchauffe, peuvent prendre feu en cas de surcharge ou de dommages mécaniques et libèrent de l'oxygène lors d'un emballement thermique — ce qui attise l'incendie. Elles ne sont pratiquement plus utilisées dans les nouveaux systèmes domestiques.",
          "Les batteries LFP (lithium-fer-phosphate) sont chimiquement très stables, même en cas de surchauffe. Dans des conditions normales, le risque d'emballement thermique est faible. Cette technologie est aujourd'hui largement utilisée dans les systèmes domestiques.",
          "Conclusion: si vous achetez aujourd'hui un nouveau système de stockage, vous obtiendrez très probablement une batterie LFP — la technologie la plus sûre disponible pour les systèmes domestiques.",
        ],
      },
      {
        heading: "Qu'est-ce que le LFP et pourquoi est-il si sûr?",
        content: [
          "LFP signifie Lithium-Fer-Phosphate (LiFePO₄). Cette chimie cellulaire présente des avantages décisifs par rapport aux technologies lithium plus anciennes.",
          "Stabilité thermique: Les cellules LFP ne commencent à se décomposer qu'à plus de 270°C — les cellules NMC dès 150°C. Même en cas d'incendie dans le bâtiment, aucun emballement thermique ne serait à craindre.",
          "Pas d'oxygène en cas de surchauffe: D'autres technologies lithium peuvent libérer de l'oxygène lors d'une surchauffe, intensifiant l'incendie. Le LFP ne le fait pas — l'incendie ne peut pas s'auto-alimenter.",
          'Robustesse mécanique: Les cellules LFP résistent même à de fortes contraintes mécaniques. Le fameux «test du clou» ne provoque aucune réaction dans les batteries LFP.',
          "Elles surpassent ainsi nettement les batteries NMC.",
          'Fabricants connus: BYD (HVM/HVS), Huawei (Luna), Fronius (Reserva), Fenecon (Home) — tous les leaders du marché misent aujourd\'hui sur le LFP.',
        ],
      },
      {
        heading: "Où puis-je installer un système de stockage de batteries?",
        content: [
          "L'emplacement d'installation est essentiel pour la sécurité. En Suisse, les règles suivantes s'appliquent:",
          "Température ambiante idéale: 5–35°C. Pas d'exposition directe au soleil. Ventilation suffisante. Distance minimale par rapport aux matières inflammables selon les instructions du fabricant. Ne pas installer dans les voies d'évacuation.",
        ],
        bullets: [
          'Cave (sèche, ventilée) ✅',
          'Buanderie ✅',
          'Garage (avec un système approprié) ✅',
          'Local technique ✅',
          "Voies d'évacuation — interdit ❌",
          "Exposition directe au soleil — à éviter ❌",
        ],
        highlight: "Selon la VKF (Conférence des établissements cantonaux d'assurance incendie), les systèmes de stockage LFP peuvent être installés dans tous les locaux — sans exigences spéciales de protection contre l'incendie au-delà des instructions du fabricant.",
      },
      {
        heading: "Quelles normes de sécurité un système de stockage doit-il respecter?",
        content: [
          "Lors de l'achat d'un système de stockage, vérifiez les certifications suivantes:",
          "IEC 62619 — Exigences de sécurité internationales pour les batteries lithium stationnaires.",
          "VDE-AR-E 2510-50 — Norme allemande pour les systèmes de stockage domestiques — reconnue en Suisse.",
          "Marquage CE — Conformité aux normes de sécurité européennes.",
          "Un installateur sérieux en Suisse n'installe que des systèmes dotés de ces certifications. Demandez-le explicitement avant de signer.",
        ],
      },
      {
        heading: "Qu'est-ce que le système de gestion de batteries (BMS) et pourquoi est-il important?",
        content: [
          "Chaque système de stockage moderne possède un BMS (Battery Management System) — la couche de protection électronique qui empêche la batterie d'atteindre des états dangereux.",
          "Le BMS surveille en temps réel: la température de chaque cellule, l'état de charge, la profondeur de décharge, le flux de courant, la tension et l'équilibrage des cellules.",
          "En cas d'écart, le BMS intervient immédiatement et interrompt le flux de courant. C'est le composant de sécurité le plus important — et un critère de qualité que les produits bon marché sans marque n'implémentent souvent pas correctement.",
        ],
        highlight: "Recommandation: N'achetez que des systèmes de stockage de fabricants reconnus avec un BMS éprouvé — même si le prix est légèrement plus élevé.",
      },
      {
        heading: "Qu'en est-il des batteries chinoises — sont-elles sûres?",
        content: [
          "Beaucoup de propriétaires suisses posent cette question, car des fabricants chinois comme BYD et Huawei sont largement présents sur le marché suisse.",
          "La réponse honnête: Oui, les principaux fabricants chinois sont sûrs — si l'on choisit les bons. BYD et Huawei sont des leaders mondiaux dans la technologie LFP et respectent toutes les normes de sécurité internationales pertinentes (IEC 62619, CE, UN 38.3).",
          "La différence réside dans les produits sans marque du segment bas de gamme — là, le contrôle qualité peut être défaillant. Ceux-ci sont à éviter.",
          "Notre recommandation: Achetez des produits de marque de fabricants reconnus — qu'ils soient chinois ou européens, cela importe peu. Plus importantes sont la certification et la garantie.",
        ],
      },
      {
        heading: "Liste de contrôle: ce à quoi vous devez faire attention lors de l'achat",
        content: [
          "Avant d'acheter un système de stockage de batteries, vérifiez ces points:",
        ],
        bullets: [
          "✅ Technologie LFP — demandez explicitement la chimie des cellules",
          "✅ Certification IEC 62619 — norme de sécurité internationale",
          "✅ Marquage CE — norme européenne",
          "✅ BMS éprouvé — d'un fabricant reconnu",
          "✅ Installateur certifié — installation électrique uniquement par un professionnel",
          "✅ Emplacement correct — selon les instructions du fabricant et les directives VKF",
          "✅ Vérifier l'assurance incendie — si votre assurance habitation couvre les systèmes de stockage",
        ],
      },
      {
        heading: "Que dit l'assurance suisse à ce sujet?",
        content: [
          "Un point pratique important: votre système de stockage est-il couvert par votre assurance habitation?",
          "Dans la plupart des cantons suisses, le système de stockage est automatiquement couvert par l'assurance bâtiment en tant que composant fixe de la propriété — tout comme une installation de chauffage ou un onduleur.",
          "Vérifiez néanmoins: Informez votre assurance bâtiment de l'installation. Clarifiez si les dommages causés par un court-circuit ou un dysfonctionnement sont couverts. Pour les biens locatifs: vérifiez la police du propriétaire.",
          "Un installateur local sérieux répondra à ces questions — il connaît les pratiques en vigueur dans votre canton.",
        ],
      },
    ],
    faqs: [
      { question: "Un système de stockage de batteries pour installation solaire est-il dangereux?", answer: "Les systèmes de stockage LFP modernes sont conçus pour la sécurité. Une installation correcte, une ventilation adaptée et le respect des instructions du fabricant sont essentiels." },
      { question: "Un système de stockage de batteries peut-il exploser?", answer: "Les explosions de systèmes domestiques LFP modernes sont pratiquement exclues. La chimie des cellules LFP est si stable que même les dommages mécaniques ne déclenchent pas de réaction en chaîne. Les technologies NMC plus anciennes présentent un risque plus élevé — mais ne sont pratiquement plus utilisées dans les nouveaux systèmes domestiques." },
      { question: "Où puis-je installer un système de stockage de batteries?", answer: "Les systèmes de stockage LFP peuvent être installés dans tous les locaux — cave, buanderie, garage. Important: endroit sec, température ambiante de 5–35°C, ventilation suffisante et distances minimales par rapport aux matières inflammables selon les instructions du fabricant." },
      { question: "Les systèmes de stockage de batteries chinois sont-ils sûrs?", answer: "Les principaux fabricants chinois comme BYD et Huawei produisent des systèmes de stockage LFP de haute qualité qui respectent toutes les normes de sécurité internationales. Il faut éviter les produits sans marque du segment bas de gamme sans certifications reconnues." },
      { question: "Combien de temps dure un système de stockage de batteries?", answer: "La durée de vie dépend du fabricant, de la technologie des cellules, de l'utilisation et des conditions de garantie." },
      { question: "Dois-je déclarer mon système de stockage à mon assurance?", answer: "Oui, c'est recommandé. Dans la plupart des cantons suisses, le système de stockage est automatiquement couvert par l'assurance bâtiment. Déclarez néanmoins l'installation pour vous assurer que les dommages sont couverts." },
      { question: "Quelles certifications un système de stockage sûr doit-il avoir?", answer: "Au minimum IEC 62619 (norme internationale pour les batteries lithium stationnaires), le marquage CE et UN 38.3. Pour le marché suisse, la VDE-AR-E 2510-50 est également un critère de qualité reconnu." },
    ],
    ctaHeading: 'Trouver un système de stockage sûr dans votre canton',
    ctaText: "PvPro.ch ne met en relation qu'avec des installateurs certifiés qui n'installent que des systèmes LFP vérifiés avec des certifications de sécurité reconnues. Obtenez gratuitement jusqu'à 3 devis — et investissez en toute sécurité.",
    ctaButton: 'Demander un devis gratuit',
    formUrl: '/fr/demande',
    relatedSlugs: ['lohnt-sich-solaranlage-schweiz-2026', 'besten-solarinstallateur-schweiz-finden', 'solaranlage-installateur-konkurs-garantie-schweiz', 'solaranlage-versicherung-schweiz', 'solaranlage-waermepumpe-kombinieren-schweiz'],
    relatedPageLinks: [
      { label: 'Solaire avec batterie', href: '/fr/solaire-avec-batterie' },
      { label: 'Subventions & EIV', href: '/fr/subventions-solaires' },
      { label: "Coût installation solaire", href: '/fr/cout-installation-solaire' },
      { label: 'Comparer les offres', href: '/fr/offre-solaire' },
    ],
  },

  // ─── BATTERIESPEICHER BRANDGEFAHR (EN) ─────────────────────────────────────
  {
    slug: 'batteriespeicher-brandgefahr-sicherheit-schweiz',
    locale: 'en',
    title: 'Are solar battery storage systems dangerous? What you really need to know',
    metaDescription: 'Is a solar battery storage system really dangerous? What you need to know about LFP batteries, safety standards and installation location in Switzerland.',
    image: '/images/aurora-energy-batteriespeicher.webp',
    date: '3 May 2026',
    readMin: 10,
    tag: 'Guide',
    intro: "More and more Swiss homeowners are asking: is a battery storage system in the basement really safe? Reports about burning batteries in electric cars and isolated incidents with home storage systems have created uncertainty. The honest answer: modern battery storage systems for solar installations are very safe — significantly safer than many other devices you use every day. But there are important differences between technologies, and there are correct and incorrect installation locations. In this article, we explain everything you need to know — honestly, without advertising and without downplaying risks.",
    sections: [
      {
        heading: 'The facts: how high is the fire risk really?',
        content: [
          'The answer comes from a study by the renowned RWTH Aachen University from December 2024 — one of the largest investigations ever conducted into the safety of home storage systems.',
          "For home storage systems, LFP technology and professional installation are essential.",
          'The system must be installed and operated according to the manufacturer’s instructions.',
          'A modern LFP battery storage system is therefore 50 times safer than the general house fire risk — and safer than your washing machine.',
        ],
        stats: [
          { value: '—', label: 'Fire risk: no value in facts.ts' },
          { value: '50x safer', label: 'than the general house fire risk' },
        ],
      },
      {
        heading: 'Why do some batteries have a bad reputation?',
        content: [
          'Reports of burning batteries almost exclusively concern NMC batteries (nickel-manganese-cobalt) — an older technology used in early home storage systems and especially in electric cars and smartphones.',
          'NMC batteries are chemically less stable when overheated, can catch fire due to overcharging or mechanical damage, and release oxygen during thermal runaway — which fans the flames. They are barely used in new home storage systems.',
          'LFP batteries (lithium iron phosphate) are chemically very stable, even when overheated. Under normal conditions, the risk of thermal runaway is low. LFP is now widely used in new home storage systems.',
          'Conclusion: if you buy a new battery storage system today, you will in all likelihood get an LFP battery — the safest technology available for home storage systems.',
        ],
      },
      {
        heading: 'What is LFP and why is it so safe?',
        content: [
          'LFP stands for Lithium Iron Phosphate (LiFePO₄). This cell chemistry has decisive advantages over older lithium technologies.',
          'Thermal stability: LFP cells only begin to decompose at over 270°C — NMC cells already from 150°C. Even in the event of a house fire, thermal runaway would not be expected.',
          'No oxygen when overheated: Other lithium technologies can release oxygen when overheated, intensifying the fire. LFP does not do this — the fire cannot fuel itself.',
          'Mechanical robustness: LFP cells withstand even strong mechanical loads. The famous "nail test" — a nail driven into the battery — causes no fire reaction in LFP batteries.',
          "They thus significantly outperform NMC batteries.",
          'Well-known manufacturers using LFP technology: BYD (HVM/HVS), Huawei (Luna), Fronius (Reserva), Fenecon (Home) — all market leaders now rely on LFP.',
        ],
      },
      {
        heading: 'Where may I install a battery storage system?',
        content: [
          'Installation location is crucial for safety. In Switzerland, the following applies:',
          'Ideal ambient temperature: 5–35°C (LFP loses a little performance in cold, but remains safe). No direct sunlight. Sufficient ventilation. Minimum distance from flammable materials according to manufacturer instructions. Do not install in escape routes.',
        ],
        bullets: [
          'Basement (dry, ventilated) ✅',
          'Utility room ✅',
          'Garage (with a suitable system) ✅',
          'Technical room ✅',
          'Escape routes — prohibited ❌',
          'Direct sunlight — avoid ❌',
        ],
        highlight: 'According to the VKF (Association of Cantonal Fire Insurance Authorities), LFP battery storage systems may be installed in all rooms — without special fire protection requirements beyond the manufacturer instructions.',
      },
      {
        heading: 'What safety standards should a storage system have?',
        content: [
          'When purchasing a battery storage system, look for the following certifications:',
          'IEC 62619 — International safety requirements for stationary lithium batteries.',
          'VDE-AR-E 2510-50 — German standard for home storage systems — recognised in Switzerland.',
          'CE marking — Compliance with European safety standards.',
          'A reputable installer in Switzerland only installs systems with these certifications. Ask explicitly for them before signing.',
        ],
      },
      {
        heading: 'What is the battery management system (BMS) and why is it important?',
        content: [
          'Every modern battery storage system has a battery management system (BMS) — the electronic protection layer that prevents the battery from reaching dangerous states.',
          'The BMS monitors in real time: the temperature of each individual cell, the state of charge and depth of discharge, the current flow and voltage, and cell balancing (charging/discharging all cells evenly).',
          'If deviations occur, the BMS immediately intervenes and interrupts the current flow. It is the most important safety component — and a quality feature that cheap no-name products often do not implement correctly.',
        ],
        highlight: 'Recommendation: Only buy storage systems from well-known manufacturers with a proven BMS — even if the price is slightly higher.',
      },
      {
        heading: 'What about Chinese batteries — are they safe?',
        content: [
          'Many Swiss homeowners ask this question, as Chinese manufacturers such as BYD and Huawei are widely represented in the Swiss market.',
          'The honest answer: Yes, the leading Chinese manufacturers are safe — if you choose the right ones. BYD and Huawei are global leaders in LFP technology and meet all relevant international safety standards (IEC 62619, CE, UN 38.3). Their products are regularly tested by independent institutes.',
          'The difference lies with no-name products from the low-price segment — there, quality control can be deficient. These should be avoided.',
          'Our recommendation: Buy branded products from well-known manufacturers — whether Chinese or European matters less. More important are the certification and the guarantee.',
        ],
      },
      {
        heading: 'Checklist: what to look out for when buying',
        content: [
          'Before buying a battery storage system, check these points:',
        ],
        bullets: [
          '✅ LFP technology — ask explicitly about the cell chemistry',
          '✅ IEC 62619 certification — international safety standard',
          '✅ CE marking — European standard',
          '✅ Proven BMS — from a brand manufacturer',
          '✅ Certified installer — electrical installation only by a specialist',
          '✅ Correct installation location — according to manufacturer instructions and VKF guidelines',
          '✅ Check fire insurance — whether your building insurance covers storage systems',
        ],
      },
      {
        heading: 'What does Swiss insurance say about this?',
        content: [
          'An important practical point: is your battery storage system covered by building insurance?',
          'In most Swiss cantons, the battery storage system is automatically covered by building insurance as a permanent part of the property — just like a heating system or an inverter.',
          "Nevertheless, check the following: Inform your building insurance about the installation. Clarify whether damage caused by short circuits or malfunctions is covered. For rental properties: check the landlord's policy.",
          'A reputable local installer will answer these questions — they know the practices in your canton.',
        ],
      },
    ],
    faqs: [
      { question: 'Is a battery storage system for a solar installation dangerous?', answer: 'Modern LFP battery storage systems are designed with safety in mind. Correct installation, ventilation and compliance with the manufacturer’s instructions are essential.' },
      { question: 'Can a battery storage system explode?', answer: 'Explosions in modern LFP home storage systems are virtually impossible. The chemistry of LFP cells is so stable that even mechanical damage does not trigger a chain reaction. Older NMC technologies have a higher risk — but they are barely used in new home storage systems.' },
      { question: 'Where may I install a battery storage system?', answer: 'LFP battery storage systems may be installed in all rooms — basement, utility room, garage. Important: dry location, ambient temperature 5–35°C, sufficient ventilation and minimum distances from flammable materials according to manufacturer instructions.' },
      { question: 'Are Chinese battery storage systems safe?', answer: 'The leading Chinese manufacturers such as BYD and Huawei produce high-quality LFP storage systems that meet all international safety standards. No-name products from the low-price segment without recognised certifications should be avoided.' },
      { question: 'How long does a battery storage system last?', answer: 'Lifetime depends on the manufacturer, cell chemistry, usage and warranty terms.' },
      { question: 'Do I need to report my battery storage system to my insurance?', answer: 'Yes, recommended. In most Swiss cantons, the storage system is automatically covered by building insurance as a building component. Nevertheless, report the installation to ensure that damage is covered.' },
      { question: 'What certifications should a safe battery storage system have?', answer: 'At minimum IEC 62619 (international standard for stationary lithium batteries), CE marking and UN 38.3. For the Swiss market, VDE-AR-E 2510-50 is also a recognised quality feature.' },
    ],
    ctaHeading: 'Find a safe battery storage system in your canton',
    ctaText: 'PvPro.ch only brokers certified installers who exclusively install verified LFP systems with recognised safety certifications. Get up to 3 quotes for free — and invest safely.',
    ctaButton: 'Request a free quote',
    formUrl: '/en/request',
    relatedSlugs: ['lohnt-sich-solaranlage-schweiz-2026', 'besten-solarinstallateur-schweiz-finden', 'solaranlage-installateur-konkurs-garantie-schweiz', 'solaranlage-versicherung-schweiz', 'solaranlage-waermepumpe-kombinieren-schweiz'],
    relatedPageLinks: [
      { label: 'Solar with battery storage', href: '/en/solar-with-battery' },
      { label: 'Subsidies & EIV', href: '/en/solar-subsidies' },
      { label: 'Solar system costs', href: '/en/solar-panel-costs' },
      { label: 'Compare quotes', href: '/en/solar-quote' },
    ],
  },

  // ─── BATTERIESPEICHER BRANDGEFAHR (IT) ─────────────────────────────────────
  {
    slug: 'batteriespeicher-brandgefahr-sicherheit-schweiz',
    locale: 'it',
    title: "Un sistema di accumulo a batterie è pericoloso? Quello che dovete sapere davvero",
    metaDescription: "Un sistema di accumulo a batterie per impianto solare è davvero pericoloso? Cosa sapere sulle batterie LFP, le norme di sicurezza e il luogo di installazione.",
    image: '/images/aurora-energy-batteriespeicher.webp',
    date: '3 maggio 2026',
    readMin: 10,
    tag: 'Guida',
    intro: "Sempre più proprietari di case svizzeri si chiedono: un sistema di accumulo a batterie in cantina è davvero sicuro? Le notizie di batterie in fiamme nelle auto elettriche e alcuni incidenti isolati con sistemi domestici hanno creato incertezza. La risposta onesta: i moderni sistemi di accumulo a batterie per impianti solari sono molto sicuri — significativamente più sicuri di molti altri dispositivi che usate ogni giorno. Ma esistono differenze importanti tra le tecnologie, e ci sono luoghi di installazione giusti e sbagliati. In questo articolo vi spieghiamo tutto quello che dovete sapere — onestamente, senza pubblicità e senza minimizzare i rischi.",
    sections: [
      {
        heading: "I fatti: quanto è alto il rischio di incendio?",
        content: [
          "La risposta viene da uno studio della rinomata Università Tecnica Renano-Vestfalica (RWTH) di Aquisgrana del dicembre 2024 — una delle indagini più grandi mai condotte sulla sicurezza dei sistemi di accumulo domestici.",
          "Per i sistemi di accumulo domestici sono decisive la tecnologia LFP e un'installazione professionale.",
          "Il sistema di accumulo deve essere installato e utilizzato secondo le istruzioni del produttore.",
          "Un moderno sistema di accumulo LFP è quindi 50 volte più sicuro del rischio generale di incendio abitativo — e più sicuro della vostra lavatrice.",
        ],
        stats: [
          { value: '—', label: "Rischio di incendio: nessun valore in facts.ts" },
          { value: '50x più sicuro', label: "del rischio generale di incendio abitativo" },
        ],
      },
      {
        heading: "Perché alcune batterie hanno una cattiva reputazione?",
        content: [
          "Le notizie di batterie in fiamme riguardano quasi esclusivamente le batterie NMC (nichel-manganese-cobalto) — una tecnologia più vecchia utilizzata nei primi sistemi domestici e soprattutto nelle auto elettriche e negli smartphone.",
          "Le batterie NMC sono chimicamente meno stabili in caso di surriscaldamento, possono prendere fuoco in caso di sovraccarica o danni meccanici e rilasciano ossigeno durante la fuga termica — alimentando l'incendio. Nei nuovi sistemi domestici sono ormai quasi del tutto abbandonate.",
          "Le batterie LFP (litio ferro fosfato) sono chimicamente molto stabili, anche in caso di surriscaldamento. In condizioni normali il rischio di fuga termica è basso. Questa tecnologia è oggi molto diffusa nei nuovi sistemi domestici.",
          "Conclusione: se acquistate oggi un nuovo sistema di accumulo, con tutta probabilità otterrete una batteria LFP — la tecnologia più sicura disponibile per i sistemi domestici.",
        ],
      },
      {
        heading: "Cos'è l'LFP e perché è così sicura?",
        content: [
          "LFP sta per Litio Ferro Fosfato (LiFePO₄). Questa chimica cellulare presenta vantaggi decisivi rispetto alle tecnologie al litio più vecchie.",
          "Stabilità termica: Le celle LFP iniziano a decomporsi solo oltre i 270°C — le celle NMC già dai 150°C.",
          "Nessun ossigeno in caso di surriscaldamento: Altre tecnologie al litio possono rilasciare ossigeno in caso di surriscaldamento, intensificando l'incendio. L'LFP non lo fa — l'incendio non può autoalimentarsi.",
          "Robustezza meccanica: Le celle LFP resistono anche a forti sollecitazioni meccaniche. Il famoso «test del chiodo» non provoca alcuna reazione di incendio nelle batterie LFP.",
          "Superano così nettamente le batterie NMC.",
          "Produttori noti con tecnologia LFP: BYD (HVM/HVS), Huawei (Luna), Fronius (Reserva), Fenecon (Home) — tutti i leader di mercato puntano oggi sull'LFP.",
        ],
      },
      {
        heading: "Dove posso installare un sistema di accumulo a batterie?",
        content: [
          "Il luogo di installazione è fondamentale per la sicurezza. In Svizzera si applicano le seguenti regole:",
          "Temperatura ambiente ideale: 5–35°C. Niente luce solare diretta. Ventilazione sufficiente. Distanza minima da materiali infiammabili secondo le istruzioni del produttore. Non installare nelle vie di fuga.",
        ],
        bullets: [
          'Cantina (asciutta, ventilata) ✅',
          'Ripostiglio ✅',
          'Garage (con sistema idoneo) ✅',
          'Locale tecnico ✅',
          'Vie di fuga — vietato ❌',
          'Luce solare diretta — da evitare ❌',
        ],
        highlight: "Secondo la VKF (Conferenza degli istituti cantonali di assicurazione antincendio), i sistemi di accumulo LFP possono essere installati in tutti i locali — senza requisiti speciali di protezione antincendio oltre alle istruzioni del produttore.",
      },
      {
        heading: "Quali standard di sicurezza deve avere un sistema di accumulo?",
        content: [
          "Al momento dell'acquisto di un sistema di accumulo, verificate le seguenti certificazioni:",
          "IEC 62619 — Requisiti di sicurezza internazionali per batterie al litio stazionarie.",
          "VDE-AR-E 2510-50 — Norma tedesca per sistemi di accumulo domestici — riconosciuta in Svizzera.",
          "Marcatura CE — Conformità agli standard di sicurezza europei.",
          "UN 38.3 — Test di trasporto per batterie al litio.",
          "Un installatore serio in Svizzera installa solo sistemi con queste certificazioni. Chiedetelo esplicitamente prima di firmare.",
        ],
      },
      {
        heading: "Cos'è il sistema di gestione delle batterie (BMS) e perché è importante?",
        content: [
          "Ogni moderno sistema di accumulo a batterie ha un BMS (Battery Management System) — lo strato di protezione elettronica che impedisce alla batteria di raggiungere stati pericolosi.",
          "Il BMS monitora in tempo reale: la temperatura di ogni singola cella, lo stato di carica e la profondità di scarica, il flusso di corrente e la tensione, nonché il bilanciamento delle celle.",
          "In caso di deviazioni, il BMS interviene immediatamente e interrompe il flusso di corrente. È il componente di sicurezza più importante — e un indicatore di qualità che i prodotti economici senza marchio spesso non implementano correttamente.",
        ],
        highlight: "Raccomandazione: Acquistate solo sistemi di accumulo di produttori noti con un BMS collaudato — anche se il prezzo è leggermente più alto.",
      },
      {
        heading: "Cosa ne è delle batterie cinesi — sono sicure?",
        content: [
          "Molti proprietari di case svizzeri pongono questa domanda, poiché produttori cinesi come BYD e Huawei sono ampiamente presenti sul mercato svizzero.",
          "La risposta onesta: sì, i principali produttori cinesi sono sicuri — se si scelgono quelli giusti. BYD e Huawei sono leader mondiali nella tecnologia LFP e soddisfano tutti i pertinenti standard di sicurezza internazionali (IEC 62619, CE, UN 38.3).",
          "La differenza sta nei prodotti senza marchio del segmento dei prezzi bassi — lì il controllo qualità può essere carente. Questi vanno evitati.",
          "La nostra raccomandazione: Acquistate prodotti di marca di produttori noti — che siano cinesi o europei conta poco. Più importante è la certificazione e la garanzia.",
        ],
      },
      {
        heading: "Lista di controllo: a cosa prestare attenzione all'acquisto",
        content: [
          "Prima di acquistare un sistema di accumulo a batterie, verificate questi punti:",
        ],
        bullets: [
          '✅ Tecnologia LFP — chiedete esplicitamente della chimica delle celle',
          '✅ Certificazione IEC 62619 — norma di sicurezza internazionale',
          '✅ Marcatura CE — standard europeo',
          '✅ BMS collaudato — di un produttore di marca',
          '✅ Garanzia chiara — su capacità e funzionamento',
          '✅ Installatore certificato — installazione elettrica solo da un professionista',
          '✅ Luogo di installazione corretto — secondo le istruzioni del produttore e le linee guida VKF',
          '✅ Verificare la copertura antincendio — se la vostra assicurazione edilizia copre i sistemi di accumulo',
        ],
      },
      {
        heading: "Cosa dice l'assicurazione svizzera al riguardo?",
        content: [
          "Un punto pratico importante: il vostro sistema di accumulo a batterie è coperto dall'assicurazione edilizia?",
          "Nella maggior parte dei cantoni svizzeri, il sistema di accumulo è automaticamente coperto dall'assicurazione edilizia come componente fisso dell'immobile — proprio come un impianto di riscaldamento o un inverter.",
          "Verificate comunque: Informate la vostra assicurazione edilizia dell'installazione. Chiarite se i danni causati da cortocircuiti o malfunzionamenti sono coperti. Per gli immobili in affitto: verificate la polizza del proprietario.",
          "Un installatore locale serio risponderà a queste domande — conosce le consuetudini nel vostro cantone.",
        ],
      },
    ],
    faqs: [
      { question: "Un sistema di accumulo a batterie per impianto solare è pericoloso?", answer: "I moderni sistemi di accumulo LFP sono progettati pensando alla sicurezza. Sono essenziali un'installazione corretta, una ventilazione adeguata e il rispetto delle istruzioni del produttore." },
      { question: "Un sistema di accumulo a batterie può esplodere?", answer: "Le esplosioni nei moderni sistemi domestici LFP sono praticamente escluse. La chimica delle celle LFP è così stabile che anche i danni meccanici non innescano una reazione a catena. Le tecnologie NMC più vecchie presentano un rischio più elevato — ma vengono ormai quasi del tutto abbandonate nei nuovi sistemi domestici." },
      { question: "Dove posso installare un sistema di accumulo a batterie?", answer: "I sistemi di accumulo LFP possono essere installati in tutti i locali — cantina, ripostiglio, garage. Importante: luogo asciutto, temperatura ambiente 5–35°C, ventilazione sufficiente e distanze minime da materiali infiammabili secondo le istruzioni del produttore." },
      { question: "I sistemi di accumulo a batterie cinesi sono sicuri?", answer: "I principali produttori cinesi come BYD e Huawei producono sistemi di accumulo LFP di alta qualità che soddisfano tutti gli standard di sicurezza internazionali. Vanno evitati i prodotti senza marchio del segmento dei prezzi bassi senza certificazioni riconosciute." },
      { question: "Quanto dura un sistema di accumulo a batterie?", answer: 'La durata dipende dal produttore, dalla chimica delle celle, dall’uso e dalle condizioni di garanzia.' },
      { question: "Devo comunicare il mio sistema di accumulo alla mia assicurazione?", answer: "Sì, è consigliato. Nella maggior parte dei cantoni svizzeri, il sistema di accumulo è automaticamente coperto dall'assicurazione edilizia come componente dell'edificio. Comunicate comunque l'installazione per assicurarvi che i danni siano coperti." },
      { question: "Quali certificazioni deve avere un sistema di accumulo sicuro?", answer: "Come minimo IEC 62619 (norma internazionale per le batterie al litio stazionarie), la marcatura CE e UN 38.3. Per il mercato svizzero, anche la VDE-AR-E 2510-50 è un riconosciuto indicatore di qualità." },
    ],
    ctaHeading: 'Trovare un sistema di accumulo sicuro nel vostro Cantone',
    ctaText: "PvPro.ch mette in contatto solo con installatori certificati che installano esclusivamente sistemi LFP verificati con certificazioni di sicurezza riconosciute. Richiedete gratuitamente fino a 3 preventivi — e investite in sicurezza.",
    ctaButton: 'Richiedere preventivo gratuito',
    formUrl: '/it/richiesta',
    relatedSlugs: ['lohnt-sich-solaranlage-schweiz-2026', 'besten-solarinstallateur-schweiz-finden', 'solaranlage-installateur-konkurs-garantie-schweiz', 'solaranlage-versicherung-schweiz', 'solaranlage-waermepumpe-kombinieren-schweiz'],
    relatedPageLinks: [
      { label: 'Solare con accumulo', href: '/it/solare-con-accumulo' },
      { label: 'Incentivi & EIV', href: '/it/incentivi-solari' },
      { label: 'Costi impianto solare', href: '/it/costi-impianto-solare' },
      { label: 'Confronta preventivi', href: '/it/preventivo-solare' },
    ],
  },

  // ─── INSTALLATEUR KONKURS GARANTIE (DE) ──────────────────────────────────────
  {
    slug: 'solaranlage-installateur-konkurs-garantie-schweiz',
    locale: 'de',
    title: 'Was passiert mit meiner Solaranlage wenn der Installateur pleite geht?',
    metaDescription: 'Solarinstallateur insolvent — was passiert mit Garantie und Gewährleistung? Alles was Schweizer Hausbesitzer wissen müssen, um sich zu schützen. Mit Checkliste.',
    image: '/images/solaranlage-bauernhaus-alpen.webp',
    date: '3. Mai 2026',
    readMin: 10,
    tag: 'Ratgeber',
    intro: 'Die Solarbranche wächst rasant — und wie in jedem Wachstumsmarkt gibt es auch Unternehmen, die scheitern. Was passiert mit Ihrer Solaranlage, wenn der Installateur Konkurs anmeldet? Verlieren Sie Ihre Garantie? Wer kümmert sich um Reparaturen? Und was können Sie tun, um sich zu schützen, bevor das überhaupt passiert? Dieser Artikel beantwortet alle diese Fragen — klar, ehrlich und ohne Panik zu machen. Denn die gute Nachricht lautet: Eine Insolvenz des Installateurs ist kein Katastrophenszenario — wenn Sie vorbereitet sind.',
    sections: [
      {
        heading: 'Der wichtigste Unterschied: Gewährleistung vs. Garantie',
        content: [
          'Bevor wir erklären, was bei einer Insolvenz passiert, müssen wir einen entscheidenden Unterschied verstehen — den zwischen Gewährleistung und Garantie. Die meisten Hausbesitzer verwechseln diese beiden Begriffe, aber sie sind rechtlich völlig verschieden.',
          'Gewährleistung: Gesetzlich vorgeschrieben — kein Vertrag nötig. Richtet sich gegen den Installateur (Verkäufer der Anlage). In der Schweiz: 2 Jahre für bewegliche Teile, 5 Jahre für fest verbaute Teile (z.B. Dachkonstruktion). Deckt Mängel, die bei der Installation vorhanden waren. Bei Insolvenz des Installateurs: praktisch wertlos — kein Ansprechpartner mehr.',
          'Garantie: Freiwilliges Versprechen des Herstellers der einzelnen Komponenten — unabhängig vom Installateur. Bei Insolvenz des Installateurs: bleibt vollständig bestehen.',
          'Das Fazit: Wenn Ihr Installateur pleite geht, verlieren Sie Ihre Gewährleistungsansprüche — aber Ihre wertvollen Herstellergarantien auf Module, Wechselrichter und Speicher bleiben vollständig erhalten.',
        ],
        stats: [
          { value: `${factNumber(ECONOMIC_FACTS.performanceWarranty.percent)}% nach ${factNumber(ECONOMIC_FACTS.performanceWarranty.afterYears)} Jahren`, label: 'Richtwert der Leistungsgarantie' },
          { value: 'Gewährleistung', label: 'vs. Garantie — der entscheidende Unterschied' },
          { value: 'Lokale Betriebe', label: 'haben tieferes Insolvenzrisiko' },
        ],
      },
      {
        heading: 'Was passiert konkret bei einer Insolvenz des Installateurs?',
        content: [
          'Szenario 1 — Anlage bereits vollständig installiert und in Betrieb: Das ist das beste Szenario. Die Anlage läuft, alles ist fertig. Was Sie verlieren: Ihre Gewährleistungsansprüche gegen den Installateur für Installationsfehler, allfällige Wartungsverträge mit dem Betrieb und den direkten Ansprechpartner für kleinere Probleme. Was bleibt: alle Herstellergarantien auf Module, Wechselrichter und Speicher, die Anlage produziert weiterhin Strom, und die Einmalvergütung (EIV) ist bereits beantragt oder ausbezahlt.',
          'Handlung: Bewahren Sie alle Unterlagen sorgfältig auf — Rechnungen, Garantiezertifikate, technische Datenblätter, Seriennummern aller Komponenten. Das ist Ihr Schutzschild.',
          'Szenario 2 — Anlage ist halb fertig: Das ist das schwierigste Szenario. Der Insolvenzverwalter entscheidet, ob das Projekt weitergeführt wird. In den meisten Fällen müssen Sie einen neuen Installateur beauftragen, der das Projekt übernimmt. Bereits bezahlte Anzahlungen sind gefährdet — Sie werden zum Gläubiger. Handlung: Forderungen sofort beim Insolvenzverwalter anmelden, einen neuen lokalen Installateur kontaktieren und bei Kreditkartenzahlung einen Chargeback einleiten.',
          'Szenario 3 — Vertrag unterschrieben, Bau noch nicht begonnen: Anzahlungen sind gefährdet. Handeln Sie sofort: Forderung beim Insolvenzverwalter anmelden, Chargeback bei Kreditkartenzahlung prüfen, und Ihre Hausratversicherung auf Anzahlungsschutz prüfen.',
        ],
      },
      {
        heading: 'Wie lange dauert ein Insolvenzverfahren in der Schweiz?',
        content: [
          'In einem Schweizer Konkursverfahren können Sie Forderungen beim Konkursamt anmelden und erhalten je nach Verfahren möglicherweise eine Quote. Herstellergarantien bleiben davon unberührt.',
          'Realitätscheck: Gläubiger erhalten am Ende eines Insolvenzverfahrens oft nur einen kleinen Teil ihrer Forderungen zurück. Setzen Sie Ihre Energie lieber auf die Herstellergarantien und auf die Suche nach einem neuen lokalen Fachbetrieb für Wartung und Service.',
        ],
        bullets: [
          'Forderungen sofort beim Konkursamt anmelden',
          'Herstellergarantien direkt mit den Herstellern klären',
          'Neuen lokalen Installateur für Wartung und Reparaturen suchen',
          'Alle Dokumente und Garantiezertifikate sorgfältig sichern',
        ],
      },
      {
        heading: 'Was passiert mit der Garantie der Hersteller?',
        content: [
          `Das ist die eigentlich wichtige Frage. Der Richtwert der Leistungsgarantie liegt bei ${factNumber(ECONOMIC_FACTS.performanceWarranty.percent)}% nach ${factNumber(ECONOMIC_FACTS.performanceWarranty.afterYears)} Jahren und richtet sich direkt gegen den Modulhersteller — nicht gegen den Installateur.`,
          'Herstellergarantien auf Wechselrichter: Gleiche Logik — die Garantie besteht zwischen Ihnen und dem Hersteller. Fronius, SMA, Huawei haben eigene Service-Hotlines und Servicepartner in der Schweiz. Was Sie brauchen: Seriennummer des Wechselrichters, Kaufbeleg/Rechnung und das Garantiezertifikat vom Hersteller. Mit diesen Dokumenten können Sie direkt beim Hersteller einen Garantiefall einleiten — ohne den Installateur.',
          'Achtung bei günstigen No-Name-Produkten: Bei unbekannten Herstellern ohne Schweizer Niederlassung wird die Garantiedurchsetzung im Schadensfall sehr schwierig. Das ist ein weiterer Grund, warum PvPro.ch nur Installationen mit Komponenten von etablierten Markenherstellern vermittelt.',
        ],
      },
      {
        heading: 'Woran erkennt man einen Installateur in finanziellen Schwierigkeiten?',
        content: [
          'Es gibt Warnsignale, die Sie vor einer Insolvenz erkennen können:',
        ],
        bullets: [
          '🔴 Alarmsignal 1: Eine sehr hohe Anzahlung wird lange vor Baubeginn verlangt',
          '🔴 Alarmsignal 2: Vereinbarte Liefertermine werden wiederholt ohne Erklärung verschoben',
          '🔴 Alarmsignal 3: Der Ansprechpartner ist plötzlich schwer erreichbar — E-Mails bleiben unbeantwortet',
          '🔴 Alarmsignal 4: Die Website des Unternehmens ist nicht mehr verfügbar',
          '🔴 Alarmsignal 5: Material wird kurz vor der Installation durch günstigere Alternativen ersetzt',
          '🔴 Alarmsignal 6: Andere Kunden berichten in Online-Bewertungen von ähnlichen Problemen',
        ],
      },
      {
        heading: 'Wie schützen Sie sich präventiv?',
        content: [
          '1. Nur zertifizierte lokale Betriebe beauftragen: Kleine, lokale Fachbetriebe mit langjähriger Präsenz im Kanton haben ein deutlich tieferes Insolvenzrisiko als schnell gewachsene nationale Anbieter. Sie kennen ihre Kunden persönlich und haben einen guten Ruf zu verlieren.',
          '2. Anzahlungen minimieren: Vermeiden Sie überhöhte Vorauszahlungen. Vereinbaren Sie schriftlich gestaffelte Zahlungen nach nachvollziehbaren Projektfortschritten.',
          '3. Alles schriftlich: Bestehen Sie auf einem detaillierten Werkvertrag mit genauer Auflistung der Komponenten, Garantien, Fristen und Zahlungsbedingungen.',
          '4. Herstellergarantien separat dokumentieren: Verlangen Sie bei der Übergabe alle Garantiezertifikate direkt vom Installateur. Bewahren Sie diese getrennt auf.',
          '5. Markenhersteller bevorzugen: Komponenten von Fronius, SMA, BYD, Huawei haben eigene Service-Netzwerke in der Schweiz — unabhängig vom Installateur.',
          '6. Referenzen prüfen: Fragen Sie nach Referenzkunden und rufen Sie diese an. Ein seriöser Betrieb hat zufriedene Kunden, die gerne Auskunft geben.',
        ],
      },
      {
        heading: 'Warum lokale Installateure das tiefere Risiko haben',
        content: [
          "Aus unserer Erfahrung mit über 1'000 vermittelten Anlagen in der Schweiz können wir sagen: Grosse, national tätige Anbieter mit viel Werbung haben nicht automatisch das tiefste Insolvenzrisiko. Im Gegenteil — schnell gewachsene Unternehmen schrumpfen auch schnell.",
        ],
        bullets: [
          'Nachgewiesene Betriebserfahrung im Kanton',
          'Kennen ihre Kunden persönlich',
          'Haben einen guten Ruf zu verlieren — und pflegen ihn',
          'Nicht abhängig von nationalem Auftragsvolumen',
          'Reagieren schneller bei Problemen — weil sie nebenan sind',
        ],
        highlight: 'PvPro.ch vermittelt ausschliesslich geprüfte lokale Fachbetriebe — keine nationalen Call-Center-Anbieter, die Aufträge an Subunternehmer weiterverkaufen.',
      },
      {
        heading: 'Checkliste — Was Sie nach der Installation aufbewahren müssen',
        content: [
          'Drucken Sie diese Liste aus und legen Sie alles in einem Ordner ab:',
        ],
        bullets: [
          '✅ Rechnung mit Auflistung aller Komponenten und Seriennummern',
          '✅ Werkvertrag mit Garantie- und Gewährleistungsvereinbarungen',
          '✅ Garantiezertifikate für Module (Produkt- und Leistungsgarantie)',
          '✅ Garantiezertifikat für Wechselrichter',
          '✅ Garantiezertifikat für Batteriespeicher (falls vorhanden)',
          '✅ Inbetriebnahmeprotokoll mit Unterschrift des Installateurs',
          '✅ EIV-Anmeldebestätigung von Pronovo',
          '✅ Anmeldung beim lokalen Netzbetreiber',
          '✅ Technische Datenblätter aller Hauptkomponenten',
          '✅ Fotos der Anlage und der Kabelführung (vor Verkleidung)',
        ],
      },
    ],
    faqs: [
      { question: 'Was passiert mit der Garantie meiner Solaranlage wenn der Installateur pleite geht?', answer: 'Was Sie verlieren, ist die Gewährleistung des Installateurs für Installationsfehler.' },
      { question: 'Kann ich meine Anzahlung zurückbekommen wenn der Installateur Konkurs macht?', answer: 'Sie können Ihre Forderung beim Konkursamt anmelden. Ob und in welchem Umfang eine Rückzahlung erfolgt, hängt vom Konkursverfahren ab. Bei Kreditkartenzahlung kann ein Chargeback möglich sein.' },
      { question: 'Wer repariert meine Solaranlage wenn der Installateur nicht mehr existiert?', answer: 'Für Reparaturen innerhalb der Herstellergarantie wenden Sie sich direkt an den Hersteller der defekten Komponente. Für sonstige Wartungsarbeiten beauftragen Sie einen anderen lokalen Fachbetrieb — PvPro.ch kann Ihnen dabei helfen.' },
      { question: 'Wie erkenne ich einen seriösen Installateur?', answer: 'Achten Sie auf lokale Präsenz, anerkannte Zertifizierung, keine überhöhten Anzahlungen, einen schriftlichen Werkvertrag und nachprüfbare Referenzen in Ihrem Kanton.' },
      { question: 'Sind lokale Installateure sicherer als nationale Anbieter?', answer: 'In der Regel ja. Kleine lokale Fachbetriebe mit langjähriger Präsenz haben oft ein tieferes Insolvenzrisiko als schnell gewachsene nationale Anbieter. Zudem reagieren sie schneller bei Problemen und kennen die lokalen Gegebenheiten besser.' },
      { question: 'Was muss ich nach der Installation aufbewahren?', answer: 'Rechnung mit Seriennummern aller Komponenten, Werkvertrag, alle Garantiezertifikate (Module, Wechselrichter, Speicher), Inbetriebnahmeprotokoll, EIV-Bestätigung und Anmeldung beim Netzbetreiber. Diese Dokumente sind Ihr Schutzschild im Schadensfall.' },
    ],
    ctaHeading: 'Nur geprüfte lokale Installateure — mit PvPro.ch',
    ctaText: 'PvPro.ch vermittelt ausschliesslich zertifizierte lokale Fachbetriebe mit nachgewiesener Erfahrung in Ihrem Kanton. Kein nationales Call-Center, kein Weiterverkauf an Subunternehmer. Kostenlos bis zu 3 Offerten einholen.',
    ctaButton: 'Kostenlose Offerte anfordern',
    formUrl: '/anfrage',
    relatedSlugs: ['besten-solarinstallateur-schweiz-finden', 'batteriespeicher-brandgefahr-sicherheit-schweiz', 'lohnt-sich-solaranlage-schweiz-2026'],
    relatedPageLinks: [
      { label: 'Förderungen & Einmalvergütung (EIV)', href: '/foerderungen' },
      { label: 'Offerten einholen und vergleichen', href: '/solaranlage-offerte-einholen' },
      { label: 'Vergleichsportal Photovoltaik', href: '/vergleichsportal-photovoltaik-schweiz' },
      { label: 'Solaranlage mit Batteriespeicher', href: '/solaranlage-mit-speicher' },
    ],
  },

  // ─── INSTALLATEUR KONKURS GARANTIE (FR) ──────────────────────────────────────
  {
    slug: 'solaranlage-installateur-konkurs-garantie-schweiz',
    locale: 'fr',
    title: "Que se passe-t-il avec mon installation solaire si l'installateur fait faillite?",
    metaDescription: "Installateur solaire insolvable — que devient la garantie? Tout ce que les propriétaires suisses doivent savoir pour se protéger. Avec checklist.",
    image: '/images/solaranlage-bauernhaus-alpen.webp',
    date: '3 mai 2026',
    readMin: 10,
    tag: 'Guide',
    intro: "Le secteur solaire croît rapidement — et comme dans tout marché en expansion, certaines entreprises échouent. Que se passe-t-il avec votre installation solaire si l'installateur dépose le bilan? Perdez-vous votre garantie? Qui s'occupe des réparations? Et que pouvez-vous faire pour vous protéger avant que cela n'arrive? Cet article répond à toutes ces questions — clairement, honnêtement et sans dramatiser. Car la bonne nouvelle est la suivante: une insolvabilité de l'installateur n'est pas une catastrophe — si vous êtes préparé.",
    sections: [
      {
        heading: 'La différence essentielle: garantie légale vs. garantie fabricant',
        content: [
          "Avant d'expliquer ce qui se passe en cas d'insolvabilité, il faut comprendre une distinction cruciale — entre la garantie légale (garantie des vices) et la garantie fabricant. La plupart des propriétaires confondent ces deux notions, mais elles sont juridiquement très différentes.",
          "Garantie légale: obligatoire par la loi — aucun contrat nécessaire. S'exerce contre l'installateur (vendeur de l'installation). En Suisse: deux ans pour les pièces mobiles, cinq ans pour les éléments intégrés (ex. structure de toiture). Couvre les défauts présents lors de l'installation. En cas d'insolvabilité de l'installateur: pratiquement sans valeur — plus d'interlocuteur.",
          "Garantie fabricant: promesse volontaire du fabricant des composants — indépendante de l'installateur. En cas d'insolvabilité de l'installateur: reste entièrement valide.",
          "Conclusion: si votre installateur fait faillite, vous perdez vos droits à la garantie légale — mais vos précieuses garanties fabricant sur les panneaux, l'onduleur et le système de stockage restent entièrement valides.",
        ],
        stats: [
          { value: `${factNumber(ECONOMIC_FACTS.performanceWarranty.percent)}% après ${factNumber(ECONOMIC_FACTS.performanceWarranty.afterYears)} ans`, label: 'référence de garantie de performance' },
          { value: 'Garantie légale', label: 'vs. garantie fabricant — la différence décisive' },
          { value: 'Entreprises locales', label: 'présentent un risque de faillite plus faible' },
        ],
      },
      {
        heading: "Que se passe-t-il concrètement en cas d'insolvabilité de l'installateur?",
        content: [
          "Scénario 1 — Installation déjà entièrement réalisée et en service: C'est le meilleur scénario. L'installation fonctionne, tout est terminé. Ce que vous perdez: vos droits à la garantie légale pour les défauts d'installation, les éventuels contrats de maintenance et votre interlocuteur direct. Ce qui reste: toutes les garanties fabricant sur les panneaux, l'onduleur et le système de stockage, l'installation continue de produire de l'électricité, et la subvention (SRI) est déjà demandée ou versée. Action: conservez soigneusement tous les documents — factures, certificats de garantie, fiches techniques, numéros de série de tous les composants.",
          "Scénario 2 — Installation à moitié réalisée: C'est le scénario le plus difficile. Le liquidateur judiciaire décide si le projet est poursuivi. Dans la plupart des cas, vous devez mandater un nouvel installateur. Les acomptes déjà versés sont en danger — vous devenez créancier. Action: déposez immédiatement une créance auprès du liquidateur, contactez un nouvel installateur local et initiez un chargeback si vous avez payé par carte de crédit.",
          "Scénario 3 — Contrat signé, travaux pas encore commencés: Les acomptes sont en danger. Agissez immédiatement: déposez une créance auprès du liquidateur, vérifiez la possibilité d'un chargeback par carte de crédit et vérifiez si votre assurance ménage couvre la perte d'acompte.",
        ],
      },
      {
        heading: "Combien de temps dure une procédure d'insolvabilité en Suisse?",
        content: [
          "Dans une procédure de faillite suisse, vous pouvez déposer des créances auprès de l'office des poursuites et recevoir éventuellement un dividende selon l'issue de la procédure. Les garanties fabricant restent séparées de ce processus.",
          "Vérification de la réalité: les créanciers ne récupèrent souvent qu'une petite partie de leurs créances au terme d'une procédure d'insolvabilité. Concentrez plutôt votre énergie sur les garanties fabricant et la recherche d'un nouveau prestataire local.",
        ],
        bullets: [
          "Déposer immédiatement une créance auprès de l'office des poursuites",
          'Clarifier les garanties fabricant directement avec les fabricants',
          'Chercher un nouvel installateur local pour la maintenance et les réparations',
          'Sécuriser soigneusement tous les documents et certificats de garantie',
        ],
      },
      {
        heading: "Que se passe-t-il avec les garanties des fabricants?",
        content: [
          `C'est la question importante. La référence de garantie de performance est de ${factNumber(ECONOMIC_FACTS.performanceWarranty.percent)}% après ${factNumber(ECONOMIC_FACTS.performanceWarranty.afterYears)} ans et s'exerce directement contre le fabricant des panneaux, pas contre l'installateur.`,
          "Garanties fabricant sur l'onduleur: même logique — la garantie existe entre vous et le fabricant. Fronius, SMA, Huawei ont leurs propres hotlines de service et partenaires de service en Suisse. Ce dont vous avez besoin: numéro de série de l'onduleur, preuve d'achat/facture et le certificat de garantie du fabricant.",
          "Attention aux produits bon marché sans marque: chez des fabricants inconnus sans représentation suisse, faire valoir la garantie en cas de sinistre devient très difficile. C'est une raison supplémentaire pour laquelle PvPro.ch ne s'occupe que d'installations avec des composants de fabricants de marque établis.",
        ],
      },
      {
        heading: "Comment reconnaître un installateur en difficulté financière?",
        content: [
          "Il existe des signaux d'alarme que vous pouvez détecter avant une insolvabilité:",
        ],
        bullets: [
          "🔴 Signal 1: L'installateur exige un acompte très élevé bien avant le début des travaux",
          '🔴 Signal 2: Les délais de livraison convenus sont reportés à plusieurs reprises sans explication',
          "🔴 Signal 3: L'interlocuteur devient soudainement difficile à joindre — les e-mails restent sans réponse",
          "🔴 Signal 4: Le site web de l'entreprise n'est plus accessible",
          '🔴 Signal 5: Le matériel est remplacé juste avant l\'installation par des alternatives moins chères sans concertation',
          "🔴 Signal 6: D'autres clients signalent des problèmes similaires dans les avis en ligne",
        ],
      },
      {
        heading: 'Comment vous protéger de façon préventive?',
        content: [
          "1. Ne mandater que des entreprises locales certifiées: Les petits prestataires locaux avec une présence de longue date dans le canton ont un risque d'insolvabilité nettement plus faible que les prestataires nationaux à croissance rapide. Ils connaissent leurs clients personnellement et ont une réputation à préserver.",
          "2. Minimiser les acomptes: Évitez les avances excessives et convenez par écrit de paiements échelonnés selon l'avancement vérifiable du projet.",
          "3. Tout par écrit: Insistez sur un contrat d'entreprise détaillé avec une liste précise des composants, des garanties, des délais et des conditions de paiement.",
          "4. Documenter les garanties fabricant séparément: Exigez à la livraison tous les certificats de garantie directement de l'installateur. Conservez-les séparément.",
          "5. Préférer les fabricants de marque: Les composants de Fronius, SMA, BYD, Huawei ont leurs propres réseaux de service en Suisse — indépendamment de l'installateur.",
          "6. Vérifier les références: Demandez des clients de référence et appelez-les. Un prestataire sérieux a des clients satisfaits qui donnent volontiers des informations.",
        ],
      },
      {
        heading: 'Pourquoi les installateurs locaux présentent un risque plus faible',
        content: [
          "D'après notre expérience avec plus de 1'000 installations réalisées en Suisse, nous pouvons affirmer: les grands prestataires nationaux avec beaucoup de publicité n'ont pas automatiquement le risque d'insolvabilité le plus faible. Au contraire — les entreprises à croissance rapide déclinent aussi rapidement.",
        ],
        bullets: [
          'Expérience professionnelle documentée dans le canton',
          'Connaissent leurs clients personnellement',
          'Ont une réputation à préserver — et la chérissent',
          'Ne dépendent pas du volume de commandes national',
          'Réagissent plus vite en cas de problèmes — car ils sont à proximité',
        ],
        highlight: "PvPro.ch s'occupe exclusivement de prestataires locaux vérifiés — aucun centre d'appels national qui revend les mandats à des sous-traitants.",
      },
      {
        heading: 'Checklist — Ce que vous devez conserver après l\'installation',
        content: [
          'Imprimez cette liste et rassemblez tout dans un classeur:',
        ],
        bullets: [
          '✅ Facture avec liste de tous les composants et numéros de série',
          '✅ Contrat d\'entreprise avec accords de garantie légale et fabricant',
          '✅ Certificats de garantie pour les panneaux (garantie produit et de performance)',
          '✅ Certificat de garantie pour l\'onduleur',
          '✅ Certificat de garantie pour le système de stockage (le cas échéant)',
          '✅ Protocole de mise en service avec signature de l\'installateur',
          '✅ Confirmation d\'inscription SRI de Pronovo',
          '✅ Inscription auprès du gestionnaire de réseau local',
          '✅ Fiches techniques de tous les composants principaux',
          '✅ Photos de l\'installation et du câblage (avant habillage)',
        ],
      },
    ],
    faqs: [
      { question: "Que se passe-t-il avec la garantie de mon installation solaire si l'installateur fait faillite?", answer: "Ce que vous perdez, c'est la garantie légale de l'installateur pour les défauts d'installation." },
      { question: "Puis-je récupérer mon acompte si l'installateur fait faillite?", answer: "Vous pouvez déposer votre créance auprès de l'office des poursuites. Le remboursement éventuel dépend de la procédure. Un chargeback peut être possible en cas de paiement par carte." },
      { question: "Qui répare mon installation solaire si l'installateur n'existe plus?", answer: "Pour les réparations couvertes par la garantie fabricant, adressez-vous directement au fabricant du composant défectueux. Pour les autres travaux de maintenance, mandatez un autre prestataire local — PvPro.ch peut vous y aider." },
      { question: 'Comment reconnaître un installateur sérieux?', answer: "Vérifiez la présence locale, une certification reconnue, l'absence d'acompte excessif, un contrat écrit détaillé et des références vérifiables dans votre canton." },
      { question: 'Les installateurs locaux sont-ils plus sûrs que les prestataires nationaux?', answer: "En règle générale, oui. Les petits prestataires locaux avec une présence de longue date ont souvent un risque d'insolvabilité plus faible que les prestataires nationaux à croissance rapide. De plus, ils réagissent plus rapidement en cas de problèmes." },
      { question: "Que dois-je conserver après l'installation?", answer: "Facture avec numéros de série de tous les composants, contrat d'entreprise, tous les certificats de garantie (panneaux, onduleur, stockage), protocole de mise en service, confirmation SRI et inscription auprès du gestionnaire de réseau. Ces documents sont votre bouclier en cas de sinistre." },
    ],
    ctaHeading: 'Uniquement des installateurs locaux vérifiés — avec PvPro.ch',
    ctaText: "PvPro.ch ne s'occupe qu'avec des prestataires locaux certifiés avec une expérience prouvée dans votre canton. Aucun centre d'appels national, aucune revente à des sous-traitants. Obtenez gratuitement jusqu'à 3 devis.",
    ctaButton: 'Demander un devis gratuit',
    formUrl: '/fr/demande',
    relatedSlugs: ['besten-solarinstallateur-schweiz-finden', 'batteriespeicher-brandgefahr-sicherheit-schweiz', 'lohnt-sich-solaranlage-schweiz-2026'],
    relatedPageLinks: [
      { label: 'Subventions & SRI', href: '/fr/subventions-solaires' },
      { label: 'Comparer les offres', href: '/fr/offre-solaire' },
      { label: 'Portail comparatif PV', href: '/fr/comparateur-photovoltaique' },
      { label: 'Solaire avec batterie', href: '/fr/solaire-avec-batterie' },
    ],
  },

  // ─── INSTALLATEUR KONKURS GARANTIE (EN) ──────────────────────────────────────
  {
    slug: 'solaranlage-installateur-konkurs-garantie-schweiz',
    locale: 'en',
    title: 'What happens to my solar system if the installer goes bankrupt?',
    metaDescription: 'Solar installer insolvent — what happens to the warranty and guarantee? Everything Swiss homeowners need to know to protect themselves. With checklist.',
    image: '/images/solaranlage-bauernhaus-alpen.webp',
    date: '3 May 2026',
    readMin: 10,
    tag: 'Guide',
    intro: 'The solar industry is growing rapidly — and as in any growth market, some companies fail. What happens to your solar system if the installer files for bankruptcy? Do you lose your warranty? Who takes care of repairs? And what can you do to protect yourself before it happens? This article answers all these questions — clearly, honestly and without panic. Because the good news is: an insolvency of the installer is not a catastrophic scenario — if you are prepared.',
    sections: [
      {
        heading: 'The crucial difference: statutory warranty vs. manufacturer guarantee',
        content: [
          'Before we explain what happens in the event of insolvency, we need to understand a crucial distinction — between the statutory warranty and the manufacturer guarantee. Most homeowners confuse these two terms, but they are legally completely different.',
          'Statutory warranty: required by law — no contract needed. Directed against the installer (seller of the system). In Switzerland: two years for movable parts, five years for permanently installed parts (e.g. roof structure). Covers defects that existed at the time of installation. In the event of installer insolvency: practically worthless — no contact person anymore.',
          'Manufacturer guarantee: voluntary promise by the manufacturer of the individual components — independent of the installer. In the event of installer insolvency: remains fully valid.',
          'The conclusion: if your installer goes bankrupt, you lose your statutory warranty claims — but your valuable manufacturer guarantees on panels, inverter and storage remain fully intact.',
        ],
        stats: [
          { value: `${factNumber(ECONOMIC_FACTS.performanceWarranty.percent)}% after ${factNumber(ECONOMIC_FACTS.performanceWarranty.afterYears)} years`, label: 'panel performance benchmark' },
          { value: 'Statutory warranty', label: 'vs. manufacturer guarantee — the crucial difference' },
          { value: 'Local firms', label: 'have a lower insolvency risk' },
        ],
      },
      {
        heading: 'What specifically happens in the event of installer insolvency?',
        content: [
          'Scenario 1 — System already fully installed and operational: This is the best scenario. The system is running, everything is complete. What you lose: your statutory warranty claims against the installer for installation defects, any maintenance contracts with the company, and the direct contact person. What remains: all manufacturer guarantees on panels, inverter and storage, the system continues to generate electricity, and the one-time payment (OTP) has already been applied for or paid out. Action: keep all documents carefully — invoices, warranty certificates, technical data sheets, serial numbers of all components.',
          'Scenario 2 — System half-finished: This is the most difficult scenario. The insolvency administrator decides whether the project is continued. In most cases, you need to engage a new installer to take over the project. Advance payments already made are at risk — you become a creditor. Action: register claims with the insolvency administrator immediately, contact a new local installer, and initiate a chargeback if you paid by credit card.',
          'Scenario 3 — Contract signed, construction not yet started: Advance payments are at risk. Act immediately: register a claim with the insolvency administrator, check if a credit card chargeback is possible, and check your household insurance for advance payment coverage.',
        ],
      },
      {
        heading: 'How long does insolvency proceedings take in Switzerland?',
        content: [
          'In a Swiss bankruptcy proceeding, you can register claims with the bankruptcy office and may receive a dividend depending on the process. Manufacturer guarantees remain separate from this process.',
        ],
        bullets: [
          'Register claims with the bankruptcy office immediately',
          'Clarify manufacturer guarantees directly with the manufacturers',
          'Find a new local installer for maintenance and repairs',
          'Carefully secure all documents and guarantee certificates',
        ],
      },
      {
        heading: 'What happens to the manufacturer guarantees?',
        content: [
          `This is the important question. The manufacturer performance benchmark is ${factNumber(ECONOMIC_FACTS.performanceWarranty.percent)}% after ${factNumber(ECONOMIC_FACTS.performanceWarranty.afterYears)} years and is directed against the panel manufacturer, not the installer. If a panel no longer meets its guaranteed output, contact the manufacturer directly.`,
          'Manufacturer guarantees on inverters: same logic — the guarantee exists between you and the manufacturer. Fronius, SMA, Huawei have their own service hotlines and service partners in Switzerland. What you need: serial number of the inverter, proof of purchase/invoice, and the warranty certificate from the manufacturer. With these documents, you can open a warranty claim directly with the manufacturer — without the installer.',
          'Warning with cheap no-name products: with unknown manufacturers without a Swiss office, enforcing the guarantee in the event of a claim becomes very difficult. This is another reason why PvPro.ch only arranges installations with components from established brand manufacturers.',
        ],
      },
      {
        heading: 'How to recognise an installer in financial difficulty?',
        content: [
          'There are warning signs you can spot before an insolvency:',
        ],
        bullets: [
          '🔴 Warning sign 1: The installer demands a very high advance payment long before construction begins',
          '🔴 Warning sign 2: Agreed delivery dates are repeatedly postponed without explanation',
          '🔴 Warning sign 3: The contact person suddenly becomes difficult to reach — emails go unanswered',
          '🔴 Warning sign 4: The company website is no longer accessible',
          '🔴 Warning sign 5: Materials are replaced by cheaper alternatives just before installation without consultation',
          '🔴 Warning sign 6: Other customers report similar problems in online reviews',
        ],
      },
      {
        heading: 'How to protect yourself preventively',
        content: [
          '1. Only engage certified local firms: small, local specialist companies with a long-standing local presence have a significantly lower insolvency risk than rapidly grown national providers. They know their customers personally and have a reputation to protect.',
          '2. Minimise advance payments: avoid excessive upfront payments and agree staged payments tied to verifiable project progress in writing.',
          '3. Everything in writing: insist on a detailed works contract with a precise list of components, warranties, deadlines and payment terms.',
          '4. Document manufacturer guarantees separately: request all warranty certificates directly from the installer at handover. Keep them separately.',
          '5. Prefer brand manufacturers: components from Fronius, SMA, BYD, Huawei have their own service networks in Switzerland — independent of the installer.',
          '6. Check references: ask for reference customers and call them. A reputable company has satisfied customers who are happy to provide information.',
        ],
      },
      {
        heading: 'Why local installers carry a lower risk',
        content: [
          "From our experience with over 1'000 arranged installations in Switzerland, we can say: large, nationally operating providers with lots of advertising do not automatically have the lowest insolvency risk. On the contrary — companies that grow fast also shrink fast.",
        ],
        bullets: [
          'Documented operating experience in the canton',
          'Know their customers personally',
          'Have a good reputation to lose — and nurture it',
          'Not dependent on national order volume',
          'React faster to problems — because they are nearby',
        ],
        highlight: 'PvPro.ch exclusively connects with verified local specialist firms — no national call-centre providers who resell orders to subcontractors.',
      },
      {
        heading: 'Checklist — What you must keep after installation',
        content: [
          'Print this list out and file everything in a folder:',
        ],
        bullets: [
          '✅ Invoice listing all components and serial numbers',
          '✅ Works contract with warranty and guarantee agreements',
          '✅ Guarantee certificates for panels (product and performance guarantee)',
          '✅ Guarantee certificate for inverter',
          '✅ Guarantee certificate for battery storage (if applicable)',
          '✅ Commissioning report with installer signature',
          '✅ OTP registration confirmation from Pronovo',
          '✅ Registration with the local grid operator',
          '✅ Technical data sheets for all main components',
          '✅ Photos of the system and cable routing (before cladding)',
        ],
      },
    ],
    faqs: [
      { question: 'What happens to my solar system warranty if the installer goes bankrupt?', answer: 'What you lose is the statutory warranty from the installer for installation defects.' },
      { question: 'Can I get my advance payment back if the installer goes bankrupt?', answer: 'You can register your claim with the bankruptcy office. Any repayment depends on the bankruptcy process. A chargeback may be possible if you paid by credit card.' },
      { question: 'Who repairs my solar system if the installer no longer exists?', answer: 'For repairs covered by the manufacturer guarantee, contact the manufacturer of the faulty component directly. For other maintenance work, engage another local specialist — PvPro.ch can help you with this.' },
      { question: 'How do I recognise a reputable installer?', answer: 'Look for local presence, recognised certification, no excessive advance payments, a detailed written works contract and verifiable references in your canton.' },
      { question: 'Are local installers safer than national providers?', answer: 'Generally yes. Small local specialist companies with a long-standing presence often have a lower insolvency risk than rapidly grown national providers. They also respond more quickly to problems and know the local conditions better.' },
      { question: 'What must I keep after installation?', answer: 'Invoice with serial numbers of all components, works contract, all guarantee certificates (panels, inverter, storage), commissioning report, OTP confirmation and registration with the grid operator. These documents are your shield in the event of a claim.' },
    ],
    ctaHeading: 'Only verified local installers — with PvPro.ch',
    ctaText: 'PvPro.ch exclusively connects with certified local specialist companies with proven experience in your canton. No national call centre, no resale to subcontractors. Get up to 3 quotes for free.',
    ctaButton: 'Request free quote',
    formUrl: '/en/request',
    relatedSlugs: ['besten-solarinstallateur-schweiz-finden', 'batteriespeicher-brandgefahr-sicherheit-schweiz', 'lohnt-sich-solaranlage-schweiz-2026'],
    relatedPageLinks: [
      { label: 'Subsidies & OTP', href: '/en/solar-subsidies' },
      { label: 'Compare quotes', href: '/en/solar-quote' },
      { label: 'PV comparison portal', href: '/en/solar-comparison' },
      { label: 'Solar with battery storage', href: '/en/solar-with-battery' },
    ],
  },

  // ─── INSTALLATEUR KONKURS GARANTIE (IT) ──────────────────────────────────────
  {
    slug: 'solaranlage-installateur-konkurs-garantie-schweiz',
    locale: 'it',
    title: 'Cosa succede al mio impianto solare se l\'installatore fallisce?',
    metaDescription: 'Installatore solare insolvente — cosa succede alla garanzia? Tutto quello che i proprietari svizzeri devono sapere per proteggersi. Con checklist.',
    image: '/images/solaranlage-bauernhaus-alpen.webp',
    date: '3 maggio 2026',
    readMin: 10,
    tag: 'Guida',
    intro: "Il settore solare è in rapida crescita — e come in ogni mercato in espansione, alcune aziende falliscono. Cosa succede al vostro impianto solare se l'installatore dichiara bancarotta? Perdete la garanzia? Chi si occupa delle riparazioni? E cosa potete fare per proteggervi prima che accada? Questo articolo risponde a tutte queste domande — chiaramente, onestamente e senza allarmismo. Perché la buona notizia è: l'insolvenza dell'installatore non è uno scenario catastrofico — se siete preparati.",
    sections: [
      {
        heading: 'La differenza fondamentale: garanzia legale vs. garanzia del produttore',
        content: [
          "Prima di spiegare cosa succede in caso di insolvenza, dobbiamo capire una distinzione fondamentale — quella tra la garanzia legale (garanzia per vizi) e la garanzia del produttore. La maggior parte dei proprietari confonde questi due termini, ma sono giuridicamente completamente diversi.",
          "Garanzia legale: obbligatoria per legge — nessun contratto necessario. Si esercita contro l'installatore (venditore dell'impianto). In Svizzera: 2 anni per le parti mobili, 5 anni per le parti fisse (es. struttura del tetto). Copre i difetti presenti al momento dell'installazione. In caso di insolvenza dell'installatore: praticamente priva di valore — nessun interlocutore.",
          `Garanzia del produttore: promessa volontaria del produttore dei singoli componenti, indipendente dall'installatore. Per i moduli, il valore di riferimento della garanzia di prestazione è ${factNumber(ECONOMIC_FACTS.performanceWarranty.percent)}% dopo ${factNumber(ECONOMIC_FACTS.performanceWarranty.afterYears)} anni. In caso di insolvenza dell'installatore rimane valida.`,
          "Conclusione: se il vostro installatore fallisce, perdete i diritti alla garanzia legale — ma le preziose garanzie del produttore su pannelli, inverter e sistema di accumulo rimangono completamente valide.",
        ],
        stats: [
          { value: `${factNumber(ECONOMIC_FACTS.performanceWarranty.percent)}% dopo ${factNumber(ECONOMIC_FACTS.performanceWarranty.afterYears)} anni`, label: 'valore di riferimento della garanzia di prestazione' },
          { value: 'Garanzia legale', label: 'vs. garanzia produttore — la differenza decisiva' },
          { value: 'Aziende locali', label: 'hanno un rischio di insolvenza più basso' },
        ],
      },
      {
        heading: "Cosa succede concretamente in caso di insolvenza dell'installatore?",
        content: [
          "Scenario 1 — Impianto già completamente installato e in funzione: È lo scenario migliore. L'impianto funziona, tutto è terminato. Cosa perdete: i diritti alla garanzia legale contro l'installatore per difetti di installazione, eventuali contratti di manutenzione e il vostro interlocutore diretto. Cosa rimane: tutte le garanzie del produttore su pannelli, inverter e sistema di accumulo, l'impianto continua a produrre corrente e il contributo unico (CUB) è già stato richiesto o versato. Azione: conservate con cura tutti i documenti — fatture, certificati di garanzia, schede tecniche, numeri di serie di tutti i componenti.",
          "Scenario 2 — Impianto a metà: È lo scenario più difficile. Il curatore fallimentare decide se il progetto viene continuato. Nella maggior parte dei casi dovete incaricare un nuovo installatore che subentri nel progetto. Gli acconti già versati sono a rischio — diventate creditori. Azione: registrate immediatamente i crediti presso il curatore, contattate un nuovo installatore locale e avviate un chargeback se avete pagato con carta di credito.",
          "Scenario 3 — Contratto firmato, lavori non ancora iniziati: Gli acconti sono a rischio. Agite immediatamente: registrate un credito presso il curatore, verificate la possibilità di un chargeback con carta di credito e verificate se la vostra assicurazione familiare copre la perdita dell'acconto.",
        ],
      },
      {
        heading: 'Quanto dura una procedura concorsuale in Svizzera?',
        content: [
          "In una procedura fallimentare svizzera potete registrare crediti presso l'ufficio fallimenti e potreste ricevere una quota in base all'esito della procedura. Le garanzie del produttore rimangono separate.",
        ],
        bullets: [
          "Registrare immediatamente i crediti presso l'ufficio fallimenti",
          'Chiarire le garanzie del produttore direttamente con i produttori',
          'Cercare un nuovo installatore locale per manutenzione e riparazioni',
          'Mettere al sicuro con cura tutti i documenti e certificati di garanzia',
        ],
      },
      {
        heading: 'Cosa succede alle garanzie dei produttori?',
        content: [
          "Questa è la domanda davvero importante — e la risposta è rassicurante. L'installatore non è rilevante.",
          "Garanzie del produttore sugli inverter: stessa logica — la garanzia esiste tra voi e il produttore. Fronius, SMA, Huawei hanno proprie hotline di assistenza e partner di assistenza in Svizzera. Di cosa avete bisogno: numero di serie dell'inverter, prova d'acquisto/fattura e il certificato di garanzia del produttore.",
          "Attenzione ai prodotti economici senza marchio: con produttori sconosciuti senza sede svizzera, far valere la garanzia in caso di sinistro diventa molto difficile. Questo è un ulteriore motivo per cui PvPro.ch si occupa solo di installazioni con componenti di produttori di marca affermati.",
        ],
      },
      {
        heading: "Come riconoscere un installatore in difficoltà finanziaria?",
        content: [
          "Esistono segnali di allarme che potete rilevare prima di un'insolvenza:",
        ],
        bullets: [
          "🔴 Segnale 1: L'installatore richiede un acconto molto elevato molto prima dell'inizio dei lavori",
          '🔴 Segnale 2: Le date di consegna concordate vengono ripetutamente posticipate senza spiegazione',
          '🔴 Segnale 3: L\'interlocutore diventa improvvisamente difficile da raggiungere — le e-mail rimangono senza risposta',
          "🔴 Segnale 4: Il sito web dell'azienda non è più accessibile",
          '🔴 Segnale 5: Il materiale viene sostituito poco prima dell\'installazione con alternative più economiche senza consultazione',
          "🔴 Segnale 6: Altri clienti segnalano problemi simili nelle recensioni online",
        ],
      },
      {
        heading: 'Come proteggersi in modo preventivo?',
        content: [
          "1. Incaricare solo aziende locali certificate: le piccole aziende specializzate locali con una presenza pluriennale nel Cantone hanno un rischio di insolvenza notevolmente più basso rispetto ai fornitori nazionali a crescita rapida. Conoscono i loro clienti personalmente e hanno una reputazione da preservare.",
          "2. Minimizzare gli acconti: evitate anticipi eccessivi e concordate per iscritto pagamenti scaglionati legati all'avanzamento verificabile del progetto.",
          "3. Tutto per iscritto: insistete su un contratto d'appalto dettagliato con un elenco preciso dei componenti, delle garanzie, dei termini e delle condizioni di pagamento.",
          "4. Documentare le garanzie del produttore separatamente: richiedete alla consegna tutti i certificati di garanzia direttamente dall'installatore. Conservateli separatamente.",
          "5. Preferire i produttori di marca: i componenti di Fronius, SMA, BYD, Huawei hanno proprie reti di assistenza in Svizzera — indipendentemente dall'installatore.",
          "6. Verificare i riferimenti: chiedete clienti di riferimento e chiamateli. Un'azienda seria ha clienti soddisfatti che forniscono volentieri informazioni.",
        ],
      },
      {
        heading: 'Perché le aziende installatrici locali hanno un rischio più basso',
        content: [
          "Dalla nostra esperienza con oltre 1'000 impianti installati in Svizzera possiamo affermare: i grandi fornitori nazionali con molta pubblicità non hanno automaticamente il rischio di insolvenza più basso. Al contrario — le aziende che crescono velocemente calano anche velocemente.",
        ],
        bullets: [
          'Esperienza operativa documentata nel Cantone',
          'Conoscono i loro clienti personalmente',
          'Hanno una buona reputazione da preservare — e la curano',
          'Non dipendono dal volume di ordini nazionale',
          'Reagiscono più rapidamente ai problemi — perché sono vicini',
        ],
        highlight: "PvPro.ch si avvale esclusivamente di aziende specializzate locali verificate — nessun fornitore nazionale che rivende gli incarichi a subappaltatori.",
      },
      {
        heading: 'Checklist — Cosa dovete conservare dopo l\'installazione',
        content: [
          'Stampate questo elenco e archiviate tutto in una cartella:',
        ],
        bullets: [
          '✅ Fattura con elenco di tutti i componenti e numeri di serie',
          '✅ Contratto d\'appalto con accordi di garanzia legale e del produttore',
          '✅ Certificati di garanzia per i pannelli (garanzia prodotto e di prestazione)',
          '✅ Certificato di garanzia per l\'inverter',
          '✅ Certificato di garanzia per il sistema di accumulo (se applicabile)',
          '✅ Protocollo di messa in servizio con firma dell\'installatore',
          '✅ Conferma di registrazione CUB di Pronovo',
          '✅ Registrazione presso il gestore di rete locale',
          '✅ Schede tecniche di tutti i componenti principali',
          '✅ Fotografie dell\'impianto e del percorso dei cavi (prima della copertura)',
        ],
      },
    ],
    faqs: [
      { question: "Cosa succede alla garanzia del mio impianto solare se l'installatore fallisce?", answer: "Quello che perdete è la garanzia legale dell'installatore per i difetti di installazione." },
      { question: "Posso recuperare l'acconto se l'installatore fallisce?", answer: "Potete registrare il credito presso l'ufficio fallimenti. L'eventuale rimborso dipende dalla procedura. In caso di pagamento con carta può essere possibile un chargeback." },
      { question: "Chi ripara il mio impianto solare se l'installatore non esiste più?", answer: "Per le riparazioni coperte dalla garanzia del produttore, rivolgetevi direttamente al produttore del componente difettoso. Per altri lavori di manutenzione, incaricate un altro specialista locale — PvPro.ch può aiutarvi." },
      { question: 'Come riconosco un installatore serio?', answer: "Verificate la presenza locale, una certificazione riconosciuta, l'assenza di anticipi eccessivi, un contratto scritto dettagliato e referenze verificabili nel vostro Cantone." },
      { question: 'Le aziende installatrici locali sono più sicure dei fornitori nazionali?', answer: "In linea di principio sì. Le piccole aziende specializzate locali con una presenza pluriennale hanno spesso un rischio di insolvenza più basso rispetto ai fornitori nazionali a crescita rapida. Reagiscono anche più rapidamente ai problemi." },
      { question: "Cosa devo conservare dopo l'installazione?", answer: "Fattura con numeri di serie di tutti i componenti, contratto d'appalto, tutti i certificati di garanzia (pannelli, inverter, accumulo), protocollo di messa in servizio, conferma CUB e registrazione presso il gestore di rete. Questi documenti sono il vostro scudo in caso di sinistro." },
    ],
    ctaHeading: 'Solo installatori locali verificati — con PvPro.ch',
    ctaText: "PvPro.ch si avvale esclusivamente di aziende specializzate locali certificate con comprovata esperienza nel vostro Cantone. Nessun call center nazionale, nessuna rivendita a subappaltatori. Richiedete gratuitamente fino a 3 preventivi.",
    ctaButton: 'Richiedere preventivo gratuito',
    formUrl: '/it/richiesta',
    relatedSlugs: ['besten-solarinstallateur-schweiz-finden', 'batteriespeicher-brandgefahr-sicherheit-schweiz', 'lohnt-sich-solaranlage-schweiz-2026'],
    relatedPageLinks: [
      { label: 'Incentivi & CUB', href: '/it/incentivi-solari' },
      { label: 'Confronta preventivi', href: '/it/preventivo-solare' },
      { label: 'Portale comparativo FV', href: '/it/portale-confronto-fotovoltaico' },
      { label: 'Solare con accumulo', href: '/it/solare-con-accumulo' },
    ],
  },


  // ─── VERSICHERUNG (DE) ───────────────────────────────────────────────────────
  {
    slug: 'solaranlage-versicherung-schweiz',
    locale: 'de',
    title: 'Solaranlage und Hausversicherung Schweiz — was ist gedeckt und was nicht?',
    metaDescription: 'Solaranlage versichern in der Schweiz: Was deckt die kantonale Gebäudeversicherung? Was nicht? Hagel, Diebstahl, Kurzschluss — alles erklärt mit kantonalen Unterschieden.',
    image: '/images/solaranlage-chalet-alpen-sommer.webp',
    date: '10. Mai 2026',
    readMin: 10,
    tag: 'Ratgeber',
    intro: "Was passiert, wenn Hagel die Module zerstört? Was wenn ein Kurzschluss den Wechselrichter beschädigt? Was wenn jemand die Anlage stiehlt? Viele Schweizer Hausbesitzer gehen davon aus, dass ihre Gebäudeversicherung alles deckt — und erleben im Schadensfall eine böse Überraschung. Dieser Artikel erklärt klar, was die kantonale Gebäudeversicherung abdeckt, was nicht, und wie Sie Ihre Investition vollständig schützen.",
    sections: [
      {
        heading: 'Das Schweizer Versicherungssystem für Gebäude — kurz erklärt',
        content: [
          'In der Schweiz gibt es zwei Versicherungssysteme für Gebäude:',
          'System 1 — Kantone mit obligatorischer KGV (19 Kantone): Zürich (GVZ), Bern (GVB), Aargau, Luzern, St. Gallen und weitere haben eine obligatorische staatliche Gebäudeversicherung. Jeder Hausbesitzer ist automatisch versichert. Die Solaranlage ist als Gebäudebestandteil mitversichert — sofern gemeldet.',
          'System 2 — GUSTAVO-Kantone (7 Kantone ohne obligatorische KGV): Genf, Uri, Schwyz, Tessin, Appenzell Innerrhoden, Obwalden und Wallis. Hausbesitzer müssen selbst eine private Gebäudeversicherung abschliessen. Der Schutz hängt von der gewählten Police ab.',
          'Fazit: In beiden Systemen gilt — melden Sie Ihre Solaranlage, und prüfen Sie genau, welche Risiken abgedeckt sind.',
        ],
        stats: [
          { value: 'Feuer & Elementar', label: 'KGV deckt — aber nicht alles' },
          { value: 'Diebstahl, Kurzschluss', label: 'KGV deckt NICHT' },
        ],
      },
      {
        heading: 'Was deckt die kantonale Gebäudeversicherung (KGV) für Solaranlagen?',
        content: [
          'Ihre Solaranlage ist in den meisten Kantonen automatisch als Gebäudebestandteil in der KGV mitversichert — sofern Sie die Installation gemeldet haben.',
          'Was die KGV deckt:',
          'Der grosse Haken: Die KGV deckt nur die Grundsubstanz. Was Sie oft NICHT erhalten: Gerüstkosten für die Reparatur, Ertragsausfall während der Reparaturzeit, Mehrkosten durch behördliche Auflagen, Entsorgungskosten beschädigter Module.',
        ],
        bullets: [
          '✅ Feuerschäden — Brand, Blitzschlag, Explosion',
          '✅ Elementarschäden — Hagel, Sturm, Überschwemmung, Schneedruck, Erdrutsch',
          '✅ Wasserschäden durch Rohrbruch (in manchen Kantonen)',
        ],
      },
      {
        heading: 'Was die KGV NICHT deckt — die gefährlichen Lücken',
        content: [
          'Hier erleben viele Hausbesitzer eine böse Überraschung. Die häufigsten Schadenursachen bei Solaranlagen sind Hagel, Überspannung und technische Defekte. Hagel ist gedeckt — Überspannung und Defekte sind es nicht:',
        ],
        bullets: [
          '❌ Diebstahl — Solarmodule vom Dach gestohlen? KGV zahlt nicht.',
          '❌ Vandalismus — absichtliche Beschädigung? KGV zahlt nicht.',
          '❌ Kurzschluss — technischer Defekt zerstört den Wechselrichter? KGV zahlt nicht.',
          '❌ Überspannung — Blitz trifft das Stromnetz, Elektronik wird zerstört? KGV zahlt nicht.',
          '❌ Tierbisse — Marder oder Vögel beschädigen die Kabel? KGV zahlt nicht.',
          '❌ Bedienungsfehler — falsche Einstellung beschädigt die Anlage? KGV zahlt nicht.',
          '❌ Ertragsausfall — Anlage steht still wegen Reparatur? KGV zahlt nicht.',
          '❌ Konstruktionsfehler — Fabrikationsfehler am Modul? KGV zahlt nicht.',
        ],
      },
      {
        heading: 'Die GUSTAVO-Kantone — Sonderfall Tessin, Wallis, Genf',
        content: [
          'In den GUSTAVO-Kantonen (GE, UR, SZ, TI, AI, OW, VS) gibt es keine obligatorische staatliche Gebäudeversicherung. Das bedeutet: Hausbesitzer müssen selbst eine private Gebäudeversicherung abschliessen. Feuer und Elementarschäden sind nicht automatisch gedeckt. Der Versicherungsumfang hängt vollständig von der gewählten Police ab.',
          'Für Solaranlagenbesitzer in diesen Kantonen: Prüfen Sie Ihre Police genau und stellen Sie sicher, dass die Solaranlage explizit mitversichert ist — inkl. Feuer, Elementarschäden und idealerweise Zusatzrisiken.',
        ],
      },
      {
        heading: 'Die Haustechnikversicherung — so schliessen Sie die Lücken',
        content: [
          "Die Haustechnikversicherung (auch Solaranlagenversicherung oder Photovoltaikversicherung) deckt alle Risiken, die die KGV nicht übernimmt.",
          'Was eine gute Haustechnikversicherung abdeckt:',
        ],
        bullets: [
          '✅ Kurzschluss und Überspannungsschäden',
          '✅ Diebstahl — Module, Wechselrichter, Speicher',
          '✅ Vandalismus',
          '✅ Tierbisse — Marder, Vögel',
          '✅ Bedienungsfehler',
          '✅ Konstruktions- und Fabrikationsfehler',
          '✅ Ertragsausfall während der Reparaturzeit',
          '✅ Gerüstkosten für Reparaturen auf dem Dach',
          '✅ Mehrkosten durch behördliche Auflagen',
          '✅ Batteriespeicher (sofern mitversichert)',
        ],
      },
      {
        heading: 'Welche Versicherer bieten Solarversicherungen in der Schweiz an?',
        content: [
          'Diese Anbieter sind bekannt für Solaranlagenversicherungen in der Schweiz:',
          'GVB Solar (Bern): Spezialversicherung PV, auf Kantonsversicherung aufbauend. Helvetia: Photovoltaikversicherung inkl. Ertragsausfall. Zurich: Erneuerbare Energien inkl. Wärmepumpe. Mobiliar: Haustechnikversicherung, kombinierbar mit Gebäude. AXA: Gebäudeversicherung+ mit Erweiterungsoption. Allianz: Solarversicherung mit anerkannten Policen.',
          'Empfehlung: Fragen Sie zuerst bei Ihrer bestehenden Gebäudeversicherung nach — oft können Sie die Solaranlage einfach als Zusatzoption einschliessen.',
        ],
      },
      {
        heading: 'Muss ich die Solaranlage bei der Versicherung melden?',
        content: [
          'Ja — und das ist sehr wichtig. In Kantonen mit KGV gilt die Solaranlage als Gebäudebestandteil. Damit sie gedeckt ist, müssen Sie die Installation melden und den Gebäudewert anpassen. Wenn Sie die Anlage nicht melden, besteht möglicherweise kein Versicherungsschutz — und die Versicherung kann im Schadensfall die Leistung kürzen.',
          'Wann melden: Idealerweise direkt nach der Installation, spätestens innerhalb von 30 Tagen. In der Praxis übernimmt oft der Installateur diese Meldung — fragen Sie ihn explizit danach.',
        ],
      },
      {
        heading: 'Batteriespeicher — eigener Versicherungsstatus',
        content: [
          "KGV: Der Speicher im Keller ist in den meisten Kantonen als Gebäudebestandteil mitversichert — aber nur gegen Feuer und Elementarschäden. Nicht gedeckt: Technische Defekte, Überspannung, Kurzschluss.",
          'Haustechnikversicherung: Die meisten Policen decken den Speicher mit ab — prüfen Sie aber explizit, ob er in den Versicherungsbedingungen erwähnt wird. Manchmal muss er separat angegeben werden.',
        ],
      },
      {
        heading: 'Hagel — der häufigste Schadensfall in der Schweiz',
        content: [
          'Die Schweiz hat eines der höchsten Hagelrisiken Europas — besonders im Kanton Bern, in der Nordwestschweiz und im Mittelland. Hagelschäden sind durch die KGV gedeckt — Gerüstkosten und Ertragsausfall jedoch nicht.',
          'Hagelschutzstandards bei Modulen: Mindeststandard hält 25-mm-Hagel stand. Empfohlen für die Schweiz: 30-mm-Zertifizierung (IEC 61215). Beste Klasse: 40-mm-Hagel. In hagelgefährdeten Kantonen: Fragen Sie bei der Offerte explizit nach der Hagelschutzklasse.',
        ],
      },
      {
        heading: 'Checkliste — Versicherungsschutz für Ihre Solaranlage',
        content: [
          'Gehen Sie diese Punkte nach der Installation ab:',
        ],
        bullets: [
          '✅ Installation bei der kantonalen Gebäudeversicherung gemeldet?',
          '✅ Gebäudewert entsprechend der Anlage angepasst?',
          '✅ Haustechnikversicherung für Kurzschluss, Diebstahl, Tierbisse abgeschlossen?',
          '✅ Ertragsausfall in der Zusatzversicherung enthalten?',
          '✅ Batteriespeicher explizit mitversichert?',
          '✅ Hagelschutzklasse der Module bekannt?',
          '✅ In GUSTAVO-Kanton: private Gebäudeversicherung mit PV-Deckung?',
        ],
      },
    ],
    faqs: [
      { question: 'Ist meine Solaranlage automatisch durch die Gebäudeversicherung gedeckt?', answer: 'In Kantonen mit obligatorischer KGV ja — aber nur für Feuer- und Elementarschäden, und nur wenn Sie die Installation gemeldet haben. Diebstahl, Kurzschluss und technische Defekte sind nicht gedeckt. Eine Zusatzversicherung wird empfohlen.' },
      { question: 'Was passiert wenn Hagel meine Solarmodule beschädigt?', answer: 'Hagelschäden sind durch die KGV gedeckt — vorausgesetzt, Sie haben die Anlage gemeldet. Gerüstkosten und Ertragsausfall während der Reparaturzeit sind jedoch oft nicht inbegriffen und erfordern eine Zusatzversicherung.' },
      { question: 'Ist Diebstahl von Solarmodulen versichert?', answer: 'Nicht durch die KGV. Diebstahl ist nur durch eine Zusatzversicherung gedeckt. Sprechen Sie Ihren Versicherer an.' },
      { question: 'Muss ich die Solaranlage der Versicherung melden?', answer: 'Ja. Melden Sie die Installation idealerweise innerhalb von 30 Tagen nach Abschluss. Fragen Sie Ihren Installateur, ob er diese Meldung für Sie übernimmt.' },
      { question: 'Ich wohne im Tessin — wie funktioniert die Versicherung?', answer: 'Der Tessin ist ein GUSTAVO-Kanton ohne obligatorische Gebäudeversicherung. Sie brauchen eine private Gebäudeversicherung, die explizit die Solaranlage mitversichert — inkl. Feuer, Elementar und idealerweise Zusatzrisiken.' },
      { question: 'Ist der Batteriespeicher mitversichert?', answer: 'Durch die KGV gegen Feuer und Elementar — ja. Für technische Defekte und Kurzschluss brauchen Sie eine Zusatzversicherung. Prüfen Sie, ob der Speicher in den Versicherungsbedingungen explizit erwähnt wird.' },
    ],
    ctaHeading: 'Jetzt Offerte einholen — inkl. Versicherungsberatung',
    ctaText: 'Unsere zertifizierten Installateure beraten Sie auch zu Versicherungsfragen und melden die Installation korrekt bei der Gebäudeversicherung. Kostenlos bis zu 3 Offerten vergleichen.',
    ctaButton: 'Kostenlose Offerte anfordern',
    formUrl: '/anfrage',
    relatedSlugs: ['batteriespeicher-brandgefahr-sicherheit-schweiz', 'solaranlage-installateur-konkurs-garantie-schweiz', 'lohnt-sich-solaranlage-schweiz-2026'],
    relatedPageLinks: [
      { label: 'Förderungen & EIV', href: '/foerderungen' },
      { label: 'Solaranlage Kosten Schweiz', href: '/solaranlage-kosten' },
      { label: 'Solaranlage mit Batteriespeicher', href: '/solaranlage-mit-speicher' },
      { label: 'Installateure vergleichen', href: '/vergleichsportal-photovoltaik-schweiz' },
    ],
  },

  // ─── VERSICHERUNG (FR) ───────────────────────────────────────────────────────
  {
    slug: 'solaranlage-versicherung-schweiz',
    locale: 'fr',
    title: "Installation solaire et assurance en Suisse — ce qui est couvert et ce qui ne l'est pas",
    metaDescription: "Assurer votre installation solaire en Suisse: Que couvre l'assurance cantonale des bâtiments? Que ne couvre-t-elle pas? Grêle, vol, court-circuit — tout expliqué avec les différences cantonales.",
    image: '/images/solaranlage-chalet-alpen-sommer.webp',
    date: '10 mai 2026',
    readMin: 10,
    tag: 'Guide',
    intro: "Que se passe-t-il si la grêle détruit les panneaux? Et si un court-circuit endommage l'onduleur? Et si quelqu'un vole l'installation? De nombreux propriétaires suisses supposent que leur assurance bâtiment couvre tout — et ont la mauvaise surprise lors d'un sinistre. Cet article explique clairement ce que l'assurance cantonale des bâtiments (ACB) couvre, ce qu'elle ne couvre pas, et comment protéger intégralement votre investissement.",
    sections: [
      {
        heading: "Le système d'assurance bâtiment en Suisse — en bref",
        content: [
          "La Suisse dispose de deux systèmes d'assurance pour les bâtiments:",
          "Système 1 — ACB obligatoire (19 cantons): Zurich (GVZ), Berne (GVB), Argovie, Lucerne, Saint-Gall etc. ont une assurance bâtiment étatique obligatoire. Chaque propriétaire est automatiquement assuré. L'installation solaire est couverte en tant que partie du bâtiment — si déclarée.",
          "Système 2 — Cantons GUSTAVO (7 cantons sans ACB obligatoire): Genève, Uri, Schwytz, Tessin, Appenzell Rhodes-Intérieures, Obwald, Valais. Les propriétaires doivent souscrire une assurance privée. La couverture dépend de la police choisie.",
          "Conclusion: Dans les deux systèmes — déclarez votre installation et vérifiez ce qui est couvert.",
        ],
        stats: [
          { value: 'Feu & éléments', label: "ACB couvre — mais pas tout" },
          { value: 'Vol, court-circuit', label: "ACB ne couvre PAS" },
        ],
      },
      {
        heading: "Ce que l'ACB couvre pour les installations solaires",
        content: [
          "Bonne nouvelle: Votre installation solaire est dans la plupart des cantons automatiquement couverte comme partie du bâtiment — à condition de l'avoir déclarée.",
          "L'ACB couvre:",
          "Le grand inconvénient: L'ACB ne couvre que la substance de base. Ce que vous n'obtenez souvent PAS: frais d'échafaudage, perte de revenus pendant la réparation, frais administratifs supplémentaires, frais d'élimination des modules.",
        ],
        bullets: [
          '✅ Dommages incendie — feu, foudre, explosion',
          '✅ Dommages élémentaires — grêle, tempête, inondation, poids neige, glissement',
          '✅ Dommages eau par rupture de canalisation (certains cantons)',
        ],
      },
      {
        heading: "Ce que l'ACB ne couvre PAS — les lacunes dangereuses",
        content: [
          "C'est le cœur de cet article. Les causes les plus fréquentes de sinistres: grêle, surtension, défauts techniques. La grêle est couverte — la surtension et les défauts ne le sont pas:",
        ],
        bullets: [
          "❌ Vol — panneaux volés sur le toit? L'ACB ne paie pas.",
          "❌ Vandalisme — dommages intentionnels? L'ACB ne paie pas.",
          "❌ Court-circuit — défaut technique détruit l'onduleur? L'ACB ne paie pas.",
          "❌ Surtension — foudre sur le réseau, électronique détruite? L'ACB ne paie pas.",
          "❌ Morsures d'animaux — martres ou oiseaux endommagent les câbles? L'ACB ne paie pas.",
          "❌ Erreur de manipulation — mauvais réglage endommage l'installation? L'ACB ne paie pas.",
          "❌ Perte de revenus — installation à l'arrêt pour réparation? L'ACB ne paie pas.",
          "❌ Défaut de fabrication — défaut d'usine sur le module? L'ACB ne paie pas.",
        ],
      },
      {
        heading: "Les cantons GUSTAVO — cas particulier Tessin, Valais, Genève",
        content: [
          "Dans les cantons GUSTAVO (GE, UR, SZ, TI, AI, OW, VS), il n'y a pas d'assurance bâtiment étatique obligatoire: les propriétaires doivent souscrire une assurance privée, la couverture feu et éléments n'est pas automatique.",
          "Pour les propriétaires solaires dans ces cantons: Vérifiez votre police et assurez-vous que l'installation solaire est explicitement couverte.",
        ],
      },
      {
        heading: "L'assurance techniques du bâtiment — pour combler les lacunes",
        content: [
          "L'assurance techniques du bâtiment (aussi appelée assurance photovoltaïque) couvre tous les risques non pris en charge par l'ACB.",
          "Ce qu'elle couvre:",
        ],
        bullets: [
          '✅ Dommages court-circuit et surtension',
          '✅ Vol — panneaux, onduleur, stockage',
          '✅ Vandalisme',
          "✅ Morsures d'animaux — martres, oiseaux",
          '✅ Erreur de manipulation',
          '✅ Défauts de construction et de fabrication',
          '✅ Perte de revenus pendant la réparation',
          "✅ Frais d'échafaudage pour réparations sur le toit",
          '✅ Frais supplémentaires prescrits par les autorités',
          '✅ Système de stockage batteries (si couvert)',
        ],
      },
      {
        heading: "Quels assureurs proposent des assurances solaires en Suisse?",
        content: [
          "Prestataires reconnus pour assurances installations solaires en Suisse:",
          "GVB Solar (Berne): Assurance spéciale PV, sur base de l'assurance cantonale. Helvetia: Assurance photovoltaïque incl. perte de revenus. Zurich: Énergies renouvelables incl. pompe à chaleur. Mobiliar: Techniques du bâtiment, combinable avec bâtiment. AXA: Assurance bâtiment+ avec option d'extension. Allianz: Assurance solaire reconnue.",
          "Recommandation: Renseignez-vous d'abord auprès de votre assurance bâtiment existante — souvent vous pouvez ajouter l'installation comme option.",
        ],
      },
      {
        heading: "Dois-je déclarer l'installation solaire à mon assurance?",
        content: [
          "Oui — c'est très important. Dans les cantons avec ACB, l'installation est considérée comme partie du bâtiment. Déclarez-la et adaptez la valeur assurée. Sans déclaration, il peut n'y avoir aucune couverture en cas de sinistre.",
          "Quand déclarer: Idéalement dans les 30 jours après l'installation. L'installateur effectue souvent cette démarche — demandez-lui explicitement.",
        ],
      },
      {
        heading: "Système de stockage batteries — statut d'assurance propre",
        content: [
          "Non couvert: défauts techniques, surtension, court-circuit.",
          "Assurance complémentaire: La plupart des polices couvrent aussi le stockage — mais vérifiez-le explicitement dans les conditions. Parfois il doit être indiqué séparément.",
        ],
      },
      {
        heading: "Grêle — le sinistre le plus fréquent en Suisse",
        content: [
          "La Suisse présente l'un des risques de grêle les plus élevés d'Europe — surtout dans le canton de Berne, en Suisse du Nord-Ouest et dans le Plateau. Les dommages grêle sont couverts par l'ACB — mais pas les frais d'échafaudage et la perte de revenus.",
          "Standards de protection: Minimum 25 mm de grêle (IEC standard). Recommandé pour la Suisse: certification 30 mm. Meilleure classe: résistance 40 mm. Dans les zones à risque: demandez la classe de protection lors du devis.",
        ],
      },
      {
        heading: "Checklist — protection d'assurance pour votre installation solaire",
        content: [
          "Vérifiez ces points après l'installation:",
        ],
        bullets: [
          "✅ Installation déclarée à l'ACB?",
          "✅ Valeur du bâtiment adaptée?",
          "✅ Assurance techniques du bâtiment souscrite (court-circuit, vol, animaux)?",
          "✅ Perte de revenus incluse dans l'assurance complémentaire?",
          "✅ Système de stockage explicitement couvert?",
          "✅ Classe de protection anti-grêle des modules connue?",
          "✅ Canton GUSTAVO: assurance privée avec couverture PV?",
        ],
      },
    ],
    faqs: [
      { question: "Mon installation solaire est-elle automatiquement couverte par l'assurance bâtiment?", answer: "Dans les cantons avec ACB obligatoire oui — mais uniquement pour feu et éléments, et seulement si vous avez déclaré l'installation. Vol, court-circuit et défauts techniques ne sont pas couverts. Une assurance complémentaire est recommandée." },
      { question: "Que se passe-t-il si la grêle endommage mes panneaux?", answer: "Les dommages grêle sont couverts par l'ACB — à condition d'avoir déclaré l'installation. Les frais d'échafaudage et la perte de revenus ne sont pas inclus et nécessitent une assurance complémentaire." },
      { question: "Le vol de panneaux solaires est-il assuré?", answer: "Pas par l'ACB. Le vol n'est couvert que par une assurance complémentaire privée." },
      { question: "Dois-je déclarer l'installation à mon assurance?", answer: "Oui. Déclarez l'installation idéalement dans les 30 jours après la fin des travaux. Votre installateur peut souvent le faire pour vous — demandez-lui." },
      { question: "J'habite au Tessin — comment fonctionne l'assurance?", answer: "Le Tessin est un canton GUSTAVO sans assurance bâtiment obligatoire. Vous avez besoin d'une assurance privée couvrant explicitement l'installation solaire — feu, éléments et idéalement risques supplémentaires." },
      { question: "Le système de stockage batteries est-il couvert?", answer: "Par l'ACB contre feu et éléments — oui. Pour défauts techniques et court-circuit, vous avez besoin d'une assurance complémentaire. Vérifiez que le stockage est explicitement mentionné dans les conditions." },
    ],
    ctaHeading: "Obtenir un devis maintenant — incl. conseils en assurance",
    ctaText: "Nos installateurs certifiés vous conseillent sur les questions d'assurance et déclarent l'installation correctement. Comparez gratuitement jusqu'à 3 devis.",
    ctaButton: 'Demander un devis gratuit',
    formUrl: '/fr/demande',
    relatedSlugs: ['batteriespeicher-brandgefahr-sicherheit-schweiz', 'solaranlage-installateur-konkurs-garantie-schweiz', 'lohnt-sich-solaranlage-schweiz-2026'],
    relatedPageLinks: [
      { label: 'Subventions & SRI', href: '/fr/subventions-solaires' },
      { label: "Coûts installation solaire", href: '/fr/cout-installation-solaire' },
      { label: 'Solaire avec batterie', href: '/fr/solaire-avec-batterie' },
      { label: 'Comparer les installateurs', href: '/fr/comparateur-photovoltaique' },
    ],
  },

  // ─── VERSICHERUNG (EN) ───────────────────────────────────────────────────────
  {
    slug: 'solaranlage-versicherung-schweiz',
    locale: 'en',
    title: 'Solar panel insurance in Switzerland — what is covered and what is not?',
    metaDescription: 'Insuring your solar system in Switzerland: What does the cantonal building insurance cover? What not? Hail, theft, short circuit — all explained with cantonal differences.',
    image: '/images/solaranlage-chalet-alpen-sommer.webp',
    date: '10 May 2026',
    readMin: 10,
    tag: 'Guide',
    intro: "What happens if hail destroys the panels? What if a short circuit damages the inverter? What if someone steals the system? Many Swiss homeowners assume their building insurance covers everything — and get an unpleasant surprise when making a claim. This article clearly explains what the cantonal building insurance (CBI) covers, what it does not, and how to fully protect your investment.",
    sections: [
      {
        heading: "Switzerland's building insurance system — briefly explained",
        content: [
          "Switzerland has two building insurance systems:",
          "System 1 — Mandatory CBI (19 cantons): Zurich (GVZ), Berne (GVB), Aargau, Lucerne, St. Gallen and others have mandatory state building insurance. Every homeowner is automatically covered. The solar system is covered as part of the building — if declared.",
          "System 2 — GUSTAVO cantons (7 cantons without mandatory CBI): Geneva, Uri, Schwyz, Ticino, Appenzell Innerrhoden, Obwalden, Valais. Homeowners must take out private building insurance. Coverage depends on the policy chosen.",
          "Conclusion: In both systems — declare your solar installation and check exactly what risks are covered.",
        ],
        stats: [
          { value: 'Fire & elements', label: 'CBI covers — but not everything' },
          { value: 'Theft, short circuit', label: 'CBI does NOT cover' },
        ],
      },
      {
        heading: 'What does cantonal building insurance cover for solar systems?',
        content: [
          "Your solar system is in most cantons automatically covered as part of the building — provided you have declared the installation.",
          "What the CBI covers:",
          "The big catch: The CBI only covers the basic structure. What you often do NOT receive: scaffolding costs for repairs, lost revenue during repair time, additional costs from regulatory requirements, disposal costs for damaged modules.",
        ],
        bullets: [
          '✅ Fire damage — fire, lightning strike, explosion',
          '✅ Natural hazard damage — hail, storm, flooding, snow load, landslide',
          '✅ Water damage from pipe bursts (in some cantons)',
        ],
      },
      {
        heading: 'What the CBI does NOT cover — the dangerous gaps',
        content: [
          "This is the core of this article. The most common causes of claims for solar systems are hail, overvoltage and technical defects. Hail is covered — overvoltage and defects are not:",
        ],
        bullets: [
          '❌ Theft — solar panels stolen from the roof? CBI does not pay.',
          '❌ Vandalism — intentional damage? CBI does not pay.',
          '❌ Short circuit — technical defect destroys the inverter? CBI does not pay.',
          '❌ Overvoltage — lightning hits the grid, electronics destroyed? CBI does not pay.',
          '❌ Animal bites — martens or birds damage cables? CBI does not pay.',
          '❌ Operating errors — wrong settings damage the system? CBI does not pay.',
          '❌ Lost revenue — system out of service for repairs? CBI does not pay.',
          '❌ Manufacturing defects — factory fault in the module? CBI does not pay.',
        ],
      },
      {
        heading: 'GUSTAVO cantons — Ticino, Valais, Geneva special case',
        content: [
          "In the GUSTAVO cantons (GE, UR, SZ, TI, AI, OW, VS), there is no mandatory state building insurance. This means: homeowners must take out private building insurance, fire and natural hazard damage is not automatically covered.",
          "For solar system owners in these cantons: Check your policy carefully and ensure the solar installation is explicitly covered — including fire, natural hazards and ideally additional risks.",
        ],
      },
      {
        heading: 'Building services insurance — how to close the gaps',
        content: [
          "Building services insurance (also called solar system insurance or photovoltaic insurance) covers all risks not handled by the CBI.",
          "What a good building services insurance covers:",
        ],
        bullets: [
          '✅ Short circuit and overvoltage damage',
          '✅ Theft — panels, inverter, storage system',
          '✅ Vandalism',
          '✅ Animal bites — martens, birds',
          '✅ Operating errors',
          '✅ Construction and manufacturing defects',
          '✅ Lost revenue during repair time',
          '✅ Scaffolding costs for roof repairs',
          '✅ Additional costs from regulatory requirements',
          '✅ Battery storage system (if covered)',
        ],
      },
      {
        heading: 'Which insurers offer solar insurance in Switzerland?',
        content: [
          "Known providers for solar system insurance in Switzerland:",
          "GVB Solar (Berne canton): Special PV insurance, building on cantonal insurance. Helvetia: Photovoltaic insurance incl. lost revenue. Zurich: Renewable energy incl. heat pump. Mobiliar: Building services insurance, combinable with building. AXA: Building insurance+ with extension option. Allianz: Solar insurance with recognised policies.",
          "Recommendation: Ask your existing building insurer first — you can often simply add the solar system as an additional option without taking out a new policy.",
        ],
      },
      {
        heading: 'Do I need to register my solar system with my insurer?',
        content: [
          "Yes — this is very important. In cantons with CBI, the solar system counts as part of the building. To be covered, you must register the installation and adjust the building value. If you do not register, there may be no coverage for fire or natural hazard claims.",
          "When to register: Ideally immediately after installation, at the latest within 30 days. In practice, the installer often handles this — ask them explicitly.",
        ],
      },
      {
        heading: 'Battery storage — its own insurance status',
        content: [
          "CBI: The storage system in the cellar is covered in most cantons against fire and natural hazards. Not covered: technical defects, overvoltage, short circuit.",
          "Building services insurance: Most policies also cover the storage system — but check explicitly that it is mentioned in the insurance conditions. Sometimes it must be listed separately.",
        ],
      },
      {
        heading: 'Hail — the most common claim in Switzerland',
        content: [
          "Switzerland has one of the highest hail risks in Europe — particularly in the canton of Berne, north-west Switzerland and the Plateau. Hail damage is covered by the CBI — but scaffolding costs and lost revenue are not.",
          "Hail protection standards: Minimum standard withstands 25 mm hail. Recommended for Switzerland: 30 mm certification (IEC 61215). Best class: withstands 40 mm hail. In hail-prone areas: ask explicitly about the hail protection class when requesting quotes.",
        ],
      },
      {
        heading: 'Checklist — insurance protection for your solar system',
        content: [
          "Check these points after installation:",
        ],
        bullets: [
          '✅ Installation registered with cantonal building insurance?',
          '✅ Building value adjusted to account for the installation?',
          '✅ Building services insurance taken out (short circuit, theft, animal bites)?',
          '✅ Lost revenue included in additional insurance?',
          '✅ Battery storage system explicitly covered?',
          '✅ Hail protection class of the modules known?',
          '✅ In GUSTAVO canton: private building insurance with PV coverage?',
        ],
      },
    ],
    faqs: [
      { question: 'Is my solar system automatically covered by building insurance?', answer: 'In cantons with mandatory CBI yes — but only for fire and natural hazard damage, and only if you have registered the installation. Theft, short circuit and technical defects are not covered. Additional insurance is recommended.' },
      { question: 'What happens if hail damages my solar panels?', answer: "Hail damage is covered by the CBI — provided you have registered the installation. Scaffolding costs and lost revenue during repair time are often not included and require additional insurance." },
      { question: 'Is theft of solar panels covered?', answer: 'Not by the CBI. Theft is only covered by private additional insurance (building services or solar system insurance).' },
      { question: 'Do I need to register the solar system with my insurer?', answer: 'Yes. Register the installation ideally within 30 days of completion. Your installer can often handle this for you — ask them explicitly.' },
      { question: 'I live in Ticino — how does insurance work?', answer: 'Ticino is a GUSTAVO canton without mandatory building insurance. You need private building insurance that explicitly covers the solar installation — including fire, natural hazards and ideally additional risks.' },
      { question: 'Is the battery storage system covered?', answer: 'By the CBI against fire and natural hazards — yes. For technical defects and short circuit you need additional insurance. Check that the storage system is explicitly mentioned in the insurance conditions.' },
    ],
    ctaHeading: 'Get a quote now — incl. insurance advice',
    ctaText: 'Our certified installers also advise on insurance questions and correctly register the installation with building insurance. Get up to 3 quotes for free.',
    ctaButton: 'Request free quote',
    formUrl: '/en/request',
    relatedSlugs: ['batteriespeicher-brandgefahr-sicherheit-schweiz', 'solaranlage-installateur-konkurs-garantie-schweiz', 'lohnt-sich-solaranlage-schweiz-2026'],
    relatedPageLinks: [
      { label: 'Subsidies & OTP', href: '/en/solar-subsidies' },
      { label: 'Solar system costs', href: '/en/solar-costs' },
      { label: 'Solar with battery storage', href: '/en/solar-with-battery' },
      { label: 'Compare installers', href: '/en/solar-comparison' },
    ],
  },

  // ─── VERSICHERUNG (IT) ───────────────────────────────────────────────────────
  {
    slug: 'solaranlage-versicherung-schweiz',
    locale: 'it',
    title: "Impianto solare e assicurazione in Svizzera — cosa è coperto e cosa non lo è?",
    metaDescription: "Assicurare il vostro impianto solare in Svizzera: Cosa copre l'assicurazione cantonale degli edifici? Cosa no? Grandine, furto, cortocircuito — tutto spiegato con le differenze cantonali.",
    image: '/images/solaranlage-chalet-alpen-sommer.webp',
    date: '10 maggio 2026',
    readMin: 10,
    tag: 'Guida',
    intro: "Cosa succede se la grandine distrugge i pannelli? Se un cortocircuito danneggia l'inverter? Se qualcuno ruba l'impianto? Molti proprietari svizzeri presumono che la loro assicurazione edilizia copra tutto — e ricevono una brutta sorpresa in caso di sinistro. Questo articolo spiega chiaramente cosa copre l'assicurazione cantonale degli edifici (ACE), cosa non copre, e come proteggere integralmente il vostro investimento.",
    sections: [
      {
        heading: "Il sistema assicurativo per gli edifici in Svizzera — in breve",
        content: [
          "La Svizzera ha due sistemi assicurativi per gli edifici:",
          "Sistema 1 — ACE obbligatoria (19 cantoni): Zurigo (GVZ), Berna (GVB), Argovia, Lucerna, San Gallo e altri hanno un'assicurazione edilizia statale obbligatoria. Ogni proprietario è automaticamente assicurato. L'impianto solare è coperto come parte dell'edificio — se dichiarato.",
          "Sistema 2 — Cantoni GUSTAVO (7 cantoni senza ACE obbligatoria): Ginevra, Uri, Svitto, Ticino, Appenzello Interno, Obvaldo, Vallese. I proprietari devono stipulare un'assicurazione privata. La copertura dipende dalla polizza scelta.",
          "Conclusione: In entrambi i sistemi — dichiarate il vostro impianto e verificate esattamente quali rischi sono coperti.",
        ],
        stats: [
          { value: 'Fuoco & elementi', label: "ACE copre — ma non tutto" },
          { value: 'Furto, cortocircuito', label: "ACE NON copre" },
        ],
      },
      {
        heading: "Cosa copre l'ACE per gli impianti solari?",
        content: [
          "Il vostro impianto solare è nella maggior parte dei cantoni automaticamente coperto come parte dell'edificio — a condizione di averlo dichiarato.",
          "Cosa copre l'ACE:",
          "Il grande problema: L'ACE copre solo la sostanza di base. Cosa spesso NON ricevete: costi di ponteggio per le riparazioni, perdita di reddito durante la riparazione, costi aggiuntivi per prescrizioni delle autorità, costi di smaltimento dei moduli danneggiati.",
        ],
        bullets: [
          '✅ Danni da incendio — fuoco, fulmine, esplosione',
          '✅ Danni elementari — grandine, tempesta, inondazione, carico neve, smottamento',
          '✅ Danni da rottura tubazioni (in alcuni cantoni)',
        ],
      },
      {
        heading: "Cosa l'ACE NON copre — le lacune pericolose",
        content: [
          "Questo è il cuore di questo articolo. Le cause più frequenti di sinistri per gli impianti solari: grandine, sovratensione e difetti tecnici. La grandine è coperta — la sovratensione e i difetti no:",
        ],
        bullets: [
          "❌ Furto — pannelli rubati dal tetto? L'ACE non paga.",
          "❌ Vandalismo — danni intenzionali? L'ACE non paga.",
          "❌ Cortocircuito — difetto tecnico distrugge l'inverter? L'ACE non paga.",
          "❌ Sovratensione — fulmine sulla rete, elettronica distrutta? L'ACE non paga.",
          "❌ Morsi di animali — faine o uccelli danneggiano i cavi? L'ACE non paga.",
          "❌ Errori di utilizzo — impostazioni errate danneggiano l'impianto? L'ACE non paga.",
          "❌ Perdita di reddito — impianto fermo per riparazione? L'ACE non paga.",
          "❌ Difetti di fabbricazione — difetto di produzione nel modulo? L'ACE non paga.",
        ],
      },
      {
        heading: "Cantoni GUSTAVO — caso speciale Ticino, Vallese, Ginevra",
        content: [
          "Per i proprietari di impianti solari in questi cantoni: Verificate attentamente la polizza e assicuratevi che l'impianto solare sia esplicitamente coperto.",
        ],
      },
      {
        heading: "L'assicurazione tecnica degli edifici — per colmare le lacune",
        content: [
          "L'assicurazione tecnica degli edifici (anche detta assicurazione fotovoltaica) copre tutti i rischi non assunti dall'ACE.",
          "Cosa copre:",
        ],
        bullets: [
          '✅ Danni da cortocircuito e sovratensione',
          '✅ Furto — pannelli, inverter, sistema di accumulo',
          '✅ Vandalismo',
          '✅ Morsi di animali — faine, uccelli',
          '✅ Errori di utilizzo',
          '✅ Difetti di costruzione e fabbricazione',
          '✅ Perdita di reddito durante la riparazione',
          '✅ Costi di ponteggio per riparazioni sul tetto',
          '✅ Costi aggiuntivi per prescrizioni delle autorità',
          '✅ Sistema di accumulo a batterie (se coperto)',
        ],
      },
      {
        heading: "Quali assicuratori offrono assicurazioni solari in Svizzera?",
        content: [
          "Fornitori noti per assicurazioni impianti solari in Svizzera:",
          "GVB Solar (Berna): Assicurazione speciale PV, basata sull'assicurazione cantonale. Helvetia: Assicurazione fotovoltaica incl. perdita di reddito. Zurich: Energie rinnovabili incl. pompa di calore. Mobiliar: Tecnica degli edifici, combinabile con edificio. AXA: Assicurazione edifici+ con opzione di estensione. Allianz: Assicurazione solare con polizze riconosciute.",
          "Raccomandazione: Chiedete prima alla vostra assicurazione edilizia esistente — spesso potete semplicemente includere l'impianto solare come opzione aggiuntiva.",
        ],
      },
      {
        heading: "Devo dichiarare l'impianto solare all'assicurazione?",
        content: [
          "Sì — ed è molto importante. Nei cantoni con ACE, l'impianto solare è considerato parte dell'edificio. Per essere coperti, dovete dichiarare l'installazione e adeguare il valore dell'edificio. Senza dichiarazione potrebbe non esserci copertura in caso di sinistro.",
          "Quando dichiarare: Idealmente subito dopo l'installazione, al più tardi entro 30 giorni. Spesso l'installatore effettua questa dichiarazione — chiedetegli esplicitamente.",
        ],
      },
      {
        heading: "Sistema di accumulo a batterie — proprio status assicurativo",
        content: [
          "Non coperto: difetti tecnici, sovratensione, cortocircuito.",
          "Assicurazione complementare: La maggior parte delle polizze copre anche il sistema di accumulo — verificate esplicitamente nelle condizioni. A volte deve essere indicato separatamente.",
        ],
      },
      {
        heading: "Grandine — il sinistro più frequente in Svizzera",
        content: [
          "La Svizzera ha uno dei rischi di grandine più elevati d'Europa — specialmente nel Canton Berna, nella Svizzera nord-occidentale e nell'Altopiano. I danni da grandine sono coperti dall'ACE — ma non i costi di ponteggio e la perdita di reddito.",
          "Standard di protezione contro la grandine: Minimo 25 mm di grandine (standard IEC). Raccomandato per la Svizzera: certificazione 30 mm. Migliore classe: resistenza 40 mm. Nelle zone a rischio: chiedete la classe di protezione al momento del preventivo.",
        ],
      },
      {
        heading: "Checklist — protezione assicurativa per il vostro impianto solare",
        content: [
          "Verificate questi punti dopo l'installazione:",
        ],
        bullets: [
          "✅ Installazione dichiarata all'ACE?",
          "✅ Valore dell'edificio adeguato?",
          "✅ Assicurazione tecnica stipulata (cortocircuito, furto, morsi di animali)?",
          "✅ Perdita di reddito inclusa nell'assicurazione complementare?",
          "✅ Sistema di accumulo esplicitamente coperto?",
          "✅ Classe di protezione contro la grandine dei moduli nota?",
          "✅ Canton GUSTAVO: assicurazione privata con copertura PV?",
        ],
      },
    ],
    faqs: [
      { question: "Il mio impianto solare è automaticamente coperto dall'assicurazione edilizia?", answer: "Nei cantoni con ACE obbligatoria sì — ma solo per danni da fuoco ed elementi, e solo se avete dichiarato l'installazione. Furto, cortocircuito e difetti tecnici non sono coperti. Si raccomanda un'assicurazione complementare." },
      { question: "Cosa succede se la grandine danneggia i miei pannelli solari?", answer: "I danni da grandine sono coperti dall'ACE — a condizione di aver dichiarato l'installazione. I costi di ponteggio e la perdita di reddito durante la riparazione non sono inclusi e richiedono un'assicurazione complementare." },
      { question: "Il furto di pannelli solari è assicurato?", answer: "Non dall'ACE. Il furto è coperto solo da un'assicurazione complementare privata." },
      { question: "Devo dichiarare l'impianto solare all'assicurazione?", answer: "Sì. Dichiarate l'installazione idealmente entro 30 giorni dalla fine dei lavori. Il vostro installatore può spesso farlo per voi — chiedetegli esplicitamente." },
      { question: "Abito in Ticino — come funziona l'assicurazione?", answer: "Il Ticino è un cantone GUSTAVO senza assicurazione edilizia obbligatoria. Avete bisogno di un'assicurazione privata che copra esplicitamente l'impianto solare — fuoco, elementi e idealmente rischi aggiuntivi." },
      { question: "Il sistema di accumulo a batterie è coperto?", answer: "Dall'ACE contro fuoco ed elementi — sì. Per difetti tecnici e cortocircuito avete bisogno di un'assicurazione complementare. Verificate che il sistema di accumulo sia esplicitamente menzionato nelle condizioni." },
    ],
    ctaHeading: "Richiedete ora un preventivo — incl. consulenza assicurativa",
    ctaText: "I nostri installatori certificati vi consigliano anche sulle questioni assicurative e dichiarano correttamente l'installazione all'assicurazione edilizia. Richiedete gratuitamente fino a 3 preventivi.",
    ctaButton: 'Richiedere preventivo gratuito',
    formUrl: '/it/richiesta',
    relatedSlugs: ['batteriespeicher-brandgefahr-sicherheit-schweiz', 'solaranlage-installateur-konkurs-garantie-schweiz', 'lohnt-sich-solaranlage-schweiz-2026'],
    relatedPageLinks: [
      { label: 'Incentivi & CUB', href: '/it/incentivi-solari' },
      { label: 'Costi impianto solare', href: '/it/costi-impianto-solare' },
      { label: 'Solare con accumulo', href: '/it/solare-con-accumulo' },
      { label: 'Confronta installatori', href: '/it/portale-confronto-fotovoltaico' },
    ],
  },

  // ─── CHINESISCH VS. EUROPÄISCH (DE) ──────────────────────────────────────────
  {
    slug: 'chinesische-vs-europaeische-solarmodule-schweiz',
    locale: 'de',
    title: 'Chinesische vs. europäische Solarmodule — ehrlicher Vergleich für die Schweiz 2026',
    metaDescription: 'Sind chinesische Solarmodule wirklich schlechter als europäische? Qualität, Garantie, Preis und Risiken im direkten Vergleich — für Schweizer Hausbesitzer 2026.',
    image: '/images/solarmodul-regentropfen-alpen.webp',
    date: '17. Mai 2026',
    readMin: 10,
    tag: 'Ratgeber',
    intro: '"Chinesische Module kaufe ich nicht" — diesen Satz hören wir oft. Chinesische Tier-1-Hersteller liefern heute Qualität, die europäischen Produkten in vielen Bereichen gleichwertig ist. Dieser Artikel erklärt ehrlich, wo chinesische Module gut sind, wo europäische besser sind — und worauf es wirklich ankommt.',
    sections: [
      {
        heading: 'Warum haben chinesische Module einen schlechten Ruf?',
        content: [
          'Der schlechte Ruf stammt aus den frühen 2010er Jahren — als minderwertige No-Name-Produkte den Markt überschwemmten. Diese Module hatten tatsächlich Qualitätsprobleme: schnellere Degradation, schwache Garantien, schlechter Kundendienst.',
          'Seitdem hat sich die Branche fundamental verändert. Die grossen chinesischen Hersteller — JinkoSolar, LONGi, Trina Solar, JA Solar, Canadian Solar — haben Milliarden in Forschung und Entwicklung investiert. Heute sind sie nach Wirkungsgrad, Zuverlässigkeit und Garantielaufzeit mit europäischen Herstellern mindestens gleichauf.',
          'Der Unterschied liegt nicht mehr zwischen "chinesisch" und "europäisch" — sondern zwischen Tier-1-Herstellern und No-Name-Produkten.',
        ],
        stats: [
          { value: `${factRange(ECONOMIC_FACTS.moduleLifetimeYears, 'de')} Jahre`, label: 'typische Lebensdauer der Module' },
          { value: 'Tier-1', label: 'ist das entscheidende Qualitätsmerkmal' },
        ],
      },
      {
        heading: 'Was bedeutet Tier-1 — und warum ist das wichtiger als die Herkunft?',
        content: [
          'Der Bloomberg Tier-1-Status ist das wichtigste Qualitätsmerkmal bei Solarmodulen. Um als Tier-1-Hersteller anerkannt zu werden, muss ein Unternehmen: Module für mindestens 6 bankfinanzierte Projekte geliefert haben, von unabhängigen Banken als zuverlässiger Lieferant eingestuft worden sein, nachgewiesene Produktions- und Qualitätskontrollstandards erfüllen, und finanziell stabil genug sein, um Garantien langfristig zu erfüllen.',
          'Tier-1-Hersteller aus China: JinkoSolar, LONGi, Trina Solar, JA Solar, Canadian Solar, Risen Energy, Huasun.',
          'Tier-1-Hersteller aus Europa: Meyer Burger (CH/DE), REC Group (NO), Luxor Solar (DE), SoliTek (LT).',
          'Fazit: Ein Tier-1-Modul aus China ist zuverlässiger als ein No-Name-Modul aus Europa.',
        ],
      },
      {
        heading: 'Direkter Vergleich: Chinesisch vs. Europäisch',
        content: [
          'Wirkungsgrad: Chinesische und europäische Qualitätsmodule erreichen hohe Werte.',
          `Lebensdauer: Qualitätsmodule sind typischerweise auf ${factRange(ECONOMIC_FACTS.moduleLifetimeYears, 'de')} Jahre ausgelegt.`,
          'Garantieabwicklung: Chinesisch ⚠️ oft über Schweizer Importeur | Europäisch ✅ direkter europäischer Ansprechpartner.',
          'Hagelschutz Schweiz: Chinesisch ⚠️ variiert je nach Modell | Europäisch ✅ oft besser zertifiziert.',
          'Ökobilanz: Chinesisch ❌ längere Transportwege | Europäisch ✅ kürzere Transportwege.',
        ],
      },
      {
        heading: 'Die grössten chinesischen Hersteller im Überblick',
        content: [
          "LONGi — Weltmarktführer Monokristallin: LONGi aus Xi'an ist der grösste Hersteller monokristalliner Wafer weltweit. Die Hi-MO-Serie ist eines der meistverkauften Module in der Schweiz.",
          'JinkoSolar — Tiger Neo Serie: N-Type-TOPCon-Technologie und bifaziale Glas-Glas-Konstruktion. Als PVEL Top Performer ausgezeichnet.',
          'Trina Solar — Vertex S+: Etablierter Hersteller und als PVEL Top Performer ausgezeichnet.',
          'AIKO Solar: Module mit ABC-Technologie und hohem Wirkungsgrad.',
        ],
      },
      {
        heading: 'Die europäischen Hersteller im Überblick',
        content: [
          'Meyer Burger — Das Schweizer Modul: Meyer Burger aus Thun (CH) ist der einzige Schweizer Modulhersteller. Garantieabwicklung direkt in der Schweiz.',
          'REC Group — Norwegen: Gegründet 1996, hohe Qualitätsstandards, starke Leistungsgarantien, europäisches Recht. Guter Ruf in der Schweiz.',
          'Empfehlenswert für Schweizer Verhältnisse.',
        ],
      },
      {
        heading: 'Für wen lohnen sich europäische Module?',
        content: [
          'Wenn Hagelschutz prioritär ist: In hagelgefährdeten Kantonen der Schweiz empfehlen sich Module mit HW4 oder HW5 Hagelzertifizierung. Meyer Burger und Luxor Solar sind hier stark.',
          'Wenn Ökobilanz ein Faktor ist: Kürzere Transportwege, europäische Produktionsstandards, bessere Recyclinginfrastruktur.',
          'Wenn Schweizer Qualität ein Verkaufsargument ist: Meyer Burger aus der Schweiz hat emotionalen Wert für viele Hausbesitzer.',
        ],
      },
      {
        heading: 'Für wen sind chinesische Tier-1-Module die richtige Wahl?',
        content: [
          'Wenn der Installateur Erfahrung mit dem Hersteller hat: Ein lokaler Installateur, der seit Jahren JinkoSolar oder Trina Solar verbaut, kennt die Produkte, die Montage und den Garantieprozess.',
        ],
      },
      {
        heading: 'Was ist mit No-Name-Modulen aus China?',
        content: [
          'Das ist der eigentliche Risikofaktor — nicht "chinesisch" generell, sondern unbekannte Hersteller ohne Tier-1-Status. Warnsignale:',
        ],
        bullets: [
          '⚠️ Kein Bloomberg Tier-1-Status',
          '⚠️ Keine PVEL-Zertifizierung',
          `⚠️ Leistungsgarantie unter ${factNumber(ECONOMIC_FACTS.performanceWarranty.percent)}% nach ${factNumber(ECONOMIC_FACTS.performanceWarranty.afterYears)} Jahren`,
          '⚠️ Kein europäischer Servicepartner',
          '⚠️ Preis deutlich unter dem Marktdurchschnitt',
        ],
        highlight: 'Fragen Sie Ihren Installateur explizit nach dem Hersteller und dem Tier-1-Status der Module. Ein seriöser Installateur verbaut keine unbekannten No-Name-Produkte.',
      },
      {
        heading: 'Welche Module empfiehlt PvPro.ch für die Schweiz?',
        content: [
          'Wir empfehlen keine spezifischen Produkte — das ist Aufgabe des lokalen Installateurs, der Ihr Dach kennt. Aber wir empfehlen folgende Mindestanforderungen:',
        ],
        bullets: [
          '✅ Bloomberg Tier-1-Status oder äquivalente Zertifizierung',
          '✅ Klare und dokumentierte Produktgarantie',
          `✅ Leistungsgarantie von mindestens ${factNumber(ECONOMIC_FACTS.performanceWarranty.percent)}% nach ${factNumber(ECONOMIC_FACTS.performanceWarranty.afterYears)} Jahren`,
          '✅ IEC 61215 Zertifizierung',
          '✅ Hagelschutz mindestens HW3 (HW4–HW5 für hagelgefährdete Kantonen)',
          '✅ Glas-Glas-Bauweise für hagelgefährdete Kantonen',
        ],
      },
    ],
    faqs: [
      { question: 'Sind chinesische Solarmodule schlechter als europäische?', answer: 'Nein — nicht pauschal. Chinesische Tier-1-Hersteller wie LONGi, JinkoSolar und Trina Solar liefern Qualität, die europäischen Produkten gleichwertig oder überlegen ist. Der entscheidende Unterschied liegt nicht zwischen "chinesisch" und "europäisch", sondern zwischen Tier-1-Herstellern und No-Name-Produkten.' },
      { question: 'Welche chinesischen Solarmodule sind empfehlenswert für die Schweiz?', answer: 'LONGi (Hi-MO Serie), JinkoSolar (Tiger Neo), Trina Solar (Vertex S+), JA Solar und AIKO Solar sind Tier-1-Hersteller mit nachgewiesener Zuverlässigkeit, langen Garantien und PVEL-Zertifizierungen.' },
      { question: 'Lohnen sich Schweizer Module von Meyer Burger?', answer: 'Meyer Burger bietet hohe Qualität, exzellente Leistungsgarantien und unkomplizierte Garantieabwicklung in der Schweiz. Für Hausbesitzer, die Wert auf Schweizer Qualität legen, ist Meyer Burger eine ausgezeichnete Wahl.' },
      { question: 'Was ist der Bloomberg Tier-1-Status?', answer: 'Der Bloomberg Tier-1-Status belegt, dass der Hersteller für bankfinanzierte Projekte als zuverlässiger Lieferant anerkannt ist und Produktions- und Qualitätsstandards erfüllt. Tier-1-Module kommen von Herstellern, die langfristig ihre Garantien erfüllen können.' },
      { question: 'Welche Module sind am besten für hagelgefährdete Kantonen in der Schweiz?', answer: 'Für hagelgefährdete Kantonen wie den Kanton Bern empfehlen sich Module mit HW4 oder HW5 Hagelzertifizierung und Glas-Glas-Bauweise: FuturaSun Silk Rhino (HW5), Luxor Eco Line HJT, Meyer Burger Glass, SoliTek Solid.' },
    ],
    ctaHeading: 'Welche Module passen zu Ihrem Dach? Jetzt Offerte einholen',
    ctaText: 'Unsere zertifizierten lokalen Installateure kennen die besten Module für Ihren Standort — ob chinesische Tier-1 oder europäische Premium-Module. Kostenlos bis zu 3 Offerten vergleichen.',
    ctaButton: 'Kostenlose Offerte anfordern',
    formUrl: '/anfrage',
    relatedSlugs: ['lohnt-sich-solaranlage-schweiz-2026', 'solaranlage-versicherung-schweiz', 'besten-solarinstallateur-schweiz-finden'],
    relatedPageLinks: [
      { label: 'Modultypen vergleichen', href: '/solaranlagen-typen-vergleich' },
      { label: 'Solaranlage Kosten Schweiz', href: '/solaranlage-kosten' },
      { label: 'Installateure vergleichen', href: '/vergleichsportal-photovoltaik-schweiz' },
      { label: 'Förderungen & EIV', href: '/foerderungen' },
    ],
  },

  // ─── CHINESISCH VS. EUROPÄISCH (FR) ──────────────────────────────────────────
  {
    slug: 'chinesische-vs-europaeische-solarmodule-schweiz',
    locale: 'fr',
    title: 'Panneaux solaires chinois vs. européens — comparaison honnête pour la Suisse 2026',
    metaDescription: 'Les panneaux solaires chinois sont-ils vraiment moins bons que les européens? Qualité, garantie, prix et risques en comparaison directe — pour les propriétaires suisses 2026.',
    image: '/images/solarmodul-regentropfen-alpen.webp',
    date: '17 mai 2026',
    readMin: 10,
    tag: 'Guide',
    intro: '"Je n\'achète pas de panneaux chinois" — cette phrase, nous l\'entendons souvent. Les fabricants chinois Tier-1 livrent aujourd\'hui une qualité équivalente aux produits européens dans de nombreux domaines. Cet article explique honnêtement où les panneaux chinois sont bons, où les européens sont meilleurs — et ce qui compte vraiment.',
    sections: [
      {
        heading: 'Pourquoi les panneaux chinois ont-ils une mauvaise réputation?',
        content: [
          "La mauvaise réputation vient du début des années 2010 — quand des produits sans marque de mauvaise qualité ont inondé le marché. Ces panneaux avaient de vrais problèmes: dégradation plus rapide, garanties faibles, mauvais service client.",
          "Depuis lors, le secteur a fondamentalement changé. Les grands fabricants chinois — JinkoSolar, LONGi, Trina Solar, JA Solar — ont investi des milliards en R&D. Aujourd'hui, ils sont au moins à égalité avec les fabricants européens en termes de rendement, fiabilité et durée de garantie.",
          'La différence n\'est plus entre "chinois" et "européen" — mais entre fabricants Tier-1 et produits sans marque.',
        ],
        stats: [
          { value: `${factRange(ECONOMIC_FACTS.moduleLifetimeYears, 'fr')} ans`, label: 'durée de vie typique des panneaux' },
          { value: 'Tier-1', label: "est le critère de qualité décisif" },
        ],
      },
      {
        heading: 'Que signifie Tier-1 — et pourquoi est-ce plus important que l\'origine?',
        content: [
          "Le statut Tier-1 Bloomberg est le critère de qualité le plus important pour les panneaux solaires. Pour être reconnu comme fabricant Tier-1, une entreprise doit: avoir livré des panneaux pour au moins 6 projets financés par des banques, être classée comme fournisseur fiable par des banques indépendantes, satisfaire à des normes de production et de contrôle qualité prouvées, et être financièrement stable pour honorer les garanties à long terme.",
          "Fabricants Tier-1 de Chine: JinkoSolar, LONGi, Trina Solar, JA Solar, Canadian Solar, Risen Energy.",
          "Fabricants Tier-1 d'Europe: Meyer Burger (CH/DE), REC Group (NO), Luxor Solar (DE), SoliTek (LT).",
          "Conclusion: Un panneau Tier-1 de Chine est plus fiable qu'un panneau sans marque d'Europe.",
        ],
      },
      {
        heading: 'Comparaison directe: Chinois vs. Européens',
        content: [
          "Rendement: les panneaux chinois et européens de qualité atteignent tous des valeurs élevées.",
          `Durée de vie: les panneaux de qualité sont généralement conçus pour ${factRange(ECONOMIC_FACTS.moduleLifetimeYears, 'fr')} ans.`,
          "Gestion des garanties: Chinois ⚠️ souvent via importateur suisse | Européens ✅ interlocuteur européen direct.",
          "Protection anti-grêle CH: Chinois ⚠️ varie selon le modèle | Européens ✅ souvent mieux certifiés.",
          "Bilan écologique: Chinois ❌ transport plus long | Européens ✅ transport plus court.",
        ],
      },
      {
        heading: "Les plus grands fabricants chinois",
        content: [
          "LONGi: Leader mondial du monocristallin. La série Hi-MO est l'une des plus vendues en Suisse.",
          "JinkoSolar: technologie TOPCon et construction verre-verre bifaciale. Classé PVEL Top Performer.",
          "Trina Solar: fabricant établi et classé PVEL Top Performer.",
          "AIKO Solar: panneaux à technologie ABC et rendement élevé.",
        ],
      },
      {
        heading: "Les fabricants européens",
        content: [
          "Meyer Burger — Le panneau suisse: Seul fabricant suisse de panneaux. Service garantie directement en Suisse.",
          "REC Group — Norvège: Fondé en 1996, hauts standards de qualité, fortes garanties de performance, droit européen.",
          "Luxor Solar et SoliTek proposent des panneaux européens avec des garanties fabricant clairement documentées.",
        ],
      },
      {
        heading: "Pour qui les panneaux européens valent-ils la peine?",
        content: [
          "Si la protection anti-grêle est prioritaire: Dans les zones à risque de grêle, les panneaux avec certification HW4 ou HW5 sont recommandés. Meyer Burger et Luxor Solar excellent ici.",
          "Si le bilan écologique compte: Transports plus courts, normes de production européennes, meilleure infrastructure de recyclage.",
          "Si la qualité suisse est un argument: Meyer Burger de Suisse a une valeur émotionnelle pour de nombreux propriétaires.",
        ],
      },
      {
        heading: "Pour qui les panneaux chinois Tier-1 sont-ils le bon choix?",
        content: [
          "Si l'installateur a de l'expérience avec le fabricant: Un installateur local qui installe depuis des années JinkoSolar ou Trina Solar connaît les produits, le montage et le processus de garantie.",
        ],
      },
      {
        heading: "Les panneaux sans marque de Chine — le vrai facteur de risque",
        content: [
          "C'est le vrai facteur de risque — pas \"chinois\" en général, mais les fabricants inconnus sans statut Tier-1. Signes d'alarme:",
        ],
        bullets: [
          '⚠️ Pas de statut Bloomberg Tier-1',
          '⚠️ Pas de certification PVEL',
          `⚠️ Garantie de performance inférieure à ${factNumber(ECONOMIC_FACTS.performanceWarranty.percent)}% après ${factNumber(ECONOMIC_FACTS.performanceWarranty.afterYears)} ans`,
          '⚠️ Pas de partenaire de service européen',
          '⚠️ Prix nettement en dessous de la moyenne du marché',
        ],
        highlight: "Demandez explicitement à votre installateur le fabricant et le statut Tier-1 des panneaux. Un installateur sérieux n'installe pas de produits sans marque inconnus.",
      },
      {
        heading: "Quels panneaux PvPro.ch recommande-t-il pour la Suisse?",
        content: [
          "Nous ne recommandons pas de produits spécifiques — c'est le rôle de l'installateur local qui connaît votre toit. Mais nous recommandons ces critères minimaux:",
        ],
        bullets: [
          '✅ Statut Bloomberg Tier-1 ou certification équivalente',
          '✅ Garantie produit claire et documentée',
          `✅ Garantie de performance d'au moins ${factNumber(ECONOMIC_FACTS.performanceWarranty.percent)}% après ${factNumber(ECONOMIC_FACTS.performanceWarranty.afterYears)} ans`,
          '✅ Certification IEC 61215',
          "✅ Protection anti-grêle au moins HW3 (HW4–HW5 pour zones à risque)",
          "✅ Construction verre-verre pour zones à risque de grêle",
        ],
      },
    ],
    faqs: [
      { question: "Les panneaux solaires chinois sont-ils moins bons que les européens?", answer: "Non — pas de manière générale. Les fabricants chinois Tier-1 comme LONGi, JinkoSolar et Trina Solar livrent une qualité équivalente ou supérieure aux produits européens. La différence décisive n'est pas entre \"chinois\" et \"européen\", mais entre fabricants Tier-1 et produits sans marque." },
      { question: "Quels panneaux chinois sont recommandables pour la Suisse?", answer: "LONGi (série Hi-MO), JinkoSolar (Tiger Neo), Trina Solar (Vertex S+), JA Solar et AIKO Solar sont des fabricants Tier-1 avec fiabilité prouvée, longues garanties et certifications PVEL." },
      { question: "Les panneaux Meyer Burger valent-ils la peine?", answer: "Meyer Burger offre haute qualité, excellentes garanties de performance et gestion de garantie simple en Suisse. Pour les propriétaires attachés à la qualité suisse, Meyer Burger est un excellent choix." },
      { question: "Qu'est-ce que le statut Tier-1 Bloomberg?", answer: "Le statut Tier-1 Bloomberg atteste que le fabricant est reconnu comme fournisseur fiable pour des projets financés par des banques et satisfait aux normes de qualité. Les panneaux Tier-1 viennent de fabricants capables d'honorer leurs garanties à long terme." },
      { question: "Quels panneaux sont les meilleurs pour les zones à risque de grêle en Suisse?", answer: "Pour les zones à risque comme le canton de Berne: panneaux avec certification anti-grêle HW4 ou HW5 et construction verre-verre: FuturaSun Silk Rhino (HW5), Luxor Eco Line HJT, Meyer Burger Glass, SoliTek Solid." },
    ],
    ctaHeading: "Quels panneaux pour votre toit? Demander un devis maintenant",
    ctaText: "Nos installateurs locaux certifiés connaissent les meilleurs panneaux pour votre emplacement — qu'il s'agisse de Tier-1 chinois ou de panneaux premium européens. Comparez gratuitement jusqu'à 3 devis.",
    ctaButton: 'Demander un devis gratuit',
    formUrl: '/fr/demande',
    relatedSlugs: ['lohnt-sich-solaranlage-schweiz-2026', 'solaranlage-versicherung-schweiz', 'besten-solarinstallateur-schweiz-finden'],
    relatedPageLinks: [
      { label: 'Comparer les types de panneaux', href: '/fr/types-panneaux-solaires' },
      { label: "Coûts installation solaire", href: '/fr/cout-installation-solaire' },
      { label: 'Comparer les installateurs', href: '/fr/comparateur-photovoltaique' },
      { label: 'Subventions & SRI', href: '/fr/subventions-solaires' },
    ],
  },

  // ─── CHINESISCH VS. EUROPÄISCH (EN) ──────────────────────────────────────────
  {
    slug: 'chinesische-vs-europaeische-solarmodule-schweiz',
    locale: 'en',
    title: 'Chinese vs. European solar panels — an honest comparison for Switzerland 2026',
    metaDescription: 'Are Chinese solar panels really worse than European ones? Quality, warranty, price and risks in direct comparison — for Swiss homeowners 2026.',
    image: '/images/solarmodul-regentropfen-alpen.webp',
    date: '17 May 2026',
    readMin: 10,
    tag: 'Guide',
    intro: '"I won\'t buy Chinese panels" — we hear this often. Chinese Tier-1 manufacturers now deliver quality that is equivalent to European products in many areas. This article honestly explains where Chinese panels excel, where European ones are better — and what really matters.',
    sections: [
      {
        heading: 'Why do Chinese panels have a bad reputation?',
        content: [
          "The bad reputation dates back to the early 2010s — when low-quality no-name products flooded the market. These modules genuinely had quality problems: faster degradation, weak warranties, poor customer service.",
          "Since then, the industry has fundamentally changed. The major Chinese manufacturers — JinkoSolar, LONGi, Trina Solar, JA Solar, Canadian Solar — have invested billions in research and development. Today they are at least on par with European manufacturers in terms of efficiency, reliability and warranty duration.",
          'The difference is no longer between "Chinese" and "European" — but between Tier-1 manufacturers and no-name products.',
        ],
        stats: [
          { value: `${factRange(ECONOMIC_FACTS.moduleLifetimeYears, 'en')} years`, label: 'typical panel lifetime' },
          { value: 'Tier-1', label: 'is the decisive quality criterion' },
        ],
      },
      {
        heading: 'What does Tier-1 mean — and why is it more important than the origin?',
        content: [
          "The Bloomberg Tier-1 status is the most important quality criterion for solar panels. To be recognised as a Tier-1 manufacturer, a company must: have delivered modules for at least 6 bank-financed projects, be rated as a reliable supplier by independent banks, meet proven production and quality control standards, and be financially stable enough to honour warranties long-term.",
          "Tier-1 manufacturers from China: JinkoSolar, LONGi, Trina Solar, JA Solar, Canadian Solar, Risen Energy.",
          "Tier-1 manufacturers from Europe: Meyer Burger (CH/DE), REC Group (NO), Luxor Solar (DE), SoliTek (LT).",
          "Conclusion: A Tier-1 module from China is more reliable than a no-name module from Europe.",
        ],
      },
      {
        heading: 'Direct comparison: Chinese vs. European',
        content: [
          "Efficiency: quality Chinese and European modules both achieve high values.",
          `Lifetime: quality modules are typically designed for ${factRange(ECONOMIC_FACTS.moduleLifetimeYears, 'en')} years.`,
          "Warranty handling: Chinese ⚠️ often via Swiss importer | European ✅ direct European contact.",
          "Hail protection Switzerland: Chinese ⚠️ varies by model | European ✅ often better certified.",
          "Environmental footprint: Chinese ❌ longer transport | European ✅ shorter transport.",
        ],
      },
      {
        heading: 'The major Chinese manufacturers',
        content: [
          "LONGi — world market leader in monocrystalline: The Hi-MO Series is one of the best-selling modules in Switzerland.",
          "JinkoSolar — Tiger Neo Series: N-Type TOPCon technology and bifacial glass-glass construction. Recognised as a PVEL Top Performer.",
          "Trina Solar — Vertex S+: An established manufacturer recognised as a PVEL Top Performer.",
          "AIKO Solar: Modules using ABC technology with high efficiency.",
        ],
      },
      {
        heading: 'The European manufacturers',
        content: [
          "Meyer Burger — the Swiss panel: The only Swiss panel manufacturer. Warranty handling directly in Switzerland.",
          "REC Group — Norway: Founded in 1996, high quality standards, strong performance warranties, European law.",
          "Luxor Solar and SoliTek offer European panels with clearly documented manufacturer warranties.",
        ],
      },
      {
        heading: 'Who benefits from European panels?',
        content: [
          "If hail protection is a priority: In hail-prone areas, panels with HW4 or HW5 hail certification are recommended. Meyer Burger and Luxor Solar excel here.",
          "If environmental footprint matters: Shorter transport routes, European production standards, better recycling infrastructure.",
          "If Swiss quality is a selling point: Meyer Burger from Switzerland has emotional value for many homeowners.",
        ],
      },
      {
        heading: 'Who should choose Chinese Tier-1 panels?',
        content: [
          "If the installer has experience with the manufacturer: A local installer who has been working with JinkoSolar or Trina Solar for years knows the products, the installation and the warranty process.",
        ],
      },
      {
        heading: 'No-name modules from China — the real risk',
        content: [
          'The real risk factor is not "Chinese" in general — but unknown manufacturers without Tier-1 status. Warning signs:',
        ],
        bullets: [
          '⚠️ No Bloomberg Tier-1 status',
          '⚠️ No PVEL certification',
          `⚠️ Performance warranty under ${factNumber(ECONOMIC_FACTS.performanceWarranty.percent)}% after ${factNumber(ECONOMIC_FACTS.performanceWarranty.afterYears)} years`,
          '⚠️ No European service partner',
          '⚠️ Price significantly below market average',
        ],
        highlight: 'Ask your installer explicitly about the manufacturer and Tier-1 status of the panels. A reputable installer does not install unknown no-name products.',
      },
      {
        heading: 'Which panels does PvPro.ch recommend for Switzerland?',
        content: [
          "We don't recommend specific products — that is the job of the local installer who knows your roof. But we recommend these minimum requirements:",
        ],
        bullets: [
          '✅ Bloomberg Tier-1 status or equivalent certification',
          '✅ Clear and documented product warranty',
          `✅ Performance warranty of at least ${factNumber(ECONOMIC_FACTS.performanceWarranty.percent)}% after ${factNumber(ECONOMIC_FACTS.performanceWarranty.afterYears)} years`,
          '✅ IEC 61215 certification',
          '✅ Hail protection at least HW3 (HW4–HW5 for hail-prone areas)',
          '✅ Glass-glass construction for hail-prone areas',
        ],
      },
    ],
    faqs: [
      { question: 'Are Chinese solar panels worse than European ones?', answer: 'No — not categorically. Chinese Tier-1 manufacturers like LONGi, JinkoSolar and Trina Solar deliver quality equivalent or superior to European products. The decisive difference is not between "Chinese" and "European", but between Tier-1 manufacturers and no-name products.' },
      { question: 'Which Chinese solar panels are recommendable for Switzerland?', answer: 'LONGi (Hi-MO Series), JinkoSolar (Tiger Neo), Trina Solar (Vertex S+), JA Solar and AIKO Solar are Tier-1 manufacturers with proven reliability, long warranties and PVEL certifications.' },
      { question: 'Are Meyer Burger panels worth it?', answer: 'Meyer Burger offers high quality, excellent performance warranties and uncomplicated warranty handling in Switzerland. For homeowners who value Swiss quality, Meyer Burger is an excellent choice.' },
      { question: 'What is Bloomberg Tier-1 status?', answer: 'Bloomberg Tier-1 status certifies that the manufacturer is recognised as a reliable supplier for bank-financed projects and meets quality standards. Tier-1 modules come from manufacturers capable of honouring their warranties long-term.' },
      { question: 'Which panels are best for hail-prone areas in Switzerland?', answer: 'For hail-prone areas like the canton of Berne: panels with HW4 or HW5 hail certification and glass-glass construction. Recommended: FuturaSun Silk Rhino (HW5), Luxor Eco Line HJT, Meyer Burger Glass, SoliTek Solid.' },
    ],
    ctaHeading: 'Which panels suit your roof? Get a quote now',
    ctaText: 'Our certified local installers know the best panels for your location — whether Chinese Tier-1 or European premium. Get up to 3 quotes for free.',
    ctaButton: 'Request free quote',
    formUrl: '/en/request',
    relatedSlugs: ['lohnt-sich-solaranlage-schweiz-2026', 'solaranlage-versicherung-schweiz', 'besten-solarinstallateur-schweiz-finden'],
    relatedPageLinks: [
      { label: 'Compare panel types', href: '/en/solar-panel-types' },
      { label: 'Solar system costs', href: '/en/solar-costs' },
      { label: 'Compare installers', href: '/en/solar-comparison' },
      { label: 'Subsidies & OTP', href: '/en/solar-subsidies' },
    ],
  },

  // ─── CHINESISCH VS. EUROPÄISCH (IT) ──────────────────────────────────────────
  {
    slug: 'chinesische-vs-europaeische-solarmodule-schweiz',
    locale: 'it',
    title: 'Pannelli solari cinesi vs. europei — confronto onesto per la Svizzera 2026',
    metaDescription: 'I pannelli solari cinesi sono davvero peggiori di quelli europei? Qualità, garanzia, prezzo e rischi in confronto diretto — per i proprietari svizzeri 2026.',
    image: '/images/solarmodul-regentropfen-alpen.webp',
    date: '17 maggio 2026',
    readMin: 10,
    tag: 'Guida',
    intro: '"Non compro pannelli cinesi" — questa frase la sentiamo spesso. I produttori cinesi Tier-1 offrono oggi una qualità equivalente ai prodotti europei in molti settori. Questo articolo spiega onestamente dove i pannelli cinesi sono buoni, dove quelli europei sono migliori — e cosa conta davvero.',
    sections: [
      {
        heading: 'Perché i pannelli cinesi hanno una cattiva reputazione?',
        content: [
          "La cattiva reputazione risale all'inizio degli anni 2010 — quando prodotti di scarsa qualità senza marchio hanno inondato il mercato. Questi moduli avevano veri problemi di qualità: degradazione più rapida, garanzie deboli, assistenza clienti scadente.",
          "Da allora, il settore è cambiato fondamentalmente. I grandi produttori cinesi — JinkoSolar, LONGi, Trina Solar, JA Solar — hanno investito miliardi in ricerca e sviluppo. Oggi sono almeno alla pari con i produttori europei in termini di efficienza, affidabilità e durata della garanzia.",
          "La differenza non è più tra \"cinese\" ed \"europeo\" — ma tra produttori Tier-1 e prodotti senza marchio.",
        ],
        stats: [
          { value: `${factRange(ECONOMIC_FACTS.moduleLifetimeYears, 'it')} anni`, label: 'durata tipica dei moduli' },
          { value: 'Tier-1', label: "è il criterio di qualità decisivo" },
        ],
      },
      {
        heading: "Cosa significa Tier-1 — e perché è più importante dell'origine?",
        content: [
          "Lo status Tier-1 Bloomberg è il criterio di qualità più importante per i pannelli solari. Per essere riconosciuto come produttore Tier-1, un'azienda deve: aver fornito moduli per almeno 6 progetti finanziati da banche, essere classificata come fornitore affidabile da banche indipendenti, soddisfare standard di produzione e controllo qualità comprovati, ed essere finanziariamente stabile per onorare le garanzie a lungo termine.",
          "Produttori Tier-1 dalla Cina: JinkoSolar, LONGi, Trina Solar, JA Solar, Canadian Solar, Risen Energy.",
          "Produttori Tier-1 dall'Europa: Meyer Burger (CH/DE), REC Group (NO), Luxor Solar (DE), SoliTek (LT).",
          "Conclusione: Un modulo Tier-1 dalla Cina è più affidabile di un modulo senza marchio dall'Europa.",
        ],
      },
      {
        heading: 'Confronto diretto: Cinesi vs. Europei',
        content: [
          "Efficienza: i moduli cinesi ed europei di qualità raggiungono entrambi valori elevati.",
          "Garanzia prodotto: le condizioni variano in base al produttore e al modello.",
          `Durata: i moduli di qualità sono generalmente progettati per ${factRange(ECONOMIC_FACTS.moduleLifetimeYears, 'it')} anni.`,
          "Gestione garanzie: Cinesi ⚠️ spesso tramite importatore svizzero | Europei ✅ interlocutore europeo diretto.",
          "Protezione grandine Svizzera: Cinesi ⚠️ varia a seconda del modello | Europei ✅ spesso meglio certificati.",
          "Bilancio ecologico: Cinesi ❌ trasporti più lunghi | Europei ✅ trasporti più brevi.",
        ],
      },
      {
        heading: "I principali produttori cinesi",
        content: [
          "LONGi: Produttore affermato nel monocristallino. La serie Hi-MO utilizza tecnologie moderne e ha condizioni di garanzia specifiche per modello.",
          "JinkoSolar: tecnologia TOPCon e costruzione vetro-vetro bifacciale. Riconosciuto come PVEL Top Performer.",
          "Trina Solar: produttore affermato e riconosciuto come PVEL Top Performer.",
          "AIKO Solar: moduli con tecnologia ABC ed efficienza elevata.",
        ],
      },
      {
        heading: "I produttori europei",
        content: [
          "Meyer Burger — Il pannello svizzero: Unico produttore svizzero di pannelli. Gestione garanzie direttamente in Svizzera.",
          "REC Group — Norvegia: Fondato nel 1996, alti standard qualitativi, forti garanzie di prestazione, diritto europeo.",
          "Luxor Solar — Germania: Eco Line HJT Bifacial con garanzia del produttore e comportamento termico dichiarato dal produttore.",
          "SoliTek — Lituania: Produzione europea, garanzia del produttore e certificazione anti-grandine HW4.",
        ],
      },
      {
        heading: "Per chi vale la pena i pannelli europei?",
        content: [
          "Se la gestione delle garanzie è decisiva, un produttore europeo può semplificare il contatto grazie al diritto applicabile e a un interlocutore diretto.",
          "Se la protezione anti-grandine è prioritaria: Nelle zone a rischio di grandine si raccomandano moduli con certificazione HW4 o HW5. Meyer Burger e Luxor Solar eccellono in questo.",
          "Se il bilancio ecologico conta: Trasporti più brevi, standard di produzione europei, migliore infrastruttura di riciclaggio.",
          "Se la qualità svizzera è un argomento di vendita: Meyer Burger dalla Svizzera ha un valore emotivo per molti proprietari.",
        ],
      },
      {
        heading: "Per chi i pannelli cinesi Tier-1 sono la scelta giusta?",
        content: [
          "Se l'installatore ha esperienza con il produttore: Un installatore locale che installa da anni JinkoSolar o Trina Solar conosce i prodotti, il montaggio e il processo di garanzia.",
        ],
      },
      {
        heading: "Moduli senza marchio dalla Cina — il vero fattore di rischio",
        content: [
          "Il vero fattore di rischio non è \"cinese\" in generale — ma produttori sconosciuti senza status Tier-1. Segnali d'allarme:",
        ],
        bullets: [
          '⚠️ Nessuno status Bloomberg Tier-1',
          '⚠️ Nessuna certificazione PVEL',
          '⚠️ Garanzia prodotto insolitamente breve o poco chiara',
          `⚠️ Garanzia di prestazione inferiore al ${factNumber(ECONOMIC_FACTS.performanceWarranty.percent)}% dopo ${factNumber(ECONOMIC_FACTS.performanceWarranty.afterYears)} anni`,
          '⚠️ Nessun partner di servizio europeo',
          '⚠️ Prezzo notevolmente inferiore alla media di mercato',
        ],
        highlight: "Chiedete esplicitamente al vostro installatore il produttore e lo status Tier-1 dei moduli. Un installatore serio non monta prodotti sconosciuti senza marchio.",
      },
      {
        heading: "Quali moduli raccomanda PvPro.ch per la Svizzera?",
        content: [
          "Non raccomandiamo prodotti specifici — è compito dell'installatore locale che conosce il vostro tetto. Ma raccomandiamo questi requisiti minimi:",
        ],
        bullets: [
          '✅ Status Bloomberg Tier-1 o certificazione equivalente',
          '✅ Garanzia prodotto chiara e documentata',
          `✅ Garanzia di prestazione di almeno ${factNumber(ECONOMIC_FACTS.performanceWarranty.percent)}% dopo ${factNumber(ECONOMIC_FACTS.performanceWarranty.afterYears)} anni`,
          '✅ Certificazione IEC 61215',
          '✅ Protezione anti-grandine almeno HW3 (HW4–HW5 per zone a rischio)',
          '✅ Costruzione vetro-vetro per zone a rischio di grandine',
        ],
      },
    ],
    faqs: [
      { question: "I pannelli solari cinesi sono peggiori di quelli europei?", answer: "No — non in modo categorico. I produttori cinesi Tier-1 come LONGi, JinkoSolar e Trina Solar offrono una qualità equivalente o superiore ai prodotti europei. La differenza decisiva non è tra \"cinese\" ed \"europeo\", ma tra produttori Tier-1 e prodotti senza marchio." },
      { question: "Quali pannelli cinesi sono raccomandabili per la Svizzera?", answer: "LONGi (serie Hi-MO), JinkoSolar (Tiger Neo), Trina Solar (Vertex S+), JA Solar e AIKO Solar sono produttori Tier-1 con affidabilità comprovata, lunghe garanzie e certificazioni PVEL." },
      { question: "Vale la pena i pannelli Meyer Burger?", answer: "Meyer Burger offre alta qualità, eccellenti garanzie di prestazione e gestione delle garanzie semplice in Svizzera. Per i proprietari che valorizzano la qualità svizzera, Meyer Burger è una scelta eccellente." },
      { question: "Cos'è lo status Tier-1 Bloomberg?", answer: "Lo status Tier-1 Bloomberg certifica che il produttore è riconosciuto come fornitore affidabile per progetti finanziati da banche e soddisfa gli standard di qualità. I moduli Tier-1 provengono da produttori in grado di onorare le garanzie a lungo termine." },
      { question: "Quali moduli sono i migliori per le zone a rischio di grandine in Svizzera?", answer: "Per zone a rischio come il Canton Berna: moduli con certificazione anti-grandine HW4 o HW5 e costruzione vetro-vetro. Raccomandati: FuturaSun Silk Rhino (HW5), Luxor Eco Line HJT, Meyer Burger Glass, SoliTek Solid." },
    ],
    ctaHeading: "Quali moduli si adattano al vostro tetto? Richiedete ora un preventivo",
    ctaText: "I nostri installatori locali certificati conoscono i migliori moduli per la vostra posizione — che si tratti di Tier-1 cinesi o moduli premium europei. Richiedete gratuitamente fino a 3 preventivi.",
    ctaButton: 'Richiedere preventivo gratuito',
    formUrl: '/it/richiesta',
    relatedSlugs: ['lohnt-sich-solaranlage-schweiz-2026', 'solaranlage-versicherung-schweiz', 'besten-solarinstallateur-schweiz-finden'],
    relatedPageLinks: [
      { label: 'Confronto tipi di pannelli', href: '/it/tipi-pannelli-solari' },
      { label: 'Costi impianto solare', href: '/it/costi-impianto-solare' },
      { label: 'Confronta installatori', href: '/it/portale-confronto-fotovoltaico' },
      { label: 'Incentivi & CUB', href: '/it/incentivi-solari' },
    ],
  },

  // ─── NORDDACH (DE) ───────────────────────────────────────────────────────────
  {
    slug: 'solaranlage-norddach-schweiz',
    locale: 'de',
    title: 'Solaranlage auf dem Norddach — lohnt es sich trotzdem?',
    metaDescription: 'Haben Sie ein Norddach? Lohnt sich trotzdem eine Solaranlage? Ertrag, Kosten und ehrliche Antworten für Schweizer Hausbesitzer — mit echten Zahlen und Beispielen.',
    image: '/images/solaranlage-chalet-bewoelkt.webp',
    date: '24. Mai 2026',
    readMin: 10,
    tag: 'Ratgeber',
    intro: '"Mein Dach schaut nach Norden — also kommt für mich keine Solaranlage in Frage." Diesen Satz hören wir oft. Und er stimmt so nicht. Ja, ein Norddach ist nicht ideal. Aber es schliesst eine Solaranlage nicht aus — besonders wenn die Dachneigung flach ist, der Eigenverbrauch hoch ist oder keine andere Dachfläche zur Verfügung steht. Dieser Artikel erklärt ehrlich, wann sich ein Norddach lohnt, wann nicht — und was Sie tun können, um das Beste aus Ihrer Situation herauszuholen.',
    sections: [
      {
        heading: 'Wie viel Strom produziert eine Solaranlage auf dem Norddach?',
        content: [
          'Die ehrliche Antwort: weniger als auf einem Süddach — aber mehr als viele denken. Entscheidend sind Ausrichtung und Neigung. Ein flaches Norddach mit 7–10° ist günstiger als ein steiles Norddach mit 30° oder 40°.',
          'Die wichtigste Erkenntnis: Je flacher das Norddach, desto besser der Ertrag.',
        ],
        stats: [
          { value: 'Flach = besser', label: '20° Neigung optimal für Norddach' },
          { value: 'Eigenverbrauch', label: 'ist entscheidend für die Wirtschaftlichkeit' },
        ],
      },
      {
        heading: 'Warum ist ein Norddach nicht so schlimm wie gedacht?',
        content: [
          '1. Diffuses Licht — der unterschätzte Faktor: In der Schweiz ist der Himmel oft bedeckt. Bei bewölktem Himmel produziert eine Norddachanlage genauso viel wie eine Südanlage — weil diffuses Licht von allen Seiten kommt. Gerade im Mittelland mit häufigem Nebel ist dieser Effekt bedeutsam.',
          '2. Morgen- und Abendsonne im Sommer: Im Schweizer Sommer geht die Sonne im Nordosten auf und im Nordwesten unter. Ein Norddach erhält morgens und abends direkte Sonnenstrahlung — genau dann, wenn der Eigenverbrauch oft am höchsten ist.',
          '3. Kühlere Module = höherer Wirkungsgrad: Module auf dem Norddach erhitzen sich weniger. Da der Wirkungsgrad bei Hitze sinkt, produzieren Nordmodule an heissen Sommertagen manchmal fast so viel wie Südmodule.',
        ],
      },
      {
        heading: 'Wann lohnt sich ein Norddach — und wann nicht?',
        content: [
          'Es lohnt sich wenn:',
        ],
        bullets: [
          '✅ Der Eigenverbrauch hoch ist — wer den Strom selbst verbraucht, profitiert auch von weniger Produktion',
          '✅ Ein Batteriespeicher vorhanden ist — speichert den Tagesstrom für den Abend',
          '✅ Keine Südfläche verfügbar ist — Norddach als einzige Option',
          '✅ Das Norddach zusätzlich zur Südfläche genutzt wird — Kombination maximiert die Produktion',
          '✅ Ein Elektroauto oder eine Wärmepumpe vorhanden ist — hoher Eigenverbrauch macht Nordanlagen rentabel',
          '❌ Zusätzliche Verschattung vorhanden ist — Norddach + Verschattung = sehr wenig Strom',
          '❌ Eine Südfläche ungenutzt ist — zuerst Süd belegen, dann Nordfläche prüfen',
        ],
      },
      {
        heading: 'Kombination Süd- und Norddach — die beste Lösung',
        content: [
          'Wenn Ihr Haus ein Satteldach mit Süd- und Nordseite hat, ist die optimale Strategie oft: beide Seiten belegen.',
          'Vorteile: Mehr Gesamtproduktion, gleichmässigere Produktion morgens und abends, höherer Eigenverbrauch, optimale Tagesabdeckung (Norddach morgens/abends + Süddach mittags).',
        ],
      },
      {
        heading: 'Was ist der optimale Neigungswinkel für ein Norddach?',
        content: [
          'Faustregel: Je flacher, desto besser — mit einer Untergrenze von 7°. Bereiche von 7–10° und 15–20° sind günstiger als 25–30°, 35–40° oder noch steilere Norddächer.',
          'Achtung: Unter 7° gibt es Probleme mit der Selbstreinigung — Regenwasser fliesst schlecht ab, was zu Verschmutzung und reduziertem Ertrag führt.',
        ],
      },
      {
        heading: 'Welche Module eignen sich besonders für Norddächer?',
        content: [
          'Gute Leistung bei diffusem Licht: Monokristalline N-Typ-Module (TOPCon, HJT) produzieren bei bewölktem Himmel besser als ältere PERC-Technologie — besonders empfehlenswert für Norddächer.',
          'Bifaziale Module: Auf dem Norddach können bifaziale Module von reflektiertem Licht der Dachziegel profitieren — der Mehrertrag ist aber gering und rechtfertigt den Mehrpreis selten.',
          'Empfehlung: Tier-1-Hersteller mit TOPCon oder HJT-Technologie.',
        ],
      },
      {
        heading: 'Was tun bei verschattetem Norddach?',
        content: [
          'Verschattung ist bei Norddächern besonders kritisch. Lösungen:',
          'Moduloptimierer: Kleine Geräte an jedem Modul, die verhindern, dass ein verschattetes Modul die gesamte Anlage bremst. Bei Norddächern mit teilweiser Verschattung sehr empfehlenswert.',
          'Mikroinverter: Jedes Modul hat einen eigenen Wechselrichter. Maximale Unabhängigkeit bei Verschattung, aber höhere Kosten.',
          'Kluge Modulanordnung: Ein erfahrener Installateur kann die Module so platzieren, dass verschattete Bereiche minimal sind.',
        ],
      },
    ],
    faqs: [
      { question: 'Lohnt sich eine Solaranlage auf dem Norddach in der Schweiz?', answer: 'Ja, unter bestimmten Bedingungen. Bei flacher Dachneigung (unter 25°) und hohem Eigenverbrauch kann auch ein Norddach wirtschaftlich betrieben werden.' },
      { question: 'Wie viel Strom produziert eine Solaranlage auf dem Norddach?', answer: "In der Schweiz, wo diffuses Licht häufig ist, ist der Unterschied oft kleiner als erwartet." },
      { question: 'Welcher Neigungswinkel ist optimal für ein Norddach?', answer: 'Je flacher, desto besser — mit einer Untergrenze von 7°. Bei 7–20° Neigung erzielt ein Norddach die besten relativen Erträge. Steilere Norddächer über 40° sind eher nicht empfehlenswert.' },
      { question: 'Kann ich Süd- und Norddach gleichzeitig belegen?', answer: 'Ja, und das ist oft die beste Lösung. Die Nordseite ergänzt die Südseite — morgens und abends trägt das Norddach zur Produktion bei. Der Gesamtertrag steigt und die Eigenverbrauchsquote verbessert sich.' },
      { question: 'Welche Module eignen sich am besten für Norddächer?', answer: 'Monokristalline N-Typ-Module (TOPCon oder HJT) von Tier-1-Herstellern. Sie produzieren besser bei diffusem Licht — das macht den Unterschied beim Norddach.' },
      { question: 'Hilft ein Batteriespeicher beim Norddach?', answer: 'Ja, deutlich. Da beim Norddach die Einspeisevergütung ohnehin gering ist, macht der Speicher wirtschaftlich besonders Sinn.' },
    ],
    ctaHeading: 'Auch mit Norddach — kostenlos prüfen lassen',
    ctaText: 'Ein zertifizierter Installateur aus Ihrem Kanton analysiert Ihr Dach und sagt Ihnen ehrlich, ob sich eine Solaranlage lohnt — auch bei Nordausrichtung. Kostenlos bis zu 3 Offerten vergleichen.',
    ctaButton: 'Kostenlose Offerte anfordern',
    formUrl: '/anfrage',
    relatedSlugs: ['lohnt-sich-solaranlage-schweiz-2026', 'chinesische-vs-europaeische-solarmodule-schweiz', 'solaranlage-versicherung-schweiz'],
    relatedPageLinks: [
      { label: 'Solaranlage mit Batteriespeicher', href: '/solaranlage-mit-speicher' },
      { label: 'Modultypen vergleichen', href: '/solaranlagen-typen-vergleich' },
      { label: 'Solaranlage Kosten Schweiz', href: '/solaranlage-kosten' },
      { label: 'Schweizer Klima & PV', href: '/photovoltaik-schweizer-klima' },
    ],
  },

  // ─── NORDDACH (FR) ───────────────────────────────────────────────────────────
  {
    slug: 'solaranlage-norddach-schweiz',
    locale: 'fr',
    title: "Panneau solaire sur toit nord — est-ce quand même rentable?",
    metaDescription: "Vous avez un toit orienté nord? L'installation solaire vaut-elle quand même la peine? Rendement, coûts et réponses honnêtes pour les propriétaires suisses — avec de vrais chiffres.",
    image: '/images/solaranlage-chalet-bewoelkt.webp',
    date: '24 mai 2026',
    readMin: 10,
    tag: 'Guide',
    intro: '"Mon toit est orienté nord — donc l\'énergie solaire ne me convient pas." C\'est une phrase que nous entendons souvent. Et elle est inexacte. Oui, un toit nord n\'est pas idéal. Mais il n\'exclut pas une installation solaire — surtout si la pente est faible, si l\'autoconsommation est élevée ou si aucune autre surface de toit n\'est disponible. Cet article explique honnêtement quand un toit nord vaut la peine, quand il n\'en vaut pas — et ce que vous pouvez faire pour tirer le meilleur de votre situation.',
    sections: [
      {
        heading: "Quelle quantité d'électricité produit une installation solaire sur un toit nord?",
        content: [
          "La réponse honnête: moins que sur un toit sud — mais plus que beaucoup ne le pensent. L'orientation et la pente sont déterminantes. Un toit nord plat de 7–10° est plus favorable qu'un toit nord raide de 30° ou 40°.",
          "L'enseignement clé: Plus le toit nord est plat, meilleur est le rendement.",
        ],
        stats: [
          { value: 'Plat = mieux', label: "inclinaison 20° optimale pour toit nord" },
          { value: 'Autoconsommation', label: "est décisive pour la rentabilité" },
        ],
      },
      {
        heading: "Pourquoi un toit nord n'est pas aussi problématique que prévu?",
        content: [
          "1. Lumière diffuse — le facteur sous-estimé: En Suisse, le ciel est souvent couvert. Par temps nuageux, une installation sur un toit nord produit autant que sur les autres orientations — car la lumière diffuse vient de tous les côtés. Dans le Plateau, où le brouillard est fréquent, cet effet est significatif.",
          "2. Soleil matinal et vespéral en été: En été suisse, le soleil se lève au nord-est et se couche au nord-ouest. Un toit nord reçoit donc du rayonnement direct le matin et le soir — exactement quand l'autoconsommation est souvent la plus élevée.",
          "3. Modules plus froids = meilleur rendement: Les modules sur un toit nord s'échauffent moins. Comme le rendement diminue avec la chaleur, les modules nord produisent parfois presque autant que les modules sud lors de chaudes journées d'été.",
        ],
      },
      {
        heading: "Quand un toit nord vaut-il la peine — et quand non?",
        content: [
          "Cela vaut la peine si:",
        ],
        bullets: [
          "✅ L'autoconsommation est élevée — qui consomme lui-même profite même avec moins de production",
          "✅ Un système de stockage est présent — stocke l'électricité diurne pour le soir",
          "✅ Aucune surface sud n'est disponible — toit nord comme seule option",
          "✅ Le toit nord s'ajoute à une surface sud — la combinaison maximise la production",
          "✅ Une voiture électrique ou pompe à chaleur est présente — haute autoconsommation rend les installations nord rentables",
          "❌ Un ombrage supplémentaire existe — toit nord + ombrage = très peu d'électricité",
          "❌ Une surface sud est inutilisée — occuper d'abord le sud, puis examiner le nord",
        ],
      },
      {
        heading: "Combinaison toit sud et nord — la meilleure solution",
        content: [
          "Si votre maison a un toit à deux pans avec côté sud et nord, la stratégie optimale est souvent: occuper les deux côtés.",
          "Avantages: Plus de production totale, production plus régulière matin et soir, meilleure autoconsommation, couverture optimale de la journée (nord matin/soir + sud midi).",
        ],
      },
      {
        heading: "Quel est l'angle d'inclinaison optimal pour un toit nord?",
        content: [
          "Règle générale: Plus c'est plat, mieux c'est — avec une limite inférieure de 7°.",
          "Attention: En dessous de 7° d'inclinaison, il y a des problèmes d'auto-nettoyage — l'eau de pluie ne s'écoule plus bien, ce qui entraîne des salissures et une production réduite.",
        ],
      },
      {
        heading: "Quels modules conviennent particulièrement aux toits nord?",
        content: [
          "Bonne performance sous lumière diffuse: Les modules monocristallins N-Type (TOPCon, HJT) produisent mieux par temps couvert et sous lumière diffuse que l'ancienne technologie PERC — particulièrement recommandés pour les toits nord.",
          "Modules bifaciaux: Sur le toit nord, les modules bifaciaux peuvent bénéficier de la lumière réfléchie par les tuiles — mais le gain est faible et justifie rarement le surcoût.",
        ],
      },
      {
        heading: "Que faire en cas d'ombrage sur le toit nord?",
        content: [
          "L'ombrage est particulièrement problématique sur les toits nord. Solutions:",
          "Optimiseurs de modules: Petits appareils montés sur chaque module, empêchant qu'un module ombragé ne bride toute l'installation. Très recommandé pour les toits nord partiellement ombragés.",
          "Micro-onduleurs: Chaque module a son propre petit onduleur. Indépendance maximale en cas d'ombrage, mais coûts plus élevés.",
          "Disposition intelligente des modules: Un installateur expérimenté peut placer les modules de manière à minimiser les zones ombragées.",
        ],
      },
    ],
    faqs: [
      { question: "Une installation solaire sur un toit nord vaut-elle la peine en Suisse?", answer: "Oui, sous certaines conditions. Avec une pente faible (moins de 25°) et une autoconsommation élevée, un toit nord peut être rentable." },
      { question: "Quelle quantité d'électricité produit une installation sur un toit nord?", answer: "En Suisse, où la lumière diffuse est fréquente, la différence est souvent plus petite qu'attendu." },
      { question: "Quel angle d'inclinaison est optimal pour un toit nord?", answer: "Plus c'est plat, mieux c'est — avec une limite inférieure de 7°. À 7–20° d'inclinaison, un toit nord atteint les meilleurs rendements relatifs. Les toits nord raides de plus de 40° sont déconseillés." },
      { question: "Puis-je équiper simultanément un toit sud et nord?", answer: "Oui, et c'est souvent la meilleure solution. Le côté nord complète le côté sud — le matin et le soir, le toit nord contribue à la production. Le rendement total augmente et le taux d'autoconsommation s'améliore." },
      { question: "Quels modules conviennent le mieux aux toits nord?", answer: "Modules monocristallins N-Type (TOPCon ou HJT) de fabricants Tier-1. Ils produisent mieux sous lumière diffuse — ce qui fait la différence sur un toit nord." },
      { question: "Un système de stockage aide-t-il avec un toit nord?", answer: "Oui, nettement. Comme la rémunération de l'injection est de toute façon faible avec un toit nord, le stockage est économiquement particulièrement judicieux." },
    ],
    ctaHeading: "Même avec un toit nord — faites vérifier gratuitement",
    ctaText: "Un installateur certifié de votre canton analyse votre toit et vous dit honnêtement si une installation solaire vaut la peine — même avec une orientation nord. Comparez gratuitement jusqu'à 3 devis.",
    ctaButton: 'Demander un devis gratuit',
    formUrl: '/fr/demande',
    relatedSlugs: ['lohnt-sich-solaranlage-schweiz-2026', 'chinesische-vs-europaeische-solarmodule-schweiz', 'solaranlage-versicherung-schweiz'],
    relatedPageLinks: [
      { label: 'Solaire avec batterie', href: '/fr/solaire-avec-batterie' },
      { label: 'Comparer les types de panneaux', href: '/fr/types-panneaux-solaires' },
      { label: "Coûts installation solaire", href: '/fr/cout-installation-solaire' },
      { label: 'Climat suisse & PV', href: '/fr/photovoltaique-suisse' },
    ],
  },

  // ─── NORDDACH (EN) ───────────────────────────────────────────────────────────
  {
    slug: 'solaranlage-norddach-schweiz',
    locale: 'en',
    title: 'Solar panels on a north-facing roof — is it still worth it?',
    metaDescription: 'Do you have a north-facing roof? Is solar still worth it? Yield, costs and honest answers for Swiss homeowners — with real numbers and examples.',
    image: '/images/solaranlage-chalet-bewoelkt.webp',
    date: '24 May 2026',
    readMin: 10,
    tag: 'Guide',
    intro: '"My roof faces north — so solar is not an option for me." We hear this often. And it is not quite right. Yes, a north-facing roof is not ideal. But it does not rule out solar — especially if the pitch is shallow, self-consumption is high, or no other roof surface is available. This article honestly explains when a north-facing roof makes sense, when it does not — and what you can do to get the best out of your situation.',
    sections: [
      {
        heading: 'How much electricity does a solar system produce on a north-facing roof?',
        content: [
          "The honest answer: less than on a south-facing roof — but more than many think. Orientation and pitch are decisive. A shallow north-facing roof at 7–10° is more favourable than a steep one at 30° or 40°.",
          "The key insight: The flatter the north-facing roof, the better the yield.",
        ],
        stats: [
          { value: 'Flat = better', label: '20° pitch optimal for north roof' },
          { value: 'Self-consumption', label: 'is decisive for economic viability' },
        ],
      },
      {
        heading: 'Why a north-facing roof is not as bad as you think',
        content: [
          "1. Diffuse light — the underestimated factor: In Switzerland, the sky is often overcast. On cloudy days, a north-facing installation produces as much as south-facing ones — because diffuse light comes from all directions. In the Plateau, where fog is common, this effect is significant.",
          "2. Morning and evening sun in summer: In Swiss summer, the sun rises in the north-east and sets in the north-west. A north-facing roof receives direct sunlight in the morning and evening — exactly when self-consumption is often highest.",
          "3. Cooler modules = higher efficiency: Modules on a north-facing roof heat up less. Since efficiency drops with heat, north-facing modules can produce almost as much as south-facing ones on hot summer days.",
        ],
      },
      {
        heading: 'When does a north-facing roof make sense — and when not?',
        content: [
          'It makes sense when:',
        ],
        bullets: [
          '✅ Self-consumption is high — those who use the electricity themselves benefit even from less production',
          '✅ A battery storage system is in place — stores daytime electricity for the evening',
          '✅ No south-facing surface is available — north roof as the only option',
          '✅ The north roof is used in addition to a south surface — combination maximises total production',
          '✅ An EV or heat pump is present — high self-consumption makes north installations viable',
          '❌ Additional shading is present — north roof + shading = very little electricity',
          '❌ A south-facing surface is unused — cover south first, then check north',
        ],
      },
      {
        heading: 'South and north roof combination — the best solution',
        content: [
          "If your house has a gable roof with south and north sides, the optimal strategy is often: cover both sides.",
          "Advantages: More total production, more consistent production morning and evening, higher self-consumption, optimal daily coverage (north in morning/evening + south at midday).",
        ],
      },
      {
        heading: 'What is the optimal pitch angle for a north-facing roof?',
        content: [
          "Rule of thumb: The flatter the better — with a lower limit of 7°.",
          "Caution: Below 7° pitch there are self-cleaning problems — rainwater cannot drain well, leading to dirt build-up and reduced yield.",
        ],
      },
      {
        heading: 'Which modules are particularly suited to north-facing roofs?',
        content: [
          "Good performance in diffuse light: Monocrystalline N-Type modules (TOPCon, HJT) produce better in overcast conditions and diffuse light than older PERC technology — particularly recommended for north-facing roofs.",
          "Bifacial modules: On the north roof, bifacial modules can benefit from light reflected by roof tiles — but the additional yield is small and rarely justifies the extra cost.",
          "Recommendation: Tier-1 manufacturers with TOPCon or HJT technology.",
        ],
      },
      {
        heading: 'What to do with a shaded north-facing roof?',
        content: [
          "Shading is particularly critical on north-facing roofs. Solutions:",
          "Module optimisers: Small devices mounted on each module that prevent a shaded module from limiting the whole system. Highly recommended for north-facing roofs with partial shading.",
          "Micro-inverters: Each module has its own small inverter. Maximum independence from shading, but higher costs.",
          "Smart module placement: An experienced installer can arrange modules to minimise shaded areas.",
        ],
      },
    ],
    faqs: [
      { question: 'Is solar worth it on a north-facing roof in Switzerland?', answer: 'Yes, under certain conditions. With a shallow pitch (under 25°) and high self-consumption, a north-facing roof can be economically viable.' },
      { question: 'How much electricity does a solar system produce on a north-facing roof?', answer: "In Switzerland, where diffuse light is common, the difference is often smaller than expected." },
      { question: 'What pitch angle is optimal for a north-facing roof?', answer: 'The flatter the better — with a lower limit of 7°. At 7–20° pitch, a north-facing roof achieves the best relative yields. Steeper north roofs above 40° are not recommended.' },
      { question: 'Can I cover south and north roof simultaneously?', answer: 'Yes, and this is often the best solution. The north side complements the south — morning and evening the north roof contributes to production. Total yield increases and self-consumption rate improves.' },
      { question: 'Which modules are best for north-facing roofs?', answer: 'Monocrystalline N-Type modules (TOPCon or HJT technology) from Tier-1 manufacturers. They produce better in diffuse light — which makes the difference on a north roof.' },
      { question: 'Does battery storage help with a north-facing roof?', answer: 'Yes, significantly. Since the feed-in tariff is already low with a north roof, storage makes particularly good economic sense.' },
    ],
    ctaHeading: 'Even with a north-facing roof — get a free assessment',
    ctaText: 'A certified installer in your canton will analyse your roof and tell you honestly whether solar makes sense — even with a north orientation. Get up to 3 quotes for free.',
    ctaButton: 'Request free quote',
    formUrl: '/en/request',
    relatedSlugs: ['lohnt-sich-solaranlage-schweiz-2026', 'chinesische-vs-europaeische-solarmodule-schweiz', 'solaranlage-versicherung-schweiz'],
    relatedPageLinks: [
      { label: 'Solar with battery storage', href: '/en/solar-with-battery' },
      { label: 'Compare panel types', href: '/en/solar-panel-types' },
      { label: 'Solar system costs', href: '/en/solar-costs' },
      { label: 'Swiss climate & PV', href: '/en/solar-switzerland' },
    ],
  },

  // ─── NORDDACH (IT) ───────────────────────────────────────────────────────────
  {
    slug: 'solaranlage-norddach-schweiz',
    locale: 'it',
    title: 'Impianto solare su tetto nord — vale comunque la pena?',
    metaDescription: 'Avete un tetto esposto a nord? Vale comunque la pena un impianto solare? Resa, costi e risposte oneste per i proprietari svizzeri — con cifre reali ed esempi.',
    image: '/images/solaranlage-chalet-bewoelkt.webp',
    date: '24 maggio 2026',
    readMin: 10,
    tag: 'Guida',
    intro: '"Il mio tetto guarda a nord — quindi per me un impianto solare non è un\'opzione." Questa frase la sentiamo spesso. E non è del tutto corretta. Sì, un tetto nord non è ideale. Ma non esclude un impianto solare — specialmente se la pendenza è ridotta, l\'autoconsumo è elevato o non è disponibile un\'altra superficie del tetto. Questo articolo spiega onestamente quando vale la pena un tetto nord, quando no — e cosa potete fare per sfruttare al meglio la vostra situazione.',
    sections: [
      {
        heading: 'Quanta corrente produce un impianto solare su un tetto nord?',
        content: [
          "La risposta onesta: meno che su un tetto sud — ma più di quanto molti pensino. Orientamento e pendenza sono decisivi. Un tetto nord piatto di 7–10° è più favorevole di uno ripido di 30° o 40°.",
          "Il messaggio chiave: Più piatto è il tetto nord, migliore è la resa.",
        ],
        stats: [
          { value: 'Piatto = meglio', label: 'pendenza 20° ottimale per tetto nord' },
          { value: 'Autoconsumo', label: 'è decisivo per la redditività economica' },
        ],
      },
      {
        heading: 'Perché un tetto nord non è così problematico come si pensa?',
        content: [
          "1. Luce diffusa — il fattore sottovalutato: In Svizzera il cielo è spesso coperto. Con cielo nuvoloso un impianto su tetto nord produce quanto quelli su altre orientazioni — perché la luce diffusa proviene da tutte le direzioni. Nell'Altopiano, dove la nebbia è frequente, questo effetto è significativo.",
          "2. Sole mattutino e serale in estate: Nell'estate svizzera il sole sorge a nord-est e tramonta a nord-ovest. Un tetto nord riceve irraggiamento diretto al mattino e alla sera — proprio quando l'autoconsumo è spesso più elevato.",
          "3. Moduli più freddi = rendimento maggiore: I moduli su tetto nord si riscaldano meno. Poiché il rendimento diminuisce con il calore, i moduli nord possono produrre quasi quanto i moduli sud nelle calde giornate estive.",
        ],
      },
      {
        heading: 'Quando vale la pena un tetto nord — e quando no?',
        content: [
          'Vale la pena se:',
        ],
        bullets: [
          "✅ L'autoconsumo è elevato — chi consuma la corrente in proprio beneficia anche di una produzione inferiore",
          "✅ È presente un sistema di accumulo — immagazzina la corrente diurna per la sera",
          "✅ Non è disponibile una superficie sud — tetto nord come unica opzione",
          "✅ Il tetto nord è usato in aggiunta alla superficie sud — la combinazione massimizza la produzione",
          "✅ È presente un'auto elettrica o pompa di calore — l'alto autoconsumo rende redditizi anche gli impianti nord",
          "❌ È presente ulteriore ombreggiamento — tetto nord + ombra = pochissima corrente",
          "❌ Una superficie sud è inutilizzata — prima occupare il sud, poi valutare il nord",
        ],
      },
      {
        heading: 'Combinazione tetto sud e nord — la soluzione migliore',
        content: [
          "Se la vostra casa ha un tetto a capanna con lato sud e nord, la strategia ottimale è spesso: occupare entrambi i lati.",
          "Vantaggi: Più produzione totale, produzione più uniforme mattino e sera, maggiore autoconsumo, copertura ottimale della giornata (nord mattino/sera + sud mezzogiorno).",
        ],
      },
      {
        heading: "Qual è l'angolo di inclinazione ottimale per un tetto nord?",
        content: [
          "Regola generale: Più piatto è meglio — con un limite inferiore di 7°. Gli intervalli di 7–10° e 15–20° sono più favorevoli rispetto a 25–30°, 35–40° o pendenze ancora maggiori.",
          "Attenzione: Sotto i 7° di inclinazione ci sono problemi di autopulizia — l'acqua piovana non defluisce bene, causando sporcizia e resa ridotta.",
        ],
      },
      {
        heading: 'Quali moduli sono particolarmente adatti ai tetti nord?',
        content: [
          "Buona resa con luce diffusa: I moduli monocristallini di tipo N (TOPCon, HJT) producono meglio con cielo coperto e luce diffusa rispetto alla vecchia tecnologia PERC — particolarmente raccomandati per i tetti nord.",
          "Moduli bifacciali: Sul tetto nord i moduli bifacciali possono beneficiare della luce riflessa dalle tegole — ma il guadagno è ridotto e raramente giustifica il costo aggiuntivo.",
        ],
      },
      {
        heading: 'Cosa fare con un tetto nord ombreggiato?',
        content: [
          "L'ombreggiamento è particolarmente critico sui tetti nord. Soluzioni:",
          "Ottimizzatori di modulo: Piccoli dispositivi montati su ogni modulo che impediscono a un modulo ombreggiato di limitare l'intero impianto. Molto raccomandati per tetti nord con ombreggiamento parziale.",
          "Microinverter: Ogni modulo ha il proprio piccolo inverter. Massima indipendenza dall'ombreggiamento, ma costi più elevati.",
          "Disposizione intelligente dei moduli: Un installatore esperto può posizionare i moduli in modo da minimizzare le aree ombreggiate.",
        ],
      },
    ],
    faqs: [
      { question: "Vale la pena un impianto solare su un tetto nord in Svizzera?", answer: "Sì, a determinate condizioni. Con una pendenza ridotta e un alto autoconsumo, anche un tetto nord può essere redditizio. L'ammortamento richiede un po' più tempo, ma l'impianto si ripaga comunque." },
      { question: "Quanta corrente produce un impianto solare su un tetto nord?", answer: "In Svizzera, dove la luce diffusa è frequente, la differenza è spesso minore del previsto." },
      { question: "Qual è l'angolo di inclinazione ottimale per un tetto nord?", answer: "Più piatto è meglio — con un limite inferiore di 7°. Con 7–20° di inclinazione un tetto nord ottiene le migliori rese relative. I tetti nord ripidi oltre i 40° non sono raccomandati." },
      { question: "Posso equipaggiare contemporaneamente un tetto sud e nord?", answer: "Sì, ed è spesso la soluzione migliore. Il lato nord completa il lato sud — al mattino e alla sera il tetto nord contribuisce alla produzione. La resa totale aumenta e il tasso di autoconsumo migliora." },
      { question: "Quali moduli sono più adatti ai tetti nord?", answer: "Moduli monocristallini di tipo N (TOPCon o HJT) di produttori Tier-1. Producono meglio con luce diffusa — il che fa la differenza su un tetto nord." },
      { question: "Un sistema di accumulo aiuta con un tetto nord?", answer: "Sì, notevolmente. Poiché con un tetto nord il compenso per l'immissione è comunque basso, il sistema di accumulo ha un particolare senso economico." },
    ],
    ctaHeading: "Anche con tetto nord — fatelo verificare gratuitamente",
    ctaText: "Un installatore certificato del vostro Cantone analizza il vostro tetto e vi dice onestamente se un impianto solare vale la pena — anche con orientamento nord. Richiedete gratuitamente fino a 3 preventivi.",
    ctaButton: 'Richiedere preventivo gratuito',
    formUrl: '/it/richiesta',
    relatedSlugs: ['lohnt-sich-solaranlage-schweiz-2026', 'chinesische-vs-europaeische-solarmodule-schweiz', 'solaranlage-versicherung-schweiz'],
    relatedPageLinks: [
      { label: 'Solare con accumulo', href: '/it/solare-con-accumulo' },
      { label: 'Confronto tipi di pannelli', href: '/it/tipi-pannelli-solari' },
      { label: 'Costi impianto solare', href: '/it/costi-impianto-solare' },
      { label: 'Clima svizzero & FV', href: '/it/fotovoltaico-svizzera' },
    ],
  },

];

/**
 * Authored metadata titles. The site metadata helper appends " | PvPro.ch",
 * so every value remains at or below 49 characters and never includes brand
 * text itself. Keep display titles above independent of this concise SEO copy.
 */
const manualSeoTitles: Record<BlogArticle['locale'], Record<string, string>> = {
  de: {
    'balkonkraftwerk-schweiz': 'Balkonkraftwerk Schweiz: Regeln & Kosten',
    'solaranlage-winter-schweiz': 'Solaranlage im Winter: Schnee & Ertrag',
    'foerderungen-photovoltaik-2026': 'PV-Förderungen Schweiz 2026',
    'batteriespeicher-solaranlage-lohnt-sich': 'Batteriespeicher: Lohnt er sich?',
    'richtigen-solarinstallateur-schweiz-waehlen': 'Solarinstallateur wählen: 7 Kriterien',
    'eigenverbrauch-optimieren-solar': 'Solar-Eigenverbrauch optimieren',
    'roi-photovoltaik-schweiz': 'Solar-ROI Schweiz: Amortisation',
    'lohnt-sich-solaranlage-schweiz-2026': 'Lohnt sich Solar in der Schweiz 2026?',
    'solaranlage-steuerabzug-schweiz-2026': 'Solaranlage: Steuerabzug 2026',
    'solaranlage-waermepumpe-kombinieren-schweiz': 'Solar & Wärmepumpe Schweiz 2026',
    'besten-solarinstallateur-schweiz-finden': 'Beste Solarinstallateure Schweiz 2026',
    'batteriespeicher-brandgefahr-sicherheit-schweiz': 'Batteriespeicher: Brandschutz',
    'solaranlage-installateur-konkurs-garantie-schweiz': 'Solarinstallateur insolvent: Garantie',
    'solaranlage-versicherung-schweiz': 'Solaranlage: Versicherung Schweiz',
    'chinesische-vs-europaeische-solarmodule-schweiz': 'Chinesische vs. europäische Solarmodule',
    'solaranlage-norddach-schweiz': 'Solaranlage auf dem Norddach',
  },
  fr: {
    'balkonkraftwerk-schweiz': 'Balcon solaire: règles en Suisse',
    'solaranlage-winter-schweiz': 'Panneaux solaires en hiver suisse',
    'foerderungen-photovoltaik-2026': 'Subventions solaires Suisse 2026',
    'batteriespeicher-solaranlage-lohnt-sich': 'Batterie solaire : est-ce rentable ?',
    'richtigen-solarinstallateur-schweiz-waehlen': 'Choisir son installateur solaire',
    'eigenverbrauch-optimieren-solar': 'Optimiser son autoconsommation solaire',
    'roi-photovoltaik-schweiz': 'ROI solaire en Suisse : amortissement',
    'lohnt-sich-solaranlage-schweiz-2026': 'Solaire en Suisse : rentable en 2026 ?',
    'solaranlage-steuerabzug-schweiz-2026': 'Déduction solaire Suisse 2026',
    'solaranlage-waermepumpe-kombinieren-schweiz': 'Solaire et pompe à chaleur en Suisse',
    'besten-solarinstallateur-schweiz-finden': 'Meilleur installateur solaire en Suisse',
    'batteriespeicher-brandgefahr-sicherheit-schweiz': 'Batterie solaire : sécurité incendie',
    'solaranlage-installateur-konkurs-garantie-schweiz': 'Faillite installateur solaire : garanties',
    'solaranlage-versicherung-schweiz': 'Assurance installation solaire Suisse',
    'chinesische-vs-europaeische-solarmodule-schweiz': 'Panneaux chinois ou européens',
    'solaranlage-norddach-schweiz': 'Panneaux solaires sur toit nord',
  },
  en: {
    'balkonkraftwerk-schweiz': 'Balcony solar in Switzerland: rules & costs',
    'solaranlage-winter-schweiz': 'Solar panels in Swiss winter',
    'foerderungen-photovoltaik-2026': 'Swiss solar subsidies 2026',
    'batteriespeicher-solaranlage-lohnt-sich': 'Solar battery storage: is it worth it?',
    'richtigen-solarinstallateur-schweiz-waehlen': 'Choose a Swiss solar installer',
    'eigenverbrauch-optimieren-solar': 'Optimise solar self-consumption',
    'roi-photovoltaik-schweiz': 'Solar ROI in Switzerland',
    'lohnt-sich-solaranlage-schweiz-2026': 'Is solar worth it in Switzerland in 2026?',
    'solaranlage-steuerabzug-schweiz-2026': 'Swiss solar tax deduction 2026',
    'solaranlage-waermepumpe-kombinieren-schweiz': 'Solar panels and heat pumps in Switzerland',
    'besten-solarinstallateur-schweiz-finden': 'Best solar installers in Switzerland',
    'batteriespeicher-brandgefahr-sicherheit-schweiz': 'Solar battery fire safety',
    'solaranlage-installateur-konkurs-garantie-schweiz': 'Installer bankruptcy: solar warranties',
    'solaranlage-versicherung-schweiz': 'Solar panel insurance in Switzerland',
    'chinesische-vs-europaeische-solarmodule-schweiz': 'Chinese vs. European solar panels',
    'solaranlage-norddach-schweiz': 'Solar panels on a north-facing roof',
  },
  it: {
    'balkonkraftwerk-schweiz': 'Solare da balcone in Svizzera',
    'solaranlage-winter-schweiz': 'Pannelli solari nell’inverno svizzero',
    'foerderungen-photovoltaik-2026': 'Incentivi solari Svizzera 2026',
    'batteriespeicher-solaranlage-lohnt-sich': 'Batteria solare: conviene?',
    'richtigen-solarinstallateur-schweiz-waehlen': 'Scegliere un installatore solare',
    'eigenverbrauch-optimieren-solar': 'Ottimizzare l’autoconsumo solare',
    'roi-photovoltaik-schweiz': 'ROI solare in Svizzera',
    'lohnt-sich-solaranlage-schweiz-2026': 'Il solare conviene in Svizzera nel 2026?',
    'solaranlage-steuerabzug-schweiz-2026': 'Detrazione solare Svizzera 2026',
    'solaranlage-waermepumpe-kombinieren-schweiz': 'Solare e pompa di calore in Svizzera',
    'besten-solarinstallateur-schweiz-finden': 'Migliori installatori solari svizzeri',
    'batteriespeicher-brandgefahr-sicherheit-schweiz': 'Batterie solari: sicurezza incendio',
    'solaranlage-installateur-konkurs-garantie-schweiz': 'Fallimento installatore: garanzie',
    'solaranlage-versicherung-schweiz': 'Assicurazione impianto solare Svizzera',
    'chinesische-vs-europaeische-solarmodule-schweiz': 'Pannelli cinesi o europei',
    'solaranlage-norddach-schweiz': 'Impianto solare su tetto nord',
  },
};

export function getBlogArticle(slug: string, locale: string): BlogArticle | undefined {
  const manual = articles.find(a => a.slug === slug && a.locale === locale);
  if (manual) {
    const sections = manual.sections
      .filter(section => !removedClaimPlaceholders.has(section.heading))
      .map(section => ({
        ...section,
        content: section.content.filter(value => !removedClaimPlaceholders.has(value)),
        bullets: section.bullets?.filter(value => !removedClaimPlaceholders.has(value)),
        stats: section.stats?.filter(stat =>
          !removedClaimPlaceholders.has(stat.label) && !removedClaimPlaceholders.has(stat.value)),
        highlight: section.highlight && !removedClaimPlaceholders.has(section.highlight)
          ? section.highlight
          : undefined,
      }))
      .filter(section =>
        section.content.length > 0
        || (section.bullets?.length ?? 0) > 0
        || (section.stats?.length ?? 0) > 0
        || Boolean(section.highlight));
    const faqs = manual.faqs.filter(faq =>
      !removedClaimPlaceholders.has(faq.question) && !removedClaimPlaceholders.has(faq.answer));
    return {
      ...manual,
      seoTitle: manualSeoTitles[manual.locale][manual.slug],
      sections,
      faqs,
    };
  }
  // Previously generated articles stored as local JSON — server-side only.
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { getAutoArticle } = require('./autoBlog') as typeof import('./autoBlog');
  return getAutoArticle(slug, locale);
}

export function getBlogArticleSlugs(): string[] {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { getAutoSlugs } = require('./autoBlog') as typeof import('./autoBlog');
  return [...new Set([...articles.map(a => a.slug), ...getAutoSlugs()])];
}
