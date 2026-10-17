# Maténin Bamba — minimalist portfolio

A lightweight **three-page** responsive site in plain HTML, CSS and JavaScript. No build step, no framework, and GitHub Pages compatible.

## Pages

- `index.html` — home, introduction, featured work.
- `projects.html` — all projects **and** their detailed case studies (via `?project=pumba`, `?project=decathlon`, `?project=ayming`, or `?project=generali`). These are detail views within the same Projects page, not extra HTML pages.
- `contact.html` — contact information and form opening a mailto draft.

## Files

```
index.html
projects.html
contact.html
css/style.css
js/main.js
js/projects.js
js/contact.js
assets/{pumba,noe,ayming,generali}.svg
assets/photo-profil.jpg  ← add this file
```

## Before publishing — IMPORTANT

1. **Add a real portrait** at `assets/photo-profil.jpg`. Until then, the hero shows an intentional `mb.` monogram.
2. **Set the correct email** in `js/contact.js`: replace `REPLACE_WITH_EMAIL@example.com`. Until set, the form displays a setup notice and does not send anything. Even after set, visitors must press Send in their own email app. For truly submitted forms, connect a service such as Formspree.
3. **Complete the real project details** in `js/projects.js`. The structure includes Overview (project, duration, problem, goal, role/responsibilities), Understanding the User (research, personas, statements, journey maps, flows), Starting the Design (wireframes, low-fi), Refining the Design (hi-fi URL and accessibility), Going Forward (takeaways and next steps). Content that was not provided is clearly placeholder or suggested copy, **not verified personal achievements**.
4. **Add working Figma prototype links**: set each project's `highfi` field in `js/projects.js` to its public `https://...` URL. Leave empty if unpublished.
5. **Verify professional claims**, including the +20% / +30% metrics referenced in the supplied old source, before publishing.
6. **Check the LinkedIn URL** in each HTML page.
7. If applicable, add legal/privacy information separately or link to a compliant hosted legal notice. This three-page version intentionally has no fourth legal page.

## Editing a project

Open `js/projects.js`, find the `projects` object, then edit the record (`pumba`, `decathlon`, `ayming`, `generali`). Cards and detailed views update automatically. To add a project, insert an object with the same fields and add its slug to the lists used for cards (or it appears automatically in the all-projects grid).

## Running locally

Open `index.html` in your browser, or for a predictable local HTTP server:

```bash
python3 -m http.server 8000
```

Go to http://localhost:8000 .

## GitHub Pages

Create a repository, add the entire contents of this folder to the repository root, and push to `main`. In **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`.

## Design

Inspired by the reference's airy, restrained editorial feel, but independently styled with neutral cream, sage-green accents, simple flat illustrations, subtle borders, and accessible responsive layouts. Project mockup SVGs are decorative examples, **not real research or product deliverables**.
