"use client";

import { TagBadge } from "@/components/ui/TagBadge";
import { SparkleIcon } from "@/components/ui/SparkleIcon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

// Sources: resume (Arpanroy_resumeup.pdf) and Myabout.md.
// Entries without a dated source use "Current", as stated in Myabout.md.
const experiences = [
  {
    role: "Founder & Founding Engineer",
    org: "Automa",
    period: "Current",
    initials: "A",
    bgColor: "#111111",
    description:
      "Building financial infrastructure that lets autonomous AI agents receive, hold and spend digital assets under programmable rules and human-defined controls.",
    tags: ["AI Agents", "Payments", "Web3"],
  },
  {
    role: "Growth Team",
    org: "Nundina Finance",
    period: "Current",
    initials: "N",
    bgColor: "#1B4332",
    description:
      "Growth initiatives for a Web3 private credit secondary market product: brand awareness, content, community and social strategy.",
    tags: ["Growth", "Community", "Web3"],
  },
  {
    role: "Lead",
    org: "AWS Student Builder Group, GCELT",
    period: "Aug 2026 – Jul 2027",
    initials: "AWS",
    bgColor: "#232F3E",
    description:
      "Running technical workshops and student initiatives on AWS cloud, AI and emerging technology, and helping students build real-world projects.",
    tags: ["AWS", "Workshops", "Community"],
  },
  {
    role: "Ambassador",
    org: "Stellar Development Foundation",
    period: "Jul 2026 – Present",
    initials: "S",
    bgColor: "#374151",
    description:
      "Growing the Stellar ecosystem through developer and student community engagement, and raising awareness of blockchain development opportunities.",
    tags: ["Stellar", "Blockchain", "Community"],
  },
  {
    role: "Ambassador",
    org: "Midnight",
    period: "Jul 2026 – Present",
    initials: "M",
    bgColor: "#312E81",
    description:
      "Representing Midnight on campus, creating educational content on privacy-preserving technology, and organising campus and online events.",
    tags: ["Privacy", "Web3", "Education"],
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-[var(--bg)] px-6 lg:px-16 pt-16 pb-24 border-t border-[var(--border)] transition-colors duration-200"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 lg:gap-20 items-start">

          {/* ── Left – Intro ─────────────────────────────────────── */}
          <div className="lg:sticky lg:top-32">
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
              <p className="text-[var(--ink-secondary)] text-[14px] md:text-[15px] leading-relaxed max-w-[440px]">
                From building products to growing communities, these are the roles
                I&apos;m currently in and the ecosystems I&apos;m working with.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={260}>
              <div className="mt-10 flex items-center gap-3">
                <SparkleIcon size={12} className="text-[var(--muted)]" />
                <div className="w-10 h-px bg-[var(--muted)]" />
                <span className="text-[10px] font-medium tracking-[0.18em] text-[var(--muted)] uppercase">
                  Some milestones, not the finish line
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* ── Right – Role cards ───────────────────────────────── */}
          <div className="flex flex-col gap-4">
            {experiences.map((exp, i) => (
              <ScrollReveal key={`${exp.org}-${exp.role}`} delay={120 + i * 90}>
                <article className="group bg-[var(--surface-card)] border border-[var(--border-card)] rounded-2xl p-6 shadow-[var(--shadow-card)] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-[11px] font-bold font-mono flex-shrink-0 group-hover:scale-105 transition-transform"
                        style={{ backgroundColor: exp.bgColor }}
                      >
                        {exp.initials}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-[var(--ink)] text-[16px] leading-tight">
                          {exp.role}
                        </h3>
                        <p className="text-[var(--ink-secondary)] text-[13px] leading-tight mt-1 truncate">
                          {exp.org}
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-[var(--muted)] whitespace-nowrap pt-1">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-[var(--ink-secondary)] text-[13px] leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <TagBadge key={tag} label={tag} />
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
