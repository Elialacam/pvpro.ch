import { Check, MapPin, Star } from "lucide-react";

const reviews = [
  { name: "Markus B., Wil SG", kWp: "9,2 kWp", quote: "Kein einziger Werbeanruf – genau das hatte ich befürchtet.", detail: "Bei so einem Vergleichsportal rechnet man ja fast damit, dass danach das Telefon nicht mehr stillsteht. Bei mir kam nichts dergleichen. Ich habe die drei Offerten per Mail bekommen und konnte in Ruhe schauen, ohne dass mich jemand bedrängt hat.", photo: "/__mockup/images/projects/project1.png", location: "Gewerbegebäude, Wil" },
  { name: "Sandra K., Bülach ZH", kWp: null, quote: "Ich habe auf den Haken gewartet – es gab keinen.", detail: "Ehrlich gesagt dachte ich, irgendwo kommt dann noch eine Rechnung oder eine versteckte Gebühr. Nichts davon. Der Vergleich war wirklich gratis, und die Offerten kamen direkt von den Installateuren, ohne Zwischenkosten.", photo: "/__mockup/images/projects/project2.png", location: "Einfamilienhaus, Bülach" },
  { name: "Peter H., Chur GR", kWp: "11 kWp", quote: "Kein Billiganbieter, sondern ein Fachbetrieb aus der Region.", detail: "Meine Sorge war, dass ich an irgendeine anonyme Firma gerate. Stattdessen kam die Offerte von einem Betrieb aus dem Nachbarort, den sogar mein Nachbar schon kannte. Die Anlage läuft jetzt seit dem Sommer einwandfrei.", photo: "/__mockup/images/projects/project3.png", location: "Grossanlage, Chur" },
  { name: "Nadia F., Frauenfeld TG", kWp: null, quote: "Wirklich drei Offerten – und ich konnte selber vergleichen.", detail: "Ich hatte erwartet, dass man mich einfach an eine einzige Firma weiterreicht. Es waren tatsächlich drei unabhängige Angebote mit unterschiedlichen Preisen. Erst dadurch habe ich gemerkt, wie gross die Unterschiede sein können.", photo: "/__mockup/images/projects/project4.jpg", location: "Wohnhaus, Ticino" },
  { name: "Thomas R., Olten SO", kWp: "8,5 kWp", quote: "War skeptisch gegenüber Vergleichsportalen – am Ende über 4'000 Franken gespart.", detail: "Von solchen Seiten halte ich normalerweise wenig. Aber die günstigste der drei Offerten lag deutlich unter dem, was mir eine Firma vorher direkt angeboten hatte. Rund 4'000 Franken Unterschied für praktisch dieselbe Anlage.", photo: "/__mockup/images/projects/project5.jpg", location: "Flachdach, Olten" },
  { name: "Claudia W., Luzern", kWp: null, quote: "In der Mittagspause ausgefüllt, am nächsten Tag die Offerten gehabt.", detail: "Ich hatte mit viel Aufwand gerechnet, Formulare, Rückfragen, das ganze Theater. War aber in ein paar Minuten erledigt. Einzig eine Offerte kam erst zwei Tage später, aber das war völlig okay.", photo: "/__mockup/images/projects/project6.jpg", location: "Mehrfamilienhaus, Luzern" },
];

export function V3MosaicUnveil() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-10">
      <div className="w-full max-w-6xl">
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p style={{color:'#ffc812'}} className="text-xs font-bold uppercase tracking-widest mb-2">Kundenstimmen</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-10">Was unsere Kunden sagen</h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-gray-500 md:mb-10">
            Echte Projekte. Echte Erfahrungen.<br />Bewege den Cursor über ein Bild.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[260px] gap-3">
          {reviews.map((review, index) => (
            <article
              key={review.name}
              className={[
                "group relative overflow-hidden rounded-[3px] bg-gray-900 shadow-sm transition-all duration-500 hover:z-10 hover:shadow-2xl hover:shadow-yellow-500/20",
                index === 0 ? "md:col-span-5 md:row-span-2" : "",
                index === 1 ? "md:col-span-7" : "",
                index === 2 ? "md:col-span-4" : "",
                index === 3 ? "md:col-span-3" : "",
                index === 4 ? "md:col-span-5" : "",
                index === 5 ? "md:col-span-7" : "",
              ].join(" ")}
            >
              <img
                src={review.photo}
                alt={`${review.location} – Kundenprojekt`}
                className="absolute inset-0 h-full w-full object-cover saturate-[.45] blur-[1.5px] scale-[1.04] opacity-75 transition-all duration-700 ease-out group-hover:scale-100 group-hover:blur-0 group-hover:saturate-100 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/25 to-transparent transition-opacity duration-500 group-hover:opacity-70" />
              <div className="absolute left-4 top-4 flex items-center gap-2">
                <span className="rounded-full bg-gray-950/45 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-white/80 backdrop-blur-sm">
                  {review.location}
                </span>
                {review.kWp && <span className="hidden rounded-full bg-[#ffc812] px-2.5 py-1 text-[10px] font-bold text-gray-900 sm:block">{review.kWp}</span>}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-1">
                <div className="mb-3 flex items-center gap-1" aria-label="5 von 5 Sternen">
                  {Array.from({ length: 5 }).map((_, starIndex) => <Star key={starIndex} size={13} fill="#fcb210" color="#fcb210" strokeWidth={1.5} />)}
                </div>
                <h3 className="max-w-xl text-xl font-semibold leading-snug text-white md:text-2xl">“{review.quote}”</h3>
                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-white/75">
                  <span>{review.name}</span>
                  <span className="h-1 w-1 rounded-full bg-[#fcb210]" />
                  <span className="inline-flex items-center gap-1 text-white/65"><Check size={12} strokeWidth={3} /> Google-Rezension</span>
                </div>
              </div>
              <div className="absolute inset-x-3 bottom-3 translate-y-[120%] rounded-[2px] border border-[#ffc812]/70 bg-gray-950/90 p-4 opacity-0 backdrop-blur-md transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-y-0 group-hover:opacity-100">
                <div className="mb-2 flex items-center gap-1 text-[#ffc812]">
                  <MapPin size={12} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{review.location}</span>
                </div>
                <p className="text-xs leading-relaxed text-white/80">{review.detail}</p>
              </div>
              <div className="pointer-events-none absolute inset-0 border border-white/10 transition-colors duration-500 group-hover:border-[#fcb210]" />
            </article>
          ))}
        </div>
        <p className="mt-5 text-center text-[10px] uppercase tracking-[.22em] text-gray-400">Fotos aus realisierten PV-Projekten · unverfälschte Erfahrungsberichte</p>
      </div>
    </div>
  );
}
