'use client';

import Link from 'next/link';
import { Mail, Clock, MapPin, Instagram } from 'lucide-react';
import { Locale } from '@/lib/i18n';
import { useLocale } from '@/lib/LocaleContext';

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
    tagline: 'PVPro.ch est une plateforme suisse indépendante qui met en relation les propriétaires immobiliers avec des installateurs photovoltaïques certifiés et des solutions de stockage.',
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
