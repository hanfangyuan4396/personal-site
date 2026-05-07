import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/data/blog-posts";
import { createMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return { title: "文章未找到" };
  }
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [post.title, "AI 博客", "AI 编程", "开源实践"],
  });
}

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mb-10">
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="-ml-2 mb-6 text-muted-foreground hover:bg-[oklch(0.94_0.035_150)] hover:text-[oklch(0.38_0.11_155)] dark:hover:bg-[oklch(0.74_0.12_155/0.1)] dark:hover:text-[oklch(0.78_0.12_155)]"
        >
          <Link href="/blog">
            <ArrowLeft className="mr-1 h-4 w-4" />
            返回博客
          </Link>
        </Button>
        <p className="text-sm text-muted-foreground">{formatDate(post.publishedAt)}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{post.title}</h1>
        <p className="mt-4 leading-relaxed text-muted-foreground">{post.intro}</p>
      </div>

      <article className="space-y-12 border-t border-[oklch(0.72_0.045_100/0.18)] pt-10 dark:border-white/[0.08]">
        {post.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">{section.heading}</h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              {section.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </article>
    </div>
  );
}
