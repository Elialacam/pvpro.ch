'use client';

import { useState } from 'react';
import { Star, Check, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useLocale } from '@/lib/LocaleContext';

const reviews = [
  {
    name: 'Markus B., Wil SG',
    kWp: '30 kWp',
    quote: 'Kein einziger Werbeanruf – genau das hatte ich befürchtet.',
    detail: 'Bei so einem Vergleichsportal rechnet man ja fast damit, dass danach das Telefon nicht mehr stillsteht. Bei mir kam nichts dergleichen. Ich habe die drei Offerten per Mail bekommen und konnte in Ruhe schauen, ohne dass mich jemand bedrängt hat.',
    photo: '/images/projects/project1.png',
    location: 'Gewerbegebäude, Wil',
  },
  {
    name: 'Sandra K., Bülach ZH',
    kWp: '13 kWp',
    quote: 'Ich habe auf den Haken gewartet – es gab keinen.',
    detail: 'Ehrlich gesagt dachte ich, irgendwo kommt dann noch eine Rechnung oder eine versteckte Gebühr. Nichts davon. Der Vergleich war wirklich gratis, und die Offerten kamen direkt von den Installateuren, ohne Zwischenkosten.',
    photo: '/images/projects/project2.png',
    location: 'Einfamilienhaus, Bülach',
  },
  {
    name: 'Peter H., Chur GR',
    kWp: '25 kWp',
    quote: 'Kein Billiganbieter, sondern ein Fachbetrieb aus der Region.',
    detail: 'Meine Sorge war, dass ich an irgendeine anonyme Firma gerate. Stattdessen kam die Offerte von einem Betrieb aus dem Nachbarort, den sogar mein Nachbar schon kannte. Die Anlage läuft jetzt seit dem Sommer einwandfrei.',
    photo: '/images/projects/project3.png',
    location: 'Grossanlage, Chur',
  },
  {
    name: 'Nadia F., Frauenfeld TG',
    kWp: '12 kWp',
    quote: 'Wirklich drei Offerten – und ich konnte selber vergleichen.',
    detail: 'Ich hatte erwartet, dass man mich einfach an eine einzige Firma weiterreicht. Es waren tatsächlich drei unabhängige Angebote mit unterschiedlichen Preisen. Erst dadurch habe ich gemerkt, wie gross die Unterschiede sein können.',
    photo: '/images/projects/project4.jpg',
    location: 'Wohnhaus, Ticino',
  },
  {
    name: 'Thomas R., Olten SO',
    kWp: '13 kWp',
    quote: 'War skeptisch gegenüber Vergleichsportalen – am Ende über 4\'000 Franken gespart.',
    detail: 'Von solchen Seiten halte ich normalerweise wenig. Aber die günstigste der drei Offerten lag deutlich unter dem, was mir eine Firma vorher direkt angeboten hatte. Rund 4\'000 Franken Unterschied für praktisch dieselbe Anlage.',
    photo: '/images/projects/project5.jpg',
    location: 'Flachdach, Olten',
  },
  {
    name: 'Claudia W., Luzern',
    kWp: '20 kWp',
    quote: 'In der Mittagspause ausgefüllt, am nächsten Tag die Offerten gehabt.',
    detail: 'Ich hatte mit viel Aufwand gerechnet, Formulare, Rückfragen, das ganze Theater. War aber in ein paar Minuten erledigt. Einzig eine Offerte kam erst zwei Tage später, aber das war völlig okay.',
    photo: '/images/projects/project6.jpg',
    photoPosition: '72% 50%',
    location: 'Mehrfamilienhaus, Luzern',
  },
];

const sectionText: Record<string, { label: string; heading: string; sub: string }> = {
  de: { label: 'Kundenstimmen', heading: 'Was unsere Kunden sagen', sub: 'Echte Erfahrungen. Echte Anlagen. Fahren Sie über eine Karte.' },
  fr: { label: 'Avis clients',  heading: 'Ce que disent nos clients', sub: 'Expériences réelles. Installations réelles. Survolez une carte.' },
  en: { label: 'Customer reviews', heading: 'What our customers say', sub: 'Real experiences. Real installations. Hover over a card.' },
  it: { label: 'Recensioni clienti', heading: 'Cosa dicono i nostri clienti', sub: 'Esperienze reali. Impianti reali. Passa sopra una scheda.' },
};

const hoverHint: Record<string, string> = {
  de: 'Hover für Projekt ↗',
  fr: 'Survoler pour le projet ↗',
  en: 'Hover for project ↗',
  it: 'Passa per il progetto ↗',
};

const footerNote: Record<string, string> = {
  de: 'Auf der Karte zeigen wir Ihnen, was hinter der Bewertung steckt.',
  fr: 'Sur la carte, nous vous montrons ce qui se cache derrière l\'avis.',
  en: 'On the card we show you what\'s behind the review.',
  it: 'Sulla scheda ti mostriamo cosa c\'è dietro la recensione.',
};

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 von 5 Sternen">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={16} fill="#fcb210" strokeWidth={1.5} color="#fcb210" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const locale = useLocale();
  const t = sectionText[locale] || sectionText.de;
  const hint = hoverHint[locale] || hoverHint.de;
  const note = footerNote[locale] || footerNote.de;
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container-custom">
        {/* Section header */}
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffc812' }}>{t.label}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-2">{t.heading}</h2>
          {t.sub && <p className="text-gray-500 text-sm">{t.sub}</p>}
        </div>

        {/* Flip card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className={`flip-card-scene group h-[300px] cursor-pointer${flipped === index ? ' is-flipped' : ''}`}
              tabIndex={0}
              role="button"
              aria-label={`${review.name}: Projektfoto anzeigen`}
              onClick={() => setFlipped(flipped === index ? null : index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setFlipped(flipped === index ? null : index);
                }
              }}
            >
              <div className="flip-card-inner relative h-full w-full">
                {/* Front — review */}
                <article className="flip-card-face absolute inset-0 flex flex-col rounded-2xl border border-[#fcb210]/45 bg-white p-6 shadow-[0_14px_35px_rgba(83,70,35,0.08)] transition-shadow duration-300 group-hover:shadow-[0_20px_45px_rgba(252,178,16,0.18)]">
                  <div className="flex items-center justify-between mb-4">
                    <Stars />
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#fff8df] px-2.5 py-1 text-[10px] font-semibold text-gray-500">
                      <Check size={12} strokeWidth={3} color="#fcb210" /> Google-Rezension
                    </span>
                  </div>
                  <p className="text-lg font-bold leading-[1.25] text-gray-900">"{review.quote}"</p>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">{review.detail}</p>
                  <div className="mt-auto flex items-end justify-between border-t border-gray-100 pt-4">
                    <div>
                      <p className="text-sm font-bold text-gray-900">{review.name}</p>
                      <p className="mt-1 text-xs text-gray-400">Solar-Kunde</p>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-gray-400">{hint}</span>
                  </div>
                </article>

                {/* Back — project photo */}
                <article className="flip-card-face flip-card-back absolute inset-0 overflow-hidden rounded-2xl bg-gray-900 shadow-[0_20px_50px_rgba(83,70,35,0.2)]">
                  <Image
                    src={review.photo}
                    alt={`Solaranlage von ${review.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: (review as { photoPosition?: string }).photoPosition || '50% 50%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-900/10 to-transparent" />
                  <div className="absolute left-0 right-0 bottom-0 p-6 text-white">
                    <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold backdrop-blur-md">
                      <MapPin size={13} color="#ffc812" /> {review.location}
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-lg font-bold">{review.name}</p>
                        <p className="text-xs text-white/65">Realisierte Solaranlage</p>
                      </div>
                      {review.kWp && (
                        <span className="rounded-lg px-2.5 py-1.5 text-xs font-bold text-gray-900" style={{ background: '#ffc812' }}>
                          {review.kWp}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-7 text-center text-xs text-gray-400">{note}</p>
      </div>
    </section>
  );
}
