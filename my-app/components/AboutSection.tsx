"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/* ── Icon chips for floating cards ───────────────────────────── */

function BuildChip() {
  return (
    <div className="w-8 h-8 rounded-lg bg-[#E0F7F4] dark:bg-[#00897B]/20 flex items-center justify-center">
      <span className="font-mono text-[#00897B] dark:text-[#26A69A] text-[11px] font-bold">&lt;/&gt;</span>
    </div>
  );
}

function CommunityChip() {
  return (
    <div className="w-8 h-8 rounded-lg bg-[#EEF2FF] dark:bg-[#4F46E5]/20 flex items-center justify-center">
      <svg width="16" height="14" viewBox="0 0 18 16" fill="none">
        <circle cx="7" cy="5" r="3.5" fill="#4F46E5" />
        <circle cx="13" cy="5" r="3" fill="#4F46E5" opacity="0.5" />
        <path
          d="M0 16v-1.5A5.5 5.5 0 0 1 7 9a5.5 5.5 0 0 1 7 5.5V16"
          stroke="#4F46E5"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M14 11c1.8.6 3 1.9 3 3.5V16"
          stroke="#4F46E5"
          strokeWidth="1.5"
          strokeOpacity="0.5"
          fill="none"
        />
      </svg>
    </div>
  );
}

function Web3Chip() {
  return (
    <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] dark:bg-[#059669]/20 flex items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6.5" stroke="#059669" strokeWidth="1.3" />
        <ellipse cx="8" cy="8" rx="3" ry="6.5" stroke="#059669" strokeWidth="1.3" />
        <line x1="1.5" y1="8" x2="14.5" y2="8" stroke="#059669" strokeWidth="1.3" />
      </svg>
    </div>
  );
}

function GrowthChip() {
  return (
    <div className="w-8 h-8 rounded-lg bg-[#FFF7ED] dark:bg-[#EA580C]/20 flex items-center justify-center">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M1.5 11.5L5 7L8 9.5L12.5 4"
          stroke="#EA580C"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 4H12.5V7"
          stroke="#EA580C"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/* ── Stat strip ───────────────────────────────────────────────── */

const stats = [
  {
    icon: (
      <span className="font-mono text-[15px] text-[var(--muted)] font-medium">&lt;/&gt;</span>
    ),
    title: "Builder",
    desc: "I love building products that solve real problems.",
  },
  {
    icon: (
      <svg
        width="20"
        height="18"
        viewBox="0 0 24 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-[var(--muted)]"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Community",
    desc: "I believe in the power of people and good communities.",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-[var(--muted)]"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "Curious",
    desc: "Always learning, always exploring, always improving.",
  },
];

/* ── Component ────────────────────────────────────────────────── */

export function AboutSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className="bg-[var(--bg)] px-6 lg:px-16 pt-16 pb-24 border-t border-[var(--border)] transition-colors duration-200">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-72px)]">

        {/* ── Left ─────────────────────────────────────────────── */}
        <div className="flex flex-col justify-center">

          {/* Eyebrow */}
          <ScrollReveal delay={50}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-7 h-px bg-[var(--muted)]" />
              <span className="text-[11px] font-medium tracking-[0.18em] text-[var(--muted)] uppercase">
                About Me
              </span>
            </div>
          </ScrollReveal>

          {/* Heading */}
          <ScrollReveal delay={120}>
            <h2
              className="font-display font-bold text-[var(--ink)] leading-[1.12] mb-5"
              style={{ fontSize: "clamp(26px, 3.6vw, 44px)" }}
            >
              I&apos;m Arpan,
              <br />
              <em className="font-normal italic">a builder, creator and curious mind.</em>
            </h2>
          </ScrollReveal>

          {/* Body */}
          <ScrollReveal delay={200}>
            <p className="text-[var(--ink-secondary)] text-[14px] md:text-[15px] leading-relaxed max-w-[440px] mb-10">
              I&apos;m a BTech student with a deep interest in Web3, product
              building, and community. I love turning ideas into real products,
              learning new things, and creating value — whether it&apos;s through
              technology, content, or people.
            </p>
          </ScrollReveal>

          {/* Stat strip with staggered animation */}
          <div className="grid grid-cols-3 divide-x divide-[var(--border)]">
            {stats.map((s, i) => (
              <ScrollReveal key={s.title} delay={280 + i * 80}>
                <div className={i === 0 ? "pr-5" : i === 2 ? "pl-5" : "px-5"}>
                  <div className="mb-3 h-6 flex items-center">{s.icon}</div>
                  <p className="font-semibold text-[var(--ink)] text-[13px] mb-1">
                    {s.title}
                  </p>
                  <p className="text-[var(--muted)] text-[11px] leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* ── Right – Retro Terminal & Floating Cards ────────── */}
        <ScrollReveal delay={150} className="relative flex items-center justify-center min-h-[420px] sm:min-h-[460px] lg:h-[540px] mt-10 lg:mt-0">
          {/* Subtle ambient backdrop circle */}
          <div className="absolute w-[320px] sm:w-[400px] lg:w-[440px] h-[320px] sm:h-[400px] lg:h-[440px] rounded-full bg-[var(--surface-card)]/70 border border-[var(--border)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-colors pointer-events-none" />

          {/* Retro PC Setup */}
          <div className="relative z-10 w-[290px] sm:w-[400px] md:w-[450px] lg:w-[480px] xl:w-[510px] aspect-[1588/990] transition-transform duration-500 hover:-translate-y-2 group">
            <Image
              src="/compp.png"
              alt="Retro workstation running 404 terminal"
              fill
              priority
              className="object-contain filter contrast-105 dark:brightness-105 dark:drop-shadow-[0_12px_45px_rgba(59,130,246,0.24)] select-none pointer-events-none transition-all duration-300"
              sizes="(max-width: 640px) 290px, (max-width: 768px) 400px, (max-width: 1024px) 450px, 510px"
            />
          </div>

          {/* Floating Cards with subtle scroll parallax */}
          <FloatingCard
            icon={<BuildChip />}
            title="Build"
            subtitle="Turn ideas into products."
            className="hidden sm:block top-4 left-0 lg:-left-2 z-20"
            style={{
              transform: `translate3d(0, ${-scrollY * 0.05}px, 0)`,
            }}
          />

          <FloatingCard
            icon={<CommunityChip />}
            title="Community"
            subtitle="Better together."
            className="hidden sm:block top-2 right-0 lg:-right-2 z-20"
            style={{
              transform: `translate3d(0, ${scrollY * 0.04}px, 0)`,
            }}
          />

          <FloatingCard
            icon={<Web3Chip />}
            title="Web3"
            subtitle="Open, global, full of possibilities."
            className="hidden sm:block bottom-12 left-0 lg:-left-4 z-20"
            style={{
              transform: `translate3d(0, ${-scrollY * 0.03}px, 0)`,
            }}
          />

          <FloatingCard
            icon={<GrowthChip />}
            title="Growth"
            subtitle="Build. Learn. Scale."
            className="hidden sm:block bottom-8 right-0 lg:-right-4 z-20"
            style={{
              transform: `translate3d(0, ${scrollY * 0.05}px, 0)`,
            }}
          />

          {/* Handwritten annotation */}
          <div className="absolute -bottom-2 right-4 sm:bottom-0 sm:right-6 font-script text-[18px] sm:text-[20px] text-[var(--muted)] rotate-[-10deg] z-20 leading-tight pointer-events-none select-none">
            Still learning...
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
