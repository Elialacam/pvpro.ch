'use client';

import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useLocale } from '@/lib/LocaleContext';
import { Locale } from '@/lib/i18n';

// Review interface
interface Review {
  name: string;
  time: string;
  rating: number;
  text: string;
  verified: boolean;
}

// Reviews per locale
const reviewsContent: Record<Locale, {
  reviews: Review[];
  readMore: string;
  at: string;
}> = {
  de: {
    reviews: [
      {
        name: 'tores mohsen',
        time: 'vor 1 Monat',
        rating: 5,
        text: 'Kompetent, zuverlässig und professionell - ideal für Solarlösungen und erneuerbare Energien. Transparente Beratung mit exzellentem Service!',
        verified: true,
      },
      {
        name: 'Octo HD',
        time: 'vor 1 Monat',
        rating: 5,
        text: 'Ich bin total fasziniert von dem Service der hier geboten wird. Alles hat super geklappt.',
        verified: true,
      },
      {
        name: 'Mtb-marv',
        time: 'vor 2 Monaten',
        rating: 5,
        text: 'Top Service, top Qualität. Die Monteure haben sehr sauber gearbeitet und alles verständlich erklärt. Kann ich nur weiterempfehlen!',
        verified: true,
      },
      {
        name: 'Josef Berber',
        time: 'vor 3 Monaten',
        rating: 5,
        text: 'Installation sauber gemacht, Jungs waren freundlich. Anlage produziert echt ordentlich, sogar mehr als erwartet. Bin zufrieden!',
        verified: true,
      },
      {
        name: 'Familie Weber',
        time: 'vor 3 Monaten',
        rating: 5,
        text: 'Wir sind sehr zufrieden mit unserer neuen Solaranlage. PVPro hat uns perfekt beraten und mit einem lokalen Fachbetrieb verbunden.',
        verified: true,
      },
      {
        name: 'Andreas Brunner',
        time: 'vor 4 Monaten',
        rating: 5,
        text: 'Der Prozess war so einfach! Formular ausgefüllt, drei Angebote erhalten, das beste gewählt. Jetzt produzieren wir unseren eigenen Strom.',
        verified: true,
      },
    ],
    readMore: 'Mehr lesen',
    at: 'bei',
  },
  fr: {
    reviews: [
      {
        name: 'tores mohsen',
        time: 'il y a 1 mois',
        rating: 5,
        text: 'Compétent, fiable et professionnel - idéal pour les solutions solaires et les énergies renouvelables. Conseil transparent avec un excellent service!',
        verified: true,
      },
      {
        name: 'Octo HD',
        time: 'il y a 1 mois',
        rating: 5,
        text: 'Je suis totalement fasciné par le service offert ici. Tout s\'est très bien passé.',
        verified: true,
      },
      {
        name: 'Mtb-marv',
        time: 'il y a 2 mois',
        rating: 5,
        text: 'Service au top, qualité au top. Les monteurs ont fait un travail très propre et ont tout expliqué clairement. Je ne peux que recommander!',
        verified: true,
      },
      {
        name: 'Josef Berber',
        time: 'il y a 3 mois',
        rating: 5,
        text: 'Installation faite proprement, les gars étaient sympathiques. L\'installation produit vraiment bien, même plus que prévu. Je suis satisfait!',
        verified: true,
      },
      {
        name: 'Famille Weber',
        time: 'il y a 3 mois',
        rating: 5,
        text: 'Nous sommes très satisfaits de notre nouvelle installation solaire. PVPro nous a parfaitement conseillés et mis en contact avec un spécialiste local.',
        verified: true,
      },
      {
        name: 'Andreas Brunner',
        time: 'il y a 4 mois',
        rating: 5,
        text: 'Le processus était si simple! Formulaire rempli, trois offres reçues, la meilleure choisie. Maintenant nous produisons notre propre électricité.',
        verified: true,
      },
    ],
    readMore: 'Lire plus',
    at: 'chez',
  },
  en: {
    reviews: [
      {
        name: 'tores mohsen',
        time: '1 month ago',
        rating: 5,
        text: 'Competent, reliable and professional - ideal for solar solutions and renewable energies. Transparent advice with excellent service!',
        verified: true,
      },
      {
        name: 'Octo HD',
        time: '1 month ago',
        rating: 5,
        text: 'I am totally fascinated by the service offered here. Everything went great.',
        verified: true,
      },
      {
        name: 'Mtb-marv',
        time: '2 months ago',
        rating: 5,
        text: 'Top service, top quality. The installers did very clean work and explained everything clearly. I can only recommend!',
        verified: true,
      },
      {
        name: 'Josef Berber',
        time: '3 months ago',
        rating: 5,
        text: 'Installation done cleanly, the guys were friendly. System produces really well, even more than expected. I am satisfied!',
        verified: true,
      },
      {
        name: 'Weber Family',
        time: '3 months ago',
        rating: 5,
        text: 'We are very happy with our new solar system. PVPro advised us perfectly and connected us with a local specialist.',
        verified: true,
      },
      {
        name: 'Andreas Brunner',
        time: '4 months ago',
        rating: 5,
        text: 'The process was so easy! Filled out the form, received three offers, chose the best one. Now we produce our own electricity.',
        verified: true,
      },
    ],
    readMore: 'Read more',
    at: 'at',
  },
};

export default function Testimonials() {
  const locale = useLocale();
  const content = reviewsContent[locale];
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      const newPosition = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      scrollContainerRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
    }
  };

  const avgRating = (content.reviews.reduce((sum, r) => sum + r.rating, 0) / content.reviews.length).toFixed(1);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Google Rating Header */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span className="text-2xl font-bold text-gray-900">{avgRating}</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${i < Math.round(Number(avgRating)) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-gray-500">({content.reviews.length})</span>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          )}

          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {content.reviews.map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[300px] bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-100 flex items-center justify-center">
                    {index === 0 ? (
                      <img 
                        src="/images/testimonials/tobias.png" 
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    ) : index === 1 ? (
                      <img 
                        src="/images/testimonials/octo.png" 
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    ) : index === 3 ? (
                      <img 
                        src="/images/testimonials/josef.png" 
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold text-lg">
                        {review.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-gray-900">{review.name}</span>
                      {review.verified && (
                        <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <span>{review.time}</span>
                      <span>{content.at}</span>
                      <svg className="w-12 h-4" viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg">
                        <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
                        <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
                        <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
                        <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"/>
                        <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
                        <path d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z" fill="#4285F4"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 text-gray-300'}`}
                    />
                  ))}
                </div>

                <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                  {review.text}
                </p>

                <button className="text-blue-600 text-sm font-medium mt-2 hover:underline">
                  {content.readMore}
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {[0, 1, 2].map((dotIndex) => (
              <div
                key={dotIndex}
                className={`w-2 h-2 rounded-full transition-colors ${
                  dotIndex === 0 ? 'bg-gray-800' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
