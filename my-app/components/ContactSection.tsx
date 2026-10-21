"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[var(--bg)] px-6 lg:px-16 py-24 border-t border-[var(--border)] transition-colors duration-200 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto">

        {/* ── Two-Column Main Content ──────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[50vh]">

          {/* Left Column: Copy & Actions */}
          <div className="flex flex-col justify-center">

            {/* Eyebrow */}
            <ScrollReveal delay={50}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-7 h-px bg-[var(--muted)]" />
                <span className="text-[11px] font-medium tracking-[0.18em] text-[var(--muted)] uppercase">
                  Let&apos;s Connect
                </span>
              </div>
            </ScrollReveal>

            {/* Heading */}
            <ScrollReveal delay={120}>
              <h2
                className="font-display font-bold text-[var(--ink)] leading-[1.12] mb-5"
                style={{ fontSize: "clamp(26px, 3.6vw, 44px)" }}
              >
                Have an idea worth building?
                <br />
                <em className="font-normal italic">Let&apos;s talk.</em>
              </h2>
            </ScrollReveal>

            {/* Body */}
            <ScrollReveal delay={200}>
              <p className="text-[var(--ink-secondary)] text-[14px] md:text-[15px] leading-relaxed mb-8 max-w-[480px]">
                I&apos;m open to connecting with founders, developers, Web3 teams,
                growth professionals, and people exploring the future of AI and
                decentralized finance. Whether it&apos;s a product collaboration, a
                technical discussion, or simply an interesting idea — I&apos;d love to
                hear from you.
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal delay={280}>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/arpan-roy-75955031a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--ink)] text-[var(--bg)] rounded-full px-6 py-3 text-[13px] font-medium flex items-center gap-2 hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all shadow-sm"
                >
                  Connect on LinkedIn <span>↗</span>
                </a>
                <a
                  href="https://x.com/arg05_06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--surface-pill)] text-[var(--ink)] border border-[var(--border)] rounded-full px-6 py-3 text-[13px] font-medium flex items-center gap-2 hover:bg-[var(--tag-bg)] hover:scale-[1.02] active:scale-95 transition-all shadow-sm"
                >
                  Follow on X <span>↗</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Handshake Illustration */}
          <ScrollReveal delay={220} className="flex items-center justify-center lg:justify-end">
            <div className="relative w-[240px] sm:w-[280px] md:w-[320px] lg:w-[350px] h-[380px] sm:h-[440px] md:h-[500px] flex items-center justify-center group">


              <div className="relative w-full h-full transition-transform duration-300 group-hover:-translate-y-2">
                <Image
                  src="/letsconnect.png"
                  alt="Let's connect handshake artwork"
                  fill
                  className="object-contain filter grayscale contrast-110 dark:brightness-110 dark:contrast-125 dark:drop-shadow-[0_0_35px_rgba(255,255,255,0.08)] select-none pointer-events-none"
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 320px, 350px"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
