# olivergrabner.com

My personal site — a single static page, no build step.

Live at [olivergrabner.com](https://olivergrabner.com).

## Editing

Everything is in `index.html`: markup, styles, and scripts in one file. Edit it,
commit, push to `main`, and GitHub Pages serves the repo root directly. There is
no bundler, no dependencies, and nothing to install.

To preview locally:

```bash
python -m http.server 8000
```

## Layout

```
index.html      the whole site - markup, CSS, and JS
404.html        redirects stale paths to /
img/            banner, og card, and the logo marks used inline
img/og.jpg      1200x630 social preview card
research/       conference posters linked from the Research section
resume.pdf      linked from the header
robots.txt      permissive; AI crawlers deliberately not blocked
sitemap.xml     declared in robots.txt
CNAME           custom domain for GitHub Pages
.nojekyll       skip Jekyll processing
```

## Notes

- **Paper texture.** The background grain in `body::before` is an inline SVG
  `feTurbulence` filter, baked in as a data URI — no image request.
- **Fonts.** Lora from Google Fonts, with Georgia as the fallback.
- **Analytics.** GA4 with Consent Mode v2. The consent bar only appears for
  visitors whose timezone looks EEA/UK; flip `CONSENT_ALWAYS_ASK` at the top of
  the head script to show it to everyone.
- **Social previews.** `img/og.jpg` is 1200x630 (the 1.91:1 ratio Open Graph
  expects). If you change it, keep those dimensions or link previews will crop.

## Previous version

The site was a React + TypeScript + Vite + Tailwind SPA until August 2026. It is
preserved on the [`react-v1`](../../tree/react-v1) branch, along with the project
demo videos and screenshots that lived in `public/`.
