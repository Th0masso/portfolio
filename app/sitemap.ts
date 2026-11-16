import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: site.url, lastModified },
    { url: `${site.url}/work`, lastModified },
    ...projects.map((project) => ({
      url: `${site.url}/work/${project.slug}`,
      lastModified,
    })),
    { url: `${site.url}/about`, lastModified },
    { url: `${site.url}/contact`, lastModified },
  ];
}
