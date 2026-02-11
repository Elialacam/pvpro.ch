"use client";





import PhoneLink from '@/components/PhoneLink';
import { Metadata } from 'next';
import { CheckCircle, Mail, Phone, Clock } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

// Note: Since this is client component, metadata should be in a separate layout or server component
// For now, we'll handle it with useEffect for title

export default function ThankYouPage() {
  useEffect(() => {
    // Update page title
    document.title = 'Vielen Dank - Ihre Anfrage wurde versendet | PVPro';

    // Fire conversion tracking events
    if (typeof window !== 'undefined') {
      // GA4 Conversion Event
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL', // Replace with Google Ads conversion
          value: 50.0,
          currency: 'CHF',
          transaction_id: Date.now().toString(),
        });

        // GA4 Standard conversion event
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

      // GTM DataLayer Push for Conversion
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'conversion_page_view',
          conversionType: 'lead_completed',
          conversionValue: 50.0,
          currency: 'CHF',
          page: '/danke',
        });

        // Enhanced Ecommerce - Purchase Event
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
    <section className="section-padding bg-gradient-to-b from-primary-50 to-white min-h-[80vh] flex items-center">
      <div className="container-custom max-w-3xl">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 sm:p-12 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-sans font-semibold tracking-normal text-gray-900 mb-4">
            Vielen Dank für Ihre Anfrage!
          </h1>

          <p className="text-xl text-gray-600 mb-12">
            Wir haben Ihre Anfrage erhalten und werden Sie in Kürze mit passenden Angeboten kontaktieren.
          </p>

          {/* What Happens Next */}
          <div className="text-left mb-12">
            <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mb-6 text-center">
              Was passiert als Nächstes?
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-sans font-semibold tracking-normal text-primary">1</span>
                </div>
                <div>
                  <h3 className="font-sans font-semibold tracking-normal text-gray-900 mb-1">Wir prüfen Ihre Angaben</h3>
                  <p className="text-gray-600">
                    Unser Team überprüft Ihre Anfrage und sucht die passenden Solarteure in Ihrer Region.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-sans font-semibold tracking-normal text-primary">2</span>
                </div>
                <div>
                  <h3 className="font-sans font-semibold tracking-normal text-gray-900 mb-1">Wir kontaktieren lokale Installateure</h3>
                  <p className="text-gray-600">
                    Bis zu 3 geprüfte Fachbetriebe erstellen individuelle Angebote für Ihr Solarprojekt.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-sans font-semibold tracking-normal text-primary">3</span>
                </div>
                <div>
                  <h3 className="font-sans font-semibold tracking-normal text-gray-900 mb-1">Sie erhalten Ihre Offerten</h3>
                  <p className="text-gray-600">
                    Innerhalb von 2-5 Werktagen erhalten Sie bis zu 3 kostenlose Offerten per E-Mail.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="font-sans font-semibold tracking-normal text-gray-900 mb-4">Fragen? Wir sind für Sie da</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <a href="mailto:anfrage@pvpro.ch" className="flex items-center justify-center gap-2 text-gray-700 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                anfrage@pvpro.ch
              </a>
              <PhoneLink phone="+41779770750" location="content" className="flex items-center justify-center gap-2 text-gray-700 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +41 77 977 07 50
              </PhoneLink>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-trust flex-shrink-0 mt-0.5" />
              <div className="text-left">
                <p className="text-sm text-gray-700">
                  <strong>Hinweis:</strong> Bitte überprüfen Sie auch Ihren Spam-Ordner. Manchmal landen unsere E-Mails dort.
                  Fügen Sie anfrage@pvpro.ch zu Ihren Kontakten hinzu, um alle Nachrichten zu erhalten.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">
              Zurück zur Startseite
            </Link>
            <Link href="/solarrechner" className="btn-secondary">
              Solarrechner nutzen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
