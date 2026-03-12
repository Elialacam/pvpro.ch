'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, HelpCircle, MapPin, Search, ChevronLeft, BarChart2, CheckCircle2, SearchIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

declare global {
  interface Window {
    google?: typeof google;
  }
}

const TOTAL_STEPS = 6;

const t = {
  step1Title: 'Sind Sie Eigentümer der Liegenschaft?',
  step1Sub: 'Nur Eigentümer können ihre Eignung prüfen.',
  step2Title: 'Um welchen Gebäudetyp handelt es sich?',
  step2Sub: 'Wählen Sie Ihren Gebäudetyp.',
  step3Title: 'Welche Dachform kommt Ihrer am nächsten?',
  step3Sub: 'Wählen Sie die passende Dachform.',
  step4Title: 'Möchten Sie einen Stromspeicher integrieren?',
  step4Sub: 'Ein Speicher erhöht Ihren Eigenverbrauch auf bis zu 80%.',
  step5Title: 'Wo befindet sich Ihre Liegenschaft?',
  step5Sub: 'Wir prüfen die Eignung Ihres Dachs und verfügbare Förderungen.',
  step6Title: 'Fast geschafft!',
  step6Sub: 'Geben Sie Ihre Kontaktdaten ein, um Ihre kostenlosen Offerten zu erhalten.',
  addressPlaceholder: 'z.B. Bahnhofstrasse 10, 8001 Zürich',
  firstName: 'Vorname',
  lastName: 'Nachname',
  email: 'E-Mail',
  phone: 'Telefonnummer',
  privacyText: 'Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.',
  submit: 'Kostenlose Offerten anfordern',
  submitting: 'Wird gesendet...',
  next: 'Weiter',
  back: 'Zurück',
  loadingTitle: 'Wir suchen passende Angebote...',
  loadingStep1: 'Analyse Ihrer Angaben',
  loadingStep2: 'Vergleich mit verschiedenen Anbietern',
  loadingStep3: "3 Offerten ab 15'999 CHF gefunden",
  renterError: 'Leider können wir nur Eigentümern helfen. Als Mieter wenden Sie sich bitte an Ihren Vermieter.',
  requiredFields: 'Bitte füllen Sie alle Felder aus.',
  invalidEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
  invalidPhone: 'Bitte geben Sie eine gültige Schweizer Telefonnummer ein.',
  stepLabel: 'Schritt',
  of: 'von',
};

interface OptionCardProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  icon?: 'check' | 'x' | 'question';
  imageSrc?: string;
}

function OptionCard({ label, isSelected, onClick, icon, imageSrc }: OptionCardProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="relative flex flex-col items-center justify-center w-full rounded-2xl py-8 px-4 transition-all duration-200 bg-white"
      style={{
        border: isSelected ? '2.5px solid #C4962A' : '2px solid #e5e7eb',
        boxShadow: isSelected
          ? '0 8px 24px rgba(196,150,42,0.15)'
          : '0 2px 8px rgba(0,0,0,0.04)',
        background: isSelected ? '#FFFBF0' : '#fff',
      }}
    >
      {imageSrc ? (
        <div className="w-20 h-20 flex items-center justify-center mb-4">
          <img src={imageSrc} alt={label} className="w-full h-full object-contain" />
        </div>
      ) : icon === 'check' ? (
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
          style={{ background: isSelected ? '#dcfce7' : '#f0fdf4', border: isSelected ? '2px solid #16a34a' : '2px solid #bbf7d0' }}
        >
          <Check className="w-9 h-9" style={{ color: '#16a34a' }} strokeWidth={3} />
        </div>
      ) : icon === 'x' ? (
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
          style={{ background: isSelected ? '#fee2e2' : '#fef2f2', border: isSelected ? '2px solid #dc2626' : '2px solid #fecaca' }}
        >
          <X className="w-9 h-9" style={{ color: '#dc2626' }} strokeWidth={3} />
        </div>
      ) : (
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
          style={{ background: '#f8fafc', border: '2px solid #e2e8f0' }}
        >
          <HelpCircle className="w-9 h-9 text-gray-400" strokeWidth={2} />
        </div>
      )}

      <span className="text-base font-bold text-gray-900 leading-tight">{label}</span>

      {isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-primary flex items-center justify-center shadow-md"
        >
          <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />
        </motion.div>
      )}
    </motion.button>
  );
}

export default function AnfrageForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<any>({
    isOwner: null, propertyType: null, roofType: null, wantsBattery: null,
    address: '', firstName: '', lastName: '', email: '', phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingTransition, setIsLoadingTransition] = useState(false);
  const [loadingStep, setLoadingStep] = useState(1);
  const [addressSuggestions, setAddressSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  const [selectedPlaceCoords, setSelectedPlaceCoords] = useState<any>(null);
  const [validationErrors, setValidationErrors] = useState<Record<string, boolean>>({});
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const autocompleteService = useRef<any>(null);
  const placesService = useRef<any>(null);

  useEffect(() => {
    if (errorMsg) {
      const timer = setTimeout(() => setErrorMsg(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [errorMsg]);

  useEffect(() => {
    const init = () => {
      if (window.google?.maps?.places) {
        autocompleteService.current = new window.google.maps.places.AutocompleteService();
        const div = document.createElement('div');
        placesService.current = new window.google.maps.places.PlacesService(div);
      }
    };
    if (window.google?.maps?.places) { init(); }
    else {
      const interval = setInterval(() => { if (window.google?.maps?.places) { init(); clearInterval(interval); } }, 100);
      return () => clearInterval(interval);
    }
  }, []);

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
    if (placesService.current) {
      placesService.current.getDetails({ placeId: prediction.place_id, fields: ['geometry'] }, (place: any, status: any) => {
        if (status === 'OK' && place?.geometry?.location) {
          setSelectedPlaceCoords({ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() });
        }
      });
    }
  };

  const trackStep = (n: number) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('trackCustom', `AnfrageStep${n}Completed`, { step_number: n });
    }
  };

  const handleSelect = (field: string, value: any) => {
    if (field === 'isOwner' && value === 'no') {
      setErrorMsg(t.renterError);
      return;
    }
    setFormData((prev: any) => ({ ...prev, [field]: value }));
    setTimeout(() => goNext(field, value), 60);
  };

  const goNext = async (field?: string, value?: any) => {
    const currentStep = step;
    if (currentStep === 5) {
      if (!selectedAddress) {
        setErrorMsg('Bitte wählen Sie eine Adresse aus der Liste aus.');
        return;
      }
      setIsLoadingTransition(true);
      setLoadingStep(1);
      await new Promise(r => setTimeout(r, 700));
      setLoadingStep(2);
      await new Promise(r => setTimeout(r, 700));
      setLoadingStep(3);
      await new Promise(r => setTimeout(r, 700));
      setIsLoadingTransition(false);
    }
    trackStep(currentStep);
    setStep(s => s + 1);
  };

  const validateContact = (): boolean => {
    const errors: Record<string, boolean> = {};
    if (!formData.firstName.trim()) errors.firstName = true;
    if (!formData.lastName.trim()) errors.lastName = true;
    if (!formData.email.trim()) errors.email = true;
    if (!formData.phone.replace(/^\+41\s?/, '').trim()) errors.phone = true;
    setValidationErrors(errors);
    if (Object.keys(errors).length > 0) { setErrorMsg(t.requiredFields); return false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setValidationErrors({ email: true }); setErrorMsg(t.invalidEmail); return false;
    }
    if (formData.phone.replace(/^\+41\s?/, '').replace(/\s/g, '').length < 7) {
      setValidationErrors({ phone: true }); setErrorMsg(t.invalidPhone); return false;
    }
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
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'e5917515-5373-450c-963d-d6dcb976be42',
          'FULL NAME': fullName,
          'PHONE NUMBER': formatPhone(formData.phone),
          EMAIL: formData.email.trim(),
          'COMPLETE ADDRESS': formData.address,
        }),
      });
      if (res.ok) {
        trackStep(6);
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Lead', { content_name: 'Solar Quote Request', value: 50.0, currency: 'CHF' });
        }
        if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
          (window as any).gtag('event', 'conversion', { send_to: 'AW-17901154625/LyaGCIXE-fUbEMHi99dC', value: 1.0, currency: 'CHF' });
        }
        fetch('/api/send-confirmation', {
          method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData),
        }).catch(() => {});
        router.push('/danke');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const progressPct = Math.round(((step - 1) / TOTAL_STEPS) * 100);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <StepWrapper title={t.step1Title} sub={t.step1Sub}>
            <div className="grid grid-cols-2 gap-4">
              <OptionCard label="Ja" isSelected={formData.isOwner === 'yes'} onClick={() => handleSelect('isOwner', 'yes')} icon="check" />
              <OptionCard label="Nein" isSelected={formData.isOwner === 'no'} onClick={() => handleSelect('isOwner', 'no')} icon="x" />
            </div>
          </StepWrapper>
        );
      case 2:
        return (
          <StepWrapper title={t.step2Title} sub={t.step2Sub}>
            <div className="grid grid-cols-2 gap-4">
              <OptionCard label="Einfamilienhaus" isSelected={formData.propertyType === 'einfamilienhaus'} onClick={() => handleSelect('propertyType', 'einfamilienhaus')} imageSrc="/icons/single-family.png" />
              <OptionCard label="Mehrfamilienhaus" isSelected={formData.propertyType === 'mehrfamilienhaus'} onClick={() => handleSelect('propertyType', 'mehrfamilienhaus')} imageSrc="/icons/multi-family.png" />
            </div>
            <div className="flex justify-center mt-4">
              <div className="w-1/2">
                <OptionCard label="Sonstiges" isSelected={formData.propertyType === 'sonstiges'} onClick={() => handleSelect('propertyType', 'sonstiges')} icon="question" />
              </div>
            </div>
          </StepWrapper>
        );
      case 3:
        return (
          <StepWrapper title={t.step3Title} sub={t.step3Sub}>
            <div className="grid grid-cols-2 gap-4">
              <OptionCard label="Satteldach" isSelected={formData.roofType === 'pitched'} onClick={() => handleSelect('roofType', 'pitched')} imageSrc="/icons/pitched-roof.png" />
              <OptionCard label="Pultdach" isSelected={formData.roofType === 'monopitch'} onClick={() => handleSelect('roofType', 'monopitch')} imageSrc="/icons/monopitch-roof.png" />
              <OptionCard label="Flachdach" isSelected={formData.roofType === 'flat'} onClick={() => handleSelect('roofType', 'flat')} imageSrc="/icons/flat-roof.png" />
              <OptionCard label="Sonstiges" isSelected={formData.roofType === 'other'} onClick={() => handleSelect('roofType', 'other')} icon="question" />
            </div>
          </StepWrapper>
        );
      case 4:
        return (
          <StepWrapper title={t.step4Title} sub={t.step4Sub}>
            <div className="grid grid-cols-3 gap-3">
              <OptionCard label="Ja" isSelected={formData.wantsBattery === 'yes'} onClick={() => handleSelect('wantsBattery', 'yes')} icon="check" />
              <OptionCard label="Nein" isSelected={formData.wantsBattery === 'no'} onClick={() => handleSelect('wantsBattery', 'no')} icon="x" />
              <OptionCard label="Weiss nicht" isSelected={formData.wantsBattery === 'unknown'} onClick={() => handleSelect('wantsBattery', 'unknown')} icon="question" />
            </div>
          </StepWrapper>
        );
      case 5:
        return (
          <StepWrapper title={t.step5Title} sub={t.step5Sub}>
            {selectedPlaceCoords && (
              <div className="w-full h-44 rounded-2xl overflow-hidden border border-gray-200 mb-4">
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
                      <span className="text-gray-700 text-sm">{s.description}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => goNext()}
              className={`w-full py-4 rounded-2xl font-bold text-base mt-4 transition-all ${selectedAddress ? 'btn-primary' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
            >
              {t.next}
            </button>
          </StepWrapper>
        );
      case 6:
        return (
          <StepWrapper title={t.step6Title} sub={t.step6Sub}>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input
                  placeholder={`${t.firstName} *`}
                  className={`w-full p-4 border-2 rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 bg-white text-base ${validationErrors.firstName ? 'border-red-400' : 'border-gray-200'}`}
                  onChange={e => { setFormData({ ...formData, firstName: e.target.value }); setValidationErrors(p => ({ ...p, firstName: false })); }}
                />
                <input
                  placeholder={`${t.lastName} *`}
                  className={`w-full p-4 border-2 rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 bg-white text-base ${validationErrors.lastName ? 'border-red-400' : 'border-gray-200'}`}
                  onChange={e => { setFormData({ ...formData, lastName: e.target.value }); setValidationErrors(p => ({ ...p, lastName: false })); }}
                />
              </div>
              <input
                type="email"
                placeholder={`${t.email} *`}
                className={`w-full p-4 border-2 rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 bg-white text-base ${validationErrors.email ? 'border-red-400' : 'border-gray-200'}`}
                onChange={e => { setFormData({ ...formData, email: e.target.value }); setValidationErrors(p => ({ ...p, email: false })); }}
              />
              <div className={`flex items-center w-full border-2 rounded-2xl focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 bg-white overflow-hidden ${validationErrors.phone ? 'border-red-400' : 'border-gray-200'}`}>
                <div className="flex items-center gap-2 pl-4 pr-3 py-4 border-r border-gray-100 shrink-0">
                  <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="15" rx="2" fill="#D52B1E"/>
                    <rect x="8" y="3" width="4" height="9" fill="white"/>
                    <rect x="3" y="5.5" width="14" height="4" fill="white"/>
                  </svg>
                  <span className="text-gray-700 font-medium text-sm">+41</span>
                </div>
                <input
                  type="tel"
                  placeholder={`${t.phone} *`}
                  className="w-full p-4 outline-none bg-transparent text-base"
                  value={formData.phone.replace(/^\+41\s?/, '')}
                  onChange={e => { setFormData({ ...formData, phone: '+41 ' + e.target.value.replace(/^\+41\s?/, '') }); setValidationErrors(p => ({ ...p, phone: false })); }}
                />
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full btn-primary py-5 rounded-2xl text-lg font-black shadow-lg mt-5 flex items-center justify-center gap-3"
            >
              {isSubmitting
                ? <><BarChart2 className="animate-spin w-5 h-5" />{t.submitting}</>
                : t.submit}
            </motion.button>
            <p className="text-[11px] text-center text-gray-400 mt-3">{t.privacyText}</p>
          </StepWrapper>
        );
      default: return null;
    }
  };

  if (isLoadingTransition) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-12">{t.loadingTitle}</h2>
        <div className="space-y-8 w-full max-w-xs">
          {[
            { icon: <BarChart2 className={`w-7 h-7 ${loadingStep === 1 ? 'animate-pulse' : ''}`} />, label: t.loadingStep1, active: loadingStep >= 1, done: loadingStep > 1 },
            { icon: <SearchIcon className={`w-7 h-7 ${loadingStep === 2 ? 'animate-pulse' : ''}`} />, label: t.loadingStep2, active: loadingStep >= 2, done: loadingStep > 2 },
            { icon: <Check className="w-7 h-7" />, label: t.loadingStep3, active: loadingStep >= 3, done: false },
          ].map((item, i) => (
            <motion.div key={i} className="flex flex-col items-center gap-2"
              animate={{ opacity: item.active ? 1 : 0.25, scale: loadingStep === i + 1 ? 1.04 : 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center ${item.active ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-300'}`}>
                {item.icon}
              </div>
              <span className={`text-base font-bold ${item.active ? 'text-gray-900' : 'text-gray-300'}`}>{item.label}</span>
              {item.done && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Thin progress bar — fixed at very top */}
      <div className="h-1 bg-gray-100 w-full fixed top-0 left-0 z-50">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${progressPct}%` }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        />
      </div>

      {/* Header */}
      <header className="fixed top-1 left-0 right-0 z-40 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
          <Link href="/">
            <Image src="/logo-pvpro.png" alt="PVPro.ch" width={140} height={40} className="h-7 w-auto" priority />
          </Link>
          <span className="text-sm font-semibold text-gray-400">
            {t.stepLabel} {step} {t.of} {TOTAL_STEPS}
          </span>
          <Link
            href="/"
            className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
            aria-label="Schliessen"
          >
            <X className="w-5 h-5 text-gray-500" />
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col pt-16 pb-6">
        <div className="flex-1 flex flex-col justify-center w-full max-w-xl mx-auto px-4 sm:px-6 py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="w-full"
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>

          {errorMsg && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 p-4 rounded-2xl bg-red-50 text-red-700 border border-red-100 flex items-start gap-3"
            >
              <X className="w-5 h-5 mt-0.5 shrink-0" />
              <span className="text-sm font-semibold">{errorMsg}</span>
            </motion.div>
          )}

          {step > 1 && !isLoadingTransition && (
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setStep(s => s - 1)}
                className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 font-semibold transition-colors py-2 px-4"
              >
                <ChevronLeft className="w-4 h-4" />
                {t.back}
              </button>
            </div>
          )}
        </div>

        {/* Trust badges */}
        <div className="flex items-center justify-center gap-3 sm:gap-5 px-4 pb-4 flex-wrap">
          {[
            { icon: '✓', text: '100% Kostenlos' },
            { icon: '🔒', text: 'SSL Sicher' },
            { icon: '🛡', text: 'DSGVO Konform' },
            { icon: '☎', text: 'Keine Werbeanrufe' },
          ].map(b => (
            <div key={b.text} className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
              <span>{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

function StepWrapper({ title, sub, children }: { title: string; sub: string; children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2 mb-8">
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">{title}</h1>
        <p className="text-sm text-gray-500">{sub}</p>
      </div>
      {children}
    </div>
  );
}
