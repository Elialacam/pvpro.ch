'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { Locale } from '@/lib/i18n';
import { useLocale } from '@/lib/LocaleContext';

// Navigation links per locale
const navLinks: Record<Locale, { cta: string; home: string }> = {
  de: {
    cta: 'Offerte anfordern',
    home: '/',
  },
  fr: {
    cta: 'Demander un devis',
    home: '/fr',
  },
  en: {
    cta: 'Request Quote',
    home: '/en',
  },
  it: {
    cta: 'Richiedi preventivo',
    home: '/it',
  },
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const locale = useLocale();
  const links = navLinks[locale] || navLinks.de;

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href={links.home} className="flex items-center group">
            <Image
              src="/logo-pvpro.png"
              alt="PVPro"
              width={44}
              height={44}
              className="h-9 sm:h-11 w-auto"
            />
            <span className="text-2xl sm:text-3xl font-display font-bold -ml-1">
              <span className="text-gray-900">Pro</span>
              <span className="text-gray-400 text-lg">.ch</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <LanguageSwitcher />
            <button 
              onClick={() => {
                const formElement = document.getElementById('formular');
                if (formElement) {
                  const elementPosition = formElement.getBoundingClientRect().top + window.pageYOffset;
                  const offsetPosition = elementPosition - (window.innerHeight / 2) + (formElement.offsetHeight / 2);
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="btn-primary"
            >
              {links.cta}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <div className="pb-2">
                <LanguageSwitcher />
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  const formElement = document.getElementById('formular');
                  if (formElement) {
                    const elementPosition = formElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - (window.innerHeight / 2) + (formElement.offsetHeight / 2);
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="btn-primary text-center"
              >
                {links.cta}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
