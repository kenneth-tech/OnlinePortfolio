import Link from "next/link";

type SiteLogoProps = {
  className?: string;
};

export function SiteLogo({ className = "" }: SiteLogoProps) {
  return (
    <Link
      href="/"
      aria-label="Mark Kenneth home"
      className={`group inline-flex w-fit items-center gap-3 rounded-xl outline-none transition focus-visible:ring-2 focus-visible:ring-brand-button focus-visible:ring-offset-4 focus-visible:ring-offset-brand-ink ${className}`.trim()}
    >
      <span
        aria-hidden="true"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-button/25 bg-brand-card text-sm font-black text-brand-button shadow-[0_0_26px_rgba(127,255,212,0.12)] transition-[border-color,box-shadow,transform] duration-200 group-hover:-translate-y-0.5 group-hover:border-brand-button/60 group-hover:shadow-[0_0_30px_rgba(127,255,212,0.20)]"
      >
        &lt;/&gt;
      </span>
      <span className="text-base font-semibold tracking-normal text-white transition-colors duration-200 group-hover:text-brand-soft">
        Mark Kenneth
      </span>
    </Link>
  );
}
