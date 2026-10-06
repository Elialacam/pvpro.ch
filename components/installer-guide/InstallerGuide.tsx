import Link from 'next/link';
import { ArrowDown, ArrowRight, ChevronRight, Equal, TriangleAlert } from 'lucide-react';
import { companyRoutes } from '@/components/company/content';
import { guideContent, type GuideLocale } from './content';
import styles from './InstallerGuide.module.css';

const sectionIds = ['comparison-basis', 'quote-review', 'warranties', 'warning-signs', 'signing-checklist'] as const;

function SectionLabel({ index, label }: { index: number; label: string }) {
  return <p className={styles.sectionLabel}><span className={styles.sectionNumber}>{String(index + 1).padStart(2, '0')}</span>{label}</p>;
}

/**
 * Presentational server component. LanguageWrapper already owns the main landmark.
 * Native checklist controls intentionally have no persistence or lead-data collection.
 */
export function InstallerGuide({ locale }: { locale: GuideLocale }) {
  const c = guideContent[locale];
  const routes = companyRoutes[locale];

  return <article className={styles.page} lang={locale} aria-labelledby="installer-guide-title">
    <div className={styles.container}>
      <nav className={styles.breadcrumb} aria-label={c.home}>
        <Link href={locale === 'de' ? '/' : `/${locale}`}>{c.home}</Link>
        <ChevronRight size={14} aria-hidden="true" />
        <span aria-current="page">{c.breadcrumb}</span>
      </nav>

      <header className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>{c.eyebrow}</p>
          <h1 id="installer-guide-title" className={styles.title}>{c.title}</h1>
          <p className={styles.intro}>{c.intro}</p>
        </div>
        <aside className={styles.heroNote}>
          <strong>{c.noteTitle}</strong>
          <p>{c.noteText}</p>
        </aside>
      </header>

      <nav className={styles.jumpNav} aria-label={c.navLabel}>
        {c.sections.map((label, index) => <a key={sectionIds[index]} href={`#${sectionIds[index]}`}>
          <span>{String(index + 1).padStart(2, '0')}</span>{label}<ArrowDown size={13} aria-hidden="true" />
        </a>)}
      </nav>

      <section id={sectionIds[0]} className={styles.section} aria-labelledby="basis-heading">
        <SectionLabel index={0} label={c.sections[0]} />
        <div>
          <h2 id="basis-heading" className={styles.heading}>{c.basisTitle}</h2>
          <div className={styles.body}>{c.basisParagraphs.map(text => <p key={text}>{text}</p>)}</div>
          <p className={styles.principle}><Equal size={24} aria-hidden="true" />{c.principle}</p>
        </div>
      </section>

      <section id={sectionIds[1]} className={styles.wideSection} aria-labelledby="comparison-heading">
        <div className={styles.tableHeader}>
          <SectionLabel index={1} label={c.sections[1]} />
          <div className={styles.tableIntro}>
            <h2 id="comparison-heading" className={styles.heading}>{c.tableTitle}</h2>
            <p className={styles.body}>{c.tableIntro}</p>
          </div>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <caption>{c.tableCaption}</caption>
            <thead><tr>{c.columns.map(column => <th scope="col" key={column}>{column}</th>)}</tr></thead>
            <tbody>{c.rows.map(row => <tr key={row.check}>
              <th scope="row">{row.check}</th>
              <td data-label={c.columns[1]}>{row.why}</td>
              <td data-label={c.columns[2]}>{row.question}</td>
            </tr>)}</tbody>
          </table>
        </div>
      </section>

      <section id={sectionIds[2]} className={styles.section} aria-labelledby="warranty-heading">
        <SectionLabel index={2} label={c.sections[2]} />
        <div>
          <h2 id="warranty-heading" className={styles.heading}>{c.warrantyTitle}</h2>
          <p className={styles.body}>{c.warrantyIntro}</p>
          <div className={styles.warranty}>{c.warranties.map(item => <div className={styles.warrantyItem} key={item.title}>
            <h3>{item.title}</h3><p>{item.text}</p>
          </div>)}</div>
          <p className={styles.callout}>{c.warrantyNote}</p>
        </div>
      </section>

      <section id={sectionIds[3]} className={styles.section} aria-labelledby="warning-heading">
        <SectionLabel index={3} label={c.sections[3]} />
        <div>
          <h2 id="warning-heading" className={styles.heading}>{c.warningTitle}</h2>
          <p className={styles.body}>{c.warningIntro}</p>
          <ul className={styles.warningList}>{c.warnings.map(text => <li key={text}>
            <TriangleAlert size={18} aria-hidden="true" /><span>{text}</span>
          </li>)}</ul>
        </div>
      </section>

      <section id={sectionIds[4]} className={styles.section} aria-labelledby="checklist-heading">
        <SectionLabel index={4} label={c.sections[4]} />
        <div>
          <h2 id="checklist-heading" className={styles.heading}>{c.checklistTitle}</h2>
          <p className={styles.body}>{c.checklistIntro}</p>
          <div className={styles.checklist}>{c.checklist.map((text, index) => <label className={styles.checkItem} key={text} htmlFor={`guide-check-${index}`}>
            <input type="checkbox" id={`guide-check-${index}`} /><span>{text}</span>
          </label>)}</div>
          <p className={styles.checkHint}>{c.checklistHint}</p>
        </div>
      </section>

      <aside className={styles.cta} aria-labelledby="guide-cta-heading">
        <div><h2 className={styles.heading} id="guide-cta-heading">{c.ctaTitle}</h2><p>{c.ctaText}</p></div>
        <div className={styles.ctaActions}>
          <Link href={routes.quote} className={styles.button}>{c.quoteAction}<ArrowRight size={19} aria-hidden="true" /></Link>
          <Link href={routes.service} className={styles.processLink}>{c.processAction}<ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </aside>
      <p className={styles.disclaimer}>{c.disclaimer}</p>
    </div>
  </article>;
}
