import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { Check, ChevronRight, MapPin, Send, ShieldCheck, Sparkles } from "lucide-react";

type ChatMessage = {
  id: string;
  role: "bot" | "user";
  text: string;
  typing?: boolean;
};

type ContactForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

const questions = [
  {
    prompt: "Hallo! 👋 Sind Sie Eigentümer der Liegenschaft?",
    options: ["Ja, ich bin Eigentümer", "Nein", "Nicht sicher"],
  },
  {
    prompt: "Danke! Um welchen Gebäudetyp handelt es sich?",
    options: ["Einfamilienhaus", "Mehrfamilienhaus", "Gewerbe", "Andere"],
  },
  {
    prompt: "Wie ist die Dachform Ihrer Immobilie?",
    options: ["Satteldach", "Pultdach", "Flachdach"],
  },
  {
    prompt: "Möchten Sie Ihren Solarstrom mit einem Batteriespeicher nutzen?",
    options: ["Ja, gerne", "Nein, danke", "Noch nicht sicher"],
  },
  {
    prompt: "Fast geschafft. Wo befindet sich die Liegenschaft?",
    options: ["Adresse eingeben"],
  },
] as const;

export function ChatBubble() {
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "welcome", role: "bot", text: questions[0].prompt, typing: true },
  ]);
  const [typing, setTyping] = useState(true);
  const [selected, setSelected] = useState<string | null>(null);
  const [address, setAddress] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [contact, setContact] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const currentQuestion = questions[step];
  const isAddressStep = step === 4;
  const isContactStep = step === 5;

  useEffect(() => {
    setTyping(true);
    const timeout = window.setTimeout(() => {
      setTyping(false);
      setMessages((current) =>
        current.map((message) =>
          message.id === `question-${step}` || (step === 0 && message.id === "welcome")
            ? { ...message, typing: false }
            : message,
        ),
      );
    }, 600);
    return () => window.clearTimeout(timeout);
  }, [step]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, isContactStep]);

  const progressLabel = useMemo(() => `${Math.min(step + 1, 6)} von 6`, [step]);

  const addNextBotMessage = (nextStep: number) => {
    if (nextStep < questions.length) {
      setMessages((current) => [
        ...current,
        {
          id: `question-${nextStep}`,
          role: "bot",
          text: questions[nextStep].prompt,
          typing: true,
        },
      ]);
    } else {
      setMessages((current) => [
        ...current,
        { id: "contact-intro", role: "bot", text: "Super! 🎉 Zuletzt noch Ihre Kontaktdaten:" },
      ]);
    }
  };

  const chooseOption = (option: string) => {
    if (typing || isSending) return;
    setSelected(option);
    setIsSending(true);
    setMessages((current) => [...current, { id: `answer-${step}`, role: "user", text: option }]);
    window.setTimeout(() => {
      const next = step + 1;
      setStep(next);
      setSelected(null);
      addNextBotMessage(next);
      setIsSending(false);
    }, 400);
  };

  const chooseAddress = () => {
    if (!address.trim() || isSending) return;
    setShowSuggestion(false);
    setIsSending(true);
    setMessages((current) => [...current, { id: "address-answer", role: "user", text: address }]);
    window.setTimeout(() => {
      setStep(5);
      addNextBotMessage(5);
      setIsSending(false);
    }, 400);
  };

  const updateContact = (field: keyof ContactForm, value: string) => {
    setContact((current) => ({ ...current, [field]: value }));
  };

  const submitContact = (event: FormEvent) => {
    event.preventDefault();
    if (!contact.firstName || !contact.email || !contact.phone) return;
    setSubmitted(true);
    setMessages((current) => [
      ...current,
      { id: "submitted", role: "bot", text: `Danke ${contact.firstName}! Wir melden uns schon bald bei Ihnen.` },
    ]);
  };

  return (
    <main className="min-h-screen bg-[#f8f8f6] px-3 py-3 text-[#242424] sm:px-6 sm:py-6" style={{ fontFamily: "'DM Sans', ui-sans-serif, sans-serif" }}>
      <style>{`
        @keyframes chatFadeUp { from { opacity: 0; transform: translateY(9px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes typingPulse { 0%, 60%, 100% { opacity: .28; transform: translateY(0); } 30% { opacity: 1; transform: translateY(-3px); } }
        .chat-fade-up { animation: chatFadeUp .36s ease-out both; }
        .typing-dot { animation: typingPulse 1s infinite ease-in-out; }
        .typing-dot:nth-child(2) { animation-delay: .15s; }
        .typing-dot:nth-child(3) { animation-delay: .3s; }
      `}</style>
      <section className="mx-auto flex min-h-[calc(100dvh-1.5rem)] max-w-[500px] flex-col overflow-hidden rounded-[28px] border border-[#e9e7df] bg-white shadow-[0_20px_70px_rgba(42,38,25,0.10)] sm:min-h-[calc(100dvh-3rem)]">
        <header className="flex items-center justify-between border-b border-[#eeede8] px-5 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fcb210] text-xl shadow-[0_5px_14px_rgba(252,178,16,.28)]">☀</div>
            <div>
              <p className="text-[15px] font-bold tracking-[-.02em]">PVPro Solarberater</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-[11px] font-medium text-[#66715f]">
                <span className="h-2 w-2 rounded-full bg-[#51a66a]" /> Online · Antwortet sofort
              </p>
            </div>
          </div>
          <div className="rounded-full bg-[#fff7df] px-3 py-1.5 text-[11px] font-bold text-[#84600a]">{progressLabel}</div>
        </header>

        <div className="flex-1 overflow-y-auto bg-[linear-gradient(180deg,#fff_0%,#fffdfa_100%)] px-4 py-6 sm:px-6">
          <div className="mb-5 text-center text-[10px] font-bold uppercase tracking-[.18em] text-[#aaa79e]">Heute</div>
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`chat-fade-up flex ${message.role === "user" ? "justify-end" : "items-end gap-2"}`}>
                {message.role === "bot" && <div className="mb-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fcb210] text-sm">☀</div>}
                <div className={`${message.role === "bot" ? "rounded-2xl rounded-tl-none bg-[#f0f1ef] text-[#272821]" : "rounded-2xl rounded-tr-none bg-[#fcb210] text-[#171717]"} max-w-[85%] px-4 py-3 text-[14px] leading-[1.45] shadow-sm`}>
                  {message.typing ? (
                    <span className="flex items-center gap-1 px-1 py-1">
                      <span className="typing-dot h-1.5 w-1.5 rounded-full bg-[#696b64]" />
                      <span className="typing-dot h-1.5 w-1.5 rounded-full bg-[#696b64]" />
                      <span className="typing-dot h-1.5 w-1.5 rounded-full bg-[#696b64]" />
                    </span>
                  ) : message.text}
                </div>
              </div>
            ))}

            {isContactStep && !submitted && (
              <div className="chat-fade-up ml-9 max-w-[calc(100%-2.25rem)] rounded-2xl rounded-tl-none border border-[#ebe9e2] bg-white p-4 shadow-[0_5px_20px_rgba(50,47,30,.07)]">
                <form onSubmit={submitContact} className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <input required value={contact.firstName} onChange={(e) => updateContact("firstName", e.target.value)} placeholder="Vorname" className="min-w-0 rounded-xl border border-[#deded7] bg-[#fcfcfa] px-3 py-2.5 text-[13px] outline-none transition focus:border-[#fcb210] focus:ring-2 focus:ring-[#fcb210]/20" />
                    <input value={contact.lastName} onChange={(e) => updateContact("lastName", e.target.value)} placeholder="Nachname" className="min-w-0 rounded-xl border border-[#deded7] bg-[#fcfcfa] px-3 py-2.5 text-[13px] outline-none transition focus:border-[#fcb210] focus:ring-2 focus:ring-[#fcb210]/20" />
                  </div>
                  <input required type="email" value={contact.email} onChange={(e) => updateContact("email", e.target.value)} placeholder="E-Mail-Adresse" className="w-full rounded-xl border border-[#deded7] bg-[#fcfcfa] px-3 py-2.5 text-[13px] outline-none transition focus:border-[#fcb210] focus:ring-2 focus:ring-[#fcb210]/20" />
                  <input required type="tel" value={contact.phone} onChange={(e) => updateContact("phone", e.target.value)} placeholder="Telefonnummer" className="w-full rounded-xl border border-[#deded7] bg-[#fcfcfa] px-3 py-2.5 text-[13px] outline-none transition focus:border-[#fcb210] focus:ring-2 focus:ring-[#fcb210]/20" />
                  <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#fcb210] px-4 py-3 text-[13px] font-bold transition hover:bg-[#e9a306] active:scale-[.98]">
                    Beratung anfragen <Send size={14} strokeWidth={2.5} />
                  </button>
                  <p className="flex items-center justify-center gap-1 text-center text-[10px] text-[#8d8d84]"><ShieldCheck size={12} /> Ihre Daten bleiben vertraulich.</p>
                </form>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
        </div>

        {!submitted && (
          <footer className="border-t border-[#eeede8] bg-white px-4 pb-4 pt-3 sm:px-6">
            {isAddressStep ? (
              <div className="relative flex gap-2">
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-3 text-[#999a91]" size={16} />
                  <input value={address} onChange={(e) => { setAddress(e.target.value); setShowSuggestion(e.target.value.length > 2); }} onKeyDown={(e) => e.key === "Enter" && chooseAddress()} placeholder="Strasse, Ort oder PLZ" className="w-full rounded-2xl border-2 border-[#e9e8df] bg-[#fcfcfa] py-3 pl-10 pr-3 text-[13px] outline-none transition focus:border-[#fcb210]" />
                  {showSuggestion && (
                    <button type="button" onClick={() => { setAddress("Bahnhofstrasse 12, 8001 Zürich"); setShowSuggestion(false); }} className="absolute bottom-[calc(100%+8px)] left-0 flex w-full items-center gap-2 rounded-xl border border-[#e9e8df] bg-white p-3 text-left text-[12px] shadow-lg">
                      <MapPin size={14} className="text-[#d59a0b]" /> Bahnhofstrasse 12, 8001 Zürich
                    </button>
                  )}
                </div>
                <button type="button" onClick={chooseAddress} disabled={!address.trim()} className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-2xl bg-[#fcb210] transition hover:bg-[#e9a306] disabled:cursor-not-allowed disabled:opacity-40"><ChevronRight size={19} /></button>
              </div>
            ) : !isContactStep ? (
              <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {currentQuestion.options.map((option) => (
                  <button type="button" key={option} onClick={() => chooseOption(option)} className={`shrink-0 rounded-full border-2 border-[#fcb210] px-4 py-2.5 text-[13px] font-semibold transition hover:bg-[#fff3cf] active:scale-[.97] ${selected === option ? "bg-[#fcb210] text-black" : "bg-white text-[#34352f]"}`}>
                    {option}
                  </button>
                ))}
              </div>
            ) : (
              <p className="flex items-center justify-center gap-2 py-1 text-center text-[11px] text-[#888980]"><Sparkles size={13} className="text-[#fcb210]" /> Nur noch ein Schritt – Ihre Anfrage ist kostenlos.</p>
            )}
            <p className="mt-2 flex items-center justify-center gap-1 text-[10px] text-[#aaa9a0]"><Check size={11} /> Unverbindlich · Kostenlos · In 2 Minuten erledigt</p>
          </footer>
        )}
      </section>
    </main>
  );
}