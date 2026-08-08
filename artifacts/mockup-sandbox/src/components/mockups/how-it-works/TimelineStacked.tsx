import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Clock3,
  FileText,
  ShieldCheck,
  SlidersHorizontal,
  SunMedium,
  UsersRound,
  X,
} from "lucide-react";

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
    detail: "Keine Vorbereitung nötig. Wir fragen nur, was für eine passende Solarlösung wirklich zählt.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Angebote vergleichen",
    description: "Wir prüfen deine Angaben und schicken dir bis zu 3 passende Offerten von zertifizierten Installateuren.",
    signal: "Bis zu 3 Offerten",
    detail: "Transparent aufbereitet und direkt vergleichbar – damit du nicht Äpfel mit Birnen vergleichst.",
    icon: SlidersHorizontal,
  },
  {
    number: "03",
    title: "Installateur wählen",
    description: "Vergleiche reale Preise, Leistungen und Bewertungen. Du entscheidest in deinem Tempo.",
    signal: "Zertifizierte Installateure",
    detail: "Ohne Verkaufsdruck. Deine Anfrage bleibt unverbindlich, bis du dich bewusst entscheidest.",
    icon: ShieldCheck,
  },
];

export function TimelineStacked() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[#f7f7f5] px-5 py-16 text-[#0d1117] sm:px-8 sm:py-20 lg:px-16 lg:py-24">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ts-rise { from { opacity:0; transform:translateY(20px) } to { opacity:1; transform:translateY(0) } }
        @keyframes ts-pulse { 0%,100% { transform:scale(1); opacity:.5 } 50% { transform:scale(1.08); opacity:1 } }
        .ts-rise { animation:ts-rise .7s cubic-bezier(.22,1,.36,1) both }
        .ts-pulse { animation:ts-pulse 2.8s ease-in-out infinite }
        @media (prefers-reduced-motion:reduce) { .ts-rise,.ts-pulse { animation:none } }
      ` }} />
      <div className="pointer-events-none absolute -left-40 top-32 h-[30rem] w-[30rem] rounded-full bg-[#d4af37]/[.08] blur-3xl" />
      <div className="pointer-events-none absolute -right-36 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#f97316]/[.07] blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-24">
          <header className="lg:sticky lg:top-12 lg:self-start">
            <div className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.22em] text-[#d4af37]">
              <span className="h-px w-9 bg-[#d4af37]" /> Solar. Einfach. Vergleichen.
            </div>
            <h2 className="max-w-xl text-balance text-5xl font-black leading-[.92] tracking-[-.065em] sm:text-6xl lg:text-[6.5rem]">
              Dein Weg zur <span className="text-[#f97316]">Sonne.</span>
            </h2>
            <p className="mt-7 max-w-sm text-base leading-7 text-[#5c6470] sm:text-lg">
              Von der ersten Idee bis zur eigenen Solaranlage: PVPro.ch bringt dich ohne Umwege zum passenden Angebot.
            </p>
            <div className="mt-10 flex items-center gap-3 text-sm text-[#68717b]">
              <div className="flex -space-x-2">
                {["MK", "LS", "AF"].map((initials, index) => (
                  <span key={initials} className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#f7f7f5] bg-[#0d1117] text-[10px] font-bold text-[#f7f7f5]" style={index === 1 ? { backgroundColor: "#d4af37", color: "#0d1117" } : undefined}>{initials}</span>
                ))}
              </div>
              <span><strong className="text-[#0d1117]">4.9/5</strong> von Hausbesitzern</span>
            </div>
            <button type="button" onClick={() => setShowInfo(true)} className="mt-10 inline-flex items-center gap-2 text-xs font-semibold text-[#68717b] underline decoration-[#d4af37] underline-offset-4 transition-colors hover:text-[#0d1117]">
              <UsersRound size={14} /> Was passiert mit meinen Daten?
            </button>
          </header>

          <div className="relative">
            <div className="absolute left-[1.55rem] top-7 bottom-12 w-px bg-[#deded8]" aria-hidden="true" />
            <div className="space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <article key={step.number} className="ts-rise relative grid grid-cols-[3.15rem_1fr] gap-5 sm:grid-cols-[4rem_1fr] sm:gap-7" style={{ animationDelay: `${index * 120}ms` }}>
                    <div className="relative z-10 grid h-[3.15rem] w-[3.15rem] place-items-center rounded-full border-[5px] border-[#f7f7f5] bg-[#0d1117] text-[#fffefa] shadow-[0_0_0_1px_#d4af37] sm:h-16 sm:w-16">
                      <span className="font-mono text-[10px] font-bold tracking-[.12em] text-[#d4af37] sm:text-xs">{step.number}</span>
                    </div>
                    <div className="group rounded-[1.65rem] border border-[#e6e5df] bg-[#fffefa] p-6 shadow-[0_12px_35px_rgba(13,17,23,.045)] transition-transform duration-300 hover:-translate-y-1 sm:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="mb-5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.16em] text-[#a2a59f]">
                            <Icon size={16} className="text-[#f97316]" /> Schritt {step.number}
                          </div>
                          <h3 className="text-2xl font-extrabold tracking-[-.04em] sm:text-3xl">{step.title}</h3>
                        </div>
                        <ArrowDown size={18} className="mt-1 shrink-0 text-[#d4af37] transition-transform duration-300 group-hover:translate-y-1" />
                      </div>
                      <p className="mt-4 max-w-lg text-[15px] leading-6 text-[#66707b]">{step.description}</p>
                      <div className="mt-7 border-t border-[#ecece8] pt-5">
                        <div className="flex items-center gap-2 text-xs font-bold text-[#0d1117]">
                          <span className="grid h-5 w-5 place-items-center rounded-full bg-[#d4af37]"><Check size={13} strokeWidth={3} /></span>
                          {step.signal}
                        </div>
                        <p className="mt-4 max-w-md text-sm leading-6 text-[#8a9095]">{step.detail}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-5 rounded-[1.75rem] bg-[#0d1117] p-7 text-[#fffefa] sm:grid-cols-[1fr_auto] sm:items-center sm:px-10 sm:py-8">
          <div>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-[#d4af37]"><SunMedium size={15} /> Bereit für deinen nächsten Schritt?</p>
            <p className="mt-2 text-lg font-semibold tracking-[-.02em] text-[#f5f2eb]">Finde heraus, was deine Dachfläche möglich macht.</p>
          </div>
          <button type="button" onClick={() => setShowInfo(true)} className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#f97316] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#ff8837] focus:outline-none focus:ring-2 focus:ring-[#d4af37]">
            Jetzt starten <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {showInfo && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-[#0d1117]/60 p-5 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="timeline-stacked-dialog-title">
          <div className="relative w-full max-w-md rounded-[2rem] bg-[#fffefa] p-8 shadow-2xl sm:p-10">
            <button type="button" aria-label="Dialog schliessen" onClick={() => setShowInfo(false)} className="absolute right-6 top-6 rounded-full p-2 text-[#68717b] hover:bg-[#f0f0ec] hover:text-[#0d1117]"><X size={18} /></button>
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#d4af37]/20 text-[#0d1117]"><Clock3 size={23} /></div>
            <h3 id="timeline-stacked-dialog-title" className="text-2xl font-black tracking-[-.04em]">In 2 Minuten loslegen.</h3>
            <p className="mt-3 text-sm leading-6 text-[#66707b]">Deine Angaben werden vertraulich behandelt und nur genutzt, um passende Schweizer Installateure zu finden. Keine versteckten Kosten, kein Abo, kein Verkaufsdruck.</p>
            <button type="button" onClick={() => setShowInfo(false)} className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#f97316] px-5 py-3.5 text-sm font-bold text-white hover:bg-[#ff8837]">Formular öffnen <ArrowRight size={17} /></button>
          </div>
        </div>
      )}
    </section>
  );
}