"use client";

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
];

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full border-t border-[var(--border)] bg-[var(--bg)] pt-16 md:pt-20 pb-10 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">

        <ScrollReveal delay={50}>
          <div className="grid grid-cols-2 md:grid-cols-12 gap-10 pb-12 border-b border-[var(--border)]">

            {/* Identity */}
            <div className="col-span-2 md:col-span-4">
              <p className="font-serif text-3xl text-[var(--ink)]">Arpan Roy</p>
              <p className="mt-3 text-sm text-[var(--ink-secondary)] leading-relaxed max-w-sm">
                Software engineer and builder working across Web3, AI and growth.
              </p>
              <div className="mt-6 inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[var(--surface-card)] border border-[var(--border)] text-xs text-[var(--ink)] shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="font-medium">Available for select projects & roles</span>
              </div>
              <p className="mt-5 font-mono text-[11px] tracking-wider text-[var(--muted)]">
                Kolkata, IN · GMT+5:30
              </p>
            </div>

            {/* Directory */}
            <div className="md:col-span-2 md:col-start-6">
              <h3 className="font-mono text-[11px] uppercase tracking-wider text-[var(--muted)] mb-4">
                Directory
              </h3>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--ink-secondary)] hover:text-[var(--ink)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Channels */}
            <div className="md:col-span-2">
              <h3 className="font-mono text-[11px] uppercase tracking-wider text-[var(--muted)] mb-4">
                Channels
              </h3>
              <ul className="space-y-2.5">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--ink-secondary)] hover:text-[var(--ink)] transition-colors inline-flex items-center gap-1.5"
                    >
                      {link.label}
                      <span aria-hidden="true" className="text-[var(--muted)]">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct */}
            <div className="col-span-2 md:col-span-3">
              <h3 className="font-mono text-[11px] uppercase tracking-wider text-[var(--muted)] mb-4">
                Email
              </h3>
              <a
                href="mailto:arpanroy0506@gmail.com"
                className="font-mono text-sm text-[var(--ink)] hover:text-amber-600 dark:hover:text-amber-400 transition-colors break-all"
              >
                arpanroy0506@gmail.com
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Colophon ───────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-[var(--muted)]">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© 2026 Arpan Roy. All rights reserved.</span>
            <span className="hidden sm:inline text-[var(--border)]">|</span>
            <span className="text-[var(--ink-secondary)]">Crafted with Next.js, React & Tailwind CSS</span>
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
