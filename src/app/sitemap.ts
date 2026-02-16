import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://localhost:3000/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
      images: ["/sitemap/sitemap-home.png"],
    },
    {
      url: "https://localhost:3000/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
      images: ["/sitemap/sitemap-about.png"],
    },
    {
      url: "https://localhost:3000/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
      images: ["/sitemap/sitemap-contact.png"],
    },
    {
      url: "https://localhost:3000/features",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
      images: ["/sitemap/sitemap-features.png"],
    },
    {
      url: "https://localhost:3000/membership",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
      images: ["/sitemap/sitemap-membership.png"],
    },
  ];
}
