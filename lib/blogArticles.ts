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
  faqs: { question: string; answer: string }[];
}

const articles: BlogArticle[] = [

  // ─── BALKONKRAFTWERK (DE) ─────────────────────────────────────────────────
  {
    slug: 'balkonkraftwerk-schweiz',
    locale: 'de',
    title: 'Balkonkraftwerk Schweiz: erlaubt, Kosten und lohnt es sich wirklich?',
    metaDescription: 'Sind Balkonkraftwerke in der Schweiz erlaubt? Kosten, Regeln und ob sich ein Balkonkraftwerk lohnt – mit ehrlichem Vergleich zur vollwertigen Solaranlage.',
    image: '/images/balkonkraftwerk-schweiz.png',
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
    image: '/images/balkonkraftwerk-schweiz.png',
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
    image: '/images/balkonkraftwerk-schweiz.png',
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
    image: '/images/balkonkraftwerk-schweiz.png',
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
    image: '/images/blog-1.png',
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
    image: '/images/blog-1.png',
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
    image: '/images/blog-1.png',
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
    image: '/images/blog-1.png',
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
    image: '/images/blog-2.png',
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
    image: '/images/blog-2.png',
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
    image: '/images/blog-2.png',
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
    image: '/images/blog-2.png',
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
    image: '/images/blog-3.png',
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
    image: '/images/blog-3.png',
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
    image: '/images/blog-3.png',
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
    image: '/images/blog-3.png',
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
    image: '/images/blog-4.png',
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
    image: '/images/blog-4.png',
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
    image: '/images/blog-4.png',
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
    image: '/images/blog-4.png',
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
    image: '/images/blog-5.png',
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
    image: '/images/blog-5.png',
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
    image: '/images/blog-5.png',
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
    image: '/images/blog-5.png',
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
    image: '/images/blog-6.png',
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
    image: '/images/blog-6.png',
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
    image: '/images/blog-6.png',
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
    image: '/images/blog-6.png',
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

];

export function getBlogArticle(slug: string, locale: string): BlogArticle | undefined {
  return articles.find(a => a.slug === slug && a.locale === locale);
}

export function getBlogArticleSlugs(): string[] {
  return [...new Set(articles.map(a => a.slug))];
}
