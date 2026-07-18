import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="relative flex flex-col gap-4 rounded-lg border border-surface-border bg-surface p-6 transition-colors hover:border-accent">
      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${project.title} on GitHub`}
          className="absolute inset-0 z-0"
        />
      )}
      <div className="pointer-events-none relative z-10 flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-foreground">
          {project.title}
        </h3>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="pointer-events-auto font-mono text-xs text-muted transition-colors hover:text-accent"
          >
            Live
          </a>
        )}
      </div>
      <p className="pointer-events-none relative z-10 text-sm text-muted">
        {project.description}
      </p>
      <ul className="pointer-events-none relative z-10 flex flex-wrap gap-2 font-mono text-xs text-accent">
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
