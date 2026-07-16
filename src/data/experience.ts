export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Software QA Engineer",
    company: "Netlink Voice — Davao City",
    period: "Jan 2024 — Present",
    points: [
      "QA for the FaxEdge web app across devices.",
      "Automated tests using Playwright and integrated with GitHub Actions.",
      "Authored test cases, managed regressions, and collaborated with developers.",
    ],
  },
  {
    role: "Freelance Software Tester",
    company: "InRiver — Malmö, Sweden (Remote)",
    period: "Apr 2022 — Present",
    points: [
      "Conducted data validation and staging environment testing.",
      "Logged detailed bug reports and ensured production data integrity.",
    ],
  },
  {
    role: "Internship Trainee — Software QA",
    company: "Detail Online — Davao City (Hybrid)",
    period: "Feb 2022 — Apr 2022",
    points: [
      "Assisted in validating data accuracy in hybrid QA testing.",
      "Reported bugs and collaborated with senior testers.",
      "Gained hands-on experience with test documentation and reporting.",
    ],
  },
  {
    role: "ICT Intern — Tech Support",
    company: "University of Mindanao — Davao City",
    period: "Jun 2022 — Aug 2022",
    points: ["Provided IT support and installed systems for university staff."],
  },
];
