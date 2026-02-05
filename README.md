# Portfolio

Minimal portfolio site - intro, bio, tech stack pills, and social links.

## Setup

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Build with `pnpm build`.

## Project structure

- **`app/`** — Routes, layout, global styles
- **`components/`** — `Bio`, `SocialIcon`
- **`lib/`** — `content.ts` (data), `constants.ts` (e.g. devicon map)

Edit your name, role, bio, skills, and links in [`lib/content.ts`](lib/content.ts).

## Deploy to GitHub Pages

The app is built as a **static export** (`output: "export"`) so it can be hosted on GitHub Pages.

1. **Enable GitHub Pages (Actions)**  
   In the repo: **Settings → Pages → Build and deployment → Source**: choose **GitHub Actions**.

2. **Push to `main`**  
   The workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) runs on every push to `main`: it builds the site, uploads the `out` folder, and deploys to GitHub Pages.

3. **Site URL**  
   - **Project site:** `https://<owner>.github.io/<repo>/` (e.g. `https://username.github.io/portfolio/`).  
   - For a **user/org site** at `https://username.github.io`, use a repo named `username.github.io` and set in the workflow: `BASE_PATH: ""` and `ASSET_PREFIX: "https://username.github.io/"`.

Local builds (`pnpm build`) do not set `BASE_PATH` / `ASSET_PREFIX`, so the site runs at the root. The workflow sets them for the GitHub Pages subpath.
