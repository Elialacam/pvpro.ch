'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLocale } from '@/lib/LocaleContext';
import WhatsAppButton from './WhatsAppButton';

const translations: Record<string, { online: string; bubble: string; cta: string; responseTime: string }> = {
  de: {
    online: 'Online',
    bubble: 'Wir sind gerade online! Stellen Sie uns Ihre Fragen direkt per WhatsApp.',
    cta: 'Jetzt schreiben',
    responseTime: 'Antwort in ~2 Min.',
  },
  fr: {
    online: 'En ligne',
    bubble: 'Nous sommes en ligne ! Posez-nous vos questions directement sur WhatsApp.',
    cta: 'Écrire maintenant',
    responseTime: 'Réponse en ~2 min.',
  },
  en: {
    online: 'Online',
    bubble: 'We\'re online right now! Ask us anything directly on WhatsApp.',
    cta: 'Write now',
    responseTime: 'Reply in ~2 min.',
  },
  it: {
    online: 'Online',
    bubble: 'Siamo online in questo momento! Scrivici le tue domande su WhatsApp.',
    cta: 'Scrivi ora',
    responseTime: 'Risposta in ~2 min.',
  },
};

const WHATSAPP_NUMBER = '+41779770750';

export default function WhatsAppFloating() {
  const locale = useLocale();
  const t = translations[locale] || translations.de;
  const [showBubble, setShowBubble] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-4 max-w-[260px]"
          >
            <button
              onClick={() => setShowBubble(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-3.5 h-3.5 text-gray-600" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold text-green-600">{t.online}</span>
            </div>

            <p className="text-sm text-gray-700 font-medium mb-1">{t.bubble}</p>
            <p className="text-xs text-gray-400 mb-3">{t.responseTime}</p>

            <WhatsAppButton
              phone={WHATSAPP_NUMBER}
              location="floating_bubble"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white text-sm font-bold px-4 py-2.5 rounded-full transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t.cta}
            </WhatsAppButton>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setShowBubble(!showBubble)}
        className="relative w-14 h-14 bg-[#25D366] hover:bg-[#1fb855] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-400 border-2 border-white"></span>
        </span>
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </motion.button>
    </div>
  );
}
