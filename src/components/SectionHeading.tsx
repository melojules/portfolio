export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10 flex items-baseline gap-3 border-b border-surface-border pb-3">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </span>
      <span className="h-px flex-1 bg-surface-border" />
      <h2 className="font-display text-2xl font-semibold text-foreground">
        {title}
      </h2>
    </div>
  );
}
