import SectionHeading from "./SectionHeading";
import Arrow from "./Arrow";
import { experience } from "@/data/experience";
export default function Experience() {
  return (
    <section id="experience" className="section wrap">
      <div className="section-top">
        <SectionHeading
          eyebrow="Behind the work"
          title="Experience that counts"
        />
        <a
          className="text-link"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/resume.pdf`}
          target="_blank"
          rel="noreferrer"
        >
          View résumé <Arrow diagonal />
        </a>
      </div>
      <div className="experience-list">
        {experience.map((item, i) => (
          <article className="experience-item" key={item.role}>
            <div className="experience-date">
              <span className="experience-marker" />
              {item.period}
              {i === 0 && <span className="current-role">Current role</span>}
            </div>
            <div>
              <p className="company">{item.company}</p>
              <h3>{item.role}</h3>
              <ul>
                {item.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
