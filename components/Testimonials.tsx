'use client';

import { Star } from 'lucide-react';

interface Review {
  name: string;
  location: string;
  avatar: string | null;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  {
    name: 'Thomas Weber',
    location: 'Zürich',
    avatar: '/images/testimonials/weber.png',
    rating: 5,
    text: 'Wir sind sehr zufrieden mit unserer neuen Solaranlage. PVPro hat uns perfekt beraten und mit einem lokalen Fachbetrieb verbunden. Alles lief reibungslos!',
  },
  {
    name: 'Sandra Müller',
    location: 'Bern',
    avatar: null,
    rating: 5,
    text: 'Super einfach und schnell. Drei Offerten innerhalb von zwei Tagen erhalten, alle sehr professionell. Habe mich für den besten Preis entschieden. Sehr empfehlenswert!',
  },
  {
    name: 'Andreas Brunner',
    location: 'Basel',
    avatar: '/images/testimonials/andreas.png',
    rating: 5,
    text: 'Der Prozess war so einfach! Formular ausgefüllt, drei Angebote erhalten, das beste gewählt. Jetzt produzieren wir unseren eigenen Strom.',
  },
  {
    name: 'Beat Keller',
    location: 'Luzern',
    avatar: null,
    rating: 5,
    text: 'Ich war skeptisch, aber PVPro hat mich wirklich überzeugt. Die vermittelten Installateure waren kompetent und pünktlich. Die Anlage läuft seit 6 Monaten perfekt.',
  },
  {
    name: 'Josef Berber',
    location: 'St. Gallen',
    avatar: '/images/testimonials/josef.png',
    rating: 5,
    text: 'Installation sauber gemacht, die Monteure waren sehr freundlich. Anlage produziert echt ordentlich, sogar mehr als erwartet. Bin sehr zufrieden!',
  },
  {
    name: 'Laura Meier',
    location: 'Winterthur',
    avatar: null,
    rating: 5,
    text: 'Kostenloser Service, geprüfte Installateure, keine Werbeanrufe — genau das wurde versprochen und genau das wurde geliefert. 5 Sterne!',
  },
  {
    name: 'Tobias Schneider',
    location: 'Genf',
    avatar: '/images/testimonials/tobias.png',
    rating: 5,
    text: 'Kompetent, zuverlässig und professionell. Transparente Beratung mit exzellentem Service. Die Solaranlage hat sich schon nach 8 Jahren amortisiert.',
  },
  {
    name: 'Hans Zimmermann',
    location: 'Thun',
    avatar: null,
    rating: 5,
    text: 'Habe über PVPro drei Offerten verglichen und dabei fast 4000 CHF gespart. Der lokale Installateur war top — schnelle Montage, alles erklärt.',
  },
  {
    name: 'Markus Frei',
    location: 'Chur',
    avatar: '/images/testimonials/mtb.png',
    rating: 5,
    text: 'Top Service, top Qualität. Die Monteure haben sehr sauber gearbeitet und alles verständlich erklärt. Kann ich nur weiterempfehlen!',
  },
  {
    name: 'Anna Huber',
    location: 'Zug',
    avatar: null,
    rating: 5,
    text: 'Sehr gute Erfahrung! PVPro hat mir geholfen, die beste Lösung für mein Dach zu finden. Seit der Installation spare ich monatlich über 120 CHF Stromkosten.',
  },
  {
    name: 'Daniel Ochs',
    location: 'Lugano',
    avatar: '/images/testimonials/octo.png',
    rating: 5,
    text: 'Ich bin total fasziniert von dem Service. Alles hat super geklappt, der Installateur war sehr professionell und die Anlage läuft einwandfrei.',
  },
  {
    name: 'Claudia Fischer',
    location: 'Olten',
    avatar: null,
    rating: 5,
    text: 'Einfach, schnell und kostenlos. Ich habe nie gedacht, dass es so unkompliziert sein kann. Drei Offerten in 24 Stunden — unglaublich!',
  },
];

const avatarColors = ['#1e3a5f', '#1d4ed8', '#15803d', '#7c3aed', '#b91c1c', '#0e7490', '#92400e', '#831843'];

function Avatar({ review }: { review: Review }) {
  const colorIndex = review.name.charCodeAt(0) % avatarColors.length;
  if (review.avatar) {
    return (
      <img
        src={review.avatar}
        alt={review.name}
        className="w-11 h-11 rounded-full object-cover ring-2 ring-white/20 flex-shrink-0"
      />
    );
  }
  return (
    <div
      className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-base flex-shrink-0 ring-2 ring-white/20"
      style={{ background: avatarColors[colorIndex] }}
    >
      {review.name.charAt(0)}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div
      className="flex-shrink-0 w-[340px] mx-3 rounded-2xl p-6 flex flex-col gap-4 group transition-all duration-300"
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.09)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* Quote + stars */}
      <div className="flex items-start justify-between">
        <span className="text-5xl leading-none font-serif text-[#F97316] opacity-70 select-none">"</span>
        <div className="flex gap-0.5 mt-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-[#F97316] text-[#F97316]" />
          ))}
        </div>
      </div>

      {/* Text */}
      <p className="text-[0.85rem] leading-relaxed text-gray-300 flex-1">{review.text}</p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-white/8">
        <Avatar review={review} />
        <div>
          <p className="text-sm font-bold text-white">{review.name}</p>
          <p className="text-xs text-gray-500">{review.location}</p>
        </div>
      </div>
    </div>
  );
}

const row1 = reviews.slice(0, 7);
const row2 = reviews.slice(5);

export default function Testimonials() {
  const doubled1 = [...row1, ...row1];
  const doubled2 = [...row2, ...row2];

  return (
    <section
      className="py-20 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0d1117 0%, #111827 60%, #0f172a 100%)' }}
    >
      {/* Header */}
      <div className="container-custom mb-14">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Kundenstimmen</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-2">
              Was unsere Kunden sagen
            </h2>
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
              Über 13'000 Haushalte haben bereits über PVPro ihre Solaranlage gefunden.
            </p>
          </div>

          {/* Ratings */}
          <div className="flex items-center gap-6">
            {/* Google */}
            <div className="flex flex-col items-center gap-1.5">
              <svg className="w-7 h-7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-[#F97316] text-[#F97316]" />)}
              </div>
              <span className="text-xs font-black text-white">4.8 / 5</span>
            </div>

            <div className="w-px h-10 bg-white/10" />

            {/* Trustpilot */}
            <div className="flex flex-col items-center gap-1.5">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="4" fill="#00B67A"/>
                <path d="M12 16.5l-4.5 2.7 1.2-5.1L4.5 10.8l5.2-.4L12 5.5l2.3 4.9 5.2.4-4.2 3.3 1.2 5.1L12 16.5z" fill="white"/>
              </svg>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-[#F97316] text-[#F97316]" />)}
              </div>
              <span className="text-xs font-black text-white">4.8 / 5</span>
            </div>
          </div>
        </div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative w-full mb-4">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
          style={{ background: 'linear-gradient(to right, #0d1117, transparent)' }} />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
          style={{ background: 'linear-gradient(to left, #0f172a, transparent)' }} />
        <div className="flex marquee-track" style={{ width: 'max-content' }}>
          {doubled1.map((review, i) => <ReviewCard key={i} review={review} />)}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative w-full">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
          style={{ background: 'linear-gradient(to right, #0d1117, transparent)' }} />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
          style={{ background: 'linear-gradient(to left, #0f172a, transparent)' }} />
        <div className="flex marquee-track-reverse" style={{ width: 'max-content' }}>
          {doubled2.map((review, i) => <ReviewCard key={i} review={review} />)}
        </div>
      </div>
    </section>
  );
}
