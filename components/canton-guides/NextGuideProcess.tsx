import { cantonGuideUi, type CantonGuideLanguage } from '@/lib/canton-guide-ui';

const stepIcons = [
  {
    number: '01',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M14 7h15l7 7v27H14z" />
        <path d="M29 7v8h7M20 23h10M20 30h10M20 37h6" />
      </svg>
    ),
  },
  {
    number: '02',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 24a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" />
        <path d="M11 39c1.7-7.1 6-10.6 13-10.6S35.3 31.9 37 39M37 12v9M32.5 16.5h9" />
      </svg>
    ),
  },
  {
    number: '03',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M11 10h16v28H11zM27 15h10v23H21" />
        <path d="M16 18h6M16 24h6M16 30h6M30 22h3M30 28h3M30 34h3" />
      </svg>
    ),
  },
];

export default function NextGuideProcess({ lang = 'de' }: { lang?: CantonGuideLanguage }) {
  const ui = cantonGuideUi[lang].process;
  return (
    <section className="next-guide-process" aria-labelledby="next-guide-process-title">
      <div className="container-custom next-guide-process__inner">
        <div className="next-guide-process__heading">
          <span className="next-guide-process__eyebrow">{ui.eyebrow}</span>
          <h2 id="next-guide-process-title">{ui.title}</h2>
        </div>
        <ol className="next-guide-process__list">
          {ui.steps.map((step, index) => (
            <li key={step.title} className="next-guide-process__step">
              <div className="next-guide-process__topline">
                <span className="next-guide-process__number">{stepIcons[index].number}</span>
                <span className="next-guide-process__icon">{stepIcons[index].icon}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              {index < ui.steps.length - 1 && <span className="next-guide-process__connector" aria-hidden="true" />}
            </li>
          ))}
        </ol>
      </div>
      <style>{`
        .next-guide-process {
          position: relative;
          overflow: hidden;
          padding: clamp(4.5rem, 8vw, 7.5rem) 0;
          background: #eef1e7;
          color: var(--guide-ink);
        }
        .next-guide-process::before {
          position: absolute;
          width: 28rem;
          height: 28rem;
          border: 1px solid rgba(213,163,41,.28);
          border-radius: 50%;
          content: "";
          right: -13rem;
          top: -17rem;
          pointer-events: none;
        }
        .next-guide-process__inner { position: relative; }
        .next-guide-process__heading { max-width: 45rem; }
        .next-guide-process__eyebrow {
          display: block;
          margin-bottom: .8rem;
          color: #816b1d;
          font-size: .72rem;
          font-weight: 800;
          letter-spacing: .14em;
          text-transform: uppercase;
        }
        .next-guide-process h2 {
          margin: 0;
          font-family: var(--font-sans);
          font-size: clamp(2rem, 3.75vw, 3.35rem);
          font-weight: 700;
          letter-spacing: -.05em;
          line-height: 1.06;
        }
        .next-guide-process__list {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.2rem;
          margin: clamp(2.3rem, 4vw, 3.6rem) 0 0;
          padding: 0;
          list-style: none;
        }
        .next-guide-process__step {
          position: relative;
          min-height: 15.75rem;
          border: 1px solid rgba(23,50,45,.15);
          border-radius: 1rem;
          background: #fffdf7;
          padding: 1.5rem 1.5rem 1.65rem;
          box-shadow: 0 10px 24px rgba(23,50,45,.055);
        }
        .next-guide-process__step:nth-child(2) { transform: translateY(1.5rem); }
        .next-guide-process__topline { display: flex; justify-content: space-between; align-items: flex-start; }
        .next-guide-process__number {
          color: #98751c;
          font-size: .8rem;
          font-weight: 850;
          letter-spacing: .11em;
        }
        .next-guide-process__icon {
          display: grid;
          width: 3rem;
          height: 3rem;
          place-items: center;
          border-radius: .8rem;
          background: #f7efd6;
          color: #735c18;
        }
        .next-guide-process__icon svg { width: 1.65rem; height: 1.65rem; fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.75; }
        .next-guide-process h3 { max-width: 15rem; margin: 2.15rem 0 0; font-size: 1.18rem; font-weight: 800; letter-spacing: -.025em; line-height: 1.2; }
        .next-guide-process p { max-width: 17rem; margin: .65rem 0 0; color: var(--guide-muted); font-size: .94rem; line-height: 1.58; }
        .next-guide-process__connector {
          position: absolute;
          z-index: 2;
          top: 3rem;
          right: -1.2rem;
          width: 1.2rem;
          border-top: 1px solid #c2cbbd;
        }
        @media (max-width: 767px) {
          .next-guide-process { padding: 3.6rem 0; }
          .next-guide-process__list { grid-template-columns: 1fr; gap: .85rem; margin-top: 2rem; }
          .next-guide-process__step, .next-guide-process__step:nth-child(2) { min-height: 0; transform: none; padding: 1.25rem 1.25rem 1.35rem; }
          .next-guide-process h3 { margin-top: 1.35rem; max-width: none; }
          .next-guide-process p { max-width: none; }
          .next-guide-process__connector { top: auto; right: auto; bottom: -.85rem; left: 1.7rem; width: 1px; height: .85rem; border-top: 0; border-left: 1px solid #c2cbbd; }
        }
      `}</style>
    </section>
  );
}