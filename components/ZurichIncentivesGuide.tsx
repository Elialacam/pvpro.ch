import Link from 'next/link';
import { ArrowRight, CheckCircle, ChevronRight, FileText, Sun } from 'lucide-react';
import FaqSchema from '@/components/FaqSchema';
import {
  ZURICH_INCENTIVE_SOURCE_CHECKED_AT,
  ZURICH_INCENTIVE_SOURCES,
  ZURICH_INCENTIVES,
} from '@/lib/zurich-incentives';

type ZurichGuideLocale = 'de' | 'fr' | 'it' | 'en';

const cityPv = ZURICH_INCENTIVES.cityPv.amount;
const cityBattery = ZURICH_INCENTIVES.cityBattery.amount;
const agriculturalBattery = ZURICH_INCENTIVES.cantonAgriculturalBattery.amount;
const ewzFeedIn = ZURICH_INCENTIVES.ewzFeedIn.amount;

const chf = (value: number) => `CHF ${value.toLocaleString('de-CH')}`;
const rp = (value: number) => `${value.toLocaleString('de-CH')} Rp./kWh`;

const copy = {
  de: {
    home: 'Home',
    overview: 'Förderungen',
    place: 'Kanton Zürich',
    tag: 'Förderungen & Subventionen',
    title: 'Förderung Solaranlage Kanton Zürich 2026',
    intro:
      'Im Kanton Zürich müssen Bundes-, Kantons-, Stadt- und Versorgerprogramme klar getrennt werden. Für eine normale private Photovoltaikanlage ist die Einmalvergütung des Bundes über Pronovo relevant; die Stadt Zürich ergänzt sie mit einem eigenen Programm.',
    federalEyebrow: 'Bundesebene',
    federalTitle: 'Bundesförderung: die Einmalvergütung (EIV)',
    federalBody:
      'Die Einmalvergütung des Bundes gilt auch im Kanton Zürich und wird von Pronovo verwaltet. Die definitive Höhe hängt unter anderem von Inbetriebnahmedatum, Leistung, Anlagentyp und anwendbaren Boni ab. Eine pauschale Prozent- oder CHF/kWp-Formel ist deshalb nicht verlässlich.',
    federalBullets: [
      'Pronovo berechnet und verfügt den Anspruch nach den jeweils gültigen Regeln.',
      'Die EIV ist eine Bundesförderung, keine kantonale Zürcher PV-Förderung.',
      'Für die definitive Summe den aktuellen Pronovo-Rechner und die Verfügung verwenden.',
    ],
    federalNote:
      'Wichtig: Die Gesamtbeiträge der Stadt Zürich weiter unten enthalten den Pronovo-Anteil bereits. Pronovo dort nicht nochmals addieren.',
    cantonEyebrow: 'Kantonsebene',
    cantonTitle: 'Ordentliches Energie-Förderprogramm des Kantons Zürich',
    cantonBody:
      'Das ordentliche kantonale Energie-Förderprogramm sieht keine allgemeine Förderung für private Batteriespeicher oder gewöhnliche Photovoltaikanlagen vor. Davon zu unterscheiden sind kommunale Programme und sektorspezifische kantonale Programme.',
    cantonCards: [
      ['Keine allgemeine Hausförderung', 'Für gewöhnliche private PV und Batteriespeicher ist im ordentlichen kantonalen Programm kein allgemeiner Beitrag ausgewiesen.', 'Kanton Zürich'],
      ['Landwirtschaftliche Ausnahme', `2026 waren höchstens ${chf(agriculturalBattery as number)} kantonale Mittel für Batteriespeicher in der Landwirtschaft vorgesehen. Das Budget ist ausgeschöpft und gilt nicht für Privathaushalte.`, 'Sektorspezifisch'],
      ['Steuerliche Abzüge', 'Energetische Investitionen können nach den jeweils geltenden steuerlichen Regeln abziehbar sein. Die Voraussetzungen separat prüfen.', 'Bund & Kanton'],
    ],
    cityEyebrow: 'Stadt Zürich',
    cityTitle: 'Städtische PV- und Batteriespeicherförderung ab 1. August 2026',
    cityIntro:
      'Die Stadt Zürich fördert über ewz. Diese Beiträge sind nicht dem Kanton Zürich zuzurechnen und gelten nur im Stadtgebiet.',
    obligation:
      'Die Solarpflicht im Kanton Zürich ist davon zu unterscheiden: Je nach Vorhaben betrifft sie Neubauten und grosse Dachsanierungen. Eine gesetzliche Mindestleistung ist keine freiwillige Fördermassnahme und wird im städtischen PV-Programm nicht gefördert.',
    pvTitle: 'Photovoltaik: maximale Gesamtbeiträge',
    pvBody:
      'Die städtische Tabelle nennt maximale Gesamtbeiträge – Stadt inklusive Pronovo. Die gesetzlichen Mindestleistungen bei Neubauten sind nicht förderberechtigt.',
    pvBullets: [
      `Grundbeitrag: ${chf(cityPv.baseChf as number)}`,
      `Bis 30 kWp: ${chf(cityPv.upTo30KwpChfPerKwp as number)}/kWp`,
      `Von 30 bis 100 kWp: ${chf(cityPv.from30To100KwpChfPerAdditionalKwp as number)}/kWp für jedes weitere kWp`,
      `Über 100 kWp: ${chf(cityPv.above100KwpChfPerAdditionalKwp as number)}/kWp für jedes weitere kWp`,
      `Zusätzlich ${chf(cityPv.permittedExistingBuildingAdditionalChf as number)} für bewilligungspflichtige PV-Anlagen auf Bestandesbauten`,
    ],
    pvWarning:
      'Nicht doppelt rechnen: Diese Maximalbeiträge sind inklusive Pronovo. Die Gesuche werden bei Stadt und Bund separat eingereicht, aber die Pronovo-Zahl darf nicht nochmals auf den Stadt-Maximalbetrag addiert werden.',
    batteryTitle: 'Stationäre Batteriespeicher',
    batteryBody:
      'Förderfähig sind stationäre Speicher in Verbindung mit einer PV-Anlage und einem netzdienlichen Energiemanagementsystem.',
    batteryBullets: [
      `Grundbeitrag ${chf(cityBattery.baseChf as number)} plus ${chf(cityBattery.chfPerKwh as number)}/kWh`,
      `Second-Life-Zellen: zusätzlich ${chf(cityBattery.secondLifeChfPerKwh as number)}/kWh`,
      `Mindestens ${cityBattery.minimumKwh as number} kWh, maximal ${cityBattery.maximumKwh as number} kWh je Speicheranlage`,
      `Maximal ${cityBattery.maximumKwhPerInstalledKw as number} kWh Speicherkapazität pro installiertem kW PV-Leistung`,
      'PV-Anlage und netzdienliches Energiemanagementsystem am gleichen Anschluss; keine Bleibatterien',
    ],
    cityTiming:
      'Das Gesuch muss vor Baubeginn eingereicht werden. Die revidierten Bestimmungen gelten für Gesuche ab 1. August 2026.',
    utilityEyebrow: 'Versorger / unbestätigter Tarifstatus',
    utilityTitle: 'ewz-Rücklieferung 2026: angekündigt, nicht als definitiver Tarif verwenden',
    utilityBody: `Die offizielle Stadtratsmitteilung nennt für 2026 durchschnittlich ${rp(ewzFeedIn.announcedAverageRpPerKwh as number)} sowie ${rp(ewzFeedIn.announcedSolarquartierRpPerKwh as number)} im Modell ewz.solarquartier. Die offizielle ewz-Tarifseite stellt die 2026-Regelung jedoch weiterhin unter den Vorbehalt der Genehmigung durch den Gemeinderat. Bis zur definitiven VVRE/EEA-Verordnung sind dies angekündigte Werte, keine gesicherte aktuelle Tarifzusage.`,
    utilityNote:
      'Für Ertragsrechnungen den endgültigen VVRE/EEA-Tarif prüfen und die angekündigten Werte nicht als garantiert voraussetzen.',
    legalEyebrow: 'Antrag und Einordnung',
    legalTitle: 'So bleibt die Zuständigkeit nachvollziehbar',
    steps: [
      ['1', 'Pronovo prüfen', 'Die Bundes-EIV mit dem aktuellen Pronovo-Rechner bzw. der späteren Verfügung bestimmen.'],
      ['2', 'Programm zuordnen', 'Kanton, Stadt Zürich und ewz nicht als einen einzigen Zuschuss behandeln.'],
      ['3', 'Vor Baubeginn einreichen', 'Für Stadt-PV und Stadt-Batteriespeicher das städtische Gesuch rechtzeitig einreichen.'],
      ['4', 'Tarif aktuell halten', 'Für Rücklieferung und HKN den definitiven ewz-Tarif prüfen.'],
    ],
    ctaTitle: 'Fördermöglichkeiten in Zürich richtig einordnen',
    ctaBody:
      'Vergleichen Sie Offerten und klären Sie mit dem Installateur, welche Stelle für Ihr Projekt zuständig ist. Die Förderzusage der zuständigen Stelle bleibt massgebend.',
    ctaButton: 'Kostenlose Offerte anfordern',
    ctaCompare: 'Oder zuerst Offerten vergleichen',
    more: 'Weitere Informationen',
    faqTitle: 'Häufig gestellte Fragen',
    faqs: [
      ['Gibt es im Kanton Zürich einen allgemeinen Batteriespeicherbeitrag?', 'Nein. Das ordentliche kantonale Energieprogramm enthält keinen allgemeinen privaten Batteriespeicherbeitrag. Die Stadt Zürich hat seit 1. August 2026 ein separates städtisches Programm mit eigenen Bedingungen.'],
      ['Wie hoch ist die Zürcher PV-Förderung?', 'Für die Stadt Zürich gelten ab 1. August 2026 maximale Gesamtbeiträge inklusive Pronovo: CHF 5’000 Grundbeitrag, CHF 450/kWp bis 30 kWp, danach CHF 350/kWp bis 100 kWp und CHF 310/kWp darüber. Diese Beträge sind Stadt-Maximalbeiträge und dürfen nicht nochmals um Pronovo erhöht werden. Ausserhalb der Stadt ist die EIV individuell über Pronovo zu bestimmen.'],
      ['Ist die landwirtschaftliche Batteriehilfe für mein Wohnhaus verfügbar?', 'Nein. Das kantonale Budget von höchstens CHF 200’000 für Batteriespeicher 2026 war eine sektorspezifische Landwirtschaftshilfe und ist laut offizieller Seite ausgeschöpft. Sie ist keine Förderung für private Wohnhäuser.'],
      ['Sind 12,91 Rp./kWh und 14 Rp./kWh ein gültiger ewz-Tarif?', 'Noch nicht als definitiv verifiziert. Diese Werte wurden offiziell angekündigt, die ewz-Tarifseite nennt die 2026-Regelung aber weiterhin vorbehaltlich der Genehmigung durch den Gemeinderat. Vor der Wirtschaftlichkeitsrechnung die finale VVRE/EEA-Regelung prüfen.'],
    ],
    sourceLabel: 'Offizielle Quellen, geprüft am',
    sourceNames: ['Stadt Zürich Fördergelder', 'Kanton Zürich Energieprogramm', 'Landwirtschaftliche Investitionshilfen', 'Pronovo', 'ewz Tarifseite'],
  },
  fr: {
    home: 'Accueil',
    overview: 'Subventions',
    place: 'Canton de Zurich',
    tag: 'Subventions & aides',
    title: 'Subventions installation solaire Canton de Zurich 2026',
    intro:
      'Dans le canton de Zurich, il faut distinguer les programmes de la Confédération, du canton, de la Ville et du fournisseur. Pour une installation photovoltaïque privée ordinaire, la rétribution unique fédérale via Pronovo est pertinente; la Ville de Zurich la complète avec son propre programme.',
    federalEyebrow: 'Niveau fédéral',
    federalTitle: 'Subvention fédérale: la rétribution unique (RU)',
    federalBody:
      'La rétribution unique de la Confédération s’applique aussi dans le canton de Zurich et est gérée par Pronovo. Son montant définitif dépend notamment de la date de mise en service, de la puissance, du type d’installation et des bonus applicables. Il n’est donc pas fiable d’utiliser un pourcentage ou un montant CHF/kWp universel.',
    federalBullets: [
      'Pronovo calcule et décide le droit selon les règles en vigueur.',
      'La RU est une aide fédérale, pas une subvention photovoltaïque cantonale zurichoise.',
      'Utilisez le calculateur Pronovo actuel et la décision finale pour le montant.',
    ],
    federalNote:
      'Important: les montants maximaux de la Ville de Zurich ci-dessous incluent déjà la part Pronovo. Ne l’ajoutez pas une seconde fois.',
    cantonEyebrow: 'Niveau cantonal',
    cantonTitle: 'Programme énergétique ordinaire du canton de Zurich',
    cantonBody:
      'Le programme cantonal ordinaire ne prévoit pas de subvention générale pour les batteries privées ni pour les installations photovoltaïques ordinaires. Il faut le distinguer des programmes communaux et des programmes cantonaux sectoriels.',
    cantonCards: [
      ['Pas d’aide générale pour les maisons', 'Aucune contribution générale n’est indiquée dans le programme ordinaire pour le photovoltaïque privé ou les batteries domestiques.', 'Canton de Zurich'],
      ['Exception agricole', `En 2026, au maximum ${chf(agriculturalBattery as number)} de moyens cantonaux étaient prévus pour les batteries agricoles. Le budget est épuisé et ne concerne pas les ménages.`, 'Sectoriel'],
      ['Déductions fiscales', 'Les investissements énergétiques peuvent être déductibles selon les règles fiscales en vigueur. Vérifiez les conditions séparément.', 'Confédération & canton'],
    ],
    cityEyebrow: 'Ville de Zurich',
    cityTitle: 'Aides photovoltaïques et batteries dès le 1er août 2026',
    cityIntro:
      'La Ville de Zurich soutient ces projets par l’intermédiaire d’ewz. Il ne s’agit pas d’une aide du canton et elle s’applique uniquement au territoire communal.',
    obligation:
      'L’obligation solaire du canton doit être distinguée de ces aides: selon le projet, elle concerne les nouvelles constructions et les grandes rénovations de toiture. Une puissance minimale imposée par la loi n’est pas une mesure volontaire subventionnée et n’est pas éligible à l’aide municipale.',
    pvTitle: 'Photovoltaïque: montants maximaux totaux',
    pvBody:
      'Le tableau municipal indique des montants maximaux totaux, Ville incluse avec Pronovo. La puissance minimale légalement exigée pour les nouvelles constructions n’est pas subventionnable.',
    pvBullets: [
      `Contribution de base: ${chf(cityPv.baseChf as number)}`,
      `Jusqu’à 30 kWp: ${chf(cityPv.upTo30KwpChfPerKwp as number)}/kWp`,
      `De 30 à 100 kWp: ${chf(cityPv.from30To100KwpChfPerAdditionalKwp as number)}/kWp pour chaque kWp supplémentaire`,
      `Au-delà de 100 kWp: ${chf(cityPv.above100KwpChfPerAdditionalKwp as number)}/kWp pour chaque kWp supplémentaire`,
      `Supplément de ${chf(cityPv.permittedExistingBuildingAdditionalChf as number)} pour les installations soumises à autorisation sur des bâtiments existants`,
    ],
    pvWarning:
      'Ne comptez pas deux fois: ces montants maximaux incluent Pronovo. Les demandes sont déposées séparément auprès de la Ville et de la Confédération, mais la part Pronovo ne doit pas être ajoutée au maximum municipal.',
    batteryTitle: 'Batteries stationnaires',
    batteryBody:
      'Les batteries stationnaires sont éligibles lorsqu’elles sont combinées à une installation photovoltaïque et à un système de gestion énergétique compatible avec le réseau.',
    batteryBullets: [
      `Contribution de base ${chf(cityBattery.baseChf as number)} plus ${chf(cityBattery.chfPerKwh as number)}/kWh`,
      `Cellules Second-Life: ${chf(cityBattery.secondLifeChfPerKwh as number)}/kWh supplémentaires`,
      `Au moins ${cityBattery.minimumKwh as number} kWh, au maximum ${cityBattery.maximumKwh as number} kWh par installation`,
      `Au maximum ${cityBattery.maximumKwhPerInstalledKw as number} kWh de capacité par kW PV installé`,
      'Installation PV et système de gestion énergétique compatible avec le réseau derrière le même raccordement; pas de batteries au plomb',
    ],
    cityTiming:
      'La demande doit être déposée avant le début des travaux. Les dispositions révisées s’appliquent aux demandes déposées dès le 1er août 2026.',
    utilityEyebrow: 'Fournisseur / statut tarifaire non définitif',
    utilityTitle: 'Rachat ewz 2026: annoncé, pas encore un tarif définitif',
    utilityBody: `La communication officielle du Conseil municipal annonce pour 2026 une moyenne de ${rp(ewzFeedIn.announcedAverageRpPerKwh as number)} et ${rp(ewzFeedIn.announcedSolarquartierRpPerKwh as number)} dans le modèle ewz.solarquartier. La page tarifaire officielle d’ewz indique toutefois que la réglementation 2026 reste soumise à l’approbation du Conseil municipal. Jusqu’à la publication de la VVRE/EEA définitive, il s’agit de valeurs annoncées et non d’un tarif actuel garanti.`,
    utilityNote:
      'Pour un calcul de rendement, vérifiez la VVRE/EEA définitive et ne considérez pas les valeurs annoncées comme garanties.',
    legalEyebrow: 'Demande et distinction',
    legalTitle: 'Garder une attribution claire',
    steps: [
      ['1', 'Vérifier Pronovo', 'Déterminer la RU fédérale avec le calculateur Pronovo actuel ou la décision finale.'],
      ['2', 'Attribuer le programme', 'Ne pas fusionner canton, Ville de Zurich et ewz en une seule aide.'],
      ['3', 'Déposer avant les travaux', 'Déposer à temps la demande municipale pour le PV et la batterie.'],
      ['4', 'Actualiser le tarif', 'Vérifier le tarif ewz définitif pour le rachat et les garanties d’origine.'],
    ],
    ctaTitle: 'Bien distinguer les aides à Zurich',
    ctaBody:
      'Comparez les offres et demandez à l’installateur quelle autorité est compétente pour votre projet. La décision de l’autorité compétente reste déterminante.',
    ctaButton: 'Demander une offre gratuite',
    ctaCompare: 'Ou comparer d’abord les offres',
    more: 'Plus d’informations',
    faqTitle: 'Questions fréquemment posées',
    faqs: [
      ['Le canton propose-t-il une aide générale pour les batteries?', 'Non. Le programme cantonal ordinaire ne prévoit pas d’aide générale pour les batteries privées. La Ville de Zurich dispose depuis le 1er août 2026 d’un programme distinct avec ses propres conditions.'],
      ['Quel est le montant de l’aide photovoltaïque zurichoise?', 'Dans la Ville de Zurich, dès le 1er août 2026, les montants maximaux totaux incluent Pronovo: CHF 5 000 de base, CHF 450/kWp jusqu’à 30 kWp, puis CHF 350/kWp jusqu’à 100 kWp et CHF 310/kWp au-delà. Ne rajoutez pas Pronovo à ces montants municipaux. Ailleurs, la RU doit être calculée par Pronovo.'],
      ['L’aide agricole aux batteries est-elle disponible pour une maison?', 'Non. Le budget cantonal 2026 de CHF 200 000 concernait une aide sectorielle agricole et est indiqué comme épuisé. Ce n’est pas une aide pour les habitations privées.'],
      ['Les montants 12,91 et 14 Rp./kWh sont-ils le tarif ewz en vigueur?', 'Ils ne sont pas vérifiés comme tarif définitif. Ils ont été annoncés officiellement, mais la page tarifaire ewz les indique encore sous réserve de l’approbation du Conseil municipal. Vérifiez la VVRE/EEA finale avant tout calcul.'],
    ],
    sourceLabel: 'Sources officielles, vérifiées le',
    sourceNames: ['Aides Ville de Zurich', 'Programme énergétique cantonal', 'Aides agricoles', 'Pronovo', 'Tarifs ewz'],
  },
  it: {
    home: 'Home',
    overview: 'Incentivi',
    place: 'Cantone di Zurigo',
    tag: 'Incentivi e contributi',
    title: 'Incentivi impianto solare Cantone di Zurigo 2026',
    intro:
      'Nel Cantone di Zurigo occorre distinguere chiaramente i programmi della Confederazione, del Cantone, della Città e del gestore. Per un normale impianto fotovoltaico privato è rilevante la rimunerazione unica federale tramite Pronovo; la Città di Zurigo la integra con un programma proprio.',
    federalEyebrow: 'Livello federale',
    federalTitle: 'Incentivo federale: la rimunerazione unica (RU)',
    federalBody:
      'La rimunerazione unica della Confederazione vale anche nel Cantone di Zurigo ed è gestita da Pronovo. L’importo definitivo dipende tra l’altro dalla data di messa in esercizio, dalla potenza, dal tipo di impianto e dai bonus applicabili. Non è quindi affidabile usare una percentuale o un importo universale in CHF/kWp.',
    federalBullets: [
      'Pronovo calcola e decide il diritto secondo le regole vigenti.',
      'La RU è un incentivo federale, non un contributo fotovoltaico cantonale zurighese.',
      'Per l’importo definitivo usare il calcolatore Pronovo aggiornato e la decisione finale.',
    ],
    federalNote:
      'Importante: i contributi massimi della Città di Zurigo qui sotto includono già la quota Pronovo. Non sommarla una seconda volta.',
    cantonEyebrow: 'Livello cantonale',
    cantonTitle: 'Programma energetico ordinario del Cantone di Zurigo',
    cantonBody:
      'Il programma energetico cantonale ordinario non prevede un incentivo generale per accumulatori privati né per normali impianti fotovoltaici. Occorre distinguerlo dai programmi comunali e dai programmi cantonali settoriali.',
    cantonCards: [
      ['Nessun incentivo generale domestico', 'Nel programma ordinario non è indicato un contributo generale per il fotovoltaico privato o per gli accumulatori domestici.', 'Cantone di Zurigo'],
      ['Eccezione agricola', `Nel 2026 erano previsti al massimo ${chf(agriculturalBattery as number)} di fondi cantonali per batterie agricole. Il budget è esaurito e non riguarda le famiglie.`, 'Settoriale'],
      ['Deduzioni fiscali', 'Gli investimenti energetici possono essere deducibili secondo le norme fiscali vigenti. Verificare separatamente i requisiti.', 'Confederazione e Cantone'],
    ],
    cityEyebrow: 'Città di Zurigo',
    cityTitle: 'Incentivi cittadini per PV e batterie dal 1° agosto 2026',
    cityIntro:
      'La Città di Zurigo sostiene questi progetti tramite ewz. Non si tratta di un incentivo cantonale e vale solo nel territorio comunale.',
    obligation:
      'L’obbligo solare cantonale va distinto da questi incentivi: a seconda del progetto riguarda nuove costruzioni e grandi ristrutturazioni del tetto. La potenza minima prescritta dalla legge non è una misura volontaria incentivabile e non è ammissibile al programma cittadino.',
    pvTitle: 'Fotovoltaico: contributi massimi complessivi',
    pvBody:
      'La tabella cittadina indica contributi massimi complessivi, Città inclusa e Pronovo. La potenza minima prescritta per legge nelle nuove costruzioni non è incentivabile.',
    pvBullets: [
      `Contributo base: ${chf(cityPv.baseChf as number)}`,
      `Fino a 30 kWp: ${chf(cityPv.upTo30KwpChfPerKwp as number)}/kWp`,
      `Da 30 a 100 kWp: ${chf(cityPv.from30To100KwpChfPerAdditionalKwp as number)}/kWp per ogni kWp aggiuntivo`,
      `Oltre 100 kWp: ${chf(cityPv.above100KwpChfPerAdditionalKwp as number)}/kWp per ogni kWp aggiuntivo`,
      `Ulteriori ${chf(cityPv.permittedExistingBuildingAdditionalChf as number)} per impianti su edifici esistenti soggetti ad autorizzazione`,
    ],
    pvWarning:
      'Non conteggiare due volte: questi contributi massimi includono Pronovo. Le domande vengono presentate separatamente a Città e Confederazione, ma la quota Pronovo non va aggiunta al massimo cittadino.',
    batteryTitle: 'Accumulatori stazionari',
    batteryBody:
      'Sono ammissibili gli accumulatori stazionari abbinati a un impianto fotovoltaico e a un sistema di gestione energetica compatibile con la rete.',
    batteryBullets: [
      `Contributo base ${chf(cityBattery.baseChf as number)} più ${chf(cityBattery.chfPerKwh as number)}/kWh`,
      `Celle Second-Life: ulteriori ${chf(cityBattery.secondLifeChfPerKwh as number)}/kWh`,
      `Almeno ${cityBattery.minimumKwh as number} kWh, massimo ${cityBattery.maximumKwh as number} kWh per accumulatore`,
      `Massimo ${cityBattery.maximumKwhPerInstalledKw as number} kWh di capacità per ogni kW PV installato`,
      'Impianto PV e sistema di gestione energetica compatibile con la rete dietro lo stesso allacciamento; niente batterie al piombo',
    ],
    cityTiming:
      'La domanda deve essere presentata prima dell’inizio dei lavori. Le disposizioni revisionate valgono per le domande dal 1° agosto 2026.',
    utilityEyebrow: 'Gestore / stato tariffario non definitivo',
    utilityTitle: 'Ritiro ewz 2026: annunciato, non ancora tariffa definitiva',
    utilityBody: `La comunicazione ufficiale del Municipio indica per il 2026 una media di ${rp(ewzFeedIn.announcedAverageRpPerKwh as number)} e ${rp(ewzFeedIn.announcedSolarquartierRpPerKwh as number)} nel modello ewz.solarquartier. La pagina ufficiale delle tariffe ewz precisa però che la disciplina 2026 resta soggetta all’approvazione del Consiglio comunale. Fino alla pubblicazione della VVRE/EEA definitiva sono valori annunciati, non una tariffa corrente garantita.`,
    utilityNote:
      'Per i calcoli di redditività verificare la VVRE/EEA definitiva e non considerare garantiti i valori annunciati.',
    legalEyebrow: 'Domanda e distinzione',
    legalTitle: 'Mantenere chiara l’attribuzione',
    steps: [
      ['1', 'Verificare Pronovo', 'Determinare la RU federale con il calcolatore Pronovo aggiornato o la decisione finale.'],
      ['2', 'Attribuire il programma', 'Non fondere Cantone, Città di Zurigo ed ewz in un unico incentivo.'],
      ['3', 'Presentare prima dei lavori', 'Presentare in tempo la domanda cittadina per PV e batteria.'],
      ['4', 'Aggiornare la tariffa', 'Verificare la tariffa ewz definitiva per ritiro e garanzie d’origine.'],
    ],
    ctaTitle: 'Attribuire correttamente gli incentivi a Zurigo',
    ctaBody:
      'Confrontate i preventivi e chiarite con l’installatore quale autorità è competente per il vostro progetto. Fa fede la decisione dell’autorità competente.',
    ctaButton: 'Richiedere un preventivo gratuito',
    ctaCompare: 'Oppure confrontare prima i preventivi',
    more: 'Ulteriori informazioni',
    faqTitle: 'Domande frequenti',
    faqs: [
      ['Il Cantone offre un incentivo generale per gli accumulatori?', 'No. Il programma cantonale ordinario non prevede un incentivo generale per batterie private. La Città di Zurigo ha invece un programma distinto dal 1° agosto 2026, con condizioni proprie.'],
      ['Quanto è l’incentivo PV a Zurigo?', 'Nella Città di Zurigo, dal 1° agosto 2026, i contributi massimi complessivi includono Pronovo: CHF 5’000 di base, CHF 450/kWp fino a 30 kWp, poi CHF 350/kWp fino a 100 kWp e CHF 310/kWp oltre. Non aggiungere Pronovo a questi massimali cittadini. Fuori città la RU va calcolata da Pronovo.'],
      ['L’aiuto agricolo alle batterie è disponibile per una casa?', 'No. Il budget cantonale 2026 di CHF 200’000 era un aiuto settoriale per l’agricoltura ed è indicato come esaurito. Non è un incentivo per abitazioni private.'],
      ['12,91 e 14 Rp./kWh sono tariffe ewz vigenti?', 'Non sono verificate come tariffe definitive. Sono state annunciate ufficialmente, ma la pagina tariffaria ewz le indica ancora soggette all’approvazione del Consiglio comunale. Prima di ogni calcolo verificare la VVRE/EEA finale.'],
    ],
    sourceLabel: 'Fonti ufficiali, verificate il',
    sourceNames: ['Incentivi Città di Zurigo', 'Programma energetico cantonale', 'Aiuti agricoli', 'Pronovo', 'Tariffe ewz'],
  },
  en: {
    home: 'Home',
    overview: 'Subsidies',
    place: 'Canton Zurich',
    tag: 'Subsidies & grants',
    title: 'Solar panel subsidies Canton Zurich 2026',
    intro:
      'In Canton Zurich, federal, cantonal, city and utility programmes must be kept separate. For an ordinary private photovoltaic system, the federal one-time remuneration via Pronovo is relevant; the City of Zurich adds its own programme.',
    federalEyebrow: 'Federal level',
    federalTitle: 'Federal subsidy: the one-time remuneration (OUR)',
    federalBody:
      'The federal one-time remuneration also applies in Canton Zurich and is administered by Pronovo. The final amount depends on factors including commissioning date, capacity, system type and applicable bonuses. A universal percentage or CHF/kWp formula is therefore not reliable.',
    federalBullets: [
      'Pronovo calculates and decides eligibility under the rules in force.',
      'The OUR is a federal subsidy, not a general cantonal Zurich PV subsidy.',
      'Use the current Pronovo calculator and final decision for the amount.',
    ],
    federalNote:
      'Important: the City of Zurich maximum totals below already include the Pronovo share. Do not add Pronovo a second time.',
    cantonEyebrow: 'Cantonal level',
    cantonTitle: 'Canton Zurich ordinary energy promotion programme',
    cantonBody:
      'The ordinary cantonal energy programme does not provide a general grant for private battery storage or ordinary photovoltaic systems. It must be distinguished from municipal programmes and sector-specific cantonal programmes.',
    cantonCards: [
      ['No general household grant', 'The ordinary programme lists no general contribution for ordinary private PV or domestic battery storage.', 'Canton Zurich'],
      ['Agricultural exception', `In 2026, up to ${chf(agriculturalBattery as number)} in cantonal funds were reserved for agricultural battery storage. The budget is exhausted and does not cover households.`, 'Sector-specific'],
      ['Tax deductions', 'Energy-related investments may be deductible under the applicable tax rules. Check the requirements separately.', 'Federal & Canton'],
    ],
    cityEyebrow: 'City of Zurich',
    cityTitle: 'City PV and battery grants from 1 August 2026',
    cityIntro:
      'The City of Zurich supports these projects through ewz. This is not a cantonal grant and applies only within the city.',
    obligation:
      'The cantonal solar obligation is separate from these grants: depending on the project, it concerns new builds and major roof renovations. A legally required minimum output is not a voluntary subsidy measure and is not eligible under the city PV programme.',
    pvTitle: 'Photovoltaics: maximum total contributions',
    pvBody:
      'The city table states maximum total contributions, City including Pronovo. The legally required minimum output for new builds is not eligible.',
    pvBullets: [
      `Base contribution: ${chf(cityPv.baseChf as number)}`,
      `Up to 30 kWp: ${chf(cityPv.upTo30KwpChfPerKwp as number)}/kWp`,
      `From 30 to 100 kWp: ${chf(cityPv.from30To100KwpChfPerAdditionalKwp as number)}/kWp for each additional kWp`,
      `Above 100 kWp: ${chf(cityPv.above100KwpChfPerAdditionalKwp as number)}/kWp for each additional kWp`,
      `Additional ${chf(cityPv.permittedExistingBuildingAdditionalChf as number)} for permit-required PV on existing buildings`,
    ],
    pvWarning:
      'Do not double-count: these maximum totals include Pronovo. Applications are submitted separately to the city and federal programme, but the Pronovo share must not be added to the city maximum.',
    batteryTitle: 'Stationary battery storage',
    batteryBody:
      'Stationary storage is eligible when combined with a PV system and a grid-compatible energy-management system.',
    batteryBullets: [
      `Base contribution ${chf(cityBattery.baseChf as number)} plus ${chf(cityBattery.chfPerKwh as number)}/kWh`,
      `Second-life cells: an additional ${chf(cityBattery.secondLifeChfPerKwh as number)}/kWh`,
      `At least ${cityBattery.minimumKwh as number} kWh and no more than ${cityBattery.maximumKwh as number} kWh per storage system`,
      `No more than ${cityBattery.maximumKwhPerInstalledKw as number} kWh storage capacity per installed kW of PV`,
      'PV system and grid-compatible energy-management system behind the same connection; no lead batteries',
    ],
    cityTiming:
      'The application must be submitted before construction starts. The revised provisions apply to applications from 1 August 2026.',
    utilityEyebrow: 'Utility / tariff status not final',
    utilityTitle: 'ewz 2026 feed-in: announced, not a definitive current tariff',
    utilityBody: `The official City Council announcement gives an average of ${rp(ewzFeedIn.announcedAverageRpPerKwh as number)} for 2026 and ${rp(ewzFeedIn.announcedSolarquartierRpPerKwh as number)} in the ewz.solarquartier model. However, the official ewz tariff page still says that the 2026 arrangement is subject to approval by the City Council. Until the final VVRE/EEA ordinance is published, these are announced values, not a confirmed current tariff.`,
    utilityNote:
      'For yield calculations, check the final VVRE/EEA tariff and do not treat the announced values as guaranteed.',
    legalEyebrow: 'Applications and attribution',
    legalTitle: 'Keep the responsible programme clear',
    steps: [
      ['1', 'Check Pronovo', 'Determine the federal OUR with the current Pronovo calculator or final decision.'],
      ['2', 'Assign the programme', 'Do not merge Canton, City of Zurich and ewz into one subsidy.'],
      ['3', 'Apply before work', 'Submit the city applications for PV and batteries in time.'],
      ['4', 'Keep tariffs current', 'Check the final ewz tariff for feed-in and guarantees of origin.'],
    ],
    ctaTitle: 'Assign Zurich subsidies correctly',
    ctaBody:
      'Compare quotes and ask your installer which authority is responsible for your project. The decision of the responsible authority remains decisive.',
    ctaButton: 'Request a free quote',
    ctaCompare: 'Or compare quotes first',
    more: 'More information',
    faqTitle: 'Frequently asked questions',
    faqs: [
      ['Does the canton provide a general battery grant?', 'No. The ordinary cantonal programme has no general private battery grant. The City of Zurich has a separate programme from 1 August 2026 with its own conditions.'],
      ['How much is the Zurich PV subsidy?', 'In the City of Zurich, from 1 August 2026, the maximum total contributions include Pronovo: CHF 5,000 base, CHF 450/kWp up to 30 kWp, then CHF 350/kWp up to 100 kWp and CHF 310/kWp above that. Do not add Pronovo to these city maximums. Outside the city, calculate the OUR through Pronovo.'],
      ['Is the agricultural battery aid available for a home?', 'No. The 2026 cantonal budget of CHF 200,000 was a sector-specific agricultural investment aid and is listed as exhausted. It is not a grant for private homes.'],
      ['Are 12.91 and 14 Rp./kWh current ewz tariffs?', 'Not definitively verified. They were officially announced, but the ewz tariff page still says the 2026 schedule is subject to City Council approval. Check the final VVRE/EEA rules before making a financial calculation.'],
    ],
    sourceLabel: 'Official sources checked on',
    sourceNames: ['City of Zurich grants', 'Cantonal energy programme', 'Agricultural investment aid', 'Pronovo', 'ewz tariff page'],
  },
} as const;

type GuideCopy = (typeof copy)[ZurichGuideLocale];

const links = {
  de: { home: '/', overview: '/foerderungen', quote: '/anfrage', compare: '/solaranlage-offerte-einholen' },
  fr: { home: '/fr', overview: '/fr/subventions-solaires', quote: '/fr/demande', compare: '/fr/demander-offre-panneau-solaire' },
  it: { home: '/it', overview: '/it/incentivi-solari', quote: '/it/richiesta', compare: '/it/richiedere-preventivo-solare' },
  en: { home: '/en', overview: '/en/solar-subsidies', quote: '/en/request', compare: '/en/get-solar-panel-quotes' },
} as const;

function SourceLink({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="text-[#fcb210] hover:underline">
      {children}
    </a>
  );
}

export default function ZurichIncentivesGuide({ locale }: { locale: ZurichGuideLocale }) {
  const t: GuideCopy = copy[locale];
  const l = links[locale];
  const faqs = t.faqs.map(([question, answer]) => ({ question, answer }));

  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden pt-28 pb-16" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #fcb210 0%, transparent 55%)' }} />
        <div className="relative mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <nav className="mb-10 flex items-center gap-1.5 text-sm text-white/40">
            <Link href={l.home} className="hover:text-white/70 transition-colors">{t.home}</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href={l.overview} className="hover:text-white/70 transition-colors">{t.overview}</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/70">{t.place}</span>
          </nav>
          <div className="mb-12 max-w-3xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-400">
              <Sun className="h-3.5 w-3.5" /> {t.tag}
            </span>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">{t.title}</h1>
            <p className="text-lg leading-relaxed text-gray-400">{t.intro}</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { val: 'Pronovo EIV', sub: t.federalEyebrow, note: locale === 'de' ? 'Betrag individuell berechnen' : locale === 'fr' ? 'Montant à calculer individuellement' : locale === 'it' ? 'Importo da calcolare individualmente' : 'Amount calculated individually' },
              { val: '01.08.2026', sub: t.cityEyebrow, note: locale === 'de' ? 'Neue Stadtbeiträge' : locale === 'fr' ? 'Nouvelles aides municipales' : locale === 'it' ? 'Nuovi incentivi cittadini' : 'New city grants' },
              { val: locale === 'de' ? 'Keine Doppelzählung' : locale === 'fr' ? 'Sans double comptage' : locale === 'it' ? 'Nessun doppio conteggio' : 'No double counting', sub: t.pvTitle, note: locale === 'de' ? 'Stadt-Maximum inkl. Pronovo' : locale === 'fr' ? 'Maximum municipal, Pronovo inclus' : locale === 'it' ? 'Massimale cittadino, Pronovo incluso' : 'City maximum including Pronovo' },
            ].map((stat) => (
              <div key={stat.val} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-center">
                <p className="mb-0.5 text-xl font-bold text-white">{stat.val}</p>
                <p className="text-sm font-semibold text-[#fcb210]">{stat.sub}</p>
                <p className="mt-1 text-xs text-gray-500">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] space-y-20 px-6 py-16 sm:px-10 lg:px-16">
        <section className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#fcb210]">{t.federalEyebrow}</p>
            <h2 className="mb-5 text-2xl font-bold text-gray-900 sm:text-3xl">{t.federalTitle}</h2>
            <p className="mb-6 leading-relaxed text-gray-600">{t.federalBody}</p>
            <ul className="mb-6 space-y-3">
              {t.federalBullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#fcb210]" />
                  <span className="text-sm leading-relaxed text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-xl border border-orange-200 bg-orange-50 p-5">
              <p className="text-sm leading-relaxed text-orange-800">{t.federalNote}</p>
            </div>
          </div>
          <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-white/60">{t.federalTitle}</p>
            <div className="space-y-4">
              {[
                [locale === 'de' ? 'Programm' : locale === 'fr' ? 'Programme' : locale === 'it' ? 'Programma' : 'Programme', 'Pronovo EIV'],
                [locale === 'de' ? 'Berechnung' : locale === 'fr' ? 'Calcul' : locale === 'it' ? 'Calcolo' : 'Calculation', locale === 'de' ? 'Individuell nach Pronovo-Regeln' : locale === 'fr' ? 'Individuel selon Pronovo' : locale === 'it' ? 'Individuale secondo Pronovo' : 'Individual under Pronovo rules'],
                [locale === 'de' ? 'Verhältnis' : locale === 'fr' ? 'Relation' : locale === 'it' ? 'Relazione' : 'Relation', locale === 'de' ? 'Bundesbeitrag' : locale === 'fr' ? 'Aide fédérale' : locale === 'it' ? 'Incentivo federale' : 'Federal subsidy'],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-xl bg-white/5 px-5 py-3">
                  <span className="text-sm font-medium text-white/70">{label}</span>
                  <span className="text-right font-bold text-white">{value}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-white/50">
              <SourceLink href={ZURICH_INCENTIVE_SOURCES.pronovo}>Pronovo</SourceLink>
            </p>
          </div>
        </section>

        <section>
          <div className="mb-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#fcb210]">{t.cantonEyebrow}</p>
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">{t.cantonTitle}</h2>
            <p className="max-w-3xl leading-relaxed text-gray-600">{t.cantonBody}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {t.cantonCards.map(([title, text, badge]) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-8">
                <span className="mb-4 inline-block rounded-full bg-orange-100 px-2.5 py-1 text-xs font-bold text-orange-700">{badge}</span>
                <h3 className="mb-3 text-base font-bold text-gray-900">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-gray-500">
            <SourceLink href={ZURICH_INCENTIVE_SOURCES.cantonEnergy}>{t.cantonEyebrow}</SourceLink>
            {' · '}
            <SourceLink href={ZURICH_INCENTIVE_SOURCES.cantonAgriculture}>{locale === 'de' ? 'Landwirtschaftliche Investitionshilfen' : locale === 'fr' ? 'Aides agricoles' : locale === 'it' ? 'Aiuti agricoli' : 'Agricultural investment aid'}</SourceLink>
          </p>
        </section>

        <section className="rounded-3xl bg-gradient-to-br from-[#0d1117] to-[#1a2236] p-10 sm:p-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-orange-400">{t.cityEyebrow}</p>
          <h2 className="mb-5 text-2xl font-bold text-white sm:text-3xl">{t.cityTitle}</h2>
          <p className="mb-8 max-w-3xl leading-relaxed text-gray-400">{t.cityIntro}</p>
          <p className="mb-8 max-w-3xl border-l-2 border-orange-400 pl-4 text-sm leading-relaxed text-gray-300">{t.obligation}</p>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-7">
              <h3 className="mb-3 text-xl font-bold text-white">{t.pvTitle}</h3>
              <p className="mb-5 text-sm leading-relaxed text-gray-400">{t.pvBody}</p>
              <ul className="space-y-3">
                {t.pvBullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#fcb210]" /> {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-xl border border-orange-500/20 bg-orange-500/10 p-4 text-sm leading-relaxed text-orange-200">{t.pvWarning}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-7">
              <h3 className="mb-3 text-xl font-bold text-white">{t.batteryTitle}</h3>
              <p className="mb-5 text-sm leading-relaxed text-gray-400">{t.batteryBody}</p>
              <ul className="space-y-3">
                {t.batteryBullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#fcb210]" /> {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-orange-200">{t.cityTiming}</p>
            </div>
          </div>
          <p className="mt-6 text-xs text-white/50">
            <SourceLink href={ZURICH_INCENTIVE_SOURCES.cityFunding}>{locale === 'de' ? 'Offizielle Förderübersicht der Stadt Zürich' : locale === 'fr' ? 'Page officielle des aides de la Ville' : locale === 'it' ? 'Pagina ufficiale degli incentivi della Città' : 'Official City of Zurich grants page'}</SourceLink>
          </p>
        </section>

        <section className="rounded-3xl border border-amber-200 bg-amber-50 p-10 sm:p-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-amber-700">{t.utilityEyebrow}</p>
          <h2 className="mb-5 text-2xl font-bold text-gray-900 sm:text-3xl">{t.utilityTitle}</h2>
          <p className="max-w-4xl leading-relaxed text-gray-700">{t.utilityBody}</p>
          <p className="mt-5 text-sm font-semibold leading-relaxed text-amber-900">{t.utilityNote}</p>
          <p className="mt-5 text-xs text-gray-600">
            <SourceLink href={ZURICH_INCENTIVE_SOURCES.ewzAnnouncement}>{locale === 'de' ? 'Stadtratsmitteilung' : locale === 'fr' ? 'Communication officielle' : locale === 'it' ? 'Comunicazione ufficiale' : 'Official announcement'}</SourceLink>
            {' · '}
            <SourceLink href={ZURICH_INCENTIVE_SOURCES.ewzCurrentRates}>{locale === 'de' ? 'Aktuelle ewz-Tarifseite (Genehmigung vorbehalten)' : locale === 'fr' ? 'Page tarifaire ewz (sous réserve d’approbation)' : locale === 'it' ? 'Pagina tariffaria ewz (soggetta ad approvazione)' : 'ewz tariff page (subject to approval)'}</SourceLink>
          </p>
        </section>

        <section>
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#fcb210]">{t.legalEyebrow}</p>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">{t.legalTitle}</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.steps.map(([number, title, text]) => (
              <div key={number} className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-7 text-center">
                <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#ffc812] to-[#fcb210] text-base font-bold text-white">{number}</div>
                <h3 className="mb-3 text-sm font-bold text-gray-900">{title}</h3>
                <p className="text-xs leading-relaxed text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100 p-10 text-center sm:p-14">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#ffc812] to-[#fcb210]">
            <FileText className="h-7 w-7 text-white" />
          </div>
          <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">{t.ctaTitle}</h2>
          <p className="mx-auto mb-8 max-w-xl leading-relaxed text-gray-600">{t.ctaBody}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={l.quote} className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white shadow-lg transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, #ffc812, #fcb210)' }}>
              {t.ctaButton} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-5 text-sm text-gray-500">
            {t.ctaCompare}:{' '}
            <Link href={l.compare} className="font-medium text-[#fcb210] hover:underline">{t.more}</Link>
          </p>
        </section>

        <section>
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#fcb210]">{t.more}</p>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">{t.faqTitle}</h2>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4 text-sm font-semibold text-gray-900 select-none">
                  {faq.question}
                  <span className="ml-4 flex-shrink-0 text-lg text-[#fcb210] transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <div className="border-t border-gray-50 px-6 pb-5 text-sm leading-relaxed text-gray-600"><p className="pt-4">{faq.answer}</p></div>
              </details>
            ))}
          </div>
          <p className="mt-10 text-center text-xs text-gray-500">
            {t.sourceLabel} {ZURICH_INCENTIVE_SOURCE_CHECKED_AT}: {t.sourceNames.join(' · ')}
          </p>
        </section>
      </div>

      <FaqSchema faqs={faqs} />
    </main>
  );
}