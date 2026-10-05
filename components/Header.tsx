'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLocale } from '@/lib/LocaleContext';
import { usePathname } from 'next/navigation';
import { getFormUrl } from '@/lib/i18n/formUrls';
import { ECONOMIC_FACTS } from '@/lib/facts';
import { articleLocalePaths } from '@/lib/articleSeoRoutes';
import { companyRoutes, type CompanyLocale } from './company/content';
import {
  ChevronDown, Sun, Zap, Star, ArrowRight,
  Home, BarChart2, Battery, Calculator, Layers,
  Award, Percent, FileText, Users, Mail, HelpCircle, Shield, BookOpen, Menu, X
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
          { icon: <Home className="w-5 h-5" />, title: 'Einfamilienhaus', subtitle: 'Anlage für Ihr Haus', href: '/solaranlage-einfamilienhaus' },
          { icon: <Layers className="w-5 h-5" />, title: 'Mehrfamilienhaus', subtitle: 'Anlage für Wohngebäude', href: '/solaranlage-mehrfamilienhaus' },
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
          { icon: <Award className="w-5 h-5" />, title: 'Einmalvergütung (EIV)', subtitle: `Bundesförderung ${ECONOMIC_FACTS.incentives.federalSharePercent.min} bis ${ECONOMIC_FACTS.incentives.federalSharePercent.max}%`, href: '/foerderungen' },
          { icon: <Percent className="w-5 h-5" />, title: 'Kantonale Förderung', subtitle: 'Ihr Kanton, Ihr Beitrag', href: '/foerderungen' },
          { icon: <FileText className="w-5 h-5" />, title: 'Steuerliche Abzüge', subtitle: 'Solar in der Steuererklärung', href: '/foerderungen' },
        ],
      },
      {
        label: 'Über uns',
        category: 'ÜBER PvPro.ch',
        title: 'Unternehmen',
        description: 'Mission · Team · Kontakt',
        viewAllHref: '/ueber-uns',
        viewAllLabel: 'Alle anzeigen',
        items: [
          { icon: <Sun className="w-5 h-5" />, title: 'Unser Ansatz', subtitle: 'Warum PvPro.ch?', href: '/ueber-uns' },
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
        viewAllHref: '/fr/comment-ca-marche',
        viewAllLabel: 'En savoir plus',
        items: [
          { icon: <FileText className="w-5 h-5" />, title: 'Remplir le formulaire', subtitle: 'Indiquez vos besoins', href: '/fr/demande' },
          { icon: <Zap className="w-5 h-5" />, title: 'Recevoir des offres', subtitle: "Jusqu'à 3 devis certifiés", href: '/fr/demande' },
          { icon: <Star className="w-5 h-5" />, title: 'Choisir le meilleur', subtitle: 'Gratuit & sans engagement', href: '/fr/demande' },
        ],
      },
      {
        label: 'Panneaux solaires',
        category: 'SOLAIRE EN SUISSE',
        title: 'Photovoltaïque',
        description: 'Qualité · Efficacité · Durabilité',
        viewAllHref: '/fr/cout-installation-solaire',
        viewAllLabel: 'Voir tout',
        items: [
          { icon: <Home className="w-5 h-5" />, title: 'Maison individuelle', subtitle: 'Installation pour votre maison', href: '/fr/solaire-maison-individuelle' },
          { icon: <Layers className="w-5 h-5" />, title: 'Immeuble résidentiel', subtitle: 'Pour immeubles collectifs', href: '/fr/solaire-immeuble' },
          { icon: <Battery className="w-5 h-5" />, title: 'Avec batterie de stockage', subtitle: 'Stocker et utiliser', href: '/fr/solaire-avec-batterie' },
          { icon: <BarChart2 className="w-5 h-5" />, title: 'Coût installation solaire', subtitle: 'Prix & calcul', href: '/fr/cout-installation-solaire' },
          { icon: <Calculator className="w-5 h-5" />, title: 'Calculateur solaire', subtitle: 'Estimer la production', href: '/fr/calculateur-solaire' },
        ],
      },
      {
        label: 'Subventions',
        category: "AIDES DE L'ÉTAT",
        title: 'Subventions',
        description: 'Canton · Fédéral · Déductions fiscales',
        viewAllHref: '/fr/subventions-solaires',
        viewAllLabel: 'En savoir plus',
        items: [
          { icon: <Award className="w-5 h-5" />, title: 'Rétribution unique (RU)', subtitle: `Aide fédérale de ${ECONOMIC_FACTS.incentives.federalSharePercent.min} à ${ECONOMIC_FACTS.incentives.federalSharePercent.max}%`, href: '/fr/subventions-solaires' },
          { icon: <Percent className="w-5 h-5" />, title: 'Subventions cantonales', subtitle: 'Votre canton, votre aide', href: '/fr/subventions-solaires' },
          { icon: <FileText className="w-5 h-5" />, title: 'Déductions fiscales', subtitle: 'Solaire dans vos impôts', href: '/fr/subventions-solaires' },
        ],
      },
      {
        label: 'À propos',
        category: 'À PROPOS DE PvPro.ch',
        title: 'Entreprise',
        description: 'Mission · Équipe · Contact',
        viewAllHref: '/fr/a-propos',
        viewAllLabel: 'Voir tout',
        items: [
          { icon: <Sun className="w-5 h-5" />, title: 'Notre approche', subtitle: 'Pourquoi PvPro.ch?', href: '/fr/a-propos' },
          { icon: <Users className="w-5 h-5" />, title: 'Équipe', subtitle: 'Nos experts', href: '/fr/a-propos' },
          { icon: <Mail className="w-5 h-5" />, title: 'Contact', subtitle: 'Écrivez-nous', href: '/fr/demande' },
          { icon: <HelpCircle className="w-5 h-5" />, title: 'FAQ', subtitle: 'Questions fréquentes', href: '/fr/faq' },
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
        viewAllHref: '/en/how-it-works',
        viewAllLabel: 'Learn more',
        items: [
          { icon: <FileText className="w-5 h-5" />, title: 'Fill in the form', subtitle: 'Tell us your needs', href: '/en/request' },
          { icon: <Zap className="w-5 h-5" />, title: 'Receive quotes', subtitle: 'Up to 3 certified offers', href: '/en/request' },
          { icon: <Star className="w-5 h-5" />, title: 'Choose the best', subtitle: 'Free & no obligation', href: '/en/request' },
        ],
      },
      {
        label: 'Solar panels',
        category: 'SOLAR IN SWITZERLAND',
        title: 'Photovoltaics',
        description: 'Quality · Efficiency · Sustainability',
        viewAllHref: '/en/solar-panel-costs',
        viewAllLabel: 'View all',
        items: [
          { icon: <Home className="w-5 h-5" />, title: 'Detached house', subtitle: 'System for your home', href: '/en/solar-detached-house' },
          { icon: <Layers className="w-5 h-5" />, title: 'Apartment building', subtitle: 'For residential buildings', href: '/en/solar-apartment-building' },
          { icon: <Battery className="w-5 h-5" />, title: 'With battery storage', subtitle: 'Store & use energy', href: '/en/solar-with-battery' },
          { icon: <BarChart2 className="w-5 h-5" />, title: 'Solar system costs', subtitle: 'Prices & calculation', href: '/en/solar-panel-costs' },
          { icon: <Calculator className="w-5 h-5" />, title: 'Solar calculator', subtitle: 'Estimate production', href: '/en/solar-calculator' },
        ],
      },
      {
        label: 'Subsidies',
        category: 'GOVERNMENT SUPPORT',
        title: 'Subsidies',
        description: 'Canton · Federal · Tax deductions',
        viewAllHref: '/en/solar-subsidies',
        viewAllLabel: 'Learn more',
        items: [
          { icon: <Award className="w-5 h-5" />, title: 'One-time payment (OTP)', subtitle: `Federal subsidy ${ECONOMIC_FACTS.incentives.federalSharePercent.min} to ${ECONOMIC_FACTS.incentives.federalSharePercent.max}%`, href: '/en/solar-subsidies' },
          { icon: <Percent className="w-5 h-5" />, title: 'Cantonal subsidies', subtitle: 'Your canton, your support', href: '/en/solar-subsidies' },
          { icon: <FileText className="w-5 h-5" />, title: 'Tax deductions', subtitle: 'Solar on your tax return', href: '/en/solar-subsidies' },
        ],
      },
      {
        label: 'About us',
        category: 'ABOUT PvPro.ch',
        title: 'Company',
        description: 'Mission · Team · Contact',
        viewAllHref: '/en/about-us',
        viewAllLabel: 'View all',
        items: [
          { icon: <Sun className="w-5 h-5" />, title: 'Our approach', subtitle: 'Why PvPro.ch?', href: '/en/about-us' },
          { icon: <Users className="w-5 h-5" />, title: 'Team', subtitle: 'Our experts', href: '/en/about-us' },
          { icon: <Mail className="w-5 h-5" />, title: 'Contact', subtitle: 'Write to us', href: '/en/request' },
          { icon: <HelpCircle className="w-5 h-5" />, title: 'FAQ', subtitle: 'Common questions', href: '/en/faq' },
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
        viewAllHref: '/it/come-funziona',
        viewAllLabel: 'Scopri di più',
        items: [
          { icon: <FileText className="w-5 h-5" />, title: 'Compila il modulo', subtitle: 'Indica le tue esigenze', href: '/it/richiesta' },
          { icon: <Zap className="w-5 h-5" />, title: 'Ricevi i preventivi', subtitle: 'Fino a 3 offerte certificate', href: '/it/richiesta' },
          { icon: <Star className="w-5 h-5" />, title: 'Scegli il migliore', subtitle: 'Gratuito e senza impegno', href: '/it/richiesta' },
        ],
      },
      {
        label: 'Pannelli solari',
        category: 'SOLARE IN SVIZZERA',
        title: 'Fotovoltaico',
        description: 'Qualità · Efficienza · Sostenibilità',
        viewAllHref: '/it/costi-impianto-solare',
        viewAllLabel: 'Vedi tutto',
        items: [
          { icon: <Home className="w-5 h-5" />, title: 'Casa unifamiliare', subtitle: 'Impianto per la tua casa', href: '/it/solare-casa-unifamiliare' },
          { icon: <Layers className="w-5 h-5" />, title: 'Condominio', subtitle: 'Per edifici residenziali', href: '/it/solare-condominio' },
          { icon: <Battery className="w-5 h-5" />, title: 'Con accumulo batteria', subtitle: 'Immagazzina e usa', href: '/it/solare-con-accumulo' },
          { icon: <BarChart2 className="w-5 h-5" />, title: 'Costi impianto solare', subtitle: 'Prezzi e calcolo', href: '/it/costi-impianto-solare' },
          { icon: <Calculator className="w-5 h-5" />, title: 'Calcolatore solare', subtitle: 'Stima la produzione', href: '/it/calcolatore-solare' },
        ],
      },
      {
        label: 'Sovvenzioni',
        category: 'AIUTI STATALI',
        title: 'Sovvenzioni',
        description: 'Cantone · Federale · Deduzioni fiscali',
        viewAllHref: '/it/incentivi-solari',
        viewAllLabel: 'Scopri di più',
        items: [
          { icon: <Award className="w-5 h-5" />, title: 'Remunerazione unica (RU)', subtitle: `Incentivo federale dal ${ECONOMIC_FACTS.incentives.federalSharePercent.min} al ${ECONOMIC_FACTS.incentives.federalSharePercent.max}%`, href: '/it/incentivi-solari' },
          { icon: <Percent className="w-5 h-5" />, title: 'Contributi cantonali', subtitle: 'Il tuo cantone, il tuo aiuto', href: '/it/incentivi-solari' },
          { icon: <FileText className="w-5 h-5" />, title: 'Deduzioni fiscali', subtitle: 'Solare nella dichiarazione', href: '/it/incentivi-solari' },
        ],
      },
      {
        label: 'Chi siamo',
        category: 'CHI È PvPro.ch',
        title: 'Azienda',
        description: 'Missione · Team · Contatto',
        viewAllHref: '/it/chi-siamo',
        viewAllLabel: 'Vedi tutto',
        items: [
          { icon: <Sun className="w-5 h-5" />, title: 'Il nostro approccio', subtitle: 'Perché PvPro.ch?', href: '/it/chi-siamo' },
          { icon: <Users className="w-5 h-5" />, title: 'Team', subtitle: 'I nostri esperti', href: '/it/chi-siamo' },
          { icon: <Mail className="w-5 h-5" />, title: 'Contatto', subtitle: 'Scrivici', href: '/it/richiesta' },
          { icon: <HelpCircle className="w-5 h-5" />, title: 'FAQ', subtitle: 'Domande frequenti', href: '/it/faq' },
          { icon: <Shield className="w-5 h-5" />, title: 'Privacy', subtitle: 'Conforme GDPR', href: '/it/protezione-dati' },
          { icon: <BookOpen className="w-5 h-5" />, title: 'Note legali', subtitle: 'Informazioni legali', href: '/it/note-legali' },
        ],
      },
    ],
  };

  const language: CompanyLocale = locale in companyRoutes ? locale as CompanyLocale : 'de';
  const routes = companyRoutes[language];
  const taxPaths = articleLocalePaths('solaranlage-steuerabzug-schweiz-2026', 'de');
  const subtitles = {
    de: { team: 'Aufgaben & Zuständigkeiten', federal: 'Einmaliger Beitrag des Bundes', tax: 'Bestehende Gebäude · steuerbares Einkommen' },
    fr: { team: 'Rôles et responsabilités', federal: 'Contribution unique de la Confédération', tax: 'Bâtiments existants · revenu imposable' },
    en: { team: 'Roles & responsibilities', federal: 'One-time federal contribution', tax: 'Existing buildings · taxable income' },
    it: { team: 'Ruoli e responsabilità', federal: 'Contributo federale una tantum', tax: 'Edifici esistenti · reddito imponibile' },
  }[language];
  return (content[language]).map((item, index) => {
    if (index === 0) return {
      ...item, viewAllHref: routes.service,
      items: item.items.map((sub, step) => ({
        ...sub,
        href: step === 0 ? routes.quote : `${routes.service}#${step === 1 ? 'receive-quotes' : 'compare-quotes'}`,
      })),
    };
    if (index === 2) return {
      ...item,
      items: item.items.map((sub, entry) => ({
        ...sub,
        href: entry === 2 ? taxPaths[language] : `${routes.subsidy}#${entry === 0 ? 'federal-subsidy' : 'cantonal-subsidies'}`,
        subtitle: entry === 0 ? subtitles.federal : entry === 2 ? subtitles.tax : sub.subtitle,
      })),
    };
    if (index === 3) return {
      ...item,
      items: item.items.map((sub, entry) => ({
        ...sub,
        href: entry === 1 ? routes.team : entry === 2 ? routes.contact : sub.href,
        subtitle: entry === 1 ? subtitles.team : sub.subtitle,
      })),
    };
    return item;
  });
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

function DropdownPanel({ item, id }: { item: NavItem; id: string }) {
  return (
    <div id={id} className="absolute top-full mt-3 z-50 w-[600px]"
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const isHome = HOME_PATHS.includes(pathname);
  const transparent = isHome && !scrolled && !mobileOpen;
  const navItems = getNavItems(locale);
  const menuLabels = {
    de: { open: 'Menü öffnen', close: 'Menü schliessen', navigation: 'Hauptnavigation' },
    fr: { open: 'Ouvrir le menu', close: 'Fermer le menu', navigation: 'Navigation principale' },
    en: { open: 'Open menu', close: 'Close menu', navigation: 'Main navigation' },
    it: { open: 'Apri il menu', close: 'Chiudi il menu', navigation: 'Navigazione principale' },
  }[locale] || { open: 'Menü öffnen', close: 'Menü schliessen', navigation: 'Hauptnavigation' };

  useEffect(() => {
    setMobileOpen(false);
    setOpenIndex(null);
  }, [pathname, locale]);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      if (mobileOpen) mobileToggleRef.current?.focus();
      if (openIndex !== null) headerRef.current?.querySelector<HTMLButtonElement>(`[aria-controls="desktop-nav-${openIndex}"]`)?.focus();
      setMobileOpen(false);
      setOpenIndex(null);
    };
    document.addEventListener('keydown', onEscape);
    return () => document.removeEventListener('keydown', onEscape);
  }, [mobileOpen, openIndex]);

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
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOut);
    return () => document.removeEventListener('mousedown', onClickOut);
  }, []);

  const textColor = transparent ? 'text-white' : 'text-gray-800';
  const cta = ctaLabels[locale] || ctaLabels.de;
  const homeHref = homeLinks[locale] || '/';
  const formUrl = getFormUrl(pathname);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: transparent && !mobileOpen ? 'transparent' : 'rgba(255,255,255,0.97)',
        boxShadow: transparent ? 'none' : '0 1px 12px rgba(0,0,0,0.08)',
        backdropFilter: transparent ? 'none' : 'blur(8px)',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="relative flex items-center justify-between h-16 sm:h-[72px]">

          <Link href={homeHref} className="flex-shrink-0 z-10">
            <Image
              src="/logo-pvpro.png"
              alt="PvPro.ch"
              width={220}
              height={64}
              sizes="440px"
              loading="lazy"
              className="h-28 sm:h-32 w-auto -my-8"
            />
          </Link>

          <nav aria-label={menuLabels.navigation} className="hidden xl:block absolute left-1/2 -translate-x-1/2"
            onClick={event => { if ((event.target as Element).closest('a')) setOpenIndex(null); }}>
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
                    type="button"
                    aria-expanded={openIndex === i}
                    aria-controls={`desktop-nav-${i}`}
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
                    <DropdownPanel item={item} id={`desktop-nav-${i}`} />
                  )}
                </div>
              ))}
            </div>
          </nav>

          <div className="flex items-center gap-3 sm:gap-4 z-10">
            <LanguageSwitcher transparent={transparent && !mobileOpen} />
            <Link
              href={formUrl}
              className="hidden sm:inline-flex items-center font-semibold text-sm px-5 py-2.5 rounded-full border-2 transition-all duration-200 whitespace-nowrap"
              style={
                transparent
                  ? { borderColor: 'rgba(255,255,255,0.9)', color: 'white' }
                  : { borderColor: '#fcb210', color: '#fcb210' }
              }
            >
              {cta}
            </Link>
            <button
              type="button"
              ref={mobileToggleRef}
              className={`xl:hidden inline-flex items-center justify-center w-10 h-10 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#3b5fd6] ${transparent && !mobileOpen ? 'text-white' : 'text-gray-800'}`}
              aria-label={mobileOpen ? menuLabels.close : menuLabels.open}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileOpen(value => !value)}
            >
              {mobileOpen ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
            </button>
          </div>

        </div>
      </div>
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label={menuLabels.navigation}
          className="xl:hidden bg-white border-t border-gray-100 px-6 pb-6 overflow-y-auto max-h-[calc(100dvh-72px)]"
          onClick={event => {
            if ((event.target as Element).closest('a')) {
              setMobileOpen(false);
              setOpenIndex(null);
            }
          }}
        >
          {navItems.map(item => (
            <section key={item.label} className="py-5 border-b border-gray-100">
              <Link href={item.viewAllHref} className="flex items-center justify-between font-bold text-gray-900 mb-3">
                {item.label}<ArrowRight size={17} aria-hidden="true" />
              </Link>
              <ul className="flex flex-col gap-1">
                {item.items.map(sub => <li key={sub.title}>
                  <Link href={sub.href} className="flex items-start gap-3 rounded-xl py-3 px-2 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#3b5fd6]">
                    <span className="text-[#976200] mt-0.5" aria-hidden="true">{sub.icon}</span>
                    <span><span className="block text-sm font-semibold text-gray-800">{sub.title}</span><span className="block text-xs text-gray-500 mt-1">{sub.subtitle}</span></span>
                  </Link>
                </li>)}
              </ul>
            </section>
          ))}
          <Link href={formUrl} className="inline-flex items-center gap-2 rounded-full bg-[#fcb210] text-gray-900 font-bold px-6 py-3 mt-6">{cta}<ArrowRight size={17} aria-hidden="true" /></Link>
        </nav>
      )}
    </header>
  );
}
