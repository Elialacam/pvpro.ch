---
name: Floating contact widget (callback vs WhatsApp)
description: The site has historically toggled its bottom-right floating widget between two implementations; how to switch and what to watch for
---

# Floating widget — two implementations, mutually exclusive

- The bottom-right floating contact element is mounted ONCE in `app/layout.tsx` (root,
  applies to every locale) and has flip-flopped between two components over time:
  - `CallbackWidget.tsx` — interactive chat-style consultant assistant (default OPEN):
    typing indicator → staged chat bubbles → inline conversational Rückruf ("call me back")
    form; collapses to an animated avatar FAB (rotating solar ring + online dot + teaser).
    Fields: Vorname, Nachname, Telefonnummer, E-Mail (NO address). German-only.
    Submits to Web3Forms with combined `FULL NAME`, `PHONE NUMBER`, `EMAIL`, `TYPE`.
    **Why default-open:** user wants it immediately visible; do NOT add a body scroll-lock
    (it traps mobile users — this is a floating widget, not a full-screen modal).
  - `WhatsAppFloating.tsx` — green round wa.me button (no form).
- Both hide themselves on `/anfrage` via `usePathname()`.
- The consultant photo `public/images/consultant.png` was deleted in a restore once and
  had to be recovered from git history — if CallbackWidget shows a broken image, restore
  the blob from an old commit (it is ~5MB PNG, a candidate for WebP optimization).

# Gotcha: shared animation CSS
- `LiveBar.tsx`'s live "ping" dot reused the WhatsApp badge's CSS class (`wa-online-ping`).
  When removing the WhatsApp widget, that animation is now `status-ping`/`@keyframes
  statusPing` in `globals.css`. **Why:** deleting "wa-*" CSS blindly broke an unrelated
  status indicator. Always grep class names across the repo before deleting CSS.
