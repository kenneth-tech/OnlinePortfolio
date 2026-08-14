export type ProfileLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  impact: string;
  stack: string[];
  links: ProfileLink[];
};

export type Experience = {
  role: string;
  organization: string;
  period: string;
  highlights: string[];
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const profile = {
  name: "Your Name",
  role: "Frontend Developer",
  location: "Philippines",
  summary:
    "I build clean, responsive web experiences with a focus on usability, performance, and thoughtful details.",
  email: "hello@example.com",
  links: [
    { label: "GitHub", href: "https://github.com/yourusername" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/yourusername" },
  ],
} as const;

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A personal website for presenting projects, experience, skills, and contact links in one polished place.",
    impact:
      "Creates a clear first impression for recruiters, clients, and collaborators.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: [
      { label: "Source", href: "https://github.com/yourusername/portfolio" },
    ],
  },
  {
    title: "Task Dashboard",
    description:
      "A responsive dashboard concept for organizing priorities, timelines, and daily progress.",
    impact:
      "Shows comfort with interface structure, reusable components, and data display.",
    stack: ["React", "TypeScript", "UI Design"],
    links: [],
  },
  {
    title: "Business Landing Page",
    description:
      "A conversion-focused website concept with service sections, social proof, and contact prompts.",
    impact:
      "Demonstrates page composition, responsive design, and marketing content hierarchy.",
    stack: ["HTML", "CSS", "JavaScript"],
    links: [],
  },
];

export const experiences: Experience[] = [
  {
    role: "Frontend Developer",
    organization: "Freelance and Personal Projects",
    period: "2025 - Present",
    highlights: [
      "Built responsive interfaces using modern React and component-based patterns.",
      "Turned rough ideas into structured pages with clear navigation and content flow.",
      "Focused on readable code, accessible markup, and maintainable styling.",
    ],
  },
  {
    role: "Web Development Learner",
    organization: "Self-Directed Study",
    period: "2024 - 2025",
    highlights: [
      "Practiced JavaScript, TypeScript, React, and Next.js fundamentals.",
      "Created small projects to strengthen layout, routing, and state management skills.",
      "Reviewed documentation and examples to build stronger engineering habits.",
    ],
  },
  {
    role: "Collaborative Team Member",
    organization: "Academic and Community Work",
    period: "2023 - 2024",
    highlights: [
      "Contributed to team planning, documentation, and presentation of project work.",
      "Communicated progress clearly and adapted quickly when project needs changed.",
      "Built confidence translating requirements into practical deliverables.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Styling",
    skills: ["Tailwind CSS", "Responsive Design", "Accessibility", "UI Layout"],
  },
  {
    title: "Tools",
    skills: ["Git", "npm", "VS Code", "ESLint", "Browser DevTools"],
  },
  {
    title: "Professional",
    skills: [
      "Problem Solving",
      "Communication",
      "Documentation",
      "Continuous Learning",
    ],
  },
];
