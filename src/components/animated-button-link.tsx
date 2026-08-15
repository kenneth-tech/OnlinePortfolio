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
  "inline-flex min-h-11 items-center justify-center rounded-lg border px-5 py-3 text-sm font-semibold outline-none transition-[background-color,border-color,color,transform,box-shadow] duration-200 hover:-translate-y-1";

const variantClasses = {
  primary:
    "border-brand-button bg-brand-button text-brand-ink shadow-[0_0_26px_rgba(127,255,212,0.20)] hover:border-brand-button hover:bg-brand-soft hover:shadow-[0_0_34px_rgba(127,255,212,0.28)] focus-visible:ring-2 focus-visible:ring-brand-button focus-visible:ring-offset-4 focus-visible:ring-offset-brand-ink",
  secondary:
    "border-brand-button/30 bg-brand-card/70 text-white hover:border-brand-button hover:bg-brand-card focus-visible:ring-2 focus-visible:ring-brand-button focus-visible:ring-offset-4 focus-visible:ring-offset-brand-ink",
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
