"use client";

import Image from "next/image";
import { TagBadge } from "@/components/ui/TagBadge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

// Sources: resume (Arpanroy_resumeup.pdf) and Myabout.md.
// Roles without a dated source are marked "Current", as stated in Myabout.md.
const experiences = [
  {
    index: "01",
    role: "Founder & Founding Engineer",
    org: "Automa",
    period: "Current",
    current: true,
    logo: null,
    initials: "A",
    bgColor: "#111111",
    description:
      "Building financial infrastructure that lets autonomous AI agents receive, hold and spend digital assets under programmable rules and human-defined controls.",
    tags: ["AI Agents", "Payments", "Web3"],
  },
  {
    index: "02",
    role: "Growth Team",
    org: "Nundina Finance",
    period: "Current",
    current: true,
    logo: null,
    initials: "N",
    bgColor: "#1B4332",
    description:
      "Growth initiatives for a Web3 private credit secondary market product: brand awareness, content, community and social strategy.",
    tags: ["Growth", "Community", "Web3"],
  },
  {
    index: "03",
    role: "Lead",
    org: "AWS Student Builder Group, GCELT",
    period: "Aug 2026 – Jul 2027",
    current: true,
    logo: "/logos/aws.svg",
    initials: "AWS",
    bgColor: "#232F3E",
    description:
      "Running technical workshops and student initiatives on AWS cloud, AI and emerging technology, and helping students build real-world projects.",
    tags: ["AWS", "Workshops", "Community"],
  },
  {
    index: "04",
    role: "Ambassador",
    org: "Stellar Development Foundation",
    period: "Jul 2026 – Present",
    current: true,
    logo: "/logos/stellar.svg",
    initials: "S",
    bgColor: "#374151",
    description:
      "Growing the Stellar ecosystem through developer and student community engagement, and raising awareness of blockchain development opportunities.",
    tags: ["Stellar", "Blockchain", "Community"],
  },
  {
    index: "05",
    role: "Ambassador",
    org: "Midnight",
    period: "Jul 2026 – Present",
    current: true,
    logo: null,
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
      className="bg-[var(--bg)] px-6 lg:px-16 pt-16 pb-24 border-t border-[var(--border)] transition-colors duration-200"
    >
      <div className="max-w-[1280px] mx-auto">

        {/* ── Header ───────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10">
          <ScrollReveal delay={50}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-px bg-[var(--muted)]" />
              <span className="text-[11px] font-medium tracking-[0.18em] text-[var(--muted)] uppercase">
                My Career Experience
              </span>
            </div>
            <h2
              className="font-display font-bold text-[var(--ink)] leading-[1.02] tracking-tight"
              style={{ fontSize: "clamp(40px, 6vw, 84px)" }}
            >
              The journey
              <br />
              <em className="font-normal italic text-[var(--ink-secondary)]">so far.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <p className="text-[var(--ink-secondary)] text-[14px] md:text-[15px] leading-relaxed max-w-[360px]">
              From building products to growing communities. These are the roles
              I&apos;m in right now and the ecosystems I&apos;m building with.
            </p>
          </ScrollReveal>
        </div>

        {/* ── Rows ─────────────────────────────────────────────── */}
        <div className="border-t-2 border-[var(--ink)]">
          {experiences.map((exp, i) => (
            <ScrollReveal key={`${exp.org}-${exp.role}`} delay={100 + i * 80}>
              <article className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-9 border-b border-[var(--border)] transition-colors duration-300 hover:bg-[var(--surface-card)] px-0 md:px-4 -mx-0 md:-mx-4">

                {/* Index */}
                <div className="md:col-span-1">
                  <span className="font-mono text-[12px] text-[var(--muted)]">{exp.index}</span>
                </div>

                {/* Logo + role */}
                <div className="md:col-span-5 flex items-start gap-5">
                  {exp.logo ? (
                    <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-white border border-[var(--border-card)] flex items-center justify-center p-3 shadow-sm group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={exp.logo}
                        alt={`${exp.org} logo`}
                        width={44}
                        height={44}
                        unoptimized
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div
                      className="w-16 h-16 flex-shrink-0 rounded-2xl flex items-center justify-center text-white font-mono font-bold text-[15px] group-hover:scale-105 transition-transform duration-300"
                      style={{ backgroundColor: exp.bgColor }}
                    >
                      {exp.initials}
                    </div>
                  )}
                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-[var(--ink)] text-[24px] md:text-[28px] leading-tight">
                      {exp.role}
                    </h3>
                    <p className="text-[var(--ink-secondary)] text-[15px] mt-1.5">{exp.org}</p>
                  </div>
                </div>

                {/* Period + description + tags */}
                <div className="md:col-span-6 flex flex-col gap-4">
                  <div>
                    {exp.current ? (
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface-card)] border border-[var(--border)] text-[11px] font-mono text-[var(--ink)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {exp.period}
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-[var(--muted)]">{exp.period}</span>
                    )}
                  </div>
                  <p className="text-[var(--ink-secondary)] text-[14px] md:text-[15px] leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <TagBadge key={tag} label={tag} />
                    ))}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
