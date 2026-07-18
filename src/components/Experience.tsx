import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-20">
      <div className="mb-10 flex items-center justify-between">
        <SectionHeading index="02." title="Experience" />
        <a
          href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/resume.pdf`}
          target="_blank"
          rel="noreferrer"
          className="mb-10 rounded border border-surface-border px-4 py-2 font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Resume ↓
        </a>
      </div>
      <ol className="flex flex-col gap-10 border-l border-surface-border pl-8">
        {experience.map((item) => (
          <li key={`${item.role}-${item.company}`} className="relative">
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 size-2.5 rounded-full bg-accent" />
            <p className="font-mono text-sm text-accent">{item.period}</p>
            <h3 className="text-lg font-semibold text-foreground">
              {item.role} · {item.company}
            </h3>
            <ul className="mt-2 flex flex-col gap-1 text-sm text-muted">
              {item.points.map((point) => (
                <li key={point}>— {point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
