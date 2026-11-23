# Real screenshots (optional)

The Product tour currently shows HTML mock screens that copy the real app's layout.
To show real screenshots instead:

1. Take each screenshot from the live app at a desktop window size, with sample (non-customer) data.
2. Save them in this folder with **exactly** these names:

| File | Screen in the app | Size |
|---|---|---|
| `live-call.png` | Live Call (during a call: transcript, alerts, next question, complaints, estimate) | 1600 × 1000 |
| `dashboard.png` | Dashboard | 1600 × 1000 |
| `ongoing-calls.png` | Ongoing Calls (supervisor) | 1600 × 1000 |
| `complaints.png` | Complaints | 1600 × 1000 |
| `ai-improvement.png` | AI Improvement Center | 1600 × 1000 |
| `reports.png` | Reports | 1600 × 1000 |
| `price-list.png` | Price List | 1600 × 1000 |
| `post-call.png` | A finished call with its post-call summary | 1600 × 1000 |

   16:10 ratio; 1600 × 1000 px is ideal (any 16:10 size works). Keep each file under ~300 KB
   (WebP is smaller: if you use `.webp`, change the `screenshot` names in `src/content.ts`).

3. In `src/content.ts`, set `tour.useScreenshots` to `true`.
4. Make sure no real phone numbers, names or customer data are visible.

All eight files must exist before you switch it on, or the missing ones show as broken images.
