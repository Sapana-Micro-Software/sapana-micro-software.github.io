# Sapana Micro Software — Organization Hub

Static organization homepage for **[Sapana Micro Software](https://github.com/Sapana-Micro-Software)**, built with **Next.js** (App Router), **Tailwind CSS**, and **`next export`** for deployment to **GitHub Pages** at `https://sapana-micro-software.github.io/`.

## Local development

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
```

Static files are emitted to **`out/`** (including `public/.nojekyll` so GitHub Pages does not run Jekyll on the artifact).

## Enable GitHub Pages (Actions)

After pushing this repository to GitHub:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
3. Run the workflow: merge to **`main`** or trigger **Deploy GitHub Pages** manually under **Actions**.

The workflow uses Node **LTS**, **`npm ci`**, **`npm run build`**, and uploads **`out/`** with **`upload-pages-artifact`** then **`deploy-pages`**, with repository permissions **`pages: write`** and **`id-token: write`**.
