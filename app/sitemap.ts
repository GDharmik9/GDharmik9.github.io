import type { MetadataRoute } from "next";
import { profile } from "@/lib/profile";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: profile.domain, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...projects.map((project) => ({ url: `${profile.domain}/projects/${project.slug}/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
