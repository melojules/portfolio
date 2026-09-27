import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import Arrow from "./Arrow";
import { projects } from "@/data/projects";
export default function Projects() {
  return (
    <section id="projects" className="section wrap">
      <div className="section-top">
        <SectionHeading
          eyebrow="Built with curiosity"
          title="Selected projects"
        />
        <p>
          A few things I’ve built.
          <br />A lot of details considered.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
      <div className="section-action">
        <a
          href="https://github.com/melojules"
          target="_blank"
          rel="noreferrer"
          className="button button-orange"
        >
          More on GitHub <Arrow />
        </a>
      </div>
    </section>
  );
}
