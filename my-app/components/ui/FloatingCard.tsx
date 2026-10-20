interface FloatingCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  chips?: string[];
  arrow?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function FloatingCard({
  icon,
  title,
  subtitle,
  chips,
  arrow = false,
  className = "",
  style,
}: FloatingCardProps) {
  return (
    <div
      style={{ width: "172px", ...style }}
      className={`absolute bg-[var(--surface-card)] rounded-2xl shadow-[var(--shadow-card)] border border-[var(--border-card)] p-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${className}`}
    >
      {arrow && (
        <span className="absolute top-3 right-3 text-[var(--muted)] text-xs">↗</span>
      )}
      <div className="mb-2">{icon}</div>
      <p className="font-semibold text-[var(--ink)] text-[13px] leading-snug">{title}</p>
      <p className="text-[var(--muted)] text-[11px] leading-snug mt-0.5">{subtitle}</p>
      {chips && (
        <p className="text-[var(--muted)] text-[10px] mt-1.5 leading-relaxed">
          {chips.join(" · ")}
        </p>
      )}
    </div>
  );
}
