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
    description: 'Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung zu bieten. Einige sind notwendig, andere helfen uns, die Website zu verbessern und Ihnen relevante Inhalte anzuzeigen.',
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
    privacyText: 'Datenschutz',
    legalBasis: 'Gemäss nDSG (Schweiz) und DSGVO (EU/EWR).',
  },
  fr: {
    title: 'Paramètres des cookies',
    description: 'Nous utilisons des cookies pour vous offrir la meilleure expérience possible. Certains sont nécessaires, d\'autres nous aident à améliorer le site et à vous montrer du contenu pertinent.',
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
    privacyText: 'Protection des données',
    legalBasis: 'Conformément à la nLPD (Suisse) et au RGPD (UE/EEE).',
  },
  en: {
    title: 'Cookie Settings',
    description: 'We use cookies to provide you with the best experience. Some are necessary, others help us improve the site and show you relevant content.',
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
    privacyText: 'Privacy Policy',
    legalBasis: 'In accordance with nFADP (Switzerland) and GDPR (EU/EEA).',
  },
  it: {
    title: 'Impostazioni cookie',
    description: 'Utilizziamo cookie per offrirti la migliore esperienza. Alcuni sono necessari, altri ci aiutano a migliorare il sito e mostrarti contenuti pertinenti.',
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
    privacyText: 'Protezione dei dati',
    legalBasis: 'In conformità con la nLPD (Svizzera) e il GDPR (UE/SEE).',
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
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-white border-t border-gray-200 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {!showCustomize ? (
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1 text-sm text-gray-600">
              <p>{t.description}</p>
              <p className="mt-1 text-xs text-gray-400">
                {t.legalBasis}{' '}
                <Link href={t.privacyLink} className="underline hover:text-gray-600">
                  {t.privacyText}
                </Link>
              </p>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              <button
                onClick={() => setShowCustomize(true)}
                className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700"
              >
                {t.customize}
              </button>
              <button
                onClick={handleReject}
                className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700"
              >
                {t.reject}
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-2 text-sm bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors font-medium"
              >
                {t.accept}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">{t.title}</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-sm text-gray-800">{t.necessary}</p>
                  <p className="text-xs text-gray-500">{t.necessaryDesc}</p>
                </div>
                <span className="text-xs text-green-600 font-medium">{t.always}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-sm text-gray-800">{t.analytics}</p>
                  <p className="text-xs text-gray-500">{t.analyticsDesc}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={analyticsChecked}
                    onChange={(e) => setAnalyticsChecked(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-yellow-500"></div>
                </label>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-sm text-gray-800">{t.marketing}</p>
                  <p className="text-xs text-gray-500">{t.marketingDesc}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={marketingChecked}
                    onChange={(e) => setMarketingChecked(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-yellow-500"></div>
                </label>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <Link href={t.privacyLink} className="text-xs text-gray-400 underline hover:text-gray-600">
                {t.privacyText}
              </Link>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowCustomize(false)}
                  className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700"
                >
                  ←
                </button>
                <button
                  onClick={handleSaveCustom}
                  className="px-4 py-2 text-sm bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors font-medium"
                >
                  {t.save}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
