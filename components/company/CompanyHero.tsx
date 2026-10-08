import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { companyRoutes, type CompanyLocale } from './content';
import { localizedCompanyContent } from './localizedContent';
import type { CompanySubject } from './types';
import styles from './CompanyPages.module.css';

export function CompanyHero({ locale, subject, aside }: { locale: CompanyLocale; subject: CompanySubject; aside?: ReactNode }) {
  const c = localizedCompanyContent[locale];
  const page = c.pages[subject];
  const contactAction = subject === 'team' || subject === 'faq';
  return <header className={styles.hero}>
    <div className={styles.container}>
      <nav aria-label={c.breadcrumb} className={styles.breadcrumb}>
        <Link href={locale === 'de' ? '/' : `/${locale}`}>{c.home}</Link>
        <ChevronRight size={14} aria-hidden="true" />
        <span aria-current="page">{c.labels[subject]}</span>
      </nav>
      <div className={aside ? styles.heroGrid : undefined}>
        <div>
          <p className={styles.eyebrow}>PvPro.ch · {c.labels[subject]}</p>
          <h1 className={styles.title}>{page.title}</h1>
          <p className={styles.intro}>{page.intro}</p>
          <Link href={companyRoutes[locale][contactAction ? 'contact' : 'quote']} className={styles.button}>
            {contactAction ? c.labels.contact : c.quote}<ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
        {aside && <aside className={styles.heroAside}>{aside}</aside>}
      </div>
    </div>
  </header>;
}
