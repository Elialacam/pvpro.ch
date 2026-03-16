'use client';

import { Star } from 'lucide-react';

interface Review {
  name: string;
  avatar: string | null;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  {
    name: 'Thomas Weber',
    avatar: '/images/testimonials/weber.png',
    rating: 5,
    text: 'Wir sind sehr zufrieden mit unserer neuen Solaranlage. PVPro hat uns perfekt beraten und mit einem lokalen Fachbetrieb verbunden. Alles lief reibungslos!',
  },
  {
    name: 'Sandra Müller',
    avatar: null,
    rating: 5,
    text: 'Super einfach und schnell. Drei Offerten innerhalb von zwei Tagen erhalten, alle sehr professionell. Habe mich für den besten Preis entschieden. Sehr empfehlenswert!',
  },
  {
    name: 'Andreas Brunner',
    avatar: '/images/testimonials/andreas.png',
    rating: 5,
    text: 'Der Prozess war so einfach! Formular ausgefüllt, drei Angebote erhalten, das beste gewählt. Jetzt produzieren wir unseren eigenen Strom.',
  },
  {
    name: 'Beat Keller',
    avatar: null,
    rating: 5,
    text: 'Ich war skeptisch, aber PVPro hat mich wirklich überzeugt. Die vermittelten Installateure waren kompetent und pünktlich. Die Anlage läuft seit 6 Monaten perfekt.',
  },
  {
    name: 'Josef Berber',
    avatar: '/images/testimonials/josef.png',
    rating: 5,
    text: 'Installation sauber gemacht, die Monteure waren sehr freundlich. Anlage produziert echt ordentlich, sogar mehr als erwartet. Bin sehr zufrieden!',
  },
  {
    name: 'Laura Meier',
    avatar: null,
    rating: 5,
    text: 'Kostenloser Service, geprüfte Installateure, keine Werbeanrufe — genau das wurde versprochen und genau das wurde geliefert. 5 Sterne!',
  },
  {
    name: 'Tobias Schneider',
    avatar: '/images/testimonials/tobias.png',
    rating: 5,
    text: 'Kompetent, zuverlässig und professionell. Transparente Beratung mit exzellentem Service. Die Solaranlage hat sich schon nach 8 Jahren amortisiert.',
  },
  {
    name: 'Hans Zimmermann',
    avatar: null,
    rating: 5,
    text: 'Habe über PVPro drei Offerten verglichen und dabei fast 4000 CHF gespart. Der lokale Installateur war top — schnelle Montage, alles erklärt.',
  },
  {
    name: 'Markus Frei',
    avatar: '/images/testimonials/mtb.png',
    rating: 5,
    text: 'Top Service, top Qualität. Die Monteure haben sehr sauber gearbeitet und alles verständlich erklärt. Kann ich nur weiterempfehlen!',
  },
  {
    name: 'Anna Huber',
    avatar: null,
    rating: 5,
    text: 'Sehr gute Erfahrung! PVPro hat mir geholfen, die beste Lösung für mein Dach zu finden. Seit der Installation spare ich monatlich über 120 CHF Stromkosten.',
  },
  {
    name: 'Daniel Ochs',
    avatar: '/images/testimonials/octo.png',
    rating: 5,
    text: 'Ich bin total fasziniert von dem Service. Alles hat super geklappt, der Installateur war sehr professionell und die Anlage läuft einwandfrei.',
  },
  {
    name: 'Claudia Fischer',
    avatar: null,
    rating: 5,
    text: 'Einfach, schnell und kostenlos. Ich habe nie gedacht, dass es so unkompliziert sein kann. Drei Offerten in 24 Stunden — unglaublich!',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < count ? 'fill-[#F97316] text-[#F97316]' : 'fill-gray-200 text-gray-200'}`}
        />
      ))}
    </div>
  );
}

function Avatar({ review }: { review: Review }) {
  const colors = ['#1a2e4a', '#2563eb', '#16a34a', '#9333ea', '#dc2626', '#0891b2'];
  const colorIndex = review.name.charCodeAt(0) % colors.length;

  if (review.avatar) {
    return (
      <img
        src={review.avatar}
        alt={review.name}
        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
      />
    );
  }
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0"
      style={{ background: colors[colorIndex] }}
    >
      {review.name.charAt(0).toUpperCase()}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex-shrink-0 w-[300px] bg-white rounded-xl p-5 shadow-sm border border-gray-100 border-l-4 mx-3"
      style={{ borderLeftColor: '#F97316' }}>
      <div className="flex items-center gap-3 mb-3">
        <Avatar review={review} />
        <div>
          <p className="font-bold text-gray-900 text-sm">{review.name}</p>
          <StarRating count={review.rating} />
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
    </div>
  );
}

export default function Testimonials() {
  const doubled = [...reviews, ...reviews];

  return (
    <section className="py-14 bg-gray-50 overflow-hidden">
      {/* Stats header — EnergyBot style */}
      <div className="container-custom mb-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Left: big number */}
          <div>
            <p className="text-5xl font-black text-gray-900 leading-none">13'000+</p>
            <p className="text-gray-500 mt-1 text-base">Anfragen gestellt via PVPro</p>
          </div>

          {/* Right: platform ratings */}
          <div className="flex items-center gap-8">
            {/* Google */}
            <div className="flex flex-col items-center gap-1">
              <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F97316] text-[#F97316]" />
                ))}
              </div>
              <span className="text-sm font-bold text-gray-700">4.8</span>
            </div>

            {/* Trustpilot */}
            <div className="flex flex-col items-center gap-1">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="#00B67A"/>
                <path d="M12 16.5l-4.5 2.7 1.2-5.1L4.5 10.8l5.2-.4L12 5.5l2.3 4.9 5.2.4-4.2 3.3 1.2 5.1L12 16.5z" fill="white"/>
              </svg>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F97316] text-[#F97316]" />
                ))}
              </div>
              <span className="text-sm font-bold text-gray-700">4.8</span>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite marquee */}
      <div className="relative w-full">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 z-10"
          style={{ background: 'linear-gradient(to right, #f9fafb, transparent)' }} />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 z-10"
          style={{ background: 'linear-gradient(to left, #f9fafb, transparent)' }} />

        <div className="flex marquee-track" style={{ width: 'max-content' }}>
          {doubled.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
