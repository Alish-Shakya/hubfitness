import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const isProduction = process.env.NODE_ENV === "production";

  return {
    rules: isProduction
      ? [
          {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/", "/admin/", "/dashboard/", "/private/"],
          },
          {
            userAgent: "Googlebot",
            allow: "/",
          },
        ]
      : [
          // Block indexing in development
          {
            userAgent: "*",
            disallow: "/",
          },
        ],

    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
