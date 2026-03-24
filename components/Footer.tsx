'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from '@/lib/LocaleContext';

const instagramUrl = 'https://www.instagram.com/pvpro.ch/';
const facebookUrl  = 'https://www.facebook.com/pvpro.ch/';

const footerContent: Record<string, {
  description: string;
  copyright: string;
  columns: { title: string; links: { label: string; href: string }[] }[];
}> = {
  de: {
    description: 'PVPro.ch ist eine unabhängige Schweizer Plattform, die Immobilienbesitzer mit geprüften Photovoltaik-Installateuren verbindet.',
    copyright: '© 2026 PVPro. Alle Rechte vorbehalten.',
    columns: [
      {
        title: 'Ressourcen',
        links: [
          { label: 'Solarrechner',               href: '/solarrechner' },
          { label: 'Blog',                        href: '/blog' },
          { label: 'Förderungen',                 href: '/foerderungen' },
          { label: 'Solaranlage Kosten',          href: '/solaranlage-kosten' },
          { label: 'FAQ',                         href: '/faq' },
        ],
      },
      {
        title: 'Für Kunden',
        links: [
          { label: 'Solaranlage mit Speicher',          href: '/solaranlage-mit-speicher' },
          { label: 'Photovoltaik Kosten pro m²',        href: '/photovoltaik-kosten-pro-m2' },
          { label: 'Solaranlage Einfamilienhaus',        href: '/solaranlage-einfamilienhaus' },
          { label: 'Solaranlage Mehrfamilienhaus',       href: '/solaranlage-mehrfamilienhaus' },
          { label: 'Wie funktioniert eine Solaranlage', href: '/wie-funktioniert' },
          { label: 'Bewilligung Solaranlage',           href: '/bewilligungspflicht-solaranlage-schweiz' },
        ],
      },
      {
        title: 'Über uns',
        links: [
          { label: 'Über uns',            href: '/ueber-uns' },
          { label: 'Wie es funktioniert', href: '/wie-es-funktioniert' },
          { label: 'Datenschutz',         href: '/datenschutz' },
          { label: 'Impressum',           href: '/impressum' },
        ],
      },
    ],
  },
  fr: {
    description: "PVPro.ch est une plateforme suisse indépendante qui met en relation les propriétaires avec des installateurs photovoltaïques certifiés.",
    copyright: '© 2026 PVPro. Tous droits réservés.',
    columns: [
      {
        title: 'Ressources',
        links: [
          { label: 'Calculateur solaire',            href: '/fr/calculateur-solaire' },
          { label: 'Blog',                          href: '/fr/blog' },
          { label: 'Subventions',                   href: '/fr/subventions-solaires' },
          { label: "Coût installation solaire",     href: '/fr/cout-installation-solaire' },
          { label: 'FAQ',                           href: '/fr/faq' },
        ],
      },
      {
        title: 'Pour les clients',
        links: [
          { label: 'Solaire avec batterie',               href: '/fr/solaire-avec-batterie' },
          { label: 'Coût PV par m²',                      href: '/fr/cout-pv-par-m2' },
          { label: 'PV maison individuelle',              href: '/fr/solaire-maison-individuelle' },
          { label: 'PV immeuble résidentiel',             href: '/fr/solaire-immeuble' },
          { label: 'Comment fonctionne le solaire',       href: '/fr/fonctionnement-solaire' },
          { label: 'Autorisation installation solaire',   href: '/fr/autorisation-installation-solaire-suisse' },
        ],
      },
      {
        title: 'À propos',
        links: [
          { label: 'À propos de nous',          href: '/fr/a-propos' },
          { label: 'Comment ça marche',         href: '/fr/comment-ca-marche' },
          { label: 'Protection des données',    href: '/fr/protection-des-donnees' },
          { label: 'Mentions légales',          href: '/fr/mentions-legales' },
        ],
      },
    ],
  },
  en: {
    description: 'PVPro.ch is an independent Swiss platform connecting homeowners with certified photovoltaic installers.',
    copyright: '© 2026 PVPro. All rights reserved.',
    columns: [
      {
        title: 'Resources',
        links: [
          { label: 'Solar calculator',            href: '/en/solar-calculator' },
          { label: 'Blog',                       href: '/en/blog' },
          { label: 'Subsidies',                  href: '/en/solar-subsidies' },
          { label: 'Solar system costs',         href: '/en/solar-panel-costs' },
          { label: 'FAQ',                        href: '/en/faq' },
        ],
      },
      {
        title: 'For customers',
        links: [
          { label: 'Solar with battery storage',  href: '/en/solar-with-battery' },
          { label: 'PV cost per m²',              href: '/en/solar-cost-per-m2' },
          { label: 'PV for detached houses',      href: '/en/solar-detached-house' },
          { label: 'PV for apartment buildings',  href: '/en/solar-apartment-building' },
          { label: 'How solar panels work',       href: '/en/how-solar-works' },
          { label: 'Solar panel permits',         href: '/en/solar-panel-permit-switzerland' },
        ],
      },
      {
        title: 'About us',
        links: [
          { label: 'About us',        href: '/en/about-us' },
          { label: 'How it works',    href: '/en/how-it-works' },
          { label: 'Privacy policy',  href: '/en/privacy' },
          { label: 'Legal notice',    href: '/en/imprint' },
        ],
      },
    ],
  },
  it: {
    description: 'PVPro.ch è una piattaforma svizzera indipendente che mette in contatto i proprietari immobiliari con installatori fotovoltaici certificati.',
    copyright: '© 2026 PVPro. Tutti i diritti riservati.',
    columns: [
      {
        title: 'Risorse',
        links: [
          { label: 'Calcolatore solare',            href: '/it/calcolatore-solare' },
          { label: 'Blog',                        href: '/it/blog' },
          { label: 'Sovvenzioni',                 href: '/it/incentivi-solari' },
          { label: 'Costi impianto solare',       href: '/it/costi-impianto-solare' },
          { label: 'FAQ',                         href: '/it/faq' },
        ],
      },
      {
        title: 'Per i clienti',
        links: [
          { label: 'Solare con accumulo',              href: '/it/solare-con-accumulo' },
          { label: 'Costo fotovoltaico per m²',        href: '/it/costo-fv-per-m2' },
          { label: 'Fotovoltaico casa unifamiliare',    href: '/it/solare-casa-unifamiliare' },
          { label: 'Fotovoltaico condominio',           href: '/it/solare-condominio' },
          { label: 'Come funziona un impianto solare', href: '/it/come-funziona-solare' },
          { label: 'Autorizzazione impianto solare',   href: '/it/autorizzazione-impianto-solare-svizzera' },
        ],
      },
      {
        title: 'Chi siamo',
        links: [
          { label: 'Chi siamo',         href: '/it/chi-siamo' },
          { label: 'Come funziona',     href: '/it/come-funziona' },
          { label: 'Privacy',           href: '/it/protezione-dati' },
          { label: 'Note legali',       href: '/it/note-legali' },
        ],
      },
    ],
  },
};

export default function Footer() {
  const locale = useLocale();
  const homeHref = locale === 'de' ? '/' : `/${locale}`;
  const content = footerContent[locale] || footerContent.de;

  return (
    <footer style={{ background: '#0d1117' }} className="text-gray-400">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16 lg:py-20">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-6 lg:pr-4">
            <Link href={homeHref}>
              <Image
                src="/logo-pvpro.png"
                alt="PVPro.ch"
                width={130}
                height={36}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-500" style={{ maxWidth: 260 }}>
              {content.description}
            </p>
            <div className="flex items-center gap-3 mt-1">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
                style={{ background: 'rgba(255,255,255,0.07)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.14)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)')}
              >
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
                style={{ background: 'rgba(255,255,255,0.07)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.14)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)')}
              >
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Cols 2-5 — Link columns */}
          {content.columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white text-sm font-semibold tracking-wide mb-5">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex items-center justify-center py-6 text-xs text-gray-600"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <p>{content.copyright}</p>
        </div>

      </div>
    </footer>
  );
}
