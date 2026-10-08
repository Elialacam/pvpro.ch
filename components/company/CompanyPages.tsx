import Link from 'next/link';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import type { CompanyLocale } from './content';
import { localizedCompanyContent, privacyRoutes } from './localizedContent';
import { CompanyHero } from './CompanyHero';
import { CompanyPhoto } from './CompanyPhoto';
import { CompanyQuote, CompanyResources, Paragraphs } from './shared';
import styles from './CompanyPages.module.css';

export { AboutPage } from './AboutPage';
export { CompanyFaqPage } from './CompanyFaqPage';

export function ContactPage({ locale }: { locale: CompanyLocale }) {
  const c = localizedCompanyContent[locale];
  const contact = c.contact;
  const channels = [
    {label:contact.general,href:'mailto:info@pvpro.ch',text:'info@pvpro.ch',Icon:Mail},
    {label:contact.requests,href:'mailto:anfrage@pvpro.ch',text:'anfrage@pvpro.ch',Icon:Mail},
    {label:contact.phone,href:'tel:+41762703887',text:'+41 76 270 38 87',Icon:Phone},
    {label:'WhatsApp',href:'https://wa.me/41762703887',text:'+41 76 270 38 87',Icon:MessageCircle}
  ];
  return <article className={styles.page}>
    <CompanyHero locale={locale} subject="contact" aside={<><strong>08:00–20:00</strong><p>{contact.daily}</p><p className="mt-4">{contact.mario}</p></>} />
    <div className={`${styles.container} ${styles.body}`}>
      <div className={styles.contactGrid}>
        <section className={styles.card}>
          <h2 className={styles.heading}>{c.labels.contact}</h2>
          <p className={styles.text}>NOBA Media Sagl – PvPro.ch</p>
          {channels.map(({label,href,text,Icon}) => <div className={styles.channel} key={href}>
            <Icon size={22} aria-hidden="true" /><div><p className={styles.label}>{label}</p><a className={styles.value} href={href}>{text}</a></div>
          </div>)}
          <p className={styles.text}>{contact.mario}</p>
          <a className={styles.link} href="https://www.pvpro.ch">www.pvpro.ch</a>
        </section>
        <div className={styles.stack}>
          <section className={styles.card}>
            <h2 className={styles.subheading}>{contact.availability}</h2>
            <p className={styles.hours}>{contact.daily}</p><p className={styles.text}>{contact.timing}</p>
          </section>
          <section className={styles.card}>
            <h2 className={styles.subheading}>{contact.languagesTitle}</h2>
            <p className={styles.text}>{contact.languagesIntro}</p>
            <ul className={styles.languages}>{contact.languages.map(language => <li key={language}><span>{language}</span></li>)}</ul>
          </section>
          <section className={styles.card}>
            <h2 className={styles.subheading}>{contact.existingTitle}</h2>
            <p className={styles.text}>{contact.existingText}</p>
            <Link href={privacyRoutes[locale]} className={styles.link}>{c.privacy}</Link>
          </section>
        </div>
      </div>
      <section className={`${styles.card} ${styles.split}`}>
        <div>
          <h2 className={styles.heading}>{contact.locationTitle}</h2>
          <div className={styles.channel}><MapPin size={22} aria-hidden="true" /><div><p className={styles.label}>{contact.address}</p>
            <address className={styles.address}>NOBA Media Sagl – PvPro.ch<br />Via Santi Pietro e Paolo 16<br />6953 Lugaggia<br />{contact.canton}, {contact.country}</address>
          </div></div>
        </div>
        <div><Paragraphs paragraphs={contact.location} /></div>
      </section>
      <section className={styles.card}>
        <h2 className={styles.heading}>{contact.partnerTitle}</h2>
        <p className={styles.text}>{contact.partnerText}</p>
        <a href="mailto:info@pvpro.ch" className={styles.link}>info@pvpro.ch</a>
      </section>
      <CompanyQuote locale={locale} />
      <CompanyResources locale={locale} current="contact" />
    </div>
  </article>;
}

export function TeamPage({ locale }: { locale: CompanyLocale }) {
  const c = localizedCompanyContent[locale];
  const photos = ['elia','mario','marcus'] as const;
  return <article className={styles.page}>
    <CompanyHero locale={locale} subject="team" aside={<><strong>{c.facts[2].value}</strong><p>{c.facts[2].label}</p><p className="mt-5">Elia Alacam<br />Mario Kopar<br />Marcus Tezel</p></>} />
    <div className={`${styles.container} ${styles.body}`}>
      <section className={styles.split}>
        <div><h2 className={styles.heading}>{c.team.title}</h2><p className={styles.text}>{c.team.intro}</p></div>
        <CompanyPhoto locale={locale} photo="team" />
      </section>
      {c.team.people.map((person,index) => <section className={styles.person} key={person.name} aria-labelledby={`person-${photos[index]}`}>
        <CompanyPhoto locale={locale} photo={photos[index]} />
        <div><h2 className={styles.heading} id={`person-${photos[index]}`}>{person.name}</h2><p className={styles.role}>{person.role}</p><Paragraphs paragraphs={person.bio} /></div>
      </section>)}
      <section className={styles.card}>
        <h2 className={styles.heading}>{c.team.responsibilitiesTitle}</h2>
        <p className={styles.text}>{c.team.responsibilities}</p>
      </section>
      <CompanyQuote locale={locale} />
      <CompanyResources locale={locale} current="team" />
    </div>
  </article>;
}
