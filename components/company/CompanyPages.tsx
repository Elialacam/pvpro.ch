import Link from 'next/link';
import { ArrowRight, ChevronRight, Mail, MapPin, Phone, Check, Users, Wrench } from 'lucide-react';
import { companyContent, companyRoutes, type CompanyLocale } from './content';
import styles from './CompanyPages.module.css';

function Breadcrumb({ locale, type }: { locale: CompanyLocale; type: 'contact' | 'team' }) {
  const c = companyContent[locale];
  return <nav aria-label={c.home} className={styles.breadcrumb}>
    <Link href={locale === 'de' ? '/' : `/${locale}`}>{c.home}</Link>
    <ChevronRight size={14} aria-hidden="true" />
    <span aria-current="page">{c[type]}</span>
  </nav>;
}

export function ContactPage({ locale }: { locale: CompanyLocale }) {
  const c = companyContent[locale];
  const routes = companyRoutes[locale];
  return <div className={styles.page}><div className={styles.container}>
    <Breadcrumb locale={locale} type="contact" />
    <p className={styles.eyebrow}>PvPro.ch · {c.contact}</p>
    <h1 className={styles.title}>{c.contactTitle}</h1>
    <p className={styles.intro}>{c.contactIntro}</p>
    <div className={styles.contactGrid}>
      <section className={styles.desk} aria-labelledby="contact-desk">
        <h2 id="contact-desk" className={styles.heading}>{c.deskTitle}</h2>
        <p className={styles.text}>{c.deskText}</p>
        <div className={styles.channel}><Mail className={styles.icon} aria-hidden="true" /><div>
          <p className={styles.label}>{c.email}</p>
          <a className={styles.value} href="mailto:anfrage@pvpro.ch">anfrage@pvpro.ch</a>
        </div></div>
        <div className={styles.channel}><Phone className={styles.icon} aria-hidden="true" /><div>
          <p className={styles.label}>{c.phone}</p>
          <a className={styles.value} href="tel:+41762703887">+41 76 270 38 87</a>
        </div></div>
        <div className={styles.channel}><MapPin className={styles.icon} aria-hidden="true" /><div>
          <p className={styles.label}>{c.address}</p>
          <address className="not-italic font-semibold leading-relaxed">Via Rinaldo Simen 3<br />6900 Lugano, {c.country}</address>
        </div></div>
      </section>
      <div>
        <section className={styles.quote} aria-labelledby="contact-quotes">
          <h2 id="contact-quotes" className={styles.heading}>{c.quoteTitle}</h2>
          <p className={styles.text}>{c.quoteText}</p>
          <Link href={routes.quote} className={styles.button}>{c.quoteAction}<ArrowRight size={17} aria-hidden="true" /></Link>
        </section>
        <section className="px-2 pt-8">
          <h2 className="font-bold mb-3">{c.prepareTitle}</h2>
          <p className={styles.note}>{c.prepareText}</p>
        </section>
      </div>
    </div>
    <nav className={styles.resources} aria-label={c.about}>
      <Link className={styles.link} href={routes.faq}>{c.faq}<ArrowRight size={16} aria-hidden="true" /></Link>
      <Link className={styles.link} href={routes.team}>{c.team}<ArrowRight size={16} aria-hidden="true" /></Link>
      <Link className={styles.link} href={routes.about}>{c.about}</Link>
      <Link className={styles.link} href={routes.legal}>{c.legal}</Link>
    </nav>
  </div></div>;
}

export function TeamPage({ locale }: { locale: CompanyLocale }) {
  const c = companyContent[locale];
  const routes = companyRoutes[locale];
  const roles = [
    { title: c.platformTitle, text: c.platformText, tasks: c.platformTasks, Icon: Users },
    { title: c.installerTitle, text: c.installerText, tasks: c.installerTasks, Icon: Wrench },
  ];
  return <div className={styles.page}><div className={styles.container}>
    <Breadcrumb locale={locale} type="team" />
    <header className={styles.teamHeader}>
      <p className={styles.eyebrow}>PvPro.ch · {c.team}</p>
      <h1 className={styles.title}>{c.teamTitle}</h1>
      <p className={styles.intro}>{c.teamIntro}</p>
    </header>
    <div className={styles.roles}>
      {roles.map(({ title, text, tasks, Icon }) => <section className={styles.role} key={title}>
        <Icon size={30} className="mb-5 text-[#976200]" aria-hidden="true" />
        <h2 className={styles.heading}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <ul className={styles.list}>{tasks.map(task => <li key={task}><Check size={18} className="mt-1 flex-shrink-0 text-[#976200]" aria-hidden="true" /><span>{task}</span></li>)}</ul>
      </section>)}
    </div>
    <section className={styles.support} aria-labelledby="team-support">
      <div><h2 id="team-support" className={styles.heading}>{c.supportTitle}</h2><p className={styles.text}>{c.supportIntro}</p></div>
      <div>{c.supportRows.map(row => <div key={row.title} className={styles.supportRow}>
        <h3>{row.title}</h3><p className={styles.text}>{row.text}</p>
        <Link href={routes[row.target]} className={styles.link}>{row.action}<ArrowRight size={16} aria-hidden="true" /></Link>
      </div>)}<p className={styles.note}>{c.decision}</p></div>
    </section>
    <aside className={styles.quote}><p className={styles.text}>{c.companyNote}</p><Link href={routes.about} className={`${styles.link} mt-4`}>{c.about}<ArrowRight size={16} aria-hidden="true" /></Link></aside>
  </div></div>;
}
