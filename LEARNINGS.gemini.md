# LEARNINGS

## PRAR Cycle Log

### [2026-10-20] - Redesigned Editorial Footer Section & Liquid Art Integration
- **Perceive**: Inspected `public/footerart.jpg` (341x512 monochromatic fluid ink topography). Noticed current footer was a minimal 2-line strip at the bottom of `ContactSection.tsx`.
- **Reason**: Decoupling the footer into a dedicated component (`Footer.tsx`) provides room for an editorial closing layout, an archival artwork showcase card with hover micro-interactions, brand statement with live availability pulse, Kolkata coordinates/timezone, multi-column navigation, and a monumental edge-to-edge watermark.
- **Act**:
  - Removed temporary footer strip from `ContactSection.tsx`.
  - Created `Footer.tsx` with responsive 3-column layout, museum badge overlay for `footerart.jpg`, live status indicator, and interactive smooth "Back to top" button.
  - Rendered `Footer` in `app/page.tsx`.
- **Refine**: Verified dev server builds cleanly (`HTTP 200`), images and typography load with zero errors, and responsiveness tested across screen widths.

### [2026-10-20] - Retro PC Workstation Integration in About Section
- **Perceive**: User requested adding `public/compp.png` (1588x990 retro CRT terminal with 404 Blue Screen) into the right side of the About section, replacing the circular placeholder avatar.
- **Reason**: The retro personal computer with floppy drive, mechanical keyboard, and CRT monitor fits the hacker/builder identity. Framing it with the floating cards (`Build`, `Community`, `Web3`, `Growth`) and handwritten annotation creates an engaging, nostalgic focal point.
- **Act**:
  - Replaced the circular placeholder in `AboutSection.tsx` with `compp.png`.
  - Added CRT blue screen glow in dark mode (`dark:drop-shadow-[0_12px_45px_rgba(59,130,246,0.24)]`).
  - Added responsive scaling and smooth hover micro-lift.
  - Wrapped right column in `ScrollReveal` for seamless entry animation.
- **Refine**: Verified compilation with Turbopack and validated HTTP 200 with `compp.png` rendered in HTML.

### [2026-10-20] - Decorative Star Cleanup & Typographic Scale Reduction
- **Perceive**: User requested removing stars and reducing font size.
- **Reason**: The floating sparkle stars added unnecessary visual noise around the retro computer terminal and other sections. Section headlines (`clamp(34px, 4.8vw, 62px)`) were dominating relative to the hero section (`clamp(28px, 4.2vw, 52px)`).
- **Act**:
  - Removed decorative sparkle stars across `AboutSection.tsx`, `ExperienceSection.tsx`, and `WorkSection.tsx`.
  - Scaled down section display headlines from `clamp(34px, 4.8vw, 62px)` to `clamp(26px, 3.6vw, 44px)` across About, Work, Experience, and Contact sections.
  - Reduced body paragraph typography from `text-[16px] md:text-[17px]` to `text-[14px] md:text-[15px]`.
- **Refine**: Verified with Turbopack (compiled in 649ms) and confirmed clean, balanced layout on `http://localhost:3000`.
