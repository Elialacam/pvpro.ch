"use client";

import Link from 'next/link';
import { CheckCircle, Mail, Phone, Clock } from 'lucide-react';
import { useEffect } from 'react';

export default function GrazieItPage() {
  useEffect(() => {
    document.title = 'Grazie – La tua richiesta è stata inviata | PVPro';
  }, []);

  return (
    <section className="min-h-[80vh] flex items-center bg-gradient-to-b from-orange-50 to-white pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 sm:p-12 text-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
            <CheckCircle className="w-10 h-10 text-[#F97316]" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Grazie per la tua richiesta!</h1>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            La tua richiesta è stata ricevuta con successo. I nostri installatori partner certificati ti contatteranno entro <strong>24–48 ore</strong> con le loro migliori offerte.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { Icon: Clock, title: '24–48 ore', text: 'Tempo di risposta tipico' },
              { Icon: Mail,  title: 'Fino a 3 preventivi', text: 'Da installatori certificati' },
              { Icon: Phone, title: 'Contatto diretto', text: 'Per telefono o e-mail' },
            ].map(({ Icon, title, text }) => (
              <div key={title} className="rounded-xl p-5 border border-gray-100">
                <Icon className="w-6 h-6 text-[#F97316] mx-auto mb-2" />
                <p className="font-bold text-gray-900 text-sm mb-1">{title}</p>
                <p className="text-xs text-gray-500">{text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/it" className="px-6 py-3 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
              Torna alla home
            </Link>
            <Link href="/it/come-funziona" className="px-6 py-3 rounded-full font-bold text-gray-700 text-sm border border-gray-200 hover:bg-gray-50 transition-colors">
              Come funziona?
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
