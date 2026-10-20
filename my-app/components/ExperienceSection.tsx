"use client";

import { useEffect, useRef, useState } from "react";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { SparkleIcon } from "@/components/ui/SparkleIcon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const experiences = [
  {
    period: "2024 – Present",
    org: "Nundina Finance",
    role: "Growth Team",
    initials: "N",
    bgColor: "#1B4332",
    description:
      "Working on brand growth, content, community and social strategy for a Web3 financial product.",
    chips: ["Community", "Content", "Brand"],
  },
  {
    period: "2024 – Present",
    org: "Automa",
    role: "Growth Lead / Founder & Founding Engineer",
    initials: "A",
    bgColor: "#111111",
    description:
      "Building the programmable financial infrastructure for autonomous AI agents.",
    chips: ["Agents", "Payments", "Web3"],
  },
  {
    period: "2023 – 2024",
    org: "Freelance / Independent",
    role: "Developer & Creator",
    initials: "</>",
    bgColor: "#374151",
    description:
      "Worked on various Web3 and product-focused projects, explored DeFi, and built community-driven initiatives.",
    chips: ["Web3", "Product", "Community"],
  },
];

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lineFill, setLineFill] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const windowH = window.innerHeight;
            // Progress starts when section top is at 70% viewport, completes when bottom is at 30%
            const start = windowH * 0.7;
            const end = -rect.height + windowH * 0.3;
            const current = rect.top;
            const progress = Math.max(0, Math.min(100, ((start - current) / (start - end)) * 100));
            setLineFill(progress);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="min-h-screen bg-[var(--bg)] px-6 lg:px-16 pt-16 pb-24 border-t border-[var(--border)] transition-colors duration-200"
    >
      <div className="max-w-[1280px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start min-h-[75vh] pt-4">

          {/* ── Left – Timeline ─────────────────────────────────── */}
          <div className="flex flex-col justify-center py-4">

            {/* Eyebrow */}
            <ScrollReveal delay={50}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-7 h-px bg-[var(--muted)]" />
                <span className="text-[11px] font-medium tracking-[0.18em] text-[var(--muted)] uppercase">
                  My Career Experience
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <h2
                className="font-display font-bold text-[var(--ink)] leading-[1.12] mb-5"
                style={{ fontSize: "clamp(26px, 3.6vw, 44px)" }}
              >
                The journey so far.
                <br />
                <em className="font-normal italic">And what&apos;s next.</em>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-[var(--ink-secondary)] text-[14px] md:text-[15px] leading-relaxed max-w-[440px] mb-10">
                From building products to growing communities, I&apos;ve been lucky to
                work on some amazing things. Here&apos;s a quick look at my professional
                journey.
              </p>
            </ScrollReveal>

            {/* Interactive Timeline with Animated Fill */}
            <div className="relative ml-1">
              {/* Background vertical line */}
              <div className="absolute left-[4px] top-2 bottom-2 w-px bg-[var(--border)]" />

              {/* Dynamic filled line on scroll */}
              <div
                className="absolute left-[4px] top-2 w-px bg-[var(--ink)] transition-all duration-150 ease-out"
                style={{ height: `${Math.min(100, lineFill * 1.05)}%` }}
              />

              <div className="space-y-10">
                {experiences.map((exp, i) => (
                  <ScrollReveal key={i} delay={180 + i * 120}>
                    <div className="relative pl-8 group">
                      {/* Circle marker with active glowing state */}
                      <div
                        className={`absolute left-0 top-1.5 w-[9px] h-[9px] rounded-full border-[1.5px] bg-[var(--bg)] transition-all duration-300 ${
                          lineFill > i * 35 + 15
                            ? "border-[var(--ink)] scale-125 shadow-[0_0_8px_var(--ink)]"
                            : "border-[var(--muted)]"
                        }`}
                      />

                      <div className="flex gap-4 items-start">
                        <span className="text-[11px] text-[var(--muted)] whitespace-nowrap pt-0.5 min-w-[86px]">
                          {exp.period}
                        </span>

                        <div className="flex-1">
                          <div className="flex items-center gap-2.5 mb-2">
                            <div
                              className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[10px] font-bold font-mono flex-shrink-0 group-hover:scale-105 transition-transform"
                              style={{ backgroundColor: exp.bgColor }}
                            >
                              {exp.initials}
                            </div>
                            <div>
                              <p className="font-semibold text-[var(--ink)] text-[14px] leading-tight">
                                {exp.org}
                              </p>
                              <p className="text-[var(--muted)] text-[11px] leading-tight">
                                {exp.role}
                              </p>
                            </div>
                          </div>
                          <p className="text-[var(--ink-secondary)] text-[13px] leading-relaxed">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right – Photo Collage with Scroll Parallax ───────── */}
          <div className="relative hidden lg:flex items-center justify-center h-[540px]">

            {/* Script top-right */}
            <div className="absolute top-6 right-4 font-script text-[17px] text-[var(--muted)] rotate-[-8deg] leading-snug text-right z-20 pointer-events-none">
              Better products.<br />Bigger impact.
            </div>

            {/* Backdrop circle */}
            <div className="absolute w-[350px] h-[350px] rounded-full bg-[var(--surface-card)] border border-[var(--border)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-colors" />

            {/* Photo / placeholder */}
            <div className="relative z-10 w-[310px] h-[310px] rounded-full overflow-hidden border-2 border-[var(--border)] shadow-md">
              <div className="w-full h-full bg-[#1C1C1C] flex items-center justify-center select-none">
                <span className="font-display text-[52px] font-bold text-white/20">AR</span>
              </div>
            </div>

            {/* Nundina card – top-left */}
            <FloatingCard
              icon={
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-[13px]"
                  style={{ backgroundColor: "#1B4332" }}
                >
                  N
                </div>
              }
              title="Nundina Finance"
              subtitle="Growth Team"
              chips={["Community", "Content", "Brand"]}
              arrow
              className="top-10 left-0 z-20"
              style={{
                transform: `translate3d(0, ${-scrollY * 0.04}px, 0)`,
              }}
            />

            {/* Automa card – bottom-left */}
            <FloatingCard
              icon={
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-[13px]"
                  style={{ backgroundColor: "#111111" }}
                >
                  A
                </div>
              }
              title="Automa"
              subtitle="Growth Lead"
              chips={["Agents", "Payments", "Web3"]}
              arrow
              className="bottom-24 left-4 z-20"
              style={{
                transform: `translate3d(0, ${scrollY * 0.05}px, 0)`,
              }}
            />

            {/* Freelance card – bottom-right */}
            <FloatingCard
              icon={
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#374151]">
                  <span className="text-white font-mono text-[9px] font-bold">&lt;/&gt;</span>
                </div>
              }
              title="Freelance"
              subtitle="Developer & Creator"
              chips={["Web3", "Product", "Community"]}
              arrow
              className="bottom-12 right-0 z-20"
              style={{
                transform: `translate3d(0, ${-scrollY * 0.03}px, 0)`,
              }}
            />

            {/* Learning annotation */}
            <div className="absolute bottom-4 right-6 z-20 pointer-events-none">
              <p className="text-[11px] font-medium text-[var(--muted)] leading-tight text-right">Learning.</p>
              <p className="text-[11px] font-medium text-[var(--muted)] leading-tight text-right">Building.</p>
              <p className="text-[11px] font-medium text-[var(--muted)] leading-tight text-right">Growing.</p>
            </div>
          </div>
        </div>

        {/* ── Bottom strip ─────────────────────────────────────── */}
        <ScrollReveal delay={150}>
          <div className="flex items-center gap-3 mt-12 pt-5 border-t border-[var(--border)]">
            <SparkleIcon size={12} className="text-[var(--muted)]" />
            <div className="w-10 h-px bg-[var(--muted)]" />
            <span className="text-[10px] font-medium tracking-[0.18em] text-[var(--muted)] uppercase">
              Some Milestones, Not The Finish Line
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
