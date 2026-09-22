import type { CantonGuide } from '../types';

const sources = [
  {
    id: 'gl-fp-2026',
    authority: "Canton Glarona",
    title: "Programma di finanziamento energetico 2026, versione 3.2",
    url: 'https://www.gl.ch/public/upload/assets/65023/Flyer2026Apr.pdf?fp=1',
  },
  {
    id: 'gl-conditions',
    authority: "Canton Glarona",
    title: "Condizioni di finanziamento, a luglio 2026",
    url: 'https://www.gl.ch/public/upload/assets/67004/F%C3%B6rderbedingungen.pdf?fp=1',
  },
  {
    id: 'gl-energy-law',
    authority: "Canton Glarona",
    title: "Ordinanza sull'attuazione della legislazione energetica",
    url: 'https://gesetze.gl.ch/app/de/texts_of_law/VII%20E%2F1%2F2%2F1',
  },
  {
    id: 'gl-programme-status',
    authority: "Canton Glarona",
    title: "Programma di finanziamento – Canton Glarona",
    url: 'https://www.gl.ch/verwaltung/bau-und-umwelt/umwelt-wald-und-energie/umweltschutz-und-energie/energie/foerderprogramm.html/773',
  },
  {
    id: 'gl-solar-procedure',
    authority: "Canton Glarona, Dipartimento dell'energia",
    title: "Energy Meeting 2025 – Sistemi solari e procedure di rendicontazione",
    url: 'https://www.gl.ch/public/upload/assets/59548/Pr%C3%A4sentationen_Energietreff_2025.pdf?fp=2',
  },
  {
    id: 'pronovo-faq',
    authority: "Pronovo AG su incarico del governo federale",
    title: "Domande frequenti sul pagamento unico (EIV) e sui sussidi per l'energia solare in Svizzera",
    url: 'https://pronovo.ch/de/foerderung/photovoltaik/haeufige-fragen/',
  },
] as const;

export const guide: CantonGuide = {
  id: 'glarus',
  path: '/it/fotovoltaico-glarona',
  canton: "Glarona",
  title: "Fotovoltaico a Glarona 2026: incentivi per impianti molto inclinati | PvPro.ch",
  description:
    "Fotovoltaico a Glarona: CHF 250/kWp per impianti molto inclinati ammissibili, produzione propria nei nuovi edifici, autorizzazioni e incentivi 2026.",
  h1: "Fotovoltaico a Glarona: incentivi 2026 per impianti molto inclinati",
  intro: [
    "A Glarona il Cantone può inoltre sovvenzionare una superficie fotovoltaica ripida a partire da 75°. Il contributo ammonta a 250 franchi/kWp, fino a un massimo di 15.000 franchi se sono soddisfatte le condizioni ufficiali.",
    "Per i nuovi edifici conta anche la regola dell'elettricità propria con una superficie di riferimento energetico di 10 W/m² e un massimo di 30 kWp. Il finanziamento federale tramite Pronovo e il contributo glaronese vanno esaminati separatamente.",
  ],
  quickFacts: [
    {
      value: "≥75°",
      label: "Pendenza minima per il contributo cantonale dell'angolo di pendenza",
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
    },
    {
      value: "CHF 250/kWp",
      label: "Contributo cantonale per i componenti ammissibili dell'impianto fotovoltaico",
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
    },
    {
      value: "15.000 franchi",
      label: "Contributo massimo cantonale",
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
    },
    {
      value: "10 W/m²",
      label: "Produzione minima di elettricità propria per i nuovi edifici",
      sourceIds: ['gl-energy-law'],
    },
  ],
  sections: [
    {
      id: 'neigungscheck',
      title: "Perché a Glarona sono importanti i 75°C",
      paragraphs: [
        "Sì, una superficie fotovoltaica pari o superiore a 75° può beneficiare del contributo cantonale per l'inclinazione. Tuttavia, il finanziamento si applica solo alle parti del sistema ammissibili al finanziamento e secondo le condizioni del programma attuale.",
      ],
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
      module: {
        kind: 'inclination-check',
        title: "75° – ne vale la pena sulla mia superficie ripida?",
        intro: "Misurare l'inclinazione del modulo rispetto al piano orizzontale. Quindi controlla il percorso di finanziamento appropriato e le condizioni complete del programma.",
        items: [
          {
            title: "Area FV ≥75°",
            value: "≥75°",
            text: "Sì: verificare il contributo cantonale per l'angolo di inclinazione – 250 franchi/kWp per le parti ammissibili dell'impianto fotovoltaico, al massimo 15'000 franchi.",
            detail: "Il contributo è vincolato alle condizioni ufficiali di finanziamento.",
            sourceIds: ['gl-fp-2026', 'gl-conditions'],
          },
          {
            title: "Area fotovoltaica <75°",
            value: "<75°",
            text: "No: non vale il contributo glaronese per la salita ripida. Prendiamo invece in considerazione il regolare finanziamento federale attraverso Pronovo e altre strade adeguate.",
            detail: "Qualsiasi altra idoneità dovrà essere valutata separatamente.",
            sourceIds: ['gl-fp-2026', 'pronovo-faq'],
          },
        ],
      },
    },
    {
      id: 'foerderung',
      title: "A quanto ammonta il contributo cantonale?",
      paragraphs: [
        "Il contributo cantonale ammonta a 250 franchi per kWp per le parti ammissibili dell'impianto fotovoltaico con un'inclinazione di almeno 75°. L’importo massimo è di CHF 15’000.",
        "kWp descrive la potenza nominale di un impianto fotovoltaico in condizioni standard specificate. Non tutte le aree dei moduli del sistema contano automaticamente per il calcolo: devono essere verificate le parti ammissibili e le altre condizioni del programma.",
        "Per la misura GL-31 la domanda viene presentata solo dopo la decisione pronovo definitiva. Pertanto non è corretto presumere in generale che il GL-31 sarà presentato prima dell'inizio della costruzione; Il processo specifico dipende dalle condizioni di finanziamento.",
        "L’aumento dei contributi per l’involucro dell’edificio si applica solo alle misure che vengono completate in tempo entro la fine del 2027. Ciò non comporta alcun finanziamento generale del fotovoltaico per il 2027.",
      ],
      sourceIds: ['gl-fp-2026', 'gl-conditions', 'pronovo-faq', 'gl-programme-status'],
    },
    {
      id: 'neubau',
      title: "Elettricità propria obbligatoria per i nuovi edifici",
      paragraphs: [
        "SÌ. Nei nuovi edifici, una parte dell'elettricità deve essere prodotta autonomamente: generalmente 10 W per metro quadrato di superficie di riferimento energetico (EBF), ma un massimo di 30 kWp.",
        "L'area di riferimento energetico è la superficie dell'edificio decisiva per il calcolo energetico. kWp è la potenza elettrica nominale dei moduli in condizioni standard; Quindi le due informazioni non misurano la stessa cosa.",
        "Dal punto di vista legale si tratta di produrre la propria elettricità e non di un obbligo generale di dotare ogni casa esistente di impianti fotovoltaici. In pratica, il fotovoltaico è un modo ovvio per soddisfare la regola dell’elettricità autoprodotta.",
        "Se la produzione propria di energia elettrica prescritta non viene realizzata, può essere rilevante nel contesto giuridico una tassa sostitutiva di CHF 2000 per ogni kW non realizzato. Se e come si applica al progetto specifico deve essere verificato in base ai requisiti legali.",
      ],
      sourceIds: ['gl-energy-law', 'gl-fp-2026'],
    },
    {
      id: 'solarthermie',
      title: "Combina energia fotovoltaica e solare termica",
      paragraphs: [
        "Sì, una combinazione può essere sostenuta con 2000 franchi se sono soddisfatti i requisiti della misura M-08 e sono disponibili almeno 2 kWp di impianto fotovoltaico.",
        "L’energia solare termica genera calore, il fotovoltaico genera elettricità. Il contributo non è quindi un bonus fotovoltaico generale: la combinazione deve essere realizzata contemporaneamente e nel progetto devono essere rispettate le condizioni di M-08.",
      ],
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
    },
    {
      id: 'bewilligung',
      title: "Notifica o permesso di costruire?",
      paragraphs: [
        "Non tutti i sistemi solari richiedono un'applicazione edilizia completa. A seconda dei casi, un sistema sufficientemente adattato può utilizzare una procedura di segnalazione semplificata.",
        "Gli oggetti protetti e le situazioni particolari devono essere controllati separatamente. Pertanto, prima di effettuare l'ordine, chiarire con l'autorità competente se è sufficiente una denuncia o se è necessaria una procedura adeguata.",
        "Una procedura di rendicontazione non costituisce un impegno di finanziamento. Risponde alla questione del diritto edilizio, mentre Pronovo e gli enti cantonali di finanziamento valutano separatamente le condizioni di finanziamento.",
      ],
      sourceIds: ['gl-solar-procedure', 'gl-energy-law'],
    },
    {
      id: 'pronovo',
      title: "Finanziamento federale tramite Pronovo",
      paragraphs: [
        "Attraverso Pronovo passa il finanziamento nazionale più importante per il fotovoltaico. Per il pagamento una tantum regolare (EIV) attualmente si applica una potenza minima di 2 kW; l'importo specifico dipende dal progetto e dalle condizioni federali.",
        "I bonus federali aggiuntivi sono opzioni di finanziamento volontarie e condizionate. Tra questi figurano, ad esempio, un bonus angolo di inclinazione a partire da 75°, un bonus parcheggi per impianti qualificanti a partire da 100 kW e, dal 2026, un bonus elettrico invernale a condizioni speciali per impianti a partire da 100 kW.",
        "Da questo va separato il contributo glaronese di 250 franchi/kWp. L'EIV, i contributi cantonali e gli eventuali bonus federali non possono essere semplicemente aggiunti all'importo garantito senza verifica.",
      ],
      sourceIds: ['pronovo-faq', 'gl-fp-2026', 'gl-conditions'],
    },
    {
      id: 'kosten',
      title: "Quanto costa un impianto solare qui?",
      paragraphs: [
        "Il Cantone non pubblica prezzi fissi per gli impianti solari. I fattori decisivi sono il tetto, le dimensioni dell'impianto, i lavori elettrici e le attrezzature.",
        "Confronta più offerte per lo stesso progetto. Prestate attenzione alle singole posizioni e se nell'ambito dei servizi sono incluse richieste di finanziamento, collegamento alla rete e lavoro aggiuntivo.",
      ],
      bullets: [
        "Superficie del tetto, forma del tetto e superficie utilizzabile dei moduli",
        "Dimensioni del sistema, inclinazione dei moduli e moduli selezionati",
        "Ponteggi, accessi e logistica di cantiere",
        "Lavori elettrici, contatori e collegamento alla rete elettrica",
        "Invertitore",
        "Infrastruttura di stoccaggio e ricarica delle batterie",
        "Autoconsumo, pompa di calore ed elettromobilità",
        "Installatore, ambito dei servizi e garanzie",
      ],
      sourceIds: [],
    },
    {
      id: 'passt',
      title: "Per chi è particolarmente interessante l'energia solare a Glarona?",
      paragraphs: [
        "Un test è particolarmente interessante su un tetto o una facciata inclinata di 75° o più, su un nuovo edificio o se l'energia fotovoltaica e solare termica sono progettate insieme. In questi casi, le norme cantonali e i canali di finanziamento possono influenzare la pianificazione iniziale del progetto.",
        "Pianificare insieme il tetto, la statica, il collegamento elettrico, il consumo proprio e la procedura adeguata. Un'offerta dovrebbe indicare chiaramente quali parti del sistema raggiungono l'angolo di inclinazione e quali condizioni di finanziamento sono ancora aperte.",
      ],
      sourceIds: ['gl-fp-2026', 'gl-conditions', 'gl-energy-law', 'gl-solar-procedure'],
    },
  ],
  faqs: [
    {
      question: "A quanto ammonta il sussidio FV per gli impianti ripidi?",
      answer:
        "Per le parti ammissibili dell'impianto FV con un'inclinazione di almeno 75° il contributo cantonale ammonta a 250 franchi/kWp. L’importo massimo è di CHF 15’000. Entrambe le affermazioni si applicano solo se le altre condizioni del programma sono soddisfatte.",
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
    },
    {
      question: "Di quale inclinazione ho bisogno?",
      answer:
        "Le parti idonee dell'impianto fotovoltaico devono essere inclinate di almeno 75°. L'angolo viene misurato rispetto al piano orizzontale. Se l'inclinazione è inferiore a 75°, questo contributo per l'angolo di inclinazione di Glarona non si applica.",
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
    },
    {
      question: "Qual è il contributo massimo?",
      answer:
        "Il contributo cantonale è limitato a 15 000 franchi. L'importo di 250 franchi/kWp viene applicato solo alle parti dell'impianto ammissibili secondo le condizioni attuali. Un sistema complessivo più ampio non comporta automaticamente un contributo più elevato.",
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
    },
    {
      question: "Esiste l'obbligo di produrre la propria elettricità per i nuovi edifici?",
      answer:
        "SÌ. I nuovi edifici devono generalmente fornire 10 W/m² di superficie di riferimento energetico per l'elettricità autoprodotta, con un massimo di 30 kWp richiesti. Si tratta di una regola per l’elettricità autoprodotta e non di un requisito generale del fotovoltaico per le case esistenti.",
      sourceIds: ['gl-energy-law', 'gl-fp-2026'],
    },
    {
      question: "Cosa succede se non viene rispettato l’obbligo di produrre la propria elettricità?",
      answer:
        "Nel contesto giuridico può essere rilevante una tassa sostitutiva di 2000 franchi per ogni kW non realizzato. Se sia dovuto per il vostro progetto dipende dai requisiti legali e deve essere verificato caso per caso.",
      sourceIds: ['gl-energy-law'],
    },
    {
      question: "È possibile combinare il fotovoltaico con l’energia solare termica?",
      answer:
        "Sì, con la misura M-08 è possibile prendere in considerazione un contributo cumulativo di CHF 2000. Per fare ciò è necessario soddisfare i requisiti del programma, l'implementazione deve avvenire simultaneamente e devono essere disponibili almeno 2 kWp FV.",
      sourceIds: ['gl-fp-2026', 'gl-conditions'],
    },
    {
      question: "Ho bisogno di un permesso di costruire?",
      answer:
        "Non sempre. A seconda dei casi, un sistema solare sufficientemente adattato può utilizzare una procedura di rendicontazione semplificata; Oggetti protetti e casi particolari devono essere controllati separatamente. Prima dell'ordinanza, l'organismo responsabile dovrebbe confermare la procedura per l'edificio specifico.",
      sourceIds: ['gl-solar-procedure', 'gl-energy-law'],
    },
    {
      question: "Quando devo presentare la domanda per GL-31?",
      answer:
        "La domanda per GL-31 sarà presentata dopo la decisione finale di Pronovo. Per questa misura non può quindi essere rivendicata una data generale anteriore all'inizio della costruzione; Determinanti sono le attuali condizioni di finanziamento di Glarona.",
      sourceIds: ['gl-conditions', 'pronovo-faq'],
    },
    {
      question: "Cosa significa per Pronovo la potenza minima di 2 kW?",
      answer:
        "Attualmente a partire da una potenza dell'impianto di 2 kW vale il regolare pagamento una tantum della Confederazione tramite Pronovo. Altri bonus federali, come quelli per piste, parcheggi o elettricità invernale, hanno requisiti propri e non sono importi cumulabili automaticamente.",
      sourceIds: ['pronovo-faq'],
    },
  ],
  sources: [...sources],
};