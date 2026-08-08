import { useEffect, useRef, useState } from "react";

type Step = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  detail: string;
  icon: "form" | "quotes" | "check";
  accent: string;
};

const steps: Step[] = [
  {
    number: "01",
    eyebrow: "In 2 Minuten",
    title: "Formular ausfüllen",
    description:
      "Erzählen Sie uns kurz von Ihrem Zuhause und Ihrem Stromverbrauch. Kostenlos und ohne Verpflichtung.",
    detail: "Kostenlos · unverbindlich · sicher",
    icon: "form",
    accent: "#D4AF37",
  },
  {
    number: "02",
    eyebrow: "Passend zu Ihrem Dach",
    title: "Angebote vergleichen",
    description:
      "Sie erhalten bis zu drei sorgfältig ausgewählte Offerten von zertifizierten Schweizer Solarinstallateuren.",
    detail: "Bis zu 3 geprüfte Offerten",
    icon: "quotes",
    accent: "#F97316",
  },
  {
    number: "03",
    eyebrow: "Ihre Entscheidung",
    title: "Installateur wählen",
    description:
      "Vergleichen Sie echte Preise, Leistungen und Bewertungen in Ruhe. Sie entscheiden, wer Ihr Dach elektrisiert.",
    detail: "Transparent · regional · persönlich",
    icon: "check",
    accent: "#D4AF37",
  },
];

function StepIcon({ type }: { type: Step["icon"] }) {
  if (type === "form") {
    return (
      <svg aria-hidden="true" viewBox="0 0 32 32" className="h-7 w-7" fill="none">
        <path d="M8 5.5h11l5 5v16H8z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M18.5 5.5v6h5.5M12 17h8M12 21h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "quotes") {
    return (
      <svg aria-hidden="true" viewBox="0 0 32 32" className="h-7 w-7" fill="none">
        <rect x="5" y="7" width="22" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M10 12h12M10 16h7M10 20h9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-7 w-7" fill="none">
      <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.8" />
      <path d="m10.5 16 3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BoldSplit() {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#fffdf9] text-[#0D1117]"
      aria-labelledby="boldsplit-title"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes boldsplit-rise { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
            @keyframes boldsplit-arrow { 0%,100% { transform: translateX(0); } 50% { transform: translateX(5px); } }
            .boldsplit-reveal { opacity: 0; }
            .boldsplit-reveal.is-visible { animation: boldsplit-rise .7s cubic-bezier(.2,.75,.25,1) forwards; }
            .boldsplit-delay-1 { animation-delay: .12s; }
            .boldsplit-delay-2 { animation-delay: .22s; }
            .boldsplit-delay-3 { animation-delay: .34s; }
            @media (prefers-reduced-motion: reduce) {
              .boldsplit-reveal { opacity: 1; }
              .boldsplit-reveal.is-visible { animation: none; }
            }
          `,
        }}
      />

      <div className="mx-auto max-w-[1440px] px-6 pb-16 pt-20 sm:px-10 sm:pb-24 sm:pt-28 lg:px-16">
        <header className={`boldsplit-reveal ${started ? "is-visible" : ""} relative mx-auto mb-16 max-w-[1180px]`} style={{ animationDelay: ".05s" }}>
          <div className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#F97316]">
            <span className="h-px w-10 bg-[#F97316]" />
            So funktioniert&apos;s
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <h2 id="boldsplit-title" className="max-w-4xl text-[clamp(3rem,7vw,6.7rem)] font-black leading-[.88] tracking-[-.07em]">
              Solar? <span className="text-[#F97316]">Einfach</span> vergleichen.
            </h2>
            <p className="max-w-sm border-l-2 border-[#D4AF37] pl-5 text-[17px] leading-relaxed text-[#4d535b]">
              Der schnellste Weg zu Ihrer passenden Solaranlage — ohne Verkaufsdruck und ohne Kleingedrucktes.
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-[1180px] border-t border-[#F97316]/70">
          {steps.map((step, index) => {
            const reversed = index % 2 === 1;
            return (
              <article
                key={step.number}
                className={`boldsplit-reveal ${started ? "is-visible" : ""} boldsplit-delay-${index + 1} relative grid min-h-[340px] items-center gap-10 border-b border-[#F97316]/70 py-12 sm:py-16 lg:grid-cols-2 lg:gap-20 lg:py-20 ${reversed ? "bg-[#f8f9fa]" : "bg-[#fffdf9]"}`}
              >
                <div className={`relative flex min-h-[190px] items-center ${reversed ? "lg:order-2 lg:justify-start" : "lg:justify-end"}`}>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 select-none text-[clamp(9rem,22vw,21rem)] font-extralight leading-none tracking-[-.13em]" style={{ color: `${step.accent}38` }}>
                    {step.number}
                  </div>
                  <div className={`relative z-10 flex h-[166px] w-[min(100%,360px)] items-center justify-center border-2 border-[#0D1117] bg-[#fffdf9] shadow-[10px_10px_0_#D4AF37] ${reversed ? "lg:ml-14" : "lg:mr-14"}`}>
                    <div className="text-center">
                      <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#0D1117] text-[#D4AF37]">
                        <StepIcon type={step.icon} />
                      </div>
                      <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#6e747a]">Schritt {step.number}</p>
                    </div>
                  </div>
                </div>
                <div className={`max-w-[500px] ${reversed ? "lg:order-1 lg:justify-self-end" : ""}`}>
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-[.2em]" style={{ color: step.accent }}>{step.eyebrow}</p>
                  <h3 className="mb-5 text-[clamp(2rem,3.5vw,2.7rem)] font-black leading-none tracking-[-.045em]">{step.title}</h3>
                  <p className="mb-6 text-[18px] leading-[1.55] text-[#4d535b]">{step.description}</p>
                  <div className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[.12em] text-[#0D1117]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#D4AF37] text-[10px]">✓</span>
                    {step.detail}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className={`boldsplit-reveal ${started ? "is-visible" : ""} mx-auto mt-12 max-w-[1180px] sm:mt-16`} style={{ animationDelay: ".48s" }}>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent("pvpro:start-quote"))}
            className="group flex w-full items-center justify-between bg-[#F97316] px-6 py-7 text-left text-[#fffdf9] transition-colors hover:bg-[#0D1117] focus:outline-none focus:ring-4 focus:ring-[#F97316]/30 sm:px-10 sm:py-9"
          >
            <span>
              <span className="mb-2 block text-[11px] font-bold uppercase tracking-[.2em] text-[#ffd7bf]">Bereit für Ihre Energiewende?</span>
              <span className="block text-[clamp(1.7rem,4vw,3.2rem)] font-black leading-none tracking-[-.05em]">Jetzt kostenlos Angebote erhalten</span>
            </span>
            <span className="ml-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#fffdf9]/60 text-2xl transition-transform group-hover:translate-x-1 sm:h-20 sm:w-20 sm:text-3xl" aria-hidden="true">
              <span className="group-hover:animate-[boldsplit-arrow_1s_ease-in-out_infinite]">→</span>
            </span>
          </button>
          <p className="mt-4 text-center text-[12px] text-[#6e747a]">Unverbindlich anfragen · Ihre Daten bleiben in der Schweiz</p>
        </div>
      </div>
    </section>
  );
}

export default BoldSplit;