"use client";

import Image from "next/image";
import { TagBadge } from "@/components/ui/TagBadge";
import { SparkleIcon } from "@/components/ui/SparkleIcon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const GITHUB_USER = "https://github.com/arg0506";

const projects = [
  {
    id: "voxis",
    name: "Voxis",
    description:
      "Zero-knowledge voting DApp on Midnight for anonymous, verifiable governance.",
    tags: ["TypeScript", "Web3", "ZK"],
    image: "/projects/voxis.png",
    liveUrl: "https://voxis-plum.vercel.app",
    repoUrl: `${GITHUB_USER}/Voxis`,
  },
  {
    id: "bidforge",
    name: "BidForge",
    description:
      "Decentralized auction platform with live bid updates and multi-wallet support.",
    tags: ["TypeScript", "Web3", "Auctions"],
    image: "/projects/bidforge.png",
    liveUrl: "https://bid-forge-brjz.vercel.app/",
    repoUrl: `${GITHUB_USER}/BidForge`,
  },
  {
    id: "orion",
    name: "Orion",
    description:
      "Web3 wallet dashboard on Stellar Testnet with Freighter and real-time balances.",
    tags: ["TypeScript", "Stellar", "Dashboard"],
    image: "/projects/orion.png",
    liveUrl: "https://orion-xi-blond.vercel.app",
    repoUrl: `${GITHUB_USER}/Orion`,
  },
  {
    id: "flowpilot",
    name: "Flowpilot",
    description:
      "AI workflow automation with Soroban smart contracts and signed audit logs.",
    tags: ["TypeScript", "AI", "Soroban"],
    image: "/projects/flowpilot.png",
    liveUrl: "https://flowpilot-pied.vercel.app",
    repoUrl: `${GITHUB_USER}/Flowpilot`,
  },
  {
    id: "nutri-mind",
    name: "Nutri-Mind",
    description:
      "AI nutrition assistant giving context-aware food recommendations in real time.",
    tags: ["HTML", "AI", "Health"],
    image: "/projects/nutrimind.png",
    liveUrl: "https://nutri-mind-three.vercel.app",
    repoUrl: `${GITHUB_USER}/Nutri-Mind`,
  },
  {
    id: "devpulse",
    name: "DevPulse",
    description:
      "Real-time chat and community platform for developers with inline code formatting.",
    tags: ["TypeScript", "Realtime", "Community"],
    image: "/projects/devpulse.png",
    liveUrl: "https://devpulse-lake-kappa.vercel.app",
    repoUrl: `${GITHUB_USER}/Devpulse`,
  },
];

export function WorkSection() {
  return (
    <section id="work" className="min-h-screen bg-[var(--bg)] px-6 lg:px-16 pt-16 pb-24 border-t border-[var(--border)] transition-colors duration-200">
      <div className="max-w-[1280px] mx-auto">

        {/* ── Top two-column split ─────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[48vh] pt-4 mb-14">

          {/* Left */}
          <div className="flex flex-col justify-center">
            <ScrollReveal delay={50}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-7 h-px bg-[var(--muted)]" />
                <span className="text-[11px] font-medium tracking-[0.18em] text-[var(--muted)] uppercase">
                  My Projects
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <h2
                className="font-display font-bold text-[var(--ink)] leading-[1.12] mb-5"
                style={{ fontSize: "clamp(26px, 3.6vw, 44px)" }}
              >
                Ideas in progress.
                <br />
                <em className="font-normal italic">Built with intention.</em>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-[var(--ink-secondary)] text-[14px] md:text-[15px] leading-relaxed max-w-[440px]">
                A selection of projects from my GitHub, from Web3 products to
                AI tools. Each one is a step towards building useful, open and
                impactful experiences.
              </p>
            </ScrollReveal>
          </div>

          {/* Right – Featured collage */}
          <div className="relative hidden lg:block h-[360px]">
            {/* Floating tag chips */}
            <div className="absolute top-8 left-0 bg-[var(--surface-card)] border border-[var(--border)] rounded-full px-3 py-1.5 flex items-center gap-2 shadow-sm">
              <div className="w-4 h-4 rounded-full bg-[#2563EB] flex items-center justify-center flex-shrink-0">
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                  <circle cx="5" cy="5" r="4" stroke="white" strokeWidth="1.2" />
                  <ellipse cx="5" cy="5" rx="2" ry="4" stroke="white" strokeWidth="1.2" />
                  <line x1="1" y1="5" x2="9" y2="5" stroke="white" strokeWidth="1.2" />
                </svg>
              </div>
              <span className="text-xs font-medium text-[var(--ink)]">Web3</span>
            </div>

            <div className="absolute top-8 right-8 bg-[var(--surface-card)] border border-[var(--border)] rounded-full px-3 py-1.5 flex items-center gap-2 shadow-sm">
              <div className="w-4 h-4 rounded-sm bg-[#6D28D9] flex items-center justify-center flex-shrink-0">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="white">
                  <rect x="1" y="1" width="2.5" height="2.5" rx="0.5" />
                  <rect x="4.5" y="1" width="2.5" height="2.5" rx="0.5" />
                  <rect x="1" y="4.5" width="2.5" height="2.5" rx="0.5" />
                  <rect x="4.5" y="4.5" width="2.5" height="2.5" rx="0.5" />
                </svg>
              </div>
              <span className="text-xs font-medium text-[var(--ink)]">Products</span>
            </div>

            {/* Featured Voxis dark card */}
            <ScrollReveal delay={150}>
              <div className="absolute top-[72px] left-[14%] w-[264px] bg-[#111111] dark:bg-[#18181C] border border-white/10 rounded-2xl p-6 shadow-2xl z-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-500/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-display font-bold text-white text-[15px]">V</span>
                  </div>
                  <span className="font-semibold text-white text-[15px]">Voxis</span>
                </div>
                <p className="text-white/70 text-[13px] leading-relaxed mb-5">
                  Zero-knowledge voting<br />for anonymous governance.
                </p>
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] text-white/80 font-medium">
                  Featured
                </span>
              </div>
            </ScrollReveal>

            {/* Community chip */}
            <div className="absolute bottom-10 left-2 bg-[var(--surface-card)] border border-[var(--border)] rounded-full px-3 py-1.5 flex items-center gap-2 shadow-sm">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
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
              <span className="text-xs font-medium text-[var(--ink)]">Community</span>
            </div>

            {/* Script annotation */}
            <div className="absolute bottom-3 right-4 font-script text-[17px] text-[var(--muted)] rotate-[-8deg] leading-snug text-right pointer-events-none">
              Building what&apos;s next.
            </div>
          </div>
        </div>

        {/* ── Project Cards Grid with Staggered Entrance ─────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, index) => (
            <ScrollReveal key={p.id} delay={index * 110}>
              <article className="group bg-[var(--surface-card)] rounded-2xl border border-[var(--border-card)] overflow-hidden flex flex-col shadow-[var(--shadow-card)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                {/* Screenshot */}
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${p.name} live demo`}
                  className="relative block aspect-[16/10] overflow-hidden border-b border-[var(--border)] bg-[var(--bg)]"
                >
                  <Image
                    src={p.image}
                    alt={`${p.name} screenshot`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </a>

                {/* Name + description */}
                <div className="flex flex-col gap-3 p-5 flex-1">
                  <h3 className="font-semibold text-[var(--ink)] text-[16px]">
                    {p.name}
                  </h3>
                  <p className="text-[var(--ink-secondary)] text-[13px] leading-relaxed flex-1">
                    {p.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <TagBadge key={tag} label={tag} />
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center justify-between px-5 py-3.5 border-t border-[var(--border)]">
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-[var(--ink)] font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Live demo <span aria-hidden="true">→</span>
                  </a>
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
                  >
                    Source code ↗
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* ── Bottom strip ─────────────────────────────────────── */}
        <ScrollReveal delay={200}>
          <div className="flex items-center justify-between mt-12 pt-5 border-t border-[var(--border)]">
            <div className="flex items-center gap-3">
              <SparkleIcon size={12} className="text-[var(--muted)]" />
              <div className="w-10 h-px bg-[var(--muted)]" />
              <span className="text-[10px] font-medium tracking-[0.18em] text-[var(--muted)] uppercase">
                More on{" "}
                <a
                  href={GITHUB_USER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--ink)] transition-colors"
                >
                  GitHub
                </a>
              </span>
            </div>
            <span className="text-[11px] text-[var(--muted)] tracking-wider">
              Build / Learn / Create
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
