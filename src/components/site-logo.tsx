import Link from "next/link";

type SiteLogoProps = {
  className?: string;
  variant?: "light" | "dark";
};

export function SiteLogo({ className = "", variant = "light" }: SiteLogoProps) {
  const textClass =
    variant === "dark"
      ? "text-white group-hover:text-blue-200"
      : "text-brand-ink group-hover:text-brand-button";

  return (
    <Link
      href="/"
      aria-label="Mark Kenneth home"
      className={`group inline-flex w-fit items-center gap-3 rounded-lg outline-none transition focus-visible:ring-2 focus-visible:ring-brand-button focus-visible:ring-offset-4 focus-visible:ring-offset-white ${className}`.trim()}
    >
      <span
        aria-hidden="true"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-brand-soft text-sm font-black text-brand-button transition-[border-color,background-color,color] duration-200 group-hover:border-brand-button group-hover:bg-blue-50"
      >
        &lt;/&gt;
      </span>
      <span
        className={`text-base font-semibold tracking-normal transition-colors duration-200 ${textClass}`}
      >
        Mark Kenneth
      </span>
    </Link>
  );
}
