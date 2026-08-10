import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, MapPin, ShieldCheck, Sparkles } from "lucide-react";

type Contact = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

const questions = [
  {
    eyebrow: "01 / Eigentum",
    title: "Sind Sie Eigentümer\nder Immobilie?",
    options: ["Ja", "Nein", "Nicht sicher"],
  },
  {
    eyebrow: "02 / Immobilie",
    title: "Um welchen Gebäudetyp\nhandelt es sich?",
    options: ["Einfamilienhaus", "Mehrfamilienhaus", "Gewerbe", "Sonstiges"],
  },
  {
    eyebrow: "03 / Dach",
    title: "Welche Dachform\nhat Ihr Gebäude?",
    options: ["Satteldach", "Pultdach", "Flachdach"],
  },
  {
    eyebrow: "04 / Speicher",
    title: "Möchten Sie einen\nBatteriespeicher?",
    options: ["Ja", "Nein", "Nicht sicher"],
  },
];

const inputClass =
  "w-full rounded-xl border border-white/15 bg-white/[0.055] px-4 py-3.5 text-[15px] text-white outline-none transition placeholder:text-white/35 focus:border-[#fcb210] focus:bg-white/[0.09]";

export function CinematicDark() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState<Contact>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const selected = answers[step];
  const canContinue = step < 4 ? Boolean(selected) : step === 4 ? address.trim().length > 4 : Object.values(contact).every(Boolean);
  const progress = useMemo(() => Array.from({ length: 6 }, (_, i) => i <= step), [step]);

  const choose = (value: string) => setAnswers((current) => ({ ...current, [step]: value }));
  const next = () => {
    if (!canContinue) return;
    if (step < 5) setStep((current) => current + 1);
    else setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a0a] px-6 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(252,178,16,0.11),transparent_36%)]" />
        <div className="relative max-w-xl text-center">
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-[#fcb210]/50 bg-[#fcb210]/10 text-[#fcb210]">
            <Check size={28} strokeWidth={1.7} />
          </div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#fcb210]">Anfrage erhalten</p>
          <h1 className="whitespace-pre-line text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl">Das sieht gut aus.</h1>
          <p className="mx-auto mt-7 max-w-md text-base leading-7 text-white/55">
            Vielen Dank, {contact.firstName || "dass Sie sich"} — unser Solarberater meldet sich innerhalb eines Werktags bei Ihnen.
          </p>
          <div className="mt-10 flex items-center justify-center gap-2 text-xs text-white/35">
            <ShieldCheck size={15} className="text-[#fcb210]" /> Ihre Daten bleiben vertraulich.
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#0a0a0a] text-white selection:bg-[#fcb210] selection:text-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_27%,rgba(252,178,16,0.07),transparent_42%)]" />
      <header className="relative z-10 flex items-center justify-between px-6 py-7 sm:px-12 sm:py-9">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#fcb210] text-black">
            <Sparkles size={15} strokeWidth={2.5} />
          </span>
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/75">Helio Haus</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/35">
          <span>Ihre Solaranfrage</span><span className="hidden text-white/15 sm:inline">·</span><span>{step + 1} / 6</span>
        </div>
      </header>

      <div className="relative z-10 flex gap-1.5 px-6 sm:px-12" aria-label="Fortschritt">
        {progress.map((done, index) => (
          <span key={index} className={`h-[2px] flex-1 transition-all duration-500 ${done ? "bg-[#fcb210]" : "bg-white/15"}`} />
        ))}
      </div>

      <section className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center px-6 pb-32 pt-16 sm:px-12 sm:pt-20">
        <div key={step} className="animate-[cinematic-in_300ms_ease-out]">
          {step < 4 && (
            <>
              <p className="mb-7 text-xs font-semibold uppercase tracking-[0.25em] text-[#fcb210]">{questions[step].eyebrow}</p>
              <h1 className="whitespace-pre-line text-5xl font-black leading-[0.96] tracking-[-0.055em] text-white sm:text-7xl">{questions[step].title}</h1>
              <div className="my-10 h-px w-full bg-[#fcb210]/70 sm:my-12" />
              <div className="grid gap-3 sm:grid-cols-2">
                {questions[step].options.map((option) => {
                  const isSelected = selected === option;
                  return (
                    <button
                      key={option}
                      onClick={() => choose(option)}
                      className={`group flex min-h-[68px] items-center justify-between rounded-xl border px-5 text-left text-lg font-semibold transition-all duration-200 sm:min-h-[78px] sm:px-6 sm:text-xl ${
                        isSelected
                          ? "border-[#fcb210] bg-[#fcb210] text-black shadow-[0_0_30px_rgba(252,178,16,0.22)]"
                          : "border-white/25 bg-transparent text-white hover:border-[#fcb210] hover:bg-[#fcb210] hover:text-black"
                      }`}
                    >
                      <span>{option}</span>
                      <span className={`flex h-7 w-7 items-center justify-center rounded-full border transition-all ${isSelected ? "border-black/30" : "border-white/20 group-hover:border-black/30"}`}>
                        {isSelected ? <Check size={15} /> : <ArrowRight size={15} className="opacity-0 transition-opacity group-hover:opacity-100" />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <p className="mb-7 text-xs font-semibold uppercase tracking-[0.25em] text-[#fcb210]">05 / Standort</p>
              <h1 className="whitespace-pre-line text-5xl font-black leading-[0.96] tracking-[-0.055em] sm:text-7xl">Wo steht Ihre<br />Immobilie?</h1>
              <div className="my-10 h-px w-full bg-[#fcb210]/70 sm:my-12" />
              <label className="relative block">
                <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-[#fcb210]" size={20} />
                <input value={address} onChange={(event) => setAddress(event.target.value)} className={`${inputClass} py-5 pl-14 text-lg`} placeholder="Strasse, Hausnummer, Ort" autoComplete="street-address" />
              </label>
              {address.length > 2 && (
                <button onClick={() => setAddress("Seestrasse 18, 8002 Zürich")} className="mt-2 flex w-full items-center gap-3 rounded-xl border border-white/10 bg-white/[0.07] px-5 py-4 text-left text-sm text-white/70 transition hover:border-[#fcb210]/60 hover:text-white">
                  <MapPin size={16} className="text-[#fcb210]" /><span><strong className="font-medium text-white">Seestrasse 18, 8002 Zürich</strong><br /><span className="text-xs text-white/40">Vorschlag verwenden</span></span>
                </button>
              )}
              <p className="mt-5 text-xs text-white/35">Wir verwenden Ihre Adresse nur für eine präzise Solarpotenzial-Analyse.</p>
            </>
          )}

          {step === 5 && (
            <>
              <p className="mb-7 text-xs font-semibold uppercase tracking-[0.25em] text-[#fcb210]">06 / Fast geschafft</p>
              <h1 className="text-5xl font-black leading-[0.96] tracking-[-0.055em] sm:text-7xl">Wohin dürfen wir<br />Ihre Analyse senden?</h1>
              <div className="my-8 h-px w-full bg-[#fcb210]/70" />
              <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-2xl backdrop-blur-xl sm:p-7">
                <div className="grid gap-4 sm:grid-cols-2">
                  {(["firstName", "lastName", "email", "phone"] as const).map((field) => (
                    <label key={field} className={field === "email" || field === "phone" ? "" : ""}>
                      <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-white/40">
                        {field === "firstName" ? "Vorname" : field === "lastName" ? "Nachname" : field === "email" ? "E-Mail-Adresse" : "Telefonnummer"}
                      </span>
                      <input type={field === "email" ? "email" : field === "phone" ? "tel" : "text"} value={contact[field]} onChange={(event) => setContact({ ...contact, [field]: event.target.value })} className={inputClass} placeholder={field === "email" ? "name@beispiel.ch" : field === "phone" ? "+41 79 000 00 00" : ""} />
                    </label>
                  ))}
                </div>
                <p className="mt-5 flex items-center gap-2 text-xs leading-5 text-white/35"><ShieldCheck size={15} className="shrink-0 text-[#fcb210]" /> Keine Newsletter. Kein Kleingedrucktes. Nur Ihr persönliches Angebot.</p>
              </div>
            </>
          )}
        </div>
      </section>

      <footer className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between gap-5 px-6 pb-7 sm:px-12 sm:pb-10">
        {step >= 2 ? (
          <button onClick={() => setStep((current) => current - 1)} className="flex items-center gap-2 text-sm font-medium text-white/40 transition hover:text-white"><ArrowLeft size={17} /> Zurück</button>
        ) : <span />}
        <button onClick={next} disabled={!canContinue} className={`flex min-h-[54px] flex-1 items-center justify-center gap-3 rounded-full px-7 text-sm font-bold transition-all duration-300 sm:max-w-[280px] ${canContinue ? "translate-y-0 bg-[#fcb210] text-black shadow-[0_8px_30px_rgba(252,178,16,0.18)] hover:bg-[#ffd05a]" : "translate-y-3 cursor-not-allowed bg-white/10 text-white/25 opacity-0"}`}>
          {step === 5 ? "Kostenlose Analyse anfordern" : "Weiter"} <ArrowRight size={17} />
        </button>
      </footer>
      <style>{`@keyframes cinematic-in { from { opacity: 0; transform: translateX(18px); } to { opacity: 1; transform: translateX(0); } }`}</style>
    </main>
  );
}