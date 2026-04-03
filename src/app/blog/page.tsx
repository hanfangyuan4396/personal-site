import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog-posts";

export const metadata = {
  title: "方圆AI分享",
  description: "方圆关于 AI、编程与开源的技术分享",
};

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

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
                className="block rounded-xl border border-blue-200/70 bg-gradient-to-br from-white via-blue-50/50 to-cyan-50/30 p-6 shadow-[0_8px_24px_rgba(59,130,246,0.06)] transition hover:border-blue-300 hover:shadow-[0_12px_32px_rgba(59,130,246,0.12)] dark:border-blue-500/20 dark:from-blue-950/20 dark:via-card dark:to-card dark:shadow-none dark:hover:border-blue-500/40"
              >
                <p className="text-sm text-muted-foreground">{formatDate(post.publishedAt)}</p>
                <h2 className="mt-1 text-xl font-semibold text-foreground">{post.title}</h2>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="mt-3 inline-block text-sm font-medium text-blue-700 dark:text-blue-400">
                  阅读全文 →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center gap-6 rounded-xl border border-blue-200/70 bg-gradient-to-b from-white via-blue-50/75 to-cyan-50/30 py-20 text-center shadow-[0_8px_24px_rgba(59,130,246,0.08)] dark:border-blue-500/20 dark:from-blue-950/20 dark:via-card dark:to-card dark:shadow-none">
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
          className="border-blue-300/60 bg-white/80 text-blue-700 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-500/30 dark:bg-transparent dark:text-foreground dark:hover:border-blue-500/60 dark:hover:text-blue-400"
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
          className="border-blue-300/60 bg-white/80 text-blue-700 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-500/30 dark:bg-transparent dark:text-foreground dark:hover:border-blue-500/60 dark:hover:text-blue-400"
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
