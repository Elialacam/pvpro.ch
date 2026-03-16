'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin } from 'lucide-react';

export default function PlzWidget() {
  const [plz, setPlz] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (plz.trim().length >= 4) {
      router.push(`/anfrage?plz=${encodeURIComponent(plz.trim())}`);
    }
  };

  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #f0f0f0', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
      {/* Orange top bar */}
      <div className="px-6 py-5" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
        <p className="text-white font-black text-lg leading-snug">
          Solarofferten in Ihrer Region
        </p>
        <p className="text-orange-100 text-sm mt-1">
          Kostenlos · Unverbindlich · In 2 Minuten
        </p>
      </div>

      {/* Form */}
      <div className="bg-white px-6 py-6">
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          Geben Sie Ihre Postleitzahl ein und erhalten Sie bis zu 3 geprüfte Offerten von lokalen Installateuren.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="relative">
            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={plz}
              onChange={e => setPlz(e.target.value.replace(/\D/g, '').slice(0, 4))}
              placeholder="z.B. 8001"
              maxLength={4}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
            />
          </div>
          <button
            type="submit"
            disabled={plz.length < 4}
            className="w-full py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 active:scale-[0.98]"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
          >
            Jetzt vergleichen →
          </button>
        </form>

        {/* Trust badges */}
        <div className="mt-5 pt-4 border-t border-gray-100 flex flex-col gap-1.5">
          {['Keine Werbeanrufe', 'Geprüfte Installateure', '100% kostenlos'].map(t => (
            <p key={t} className="flex items-center gap-2 text-xs text-gray-500">
              <span className="w-4 h-4 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 text-orange-500 font-bold text-[10px]">✓</span>
              {t}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
