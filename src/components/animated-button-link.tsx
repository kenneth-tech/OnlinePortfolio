import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type AnimatedButtonLinkProps = {
  children: ReactNode;
  href: ComponentProps<typeof Link>["href"];
  variant?: "primary" | "secondary";
};

const baseClasses =
  "inline-flex min-h-11 items-center justify-center rounded px-5 py-3 text-sm font-semibold outline-none transition-colors";

const variantClasses = {
  primary:
    "bg-brand-button text-brand-ink hover:bg-brand-button/80 focus-visible:ring-2 focus-visible:ring-brand-button focus-visible:ring-offset-4",
  secondary:
    "border border-brand-muted/30 bg-white text-brand-ink hover:border-brand-muted hover:bg-brand-muted/10 focus-visible:ring-2 focus-visible:ring-brand-muted focus-visible:ring-offset-4",
};

export function AnimatedButtonLink({
  children,
  href,
  variant = "primary",
}: AnimatedButtonLinkProps) {
  return (
    <Link href={href} className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </Link>
  );
}
