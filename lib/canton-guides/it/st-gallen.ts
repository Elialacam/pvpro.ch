import type { CantonGuide } from '../types';

const sources = [
  {
    id: 'sg-energy-law',
    authority: 'Cantone di San Gallo',
    title: 'sGS 741.1 Legge sull’energia, art. 5b: produzione propria di elettricità nelle nuove costruzioni',
    url: 'https://www.gesetzessammlung.sg.ch/app/de/texts_of_law/741.1',
  },
  {
    id: 'sg-energy-ordinance',
    authority: 'Cantone di San Gallo',
    title: 'sGS 741.11 Ordinanza sull’energia: dimensionamento e tassa sostitutiva',
    url: 'https://www.gesetzessammlung.sg.ch/app/de/texts_of_law/741.11',
  },
  {
    id: 'sg-solar-procedure',
    authority: 'Cantone di San Gallo',
    title: 'Notifica degli impianti solari: modulo cantonale e spiegazioni',
    url: 'https://www.sg.ch/umwelt-natur/energie/formulare-und-hilfsmittel/solaranlagen-melden.html',
  },
  {
    id: 'sg-solar-fire-safety',
    authority: 'Cantone di San Gallo',
    title: 'Spiegazioni relative al modulo di notifica: protezione antincendio per gli accumulatori a batteria',
    url: 'https://www.sg.ch/content/dam/sgch/umwelt-natur/energie/20260318_Erlaeuterungen_Meldeformular_Solaranlagen.pdf',
  },
  {
    id: 'sg-energy-funding',
    authority: 'Cantone di San Gallo',
    title: 'Credito speciale per il finanziamento degli incentivi energetici 2024–2030',
    url: 'https://www.sg.ch/news/sgch_allgemein/2023/11/klima--kitas--kreisgericht--kanton-empfiehlt-dreimal-ja.html',
  },
  {
    id: 'sg-agricultural-battery-funding',
    authority: 'Cantone di San Gallo, Cooperativa di credito agricolo',
    title: 'Contributi esauriti per gli accumulatori a batteria nell’agricoltura',
    url: 'https://www.sg.ch/news/sgch_landwirtschaftliche-kreditgenossenschaft/2025/12/aenderungen-bei-gewaehrung-von-beitraegen-und-investitionskredit.html',
  },
  {
    id: 'stadt-sg-energy-fund',
    authority: 'Città di San Gallo',
    title: 'Fondo per l’energia: incentivi per impianti fotovoltaici dal 2025',
    url: 'https://www.stadt.sg.ch/news/stsg_medienmitteilungen/2024/06/foerderung-von-photovoltaik-anlagen-sinkt-per-2025.html',
  },
  {
    id: 'pronovo-eiv',
    authority: 'Pronovo',
    title: 'Rimunerazione unica per impianti fotovoltaici: RUP, RUG e RUE',
    url: 'https://pronovo.ch/de/foerderung/photovoltaik',
  },
  {
    id: 'pronovo-tariff-calculator',
    authority: 'Pronovo',
    title: 'Calcolatore tariffario per il fotovoltaico',
    url: 'https://pronovo.ch/de/services/tarifrechner',
  },
] as const;

export const guide: CantonGuide = {
  id: 'st-gallen',
  path: '/it/fotovoltaico-san-gallo',
  canton: 'San Gallo',
  title: 'Fotovoltaico a San Gallo: obbligo di autoproduzione nelle nuove costruzioni | PvPro.ch',
  description:
    'Le nuove costruzioni a San Gallo possono adempiere all’obbligo di autoproduzione con il fotovoltaico, un’efficienza energetica supplementare, una soluzione RCP o una tassa sostitutiva.',
  h1: 'Fotovoltaico nel Cantone di San Gallo: obbligo di autoproduzione e tassa sostitutiva 2026',
  intro: [
    'Dal 1° luglio 2021, nel Cantone di San Gallo le nuove costruzioni sono soggette a un requisito di autoproduzione elettrica. È possibile adempierlo con il fotovoltaico, un’efficienza energetica supplementare, una soluzione comune di RCP o una tassa sostitutiva.',
    'La soluzione fotovoltaica richiede 10 W per m² di superficie di riferimento energetico (SRE), ma al massimo 30 kW per edificio. La SRE è la superficie riscaldata dell’edificio rilevante per il calcolo energetico; i 30 kW limitano soltanto l’obbligo, non la potenza installata volontariamente.',
  ],
  quickFacts: [
    {
      value: '10 W/m² SRE',
      label: 'Potenza per l’adempimento mediante fotovoltaico',
      sourceIds: ['sg-energy-law', 'sg-energy-ordinance'],
    },
    {
      value: 'Max. 30 kW',
      label: 'Potenza richiesta per edificio',
      sourceIds: ['sg-energy-law', 'sg-energy-ordinance'],
    },
    {
      value: 'CHF 2’700/kWp',
      label: 'Tassa sostitutiva per la potenza richiesta',
      sourceIds: ['sg-energy-ordinance'],
    },
    {
      value: '30 giorni',
      label: 'Termine della procedura di notifica',
      sourceIds: ['sg-solar-procedure'],
    },
  ],
  ctaAfterSection: 'erfuellung',
  sections: [
    {
      id: 'erfuellung',
      title: 'Quattro modalità di adempimento',
      paragraphs: [
        'Per la verifica energetica della nuova costruzione scegliete una delle quattro soluzioni ammesse e indicatela chiaramente nel progetto edilizio. Si tratta di alternative; non devono essere percorse una dopo l’altra.',
      ],
      sourceIds: ['sg-energy-law', 'sg-energy-ordinance'],
      module: {
        kind: 'compliance-options',
        title: 'Quattro modalità di adempimento',
        intro:
          'Confrontate le quattro possibilità autonome in funzione dell’edificio e dell’utilizzazione prevista.',
        items: [
          {
            title: 'Autoproduzione con il fotovoltaico',
            value: '10 W/m² SRE, max. 30 kW',
            text: 'La potenza fotovoltaica richiesta è di 10 W per m² di superficie di riferimento energetico ed è limitata a 30 kW per edificio.',
            detail:
              'Il limite massimo riguarda la potenza richiesta. Resta possibile installare volontariamente un impianto più grande.',
            sourceIds: ['sg-energy-law', 'sg-energy-ordinance'],
          },
          {
            title: 'Efficienza energetica supplementare',
            value: '−5 kWh/m² all’anno',
            text: 'In alternativa all’autoproduzione, il fabbisogno energetico ponderato può essere ridotto di ulteriori 5 kWh per m² all’anno.',
            detail:
              'La soluzione di efficienza deve essere documentata nella verifica energetica del progetto edilizio concreto.',
            sourceIds: ['sg-energy-law', 'sg-energy-ordinance'],
          },
          {
            title: 'Consumo proprio comune in un RCP',
            value: 'Adempimento comune',
            text: 'Il requisito può essere soddisfatto con una soluzione conforme nell’ambito di un raggruppamento ai fini del consumo proprio.',
            detail:
              'Un RCP organizza la produzione e il consumo proprio comuni di più partecipanti.',
            sourceIds: ['sg-energy-law', 'sg-energy-ordinance'],
          },
          {
            title: 'Tassa sostitutiva',
            value: 'CHF 2’700 per ogni kWp richiesto',
            text: 'Invece della soluzione di autoproduzione prescritta si può scegliere una tassa sostitutiva di CHF 2’700 per ogni kWp di potenza richiesta.',
            detail:
              'La scelta viene dichiarata nella domanda di costruzione; la tassa è riscossa insieme agli emolumenti per la licenza edilizia.',
            sourceIds: ['sg-energy-law', 'sg-energy-ordinance'],
          },
        ],
      },
    },
    {
      id: 'erweiterungen',
      title: 'I piccoli ampliamenti possono essere esentati',
      paragraphs: [
        'In caso di ampliamento, verificate anzitutto la nuova SRE. Il requisito non si applica se questa superficie è inferiore a 50 m².',
        'Un’eccezione sussiste anche se la nuova SRE non supera il 20% della SRE esistente e, contemporaneamente, non supera 1’000 m². Per questa seconda eccezione devono essere rispettati entrambi i limiti.',
      ],
      sourceIds: ['sg-energy-ordinance'],
    },
    {
      id: 'meldung',
      title: 'Chiarire se si applica la procedura di notifica o la licenza edilizia',
      paragraphs: [
        'Notificate un impianto su tetto o facciata sufficientemente adattato all’autorità competente 30 giorni prima dell’esecuzione prevista. La procedura di notifica consiste in una comunicazione al posto di una normale procedura di licenza edilizia.',
        'Se entro 30 giorni l’autorità non comunica né il passaggio a una procedura ordinaria o semplificata né un rifiuto, il progetto notificato può essere eseguito. Gli impianti isolati, determinati impianti lungo le strade e i progetti su edifici protetti o in aree protette continuano a richiedere una licenza edilizia.',
      ],
      sourceIds: ['sg-solar-procedure'],
    },
    {
      id: 'batterie',
      title: 'Classificare gli accumulatori a batteria in base alla capacità',
      paragraphs: [
        'Per un accumulatore chiarite anzitutto la capacità e se l’impianto solare stesso è soggetto unicamente a notifica. Se l’impianto solare è stato soltanto notificato, un accumulatore a batteria fino a 100 kWh non necessita di un’autorizzazione antincendio speciale; oltre 100 kWh occorre un’autorizzazione tecnica antincendio del Comune o dell’Assicurazione immobiliare di San Gallo (GVSG).',
        'Questa regola di protezione antincendio non è un programma d’incentivazione. Non risulta un contributo cantonale generale per gli accumulatori a batteria nelle case unifamiliari. I fondi del programma speciale per gli accumulatori nell’agricoltura sono esauriti; dal 1° gennaio 2026 non vengono prese in considerazione nuove domande.',
      ],
      sourceIds: ['sg-solar-fire-safety', 'sg-agricultural-battery-funding'],
    },
    {
      id: 'foerderung',
      title: 'Verificare separatamente gli incentivi fotovoltaici di Pronovo e dei Comuni',
      paragraphs: [
        'Richiedete gli incentivi fotovoltaici ordinari alla Confederazione tramite Pronovo e verificate separatamente i contributi comunali. La rimunerazione unica (RU) è il versamento unico federale: la RUP si applica agli impianti sotto 100 kW, la RUG da 100 kW e la RUE agli impianti senza consumo proprio nelle categorie previste.',
        'Dal 1° aprile 2024 il contributo di base della RU è pari a CHF 0. La potenza individuale, il tipo d’impianto e gli eventuali bonus determinano il contributo; non è garantita una determinata percentuale. Calcolate quindi il contributo federale con il calcolatore tariffario di Pronovo.',
        'Il credito speciale cantonale di CHF 59 milioni per il periodo dal 2024 al 2030 finanzia un portafoglio di diverse misure energetiche e climatiche e non è un fondo fotovoltaico distinto. Un esempio comunale è il fondo per l’energia della Città di San Gallo: nell’esempio pubblicato di un impianto da 10 kWp, il contributo supplementare cittadino equivale alla metà del contributo di potenza della RUP. Si tratta di un contributo della Città, non del Cantone.',
      ],
      sourceIds: [
        'pronovo-eiv',
        'pronovo-tariff-calculator',
        'sg-energy-funding',
        'stadt-sg-energy-fund',
      ],
    },
    {
      id: 'kosten',
      title: 'Rendere comparabili i costi e la portata del progetto',
      paragraphs: [
        'Confrontate le offerte sulla base della stessa potenza richiesta e dello stesso insieme di prestazioni. Fate indicare separatamente moduli fotovoltaici, sottostruttura, ponteggi, lavori elettrici, allacciamento alla rete e accumulatore opzionale; anche i contributi di Pronovo e dei Comuni devono figurare in posizioni distinte.',
        'Con PvPro.ch i proprietari possono confrontare gratuitamente e senza impegno fino a tre offerte solari idonee.',
      ],
      bullets: [
        'SRE e potenza obbligatoria calcolata su tale base',
        'Variante di adempimento scelta nella verifica energetica',
        'Procedura di notifica o di autorizzazione',
        'Ipotesi sugli incentivi separate dal prezzo dell’impianto',
      ],
      sourceIds: [
        'sg-energy-law',
        'sg-energy-ordinance',
        'sg-solar-procedure',
        'pronovo-eiv',
      ],
    },
  ],
  faqs: [
    {
      question: 'Quanto deve essere grande l’impianto di autoproduzione di una nuova costruzione?',
      answer: '10 W/m² SRE, con un obbligo massimo di 30 kW.',
      sourceIds: ['sg-energy-ordinance'],
    },
    {
      question: 'Posso pagare una tassa invece di installare il fotovoltaico?',
      answer: 'Sì, CHF 2’700 per ogni kWp richiesto.',
      sourceIds: ['sg-energy-law', 'sg-energy-ordinance'],
    },
    {
      question: 'Posso adempiere all’obbligo con una maggiore efficienza energetica?',
      answer:
        'Sì, riducendo ulteriormente il fabbisogno energetico ponderato di 5 kWh/m²/anno.',
      sourceIds: ['sg-energy-law', 'sg-energy-ordinance'],
    },
    {
      question: 'Quanto dura la procedura di notifica?',
      answer: '30 giorni.',
      sourceIds: ['sg-solar-procedure'],
    },
    {
      question: 'Il Cantone incentiva direttamente il mio normale impianto fotovoltaico?',
      answer:
        'Gli incentivi fotovoltaici ordinari passano principalmente da Pronovo; i programmi comunali vanno verificati separatamente.',
      sourceIds: ['pronovo-eiv', 'stadt-sg-energy-fund'],
    },
  ],
  sources: [...sources],
};