import { MapPin, ArrowUpRight } from "lucide-react";
import "./V4SlideReveal_group.css";

const reviews = [
  { name: "Markus B., Wil SG", kWp: "9,2 kWp", quote: "Kein einziger Werbeanruf – genau das hatte ich befürchtet.", detail: "Bei so einem Vergleichsportal rechnet man ja fast damit, dass danach das Telefon nicht mehr stillsteht. Bei mir kam nichts dergleichen. Ich habe die drei Offerten per Mail bekommen und konnte in Ruhe schauen, ohne dass mich jemand bedrängt hat.", photo: "/__mockup/images/projects/project1.png", location: "Gewerbegebäude, Wil" },
  { name: "Sandra K., Bülach ZH", kWp: null, quote: "Ich habe auf den Haken gewartet – es gab keinen.", detail: "Ehrlich gesagt dachte ich, irgendwo kommt dann noch eine Rechnung oder eine versteckte Gebühr. Nichts davon. Der Vergleich war wirklich gratis, und die Offerten kamen direkt von den Installateuren, ohne Zwischenkosten.", photo: "/__mockup/images/projects/project2.png", location: "Einfamilienhaus, Bülach" },
  { name: "Peter H., Chur GR", kWp: "11 kWp", quote: "Kein Billiganbieter, sondern ein Fachbetrieb aus der Region.", detail: "Meine Sorge war, dass ich an irgendeine anonyme Firma gerate. Stattdessen kam die Offerte von einem Betrieb aus dem Nachbarort, den sogar mein Nachbar schon kannte. Die Anlage läuft jetzt seit dem Sommer einwandfrei.", photo: "/__mockup/images/projects/project3.png", location: "Grossanlage, Chur" },
  { name: "Nadia F., Frauenfeld TG", kWp: null, quote: "Wirklich drei Offerten – und ich konnte selber vergleichen.", detail: "Ich hatte erwartet, dass man mich einfach an eine einzige Firma weiterreicht. Es waren tatsächlich drei unabhängige Angebote mit unterschiedlichen Preisen. Erst dadurch habe ich gemerkt, wie gross die Unterschiede sein können.", photo: "/__mockup/images/projects/project4.jpg", location: "Wohnhaus, Ticino" },
  { name: "Thomas R., Olten SO", kWp: "8,5 kWp", quote: "War skeptisch gegenüber Vergleichsportalen – am Ende über 4'000 Franken gespart.", detail: "Von solchen Seiten halte ich normalerweise wenig. Aber die günstigste der drei Offerten lag deutlich unter dem, was mir eine Firma vorher direkt angeboten hatte. Rund 4'000 Franken Unterschied für praktisch dieselbe Anlage.", photo: "/__mockup/images/projects/project5.jpg", location: "Flachdach, Olten" },
  { name: "Claudia W., Luzern", kWp: null, quote: "In der Mittagspause ausgefüllt, am nächsten Tag die Offerten gehabt.", detail: "Ich hatte mit viel Aufwand gerechnet, Formulare, Rückfragen, das ganze Theater. War aber in ein paar Minuten erledigt. Einzig eine Offerte kam erst zwei Tage später, aber das war völlig okay.", photo: "/__mockup/images/projects/project6.jpg", location: "Mehrfamilienhaus, Luzern" },
];

export function V4SlideReveal() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-10" style={{ color: "#263331", fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
      <main className="w-full max-w-6xl">
        <header className="mb-10 pl-1">
          <p style={{ color: "#ffc812" }} className="text-xs font-bold uppercase tracking-widest mb-2">Kundenstimmen</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">Was unsere Kunden sagen</h2>
          <p className="text-sm text-gray-500 max-w-xl">Echte Erfahrungen. Echte Dächer. Bewege den Cursor über eine Karte und entdecke die Anlage dahinter.</p>
        </header>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {reviews.map((review, index) => (
            <article className="v4-reveal-card bg-white rounded-2xl border border-gray-200 min-h-[286px] shadow-sm" tabIndex={0} key={review.name}>
              <div className="v4-card-copy relative z-[1] flex h-full min-h-[286px] flex-col justify-between p-7">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1" aria-label="5 von 5 Sternen">
                      {Array.from({ length: 5 }).map((_, star) => <span key={star} style={{ color: "#fcb210" }} className="text-lg leading-none">★</span>)}
                    </div>
                    <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-amber-700">✓ Google-Rezension</span>
                  </div>
                  <p className="max-w-[75%] text-[21px] font-semibold leading-[1.2] tracking-[-.02em] text-gray-900">“{review.quote}”</p>
                  <p className="mt-4 max-w-[92%] text-xs leading-relaxed text-gray-500">{review.detail}</p>
                </div>
                <div className="mt-6 flex items-end justify-between">
                  <div><p className="text-sm font-bold text-gray-900">{review.name}</p><p className="mt-1 text-xs text-gray-400">{review.kWp ? `${review.kWp} · ` : ""}Solarprojekt</p></div>
                  <span className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-gray-400"><ArrowUpRight size={14} /> hover reveal</span>
                </div>
              </div>
              <div className="v4-curtain" aria-hidden="true">
                <div className="v4-photo" style={{ backgroundImage: `url(${review.photo})` }} />
                <div className="v4-edge" />
                <div className="v4-curtain-label">
                  <p className="flex items-center justify-end gap-1 text-xs font-semibold"><MapPin size={12} style={{ color: "#ffc812" }} /> {review.location}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[.18em] text-white/65">Projekt entdeckt</p>
                </div>
              </div>
              <div className="pointer-events-none absolute bottom-0 left-7 right-7 h-px bg-gray-100" />
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}