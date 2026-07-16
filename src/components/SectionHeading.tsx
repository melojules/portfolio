export default function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <h2 className="mb-10 flex items-baseline gap-3 text-2xl font-semibold text-foreground">
      <span className="font-mono text-lg text-accent">{index}</span>
      {title}
    </h2>
  );
}
