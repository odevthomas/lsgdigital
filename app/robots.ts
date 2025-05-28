import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/private/"],
    },
    sitemap: "https://lsgdigital.com.br/sitemap.xml",
    host: "https://lsgdigital.com.br",
  }
}
