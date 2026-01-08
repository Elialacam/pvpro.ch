/**
 * ITALIAN CITY CONTENT - Lugano (Canton Ticino)
 * Full Italian translation for Lugano solar installation page
 */

import { CityContent } from './city-content';

export const cityContentsIT: Record<string, CityContent> = {
  lugano: {
    slug: 'lugano',
    heroHeadline: 'Impianto Fotovoltaico Lugano Ticino',
    heroSubheadline: 'Approfitta di 2.157 ore di sole all\'anno',
    heroDescription: 'Lugano, nel soleggiato Ticino, offre le migliori condizioni per l\'energia solare in tutta la Svizzera. Confronta gratuitamente le offerte di installatori locali certificati e risparmia fino al 30%.',

    whySolarTitle: 'Perché Lugano è ideale per l\'energia solare?',
    whySolarIntro: 'Con 2.157 ore di sole all\'anno, Lugano è in cima alla classifica dei siti solari svizzeri. La posizione meridionale e il clima mite del Canton Ticino creano condizioni ottimali per massimi rendimenti del vostro impianto fotovoltaico.',
    whySolarReasons: [
      {
        title: 'Leader: 2.157 ore di sole',
        description: 'Lugano riceve più sole di qualsiasi altra grande città svizzera - una media di 2.157 ore all\'anno. Ciò significa fino al 38% di rendimenti più elevati rispetto a Zurigo e rende ogni investimento nel solare particolarmente redditizio.'
      },
      {
        title: 'Programma Energia Ticino',
        description: 'Il Canton Ticino offre propri programmi di incentivi oltre alle sovvenzioni federali. I proprietari di case a Lugano beneficiano della consulenza energetica cantonale e di contributi speciali per sistemi solari innovativi con accumulo.'
      },
      {
        title: 'Clima mediterraneo, condizioni ottimali',
        description: 'La posizione meridionale e il clima mediterraneo di Lugano con estati calde e inverni miti garantiscono rendimenti solari costanti tutto l\'anno. Il carico di neve è raramente un problema, gli impianti producono in modo affidabile anche in inverno.'
      }
    ],

    cityFactsTitle: 'Lugano: Il miglior sito solare della Svizzera',
    cityFactsParagraphs: [
      'Lugano è la terza città più grande del Canton Ticino e gode di una posizione unica sulle sponde del Lago di Lugano. Con 2.157 ore di sole all\'anno, la città offre le condizioni più favorevoli per impianti fotovoltaici in tutta la Svizzera. Il clima mediterraneo mite garantisce rendimenti elevati durante tutto l\'anno.',
      'Il settore dell\'energia solare in Ticino è in forte espansione. Grazie al \"Programma Energia\" cantonale, i proprietari di case a Lugano ricevono consulenze complete e sovvenzioni attraenti per l\'installazione di impianti fotovoltaici. Le autorità locali promuovono attivamente la transizione verso energie rinnovabili.',
      'Un impianto fotovoltaico medio da 5 kWp a Lugano produce circa 6.500 kWh di elettricità all\'anno - significativamente più che nelle regioni del Mittelland svizzero. Con un\'alta quota di autoconsumo, questo consente risparmi annuali superiori a CHF 2.400 e un periodo di ammortamento di soli 4-5 anni.',
      'I comuni ticinesi offrono ulteriori incentivi oltre alle sovvenzioni federali e cantonali. Molti proprietari di case a Lugano optano per sistemi con batterie di accumulo per massimizzare l\'autoconsumo e diventare ancora più indipendenti dalla rete. I nostri partner locali certificati accompagnano l\'intero processo - dalla pianificazione all\'installazione fino alla registrazione delle sovvenzioni.'
    ],

    pricing: {
      min: 8800,
      max: 23000,
      typical5kw: { min: 9500, max: 14000 },
      afterSubsidy5kw: { min: 6200, max: 9800 },
      roiYears: '4-5'
    },

    incentives: {
      title: 'Sovvenzioni a Lugano e in Ticino',
      description: 'Il Canton Ticino offre programmi di incentivi particolarmente attraenti per impianti fotovoltaici. Oltre alla sovvenzione unica federale (RU), ci sono contributi cantonali e deduzioni fiscali.',
      programs: [
        {
          name: 'Rimunerazione Unica Federale (RU)',
          amount: 'Fino a CHF 3.500',
          description: 'La Confederazione promuove nuovi impianti fotovoltaici con una sovvenzione unica che copre fino al 30% dei costi di investimento. Per un impianto da 5 kWp a Lugano, questo corrisponde a circa CHF 2.600-3.500.'
        },
        {
          name: 'Programma Energia Canton Ticino',
          amount: 'Ulteriori 10-15%',
          description: 'Il Canton Ticino offre ulteriori sovvenzioni per impianti innovativi con batterie di accumulo. Attraverso il programma \"Energia\", i proprietari di case ricevono anche consulenza energetica gratuita e supporto per le richieste.'
        },
        {
          name: 'Deduzioni fiscali Ticino',
          amount: 'Fino a CHF 6.000/anno',
          description: 'Le spese per impianti solari possono essere detratte dalle tasse in Ticino. Questo riduce ulteriormente i costi effettivi e migliora il periodo di ammortamento dell\'investimento solare.'
        },
        {
          name: 'Incentivi comunali Lugano',
          amount: 'Variabili',
          description: 'Il comune di Lugano offre ulteriori programmi di incentivi per energie rinnovabili. Informarsi presso l\'ufficio energia del comune sui contributi attuali per impianti fotovoltaici e batterie di accumulo.'
        }
      ]
    },

    caseStudies: [
      {
        name: 'Famiglia Bernasconi',
        location: 'Lugano-Besso',
        systemSize: '6.2 kWp',
        cost: '12.400 CHF (netto)',
        savings: '2.600 CHF/anno',
        payback: '4,8 anni',
        quote: 'Grazie agli elevati rendimenti qui a Lugano, il nostro impianto si è ammortizzato molto più velocemente del previsto. Siamo già quasi autosufficienti dal punto di vista energetico!'
      },
      {
        name: 'Casa Multifamiliare Maggi',
        location: 'Lugano-Molino Nuovo',
        systemSize: '18.5 kWp',
        cost: '34.800 CHF (netto)',
        savings: '7.800 CHF/anno',
        payback: '4,5 anni',
        quote: 'L\'installazione è stata professionale e veloce. I rendimenti solari a Lugano sono eccezionali - il miglior investimento per la nostra proprietà.'
      },
      {
        name: 'Ditta Rossini & Figli',
        location: 'Lugano-Viganello',
        systemSize: '25 kWp con accumulo',
        cost: '52.000 CHF (netto)',
        savings: '11.200 CHF/anno',
        payback: '4,6 anni',
        quote: 'La posizione soleggiata di Lugano è perfetta per il nostro impianto aziendale. Con la batteria di accumulo possiamo utilizzare quasi tutta l\'energia solare stessa.'
      }
    ],

    faqs: [
      {
        question: 'Quanto costa un impianto fotovoltaico a Lugano?',
        answer: 'Un impianto fotovoltaico tipico per una casa unifamiliare a Lugano costa tra CHF 9.500 e CHF 14.000 lordi per un sistema da 5 kWp. Dopo le sovvenzioni federali e cantonali, i costi netti si riducono a CHF 6.200-9.800. Con una batteria di accumulo, i costi sono più elevati, tra CHF 19.500 e CHF 28.000 lordi.'
      },
      {
        question: 'Perché Lugano è il miglior sito solare della Svizzera?',
        answer: 'Lugano riceve 2.157 ore di sole all\'anno - più di qualsiasi altra grande città svizzera. Il clima mediterraneo mite e la posizione meridionale garantiscono rendimenti elevati costanti. Un impianto da 5 kWp produce qui circa 6.500 kWh/anno, ovvero fino al 38% in più rispetto all\'altopiano svizzero.'
      },
      {
        question: 'Quali sovvenzioni sono disponibili a Lugano?',
        answer: 'A Lugano beneficiate di diversi programmi di sovvenzioni: 1) Rimunerazione Unica Federale (RU) fino a CHF 3.500, 2) Programma Energia Canton Ticino con ulteriori 10-15%, 3) Deduzioni fiscali fino a CHF 6.000/anno, 4) Possibili incentivi comunali. In totale, fino al 45% dei costi di investimento possono essere coperti da sovvenzioni.'
      },
      {
        question: 'Quanto velocemente si ammortizza un impianto fotovoltaico a Lugano?',
        answer: 'Grazie agli elevati rendimenti solari e alle sovvenzioni attraenti, un impianto fotovoltaico a Lugano si ammortizza in 4-5 anni - significativamente più veloce rispetto ad altre regioni svizzere. Con una durata di vita di 25-30 anni, beneficerete di 20-25 anni di elettricità gratuita.'
      },
      {
        question: 'Come funziona il Programma Energia Ticino?',
        answer: 'Il Programma Energia del Canton Ticino offre consulenza energetica gratuita e sovvenzioni per impianti solari innovativi. I proprietari di case ricevono supporto completo - dalla pianificazione alla richiesta di sovvenzioni fino all\'installazione. Sono particolarmente promossi i sistemi con batterie di accumulo e soluzioni per l\'autoconsumo.'
      },
      {
        question: 'Un impianto fotovoltaico è utile anche sul Lago di Lugano?',
        answer: 'Assolutamente sì! Le regioni intorno al Lago di Lugano beneficiano di un microclima particolarmente favorevole con ancora più ore di sole. Il riflesso dell\'acqua può addirittura aumentare i rendimenti. Anche nelle giornate nuvolose, gli impianti moderni producono elettricità in modo efficiente.'
      },
      {
        question: 'Quanto produce un impianto fotovoltaico a Lugano?',
        answer: 'A Lugano, un impianto da 1 kWp produce circa 1.300 kWh all\'anno - molto più che nell\'altopiano svizzero (900-1.000 kWh/kWp). Un sistema tipico da 5 kWp genera quindi circa 6.500 kWh/anno, che copre il fabbisogno elettrico annuale di una famiglia di 4-5 persone.'
      },
      {
        question: 'Vale la pena una batteria di accumulo a Lugano?',
        answer: 'Con gli elevati rendimenti solari a Lugano, una batteria di accumulo è particolarmente utile. Potete aumentare l\'autoconsumo dal 30% fino al 70% e diventare così meno dipendenti dalla rete. Il Canton Ticino promuove sistemi con accumulo con sovvenzioni aggiuntive, il che migliora ulteriormente la redditività.'
      }
    ],

    testimonial: {
      initials: 'FB',
      name: 'Franco Bernasconi',
      quote: 'Lugano offre le condizioni perfette per l\'energia solare. Il nostro impianto produce molto più di quanto avessimo previsto. Con PVPro abbiamo ricevuto tre eccellenti offerte e abbiamo scelto quella migliore. Un servizio veramente consigliato!'
    }
  }
};
