import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog-posts";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "AI、编程与开源博客",
  description: "方圆关于 AI、编程、开源与实践落地的技术分享，后续将持续补充 AI 咨询、智能体开发与企业 AI 落地相关内容。",
  path: "/blog",
  keywords: ["AI 博客", "AI 咨询", "AI 智能体开发", "企业 AI 落地", "微信接入 AI"],
});

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const blogCardClassName =
  "block rounded-lg border border-[oklch(0.84_0.018_105)] bg-[oklch(0.995_0.003_95/0.78)] p-6 shadow-[0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-sm transition-all hover:border-[oklch(0.58_0.09_145/0.55)] hover:shadow-[0_16px_34px_rgba(45,60,43,0.1)] dark:border-white/10 dark:bg-white/[0.045] dark:shadow-none dark:hover:border-[oklch(0.74_0.12_155/0.45)] dark:hover:shadow-[0_18px_38px_rgba(0,0,0,0.24)]";

const outlineButtonClassName =
  "border-[oklch(0.66_0.09_155/0.45)] bg-[oklch(0.995_0.003_95/0.72)] text-[oklch(0.36_0.11_155)] hover:border-[oklch(0.52_0.11_155)] hover:bg-[oklch(0.94_0.035_150)] hover:text-[oklch(0.3_0.1_155)] dark:border-[oklch(0.74_0.12_155/0.34)] dark:bg-transparent dark:text-[oklch(0.78_0.12_155)] dark:hover:border-[oklch(0.78_0.12_155/0.58)] dark:hover:bg-[oklch(0.74_0.12_155/0.1)] dark:hover:text-[oklch(0.86_0.11_155)]";

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mb-14">
        <h1 className="text-3xl font-bold sm:text-4xl">博客</h1>
        <p className="mt-3 text-muted-foreground">关于 AI、编程与开源的技术分享</p>
      </div>

      {sorted.length > 0 ? (
        <ul className="space-y-4">
          {sorted.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className={blogCardClassName}
              >
                <p className="text-sm text-muted-foreground">{formatDate(post.publishedAt)}</p>
                <h2 className="mt-1 text-xl font-semibold text-foreground">{post.title}</h2>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="mt-3 inline-block text-sm font-medium text-[oklch(0.38_0.11_155)] dark:text-[oklch(0.78_0.12_155)]">
                  阅读全文 →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center gap-6 rounded-lg border border-[oklch(0.84_0.018_105)] bg-[oklch(0.995_0.003_95/0.78)] py-20 text-center shadow-[0_16px_34px_rgba(45,60,43,0.08)] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.045] dark:shadow-none">
          <div className="text-4xl">✍️</div>
          <div>
            <p className="font-semibold">博客内容整理中</p>
            <p className="mt-1 text-sm text-muted-foreground">
              敬请期待，也欢迎关注我的其他内容平台
            </p>
          </div>
        </div>
      )}

      <div className="mt-12 flex flex-wrap justify-center gap-3">
        <Button
          variant="outline"
          asChild
          className={outlineButtonClassName}
        >
          <Link
            href="https://blog.csdn.net/weixin_44387339"
            target="_blank"
            rel="noopener noreferrer"
          >
            CSDN 博客 <ExternalLink className="ml-1 h-3.5 w-3.5" />
          </Link>
        </Button>
        <Button
          variant="outline"
          asChild
          className={outlineButtonClassName}
        >
          <Link
            href="https://github.com/hanfangyuan4396"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <ExternalLink className="ml-1 h-3.5 w-3.5" />
          </Link>
        </Button>
      </div>

    </div>
  );
}
