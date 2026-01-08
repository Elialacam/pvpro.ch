/**
 * Google Analytics 4 + GTM Tracking for PVPro.com
 *
 * This module handles all analytics tracking including:
 * - Multi-step form tracking
 * - Lead submissions
 * - User interactions
 * - Page views
 */

// Type definitions for GTM data layer
declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Initialize Google Analytics 4
 * Call this in _app.tsx or layout.tsx
 */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

/**
 * Google Tag Manager ID
 */
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX';

/**
 * Page view tracking
 * Automatically tracks page views in GA4
 */
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

/**
 * Generic event tracking
 */
export const event = ({ action, category, label, value }: {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

/**
 * MULTI-STEP FORM TRACKING
 * Tracks each step of the lead generation form
 */

export const trackFormStart = () => {
  event({
    action: 'form_start',
    category: 'Lead Form',
    label: 'User started the multi-step form',
  });

  // Also push to GTM dataLayer for advanced tracking
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'form_interaction',
      formName: 'solar_lead_form',
      formStep: 1,
      formAction: 'started',
    });

    // Enhanced Ecommerce: Begin Checkout
    window.dataLayer.push({
      event: 'begin_checkout',
      ecommerce: {
        currency: 'CHF',
        value: 0.1,
        items: [{
          item_name: 'Solar Quote Request',
          item_category: 'Lead Generation',
          item_variant: 'Multi-Step Form',
          price: 50.0,
          quantity: 1,
        }],
      },
    });

    // Google Ads Conversion: Form Start (easiest conversion for initial data)
    window.dataLayer.push({
      event: 'conversion',
      conversionType: 'form_start',
      conversionLabel: 'FORM_START',
      value: 0.1,
      currency: 'CHF',
    });
  }
};

export const trackFormStep = (step: number, stepName: string) => {
  event({
    action: `form_step_${step}`,
    category: 'Lead Form',
    label: `Step ${step}: ${stepName}`,
    value: step,
  });

  // GTM tracking
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'form_interaction',
      formName: 'solar_lead_form',
      formStep: step,
      formStepName: stepName,
      formAction: 'step_completed',
    });

    // Google Ads Conversion: Each step gets its own conversion
    // Value increases with each step (more qualified leads)
    const conversionValues: { [key: number]: number } = {
      1: 0.5,  // Step 1: Property Type (easy conversion)
      2: 2,    // Step 2: Energy needs (more qualified)
      3: 5,    // Step 3: Location (very qualified)
      4: 10,   // Step 4: Contact info (almost there!)
    };

    // Enhanced Ecommerce: Add Checkout Progress
    window.dataLayer.push({
      event: 'checkout_progress',
      ecommerce: {
        checkout_step: step,
        checkout_option: stepName,
        currency: 'CHF',
        value: conversionValues[step] || 1,
        items: [{
          item_name: 'Solar Quote Request',
          item_category: 'Lead Generation',
          item_variant: `Step ${step}: ${stepName}`,
          price: 50.0,
          quantity: 1,
        }],
      },
    });

    window.dataLayer.push({
      event: 'conversion',
      conversionType: `form_step_${step}`,
      conversionLabel: `FORM_STEP_${step}`,
      value: conversionValues[step] || 1,
      currency: 'CHF',
      stepName: stepName,
    });
  }
};

export const trackFormComplete = (formData: {
  propertyType?: string;
  ownership?: string;
  consumption?: string;
  storageInterest?: string;
  postalCode?: string;
  city?: string;
}) => {
  // Main conversion event
  event({
    action: 'generate_lead',
    category: 'Lead Form',
    label: 'Form submitted successfully',
    value: 1,
  });

  // Detailed GTM tracking with form data (anonymized)
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'form_submission',
      formName: 'solar_lead_form',
      formStep: 4,
      formAction: 'submitted',
      leadData: {
        propertyType: formData.propertyType || 'not_specified',
        ownership: formData.ownership || 'not_specified',
        consumption: formData.consumption || 'not_specified',
        storageInterest: formData.storageInterest || 'not_specified',
        postalCode: formData.postalCode?.substring(0, 2) + 'XX', // Anonymize for privacy
        city: formData.city || 'not_specified',
      },
    });

    // Google Ads Conversion: LEAD COMPLETE (highest value)
    // This is the main conversion you'll optimize for once you have enough data
    window.dataLayer.push({
      event: 'conversion',
      conversionType: 'lead_complete',
      conversionLabel: 'LEAD_COMPLETE',
      value: 50.0, // High value - this is a qualified lead
      currency: 'CHF',
    });
  }
};

export const trackFormAbandonment = (step: number, stepName: string) => {
  event({
    action: 'form_abandoned',
    category: 'Lead Form',
    label: `Abandoned at Step ${step}: ${stepName}`,
    value: step,
  });

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'form_interaction',
      formName: 'solar_lead_form',
      formStep: step,
      formStepName: stepName,
      formAction: 'abandoned',
    });
  }
};

/**
 * CTA BUTTON TRACKING
 */
export const trackCTAClick = (ctaLocation: string, ctaText: string) => {
  event({
    action: 'cta_click',
    category: 'Engagement',
    label: `${ctaLocation} - ${ctaText}`,
  });

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'cta_interaction',
      ctaLocation: ctaLocation,
      ctaText: ctaText,
    });

    // Google Ads Conversion: CTA clicks show intent
    window.dataLayer.push({
      event: 'conversion',
      conversionType: 'cta_click',
      conversionLabel: 'CTA_CLICK',
      value: 5.0,
      currency: 'CHF',
    });
  }
};

/**
 * CALCULATOR USAGE TRACKING
 */
export const trackCalculatorUse = (roofSize?: number, consumption?: number) => {
  event({
    action: 'calculator_used',
    category: 'Tools',
    label: 'Solar Calculator',
  });

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'tool_interaction',
      toolName: 'solar_calculator',
      roofSize: roofSize || 0,
      consumption: consumption || 0,
    });

    // Google Ads Conversion: Calculator usage (engagement conversion)
    // Users who calculate are more likely to convert
    window.dataLayer.push({
      event: 'conversion',
      conversionType: 'calculator_used',
      conversionLabel: 'CALCULATOR_USED',
      value: 1.5, // Good engagement indicator
      currency: 'CHF',
    });
  }
};

/**
 * CITY PAGE TRACKING
 */
export const trackCityPageView = (cityName: string) => {
  event({
    action: 'city_page_view',
    category: 'Navigation',
    label: cityName,
  });

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'page_interaction',
      pageType: 'city_landing',
      cityName: cityName,
    });
  }
};

/**
 * ERROR TRACKING
 */
export const trackError = (errorType: string, errorMessage: string) => {
  event({
    action: 'error_occurred',
    category: 'Error',
    label: `${errorType}: ${errorMessage}`,
  });

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'error',
      errorType: errorType,
      errorMessage: errorMessage,
    });
  }
};

/**
 * PHONE/EMAIL CLICK TRACKING
 */
export const trackContactClick = (contactType: 'phone' | 'email') => {
  event({
    action: `${contactType}_click`,
    category: 'Contact',
    label: `User clicked ${contactType} link`,
  });

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'contact_interaction',
      contactType: contactType,
    });

    // Google Ads Conversion: Phone/Email clicks are high-intent actions
    window.dataLayer.push({
      event: 'conversion',
      conversionType: `${contactType}_click`,
      conversionLabel: contactType === 'phone' ? 'PHONE_CLICK' : 'EMAIL_CLICK',
      value: contactType === 'phone' ? 25.0 : 15.0, // Phone calls are more valuable
      currency: 'CHF',
    });
  }
};

/**
 * SCROLL DEPTH TRACKING
 */
export const trackScrollDepth = (depth: number) => {
  if (depth === 25 || depth === 50 || depth === 75 || depth === 100) {
    event({
      action: 'scroll_depth',
      category: 'Engagement',
      label: `${depth}% scrolled`,
      value: depth,
    });

    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'scroll_tracking',
        scrollDepth: depth,
      });

      // Google Ads Conversion: Scroll depth (engagement conversion)
      // Start with 50% scroll as first conversion, then move to deeper engagement
      const conversionValues: { [key: number]: number } = {
        25: 0.1,  // Light engagement
        50: 0.3,  // Good engagement - use this initially for Google Ads
        75: 0.5,  // Strong engagement
        100: 1.0, // Full page read
      };

      window.dataLayer.push({
        event: 'conversion',
        conversionType: `scroll_${depth}`,
        conversionLabel: `SCROLL_${depth}`,
        value: conversionValues[depth] || 0.1,
        currency: 'CHF',
      });
    }
  }
};
