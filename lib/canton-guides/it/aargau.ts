import type { CantonGuide } from "../types";
export const guide: CantonGuide = {
  id: "aargau",
  path: "/it/fotovoltaico-argovia",
  canton: "Argovia",
  title: "Fotovoltaico in Argovia 2026: obblighi e incentivi | PvPro.ch",
  description:
    "Fotovoltaico in Argovia: obbligo solare per nuove costruzioni, incentivi, procedura di notifica e regole per tetti e facciate nel 2026.",
  h1: "Fotovoltaico in Argovia: cosa vale nel 2026 per i proprietari",
  intro: [
    "In Argovia l’obbligo solare riguarda soltanto determinate nuove costruzioni, non tutti gli edifici esistenti. Qui scoprite quali regole si applicano e quale sostegno è disponibile per consulenza e risanamento.",
  ],
  quickFacts: [
    {
      value: ">300 m²",
      label:
        "superficie determinante dell’edificio per le nuove costruzioni interessate",
      sourceIds: ["ag-solarbroschuere-2026", "ag-energy-law"],
    },
    {
      value: "20 %",
      label: "superficie minima dei moduli quando si applica l’obbligo",
      sourceIds: ["ag-solarbroschuere-2026", "ag-energy-law"],
    },
    {
      value: "30 giorni",
      label: "termine d’attesa dopo una notifica senza opposizioni",
      sourceIds: ["ag-solarbroschuere-2026"],
    },
    {
      value: "CHF 350",
      label:
        "contributo cantonale per la consulenza sull’elettricità autoprodotta; partecipazione propria da CHF 150",
      sourceIds: ["ag-beratung-2026"],
    },
  ],
  sections: [
    {
      id: "entscheidung",
      title: "Albero decisionale: si applica l’obbligo solare argoviese?",
      paragraphs: [
        "No, l’obbligo solare argoviese secondo il § 26a dell’ordinanza sull’energia non si applica a ogni casa. Riguarda determinate nuove costruzioni.",
        "È determinante una superficie dell’edificio superiore a 300 m². Le case unifamiliari (categoria di edificio SIA II) sono escluse anche quando più edifici insieme superano 300 m².",
      ],
      sourceIds: ["ag-energy-law", "ag-solarbroschuere-2026"],
      notice: {
        title: "Importante per i proprietari",
        text: "Una superficie superiore a 300 m² non significa che ogni casa unifamiliare esistente sia soggetta all’obbligo solare. Verificate insieme nuova costruzione, categoria di edificio, superficie e possibili eccezioni.",
        status: "important",
      },
      module: {
        kind: "decision-tree",
        title: "La mia nuova costruzione è soggetta all’obbligo solare?",
        intro:
          "Rispondete a queste domande nell’ordine indicato per capire rapidamente se l’obbligo riguarda il vostro progetto.",
        items: [
          {
            title: "1. È una nuova costruzione?",
            text: "No: questo obbligo non si applica in generale agli edifici esistenti. Sì: verificate la categoria e la superficie determinante dell’edificio.",
            sourceIds: ["ag-energy-law", "ag-solarbroschuere-2026"],
          },
          {
            title: "2. È una casa unifamiliare (categoria di edificio SIA II)?",
            text: "Sì: secondo l’attuale opuscolo solare argoviese, queste case sono escluse, anche se più edifici insieme superano 300 m². No: verificate la superficie.",
            sourceIds: ["ag-solarbroschuere-2026"],
          },
          {
            title: "3. La superficie determinante dell’edificio supera 300 m²?",
            text: "No: l’obbligo non si applica. Sì: sul tetto o sulla facciata va in linea di principio prevista un’installazione fotovoltaica o solare termica.",
            sourceIds: ["ag-energy-law", "ag-solarbroschuere-2026"],
          },
          {
            title: "4. Si applica un’eccezione?",
            text: "Sì: prescrizioni di tutela o costi previsti eccessivi possono consentire un’eccezione. I dettagli sono riportati sotto. No: l’impianto deve coprire almeno il 20 % della superficie determinante dell’edificio.",
            sourceIds: ["ag-energy-law", "ag-solarbroschuere-2026"],
          },
        ],
      },
    },
    {
      id: "solarpflicht",
      title: "Cosa comporta concretamente l’obbligo solare argoviese?",
      paragraphs: [
        "Per una nuova costruzione interessata, i moduli fotovoltaici o un impianto solare termico su tetto o facciata devono coprire almeno il 20 % della superficie determinante dell’edificio. Conta la superficie, non una potenza prestabilita in kilowatt.",
        "Nel calcolo si sommano moduli fotovoltaici e assorbitori vetrati con rivestimento selettivo. La superficie dell’edificio determinante per il calcolo è ufficialmente la «superficie computabile dell’edificio».",
        "La regola non è un obbligo per ogni edificio esistente. Oltre alle case unifamiliari della categoria II, sono previste altre eccezioni, ad esempio per strutture pressostatiche, serre con tetto vetrato e tunnel di plastica.",
        "Un’esenzione può essere possibile in caso di maggiori esigenze di tutela degli insediamenti o del paesaggio oppure di sproporzione economica. L’opuscolo indica come criteri economici l’assenza di ammortamento entro 25 anni e una produzione annua prevista inferiore a 70 kWh/m² per il fotovoltaico o 200 kWh/m² per il solare termico. Sono criteri legali, non garanzie di rendimento o ammortamento.",
      ],
      bullets: [
        "Per un impianto interessato vale la superficie minima del 20 %, non un requisito forfettario in kilowatt.",
        "L’eccezione deve essere motivata in modo verificabile nella documentazione edilizia ed energetica.",
      ],
      sourceIds: ["ag-energy-law", "ag-solarbroschuere-2026"],
    },
    {
      id: "foerderung",
      title: "Incentivi 2026 in Argovia",
      paragraphs: [
        "Per l’impianto solare stesso è competente la rimunerazione unica federale (RU) tramite Pronovo. Il Cantone versa CHF 350 per la consulenza di base sull’elettricità autoprodotta; CHF 20, CHF 30 o CHF 100 per m² sono concessi soltanto insieme a un risanamento incentivato e al fotovoltaico.",
        "L’importo della RU è determinato secondo le condizioni federali vigenti per il singolo progetto. La RU è distinta dalla consulenza cantonale e dai contributi per l’involucro dell’edificio.",
        "La consulenza di base tratta fra l’altro il potenziale fotovoltaico, l’autoconsumo, l’accumulatore, la mobilità elettrica e il consumo di elettricità. La partecipazione dei clienti parte da CHF 150. È una prestazione di pianificazione, non un ulteriore sussidio per l’impianto.",
        "I tre contributi per l’involucro presuppongono l’installazione contemporanea di un impianto fotovoltaico: CHF 20 per m² per un tetto piano verde, CHF 30 per m² per un impianto sovrapposto su tetto inclinato e CHF 100 per m² per un impianto integrato o in facciata su tetto inclinato.",
      ],
      bullets: [
        "Tetto piano verde con FV: +CHF 20/m² nell’ambito della misura per l’involucro.",
        "Tetto inclinato con impianto sovrapposto: +CHF 30/m² nell’ambito della misura per l’involucro.",
        "Tetto inclinato con impianto integrato o in facciata: +CHF 100/m² nell’ambito della misura per l’involucro.",
        "Questi tre importi non sono un contributo per un impianto FV ordinato da solo. La domanda per il risanamento incentivabile va verificata prima dell’inizio dei lavori.",
      ],
      sourceIds: ["ag-pronovo", "ag-beratung-2026", "ag-programm-2026"],
      notice: {
        title: "Da non confondere",
        text: "I CHF 350 finanziano la consulenza, non l’impianto solare. Anche CHF 20, CHF 30 e CHF 100 per m² sono vincolati a un risanamento incentivato dell’involucro con FV.",
        status: "important",
      },
    },
    {
      id: "bewilligung",
      title: "Autorizzazione o procedura di notifica?",
      paragraphs: [
        "Dal 1° gennaio 2026, per impianti sufficientemente adattati su tetti o facciate spesso basta una notifica invece di una domanda di costruzione completa. Ciò non vale automaticamente per ogni facciata.",
        "Per oggetti protetti, insediamenti sensibili o impianti non sufficientemente adattati può essere necessaria un’autorizzazione edilizia. La notifica avviene mediante il modulo cantonale per impianti solari sulla piattaforma online EVEN.",
        "Prima dell’inizio dei lavori vanno presentati integralmente il prospetto, la sezione quotata, i dati dell’impianto, le schede tecniche e il piano di orientamento.",
      ],
      sourceIds: ["ag-solarbroschuere-2026", "ag-energy-law"],
      module: {
        kind: "process-flow",
        title: "La procedura argoviese",
        intro:
          "La sufficienza della notifica dipende da configurazione, ubicazione e stato di protezione.",
        items: [
          {
            title: "1. Classificare il progetto",
            text: "Impianto su tetto o facciata sufficientemente adattato: verificare la notifica. Se non è sufficientemente adattato, riguarda un oggetto protetto o una zona sensibile: chiarire l’autorizzazione con il Comune.",
            sourceIds: ["ag-solarbroschuere-2026"],
          },
          {
            title: "2. Inoltrare la notifica tramite EVEN",
            text: "Il modulo di notifica va compilato prima dell’inizio dei lavori, allegando prospetto, sezione quotata, dati dell’impianto, schede tecniche e piano di orientamento.",
            sourceIds: ["ag-solarbroschuere-2026"],
          },
          {
            title: "3. Attendere 30 giorni",
            text: "Un impianto soggetto a notifica può essere realizzato se l’autorità non solleva obiezioni entro 30 giorni dal ricevimento. In caso di obiezioni o obbligo di autorizzazione fa stato la decisione dell’autorità competente.",
            sourceIds: ["ag-solarbroschuere-2026"],
          },
        ],
      },
    },
    {
      id: "kosten",
      title: "Quanto costa qui un impianto fotovoltaico?",
      paragraphs: [
        "Il Cantone non pubblica un prezzo FV fisso. Contano soprattutto il tetto, le dimensioni dell’impianto e l’equipaggiamento desiderato.",
        "Una buona offerta descrive l’edificio concreto e indica separatamente i lavori. Potete così confrontare condizioni degli incentivi, autoconsumo ed esecuzione tecnica.",
        "Il confronto più utile non è quindi un prezzo online forfettario, bensì più offerte per lo stesso progetto.",
      ],
      bullets: [
        "Superficie e forma del tetto, superficie utilizzabile per i moduli e soluzione sovrapposta, integrata o in facciata adatta",
        "Potenza e orientamento dell’impianto",
        "Ponteggi, accesso e oneri di cantiere",
        "Lavori elettrici, contatore e raccordo alla rete",
        "Inverter",
        "Accumulatore a batteria e infrastruttura di ricarica",
        "Autoconsumo domestico previsto",
        "Esperienza, garanzie ed estensione delle prestazioni dell’installatore",
      ],
      sourceIds: ["ag-pronovo", "ag-solarbroschuere-2026"],
    },
    {
      id: "fuer-wen",
      title: "Per chi conviene particolarmente il fotovoltaico in Argovia?",
      paragraphs: [
        "Occorre pianificare con particolare anticipo una nuova costruzione che supera la soglia di superficie. Scegliete tempestivamente fra fotovoltaico e solare termico affinché tetto, facciata, progettazione elettrica e giustificativo energetico siano coordinati.",
        "Per un edificio esistente, una consulenza di base è utile se si pianificano insieme risanamento del tetto, accumulatore, pompa di calore, mobilità elettrica o maggiore autoconsumo. Se isolate contemporaneamente l’involucro, verificate i tre casi di bonus senza confonderli con un incentivo FV generale.",
      ],
      sourceIds: ["ag-energy-law", "ag-beratung-2026", "ag-programm-2026"],
    },
  ],
  faqs: [
    {
      question: "In Argovia vige un obbligo solare?",
      answer:
        "Sì, ma non per ogni edificio. Per determinate nuove costruzioni con oltre 300 m² di superficie determinante va in linea di principio previsto il fotovoltaico o il solare termico su tetto o facciata. Vanno verificate l’esclusione delle case unifamiliari SIA categoria II e le altre eccezioni legali.",
      sourceIds: ["ag-energy-law", "ag-solarbroschuere-2026"],
    },
    {
      question: "Le case unifamiliari sono interessate?",
      answer:
        "No, secondo l’opuscolo solare le case unifamiliari SIA categoria II sono espressamente escluse, anche se più edifici insieme superano 300 m² di superficie determinante. Per altre categorie resta importante verificare la superficie.",
      sourceIds: ["ag-solarbroschuere-2026"],
    },
    {
      question:
        "Quanto deve essere grande l’impianto in una nuova costruzione interessata?",
      answer:
        "I moduli fotovoltaici e gli assorbitori vetrati con rivestimento selettivo di un impianto solare termico devono coprire insieme almeno il 20 % della superficie determinante. La regola non stabilisce una potenza minima forfettaria in kilowatt.",
      sourceIds: ["ag-energy-law", "ag-solarbroschuere-2026"],
    },
    {
      question: "Un impianto FV richiede un’autorizzazione edilizia?",
      answer:
        "Non necessariamente. Un impianto sufficientemente adattato su tetto o facciata può essere soggetto a notifica. Per oggetti protetti, zone sensibili o adattamento insufficiente va chiarita l’autorizzazione; il modulo si inoltra tramite EVEN.",
      sourceIds: ["ag-solarbroschuere-2026"],
    },
    {
      question: "Quali incentivi sono disponibili nel 2026?",
      answer:
        "La rimunerazione unica federale (RU) è gestita da Pronovo. Il Cantone sostiene inoltre con CHF 350 la consulenza di base sull’elettricità autoprodotta; la partecipazione dei clienti parte da CHF 150. CHF 20, CHF 30 o CHF 100 per m² riguardano la combinazione di isolamento dell’involucro e fotovoltaico, non un incentivo FV autonomo.",
      sourceIds: ["ag-pronovo", "ag-beratung-2026", "ag-programm-2026"],
    },
    {
      question: "Esiste un bonus per risanamento del tetto e fotovoltaico?",
      answer:
        "Sì, se il fotovoltaico è realizzato contemporaneamente alla misura incentivata per l’involucro. Il bonus è di CHF 20/m² per tetti piani verdi, CHF 30/m² per impianti sovrapposti su tetti inclinati o CHF 100/m² per impianti integrati su tetti inclinati o in facciata.",
      sourceIds: ["ag-programm-2026"],
    },
    {
      question: "Quando posso iniziare i lavori dopo la notifica?",
      answer:
        "Per un impianto sufficientemente adattato soggetto a notifica, l’esecuzione può iniziare se l’autorità non solleva obiezioni entro 30 giorni dal ricevimento. Prima, la notifica deve essere inoltrata integralmente tramite EVEN.",
      sourceIds: ["ag-solarbroschuere-2026"],
    },
  ],
  sources: [
    {
      id: "ag-solarbroschuere-2026",
      authority: "Kanton Aargau",
      title: "Opuscolo solare, 4a edizione 2026",
      url: "https://www.ag.ch/media/kanton-aargau/bvu/energie/bauen-energie/vollzugshilfen-und-formulare/solarbroschuere-2026.pdf",
    },
    {
      id: "ag-energy-law",
      authority: "Kanton Aargau",
      title:
        "Ordinanza sull’energia § 26a ed esecuzione della legislazione energetica",
      url: "https://gesetzessammlungen.ag.ch/app/de/texts_of_law/773.211/versions/3276",
    },
    {
      id: "ag-programm-2026",
      authority: "Kanton Aargau",
      title: "Programma d’incentivazione Energia 2026",
      url: "https://www.ag.ch/media/kanton-aargau/bvu/energie/foerderungen/foerderprogramm-2026.pdf",
    },
    {
      id: "ag-beratung-2026",
      authority: "Kanton Aargau",
      title: "Consulenze nel programma d’incentivazione 2026",
      url: "https://www.ag.ch/media/kanton-aargau/bvu/energie/foerderungen/beratungen-foerderprogramm.pdf",
    },
    {
      id: "ag-pronovo",
      authority: "Pronovo / Confederazione",
      title: "Rimunerazione unica (RU) per impianti fotovoltaici",
      url: "https://pronovo.ch/de/foerderung/photovoltaik",
    },
  ],
};
