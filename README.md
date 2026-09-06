# Noor Akhnafal Aban — Portfolio

Personal portfolio website. Live: **https://akhnafal-aban.github.io/**

Dark terminal aesthetic — System B tokens: `#121212` base, `#60E5A0` accent, Roboto Mono + Inter.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4 (CSS-first `@theme`)
- Liquid glass navbar + buttons (`src/components/ui/liquid-glass-button.tsx`)
- ASCII particle hero + handwriting text (21st.dev components, self-hosted font)

## Structure

```
src/
  App.tsx                      home page: hero + proof strip (one 100svh screen),
                               work, about, publications, contact
  index.css                    tokens + glass utilities
  components/ui/               particle-drift, handwriting-text, liquid-glass-button
  lib/utils.ts                 cn()
public/fonts/handwriting.ttf   self-hosted TTF for the handwriting animation
```

## Dev

```bash
npm install
npm run dev
```

## Deploy

```bash
./scripts/deploy.sh
```

Builds `dist/` and pushes it to the `gh-pages` branch (GitHub Pages source: branch `gh-pages`, root). No CI needed.