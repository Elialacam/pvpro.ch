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

function getNavItems(locale: string): NavItem[] {
  const p = (path: string) => locale === 'de' ? path : `/${locale}${path}`;
  const req = locale === 'de' ? '/anfrage' : `/${locale === 'fr' ? 'fr' : locale}/anfrage`;

  const content: Record<string, NavItem[]> = {
    de: [
      {
        label: 'Wie es funktioniert',
        category: 'SO EINFACH GEHT ES',
        title: 'Kostenlos vergleichen',
        description: 'Unverbindlich · In 2 Minuten · Geprüfte Installateure',
        viewAllHref: '/wie-es-funktioniert',
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
        viewAllHref: '/foerderungen',
        viewAllLabel: 'Mehr erfahren',
        items: [
          { icon: <Award className="w-5 h-5" />, title: 'Einmalvergütung (EIV)', subtitle: 'Bundesförderung bis 30%', href: '/foerderungen' },
          { icon: <Percent className="w-5 h-5" />, title: 'Kantonale Förderung', subtitle: 'Ihr Kanton, Ihr Beitrag', href: '/foerderungen' },
          { icon: <FileText className="w-5 h-5" />, title: 'Steuerliche Abzüge', subtitle: 'Solar in der Steuererklärung', href: '/foerderungen' },
        ],
      },
      {
        label: 'Über uns',
        category: 'ÜBER PVPRO',
        title: 'Unternehmen',
        description: 'Mission · Team · Kontakt',
        viewAllHref: '/ueber-uns',
        viewAllLabel: 'Alle anzeigen',
        items: [
          { icon: <Sun className="w-5 h-5" />, title: 'Unser Ansatz', subtitle: 'Warum PVPro?', href: '/ueber-uns' },
          { icon: <Users className="w-5 h-5" />, title: 'Team', subtitle: 'Unsere Experten', href: '/ueber-uns' },
          { icon: <Mail className="w-5 h-5" />, title: 'Kontakt', subtitle: 'Schreiben Sie uns', href: '/anfrage' },
          { icon: <HelpCircle className="w-5 h-5" />, title: 'FAQ', subtitle: 'Häufige Fragen', href: '/faq' },
          { icon: <Shield className="w-5 h-5" />, title: 'Datenschutz', subtitle: 'DSGVO-konform', href: '/datenschutz' },
          { icon: <BookOpen className="w-5 h-5" />, title: 'Impressum', subtitle: 'Rechtliche Informationen', href: '/impressum' },
        ],
      },
    ],
    fr: [
      {
        label: 'Comment ça marche',
        category: 'SIMPLE ET RAPIDE',
        title: 'Comparer gratuitement',
        description: 'Sans engagement · En 2 minutes · Installateurs certifiés',
        viewAllHref: '/wie-es-funktioniert',
        viewAllLabel: 'En savoir plus',
        items: [
          { icon: <FileText className="w-5 h-5" />, title: 'Remplir le formulaire', subtitle: 'Indiquez vos besoins', href: '/anfrage' },
          { icon: <Zap className="w-5 h-5" />, title: 'Recevoir des offres', subtitle: "Jusqu'à 3 devis certifiés", href: '/anfrage' },
          { icon: <Star className="w-5 h-5" />, title: 'Choisir le meilleur', subtitle: 'Gratuit & sans engagement', href: '/anfrage' },
        ],
      },
      {
        label: 'Panneaux solaires',
        category: 'SOLAIRE EN SUISSE',
        title: 'Photovoltaïque',
        description: 'Qualité · Efficacité · Durabilité',
        viewAllHref: '/solaranlage-kosten',
        viewAllLabel: 'Voir tout',
        items: [
          { icon: <Home className="w-5 h-5" />, title: 'Installation en toiture', subtitle: 'Pose classique sur toit', href: '/solaranlage-kosten' },
          { icon: <Layers className="w-5 h-5" />, title: 'Intégration en toiture', subtitle: 'Esthétique et intégré', href: '/solaranlage-kosten' },
          { icon: <Battery className="w-5 h-5" />, title: 'Avec batterie de stockage', subtitle: 'Stocker et utiliser', href: '/solaranlage-mit-speicher' },
          { icon: <BarChart2 className="w-5 h-5" />, title: 'Coût installation solaire', subtitle: 'Prix & calcul', href: '/solaranlage-kosten' },
          { icon: <Calculator className="w-5 h-5" />, title: 'Calculateur solaire', subtitle: 'Estimer la production', href: '/solarrechner' },
        ],
      },
      {
        label: 'Subventions',
        category: 'AIDES DE L\'ÉTAT',
        title: 'Subventions',
        description: 'Canton · Fédéral · Déductions fiscales',
        viewAllHref: '/foerderungen',
        viewAllLabel: 'En savoir plus',
        items: [
          { icon: <Award className="w-5 h-5" />, title: 'Rétribution unique (RU)', subtitle: "Aide fédérale jusqu'à 30%", href: '/foerderungen' },
          { icon: <Percent className="w-5 h-5" />, title: 'Subventions cantonales', subtitle: 'Votre canton, votre aide', href: '/foerderungen' },
          { icon: <FileText className="w-5 h-5" />, title: 'Déductions fiscales', subtitle: 'Solaire dans vos impôts', href: '/foerderungen' },
        ],
      },
      {
        label: 'À propos',
        category: 'À PROPOS DE PVPRO',
        title: 'Entreprise',
        description: 'Mission · Équipe · Contact',
        viewAllHref: '/ueber-uns',
        viewAllLabel: 'Voir tout',
        items: [
          { icon: <Sun className="w-5 h-5" />, title: 'Notre approche', subtitle: 'Pourquoi PVPro?', href: '/ueber-uns' },
          { icon: <Users className="w-5 h-5" />, title: 'Équipe', subtitle: 'Nos experts', href: '/ueber-uns' },
          { icon: <Mail className="w-5 h-5" />, title: 'Contact', subtitle: 'Écrivez-nous', href: '/anfrage' },
          { icon: <HelpCircle className="w-5 h-5" />, title: 'FAQ', subtitle: 'Questions fréquentes', href: '/faq' },
          { icon: <Shield className="w-5 h-5" />, title: 'Protection des données', subtitle: 'Conforme RGPD', href: '/fr/protection-des-donnees' },
          { icon: <BookOpen className="w-5 h-5" />, title: 'Mentions légales', subtitle: 'Informations légales', href: '/fr/mentions-legales' },
        ],
      },
    ],
    en: [
      {
        label: 'How it works',
        category: 'SIMPLE & FAST',
        title: 'Compare for free',
        description: 'No obligation · 2 minutes · Certified installers',
        viewAllHref: '/wie-es-funktioniert',
        viewAllLabel: 'Learn more',
        items: [
          { icon: <FileText className="w-5 h-5" />, title: 'Fill in the form', subtitle: 'Tell us your needs', href: '/anfrage' },
          { icon: <Zap className="w-5 h-5" />, title: 'Receive quotes', subtitle: 'Up to 3 certified offers', href: '/anfrage' },
          { icon: <Star className="w-5 h-5" />, title: 'Choose the best', subtitle: 'Free & no obligation', href: '/anfrage' },
        ],
      },
      {
        label: 'Solar panels',
        category: 'SOLAR IN SWITZERLAND',
        title: 'Photovoltaics',
        description: 'Quality · Efficiency · Sustainability',
        viewAllHref: '/solaranlage-kosten',
        viewAllLabel: 'View all',
        items: [
          { icon: <Home className="w-5 h-5" />, title: 'Roof-mounted system', subtitle: 'Classic roof installation', href: '/solaranlage-kosten' },
          { icon: <Layers className="w-5 h-5" />, title: 'In-roof system', subtitle: 'Aesthetically integrated', href: '/solaranlage-kosten' },
          { icon: <Battery className="w-5 h-5" />, title: 'With battery storage', subtitle: 'Store & use energy', href: '/solaranlage-mit-speicher' },
          { icon: <BarChart2 className="w-5 h-5" />, title: 'Solar system costs', subtitle: 'Prices & calculation', href: '/solaranlage-kosten' },
          { icon: <Calculator className="w-5 h-5" />, title: 'Solar calculator', subtitle: 'Estimate production', href: '/solarrechner' },
        ],
      },
      {
        label: 'Subsidies',
        category: 'GOVERNMENT SUPPORT',
        title: 'Subsidies',
        description: 'Canton · Federal · Tax deductions',
        viewAllHref: '/foerderungen',
        viewAllLabel: 'Learn more',
        items: [
          { icon: <Award className="w-5 h-5" />, title: 'One-time payment (OTP)', subtitle: 'Federal subsidy up to 30%', href: '/foerderungen' },
          { icon: <Percent className="w-5 h-5" />, title: 'Cantonal subsidies', subtitle: 'Your canton, your support', href: '/foerderungen' },
          { icon: <FileText className="w-5 h-5" />, title: 'Tax deductions', subtitle: 'Solar on your tax return', href: '/foerderungen' },
        ],
      },
      {
        label: 'About us',
        category: 'ABOUT PVPRO',
        title: 'Company',
        description: 'Mission · Team · Contact',
        viewAllHref: '/ueber-uns',
        viewAllLabel: 'View all',
        items: [
          { icon: <Sun className="w-5 h-5" />, title: 'Our approach', subtitle: 'Why PVPro?', href: '/ueber-uns' },
          { icon: <Users className="w-5 h-5" />, title: 'Team', subtitle: 'Our experts', href: '/ueber-uns' },
          { icon: <Mail className="w-5 h-5" />, title: 'Contact', subtitle: 'Write to us', href: '/anfrage' },
          { icon: <HelpCircle className="w-5 h-5" />, title: 'FAQ', subtitle: 'Common questions', href: '/faq' },
          { icon: <Shield className="w-5 h-5" />, title: 'Privacy policy', subtitle: 'GDPR compliant', href: '/en/privacy' },
          { icon: <BookOpen className="w-5 h-5" />, title: 'Legal notice', subtitle: 'Legal information', href: '/en/imprint' },
        ],
      },
    ],
    it: [
      {
        label: 'Come funziona',
        category: 'SEMPLICE E VELOCE',
        title: 'Confronta gratis',
        description: 'Senza impegno · In 2 minuti · Installatori certificati',
        viewAllHref: '/wie-es-funktioniert',
        viewAllLabel: 'Scopri di più',
        items: [
          { icon: <FileText className="w-5 h-5" />, title: 'Compila il modulo', subtitle: 'Indica le tue esigenze', href: '/anfrage' },
          { icon: <Zap className="w-5 h-5" />, title: 'Ricevi i preventivi', subtitle: 'Fino a 3 offerte certificate', href: '/anfrage' },
          { icon: <Star className="w-5 h-5" />, title: 'Scegli il migliore', subtitle: 'Gratuito e senza impegno', href: '/anfrage' },
        ],
      },
      {
        label: 'Pannelli solari',
        category: 'SOLARE IN SVIZZERA',
        title: 'Fotovoltaico',
        description: 'Qualità · Efficienza · Sostenibilità',
        viewAllHref: '/solaranlage-kosten',
        viewAllLabel: 'Vedi tutto',
        items: [
          { icon: <Home className="w-5 h-5" />, title: 'Impianto su tetto', subtitle: 'Montaggio classico', href: '/solaranlage-kosten' },
          { icon: <Layers className="w-5 h-5" />, title: 'Impianto integrato', subtitle: 'Estetico e integrato', href: '/solaranlage-kosten' },
          { icon: <Battery className="w-5 h-5" />, title: 'Con accumulo batteria', subtitle: 'Immagazzina e usa', href: '/solaranlage-mit-speicher' },
          { icon: <BarChart2 className="w-5 h-5" />, title: 'Costi impianto solare', subtitle: 'Prezzi e calcolo', href: '/solaranlage-kosten' },
          { icon: <Calculator className="w-5 h-5" />, title: 'Calcolatore solare', subtitle: 'Stima la produzione', href: '/solarrechner' },
        ],
      },
      {
        label: 'Sovvenzioni',
        category: 'AIUTI STATALI',
        title: 'Sovvenzioni',
        description: 'Cantone · Federale · Deduzioni fiscali',
        viewAllHref: '/foerderungen',
        viewAllLabel: 'Scopri di più',
        items: [
          { icon: <Award className="w-5 h-5" />, title: 'Remunerazione unica (RU)', subtitle: 'Sussidio federale fino al 30%', href: '/foerderungen' },
          { icon: <Percent className="w-5 h-5" />, title: 'Contributi cantonali', subtitle: 'Il tuo cantone, il tuo aiuto', href: '/foerderungen' },
          { icon: <FileText className="w-5 h-5" />, title: 'Deduzioni fiscali', subtitle: 'Solare nella dichiarazione', href: '/foerderungen' },
        ],
      },
      {
        label: 'Chi siamo',
        category: 'CHI È PVPRO',
        title: 'Azienda',
        description: 'Missione · Team · Contatto',
        viewAllHref: '/ueber-uns',
        viewAllLabel: 'Vedi tutto',
        items: [
          { icon: <Sun className="w-5 h-5" />, title: 'Il nostro approccio', subtitle: 'Perché PVPro?', href: '/ueber-uns' },
          { icon: <Users className="w-5 h-5" />, title: 'Team', subtitle: 'I nostri esperti', href: '/ueber-uns' },
          { icon: <Mail className="w-5 h-5" />, title: 'Contatto', subtitle: 'Scrivici', href: '/anfrage' },
          { icon: <HelpCircle className="w-5 h-5" />, title: 'FAQ', subtitle: 'Domande frequenti', href: '/faq' },
          { icon: <Shield className="w-5 h-5" />, title: 'Privacy', subtitle: 'Conforme GDPR', href: '/it/protezione-dati' },
          { icon: <BookOpen className="w-5 h-5" />, title: 'Note legali', subtitle: 'Informazioni legali', href: '/it/note-legali' },
        ],
      },
    ],
  };

  return content[locale] || content.de;
}

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
  const navItems = getNavItems(locale);

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
        <div className="relative flex items-center justify-between h-16 sm:h-[72px]">

          <Link href={homeHref} className="flex-shrink-0 z-10">
            <Image
              src="/logo-pvpro.png"
              alt="PVPro.ch"
              width={160}
              height={44}
              className="h-8 sm:h-9 w-auto"
            />
          </Link>

          <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
            <div
              className="flex items-center rounded-full px-1 py-1"
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
          </div>

          <div className="flex items-center gap-3 sm:gap-4 z-10">
            <LanguageSwitcher transparent={transparent} />
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
