"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import { BookOpen, Briefcase, FolderKanban, Home, Menu, UserRound, X } from "lucide-react";

import { WechatIcon } from "@/components/shared/contact-channel-icons";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

const navLinks: { href: string; label: string; Icon: LucideIcon }[] = [
  { href: "/", label: "首页", Icon: Home },
  { href: "/services", label: "服务", Icon: Briefcase },
  { href: "/projects", label: "项目", Icon: FolderKanban },
  { href: "/blog", label: "博客", Icon: BookOpen },
  { href: "/about", label: "关于我", Icon: UserRound },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blue-200/60 bg-white/85 shadow-[0_1px_8px_rgba(59,130,246,0.06)] backdrop-blur-md dark:border-blue-500/10 dark:bg-background/80 dark:shadow-none">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2"
        >
          <Image
            src="/wechat_avatar.jpg"
            alt="wechat-avatar"
            width={28}
            height={28}
            unoptimized
            className="h-7 w-7 shrink-0 rounded-full object-cover ring-1 ring-border"
          />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-lg font-bold tracking-tight text-transparent">
            方圆AI
          </span>
        </Link>

        <nav className="hidden items-center gap-10 text-sm font-medium sm:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            const { Icon } = link;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "inline-flex items-center gap-1.5 transition-colors hover:text-blue-600 dark:hover:text-blue-400",
                  isActive ? "text-blue-600 dark:text-blue-400" : "text-muted-foreground"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#contact"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-card/80 text-muted-foreground transition-colors hover:border-blue-400/50 hover:text-blue-600 dark:hover:border-blue-500/40 dark:hover:text-blue-400"
            aria-label="前往联系我 — 微信"
          >
            <WechatIcon className="h-5 w-5" />
          </Link>
          <ThemeToggle />
          <button
            className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-500/10 dark:hover:text-blue-400 sm:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="切换菜单"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-blue-200/60 px-4 py-3 sm:hidden dark:border-blue-500/10">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            const { Icon } = link;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-2 py-2 text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400",
                  isActive ? "text-blue-600 dark:text-blue-400" : "text-muted-foreground"
                )}
                onClick={() => setMenuOpen(false)}
              >
                <Icon className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
