'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Check } from 'lucide-react';

type WidgetState = 'card' | 'form' | 'success' | 'hidden';

export default function CallbackWidget() {
  const pathname = usePathname();
  const [state, setState] = useState<WidgetState>('card');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  /* Lock body scroll when modal is open */
  useEffect(() => {
    if (state === 'form' || state === 'success') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
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
      return `${p.slice(0, 3)} ${p.slice(3, 6)} ${p.slice(6, 8)} ${p.slice(8, 10)}`;
    return p;
  };

  const handleSubmit = async () => {
    const errs: Record<string, boolean> = {};
    if (!formData.name.trim()) errs.name = true;
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

  const inputBase = 'w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-colors bg-white';

  return (
    <>
      {/* ── Floating card (bottom right) ── */}
      <AnimatePresence>
        {state === 'card' && (
          <motion.div
            key="card"
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-6 right-6 z-[9998] rounded-2xl shadow-2xl overflow-visible"
            style={{ background: '#29B4F3', width: 300 }}
          >
            <button
              onClick={() => setState('hidden')}
              className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors z-10"
              aria-label="Schliessen"
            >
              <X className="w-4 h-4 text-white" />
            </button>

            <div className="flex items-end pt-5 pb-5 pl-5 pr-2 gap-2">
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-black text-xl leading-tight mb-2">
                  Kostenlose<br />Beratung
                </h3>
                <p className="text-white/90 text-xs leading-relaxed mb-4">
                  Mit wenigen Klicks zur kostenlosen Offerte. Wir rufen Sie zurück und besprechen gemeinsam Ihr Anliegen.
                </p>
                <button
                  onClick={() => setState('form')}
                  className="flex items-center gap-2 py-2.5 px-5 rounded-lg font-bold text-sm text-white transition-all hover:opacity-90"
                  style={{ background: '#1a2332' }}
                >
                  <Phone className="w-4 h-4" />
                  Rückruf anfordern
                </button>
              </div>
              <div className="shrink-0 self-end" style={{ marginBottom: -20, marginRight: -6 }}>
                <img
                  src="/images/consultant.png"
                  alt="Solarberater"
                  className="rounded-full object-cover object-top border-2 border-white/30"
                  style={{ width: 100, height: 100 }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Full-screen modal overlay ── */}
      <AnimatePresence>
        {(state === 'form' || state === 'success') && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.5)' }}
            onClick={(e) => { if (e.target === e.currentTarget) setState('card'); }}
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
                  {/* Modal header */}
                  <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <img
                        src="/images/consultant.png"
                        alt="Solarberater"
                        className="w-12 h-12 rounded-full object-cover object-top"
                      />
                      <div>
                        <h2 className="font-black text-gray-900 text-lg leading-tight">Rückruf anfordern</h2>
                        <p className="text-xs text-gray-400 mt-0.5">Kostenlos & unverbindlich — wir melden uns innerhalb 24h</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setState('card')}
                      className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors ml-2"
                    >
                      <X className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>

                  {/* Form fields */}
                  <div className="px-6 py-6 space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Vor- und Nachname *</label>
                      <input
                        placeholder="z.B. Max Muster"
                        className={`${inputBase} ${errors.name ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-sky-400'}`}
                        value={formData.name}
                        onChange={e => { setFormData(p => ({ ...p, name: e.target.value })); setErrors(p => ({ ...p, name: false })); }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Telefonnummer *</label>
                      <div className={`flex items-center rounded-xl border-2 overflow-hidden focus-within:border-sky-400 transition-colors bg-white ${errors.phone ? 'border-red-300' : 'border-gray-200'}`}>
                        <div className="flex items-center gap-1.5 pl-4 pr-3 py-3 border-r border-gray-200 shrink-0">
                          <svg width="18" height="13" viewBox="0 0 20 15" fill="none">
                            <rect width="20" height="15" rx="2" fill="#D52B1E"/>
                            <rect x="8" y="3" width="4" height="9" fill="white"/>
                            <rect x="3" y="5.5" width="14" height="4" fill="white"/>
                          </svg>
                          <span className="text-xs font-semibold text-gray-600">+41</span>
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
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">E-Mail *</label>
                      <input
                        type="email"
                        placeholder="max@muster.ch"
                        className={`${inputBase} ${errors.email ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-sky-400'}`}
                        value={formData.email}
                        onChange={e => { setFormData(p => ({ ...p, email: e.target.value })); setErrors(p => ({ ...p, email: false })); }}
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={submitting}
                      className="w-full py-3.5 rounded-xl font-black text-white text-sm flex items-center justify-center gap-2 transition-opacity hover:opacity-90 disabled:opacity-60 mt-2"
                      style={{ background: '#29B4F3' }}
                    >
                      <Phone className="w-4 h-4" />
                      {submitting ? 'Wird gesendet…' : 'Rückruf anfordern'}
                    </button>

                    <p className="text-[11px] text-center text-gray-400 leading-relaxed">
                      Mit dem Absenden stimmen Sie unserer{' '}
                      <a href="/datenschutz" className="underline hover:text-gray-600">Datenschutzerklärung</a>{' '}zu.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Success state */}
              {state === 'success' && (
                <motion.div
                  key="success-modal"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
                  className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8 text-center"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#e0f7fa' }}>
                    <Check className="w-8 h-8" style={{ color: '#29B4F3' }} strokeWidth={2.5} />
                  </div>
                  <h3 className="font-black text-gray-900 text-xl mb-2">Vielen Dank!</h3>
                  <p className="text-sm text-gray-500 mb-6">Wir haben Ihre Anfrage erhalten und melden uns so bald wie möglich bei Ihnen.</p>
                  <button
                    onClick={() => setState('hidden')}
                    className="py-2.5 px-8 rounded-xl font-bold text-white text-sm"
                    style={{ background: '#29B4F3' }}
                  >
                    Schliessen
                  </button>
                </motion.div>
              )}

            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
