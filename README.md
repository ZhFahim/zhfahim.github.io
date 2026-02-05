# Portfolio

Minimal portfolio site — intro, bio, tech stack pills, and social links.

## Setup

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Build with `pnpm build`.

## Project structure

- **`app/`** — Routes, layout, global styles
- **`components/`** — `Bio`, `SocialIcon`
- **`lib/`** — `content.ts` (copy and data), `constants.ts` (e.g. devicon map)

Edit your name, role, bio, skills, and links in [`lib/content.ts`](lib/content.ts).
