import SectionHeading from "./SectionHeading";
import { skillCategories, certifications, education } from "@/data/skills";
export default function Skills() {
  return (
    <section id="skills" className="section wrap">
      <SectionHeading eyebrow="Always learning" title="Tools of the trade" />
      <div className="skills-grid">
        {skillCategories.map((c) => (
          <div className="skill-group" key={c.label}>
            <h3>{c.label}</h3>
            <ul>
              {c.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div id="certifications" className="credentials">
        <div>
          <h3>
            Certifications<span>.</span>
          </h3>
          <ul>
            {certifications.map((c) => (
              <li key={c.name}>
                {c.url ? (
                  <a href={c.url} target="_blank" rel="noreferrer">
                    {c.name} <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span>{c.name}</span>
                )}
                <time>{c.year}</time>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>
            Education<span>.</span>
          </h3>
          {education.map((e) => (
            <div className="education" key={e.degree}>
              <strong>{e.degree}</strong>
              <p>{e.school}</p>
              <span>{e.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
