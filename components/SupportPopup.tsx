'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { hasConsent } from '@/lib/cookieConsent';
import { getFormUrl } from '@/lib/i18n/formUrls';

const FORM_PATHS = ['/anfrage', '/fr/demande', '/en/request', '/it/richiesta'];

const i18n: Record<string, { title: string; body: string; cta: string; close: string }> = {
  de: {
    title: 'Kostenlose Beratung',
    body: 'Mit wenigen Klicks zu kostenlosen Offerten. Unser Team beantwortet Ihre Fragen.',
    cta: 'Jetzt starten →',
    close: 'Schliessen',
  },
  fr: {
    title: 'Conseil gratuit',
    body: 'Obtenez des offres gratuites en quelques clics. Notre équipe répond à vos questions.',
    cta: 'Commencer →',
    close: 'Fermer',
  },
  en: {
    title: 'Free Consultation',
    body: 'Get free quotes in just a few clicks. Our team is ready to answer your questions.',
    cta: 'Get started →',
    close: 'Close',
  },
  it: {
    title: 'Consulenza gratuita',
    body: 'Ricevi preventivi gratuiti in pochi clic. Il nostro team risponde alle tue domande.',
    cta: 'Inizia ora →',
    close: 'Chiudi',
  },
};

function getLocale(pathname: string): string {
  if (pathname.startsWith('/fr')) return 'fr';
  if (pathname.startsWith('/en')) return 'en';
  if (pathname.startsWith('/it')) return 'it';
  return 'de';
}

export default function SupportPopup() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const formUrl = getFormUrl(pathname);
  const locale = getLocale(pathname);
  const t = i18n[locale];

  useEffect(() => {
    if (FORM_PATHS.includes(pathname)) return;
    if (sessionStorage.getItem('support-popup-dismissed')) return;

    let timer: ReturnType<typeof setTimeout> | null = null;

    const startTimer = () => {
      if (timer) return;
      timer = setTimeout(() => setVisible(true), 15000);
    };

    if (hasConsent()) {
      startTimer();
    }

    const onConsent = () => startTimer();
    window.addEventListener('pvpro:consent', onConsent);

    return () => {
      window.removeEventListener('pvpro:consent', onConsent);
      if (timer) clearTimeout(timer);
    };
  }, [pathname]);

  const dismiss = () => {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem('support-popup-dismissed', '1');
  };

  if (FORM_PATHS.includes(pathname) || dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-6 right-5 z-[9990] w-[340px] sm:w-[370px]"
        >
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl flex flex-row items-stretch"
            style={{ background: '#1a2e4a' }}
          >
            <button
              onClick={dismiss}
              className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center transition-colors hover:bg-white/20 z-10"
              aria-label={t.close}
            >
              <X className="w-4 h-4 text-white/70" />
            </button>

            <div className="flex-1 p-5 pr-3 flex flex-col justify-center gap-3">
              <div>
                <p className="text-white font-bold text-lg leading-tight">
                  {t.title}
                </p>
                <p className="text-white/75 text-sm mt-1 leading-snug">
                  {t.body}
                </p>
              </div>
              <Link
                href={formUrl}
                onClick={dismiss}
                className="inline-block bg-white text-[#1a2e4a] font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-gray-100 transition-colors text-center"
              >
                {t.cta}
              </Link>
            </div>

            <div className="flex items-center justify-center px-4 py-4 shrink-0">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/20 shadow-lg">
                <Image
                  src="/images/support-agent.png"
                  alt="PVPro Support"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
