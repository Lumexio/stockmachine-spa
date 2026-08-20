# STOCKMACHINE Marketing SPA Agent Guide

## Project overview

This Vue 3/Vite application is the public STOCKMACHINE marketing, pricing, and download site deployed to GitHub Pages. Inventory workflows belong in the desktop, mobile, or web clients.

## Structure

- `src/components/`: landing, pricing, download, navigation, footer, and cards.
- `src/router/index.js`: public route registration.
- `src/stores/theme.js`: persisted theme selection.
- `src/assets/`: global CSS, theme tokens, and bundled images.
- `public/`: root-served static assets.
- `CNAME`: custom GitHub Pages domain; do not remove.

## Commands

```bash
npm ci
npm run dev
npm run build
npm run lint
npm run format
```

The deployment workflow currently uses Node 20.

## Conventions

- Keep the bundle lightweight and do not add inventory or authenticated application logic.
- Add pages as lazy-loaded routes in `src/router/index.js`.
- Use the existing CSS custom properties and all eight `[data-theme]` schemes.
- Maintain responsive layouts and accessible controls.
- Keep pricing and plan descriptions aligned with backend enforcement and all clients.
- Verify download links against desktop/mobile release outputs.

## CI/CD and documentation

PR validation builds the Vite application. `.github/workflows/node.js.yml` deploys `dist/` to GitHub Pages on default-branch pushes. `README.md` is sufficient project documentation; no separate docs site is needed.

## Pitfalls

- `CNAME` and clean-history routing are deployment boundaries.
- Marketing plan claims must not drift from backend limits and billing.
- A release-link change should be checked against the producing repository.
