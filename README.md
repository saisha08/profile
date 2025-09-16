# Saisha Siram — Jekyll Portfolio

Modern, simple, blue‑themed (#3eb0d2) static site designed for admissions readers.

## How to use (GitHub Pages)
1. Create a new GitHub repo named `saisha-siram.github.io` (or any repo).
2. Upload this folder's contents to the repo.
3. In **Settings → Pages**, choose the `main` branch (root) and save.
4. Your site will deploy in a few minutes.

> No plugins, no external theme — fully GitHub Pages compatible.

## Local preview
- Install Ruby and Bundler.
- From this folder, run:
  ```bash
  bundle init
  bundle add jekyll
  bundle exec jekyll serve
  ```
- Visit http://localhost:4000

## Customize
- Replace **assets/img/profile.jpg** with your headshot (same name).
- Replace placeholder gallery images in **assets/img/** or update the paths in each page.
- Replace **assets/resume.pdf** with your résumé.
- Edit navigation in **_config.yml** (under `nav:`).
- Edit intro text in **index.md**.

## Accessibility & UX
- High contrast text, large tap targets, and descriptive alt text placeholders.
- Simple information architecture: Academics/Research, Work, Arts, Leadership, Resume.