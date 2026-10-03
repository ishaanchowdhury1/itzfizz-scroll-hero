# Scroll-Driven Hero Section Animation — ITZFIZZ Digital

A high-performance, scroll-driven hero section interactive animation created for the **Itzfizz Digital Web Development Internship Assignment**.

Inspired by premium digital agency experiences, this project features a top-view car motion effect synchronized with scroll progress, staggered entrance animations, fluid responsive design, and full accessibility support.

---

## 🚀 Live Demo & Repository

- **Live Webpage**: [https://ishaanchowdhury1.github.io/itzfizz-scroll-hero/](https://ishaanchowdhury1.github.io/itzfizz-scroll-hero/)
- **GitHub Repository**: [https://github.com/ishaanchowdhury1/itzfizz-scroll-hero](https://github.com/ishaanchowdhury1/itzfizz-scroll-hero)

---

## 🛠 Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) + [React 19](https://react.dev/)
- **Animation Engine**: [GSAP 3](https://gsap.com/) (`ScrollTrigger` & `@gsap/react`)
- **Styling**: Tailwind CSS + Custom CSS Variables & Fluid Typography (`clamp()`)
- **Language**: TypeScript
- **Deployment**: GitHub Pages via GitHub Actions

---

## ✨ Key Features & Architecture

### 1. Entrance Animations (`useGSAP`)
On initial page load, a custom GSAP timeline animates:
- The eyebrow tag and letter-spaced title characters (`W E L C O M E   I T Z F I Z Z`) with a staggered reveal.
- Description paragraph and key performance impact metrics (`58% Faster load times`, `23% Fewer support calls`, etc.) appearing in sequence.

### 2. Scroll-Driven Animation (Core Feature)
- The main top-view vehicle asset is pinned within the viewport using GSAP `ScrollTrigger`.
- Smooth translation (`transform: translate3d`) is tied directly to scroll progress (`scrub: 1`), avoiding layout reflows and keeping frame rates at a locked 60fps.
- Calculated end position dynamically responds to viewport width (`invalidateOnRefresh: true`).

### 3. Responsive & Accessible
- **Fluid Layout**: Designed to look crisp across mobile (375px), tablet (768px), and desktop (1440px+).
- **Reduced Motion Support**: Respects user OS preferences (`prefers-reduced-motion: reduce`) via `gsap.matchMedia()`, instantly rendering content statically for users sensitive to motion.
- **Optimized Asset**: High-resolution WebP asset with alpha channel transparency (~51 KB).

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js 18+ and npm

### Installation & Run

```bash
# 1. Clone the repository
git clone https://github.com/ishaanchowdhury1/itzfizz-scroll-hero.git
cd itzfizz-scroll-hero

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# Navigating to http://localhost:3000
```

### Production Build & Export

```bash
npm run build
```
This generates a static export in the `out/` directory ready for static hosting.

---

## 🚢 Deployment to GitHub Pages

1. Push code to the `main` branch of your GitHub repository `itzfizz-scroll-hero`.
2. Go to **Repository Settings** -> **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. The included `.github/workflows/deploy.yml` workflow will automatically build and deploy the site.

---

## 🔮 Future Enhancements
- Add interactive 3D rotation using Canvas/Three.js for full 360-degree vehicle motion.
- Implement audio feedback or interactive sound toggle on scroll.
