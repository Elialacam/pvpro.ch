import type { CantonGuide } from "../types";
const sources = [
  {
    id: "ar-km21",
    authority: "Kanton Appenzell Ausserrhoden",
    title: "kM-21 Impianto fotovoltaico",
    url: "https://ar.ch/verwaltung/departement-bau-und-volkswirtschaft/amt-fuer-umwelt/energie/foerderung/kantonale-foerderung/km-21-photovoltaikanlage-1-1",
  },
  {
    id: "ar-2027",
    authority: "Kanton Appenzell Ausserrhoden",
    title: "Incentivi cantonali e adeguamento dal 1° gennaio 2027",
    url: "https://ar.ch/verwaltung/departement-bau-und-volkswirtschaft/amt-fuer-umwelt/energie/foerderung/kantonale-foerderung",
  },
  {
    id: "ar-energy-statistics",
    authority: "Kanton Appenzell Ausserrhoden",
    title: "Energia solare e potenziale solare",
    url: "https://ar.ch/verwaltung/departement-bau-und-volkswirtschaft/amt-fuer-umwelt/energie/erneuerbare-energien/solarenergie",
  },
  {
    id: "ar-energy-concept",
    authority: "Kanton Appenzell Ausserrhoden",
    title: "Strategia energetica cantonale 2026–2035",
    url: "https://ar.ch/verwaltung/kantonskanzlei/rechtsdienst/politische-rechte/vernehmlassungen/abgeschlossene-vernehmlassungen/2026",
  },
  {
    id: "pronovo-eiv",
    authority: "Pronovo SA su incarico della Confederazione",
    title: "Incentivi per impianti fotovoltaici",
    url: "https://pronovo.ch/de/foerderung/photovoltaik",
  },
] as const;
export const guide: CantonGuide = {
  id: "appenzell-ausserrhoden",
  path: "/it/fotovoltaico-appenzello-esterno",
  canton: "Appenzello Esterno",
  title: "Fotovoltaico in Appenzello Esterno: incentivi 2026/27 | PvPro.ch",
  description:
    "Incentivi FV in Appenzello Esterno: supplemento del 50% alla RU nel 2026, disciplina transitoria e nuovi incentivi per l’elettricità invernale dal 2027.",
  h1: "Fotovoltaico in Appenzello Esterno: incentivi 2026 e novità dal 2027",
  intro: [
    "Nel 2026 Appenzello Esterno può sostenere un impianto solare in aggiunta agli incentivi federali. Dal 2027 gli incentivi saranno maggiormente orientati all’elettricità invernale e all’isolamento termico. La regola applicabile dipende dalla tempistica del progetto.",
  ],
  quickFacts: [
    {
      value: "2026",
      label: "Fino al 50 % in aggiunta all’incentivo federale definitivo",
      sourceIds: ["ar-km21"],
    },
    {
      value: "2027",
      label: "Incentivi maggiormente orientati all’elettricità invernale",
      sourceIds: ["ar-2027"],
    },
    {
      value: "≥75°",
      label:
        "Inclinazione per gli incentivi all’elettricità invernale dal 2027",
      sourceIds: ["ar-2027"],
    },
    {
      value: "CHF 300/kW",
      label: "Contributo previsto per impianti invernali dal 2027",
      sourceIds: ["ar-2027"],
    },
    {
      value: "Prima dei lavori",
      label: "In futuro la domanda andrà presentata in anticipo",
      sourceIds: ["ar-2027"],
    },
  ],
  sections: [
    {
      id: "timeline",
      title: "2026 → transizione → dal 2027",
      paragraphs: [
        "È determinante la data dalla quale l’impianto fornisce elettricità. Dal 1° gennaio 2022 al 31 agosto 2025, kM-21 prevedeva al massimo il 100 % del contributo unico federale (RU); dal 1° settembre 2025 il massimo attuale è il 50 %, in entrambi i casi non oltre CHF 100’000 per progetto.",
        "Per gli impianti che forniscono elettricità per la prima volta dal 1° gennaio al 31 dicembre 2026 vale un termine transitorio fino a fine 2027, se non sono ottimizzati per l’inverno né combinati con isolamento. Il 50 % si riferisce al contributo unico federale, non ai costi d’investimento. La domanda va presentata entro fine 2027; restano determinanti gli altri requisiti.",
        "Dal 1° gennaio 2027 sono previsti almeno 75° d’inclinazione, CHF 300/kW in aggiunta al bonus nazionale per l’angolo d’inclinazione e CHF 90–150/m² per la combinazione con isolamento. La domanda dovrà essere presentata prima dell’inizio dei lavori.",
      ],
      sourceIds: ["ar-km21", "ar-2027"],
      module: {
        kind: "timeline",
        title:
          "Quale regola vale quando l’impianto inizia a fornire elettricità?",
        intro: "Le date indicano l’incentivo applicabile in ciascun periodo.",
        items: [
          {
            title: "Dal 1° gennaio 2022 al 31 agosto 2025",
            value: "max. 100 % RU",
            text: "Periodo precedente: massimo 100 % della RU federale definitiva.",
            sourceIds: ["ar-km21"],
          },
          {
            title: "Dal 1° settembre 2025 a fine 2026",
            value: "max. 50 % RU",
            text: "Regola attuale 2026 per impianti aventi diritto; massimo CHF 100’000 per progetto.",
            sourceIds: ["ar-km21"],
          },
          {
            title: "Transizione fino a fine 2027",
            value: "Domanda entro fine 2027",
            text: "Gli impianti 2022–2026 senza ottimizzazione invernale o combinazione con isolamento possono presentare domanda entro fine 2027.",
            sourceIds: ["ar-2027"],
          },
          {
            title: "Dal 1° gennaio 2027",
            value: "prima dei lavori",
            text: "Previsti: almeno 75°, CHF 300/kW aggiuntivi e CHF 90–150/m² con isolamento.",
            sourceIds: ["ar-2027"],
          },
        ],
      },
      notice: {
        title: "Non confondere 2026 e 2027",
        text: "La regola del 50 % appartiene all’attuale kM-21. Elettricità invernale e isolamento sono previsti dal 2027; prima di pianificare va verificata la guida allora vigente.",
        status: "future",
      },
    },
    {
      id: "regeln",
      title: "Chi riceve il contributo cantonale nel 2026?",
      paragraphs: [
        "Il contributo 2026 è destinato a un nuovo impianto fotovoltaico o a un ampliamento nel Cantone, collegato alla rete, con almeno 2 kWp e incentivi federali. Per la domanda serve la decisione definitiva di Pronovo, ufficialmente una decisione Pronovo passata in giudicato; mera sostituzione, risanamento, manutenzione e riparazioni sono esclusi.",
        "Sono esclusi la rimunerazione unica elevata senza consumo proprio (HEIV senza consumo proprio) e gli impianti in asta FV. Se un obbligo di produzione propria impone una dimensione minima, tale parte non riceve un contributo aggiuntivo. Contributi di terzi possono ridurre quello cantonale, eccetto quelli comunali; il bonus d’altitudine da 1’500 m s.l.m. non viene aumentato.",
      ],
      bullets: [
        "Sono necessari raccordo alla rete e almeno 2 kWp.",
        "La decisione Pronovo definitiva è la base di calcolo.",
        "HEIV senza consumo proprio e impianti in asta FV sono esclusi.",
        "I contributi di terzi possono ridurre quello cantonale; fanno eccezione i contributi comunali.",
      ],
      sourceIds: ["ar-km21", "pronovo-eiv"],
    },
    {
      id: "statistik",
      title: "Perché AR punta sull’elettricità invernale",
      paragraphs: [
        "AR orienta maggiormente gli incentivi all’inverno perché gli impianti più ripidi spostano più produzione nella stagione fredda. Nel 2024 Appenzello Esterno ha prodotto circa 80 GWh di elettricità rinnovabile, circa il 24 % del consumo cantonale; il 77 % proveniva dal solare.",
        "A fine 2024 il FV copriva circa il 10 % dei tetti e delle facciate idonei. Entro il 2035 almeno il 40 % del consumo cantonale dovrà provenire da fonti rinnovabili; gli impianti prevalentemente su tetto producono circa tre quarti nel semestre estivo. Non è una garanzia di resa o incentivo.",
      ],
      sourceIds: ["ar-energy-statistics", "ar-energy-concept"],
      module: {
        kind: "statistics",
        title: "Situazione iniziale in Appenzello Esterno",
        intro:
          "Le cifre spiegano l’orientamento degli incentivi, ma non sono una previsione di redditività.",
        items: [
          {
            title: "Produzione elettrica rinnovabile 2024",
            value: "circa 80 GWh",
            text: "Elettricità rinnovabile nel Cantone nel 2024.",
            sourceIds: ["ar-energy-concept"],
          },
          {
            title: "Quota del consumo cantonale",
            value: "circa 24 %",
            text: "Quota del consumo elettrico cantonale.",
            sourceIds: ["ar-energy-concept"],
          },
          {
            title: "Quota di energia solare",
            value: "77 %",
            text: "Quota solare di questa produzione.",
            sourceIds: ["ar-energy-concept"],
          },
          {
            title: "Tetti e facciate idonei",
            value: "circa 10 % coperti",
            text: "Stato a fine 2024.",
            sourceIds: ["ar-energy-statistics", "ar-energy-concept"],
          },
          {
            title: "Obiettivo cantonale 2035",
            value: "almeno 40 %",
            text: "Obiettivo per il consumo elettrico cantonale.",
            sourceIds: ["ar-energy-concept"],
          },
          {
            title: "Semestre estivo per impianti su tetto",
            value: "circa tre quarti",
            text: "Gli impianti su tetto producono circa tre quarti in estate; quelli più ripidi più elettricità invernale.",
            sourceIds: ["ar-energy-concept"],
          },
        ],
      },
    },
    {
      id: "foerderung",
      title: "Incentivi 2026 in Appenzello Esterno",
      paragraphs: [
        "Nel 2026 kM-21 può aggiungere al massimo il 50 % della RU federale definitiva, fino a CHF 100’000 per progetto. Il 50 % non si riferisce ai costi d’installazione e non è garantito per ogni progetto.",
        "Pronovo determina dapprima la RU federale. Nel 2026 la domanda cantonale si presenta online dopo la messa in servizio e la decisione Pronovo passata in giudicato; per gli incentivi invernali o all’isolamento previsti dal 2027 va pianificata prima dei lavori.",
      ],
      sourceIds: ["ar-km21", "ar-2027", "pronovo-eiv"],
    },
    {
      id: "bewilligung",
      title: "Autorizzazione, pianificazione e inoltro",
      paragraphs: [
        "La domanda d’incentivo non sostituisce la verifica edilizia. Prima dell’incarico vanno chiariti forma del tetto, interessi di tutela, raccordo alla rete e competenza comunale; nel 2026 la domanda segue la conclusione, per le varianti annunciate dal 2027 precede i lavori.",
        "Dati del progetto e dell’impianto, messa in servizio, raccordo e decisione RU definitiva formano un insieme. Ampliamenti, sostituzioni e contributi di terzi vanno classificati separatamente.",
      ],
      sourceIds: ["ar-km21", "ar-2027"],
    },
    {
      id: "kosten",
      title: "Quanto costa qui un impianto fotovoltaico?",
      paragraphs: [
        "Il Cantone non pubblica un prezzo FV fisso. Contano soprattutto tetto, dimensioni ed equipaggiamento.",
        "Anche accesso, contatore, raccordo, stato del tetto e isolamento possono cambiare l’offerta. Oltre al totale, confrontate superficie dei moduli, montaggio, posizioni elettriche, accumulatore, garanzie e responsabilità per le domande.",
        "Il confronto più utile non è un prezzo online forfettario, bensì più offerte per lo stesso progetto.",
      ],
      bullets: [
        "Superficie e forma del tetto",
        "Potenza dell’impianto",
        "Ponteggi",
        "Lavori elettrici",
        "Accumulatore a batteria",
        "Autoconsumo",
        "Inverter",
        "Installatore / prestazioni",
      ],
      sourceIds: ["ar-km21", "ar-2027"],
    },
    {
      id: "fuer-wen",
      title: "Per chi conviene particolarmente un impianto solare?",
      paragraphs: [
        "La situazione è più chiara con tetto idoneo, autoconsumo affidabile, raccordo e impianto ammesso alla RU da almeno 2 kWp. Con autoconsumo elevato vanno verificati l’esclusione HEIV e il carico dell’edificio prima del dimensionamento.",
        "Tetti ripidi o facciate possono corrispondere alla logica invernale annunciata. Un isolamento previsto va valutato come progetto complessivo; semplici sostituzioni, riparazioni o risanamenti non sono ammessi da kM-21.",
      ],
      sourceIds: ["ar-km21", "ar-2027"],
    },
  ],
  faqs: [
    {
      question: "A quanto ammonta il contributo cantonale FV nel 2026?",
      answer:
        "Dal 1° settembre 2025 è possibile al massimo il 50 % della RU definitiva, fino a CHF 100’000 per progetto. Non è il 50 % dei costi d’investimento. Dal 1° gennaio 2022 al 31 agosto 2025 kM-21 indicava al massimo il 100 % della RU.",
      sourceIds: ["ar-km21"],
    },
    {
      question: "Quando devo presentare la domanda?",
      answer:
        "Nel 2026 dopo la prima fornitura di elettricità e la decisione definitiva Pronovo. Per gli incentivi invernali o all’isolamento previsti dal 2027, prima dei lavori.",
      sourceIds: ["ar-km21", "ar-2027"],
    },
    {
      question: "Quali impianti sono esclusi?",
      answer:
        "Sono esclusi i meri casi di sostituzione e risanamento, la rimunerazione unica elevata senza consumo proprio (HEIV senza consumo proprio) e gli impianti in asta FV. La dimensione minima imposta per legge da un obbligo di produzione propria non riceve contributi aggiuntivi.",
      sourceIds: ["ar-km21"],
    },
    {
      question: "Cosa cambia il 1° gennaio 2027?",
      answer:
        "Dal 1° gennaio 2027 gli incentivi dovrebbero privilegiare l’elettricità invernale e il fotovoltaico abbinato all’isolamento termico: sono previsti un’inclinazione dei moduli di almeno 75°, CHF 300/kW in aggiunta al bonus nazionale legato all’angolo d’inclinazione e CHF 90–150/m² in caso di isolamento. La domanda dovrebbe essere presentata prima dell’inizio dei lavori.",
      sourceIds: ["ar-2027"],
    },
    {
      question: "Cosa significa inclinazione ≥75°?",
      answer:
        "È l’angolo rispetto all’orizzontale. Da 75° l’impianto è considerato ottimizzato per l’inverno secondo l’approccio AR annunciato. Verificate il progetto con la guida allora vigente.",
      sourceIds: ["ar-2027"],
    },
    {
      question: "Come funziona il termine transitorio fino a fine 2027?",
      answer:
        "Gli impianti dal 1° gennaio 2022 al 31 dicembre 2026 senza ottimizzazione invernale e combinazione con isolamento possono presentare domanda entro fine 2027. Non è una garanzia generale; restano determinanti gli altri requisiti.",
      sourceIds: ["ar-2027", "ar-km21"],
    },
  ],
  sources: [...sources],
};
