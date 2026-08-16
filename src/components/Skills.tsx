import SectionHeading from "@/components/SectionHeading";
import { skillCategories, certifications, education } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-14">
      <SectionHeading eyebrow="Toolchain" title="Skills & Certifications" />

      {/* One row per category: a two-column grid would tie every row's height
          to the tallest category and leave dead space under the short ones. */}
      <dl className="divide-y divide-surface-border border-y border-surface-border">
        {skillCategories.map((category) => (
          <div
            key={category.label}
            className="grid gap-2 py-3 sm:grid-cols-[7rem_1fr] sm:gap-6"
          >
            <dt className="font-mono text-xs uppercase tracking-wide text-accent sm:pt-1.5">
              {category.label}
            </dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="border border-surface-border px-3 py-1 font-mono text-xs text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <h3 className="mb-4 font-display text-lg font-semibold text-foreground">
            Certifications
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-muted">
            {certifications.map((cert) => (
              <li key={cert.name} className="flex justify-between gap-4">
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-accent"
                  >
                    {cert.name}
                  </a>
                ) : (
                  <span>{cert.name}</span>
                )}
                <span className="font-mono text-accent">{cert.year}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-display text-lg font-semibold text-foreground">
            Education
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-muted">
            {education.map((item) => (
              <li key={item.degree}>
                <p className="text-foreground">{item.degree}</p>
                <p>{item.school}</p>
                <p className="font-mono text-accent">{item.period}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
