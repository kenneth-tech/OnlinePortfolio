export type ProfileLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  category: string;
  year: string;
  role: string;
  url: string;
  image: {
    src: string;
    alt: string;
  };
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
  links: [
    {
      label: "GitHub",
      href: "https://github.com/kenneth-tech?tab=repositories",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mark-kenneth-rillamas-962578212/",
    },
  ],
};

export const projects: Project[] = [
  {
    title: "Follow Me To The Sea",
    category: "Social Media Growth",
    year: "2026",
    role: "Web Development | UI Build",
    url: "https://www.followmetothesea.com/",
    image: {
      src: "/images/projects/follow-me-to-the-sea.png",
      alt: "Follow Me To The Sea homepage preview",
    },
    description:
      "A social growth website built around clear packages, case studies, and inquiry paths for brands and creators.",
    impact:
      "Turns social proof services into a polished conversion path with clear calls to action and growth-focused messaging.",
    stack: ["Next.js", "React", "Tailwind CSS", "UI/UX"],
    links: [{ label: "Visit site", href: "https://www.followmetothesea.com/" }],
  },
  {
    title: "877Junky Jo",
    category: "Local Service",
    year: "2026",
    role: "Website Build | Conversion Flow",
    url: "https://www.877junkyjo.com/",
    image: {
      src: "/images/projects/877-junky-jo.png",
      alt: "877Junky Jo homepage preview",
    },
    description:
      "A direct-response website for Brooklyn junk removal with fast booking paths, service coverage, and trust signals.",
    impact:
      "Helps local customers understand the service quickly and move toward a call or pre-booking request.",
    stack: ["Responsive Design", "Lead Generation", "Local SEO", "UI/UX"],
    links: [{ label: "Visit site", href: "https://www.877junkyjo.com/" }],
  },
  {
    title: "ABS by Allen Schwartz",
    category: "Fashion Ecommerce",
    year: "2026",
    role: "Frontend Build | Ecommerce UX",
    url: "https://new-abs-website.vercel.app/",
    image: {
      src: "/images/projects/abs-by-allen-schwartz.png",
      alt: "ABS by Allen Schwartz homepage preview",
    },
    description:
      "A fashion ecommerce experience with editorial merchandising, collection navigation, and refined product presentation.",
    impact:
      "Positions product discovery around visual hierarchy, lifestyle storytelling, and a smoother shopping journey.",
    stack: ["Next.js", "Ecommerce UX", "Responsive UI", "Editorial Design"],
    links: [{ label: "Visit site", href: "https://new-abs-website.vercel.app/" }],
  },
  {
    title: "SandSea Media",
    category: "Digital Marketing Agency",
    year: "2026",
    role: "Web Design | Service Presentation",
    url: "https://www.sandseamedia.com/",
    image: {
      src: "/images/projects/sandsea-media.png",
      alt: "SandSea Media homepage preview",
    },
    description:
      "A full-service agency website presenting paid ads, social strategy, SEO, web development, and client proof.",
    impact:
      "Organizes a broad service offering into a confident funnel for consultations and growth-focused inquiries.",
    stack: ["Web Design", "Marketing Strategy", "SEO", "Conversion Copy"],
    links: [{ label: "Visit site", href: "https://www.sandseamedia.com/" }],
  },
  {
    title: "Therapy Cloud",
    category: "Mental Health Platform",
    year: "2026",
    role: "Platform UI | Directory Experience",
    url: "https://www.therapycloud.com/",
    image: {
      src: "/images/projects/therapy-cloud.png",
      alt: "Therapy Cloud homepage preview",
    },
    description:
      "A mental health platform that helps visitors find therapists and learn about care through a supportive interface.",
    impact:
      "Makes sensitive service discovery feel calmer, clearer, and easier to navigate for people seeking support.",
    stack: ["Platform UI", "Directory UX", "Supabase", "Responsive Design"],
    links: [{ label: "Visit site", href: "https://www.therapycloud.com/" }],
  },
  {
    title: "Sydenpro",
    category: "Business Services",
    year: "2025",
    role: "Website Design | Business Presence",
    url: "https://www.sydenpro.org/",
    image: {
      src: "/images/projects/sydenpro.png",
      alt: "Sydenpro homepage preview",
    },
    description:
      "A business services website for accounting, tax, registration, payroll, audit, and consultancy support.",
    impact:
      "Presents complex service lines in a structured way so business owners can understand offerings and connect.",
    stack: ["Wix", "Business Website", "Service UX", "Content Structure"],
    links: [{ label: "Visit site", href: "https://www.sydenpro.org/" }],
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
