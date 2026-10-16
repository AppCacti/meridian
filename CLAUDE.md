# Meridian Deal Partners — Agent Guide

Every Claude session working on this repo loads this file. Read it, then read `STATUS.md` before doing anything.

## What this is

Meridian Deal Partners is a discreet private-market research desk for emerging family offices in Dubai and Abu Dhabi. This repo holds the public website and the internal launch kit.

- Public promise: "A discreet deal desk before you build one in-house."
- First product: Founding Desk, $15K upfront. Then $25K/quarter, then $50K+ exclusive mandates.
- Positioning doctrine: `BRAND_AND_POSITIONING.md`. Launch order: `START_HERE_RUNBOOK.md`.

## Repo layout (current)

| File | Public? | Purpose |
|---|---|---|
| `index.html`, `styles.css`, `script.js` | Yes | One-page marketing site (static, no build step) |
| `client-desk.html` | Yes (demo) | "Meridian OS Workspace" client portal demo |
| `_headers`, `netlify.toml`, `vercel.json`, `robots.txt`, `sitemap.xml` | Yes | Hosting config |
| `*.md` (runbook, brand, plans, needs) | **No — internal** | Strategy, sales, legal, ops |

The README and docs reference `public/`, `docs/` and `assets/` folders that were never uploaded. Treat them as missing until someone adds them.

## Hard rules

1. **Never deploy the repo root.** The root contains private strategy docs. Only the website files go public.
2. **Never name AppCacti or HegemonicGrowth on any public page.** The public brand stays quiet, finance-native and research-led.
3. **No regulated-activity language** (investment advice, brokerage, custody, negotiation, success/transaction fees) on the site or in outreach until UAE counsel (DIFC/ADGM) approves.
4. Don't sign clients or collect money before legal review of fee language.
5. Contact email `partners@meridiandealpartner.com` is a placeholder until the domain and inbox are live.

## How agents stay in sync

The repo is the shared memory. Chat history in one session is invisible to every other session.

- **Start of work:** read `STATUS.md` (and open GitHub Issues if any).
- **End of work:** update `STATUS.md` — add a log entry, move items between Open/Done, record decisions — then commit and push. Unpushed work is lost when the container is reclaimed.
- Put durable outputs (research, templates, sample packs) in the repo, not only in chat or artifacts. Link any external artifact/Notion page from `STATUS.md`.
- Keep entries short and dated (YYYY-MM-DD).
