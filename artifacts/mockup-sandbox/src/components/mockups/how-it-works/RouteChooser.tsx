import { useState } from "react";

type Route = {
  id: string;
  number: string;
  label: string;
  title: string;
  body: string;
  proof: string;
  action: string;
  tint: string;
};

const routes: Route[] = [
  {
    id: "brief",
    number: "01",
    label: "Start",
    title: "Ihre Situation in 2 Minuten",
    body: "Ein kurzer, intelligenter Fragebogen erfasst Dach, Verbrauch und Ihre Wünsche. Ohne Fachbegriffe, ohne Verkaufsdruck.",
    proof: "Kostenlos · unverbindlich · sicher",
    action: "Fragebogen starten",
    tint: "#e8c85a",
  },
  {
    id: "match",
    number: "02",
    label: "Auswahl",
    title: "Drei passende Partner",
    body: "Wir prüfen regionale Fachbetriebe und schicken Ihnen nur Offerten, die wirklich zu Ihrem Dach und Budget passen.",
    proof: "Geprüfte Schweizer Installateure",
    action: "So wählen wir aus",
    tint: "#f28a4b",
  },
  {
    id: "decide",
    number: "03",
    label: "Entscheidung",
    title: "Sie behalten das letzte Wort",
    body: "Preise, Leistungen und Bewertungen nebeneinander. Sie vergleichen in Ruhe und entscheiden, wer Ihr Dach elektrisiert.",
    proof: "Transparent · regional · persönlich",
    action: "Angebote ansehen",
    tint: "#e8c85a",
  },
];

function MiniIcon({ id }: { id: string }) {
  if (id === "brief") {
    return <svg viewBox="0 0 32 32" aria-hidden="true" className="h-6 w-6" fill="none"><path d="M8 5.5h11l5 5v16H8z" stroke="currentColor" strokeWidth="1.8" /><path d="M18.5 5.5v6h5.5M12 17h8M12 21h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>;
  }
  if (id === "match") {
    return <svg viewBox="0 0 32 32" aria-hidden="true" className="h-6 w-6" fill="none"><rect x="5" y="7" width="22" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.8" /><path d="M10 12h12M10 16h7M10 20h9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>;
  }
  return <svg viewBox="0 0 32 32" aria-hidden="true" className="h-6 w-6" fill="none"><circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.8" /><path d="m10.5 16 3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function RouteChooser() {
  const [active, setActive] = useState("brief");
  const current = routes.find((route) => route.id === active) ?? routes[0];

  return (
    <section className="relative w-full overflow-hidden bg-[#f4f1e9] text-[#131c24]" aria-labelledby="route-title">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes route-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .route-in { animation: route-in .42s cubic-bezier(.2,.75,.25,1) both; }
        @media (prefers-reduced-motion: reduce) { .route-in { animation: none; } }
      ` }} />
      <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
        <header className="mb-12 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.24em] text-[#e66f2f]">
              <span className="h-px w-10 bg-[#e66f2f]" /> So funktioniert&apos;s
            </div>
            <h2 id="route-title" className="max-w-4xl text-[clamp(3rem,7vw,6.8rem)] font-black leading-[.87] tracking-[-.075em]">
              Ihr Weg zur <span className="text-[#e66f2f]">Sonne.</span>
            </h2>
          </div>
          <p className="border-l-2 border-[#d4af37] pl-5 text-[17px] leading-relaxed text-[#596168]">
            Drei klare Etappen. Sie sehen jederzeit, was passiert — und entscheiden selbst, wie schnell es weitergeht.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[minmax(280px,390px)_1fr] lg:gap-16">
          <nav aria-label="Etappen auswählen" className="self-start border-t-2 border-[#131c24]">
            {routes.map((route) => {
              const selected = route.id === active;
              return (
                <button
                  key={route.id}
                  type="button"
                  aria-current={selected ? "step" : undefined}
                  onClick={() => setActive(route.id)}
                  className={`group flex w-full items-center gap-4 border-b border-[#b7b4ab] py-6 text-left transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#e66f2f] ${selected ? "bg-[#131c24] px-4 text-[#f8f5ed]" : "text-[#596168] hover:bg-[#eae6db]"}`}
                >
                  <span className={`text-[13px] font-bold tracking-[.14em] ${selected ? "text-[#e8c85a]" : "text-[#e66f2f]"}`}>{route.number}</span>
                  <span className="flex-1">
                    <span className={`mb-1 block text-[10px] font-bold uppercase tracking-[.2em] ${selected ? "text-[#b8c0c5]" : "text-[#8a8e8e]"}`}>{route.label}</span>
                    <span className={`block text-[18px] font-bold ${selected ? "text-[#f8f5ed]" : "text-[#131c24]"}`}>{route.title}</span>
                  </span>
                  <span className={`text-2xl transition-transform ${selected ? "translate-x-0 text-[#e8c85a]" : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`}>→</span>
                </button>
              );
            })}
            <p className="pt-5 text-[11px] font-bold uppercase tracking-[.14em] text-[#858985]">Klicken, um weiterzulesen</p>
          </nav>

          <div className="relative min-h-[390px] overflow-hidden bg-[#fffdf9] p-7 sm:p-12 lg:p-16">
            <div className="absolute right-0 top-0 h-32 w-32" style={{ background: current.tint, opacity: .9, clipPath: "polygon(100% 0, 100% 100%, 0 0)" }} />
            <div className="route-in relative z-10" key={current.id}>
              <div className="mb-14 flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#131c24] text-[#e8c85a]"><MiniIcon id={current.id} /></div>
                <span className="text-[clamp(5rem,12vw,9rem)] font-extralight leading-[.7] tracking-[-.13em]" style={{ color: `${current.tint}70` }}>{current.number}</span>
              </div>
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[.2em]" style={{ color: current.id === "match" ? "#e66f2f" : "#ad8b14" }}>{current.label} · Etappe {current.number}</p>
              <h3 className="mb-5 max-w-xl text-[clamp(2.2rem,4.5vw,4.2rem)] font-black leading-[.92] tracking-[-.06em]">{current.title}</h3>
              <p className="mb-8 max-w-xl text-[18px] leading-[1.55] text-[#596168]">{current.body}</p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                <button type="button" onClick={() => window.dispatchEvent(new CustomEvent("pvpro:start-quote"))} className="group inline-flex items-center gap-3 bg-[#e66f2f] px-5 py-3 text-[12px] font-bold uppercase tracking-[.12em] text-[#fffdf9] transition-colors hover:bg-[#131c24] focus:outline-none focus:ring-4 focus:ring-[#e66f2f]/30">
                  {current.action}<span className="text-lg transition-transform group-hover:translate-x-1">→</span>
                </button>
                <span className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[.1em]"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#e8c85a] text-[10px]">✓</span>{current.proof}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RouteChooser;