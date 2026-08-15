import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type AnimatedButtonLinkProps = {
  children: ReactNode;
  href: ComponentProps<typeof Link>["href"];
  rel?: ComponentProps<typeof Link>["rel"];
  target?: ComponentProps<typeof Link>["target"];
  variant?: "primary" | "secondary";
};

const baseClasses =
  "inline-flex min-h-11 items-center justify-center rounded border px-5 py-3 text-sm font-semibold outline-none transition-[background-color,border-color,color,transform] duration-200 hover:-translate-y-1";

const variantClasses = {
  primary:
    "border-brand-button bg-brand-button text-brand-ink hover:border-brand-button hover:bg-brand-button/80 focus-visible:ring-2 focus-visible:ring-brand-button focus-visible:ring-offset-4",
  secondary:
    "border-brand-muted/30 bg-white text-brand-ink hover:border-brand-button hover:bg-brand-muted/10 focus-visible:ring-2 focus-visible:ring-brand-muted focus-visible:ring-offset-4",
};

export function AnimatedButtonLink({
  children,
  href,
  rel,
  target,
  variant = "primary",
}: AnimatedButtonLinkProps) {
  return (
    <Link
      href={href}
      rel={rel}
      target={target}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {children}
    </Link>
  );
}
