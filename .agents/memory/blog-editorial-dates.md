---
name: Blog editorial dates
description: Policy for publication and modification dates in blog UI and structured data.
---

Never invent or derive a later editorial modification date from build, deployment, or request time. If an article has no recorded true modification date, use its publication date for both the visible update date and `dateModified`.

**Why:** The blog previously had publication dates but no trustworthy modification history; using the current runtime date would falsely imply ongoing editorial updates.

**How to apply:** When an article is genuinely edited, record an explicit modification date in its content data. Until then, keep the modification date equal to publication.