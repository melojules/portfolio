export type SkillCategory = {
  label: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    label: "Testing",
    items: ["Regression", "End-to-End", "UAT", "Sanity", "Integration"],
  },
  {
    label: "Automation",
    items: ["Playwright (JS/TS)", "Selenium", "Postman"],
  },
  {
    label: "CI/CD",
    items: ["GitHub Actions"],
  },
  {
    label: "Tools",
    items: ["Jira", "Confluence", "GitHub", "Microsoft Suite", "Google Workspace"],
  },
  {
    label: "Validation",
    items: ["Data accuracy", "Bug reporting"],
  },
  {
    label: "Support",
    items: ["Troubleshooting", "Documentation"],
  },
];

export type Certification = {
  name: string;
  year: string;
  url?: string;
};

export const certifications: Certification[] = [
  {
    name: "Google Cybersecurity Professional Certificate",
    year: "2025",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/TEVWAVMISBQ3?trk=public_profile_see-credential",
  },
  {
    name: "Google Project Management Professional Certificate",
    year: "2025",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/VMNXQ7LFMPJB?trk=public_profile_see-credential",
  },
  { name: "Microsoft MTA: Database Fundamentals", year: "2019" },
  { name: "National Certificate II in ICT", year: "2022" },
];

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    degree: "BS in Information Technology",
    school: "University of Mindanao, Davao City",
    period: "2018 — 2023",
  },
];
