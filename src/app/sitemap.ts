import type { MetadataRoute } from "next";

import { blogPosts } from "@/data/blog-posts";
import { getSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const staticRoutes = ["", "/home", "/about", "/projects", "/services", "/blog"];

  const staticEntries = staticRoutes.map((path) => ({
    url: new URL(path || "/", siteUrl).toString(),
    lastModified: new Date(),
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: new URL(`/blog/${post.slug}`, siteUrl).toString(),
    lastModified: new Date(post.publishedAt),
  }));

  return [...staticEntries, ...blogEntries];
}
