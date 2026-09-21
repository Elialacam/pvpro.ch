export default function ClosingGuideStyles() {
  return <style>{`
    .closing-guide-module {
      --closing-ink: #234239;
      --closing-deep: #17352e;
      --closing-muted: #557068;
      --closing-paper: #fffdf6;
      --closing-cream: #f6f0df;
      --closing-sun: #d59e21;
      --closing-sun-pale: #fff3c9;
      --closing-rule: #d7d9c9;
      color: var(--closing-ink);
      overflow-wrap: anywhere;
    }
    .closing-guide-module .closing-module-content { margin-top: 1.25rem; }
    .closing-guide-module h4 { margin: 0; color: var(--closing-deep); font-size: 1rem; font-weight: 850; line-height: 1.28; }
    .closing-guide-module p { margin: .4rem 0 0; color: var(--closing-muted); line-height: 1.58; }
    .closing-guide-module .guide-source-links { margin-top: .55rem; font-size: .81rem; line-height: 1.42; }
    .closing-guide-module .guide-source-links a { text-decoration-thickness: 1px; text-underline-offset: 2px; }
    .closing-guide-module .closing-item-value { display: block; margin-bottom: .34rem; color: #806014; font-size: .8rem; font-weight: 900; letter-spacing: .035em; line-height: 1.25; }
    .closing-guide-module .closing-item-detail { margin-top: .58rem; padding-left: .75rem; border-left: 2px solid #dbb75e; color: #74611f; font-size: .89rem; font-weight: 700; }
    .closing-guide-module .closing-kicker { margin: 0; color: #786019; font-size: .76rem; font-weight: 900; letter-spacing: .08em; text-transform: uppercase; }

    /* Uri: a dated legal sequence must be read before the choices below it. */
    .closing-guide-module .closing-uri { max-width: 65rem; }
    .closing-guide-module .closing-uri-timeline { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0; margin: 0; padding: 0; list-style: none; border: 1px solid var(--closing-rule); background: var(--closing-rule); }
    .closing-guide-module .closing-uri-timeline li { position: relative; min-width: 0; padding: 1rem 1rem 1.05rem; background: var(--closing-paper); }
    .closing-guide-module .closing-uri-timeline li:nth-child(2) { background: #f8f4e7; }
    .closing-guide-module .closing-uri-timeline li:last-child { background: var(--closing-sun-pale); }
    .closing-guide-module .closing-uri-dot { display: grid; place-items: center; width: 1.85rem; height: 1.85rem; margin-bottom: .78rem; border-radius: 50%; background: var(--closing-deep); color: #fff9e7; font-size: .71rem; font-weight: 900; }
    .closing-guide-module .closing-uri-timeline li:last-child .closing-uri-dot { background: #9a7013; }
    .closing-guide-module .closing-uri-decisions { margin-top: 1.1rem; padding-top: 1rem; border-top: 2px solid var(--closing-sun); }
    .closing-guide-module .closing-uri-decisions > div { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: .7rem; margin-top: .7rem; }
    .closing-guide-module .closing-uri-decisions article { min-width: 0; padding: 1rem; border: 1px solid var(--closing-rule); border-bottom: 4px solid #d7a42a; background: var(--closing-paper); }

    /* Time and jurisdiction comparisons: two documents, not two interchangeable cards. */
    .closing-guide-module .closing-split { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .closing-guide-module .closing-split > section { min-width: 0; border: 1px solid var(--closing-rule); background: var(--closing-paper); }
    .closing-guide-module .closing-split > section > header { display: flex; align-items: baseline; gap: .68rem; padding: .9rem 1rem; border-bottom: 1px solid var(--closing-rule); }
    .closing-guide-module .closing-split > section > header > span { color: #96701b; font-size: .73rem; font-weight: 900; letter-spacing: .06em; }
    .closing-guide-module .closing-split > section > header h4 { font-size: .87rem; letter-spacing: .045em; text-transform: uppercase; }
    .closing-guide-module .closing-column-items article { padding: 1rem; border-bottom: 1px solid var(--closing-rule); }
    .closing-guide-module .closing-column-items article:last-child { border-bottom: 0; }
    .closing-guide-module .closing-split--vaud > section:first-child { border-top: 4px solid var(--closing-deep); }
    .closing-guide-module .closing-split--vaud > section:last-child { border-top: 4px solid var(--closing-sun); background: #fff9e9; }
    .closing-guide-module .closing-split--law > section:first-child { border-top: 4px solid var(--closing-deep); }
    .closing-guide-module .closing-split--law > section:last-child { border-top: 4px solid #b5841d; background: #fff8e7; }
    .closing-guide-module .closing-split--jurisdictions { gap: 1.35rem; }
    .closing-guide-module .closing-split--jurisdictions > section:first-child { border-top: 6px solid var(--closing-deep); }
    .closing-guide-module .closing-split--jurisdictions > section:last-child { border: 2px solid #c49525; border-top-width: 6px; background: #fff7dd; }
    .closing-guide-module .closing-split--jurisdictions > section:last-child > header { background: #f6df9b; border-bottom-color: #d3b05a; }

    /* Wallis: deliberately sequential, with no implied legal shortcut. */
    .closing-guide-module .closing-pathway { counter-reset: closing-step; display: grid; gap: 0; max-width: 59rem; margin: 0; padding: 0; list-style: none; }
    .closing-guide-module .closing-pathway li { position: relative; display: grid; grid-template-columns: 2.7rem minmax(0, 1fr); gap: .85rem; min-width: 0; padding: 0 0 1.15rem; }
    .closing-guide-module .closing-pathway li > span { display: grid; z-index: 1; place-items: center; width: 2rem; height: 2rem; border: 1px solid #b6c9bb; border-radius: 50%; background: var(--closing-paper); color: #886619; font-size: .72rem; font-weight: 900; }
    .closing-guide-module .closing-pathway li:not(:last-child)::after { content: ""; position: absolute; top: 2rem; bottom: .15rem; left: 1rem; width: 1px; background: #c9d4c8; }
    .closing-guide-module .closing-pathway li > div { min-width: 0; padding: .2rem 0; }
    .closing-guide-module .closing-pathway--mini { display: grid; grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr)); gap: 1px; max-width: none; border: 1px solid var(--closing-rule); background: var(--closing-rule); }
    .closing-guide-module .closing-pathway--mini li { display: block; min-height: 10rem; padding: 1rem; background: var(--closing-paper); }
    .closing-guide-module .closing-pathway--mini li > span { margin-bottom: .8rem; }
    .closing-guide-module .closing-pathway--mini li::after { display: none; }

    /* Zug: an actual choice, then a separate incentive condition. */
    .closing-guide-module .closing-formula { display: flex; flex-wrap: wrap; align-items: baseline; gap: .45rem .8rem; padding: .9rem 1rem; border-left: 4px solid var(--closing-sun); background: var(--closing-cream); }
    .closing-guide-module .closing-formula span { color: var(--closing-muted); font-size: .9rem; font-weight: 750; }
    .closing-guide-module .closing-formula b { color: var(--closing-deep); font-size: clamp(1.1rem, 2.2vw, 1.45rem); letter-spacing: -.03em; }
    .closing-guide-module .closing-choice-cards { display: grid; grid-template-columns: 1fr 1fr; gap: .8rem; margin-top: .8rem; }
    .closing-guide-module .closing-choice-cards article { min-width: 0; padding: 1.1rem; border: 1px solid var(--closing-rule); }
    .closing-guide-module .closing-choice-card--solar { border-top: 4px solid var(--closing-deep)!important; background: #f2f6ec; }
    .closing-guide-module .closing-choice-card--fee { border-top: 4px solid var(--closing-sun)!important; background: #fff9e9; }
    .closing-guide-module .closing-choice-no { display: block; margin-bottom: .7rem; color: #7c6119; font-size: .74rem; font-weight: 900; letter-spacing: .08em; text-transform: uppercase; }
    .closing-guide-module .closing-bonus-cards { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .8rem; }
    .closing-guide-module .closing-bonus-cards article { position: relative; min-width: 0; padding: 1rem 1rem 1rem 1.3rem; border: 1px solid var(--closing-rule); background: var(--closing-paper); }
    .closing-guide-module .closing-bonus-rule { position: absolute; inset: .9rem auto .9rem 0; width: 4px; background: var(--closing-sun); }
    .closing-guide-module .closing-bonus-cards article:nth-child(2n) .closing-bonus-rule { background: var(--closing-deep); }

    .closing-guide-module .closing-rows { margin: 1.35rem 0 0; border-top: 1px solid var(--closing-rule); }
    .closing-guide-module .closing-rows > div { display: grid; grid-template-columns: minmax(9rem, .8fr) 1fr 1fr; gap: .5rem 1rem; padding: .85rem .12rem; border-bottom: 1px solid var(--closing-rule); font-size: .92rem; }
    .closing-guide-module .closing-rows dt { font-weight: 850; }
    .closing-guide-module .closing-rows dd { margin: 0; color: var(--closing-muted); line-height: 1.45; }
    .closing-guide-module .closing-row-sources { grid-column: 1 / -1; font-size: .82rem; }

    @media (min-width: 768px) and (max-width: 1023px) {
      .closing-guide-module .closing-uri-timeline, .closing-guide-module .closing-uri-decisions > div { grid-template-columns: repeat(3, minmax(0, 1fr)); }
      .closing-guide-module .closing-pathway--mini { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }
    @media (min-width: 1024px) and (max-width: 1439px) {
      .closing-guide-module .closing-uri-timeline li { padding: .9rem; }
    }
    @media (max-width: 767px) {
      .closing-guide-module .closing-uri-timeline, .closing-guide-module .closing-uri-decisions > div, .closing-guide-module .closing-split, .closing-guide-module .closing-choice-cards, .closing-guide-module .closing-bonus-cards { grid-template-columns: 1fr; }
      .closing-guide-module .closing-uri-timeline li { padding: .95rem; }
      .closing-guide-module .closing-uri-decisions { margin-top: .9rem; }
      .closing-guide-module .closing-split--jurisdictions { gap: .85rem; }
      .closing-guide-module .closing-pathway--mini { grid-template-columns: 1fr; }
      .closing-guide-module .closing-pathway--mini li { min-height: 0; }
      .closing-guide-module .closing-rows > div { grid-template-columns: 1fr; gap: .3rem; }
      .closing-guide-module .closing-row-sources { grid-column: auto; margin-top: .25rem!important; }
    }
  `}</style>;
}