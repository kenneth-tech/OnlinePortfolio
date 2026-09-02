import type { IconType } from "react-icons";
import {
  FaChartLine,
  FaCode,
  FaComments,
  FaDatabase,
  FaEnvelope,
  FaGlobe,
  FaLock,
  FaPalette,
  FaRobot,
  FaServer,
  FaVideo,
} from "react-icons/fa6";
import {
  SiCpanel,
  SiCss,
  SiGodaddy,
  SiGoogleads,
  SiGoogleanalytics,
  SiHandlebarsdotjs,
  SiHtml5,
  SiJavascript,
  SiMeta,
  SiNextdotjs,
  SiNotion,
  SiNodedotjs,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
  SiVercel,
  SiWebflow,
  SiWix,
  SiWordpress,
  SiZapier,
} from "react-icons/si";

const skillIcons: Record<string, IconType> = {
  HTML: SiHtml5,
  CSS: SiCss,
  "Tailwind CSS": SiTailwindcss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "Node.js": SiNodedotjs,
  React: SiReact,
  "Next.js": SiNextdotjs,
  Handlebars: SiHandlebarsdotjs,
  SQL: FaDatabase,
  WordPress: SiWordpress,
  Wix: SiWix,
  Webflow: SiWebflow,
  GoHighLevel: FaChartLine,
  Supabase: SiSupabase,
  Vercel: SiVercel,
  Trello: SiTrello,
  Slack: FaComments,
  Notion: SiNotion,
  Hostinger: FaServer,
  "DNS Management": FaGlobe,
  GoDaddy: SiGodaddy,
  cPanel: SiCpanel,
  "Domain Setup": FaGlobe,
  "SSL Setup": FaLock,
  "Email Hosting": FaEnvelope,
  "Website Migration": FaCode,
  "Hosting Configuration": FaServer,
  "UI/UX Design": FaCode,
  "Graphic Design": FaPalette,
  "Video Editing": FaVideo,
  "Motion Graphics": FaVideo,
  SEO: FaGlobe,
  "Meta Ads": SiMeta,
  "Workflow Automation": FaRobot,
  "AI Prompt Engineering": FaRobot,
  "Google Ads": SiGoogleads,
  "Google Analytics": SiGoogleanalytics,
  Zapier: SiZapier,
};

export function SkillIcon({ skill }: { skill: string }) {
  const Icon = skillIcons[skill] ?? FaCode;

  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-brand-button/20 bg-brand-button/10 text-brand-button">
      <Icon aria-label={`${skill} icon`} role="img" className="h-3.5 w-3.5" />
    </span>
  );
}
