import Link from 'next/link';
import { companyRoutes, type CompanyLocale } from './content';
import { localizedCompanyContent } from './localizedContent';
import { CompanyHero } from './CompanyHero';
import { CompanyQuote, CompanyResources, Paragraphs } from './shared';
import styles from './CompanyPages.module.css';

export function AboutPage({ locale }: { locale: CompanyLocale }) {
  const c = localizedCompanyContent[locale];
  const a = c.about;
  return <article className={styles.page}>
    <CompanyHero locale={locale} subject="about" aside={<><strong>{c.facts[1].value}</strong><p>{c.facts[1].label}</p><p className="mt-5">PvPro.ch / NOBA Media Sagl<br />Lugaggia, {c.contact.canton}, {c.contact.country}</p></>} />
    <div className={`${styles.container} ${styles.body}`}>
      <section className={styles.stats} aria-label={c.labels.about}>
        {c.facts.map(fact => <div className={styles.stat} key={fact.label}><strong>{fact.value}</strong><span>{fact.label}</span></div>)}
      </section>
      <section className={styles.split}>
        <h2 className={styles.heading}>{a.title}</h2>
        <div><Paragraphs paragraphs={a.paragraphs} /></div>
      </section>
      <section className={`${styles.card} ${styles.split}`}>
        <div><p className={styles.number}>2023 → 2025</p><h2 className={styles.heading}>{a.storyTitle}</h2><Link href={companyRoutes[locale].team} className={styles.link}>{c.labels.team}</Link></div>
        <div className={styles.story}><Paragraphs paragraphs={a.story} /></div>
      </section>
      <section>
        <h2 className={styles.heading}>{a.principlesTitle}</h2>
        <div className={styles.principles}>{a.principles.map((item, index) => <article key={item.title} className={styles.card}>
          <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2,'0')}</span>
          <h3 className={styles.subheading}>{item.title}</h3><p className={styles.text}>{item.text}</p>
        </article>)}</div>
      </section>
      <section className={styles.card}>
        <h2 className={styles.heading}>{a.selectionTitle}</h2>
        <p className={styles.text}>{a.selectionIntro}</p>
        <ul className={styles.criteria}>{a.criteria.map(item => <li key={item.title}><h3 className={styles.subheading}>{item.title}</h3><p className={styles.text}>{item.text}</p></li>)}</ul>
        <p className={`${styles.text} mt-8`}>{a.feedback}</p>
        <aside className={styles.notice}>{a.disclaimer}</aside>
      </section>
      <section className={styles.model}>
        <h2 className={styles.heading}>{a.modelTitle}</h2><Paragraphs paragraphs={a.model} />
      </section>
      <CompanyQuote locale={locale} />
      <CompanyResources locale={locale} current="about" />
    </div>
  </article>;
}
