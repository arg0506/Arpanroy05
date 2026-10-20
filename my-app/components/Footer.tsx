"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const NAV_LINKS = [
  { label: "Overview", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Selected Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Let's Connect", href: "#contact" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arpan-roy-75955031a/" },
  { label: "X (Twitter)", href: "https://x.com/arg05_06" },
  { label: "GitHub", href: "https://github.com/arg0506" },
  { label: "Email", href: "mailto:arpanroy0506@gmail.com" },
];

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative w-full border-t border-[var(--border)] bg-[var(--bg)] overflow-hidden pt-16 md:pt-24 pb-12 transition-colors duration-300">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute -bottom-40 right-0 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 left-10 w-[350px] h-[350px] rounded-full bg-emerald-500/5 blur-[100px]"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        {/* ── Main Footer Grid ───────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Column 1: Brand & Profile Statement (Span 5) */}
          <ScrollReveal delay={50} className="md:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="font-mono text-[11px] tracking-widest uppercase text-[var(--muted)]">
                  Portfolio · 2026
                </span>
                <span className="text-[var(--border)]">/</span>
                <span className="font-mono text-[11px] tracking-widest uppercase text-amber-600 dark:text-amber-400">
                  Vol. 01
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[var(--ink)] tracking-tight leading-tight">
                Arpan Roy
              </h2>

              <p className="mt-3 text-sm text-[var(--ink-secondary)] leading-relaxed max-w-sm">
                Software engineer and builder focused on crafting clean, resilient interfaces,
                scalable distributed backends, and deliberate digital experiences.
              </p>

              {/* Live Status indicator */}
              <div className="mt-6 inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[var(--surface-card)] border border-[var(--border)] text-xs text-[var(--ink)] shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-medium">Available for select projects & roles</span>
              </div>

              {/* Coordinates & Time Zone */}
              <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] font-mono text-[var(--muted)]">
                <span>Kolkata, IN · GMT+5:30</span>
                <span>•</span>
                <span>22.57° N, 88.36° E</span>
              </div>
            </div>

            {/* Quick Email link */}
            <div className="mt-8 pt-6 border-t border-[var(--border)]">
              <span className="block text-[11px] font-mono text-[var(--muted)] uppercase tracking-wider mb-1">
                Direct Inquiries
              </span>
              <a
                href="mailto:arpanroy0506@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-mono font-medium text-[var(--ink)] hover:text-amber-600 dark:hover:text-amber-400 transition-colors group"
              >
                <span>arpanroy0506@gmail.com</span>
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </ScrollReveal>

          {/* Column 2: Navigation & Channels (Span 3) */}
          <ScrollReveal delay={120} className="md:col-span-3 grid grid-cols-2 md:grid-cols-1 gap-8">
            {/* Directory Navigation */}
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--muted)] mb-3">
                Directory
              </h3>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--ink-secondary)] hover:text-[var(--ink)] transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Channels */}
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--muted)] mb-3">
                Channels
              </h3>
              <ul className="space-y-2.5">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--ink-secondary)] hover:text-[var(--ink)] transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <span>{link.label}</span>
                      <svg
                        className="w-3 h-3 text-[var(--muted)] group-hover:text-[var(--ink)] transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Column 3: The Archival Artwork Showcase (Span 4) */}
          <ScrollReveal delay={180} className="md:col-span-4 flex flex-col items-center sm:items-start md:items-end">
            <div className="w-full max-w-[280px] sm:max-w-[300px] md:max-w-full">
              <div className="relative rounded-2xl p-2.5 sm:p-3 bg-[var(--surface-card)] border border-[var(--border-card)] shadow-sm hover:shadow-md transition-all duration-500 group overflow-hidden">
                {/* Image wrapper with fixed aspect ratio */}
                <div className="relative w-full aspect-[341/512] max-h-[340px] rounded-xl overflow-hidden bg-black/90">
                  <Image
                    src="/footerart.jpg"
                    alt="Liquid monochrome topography artwork"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-105"
                    sizes="(max-width: 768px) 280px, 320px"
                  />

                  {/* Gentle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Embedded Museum identification tag */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono tracking-wider text-white/90 bg-black/65 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-white/10 select-none">
                    <span className="font-semibold">FIG. 05</span>
                    <span className="text-white/70">LIQUID GRAIN</span>
                  </div>
                </div>

                {/* Subtitle caption */}
                <div className="mt-2.5 px-1 flex items-center justify-between text-[11px] font-mono text-[var(--muted)]">
                  <span>Archival Monolith</span>
                  <span>341 × 512</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* ── Mid-section: Grand Watermark Typography ────────────────── */}
        <ScrollReveal delay={200}>
          <div className="mt-16 md:mt-24 pt-10 border-t border-[var(--border)] overflow-hidden select-none pointer-events-none">
            <h3 className="font-serif text-[13vw] md:text-[11.5vw] font-bold tracking-widest text-center text-[var(--ink)]/[0.04] dark:text-white/[0.05] uppercase leading-none whitespace-nowrap">
              ARPAN ROY
            </h3>
          </div>
        </ScrollReveal>

        {/* ── Bottom Strip: Colophon & Back-to-Top ───────────────────── */}
        <div className="mt-6 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--muted)]">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© 2026 Arpan Roy. All rights reserved.</span>
            <span className="hidden sm:inline text-[var(--border)]">|</span>
            <span className="text-[var(--ink-secondary)]">
              Crafted with Next.js, React & Tailwind CSS
            </span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--surface-card)] hover:bg-[var(--surface-pill)] border border-[var(--border)] hover:border-[var(--ink)] text-[var(--ink)] text-xs font-medium transition-all duration-200 group cursor-pointer shadow-2xs"
          >
            <span>Back to top</span>
            <svg
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

      </div>
    </footer>
  );
}
