import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import ContactPage from "../app/contact/page";
import ExperiencePage from "../app/experience/page";
import HomePage, { FeaturedProjectCard } from "../app/page";
import ProjectsPage from "../app/projects/page";
import SkillsPage from "../app/skills/page";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import {
  education,
  experiences,
  profile,
  projects,
  skillGroups,
} from "../data/portfolio";

describe("portfolio data", () => {
  test("exposes editable profile and portfolio lists", () => {
    expect(profile.name).toEqual(expect.any(String));
    expect(profile.email).toContain("@");
    expect(profile.phone).toEqual(expect.any(String));
    expect(Array.isArray(projects)).toBe(true);
    expect(Array.isArray(experiences)).toBe(true);
    expect(Array.isArray(education)).toBe(true);
    expect(Array.isArray(skillGroups)).toBe(true);
  });
});

describe("site chrome", () => {
  test("renders navigation links for each portfolio page", () => {
    render(<SiteHeader />);

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

  test("renders footer profile links", () => {
    render(<SiteFooter />);

    expect(screen.getByText(profile.name)).toBeInTheDocument();
    for (const link of profile.links) {
      expect(screen.getByRole("link", { name: link.label })).toHaveAttribute(
        "href",
        link.href,
      );
    }
  });
});

describe("portfolio pages", () => {
  test("renders the home page introduction and primary actions", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { name: profile.name }),
    ).toBeInTheDocument();
    expect(screen.getByText(profile.role)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View Projects" })).toHaveAttribute(
      "href",
      "/projects",
    );
    expect(screen.getByRole("link", { name: "Contact Me" })).toHaveAttribute(
      "href",
      "/contact",
    );
    expect(screen.getByText("Portfolio console")).toBeInTheDocument();
    expect(screen.getByText("4+ Years")).toBeInTheDocument();
    expect(screen.getByText("Web + Multimedia")).toBeInTheDocument();
    expect(screen.getByText("Remote-ready")).toBeInTheDocument();
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
    expect(screen.getByText("Project index")).toBeInTheDocument();
    for (const project of projects) {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    }
  });

  test("renders the experience page from portfolio data", () => {
    render(<ExperiencePage />);

    expect(
      screen.getByRole("heading", { name: "Experience" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Career timeline")).toBeInTheDocument();
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
    expect(screen.getByText("Capability matrix")).toBeInTheDocument();
    for (const group of skillGroups) {
      expect(screen.getByText(group.title)).toBeInTheDocument();
    }
  });

  test("renders the contact page without a backend form", () => {
    render(<ContactPage />);

    expect(screen.getByRole("heading", { name: "Contact" })).toBeInTheDocument();
    expect(screen.getByText("Availability signal")).toBeInTheDocument();
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
