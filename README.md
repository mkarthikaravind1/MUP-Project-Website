# Multilingual Call Intelligence: MVP website

The MVP website for the final-year project **Multilingual Call Intelligence** (Team 8, Protosem).
It is a single page with a sticky section nav, light/dark theme and mock screens that copy the real app.

## Run it

```bash
npm ci
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run lint
```

Deploying: see [DEPLOY.md](DEPLOY.md) (Cloudflare Pages).

## Editing content

All wording, numbers and links are in **`src/content.ts`**. Components only lay it out.
Every number on the site and the file it came from is listed in [CLAIMS.md](CLAIMS.md).

## Structure

```
src/
  content.ts                 all text, numbers, links
  App.tsx                    page order; sections below the hero load as a separate chunk
  components/
    Header.tsx, Footer.tsx
    BelowFold.tsx            the sections after the hero
    sections/                one file per section (Hero, Problem, Users, HowItWorks, Scope,
                             Features, Tour, Video, LiveMvp, Architecture, Results, Roadmap,
                             Deployment, Team)
    mocks/                   HTML/CSS mock screens of the real app
    ui/                      Section header, Reveal animation, Lightbox, Icon, Button
  hooks/                     theme, active section, count-up, anchor scroll fix
public/
  images/                    customer discovery canvas (WebP, 3 sizes)
  screenshots/README.md      how to swap in real screenshots
  og-image.png, favicon.svg, apple-touch-icon.png, _headers, robots.txt
```

## Accessibility and motion

Semantic landmarks, skip link, keyboard-operable tabs and lightbox, visible focus rings,
alt text, and colour plus label for every tone. All animations switch off when the visitor's
system asks for reduced motion.
