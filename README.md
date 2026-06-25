# Portfolio — Junior Product Manager

One-page static portfolio (pure HTML / CSS / JS), inspired by the layout of Maxence Ory's portfolio, ready to deploy on **GitHub Pages**.

## 📁 Structure

```
portfolio-site/
├── index.html        # Main page (hero, projects, experience, values, skills, contact)
├── legal.html         # Legal notice page
├── style.css          # All styling (colors, type, layout, responsive)
├── script.js          # Mobile menu, contact form, active nav on scroll
└── assets/
    └── photo-profil.jpg   # Replace with your real photo (same filename)
```

## ✏️ Still to personalize

- Replace **"Your Name"** everywhere in `index.html` (title tag, logo, hero `<h1>`, footer)
- Add your **real photo** in `assets/photo-profil.jpg`
- Update the **LinkedIn link** (`href="https://www.linkedin.com/in/your-profile/"`, two occurrences)
- Optional: write up full dedicated case study pages for Pumba and Decathlon/Noé (currently anchor links only — happy to build these as standalone pages on request)
- The contact form (`script.js`) currently logs submissions to the console. To make it actually send you an email without a backend, connect it to a free service like [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/).

## 🚀 Deploy on GitHub Pages

1. Create a new repo on GitHub (e.g. `my-portfolio`).
2. Push these files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/my-portfolio.git
   git push -u origin main
   ```
3. In the GitHub repo → **Settings** → **Pages**.
4. Under "Build and deployment", choose **Source: Deploy from a branch**, branch `main`, folder `/ (root)`.
5. Save. Your site will be live in a few minutes at:
   `https://YOUR-USERNAME.github.io/my-portfolio/`

### Optional: custom domain
Add a `CNAME` file at the root containing your domain (e.g. `mysite.com`), then set up a CNAME record with your registrar pointing to `YOUR-USERNAME.github.io`.

## 🎨 Palette
- Dark green (headings, buttons): `#15543f` / `#0f3d2e`
- Cream background: `#fbfaf7`
- Secondary text: `#5b655f`
- Fonts: **Fraunces** (headings, serif) + **Inter** (body, sans-serif)

## ♿ Accessibility & performance
- Visible keyboard focus on form fields
- Marquee animation disabled if `prefers-reduced-motion` is set
- Responsive down to 360px wide

## 📌 Content notes
- Bullet points and impact figures are drawn directly from the CV provided (Ayming, Generali, Just For Good experiences).
- Stats in the scrolling banner combine availability (apprenticeship, from Aug 3 2026) and measurable impact from past roles.
