'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, HelpCircle, MapPin, Home, Building2, Warehouse, BarChart2, Search, SearchIcon, CheckCircle2, ChevronRight, ArrowUpRight, Maximize2, Minimize2, Battery, BatteryLow } from 'lucide-react';
import { useLocale } from '@/lib/LocaleContext';
import RealisticButton from './RealisticButton';

declare global {
  interface Window {
    google?: typeof google;
    fbq?: any;
  }
}

const formTranslations: Record<string, any> = {
  de: {
    step1Title: 'Sind Sie Eigentümer der Liegenschaft?',
    yes: 'Ja',
    no: 'Nein',
    step2Title: 'Um welchen Gebäudetyp handelt es sich?',
    singleFamily: 'Einfamilienhaus',
    multiFamily: 'Mehrfamilienhaus',
    other: 'Sonstiges',
    step3Title: 'Welche Dachform kommt Ihrer am nächsten?',
    pitchedRoof: 'Satteldach',
    monopitchRoof: 'Pultdach',
    flatRoof: 'Flachdach',
    step4Title: 'Möchten Sie einen Stromspeicher integrieren?',
    unknown: 'Weiss nicht',
    step5Title: 'Adresse',
    step6Title: 'Ihre Kontaktdaten',
    addressPlaceholder: 'z.B. Bahnhofstrasse 10, 8001 Zürich',
    almostDone: 'Fast geschafft! Nur noch ein paar Details.',
    firstName: 'Vorname',
    lastName: 'Nachname',
    email: 'E-Mail',
    phone: 'Telefon',
    privacyText: 'Mit dem Absenden akzeptieren Sie unsere Datenschutzerklärung',
    back: 'Zurück',
    next: 'Weiter',
    submit: 'Kostenlose Offerte',
    submitting: 'Wird gesendet...',
    loadingTitle: 'Einen Moment bitte...',
    loadingStep1: 'Analyse Ihrer Angaben',
    loadingStep2: 'Vergleich mit verschiedenen Anbietern',
    loadingStep3: "3x Offerten ab 15'999.- gefunden",
    renterError: 'Leider können wir nur Eigentümern helfen. Bitte kontaktieren Sie Ihren Vermieter.',
  },
  fr: {
    step1Title: 'Êtes-vous propriétaire du bien?',
    yes: 'Oui',
    no: 'Non',
    step2Title: 'De quel type de bâtiment s\'agit-il?',
    singleFamily: 'Maison individuelle',
    multiFamily: 'Immeuble collectif',
    other: 'Autre',
    step3Title: 'Quelle forme de toit se rapproche le plus de la vôtre?',
    pitchedRoof: 'À deux pans',
    monopitchRoof: 'Monopente',
    flatRoof: 'Plat',
    step4Title: 'Souhaitez-vous intégrer un système de stockage?',
    unknown: 'Je ne sais pas',
    step5Title: 'Adresse',
    step6Title: 'Vos coordonnées',
    addressPlaceholder: 'p.ex. Rue de la Gare 10, 1201 Genève',
    firstName: 'Prénom',
    lastName: 'Nom',
    email: 'E-mail',
    phone: 'Téléphone',
    privacyText: 'En soumettant, vous acceptez notre politique de confidentialité',
    back: 'Retour',
    next: 'Suivant',
    submit: 'Devis gratuit',
    submitting: 'Envoi en cours...',
    loadingTitle: 'Un instant s\'il vous plaît...',
    loadingStep1: 'Analyse de vos données',
    loadingStep2: 'Comparaison avec différents fournisseurs',
    loadingStep3: "3x devis à partir de 15'999.- trouvés",
    renterError: 'Malheureusement, nous ne pouvons aider que les propriétaires. Veuillez contacter votre bailleur.',
    almostDone: 'Presque terminé! Plus que quelques détails.',
  },
  en: {
    step1Title: 'Are you the property owner?',
    yes: 'Yes',
    no: 'No',
    step2Title: 'What type of building is it?',
    singleFamily: 'Single family house',
    multiFamily: 'Multi family house',
    other: 'Other',
    step3Title: 'Which roof shape is closest to yours?',
    pitchedRoof: 'Pitched',
    monopitchRoof: 'Monopitch',
    flatRoof: 'Flat',
    step4Title: 'Would you like to integrate a battery storage system?',
    unknown: 'I don\'t know',
    step5Title: 'Address',
    step6Title: 'Your contact details',
    addressPlaceholder: 'e.g. Bahnhofstrasse 10, 8001 Zurich',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    phone: 'Phone',
    privacyText: 'By submitting, you accept our privacy policy',
    back: 'Back',
    next: 'Next',
    submit: 'Free Quote',
    submitting: 'Sending...',
    loadingTitle: 'One moment please...',
    loadingStep1: 'Analyzing your data',
    loadingStep2: 'Comparing with different providers',
    loadingStep3: "3x quotes from 15'999.- found",
    renterError: 'Unfortunately, we can only help property owners. Please contact your landlord.',
    almostDone: 'Almost done! Just a few more details.',
  },
  it: {
    step1Title: 'È il proprietario dell\'immobile?',
    yes: 'Sì',
    no: 'No',
    step2Title: 'Di che tipo di edificio si tratta?',
    singleFamily: 'Casa unifamiliare',
    multiFamily: 'Casa plurifamiliare',
    other: 'Altro',
    step3Title: 'Quale di queste forme si avvicina di più alla sua?',
    pitchedRoof: 'A falde',
    monopitchRoof: 'Monopendenza',
    flatRoof: 'Piatto',
    step4Title: 'Desidera integrare un impianto di accumulo?',
    unknown: 'Non lo so',
    step5Title: 'Indirizzo',
    step6Title: 'I suoi dati di contatto',
    addressPlaceholder: 'es. Via Stazione 10, 8001 Zurigo',
    almostDone: 'Quasi fatto! Solo ancora qualche dettaglio.',
    firstName: 'Nome',
    lastName: 'Cognome',
    email: 'E-mail',
    phone: 'Telefono',
    privacyText: 'Inviando, accetti la nostra politica sulla privacy',
    back: 'Indietro',
    next: 'Avanti',
    submit: 'Preventivo gratuito',
    submitting: 'Invio in corso...',
    loadingTitle: 'Un momento per favore...',
    loadingStep1: 'Analisi dei tuoi dati',
    loadingStep2: 'Confronto con diversi fornitori',
    loadingStep3: "Trovate 3x offerte a partire da 15'999.-",
    renterError: 'Purtroppo possiamo aiutare solo i proprietari di immobili. Si prega di contattare il proprietario.',
  },
};

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
      placesService.current.getDetails({
        placeId: prediction.place_id,
        fields: ['geometry']
      }, (place: any, status: any) => {
        if (status === 'OK' && place?.geometry?.location) {
          setSelectedPlaceCoords({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
          });
        }
      });
    }
  };

  const handleSelection = (field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
    setTimeout(() => nextStep(), 300);
  };

  const nextStep = async () => {
    if (step === 1 && formData.isOwner === 'no') {
      setNotification({ message: t.renterError, type: 'warning' });
      return;
    }
    if (step === 5) {
      if (!selectedAddress) {
        const addressErrorMsg = locale === 'it' ? 'Seleziona un indirizzo dalla lista.' : locale === 'fr' ? 'Veuillez sélectionner une adresse dans la liste.' : locale === 'en' ? 'Please select an address from the list.' : 'Bitte wählen Sie eine Adresse aus der Liste aus.';
        setNotification({ message: addressErrorMsg, type: 'error' });
        return;
      }
      setIsLoadingTransition(true);
      
      // Step 1: Analyse (1.5s)
      setLoadingStep(1);
      await new Promise(r => setTimeout(r, 1500));
      
      // Step 2: Vergleich (1.5s)
      setLoadingStep(2);
      await new Promise(r => setTimeout(r, 1500));
      
      // Step 3: Gefunden (1.5s)
      setLoadingStep(3);
      await new Promise(r => setTimeout(r, 1500));
      
      setIsLoadingTransition(false);
    }
    setStep(step + 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'e5917515-5373-450c-963d-d6dcb976be42',
          ...formData
        }),
      });
      if (res.ok) router.push('/danke');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-8">
            <h3 className="text-xl sm:text-2xl font-sans font-bold text-gray-900 text-center">{t.step1Title}</h3>
            <div className="flex flex-row gap-2 sm:gap-4 w-full max-w-[350px] mx-auto">
              <RealisticButton label={t.yes} isSelected={formData.isOwner === 'yes'} onClick={() => handleSelection('isOwner', 'yes')} icon={Check} color="green" subLabel={locale === 'it' ? 'Proprietario' : locale === 'fr' ? 'Propriétaire' : locale === 'en' ? 'Owner' : 'Eigentümer'} />
              <RealisticButton label={t.no} isSelected={formData.isOwner === 'no'} onClick={() => handleSelection('isOwner', 'no')} icon={X} color="red" subLabel={locale === 'it' ? 'Inquilino' : locale === 'fr' ? 'Locataire' : locale === 'en' ? 'Renter' : 'Mieter'} />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8">
            <h3 className="text-xl sm:text-2xl font-sans font-bold text-gray-900 text-center">{t.step2Title}</h3>
            <div className="w-full mx-auto">
              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-2 sm:mb-4">
                <RealisticButton label={t.singleFamily} isSelected={formData.propertyType === 'einfamilienhaus'} onClick={() => handleSelection('propertyType', 'einfamilienhaus')} imageSrc="/icons/single-family.png" />
                <RealisticButton label={t.multiFamily} isSelected={formData.propertyType === 'mehrfamilienhaus'} onClick={() => handleSelection('propertyType', 'mehrfamilienhaus')} imageSrc="/icons/multi-family.png" />
              </div>
              <div className="flex justify-center">
                <div className="w-1/2 sm:w-1/3">
                  <RealisticButton label={t.other} isSelected={formData.propertyType === 'sonstiges'} onClick={() => handleSelection('propertyType', 'sonstiges')} icon={HelpCircle} color="amber" />
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-8">
            <h3 className="text-xl sm:text-2xl font-sans font-bold text-gray-900 text-center">{t.step3Title}</h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-4 w-full mx-auto">
              <RealisticButton label={t.pitchedRoof} isSelected={formData.roofType === 'pitched'} onClick={() => handleSelection('roofType', 'pitched')} imageSrc="/icons/pitched-roof.png" />
              <RealisticButton label={t.monopitchRoof} isSelected={formData.roofType === 'monopitch'} onClick={() => handleSelection('roofType', 'monopitch')} imageSrc="/icons/monopitch-roof.png" />
              <RealisticButton label={t.flatRoof} isSelected={formData.roofType === 'flat'} onClick={() => handleSelection('roofType', 'flat')} imageSrc="/icons/flat-roof.png" />
              <RealisticButton label={t.other} isSelected={formData.roofType === 'other'} onClick={() => handleSelection('roofType', 'other')} icon={HelpCircle} color="amber" />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-8">
            <h3 className="text-xl sm:text-2xl font-sans font-bold text-gray-900 text-center">{t.step4Title}</h3>
            <div className="w-full mx-auto">
              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-2 sm:mb-4">
                <RealisticButton label={t.yes} isSelected={formData.wantsBattery === 'yes'} onClick={() => handleSelection('wantsBattery', 'yes')} icon={Check} color="green" />
                <RealisticButton label={t.no} isSelected={formData.wantsBattery === 'no'} onClick={() => handleSelection('wantsBattery', 'no')} icon={X} color="red" />
              </div>
              <div className="flex justify-center">
                <div className="w-1/2 sm:w-1/3">
                  <RealisticButton label={t.unknown} isSelected={formData.wantsBattery === 'unknown'} onClick={() => handleSelection('wantsBattery', 'unknown')} icon={HelpCircle} color="gray" forceStep1Style />
                </div>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-sans font-bold text-gray-900 text-center">{t.step5Title}</h3>
            
            {selectedPlaceCoords && (
              <div className="w-full h-48 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-inner">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(formData.address)}&zoom=19&maptype=satellite`}
                />
              </div>
            )}

            <div className="relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input 
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-800 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-lg"
                value={formData.address}
                onChange={(e) => handleAddressChange(e.target.value)}
                placeholder={t.addressPlaceholder}
              />
              {showSuggestions && addressSuggestions.length > 0 && (
                <div className="absolute z-50 left-0 right-0 top-full mt-2 bg-white border-2 border-gray-100 rounded-2xl shadow-2xl overflow-hidden">
                  {addressSuggestions.map((s) => (
                    <button
                      key={s.place_id}
                      onClick={() => selectAddress(s)}
                      className="w-full p-4 text-left hover:bg-gray-50 flex items-center gap-3 border-b border-gray-100 last:border-0"
                    >
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="text-gray-700">{s.description}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button 
              onClick={nextStep} 
              className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${selectedAddress ? 'btn-primary' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
            >
              {t.next}
            </button>
          </div>
        );
      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-extrabold text-gray-900 flex items-center justify-center gap-2">
                {t.step6Title}
              </h3>
              <p className="text-gray-500 text-sm">{t.almostDone}</p>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative group">
                  <input 
                    placeholder={t.firstName} 
                    className="w-full p-4 border-2 border-gray-300 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none bg-white" 
                    onChange={e => setFormData({...formData, firstName: e.target.value})} 
                  />
                </div>
                <div className="relative group">
                  <input 
                    placeholder={t.lastName} 
                    className="w-full p-4 border-2 border-gray-300 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none bg-white" 
                    onChange={e => setFormData({...formData, lastName: e.target.value})} 
                  />
                </div>
              </div>
              <div className="relative group">
                <input 
                  type="email"
                  placeholder={t.email} 
                  className="w-full p-4 border-2 border-gray-300 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none bg-white" 
                  onChange={e => setFormData({...formData, email: e.target.value})} 
                />
              </div>
              <div className="relative group">
                <div className="flex items-center w-full border-2 border-gray-300 rounded-2xl focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 transition-all bg-white overflow-hidden">
                  <div className="flex items-center gap-2 pl-4 pr-3 py-4 border-r border-gray-200 select-none shrink-0">
                    <svg width="20" height="20" viewBox="0 0 32 32" className="shrink-0">
                      <rect width="32" height="32" rx="4" fill="#D52B1E"/>
                      <rect x="13" y="6" width="6" height="20" rx="1" fill="white"/>
                      <rect x="6" y="13" width="20" height="6" rx="1" fill="white"/>
                    </svg>
                    <span className="text-gray-700 font-medium">+41</span>
                  </div>
                  <input 
                    type="tel"
                    placeholder={t.phone} 
                    className="w-full p-4 outline-none bg-transparent" 
                    value={formData.phone.replace(/^\+41\s?/, '')}
                    onChange={e => setFormData({...formData, phone: '+41 ' + e.target.value.replace(/^\+41\s?/, '')})} 
                  />
                </div>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit} 
              className="w-full btn-primary py-5 rounded-2xl text-xl font-black shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <BarChart2 className="animate-spin w-6 h-6" />
                  {t.submitting}
                </>
              ) : (
                <>
                  {t.submit}
                  <ChevronRight className="w-6 h-6" />
                </>
              )}
            </motion.button>
            
            <p className="text-[10px] uppercase tracking-widest text-gray-400 text-center font-bold">
              {t.privacyText}
            </p>
          </div>
        );
      default: return null;
    }
  };

  if (isLoadingTransition) {
    return (
      <div className="p-6 sm:p-12 text-center space-y-6 sm:space-y-10">
        <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-8">{t.loadingTitle}</h2>
        
        <div className="space-y-6 sm:space-y-10 max-w-sm mx-auto">
          <motion.div 
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0.3, y: 10 }}
            animate={{ 
              opacity: loadingStep >= 1 ? 1 : 0.3,
              y: 0,
              scale: loadingStep === 1 ? 1.05 : 1
            }}
          >
            <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all ${loadingStep >= 1 ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-400'}`}>
              <BarChart2 className={`w-7 h-7 sm:w-10 sm:h-10 ${loadingStep === 1 ? 'animate-pulse' : ''}`} />
            </div>
            <span className={`text-sm sm:text-lg font-bold transition-all ${loadingStep >= 1 ? 'text-gray-900' : 'text-gray-400'}`}>
              {t.loadingStep1}
            </span>
            {loadingStep > 1 && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}><CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" /></motion.div>}
          </motion.div>

          <motion.div 
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0.3, y: 10 }}
            animate={{ 
              opacity: loadingStep >= 2 ? 1 : 0.3,
              y: 0,
              scale: loadingStep === 2 ? 1.05 : 1
            }}
          >
            <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all ${loadingStep >= 2 ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-400'}`}>
              <SearchIcon className={`w-7 h-7 sm:w-10 sm:h-10 ${loadingStep === 2 ? 'animate-pulse' : ''}`} />
            </div>
            <span className={`text-sm sm:text-lg font-bold transition-all ${loadingStep >= 2 ? 'text-gray-900' : 'text-gray-400'}`}>
              {t.loadingStep2}
            </span>
            {loadingStep > 2 && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}><CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" /></motion.div>}
          </motion.div>

          <motion.div 
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0.3, y: 10 }}
            animate={{ 
              opacity: loadingStep >= 3 ? 1 : 0.3,
              y: 0,
              scale: loadingStep === 3 ? 1.1 : 1
            }}
          >
            <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all ${loadingStep >= 3 ? 'bg-green-100 text-green-600 shadow-lg shadow-green-100' : 'bg-gray-100 text-gray-400'}`}>
              <Check className="w-7 h-7 sm:w-10 sm:h-10" />
            </div>
            <span className={`text-base sm:text-xl font-extrabold transition-all ${loadingStep >= 3 ? 'text-green-600' : 'text-gray-400'}`}>
              {t.loadingStep3}
            </span>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div id="formular" className="max-w-2xl mx-auto px-3 py-6 sm:p-8 bg-white rounded-2xl sm:rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100">
      <AnimatePresence mode="wait">
        <motion.div key={step} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
          {renderStep()}
        </motion.div>
      </AnimatePresence>
      {notification && (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className={`mt-6 p-4 rounded-2xl flex items-center gap-3 ${notification.type === 'error' ? 'bg-red-50 text-red-700' : 'bg-amber-50 text-amber-700'}`}>
          <MapPin className="w-5 h-5" />
          <span className="font-medium">{notification.message}</span>
        </motion.div>
      )}
    </div>
  );
}
