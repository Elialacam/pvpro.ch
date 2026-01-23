'use client';

import Link from 'next/link';
import { Mail, Clock, MapPin, Instagram } from 'lucide-react';
import { Locale } from '@/lib/i18n';
import { useLocale } from '@/lib/LocaleContext';

// Footer content per locale
const footerContent: Record<Locale, {
  tagline: string;
  features: string[];
  contact: {
    title: string;
    email: string;
    hours: string;
    address: string;
  };
  followUs: string;
  copyright: string;
  privacy: string;
  imprint: string;
  privacyText: string;
  imprintText: string;
  home: string;
}> = {
  de: {
    tagline: 'PVPro.ch ist eine unabhängige Schweizer Plattform, die Immobilieneigentümer mit geprüften Photovoltaik-Installateuren und Speicherlösungen verbindet.',
    features: [
      'Geprüfte Schweizer Solarteure',
      'Echte Offerten statt Richtpreise',
      'Jede Anfrage persönlich geprüft',
      'Regionale Anbieter',
      'Schweizer Plattform',
    ],
    contact: {
      title: 'Wir sind für Sie da',
      email: 'info@pvpro.ch',
      hours: 'Mon-Sam: 8:00 - 19:00 Uhr',
      address: 'Culmannstrasse 37, 8006 Zürich, Schweiz',
    },
    followUs: 'Folge Uns',
    copyright: 'Alle Rechte vorbehalten.',
    privacy: '/datenschutz',
    imprint: '/impressum',
    privacyText: 'Datenschutz',
    imprintText: 'Impressum',
    home: '/',
  },
  fr: {
    tagline: 'PVPro.ch est une plateforme suisse indépendante qui met en relation les propriétaires immobiliers con installateurs fotovoltaïques certifiés et solutions de stockage.',
    features: [
      'Installateurs suisses certifiés',
      'Offres réelles au lieu de prix indicatifs',
      'Chaque demande vérifiée personnellement',
      'Fournisseurs régionaux',
      'Plateforme suisse',
    ],
    contact: {
      title: 'Nous sommes là pour vous',
      email: 'info@pvpro.ch',
      hours: 'Lun-Sam: 8:00 - 19:00',
      address: 'Culmannstrasse 37, 8006 Zürich, Suisse',
    },
    followUs: 'Suivez-nous',
    copyright: 'Tous droits réservés.',
    privacy: '/fr/protection-des-donnees',
    imprint: '/fr/mentions-legales',
    privacyText: 'Protection des données',
    imprintText: 'Mentions légales',
    home: '/fr',
  },
  en: {
    tagline: 'PVPro.ch is an independent Swiss platform that connects property owners with certified photovoltaic installers and storage solutions.',
    features: [
      'Certified Swiss Solar Installers',
      'Real Quotes Instead of Price Estimates',
      'Every Request Personally Reviewed',
      'Regional Providers',
      'Swiss Platform',
    ],
    contact: {
      title: 'We are here for you',
      email: 'info@pvpro.ch',
      hours: 'Mon-Sat: 8:00 - 19:00',
      address: 'Culmannstrasse 37, 8006 Zurich, Switzerland',
    },
    followUs: 'Follow Us',
    copyright: 'All rights reserved.',
    privacy: '/en/privacy',
    imprint: '/en/imprint',
    privacyText: 'Privacy Policy',
    imprintText: 'Imprint',
    home: '/en',
  },
  it: {
    tagline: 'PVPro.ch è una piattaforma svizzera indipendente che mette in relazione i proprietari di immobili con installatori fotovoltaici certificati e soluzioni di stoccaggio.',
    features: [
      'Installatori solari svizzeri certificati',
      'Offerte reali invece di stime di prezzo',
      'Ogni richiesta verificata personalmente',
      'Fornitori regionali',
      'Piattaforma svizzera',
    ],
    contact: {
      title: 'Siamo qui per voi',
      email: 'info@pvpro.ch',
      hours: 'Lun-Sab: 8:00 - 19:00',
      address: 'Culmannstrasse 37, 8006 Zurigo, Svizzera',
    },
    followUs: 'Seguici',
    copyright: 'Tutti i diritti riservati.',
    privacy: '/it/protezione-dati',
    imprint: '/it/note-legali',
    privacyText: 'Protezione dei dati',
    imprintText: 'Note legali',
    home: '/it',
  },
};

export default function Footer() {
  const locale = useLocale();
  const content = footerContent[locale] || footerContent.de;

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Column 1 - Logo & Tagline */}
          <div>
            <Link href={content.home} className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold">
                <span className="text-white">P</span>
                <span className="text-primary">V</span>
                <span className="text-white">Pro</span>
                <span className="text-gray-500 text-lg">.ch</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400">
              {content.tagline}
            </p>
          </div>

          {/* Column 2 - Features */}
          <div>
            <ul className="space-y-2">
              {content.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="text-primary">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">{content.contact.title}</h3>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${content.contact.email}`} className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  {content.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Clock className="w-4 h-4" />
                {content.contact.hours}
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                {content.contact.address}
              </li>
            </ul>
          </div>

          {/* Column 4 - Follow Us */}
          <div>
            <h3 className="text-white font-bold mb-4">{content.followUs}</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/pvpro.ch/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/pvpro.ch/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 PV Pro. {content.copyright} <Link href={content.privacy} className="hover:text-white">{content.privacyText}</Link> | <Link href={content.imprint} className="hover:text-white">{content.imprintText}</Link></p>
        </div>
      </div>
    </footer>
  );
}
