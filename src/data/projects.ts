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
  {
    title: "Nanay's Kusina",
    description:
      "An interactive ulam combo builder for a Filipino home-cooking service, with live pricing and a lightweight checkout.",
    stack: ["HTML", "CSS", "JavaScript", "Claude Design"],
    repoUrl: "https://github.com/melojules/nanays-kusina",
  },
  {
    title: "Harvest Lane",
    description:
      "A front-end prototype for a farm-to-doorstep produce marketplace, with farm browsing, filtering, a basket, and checkout.",
    stack: ["HTML", "CSS", "JavaScript", "Claude Design"],
    repoUrl: "https://github.com/melojules/harvest-lane",
  },
  {
    title: "PC Health Console",
    description:
      "A Windows desktop app that reads live driver, performance, and disk data to flag issues and reclaim space.",
    stack: ["Electron", "React", "Vite", "Node.js"],
    repoUrl: "https://github.com/melojules/pc-health-console",
  },
];
