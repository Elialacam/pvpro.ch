'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, HelpCircle, ChevronRight, Loader2, MapPin, Home, Building2, Warehouse, AlertCircle, Search, BarChart2 } from 'lucide-react';
import { Locale } from '@/lib/i18n';
import { useLocale } from '@/lib/LocaleContext';

// Google Maps types
declare global {
  interface Window {
    google?: typeof google;
  }
}

// Form translations per locale
const formTranslations: Record<Locale, {
  step1Title: string;
  yes: string;
  no: string;
  step2Title: string;
  singleFamily: string;
  multiFamily: string;
  other: string;
  step3Title: string;
  sonstiges: string;
  step4Title: string;
  addressLabel: string;
  addressPlaceholder: string;
  step5Title: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  privacyText: string;
  back: string;
  next: string;
  submit: string;
  submitting: string;
  loadingTitle: string;
  loadingStep1: string;
  loadingStep2: string;
  loadingStep3: string;
  renterError: string;
}> = {
  de: {
    step1Title: 'Sind Sie Eigentümer der Liegenschaft?',
    yes: 'Ja',
    no: 'Nein',
    step2Title: 'Um welchen Gebäudetyp handelt es sich?',
    singleFamily: 'Einfamilien-\nhaus',
    multiFamily: 'Mehrfamilien-\nhaus',
    other: 'Sonstiges',
    step3Title: 'Bewohnen Sie die Immobilie, auf der die PV-Anlage installiert werden soll?',
    sonstiges: 'Sonstiges',
    step4Title: 'Adresse',
    addressLabel: 'Adresse',
    addressPlaceholder: 'z.B. Bahnhofstrasse 10, 8001 Zürich',
    step5Title: 'Ihre Kontaktdaten',
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
    singleFamily: 'Maison\nindividuelle',
    multiFamily: 'Immeuble\ncollectif',
    other: 'Autre',
    step3Title: 'Habitez-vous le bien où l\'installation PV sera installée?',
    sonstiges: 'Autre',
    step4Title: 'Adresse',
    addressLabel: 'Adresse',
    addressPlaceholder: 'p.ex. Rue de la Gare 10, 1201 Genève',
    step5Title: 'Vos coordonnées',
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
  },
  en: {
    step1Title: 'Are you the property owner?',
    yes: 'Yes',
    no: 'No',
    step2Title: 'What type of building is it?',
    singleFamily: 'Single\nfamily',
    multiFamily: 'Multi\nfamily',
    other: 'Other',
    step3Title: 'Do you live in the property where the PV system will be installed?',
    sonstiges: 'Other',
    step4Title: 'Address',
    addressLabel: 'Address',
    addressPlaceholder: 'e.g. Bahnhofstrasse 10, 8001 Zurich',
    step5Title: 'Your contact details',
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
  },
};

interface AddressPrediction {
  place_id: string;
  description: string;
}

type FormData = {
  isOwner: 'yes' | 'no' | null;
  propertyType: 'einfamilienhaus' | 'mehrfamilienhaus' | 'sonstiges' | null;
  wantsBattery: 'yes' | 'no' | 'unknown' | null;
  address: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

const initialFormData: FormData = {
  isOwner: null,
  propertyType: null,
  wantsBattery: null,
  address: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
};

export default function SolarForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [addressSuggestions, setAddressSuggestions] = useState<AddressPrediction[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [notification, setNotification] = useState<{ message: string; type: 'error' | 'warning' } | null>(null);
  const [isLoadingTransition, setIsLoadingTransition] = useState(false);
  const [selectedPlaceCoords, setSelectedPlaceCoords] = useState<{ lat: number; lng: number } | null>(null);
  const autocompleteService = useRef<google.maps.places.AutocompleteService | null>(null);
  const placesService = useRef<google.maps.places.PlacesService | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const locale = useLocale();
  const t = formTranslations[locale];

  // Auto-hide notification after 5 seconds
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const showNotification = (message: string, type: 'error' | 'warning' = 'error') => {
    setNotification({ message, type });
  };

  // Initialize Google Places Autocomplete and Places Service
  useEffect(() => {
    const initServices = () => {
      if (typeof window !== 'undefined' && window.google && window.google.maps && window.google.maps.places) {
        autocompleteService.current = new window.google.maps.places.AutocompleteService();
        // Create a dummy element for PlacesService (required by Google API)
        const dummyDiv = document.createElement('div');
        placesService.current = new window.google.maps.places.PlacesService(dummyDiv);
      }
    };

    // Try immediately if Google Maps is already loaded
    if (window.google?.maps?.places) {
      initServices();
    } else {
      // Wait for Google Maps to load
      const checkInterval = setInterval(() => {
        if (window.google?.maps?.places) {
          initServices();
          clearInterval(checkInterval);
        }
      }, 100);

      // Clean up after 10 seconds max
      setTimeout(() => clearInterval(checkInterval), 10000);

      return () => clearInterval(checkInterval);
    }
  }, []);

  const handleAddressChange = async (value: string) => {
    setFormData({ ...formData, address: value });

    if (value.length > 2 && autocompleteService.current) {
      try {
        const response = await autocompleteService.current.getPlacePredictions({
          input: value,
          componentRestrictions: { country: 'ch' },
          types: ['address'],
        });
        setAddressSuggestions(response.predictions || []);
        setShowSuggestions(true);
      } catch (error) {
        console.error('Address autocomplete error:', error);
      }
    } else {
      setAddressSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const selectAddress = (prediction: AddressPrediction) => {
    setFormData({ ...formData, address: prediction.description });
    setShowSuggestions(false);
    setAddressSuggestions([]);

    // Get place details to get coordinates for map
    if (placesService.current) {
      placesService.current.getDetails(
        { placeId: prediction.place_id, fields: ['geometry'] },
        (place, status) => {
          if (status === window.google?.maps?.places?.PlacesServiceStatus?.OK && place?.geometry?.location) {
            setSelectedPlaceCoords({
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
            });
          }
        }
      );
    }
  };

  const handleSelection = async (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    
    // Auto-advance after a small delay for better UX
    setTimeout(() => {
      nextStep();
    }, 300);
  };

  const nextStep = async () => {
    if (step === 1 && formData.isOwner === 'no') {
      showNotification(t.renterError, 'warning');
      return;
    }

    // Show loading transition when moving from address (step 4) to contact (step 5)
    if (step === 4) {
      if (window.fbq) {
        window.fbq('track', 'Lead', {
          content_category: 'Solar Installation',
          content_name: 'Step 4 Address Completed'
        });
      }
      setIsLoadingTransition(true);
      // Simulate analysis time
      await new Promise(resolve => setTimeout(resolve, 2500));
      setIsLoadingTransition(false);
    } else if (window.fbq) {
      window.fbq('track', 'Step' + step + 'Completed');
    }

    setStep(step + 1);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.isOwner !== null;
      case 2:
        return formData.propertyType !== null;
      case 3:
        return formData.wantsBattery !== null;
      case 4:
        return formData.address.length > 5;
      case 5:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Send form data directly to Web3Forms to bypass CORS and backend issues
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'e5917515-5373-450c-963d-d6dcb976be42',
          subject: `Neue Solaranfrage - ${formData.firstName} ${formData.lastName}`,
          from_name: 'PVPro.ch',
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          address: formData.address || 'Nicht angegeben',
          property_type: formData.propertyType,
          owner: formData.isOwner === 'yes' ? 'Ja' : 'Nein',
          battery_interest: formData.wantsBattery,
        }),
      });

      if (response.ok) {
        if (window.fbq) {
          window.fbq('track', 'SubmitApplication', {
            value: 15999,
            currency: 'CHF'
          });
        }
        router.push('/danke');
      } else {
        const errorData = await response.json();
        showNotification(errorData.message || 'Fehler beim Senden. Bitte versuchen Sie es erneut.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showNotification('Fehler beim Senden. Bitte versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center">
              {t.step1Title}
            </h3>
            <div className="flex gap-6 justify-center">
              <button
                onClick={() => handleSelection('isOwner', 'yes')}
                className={`flex flex-col items-center justify-center w-40 h-40 rounded-2xl border-2 transition-all shadow-md hover:shadow-lg hover:scale-105 ${
                  formData.isOwner === 'yes'
                    ? 'border-green-500 bg-green-50 ring-2 ring-green-200'
                    : 'border-gray-200 hover:border-green-300 bg-white'
                }`}
              >
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-3 ${
                  formData.isOwner === 'yes' ? 'bg-green-500' : 'bg-green-100'
                }`}>
                  <Check className={`w-12 h-12 ${formData.isOwner === 'yes' ? 'text-white' : 'text-green-600'}`} strokeWidth={3} />
                </div>
                <span className="font-bold text-lg text-gray-900">{t.yes}</span>
              </button>
              <button
                onClick={() => handleSelection('isOwner', 'no')}
                className={`flex flex-col items-center justify-center w-40 h-40 rounded-2xl border-2 transition-all shadow-md hover:shadow-lg hover:scale-105 ${
                  formData.isOwner === 'no'
                    ? 'border-red-500 bg-red-50 ring-2 ring-red-200'
                    : 'border-gray-200 hover:border-red-300 bg-white'
                }`}
              >
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-3 ${
                  formData.isOwner === 'no' ? 'bg-red-500' : 'bg-red-100'
                }`}>
                  <X className={`w-12 h-12 ${formData.isOwner === 'no' ? 'text-white' : 'text-red-600'}`} strokeWidth={3} />
                </div>
                <span className="font-bold text-lg text-gray-900">{t.no}</span>
              </button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center">
              {t.step2Title}
            </h3>
            <div className="flex gap-4 justify-center flex-wrap">
              {[
                { value: 'einfamilienhaus', label: t.singleFamily, icon: Home, color: 'amber' as const },
                { value: 'mehrfamilienhaus', label: t.multiFamily, icon: Building2, color: 'blue' as const },
                { value: 'sonstiges', label: t.other, icon: Warehouse, color: 'purple' as const },
              ].map((option) => {
                const Icon = option.icon;
                const isSelected = formData.propertyType === option.value;
                const colorMap = {
                  amber: { bg: isSelected ? 'bg-amber-500' : 'bg-amber-100', text: isSelected ? 'text-white' : 'text-amber-600', border: 'border-amber-500', ring: 'ring-amber-200', bgCard: 'bg-amber-50' },
                  blue: { bg: isSelected ? 'bg-blue-500' : 'bg-blue-100', text: isSelected ? 'text-white' : 'text-blue-600', border: 'border-blue-500', ring: 'ring-blue-200', bgCard: 'bg-blue-50' },
                  purple: { bg: isSelected ? 'bg-purple-500' : 'bg-purple-100', text: isSelected ? 'text-white' : 'text-purple-600', border: 'border-purple-500', ring: 'ring-purple-200', bgCard: 'bg-purple-50' },
                };
                const colorClasses = colorMap[option.color];
                return (
                  <button
                    key={option.value}
                    onClick={() => handleSelection('propertyType', option.value as FormData['propertyType'])}
                    className={`flex flex-col items-center justify-center w-36 h-36 px-3 rounded-2xl border-2 transition-all shadow-md hover:shadow-lg hover:scale-105 ${
                      isSelected
                        ? `${colorClasses.border} ${colorClasses.bgCard} ring-2 ${colorClasses.ring}`
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${colorClasses.bg}`}>
                      <Icon className={`w-9 h-9 ${colorClasses.text}`} strokeWidth={2} />
                    </div>
                    <span className="font-bold text-sm text-center whitespace-pre-line leading-tight text-gray-900">{option.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center px-2">
              {t.step3Title}
            </h3>
            <div className="flex gap-4 justify-center flex-wrap">
              {[
                { value: 'yes', label: t.yes, icon: Check, color: 'green' as const },
                { value: 'no', label: t.no, icon: X, color: 'red' as const },
                { value: 'unknown', label: t.sonstiges, icon: HelpCircle, color: 'gray' as const },
              ].map((option) => {
                const Icon = option.icon;
                const isSelected = formData.wantsBattery === option.value;
                const colorMap = {
                  green: { bg: isSelected ? 'bg-green-500' : 'bg-green-100', text: isSelected ? 'text-white' : 'text-green-600', border: 'border-green-500', ring: 'ring-green-200', bgCard: 'bg-green-50' },
                  red: { bg: isSelected ? 'bg-red-500' : 'bg-red-100', text: isSelected ? 'text-white' : 'text-red-600', border: 'border-red-500', ring: 'ring-red-200', bgCard: 'bg-red-50' },
                  gray: { bg: isSelected ? 'bg-gray-500' : 'bg-gray-100', text: isSelected ? 'text-white' : 'text-gray-600', border: 'border-gray-500', ring: 'ring-gray-200', bgCard: 'bg-gray-50' },
                };
                const colorClasses = colorMap[option.color];
                return (
                  <button
                    key={option.value}
                    onClick={() => handleSelection('wantsBattery', option.value as FormData['wantsBattery'])}
                    className={`flex flex-col items-center justify-center w-36 h-36 rounded-2xl border-2 transition-all shadow-md hover:shadow-lg hover:scale-105 ${
                      isSelected
                        ? `${colorClasses.border} ${colorClasses.bgCard} ring-2 ${colorClasses.ring}`
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${colorClasses.bg}`}>
                      <Icon className={`w-9 h-9 ${colorClasses.text}`} strokeWidth={2.5} />
                    </div>
                    <span className="font-bold text-gray-900">{option.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center">
              {t.step4Title}
            </h3>

            {/* Map Display */}
            {selectedPlaceCoords && (
              <div className="w-full h-48 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(formData.address)}&zoom=17&maptype=satellite`}
                />
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm text-gray-600">{t.addressLabel}</label>
              <div className="relative flex items-center gap-2 p-3 border border-gray-200 rounded-lg bg-gray-50">
                <Home className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleAddressChange(e.target.value)}
                  onFocus={() => formData.address.length > 2 && setShowSuggestions(true)}
                  placeholder={t.addressPlaceholder}
                  className="flex-1 bg-transparent outline-none text-gray-900"
                />
                {showSuggestions && addressSuggestions.length > 0 && (
                  <div className="absolute z-10 left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
                    {addressSuggestions.map((suggestion) => (
                      <button
                        key={suggestion.place_id}
                        onClick={() => selectAddress(suggestion)}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 border-b border-gray-100 last:border-b-0 flex items-center gap-2"
                      >
                        <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <span className="text-sm">{suggestion.description}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <h3 className="text-xl sm:text-lg font-semibold text-gray-900 text-center">
              {t.step5Title}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                placeholder={t.firstName}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                placeholder={t.lastName}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder={t.email}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder={t.phone}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
            <p className="text-xs text-gray-500 text-center">
              {t.privacyText}
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  const totalSteps = 5;

  // Loading transition screen
  if (isLoadingTransition) {
    return (
      <div id="formular" className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 relative">
        <div className="flex flex-col items-center justify-center py-8 space-y-8">
          <h2 className="text-2xl font-bold text-gray-900">{t.loadingTitle}</h2>

          <div className="space-y-6 w-full max-w-xs">
            {/* Step 1: Analyzing */}
            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0 }}
            >
              <div className="w-16 h-16 flex items-center justify-center">
                <BarChart2 className="w-12 h-12 text-primary" strokeWidth={1.5} />
              </div>
              <span className="text-gray-700 font-medium">{t.loadingStep1}</span>
            </motion.div>

            {/* Step 2: Comparing */}
            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="w-16 h-16 flex items-center justify-center">
                <Search className="w-12 h-12 text-primary" strokeWidth={1.5} />
              </div>
              <span className="text-gray-700 font-medium">{t.loadingStep2}</span>
            </motion.div>

            {/* Step 3: Found quotes */}
            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              <div className="w-16 h-16 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: 1, ease: "linear" }}
                >
                  <Loader2 className="w-12 h-12 text-primary" strokeWidth={1.5} />
                </motion.div>
              </div>
              <span className="text-gray-700 font-medium">{t.loadingStep3}</span>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="formular" className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 relative">
      {/* Notification Toast */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute -top-16 left-0 right-0 mx-auto max-w-sm p-4 rounded-lg shadow-lg flex items-center gap-3 ${
              notification.type === 'error'
                ? 'bg-red-50 border border-red-200 text-red-800'
                : 'bg-amber-50 border border-amber-200 text-amber-800'
            }`}
          >
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm flex-1">{notification.message}</p>
            <button
              onClick={() => setNotification(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <div className="flex gap-1 mb-6">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-all ${
              i < step ? 'bg-primary' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>

      {/* Navigation - Hide back button after step 3 (once address step is reached) */}
      <div className="flex justify-between mt-6 pt-4 border-t border-gray-100">
        {step > 1 && step < 4 ? (
          <button
            onClick={() => setStep(step - 1)}
            className="flex items-center gap-1 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            {t.back}
          </button>
        ) : (
          <div />
        )}

        {step === 4 ? (
          <button
            onClick={nextStep}
            disabled={!canProceed()}
            className={`btn-primary flex items-center gap-2 ${
              !canProceed() ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {t.next}
            <ChevronRight className="w-5 h-5" />
          </button>
        ) : step === 5 ? (
          <button
            onClick={handleSubmit}
            disabled={!canProceed() || isSubmitting}
            className="btn-primary flex items-center gap-2 min-w-[180px] justify-center"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                {t.submitting}
              </>
            ) : (
              t.submit
            )}
          </button>
        ) : null}
      </div>
    </div>
  );
}
