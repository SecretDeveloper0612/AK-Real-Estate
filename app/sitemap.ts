import { MetadataRoute } from "next";
import { getProperties } from "@/lib/properties-data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://luxeliving.vercel.app"; // Replace with your actual domain

  // Static routes
  const routes = ["", "/about", "/properties", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic routes (Properties)
  const properties = await getProperties();
  const propertyRoutes = properties.map((property) => ({
    url: `${baseUrl}/properties/${property.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...routes, ...propertyRoutes];
}
