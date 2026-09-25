'use client';

import { useState, useRef, useEffect, memo, useCallback } from 'react';
import { loadGoogleMaps } from '@/lib/googleMapsLoader';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  Check, X, MapPin, Search, ChevronLeft,
  ScanSearch, Users, Award,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getConsent } from '@/lib/cookieConsent';
import { ECONOMIC_FACTS } from '@/lib/facts';
import { leadContextFromValues } from '@/lib/leadContext';
import RoofAnalysis from '@/components/RoofAnalysis';

declare global {
  interface Window {
    google?: typeof google;
    oaiq?: (...args: any[]) => void;
    __pvproOpenAIAdsInitialized?: boolean;
  }
}

const TOTAL_STEPS = 6;

const stepVariants = {
  enter: (d: number) => ({ opacity: 0, y: d > 0 ? 14 : -14 }),
  center: { opacity: 1, y: 0 },
};

const ALL_ICONS = [
  '/icons/icon-check.webp',
  '/icons/icon-x.webp',
  '/icons/icon-question.webp',
  '/icons/icon-einfamilienhaus.webp',
  '/icons/icon-mehrfamilienhaus.webp',
  '/icons/icon-gewerbe.webp',
  '/icons/icon-satteldach.webp',
  '/icons/icon-pultdach.webp',
  '/icons/icon-flachdach.webp',
];

const formIconSrc = (src: string) => src.replace('/icons/', '/icons/form/');

// Accepts any way of writing a Swiss number (+41, 0041, 41, 0, or none, with or
// without spaces/symbols). Valid only when the significant part is exactly 9 digits
// (true for both mobiles and landlines), so single-digit / too-short / too-long
// numbers are rejected without blocking legitimately-formatted ones.
function isValidSwissPhone(raw: string): boolean {
  const digits = (raw || '').replace(/\D/g, '');
  let significant = digits;
  if (significant.startsWith('0041')) significant = significant.slice(4);
  else if (significant.startsWith('41') && significant.length === 11) significant = significant.slice(2);
  else if (significant.startsWith('0')) significant = significant.slice(1);
  return significant.length === 9 && /^[1-9]/.test(significant);
}

// Extracts the significant national digits regardless of how the prefix is written.
// Does NOT clip to 9: extra digits stay visible so too-long numbers can be rejected
// rather than silently truncated into a valid-looking (wrong) number.
function swissSignificantDigits(raw: string): string {
  let d = (raw || '').replace(/\D/g, '');
  if (d.startsWith('0041')) d = d.slice(4);
  else if (d.startsWith('41') && d.length > 9) d = d.slice(2);
  else if (d.startsWith('0')) d = d.slice(1);
  return d.slice(0, 12);
}

// Live, prefix-agnostic formatting in international style: "79 123 45 67".
// Any digits beyond the 9th are kept as a trailing group so an over-long entry
// stays visible to the user and fails validation.
function formatSwissPhoneDisplay(raw: string): string {
  const d = swissSignificantDigits(raw);
  return [d.slice(0, 2), d.slice(2, 5), d.slice(5, 7), d.slice(7, 9), d.slice(9)].filter(Boolean).join(' ');
}

type ManualAddress = { street: string; houseNumber: string; zipCode: string; city: string };
type ManualField = keyof ManualAddress;

function manualAddressErrors(address: ManualAddress): Record<ManualField, boolean> {
  const hasTwoLetters = (value: string) => (value.match(/\p{L}/gu) ?? []).length >= 2;
  return {
    street: !hasTwoLetters(address.street.trim()),
    houseNumber: !/^\d+[a-zA-Z]?(?:[\s/-][a-zA-Z0-9]+)*$/.test(address.houseNumber.trim()),
    zipCode: !/^[1-9]\d{3}$/.test(address.zipCode.trim()),
    city: !hasTwoLetters(address.city.trim()),
  };
}

const i18n = {
  de: {
    step1Title: 'Sind Sie Eigentümer der Liegenschaft?',
    step1Sub: 'Nur Eigentümer können die Eignung Ihres Dachs prüfen lassen.',
    step2Title: 'Um welchen Gebäudetyp handelt es sich?',
    step2Sub: 'Wählen Sie den Typ Ihrer Liegenschaft.',
    step3Title: 'Welche Dachform kommt Ihrer am nächsten?',
    step3Sub: 'Wählen Sie die Dachform, die Ihrer am ähnlichsten ist.',
    step4Title: 'Möchten Sie einen Stromspeicher integrieren?',
    step4Sub: `Ein Speicher erhöht Ihren Eigenverbrauch auf bis zu ${ECONOMIC_FACTS.selfConsumptionPercent.withStorage.max}%.`,
    step5Title: 'Wo befindet sich Ihre Liegenschaft?',
    step5Sub: 'Wir prüfen die Eignung Ihres Dachs und verfügbare Förderungen.',
    step6Title: 'Fast geschafft!',
    step6Sub: 'Geben Sie Ihre Kontaktdaten ein, um Ihre kostenlosen Offerten zu erhalten.',
    addressPlaceholder: 'z.B. Bahnhofstrasse 10, 8001 Zürich',
    addressError: 'Bitte wählen Sie eine Adresse aus der Liste aus.',
    manualToggle: 'Adresse manuell eingeben',
    automaticToggle: 'Zur Adresssuche zurückkehren',
    manualHelp: 'Falls Ihre Adresse nicht gefunden wird, können Sie sie selbst eingeben.',
    street: 'Strasse', houseNumber: 'Hausnummer', zipCode: 'Postleitzahl', city: 'Ort',
    manualError: 'Bitte geben Sie eine gültige Strasse, Hausnummer, vierstellige Schweizer Postleitzahl und einen Ort ein.',
    mapsUnavailable: 'Die Adresssuche ist derzeit nicht verfügbar. Bitte geben Sie Ihre Adresse manuell ein.',
    noResults: 'Keine Adressen gefunden. Versuchen Sie eine andere Suche oder geben Sie Ihre Adresse manuell ein.',
    firstName: 'Vorname',
    lastName: 'Nachname',
    email: 'E-Mail',
    phone: 'Telefonnummer',
    consentText: 'Ich bin einverstanden, dass PvPro.ch meine Angaben an bis zu 3 geprüfte Solarinstallateure weitergibt, damit diese mir eine Offerte erstellen.',
    privacyLinkLabel: 'Datenschutzerklärung',
    privacyHref: '/datenschutz',
    submit: 'Kostenlose Offerten anfordern',
    submitting: 'Wird gesendet…',
    next: 'Weiter',
    compareOffers: 'Offerten vergleichen',
    back: 'Zurück',
    loadingTitle: 'Wir suchen passende Angebote…',
    loadingStep1: 'Wir analysieren Ihre Angaben und Adresse',
    loadingStep2: 'Installateure in Ihrem Kanton werden verglichen',
    loadingStep3: '3 passende Installateure gefunden',
    renterError: 'Leider können wir nur Eigentümern helfen. Als Mieter wenden Sie sich bitte an Ihren Vermieter.',
    requiredFields: 'Bitte füllen Sie alle Pflichtfelder aus.',
    invalidEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
    invalidPhone: 'Bitte geben Sie eine gültige Schweizer Telefonnummer ein.',
    submitError: 'Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.',
    yes: 'Ja',
    no: 'Nein',
    dontKnow: 'Weiss nicht',
    detachedHouse: 'Einfamilienhaus',
    apartmentBuilding: 'Mehrfamilienhaus',
    commercial: 'Gewerbe',
    other: 'Sonstiges',
    pitchedRoof: 'Satteldach',
    monopitchRoof: 'Pultdach',
    flatRoof: 'Flachdach',
    dankeUrl: '/danke',
  },
  fr: {
    step1Title: 'Êtes-vous propriétaire du bien immobilier?',
    step1Sub: 'Seuls les propriétaires peuvent faire évaluer l\'aptitude de leur toit.',
    step2Title: 'De quel type de bâtiment s\'agit-il?',
    step2Sub: 'Sélectionnez le type de votre bien immobilier.',
    step3Title: 'Quelle forme de toit correspond le mieux à la vôtre?',
    step3Sub: 'Sélectionnez la forme de toit qui ressemble le plus à la vôtre.',
    step4Title: 'Souhaitez-vous intégrer un système de stockage d\'énergie?',
    step4Sub: `Un stockage augmente votre autoconsommation jusqu'à ${ECONOMIC_FACTS.selfConsumptionPercent.withStorage.max}%.`,
    step5Title: 'Où se situe votre bien immobilier?',
    step5Sub: 'Nous vérifions l\'aptitude de votre toit et les subventions disponibles.',
    step6Title: 'Presque terminé!',
    step6Sub: 'Saisissez vos coordonnées pour recevoir vos devis gratuits.',
    addressPlaceholder: 'p.ex. Rue du Centre 10, 1003 Lausanne',
    addressError: 'Veuillez sélectionner une adresse dans la liste.',
    manualToggle: 'Saisir l’adresse manuellement',
    automaticToggle: 'Revenir à la recherche d’adresse',
    manualHelp: 'Si votre adresse est introuvable, vous pouvez la saisir vous-même.',
    street: 'Rue', houseNumber: 'Numéro', zipCode: 'Code postal', city: 'Localité',
    manualError: 'Veuillez saisir une rue, un numéro, un code postal suisse à quatre chiffres et une localité valides.',
    mapsUnavailable: 'La recherche d’adresse est indisponible. Veuillez saisir votre adresse manuellement.',
    noResults: 'Aucune adresse trouvée. Essayez une autre recherche ou saisissez votre adresse manuellement.',
    firstName: 'Prénom',
    lastName: 'Nom',
    email: 'E-mail',
    phone: 'Numéro de téléphone',
    consentText: 'J’accepte que PvPro.ch transmette mes données à un maximum de 3 installateurs solaires vérifiés afin qu’ils puissent me préparer un devis.',
    privacyLinkLabel: 'Protection des données',
    privacyHref: '/fr/protection-des-donnees',
    submit: 'Demander des devis gratuits',
    submitting: 'Envoi en cours…',
    next: 'Suivant',
    compareOffers: 'Comparer les offres',
    back: 'Retour',
    loadingTitle: 'Nous recherchons les meilleures offres…',
    loadingStep1: 'Nous analysons vos informations et votre adresse',
    loadingStep2: 'Les installateurs de votre canton sont comparés',
    loadingStep3: '3 installateurs correspondants trouvés',
    renterError: 'Malheureusement, nous ne pouvons aider que les propriétaires. En tant que locataire, veuillez contacter votre bailleur.',
    requiredFields: 'Veuillez remplir tous les champs obligatoires.',
    invalidEmail: 'Veuillez saisir une adresse e-mail valide.',
    invalidPhone: 'Veuillez saisir un numéro de téléphone suisse valide.',
    submitError: 'Votre demande n’a pas pu être envoyée. Veuillez réessayer.',
    yes: 'Oui',
    no: 'Non',
    dontKnow: 'Je ne sais pas',
    detachedHouse: 'Maison individuelle',
    apartmentBuilding: 'Immeuble résidentiel',
    commercial: 'Commerce',
    other: 'Autre',
    pitchedRoof: 'Toit à deux pentes',
    monopitchRoof: 'Toit monopente',
    flatRoof: 'Toit plat',
    dankeUrl: '/fr/merci',
  },
  en: {
    step1Title: 'Are you the owner of the property?',
    step1Sub: 'Only owners can have their roof\'s suitability assessed.',
    step2Title: 'What type of building is it?',
    step2Sub: 'Select your property type.',
    step3Title: 'Which roof shape best matches yours?',
    step3Sub: 'Select the roof shape closest to your own.',
    step4Title: 'Would you like to include a battery storage system?',
    step4Sub: `Storage increases your self-consumption to up to ${ECONOMIC_FACTS.selfConsumptionPercent.withStorage.max}%.`,
    step5Title: 'Where is your property located?',
    step5Sub: 'We\'ll assess your roof\'s suitability and available subsidies.',
    step6Title: 'Almost done!',
    step6Sub: 'Enter your contact details to receive your free quotes.',
    addressPlaceholder: 'e.g. Bahnhofstrasse 10, 8001 Zürich',
    addressError: 'Please select an address from the list.',
    manualToggle: 'Enter address manually',
    automaticToggle: 'Return to address search',
    manualHelp: 'If your address cannot be found, you can enter it yourself.',
    street: 'Street', houseNumber: 'House number', zipCode: 'Postal code', city: 'City',
    manualError: 'Please enter a valid street, house number, four-digit Swiss postal code and city.',
    mapsUnavailable: 'Address search is unavailable. Please enter your address manually.',
    noResults: 'No addresses found. Try another search or enter your address manually.',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'E-mail',
    phone: 'Phone number',
    consentText: 'I agree that PvPro.ch may share my information with up to 3 verified solar installers so that they can prepare a quote for me.',
    privacyLinkLabel: 'Privacy Policy',
    privacyHref: '/en/privacy',
    submit: 'Request free quotes',
    submitting: 'Sending…',
    next: 'Next',
    compareOffers: 'Compare offers',
    back: 'Back',
    loadingTitle: 'Searching for matching offers…',
    loadingStep1: 'Analysing your details and address',
    loadingStep2: 'Comparing installers in your canton',
    loadingStep3: '3 matching installers found',
    renterError: 'Unfortunately, we can only help owners. As a tenant, please contact your landlord.',
    requiredFields: 'Please fill in all required fields.',
    invalidEmail: 'Please enter a valid email address.',
    invalidPhone: 'Please enter a valid Swiss phone number.',
    submitError: 'Your request could not be sent. Please try again.',
    yes: 'Yes',
    no: 'No',
    dontKnow: 'Not sure',
    detachedHouse: 'Detached house',
    apartmentBuilding: 'Apartment building',
    commercial: 'Commercial',
    other: 'Other',
    pitchedRoof: 'Pitched roof',
    monopitchRoof: 'Monopitch roof',
    flatRoof: 'Flat roof',
    dankeUrl: '/en/thank-you',
  },
  it: {
    step1Title: 'Sei il proprietario dell\'immobile?',
    step1Sub: 'Solo i proprietari possono far valutare l\'idoneità del loro tetto.',
    step2Title: 'Di che tipo di edificio si tratta?',
    step2Sub: 'Seleziona il tipo del tuo immobile.',
    step3Title: 'Quale forma di tetto si avvicina di più alla tua?',
    step3Sub: 'Seleziona la forma del tetto più simile alla tua.',
    step4Title: 'Desideri integrare un sistema di accumulo?',
    step4Sub: `Un accumulo aumenta il tuo autoconsumo fino all'${ECONOMIC_FACTS.selfConsumptionPercent.withStorage.max}%.`,
    step5Title: 'Dove si trova il tuo immobile?',
    step5Sub: 'Verificheremo l\'idoneità del tuo tetto e gli incentivi disponibili.',
    step6Title: 'Ci siamo quasi!',
    step6Sub: 'Inserisci i tuoi dati di contatto per ricevere i preventivi gratuiti.',
    addressPlaceholder: 'es. Via Lugano 10, 6900 Lugano',
    addressError: 'Seleziona un indirizzo dalla lista.',
    manualToggle: 'Inserisci l’indirizzo manualmente',
    automaticToggle: 'Torna alla ricerca dell’indirizzo',
    manualHelp: 'Se non trovi il tuo indirizzo, puoi inserirlo manualmente.',
    street: 'Via', houseNumber: 'Numero civico', zipCode: 'Codice postale', city: 'Località',
    manualError: 'Inserisci una via, un numero civico, un codice postale svizzero di quattro cifre e una località validi.',
    mapsUnavailable: 'La ricerca dell’indirizzo non è disponibile. Inserisci l’indirizzo manualmente.',
    noResults: 'Nessun indirizzo trovato. Prova un’altra ricerca o inseriscilo manualmente.',
    firstName: 'Nome',
    lastName: 'Cognome',
    email: 'E-mail',
    phone: 'Numero di telefono',
    consentText: 'Acconsento che PvPro.ch trasmetta i miei dati a un massimo di 3 installatori verificati perché mi preparino un preventivo.',
    privacyLinkLabel: 'Protezione dei dati',
    privacyHref: '/it/protezione-dati',
    submit: 'Richiedi preventivi gratuiti',
    submitting: 'Invio in corso…',
    next: 'Avanti',
    compareOffers: 'Confronta le offerte',
    back: 'Indietro',
    loadingTitle: 'Stiamo cercando le offerte migliori…',
    loadingStep1: 'Analizziamo le tue informazioni e l\'indirizzo',
    loadingStep2: 'I tecnici del tuo cantone vengono confrontati',
    loadingStep3: '3 tecnici corrispondenti trovati',
    renterError: 'Purtroppo possiamo aiutare solo i proprietari. Come inquilino, contatta il tuo proprietario di casa.',
    requiredFields: 'Compila tutti i campi obbligatori.',
    invalidEmail: 'Inserisci un indirizzo e-mail valido.',
    invalidPhone: 'Inserisci un numero di telefono svizzero valido.',
    submitError: 'Non è stato possibile inviare la richiesta. Riprova.',
    yes: 'Sì',
    no: 'No',
    dontKnow: 'Non so',
    detachedHouse: 'Casa unifamiliare',
    apartmentBuilding: 'Condominio',
    commercial: 'Commerciale',
    other: 'Altro',
    pitchedRoof: 'Tetto a falda',
    monopitchRoof: 'Tetto a unica falda',
    flatRoof: 'Tetto piano',
    dankeUrl: '/it/grazie',
  },
};

/* ─── Option Card ─────────────────────────────────────────────────────────── */
interface OptionCardProps {
  label: string;
  sublabel?: string;
  isSelected: boolean;
  onClick: () => void;
  imageSrc: string;
}

const OptionCard = memo(function OptionCard({ label, sublabel, isSelected, onClick, imageSrc }: OptionCardProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.025, y: -2 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="relative flex flex-col items-center justify-center rounded-2xl px-4 py-4 sm:py-5 transition-[background-color,border-color,box-shadow] duration-150 bg-white w-full"
      style={{
        border: isSelected ? '2.5px solid #fcb210' : '2px solid #e5e7eb',
        boxShadow: isSelected
          ? '0 6px 20px rgba(249,115,22,0.16)'
          : '0 1px 4px rgba(0,0,0,0.04)',
        background: isSelected ? '#FFF7ED' : '#ffffff',
      }}
    >
      <div className="flex items-center justify-center w-full h-16 sm:h-20">
        <img src={formIconSrc(imageSrc)} alt={label} decoding="async" className="w-full h-full object-contain" style={{ filter: 'invert(1) brightness(0) saturate(100%) invert(59%) sepia(70%) saturate(1500%) hue-rotate(346deg) brightness(105%)' }} />
      </div>
      <p className="text-sm sm:text-base font-bold text-gray-900 text-center leading-tight mt-2">
        {label}
      </p>
      {sublabel && (
        <p className="text-xs text-gray-400 mt-0.5">{sublabel}</p>
      )}
      {isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center shadow" style={{ background: '#fcb210' }}
        >
          <Check className="w-3 h-3 text-white" strokeWidth={4} />
        </motion.div>
      )}
    </motion.button>
  );
});

/* ─── Step wrapper ────────────────────────────────────────────────────────── */
function StepWrapper({ title, sub, children }: { title: string; sub: string; children: React.ReactNode }) {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-1.5">{title}</h1>
      <p className="text-sm sm:text-base text-gray-500 mb-5 leading-relaxed">{sub}</p>
      {children}
    </div>
  );
}

/* ─── Main component ──────────────────────────────────────────────────────── */
interface AnfrageFormProps {
  locale?: 'de' | 'fr' | 'en' | 'it';
}

export default function AnfrageForm({ locale = 'de' }: AnfrageFormProps) {
  const t = i18n[locale] ?? i18n.de;
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const reduceMotion = useReducedMotion();
  const selectionLockRef = useRef(false);
  const [formData, setFormData] = useState<any>({
    isOwner: null, propertyType: null, roofType: null, wantsBattery: null,
    address: '', zipCode: '', firstName: '', lastName: '', email: '', phone: '',
    installerSharingConsent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingTransition, setIsLoadingTransition] = useState(false);
  const [loadingPhase, setLoadingPhase] = useState(1);
  const [addressSuggestions, setAddressSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  const [selectedPlaceCoords, setSelectedPlaceCoords] = useState<any>(null);
  const [isManualAddress, setIsManualAddress] = useState(false);
  const [manualAddress, setManualAddress] = useState<ManualAddress>({ street: '', houseNumber: '', zipCode: '', city: '' });
  const [manualErrors, setManualErrors] = useState<Record<ManualField, boolean>>({ street: false, houseNumber: false, zipCode: false, city: false });
  const [addressSearchMessage, setAddressSearchMessage] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<Record<string, boolean>>({});
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const submitLockRef = useRef(false);
  const autocompleteService = useRef<any>(null);
  const placesService = useRef<any>(null);
  const manualModeRef = useRef(false);
  const addressRequestSeq = useRef(0);

  useEffect(() => {
    if (reduceMotion) selectionLockRef.current = false;
  }, [step, reduceMotion]);

  useEffect(() => {
    ALL_ICONS.forEach(src => {
      const img = new window.Image();
      img.src = formIconSrc(src);
      void img.decode().catch(() => {});
    });
  }, []);

  useEffect(() => {
    if (!errorMsg) return;
    const timer = setTimeout(() => setErrorMsg(null), 5000);
    return () => clearTimeout(timer);
  }, [errorMsg]);

  useEffect(() => {
    if (step !== 5) return;

    const init = () => {
      if (window.google?.maps?.places) {
        autocompleteService.current = new window.google.maps.places.AutocompleteService();
        const div = document.createElement('div');
        placesService.current = new window.google.maps.places.PlacesService(div);
        setAddressSearchMessage(null);
      } else {
        setAddressSearchMessage(t.mapsUnavailable);
      }
    };

    let cancelled = false;
    loadGoogleMaps()
      .then(() => { if (!cancelled) init(); })
      .catch(() => { if (!cancelled) setAddressSearchMessage(t.mapsUnavailable); });
    return () => {
      cancelled = true;
      if (predictionTimer.current) clearTimeout(predictionTimer.current);
      predictionSeq.current += 1;
      addressRequestSeq.current += 1;
    };
  }, [step, t.mapsUnavailable]);

  const predictionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const predictionSeq = useRef(0);
  useEffect(() => {
    return () => {
      if (predictionTimer.current) clearTimeout(predictionTimer.current);
      predictionSeq.current += 1; // invalidate in-flight prediction callbacks
      addressRequestSeq.current += 1; // invalidate in-flight place details
    };
  }, []);
  const handleAddressChange = (value: string) => {
    setFormData((prev: any) => ({ ...prev, address: value, zipCode: '' }));
    setSelectedAddress(null);
    setSelectedPlaceCoords(null);
    setAddressSuggestions([]);
    setAddressSearchMessage(null);
    setErrorMsg(null);
    addressRequestSeq.current += 1;
    if (predictionTimer.current) clearTimeout(predictionTimer.current);
    const seq = ++predictionSeq.current;
    if (value.length > 2 && autocompleteService.current) {
      predictionTimer.current = setTimeout(() => {
        if (seq !== predictionSeq.current || manualModeRef.current) return;
        try {
          autocompleteService.current.getPlacePredictions(
            { input: value, componentRestrictions: { country: 'ch' }, types: ['address'] },
            (predictions: any, status: any) => {
              if (seq !== predictionSeq.current || manualModeRef.current) return;
              if (status === 'OK' && predictions?.length) {
                setAddressSuggestions(predictions);
                setShowSuggestions(true);
              } else {
                setAddressSuggestions([]);
                setShowSuggestions(false);
                setAddressSearchMessage(status === 'ZERO_RESULTS' || status === 'OK' ? t.noResults : t.mapsUnavailable);
              }
            }
          );
        } catch {
          if (seq !== predictionSeq.current || manualModeRef.current) return;
          setAddressSuggestions([]);
          setShowSuggestions(false);
          setAddressSearchMessage(t.mapsUnavailable);
        }
      }, 250);
    } else {
      setShowSuggestions(false);
      if (value.length > 2) setAddressSearchMessage(t.mapsUnavailable);
    }
  };

  const selectAddress = (prediction: any) => {
    if (manualModeRef.current) return;
    if (predictionTimer.current) clearTimeout(predictionTimer.current);
    predictionSeq.current += 1;
    const seq = ++addressRequestSeq.current;
    setFormData((prev: any) => ({ ...prev, address: prediction.description, zipCode: '' }));
    setSelectedAddress(prediction.description);
    setSelectedPlaceCoords(null);
    setAddressSearchMessage(null);
    setShowSuggestions(false);
    if (!placesService.current) {
      setAddressSearchMessage(t.mapsUnavailable);
      return;
    }
    try {
      placesService.current.getDetails(
        { placeId: prediction.place_id, fields: ['geometry', 'address_components'] },
        (place: any, status: any) => {
          if (seq !== addressRequestSeq.current || manualModeRef.current) return;
          if (status !== 'OK') { setAddressSearchMessage(t.mapsUnavailable); return; }
          const updates: any = {};
          if (place?.geometry?.location) {
            updates.lat = place.geometry.location.lat();
            updates.lng = place.geometry.location.lng();
            setSelectedPlaceCoords({ lat: updates.lat, lng: updates.lng });
          }
          const postalComp = place?.address_components?.find(
            (c: any) => c.types.includes('postal_code')
          );
          setFormData((prev: any) => ({
            ...prev,
            address: prediction.description,
            zipCode: postalComp?.long_name ?? '',
          }));
        }
      );
    } catch {
      if (seq === addressRequestSeq.current && !manualModeRef.current) {
        setAddressSearchMessage(t.mapsUnavailable);
      }
    }
  };

  const toggleManualAddress = () => {
    const nextManual = !manualModeRef.current;
    manualModeRef.current = nextManual;
    setIsManualAddress(nextManual);
    if (predictionTimer.current) clearTimeout(predictionTimer.current);
    predictionSeq.current += 1;
    addressRequestSeq.current += 1;
    setShowSuggestions(false);
    setAddressSuggestions([]);
    setSelectedAddress(null);
    setSelectedPlaceCoords(null);
    setAddressSearchMessage(null);
    setErrorMsg(null);
    setManualErrors({ street: false, houseNumber: false, zipCode: false, city: false });
    setFormData((prev: any) => ({ ...prev, address: '', zipCode: '' }));
  };

  const handleManualChange = (field: ManualField, value: string) => {
    addressRequestSeq.current += 1;
    setManualAddress(prev => ({ ...prev, [field]: value }));
    setManualErrors(prev => ({ ...prev, [field]: false }));
    setFormData((prev: any) => ({ ...prev, address: '', zipCode: '' }));
    setSelectedPlaceCoords(null);
    setErrorMsg(null);
  };

  const trackStep = (n: number) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('trackCustom', `AnfrageStep${n}Completed`, { step_number: n });
    }
  };

  const goNext = async () => {
    if (step === 5) {
      if (isManualAddress) {
        const errors = manualAddressErrors(manualAddress);
        setManualErrors(errors);
        if (Object.values(errors).some(Boolean)) { setErrorMsg(t.manualError); return; }
        const { street, houseNumber, zipCode, city } = manualAddress;
        setFormData((prev: any) => ({
          ...prev,
          address: `${street.trim()} ${houseNumber.trim()}, ${zipCode.trim()} ${city.trim()}`,
          zipCode: zipCode.trim(),
        }));
      } else {
        if (!selectedAddress) { setErrorMsg(t.addressError); return; }
        setIsLoadingTransition(true);
        for (let p = 1; p <= 3; p++) { setLoadingPhase(p); await new Promise(r => setTimeout(r, 1400)); }
        setIsLoadingTransition(false);
      }
    }
    trackStep(step);
    setDirection(1);
    setStep(s => s + 1);
  };

  const goBack = () => { selectionLockRef.current = false; setDirection(-1); setStep(s => s - 1); };

  const handleSelect = useCallback((field: string, value: any) => {
    if (selectionLockRef.current) return;
    if (field === 'isOwner' && value === 'no') { setErrorMsg(t.renterError); return; }
    selectionLockRef.current = true;
    setFormData((prev: any) => ({ ...prev, [field]: value }));
    setDirection(1);
    setStep(step + 1);
    trackStep(step);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, t.renterError]);

  const validateContact = (): boolean => {
    const errors: Record<string, boolean> = {};
    if (!formData.firstName.trim()) errors.firstName = true;
    if (!formData.lastName.trim()) errors.lastName = true;
    if (!formData.email.trim()) errors.email = true;
    if (!formData.phone.replace(/^\+41\s?/, '').trim()) errors.phone = true;
    if (!formData.installerSharingConsent) errors.installerSharingConsent = true;
    setValidationErrors(errors);
    if (Object.keys(errors).length > 0) { setErrorMsg(t.requiredFields); return false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { setValidationErrors({ email: true }); setErrorMsg(t.invalidEmail); return false; }
    if (!isValidSwissPhone(formData.phone)) { setValidationErrors({ phone: true }); setErrorMsg(t.invalidPhone); return false; }
    return true;
  };

  const handleSubmit = async () => {
    if (submitLockRef.current) return;
    submitLockRef.current = true;
    if (!validateContact()) {
      submitLockRef.current = false;
      return;
    }
    setIsSubmitting(true);
    let submissionSucceeded = false;
    try {
      const fullName = `${formData.firstName.trim()} ${formData.lastName.trim()}`;
      const formatPhone = (raw: string) => {
        let p = raw.trim().replace(/\s+/g, '').replace(/[^\d+]/g, '');
        if (p.startsWith('+41')) p = '0' + p.slice(3);
        else if (p.startsWith('0041')) p = '0' + p.slice(4);
        while (p.startsWith('00')) p = p.slice(1);
        if (p.length === 9 && !p.startsWith('0')) p = '0' + p;
        if (p.length === 10 && p.startsWith('0')) return `${p.slice(0,3)} ${p.slice(3,6)} ${p.slice(6,8)} ${p.slice(8,10)}`;
        return p;
      };
      const utm_source =
        new URLSearchParams(window.location.search).get('utm_source') ??
        sessionStorage.getItem('utm_source') ??
        'organic';
      const source =
        new URLSearchParams(window.location.search).get('source') ??
        sessionStorage.getItem('pvpro_source') ??
        '';
      const canton = new URLSearchParams(window.location.search).get('canton') ?? '';
      const origin = new URLSearchParams(window.location.search).get('origin') ?? '';
      const context = leadContextFromValues(locale, canton, origin, source);

      const fbclid =
        new URLSearchParams(window.location.search).get('fbclid') ??
        sessionStorage.getItem('fbclid') ??
        '';

      const eventId = crypto.randomUUID();
      const marketingConsent = getConsent()?.marketing === true;
      const openAiBrowserRef = marketingConsent
        ? document.cookie
            .split('; ')
            .find((cookie) => cookie.startsWith('__obref='))
            ?.split('=')
            .slice(1)
            .join('=') ?? ''
        : '';

      const res = await fetch('/api/anfrage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          'FULL NAME': fullName,
          'PHONE NUMBER': formatPhone(formData.phone),
          EMAIL: formData.email.trim(),
          'COMPLETE ADDRESS': formData.address,
          ...(formData.zipCode ? { zip_code: formData.zipCode } : {}),
          utm_source,
          locale: context.locale,
          ...(context.canton ? { canton: context.canton } : {}),
          ...(context.origin ? { origin: context.origin } : {}),
          ...(context.source ? { source: context.source } : {}),
          ...(fbclid ? { fbclid } : {}),
          event_id: eventId,
          marketing_consent: marketingConsent,
          installer_sharing_consent: formData.installerSharingConsent,
          ...(openAiBrowserRef ? { openai_browser_ref: decodeURIComponent(openAiBrowserRef) } : {}),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        trackStep(6);
        (window as any).fbq?.('track', 'Lead', { content_name: 'Solar Quote Request', value: 50.0, currency: 'CHF' }, { eventID: eventId });
        (window as any).gtag?.('event', 'conversion', { send_to: 'AW-17901154625/LyaGCIXE-fUbEMHi99dC', value: 1.0, currency: 'CHF' });
        if (marketingConsent) {
          window.oaiq?.('measure', 'lead_created', { type: 'customer_action' }, { event_id: eventId });
        }
        fetch('/api/send-confirmation', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, ...context }),
        }).catch(() => {});
        router.push(t.dankeUrl);
        submissionSucceeded = true;
      } else {
        setErrorMsg(typeof data.error === 'string' ? data.error : t.submitError);
      }
    } catch {
      setErrorMsg(t.submitError);
    } finally {
      if (!submissionSucceeded) {
        submitLockRef.current = false;
        setIsSubmitting(false);
      }
    }
  };

  const progressPct = Math.round(((step - 1) / TOTAL_STEPS) * 100);

  /* ── Loading screen ── */
  if (isLoadingTransition) {
    const loadingSteps = [
      { icon: <ScanSearch className="w-8 h-8" />, label: t.loadingStep1, phase: 1 },
      { icon: <Users className="w-8 h-8" />, label: t.loadingStep2, phase: 2 },
      { icon: <Award className="w-8 h-8" />, label: t.loadingStep3, phase: 3 },
    ];
    return (
      <div className="request-form-page min-h-[100dvh] bg-white flex flex-col items-center justify-center px-6">
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10">
          <Image src="/logo-pvpro.png" alt="PvPro.ch" width={320} height={92} sizes="275px" className="h-20 w-auto" loading="lazy" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
          className="text-2xl sm:text-3xl font-bold text-gray-900 mb-14 text-center"
        >
          {t.loadingTitle}
        </motion.h2>
        <div className="flex flex-col items-center w-full max-w-sm">
          {loadingSteps.map((item, i) => {
            const isDone = loadingPhase > item.phase;
            const isActive = loadingPhase === item.phase;
            return (
              <div key={i} className="flex flex-col items-center w-full">
                {i > 0 && (
                  <div className="w-0.5 h-10 bg-gray-100 overflow-hidden relative">
                    <motion.div
                      className="w-full absolute top-0 left-0"
                      style={{ background: '#fcb210' }}
                      initial={{ height: 0 }}
                      animate={{ height: isDone || isActive ? '100%' : 0 }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                    />
                  </div>
                )}
                <motion.div
                  className="flex items-center gap-5 w-full rounded-2xl px-5 py-4"
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.18 }}
                  style={{
                    background: isDone ? '#f0fdf4' : isActive ? '#FFF7ED' : '#f9fafb',
                    border: isDone ? '1.5px solid #bbf7d0' : isActive ? '1.5px solid #fed7aa' : '1.5px solid #f3f4f6',
                  }}
                >
                  <div className="relative shrink-0">
                    {isActive && (
                      <motion.div
                        className="absolute -inset-1.5 rounded-full"
                        style={{ border: '2.5px solid #fcb210' }}
                        animate={{ scale: [1, 1.35, 1], opacity: [0.8, 0, 0.8] }}
                        transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                      />
                    )}
                    <motion.div
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      animate={{
                        background: isDone ? '#dcfce7' : isActive ? '#FFF7ED' : '#f3f4f6',
                        color: isDone ? '#16a34a' : isActive ? '#fcb210' : '#d1d5db',
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <AnimatePresence mode="wait">
                        {isDone ? (
                          <motion.div key="done" initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: 'spring', stiffness: 260, damping: 18 }}>
                            <Check className="w-8 h-8 text-green-500" strokeWidth={2.5} />
                          </motion.div>
                        ) : (
                          <motion.div key="icon" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.3 }}>
                            {item.icon}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                  <motion.p
                    className="font-bold leading-snug text-left"
                    animate={{
                      color: isDone ? '#15803d' : isActive ? '#111827' : '#9ca3af',
                      fontSize: isActive ? '1rem' : '0.9rem',
                    }}
                    transition={{ duration: 0.35 }}
                  >
                    {item.label}
                  </motion.p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  /* ── Step content ── */
  const renderStep = () => {
    switch (step) {
      case 1: return (
        <StepWrapper title={t.step1Title} sub={t.step1Sub}>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <OptionCard label={t.yes} isSelected={formData.isOwner === 'yes'} onClick={() => handleSelect('isOwner', 'yes')} imageSrc="/icons/icon-check.webp" />
            <OptionCard label={t.no} isSelected={formData.isOwner === 'no'} onClick={() => handleSelect('isOwner', 'no')} imageSrc="/icons/icon-x.webp" />
          </div>
        </StepWrapper>
      );
      case 2: return (
        <StepWrapper title={t.step2Title} sub={t.step2Sub}>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <OptionCard label={t.detachedHouse} isSelected={formData.propertyType === 'einfamilienhaus'} onClick={() => handleSelect('propertyType', 'einfamilienhaus')} imageSrc="/icons/icon-einfamilienhaus.webp" />
            <OptionCard label={t.apartmentBuilding} isSelected={formData.propertyType === 'mehrfamilienhaus'} onClick={() => handleSelect('propertyType', 'mehrfamilienhaus')} imageSrc="/icons/icon-mehrfamilienhaus.webp" />
            <OptionCard label={t.commercial} isSelected={formData.propertyType === 'gewerbe'} onClick={() => handleSelect('propertyType', 'gewerbe')} imageSrc="/icons/icon-gewerbe.webp" />
            <OptionCard label={t.other} isSelected={formData.propertyType === 'sonstiges'} onClick={() => handleSelect('propertyType', 'sonstiges')} imageSrc="/icons/icon-question.webp" />
          </div>
        </StepWrapper>
      );
      case 3: return (
        <StepWrapper title={t.step3Title} sub={t.step3Sub}>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <OptionCard label={t.pitchedRoof} isSelected={formData.roofType === 'pitched'} onClick={() => handleSelect('roofType', 'pitched')} imageSrc="/icons/icon-satteldach.webp" />
            <OptionCard label={t.monopitchRoof} isSelected={formData.roofType === 'monopitch'} onClick={() => handleSelect('roofType', 'monopitch')} imageSrc="/icons/icon-pultdach.webp" />
            <OptionCard label={t.flatRoof} isSelected={formData.roofType === 'flat'} onClick={() => handleSelect('roofType', 'flat')} imageSrc="/icons/icon-flachdach.webp" />
            <OptionCard label={t.other} isSelected={formData.roofType === 'other'} onClick={() => handleSelect('roofType', 'other')} imageSrc="/icons/icon-question.webp" />
          </div>
        </StepWrapper>
      );
      case 4: return (
        <StepWrapper title={t.step4Title} sub={t.step4Sub}>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <OptionCard label={t.yes} isSelected={formData.wantsBattery === 'yes'} onClick={() => handleSelect('wantsBattery', 'yes')} imageSrc="/icons/icon-check.webp" />
            <OptionCard label={t.no} isSelected={formData.wantsBattery === 'no'} onClick={() => handleSelect('wantsBattery', 'no')} imageSrc="/icons/icon-x.webp" />
            <div className="col-span-2 flex justify-center">
              <div className="w-1/2 pr-1.5">
                <OptionCard label={t.dontKnow} isSelected={formData.wantsBattery === 'unknown'} onClick={() => handleSelect('wantsBattery', 'unknown')} imageSrc="/icons/icon-question.webp" />
              </div>
            </div>
          </div>
        </StepWrapper>
      );
      case 5: return (
        <StepWrapper title={t.step5Title} sub={t.step5Sub}>
          {isManualAddress ? (
            <div className="space-y-3">
              <p className="text-sm text-gray-500">{t.manualHelp}</p>
              <div className="grid grid-cols-3 gap-3">
                {(['street', 'houseNumber'] as const).map(field => (
                  <label key={field} className={field === 'street' ? 'col-span-2' : ''}>
                    <span className="block text-sm font-medium text-gray-700 mb-1">{t[field]} *</span>
                    <input
                      name={field}
                      autoComplete={field === 'street' ? 'address-line1' : 'off'}
                      value={manualAddress[field]}
                      onChange={e => handleManualChange(field, e.target.value)}
                      aria-invalid={manualErrors[field] || undefined}
                      className={`w-full p-3 border-2 rounded-xl outline-none focus:border-primary bg-white ${manualErrors[field] ? 'border-red-400' : 'border-gray-200'}`}
                    />
                  </label>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {(['zipCode', 'city'] as const).map(field => (
                  <label key={field} className={field === 'city' ? 'col-span-2' : ''}>
                    <span className="block text-sm font-medium text-gray-700 mb-1">{t[field]} *</span>
                    <input
                      name={field}
                      autoComplete={field === 'zipCode' ? 'postal-code' : 'address-level2'}
                      inputMode={field === 'zipCode' ? 'numeric' : undefined}
                      value={manualAddress[field]}
                      onChange={e => handleManualChange(field, e.target.value)}
                      aria-invalid={manualErrors[field] || undefined}
                      className={`w-full p-3 border-2 rounded-xl outline-none focus:border-primary bg-white ${manualErrors[field] ? 'border-red-400' : 'border-gray-200'}`}
                    />
                  </label>
                ))}
              </div>
            </div>
          ) : (
            <>
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none text-base bg-white"
                  value={formData.address}
                  onChange={e => handleAddressChange(e.target.value)}
                  placeholder={t.addressPlaceholder}
                  autoFocus
                />
                {showSuggestions && addressSuggestions.length > 0 && (
                  <div className="absolute z-50 left-0 right-0 top-full mt-1 bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden">
                    {addressSuggestions.map(s => (
                      <button key={s.place_id} onClick={() => selectAddress(s)}
                        className="w-full p-4 text-left hover:bg-gray-50 flex items-center gap-3 border-b border-gray-100 last:border-0">
                        <MapPin className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm text-gray-700">{s.description}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {addressSearchMessage && <p role="status" className="mt-2 text-sm text-amber-700">{addressSearchMessage}</p>}
            </>
          )}
          <RoofAnalysis
            key={`${isManualAddress ? 'manual' : 'automatic'}:${isManualAddress ? `${manualAddress.street}|${manualAddress.houseNumber}|${manualAddress.zipCode}|${manualAddress.city}` : selectedAddress ?? ''}`}
            locale={locale}
            manual={isManualAddress}
            address={isManualAddress
              ? (Object.values(manualAddressErrors(manualAddress)).some(Boolean)
                ? null
                : `${manualAddress.street.trim()} ${manualAddress.houseNumber.trim()}, ${manualAddress.zipCode.trim()} ${manualAddress.city.trim()}`)
              : selectedAddress}
            coords={isManualAddress ? null : selectedPlaceCoords}
          />
          <button
            type="button"
            data-testid="manual-address-toggle"
            onClick={toggleManualAddress}
            className="mt-3 text-sm font-semibold text-primary underline underline-offset-2 hover:text-orange-700"
          >
            {isManualAddress ? t.automaticToggle : t.manualToggle}
          </button>
          <button
            onClick={() => goNext()}
            className={`w-full py-4 rounded-2xl font-bold text-base mt-4 transition-all ${isManualAddress || selectedAddress ? 'btn-primary' : 'bg-gray-100 text-gray-400'}`}
          >
            {t.compareOffers}
          </button>
        </StepWrapper>
      );
      case 6: return (
        <StepWrapper title={t.step6Title} sub={t.step6Sub}>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <input placeholder={`${t.firstName} *`}
                className={`w-full p-4 border-2 rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 bg-white text-base ${validationErrors.firstName ? 'border-red-400' : 'border-gray-200'}`}
                onChange={e => { setFormData({ ...formData, firstName: e.target.value }); setValidationErrors(p => ({ ...p, firstName: false })); }}
              />
              <input placeholder={`${t.lastName} *`}
                className={`w-full p-4 border-2 rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 bg-white text-base ${validationErrors.lastName ? 'border-red-400' : 'border-gray-200'}`}
                onChange={e => { setFormData({ ...formData, lastName: e.target.value }); setValidationErrors(p => ({ ...p, lastName: false })); }}
              />
            </div>
            <input type="email" placeholder={`${t.email} *`}
              className={`w-full p-4 border-2 rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 bg-white text-base ${validationErrors.email ? 'border-red-400' : 'border-gray-200'}`}
              onChange={e => { setFormData({ ...formData, email: e.target.value }); setValidationErrors(p => ({ ...p, email: false })); }}
            />
            <div className={`flex items-center w-full border-2 rounded-2xl focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 bg-white overflow-hidden ${validationErrors.phone ? 'border-red-400' : 'border-gray-200'}`}>
              <div className="flex items-center gap-2 pl-4 pr-3 py-4 border-r border-gray-100 shrink-0">
                <svg width="20" height="20" viewBox="0 0 32 32" className="shrink-0" role="img" aria-label="Schweiz">
                  <rect width="32" height="32" rx="4" fill="#D52B1E"/>
                  <rect x="13" y="6" width="6" height="20" fill="#fff"/>
                  <rect x="6" y="13" width="20" height="6" fill="#fff"/>
                </svg>
                <span className="text-gray-700 font-medium text-sm">+41</span>
              </div>
              <input type="tel" inputMode="numeric" placeholder={`${t.phone} *`}
                value={formData.phone}
                className="flex-1 px-4 py-4 outline-none bg-transparent text-base min-w-0"
                onChange={e => { setFormData({ ...formData, phone: formatSwissPhoneDisplay(e.target.value) }); setValidationErrors(p => ({ ...p, phone: false })); }}
              />
              {isValidSwissPhone(formData.phone) && (
                <span className="pr-4 shrink-0 text-green-500" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
              )}
            </div>
            <label className={`flex items-start gap-3 rounded-xl border p-3 text-xs leading-relaxed ${validationErrors.installerSharingConsent ? 'border-red-400 text-red-700' : 'border-gray-200 text-gray-500'}`}>
              <input
                type="checkbox"
                checked={formData.installerSharingConsent}
                onChange={e => {
                  setFormData({ ...formData, installerSharingConsent: e.target.checked });
                  setValidationErrors(p => ({ ...p, installerSharingConsent: false }));
                }}
                aria-invalid={validationErrors.installerSharingConsent || undefined}
                className="mt-0.5 h-4 w-4 shrink-0 accent-primary"
              />
              <span>
                {t.consentText}{' '}
                <Link href={t.privacyHref} className="underline hover:text-gray-700">
                  {t.privacyLinkLabel}
                </Link>
              </span>
            </label>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full py-4 rounded-2xl font-bold text-base btn-primary disabled:opacity-60 disabled:cursor-not-allowed transition-all"
            >
              {isSubmitting ? t.submitting : t.submit}
            </button>
          </div>
        </StepWrapper>
      );
      default: return null;
    }
  };

  return (
    <div className="request-form-page min-h-[100dvh] bg-[#fafafa] flex flex-col">
      {/* Header */}
      <header className="w-full bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="relative flex items-center justify-between h-16 sm:h-[72px]">
            <Link href={locale === 'de' ? '/' : `/${locale}`} className="flex-shrink-0 z-10">
              <Image src="/logo-pvpro.png" alt="PvPro.ch" width={220} height={64} sizes="440px" className="h-28 sm:h-32 w-auto -my-8" loading="lazy" />
            </Link>
            {step > 1 && (
              <button onClick={goBack} className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                <ChevronLeft className="w-4 h-4" />
                {t.back}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-gray-100">
        <motion.div className="h-full w-full" style={{ background: 'linear-gradient(90deg, #ffc812, #fcb210)', transformOrigin: 'left' }} animate={{ scaleX: progressPct / 100 }} transition={{ duration: reduceMotion ? 0 : 0.2, ease: 'easeOut' }} />
      </div>

      {/* Step counter */}
      <div className="text-center pt-4 pb-1">
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#fcb210' }}>
          {step} / {TOTAL_STEPS}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-start justify-center px-4 py-3 sm:py-5">
        <div className="w-full max-w-md">
            <motion.div
              key={step}
              data-form-step={step}
              className={step === 5 ? 'pb-[calc(80px+env(safe-area-inset-bottom,0px))] sm:pb-0' : undefined}
              custom={direction}
              variants={stepVariants}
              initial={reduceMotion || step === 1 ? false : "enter"}
              animate="center"
              onAnimationComplete={() => { selectionLockRef.current = false; }}
              transition={{ duration: reduceMotion ? 0 : 0.16, ease: [0.4, 0, 0.2, 1] }}
            >
              {renderStep()}
            </motion.div>

          {/* Error toast */}
          <AnimatePresence>
            {errorMsg && (
              <motion.div
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
                className="mt-4 flex items-start gap-3 rounded-2xl px-4 py-3 text-sm font-medium"
                style={{ background: '#fef2f2', color: '#dc2626', border: '1.5px solid #fecaca' }}
              >
                <X className="w-4 h-4 shrink-0 mt-0.5" />
                {errorMsg}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
