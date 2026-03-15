'use client';

import { useState } from 'react';
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

  return (
    <div className="fixed bottom-6 right-6 z-[9998]">
      <AnimatePresence mode="wait">

        {/* ── Floating card ── */}
        {state === 'card' && (
          <motion.div
            key="card"
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-72 rounded-2xl shadow-2xl overflow-hidden"
            style={{ background: '#0f172a' }}
          >
            {/* Dismiss */}
            <button
              onClick={() => setState('hidden')}
              className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-full text-white/40 hover:text-white transition-colors"
              aria-label="Schliessen"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="p-5 pr-4">
              <div className="flex items-start gap-3">
                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1">Kostenlose Beratung</p>
                  <h3 className="text-white font-black text-base leading-tight mb-2">
                    Wir rufen Sie<br />kostenlos zurück
                  </h3>
                  <p className="text-white/60 text-xs leading-relaxed">
                    In wenigen Minuten zur persönlichen Solarberatung. Unverbindlich.
                  </p>
                </div>
                {/* Photo */}
                <div className="shrink-0">
                  <img
                    src="/images/team-photo.png"
                    alt="Solarberater"
                    className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                  />
                </div>
              </div>

              <button
                onClick={() => setState('form')}
                className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-sm text-gray-900 transition-all hover:opacity-90"
                style={{ background: '#F97316', color: '#fff' }}
              >
                <Phone className="w-4 h-4" />
                Rückruf anfordern
              </button>
            </div>
          </motion.div>
        )}

        {/* ── Callback form ── */}
        {state === 'form' && (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="w-80 bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <div>
                <h3 className="font-black text-gray-900 text-base">Rückruf anfordern</h3>
                <p className="text-xs text-gray-400 mt-0.5">Wir melden uns innerhalb von 24h</p>
              </div>
              <button
                onClick={() => setState('card')}
                className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>

            {/* Fields */}
            <div className="p-5 space-y-3">
              <input
                placeholder="Vor- und Nachname *"
                className={`w-full px-4 py-3 rounded-xl border-2 text-sm outline-none focus:border-orange-400 transition-colors ${errors.name ? 'border-red-300' : 'border-gray-200'}`}
                value={formData.name}
                onChange={e => { setFormData(p => ({ ...p, name: e.target.value })); setErrors(p => ({ ...p, name: false })); }}
              />
              <div className={`flex items-center rounded-xl border-2 overflow-hidden focus-within:border-orange-400 transition-colors ${errors.phone ? 'border-red-300' : 'border-gray-200'}`}>
                <div className="flex items-center gap-1.5 pl-3 pr-2 py-3 border-r border-gray-200 shrink-0">
                  <svg width="18" height="13" viewBox="0 0 20 15" fill="none">
                    <rect width="20" height="15" rx="2" fill="#D52B1E"/>
                    <rect x="8" y="3" width="4" height="9" fill="white"/>
                    <rect x="3" y="5.5" width="14" height="4" fill="white"/>
                  </svg>
                  <span className="text-xs font-semibold text-gray-600">+41</span>
                </div>
                <input
                  type="tel"
                  placeholder="Telefonnummer *"
                  className="w-full px-3 py-3 text-sm outline-none bg-transparent"
                  value={formData.phone}
                  onChange={e => { setFormData(p => ({ ...p, phone: e.target.value })); setErrors(pr => ({ ...pr, phone: false })); }}
                />
              </div>
              <input
                type="email"
                placeholder="E-Mail *"
                className={`w-full px-4 py-3 rounded-xl border-2 text-sm outline-none focus:border-orange-400 transition-colors ${errors.email ? 'border-red-300' : 'border-gray-200'}`}
                value={formData.email}
                onChange={e => { setFormData(p => ({ ...p, email: e.target.value })); setErrors(p => ({ ...p, email: false })); }}
              />

              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="w-full py-3 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2 transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{ background: '#F97316' }}
              >
                {submitting ? 'Wird gesendet…' : 'Absenden'}
              </button>

              <p className="text-[10px] text-center text-gray-400">
                100% kostenlos & unverbindlich
              </p>
            </div>
          </motion.div>
        )}

        {/* ── Success ── */}
        {state === 'success' && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
            className="w-72 bg-white rounded-2xl shadow-2xl p-6 text-center"
          >
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
              <Check className="w-7 h-7 text-green-500" strokeWidth={2.5} />
            </div>
            <h3 className="font-black text-gray-900 text-base mb-1">Anfrage erhalten!</h3>
            <p className="text-sm text-gray-500 mb-4">Wir melden uns so bald wie möglich bei Ihnen.</p>
            <button
              onClick={() => setState('hidden')}
              className="text-xs text-gray-400 hover:text-gray-600 font-semibold"
            >
              Schliessen
            </button>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
