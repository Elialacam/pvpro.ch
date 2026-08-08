import { useState } from "react";
import { ArrowRight, Check, Clock3, FileText, ShieldCheck, SlidersHorizontal, SunMedium, UsersRound, X } from "lucide-react";

type Step = {
  number: string;
  title: string;
  description: string;
  signal: string;
  icon: typeof FileText;
  detail: string;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Formular ausfüllen",
    description: "Beantworte ein paar Fragen zu deinem Zuhause – in nur 2 Minuten und völlig kostenlos.",
    signal: "2 Minuten",
    icon: FileText,
    detail: "Keine Vorbereitung nötig. Wir fragen nur, was für eine passende Solarlösung wirklich zählt.",
  },
  {
    number: "02",
    title: "Angebote vergleichen",
    description: "Wir prüfen deine Angaben und schicken dir bis zu 3 passende Offerten von zertifizierten Installateuren.",
    signal: "Bis zu 3 Offerten",
    icon: SlidersHorizontal,
    detail: "Transparent aufbereitet und direkt vergleichbar – damit du nicht Äpfel mit Birnen vergleichst.",
  },
  {
    number: "03",
    title: "Installateur wählen",
    description: "Vergleiche reale Preise, Leistungen und Bewertungen. Du entscheidest in deinem Tempo.",
    signal: "Zertifizierte Installateure",
    icon: ShieldCheck,
    detail: "Ohne Verkaufsdruck. Deine Anfrage bleibt unverbindlich, bis du dich bewusst entscheidest.",
  },
];

export function Timeline() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[#f7f7f5] px-5 py-20 text-[#0d1117] sm:px-8 lg:px-14 lg:py-28">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes pv-dash { to { background-position: 56px 0; } }
            @keyframes pv-rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
            .pv-dash { animation: pv-dash 1.1s linear infinite; }
            .pv-rise { animation: pv-rise .7s cubic-bezier(.22,1,.36,1) both; }
            @media (prefers-reduced-motion: reduce) { .pv-dash { animation: none; } .pv-rise { animation: none; } }
          `,
        }}
      />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#f97316]/[.07] blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-8 lg:mb-20 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.22em] text-[#d4af37]">
              <span className="h-px w-9 bg-[#d4af37]" />
              Solar. Einfach. Vergleichen.
            </div>
            <h2 className="text-balance text-5xl font-black leading-[.95] tracking-[-.06em] sm:text-6xl lg:text-8xl">
              So <span className="text-[#f97316]">funktioniert&apos;s.</span>
            </h2>
            <p className="mt-7 max-w-xl text-base leading-7 text-[#5c6470] sm:text-lg">
              Von der ersten Idee bis zur eigenen Solaranlage: PVPro.ch bringt dich ohne Umwege zum passenden Angebot.
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm text-[#68717b] lg:pb-2">
            <div className="flex -space-x-2">
              {["MK", "LS", "AF"].map((initials, index) => (
                <span key={initials} className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#f7f7f5] bg-[#0d1117] text-[10px] font-bold text-[#f7f7f5]" style={{ backgroundColor: index === 1 ? "#d4af37" : undefined, color: index === 1 ? "#0d1117" : undefined }}>{initials}</span>
              ))}
            </div>
            <span><strong className="text-[#0d1117]">4.9/5</strong> von Hausbesitzern</span>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-[4.1rem] hidden h-2 bg-[repeating-linear-gradient(90deg,#f97316_0,#f97316_28px,transparent_28px,transparent_42px)] opacity-70 lg:block pv-dash" />
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-7">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.number}
                  className="pv-rise group relative flex min-h-[370px] flex-col rounded-[2rem] border border-[#e3e3df] bg-[#fffefa] p-7 shadow-[0_18px_50px_rgba(13,17,23,.06)] transition-transform duration-300 hover:-translate-y-2 hover:rotate-[.35deg] sm:p-9"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="relative z-10 mb-10 flex items-start justify-between">
                    <div className="grid h-[4.75rem] w-[4.75rem] place-items-center rounded-full bg-[#f97316] text-[#fffefa] shadow-[0_8px_20px_rgba(249,115,22,.25)]">
                      <Icon strokeWidth={1.8} size={29} />
                    </div>
                    <span className="font-mono text-xs font-bold tracking-[.18em] text-[#c4c8c9]">{step.number}</span>
                  </div>
                  <h3 className="max-w-[250px] text-2xl font-extrabold tracking-[-.035em]">{step.title}</h3>
                  <p className="mt-4 text-[15px] leading-6 text-[#66707b]">{step.description}</p>
                  <div className="mt-auto flex items-center gap-2 border-t border-[#ecece8] pt-6 text-xs font-bold text-[#0d1117]">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-[#d4af37]"><Check size={13} strokeWidth={3} /></span>
                    {step.signal}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-[1.75rem] bg-[#0d1117] px-7 py-7 text-[#fffefa] sm:flex-row sm:items-center sm:px-10">
          <div>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-[#d4af37]"><SunMedium size={15} /> Bereit für deinen nächsten Schritt?</p>
            <p className="mt-2 text-lg font-semibold tracking-[-.02em] text-[#f5f2eb]">Finde heraus, was deine Dachfläche möglich macht.</p>
          </div>
          <button type="button" onClick={() => setShowInfo(true)} className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#f97316] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#ff8837] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 focus:ring-offset-[#0d1117]">
            Jetzt starten <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
        <button type="button" onClick={() => setShowInfo(true)} className="mx-auto mt-7 flex items-center gap-2 text-xs font-semibold text-[#68717b] underline decoration-[#d4af37] underline-offset-4 hover:text-[#0d1117]">
          <UsersRound size={14} /> Was passiert mit meinen Daten?
        </button>
      </div>

      {showInfo && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-[#0d1117]/60 p-5 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="timeline-dialog-title">
          <div className="relative w-full max-w-md rounded-[2rem] bg-[#fffefa] p-8 shadow-2xl sm:p-10">
            <button type="button" aria-label="Dialog schliessen" onClick={() => setShowInfo(false)} className="absolute right-6 top-6 rounded-full p-2 text-[#68717b] hover:bg-[#f0f0ec] hover:text-[#0d1117]"><X size={18} /></button>
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#d4af37]/20 text-[#0d1117]"><Clock3 size={23} /></div>
            <h3 id="timeline-dialog-title" className="text-2xl font-black tracking-[-.04em]">In 2 Minuten loslegen.</h3>
            <p className="mt-3 text-sm leading-6 text-[#66707b]">Deine Angaben werden vertraulich behandelt und nur genutzt, um passende Schweizer Installateure zu finden. Keine versteckten Kosten, kein Abo, kein Verkaufsdruck.</p>
            <button type="button" onClick={() => setShowInfo(false)} className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#f97316] px-5 py-3.5 text-sm font-bold text-white hover:bg-[#ff8837]">Formular öffnen <ArrowRight size={17} /></button>
          </div>
        </div>
      )}
    </section>
  );
}
