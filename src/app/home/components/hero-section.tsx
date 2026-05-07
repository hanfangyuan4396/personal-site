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
  "group flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[oklch(0.84_0.018_105)] bg-white/75 text-muted-foreground shadow-[0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-sm transition-colors hover:border-[oklch(0.55_0.11_155)] hover:bg-[oklch(0.94_0.035_150)] hover:text-[oklch(0.38_0.11_155)] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none dark:hover:border-[oklch(0.72_0.11_155)] dark:hover:bg-[oklch(0.22_0.035_145)] dark:hover:text-[oklch(0.78_0.12_155)]";

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
    <section className="relative isolate overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,oklch(0.985_0.006_95),oklch(0.955_0.018_112)_48%,oklch(0.985_0.004_85))] dark:bg-[linear-gradient(135deg,oklch(0.145_0.012_110),oklch(0.18_0.018_125)_52%,oklch(0.13_0.01_95))]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.34] [background-image:radial-gradient(oklch(0.42_0.045_115/0.24)_0.65px,transparent_0.65px)] [background-size:18px_18px] dark:opacity-[0.18] dark:[background-image:radial-gradient(oklch(0.88_0.025_110/0.28)_0.65px,transparent_0.65px)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.62_0.12_78/0.45)] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.62_0.06_130/0.25)] to-transparent dark:via-white/10" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:gap-14 md:text-left">
          <div className="shrink-0">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-[oklch(0.47_0.12_155/0.18)] blur-md dark:bg-[oklch(0.74_0.12_155/0.15)]" />
              <div className="absolute -inset-0.5 rounded-full bg-[oklch(0.47_0.12_155)] dark:bg-[oklch(0.74_0.12_155)]" />
              <Image
                src="/avatar.jpg"
                alt="方圆头像"
                width={140}
                height={140}
                className="relative rounded-full border-2 border-[oklch(0.995_0.003_95)] shadow-[0_14px_34px_rgba(38,55,43,0.16)] dark:border-[oklch(0.2_0.014_110)] dark:shadow-[0_18px_38px_rgba(0,0,0,0.32)]"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-5 md:items-start">
            <div>
              <p className="text-sm font-medium tracking-wide text-muted-foreground">
                你好，我是
              </p>
              <h1 className="mt-1 text-4xl font-bold tracking-normal text-[oklch(0.31_0.08_145)] sm:text-5xl dark:text-[oklch(0.8_0.11_155)]">
                韩方圆
              </h1>
            </div>

            <div className="relative min-h-12 w-full max-w-md md:max-w-2xl">
              <div className="pointer-events-none absolute inset-x-3 bottom-0 h-3 rounded-full bg-[oklch(0.48_0.09_140/0.16)] blur-lg dark:bg-[oklch(0.78_0.12_155/0.12)]" />
              <div className="relative flex items-center justify-center rounded-lg border border-[oklch(0.82_0.018_105)] bg-[oklch(0.995_0.003_95/0.82)] px-5 py-3 shadow-[0_12px_28px_rgba(52,64,49,0.09)] backdrop-blur-sm md:justify-start dark:border-white/10 dark:bg-white/[0.045] dark:shadow-[0_16px_36px_rgba(0,0,0,0.24)]">
                <span className="mr-3 h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.14_78)] shadow-[0_0_0_4px_oklch(0.7_0.14_78/0.16)] dark:bg-[oklch(0.82_0.13_78)] dark:shadow-[0_0_0_4px_oklch(0.82_0.13_78/0.14)]" />
                <span
                  data-testid="hero-role-text"
                  className="text-xl font-semibold tracking-normal text-[oklch(0.28_0.05_125)] sm:text-2xl dark:text-[oklch(0.88_0.035_110)]"
                >
                  {displayText}
                </span>
                <span
                  className="ml-1 h-6 w-px animate-pulse bg-[oklch(0.47_0.11_155)] shadow-[0_0_10px_oklch(0.47_0.11_155/0.35)] dark:bg-[oklch(0.78_0.12_155)] dark:shadow-[0_0_12px_oklch(0.78_0.12_155/0.32)]"
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
              className="border-0 bg-[oklch(0.42_0.105_155)] px-6 text-white shadow-[0_14px_28px_oklch(0.42_0.105_155/0.22)] hover:bg-[oklch(0.47_0.115_155)] hover:shadow-[0_16px_32px_oklch(0.42_0.105_155/0.28)] dark:bg-[oklch(0.72_0.12_155)] dark:text-[oklch(0.15_0.012_110)] dark:hover:bg-[oklch(0.78_0.12_155)]"
            >
              <Link href="/projects">
                查看项目 <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-[oklch(0.8_0.022_105)] bg-white/70 px-6 text-[oklch(0.29_0.03_120)] hover:border-[oklch(0.55_0.11_155)] hover:bg-[oklch(0.94_0.035_150)] hover:text-[oklch(0.36_0.11_155)] dark:border-white/12 dark:bg-white/[0.035] dark:text-foreground dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] dark:hover:border-[oklch(0.72_0.11_155)] dark:hover:bg-[oklch(0.22_0.035_145)] dark:hover:text-[oklch(0.8_0.11_155)]"
            >
              <Link href="/services">服务</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-[oklch(0.8_0.022_105)] bg-white/70 px-6 text-[oklch(0.29_0.03_120)] hover:border-[oklch(0.55_0.11_155)] hover:bg-[oklch(0.94_0.035_150)] hover:text-[oklch(0.36_0.11_155)] dark:border-white/12 dark:bg-white/[0.035] dark:text-foreground dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] dark:hover:border-[oklch(0.72_0.11_155)] dark:hover:bg-[oklch(0.22_0.035_145)] dark:hover:text-[oklch(0.8_0.11_155)]"
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
