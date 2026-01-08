'use client';

import { ReactNode } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

interface PhoneLinkProps {
  /** Numero di telefono (es: +39 02 1234567 o 02 1234567) */
  phone: string;
  /** Posizione del link per il tracking (es: 'header', 'footer', 'hero', 'contact_section') */
  location: string;
  /** Valore conversione per Google Ads (default: 1) */
  conversionValue?: number;
  /** Valuta per Google Ads (default: 'EUR') */
  currency?: string;
  className?: string;
  children: ReactNode;
}

/**
 * PhoneLink - Componente standardizzato per tracking click-to-call
 *
 * Traccia eventi con:
 * - dataLayer.push() per GTM
 * - gtag() per Google Ads / GA4 diretto
 *
 * Eventi tracciati:
 * - phone_click (evento principale)
 * - generate_lead (per conversioni Google Ads)
 */
export default function PhoneLink({
  phone,
  location,
  conversionValue = 1,
  currency = 'EUR',
  className,
  children
}: PhoneLinkProps) {

  const handleClick = () => {
    const eventData = {
      event: 'phone_click',
      event_category: 'engagement',
      event_label: location,
      button_location: location,
      conversion_method: 'phone',
      conversion_action: 'click_to_call',
      phone_number: phone,
      value: conversionValue,
      currency: currency,
      timestamp: new Date().toISOString()
    };

    // Track via dataLayer (GTM)
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(eventData);

      // Track generate_lead per conversioni Google Ads
      window.dataLayer.push({
        event: 'generate_lead',
        lead_source: 'phone_call',
        button_location: location,
        value: conversionValue,
        currency: currency
      });
    }

    // Track via gtag (Google Ads / GA4 diretto)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: location,
        button_location: location,
        conversion_method: 'phone',
        value: conversionValue,
        currency: currency
      });

      // Evento generate_lead per conversioni
      window.gtag('event', 'generate_lead', {
        value: conversionValue,
        currency: currency,
        lead_source: 'phone_call',
        button_location: location
      });
    }
  };

  // Rimuovi spazi per href tel:
  const telPhone = phone.replace(/\s/g, '');

  return (
    <a
      href={`tel:${telPhone}`}
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
