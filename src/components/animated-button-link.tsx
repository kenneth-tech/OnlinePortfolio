import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type AnimatedButtonLinkProps = {
  children: ReactNode;
  href: ComponentProps<typeof Link>["href"];
  variant?: "primary" | "secondary";
};

const baseClasses =
  "group relative isolate inline-flex min-h-11 items-center justify-center overflow-hidden rounded px-5 py-3 text-sm font-semibold outline-none transition duration-300 before:absolute before:inset-y-0 before:left-3 before:w-px before:bg-white/40 before:opacity-0 before:transition-opacity after:absolute after:inset-0 after:-z-10 after:-translate-x-full after:bg-brand-button after:transition-transform after:duration-500 hover:shadow-[0_0_28px_rgba(127,255,212,0.45)] hover:after:translate-x-0 focus-visible:ring-2 focus-visible:ring-brand-button focus-visible:ring-offset-4 focus-visible:after:translate-x-0 motion-reduce:transition-none motion-reduce:after:transition-none";

const variantClasses = {
  primary:
    "bg-brand-ink text-white after:bg-brand-button hover:text-brand-ink focus-visible:text-brand-ink",
  secondary:
    "border border-brand-muted/30 bg-white text-brand-ink after:bg-brand-button hover:border-brand-ink focus-visible:border-brand-ink",
};

export function AnimatedButtonLink({
  children,
  href,
  variant = "primary",
}: AnimatedButtonLinkProps) {
  return (
    <Link href={href} className={`${baseClasses} ${variantClasses[variant]}`}>
      <span className="relative z-10">{children}</span>
    </Link>
  );
}
