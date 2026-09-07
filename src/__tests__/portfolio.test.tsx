import { fireEvent, render, screen, within } from "@testing-library/react";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test, vi } from "vitest";

import ContactPage from "../app/contact/page";
import ExperiencePage from "../app/experience/page";
import HomePage, { FeaturedProjectCard } from "../app/page";
import ProjectsPage from "../app/projects/page";
import SkillsPage from "../app/skills/page";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { SiteLogo } from "../components/site-logo";
import { ScrollReveal } from "../components/scroll-reveal";
import {
  education,
  experiences,
  profile,
  projects,
} from "../data/portfolio";
import { SkillIcon, skillGroups } from "../data/skills";

describe("portfolio data", () => {
  test("exposes editable profile and portfolio lists", () => {
    expect(profile.name).toEqual(expect.any(String));
    expect(profile.email).toContain("@");
    expect(profile.phone).toEqual(expect.any(String));
    expect(Array.isArray(projects)).toBe(true);
    expect(Array.isArray(experiences)).toBe(true);
    expect(Array.isArray(education)).toBe(true);
    expect(Array.isArray(skillGroups)).toBe(true);
    expect(profile.links).toEqual([
      {
        label: "GitHub",
        href: "https://github.com/kenneth-tech?tab=repositories",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/mark-kenneth-rillamas-962578212/",
      },
    ]);
  });

  test("lists the six live project websites", () => {
    expect(projects).toHaveLength(6);
    expect(projects.map((project) => project.url)).toEqual(
      expect.arrayContaining([
        "https://www.followmetothesea.com/",
        "https://www.877junkyjo.com/",
        "https://new-abs-website.vercel.app/",
        "https://www.sandseamedia.com/",
        "https://www.therapycloud.com/",
        "https://www.sydenpro.org/",
      ]),
    );

    for (const project of projects) {
      expect(project.category).toEqual(expect.any(String));
      expect(project.role).toEqual(expect.any(String));
      expect(project.year).toEqual(expect.any(String));
      expect(project.links).toHaveLength(1);
    }
  });

  test("provides local homepage screenshots for each project", () => {
    for (const project of projects) {
      const preview = (
        project as {
          image?: {
            src: string;
            alt: string;
          };
        }
      ).image;

      expect(preview?.src).toMatch(/^\/images\/projects\/.+\.png$/);
      expect(preview?.alt).toContain(project.title);
      expect(
        existsSync(join(process.cwd(), "public", preview?.src ?? "")),
      ).toBe(true);
    }
  });

  test("includes web hosting and domain management skills", () => {
    const platformSkills = skillGroups.find(
      (group) => group.title === "Platforms and Tools",
    )?.skills;

    expect(platformSkills).toEqual(
      expect.arrayContaining([
        "Hostinger",
        "DNS Management",
        "GoDaddy",
        "cPanel",
        "Domain Setup",
        "SSL Setup",
        "Email Hosting",
        "Website Migration",
        "Hosting Configuration",
        "Trello",
        "Slack",
        "Notion",
      ]),
    );
  });

  test("includes Node.js in web development skills", () => {
    const webDevelopmentSkills = skillGroups.find(
      (group) => group.title === "Web Development",
    )?.skills;

    expect(webDevelopmentSkills).toEqual(expect.arrayContaining(["Node.js"]));
  });
});

describe("site chrome", () => {
  test("renders the selected code mark logo with Mark Kenneth", () => {
    render(<SiteLogo />);

    const logoLink = screen.getByRole("link", { name: "Mark Kenneth home" });

    expect(logoLink).toHaveAttribute("href", "/");
    expect(within(logoLink).getByText("</>")).toBeInTheDocument();
    expect(within(logoLink).getByText("Mark Kenneth")).toBeInTheDocument();
    expect(
      within(logoLink).queryByText("Mark Kenneth R. Rillamas"),
    ).not.toBeInTheDocument();
  });

  test("renders navigation links for each portfolio page", () => {
    render(<SiteHeader />);

    expect(screen.getByRole("banner")).toHaveClass(
      "sticky",
      "inset-x-0",
      "top-0",
      "z-[100]",
    );
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
      "href",
      "/",
    );
    expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute(
      "href",
      "/projects",
    );
    expect(screen.getByRole("link", { name: "Experience" })).toHaveAttribute(
      "href",
      "/experience",
    );
    expect(screen.getByRole("link", { name: "Skills" })).toHaveAttribute(
      "href",
      "/skills",
    );
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute(
      "href",
      "/contact",
    );
  });

  test("toggles between light and dark mode from the navbar", () => {
    const store = new Map<string, string>();
    vi.stubGlobal("localStorage", {
      getItem: vi.fn((key: string) => store.get(key) ?? null),
      setItem: vi.fn((key: string, value: string) => {
        store.set(key, value);
      }),
    });
    document.documentElement.dataset.theme = "";

    render(<SiteHeader />);

    const themeButton = screen.getByRole("button", {
      name: "Switch to dark mode",
    });

    expect(document.documentElement.dataset.theme).toBe("light");
    expect(themeButton).toHaveAttribute("aria-pressed", "false");

    fireEvent.click(themeButton);

    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(localStorage.getItem("portfolio-theme")).toBe("dark");
    expect(themeButton).toHaveAccessibleName("Switch to light mode");
    expect(themeButton).toHaveAttribute("aria-pressed", "true");

    fireEvent.click(themeButton);

    expect(document.documentElement.dataset.theme).toBe("light");
    expect(localStorage.getItem("portfolio-theme")).toBe("light");
  });

  test("does not show the full name as a navbar brand label", () => {
    render(<SiteHeader />);

    expect(
      screen.queryByRole("link", { name: "Mark Kenneth R. Rillamas" }),
    ).not.toBeInTheDocument();
  });

  test("opens and closes the mobile sidebar navigation", () => {
    const scrollTo = vi.spyOn(window, "scrollTo").mockImplementation(() => {});
    Object.defineProperty(window, "scrollY", {
      configurable: true,
      value: 180,
    });
    const { unmount } = render(<SiteHeader />);

    const menuButton = screen.getByRole("button", {
      name: "Open main menu",
    });
    const navigation = document.getElementById("mobile-navigation");

    if (!navigation) {
      throw new Error("Mobile navigation was not rendered");
    }

    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    expect(document.body.style.overflow).toBe("");
    expect(navigation).toHaveAttribute("inert");
    expect(navigation).toHaveClass("max-sm:translate-x-full");
    expect(
      screen.queryByRole("button", { name: "Close mobile menu backdrop" }),
    ).not.toBeInTheDocument();

    fireEvent.click(menuButton);

    expect(menuButton).toHaveAttribute("aria-expanded", "true");
    expect(document.body.style.overflow).toBe("hidden");
    expect(document.documentElement.style.overflow).toBe("hidden");
    expect(document.body.style.position).toBe("fixed");
    expect(document.body.style.top).toBe("-180px");
    expect(document.body.style.width).toBe("100%");
    expect(menuButton).toHaveAccessibleName("Close main menu");
    expect(
      screen.getByRole("navigation", { name: "Mobile navigation" }),
    ).toBe(navigation);
    expect(navigation).not.toHaveAttribute("inert");
    expect(navigation).toHaveClass("max-sm:translate-x-0");
    const homeLink = within(navigation).getByRole("link", { name: "Home" });
    const projectsLink = within(navigation).getByRole("link", {
      name: "Projects",
    });
    expect(homeLink).toHaveClass("max-sm:translate-x-0");
    expect(homeLink).toHaveClass("max-sm:opacity-100");
    expect(homeLink).toHaveStyle({ transitionDelay: "120ms" });
    expect(projectsLink).toHaveStyle({ transitionDelay: "175ms" });

    fireEvent.click(
      screen.getByRole("button", { name: "Close mobile menu backdrop" }),
    );

    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    expect(document.body.style.overflow).toBe("");
    expect(document.documentElement.style.overflow).toBe("");
    expect(document.body.style.position).toBe("");
    expect(document.body.style.top).toBe("");
    expect(document.body.style.width).toBe("");
    expect(scrollTo).toHaveBeenLastCalledWith(0, 180);
    expect(navigation).toHaveAttribute("inert");
    expect(navigation).toHaveClass("max-sm:translate-x-full");

    fireEvent.click(menuButton);
    expect(document.body.style.overflow).toBe("hidden");
    expect(document.documentElement.style.overflow).toBe("hidden");

    const contactLink = within(navigation).getByRole("link", {
      name: "Contact",
    });
    contactLink.addEventListener("click", (event) => event.preventDefault(), {
      once: true,
    });

    fireEvent.click(contactLink);

    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    expect(document.body.style.overflow).toBe("");
    expect(document.documentElement.style.overflow).toBe("");
    expect(navigation).toHaveAttribute("inert");
    expect(navigation).toHaveClass("max-sm:translate-x-full");

    fireEvent.click(menuButton);
    expect(document.body.style.overflow).toBe("hidden");
    expect(document.documentElement.style.overflow).toBe("hidden");

    unmount();

    expect(document.body.style.overflow).toBe("");
    expect(document.documentElement.style.overflow).toBe("");
    expect(scrollTo).toHaveBeenLastCalledWith(0, 180);

    scrollTo.mockRestore();
  });

  test("renders a professional footer with profile, navigation, and contact links", () => {
    render(<SiteFooter />);

    const footer = screen.getByRole("contentinfo");

    expect(
      within(footer).getByRole("link", { name: "Mark Kenneth home" }),
    ).toHaveAttribute("href", "/");
    expect(within(footer).getByText("Mark Kenneth")).toBeInTheDocument();
    expect(within(footer).getByText("</>")).toBeInTheDocument();
    expect(within(footer).getByText(profile.role)).toBeInTheDocument();
    expect(within(footer).getByText(profile.location)).toBeInTheDocument();
    expect(
      within(footer).getByRole("navigation", { name: "Footer navigation" }),
    ).toBeInTheDocument();
    expect(within(footer).getByRole("link", { name: "Home" })).toHaveAttribute(
      "href",
      "/",
    );
    expect(
      within(footer).getByRole("link", { name: "Projects" }),
    ).toHaveAttribute("href", "/projects");
    expect(
      within(footer).getByRole("link", { name: "Experience" }),
    ).toHaveAttribute("href", "/experience");
    expect(
      within(footer).getByRole("link", { name: "Skills" }),
    ).toHaveAttribute("href", "/skills");
    expect(
      within(footer).getByRole("link", { name: "Contact" }),
    ).toHaveAttribute("href", "/contact");
    expect(
      within(footer).getByRole("link", { name: profile.email }),
    ).toHaveAttribute("href", `mailto:${profile.email}`);
    expect(
      within(footer).getByRole("link", { name: profile.phone }),
    ).toHaveAttribute("href", `tel:${profile.phone.replaceAll(" ", "")}`);

    for (const link of profile.links) {
      expect(
        within(footer).getByRole("link", { name: link.label }),
      ).toHaveAttribute("href", link.href);
    }
  });

  test("uses a centered compact footer layout on mobile only", () => {
    render(<SiteFooter />);

    const footer = screen.getByRole("contentinfo");
    const footerLayout = footer.children[0];
    const footerBottom = footer.children[1]?.firstElementChild;
    const footerNavigation = within(footer).getByRole("navigation", {
      name: "Footer navigation",
    });
    const navigationList = footerNavigation.querySelector("ul");
    const contactLink = within(footer).getByRole("link", {
      name: profile.email,
    });
    const serviceItem = within(footer).getByText(
      "Responsive web development",
    );
    const serviceList = serviceItem.closest("ul");

    expect(footerLayout).toHaveClass(
      "justify-items-center",
      "text-center",
      "sm:justify-items-start",
      "sm:text-left",
    );
    expect(navigationList).toHaveClass("grid-cols-2", "sm:grid-cols-1");
    expect(contactLink).toHaveClass("justify-center", "sm:justify-start");
    expect(serviceList).toHaveClass("hidden", "sm:grid");
    expect(footerBottom).toHaveClass("items-center", "text-center");
  });
});

describe("scroll reveal", () => {
  test("reveals animated elements when they enter the viewport", () => {
    let observedElement: Element | undefined;
    let observerCallback:
      | ((entries: IntersectionObserverEntry[]) => void)
      | undefined;
    const observe = vi.fn((element: Element) => {
      observedElement = element;
    });
    const unobserve = vi.fn();
    const disconnect = vi.fn();

    vi.stubGlobal(
      "IntersectionObserver",
      vi.fn(function MockIntersectionObserver(
        callback: (entries: IntersectionObserverEntry[]) => void,
      ) {
        observerCallback = callback;

        return {
          observe,
          unobserve,
          disconnect,
        };
      }),
    );

    render(
      <ScrollReveal>
        <section>
          <div className="motion-card">Project card</div>
        </section>
      </ScrollReveal>,
    );

    const card = screen.getByText("Project card");

    expect(observe).toHaveBeenCalledWith(card);
    expect(card).toHaveClass("reveal-on-scroll");
    expect(card).not.toHaveClass("is-visible");

    observerCallback?.([
      {
        target: observedElement,
        isIntersecting: true,
      } as IntersectionObserverEntry,
    ]);

    expect(card).toHaveClass("is-visible");
    expect(unobserve).toHaveBeenCalledWith(card);
    expect(disconnect).not.toHaveBeenCalled();
  });
});

describe("portfolio pages", () => {
  test("renders the home page introduction and primary actions", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { name: profile.name }),
    ).toBeInTheDocument();
    expect(screen.getByText(profile.role)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "View Project Proof" }),
    ).toHaveAttribute("href", "/projects");
    expect(screen.getByRole("link", { name: "Email Mark" })).toHaveAttribute(
      "href",
      `mailto:${profile.email}`,
    );
    expect(screen.queryByText("ATS-friendly portfolio")).not.toBeInTheDocument();
    expect(screen.queryByText("Resume Summary")).not.toBeInTheDocument();
    expect(screen.queryByText("Web Developer")).not.toBeInTheDocument();
    expect(screen.queryByText("Multimedia Designer")).not.toBeInTheDocument();
    expect(screen.queryByText("Creative Identity")).not.toBeInTheDocument();
    expect(screen.queryByText("UI")).not.toBeInTheDocument();
    expect(screen.queryByText("Code")).not.toBeInTheDocument();
    expect(screen.queryByText("Media")).not.toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: "Purple isometric programming laptop illustration",
      }),
    ).toBeInTheDocument();
    expect(
      screen.queryByLabelText("Isometric developer desk animation"),
    ).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Animated code laptop")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Animated coffee cup")).not.toBeInTheDocument();
    expect(screen.getByText("Project Proof")).toBeInTheDocument();
    expect(screen.getByText("Core Competencies")).toBeInTheDocument();
    expect(screen.getByText("4+ Years")).toBeInTheDocument();
    expect(screen.getByText("6 Live Projects")).toBeInTheDocument();
  });

  test("uses professional card styling across portfolio card surfaces", () => {
    render(<HomePage />);

    expect(
      screen.getByLabelText("Animated identity motion graphic"),
    ).toHaveClass(
      "bg-white",
      "text-brand-ink",
    );
    expect(screen.getByText("4+ Years").closest(".motion-card")).toHaveClass(
      "bg-white",
      "text-brand-ink",
    );

    render(<ProjectsPage />);
    expect(screen.getByText("Project Showcase").closest("section")).toHaveClass(
      "bg-white",
      "text-brand-ink",
    );

    render(<ExperiencePage />);
    expect(
      screen
        .getByText(experiences[0].role)
        .closest("article"),
    ).toHaveClass("bg-white", "text-brand-ink");

    render(<SkillsPage />);
    expect(screen.getByText("Web Development").closest("section")).toHaveClass(
      "bg-white",
      "text-brand-ink",
    );

    render(<ContactPage />);
    expect(screen.getByText("Project Inquiry").closest(".motion-card")).toHaveClass(
      "bg-white",
      "text-brand-ink",
    );
  });

  test("keeps the homepage hero resume-like and left aligned", () => {
    render(<HomePage />);

    const heading = screen.getByRole("heading", { name: profile.name });
    const intro = heading.closest("section");

    expect(intro).toHaveClass("lg:grid-cols-[1.05fr_0.95fr]");
    expect(heading).toHaveClass("text-brand-ink");
    expect(screen.getByText(profile.location)).toBeInTheDocument();
  });

  test("renders icons beside homepage core skills", () => {
    render(<HomePage />);

    for (const skill of ["HTML", "Tailwind CSS", "Node.js", "Next.js"]) {
      expect(screen.getByLabelText(`${skill} icon`)).toBeInTheDocument();
    }
  });

  test("renders an empty featured project state", () => {
    render(<FeaturedProjectCard />);

    expect(screen.getByText("Featured project")).toBeInTheDocument();
    expect(screen.getByText("Add your first project")).toBeInTheDocument();
  });

  test("renders the projects page from portfolio data", () => {
    render(<ProjectsPage />);

    expect(
      screen.getByRole("heading", { name: "Projects" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Project Showcase")).toBeInTheDocument();
    expect(screen.getAllByText("Outcome").length).toBeGreaterThan(0);
    expect(screen.getByText("6 Live Projects")).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Visit site" })).toHaveLength(6);
    for (const project of projects) {
      expect(screen.getAllByText(project.title).length).toBeGreaterThan(0);
      expect(screen.getAllByText(project.category).length).toBeGreaterThan(0);
      expect(
        screen.getByRole("img", { name: `${project.title} homepage preview` }),
      ).toBeInTheDocument();
    }
  });

  test("renders the experience page from portfolio data", () => {
    render(<ExperiencePage />);

    expect(
      screen.getByRole("heading", { name: "Experience" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Resume Experience")).toBeInTheDocument();
    for (const experience of experiences) {
      expect(screen.getByText(experience.role)).toBeInTheDocument();
    }
    for (const item of education) {
      expect(screen.getByText(item.degree)).toBeInTheDocument();
    }
  });

  test("renders the skills page from portfolio data", () => {
    render(<SkillsPage />);

    expect(screen.getByRole("heading", { name: "Skills" })).toBeInTheDocument();
    expect(screen.getByText("Skills Matrix")).toBeInTheDocument();
    for (const group of skillGroups) {
      expect(screen.getByText(group.title)).toBeInTheDocument();
    }
  });

  test("renders skill icons beside representative skills", () => {
    render(<SkillsPage />);

    for (const skill of [
      "HTML",
      "Tailwind CSS",
      "Node.js",
      "React",
      "WordPress",
      "Vercel",
      "GoDaddy",
      "UI/UX Design",
      "Video Editing",
      "SEO",
      "Trello",
      "Slack",
      "Notion",
    ]) {
      expect(screen.getByLabelText(`${skill} icon`)).toBeInTheDocument();
    }
  });

  test("renders skill icons with recognizable brand colors", () => {
    render(
      <>
        <SkillIcon skill="HTML" />
        <SkillIcon skill="Tailwind CSS" />
        <SkillIcon skill="Node.js" />
        <SkillIcon skill="React" />
        <SkillIcon skill="Next.js" />
      </>,
    );

    expect(screen.getByLabelText("HTML icon").closest("span")).toHaveStyle({
      color: "rgb(227, 79, 38)",
    });
    expect(
      screen.getByLabelText("Tailwind CSS icon").closest("span"),
    ).toHaveStyle({
      color: "rgb(6, 182, 212)",
    });
    expect(screen.getByLabelText("Node.js icon").closest("span")).toHaveStyle({
      color: "rgb(95, 160, 78)",
    });
    expect(screen.getByLabelText("React icon").closest("span")).toHaveStyle({
      color: "rgb(97, 218, 251)",
    });
    expect(screen.getByLabelText("Next.js icon").closest("span")).toHaveStyle({
      color: "rgb(0, 0, 0)",
    });
  });

  test("renders the contact page without a backend form", () => {
    render(<ContactPage />);

    expect(screen.getByRole("heading", { name: "Contact" })).toBeInTheDocument();
    expect(screen.getByText("Project Inquiry")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: profile.email })).toHaveAttribute(
      "href",
      `mailto:${profile.email}`,
    );
    expect(screen.getByRole("link", { name: profile.phone })).toHaveAttribute(
      "href",
      `tel:${profile.phone.replaceAll(" ", "")}`,
    );
  });
});
