"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ContactChannelIcon } from "@/components/shared/contact-channel-icons";
import { Button } from "@/components/ui/button";
import { qrCodes } from "@/data/contact";
import { heroTypingRoles } from "@/data/home-hero";
import { StatsSection } from "./stats-section";

const HERO_CONTACT_ICON_LABELS = ["GitHub", "CSDN 博客"] as const;

const roles = heroTypingRoles;
const typingSpeed = 110;
const deletingSpeed = 55;
const holdDelay = 1200;

const heroIconBoxClass =
  "group flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-card/80 text-muted-foreground transition-colors hover:border-blue-500/40 hover:text-blue-600 dark:hover:text-blue-400";

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const wechatPersonal = qrCodes.find((qr) => qr.label === "微信");

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (!isDeleting && displayText === currentRole) {
      const holdTimer = window.setTimeout(() => {
        setIsDeleting(true);
      }, holdDelay);

      return () => window.clearTimeout(holdTimer);
    }

    const nextText = isDeleting
      ? currentRole.slice(0, Math.max(displayText.length - 1, 0))
      : currentRole.slice(0, displayText.length + 1);

    const timer = window.setTimeout(() => {
      setDisplayText(nextText);

      if (isDeleting && nextText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => window.clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.08),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.12),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-50/40 dark:hidden" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:gap-14 md:text-left">
          <div className="shrink-0">
            <div className="relative">
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 opacity-20 blur-md dark:opacity-30" />
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-40 dark:opacity-50" />
              <Image
                src="/avatar.jpg"
                alt="方圆头像"
                width={140}
                height={140}
                className="relative rounded-full"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-5 md:items-start">
            <div>
              <p className="text-sm font-medium tracking-wide text-muted-foreground">
                你好，我是
              </p>
              <h1 className="mt-1 text-4xl font-bold tracking-tight text-blue-700 sm:text-5xl dark:text-blue-400">
                韩方圆
              </h1>
            </div>

            <div className="relative min-h-12 w-full max-w-md md:max-w-2xl">
              <div className="pointer-events-none absolute inset-0 rounded-2xl border border-blue-300/20 bg-gradient-to-r from-blue-50/80 via-indigo-50/40 to-transparent blur-xl dark:border-blue-500/15 dark:from-blue-500/10 dark:via-cyan-500/10" />
              <div className="relative flex items-center justify-center rounded-2xl border border-blue-200/60 bg-white/80 px-5 py-3 shadow-[0_2px_16px_rgba(99,102,241,0.1)] backdrop-blur-sm md:justify-start dark:border-blue-500/20 dark:bg-card/60 dark:shadow-none">
                <span className="mr-3 h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(99,102,241,0.5)] dark:bg-cyan-400 dark:shadow-[0_0_16px_rgba(34,211,238,0.85)]" />
                <span
                  data-testid="hero-role-text"
                  className="text-xl font-semibold tracking-[0.12em] text-blue-700 sm:text-2xl dark:bg-gradient-to-r dark:from-blue-300 dark:via-cyan-300 dark:to-blue-400 dark:bg-clip-text dark:text-transparent"
                >
                  {displayText}
                </span>
                <span
                  className="ml-1 h-6 w-px animate-pulse bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.4)] dark:bg-cyan-300 dark:shadow-[0_0_12px_rgba(34,211,238,0.7)]"
                  aria-hidden="true"
                />
              </div>
            </div>

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:max-w-2xl">
              智能体开发实践者，Dify-on-WeChat 开源项目作者。曾参与 LLMOps 平台核心能力建设，
              也作为 AI 技术顾问推动企业 AI 应用落地，持续分享 AI 编程实践与产品思考。
            </p>
          </div>
        </div>

        <StatsSection variant="embedded" />

        <div className="mt-6 flex w-full flex-col items-center gap-5 text-center md:mt-8 md:items-start md:text-left">
          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <Button
              asChild
              size="lg"
              className="border-0 bg-blue-600 px-6 text-white shadow-[0_0_16px_rgba(59,130,246,0.25)] hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]"
            >
              <Link href="/projects">
                查看项目 <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-blue-300/60 bg-white/80 px-6 text-blue-700 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-500/30 dark:bg-background/80 dark:text-foreground dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] dark:hover:border-blue-400/60 dark:hover:bg-blue-500/10 dark:hover:text-blue-300"
            >
              <Link href="/services">服务</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-blue-300/60 bg-white/80 px-6 text-blue-700 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-500/30 dark:bg-background/80 dark:text-foreground dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] dark:hover:border-blue-400/60 dark:hover:bg-blue-500/10 dark:hover:text-blue-300"
            >
              <Link href="/about">关于我</Link>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            {wechatPersonal ? (
              <a
                href="#contact"
                className={heroIconBoxClass}
                aria-label="前往联系我 — 微信"
              >
                <ContactChannelIcon label="微信" className="h-5 w-5" />
              </a>
            ) : null}
            {HERO_CONTACT_ICON_LABELS.map((label) => (
              <a
                key={label}
                href="#contact"
                className={heroIconBoxClass}
                aria-label={`前往联系我 — ${label}`}
              >
                <ContactChannelIcon label={label} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
