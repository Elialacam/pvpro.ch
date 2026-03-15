'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Check } from 'lucide-react';

type WidgetState = 'card' | 'form' | 'success' | 'hidden';

const GOLD  = '#D4AF37';
const NAVY  = '#1F2937';
const CREAM = '#FDF8E8';

export default function CallbackWidget() {
  const pathname = usePathname();
  const [state, setState] = useState<WidgetState>('card');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    document.body.style.overflow = (state === 'form' || state === 'success') ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [state]);

  if (pathname === '/anfrage') return null;
  if (state === 'hidden') return null;

  const formatPhone = (raw: string) => {
    let p = raw.trim().replace(/\s+/g, '').replace(/[^\d+]/g, '');
    if (p.startsWith('+41')) p = '0' + p.slice(3);
    else if (p.startsWith('0041')) p = '0' + p.slice(4);
    if (p.length === 9 && !p.startsWith('0')) p = '0' + p;
    if (p.length === 10 && p.startsWith('0'))
      return `${p.slice(0,3)} ${p.slice(3,6)} ${p.slice(6,8)} ${p.slice(8,10)}`;
    return p;
  };

  const handleSubmit = async () => {
    const errs: Record<string, boolean> = {};
    if (!formData.name.trim())  errs.name  = true;
    if (!formData.phone.trim()) errs.phone = true;
    if (!formData.email.trim()) errs.email = true;
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitting(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'e5917515-5373-450c-963d-d6dcb976be42',
          subject: `Rückrufanfrage - ${formData.name.trim()}`,
          'FULL NAME': formData.name.trim(),
          'PHONE NUMBER': formatPhone(formData.phone),
          EMAIL: formData.email.trim(),
          TYPE: 'Rückrufanfrage',
        }),
      });
      if (res.ok) setState('success');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ─── Floating card ─── */}
      <AnimatePresence>
        {state === 'card' && (
          <motion.div
            key="card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            /* mobile: full-width bottom  |  desktop: 280px bottom-right */
            className="fixed bottom-0 left-0 right-0 z-[9998] rounded-t-2xl
                       sm:bottom-6 sm:right-6 sm:left-auto sm:w-[280px] sm:rounded-2xl
                       shadow-2xl"
            style={{ background: NAVY, overflow: 'visible' }}
          >
            {/* Gold top stripe */}
            <div className="h-1 rounded-t-2xl sm:rounded-t-2xl" style={{ background: GOLD }} />

            {/* X dismiss */}
            <button
              onClick={() => setState('hidden')}
              className="absolute top-2 right-2 z-10 w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4 text-white/50" />
            </button>

            {/* ── Row: text LEFT | photo RIGHT (overflows card) ── */}
            <div className="flex items-end pl-4 pt-4 pb-4">

              {/* Text + button */}
              <div className="flex-1 min-w-0 pr-3">
                <h3 className="text-white font-black leading-tight mb-2" style={{ fontSize: 20 }}>
                  Kostenlose<br />Beratung
                </h3>
                <p className="text-white/65 text-xs leading-relaxed mb-4">
                  Mit wenigen Klicks zur kostenlosen Offerte. Wir rufen Sie zurück und besprechen gemeinsam Ihr Anliegen.
                </p>
                <button
                  onClick={() => setState('form')}
                  className="flex items-center gap-2 py-2.5 px-4 rounded-lg font-bold text-sm whitespace-nowrap transition-colors"
                  style={{ background: '#2a3a4e', border: `2px solid ${GOLD}`, color: '#fff' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#354d65')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#2a3a4e')}
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  Rückruf anfordern
                </button>
              </div>

              {/* Circular photo — overflows significantly to the right */}
              <div
                className="shrink-0 rounded-full overflow-hidden"
                style={{
                  width: 130,
                  height: 130,
                  border: `3px solid ${GOLD}`,
                  marginRight: -40,
                  marginTop: -16,
                  boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
                  flexShrink: 0,
                }}
              >
                <img
                  src="/images/consultant.png"
                  alt="Solarberater"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Centered modal overlay ─── */}
      <AnimatePresence>
        {(state === 'form' || state === 'success') && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.55)' }}
            onClick={e => { if (e.target === e.currentTarget) setState('card'); }}
          >
            <AnimatePresence mode="wait">

              {/* Form modal */}
              {state === 'form' && (
                <motion.div
                  key="form-modal"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between px-5 py-4" style={{ background: NAVY }}>
                    <div className="flex items-center gap-3">
                      <img
                        src="/images/consultant.png"
                        alt="Solarberater"
                        className="w-11 h-11 rounded-full object-cover object-top shrink-0"
                        style={{ border: `2px solid ${GOLD}` }}
                      />
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: GOLD }}>
                          Kostenlose Beratung
                        </p>
                        <h2 className="font-black text-white text-sm leading-tight">
                          Rückruf anfordern
                        </h2>
                        <p className="text-white/50 text-[11px] mt-0.5">Wir melden uns innerhalb von 24h</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setState('card')}
                      className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors ml-2 shrink-0"
                    >
                      <X className="w-4 h-4 text-white/50" />
                    </button>
                  </div>
                  <div className="h-1" style={{ background: GOLD }} />

                  {/* Fields */}
                  <div className="px-5 py-5 space-y-4" style={{ background: CREAM }}>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: NAVY }}>
                        Vor- und Nachname *
                      </label>
                      <input
                        placeholder="z.B. Max Muster"
                        className={`w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-colors bg-white ${errors.name ? 'border-red-300' : 'border-gray-200'}`}
                        onFocus={e => (e.target.style.borderColor = GOLD)}
                        onBlur={e => (e.target.style.borderColor = errors.name ? '#fca5a5' : '#e5e7eb')}
                        value={formData.name}
                        onChange={e => { setFormData(p => ({ ...p, name: e.target.value })); setErrors(p => ({ ...p, name: false })); }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: NAVY }}>
                        Telefonnummer *
                      </label>
                      <div className={`flex items-center rounded-xl border-2 overflow-hidden bg-white ${errors.phone ? 'border-red-300' : 'border-gray-200'}`}>
                        <div className="flex items-center gap-1.5 pl-4 pr-3 py-3 border-r border-gray-200 shrink-0">
                          <svg width="18" height="13" viewBox="0 0 20 15" fill="none">
                            <rect width="20" height="15" rx="2" fill="#D52B1E"/>
                            <rect x="8" y="3" width="4" height="9" fill="white"/>
                            <rect x="3" y="5.5" width="14" height="4" fill="white"/>
                          </svg>
                          <span className="text-xs font-bold text-gray-600">+41</span>
                        </div>
                        <input
                          type="tel"
                          placeholder="079 123 45 67"
                          className="w-full px-3 py-3 text-sm outline-none bg-transparent"
                          value={formData.phone}
                          onChange={e => { setFormData(p => ({ ...p, phone: e.target.value })); setErrors(p => ({ ...p, phone: false })); }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: NAVY }}>
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        placeholder="max@muster.ch"
                        className={`w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-colors bg-white ${errors.email ? 'border-red-300' : 'border-gray-200'}`}
                        onFocus={e => (e.target.style.borderColor = GOLD)}
                        onBlur={e => (e.target.style.borderColor = errors.email ? '#fca5a5' : '#e5e7eb')}
                        value={formData.email}
                        onChange={e => { setFormData(p => ({ ...p, email: e.target.value })); setErrors(p => ({ ...p, email: false })); }}
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={submitting}
                      className="w-full py-3.5 rounded-xl font-black text-sm flex items-center justify-center gap-2 transition-opacity hover:opacity-90 disabled:opacity-60"
                      style={{ background: GOLD, color: NAVY }}
                    >
                      <Phone className="w-4 h-4" />
                      {submitting ? 'Wird gesendet…' : 'Rückruf anfordern'}
                    </button>

                    <p className="text-[11px] text-center text-gray-400">
                      Mit dem Absenden stimmen Sie unserer{' '}
                      <a href="/datenschutz" className="underline hover:text-gray-600">Datenschutzerklärung</a> zu.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Success */}
              {state === 'success' && (
                <motion.div
                  key="success-modal"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
                  className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden"
                >
                  <div className="h-1" style={{ background: GOLD }} />
                  <div className="p-8 text-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ background: CREAM, border: `2px solid ${GOLD}` }}
                    >
                      <Check className="w-8 h-8" style={{ color: GOLD }} strokeWidth={2.5} />
                    </div>
                    <h3 className="font-black text-xl mb-2" style={{ color: NAVY }}>Vielen Dank!</h3>
                    <p className="text-sm text-gray-500 mb-6">
                      Wir haben Ihre Anfrage erhalten und melden uns so bald wie möglich bei Ihnen.
                    </p>
                    <button
                      onClick={() => setState('hidden')}
                      className="py-2.5 px-8 rounded-xl font-bold text-sm text-white"
                      style={{ background: NAVY }}
                    >
                      Schliessen
                    </button>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
