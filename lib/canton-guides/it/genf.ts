import type { CantonGuide } from '../types';

const sources = [
  {
    id: 'ge-obligation',
    authority: "Repubblica e Cantone di Ginevra",
    title: "Energia solare – obbligo per nuovi edifici e ristrutturazioni",
    url: 'https://www.ge.ch/installer-panneaux-solaires-batiment/solaire-obligation-constructions-neuves-renovations',
  },
  {
    id: 'ge-consommateurs',
    authority: "Repubblica e Cantone di Ginevra",
    title: "Energia solare – obbligo per i consumatori medi (>0,2 GWh/anno)",
    url: 'https://www.ge.ch/installer-panneaux-solaires-batiment/solaire-obligation-moyens-consommateurs-conso-elec02gwh',
  },
  {
    id: 'ge-meldung',
    authority: "Ginevra Energia",
    title: "Pannelli solari e pompe di calore: termine di notifica dell’apertura del cantiere ridotto a 14 giorni",
    url: 'https://www.ge.ch/blog/geneve-energie/panneaux-solaires-pompes-chaleur-delai-annonce-ouverture-chantier-reduit-14-jours-12-02-2026',
  },
  {
    id: 'ge-foerderung',
    authority: "OCEN, Repubblica e Cantone di Ginevra",
    title: "Sussidi energetici 2026: 80 milioni di franchi",
    url: 'https://www.ge.ch/blog/geneve-energie/subventions-energetiques-2026-80-millions-francs-accelerer-renovation-du-parc-bati-genevois-2-02-2026',
  },
  {
    id: 'ge-pronovo',
    authority: "Pronovo AG su incarico del governo federale",
    title: "Domande frequenti sul pagamento unico (EIV) e sui sussidi per l'energia solare in Svizzera",
    url: 'https://pronovo.ch/de/foerderung/photovoltaik/haeufige-fragen/',
  },
] as const;

export const guide: CantonGuide = {
  id: 'genf',
  path: '/it/fotovoltaico-ginevra',
  canton: "Ginevra",
  title: "Fotovoltaico a Ginevra 2026: obblighi e incentivi | PvPro.ch",
  description:
    "Fotovoltaico a Ginevra: obblighi per nuovi edifici e risanamenti del tetto, eccezioni previste e procedure edilizie valide nel 2026.",
  h1: "Fotovoltaico a Ginevra: quando è obbligatorio nel 2026",
  intro: [
    "A Ginevra, l’energia solare potrebbe essere obbligatoria per i nuovi edifici, la ristrutturazione dei tetti e alcune ristrutturazioni legate all’energia. È necessario utilizzare sempre superfici idonee del tetto.",
    "Per le località con un consumo di elettricità superiore a 0,2 GWh all’anno si applica generalmente la scadenza FV del 2030. Per alcuni impianti che non necessitano di autorizzazione, da febbraio 2026 sono sufficienti 14 giorni di notifica prima dell'inizio dei lavori.",
  ],
  quickFacts: [
    {
      value: "Nuovo edificio",
      label: "Utilizzare sempre superfici del tetto adatte all'energia solare",
      sourceIds: ['ge-obligation'],
    },
    {
      value: "Ristrutturazione del tetto",
      label: "Può far scattare l'obbligo di utilizzo del sole",
      sourceIds: ['ge-obligation'],
    },
    {
      value: ">0,2 GWh/anno",
      label: "soglia per i maggiori consumatori di elettricità; FV sostanzialmente fino al 2030",
      sourceIds: ['ge-consommateurs'],
    },
    {
      value: "14 giorni",
      label: "Notifica prima dell'inizio della costruzione per alcuni progetti che non richiedono un permesso",
      sourceIds: ['ge-meldung'],
    },
  ],
  sections: [
    {
      id: 'pflicht',
      title: "Quando è obbligatorio l'energia solare a Ginevra?",
      paragraphs: [
        "Sì, l'uso dell'energia solare potrebbe essere obbligatorio a Ginevra. Ciò vale in particolare per le nuove costruzioni, le ristrutturazioni dei tetti e le località con un consumo annuo di elettricità superiore a 0,2 GWh.",
        "L'obbligo riguarda superfici idonee del tetto e non è automaticamente un requisito per ogni edificio residenziale esistente. Le eccezioni riconosciute e altre ristrutturazioni legate all'energia devono essere verificate caso per caso.",
      ],
      sourceIds: ['ge-obligation', 'ge-consommateurs'],
      module: {
        kind: 'obligation-triggers',
        title: "Quando sarà obbligatorio l'energia solare a Ginevra?",
        intro:
          "Oltre a questi tre fattori scatenanti, possono essere inclusi anche alcuni rinnovamenti energetici. L'impossibilità tecnica, l'efficienza economica sproporzionata e gli interessi di tutela possono essere eccezioni riconosciute.",
        items: [
          {
            title: "Nuovo edificio",
            text: "Le superfici idonee del tetto di un nuovo edificio devono essere sempre utilizzate per l'energia solare.",
            sourceIds: ['ge-obligation'],
          },
          {
            title: "Ristrutturazione del tetto",
            text: "Una ristrutturazione del tetto può far scattare l’obbligo di utilizzo dell’energia solare. Pertanto, prima della progettazione, controllare l'area del tetto e le possibili eccezioni.",
            sourceIds: ['ge-obligation'],
          },
          {
            title: "Maggiore consumatore di elettricità",
            text: "Se il consumo di elettricità supera 0,2 GWh all’anno, le aree idonee del tetto devono generalmente essere dotate di impianto fotovoltaico entro il 2030, a meno che non si applichi un’eccezione riconosciuta.",
            sourceIds: ['ge-consommateurs'],
          },
        ],
      },
    },
    {
      id: 'dachsanierung',
      title: "Cosa si applica alla ristrutturazione del tetto?",
      paragraphs: [
        "A Ginevra, la ristrutturazione del tetto è uno dei progetti che possono far scattare l'obbligo di utilizzo del solare. Ciò riguarda la superficie del tetto adatta, non automaticamente ogni tetto e non ogni casa esistente.",
        "Possono essere rilevanti anche alcune ristrutturazioni finalizzate al risparmio energetico. Pertanto, prima di effettuare l’ordine, fate chiarire se il vostro progetto specifico rientra nell’obbligo e se esiste un’eccezione riconosciuta.",
      ],
      sourceIds: ['ge-obligation'],
      notice: {
        title: "Non tutte le ristrutturazioni sono uguali",
        text: "Le Regole di Ginevra distinguono tra nuove costruzioni, ristrutturazioni dei tetti, alcune ristrutturazioni legate all'energia e altri edifici. Ciò non comporta un fabbisogno fotovoltaico generale per tutte le case esistenti.",
        status: 'important',
      },
    },
    {
      id: 'verbraucher',
      title: "La regola del 2030 per i grandi consumatori di elettricità",
      paragraphs: [
        "Se una località consuma più di 0,2 GWh di elettricità all’anno, ai sensi di questa regola è considerata un grande consumatore di elettricità. Le superfici idonee del tetto dovranno generalmente essere dotate di impianto fotovoltaico entro il 2030.",
        "0,2 GWh corrispondono a 200.000 kWh. Per una normale casa unifamiliare questa soglia solitamente non è il punto rilevante; Ciò che conta è il consumo annuo effettivo del luogo.",
        "Anche con questa regola restano possibili eccezioni riconosciute. Tra questi figurano l’impossibilità tecnica, un’efficienza economica sproporzionata e interessi protettivi.",
      ],
      sourceIds: ['ge-consommateurs', 'ge-obligation'],
    },
    {
      id: 'ausnahmen',
      title: "Quali eccezioni ci sono?",
      paragraphs: [
        "Sì, sono possibili eccezioni se l'energia solare sulla superficie idonea del tetto non è tecnicamente possibile o è economicamente sproporzionata. Anche gli interessi di protezione possono esprimersi contro l’uso dell’energia solare.",
        "Un'eccezione non si applica a tutti i progetti. L'organismo responsabile deve esaminare la situazione specifica e le condizioni applicabili.",
      ],
      bullets: [
        "Tecnicamente non possibile: l'uso solare non può essere implementato a causa della specifica situazione strutturale o tecnica.",
        "Economicamente sproporzionato: lo sforzo è sproporzionato rispetto alle condizioni applicabili.",
        "Interessi di protezione: i monumenti, il paesaggio urbano o altri interessi di protezione possono giustificare un'eccezione.",
      ],
      sourceIds: ['ge-obligation', 'ge-consommateurs'],
    },
    {
      id: 'bewilligung',
      title: "Autorizzazione e regola dei 14 giorni",
      paragraphs: [
        "No, non sempre un impianto solare richiede un'applicazione edilizia completa. I sistemi sufficientemente adattati possono essere esenti da licenza alle condizioni applicabili; si applicano ancora le regole formali.",
        "Da febbraio 2026 il termine per notificare l'inizio dei lavori per determinati progetti solari che non necessitano di autorizzazione è stato ridotto da 30 a 14 giorni. In questi casi la notifica deve essere effettuata 14 giorni prima dell'inizio dei lavori.",
        "Se questa procedura semplificata sia sufficiente dipende dal progetto specifico. L'OCEN è rilevante per le questioni relative al contenuto energetico e l'OAC è rilevante anche per le questioni relative al diritto edilizio.",
      ],
      sourceIds: ['ge-meldung', 'ge-obligation'],
      module: {
        kind: 'process-flow',
        title: "Chiarire prima dell'inizio della costruzione",
        intro: "I 14 giorni si applicano solo ai progetti corrispondenti che non necessitano di autorizzazione. Controllare la procedura prima dell'inizio del lavoro o degli ordini.",
        items: [
          {
            title: "Classificare il progetto",
            text: "Verificare se il sistema è stato sufficientemente adattato e se è possibile una procedura senza autorizzazione.",
            sourceIds: ['ge-obligation'],
          },
          {
            title: "Segnalazione inizio lavori",
            text: "Dal febbraio 2026 la notifica dei progetti interessati non autorizzati deve essere effettuata 14 giorni prima dell'inizio dei lavori.",
            sourceIds: ['ge-meldung'],
          },
          {
            title: "Chiarire la posizione",
            text: "L'OCEN è rilevante per le questioni energetiche. L'OAC deve essere consultato per la classificazione del diritto edilizio e la richiesta di costruzione necessaria.",
            sourceIds: ['ge-obligation', 'ge-meldung'],
          },
        ],
      },
    },
    {
      id: 'foerderung',
      title: "Finanziamenti a Ginevra",
      paragraphs: [
        "Il budget energetico di Ginevra per il 2026 ammonta complessivamente a 80 milioni di franchi. Questo è l’intero budget per l’energia, non un puro fondo di finanziamento per il fotovoltaico.",
        "I finanziamenti specifici per il fotovoltaico e i programmi di finanziamento per gli edifici devono essere esaminati separatamente. Le domande per i programmi di costruzione pertinenti devono generalmente essere presentate prima dell'inizio dei lavori.",
        "Attraverso Pronovo passa il più importante finanziamento federale per il fotovoltaico. Attualmente il regolare pagamento una tantum (EIV) si applica a partire da una potenza minima di 2 kW. Ulteriori bonus federali, come il bonus angolo di inclinazione a partire da 75°, il bonus parcheggi per impianti qualificanti a partire da 100 kW o il bonus elettrico invernale 2026 per impianti a partire da 100 kW a condizioni particolari, hanno requisiti propri e non possono essere sommati in un importo fisso.",
      ],
      sourceIds: ['ge-foerderung', 'ge-pronovo'],
      notice: {
        title: "80 milioni di franchi non sono 80 milioni di franchi di finanziamento per il fotovoltaico",
        text: "La cifra descrive l'intero budget del finanziamento energetico di Ginevra per il 2026. Il sostegno al vostro impianto fotovoltaico o ad un provvedimento edilizio dipende dal programma appropriato e dal momento della richiesta.",
        status: 'important',
      },
    },
    {
      id: 'begriffe',
      title: "Le regole solari di Ginevra spiegate in modo semplice",
      paragraphs: [
        "Il fotovoltaico (PV) genera elettricità utilizzando moduli solari. Quando una norma parla di energia solare o di utilizzo del sole, non si riferisce automaticamente solo ad un sistema tecnico specifico; lo decide il regolamento specifico.",
        "Una superficie del tetto adatta è una superficie del tetto che può essere utilizzata per l'energia solare secondo le direttive di Ginevra. Nel caso di un progetto senza permesso, la mancanza di permesso di costruire non significa che non si applichino notifiche o ulteriori regole.",
      ],
      bullets: [
        "GWh: Un gigawattora è un'unità di elettricità. 0,2 GWh corrispondono a 200.000 kWh.",
        "Procedura di notifica: L'inizio della costruzione viene annunciato all'autorità competente senza che sia necessaria una domanda di costruzione completa. Ciò vale solo se sono soddisfatti i requisiti legali.",
        "Ristrutturazione energetica: si riferisce ad una ristrutturazione relativa al consumo energetico o alla fornitura di energia. Anche alcune ristrutturazioni di questo tipo possono essere un fattore scatenante.",
        "OCEN e OAC: l'OCEN è l'agenzia cantonale per l'energia. L'OAC è rilevante per le domande relative al processo di autorizzazione edilizia.",
      ],
      sourceIds: ['ge-obligation', 'ge-consommateurs', 'ge-meldung'],
    },
    {
      id: 'kosten',
      title: "Quanto costa un impianto solare qui?",
      paragraphs: [
        "Il Cantone non pubblica prezzi fissi per gli impianti solari. I fattori decisivi sono il tetto, le dimensioni dell'impianto, i lavori elettrici e le attrezzature.",
        "Confronta più offerte per lo stesso progetto. Controlla se tutti i lavori, i permessi o le segnalazioni, l'allacciamento alla rete e le garanzie sono descritti allo stesso modo.",
      ],
      bullets: [
        "Area del tetto, forma e condizioni del tetto",
        "Dimensioni del sistema e prestazioni dei moduli",
        "Orientamento e area utilizzabile dei moduli",
        "Ponteggi, accessi e fatica di cantiere",
        "Lavori elettrici, contatori e collegamento alla rete elettrica",
        "Invertitore",
        "Infrastruttura di stoccaggio e ricarica delle batterie",
        "Ambito dell'offerta, garanzie e azienda specializzata",
      ],
      sourceIds: ['ge-obligation', 'ge-pronovo'],
    },
    {
      id: 'fuer-wen',
      title: "Chi è particolarmente interessato al solare a Ginevra?",
      paragraphs: [
        "I proprietari che stanno costruendo nuovi edifici, ristrutturando il tetto o progettando una ristrutturazione ad alta efficienza energetica dovrebbero verificare con particolare anticipo. Se il consumo di elettricità è elevato, anche la scadenza del 2030 potrebbe essere importante.",
        "Anche senza un requisito automatico, un sistema adeguato può avere senso se il tetto, il consumo e l'attrezzatura coincidono. I fattori decisivi sono la superficie specifica del tetto, il fabbisogno energetico, l'offerta e le condizioni di finanziamento applicabili.",
      ],
      sourceIds: ['ge-obligation', 'ge-consommateurs', 'ge-pronovo'],
    },
  ],
  faqs: [
    {
      question: "Il fotovoltaico è obbligatorio per un nuovo edificio a Ginevra?",
      answer:
        "L'energia solare deve sempre essere utilizzata su superfici idonee del tetto di un nuovo edificio. La regola non è un requisito generale per ogni sistema fotovoltaico su ogni casa esistente; le eccezioni riconosciute devono essere esaminate.",
      sourceIds: ['ge-obligation'],
    },
    {
      question: "Cosa si applica alla ristrutturazione del tetto?",
      answer:
        "Una ristrutturazione del tetto può far scattare l’obbligo di utilizzare l’energia solare a Ginevra. Se si applichi al tuo caso dipende dal progetto specifico, dalla superficie del tetto adatta e dalle possibili eccezioni.",
      sourceIds: ['ge-obligation'],
    },
    {
      question: "Ogni casa esistente deve installare il fotovoltaico?",
      answer:
        "No. Le norme di Ginevra non creano un requisito generale di fotovoltaico per ogni casa esistente. Tuttavia, possono essere rilevanti una ristrutturazione del tetto, una ristrutturazione energetica specifica o un consumo di elettricità molto elevato.",
      sourceIds: ['ge-obligation', 'ge-consommateurs'],
    },
    {
      question: "Cosa significa il limite di 0,2 GWh?",
      answer:
        "0,2 GWh corrispondono a 200.000 kWh di consumo di energia elettrica all'anno. Le località al di sopra di questo limite devono generalmente dotare le aree idonee del tetto di impianti fotovoltaici entro il 2030, a meno che non si applichi un’eccezione riconosciuta.",
      sourceIds: ['ge-consommateurs'],
    },
    {
      question: "Ci sono eccezioni?",
      answer:
        "SÌ. Un'eccezione può essere possibile in caso di impossibilità tecnica, efficienza economica sproporzionata o interessi di protezione contrastanti. La situazione concreta deve essere esaminata secondo le linee guida di Ginevra.",
      sourceIds: ['ge-obligation', 'ge-consommateurs'],
    },
    {
      question: "Ho bisogno di un permesso di costruire?",
      answer:
        "No, non sempre. I sistemi sufficientemente adattati possono essere esenti da licenza alle condizioni applicabili; Altri progetti potrebbero richiedere procedure di costruzione adeguate.",
      sourceIds: ['ge-obligation', 'ge-meldung'],
    },
    {
      question: "Cosa significa il periodo di 14 giorni?",
      answer:
        "Per determinati progetti solari che non necessitano di autorizzazione, a partire da febbraio 2026 l'inizio dei lavori deve essere comunicato con 14 giorni di anticipo. Il termine ridotto non si applica automaticamente a tutti i progetti solari.",
      sourceIds: ['ge-meldung'],
    },
    {
      question: "Gli 80 milioni di franchi sono finanziamenti puramente fotovoltaici?",
      answer:
        "No. 80 milioni di franchi rappresentano l’intero budget del finanziamento energetico di Ginevra per il 2026 e non un puro fondo di finanziamento per il fotovoltaico. I programmi specifici di finanziamento e di costruzione del fotovoltaico devono essere esaminati separatamente secondo i loro termini.",
      sourceIds: ['ge-foerderung'],
    },
    {
      question: "Altre ristrutturazioni energetiche possono far scattare l’obbligo?",
      answer:
        "Sì, alcune ristrutturazioni legate all'energia, oltre ai nuovi edifici e alle ristrutturazioni dei tetti, possono rientrare nelle norme di Ginevra sull'uso solare. Se questo sia il caso dipende dal tipo e dalla portata del progetto specifico.",
      sourceIds: ['ge-obligation'],
    },
    {
      question: "Come funziona il finanziamento federale tramite Pronovo?",
      answer:
        "Il più importante finanziamento federale per il fotovoltaico passa attraverso Pronovo; Attualmente a partire da 2 kW si applica il normale pagamento una tantum. Ulteriori bonus federali, ad esempio per angoli di inclinazione a partire da 75° o impianti qualificanti a partire da 100 kW, sono opzioni di finanziamento volontarie con requisiti propri e non possono essere sommati forfettariamente con altri contributi per creare una somma garantita.",
      sourceIds: ['ge-pronovo'],
    },
    {
      question: "Dove posso trovare informazioni sulla normativa energetica ed edilizia?",
      answer:
        "L'OCEN è presente a Ginevra per le questioni legate all'energia. L'OAC è importante anche per la classificazione del diritto edilizio e per qualsiasi domanda di costruzione.",
      sourceIds: ['ge-obligation', 'ge-meldung'],
    },
  ],
  sources: [...sources],
};