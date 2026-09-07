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
  "inline-flex min-h-11 w-full items-center justify-center rounded-lg border px-4 py-2.5 text-sm font-semibold outline-none transition-[background-color,border-color,color,box-shadow] duration-200 sm:w-auto";

const variantClasses = {
  primary:
    "border-brand-button bg-brand-button text-white shadow-sm hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-brand-button focus-visible:ring-offset-4 focus-visible:ring-offset-white",
  secondary:
    "border-slate-300 bg-white text-brand-ink hover:border-brand-button hover:bg-brand-soft focus-visible:ring-2 focus-visible:ring-brand-button focus-visible:ring-offset-4 focus-visible:ring-offset-white",
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
