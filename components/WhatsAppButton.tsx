'use client';

import { ReactNode } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

interface WhatsAppButtonProps {
  /** Numero WhatsApp con prefisso internazionale (es: +393401234567) */
  phone: string;
  /** Posizione del pulsante per il tracking (es: 'header', 'footer', 'hero', 'cta_section') */
  location: string;
  /** Messaggio precompilato per WhatsApp (URL encoded) */
  message?: string;
  /** Valore conversione per Google Ads (default: 1) */
  conversionValue?: number;
  /** Valuta per Google Ads (default: 'EUR') */
  currency?: string;
  className?: string;
  children: ReactNode;
}

/**
 * WhatsAppButton - Componente standardizzato per tracking click WhatsApp
 *
 * Traccia eventi con:
 * - dataLayer.push() per GTM
 * - gtag() per Google Ads / GA4 diretto
 *
 * Eventi tracciati:
 * - whatsapp_click (evento principale)
 * - generate_lead (per conversioni Google Ads)
 */
export default function WhatsAppButton({
  phone,
  location,
  message = 'Ciao, vorrei informazioni sui vostri servizi',
  conversionValue = 1,
  currency = 'EUR',
  className,
  children
}: WhatsAppButtonProps) {

  const handleClick = () => {
    const eventData = {
      event: 'whatsapp_click',
      event_category: 'engagement',
      event_label: location,
      button_location: location,
      conversion_method: 'whatsapp',
      conversion_action: 'click_to_whatsapp',
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
        lead_source: 'whatsapp',
        button_location: location,
        value: conversionValue,
        currency: currency
      });
    }

    // Track via gtag (Google Ads / GA4 diretto)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: location,
        button_location: location,
        conversion_method: 'whatsapp',
        value: conversionValue,
        currency: currency
      });

      // Evento generate_lead per conversioni
      window.gtag('event', 'generate_lead', {
        value: conversionValue,
        currency: currency,
        lead_source: 'whatsapp',
        button_location: location
      });
    }
  };

  // Formatta numero per WhatsApp (rimuove spazi e caratteri speciali tranne +)
  const whatsappPhone = phone.replace(/[\s()-]/g, '');
  const encodedMessage = encodeURIComponent(message);

  return (
    <a
      href={`https://wa.me/${whatsappPhone}?text=${encodedMessage}`}
      className={className}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
