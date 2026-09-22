import type { CantonGuide } from "../types";
export const guide: CantonGuide = {
  id: "appenzell-innerrhoden",
  path: "/it/fotovoltaico-appenzello-interno",
  canton: "Appenzello Interno",
  title: "Fotovoltaico in Appenzello Interno: incentivi e regole | PvPro.ch",
  description:
    "Fotovoltaico in Appenzello Interno: RU federale, consulenza solare a CHF 100, produzione propria nelle nuove costruzioni e autorizzazioni.",
  h1: "Fotovoltaico in Appenzello Interno: incentivi, consulenza e autorizzazioni",
  intro: [
    "In Appenzello Interno gli incentivi per l’impianto solare provengono dalla Confederazione tramite Pronovo. La consulenza solare cantonale, separata, costa CHF 100. Le nuove costruzioni devono produrre autonomamente una parte dell’elettricità. Ecco le regole principali.",
  ],
  quickFacts: [
    {
      value: "CHF 100",
      label:
        "costo della consulenza solare, non un incentivo per l’impianto FV",
      sourceIds: ["ai-programme"],
    },
    {
      value: "Gratuita",
      label:
        "se la consulenza solare si svolge insieme alla consulenza «calore rinnovabile»",
      sourceIds: ["ai-programme"],
    },
    {
      value: "Pronovo",
      label: "gli incentivi per l’impianto provengono dalla Confederazione",
      sourceIds: ["ai-pronovo"],
    },
    {
      value: "Nuove costruzioni",
      label: "devono produrre autonomamente una parte dell’elettricità",
      sourceIds: ["ai-energievollzug", "ai-implementation-2020"],
    },
  ],
  sections: [
    {
      id: "saeulen",
      title: "Appenzello Interno in tre pilastri",
      paragraphs: [
        "Per un progetto solare in Appenzello Interno occorre distinguere incentivi federali, consulenza e procedura edilizia. I CHF 100 sono pagati per la consulenza, non come contributo all’impianto.",
      ],
      sourceIds: ["ai-pronovo", "ai-programme", "ai-solaranlagen"],
      notice: {
        title: "Da non confondere",
        text: "I CHF 100 sono il costo della consulenza, non l’incentivo per l’impianto fotovoltaico. Gli incentivi per l’impianto passano dalla Confederazione e da Pronovo.",
        status: "important",
      },
      module: {
        kind: "pillars",
        title: "I tre elementi di un progetto solare",
        intro: "I tre elementi hanno competenze e condizioni diverse.",
        items: [
          {
            title: "Incentivi federali",
            text: "La rimunerazione unica federale (RU) per un impianto fotovoltaico è gestita da Pronovo. Le fonti esaminate non indicano un sussidio cantonale generale per l’impianto.",
            sourceIds: ["ai-pronovo"],
          },
          {
            title: "Consulenza solare a CHF 100",
            text: "La consulenza orientativa sull’energia solare dell’associazione Energie AR/AI costa CHF 100. È gratuita se svolta contemporaneamente alla consulenza «calore rinnovabile».",
            sourceIds: ["ai-programme"],
          },
          {
            title: "Notifica o autorizzazione",
            text: "Un impianto solare su tetto sufficientemente adattato in zona edificabile o agricola è soggetto a notifica. Gli altri impianti necessitano di autorizzazione edilizia.",
            sourceIds: ["ai-solaranlagen"],
          },
        ],
      },
    },
    {
      id: "eigenstrom",
      title: "Elettricità propria nelle nuove costruzioni",
      paragraphs: [
        "Sì. Dal 1° aprile 2020, un nuovo edificio deve produrre autonomamente una parte dell’elettricità; il fotovoltaico è una possibile soluzione.",
        "La legge e l’ordinanza sull’energia rivedute sono entrate in vigore il 1° aprile 2020. Secondo l’aiuto all’esecuzione cantonale, l’obbligo vale anche per ampliamenti e sopraelevazioni che superano il limite per gli interventi minori.",
      ],
      bullets: [
        "La dimensione concreta dell’impianto è stabilita nel giustificativo energetico. Non è prescritta una cifra generale in kilowatt.",
        "Non sono ammessi né una tassa sostitutiva né una compensazione tramite un altro edificio.",
        "Un’eccedenza prodotta su un altro edificio non sostituisce il requisito per la nuova costruzione interessata.",
        "Anche un edificio certificato Minergie deve soddisfare i requisiti di produzione propria.",
        "In circostanze particolari può essere possibile un’esenzione, da motivare con una maggiore efficienza energetica e il giustificativo cantonale.",
      ],
      sourceIds: ["ai-energievollzug", "ai-implementation-2020"],
      notice: {
        title: "Importante per le nuove costruzioni",
        text: "In Appenzello Interno non esiste una tassa sostitutiva per l’obbligo di produzione propria. Neppure l’eccedenza di un altro edificio vale come sostituzione.",
        status: "important",
      },
    },
    {
      id: "foerderung",
      title: "Inquadrare correttamente gli incentivi",
      paragraphs: [
        "Per l’impianto fotovoltaico vale la rimunerazione unica federale (RU) tramite Pronovo. Le fonti esaminate non indicano un contributo cantonale generale agli investimenti per l’impianto.",
        "Pronovo è responsabile della procedura federale. Condizioni, termini e importo specifico del progetto vanno verificati presso Pronovo.",
        "Il programma cantonale promuove la consulenza orientativa sull’energia solare per impianti termici o elettrici. La partecipazione dei clienti è di CHF 100 e la consulenza è fornita esclusivamente dall’associazione Energie AR/AI.",
        "Se prenotate anche e contemporaneamente la consulenza «calore rinnovabile» presso l’associazione, la consulenza solare è gratuita. Ciò significa nessuna partecipazione per la consulenza combinata, non impianto o elettricità gratuiti.",
      ],
      sourceIds: ["ai-pronovo", "ai-programme"],
    },
    {
      id: "bewilligung",
      title: "Mi serve un’autorizzazione edilizia?",
      paragraphs: [
        "Per un impianto solare su tetto sufficientemente adattato in zona edificabile o agricola basta in linea di principio una notifica. Altri impianti, oggetti protetti o zone protette richiedono un’autorizzazione.",
        "Anche gli impianti non montati sul tetto o non sufficientemente adattati richiedono un’autorizzazione, in particolare nelle zone di protezione degli insediamenti e del paesaggio; un impianto su tetto non è automaticamente esente perché fotovoltaico.",
        "Prima di iniziare, chiarite il promemoria e il modulo cantonali con l’autorità competente.",
      ],
      sourceIds: ["ai-solaranlagen"],
      module: {
        kind: "process-flow",
        title: "Procedura in tre verifiche",
        intro: "Ubicazione e configurazione determinano se basta una notifica.",
        items: [
          {
            title:
              "1. L’impianto è su un tetto in zona edificabile o agricola?",
            text: "Sì: verificate che sia sufficientemente adattato e preparate la notifica. No: chiarite l’autorizzazione edilizia.",
            sourceIds: ["ai-solaranlagen"],
          },
          {
            title:
              "2. È sufficientemente adattato e non interessa oggetti protetti?",
            text: "Sì: è prevista la notifica. Se manca l’adattamento o sono interessati un oggetto protetto, una zona protetta o di protezione degli insediamenti, serve una domanda di costruzione.",
            sourceIds: ["ai-solaranlagen"],
          },
          {
            title: "3. Completare il giustificativo energetico",
            text: "Con la domanda di costruzione inoltrate dossier energetico, moduli, piani e documenti. Prima dell’occupazione o della messa in servizio, la committenza conferma l’esecuzione conforme.",
            sourceIds: ["ai-energievollzug"],
          },
        ],
      },
    },
    {
      id: "kosten",
      title: "Quanto costa qui un impianto fotovoltaico?",
      paragraphs: [
        "Il Cantone non pubblica un prezzo FV fisso. Contano soprattutto tetto, dimensioni ed equipaggiamento.",
        "I CHF 100 sono una partecipazione per la consulenza, non un contributo all’investimento. Una buona offerta descrive l’edificio concreto e indica separatamente i lavori.",
        "Il confronto più utile non è quindi un prezzo online forfettario, bensì più offerte per lo stesso progetto.",
      ],
      bullets: [
        "Superficie, forma e area utilizzabile del tetto; tipo di tetto, sottostruttura e adattamento",
        "Potenza e orientamento",
        "Ponteggi, accesso e oneri di cantiere",
        "Lavori elettrici, contatore e raccordo alla rete",
        "Inverter",
        "Accumulatore e punto di ricarica elettrica",
        "Autoconsumo previsto",
        "Installatore, garanzie, documentazione ed estensione delle prestazioni",
      ],
      sourceIds: ["ai-programme", "ai-solaranlagen", "ai-pronovo"],
    },
    {
      id: "fuer-wen",
      title: "Per chi conviene particolarmente un impianto solare?",
      paragraphs: [
        "Per una nuova casa è essenziale chiarire presto produzione propria, giustificativo energetico, configurazione del tetto e raccordo alla rete. Per ampliamenti o sopraelevazioni maggiori, verificate il limite per interventi minori con il servizio cantonale dell’energia.",
        "Per tetti esistenti, la consulenza è utile se restano da definire potenziale, autoconsumo e collegamento con riscaldamento o mobilità. Chi possiede un oggetto protetto o progetta in una zona di protezione degli insediamenti o del paesaggio dovrebbe chiarire la procedura prima di chiedere offerte.",
      ],
      bullets: [
        "Nuova costruzione o ampliamento rilevante: chiarire prima produzione propria e giustificativo energetico.",
        "Edificio esistente: ricorrere alla consulenza prima della decisione d’investimento.",
        "Oggetto o zona protetti: coordinare presto notifica e autorizzazione con l’autorità.",
      ],
      sourceIds: [
        "ai-implementation-2020",
        "ai-energievollzug",
        "ai-programme",
        "ai-solaranlagen",
      ],
    },
  ],
  faqs: [
    {
      question: "Esiste un contributo cantonale FV in Appenzello Interno?",
      answer:
        "Per il fotovoltaico è documentata la rimunerazione unica federale (RU) tramite Pronovo. L’offerta cantonale è la consulenza orientativa; le fonti esaminate non indicano un sussidio cantonale generale agli investimenti per l’impianto.",
      sourceIds: ["ai-pronovo", "ai-programme"],
    },
    {
      question: "Quanto costa la consulenza solare?",
      answer:
        "Costa CHF 100 ed è fornita esclusivamente dall’associazione Energie AR/AI.",
      sourceIds: ["ai-programme"],
    },
    {
      question: "Quando è gratuita?",
      answer:
        "Quando Energie AR/AI la svolge contemporaneamente alla consulenza «calore rinnovabile». La gratuità riguarda la consulenza, non l’impianto.",
      sourceIds: ["ai-programme"],
    },
    {
      question: "Le nuove costruzioni devono produrre elettricità propria?",
      answer:
        "Sì. Dal 1° aprile 2020 il diritto energetico richiede alle nuove case di produrne una parte. L’obbligo vale anche per ampliamenti e sopraelevazioni oltre il limite minore; il fotovoltaico è una possibile soluzione.",
      sourceIds: ["ai-energievollzug", "ai-implementation-2020"],
    },
    {
      question:
        "Anche gli edifici Minergie devono produrre elettricità propria?",
      answer:
        "Sì. Anche gli edifici certificati Minergie devono rispettare i requisiti cantonali di produzione propria.",
      sourceIds: ["ai-implementation-2020"],
    },
    {
      question: "Mi serve un’autorizzazione edilizia?",
      answer:
        "Un impianto su tetto sufficientemente adattato in zona edificabile o agricola è soggetto a notifica. Negli altri casi, su oggetti protetti o in zone di protezione degli insediamenti e del paesaggio serve un’autorizzazione.",
      sourceIds: ["ai-solaranlagen"],
    },
    {
      question: "Chi versa la RU?",
      answer:
        "La rimunerazione unica federale (RU) è gestita tramite Pronovo. La consulenza cantonale è separata e non sostituisce la RU.",
      sourceIds: ["ai-pronovo", "ai-programme"],
    },
  ],
  sources: [
    {
      id: "ai-pronovo",
      authority: "Pronovo / Confederazione",
      title: "Rimunerazione unica (RU) per impianti fotovoltaici",
      url: "https://pronovo.ch/de/foerderung/photovoltaik",
    },
    {
      id: "ai-programme",
      authority: "Kanton Appenzell Innerrhoden",
      title: "Incentivo cantonale: consulenza orientativa sull’energia solare",
      url: "https://www.ai.ch/themen/planen-und-bauen/energie/foerderprogramme/gebaeudesanierung",
    },
    {
      id: "ai-energievollzug",
      authority: "Kanton Appenzell Innerrhoden",
      title: "Esecuzione energetica e requisiti per nuove costruzioni",
      url: "https://ai.ch/themen/planen-und-bauen/energie/energievollzug",
    },
    {
      id: "ai-implementation-2020",
      authority: "Kanton Appenzell Innerrhoden",
      title:
        "Indicazioni per l’esecuzione della legge cantonale sull’energia, versione 1",
      url: "https://ai.ch/themen/planen-und-bauen/energie/energievollzug/dokumente/hinweise-vollzugspraxis-energ-ai-v-1.pdf/download",
    },
    {
      id: "ai-solaranlagen",
      authority: "Kanton Appenzell Innerrhoden",
      title: "Impianti solari: procedura di notifica e autorizzazione",
      url: "https://www.ai.ch/themen/planen-und-bauen/baugesuch-1/solaranlagen",
    },
  ],
};
