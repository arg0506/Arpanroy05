import Image from "next/image";

export function FooterArt() {
  return (
    <div className="relative w-full h-[220px] sm:h-[300px] md:h-[360px] overflow-hidden bg-black select-none" aria-hidden="true">
      <Image
        src="/abstract-swirl.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center opacity-80 mix-blend-luminosity"
      />
      {/* Fade into the page background at the top edge */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[var(--bg)] to-transparent" />
    </div>
  );
}
