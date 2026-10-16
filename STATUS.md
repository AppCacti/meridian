# Meridian Status Board

Shared state for every agent and person working on Meridian. Update at the end of each session and push. Newest log entries first.

## Decisions waiting on Tan

From `WHAT_I_NEED_FROM_TAN.md` — none confirmed yet:

- [ ] Domain (recommended `meridiandealpartner.com`)
- [ ] Inbox / forwarding for `partners@`
- [ ] Calendar link (15 or 30 min)
- [ ] Payment route for the $15K Founding Desk
- [ ] UAE lawyer (DIFC/ADGM) for legal review
- [ ] Market emphasis: Dubai / Abu Dhabi / balanced
- [ ] First sector set
- [ ] Warm UAE intros

## Open work

- [ ] Restructure repo into `public/` (site only) and `docs/` (internal) so the root can't be deployed by accident
- [ ] Recover or recreate missing files: `assets/` (hero image, favicon) and `docs/` (legal-review questions, prospect + opportunity templates, sample-pack template, outreach sequence)
- [ ] Fix README (still points at a local Mac path)
- [ ] Swap placeholder email and calendar link once decided
- [ ] Oct 3 audit recommendations not yet applied: branch protection, GitHub Actions (link check + secret scan), Cloudflare Pages hookup

## Done

- 2026-10-16 — Added `CLAUDE.md` (agent guide + rules) and this status board

## Session log

### 2026-10-16 — "GitHub Meridian overview"
- Reviewed repo: 2 commits, no issues/PRs, site + launch docs at root, `public/` `docs/` `assets/` missing.
- Found no sync between agents; earlier sessions' work never reached the repo.
- Added `CLAUDE.md` + `STATUS.md` as the shared-memory system.

### Earlier sessions (outputs NOT in repo)
- 2026-10-03 — "GitHub infrastructure audit": found 31 missing assets, 8 recommendations. Branch `claude/stoic-gauss-4dqagn` was never pushed.
- 2026-08-08 — "Research Findersfeeglobal and develop meridian automation strategy" (archived).
- 2026-08-08 — "Learn from YouTube video on Meridian infrastructure" (archived).
- 2026-07-22 — "email outbound meridian" (archived).

If any of those produced files worth keeping, add them to `docs/` and note it here.
