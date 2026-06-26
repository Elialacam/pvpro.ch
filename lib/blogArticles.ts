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
  metaDescription: string;
  image: string;
  date: string;
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
        stats: [{ label: 'Module', value: '1–2' }, { label: 'Max. Leistung', value: '800 W' }, { label: 'Produktion/Jahr', value: '200–600 kWh' }, { label: 'Einsparung/Jahr', value: '50–150 CHF' }],
      },
      {
        heading: 'Sind Balkonkraftwerke in der Schweiz erlaubt?',
        content: ['Ja – grundsätzlich erlaubt, aber mit klaren Regeln. Anlage muss beim Netzbetreiber gemeldet werden. Anlagen über 800 Watt sind nicht einfach plug-and-play erlaubt und benötigen Genehmigungen.'],
        bullets: ['Anmeldung beim Netzbetreiber ist Pflicht', 'Max. 800 W für Plug-and-Play-Betrieb', 'Sicherheitsvorschriften müssen eingehalten werden', 'Nicht angemeldete Anlagen können abgeschaltet werden'],
      },
      {
        heading: 'Wie viel Strom produziert ein Balkonkraftwerk?',
        content: ['Ein typisches Balkonkraftwerk produziert ca. 200–600 kWh pro Jahr – das entspricht dem Grundverbrauch weniger Geräte. Für den Grossteil des Haushaltsstroms reicht das bei weitem nicht.', 'Eine vollwertige 10-kWp-Solaranlage produziert dagegen 9\'000–11\'000 kWh pro Jahr – das ist 15–20× mehr.'],
        highlight: 'Eine vollwertige Solaranlage produziert 15–20× mehr Strom als ein Balkonkraftwerk.',
      },
      {
        heading: 'Wann ist eine Solaranlage die bessere Wahl?',
        content: ['Als Eigentümer eines Hauses mit geeignetem Dach ist eine vollwertige Solaranlage fast immer die rentablere Lösung. Sie sparen jährlich 1\'500–3\'000 CHF und profitieren von der Einmalvergütung (EIV) und kantonalen Förderungen.'],
        bullets: ['Eigentümer eines Hauses: Solaranlage klar besser', 'Mieter oder ohne geeignetes Dach: Balkonkraftwerk sinnvoll', 'Solaranlage steigert den Immobilienwert', 'EIV-Förderung nur für vollwertige Anlagen'],
      },
    ],
    ctaHeading: 'Als Hauseigentümer: Jetzt Offerte vergleichen',
    ctaText: 'Eine vollwertige Solaranlage spart Ihnen jährlich 10–20× mehr als ein Balkonkraftwerk. Vergleichen Sie kostenlos bis zu 3 Offerten.',
    ctaButton: 'Kostenlose Offerte anfordern',
    formUrl: '/anfrage',
    relatedSlugs: ['roi-photovoltaik-schweiz', 'foerderungen-photovoltaik-2026', 'batteriespeicher-solaranlage-lohnt-sich'],
    faqs: [
      { question: 'Brauche ich in der Schweiz eine Bewilligung für ein Balkonkraftwerk?', answer: 'Keine formelle Baubewilligung, aber eine Anmeldung beim Netzbetreiber ist Pflicht. Dieser muss die Anlage in sein System aufnehmen. Nicht angemeldete Anlagen können abgeschaltet werden.' },
      { question: 'Wie hoch ist die Einsparung mit einem Balkonkraftwerk?', answer: 'Realistisch 50–150 CHF pro Jahr, je nach Sonnenstunden, Ausrichtung und Eigenverbrauchsquote. Eine vollwertige 5-kWp-Solaranlage spart dagegen 1\'200–1\'800 CHF pro Jahr.' },
      { question: 'Kann ich als Mieter ein Balkonkraftwerk installieren?', answer: 'Grundsätzlich ja, aber Sie benötigen die Zustimmung Ihres Vermieters. Das Gerät muss sicher befestigt sein und die Anmeldung beim Netzbetreiber erfolgen.' },
      { question: 'Lohnt sich ein Balkonkraftwerk für Hauseigentümer?', answer: 'Für Hauseigentümer mit einem geeigneten Dach ist eine vollwertige Solaranlage fast immer die viel rentablere Option. Mit EIV-Förderung und kantonalen Beiträgen amortisiert sie sich in 7–10 Jahren.' },
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
        stats: [{ label: 'Panneaux', value: '1–2' }, { label: 'Puissance max.', value: '800 W' }, { label: 'Production/an', value: '200–600 kWh' }, { label: 'Économie/an', value: '50–150 CHF' }],
      },
      {
        heading: 'Les mini-centrales de balcon sont-elles autorisées en Suisse?',
        content: ["Oui – en principe autorisées, mais avec des règles strictes. L'installation doit être annoncée au gestionnaire de réseau. Les appareils de plus de 800 W nécessitent des autorisations spéciales."],
        bullets: ["Annonce obligatoire auprès du gestionnaire de réseau", "Max. 800 W pour un fonctionnement plug-and-play", "Les normes de sécurité doivent être respectées", "Les installations non déclarées peuvent être déconnectées"],
      },
      {
        heading: 'Quelle électricité produit une mini-centrale de balcon?',
        content: ["Une mini-centrale typique produit environ 200–600 kWh par an – à peine de quoi couvrir quelques appareils. Pour la majeure partie de la consommation du ménage, c'est insuffisant.", "Une installation solaire complète de 10 kWc produit en revanche 9'000–11'000 kWh par an – soit 15 à 20 fois plus."],
        highlight: "Une installation solaire complète produit 15–20 fois plus d'électricité qu'une mini-centrale de balcon.",
      },
      {
        heading: "Quand l'installation solaire complète est-elle plus avantageuse?",
        content: ["Pour les propriétaires d'une maison avec un toit adapté, une installation complète est presque toujours plus rentable. Vous économisez 1'500–3'000 CHF par an et bénéficiez de la rétribution unique (RU) et des subventions cantonales."],
        bullets: ["Propriétaire avec toit adapté: installation solaire clairement plus avantageuse", "Locataire ou sans toit: mini-centrale de balcon utile", "L'installation solaire valorise le bien immobilier", "La RU fédérale ne s'applique qu'aux installations complètes"],
      },
    ],
    ctaHeading: "Propriétaire? Comparez jusqu'à 3 offres gratuitement",
    ctaText: "Une installation solaire complète vous fait économiser 10 à 20 fois plus par an qu'une mini-centrale de balcon. Comparez gratuitement jusqu'à 3 offres.",
    ctaButton: 'Demander une offre gratuite',
    formUrl: '/fr/demande',
    relatedSlugs: ['roi-photovoltaik-schweiz', 'foerderungen-photovoltaik-2026', 'batteriespeicher-solaranlage-lohnt-sich'],
    faqs: [
      { question: "Ai-je besoin d'une autorisation pour une mini-centrale de balcon en Suisse?", answer: "Pas de permis de construire formel, mais une annonce au gestionnaire de réseau est obligatoire. Les installations non déclarées peuvent être déconnectées." },
      { question: "Quelle est l'économie réelle avec une mini-centrale de balcon?", answer: "Réalistement 50–150 CHF par an selon l'ensoleillement et le taux d'autoconsommation. Une installation solaire complète de 5 kWc économise en revanche 1'200–1'800 CHF par an." },
      { question: "Un locataire peut-il installer une mini-centrale de balcon?", answer: "Oui, en principe, mais l'accord du propriétaire est nécessaire. L'appareil doit être fixé de manière sécurisée et déclaré au gestionnaire de réseau." },
      { question: "Est-ce rentable pour un propriétaire?", answer: "Pour un propriétaire avec un toit adapté, une installation solaire complète est presque toujours bien plus rentable. Avec la RU fédérale et les aides cantonales, elle s'amortit en 7–10 ans." },
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
        stats: [{ label: 'Panels', value: '1–2' }, { label: 'Max. output', value: '800 W' }, { label: 'Production/year', value: '200–600 kWh' }, { label: 'Savings/year', value: 'CHF 50–150' }],
      },
      {
        heading: 'Are balcony power stations legal in Switzerland?',
        content: ['Yes – generally allowed, but with clear rules. The installation must be registered with your grid operator. Devices over 800 W are not simple plug-and-play and require special approvals.'],
        bullets: ['Registration with grid operator is mandatory', 'Max. 800 W for plug-and-play operation', 'Safety regulations must be followed', 'Unregistered systems can be disconnected'],
      },
      {
        heading: 'How much electricity does a balcony power station produce?',
        content: ['A typical balcony power station produces about 200–600 kWh per year – barely enough to cover a few household appliances.', 'A full 10 kWp solar system, by contrast, produces 9,000–11,000 kWh per year – that is 15–20 times more.'],
        highlight: 'A full solar system produces 15–20 times more electricity than a balcony power station.',
      },
      {
        heading: 'When is a full solar system the better choice?',
        content: ['For homeowners with a suitable roof, a full solar system is almost always the more profitable choice. You save CHF 1,500–3,000 per year and benefit from the federal one-time payment (EIV) and cantonal subsidies.'],
        bullets: ['Homeowner with suitable roof: full solar system clearly better', 'Renter or without a roof: balcony power station useful', 'Solar system increases property value', 'EIV subsidy only applies to full systems'],
      },
    ],
    ctaHeading: 'Homeowner? Compare up to 3 free quotes now',
    ctaText: 'A full solar system saves you 10–20 times more per year than a balcony power station. Compare up to 3 quotes for free.',
    ctaButton: 'Request a free quote',
    formUrl: '/en/request',
    relatedSlugs: ['roi-photovoltaik-schweiz', 'foerderungen-photovoltaik-2026', 'batteriespeicher-solaranlage-lohnt-sich'],
    faqs: [
      { question: 'Do I need a permit for a balcony power station in Switzerland?', answer: 'No formal building permit, but registration with your grid operator is mandatory. Unregistered systems can be disconnected.' },
      { question: 'How much can I save with a balcony power station?', answer: 'Realistically CHF 50–150 per year, depending on sunshine hours and self-consumption rate. A full 5 kWp solar system saves CHF 1,200–1,800 per year.' },
      { question: 'Can a renter install a balcony power station?', answer: "Yes in principle, but you need your landlord's consent. The device must be securely fixed and registered with the grid operator." },
      { question: 'Is it worth it for homeowners?', answer: 'For homeowners with a suitable roof, a full solar system is almost always far more profitable. With federal and cantonal subsidies, it typically pays off in 7–10 years.' },
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
        stats: [{ label: 'Pannelli', value: '1–2' }, { label: 'Potenza max.', value: '800 W' }, { label: 'Produzione/anno', value: '200–600 kWh' }, { label: 'Risparmio/anno', value: 'CHF 50–150' }],
      },
      {
        heading: 'I mini impianti da balcone sono permessi in Svizzera?',
        content: ["Sì – in linea di principio permessi, ma con regole precise. L'impianto deve essere registrato presso il gestore di rete. I dispositivi sopra gli 800 W non sono semplici plug-and-play e richiedono autorizzazioni speciali."],
        bullets: ["Registrazione presso il gestore di rete obbligatoria", "Max. 800 W per il funzionamento plug-and-play", "Le norme di sicurezza devono essere rispettate", "Gli impianti non registrati possono essere disconnessi"],
      },
      {
        heading: 'Quanta energia produce un mini impianto da balcone?',
        content: ["Un mini impianto tipico produce circa 200–600 kWh all'anno – appena sufficiente per qualche apparecchio domestico. Per la maggior parte del consumo familiare non è sufficiente.", "Un impianto fotovoltaico completo da 10 kWp produce invece 9.000–11.000 kWh all'anno – 15–20 volte di più."],
        highlight: "Un impianto fotovoltaico completo produce 15–20 volte più energia di un mini impianto da balcone.",
      },
      {
        heading: "Quando l'impianto fotovoltaico completo è la scelta migliore?",
        content: ["Per i proprietari con un tetto adatto, un impianto completo è quasi sempre l'opzione più redditizia. Si risparmiano 1.500–3.000 CHF l'anno e si beneficia della Remunerazione Unica (RU) e degli incentivi cantonali."],
        bullets: ["Proprietario con tetto adatto: impianto completo molto più conveniente", "Affittuario o senza tetto: mini impianto da balcone utile", "L'impianto solare aumenta il valore dell'immobile", "La RU federale si applica solo agli impianti completi"],
      },
    ],
    ctaHeading: "Proprietario? Confronta fino a 3 preventivi gratis",
    ctaText: "Un impianto fotovoltaico completo ti fa risparmiare 10–20 volte di più all'anno rispetto a un mini impianto da balcone. Confronta gratuitamente fino a 3 preventivi.",
    ctaButton: 'Richiedi preventivo gratuito',
    formUrl: '/it/richiesta',
    relatedSlugs: ['roi-photovoltaik-schweiz', 'foerderungen-photovoltaik-2026', 'batteriespeicher-solaranlage-lohnt-sich'],
    faqs: [
      { question: "Ho bisogno di un permesso per un mini impianto da balcone in Svizzera?", answer: "Non è richiesto un permesso edilizio formale, ma la registrazione presso il gestore di rete è obbligatoria. Gli impianti non registrati possono essere disconnessi." },
      { question: "Quanto risparmio con un mini impianto da balcone?", answer: "Realisticamente 50–150 CHF all'anno, a seconda dell'irraggiamento e del tasso di autoconsumo. Un impianto fotovoltaico completo da 5 kWp risparmia invece 1.200–1.800 CHF all'anno." },
      { question: "Un affittuario può installare un mini impianto da balcone?", answer: "Sì in linea di principio, ma è necessario il consenso del proprietario. Il dispositivo deve essere fissato in modo sicuro e registrato presso il gestore di rete." },
      { question: "Conviene per i proprietari di casa?", answer: "Per i proprietari con un tetto adatto, un impianto fotovoltaico completo è quasi sempre molto più redditizio. Con la RU federale e gli incentivi cantonali, si ammortizza in 7–10 anni." },
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
        content: ['Viele denken, Solaranlagen seien im Winter nutzlos. Das Gegenteil ist wahr: Kalte Temperaturen verbessern die Effizienz von Solarmodulen. Photovoltaikzellen arbeiten bei niedrigen Temperaturen physikalisch effizienter als bei Hitze – der sogenannte Temperaturkoeffizient wirkt positiv.', 'Im Schweizer Winter produziert eine gut ausgerichtete Anlage typischerweise 10–20% ihrer Jahresproduktion. Bei einem 8-kWp-System sind das noch immer 800–1\'600 kWh im Winter.'],
        stats: [{ label: 'Winteranteil', value: '10–20%' }, { label: 'Effizienz bei Kälte', value: '+5%' }, { label: 'Dezember/Januar', value: '200–400 kWh' }, { label: 'Schneeabrutschen', value: 'ab 35°' }],
      },
      {
        heading: 'Schnee auf den Modulen: Problem oder Kleinigkeit?',
        content: ['Schnee auf den Modulen reduziert kurzfristig die Produktion. Doch die Praxis zeigt: Bei einer Neigung von mehr als 35° rutscht Schnee in der Regel innerhalb von 1–3 Sonnentagen von selbst ab. Zudem heizt die schwarze Moduloberfläche auf und schmilzt die Schneedecke.', 'Für Flachdächer empfehlen wir eine Aufständerung mit mindestens 15–20° Neigung, um Schneeakkumulation zu minimieren und gleichzeitig die Winterproduktion zu maximieren.'],
        bullets: ['Neigung ab 35°: Schnee rutscht selbst ab', 'Schwarze Oberfläche schmilzt Schnee aktiv', 'Flachdächer: Aufständerung mit 15–20° empfohlen', 'Neue bifaziale Module nutzen Schnee-Reflexion'],
      },
      {
        heading: 'Der Winterstrombonus 2026: Neue Förderung für steile Anlagen',
        content: ['Ab 2026 belohnt der Bund Solaranlagen mit steilerer Neigung (ab 60°) und guter Winterproduktion mit einem Winterstrombonus. Anlagen an Südfassaden oder steilen Dächern erhalten bis zu 20% mehr Förderung, weil sie im Winter proportional mehr produzieren.', 'Dieser Bonus ist besonders relevant für Berggebiete in der Schweiz, wo der Winter länger dauert und die Schneereflexion die Produktion zusätzlich steigert.'],
        highlight: 'Steile Anlagen ab 60° Neigung erhalten 2026 einen Winterstrombonus von bis zu 20% mehr EIV.',
      },
      {
        heading: 'Jahresproduktion in der Schweiz: Sommer vs. Winter',
        content: ['Ein typisches 8-kWp-System in Zürich produziert im Juni ca. 900 kWh, im Dezember ca. 180 kWh. Das Verhältnis ist 5:1, aber auch der Dezember-Beitrag macht einen Unterschied – jede eingesparte kWh bedeutet weniger Strom vom Netz zu 28–34 Rp./kWh.'],
        bullets: ['Juni (Zürich): ~900 kWh', 'Dezember (Zürich): ~180 kWh', 'Tessin Dezember: bis 280 kWh', 'Graubünden (Höhe): bis 320 kWh dank Schneereflexion'],
      },
    ],
    ctaHeading: 'Solaranlage das ganze Jahr nutzen – jetzt Offerte holen',
    ctaText: 'Eine moderne Solaranlage produziert 12 Monate lang Strom. Holen Sie jetzt 3 kostenlose Offerten und profitieren Sie vom Winterstrombonus 2026.',
    ctaButton: 'Jetzt kostenlose Offerte anfordern',
    formUrl: '/anfrage',
    relatedSlugs: ['roi-photovoltaik-schweiz', 'eigenverbrauch-optimieren-solar', 'batteriespeicher-solaranlage-lohnt-sich'],
    relatedPageLinks: [{ label: 'Photovoltaik im Schweizer Klima', href: '/photovoltaik-schweizer-klima' }],
    faqs: [
      { question: 'Produziert meine Solaranlage im Winter überhaupt Strom?', answer: 'Ja, definitiv. Auch im Schweizer Winter produziert eine gut ausgerichtete Anlage 10–20% ihrer Jahresproduktion. Kalte Temperaturen verbessern sogar die Effizienz der Zellen.' },
      { question: 'Muss ich Schnee von meinen Solarmodulen entfernen?', answer: 'In der Regel nicht. Bei einer Neigung über 35° rutscht Schnee selbst innerhalb von 1–3 sonnigen Tagen ab. Die schwarze Moduloberfläche hilft dabei, Schnee aktiv zu schmelzen.' },
      { question: 'Was ist der Winterstrombonus 2026?', answer: 'Der Bund belohnt ab 2026 Anlagen mit steiler Neigung (ab 60°) mit einem Zusatzbonus auf die EIV. Diese Anlagen produzieren im Winter proportional mehr Strom und erhalten bis zu 20% mehr Förderung.' },
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
        content: ["Beaucoup pensent que les panneaux solaires sont inutiles en hiver. C'est faux: les températures froides améliorent l'efficacité des modules solaires. Les cellules photovoltaïques fonctionnent mieux physiquement par temps froid que par chaleur.", "En hiver suisse, une installation bien orientée produit typiquement 10–20% de sa production annuelle. Pour un système de 8 kWc, c'est encore 800–1'600 kWh en hiver."],
        stats: [{ label: 'Part hivernale', value: '10–20%' }, { label: 'Efficacité par froid', value: '+5%' }, { label: 'Décembre/Janvier', value: '200–400 kWh' }, { label: 'Glissement de neige', value: 'dès 35°' }],
      },
      {
        heading: 'La neige sur les panneaux: un problème ou une bagatelle?',
        content: ["La neige sur les panneaux réduit temporairement la production. Mais la pratique montre: avec une inclinaison de plus de 35°, la neige glisse généralement d'elle-même en 1–3 jours de soleil. De plus, la surface noire des modules chauffe et fait fondre la neige.", "Pour les toits plats, nous recommandons une inclinaison de 15–20° minimum pour minimiser l'accumulation de neige."],
        bullets: ["Inclinaison dès 35°: la neige glisse d'elle-même", "La surface noire fait fondre la neige activement", "Toits plats: inclinaison de 15–20° recommandée", "Les nouveaux modules bifaciaux utilisent la réflexion de la neige"],
      },
      {
        heading: "Le bonus d'hiver 2026: nouvelle aide pour les installations inclinées",
        content: ["Dès 2026, la Confédération récompense les installations solaires très inclinées (dès 60°) avec un bonus d'hiver. Les installations sur façades sud ou toits très pentus reçoivent jusqu'à 20% de subvention supplémentaire.", "Ce bonus est particulièrement pertinent pour les régions alpines suisses, où l'hiver dure plus longtemps et où la réflexion de la neige augmente la production."],
        highlight: "Les installations très inclinées (dès 60°) reçoivent un bonus d'hiver pouvant atteindre 20% de RU supplémentaire en 2026.",
      },
      {
        heading: 'Production annuelle en Suisse: été vs hiver',
        content: ["Un système typique de 8 kWc à Genève produit environ 950 kWh en juin et environ 200 kWh en décembre. Le ratio est de 5:1, mais la contribution de décembre est aussi précieuse – chaque kWh économisé représente moins d'achat sur le réseau à 30–35 ct./kWh."],
        bullets: ["Juin (Genève): ~950 kWh", "Décembre (Genève): ~200 kWh", "Valais décembre: jusqu'à 350 kWh", "Grisons (altitude): jusqu'à 320 kWh grâce à la réflexion de la neige"],
      },
    ],
    ctaHeading: "Profitez du solaire toute l'année – demandez une offre",
    ctaText: "Une installation solaire moderne produit de l'électricité 12 mois par an. Obtenez 3 offres gratuites et profitez du bonus d'hiver 2026.",
    ctaButton: 'Demander une offre gratuite',
    formUrl: '/fr/demande',
    relatedSlugs: ['roi-photovoltaik-schweiz', 'eigenverbrauch-optimieren-solar', 'batteriespeicher-solaranlage-lohnt-sich'],
    faqs: [
      { question: "Mon installation solaire produit-elle de l'électricité en hiver?", answer: "Oui, certainement. Même en hiver suisse, une installation bien orientée produit 10–20% de sa production annuelle. Les températures froides améliorent même l'efficacité des cellules." },
      { question: "Dois-je enlever la neige de mes panneaux solaires?", answer: "En général non. Avec une inclinaison de plus de 35°, la neige glisse d'elle-même en 1–3 jours de soleil. La surface noire des modules aide à faire fondre la neige activement." },
      { question: "Qu'est-ce que le bonus d'hiver 2026?", answer: "La Confédération récompense dès 2026 les installations très inclinées (dès 60°) avec un bonus sur la RU. Ces installations produisent proportionnellement plus en hiver et reçoivent jusqu'à 20% de subvention supplémentaire." },
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
        content: ['Many people assume solar panels are useless in winter. The opposite is true: cold temperatures actually improve the efficiency of solar modules. PV cells work better physically at low temperatures than in heat.', 'In a Swiss winter, a well-oriented system typically produces 10–20% of its annual output. For an 8 kWp system, that is still 800–1,600 kWh over winter.'],
        stats: [{ label: 'Winter share', value: '10–20%' }, { label: 'Efficiency in cold', value: '+5%' }, { label: 'December/January', value: '200–400 kWh' }, { label: 'Snow slides off', value: 'from 35°' }],
      },
      {
        heading: 'Snow on the panels: a problem or a minor issue?',
        content: ['Snow on panels temporarily reduces output. But in practice: with a tilt angle of more than 35°, snow typically slides off by itself within 1–3 sunny days. The black module surface also heats up and melts the snow cover.', 'For flat roofs, we recommend mounting at 15–20° tilt to minimise snow accumulation and maximise winter production.'],
        bullets: ['Tilt from 35°: snow slides off naturally', 'Black surface actively melts snow', 'Flat roofs: 15–20° tilt recommended', 'New bifacial modules use snow reflection'],
      },
      {
        heading: 'The 2026 winter power bonus: new subsidy for steep installations',
        content: ['From 2026, the Swiss federal government rewards solar installations with steep tilt angles (from 60°) and good winter production with a winter power bonus. South-facing walls and steep roof installations receive up to 20% more subsidy.', 'This bonus is especially relevant for alpine regions, where winter lasts longer and snow reflection boosts production further.'],
        highlight: 'Steep installations from 60° tilt receive a 2026 winter power bonus of up to 20% additional EIV.',
      },
      {
        heading: 'Annual production in Switzerland: summer vs winter',
        content: ['A typical 8 kWp system in Zurich produces around 900 kWh in June and around 180 kWh in December. The ratio is 5:1, but even the December contribution matters – every kWh saved avoids grid electricity at CHF 0.28–0.34/kWh.'],
        bullets: ['June (Zurich): ~900 kWh', 'December (Zurich): ~180 kWh', 'Ticino December: up to 280 kWh', 'Grisons (altitude): up to 320 kWh thanks to snow reflection'],
      },
    ],
    ctaHeading: 'Get solar working year-round – request a quote now',
    ctaText: 'A modern solar system produces electricity 12 months a year. Get 3 free quotes now and benefit from the 2026 winter power bonus.',
    ctaButton: 'Request a free quote',
    formUrl: '/en/request',
    relatedSlugs: ['roi-photovoltaik-schweiz', 'eigenverbrauch-optimieren-solar', 'batteriespeicher-solaranlage-lohnt-sich'],
    faqs: [
      { question: 'Does my solar system produce electricity in winter?', answer: 'Yes, definitely. Even in a Swiss winter, a well-oriented system produces 10–20% of its annual output. Cold temperatures actually improve cell efficiency.' },
      { question: 'Do I need to remove snow from my solar panels?', answer: 'Generally no. With a tilt angle over 35°, snow slides off by itself within 1–3 sunny days. The black module surface helps melt snow actively.' },
      { question: 'What is the 2026 winter power bonus?', answer: 'The Swiss government rewards steep installations (from 60° tilt) with a bonus on the EIV subsidy from 2026. These systems produce proportionally more in winter and receive up to 20% extra subsidy.' },
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
        content: ["In molti pensano che i pannelli solari siano inutili d'inverno. È falso: le temperature fredde migliorano l'efficienza dei moduli solari. Le celle fotovoltaiche funzionano fisicamente meglio a basse temperature che al caldo.", "Nell'inverno svizzero, un impianto ben orientato produce tipicamente il 10–20% della sua produzione annuale. Per un sistema da 8 kWp, sono ancora 800–1.600 kWh in inverno."],
        stats: [{ label: 'Quota invernale', value: '10–20%' }, { label: 'Efficienza al freddo', value: '+5%' }, { label: 'Dicembre/Gennaio', value: '200–400 kWh' }, { label: 'Neve scivolante', value: 'da 35°' }],
      },
      {
        heading: 'Neve sui pannelli: un problema o una piccola cosa?',
        content: ["La neve sui pannelli riduce temporaneamente la produzione. Ma la pratica dimostra: con un'inclinazione superiore a 35°, la neve di solito scivola via da sola in 1–3 giorni di sole. Inoltre la superficie nera dei moduli si scalda e scioglie lo strato di neve.", "Per i tetti piani raccomandiamo un'inclinazione di almeno 15–20° per minimizzare l'accumulo di neve."],
        bullets: ["Inclinazione da 35°: la neve scivola via da sola", "La superficie nera scioglie la neve attivamente", "Tetti piani: inclinazione di 15–20° raccomandata", "I nuovi moduli bifacciali sfruttano la riflessione della neve"],
      },
      {
        heading: "Il bonus energia invernale 2026: nuovo incentivo per impianti inclinati",
        content: ["Dal 2026, la Confederazione premia gli impianti solari con forte inclinazione (da 60°) con un bonus energia invernale. Gli impianti su facciate sud o tetti molto inclinati ricevono fino al 20% di sussidio in più.", "Questo bonus è particolarmente rilevante per le regioni alpine svizzere, dove l'inverno dura più a lungo e la riflessione della neve aumenta ulteriormente la produzione."],
        highlight: "Gli impianti molto inclinati (da 60°) ricevono nel 2026 un bonus invernale fino al 20% di RU aggiuntivo.",
      },
      {
        heading: 'Produzione annuale in Svizzera: estate vs inverno',
        content: ["Un tipico sistema da 8 kWp a Lugano produce circa 1.000 kWh a giugno e circa 250 kWh a dicembre. Il rapporto è di 4:1, ma anche il contributo di dicembre è prezioso – ogni kWh risparmiato evita acquisti dalla rete a 28–32 ct./kWh."],
        bullets: ["Giugno (Lugano): ~1.000 kWh", "Dicembre (Lugano): ~250 kWh", "Ticino: migliore produzione invernale in Svizzera", "Grigioni (quota): fino a 320 kWh grazie alla riflessione della neve"],
      },
    ],
    ctaHeading: "Sfrutta il solare tutto l'anno – richiedi un preventivo",
    ctaText: "Un moderno impianto solare produce energia per 12 mesi all'anno. Ottieni 3 preventivi gratuiti e approfitta del bonus invernale 2026.",
    ctaButton: 'Richiedi preventivo gratuito',
    formUrl: '/it/richiesta',
    relatedSlugs: ['roi-photovoltaik-schweiz', 'eigenverbrauch-optimieren-solar', 'batteriespeicher-solaranlage-lohnt-sich'],
    faqs: [
      { question: "Il mio impianto solare produce energia d'inverno?", answer: "Sì, assolutamente. Anche nell'inverno svizzero, un impianto ben orientato produce il 10–20% della sua produzione annuale. Le temperature fredde migliorano addirittura l'efficienza delle celle." },
      { question: "Devo togliere la neve dai miei pannelli solari?", answer: "In generale no. Con un'inclinazione superiore a 35°, la neve scivola via da sola in 1–3 giorni di sole. La superficie nera dei moduli aiuta a sciogliere attivamente la neve." },
      { question: "Cos'è il bonus energia invernale 2026?", answer: "La Confederazione premia dal 2026 gli impianti molto inclinati (da 60°) con un bonus sulla RU. Questi impianti producono proporzionalmente di più d'inverno e ricevono fino al 20% di sussidio aggiuntivo." },
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
        content: ['Die Einmalvergütung (EIV) ist die wichtigste Bundesförderung für neue Solaranlagen. Sie wird via Pronovo (bundeseigene Fördergesellschaft) ausbezahlt und deckt je nach Anlagegrösse bis zu 30% der Investitionskosten.', 'Für eine typische 5-kWp-Anlage erhalten Sie 2026 eine EIV von ca. CHF 2\'800–3\'600. Die EIV wird einmalig nach erfolgreicher Inbetriebnahme überwiesen – kein laufender Beitrag, keine Rückzahlung.'],
        stats: [{ label: '5 kWp EIV', value: 'ca. CHF 3\'200' }, { label: '10 kWp EIV', value: 'ca. CHF 5\'800' }, { label: 'Wartezeit', value: '2–6 Monate' }, { label: 'Auszahlung', value: 'Einmalig' }],
      },
      {
        heading: 'Kantonale Förderprogramme: Bis zu 45% Gesamtförderung',
        content: ['Viele Kantone ergänzen die EIV mit eigenen Programmen. Besonders grosszügig sind: Genf (SIG Prime Énergie +25%), Zürich (vollständiger Steuerabzug), Bern (Gebäudeprogramm +CHF 1\'500), Wallis (+CHF 2\'000 kantonal).', 'In den meisten Kantonen ist die Anlage zudem vollständig als Liegenschaftsunterhalt absetzbar – das reduziert die Steuerlast je nach Kanton um weitere 5–15% der Anlagekosten.'],
        bullets: ['Genf: SIG-Bonus +25% auf Installationskosten', 'Bern: Gebäudeprogramm bis CHF 1\'500', 'Wallis: kantonaler Beitrag bis CHF 2\'000', 'Alle Kantone: 100% Steuerabzug als Unterhalt'],
      },
      {
        heading: 'Schritt-für-Schritt: So beantragen Sie Ihre Förderung',
        content: ['Die gute Nachricht: Ihr Installateur übernimmt in der Regel die komplette Förderanmeldung. Trotzdem ist es wichtig, den Prozess zu verstehen, damit nichts vergessen geht.'],
        bullets: ['1. Anlage installieren lassen (Installateur meldet an)', '2. Pronovo-Antrag stellen (meist durch Installateur)', '3. Abnahme durch Netzbetreiber', '4. EIV-Zahlung nach 2–6 Monaten', '5. Kantonalen Beitrag separat beantragen (falls nötig)', '6. Steuerabzug in nächste Steuererklärung'],
        highlight: 'PVPro-Partnerinstallateure erledigen die komplette Förderung – Sie müssen nichts selbst ausfüllen.',
      },
      {
        heading: 'Neue Förderungen 2026: Was ist neu?',
        content: ['Das Jahr 2026 bringt wichtige Neuerungen: Winterstrombonus für steile Anlagen, LEG-Förderung (Lokale Elektrizitätsgemeinschaften) und in mehreren Kantonen neue Solarpflicht-Regelungen, die gleichzeitig mit erhöhten Fördergeldern verknüpft sind.'],
        bullets: ['Winterstrombonus: +20% EIV für Anlagen ab 60°', 'LEG-Förderung: Bonus für Gemeinschaftsanlagen', 'Solarpflicht ZH/BE: Pflicht + volle Förderung kombiniert', 'Batteriespeicher: separate kantonale Beiträge'],
      },
    ],
    ctaHeading: 'Förderung sichern – jetzt Offerte anfordern',
    ctaText: 'Unsere Partnerinstallateure sichern Ihnen die maximale Förderung. Kostenlos, unverbindlich und mit garantierter EIV-Abwicklung.',
    ctaButton: 'Jetzt kostenlose Offerte anfordern',
    formUrl: '/anfrage',
    relatedSlugs: ['roi-photovoltaik-schweiz', 'batteriespeicher-solaranlage-lohnt-sich', 'richtigen-solarinstallateur-schweiz-waehlen'],
    faqs: [
      { question: 'Wie hoch ist die EIV für eine 8-kWp-Anlage in der Schweiz 2026?', answer: 'Die EIV berechnet sich nach einer Formel: Grundbetrag + kWp-Beitrag. Für 8 kWp ergibt sich 2026 ein Betrag von ca. CHF 4\'800–5\'400 je nach Anlagetype und Kanton.' },
      { question: 'Kann ich EIV und kantonale Förderung gleichzeitig beantragen?', answer: 'Ja, beide Förderungen sind kumulierbar. Die EIV läuft via Pronovo (Bund), die kantonale Förderung separat über die kantonale Stelle. Ihr Installateur koordiniert beide Anträge.' },
      { question: 'Wann wird die EIV ausbezahlt?', answer: 'Die EIV wird nach erfolgreicher Inbetriebnahme und Prüfung durch Pronovo ausgezahlt. Das dauert typisch 2–6 Monate. Die meisten Installateure finanzieren diese Zeit überbrückend.' },
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
        content: ["La rétribution unique (RU) est la principale aide fédérale pour les nouvelles installations solaires. Elle est versée via Pronovo et couvre jusqu'à 30% des coûts d'investissement selon la taille de l'installation.", "Pour une installation typique de 5 kWc, vous recevez en 2026 une RU d'environ CHF 2'800–3'600. La RU est versée en une seule fois après la mise en service – pas de contribution continue, pas de remboursement."],
        stats: [{ label: 'RU 5 kWc', value: 'env. CHF 3\'200' }, { label: 'RU 10 kWc', value: 'env. CHF 5\'800' }, { label: "Délai d'attente", value: '2–6 mois' }, { label: 'Versement', value: 'Unique' }],
      },
      {
        heading: "Programmes cantonaux: jusqu'à 45% d'aide totale",
        content: ["De nombreux cantons complètent la RU avec leurs propres programmes. Les plus généreux: Genève (SIG Prime Énergie +25%), Vaud (programme cantonal +CHF 1'500), Valais (contribution cantonale +CHF 2'000).", "Dans la plupart des cantons, l'installation est également entièrement déductible comme entretien immobilier – ce qui réduit la charge fiscale de 5 à 15% supplémentaires."],
        bullets: ["Genève: bonus SIG +25% sur les coûts d'installation", "Vaud: programme cantonal jusqu'à CHF 1'500", "Valais: contribution cantonale jusqu'à CHF 2'000", "Tous les cantons: déduction fiscale 100% en entretien"],
      },
      {
        heading: 'Étape par étape: comment obtenir vos subventions',
        content: ["Bonne nouvelle: votre installateur prend généralement en charge toute la procédure de subvention. Il est néanmoins important de comprendre le processus."],
        bullets: ["1. Faire installer l'installation (l'installateur déclare)", "2. Déposer la demande Pronovo (généralement par l'installateur)", "3. Réception par le gestionnaire de réseau", "4. Versement RU après 2–6 mois", "5. Demander séparément la contribution cantonale (si nécessaire)", "6. Déduction fiscale dans la prochaine déclaration"],
        highlight: "Les installateurs partenaires de PVPro s'occupent de toutes les démarches – vous n'avez rien à remplir.",
      },
      {
        heading: 'Nouvelles aides 2026: quoi de neuf?',
        content: ["L'année 2026 apporte des nouveautés importantes: bonus d'hiver pour les installations inclinées, aide pour les Communautés Locales d'Énergie (CLE) et dans plusieurs cantons, de nouvelles règles d'obligation solaire liées à des aides accrues."],
        bullets: ["Bonus d'hiver: +20% RU pour les installations dès 60°", "Aide CLE: bonus pour les installations communautaires", "Obligation solaire ZH/BE: obligation + pleine aide combinée", "Batteries: contributions cantonales séparées"],
      },
    ],
    ctaHeading: "Obtenez vos subventions – demandez une offre maintenant",
    ctaText: "Nos installateurs partenaires vous garantissent les subventions maximales. Gratuit, sans engagement et avec prise en charge garantie de la RU.",
    ctaButton: 'Demander une offre gratuite',
    formUrl: '/fr/demande',
    relatedSlugs: ['roi-photovoltaik-schweiz', 'batteriespeicher-solaranlage-lohnt-sich', 'richtigen-solarinstallateur-schweiz-waehlen'],
    faqs: [
      { question: "Quelle est la RU pour une installation de 8 kWc en Suisse en 2026?", answer: "La RU est calculée selon une formule: montant de base + contribution par kWc. Pour 8 kWc, cela donne en 2026 environ CHF 4'800–5'400 selon le type d'installation et le canton." },
      { question: "Puis-je demander la RU et les aides cantonales simultanément?", answer: "Oui, les deux aides sont cumulables. La RU passe par Pronovo (Confédération), l'aide cantonale séparément par le service cantonal. Votre installateur coordonne les deux demandes." },
      { question: "Quand la RU est-elle versée?", answer: "La RU est versée après la mise en service réussie et le contrôle par Pronovo. Cela prend typiquement 2–6 mois. La plupart des installateurs financent cette période en avance." },
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
        content: ['The one-time payment (EIV) is the main federal subsidy for new solar installations. It is paid out via Pronovo and covers up to 30% of investment costs depending on system size.', "For a typical 5 kWp system, you receive an EIV of approximately CHF 2,800–3,600 in 2026. It is paid once after successful commissioning – no ongoing contribution, no repayment."],
        stats: [{ label: 'EIV 5 kWp', value: 'approx. CHF 3,200' }, { label: 'EIV 10 kWp', value: 'approx. CHF 5,800' }, { label: 'Waiting time', value: '2–6 months' }, { label: 'Payment', value: 'One-time' }],
      },
      {
        heading: 'Cantonal programmes: up to 45% total subsidy',
        content: ['Many cantons supplement the EIV with their own programmes. The most generous: Geneva (SIG Prime Énergie +25%), Vaud (cantonal programme +CHF 1,500), Valais (cantonal contribution +CHF 2,000).', 'In most cantons, the installation is also fully deductible as property maintenance – reducing the tax burden by a further 5–15% of installation costs.'],
        bullets: ['Geneva: SIG bonus +25% on installation costs', 'Vaud: cantonal programme up to CHF 1,500', 'Valais: cantonal contribution up to CHF 2,000', 'All cantons: 100% tax deduction as property maintenance'],
      },
      {
        heading: 'Step by step: how to claim your subsidies',
        content: ['Good news: your installer typically handles the complete subsidy process. Still, it is worth understanding the steps.'],
        bullets: ['1. Have installation completed (installer registers)', '2. File Pronovo application (usually by installer)', '3. Acceptance by grid operator', '4. EIV payment after 2–6 months', '5. Apply separately for cantonal contribution (if applicable)', '6. Tax deduction in next tax return'],
        highlight: 'PVPro partner installers handle all paperwork – you do not need to fill in anything.',
      },
      {
        heading: 'New subsidies 2026: what is new?',
        content: ['2026 brings important changes: winter power bonus for steep installations, Local Energy Community (LEC) subsidies and in several cantons new solar obligation rules linked to increased funding.'],
        bullets: ['Winter power bonus: +20% EIV for installations from 60°', 'LEC subsidy: bonus for community installations', 'Solar obligation ZH/BE: obligation + full subsidy combined', 'Batteries: separate cantonal contributions'],
      },
    ],
    ctaHeading: 'Secure your subsidies – request a quote now',
    ctaText: 'Our partner installers guarantee you the maximum subsidy. Free, non-binding and with guaranteed EIV processing.',
    ctaButton: 'Request a free quote',
    formUrl: '/en/request',
    relatedSlugs: ['roi-photovoltaik-schweiz', 'batteriespeicher-solaranlage-lohnt-sich', 'richtigen-solarinstallateur-schweiz-waehlen'],
    faqs: [
      { question: 'How much is the EIV for an 8 kWp system in Switzerland in 2026?', answer: 'The EIV is calculated using a formula: base amount + per-kWp contribution. For 8 kWp, this gives approximately CHF 4,800–5,400 in 2026 depending on system type and canton.' },
      { question: 'Can I claim the EIV and cantonal subsidy at the same time?', answer: 'Yes, both subsidies can be combined. The EIV goes through Pronovo (federal), the cantonal subsidy separately through the cantonal office. Your installer coordinates both applications.' },
      { question: 'When is the EIV paid?', answer: 'The EIV is paid after successful commissioning and review by Pronovo. This typically takes 2–6 months. Most installers bridge this waiting period.' },
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
        content: ["La Remunerazione Unica (RU) è il principale incentivo federale per i nuovi impianti solari. Viene pagata tramite Pronovo e copre fino al 30% dei costi di investimento a seconda delle dimensioni dell'impianto.", "Per un tipico impianto da 5 kWp, nel 2026 si riceve una RU di circa CHF 2.800–3.600. La RU viene versata una sola volta dopo la messa in servizio – nessun contributo continuativo, nessun rimborso."],
        stats: [{ label: 'RU 5 kWp', value: 'circa CHF 3.200' }, { label: 'RU 10 kWp', value: 'circa CHF 5.800' }, { label: 'Tempo di attesa', value: '2–6 mesi' }, { label: 'Versamento', value: 'Unico' }],
      },
      {
        heading: 'Programmi cantonali: fino al 45% di incentivo totale',
        content: ["Molti cantoni integrano la RU con programmi propri. I più generosi: Ginevra (bonus SIG +25%), Vaud (programma cantonale +CHF 1.500), Vallese (contributo cantonale +CHF 2.000), Ticino (DFE +CHF 1.800).", "Nella maggior parte dei cantoni, l'impianto è anche integralmente deducibile come manutenzione immobiliare – riducendo il carico fiscale di ulteriori 5–15% dei costi di installazione."],
        bullets: ["Ginevra: bonus SIG +25% sui costi di installazione", "Vaud: programma cantonale fino a CHF 1.500", "Vallese: contributo cantonale fino a CHF 2.000", "Ticino DFE: contributo cantonale fino a CHF 1.800", "Tutti i cantoni: deduzione fiscale 100% come manutenzione"],
      },
      {
        heading: 'Passo per passo: come ottenere gli incentivi',
        content: ["Buona notizia: il tuo installatore si occupa generalmente di tutta la procedura di incentivazione. Vale comunque la pena capire il processo."],
        bullets: ["1. Fare installare l'impianto (l'installatore registra)", "2. Presentare la domanda Pronovo (di solito dall'installatore)", "3. Collaudo da parte del gestore di rete", "4. Pagamento RU dopo 2–6 mesi", "5. Richiedere separatamente il contributo cantonale (se necessario)", "6. Deduzione fiscale nella prossima dichiarazione dei redditi"],
        highlight: "Gli installatori partner di PVPro si occupano di tutte le pratiche – non devi compilare nulla tu stesso.",
      },
      {
        heading: 'Nuovi incentivi 2026: cosa c\'è di nuovo?',
        content: ["Il 2026 porta novità importanti: bonus energia invernale per impianti inclinati, incentivi per le Comunità Elettriche Locali (CEL) e in diversi cantoni nuove regole sull'obbligo solare collegate a maggiori fondi."],
        bullets: ["Bonus invernale: +20% RU per impianti da 60°", "Incentivi CEL: bonus per impianti comunitari", "Obbligo solare TI/ZH: obbligo + piena agevolazione combinata", "Batterie: contributi cantonali separati"],
      },
    ],
    ctaHeading: "Assicurati gli incentivi – richiedi un preventivo ora",
    ctaText: "I nostri installatori partner ti garantiscono il massimo degli incentivi. Gratuito, senza impegno e con gestione garantita della RU.",
    ctaButton: 'Richiedi preventivo gratuito',
    formUrl: '/it/richiesta',
    relatedSlugs: ['roi-photovoltaik-schweiz', 'batteriespeicher-solaranlage-lohnt-sich', 'richtigen-solarinstallateur-schweiz-waehlen'],
    faqs: [
      { question: "Quanto è la RU per un impianto da 8 kWp in Svizzera nel 2026?", answer: "La RU viene calcolata con una formula: importo base + contributo per kWp. Per 8 kWp, nel 2026 si ottiene circa CHF 4.800–5.400 a seconda del tipo di impianto e del cantone." },
      { question: "Posso richiedere la RU e il contributo cantonale contemporaneamente?", answer: "Sì, i due incentivi sono cumulabili. La RU passa attraverso Pronovo (federale), il contributo cantonale separatamente tramite l'ufficio cantonale. Il tuo installatore coordina entrambe le domande." },
      { question: "Quando viene pagata la RU?", answer: "La RU viene pagata dopo la messa in servizio riuscita e la verifica da parte di Pronovo. Questo richiede tipicamente 2–6 mesi. La maggior parte degli installatori copre questo periodo in anticipo." },
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
        content: ['Ein Heimspeicher speichert überschüssigen Solarstrom, der tagsüber produziert, aber nicht sofort verbraucht wird. Nachts oder an bewölkten Tagen wird dieser gespeicherte Strom genutzt, anstatt teuren Netzstrom zu beziehen.', 'Ohne Speicher wird überschüssiger Strom ins Netz eingespeist (Vergütung: ca. 8–14 Rp./kWh). Mit Speicher nutzen Sie diesen Strom selbst (Wert: 28–34 Rp./kWh) – der Unterschied ist enorm.'],
        stats: [{ label: 'Eigenverbrauch ohne Speicher', value: '25–35%' }, { label: 'Eigenverbrauch mit Speicher', value: '60–80%' }, { label: 'Kosten Speicher', value: 'CHF 5\'000–12\'000' }, { label: 'Amortisation', value: '9–12 Jahre' }],
      },
      {
        heading: 'Kosten und Kapazitäten 2026',
        content: ['Die Preise für Heimspeicher sind in den letzten Jahren deutlich gesunken. Ein guter 10-kWh-Speicher kostet 2026 noch CHF 6\'000–9\'000, ein 15-kWh-System CHF 9\'000–14\'000.', 'Die ideale Speichergrösse hängt von Ihrer Anlage und Ihrem Verbrauch ab. Faustregel: 1 kWh Speicher pro 1 kWp Anlagenleistung ist ein guter Startpunkt.'],
        bullets: ['5 kWh Speicher: ca. CHF 4\'000–6\'000', '10 kWh Speicher: ca. CHF 6\'000–9\'000', '15 kWh Speicher: ca. CHF 9\'000–14\'000', 'Lebensdauer: 10–15 Jahre, 3\'000–6\'000 Ladezyklen'],
      },
      {
        heading: 'Für wen lohnt sich ein Batteriespeicher besonders?',
        content: ['Ein Heimspeicher lohnt sich besonders für Haushalte mit hohem Abendverbrauch, Wärmepumpe oder Elektroauto. In diesen Fällen kann der Eigenverbrauch auf 70–85% steigen – und die Amortisationszeit auf 7–9 Jahre sinken.'],
        bullets: ['Haushalt mit Wärmepumpe: sehr rentabel', 'Elektroauto-Besitzer: Nacht-Ladung mit eigenem Solarstrom', 'Hoher Abendverbrauch: Speicher optimal', 'Gewerbe mit Verbrauch auch ausserhalb der Solarzeiten'],
        highlight: 'Mit Elektroauto und Wärmepumpe sinkt die Amortisationszeit des Speichers auf 7–9 Jahre.',
      },
      {
        heading: 'Steuerliche Behandlung und Förderung von Speichern',
        content: ['Gute Nachricht: In allen Schweizer Kantonen ist auch der Batteriespeicher als Teil der Solaranlage steuerlich absetzbar. Einige Kantone wie Bern, Luzern und Aargau fördern Speicher zusätzlich mit eigenen Kantonsbeiträgen.'],
        bullets: ['Alle Kantone: Speicher als Unterhalt absetzbar', 'Bern: separater Speicherbonus bis CHF 800', 'Luzern: Förderbeitrag für Speicher bis CHF 600', 'Kombination mit Wärmepumpe oft zusätzlich gefördert'],
      },
    ],
    ctaHeading: 'Solaranlage mit Speicher – jetzt Offerte holen',
    ctaText: 'Unsere Partnerinstallateure dimensionieren den idealen Speicher für Ihren Haushalt. Kostenlose Analyse und Offerte in wenigen Tagen.',
    ctaButton: 'Jetzt kostenlose Offerte anfordern',
    formUrl: '/anfrage',
    relatedSlugs: ['eigenverbrauch-optimieren-solar', 'roi-photovoltaik-schweiz', 'foerderungen-photovoltaik-2026'],
    relatedPageLinks: [{ label: 'Wartungskosten Solaranlage', href: '/photovoltaik-wartung-kosten' }],
    faqs: [
      { question: 'Wie gross sollte mein Heimspeicher sein?', answer: 'Als Faustregel gilt: 1 kWh Speicher pro 1 kWp Anlagenleistung. Für eine 8-kWp-Anlage sind 8–10 kWh Speicherkapazität ideal. Mit Elektroauto oder Wärmepumpe darf es gerne mehr sein.' },
      { question: 'Wie lange hält ein Batteriespeicher?', answer: 'Moderne Lithium-Ionen-Speicher halten 10–15 Jahre oder 3\'000–6\'000 Ladezyklen. Die Hersteller geben meist 10 Jahre Garantie. Nach der Lebensdauer kann der Speicher oft günstig ersetzt werden.' },
      { question: 'Gibt es Förderung für Batteriespeicher in der Schweiz?', answer: 'Ja. Speicher sind in allen Kantonen steuerlich absetzbar. Einige Kantone wie Bern, Luzern und Aargau zahlen zusätzliche Kantonsbeiträge. Die EIV umfasst oft auch den Speicher.' },
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
        content: ["Un système de stockage domestique accumule le surplus d'énergie solaire produit pendant la journée mais non consommé immédiatement. La nuit ou par temps couvert, cette énergie stockée est utilisée plutôt que d'acheter de l'électricité au réseau.", "Sans stockage, le surplus est injecté dans le réseau (rémunération: env. 8–14 ct./kWh). Avec stockage, vous l'utilisez vous-même (valeur: 30–35 ct./kWh) – la différence est énorme."],
        stats: [{ label: 'Autoconso. sans batterie', value: '25–35%' }, { label: 'Autoconso. avec batterie', value: '60–80%' }, { label: 'Coût batterie', value: 'CHF 5\'000–12\'000' }, { label: 'Amortissement', value: '9–12 ans' }],
      },
      {
        heading: 'Coûts et capacités en 2026',
        content: ["Les prix des batteries domestiques ont considérablement baissé ces dernières années. Une bonne batterie de 10 kWh coûte en 2026 environ CHF 6'000–9'000, un système de 15 kWh CHF 9'000–14'000.", "La taille idéale dépend de votre installation et de votre consommation. Règle de base: 1 kWh de stockage par 1 kWc de puissance installée est un bon point de départ."],
        bullets: ["Batterie 5 kWh: env. CHF 4'000–6'000", "Batterie 10 kWh: env. CHF 6'000–9'000", "Batterie 15 kWh: env. CHF 9'000–14'000", "Durée de vie: 10–15 ans, 3'000–6'000 cycles"],
      },
      {
        heading: 'Pour qui une batterie est-elle particulièrement rentable?',
        content: ["Une batterie est particulièrement rentable pour les ménages avec une consommation élevée en soirée, une pompe à chaleur ou une voiture électrique. L'autoconsommation peut alors atteindre 70–85% et le délai d'amortissement tomber à 7–9 ans."],
        bullets: ["Ménage avec pompe à chaleur: très rentable", "Propriétaire de VE: charge nocturne avec son propre solaire", "Forte consommation en soirée: batterie optimale", "PME avec consommation aussi hors des heures solaires"],
        highlight: "Avec une voiture électrique et une pompe à chaleur, l'amortissement de la batterie tombe à 7–9 ans.",
      },
      {
        heading: 'Déductions fiscales et subventions pour les batteries',
        content: ["Bonne nouvelle: dans tous les cantons suisses, la batterie est aussi déductible fiscalement en tant que partie de l'installation solaire. Certains cantons comme Berne, Lucerne et Argovie subventionnent les batteries avec des contributions cantonales supplémentaires."],
        bullets: ["Tous les cantons: batterie déductible en entretien", "Berne: bonus batterie séparé jusqu'à CHF 800", "Lucerne: contribution batterie jusqu'à CHF 600", "Combinaison avec pompe à chaleur souvent subventionnée en plus"],
      },
    ],
    ctaHeading: "Installation solaire avec batterie – demandez une offre",
    ctaText: "Nos installateurs partenaires dimensionnent la batterie idéale pour votre ménage. Analyse gratuite et offre en quelques jours.",
    ctaButton: 'Demander une offre gratuite',
    formUrl: '/fr/demande',
    relatedSlugs: ['eigenverbrauch-optimieren-solar', 'roi-photovoltaik-schweiz', 'foerderungen-photovoltaik-2026'],
    faqs: [
      { question: "Quelle taille de batterie pour mon installation?", answer: "La règle de base: 1 kWh de stockage par 1 kWc de puissance. Pour une installation de 8 kWc, 8–10 kWh sont idéaux. Avec une voiture électrique ou une pompe à chaleur, on peut aller plus haut." },
      { question: "Quelle est la durée de vie d'une batterie?", answer: "Les batteries lithium-ion modernes durent 10–15 ans ou 3'000–6'000 cycles. Les fabricants donnent généralement 10 ans de garantie. Après la durée de vie, la batterie peut souvent être remplacée à moindre coût." },
      { question: "Y a-t-il des subventions pour les batteries en Suisse?", answer: "Oui. Les batteries sont déductibles fiscalement dans tous les cantons. Certains cantons comme Berne, Lucerne et Argovie paient des contributions cantonales supplémentaires. La RU inclut souvent aussi la batterie." },
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
        content: ['A home battery stores surplus solar electricity produced during the day that is not immediately consumed. At night or on cloudy days, this stored electricity is used instead of buying expensive grid power.', 'Without storage, surplus is fed into the grid (payment: approx. CHF 0.08–0.14/kWh). With storage, you use it yourself (value: CHF 0.28–0.34/kWh) – the difference is enormous.'],
        stats: [{ label: 'Self-consumption without battery', value: '25–35%' }, { label: 'Self-consumption with battery', value: '60–80%' }, { label: 'Battery cost', value: 'CHF 5,000–12,000' }, { label: 'Payback', value: '9–12 years' }],
      },
      {
        heading: 'Costs and capacities in 2026',
        content: ['Battery prices have fallen significantly in recent years. A good 10 kWh battery costs CHF 6,000–9,000 in 2026; a 15 kWh system CHF 9,000–14,000.', 'The ideal battery size depends on your system and consumption. Rule of thumb: 1 kWh of storage per 1 kWp of installed capacity is a good starting point.'],
        bullets: ['5 kWh battery: approx. CHF 4,000–6,000', '10 kWh battery: approx. CHF 6,000–9,000', '15 kWh battery: approx. CHF 9,000–14,000', 'Lifespan: 10–15 years, 3,000–6,000 charge cycles'],
      },
      {
        heading: 'Who benefits most from a home battery?',
        content: ['A home battery is especially profitable for households with high evening consumption, a heat pump or an electric vehicle. Self-consumption can rise to 70–85% and the payback period can fall to 7–9 years.'],
        bullets: ['Household with heat pump: very profitable', 'EV owner: night-time charging with own solar', 'High evening consumption: battery optimal', 'Businesses with consumption outside solar hours'],
        highlight: 'With an electric vehicle and a heat pump, the battery payback period drops to 7–9 years.',
      },
      {
        heading: 'Tax treatment and subsidies for batteries',
        content: ['Good news: in all Swiss cantons, the battery is also tax-deductible as part of the solar installation. Some cantons such as Bern, Lucerne and Aargau pay additional cantonal contributions specifically for storage.'],
        bullets: ['All cantons: battery deductible as property maintenance', 'Bern: separate battery bonus up to CHF 800', 'Lucerne: battery contribution up to CHF 600', 'Combination with heat pump often additionally subsidised'],
      },
    ],
    ctaHeading: 'Solar system with battery – get a quote now',
    ctaText: 'Our partner installers will size the ideal battery for your household. Free analysis and quote within a few days.',
    ctaButton: 'Request a free quote',
    formUrl: '/en/request',
    relatedSlugs: ['eigenverbrauch-optimieren-solar', 'roi-photovoltaik-schweiz', 'foerderungen-photovoltaik-2026'],
    faqs: [
      { question: 'How large should my home battery be?', answer: 'Rule of thumb: 1 kWh of storage per 1 kWp of system capacity. For an 8 kWp system, 8–10 kWh is ideal. With an EV or heat pump, you can go higher.' },
      { question: 'How long does a home battery last?', answer: 'Modern lithium-ion batteries last 10–15 years or 3,000–6,000 charge cycles. Manufacturers typically provide 10-year guarantees. After its lifespan, the battery can often be replaced at lower cost.' },
      { question: 'Are there subsidies for batteries in Switzerland?', answer: 'Yes. Batteries are tax-deductible in all cantons. Some cantons like Bern, Lucerne and Aargau pay additional cantonal contributions. The EIV often includes the battery too.' },
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
        content: ["Un sistema di accumulo domestico immagazzina l'energia solare in eccesso prodotta durante il giorno ma non consumata immediatamente. Di notte o nei giorni nuvolosi, questa energia accumulata viene utilizzata invece di acquistare energia costosa dalla rete.", "Senza accumulo, l'eccedenza viene immessa in rete (remunerazione: circa 8–14 ct./kWh). Con l'accumulo la usi tu stesso (valore: 28–32 ct./kWh) – la differenza è enorme."],
        stats: [{ label: 'Autoconsumo senza batteria', value: '25–35%' }, { label: 'Autoconsumo con batteria', value: '60–80%' }, { label: 'Costo batteria', value: 'CHF 5.000–12.000' }, { label: 'Ammortamento', value: '9–12 anni' }],
      },
      {
        heading: 'Costi e capacità nel 2026',
        content: ["I prezzi delle batterie domestiche sono calati significativamente negli ultimi anni. Una buona batteria da 10 kWh costa nel 2026 circa CHF 6.000–9.000, un sistema da 15 kWh CHF 9.000–14.000.", "La dimensione ideale dipende dal tuo impianto e dal tuo consumo. Regola empirica: 1 kWh di accumulo per 1 kWp di potenza installata è un buon punto di partenza."],
        bullets: ["Batteria 5 kWh: circa CHF 4.000–6.000", "Batteria 10 kWh: circa CHF 6.000–9.000", "Batteria 15 kWh: circa CHF 9.000–14.000", "Durata: 10–15 anni, 3.000–6.000 cicli di carica"],
      },
      {
        heading: 'Per chi conviene particolarmente una batteria?',
        content: ["Una batteria è particolarmente redditizia per le famiglie con alto consumo serale, una pompa di calore o un'auto elettrica. L'autoconsumo può salire al 70–85% e il periodo di ammortamento scendere a 7–9 anni."],
        bullets: ["Famiglia con pompa di calore: molto redditizio", "Proprietario di auto elettrica: ricarica notturna con il proprio solare", "Alto consumo serale: batteria ottimale", "Aziende con consumo anche fuori dalle ore solari"],
        highlight: "Con un'auto elettrica e una pompa di calore, l'ammortamento della batteria scende a 7–9 anni.",
      },
      {
        heading: 'Trattamento fiscale e incentivi per le batterie',
        content: ["Buona notizia: in tutti i cantoni svizzeri, anche la batteria è deducibile fiscalmente come parte dell'impianto solare. Alcuni cantoni come Berna, Lucerna e Argovia pagano contributi cantonali aggiuntivi specifici per l'accumulo."],
        bullets: ["Tutti i cantoni: batteria deducibile come manutenzione", "Berna: bonus batteria separato fino a CHF 800", "Lucerna: contributo batteria fino a CHF 600", "Combinazione con pompa di calore spesso incentivata in aggiunta"],
      },
    ],
    ctaHeading: "Impianto solare con batteria – richiedi un preventivo",
    ctaText: "I nostri installatori partner dimensionano la batteria ideale per la tua famiglia. Analisi gratuita e preventivo in pochi giorni.",
    ctaButton: 'Richiedi preventivo gratuito',
    formUrl: '/it/richiesta',
    relatedSlugs: ['eigenverbrauch-optimieren-solar', 'roi-photovoltaik-schweiz', 'foerderungen-photovoltaik-2026'],
    faqs: [
      { question: "Quanto grande deve essere la mia batteria?", answer: "Regola empirica: 1 kWh di accumulo per 1 kWp di potenza. Per un impianto da 8 kWp, 8–10 kWh sono ideali. Con un'auto elettrica o una pompa di calore puoi andare oltre." },
      { question: "Quanto dura una batteria domestica?", answer: "Le moderne batterie agli ioni di litio durano 10–15 anni o 3.000–6.000 cicli di carica. I produttori forniscono generalmente 10 anni di garanzia. Dopo la vita utile, la batteria può spesso essere sostituita a costo inferiore." },
      { question: "Ci sono incentivi per le batterie in Svizzera?", answer: "Sì. Le batterie sono deducibili fiscalmente in tutti i cantoni. Alcuni cantoni come Berna, Lucerna e Argovia pagano contributi cantonali aggiuntivi. La RU include spesso anche la batteria." },
      { question: "Posso aggiungere una batteria in un secondo momento?", answer: "Sì, nella maggior parte dei casi un retrofit è possibile. I moderni inverter hanno spesso già un'interfaccia per l'accumulo. Lo sforzo è leggermente maggiore, ma tecnicamente non ci sono problemi." },
    ],
  },

  // ─── INSTALLATEUR WÄHLEN (DE) ────────────────────────────────────────────────
  {
    slug: 'richtigen-solarinstallateur-schweiz-waehlen',
    locale: 'de',
    title: 'Den richtigen Solarinstallateur wählen: 7 wichtige Kriterien',
    metaDescription: '7 Kriterien für die Wahl des besten Solarinstallateurs in der Schweiz. Zertifizierungen, Referenzen, Garantien und wie PVPro den Vergleich vereinfacht.',
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
        content: ['Eine gute Offerte enthält immer: Detaillierter Systemplan, Ertragsprognose, Komponentenliste mit Herstellern, Installations- und Materialgarantien getrennt.', 'Verlangen Sie eine 10-jährige Workmanship Guarantee (Installationsgarantie) und achten Sie auf die Herstellergarantien der Module (meist 25 Jahre) und des Wechselrichters (5–10 Jahre).'],
        bullets: ['Ertragsprognose mit/ohne Speicher', 'Herstellergarantien Module: 25 Jahre', 'Wechselrichter-Garantie: 5–10 Jahre', 'Installationsgarantie: mindestens 5–10 Jahre'],
      },
      {
        heading: '6–7: Lokale Präsenz und After-Sales-Service',
        content: ['Bevorzugen Sie lokale Installationsbetriebe, die in Ihrer Region ansässig sind und schnell auf Serviceanfragen reagieren können. Ein Unternehmen, das 200 km entfernt sitzt, wird bei Problemen langsam reagieren.', 'Fragen Sie explizit nach dem After-Sales-Service: Wer kommt für die jährliche Wartung? Wie lange ist der Ansprechpartner erreichbar?'],
        bullets: ['Betrieb in Ihrer Region', 'Jährliche Wartung angeboten', 'Erreichbarer Ansprechpartner nach Installation', 'Referenzkunden in Ihrer Gemeinde befragbar'],
      },
    ],
    ctaHeading: 'Jetzt bis zu 3 geprüfte Offerten vergleichen',
    ctaText: 'PVPro prüft jeden Installateur nach diesen 7 Kriterien vor. Sie erhalten nur Offerten von qualifizierten, lokalen Fachbetrieben.',
    ctaButton: 'Jetzt kostenlose Offerte anfordern',
    formUrl: '/anfrage',
    relatedSlugs: ['foerderungen-photovoltaik-2026', 'roi-photovoltaik-schweiz', 'solaranlage-winter-schweiz'],
    faqs: [
      { question: 'Welche Zertifizierungen sind für Solarinstallateure in der Schweiz Pflicht?', answer: 'Der Installateur muss im STROM-Register des NIV (Niederspannungs-Installationsverordnung) eingetragen sein. Für die EIV-Beantragung ist zusätzlich eine Pronovo-Registrierung nötig.' },
      { question: 'Wie viele Offerten sollte ich einholen?', answer: 'Mindestens 3 Offerten von verschiedenen Betrieben. Die Preisunterschiede können 20–35% betragen – bei gleichwertiger Qualität. PVPro liefert Ihnen bis zu 3 geprüfte Offerten in wenigen Tagen.' },
      { question: 'Was tun, wenn der Installateur nach der Installation nicht mehr erreichbar ist?', answer: 'Dokumentieren Sie alles schriftlich und wählen Sie einen etablierten Betrieb mit Referenzen. PVPro-Partner haben alle mindestens 3 Jahre Betriebsgeschichte und lokale Präsenz.' },
      { question: 'Gibt es schwarze Schafe in der Solarbranche?', answer: 'Leider ja. Häufige Warnsignale: Kein lokaler Betrieb, keine schriftliche Offerte, Druck für sofortige Unterschrift, fehlende Zertifizierungsnachweise. Über PVPro erhalten Sie ausschliesslich geprüfte Betriebe.' },
    ],
  },

  // ─── INSTALLATEUR WÄHLEN (FR) ────────────────────────────────────────────────
  {
    slug: 'richtigen-solarinstallateur-schweiz-waehlen',
    locale: 'fr',
    title: 'Choisir le bon installateur solaire en Suisse: 7 critères essentiels',
    metaDescription: "7 critères pour choisir le meilleur installateur solaire en Suisse. Certifications, références, garanties et comment PVPro simplifie la comparaison.",
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
        content: ["Une bonne offre contient toujours: plan système détaillé, prévision de production, liste des composants avec fabricants, garanties d'installation et de matériel séparées.", "Exigez une garantie de travaux de 10 ans et vérifiez les garanties fabricants des modules (généralement 25 ans) et de l'onduleur (5–10 ans)."],
        bullets: ["Prévision de production avec et sans batterie", "Garantie modules: 25 ans", "Garantie onduleur: 5–10 ans", "Garantie d'installation: au moins 5–10 ans"],
      },
      {
        heading: '6–7: Présence locale et service après-vente',
        content: ["Privilégiez les installateurs locaux établis dans votre région qui peuvent répondre rapidement aux demandes de service. Une entreprise à 200 km répondra lentement en cas de problème.", "Demandez explicitement le service après-vente: qui vient pour la maintenance annuelle? Combien de temps l'interlocuteur est-il joignable?"],
        bullets: ["Entreprise dans votre région", "Maintenance annuelle proposée", "Interlocuteur joignable après installation", "Clients de référence dans votre commune"],
      },
    ],
    ctaHeading: "Comparez maintenant jusqu'à 3 offres vérifiées",
    ctaText: "PVPro vérifie chaque installateur selon ces 7 critères. Vous ne recevez que des offres d'entreprises qualifiées et locales.",
    ctaButton: 'Demander une offre gratuite',
    formUrl: '/fr/demande',
    relatedSlugs: ['foerderungen-photovoltaik-2026', 'roi-photovoltaik-schweiz', 'solaranlage-winter-schweiz'],
    faqs: [
      { question: "Quelles certifications sont obligatoires pour les installateurs solaires en Suisse?", answer: "L'installateur doit être inscrit dans le registre compétent selon l'OIBT. Pour la demande de RU, une inscription auprès de Pronovo est également nécessaire." },
      { question: "Combien d'offres devrait-on obtenir?", answer: "Au moins 3 offres de différentes entreprises. Les différences de prix peuvent atteindre 20–35% pour une qualité équivalente. PVPro vous livre jusqu'à 3 offres vérifiées en quelques jours." },
      { question: "Que faire si l'installateur n'est plus joignable après l'installation?", answer: "Documentez tout par écrit et choisissez une entreprise établie avec références. Les partenaires PVPro ont tous au moins 3 ans d'activité et une présence locale." },
      { question: "Y a-t-il de mauvais acteurs dans le secteur solaire?", answer: "Malheureusement oui. Signaux d'alarme fréquents: pas d'entreprise locale, pas d'offre écrite, pression pour signature immédiate, absence de preuves de certification. Via PVPro, vous ne recevez que des entreprises vérifiées." },
    ],
  },

  // ─── INSTALLATEUR WÄHLEN (EN) ────────────────────────────────────────────────
  {
    slug: 'richtigen-solarinstallateur-schweiz-waehlen',
    locale: 'en',
    title: 'Choosing the right solar installer in Switzerland: 7 key criteria',
    metaDescription: '7 criteria for choosing the best solar installer in Switzerland. Certifications, references, guarantees and how PVPro simplifies comparison.',
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
        content: ['A good quote always includes: detailed system plan, yield forecast, component list with manufacturers, separate installation and material guarantees.', 'Require a 10-year workmanship guarantee and check manufacturer guarantees for modules (usually 25 years) and inverter (5–10 years).'],
        bullets: ['Yield forecast with and without battery', 'Module manufacturer guarantee: 25 years', 'Inverter guarantee: 5–10 years', 'Installation guarantee: at least 5–10 years'],
      },
      {
        heading: '6–7: Local presence and after-sales service',
        content: ['Prefer local installers based in your region who can respond quickly to service requests. A company 200 km away will be slow to respond when problems arise.', 'Ask explicitly about after-sales service: who comes for annual maintenance? How long is the contact person reachable?'],
        bullets: ['Company in your region', 'Annual maintenance offered', 'Reachable contact person after installation', 'Reference customers in your municipality'],
      },
    ],
    ctaHeading: 'Compare up to 3 vetted quotes now',
    ctaText: 'PVPro vets every installer against these 7 criteria. You only receive quotes from qualified, local companies.',
    ctaButton: 'Request a free quote',
    formUrl: '/en/request',
    relatedSlugs: ['foerderungen-photovoltaik-2026', 'roi-photovoltaik-schweiz', 'solaranlage-winter-schweiz'],
    faqs: [
      { question: 'What certifications are required for solar installers in Switzerland?', answer: 'The installer must be registered in the relevant electrical register under NIV. For the EIV application, an additional Pronovo registration is needed.' },
      { question: 'How many quotes should I obtain?', answer: 'At least 3 quotes from different companies. Price differences of 20–35% for equivalent quality are common. PVPro delivers up to 3 vetted quotes within a few days.' },
      { question: 'What to do if the installer is unreachable after installation?', answer: 'Document everything in writing and choose an established company with references. PVPro partners all have at least 3 years of trading history and local presence.' },
      { question: 'Are there bad actors in the solar industry?', answer: 'Unfortunately yes. Common warning signs: no local company, no written quote, pressure for immediate signature, missing certification proof. Via PVPro you only receive vetted companies.' },
    ],
  },

  // ─── INSTALLATEUR WÄHLEN (IT) ────────────────────────────────────────────────
  {
    slug: 'richtigen-solarinstallateur-schweiz-waehlen',
    locale: 'it',
    title: 'Scegliere il giusto installatore solare in Svizzera: 7 criteri fondamentali',
    metaDescription: "7 criteri per scegliere il miglior installatore solare in Svizzera. Certificazioni, referenze, garanzie e come PVPro semplifica il confronto.",
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
        content: ["Un buon preventivo contiene sempre: piano sistema dettagliato, previsione di produzione, lista dei componenti con produttori, garanzie di installazione e materiale separate.", "Richiedi una garanzia di esecuzione di 10 anni e verifica le garanzie del produttore per i moduli (di solito 25 anni) e l'inverter (5–10 anni)."],
        bullets: ["Previsione di produzione con e senza batteria", "Garanzia moduli: 25 anni", "Garanzia inverter: 5–10 anni", "Garanzia di installazione: almeno 5–10 anni"],
      },
      {
        heading: '6–7: Presenza locale e servizio post-vendita',
        content: ["Preferisci installatori locali con sede nella tua regione che possono rispondere rapidamente alle richieste di assistenza. Un'azienda a 200 km risponderà lentamente in caso di problemi.", "Chiedi esplicitamente del servizio post-vendita: chi viene per la manutenzione annuale? Per quanto tempo è raggiungibile il referente?"],
        bullets: ["Azienda nella tua regione", "Manutenzione annuale offerta", "Referente raggiungibile dopo l'installazione", "Clienti di riferimento nel tuo comune"],
      },
    ],
    ctaHeading: "Confronta ora fino a 3 preventivi verificati",
    ctaText: "PVPro verifica ogni installatore secondo questi 7 criteri. Ricevi solo preventivi da aziende qualificate e locali.",
    ctaButton: 'Richiedi preventivo gratuito',
    formUrl: '/it/richiesta',
    relatedSlugs: ['foerderungen-photovoltaik-2026', 'roi-photovoltaik-schweiz', 'solaranlage-winter-schweiz'],
    faqs: [
      { question: "Quali certificazioni sono obbligatorie per gli installatori solari in Svizzera?", answer: "L'installatore deve essere iscritto nel registro elettrico competente secondo l'OIBT. Per la richiesta della RU è necessaria anche un'iscrizione presso Pronovo." },
      { question: "Quanti preventivi dovrei richiedere?", answer: "Almeno 3 preventivi da aziende diverse. Le differenze di prezzo possono arrivare al 20–35% per qualità equivalente. PVPro ti fornisce fino a 3 preventivi verificati in pochi giorni." },
      { question: "Cosa fare se l'installatore non è più raggiungibile dopo l'installazione?", answer: "Documenta tutto per iscritto e scegli un'azienda affermata con referenze. I partner PVPro hanno tutti almeno 3 anni di attività e presenza locale." },
      { question: "Ci sono operatori scorretti nel settore solare?", answer: "Purtroppo sì. Segnali di allarme comuni: nessuna azienda locale, nessun preventivo scritto, pressione per firma immediata, mancanza di prove di certificazione. Tramite PVPro ricevi solo aziende verificate." },
    ],
  },

  // ─── EIGENVERBRAUCH (DE) ─────────────────────────────────────────────────────
  {
    slug: 'eigenverbrauch-optimieren-solar',
    locale: 'de',
    title: 'Eigenverbrauch maximieren: So nutzen Sie Ihre Solarenergie optimal',
    metaDescription: "Strategien zur Maximierung des Eigenverbrauchs einer Solaranlage in der Schweiz. Von Zeitsteuerung bis LEG – so nutzen Sie bis zu 80% selbst.",
    image: '/images/solar-energieertrag-tablet-chalet.webp',
    date: '10. Februar 2026',
    readMin: 5,
    tag: 'Tipps',
    intro: 'Der Eigenverbrauch ist der Schlüssel zur Rentabilität Ihrer Solaranlage. Jede selbst verbrauchte kWh ist das 2–3-fache wert verglichen mit eingespeistem Strom. Mit cleveren Strategien können Sie 70–80% Ihrer Solarenergie selbst nutzen.',
    sections: [
      {
        heading: 'Warum Eigenverbrauch so wichtig ist',
        content: ['Überschüssiger Solarstrom wird ins Netz eingespeist und mit ca. 8–14 Rp./kWh vergütet. Selbst verbrauchter Strom spart dagegen 28–34 Rp./kWh Netzstromkosten – der 3-fache Wert. Jeder Prozentpunkt mehr Eigenverbrauch verbessert Ihren ROI deutlich.'],
        stats: [{ label: 'Einspeisung', value: '8–14 Rp./kWh' }, { label: 'Eigenverbrauch', value: '28–34 Rp./kWh' }, { label: 'Wert-Differenz', value: '3×' }, { label: 'Ziel', value: '70–80%' }],
      },
      {
        heading: 'Strategie 1: Zeitgesteuerte Geräte verschieben',
        content: ['Spülmaschine, Waschmaschine und Wäschetrockner verbrauchen viel Strom – und lassen sich problemlos auf die Mittagsstunden (11–15 Uhr) programmieren, wenn die Solarproduktion am höchsten ist. Moderne Geräte mit Timer oder Smart-Home-Steuerung machen dies einfach.'],
        bullets: ['Waschmaschine: auf 12–14 Uhr stellen', 'Spülmaschine: nach dem Mittagessen', 'Trockner: im Anschluss an die Waschmaschine', 'Brauchwasser-Erwärmung: tagsüber boosten'],
      },
      {
        heading: 'Strategie 2: Wärmepumpe und E-Auto integrieren',
        content: ['Eine Wärmepumpe und ein Elektroauto sind die grössten Eigenverbrauchs-Booster. Beide lassen sich tagsüber mit Solarstrom betreiben und erhöhen den Eigenverbrauch auf 60–80% – ohne Speicher.', 'Smarte Ladesteuerungen (z.B. myEnergi zappi) laden das Auto nur dann, wenn genug Solarstrom vorhanden ist. Wärmepumpen mit Solar-Integration heizen den Speicher tagsüber auf.'],
        bullets: ['E-Auto mit Solar laden: ca. 40 Rp./km Ersparnis vs. Netz', 'Wärmepumpe tagsüber auf Maximum: bis 5 kWh Eigenverbrauch/Tag', 'Smart-Ladestation: nur laden wenn Sonne scheint', 'Luft-Wasser-WP kompatibel mit allen Solaranlagen'],
        highlight: 'Wärmepumpe + Elektroauto + Solar: Eigenverbrauch 65–80%, Gesamtkosten drastisch reduziert.',
      },
      {
        heading: 'Strategie 3: Lokale Elektrizitätsgemeinschaft (LEG)',
        content: ['Ab 2026 können Sie Ihren Überschussstrom direkt an Nachbarn im selben Gebiet verkaufen. In einer LEG erhalten Sie mehr als den Einspeisetarif und Ihre Nachbarn zahlen weniger als den Netzpreis – eine Win-Win-Situation.'],
        bullets: ['LEG-Vergütung: ca. 15–20 Rp./kWh (vs. 8–14 Netz)', 'Nachbar zahlt: ca. 20–25 Rp./kWh (vs. 28–34 Netz)', 'Gründung unkompliziert über lokalen Netzbetreiber', 'Besonders attraktiv in Mehrfamilienhäusern und Siedlungen'],
      },
    ],
    ctaHeading: 'Maximale Eigenverbrauchsoptimierung – jetzt Offerte holen',
    ctaText: 'PVPro-Installateure planen von Anfang an auf maximalen Eigenverbrauch. Kostenlose Beratung und Offerte.',
    ctaButton: 'Jetzt kostenlose Offerte anfordern',
    formUrl: '/anfrage',
    relatedSlugs: ['batteriespeicher-solaranlage-lohnt-sich', 'roi-photovoltaik-schweiz', 'foerderungen-photovoltaik-2026'],
    faqs: [
      { question: 'Was ist ein realistischer Eigenverbrauch ohne Speicher?', answer: 'Typischerweise 25–35% für einen normalen Haushalt. Mit zeitgesteuerter Nutzung grosser Verbraucher steigt er auf 35–45%. Mit Wärmepumpe oder E-Auto auf 50–65%.' },
      { question: 'Lohnt sich ein Heimspeicher nur wegen des Eigenverbrauchs?', answer: 'In den meisten Fällen ja, wenn Sie einen hohen Abend- und Nachtverbrauch haben. Wenn Sie ein E-Auto oder eine Wärmepumpe haben, kann der Eigenverbrauch ohne Speicher bereits sehr hoch sein.' },
      { question: 'Wie funktioniert eine Lokale Elektrizitätsgemeinschaft (LEG)?', answer: 'Nachbarn schliessen sich zusammen und teilen Solarstrom untereinander. Der Strom fliesst über das lokale Netz, wobei die Netzgebühren um bis zu 40% reduziert werden. Gründung über den lokalen Netzbetreiber.' },
      { question: 'Können Smart-Home-Systeme den Eigenverbrauch automatisch optimieren?', answer: 'Ja. Systeme wie Fronius Solar.web, SMA Sunny Home Manager oder Loxone können Geräte automatisch steuern und den Eigenverbrauch ohne manuellen Aufwand maximieren.' },
    ],
  },

  // ─── EIGENVERBRAUCH (FR) ─────────────────────────────────────────────────────
  {
    slug: 'eigenverbrauch-optimieren-solar',
    locale: 'fr',
    title: "Maximiser l'autoconsommation: comment utiliser au mieux votre énergie solaire",
    metaDescription: "Stratégies pour maximiser l'autoconsommation d'une installation solaire en Suisse. De la programmation temporelle aux CLE – comment utiliser jusqu'à 80% soi-même.",
    image: '/images/solar-energieertrag-tablet-chalet.webp',
    date: '10 février 2026',
    readMin: 5,
    tag: 'Conseils',
    intro: "L'autoconsommation est la clé de la rentabilité de votre installation solaire. Chaque kWh autoconsommé vaut 2 à 3 fois plus que l'électricité injectée dans le réseau. Avec les bonnes stratégies, vous pouvez utiliser vous-même 70–80% de votre énergie solaire.",
    sections: [
      {
        heading: "Pourquoi l'autoconsommation est si importante",
        content: ["Le surplus solaire injecté dans le réseau est rémunéré env. 8–14 ct./kWh. L'électricité autoconsommée économise en revanche 30–35 ct./kWh d'achat sur le réseau – soit 3 fois plus de valeur. Chaque point de pourcentage d'autoconsommation supplémentaire améliore votre ROI."],
        stats: [{ label: 'Injection réseau', value: '8–14 ct./kWh' }, { label: 'Autoconsommation', value: '30–35 ct./kWh' }, { label: 'Différence', value: '3×' }, { label: 'Objectif', value: '70–80%' }],
      },
      {
        heading: 'Stratégie 1: Décaler les appareils programmables',
        content: ["Lave-vaisselle, lave-linge et sèche-linge consomment beaucoup – et peuvent facilement être programmés aux heures de pointe solaire (11h–15h). Les appareils modernes avec minuterie ou domotique rendent cela simple."],
        bullets: ["Lave-linge: programmer à 12h–14h", "Lave-vaisselle: après le repas de midi", "Sèche-linge: à la suite du lave-linge", "Chauffe-eau: boost pendant les heures solaires"],
      },
      {
        heading: 'Stratégie 2: Intégrer pompe à chaleur et voiture électrique',
        content: ["Une pompe à chaleur et une voiture électrique sont les meilleurs boosters d'autoconsommation. Les deux peuvent être alimentés pendant la journée avec de l'énergie solaire et portent l'autoconsommation à 60–80% – sans batterie.", "Les bornes de recharge intelligentes (ex. myEnergi zappi) ne chargent que lorsqu'il y a suffisamment d'énergie solaire disponible."],
        bullets: ["VE chargé au solaire: env. 40 ct./km d'économie vs réseau", "PAC en journée sur maximum: jusqu'à 5 kWh autoconsommés/jour", "Borne de recharge intelligente: charge uniquement au soleil", "PAC air-eau compatible avec toutes les installations solaires"],
        highlight: "PAC + voiture électrique + solaire: autoconsommation 65–80%, coûts totaux drastiquement réduits.",
      },
      {
        heading: 'Stratégie 3: Communauté Locale d\'Énergie (CLE)',
        content: ["Dès 2026, vous pouvez vendre votre surplus d'électricité directement à des voisins dans la même zone. Dans une CLE, vous recevez plus que le tarif d'injection et vos voisins paient moins que le prix du réseau – une situation gagnant-gagnant."],
        bullets: ["Rémunération CLE: env. 15–20 ct./kWh (vs 8–14 réseau)", "Voisin paie: env. 20–25 ct./kWh (vs 30–35 réseau)", "Création simplifiée via le gestionnaire de réseau local", "Particulièrement attractif dans les immeubles et les quartiers"],
      },
    ],
    ctaHeading: "Autoconsommation maximale – demandez une offre",
    ctaText: "Les installateurs PVPro planifient dès le départ pour une autoconsommation maximale. Conseil gratuit et offre sans engagement.",
    ctaButton: 'Demander une offre gratuite',
    formUrl: '/fr/demande',
    relatedSlugs: ['batteriespeicher-solaranlage-lohnt-sich', 'roi-photovoltaik-schweiz', 'foerderungen-photovoltaik-2026'],
    faqs: [
      { question: "Quel est le taux d'autoconsommation réaliste sans batterie?", answer: "Typiquement 25–35% pour un ménage normal. Avec une utilisation programmée des gros appareils, il monte à 35–45%. Avec une pompe à chaleur ou un VE, à 50–65%." },
      { question: "Une batterie est-elle rentable uniquement pour l'autoconsommation?", answer: "Dans la plupart des cas oui, si vous avez une consommation élevée le soir et la nuit. Si vous avez un VE ou une PAC, l'autoconsommation peut déjà être très élevée sans batterie." },
      { question: "Comment fonctionne une Communauté Locale d'Énergie (CLE)?", answer: "Des voisins se regroupent et partagent l'énergie solaire entre eux. L'électricité circule via le réseau local, avec des frais de réseau réduits jusqu'à 40%. Création via le gestionnaire de réseau local." },
      { question: "Les systèmes domotiques peuvent-ils optimiser automatiquement l'autoconsommation?", answer: "Oui. Des systèmes comme Fronius Solar.web, SMA Sunny Home Manager ou Loxone peuvent contrôler automatiquement les appareils et maximiser l'autoconsommation sans effort manuel." },
    ],
  },

  // ─── EIGENVERBRAUCH (EN) ─────────────────────────────────────────────────────
  {
    slug: 'eigenverbrauch-optimieren-solar',
    locale: 'en',
    title: 'Maximising self-consumption: how to get the most from your solar energy',
    metaDescription: "Strategies to maximise solar self-consumption in Switzerland. From timer-controlled appliances to Local Energy Communities – how to use up to 80% yourself.",
    image: '/images/solar-energieertrag-tablet-chalet.webp',
    date: 'February 10, 2026',
    readMin: 5,
    tag: 'Tips',
    intro: 'Self-consumption is the key to solar profitability. Every kWh consumed yourself is worth 2–3 times more than electricity fed into the grid. With smart strategies, you can use 70–80% of your solar energy yourself.',
    sections: [
      {
        heading: 'Why self-consumption matters so much',
        content: ['Surplus solar electricity fed into the grid is paid at approx. CHF 0.08–0.14/kWh. Self-consumed electricity saves CHF 0.28–0.34/kWh in grid costs – three times the value. Every additional percentage point of self-consumption significantly improves your ROI.'],
        stats: [{ label: 'Grid feed-in', value: 'CHF 0.08–0.14/kWh' }, { label: 'Self-consumption', value: 'CHF 0.28–0.34/kWh' }, { label: 'Value difference', value: '3×' }, { label: 'Target', value: '70–80%' }],
      },
      {
        heading: 'Strategy 1: Shift programmable appliances',
        content: ['Dishwasher, washing machine and tumble dryer use a lot of electricity – and can easily be programmed to run during peak solar hours (11am–3pm). Modern appliances with timers or smart home controls make this simple.'],
        bullets: ['Washing machine: set to 12pm–2pm', 'Dishwasher: after lunch', 'Tumble dryer: right after the washing machine', 'Hot water: boost during solar hours'],
      },
      {
        heading: 'Strategy 2: Integrate heat pump and EV',
        content: ['A heat pump and an electric vehicle are the biggest self-consumption boosters. Both can run on solar electricity during the day, pushing self-consumption to 60–80% without a battery.', 'Smart chargers (e.g. myEnergi zappi) only charge when sufficient solar electricity is available.'],
        bullets: ['EV charged on solar: approx. CHF 0.40/km saving vs grid', 'Heat pump at maximum during day: up to 5 kWh self-consumed/day', 'Smart charger: charges only in sunshine', 'Air-source heat pump compatible with all solar systems'],
        highlight: 'Heat pump + EV + solar: self-consumption 65–80%, total costs drastically reduced.',
      },
      {
        heading: 'Strategy 3: Local Energy Community (LEC)',
        content: ['From 2026, you can sell your surplus electricity directly to neighbours in the same area. In an LEC, you receive more than the feed-in tariff and your neighbours pay less than the grid price – a win-win.'],
        bullets: ['LEC payment: approx. CHF 0.15–0.20/kWh (vs 0.08–0.14 grid)', 'Neighbour pays: approx. CHF 0.20–0.25/kWh (vs 0.28–0.34 grid)', 'Simple setup through local grid operator', 'Especially attractive in apartment buildings and housing estates'],
      },
    ],
    ctaHeading: 'Maximum self-consumption optimisation – request a quote',
    ctaText: 'PVPro installers plan for maximum self-consumption from the start. Free consultation and quote.',
    ctaButton: 'Request a free quote',
    formUrl: '/en/request',
    relatedSlugs: ['batteriespeicher-solaranlage-lohnt-sich', 'roi-photovoltaik-schweiz', 'foerderungen-photovoltaik-2026'],
    faqs: [
      { question: 'What is a realistic self-consumption rate without a battery?', answer: 'Typically 25–35% for a normal household. With timer-controlled use of large appliances, it rises to 35–45%. With a heat pump or EV, to 50–65%.' },
      { question: 'Is a home battery worth it purely for self-consumption?', answer: 'In most cases yes, if you have high evening and night consumption. If you have an EV or heat pump, self-consumption can already be very high without a battery.' },
      { question: 'How does a Local Energy Community (LEC) work?', answer: 'Neighbours group together and share solar electricity between them. The electricity flows via the local grid, with grid fees reduced by up to 40%. Set up through your local grid operator.' },
      { question: 'Can smart home systems automatically optimise self-consumption?', answer: 'Yes. Systems like Fronius Solar.web, SMA Sunny Home Manager or Loxone can automatically control appliances and maximise self-consumption without manual effort.' },
    ],
  },

  // ─── EIGENVERBRAUCH (IT) ─────────────────────────────────────────────────────
  {
    slug: 'eigenverbrauch-optimieren-solar',
    locale: 'it',
    title: "Massimizzare l'autoconsumo: come sfruttare al meglio la tua energia solare",
    metaDescription: "Strategie per massimizzare l'autoconsumo di un impianto solare in Svizzera. Dalla programmazione temporale alle CEL – come consumare fino all'80% da soli.",
    image: '/images/solar-energieertrag-tablet-chalet.webp',
    date: '10 febbraio 2026',
    readMin: 5,
    tag: 'Consigli',
    intro: "L'autoconsumo è la chiave della redditività del tuo impianto solare. Ogni kWh autoconsumato vale 2–3 volte di più rispetto all'energia immessa in rete. Con le giuste strategie puoi utilizzare da solo il 70–80% della tua energia solare.",
    sections: [
      {
        heading: "Perché l'autoconsumo è così importante",
        content: ["L'eccedenza solare immessa in rete viene remunerata a circa 8–14 ct./kWh. L'energia autoconsumata risparmia invece 28–32 ct./kWh di costi dalla rete – il triplo del valore. Ogni punto percentuale aggiuntivo di autoconsumo migliora significativamente il tuo ROI."],
        stats: [{ label: 'Immissione in rete', value: '8–14 ct./kWh' }, { label: 'Autoconsumo', value: '28–32 ct./kWh' }, { label: 'Differenza', value: '3×' }, { label: 'Obiettivo', value: '70–80%' }],
      },
      {
        heading: 'Strategia 1: Spostare gli apparecchi programmabili',
        content: ["Lavastoviglie, lavatrice e asciugatrice consumano molto – e possono facilmente essere programmati nelle ore di picco solare (11–15). I moderni apparecchi con timer o domotica rendono questo semplice."],
        bullets: ["Lavatrice: impostare alle 12–14", "Lavastoviglie: dopo il pranzo", "Asciugatrice: subito dopo la lavatrice", "Acqua calda sanitaria: boost durante le ore solari"],
      },
      {
        heading: "Strategia 2: Integrare pompa di calore e auto elettrica",
        content: ["Una pompa di calore e un'auto elettrica sono i migliori potenziatori dell'autoconsumo. Entrambi possono funzionare con energia solare durante il giorno, portando l'autoconsumo al 60–80% – senza batteria.", "Le wallbox intelligenti (es. myEnergi zappi) caricano solo quando è disponibile sufficiente energia solare."],
        bullets: ["Auto elettrica caricata col solare: circa 40 ct./km di risparmio vs rete", "Pompa di calore al massimo di giorno: fino a 5 kWh autoconsumati/giorno", "Wallbox intelligente: carica solo quando c'è il sole", "Pompa di calore aria-acqua compatibile con tutti gli impianti solari"],
        highlight: "Pompa di calore + auto elettrica + solare: autoconsumo 65–80%, costi totali drasticamente ridotti.",
      },
      {
        heading: "Strategia 3: Comunità Elettrica Locale (CEL)",
        content: ["Dal 2026 puoi vendere la tua eccedenza di energia direttamente ai vicini nella stessa zona. In una CEL ricevi di più rispetto alla tariffa di immissione e i tuoi vicini pagano meno del prezzo di rete – una situazione win-win."],
        bullets: ["Remunerazione CEL: circa 15–20 ct./kWh (vs 8–14 rete)", "Il vicino paga: circa 20–25 ct./kWh (vs 28–32 rete)", "Istituzione semplice tramite il gestore di rete locale", "Particolarmente attrattivo nei condomini e nei quartieri"],
      },
    ],
    ctaHeading: "Massimizzazione autoconsumo – richiedi un preventivo",
    ctaText: "Gli installatori PVPro pianificano fin dall'inizio per un autoconsumo massimo. Consulenza gratuita e preventivo senza impegno.",
    ctaButton: 'Richiedi preventivo gratuito',
    formUrl: '/it/richiesta',
    relatedSlugs: ['batteriespeicher-solaranlage-lohnt-sich', 'roi-photovoltaik-schweiz', 'foerderungen-photovoltaik-2026'],
    faqs: [
      { question: "Qual è un tasso di autoconsumo realistico senza batteria?", answer: "Tipicamente 25–35% per una famiglia normale. Con l'uso programmato dei grandi elettrodomestici, sale al 35–45%. Con una pompa di calore o un'auto elettrica, al 50–65%." },
      { question: "Una batteria domestica conviene solo per l'autoconsumo?", answer: "Nella maggior parte dei casi sì, se hai un alto consumo serale e notturno. Se hai un'auto elettrica o una pompa di calore, l'autoconsumo può già essere molto alto senza batteria." },
      { question: "Come funziona una Comunità Elettrica Locale (CEL)?", answer: "I vicini si raggruppano e condividono l'energia solare tra loro. L'energia scorre attraverso la rete locale, con costi di rete ridotti fino al 40%. Istituzione tramite il gestore di rete locale." },
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
        content: ['Der Return on Investment (ROI) einer Solaranlage ergibt sich aus: (Jährliche Einsparungen + Einspeisevergütung) ÷ (Investitionskosten – Förderungen). Die Amortisationszeit in Jahren ist der Kehrwert des jährlichen ROI.', 'Beispielrechnung: 5-kWp-Anlage in Zürich, Kosten CHF 12\'000, EIV CHF 3\'200 → Nettoinvestition CHF 8\'800. Jährliche Einsparung: CHF 1\'400 → Amortisation: 8\'800 ÷ 1\'400 = 6.3 Jahre.'],
        stats: [{ label: 'Ø Amortisation CH', value: '7–10 Jahre' }, { label: 'Bestes Kanton', value: 'Tessin (4–6 J)' }, { label: 'Teuerstes Kanton', value: 'St. Gallen (9–12 J)' }, { label: 'Nach Amortis.', value: '100% Gewinn' }],
      },
      {
        heading: 'Einflussfaktoren: Was den ROI am meisten bestimmt',
        content: ['Die drei wichtigsten Faktoren sind: (1) Lokale Sonnenstunden, (2) Eigenverbrauchsquote und (3) lokaler Strompreis. Ein Haushalt in Lugano mit Wärmepumpe hat einen völlig anderen ROI als ein Haushalt in St. Gallen ohne Speicher.'],
        bullets: ['Sonnenstunden: Tessin 2\'157 h vs. St. Gallen 1\'522 h', 'Strompreis: Einfluss bis ±2 Jahre Amortisation', 'Eigenverbrauch: von 25% bis 80% möglich', 'Förderung: bis zu 35% der Kosten gedeckt'],
      },
      {
        heading: 'ROI-Vergleich nach Kantonen 2026',
        content: ['Es gibt grosse Unterschiede zwischen den Kantonen. Die beste Amortisation erreichen Anlagen im Tessin und im Wallis, die schlechteste in östlichen Kantonen mit wenig Sonne und tiefen Strompreisen.'],
        bullets: ['Tessin: 4–6 Jahre (2\'157 Sonnenstunden)', 'Wallis: 6–8 Jahre (Alpenbonus)', 'Genf: 7–9 Jahre (SIG-Bonus)', 'Zürich/Bern: 7–9 Jahre', 'Graubünden: 6–9 Jahre (Höhenbonus)', 'St. Gallen: 9–12 Jahre'],
        highlight: 'Im Tessin amortisiert sich eine Solaranlage in nur 4–6 Jahren – die beste Quote der Schweiz.',
      },
      {
        heading: 'Was passiert nach der Amortisation?',
        content: ['Nach der Amortisation produziert die Anlage noch 15–20 weitere Jahre Strom – komplett kostenfrei. Der gesamte "Gewinn" einer 5-kWp-Anlage über 25 Jahre beträgt typisch CHF 25\'000–40\'000 Netto-Ersparnis.', 'Solaranlagen haben eine garantierte Lebensdauer von 25–30 Jahren. Module verlieren ca. 0.5% Leistung pro Jahr – nach 25 Jahren produzieren sie noch 87–88% ihrer Ursprungsleistung.'],
        bullets: ['Lebensdauer Module: 25–30 Jahre', 'Leistungsdegradation: ca. 0.5%/Jahr', 'Gesamtersparnis über 25 Jahre: CHF 25\'000–40\'000', 'Immobilienwert: Steigerung um 3–5% dokumentiert'],
      },
    ],
    ctaHeading: 'ROI Ihrer Anlage berechnen – kostenlose Analyse',
    ctaText: 'Unsere Partnerinstallateure berechnen den genauen ROI für Ihre spezifische Situation. Kostenlose Beratung und Offerte.',
    ctaButton: 'Jetzt kostenlose Offerte anfordern',
    formUrl: '/anfrage',
    relatedSlugs: ['foerderungen-photovoltaik-2026', 'eigenverbrauch-optimieren-solar', 'batteriespeicher-solaranlage-lohnt-sich'],
    faqs: [
      { question: 'Wie lange dauert die Amortisation einer Solaranlage in der Schweiz?', answer: 'Durchschnittlich 7–10 Jahre, je nach Kanton, Systemgrösse und Nutzungsweise. Im Tessin sind es nur 4–6 Jahre, in St. Gallen bis zu 12 Jahre. Nach der Amortisation produziert die Anlage noch 15–20 Jahre Gewinn.' },
      { question: 'Welchen Einfluss hat der Strompreis auf den ROI?', answer: 'Sehr grossen. Ein Haushalt mit 32 Rp./kWh hat einen um 2–3 Jahre besseren ROI als einer mit 25 Rp./kWh. Steigende Strompreise verbessern den ROI von bestehenden Anlagen automatisch.' },
      { question: 'Verbessert sich der ROI mit einem Batteriespeicher?', answer: 'Oft ja, wenn Sie einen hohen Abend-/Nachtverbrauch haben. Mit E-Auto oder Wärmepumpe verbessert sich der ROI der Kombination um 1–2 Jahre, da der Eigenverbrauch auf 70–80% steigt.' },
      { question: 'Steigert eine Solaranlage den Immobilienwert?', answer: 'Ja. Studien zeigen eine Wertsteigerung von 3–5% für Liegenschaften mit Solaranlage. Besonders in energiebewussten Regionen wie Zürich oder Genf ist der Effekt messbar.' },
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
        content: ["Le retour sur investissement (ROI) d'une installation solaire résulte de: (Économies annuelles + rémunération injection) ÷ (Coûts d'investissement – subventions). La durée d'amortissement est l'inverse du ROI annuel.", "Exemple de calcul: installation de 5 kWc à Genève, coûts CHF 14'000, RU CHF 3'200, bonus SIG CHF 3'000 → investissement net CHF 7'800. Économies annuelles: CHF 1'600 → amortissement: 7'800 ÷ 1'600 = 4.9 ans."],
        stats: [{ label: 'Amortissement moyen CH', value: '7–10 ans' }, { label: 'Meilleur canton', value: 'Tessin (4–6 ans)' }, { label: 'Genève (avec SIG)', value: '7–9 ans' }, { label: "Après amortissement", value: '100% profit' }],
      },
      {
        heading: "Facteurs d'influence: ce qui détermine le plus le ROI",
        content: ["Les trois facteurs les plus importants sont: (1) les heures d'ensoleillement local, (2) le taux d'autoconsommation et (3) le prix local de l'électricité. Un ménage à Lugano avec une pompe à chaleur a un ROI complètement différent d'un ménage à St-Gall sans stockage."],
        bullets: ["Ensoleillement: Tessin 2'157 h vs St-Gall 1'522 h", "Prix électricité: impact jusqu'à ±2 ans sur l'amortissement", "Autoconsommation: de 25% à 80% possible", "Subventions: jusqu'à 35% des coûts couverts"],
      },
      {
        heading: 'Comparaison ROI par canton en 2026',
        content: ["Il y a de grandes différences entre les cantons. Le meilleur amortissement est atteint au Tessin et en Valais, le moins bon dans les cantons de l'est avec peu de soleil et des prix bas."],
        bullets: ["Tessin: 4–6 ans (2'157 heures de soleil)", "Valais: 6–8 ans (bonus alpin)", "Genève: 7–9 ans (bonus SIG)", "Vaud: 7–9 ans", "Grisons: 6–9 ans (bonus altitude)", "St-Gall: 9–12 ans"],
        highlight: "Au Tessin, une installation solaire s'amortit en seulement 4–6 ans – le meilleur ratio de Suisse.",
      },
      {
        heading: "Que se passe-t-il après l'amortissement?",
        content: ["Après l'amortissement, l'installation produit encore 15–20 ans d'électricité – complètement gratuitement. L'économie nette totale d'une installation de 5 kWc sur 25 ans est typiquement de CHF 25'000–40'000.", "Les modules solaires ont une durée de vie garantie de 25–30 ans. Leur puissance baisse d'environ 0.5% par an – après 25 ans, ils produisent encore 87–88% de leur puissance initiale."],
        bullets: ["Durée de vie modules: 25–30 ans", "Dégradation: env. 0.5%/an", "Économie totale sur 25 ans: CHF 25'000–40'000", "Valeur immobilière: augmentation de 3–5% documentée"],
      },
    ],
    ctaHeading: "Calculez le ROI de votre installation – analyse gratuite",
    ctaText: "Nos installateurs partenaires calculent le ROI exact pour votre situation spécifique. Conseil gratuit et offre sans engagement.",
    ctaButton: 'Demander une offre gratuite',
    formUrl: '/fr/demande',
    relatedSlugs: ['foerderungen-photovoltaik-2026', 'eigenverbrauch-optimieren-solar', 'batteriespeicher-solaranlage-lohnt-sich'],
    faqs: [
      { question: "Quelle est la durée d'amortissement d'une installation solaire en Suisse?", answer: "En moyenne 7–10 ans, selon le canton, la taille du système et le mode d'utilisation. Au Tessin, seulement 4–6 ans; à St-Gall, jusqu'à 12 ans. Après l'amortissement, l'installation produit encore 15–20 ans de bénéfices." },
      { question: "Quelle est l'influence du prix de l'électricité sur le ROI?", answer: "Très grande. Un ménage à 35 ct./kWh a un ROI de 2–3 ans meilleur qu'un ménage à 25 ct./kWh. La hausse des prix de l'électricité améliore automatiquement le ROI des installations existantes." },
      { question: "Le ROI s'améliore-t-il avec une batterie?", answer: "Souvent oui, si vous avez une consommation élevée le soir et la nuit. Avec un VE ou une PAC, le ROI de la combinaison s'améliore de 1–2 ans, car l'autoconsommation monte à 70–80%." },
      { question: "Une installation solaire valorise-t-elle le bien immobilier?", answer: "Oui. Des études montrent une valorisation de 3–5% pour les propriétés avec installation solaire. L'effet est particulièrement mesurable dans des régions soucieuses de l'énergie comme Genève ou Lausanne." },
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
        content: ['The return on investment (ROI) of a solar system is: (Annual savings + feed-in income) ÷ (Investment costs – subsidies). The payback period in years is the reciprocal of the annual ROI.', 'Example: 5 kWp system in Zurich, cost CHF 12,000, EIV CHF 3,200 → net investment CHF 8,800. Annual savings: CHF 1,400 → payback: 8,800 ÷ 1,400 = 6.3 years.'],
        stats: [{ label: 'Average payback CH', value: '7–10 years' }, { label: 'Best canton', value: 'Ticino (4–6 yrs)' }, { label: 'Geneva (with SIG)', value: '7–9 years' }, { label: 'After payback', value: '100% profit' }],
      },
      {
        heading: 'Key factors: what determines ROI most',
        content: ['The three most important factors are: (1) local sunshine hours, (2) self-consumption rate and (3) local electricity price. A household in Lugano with a heat pump has a completely different ROI than one in St. Gallen without storage.'],
        bullets: ['Sunshine: Ticino 2,157 h vs St. Gallen 1,522 h', 'Electricity price: impact up to ±2 years on payback', 'Self-consumption: from 25% to 80% possible', 'Subsidies: up to 35% of costs covered'],
      },
      {
        heading: 'ROI comparison by canton in 2026',
        content: ['There are large differences between cantons. The best payback is achieved in Ticino and Valais; the worst in eastern cantons with little sunshine and low electricity prices.'],
        bullets: ['Ticino: 4–6 years (2,157 sunshine hours)', 'Valais: 6–8 years (alpine bonus)', 'Geneva: 7–9 years (SIG bonus)', 'Zurich/Bern: 7–9 years', 'Grisons: 6–9 years (altitude bonus)', 'St. Gallen: 9–12 years'],
        highlight: 'In Ticino, a solar system pays off in just 4–6 years – the best ratio in Switzerland.',
      },
      {
        heading: 'What happens after payback?',
        content: ['After payback, the system produces another 15–20 years of electricity – completely free. The total net savings of a 5 kWp system over 25 years is typically CHF 25,000–40,000.', 'Solar modules have a guaranteed lifespan of 25–30 years. They lose about 0.5% of output per year – after 25 years they still produce 87–88% of original output.'],
        bullets: ['Module lifespan: 25–30 years', 'Performance degradation: approx. 0.5%/year', 'Total savings over 25 years: CHF 25,000–40,000', 'Property value increase: 3–5% documented'],
      },
    ],
    ctaHeading: 'Calculate your system ROI – free analysis',
    ctaText: 'Our partner installers calculate the exact ROI for your specific situation. Free consultation and quote.',
    ctaButton: 'Request a free quote',
    formUrl: '/en/request',
    relatedSlugs: ['foerderungen-photovoltaik-2026', 'eigenverbrauch-optimieren-solar', 'batteriespeicher-solaranlage-lohnt-sich'],
    faqs: [
      { question: 'How long does a solar system take to pay off in Switzerland?', answer: 'On average 7–10 years, depending on canton, system size and usage pattern. In Ticino, only 4–6 years; in St. Gallen, up to 12 years. After payback, the system still produces 15–20 years of profit.' },
      { question: 'How much does electricity price affect ROI?', answer: 'Very significantly. A household at CHF 0.32/kWh has a 2–3 year better ROI than one at CHF 0.25/kWh. Rising electricity prices automatically improve the ROI of existing systems.' },
      { question: 'Does ROI improve with a battery?', answer: 'Often yes, if you have high evening and night consumption. With an EV or heat pump, the ROI of the combination improves by 1–2 years as self-consumption rises to 70–80%.' },
      { question: 'Does a solar system increase property value?', answer: 'Yes. Studies show a 3–5% increase in value for properties with solar systems. The effect is particularly measurable in energy-conscious regions like Zurich or Geneva.' },
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
        content: ["Il ritorno sull'investimento (ROI) di un impianto solare è: (Risparmio annuale + proventi da immissione) ÷ (Costi di investimento – incentivi). Il periodo di ammortamento in anni è il reciproco del ROI annuale.", "Esempio: impianto da 5 kWp a Lugano, costo CHF 12.000, RU CHF 3.200, contributo cantonale TI CHF 1.800 → investimento netto CHF 7.000. Risparmio annuale: CHF 1.700 → ammortamento: 7.000 ÷ 1.700 = 4.1 anni."],
        stats: [{ label: 'Ammortamento medio CH', value: '7–10 anni' }, { label: 'Cantone migliore', value: 'Ticino (4–6 anni)' }, { label: 'Dopo ammortamento', value: '100% guadagno' }, { label: 'Durata impianto', value: '25–30 anni' }],
      },
      {
        heading: "Fattori chiave: cosa determina di più il ROI",
        content: ["I tre fattori più importanti sono: (1) ore di sole locali, (2) tasso di autoconsumo e (3) prezzo locale dell'energia. Una famiglia a Lugano con una pompa di calore ha un ROI completamente diverso da una a San Gallo senza accumulo."],
        bullets: ["Ore di sole: Ticino 2.157 h vs San Gallo 1.522 h", "Prezzo energia: impatto fino a ±2 anni sull'ammortamento", "Autoconsumo: dal 25% all'80% possibile", "Incentivi: fino al 35% dei costi coperti"],
      },
      {
        heading: 'Confronto ROI per cantone nel 2026',
        content: ["Ci sono grandi differenze tra i cantoni. Il miglior ammortamento si raggiunge in Ticino e in Vallese; il peggiore nei cantoni orientali con poco sole e prezzi dell'energia bassi."],
        bullets: ["Ticino: 4–6 anni (2.157 ore di sole)", "Vallese: 6–8 anni (bonus alpino)", "Ginevra: 7–9 anni (bonus SIG)", "Zurigo/Berna: 7–9 anni", "Grigioni: 6–9 anni (bonus altitudine)", "San Gallo: 9–12 anni"],
        highlight: "In Ticino un impianto solare si ammortizza in soli 4–6 anni – il miglior rapporto della Svizzera.",
      },
      {
        heading: "Cosa succede dopo l'ammortamento?",
        content: ["Dopo l'ammortamento, l'impianto produce altri 15–20 anni di energia – completamente gratis. Il risparmio netto totale di un impianto da 5 kWp su 25 anni è tipicamente CHF 25.000–40.000.", "I moduli solari hanno una durata garantita di 25–30 anni. Perdono circa lo 0,5% di potenza all'anno – dopo 25 anni producono ancora l'87–88% della loro potenza originale."],
        bullets: ["Durata moduli: 25–30 anni", "Degradazione: circa 0,5%/anno", "Risparmio totale su 25 anni: CHF 25.000–40.000", "Valore immobiliare: aumento del 3–5% documentato"],
      },
    ],
    ctaHeading: "Calcola il ROI del tuo impianto – analisi gratuita",
    ctaText: "I nostri installatori partner calcolano il ROI esatto per la tua situazione specifica. Consulenza gratuita e preventivo senza impegno.",
    ctaButton: 'Richiedi preventivo gratuito',
    formUrl: '/it/richiesta',
    relatedSlugs: ['foerderungen-photovoltaik-2026', 'eigenverbrauch-optimieren-solar', 'batteriespeicher-solaranlage-lohnt-sich'],
    faqs: [
      { question: "Quanto tempo ci vuole perché un impianto solare si ammortizzi in Svizzera?", answer: "In media 7–10 anni, a seconda del cantone, delle dimensioni del sistema e delle modalità di utilizzo. In Ticino solo 4–6 anni; a San Gallo fino a 12 anni. Dopo l'ammortamento, l'impianto produce ancora 15–20 anni di guadagno." },
      { question: "Quanto influisce il prezzo dell'energia sul ROI?", answer: "Moltissimo. Una famiglia a 32 ct./kWh ha un ROI di 2–3 anni migliore rispetto a una a 25 ct./kWh. L'aumento dei prezzi dell'energia migliora automaticamente il ROI degli impianti esistenti." },
      { question: "Il ROI migliora con una batteria?", answer: "Spesso sì, se hai un alto consumo serale e notturno. Con un'auto elettrica o una pompa di calore, il ROI della combinazione migliora di 1–2 anni poiché l'autoconsumo sale al 70–80%." },
      { question: "Un impianto solare aumenta il valore dell'immobile?", answer: "Sì. Studi mostrano un aumento di valore del 3–5% per gli immobili con impianto solare. L'effetto è particolarmente misurabile in regioni attente all'energia come Zurigo o Ginevra." },
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
          "Erstens sind die Modulpreise in den letzten fünf Jahren um rund 30% gesunken. Eine typische 10-kWp-Anlage für ein Einfamilienhaus kostet heute CHF 16'000–28'000 — deutlich weniger als noch 2019.",
          "Zweitens sind die Strompreise in der Schweiz gestiegen. Wer heute 30 Rappen pro kWh zahlt, spart mit einer Solaranlage jedes Jahr mehr als früher.",
          "Drittens läuft die steuerliche Absetzbarkeit Ende 2027 aus. Wer jetzt investiert, kann die gesamte Investition noch von der Einkommenssteuer abziehen — eine Ersparnis von 20–35% je nach Grenzsteuersatz. Wer wartet, verliert diesen Vorteil.",
        ],
        stats: [
          { label: 'Typische Amortisation 2026', value: '8–12 Jahre' },
          { label: 'Ersparnis über 25 Jahre (10 kWp)', value: "CHF 75'000" },
          { label: 'Steuerersparnis auf Investition', value: 'Bis 35%' },
        ],
      },
      {
        heading: 'Was kostet eine Solaranlage 2026 in der Schweiz?',
        content: [
          "Bevor wir beantworten, ob sich eine Solaranlage in der Schweiz 2026 lohnt, müssen wir wissen, was sie kostet. Die Preise sind 2026 so tief wie nie. Hier die aktuellen Richtwerte inklusive Installation:",
        ],
        bullets: [
          "5 kWp (kleines EFH): brutto CHF 9'000–11'000 → nach EIV CHF 7'100–9'100 → nach Steuerabzug (25%) CHF 5'300–6'800",
          "8 kWp (Standard EFH): brutto CHF 13'000–16'000 → nach EIV CHF 10'300–13'000 → nach Steuerabzug CHF 7'700–9'700",
          "10 kWp (grosses EFH): brutto CHF 16'000–20'000 → nach EIV CHF 12'450–16'450 → nach Steuerabzug CHF 9'300–12'300",
          "15 kWp (MFH / gross): brutto CHF 22'000–28'000 → nach EIV CHF 17'200–23'200 → nach Steuerabzug CHF 12'900–17'400",
        ],
        highlight: "EIV = Einmalvergütung des Bundes (ca. CHF 380/kWp + CHF 700 Grundbeitrag). Steuerabzug je nach Kanton und Einkommen. Wir empfehlen immer mindestens 3 Offerten zu vergleichen — für die gleiche Anlage variieren die Preise um mehrere tausend Franken.",
      },
      {
        heading: 'Wie viel kann ich tatsächlich sparen?',
        content: [
          "Eine 10-kWp-Anlage produziert in der Schweiz jährlich ca. 9'000–10'000 kWh Strom. So sieht die Rechnung für ein typisches Einfamilienhaus aus:",
          "Eigenverbrauch (ca. 30–40% ohne Speicher): 3'000 kWh × CHF 0.30/kWh = CHF 900/Jahr gespart. Rückliefervergütung (überschüssiger Strom): 6'000 kWh × CHF 0.10/kWh = CHF 600/Jahr Einnahmen. Gesamtnutzen pro Jahr: ca. CHF 1'500.",
          "Bei einer Nettoinvestition von CHF 12'000 (nach EIV und Steuerabzug) ergibt das eine Amortisation von ca. 8 Jahren. Danach produzieren Sie über 15 Jahre praktisch kostenlosen Strom.",
          "Mit einem Batteriespeicher steigt der Eigenverbrauch auf 60–70%, was die jährliche Ersparnis auf CHF 2'000–2'500 erhöht — bei allerdings höheren Anfangskosten.",
        ],
        highlight: "Über 25 Jahre beträgt der kumulierte Ertrag einer 10-kWp-Anlage CHF 45'000–75'000 — abzüglich aller Kosten bleibt ein Reingewinn von CHF 25'000–35'000. Das entspricht einer jährlichen Rendite von 6–10% auf das investierte Kapital. Keine Schweizer Bank bietet das.",
      },
      {
        heading: 'Lohnt sich eine Solaranlage in der Schweiz 2026 je nach Kanton?',
        content: [
          "Die Schweiz ist kein homogenes Land — die Sonnenstunden, Strompreise und Förderungen variieren stark zwischen den Kantonen. Die Frage, ob sich eine Solaranlage lohnt, hat je nach Wohnort eine andere Antwort.",
        ],
        bullets: [
          "Tessin: ~2'100 Sonnenstunden/Jahr → 4–6 Jahre Amortisation → Bester Wert in der Schweiz",
          "Wallis: ~2'000 Sonnenstunden/Jahr → 5–7 Jahre → Sehr hohe Sonneneinstrahlung, Rhonetal optimal",
          "Waadt / Genf: ~1'800 Sonnenstunden/Jahr → 7–9 Jahre → Zusätzliche kantonale Förderungen",
          "Bern: ~1'800 Sonnenstunden/Jahr → 8–10 Jahre → Gute Einstrahlung, solide Wirtschaftlichkeit",
          "Basel: ~1'550 Sonnenstunden/Jahr → 9–11 Jahre → Basel-Stadt bietet zusätzliche Förderung",
          "Zürich: ~1'500 Sonnenstunden/Jahr → 10–13 Jahre → Solarpflicht für Neubauten, Stadtförderung",
          "Luzern / Aargau: ~1'500 Sonnenstunden/Jahr → 10–12 Jahre → Solide Wirtschaftlichkeit",
          "St. Gallen: ~1'450 Sonnenstunden/Jahr → 11–13 Jahre → Kantonale Energieförderung verfügbar",
          "Graubünden: ~1'700 Sonnenstunden/Jahr → 8–10 Jahre → Bergregionen mit hoher Einstrahlung",
        ],
        highlight: "Lohnt sich eine Solaranlage in der Schweiz 2026 auch im Mittelland mit nur 1'500 Sonnenstunden? Ja — die Amortisation dauert etwas länger, aber über 25 Jahre bleibt sie klar rentabel. Selbst im sonnenärmsten Kanton produziert eine gut ausgerichtete Anlage genug Strom, um sich zu lohnen.",
      },
      {
        heading: 'Für wen lohnt sich eine Solaranlage besonders?',
        content: [
          "Aus unserer Erfahrung mit über 1'000 Anlagen in der Schweiz lohnt sich eine Solaranlage am meisten für diese Situationen:",
        ],
        bullets: [
          "Hausbesitzer mit hohem Tagesverbrauch: Wer tagsüber zu Hause ist — Homeoffice, Kinder, Pensionierte — verbraucht den Solarstrom direkt. Diese Haushalte amortisieren die Anlage oft 2–3 Jahre früher als im Durchschnitt.",
          "Besitzer einer Wärmepumpe oder eines Elektroautos: Die Kombination Solaranlage + Wärmepumpe reduziert die Heizkosten um 40–60%. Wer das Auto tagsüber lädt, spart CHF 0.20–0.25 pro kWh gegenüber dem Netzstrom.",
          "Hausbesitzer, die bald renovieren oder neu bauen: Bei einer Dachsanierung sind die Mehrkosten für die Solaranlage 20–30% tiefer — Gerüst und Handwerker sind ohnehin vor Ort.",
          "Mehrfamilienhausbesitzer mit ZEV: Ein Zusammenschluss zum Eigenverbrauch erlaubt den direkten Verkauf des Solarstroms an Mieter — das erhöht die Rendite erheblich.",
          "Wer die steuerliche Absetzbarkeit noch nutzen will: Die Möglichkeit läuft Ende 2027 aus. Bei 25–35% Grenzsteuersatz bedeutet das eine reale Ersparnis von CHF 4'000–8'000.",
        ],
      },
      {
        heading: 'Für wen lohnt sich eine Solaranlage weniger?',
        content: [
          "Ehrlichkeit ist uns wichtig. Lohnt sich eine Solaranlage in der Schweiz 2026 für jeden? Nicht immer gleich stark. Es gibt Situationen, in denen die Wirtschaftlichkeit eingeschränkt ist:",
        ],
        bullets: [
          "Ungünstige Dachorientierung: Ein nach Norden ausgerichtetes Dach produziert bis zu 40% weniger als ein Süddach. Die Amortisationszeit verlängert sich spürbar — eine professionelle Analyse ist besonders wichtig.",
          "Starke Verschattung: Bäume, Nachbargebäude oder Dachaufbauten können die Produktion um 10–20% senken. Moderne Optimierer und Mikroinverter können helfen, erhöhen aber die Kosten.",
          "Geplanter Hausverkauf in wenigen Jahren: Eine Solaranlage steigert den Liegenschaftswert um 3–5%, aber die volle Amortisation dauert 8–12 Jahre. Wer in 2–3 Jahren verkauft, profitiert finanziell weniger.",
          "Sehr altes Dach: Wenn das Dach in den nächsten 5–10 Jahren saniert werden muss, sollte man Sanierung und Solaranlage kombinieren. Eine Anlage auf einem maroden Dach ist nicht sinnvoll.",
        ],
      },
      {
        heading: 'Was ändert sich 2026 bei der Förderung?',
        content: [
          "Neue Rückliefervergütung ab Marktpreis: Ab 2026 orientiert sich die Rückliefervergütung am Börsenpreis des Stroms. Im Sommer kann die Vergütung sinken, wenn viele Anlagen gleichzeitig einspeisen. Für kleine Anlagen unter 150 kWp gibt es eine Mindestvergütung als Schutz.",
          "Steuerliche Absetzbarkeit läuft 2027 aus: Die Möglichkeit, die gesamte Investition als Liegenschaftsunterhalt von der Steuer abzuziehen, gilt nur noch bis Ende 2027. Bei 25–35% Grenzsteuersatz: CHF 4'000–8'000 reale Ersparnis auf eine typische Anlage. Die Planung und Installation dauert 4–12 Wochen — wer diesen Vorteil nutzen möchte, sollte jetzt handeln.",
          "Neue Lokale Elektrizitätsgemeinschaften (LEG) ab 2026: Hausbesitzer können ihren überschüssigen Solarstrom direkt an Nachbarn verkaufen — ohne gemeinsames Dach. Das eröffnet neue Möglichkeiten für Quartierslösungen und erhöht die Wirtschaftlichkeit für alle Beteiligten.",
        ],
      },
      {
        heading: 'Lohnt sich eine Solaranlage mit oder ohne Batteriespeicher?',
        content: [
          "Eine der häufigsten Fragen, die wir von Schweizer Hausbesitzern erhalten: Lohnt sich eine Solaranlage mit oder ohne Batteriespeicher besser?",
        ],
        bullets: [
          "Ohne Speicher: Eigenverbrauch ca. 30–40%, Amortisation ca. 8–12 Jahre, tiefere Anfangsinvestition, sofort rentabel",
          "Mit Speicher: Eigenverbrauch ca. 60–80%, Amortisation ca. 10–14 Jahre (Gesamtsystem), höhere Anfangsinvestition (+CHF 7'000–12'000), besonders rentabel mit E-Auto oder Wärmepumpe",
        ],
        highlight: "Fazit: Eine Solaranlage ohne Speicher lohnt sich sofort. Ein Speicher lohnt sich dann, wenn der Abendverbrauch hoch ist oder ein E-Auto und eine Wärmepumpe vorhanden sind. Wer eine Anlage plant, sollte den Wechselrichter so wählen, dass ein Speicher später problemlos nachgerüstet werden kann.",
      },
      {
        heading: "Unsere Empfehlung nach 1'000+ vermittelten Anlagen",
        content: [
          "Lohnt sich eine Solaranlage in der Schweiz 2026? Nach drei Jahren Erfahrung und über 1'000 vermittelten Anlagen können wir eines sagen: Der häufigste Fehler ist nicht zu früh zu investieren — sondern zu lange zu warten und dabei Steuervorteil, Förderung und Stromkostenersparnis zu verlieren.",
          "Der zweitgrösste Fehler ist, nur eine einzige Offerte einzuholen. Für die gleiche Anlage variieren die Preise zwischen verschiedenen Installateuren um mehrere tausend Franken. Wer drei Offerten vergleicht, spart im Schnitt CHF 2'000–4'000 — ohne auf Qualität zu verzichten.",
          "PVPro.ch vermittelt kostenlos bis zu 3 zertifizierte Installateure aus Ihrer Region. In 2 Minuten Formular ausfüllen — und innerhalb von 48 Stunden haben Sie konkrete Angebote zum Vergleichen.",
        ],
      },
    ],
    ctaHeading: 'Jetzt berechnen, ob sich eine Solaranlage für Ihr Dach lohnt',
    ctaText: "Lohnt sich eine Solaranlage in der Schweiz 2026 für Ihr Haus? In 2 Minuten Formular ausfüllen — wir vermitteln Ihnen bis zu 3 kostenlose Offerten von zertifizierten Installateuren aus Ihrer Region. Vergleichen Sie und entscheiden Sie frei.",
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
      { question: 'Lohnt sich eine Solaranlage in der Schweiz 2026 wirklich?', answer: "Ja. Dank gesunkener Modulpreise, gestiegener Strompreise und attraktiver Förderung lohnt sich eine Solaranlage in der Schweiz 2026 mehr als je zuvor. Die Amortisation liegt je nach Kanton bei 4–13 Jahren, bei einer Lebensdauer von 25–30 Jahren." },
      { question: 'Lohnt sich eine Solaranlage in der Schweiz auch ohne viel Sonne?', answer: "Ja. Moderne Module produzieren auch bei bewölktem Himmel Strom. Selbst im Kanton Zürich mit ca. 1'500 Sonnenstunden pro Jahr amortisiert sich eine Anlage in 10–13 Jahren — bei einer Lebensdauer von 25–30 Jahren ist das klar rentabel." },
      { question: 'Wie viel spart man mit einer Solaranlage pro Jahr?', answer: "Eine typische 10-kWp-Anlage spart ohne Speicher ca. CHF 1'500 pro Jahr. Mit Speicher, Wärmepumpe oder E-Auto steigt die jährliche Ersparnis auf CHF 2'000–3'000." },
      { question: 'Wann amortisiert sich eine Solaranlage in der Schweiz?', answer: "Im Durchschnitt in 8–12 Jahren — je nach Kanton, Eigenverbrauch und Förderung. Im Tessin bereits in 4–6 Jahren, im Mittelland eher in 10–13 Jahren. Nach der Amortisation produzieren Sie über 15 Jahre praktisch kostenlosen Strom." },
      { question: 'Lohnt sich eine Solaranlage ohne Batteriespeicher?', answer: "Ja. Eine Solaranlage ohne Speicher ist bereits rentabel. Der Speicher erhöht die Ersparnis, verlängert aber die Amortisationszeit des Gesamtsystems um 1–2 Jahre. Ob er sich lohnt, hängt vom Verbrauchsprofil ab." },
      { question: 'Welcher Kanton in der Schweiz eignet sich am besten für Solarenergie?', answer: "Das Tessin mit über 2'100 Sonnenstunden pro Jahr hat den besten Ausgangspunkt für eine schnelle Amortisation. Aber auch im Wallis, in Graubünden und am Genfersee sind die Bedingungen ausgezeichnet. Selbst im Mittelland lohnt sich eine Solaranlage klar." },
      { question: 'Lohnt sich eine Solaranlage für ein Mehrfamilienhaus?', answer: "Ja, oft sogar besser als für ein Einfamilienhaus. Die grössere Dachfläche ermöglicht eine leistungsstärkere Anlage. Mit einem ZEV (Zusammenschluss zum Eigenverbrauch) kann der Strom direkt an die Mieter verkauft werden — das erhöht die Rendite erheblich." },
      { question: 'Was passiert mit der Steuerabzugsmöglichkeit nach 2027?', answer: "Die Möglichkeit, die Investition als Liegenschaftsunterhalt steuerlich abzuziehen, läuft Ende 2027 aus. Wer noch davon profitieren möchte, sollte die Installation zeitnah planen — denn von der Offerte bis zur Inbetriebnahme vergehen 4–12 Wochen." },
      { question: 'Wie finde ich den günstigsten Installateur in meiner Region?', answer: "Indem Sie mindestens 3 Offerten vergleichen. PVPro.ch vermittelt kostenlos bis zu 3 zertifizierte Installateure aus Ihrer Region — ohne Werbeanrufe und ohne Verpflichtung." },
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
    intro: "Vaut-il vraiment la peine d'investir dans une installation solaire en Suisse en 2026? Oui — mais pas de la même manière pour tout le monde. La rentabilité dépend de votre canton, de votre consommation, de l'orientation de votre toit et de la manière dont vous exploitez les subventions disponibles. Après trois ans d'expérience avec plus de 1'000 installations réalisées dans toute la Suisse, nous avons une réponse claire — avec de vrais chiffres, sans embellissement.",
    sections: [
      {
        heading: "Installation solaire 2026 — la réponse courte",
        content: [
          "Vaut-il la peine d'investir dans une installation solaire en Suisse en 2026? Oui, plus que jamais. Trois évolutions font de 2026 la meilleure année pour investir:",
          "Premièrement, les prix des modules ont baissé d'environ 30% au cours des cinq dernières années. Une installation typique de 10 kWc pour une maison individuelle coûte aujourd'hui CHF 16'000–28'000 — nettement moins qu'en 2019.",
          "Deuxièmement, les prix de l'électricité en Suisse ont augmenté. Celui qui paie aujourd'hui 30 centimes par kWh économise chaque année davantage grâce à une installation solaire.",
          "Troisièmement, la déductibilité fiscale expire fin 2027. Celui qui investit maintenant peut encore déduire l'intégralité de l'investissement de son impôt sur le revenu — une économie de 20–35% selon le taux marginal d'imposition. Attendre, c'est perdre cet avantage.",
        ],
        stats: [
          { label: 'Amortissement typique 2026', value: '8–12 ans' },
          { label: 'Économies sur 25 ans (10 kWc)', value: "CHF 75'000" },
          { label: 'Économie fiscale sur investissement', value: "Jusqu'à 35%" },
        ],
      },
      {
        heading: "Combien coûte une installation solaire en 2026 en Suisse?",
        content: [
          "Avant de répondre si une installation solaire vaut la peine en Suisse en 2026, nous devons savoir ce qu'elle coûte. Les prix sont au plus bas en 2026. Voici les valeurs indicatives actuelles, installation incluse:",
        ],
        bullets: [
          "5 kWc (petite maison): brut CHF 9'000–11'000 → après RU CHF 7'100–9'100 → après déduction fiscale (25%) CHF 5'300–6'800",
          "8 kWc (maison standard): brut CHF 13'000–16'000 → après RU CHF 10'300–13'000 → après déduction fiscale CHF 7'700–9'700",
          "10 kWc (grande maison): brut CHF 16'000–20'000 → après RU CHF 12'450–16'450 → après déduction fiscale CHF 9'300–12'300",
          "15 kWc (immeuble / grand): brut CHF 22'000–28'000 → après RU CHF 17'200–23'200 → après déduction fiscale CHF 12'900–17'400",
        ],
        highlight: "RU = Rétribution unique fédérale (env. CHF 380/kWc + CHF 700 de contribution de base). Déduction fiscale selon canton et revenu. Nous recommandons toujours de comparer au moins 3 offres — pour la même installation, les prix peuvent varier de plusieurs milliers de francs.",
      },
      {
        heading: "Combien puis-je réellement économiser?",
        content: [
          "Une installation de 10 kWc produit en Suisse environ 9'000–10'000 kWh par an. Voici le calcul pour une maison individuelle typique:",
          "Autoconsommation (env. 30–40% sans batterie): 3'000 kWh × CHF 0.30/kWh = CHF 900/an économisés. Rétribution pour l'injection (surplus): 6'000 kWh × CHF 0.10/kWh = CHF 600/an de revenus. Bénéfice total par an: env. CHF 1'500.",
          "Pour un investissement net de CHF 12'000 (après RU et déduction fiscale), cela donne un amortissement d'environ 8 ans. Ensuite, vous produisez de l'électricité pratiquement gratuite pendant encore 15 ans.",
          "Avec une batterie, l'autoconsommation monte à 60–70%, ce qui porte l'économie annuelle à CHF 2'000–2'500 — mais avec des coûts initiaux plus élevés.",
        ],
        highlight: "Sur 25 ans, le rendement cumulé d'une installation de 10 kWc atteint CHF 45'000–75'000 — déduction faite de tous les coûts, il reste un bénéfice net de CHF 25'000–35'000. Soit un rendement annuel de 6–10% sur le capital investi. Aucune banque suisse n'offre cela.",
      },
      {
        heading: "Vaut-il la peine selon le canton?",
        content: [
          "La Suisse n'est pas un pays homogène — les heures d'ensoleillement, les prix de l'électricité et les subventions varient fortement d'un canton à l'autre.",
        ],
        bullets: [
          "Tessin: ~2'100 heures d'ensoleillement/an → 4–6 ans d'amortissement → Meilleure rentabilité de Suisse",
          "Valais: ~2'000 heures/an → 5–7 ans → Très fort ensoleillement, vallée du Rhône optimale",
          "Vaud / Genève: ~1'800 heures/an → 7–9 ans → Subventions cantonales supplémentaires",
          "Berne: ~1'800 heures/an → 8–10 ans → Bon ensoleillement, rentabilité solide",
          "Bâle: ~1'550 heures/an → 9–11 ans → Bâle-Ville offre des subventions supplémentaires",
          "Zurich: ~1'500 heures/an → 10–13 ans → Obligation solaire pour les nouvelles constructions",
          "Lucerne / Argovie: ~1'500 heures/an → 10–12 ans → Rentabilité solide",
          "Saint-Gall: ~1'450 heures/an → 11–13 ans → Subventions énergétiques cantonales disponibles",
          "Grisons: ~1'700 heures/an → 8–10 ans → Régions alpines avec fort ensoleillement",
        ],
        highlight: "Une installation solaire vaut-elle la peine dans le Plateau avec seulement 1'500 heures d'ensoleillement? Oui — l'amortissement prend un peu plus de temps, mais sur 25 ans, la rentabilité est clairement positive.",
      },
      {
        heading: "Pour qui une installation solaire est-elle particulièrement rentable?",
        content: [
          "D'après notre expérience avec plus de 1'000 installations en Suisse, une installation solaire est la plus rentable dans ces situations:",
        ],
        bullets: [
          "Propriétaires avec une consommation élevée en journée: Ceux qui sont à la maison en journée — télétravail, enfants, retraités — consomment directement l'énergie solaire. Ces ménages amortissent leur installation 2–3 ans plus tôt que la moyenne.",
          "Propriétaires d'une pompe à chaleur ou d'une voiture électrique: La combinaison solaire + pompe à chaleur réduit les coûts de chauffage de 40–60%. Recharger la voiture en journée permet d'économiser CHF 0.20–0.25 par kWh.",
          "Propriétaires qui vont bientôt rénover ou construire: Lors d'une rénovation de toiture, le surcoût pour l'installation solaire est 20–30% inférieur — l'échafaudage et les artisans sont déjà sur place.",
          "Propriétaires d'immeubles avec RCP: Un regroupement dans le cadre de la consommation propre permet de vendre l'énergie directement aux locataires — ce qui augmente considérablement le rendement.",
          "Ceux qui veulent encore profiter de la déductibilité fiscale: La possibilité expire fin 2027. Avec un taux marginal de 25–35%: économie réelle de CHF 4'000–8'000.",
        ],
      },
      {
        heading: "Pour qui une installation solaire est-elle moins rentable?",
        content: [
          "La transparence est importante pour nous. Une installation solaire vaut-elle la peine pour tout le monde en 2026? Pas toujours de la même manière. Il existe des situations où la rentabilité est réduite:",
        ],
        bullets: [
          "Orientation défavorable du toit: Un toit orienté au nord produit jusqu'à 40% d'électricité en moins. L'amortissement se prolonge sensiblement — une analyse professionnelle est particulièrement importante.",
          "Ombrage important: Arbres, bâtiments voisins ou éléments de toiture peuvent réduire la production de 10–20%. Des optimiseurs modernes peuvent atténuer le problème, mais augmentent les coûts.",
          "Vente prévue de la maison dans quelques années: Une installation solaire augmente la valeur du bien de 3–5%, mais l'amortissement complet prend 8–12 ans. Celui qui vend dans 2–3 ans en profite moins financièrement.",
          "Toit très ancien: Si le toit doit être rénové dans les 5–10 prochaines années, il vaut mieux combiner rénovation et installation solaire. Installer des panneaux sur un toit délabré n'est pas judicieux.",
        ],
      },
      {
        heading: "Qu'est-ce qui change en 2026 pour les subventions?",
        content: [
          "Nouvelle rétribution pour l'injection au prix du marché: Depuis 2026, la rétribution est basée sur le prix de bourse de l'électricité. En été, quand de nombreuses installations injectent simultanément, la rétribution peut baisser. Pour les petites installations inférieures à 150 kWc, une rétribution minimale garantie protège les propriétaires.",
          "La déductibilité fiscale expire en 2027: La possibilité de déduire l'investissement comme entretien immobilier ne vaut que jusqu'à fin 2027. Avec un taux marginal de 25–35%: CHF 4'000–8'000 d'économie réelle. La planification et l'installation durent 4–12 semaines — il faut agir maintenant.",
          "Nouvelles communautés locales d'électricité (CLE) depuis 2026: Les propriétaires peuvent vendre leur surplus d'énergie solaire directement aux voisins — sans toit commun. Cela crée de nouvelles opportunités et augmente la rentabilité pour tous.",
        ],
      },
      {
        heading: "Installation solaire avec ou sans batterie?",
        content: [
          "L'une des questions les plus fréquentes que nous recevons de propriétaires suisses: une installation solaire avec ou sans batterie est-elle plus rentable?",
        ],
        bullets: [
          "Sans batterie: autoconsommation env. 30–40%, amortissement env. 8–12 ans, investissement initial plus faible, rentable immédiatement",
          "Avec batterie: autoconsommation env. 60–80%, amortissement env. 10–14 ans (système complet), investissement initial plus élevé (+CHF 7'000–12'000), particulièrement rentable avec voiture électrique ou pompe à chaleur",
        ],
        highlight: "Conclusion: Une installation solaire sans batterie est rentable immédiatement. Une batterie est intéressante si la consommation en soirée est élevée ou si vous possédez une voiture électrique ou une pompe à chaleur. Lors de la planification, choisissez un onduleur compatible avec l'ajout futur d'une batterie.",
      },
      {
        heading: "Notre recommandation après plus de 1'000 installations",
        content: [
          "Une installation solaire vaut-elle la peine en Suisse en 2026? Après trois ans d'expérience et plus de 1'000 installations, nous pouvons affirmer: l'erreur la plus fréquente n'est pas d'investir trop tôt — c'est d'attendre trop longtemps et de perdre l'avantage fiscal, les subventions et les économies sur l'électricité.",
          "La deuxième erreur la plus fréquente est de ne demander qu'une seule offre. Pour la même installation, les prix entre installateurs peuvent varier de plusieurs milliers de francs. Comparer trois offres permet d'économiser en moyenne CHF 2'000–4'000 — sans sacrifier la qualité.",
          "PVPro.ch met gratuitement en relation jusqu'à 3 installateurs certifiés de votre région. Remplissez le formulaire en 2 minutes — et recevez des offres concrètes dans les 48 heures.",
        ],
      },
    ],
    ctaHeading: "Calculez maintenant si les panneaux solaires valent la peine pour votre toit",
    ctaText: "Une installation solaire vaut-elle la peine pour votre maison en Suisse en 2026? Remplissez le formulaire en 2 minutes — nous vous mettons en contact avec jusqu'à 3 installateurs certifiés de votre région. Comparez et décidez librement.",
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
      { question: "Une installation solaire vaut-elle vraiment la peine en Suisse en 2026?", answer: "Oui. Grâce à la baisse des prix des modules, à la hausse des prix de l'électricité et à des subventions attractives, une installation solaire vaut plus la peine que jamais en Suisse en 2026. L'amortissement se situe entre 4 et 13 ans selon le canton, pour une durée de vie de 25–30 ans." },
      { question: "Une installation solaire vaut-elle la peine en Suisse sans beaucoup de soleil?", answer: "Oui. Les modules modernes produisent de l'électricité même par temps couvert. Dans le canton de Zurich, avec environ 1'500 heures d'ensoleillement par an, une installation s'amortit en 10–13 ans — pour une durée de vie de 25–30 ans, c'est clairement rentable." },
      { question: "Combien économise-t-on avec une installation solaire par an?", answer: "Une installation typique de 10 kWc économise environ CHF 1'500 par an sans batterie. Avec une batterie, une pompe à chaleur ou une voiture électrique, l'économie annuelle monte à CHF 2'000–3'000." },
      { question: "Quand une installation solaire s'amortit-elle en Suisse?", answer: "En moyenne en 8–12 ans — selon le canton, l'autoconsommation et les subventions. Au Tessin déjà en 4–6 ans, dans le Plateau plutôt en 10–13 ans. Après l'amortissement, vous produisez de l'électricité pratiquement gratuite pendant encore 15 ans." },
      { question: "Une installation solaire sans batterie vaut-elle la peine?", answer: "Oui. Une installation sans batterie est déjà rentable. La batterie augmente les économies, mais prolonge l'amortissement du système complet de 1–2 ans. Sa rentabilité dépend du profil de consommation." },
      { question: "Quel canton suisse est le plus adapté à l'énergie solaire?", answer: "Le Tessin, avec plus de 2'100 heures d'ensoleillement par an, offre les meilleures conditions pour un amortissement rapide. Mais le Valais, les Grisons et le lac Léman offrent également d'excellentes conditions. Même dans le Plateau, une installation solaire est clairement rentable." },
      { question: "Une installation solaire vaut-elle la peine pour un immeuble?", answer: "Oui, souvent encore mieux que pour une maison individuelle. La grande surface de toit permet une installation plus puissante. Avec un RCP, le courant peut être vendu directement aux locataires — ce qui augmente considérablement le rendement." },
      { question: "Que se passe-t-il avec la déductibilité fiscale après 2027?", answer: "La possibilité de déduire l'investissement comme entretien immobilier expire fin 2027. Pour en profiter, il faut planifier l'installation rapidement — de l'offre à la mise en service, il faut compter 4–12 semaines." },
      { question: "Comment trouver l'installateur le moins cher dans ma région?", answer: "En comparant au moins 3 offres. PVPro.ch met gratuitement en contact jusqu'à 3 installateurs certifiés de votre région — sans appels publicitaires et sans engagement." },
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
          "First, module prices have fallen by around 30% over the past five years. A typical 10 kWp system for a detached house now costs CHF 16,000–28,000 — significantly less than in 2019.",
          "Second, electricity prices in Switzerland have risen. Anyone paying 30 centimes per kWh today saves more each year with a solar system than before.",
          "Third, tax deductibility expires at the end of 2027. Those who invest now can still deduct the full investment from their income tax — a saving of 20–35% depending on the marginal tax rate. Waiting means losing this advantage.",
        ],
        stats: [
          { label: 'Typical payback 2026', value: '8–12 years' },
          { label: 'Savings over 25 years (10 kWp)', value: 'CHF 75,000' },
          { label: 'Tax saving on investment', value: 'Up to 35%' },
        ],
      },
      {
        heading: 'What does a solar system cost in Switzerland in 2026?',
        content: [
          "Before answering whether solar is worth it in Switzerland in 2026, we need to know what it costs. Prices in 2026 are at an all-time low. Here are the current guide prices including installation:",
        ],
        bullets: [
          "5 kWp (small house): gross CHF 9,000–11,000 → after OTP CHF 7,100–9,100 → after tax deduction (25%) CHF 5,300–6,800",
          "8 kWp (standard house): gross CHF 13,000–16,000 → after OTP CHF 10,300–13,000 → after tax deduction CHF 7,700–9,700",
          "10 kWp (large house): gross CHF 16,000–20,000 → after OTP CHF 12,450–16,450 → after tax deduction CHF 9,300–12,300",
          "15 kWp (apartment building / large): gross CHF 22,000–28,000 → after OTP CHF 17,200–23,200 → after tax deduction CHF 12,900–17,400",
        ],
        highlight: "OTP = One-Time Payment from the federal government (approx. CHF 380/kWp + CHF 700 base contribution). Tax deduction varies by canton and income. We always recommend comparing at least 3 quotes — for the same system, prices can vary by several thousand francs.",
      },
      {
        heading: 'How much can I actually save?',
        content: [
          "A 10 kWp system produces approximately 9,000–10,000 kWh of electricity per year in Switzerland. Here is the calculation for a typical detached house:",
          "Self-consumption (approx. 30–40% without storage): 3,000 kWh × CHF 0.30/kWh = CHF 900/year saved. Feed-in tariff (surplus electricity): 6,000 kWh × CHF 0.10/kWh = CHF 600/year income. Total benefit per year: approx. CHF 1,500.",
          "With a net investment of CHF 12,000 (after OTP and tax deduction), this gives a payback period of approximately 8 years. After that, you produce practically free electricity for another 15 years.",
          "With a battery, self-consumption rises to 60–70%, increasing annual savings to CHF 2,000–2,500 — but with higher upfront costs.",
        ],
        highlight: "Over 25 years, the cumulative return from a 10 kWp system is CHF 45,000–75,000 — after all costs, a net profit of CHF 25,000–35,000 remains. That corresponds to an annual return of 6–10% on the invested capital. No Swiss bank offers that.",
      },
      {
        heading: 'Is solar worth it in Switzerland in 2026, canton by canton?',
        content: [
          "Switzerland is not a homogeneous country — sunshine hours, electricity prices and subsidies vary greatly between cantons.",
        ],
        bullets: [
          "Ticino: ~2,100 sunshine hours/year → 4–6 years payback → Best value in Switzerland",
          "Valais: ~2,000 hours/year → 5–7 years → Very high solar irradiance, Rhône valley optimal",
          "Vaud / Geneva: ~1,800 hours/year → 7–9 years → Additional cantonal subsidies",
          "Bern: ~1,800 hours/year → 8–10 years → Good irradiance, solid economics",
          "Basel: ~1,550 hours/year → 9–11 years → Basel-Stadt offers additional subsidies",
          "Zurich: ~1,500 hours/year → 10–13 years → Mandatory solar for new buildings, city subsidies",
          "Lucerne / Aargau: ~1,500 hours/year → 10–12 years → Solid economics",
          "St. Gallen: ~1,450 hours/year → 11–13 years → Cantonal energy subsidies available",
          "Grisons: ~1,700 hours/year → 8–10 years → Alpine regions with high irradiance",
        ],
        highlight: "Is solar worth it in Switzerland even in the Plateau with only 1,500 sunshine hours? Yes — the payback takes a little longer, but over 25 years the economics are clearly positive.",
      },
      {
        heading: 'For whom is solar particularly worthwhile?',
        content: [
          "Based on our experience with over 1,000 installations in Switzerland, solar pays off most in these situations:",
        ],
        bullets: [
          "Homeowners with high daytime consumption: Those who are home during the day — home office, children, retirees — consume the solar electricity directly. These households pay back their system 2–3 years earlier than average.",
          "Owners of a heat pump or electric car: The combination of solar + heat pump reduces heating costs by 40–60%. Charging the car during the day saves CHF 0.20–0.25 per kWh compared to grid electricity.",
          "Homeowners who plan to renovate or build soon: During a roof renovation, the additional cost for solar is 20–30% lower — scaffolding and tradespeople are already on site.",
          "Apartment building owners with self-consumption groups: A self-consumption community allows selling solar electricity directly to tenants — this significantly increases returns.",
          "Those who still want to use the tax deduction: The option expires at end of 2027. With a marginal tax rate of 25–35%: real saving of CHF 4,000–8,000.",
        ],
      },
      {
        heading: 'For whom is solar less worthwhile?',
        content: [
          "Honesty matters to us. Is solar worth it in Switzerland in 2026 for everyone? Not always equally. There are situations where the economics are limited:",
        ],
        bullets: [
          "Unfavourable roof orientation: A north-facing roof produces up to 40% less electricity than a south-facing one. Payback extends noticeably — a professional analysis is particularly important.",
          "Heavy shading: Trees, neighbouring buildings or roof features can reduce production by 10–20%. Modern optimisers can mitigate the problem but increase costs.",
          "Planned house sale in a few years: A solar system increases property value by 3–5%, but full payback takes 8–12 years. Those selling in 2–3 years benefit less financially.",
          "Very old roof: If the roof needs renovation in the next 5–10 years, combining the renovation with the solar installation is best. Installing panels on a dilapidated roof is not advisable.",
        ],
      },
      {
        heading: 'What changes in 2026 for subsidies?',
        content: [
          "New feed-in tariff at market price: From 2026, the feed-in tariff is based on the electricity spot price. In summer, when many systems feed in simultaneously, the tariff may fall. For small systems under 150 kWp, a minimum tariff provides protection.",
          "Tax deductibility expires in 2027: The option to deduct the full investment as property maintenance expires at end of 2027. With a marginal tax rate of 25–35%: CHF 4,000–8,000 real saving. Planning and installation takes 4–12 weeks — act now.",
          "New local electricity communities (LEC) from 2026: Homeowners can sell their surplus solar electricity directly to neighbours — without a shared roof. This opens new possibilities and increases economics for all parties.",
        ],
      },
      {
        heading: 'Solar with or without battery storage?',
        content: [
          "One of the most frequent questions we receive from Swiss homeowners: is solar more worthwhile with or without battery storage?",
        ],
        bullets: [
          "Without storage: self-consumption approx. 30–40%, payback approx. 8–12 years, lower upfront investment, profitable immediately",
          "With storage: self-consumption approx. 60–80%, payback approx. 10–14 years (full system), higher upfront investment (+CHF 7,000–12,000), particularly worthwhile with EV or heat pump",
        ],
        highlight: "Conclusion: A solar system without storage pays off immediately. Storage makes sense when evening consumption is high or you have an electric car and heat pump. When planning, choose an inverter that allows battery storage to be added later.",
      },
      {
        heading: "Our recommendation after 1,000+ installations arranged",
        content: [
          "Is solar worth it in Switzerland in 2026? After three years of experience and over 1,000 installations arranged, we can say: the most common mistake is not investing too early — it is waiting too long and losing the tax advantage, subsidies and electricity cost savings.",
          "The second most common mistake is requesting only one quote. For the same system, prices between installers can vary by several thousand francs. Comparing three quotes saves an average of CHF 2,000–4,000 — without sacrificing quality.",
          "PVPro.ch connects you free of charge with up to 3 certified installers in your region. Fill in the form in 2 minutes — and receive concrete quotes within 48 hours.",
        ],
      },
    ],
    ctaHeading: 'Calculate now whether solar is worth it for your roof',
    ctaText: "Is solar worth it in Switzerland in 2026 for your home? Fill in the form in 2 minutes — we connect you with up to 3 free quotes from certified installers in your region. Compare and decide freely.",
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
      { question: 'Is solar really worth it in Switzerland in 2026?', answer: 'Yes. Thanks to falling module prices, rising electricity prices and attractive subsidies, solar is more worthwhile than ever in Switzerland in 2026. Payback is between 4 and 13 years depending on the canton, with a system lifespan of 25–30 years.' },
      { question: 'Is solar worth it in Switzerland without much sunshine?', answer: 'Yes. Modern modules produce electricity even under cloudy skies. Even in the canton of Zurich with around 1,500 sunshine hours per year, a system pays back in 10–13 years — for a 25–30 year lifespan, that is clearly worthwhile.' },
      { question: 'How much does a solar system save per year?', answer: 'A typical 10 kWp system saves around CHF 1,500 per year without storage. With storage, a heat pump or an electric car, annual savings rise to CHF 2,000–3,000.' },
      { question: 'When does a solar system pay back in Switzerland?', answer: 'On average in 8–12 years — depending on canton, self-consumption and subsidies. In Ticino already in 4–6 years, in the Plateau rather 10–13 years. After payback, you produce practically free electricity for another 15 years.' },
      { question: 'Is solar worth it without battery storage?', answer: 'Yes. A solar system without storage is already profitable. Battery storage increases savings but extends payback of the full system by 1–2 years. Whether it is worthwhile depends on your consumption profile.' },
      { question: 'Which Swiss canton is best suited for solar energy?', answer: 'Ticino, with over 2,100 sunshine hours per year, offers the best conditions for fast payback. But Valais, Grisons and the Lake Geneva region also offer excellent conditions. Even in the Plateau, solar is clearly worthwhile.' },
      { question: 'Is solar worth it for an apartment building?', answer: "Yes, often even better than for a detached house. The larger roof area allows a more powerful system. With a self-consumption community, electricity can be sold directly to tenants — significantly increasing returns." },
      { question: 'What happens to tax deductibility after 2027?', answer: 'The option to deduct the investment as property maintenance expires at end of 2027. Those who still want to benefit should plan the installation soon — from quote to commissioning takes 4–12 weeks.' },
      { question: 'How do I find the cheapest installer in my region?', answer: 'By comparing at least 3 quotes. PVPro.ch connects you free of charge with up to 3 certified installers in your region — no sales calls and no commitment.' },
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
          "In primo luogo, i prezzi dei moduli sono scesi di circa il 30% negli ultimi cinque anni. Un impianto tipico da 10 kWp per una casa unifamiliare costa oggi CHF 16'000–28'000 — molto meno rispetto al 2019.",
          "In secondo luogo, i prezzi dell'energia in Svizzera sono aumentati. Chi oggi paga 30 centesimi per kWh risparmia ogni anno di più grazie a un impianto solare.",
          "In terzo luogo, la detraibilità fiscale scade a fine 2027. Chi investe ora può ancora detrarre l'intero investimento dall'imposta sul reddito — un risparmio del 20–35% a seconda dell'aliquota marginale. Chi aspetta perde questo vantaggio.",
        ],
        stats: [
          { label: 'Ammortamento tipico 2026', value: '8–12 anni' },
          { label: 'Risparmio su 25 anni (10 kWp)', value: "CHF 75'000" },
          { label: "Risparmio fiscale sull'investimento", value: 'Fino al 35%' },
        ],
      },
      {
        heading: 'Quanto costa un impianto solare nel 2026 in Svizzera?',
        content: [
          "Prima di rispondere se vale la pena un impianto solare in Svizzera nel 2026, dobbiamo sapere quanto costa. I prezzi nel 2026 sono ai minimi storici. Ecco i valori indicativi attuali, installazione inclusa:",
        ],
        bullets: [
          "5 kWp (casa piccola): lordo CHF 9'000–11'000 → dopo RU CHF 7'100–9'100 → dopo deduzione fiscale (25%) CHF 5'300–6'800",
          "8 kWp (casa standard): lordo CHF 13'000–16'000 → dopo RU CHF 10'300–13'000 → dopo deduzione fiscale CHF 7'700–9'700",
          "10 kWp (casa grande): lordo CHF 16'000–20'000 → dopo RU CHF 12'450–16'450 → dopo deduzione fiscale CHF 9'300–12'300",
          "15 kWp (condominio / grande): lordo CHF 22'000–28'000 → dopo RU CHF 17'200–23'200 → dopo deduzione fiscale CHF 12'900–17'400",
        ],
        highlight: "RU = Remunerazione unica federale (ca. CHF 380/kWp + CHF 700 di contributo base). Deduzione fiscale variabile per cantone e reddito. Consigliamo sempre di confrontare almeno 3 preventivi — per lo stesso impianto, i prezzi possono variare di migliaia di franchi.",
      },
      {
        heading: 'Quanto posso risparmiare concretamente?',
        content: [
          "Un impianto da 10 kWp produce in Svizzera circa 9'000–10'000 kWh all'anno. Ecco il calcolo per una tipica casa unifamiliare:",
          "Autoconsumo (ca. 30–40% senza accumulo): 3'000 kWh × CHF 0.30/kWh = CHF 900/anno risparmiati. Remunerazione per l'immissione in rete (surplus): 6'000 kWh × CHF 0.10/kWh = CHF 600/anno di entrate. Beneficio totale per anno: ca. CHF 1'500.",
          "Con un investimento netto di CHF 12'000 (dopo RU e deduzione fiscale) si ottiene un ammortamento di circa 8 anni. Dopo di che si produce energia praticamente gratuita per altri 15 anni.",
          "Con un accumulatore a batteria l'autoconsumo sale al 60–70%, portando il risparmio annuale a CHF 2'000–2'500 — ma con costi iniziali più elevati.",
        ],
        highlight: "Su 25 anni il rendimento cumulato di un impianto da 10 kWp raggiunge CHF 45'000–75'000 — detratti tutti i costi, resta un guadagno netto di CHF 25'000–35'000. Corrisponde a un rendimento annuo del 6–10% sul capitale investito. Nessuna banca svizzera offre questo.",
      },
      {
        heading: 'Vale la pena per cantone?',
        content: [
          "La Svizzera non è un paese omogeneo — le ore di sole, i prezzi dell'energia e gli incentivi variano notevolmente da cantone a cantone.",
        ],
        bullets: [
          "Ticino: ~2'100 ore di sole/anno → 4–6 anni di ammortamento → Miglior valore in Svizzera",
          "Vallese: ~2'000 ore/anno → 5–7 anni → Irraggiamento molto elevato, valle del Rodano ottimale",
          "Vaud / Ginevra: ~1'800 ore/anno → 7–9 anni → Incentivi cantonali aggiuntivi",
          "Berna: ~1'800 ore/anno → 8–10 anni → Buon irraggiamento, convenienza solida",
          "Basilea: ~1'550 ore/anno → 9–11 anni → Basilea-Città offre incentivi aggiuntivi",
          "Zurigo: ~1'500 ore/anno → 10–13 anni → Obbligo solare per le nuove costruzioni",
          "Lucerna / Argovia: ~1'500 ore/anno → 10–12 anni → Convenienza solida",
          "San Gallo: ~1'450 ore/anno → 11–13 anni → Incentivi energetici cantonali disponibili",
          "Grigioni: ~1'700 ore/anno → 8–10 anni → Regioni alpine con elevato irraggiamento",
        ],
        highlight: "Vale la pena un impianto solare in Svizzera nel 2026 anche nell'Altopiano con sole 1'500 ore di sole? Sì — l'ammortamento richiede un po' più di tempo, ma su 25 anni la convenienza è chiaramente positiva.",
      },
      {
        heading: 'Per chi vale la pena particolarmente?',
        content: [
          "Dalla nostra esperienza con oltre 1'000 impianti in Svizzera, un impianto solare conviene di più in queste situazioni:",
        ],
        bullets: [
          "Proprietari con alto consumo diurno: Chi è a casa di giorno — telelavoro, bambini, pensionati — consuma direttamente l'energia solare. Questi nuclei ammortizzano l'impianto 2–3 anni prima della media.",
          "Proprietari di una pompa di calore o un'auto elettrica: La combinazione solare + pompa di calore riduce i costi di riscaldamento del 40–60%. Ricaricare l'auto di giorno fa risparmiare CHF 0.20–0.25 per kWh.",
          "Proprietari che presto ristrutturano o costruiscono: In occasione di un risanamento del tetto, i costi aggiuntivi per l'impianto solare sono inferiori del 20–30% — impalcatura e artigiani sono già in loco.",
          "Proprietari di condomini con CAC: Un consorzio per l'autoconsumo permette di vendere l'energia direttamente agli inquilini — aumentando notevolmente la redditività.",
          "Chi vuole ancora sfruttare la detraibilità fiscale: La possibilità scade a fine 2027. Con un'aliquota marginale del 25–35%: risparmio reale di CHF 4'000–8'000.",
        ],
      },
      {
        heading: 'Per chi conviene meno?',
        content: [
          "La trasparenza è importante per noi. Vale la pena per tutti in Svizzera nel 2026? Non sempre allo stesso modo. Esistono situazioni in cui la convenienza economica è ridotta:",
        ],
        bullets: [
          "Orientamento sfavorevole del tetto: Un tetto orientato a nord produce fino al 40% in meno rispetto a uno a sud. L'ammortamento si allunga sensibilmente — un'analisi professionale è particolarmente importante.",
          "Forte ombreggiamento: Alberi, edifici vicini o elementi del tetto possono ridurre la produzione del 10–20%. Gli ottimizzatori moderni possono attenuare il problema, ma aumentano i costi.",
          "Prevista vendita della casa entro pochi anni: Un impianto solare aumenta il valore dell'immobile del 3–5%, ma l'ammortamento completo richiede 8–12 anni. Chi vende tra 2–3 anni ne beneficia meno finanziariamente.",
          "Tetto molto vecchio: Se il tetto deve essere risanato nei prossimi 5–10 anni, è meglio combinare il risanamento con l'installazione solare. Installare un impianto su un tetto fatiscente non è sensato.",
        ],
      },
      {
        heading: 'Cosa cambia nel 2026 per gli incentivi?',
        content: [
          "Nuova remunerazione per l'immissione al prezzo di mercato: Dal 2026 la remunerazione si basa sul prezzo di borsa dell'energia. In estate, quando molti impianti immettono simultaneamente, la remunerazione può scendere. Per i piccoli impianti sotto i 150 kWp è prevista una remunerazione minima garantita.",
          "La detraibilità fiscale scade nel 2027: La possibilità di detrarre l'investimento come manutenzione immobiliare vale solo fino a fine 2027. Con un'aliquota marginale del 25–35%: CHF 4'000–8'000 di risparmio reale. La pianificazione e l'installazione richiedono 4–12 settimane — è il momento di agire.",
          "Nuove comunità locali dell'energia (CLE) dal 2026: I proprietari possono vendere il surplus di energia solare direttamente ai vicini — senza un tetto comune. Questo apre nuove possibilità e aumenta la convenienza per tutti.",
        ],
      },
      {
        heading: 'Impianto solare con o senza accumulo?',
        content: [
          "Una delle domande più frequenti che riceviamo dai proprietari svizzeri: conviene di più un impianto solare con o senza accumulatore?",
        ],
        bullets: [
          "Senza accumulo: autoconsumo ca. 30–40%, ammortamento ca. 8–12 anni, investimento iniziale inferiore, redditizio immediatamente",
          "Con accumulo: autoconsumo ca. 60–80%, ammortamento ca. 10–14 anni (sistema completo), investimento iniziale maggiore (+CHF 7'000–12'000), particolarmente conveniente con auto elettrica o pompa di calore",
        ],
        highlight: "Conclusione: Un impianto solare senza accumulo è già conveniente. L'accumulo conviene quando il consumo serale è elevato o si dispone di un'auto elettrica e una pompa di calore. In fase di pianificazione, scegliere un inverter compatibile con l'aggiunta futura di un accumulatore.",
      },
      {
        heading: "La nostra raccomandazione dopo oltre 1'000 impianti realizzati",
        content: [
          "Vale la pena un impianto solare in Svizzera nel 2026? Dopo tre anni di esperienza e oltre 1'000 impianti realizzati possiamo affermare: l'errore più frequente non è investire troppo presto — è aspettare troppo a lungo e perdere il vantaggio fiscale, gli incentivi e i risparmi sui costi dell'energia.",
          "Il secondo errore più frequente è richiedere un solo preventivo. Per lo stesso impianto, i prezzi tra diversi installatori possono variare di migliaia di franchi. Chi confronta tre preventivi risparmia in media CHF 2'000–4'000 — senza rinunciare alla qualità.",
          "PVPro.ch mette gratuitamente in contatto con fino a 3 installatori certificati della propria regione. Compilare il modulo in 2 minuti — e ricevere offerte concrete entro 48 ore.",
        ],
      },
    ],
    ctaHeading: 'Calcola subito se un impianto solare conviene per il tuo tetto',
    ctaText: "Vale la pena un impianto solare in Svizzera nel 2026 per la tua casa? Compila il modulo in 2 minuti — ti mettiamo in contatto con fino a 3 preventivi gratuiti da installatori certificati della tua regione. Confronta e decidi liberamente.",
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
      { question: 'Vale davvero la pena un impianto solare in Svizzera nel 2026?', answer: "Sì. Grazie al calo dei prezzi dei moduli, all'aumento dei prezzi dell'energia e a interessanti incentivi, un impianto solare conviene più che mai in Svizzera nel 2026. L'ammortamento varia da 4 a 13 anni a seconda del cantone, con una durata di vita di 25–30 anni." },
      { question: 'Vale la pena un impianto solare in Svizzera anche senza molto sole?', answer: "Sì. I moduli moderni producono energia anche con il cielo coperto. Persino nel cantone di Zurigo con circa 1'500 ore di sole all'anno, un impianto si ammortizza in 10–13 anni — per una durata di vita di 25–30 anni è chiaramente conveniente." },
      { question: "Quanto si risparmia con un impianto solare all'anno?", answer: "Un impianto tipico da 10 kWp risparmia circa CHF 1'500 all'anno senza accumulo. Con accumulo, pompa di calore o auto elettrica, il risparmio annuale sale a CHF 2'000–3'000." },
      { question: 'Quando si ammortizza un impianto solare in Svizzera?', answer: "In media in 8–12 anni — a seconda del cantone, dell'autoconsumo e degli incentivi. In Ticino già in 4–6 anni, nell'Altopiano piuttosto in 10–13 anni. Dopo l'ammortamento si produce energia praticamente gratuita per altri 15 anni." },
      { question: 'Vale la pena un impianto solare senza accumulo?', answer: "Sì. Un impianto senza accumulo è già redditizio. L'accumulo aumenta i risparmi, ma allunga l'ammortamento del sistema completo di 1–2 anni. La convenienza dipende dal profilo di consumo." },
      { question: "Quale cantone svizzero è più adatto all'energia solare?", answer: "Il Ticino con oltre 2'100 ore di sole all'anno offre le migliori condizioni per un ammortamento rapido. Ma anche Vallese, Grigioni e la zona del lago Lemano offrono condizioni eccellenti. Anche nell'Altopiano un impianto solare è chiaramente conveniente." },
      { question: 'Vale la pena un impianto solare per un condominio?', answer: "Sì, spesso anche meglio che per una casa unifamiliare. La grande superficie del tetto permette un impianto più potente. Con un CAC (consorzio per l'autoconsumo) l'energia può essere venduta direttamente agli inquilini — aumentando notevolmente la redditività." },
      { question: 'Cosa succede alla detraibilità fiscale dopo il 2027?', answer: "La possibilità di detrarre l'investimento come manutenzione immobiliare scade a fine 2027. Chi vuole ancora beneficiarne dovrebbe pianificare l'installazione presto — dal preventivo alla messa in servizio passano 4–12 settimane." },
      { question: "Come trovo l'installatore più conveniente nella mia regione?", answer: "Confrontando almeno 3 preventivi. PVPro.ch mette gratuitamente in contatto con fino a 3 installatori certificati della tua regione — senza chiamate pubblicitarie e senza impegno." },
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
    intro: "Die steuerliche Absetzbarkeit einer Solaranlage in der Schweiz ist einer der grössten und am wenigsten bekannten Vorteile für Hausbesitzer. Wer eine Solaranlage installiert, kann die gesamte Investition als Liegenschaftsunterhalt vom steuerbaren Einkommen abziehen — je nach Kanton und Einkommen eine Ersparnis von CHF 4'000 bis CHF 10'000. Doch dieser Vorteil hat ein Ablaufdatum: Ab 2028 entfällt der Steuerabzug auf Bundesebene voraussichtlich vollständig. 2026 und 2027 sind die letzten Jahre, um noch davon zu profitieren.",
    sections: [
      {
        heading: 'Was bedeutet steuerliche Absetzbarkeit einer Solaranlage?',
        content: [
          "In der Schweiz gilt die Installation einer Solaranlage auf einem bestehenden Gebäude als Liegenschaftsunterhalt — also als werterhaltende oder wertvermehrende Massnahme. Diese Kosten können direkt vom steuerbaren Einkommen abgezogen werden, genau wie eine Dachsanierung oder eine neue Heizung.",
          "Das bedeutet konkret: Wenn Sie CHF 20'000 in eine Solaranlage investieren und Ihr Grenzsteuersatz liegt bei 30%, zahlen Sie effektiv nur CHF 14'000 — der Staat übernimmt CHF 6'000 über den Steuerabzug.",
        ],
        stats: [
          { label: 'Steuerersparnis auf Investition', value: '20–35%' },
          { label: 'Letzte Chance für Steuerabzug', value: 'Ende 2027' },
          { label: 'Typische Steuerersparnis', value: "CHF 4'000–10'000" },
        ],
        bullets: [
          "Die gesamten Installationskosten der Solaranlage",
          "Der Batteriespeicher (in den meisten Kantonen, wenn gleichzeitig installiert)",
          "Planungskosten und Bewilligungsgebühren",
          "Zukünftige Wartungs- und Unterhaltskosten der Anlage (jährlich absetzbar)",
          "Wechselrichter-Austausch nach 10–15 Jahren",
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
        highlight: "Die Konsequenz: Wer bis Ende 2027 eine Solaranlage installiert, profitiert noch vom vollen Steuerabzug auf Bundesebene. Wer wartet, verliert einen Vorteil von CHF 4'000–10'000.",
      },
      {
        heading: 'Wie viel können Sie konkret sparen? Rechenbeispiele',
        content: [
          "Die Höhe der Steuerersparnis hängt von der Investitionssumme, dem Kanton und dem persönlichen Grenzsteuersatz ab.",
          "Beispiel 1 — 10-kWp-Anlage, Kanton Zürich, Einkommen CHF 120'000: Investitionskosten brutto CHF 18'000 → Abzug EIV –CHF 3'550 → Abzugsfähige Summe CHF 14'450 → Grenzsteuersatz ~30% → Steuerersparnis ca. CHF 4'335 → Effektive Nettoinvestition CHF 10'115.",
          "Beispiel 2 — 15-kWp-Anlage, Kanton Bern, Einkommen CHF 150'000: Investitionskosten brutto CHF 26'000 → Abzug EIV –CHF 5'450 → Abzugsfähige Summe CHF 20'550 → Grenzsteuersatz ~35% → Steuerersparnis ca. CHF 7'193 → Effektive Nettoinvestition CHF 13'357.",
        ],
        stats: [
          { label: 'Steuerersparnis Bsp. 1 (ZH)', value: "CHF 4'335" },
          { label: 'Steuerersparnis Bsp. 2 (BE)', value: "CHF 7'193" },
          { label: 'Nettoinvestition Bsp. 1', value: "CHF 10'115" },
          { label: 'Nettoinvestition Bsp. 2', value: "CHF 13'357" },
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
          "Bern: ✅ Investition absetzbar, ✅ Speicher (gleichzeitig), ✅ Nettoprinzip — Speicherbonus bis CHF 800",
          "Aargau: ✅ Investition absetzbar, ✅ Speicher (auch Nachrüstung), Bruttoprinzip — Speicher auch nachträglich absetzbar",
          "Luzern: ✅ Investition absetzbar, ✅ Speicher, ✅ Nettoprinzip — Freibetrag 10'000 kWh/Jahr",
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
          "Eingespeister Strom (Rückliefervergütung): Der ins Netz eingespeiste Strom wird als Einkommen besteuert. Die meisten Kantone wenden heute das Nettoprinzip an — es wird nur besteuert, was effektiv ausbezahlt wird. Bei kleinen Anlagen und hohem Eigenverbrauch ist das oft null oder wenige hundert Franken.",
          "Fördergelder (EIV): Die Einmalvergütung gilt als Einkommen und muss im Jahr der Auszahlung deklariert werden. Sie reduziert zudem die abzugsfähige Investitionssumme.",
        ],
      },
      {
        heading: 'Warum Sie jetzt handeln sollten — und nicht 2027',
        content: [
          "1. Die Planung braucht Zeit: Von der ersten Offerte bis zur Inbetriebnahme einer Solaranlage vergehen 4–12 Wochen. Wer bis Ende 2027 installiert haben möchte, muss spätestens im Herbst 2027 bestellen — und die Installateure werden dann überlastet sein.",
          "2. Die Kosten steigen unter Druck: Wenn alle kurz vor Ende 2027 bestellen, entstehen Engpässe. Erfahrungsgemäss steigen Preise und Wartezeiten, wenn viele gleichzeitig bestellen.",
          "3. Jedes Jahr ohne Anlage kostet Geld: Wer heute investiert statt 2027, spart schon jetzt Stromkosten. Zwei Jahre Stromkostenersparnis bei CHF 1'500/Jahr sind CHF 3'000 — Geld, das unwiederbringlich verloren ist.",
        ],
        highlight: "Die häufigste Reaktion: «Dann warte ich noch ein Jahr.» Das klingt logisch, ist aber riskant — die Kapazitäten der Installateure werden in den letzten Monaten vor Ende 2027 knapp sein, und die Preise steigen unter Druck.",
      },
    ],
    ctaHeading: 'Steuerabzug noch nutzen — jetzt Offerte einholen',
    ctaText: "2026 und 2027 sind die letzten Jahre mit vollem Steuerabzug auf Bundesebene. Holen Sie jetzt kostenlos bis zu 3 Offerten von zertifizierten Installateuren aus Ihrer Region ein — und sichern Sie sich CHF 4'000–10'000 Steuerersparnis.",
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
      { question: 'Wie viel Steuer spare ich mit einer Solaranlage?', answer: "Je nach Investitionssumme, Kanton und persönlichem Grenzsteuersatz liegt die Steuerersparnis typischerweise zwischen CHF 4'000 und CHF 10'000. Bei einem Grenzsteuersatz von 30% und einer Nettoinvestition von CHF 15'000 entspricht das CHF 4'500 Steuerersparnis." },
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
    intro: "La déductibilité fiscale d'une installation solaire en Suisse est l'un des avantages les plus importants et les moins connus pour les propriétaires. Celui qui installe une installation solaire peut déduire l'intégralité de l'investissement du revenu imposable en tant qu'entretien immobilier — selon le canton et le revenu, une économie de CHF 4'000 à CHF 10'000. Mais cet avantage a une date d'expiration: à partir de 2028, la déduction fiscale sera vraisemblablement supprimée entièrement au niveau fédéral. 2026 et 2027 sont les dernières années pour en profiter.",
    sections: [
      {
        heading: "Que signifie la déductibilité fiscale d'une installation solaire?",
        content: [
          "En Suisse, l'installation d'une installation solaire sur un bâtiment existant est considérée comme de l'entretien immobilier — c'est-à-dire une mesure conservatrice ou amélioratrice de valeur. Ces coûts peuvent être déduits directement du revenu imposable, tout comme une rénovation de toiture ou un nouveau chauffage.",
          "Concrètement: si vous investissez CHF 20'000 dans une installation solaire et que votre taux marginal d'imposition est de 30%, vous ne payez effectivement que CHF 14'000 — l'État prend en charge CHF 6'000 via la déduction fiscale.",
        ],
        stats: [
          { label: "Économie fiscale sur l'investissement", value: '20–35%' },
          { label: 'Dernière chance pour déduction', value: 'Fin 2027' },
          { label: 'Économie fiscale typique', value: "CHF 4'000–10'000" },
        ],
        bullets: [
          "L'intégralité des coûts d'installation de l'installation solaire",
          "Le système de stockage par batterie (dans la plupart des cantons, si installé simultanément)",
          "Les frais de planification et les taxes de permis",
          "Les futurs frais d'entretien et de maintenance de l'installation (déductibles annuellement)",
          "Le remplacement de l'onduleur après 10–15 ans",
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
        highlight: "La conséquence: celui qui installe une installation solaire avant fin 2027 profite encore de la pleine déduction fiscale au niveau fédéral. Celui qui attend perd un avantage de CHF 4'000–10'000.",
      },
      {
        heading: "Combien pouvez-vous économiser concrètement? Exemples de calcul",
        content: [
          "Le montant de l'économie fiscale dépend du montant investi, du canton et du taux marginal d'imposition personnel.",
          "Exemple 1 — Installation 10 kWc, canton de Zurich, revenu CHF 120'000: Coûts bruts CHF 18'000 → Déduction RU –CHF 3'550 → Montant déductible CHF 14'450 → Taux marginal ~30% → Économie fiscale env. CHF 4'335 → Investissement net effectif CHF 10'115.",
          "Exemple 2 — Installation 15 kWc, canton de Berne, revenu CHF 150'000: Coûts bruts CHF 26'000 → Déduction RU –CHF 5'450 → Montant déductible CHF 20'550 → Taux marginal ~35% → Économie fiscale env. CHF 7'193 → Investissement net effectif CHF 13'357.",
        ],
        stats: [
          { label: 'Économie fiscale ex. 1 (ZH)', value: "CHF 4'335" },
          { label: 'Économie fiscale ex. 2 (BE)', value: "CHF 7'193" },
          { label: 'Investissement net ex. 1', value: "CHF 10'115" },
          { label: 'Investissement net ex. 2', value: "CHF 13'357" },
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
          "Berne: ✅ Investissement déductible, ✅ Batterie (simultanée), ✅ Principe net — Bonus batterie jusqu'à CHF 800",
          "Argovie: ✅ Investissement déductible, ✅ Batterie (aussi ajout ultérieur), Principe brut — Batterie aussi déductible en ajout",
          "Lucerne: ✅ Investissement déductible, ✅ Batterie, ✅ Principe net — Franchise 10'000 kWh/an",
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
          "Électricité injectée (rétribution pour l'injection): L'électricité injectée dans le réseau est imposée comme revenu. La plupart des cantons appliquent aujourd'hui le principe net — seul ce qui est effectivement versé est imposé. Pour les petites installations et une autoconsommation élevée, c'est souvent nul ou quelques centaines de francs.",
          "Subventions (RU): La rétribution unique est considérée comme un revenu et doit être déclarée dans l'année de versement. Elle réduit également le montant d'investissement déductible.",
        ],
      },
      {
        heading: "Pourquoi agir maintenant — et pas en 2027",
        content: [
          "1. La planification prend du temps: De la première offre à la mise en service d'une installation solaire, il faut compter 4–12 semaines. Celui qui souhaite être installé avant fin 2027 doit commander au plus tard à l'automne 2027 — et les installateurs seront alors surchargés.",
          "2. Les coûts augmentent sous pression: Quand tout le monde commande peu avant fin 2027, des goulets d'étranglement apparaissent. Les prix et les délais d'attente augmentent quand beaucoup commandent simultanément.",
          "3. Chaque année sans installation coûte de l'argent: Celui qui investit maintenant plutôt qu'en 2027 économise déjà des coûts d'électricité. Deux ans d'économies d'électricité à CHF 1'500/an représentent CHF 3'000 — de l'argent irrécupérable.",
        ],
        highlight: "La réaction la plus fréquente: «J'attends encore un an.» Ça semble logique, mais c'est risqué — les capacités des installateurs seront limitées dans les derniers mois avant fin 2027, et les prix augmenteront sous pression.",
      },
    ],
    ctaHeading: "Profitez encore de la déduction fiscale — demandez une offre maintenant",
    ctaText: "2026 et 2027 sont les dernières années avec pleine déduction fiscale au niveau fédéral. Demandez maintenant gratuitement jusqu'à 3 offres d'installateurs certifiés de votre région — et sécurisez CHF 4'000–10'000 d'économie fiscale.",
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
      { question: "Combien d'impôts puis-je économiser avec une installation solaire?", answer: "Selon le montant investi, le canton et le taux marginal d'imposition personnel, l'économie fiscale se situe typiquement entre CHF 4'000 et CHF 10'000. Avec un taux marginal de 30% et un investissement net de CHF 15'000, cela correspond à CHF 4'500 d'économie fiscale." },
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
    intro: "The tax deductibility of a solar panel system in Switzerland is one of the biggest and least known advantages for homeowners. Anyone installing a solar system can deduct the entire investment from taxable income as property maintenance — depending on the canton and income, a saving of CHF 4,000 to CHF 10,000. But this advantage has an expiry date: from 2028, the tax deduction will likely be abolished entirely at the federal level. 2026 and 2027 are the last years to act.",
    sections: [
      {
        heading: 'What does tax deductibility of a solar system mean?',
        content: [
          "In Switzerland, installing a solar system on an existing building is classified as property maintenance — that is, a value-preserving or value-enhancing measure. These costs can be deducted directly from taxable income, just like a roof renovation or a new heating system.",
          "In concrete terms: if you invest CHF 20,000 in a solar system and your marginal tax rate is 30%, you effectively pay only CHF 14,000 — the state covers CHF 6,000 through the tax deduction.",
        ],
        stats: [
          { label: 'Tax saving on investment', value: '20–35%' },
          { label: 'Last chance for tax deduction', value: 'End of 2027' },
          { label: 'Typical tax saving', value: 'CHF 4,000–10,000' },
        ],
        bullets: [
          "The full installation costs of the solar system",
          "The battery storage system (in most cantons, if installed simultaneously)",
          "Planning costs and permit fees",
          "Future maintenance and servicing costs of the system (deductible annually)",
          "Inverter replacement after 10–15 years",
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
        highlight: "The consequence: anyone who installs a solar system before end of 2027 still benefits from the full federal tax deduction. Those who wait lose an advantage of CHF 4,000–10,000.",
      },
      {
        heading: 'How much can you save? Calculation examples',
        content: [
          "The amount of tax saving depends on the investment amount, the canton and your personal marginal tax rate.",
          "Example 1 — 10 kWp system, canton of Zurich, income CHF 120,000: Gross investment CHF 18,000 → Deduct OTP –CHF 3,550 → Deductible amount CHF 14,450 → Marginal rate ~30% → Tax saving approx. CHF 4,335 → Effective net investment CHF 10,115.",
          "Example 2 — 15 kWp system, canton of Bern, income CHF 150,000: Gross investment CHF 26,000 → Deduct OTP –CHF 5,450 → Deductible amount CHF 20,550 → Marginal rate ~35% → Tax saving approx. CHF 7,193 → Effective net investment CHF 13,357.",
        ],
        stats: [
          { label: 'Tax saving ex. 1 (ZH)', value: 'CHF 4,335' },
          { label: 'Tax saving ex. 2 (BE)', value: 'CHF 7,193' },
          { label: 'Net investment ex. 1', value: 'CHF 10,115' },
          { label: 'Net investment ex. 2', value: 'CHF 13,357' },
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
          "Bern: ✅ Investment deductible, ✅ Battery (simultaneous), ✅ Net principle — Battery bonus up to CHF 800",
          "Aargau: ✅ Investment deductible, ✅ Battery (also retrofit), Gross principle — Battery also deductible as retrofit",
          "Lucerne: ✅ Investment deductible, ✅ Battery, ✅ Net principle — Tax-free allowance 10,000 kWh/year",
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
          "Electricity fed into the grid (feed-in tariff): Electricity fed into the grid is taxed as income. Most cantons today apply the net principle — only what is actually paid out is taxed. For small systems with high self-consumption, this is often zero or a few hundred francs.",
          "Subsidies (OTP): The one-time payment is considered income and must be declared in the year of payment. It also reduces the deductible investment amount.",
        ],
      },
      {
        heading: 'Why you should act now — not in 2027',
        content: [
          "1. Planning takes time: From the first quote to commissioning a solar system takes 4–12 weeks. Anyone who wants to be installed before end of 2027 must order by autumn 2027 at the latest — and installers will be overloaded by then.",
          "2. Costs rise under pressure: When everyone orders just before end of 2027, bottlenecks arise. Experience shows that prices and waiting times increase when many order simultaneously.",
          "3. Every year without a system costs money: Investing now rather than in 2027 means saving electricity costs immediately. Two years of electricity savings at CHF 1,500/year is CHF 3,000 — money lost irrecoverably.",
        ],
        highlight: "The most common reaction: 'I'll wait another year.' That sounds logical, but it is risky — installer capacities will be limited in the final months before end of 2027, and prices will rise under pressure.",
      },
    ],
    ctaHeading: 'Use the tax deduction while you still can — request a quote now',
    ctaText: "2026 and 2027 are the last years with full tax deduction at the federal level. Request up to 3 free quotes from certified installers in your region now — and secure CHF 4,000–10,000 in tax savings.",
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
      { question: 'How much tax do I save with a solar system?', answer: "Depending on the investment amount, canton and personal marginal tax rate, the tax saving is typically between CHF 4,000 and CHF 10,000. With a marginal rate of 30% and a net investment of CHF 15,000, that corresponds to CHF 4,500 in tax savings." },
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
    intro: "La detraibilità fiscale di un impianto solare in Svizzera è uno dei vantaggi più significativi e meno conosciuti per i proprietari di immobili. Chi installa un impianto solare può detrarre l'intero investimento dal reddito imponibile come manutenzione immobiliare — a seconda del cantone e del reddito, un risparmio di CHF 4'000–10'000. Ma questo vantaggio ha una data di scadenza: dal 2028, la deduzione fiscale sarà presumibilmente eliminata completamente a livello federale. Il 2026 e il 2027 sono gli ultimi anni per agire.",
    sections: [
      {
        heading: "Cosa significa la detraibilità fiscale di un impianto solare?",
        content: [
          "In Svizzera, l'installazione di un impianto solare su un edificio esistente è classificata come manutenzione immobiliare — ovvero una misura che conserva o aumenta il valore. Questi costi possono essere detratti direttamente dal reddito imponibile, esattamente come un risanamento del tetto o un nuovo sistema di riscaldamento.",
          "In termini concreti: se si investono CHF 20'000 in un impianto solare e l'aliquota marginale è del 30%, si pagano effettivamente solo CHF 14'000 — lo Stato copre CHF 6'000 tramite la deduzione fiscale.",
        ],
        stats: [
          { label: "Risparmio fiscale sull'investimento", value: '20–35%' },
          { label: 'Ultima chance deduzione fiscale', value: 'Fine 2027' },
          { label: 'Risparmio fiscale tipico', value: "CHF 4'000–10'000" },
        ],
        bullets: [
          "L'intero costo di installazione dell'impianto solare",
          "Il sistema di accumulo a batteria (nella maggior parte dei cantoni, se installato simultaneamente)",
          "Costi di pianificazione e tasse per i permessi",
          "Futuri costi di manutenzione dell'impianto (detraibili annualmente)",
          "Sostituzione dell'inverter dopo 10–15 anni",
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
        highlight: "La conseguenza: chi installa un impianto solare entro fine 2027 beneficia ancora della piena deduzione fiscale federale. Chi aspetta perde un vantaggio di CHF 4'000–10'000.",
      },
      {
        heading: "Quanto si può risparmiare concretamente? Esempi di calcolo",
        content: [
          "L'entità del risparmio fiscale dipende dall'importo investito, dal cantone e dall'aliquota marginale personale.",
          "Esempio 1 — Impianto da 10 kWp, canton Zurigo, reddito CHF 120'000: Costi lordi CHF 18'000 → Deduzione RU –CHF 3'550 → Importo detraibile CHF 14'450 → Aliquota marginale ~30% → Risparmio fiscale ca. CHF 4'335 → Investimento netto effettivo CHF 10'115.",
          "Esempio 2 — Impianto da 15 kWp, canton Berna, reddito CHF 150'000: Costi lordi CHF 26'000 → Deduzione RU –CHF 5'450 → Importo detraibile CHF 20'550 → Aliquota marginale ~35% → Risparmio fiscale ca. CHF 7'193 → Investimento netto effettivo CHF 13'357.",
        ],
        stats: [
          { label: 'Risparmio fiscale es. 1 (ZH)', value: "CHF 4'335" },
          { label: 'Risparmio fiscale es. 2 (BE)', value: "CHF 7'193" },
          { label: 'Investimento netto es. 1', value: "CHF 10'115" },
          { label: 'Investimento netto es. 2', value: "CHF 13'357" },
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
          "Berna: ✅ Investimento detraibile, ✅ Batteria (simultanea), ✅ Principio netto — Bonus batteria fino a CHF 800",
          "Argovia: ✅ Investimento detraibile, ✅ Batteria (anche integrazione), Principio lordo — Batteria detraibile anche come integrazione",
          "Lucerna: ✅ Investimento detraibile, ✅ Batteria, ✅ Principio netto — Franchigia 10'000 kWh/anno",
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
          "Energia immessa in rete (remunerazione per l'immissione): L'energia immessa nella rete è tassata come reddito. La maggior parte dei cantoni applica oggi il principio netto — viene tassato solo ciò che viene effettivamente versato. Per i piccoli impianti con alto autoconsumo, spesso è zero o poche centinaia di franchi.",
          "Incentivi (RU): La remunerazione unica è considerata reddito e deve essere dichiarata nell'anno del versamento. Riduce inoltre l'importo di investimento detraibile.",
        ],
      },
      {
        heading: "Perché agire ora — e non nel 2027",
        content: [
          "1. La pianificazione richiede tempo: Dal primo preventivo alla messa in servizio di un impianto solare passano 4–12 settimane. Chi vuole essere installato entro fine 2027 deve ordinare al più tardi nell'autunno 2027 — e gli installatori saranno sovraccarichi.",
          "2. I costi aumentano sotto pressione: Quando tutti ordinano poco prima di fine 2027, si creano colli di bottiglia. L'esperienza mostra che prezzi e tempi di attesa aumentano quando molti ordinano contemporaneamente.",
          "3. Ogni anno senza impianto costa denaro: Chi investe ora invece che nel 2027 risparmia già ora sui costi dell'energia. Due anni di risparmio energetico a CHF 1'500/anno sono CHF 3'000 — denaro irrecuperabile.",
        ],
        highlight: "La reazione più frequente: «Aspetto ancora un anno.» Sembra logico, ma è rischioso — le capacità degli installatori saranno limitate negli ultimi mesi prima di fine 2027, e i prezzi aumenteranno sotto pressione.",
      },
    ],
    ctaHeading: "Sfrutta ancora la deduzione fiscale — richiedi subito un preventivo",
    ctaText: "Il 2026 e il 2027 sono gli ultimi anni con piena deduzione fiscale a livello federale. Richiedi ora gratuitamente fino a 3 preventivi da installatori certificati della tua regione — e assicurati CHF 4'000–10'000 di risparmio fiscale.",
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
      { question: "Quanto risparmio sulle tasse con un impianto solare?", answer: "A seconda dell'importo investito, del cantone e dell'aliquota marginale personale, il risparmio fiscale è tipicamente compreso tra CHF 4'000 e CHF 10'000. Con un'aliquota marginale del 30% e un investimento netto di CHF 15'000, corrisponde a CHF 4'500 di risparmio fiscale." },
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
    metaDescription: 'Solaranlage mit Wärmepumpe kombinieren in der Schweiz: Kosten, Ersparnis und Förderung 2026. Wann lohnt sich die Kombination wirklich? Mit Rechenbeispielen von PVPro.ch.',
    image: '/images/solaranlage-waermepumpe-chalet-winter.webp',
    date: '3. Mai 2026',
    readMin: 10,
    tag: 'Ratgeber',
    intro: 'Solaranlage mit Wärmepumpe kombinieren — das ist die effizienteste Energielösung für Schweizer Hausbesitzer 2026. Die Wärmepumpe braucht Strom, die Solaranlage produziert ihn. Wer diese beiden Systeme kombiniert, kann seine Heizkosten um 40–70% senken und gleichzeitig seinen CO₂-Ausstoss auf praktisch null reduzieren. Diese Seite erklärt, wie die Kombination funktioniert, was sie kostet und für wen sie sich besonders lohnt.',
    sections: [
      {
        heading: 'Warum ist die Kombination Solaranlage und Wärmepumpe so effizient?',
        content: [
          'Eine Wärmepumpe ist eine der effizientesten Heizungen — sie erzeugt aus 1 kWh Strom 3–5 kWh Wärme. Der einzige Nachteil: Sie braucht Strom, und Netzstrom kostet in der Schweiz 28–35 Rappen pro kWh. Eine Solaranlage hingegen produziert Strom aus Sonnenlicht — zu Kosten von nur 8–12 Rappen pro kWh über die Lebensdauer.',
          'Wenn Sie Ihre Wärmepumpe mit Solarstrom betreiben, sinken die effektiven Heizkosten dramatisch. Das ist der Kern der Kombination — und der Grund, warum immer mehr Schweizer Hausbesitzer auf dieses System setzen.',
          'Die Jahresarbeitszahl (JAZ) entscheidet, wie effizient die Kombination ist. Je höher die JAZ, desto weniger Strom braucht die Pumpe — und desto mehr profitieren Sie von Ihrem Solarstrom:',
        ],
        bullets: [
          "Luft-Wasser-Wärmepumpe: JAZ 3.0–3.5 → 4'300–5'000 kWh/Jahr für 15'000 kWh Wärme",
          "Sole-Wasser-Wärmepumpe (Erdwärme): JAZ 4.0–4.5 → 3'300–3'750 kWh/Jahr",
          "Wasser-Wasser-Wärmepumpe: JAZ 4.5–5.5 → 2'700–3'300 kWh/Jahr",
        ],
        highlight: 'Eine Wärmepumpe erzeugt aus 1 kWh Strom 3–5 kWh Wärme. Solarstrom kostet über die Lebensdauer nur 8–12 Rp./kWh — statt 28–35 Rp./kWh aus dem Netz.',
      },
      {
        heading: 'Solaranlage mit Wärmepumpe kombinieren — was kostet das in der Schweiz?',
        content: [
          'Die Kombination ist eine grössere Investition als eine Solaranlage allein. Hier die Richtwerte für ein typisches Einfamilienhaus:',
        ],
        bullets: [
          "Solaranlage 10–15 kWp: CHF 18'000–28'000",
          "Luft-Wasser-Wärmepumpe: CHF 18'000–30'000",
          "Sole-Wasser-Wärmepumpe: CHF 35'000–55'000",
          "Batteriespeicher 10 kWh (optional): CHF 7'000–10'000",
          "Energiemanagementsystem: CHF 1'500–3'000",
          "Gesamtpaket ohne Speicher: CHF 36'000–58'000",
          "Gesamtpaket mit Speicher: CHF 43'000–68'000",
        ],
        highlight: "Nach Abzug aller Fördergelder reduziert sich die Nettoinvestition auf CHF 25'000–40'000 — bei einer Lebensdauer von 20–30 Jahren.",
      },
      {
        heading: 'Welche Förderungen gibt es für die Kombination in der Schweiz?',
        content: [
          'Solaranlage und Wärmepumpe werden in der Schweiz separat gefördert — das heisst, Sie erhalten Fördergelder für beide Komponenten.',
          "Förderung für die Solaranlage: Die Einmalvergütung (EIV) des Bundes beträgt ca. CHF 3'550–5'450 für 10–15 kWp. Dazu kommt der steuerliche Abzug als Liegenschaftsunterhalt (bis Ende 2027): CHF 4'000–8'000 Ersparnis.",
          "Förderung für die Wärmepumpe: Das Gebäudeprogramm des Bundes bietet CHF 3'000–10'000. Kantonale Beiträge betragen CHF 1'000–5'000 je nach Kanton. Viele Energieversorger bieten zusätzliche Beiträge und vergünstigte Wärmepumpentarife (bis 30% Rabatt).",
        ],
        bullets: [
          "EIV Bundesförderung Solaranlage: CHF 3'550–5'450",
          "Steuerabzug Solaranlage (bis Ende 2027): CHF 4'000–8'000 Ersparnis",
          "Gebäudeprogramm Bund für Wärmepumpe: CHF 3'000–10'000",
          "Kantonale Beiträge Wärmepumpe: CHF 1'000–5'000",
          "Beiträge Energieversorger: CHF 500–2'000",
        ],
        highlight: "Total Fördergelder möglich: CHF 8'000–20'000. Der Steuerabzug läuft Ende 2027 aus — 2026 und 2027 sind die letzten Jahre mit vollem steuerlichem Abzug.",
      },
      {
        heading: 'Was kann ich konkret sparen? Rechenbeispiel',
        content: [
          "Nehmen wir ein typisches Schweizer Einfamilienhaus, das bisher mit einer Ölheizung beheizt wird: Heizölverbrauch 2'000 Liter/Jahr (ca. CHF 2'400/Jahr), Stromkosten Haushalt ca. CHF 1'500/Jahr.",
          "Nach Installation einer Solaranlage (12 kWp) und einer Luft-Wasser-Wärmepumpe: Heizkosten sinken von CHF 2'400 auf CHF 400/Jahr (Ersparnis CHF 2'000). Stromkosten sinken von CHF 1'500 auf CHF 300/Jahr (Ersparnis CHF 1'200).",
        ],
        bullets: [
          "Totale jährliche Ersparnis: CHF 3'200/Jahr",
          "Nettoinvestition nach Förderung: ca. CHF 30'000",
          'Amortisation: ca. 9–10 Jahre',
          'Rendite über die Lebensdauer: 8–12% p.a.',
          'Lebensdauer: 20–25 Jahre',
        ],
        highlight: "Bei einer Nettoinvestition von CHF 30'000 ergibt das eine Amortisation von ca. 9–10 Jahren — bei einer Lebensdauer von 20–25 Jahren und einer Rendite von 8–12% p.a.",
      },
      {
        heading: 'Solaranlage mit Wärmepumpe kombinieren — welcher Typ passt?',
        content: [
          'Nicht jede Wärmepumpe eignet sich gleich gut für die Kombination mit einer Solaranlage.',
          "Luft-Wasser-Wärmepumpe (die häufigste Wahl): Günstigste Installation, keine Bohrung nötig. JAZ ca. 3.0–3.5, braucht mehr Solarstrom als andere Typen. Ideal für Bestandsgebäude und kleineres Budget.",
          "Sole-Wasser-Wärmepumpe / Erdwärme (die effizienteste): Höchste JAZ 4.0–4.5, braucht weniger Strom, aber teurer durch Erdbohrung (CHF 15'000–25'000). Bohrtiefe 150–300 Meter, Lebensdauer der Erdsonde über 50 Jahre. Ideal für Neubauten und maximale Effizienz.",
          'Wasser-Wasser-Wärmepumpe (die stärkste): Höchste JAZ 4.5–5.5, benötigt Grundwasser in ausreichender Menge. Nicht überall möglich, Genehmigung nötig.',
        ],
        highlight: 'Für die meisten Schweizer Einfamilienhäuser ist die Luft-Wasser-Wärmepumpe in Kombination mit einer Solaranlage die praktischste und wirtschaftlichste Lösung.',
      },
      {
        heading: 'Wie gross muss die Solaranlage für eine Wärmepumpe sein?',
        content: [
          "Eine Luft-Wasser-Wärmepumpe für ein typisches Einfamilienhaus braucht ca. 4'000–5'000 kWh Strom pro Jahr für Heizung und Warmwasser. Dazu kommt der normale Haushaltsstromverbrauch von ca. 4'000–5'000 kWh/Jahr. Total Strombedarf: ca. 8'000–10'000 kWh/Jahr.",
          "Eine 10–12 kWp Solaranlage produziert in der Schweiz ca. 9'000–11'000 kWh/Jahr — das passt perfekt.",
        ],
        bullets: [
          'Luft-Wasser-WP + Haushalt: 10–13 kWp Solaranlage empfohlen',
          'Sole-Wasser-WP + Haushalt: 8–10 kWp (effizientere WP braucht weniger Strom)',
          'Mit E-Auto zusätzlich: +3–5 kWp',
        ],
        highlight: 'Faustregel: Luft-Wasser-Wärmepumpe + Haushalt = 10–13 kWp. Bei einer Sole-Wasser-Wärmepumpe reichen 8–10 kWp.',
      },
      {
        heading: 'Brauche ich einen Batteriespeicher dazu?',
        content: [
          'Nicht zwingend — aber ein Batteriespeicher erhöht den Eigenverbrauch erheblich.',
          'Ohne Speicher: Im Sommer läuft die Wärmepumpe für Warmwasser direkt mit Solarstrom. Im Winter — wenn die Wärmepumpe am meisten Strom braucht — produziert die Solaranlage wenig. Eigenverbrauchsanteil: ca. 40–50%.',
          'Mit Speicher: Solarstrom aus dem Mittag wird gespeichert und abends für die Wärmepumpe genutzt. Eigenverbrauchsanteil: ca. 60–75%.',
          'Mit Speicher + Smart-Heizsteuerung: Die Wärmepumpe lädt tagsüber den Warmwasserspeicher mit Solarstrom vor (Wärme-Pufferspeicher). Eigenverbrauchsanteil: bis 80–90%.',
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
        highlight: "Wer noch 2026 oder 2027 investiert, kann die Gesamtkosten beider Systeme steuerlich abziehen — und damit CHF 4'000–10'000 zusätzlich sparen.",
      },
      {
        heading: 'Schritt für Schritt: So gehen Sie vor',
        content: [
          'Schritt 1 — Energiebedarf analysieren: Wie viel Strom verbraucht Ihr Haushalt? Wie viel Wärme braucht Ihr Gebäude? Ist das Gebäude gut gedämmt? Ein zertifizierter Installateur beantwortet diese Fragen beim kostenlosen Beratungsgespräch.',
          'Schritt 2 — System dimensionieren: Solaranlage und Wärmepumpe müssen aufeinander abgestimmt sein. Eine zu kleine Solaranlage deckt den WP-Strombedarf nicht — eine zu grosse produziert unnötigen Überschuss.',
          "Schritt 3 — Offerten vergleichen: Mindestens 3 Offerten einholen ist bei einer so grossen Investition Pflicht. Die Preisunterschiede zwischen Installateuren können CHF 5'000–10'000 betragen.",
          'Schritt 4 — Fördergelder beantragen: Für das Gebäudeprogramm (Wärmepumpe) muss der Förderantrag vor Baubeginn eingereicht werden. Für die EIV (Solaranlage) stellt der Installateur den Antrag nach der Installation.',
          'Schritt 5 — Installation und Inbetriebnahme: Solaranlage und Wärmepumpe können gleichzeitig oder zeitlich versetzt installiert werden. Bei gleichzeitiger Installation sparen Sie Gerüstkosten.',
        ],
      },
    ],
    ctaHeading: 'Jetzt Kombination Solaranlage + Wärmepumpe anfragen',
    ctaText: 'Solaranlage mit Wärmepumpe kombinieren und bis zu 70% Heizkosten sparen — PVPro.ch vermittelt kostenlos zertifizierte Installateure, die beide Systeme aus einer Hand planen und installieren.',
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
      { question: 'Lohnt sich eine Solaranlage mit Wärmepumpe in der Schweiz 2026?', answer: "Ja, die Kombination ist eine der rentabelsten Energieinvestitionen überhaupt. Sie können Ihre Heizkosten um 40–70% senken, kombinierte Fördergelder von CHF 8'000–20'000 erhalten und beide Investitionen noch bis Ende 2027 steuerlich abziehen." },
      { question: 'Wie gross muss die Solaranlage für eine Wärmepumpe sein?', answer: 'Für eine Luft-Wasser-Wärmepumpe in einem typischen Einfamilienhaus empfehlen sich 10–13 kWp. Bei einer effizienteren Sole-Wasser-Wärmepumpe reichen 8–10 kWp. Wenn ein Elektroauto dazukommt, sollte die Anlage 3–5 kWp grösser sein.' },
      { question: 'Welche Wärmepumpe passt am besten zur Solaranlage?', answer: 'Alle Wärmepumpentypen lassen sich mit einer Solaranlage kombinieren. Die Luft-Wasser-Wärmepumpe ist am verbreitetsten und günstigsten. Die Sole-Wasser-Wärmepumpe ist effizienter und braucht weniger Solarstrom, kostet aber mehr.' },
      { question: 'Brauche ich einen Batteriespeicher für die Kombination?', answer: 'Nein, aber er erhöht den Eigenverbrauch von ca. 50% auf 70–80%. Oft ist ein Energiemanagementsystem, das die Wärmepumpe automatisch bei Solarüberschuss einschaltet, wirtschaftlicher als ein teurer Batteriespeicher.' },
      { question: 'Welche Förderungen gibt es für Solaranlage und Wärmepumpe zusammen?', answer: "Beide werden separat gefördert: EIV für die Solaranlage (ca. CHF 3'500–5'500) und Gebäudeprogramm für die Wärmepumpe (CHF 3'000–10'000). Dazu kommen kantonale Beiträge und der Steuerabzug. Total sind CHF 8'000–20'000 Fördergelder möglich." },
      { question: 'Kann ich eine Wärmepumpe nachträglich zu meiner bestehenden Solaranlage hinzufügen?', answer: 'Ja, das ist problemlos möglich. Allerdings sollte die bestehende Solaranlage gross genug dimensioniert sein. Bei einer kleinen Anlage unter 8 kWp empfiehlt sich eine Erweiterung gleichzeitig mit der Wärmepumpeninstallation.' },
      { question: 'Wie hoch ist der CO₂-Ausstoss mit Solaranlage und Wärmepumpe?', answer: 'Praktisch null. Eine Wärmepumpe betrieben mit Solarstrom heizt vollständig CO₂-frei. Im Vergleich zu einer Ölheizung sparen Sie ca. 4–5 Tonnen CO₂ pro Jahr — das entspricht ca. 30\'000 km Autofahren.' },
    ],
  },

  // ─── SOLARANLAGE + WÄRMEPUMPE (FR) ───────────────────────────────────────
  {
    slug: 'solaranlage-waermepumpe-kombinieren-schweiz',
    locale: 'fr',
    title: 'Combiner panneau solaire et pompe à chaleur en Suisse — est-ce rentable en 2026?',
    metaDescription: 'Combiner panneau solaire et pompe à chaleur en Suisse: coûts, économies et subventions 2026. Quand est-ce vraiment rentable? Avec des exemples chiffrés de PVPro.ch.',
    image: '/images/solaranlage-waermepumpe-chalet-winter.webp',
    date: '3 mai 2026',
    readMin: 10,
    tag: 'Guide',
    intro: "Combiner panneau solaire et pompe à chaleur — c'est la solution énergétique la plus efficace pour les propriétaires suisses en 2026. La pompe à chaleur consomme de l'électricité, le panneau solaire en produit. Simple en théorie — et en pratique aussi. Cette combinaison peut réduire vos coûts de chauffage de 40 à 70% et ramener votre empreinte CO₂ à pratiquement zéro. Cette page explique comment fonctionne la combinaison, ce qu'elle coûte et pour qui elle est particulièrement rentable.",
    sections: [
      {
        heading: 'Pourquoi la combinaison panneau solaire et pompe à chaleur est-elle si efficace?',
        content: [
          "Une pompe à chaleur est l'un des systèmes de chauffage les plus efficaces — elle produit 3 à 5 kWh de chaleur pour 1 kWh d'électricité consommée. Son seul inconvénient: elle consomme de l'électricité, qui coûte 28 à 35 centimes par kWh sur le réseau suisse. Un panneau solaire produit de l'électricité à seulement 8 à 12 centimes par kWh sur sa durée de vie.",
          "Si vous faites fonctionner votre pompe à chaleur avec de l'électricité solaire, vos coûts de chauffage effectifs chutent considérablement. C'est le cœur de la combinaison — et la raison pour laquelle de plus en plus de propriétaires suisses adoptent ce système.",
          "Le coefficient de performance saisonnier (COP annuel) détermine l'efficacité de la combinaison. Plus le COP est élevé, moins la pompe consomme d'électricité:",
        ],
        bullets: [
          "Pompe à chaleur air-eau: COP 3.0–3.5 → 4'300–5'000 kWh/an pour 15'000 kWh de chaleur",
          "Pompe à chaleur géothermique (sol-eau): COP 4.0–4.5 → 3'300–3'750 kWh/an",
          "Pompe à chaleur eau-eau: COP 4.5–5.5 → 2'700–3'300 kWh/an",
        ],
        highlight: "Une pompe à chaleur produit 3 à 5 kWh de chaleur pour 1 kWh d'électricité. L'électricité solaire ne coûte que 8–12 ct./kWh sur la durée de vie — contre 28–35 ct./kWh sur le réseau.",
      },
      {
        heading: 'Combiner panneau solaire et pompe à chaleur — combien ça coûte en Suisse?',
        content: [
          "La combinaison représente un investissement plus important qu'un panneau solaire seul. Voici les valeurs indicatives pour une maison individuelle typique:",
        ],
        bullets: [
          "Panneaux solaires 10–15 kWc: CHF 18'000–28'000",
          "Pompe à chaleur air-eau: CHF 18'000–30'000",
          "Pompe à chaleur géothermique: CHF 35'000–55'000",
          "Batterie de stockage 10 kWh (optionnel): CHF 7'000–10'000",
          "Système de gestion de l'énergie: CHF 1'500–3'000",
          "Pack complet sans batterie: CHF 36'000–58'000",
          "Pack complet avec batterie: CHF 43'000–68'000",
        ],
        highlight: "Après déduction de toutes les subventions, l'investissement net se réduit à CHF 25'000–40'000 — pour une durée de vie de 20 à 30 ans.",
      },
      {
        heading: 'Quelles subventions pour la combinaison en Suisse?',
        content: [
          "Le panneau solaire et la pompe à chaleur sont subventionnés séparément en Suisse — vous recevez donc des aides pour les deux composants.",
          "Pour le panneau solaire: la rétribution unique (RU) fédérale est d'environ CHF 3'550–5'450 pour 10–15 kWc. S'y ajoute la déduction fiscale en tant qu'entretien immobilier (jusqu'à fin 2027): économie de CHF 4'000–8'000.",
          "Pour la pompe à chaleur: le Programme Bâtiments fédéral offre CHF 3'000–10'000. Les contributions cantonales s'élèvent à CHF 1'000–5'000 selon le canton. De nombreux fournisseurs d'énergie proposent des contributions supplémentaires et des tarifs réduits (jusqu'à 30% de rabais).",
        ],
        bullets: [
          "Rétribution unique (RU) panneaux solaires: CHF 3'550–5'450",
          "Déduction fiscale solaire (jusqu'en 2027): économie CHF 4'000–8'000",
          "Programme Bâtiments fédéral pompe à chaleur: CHF 3'000–10'000",
          "Contributions cantonales pompe à chaleur: CHF 1'000–5'000",
          "Contributions fournisseurs d'énergie: CHF 500–2'000",
        ],
        highlight: "Total des subventions possibles: CHF 8'000–20'000. La déduction fiscale expire fin 2027 — 2026 et 2027 sont les dernières années pour en profiter pleinement.",
      },
      {
        heading: 'Combien puis-je économiser concrètement? Exemple de calcul',
        content: [
          "Prenons une maison individuelle suisse typique chauffée au mazout: consommation de 2'000 litres/an (environ CHF 2'400/an), coût d'électricité du ménage environ CHF 1'500/an.",
          "Après installation de panneaux solaires (12 kWc) et d'une pompe à chaleur air-eau: les coûts de chauffage passent de CHF 2'400 à CHF 400/an (économie CHF 2'000). Les coûts d'électricité passent de CHF 1'500 à CHF 300/an (économie CHF 1'200).",
        ],
        bullets: [
          "Économie annuelle totale: CHF 3'200/an",
          "Investissement net après subventions: env. CHF 30'000",
          'Amortissement: env. 9–10 ans',
          'Rendement sur la durée de vie: 8–12% p.a.',
          'Durée de vie: 20–25 ans',
        ],
        highlight: "Pour un investissement net de CHF 30'000, l'amortissement est d'environ 9–10 ans — avec un rendement de 8–12% p.a. sur 20–25 ans.",
      },
      {
        heading: 'Combiner panneau solaire et pompe à chaleur — quel type choisir?',
        content: [
          'Toutes les pompes à chaleur ne se combinent pas avec les mêmes performances à un panneau solaire.',
          "Pompe à chaleur air-eau (le choix le plus fréquent): Installation la moins coûteuse, pas de forage nécessaire. COP 3.0–3.5, consomme plus d'électricité solaire. Idéale pour les bâtiments existants et les budgets plus modestes.",
          "Pompe à chaleur géothermique sol-eau (la plus efficace): COP le plus élevé 4.0–4.5, consomme moins d'électricité, mais plus chère via le forage (CHF 15'000–25'000). Profondeur de forage 150–300 m, durée de vie de la sonde plus de 50 ans. Idéale pour les nouvelles constructions.",
          "Pompe à chaleur eau-eau (la plus puissante): COP 4.5–5.5, nécessite de l'eau souterraine en quantité suffisante. Pas possible partout, autorisation requise.",
        ],
        highlight: "Pour la plupart des maisons individuelles suisses, la pompe à chaleur air-eau combinée à un panneau solaire est la solution la plus pratique et la plus économique.",
      },
      {
        heading: 'Quelle taille de panneau solaire pour une pompe à chaleur?',
        content: [
          "Une pompe à chaleur air-eau pour une maison individuelle typique consomme environ 4'000–5'000 kWh d'électricité par an pour le chauffage et l'eau chaude. Avec la consommation électrique normale du ménage (4'000–5'000 kWh/an), le total est de 8'000–10'000 kWh/an.",
          "Un panneau solaire de 10–12 kWc produit en Suisse environ 9'000–11'000 kWh/an — ce qui correspond parfaitement.",
        ],
        bullets: [
          'PAC air-eau + ménage: 10–13 kWc recommandés',
          'PAC géothermique + ménage: 8–10 kWc (PAC plus efficace, moins de consommation)',
          'Avec voiture électrique en plus: +3–5 kWc',
        ],
        highlight: "Règle pratique: pompe à chaleur air-eau + ménage = 10–13 kWc. Avec une pompe géothermique, 8–10 kWc suffisent.",
      },
      {
        heading: "Ai-je besoin d'une batterie de stockage?",
        content: [
          "Pas obligatoirement — mais une batterie augmente considérablement le taux d'autoconsommation.",
          "Sans batterie: En été, la PAC fonctionne directement avec l'électricité solaire pour l'eau chaude. En hiver — quand la PAC consomme le plus — le panneau solaire produit peu. Taux d'autoconsommation: env. 40–50%.",
          "Avec batterie: L'électricité solaire de midi est stockée et utilisée le soir pour la PAC. Taux d'autoconsommation: env. 60–75%.",
          "Avec batterie + gestion intelligente du chauffage: La PAC préchauffe le ballon d'eau chaude le jour avec l'énergie solaire. Taux d'autoconsommation: jusqu'à 80–90%.",
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
        highlight: "En investissant encore en 2026 ou 2027, vous pouvez déduire fiscalement les coûts des deux systèmes — et économiser CHF 4'000–10'000 supplémentaires.",
      },
      {
        heading: 'Étape par étape: comment procéder?',
        content: [
          "Étape 1 — Analyser les besoins énergétiques: Quelle est votre consommation électrique? Combien de chaleur votre bâtiment nécessite-t-il? Un installateur certifié répond à ces questions lors d'une consultation gratuite.",
          "Étape 2 — Dimensionner le système: Le panneau solaire et la pompe à chaleur doivent être adaptés l'un à l'autre. Un système trop petit ne couvre pas les besoins en électricité de la PAC.",
          "Étape 3 — Comparer les offres: Demander au moins 3 offres est indispensable pour un tel investissement. Les différences de prix entre installateurs peuvent atteindre CHF 5'000–10'000.",
          "Étape 4 — Demander les subventions: Pour le Programme Bâtiments (PAC), la demande doit être déposée avant le début des travaux. Pour la RU (solaire), l'installateur dépose la demande après l'installation.",
          "Étape 5 — Installation et mise en service: Le panneau solaire et la PAC peuvent être installés simultanément ou successivement. Une installation simultanée permet d'économiser les frais d'échafaudage.",
        ],
      },
    ],
    ctaHeading: 'Demandez maintenant la combinaison panneau solaire + pompe à chaleur',
    ctaText: "Combinez panneau solaire et pompe à chaleur pour économiser jusqu'à 70% sur vos coûts de chauffage — PVPro.ch vous met gratuitement en contact avec des installateurs certifiés qui planifient et installent les deux systèmes.",
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
      { question: 'Est-ce rentable de combiner un panneau solaire et une pompe à chaleur en Suisse en 2026?', answer: "Oui, la combinaison est l'un des investissements énergétiques les plus rentables. Vous pouvez réduire vos coûts de chauffage de 40 à 70%, recevoir des subventions combinées de CHF 8'000–20'000 et déduire fiscalement les deux investissements jusqu'à fin 2027." },
      { question: 'Quelle taille de panneau solaire pour une pompe à chaleur?', answer: "Pour une pompe à chaleur air-eau dans une maison individuelle typique, 10–13 kWc sont recommandés. Pour une pompe géothermique plus efficace, 8–10 kWc suffisent. Avec une voiture électrique en plus, prévoyez 3–5 kWc supplémentaires." },
      { question: 'Quelle pompe à chaleur convient le mieux au panneau solaire?', answer: "Tous les types de pompes à chaleur peuvent être combinés avec un panneau solaire. La pompe air-eau est la plus répandue et la moins chère. La pompe géothermique est plus efficace et consomme moins d'électricité solaire, mais coûte plus cher." },
      { question: "Ai-je besoin d'une batterie pour la combinaison?", answer: "Non, mais elle fait passer le taux d'autoconsommation d'environ 50% à 70–80%. Un système de gestion de l'énergie activant automatiquement la PAC lors des surplus solaires est souvent plus économique qu'une batterie coûteuse." },
      { question: 'Quelles subventions pour le panneau solaire et la pompe à chaleur ensemble?', answer: "Les deux sont subventionnés séparément: RU pour le solaire (CHF 3'500–5'500) et Programme Bâtiments pour la PAC (CHF 3'000–10'000). S'y ajoutent les contributions cantonales et la déduction fiscale. Total possible: CHF 8'000–20'000." },
      { question: 'Puis-je ajouter une pompe à chaleur à mon installation solaire existante?', answer: "Oui, c'est tout à fait possible. Cependant, l'installation solaire existante doit être suffisamment dimensionnée. Pour une petite installation (moins de 8 kWc), il est conseillé d'agrandir en même temps que l'installation de la PAC." },
      { question: "Quel est l'impact CO₂ avec panneau solaire et pompe à chaleur?", answer: "Pratiquement zéro. Une pompe à chaleur fonctionnant à l'électricité solaire chauffe sans aucune émission de CO₂. Par rapport à une chaudière à mazout, vous économisez environ 4 à 5 tonnes de CO₂ par an — soit environ 30'000 km en voiture." },
    ],
  },

  // ─── SOLARANLAGE + WÄRMEPUMPE (EN) ───────────────────────────────────────
  {
    slug: 'solaranlage-waermepumpe-kombinieren-schweiz',
    locale: 'en',
    title: 'Combining Solar Panels and Heat Pump in Switzerland — Is It Worth It in 2026?',
    metaDescription: 'Solar panels and heat pump combination in Switzerland: costs, savings and subsidies 2026. When does the combination really pay off? With calculation examples from PVPro.ch.',
    image: '/images/solaranlage-waermepumpe-chalet-winter.webp',
    date: '3 May 2026',
    readMin: 10,
    tag: 'Guide',
    intro: 'Combining solar panels with a heat pump is the most efficient energy solution for Swiss homeowners in 2026. The heat pump needs electricity, the solar panels produce it. Simple in theory — and in practice too. This combination can reduce your heating costs by 40–70% and bring your CO₂ emissions to practically zero. This page explains how the combination works, what it costs and who benefits most.',
    sections: [
      {
        heading: 'Why is the solar panel and heat pump combination so efficient?',
        content: [
          'A heat pump is one of the most efficient heating systems — it produces 3–5 kWh of heat from 1 kWh of electricity. Grid electricity in Switzerland costs 28–35 cents per kWh. Solar panels produce electricity for only 8–12 cents per kWh over their lifetime.',
          'Running your heat pump on solar electricity drastically reduces effective heating costs. That is the core of the combination — and why more and more Swiss homeowners are adopting this system.',
          'The Seasonal Coefficient of Performance (SCOP) determines how efficient the combination is. The higher the SCOP, the less electricity the pump needs:',
        ],
        bullets: [
          'Air-to-water heat pump: SCOP 3.0–3.5 → 4,300–5,000 kWh/year for 15,000 kWh of heat',
          'Ground-source heat pump (geothermal): SCOP 4.0–4.5 → 3,300–3,750 kWh/year',
          'Water-source heat pump: SCOP 4.5–5.5 → 2,700–3,300 kWh/year',
        ],
        highlight: 'A heat pump produces 3–5 kWh of heat from 1 kWh of electricity. Solar electricity costs only 8–12 ct./kWh over its lifetime — vs. 28–35 ct./kWh from the grid.',
      },
      {
        heading: 'Solar panels and heat pump combination — what does it cost in Switzerland?',
        content: [
          'The combination is a larger investment than solar panels alone. Here are the reference values for a typical single-family home:',
        ],
        bullets: [
          'Solar panels 10–15 kWp: CHF 18,000–28,000',
          'Air-to-water heat pump: CHF 18,000–30,000',
          'Ground-source heat pump: CHF 35,000–55,000',
          'Battery storage 10 kWh (optional): CHF 7,000–10,000',
          'Energy management system: CHF 1,500–3,000',
          'Full package without battery: CHF 36,000–58,000',
          'Full package with battery: CHF 43,000–68,000',
        ],
        highlight: 'After deducting all subsidies, the net investment is reduced to CHF 25,000–40,000 — for a system lifetime of 20–30 years.',
      },
      {
        heading: 'What subsidies are available for the combination in Switzerland?',
        content: [
          'Solar panels and heat pumps are subsidized separately in Switzerland — meaning you receive support for both components.',
          'For solar panels: the federal one-time payment (OTP) is approx. CHF 3,550–5,450 for 10–15 kWp. Plus tax deduction as property maintenance (until end of 2027): savings of CHF 4,000–8,000.',
          'For the heat pump: the federal Buildings Programme offers CHF 3,000–10,000. Cantonal contributions are CHF 1,000–5,000 depending on the canton. Many energy providers offer additional contributions and reduced heat pump tariffs (up to 30% discount).',
        ],
        bullets: [
          'Federal one-time payment (OTP) for solar: CHF 3,550–5,450',
          'Tax deduction for solar (until end of 2027): savings CHF 4,000–8,000',
          'Federal Buildings Programme for heat pump: CHF 3,000–10,000',
          'Cantonal contributions for heat pump: CHF 1,000–5,000',
          'Energy provider contributions: CHF 500–2,000',
        ],
        highlight: 'Total possible subsidies: CHF 8,000–20,000. The tax deduction expires at the end of 2027 — 2026 and 2027 are the last years to take full advantage.',
      },
      {
        heading: 'How much can I actually save? Calculation example',
        content: [
          'Take a typical Swiss single-family home currently heated with oil: 2,000 litres/year consumption (approx. CHF 2,400/year), household electricity costs approx. CHF 1,500/year.',
          'After installing solar panels (12 kWp) and an air-to-water heat pump: heating costs drop from CHF 2,400 to CHF 400/year (savings CHF 2,000). Electricity costs drop from CHF 1,500 to CHF 300/year (savings CHF 1,200).',
        ],
        bullets: [
          'Total annual savings: CHF 3,200/year',
          'Net investment after subsidies: approx. CHF 30,000',
          'Payback period: approx. 9–10 years',
          'Return on investment over lifetime: 8–12% p.a.',
          'System lifetime: 20–25 years',
        ],
        highlight: 'With a net investment of CHF 30,000, the payback period is approx. 9–10 years — with a return of 8–12% p.a. over 20–25 years.',
      },
      {
        heading: 'Solar panels and heat pump — which type is best?',
        content: [
          'Not all heat pumps combine equally well with solar panels.',
          'Air-to-water heat pump (most common choice): Cheapest installation, no drilling required. SCOP 3.0–3.5, uses more solar electricity. Ideal for existing buildings and smaller budgets.',
          'Ground-source heat pump / geothermal (most efficient): Highest SCOP 4.0–4.5, uses less electricity, but more expensive due to drilling (CHF 15,000–25,000). Drilling depth 150–300 m, ground probe lifetime over 50 years. Ideal for new builds and maximum efficiency.',
          'Water-source heat pump (most powerful): SCOP 4.5–5.5, requires sufficient groundwater availability. Not possible everywhere, permit required.',
        ],
        highlight: 'For most Swiss single-family homes, the air-to-water heat pump combined with solar panels is the most practical and economical solution.',
      },
      {
        heading: 'What size solar panels do I need for a heat pump?',
        content: [
          'An air-to-water heat pump for a typical single-family home requires approx. 4,000–5,000 kWh of electricity per year for heating and hot water. Add the regular household electricity consumption of 4,000–5,000 kWh/year — total approx. 8,000–10,000 kWh/year.',
          'A 10–12 kWp solar system produces approx. 9,000–11,000 kWh/year in Switzerland — a perfect match.',
        ],
        bullets: [
          'Air-to-water HP + household: 10–13 kWp solar panels recommended',
          'Ground-source HP + household: 8–10 kWp (more efficient HP needs less electricity)',
          'With electric car in addition: +3–5 kWp',
        ],
        highlight: 'Rule of thumb: air-to-water heat pump + household = 10–13 kWp. With a ground-source heat pump, 8–10 kWp is sufficient.',
      },
      {
        heading: 'Do I need a battery storage system?',
        content: [
          'Not necessarily — but a battery significantly increases self-consumption.',
          'Without battery: In summer, the heat pump runs directly on solar electricity for hot water. In winter — when the heat pump uses most electricity — solar production is low. Self-consumption rate: approx. 40–50%.',
          'With battery: Solar electricity from midday is stored and used in the evening for the heat pump. Self-consumption rate: approx. 60–75%.',
          'With battery + smart heating control: The heat pump pre-heats the hot water tank during the day using solar energy. Self-consumption rate: up to 80–90%.',
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
        highlight: 'By investing in 2026 or 2027, you can deduct the total costs of both systems from your taxes — saving an additional CHF 4,000–10,000.',
      },
      {
        heading: 'Step by step: how to proceed',
        content: [
          'Step 1 — Analyse energy needs: How much electricity does your household use? How much heat does your building need? Is it well insulated? A certified installer answers these questions in a free consultation.',
          'Step 2 — Size the system: Solar panels and heat pump must be matched to each other. A system that is too small will not cover the heat pump\'s electricity needs.',
          'Step 3 — Compare quotes: Getting at least 3 quotes is essential for such a large investment. Price differences between installers can be CHF 5,000–10,000.',
          'Step 4 — Apply for subsidies: For the Buildings Programme (heat pump), the application must be submitted before work begins. For the OTP (solar panels), the installer submits the application after installation.',
          'Step 5 — Installation and commissioning: Solar panels and heat pump can be installed simultaneously or in stages. Simultaneous installation saves scaffolding costs.',
        ],
      },
    ],
    ctaHeading: 'Request solar panel + heat pump combination now',
    ctaText: 'Combine solar panels with a heat pump and save up to 70% on heating costs — PVPro.ch connects you free of charge with certified installers who plan and install both systems.',
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
      { question: 'Is it worth combining solar panels and a heat pump in Switzerland in 2026?', answer: 'Yes, the combination is one of the most profitable energy investments available. You can reduce your heating costs by 40–70%, receive combined subsidies of CHF 8,000–20,000, and deduct both investments from your taxes until end of 2027.' },
      { question: 'What size solar panels do I need for a heat pump?', answer: 'For an air-to-water heat pump in a typical single-family home, 10–13 kWp is recommended. For a more efficient ground-source heat pump, 8–10 kWp is sufficient. With an electric car in addition, add 3–5 kWp.' },
      { question: 'Which heat pump works best with solar panels?', answer: 'All types of heat pumps can be combined with solar panels. The air-to-water heat pump is the most common and least expensive. The ground-source heat pump is more efficient and uses less solar electricity, but costs more.' },
      { question: 'Do I need battery storage for the combination?', answer: 'No, but it increases self-consumption from approx. 50% to 70–80%. An energy management system that automatically activates the heat pump when solar surplus is available is often more economical than an expensive battery.' },
      { question: 'What subsidies are available for solar panels and heat pump together?', answer: 'Both are subsidized separately: OTP for solar panels (approx. CHF 3,500–5,500) and Buildings Programme for the heat pump (CHF 3,000–10,000). Plus cantonal contributions and tax deductions. Total possible: CHF 8,000–20,000.' },
      { question: 'Can I add a heat pump to my existing solar installation?', answer: 'Yes, this is perfectly possible. However, the existing solar installation should be large enough. For a small installation (under 8 kWp), it is advisable to expand it at the same time as the heat pump installation.' },
      { question: 'How much CO₂ do I save with solar panels and a heat pump?', answer: 'Practically zero. A heat pump running on solar electricity heats completely CO₂-free. Compared to an oil boiler, you save approx. 4–5 tonnes of CO₂ per year — equivalent to approx. 30,000 km of driving.' },
    ],
  },

  // ─── SOLARANLAGE + WÄRMEPUMPE (IT) ───────────────────────────────────────
  {
    slug: 'solaranlage-waermepumpe-kombinieren-schweiz',
    locale: 'it',
    title: 'Combinare impianto solare e pompa di calore in Svizzera — conviene nel 2026?',
    metaDescription: "Combinare impianto solare e pompa di calore in Svizzera: costi, risparmio e incentivi 2026. Quando conviene davvero la combinazione? Con esempi di calcolo di PVPro.ch.",
    image: '/images/solaranlage-waermepumpe-chalet-winter.webp',
    date: '3 maggio 2026',
    readMin: 10,
    tag: 'Guida',
    intro: "Combinare impianto solare e pompa di calore — è la soluzione energetica più efficiente per i proprietari svizzeri nel 2026. La pompa di calore ha bisogno di elettricità, l'impianto solare la produce. Semplice in teoria — e anche in pratica. Questa combinazione può ridurre i costi di riscaldamento del 40–70% e portare le emissioni di CO₂ praticamente a zero. Questa pagina spiega come funziona la combinazione, quanto costa e per chi è particolarmente conveniente.",
    sections: [
      {
        heading: "Perché la combinazione impianto solare e pompa di calore è così efficiente?",
        content: [
          "Una pompa di calore è uno dei sistemi di riscaldamento più efficienti — produce 3–5 kWh di calore per ogni kWh di elettricità consumata. L'unico svantaggio: consuma elettricità, che in Svizzera costa 28–35 centesimi per kWh dalla rete. Un impianto solare produce invece elettricità per soli 8–12 centesimi per kWh nel corso della sua vita utile.",
          "Se si fa funzionare la pompa di calore con l'elettricità solare, i costi di riscaldamento effettivi si riducono drasticamente. Questo è il cuore della combinazione — e il motivo per cui sempre più proprietari svizzeri adottano questo sistema.",
          "Il coefficiente di prestazione stagionale (COP annuo) determina l'efficienza della combinazione. Più alto è il COP, meno elettricità consuma la pompa:",
        ],
        bullets: [
          "Pompa di calore aria-acqua: COP 3.0–3.5 → 4'300–5'000 kWh/anno per 15'000 kWh di calore",
          "Pompa di calore geotermica (suolo-acqua): COP 4.0–4.5 → 3'300–3'750 kWh/anno",
          "Pompa di calore acqua-acqua: COP 4.5–5.5 → 2'700–3'300 kWh/anno",
        ],
        highlight: "Una pompa di calore produce 3–5 kWh di calore per ogni kWh di elettricità. L'elettricità solare costa solo 8–12 ct./kWh nel corso della vita utile — contro i 28–35 ct./kWh dalla rete.",
      },
      {
        heading: 'Combinare impianto solare e pompa di calore — quanto costa in Svizzera?',
        content: [
          'La combinazione è un investimento maggiore rispetto al solo impianto solare. Ecco i valori indicativi per una tipica casa unifamiliare:',
        ],
        bullets: [
          "Impianto solare 10–15 kWp: CHF 18'000–28'000",
          "Pompa di calore aria-acqua: CHF 18'000–30'000",
          "Pompa di calore geotermica: CHF 35'000–55'000",
          "Accumulo a batteria 10 kWh (opzionale): CHF 7'000–10'000",
          "Sistema di gestione energetica: CHF 1'500–3'000",
          "Pacchetto completo senza batteria: CHF 36'000–58'000",
          "Pacchetto completo con batteria: CHF 43'000–68'000",
        ],
        highlight: "Dopo la detrazione di tutti gli incentivi, l'investimento netto si riduce a CHF 25'000–40'000 — per una durata di vita di 20–30 anni.",
      },
      {
        heading: 'Quali incentivi esistono per la combinazione in Svizzera?',
        content: [
          "L'impianto solare e la pompa di calore sono incentivati separatamente in Svizzera — il che significa che si ricevono sussidi per entrambi i componenti.",
          "Per l'impianto solare: la remunerazione unica (RU) federale è di circa CHF 3'550–5'450 per 10–15 kWp. In aggiunta, la deduzione fiscale come manutenzione immobiliare (fino a fine 2027): risparmio di CHF 4'000–8'000.",
          "Per la pompa di calore: il Programma Edifici federale offre CHF 3'000–10'000. I contributi cantonali ammontano a CHF 1'000–5'000 a seconda del cantone. Molti fornitori di energia offrono contributi aggiuntivi e tariffe speciali per pompe di calore (fino al 30% di sconto).",
        ],
        bullets: [
          "Remunerazione unica (RU) per l'impianto solare: CHF 3'550–5'450",
          "Deduzione fiscale solare (fino a fine 2027): risparmio CHF 4'000–8'000",
          "Programma Edifici federale per pompa di calore: CHF 3'000–10'000",
          "Contributi cantonali pompa di calore: CHF 1'000–5'000",
          "Contributi fornitori di energia: CHF 500–2'000",
        ],
        highlight: "Totale incentivi possibili: CHF 8'000–20'000. La deduzione fiscale scade a fine 2027 — il 2026 e il 2027 sono gli ultimi anni per sfruttarla appieno.",
      },
      {
        heading: 'Quanto posso risparmiare concretamente? Esempio di calcolo',
        content: [
          "Prendiamo una tipica casa unifamiliare svizzera attualmente riscaldata a gasolio: consumo di 2'000 litri/anno (circa CHF 2'400/anno), costi elettrici domestici circa CHF 1'500/anno.",
          "Dopo l'installazione di un impianto solare (12 kWp) e una pompa di calore aria-acqua: i costi di riscaldamento scendono da CHF 2'400 a CHF 400/anno (risparmio CHF 2'000). I costi di elettricità scendono da CHF 1'500 a CHF 300/anno (risparmio CHF 1'200).",
        ],
        bullets: [
          "Risparmio annuale totale: CHF 3'200/anno",
          "Investimento netto dopo incentivi: circa CHF 30'000",
          'Periodo di ammortamento: circa 9–10 anni',
          'Rendimento nel corso della vita utile: 8–12% p.a.',
          'Durata di vita: 20–25 anni',
        ],
        highlight: "Con un investimento netto di CHF 30'000, il periodo di ammortamento è di circa 9–10 anni — con un rendimento dell'8–12% p.a. su 20–25 anni.",
      },
      {
        heading: "Combinare impianto solare e pompa di calore — quale tipo scegliere?",
        content: [
          "Non tutte le pompe di calore si combinano ugualmente bene con un impianto solare.",
          "Pompa di calore aria-acqua (la scelta più comune): Installazione meno costosa, nessuna perforazione necessaria. COP 3.0–3.5, consuma più elettricità solare. Ideale per edifici esistenti e budget più contenuti.",
          "Pompa di calore geotermica suolo-acqua (la più efficiente): COP più elevato 4.0–4.5, consuma meno elettricità, ma più costosa tramite perforazione (CHF 15'000–25'000). Profondità di perforazione 150–300 m, durata della sonda oltre 50 anni. Ideale per nuove costruzioni.",
          "Pompa di calore acqua-acqua (la più potente): COP 4.5–5.5, richiede disponibilità sufficiente di acqua di falda. Non possibile ovunque, necessaria autorizzazione.",
        ],
        highlight: "Per la maggior parte delle case unifamiliari svizzere, la pompa di calore aria-acqua in combinazione con l'impianto solare è la soluzione più pratica ed economica.",
      },
      {
        heading: "Quanto deve essere grande l'impianto solare per una pompa di calore?",
        content: [
          "Una pompa di calore aria-acqua per una tipica casa unifamiliare richiede circa 4'000–5'000 kWh di elettricità all'anno per il riscaldamento e l'acqua calda. Aggiungendo il consumo domestico normale di 4'000–5'000 kWh/anno — il totale è di 8'000–10'000 kWh/anno.",
          "Un impianto solare da 10–12 kWp produce in Svizzera circa 9'000–11'000 kWh/anno — perfettamente adatto.",
        ],
        bullets: [
          'PDC aria-acqua + domestico: 10–13 kWp consigliati',
          'PDC geotermica + domestico: 8–10 kWp (PDC più efficiente consuma meno)',
          'Con auto elettrica in aggiunta: +3–5 kWp',
        ],
        highlight: "Regola pratica: pompa di calore aria-acqua + domestico = 10–13 kWp. Con una pompa geotermica bastano 8–10 kWp.",
      },
      {
        heading: 'Ho bisogno di un accumulo a batteria?',
        content: [
          "Non necessariamente — ma una batteria aumenta notevolmente il tasso di autoconsumo.",
          "Senza batteria: In estate, la pompa di calore funziona direttamente con l'elettricità solare per l'acqua calda. In inverno — quando la pompa consuma di più — l'impianto solare produce poco. Tasso di autoconsumo: circa 40–50%.",
          "Con batteria: L'elettricità solare di mezzogiorno viene immagazzinata e utilizzata la sera per la pompa di calore. Tasso di autoconsumo: circa 60–75%.",
          "Con batteria + controllo intelligente del riscaldamento: La pompa di calore preriscalda il serbatoio di acqua calda durante il giorno con l'energia solare (accumulo termico). Tasso di autoconsumo: fino all'80–90%.",
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
        highlight: "Investendo ancora nel 2026 o 2027, è possibile detrarre fiscalmente i costi totali di entrambi i sistemi — risparmiando ulteriori CHF 4'000–10'000.",
      },
      {
        heading: 'Passo dopo passo: come procedere',
        content: [
          "Passo 1 — Analizzare il fabbisogno energetico: Quanto consuma elettricamente la sua famiglia? Quanta energia termica richiede il suo edificio? È ben isolato? Un installatore certificato risponde a queste domande durante una consulenza gratuita.",
          "Passo 2 — Dimensionare il sistema: L'impianto solare e la pompa di calore devono essere adattati l'uno all'altro. Un sistema troppo piccolo non copre il fabbisogno elettrico della pompa.",
          "Passo 3 — Confrontare i preventivi: Richiedere almeno 3 preventivi è indispensabile per un investimento così importante. Le differenze di prezzo tra installatori possono raggiungere CHF 5'000–10'000.",
          "Passo 4 — Richiedere gli incentivi: Per il Programma Edifici (pompa di calore), la domanda deve essere presentata prima dell'inizio dei lavori. Per la RU (impianto solare), l'installatore presenta la domanda dopo l'installazione.",
          "Passo 5 — Installazione e messa in servizio: L'impianto solare e la pompa di calore possono essere installati contemporaneamente o in fasi successive. Un'installazione simultanea consente di risparmiare sui costi dei ponteggi.",
        ],
      },
    ],
    ctaHeading: 'Richiedi ora la combinazione impianto solare + pompa di calore',
    ctaText: "Combina impianto solare e pompa di calore e risparmia fino al 70% sui costi di riscaldamento — PVPro.ch ti mette gratuitamente in contatto con installatori certificati che pianificano e installano entrambi i sistemi.",
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
      { question: "Conviene combinare impianto solare e pompa di calore in Svizzera nel 2026?", answer: "Sì, la combinazione è uno degli investimenti energetici più redditizi in assoluto. È possibile ridurre i costi di riscaldamento del 40–70%, ricevere incentivi combinati di CHF 8'000–20'000 e detrarre entrambi gli investimenti fiscalmente fino a fine 2027." },
      { question: "Quanto deve essere grande l'impianto solare per una pompa di calore?", answer: "Per una pompa di calore aria-acqua in una tipica casa unifamiliare si consigliano 10–13 kWp. Per una pompa geotermica più efficiente bastano 8–10 kWp. Con un'auto elettrica in aggiunta, aggiungere 3–5 kWp." },
      { question: "Quale pompa di calore si abbina meglio all'impianto solare?", answer: "Tutti i tipi di pompe di calore possono essere combinati con un impianto solare. La pompa aria-acqua è la più diffusa e meno costosa. La pompa geotermica è più efficiente e consuma meno elettricità solare, ma costa di più." },
      { question: "Ho bisogno di un accumulo a batteria per la combinazione?", answer: "No, ma aumenta il tasso di autoconsumo dal circa 50% al 70–80%. Un sistema di gestione dell'energia che attiva automaticamente la pompa di calore in caso di surplus solare è spesso più conveniente di una costosa batteria." },
      { question: "Quali incentivi esistono per impianto solare e pompa di calore insieme?", answer: "Entrambi sono incentivati separatamente: RU per l'impianto solare (CHF 3'500–5'500) e Programma Edifici per la pompa di calore (CHF 3'000–10'000). Si aggiungono i contributi cantonali e la deduzione fiscale. Totale possibile: CHF 8'000–20'000." },
      { question: "Posso aggiungere una pompa di calore al mio impianto solare esistente?", answer: "Sì, è perfettamente possibile. Tuttavia, l'impianto solare esistente deve essere sufficientemente dimensionato. Per un piccolo impianto (meno di 8 kWp), si consiglia di ampliarlo contemporaneamente all'installazione della pompa di calore." },
      { question: "Quanto CO₂ risparmio con impianto solare e pompa di calore?", answer: "Praticamente zero. Una pompa di calore alimentata con elettricità solare riscalda completamente senza emissioni di CO₂. Rispetto a una caldaia a gasolio, si risparmiano circa 4–5 tonnellate di CO₂ all'anno — equivalente a circa 30'000 km di guida." },
    ],
  },


  // ─── BESTEN SOLARINSTALLATEUR FINDEN (DE) ────────────────────────────────
  {
    slug: 'besten-solarinstallateur-schweiz-finden',
    locale: 'de',
    title: 'Besten Solarinstallateur in der Schweiz finden 2026 – So geht\'s richtig',
    metaDescription: 'Wie finden Sie den besten Solarinstallateur in Ihrer Region in der Schweiz? Warum lokal besser ist, worauf Sie achten müssen und wie PVPro.ch die Suche für Sie übernimmt.',
    image: '/images/installateur-solarmodul-dach-alpen.webp',
    date: '3. Mai 2026',
    readMin: 10,
    tag: 'Ratgeber',
    intro: 'Wer in der Schweiz eine Solaranlage kaufen möchte, steht vor einer Frage, die auf den ersten Blick einfach klingt: Wer ist der beste Solarinstallateur in meiner Region? Die Antwort ist komplizierter als gedacht — denn in der Schweiz gibt es Hunderte von Installateuren, die Qualität variiert enorm, und nationale Anbieter sind nicht immer besser als lokale Fachbetriebe. Wir helfen Ihnen, den richtigen Installateur zu finden — basierend auf drei Jahren Erfahrung und über 1\'000 vermittelten Anlagen in der ganzen Schweiz.',
    sections: [
      {
        heading: 'Warum ist die Wahl des Installateurs so wichtig?',
        content: [
          'Die Solaranlage selbst macht nur einen Teil der Investition aus. Der Installateur entscheidet über vier entscheidende Faktoren:',
          'Die Qualität der Installation: Eine schlecht montierte Anlage verliert über die Jahre Leistung, hat höhere Ausfallrisiken und kann im schlimmsten Fall Dachschäden verursachen. Ein erfahrener lokaler Installateur kennt die Dachtypen in Ihrer Region und installiert korrekt.',
          'Den Preis: Für exakt die gleiche Anlage — gleiche Module, gleicher Wechselrichter, gleiche Leistung — können die Preise zwischen verschiedenen Installateuren um CHF 2\'000–4\'000 variieren. Wer nur einen Installateur anfragt und unterschreibt, zahlt oft zu viel.',
          'Den Service nach der Installation: Wer kümmert sich, wenn die Anlage nach drei Jahren einen Fehler zeigt? Ein lokaler Installateur ist in 30 Minuten bei Ihnen. Ein nationaler Anbieter schickt vielleicht einen Techniker, der aus einer anderen Region kommt.',
          'Die Förderbeantragung: Ein erfahrener lokaler Installateur kennt die kantonalen Förderprogramme und die Besonderheiten des lokalen Netzbetreibers — und beantragt alles korrekt und rechtzeitig.',
        ],
        stats: [
          { value: '500+', label: 'geprüfte Installateure im PVPro-Netzwerk' },
          { value: '48 Stunden', label: 'bis zur ersten Offerte' },
          { value: 'CHF 2\'000–4\'000', label: 'durchschnittliche Ersparnis durch Vergleich' },
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
          'Referenzen in Ihrer Region: Lokaler Fachbetrieb ✅ Viele lokale Projekte — Nationaler Anbieter ⚠️ Variabel',
          'Bekanntheit / Marketing: Lokaler Fachbetrieb ⚠️ Weniger sichtbar — Nationaler Anbieter ✅ Gross',
        ],
        highlight: 'Ein zertifizierter lokaler Fachbetrieb ist in den meisten Fällen die bessere Wahl — wenn man ihn findet. Genau das ist die Herausforderung, die PVPro.ch für Sie löst.',
      },
      {
        heading: 'Wie finde ich den besten Solarinstallateur in meiner Region?',
        content: [
          'Es gibt mehrere Wege — wir erklären ehrlich, was funktioniert und was nicht:',
          'Weg 1 — Google-Suche: Sie suchen "Solarinstallateur + Ihr Kanton" und bekommen eine Liste von Unternehmen. Das Problem: Die obersten Ergebnisse sind oft grosse nationale Anbieter mit viel Werbebudget — nicht unbedingt die besten in Ihrer Region. Kleine, hervorragende Fachbetriebe erscheinen selten auf der ersten Seite.',
          'Weg 2 — Empfehlungen von Nachbarn oder Bekannten: Das ist eine der verlässlichsten Methoden — wenn Ihr Nachbar gute Erfahrungen gemacht hat, ist das ein starkes Signal. Der Nachteil: Sie haben vielleicht nur eine oder zwei Empfehlungen und keinen Preisvergleich.',
          'Weg 3 — Swissolar-Verzeichnis: Swissolar führt eine Liste von qualifizierten Installateuren. Das ist ein guter Ausgangspunkt für die Zertifizierungsprüfung, aber kein Preisvergleich-Tool.',
          'Weg 4 — PVPro.ch: Sie füllen einmal ein Formular in 2 Minuten aus. Wir schicken Ihre Anfrage an bis zu 3 geprüfte, zertifizierte Installateure aus Ihrer Region — die Ihnen innerhalb von 48 Stunden massgeschneiderte Offerten senden. Sie vergleichen und wählen frei. Kein Aufwand, keine Werbeanrufe, keine Verpflichtung.',
        ],
      },
      {
        heading: 'Worauf muss ich bei der Wahl des Installateurs achten?',
        content: [
          'Nicht jeder Installateur ist gleich gut. Diese sechs Kriterien sollten Sie prüfen:',
          '1. Zertifizierung: Ein seriöser Solarinstallateur in der Schweiz hat eine anerkannte Zertifizierung — idealerweise von Swissolar (Solarprofi-Label) oder electrosuisse. Diese Zertifizierungen belegen, dass der Betrieb die nötigen technischen Kenntnisse hat und regelmässig weitergebildet wird.',
          '2. Lokale Erfahrung: Hat der Installateur nachgewiesene Projekte in Ihrem Kanton oder Ihrer Region? Kennt er die lokalen Netzbetreiber, die kantonalen Förderprogramme und die üblichen Dachtypen in Ihrer Gegend?',
          '3. Referenzen: Fragen Sie nach abgeschlossenen Projekten in Ihrer Gemeinde. Ein guter Installateur kann Ihnen Referenzkunden nennen, die Sie kontaktieren können.',
          '4. Was steht in der Offerte? Eine professionelle Offerte enthält immer: Anlagengrösse in kWp, Modulhersteller und -typ, Wechselrichtermarke, Montagesystem, Installationskosten separat, geschätzte Jahresproduktion, Förderung und Garantien. Wenn diese Punkte fehlen, ist das ein Warnsignal.',
          '5. Garantien: Welche Garantien bietet der Installateur auf die Montagearbeit? Seriöse Betriebe geben mindestens 5 Jahre Garantie auf die Installation selbst — zusätzlich zu den Herstellergarantien auf Module (25 Jahre) und Wechselrichter (5–12 Jahre).',
          '6. Versicherung: Ist der Betrieb für allfällige Schäden während der Installation versichert? Das sollte immer gefragt werden.',
        ],
      },
      {
        heading: 'Die 7 häufigsten Fehler bei der Installateur-Wahl',
        content: [
          'Aus unserer Erfahrung mit über 1\'000 vermittelten Anlagen sehen wir immer wieder die gleichen Fehler:',
        ],
        bullets: [
          'Fehler 1 — Nur einen Installateur anfragen: Der häufigste und teuerste Fehler. Ohne Vergleich wissen Sie nie, ob der Preis fair ist. Die Differenz zwischen verschiedenen Offerten beträgt oft CHF 2\'000–4\'000 für dieselbe Anlage.',
          'Fehler 2 — Den billigsten wählen: Billig ist nicht immer gut. Minderwertige Module, ungenaue Dimensionierung oder schlechte Montagearbeit kosten langfristig mehr als ein paar hundert Franken gespartes Geld. Qualität hat ihren Preis.',
          'Fehler 3 — Keine Referenzen prüfen: Viele Hausbesitzer unterschreiben eine Offerte, ohne je nach Referenzen gefragt zu haben. Ein Anruf bei einem früheren Kunden des Installateurs kann sehr aufschlussreich sein.',
          'Fehler 4 — Keine schriftliche Offerte verlangen: Mündliche Zusagen zählen nicht. Alles — Preis, Komponenten, Garantien, Fristen — muss schriftlich in der Offerte stehen.',
          'Fehler 5 — Die Förderbeantragung dem Installateur überlassen ohne nachzufragen: Die meisten Installateure übernehmen die Anmeldung bei Pronovo für die EIV. Fragen Sie aber explizit nach: Ist das im Preis inbegriffen? Bis wann wird der Antrag gestellt?',
          'Fehler 6 — Anlage zu klein dimensionieren: Viele Hausbesitzer kaufen die kleinste Anlage, die gerade so reicht. Wenn später ein E-Auto oder eine Wärmepumpe dazukommt, reicht die Kapazität nicht mehr. Besser etwas grösser planen.',
          'Fehler 7 — Den Installateur nicht nach dem After-Sales-Service fragen: Was passiert nach der Installation? Wer wartet die Anlage? Gibt es einen Wartungsvertrag? Diese Fragen werden oft vergessen — und sind besonders wichtig bei einer Investition mit 25 Jahren Lebensdauer.',
        ],
        highlight: 'Wer mindestens 3 Offerten vergleicht, spart im Schnitt CHF 2\'000–4\'000 für dieselbe Anlage. PVPro.ch übernimmt diesen Vergleich kostenlos für Sie.',
      },
      {
        heading: 'Wie prüft PVPro.ch die Installateure im Netzwerk?',
        content: [
          'PVPro.ch ist kein offenes Verzeichnis, in das sich jeder eintragen kann. Jeder Installateur in unserem Netzwerk wird geprüft:',
          'Das Resultat: Wenn Sie über PVPro.ch eine Offerte erhalten, wissen Sie bereits, dass der Installateur die Mindeststandards erfüllt. Sie müssen die Zertifizierung nicht mehr selbst prüfen.',
        ],
        bullets: [
          'Zertifizierung: Nachweis einer anerkannten Qualifikation (Swissolar, electrosuisse oder gleichwertig)',
          'Versicherungsnachweis: Betriebshaftpflicht vorhanden',
          'Referenzprojekte: Nachgewiesene Erfahrung in der jeweiligen Region',
          'Regionale Präsenz: Nur Betriebe, die tatsächlich in Ihrer Region tätig sind — keine nationalen Call-Center, die Aufträge weiterverkaufen',
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
          'Schneller Service: Wenn nach der Installation etwas nicht stimmt, ist ein lokaler Betrieb in kurzer Zeit bei Ihnen. Das gibt Sicherheit über 25 Jahre Anlagenbetrieb.',
        ],
        highlight: 'Ein lokaler Installateur kennt die kantonalen Förderprogramme, den lokalen Netzbetreiber und ist bei Problemen schnell vor Ort — das ist in der Schweiz besonders wichtig.',
      },
    ],
    ctaHeading: 'Jetzt den besten Solarinstallateur in Ihrer Region finden',
    ctaText: 'PVPro.ch übernimmt die Suche für Sie. In 2 Minuten Formular ausfüllen — wir vermitteln Ihnen bis zu 3 geprüfte, zertifizierte Installateure aus Ihrer Region. Kostenlos, unverbindlich, ohne Werbeanrufe.',
    ctaButton: 'Kostenlose Offerte anfordern',
    formUrl: '/anfrage',
    relatedSlugs: ['lohnt-sich-solaranlage-schweiz-2026', 'richtigen-solarinstallateur-schweiz-waehlen', 'solaranlage-installateur-konkurs-garantie-schweiz', 'solaranlage-waermepumpe-kombinieren-schweiz'],
    relatedPageLinks: [
      { label: 'Offerten einholen & vergleichen', href: '/solaranlage-offerte-einholen' },
      { label: 'Solaranlage Kosten Schweiz', href: '/solaranlage-kosten' },
      { label: 'Förderungen & EIV', href: '/foerderungen' },
    ],
    faqs: [
      { question: 'Wie finde ich den besten Solarinstallateur in meiner Region in der Schweiz?', answer: 'Der einfachste Weg ist, über PVPro.ch bis zu 3 kostenlose Offerten von geprüften lokalen Installateuren einzuholen. So vergleichen Sie Preise und Qualität, ohne selbst recherchieren zu müssen. Alternativ können Sie das Swissolar-Verzeichnis nutzen oder Nachbarn um Empfehlungen bitten.' },
      { question: 'Was kostet es, über PVPro.ch Offerten einzuholen?', answer: 'Für Hausbesitzer ist der Service vollständig kostenlos und unverbindlich. PVPro.ch finanziert sich über eine Vermittlungsgebühr, die der beauftragte Installateur zahlt — nicht Sie.' },
      { question: 'Wie lange dauert es, bis ich Offerten erhalte?', answer: 'In der Regel erhalten Sie die ersten Offerten innerhalb von 24–48 Stunden nach Ihrer Anfrage.' },
      { question: 'Wie erkenne ich einen seriösen Solarinstallateur in der Schweiz?', answer: 'Achten Sie auf: anerkannte Zertifizierung (Swissolar-Solarprofi oder electrosuisse), lokale Referenzprojekte, vollständige schriftliche Offerte mit allen Komponenten und Garantien, und Versicherungsnachweis. PVPro.ch prüft all das vorab für Sie.' },
      { question: 'Ist ein nationaler Anbieter oder ein lokaler Betrieb besser?', answer: 'In den meisten Fällen ist ein zertifizierter lokaler Fachbetrieb die bessere Wahl — er kennt die kantonalen Förderprogramme, die lokalen Netzbetreiber und ist bei Problemen schnell vor Ort. Nationale Anbieter haben oft höhere Preise durch grösseren Overhead.' },
      { question: 'Kann ich den Installateur nach den Offerten noch wechseln?', answer: 'Ja, Sie sind zu nichts verpflichtet, solange Sie keine Auftragsbestätigung unterzeichnet haben. Sie können alle Offerten ablehnen oder nach weiteren Angeboten fragen.' },
      { question: 'Was passiert, wenn der Installateur nach der Installation nicht mehr reagiert?', answer: 'Das ist ein reales Risiko bei unseriösen Betrieben. Deshalb vermittelt PVPro.ch nur geprüfte Betriebe mit nachgewiesener lokaler Präsenz. Zudem haben Sie bei Streitigkeiten die Möglichkeit, sich an die Swissolar-Ombudsstelle zu wenden.' },
    ],
  },

  // ─── BESTEN SOLARINSTALLATEUR FINDEN (FR) ────────────────────────────────
  {
    slug: 'besten-solarinstallateur-schweiz-finden',
    locale: 'fr',
    title: 'Trouver le meilleur installateur solaire en Suisse en 2026 – Le guide complet',
    metaDescription: 'Comment trouver le meilleur installateur solaire dans votre région en Suisse? Pourquoi local est mieux, les critères essentiels et comment PVPro.ch simplifie la recherche.',
    image: '/images/installateur-solarmodul-dach-alpen.webp',
    date: '3 mai 2026',
    readMin: 10,
    tag: 'Guide',
    intro: "Si vous souhaitez acheter une installation solaire en Suisse, vous vous posez une question qui semble simple à première vue: quel est le meilleur installateur solaire dans ma région? La réponse est plus compliquée qu'on ne le pense — car il existe des centaines d'installateurs en Suisse, la qualité varie énormément, et les prestataires nationaux ne sont pas toujours meilleurs que les entreprises locales spécialisées. Nous vous aidons à trouver le bon installateur — fort de trois ans d'expérience et de plus de 1'000 installations intermédiées dans toute la Suisse.",
    sections: [
      {
        heading: "Pourquoi le choix de l'installateur est-il si important?",
        content: [
          "L'installation solaire elle-même ne représente qu'une partie de l'investissement. L'installateur détermine quatre facteurs décisifs:",
          "La qualité de l'installation: Une installation mal montée perd de la puissance au fil des années, présente des risques de pannes plus élevés et peut, dans le pire des cas, causer des dommages au toit. Un installateur local expérimenté connaît les types de toits de votre région et installe correctement.",
          "Le prix: Pour exactement la même installation — mêmes modules, même onduleur, même puissance — les prix peuvent varier de CHF 2'000–4'000 entre différents installateurs. Celui qui ne demande qu'un seul devis et signe paie souvent trop cher.",
          "Le service après installation: Qui s'occupe si l'installation présente une anomalie après trois ans? Un installateur local est chez vous en 30 minutes. Un prestataire national envoie peut-être un technicien venant d'une autre région.",
          "La demande de subventions: Un installateur local expérimenté connaît les programmes de subventions cantonaux et les particularités du gestionnaire de réseau local — et soumet tout correctement et dans les délais.",
        ],
        stats: [
          { value: '500+', label: "installateurs vérifiés dans le réseau PVPro" },
          { value: '48 heures', label: "jusqu'au premier devis" },
          { value: "CHF 2'000–4'000", label: "économie moyenne grâce à la comparaison" },
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
          'Références dans votre région: Entreprise locale ✅ Nombreux projets locaux — Prestataire national ⚠️ Variable',
          'Notoriété / Marketing: Entreprise locale ⚠️ Moins visible — Prestataire national ✅ Important',
        ],
        highlight: "Dans la plupart des cas, une entreprise locale certifiée est le meilleur choix — si on la trouve. C'est précisément le défi que PVPro.ch résout pour vous.",
      },
      {
        heading: 'Comment trouver le meilleur installateur solaire dans ma région?',
        content: [
          "Il existe plusieurs façons — nous expliquons honnêtement ce qui fonctionne et ce qui ne fonctionne pas:",
          "Voie 1 — Recherche Google: Vous cherchez «installateur solaire + votre canton» et obtenez une liste d'entreprises. Le problème: les premiers résultats sont souvent de grands prestataires nationaux avec un gros budget publicitaire — pas nécessairement les meilleurs de votre région. Les petites entreprises spécialisées excellentes apparaissent rarement en première page.",
          "Voie 2 — Recommandations de voisins ou de connaissances: C'est l'une des méthodes les plus fiables — si votre voisin a eu une bonne expérience, c'est un signal fort. L'inconvénient: vous n'avez peut-être qu'une ou deux recommandations et pas de comparaison de prix.",
          "Voie 3 — Répertoire Swissolar: Swissolar tient une liste d'installateurs qualifiés. C'est un bon point de départ pour la vérification des certifications, mais pas un outil de comparaison de prix.",
          "Voie 4 — PVPro.ch: Vous remplissez un formulaire en 2 minutes. Nous envoyons votre demande à jusqu'à 3 installateurs vérifiés et certifiés de votre région — qui vous envoient des offres sur mesure dans les 48 heures. Vous comparez et choisissez librement. Aucun effort, aucun appel publicitaire, aucune obligation.",
        ],
      },
      {
        heading: "À quoi dois-je faire attention dans le choix de l'installateur?",
        content: [
          "Tous les installateurs ne se valent pas. Voici les six critères à vérifier:",
          "1. Certification: Un installateur solaire sérieux en Suisse possède une certification reconnue — idéalement de Swissolar (label Solarprofi) ou d'electrosuisse. Ces certifications attestent que l'entreprise possède les compétences techniques nécessaires et se forme régulièrement.",
          "2. Expérience locale: L'installateur a-t-il des projets avérés dans votre canton ou votre région? Connaît-il les gestionnaires de réseau locaux, les programmes de subventions cantonaux et les types de toits courants dans votre région?",
          "3. Références: Demandez des projets réalisés dans votre commune. Un bon installateur peut vous indiquer des clients de référence que vous pouvez contacter.",
          "4. Que contient l'offre? Une offre professionnelle contient toujours: la taille de l'installation en kWc, le fabricant et le type de modules, la marque de l'onduleur, le système de montage, les coûts d'installation séparés, la production annuelle estimée, les subventions et les garanties. Si ces éléments manquent, c'est un signal d'alarme.",
          "5. Garanties: Quelles garanties l'installateur offre-t-il sur le travail de montage? Les entreprises sérieuses accordent au moins 5 ans de garantie sur l'installation elle-même — en plus des garanties fabricant sur les modules (25 ans) et les onduleurs (5–12 ans).",
          "6. Assurance: L'entreprise est-elle assurée pour les éventuels dommages pendant l'installation? Cela doit toujours être demandé.",
        ],
      },
      {
        heading: "Les 7 erreurs les plus fréquentes dans le choix de l'installateur",
        content: [
          "D'après notre expérience avec plus de 1'000 installations intermédiées, nous voyons toujours les mêmes erreurs:",
        ],
        bullets: [
          "Erreur 1 — Ne demander qu'un seul devis: L'erreur la plus fréquente et la plus coûteuse. Sans comparaison, vous ne saurez jamais si le prix est équitable. La différence entre différentes offres est souvent de CHF 2'000–4'000 pour la même installation.",
          "Erreur 2 — Choisir le moins cher: Bon marché n'est pas toujours bon. Des modules de qualité inférieure, un dimensionnement imprécis ou un mauvais travail de montage coûtent à long terme plus que quelques centaines de francs économisés. La qualité a son prix.",
          "Erreur 3 — Ne pas vérifier les références: De nombreux propriétaires signent une offre sans jamais avoir demandé de références. Un appel à un ancien client de l'installateur peut être très instructif.",
          "Erreur 4 — Ne pas exiger d'offre écrite: Les promesses verbales ne comptent pas. Tout — prix, composants, garanties, délais — doit figurer par écrit dans l'offre.",
          "Erreur 5 — Laisser la demande de subventions à l'installateur sans se renseigner: La plupart des installateurs se chargent de l'inscription auprès de Pronovo pour la RU. Mais demandez-le explicitement: est-ce inclus dans le prix? Pour quand la demande sera-t-elle déposée?",
          "Erreur 6 — Dimensionner l'installation trop petite: De nombreux propriétaires achètent la plus petite installation qui suffira tout juste. Si plus tard une voiture électrique ou une pompe à chaleur s'ajoute, la capacité sera insuffisante. Mieux vaut prévoir un peu plus grand.",
          "Erreur 7 — Ne pas demander à l'installateur son service après-vente: Que se passe-t-il après l'installation? Qui entretient l'installation? Y a-t-il un contrat de maintenance? Ces questions sont souvent oubliées — et sont particulièrement importantes pour un investissement d'une durée de vie de 25 ans.",
        ],
        highlight: "Celui qui compare au moins 3 offres économise en moyenne CHF 2'000–4'000 pour la même installation. PVPro.ch effectue cette comparaison gratuitement pour vous.",
      },
      {
        heading: 'Comment PVPro.ch vérifie-t-il les installateurs du réseau?',
        content: [
          "PVPro.ch n'est pas un répertoire ouvert dans lequel n'importe qui peut s'inscrire. Chaque installateur de notre réseau est vérifié:",
          "Le résultat: Lorsque vous recevez une offre via PVPro.ch, vous savez déjà que l'installateur respecte les standards minimaux. Vous n'avez plus besoin de vérifier la certification vous-même.",
        ],
        bullets: [
          'Certification: Preuve d\'une qualification reconnue (Swissolar, electrosuisse ou équivalent)',
          'Attestation d\'assurance: Responsabilité civile professionnelle disponible',
          'Projets de référence: Expérience avérée dans la région concernée',
          'Présence régionale: Uniquement des entreprises réellement actives dans votre région — pas de centres d\'appels nationaux qui revendent les commandes',
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
          "Service rapide: Si quelque chose ne va pas après l'installation, une entreprise locale est chez vous en peu de temps. Cela offre une sécurité sur 25 ans de fonctionnement de l'installation.",
        ],
        highlight: "Un installateur local connaît les programmes de subventions cantonaux, le gestionnaire de réseau local et est rapidement sur place en cas de problème — c'est particulièrement important en Suisse.",
      },
    ],
    ctaHeading: 'Trouvez maintenant le meilleur installateur solaire dans votre région',
    ctaText: "PVPro.ch prend en charge la recherche pour vous. Remplissez le formulaire en 2 minutes — nous vous mettons en contact avec jusqu'à 3 installateurs vérifiés et certifiés de votre région. Gratuit, sans engagement, sans appels publicitaires.",
    ctaButton: 'Demander un devis gratuit',
    formUrl: '/fr/demande',
    relatedSlugs: ['lohnt-sich-solaranlage-schweiz-2026', 'richtigen-solarinstallateur-schweiz-waehlen', 'solaranlage-installateur-konkurs-garantie-schweiz', 'solaranlage-waermepumpe-kombinieren-schweiz'],
    relatedPageLinks: [
      { label: 'Demander des offres et comparer', href: '/fr/demander-offre-panneau-solaire' },
      { label: 'Coût installation solaire Suisse', href: '/fr/cout-installation-solaire' },
      { label: 'Subventions & RU', href: '/fr/subventions-solaires' },
    ],
    faqs: [
      { question: 'Comment trouver le meilleur installateur solaire dans ma région en Suisse?', answer: "Le moyen le plus simple est d'obtenir jusqu'à 3 devis gratuits d'installateurs locaux vérifiés via PVPro.ch. Vous comparez ainsi les prix et la qualité sans avoir à faire des recherches vous-même. Vous pouvez également utiliser le répertoire Swissolar ou demander des recommandations à vos voisins." },
      { question: 'Combien coûte l\'obtention de devis via PVPro.ch?', answer: "Pour les propriétaires, le service est entièrement gratuit et sans engagement. PVPro.ch se finance par une commission de courtage payée par l'installateur mandaté — pas par vous." },
      { question: 'Combien de temps faut-il pour recevoir des devis?', answer: "En règle générale, vous recevez les premiers devis dans les 24–48 heures suivant votre demande." },
      { question: 'Comment reconnaître un installateur solaire sérieux en Suisse?', answer: "Recherchez: une certification reconnue (Swissolar-Solarprofi ou electrosuisse), des projets de référence locaux, une offre écrite complète avec tous les composants et garanties, et une attestation d'assurance. PVPro.ch vérifie tout cela au préalable pour vous." },
      { question: 'Un prestataire national ou une entreprise locale est-il meilleur?', answer: "Dans la plupart des cas, une entreprise locale certifiée est le meilleur choix — elle connaît les programmes de subventions cantonaux, les gestionnaires de réseau locaux et est rapidement sur place en cas de problème. Les prestataires nationaux ont souvent des prix plus élevés en raison de frais généraux importants." },
      { question: "Puis-je changer d'installateur après avoir reçu les devis?", answer: "Oui, vous n'êtes à rien obligé tant que vous n'avez pas signé une confirmation de commande. Vous pouvez refuser tous les devis ou demander d'autres offres." },
      { question: "Que se passe-t-il si l'installateur ne répond plus après l'installation?", answer: "C'est un risque réel avec les entreprises peu sérieuses. C'est pourquoi PVPro.ch ne met en relation qu'avec des entreprises vérifiées ayant une présence locale avérée. En cas de litige, vous avez également la possibilité de vous adresser à l'organe de médiation de Swissolar." },
    ],
  },

  // ─── BESTEN SOLARINSTALLATEUR FINDEN (EN) ────────────────────────────────
  {
    slug: 'besten-solarinstallateur-schweiz-finden',
    locale: 'en',
    title: 'How to Find the Best Solar Installer in Switzerland 2026 – The Complete Guide',
    metaDescription: 'How to find the best solar installer in your region in Switzerland? Why local is better, what to look for, and how PVPro.ch does the search for you.',
    image: '/images/installateur-solarmodul-dach-alpen.webp',
    date: '3 May 2026',
    readMin: 10,
    tag: 'Guide',
    intro: "If you want to buy a solar system in Switzerland, you face a question that seems simple at first: who is the best solar installer in my region? The answer is more complicated than expected — there are hundreds of installers in Switzerland, quality varies enormously, and national providers are not always better than local specialists. We help you find the right installer — backed by three years of experience and over 1'000 brokered installations across Switzerland.",
    sections: [
      {
        heading: 'Why is the choice of installer so important?',
        content: [
          'The solar system itself represents only part of the investment. The installer determines four decisive factors:',
          'The quality of installation: A poorly mounted system loses performance over the years, has higher failure risks, and can in the worst case cause roof damage. An experienced local installer knows the roof types in your region and installs correctly.',
          "The price: For exactly the same system — same modules, same inverter, same output — prices between different installers can vary by CHF 2'000–4'000. Those who ask only one installer and sign often pay too much.",
          'After-sales service: Who takes care of things if the system shows a fault after three years? A local installer is with you in 30 minutes. A national provider might send a technician from another region.',
          'Subsidy applications: An experienced local installer knows the cantonal subsidy programmes and the specifics of the local grid operator — and submits everything correctly and on time.',
        ],
        stats: [
          { value: '500+', label: 'verified installers in the PVPro network' },
          { value: '48 hours', label: 'until the first quote' },
          { value: "CHF 2'000–4'000", label: 'average savings through comparison' },
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
          'References in your region: Local specialist ✅ Many local projects — National provider ⚠️ Variable',
          'Brand awareness / Marketing: Local specialist ⚠️ Less visible — National provider ✅ Large',
        ],
        highlight: 'A certified local specialist is in most cases the better choice — if you can find one. That is precisely the challenge PVPro.ch solves for you.',
      },
      {
        heading: 'How do I find the best solar installer in my region?',
        content: [
          "There are several ways — we explain honestly what works and what doesn't:",
          'Way 1 — Google search: You search "solar installer + your canton" and get a list of companies. The problem: the top results are often large national providers with big advertising budgets — not necessarily the best in your region. Small, excellent specialists rarely appear on the first page.',
          'Way 2 — Recommendations from neighbours or acquaintances: This is one of the most reliable methods — if your neighbour has had a good experience, that is a strong signal. The downside: you may have only one or two recommendations and no price comparison.',
          'Way 3 — Swissolar directory: Swissolar maintains a list of qualified installers. This is a good starting point for checking certifications, but it is not a price comparison tool.',
          'Way 4 — PVPro.ch: You fill out a form once in 2 minutes. We send your enquiry to up to 3 verified, certified installers from your region — who send you tailored quotes within 48 hours. You compare and choose freely. No effort, no advertising calls, no obligation.',
        ],
      },
      {
        heading: 'What do I need to look for when choosing an installer?',
        content: [
          'Not every installer is equally good. Here are the six criteria you should check:',
          '1. Certification: A reputable solar installer in Switzerland has a recognised certification — ideally from Swissolar (Solarprofi label) or electrosuisse. These certifications prove that the company has the necessary technical knowledge and undergoes regular training.',
          '2. Local experience: Does the installer have proven projects in your canton or region? Do they know the local grid operators, the cantonal subsidy programmes, and the common roof types in your area?',
          '3. References: Ask for completed projects in your municipality. A good installer can provide you with reference customers you can contact.',
          '4. What is in the quote? A professional quote always contains: system size in kWp, module manufacturer and type, inverter brand, mounting system, installation costs separately, estimated annual output, subsidies, and warranties. If these points are missing, that is a warning sign.',
          '5. Warranties: What warranties does the installer offer on the mounting work? Reputable companies give at least 5 years of warranty on the installation itself — in addition to the manufacturer warranties on modules (25 years) and inverters (5–12 years).',
          '6. Insurance: Is the company insured for any damage during installation? This should always be asked.',
        ],
      },
      {
        heading: 'The 7 most common mistakes when choosing an installer',
        content: [
          "From our experience with over 1'000 brokered installations, we see the same mistakes again and again:",
        ],
        bullets: [
          "Mistake 1 — Only asking one installer: The most frequent and costly mistake. Without comparison, you will never know if the price is fair. The difference between different quotes is often CHF 2'000–4'000 for the same system.",
          'Mistake 2 — Choosing the cheapest: Cheap is not always good. Inferior modules, inaccurate sizing, or poor mounting work cost more in the long run than a few hundred francs saved. Quality has its price.',
          'Mistake 3 — Not checking references: Many homeowners sign a quote without ever having asked for references. A call to a former customer of the installer can be very revealing.',
          'Mistake 4 — Not requesting a written quote: Verbal promises do not count. Everything — price, components, warranties, deadlines — must be in writing in the quote.',
          'Mistake 5 — Leaving the subsidy application to the installer without asking: Most installers handle the registration with Pronovo for the OTS. But ask explicitly: is that included in the price? By when will the application be submitted?',
          'Mistake 6 — Sizing the system too small: Many homeowners buy the smallest system that will just be sufficient. If an electric car or a heat pump is added later, the capacity will no longer be enough. Better to plan a little larger.',
          'Mistake 7 — Not asking the installer about after-sales service: What happens after installation? Who maintains the system? Is there a maintenance contract? These questions are often forgotten — and are particularly important for an investment with a 25-year lifespan.',
        ],
        highlight: "Those who compare at least 3 quotes save on average CHF 2'000–4'000 for the same system. PVPro.ch does this comparison free of charge for you.",
      },
      {
        heading: 'How does PVPro.ch verify the installers in the network?',
        content: [
          'PVPro.ch is not an open directory where anyone can register. Every installer in our network is verified:',
          'The result: When you receive a quote via PVPro.ch, you already know that the installer meets the minimum standards. You no longer need to check the certification yourself.',
        ],
        bullets: [
          'Certification: Proof of a recognised qualification (Swissolar, electrosuisse or equivalent)',
          'Insurance proof: Public liability insurance in place',
          'Reference projects: Proven experience in the respective region',
          'Regional presence: Only companies that are actually active in your region — no national call centres that resell orders',
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
          'Fast service: If something is not right after installation, a local company is with you in a short time. This provides security over 25 years of system operation.',
        ],
        highlight: 'A local installer knows the cantonal subsidy programmes, the local grid operator, and is quickly on site in case of problems — this is particularly important in Switzerland.',
      },
    ],
    ctaHeading: 'Find the best solar installer in your region now',
    ctaText: 'PVPro.ch takes care of the search for you. Fill in the form in 2 minutes — we connect you with up to 3 verified, certified installers from your region. Free, no obligation, no advertising calls.',
    ctaButton: 'Request a free quote',
    formUrl: '/en/request',
    relatedSlugs: ['lohnt-sich-solaranlage-schweiz-2026', 'richtigen-solarinstallateur-schweiz-waehlen', 'solaranlage-installateur-konkurs-garantie-schweiz', 'solaranlage-waermepumpe-kombinieren-schweiz'],
    relatedPageLinks: [
      { label: 'Get & compare quotes', href: '/en/get-solar-panel-quotes' },
      { label: 'Solar system costs Switzerland', href: '/en/solar-panel-costs' },
      { label: 'Subsidies & OTS', href: '/en/solar-subsidies' },
    ],
    faqs: [
      { question: 'How do I find the best solar installer in my region in Switzerland?', answer: "The easiest way is to obtain up to 3 free quotes from verified local installers via PVPro.ch. This lets you compare prices and quality without having to do the research yourself. Alternatively, you can use the Swissolar directory or ask neighbours for recommendations." },
      { question: 'How much does it cost to get quotes via PVPro.ch?', answer: "For homeowners, the service is completely free and non-binding. PVPro.ch finances itself through a brokerage fee paid by the contracted installer — not by you." },
      { question: 'How long does it take to receive quotes?', answer: 'You will generally receive the first quotes within 24–48 hours of your enquiry.' },
      { question: 'How do I recognise a reputable solar installer in Switzerland?', answer: 'Look for: recognised certification (Swissolar Solarprofi or electrosuisse), local reference projects, complete written quote with all components and warranties, and proof of insurance. PVPro.ch checks all of this in advance for you.' },
      { question: 'Is a national provider or a local company better?', answer: 'In most cases, a certified local specialist is the better choice — they know the cantonal subsidy programmes, the local grid operators, and are quickly on site in case of problems. National providers often have higher prices due to greater overhead.' },
      { question: 'Can I still change the installer after receiving the quotes?', answer: 'Yes, you are not obligated to anything as long as you have not signed an order confirmation. You can reject all quotes or ask for additional offers.' },
      { question: 'What happens if the installer no longer responds after installation?', answer: 'This is a real risk with disreputable companies. That is why PVPro.ch only brokers verified companies with proven local presence. In case of disputes, you also have the option of contacting the Swissolar ombudsman.' },
    ],
  },

  // ─── BESTEN SOLARINSTALLATEUR FINDEN (IT) ────────────────────────────────
  {
    slug: 'besten-solarinstallateur-schweiz-finden',
    locale: 'it',
    title: 'Come trovare il miglior installatore solare in Svizzera nel 2026 – La guida completa',
    metaDescription: 'Come trovare il miglior installatore solare nella tua regione in Svizzera? Perché il locale è meglio, i criteri essenziali e come PVPro.ch semplifica la ricerca.',
    image: '/images/installateur-solarmodul-dach-alpen.webp',
    date: '3 maggio 2026',
    readMin: 10,
    tag: 'Guida',
    intro: "Chi vuole acquistare un impianto solare in Svizzera si trova di fronte a una domanda che a prima vista sembra semplice: chi è il miglior installatore solare nella mia regione? La risposta è più complicata di quanto si pensi — in Svizzera esistono centinaia di installatori, la qualità varia enormemente e i fornitori nazionali non sono sempre migliori delle aziende locali specializzate. Vi aiutiamo a trovare l'installatore giusto — forti di tre anni di esperienza e di oltre 1'000 impianti installati in tutta la Svizzera.",
    sections: [
      {
        heading: "Perché la scelta dell'installatore è così importante?",
        content: [
          "L'impianto solare stesso rappresenta solo una parte dell'investimento. L'installatore determina quattro fattori decisivi:",
          "La qualità dell'installazione: Un impianto montato male perde prestazioni nel corso degli anni, presenta rischi di guasti più elevati e può, nel peggiore dei casi, causare danni al tetto. Un installatore locale esperto conosce i tipi di tetti della vostra regione e installa correttamente.",
          "Il prezzo: Per esattamente lo stesso impianto — stessi moduli, stesso inverter, stessa potenza — i prezzi tra i diversi installatori possono variare di CHF 2'000–4'000. Chi chiede un solo preventivo e firma spesso paga troppo.",
          "Il servizio post-installazione: Chi si occupa se l'impianto mostra un guasto dopo tre anni? Un installatore locale è da voi in 30 minuti. Un fornitore nazionale manda forse un tecnico proveniente da un'altra regione.",
          "La richiesta di sovvenzioni: Un installatore locale esperto conosce i programmi di sovvenzione cantonali e le specificità del gestore di rete locale — e presenta tutto correttamente e nei tempi previsti.",
        ],
        stats: [
          { value: '500+', label: 'installatori verificati nella rete PVPro' },
          { value: '48 ore', label: 'fino al primo preventivo' },
          { value: "CHF 2'000–4'000", label: 'risparmio medio grazie al confronto' },
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
          'Referenze nella vostra regione: Azienda locale ✅ Numerosi progetti locali — Fornitore nazionale ⚠️ Variabile',
          'Notorietà / Marketing: Azienda locale ⚠️ Meno visibile — Fornitore nazionale ✅ Grande',
        ],
        highlight: "Un'azienda locale certificata è nella maggior parte dei casi la scelta migliore — se la si trova. È precisamente questa la sfida che PVPro.ch risolve per voi.",
      },
      {
        heading: 'Come trovo il miglior installatore solare nella mia regione?',
        content: [
          "Esistono diversi modi — spieghiamo onestamente cosa funziona e cosa no:",
          "Via 1 — Ricerca Google: Cercate «installatore solare + il vostro cantone» e ottenete un elenco di aziende. Il problema: i primi risultati sono spesso grandi fornitori nazionali con un grande budget pubblicitario — non necessariamente i migliori della vostra regione. Le piccole aziende specializzate eccellenti appaiono raramente alla prima pagina.",
          "Via 2 — Raccomandazioni di vicini o conoscenti: È uno dei metodi più affidabili — se il vostro vicino ha avuto una buona esperienza, è un segnale forte. Lo svantaggio: forse avete solo una o due raccomandazioni e nessun confronto di prezzi.",
          "Via 3 — Elenco Swissolar: Swissolar mantiene un elenco di installatori qualificati. È un buon punto di partenza per la verifica delle certificazioni, ma non è uno strumento di confronto prezzi.",
          "Via 4 — PVPro.ch: Compilate un modulo una volta in 2 minuti. Inviamo la vostra richiesta a fino a 3 installatori verificati e certificati della vostra regione — che vi inviano preventivi su misura entro 48 ore. Confrontate e scegliete liberamente. Nessuno sforzo, nessuna chiamata pubblicitaria, nessun obbligo.",
        ],
      },
      {
        heading: "A cosa devo fare attenzione nella scelta dell'installatore?",
        content: [
          "Non tutti gli installatori sono ugualmente bravi. Ecco i sei criteri da verificare:",
          "1. Certificazione: Un installatore solare serio in Svizzera ha una certificazione riconosciuta — idealmente di Swissolar (label Solarprofi) o di electrosuisse. Queste certificazioni attestano che l'azienda possiede le competenze tecniche necessarie e si aggiorna regolarmente.",
          "2. Esperienza locale: L'installatore ha progetti comprovati nel vostro cantone o nella vostra regione? Conosce i gestori di rete locali, i programmi di sovvenzione cantonali e i tipi di tetti comuni nella vostra zona?",
          "3. Referenze: Chiedete progetti completati nel vostro comune. Un buon installatore può fornirvi clienti di riferimento che potete contattare.",
          "4. Cosa contiene il preventivo? Un preventivo professionale contiene sempre: la dimensione dell'impianto in kWp, il produttore e il tipo di moduli, la marca dell'inverter, il sistema di montaggio, i costi di installazione separati, la produzione annua stimata, le sovvenzioni e le garanzie. Se questi punti mancano, è un segnale d'allarme.",
          "5. Garanzie: Quali garanzie offre l'installatore sul lavoro di montaggio? Le aziende serie concedono almeno 5 anni di garanzia sull'installazione stessa — in aggiunta alle garanzie del produttore sui moduli (25 anni) e sugli inverter (5–12 anni).",
          "6. Assicurazione: L'azienda è assicurata per eventuali danni durante l'installazione? Va sempre chiesto.",
        ],
      },
      {
        heading: "I 7 errori più frequenti nella scelta dell'installatore",
        content: [
          "Dalla nostra esperienza con oltre 1'000 impianti installati, vediamo sempre gli stessi errori:",
        ],
        bullets: [
          "Errore 1 — Chiedere un solo preventivo: L'errore più frequente e più costoso. Senza confronto, non saprete mai se il prezzo è equo. La differenza tra i vari preventivi è spesso di CHF 2'000–4'000 per lo stesso impianto.",
          "Errore 2 — Scegliere il più economico: Economico non è sempre buono. Moduli di qualità inferiore, dimensionamento impreciso o un cattivo lavoro di montaggio costano a lungo termine più di qualche centinaio di franchi risparmiati. La qualità ha il suo prezzo.",
          "Errore 3 — Non verificare le referenze: Molti proprietari firmano un preventivo senza aver mai chiesto referenze. Una telefonata a un ex cliente dell'installatore può essere molto istruttiva.",
          "Errore 4 — Non richiedere un preventivo scritto: Le promesse verbali non contano. Tutto — prezzo, componenti, garanzie, scadenze — deve essere scritto nel preventivo.",
          "Errore 5 — Lasciare la richiesta di sovvenzione all'installatore senza informarsi: La maggior parte degli installatori si occupa dell'iscrizione presso Pronovo per la RU. Ma chiedetelo esplicitamente: è incluso nel prezzo? Entro quando verrà presentata la domanda?",
          "Errore 6 — Dimensionare l'impianto troppo piccolo: Molti proprietari acquistano il più piccolo impianto che basterà appena. Se in seguito si aggiunge un'auto elettrica o una pompa di calore, la capacità non sarà più sufficiente. Meglio pianificare un po' più grande.",
          "Errore 7 — Non chiedere all'installatore del servizio post-vendita: Cosa succede dopo l'installazione? Chi effettua la manutenzione dell'impianto? C'è un contratto di manutenzione? Queste domande vengono spesso dimenticate — e sono particolarmente importanti per un investimento con una durata di vita di 25 anni.",
        ],
        highlight: "Chi confronta almeno 3 preventivi risparmia in media CHF 2'000–4'000 per lo stesso impianto. PVPro.ch effettua questo confronto gratuitamente per voi.",
      },
      {
        heading: 'Come verifica PVPro.ch gli installatori della rete?',
        content: [
          "PVPro.ch non è un elenco aperto in cui chiunque può iscriversi. Ogni installatore della nostra rete viene verificato:",
          "Il risultato: Quando ricevete un preventivo tramite PVPro.ch, sapete già che l'installatore soddisfa gli standard minimi. Non dovete più verificare voi stessi la certificazione.",
        ],
        bullets: [
          'Certificazione: Prova di una qualifica riconosciuta (Swissolar, electrosuisse o equivalente)',
          'Attestazione assicurativa: Responsabilità civile professionale disponibile',
          'Progetti di riferimento: Esperienza comprovata nella rispettiva regione',
          'Presenza regionale: Solo aziende realmente attive nella vostra regione — nessun call center nazionale che rivende gli ordini',
          'Controllo qualità: Verifica continua sulla base del feedback dei clienti',
        ],
      },
      {
        heading: 'Perché un installatore locale è particolarmente importante in Svizzera?',
        content: [
          "La Svizzera è un paese federale — e questo vale anche per gli impianti solari. Ciò che è valido nel cantone di Zurigo non lo è necessariamente nel cantone di Berna:",
          "Programmi di sovvenzione cantonali: Molti cantoni dispongono di propri programmi di sovvenzione in aggiunta agli aiuti federali. Un installatore locale conosce questi programmi e li richiede automaticamente per voi. Un fornitore nazionale senza conoscenze locali spesso li dimentica.",
          "Gestori di rete locali: Ogni comune ha il proprio gestore di rete con i propri processi per la registrazione dell'impianto e la retribuzione per l'energia immessa in rete. Un installatore locale conosce la procedura presso il vostro gestore di rete — ed evita i ritardi.",
          "Procedure di autorizzazione cantonali: Anche se la maggior parte degli impianti è esente da autorizzazione, esistono particolarità cantonali e comunali. Un installatore locale sa cosa è valido nel vostro comune.",
          "Servizio rapido: Se dopo l'installazione qualcosa non va, un'azienda locale è da voi in poco tempo. Questo garantisce sicurezza per 25 anni di funzionamento dell'impianto.",
        ],
        highlight: "Un installatore locale conosce i programmi di sovvenzione cantonali, il gestore di rete locale ed è rapidamente sul posto in caso di problemi — questo è particolarmente importante in Svizzera.",
      },
    ],
    ctaHeading: 'Trovate ora il miglior installatore solare nella vostra regione',
    ctaText: "PVPro.ch si occupa della ricerca per voi. Compilate il modulo in 2 minuti — vi mettiamo in contatto con fino a 3 installatori verificati e certificati della vostra regione. Gratuito, senza impegno, senza chiamate pubblicitarie.",
    ctaButton: 'Richiedere un preventivo gratuito',
    formUrl: '/it/richiesta',
    relatedSlugs: ['lohnt-sich-solaranlage-schweiz-2026', 'richtigen-solarinstallateur-schweiz-waehlen', 'solaranlage-installateur-konkurs-garantie-schweiz', 'solaranlage-waermepumpe-kombinieren-schweiz'],
    relatedPageLinks: [
      { label: 'Richiedere preventivi e confrontare', href: '/it/richiedere-preventivo-solare' },
      { label: 'Costi impianto solare Svizzera', href: '/it/costi-impianto-solare' },
      { label: 'Sovvenzioni & RU', href: '/it/incentivi-solari' },
    ],
    faqs: [
      { question: 'Come trovo il miglior installatore solare nella mia regione in Svizzera?', answer: "Il modo più semplice è ottenere fino a 3 preventivi gratuiti da installatori locali verificati tramite PVPro.ch. In questo modo confrontate prezzi e qualità senza dover fare ricerche da soli. In alternativa, potete utilizzare l'elenco Swissolar o chiedere raccomandazioni ai vostri vicini." },
      { question: 'Quanto costa ottenere preventivi tramite PVPro.ch?', answer: "Per i proprietari di case, il servizio è completamente gratuito e senza impegno. PVPro.ch si finanzia tramite una commissione di intermediazione pagata dall'installatore incaricato — non da voi." },
      { question: 'Quanto tempo ci vuole per ricevere i preventivi?', answer: "Di norma ricevete i primi preventivi entro 24–48 ore dalla vostra richiesta." },
      { question: 'Come riconosco un installatore solare serio in Svizzera?', answer: "Cercate: certificazione riconosciuta (Swissolar-Solarprofi o electrosuisse), progetti di riferimento locali, preventivo scritto completo con tutti i componenti e le garanzie, e attestazione assicurativa. PVPro.ch verifica tutto questo in anticipo per voi." },
      { question: "È meglio un fornitore nazionale o un'azienda locale?", answer: "Nella maggior parte dei casi, un'azienda locale certificata è la scelta migliore — conosce i programmi di sovvenzione cantonali, i gestori di rete locali ed è rapidamente sul posto in caso di problemi. I fornitori nazionali hanno spesso prezzi più elevati a causa di maggiori costi generali." },
      { question: "Posso ancora cambiare installatore dopo aver ricevuto i preventivi?", answer: "Sì, non siete obbligati a nulla finché non avete firmato una conferma d'ordine. Potete rifiutare tutti i preventivi o chiedere ulteriori offerte." },
      { question: "Cosa succede se l'installatore non risponde più dopo l'installazione?", answer: "Questo è un rischio reale con le aziende poco serie. Per questo motivo PVPro.ch mette in contatto solo con aziende verificate con una presenza locale comprovata. In caso di controversie, avete anche la possibilità di rivolgervi all'organo di mediazione di Swissolar." },
    ],
  },

  // ─── BATTERIESPEICHER BRANDGEFAHR (DE) ─────────────────────────────────────
  {
    slug: 'batteriespeicher-brandgefahr-sicherheit-schweiz',
    locale: 'de',
    title: 'Ist ein Batteriespeicher gefährlich? Was Sie wirklich wissen müssen',
    metaDescription: 'Ist ein Batteriespeicher für die Solaranlage wirklich gefährlich? Brandrisiko nur 0.005% laut Studie. Was Sie über LFP-Batterien, Sicherheitsstandards und Aufstellort wissen müssen.',
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
          "Brandrisiko bei Heimspeichern: 0.005% pro Jahr. Das bedeutet: Von 100'000 installierten Batteriespeichern brennt statistisch gesehen einer pro Jahr.",
          'Zum Vergleich: Allgemeines Hausbrand-Risiko ca. 0.25% — Geschirrspüler ca. 0.03% — Waschmaschine ca. 0.025% — Batteriespeicher (LFP) ca. 0.005% — Kerzen ca. 0.5%.',
          'Ein moderner LFP-Batteriespeicher ist damit 50-mal sicherer als das allgemeine Hausbrand-Risiko — und sicherer als Ihre Waschmaschine.',
        ],
        stats: [
          { value: '0.005%', label: 'Brandrisiko laut RWTH-Studie 2024' },
          { value: '50x sicherer', label: 'als das allgemeine Hausbrand-Risiko' },
          { value: '80%', label: 'der Speicher in CH sind LFP — die sicherste Technologie' },
        ],
      },
      {
        heading: 'Warum haben manche Batterien einen schlechten Ruf?',
        content: [
          'Die Berichte über brennende Batterien betreffen fast ausschliesslich NMC-Batterien (Nickel-Mangan-Kobalt) — eine ältere Technologie, die in frühen Heimspeichern und vor allem in Elektroautos und Smartphones eingesetzt wird.',
          'NMC-Batterien sind chemisch instabiler bei Überhitzung, können bei Überladung oder mechanischen Schäden in Brand geraten und setzen bei thermischem Durchgehen Sauerstoff frei — was das Feuer anfacht. Sie werden in Heimspeichern kaum noch eingesetzt.',
          'LFP-Batterien (Lithium-Eisenphosphat) sind chemisch extrem stabil, selbst bei Überhitzung. Kein thermisches Durchgehen unter normalen Bedingungen, kein Sauerstoff bei Schäden — kein Selbstentzündungsrisiko. Sie sind heute Standard in der Schweiz: über 80% aller neu installierten Speicher verwenden LFP.',
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
          "Lebensdauer: LFP-Batterien halten 4'000–8'000 Ladezyklen — das entspricht 15–25 Jahren bei täglichem Laden. Damit übertreffen sie NMC-Batterien deutlich.",
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
          'UN 38.3 — Transportprüfungen für Lithium-Batterien.',
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
          'Diese Frage stellen viele Schweizer Hausbesitzer, da chinesische Hersteller wie BYD und Huawei den Schweizer Markt dominieren und ca. zwei Drittel aller installierten Speicher ausmachen.',
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
          '✅ Mindestens 10 Jahre Garantie — auf Kapazität und Funktion',
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
      { question: 'Ist ein Batteriespeicher für die Solaranlage gefährlich?', answer: 'Moderne LFP-Batteriespeicher sind sehr sicher. Laut einer RWTH-Studie von 2024 liegt das Brandrisiko bei nur 0.005% pro Jahr — 50-mal niedriger als das allgemeine Hausbrand-Risiko. Die LFP-Technologie, die heute Standard in der Schweiz ist, ist thermisch extrem stabil und praktisch nicht entflammbar.' },
      { question: 'Kann ein Batteriespeicher explodieren?', answer: 'Explosionen bei modernen LFP-Heimspeichern sind praktisch ausgeschlossen. Die Chemie der LFP-Zellen ist so stabil, dass selbst bei mechanischen Schäden keine Kettenreaktion ausgelöst wird. Ältere NMC-Technologien haben ein höheres Risiko — werden aber in neuen Heimspeichern kaum noch eingesetzt.' },
      { question: 'Wo darf ich einen Batteriespeicher aufstellen?', answer: 'LFP-Batteriespeicher dürfen in allen Räumen aufgestellt werden — Keller, Hauswirtschaftsraum, Garage. Wichtig: trockener Ort, 5–35°C Umgebungstemperatur, ausreichende Belüftung und Mindestabstände zu brennbaren Materialien gemäss Herstellerangaben.' },
      { question: 'Sind chinesische Batteriespeicher sicher?', answer: 'Die führenden chinesischen Hersteller wie BYD und Huawei produzieren qualitativ hochwertige LFP-Speicher, die alle internationalen Sicherheitsstandards erfüllen. Zu vermeiden sind No-Name-Produkte aus dem Niedrigpreissegment ohne anerkannte Zertifizierungen.' },
      { question: 'Wie lange hält ein Batteriespeicher?', answer: "Moderne LFP-Batteriespeicher halten 4'000–8'000 Ladezyklen, was bei täglichem Laden 15–25 Jahren entspricht. Die meisten Hersteller geben 10 Jahre Garantie auf mindestens 80% der ursprünglichen Kapazität." },
      { question: 'Muss ich meinen Batteriespeicher bei der Versicherung melden?', answer: 'Ja, empfohlen. In den meisten Schweizer Kantonen ist der Speicher als Gebäudebestandteil automatisch durch die Gebäudeversicherung gedeckt. Melden Sie die Installation trotzdem, um sicherzugehen, dass Schäden abgedeckt sind.' },
      { question: 'Welche Zertifizierungen sollte ein sicherer Batteriespeicher haben?', answer: 'Mindestens IEC 62619 (internationale Norm für stationäre Lithium-Batterien), CE-Kennzeichnung und UN 38.3. Für den Schweizer Markt ist auch die VDE-AR-E 2510-50 ein anerkanntes Qualitätsmerkmal.' },
    ],
    ctaHeading: 'Sicheren Batteriespeicher in Ihrer Region finden',
    ctaText: 'PVPro.ch vermittelt nur zertifizierte Installateure, die ausschliesslich geprüfte LFP-Speicher mit anerkannten Sicherheitszertifizierungen verbauen. Kostenlos bis zu 3 Offerten einholen — und sicher investieren.',
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
    metaDescription: "Un système de stockage de batteries pour installation solaire est-il vraiment dangereux? Risque d'incendie de seulement 0.005% selon une étude. Ce qu'il faut savoir sur les batteries LFP, les normes de sécurité et le lieu d'installation.",
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
          "Risque d'incendie pour les systèmes de stockage domestiques: 0.005% par an. Cela signifie que sur 100'000 systèmes installés, statistiquement un seul prend feu par an.",
          "Pour comparaison: Risque général d'incendie d'un logement ca. 0.25% — Lave-vaisselle ca. 0.03% — Machine à laver ca. 0.025% — Système de stockage (LFP) ca. 0.005% — Bougies ca. 0.5%.",
          "Un système de stockage LFP moderne est ainsi 50 fois plus sûr que le risque général d'incendie d'un logement — et plus sûr que votre machine à laver.",
        ],
        stats: [
          { value: '0.005%', label: "Risque d'incendie selon l'étude RWTH 2024" },
          { value: '50x plus sûr', label: "que le risque général d'incendie d'un logement" },
          { value: '80%', label: 'des systèmes en CH sont LFP — la technologie la plus sûre' },
        ],
      },
      {
        heading: 'Pourquoi certaines batteries ont-elles mauvaise réputation?',
        content: [
          "Les rapports sur des batteries en feu concernent presque exclusivement les batteries NMC (nickel-manganèse-cobalt) — une technologie plus ancienne utilisée dans les premiers systèmes domestiques et surtout dans les voitures électriques et les smartphones.",
          "Les batteries NMC sont chimiquement moins stables en cas de surchauffe, peuvent prendre feu en cas de surcharge ou de dommages mécaniques et libèrent de l'oxygène lors d'un emballement thermique — ce qui attise l'incendie. Elles ne sont pratiquement plus utilisées dans les nouveaux systèmes domestiques.",
          "Les batteries LFP (lithium-fer-phosphate) sont chimiquement extrêmement stables, même en cas de surchauffe. Elles ne présentent pas d'emballement thermique et ne libèrent pas d'oxygène en cas de dommages. Elles sont aujourd'hui la norme en Suisse: plus de 80% de tous les systèmes nouvellement installés utilisent la technologie LFP.",
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
          "Durée de vie: Les batteries LFP durent 4'000–8'000 cycles de charge — correspondant à 15–25 ans avec une charge quotidienne. Elles surpassent ainsi nettement les batteries NMC.",
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
          "UN 38.3 — Tests de transport pour les batteries lithium.",
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
          "Beaucoup de propriétaires suisses posent cette question, car des fabricants chinois comme BYD et Huawei dominent le marché suisse et représentent environ deux tiers de tous les systèmes installés.",
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
          "✅ Au moins 10 ans de garantie — sur la capacité et le fonctionnement",
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
      { question: "Un système de stockage de batteries pour installation solaire est-il dangereux?", answer: "Les systèmes de stockage LFP modernes sont très sûrs. Selon une étude RWTH de 2024, le risque d'incendie n'est que de 0.005% par an — 50 fois inférieur au risque général d'incendie d'un logement. La technologie LFP est thermiquement extrêmement stable et pratiquement ininflammable." },
      { question: "Un système de stockage de batteries peut-il exploser?", answer: "Les explosions de systèmes domestiques LFP modernes sont pratiquement exclues. La chimie des cellules LFP est si stable que même les dommages mécaniques ne déclenchent pas de réaction en chaîne. Les technologies NMC plus anciennes présentent un risque plus élevé — mais ne sont pratiquement plus utilisées dans les nouveaux systèmes domestiques." },
      { question: "Où puis-je installer un système de stockage de batteries?", answer: "Les systèmes de stockage LFP peuvent être installés dans tous les locaux — cave, buanderie, garage. Important: endroit sec, température ambiante de 5–35°C, ventilation suffisante et distances minimales par rapport aux matières inflammables selon les instructions du fabricant." },
      { question: "Les systèmes de stockage de batteries chinois sont-ils sûrs?", answer: "Les principaux fabricants chinois comme BYD et Huawei produisent des systèmes de stockage LFP de haute qualité qui respectent toutes les normes de sécurité internationales. Il faut éviter les produits sans marque du segment bas de gamme sans certifications reconnues." },
      { question: "Combien de temps dure un système de stockage de batteries?", answer: "Les systèmes de stockage LFP modernes durent 4'000–8'000 cycles de charge, ce qui correspond à 15–25 ans avec une charge quotidienne. La plupart des fabricants offrent 10 ans de garantie sur au moins 80% de la capacité d'origine." },
      { question: "Dois-je déclarer mon système de stockage à mon assurance?", answer: "Oui, c'est recommandé. Dans la plupart des cantons suisses, le système de stockage est automatiquement couvert par l'assurance bâtiment. Déclarez néanmoins l'installation pour vous assurer que les dommages sont couverts." },
      { question: "Quelles certifications un système de stockage sûr doit-il avoir?", answer: "Au minimum IEC 62619 (norme internationale pour les batteries lithium stationnaires), le marquage CE et UN 38.3. Pour le marché suisse, la VDE-AR-E 2510-50 est également un critère de qualité reconnu." },
    ],
    ctaHeading: 'Trouver un système de stockage sûr dans votre région',
    ctaText: "PVPro.ch ne met en relation qu'avec des installateurs certifiés qui n'installent que des systèmes LFP vérifiés avec des certifications de sécurité reconnues. Obtenez gratuitement jusqu'à 3 devis — et investissez en toute sécurité.",
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
    metaDescription: 'Is a solar battery storage system really dangerous? Fire risk of only 0.005% according to a study. What you need to know about LFP batteries, safety standards and installation location in Switzerland.',
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
          "Fire risk for home storage systems: 0.005% per year. This means: out of 100'000 installed battery storage systems, statistically only one catches fire per year.",
          'For comparison: General house fire risk approx. 0.25% — Dishwasher approx. 0.03% — Washing machine approx. 0.025% — Battery storage (LFP) approx. 0.005% — Candles approx. 0.5%.',
          'A modern LFP battery storage system is therefore 50 times safer than the general house fire risk — and safer than your washing machine.',
        ],
        stats: [
          { value: '0.005%', label: 'fire risk according to RWTH study 2024' },
          { value: '50x safer', label: 'than the general house fire risk' },
          { value: '80%', label: 'of storage systems in CH are LFP — the safest technology' },
        ],
      },
      {
        heading: 'Why do some batteries have a bad reputation?',
        content: [
          'Reports of burning batteries almost exclusively concern NMC batteries (nickel-manganese-cobalt) — an older technology used in early home storage systems and especially in electric cars and smartphones.',
          'NMC batteries are chemically less stable when overheated, can catch fire due to overcharging or mechanical damage, and release oxygen during thermal runaway — which fans the flames. They are barely used in new home storage systems.',
          'LFP batteries (lithium iron phosphate) are chemically extremely stable, even when overheated. They show no thermal runaway under normal conditions and do not release oxygen in the event of damage. They are now standard in Switzerland: over 80% of all newly installed systems use LFP technology.',
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
          "Lifespan: LFP batteries last 4'000–8'000 charge cycles — corresponding to 15–25 years with daily charging. They thus significantly outperform NMC batteries.",
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
          'UN 38.3 — Transport tests for lithium batteries.',
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
          'Many Swiss homeowners ask this question, as Chinese manufacturers such as BYD and Huawei dominate the Swiss market and account for approximately two thirds of all installed systems.',
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
          '✅ At least 10 years warranty — on capacity and function',
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
      { question: 'Is a battery storage system for a solar installation dangerous?', answer: 'Modern LFP battery storage systems are very safe. According to an RWTH study from 2024, the fire risk is only 0.005% per year — 50 times lower than the general house fire risk. The LFP technology, which is now standard in Switzerland, is thermally extremely stable and practically non-flammable.' },
      { question: 'Can a battery storage system explode?', answer: 'Explosions in modern LFP home storage systems are virtually impossible. The chemistry of LFP cells is so stable that even mechanical damage does not trigger a chain reaction. Older NMC technologies have a higher risk — but they are barely used in new home storage systems.' },
      { question: 'Where may I install a battery storage system?', answer: 'LFP battery storage systems may be installed in all rooms — basement, utility room, garage. Important: dry location, ambient temperature 5–35°C, sufficient ventilation and minimum distances from flammable materials according to manufacturer instructions.' },
      { question: 'Are Chinese battery storage systems safe?', answer: 'The leading Chinese manufacturers such as BYD and Huawei produce high-quality LFP storage systems that meet all international safety standards. No-name products from the low-price segment without recognised certifications should be avoided.' },
      { question: 'How long does a battery storage system last?', answer: "Modern LFP battery storage systems last 4'000–8'000 charge cycles, corresponding to 15–25 years with daily charging. Most manufacturers offer 10 years' warranty on at least 80% of the original capacity." },
      { question: 'Do I need to report my battery storage system to my insurance?', answer: 'Yes, recommended. In most Swiss cantons, the storage system is automatically covered by building insurance as a building component. Nevertheless, report the installation to ensure that damage is covered.' },
      { question: 'What certifications should a safe battery storage system have?', answer: 'At minimum IEC 62619 (international standard for stationary lithium batteries), CE marking and UN 38.3. For the Swiss market, VDE-AR-E 2510-50 is also a recognised quality feature.' },
    ],
    ctaHeading: 'Find a safe battery storage system in your region',
    ctaText: 'PVPro.ch only brokers certified installers who exclusively install verified LFP systems with recognised safety certifications. Get up to 3 quotes for free — and invest safely.',
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
    metaDescription: "Un sistema di accumulo a batterie per impianto solare è davvero pericoloso? Rischio di incendio solo dello 0.005% secondo uno studio. Cosa sapere sulle batterie LFP, le norme di sicurezza e il luogo di installazione.",
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
          "Rischio di incendio per i sistemi di accumulo domestici: 0.005% all'anno. Ciò significa: su 100'000 sistemi installati, statisticamente solo uno prende fuoco all'anno.",
          "Per confronto: Rischio generale di incendio abitativo ca. 0.25% — Lavastoviglie ca. 0.03% — Lavatrice ca. 0.025% — Sistema di accumulo (LFP) ca. 0.005% — Candele ca. 0.5%.",
          "Un moderno sistema di accumulo LFP è quindi 50 volte più sicuro del rischio generale di incendio abitativo — e più sicuro della vostra lavatrice.",
        ],
        stats: [
          { value: '0.005%', label: "rischio di incendio secondo lo studio RWTH 2024" },
          { value: '50x più sicuro', label: "del rischio generale di incendio abitativo" },
          { value: '80%', label: 'dei sistemi in CH sono LFP — la tecnologia più sicura' },
        ],
      },
      {
        heading: "Perché alcune batterie hanno una cattiva reputazione?",
        content: [
          "Le notizie di batterie in fiamme riguardano quasi esclusivamente le batterie NMC (nichel-manganese-cobalto) — una tecnologia più vecchia utilizzata nei primi sistemi domestici e soprattutto nelle auto elettriche e negli smartphone.",
          "Le batterie NMC sono chimicamente meno stabili in caso di surriscaldamento, possono prendere fuoco in caso di sovraccarica o danni meccanici e rilasciano ossigeno durante la fuga termica — alimentando l'incendio. Nei nuovi sistemi domestici sono ormai quasi del tutto abbandonate.",
          "Le batterie LFP (litio ferro fosfato) sono chimicamente estremamente stabili, anche in caso di surriscaldamento. Non mostrano fuga termica in condizioni normali e non rilasciano ossigeno in caso di danni. Sono oggi lo standard in Svizzera: oltre l'80% di tutti i sistemi nuovi installati utilizza la tecnologia LFP.",
          "Conclusione: se acquistate oggi un nuovo sistema di accumulo, con tutta probabilità otterrete una batteria LFP — la tecnologia più sicura disponibile per i sistemi domestici.",
        ],
      },
      {
        heading: "Cos'è l'LFP e perché è così sicura?",
        content: [
          "LFP sta per Litio Ferro Fosfato (LiFePO₄). Questa chimica cellulare presenta vantaggi decisivi rispetto alle tecnologie al litio più vecchie.",
          "Stabilità termica: Le celle LFP iniziano a decomporsi solo oltre i 270°C — le celle NMC già dai 150°C. Anche in caso di incendio nell'edificio, non ci si aspetterebbe nessuna fuga termica.",
          "Nessun ossigeno in caso di surriscaldamento: Altre tecnologie al litio possono rilasciare ossigeno in caso di surriscaldamento, intensificando l'incendio. L'LFP non lo fa — l'incendio non può autoalimentarsi.",
          "Robustezza meccanica: Le celle LFP resistono anche a forti sollecitazioni meccaniche. Il famoso «test del chiodo» non provoca alcuna reazione di incendio nelle batterie LFP.",
          "Durata: Le batterie LFP durano 4'000–8'000 cicli di carica — corrispondenti a 15–25 anni con carica quotidiana. Superano così nettamente le batterie NMC.",
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
          "Molti proprietari di case svizzeri pongono questa domanda, poiché produttori cinesi come BYD e Huawei dominano il mercato svizzero e rappresentano circa due terzi di tutti i sistemi installati.",
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
          '✅ Almeno 10 anni di garanzia — su capacità e funzionamento',
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
      { question: "Un sistema di accumulo a batterie per impianto solare è pericoloso?", answer: "I moderni sistemi di accumulo LFP sono molto sicuri. Secondo uno studio RWTH del 2024, il rischio di incendio è solo dello 0.005% all'anno — 50 volte inferiore al rischio generale di incendio abitativo. La tecnologia LFP è termicamente estremamente stabile e praticamente non infiammabile." },
      { question: "Un sistema di accumulo a batterie può esplodere?", answer: "Le esplosioni nei moderni sistemi domestici LFP sono praticamente escluse. La chimica delle celle LFP è così stabile che anche i danni meccanici non innescano una reazione a catena. Le tecnologie NMC più vecchie presentano un rischio più elevato — ma vengono ormai quasi del tutto abbandonate nei nuovi sistemi domestici." },
      { question: "Dove posso installare un sistema di accumulo a batterie?", answer: "I sistemi di accumulo LFP possono essere installati in tutti i locali — cantina, ripostiglio, garage. Importante: luogo asciutto, temperatura ambiente 5–35°C, ventilazione sufficiente e distanze minime da materiali infiammabili secondo le istruzioni del produttore." },
      { question: "I sistemi di accumulo a batterie cinesi sono sicuri?", answer: "I principali produttori cinesi come BYD e Huawei producono sistemi di accumulo LFP di alta qualità che soddisfano tutti gli standard di sicurezza internazionali. Vanno evitati i prodotti senza marchio del segmento dei prezzi bassi senza certificazioni riconosciute." },
      { question: "Quanto dura un sistema di accumulo a batterie?", answer: "I moderni sistemi di accumulo LFP durano 4'000–8'000 cicli di carica, corrispondenti a 15–25 anni con carica quotidiana. La maggior parte dei produttori offre 10 anni di garanzia su almeno l'80% della capacità originale." },
      { question: "Devo comunicare il mio sistema di accumulo alla mia assicurazione?", answer: "Sì, è consigliato. Nella maggior parte dei cantoni svizzeri, il sistema di accumulo è automaticamente coperto dall'assicurazione edilizia come componente dell'edificio. Comunicate comunque l'installazione per assicurarvi che i danni siano coperti." },
      { question: "Quali certificazioni deve avere un sistema di accumulo sicuro?", answer: "Come minimo IEC 62619 (norma internazionale per le batterie al litio stazionarie), la marcatura CE e UN 38.3. Per il mercato svizzero, anche la VDE-AR-E 2510-50 è un riconosciuto indicatore di qualità." },
    ],
    ctaHeading: 'Trovare un sistema di accumulo sicuro nella vostra regione',
    ctaText: "PVPro.ch mette in contatto solo con installatori certificati che installano esclusivamente sistemi LFP verificati con certificazioni di sicurezza riconosciute. Richiedete gratuitamente fino a 3 preventivi — e investite in sicurezza.",
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
          'Garantie: Freiwilliges Versprechen des Herstellers der einzelnen Komponenten — unabhängig vom Installateur. Solarmodule: 10–15 Jahre Produktgarantie, 25–30 Jahre Leistungsgarantie. Wechselrichter: 5–10 Jahre Herstellergarantie. Batteriespeicher: meist 10 Jahre. Bei Insolvenz des Installateurs: bleibt vollständig bestehen.',
          'Das Fazit: Wenn Ihr Installateur pleite geht, verlieren Sie Ihre Gewährleistungsansprüche — aber Ihre wertvollen Herstellergarantien auf Module, Wechselrichter und Speicher bleiben vollständig erhalten.',
        ],
        stats: [
          { value: '25–30 Jahre', label: 'Leistungsgarantie der Module bleibt bestehen' },
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
          'Ein Schweizer Konkursverfahren dauert typischerweise 1–3 Jahre. In dieser Zeit können Sie Forderungen beim Konkursamt anmelden und erhalten am Ende eine Quote — oft im einstelligen Prozentbereich. Herstellergarantien bleiben davon vollständig unberührt.',
          'Realitätscheck: Die Erfahrung zeigt, dass Gläubiger am Ende eines Insolvenzverfahrens typischerweise nur 3–10% ihrer Forderungen zurückerhalten. Setzen Sie Ihre Energie lieber auf die Herstellergarantien und auf die Suche nach einem neuen lokalen Fachbetrieb für Wartung und Service.',
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
          'Das ist die eigentlich wichtige Frage — und die Antwort ist beruhigend. Herstellergarantien auf Module: Die Leistungsgarantie (25–30 Jahre) richtet sich direkt gegen den Modulhersteller — nicht gegen den Installateur. Wenn ein Modul nach 10 Jahren nicht mehr die garantierte Leistung bringt, wenden Sie sich direkt an den Hersteller. Der Installateur ist dabei irrelevant.',
          'Herstellergarantien auf Wechselrichter: Gleiche Logik — die Garantie besteht zwischen Ihnen und dem Hersteller. Fronius, SMA, Huawei haben eigene Service-Hotlines und Servicepartner in der Schweiz. Was Sie brauchen: Seriennummer des Wechselrichters, Kaufbeleg/Rechnung und das Garantiezertifikat vom Hersteller. Mit diesen Dokumenten können Sie direkt beim Hersteller einen Garantiefall einleiten — ohne den Installateur.',
          'Achtung bei günstigen No-Name-Produkten: Bei unbekannten Herstellern ohne Schweizer Niederlassung wird die Garantiedurchsetzung im Schadensfall sehr schwierig. Das ist ein weiterer Grund, warum PVPro.ch nur Installationen mit Komponenten von etablierten Markenherstellern vermittelt.',
        ],
      },
      {
        heading: 'Woran erkennt man einen Installateur in finanziellen Schwierigkeiten?',
        content: [
          'Es gibt Warnsignale, die Sie vor einer Insolvenz erkennen können:',
        ],
        bullets: [
          '🔴 Alarmsignal 1: Sehr hohe Anzahlung verlangt (mehr als 30%) lange vor Baubeginn',
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
          '1. Nur zertifizierte lokale Betriebe beauftragen: Kleine, lokale Fachbetriebe mit langjähriger Präsenz in der Region haben ein deutlich tieferes Insolvenzrisiko als schnell gewachsene nationale Anbieter. Sie kennen ihre Kunden persönlich und haben einen guten Ruf zu verlieren.',
          '2. Anzahlungen minimieren: Zahlen Sie nie mehr als 20–30% im Voraus. Professionelle Installateure verlangen keine überhöhten Anzahlungen. Staffelzahlungen — z.B. 30% bei Bestellung, 60% bei Montage, 10% bei Inbetriebnahme — sind Standard.',
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
          'Oft 10–30 Jahre Betriebserfahrung in der Region',
          'Kennen ihre Kunden persönlich',
          'Haben einen guten Ruf zu verlieren — und pflegen ihn',
          'Nicht abhängig von nationalem Auftragsvolumen',
          'Reagieren schneller bei Problemen — weil sie nebenan sind',
        ],
        highlight: 'PVPro.ch vermittelt ausschliesslich geprüfte lokale Fachbetriebe — keine nationalen Call-Center-Anbieter, die Aufträge an Subunternehmer weiterverkaufen.',
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
      { question: 'Was passiert mit der Garantie meiner Solaranlage wenn der Installateur pleite geht?', answer: 'Die Herstellergarantien auf Module (25–30 Jahre), Wechselrichter (5–10 Jahre) und Batteriespeicher (10 Jahre) bleiben vollständig bestehen — sie richten sich direkt gegen die Hersteller, nicht gegen den Installateur. Was Sie verlieren, ist die Gewährleistung des Installateurs für Installationsfehler.' },
      { question: 'Kann ich meine Anzahlung zurückbekommen wenn der Installateur Konkurs macht?', answer: 'Sie können Ihre Forderung beim Konkursamt anmelden. Die Erfahrung zeigt jedoch, dass Gläubiger typischerweise nur 3–10% ihrer Forderungen zurückerhalten. Bei Kreditkartenzahlung ist ein Chargeback möglich.' },
      { question: 'Wer repariert meine Solaranlage wenn der Installateur nicht mehr existiert?', answer: 'Für Reparaturen innerhalb der Herstellergarantie wenden Sie sich direkt an den Hersteller der defekten Komponente. Für sonstige Wartungsarbeiten beauftragen Sie einen anderen lokalen Fachbetrieb — PVPro.ch kann Ihnen dabei helfen.' },
      { question: 'Wie erkenne ich einen seriösen Installateur?', answer: 'Achten Sie auf: lokale Präsenz seit mindestens 5 Jahren, anerkannte Zertifizierung (Swissolar), keine überhöhten Anzahlungen, schriftlicher Werkvertrag mit detaillierten Angaben, und nachprüfbare Referenzen in Ihrer Region.' },
      { question: 'Sind lokale Installateure sicherer als nationale Anbieter?', answer: 'In der Regel ja. Kleine lokale Fachbetriebe mit langjähriger Präsenz haben oft ein tieferes Insolvenzrisiko als schnell gewachsene nationale Anbieter. Zudem reagieren sie schneller bei Problemen und kennen die lokalen Gegebenheiten besser.' },
      { question: 'Was muss ich nach der Installation aufbewahren?', answer: 'Rechnung mit Seriennummern aller Komponenten, Werkvertrag, alle Garantiezertifikate (Module, Wechselrichter, Speicher), Inbetriebnahmeprotokoll, EIV-Bestätigung und Anmeldung beim Netzbetreiber. Diese Dokumente sind Ihr Schutzschild im Schadensfall.' },
    ],
    ctaHeading: 'Nur geprüfte lokale Installateure — mit PVPro.ch',
    ctaText: 'PVPro.ch vermittelt ausschliesslich zertifizierte lokale Fachbetriebe mit nachgewiesener Erfahrung in Ihrer Region. Kein nationales Call-Center, kein Weiterverkauf an Subunternehmer. Kostenlos bis zu 3 Offerten einholen.',
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
          "Garantie légale: obligatoire par la loi — aucun contrat nécessaire. S'exerce contre l'installateur (vendeur de l'installation). En Suisse: 2 ans pour les pièces mobiles, 5 ans pour les éléments intégrés (ex. structure de toiture). Couvre les défauts présents lors de l'installation. En cas d'insolvabilité de l'installateur: pratiquement sans valeur — plus d'interlocuteur.",
          "Garantie fabricant: promesse volontaire du fabricant des composants — indépendante de l'installateur. Panneaux solaires: 10–15 ans de garantie produit, 25–30 ans de garantie de performance. Onduleur: 5–10 ans de garantie fabricant. Système de stockage: généralement 10 ans. En cas d'insolvabilité de l'installateur: reste entièrement valide.",
          "Conclusion: si votre installateur fait faillite, vous perdez vos droits à la garantie légale — mais vos précieuses garanties fabricant sur les panneaux, l'onduleur et le système de stockage restent entièrement valides.",
        ],
        stats: [
          { value: '25–30 ans', label: 'la garantie de performance des panneaux reste valide' },
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
          "Une procédure de faillite suisse dure typiquement 1 à 3 ans. Pendant cette période, vous pouvez déposer des créances auprès de l'office des poursuites et obtiendrez finalement un dividende — souvent dans les chiffres à un seul chiffre en pourcentage. Les garanties fabricant restent totalement indépendantes de ce processus.",
          "Vérification de la réalité: l'expérience montre que les créanciers ne récupèrent généralement que 3 à 10% de leurs créances au terme d'une procédure d'insolvabilité. Concentrez plutôt votre énergie sur les garanties fabricant et la recherche d'un nouveau prestataire local.",
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
          "C'est la vraie question importante — et la réponse est rassurante. Garanties fabricant sur les panneaux: la garantie de performance (25–30 ans) s'exerce directement contre le fabricant des panneaux — pas contre l'installateur. Si un panneau ne produit plus la performance garantie après 10 ans, adressez-vous directement au fabricant. L'installateur n'est pas impliqué.",
          "Garanties fabricant sur l'onduleur: même logique — la garantie existe entre vous et le fabricant. Fronius, SMA, Huawei ont leurs propres hotlines de service et partenaires de service en Suisse. Ce dont vous avez besoin: numéro de série de l'onduleur, preuve d'achat/facture et le certificat de garantie du fabricant.",
          "Attention aux produits bon marché sans marque: chez des fabricants inconnus sans représentation suisse, faire valoir la garantie en cas de sinistre devient très difficile. C'est une raison supplémentaire pour laquelle PVPro.ch ne s'occupe que d'installations avec des composants de fabricants de marque établis.",
        ],
      },
      {
        heading: "Comment reconnaître un installateur en difficulté financière?",
        content: [
          "Il existe des signaux d'alarme que vous pouvez détecter avant une insolvabilité:",
        ],
        bullets: [
          "🔴 Signal 1: L'installateur exige un acompte très élevé (plus de 30%) bien avant le début des travaux",
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
          "1. Ne mandater que des entreprises locales certifiées: Les petits prestataires locaux avec une présence de longue date dans la région ont un risque d'insolvabilité nettement plus faible que les prestataires nationaux à croissance rapide. Ils connaissent leurs clients personnellement et ont une réputation à préserver.",
          "2. Minimiser les acomptes: Ne payez jamais plus de 20 à 30% à l'avance. Des paiements échelonnés — par ex. 30% à la commande, 60% à la pose, 10% à la mise en service — sont la norme.",
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
          'Souvent 10 à 30 ans d\'expérience dans la région',
          'Connaissent leurs clients personnellement',
          'Ont une réputation à préserver — et la chérissent',
          'Ne dépendent pas du volume de commandes national',
          'Réagissent plus vite en cas de problèmes — car ils sont à proximité',
        ],
        highlight: "PVPro.ch s'occupe exclusivement de prestataires locaux vérifiés — aucun centre d'appels national qui revend les mandats à des sous-traitants.",
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
      { question: "Que se passe-t-il avec la garantie de mon installation solaire si l'installateur fait faillite?", answer: "Les garanties fabricant sur les panneaux (25–30 ans), l'onduleur (5–10 ans) et le système de stockage (10 ans) restent entièrement valides — elles s'exercent directement contre les fabricants, pas contre l'installateur. Ce que vous perdez, c'est la garantie légale de l'installateur pour les défauts d'installation." },
      { question: "Puis-je récupérer mon acompte si l'installateur fait faillite?", answer: "Vous pouvez déposer votre créance auprès de l'office des poursuites. L'expérience montre cependant que les créanciers ne récupèrent généralement que 3 à 10% de leurs créances. En cas de paiement par carte de crédit, un chargeback est possible." },
      { question: "Qui répare mon installation solaire si l'installateur n'existe plus?", answer: "Pour les réparations couvertes par la garantie fabricant, adressez-vous directement au fabricant du composant défectueux. Pour les autres travaux de maintenance, mandatez un autre prestataire local — PVPro.ch peut vous y aider." },
      { question: 'Comment reconnaître un installateur sérieux?', answer: "Veillez à: une présence locale depuis au moins 5 ans, une certification reconnue (Swissolar), aucun acompte excessif, un contrat d'entreprise écrit avec des informations détaillées, et des références vérifiables dans votre région." },
      { question: 'Les installateurs locaux sont-ils plus sûrs que les prestataires nationaux?', answer: "En règle générale, oui. Les petits prestataires locaux avec une présence de longue date ont souvent un risque d'insolvabilité plus faible que les prestataires nationaux à croissance rapide. De plus, ils réagissent plus rapidement en cas de problèmes." },
      { question: "Que dois-je conserver après l'installation?", answer: "Facture avec numéros de série de tous les composants, contrat d'entreprise, tous les certificats de garantie (panneaux, onduleur, stockage), protocole de mise en service, confirmation SRI et inscription auprès du gestionnaire de réseau. Ces documents sont votre bouclier en cas de sinistre." },
    ],
    ctaHeading: 'Uniquement des installateurs locaux vérifiés — avec PVPro.ch',
    ctaText: "PVPro.ch ne s'occupe qu'avec des prestataires locaux certifiés avec une expérience prouvée dans votre région. Aucun centre d'appels national, aucune revente à des sous-traitants. Obtenez gratuitement jusqu'à 3 devis.",
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
          'Statutory warranty: required by law — no contract needed. Directed against the installer (seller of the system). In Switzerland: 2 years for movable parts, 5 years for permanently installed parts (e.g. roof structure). Covers defects that existed at the time of installation. In the event of installer insolvency: practically worthless — no contact person anymore.',
          'Manufacturer guarantee: voluntary promise by the manufacturer of the individual components — independent of the installer. Solar panels: 10–15 years product guarantee, 25–30 years performance guarantee. Inverter: 5–10 years manufacturer guarantee. Battery storage: usually 10 years. In the event of installer insolvency: remains fully valid.',
          'The conclusion: if your installer goes bankrupt, you lose your statutory warranty claims — but your valuable manufacturer guarantees on panels, inverter and storage remain fully intact.',
        ],
        stats: [
          { value: '25–30 years', label: 'panel performance guarantee remains valid' },
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
          'A Swiss bankruptcy proceeding typically takes 1–3 years. During this time, you can register claims with the bankruptcy office and will ultimately receive a dividend — often in the single-digit percentage range. Manufacturer guarantees remain completely unaffected by this process.',
          'Reality check: experience shows that creditors typically only recover 3–10% of their claims at the end of insolvency proceedings. Better to focus your energy on manufacturer guarantees and finding a new local specialist for maintenance and service.',
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
          'This is the truly important question — and the answer is reassuring. Manufacturer guarantees on panels: the performance guarantee (25–30 years) is directed directly against the panel manufacturer — not against the installer. If a panel no longer produces the guaranteed output after 10 years, contact the manufacturer directly. The installer is irrelevant in this case.',
          'Manufacturer guarantees on inverters: same logic — the guarantee exists between you and the manufacturer. Fronius, SMA, Huawei have their own service hotlines and service partners in Switzerland. What you need: serial number of the inverter, proof of purchase/invoice, and the warranty certificate from the manufacturer. With these documents, you can open a warranty claim directly with the manufacturer — without the installer.',
          'Warning with cheap no-name products: with unknown manufacturers without a Swiss office, enforcing the guarantee in the event of a claim becomes very difficult. This is another reason why PVPro.ch only arranges installations with components from established brand manufacturers.',
        ],
      },
      {
        heading: 'How to recognise an installer in financial difficulty?',
        content: [
          'There are warning signs you can spot before an insolvency:',
        ],
        bullets: [
          '🔴 Warning sign 1: The installer demands a very high advance payment (more than 30%) long before construction begins',
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
          '1. Only engage certified local firms: small, local specialist companies with a long-standing regional presence have a significantly lower insolvency risk than rapidly grown national providers. They know their customers personally and have a reputation to protect.',
          '2. Minimise advance payments: never pay more than 20–30% upfront. Professional installers do not demand excessive advance payments. Staged payments — e.g. 30% on order, 60% on installation, 10% on commissioning — are standard.',
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
          'Often 10–30 years of operating experience in the region',
          'Know their customers personally',
          'Have a good reputation to lose — and nurture it',
          'Not dependent on national order volume',
          'React faster to problems — because they are nearby',
        ],
        highlight: 'PVPro.ch exclusively connects with verified local specialist firms — no national call-centre providers who resell orders to subcontractors.',
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
      { question: 'What happens to my solar system warranty if the installer goes bankrupt?', answer: 'The manufacturer guarantees on panels (25–30 years), inverter (5–10 years) and battery storage (10 years) remain fully valid — they are directed against the manufacturers, not the installer. What you lose is the statutory warranty from the installer for installation defects.' },
      { question: 'Can I get my advance payment back if the installer goes bankrupt?', answer: 'You can register your claim with the bankruptcy office. Experience shows, however, that creditors typically only recover 3–10% of their claims. A chargeback is possible if you paid by credit card.' },
      { question: 'Who repairs my solar system if the installer no longer exists?', answer: 'For repairs covered by the manufacturer guarantee, contact the manufacturer of the faulty component directly. For other maintenance work, engage another local specialist — PVPro.ch can help you with this.' },
      { question: 'How do I recognise a reputable installer?', answer: 'Look for: local presence for at least 5 years, recognised certification (Swissolar), no excessive advance payments, written works contract with detailed information, and verifiable references in your region.' },
      { question: 'Are local installers safer than national providers?', answer: 'Generally yes. Small local specialist companies with a long-standing presence often have a lower insolvency risk than rapidly grown national providers. They also respond more quickly to problems and know the local conditions better.' },
      { question: 'What must I keep after installation?', answer: 'Invoice with serial numbers of all components, works contract, all guarantee certificates (panels, inverter, storage), commissioning report, OTP confirmation and registration with the grid operator. These documents are your shield in the event of a claim.' },
    ],
    ctaHeading: 'Only verified local installers — with PVPro.ch',
    ctaText: 'PVPro.ch exclusively connects with certified local specialist companies with proven experience in your region. No national call centre, no resale to subcontractors. Get up to 3 quotes for free.',
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
          "Garanzia del produttore: promessa volontaria del produttore dei singoli componenti — indipendente dall'installatore. Pannelli solari: 10–15 anni di garanzia prodotto, 25–30 anni di garanzia di prestazione. Inverter: 5–10 anni di garanzia del produttore. Sistema di accumulo: generalmente 10 anni. In caso di insolvenza dell'installatore: rimane completamente valida.",
          "Conclusione: se il vostro installatore fallisce, perdete i diritti alla garanzia legale — ma le preziose garanzie del produttore su pannelli, inverter e sistema di accumulo rimangono completamente valide.",
        ],
        stats: [
          { value: '25–30 anni', label: 'la garanzia di prestazione dei pannelli rimane valida' },
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
          "Una procedura fallimentare svizzera dura tipicamente 1–3 anni. In questo periodo potete registrare crediti presso l'ufficio fallimenti e riceverete alla fine una quota — spesso nell'ordine di cifre a una sola cifra percentuale. Le garanzie del produttore rimangono completamente indipendenti da questo processo.",
          "Verifica della realtà: l'esperienza mostra che i creditori recuperano tipicamente solo il 3–10% dei loro crediti al termine di una procedura concorsuale. Concentrate piuttosto la vostra energia sulle garanzie del produttore e sulla ricerca di un nuovo specialista locale.",
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
          "Questa è la domanda davvero importante — e la risposta è rassicurante. Garanzie del produttore sui pannelli: la garanzia di prestazione (25–30 anni) si esercita direttamente contro il produttore dei pannelli — non contro l'installatore. Se un pannello non produce più la prestazione garantita dopo 10 anni, rivolgetevi direttamente al produttore. L'installatore non è rilevante.",
          "Garanzie del produttore sugli inverter: stessa logica — la garanzia esiste tra voi e il produttore. Fronius, SMA, Huawei hanno proprie hotline di assistenza e partner di assistenza in Svizzera. Di cosa avete bisogno: numero di serie dell'inverter, prova d'acquisto/fattura e il certificato di garanzia del produttore.",
          "Attenzione ai prodotti economici senza marchio: con produttori sconosciuti senza sede svizzera, far valere la garanzia in caso di sinistro diventa molto difficile. Questo è un ulteriore motivo per cui PVPro.ch si occupa solo di installazioni con componenti di produttori di marca affermati.",
        ],
      },
      {
        heading: "Come riconoscere un installatore in difficoltà finanziaria?",
        content: [
          "Esistono segnali di allarme che potete rilevare prima di un'insolvenza:",
        ],
        bullets: [
          "🔴 Segnale 1: L'installatore richiede un acconto molto elevato (più del 30%) molto prima dell'inizio dei lavori",
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
          "1. Incaricare solo aziende locali certificate: le piccole aziende specializzate locali con una presenza pluriennale nella regione hanno un rischio di insolvenza notevolmente più basso rispetto ai fornitori nazionali a crescita rapida. Conoscono i loro clienti personalmente e hanno una reputazione da preservare.",
          "2. Minimizzare gli acconti: non pagate mai più del 20–30% in anticipo. I pagamenti scaglionati — es. 30% all'ordine, 60% al montaggio, 10% alla messa in servizio — sono la norma.",
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
          'Spesso 10–30 anni di esperienza operativa nella regione',
          'Conoscono i loro clienti personalmente',
          'Hanno una buona reputazione da preservare — e la curano',
          'Non dipendono dal volume di ordini nazionale',
          'Reagiscono più rapidamente ai problemi — perché sono vicini',
        ],
        highlight: "PVPro.ch si avvale esclusivamente di aziende specializzate locali verificate — nessun fornitore nazionale che rivende gli incarichi a subappaltatori.",
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
      { question: "Cosa succede alla garanzia del mio impianto solare se l'installatore fallisce?", answer: "Le garanzie del produttore su pannelli (25–30 anni), inverter (5–10 anni) e sistema di accumulo (10 anni) rimangono completamente valide — si esercitano direttamente contro i produttori, non contro l'installatore. Quello che perdete è la garanzia legale dell'installatore per i difetti di installazione." },
      { question: "Posso recuperare l'acconto se l'installatore fallisce?", answer: "Potete registrare il vostro credito presso l'ufficio fallimenti. L'esperienza mostra tuttavia che i creditori recuperano tipicamente solo il 3–10% dei loro crediti. In caso di pagamento con carta di credito è possibile un chargeback." },
      { question: "Chi ripara il mio impianto solare se l'installatore non esiste più?", answer: "Per le riparazioni coperte dalla garanzia del produttore, rivolgetevi direttamente al produttore del componente difettoso. Per altri lavori di manutenzione, incaricate un altro specialista locale — PVPro.ch può aiutarvi." },
      { question: 'Come riconosco un installatore serio?', answer: "Verificate: presenza locale da almeno 5 anni, certificazione riconosciuta (Swissolar), nessun acconto eccessivo, contratto d'appalto scritto con informazioni dettagliate e riferimenti verificabili nella vostra regione." },
      { question: 'Le aziende installatrici locali sono più sicure dei fornitori nazionali?', answer: "In linea di principio sì. Le piccole aziende specializzate locali con una presenza pluriennale hanno spesso un rischio di insolvenza più basso rispetto ai fornitori nazionali a crescita rapida. Reagiscono anche più rapidamente ai problemi." },
      { question: "Cosa devo conservare dopo l'installazione?", answer: "Fattura con numeri di serie di tutti i componenti, contratto d'appalto, tutti i certificati di garanzia (pannelli, inverter, accumulo), protocollo di messa in servizio, conferma CUB e registrazione presso il gestore di rete. Questi documenti sono il vostro scudo in caso di sinistro." },
    ],
    ctaHeading: 'Solo installatori locali verificati — con PVPro.ch',
    ctaText: "PVPro.ch si avvale esclusivamente di aziende specializzate locali certificate con comprovata esperienza nella vostra regione. Nessun call center nazionale, nessuna rivendita a subappaltatori. Richiedete gratuitamente fino a 3 preventivi.",
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
    intro: "Eine Solaranlage kostet CHF 15'000–30'000. Was passiert, wenn Hagel die Module zerstört? Was wenn ein Kurzschluss den Wechselrichter beschädigt? Was wenn jemand die Anlage stiehlt? Viele Schweizer Hausbesitzer gehen davon aus, dass ihre Gebäudeversicherung alles deckt — und erleben im Schadensfall eine böse Überraschung. Dieser Artikel erklärt klar, was die kantonale Gebäudeversicherung abdeckt, was nicht, und wie Sie Ihre Investition vollständig schützen.",
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
          { value: "Ab CHF 100/Jahr", label: 'Zusatzversicherung für vollen Schutz' },
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
          "Die Haustechnikversicherung (auch Solaranlagenversicherung oder Photovoltaikversicherung) deckt alle Risiken, die die KGV nicht übernimmt. Für eine typische 10-kWp-Anlage kostet sie ca. CHF 100–200 pro Jahr — CHF 8–17 pro Monat für eine CHF 20'000-Investition.",
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
          "Der Batteriespeicher (CHF 7'000–12'000) hat einen eigenen Versicherungsstatus. KGV: Der Speicher im Keller ist in den meisten Kantonen als Gebäudebestandteil mitversichert — aber nur gegen Feuer und Elementarschäden. Nicht gedeckt: Technische Defekte, Überspannung, Kurzschluss.",
          'Haustechnikversicherung: Die meisten Policen decken den Speicher mit ab — prüfen Sie aber explizit, ob er in den Versicherungsbedingungen erwähnt wird. Manchmal muss er separat angegeben werden.',
        ],
      },
      {
        heading: 'Hagel — der häufigste Schadensfall in der Schweiz',
        content: [
          'Die Schweiz hat eines der höchsten Hagelrisiken Europas — besonders im Kanton Bern, in der Nordwestschweiz und im Mittelland. Hagelschäden sind durch die KGV gedeckt — Gerüstkosten und Ertragsausfall jedoch nicht.',
          'Hagelschutzstandards bei Modulen: Mindeststandard hält 25-mm-Hagel stand. Empfohlen für die Schweiz: 30-mm-Zertifizierung (IEC 61215). Beste Klasse: 40-mm-Hagel. In hagelgefährdeten Regionen: Fragen Sie bei der Offerte explizit nach der Hagelschutzklasse.',
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
      { question: 'Was kostet eine Solaranlagenversicherung in der Schweiz?', answer: "Eine Haustechnik- oder Solaranlagenversicherung kostet für eine typische 10-kWp-Anlage ca. CHF 100–200 pro Jahr — das entspricht CHF 8–17 pro Monat für eine Investition von CHF 20'000." },
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
    intro: "Une installation solaire coûte CHF 15'000–30'000. Que se passe-t-il si la grêle détruit les panneaux? Et si un court-circuit endommage l'onduleur? Et si quelqu'un vole l'installation? De nombreux propriétaires suisses supposent que leur assurance bâtiment couvre tout — et ont la mauvaise surprise lors d'un sinistre. Cet article explique clairement ce que l'assurance cantonale des bâtiments (ACB) couvre, ce qu'elle ne couvre pas, et comment protéger intégralement votre investissement.",
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
          { value: "Dès CHF 100/an", label: 'Assurance complémentaire pour protection totale' },
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
          "L'assurance techniques du bâtiment (aussi appelée assurance photovoltaïque) couvre tous les risques non pris en charge par l'ACB. Pour une installation de 10 kWc typique: env. CHF 100–200 par an.",
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
          "Le système de stockage (CHF 7'000–12'000) a son propre statut: ACB couvre contre feu et éléments. Non couvert: défauts techniques, surtension, court-circuit.",
          "Assurance complémentaire: La plupart des polices couvrent aussi le stockage — mais vérifiez-le explicitement dans les conditions. Parfois il doit être indiqué séparément.",
        ],
      },
      {
        heading: "Grêle — le sinistre le plus fréquent en Suisse",
        content: [
          "La Suisse présente l'un des risques de grêle les plus élevés d'Europe — surtout dans le canton de Berne, en Suisse du Nord-Ouest et dans le Plateau. Les dommages grêle sont couverts par l'ACB — mais pas les frais d'échafaudage et la perte de revenus.",
          "Standards de protection: Minimum 25 mm de grêle (IEC standard). Recommandé pour la Suisse: certification 30 mm. Meilleure classe: résistance 40 mm. Dans les régions à risque: demandez la classe de protection lors du devis.",
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
      { question: "Quel est le coût d'une assurance installation solaire en Suisse?", answer: "Une assurance techniques du bâtiment coûte pour une installation de 10 kWc typique env. CHF 100–200 par an — soit CHF 8–17 par mois pour un investissement de CHF 20'000." },
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
    intro: "A solar system costs CHF 15'000–30'000. What happens if hail destroys the panels? What if a short circuit damages the inverter? What if someone steals the system? Many Swiss homeowners assume their building insurance covers everything — and get an unpleasant surprise when making a claim. This article clearly explains what the cantonal building insurance (CBI) covers, what it does not, and how to fully protect your investment.",
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
          { value: 'From CHF 100/year', label: 'Additional insurance for full protection' },
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
          "Building services insurance (also called solar system insurance or photovoltaic insurance) covers all risks not handled by the CBI. For a typical 10 kWp system: approx. CHF 100–200 per year.",
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
          "The battery storage system (CHF 7'000–12'000) has its own insurance status. CBI: The storage system in the cellar is covered in most cantons against fire and natural hazards. Not covered: technical defects, overvoltage, short circuit.",
          "Building services insurance: Most policies also cover the storage system — but check explicitly that it is mentioned in the insurance conditions. Sometimes it must be listed separately.",
        ],
      },
      {
        heading: 'Hail — the most common claim in Switzerland',
        content: [
          "Switzerland has one of the highest hail risks in Europe — particularly in the canton of Berne, north-west Switzerland and the Plateau. Hail damage is covered by the CBI — but scaffolding costs and lost revenue are not.",
          "Hail protection standards: Minimum standard withstands 25 mm hail. Recommended for Switzerland: 30 mm certification (IEC 61215). Best class: withstands 40 mm hail. In hail-prone regions: ask explicitly about the hail protection class when requesting quotes.",
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
      { question: 'What does solar system insurance cost in Switzerland?', answer: "A building services insurance or solar system insurance costs approx. CHF 100–200 per year for a typical 10 kWp system — that is CHF 8–17 per month for a CHF 20'000 investment." },
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
    intro: "Un impianto solare costa CHF 15'000–30'000. Cosa succede se la grandine distrugge i pannelli? Se un cortocircuito danneggia l'inverter? Se qualcuno ruba l'impianto? Molti proprietari svizzeri presumono che la loro assicurazione edilizia copra tutto — e ricevono una brutta sorpresa in caso di sinistro. Questo articolo spiega chiaramente cosa copre l'assicurazione cantonale degli edifici (ACE), cosa non copre, e come proteggere integralmente il vostro investimento.",
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
          { value: "Da CHF 100/anno", label: 'Assicurazione complementare per protezione totale' },
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
          "Nei cantoni GUSTAVO (GE, UR, SZ, TI, AI, OW, VS) non esiste un'assicurazione edilizia statale obbligatoria: i proprietari devono stipulare un'assicurazione privata, la copertura da fuoco ed elementi non è automatica.",
          "Per i proprietari di impianti solari in questi cantoni: Verificate attentamente la polizza e assicuratevi che l'impianto solare sia esplicitamente coperto.",
        ],
      },
      {
        heading: "L'assicurazione tecnica degli edifici — per colmare le lacune",
        content: [
          "L'assicurazione tecnica degli edifici (anche detta assicurazione fotovoltaica) copre tutti i rischi non assunti dall'ACE. Per un impianto tipico da 10 kWp: ca. CHF 100–200 all'anno.",
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
          "Il sistema di accumulo (CHF 7'000–12'000) ha il proprio status: ACE copre contro fuoco ed elementi. Non coperto: difetti tecnici, sovratensione, cortocircuito.",
          "Assicurazione complementare: La maggior parte delle polizze copre anche il sistema di accumulo — verificate esplicitamente nelle condizioni. A volte deve essere indicato separatamente.",
        ],
      },
      {
        heading: "Grandine — il sinistro più frequente in Svizzera",
        content: [
          "La Svizzera ha uno dei rischi di grandine più elevati d'Europa — specialmente nel Canton Berna, nella Svizzera nord-occidentale e nell'Altopiano. I danni da grandine sono coperti dall'ACE — ma non i costi di ponteggio e la perdita di reddito.",
          "Standard di protezione contro la grandine: Minimo 25 mm di grandine (standard IEC). Raccomandato per la Svizzera: certificazione 30 mm. Migliore classe: resistenza 40 mm. Nelle regioni a rischio: chiedete la classe di protezione al momento del preventivo.",
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
      { question: "Quanto costa un'assicurazione per impianto solare in Svizzera?", answer: "Un'assicurazione tecnica degli edifici costa per un impianto tipico da 10 kWp ca. CHF 100–200 all'anno — pari a CHF 8–17 al mese per un investimento di CHF 20'000." },
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
    intro: '"Chinesische Module kaufe ich nicht" — diesen Satz hören wir oft. Die Realität sieht anders aus: Über 80% aller in der Schweiz installierten Solarmodule kommen aus China. Nicht weil die Installateure keine Wahl hätten — sondern weil chinesische Tier-1-Hersteller heute Qualität liefern, die europäischen Produkten in vielen Bereichen gleichwertig ist. Dieser Artikel erklärt ehrlich, wo chinesische Module gut sind, wo europäische besser sind — und worauf es wirklich ankommt.',
    sections: [
      {
        heading: 'Warum haben chinesische Module einen schlechten Ruf?',
        content: [
          'Der schlechte Ruf stammt aus den frühen 2010er Jahren — als minderwertige No-Name-Produkte den Markt überschwemmten. Diese Module hatten tatsächlich Qualitätsprobleme: schnellere Degradation, schwache Garantien, schlechter Kundendienst.',
          'Seitdem hat sich die Branche fundamental verändert. Die grossen chinesischen Hersteller — JinkoSolar, LONGi, Trina Solar, JA Solar, Canadian Solar — haben Milliarden in Forschung und Entwicklung investiert. Heute sind sie nach Wirkungsgrad, Zuverlässigkeit und Garantielaufzeit mit europäischen Herstellern mindestens gleichauf.',
          'Der Unterschied liegt nicht mehr zwischen "chinesisch" und "europäisch" — sondern zwischen Tier-1-Herstellern und No-Name-Produkten.',
        ],
        stats: [
          { value: '80%+', label: 'aller CH-Anlagen mit chinesischen Modulen' },
          { value: '20–30%', label: 'günstiger als europäische Alternativen' },
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
          'Preis: Chinesisch ✅ 20–30% günstiger | Europäisch ❌ deutlich teurer.',
          'Wirkungsgrad: Chinesisch ✅ bis 23.8% (AIKO, LONGi) | Europäisch ✅ bis 23.5% (Meyer Burger HJT).',
          'Produktgarantie: Chinesisch ✅ 25 Jahre Standard | Europäisch ✅ 25–30 Jahre.',
          'Leistungsgarantie: Chinesisch ✅ 85–90% nach 25 Jahren | Europäisch ✅ 88–94% nach 25 Jahren.',
          'Garantieabwicklung: Chinesisch ⚠️ oft über Schweizer Importeur | Europäisch ✅ direkter europäischer Ansprechpartner.',
          'Hagelschutz Schweiz: Chinesisch ⚠️ variiert je nach Modell | Europäisch ✅ oft besser zertifiziert.',
          'Ökobilanz: Chinesisch ❌ längere Transportwege | Europäisch ✅ kürzere Transportwege.',
        ],
      },
      {
        heading: 'Die grössten chinesischen Hersteller im Überblick',
        content: [
          "LONGi — Weltmarktführer Monokristallin: LONGi aus Xi'an ist der grösste Hersteller monokristalliner Wafer weltweit. Die Hi-MO-Serie ist eines der meistverkauften Module in der Schweiz. Wirkungsgrad bis 23.2%, Produktgarantie 25 Jahre, PVEL Top-Performer 2024.",
          'JinkoSolar — Tiger Neo Serie: Einer der grössten Hersteller weltweit. Tiger Neo mit N-Type TOPCon erreicht bis 23.3% Wirkungsgrad und bifazialer Glas-Glas-Konstruktion. PVEL Top-Performer seit mehreren Jahren.',
          'Trina Solar — Vertex S+: Gegründet 1997, einer der zuverlässigsten Hersteller. Vertex S+ bietet exzellentes Preis-Leistungs-Verhältnis bei 22.3% Wirkungsgrad. PVEL Top-Performer elfmal ausgezeichnet.',
          'AIKO Solar: Mit ABC-Technologie bis zu 23.8% Wirkungsgrad — aktuell einer der höchsten kommerziell verfügbaren. PVEL Top-Performer viermal ausgezeichnet.',
        ],
      },
      {
        heading: 'Die europäischen Hersteller im Überblick',
        content: [
          'Meyer Burger — Das Schweizer Modul: Meyer Burger aus Thun (CH) ist der einzige Schweizer Modulhersteller. HJT-Technologie erreicht bis 23.5% Wirkungsgrad, Leistungsgarantie 92% nach 25 Jahren. Preis ca. 20–30% teurer als chinesische Module. Garantieabwicklung direkt in der Schweiz.',
          'REC Group — Norwegen: Gegründet 1996, hohe Qualitätsstandards, starke Leistungsgarantien, europäisches Recht. Guter Ruf in der Schweiz.',
          'Luxor Solar — Deutschland: Eco Line HJT Bifacial mit 30 Jahren Produktgarantie und ausgezeichnetem Temperaturverhalten. Empfehlenswert für Schweizer Verhältnisse.',
          'SoliTek — Litauen: Europäische Produktion, 30 Jahre Produktgarantie, HW4-Hagelzertifizierung.',
        ],
      },
      {
        heading: 'Für wen lohnen sich europäische Module?',
        content: [
          'Wenn die Garantieabwicklung entscheidend ist: Bei einem Defekt nach 10 Jahren ist die Garantieabwicklung mit einem europäischen Hersteller deutlich einfacher — kein Sprachbarrieren, europäisches Recht, direkter Ansprechpartner.',
          'Wenn Hagelschutz prioritär ist: In hagelgefährdeten Regionen der Schweiz empfehlen sich Module mit HW4 oder HW5 Hagelzertifizierung. Meyer Burger und Luxor Solar sind hier stark.',
          'Wenn Ökobilanz ein Faktor ist: Kürzere Transportwege, europäische Produktionsstandards, bessere Recyclinginfrastruktur.',
          'Wenn Schweizer Qualität ein Verkaufsargument ist: Meyer Burger aus der Schweiz hat emotionalen Wert für viele Hausbesitzer.',
        ],
      },
      {
        heading: 'Für wen sind chinesische Tier-1-Module die richtige Wahl?',
        content: [
          'Wenn Budget eine Rolle spielt: Für dasselbe Geld bekommen Sie mit chinesischen Modulen eine grössere Anlage oder können einen Batteriespeicher mitfinanzieren.',
          'Wenn Wirkungsgrad maximiert werden soll: AIKO Solar und LONGi bieten aktuell die höchsten Wirkungsgrade auf dem Markt.',
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
          '⚠️ Produktgarantie unter 15 Jahren',
          '⚠️ Leistungsgarantie unter 80% nach 25 Jahren',
          '⚠️ Kein europäischer Servicepartner',
          '⚠️ Preis deutlich unter dem Marktdurchschnitt',
        ],
        highlight: 'Fragen Sie Ihren Installateur explizit nach dem Hersteller und dem Tier-1-Status der Module. Ein seriöser Installateur verbaut keine unbekannten No-Name-Produkte.',
      },
      {
        heading: 'Welche Module empfiehlt PVPro.ch für die Schweiz?',
        content: [
          'Wir empfehlen keine spezifischen Produkte — das ist Aufgabe des lokalen Installateurs, der Ihr Dach kennt. Aber wir empfehlen folgende Mindestanforderungen:',
        ],
        bullets: [
          '✅ Bloomberg Tier-1-Status oder äquivalente Zertifizierung',
          '✅ Produktgarantie mindestens 15 Jahre (besser 25)',
          '✅ Leistungsgarantie mindestens 85% nach 25 Jahren',
          '✅ IEC 61215 Zertifizierung',
          '✅ Hagelschutz mindestens HW3 (HW4–HW5 für hagelgefährdete Regionen)',
          '✅ Glas-Glas-Bauweise für hagelgefährdete Regionen',
        ],
      },
    ],
    faqs: [
      { question: 'Sind chinesische Solarmodule schlechter als europäische?', answer: 'Nein — nicht pauschal. Chinesische Tier-1-Hersteller wie LONGi, JinkoSolar und Trina Solar liefern Qualität, die europäischen Produkten gleichwertig oder überlegen ist. Der entscheidende Unterschied liegt nicht zwischen "chinesisch" und "europäisch", sondern zwischen Tier-1-Herstellern und No-Name-Produkten.' },
      { question: 'Welche chinesischen Solarmodule sind empfehlenswert für die Schweiz?', answer: 'LONGi (Hi-MO Serie), JinkoSolar (Tiger Neo), Trina Solar (Vertex S+), JA Solar und AIKO Solar sind Tier-1-Hersteller mit nachgewiesener Zuverlässigkeit, langen Garantien und PVEL-Zertifizierungen.' },
      { question: 'Was kosten europäische Solarmodule im Vergleich zu chinesischen?', answer: "Europäische Module sind typischerweise 20–30% teurer als vergleichbare chinesische Tier-1-Module. Für eine 10-kWp-Anlage entspricht das einem Mehrpreis von ca. CHF 1'500–3'000." },
      { question: 'Lohnen sich Schweizer Module von Meyer Burger?', answer: 'Meyer Burger bietet hohe Qualität, exzellente Leistungsgarantien und unkomplizierte Garantieabwicklung in der Schweiz. Der Mehrpreis gegenüber chinesischen Alternativen beträgt ca. 20–30%. Für Hausbesitzer, die Wert auf Schweizer Qualität legen, ist Meyer Burger eine ausgezeichnete Wahl.' },
      { question: 'Was ist der Bloomberg Tier-1-Status?', answer: 'Der Bloomberg Tier-1-Status belegt, dass der Hersteller für bankfinanzierte Projekte als zuverlässiger Lieferant anerkannt ist und Produktions- und Qualitätsstandards erfüllt. Tier-1-Module kommen von Herstellern, die langfristig ihre Garantien erfüllen können.' },
      { question: 'Welche Module sind am besten für hagelgefährdete Regionen in der Schweiz?', answer: 'Für hagelgefährdete Regionen wie den Kanton Bern empfehlen sich Module mit HW4 oder HW5 Hagelzertifizierung und Glas-Glas-Bauweise: FuturaSun Silk Rhino (HW5), Luxor Eco Line HJT, Meyer Burger Glass, SoliTek Solid.' },
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
    intro: '"Je n\'achète pas de panneaux chinois" — cette phrase, nous l\'entendons souvent. La réalité est différente: plus de 80% de tous les panneaux solaires installés en Suisse viennent de Chine. Non pas parce que les installateurs n\'auraient pas le choix — mais parce que les fabricants chinois Tier-1 livrent aujourd\'hui une qualité équivalente aux produits européens dans de nombreux domaines. Cet article explique honnêtement où les panneaux chinois sont bons, où les européens sont meilleurs — et ce qui compte vraiment.',
    sections: [
      {
        heading: 'Pourquoi les panneaux chinois ont-ils une mauvaise réputation?',
        content: [
          "La mauvaise réputation vient du début des années 2010 — quand des produits sans marque de mauvaise qualité ont inondé le marché. Ces panneaux avaient de vrais problèmes: dégradation plus rapide, garanties faibles, mauvais service client.",
          "Depuis lors, le secteur a fondamentalement changé. Les grands fabricants chinois — JinkoSolar, LONGi, Trina Solar, JA Solar — ont investi des milliards en R&D. Aujourd'hui, ils sont au moins à égalité avec les fabricants européens en termes de rendement, fiabilité et durée de garantie.",
          'La différence n\'est plus entre "chinois" et "européen" — mais entre fabricants Tier-1 et produits sans marque.',
        ],
        stats: [
          { value: '80%+', label: 'des installations CH avec panneaux chinois' },
          { value: '20–30%', label: 'moins chers que les alternatives européennes' },
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
          "Prix: Chinois ✅ 20–30% moins chers | Européens ❌ nettement plus chers.",
          "Rendement: Chinois ✅ jusqu'à 23.8% (AIKO, LONGi) | Européens ✅ jusqu'à 23.5% (Meyer Burger HJT).",
          "Garantie produit: Chinois ✅ 25 ans standard | Européens ✅ 25–30 ans.",
          "Garantie de performance: Chinois ✅ 85–90% après 25 ans | Européens ✅ 88–94% après 25 ans.",
          "Gestion des garanties: Chinois ⚠️ souvent via importateur suisse | Européens ✅ interlocuteur européen direct.",
          "Protection anti-grêle CH: Chinois ⚠️ varie selon le modèle | Européens ✅ souvent mieux certifiés.",
          "Bilan écologique: Chinois ❌ transport plus long | Européens ✅ transport plus court.",
        ],
      },
      {
        heading: "Les plus grands fabricants chinois",
        content: [
          "LONGi: Leader mondial du monocristallin. La série Hi-MO est l'une des plus vendues en Suisse. Rendement jusqu'à 23.2%, garantie produit 25 ans, PVEL Top Performer 2024.",
          "JinkoSolar — Tiger Neo: Série N-Type TOPCon avec rendement jusqu'à 23.3% et construction verre-verre bifaciale. PVEL Top Performer depuis plusieurs années.",
          "Trina Solar — Vertex S+: Fondé en 1997, excellent rapport qualité-prix à 22.3% de rendement. PVEL Top Performer onze fois.",
          "AIKO Solar: Technologie ABC avec rendement jusqu'à 23.8% — l'un des plus élevés disponibles commercialement.",
        ],
      },
      {
        heading: "Les fabricants européens",
        content: [
          "Meyer Burger — Le panneau suisse: Seul fabricant suisse de panneaux. Technologie HJT jusqu'à 23.5% de rendement, garantie de performance 92% après 25 ans. Prix ca. 20–30% plus cher. Service garantie directement en Suisse.",
          "REC Group — Norvège: Fondé en 1996, hauts standards de qualité, fortes garanties de performance, droit européen.",
          "Luxor Solar — Allemagne: Eco Line HJT Bifacial avec 30 ans de garantie produit et excellent comportement thermique.",
          "SoliTek — Lituanie: Production européenne, 30 ans de garantie produit, certification anti-grêle HW4.",
        ],
      },
      {
        heading: "Pour qui les panneaux européens valent-ils la peine?",
        content: [
          "Si la gestion des garanties est décisive: En cas de défaut après 10 ans, la gestion de garantie avec un fabricant européen est beaucoup plus simple — pas de barrière linguistique, droit européen, interlocuteur direct.",
          "Si la protection anti-grêle est prioritaire: Dans les régions à risque de grêle, les panneaux avec certification HW4 ou HW5 sont recommandés. Meyer Burger et Luxor Solar excellent ici.",
          "Si le bilan écologique compte: Transports plus courts, normes de production européennes, meilleure infrastructure de recyclage.",
          "Si la qualité suisse est un argument: Meyer Burger de Suisse a une valeur émotionnelle pour de nombreux propriétaires.",
        ],
      },
      {
        heading: "Pour qui les panneaux chinois Tier-1 sont-ils le bon choix?",
        content: [
          "Si le budget est un facteur: Pour le même argent, vous obtenez avec des panneaux chinois une installation plus grande ou pouvez financer un système de stockage.",
          "Si le rendement doit être maximisé: AIKO Solar et LONGi offrent actuellement les rendements les plus élevés du marché.",
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
          '⚠️ Garantie produit inférieure à 15 ans',
          '⚠️ Garantie de performance inférieure à 80% après 25 ans',
          '⚠️ Pas de partenaire de service européen',
          '⚠️ Prix nettement en dessous de la moyenne du marché',
        ],
        highlight: "Demandez explicitement à votre installateur le fabricant et le statut Tier-1 des panneaux. Un installateur sérieux n'installe pas de produits sans marque inconnus.",
      },
      {
        heading: "Quels panneaux PVPro.ch recommande-t-il pour la Suisse?",
        content: [
          "Nous ne recommandons pas de produits spécifiques — c'est le rôle de l'installateur local qui connaît votre toit. Mais nous recommandons ces critères minimaux:",
        ],
        bullets: [
          '✅ Statut Bloomberg Tier-1 ou certification équivalente',
          '✅ Garantie produit au moins 15 ans (mieux 25)',
          '✅ Garantie de performance au moins 85% après 25 ans',
          '✅ Certification IEC 61215',
          "✅ Protection anti-grêle au moins HW3 (HW4–HW5 pour régions à risque)",
          "✅ Construction verre-verre pour régions à risque de grêle",
        ],
      },
    ],
    faqs: [
      { question: "Les panneaux solaires chinois sont-ils moins bons que les européens?", answer: "Non — pas de manière générale. Les fabricants chinois Tier-1 comme LONGi, JinkoSolar et Trina Solar livrent une qualité équivalente ou supérieure aux produits européens. La différence décisive n'est pas entre \"chinois\" et \"européen\", mais entre fabricants Tier-1 et produits sans marque." },
      { question: "Quels panneaux chinois sont recommandables pour la Suisse?", answer: "LONGi (série Hi-MO), JinkoSolar (Tiger Neo), Trina Solar (Vertex S+), JA Solar et AIKO Solar sont des fabricants Tier-1 avec fiabilité prouvée, longues garanties et certifications PVEL." },
      { question: "Quel est le surcoût des panneaux européens par rapport aux chinois?", answer: "Les panneaux européens sont typiquement 20–30% plus chers que les panneaux chinois Tier-1 comparables. Pour une installation de 10 kWc, cela représente un surcoût d'env. CHF 1'500–3'000." },
      { question: "Les panneaux Meyer Burger valent-ils la peine?", answer: "Meyer Burger offre haute qualité, excellentes garanties de performance et gestion de garantie simple en Suisse. Le surcoût par rapport aux alternatives chinoises est d'env. 20–30%. Pour les propriétaires attachés à la qualité suisse, Meyer Burger est un excellent choix." },
      { question: "Qu'est-ce que le statut Tier-1 Bloomberg?", answer: "Le statut Tier-1 Bloomberg atteste que le fabricant est reconnu comme fournisseur fiable pour des projets financés par des banques et satisfait aux normes de qualité. Les panneaux Tier-1 viennent de fabricants capables d'honorer leurs garanties à long terme." },
      { question: "Quels panneaux sont les meilleurs pour les régions à risque de grêle en Suisse?", answer: "Pour les régions à risque comme le canton de Berne: panneaux avec certification anti-grêle HW4 ou HW5 et construction verre-verre: FuturaSun Silk Rhino (HW5), Luxor Eco Line HJT, Meyer Burger Glass, SoliTek Solid." },
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
    intro: '"I won\'t buy Chinese panels" — we hear this often. The reality is different: over 80% of all solar panels installed in Switzerland come from China. Not because installers have no choice — but because Chinese Tier-1 manufacturers now deliver quality that is equivalent to European products in many areas. This article honestly explains where Chinese panels excel, where European ones are better — and what really matters.',
    sections: [
      {
        heading: 'Why do Chinese panels have a bad reputation?',
        content: [
          "The bad reputation dates back to the early 2010s — when low-quality no-name products flooded the market. These modules genuinely had quality problems: faster degradation, weak warranties, poor customer service.",
          "Since then, the industry has fundamentally changed. The major Chinese manufacturers — JinkoSolar, LONGi, Trina Solar, JA Solar, Canadian Solar — have invested billions in research and development. Today they are at least on par with European manufacturers in terms of efficiency, reliability and warranty duration.",
          'The difference is no longer between "Chinese" and "European" — but between Tier-1 manufacturers and no-name products.',
        ],
        stats: [
          { value: '80%+', label: 'of Swiss installations use Chinese panels' },
          { value: '20–30%', label: 'cheaper than European alternatives' },
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
          "Price: Chinese ✅ 20–30% cheaper | European ❌ significantly more expensive.",
          "Efficiency: Chinese ✅ up to 23.8% (AIKO, LONGi) | European ✅ up to 23.5% (Meyer Burger HJT).",
          "Product warranty: Chinese ✅ 25 years standard | European ✅ 25–30 years.",
          "Performance warranty: Chinese ✅ 85–90% after 25 years | European ✅ 88–94% after 25 years.",
          "Warranty handling: Chinese ⚠️ often via Swiss importer | European ✅ direct European contact.",
          "Hail protection Switzerland: Chinese ⚠️ varies by model | European ✅ often better certified.",
          "Environmental footprint: Chinese ❌ longer transport | European ✅ shorter transport.",
        ],
      },
      {
        heading: 'The major Chinese manufacturers',
        content: [
          "LONGi — world market leader in monocrystalline: The Hi-MO Series is one of the best-selling modules in Switzerland. Efficiency up to 23.2%, 25-year product warranty, PVEL Top Performer 2024.",
          "JinkoSolar — Tiger Neo Series: N-Type TOPCon technology with up to 23.3% efficiency and bifacial glass-glass construction. PVEL Top Performer for several years.",
          "Trina Solar — Vertex S+: Founded in 1997, excellent value for money at 22.3% efficiency. PVEL Top Performer eleven times.",
          "AIKO Solar: ABC technology with up to 23.8% efficiency — currently one of the highest commercially available.",
        ],
      },
      {
        heading: 'The European manufacturers',
        content: [
          "Meyer Burger — the Swiss panel: The only Swiss panel manufacturer. HJT technology up to 23.5% efficiency, 92% performance warranty after 25 years. Price approx. 20–30% more expensive. Warranty handling directly in Switzerland.",
          "REC Group — Norway: Founded in 1996, high quality standards, strong performance warranties, European law.",
          "Luxor Solar — Germany: Eco Line HJT Bifacial with 30-year product warranty and excellent temperature behaviour.",
          "SoliTek — Lithuania: European production, 30-year product warranty, HW4 hail certification.",
        ],
      },
      {
        heading: 'Who benefits from European panels?',
        content: [
          "If warranty handling is decisive: In the event of a defect after 10 years, warranty handling with a European manufacturer is much simpler — no language barriers, European law, direct contact.",
          "If hail protection is a priority: In hail-prone regions, panels with HW4 or HW5 hail certification are recommended. Meyer Burger and Luxor Solar excel here.",
          "If environmental footprint matters: Shorter transport routes, European production standards, better recycling infrastructure.",
          "If Swiss quality is a selling point: Meyer Burger from Switzerland has emotional value for many homeowners.",
        ],
      },
      {
        heading: 'Who should choose Chinese Tier-1 panels?',
        content: [
          "If budget plays a role: For the same money, Chinese panels give you a larger system or allow you to also finance battery storage.",
          "If maximum efficiency is the goal: AIKO Solar and LONGi currently offer the highest efficiencies on the market.",
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
          '⚠️ Product warranty under 15 years',
          '⚠️ Performance warranty under 80% after 25 years',
          '⚠️ No European service partner',
          '⚠️ Price significantly below market average',
        ],
        highlight: 'Ask your installer explicitly about the manufacturer and Tier-1 status of the panels. A reputable installer does not install unknown no-name products.',
      },
      {
        heading: 'Which panels does PVPro.ch recommend for Switzerland?',
        content: [
          "We don't recommend specific products — that is the job of the local installer who knows your roof. But we recommend these minimum requirements:",
        ],
        bullets: [
          '✅ Bloomberg Tier-1 status or equivalent certification',
          '✅ Product warranty at least 15 years (25 preferred)',
          '✅ Performance warranty at least 85% after 25 years',
          '✅ IEC 61215 certification',
          '✅ Hail protection at least HW3 (HW4–HW5 for hail-prone regions)',
          '✅ Glass-glass construction for hail-prone regions',
        ],
      },
    ],
    faqs: [
      { question: 'Are Chinese solar panels worse than European ones?', answer: 'No — not categorically. Chinese Tier-1 manufacturers like LONGi, JinkoSolar and Trina Solar deliver quality equivalent or superior to European products. The decisive difference is not between "Chinese" and "European", but between Tier-1 manufacturers and no-name products.' },
      { question: 'Which Chinese solar panels are recommendable for Switzerland?', answer: 'LONGi (Hi-MO Series), JinkoSolar (Tiger Neo), Trina Solar (Vertex S+), JA Solar and AIKO Solar are Tier-1 manufacturers with proven reliability, long warranties and PVEL certifications.' },
      { question: 'What is the price difference between European and Chinese panels?', answer: "European panels are typically 20–30% more expensive than comparable Chinese Tier-1 panels. For a 10 kWp system, this represents a premium of approx. CHF 1'500–3'000." },
      { question: 'Are Meyer Burger panels worth it?', answer: 'Meyer Burger offers high quality, excellent performance warranties and uncomplicated warranty handling in Switzerland. The price premium over Chinese alternatives is approx. 20–30%. For homeowners who value Swiss quality, Meyer Burger is an excellent choice.' },
      { question: 'What is Bloomberg Tier-1 status?', answer: 'Bloomberg Tier-1 status certifies that the manufacturer is recognised as a reliable supplier for bank-financed projects and meets quality standards. Tier-1 modules come from manufacturers capable of honouring their warranties long-term.' },
      { question: 'Which panels are best for hail-prone regions in Switzerland?', answer: 'For hail-prone regions like the canton of Berne: panels with HW4 or HW5 hail certification and glass-glass construction. Recommended: FuturaSun Silk Rhino (HW5), Luxor Eco Line HJT, Meyer Burger Glass, SoliTek Solid.' },
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
    intro: '"Non compro pannelli cinesi" — questa frase la sentiamo spesso. La realtà è diversa: oltre l\'80% di tutti i pannelli solari installati in Svizzera provengono dalla Cina. Non perché gli installatori non abbiano scelta — ma perché i produttori cinesi Tier-1 offrono oggi una qualità equivalente ai prodotti europei in molti settori. Questo articolo spiega onestamente dove i pannelli cinesi sono buoni, dove quelli europei sono migliori — e cosa conta davvero.',
    sections: [
      {
        heading: 'Perché i pannelli cinesi hanno una cattiva reputazione?',
        content: [
          "La cattiva reputazione risale all'inizio degli anni 2010 — quando prodotti di scarsa qualità senza marchio hanno inondato il mercato. Questi moduli avevano veri problemi di qualità: degradazione più rapida, garanzie deboli, assistenza clienti scadente.",
          "Da allora, il settore è cambiato fondamentalmente. I grandi produttori cinesi — JinkoSolar, LONGi, Trina Solar, JA Solar — hanno investito miliardi in ricerca e sviluppo. Oggi sono almeno alla pari con i produttori europei in termini di efficienza, affidabilità e durata della garanzia.",
          "La differenza non è più tra \"cinese\" ed \"europeo\" — ma tra produttori Tier-1 e prodotti senza marchio.",
        ],
        stats: [
          { value: '80%+', label: 'degli impianti svizzeri con pannelli cinesi' },
          { value: '20–30%', label: 'meno costosi delle alternative europee' },
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
          "Prezzo: Cinesi ✅ 20–30% meno costosi | Europei ❌ notevolmente più costosi.",
          "Efficienza: Cinesi ✅ fino al 23.8% (AIKO, LONGi) | Europei ✅ fino al 23.5% (Meyer Burger HJT).",
          "Garanzia prodotto: Cinesi ✅ 25 anni standard | Europei ✅ 25–30 anni.",
          "Garanzia di prestazione: Cinesi ✅ 85–90% dopo 25 anni | Europei ✅ 88–94% dopo 25 anni.",
          "Gestione garanzie: Cinesi ⚠️ spesso tramite importatore svizzero | Europei ✅ interlocutore europeo diretto.",
          "Protezione grandine Svizzera: Cinesi ⚠️ varia a seconda del modello | Europei ✅ spesso meglio certificati.",
          "Bilancio ecologico: Cinesi ❌ trasporti più lunghi | Europei ✅ trasporti più brevi.",
        ],
      },
      {
        heading: "I principali produttori cinesi",
        content: [
          "LONGi: Leader mondiale nel monocristallino. La serie Hi-MO è uno dei moduli più venduti in Svizzera. Efficienza fino al 23.2%, garanzia prodotto 25 anni, PVEL Top Performer 2024.",
          "JinkoSolar — Tiger Neo: Tecnologia N-Type TOPCon con efficienza fino al 23.3% e costruzione bifacciale vetro-vetro. PVEL Top Performer da diversi anni.",
          "Trina Solar — Vertex S+: Fondato nel 1997, eccellente rapporto qualità-prezzo al 22.3% di efficienza. PVEL Top Performer undici volte.",
          "AIKO Solar: Tecnologia ABC con efficienza fino al 23.8% — attualmente tra le più alte disponibili commercialmente.",
        ],
      },
      {
        heading: "I produttori europei",
        content: [
          "Meyer Burger — Il pannello svizzero: Unico produttore svizzero di pannelli. Tecnologia HJT fino al 23.5% di efficienza, garanzia di prestazione 92% dopo 25 anni. Prezzo ca. 20–30% più costoso. Gestione garanzie direttamente in Svizzera.",
          "REC Group — Norvegia: Fondato nel 1996, alti standard qualitativi, forti garanzie di prestazione, diritto europeo.",
          "Luxor Solar — Germania: Eco Line HJT Bifacial con 30 anni di garanzia prodotto e comportamento termico eccellente.",
          "SoliTek — Lituania: Produzione europea, 30 anni di garanzia prodotto, certificazione anti-grandine HW4.",
        ],
      },
      {
        heading: "Per chi vale la pena i pannelli europei?",
        content: [
          "Se la gestione delle garanzie è decisiva: In caso di difetto dopo 10 anni, la gestione della garanzia con un produttore europeo è molto più semplice — nessuna barriera linguistica, diritto europeo, interlocutore diretto.",
          "Se la protezione anti-grandine è prioritaria: Nelle regioni a rischio di grandine si raccomandano moduli con certificazione HW4 o HW5. Meyer Burger e Luxor Solar eccellono in questo.",
          "Se il bilancio ecologico conta: Trasporti più brevi, standard di produzione europei, migliore infrastruttura di riciclaggio.",
          "Se la qualità svizzera è un argomento di vendita: Meyer Burger dalla Svizzera ha un valore emotivo per molti proprietari.",
        ],
      },
      {
        heading: "Per chi i pannelli cinesi Tier-1 sono la scelta giusta?",
        content: [
          "Se il budget è un fattore: Per lo stesso denaro con pannelli cinesi ottenete un impianto più grande o potete finanziare un sistema di accumulo.",
          "Se si vuole massimizzare l'efficienza: AIKO Solar e LONGi offrono attualmente le efficienze più elevate sul mercato.",
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
          '⚠️ Garanzia prodotto inferiore a 15 anni',
          '⚠️ Garanzia di prestazione inferiore all\'80% dopo 25 anni',
          '⚠️ Nessun partner di servizio europeo',
          '⚠️ Prezzo notevolmente inferiore alla media di mercato',
        ],
        highlight: "Chiedete esplicitamente al vostro installatore il produttore e lo status Tier-1 dei moduli. Un installatore serio non monta prodotti sconosciuti senza marchio.",
      },
      {
        heading: "Quali moduli raccomanda PVPro.ch per la Svizzera?",
        content: [
          "Non raccomandiamo prodotti specifici — è compito dell'installatore locale che conosce il vostro tetto. Ma raccomandiamo questi requisiti minimi:",
        ],
        bullets: [
          '✅ Status Bloomberg Tier-1 o certificazione equivalente',
          '✅ Garanzia prodotto almeno 15 anni (meglio 25)',
          '✅ Garanzia di prestazione almeno 85% dopo 25 anni',
          '✅ Certificazione IEC 61215',
          '✅ Protezione anti-grandine almeno HW3 (HW4–HW5 per regioni a rischio)',
          '✅ Costruzione vetro-vetro per regioni a rischio di grandine',
        ],
      },
    ],
    faqs: [
      { question: "I pannelli solari cinesi sono peggiori di quelli europei?", answer: "No — non in modo categorico. I produttori cinesi Tier-1 come LONGi, JinkoSolar e Trina Solar offrono una qualità equivalente o superiore ai prodotti europei. La differenza decisiva non è tra \"cinese\" ed \"europeo\", ma tra produttori Tier-1 e prodotti senza marchio." },
      { question: "Quali pannelli cinesi sono raccomandabili per la Svizzera?", answer: "LONGi (serie Hi-MO), JinkoSolar (Tiger Neo), Trina Solar (Vertex S+), JA Solar e AIKO Solar sono produttori Tier-1 con affidabilità comprovata, lunghe garanzie e certificazioni PVEL." },
      { question: "Qual è la differenza di prezzo tra pannelli europei e cinesi?", answer: "I pannelli europei sono tipicamente il 20–30% più costosi dei pannelli cinesi Tier-1 comparabili. Per un impianto da 10 kWp, ciò corrisponde a un sovrapprezzo di ca. CHF 1'500–3'000." },
      { question: "Vale la pena i pannelli Meyer Burger?", answer: "Meyer Burger offre alta qualità, eccellenti garanzie di prestazione e gestione delle garanzie semplice in Svizzera. Il sovrapprezzo rispetto alle alternative cinesi è ca. 20–30%. Per i proprietari che valorizzano la qualità svizzera, Meyer Burger è una scelta eccellente." },
      { question: "Cos'è lo status Tier-1 Bloomberg?", answer: "Lo status Tier-1 Bloomberg certifica che il produttore è riconosciuto come fornitore affidabile per progetti finanziati da banche e soddisfa gli standard di qualità. I moduli Tier-1 provengono da produttori in grado di onorare le garanzie a lungo termine." },
      { question: "Quali moduli sono i migliori per le regioni a rischio di grandine in Svizzera?", answer: "Per regioni a rischio come il Canton Berna: moduli con certificazione anti-grandine HW4 o HW5 e costruzione vetro-vetro. Raccomandati: FuturaSun Silk Rhino (HW5), Luxor Eco Line HJT, Meyer Burger Glass, SoliTek Solid." },
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
          'Die ehrliche Antwort: weniger als auf einem Süddach — aber mehr als viele denken. Erträge je nach Ausrichtung und Neigung: Süd 30–35° = 100% (Referenz). Ost/West 30° = 90–95%. Nord 20° = 70%. Nord 30° = 61%. Nord 40° = 50–55%. Flaches Norddach 7–10° = 75–80%.',
          "Was das in der Praxis bedeutet: Eine 10-kWp-Anlage auf einem Süddach produziert in der Schweiz ca. 10'000 kWh/Jahr. Dieselbe Anlage auf einem Norddach mit 30° produziert ca. 6'100 kWh/Jahr. Auf einem flachen Norddach (10°) sind es ca. 7'500–8'000 kWh/Jahr.",
          'Die wichtigste Erkenntnis: Je flacher das Norddach, desto besser der Ertrag.',
        ],
        stats: [
          { value: '60–70%', label: 'Ertrag vs. Süddach — besser als gedacht' },
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
          '✅ Die Dachneigung flach ist (unter 25°) — Ertrag 70–80% des Süddachs',
          '✅ Der Eigenverbrauch hoch ist — wer den Strom selbst verbraucht, profitiert auch von weniger Produktion',
          '✅ Ein Batteriespeicher vorhanden ist — speichert den Tagesstrom für den Abend',
          '✅ Keine Südfläche verfügbar ist — Norddach als einzige Option',
          '✅ Das Norddach zusätzlich zur Südfläche genutzt wird — Kombination maximiert die Produktion',
          '✅ Ein Elektroauto oder eine Wärmepumpe vorhanden ist — hoher Eigenverbrauch macht Nordanlagen rentabel',
          '❌ Die Dachneigung sehr steil ist (über 40°) — Ertrag fällt auf 50–55%',
          '❌ Zusätzliche Verschattung vorhanden ist — Norddach + Verschattung = sehr wenig Strom',
          '❌ Eine Südfläche ungenutzt ist — zuerst Süd belegen, dann Nordfläche prüfen',
        ],
      },
      {
        heading: 'Kombination Süd- und Norddach — die beste Lösung',
        content: [
          'Wenn Ihr Haus ein Satteldach mit Süd- und Nordseite hat, ist die optimale Strategie oft: beide Seiten belegen.',
          'Vorteile: Mehr Gesamtproduktion, gleichmässigere Produktion morgens und abends, höherer Eigenverbrauch, optimale Tagesabdeckung (Norddach morgens/abends + Süddach mittags).',
          "Praxisbeispiel Luzern — 6 kWp Süd (30°) + 4 kWp Nord (30°): Süddach ca. 6'000 kWh/Jahr. Norddach ca. 2'440 kWh/Jahr. Total ca. 8'440 kWh/Jahr. Mit Speicher ca. 5'500 kWh Eigenverbrauch = CHF 1'650 gespart. Das Norddach trägt ca. 29% zur Gesamtproduktion bei — nicht ideal, aber klar positiv.",
        ],
      },
      {
        heading: 'Was ist der optimale Neigungswinkel für ein Norddach?',
        content: [
          'Faustregel: Je flacher, desto besser — mit einer Untergrenze von 7°. Erträge nach Neigungswinkel: 7–10° = 75–80% (sehr gut). 15–20° = 70–75% (gut). 25–30° = 62–70% (akzeptabel). 35–40° = 55–62% (grenzwertig). 45°+ = unter 55% (nicht empfehlenswert).',
          'Achtung: Unter 7° gibt es Probleme mit der Selbstreinigung — Regenwasser fliesst schlecht ab, was zu Verschmutzung und reduziertem Ertrag führt.',
        ],
      },
      {
        heading: 'Welche Module eignen sich besonders für Norddächer?',
        content: [
          'Gute Leistung bei diffusem Licht: Monokristalline N-Typ-Module (TOPCon, HJT) produzieren bei bewölktem Himmel besser als ältere PERC-Technologie — besonders empfehlenswert für Norddächer.',
          'Bifaziale Module: Auf dem Norddach können bifaziale Module von reflektiertem Licht der Dachziegel profitieren — der Mehrertrag ist aber gering und rechtfertigt den Mehrpreis selten.',
          'Empfehlung: Tier-1-Hersteller mit TOPCon oder HJT-Technologie, mindestens 21% Wirkungsgrad.',
        ],
      },
      {
        heading: 'Rechnet sich das trotzdem? Rechenbeispiel Norddach Zürich',
        content: [
          "Ausgangslage: Einfamilienhaus Zürich, Norddach 25°, 10 kWp. Jahresproduktion: ca. 6'100 kWh. Eigenverbrauch 40% = 2'440 kWh. Einspeisung 3'660 kWh × CHF 0.08 = CHF 293.",
          "Jährliche Ersparnis: Eigenverbrauch 2'440 × CHF 0.30 = CHF 732. Einspeisung CHF 293. Total CHF 1'025/Jahr.",
          "Investition nach EIV und Steuerabzug: ca. CHF 12'300 netto. Amortisation: ca. 12 Jahre.",
          "Mit Batteriespeicher steigt der Eigenverbrauch auf 65% → CHF 1'350/Jahr. Vergleich Süddach: ca. CHF 1'500–1'700/Jahr, Amortisation 8–10 Jahre. Das Norddach lohnt sich — aber weniger als ein Süddach.",
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
      { question: 'Lohnt sich eine Solaranlage auf dem Norddach in der Schweiz?', answer: 'Ja, unter bestimmten Bedingungen. Bei flacher Dachneigung (unter 25°) und hohem Eigenverbrauch kann auch ein Norddach wirtschaftlich betrieben werden. Der Ertrag liegt bei 60–80% eines Süddachs — die Amortisation dauert etwas länger, aber die Anlage rechnet sich.' },
      { question: 'Wie viel Strom produziert eine Solaranlage auf dem Norddach?', answer: "Abhängig von der Dachneigung: Bei 20° ca. 70% des Süddach-Ertrags, bei 30° ca. 61%, bei flachen Dächern (10°) bis zu 80%. In der Schweiz, wo diffuses Licht häufig ist, ist der Unterschied oft kleiner als erwartet." },
      { question: 'Welcher Neigungswinkel ist optimal für ein Norddach?', answer: 'Je flacher, desto besser — mit einer Untergrenze von 7°. Bei 7–20° Neigung erzielt ein Norddach die besten relativen Erträge. Steilere Norddächer über 40° sind eher nicht empfehlenswert.' },
      { question: 'Kann ich Süd- und Norddach gleichzeitig belegen?', answer: 'Ja, und das ist oft die beste Lösung. Die Nordseite ergänzt die Südseite — morgens und abends trägt das Norddach zur Produktion bei. Der Gesamtertrag steigt und die Eigenverbrauchsquote verbessert sich.' },
      { question: 'Welche Module eignen sich am besten für Norddächer?', answer: 'Monokristalline N-Typ-Module (TOPCon oder HJT) von Tier-1-Herstellern. Sie produzieren besser bei diffusem Licht — das macht den Unterschied beim Norddach.' },
      { question: 'Hilft ein Batteriespeicher beim Norddach?', answer: 'Ja, deutlich. Ein Speicher erhöht den Eigenverbrauch von ca. 40% auf 65–75%. Da beim Norddach die Einspeisevergütung ohnehin gering ist, macht der Speicher wirtschaftlich besonders Sinn.' },
    ],
    ctaHeading: 'Auch mit Norddach — kostenlos prüfen lassen',
    ctaText: 'Ein zertifizierter Installateur aus Ihrer Region analysiert Ihr Dach und sagt Ihnen ehrlich, ob sich eine Solaranlage lohnt — auch bei Nordausrichtung. Kostenlos bis zu 3 Offerten vergleichen.',
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
          "La réponse honnête: moins que sur un toit sud — mais plus que beaucoup ne le pensent. Rendements selon l'orientation et l'inclinaison: Sud 30–35° = 100% (référence). Est/Ouest 30° = 90–95%. Nord 20° = 70%. Nord 30° = 61%. Nord 40° = 50–55%. Toit nord plat 7–10° = 75–80%.",
          "Ce que cela signifie en pratique: Une installation de 10 kWc sur un toit sud produit en Suisse env. 10'000 kWh/an. La même installation sur un toit nord à 30° produit env. 6'100 kWh/an. Sur un toit nord plat (10°), c'est env. 7'500–8'000 kWh/an.",
          "L'enseignement clé: Plus le toit nord est plat, meilleur est le rendement.",
        ],
        stats: [
          { value: '60–70%', label: "rendement vs. toit sud — mieux que prévu" },
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
          "✅ La pente est faible (moins de 25°) — rendement 70–80% d'un toit sud",
          "✅ L'autoconsommation est élevée — qui consomme lui-même profite même avec moins de production",
          "✅ Un système de stockage est présent — stocke l'électricité diurne pour le soir",
          "✅ Aucune surface sud n'est disponible — toit nord comme seule option",
          "✅ Le toit nord s'ajoute à une surface sud — la combinaison maximise la production",
          "✅ Une voiture électrique ou pompe à chaleur est présente — haute autoconsommation rend les installations nord rentables",
          "❌ La pente est très raide (plus de 40°) — rendement tombe à 50–55%",
          "❌ Un ombrage supplémentaire existe — toit nord + ombrage = très peu d'électricité",
          "❌ Une surface sud est inutilisée — occuper d'abord le sud, puis examiner le nord",
        ],
      },
      {
        heading: "Combinaison toit sud et nord — la meilleure solution",
        content: [
          "Si votre maison a un toit à deux pans avec côté sud et nord, la stratégie optimale est souvent: occuper les deux côtés.",
          "Avantages: Plus de production totale, production plus régulière matin et soir, meilleure autoconsommation, couverture optimale de la journée (nord matin/soir + sud midi).",
          "Exemple pratique Lucerne — 6 kWc sud (30°) + 4 kWc nord (30°): Toit sud env. 6'000 kWh/an. Toit nord env. 2'440 kWh/an. Total env. 8'440 kWh/an. Avec stockage env. 5'500 kWh autoconsommés = CHF 1'650 économisés. Le toit nord contribue env. 29% à la production totale — pas idéal, mais clairement positif.",
        ],
      },
      {
        heading: "Quel est l'angle d'inclinaison optimal pour un toit nord?",
        content: [
          "Règle générale: Plus c'est plat, mieux c'est — avec une limite inférieure de 7°. Rendements selon l'angle: 7–10° = 75–80% (très bon). 15–20° = 70–75% (bon). 25–30° = 62–70% (acceptable). 35–40° = 55–62% (limite). 45°+ = moins de 55% (déconseillé).",
          "Attention: En dessous de 7° d'inclinaison, il y a des problèmes d'auto-nettoyage — l'eau de pluie ne s'écoule plus bien, ce qui entraîne des salissures et une production réduite.",
        ],
      },
      {
        heading: "Quels modules conviennent particulièrement aux toits nord?",
        content: [
          "Bonne performance sous lumière diffuse: Les modules monocristallins N-Type (TOPCon, HJT) produisent mieux par temps couvert et sous lumière diffuse que l'ancienne technologie PERC — particulièrement recommandés pour les toits nord.",
          "Modules bifaciaux: Sur le toit nord, les modules bifaciaux peuvent bénéficier de la lumière réfléchie par les tuiles — mais le gain est faible et justifie rarement le surcoût.",
          "Recommandation: Fabricants Tier-1 avec technologie TOPCon ou HJT et au moins 21% de rendement.",
        ],
      },
      {
        heading: "Est-ce quand même rentable? Exemple de calcul toit nord Zurich",
        content: [
          "Situation de départ: Maison individuelle Zurich, toit nord 25°, 10 kWc. Production annuelle: env. 6'100 kWh. Autoconsommation 40% = 2'440 kWh. Injection 3'660 kWh × CHF 0.08 = CHF 293.",
          "Économies annuelles: Autoconsommation 2'440 × CHF 0.30 = CHF 732. Injection CHF 293. Total CHF 1'025/an.",
          "Investissement après SRI et déduction fiscale: env. CHF 12'300 net. Amortissement: env. 12 ans.",
          "Avec système de stockage: autoconsommation monte à 65% → CHF 1'350/an. Comparaison toit sud: env. CHF 1'500–1'700/an, amortissement 8–10 ans. Le toit nord est rentable — mais moins qu'un toit sud.",
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
      { question: "Une installation solaire sur un toit nord vaut-elle la peine en Suisse?", answer: "Oui, sous certaines conditions. Avec une pente faible (moins de 25°) et une autoconsommation élevée, un toit nord peut être rentable. Le rendement se situe à 60–80% d'un toit sud — l'amortissement dure un peu plus longtemps, mais l'installation est quand même rentable." },
      { question: "Quelle quantité d'électricité produit une installation sur un toit nord?", answer: "Selon la pente: à 20° env. 70% du rendement d'un toit sud, à 30° env. 61%, sur des toits plats (10°) jusqu'à 80%. En Suisse, où la lumière diffuse est fréquente, la différence est souvent plus petite qu'attendu." },
      { question: "Quel angle d'inclinaison est optimal pour un toit nord?", answer: "Plus c'est plat, mieux c'est — avec une limite inférieure de 7°. À 7–20° d'inclinaison, un toit nord atteint les meilleurs rendements relatifs. Les toits nord raides de plus de 40° sont déconseillés." },
      { question: "Puis-je équiper simultanément un toit sud et nord?", answer: "Oui, et c'est souvent la meilleure solution. Le côté nord complète le côté sud — le matin et le soir, le toit nord contribue à la production. Le rendement total augmente et le taux d'autoconsommation s'améliore." },
      { question: "Quels modules conviennent le mieux aux toits nord?", answer: "Modules monocristallins N-Type (TOPCon ou HJT) de fabricants Tier-1. Ils produisent mieux sous lumière diffuse — ce qui fait la différence sur un toit nord." },
      { question: "Un système de stockage aide-t-il avec un toit nord?", answer: "Oui, nettement. Un stockage augmente l'autoconsommation de env. 40% à 65–75%. Comme la rémunération de l'injection est de toute façon faible avec un toit nord, le stockage est économiquement particulièrement judicieux." },
    ],
    ctaHeading: "Même avec un toit nord — faites vérifier gratuitement",
    ctaText: "Un installateur certifié de votre région analyse votre toit et vous dit honnêtement si une installation solaire vaut la peine — même avec une orientation nord. Comparez gratuitement jusqu'à 3 devis.",
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
          "The honest answer: less than on a south-facing roof — but more than many think. Yields by orientation and pitch: South 30–35° = 100% (reference). East/West 30° = 90–95%. North 20° = 70%. North 30° = 61%. North 40° = 50–55%. Flat north roof 7–10° = 75–80%.",
          "What this means in practice: A 10 kWp system on an optimal south-facing roof produces approx. 10'000 kWh/year in Switzerland. The same system on a north-facing roof at 30° produces approx. 6'100 kWh/year. On a flat north roof (10°) it is approx. 7'500–8'000 kWh/year.",
          "The key insight: The flatter the north-facing roof, the better the yield.",
        ],
        stats: [
          { value: '60–70%', label: 'yield vs. south roof — better than expected' },
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
          '✅ The pitch is shallow (under 25°) — yield 70–80% of a south roof',
          '✅ Self-consumption is high — those who use the electricity themselves benefit even from less production',
          '✅ A battery storage system is in place — stores daytime electricity for the evening',
          '✅ No south-facing surface is available — north roof as the only option',
          '✅ The north roof is used in addition to a south surface — combination maximises total production',
          '✅ An EV or heat pump is present — high self-consumption makes north installations viable',
          '❌ The pitch is very steep (over 40°) — yield drops to 50–55%',
          '❌ Additional shading is present — north roof + shading = very little electricity',
          '❌ A south-facing surface is unused — cover south first, then check north',
        ],
      },
      {
        heading: 'South and north roof combination — the best solution',
        content: [
          "If your house has a gable roof with south and north sides, the optimal strategy is often: cover both sides.",
          "Advantages: More total production, more consistent production morning and evening, higher self-consumption, optimal daily coverage (north in morning/evening + south at midday).",
          "Practical example Lucerne — 6 kWp south (30°) + 4 kWp north (30°): South roof approx. 6'000 kWh/year. North roof approx. 2'440 kWh/year. Total approx. 8'440 kWh/year. With storage approx. 5'500 kWh self-consumed = CHF 1'650 saved. The north roof contributes approx. 29% to total production — not ideal, but clearly positive.",
        ],
      },
      {
        heading: 'What is the optimal pitch angle for a north-facing roof?',
        content: [
          "Rule of thumb: The flatter the better — with a lower limit of 7°. Yields by pitch: 7–10° = 75–80% (very good). 15–20° = 70–75% (good). 25–30° = 62–70% (acceptable). 35–40° = 55–62% (borderline). 45°+ = under 55% (not recommended).",
          "Caution: Below 7° pitch there are self-cleaning problems — rainwater cannot drain well, leading to dirt build-up and reduced yield.",
        ],
      },
      {
        heading: 'Which modules are particularly suited to north-facing roofs?',
        content: [
          "Good performance in diffuse light: Monocrystalline N-Type modules (TOPCon, HJT) produce better in overcast conditions and diffuse light than older PERC technology — particularly recommended for north-facing roofs.",
          "Bifacial modules: On the north roof, bifacial modules can benefit from light reflected by roof tiles — but the additional yield is small and rarely justifies the extra cost.",
          "Recommendation: Tier-1 manufacturers with TOPCon or HJT technology, at least 21% efficiency.",
        ],
      },
      {
        heading: 'Is it still worth it financially? North-facing roof calculation example Zurich',
        content: [
          "Starting point: Single-family home Zurich, north roof 25°, 10 kWp. Annual production: approx. 6'100 kWh. Self-consumption 40% = 2'440 kWh. Feed-in: 3'660 kWh × CHF 0.08 = CHF 293.",
          "Annual savings: Self-consumption 2'440 × CHF 0.30 = CHF 732. Feed-in CHF 293. Total CHF 1'025/year.",
          "Investment after OTP and tax deduction: approx. CHF 12'300 net. Payback: approx. 12 years.",
          "With battery storage: self-consumption rises to 65% → CHF 1'350/year. Comparison south roof: approx. CHF 1'500–1'700/year, payback 8–10 years. The north roof is viable — but less profitable than a south roof.",
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
      { question: 'Is solar worth it on a north-facing roof in Switzerland?', answer: 'Yes, under certain conditions. With a shallow pitch (under 25°) and high self-consumption, a north-facing roof can be economically viable. Yield is 60–80% of a south roof — payback takes a little longer, but the system is still profitable.' },
      { question: 'How much electricity does a solar system produce on a north-facing roof?', answer: "Depending on pitch: at 20° approx. 70% of south roof yield, at 30° approx. 61%, on flat roofs (10°) up to 80%. In Switzerland, where diffuse light is common, the difference is often smaller than expected." },
      { question: 'What pitch angle is optimal for a north-facing roof?', answer: 'The flatter the better — with a lower limit of 7°. At 7–20° pitch, a north-facing roof achieves the best relative yields. Steeper north roofs above 40° are not recommended.' },
      { question: 'Can I cover south and north roof simultaneously?', answer: 'Yes, and this is often the best solution. The north side complements the south — morning and evening the north roof contributes to production. Total yield increases and self-consumption rate improves.' },
      { question: 'Which modules are best for north-facing roofs?', answer: 'Monocrystalline N-Type modules (TOPCon or HJT technology) from Tier-1 manufacturers. They produce better in diffuse light — which makes the difference on a north roof.' },
      { question: 'Does battery storage help with a north-facing roof?', answer: 'Yes, significantly. Storage increases self-consumption from approx. 40% to 65–75%. Since the feed-in tariff is already low with a north roof, storage makes particularly good economic sense.' },
    ],
    ctaHeading: 'Even with a north-facing roof — get a free assessment',
    ctaText: 'A certified installer in your region will analyse your roof and tell you honestly whether solar makes sense — even with a north orientation. Get up to 3 quotes for free.',
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
          "La risposta onesta: meno che su un tetto sud — ma più di quanto molti pensino. Rese a seconda dell'orientamento e della pendenza: Sud 30–35° = 100% (riferimento). Est/Ovest 30° = 90–95%. Nord 20° = 70%. Nord 30° = 61%. Nord 40° = 50–55%. Tetto nord piatto 7–10° = 75–80%.",
          "Cosa significa in pratica: Un impianto da 10 kWp su un tetto sud produce in Svizzera ca. 10'000 kWh/anno. Lo stesso impianto su un tetto nord a 30° produce ca. 6'100 kWh/anno. Su un tetto nord piatto (10°) sono ca. 7'500–8'000 kWh/anno.",
          "Il messaggio chiave: Più piatto è il tetto nord, migliore è la resa.",
        ],
        stats: [
          { value: '60–70%', label: 'resa vs. tetto sud — meglio del previsto' },
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
          "✅ La pendenza è ridotta (meno di 25°) — resa 70–80% del tetto sud",
          "✅ L'autoconsumo è elevato — chi consuma la corrente in proprio beneficia anche di una produzione inferiore",
          "✅ È presente un sistema di accumulo — immagazzina la corrente diurna per la sera",
          "✅ Non è disponibile una superficie sud — tetto nord come unica opzione",
          "✅ Il tetto nord è usato in aggiunta alla superficie sud — la combinazione massimizza la produzione",
          "✅ È presente un'auto elettrica o pompa di calore — l'alto autoconsumo rende redditizi anche gli impianti nord",
          "❌ La pendenza è molto ripida (oltre 40°) — la resa scende al 50–55%",
          "❌ È presente ulteriore ombreggiamento — tetto nord + ombra = pochissima corrente",
          "❌ Una superficie sud è inutilizzata — prima occupare il sud, poi valutare il nord",
        ],
      },
      {
        heading: 'Combinazione tetto sud e nord — la soluzione migliore',
        content: [
          "Se la vostra casa ha un tetto a capanna con lato sud e nord, la strategia ottimale è spesso: occupare entrambi i lati.",
          "Vantaggi: Più produzione totale, produzione più uniforme mattino e sera, maggiore autoconsumo, copertura ottimale della giornata (nord mattino/sera + sud mezzogiorno).",
          "Esempio pratico Lucerna — 6 kWp sud (30°) + 4 kWp nord (30°): Tetto sud ca. 6'000 kWh/anno. Tetto nord ca. 2'440 kWh/anno. Totale ca. 8'440 kWh/anno. Con accumulo ca. 5'500 kWh autoconsumati = CHF 1'650 risparmiati. Il tetto nord contribuisce ca. il 29% alla produzione totale — non ideale, ma chiaramente positivo.",
        ],
      },
      {
        heading: "Qual è l'angolo di inclinazione ottimale per un tetto nord?",
        content: [
          "Regola generale: Più piatto è meglio — con un limite inferiore di 7°. Rese per angolo di inclinazione: 7–10° = 75–80% (ottimo). 15–20° = 70–75% (buono). 25–30° = 62–70% (accettabile). 35–40° = 55–62% (limite). 45°+ = meno del 55% (sconsigliato).",
          "Attenzione: Sotto i 7° di inclinazione ci sono problemi di autopulizia — l'acqua piovana non defluisce bene, causando sporcizia e resa ridotta.",
        ],
      },
      {
        heading: 'Quali moduli sono particolarmente adatti ai tetti nord?',
        content: [
          "Buona resa con luce diffusa: I moduli monocristallini di tipo N (TOPCon, HJT) producono meglio con cielo coperto e luce diffusa rispetto alla vecchia tecnologia PERC — particolarmente raccomandati per i tetti nord.",
          "Moduli bifacciali: Sul tetto nord i moduli bifacciali possono beneficiare della luce riflessa dalle tegole — ma il guadagno è ridotto e raramente giustifica il costo aggiuntivo.",
          "Raccomandazione: Produttori Tier-1 con tecnologia TOPCon o HJT, almeno il 21% di efficienza.",
        ],
      },
      {
        heading: 'Vale comunque la pena finanziariamente? Esempio di calcolo tetto nord Zurigo',
        content: [
          "Situazione di partenza: Casa unifamiliare Zurigo, tetto nord 25°, 10 kWp. Produzione annua: ca. 6'100 kWh. Autoconsumo 40% = 2'440 kWh. Immissione: 3'660 kWh × CHF 0.08 = CHF 293.",
          "Risparmio annuo: Autoconsumo 2'440 × CHF 0.30 = CHF 732. Immissione CHF 293. Totale CHF 1'025/anno.",
          "Investimento dopo CUB e deduzione fiscale: ca. CHF 12'300 netto. Ammortamento: ca. 12 anni.",
          "Con sistema di accumulo: l'autoconsumo sale al 65% → CHF 1'350/anno. Confronto tetto sud: ca. CHF 1'500–1'700/anno, ammortamento 8–10 anni. Il tetto nord è redditizio — ma meno di un tetto sud.",
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
      { question: "Vale la pena un impianto solare su un tetto nord in Svizzera?", answer: "Sì, a determinate condizioni. Con una pendenza ridotta (meno di 25°) e un alto autoconsumo, anche un tetto nord può essere redditizio. La resa è del 60–80% di un tetto sud — l'ammortamento richiede un po' più tempo, ma l'impianto si ripaga comunque." },
      { question: "Quanta corrente produce un impianto solare su un tetto nord?", answer: "A seconda della pendenza: a 20° ca. il 70% della resa di un tetto sud, a 30° ca. il 61%, su tetti piatti (10°) fino all'80%. In Svizzera, dove la luce diffusa è frequente, la differenza è spesso minore del previsto." },
      { question: "Qual è l'angolo di inclinazione ottimale per un tetto nord?", answer: "Più piatto è meglio — con un limite inferiore di 7°. Con 7–20° di inclinazione un tetto nord ottiene le migliori rese relative. I tetti nord ripidi oltre i 40° non sono raccomandati." },
      { question: "Posso equipaggiare contemporaneamente un tetto sud e nord?", answer: "Sì, ed è spesso la soluzione migliore. Il lato nord completa il lato sud — al mattino e alla sera il tetto nord contribuisce alla produzione. La resa totale aumenta e il tasso di autoconsumo migliora." },
      { question: "Quali moduli sono più adatti ai tetti nord?", answer: "Moduli monocristallini di tipo N (TOPCon o HJT) di produttori Tier-1. Producono meglio con luce diffusa — il che fa la differenza su un tetto nord." },
      { question: "Un sistema di accumulo aiuta con un tetto nord?", answer: "Sì, notevolmente. Un accumulo aumenta l'autoconsumo da ca. il 40% al 65–75%. Poiché con un tetto nord il compenso per l'immissione è comunque basso, il sistema di accumulo ha un particolare senso economico." },
    ],
    ctaHeading: "Anche con tetto nord — fatelo verificare gratuitamente",
    ctaText: "Un installatore certificato della vostra regione analizza il vostro tetto e vi dice onestamente se un impianto solare vale la pena — anche con orientamento nord. Richiedete gratuitamente fino a 3 preventivi.",
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

export function getBlogArticle(slug: string, locale: string): BlogArticle | undefined {
  return articles.find(a => a.slug === slug && a.locale === locale);
}

export function getBlogArticleSlugs(): string[] {
  return [...new Set(articles.map(a => a.slug))];
}
