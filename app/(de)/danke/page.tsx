"use client";

import { CheckCircle, Mail, Phone, Clock, Star } from 'lucide-react';
import { useEffect } from 'react';
import Script from 'next/script';

export default function ThankYouPage() {
  useEffect(() => {
    document.title = 'Vielen Dank - Ihre Anfrage wurde versendet | PVPro';

    if (typeof window !== 'undefined') {
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
          value: 50.0,
          currency: 'CHF',
          transaction_id: Date.now().toString(),
        });

        window.gtag('event', 'purchase', {
          value: 50.0,
          currency: 'CHF',
          transaction_id: Date.now().toString(),
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
            transaction_id: Date.now().toString(),
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
    }
  }, []);

  return (
    <>
      <Script
        src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="lazyOnload"
      />

      <section className="min-h-[80vh] flex items-center bg-gradient-to-b from-orange-50 to-white pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 sm:p-12 text-center">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
              <CheckCircle className="w-10 h-10 text-[#F97316]" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Vielen Dank für Ihre Anfrage!</h1>
            <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Ihre Anfrage wurde erfolgreich empfangen. Unsere zertifizierten Partnerinstallateure werden Sie innerhalb von <strong>24–48 Stunden</strong> mit ihren besten Angeboten kontaktieren.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                { Icon: Clock, title: '24–48 Stunden', text: 'Typische Antwortzeit' },
                { Icon: Mail,  title: 'Bis zu 3 Offerten', text: 'Von zertifizierten Installateuren' },
                { Icon: Phone, title: 'Direktkontakt', text: 'Per Telefon oder E-Mail' },
              ].map(({ Icon, title, text }) => (
                <div key={title} className="rounded-xl p-5 border border-gray-100">
                  <Icon className="w-6 h-6 text-[#F97316] mx-auto mb-2" />
                  <p className="font-bold text-gray-900 text-sm mb-1">{title}</p>
                  <p className="text-xs text-gray-500">{text}</p>
                </div>
              ))}
            </div>

            {/* Trustpilot Review Collector */}
            <div>
              <div className="flex items-center justify-center gap-2 mb-3">
                <Star className="w-4 h-4 text-[#00b67a]" />
                <p className="text-sm font-semibold text-gray-700">Wie war Ihr Erlebnis? Hinterlassen Sie uns eine Bewertung</p>
              </div>
              <div
                className="trustpilot-widget"
                data-locale="de-DE"
                data-template-id="56278e9abfbbba0bdcd568bc"
                data-businessunit-id="69c14c4d68ba8b3a14086655"
                data-style-height="52px"
                data-style-width="100%"
                data-token="55a3747d-ab7d-41c4-8d1e-3233b4ce9178"
              >
                <a href="https://de.trustpilot.com/review/pvpro.ch" target="_blank" rel="noopener">Trustpilot</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
