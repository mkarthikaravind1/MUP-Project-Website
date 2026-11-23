# Every claim on the site, and where it comes from

Source paths are in the project repository `Multilingual_Call_Intelligence/`.
All text and numbers live in `src/content.ts`.

## Numbers

| Claim on the site | Section | Source file |
|---|---|---|
| 121 SRD requirements: 87 met, 25 waiting, 9 not met | Results | `SRD-STATUS.md` ("Totals") |
| Reasons for the 9 not met (CRM, failover, DR test, pen test, 1.5 s question, data-protection review, reliability figure) | Results | `SRD-STATUS.md` ("What is not met, in one place") |
| 3,000+ automated backend tests | Results | `docs/review-meeting-scripts-2026-11-20.md` (Karthik), `docs/timeline-update-2026-11-20.gs` row 3.4 |
| Transcript line ~1.0 s after speaker stops (0.9–1.3 s) streaming; ~2 s (1.4–2.4 s) chunked | Results, Features | `SRD-STATUS.md` row 44; `GO-LIVE-CHECKLIST.md` §7; `docs/Why Groq and Sarvam AI (final).docx` |
| ~13,000 tokens per 2-minute call; 27,777 / 43 requests → 12,906 / 11; 17,501 for a 99 s Tamil–English call | Results | `README.md` ("LLM usage and Groq limits"); `Why Groq and Sarvam AI (final).docx` |
| Load test: 25, 50, 100 calls kept up; 200 fell just behind; stand-in services on a laptop | Results | `GO-LIVE-CHECKLIST.md` §8 |
| 5 languages accepted; English and Tamil–English tested end to end; Telugu, Kannada, Malayalam need recordings | Results, Scope | `SRD-STATUS.md` rows 1, 110, 115; `README.md` ("Multilingual support") |
| 10 complaint categories (names listed) | Results, How | `SRD-STATUS.md` row 8; `README.md` |
| Accuracy sample, 10 Oct 2026: categories 15/17 (88%), several categories 2/3, sentiment 3/5 exact and 5/5 right side, ASR not measured; targets 92/88/90/95% | Results | `docs/accuracy-sample/report.md`; `GO-LIVE-CHECKLIST.md` §7 |
| Groq 8.37 s vs 28.99 s to first answer for gpt-oss-20b (Artificial Analysis, 5 Nov 2026) | Architecture | `docs/Why Groq and Sarvam AI (final).docx` |
| Sarvam Saaras v3: 22 Indian languages + English, codemix, streaming | Architecture | `docs/Why Groq and Sarvam AI (final).docx`; `README.md` |
| BoM ₹3,25,201 for one year incl. GST; categories AWS, Sarvam, Groq, Plivo, MSG91 + DLT, .in domain | Deployment | `docs/handoff-2026-10-28-live-deployment.md` (total and service list only) |
| ~50 calls a day, 3 minutes each | Deployment | `docs/handoff-2026-10-28-live-deployment.md` |
| EC2 t3.xlarge Mumbai 1-year reserved, 100 GB disk, 100 GB S3 | Deployment | `docs/handoff-2026-10-28-live-deployment.md` |
| Caddy HTTPS front door, only Caddy open; compose stack caddy/web/backend/postgres/redis + Grafana | Deployment, Architecture | `DEPLOYMENT.md` ("What runs"); `SRD-STATUS.md` row 64 |
| S3 via the server's IAM role, no keys in config | Deployment | `SRD-STATUS.md` row 65; review script (Karthik) |
| Demo hosting: Cloudflare (frontend), Render (backend), Neon (database) | Live MVP | `docs/timeline-update-2026-11-20.gs` row 4.2 |

## Features and scope

| Claim | Source |
|---|---|
| Live transcript in own script, English kept in English letters, language tag per line | `README.md` ("Multilingual support"); `SRD-STATUS.md` rows 3, 27 |
| Speaker roles: separate Plivo tracks, or voices + wording on mixed audio | `SRD-STATUS.md` row 2; `README.md` ("Speaker identification") |
| Complaint confidence ("90% sure"), "Several issues" flag | `SRD-STATUS.md` rows 29, 30 |
| Five tones per customer line, shown with their name | `SRD-STATUS.md` rows 4, 70; `frontend/src/app/design/tokens.css` |
| Up to three next questions, Accept / Skip, checked against what was said | `SRD-STATUS.md` rows 6, 35; `README.md` (`QUESTION_ANSWERED_CHECK`) |
| Service estimate from Excel price list, per vehicle model, GST per row | `README.md` ("Key features"); `frontend/src/app/pages/PriceListPage.tsx` |
| Danger words ("manager", "consumer forum") caught by rules immediately; supervisor acknowledge/resolve | `Why Groq and Sarvam AI (final).docx`; `README.md` ("Escalation") |
| Post-call summary: issues raised, what we promised, still open, next step | `frontend/src/app/features/live-call/components/PostCallSummaryPanel.tsx` |
| Reports export CSV / Excel / PDF, Indian scripts in PDF | `SRD-STATUS.md` rows 68, 94 |
| Complaint stages detected → probed → covered → resolved; grouping and filters | `README.md` ("Complaint detection"); `frontend/src/app/pages/ComplaintsPage.tsx` |
| New complaint themes after 3 calls; accepted theme becomes a category | `README.md` ("Learning / AI Improvement Center"); `SRD-STATUS.md` row 85 |
| AI Improvement Center: ≥3 corrections, ≥2 calls, ≥30%; nothing changes without approval; can be deactivated | `README.md` ("Learning / AI Improvement Center") |
| Dashboard tiles (Open escalations, Live calls with an alert, …) | `frontend/src/app/pages/DashboardPage.tsx` |
| Keyboard shortcuts H, A, S, Home, ? | `frontend/src/app/features/live-call/liveShortcuts.ts` |
| Four roles enforced by the API; what each can see | `README.md` ("Who it is for"); `SRD-STATUS.md` row 100 |
| Customer SMS opt-in; MSG91 with 3 DLT templates, waiting for registration | `README.md`; `docs/review-meeting-scripts-2026-11-20.md` (Sairam) |
| Real softphone calls through Asterisk on 18 Nov (incoming, outgoing, click-to-call, hold, hang-up, missed) | `SRD-STATUS.md` row 93; review script (Karthik) |
| Prometheus, Grafana, e-mail alerts (for operators) | `SRD-STATUS.md` rows 15, 67 |
| Not met by decision: CRM, failover, pen test; next question < 1.5 s not met | `SRD-STATUS.md` |
| Own models work (Faster-Whisper server, LLM server, language detector, evaluation kit) | review scripts; `docs/timeline-update-2026-11-20.gs` Module 4 |

## Problem section

| Claim | Source |
|---|---|
| Five languages, code-mixed; missed complaints; late escalation; notes after calls; invisible patterns | `README.md` ("Problem"); `docs/customer-discovery-canvas.png` |
| What centres do today (register/DMS, random audits, SMS/CSI surveys, English-only tools) | `docs/customer-discovery-canvas.png` (boxes 02, 03) |

## Illustrative content (not claims)

The hero sample calls (Tamil, Telugu, Kannada, Malayalam lines) and the data inside the
mock screens (call numbers, counts, prices, executive names, audit score) are sample
data written for the website. They are labelled on the page as illustrative.
