export function TagBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[var(--tag-bg)] border border-[var(--border)] px-3 py-1 text-[11px] font-medium text-[var(--ink)] transition-colors">
      {label}
    </span>
  );
}
