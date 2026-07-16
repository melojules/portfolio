export type Project = {
  title: string;
  description: string;
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
};

// Edit this list with your real projects.
export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A short description of what this project does and the problem it solves.",
    stack: ["TypeScript", "React", "Node.js"],
    repoUrl: "https://github.com/your-username/project-one",
    liveUrl: "https://project-one.example.com",
  },
  {
    title: "Project Two",
    description:
      "A short description of what this project does and the problem it solves.",
    stack: ["Python", "FastAPI", "PostgreSQL"],
    repoUrl: "https://github.com/your-username/project-two",
  },
  {
    title: "Project Three",
    description:
      "A short description of what this project does and the problem it solves.",
    stack: ["Next.js", "Tailwind CSS"],
    repoUrl: "https://github.com/your-username/project-three",
    liveUrl: "https://project-three.example.com",
  },
];
