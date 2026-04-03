import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "方圆AI分享",
  description: "方圆关于 AI、编程与开源的技术分享",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mb-14">
        <h1 className="text-3xl font-bold sm:text-4xl">博客</h1>
        <p className="mt-3 text-muted-foreground">关于 AI、编程与开源的技术分享</p>
      </div>

      {/* 空状态 */}
      <div className="flex flex-col items-center gap-6 rounded-xl border border-blue-500/20 bg-gradient-to-b from-blue-950/20 to-card py-20 text-center">
        <div className="text-4xl">✍️</div>
        <div>
          <p className="font-semibold">博客内容整理中</p>
          <p className="mt-1 text-sm text-muted-foreground">
            敬请期待，也欢迎关注我的其他内容平台
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            variant="outline"
            asChild
            className="border-blue-500/30 hover:border-blue-500/60 hover:text-blue-400"
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
            className="border-blue-500/30 hover:border-blue-500/60 hover:text-blue-400"
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

      {/* 引导关注公众号 */}
      <div className="mt-12 rounded-xl border border-cyan-500/20 bg-gradient-to-r from-blue-950/20 to-cyan-950/10 px-6 py-8 text-center">
        <p className="font-semibold">关注公众号「方圆AI分享」</p>
        <p className="mt-2 text-sm text-muted-foreground">
          不定期分享 AI 编程实践、开源工具与个人思考
        </p>
      </div>
    </div>
  );
}
