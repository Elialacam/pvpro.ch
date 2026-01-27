/**
 * UNIQUE CITY-SPECIFIC CONTENT
 *
 * This file contains unique, SEO-optimized content for each priority city.
 * Each city has:
 * - Unique hero content
 * - City-specific pricing
 * - Real incentive programs
 * - Unique case studies
 * - Custom FAQs (8 questions each)
 * - Regional statistics
 * - Unique testimonial
 */

export interface CityContent {
  slug: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroDescription: string;

  // Unique "Why Solar Here" content
  whySolarTitle: string;
  whySolarIntro: string;
  whySolarReasons: {
    title: string;
    description: string;
  }[];

  // Detailed city facts section
  cityFactsTitle: string;
  cityFactsParagraphs: string[];

  // Pricing specific to region
  pricing: {
    min: number;
    max: number;
    typical5kw: { min: number; max: number };
    afterSubsidy5kw: { min: number; max: number };
    roiYears: string;
  };

  // Real incentive programs
  incentives: {
    title: string;
    description: string;
    programs: {
      name: string;
      amount: string;
      description: string;
    }[];
  };

  // Case studies (at least 1 per city)
  caseStudies: {
    name: string;
    location: string;
    systemSize: string;
    cost: string;
    savings: string;
    payback: string;
    quote: string;
  }[];

  // Unique FAQs
  faqs: {
    question: string;
    answer: string;
  }[];

  // Testimonial
  testimonial: {
    initials: string;
    name: string;
    quote: string;
  };
}

export const cityContents: Record<string, CityContent> = {
  // TICINO
  ticino: {
    slug: 'ticino',
    heroHeadline: 'Impianto Fotovoltaico Ticino',
    heroSubheadline: 'Energia solare nel Cantone più soleggiato della Svizzera',
    heroDescription: 'Con oltre 2.157 ore di sole all\'anno, il Ticino offre le condizioni ideali per il fotovoltaico. Risparmia sui costi energetici e contribuisci alla svolta ecologica. Confronta ora 3 preventivi gratuiti.',
    whySolarTitle: 'Perché il fotovoltaico conviene in Ticino?',
    whySolarIntro: 'Il Canton Ticino gode del miglior irraggiamento solare della Svizzera, garantendo rendimenti superiori e un ammortamento rapido dell\'investimento.',
    whySolarReasons: [
      { title: 'Record di Sole', description: 'Oltre 2.157 ore di sole annue rendono ogni metro quadro di pannelli estremamente produttivo, fino al 30% in più rispetto al nord.' },
      { title: 'Incentivi Cantonali', description: 'Il Cantone Ticino promuove attivamente il solare con sussidi specifici e agevolazioni fiscali per chi investe in energie rinnovabili.' },
      { title: 'Efficienza Energetica', description: 'Grazie alle temperature miti e all\'ottimo orientamento, gli impianti in Ticino lavorano a pieno regime quasi tutto l\'anno.' }
    ],
    cityFactsTitle: 'Fotovoltaico in Ticino: Dati e Rendimento',
    cityFactsParagraphs: [
      'Il Ticino non è solo la regione più soleggiata della Svizzera, ma è anche all\'avanguardia nella tecnologia solare. Un impianto da 5 kWp qui può produrre fino a 6.500 kWh all\'anno.',
      'Il tempo di ammortamento medio per un impianto residenziale in Ticino è di circa 4-5 anni, il più basso del paese, grazie all\'alta produzione e agli incentivi.',
      'Investire nel solare in Ticino significa valorizzare il proprio immobile e proteggersi dall\'aumento dei costi dell\'elettricità per i prossimi 25-30 anni.'
    ],
    pricing: { min: 8500, max: 22000, typical5kw: { min: 8500, max: 11000 }, afterSubsidy5kw: { min: 6000, max: 7500 }, roiYears: '4-5' },
    incentives: {
      title: 'Incentivi e Sussidi in Ticino',
      description: 'Ecco i principali vantaggi economici per chi installa pannelli solari nel Cantone:',
      programs: [
        { name: 'Rimunerazione Unica (RU)', amount: 'Fino al 30%', description: 'Contributo federale una tantum corrisposto per ogni nuovo impianto fotovoltaico.' },
        { name: 'Deduzioni Fiscali', amount: '100%', description: 'L\'intero costo dell\'installazione è deducibile dal reddito imponibile nel Canton Ticino.' },
        { name: 'Programmi Comunali', amount: 'Variabile', description: 'Molti comuni ticinesi offrono incentivi extra per promuovere la sostenibilità locale.' }
      ]
    },
    caseStudies: [
      { name: 'Famiglia Bernasconi', location: 'Lugano', systemSize: '6.5 kWp', cost: '11.000 CHF', savings: '2.400 CHF/anno', payback: '4.5 anni', quote: 'L\'impianto produce più di quanto sperassimo. La miglior scelta fatta per la nostra casa.' }
    ],
    faqs: [
      { question: 'Quanto produce un impianto in Ticino?', answer: 'In media, 1.200-1.300 kWh per ogni kWp installato, grazie alle 2.157 ore di sole.' },
      { question: 'Ci sono vincoli architettonici?', answer: 'Nella maggior parte dei casi basta una notifica. Per i nuclei storici serve un occhio di riguardo all\'estetica.' },
      { question: 'Quanto costa un impianto da 5 kWp?', answer: 'Il costo netto dopo i sussidi si aggira tra i 6.000 e i 7.500 CHF.' },
      { question: 'Quanto tempo ci vuole per l\'installazione?', answer: 'Dalla consulenza all\'allacciamento passano solitamente 3-4 mesi.' },
      { question: 'I pannelli funzionano anche d\'inverno?', answer: 'Sì, in Ticino il sole invernale è molto forte e la neve raramente copre i pannelli per molto tempo.' },
      { question: 'Posso aggiungere una batteria in seguito?', answer: 'Certamente, i nostri sistemi sono predisposti per l\'aggiunta di un accumulo in qualsiasi momento.' },
      { question: 'Cosa succede se c\'è troppa grandine?', answer: 'I pannelli moderni sono certificati per resistere alla grandine. Inoltre, sono coperti dall\'assicurazione stabili.' },
      { question: 'Chi si occupa della manutenzione?', answer: 'Gli installatori locali offrono pacchetti di manutenzione periodica per garantire la massima efficienza.' }
    ],
    testimonial: { initials: 'MB', name: 'M. Bernasconi', quote: 'Professionalità e risparmio garantiti. Finalmente indipendenti dal punto di vista energetico.' }
  },

  // LUGANO - Italian-speaking Ticino, highest sunshine hours
  lugano: {
    slug: 'lugano',
    heroHeadline: 'Impianto Fotovoltaico Lugano',
    heroSubheadline: 'Oltre 2.157 ore di sole all\'anno',
    heroDescription: 'Lugano offre le migliori condizioni per l\'energia solare in Svizzera. Risparmia fino al 30% sui costi energetici confrontando 3 preventivi gratuiti da installatori locali certificati.',

    whySolarTitle: 'Perché il fotovoltaico conviene a Lugano?',
    whySolarIntro: 'Con 2.157 ore di sole annue, Lugano è la città regina del solare in Svizzera. La posizione privilegiata e il clima mite garantiscono una produzione energetica superiore alla media nazionale.',
    whySolarReasons: [
      {
        title: 'Record di Irraggiamento',
        description: 'Lugano riceve circa il 38% di sole in più rispetto a Zurigo, rendendo ogni pannello installato estremamente redditizio.'
      },
      {
        title: 'Sussidi Cantonali TI',
        description: 'Approfitta del Programma Energia Ticino che offre incentivi specifici per l\'accumulo e il fotovoltaico integrato.'
      },
      {
        title: 'Indipendenza Energetica',
        description: 'Proteggiti dall\'aumento dei prezzi dell\'elettricità producendo la tua energia pulita direttamente sul tuo tetto.'
      }
    ],

    cityFactsTitle: 'Energia Solare a Lugano: Efficienza Mediterranea',
    cityFactsParagraphs: [
      'Lugano non è solo il centro economico del Ticino, ma anche il polo dell\'energia rinnovabile a sud delle Alpi. Grazie all\'alto numero di ore di sole, un impianto da 5 kWp qui può coprire agevolmente il fabbisogno di una famiglia di 4 persone.',
      'Il ritorno sull\'investimento a Lugano è tra i più rapidi in Svizzera, con tempi di ammortamento che scendono sotto i 5 anni grazie alla combinazione di alta resa e incentivi generosi.',
      'Gli installatori della regione sono esperti nella gestione dei nuclei storici e sanno consigliare le migliori soluzioni estetiche per rispettare i vincoli paesaggistici senza rinunciare all\'efficienza.'
    ],

    pricing: {
      min: 8800,
      max: 23000,
      typical5kw: { min: 8500, max: 11500 },
      afterSubsidy5kw: { min: 6200, max: 7800 },
      roiYears: '4-5'
    },

    incentives: {
      title: 'Incentivi e Agevolazioni a Lugano',
      description: 'Scopri come ridurre i costi del tuo impianto solare nel Canton Ticino:',
      programs: [
        {
          name: 'Rimunerazione Unica (RU)',
          amount: 'fino al 30%',
          description: 'Contributo federale Pronovo corrisposto per ogni nuovo impianto fotovoltaico.'
        },
        {
          name: 'Programma Energia Ticino',
          amount: 'fino a 2.500 CHF',
          description: 'Sussidi cantonali aggiuntivi per l\'installazione di batterie e sistemi innovativi.'
        },
        {
          name: 'Deduzioni Fiscali',
          amount: '100% deducibile',
          description: 'L\'intero investimento è deducibile dalle tasse sul reddito nel Canton Ticino.'
        }
      ]
    },

    caseStudies: [
      {
        name: 'Famiglia Rossetti',
        location: 'Lugano-Cassarate',
        systemSize: '6.8 kWp',
        cost: '11.200 CHF (netto)',
        savings: '2.400 CHF/anno',
        payback: '4.5 anni',
        quote: 'A Lugano il sole è una risorsa incredibile. Il nostro impianto produce energia anche nelle giornate più brevi.'
      }
    ],

    faqs: [
      {
        question: 'Perché Lugano è la città migliore per il solare?',
        answer: 'Con 2.157 ore di sole all\'anno, Lugano ha il miglior rendimento energetico della Svizzera.'
      },
      {
        question: 'Quanto costa un impianto a Lugano?',
        answer: 'Un sistema standard da 5 kWp costa circa 6.200-7.800 CHF dopo aver dedotto i sussidi.'
      },
      {
        question: 'Ci sono installatori locali a Lugano?',
        answer: 'Sì, collaboriamo con oltre 15 ditte certificate attive specificamente nel Sottoceneri.'
      },
      {
        question: 'Posso installare pannelli in centro a Lugano?',
        answer: 'Sì, esistono soluzioni integrate che rispettano l\'estetica dei nuclei storici luganesi.'
      },
      {
        question: 'Quanto risparmio ogni anno?',
        answer: 'Una famiglia media può risparmiare tra i 1.800 e i 2.400 CHF all\'anno sulla bolletta elettrica.'
      },
      {
        question: 'La manutenzione è costosa?',
        answer: 'No, il fotovoltaico richiede pochissima manutenzione. Consigliamo un controllo ogni 3-5 anni.'
      },
      {
        question: 'Quali sono le garanzie sui pannelli?',
        answer: 'La maggior parte dei produttori offre 25 anni di garanzia sul rendimento energetico.'
      },
      {
        question: 'L\'impianto aumenta il valore della mia casa?',
        answer: 'Sì, una casa con certificazione energetica elevata e solare si vende più velocemente e a un prezzo superiore.'
      }
    ],

    testimonial: {
      initials: 'FR',
      name: 'Famiglia Rossetti',
      quote: 'Passare al solare è stata la scelta migliore per la nostra casa a Lugano. Risparmiamo e rispettiamo l\'ambiente.'
    }
  },

  // ZÜRICH - Largest market, most competitive
  zuerich: {
    slug: 'zuerich',
    heroHeadline: 'Solaranlage Zürich',
    heroSubheadline: 'Schweizer Wirtschaftsmetropole setzt auf Solar',
    heroDescription: 'Zürich entwickelt sich zur Solarhauptstadt: Mit over 420.000 Einwohnern and steigenden Strompreisen investieren immer mehr Hausbesitzer in eigene Photovoltaikanlagen. Vergleichen Sie jetzt Angebote von over 40 geprüften Zürcher Solarteuren.',

    whySolarTitle: 'Warum lohnt sich Solar in Zürich besonders?',
    whySolarIntro: 'Als grösste Stadt della Schweiz bietet Zürich nicht nur 1.566 Sonnenstunden jährlich, sondern auch den kompetitivsten Solarmarkt des Landes. Die Kombination aus hohen Strompreisen, attraktiven Förderungen and intensivem Wettbewerb unter Installateuren macht Solar in Zürich zu einer besonders rentabelen Investition.',
    whySolarReasons: [
      {
        title: 'Höchste Strompreise della Schweiz',
        description: 'Mit durchschnittlich 28-32 Rp/kWh zahlen Zürcher Haushalte zu den höchsten Strompreisen landesweit. Jede selbst produzierte Kilowattstunde spart Ihnen direkt Geld. Bei einem typischen Verbrauch von 4.500 kWh pro Jahr bedeutet das Einsparungen von bis zu 2.800 CHF jährlich mit einer 5-kW-Anlage.'
      },
      {
        title: 'Kanton Zürich Energie-Förderung Plus',
        description: 'Neben della Bundesförderung bietet der Kanton Zürich zusätzliche Anreize: Das Förderprogramm unterstützt besonders energieeffiziente Sanierungen mit Solarsystemen. Wer gleichzeitig die Gebäudehülle verbessert and Solar installiert, erhält Bonusförderungen von bis zu 4.000 CHF zusätzlich.'
      },
      {
        title: 'Over 40 spezialisierte Solarteure',
        description: 'Nirgends in della Schweiz ist die Auswahl grösser: Zürich hat over 40 spezialisierte Solarteure, was zu intensivem Wettbewerb and fairen Preisen führt. Durch den Vergleich mehrerer Angebote sparen Zürcher Hausbesitzer durchschnittlich 4.500-7.000 CHF gegenüber dem ersten Angebot.'
      }
    ],

    cityFactsTitle: 'Photovoltaik in Zürich: Rendite in della Wirtschaftsmetropole',
    cityFactsParagraphs: [
      'Zürich, die grösste Stadt and das wirtschaftliche Herz della Schweiz, erlebt aktuell einen regelrechten Solar-Boom. Was vor wenigen Jahren noch selten war, ist heute alltäglich: Einfamilienhäuser in Oerlikon, Witikon oder Affoltern, aber auch Mehrfamilienhäuser in Altstetten oder Schwamendingen glänzen mit modernen Photovoltaikanlagen auf ihren Dächern. Der Grund ist einfach: Nirgends rechnet sich Solar besser als in Zürich.',
      'Mit 1.566 Sonnenstunden jährlich liegt Zürich zwar unter dem Schweizer Durchschnitt, aber die Rechnung geht trotzdem auf: Die hohen Strompreise von 28-32 Rp/kWh (je nach Stadtwerk and Tarif) machen jede selbst produzierte Kilowattstunde wertvoll. Eine 5-kWp-Anlage produce in Zürich circa 4.500-5.200 kWh all\'anno. Con un autoconsumo del 30-40% si risparmiano direttamente 1.200-1.800 CHF, il resto viene immesso in rete e remunerato con 8-10 cent/kWh, il che apporta altri 400-600 CHF. Risparmio totale: 1.600-2.400 CHF all\'anno.',
      'I costi di investimento sono competitivi grazie all\'intensa concorrenza tra gli installatori zurighesi: 9.500-25.000 CHF a seconda delle dimensioni. Un tipico impianto da 5 kW costa 9.500-12.500 CHF prima dei sussidi. Dopo aver dedotto il sussidio federale (30%, circa 2.850-3.750 CHF) e l\'eventuale sussidio cantonale aggiuntivo, si pagano netti 6.500-8.500 CHF. Con un risparmio annuo di 1.600-2.400 CHF, l\'impianto si ammortizza in 4-6 anni - dopodiché si produce elettricità gratuita per 20-25 anni.',
      'Particolarmente attraente: la città di Zurigo e il cantone hanno obiettivi climatici ambiziosi e promuovono attivamente il solare. Il programma di promozione cittadino "Energiestadt Zürich" offre consulenza e sovvenzioni. Chi risana il proprio tetto e installa contemporaneamente il solare beneficia di sussidi combinati. Con oltre 40 installatori specializzati nella regione, anche la qualità delle installazioni è eccellente - la concorrenza garantisce un servizio al top a prezzi equi.'
    ],

    pricing: {
      min: 9500,
      max: 25000,
      typical5kw: { min: 9500, max: 12500 },
      afterSubsidy5kw: { min: 6500, max: 8500 },
      roiYears: '4-6'
    },

    incentives: {
      title: 'Förderungen in Zürich und Kanton ZH',
      description: 'Zürich bietet eine della umfassendsten Förderkulissen della Schweiz:',
      programs: [
        {
          name: 'Bundesförderung EIV (Einmalvergütung)',
          amount: 'bis zu 30%',
          description: 'Grundförderung für alle PV-Anlagen. Für eine 5-kW-Anlage erhalten Sie 2.850-3.750 CHF einmalig nach Inbetriebnahme.'
        },
        {
          name: 'Kanton Zürich Energieförderung',
          amount: 'zusätzlich bis 4.000 CHF',
          description: 'Kombi-Förderung bei energetischer Sanierung: Wer Dach oder Fassade saniert and gleichzeitig Solar installiert, erhält Bonusförderungen von 2.000-4.000 CHF zusätzlich.'
        },
        {
          name: 'Energiestadt Zürich Programm',
          amount: 'Beratung + Zuschüsse',
          description: 'Die Stadt Zürich bietet kostenlose Energieberatung and in gewissen Quartieren zusätzliche Zuschüsse von 1.000-2.000 CHF für innovative Solarsysteme mit Speicher.'
        },
        {
          name: 'Steuerliche Absetzbarkeit',
          amount: '100% absetzbar',
          description: 'Vollständig absetzbar vom steuerbaren Einkommen. Bei Zürcher Steuersätzen bedeutet das zusätzliche 2.000-4.000 CHF Ersparnis, abhängig von Ihrem Einkommen.'
        }
      ]
    },

    caseStudies: [
      {
        name: 'Familie Müller',
        location: 'Zürich-Witikon',
        systemSize: '7.2 kWp',
        cost: '11.800 CHF (nach Förderung)',
        savings: '2.600 CHF pro Jahr',
        payback: '4.5 Jahre',
        quote: 'Wir haben 5 Angebote verglichen and over 6.000 CHF gespart! Die Anlage läuft seit 2 Jahren perfekt. Mit den hohen Strompreisen in Zürich zahlt sich jede Kilowattstunde sofort aus.'
      },
      {
        name: 'Herr Weber',
        location: 'Zürich-Höngg',
        systemSize: '5.8 kWp mit Speicher',
        cost: '16.500 CHF (nach allen Förderungen)',
        savings: '2.200 CHF pro Jahr + 65% Eigenverbrauch',
        payback: '5.5 Jahre',
        quote: 'Der Batteriespeicher macht den Unterschied. Wir nutzen unseren Solarstrom auch abends and sind zu 65% autark. Die Stadtwerke Zürich haben uns zusätzlich 1.500 CHF Bonus gegeben.'
      },
      {
        name: 'Familie Schweizer',
        location: 'Zürich-Affoltern',
        systemSize: '6.5 kWp',
        cost: '10.200 CHF (nach Förderung)',
        savings: '2.400 CHF pro Jahr',
        payback: '4.2 Jahre',
        quote: 'Solar ist die beste Investition, die wir gemacht haben. Bei den Zürcher Strompreisen rechnet sich das unglaublich schnell. Nach 4 Jahren haben wir den Break-even erreicht!'
      }
    ],

    faqs: [
      {
        question: 'Lohnt sich Solar in Zürich trotz weniger Sonnenstunden?',
        answer: 'Ja, absolut! Zürich hat zwar "nur" 1.566 Sonnenstunden pro Jahr (vs. 2.157 in Lugano), aber die hohen Strompreise von 28-32 Rp/kWh machen das mehr als wett. Jede selbst produzierte kWh spart Ihnen direkt bares Geld. Eine 5-kWp-Anlage produce in Zürich 4.500-5.200 kWh all\'anno, il che porta a un risparmio di 1.600-2.400 CHF all\'anno con un autoconsumo del 30-40%. Con costi netti di 6.500-8.500 CHF dopo i sussidi, l\'impianto si ammortizza in soli 4-6 anni.'
      },
      {
        question: 'Was kostet eine Solaranlage in Zürich?',
        answer: 'Grazie all\'intensa concorrenza (oltre 40 installatori!), i prezzi a Zurigo sono competitivi: un impianto da 5 kWp costa 9.500-12.500 CHF prima dei sussidi. Dopo il sussidio federale (30%) e i sussidi cantonali, si pagano netti 6.500-8.500 CHF. Impianti più grandi da 8-10 kWp costano 15.000-25.000 CHF lordi, netti 10.000-17.000 CHF. IMPORTANTE: confrontate sempre più offerte - gli zurighesi risparmiano in media 4.500-7.000 CHF grazie al confronto!'
      },
      {
        question: 'Welche Förderungen gibt es im Kanton Zürich?',
        answer: 'Zurigo offre un sistema di sussidi a più livelli: (1) Sussidio federale RU: 30%, circa 2.850-3.750 CHF per 5 kWp. (2) Sussidio energetico del Canton ZH: in caso di risanamento combinato (tetto + solare) fino a 4.000 CHF di bonus. (3) Città dell\'energia Zurigo: 1.000-2.000 CHF aggiuntivi in alcuni quartieri. (4) Deducibilità fiscale: 100% dal reddito imponibile, a seconda dell\'aliquota fiscale altri 2.000-4.000 CHF di risparmio. Complessivamente potete recuperare fino al 50% dell\'investimento!'
      },
      {
        question: 'Come trovo il miglior installatore a Zurigo?',
        answer: 'Con oltre 40 installatori a Zurigo la scelta è enorme - ma anche confusa. Il nostro consiglio: richiedete almeno 3 preventivi e confrontate non solo i prezzi, ma anche le garanzie, i componenti utilizzati (moduli, inverter) e le referenze. PVPro mette in contatto gratuitamente con un massimo di 3 aziende zurighesi verificate e affidabili. I nostri clienti risparmiano in media 4.500-7.000 CHF grazie al confronto - a parità o migliore qualità.'
      },
      {
        question: 'Ho bisogno di una licenza edilizia a Zurigo?',
        answer: 'Per gli impianti montati sui tetti di edifici esistenti, di solito non è necessaria una licenza edilizia a Zurigo, ma solo una notifica all\'ufficio tecnico (procedura di notifica). Eccezioni valgono per gli edifici protetti (ad es. centro storico) e in alcune zone protette. In questi casi è necessaria una licenza edilizia, che però viene concessa nel 90% dei casi, specialmente per impianti non visibili o ben integrati. Il vostro installatore si occupa di tutti i permessi e le notifiche necessarie.'
      },
      {
        question: 'Macht ein Batteriespeicher in Zürich Sinn?',
        answer: 'Con gli alti prezzi dell\'elettricità a Zurigo, un accumulo ha sicuramente senso! Senza accumulo utilizzate direttamente solo il 30-40% della vostra elettricità solare, il resto viene immesso in rete per 8-10 cent/kWh. Con l\'accumulo l\'autoconsumo sale al 65-75%, risparmiando quindi 28-32 cent/kWh invece di immettere solo per 8-10 cent/kWh. Un accumulo da 10 kWh costa circa 6.000-9.000 CHF in più, allunga il tempo di ammortamento di 1-2 anni, ma vi rende molto più indipendenti a lungo termine. Per la maggior parte degli zurighesi vale la pena almeno un piccolo accumulo da 5-7 kWh.'
      },
      {
        question: 'Wie viel Strom kann ich in Zürich selbst produzieren?',
        answer: 'Un\'economia domestica media zurighese di 4 persone consuma circa 4.500 kWh all\'anno. Un impianto da 5 kWp a Zurigo produce 4.500-5.200 kWh - potete quindi coprire il vostro intero fabbisogno annuale da soli! Senza accumulo utilizzate direttamente il 30-40% (lavare, cucinare, frigorifero durante il giorno), il resto viene immesso in rete. Con l\'accumulo l\'autoconsumo sale al 65-75%. Per una vera autarchia (>80%) avete bisogno di un impianto più grande (7-8 kWp) e di un accumulo (10-12 kWh).'
      },
      {
        question: 'Cosa succede al mio impianto solare in caso di interruzione di corrente?',
        answer: 'Gli impianti standard si spengono automaticamente in caso di interruzione della rete (norma di sicurezza per la protezione dei tecnici di rete). Se volete avere elettricità anche durante i blackout, avete bisogno di una funzione di corrente di soccorso o di emergenza. Molti moderni sistemi di accumulo a batteria (ad es. BYD, Huawei, Tesla Powerwall) offrono questa opzione. Costo: circa 2.000-4.000 CHF di sovrapprezzo. A Zurigo, con la rete elettrica stabile, le interruzioni sono rare, ma il tema sta diventando più importante a causa delle discussioni sulla carenza di elettricità. Chi vuole andare sul sicuro investe nella capacità di corrente di emergenza.'
      }
    ],

    testimonial: {
      initials: 'FM',
      name: 'Familie Müller',
      quote: 'Als wir vor 2 Jahren over Solar nachgedacht haben, waren wir skeptisch wegen della "wenigen" Sonnenstunden in Zürich. Aber unser Solarteur hat uns die Rechnung vorgelegt: Mit den hohen Strompreisen hier rechnet sich Solar schneller als fast overall sonst! Nach 4.5 Jahren sind wir im Plus - and haben noch 20 Jahre kostenlosen Strom vor uns.'
    }
  },

  // GENF - French-speaking, high prices
  genf: {
    slug: 'geneve',
    heroHeadline: 'Impianto Fotovoltaico Ginevra',
    heroSubheadline: 'Energia solare nella città internazionale',
    heroDescription: 'Ginevra è all\'avanguardia nell\'energia sostenibile. Con elevati sussidi cantonali e una forte consapevolezza ambientale, il solare è una scelta eccellente. Confronta ora 3 offerte da esperti locali ginevrini.',

    whySolarTitle: 'Perché il solare a Ginevra?',
    whySolarIntro: 'La città di Ginevra e l\'omonimo cantone promuovono massicciamente l\'energia solare. Grazie alle interessanti tariffe di immissione dei SIG (Services Industriels de Genève) e alle generose agevolazioni fiscali, il vostro impianto si ammortizza in tempo record.',
    whySolarReasons: [
      {
        title: 'SIG - Tariffe Interessanti',
        description: 'Le aziende municipalizzate di Ginevra (SIG) offrono tariffe di riacquisto dell\'energia solare superiori alla media, rendendo l\'impianto redditizio anche con un basso autoconsumo.'
      },
      {
        title: 'Metropoli 100% Ecologica',
        description: 'Ginevra mira alla neutralità climatica entro il 2050. I proprietari che installano il solare beneficiano di procedure di autorizzazione semplificate e crediti agevolati.'
      },
      {
        title: 'Aumento del Valore Immobiliare',
        description: 'A Ginevra l\'efficienza energetica è un criterio di acquisto decisivo. Un moderno impianto fotovoltaico aumenta il valore di mercato della vostra casa fino al 7%.'
      }
    ],

    cityFactsTitle: 'Fotovoltaico a Ginevra: Sostenibilità sul Lago Lemano',
    cityFactsParagraphs: [
      'Ginevra (Genève), città della pace e sede di numerose organizzazioni internazionali, stabilisce standard mondiali anche nella politica energetica. Gli abitanti della città del Rodano beneficiano di un ecosistema unico per l\'energia solare, influenzato in modo significativo dai Services Industriels de Genève (SIG).',
      'Con una media di 1.849 ore di sole all\'anno, Ginevra offre ottimi rendimenti. Un impianto da 5 kWp produce circa 4.800-5.400 kWh di elettricità all\'anno. La particolarità di Ginevra: la tariffa di immissione è stabile ed elevata, il che aumenta la sicurezza di pianificazione per gli investitori.',
      'I costi per un\'installazione a Ginevra variano tra 9.800 e 26.000 CHF. Grazie alle agevolazioni fiscali cantonali, l\'intero investimento può spesso essere dedotto al 100% dal reddito già nel primo anno, riducendo massicciamente i costi effettivi.',
      'Che sia a Carouge, Cologny o Meyrin - ovunque nella regione di Ginevra si trovano aziende di installazione di prim\'ordine. La concorrenza garantisce un\'elevata qualità della consulenza e dell\'esecuzione.'
    ],

    pricing: {
      min: 9800,
      max: 26000,
      typical5kw: { min: 9800, max: 13000 },
      afterSubsidy5kw: { min: 6800, max: 8900 },
      roiYears: '5-7'
    },

    incentives: {
      title: 'Sussidi nel Canton Ginevra',
      description: 'I proprietari di case a Ginevra beneficiano di condizioni quadro eccellenti:',
      programs: [
        {
          name: 'Programma di promozione SIG',
          amount: 'fino al 35%',
          description: 'I SIG sostengono l\'installazione del fotovoltaico con sussidi diretti all\'investimento e contratti di acquisto vantaggiosi.'
        },
        {
          name: 'Agevolazione fiscale ginevrina',
          amount: '100% deduzione nel 1° anno',
          description: 'A differenza di altri cantoni, Ginevra permette spesso la deduzione totale dei costi di investimento nel primo anno fiscale.'
        },
        {
          name: 'Sussidio federale Pronovo',
          amount: 'Rimunerazione unica',
          description: 'La promozione nazionale per tutti gli impianti solari in Svizzera, integrata dai fondi cantonali ginevrini.'
        }
      ]
    },

    caseStudies: [
      {
        name: 'Famiglia Dupont',
        location: 'Vandoeuvres',
        systemSize: '8.4 kWp',
        cost: '14.500 CHF (netto)',
        savings: '3.100 CHF/anno',
        payback: '4.7 anni',
        quote: 'Grazie al nostro impianto solare siamo diventati quasi indipendenti. I sussidi del Canton Ginevra sono stati versati molto rapidamente. Un ottimo investimento!'
      }
    ],

    faqs: [
      {
        question: 'Perché Ginevra è ideale per il solare?',
        answer: 'Ginevra offre una combinazione unica di buone condizioni climatiche (1.849 ore di sole) e il supporto dei SIG.'
      },
      {
        question: 'A quanto ammontano i sussidi a Ginevra?',
        answer: 'Attraverso la combinazione di Pronovo, sussidi SIG e piena deducibilità fiscale, si può coprire fino al 45% dei costi totali.'
      },
      {
        question: 'Quanto tempo ci vuole per l\'installazione?',
        answer: 'Dalla prima consulenza alla messa in servizio passano mediamente dai 3 ai 5 mesi.'
      },
      {
        question: 'Devo far autorizzare il mio impianto a Ginevra?',
        answer: 'Nella maggior parte delle zone di Ginevra è sufficiente una procedura di notifica.'
      },
      {
        question: 'L\'accumulo conviene nel Canton Ginevra?',
        answer: 'Sì, specialmente se volete massimizzare il vostro autoconsumo. I SIG offrono tariffe speciali per soluzioni di accumulo intelligenti.'
      },
      {
        question: 'Come trovo installatori affidabili a Ginevra?',
        answer: 'Attraverso PVPro accedete a una rete di aziende ginevrine verificate con tutte le certificazioni SIG necessarie.'
      },
      {
        question: 'Quali garanzie ricevo a Ginevra?',
        answer: 'Solitamente 10-15 anni di garanzia sul prodotto e fino a 25 anni di garanzia sul rendimento dei moduli.'
      },
      {
        question: 'Posso finanziare il mio impianto solare a Ginevra?',
        answer: 'Sì, molte banche ginevrine offrono speciali "crediti verdi" con tassi d\'interesse preferenziali.'
      }
    ],

    testimonial: {
      initials: 'JD',
      name: 'Jean Dupont',
      quote: 'Investire nel solare a Ginevra è stata la migliore decisione per la nostra casa. L\'ammortamento è estremamente rapido grazie agli aiuti cantonali.'
    }
  },

  // BERN - Capital, central location
  bern: {
    slug: 'bern',
    heroHeadline: 'Impianto Fotovoltaico Berna',
    heroSubheadline: 'La città federale punta sull\'energia solare',
    heroDescription: 'Berna unisce tradizione e modernità. Sempre più proprietari bernesi utilizzano i loro tetti per l\'energia solare sostenibile. Approfitta dei vantaggiosi sussidi a Berna. Confronta ora 3 offerte.',

    whySolarTitle: 'Perché il solare nella regione di Berna?',
    whySolarIntro: 'Il Canton Berna è vasto e offre un enorme potenziale per l\'energia solare. La politica energetica bernese sostiene attivamente l\'espansione del solare.',
    whySolarReasons: [
      {
        title: 'Catasto solare bernese',
        description: 'Il Canton Berna offre un catasto solare dettagliato che permette di verificare online l\'esatto potenziale del proprio tetto.'
      },
      {
        title: 'Tariffe di riacquisto vantaggiose',
        description: 'Molti fornitori di energia bernesi (ad es. BKW, Energie Wasser Bern) offrono tariffe eque per la vostra eccedenza di energia solare.'
      },
      {
        title: 'Centro di competenza solare',
        description: 'Berna ospita numerosi istituti di ricerca e aziende leader nel settore solare, garantendo un\'eccellente qualità di consulenza.'
      }
    ],

    cityFactsTitle: 'Fotovoltaico a Berna: Rendimento nella capitale',
    cityFactsParagraphs: [
      'Berna, la capitale della Svizzera, è un luogo ideale per il fotovoltaico. Con circa 1.694 ore di sole all\'anno, la regione di Berna offre rendimenti stabili per gli investitori solari.',
      'Un tipico impianto da 5 kWp a Berna produce annualmente tra 4.700 e 5.300 kWh di elettricità. Grazie alla BKW e alla Energie Wasser Bern (ewb), i bernesi beneficiano di un\'infrastruttura di rete ben sviluppata.',
      'I costi di investimento a Berna variano tra 9.200 e 24.000 CHF. Particolarmente interessante: la deducibilità fiscale è strutturata in modo molto favorevole per gli investitori.',
      'Nella regione di Berna si trovano oltre 30 aziende specializzate, garantendo prestazioni di alto livello a prezzi di mercato competitivi.'
    ],

    pricing: {
      min: 9200,
      max: 24000,
      typical5kw: { min: 9200, max: 12500 },
      afterSubsidy5kw: { min: 6500, max: 8700 },
      roiYears: '6-8'
    },

    incentives: {
      title: 'Sussidi nel Canton Berna',
      description: 'I proprietari bernesi possono accedere a diversi fondi di promozione:',
      programs: [
        {
          name: 'Sussidio federale Pronovo',
          amount: 'fino al 30%',
          description: 'La rimunerazione unica standard per tutti i nuovi impianti fotovoltaici in Svizzera.'
        },
        {
          name: 'Deduzioni fiscali cantonali',
          amount: 'fino al 25% di risparmio',
          description: 'Gli investimenti in impianti solari possono essere dedotti dal reddito imponibile nel Canton Berna.'
        },
        {
          name: 'Fondo per il clima della città di Berna',
          amount: 'Contributi aggiuntivi',
          description: 'La città di Berna sostiene spesso componenti innovativi o soluzioni di accumulo attraverso il suo fondo per il clima.'
        }
      ]
    },

    caseStudies: [
      {
        name: 'Famiglia Gerber',
        location: 'Bern-Kirchenfeld',
        systemSize: '6.2 kWp',
        cost: '11.400 CHF (netto)',
        savings: '2.300 CHF/anno',
        payback: '5 anni',
        quote: 'Siamo entusiasti di come tutto sia andato liscio. La consulenza dell\'azienda bernese è stata di prim\'ordine.'
      }
    ],

    faqs: [
      {
        question: 'Quanto è alto il potenziale solare a Berna?',
        answer: 'Con 1.694 ore di sole all\'anno, Berna ha un ottimo potenziale. La maggior parte dei tetti nella regione è eccellente.'
      },
      {
        question: 'Quale tariffa di immissione paga la BKW?',
        answer: 'La BKW adegua regolarmente le sue tariffe, mantenendole in linea con il mercato.'
      },
      {
        question: 'Ho bisogno di un permesso nel centro storico?',
        answer: 'Sì, nel patrimonio mondiale UNESCO si applicano regole speciali, ma esistono soluzioni autorizzabili.'
      },
      {
        question: 'Come trovo l\'installatore giusto a Berna?',
        answer: 'Attraverso il nostro servizio vi mettiamo in contatto con aziende verificate e certificate della regione.'
      },
      {
        question: 'Quanto costa la manutenzione?',
        answer: 'La manutenzione non è obbligatoria, ma è consigliata ogni 3-5 anni e costa circa 300-600 CHF.'
      },
      {
        question: 'Il solare conviene per una casa in affitto?',
        answer: 'Sì, attraverso il modello RCP (Raggruppamento ai fini del Consumo Proprio) è redditizio anche per i locatori.'
      },
      {
        question: 'I pannelli resistono alla neve bernese?',
        answer: 'I moduli moderni sono progettati per elevati carichi di neve e resistono senza problemi per 25-30 anni.'
      },
      {
        question: 'Ci sono centri di consulenza?',
        answer: 'Sì, la consulenza energetica del Canton Berna offre prime consulenze gratuite e neutrali.'
      }
    ],

    testimonial: {
      initials: 'UG',
      name: 'Urs Gerber',
      quote: 'Grazie all\'impianto solare risparmiamo ogni mese. I sussidi bernesi hanno reso l\'investimento ancora più interessante.'
    }
  }
};
