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
      className="flex-shrink-0 w-[340px] mx-3 rounded-2xl p-6 flex flex-col gap-4"
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.09)',
      }}
    >
      <div className="flex items-start justify-between">
        <span className="text-5xl leading-none font-serif text-[#F97316] opacity-70 select-none">"</span>
        <div className="flex gap-0.5 mt-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-[#F97316] text-[#F97316]" />
          ))}
        </div>
      </div>
      <p className="text-[0.85rem] leading-relaxed text-gray-300 flex-1">{review.text}</p>
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

export default function Testimonials() {
  const doubled = [...reviews, ...reviews];

  return (
    <section
      className="py-20 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0d1117 0%, #111827 60%, #0f172a 100%)' }}
    >
      {/* Header */}
      <div className="container-custom mb-14">
        <div className="text-center">
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Kundenstimmen</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-2">
            Was unsere Kunden sagen
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Über 13'000 Haushalte haben bereits über PVPro ihre Solaranlage gefunden.
          </p>
        </div>
      </div>

      {/* Single row marquee */}
      <div className="relative w-full">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
          style={{ background: 'linear-gradient(to right, #0d1117, transparent)' }} />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
          style={{ background: 'linear-gradient(to left, #0f172a, transparent)' }} />
        <div className="flex marquee-track" style={{ width: 'max-content' }}>
          {doubled.map((review, i) => <ReviewCard key={i} review={review} />)}
        </div>
      </div>
    </section>
  );
}
