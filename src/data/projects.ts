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
    title: "Quest LMS",
    description:
      "An LMS-style app that swaps exams for mini-games. Ships with a Software QA course.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Zustand"],
    repoUrl: "https://github.com/melojules/quest-lms",
  },
  {
    title: "Ticketing System",
    description: "A help-desk ticketing system built with Laravel.",
    stack: ["Laravel", "PHP", "Blade", "Sanctum"],
    repoUrl: "https://github.com/melojules/Ticketing-System",
  },
];
