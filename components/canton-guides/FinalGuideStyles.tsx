export default function FinalGuideStyles() {
  return <style>{`
    .final-guide-module {
      --final-ink: #24463c;
      --final-deep: #17322d;
      --final-paper: #fffdf7;
      --final-wash: #f2f5eb;
      --final-gold: #a97815;
      --final-rule: #d3dcd1;
      --final-muted: #587066;
      color: var(--final-ink);
      overflow-wrap: anywhere;
    }
    .final-guide-module .final-module-content { margin-top: 1.2rem; }
    .final-guide-module h4 { margin: 0; font-size: 1rem; font-weight: 850; line-height: 1.27; color: var(--final-deep); }
    .final-guide-module p { margin: .38rem 0 0; color: var(--final-muted); line-height: 1.58; }
    .final-guide-module .guide-source-links { margin-top: .55rem; font-size: .81rem; line-height: 1.4; }
    .final-guide-module .guide-source-links a { text-decoration-thickness: 1px; text-underline-offset: 2px; }
    .final-guide-module .final-value {
      display: block; margin-bottom: .34rem; color: #806119; font-size: .8rem;
      font-weight: 900; letter-spacing: .04em; line-height: 1.25;
    }
    .final-guide-module .final-detail {
      margin-top: .55rem; padding-left: .7rem; border-left: 2px solid #d6b660;
      color: #6f631e; font-size: .89rem; font-weight: 700;
    }
    .final-guide-module .final-rows { margin: 1.3rem 0 0; border-top: 1px solid var(--final-rule); }
    .final-guide-module .final-rows > div {
      display: grid; grid-template-columns: minmax(10rem, .8fr) 1fr 1fr; gap: .55rem 1rem;
      padding: .85rem .15rem; border-bottom: 1px solid var(--final-rule); font-size: .92rem;
    }
    .final-guide-module .final-rows dt { font-weight: 850; }
    .final-guide-module .final-rows dd { margin: 0; color: var(--final-muted); line-height: 1.45; }
    .final-guide-module .final-rows .final-row-sources { grid-column: 1 / -1; font-size: .82rem; }

    /* Schwyz — one deliberate check after the other */
    .final-guide-module .final-cadastre-flow { counter-reset: cadastre; display: grid; gap: 0; margin: 0; padding: 0; list-style: none; max-width: 58rem; }
    .final-guide-module .final-cadastre-flow > li {
      counter-increment: cadastre; position: relative; display: grid; grid-template-columns: 3.25rem 1fr;
      gap: .85rem; padding: 0 0 1.35rem; min-width: 0;
    }
    .final-guide-module .final-cadastre-flow > li::before {
      content: counter(cadastre, decimal-leading-zero); display: grid; place-items: center; width: 2.35rem; height: 2.35rem;
      border: 1px solid #b6c7b6; border-radius: 50%; background: var(--final-paper); color: var(--final-gold);
      font-size: .77rem; font-weight: 900; z-index: 1;
    }
    .final-guide-module .final-cadastre-flow > li:not(:last-child)::after {
      content: ""; position: absolute; left: 1.15rem; top: 2.35rem; bottom: .2rem; width: 1px; background: #cbd7ca;
    }
    .final-guide-module .final-cadastre-flow > li > div { padding: .36rem 0; min-width: 0; }

    /* Solothurn — what applies / what did not become law */
    .final-guide-module .final-law-comparison { display: grid; grid-template-columns: 1fr 1fr; gap: 1.1rem; }
    .final-guide-module .final-law-column { border-top: 4px solid var(--final-deep); background: var(--final-paper); }
    .final-guide-module .final-law-column--not { border-top-color: #b58a27; background: #fff9e9; }
    .final-guide-module .final-law-column > h4 { padding: .8rem 1rem; border-bottom: 1px solid var(--final-rule); font-size: .86rem; letter-spacing: .055em; text-transform: uppercase; }
    .final-guide-module .final-law-column--not > h4 { color: #745b1b; }
    .final-guide-module .final-law-list { margin: 0; padding: 0; list-style: none; }
    .final-guide-module .final-law-list li { padding: 1rem; border-bottom: 1px solid var(--final-rule); }
    .final-guide-module .final-law-list li:last-child { border-bottom: 0; }

    /* St. Gallen — four equally valid directions */
    .final-guide-module .final-options { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .8rem; }
    .final-guide-module .final-option {
      min-width: 0; min-height: 12rem; padding: 1.05rem; border: 1px solid var(--final-rule);
      border-bottom: 4px solid #b5caae; background: linear-gradient(135deg, #fffdf7, #f1f5ed);
    }
    .final-guide-module .final-option:nth-child(2n) { border-bottom-color: #d4b462; background: linear-gradient(135deg, #fffdf7, #fbf5e6); }
    .final-guide-module .final-option:nth-child(3n) { border-bottom-color: #6f9985; }

    /* Ticino — authorities hand off a project */
    .final-guide-module .final-fer-flow { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: .8rem; margin: 0; padding: 0; list-style: none; }
    .final-guide-module .final-fer-flow li { min-width: 0; position: relative; padding: 1rem; background: var(--final-paper); border: 1px solid var(--final-rule); }
    .final-guide-module .final-fer-flow li::before { content: counter(fer, decimal-leading-zero); color: var(--final-gold); font-size: .75rem; font-weight: 900; }
    .final-guide-module .final-fer-flow { counter-reset: fer; }
    .final-guide-module .final-fer-flow li { counter-increment: fer; }
    .final-guide-module .final-fer-flow h4 { margin-top: .38rem; }
    /* Thurgau — threshold branches, not a flow */
    .final-guide-module .final-efficiency { display: grid; grid-template-columns: 1.1fr 1fr 1fr; border: 1px solid var(--final-rule); background: var(--final-rule); gap: 1px; }
    .final-guide-module .final-efficiency article { min-width: 0; padding: 1.05rem; background: var(--final-paper); }
    .final-guide-module .final-efficiency article:first-child { background: #edf4e9; }
    .final-guide-module .final-efficiency article:nth-child(2) { background: #fff9e9; }
    .final-guide-module .final-efficiency article:last-child { background: #f9efdf; }
    .final-guide-module .final-efficiency .final-value { font-size: clamp(1rem, 2vw, 1.35rem); letter-spacing: -.025em; color: var(--final-deep); }
    .final-guide-module .final-branch-status { display: block; margin-bottom: .7rem; color: #796019; font-size: .74rem; font-weight: 900; letter-spacing: .07em; text-transform: uppercase; }

    @media (min-width: 768px) and (max-width: 1000px) {
      .final-guide-module .final-fer-flow { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }
    @media (max-width: 767px) {
      .final-guide-module .final-law-comparison, .final-guide-module .final-options, .final-guide-module .final-fer-flow, .final-guide-module .final-efficiency { grid-template-columns: 1fr; }
      .final-guide-module .final-option { min-height: 0; }
      .final-guide-module .final-rows > div { grid-template-columns: 1fr; gap: .28rem; }
      .final-guide-module .final-rows .final-row-sources { grid-column: auto; margin-top: .28rem; }
    }
  `}</style>;
}