import { useState } from "react";

const reviews = [
  { name: "Markus B., Wil SG", kWp: "9,2 kWp", quote: "Kein einziger Werbeanruf – genau das hatte ich befürchtet.", detail: "Bei so einem Vergleichsportal rechnet man ja fast damit, dass danach das Telefon nicht mehr stillsteht. Bei mir kam nichts dergleichen. Ich habe die drei Offerten per Mail bekommen und konnte in Ruhe schauen, ohne dass mich jemand bedrängt hat.", photo: "/__mockup/images/projects/project1.png", location: "Gewerbegebäude, Wil" },
  { name: "Sandra K., Bülach ZH", kWp: null, quote: "Ich habe auf den Haken gewartet – es gab keinen.", detail: "Ehrlich gesagt dachte ich, irgendwo kommt dann noch eine Rechnung oder eine versteckte Gebühr. Nichts davon. Der Vergleich war wirklich gratis, und die Offerten kamen direkt von den Installateuren, ohne Zwischenkosten.", photo: "/__mockup/images/projects/project2.png", location: "Einfamilienhaus, Bülach" },
  { name: "Peter H., Chur GR", kWp: "11 kWp", quote: "Kein Billiganbieter, sondern ein Fachbetrieb aus der Region.", detail: "Meine Sorge war, dass ich an irgendeine anonyme Firma gerate. Stattdessen kam die Offerte von einem Betrieb aus dem Nachbarort, den sogar mein Nachbar schon kannte. Die Anlage läuft jetzt seit dem Sommer einwandfrei.", photo: "/__mockup/images/projects/project3.png", location: "Grossanlage, Chur" },
  { name: "Nadia F., Frauenfeld TG", kWp: null, quote: "Wirklich drei Offerten – und ich konnte selber vergleichen.", detail: "Ich hatte erwartet, dass man mich einfach an eine einzige Firma weiterreicht. Es waren tatsächlich drei unabhängige Angebote mit unterschiedlichen Preisen. Erst dadurch habe ich gemerkt, wie gross die Unterschiede sein können.", photo: "/__mockup/images/projects/project4.jpg", location: "Wohnhaus, Ticino" },
  { name: "Thomas R., Olten SO", kWp: "8,5 kWp", quote: "War skeptisch gegenüber Vergleichsportalen – am Ende über 4'000 Franken gespart.", detail: "Von solchen Seiten halte ich normalerweise wenig. Aber die günstigste der drei Offerten lag deutlich unter dem, was mir eine Firma vorher direkt angeboten hatte. Rund 4'000 Franken Unterschied für praktisch dieselbe Anlage.", photo: "/__mockup/images/projects/project5.jpg", location: "Flachdach, Olten" },
  { name: "Claudia W., Luzern", kWp: null, quote: "In der Mittagspause ausgefüllt, am nächsten Tag die Offerten gehabt.", detail: "Ich hatte mit viel Aufwand gerechnet, Formulare, Rückfragen, das ganze Theater. War aber in ein paar Minuten erledigt. Einzig eine Offerte kam erst zwei Tage später, aber das war völlig okay.", photo: "/__mockup/images/projects/project6.jpg", location: "Mehrfamilienhaus, Luzern" },
];

export function V5GlassStack() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-10" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif", background: "radial-gradient(circle at 50% -20%, #fff8df 0%, #f5f6f7 40%, #edf0f2 100%)" }}>
      <div className="w-full max-w-6xl">
        <div className="mb-10">
          <p style={{color:'#ffc812'}} className="text-xs font-bold uppercase tracking-widest mb-2">Kundenstimmen</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-10" style={{ letterSpacing: "-.045em" }}>Was unsere Kunden sagen</h2>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span className="flex gap-1" aria-label="5 von 5 Sternen">{[1,2,3,4,5].map((star) => <span key={star} style={{color:'#fcb210', fontSize: 17}}>★</span>)}</span>
            <span>4,9 von 5 · 186 Google-Rezensionen</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-7 gap-y-8">
          {reviews.map((review, index) => {
            const isOpen = active === index;
            return (
              <article
                key={review.name}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(isOpen ? null : index)}
                className="group relative min-h-[310px] cursor-pointer"
                aria-label={`${review.name}: ${review.quote}`}
              >
                <div className="absolute inset-x-3 top-2 bottom-[-7px] rounded-[26px] border border-white/70 bg-white/30 shadow-sm transition-transform duration-500 ease-out group-hover:translate-y-1 group-hover:rotate-[1.2deg]" />
                <div className="absolute inset-x-1 top-1 bottom-[-3px] rounded-[26px] border border-white/80 bg-white/45 shadow-md transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:-rotate-[1deg]" />
                <div
                  className="relative h-full min-h-[310px] overflow-hidden rounded-[26px] border border-white/90 bg-white/70 p-7 shadow-[0_18px_45px_rgba(64,74,83,.12)] backdrop-blur-xl transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-2 group-hover:shadow-[0_28px_55px_rgba(64,74,83,.22)]"
                  style={{ transform: isOpen ? "translateY(-8px)" : undefined }}
                >
                  <div className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-700 group-hover:opacity-100" style={{backgroundImage: `url("${review.photo}")`}} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/20 to-slate-900/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                  <div className="relative z-10 flex h-full min-h-[256px] flex-col transition-colors duration-500 group-hover:text-white">
                    <div className="flex items-start justify-between gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/80 bg-emerald-50/80 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-emerald-700 transition-colors group-hover:border-white/30 group-hover:bg-white/15 group-hover:text-white">
                        <span className="text-xs">✓</span> Google-Rezension
                      </span>
                      {review.kWp && <span className="rounded-full bg-gray-100/80 px-2.5 py-1 text-[10px] font-semibold text-gray-500 transition-colors group-hover:bg-white/15 group-hover:text-white">{review.kWp}</span>}
                    </div>
                    <div className="mt-6 flex gap-1" aria-label="5 von 5 Sternen">{[1,2,3,4,5].map((star) => <span key={star} style={{color:'#fcb210', fontSize: 17}}>★</span>)}</div>
                    <h3 className="mt-4 max-w-[92%] text-[21px] font-semibold leading-[1.18] tracking-[-.025em]">{review.quote}</h3>
                    <p className="mt-3 max-w-[95%] text-[12px] leading-relaxed text-gray-500 transition-colors duration-500 group-hover:text-white/80">{review.detail}</p>
                    <div className="mt-auto flex items-end justify-between gap-3 pt-5">
                      <div><p className="text-sm font-semibold">{review.name}</p><p className="mt-1 text-[11px] text-gray-400 transition-colors group-hover:text-white/65">{review.location}</p></div>
                      <span className="text-[10px] uppercase tracking-widest text-gray-400 transition-colors group-hover:text-white/60">Installation ansehen ↗</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-10 text-center text-[11px] uppercase tracking-[.2em] text-gray-400">Bewege den Cursor über eine Karte · entdecke die Anlage</p>
      </div>
    </div>
  );
}
