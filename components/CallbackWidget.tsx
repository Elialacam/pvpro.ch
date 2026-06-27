'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ChevronDown, Send } from 'lucide-react';

const GOLD = '#D4AF37';
const NAVY = '#1F2937';

const CONSULTANT_NAME = 'Lukas Meier';

export default function CallbackWidget() {
  const pathname = usePathname();

  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(true);
  const [sent, setSent] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [teaser, setTeaser] = useState(false);

  const [formData, setFormData] = useState({ firstName: '', lastName: '', phone: '', email: '' });
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  /* Typing → messages reveal each time the chat opens (and not yet sent) */
  useEffect(() => {
    if (open && !sent) {
      setRevealed(false);
      const t = setTimeout(() => setRevealed(true), 850);
      return () => clearTimeout(t);
    }
  }, [open, sent]);

  /* Teaser bubble pops while collapsed */
  useEffect(() => {
    if (!open && !hidden) {
      const t = setTimeout(() => setTeaser(true), 1400);
      return () => clearTimeout(t);
    }
    setTeaser(false);
  }, [open, hidden]);

  if (pathname === '/anfrage') return null;
  if (hidden) return null;

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
    if (!formData.firstName.trim()) errs.firstName = true;
    if (!formData.lastName.trim()) errs.lastName = true;
    if (!formData.phone.trim()) errs.phone = true;
    if (!formData.email.trim()) errs.email = true;
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitting(true);
    try {
      const fullName = `${formData.firstName.trim()} ${formData.lastName.trim()}`;
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'e5917515-5373-450c-963d-d6dcb976be42',
          subject: `Rückrufanfrage - ${fullName}`,
          'FULL NAME': fullName,
          'PHONE NUMBER': formatPhone(formData.phone),
          EMAIL: formData.email.trim(),
          TYPE: 'Rückrufanfrage',
        }),
      });
      if (res.ok) setSent(true);
    } finally {
      setSubmitting(false);
    }
  };

  const inputBase =
    'w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none transition-all bg-white text-gray-800 placeholder:text-gray-400';

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9998] flex flex-col items-end gap-3">
      {/* ════════════ EXPANDED CHAT ════════════ */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, scale: 0.6, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 24 }}
            transition={{ type: 'spring', stiffness: 320, damping: 26 }}
            style={{
              transformOrigin: 'bottom right',
              width: 'min(360px, calc(100vw - 32px))',
            }}
            className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5"
          >
            {/* ── Header ── */}
            <div
              className="relative px-4 pt-4 pb-5"
              style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0f172a 100%)` }}
            >
              {/* subtle animated glow */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full blur-2xl"
                style={{ background: GOLD, opacity: 0.18 }}
                animate={{ scale: [1, 1.25, 1], opacity: [0.12, 0.22, 0.12] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="relative flex items-center gap-3">
                <div className="relative shrink-0">
                  <img
                    src="/images/consultant.png"
                    alt="Solarberater"
                    className="h-11 w-11 rounded-full object-cover object-[50%_28%]"
                    style={{ border: `2px solid ${GOLD}` }}
                  />
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#0f172a] bg-green-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-extrabold text-white">{CONSULTANT_NAME}</p>
                  <p className="flex items-center gap-1.5 text-[11px] text-white/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                    Online · Antwortet sofort
                  </p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10"
                  aria-label="Minimieren"
                >
                  <ChevronDown className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setHidden(true)}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10"
                  aria-label="Schliessen"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* ── Body ── */}
            <div
              className="max-h-[60vh] overflow-y-auto px-4 py-4"
              style={{ background: '#F1F5F9' }}
            >
              <AnimatePresence mode="wait">
                {sent ? (
                  /* SUCCESS */
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center py-6 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.05 }}
                      className="mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                      style={{ background: GOLD }}
                    >
                      <Check className="h-8 w-8 text-[#1F2937]" strokeWidth={3} />
                    </motion.div>
                    <h3 className="text-lg font-extrabold" style={{ color: NAVY }}>
                      Vielen Dank! 🎉
                    </h3>
                    <p className="mt-1.5 max-w-[260px] text-sm text-gray-500">
                      Ihre Anfrage ist bei uns. {CONSULTANT_NAME} meldet sich innerhalb von 24 Stunden bei Ihnen.
                    </p>
                    <button
                      onClick={() => setHidden(true)}
                      className="mt-5 rounded-xl px-6 py-2.5 text-sm font-bold text-white"
                      style={{ background: NAVY }}
                    >
                      Schliessen
                    </button>
                  </motion.div>
                ) : !revealed ? (
                  /* TYPING */
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex w-fit items-center gap-1.5 rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow-sm"
                  >
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="h-2 w-2 rounded-full bg-gray-300"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </motion.div>
                ) : (
                  /* MESSAGES + FORM */
                  <motion.div key="chat-body" className="space-y-3">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 }}
                      className="w-fit max-w-[85%] rounded-2xl rounded-bl-sm bg-white px-4 py-2.5 text-sm text-gray-700 shadow-sm"
                    >
                      Grüezi! 👋 Schön, dass Sie da sind.
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45 }}
                      className="w-fit max-w-[90%] rounded-2xl rounded-bl-sm bg-white px-4 py-2.5 text-sm leading-relaxed text-gray-700 shadow-sm"
                    >
                      Möchten Sie eine <b>kostenlose &amp; unverbindliche</b> Beratung? Lassen Sie mir
                      kurz Ihre Kontaktdaten da — ich rufe Sie innerhalb von 24h zurück. 📞
                    </motion.div>

                    {/* Form card */}
                    <motion.div
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.85, type: 'spring', stiffness: 260, damping: 24 }}
                      className="rounded-2xl rounded-br-sm bg-white p-3.5 shadow-sm"
                    >
                      <div className="grid grid-cols-2 gap-2.5">
                        <input
                          placeholder="Vorname"
                          aria-label="Vorname"
                          className={`${inputBase} ${errors.firstName ? 'border-red-400' : 'border-gray-200'}`}
                          onFocus={(e) => (e.target.style.borderColor = GOLD)}
                          onBlur={(e) => (e.target.style.borderColor = errors.firstName ? '#f87171' : '#e5e7eb')}
                          value={formData.firstName}
                          onChange={(e) => { setFormData((p) => ({ ...p, firstName: e.target.value })); setErrors((p) => ({ ...p, firstName: false })); }}
                        />
                        <input
                          placeholder="Nachname"
                          aria-label="Nachname"
                          className={`${inputBase} ${errors.lastName ? 'border-red-400' : 'border-gray-200'}`}
                          onFocus={(e) => (e.target.style.borderColor = GOLD)}
                          onBlur={(e) => (e.target.style.borderColor = errors.lastName ? '#f87171' : '#e5e7eb')}
                          value={formData.lastName}
                          onChange={(e) => { setFormData((p) => ({ ...p, lastName: e.target.value })); setErrors((p) => ({ ...p, lastName: false })); }}
                        />
                      </div>

                      <div
                        className={`mt-2.5 flex items-center overflow-hidden rounded-xl border bg-white ${errors.phone ? 'border-red-400' : 'border-gray-200'}`}
                      >
                        <div className="flex shrink-0 items-center gap-1.5 border-r border-gray-200 px-3 py-2.5">
                          <svg width="18" height="13" viewBox="0 0 20 15" fill="none">
                            <rect width="20" height="15" rx="2" fill="#D52B1E" />
                            <rect x="8" y="3" width="4" height="9" fill="white" />
                            <rect x="3" y="5.5" width="14" height="4" fill="white" />
                          </svg>
                          <span className="text-xs font-bold text-gray-600">+41</span>
                        </div>
                        <input
                          type="tel"
                          placeholder="079 123 45 67"
                          aria-label="Telefonnummer"
                          className="w-full bg-transparent px-3 py-2.5 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                          value={formData.phone}
                          onChange={(e) => { setFormData((p) => ({ ...p, phone: e.target.value })); setErrors((p) => ({ ...p, phone: false })); }}
                        />
                      </div>

                      <input
                        type="email"
                        placeholder="E-Mail-Adresse"
                        aria-label="E-Mail-Adresse"
                        className={`${inputBase} mt-2.5 ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
                        onFocus={(e) => (e.target.style.borderColor = GOLD)}
                        onBlur={(e) => (e.target.style.borderColor = errors.email ? '#f87171' : '#e5e7eb')}
                        value={formData.email}
                        onChange={(e) => { setFormData((p) => ({ ...p, email: e.target.value })); setErrors((p) => ({ ...p, email: false })); }}
                      />

                      <button
                        onClick={handleSubmit}
                        disabled={submitting}
                        className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-extrabold transition-transform active:scale-[0.98] disabled:opacity-60"
                        style={{ background: GOLD, color: NAVY }}
                      >
                        {submitting ? (
                          'Wird gesendet…'
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Rückruf anfordern
                          </>
                        )}
                      </button>
                      <p className="mt-2 text-center text-[10px] leading-tight text-gray-400">
                        Mit dem Absenden stimmen Sie unserer{' '}
                        <a href="/datenschutz" className="underline hover:text-gray-600">
                          Datenschutzerklärung
                        </a>{' '}
                        zu.
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ════════════ COLLAPSED BUBBLE ════════════ */}
      <AnimatePresence>
        {!open && (
          <motion.div
            key="bubble"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: 'spring', stiffness: 320, damping: 22 }}
            className="relative flex items-center gap-2"
          >
            {/* Teaser */}
            <AnimatePresence>
              {teaser && (
                <motion.div
                  initial={{ opacity: 0, x: 12, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 12, scale: 0.9 }}
                  className="relative"
                >
                  <button
                    onClick={() => setOpen(true)}
                    className="rounded-2xl rounded-br-sm bg-white px-3.5 py-2.5 text-left text-sm font-semibold text-gray-700 shadow-xl"
                  >
                    Grüezi! 👋 Fragen zur Solaranlage?
                  </button>
                  <button
                    onClick={() => setTeaser(false)}
                    aria-label="Hinweis schliessen"
                    className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-gray-500 hover:bg-gray-300"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Avatar FAB */}
            <button
              onClick={() => setOpen(true)}
              className="relative h-16 w-16 shrink-0"
              aria-label="Beratung öffnen"
            >
              {/* rotating solar ring */}
              <motion.span
                aria-hidden
                className="absolute -inset-1 rounded-full"
                style={{
                  background: `conic-gradient(from 0deg, ${GOLD}, #fbbf24, rgba(212,175,55,0), ${GOLD})`,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
              {/* pulse */}
              <motion.span
                aria-hidden
                className="absolute inset-0 rounded-full"
                style={{ border: `2px solid ${GOLD}` }}
                animate={{ scale: [1, 1.45], opacity: [0.6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
              />
              <span className="absolute inset-[3px] overflow-hidden rounded-full bg-white shadow-lg">
                <img
                  src="/images/consultant.png"
                  alt="Solarberater"
                  className="h-full w-full object-cover object-[50%_28%]"
                />
              </span>
              <span className="absolute bottom-0.5 right-0.5 z-10 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-400" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
