import type { CantonGuide } from '../types';

const sources = [
  { id: 'tg-env', authority: 'Cantone di Turgovia', title: 'Ordinanza sull’utilizzazione dell’energia (ENV), versione vigente', url: 'https://www.rechtsbuch.tg.ch/app/de/texts_of_law/731.11' },
  { id: 'tg-eng-revision', authority: 'Gran Consiglio del Cantone di Turgovia', title: 'Oggetto 24/GE 7/146: modifica della legge sull’utilizzazione dell’energia, stato concluso', url: 'https://parlament.tg.ch/de/geschaefte/?search=done&length=10&title=Energienutzung&legislatur=2024-2028' },
  { id: 'tg-solar-meldung', authority: 'Cantone di Turgovia', title: 'Ordinanza sulla pianificazione e l’edilizia § 50b – obbligo di notifica per impianti solari', url: 'https://www.rechtsbuch.tg.ch/app/de/texts_of_law/700.1' },
  { id: 'tg-foerderprogramm', authority: 'Cantone di Turgovia, Ufficio dell’energia', title: 'Presentazione elettronica delle domande e portale degli incentivi energetici', url: 'https://energie.tg.ch/hauptrubrik-2/wie-gehe-ich-vor.html/10651' },
  { id: 'ch-pronovo-pv', authority: 'Pronovo SA su incarico della Confederazione', title: 'Rimunerazione unica per impianti fotovoltaici', url: 'https://pronovo.ch/de/foerderung/photovoltaik' },
  { id: 'pronovo-tariff-calculator', authority: 'Pronovo SA su incarico della Confederazione', title: 'Calcolatore tariffario per il fotovoltaico', url: 'https://pronovo.ch/de/services/tarifrechner' },
] as const;

export const guide: CantonGuide = {
  id: 'thurgau', path: '/it/fotovoltaico-turgovia', canton: 'Turgovia',
  title: 'Fotovoltaico in Turgovia | PvPro.ch', description: 'Confrontate fino a tre offerte gratuite di installatori solari verificati per il vostro impianto fotovoltaico in Turgovia.',
  h1: 'Fotovoltaico in Turgovia: obbligo di elettricità propria e norme 2026 per nuove costruzioni',
  intro: [
    'Per una nuova costruzione in Turgovia occorre prevedere in linea di principio 30 W di potenza per elettricità propria per m² di superficie di riferimento energetico. La superficie di riferimento energetico (SRE) è la superficie riscaldata rilevante dell’edificio.',
    'Se si installa una potenza inferiore, il fabbisogno energetico dell’edificio deve essere ridotto ulteriormente. I piccoli ampliamenti possono essere esentati; per notifica, incentivi e revisione legislativa è determinante lo stato concreto del progetto.',
  ],
  quickFacts: [
    { value: '30 W/m² SRE', label: 'Potenza per elettricità propria nelle nuove costruzioni', sourceIds: ['tg-env'] },
    { value: '5 o 10 kWh/m²/anno', label: 'Riduzione supplementare con potenza inferiore', sourceIds: ['tg-env'] },
    { value: '<50 m²', label: 'Una soglia d’esenzione per piccoli ampliamenti', sourceIds: ['tg-env'] },
    { value: '20 giorni', label: 'Notifica prima dei lavori per impianti secondo il § 50b', sourceIds: ['tg-solar-meldung'] },
  ],
  ctaAfterSection: 'effizienzloesung',
  sections: [
    { id: 'effizienzloesung', title: '30 W di elettricità propria o efficienza supplementare dell’edificio', paragraphs: [
      'Per una nuova costruzione pianificate anzitutto 30 W di potenza per elettricità propria per m² SRE. Raggiungendo questo valore, il requisito è soddisfatto; con una potenza inferiore si applica un requisito energetico supplementare anziché una tassa sostitutiva.',
      'La riduzione supplementare riguarda il fabbisogno energetico per riscaldamento, acqua calda, raffreddamento e ventilazione. Non viene compensata con l’elettricità prodotta: secondo la potenza installata, l’edificio deve ridurre il fabbisogno determinante di altri 5 o 10 kWh per m² all’anno.',
    ], sourceIds: ['tg-env'], module: { kind: 'efficiency-decision', title: '30 W o soluzione di efficienza?', intro: 'Confrontate la potenza prevista per m² SRE con i tre livelli e, se necessario, dimostrate l’efficienza supplementare nella verifica energetica.', items: [
      { title: 'Potenza completa per elettricità propria', value: '30 W/m²', text: 'Con 30 W di potenza per elettricità propria per m² di superficie di riferimento energetico, il requisito per la nuova costruzione è soddisfatto.', detail: 'A questo livello non occorre alcuna riduzione supplementare secondo la soluzione di efficienza.', sourceIds: ['tg-env'] },
      { title: 'Potenza ridotta per elettricità propria', value: 'Da 15 a <30 W/m²', text: 'Con almeno 15 ma meno di 30 W/m², il fabbisogno per riscaldamento, acqua calda, raffreddamento e ventilazione deve essere ridotto di altri 5 kWh/m² all’anno.', detail: 'È determinante l’efficienza supplementare dell’edificio, non un confronto matematico con la produzione elettrica.', sourceIds: ['tg-env'] },
      { title: 'Potenza per elettricità propria sotto 15 W/m²', value: '<15 W/m²', text: 'Con meno di 15 W/m², il fabbisogno per riscaldamento, acqua calda, raffreddamento e ventilazione deve essere ridotto di altri 10 kWh/m² all’anno.', detail: 'La soluzione scelta e la potenza prevista devono figurare chiaramente nella verifica energetica.', sourceIds: ['tg-env'] },
    ] } },
    { id: 'erweiterungen', title: 'I piccoli ampliamenti possono essere esentati dal requisito', paragraphs: [
      'Per un ampliamento verificate la nuova SRE prima di applicare il requisito delle nuove costruzioni. L’esenzione vale se la nuova superficie di riferimento energetico è inferiore a 50 m².',
      'Un’esenzione è possibile anche se la nuova SRE equivale al massimo al 20% della SRE esistente e misura contemporaneamente al massimo 1’000 m². In questa seconda variante entrambe le condizioni devono essere soddisfatte.',
    ], sourceIds: ['tg-env'] },
    { id: 'oeffentliche-bauten', title: 'La regola dell’85% riguarda gli enti pubblici', paragraphs: [
      'Per un’abitazione privata non considerate la regola dell’85% d’irraggiamento globale come obbligo generale per ogni risanamento del tetto. Le disposizioni vigenti dei § 4a–4d rientrano nella funzione esemplare degli enti pubblici.',
      'Per nuove costruzioni, trasformazioni o risanamenti profondi e risanamenti completi dei tetti del Cantone, dei Comuni e di altri enti e istituti di diritto pubblico, è rilevante il potenziale solare delle superfici idonee da un irraggiamento globale dell’85%. Questa prescrizione per edifici pubblici non diventa automaticamente un obbligo generale per tetti privati.',
    ], sourceIds: ['tg-env'] },
    { id: 'revision', title: 'Valutare la revisione legislativa per il progetto concreto', paragraphs: [
      'Per la domanda di costruzione utilizzate la versione effettivamente in vigore al momento del progetto. Il 2 settembre 2026 il Gran Consiglio ha concluso l’esame della revisione della legge sull’utilizzazione dell’energia e pubblicato una versione finale.',
      'La sola conclusione dell’esame parlamentare non dimostra ancora l’entrata in vigore. Prima di presentare il progetto fate quindi verificare nella raccolta legislativa cantonale quali prescrizioni sono applicabili.',
    ], sourceIds: ['tg-eng-revision', 'tg-env'], notice: { title: 'Revisione conclusa il 2 settembre 2026', text: 'Per un progetto edilizio non è determinante soltanto la versione finale del Gran Consiglio, bensì il diritto effettivamente in vigore.', status: 'important' } },
    { id: 'meldung', title: 'Verificare l’obbligo di notifica 20 giorni prima dei lavori', paragraphs: [
      'Chiarite con il Comune se il progetto è esente da licenza e rientra nel § 50b. La notifica sostituisce una normale procedura di licenza edilizia: gli impianti solari esenti secondo il diritto federale con superficie superiore a 35 m² vanno notificati 20 giorni prima dell’inizio dei lavori.',
      'Alla notifica va allegata una descrizione dell’impianto e della sua integrazione. Per impianti nelle zone lavorative, alle condizioni previste basta comunicare superficie e potenza; occorre chiarire prima con il Comune se questi dati semplificati bastano per il progetto concreto.',
    ], sourceIds: ['tg-solar-meldung'] },
    { id: 'foerderung', title: 'Verificare separatamente le domande d’incentivo prima dei lavori', paragraphs: [
      'Presentate la domanda per misure del programma cantonale prima dell’inizio dei lavori di costruzione o installazione. Misure e condizioni attuali vanno verificate direttamente nel portale cantonale degli incentivi; non se ne può dedurre un importo cantonale forfettario per un normale impianto fotovoltaico.',
      'Gli incentivi federali ordinari per il fotovoltaico passano dalla rimunerazione unica (RU) di Pronovo. La RUP copre impianti sotto 100 kW, la RUG quelli da 100 kW; la RUE vale solo per le categorie previste senza consumo proprio. Dal 1° aprile 2024 il contributo di base è CHF 0, mentre potenza, tipo d’impianto ed eventuali bonus determinano il contributo individuale. Non è garantita una percentuale fissa.',
      'Prima del progetto va verificato nel portale anche se e a quali condizioni gli accumulatori ricevono incentivi cantonali. Le condizioni pubblicate in passato per il programma 2021 non sono una prova affidabile per il 2026.',
    ], sourceIds: ['tg-foerderprogramm', 'ch-pronovo-pv', 'pronovo-tariff-calculator'] },
    { id: 'kosten', title: 'Confrontare costi e pianificazione sulla stessa base', paragraphs: [
      'Confrontate le offerte con la stessa SRE, la stessa potenza prevista per elettricità propria e lo stesso livello di efficienza. Moduli, inverter, sottostruttura, ponteggi, lavori elettrici, allacciamento alla rete e accumulo opzionale devono inoltre essere indicati chiaramente.',
      'Tenete separati incentivi federali, possibili misure cantonali e prezzo prima delle deduzioni. Resta così comprensibile quali ipotesi sono incluse nell’offerta e quali contributi devono ancora essere confermati.',
      'Con PvPro.ch i proprietari possono confrontare gratuitamente e senza impegno fino a tre offerte solari idonee.',
    ], bullets: ['Superficie di riferimento energetico e W/m² applicati', 'Prova della soluzione di efficienza scelta', 'Lavori di montaggio, ponteggi ed elettricità', 'Ipotesi sugli incentivi separate dal prezzo dell’impianto'], sourceIds: ['tg-env', 'tg-foerderprogramm', 'ch-pronovo-pv', 'pronovo-tariff-calculator'] },
  ],
  faqs: [
    { question: 'Quanta elettricità propria deve produrre una nuova costruzione in Turgovia?', answer: '30 W/m² di superficie di riferimento energetico.', sourceIds: ['tg-env'] },
    { question: 'Posso installare meno fotovoltaico?', answer: 'Sì, se il fabbisogno energetico viene ulteriormente ridotto secondo la soluzione alternativa.', sourceIds: ['tg-env'] },
    { question: 'La regola dell’85% d’irraggiamento globale vale automaticamente per ogni tetto privato?', answer: 'Non come affermazione generale ai sensi dell’attuale § 4c; questa norma rientra nella funzione esemplare degli enti pubblici.', sourceIds: ['tg-env'] },
    { question: 'Quanto prima va notificato un impianto solare esente da licenza?', answer: 'Per gli impianti contemplati dal § 50b, 20 giorni prima dell’inizio dei lavori.', sourceIds: ['tg-solar-meldung'] },
    { question: 'La revisione della legge sull’energia del settembre 2026 è già vincolante?', answer: 'Il Gran Consiglio ha concluso l’esame; per un progetto concreto è determinante la versione legislativa effettivamente in vigore.', sourceIds: ['tg-eng-revision', 'tg-env'] },
  ], sources: [...sources],
};