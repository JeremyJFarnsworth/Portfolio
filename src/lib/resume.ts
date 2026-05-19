export const profile = {
  name: "Jeremy Farnsworth",
  location: "Salt Lake City, Utah",
  tagline:
    "Computer Science student at Neumont University. Full-stack developer working with React, TypeScript, and Python — currently mentoring fellow students as an Academic Coach.",
  email: "jdog1123@gmail.com",
  github: "https://github.com/JeremyJFarnsworth",
  linkedin: "https://www.linkedin.com/in/jeremy-farnsworth-0253b9245/",
};

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C#"],
  },
  {
    title: "Frontend",
    items: ["React", "HTML5", "CSS", "SASS / SCSS", "Tailwind CSS"],
  },
  {
    title: "Backend & Data",
    items: ["Flask", "SQL Databases", "JSON"],
  },
  {
    title: "Tools & Practices",
    items: ["Git", "UML", "Problem solving", "Team collaboration"],
  },
];

export type ExperienceEntry = {
  role: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Academic Coach",
    org: "Neumont University",
    location: "Salt Lake City, Utah",
    period: "July 2025 — Present",
    bullets: [
      "Tutor students one-on-one across multiple Computer Science courses.",
      "Grade assignments and provide written feedback on student submissions.",
      "Assist instructors in delivering and supporting coursework.",
    ],
  },
  {
    role: "Peer Mentor",
    org: "Bottega University",
    location: "Salt Lake City, Utah",
    period: "December 2022 — May 2023",
    bullets: [
      "Hosted one-on-one coding sessions with bootcamp students.",
      "Assisted in day and night cohorts, answering student questions in real time.",
    ],
  },
  {
    role: "Store Front Manager",
    org: "Farnsworth Farms",
    location: "Sandy, Utah",
    period: "2014 — 2017",
    bullets: [
      "Managed the storefront — cash register, phones, and customer service.",
      "Restocked shelves and produce; maintained a clean retail environment.",
    ],
  },
];

export type EducationEntry = {
  credential: string;
  school: string;
  location: string;
  period: string;
  detail: string;
};

export const education: EducationEntry[] = [
  {
    credential: "B.S. in Computer Science",
    school: "Neumont University",
    location: "Salt Lake City, Utah",
    period: "September 2024 — Present · Expected August 2027",
    detail:
      "Accelerated three-year, project-driven program covering modern languages, frameworks, and software engineering principles.",
  },
  {
    credential: "Full-Stack Development Certificate",
    school: "Bottega University",
    location: "Salt Lake City, Utah",
    period: "July 2022 — September 2022",
    detail:
      "Intensive code bootcamp covering multiple languages and full-stack development best practices.",
  },
];

export type Project = {
  name: string;
  description: string;
  url: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "White Knuckle React",
    description:
      "A React project deployed on Vercel. Visit the live site to see it in action.",
    url: "https://whiteknucklereact.vercel.app/",
    tags: ["React", "Vercel"],
  },
];
