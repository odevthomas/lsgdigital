import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lsgdigital.com.br"

  // Lista de URLs principais do site
  const routes = ["", "/metodologia", "/valores", "/cases", "/mercados", "/contato", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // Simular URLs de cases (em um site real, isso viria do seu CMS ou banco de dados)
  const cases = [
    { slug: "resort-premium", date: "2024-05-01" },
    { slug: "clinica-estetica", date: "2024-04-15" },
    { slug: "educacao-premium", date: "2024-04-01" },
  ].map((post) => ({
    url: `${baseUrl}/cases/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Simular URLs de blog (em um site real, isso viria do seu CMS ou banco de dados)
  const blogPosts = [
    { slug: "metodo-prisma-explicado", date: "2024-05-10" },
    { slug: "diferenca-entre-trafego-e-engenharia-de-crescimento", date: "2024-04-25" },
    { slug: "como-aumentar-roi-em-campanhas-de-google-ads", date: "2024-04-05" },
  ].map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...routes, ...cases, ...blogPosts]
}
