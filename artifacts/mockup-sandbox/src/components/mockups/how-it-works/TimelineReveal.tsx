import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Clock3, FileText, ShieldCheck, SlidersHorizontal, SunMedium, UsersRound, X } from "lucide-react";

type Step = {
  number: string;
  title: string;
  description: string;
  signal: string;
  detail: string;
  icon: typeof FileText;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Formular ausfüllen",
    description: "Beantworte ein paar Fragen zu deinem Zuhause – in nur 2 Minuten und völlig kostenlos.",
    signal: "2 Minuten",
    detail: "Keine Vorbereitung nötig.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Angebote vergleichen",
    description: "Wir prüfen deine Angaben und schicken dir bis zu 3 passende Offerten von zertifizierten Installateuren.",
    signal: "Bis zu 3 Offerten",
    detail: "Transparent aufbereitet.",
    icon: SlidersHorizontal,
  },
  {
    number: "03",
    title: "Installateur wählen",
    description: "Vergleiche reale Preise, Leistungen und Bewertungen. Du entscheidest in deinem Tempo.",
    signal: "Zertifizierte Installateure",
    detail: "Ohne Verkaufsdruck.",
    icon: ShieldCheck,
  },
];

export function TimelineReveal() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState<number[]>([]);
  const [showInfo, setShowInfo] = useState(false);
  const itemRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const index = Number((visible.target as HTMLElement).dataset.index);
          if (!Number.isNaN(index)) {
            setActive(index);
            setVisible((current) => current.includes(index) ? current : [...current, index]);
          }
        }
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.15, 0.45, 0.8] },
    );
    itemRefs.current.forEach((item) => item && observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const jumpTo = (index: number) => {
    itemRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[#f7f7f5] px-5 py-20 text-[#0d1117] sm:px-8 lg:px-14 lg:py-28">
      <style>{`
        .timeline-reveal-item { opacity: 0; transform: translateY(28px); transition: opacity 700ms cubic-bezier(.22,1,.36,1), transform 700ms cubic-bezier(.22,1,.36,1); }
        .timeline-reveal-item.is-visible { opacity: 1; transform: translateY(0); }
        @media (prefers-reduced-motion: reduce) {
          .timeline-reveal-item { opacity: 1; transform: none; transition: none; }
          html { scroll-behavior: auto !important; }
        }
      `}</style>
      <div className="pointer-events-none absolute -right-28 -top-24 h-96 w-96 rounded-full bg-[#f97316]/[.07] blur-3xl" />
      <div className="mx-auto max-w-6xl">
        <header className="mb-16 max-w-3xl lg:mb-24">
          <div className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.22em] text-[#d4af37]">
            <span className="h-px w-9 bg-[#d4af37]" /> Solar. Einfach. Vergleichen.
          </div>
          <h2 className="text-balance text-5xl font-black leading-[.95] tracking-[-.06em] sm:text-6xl lg:text-8xl">
            So <span className="text-[#f97316]">funktioniert&apos;s.</span>
          </h2>
          <p className="mt-7 max-w-xl text-base leading-7 text-[#5c6470] sm:text-lg">
            Drei klare Schritte, ein gutes Gefühl: PVPro.ch bringt dich ohne Umwege zum passenden Angebot.
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-[180px_1fr] lg:gap-16">
          <nav aria-label="Timeline-Navigation" className="hidden lg:block">
            <div className="sticky top-12">
              <p className="mb-6 text-[10px] font-bold uppercase tracking-[.2em] text-[#92989b]">Dein Weg</p>
              <div className="relative pl-5">
                <span className="absolute bottom-2 left-[3px] top-2 w-px bg-[#dedfd9]" />
                <span className="absolute left-[3px] top-2 w-px bg-[#f97316] transition-[height] duration-700" style={{ height: `${(active / 2) * 100}%` }} />
                <div className="space-y-8">
                  {steps.map((step, index) => (
                    <button key={step.number} type="button" onClick={() => jumpTo(index)} className="group relative flex items-center gap-3 text-left">
                      <span className={`absolute -left-[21px] grid h-2 w-2 rounded-full transition-all duration-500 ${active === index ? "scale-[1.8] bg-[#f97316] ring-4 ring-[#f97316]/15" : "bg-[#c9ccc8]"}`} />
                      <span className={`font-mono text-xs transition-colors ${active === index ? "font-bold text-[#0d1117]" : "text-[#92989b] group-hover:text-[#0d1117]"}`}>{step.number}</span>
                      <span className={`text-sm transition-colors ${active === index ? "font-semibold" : "text-[#68717b]"}`}>{step.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <div className="relative">
            <div className="absolute bottom-16 left-[1.15rem] top-12 w-px bg-[#dedfd9] sm:left-[2.1rem] lg:left-[2.6rem]" />
            <div className="space-y-9 sm:space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <article
                    key={step.number}
                    ref={(node) => { itemRefs.current[index] = node; }}
                    data-index={index}
                    className={`timeline-reveal-item group relative pl-12 sm:pl-24 lg:pl-28 ${visible.includes(index) ? "is-visible" : ""}`}
                    style={{ transitionDelay: `${index * 90}ms` }}
                    onAnimationStart={() => undefined}
                  >
                    <span className={`absolute left-0 top-8 grid h-9 w-9 place-items-center rounded-full border-4 border-[#f7f7f5] transition-colors duration-500 sm:left-[1.05rem] lg:left-[1.55rem] ${active >= index ? "bg-[#f97316]" : "bg-[#d5d7d2]"}`}>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#fffefa]" />
                    </span>
                    <div className={`rounded-[2rem] border p-7 shadow-[0_18px_50px_rgba(13,17,23,.06)] transition-[border-color,transform,background-color] duration-500 sm:p-10 ${active === index ? "border-[#f97316]/30 bg-[#fffefa] sm:translate-x-2" : "border-[#e3e3df] bg-[#fffefa]/70"}`}>
                      <div className="mb-10 flex items-start justify-between">
                        <div className={`grid h-[4.5rem] w-[4.5rem] place-items-center rounded-full transition-colors duration-500 ${active === index ? "bg-[#f97316] text-[#fffefa]" : "bg-[#ecece7] text-[#68717b]"}`}><Icon strokeWidth={1.8} size={28} /></div>
                        <span className="font-mono text-xs font-bold tracking-[.18em] text-[#c4c8c9]">{step.number}</span>
                      </div>
                      <h3 className="text-3xl font-extrabold tracking-[-.045em] sm:text-4xl">{step.title}</h3>
                      <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#66707b] sm:text-base">{step.description}</p>
                      <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#ecece8] pt-6 text-xs font-bold">
                        <span className="flex items-center gap-2"><span className="grid h-5 w-5 place-items-center rounded-full bg-[#d4af37]"><Check size={13} strokeWidth={3} /></span>{step.signal}</span>
                        <span className="text-[#92989b]">{step.detail}</span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-[1.75rem] bg-[#0d1117] px-7 py-7 text-[#fffefa] sm:flex-row sm:items-center sm:px-10">
          <div>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-[#d4af37]"><SunMedium size={15} /> Bereit für deinen nächsten Schritt?</p>
            <p className="mt-2 text-lg font-semibold tracking-[-.02em] text-[#f5f2eb]">Finde heraus, was deine Dachfläche möglich macht.</p>
          </div>
          <button type="button" onClick={() => setShowInfo(true)} className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#f97316] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#ff8837] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 focus:ring-offset-[#0d1117]">Jetzt starten <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></button>
        </div>
        <button type="button" onClick={() => setShowInfo(true)} className="mx-auto mt-7 flex items-center gap-2 text-xs font-semibold text-[#68717b] underline decoration-[#d4af37] underline-offset-4 hover:text-[#0d1117]"><UsersRound size={14} /> Was passiert mit meinen Daten?</button>
      </div>

      {showInfo && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-[#0d1117]/60 p-5 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="timeline-reveal-dialog">
          <div className="relative w-full max-w-md rounded-[2rem] bg-[#fffefa] p-8 shadow-2xl sm:p-10">
            <button type="button" aria-label="Dialog schliessen" onClick={() => setShowInfo(false)} className="absolute right-6 top-6 rounded-full p-2 text-[#68717b] hover:bg-[#f0f0ec] hover:text-[#0d1117]"><X size={18} /></button>
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#d4af37]/20 text-[#0d1117]"><Clock3 size={23} /></div>
            <h3 id="timeline-reveal-dialog" className="text-2xl font-black tracking-[-.04em]">In 2 Minuten loslegen.</h3>
            <p className="mt-3 text-sm leading-6 text-[#66707b]">Deine Angaben werden vertraulich behandelt und nur genutzt, um passende Schweizer Installateure zu finden. Keine versteckten Kosten, kein Abo, kein Verkaufsdruck.</p>
            <button type="button" onClick={() => setShowInfo(false)} className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#f97316] px-5 py-3.5 text-sm font-bold text-white hover:bg-[#ff8837]">Formular öffnen <ArrowRight size={17} /></button>
          </div>
        </div>
      )}
    </section>
  );
}

export default TimelineReveal;