# Stone Union

Landing page for Stone Union — a stone arts destination (studios, gallery,
café) in New York City. Built with React + Vite.

Content and imagery are sourced from `Stone Union Deck VK - Public.pdf`.

## Run locally

```
yarn install
yarn dev
```

## Build for production

```
yarn build
```

Outputs a static site to `dist/` — deployable to any static host (Vercel,
Netlify, S3/CloudFront, GitHub Pages, etc.).

## Structure

- `src/App.jsx` — assembles the page from section components in `src/components/`
- `src/index.css` — the full design system (tokens, layout, per-section styles)
- `public/images/` — photography and renderings extracted from the deck
