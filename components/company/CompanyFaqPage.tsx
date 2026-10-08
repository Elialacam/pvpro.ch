import Link from 'next/link';
import type { CompanyLocale } from './content';
import { companyRoutes } from './content';
import { localizedCompanyContent, privacyRoutes } from './localizedContent';
import { companyFaqData, companyFaqGroups } from './companyFaqData';
import { CompanyHero } from './CompanyHero';
import { CompanyQuote, CompanyResources } from './shared';
import styles from './CompanyPages.module.css';

export function CompanyFaqPage({ locale }: { locale: CompanyLocale }) {
  const c = localizedCompanyContent[locale];
  const faqs = companyFaqData[locale];
  const schema = {
    '@context':'https://schema.org', '@type':'FAQPage',
    mainEntity:faqs.map(faq => ({
      '@type':'Question',name:faq.question,
      acceptedAnswer:{'@type':'Answer',text:faq.answer.join('\n\n')}
    }))
  };
  return <article className={styles.page}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}} />
    <CompanyHero locale={locale} subject="faq" />
    <div className={`${styles.container} ${styles.body}`}>
      <div className={styles.faqLayout}>
        <nav className={styles.contents} aria-label={c.contents}>
          <h2 className={styles.subheading}>{c.contents}</h2>
          {companyFaqGroups.map((group,index) => <Link className={styles.link} key={group.id} href={`#${group.id}`}>{c.faq.groupTitles[index]}</Link>)}
        </nav>
        <div className={styles.faqGroups}>
          {companyFaqGroups.map((group,index) => <section id={group.id} className={styles.faqGroup} key={group.id} aria-labelledby={`${group.id}-title`}>
            <h2 className={styles.heading} id={`${group.id}-title`}>{c.faq.groupTitles[index]}</h2>
            {group.questions.map(id => {
              const faq = faqs.find(item => item.id === id)!;
              return <details className={styles.faq} key={id}>
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <div className={styles.answer}>{faq.answer.map((paragraph,p) => <p className={styles.text} key={p}>
                  {id === 9 && p === faq.answer.length - 1 ? <Link className={styles.link} href={privacyRoutes[locale]}>{paragraph}</Link> : paragraph}
                </p>)}</div>
              </details>;
            })}
          </section>)}
        </div>
      </div>
      <section className={styles.card}>
        <h2 className={styles.heading}>{c.faq.helpTitle}</h2>
        <p className={styles.text}>{c.faq.helpText}</p>
        <Link href={companyRoutes[locale].contact} className={styles.link}>{c.labels.contact}</Link>
      </section>
      <CompanyQuote locale={locale} />
      <CompanyResources locale={locale} current="faq" />
    </div>
  </article>;
}
