import type { CantonGuide } from '../types';

const sources = [
  { id: 'ti-ruen', authority: 'Cantone Ticino', title: 'Regolamento sull’utilizzazione dell’energia (RUEn), art. 14 e art. 36', url: 'https://m3.ti.ch/CAN/RLeggi/public/index.php/raccolta-leggi/legge/num/870' },
  { id: 'ti-solar-meldeverfahren', authority: 'Cantone Ticino', title: 'Regolamento di applicazione della legge edilizia (RLE): impianti solari', url: 'https://m3.ti.ch/CAN/RLeggi/public/index.php/raccolta-leggi/legge/num/407' },
  { id: 'ti-rfer', authority: 'Cantone Ticino', title: 'Regolamento del Fondo per le energie rinnovabili (RFER), art. 24–25', url: 'https://m3.ti.ch/CAN/RLeggi/public/index.php/raccolta-leggi/legge/num/525' },
  { id: 'ti-fer-2026', authority: 'Cantone Ticino / AET', title: 'RFER 2026: rimunerazione minima, RCP e CLE', url: 'https://www4.ti.ch/tich/area-media/comunicati/dettaglio-comunicato?NEWS_ID=256850' },
  { id: 'pronovo-eiv', authority: 'Pronovo / Confederazione', title: 'Rimunerazione unica (RU) per impianti fotovoltaici', url: 'https://pronovo.ch/de/foerderung/photovoltaik' },
  { id: 'pronovo-tariff-calculator', authority: 'Pronovo / Confederazione', title: 'Calcolatore tariffario per il fotovoltaico', url: 'https://pronovo.ch/de/services/tarifrechner' },
] as const;

export const guide: CantonGuide = {
  id: 'tessin', path: '/it/fotovoltaico-ticino', canton: 'Ticino',
  title: 'Fotovoltaico in Ticino | PvPro.ch', description: 'Confrontate offerte solari per il vostro progetto in Ticino, considerando FER cantonale e incentivi federali.',
  h1: 'Fotovoltaico in Ticino: incentivi, elettricità propria e FER 2026',
  intro: ['In Ticino, le nuove costruzioni e i progetti assimilati devono in linea di principio produrre elettricità rinnovabile. Oltre agli incentivi federali di Pronovo esistono il CU-FV cantonale e, dal 2026, nuove regole FER per l’immissione in rete.','Per una pianificazione corretta, Comune, allacciamento alla rete, Pronovo e FER vanno trattati separatamente. I passi seguenti mostrano le rispettive competenze e i termini da rispettare.'],
  quickFacts: [
    { value: '10 W/m² nuova SRE', label: 'Prescrizione per nuove costruzioni e progetti assimilati', sourceIds: ['ti-ruen'] },
    { value: 'Obbligo rigorosamente <30 kW', label: 'Questa prescrizione non richiede mai 30 kW o più', sourceIds: ['ti-ruen'] },
    { value: '30 giorni prima', label: 'Notifica al Comune se non occorre una licenza edilizia', sourceIds: ['ti-solar-meldeverfahren'] },
    { value: '12 mesi', label: 'Notifica FER dall’allacciamento effettivo alla rete', sourceIds: ['ti-rfer'] },
  ],
  ctaAfterSection: 'verfahren',
  sections: [
    { id: 'verfahren', title: 'Distinguere correttamente Comune, Pronovo e FER', paragraphs: ['Iniziate dalla classificazione edilizia presso il Comune e gestite separatamente le procedure d’incentivazione. La sequenza offre un orientamento, ma non significa che Pronovo e FER debbano sempre essere richiesti uno dopo l’altro.'], sourceIds: ['ti-solar-meldeverfahren','ti-rfer','pronovo-eiv'], module: { kind: 'fer-procedure', title: 'Comune, Pronovo e FER: tre procedure diverse', intro: 'Queste sei tappe mostrano le competenze. Chiarite le date concrete d’inoltro con gli enti coinvolti, affinché lavori paralleli e termini siano gestiti correttamente.', items: [
      { title: '1. Classificare il progetto', value: 'Progetto edilizio', text: 'Verificare se si tratta di nuova costruzione, ampliamento o trasformazione assimilata a una nuova costruzione e determinare la nuova SRE e un’eventuale eccezione.', detail: 'La SRE, ossia superficie di riferimento energetico, è la superficie riscaldata rilevante dell’edificio.', sourceIds: ['ti-ruen'] },
      { title: '2. Contattare il Comune', value: 'Comune', text: 'Chiarire con il Comune se occorre una licenza edilizia o basta la procedura di notifica.', detail: 'La procedura di notifica consiste in una comunicazione al posto della normale procedura di licenza edilizia.', sourceIds: ['ti-solar-meldeverfahren'] },
      { title: '3. Installare e allacciare alla rete', value: 'Impianto + rete', text: 'Conclusa la procedura edilizia appropriata, installare l’impianto e documentare l’allacciamento effettivo alla rete.', detail: 'La data d’allacciamento avvia il termine di dodici mesi per notificare al FER la messa in esercizio.', sourceIds: ['ti-rfer'] },
      { title: '4. Gestire gli incentivi federali', value: 'Pronovo', text: 'Esaminare la rimunerazione unica federale di Pronovo come procedura distinta e determinare la categoria adatta all’impianto.', detail: 'Pronovo e il CU-FV cantonale sono due canali d’incentivazione diversi.', sourceIds: ['pronovo-eiv','ti-rfer'] },
      { title: '5. Notificare separatamente al FER', value: 'FER', text: 'Notificare al FER la messa in esercizio entro dodici mesi dall’allacciamento effettivo; per il fotovoltaico una notifica tardiva può essere esclusa.', detail: 'La notifica edilizia al Comune non sostituisce questa notifica FER.', sourceIds: ['ti-rfer'] },
      { title: '6. Definire consumo proprio ed eccedenza', value: 'RCP + CLE', text: 'Per impianti CU-FER dal 2026, valutare l’opportunità di un RCP o una CLE e il trattamento dell’eccedenza secondo le condizioni FER/AET.', detail: 'RCP indica il raggruppamento ai fini del consumo proprio; CLE una comunità locale di elettricità.', sourceIds: ['ti-fer-2026'] },
    ] } },
    { id: 'eigenstrom', title: 'Obbligo di elettricità propria per nuove costruzioni, ampliamenti e trasformazioni', paragraphs: [
      'Per nuove costruzioni, ampliamenti o trasformazioni assimilate a una nuova costruzione, prevedete in linea di principio 10 W di produzione elettrica rinnovabile per m² di nuova SRE. SRE significa superficie riscaldata rilevante dell’edificio.',
      'La potenza richiesta resta rigorosamente sotto 30 kW: la prescrizione non impone mai 30 kW o più. È un tetto dell’obbligo, non un limite a un impianto volontariamente più grande.',
      'Se produrre elettricità è difficile o sproporzionato, il fabbisogno energetico ponderato dell’edificio può invece essere ridotto di altri 5 kWh per m² all’anno. Se l’obbligo è adempiuto in parte, anche questo requisito di efficienza diminuisce proporzionalmente.',
    ], bullets: ['Eccezione per un ampliamento con meno di 50 m² di nuova SRE','Eccezione per un ampliamento inferiore al 20% della parte esistente e contemporaneamente non superiore a 1’000 m²','Eccezioni per determinati insediamenti ISOS e nuclei','Eccezioni per beni culturali protetti e relativi perimetri di protezione'], sourceIds: ['ti-ruen'], notice: { title: 'La precedente regola dei 300 m² è scaduta', text: 'La disposizione transitoria dell’art. 36 RUEn imponeva, per determinate nuove costruzioni con oltre 300 m² di superficie determinante, energia solare sul 50% del tetto o della facciata. Era espressamente limitata al 31 dicembre 2025 e non costituisce un obbligo attuale per il 2026.', status: 'important' } },
    { id: 'meldung', title: 'Procedura di notifica: informare il Comune almeno 30 giorni prima', paragraphs: [
      'Presentate al Comune un impianto solare esente da licenza almeno 30 giorni prima dei lavori. Esente da licenza non significa esente da procedura: la notifica sostituisce la normale procedura di licenza edilizia.',
      'Preparate la documentazione completa: nome e indirizzo della proprietà, numero di particella, piano di situazione 1:500 o 1:1000, modello dei pannelli, potenza totale, vista del tetto e sezioni. Il Comune trasmette i documenti alla SPAAS entro dieci giorni.',
      'Il termine di dieci giorni per l’inoltro comunale non va confuso con quello di almeno 30 giorni prima dei lavori. Chiarite anzitutto con il Comune d’ubicazione se per il progetto basta davvero la notifica.',
    ], sourceIds: ['ti-solar-meldeverfahren'] },
    { id: 'cu-fv', title: 'CU-FV cantonale in aggiunta agli incentivi federali', paragraphs: [
      'Esaminate il CU-FV cantonale separatamente da Pronovo. Per impianti messi in esercizio dal 1° aprile 2022, il contributo fino a 30 kW è calcolato al 50% del riferimento RU-CH determinante.',
      'Oltre 30 kW si applica il 50% della RU-CH ai primi 30 kW e un terzo della RU-CH alla potenza restante. Il contributo cantonale è limitato a CHF 250’000.',
      'I bonus federali per inclinazione o altitudine e la RUE non entrano nel calcolo cantonale. Inoltre, alle condizioni RFER, i contributi cantonali complessivi non possono superare il 50% dei costi d’investimento riconosciuti.',
      'Notificate al FER la messa in esercizio entro dodici mesi dall’allacciamento effettivo. Per il fotovoltaico, una notifica tardiva può comportare la mancata accettazione della domanda cantonale.',
    ], sourceIds: ['ti-rfer'] },
    { id: 'rmin', title: 'Rmin FER 2026 per impianti CU-FER sotto 150 kW', paragraphs: [
      'Dal 1° gennaio 2026, per impianti CU-FER sotto 150 kW si applica una rimunerazione minima se il prezzo di ritiro AET è inferiore al minimo determinante. Non sostituisce quindi automaticamente il prezzo AET in ogni caso.',
      'Sotto 30 kW il minimo è 4.0 ct./kWh. Per impianti da 30 a 150 kW senza consumo proprio è 5.0 ct./kWh.',
      'Per impianti da 30 a 150 kW con consumo proprio si applica una ponderazione: 4.0 ct./kWh alla quota dei primi 30 kW e 0.0 ct./kWh alla quota restante. Il valore misto specifico dell’impianto è rilevante nel confronto con il prezzo di ritiro AET.',
    ], sourceIds: ['ti-fer-2026'] },
    { id: 'rcp-cle', title: 'RCP e CLE con CU-FER dal 2026', paragraphs: ['Dal 1° gennaio 2026 gli impianti CU-FER possono partecipare a un RCP o a una CLE. Un RCP è un raggruppamento ai fini del consumo proprio; una CLE è una comunità locale di elettricità.','L’energia consumata internamente non viene venduta ad AET. Solo l’eccedenza resta soggetta alle condizioni FER/AET applicabili. Chiarite quindi misurazione, attribuzione interna e trattamento delle eccedenze prima dell’attuazione.'], sourceIds: ['ti-fer-2026'] },
    { id: 'pronovo', title: 'Pronovo è la procedura federale separata', paragraphs: ['Richiedete o esaminate la rimunerazione unica federale indipendentemente dal FER cantonale. RU significa rimunerazione unica: la RUP vale sotto 100 kW, la RUG da 100 kW; la RUE senza consumo proprio è disponibile solo per le categorie ammesse.','Dal 1° aprile 2024 il contributo di base è CHF 0. L’importo concreto dipende dalla tariffa individuale e dalle condizioni e non è una percentuale fissa garantita dei costi.'], sourceIds: ['pronovo-eiv','pronovo-tariff-calculator'] },
    { id: 'batterie', title: 'Batteria senza contributo FER domestico separato confermato', paragraphs: ['Per una normale batteria solare privata non calcolate un bonus FER cantonale generale. Il RFER non conferma un contributo standard separato per una batteria domestica abbinata a un normale impianto solare.','Un’eventuale offerta comunale dovrebbe essere comprovata separatamente per l’ubicazione concreta. Fate quindi indicare l’accumulo nell’offerta come posizione distinta e chiaramente denominata.'], sourceIds: ['ti-rfer'] },
    { id: 'kosten', title: 'Rendere comparabili costi e pianificazione', paragraphs: ['Confrontate le offerte sulla stessa base tecnica e amministrativa. Devono figurare in particolare nuova SRE, potenza prevista, lavori sul tetto ed elettrici, allacciamento, concetto di misurazione e accumulo opzionale.','Indicate Pronovo, CU-FV e ipotesi d’immissione come posizioni separate. Resta così visibile quali importi fanno parte dell’offerta e quali saranno stabiliti solo dopo una procedura propria.','Con PvPro.ch i proprietari possono confrontare gratuitamente e senza impegno fino a tre offerte solari idonee.'], bullets: ['Potenza e piano di posa sulla stessa base','Procedura comunale e documenti necessari','Allacciamento, contatore e concetto di consumo proprio','Pronovo e CU-FV indicati separatamente','Batteria come opzione chiaramente riconoscibile'], sourceIds: ['ti-ruen','ti-solar-meldeverfahren','ti-rfer','pronovo-eiv'] },
  ],
  faqs: [
    { question: 'In Ticino esiste un obbligo di elettricità propria per nuove costruzioni?', answer: 'Sì, in linea di principio 10 W/m² di nuova superficie di riferimento energetico.', sourceIds: ['ti-ruen'] },
    { question: 'La precedente regola dei 300 m² vale ancora?', answer: 'No, l’art. 36 era espressamente limitato al 31.12.2025.', sourceIds: ['ti-ruen'] },
    { question: 'Il Cantone Ticino incentiva il fotovoltaico oltre a Pronovo?', answer: 'Sì, tramite il CU-FV del FER alle condizioni legali.', sourceIds: ['ti-rfer','pronovo-eiv'] },
    { question: 'A quanto ammonta il contributo cantonale?', answer: 'Fino a 30 kW, in linea di principio il 50% della RU-CH determinante; per impianti maggiori vale una formula scaglionata.', sourceIds: ['ti-rfer'] },
    { question: 'Entro quando va notificata al FER la messa in esercizio?', answer: 'Al più tardi dodici mesi dopo l’allacciamento alla rete.', sourceIds: ['ti-rfer'] },
    { question: 'Un impianto CU-FER può partecipare a una CLE?', answer: 'Sì, dal 1° gennaio 2026.', sourceIds: ['ti-fer-2026'] },
  ], sources: [...sources],
};