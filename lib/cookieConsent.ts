export type CookieCategory = 'necessary' | 'analytics' | 'marketing';

export interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const CONSENT_KEY = 'pvpro_cookie_consent';

export function getConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export function setConsent(consent: CookieConsent): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
}

export function hasConsent(): boolean {
  return getConsent() !== null;
}

export function acceptAll(): CookieConsent {
  const consent: CookieConsent = {
    necessary: true,
    analytics: true,
    marketing: true,
    timestamp: new Date().toISOString(),
  };
  setConsent(consent);
  return consent;
}

export function rejectAll(): CookieConsent {
  const consent: CookieConsent = {
    necessary: true,
    analytics: false,
    marketing: false,
    timestamp: new Date().toISOString(),
  };
  setConsent(consent);
  return consent;
}

export function saveCustomConsent(analytics: boolean, marketing: boolean): CookieConsent {
  const consent: CookieConsent = {
    necessary: true,
    analytics,
    marketing,
    timestamp: new Date().toISOString(),
  };
  setConsent(consent);
  return consent;
}
