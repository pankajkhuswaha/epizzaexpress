import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `https://epizzaexpress.in/`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `https://epizzaexpress.in/about`,
      lastModified: new Date(),
    },
    {
      url: `https://epizzaexpress.in/contact`,
      lastModified: new Date(),
    },
    {
      url: `https://epizzaexpress.in/menu`,
      lastModified: new Date(),
    },
    {
      url: `https://epizzaexpress.in/blogs`,
      lastModified: new Date(),
    },
    {
      url: `https://epizzaexpress.in/auth/signup`,
      lastModified: new Date(),
    },
  ];
}
