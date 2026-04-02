import Image from "next/image";
import Link from "next/link";
import { Github, Mail, BookOpen } from "lucide-react";

import { contactLinks, qrCodes } from "@/data/home";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const contactIconMap: Record<string, React.ReactNode> = {
  "GitHub": <Github className="h-4 w-4" />,
  "X (Twitter)": <XIcon className="h-4 w-4" />,
  "CSDN 博客": <BookOpen className="h-4 w-4" />,
  "邮箱": <Mail className="h-4 w-4" />,
};

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-blue-500/10 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-bold sm:text-3xl">联系我</h2>
          <p className="mt-2 text-muted-foreground">欢迎交流合作，随时可以找到我</p>
        </div>

        <div className="flex flex-col gap-12 md:flex-row md:gap-16">
          {/* 社交链接 */}
          <div className="flex flex-col gap-3">
            {contactLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="group flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-blue-400"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border bg-card transition-colors group-hover:border-blue-500/40 group-hover:text-blue-400">
                  {contactIconMap[link.label]}
                </span>
                {link.label}
              </Link>
            ))}
          </div>

          {/* 二维码 */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            {qrCodes.map((qr) => (
              <div key={qr.label} className="flex flex-col items-center gap-2">
                <div className="overflow-hidden rounded-lg border border-blue-500/20 bg-white p-1 transition-all hover:border-blue-500/50 hover:shadow-[0_0_16px_rgba(59,130,246,0.15)]">
                  <Image
                    src={qr.src}
                    alt={qr.label}
                    width={100}
                    height={100}
                    className="h-24 w-24 object-contain sm:h-28 sm:w-28"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xs font-medium">{qr.label}</p>
                  <p className="text-xs text-muted-foreground">{qr.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
