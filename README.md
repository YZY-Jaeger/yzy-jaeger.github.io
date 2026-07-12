# Zeyuan Yu — Personal Portfolio

A simple recruiter-focused portfolio built with React, TypeScript and Vite.

## Run locally

```bash
npm install
npm run dev
```

## Build and preview

```bash
npm run build
npm run preview
```

## Edit content

- Main page: `src/App.tsx`
- Project and skill data: `src/content.ts`
- Design and responsive styles: `src/App.css`
- CV and thesis downloads: `public/files/`
- Project illustrations: `public/images/`

## GitHub Pages deployment

Your GitHub username is currently `YZY-Jaeger`, so a personal GitHub Pages repository should be named:

```text
YZY-Jaeger.github.io
```

The resulting address will be:

```text
https://yzy-jaeger.github.io/
```

To use `https://zeyuan.github.io/`, the GitHub account or organization that owns the repository must be named `zeyuan`.

Deployment steps:

1. Create the public repository `YZY-Jaeger.github.io`.
2. Push this project to its `main` branch.
3. Open **Settings → Pages**.
4. Set **Source** to **GitHub Actions**.
5. The included `.github/workflows/deploy.yml` builds and publishes the site.

## Current content notes

- The live VAST demo link is included but the server should be checked before publishing.
- Add real screenshots or short videos later by replacing the SVG files in `public/images/`.
- More project cards can be added in `src/content.ts` without changing the page structure.
