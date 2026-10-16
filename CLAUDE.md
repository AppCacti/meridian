# Meridian Deal Partners — Agent Guide

Every Claude session working on this repo loads this file. Read it, then read `STATUS.md` before doing anything.

## What this is

**This repo is a June 2026 snapshot.** It holds the original website and launch kit. Meridian has moved well past it; see "Meridian now" below and `STATUS.md`.

Original concept (June): a discreet private-market research desk for emerging UAE family offices, sold as a $15K Founding Desk, then $25K/quarter, then $50K+ mandates. Docs: `BRAND_AND_POSITIONING.md`, `START_HERE_RUNBOOK.md`.

## Meridian now (as of 2026-10-16)

An AI-driven private-markets origination platform. Humans (Tan, Vivek, Genevieve) take calls and close; agents source, send, and triage.

- **Offer has widened** beyond research retainers: buy-/sell-side origination, roll-ups, capital raising, debt/equity placement, private credit, family-office and strategic introductions, client portals.
- **Anchor sector:** healthcare services (clinics, DSOs, roll-ups). Also commercial HVAC/industrials and power/infrastructure sourcing patterns. Gulf family offices and US allocators are both targets.
- **Outbound engine is live:** `partners@meridiandealpartner.com` is a real inbox. ~650 sends all-time, ~48 replies, ~12K in queue (morning pulse, 2026-10-15).
- **Source of truth is Notion, not this repo:** "MERIDIAN DEAL PARTNERS — Command Hub" (pipeline, CRM, execution board, sector intel, memos) and "Meridian State + more" (capability assessment).

### The three layers (Tan's framing, Sept 2026)
Meridian is really **an intelligence company with an origination business attached**. Positioning line: "the intelligence and origination layer for private markets."

1. **Origination engine.** Monetizes now: deal placement, origination, and transactions, plus research retainers. Fee model under discussion is ~3–7% of transaction value (see hard rule 3).
2. **Economic connection graph (the "Palantir" layer).** More than 500M records across securities disclosures, private capital, corporate registries, and physical assets. The work is **entity resolution**: who controls what, where capital moves, which counterparties repeatedly transact together. Sub-graphs: ownership, capital, relationship, founder, advisor, portfolio, acquisition. Example: AI infrastructure, linking data-center projects ↔ owners ↔ power generation ↔ grid interconnection ↔ capital providers. The moat is the organized graph, not the models.
3. **Intelligence layer / Quant Lab.** Filing-based signals and anomaly scores built on the graph. Notion mentions ~375 hand-built signals, purged cross-validation, and 14 live sourcing patterns (e.g. `dso-specialty-gap`, `power-queue-position`, `powered-land-bottleneck`). Long-term ambition: a **quantitative hedge fund** (Renaissance/HRT as reference points) and/or an AlphaSense/Preqin-style financial-intelligence category. Team-building is under way, including a former Citadel quant (author of Power2026.ai).

Flywheel: economic data → relationship graph → intelligence → origination → transactions → more data.

Other surfaces: the client portal at `portal.meridiandealpartner.com` (per-client workspaces such as Tarsadia and Action Black, plus an internal `/command` centre), an AI voice-caller agent, a WhatsApp/WeChat layer in progress for Gulf and Asian deal flow, the "Meridian SuperInteligence" DocSend room, and the Meridian data room on Google Drive. Tan has said he isn't attached to the Meridian name; a "Meridian AI" startup already exists.

Key sources: Tan's emails to Amandeep (Benchmark21), "Quant fund & Meridian Intelligence" (2026-09-10) and "GetBananaSplits + Meridian — strategic update" (2026-09-25); Notion "Meridian State + more"; the Notion reading library tagged "Quant Lab".

### The agent fleet
- **Mac (the brain):** launchd daemons that orchestrate everything and never send Meridian mail. `coord.bridge` keeps the fleet's shared coordination board (`SYNC.md` + `tasks.jsonl`) in sync. **That board is the agents' real sync layer, and it lives on the Mac, not in this repo.**
- **EmpireHub VPS:** data factory plus fleet sender. SEC Form D (raisers), 13F and Form ADV (allocators) pipelines, reply classifier, mandate PDF engine, demand↔supply matching.
- **Ashley VPS:** the trusted-deliverability operator sending from `partners@`. Handles sourcing, outreach, replies, and the morning brief.
- **Reporting:** the morning pulse email ("Vivienne") and the dashboard at empire-hq-dks.pages.dev. The Slack alert channel is archived, so `reply_forward.py` now emails inbound replies.
- Full map: Notion "🛰️ Meridian — Agent Operations Map".

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
3. **No regulated-activity language** (investment advice, brokerage, custody, negotiation, success/transaction fees) on the site or in outreach until counsel approves. Capital raising and placement are regulated (US broker-dealer, UAE DIFC/ADGM); check the partner structure before promising them.
4. Don't sign clients or collect money before legal review of fee language.
5. Counterparty claims from calls (mandates, check sizes, track records) are unverified until a research owner confirms them.
6. Never commit secrets, server IPs, or credentials to this repo, including client-portal logins. Some exist in plaintext in email; leave them there.

## How agents stay in sync

The repo is the shared memory. Chat history in one session is invisible to every other session.

- **Start of work:** read `STATUS.md` (and open GitHub Issues if any).
- **End of work:** update `STATUS.md` — add a log entry, move items between Open/Done, record decisions — then commit and push. Unpushed work is lost when the container is reclaimed.
- Put durable outputs (research, templates, sample packs) in the repo, not only in chat or artifacts. Link any external artifact/Notion page from `STATUS.md`.
- Keep entries short and dated (YYYY-MM-DD).
