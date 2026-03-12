'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check, X, HelpCircle, MapPin, Search, ChevronLeft,
  BarChart2, CheckCircle2, SearchIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

declare global {
  interface Window { google?: typeof google; }
}

const TOTAL_STEPS = 6;

const t = {
  step1Title: 'Sind Sie Eigentümer der Liegenschaft?',
  step1Sub: 'Nur Eigentümer können die Eignung Ihres Dachs prüfen lassen.',
  step2Title: 'Um welchen Gebäudetyp handelt es sich?',
  step2Sub: 'Wählen Sie den Typ Ihrer Liegenschaft.',
  step3Title: 'Welche Dachform kommt Ihrer am nächsten?',
  step3Sub: 'Wählen Sie die Dachform, die Ihrer am ähnlichsten ist.',
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
  submitting: 'Wird gesendet…',
  next: 'Weiter',
  back: 'Zurück',
  loadingTitle: 'Wir suchen passende Angebote…',
  loadingStep1: 'Analyse Ihrer Angaben',
  loadingStep2: 'Vergleich mit Installateuren',
  loadingStep3: "3 Offerten ab 15'999 CHF gefunden",
  renterError: 'Leider können wir nur Eigentümern helfen. Als Mieter wenden Sie sich bitte an Ihren Vermieter.',
  requiredFields: 'Bitte füllen Sie alle Pflichtfelder aus.',
  invalidEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
  invalidPhone: 'Bitte geben Sie eine gültige Schweizer Telefonnummer ein.',
};

/* ─── Option Card ─────────────────────────────────────────────────────────── */
interface OptionCardProps {
  label: string;
  sublabel?: string;
  isSelected: boolean;
  onClick: () => void;
  icon?: 'check' | 'x' | 'question';
  imageSrc?: string;
}

function OptionCard({ label, sublabel, onClick, icon, imageSrc }: OptionCardProps) {
  return (
    <button
      onClick={onClick}
      className="relative flex flex-col items-center justify-center rounded-2xl p-5 sm:p-6 bg-white w-full aspect-square active:bg-gray-50"
      style={{ border: '2px solid #e5e7eb', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
    >
      {/* Illustration / icon — all same fixed size */}
      <div className="flex items-center justify-center w-16 h-16 mb-3">
        {imageSrc ? (
          <img src={imageSrc} alt={label} className="w-16 h-16 object-contain" />
        ) : icon === 'check' ? (
          <Check className="w-10 h-10 text-green-500" strokeWidth={1.75} />
        ) : icon === 'x' ? (
          <X className="w-10 h-10 text-red-400" strokeWidth={1.75} />
        ) : (
          <HelpCircle className="w-10 h-10 text-gray-300" strokeWidth={1.75} />
        )}
      </div>

      {/* Label */}
      <p className="text-sm sm:text-base font-bold text-gray-900 text-center leading-tight">
        {label}
      </p>
      {sublabel && (
        <p className="text-xs text-gray-400 mt-0.5">{sublabel}</p>
      )}
    </button>
  );
}

/* ─── Step wrapper ────────────────────────────────────────────────────────── */
function StepWrapper({ title, sub, children }: { title: string; sub: string; children: React.ReactNode }) {
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-2">{title}</h1>
      <p className="text-sm sm:text-base text-gray-500 mb-8 leading-relaxed">{sub}</p>
      {children}
    </div>
  );
}

/* ─── Main component ──────────────────────────────────────────────────────── */
export default function AnfrageForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState<any>({
    isOwner: null, propertyType: null, roofType: null, wantsBattery: null,
    address: '', firstName: '', lastName: '', email: '', phone: '',
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
    const t = setTimeout(() => setErrorMsg(null), 5000);
    return () => clearTimeout(t);
  }, [errorMsg]);

  useEffect(() => {
    const init = () => {
      if (window.google?.maps?.places) {
        autocompleteService.current = new window.google.maps.places.AutocompleteService();
        const div = document.createElement('div');
        placesService.current = new window.google.maps.places.PlacesService(div);
      }
    };
    if (window.google?.maps?.places) { init(); return; }
    const iv = setInterval(() => { if (window.google?.maps?.places) { init(); clearInterval(iv); } }, 100);
    return () => clearInterval(iv);
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
    if (step === 5) {
      if (!selectedAddress) { setErrorMsg('Bitte wählen Sie eine Adresse aus der Liste aus.'); return; }
      setIsLoadingTransition(true);
      for (let p = 1; p <= 3; p++) { setLoadingPhase(p); await new Promise(r => setTimeout(r, 700)); }
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
        (window as any).fbq?.('track', 'Lead', { content_name: 'Solar Quote Request', value: 50.0, currency: 'CHF' });
        (window as any).gtag?.('event', 'conversion', { send_to: 'AW-17901154625/LyaGCIXE-fUbEMHi99dC', value: 1.0, currency: 'CHF' });
        fetch('/api/send-confirmation', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) }).catch(() => {});
        router.push('/danke');
      }
    } finally { setIsSubmitting(false); }
  };

  const progressPct = Math.round(((step - 1) / TOTAL_STEPS) * 100);

  /* ── Loading screen ── */
  if (isLoadingTransition) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-12">{t.loadingTitle}</h2>
        <div className="space-y-8 w-full max-w-xs">
          {[
            { icon: <BarChart2 className="w-7 h-7" />, label: t.loadingStep1, active: loadingPhase >= 1, done: loadingPhase > 1 },
            { icon: <SearchIcon className="w-7 h-7" />, label: t.loadingStep2, active: loadingPhase >= 2, done: loadingPhase > 2 },
            { icon: <Check className="w-7 h-7" />, label: t.loadingStep3, active: loadingPhase >= 3, done: false },
          ].map((item, i) => (
            <motion.div key={i} className="flex flex-col items-center gap-2"
              animate={{ opacity: item.active ? 1 : 0.2, scale: loadingPhase === i + 1 ? 1.05 : 1 }}
              transition={{ duration: 0.25 }}>
              <div className={`w-14 h-14 rounded-full flex items-center justify-center ${item.active ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-300'}`}>
                {item.icon}
              </div>
              <span className={`text-base font-bold ${item.active ? 'text-gray-900' : 'text-gray-300'}`}>{item.label}</span>
              {item.done && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}><CheckCircle2 className="w-5 h-5 text-green-500" /></motion.div>}
            </motion.div>
          ))}
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
            <OptionCard label="Ja" isSelected={formData.isOwner === 'yes'} onClick={() => handleSelect('isOwner', 'yes')} icon="check" />
            <OptionCard label="Nein" isSelected={formData.isOwner === 'no'} onClick={() => handleSelect('isOwner', 'no')} icon="x" />
          </div>
        </StepWrapper>
      );
      case 2: return (
        <StepWrapper title={t.step2Title} sub={t.step2Sub}>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <OptionCard label="Einfamilienhaus" isSelected={formData.propertyType === 'einfamilienhaus'} onClick={() => handleSelect('propertyType', 'einfamilienhaus')} imageSrc="/icons/single-family.png" />
            <OptionCard label="Mehrfamilienhaus" isSelected={formData.propertyType === 'mehrfamilienhaus'} onClick={() => handleSelect('propertyType', 'mehrfamilienhaus')} imageSrc="/icons/multi-family.png" />
            <OptionCard label="Gewerbe" isSelected={formData.propertyType === 'gewerbe'} onClick={() => handleSelect('propertyType', 'gewerbe')} imageSrc="/icons/multi-family.png" />
            <OptionCard label="Sonstiges" isSelected={formData.propertyType === 'sonstiges'} onClick={() => handleSelect('propertyType', 'sonstiges')} icon="question" />
          </div>
        </StepWrapper>
      );
      case 3: return (
        <StepWrapper title={t.step3Title} sub={t.step3Sub}>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <OptionCard label="Satteldach" isSelected={formData.roofType === 'pitched'} onClick={() => handleSelect('roofType', 'pitched')} imageSrc="/icons/pitched-roof.png" />
            <OptionCard label="Pultdach" isSelected={formData.roofType === 'monopitch'} onClick={() => handleSelect('roofType', 'monopitch')} imageSrc="/icons/monopitch-roof.png" />
            <OptionCard label="Flachdach" isSelected={formData.roofType === 'flat'} onClick={() => handleSelect('roofType', 'flat')} imageSrc="/icons/flat-roof.png" />
            <OptionCard label="Sonstiges" isSelected={formData.roofType === 'other'} onClick={() => handleSelect('roofType', 'other')} icon="question" />
          </div>
        </StepWrapper>
      );
      case 4: return (
        <StepWrapper title={t.step4Title} sub={t.step4Sub}>
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            <OptionCard label="Ja" isSelected={formData.wantsBattery === 'yes'} onClick={() => handleSelect('wantsBattery', 'yes')} icon="check" />
            <OptionCard label="Nein" isSelected={formData.wantsBattery === 'no'} onClick={() => handleSelect('wantsBattery', 'no')} icon="x" />
            <OptionCard label="Weiss nicht" isSelected={formData.wantsBattery === 'unknown'} onClick={() => handleSelect('wantsBattery', 'unknown')} icon="question" />
          </div>
        </StepWrapper>
      );
      case 5: return (
        <StepWrapper title={t.step5Title} sub={t.step5Sub}>
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
          <button
            onClick={() => goNext()}
            className={`w-full py-4 rounded-2xl font-bold text-base mt-4 transition-all ${selectedAddress ? 'btn-primary' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
          >
            {t.next}
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
                <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
                  <rect width="20" height="15" rx="2" fill="#D52B1E"/>
                  <rect x="8" y="3" width="4" height="9" fill="white"/>
                  <rect x="3" y="5.5" width="14" height="4" fill="white"/>
                </svg>
                <span className="text-gray-700 font-medium text-sm">+41</span>
              </div>
              <input type="tel" placeholder={`${t.phone} *`}
                className="w-full p-4 outline-none bg-transparent text-base"
                value={formData.phone.replace(/^\+41\s?/, '')}
                onChange={e => { setFormData({ ...formData, phone: '+41 ' + e.target.value.replace(/^\+41\s?/, '') }); setValidationErrors(p => ({ ...p, phone: false })); }}
              />
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }}
            onClick={handleSubmit} disabled={isSubmitting}
            className="w-full btn-primary py-5 rounded-2xl text-lg font-black shadow-lg mt-5 flex items-center justify-center gap-3"
          >
            {isSubmitting ? <><BarChart2 className="animate-spin w-5 h-5" />{t.submitting}</> : t.submit}
          </motion.button>
          <p className="text-[11px] text-center text-gray-400 mt-3">{t.privacyText}</p>
        </StepWrapper>
      );
      default: return null;
    }
  };

  /* ── Shell ── */
  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* ── Thin progress bar ── */}
      <div className="h-1 bg-gray-100 w-full fixed top-0 left-0 z-50">
        <motion.div className="h-full bg-primary" initial={{ width: 0 }}
          animate={{ width: `${progressPct}%` }} transition={{ duration: 0.35, ease: 'easeOut' }} />
      </div>

      {/* ── Header: logo left · step right · close right ── */}
      <header className="fixed top-1 left-0 right-0 z-40 bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 flex items-center justify-between h-14">
          <Link href="/">
            <Image src="/logo-pvpro.png" alt="PVPro.ch" width={130} height={38} className="h-7 w-auto" priority />
          </Link>
          <span className="text-sm font-semibold text-gray-400">{step}/{TOTAL_STEPS}</span>
        </div>
      </header>

      {/* ── Content: starts from top (EnergySage style) ── */}
      <main className="flex-1 flex flex-col pt-20 pb-6">
        <div className="w-full max-w-2xl mx-auto px-5 sm:px-8 pt-8">

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div key={step}
              custom={direction}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>

          {/* Error message */}
          {errorMsg && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              className="mt-5 p-4 rounded-2xl bg-red-50 text-red-700 border border-red-100 flex items-start gap-3">
              <X className="w-5 h-5 mt-0.5 shrink-0" />
              <span className="text-sm font-semibold">{errorMsg}</span>
            </motion.div>
          )}

          {/* Back button */}
          {step > 1 && (
            <div className="mt-5 flex">
              <button onClick={goBack}
                className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 font-semibold transition-colors py-2">
                <ChevronLeft className="w-4 h-4" />
                {t.back}
              </button>
            </div>
          )}
        </div>

      </main>
    </div>
  );
}
