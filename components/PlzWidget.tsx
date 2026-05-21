'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { MapPin } from 'lucide-react';
import { getFormUrl } from '@/lib/i18n/formUrls';

function getLocale(pathname: string) {
  if (pathname.startsWith('/fr')) return 'fr';
  if (pathname.startsWith('/en')) return 'en';
  if (pathname.startsWith('/it')) return 'it';
  return 'de';
}

const content = {
  de: {
    heading: 'Solarofferten in Ihrer Region',
    sub: 'Kostenlos · Unverbindlich · In 2 Minuten',
    body: 'Geben Sie Ihre Postleitzahl ein und erhalten Sie bis zu 3 geprüfte Offerten von lokalen Installateuren.',
    placeholder: 'z.B. 8001',
    cta: 'Jetzt vergleichen →',
    badges: ['Keine Werbeanrufe', 'Geprüfte Installateure', '100% kostenlos'],
  },
  fr: {
    heading: 'Devis solaires dans votre région',
    sub: 'Gratuit · Sans engagement · En 2 minutes',
    body: 'Entrez votre code postal et recevez jusqu\'à 3 devis certifiés d\'installateurs locaux.',
    placeholder: 'ex. 1201',
    cta: 'Comparer maintenant →',
    badges: ["Pas d'appels commerciaux", 'Installateurs certifiés', '100% gratuit'],
  },
  en: {
    heading: 'Solar quotes in your region',
    sub: 'Free · No obligation · 2 minutes',
    body: 'Enter your postal code and receive up to 3 certified quotes from local installers.',
    placeholder: 'e.g. 8001',
    cta: 'Compare now →',
    badges: ['No cold calls', 'Certified installers', '100% free'],
  },
  it: {
    heading: 'Preventivi solari nella tua zona',
    sub: 'Gratuito · Senza impegno · In 2 minuti',
    body: 'Inserisci il tuo CAP e ricevi fino a 3 preventivi da installatori locali certificati.',
    placeholder: 'es. 6900',
    cta: 'Confronta ora →',
    badges: ['Nessuna chiamata commerciale', 'Installatori certificati', '100% gratuito'],
  },
};

export default function PlzWidget() {
  const [plz, setPlz] = useState('');
  const router = useRouter();
  const pathname = usePathname();
  const locale = getLocale(pathname);
  const c = content[locale];
  const formUrl = getFormUrl(pathname);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (plz.trim().length >= 4) {
      router.push(`${formUrl}?plz=${encodeURIComponent(plz.trim())}`);
    }
  };

  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #f0f0f0', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
      <div className="px-6 py-5" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
        <p className="text-white font-bold text-lg leading-snug">{c.heading}</p>
        <p className="text-orange-100 text-sm mt-1">{c.sub}</p>
      </div>

      <div className="bg-white px-6 py-6">
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">{c.body}</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="relative">
            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={plz}
              onChange={e => setPlz(e.target.value.replace(/\D/g, '').slice(0, 4))}
              placeholder={c.placeholder}
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
            {c.cta}
          </button>
        </form>

        <div className="mt-5 pt-4 border-t border-gray-100 flex flex-col gap-1.5">
          {c.badges.map(badge => (
            <p key={badge} className="flex items-center gap-2 text-xs text-gray-500">
              <span className="w-4 h-4 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 text-orange-500 font-bold text-[10px]">✓</span>
              {badge}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
