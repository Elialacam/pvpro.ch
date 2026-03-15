'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, ChevronRight, Check } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function RueckrufWidget() {
  const pathname = usePathname();
  const [widgetOpen, setWidgetOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '' });

  useEffect(() => {
    const timer = setTimeout(() => setWidgetOpen(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (pathname === '/anfrage') return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSubmitting(true);
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'e5917515-5373-450c-963d-d6dcb976be42',
          subject: `Rückruf-Anfrage – ${form.name}`,
          'FULL NAME': form.name,
          'PHONE NUMBER': form.phone,
          EMAIL: form.email || '—',
        }),
      });
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ── Floating widget ── */}
      <AnimatePresence>
        {widgetOpen && !modalOpen && (
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="fixed bottom-24 left-4 z-40 w-72 rounded-2xl shadow-2xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #B8942F 100%)' }}
          >
            {/* Close X */}
            <button
              onClick={() => setWidgetOpen(false)}
              className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
              aria-label="Schliessen"
            >
              <X className="w-3.5 h-3.5 text-white" />
            </button>

            <div className="p-4 pr-16 relative">
              {/* Consultant photo */}
              <div className="absolute right-3 bottom-0 w-14 h-14 rounded-full overflow-hidden border-2 border-white/40 shadow-lg">
                <Image src="/images/team-photo.png" alt="Berater" fill className="object-cover object-top" />
              </div>

              <p className="text-white font-black text-base leading-tight mb-1">Kostenlose Beratung</p>
              <p className="text-white/85 text-xs leading-relaxed mb-3">
                Wir rufen Sie zurück und besprechen Ihr Solaranliegen kostenlos.
              </p>

              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center gap-1.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-bold px-4 py-2 rounded-xl transition-colors shadow"
              >
                <Phone className="w-3.5 h-3.5" />
                Rückruf anfordern
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Modal ── */}
      <AnimatePresence>
        {modalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
              onClick={() => { setModalOpen(false); setSubmitted(false); setForm({ name: '', phone: '', email: '' }); }}
            />

            {/* Modal card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 32 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none"
            >
              <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm pointer-events-auto overflow-hidden">
                {/* Header */}
                <div className="relative p-6 pb-4" style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #B8942F 100%)' }}>
                  <button
                    onClick={() => { setModalOpen(false); setSubmitted(false); setForm({ name: '', phone: '', email: '' }); }}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/50 shrink-0">
                      <Image src="/images/team-photo.png" alt="Berater" width={48} height={48} className="object-cover object-top" />
                    </div>
                    <div>
                      <p className="text-white font-black text-lg leading-tight">Rückruf anfordern</p>
                      <p className="text-white/80 text-xs">Wir melden uns innerhalb von 24h</p>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col items-center text-center py-4 gap-3"
                    >
                      <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="w-7 h-7 text-green-600" strokeWidth={2.5} />
                      </div>
                      <p className="font-black text-gray-900 text-lg">Anfrage erhalten!</p>
                      <p className="text-sm text-gray-500">Wir rufen Sie so bald wie möglich zurück.</p>
                      <button
                        onClick={() => { setModalOpen(false); setSubmitted(false); setForm({ name: '', phone: '', email: '' }); }}
                        className="mt-2 text-sm text-gray-400 hover:text-gray-600 underline transition-colors"
                      >
                        Schliessen
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div>
                        <label className="block text-xs font-bold text-gray-600 mb-1">Name *</label>
                        <input
                          required
                          placeholder="Vor- und Nachname"
                          value={form.name}
                          onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm outline-none focus:border-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-600 mb-1">Telefon *</label>
                        <input
                          required
                          type="tel"
                          placeholder="+41 79 123 45 67"
                          value={form.phone}
                          onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm outline-none focus:border-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-600 mb-1">E-Mail (optional)</label>
                        <input
                          type="email"
                          placeholder="ihre@email.ch"
                          value={form.email}
                          onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm outline-none focus:border-primary transition-colors"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full btn-primary py-3.5 rounded-xl font-black text-sm flex items-center justify-center gap-2 mt-1"
                      >
                        {submitting ? 'Wird gesendet…' : <><Phone className="w-4 h-4" /> Rückruf anfordern</>}
                      </button>
                      <p className="text-center text-[11px] text-gray-400">100% kostenlos & unverbindlich</p>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
