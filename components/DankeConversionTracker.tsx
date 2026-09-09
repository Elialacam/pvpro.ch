'use client';

import { useEffect } from 'react';

export default function DankeConversionTracker() {
  useEffect(() => {
    const transactionId = Date.now().toString();

    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
        value: 50.0,
        currency: 'CHF',
        transaction_id: transactionId,
      });

      window.gtag('event', 'purchase', {
        value: 50.0,
        currency: 'CHF',
        transaction_id: transactionId,
        items: [{
          item_name: 'Solar Quote Request',
          item_category: 'Lead Generation',
          price: 50.0,
          quantity: 1,
        }],
      });
    }

    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'conversion_page_view',
        conversionType: 'lead_completed',
        conversionValue: 50.0,
        currency: 'CHF',
        page: '/danke',
      });

      window.dataLayer.push({
        event: 'purchase',
        ecommerce: {
          transaction_id: transactionId,
          value: 50.0,
          currency: 'CHF',
          items: [{
            item_name: 'Solar Quote Request',
            item_category: 'Lead Generation',
            price: 50.0,
            quantity: 1,
          }],
        },
      });
    }

    console.log('✅ Conversion tracking fired on thank you page');
  }, []);

  return null;
}