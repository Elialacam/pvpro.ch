'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, HelpCircle, MapPin, Home, Building2, Warehouse, BarChart2 } from 'lucide-react';
import { Locale } from '@/lib/i18n';
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
    singleFamily: 'Einfamilien-\nhaus',
    multiFamily: 'Mehrfamilien-\nhaus',
    other: 'Sonstiges',
    step3Title: 'Bewohnen Sie die Immobilie, auf della die PV-Anlage installiert werden soll?',
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
  it: {
    step1Title: 'È il proprietario dell\'immobile?',
    yes: 'Sì',
    no: 'No',
    step2Title: 'Che tipo di edificio è?',
    singleFamily: 'Casa\nunifamiliare',
    multiFamily: 'Casa\nplurifamiliare',
    other: 'Altro',
    step3Title: 'Abita nell\'immobile in cui verrà installato l\'impianto fotovoltaico?',
    sonstiges: 'Altro',
    step4Title: 'Indirizzo',
    addressLabel: 'Indirizzo',
    addressPlaceholder: 'es. Via Stazione 10, 8001 Zurigo',
    step5Title: 'I tuoi dati di contatto',
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

  const handleSelection = (field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
    setTimeout(() => nextStep(), 300);
  };

  const nextStep = async () => {
    if (step === 1 && formData.isOwner === 'no') {
      setNotification({ message: t.renterError, type: 'warning' });
      return;
    }
    if (step === 4) {
      setIsLoadingTransition(true);
      await new Promise(r => setTimeout(r, 2500));
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
            <div className="flex gap-6 justify-center flex-wrap">
              <RealisticButton label={t.yes} isSelected={formData.isOwner === 'yes'} onClick={() => handleSelection('isOwner', 'yes')} icon={Check} color="green" subLabel="Eigentümer" />
              <RealisticButton label={t.no} isSelected={formData.isOwner === 'no'} onClick={() => handleSelection('isOwner', 'no')} icon={X} color="red" subLabel="Mieter" />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8">
            <h3 className="text-xl sm:text-2xl font-sans font-bold text-gray-900 text-center">{t.step2Title}</h3>
            <div className="flex gap-6 justify-center flex-wrap">
              <RealisticButton label={t.singleFamily} isSelected={formData.propertyType === 'einfamilienhaus'} onClick={() => handleSelection('propertyType', 'einfamilienhaus')} icon={Home} color="amber" />
              <RealisticButton label={t.multiFamily} isSelected={formData.propertyType === 'mehrfamilienhaus'} onClick={() => handleSelection('propertyType', 'mehrfamilienhaus')} icon={Building2} color="blue" />
              <RealisticButton label={t.other} isSelected={formData.propertyType === 'sonstiges'} onClick={() => handleSelection('propertyType', 'sonstiges')} icon={Warehouse} color="purple" />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-8">
            <h3 className="text-xl sm:text-2xl font-sans font-bold text-gray-900 text-center">{t.step3Title}</h3>
            <div className="flex gap-6 justify-center flex-wrap">
              <RealisticButton label={t.yes} isSelected={formData.wantsBattery === 'yes'} onClick={() => handleSelection('wantsBattery', 'yes')} icon={Check} color="green" />
              <RealisticButton label={t.no} isSelected={formData.wantsBattery === 'no'} onClick={() => handleSelection('wantsBattery', 'no')} icon={X} color="red" />
              <RealisticButton label={t.sonstiges} isSelected={formData.wantsBattery === 'unknown'} onClick={() => handleSelection('wantsBattery', 'unknown')} icon={HelpCircle} color="gray" />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-sans font-bold text-gray-900 text-center">{t.step4Title}</h3>
            <input 
              className="w-full p-4 border rounded-xl"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              placeholder={t.addressPlaceholder}
            />
            <button onClick={nextStep} className="w-full btn-primary mt-4">Weiter</button>
          </div>
        );
      case 5:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-center">{t.step5Title}</h3>
            <div className="grid grid-cols-2 gap-4">
              <input placeholder={t.firstName} className="p-3 border rounded" onChange={e => setFormData({...formData, firstName: e.target.value})} />
              <input placeholder={t.lastName} className="p-3 border rounded" onChange={e => setFormData({...formData, lastName: e.target.value})} />
            </div>
            <input placeholder={t.email} className="w-full p-3 border rounded" onChange={e => setFormData({...formData, email: e.target.value})} />
            <input placeholder={t.phone} className="w-full p-3 border rounded" onChange={e => setFormData({...formData, phone: e.target.value})} />
            <button onClick={handleSubmit} className="w-full btn-primary" disabled={isSubmitting}>{isSubmitting ? t.submitting : t.submit}</button>
          </div>
        );
      default: return null;
    }
  };

  if (isLoadingTransition) {
    return (
      <div className="p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold">{t.loadingTitle}</h2>
        <div className="flex justify-center"><BarChart2 className="w-12 h-12 text-primary animate-pulse" /></div>
        <p>{t.loadingStep1}</p>
      </div>
    );
  }

  return (
    <div id="formular" className="max-w-2xl mx-auto p-6 bg-white rounded-3xl shadow-2xl border border-gray-100">
      <AnimatePresence mode="wait">
        <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
          {renderStep()}
        </motion.div>
      </AnimatePresence>
      {notification && (
        <div className={`mt-4 p-4 rounded-xl ${notification.type === 'error' ? 'bg-red-50 text-red-700' : 'bg-amber-50 text-amber-700'}`}>
          {notification.message}
        </div>
      )}
    </div>
  );
}
