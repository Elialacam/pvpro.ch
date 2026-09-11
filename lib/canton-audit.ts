import type { CantonLocale } from '@/lib/cantons';

export type AuditJurisdiction = 'federal' | 'canton' | 'municipality' | 'utility';
export type AuditAmountType =
  | 'fixed'
  | 'per_kWp'
  | 'per_kWh'
  | 'per_m2'
  | 'percentage'
  | 'calculated'
  | 'none';
export type AuditFederalRelation =
  | 'baseline'
  | 'additive'
  | 'inclusive'
  | 'alternative'
  | 'unrelated'
  | 'unknown';
export type AuditTiming =
  | 'before_work'
  | 'after_commissioning'
  | 'before_or_after'
  | 'ongoing'
  | 'not_applicable';
export type AuditRecordKind = 'incentive' | 'rule' | 'context';

export type LocalizedAuditText = Record<CantonLocale, string>;

/**
 * Source-backed metadata for one financial, regulatory or procedural statement.
 *
 * The jurisdiction fields are deliberately flat: a municipality or utility
 * record must not be mistaken for a canton-level programme.
 */
export interface CantonAuditRecord {
  kind: AuditRecordKind;
  jurisdiction: AuditJurisdiction;
  jurisdiction_name: string;
  name: string;
  amount_type: AuditAmountType;
  amount?: number | string;
  effective_from: string;
  effective_to?: string;
  federal_relation: AuditFederalRelation;
  eligibility: LocalizedAuditText;
  timing: LocalizedAuditText;
  amount_label: LocalizedAuditText;
  source_url: string;
  source_checked_at: string;
  future?: boolean;
}

export interface CantonAuditContent {
  heroHeadline: string;
  heroSubheadline: string;
  heroDescription: string;
  whySolarTitle: string;
  whySolarIntro: string;
  whySolarReasons: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export interface CantonAuditPage {
  cantonId: string;
  content: CantonAuditContent;
  records: CantonAuditRecord[];
  localizedContent?: Partial<Record<CantonLocale, CantonAuditContent>>;
}

const CHECKED = '2026-09-11';
const PRONOVO = 'https://pronovo.ch/';
const localized = (de: string, fr: string, it: string, en: string): LocalizedAuditText => ({
  de,
  fr,
  it,
  en,
});

const source = (
  kind: AuditRecordKind,
  jurisdiction: AuditJurisdiction,
  jurisdiction_name: string,
  name: string,
  amount_type: AuditAmountType,
  amount: number | string | undefined,
  effective_from: string,
  federal_relation: AuditFederalRelation,
  eligibility: LocalizedAuditText,
  timing: LocalizedAuditText,
  amount_label: LocalizedAuditText,
  source_url: string,
  options: Pick<CantonAuditRecord, 'effective_to' | 'future'> = {},
): CantonAuditRecord => ({
  kind,
  jurisdiction,
  jurisdiction_name,
  name,
  amount_type,
  ...(amount === undefined ? {} : { amount }),
  effective_from,
  federal_relation,
  eligibility,
  timing,
  amount_label,
  source_url,
  source_checked_at: CHECKED,
  ...options,
});

const federalEiv = (eligibility: LocalizedAuditText, timing: LocalizedAuditText): CantonAuditRecord =>
  source(
    'incentive',
    'federal',
    'Confederation / Pronovo',
    'Einmalvergütung (EIV)',
    'calculated',
    undefined,
    '2026-01-01',
    'baseline',
    eligibility,
    timing,
    localized(
      'Individuell gemäss aktuellem Pronovo-Berechnungsmodell; keine fixe Prozentquote.',
      'Calcul individuel selon le modèle Pronovo en vigueur ; aucun pourcentage fixe.',
      'Calcolo individuale secondo il modello Pronovo vigente; nessuna percentuale fissa.',
      'Calculated individually under the current Pronovo model; no fixed percentage.',
    ),
    PRONOVO,
  );

const ag: CantonAuditPage = {
  cantonId: 'aargau',
  content: {
    heroHeadline: 'Solaranlage im Aargau',
    heroSubheadline: 'Förderung und Bauregeln sauber unterscheiden',
    heroDescription: 'Für eine normale Photovoltaikanlage ist im Aargau vor allem die Einmalvergütung des Bundes über Pronovo relevant. Das kantonale Beratungsangebot und die Regeln für grössere Neubauten sind separat dokumentiert.',
    whySolarTitle: 'Was im Aargau tatsächlich zählt',
    whySolarIntro: 'Die Voraussetzungen hängen vom Gebäude, vom Vorhaben und vom zuständigen Programm ab. Eine pauschale kantonale PV- oder Speicherquote ist für 2026 nicht verifiziert.',
    whySolarReasons: [
      {
        title: 'Bundesbeitrag über Pronovo',
        description: 'Die EIV wird von Pronovo im Auftrag des Bundes abgewickelt und projektbezogen berechnet. Gemeinden und Energieversorger können eigene Programme anbieten; diese müssen einzeln geprüft werden.',
      },
      {
        title: 'Eigenstrom-Beratung',
        description: 'Die Grobberatung Eigenstrom behandelt Photovoltaik, Eigenverbrauch, Speicher, Elektromobilität und Stromverbrauch. 2026 beträgt der Kantonsbeitrag CHF 350; der Eigenanteil beginnt bei CHF 150.',
      },
      {
        title: 'Solarpflicht bei grösseren Neubauten',
        description: 'Bei neuen Gebäuden mit mehr als 300 m² anrechenbarer Gebäudefläche verlangt die Energieverordnung eine Photovoltaik- oder Solarthermieanlage mit grundsätzlich mindestens 20 % relevanter Fläche.',
      },
    ],
    faqs: [
      {
        question: 'Gibt es im Aargau einen allgemeinen kantonalen PV-Zuschuss?',
        answer: 'Für normale PV-Anlagen ist vor allem die Einmalvergütung des Bundes über Pronovo belegt. Zusätzliche Angebote von Gemeinden oder Energieversorgern sind separat zu prüfen; eine allgemeine kantonale PV- und Speicherförderung ist hier nicht verifiziert.',
      },
      {
        question: 'Was kostet die Eigenstrom-Beratung?',
        answer: 'Im Förderprogramm 2026 beträgt der kantonale Beitrag CHF 350. Der Eigenanteil der Kundschaft beginnt bei CHF 150. Die Beratung umfasst unter anderem PV, Eigenverbrauch, Speicher und Elektromobilität.',
      },
      {
        question: 'Wann gilt im Aargau eine Pflicht zur Solarenergienutzung?',
        answer: 'Bei neuen Gebäuden mit insgesamt mehr als 300 m² anrechenbarer Gebäudefläche muss grundsätzlich eine Photovoltaik- oder Solarthermieanlage vorgesehen werden. Die relevante Modul- oder Kollektorfläche soll mindestens 20 % betragen; die gesetzlichen Ausnahmen sind zu prüfen.',
      },
      {
        question: 'Wann muss ein Solarprojekt im Aargau gemeldet werden?',
        answer: 'Seit 2026 können bestimmte Fassadenanlagen das Meldeverfahren nutzen, wenn die gesetzlichen Voraussetzungen erfüllt sind. Schutzobjekte und sensible Umgebungen können weiterhin eine Bewilligung erfordern.',
      },
    ],
  },
  records: [
    federalEiv(
      localized(
        'PV-Anlage nach den jeweils geltenden EIV-Voraussetzungen; Betrag hängt unter anderem von Datum, Leistung, Anlagentyp und Boni ab.',
        'Installation PV selon les conditions RU en vigueur ; le montant dépend notamment de la date, de la puissance, du type d’installation et des bonus.',
        'Impianto FV secondo i requisiti RU vigenti; l’importo dipende tra l’altro da data, potenza, tipo di impianto e bonus.',
        'PV system meeting the current EIV requirements; the amount depends on date, output, system type and applicable bonuses.',
      ),
      localized(
        'Die Auszahlung erfolgt nach den geltenden Pronovo-Schritten; prüfen Sie das Verfahren vor Auftragserteilung.',
        'Le versement suit les étapes Pronovo en vigueur ; vérifiez la procédure avant de commander les travaux.',
        'Il pagamento segue la procedura Pronovo vigente; verificare la procedura prima di incaricare i lavori.',
        'Payment follows the current Pronovo process; check the procedure before commissioning work.',
      ),
    ),
    source(
      'incentive',
      'canton',
      'Kanton Aargau',
      'Grobberatung Eigenstrom',
      'fixed',
      '350 CHF kantonaler Beitrag; Eigenanteil ab 150 CHF',
      '2026-01-01',
      'unrelated',
      localized(
        'Beratung zu PV, Eigenverbrauch, Speicher, Elektromobilität und Stromverbrauch.',
        'Conseil sur le PV, l’autoconsommation, le stockage, la mobilité électrique et la consommation.',
        'Consulenza su FV, autoconsumo, accumulo, mobilità elettrica e consumi.',
        'Advice on PV, self-consumption, storage, electric mobility and electricity use.',
      ),
      localized(
        'Vor einer Investitionsentscheidung; konkrete Anmeldung beim kantonalen Beratungsangebot prüfen.',
        'Avant une décision d’investissement ; vérifier l’inscription auprès du service cantonal.',
        'Prima della decisione d’investimento; verificare l’iscrizione al servizio cantonale.',
        'Before an investment decision; check registration with the cantonal advice service.',
      ),
      localized(
        'Kantonsbeitrag CHF 350; Kundenbeteiligung ab CHF 150.',
        'Contribution cantonale de CHF 350 ; participation du client dès CHF 150.',
        'Contributo cantonale di CHF 350; partecipazione del cliente da CHF 150.',
        'Cantonal contribution CHF 350; customer contribution from CHF 150.',
      ),
      'https://www.ag.ch/media/kanton-aargau/bvu/energie/foerderungen/beratungen-foerderprogramm.pdf',
    ),
    source(
      'rule',
      'canton',
      'Kanton Aargau',
      'Solarpflicht nach Energieverordnung §26a',
      'percentage',
      '20',
      '2026-01-01',
      'unrelated',
      localized(
        'Neue Gebäude mit mehr als 300 m² anrechenbarer Gebäudefläche; Ausnahmen der Verordnung beachten.',
        'Nouveaux bâtiments de plus de 300 m² de surface imputable ; tenir compte des exceptions de l’ordonnance.',
        'Nuovi edifici con oltre 300 m² di superficie computabile; rispettare le eccezioni dell’ordinanza.',
        'New buildings with more than 300 m² of chargeable floor area; statutory exceptions apply.',
      ),
      localized(
        'Vor Baubeginn in der Planung und im Bewilligungsverfahren berücksichtigen.',
        'À intégrer à la planification et à la procédure d’autorisation avant les travaux.',
        'Considerare nella progettazione e nella procedura edilizia prima dei lavori.',
        'Include in planning and the building procedure before work starts.',
      ),
      localized(
        'PV oder Solarthermie; relevante Modul- oder Kollektorfläche grundsätzlich mindestens 20 %.',
        'PV ou solaire thermique ; surface de modules ou capteurs en principe d’au moins 20 %.',
        'FV o solare termico; superficie di moduli o collettori in linea di principio almeno del 20%.',
        'PV or solar thermal; relevant module or collector area generally at least 20%.',
      ),
      'https://gesetzessammlungen.ag.ch/app/de/texts_of_law/773.211/versions/3276',
    ),
    source(
      'rule',
      'canton',
      'Kanton Aargau',
      'Meldeverfahren für bestimmte Fassadenanlagen',
      'none',
      undefined,
      '2026-01-01',
      'unrelated',
      localized(
        'Nur Fassadenanlagen, welche die bundesrechtlichen Einordnungsvoraussetzungen erfüllen; Schutzobjekte können abweichen.',
        'Installations en façade remplissant les conditions fédérales de classement ; les objets protégés peuvent être soumis à d’autres règles.',
        'Solo impianti in facciata conformi ai requisiti federali; per gli oggetti protetti possono valere regole diverse.',
        'Facade systems meeting federal classification requirements; protected buildings may follow different rules.',
      ),
      localized(
        'Meldung vor dem Start gemäss zuständiger Gemeinde und Verfahren.',
        'Notification avant le début selon la commune et la procédure compétentes.',
        'Notifica prima dell’inizio secondo il Comune e la procedura competenti.',
        'Notify before starting according to the responsible municipality and procedure.',
      ),
      localized(
        'Verfahrenserleichterung, keine Förderquote.',
        'Simplification of procedure, not a subsidy rate.',
        'Semplificazione procedurale, non un’aliquota d’incentivo.',
        'Procedural simplification, not a subsidy rate.',
      ),
      'https://www.ag.ch/de/themen/recht-justiz?mm=rechtsaenderungen-per-1-januar-2026-c32e26a7-5201-4e01-abe9-adda85a75a3d_de',
    ),
  ],
};

const ar: CantonAuditPage = {
  cantonId: 'appenzell-ausserrhoden',
  content: {
    heroHeadline: 'Solaranlage in Appenzell Ausserrhoden',
    heroSubheadline: 'Ein kantonaler Beitrag zusätzlich zur EIV',
    heroDescription: 'Appenzell Ausserrhoden ist der klare Sonderfall dieser fünf Gebiete: Für geeignete Anlagen gilt 2026 ein kantonaler Beitrag zusätzlich zur definitiven Einmalvergütung des Bundes. Die Antragstellung erfolgt erst nach Inbetriebnahme und rechtskräftiger Pronovo-Verfügung.',
    whySolarTitle: 'Appenzell Ausserrhoden: EIV-Basis und kantonaler Zusatz',
    whySolarIntro: 'Entscheidend sind Inbetriebnahmedatum, Netzanschluss, Mindestleistung und der Ausschluss von HEIV- oder Auktionsanlagen. Die für 2027 angekündigte Systemänderung bleibt getrennt vom aktuellen Regime.',
    whySolarReasons: [
      {
        title: 'Bis zu 50 % der definitiven EIV',
        description: 'Für Anlagen mit Inbetriebnahme ab 1. September 2025 beträgt der kantonale Beitrag maximal 50 % der definitiven EIV des Bundes, höchstens CHF 100’000 pro Vorhaben.',
      },
      {
        title: 'Klare Zugangsvoraussetzungen',
        description: 'Die Anlage muss unter anderem mindestens 2 kWp leisten, ans Netz angeschlossen sein und eine EIV des Bundes erhalten. HEIV-Anlagen ohne Eigenverbrauch sowie Anlagen aus einer PV-Auktion sind ausgeschlossen.',
      },
      {
        title: 'Gesuch erst nach Abschluss',
        description: 'Das kantonale Gesuch wird erst nach der Inbetriebnahme und nach der rechtskräftigen Pronovo-Verfügung zur EIV eingereicht. Das ist nicht die übliche Vor-Baubeginn-Regel.',
      },
    ],
    faqs: [
      {
        question: 'Wie hoch ist der PV-Beitrag in Appenzell Ausserrhoden 2026?',
        answer: 'Für Anlagen mit Inbetriebnahme ab 1. September 2025 beträgt der kantonale Beitrag maximal 50 % der definitiven EIV des Bundes und höchstens CHF 100’000 pro Vorhaben. Es handelt sich nicht um 50 % der Investitionskosten.',
      },
      {
        question: 'Welche Anlagen erhalten den AR-Beitrag?',
        answer: 'Erforderlich sind unter anderem mindestens 2 kWp, ein Netzanschluss und eine EIV des Bundes. HEIV-Anlagen ohne Eigenverbrauch und Anlagen mit Zuschlag aus einer Bundesauktion sind vom aktuellen kantonalen Beitrag ausgeschlossen.',
      },
      {
        question: 'Wann muss das Gesuch in Appenzell Ausserrhoden eingereicht werden?',
        answer: 'Nach der Inbetriebnahme und nachdem die definitive Pronovo-Verfügung zur EIV rechtskräftig geworden ist. Die definitive Verfügung bildet die Berechnungsbasis.',
      },
      {
        question: 'Was ändert sich 2027?',
        answer: 'Das ab 1. Januar 2027 vorgesehene Programm richtet den kantonalen Beitrag stärker auf Winterstrom und die Kombination mit Dämmung aus. Diese künftige Logik ist nicht als aktueller Beitrag für 2026 zu verwenden.',
      },
    ],
  },
  records: [
    source(
      'incentive',
      'canton',
      'Appenzell Ausserrhoden',
      'Kantonaler PV-Beitrag kM-21',
      'percentage',
      50,
      '2025-09-01',
      'additive',
      localized(
        'Netzgekoppelte Anlage ab 2 kWp mit definitiver EIV; HEIV ohne Eigenverbrauch und Auktionsanlagen sind ausgeschlossen. Bei Eigenstromerzeugungspflicht wird die gesetzlich geforderte Mindest-Anlagengrösse nicht zusätzlich vergütet. Drittbeiträge können den Kantonsbeitrag reduzieren; Gemeindebeiträge sind davon ausgenommen. Der Höhenbonus wird nicht erhöht.',
        'Installation raccordée au réseau dès 2 kWp avec RU définitive ; HEIV sans autoconsommation et installations issues d’enchères exclues. La taille minimale légalement imposée pour l’autoproduction ne bénéficie pas du complément. Les aides de tiers peuvent réduire le montant cantonal, sauf les contributions communales. Le bonus d’altitude n’est pas majoré.',
        'Impianto collegato alla rete da almeno 2 kWp con RU definitiva; escluse HEIV senza autoconsumo e aste federali. La dimensione minima imposta dall’obbligo di autoproduzione non riceve il contributo aggiuntivo. Aiuti di terzi possono ridurre il contributo cantonale, esclusi quelli comunali. Il bonus d’altitudine non viene maggiorato.',
        'Grid-connected system of at least 2 kWp with a final EIV; HEIV without self-consumption and auction systems excluded. The legally required minimum system size under self-generation duties receives no cantonal top-up. Third-party support can reduce the cantonal contribution, except municipal grants. The altitude bonus is not increased.',
      ),
      localized(
        'Gesuch nach Inbetriebnahme und nach rechtskräftiger Pronovo-Verfügung; kein Gesuch vor Baubeginn.',
        'Demande après mise en service et décision Pronovo entrée en force ; pas de demande avant les travaux.',
        'Domanda dopo la messa in servizio e la decisione Pronovo definitiva; non prima dei lavori.',
        'Apply after commissioning and the final Pronovo decision; not before construction.',
      ),
      localized(
        'Maximal 50 % der definitiven EIV, höchstens CHF 100’000 pro Vorhaben; nicht 50 % der Investitionskosten.',
        'Au maximum 50 % de la RU définitive, plafonné à CHF 100’000 par projet ; pas 50 % des coûts.',
        'Massimo il 50% della RU definitiva, con tetto di CHF 100’000 per progetto; non il 50% dei costi.',
        'Up to 50% of the final EIV, capped at CHF 100,000 per project; not 50% of investment costs.',
      ),
      'https://ar.ch/verwaltung/departement-bau-und-volkswirtschaft/amt-fuer-umwelt/energie/foerderung/kantonale-foerderung/km-21-photovoltaikanlage-1-1/',
      { effective_to: '2026-12-31' },
    ),
    source(
      'rule',
      'canton',
      'Appenzell Ausserrhoden',
      'Ausrichtung des Förderprogramms ab 2027',
      'per_kWp',
      300,
      '2027-01-01',
      'additive',
      localized(
        'Künftiges Programm für geeignete Winterstrom- und Dämmkombinationen; nicht der allgemeine 2026-Beitrag.',
        'Programme futur pour les installations hivernales et les combinaisons avec isolation ; distinct de l’aide 2026.',
        'Programma futuro per impianti ottimizzati per l’inverno e combinazioni con isolamento; distinto dal contributo 2026.',
        'Future programme for winter-output and insulation combinations; separate from the 2026 contribution.',
      ),
      localized(
        'Ab 2027 soll das Gesuch vor Beginn der Arbeiten eingereicht werden.',
        'Dès 2027, la demande devrait être déposée avant le début des travaux.',
        'Dal 2027 la domanda dovrebbe essere presentata prima dell’inizio dei lavori.',
        'From 2027, the application is expected before work starts.',
      ),
      localized(
        'Voraussichtlich CHF 300/kW Zusatz zum nationalen Neigungsbonus bei mindestens 75°; Programmwechsel separat prüfen.',
        'CHF 300/kW prévu en complément du bonus national d’inclinaison à partir de 75° ; vérifier le nouveau programme.',
        'Previsti CHF 300/kW in aggiunta al bonus nazionale d’inclinazione da 75°; verificare il nuovo programma.',
        'Expected CHF 300/kW addition to the national inclination bonus at 75° or more; verify the new programme.',
      ),
      'https://ar.ch/verwaltung/departement-bau-und-volkswirtschaft/amt-fuer-umwelt/news-aus-dem-amt/detail/news/foerderprogramm-energie-soll-ab-1-januar-2027-angepasst-werden/',
      { future: true },
    ),
    source(
      'context',
      'federal',
      'Confederation / Pronovo',
      'Höhenbonus',
      'none',
      undefined,
      '2025-09-01',
      'unrelated',
      localized(
        'AR erhöht den nationalen Höhenbonus im aktuellen Regime nicht; allfällige Bundesboni bleiben separat.',
        'AR n’augmente pas le bonus fédéral d’altitude dans le régime actuel ; les éventuels bonus fédéraux restent séparés.',
        'Nel regime attuale AR non aumenta il bonus federale d’altitudine; eventuali bonus federali restano separati.',
        'AR does not increase the federal height bonus under the current regime; any federal bonus remains separate.',
      ),
      localized(
        'Zusammen mit dem Bundesantrag und der definitiven Verfügung prüfen.',
        'À vérifier avec la demande fédérale et la décision définitive.',
        'Verificare insieme alla domanda federale e alla decisione definitiva.',
        'Check alongside the federal application and final decision.',
      ),
      localized(
        'Keine zusätzliche kantonale Erhöhung im aktuellen Regime.',
        'Pas d’augmentation cantonale supplémentaire dans le régime actuel.',
        'Nessun aumento cantonale aggiuntivo nel regime attuale.',
        'No additional cantonal uplift under the current regime.',
      ),
      'https://ar.ch/verwaltung/departement-bau-und-volkswirtschaft/amt-fuer-umwelt/energie/foerderung/kantonale-foerderung/',
    ),
  ],
};

const ai: CantonAuditPage = {
  cantonId: 'appenzell-innerrhoden',
  content: {
    heroHeadline: 'Solaranlage in Appenzell Innerrhoden',
    heroSubheadline: 'Bundesförderung und Solarberatung getrennt betrachten',
    heroDescription: 'In Appenzell Innerrhoden ist für die Photovoltaikanlage selbst die Einmalvergütung des Bundes über Pronovo belegt. Das kantonale Angebot ist eine Solarenergie-Impulsberatung, nicht ein pauschaler PV-Zuschuss.',
    whySolarTitle: 'Appenzell Innerrhoden: Beratung statt pauschaler PV-Quote',
    whySolarIntro: 'Die kantonalen Regeln verbinden eine Beratung für Solarenergie mit Vorgaben für neue Gebäude. Lokale Rückliefertarife gehören zum jeweiligen Versorger und nicht zum Kanton.',
    whySolarReasons: [
      {
        title: 'EIV des Bundes',
        description: 'Pronovo wickelt die Einmalvergütung für die PV-Anlage ab. Ein allgemeiner kantonaler PV-Top-up wie in Appenzell Ausserrhoden ist für AI nicht verifiziert.',
      },
      {
        title: 'Solarberatung für CHF 100',
        description: 'Die Solarenergie-Impulsberatung wird vom Verein Energie AR/AI durchgeführt. Die Kundenbeteiligung beträgt CHF 100; zusammen mit der gleichzeitig durchgeführten Heizberatung ist die Solarberatung kostenlos.',
      },
      {
        title: 'Neue Gebäude erzeugen Strom',
        description: 'Die energetischen Regeln von AI verlangen bei neuen Gebäuden einen Anteil eigener Stromproduktion. Photovoltaik ist eine mögliche Umsetzung; die konkrete Einordnung ist im Bauverfahren zu klären.',
      },
    ],
    faqs: [
      {
        question: 'Gibt es in Appenzell Innerrhoden einen kantonalen PV-Zuschuss?',
        answer: 'Für die PV-Anlage selbst ist die EIV des Bundes über Pronovo belegt. Ein allgemeiner kantonaler PV-Top-up wie in Appenzell Ausserrhoden wurde für AI nicht verifiziert.',
      },
      {
        question: 'Was kostet die Solarenergie-Impulsberatung?',
        answer: 'Die Kundenbeteiligung beträgt CHF 100. Wird sie gleichzeitig mit der Impulsberatung «erneuerbar heizen» durchgeführt, ist die Solarberatung kostenlos.',
      },
      {
        question: 'Was verlangt AI bei neuen Gebäuden?',
        answer: 'Neue Gebäude müssen einen Anteil ihres Strombedarfs selbst erzeugen. Photovoltaik ist eine mögliche Lösung; Details und Ausnahmen richten sich nach den geltenden energetischen Vorschriften.',
      },
      {
        question: 'Wer legt die Rückliefertarife in Appenzell fest?',
        answer: 'Tarife der Feuerschaugemeinde Appenzell sind Versorger- beziehungsweise Gebietstarife und nicht kantonale Förderungen. Die offizielle Produktseite nennt für PV unter 30 kW ein Marktpreis-/Mindestvergütungsbeispiel von 6 Rp./kWh sowie 1,5 Rp./kWh für HKN.',
      },
    ],
  },
  records: [
    federalEiv(
      localized(
        'PV-Anlage nach den jeweils geltenden EIV-Voraussetzungen; Projekt- und Datendetails über Pronovo prüfen.',
        'Installation PV selon les conditions RU en vigueur ; vérifier les détails du projet et de la date auprès de Pronovo.',
        'Impianto FV secondo i requisiti RU vigenti; verificare dettagli e data del progetto presso Pronovo.',
        'PV system meeting the current EIV requirements; verify project and date details with Pronovo.',
      ),
      localized(
        'Das Bundesverfahren und allfällige Fristen von Pronovo gelten unabhängig von der kantonalen Beratung.',
        'La procédure fédérale et les délais Pronovo s’appliquent indépendamment du conseil cantonal.',
        'La procedura federale e le scadenze Pronovo si applicano indipendentemente dalla consulenza cantonale.',
        'The federal procedure and Pronovo deadlines apply independently of cantonal advice.',
      ),
    ),
    source(
      'incentive',
      'canton',
      'Appenzell Innerrhoden',
      'Impulsberatung Solarenergie',
      'fixed',
      100,
      '2020-04-01',
      'unrelated',
      localized(
        'Eigentümerinnen und Eigentümer, die eine Solarberatung nach dem kantonalen Angebot buchen.',
        'Propriétaires qui réservent un conseil solaire selon l’offre cantonale.',
        'Proprietari che prenotano la consulenza solare secondo l’offerta cantonale.',
        'Owners booking solar advice under the cantonal programme.',
      ),
      localized(
        'Vor einer Investitionsentscheidung; Anmeldung beim durchführenden Verein prüfen.',
        'Avant une décision d’investissement ; vérifier l’inscription auprès de l’association.',
        'Prima della decisione d’investimento; verificare l’iscrizione presso l’associazione.',
        'Before an investment decision; check registration with the provider association.',
      ),
      localized(
        'Kundenbeteiligung CHF 100; zusammen mit «erneuerbar heizen» kostenlos.',
        'Participation du client CHF 100 ; gratuite si combinée avec « erneuerbar heizen ».',
        'Partecipazione del cliente CHF 100; gratuita se combinata con «erneuerbar heizen».',
        'Customer contribution CHF 100; free when combined with “erneuerbar heizen”.',
      ),
      'https://www.ai.ch/themen/planen-und-bauen/energie/foerderprogramme/gebaeudesanierung',
    ),
    source(
      'rule',
      'canton',
      'Appenzell Innerrhoden',
      'Eigenstrom bei neuen Gebäuden',
      'none',
      undefined,
      '2020-04-01',
      'unrelated',
      localized(
        'Neue Gebäude müssen einen Anteil des eigenen Strombedarfs erzeugen; PV ist eine mögliche Lösung.',
        'Les nouveaux bâtiments doivent produire une part de leurs besoins électriques ; le PV est une solution possible.',
        'I nuovi edifici devono produrre una parte del proprio fabbisogno elettrico; il FV è una soluzione possibile.',
        'New buildings must produce part of their electricity needs; PV is one possible solution.',
      ),
      localized(
        'In der Planung und im Bauverfahren vor Baubeginn berücksichtigen.',
        'À intégrer à la planification et à la procédure de construction avant les travaux.',
        'Considerare nella progettazione e nella procedura edilizia prima dei lavori.',
        'Include in planning and the building procedure before work starts.',
      ),
      localized(
        'Keine pauschale Förderquote; es handelt sich um eine energetische Vorgabe.',
        'Aucun taux de subvention forfaitaire ; il s’agit d’une règle énergétique.',
        'Nessuna aliquota d’incentivo forfettaria; si tratta di una prescrizione energetica.',
        'No flat subsidy rate; this is an energy requirement.',
      ),
      'https://ai.ch/themen/planen-und-bauen/energie/energievollzug',
    ),
    source(
      'context',
      'utility',
      'Feuerschaugemeinde Appenzell / Energie- und Wasserversorgung',
      'Rücklieferung und HKN',
      'per_kWh',
      '6 Rp./kWh unter 30 kW; HKN 1,5 Rp./kWh',
      '2026-01-01',
      'unrelated',
      localized(
        'Gilt für die erwähnte lokale Versorgung und ist kein kantonales Förderprogramm.',
        'Concerne le fournisseur local mentionné et ne constitue pas un programme cantonal.',
        'Vale per il fornitore locale indicato e non è un programma di incentivi cantonale.',
        'Applies to the named local utility and is not a cantonal subsidy programme.',
      ),
      localized(
        'Tarifario del gestore; prima dell’immissione verificare i valori vigenti.',
        'Tarif du fournisseur ; vérifier les valeurs en vigueur avant l’injection.',
        'Tariffa del gestore; verificare i valori vigenti prima dell’immissione.',
        'Utility tariff; verify current values before exporting power.',
      ),
      localized(
        'Esempio ufficiale: 6 Rp./kWh per impianti sotto 30 kW e 1,5 Rp./kWh per HKN.',
        'Exemple officiel : 6 ct./kWh pour les installations sous 30 kW et 1,5 ct./kWh pour les HKN.',
        'Esempio ufficiale: 6 ct./kWh per impianti sotto 30 kW e 1,5 ct./kWh per HKN.',
        'Official example: 6 Rp./kWh for systems under 30 kW and 1.5 Rp./kWh for HKN.',
      ),
      'https://www.ai.ch/feuerschaugemeinde/stromversorgung/produkte_preise_ele/strompreisvergleich',
    ),
  ],
};

const basel: CantonAuditPage = {
  cantonId: 'basel',
  content: {
    heroHeadline: 'Solaranlage in Basel BS/BL',
    heroSubheadline: 'Basel-Stadt und Basel-Landschaft getrennt prüfen',
    heroDescription: 'Für Photovoltaik ist die Zuständigkeit in Basel entscheidend: Basel-Stadt verweist auf die Bundesförderung von Pronovo, während Basel-Landschaft einen konkreten Bonus für die Kombination von Wärmedämmung und PV kennt.',
    whySolarTitle: 'Basel: zwei Kantone, zwei Förderlogiken',
    whySolarIntro: 'Eine allgemeine PV-Prozentquote lässt sich aus den aktuellen offiziellen Quellen nicht ableiten. Der 40-%-Hinweis von Basel-Stadt betrifft unter anderem thermische Solaranlagen, nicht die PV.',
    whySolarReasons: [
      {
        title: 'Basel-Stadt: PV über Pronovo',
        description: 'Die offizielle BS-Förderseite nennt für Photovoltaikanlagen die Bundesförderung. Der dort sichtbare maximale Anteil von 40 % darf nicht als PV-Förderquote übernommen werden.',
      },
      {
        title: 'Basel-Landschaft: Bonus mit Dämmung',
        description: 'Seit 1. Januar 2026 gibt es zusätzliche Beiträge, wenn eine Wärmedämmung mit einer Photovoltaikanlage kombiniert wird: CHF 40/m² Modulfläche auf dem Dach und CHF 120/m² an der Fassade.',
      },
      {
        title: 'Förderbedingungen vor Auftrag prüfen',
        description: 'BS und BL sind getrennte zuständige Stellen. Prüfen Sie vor Baubeginn, ob die konkrete Dämm- und PV-Kombination die Voraussetzungen erfüllt und welches Gesuch erforderlich ist.',
      },
    ],
    faqs: [
      {
        question: 'Wie wird PV in Basel-Stadt gefördert?',
        answer: 'Basel-Stadt verweist für Photovoltaikanlagen grundsätzlich auf die Bundesförderung von Pronovo. Der kantonale 40-%-Hinweis auf der Solarseite betrifft unter anderem thermische Solaranlagen und ist keine PV-Quote.',
      },
      {
        question: 'Was ist der BL-Bonus für Dämmung und PV?',
        answer: 'Seit 1. Januar 2026 gibt es im Baselbieter Energiepaket einen zusätzlichen Bonus bei der Kombination von Wärmedämmung und Photovoltaik: CHF 40 pro m² Modulfläche auf dem Dach oder CHF 120 pro m² an der Fassade.',
      },
      {
        question: 'Gibt es eine allgemeine Prozentförderung für PV in Basel?',
        answer: 'Eine allgemeine kantonale PV-Prozentquote ist in den aktuellen offiziellen Quellen nicht belegt. BS und BL müssen getrennt betrachtet werden; in BL ist der genannte Bonus an die Dämmung gekoppelt.',
      },
      {
        question: 'Wann sollte ich das Fördergesuch in Basel stellen?',
        answer: 'Die Bedingungen und der Zeitpunkt unterscheiden sich nach BS oder BL und nach Massnahme. Beim BL-Bonus sind die neuen Massnahmen seit Januar 2026 im Energiepaket aufgeführt; prüfen Sie die aktuelle Gesuchslogik vor Arbeitsbeginn.',
      },
    ],
  },
  records: [
    federalEiv(
      localized(
        'PV-Anlage nach den jeweils geltenden EIV-Voraussetzungen; BS und BL führen daraus keine einheitliche kantonale PV-Quote ab.',
        'Installation PV selon les conditions RU en vigueur ; BS et BL n’en déduisent pas un taux cantonal PV uniforme.',
        'Impianto FV secondo i requisiti RU vigenti; BS e BL non ne ricavano un’aliquota cantonale FV uniforme.',
        'PV system meeting current EIV requirements; BS and BL do not turn this into one uniform cantonal PV rate.',
      ),
      localized(
        'Gemäss Bundesverfahren und Pronovo-Fristen; lokale Programme separat prüfen.',
        'Selon la procédure fédérale et les délais Pronovo ; vérifier séparément les programmes locaux.',
        'Secondo procedura federale e scadenze Pronovo; verificare separatamente i programmi locali.',
        'Under the federal process and Pronovo deadlines; check local programmes separately.',
      ),
    ),
    source(
      'context',
      'canton',
      'Basel-Stadt',
      'Förderseite Solaranlagen: PV über den Bund',
      'percentage',
      40,
      '2026-09-09',
      'unrelated',
      localized(
        'Gilt als aktuelle BS-Information für thermische Solaranlagen und weitere Massnahmen; nicht als PV-Förderquote.',
        'Information BS actuelle pour le solaire thermique et d’autres mesures ; pas un taux de subvention PV.',
        'Informazione BS attuale per il solare termico e altre misure; non un’aliquota FV.',
        'Current BS information for thermal solar and other measures; not a PV subsidy rate.',
      ),
      localized(
        'Vor der Antragstellung die Massnahme und Zuständigkeit auf der offiziellen BS-Seite prüfen.',
        'Avant la demande, vérifier la mesure et la compétence sur la page officielle BS.',
        'Prima della domanda verificare misura e competenza sulla pagina ufficiale BS.',
        'Before applying, verify the measure and responsible authority on the official BS page.',
      ),
      localized(
        'Maximal 40 % kann für andere auf der Seite genannte Massnahmen gelten; keine PV-Prozentquote.',
        'Le maximum de 40 % peut concerner d’autres mesures ; aucun taux PV.',
        'Il massimo del 40% può valere per altre misure; nessuna aliquota FV.',
        'The 40% maximum may apply to other listed measures; no PV rate.',
      ),
      'https://www.bs.ch/wsu/aue/abteilung-energie/foerderbeitraege-energie/solaranlagen',
    ),
    source(
      'incentive',
      'canton',
      'Basel-Landschaft',
      'Zusätzlicher Bonus Dämmung + Photovoltaik',
      'per_m2',
      '40 CHF/m² Dach; 120 CHF/m² Fassade',
      '2026-01-01',
      'additive',
      localized(
        'Wärmedämmung muss mit einer Photovoltaikanlage kombiniert werden; Dach- und Fassadenfall unterscheiden.',
        'L’isolation thermique doit être combinée à une installation PV ; distinguer toiture et façade.',
        'L’isolamento termico deve essere combinato con un impianto FV; distinguere tetto e facciata.',
        'Thermal insulation must be combined with PV; roof and facade cases differ.',
      ),
      localized(
        'Gesuch und Bedingungen des Baselbieter Energiepakets vor Beginn der Massnahme prüfen.',
        'Vérifier la demande et les conditions du programme bâlois avant le début des travaux.',
        'Verificare domanda e condizioni del programma basilese prima dell’inizio dei lavori.',
        'Check the application and programme conditions before work begins.',
      ),
      localized(
        'Zusätzlich CHF 40/m² Modulfläche auf dem Dach oder CHF 120/m² Modulfläche an der Fassade; kein allgemeiner PV-Rabatt.',
        'Bonus supplémentaire de CHF 40/m² de modules en toiture ou CHF 120/m² en façade ; pas une remise PV générale.',
        'Bonus aggiuntivo di CHF 40/m² di moduli sul tetto o CHF 120/m² in facciata; non uno sconto FV generale.',
        'Additional CHF 40/m² of roof module area or CHF 120/m² of facade module area; not a general PV discount.',
      ),
      'https://www.baselland.ch/politik-und-behorden/direktionen/bau-und-umweltschutzdirektion/umweltschutz-energie/medienmitteilungen/neue-anreize-im-kantonalen-foerderprogramm',
    ),
  ],
};

const bern: CantonAuditPage = {
  cantonId: 'bern',
  content: {
    heroHeadline: 'Solaranlage im Kanton Bern',
    heroSubheadline: 'Bundesförderung und neue Solarpflicht unterscheiden',
    heroDescription: 'Im Kanton Bern wird Photovoltaik aktuell über die Bundesinstrumente KLEIV und GREIV gefördert. Seit 1. Januar 2026 gelten zusätzlich neue kantonale Vorgaben für Neubauten und Erweiterungen.',
    whySolarTitle: 'Bern: PV-Förderung des Bundes, Regeln des Kantons',
    whySolarIntro: 'Die neuen Berner Vorschriften sind für die Planung wichtiger als eine unbestätigte kantonale PV-Prozentförderung. Eine umfassende Dachsanierung bei bestehenden Gebäuden löst eine Meldepflicht aus, nicht automatisch dieselbe Installationspflicht wie ein Neubau.',
    whySolarReasons: [
      {
        title: 'KLEIV und GREIV des Bundes',
        description: 'Die offizielle Berner Solarenergie-Seite nennt aktuell die kleine EIV unter 100 kW und die grosse EIV von 100 kW bis 50 MW als Förderinstrumente des Bundes.',
      },
      {
        title: 'Neue Gebäude und Erweiterungen',
        description: 'Seit 1. Januar 2026 müssen neue Bauten und Erweiterungen Systeme zur Nutzung der Solarenergie auf mindestens 10 % der massgebenden Grundstücks- beziehungsweise Gebäudefläche vorsehen; geeignete Dachflächen sind weitgehend zu nutzen.',
      },
      {
        title: 'Dachsanierung ist nicht automatisch Installationspflicht',
        description: 'Bei einer umfassenden Dachsanierung eines bestehenden Gebäudes gilt die kantonale Meldepflicht. Das ist rechtlich nicht automatisch die Installationspflicht für Neubauten.',
      },
    ],
    faqs: [
      {
        question: 'Welche PV-Förderung gibt es im Kanton Bern?',
        answer: 'Die offizielle Berner Solarenergie-Seite verweist aktuell auf KLEIV und GREIV des Bundes. Eine allgemeine kantonale PV-Förderung für normale Wohnanlagen ist dort nicht als laufendes Programm ausgewiesen.',
      },
      {
        question: 'Was gilt seit 1. Januar 2026 bei Neubauten und Erweiterungen?',
        answer: 'Neue Bauten und Erweiterungen müssen Systeme zur Solarenergienutzung auf mindestens 10 % der massgebenden Fläche vorsehen. Geeignete Dachflächen sollen möglichst genutzt werden; die kantonalen Ausnahmen und Sonderregeln sind zu prüfen.',
      },
      {
        question: 'Muss bei einer vollständigen Dachsanierung PV installiert werden?',
        answer: 'Bei bestehenden Gebäuden löst eine umfassende Dachsanierung eine Meldepflicht aus. Das ist nicht automatisch gleichbedeutend mit der Installationspflicht, die für bestimmte Neubauten und Erweiterungen gilt.',
      },
      {
        question: 'Wie früh muss eine bewilligungsfreie Anlage gemeldet werden?',
        answer: 'Die Meldung an die Baupolizeibehörde muss bei den entsprechenden bewilligungsfreien Anlagen spätestens sieben Arbeitstage vor Beginn der Arbeiten erfolgen. Bei Schutzobjekten können zusätzliche Bewilligungen erforderlich sein.',
      },
    ],
  },
  records: [
    federalEiv(
      localized(
        'KLEIV für Anlagen unter 100 kW beziehungsweise GREIV ab 100 kW bis 50 MW nach den geltenden Bundesvoraussetzungen.',
        'RU petite pour les installations sous 100 kW ou RU grande dès 100 kW jusqu’à 50 MW selon les conditions fédérales.',
        'RU piccola per impianti sotto 100 kW oppure RU grande da 100 kW fino a 50 MW secondo i requisiti federali.',
        'KLEIV for systems below 100 kW or GREIV from 100 kW to 50 MW under current federal conditions.',
      ),
      localized(
        'Pronovo-Verfahren und Fristen des Bundes; kantonale Bauvorschriften zusätzlich prüfen.',
        'Procédure et délais Pronovo de la Confédération ; vérifier en plus les règles cantonales de construction.',
        'Procedura e scadenze Pronovo federali; verificare inoltre le regole edilizie cantonali.',
        'Federal Pronovo process and deadlines; also check cantonal building rules.',
      ),
    ),
    source(
      'rule',
      'canton',
      'Kanton Bern',
      'Solarenergienutzung bei Neubauten und Erweiterungen',
      'percentage',
      10,
      '2026-01-01',
      'unrelated',
      localized(
        'Neue Bauten und Erweiterungen nach den seit 2026 geltenden Energiegesetz-Regeln; Sonderregeln für kleine Wohnbauten prüfen.',
        'Nouvelles constructions et extensions selon les règles énergétiques en vigueur depuis 2026 ; vérifier les règles spéciales pour petits logements.',
        'Nuove costruzioni e ampliamenti secondo le regole energetiche vigenti dal 2026; verificare le regole speciali per piccoli edifici residenziali.',
        'New buildings and extensions under the energy rules in force since 2026; check special rules for small homes.',
      ),
      localized(
        'Vor Baubeginn in Projektierung und Bauverfahren berücksichtigen.',
        'À intégrer à la conception et à la procédure de construction avant les travaux.',
        'Considerare nella progettazione e nella procedura edilizia prima dei lavori.',
        'Include in design and building procedure before work starts.',
      ),
      localized(
        'Solarenergienutzung auf mindestens 10 % der massgebenden Fläche; geeignete Dächer grundsätzlich nutzen.',
        'Utilisation de l’énergie solaire sur au moins 10 % de la surface déterminante ; utiliser en principe les toitures adaptées.',
        'Uso dell’energia solare su almeno il 10% della superficie determinante; utilizzare in linea di principio i tetti idonei.',
        'Solar energy use on at least 10% of the relevant area; suitable roofs generally must be used.',
      ),
      'https://www.weu.be.ch/de/start/themen/klima-energie/energie/energieversorgung/strom-und-waerme/solarenergie.html',
    ),
    source(
      'rule',
      'canton',
      'Kanton Bern',
      'Geeignete Dachflächen und Ausnahmen',
      'none',
      undefined,
      '2026-01-01',
      'unrelated',
      localized(
        'Geeignete Dachflächen grundsätzlich mindestens zu 60 % der Bruttodachfläche nutzen; Dächer unter 50 m² sind nach der zitierten Regel ausgenommen.',
        'Utiliser en principe au moins 60 % de la surface brute des toitures adaptées ; les toits de moins de 50 m² sont exemptés selon la règle citée.',
        'Utilizzare in linea di principio almeno il 60% della superficie lorda dei tetti idonei; secondo la regola citata, i tetti sotto 50 m² sono esenti.',
        'Generally use at least 60% of suitable gross roof area; roofs below 50 m² are exempt under the cited rule.',
      ),
      localized(
        'Vor dem Bauvorhaben in der Planung und bei der zuständigen Stelle klären.',
        'Clarifier avant le projet avec la planification et l’autorité compétente.',
        'Chiarire prima del progetto con la pianificazione e l’autorità competente.',
        'Clarify during planning with the responsible authority before the project.',
      ),
      localized(
        'Keine Förderung, sondern Flächenvorgabe mit ausdrücklich genannten Ausnahmen.',
        'Pas une subvention, mais une règle de surface avec exceptions explicites.',
        'Non è un incentivo, ma una prescrizione di superficie con eccezioni esplicite.',
        'Not a subsidy, but an area requirement with stated exceptions.',
      ),
      'https://www.weu.be.ch/fr/start/themen/klima-energie/energie/energiegesetzgebung/energievorschriften-beim-bauen/solarpflicht.html',
    ),
    source(
      'rule',
      'canton',
      'Kanton Bern',
      'Meldepflicht bei umfassender Dachsanierung',
      'none',
      undefined,
      '2026-01-01',
      'unrelated',
      localized(
        'Bestehende Gebäude mit umfassender Dachsanierung; nicht automatisch dieselbe Installationspflicht wie bei Neubauten.',
        'Bâtiments existants faisant l’objet d’une rénovation complète du toit ; pas automatiquement la même obligation d’installation que pour les nouvelles constructions.',
        'Edifici esistenti con ristrutturazione completa del tetto; non equivale automaticamente all’obbligo d’installazione delle nuove costruzioni.',
        'Existing buildings undergoing a full roof renovation; not automatically the same installation duty as new construction.',
      ),
      localized(
        'Meldung spätestens sieben Arbeitstage vor Beginn der Arbeiten, sofern keine Bewilligung erforderlich ist.',
        'Notification au plus tard sept jours ouvrables avant le début des travaux lorsque l’autorisation n’est pas requise.',
        'Notifica al più tardi sette giorni lavorativi prima dell’inizio dei lavori quando non è richiesta un’autorizzazione.',
        'Notify no later than seven working days before work starts where no permit is required.',
      ),
      localized(
        'Meldepflicht; kein automatischer PV-Installationsbefehl für jedes bestehende Dach.',
        'Obligation de notification ; pas d’ordre automatique d’installer du PV sur chaque toit existant.',
        'Obbligo di notifica; non un obbligo automatico di installare FV su ogni tetto esistente.',
        'Notification duty; not an automatic PV installation order for every existing roof.',
      ),
      'https://www.belex.sites.be.ch/app/de/texts_of_law/725.1',
    ),
  ],
};

const pages: Record<string, CantonAuditPage> = {
  [ag.cantonId]: ag,
  [ar.cantonId]: ar,
  [ai.cantonId]: ai,
  [basel.cantonId]: basel,
  [bern.cantonId]: bern,
};

const localizedContent: Record<string, Partial<Record<CantonLocale, CantonAuditContent>>> = {
  aargau: {
    fr: {
      heroHeadline: 'Installation solaire en Argovie',
      heroSubheadline: 'Distinguer clairement aides et règles de construction',
      heroDescription: 'Pour une installation photovoltaïque ordinaire, la rétribution unique fédérale via Pronovo est l’élément principal en Argovie. Le conseil cantonal et les règles applicables aux grands bâtiments neufs sont documentés séparément.',
      whySolarTitle: 'Ce qui compte réellement en Argovie',
      whySolarIntro: 'Les conditions dépendent du bâtiment, du projet et du programme compétent. Aucun taux cantonal général pour le PV ou le stockage n’est vérifié pour 2026.',
      whySolarReasons: [
        { title: 'Contribution fédérale via Pronovo', description: 'La RU est traitée par Pronovo pour le compte de la Confédération et calculée selon le projet. Les communes et fournisseurs peuvent avoir leurs propres programmes, à vérifier séparément.' },
        { title: 'Conseil Eigenstrom', description: 'Le conseil porte sur le PV, l’autoconsommation, le stockage, la mobilité électrique et la consommation. En 2026, la contribution cantonale est de CHF 350 et la participation commence à CHF 150.' },
        { title: 'Obligation solaire pour les grands bâtiments neufs', description: 'Pour les nouveaux bâtiments de plus de 300 m² de surface imputable, l’ordonnance exige une installation PV ou solaire thermique avec en principe au moins 20 % de surface pertinente.' },
      ],
      faqs: [
        { question: 'Existe-t-il une aide cantonale générale pour le PV en Argovie ?', answer: 'Pour les installations PV ordinaires, la RU fédérale via Pronovo est attestée. Les offres communales ou des fournisseurs sont à vérifier séparément ; aucune aide cantonale générale PV et stockage n’est vérifiée ici.' },
        { question: 'Combien coûte le conseil Eigenstrom ?', answer: 'Dans le programme 2026, la contribution cantonale est de CHF 350 et la participation de la clientèle commence à CHF 150. Le conseil couvre notamment le PV, l’autoconsommation, le stockage et la mobilité électrique.' },
        { question: 'Quand l’obligation solaire s’applique-t-elle en Argovie ?', answer: 'Pour les nouveaux bâtiments de plus de 300 m² de surface imputable, une installation PV ou solaire thermique doit en principe être prévue. La surface pertinente doit généralement atteindre 20 % ; les exceptions légales doivent être contrôlées.' },
        { question: 'Quand annoncer un projet solaire en Argovie ?', answer: 'Depuis 2026, certaines installations en façade peuvent utiliser la procédure d’annonce si les conditions légales sont remplies. Les bâtiments protégés et environnements sensibles peuvent nécessiter une autorisation.' },
      ],
    },
    it: {
      heroHeadline: 'Impianto fotovoltaico in Argovia',
      heroSubheadline: 'Separare correttamente incentivi e regole edilizie',
      heroDescription: 'Per un normale impianto fotovoltaico in Argovia è soprattutto rilevante la rimunerazione unica federale tramite Pronovo. La consulenza cantonale e le regole per i grandi edifici nuovi sono documentate separatamente.',
      whySolarTitle: 'Cosa conta davvero in Argovia',
      whySolarIntro: 'I requisiti dipendono dall’edificio, dal progetto e dal programma competente. Per il 2026 non è verificata un’aliquota cantonale generale per FV o accumulo.',
      whySolarReasons: [
        { title: 'Contributo federale tramite Pronovo', description: 'La RU è gestita da Pronovo per conto della Confederazione e calcolata per progetto. Comuni e fornitori possono avere programmi propri, da verificare individualmente.' },
        { title: 'Consulenza Eigenstrom', description: 'La consulenza comprende FV, autoconsumo, accumulo, mobilità elettrica e consumi. Nel 2026 il contributo cantonale è di CHF 350 e la partecipazione parte da CHF 150.' },
        { title: 'Obbligo solare per grandi edifici nuovi', description: 'Per nuovi edifici con oltre 300 m² di superficie computabile l’ordinanza richiede un impianto FV o solare termico con in linea di principio almeno il 20% di superficie rilevante.' },
      ],
      faqs: [
        { question: 'Esiste un contributo cantonale generale al FV in Argovia?', answer: 'Per gli impianti FV normali è documentata soprattutto la RU federale tramite Pronovo. Le offerte comunali o dei fornitori vanno verificate singolarmente; qui non è verificato un incentivo cantonale generale a FV e accumulo.' },
        { question: 'Quanto costa la consulenza Eigenstrom?', answer: 'Nel programma 2026 il contributo cantonale è di CHF 350, con partecipazione del cliente a partire da CHF 150. La consulenza comprende tra l’altro FV, autoconsumo, accumulo e mobilità elettrica.' },
        { question: 'Quando vale l’obbligo solare in Argovia?', answer: 'Per nuovi edifici con oltre 300 m² di superficie computabile occorre in linea di principio prevedere FV o solare termico. La superficie rilevante deve generalmente raggiungere il 20%; verificare le eccezioni legali.' },
        { question: 'Quando va notificato un progetto solare in Argovia?', answer: 'Dal 2026 alcune installazioni in facciata possono usare la procedura di notifica se rispettano i requisiti legali. Gli edifici protetti e gli ambienti sensibili possono richiedere un’autorizzazione.' },
      ],
    },
    en: {
      heroHeadline: 'Solar installation in Aargau',
      heroSubheadline: 'Keep support and building rules distinct',
      heroDescription: 'For a standard photovoltaic installation in Aargau, the federal one-off payment through Pronovo is the main verified support. Cantonal advice and rules for larger new buildings are documented separately.',
      whySolarTitle: 'What actually matters in Aargau',
      whySolarIntro: 'Requirements depend on the building, project and responsible programme. No general cantonal PV or storage rate is verified for 2026.',
      whySolarReasons: [
        { title: 'Federal payment through Pronovo', description: 'Pronovo administers the EIV on behalf of the Confederation and calculates it for the project. Municipalities and utilities may offer separate programmes that must be checked individually.' },
        { title: 'Eigenstrom advice', description: 'The advice covers PV, self-consumption, storage, electric mobility and electricity use. In 2026 the cantonal contribution is CHF 350 and the customer share starts at CHF 150.' },
        { title: 'Solar requirement for larger new buildings', description: 'For new buildings over 300 m² of chargeable floor area, the ordinance generally requires PV or solar thermal with at least 20% relevant area.' },
      ],
      faqs: [
        { question: 'Is there a general cantonal PV grant in Aargau?', answer: 'For ordinary PV systems, the federal EIV through Pronovo is the verified baseline. Municipal and utility offers must be checked individually; no general cantonal PV and storage grant is verified here.' },
        { question: 'How much does Eigenstrom advice cost?', answer: 'Under the 2026 programme, the cantonal contribution is CHF 350 and the customer contribution starts at CHF 150. The advice covers PV, self-consumption, storage and electric mobility.' },
        { question: 'When does the solar requirement apply in Aargau?', answer: 'For new buildings with more than 300 m² of chargeable floor area, PV or solar thermal is generally required. Relevant module or collector area should generally reach 20%; check statutory exceptions.' },
        { question: 'When must a solar project be notified in Aargau?', answer: 'Since 2026, certain facade systems may use the notification procedure when legal conditions are met. Protected buildings and sensitive settings may still require a permit.' },
      ],
    },
  },
  'appenzell-ausserrhoden': {
    fr: {
      heroHeadline: 'Installation solaire à Appenzell Rhodes-Extérieures',
      heroSubheadline: 'Une aide cantonale en complément de la RU',
      heroDescription: 'Appenzell Rhodes-Extérieures constitue le cas distinct des cinq zones : en 2026, une aide cantonale complémentaire à la RU fédérale définitive est possible pour les installations admissibles. La demande intervient seulement après la mise en service et la décision Pronovo entrée en force.',
      whySolarTitle: 'Appenzell Rhodes-Extérieures : base RU et complément cantonal',
      whySolarIntro: 'La date de mise en service, le raccordement au réseau, la puissance minimale et l’exclusion des installations HEIV ou mises aux enchères sont déterminants. Le changement annoncé pour 2027 reste séparé du régime actuel.',
      whySolarReasons: [
        { title: 'Jusqu’à 50 % de la RU définitive', description: 'Pour les installations mises en service dès le 1er septembre 2025, l’aide cantonale atteint au maximum 50 % de la RU fédérale définitive, plafonnée à CHF 100’000 par projet.' },
        { title: 'Conditions d’accès précises', description: 'L’installation doit notamment atteindre 2 kWp, être raccordée au réseau et recevoir une RU fédérale. Les installations HEIV sans autoconsommation et celles issues d’une mise aux enchères sont exclues.' },
        { title: 'Demande après la clôture', description: 'La demande cantonale se fait seulement après la mise en service et la décision Pronovo entrée en force. Ce n’est pas la règle habituelle d’une demande avant les travaux.' },
      ],
      faqs: [
        { question: 'Quelle est l’aide PV à Appenzell Rhodes-Extérieures en 2026 ?', answer: 'Pour les installations mises en service dès le 1er septembre 2025, l’aide cantonale atteint au maximum 50 % de la RU fédérale définitive et CHF 100’000 par projet. Il ne s’agit pas de 50 % des coûts d’investissement.' },
        { question: 'Quelles installations sont admissibles ?', answer: 'Il faut notamment au moins 2 kWp, un raccordement au réseau et une RU fédérale. Les installations HEIV sans autoconsommation et celles ayant obtenu une prime d’enchère fédérale sont exclues.' },
        { question: 'Quand déposer la demande ?', answer: 'Après la mise en service et l’entrée en force de la décision Pronovo définitive relative à la RU. Cette décision sert de base au calcul.' },
        { question: 'Que change 2027 ?', answer: 'Le programme prévu dès le 1er janvier 2027 met davantage l’accent sur la production hivernale et la combinaison avec l’isolation. Cette logique future ne doit pas être présentée comme l’aide 2026.' },
      ],
    },
    it: {
      heroHeadline: 'Impianto fotovoltaico ad Appenzello Esterno',
      heroSubheadline: 'Un contributo cantonale aggiuntivo alla RU',
      heroDescription: 'Appenzello Esterno è il caso distinto tra le cinque aree: nel 2026 è possibile un contributo cantonale aggiuntivo alla rimunerazione unica federale definitiva per gli impianti idonei. La domanda si presenta solo dopo la messa in servizio e la decisione Pronovo definitiva.',
      whySolarTitle: 'Appenzello Esterno: base RU e contributo cantonale',
      whySolarIntro: 'Sono decisivi data di messa in servizio, collegamento alla rete, potenza minima ed esclusione di impianti HEIV o assegnati tramite asta. La modifica prevista per il 2027 resta separata dal regime attuale.',
      whySolarReasons: [
        { title: 'Fino al 50% della RU definitiva', description: 'Per gli impianti messi in esercizio dal 1° settembre 2025 il contributo cantonale arriva al massimo al 50% della RU federale definitiva, con limite di CHF 100’000 per progetto.' },
        { title: 'Requisiti di accesso chiari', description: 'L’impianto deve tra l’altro avere almeno 2 kWp, essere collegato alla rete e ricevere una RU federale. Sono esclusi gli impianti HEIV senza autoconsumo e quelli assegnati tramite asta.' },
        { title: 'Domanda dopo la conclusione', description: 'La domanda cantonale viene presentata solo dopo la messa in servizio e la decisione Pronovo passata in giudicato. Non vale la regola ordinaria della domanda prima dei lavori.' },
      ],
      faqs: [
        { question: 'Qual è il contributo FV ad Appenzello Esterno nel 2026?', answer: 'Per impianti messi in esercizio dal 1° settembre 2025 il contributo cantonale arriva al massimo al 50% della RU federale definitiva e a CHF 100’000 per progetto. Non è il 50% dei costi d’investimento.' },
        { question: 'Quali impianti sono idonei?', answer: 'Servono tra l’altro almeno 2 kWp, un collegamento alla rete e una RU federale. Sono esclusi gli impianti HEIV senza autoconsumo e quelli che hanno ottenuto un’aggiudicazione tramite asta federale.' },
        { question: 'Quando si presenta la domanda?', answer: 'Dopo la messa in servizio e dopo che la decisione Pronovo definitiva sulla RU è passata in giudicato. La decisione definitiva è la base di calcolo.' },
        { question: 'Cosa cambia nel 2027?', answer: 'Il programma previsto dal 1° gennaio 2027 punta maggiormente su produzione invernale e combinazione con isolamento. Questa logica futura non va presentata come contributo 2026.' },
      ],
    },
    en: {
      heroHeadline: 'Solar installation in Appenzell Ausserrhoden',
      heroSubheadline: 'A cantonal addition to the federal EIV',
      heroDescription: 'Appenzell Ausserrhoden is the distinct case among these five areas: in 2026, eligible systems can receive a cantonal contribution in addition to the final federal EIV. Apply only after commissioning and the final Pronovo decision.',
      whySolarTitle: 'Appenzell Ausserrhoden: EIV plus a cantonal addition',
      whySolarIntro: 'Commissioning date, grid connection, minimum output and exclusion of HEIV or auction systems are decisive. The announced 2027 change remains separate from the current regime.',
      whySolarReasons: [
        { title: 'Up to 50% of the final EIV', description: 'For systems commissioned from 1 September 2025, the cantonal contribution is at most 50% of the final federal EIV, capped at CHF 100,000 per project.' },
        { title: 'Clear eligibility requirements', description: 'The system must have at least 2 kWp, be grid connected and receive a federal EIV. HEIV systems without self-consumption and auction systems are excluded.' },
        { title: 'Apply after completion', description: 'The cantonal application is submitted only after commissioning and the final Pronovo EIV decision has become legally binding. This is not the usual pre-construction rule.' },
      ],
      faqs: [
        { question: 'What is the Appenzell Ausserrhoden PV contribution in 2026?', answer: 'For systems commissioned from 1 September 2025, the cantonal contribution is at most 50% of the final federal EIV and CHF 100,000 per project. It is not 50% of investment costs.' },
        { question: 'Which systems qualify?', answer: 'The system must have at least 2 kWp, be grid connected and receive a federal EIV. HEIV systems without self-consumption and systems awarded through a federal auction are excluded.' },
        { question: 'When must the application be filed?', answer: 'After commissioning and once the final Pronovo EIV decision is legally binding. The final decision is the calculation basis.' },
        { question: 'What changes in 2027?', answer: 'The programme planned from 1 January 2027 focuses more strongly on winter output and insulation combinations. This future logic must not be presented as the 2026 contribution.' },
      ],
    },
  },
  'appenzell-innerrhoden': {
    fr: {
      heroHeadline: 'Installation solaire à Appenzell Rhodes-Intérieures',
      heroSubheadline: 'Aide fédérale et conseil solaire à distinguer',
      heroDescription: 'À Appenzell Rhodes-Intérieures, la RU fédérale via Pronovo est attestée pour l’installation PV elle-même. L’offre cantonale est un conseil solaire, et non une aide PV forfaitaire.',
      whySolarTitle: 'Appenzell Rhodes-Intérieures : conseil plutôt que taux PV',
      whySolarIntro: 'Les règles cantonales associent un conseil en énergie solaire à des exigences pour les nouveaux bâtiments. Les tarifs locaux de reprise appartiennent au fournisseur concerné, pas au canton.',
      whySolarReasons: [
        { title: 'RU fédérale', description: 'Pronovo traite la RU de l’installation PV. Aucun complément cantonal général comparable à celui de Rhodes-Extérieures n’est vérifié pour AI.' },
        { title: 'Conseil solaire pour CHF 100', description: 'Le conseil est réalisé par Verein Energie AR/AI. La participation est de CHF 100 ; réalisé en même temps que le conseil chauffage renouvelable, il est gratuit.' },
        { title: 'Production d’électricité des nouveaux bâtiments', description: 'Les règles énergétiques exigent une part de production électrique propre dans les nouveaux bâtiments. Le PV est une solution possible ; l’examen concret se fait dans la procédure de construction.' },
      ],
      faqs: [
        { question: 'Existe-t-il une aide cantonale PV à AI ?', answer: 'Pour l’installation PV, la RU fédérale via Pronovo est attestée. Aucun complément PV cantonal général comparable à Rhodes-Extérieures n’est vérifié.' },
        { question: 'Combien coûte le conseil solaire ?', answer: 'La participation de la clientèle est de CHF 100. Réalisé simultanément avec « erneuerbar heizen », le conseil solaire est gratuit.' },
        { question: 'Que demande AI pour les nouveaux bâtiments ?', answer: 'Les nouveaux bâtiments doivent produire une part de leurs besoins électriques. Le PV est une solution possible ; les détails et exceptions résultent des prescriptions énergétiques.' },
        { question: 'Qui fixe les tarifs de reprise à Appenzell ?', answer: 'Les tarifs de la Feuerschaugemeinde Appenzell sont ceux d’un fournisseur local et non une aide cantonale. La page officielle cite l’exemple de 6 ct./kWh sous 30 kW et 1,5 ct./kWh pour les HKN.' },
      ],
    },
    it: {
      heroHeadline: 'Impianto fotovoltaico ad Appenzello Interno',
      heroSubheadline: 'Separare incentivo federale e consulenza solare',
      heroDescription: 'Ad Appenzello Interno è documentata la rimunerazione unica federale tramite Pronovo per l’impianto FV. L’offerta cantonale è una consulenza solare, non un contributo FV forfettario.',
      whySolarTitle: 'Appenzello Interno: consulenza, non aliquota FV',
      whySolarIntro: 'Le regole cantonali collegano la consulenza solare ai requisiti per i nuovi edifici. Le tariffe locali di ritiro appartengono al gestore interessato, non al Cantone.',
      whySolarReasons: [
        { title: 'RU federale', description: 'Pronovo gestisce la RU dell’impianto FV. Per AI non è verificato un contributo cantonale generale analogo a quello di Appenzello Esterno.' },
        { title: 'Consulenza solare per CHF 100', description: 'La consulenza è svolta dal Verein Energie AR/AI. La partecipazione è di CHF 100; svolta contemporaneamente alla consulenza sul riscaldamento rinnovabile, è gratuita.' },
        { title: 'Produzione elettrica nei nuovi edifici', description: 'Le regole energetiche richiedono una quota di produzione propria nei nuovi edifici. Il FV è una possibile soluzione; il caso concreto va chiarito nella procedura edilizia.' },
      ],
      faqs: [
        { question: 'Esiste un incentivo cantonale FV in AI?', answer: 'Per l’impianto FV è documentata la RU federale tramite Pronovo. Non è verificato un top-up cantonale generale analogo a quello di Appenzello Esterno.' },
        { question: 'Quanto costa la consulenza solare?', answer: 'La partecipazione del cliente è di CHF 100. Se svolta contemporaneamente a «erneuerbar heizen», la consulenza solare è gratuita.' },
        { question: 'Cosa richiede AI per i nuovi edifici?', answer: 'I nuovi edifici devono produrre una parte del proprio fabbisogno elettrico. Il FV è una soluzione possibile; dettagli ed eccezioni dipendono dalle prescrizioni energetiche.' },
        { question: 'Chi stabilisce le tariffe di ritiro ad Appenzello?', answer: 'Le tariffe della Feuerschaugemeinde Appenzell sono del gestore locale e non incentivi cantonali. La pagina ufficiale cita l’esempio di 6 ct./kWh sotto 30 kW e 1,5 ct./kWh per HKN.' },
      ],
    },
    en: {
      heroHeadline: 'Solar installation in Appenzell Innerrhoden',
      heroSubheadline: 'Keep federal support and solar advice separate',
      heroDescription: 'In Appenzell Innerrhoden, the federal EIV through Pronovo is verified for the PV system itself. The cantonal offer is solar advice, not a flat PV grant.',
      whySolarTitle: 'Appenzell Innerrhoden: advice instead of a PV rate',
      whySolarIntro: 'Cantonal rules combine solar advice with requirements for new buildings. Local export tariffs belong to the relevant utility, not to the canton.',
      whySolarReasons: [
        { title: 'Federal EIV', description: 'Pronovo administers the EIV for the PV system. No general cantonal top-up comparable to Appenzell Ausserrhoden is verified for AI.' },
        { title: 'Solar advice for CHF 100', description: 'Advice is delivered by Verein Energie AR/AI. The customer contribution is CHF 100; when carried out at the same time as renewable heating advice, it is free.' },
        { title: 'Electricity production in new buildings', description: 'Energy rules require new buildings to produce part of their electricity needs. PV is one possible solution; clarify the specific case in the building procedure.' },
      ],
      faqs: [
        { question: 'Is there a cantonal PV grant in AI?', answer: 'For the PV system, the federal EIV through Pronovo is verified. No general cantonal PV top-up comparable to Appenzell Ausserrhoden is verified.' },
        { question: 'How much does solar advice cost?', answer: 'The customer contribution is CHF 100. When carried out at the same time as “erneuerbar heizen”, the solar advice is free.' },
        { question: 'What does AI require for new buildings?', answer: 'New buildings must produce part of their electricity needs. PV is one possible solution; details and exceptions follow the energy rules.' },
        { question: 'Who sets export tariffs in Appenzell?', answer: 'Feuerschaugemeinde Appenzell tariffs are local utility tariffs, not cantonal subsidies. The official page gives the example of 6 Rp./kWh below 30 kW and 1.5 Rp./kWh for HKN.' },
      ],
    },
  },
  basel: {
    fr: {
      heroHeadline: 'Installation solaire à Bâle BS/BL',
      heroSubheadline: 'Vérifier séparément Bâle-Ville et Bâle-Campagne',
      heroDescription: 'À Bâle, la compétence est déterminante : Bâle-Ville renvoie à la promotion fédérale Pronovo pour le PV, tandis que Bâle-Campagne prévoit un bonus concret pour l’association isolation thermique et PV.',
      whySolarTitle: 'Bâle : deux cantons, deux logiques d’aide',
      whySolarIntro: 'Les sources officielles actuelles ne permettent pas de déduire un taux PV cantonal général. La limite de 40 % mentionnée par Bâle-Ville concerne notamment le solaire thermique, pas le PV.',
      whySolarReasons: [
        { title: 'Bâle-Ville : PV via Pronovo', description: 'La page officielle de Bâle-Ville mentionne la promotion fédérale pour les installations PV. La limite de 40 % ne doit pas être reprise comme taux PV.' },
        { title: 'Bâle-Campagne : bonus avec isolation', description: 'Depuis le 1er janvier 2026, un bonus supplémentaire existe lorsque l’isolation thermique est combinée au PV : CHF 40/m² de modules en toiture et CHF 120/m² en façade.' },
        { title: 'Vérifier avant de commander', description: 'BS et BL ont des autorités distinctes. Vérifiez avant les travaux si la combinaison concrète isolation-PV remplit les conditions et quelle demande est nécessaire.' },
      ],
      faqs: [
        { question: 'Comment le PV est-il aidé à Bâle-Ville ?', answer: 'Bâle-Ville renvoie en principe à la promotion fédérale Pronovo pour le PV. La limite cantonale de 40 % concerne notamment le solaire thermique et n’est pas un taux PV.' },
        { question: 'Quel est le bonus BL isolation et PV ?', answer: 'Depuis le 1er janvier 2026, le programme bâlois prévoit un bonus supplémentaire lorsque l’isolation thermique est combinée au PV : CHF 40 par m² de modules en toiture ou CHF 120 par m² en façade.' },
        { question: 'Existe-t-il une aide PV générale en pourcentage ?', answer: 'Aucun taux cantonal PV général n’est attesté par les sources officielles actuelles. BS et BL doivent être distingués ; à BL, le bonus est conditionné à l’isolation.' },
        { question: 'Quand déposer une demande à Bâle ?', answer: 'Le moment dépend du canton et de la mesure. Vérifiez la procédure actuelle de la mesure BL avant le début des travaux et la compétence BS ou BL.' },
      ],
    },
    it: {
      heroHeadline: 'Impianto fotovoltaico a Basilea BS/BL',
      heroSubheadline: 'Verificare separatamente Basilea Città e Campagna',
      heroDescription: 'A Basilea la competenza è decisiva: Basilea Città rinvia all’incentivo federale Pronovo per il FV, mentre Basilea Campagna prevede un bonus concreto per la combinazione isolamento termico e FV.',
      whySolarTitle: 'Basilea: due Cantoni, due logiche d’incentivo',
      whySolarIntro: 'Le fonti ufficiali attuali non permettono di ricavare un’aliquota cantonale generale per il FV. Il limite del 40% indicato da Basilea Città riguarda tra l’altro il solare termico, non il FV.',
      whySolarReasons: [
        { title: 'Basilea Città: FV tramite Pronovo', description: 'La pagina ufficiale di BS indica l’incentivo federale per gli impianti FV. Il limite del 40% non va riportato come aliquota FV.' },
        { title: 'Basilea Campagna: bonus con isolamento', description: 'Dal 1° gennaio 2026 esiste un bonus aggiuntivo quando l’isolamento termico è combinato con il FV: CHF 40/m² di moduli sul tetto e CHF 120/m² in facciata.' },
        { title: 'Verificare prima dell’incarico', description: 'BS e BL hanno autorità distinte. Prima dei lavori verificare requisiti della combinazione isolamento-FV e domanda competente.' },
      ],
      faqs: [
        { question: 'Come viene incentivato il FV a Basilea Città?', answer: 'Basilea Città rinvia in linea di principio all’incentivo federale Pronovo per il FV. Il limite cantonale del 40% riguarda tra l’altro il solare termico e non è un’aliquota FV.' },
        { question: 'Qual è il bonus BL per isolamento e FV?', answer: 'Dal 1° gennaio 2026 il programma basilese prevede un bonus aggiuntivo se l’isolamento termico è combinato con il FV: CHF 40 per m² di moduli sul tetto oppure CHF 120 per m² in facciata.' },
        { question: 'Esiste un incentivo FV generale in percentuale?', answer: 'Le fonti ufficiali attuali non attestano un’aliquota cantonale generale per il FV. BS e BL vanno separati; in BL il bonus è legato all’isolamento.' },
        { question: 'Quando presentare la domanda a Basilea?', answer: 'La tempistica dipende dal Cantone e dalla misura. Verificare la procedura BL prima dell’inizio dei lavori e la competenza BS o BL.' },
      ],
    },
    en: {
      heroHeadline: 'Solar installation in Basel BS/BL',
      heroSubheadline: 'Check Basel-Stadt and Basel-Landschaft separately',
      heroDescription: 'Responsibility matters in Basel: Basel-Stadt points to Pronovo federal support for PV, while Basel-Landschaft has a specific bonus for combining thermal insulation with PV.',
      whySolarTitle: 'Basel: two cantons, two support approaches',
      whySolarIntro: 'Current official sources do not establish one general cantonal PV percentage. Basel-Stadt’s 40% reference concerns, among other measures, thermal solar and not PV.',
      whySolarReasons: [
        { title: 'Basel-Stadt: PV through Pronovo', description: 'The official BS page identifies federal support for PV systems. Its 40% reference must not be reused as a PV subsidy rate.' },
        { title: 'Basel-Landschaft: insulation bonus', description: 'Since 1 January 2026, an additional bonus applies where thermal insulation is combined with PV: CHF 40/m² of roof module area and CHF 120/m² on facades.' },
        { title: 'Check conditions before ordering', description: 'BS and BL have separate authorities. Before work starts, check whether the insulation-PV combination qualifies and which application is required.' },
      ],
      faqs: [
        { question: 'How is PV supported in Basel-Stadt?', answer: 'Basel-Stadt generally points to Pronovo federal support for PV systems. The cantonal 40% reference concerns, among other measures, thermal solar and is not a PV rate.' },
        { question: 'What is the BL insulation and PV bonus?', answer: 'Since 1 January 2026, the Basel programme provides an additional bonus when thermal insulation is combined with PV: CHF 40 per m² of roof module area or CHF 120 per m² on facades.' },
        { question: 'Is there a general percentage PV grant in Basel?', answer: 'Current official sources do not establish a general cantonal PV percentage. BS and BL must be separated; in BL the bonus is conditional on insulation.' },
        { question: 'When should I apply in Basel?', answer: 'Timing depends on the canton and measure. Check the current BL application procedure before work starts and confirm whether BS or BL is responsible.' },
      ],
    },
  },
  bern: {
    fr: {
      heroHeadline: 'Installation solaire dans le canton de Berne',
      heroSubheadline: 'Distinguer l’aide fédérale des nouvelles règles solaires',
      heroDescription: 'Dans le canton de Berne, le PV est actuellement soutenu par les instruments fédéraux KLEIV et GREIV. Depuis le 1er janvier 2026, de nouvelles prescriptions cantonales s’appliquent aux nouvelles constructions et extensions.',
      whySolarTitle: 'Berne : aide fédérale, règles cantonales',
      whySolarIntro: 'Les nouvelles prescriptions bernoises sont plus importantes pour la planification qu’un taux cantonal PV non vérifié. Une rénovation complète du toit d’un bâtiment existant entraîne une obligation d’annonce, pas automatiquement la même obligation d’installation qu’une nouvelle construction.',
      whySolarReasons: [
        { title: 'KLEIV et GREIV de la Confédération', description: 'La page bernoise officielle mentionne la RU petite sous 100 kW et la RU grande de 100 kW à 50 MW comme instruments fédéraux.' },
        { title: 'Nouvelles constructions et extensions', description: 'Depuis le 1er janvier 2026, les nouvelles constructions et extensions doivent prévoir une utilisation de l’énergie solaire sur au moins 10 % de la surface déterminante.' },
        { title: 'Rénovation du toit : annonce', description: 'Pour une rénovation complète du toit d’un bâtiment existant, il faut annoncer le projet. Cela n’équivaut pas automatiquement à l’obligation d’installation des nouvelles constructions.' },
      ],
      faqs: [
        { question: 'Quelle aide PV existe dans le canton de Berne ?', answer: 'La page officielle bernoise renvoie actuellement aux instruments fédéraux KLEIV et GREIV. Aucun programme cantonal PV général pour les installations résidentielles ordinaires n’y est indiqué.' },
        { question: 'Que prévoit la règle depuis le 1er janvier 2026 ?', answer: 'Les nouvelles constructions et extensions doivent prévoir l’utilisation de l’énergie solaire sur au moins 10 % de la surface déterminante. Les exceptions et règles spéciales cantonales doivent être contrôlées.' },
        { question: 'Une rénovation complète du toit impose-t-elle le PV ?', answer: 'Pour les bâtiments existants, une rénovation complète du toit déclenche une obligation d’annonce. Elle n’équivaut pas automatiquement à une obligation d’installation.' },
        { question: 'Quand annoncer une installation sans permis ?', answer: 'Pour les installations concernées, l’annonce à l’autorité de police des constructions doit parvenir au plus tard sept jours ouvrables avant le début des travaux. Les objets protégés peuvent nécessiter une autorisation.' },
      ],
    },
    it: {
      heroHeadline: 'Impianto fotovoltaico nel Canton Berna',
      heroSubheadline: 'Separare incentivo federale e nuove regole solari',
      heroDescription: 'Nel Canton Berna il FV è attualmente sostenuto dagli strumenti federali KLEIV e GREIV. Dal 1° gennaio 2026 valgono inoltre nuove prescrizioni cantonali per nuove costruzioni e ampliamenti.',
      whySolarTitle: 'Berna: incentivo federale, regole cantonali',
      whySolarIntro: 'Le nuove prescrizioni bernesi sono più importanti per la progettazione di una percentuale cantonale FV non verificata. La ristrutturazione completa del tetto di un edificio esistente comporta una notifica, non automaticamente lo stesso obbligo d’installazione di un nuovo edificio.',
      whySolarReasons: [
        { title: 'KLEIV e GREIV federali', description: 'La pagina ufficiale bernese indica la RU piccola sotto 100 kW e la RU grande da 100 kW a 50 MW come strumenti federali.' },
        { title: 'Nuove costruzioni e ampliamenti', description: 'Dal 1° gennaio 2026 nuove costruzioni e ampliamenti devono prevedere l’uso dell’energia solare su almeno il 10% della superficie determinante.' },
        { title: 'Ristrutturazione del tetto: notifica', description: 'Per la ristrutturazione completa del tetto di un edificio esistente vale un obbligo di notifica. Non equivale automaticamente all’obbligo d’installazione dei nuovi edifici.' },
      ],
      faqs: [
        { question: 'Quale incentivo FV esiste nel Canton Berna?', answer: 'La pagina ufficiale bernese rinvia attualmente agli strumenti federali KLEIV e GREIV. Non indica un programma cantonale generale per normali impianti residenziali.' },
        { question: 'Cosa vale dal 1° gennaio 2026?', answer: 'Nuove costruzioni e ampliamenti devono prevedere l’uso dell’energia solare su almeno il 10% della superficie determinante. Verificare eccezioni e regole speciali cantonali.' },
        { question: 'La ristrutturazione completa del tetto impone il FV?', answer: 'Per gli edifici esistenti una ristrutturazione completa del tetto comporta una notifica. Non equivale automaticamente a un obbligo d’installazione.' },
        { question: 'Quando va notificato un impianto senza autorizzazione?', answer: 'Per gli impianti interessati la notifica all’autorità edilizia va presentata al più tardi sette giorni lavorativi prima dell’inizio dei lavori. Gli oggetti protetti possono richiedere un’autorizzazione.' },
      ],
    },
    en: {
      heroHeadline: 'Solar installation in the canton of Bern',
      heroSubheadline: 'Separate federal support from new solar rules',
      heroDescription: 'In the canton of Bern, PV is currently supported through the federal KLEIV and GREIV instruments. Since 1 January 2026, new cantonal requirements also apply to new buildings and extensions.',
      whySolarTitle: 'Bern: federal support, cantonal rules',
      whySolarIntro: 'The new Bern rules matter for planning more than an unverified cantonal PV percentage. A full roof renovation on an existing building triggers a notification duty, not automatically the same installation duty as new construction.',
      whySolarReasons: [
        { title: 'Federal KLEIV and GREIV', description: 'The official Bern solar page lists the small EIV below 100 kW and large EIV from 100 kW to 50 MW as federal instruments.' },
        { title: 'New buildings and extensions', description: 'Since 1 January 2026, new buildings and extensions must provide solar energy use on at least 10% of the relevant area.' },
        { title: 'Roof renovation: notification', description: 'A full roof renovation on an existing building triggers a notification duty. It is not automatically the same installation duty that applies to new construction.' },
      ],
      faqs: [
        { question: 'What PV support exists in the canton of Bern?', answer: 'The official Bern page currently points to the federal KLEIV and GREIV instruments. It does not list a general cantonal PV programme for ordinary residential systems.' },
        { question: 'What applies from 1 January 2026?', answer: 'New buildings and extensions must provide solar energy use on at least 10% of the relevant area. Check the cantonal exceptions and special rules.' },
        { question: 'Does a full roof renovation require PV?', answer: 'For existing buildings, a full roof renovation triggers a notification duty. It is not automatically an installation duty.' },
        { question: 'When must a permit-free system be notified?', answer: 'For systems covered by the rule, notify the building police authority no later than seven working days before work starts. Protected buildings may require a permit.' },
      ],
    },
  },
};

for (const [cantonId, translations] of Object.entries(localizedContent)) {
  const page = pages[cantonId];
  if (page) page.localizedContent = translations;
}

export function getCantonAuditPage(cantonId: string, locale: CantonLocale = 'de'): CantonAuditPage | undefined {
  const page = pages[cantonId];
  if (!page) return undefined;
  const localizedPage = page.localizedContent?.[locale];
  return localizedPage ? { ...page, content: localizedPage } : page;
}

export function getCantonAuditRecords(cantonId: string): CantonAuditRecord[] {
  return getCantonAuditPage(cantonId)?.records ?? [];
}

export function auditText(text: LocalizedAuditText, locale: CantonLocale): string {
  return text[locale];
}