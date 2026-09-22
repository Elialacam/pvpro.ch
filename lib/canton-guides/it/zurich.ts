import type { CantonGuide } from '../types';

const sources = [
  { id: 'zh-bbv', authority: 'Kanton Zürich', title: 'Ordinanza edilizia speciale I: produzione propria di elettricità', url: 'https://www.zhlex.zh.ch/Erlass.html?Open&Ordnr=700.21' },
  { id: 'zh-vollzug', authority: 'Kanton Zürich', title: 'Raccoglitore esecutivo sull’energia: produzione propria di elettricità nelle nuove costruzioni', url: 'https://www.zh.ch/content/dam/zhweb/bilder-dokumente/themen/planen-bauen/bauvorschriften/bauvorschriften-im-energiebereich/energetische-bauvorschriften/vollzugsordner/vollzugsordner_energie_kanton-zh_Ausgabe_1_2023.pdf' },
  { id: 'zh-vorlage-6062', authority: 'Kanton Zürich', title: 'Progetto 6062: utilizzo dei tetti idonei per l’energia solare', url: 'https://www.kantonsrat.zh.ch/geschaefte/geschaeft/?id=ec16ee9593a744ab950f053a301d6f76' },
  { id: 'zh-meldeverfahren', authority: 'Kanton Zürich', title: 'Impianti solari: procedura di notifica e di autorizzazione', url: 'https://www.zh.ch/de/planen-bauen/baubewilligung/baueingabe-verfahren/meldeverfahren-solaranlagen-waermepumpen-eladestationen.html' },
  { id: 'zh-foerderprogramm', authority: 'Kanton Zürich', title: 'Programma d’incentivazione energetica 2026', url: 'https://www.zh.ch/content/dam/zhweb/bilder-dokumente/themen/umwelt-tiere/energie/energieberatung-und-energiefoerderung/ktzh_foerderprogramm_2026.pdf' },
  { id: 'zh-landwirtschaft-batterie', authority: 'Kanton Zürich', title: 'Aiuto agli investimenti 2026 per accumulatori a batteria agricoli', url: 'https://www.zh.ch/de/planen-bauen/bauvorschriften/bauen-an-besonderer-lage/bauen-ausserhalb-von-bauzonen/inhalt/landwirtschaftliche-bauten/investitionshilfen.html' },
  { id: 'zh-steuern', authority: 'Kantonales Steueramt Zürich', title: 'Trattamento fiscale di impianti fotovoltaici, accumulatori a batteria e stazioni di ricarica', url: 'https://www.zh.ch/de/steuern-finanzen/steuern/treuhaender/steuerbuch/steuerbuch-definition/zstb-30-8.html' },
  { id: 'stadt-pv', authority: 'Stadt Zürich', title: 'Contributi d’incentivazione per impianti fotovoltaici dal 1° agosto 2026', url: 'https://www.stadt-zuerich.ch/de/aktuell/medienmitteilungen/2026/06/stadt-zuerich-erhoeht-beitraege-fuer-pv-anlagen-und-foerdert-batteriespeicher.html' },
  { id: 'stadt-batterie', authority: 'Stadt Zürich', title: 'La Città di Zurigo aumenta i contributi per il fotovoltaico e incentiva gli accumulatori a batteria', url: 'https://www.stadt-zuerich.ch/de/aktuell/medienmitteilungen/2026/06/stadt-zuerich-erhoeht-beitraege-fuer-pv-anlagen-und-foerdert-batteriespeicher.html' },
] as const;

export const guide: CantonGuide = {
  id: 'zurich',
  path: '/it/fotovoltaico-zurigo',
  canton: 'Zurigo',
  title: 'Impianto fotovoltaico a Zurigo | PvPro.ch',
  description: 'Confrontate fino a tre offerte gratuite di installatori solari verificati per il vostro impianto fotovoltaico nel Cantone di Zurigo.',
  h1: 'Impianto fotovoltaico nel Cantone di Zurigo: obbligo, notifica e incentivi 2026',
  intro: [
    'Nel Cantone di Zurigo, nel 2026 per le nuove costruzioni continua a valere il requisito di produzione propria di elettricità pari a 10 W/m² di superficie di riferimento energetico. I 30 W/m² discussi e un maggiore utilizzo dei tetti di grandi dimensioni sono previsti, ma non costituiscono ancora diritto vigente.',
    'I contributi d’incentivazione della Città di Zurigo non vanno estesi all’intero cantone. Dal 1° agosto 2026 la Città incentiva sia il fotovoltaico sia determinati accumulatori a batteria; il Cantone non prevede un contributo generale analogo per gli edifici abitativi.',
  ],
  quickFacts: [
    { value: '10 W/m² SRE', label: 'requisito cantonale oggi vigente per le nuove costruzioni', sourceIds: ['zh-bbv', 'zh-vollzug'] },
    { value: '30 giorni', label: 'termine di attesa nella procedura cantonale di notifica', sourceIds: ['zh-meldeverfahren'] },
    { value: '01.08.2026', label: 'entrata in vigore dei contributi maggiorati della Città di Zurigo', sourceIds: ['stadt-pv', 'stadt-batterie'] },
    { value: 'CHF 1’000 + 100/kWh', label: 'contributo per batterie riservato alla Città di Zurigo', sourceIds: ['stadt-batterie'] },
  ],
  ctaAfterSection: 'zustaendigkeit',
  sections: [
    {
      id: 'zustaendigkeit',
      title: 'Cantone di Zurigo o Città di Zurigo?',
      paragraphs: [
        'Le prescrizioni cantonali in materia edilizia ed energetica valgono in tutto il cantone. I contributi maggiorati per il fotovoltaico e le batterie sono invece un’offerta comunale e si applicano soltanto agli impianti situati sul territorio della Città di Zurigo.',
        'Per un immobile fuori città occorre verificare separatamente gli incentivi di Pronovo e le eventuali offerte del proprio comune. Un programma cantonale per sistemi di accumulo di durata pluri-mensile o stagionale esclude espressamente gli accumulatori a batteria e non costituisce un bonus per batterie domestiche.',
        'L’aiuto agli investimenti 2026 per accumulatori a batteria agricoli rappresenta un caso speciale distinto: la dotazione cantonale di CHF 200’000 è già esaurita. Questo programma agricolo non è un incentivo per le comuni batterie domestiche.',
      ],
      sourceIds: ['zh-bbv', 'zh-foerderprogramm', 'zh-landwirtschaft-batterie', 'stadt-pv', 'stadt-batterie'],
      module: {
        kind: 'zurich-jurisdictions',
        title: 'Due livelli, prestazioni diverse',
        intro: 'L’ubicazione determina se è possibile beneficiare dei contributi comunali.',
        columns: ['Cantone di Zurigo', 'Città di Zurigo'],
        items: [
          { title: 'Cantone di Zurigo', value: 'Normativa valida in tutto il cantone', text: '10 W/m² per le nuove costruzioni, procedura di notifica con termine di 30 giorni e nessun incentivo cantonale generale per i comuni impianti fotovoltaici su edifici abitativi o per le batterie domestiche.', detail: 'La deduzione dal reddito imponibile può entrare in considerazione per il fotovoltaico, una wallbox fissa e la relativa batteria, se l’installazione avviene almeno un anno dopo la nuova costruzione e dopo almeno un anno di abitazione.', sourceIds: ['zh-bbv', 'zh-meldeverfahren', 'zh-foerderprogramm', 'zh-steuern'] },
          { title: 'Città di Zurigo', value: 'Contributi comunali dal 01.08.2026', text: 'Contributi complessivi per il fotovoltaico, inclusi quelli di Pronovo, e un contributo proprio per accumulatori stazionari a batteria che soddisfano i requisiti.', detail: 'Solo per progetti sul territorio cittadino; presentare la domanda per la batteria prima dell’inizio dei lavori.', sourceIds: ['stadt-pv', 'stadt-batterie'] },
        ],
      },
    },
    {
      id: 'eigenstrom',
      title: '10 W/m² sono diritto vigente; 30 W/m² sono previsti',
      paragraphs: [
        'Per le nuove costruzioni valgono almeno 10 W di potenza per la produzione propria di elettricità per m² di superficie di riferimento energetico. Per il fotovoltaico, la potenza massima richiesta è limitata in base all’occupazione del 70% della superficie computabile dell’edificio; ciò non equivale all’obbligo di coprire di moduli il 70% del tetto.',
        'Gli impianti sulla stessa particella o all’interno di un RCP possono essere computati se non hanno più di otto anni. Gli ampliamenti sono esentati se la nuova SRE è inferiore a 50 m² oppure non supera il 20% della SRE esistente e, al contempo, non supera 1’000 m². In alternativa si può rinunciare alla produzione propria di elettricità se il valore limite secondo il §47a viene migliorato del 20%. Non è prevista una tassa sostitutiva.',
      ],
      sourceIds: ['zh-bbv', 'zh-vollzug'],
      module: {
        kind: 'zurich-law-status',
        title: 'In vigore oggi / previsto',
        intro: 'Per la verifica energetica conta soltanto il diritto effettivamente in vigore.',
        columns: ['In vigore oggi', 'Previsto'],
        items: [
          { title: 'Requisito attuale', value: '10 W/m² SRE', text: 'La norma vigente sulla produzione propria di elettricità si applica alle nuove costruzioni con i limiti, i computi e le eccezioni previsti.', sourceIds: ['zh-bbv', 'zh-vollzug'] },
          { title: 'Progetto politico', value: '30 W/m² previsti', text: 'Il Consiglio di Stato intende aumentare il requisito; il progetto 6062 mira inoltre a sfruttare maggiormente i tetti idonei a partire da 300 m² in caso di nuova costruzione e di risanamento completo del tetto, anche in funzione della redditività.', detail: 'Al 21 settembre 2026 non va ancora considerata una norma vigente da 30 W/m².', sourceIds: ['zh-vorlage-6062'] },
        ],
      },
    },
    {
      id: 'stadtfoerderung',
      title: 'Contributi della Città di Zurigo dal 1° agosto 2026',
      paragraphs: [
        'I contributi complessivi massimi della Città per il fotovoltaico, compresi quelli di Pronovo, consistono in un contributo di base di CHF 5’000, CHF 450/kWp fino a 30 kWp, CHF 350 per ogni ulteriore kWp da 30 a 100 kWp e CHF 310 per ogni ulteriore kWp oltre 100 kWp. Per un impianto fotovoltaico soggetto ad autorizzazione su un edificio esistente si aggiungono al massimo CHF 3’000. Il contributo Pronovo non può essere sommato nuovamente a questi massimali complessivi.',
        'Per un accumulatore a batteria che soddisfa i requisiti, la Città versa un contributo di base di CHF 1’000 più CHF 100/kWh; per le batterie second-life si aggiungono CHF 100/kWh. Sono incentivabili capacità di almeno 3 kWh, al massimo 100 kWh e non superiori a 1,5 kWh per kW di potenza rinnovabile installata.',
        'La batteria deve essere stazionaria, trovarsi dietro lo stesso allacciamento domestico del fotovoltaico ed essere integrata in un sistema di gestione dell’energia adeguato. La domanda va presentata prima dell’inizio dei lavori.',
      ],
      sourceIds: ['stadt-pv', 'stadt-batterie'],
      notice: {
        title: 'Solo Città di Zurigo',
        text: 'Questi contributi per il fotovoltaico e le batterie sono comunali. Non valgono automaticamente a Winterthur o in un altro comune zurighese.',
        status: 'important',
      },
    },
    {
      id: 'meldung',
      title: 'Procedura di notifica con termine di attesa di 30 giorni',
      paragraphs: [
        'Molti impianti su tetto sufficientemente integrati possono essere notificati. Nelle zone edificabili, alle condizioni previste, ciò vale anche per determinati impianti su facciata di case unifamiliari ed edifici alti fino a 11 m, nonché per determinati impianti isolati fino a 20 m².',
        'Se l’autorità edilizia locale non dispone altrimenti entro 30 giorni dalla conferma di ricezione, è possibile costruire. Nelle zone centrali, per gli inventari degli insediamenti o dei monumenti storici e in presenza di un provvedimento di tutela monumentale è di regola necessaria un’autorizzazione edilizia. Verificate inoltre se il vostro comune gestisce già la presentazione tramite eBaugesucheZH.',
      ],
      sourceIds: ['zh-meldeverfahren'],
    },
  ],
  faqs: [
    { question: 'Nel Cantone di Zurigo nel 2026 valgono già 30 W/m²?', answer: 'No. Il diritto vigente prescrive 10 W/m²; 30 W/m² rappresentano un aumento previsto.', sourceIds: ['zh-bbv', 'zh-vorlage-6062'] },
    { question: 'Il 70% di ogni tetto zurighese deve essere coperto da fotovoltaico?', answer: 'No. Il 70% limita la potenza massima richiesta in base alla superficie computabile dell’edificio e non costituisce un obbligo generale di occupazione del tetto.', sourceIds: ['zh-vollzug'] },
    { question: 'Esiste una tassa sostitutiva in alternativa alla produzione propria di elettricità?', answer: 'No, Zurigo non prevede una tassa sostitutiva per questo obbligo di produzione propria.', sourceIds: ['zh-vollzug'] },
    { question: 'I contributi maggiorati per il fotovoltaico valgono in tutti i comuni zurighesi?', answer: 'No. I contributi descritti valgono soltanto nella Città di Zurigo.', sourceIds: ['stadt-pv'] },
    { question: 'Quali batterie incentiva la Città di Zurigo?', answer: 'Una batteria stazionaria da almeno 3 kWh collegata allo stesso allacciamento domestico del fotovoltaico, con una gestione dell’energia adeguata e nel rispetto degli altri limiti di capacità.', sourceIds: ['stadt-batterie'] },
    { question: 'Quando si può costruire un impianto solare notificato?', answer: 'Quando l’autorità edilizia locale non dispone altrimenti entro 30 giorni dalla conferma di ricezione.', sourceIds: ['zh-meldeverfahren'] },
  ],
  sources: [...sources],
};