# Deploying the website to Cloudflare Pages (free)

The site is fully static. A production build is a plain folder (`dist/`) that any static host can serve.

## 1. Build locally (optional check)

```bash
npm ci
npm run build      # type-checks, then builds into dist/
npm run preview    # serves dist/ at http://localhost:4173 to check it
```

Node.js 20.19+ or 22.12+ is required (Vite 8).

## 2. Put the project on GitHub

Create a repository (for example `mci-mvp-website`) and push this folder to it.
`node_modules/` and `dist/` are already in `.gitignore`.

## 3. Create the Cloudflare Pages project

1. Sign in to the Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Pick the repository.
3. Use these settings:

| Setting | Value |
|---|---|
| Project name | `mci-mvp` (gives `https://mci-mvp.pages.dev`) |
| Production branch | `main` |
| Framework preset | `Vite` (or `None`) |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | *(leave empty)* |
| Environment variable | `NODE_VERSION` = `22` |

4. **Save and Deploy**. Every push to `main` redeploys; pull requests get preview URLs.

### Without GitHub (direct upload)

```bash
npm run build
npx wrangler pages deploy dist --project-name mci-mvp
```

## 4. If the address is not `mci-mvp.pages.dev`

The social-preview tags in `index.html` point to `https://mci-mvp.pages.dev/`.
If your project name or custom domain is different, replace that address in
`index.html` (canonical, `og:url`, `og:image`, `twitter:image`) and redeploy.

## What is included

- `public/_headers`: long cache for hashed assets, basic security headers.
- `public/robots.txt`, `public/favicon.svg`, `public/apple-touch-icon.png`, `public/og-image.png` (1200×630).
- Single page, so no redirects are needed.
