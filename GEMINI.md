# Project Context: Arpan Roy Portfolio

## Purpose
A high-craft editorial portfolio website for Arpan Roy (Software Engineer & Builder), combining brutalist editorial typography (Playfair Display + Inter + Dancing Script), dark/light mode theming, archival artwork showcases, and smooth scroll animations.

## Architecture
- **Framework**: Next.js 16 (App Router) + React 19 + Turbopack
- **Styling**: Tailwind CSS v4 with custom CSS variables (`--bg`, `--surface`, `--surface-card`, `--ink`, `--muted`, `--border`, etc.)
- **Animations**: Custom GPU-accelerated IntersectionObserver scroll reveals (`components/ui/ScrollReveal.tsx`)

## Key Files & Directories
- `my-app/app/page.tsx`: Main page layout assembling all sections
- `my-app/app/globals.css`: Theme tokens and typography styles
- `my-app/components/Navbar.tsx`: Sticky navbar with dynamic scroll progress bar & dark mode toggle
- `my-app/components/HeroSection.tsx`: Landing hero with rotating stamp badge, portrait cutout, and floating cards
- `my-app/components/AboutSection.tsx`: Editorial narrative, philosophy, and tech stack
- `my-app/components/WorkSection.tsx`: Selected project cards and case studies
- `my-app/components/ExperienceSection.tsx`: Career history with glowing timeline nodes
- `my-app/components/ContactSection.tsx`: Outreach form & handshake woodcut etching
- `my-app/components/Footer.tsx`: Editorial footer with archival artwork frame (`footerart.jpg`), directory, live availability status, and back-to-top button
- `my-app/public/`: Static images and cutouts

## Local Setup & Development
```bash
cd my-app
npm run dev
# Running on http://localhost:3000
```
