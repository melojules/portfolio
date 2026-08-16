import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-14">
      <SectionHeading eyebrow="Record" title="Experience" />
      <a
        href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/resume.pdf`}
        target="_blank"
        rel="noreferrer"
        className="mb-6 inline-block border border-surface-border px-4 py-2 font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
      >
        Full report (résumé) ↓
      </a>
      <ol className="flex flex-col gap-6">
        {experience.map((item) => (
          <li
            key={`${item.role}-${item.company}`}
            className="border border-surface-border bg-surface p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-surface-border pb-3">
              <h3 className="font-display text-lg font-semibold text-foreground">
                {item.role}
              </h3>
              <span className="flex items-center gap-1.5 border border-pass px-2 py-0.5 font-mono text-xs font-semibold uppercase tracking-wide text-pass">
                <span aria-hidden="true">✓</span> Pass
              </span>
            </div>
            <dl className="mt-3 flex flex-wrap gap-x-8 gap-y-1 font-mono text-xs text-muted">
              <div className="flex gap-2">
                <dt className="text-foreground">Environment:</dt>
                <dd>{item.company}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-foreground">Duration:</dt>
                <dd>{item.period}</dd>
              </div>
            </dl>
            <div className="mt-4">
              <p className="mb-1.5 font-mono text-xs uppercase tracking-wide text-muted">
                Findings
              </p>
              <ul className="flex flex-col gap-1.5 text-sm text-foreground">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-0.5 text-accent" aria-hidden="true">
                      →
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
