export interface ReviewText {
  quote: string;
  detail: string;
  location: string;
}

export interface ReviewBase {
  name: string;
  kWp: string;
  photo: string;
  photoPosition?: string;
}

export const reviewBase: ReviewBase[] = [
  { name: 'Markus B., Wil SG', kWp: '30 kWp', photo: '/images/projects/project1.png' },
  { name: 'Sandra K., Bülach ZH', kWp: '13 kWp', photo: '/images/projects/project2.png' },
  { name: 'Peter H., Chur GR', kWp: '25 kWp', photo: '/images/projects/project3.png' },
  { name: 'Nadia F., Frauenfeld TG', kWp: '12 kWp', photo: '/images/projects/project4.jpg' },
  { name: 'Thomas R., Olten SO', kWp: '13 kWp', photo: '/images/projects/project5.jpg' },
  { name: 'Claudia W., Luzern', kWp: '20 kWp', photo: '/images/projects/project6.jpg', photoPosition: '72% 50%' },
];

export const reviewTexts: Record<'de' | 'fr' | 'en' | 'it', ReviewText[]> = {
  de: [
    {
      quote: 'Kein einziger Werbeanruf – genau das hatte ich befürchtet.',
      detail: 'Bei so einem Vergleichsportal rechnet man ja fast damit, dass danach das Telefon nicht mehr stillsteht. Bei mir kam nichts dergleichen. Ich habe die drei Offerten per Mail bekommen und konnte in Ruhe schauen, ohne dass mich jemand bedrängt hat.',
      location: 'Gewerbegebäude, Wil',
    },
    {
      quote: 'Ich habe auf den Haken gewartet – es gab keinen.',
      detail: 'Ehrlich gesagt dachte ich, irgendwo kommt dann noch eine Rechnung oder eine versteckte Gebühr. Nichts davon. Der Vergleich war wirklich gratis, und die Offerten kamen direkt von den Installateuren, ohne Zwischenkosten.',
      location: 'Einfamilienhaus, Bülach',
    },
    {
      quote: 'Kein Billiganbieter, sondern ein Fachbetrieb aus der Nähe.',
      detail: 'Meine Sorge war, dass ich an irgendeine anonyme Firma gerate. Stattdessen kam die Offerte von einem Betrieb aus dem Nachbarort, den sogar mein Nachbar schon kannte. Die Anlage läuft jetzt seit dem Sommer einwandfrei.',
      location: 'Grossanlage, Chur',
    },
    {
      quote: 'Wirklich drei Offerten – und ich konnte selber vergleichen.',
      detail: 'Ich hatte erwartet, dass man mich einfach an eine einzige Firma weiterreicht. Es waren tatsächlich drei unabhängige Angebote mit unterschiedlichen Preisen. Erst dadurch habe ich gemerkt, wie gross die Unterschiede sein können.',
      location: 'Wohnhaus, Ticino',
    },
    {
      quote: "War skeptisch gegenüber Vergleichsportalen – am Ende über 4'000 Franken gespart.",
      detail: "Von solchen Seiten halte ich normalerweise wenig. Aber die günstigste der drei Offerten lag deutlich unter dem, was mir eine Firma vorher direkt angeboten hatte. Rund 4'000 Franken Unterschied für praktisch dieselbe Anlage.",
      location: 'Flachdach, Olten',
    },
    {
      quote: 'In der Mittagspause ausgefüllt, am nächsten Tag die Offerten gehabt.',
      detail: 'Ich hatte mit viel Aufwand gerechnet, Formulare, Rückfragen, das ganze Theater. War aber in ein paar Minuten erledigt. Einzig eine Offerte kam erst zwei Tage später, aber das war völlig okay.',
      location: 'Mehrfamilienhaus, Luzern',
    },
  ],
  fr: [
    {
      quote: "Pas un seul appel publicitaire – exactement ce que je craignais.",
      detail: "Avec ce genre de portail de comparaison, on s'attend presque à ce que le téléphone ne s'arrête plus de sonner. Rien de tel chez moi. J'ai reçu les trois devis par e-mail et j'ai pu les examiner tranquillement, sans que personne ne me mette la pression.",
      location: 'Bâtiment commercial, Wil',
    },
    {
      quote: "J'attendais le piège – il n'y en avait pas.",
      detail: "Honnêtement, je pensais qu'une facture ou des frais cachés allaient surgir quelque part. Rien de tout ça. La comparaison était vraiment gratuite, et les devis venaient directement des installateurs, sans coûts intermédiaires.",
      location: 'Maison individuelle, Bülach',
    },
    {
      quote: "Pas un fournisseur low-cost, mais une entreprise spécialisée de proximité.",
      detail: "Ma crainte était de tomber sur une entreprise anonyme. Au lieu de cela, le devis venait d'une entreprise du village voisin, que même mon voisin connaissait déjà. L'installation fonctionne parfaitement depuis l'été.",
      location: 'Grande installation, Coire',
    },
    {
      quote: "Vraiment trois devis – et j'ai pu comparer moi-même.",
      detail: "Je m'attendais à être simplement redirigée vers une seule entreprise. Il y avait bel et bien trois offres indépendantes avec des prix différents. C'est là que j'ai réalisé à quel point les écarts peuvent être importants.",
      location: 'Maison d\'habitation, Tessin',
    },
    {
      quote: "J'étais sceptique envers les comparateurs – au final, plus de 4'000 francs économisés.",
      detail: "D'habitude, je ne fais pas trop confiance à ce genre de sites. Mais le devis le moins cher des trois était nettement en dessous de ce qu'une entreprise m'avait proposé directement auparavant. Environ 4'000 francs de différence pour pratiquement la même installation.",
      location: 'Toit plat, Olten',
    },
    {
      quote: "Rempli pendant la pause de midi, les devis reçus le lendemain.",
      detail: "Je m'attendais à beaucoup d'efforts : formulaires, questions, tout le cirque. En fait, c'était réglé en quelques minutes. Seul un devis est arrivé deux jours plus tard, mais c'était tout à fait acceptable.",
      location: 'Immeuble collectif, Lucerne',
    },
  ],
  en: [
    {
      quote: "Not a single sales call – exactly what I had feared.",
      detail: "With a comparison portal like this, you almost expect the phone to never stop ringing afterwards. Nothing of the sort happened. I received the three quotes by email and could review them in peace, without anyone pressuring me.",
      location: 'Commercial building, Wil',
    },
    {
      quote: "I kept waiting for the catch – there wasn't one.",
      detail: "Honestly, I thought an invoice or a hidden fee would show up somewhere. None of that. The comparison was genuinely free, and the quotes came directly from the installers, with no middleman costs.",
      location: 'Single-family home, Bülach',
    },
    {
      quote: "Not a budget provider, but a specialist company from nearby.",
      detail: "My worry was ending up with some anonymous company. Instead, the quote came from a business in the neighbouring village that even my neighbour already knew. The system has been running flawlessly since the summer.",
      location: 'Large installation, Chur',
    },
    {
      quote: "Really three quotes – and I could compare them myself.",
      detail: "I expected to simply be passed on to a single company. There were actually three independent offers with different prices. Only then did I realise how big the differences can be.",
      location: 'Residential house, Ticino',
    },
    {
      quote: "Was sceptical about comparison portals – ended up saving over 4,000 francs.",
      detail: "I don't usually think much of sites like this. But the cheapest of the three quotes was well below what a company had offered me directly before. Around 4,000 francs difference for practically the same system.",
      location: 'Flat roof, Olten',
    },
    {
      quote: "Filled it in during my lunch break, had the quotes the next day.",
      detail: "I expected a lot of hassle – forms, follow-up questions, the whole circus. It was done in a few minutes. Only one quote arrived two days later, but that was perfectly fine.",
      location: 'Apartment building, Lucerne',
    },
  ],
  it: [
    {
      quote: 'Nemmeno una chiamata pubblicitaria – proprio quello che temevo.',
      detail: 'Con un portale di confronto del genere ti aspetti quasi che il telefono non smetta più di squillare. Da me non è successo nulla di tutto ciò. Ho ricevuto i tre preventivi via e-mail e ho potuto valutarli con calma, senza che nessuno mi mettesse fretta.',
      location: 'Edificio commerciale, Wil',
    },
    {
      quote: "Aspettavo la fregatura – non c'era.",
      detail: 'Sinceramente pensavo che prima o poi sarebbe arrivata una fattura o una spesa nascosta. Niente di tutto questo. Il confronto era davvero gratuito e i preventivi arrivavano direttamente dagli installatori, senza costi intermedi.',
      location: 'Casa unifamiliare, Bülach',
    },
    {
      quote: 'Nessun fornitore low-cost, ma un\'azienda specializzata della zona.',
      detail: 'La mia paura era di finire con un\'azienda anonima. Invece il preventivo è arrivato da un\'impresa del paese vicino, che perfino il mio vicino già conosceva. L\'impianto funziona perfettamente dall\'estate.',
      location: 'Grande impianto, Coira',
    },
    {
      quote: 'Davvero tre preventivi – e ho potuto confrontarli da sola.',
      detail: 'Mi aspettavo di essere semplicemente indirizzata a un\'unica azienda. Invece erano davvero tre offerte indipendenti con prezzi diversi. Solo così ho capito quanto possono essere grandi le differenze.',
      location: 'Casa d\'abitazione, Ticino',
    },
    {
      quote: "Ero scettico sui portali di confronto – alla fine ho risparmiato oltre 4'000 franchi.",
      detail: "Di solito non mi fido molto di questi siti. Ma il più conveniente dei tre preventivi era nettamente sotto quello che un'azienda mi aveva proposto direttamente in precedenza. Circa 4'000 franchi di differenza per un impianto praticamente identico.",
      location: 'Tetto piano, Olten',
    },
    {
      quote: 'Compilato in pausa pranzo, i preventivi il giorno dopo.',
      detail: 'Mi aspettavo un grande sforzo: moduli, domande, tutto il teatro. Invece era fatto in pochi minuti. Solo un preventivo è arrivato due giorni dopo, ma andava benissimo così.',
      location: 'Casa plurifamiliare, Lucerna',
    },
  ],
};

export const reviewLabels: Record<'de' | 'fr' | 'en' | 'it', { customer: string; googleReview: string; realized: string; photoAlt: string }> = {
  de: { customer: 'Solar-Kunde', googleReview: 'Google-Rezension', realized: 'Realisierte Solaranlage', photoAlt: 'Solaranlage von' },
  fr: { customer: 'Client solaire', googleReview: 'Avis Google', realized: 'Installation solaire réalisée', photoAlt: 'Installation solaire de' },
  en: { customer: 'Solar customer', googleReview: 'Google review', realized: 'Completed solar installation', photoAlt: 'Solar installation of' },
  it: { customer: 'Cliente solare', googleReview: 'Recensione Google', realized: 'Impianto solare realizzato', photoAlt: 'Impianto solare di' },
};
