import type { IconType } from "react-icons";
import Image from "next/image";
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
  SiFigma,
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

type SkillIconMeta = {
  Icon: IconType;
  color: string;
};

const skillIcons: Record<string, SkillIconMeta> = {
  HTML: { Icon: SiHtml5, color: "#E34F26" },
  CSS: { Icon: SiCss, color: "#663399" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  React: { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "#000000" },
  Handlebars: { Icon: SiHandlebarsdotjs, color: "#000000" },
  SQL: { Icon: FaDatabase, color: "#4479A1" },
  WordPress: { Icon: SiWordpress, color: "#21759B" },
  Wix: { Icon: SiWix, color: "#0C6EFC" },
  Webflow: { Icon: SiWebflow, color: "#146EF5" },
  GoHighLevel: { Icon: FaChartLine, color: "#28E0B9" },
  Supabase: { Icon: SiSupabase, color: "#3ECF8E" },
  Vercel: { Icon: SiVercel, color: "#000000" },
  Trello: { Icon: SiTrello, color: "#0052CC" },
  Slack: { Icon: FaComments, color: "#4A154B" },
  Notion: { Icon: SiNotion, color: "#000000" },
  Hostinger: { Icon: FaServer, color: "#673DE6" },
  "DNS Management": { Icon: FaGlobe, color: "#2563EB" },
  GoDaddy: { Icon: SiGodaddy, color: "#1BDBDB" },
  cPanel: { Icon: SiCpanel, color: "#FF6C2C" },
  "Domain Setup": { Icon: FaGlobe, color: "#2563EB" },
  "SSL Setup": { Icon: FaLock, color: "#16A34A" },
  "Email Hosting": { Icon: FaEnvelope, color: "#EA4335" },
  "Website Migration": { Icon: FaCode, color: "#0EA5E9" },
  "Hosting Configuration": { Icon: FaServer, color: "#673DE6" },
  "UI/UX Design": { Icon: FaCode, color: "#A855F7" },
  Figma: { Icon: SiFigma, color: "#A259FF" },
  "Graphic Design": { Icon: FaPalette, color: "#FF61F6" },
  "Video Editing": { Icon: FaVideo, color: "#9999FF" },
  "Motion Graphics": { Icon: FaVideo, color: "#FF7A59" },
  SEO: { Icon: FaGlobe, color: "#00A67E" },
  "Meta Ads": { Icon: SiMeta, color: "#0668E1" },
  "Workflow Automation": { Icon: FaRobot, color: "#FF4F00" },
  "AI Prompt Engineering": { Icon: FaRobot, color: "#10A37F" },
  "Google Ads": { Icon: SiGoogleads, color: "#4285F4" },
  "Google Analytics": { Icon: SiGoogleanalytics, color: "#E37400" },
  Zapier: { Icon: SiZapier, color: "#FF4F00" },
};

const skillLogoImages: Record<string, string> = {
  Photoshop: "/images/skills/photoshop.svg",
  "Premiere Pro": "/images/skills/premiere-pro.svg",
  Affinity: "/images/skills/affinity.png",
};

export function SkillIcon({ skill }: { skill: string }) {
  const logoImage = skillLogoImages[skill];
  if (logoImage) {
    return (
      <span className="flex h-6 w-6 shrink-0 items-center justify-center">
        <Image src={logoImage} alt={`${skill} icon`} width={24} height={24} className="h-6 w-6 rounded object-contain" />
      </span>
    );
  }
  const { Icon, color } = skillIcons[skill] ?? {
    Icon: FaCode,
    color: "#0B2545",
  };

  return (
    <span
      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-brand-button/30 bg-white"
      style={{ color }}
    >
      <Icon aria-label={`${skill} icon`} role="img" className="h-3.5 w-3.5" />
    </span>
  );
}
