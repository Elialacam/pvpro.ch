import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { companyRoutes, type CompanyLocale } from './content';
import { localizedCompanyContent, privacyRoutes } from './localizedContent';
import type { CompanySubject } from './types';
import styles from './CompanyPages.module.css';

export function Paragraphs({ paragraphs }: { paragraphs: string[] }) {
  return <>{paragraphs.map((text, index) => <p className={styles.text} key={index}>{text}</p>)}</>;
}

export function CompanyQuote({ locale }: { locale: CompanyLocale }) {
  const c = localizedCompanyContent[locale];
  return <section className={styles.cta}>
    <h2 className={styles.heading}>{c.quoteTitle}</h2>
    <p className={styles.text}>{c.quoteText}</p>
    <Link className={styles.button} href={companyRoutes[locale].quote}>{c.quote}<ArrowRight size={17} aria-hidden="true" /></Link>
  </section>;
}

export function CompanyResources({ locale, current }: { locale: CompanyLocale; current: CompanySubject }) {
  const c = localizedCompanyContent[locale];
  return <nav className={styles.resources} aria-label={c.contents}>
    {(['about','team','contact','faq'] as const).filter(subject => subject !== current).map(subject =>
      <Link key={subject} className={styles.link} href={companyRoutes[locale][subject]}>{c.labels[subject]}</Link>)}
    <Link className={styles.link} href={privacyRoutes[locale]}>{c.privacy}</Link>
  </nav>;
}
