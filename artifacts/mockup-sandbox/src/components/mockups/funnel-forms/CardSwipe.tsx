import { useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, Check, LockKeyhole, MapPin, ShieldCheck, Sparkles } from "lucide-react";

type Contact = { firstName: string; lastName: string; email: string; phone: string };

const steps = [
  { icon: "🏠", question: "Sind Sie Eigentümer der Immobilie?", hint: "Damit wir das Potenzial Ihres Dachs einschätzen können.", options: ["Ja", "Nein", "Nicht sicher"], type: "pills" },
  { icon: "🏡", question: "Um welchen Gebäudetyp geht es?", hint: "Wählen Sie, was am besten passt.", options: ["Einfamilienhaus", "Mehrfamilienhaus", "Gewerbe", "Andere"], type: "grid" },
  { icon: "⛺", question: "Welche Dachform hat Ihr Gebäude?", hint: "Keine Sorge — eine grobe Einschätzung genügt.", options: ["Satteldach", "Pultdach", "Flachdach"], type: "grid" },
  { icon: "🔋", question: "Möchten Sie Solarstrom speichern?", hint: "Nutzen Sie Ihre Energie auch am Abend.", options: ["Ja, gerne", "Nein, danke", "Noch nicht sicher"], type: "pills" },
] as const;

const optionEmoji = ["🏠", "🏢", "🏗️", "✨"];

export function CardSwipe() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [address, setAddress] = useState("");
  const [suggestion, setSuggestion] = useState(false);
  const [contact, setContact] = useState<Contact>({ firstName: "", lastName: "", email: "", phone: "" });
  const [moving, setMoving] = useState(false);
  const [complete, setComplete] = useState(false);

  const current = step < 4 ? steps[step] : null;
  const selected = answers[step] || "";
  const canContinue = step < 4 ? Boolean(selected) : step === 4 ? Boolean(address.trim()) : Boolean(contact.firstName && contact.email && contact.phone);

  const select = (value: string) => setAnswers((old) => ({ ...old, [step]: value }));
  const next = () => {
    if (!canContinue || moving) return;
    setMoving(true);
    window.setTimeout(() => { setStep((s) => Math.min(5, s + 1)); setMoving(false); }, 300);
  };
  const back = () => { if (!moving && step > 0) setStep((s) => s - 1); };
  const submit = (event: FormEvent) => { event.preventDefault(); if (canContinue) setComplete(true); };

  return (
    <main className="min-h-screen bg-[#fffdf4] px-4 py-5 text-[#22231f] sm:px-6" style={{ fontFamily: "'DM Sans', ui-sans-serif, sans-serif" }}>
      <style>{`
        @keyframes cardIn { from { opacity: 0; transform: translateY(28px) rotate(-2deg); } to { opacity: 1; transform: translateY(0) rotate(-.8deg); } }
        @keyframes buttonIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .card-in { animation: cardIn .42s cubic-bezier(.22,.8,.24,1) both; }
        .button-in { animation: buttonIn .28s ease-out both; }
      `}</style>
      <div className="mx-auto flex min-h-[calc(100dvh-2.5rem)] max-w-[560px] flex-col">
        <header className="pt-2 text-center">
          <div className="mx-auto flex w-fit items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#fcb210] text-xl shadow-[0_7px_18px_rgba(212,145,3,.2)]">☀</div>
            <span className="text-[17px] font-extrabold tracking-[-.04em]">solario<span className="text-[#bd8200]">.</span></span>
          </div>
          <p className="mt-4 text-[11px] font-bold uppercase tracking-[.16em] text-[#9b8c68]">Schritt {step + 1} von 6</p>
          <div className="mx-auto mt-3 h-1 w-full max-w-[390px] overflow-hidden rounded-full bg-[#eee6cf]">
            <div className="h-full rounded-full bg-[#fcb210] transition-all duration-500" style={{ width: `${((step + 1) / 6) * 100}%` }} />
          </div>
        </header>

        <div className="relative mx-auto mt-9 w-full max-w-[410px] flex-1">
          <div className="absolute inset-x-4 top-5 h-[390px] rounded-[30px] bg-[#f7edcf] shadow-[0_8px_20px_rgba(95,72,22,.04)] sm:inset-x-7" />
          <div className="absolute inset-x-2 top-2 h-[400px] rotate-[1.5deg] rounded-[30px] border border-[#f1e4c1] bg-[#fff7df] shadow-[0_8px_22px_rgba(95,72,22,.05)] sm:inset-x-4" />

          <section className={`relative min-h-[430px] rounded-[30px] border border-[#eee9db] bg-white p-6 shadow-[0_22px_55px_rgba(74,57,24,.14)] transition-all duration-300 sm:p-9 ${moving ? "-translate-y-[120%] rotate-[5deg] opacity-0" : "card-in"}`}>
            {complete ? (
              <div className="flex min-h-[365px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e8f5e9] text-[#39804a]"><Check size={30} strokeWidth={3} /></div>
                <h1 className="mt-6 text-2xl font-extrabold tracking-[-.04em]">Danke, {contact.firstName}!</h1>
                <p className="mt-3 max-w-[270px] text-sm leading-6 text-[#74736c]">Ihre Anfrage ist angekommen. Wir melden uns bald mit Ihrem persönlichen Solar-Check.</p>
                <div className="mt-7 flex items-center gap-2 rounded-full bg-[#fff8e8] px-4 py-2 text-[11px] font-semibold text-[#856416]"><Sparkles size={14} /> Alles in Ruhe — kein Verkaufsdruck.</div>
              </div>
            ) : step < 4 ? (
              <>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#fff5d9] px-3 py-1.5 text-[11px] font-extrabold text-[#936a08]">{step + 1} / 6</span>
                  <span className="text-4xl leading-none">{current?.icon}</span>
                </div>
                <h1 className="mt-8 text-center text-[27px] font-extrabold leading-[1.1] tracking-[-.055em] sm:text-[30px]">{current?.question}</h1>
                <p className="mx-auto mt-3 max-w-[285px] text-center text-[13px] leading-5 text-[#88877f]">{current?.hint}</p>
                <div className={`mt-8 ${current?.type === "grid" ? "grid grid-cols-2 gap-3" : "flex gap-2"}`}>
                  {current?.options.map((option, index) => (
                    <button key={option} type="button" onClick={() => select(option)} className={`group flex min-h-[67px] flex-1 items-center justify-center rounded-2xl border px-2 text-center text-[13px] font-bold transition duration-200 hover:-translate-y-0.5 ${current.type === "grid" ? "flex-col gap-1.5 py-3" : ""} ${selected === option ? "border-[#e3a000] bg-[#fcb210] text-[#252318] shadow-[0_7px_15px_rgba(206,143,3,.2)]" : "border-[#eeeae0] bg-[#fffdfa] text-[#575650] hover:border-[#f1c75b]"}`}>
                      {current.type === "grid" && <span className="text-2xl">{optionEmoji[index]}</span>}{option}
                    </button>
                  ))}
                </div>
              </>
            ) : step === 4 ? (
              <>
                <span className="rounded-full bg-[#fff5d9] px-3 py-1.5 text-[11px] font-extrabold text-[#936a08]">5 / 6</span>
                <div className="mt-7 text-center text-4xl">📍</div>
                <h1 className="mt-4 text-center text-[27px] font-extrabold leading-[1.1] tracking-[-.055em]">Wo steht Ihr Gebäude?</h1>
                <p className="mt-3 text-center text-[13px] text-[#88877f]">Wir prüfen die Sonneneinstrahlung an Ihrem Standort.</p>
                <div className="relative mt-8">
                  <MapPin className="absolute left-4 top-4 text-[#a99b79]" size={18} />
                  <input value={address} onChange={(e) => { setAddress(e.target.value); setSuggestion(e.target.value.length > 2); }} placeholder="Strasse, Ort oder PLZ" className="w-full rounded-2xl border-2 border-[#eeeae0] bg-[#fffdfa] py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#fcb210]" />
                  {suggestion && <button type="button" onClick={() => { setAddress("Bahnhofstrasse 12, 8001 Zürich"); setSuggestion(false); }} className="absolute top-[calc(100%+8px)] z-10 flex w-full items-center gap-2 rounded-xl border border-[#eeeae0] bg-white p-3 text-left text-xs font-semibold shadow-xl"><MapPin size={15} className="text-[#d39400]" /> Bahnhofstrasse 12, 8001 Zürich</button>}
                </div>
              </>
            ) : (
              <>
                <span className="rounded-full bg-[#fff5d9] px-3 py-1.5 text-[11px] font-extrabold text-[#936a08]">6 / 6</span>
                <div className="mt-6 text-center text-4xl">👤</div>
                <h1 className="mt-3 text-center text-[25px] font-extrabold leading-[1.1] tracking-[-.05em]">Wohin dürfen wir Ihre Einschätzung senden?</h1>
                <form onSubmit={submit} className="mt-6 space-y-2.5">
                  <div className="grid grid-cols-2 gap-2.5"><input required value={contact.firstName} onChange={(e) => setContact({ ...contact, firstName: e.target.value })} placeholder="Vorname" className="min-w-0 rounded-xl border border-[#eeeae0] bg-[#fffdfa] px-3 py-3 text-[13px] outline-none transition focus:border-[#fcb210] focus:ring-2 focus:ring-[#fcb210]/15" /><input value={contact.lastName} onChange={(e) => setContact({ ...contact, lastName: e.target.value })} placeholder="Nachname" className="min-w-0 rounded-xl border border-[#eeeae0] bg-[#fffdfa] px-3 py-3 text-[13px] outline-none transition focus:border-[#fcb210] focus:ring-2 focus:ring-[#fcb210]/15" /></div>
                  <input required type="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} placeholder="E-Mail-Adresse" className="w-full rounded-xl border border-[#eeeae0] bg-[#fffdfa] px-3 py-3 text-[13px] outline-none transition focus:border-[#fcb210] focus:ring-2 focus:ring-[#fcb210]/15" />
                  <input required type="tel" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} placeholder="Telefonnummer" className="w-full rounded-xl border border-[#eeeae0] bg-[#fffdfa] px-3 py-3 text-[13px] outline-none transition focus:border-[#fcb210] focus:ring-2 focus:ring-[#fcb210]/15" />
                  <button className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#fcb210] py-3.5 text-sm font-extrabold shadow-[0_8px_18px_rgba(210,147,5,.2)] transition hover:bg-[#e9a306] active:scale-[.98]">Solar-Check anfragen <ArrowRight size={16} /></button>
                </form>
              </>
            )}
            {!complete && step < 5 && <button type="button" onClick={next} className={`button-in mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#fcb210] py-3.5 text-sm font-extrabold shadow-[0_8px_18px_rgba(210,147,5,.2)] transition hover:bg-[#e9a306] active:scale-[.98] ${canContinue ? "opacity-100" : "pointer-events-none opacity-0"}`}>Weiter <ArrowRight size={17} /></button>}
            {!complete && step === 5 && <p className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-[#99978f]"><LockKeyhole size={12} /> Ihre Daten werden sicher und vertraulich behandelt.</p>}
          </section>
        </div>
        {!complete && <div className="mt-7 flex min-h-[40px] justify-center">{step > 0 && <button type="button" onClick={back} className="flex items-center gap-1.5 text-xs font-bold text-[#90856d] transition hover:text-[#3b382f]"><ArrowLeft size={14} /> Zurück</button>}</div>}
        <footer className="mt-auto pb-1 pt-7 text-center"><p className="flex items-center justify-center gap-1.5 text-[11px] font-medium text-[#9b988c]"><ShieldCheck size={14} className="text-[#c79319]" /> Kostenlos & unverbindlich · In 2 Minuten ausgefüllt</p></footer>
      </div>
    </main>
  );
}