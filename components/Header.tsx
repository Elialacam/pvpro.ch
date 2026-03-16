'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLocale } from '@/lib/LocaleContext';
import { usePathname } from 'next/navigation';
import {
  ChevronDown, Sun, Zap, Star, ArrowRight,
  Home, BarChart2, Battery, Calculator, Layers,
  Award, Percent, FileText, Users, Mail, HelpCircle, Shield, BookOpen
} from 'lucide-react';

const HOME_PATHS = ['/', '/fr', '/en', '/it'];

interface DropdownItem {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  href: string;
}

interface NavItem {
  label: string;
  category: string;
  title: string;
  description: string;
  viewAllHref: string;
  viewAllLabel: string;
  items: DropdownItem[];
}

const navItems: NavItem[] = [
  {
    label: 'Wie es funktioniert',
    category: 'SO EINFACH GEHT ES',
    title: 'Kostenlos vergleichen',
    description: 'Unverbindlich · In 2 Minuten · Geprüfte Installateure',
    viewAllHref: '/#wie-es-funktioniert',
    viewAllLabel: 'Mehr erfahren',
    items: [
      { icon: <FileText className="w-5 h-5" />, title: 'Formular ausfüllen', subtitle: 'Ihre Anforderungen angeben', href: '/anfrage' },
      { icon: <Zap className="w-5 h-5" />, title: 'Angebote erhalten', subtitle: 'Bis zu 3 geprüfte Offerten', href: '/anfrage' },
      { icon: <Star className="w-5 h-5" />, title: 'Besten Anbieter wählen', subtitle: 'Kostenlos & unverbindlich', href: '/anfrage' },
    ],
  },
  {
    label: 'Solaranlage',
    category: 'SOLARANLAGEN SCHWEIZ',
    title: 'Photovoltaik',
    description: 'Qualität · Effizienz · Nachhaltigkeit',
    viewAllHref: '/solaranlage-kosten',
    viewAllLabel: 'Alle anzeigen',
    items: [
      { icon: <Home className="w-5 h-5" />, title: 'Aufdach-Anlage', subtitle: 'Klassische Dachmontage', href: '/solaranlage-kosten' },
      { icon: <Layers className="w-5 h-5" />, title: 'Indach-Anlage', subtitle: 'Ästhetisch integriert', href: '/solaranlage-kosten' },
      { icon: <Battery className="w-5 h-5" />, title: 'Mit Batteriespeicher', subtitle: 'Energie speichern & nutzen', href: '/solaranlage-mit-speicher' },
      { icon: <BarChart2 className="w-5 h-5" />, title: 'Solaranlage Kosten', subtitle: 'Preise & Kalkulation', href: '/solaranlage-kosten' },
      { icon: <Calculator className="w-5 h-5" />, title: 'Solarrechner', subtitle: 'Ertrag berechnen', href: '/solarrechner' },
    ],
  },
  {
    label: 'Förderungen',
    category: 'STAATLICHE FÖRDERUNG',
    title: 'Förderungen',
    description: 'Kanton · Bund · Steuerliche Abzüge',
    viewAllHref: '/solaranlage-kosten',
    viewAllLabel: 'Mehr erfahren',
    items: [
      { icon: <Award className="w-5 h-5" />, title: 'Einmalvergütung (EIV)', subtitle: 'Bundesförderung bis 30%', href: '/solaranlage-kosten' },
      { icon: <Percent className="w-5 h-5" />, title: 'Kantonale Förderung', subtitle: 'Ihr Kanton, Ihr Beitrag', href: '/solaranlage-kosten' },
      { icon: <FileText className="w-5 h-5" />, title: 'Steuerliche Abzüge', subtitle: 'Solar in der Steuererklärung', href: '/solaranlage-kosten' },
    ],
  },
  {
    label: 'Über uns',
    category: 'ÜBER PVPRO',
    title: 'Unternehmen',
    description: 'Mission · Team · Kontakt',
    viewAllHref: '/',
    viewAllLabel: 'Alle anzeigen',
    items: [
      { icon: <Sun className="w-5 h-5" />, title: 'Unser Ansatz', subtitle: 'Warum PVPro?', href: '/' },
      { icon: <Users className="w-5 h-5" />, title: 'Team', subtitle: 'Unsere Experten', href: '/' },
      { icon: <Mail className="w-5 h-5" />, title: 'Kontakt', subtitle: 'Schreiben Sie uns', href: '/anfrage' },
      { icon: <HelpCircle className="w-5 h-5" />, title: 'FAQ', subtitle: 'Häufige Fragen', href: '/#faq' },
      { icon: <Shield className="w-5 h-5" />, title: 'Datenschutz', subtitle: 'DSGVO-konform', href: '/datenschutz' },
      { icon: <BookOpen className="w-5 h-5" />, title: 'Impressum', subtitle: 'Rechtliche Informationen', href: '/impressum' },
    ],
  },
];

const ctaLabels: Record<string, string> = {
  de: 'Offerte anfordern',
  fr: 'Demander un devis',
  en: 'Request Quote',
  it: 'Richiedi preventivo',
};

const homeLinks: Record<string, string> = {
  de: '/',
  fr: '/fr',
  en: '/en',
  it: '/it',
};

function DropdownPanel({ item, transparent }: { item: NavItem; transparent: boolean }) {
  return (
    <div className="absolute top-full mt-3 z-50 w-[600px]"
      style={{ left: '50%', transform: 'translateX(-50%)' }}>
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex">
        {/* Left column */}
        <div className="w-[220px] flex-shrink-0 bg-gray-50 p-6 flex flex-col justify-between">
          <div>
            <p className="text-xs font-bold tracking-widest text-[#3b5fd6] mb-2 uppercase">
              {item.category}
            </p>
            <p className="text-xl font-bold text-gray-900 mb-2">{item.title}</p>
            <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
          </div>
          <Link
            href={item.viewAllHref}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-800 hover:text-[#3b5fd6] transition-colors mt-6 group"
          >
            {item.viewAllLabel}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Right column */}
        <div className="flex-1 p-4 flex flex-col gap-1">
          {item.items.map((sub, j) => (
            <Link
              key={j}
              href={sub.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-gray-500 group-hover:bg-[#3b5fd6]/10 group-hover:text-[#3b5fd6] transition-colors">
                {sub.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{sub.title}</p>
                <p className="text-xs text-gray-400">{sub.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const isHome = HOME_PATHS.includes(pathname);
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClickOut = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenIndex(null);
      }
    };
    document.addEventListener('mousedown', onClickOut);
    return () => document.removeEventListener('mousedown', onClickOut);
  }, []);

  const textColor = transparent ? 'text-white' : 'text-gray-800';
  const cta = ctaLabels[locale] || ctaLabels.de;
  const homeHref = homeLinks[locale] || '/';

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: transparent ? 'transparent' : 'rgba(255,255,255,0.97)',
        boxShadow: transparent ? 'none' : '0 1px 12px rgba(0,0,0,0.08)',
        backdropFilter: transparent ? 'none' : 'blur(8px)',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 sm:h-[72px]">

          {/* Logo */}
          <Link href={homeHref} className="flex-shrink-0">
            <Image
              src="/logo-pvpro.png"
              alt="PVPro.ch"
              width={160}
              height={44}
              className="h-8 sm:h-9 w-auto"
              style={transparent ? { filter: 'brightness(0) invert(1)' } : {}}
            />
          </Link>

          {/* Center — pill nav */}
          <div
            className="hidden md:flex items-center rounded-full px-1 py-1"
            style={{
              background: transparent ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.06)',
              backdropFilter: 'blur(12px)',
            }}
          >
            {navItems.map((item, i) => (
              <div key={i} className="relative">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 ${textColor} ${
                    openIndex === i
                      ? transparent ? 'bg-white/20' : 'bg-black/10'
                      : transparent ? 'hover:bg-white/15' : 'hover:bg-black/[0.07]'
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
                  />
                </button>

                {openIndex === i && (
                  <DropdownPanel item={item} transparent={transparent} />
                )}
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div style={transparent ? { filter: 'brightness(0) invert(1)' } : {}}>
              <LanguageSwitcher />
            </div>
            <Link
              href="/anfrage"
              className="hidden sm:inline-flex items-center font-semibold text-sm px-5 py-2.5 rounded-full border-2 transition-all duration-200 whitespace-nowrap"
              style={
                transparent
                  ? { borderColor: 'rgba(255,255,255,0.9)', color: 'white' }
                  : { borderColor: '#F97316', color: '#F97316' }
              }
            >
              {cta}
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
