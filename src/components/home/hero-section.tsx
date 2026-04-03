"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContactChannelIcon } from "@/components/shared/contact-channel-icons";
import { StatsSection } from "@/components/home/stats-section";
import { qrCodes } from "@/data/home";

/** Hero 区仅展示的联系入口（其余在页面底部「联系我」） */
const HERO_CONTACT_ICON_LABELS = ["GitHub", "CSDN 博客"] as const;

const roles = ["Web 全栈开发", "AI 工程师", "Dify-on-WeChat 开源项目作者", "AI 科技博主"];
const typingSpeed = 110;
const deletingSpeed = 55;
const holdDelay = 1200;

const heroIconBoxClass =
  "group flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-card/80 text-muted-foreground transition-colors hover:border-blue-500/40 hover:text-blue-400";

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
      {/* 顶部径向蓝色光晕背景 */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.12),transparent)]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:gap-14 md:text-left">
          {/* 头像 */}
          <div className="shrink-0">
            <div className="relative">
              {/* 光晕光圈 */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 opacity-30 blur-md" />
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-50" />
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
              <h1 className="mt-1 text-4xl font-bold tracking-tight text-blue-400 sm:text-5xl">
                韩方圆
              </h1>
            </div>

            <div className="relative min-h-12 w-full max-w-md md:max-w-2xl">
              <div className="pointer-events-none absolute inset-0 rounded-2xl border border-blue-500/15 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-transparent blur-xl" />
              <div className="relative flex items-center justify-center rounded-2xl border border-blue-500/20 bg-card/60 px-5 py-3 backdrop-blur-sm md:justify-start">
                <span className="mr-3 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.85)]" />
                <span
                  data-testid="hero-role-text"
                  className="bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 bg-clip-text text-xl font-semibold tracking-[0.12em] text-transparent sm:text-2xl"
                >
                  {displayText}
                </span>
                <span
                  className="ml-1 h-6 w-px bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.7)] animate-pulse"
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
              className="border-blue-500/30 bg-background/80 px-6 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:border-blue-400/60 hover:bg-blue-500/10 hover:text-blue-300"
            >
              <Link href="/services">服务</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-blue-500/30 bg-background/80 px-6 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:border-blue-400/60 hover:bg-blue-500/10 hover:text-blue-300"
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
