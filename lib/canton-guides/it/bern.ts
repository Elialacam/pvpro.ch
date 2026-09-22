import type { CantonGuide } from '../types';

const sources = [
  { id: 'be-solarpflicht', authority: 'Cantone di Berna, Direzione dell’economia, dell’energia e dell’ambiente', title: 'Informazioni sull’obbligo solare dal 2026', url: 'https://www.weu.be.ch/de/start/themen/energie/solarpflicht.html' },
  { id: 'be-keng', authority: 'Cantone di Berna', title: 'Legge cantonale sull’energia, art. 39a–39e', url: 'https://www.belex.sites.be.ch/app/de/texts_of_law/741.1' },
  { id: 'be-kenv', authority: 'Cantone di Berna', title: 'Ordinanza cantonale sull’energia, art. 19a–19h', url: 'https://www.belex.sites.be.ch/app/de/texts_of_law/741.111' },
  { id: 'be-vollzug', authority: 'Cantone di Berna, Ufficio dell’ambiente e dell’energia', title: 'Guida all’esecuzione EN-Solar BE – obbligo di dotazione solare', url: 'https://www.weu.be.ch/content/dam/weu/dokumente/aue/de/energievorschriften-bauen/aue-EN-Solar_BE_Vollzugshilfe_de.pdf' },
  { id: 'pronovo-eiv', authority: 'Pronovo AG su mandato della Confederazione', title: 'Incentivi per impianti fotovoltaici', url: 'https://pronovo.ch/de/foerderung/photovoltaik' },
] as const;

export const guide: CantonGuide = {
  id: 'bern', path: '/it/fotovoltaico-berna', canton: 'Berna',
  title: 'Fotovoltaico a Berna: nuove regole 2026 | PvPro.ch',
  description: 'Dal 2026 nel Cantone di Berna vigono nuove regole solari per nuove costruzioni, ampliamenti, risanamenti del tetto e parcheggi più grandi.',
  h1: 'Fotovoltaico nel Cantone di Berna: le nuove regole dal 2026',
  intro: ['Dal 1° gennaio 2026 nel Cantone di Berna vigono nuove regole per nuove costruzioni, ampliamenti e parcheggi più grandi. In caso di risanamento completo del tetto occorre notificare se è possibile sfruttare l’energia solare, ma ciò non comporta automaticamente l’obbligo di costruire un impianto solare.'],
  quickFacts: [
    { value: '10%', label: 'Quota minima della superficie dell’edificio determinante per determinate nuove costruzioni e ampliamenti', sourceIds: ['be-solarpflicht', 'be-keng'] },
    { value: '60%', label: 'Della superficie del tetto ben idonea, di regola per nuove costruzioni e ampliamenti', sourceIds: ['be-solarpflicht', 'be-kenv'] },
    { value: '7 giorni lavorativi', label: 'Preavviso minimo per la notifica separata di un impianto solare esente da autorizzazione', sourceIds: ['be-vollzug', 'be-kenv'] },
    { value: 'Risanamento del tetto', label: 'Obbligo di notifica ≠ obbligo fotovoltaico automatico', sourceIds: ['be-solarpflicht', 'be-vollzug'] },
  ],
  sections: [
    { id: 'regeln', title: 'Le regole solari bernesi dal 1° gennaio 2026', paragraphs: [
      'Dal 1° gennaio 2026, le nuove costruzioni e gli ampliamenti devono sfruttare l’energia solare su almeno il 10% della superficie dell’edificio rilevante per il calcolo (termine ufficiale: superficie computabile dell’edificio). I tetti ben idonei con almeno 1’000 kWh di energia solare per metro quadrato all’anno (1’000 kWh/m²a) devono utilizzare almeno il 60% della superficie complessiva del tetto (superficie lorda del tetto); l’obbligo può essere adempiuto in parte o interamente sulla facciata.',
      'Il 60% non significa quindi automaticamente il 60% di ogni singolo tetto. Per i piccoli edifici abitativi nuovi fino a 300 m² occorre invece produrre almeno tanta energia solare quanta ne serve per coprire la metà del fabbisogno energetico normale. Un’eccezione per meno di 50 m² di superficie determinante si applica soltanto se non esiste neppure una singola superficie di tetto idonea di almeno 50 m². Questa norma speciale non è la regola generale del 60%.',
    ], sourceIds: ['be-solarpflicht', 'be-keng', 'be-kenv'], module: { kind: 'regulatory-checklist', title: '2026: quale regola si applica al mio progetto?', items: [
      { title: 'Nuova costruzione o ampliamento', text: 'Prevedere energia solare per almeno il 10% della superficie determinante dell’edificio.', sourceIds: ['be-solarpflicht', 'be-keng'] },
      { title: 'Piccoli edifici abitativi', text: 'Per i piccoli edifici abitativi fino a 300 m², l’energia solare deve coprire almeno la metà del fabbisogno energetico normale.', sourceIds: ['be-solarpflicht', 'be-kenv'] },
      { title: 'Risanamento completo del tetto', text: 'Se è interessato almeno il 50% della superficie lorda del tetto, occorre notificare l’idoneità solare; non si tratta di un obbligo automatico d’installazione.', sourceIds: ['be-solarpflicht', 'be-vollzug'] },
      { title: 'Nuovo grande parcheggio', text: 'I nuovi parcheggi esterni con almeno 80 posti accessibili al pubblico e gestiti devono essere coperti con moduli solari se la superficie è idonea. Ciò vale anche per i nuovi impianti park-and-ride (P+R) con più di 50 posti.', sourceIds: ['be-solarpflicht', 'be-vollzug'] },
    ] } },
    { id: 'dachsanierung', title: 'Risanamento del tetto: la notifica non equivale automaticamente a un obbligo solare', paragraphs: [
      'No. Nel Cantone di Berna un risanamento completo del tetto fa scattare l’obbligo di notifica, ma non automaticamente l’obbligo di installare un impianto fotovoltaico.',
      'L’obbligo di notifica si applica agli edifici esistenti quando almeno il 50% della superficie lorda del tetto viene ricoperto o impermeabilizzato di nuovo. La notifica tramite eBau documenta l’idoneità solare e i costi d’installazione stimati; sono escluse le superfici del tetto inferiori a 20 m².',
      'La notifica crea trasparenza. La costruzione, l’idoneità, il diritto edilizio e la decisione della proprietà restano aspetti distinti.',
    ], sourceIds: ['be-solarpflicht', 'be-vollzug', 'be-kenv'], module: { kind: 'roof-explainer', title: 'Che cosa comporta realmente la notifica del tetto', items: [
      { title: '1. Verificare l’entità', text: 'Verificare se la nuova copertura o impermeabilizzazione interessa almeno il 50% della superficie lorda del tetto.', sourceIds: ['be-solarpflicht', 'be-vollzug'] },
      { title: '2. Indicare idoneità e costi', text: 'La notifica comprende l’idoneità allo sfruttamento dell’energia solare e i costi d’installazione stimati.', sourceIds: ['be-solarpflicht'] },
      { title: '3. Notificare per tempo', text: 'Per un progetto esente da autorizzazione, la notifica deve essere presentata al più tardi 7 giorni lavorativi prima dell’inizio dei lavori.', sourceIds: ['be-vollzug', 'be-kenv'] },
      { title: '4. Decidere separatamente', text: 'L’idoneità e la stima dei costi non fanno scattare automaticamente l’obbligo d’installare il fotovoltaico.', sourceIds: ['be-solarpflicht', 'be-vollzug'] },
    ] }, notice: { title: 'Distinzione importante', text: 'Il risanamento completo del tetto di un edificio esistente fa scattare l’obbligo di notifica. L’obbligo d’installazione per nuove costruzioni e ampliamenti è giuridicamente distinto.', status: 'important' } },
    { id: 'parkplaetze', title: 'Nuove regole per i parcheggi più grandi', paragraphs: [
      'I nuovi parcheggi esterni con almeno 80 posti accessibili al pubblico e a pagamento devono essere coperti con moduli solari se la superficie è idonea. Ciò vale anche per i nuovi impianti park-and-ride (P+R) all’aperto con più di 50 posti.',
      'Sulla superficie idonea almeno il 50% deve essere coperto con moduli solari; restano possibili eccezioni. Gli impianti P+R esistenti devono essere adeguati in occasione di un risanamento completo, ma al più tardi entro il 31 dicembre 2035.',
      'Con meno di 1’000 kWh di energia solare per metro quadrato all’anno (1’000 kWh/m²a) può essere concessa un’eccezione. Gli altri parcheggi esistenti non sono inclusi in modo generalizzato.',
    ], sourceIds: ['be-solarpflicht', 'be-vollzug', 'be-keng'] },
    { id: 'foerderung', title: 'Incentivi nel Cantone di Berna', paragraphs: [
      'Gli incentivi federali sono gestiti tramite Pronovo. Per gli impianti più piccoli vale la rimunerazione unica per piccoli impianti fotovoltaici (RUP), per quelli più grandi il corrispondente incentivo per grandi impianti (RUG), in entrambi i casi secondo le condizioni federali; ciò non comporta un incentivo cantonale percentuale forfettario per ogni abitazione.',
      'Il Cantone incentiva determinati risanamenti globali e nuove costruzioni energeticamente efficienti, per i quali il fotovoltaico o il solare termico possono essere computati. Questo incentivo è distinto dalla rimunerazione unica federale per il fotovoltaico (RU) e non è un contributo fotovoltaico generale. Condizioni e data di presentazione della domanda vanno verificati prima dell’incarico.',
    ], sourceIds: ['pronovo-eiv', 'be-solarpflicht'] },
    { id: 'bewilligung', title: 'Autorizzazione o notifica?', paragraphs: [
      'Anche un impianto solare esente da licenza edilizia può essere soggetto a notifica. Per la notifica fotovoltaica autonoma vale il termine massimo di 7 giorni lavorativi prima dell’inizio dei lavori.',
      'La notifica separata in caso di risanamento completo del tetto si presenta tramite eBau. Ubicazione, configurazione e interessi di protezione determinano la necessità di una licenza edilizia. Per un monumento, un contesto protetto o un impianto non adeguato occorre coinvolgere presto il Comune; la domanda Pronovo e la notifica non sostituiscono l’esame del diritto edilizio.',
    ], sourceIds: ['be-vollzug', 'be-solarpflicht', 'pronovo-eiv'] },
    { id: 'kosten', title: 'Quanto costa un impianto solare qui?', paragraphs: [
      'Il Cantone non pubblica un prezzo fisso per il fotovoltaico. Contano soprattutto il tetto, le dimensioni dell’impianto e la dotazione desiderata.',
      'Anche lo stato del tetto, l’accesso, il contatore, l’allacciamento alla rete e i vincoli di protezione possono modificare l’offerta. La stima dei costi per un risanamento del tetto fa parte della notifica, ma non impone un investimento.',
      'Il confronto più utile non è quindi un prezzo forfettario online, bensì diverse offerte per lo stesso progetto. Confrontate le singole voci, le pratiche e le garanzie.',
    ], bullets: ['Superficie e forma del tetto', 'Potenza dell’impianto', 'Ponteggio', 'Lavori elettrici', 'Batteria di accumulo', 'Autoconsumo', 'Inverter', 'Installatore / entità delle prestazioni'], sourceIds: ['be-solarpflicht', 'be-vollzug'] },
    { id: 'fuer-wen', title: 'Per chi è particolarmente conveniente un impianto solare nel Cantone di Berna?', paragraphs: [
      'Per una nuova costruzione o un ampliamento, l’energia solare va integrata presto nella progettazione. Per i piccoli edifici abitativi fino a 300 m² vale la metà del fabbisogno energetico normale; altrimenti si applica la combinazione del 10% e delle superfici di tetto idonee. In caso di risanamento completo occorre notificare idoneità e costi, senza che ne derivi un obbligo d’installazione.',
      'La convenienza dipende dal tetto, dal consumo e dall’offerta. Grandi parcheggi, oggetti protetti, facciate e forme del tetto insolite vanno chiariti presto.',
    ], sourceIds: ['be-solarpflicht', 'be-keng', 'be-vollzug'] },
  ],
  faqs: [
    { question: 'Dal 2026 nel Cantone di Berna vige un obbligo solare?', answer: 'Sì, per determinati progetti. Dal 1° gennaio 2026 vigono regole per nuove costruzioni, ampliamenti e determinati grandi parcheggi. Le nuove costruzioni e gli ampliamenti devono utilizzare almeno il 10% della superficie dell’edificio rilevante per il calcolo. Un risanamento completo del tetto comporta invece di regola una notifica, non automaticamente un obbligo d’installazione.', sourceIds: ['be-solarpflicht', 'be-keng'] },
    { question: 'Quanta superficie del tetto deve essere utilizzata per una nuova costruzione?', answer: 'I tetti ben idonei con almeno 1’000 kWh di energia solare per metro quadrato all’anno (1’000 kWh/m²a) devono utilizzare almeno il 60% della superficie complessiva. Può valere un’esenzione se la superficie determinante dell’edificio è inferiore a 50 m² e non esiste una singola superficie di tetto idonea di almeno 50 m². È possibile usare la facciata; per i piccoli edifici abitativi fino a 300 m² vale la regola speciale della metà del fabbisogno energetico normale.', sourceIds: ['be-solarpflicht', 'be-kenv'] },
    { question: 'Un risanamento del tetto significa automaticamente che devo installare il fotovoltaico?', answer: 'No. Se è interessato almeno il 50% della superficie del tetto (superficie lorda), scatta l’obbligo di notifica. Questa documenta l’idoneità solare e i costi stimati, ma non impone automaticamente l’installazione di un impianto fotovoltaico.', sourceIds: ['be-solarpflicht', 'be-vollzug'] },
    { question: 'Quando un risanamento del tetto è considerato completo?', answer: 'È considerato completo se almeno il 50% della superficie totale del tetto (superficie lorda) viene ricoperto o impermeabilizzato di nuovo. Le superfici inferiori a 20 m² sono escluse; la delimitazione concreta va verificata con la guida all’esecuzione.', sourceIds: ['be-solarpflicht', 'be-vollzug', 'be-kenv'] },
    { question: 'Quando devo presentare la notifica?', answer: 'Per una procedura di notifica fotovoltaica autonoma ed esente da autorizzazione, al più tardi 7 giorni lavorativi prima dell’inizio dei lavori. La notifica separata sull’idoneità solare per un risanamento completo passa tramite eBau. Per oggetti protetti o altri casi soggetti ad autorizzazione può essere necessaria anche una licenza edilizia.', sourceIds: ['be-vollzug', 'be-kenv'] },
    { question: 'Quali regole valgono per i grandi parcheggi?', answer: 'I nuovi parcheggi esterni con almeno 80 posti accessibili al pubblico e a pagamento e i nuovi impianti park-and-ride (P+R) con più di 50 posti devono essere coperti con moduli solari se la superficie è idonea. Almeno il 50% della superficie idonea va coperto; sotto 1’000 kWh di energia solare per metro quadrato all’anno (1’000 kWh/m²a) sono possibili eccezioni. Gli impianti P+R esistenti vanno adeguati in occasione di un risanamento completo, ma al più tardi entro il 31 dicembre 2035.', sourceIds: ['be-solarpflicht', 'be-vollzug'] },
    { question: 'Quali incentivi fotovoltaici esistono nel Cantone di Berna?', answer: 'Il fotovoltaico è sostenuto principalmente dalla Confederazione tramite Pronovo, in particolare con la rimunerazione unica per piccoli impianti fotovoltaici (RUP) o con il corrispondente incentivo per grandi impianti (RUG). Il Cantone incentiva inoltre determinati risanamenti globali o nuove costruzioni energeticamente efficienti in cui il fotovoltaico può essere computato. Non ne deriva una quota cantonale generale d’incentivo fotovoltaico.', sourceIds: ['pronovo-eiv', 'be-solarpflicht'] },
  ],
  sources: [...sources],
};