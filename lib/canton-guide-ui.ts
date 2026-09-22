export type CantonGuideLanguage = 'de' | 'it' | 'fr' | 'en';

interface CantonGuideUi {
  requestPath: string;
  navigationLabel: string;
  anchors: {
    costs: string;
    funding: string;
    permit: string;
    solarRequirement: string;
    roofRenovation: string;
    rules: string;
  };
  source: string;
  sources: string;
  sourceAria: (id: string) => string;
  offer: {
    compareTitle: string;
    compareText: string;
    finalTitle: string;
    finalText: string;
    button: string;
    microcopy: string;
  };
  process: {
    eyebrow: string;
    title: string;
    steps: readonly [
      { title: string; text: string },
      { title: string; text: string },
      { title: string; text: string },
    ];
  };
  faqTitle: string;
  sourcesTitle: string;
  dates: {
    final: string;
    dossier: string;
    standard: string;
  };
  officialSource: string;
  hero: {
    eyebrow: string;
    keyFactsAria: (canton: string) => string;
    visual: {
      solarRequirement: string;
      fundingChange: string;
      advice: string;
      propertyLocation: string;
      newSince2026: string;
      fundingStatus: string;
      twoFundingPaths: string;
      inclinationCheck: string;
      solarRelevance: string;
      newBuildCheck: string;
    };
    dossierLabels: Record<string, string>;
    next: {
      newBuildPlanned: string;
      horizontalAngle: string;
      notCombinable: string;
      fundingNotice: string;
    };
  };
  module: {
    step: string;
    important: string;
    roofNoticeTitle: string;
    roofNoticeText: string;
    yes: string;
    no: string;
    next: string;
    trigger: string;
    noTriggerTitle: string;
    noTriggerText: string;
    inclinationAria: string;
    defaultColumns: [string, string];
    selectorLegend: string;
    checkFundingPath: string;
    status: string;
    fundingNotice: string;
    dossier: {
      checkNext: string;
      angleTitle: string;
      angleDescription: string;
      horizontal: string;
      angleCaption: string;
      sequenceAria: string;
      sequence: [string, string, string, string];
      transition: string;
      from2026: string;
    };
    final: {
      applies: string;
      doesNotApply: string;
      currentLawAria: string;
      rejectedRevisionAria: string;
      fulfilled: string;
      reduction: string;
    };
    closing: {
      checkFromOctober: string;
      formulaAria: string;
      ownPower: string;
      option: string;
      vaudColumns: [string, string];
      zurichJurisdictions: [string, string];
      zurichLaw: [string, string];
    };
  };
}

export const cantonGuideUi: Record<CantonGuideLanguage, CantonGuideUi> = {
  de: {
    requestPath: '/anfrage',
    navigationLabel: 'Inhalt dieser Seite',
    anchors: {
      costs: 'Kosten',
      funding: 'Förderung',
      permit: 'Bewilligung',
      solarRequirement: 'Solarpflicht',
      roofRenovation: 'Dachsanierung',
      rules: 'Regeln',
    },
    source: 'Quelle',
    sources: 'Quellen',
    sourceAria: id => `Quelle ${id}`,
    offer: {
      compareTitle: 'Offerten auf gleicher Grundlage vergleichen',
      compareText: 'Der sinnvollste Vergleich: mehrere Offerten für dasselbe Projekt.',
      finalTitle: 'Ihr Solarprojekt konkret planen',
      finalText: 'Starten Sie mit einer klaren Anfrage für Ihr konkretes Projekt.',
      button: 'Bis zu 3 Solarofferten vergleichen',
      microcopy: 'Kostenlos · Unverbindlich · Passende Fachbetriebe',
    },
    process: {
      eyebrow: 'In drei Schritten',
      title: 'So funktioniert der Vergleich über PvPro.ch',
      steps: [
        { title: 'Projekt beschreiben', text: 'Kurz Angaben zu Gebäude und Solarprojekt machen.' },
        { title: 'Bis zu 3 passende Fachbetriebe', text: 'Wir prüfen Ihre Anfrage und leiten sie passend weiter.' },
        { title: 'Offerten vergleichen', text: 'Leistung, Anlage und Preis in Ruhe vergleichen.' },
      ],
    },
    faqTitle: 'Häufige Fragen',
    sourcesTitle: 'Quellen & Stand',
    dates: {
      final: 'Stand: 21. September 2026',
      dossier: 'Stand: 15. September 2026',
      standard: 'Stand: September 2026',
    },
    officialSource: 'Offizielle Quelle',
    hero: {
      eyebrow: 'Kantonale Informationen · Stand September 2026',
      keyFactsAria: canton => `${canton}: wichtige Eckwerte`,
      visual: {
        solarRequirement: 'Solarpflicht-Check', fundingChange: 'Förderung im Wandel',
        advice: 'Beratung vor dem Entscheid', propertyLocation: 'Wo liegt Ihre Liegenschaft?',
        newSince2026: 'Neu seit 2026', fundingStatus: 'Förderstatus',
        twoFundingPaths: 'Zwei Förderwege', inclinationCheck: 'Neigungs-Check',
        solarRelevance: 'Wann Solar relevant wird', newBuildCheck: 'Neubau-Check',
      },
      dossierLabels: {
        uri: 'Der Wechsel am 1. Oktober', waadt: '2026 und der Ausblick auf 2027',
        wallis: 'Neubau, Dachsanierung & Grossdach', zug: 'Eigenstrom oder Ersatzabgabe',
        zurich: 'Kanton und Stadt unterscheiden', schwyz: 'Solarkataster & Eigenstrom',
        solothurn: 'Was 2026 wirklich gilt', 'st-gallen': 'Vier Wege zur Erfüllung',
        tessin: 'Gemeinde, Pronovo & FER', thurgau: 'Eigenstrom oder Effizienz',
        luzern: 'Bauvorhaben prüfen', neuenburg: 'Batterie & Förderung',
        nidwalden: 'Eigenstrom planen', obwalden: 'Winterstrom fördern',
        default: 'Neue Regeln einordnen',
      },
      next: {
        newBuildPlanned: 'Neubau geplant?', horizontalAngle: '75° zur Horizontalen',
        notCombinable: 'Nicht miteinander kombinierbar.',
        fundingNotice: 'Stand: 15. September 2026. Förderbudgets können sich ändern – vor Auftrag aktuellen Stand prüfen.',
      },
    },
    module: {
      step: 'Schritt', important: 'Wichtig',
      roofNoticeTitle: 'Eine Meldung ist keine Installationspflicht.',
      roofNoticeText: 'Die Meldepflicht bei einer umfassenden Dachsanierung dokumentiert die solare Eignung. Ob eine Solaranlage gebaut werden muss, beurteilt sich nach den eigenen Regeln.',
      yes: 'Ja', no: 'Nein', next: 'Weiter', trigger: 'TRIGGER',
      noTriggerTitle: 'Keine dieser Situationen?',
      noTriggerText: 'Dann besteht nicht automatisch aufgrund dieser drei Regeln eine Pflicht. Andere Vorschriften und Schutzinteressen bleiben zu prüfen.',
      inclinationAria: 'Vereinfachtes Diagramm einer steilen Photovoltaikfläche mit 75 Grad Neigung',
      defaultColumns: ['Winterstrom', 'Flächenpotenzial'],
      selectorLegend: 'Wie ist meine Anlage geplant?', checkFundingPath: 'Förderweg prüfen',
      status: 'Status',
      fundingNotice: 'Stand: 15. September 2026. Förderbudgets können sich ändern – vor Auftrag aktuellen Stand prüfen.',
      dossier: {
        checkNext: 'Danach prüfen', angleTitle: 'Neigungswinkel von 75 bis 90 Grad',
        angleDescription: 'Eine Solaranlage ist steil über einer horizontalen Grundlinie dargestellt. Der gelbe Bogen markiert den Bereich von 75 bis 90 Grad.',
        horizontal: 'Horizontale', angleCaption: 'Förderbereich: steile Anlage mit 75° bis 90° Neigung',
        sequenceAria: 'Ablauf', sequence: ['Gesuch', 'Eingangsbestätigung', 'Bau', 'Abschluss'],
        transition: 'Übergang', from2026: 'Ab 2026',
      },
      final: {
        applies: 'Gilt', doesNotApply: 'Gilt nicht', currentLawAria: 'Geltendes Recht',
        rejectedRevisionAria: 'Nicht geltende Revision', fulfilled: 'Erfüllt', reduction: 'Reduktion',
      },
      closing: {
        checkFromOctober: 'Ab 1. Oktober 2026: Fall prüfen', formulaAria: 'Berechnungsformel',
        ownPower: 'Eigenstromleistung', option: 'Option',
        vaudColumns: ['Bis 31. Dezember 2026', 'Ab 1. Januar 2027'],
        zurichJurisdictions: ['Kanton Zürich', 'Stadt Zürich'],
        zurichLaw: ['Heute geltendes Recht', 'Geplant'],
      },
    },
  },
  it: {
    requestPath: '/it/richiesta',
    navigationLabel: 'Contenuto della pagina',
    anchors: {
      costs: 'Costi',
      funding: 'Incentivi',
      permit: 'Autorizzazione',
      solarRequirement: 'Obbligo solare',
      roofRenovation: 'Risanamento del tetto',
      rules: 'Norme',
    },
    source: 'Fonte',
    sources: 'Fonti',
    sourceAria: id => `Fonte ${id}`,
    offer: {
      compareTitle: 'Confrontare offerte basate sugli stessi criteri',
      compareText: 'Il confronto più utile: più offerte per lo stesso progetto.',
      finalTitle: 'Pianificare concretamente il vostro progetto solare',
      finalText: 'Iniziate con una richiesta chiara per il vostro progetto concreto.',
      button: 'Confronta fino a 3 offerte fotovoltaiche',
      microcopy: 'Gratuito · Senza impegno · Imprese specializzate idonee',
    },
    process: {
      eyebrow: 'In tre passaggi',
      title: 'Come funziona il confronto tramite PvPro.ch',
      steps: [
        { title: 'Descrivere il progetto', text: "Fornite brevi informazioni sull'edificio e sul progetto solare." },
        { title: 'Fino a 3 imprese specializzate idonee', text: 'Verifichiamo la richiesta e la inoltriamo alle imprese più adatte.' },
        { title: 'Confrontare le offerte', text: 'Confrontate con calma prestazioni, impianto e prezzo.' },
      ],
    },
    faqTitle: 'Domande frequenti',
    sourcesTitle: 'Fonti e aggiornamento',
    dates: {
      final: 'Aggiornamento: 21 settembre 2026',
      dossier: 'Aggiornamento: 15 settembre 2026',
      standard: 'Aggiornamento: settembre 2026',
    },
    officialSource: 'Fonte ufficiale',
    hero: {
      eyebrow: 'Informazioni cantonali · Aggiornamento settembre 2026',
      keyFactsAria: canton => `${canton}: dati principali`,
      visual: {
        solarRequirement: "Verifica dell'obbligo solare", fundingChange: 'Incentivi in evoluzione',
        advice: 'Consulenza prima della decisione', propertyLocation: "Dove si trova l'immobile?",
        newSince2026: 'Novità dal 2026', fundingStatus: 'Stato degli incentivi',
        twoFundingPaths: 'Due percorsi di incentivazione', inclinationCheck: "Verifica dell'inclinazione",
        solarRelevance: 'Quando il solare diventa rilevante', newBuildCheck: 'Verifica nuova costruzione',
      },
      dossierLabels: {
        uri: 'Il cambiamento del 1° ottobre', waadt: 'Il 2026 e le prospettive per il 2027',
        wallis: 'Nuova costruzione, risanamento del tetto e tetti di grandi dimensioni', zug: 'Elettricità propria o tassa sostitutiva',
        zurich: 'Distinguere Cantone e città', schwyz: 'Catasto solare ed elettricità propria',
        solothurn: 'Cosa vale davvero nel 2026', 'st-gallen': 'Quattro modi per adempiere',
        tessin: 'Comune, Pronovo e FER', thurgau: 'Elettricità propria o efficienza',
        luzern: 'Verificare il progetto edilizio', neuenburg: 'Batteria e incentivi',
        nidwalden: "Pianificare l'elettricità propria", obwalden: "Incentivare l'elettricità invernale",
        default: 'Inquadrare le nuove norme',
      },
      next: {
        newBuildPlanned: 'È prevista una nuova costruzione?', horizontalAngle: "75° rispetto all'orizzontale",
        notCombinable: 'Non cumulabili.',
        fundingNotice: "Aggiornamento: 15 settembre 2026. I budget degli incentivi possono cambiare: verificare la situazione attuale prima dell'incarico.",
      },
    },
    module: {
      step: 'Passaggio', important: 'Importante',
      roofNoticeTitle: "Una notifica non equivale a un obbligo d'installazione.",
      roofNoticeText: "L'obbligo di notifica in caso di risanamento completo del tetto documenta l'idoneità solare. L'eventuale obbligo di costruire un impianto solare dipende dalle norme applicabili.",
      yes: 'Sì', no: 'No', next: 'Avanti', trigger: 'CASO',
      noTriggerTitle: 'Nessuna di queste situazioni?',
      noTriggerText: 'Queste tre norme non determinano automaticamente un obbligo. Devono essere verificate anche le altre prescrizioni e gli interessi di tutela.',
      inclinationAria: 'Diagramma semplificato di una superficie fotovoltaica ripida con inclinazione di 75 gradi',
      defaultColumns: ['Elettricità invernale', 'Potenziale della superficie'],
      selectorLegend: "Come è progettato l'impianto?", checkFundingPath: 'Verificare il percorso di incentivazione',
      status: 'Stato',
      fundingNotice: "Aggiornamento: 15 settembre 2026. I budget degli incentivi possono cambiare: verificare la situazione attuale prima dell'incarico.",
      dossier: {
        checkNext: 'Verificare quindi', angleTitle: 'Inclinazione da 75 a 90 gradi',
        angleDescription: "Un impianto solare è raffigurato con una forte inclinazione sopra una linea di base orizzontale. L'arco giallo indica l'intervallo da 75 a 90 gradi.",
        horizontal: 'Orizzontale', angleCaption: 'Fascia incentivata: impianto ripido con inclinazione da 75° a 90°',
        sequenceAria: 'Procedura', sequence: ['Domanda', 'Conferma di ricezione', 'Costruzione', 'Conclusione'],
        transition: 'Transizione', from2026: 'Dal 2026',
      },
      final: {
        applies: 'Si applica', doesNotApply: 'Non si applica', currentLawAria: 'Diritto vigente',
        rejectedRevisionAria: 'Revisione non vigente', fulfilled: 'Adempiuto', reduction: 'Riduzione',
      },
      closing: {
        checkFromOctober: 'Dal 1° ottobre 2026: verificare il caso', formulaAria: 'Formula di calcolo',
        ownPower: 'Potenza per elettricità propria', option: 'Opzione',
        vaudColumns: ['Fino al 31 dicembre 2026', 'Dal 1° gennaio 2027'],
        zurichJurisdictions: ['Cantone di Zurigo', 'Città di Zurigo'],
        zurichLaw: ['Diritto vigente oggi', 'Previsto'],
      },
    },
  },
  fr: {
    requestPath: '/fr/demande',
    navigationLabel: 'Contenu de cette page',
    anchors: {
      costs: 'Coûts',
      funding: 'Aides',
      permit: 'Autorisation',
      solarRequirement: 'Obligation solaire',
      roofRenovation: 'Rénovation de la toiture',
      rules: 'Règles',
    },
    source: 'Source',
    sources: 'Sources',
    sourceAria: id => `Source ${id}`,
    offer: {
      compareTitle: 'Comparer des offres sur une même base',
      compareText: 'La comparaison la plus pertinente : plusieurs offres pour un même projet.',
      finalTitle: 'Planifier concrètement votre projet solaire',
      finalText: 'Commencez par une demande claire pour votre projet concret.',
      button: "Comparer jusqu'à 3 offres solaires",
      microcopy: 'Gratuit · Sans engagement · Entreprises spécialisées adaptées',
    },
    process: {
      eyebrow: 'En trois étapes',
      title: 'Comment fonctionne la comparaison via PvPro.ch',
      steps: [
        { title: 'Décrire le projet', text: 'Indiquez brièvement les caractéristiques du bâtiment et du projet solaire.' },
        { title: "Jusqu'à 3 entreprises spécialisées adaptées", text: 'Nous vérifions votre demande et la transmettons aux entreprises appropriées.' },
        { title: 'Comparer les offres', text: "Comparez tranquillement les prestations, l'installation et le prix." },
      ],
    },
    faqTitle: 'Questions fréquentes',
    sourcesTitle: 'Sources et mise à jour',
    dates: {
      final: 'Mise à jour : 21 septembre 2026',
      dossier: 'Mise à jour : 15 septembre 2026',
      standard: 'Mise à jour : septembre 2026',
    },
    officialSource: 'Source officielle',
    hero: {
      eyebrow: 'Informations cantonales · Mise à jour septembre 2026',
      keyFactsAria: canton => `${canton} : chiffres clés`,
      visual: {
        solarRequirement: "Vérification de l'obligation solaire", fundingChange: 'Aides en évolution',
        advice: 'Conseil avant la décision', propertyLocation: 'Où se trouve votre bien ?',
        newSince2026: 'Nouveau depuis 2026', fundingStatus: 'État des aides',
        twoFundingPaths: "Deux voies d'encouragement", inclinationCheck: "Vérification de l'inclinaison",
        solarRelevance: 'Quand le solaire devient pertinent', newBuildCheck: 'Vérification nouvelle construction',
      },
      dossierLabels: {
        uri: 'Le changement du 1er octobre', waadt: '2026 et les perspectives pour 2027',
        wallis: 'Construction neuve, rénovation de toiture et grande toiture', zug: 'Électricité propre ou taxe de remplacement',
        zurich: 'Distinguer le canton et la ville', schwyz: 'Cadastre solaire et électricité propre',
        solothurn: "Ce qui s'applique réellement en 2026", 'st-gallen': 'Quatre voies de mise en conformité',
        tessin: 'Commune, Pronovo et FER', thurgau: 'Électricité propre ou efficacité',
        luzern: 'Vérifier le projet de construction', neuenburg: 'Batterie et aides',
        nidwalden: "Planifier l'électricité propre", obwalden: "Encourager l'électricité hivernale",
        default: 'Comprendre les nouvelles règles',
      },
      next: {
        newBuildPlanned: 'Une construction neuve est-elle prévue ?', horizontalAngle: "75° par rapport à l'horizontale",
        notCombinable: 'Non cumulables.',
        fundingNotice: "Mise à jour : 15 septembre 2026. Les budgets d'aide peuvent changer ; vérifiez la situation actuelle avant de passer commande.",
      },
    },
    module: {
      step: 'Étape', important: 'Important',
      roofNoticeTitle: "Une annonce ne constitue pas une obligation d'installation.",
      roofNoticeText: "L'obligation d'annonce lors d'une rénovation complète de la toiture documente l'aptitude solaire. L'obligation éventuelle de construire une installation solaire dépend des règles applicables.",
      yes: 'Oui', no: 'Non', next: 'Suivant', trigger: 'CAS',
      noTriggerTitle: 'Aucune de ces situations ?',
      noTriggerText: "Ces trois règles n'entraînent pas automatiquement une obligation. Les autres prescriptions et intérêts de protection doivent aussi être vérifiés.",
      inclinationAria: "Schéma simplifié d'une surface photovoltaïque inclinée à 75 degrés",
      defaultColumns: ['Électricité hivernale', 'Potentiel de surface'],
      selectorLegend: "Comment mon installation est-elle prévue ?", checkFundingPath: "Vérifier la voie d'encouragement",
      status: 'État',
      fundingNotice: "Mise à jour : 15 septembre 2026. Les budgets d'aide peuvent changer ; vérifiez la situation actuelle avant de passer commande.",
      dossier: {
        checkNext: 'Vérifier ensuite', angleTitle: "Angle d'inclinaison de 75 à 90 degrés",
        angleDescription: "Une installation solaire est représentée avec une forte inclinaison au-dessus d'une ligne de base horizontale. L'arc jaune indique la plage de 75 à 90 degrés.",
        horizontal: 'Horizontale', angleCaption: 'Plage soutenue : installation fortement inclinée de 75° à 90°',
        sequenceAria: 'Déroulement', sequence: ['Demande', 'Accusé de réception', 'Construction', 'Clôture'],
        transition: 'Transition', from2026: 'Dès 2026',
      },
      final: {
        applies: "S'applique", doesNotApply: "Ne s'applique pas", currentLawAria: 'Droit en vigueur',
        rejectedRevisionAria: 'Révision non applicable', fulfilled: 'Conforme', reduction: 'Réduction',
      },
      closing: {
        checkFromOctober: 'Dès le 1er octobre 2026 : vérifier le cas', formulaAria: 'Formule de calcul',
        ownPower: "Puissance d'électricité propre", option: 'Option',
        vaudColumns: ["Jusqu'au 31 décembre 2026", 'Dès le 1er janvier 2027'],
        zurichJurisdictions: ['Canton de Zurich', 'Ville de Zurich'],
        zurichLaw: ["Droit aujourd'hui en vigueur", 'Prévu'],
      },
    },
  },
  en: {
    requestPath: '/en/request',
    navigationLabel: 'Contents of this page',
    anchors: {
      costs: 'Costs',
      funding: 'Funding',
      permit: 'Permit',
      solarRequirement: 'Solar requirement',
      roofRenovation: 'Roof renovation',
      rules: 'Rules',
    },
    source: 'Source',
    sources: 'Sources',
    sourceAria: id => `Source ${id}`,
    offer: {
      compareTitle: 'Compare quotes on the same basis',
      compareText: 'The most useful comparison: several quotes for the same project.',
      finalTitle: 'Plan your solar project in concrete terms',
      finalText: 'Start with a clear request for your specific project.',
      button: 'Compare up to 3 solar quotes',
      microcopy: 'Free · No obligation · Suitable specialist companies',
    },
    process: {
      eyebrow: 'In three steps',
      title: 'How the comparison via PvPro.ch works',
      steps: [
        { title: 'Describe your project', text: 'Provide brief details about the building and solar project.' },
        { title: 'Up to 3 suitable specialist companies', text: 'We review your request and forward it to suitable companies.' },
        { title: 'Compare quotes', text: 'Take your time comparing the work, system and price.' },
      ],
    },
    faqTitle: 'Frequently asked questions',
    sourcesTitle: 'Sources and last update',
    dates: {
      final: 'Last updated: 21 September 2026',
      dossier: 'Last updated: 15 September 2026',
      standard: 'Last updated: September 2026',
    },
    officialSource: 'Official source',
    hero: {
      eyebrow: 'Cantonal information · Last updated September 2026',
      keyFactsAria: canton => `${canton}: key figures`,
      visual: {
        solarRequirement: 'Solar requirement check', fundingChange: 'Funding in transition',
        advice: 'Advice before deciding', propertyLocation: 'Where is your property?',
        newSince2026: 'New since 2026', fundingStatus: 'Funding status',
        twoFundingPaths: 'Two funding paths', inclinationCheck: 'Inclination check',
        solarRelevance: 'When solar becomes relevant', newBuildCheck: 'New-build check',
      },
      dossierLabels: {
        uri: 'The change on 1 October', waadt: '2026 and the outlook for 2027',
        wallis: 'New builds, roof renovation and large roofs', zug: 'Own electricity or replacement levy',
        zurich: 'Distinguishing canton and city', schwyz: 'Solar cadastre and own electricity',
        solothurn: 'What actually applies in 2026', 'st-gallen': 'Four ways to comply',
        tessin: 'Municipality, Pronovo and FER', thurgau: 'Own electricity or efficiency',
        luzern: 'Check the construction project', neuenburg: 'Battery and funding',
        nidwalden: 'Plan own electricity', obwalden: 'Support winter electricity',
        default: 'Understand the new rules',
      },
      next: {
        newBuildPlanned: 'Planning a new build?', horizontalAngle: '75° from horizontal',
        notCombinable: 'Cannot be combined.',
        fundingNotice: 'Last updated: 15 September 2026. Funding budgets may change; check the current position before commissioning work.',
      },
    },
    module: {
      step: 'Step', important: 'Important',
      roofNoticeTitle: 'A notification is not an installation requirement.',
      roofNoticeText: 'The notification requirement for a comprehensive roof renovation records its solar suitability. Whether a solar system must be built depends on the applicable rules.',
      yes: 'Yes', no: 'No', next: 'Next', trigger: 'CASE',
      noTriggerTitle: 'None of these situations?',
      noTriggerText: 'These three rules do not automatically create a requirement. Other regulations and conservation interests must also be checked.',
      inclinationAria: 'Simplified diagram of a steep photovoltaic surface at an inclination of 75 degrees',
      defaultColumns: ['Winter electricity', 'Surface potential'],
      selectorLegend: 'How is my system planned?', checkFundingPath: 'Check funding path',
      status: 'Status',
      fundingNotice: 'Last updated: 15 September 2026. Funding budgets may change; check the current position before commissioning work.',
      dossier: {
        checkNext: 'Then check', angleTitle: 'Inclination angle from 75 to 90 degrees',
        angleDescription: 'A solar system is shown at a steep angle above a horizontal baseline. The yellow arc marks the range from 75 to 90 degrees.',
        horizontal: 'Horizontal', angleCaption: 'Funding range: steep system with an inclination of 75° to 90°',
        sequenceAria: 'Process', sequence: ['Application', 'Confirmation of receipt', 'Construction', 'Completion'],
        transition: 'Transition', from2026: 'From 2026',
      },
      final: {
        applies: 'Applies', doesNotApply: 'Does not apply', currentLawAria: 'Current law',
        rejectedRevisionAria: 'Revision not in force', fulfilled: 'Compliant', reduction: 'Reduction',
      },
      closing: {
        checkFromOctober: 'From 1 October 2026: check the case', formulaAria: 'Calculation formula',
        ownPower: 'Own-electricity capacity', option: 'Option',
        vaudColumns: ['Until 31 December 2026', 'From 1 January 2027'],
        zurichJurisdictions: ['Canton of Zurich', 'City of Zurich'],
        zurichLaw: ['Law currently in force', 'Planned'],
      },
    },
  },
};

export function cantonGuideRequestHref(
  lang: CantonGuideLanguage,
  guide: { id: string; path: string },
): string {
  const query = new URLSearchParams({ canton: guide.id, origin: guide.path });
  return `${cantonGuideUi[lang].requestPath}?${query.toString()}`;
}