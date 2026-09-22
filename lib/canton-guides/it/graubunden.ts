import type { CantonGuide } from '../types';

const sources = [
  {
    id: 'gr-winterstrom',
    authority: "Ufficio dei Grigioni per l'energia e i trasporti",
    title: "Impianti fotovoltaici per l'elettricità invernale, versione 1/26",
    url: 'https://www.gr.ch/DE/institutionen/verwaltung/diem/aev/dokumenteee/leitfadenbedingungenpvwinterstrom.pdf',
  },
  {
    id: 'gr-flaechenpotenzial',
    authority: "Ufficio dei Grigioni per l'energia e i trasporti",
    title: "Impianti fotovoltaici per sfruttare le potenzialità del territorio, versione 1/26",
    url: 'https://www.gr.ch/DE/institutionen/verwaltung/diem/aev/dokumenteee/leitfadenbedingungenpvflaechenpotential.pdf',
  },
  {
    id: 'gr-energiegesetz',
    authority: "Cantone dei Grigioni",
    title: "Legge sull'energia del Cantone dei Grigioni, al 31 dicembre 2025",
    url: 'https://www.gr-lex.gr.ch/app/de/texts_of_law/820.200',
  },
  {
    id: 'gr-energieverordnung',
    authority: "Cantone dei Grigioni",
    title: "Ordinanza sull'energia del Cantone dei Grigioni",
    url: 'https://www.gr-lex.gr.ch/data/820.210',
  },
  {
    id: 'pronovo-faq',
    authority: "Pronovo AG su incarico del governo federale",
    title: "Domande frequenti sul pagamento unico (EIV) e sui sussidi per l'energia solare in Svizzera",
    url: 'https://pronovo.ch/de/foerderung/photovoltaik/haeufige-fragen/',
  },
] as const;

export const guide: CantonGuide = {
  id: 'graubunden',
  path: '/it/fotovoltaico-grigioni',
  canton: "Grigioni",
  title: "Fotovoltaico nei Grigioni 2026: incentivi cantonali | PvPro.ch",
  description:
    "Nei Grigioni gli incentivi per l’elettricità invernale e per lo sfruttamento di grandi superfici FV seguono regole diverse. Contributi, requisiti e domanda 2026 in sintesi.",
  h1: "Fotovoltaico nei Grigioni: quale incentivo è adatto al vostro progetto?",
  intro: [
    "Nel Cantone dei Grigioni esistono due percorsi cantonali per il fotovoltaico: elettricità invernale e potenziale superficiale. Quale sia quello giusto dipende, tra le altre cose, dall'inclinazione, dall'orientamento, dalla radiazione e dalle dimensioni del sistema.",
    "I contributi non sono cumulabili. Presenta la domanda prima dell'inizio della costruzione, attendi l'assicurazione e controlla separatamente Pronovo e altri bonus federali.",
  ],
  quickFacts: [
    {
      value: "CHF 300/kWp",
      label: "Torrente invernale: per inclinazione 60-90° e orientamento adatto est-sud-ovest",
      sourceIds: ['gr-winterstrom'],
    },
    {
      value: "CHF 150/kWp",
      label: "Potenziale dell'area: adatto per grandi superfici; non cumulabile con l'energia elettrica invernale",
      sourceIds: ['gr-flaechenpotenzial'],
    },
  ],
  sections: [
    {
      id: 'foerderung',
      title: "Due programmi cantonali – ma non contemporaneamente",
      paragraphs: [
        "I Grigioni dispongono di due canali di finanziamento cantonali per il fotovoltaico: elettricità invernale e potenziale superficiale. Scegli il percorso appropriato; Entrambi i programmi non sono cumulabili tra loro.",
        "Puoi anche controllare i finanziamenti federali tramite Pronovo. I contributi cantonali e gli altri contributi pubblici possono complessivamente rappresentare al massimo il 50% delle spese legate al progetto. Pertanto, non aggiungere semplicemente CHF 300, CHF 150, Pronovo e altri bonus al totale garantito.",
      ],
      sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial', 'gr-energiegesetz', 'pronovo-faq'],
      notice: {
        title: "Importante per la pianificazione",
        text: "I due programmi grigionesi sono alternative e non sussidi che si affiancano automaticamente. Verificare prima la modalità di finanziamento adeguata e poi insieme i limiti legali per tutti i contributi pubblici.",
        status: 'important',
      },
      module: {
        kind: 'funding-selector',
        title: "Quale finanziamento grigionese è giusto?",
        intro: "Per prima cosa assegna il tuo progetto a un percorso di finanziamento. Le mappe dettagliate riportate di seguito mostrano i valori completi del programma.",
        items: [
          {
            title: "Flusso invernale",
            text: "Impianto molto ripido e produzione invernale in primo piano? Verificare un'inclinazione di 60-90°, da est a sud a ovest, più di 1250 kWh/m²a di radiazione globale e almeno 3 kWp. Contributo: 300 CHF/kWp.",
            detail: "Contributo minimo CHF 900, contributo massimo CHF 200.000.",
            value: "CHF 300/kWp",
            sourceIds: ['gr-winterstrom'],
          },
          {
            title: "Potenziale dell'area",
            text: "Utilizzi un'area ampia e adatta che supera significativamente le tue esigenze? Il programma richiede almeno il 50% e almeno 3 kWp in più rispetto al consumo proprio calcolato di 20 W/m² EBF. Contributo: 150 CHF/kWp.",
            detail: "Contributo minimo CHF 450, contributo massimo CHF 50.000.",
            value: "CHF 150/kWp",
            sourceIds: ['gr-flaechenpotenzial'],
          },
          {
            title: "Nessuno di questi",
            text: "Nessuno di questi requisiti è adatto? Scopri Pronovo e altre opportunità di finanziamento. I due programmi cantonali non sono combinati.",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial', 'pronovo-faq'],
          },
        ],
        columns: ["Flusso invernale", "Potenziale dell'area"],
        rows: [
          {
            label: "Contributo",
            left: "CHF 300/kWp",
            right: "CHF 150/kWp",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "Contributo minimo",
            left: "900 franchi",
            right: "450 franchi",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "Contributo massimo",
            left: "200.000 franchi",
            right: "50.000 franchi",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "Uso edilizio",
            left: "Verificare l'idoneità in base alle condizioni del programma energetico invernale",
            right: "Prevalentemente residenziale: oltre il 50% della superficie di riferimento energetico è utilizzata per l'abitazione",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "Potenza/soglia minima",
            left: "Almeno 3 kWp",
            right: "Almeno il 50% e almeno 3 kWp in più rispetto al consumo proprio calcolato",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "Calcolo dei propri bisogni",
            left: "Non menzionato come soglia per questo programma",
            right: "Area di riferimento energetico (EBF) 20 W/m²",
            sourceIds: ['gr-flaechenpotenzial'],
          },
          {
            label: "Inclinazione",
            left: "60-90°",
            right: "Nessun requisito corrispondente di 60°; Ciò che conta è l’uso del territorio",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "Allineamento",
            left: "Da est a sud a ovest",
            right: "Approssimativamente da nord-est a sud a nord-ovest",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "Radiazione globale",
            left: "Oltre 1250 kWh/m²a",
            right: "Oltre 1250 kWh/m²a",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "Richiesta",
            left: "Invia prima degli acquisti e del lavoro; Aspetta certezze",
            right: "Invia prima degli acquisti e del lavoro; Aspetta certezze",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "portale",
            left: "energie.gr.ch / Portale del programma di costruzione secondo la procedura",
            right: "energie.gr.ch / Portale del programma di costruzione secondo la procedura",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "Assicurazione",
            left: "Valido per 3 anni; prorogabile per un massimo di 2 anni",
            right: "Controllare la garanzia relativa al progetto e la scadenza nella decisione",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "Accumulo",
            left: "Non cumulabile con il potenziale dell'area",
            right: "Non cumulabile con l'energia elettrica invernale",
            sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
          },
          {
            label: "Limite ai contributi pubblici",
            left: "I contributi cantonali e altri contributi pubblici coprono complessivamente al massimo il 50% delle spese",
            right: "I contributi cantonali e altri contributi pubblici coprono complessivamente al massimo il 50% delle spese",
            sourceIds: ['gr-energiegesetz', 'gr-energieverordnung'],
          },
        ],
      },
    },
    {
      id: 'winterstrom',
      title: "Potenza invernale: per impianti ripidi",
      paragraphs: [
        "Il programma elettrico invernale paga 300 franchi per kWp. È adatto per impianti con inclinazione 60-90°, orientamento da est a sud-ovest, irraggiamento globale superiore a 1250 kWh/m²a e potenza minima di 3 kWp.",
        "Il contributo minimo è di 900 franchi, il contributo massimo è di 200 000 franchi. La domanda deve essere presentata prima dell'effettuazione degli acquisti e dei lavori; attendere garanzie prima di ordinare o iniziare.",
      ],
      sourceIds: ['gr-winterstrom'],
    },
    {
      id: 'flaechenpotenzial',
      title: "Potenziale dell'area: se si utilizza un'area più adatta",
      paragraphs: [
        "Il programma delle aree potenziali è rivolto agli edifici con destinazione prevalentemente residenziale: oltre il 50% della superficie di riferimento energetico dovrà essere adibita ad uso abitativo. Se l'impianto è nettamente superiore al proprio fabbisogno calcolato, pagherete CHF 150 per kWp. Deve superare questa soglia almeno del 50% e inoltre di almeno 3 kWp.",
        "Ai fini del calcolo, come consumo proprio calcolato si considerano 20 W/m² di superficie energetica di riferimento. Inoltre, si applicano approssimativamente da nord-est a sud a nord-ovest e più di 1250 kWh/m²a di radiazione globale; il contributo minimo è di CHF 450, il contributo massimo è di CHF 50.000.",
      ],
      sourceIds: ['gr-flaechenpotenzial'],
      notice: {
        title: "20 W/m² non è il requisito legale per le nuove costruzioni",
        text: "L'EBF di 20 W/m² fa parte del calcolo del programma potenziale dell'area. Per i nuovi edifici si applica separatamente l'obbligo di legge di produrre la propria elettricità di 10 W/m² EBF, con un massimo di 30 kW.",
        status: 'important',
      },
    },
    {
      id: 'neubau',
      title: "Elettricità propria obbligatoria per i nuovi edifici",
      paragraphs: [
        "Per i nuovi edifici esiste un obbligo separato di produrre la propria elettricità: almeno 10 W/m² della superficie energetica di riferimento (EBF), massimo 30 kW. Si tratta di una prestazione minima legale e non della soglia del potenziale programma di finanziamento dell'area.",
        "L'obbligo richiede la propria produzione di energia elettrica, non necessariamente un impianto fotovoltaico specifico. Sono esclusi per legge i nuovi edifici Minergie e i luoghi con irraggiamento solare inferiore a 1250 kWh/m²a. Questo si riferisce all'energia solare per metro quadrato e anno. Questa eccezione all'obbligo di costruzione di nuovi edifici deve essere distinta dalle condizioni di finanziamento: entrambi i programmi cantonali FV richiedono un irraggiamento globale superiore a 1250 kWh/m²a.",
      ],
      sourceIds: ['gr-energiegesetz', 'gr-energieverordnung'],
    },
    {
      id: 'bund',
      title: "Pronovo e bonus federali facoltativi",
      paragraphs: [
        "Il regolare pagamento una tantum del governo federale passa attraverso Pronovo e, secondo le attuali FAQ, si applica a partire da 2 kW. A seconda dell'impianto potranno essere possibili ulteriori bonus federali, ad esempio un bonus angolo di inclinazione a partire da 75°, un bonus parcheggi per impianti qualificanti a partire da 100 kW oppure un bonus elettrico invernale dal 2026 a condizioni particolari per impianti a partire da 100 kW.",
        "Questi bonus federali non costituiscono automaticamente un importo complessivo e non fanno parte del programma grigionese per l’elettricità invernale. Le condizioni, la decisione sull’incentivo e il limite legale dei contributi pubblici vanno verificati separatamente per il progetto concreto.",
      ],
      sourceIds: ['pronovo-faq', 'gr-winterstrom', 'gr-energiegesetz'],
    },
    {
      id: 'gesuch',
      title: "Quando deve essere presentata la domanda?",
      paragraphs: [
        "Di norma la domanda cantonale deve essere presentata prima dell'inizio dei lavori. Secondo il dossier ciò vale anche nella pratica prima dell'acquisto e del lavoro: prima attendere la conferma, poi ordinare o iniziare a eseguire i lavori.",
        "Secondo la procedura la domanda viene presentata tramite energie.gr.ch o tramite il portale del programma edilizio. L'assicurazione per l'energia invernale ha validità 3 anni ed è prorogabile per un massimo di 2 anni; verificare la scadenza specifica nella decisione.",
      ],
      sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
      notice: {
        title: "Non applicare più tardi",
        text: "Un ordine già effettuato o un lavoro iniziato possono mettere a repentaglio il vostro diritto al finanziamento. La richiesta e l'assicurazione pertanto precedono l'ordine e l'inizio della costruzione.",
        status: 'important',
      },
    },
    {
      id: 'bewilligung',
      title: "Approvazione e pianificazione nei Grigioni",
      paragraphs: [
        "La questione dei finanziamenti e la legge edilizia sono due test diversi. Chiarire con il comune competente quale metodo di costruzione si applica al proprio tetto specifico, l'ubicazione e gli eventuali interessi di protezione.",
        "Un impegno di finanziamento cantonale non sostituisce una licenza di costruire. Indicare tempestivamente nella progettazione l'inclinazione, l'orientamento, l'irraggiamento, l'allacciamento elettrico e la data di applicazione.",
      ],
      sourceIds: ['gr-energiegesetz', 'gr-energieverordnung', 'gr-winterstrom', 'gr-flaechenpotenzial'],
    },
    {
      id: 'kosten',
      title: "Quanto costa un impianto solare qui?",
      paragraphs: [
        "Il Cantone non pubblica prezzi fissi per gli impianti solari. I fattori decisivi sono il tetto, le dimensioni dell'impianto, i lavori elettrici e le attrezzature.",
        "Confronta più offerte per lo stesso progetto e verifica le condizioni di finanziamento separatamente dal prezzo. In questo modo potrai vedere quali posizioni sono incluse e quali contributi possono essere presi in considerazione solo dopo una conferma.",
      ],
      bullets: [
        "Superficie del tetto, forma del tetto e superficie utilizzabile dei moduli",
        "Dimensioni e design del sistema",
        "Inclinazione, orientamento e radiazione globale",
        "Ponteggi, accessi e fatica di cantiere",
        "Lavori elettrici, contatori e collegamento alla rete elettrica",
        "Invertitori e tecnologia di protezione",
        "Infrastruttura di stoccaggio e ricarica delle batterie",
        "Garanzie, registrazione e ambito dei servizi dell'installatore",
      ],
      sourceIds: ['pronovo-faq', 'gr-winterstrom', 'gr-flaechenpotenzial'],
    },
    {
      id: 'fuer-wen',
      title: "Quale percorso di finanziamento è adatto a chi?",
      paragraphs: [
        "L'elettricità invernale è particolarmente adatta per un sistema ripido con un orientamento adeguato est-sud-ovest e un irraggiamento globale comprovato superiore a 1250 kWh/m²a. Il potenziale dell'area è adatto se si utilizza un'area adatta ben al di sopra delle proprie esigenze calcolate e si raggiunge la soglia del 50% e 3 kWp.",
        "Quando si costruisce un nuovo edificio, è necessario coordinare fin dall'inizio l'obbligo legale di produrre la propria elettricità con la progettazione dell'impianto. Se non raggiungi una soglia cantonale, puoi controllare separatamente Pronovo e i bonus federali specifici del sistema.",
      ],
      sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial', 'gr-energiegesetz', 'pronovo-faq'],
    },
  ],
  faqs: [
    {
      question: "A quanto ammonta il sussidio invernale per l'energia elettrica nei Grigioni?",
      answer:
        "Il programma paga 300 franchi per kWp, un minimo di 900 franchi e un massimo di 200 000 franchi. Si applica a sistemi idonei con inclinazione 60–90°, orientamento idoneo, irraggiamento globale superiore a 1250 kWh/m²a e almeno 3 kWp.",
      sourceIds: ['gr-winterstrom'],
    },
    {
      question: "Di quale pendenza ha bisogno il mio impianto per l'energia invernale?",
      answer:
        "L'inclinazione rilevante è di 60–90°. Inoltre il programma controlla l'orientamento da est a sud a ovest, un irraggiamento globale superiore a 1250 kWh/m²a e la potenza minima di 3 kWp.",
      sourceIds: ['gr-winterstrom'],
    },
    {
      question: "Qual è il finanziamento per il potenziale dell'area?",
      answer:
        "Il potenziale della superficie viene finanziato con 150 franchi per kWp, un minimo di 450 franchi e un massimo di 50 000 franchi. L'impianto deve superare di almeno il 50% il consumo interno calcolato di 20 W/m² EBF e di almeno 3 kWp.",
      sourceIds: ['gr-flaechenpotenzial'],
    },
    {
      question: "Posso combinare elettricità invernale e potenziale territoriale?",
      answer:
        "No. I due programmi cantonali FV non possono essere combinati tra loro. Scegli il metodo di finanziamento che meglio soddisfa i requisiti del tuo progetto e verifica la presenza di ulteriori contributi pubblici inferiori al limite legale del 50%.",
      sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial', 'gr-energiegesetz'],
    },
    {
      question: "Quando devo presentare la domanda?",
      answer:
        "Di norma la domanda deve essere presentata prima dell'inizio dei lavori e, secondo il programma, anche prima degli acquisti e dei lavori. Attendi garanzie prima di ordinare o iniziare il progetto.",
      sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
    },
    {
      question: "Esiste l'obbligo di produrre la propria elettricità per le nuove costruzioni nei Grigioni?",
      answer:
        "SÌ. Per i nuovi edifici esiste un obbligo separato di produrre la propria energia elettrica per 10 W/m² di superficie di riferimento energetico, massimo 30 kW. Questo non equivale al calcolo di 20 W/m² del programma potenziale di superficie e non è automaticamente un obbligo fotovoltaico generale.",
      sourceIds: ['gr-energiegesetz', 'gr-energieverordnung'],
    },
    {
      question: "Posso acquistare anche Pronovo?",
      answer:
        "Pronovo è il livello federale e deve essere verificato separatamente per il sistema specifico; Secondo le FAQ a partire da 2 kW vale il normale pagamento una tantum. I bonus federali aggiuntivi hanno requisiti specifici e non possono essere aggiunti al totale garantito senza verifica.",
      sourceIds: ['pronovo-faq', 'gr-energiegesetz'],
    },
    {
      question: "Quale limite di finanziamento devo considerare?",
      answer:
        "I contributi cantonali e gli altri contributi pubblici non possono superare complessivamente il 50% delle spese relative al progetto. Ecco perché 300 franchi/kWp, 150 franchi/kWp, Pronovo ed eventuali bonus non sono facili da sommare.",
      sourceIds: ['gr-energiegesetz', 'gr-energieverordnung', 'gr-winterstrom', 'gr-flaechenpotenzial', 'pronovo-faq'],
    },
    {
      question: "Cosa significa la soglia di 20 W/m² EBF?",
      answer:
        "20 W/m² EBF è il fabbisogno proprio calcolato che il programma Potenziale di area utilizza per la sua soglia. È ammissibile al finanziamento un impianto che supera tale valore di almeno il 50% e inoltre di almeno 3 kWp; Il requisito legale per le nuove costruzioni è invece di 10 W/m² EBF e un massimo di 30 kW.",
      sourceIds: ['gr-flaechenpotenzial', 'gr-energiegesetz', 'gr-energieverordnung'],
    },
    {
      question: "Quale radiazione globale si applica ai due programmi?",
      answer:
        "Per l’elettricità invernale e il potenziale superficiale, la radiazione globale deve generalmente essere superiore a 1250 kWh/m²a. In termini semplici, la radiazione globale descrive quanta energia solare arriva in un luogo per metro quadrato all’anno.",
      sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
    },
    {
      question: "Per quanto tempo è valida l'assicurazione?",
      answer:
        "Generalmente esiste un periodo di 3 anni per garantire il programma elettrico invernale. Può essere prorogato per un massimo di 2 anni; La decisione concreta resta decisiva.",
      sourceIds: ['gr-winterstrom'],
    },
    {
      question: "Dove presento la domanda di finanziamento?",
      answer:
        "Il processo si svolge tramite energie.gr.ch o il portale del programma edilizio. Utilizza la procedura specificata per il tuo programma e invia la domanda prima degli acquisti e del lavoro.",
      sourceIds: ['gr-winterstrom', 'gr-flaechenpotenzial'],
    },
    {
      question: "È necessario il permesso di costruire per una struttura agevolata?",
      answer:
        "A ciò non si può rispondere solo con il programma di finanziamento. Chiarire con il Comune quale modalità costruttiva si applica all'ubicazione, alla progettazione e agli eventuali interessi di tutela; L’impegno di finanziamento non sostituisce il permesso di costruire.",
      sourceIds: ['gr-energiegesetz', 'gr-energieverordnung'],
    },
  ],
  sources: [...sources],
};