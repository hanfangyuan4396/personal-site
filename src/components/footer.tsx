import Link from "next/link";

const socialLinks = [
  { href: "https://github.com/hanfangyuan4396", label: "GitHub" },
  { href: "https://x.com/hanfangyuan", label: "X" },
  { href: "https://blog.csdn.net/weixin_44387339", label: "CSDN" },
  { href: "https://t.zsxq.com/gqdRp", label: "知识星球" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div>
            <p className="font-bold">方圆</p>
            <p className="mt-1 text-sm text-muted-foreground">
              全栈开发 · AI 工程师 · 开源作者
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-6 border-t pt-4 text-center text-xs text-muted-foreground">
          © {year} 方圆 · Powered by Next.js
        </div>
      </div>
    </footer>
  );
}
