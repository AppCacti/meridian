# Meridian Status Board

Shared state for every agent and person working on Meridian. Update at the end of each session and push. Newest log entries first.

Live operational state lives in Notion (Command Hub) and the fleet board (`SYNC.md` / `tasks.jsonl` on the Mac). This file covers the repo and links out to those.

## Snapshot — 2026-10-16

| Area | State | Source |
|---|---|---|
| Outbound | ~650 sends all-time, ~61 this week, ~48 replies, ~12K queued | Morning pulse 2026-10-15 |
| Inbox | `partners@meridiandealpartner.com` live; inbound replies forwarded by email (Slack alert channel archived) | Gmail |
| Recent replies | Mid-Oct threads incl. "Before the banker gets appointed" and "who is crowding into private markets before the print"; a few unsubscribes | Gmail |
| Pipeline | Tarsadia (Jay Santoro) intro call 2026-08-07: healthcare clinic roll-ups, reviewing pricing. Claims unverified, no mandate yet | Notion Granola notes |
| Collateral | Pitch site (meridian-pitch.tan-peak.workers.dev), DocSend room "Meridian SuperInteligence" + NDA, Playbook PDF, Closing Deck | Gmail / Notion |
| Maturity (Aug self-assessment) | Relationship 9/10 · Client OS 9 · Origination 8.5 · Research 8 · Commercial intel 6 · Enterprise allocation 4 | Notion "Meridian State + more" |

## Decisions waiting on Tan

- [ ] Is this repo still the source for the public site, or does meridiandealpartner.com now deploy from somewhere else? If elsewhere, archive this repo or mirror the live site into it.
- [ ] Should the fleet's `SYNC.md` / `tasks.jsonl` be mirrored here, so cloud sessions can see fleet state?
- [ ] Revive or replace the archived Slack alert channel
- [ ] Legal structure for capital raising and placement work (broker-dealer partner?)
- [ ] Tarsadia follow-up: pricing route, Genevieve as monthly contact

## Open work (repo)

- [ ] Rewrite `index.html` copy to match the current offer (still the June "UAE research desk" pitch), or confirm it's retired
- [ ] Restructure into `public/` + `docs/` so the root can't be deployed by accident
- [ ] Recover missing `assets/` and `docs/` files, or drop references to them
- [ ] Fix README (local Mac path); mark the June docs as historical
- [ ] Oct 3 audit recs: branch protection, GitHub Actions (link check + secret scan)

## Done

- 2026-10-16 — Added `CLAUDE.md` (agent guide, current-state summary, rules) and this status board

## Session log

### 2026-10-16 — "GitHub Meridian overview"
- Repo is a June snapshot; current Meridian state lives in Notion, Gmail, and the Mac/VPS fleet.
- Found the real agent sync layer: `coord.bridge` on the Mac maintains `SYNC.md` + `tasks.jsonl`. Cloud sessions can't see it.
- Wrote current-state summary into `CLAUDE.md` and this file.

### Earlier cloud sessions (outputs NOT in repo)
- 2026-10-03 — "GitHub infrastructure audit": 31 missing assets, 8 recommendations; branch `claude/stoic-gauss-4dqagn` never pushed.
- 2026-08-08 — "Research Findersfeeglobal and develop meridian automation strategy" (archived).
- 2026-08-08 — "Learn from YouTube video on Meridian infrastructure" (archived).
- 2026-07-22 — "email outbound meridian" (archived).
