---
name: Lead submission flow
description: Where PVPro form/callback leads actually go, and the user's naming for it
---
# Lead flow

- The user calls their lead system **"slead.ch"**; in the codebase it is **LeadSync** (webhook at `lead-suryoyo.replit.app`). Same thing.
- Both the main quote form (`AnfrageForm.tsx`) and the chat callback widget (`CallbackWidget.tsx`) submit through the internal route `app/api/anfrage/route.ts`, which forwards to LeadSync and fires a Meta CAPI Lead event.
- **Web3Forms was fully removed** (June 2026). Do NOT reintroduce it. If a form needs to send leads, route it through `/api/anfrage`, never to an external form service.
- Privacy policies (de/en/fr/it) no longer list a form processor — if the user wants slead.ch named there, ask for its legal entity + privacy URL first.

**Why:** user stated "web3forms non esiste più, eliminalo completamente" and wants all leads in their lead system.
