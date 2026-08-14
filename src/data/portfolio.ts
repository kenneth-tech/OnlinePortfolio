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

export type Profile = {
  name: string;
  role: string;
  location: string;
  summary: string;
  email: string;
  phone: string;
  links: ProfileLink[];
};

export type Experience = {
  role: string;
  organization: string;
  location: string;
  period: string;
  highlights: string[];
};

export type Education = {
  degree: string;
  school: string;
  period: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const profile: Profile = {
  name: "Mark Kenneth R. Rillamas",
  role: "Web Developer | Multimedia Designer",
  location: "Mandaluyong City, Metro Manila",
  summary:
    "Web Developer and Multimedia Designer with experience building responsive websites, landing pages, and digital experiences using modern tools and efficient development workflows. Skilled in UI/UX design, rapid prototyping, automation, and multimedia production with a focus on usability, performance, and conversion.",
  email: "rillamasmarkkenneth763@gmail.com",
  phone: "0965 135 5727",
  links: [],
};

export const projects: Project[] = [
  {
    title: "Responsive Website Builds",
    description:
      "Responsive websites and landing pages built with modern frontend tools, CMS platforms, and custom code.",
    impact:
      "Improves user experience, page performance, and conversion-focused presentation.",
    stack: ["Next.js", "React", "Tailwind CSS", "WordPress", "Webflow"],
    links: [],
  },
  {
    title: "Landing Pages and Funnels",
    description:
      "Campaign pages and funnel experiences designed for service offers, lead generation, and clear calls to action.",
    impact:
      "Supports marketing campaigns with clearer structure and stronger conversion paths.",
    stack: ["GoHighLevel", "Webflow", "UI/UX Design", "SEO"],
    links: [],
  },
  {
    title: "Multimedia Campaign Assets",
    description:
      "Visual content, short-form videos, motion graphics, ads, and branding materials for digital campaigns.",
    impact:
      "Strengthens engagement across social, advertising, and brand communication channels.",
    stack: ["Graphic Design", "Video Editing", "Motion Graphics", "Meta Ads"],
    links: [],
  },
];

export const experiences: Experience[] = [
  {
    role: "Web Developer (AI-Assisted Web Developer)",
    organization: "Locus Digital",
    location: "Remote",
    period: "Nov 2025 - Mar 2026",
    highlights: [
      "Developed responsive websites and landing pages using modern development tools.",
      "Accelerated coding and debugging with Claude and GitHub Copilot.",
      "Integrated Supabase and deployed projects through Vercel.",
      "Built conversion-focused funnels, UI components, and digital experiences.",
    ],
  },
  {
    role: "Web Developer | Multimedia Designer",
    organization: "Freelance (Local and International Clients)",
    location: "Remote",
    period: "Aug 2023 - Jul 2025",
    highlights: [
      "Designed responsive websites using WordPress, Wix, Webflow, and custom code.",
      "Built landing pages and funnels focused on performance and conversion.",
      "Produced multimedia assets including videos, ads, and branding materials.",
      "Improved user experience through UI/UX and performance optimization.",
    ],
  },
  {
    role: "Video Editor / IT Admin",
    organization: "Ecomhubasia Creatives Digital Marketing",
    location: "Bantay, Ilocos Sur",
    period: "Jul 2022 - Jul 2024",
    highlights: [
      "Edited short-form content for Reels, TikTok, and Shorts.",
      "Applied motion graphics and effects to improve engagement.",
      "Maintained IT systems and supported technical operations.",
    ],
  },
  {
    role: "Graphic Artist / Social Media Manager",
    organization: "DNA Solution (Service)",
    location: "Remote",
    period: "Oct 2021 - May 2023",
    highlights: [
      "Managed community engagement for a 5,000+ member online group.",
      "Designed marketing materials, logos, and promotional graphics.",
      "Created UI/UX mockups to improve communication and user experience.",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "University of Northern Philippines",
    period: "2018 - 2020",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Web Development",
    skills: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Handlebars",
      "SQL",
    ],
  },
  {
    title: "Platforms and Tools",
    skills: ["WordPress", "Wix", "Webflow", "GoHighLevel", "Supabase", "Vercel"],
  },
  {
    title: "Design and Multimedia",
    skills: [
      "UI/UX Design",
      "Graphic Design",
      "Video Editing",
      "Motion Graphics",
    ],
  },
  {
    title: "Marketing and Automation",
    skills: [
      "SEO",
      "Meta Ads",
      "Workflow Automation",
      "AI Prompt Engineering",
      "Google Ads",
      "Google Analytics",
      "Zapier",
    ],
  },
];
