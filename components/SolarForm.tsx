'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, HelpCircle, MapPin, BarChart2, Search, SearchIcon, CheckCircle2, ChevronRight } from 'lucide-react';
import { useLocale } from '@/lib/LocaleContext';

declare global {
  interface Window {
    google?: typeof google;
  }
}

const formTranslations: Record<string, any> = {
  de: {
    step1Title: 'Sind Sie Eigentümer der Liegenschaft?',
    step1Sub: 'Nur Eigentümer können ihre Eignung prüfen.',
    yes: 'Ja',
    no: 'Nein',
    ownerSub: 'EIGENTÜMER',
    renterSub: 'MIETER',
    step2Title: 'Um welchen Gebäudetyp handelt es sich?',
    step2Sub: 'Wählen Sie Ihren Gebäudetyp.',
    singleFamily: 'Einfamilienhaus',
    multiFamily: 'Mehrfamilienhaus',
    other: 'Sonstiges',
    step3Title: 'Welche Dachform kommt Ihrer am nächsten?',
    step3Sub: 'Wählen Sie die passende Dachform.',
    pitchedRoof: 'Satteldach',
    monopitchRoof: 'Pultdach',
    flatRoof: 'Flachdach',
    step4Title: 'Möchten Sie einen Stromspeicher integrieren?',
    step4Sub: 'Ein Speicher erhöht Ihren Eigenverbrauch.',
    unknown: 'Weiss nicht',
    step5Title: 'Wie lautet Ihre Adresse?',
    step5Sub: 'Wir prüfen die Eignung Ihres Dachs.',
    step6Title: 'Fast geschafft!',
    step6Sub: 'Nur noch Ihre Kontaktdaten für die Offerten.',
    addressPlaceholder: 'z.B. Bahnhofstrasse 10, 8001 Zürich',
    firstName: 'Vorname',
    lastName: 'Nachname',
    email: 'E-Mail',
    phone: 'Telefon',
    privacyText: 'Mit dem Absenden akzeptieren Sie unsere Datenschutzerklärung',
    back: 'Zurück',
    next: 'Weiter',
    submit: 'Kostenlose Offerte anfordern',
    submitting: 'Wird gesendet...',
    loadingTitle: 'Einen Moment bitte...',
    loadingStep1: 'Analyse Ihrer Angaben',
    loadingStep2: 'Vergleich mit verschiedenen Anbietern',
    loadingStep3: "3x Offerten ab 15'999.- gefunden",
    renterError: 'Leider können wir nur Eigentümern helfen. Bitte kontaktieren Sie Ihren Vermieter.',
    requiredFields: 'Bitte füllen Sie alle Felder aus.',
    invalidEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
    invalidPhone: 'Bitte geben Sie eine gültige Telefonnummer ein.',
  },
  fr: {
    step1Title: 'Êtes-vous propriétaire du bien?',
    step1Sub: 'Seuls les propriétaires peuvent vérifier leur éligibilité.',
    yes: 'Oui',
    no: 'Non',
    ownerSub: 'PROPRIÉTAIRE',
    renterSub: 'LOCATAIRE',
    step2Title: 'De quel type de bâtiment s\'agit-il?',
    step2Sub: 'Choisissez votre type de bâtiment.',
    singleFamily: 'Maison individuelle',
    multiFamily: 'Immeuble collectif',
    other: 'Autre',
    step3Title: 'Quelle forme de toit se rapproche le plus de la vôtre?',
    step3Sub: 'Choisissez la forme de toit correspondante.',
    pitchedRoof: 'À deux pans',
    monopitchRoof: 'Monopente',
    flatRoof: 'Plat',
    step4Title: 'Souhaitez-vous intégrer un système de stockage?',
    step4Sub: 'Un stockage augmente votre autoconsommation.',
    unknown: 'Je ne sais pas',
    step5Title: 'Quelle est votre adresse?',
    step5Sub: 'Nous vérifions l\'aptitude de votre toit.',
    step6Title: 'Presque terminé!',
    step6Sub: 'Il ne reste plus que vos coordonnées pour les devis.',
    addressPlaceholder: 'p.ex. Rue de la Gare 10, 1201 Genève',
    firstName: 'Prénom',
    lastName: 'Nom',
    email: 'E-mail',
    phone: 'Téléphone',
    privacyText: 'En soumettant, vous acceptez notre politique de confidentialité',
    back: 'Retour',
    next: 'Suivant',
    submit: 'Demande de devis gratuit',
    submitting: 'Envoi en cours...',
    loadingTitle: 'Un instant s\'il vous plaît...',
    loadingStep1: 'Analyse de vos données',
    loadingStep2: 'Comparaison avec différents fournisseurs',
    loadingStep3: "3x devis à partir de 15'999.- trouvés",
    renterError: 'Malheureusement, nous ne pouvons aider que les propriétaires. Veuillez contacter votre bailleur.',
    requiredFields: 'Veuillez remplir tous les champs.',
    invalidEmail: 'Veuillez entrer une adresse e-mail valide.',
    invalidPhone: 'Veuillez entrer un numéro de téléphone valide.',
  },
  en: {
    step1Title: 'Are you the property owner?',
    step1Sub: 'Only owners can check their eligibility.',
    yes: 'Yes',
    no: 'No',
    ownerSub: 'OWNER',
    renterSub: 'RENTER',
    step2Title: 'What type of building is it?',
    step2Sub: 'Select your building type.',
    singleFamily: 'Single family house',
    multiFamily: 'Multi family house',
    other: 'Other',
    step3Title: 'Which roof shape is closest to yours?',
    step3Sub: 'Select the matching roof shape.',
    pitchedRoof: 'Pitched',
    monopitchRoof: 'Monopitch',
    flatRoof: 'Flat',
    step4Title: 'Would you like to integrate a battery storage system?',
    step4Sub: 'Storage increases your self-consumption.',
    unknown: 'I don\'t know',
    step5Title: 'What is your address?',
    step5Sub: 'We check the suitability of your roof.',
    step6Title: 'Almost done!',
    step6Sub: 'Just your contact details for the quotes.',
    addressPlaceholder: 'e.g. Bahnhofstrasse 10, 8001 Zurich',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    phone: 'Phone',
    privacyText: 'By submitting, you accept our privacy policy',
    back: 'Back',
    next: 'Next',
    submit: 'Request free quote',
    submitting: 'Sending...',
    loadingTitle: 'One moment please...',
    loadingStep1: 'Analyzing your data',
    loadingStep2: 'Comparing with different providers',
    loadingStep3: "3x quotes from 15'999.- found",
    renterError: 'Unfortunately, we can only help property owners. Please contact your landlord.',
    requiredFields: 'Please fill in all fields.',
    invalidEmail: 'Please enter a valid email address.',
    invalidPhone: 'Please enter a valid phone number.',
  },
  it: {
    step1Title: 'È il proprietario dell\'immobile?',
    step1Sub: 'Solo i proprietari possono verificare l\'idoneità.',
    yes: 'Sì',
    no: 'No',
    ownerSub: 'PROPRIETARIO',
    renterSub: 'INQUILINO',
    step2Title: 'Di che tipo di edificio si tratta?',
    step2Sub: 'Scelga il tipo di edificio.',
    singleFamily: 'Casa unifamiliare',
    multiFamily: 'Casa plurifamiliare',
    other: 'Altro',
    step3Title: 'Quale di queste forme si avvicina di più alla sua?',
    step3Sub: 'Scelga la forma del tetto corrispondente.',
    pitchedRoof: 'A falde',
    monopitchRoof: 'Monopendenza',
    flatRoof: 'Piatto',
    step4Title: 'Desidera integrare un impianto di accumulo?',
    step4Sub: 'Un accumulo aumenta il consumo proprio.',
    unknown: 'Non lo so',
    step5Title: 'Qual è il suo indirizzo?',
    step5Sub: 'Verifichiamo l\'idoneità del suo tetto.',
    step6Title: 'Quasi fatto!',
    step6Sub: 'Solo i suoi dati di contatto per i preventivi.',
    addressPlaceholder: 'es. Via Stazione 10, 8001 Zurigo',
    firstName: 'Nome',
    lastName: 'Cognome',
    email: 'E-mail',
    phone: 'Telefono',
    privacyText: 'Inviando, accetti la nostra politica sulla privacy',
    back: 'Indietro',
    next: 'Avanti',
    submit: 'Richiedi preventivo gratuito',
    submitting: 'Invio in corso...',
    loadingTitle: 'Un momento per favore...',
    loadingStep1: 'Analisi dei tuoi dati',
    loadingStep2: 'Confronto con diversi fornitori',
    loadingStep3: "Trovate 3x offerte a partire da 15'999.-",
    renterError: 'Purtroppo possiamo aiutare solo i proprietari di immobili. Si prega di contattare il proprietario.',
    requiredFields: 'Per favore, compilare tutti i campi.',
    invalidEmail: 'Per favore, inserire un indirizzo e-mail valido.',
    invalidPhone: 'Per favore, inserire un numero di telefono valido.',
  },
};

const TOTAL_STEPS = 6;

const BADGES = [
  { icon: '✓', text: '100% Kostenlos' },
  { icon: '🔍', text: 'Förderungen Geprüft' },
  { icon: '🔒', text: 'DSGVO-Konform' },
  { icon: '🚫', text: 'Keine Werbeanrufe' },
];

const TrustBadges = () => (
  <div className="grid grid-cols-2 gap-2 pt-3 pb-1">
    {BADGES.map((b) => (
      <div
        key={b.text}
        className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2"
      >
        <span className="text-base leading-none">{b.icon}</span>
        <span className="text-xs font-bold text-gray-700 leading-tight">{b.text}</span>
      </div>
    ))}
  </div>
);

const PRIMARY = '#c8a415';
const PRIMARY_LIGHT = '#fef9e8';

interface BigCardProps {
  label: string;
  subLabel?: string;
  isSelected: boolean;
  onClick: () => void;
  icon?: 'check' | 'x' | 'question';
  imageSrc?: string;
}

function BigCard({ label, subLabel, isSelected, onClick, icon, imageSrc }: BigCardProps) {
  const iconColor = isSelected ? '#fff' : PRIMARY;
  const bg = isSelected ? PRIMARY : PRIMARY_LIGHT;
  const border = PRIMARY;
  const textColor = isSelected ? '#fff' : '#1a1a1a';
  const subColor = isSelected ? 'rgba(255,255,255,0.7)' : '#9ca3af';

  return (
    <motion.button
      whileHover={{ scale: 1.04, y: -3 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className="relative flex flex-col items-center justify-center w-full rounded-2xl transition-all duration-200"
      style={{
        aspectRatio: '1 / 1',
        backgroundColor: bg,
        border: `2.5px solid ${border}`,
        boxShadow: isSelected
          ? `0 8px 24px ${PRIMARY}55`
          : `0 2px 8px ${PRIMARY}22`,
      }}
    >
      {imageSrc ? (
        <div className="w-2/5 flex items-center justify-center mb-3">
          <img
            src={imageSrc}
            alt={label}
            className="w-full h-full object-contain"
            style={{ filter: isSelected ? 'brightness(0) invert(1)' : 'none' }}
          />
        </div>
      ) : icon === 'check' ? (
        <Check style={{ color: iconColor, width: 52, height: 52, marginBottom: 12 }} strokeWidth={2.5} />
      ) : icon === 'x' ? (
        <X style={{ color: iconColor, width: 52, height: 52, marginBottom: 12 }} strokeWidth={2.5} />
      ) : (
        <HelpCircle style={{ color: iconColor, width: 52, height: 52, marginBottom: 12 }} strokeWidth={2} />
      )}

      <span className="text-base font-black leading-tight px-2 text-center" style={{ color: textColor }}>
        {label}
      </span>
      {subLabel && (
        <span className="text-[9px] font-bold tracking-widest mt-1" style={{ color: subColor }}>
          {subLabel}
        </span>
      )}

      {isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full flex items-center justify-center shadow-md"
          style={{ backgroundColor: '#fff', border: `2px solid ${PRIMARY}` }}
        >
          <Check className="w-3 h-3" style={{ color: PRIMARY }} strokeWidth={4} />
        </motion.div>
      )}
    </motion.button>
  );
}

export default function SolarForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<any>({
    isOwner: null,
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
  const [addressSuggestions, setAddressSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [notification, setNotification] = useState<any>(null);
  const [isLoadingTransition, setIsLoadingTransition] = useState(false);
  const [loadingStep, setLoadingStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  const [selectedPlaceCoords, setSelectedPlaceCoords] = useState<any>(null);
  const [validationErrors, setValidationErrors] = useState<Record<string, boolean>>({});
  const autocompleteService = useRef<any>(null);
  const placesService = useRef<any>(null);
  const router = useRouter();
  const locale = useLocale();
  const t = formTranslations[locale] || formTranslations.de;

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  useEffect(() => {
    const initServices = () => {
      if (typeof window !== 'undefined' && window.google?.maps?.places) {
        autocompleteService.current = new window.google.maps.places.AutocompleteService();
        const dummyDiv = document.createElement('div');
        placesService.current = new window.google.maps.places.PlacesService(dummyDiv);
      }
    };
    if (window.google?.maps?.places) {
      initServices();
    } else {
      const interval = setInterval(() => {
        if (window.google?.maps?.places) {
          initServices();
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, []);

  const handleAddressChange = async (value: string) => {
    setFormData({ ...formData, address: value });
    setSelectedAddress(null);
    setSelectedPlaceCoords(null);
    if (value.length > 2 && autocompleteService.current) {
      autocompleteService.current.getPlacePredictions({
        input: value,
        componentRestrictions: { country: 'ch' },
        types: ['address'],
      }, (predictions: any, status: any) => {
        if (status === 'OK' && predictions) {
          setAddressSuggestions(predictions);
          setShowSuggestions(true);
        }
      });
    } else {
      setShowSuggestions(false);
    }
  };

  const selectAddress = (prediction: any) => {
    setFormData({ ...formData, address: prediction.description });
    setSelectedAddress(prediction.description);
    setShowSuggestions(false);
    if (placesService.current) {
      placesService.current.getDetails({ placeId: prediction.place_id, fields: ['geometry'] }, (place: any, status: any) => {
        if (status === 'OK' && place?.geometry?.location) {
          setSelectedPlaceCoords({ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() });
        }
      });
    }
  };

  const handleSelection = (field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
    setTimeout(() => nextStep(), 50);
  };

  const stepNames: Record<number, string> = {
    1: 'Ownership', 2: 'BuildingType', 3: 'RoofShape', 4: 'BatteryStorage', 5: 'Address', 6: 'ContactDetails',
  };

  const trackStepCompleted = (completedStep: number) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('trackCustom', `Step${completedStep}Completed`, {
        step_number: completedStep,
        step_name: stepNames[completedStep] || `Step${completedStep}`,
      });
    }
  };

  const nextStep = async () => {
    if (step === 1 && formData.isOwner === 'no') {
      setNotification({ message: t.renterError, type: 'warning' });
      return;
    }
    if (step === 5) {
      if (!selectedAddress) {
        const msg = locale === 'it' ? 'Seleziona un indirizzo dalla lista.' : locale === 'fr' ? 'Veuillez sélectionner une adresse dans la liste.' : locale === 'en' ? 'Please select an address from the list.' : 'Bitte wählen Sie eine Adresse aus der Liste aus.';
        setNotification({ message: msg, type: 'error' });
        return;
      }
      setIsLoadingTransition(true);
      setLoadingStep(1);
      await new Promise(r => setTimeout(r, 500));
      setLoadingStep(2);
      await new Promise(r => setTimeout(r, 500));
      setLoadingStep(3);
      await new Promise(r => setTimeout(r, 500));
      setIsLoadingTransition(false);
    }
    trackStepCompleted(step);
    setStep(step + 1);
  };

  const validateContactFields = (): boolean => {
    const errors: Record<string, boolean> = {};
    const trimmedFirst = formData.firstName.trim();
    const trimmedLast = formData.lastName.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPhone = formData.phone.replace(/^\+41\s?/, '').trim();
    if (!trimmedFirst) errors.firstName = true;
    if (!trimmedLast) errors.lastName = true;
    if (!trimmedEmail) errors.email = true;
    if (!trimmedPhone) errors.phone = true;
    setValidationErrors(errors);
    if (Object.keys(errors).length > 0) {
      setNotification({ message: t.requiredFields, type: 'error' });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setValidationErrors({ email: true });
      setNotification({ message: t.invalidEmail, type: 'error' });
      return false;
    }
    if (trimmedPhone.replace(/\s/g, '').length < 7) {
      setValidationErrors({ phone: true });
      setNotification({ message: t.invalidPhone, type: 'error' });
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateContactFields()) return;
    setIsSubmitting(true);
    try {
      const fullName = `${formData.firstName.trim()} ${formData.lastName.trim()}`;
      const formatPhone = (raw: string) => {
        let p = raw.trim().replace(/\s+/g, '').replace(/[^\d+]/g, '');
        if (p.startsWith('+41')) p = '0' + p.slice(3);
        else if (p.startsWith('0041')) p = '0' + p.slice(4);
        while (p.startsWith('00')) p = p.slice(1);
        if (p.length === 9 && !p.startsWith('0')) p = '0' + p;
        if (p.length === 10 && p.startsWith('0')) {
          return `${p.slice(0,3)} ${p.slice(3,6)} ${p.slice(6,8)} ${p.slice(8,10)}`;
        }
        return p;
      };
      const submitData = {
        access_key: 'e5917515-5373-450c-963d-d6dcb976be42',
        'FULL NAME': fullName,
        'PHONE NUMBER': formatPhone(formData.phone),
        EMAIL: formData.email.trim(),
        'COMPLETE ADDRESS': formData.address,
      };
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData),
      });
      if (res.ok) {
        trackStepCompleted(6);
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Lead', { content_name: 'Solar Quote Request', content_category: 'Lead Generation', value: 50.0, currency: 'CHF' });
        }
        if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
          (window as any).gtag('event', 'conversion', { 'send_to': 'AW-17901154625/LyaGCIXE-fUbEMHi99dC', 'value': 1.0, 'currency': 'CHF' });
        }
        fetch('/api/send-confirmation', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }).catch(err => console.error('Confirmation email error:', err));
        router.push('/danke');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">{t.step1Title}</h3>
              <p className="text-sm text-gray-400">{t.step1Sub}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <BigCard label={t.yes} subLabel={t.ownerSub} isSelected={formData.isOwner === 'yes'} onClick={() => handleSelection('isOwner', 'yes')} icon="check" />
              <BigCard label={t.no} subLabel={t.renterSub} isSelected={formData.isOwner === 'no'} onClick={() => handleSelection('isOwner', 'no')} icon="x" />
            </div>
            <TrustBadges />
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">{t.step2Title}</h3>
              <p className="text-sm text-gray-400">{t.step2Sub}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <BigCard label={t.singleFamily} isSelected={formData.propertyType === 'einfamilienhaus'} onClick={() => handleSelection('propertyType', 'einfamilienhaus')} imageSrc="/icons/single-family.png" />
              <BigCard label={t.multiFamily} isSelected={formData.propertyType === 'mehrfamilienhaus'} onClick={() => handleSelection('propertyType', 'mehrfamilienhaus')} imageSrc="/icons/multi-family.png" />
            </div>
            <div className="flex justify-center">
              <div className="w-1/2">
                <BigCard label={t.other} isSelected={formData.propertyType === 'sonstiges'} onClick={() => handleSelection('propertyType', 'sonstiges')} icon="question" />
              </div>
            </div>
            <TrustBadges />
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">{t.step3Title}</h3>
              <p className="text-sm text-gray-400">{t.step3Sub}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <BigCard label={t.pitchedRoof} isSelected={formData.roofType === 'pitched'} onClick={() => handleSelection('roofType', 'pitched')} imageSrc="/icons/pitched-roof.png" />
              <BigCard label={t.monopitchRoof} isSelected={formData.roofType === 'monopitch'} onClick={() => handleSelection('roofType', 'monopitch')} imageSrc="/icons/monopitch-roof.png" />
              <BigCard label={t.flatRoof} isSelected={formData.roofType === 'flat'} onClick={() => handleSelection('roofType', 'flat')} imageSrc="/icons/flat-roof.png" />
              <BigCard label={t.other} isSelected={formData.roofType === 'other'} onClick={() => handleSelection('roofType', 'other')} icon="question" />
            </div>
            <TrustBadges />
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">{t.step4Title}</h3>
              <p className="text-sm text-gray-400">{t.step4Sub}</p>
            </div>
            <div className="grid grid-cols-3 gap-3 pt-2">
              <BigCard label={t.yes} isSelected={formData.wantsBattery === 'yes'} onClick={() => handleSelection('wantsBattery', 'yes')} icon="check" />
              <BigCard label={t.no} isSelected={formData.wantsBattery === 'no'} onClick={() => handleSelection('wantsBattery', 'no')} icon="x" />
              <BigCard label={t.unknown} isSelected={formData.wantsBattery === 'unknown'} onClick={() => handleSelection('wantsBattery', 'unknown')} icon="question" />
            </div>
            <TrustBadges />
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">{t.step5Title}</h3>
              <p className="text-sm text-gray-400">{t.step5Sub}</p>
            </div>

            {selectedPlaceCoords && (
              <div className="w-full h-44 rounded-2xl overflow-hidden border-2 border-gray-200">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(formData.address)}&zoom=19&maptype=satellite`}
                />
              </div>
            )}

            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-base bg-white"
                value={formData.address}
                onChange={(e) => handleAddressChange(e.target.value)}
                placeholder={t.addressPlaceholder}
              />
              {showSuggestions && addressSuggestions.length > 0 && (
                <div className="absolute z-50 left-0 right-0 top-full mt-1 bg-white border-2 border-gray-100 rounded-2xl shadow-2xl overflow-hidden">
                  {addressSuggestions.map((s) => (
                    <button
                      key={s.place_id}
                      onClick={() => selectAddress(s)}
                      className="w-full p-4 text-left hover:bg-gray-50 flex items-center gap-3 border-b border-gray-100 last:border-0"
                    >
                      <MapPin className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-gray-700 text-sm">{s.description}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={nextStep}
              className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${selectedAddress ? 'btn-primary' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
            >
              {t.next}
            </button>
            <TrustBadges />
          </div>
        );
      case 6:
        return (
          <div className="space-y-5">
            <div className="text-center space-y-1">
              <h3 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">{t.step6Title}</h3>
              <p className="text-sm text-gray-400">{t.step6Sub}</p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="grid grid-cols-2 gap-3">
                <input
                  placeholder={`${t.firstName} *`}
                  className={`w-full p-4 border-2 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none bg-white text-base ${validationErrors.firstName ? 'border-red-400' : 'border-gray-200'}`}
                  onChange={e => { setFormData({...formData, firstName: e.target.value}); setValidationErrors(prev => ({...prev, firstName: false})); }}
                />
                <input
                  placeholder={`${t.lastName} *`}
                  className={`w-full p-4 border-2 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none bg-white text-base ${validationErrors.lastName ? 'border-red-400' : 'border-gray-200'}`}
                  onChange={e => { setFormData({...formData, lastName: e.target.value}); setValidationErrors(prev => ({...prev, lastName: false})); }}
                />
              </div>
              <input
                type="email"
                placeholder={`${t.email} *`}
                className={`w-full p-4 border-2 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none bg-white text-base ${validationErrors.email ? 'border-red-400' : 'border-gray-200'}`}
                onChange={e => { setFormData({...formData, email: e.target.value}); setValidationErrors(prev => ({...prev, email: false})); }}
              />
              <div className={`flex items-center w-full border-2 rounded-2xl focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 bg-white overflow-hidden ${validationErrors.phone ? 'border-red-400' : 'border-gray-200'}`}>
                <div className="flex items-center gap-2 pl-4 pr-3 py-4 border-r border-gray-100 shrink-0">
                  <svg width="20" height="20" viewBox="0 0 32 32">
                    <rect width="32" height="32" rx="4" fill="#D52B1E"/>
                    <rect x="13" y="6" width="6" height="20" rx="1" fill="white"/>
                    <rect x="6" y="13" width="20" height="6" rx="1" fill="white"/>
                  </svg>
                  <span className="text-gray-700 font-medium">+41</span>
                </div>
                <input
                  type="tel"
                  placeholder={`${t.phone} *`}
                  className="w-full p-4 outline-none bg-transparent text-base"
                  value={formData.phone.replace(/^\+41\s?/, '')}
                  onChange={e => { setFormData({...formData, phone: '+41 ' + e.target.value.replace(/^\+41\s?/, '')}); setValidationErrors(prev => ({...prev, phone: false})); }}
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
              className="w-full btn-primary py-5 rounded-2xl text-lg font-black shadow-lg flex items-center justify-center gap-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <><BarChart2 className="animate-spin w-5 h-5" />{t.submitting}</>
              ) : (
                <>{t.submit}<ChevronRight className="w-5 h-5" /></>
              )}
            </motion.button>

            <p className="text-[10px] uppercase tracking-widest text-gray-400 text-center font-semibold">
              {t.privacyText}
            </p>
            <TrustBadges />
          </div>
        );
      default: return null;
    }
  };

  if (isLoadingTransition) {
    return (
      <div className="px-6 py-12 text-center space-y-8">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900">{t.loadingTitle}</h2>
        <div className="space-y-8 max-w-xs mx-auto">
          {[
            { icon: <BarChart2 className={`w-8 h-8 ${loadingStep === 1 ? 'animate-pulse' : ''}`} />, label: t.loadingStep1, active: loadingStep >= 1, done: loadingStep > 1 },
            { icon: <SearchIcon className={`w-8 h-8 ${loadingStep === 2 ? 'animate-pulse' : ''}`} />, label: t.loadingStep2, active: loadingStep >= 2, done: loadingStep > 2 },
            { icon: <Check className="w-8 h-8" />, label: t.loadingStep3, active: loadingStep >= 3, done: false },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-2"
              animate={{ opacity: item.active ? 1 : 0.3, scale: loadingStep === i + 1 ? 1.05 : 1 }}
              transition={{ duration: 0.15 }}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center ${item.active ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-400'}`}>
                {item.icon}
              </div>
              <span className={`text-base font-bold ${item.active ? 'text-gray-900' : 'text-gray-400'}`}>{item.label}</span>
              {item.done && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}><CheckCircle2 className="w-5 h-5 text-green-500" /></motion.div>}
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  const progressPct = Math.round(((step - 1) / TOTAL_STEPS) * 100);

  return (
    <div id="formular" className="max-w-lg mx-auto bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
      <div className="h-1.5 bg-gray-100">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progressPct}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>

      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-50">
        {step > 1 ? (
          <button
            onClick={() => setStep(step - 1)}
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 font-semibold transition-colors"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            {t.back}
          </button>
        ) : (
          <div />
        )}
        <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">
          {step} / {TOTAL_STEPS}
        </span>
      </div>

      <div className="px-5 py-7 sm:px-8 sm:py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>

        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-5 p-4 rounded-2xl flex items-start gap-3 ${notification.type === 'error' ? 'bg-red-50 text-red-700 border border-red-100' : 'bg-amber-50 text-amber-700 border border-amber-100'}`}
          >
            <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
            <span className="font-semibold text-sm">{notification.message}</span>
          </motion.div>
        )}
      </div>
    </div>
  );
}
