# Copilot instructions

## Architecture and conventions

- This repository is a Vue 3/Vite marketing and download site, not an inventory application.
- Keep routes in `src/router/index.js`; lazy-load non-home pages.
- Reuse existing components, cards, CSS variables, and the Pinia theme store.
- Preserve the custom domain in `CNAME` and GitHub Pages deployment assumptions.
- Keep all eight themes defined by the shared STOCKMACHINE design system.
- Ensure controls are keyboard accessible and layouts remain usable below 600px and 768px breakpoints.
- Keep plans, prices, product claims, and download links aligned with their source repositories.

No merged pull-request review history was available to mine; repository and family conventions are authoritative.

## Testing and style

- Run `npm run build` for validation.
- `npm run lint` applies fixes; use it deliberately and review resulting changes.
- There is no test suite; add focused tests only when non-trivial behavior warrants them.

## Maintenance matrix

| When changing | Also update or verify |
| --- | --- |
| Public page | Component, lazy route in `src/router/index.js`, navbar/footer links, responsive styles, and metadata where applicable |
| Theme or color token | Theme store, global CSS in `src/assets/`, selector in `src/components/Navbar.vue`, all eight schemes, and contrast |
| Plan, pricing, or benefit | Pricing components/content, backend plan constants/billing, profile/settings upgrade UI in every client, and account-type wording |
| Desktop/mobile download | Download component/card URLs, producing repository release workflow and artifact names, version text, and platform instructions |
| Web application URL | Navbar launch action, other CTA links, production domain configuration, and deployment documentation |
| Static asset | Import/reference, `public/` versus bundled `src/assets/` location, alt text, sizing, and GitHub Pages path behavior |
| Route or base path | `src/router/index.js`, `vite.config.js`, direct-navigation behavior, `CNAME`, and Pages workflow |
| Build or deployment | `package.json`, lockfile, `.github/workflows/node.js.yml`, Node version, `dist/` output, and custom domain |
