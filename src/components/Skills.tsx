import SectionHeading from "@/components/SectionHeading";
import { skillCategories, certifications, education } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-20">
      <SectionHeading index="02." title="Skills & Certifications" />

      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((category) => (
          <div key={category.label}>
            <h3 className="mb-3 font-mono text-sm text-accent">
              {category.label}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="rounded border border-surface-border px-3 py-1 font-mono text-xs text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-10 sm:grid-cols-2">
        <div>
          <h3 className="mb-4 text-lg font-semibold text-foreground">
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
          <h3 className="mb-4 text-lg font-semibold text-foreground">
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
