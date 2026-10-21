"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));

    // Scroll spy for active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -45% 0px" }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    // Reading progress calculation
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <>
      {/* ── Global Reading Progress Bar ─────────────────────── */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-[var(--progress)] z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <header className="sticky top-0 z-40 bg-[var(--bg)]/90 backdrop-blur-md px-6 lg:px-16 py-4 transition-colors duration-200">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-display font-bold text-[22px] text-[var(--ink)] hover:opacity-80 transition-opacity"
          >
            Arpan.
          </a>

          {/* Centre nav pill */}
          <nav className="hidden md:flex items-center bg-[var(--surface-pill)] rounded-full px-2 py-1.5 shadow-sm border border-[var(--border)] gap-0.5 transition-colors">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={
                  active === id
                    ? "bg-[var(--ink)] text-[var(--bg)] rounded-full px-4 py-1.5 text-[13px] font-medium transition-all duration-200 shadow-sm"
                    : "text-[var(--muted)] hover:text-[var(--ink)] rounded-full px-4 py-1.5 text-[13px] font-medium transition-all duration-200"
                }
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Right CTA + Theme Toggle */}
          <div className="flex items-center gap-3">
            {/* Dark / Light Toggle */}
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-full bg-[var(--surface-pill)] border border-[var(--border)] text-[var(--ink)] flex items-center justify-center hover:bg-[var(--tag-bg)] transition-colors shadow-sm"
            >
              {isDark ? (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <a
              href="/Arpanroy_resumeup.pdf"
              className="bg-[var(--ink)] text-[var(--bg)] rounded-full px-5 py-2.5 text-[13px] font-medium flex items-center gap-1.5 hover:opacity-85 transition-opacity shadow-sm"
            >
              My resume <span>↗</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
