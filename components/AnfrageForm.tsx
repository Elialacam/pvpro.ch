'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check, X, MapPin, Search, ChevronLeft,
  ScanSearch, Users, Award, Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

declare global {
  interface Window { google?: typeof google; }
}

const TOTAL_STEPS = 7;

const i18n = {
  de: {
    step1Title: 'Sind Sie Eigentümer der Liegenschaft?',
    step1Sub: 'Nur Eigentümer können die Eignung Ihres Dachs prüfen lassen.',
    step2Title: 'Wie hoch ist Ihr durchschnittlicher Stromverbrauch?',
    step2Sub: 'Das hilft uns, die optimale Anlagengrösse für Sie zu berechnen.',
    step3Title: 'Um welchen Gebäudetyp handelt es sich?',
    step3Sub: 'Wählen Sie den Typ Ihrer Liegenschaft.',
    step4Title: 'Welche Dachform kommt Ihrer am nächsten?',
    step4Sub: 'Wählen Sie die Dachform, die Ihrer am ähnlichsten ist.',
    step5Title: 'Möchten Sie einen Stromspeicher integrieren?',
    step5Sub: 'Ein Speicher erhöht Ihren Eigenverbrauch auf bis zu 80%.',
    step6Title: 'Wo befindet sich Ihre Liegenschaft?',
    step6Sub: 'Wir prüfen die Eignung Ihres Dachs und verfügbare Förderungen.',
    step7Title: 'Fast geschafft!',
    step7Sub: 'Geben Sie Ihre Kontaktdaten ein, um Ihre kostenlosen Offerten zu erhalten.',
    electricityBill: 'Stromrechnung',
    electricityKwh: 'kWh-Verbrauch',
    monthly: 'Monatlich',
    quarterly: 'Quartalsweise',
    averageHint: 'Durchschnittlicher Haushalt: CHF 70–140 / Monat',
    addressPlaceholder: 'z.B. Bahnhofstrasse 10, 8001 Zürich',
    addressError: 'Bitte wählen Sie eine Adresse aus der Liste aus.',
    firstName: 'Vorname',
    lastName: 'Nachname',
    email: 'E-Mail',
    phone: 'Telefonnummer',
    privacyText: 'Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.',
    privacyHref: '/datenschutz',
    submit: 'Kostenlose Offerten anfordern →',
    submitting: 'Wird gesendet…',
    next: 'Weiter →',
    back: 'Zurück',
    loadingTitle: 'Wir suchen passende Angebote…',
    loadingStep1: 'Wir analysieren Ihre Angaben und Adresse',
    loadingStep2: 'Installateure in Ihrem Kanton werden verglichen',
    loadingStep3: '3 passende Installateure gefunden',
    renterError: 'Leider können wir nur Eigentümern helfen. Als Mieter wenden Sie sich bitte an Ihren Vermieter.',
    requiredFields: 'Bitte füllen Sie alle Pflichtfelder aus.',
    invalidEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
    invalidPhone: 'Bitte geben Sie eine gültige Schweizer Telefonnummer ein.',
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
    step2Title: 'Quelle est votre consommation électrique moyenne?',
    step2Sub: 'Cela nous permet de calculer la taille optimale de l\'installation.',
    step3Title: 'De quel type de bâtiment s\'agit-il?',
    step3Sub: 'Sélectionnez le type de votre bien immobilier.',
    step4Title: 'Quelle forme de toit correspond le mieux à la vôtre?',
    step4Sub: 'Sélectionnez la forme de toit qui ressemble le plus à la vôtre.',
    step5Title: 'Souhaitez-vous intégrer un système de stockage d\'énergie?',
    step5Sub: 'Un stockage augmente votre autoconsommation jusqu\'à 80%.',
    step6Title: 'Où se situe votre bien immobilier?',
    step6Sub: 'Nous vérifions l\'aptitude de votre toit et les subventions disponibles.',
    step7Title: 'Presque terminé!',
    step7Sub: 'Saisissez vos coordonnées pour recevoir vos devis gratuits.',
    electricityBill: 'Facture d\'électricité',
    electricityKwh: 'Consommation kWh',
    monthly: 'Mensuel',
    quarterly: 'Trimestriel',
    averageHint: 'Ménage moyen: CHF 70–140 / mois',
    addressPlaceholder: 'p.ex. Rue du Centre 10, 1003 Lausanne',
    addressError: 'Veuillez sélectionner une adresse dans la liste.',
    firstName: 'Prénom',
    lastName: 'Nom',
    email: 'E-mail',
    phone: 'Numéro de téléphone',
    privacyText: 'En envoyant le formulaire, vous acceptez notre politique de confidentialité.',
    privacyHref: '/fr/protection-des-donnees',
    submit: 'Demander des devis gratuits →',
    submitting: 'Envoi en cours…',
    next: 'Suivant →',
    back: 'Retour',
    loadingTitle: 'Nous recherchons les meilleures offres…',
    loadingStep1: 'Nous analysons vos informations et votre adresse',
    loadingStep2: 'Les installateurs de votre canton sont comparés',
    loadingStep3: '3 installateurs correspondants trouvés',
    renterError: 'Malheureusement, nous ne pouvons aider que les propriétaires. En tant que locataire, veuillez contacter votre bailleur.',
    requiredFields: 'Veuillez remplir tous les champs obligatoires.',
    invalidEmail: 'Veuillez saisir une adresse e-mail valide.',
    invalidPhone: 'Veuillez saisir un numéro de téléphone suisse valide.',
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
    step2Title: 'What is your average electricity consumption?',
    step2Sub: 'This helps us calculate the optimal system size for you.',
    step3Title: 'What type of building is it?',
    step3Sub: 'Select your property type.',
    step4Title: 'Which roof shape best matches yours?',
    step4Sub: 'Select the roof shape closest to your own.',
    step5Title: 'Would you like to include a battery storage system?',
    step5Sub: 'Storage increases your self-consumption to up to 80%.',
    step6Title: 'Where is your property located?',
    step6Sub: 'We\'ll assess your roof\'s suitability and available subsidies.',
    step7Title: 'Almost done!',
    step7Sub: 'Enter your contact details to receive your free quotes.',
    electricityBill: 'Electricity bill',
    electricityKwh: 'kWh consumption',
    monthly: 'Monthly',
    quarterly: 'Quarterly',
    averageHint: 'Average household: CHF 70–140 / month',
    addressPlaceholder: 'e.g. Bahnhofstrasse 10, 8001 Zürich',
    addressError: 'Please select an address from the list.',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'E-mail',
    phone: 'Phone number',
    privacyText: 'By submitting, you agree to our privacy policy.',
    privacyHref: '/en/privacy',
    submit: 'Request free quotes →',
    submitting: 'Sending…',
    next: 'Next →',
    back: 'Back',
    loadingTitle: 'Searching for matching offers…',
    loadingStep1: 'Analysing your details and address',
    loadingStep2: 'Comparing installers in your canton',
    loadingStep3: '3 matching installers found',
    renterError: 'Unfortunately, we can only help owners. As a tenant, please contact your landlord.',
    requiredFields: 'Please fill in all required fields.',
    invalidEmail: 'Please enter a valid email address.',
    invalidPhone: 'Please enter a valid Swiss phone number.',
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
    step2Title: 'Qual è il suo consumo elettrico medio?',
    step2Sub: 'Questo ci aiuta a calcolare la dimensione ottimale dell\'impianto.',
    step3Title: 'Di che tipo di edificio si tratta?',
    step3Sub: 'Seleziona il tipo del tuo immobile.',
    step4Title: 'Quale forma di tetto si avvicina di più alla tua?',
    step4Sub: 'Seleziona la forma del tetto più simile alla tua.',
    step5Title: 'Desideri integrare un sistema di accumulo?',
    step5Sub: 'Un accumulo aumenta il tuo autoconsumo fino all\'80%.',
    step6Title: 'Dove si trova il tuo immobile?',
    step6Sub: 'Verificheremo l\'idoneità del tuo tetto e gli incentivi disponibili.',
    step7Title: 'Ci siamo quasi!',
    step7Sub: 'Inserisci i tuoi dati di contatto per ricevere i preventivi gratuiti.',
    electricityBill: 'Bolletta elettrica',
    electricityKwh: 'Consumo kWh',
    monthly: 'Mensile',
    quarterly: 'Trimestrale',
    averageHint: 'Abitazione media: CHF 70–140 / mese',
    addressPlaceholder: 'es. Via Lugano 10, 6900 Lugano',
    addressError: 'Seleziona un indirizzo dalla lista.',
    firstName: 'Nome',
    lastName: 'Cognome',
    email: 'E-mail',
    phone: 'Numero di telefono',
    privacyText: 'Inviando il modulo, accetti la nostra informativa sulla privacy.',
    privacyHref: '/it/protezione-dati',
    submit: 'Richiedi preventivi gratuiti →',
    submitting: 'Invio in corso…',
    next: 'Avanti →',
    back: 'Indietro',
    loadingTitle: 'Stiamo cercando le offerte migliori…',
    loadingStep1: 'Analizziamo le tue informazioni e l\'indirizzo',
    loadingStep2: 'I tecnici del tuo cantone vengono confrontati',
    loadingStep3: '3 tecnici corrispondenti trovati',
    renterError: 'Purtroppo possiamo aiutare solo i proprietari. Come inquilino, contatta il tuo proprietario di casa.',
    requiredFields: 'Compila tutti i campi obbligatori.',
    invalidEmail: 'Inserisci un indirizzo e-mail valido.',
    invalidPhone: 'Inserisci un numero di telefono svizzero valido.',
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

function OptionCard({ label, sublabel, isSelected, onClick, imageSrc }: OptionCardProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="relative flex flex-col items-center justify-center rounded-2xl p-5 w-full cursor-pointer overflow-hidden"
      style={{
        minHeight: '148px',
        border: isSelected ? '2.5px solid #EA6A0A' : '2px solid #E5E7EB',
        background: isSelected
          ? 'linear-gradient(145deg, #F97316 0%, #EA6A0A 100%)'
          : '#ffffff',
        boxShadow: isSelected
          ? '0 12px 32px rgba(249,115,22,0.35)'
          : '0 2px 8px rgba(0,0,0,0.06)',
        transition: 'border-color 0.18s, box-shadow 0.18s',
      }}
    >
      {isSelected && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-white/30 flex items-center justify-center"
        >
          <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
        </motion.div>
      )}

      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-3 overflow-hidden"
        style={{ background: isSelected ? 'rgba(255,255,255,0.2)' : '#F3F4F6' }}
      >
        <img
          loading="lazy"
          src={imageSrc}
          alt={label}
          className="w-9 h-9 object-contain"
          style={{
            filter: isSelected
              ? 'brightness(0) invert(1)'
              : 'invert(40%) sepia(0%) saturate(0%) brightness(70%)',
          }}
        />
      </div>

      <p
        className="text-sm font-bold text-center leading-tight"
        style={{ color: isSelected ? '#fff' : '#111827' }}
      >
        {label}
      </p>
      {sublabel && (
        <p
          className="text-xs mt-1 text-center"
          style={{ color: isSelected ? 'rgba(255,255,255,0.75)' : '#9CA3AF' }}
        >
          {sublabel}
        </p>
      )}
    </motion.button>
  );
}

/* ─── Step wrapper ────────────────────────────────────────────────────────── */
function StepWrapper({ title, sub, children }: { title: string; sub: string; children: React.ReactNode }) {
  return (
    <div>
      <h1
        className="text-[1.75rem] sm:text-[2rem] leading-tight mb-2"
        style={{ fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}
      >
        {title}
      </h1>
      <p className="text-sm sm:text-[0.9375rem] text-gray-500 mb-7 leading-relaxed">{sub}</p>
      {children}
    </div>
  );
}

/* ─── Progress bar segments ───────────────────────────────────────────────── */
function StepProgress({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-1.5 px-5 pt-5 pb-4">
      {Array.from({ length: total }).map((_, i) => {
        const done = i + 1 <= current;
        return (
          <motion.div
            key={i}
            className="h-[5px] flex-1 rounded-full"
            animate={{ background: done ? '#F97316' : '#E5E7EB' }}
            transition={{ duration: 0.35 }}
          />
        );
      })}
    </div>
  );
}

/* ─── Tab Toggle ──────────────────────────────────────────────────────────── */
function TabToggle({
  options,
  value,
  onChange,
}: {
  options: { label: string; value: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex rounded-xl bg-gray-100 p-1 mb-5">
      {options.map(opt => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className="flex-1 py-2.5 rounded-lg text-sm transition-all"
          style={{
            fontWeight: 700,
            background: value === opt.value ? '#fff' : 'transparent',
            color: value === opt.value ? '#0F172A' : '#9CA3AF',
            boxShadow: value === opt.value ? '0 1px 6px rgba(0,0,0,0.1)' : 'none',
          }}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

/* ─── Period Toggle ───────────────────────────────────────────────────────── */
function PeriodToggle({
  options,
  value,
  onChange,
}: {
  options: { label: string; value: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex rounded-lg bg-gray-100 p-0.5 shrink-0">
      {options.map(opt => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className="px-2.5 py-1.5 rounded-[7px] text-xs transition-all"
          style={{
            fontWeight: 700,
            background: value === opt.value ? '#fff' : 'transparent',
            color: value === opt.value ? '#0F172A' : '#9CA3AF',
            boxShadow: value === opt.value ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
          }}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

/* ─── Primary Button ──────────────────────────────────────────────────────── */
function PrimaryBtn({ onClick, disabled, children }: { onClick?: () => void; disabled?: boolean; children: React.ReactNode }) {
  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.015 }}
      whileTap={disabled ? {} : { scale: 0.985 }}
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="w-full py-4 rounded-2xl text-base transition-all"
      style={{
        fontWeight: 800,
        letterSpacing: '-0.01em',
        background: disabled
          ? '#E5E7EB'
          : 'linear-gradient(135deg, #F97316 0%, #EA6A0A 100%)',
        color: disabled ? '#9CA3AF' : '#fff',
        boxShadow: disabled ? 'none' : '0 6px 20px rgba(249,115,22,0.4)',
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      {children}
    </motion.button>
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
  const [formData, setFormData] = useState<any>({
    isOwner: null,
    electricityType: 'chf',
    electricityAmount: '',
    electricityPeriod: 'monthly',
    propertyType: null,
    roofType: null,
    wantsBattery: null,
    address: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingTransition, setIsLoadingTransition] = useState(false);
  const [loadingPhase, setLoadingPhase] = useState(1);
  const [addressSuggestions, setAddressSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  const [selectedPlaceCoords, setSelectedPlaceCoords] = useState<any>(null);
  const [validationErrors, setValidationErrors] = useState<Record<string, boolean>>({});
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const autocompleteService = useRef<any>(null);
  const placesService = useRef<any>(null);

  useEffect(() => {
    if (!errorMsg) return;
    const timer = setTimeout(() => setErrorMsg(null), 5000);
    return () => clearTimeout(timer);
  }, [errorMsg]);

  useEffect(() => {
    if (step !== 6) return;
    const init = () => {
      if (window.google?.maps?.places) {
        autocompleteService.current = new window.google.maps.places.AutocompleteService();
        const div = document.createElement('div');
        placesService.current = new window.google.maps.places.PlacesService(div);
      }
    };
    if (window.google?.maps?.places) { init(); return; }
    const scriptId = 'google-maps-places';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
    const iv = setInterval(() => { if (window.google?.maps?.places) { init(); clearInterval(iv); } }, 100);
    return () => clearInterval(iv);
  }, [step]);

  const handleAddressChange = (value: string) => {
    setFormData({ ...formData, address: value });
    setSelectedAddress(null);
    setSelectedPlaceCoords(null);
    if (value.length > 2 && autocompleteService.current) {
      autocompleteService.current.getPlacePredictions(
        { input: value, componentRestrictions: { country: 'ch' }, types: ['address'] },
        (predictions: any, status: any) => {
          if (status === 'OK' && predictions) { setAddressSuggestions(predictions); setShowSuggestions(true); }
        }
      );
    } else { setShowSuggestions(false); }
  };

  const selectAddress = (prediction: any) => {
    setFormData({ ...formData, address: prediction.description });
    setSelectedAddress(prediction.description);
    setShowSuggestions(false);
    placesService.current?.getDetails({ placeId: prediction.place_id, fields: ['geometry'] }, (place: any, status: any) => {
      if (status === 'OK' && place?.geometry?.location) {
        setSelectedPlaceCoords({ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() });
      }
    });
  };

  const trackStep = (n: number) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('trackCustom', `AnfrageStep${n}Completed`, { step_number: n });
    }
  };

  const goNext = async () => {
    if (step === 6) {
      if (!selectedAddress) { setErrorMsg(t.addressError); return; }
      setIsLoadingTransition(true);
      for (let p = 1; p <= 3; p++) { setLoadingPhase(p); await new Promise(r => setTimeout(r, 1400)); }
      setIsLoadingTransition(false);
    }
    trackStep(step);
    setDirection(1);
    setStep(s => s + 1);
  };

  const goBack = () => { setDirection(-1); setStep(s => s - 1); };

  const handleSelect = (field: string, value: any) => {
    if (field === 'isOwner' && value === 'no') { setErrorMsg(t.renterError); return; }
    setFormData((prev: any) => ({ ...prev, [field]: value }));
    goNext();
  };

  const validateContact = (): boolean => {
    const errors: Record<string, boolean> = {};
    if (!formData.firstName.trim()) errors.firstName = true;
    if (!formData.lastName.trim()) errors.lastName = true;
    if (!formData.email.trim()) errors.email = true;
    if (!formData.phone.replace(/^\+41\s?/, '').trim()) errors.phone = true;
    setValidationErrors(errors);
    if (Object.keys(errors).length > 0) { setErrorMsg(t.requiredFields); return false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { setValidationErrors({ email: true }); setErrorMsg(t.invalidEmail); return false; }
    if (formData.phone.replace(/^\+41\s?/, '').replace(/\s/g, '').length < 7) { setValidationErrors({ phone: true }); setErrorMsg(t.invalidPhone); return false; }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateContact()) return;
    setIsSubmitting(true);
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
      const fbclid =
        new URLSearchParams(window.location.search).get('fbclid') ??
        sessionStorage.getItem('fbclid') ??
        '';
      const electricityLabel = formData.electricityAmount
        ? `${formData.electricityAmount} ${formData.electricityType === 'kwh' ? 'kWh' : 'CHF'} / ${formData.electricityPeriod === 'monthly' ? t.monthly : t.quarterly}`
        : '';
      const res = await fetch('/api/anfrage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          'FULL NAME': fullName,
          'PHONE NUMBER': formatPhone(formData.phone),
          EMAIL: formData.email.trim(),
          'COMPLETE ADDRESS': formData.address,
          ...(electricityLabel ? { 'ELECTRICITY': electricityLabel } : {}),
          utm_source,
          ...(fbclid ? { fbclid } : {}),
        }),
      });
      const data = await res.json();
      if (data.success) {
        trackStep(7);
        (window as any).fbq?.('track', 'Lead', { content_name: 'Solar Quote Request', value: 50.0, currency: 'CHF' });
        (window as any).gtag?.('event', 'conversion', { send_to: 'AW-17901154625/LyaGCIXE-fUbEMHi99dC', value: 1.0, currency: 'CHF' });
        fetch('/api/send-confirmation', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) }).catch(() => {});
        router.push(t.dankeUrl);
      }
    } finally { setIsSubmitting(false); }
  };

  /* ── Loading screen ── */
  if (isLoadingTransition) {
    const loadingSteps = [
      { icon: <ScanSearch className="w-7 h-7" />, label: t.loadingStep1, phase: 1 },
      { icon: <Users className="w-7 h-7" />, label: t.loadingStep2, phase: 2 },
      { icon: <Award className="w-7 h-7" />, label: t.loadingStep3, phase: 3 },
    ];
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6" style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10">
          <Image src="/logo-pvpro.png" alt="PVPro.ch" width={130} height={38} className="h-8 w-auto" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
          className="text-2xl sm:text-3xl mb-14 text-center"
          style={{ fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}
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
                      style={{ background: '#F97316' }}
                      initial={{ height: 0 }}
                      animate={{ height: isDone || isActive ? '100%' : 0 }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                    />
                  </div>
                )}
                <motion.div
                  className="flex items-center gap-4 w-full rounded-2xl px-5 py-4"
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
                        style={{ border: '2.5px solid #F97316' }}
                        animate={{ scale: [1, 1.35, 1], opacity: [0.8, 0, 0.8] }}
                        transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                      />
                    )}
                    <motion.div
                      className="w-[52px] h-[52px] rounded-full flex items-center justify-center"
                      animate={{
                        background: isDone ? '#dcfce7' : isActive ? '#FFF7ED' : '#f3f4f6',
                        color: isDone ? '#16a34a' : isActive ? '#F97316' : '#d1d5db',
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <AnimatePresence mode="wait">
                        {isDone ? (
                          <motion.div key="done" initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: 'spring', stiffness: 260, damping: 18 }}>
                            <Check className="w-7 h-7 text-green-500" strokeWidth={2.5} />
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
                    style={{ fontWeight: 700 }}
                    className="leading-snug text-left"
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
          <TabToggle
            options={[
              { label: t.electricityBill, value: 'chf' },
              { label: t.electricityKwh, value: 'kwh' },
            ]}
            value={formData.electricityType}
            onChange={v => setFormData((p: any) => ({ ...p, electricityType: v }))}
          />
          <div
            className="flex items-center gap-3 rounded-2xl px-5 py-4 mb-3"
            style={{ border: '2px solid #E5E7EB', background: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
          >
            <span className="text-xl font-black text-orange-400 shrink-0 w-11 text-left">
              {formData.electricityType === 'kwh' ? 'kWh' : 'CHF'}
            </span>
            <input
              type="number"
              inputMode="numeric"
              min="0"
              className="flex-1 outline-none bg-transparent w-0"
              style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em' }}
              value={formData.electricityAmount}
              onChange={e => setFormData((p: any) => ({ ...p, electricityAmount: e.target.value }))}
              placeholder="0"
              autoFocus
            />
            <PeriodToggle
              options={[
                { label: t.monthly, value: 'monthly' },
                { label: t.quarterly, value: 'quarterly' },
              ]}
              value={formData.electricityPeriod}
              onChange={v => setFormData((p: any) => ({ ...p, electricityPeriod: v }))}
            />
          </div>
          <div className="flex items-center gap-1.5 mb-7">
            <Zap className="w-3.5 h-3.5 text-orange-400 shrink-0" />
            <p className="text-xs text-gray-400">{t.averageHint}</p>
          </div>
          <PrimaryBtn onClick={() => goNext()}>{t.next}</PrimaryBtn>
        </StepWrapper>
      );

      case 3: return (
        <StepWrapper title={t.step3Title} sub={t.step3Sub}>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <OptionCard label={t.detachedHouse} isSelected={formData.propertyType === 'einfamilienhaus'} onClick={() => handleSelect('propertyType', 'einfamilienhaus')} imageSrc="/icons/icon-einfamilienhaus.webp" />
            <OptionCard label={t.apartmentBuilding} isSelected={formData.propertyType === 'mehrfamilienhaus'} onClick={() => handleSelect('propertyType', 'mehrfamilienhaus')} imageSrc="/icons/icon-mehrfamilienhaus.webp" />
            <OptionCard label={t.commercial} isSelected={formData.propertyType === 'gewerbe'} onClick={() => handleSelect('propertyType', 'gewerbe')} imageSrc="/icons/icon-gewerbe.webp" />
            <OptionCard label={t.other} isSelected={formData.propertyType === 'sonstiges'} onClick={() => handleSelect('propertyType', 'sonstiges')} imageSrc="/icons/icon-question.webp" />
          </div>
        </StepWrapper>
      );

      case 4: return (
        <StepWrapper title={t.step4Title} sub={t.step4Sub}>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <OptionCard label={t.pitchedRoof} isSelected={formData.roofType === 'pitched'} onClick={() => handleSelect('roofType', 'pitched')} imageSrc="/icons/icon-satteldach.webp" />
            <OptionCard label={t.monopitchRoof} isSelected={formData.roofType === 'monopitch'} onClick={() => handleSelect('roofType', 'monopitch')} imageSrc="/icons/icon-pultdach.webp" />
            <OptionCard label={t.flatRoof} isSelected={formData.roofType === 'flat'} onClick={() => handleSelect('roofType', 'flat')} imageSrc="/icons/icon-flachdach.webp" />
            <OptionCard label={t.other} isSelected={formData.roofType === 'other'} onClick={() => handleSelect('roofType', 'other')} imageSrc="/icons/icon-question.webp" />
          </div>
        </StepWrapper>
      );

      case 5: return (
        <StepWrapper title={t.step5Title} sub={t.step5Sub}>
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

      case 6: return (
        <StepWrapper title={t.step6Title} sub={t.step6Sub}>
          {selectedPlaceCoords && (
            <div className="w-full h-40 rounded-2xl overflow-hidden border border-gray-200 mb-4">
              <iframe width="100%" height="100%" style={{ border: 0 }} loading="lazy"
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(formData.address)}&zoom=19&maptype=satellite`}
              />
            </div>
          )}
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-orange-400 focus:ring-4 focus:ring-orange-100 outline-none text-base bg-white"
              style={{ fontFamily: 'inherit', fontWeight: 500 }}
              value={formData.address}
              onChange={e => handleAddressChange(e.target.value)}
              placeholder={t.addressPlaceholder}
              autoFocus
            />
            {showSuggestions && addressSuggestions.length > 0 && (
              <div className="absolute z-50 left-0 right-0 top-full mt-1 bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden">
                {addressSuggestions.map(s => (
                  <button key={s.place_id} onClick={() => selectAddress(s)}
                    className="w-full p-4 text-left hover:bg-orange-50 flex items-center gap-3 border-b border-gray-100 last:border-0 transition-colors">
                    <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{s.description}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="mt-4">
            <PrimaryBtn onClick={() => goNext()} disabled={!selectedAddress}>{t.next}</PrimaryBtn>
          </div>
        </StepWrapper>
      );

      case 7: return (
        <StepWrapper title={t.step7Title} sub={t.step7Sub}>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <input
                placeholder={`${t.firstName} *`}
                className="w-full p-4 border-2 rounded-2xl outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100 bg-white text-base"
                style={{ fontFamily: 'inherit', fontWeight: 500, borderColor: validationErrors.firstName ? '#f87171' : '#E5E7EB' }}
                onChange={e => { setFormData({ ...formData, firstName: e.target.value }); setValidationErrors(p => ({ ...p, firstName: false })); }}
              />
              <input
                placeholder={`${t.lastName} *`}
                className="w-full p-4 border-2 rounded-2xl outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100 bg-white text-base"
                style={{ fontFamily: 'inherit', fontWeight: 500, borderColor: validationErrors.lastName ? '#f87171' : '#E5E7EB' }}
                onChange={e => { setFormData({ ...formData, lastName: e.target.value }); setValidationErrors(p => ({ ...p, lastName: false })); }}
              />
            </div>
            <input
              type="email"
              placeholder={`${t.email} *`}
              className="w-full p-4 border-2 rounded-2xl outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100 bg-white text-base"
              style={{ fontFamily: 'inherit', fontWeight: 500, borderColor: validationErrors.email ? '#f87171' : '#E5E7EB' }}
              onChange={e => { setFormData({ ...formData, email: e.target.value }); setValidationErrors(p => ({ ...p, email: false })); }}
            />
            <div
              className="flex items-center w-full border-2 rounded-2xl bg-white overflow-hidden"
              style={{ borderColor: validationErrors.phone ? '#f87171' : '#E5E7EB' }}
            >
              <div className="flex items-center gap-2 pl-4 pr-3 py-4 border-r border-gray-100 shrink-0">
                <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
                  <rect width="20" height="15" rx="2" fill="#D52B1E"/>
                  <rect x="8" y="3" width="4" height="9" fill="white"/>
                  <rect x="3" y="5.5" width="14" height="4" fill="white"/>
                </svg>
                <span className="text-gray-700 font-bold text-sm">+41</span>
              </div>
              <input
                type="tel"
                placeholder={`${t.phone} *`}
                className="flex-1 px-4 py-4 outline-none bg-transparent text-base"
                style={{ fontFamily: 'inherit', fontWeight: 500 }}
                onChange={e => { setFormData({ ...formData, phone: e.target.value }); setValidationErrors(p => ({ ...p, phone: false })); }}
              />
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              {t.privacyText.split(/(Datenschutzerklärung|politique de confidentialité|privacy policy|informativa sulla privacy)/)[0]}
              <Link href={t.privacyHref} className="underline hover:text-gray-600">
                {t.privacyText.match(/(Datenschutzerklärung|politique de confidentialité|privacy policy|informativa sulla privacy)/)?.[0]}
              </Link>
              {t.privacyText.split(/(Datenschutzerklärung|politique de confidentialité|privacy policy|informativa sulla privacy)/)[2]}
            </p>
            <PrimaryBtn onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? t.submitting : t.submit}
            </PrimaryBtn>
          </div>
        </StepWrapper>
      );

      default: return null;
    }
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 55 : -55, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -55 : 55, opacity: 0 }),
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: '#F8F7F5', fontFamily: 'var(--font-jakarta), sans-serif' }}
    >
      {/* Header */}
      <header className="w-full bg-white border-b border-gray-100 px-5 py-4 flex items-center justify-between">
        <Link href="/">
          <Image src="/logo-pvpro.png" alt="PVPro.ch" width={120} height={36} className="h-8 w-auto" />
        </Link>
        {step > 1 && (
          <button
            onClick={goBack}
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-900 transition-colors"
            style={{ fontWeight: 600 }}
          >
            <ChevronLeft className="w-4 h-4" />
            {t.back}
          </button>
        )}
      </header>

      {/* Segmented progress */}
      <StepProgress current={step} total={TOTAL_STEPS} />

      {/* Content */}
      <div className="flex-1 flex items-start justify-center px-4 pb-12">
        <div className="w-full max-w-md">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={step}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.26, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>

          {/* Error toast */}
          <AnimatePresence>
            {errorMsg && (
              <motion.div
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
                className="mt-4 flex items-start gap-3 rounded-2xl px-4 py-3 text-sm"
                style={{ background: '#fef2f2', color: '#dc2626', border: '1.5px solid #fecaca', fontWeight: 600 }}
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
