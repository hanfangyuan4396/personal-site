import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/data/blog-posts";

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
  return {
    title: `${post.title} · 方圆AI分享`,
    description: post.excerpt,
  };
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
          className="-ml-2 mb-6 text-muted-foreground hover:text-foreground"
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

      <article className="space-y-12 border-t border-border pt-10">
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
