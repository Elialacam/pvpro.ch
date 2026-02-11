'use client';

import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  getConsent,
  hasConsent,
  acceptAll,
  rejectAll,
  saveCustomConsent,
  type CookieConsent as CookieConsentType,
} from '@/lib/cookieConsent';

const translations = {
  de: {
    title: 'Cookie-Einstellungen',
    description: 'Wir nutzen Cookies, um Ihre Erfahrung zu verbessern.',
    accept: 'Alle akzeptieren',
    reject: 'Nur notwendige',
    customize: 'Anpassen',
    save: 'Auswahl speichern',
    necessary: 'Notwendig',
    necessaryDesc: 'Für den Betrieb der Website erforderlich.',
    analytics: 'Analyse',
    analyticsDesc: 'Hilft uns zu verstehen, wie die Website genutzt wird.',
    marketing: 'Marketing',
    marketingDesc: 'Für personalisierte Werbung und Reichweitenmessung.',
    always: 'Immer aktiv',
    privacyLink: '/datenschutz',
    privacyText: 'Mehr erfahren',
  },
  fr: {
    title: 'Paramètres des cookies',
    description: 'Nous utilisons des cookies pour améliorer votre expérience.',
    accept: 'Tout accepter',
    reject: 'Nécessaires uniquement',
    customize: 'Personnaliser',
    save: 'Enregistrer',
    necessary: 'Nécessaires',
    necessaryDesc: 'Indispensables au fonctionnement du site.',
    analytics: 'Analyse',
    analyticsDesc: 'Nous aident à comprendre l\'utilisation du site.',
    marketing: 'Marketing',
    marketingDesc: 'Pour la publicité personnalisée et la mesure d\'audience.',
    always: 'Toujours actif',
    privacyLink: '/fr/protection-des-donnees',
    privacyText: 'En savoir plus',
  },
  en: {
    title: 'Cookie Settings',
    description: 'We use cookies to improve your experience.',
    accept: 'Accept All',
    reject: 'Necessary Only',
    customize: 'Customize',
    save: 'Save Preferences',
    necessary: 'Necessary',
    necessaryDesc: 'Required for the website to function.',
    analytics: 'Analytics',
    analyticsDesc: 'Help us understand how the site is used.',
    marketing: 'Marketing',
    marketingDesc: 'For personalized advertising and audience measurement.',
    always: 'Always active',
    privacyLink: '/en/privacy',
    privacyText: 'Learn more',
  },
  it: {
    title: 'Impostazioni cookie',
    description: 'Utilizziamo cookie per migliorare la tua esperienza.',
    accept: 'Accetta tutti',
    reject: 'Solo necessari',
    customize: 'Personalizza',
    save: 'Salva preferenze',
    necessary: 'Necessari',
    necessaryDesc: 'Indispensabili per il funzionamento del sito.',
    analytics: 'Analisi',
    analyticsDesc: 'Ci aiutano a capire come viene utilizzato il sito.',
    marketing: 'Marketing',
    marketingDesc: 'Per pubblicità personalizzata e misurazione del pubblico.',
    always: 'Sempre attivo',
    privacyLink: '/it/protezione-dati',
    privacyText: 'Scopri di più',
  },
};

type Lang = keyof typeof translations;

function detectLanguage(pathname: string): Lang {
  if (pathname.startsWith('/fr')) return 'fr';
  if (pathname.startsWith('/en')) return 'en';
  if (pathname.startsWith('/it')) return 'it';
  return 'de';
}

export default function CookieConsentBanner({ onConsentChange }: { onConsentChange: (consent: CookieConsentType) => void }) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(false);
  const [marketingChecked, setMarketingChecked] = useState(false);

  const lang = detectLanguage(pathname);
  const t = translations[lang];

  useEffect(() => {
    const existing = getConsent();
    if (existing) {
      setAnalyticsChecked(existing.analytics);
      setMarketingChecked(existing.marketing);
      onConsentChange(existing);
    } else {
      setVisible(true);
    }
  }, [onConsentChange]);

  const handleAccept = useCallback(() => {
    const consent = acceptAll();
    onConsentChange(consent);
    setVisible(false);
  }, [onConsentChange]);

  const handleReject = useCallback(() => {
    const consent = rejectAll();
    onConsentChange(consent);
    setVisible(false);
  }, [onConsentChange]);

  const handleSaveCustom = useCallback(() => {
    const consent = saveCustomConsent(analyticsChecked, marketingChecked);
    onConsentChange(consent);
    setVisible(false);
    setShowCustomize(false);
  }, [analyticsChecked, marketingChecked, onConsentChange]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-[9999] sm:max-w-sm w-auto">
      <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden">
        {!showCustomize ? (
          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">&#127850;</span>
              <p className="text-sm text-gray-700 font-medium leading-snug">{t.description}</p>
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={handleAccept}
                className="w-full px-4 py-2.5 text-sm bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition-all font-semibold shadow-sm hover:shadow-md"
              >
                {t.accept}
              </button>
              <div className="flex gap-2">
                <button
                  onClick={handleReject}
                  className="flex-1 px-4 py-2 text-sm border border-gray-200 rounded-xl hover:bg-gray-50 transition-all text-gray-600 font-medium"
                >
                  {t.reject}
                </button>
                <button
                  onClick={() => setShowCustomize(true)}
                  className="flex-1 px-4 py-2 text-sm border border-gray-200 rounded-xl hover:bg-gray-50 transition-all text-gray-600 font-medium"
                >
                  {t.customize}
                </button>
              </div>
            </div>
            <div className="mt-3 text-center">
              <Link href={t.privacyLink} className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
                {t.privacyText}
              </Link>
            </div>
          </div>
        ) : (
          <div className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">&#9881;&#65039;</span>
              <h3 className="font-semibold text-gray-800 text-sm">{t.title}</h3>
            </div>
            <div className="space-y-2.5">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl border border-green-100">
                <div>
                  <p className="font-medium text-sm text-gray-800">{t.necessary}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{t.necessaryDesc}</p>
                </div>
                <span className="text-xs text-green-600 font-semibold bg-green-100 px-2 py-1 rounded-full">{t.always}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                <div>
                  <p className="font-medium text-sm text-gray-800">{t.analytics}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{t.analyticsDesc}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={analyticsChecked}
                    onChange={(e) => setAnalyticsChecked(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-10 h-[22px] bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[18px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-[18px] after:w-[18px] after:transition-all after:shadow-sm peer-checked:bg-yellow-500"></div>
                </label>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                <div>
                  <p className="font-medium text-sm text-gray-800">{t.marketing}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{t.marketingDesc}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={marketingChecked}
                    onChange={(e) => setMarketingChecked(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-10 h-[22px] bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[18px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-[18px] after:w-[18px] after:transition-all after:shadow-sm peer-checked:bg-yellow-500"></div>
                </label>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setShowCustomize(false)}
                className="px-4 py-2.5 text-sm border border-gray-200 rounded-xl hover:bg-gray-50 transition-all text-gray-600"
              >
                &#8592;
              </button>
              <button
                onClick={handleSaveCustom}
                className="flex-1 px-4 py-2.5 text-sm bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition-all font-semibold shadow-sm hover:shadow-md"
              >
                {t.save}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
