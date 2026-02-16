import type { Metadata } from "next";

type PagePath =
  | "/"
  | "/about"
  | "/features"
  | "/membership"
  | "/trainers"
  | "/contact"
  | string;

type PageMetadata = {
  title: string;
  description: string;
  keywords?: string[];
};

export function createPageMetadata(pathname: PagePath): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const canonicalUrl = `${baseUrl}${pathname}`;
  const siteName = "HubFitness";
  const slogan = "Train Hard. Stay Strong.";

  const metadataMap: Record<string, PageMetadata> = {
    "/": {
      title: "HubFitness | Modern Gym & Fitness Center",
      description:
        "HubFitness is a modern gym offering expert trainers and advanced equipment.",
      keywords: ["gym", "fitness", "personal training", "workout"],
    },

    "/about": {
      title: "About HubFitness",
      description:
        "Learn about our mission, expert trainers, and fitness philosophy.",
    },

    "/features": {
      title: "Gym Features",
      description:
        "Explore modern gym equipment, personal coaching, and group training sessions.",
    },

    "/membership": {
      title: "Membership Plans",
      description:
        "Flexible and affordable gym membership plans for all fitness levels.",
    },

    "/trainers": {
      title: "Expert Trainers",
      description:
        "Meet our certified trainers dedicated to your transformation.",
    },

    "/contact": {
      title: "Contact HubFitness",
      description:
        "Get in touch with us for memberships and fitness consultations.",
    },
  };

  const { title, description, keywords } =
    metadataMap[pathname] || metadataMap["/"];

  return {
    metadataBase: new URL(baseUrl),

    title: {
      default: title,
      template: `%s | ${siteName}`,
    },

    description,
    keywords: keywords?.join(", "),

    alternates: {
      canonical: canonicalUrl,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}
