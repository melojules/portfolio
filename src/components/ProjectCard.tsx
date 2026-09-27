import type { Project } from "@/data/projects";
import Arrow from "./Arrow";
const covers: Record<
  string,
  { className: string; label: string; word: string; sub: string }
> = {
  "Quest LMS": {
    className: "quest",
    label: "LEARN. PLAY. LEVEL UP.",
    word: "quest",
    sub: "Learning, reimagined.",
  },
  "Ticketing System": {
    className: "ticket",
    label: "SUPPORT, SORTED.",
    word: "ticket /",
    sub: "A little more order.",
  },
  "Nanay's Kusina": {
    className: "kusina",
    label: "FROM OUR KITCHEN",
    word: "Nanay’s",
    sub: "KUSINA · MADE WITH LOVE",
  },
  "Harvest Lane": {
    className: "harvest",
    label: "FARM TO DOORSTEP",
    word: "harvest",
    sub: "Good things grow here.",
  },
  "PC Health Console": {
    className: "health",
    label: "YOUR SYSTEM, IN VIEW.",
    word: "pc / health",
    sub: "Driver · Performance · Disk",
  },
};
export default function ProjectCard({ project }: { project: Project }) {
  const cover = covers[project.title];
  return (
    <article className="project-card">
      <a
        href={project.repoUrl}
        target="_blank"
        rel="noreferrer"
        className="project-link"
        aria-label={`View ${project.title} on GitHub`}
      >
        <div className={`project-cover ${cover.className}`} aria-hidden="true">
          <span className="cover-caption">{cover.label}</span>
          <strong>
            {cover.word}
            <i>.</i>
          </strong>
          <span className="cover-sub">{cover.sub}</span>
          <div className="cover-decoration" />
        </div>
        <div className="project-info">
          <p className="project-category">
            {project.stack.slice(0, 2).join(" / ")}
          </p>
          <div className="project-title">
            <h3>{project.title}</h3>
            <Arrow diagonal />
          </div>
          <p>{project.description}</p>
          <ul className="project-stack">
            {project.stack.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </a>
    </article>
  );
}
