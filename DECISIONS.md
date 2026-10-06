# DECISIONS — portfolio redesign

Why this site looks the way it does. Written so a reviewer can read the
reasoning, and so future-me doesn't undo a decision without remembering why.

## Positioning: one lane, stated first

- **Decision:** lead with "Backend Engineer — PHP/Laravel → Go" in the hero and nav.
- **Alternatives rejected:** "iOS & backend generalist" (loses the stack-match
  screen in a saturated junior market); "full-stack" (reads as breadth-first).
- **Trade-off:** iOS academy and the research paper are demoted to secondary
  sections. They still appear, but they no longer compete with the backend
  narrative for the first 6–15 seconds of a recruiter scan.
- **Evidence:** market research stream — Gojek/Tokopedia/Midtrans JDs screen on
  stack fit in seconds; "generalist" = silent rejection in 2026.

## Evidence-before-biography ordering

- **Decision:** hero = positioning line → one-liner → proof chips → CTAs →
  availability. Bio (education, GPA, awards) moves to section 07, near the end.
- **Alternatives rejected:** photo-hero + name-first (zero hiring scent per the
  IA stream; fold spent on identity, not position).
- **Trade-off:** less "personal", more "functional". The site is a hiring
  artifact, not a personal homepage.

## No marquee, no GPA in hero

- **Decision:** removed the 26s infinite marquee; replaced with static proof
  chips. Removed GPA from the hero; kept it in Education.
- **Alternatives rejected:** keep marquee (prominent motion reads as *less*
  credible per Fogg; eats a fixed mobile band during the 3s bounce window).
- **Trade-off:** less neobrutal "energy" in the hero. The static chips carry the
  same information at zero motion cost.

## Case studies as first-class sections

- **Decision:** three projects (RSC, AkhnaFin, Go API) get full case-study
  blocks following one template: context → problem → my role → decisions with
  trade-offs → hard part → result → evidence → what I'd change.
- **Alternatives rejected:** six equal bullet-cards (reads shallow; claims
  without evidence chain; "activity, not impact").
- **Trade-off:** more reading for the reviewer who stays; but that reviewer is
  the hiring manager in the 5–10 minute deep-eval moment, not the 6–15s
  recruiter scan. The scan is served by the Work cards above.

## Placeholders are visible, not hidden

- **Decision:** every missing piece of evidence is marked `[PLACEHOLDER]` in the
  data file and rendered with a dashed "pending" tag on the site.
- **Reason:** this is a working branch, not a launch. The placeholders are the
  to-do list. No claim ships to production until its evidence row is filled.

## What still needs real data before launch

See `[PLACEHOLDER]` markers in `src/data/portfolio.ts`:
- RSC metrics (members, check-ins, payments, uptime, incident timeline)
- RSC client reference (written permission + callable contact)
- AkhnaFin measurable (parse rate, TestFlight link, users)
- Go API: auth, tests, CI, deployed demo URL
- 3 English technical posts (drafts pending)
- 2 recommendation quotes (gym owner, co-author)
- ATS-clean one-page résumé PDF in `public/resume.pdf`
- Confirm phone number matches CV exactly
- Confirm graduation month + full-time availability date

## Sources

Synthesized from a 10-stream parallel research pass (recruiter behaviour,
engineering hiring manager, skills-based hiring, portfolio benchmarking,
work-sample validity, credibility & trust, market requirements, information
architecture, UX/conversion, red-team). Key references: Schmidt & Hunter 1998
(work-sample r=.54 vs resume r=.18); NNG fold/foraging research; Ashby referral
data (40% referred → interview vs ~6% inbound); 2025–2026 AI-cheating audits
(Codequiry 31.2% flagged; Greenhouse 91% suspect AI misrepresentation).
