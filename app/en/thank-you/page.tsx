"use client";

import { CheckCircle, Mail, Phone, Clock, Star } from 'lucide-react';
import { useEffect } from 'react';
import Script from 'next/script';

export default function ThankYouEnPage() {
  useEffect(() => {
    document.title = 'Thank You – Your request has been sent | PVPro';
  }, []);

  return (
    <>
      <Script
        src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="lazyOnload"
      />

      <section className="min-h-screen flex items-center -mt-20 bg-gradient-to-b from-orange-50 to-white py-8">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 sm:p-12 text-center">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
              <CheckCircle className="w-10 h-10 text-[#F97316]" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Thank you for your request!</h1>
            <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Your request has been successfully received. Our certified partner installers will contact you within <strong>24–48 hours</strong> with their best offers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                { Icon: Clock, title: '24–48 hours', text: 'Typical response time' },
                { Icon: Mail,  title: 'Up to 3 quotes', text: 'From certified installers' },
                { Icon: Phone, title: 'Direct contact', text: 'By phone or email' },
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
                <p className="text-sm font-semibold text-gray-700">How was your experience? Leave us a review</p>
              </div>
              <div
                className="trustpilot-widget"
                data-locale="en-US"
                data-template-id="56278e9abfbbba0bdcd568bc"
                data-businessunit-id="69c14c4d68ba8b3a14086655"
                data-style-height="52px"
                data-style-width="100%"
                data-token="33fe1f98-8cdf-461c-ab75-def0be991b8d"
              >
                <a href="https://www.trustpilot.com/review/pvpro.ch" target="_blank" rel="noopener">Trustpilot</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
