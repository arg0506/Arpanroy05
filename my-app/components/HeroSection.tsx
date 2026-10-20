"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SparkleIcon } from "@/components/ui/SparkleIcon";

/* ── Floating Card Component for Hero ────────────────────────── */
interface HeroCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  className?: string;
  parallaxOffset?: number;
}

function HeroCard({ icon, title, subtitle, className = "", parallaxOffset = 0 }: HeroCardProps) {
  return (
    <div
      style={{
        transform: `translate3d(0, ${parallaxOffset}px, 0)`,
        transition: "transform 0.15s cubic-bezier(0, 0, 0.2, 1)",
      }}
      className={`absolute z-20 bg-[var(--surface-card)] rounded-2xl shadow-[var(--shadow-card)] border border-[var(--border-card)] p-3.5 w-[172px] transition-colors duration-200 hover:-translate-y-2 hover:shadow-xl ${className}`}
    >
      <div className="mb-2">{icon}</div>
      <p className="font-semibold text-[var(--ink)] text-[13px] leading-tight">{title}</p>
      <p className="text-[var(--muted)] text-[11px] leading-snug mt-0.5">{subtitle}</p>
    </div>
  );
}

/* ── Circular Rotating Stamp Badge ────────────────────────────── */
function RotatingStampBadge({ scrollY }: { scrollY: number }) {
  return (
    <div
      style={{
        transform: `rotate(${scrollY * 0.25}deg)`,
        transition: "transform 0.1s linear",
      }}
      className="relative w-20 h-20 select-none pointer-events-none"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
        <defs>
          <path
            id="textCircle"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
          />
        </defs>
        <text className="text-[10px] uppercase tracking-[0.22em] fill-[var(--muted)] font-medium">
          <textPath href="#textCircle" startOffset="0%">
            BUILD • GROW • CONNECT •
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <SparkleIcon size={14} className="text-[var(--ink)]" />
      </div>
    </div>
  );
}

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
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
    <section className="relative min-h-[90vh] bg-[var(--bg)] px-6 lg:px-16 pt-6 pb-14 overflow-hidden flex flex-col justify-between transition-colors duration-200">

      {/* ── Top Header Text & Badge ───────────────────────────── */}
      <div className="max-w-[1280px] w-full mx-auto relative pt-2">

        {/* Top-Right Stamp Badge */}
        <div
          className={`hidden md:block absolute -top-1 right-4 lg:right-12 z-30 transition-all duration-700 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <RotatingStampBadge scrollY={scrollY} />
        </div>

        {/* Center Headlines */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          <h1
            className={`font-display font-bold text-[var(--ink)] leading-[1.08] tracking-tight mb-3 transition-all duration-700 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ fontSize: "clamp(28px, 4.2vw, 52px)" }}
          >
            Building what comes next.
            <br />
            <em className="font-normal italic">one idea at a time.</em>
          </h1>

          <p
            className={`text-[var(--ink-secondary)] text-[14px] md:text-[15px] max-w-lg mx-auto leading-relaxed mb-6 transition-all duration-700 delay-100 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Web3 growth, community, and products built for the next internet.
          </p>

          {/* Dual Action Buttons */}
          <div
            className={`flex items-center justify-center gap-3 mb-2 transition-all duration-700 delay-200 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <a
              href="#work"
              className="bg-[var(--ink)] text-[var(--bg)] rounded-full px-5 py-2.5 text-[13px] font-medium flex items-center gap-2 hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all shadow-sm"
            >
              Explore my work <span>↗</span>
            </a>
            <a
              href="#contact"
              className="bg-[var(--surface-pill)] text-[var(--ink)] border border-[var(--border)] rounded-full px-5 py-2.5 text-[13px] font-medium flex items-center gap-2 hover:bg-[var(--tag-bg)] hover:scale-[1.02] active:scale-95 transition-all shadow-sm"
            >
              <span className="w-3.5 h-3.5 rounded-full bg-[var(--ink)] text-[var(--bg)] flex items-center justify-center text-[7px] pl-0.5">
                ▶
              </span>
              Let&apos;s connect
            </a>
          </div>
        </div>
      </div>

      {/* ── Middle Staged Portrait + Connector Lines + Cards ──── */}
      <div className="relative max-w-[1050px] w-full mx-auto h-[380px] md:h-[430px] flex items-center justify-center my-1">

        {/* Connector Lines SVG */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-10"
          viewBox="0 0 1050 430"
          fill="none"
        >
          {/* Card 1 (Top-Left Growth) to Center */}
          <path
            d="M 220 90 C 310 100, 400 170, 460 210"
            stroke="var(--connector)"
            strokeWidth="1.2"
            strokeDasharray="4 4"
          />
          {/* Card 2 (Mid-Left Web3) to Mic/Hand */}
          <path
            d="M 260 270 C 330 270, 380 300, 420 310"
            stroke="var(--connector)"
            strokeWidth="1.2"
            strokeDasharray="4 4"
          />
          {/* Card 3 (Mid-Right Community) to Shoulder */}
          <path
            d="M 780 270 C 720 270, 670 310, 600 320"
            stroke="var(--connector)"
            strokeWidth="1.2"
            strokeDasharray="4 4"
          />
          {/* Card 4 (Far-Right Building) to Collar/Neck */}
          <path
            d="M 830 160 C 760 170, 670 180, 590 200"
            stroke="var(--connector)"
            strokeWidth="1.2"
            strokeDasharray="4 4"
          />
        </svg>

        {/* Center Scaled Portrait with subtle downward drift on scroll */}
        <div
          style={{
            transform: `translate3d(0, ${scrollY * 0.04}px, 0)`,
            transition: "transform 0.1s ease-out",
          }}
          className={`relative z-10 w-[280px] sm:w-[380px] md:w-[460px] lg:w-[500px] h-[280px] sm:h-[340px] md:h-[390px] lg:h-[420px] flex items-end justify-center transition-opacity duration-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src="/arpan-hero.png"
              alt="Arpan Roy"
              fill
              priority
              className="object-contain object-bottom filter grayscale contrast-105 select-none pointer-events-none"
              sizes="(max-width: 640px) 280px, (max-width: 768px) 380px, (max-width: 1024px) 460px, 500px"
            />
            {/* Smooth bottom gradient fade */}
            <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[var(--bg)] to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Card 1: Growth (Top Left) */}
        <HeroCard
          parallaxOffset={-scrollY * 0.12}
          className="hidden md:block top-4 left-4 lg:left-10"
          icon={
            <div className="w-7 h-7 rounded-lg bg-[#E0E7FF] dark:bg-[#4338CA]/25 flex items-center justify-center">
              <span className="text-[#4338CA] dark:text-[#A5B4FC] font-bold text-xs">↗</span>
            </div>
          }
          title="Growth"
          subtitle="Scaling products, communities and brands."
        />

        {/* Card 2: Web3 (Mid Left) */}
        <HeroCard
          parallaxOffset={scrollY * 0.08}
          className="hidden md:block bottom-12 left-6 lg:left-16"
          icon={
            <div className="w-7 h-7 rounded-lg bg-[#1C1C1E] dark:bg-[#2C2C32] flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
          }
          title="Web3"
          subtitle="Onchain products, real world impact."
        />

        {/* Card 3: Community (Mid Right) */}
        <HeroCard
          parallaxOffset={-scrollY * 0.1}
          className="hidden md:block bottom-14 right-6 lg:right-20"
          icon={
            <div className="w-7 h-7 rounded-lg bg-[#EEF2FF] dark:bg-[#4F46E5]/25 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
          }
          title="Community"
          subtitle="Communities that build together."
        />

        {/* Card 4: Building (Far Right) */}
        <HeroCard
          parallaxOffset={scrollY * 0.14}
          className="hidden md:block top-10 right-4 lg:right-8"
          icon={
            <div className="w-7 h-7 rounded-lg bg-[#F3F4F6] dark:bg-[#374151]/40 flex items-center justify-center">
              <span className="font-mono text-[10px] font-bold text-[var(--ink)]">&lt;/&gt;</span>
            </div>
          }
          title="Building"
          subtitle="Ideas to products. From 0 to 1."
        />
      </div>

      {/* ── Bottom Corner Accents ─────────────────────────────── */}
      <div
        className={`max-w-[1280px] w-full mx-auto flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-4 border-t border-[var(--border)] transition-all duration-700 delay-300 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Bottom Left: Tagline + Avatar Stack */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="w-4 h-px bg-[var(--muted)]" />
            <p className="text-[12px] text-[var(--muted)] font-medium">
              Building across Web3, growth & community.
            </p>
          </div>
          {/* Avatar stack */}
          <div className="flex items-center -space-x-2 pl-6">
            <div className="w-6 h-6 rounded-full bg-[#3B82F6] border-2 border-[var(--bg)] flex items-center justify-center text-white text-[9px] font-bold">
              A
            </div>
            <div className="w-6 h-6 rounded-full bg-[#10B981] border-2 border-[var(--bg)] flex items-center justify-center text-white text-[9px] font-bold">
              R
            </div>
            <div className="w-6 h-6 rounded-full bg-[#8B5CF6] border-2 border-[var(--bg)] flex items-center justify-center text-white text-[9px] font-bold">
              W
            </div>
            <div className="w-6 h-6 rounded-full bg-[#F59E0B] border-2 border-[var(--bg)] flex items-center justify-center text-white text-[9px] font-bold">
              G
            </div>
            <div className="w-6 h-6 rounded-full bg-[var(--surface-pill)] border-2 border-[var(--bg)] flex items-center justify-center text-[var(--muted)] text-[10px] font-medium shadow-sm">
              +
            </div>
          </div>
        </div>

        {/* Bottom Right: Less noise. More impact. */}
        <div className="flex items-center gap-3 self-end sm:self-auto">
          <span className="w-4 h-px bg-[var(--muted)]" />
          <SparkleIcon size={12} className="text-[var(--ink)]" />
          <div className="text-right">
            <p className="text-[12px] font-medium text-[var(--ink)] leading-tight">Less noise.</p>
            <p className="text-[12px] text-[var(--muted)] leading-tight">More impact.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
