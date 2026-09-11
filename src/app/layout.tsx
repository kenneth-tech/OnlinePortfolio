import type { Metadata } from "next";

import { ScrollReveal } from "../components/scroll-reveal";
import { ButtonCursorEffects } from "../components/button-cursor-effects";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { SiteMotionBackground } from "../components/site-motion-background";
import { profile } from "../data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} | Portfolio`,
  description:
    "Portfolio website showcasing web development, multimedia design, projects, experience, and contact information.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <ButtonCursorEffects />
        <SiteMotionBackground />
        <SiteHeader />
        <ScrollReveal>
          <main className="flex-1 pt-[72px]">{children}</main>
        </ScrollReveal>
        <SiteFooter />
      </body>
    </html>
  );
}
