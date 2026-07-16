import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col gap-4 rounded-lg border border-surface-border bg-surface p-6 transition-colors hover:border-accent">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-foreground">
          {project.title}
        </h3>
        <div className="flex gap-3 font-mono text-xs text-muted">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              Live
            </a>
          )}
        </div>
      </div>
      <p className="text-sm text-muted">{project.description}</p>
      <ul className="flex flex-wrap gap-2 font-mono text-xs text-accent">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded border border-surface-border px-2 py-1"
          >
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}
