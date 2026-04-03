import Link from "next/link";
import Image from "next/image";
import { ContactChannelIcon, ZsxqIcon } from "@/components/shared/contact-channel-icons";
import { footerRoleLabels } from "@/data/home";

const footerContactIconLinkClass =
  "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-card/80 text-muted-foreground transition-colors hover:border-blue-500/40 hover:text-blue-400";

const ZSXQ_URL = "https://t.zsxq.com/gqdRp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-blue-500/10 bg-background">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start md:gap-12 lg:gap-16">
          <div>
            <p className="text-lg font-bold tracking-tight text-foreground">方圆</p>
            <p className="mt-3 text-sm font-medium text-foreground">{footerRoleLabels.join(" · ")}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              智能体开发实践者，Dify-on-WeChat 开源项目作者。聚焦 AI 工程落地与开源协作。
            </p>
          </div>

          <div
            role="region"
            aria-labelledby="footer-contact-heading"
            className="flex flex-col gap-4 md:items-end md:text-right"
          >
            <h2
              id="footer-contact-heading"
              className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
            >
              联系方式
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/#contact"
                className={footerContactIconLinkClass}
                aria-label="前往联系我 — 微信"
              >
                <ContactChannelIcon label="微信" className="h-5 w-5" />
              </Link>
              <Link
                href="/#contact"
                className={footerContactIconLinkClass}
                aria-label="前往联系我 — GitHub"
              >
                <ContactChannelIcon label="GitHub" className="h-5 w-5" />
              </Link>
              <Link
                href="/#contact"
                className={footerContactIconLinkClass}
                aria-label="前往联系我 — CSDN"
              >
                <ContactChannelIcon label="CSDN 博客" className="h-5 w-5" />
              </Link>
              <Link
                href="/#contact"
                className={footerContactIconLinkClass}
                aria-label="前往联系我 — 邮箱"
              >
                <ContactChannelIcon label="邮箱" className="h-5 w-5" />
              </Link>
              <Link
                href={ZSXQ_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={footerContactIconLinkClass}
                aria-label="知识星球"
              >
                <ZsxqIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-xs text-muted-foreground">
            <span className="shrink-0">
              © {year} 方圆. All rights reserved. · Powered by Next.js
            </span>
            <Link
              href="https://beian.mps.gov.cn/#/query/webSearch?code=11010802039582"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1 transition-colors hover:text-foreground"
            >
              <Image src="/beian.png" alt="公安备案图标" width={18} height={18} />
              京公网安备 11010802039582号
            </Link>
            <Link
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 transition-colors hover:text-foreground"
            >
              京ICP备2022015055号-2
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
