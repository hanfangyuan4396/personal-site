import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, ExternalLink, Github } from "lucide-react";

import { ContactSection } from "@/components/sections/contact-section";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

const aboutProjectTeasers = featuredProjects.filter((p) => p.showOnHome !== false);

const education = [
  {
    degree: "硕士 · 计算机科学与技术",
    school: "北京科技大学",
    period: "2020.09 – 2023.06",
    note: "计算机与通信工程学院，保研，研究生一等奖学金，北科大优秀毕业生",
  },
  {
    degree: "本科 · 通信工程",
    school: "北京科技大学",
    period: "2016.09 – 2020.06",
    note: "计算机与通信工程学院，人民一等奖学金",
  },
];

const honors = [
  "合作发表两篇中科院一区论文（影响因子 14.2），获一篇专利与软著",
  "AI 编程比赛一等奖（7/500），获奖奖金 12,000 元",
  "研究生一等奖学金、人民一等奖学金、互联网+创新创业优秀奖、三好学生",
  "北科大优秀毕业生、HelloCode 编程比赛一等奖",
  "CSDN 博客 1.5w 粉丝，200k 阅读；GitHub 3.2k Stars",
];

const skillCardStyle = {
  wrapper:
    "border-[oklch(0.84_0.018_105)] bg-[oklch(0.995_0.003_95/0.76)] shadow-[0_1px_0_rgba(255,255,255,0.72)] backdrop-blur-sm hover:border-[oklch(0.58_0.09_145/0.55)] hover:shadow-[0_16px_34px_rgba(45,60,43,0.09)] dark:border-white/10 dark:bg-white/[0.045] dark:shadow-none dark:hover:border-[oklch(0.74_0.12_155/0.45)] dark:hover:shadow-[0_18px_38px_rgba(0,0,0,0.22)]",
  titleColor: "text-foreground",
  tagStyle:
    "rounded-full border border-[oklch(0.68_0.09_155/0.36)] bg-[oklch(0.94_0.035_150)] text-[oklch(0.37_0.1_155)] dark:border-[oklch(0.74_0.12_155/0.28)] dark:bg-[oklch(0.74_0.12_155/0.08)] dark:text-[oklch(0.78_0.12_155)]",
};

const aboutCardClassName =
  "rounded-lg border border-[oklch(0.84_0.018_105)] bg-[oklch(0.995_0.003_95/0.78)] shadow-[0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-sm transition-all hover:border-[oklch(0.58_0.09_145/0.55)] hover:shadow-[0_16px_34px_rgba(45,60,43,0.1)] dark:border-white/10 dark:bg-white/[0.045] dark:shadow-none dark:hover:border-[oklch(0.74_0.12_155/0.45)] dark:hover:shadow-[0_18px_38px_rgba(0,0,0,0.24)]";

const projectIconLinkClassName =
  "text-muted-foreground transition-colors hover:text-[oklch(0.38_0.11_155)] dark:hover:text-[oklch(0.78_0.12_155)]";

export const metadata = {
  title: "方圆AI",
  description: "方圆的个人简介、教育背景、技能与成就",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      {/* 个人简介 */}
      <section className="mb-16 flex flex-col gap-8 md:flex-row md:gap-14">
        <div className="shrink-0">
          {/* w-fit + isolate：光晕不撑开整行，视觉上更聚拢在头像周围 */}
          <div className="relative isolate w-fit">
            <div className="absolute -inset-2 rounded-full bg-[oklch(0.47_0.12_155/0.18)] blur-md dark:bg-[oklch(0.74_0.12_155/0.15)]" />
            <div className="absolute -inset-0.5 rounded-full bg-[oklch(0.47_0.12_155)] dark:bg-[oklch(0.74_0.12_155)]" />
            <Image
              src="/avatar.jpg"
              alt="方圆头像"
              width={120}
              height={120}
              className="relative rounded-full border-2 border-[oklch(0.995_0.003_95)] shadow-[0_14px_34px_rgba(38,55,43,0.16)] dark:border-[oklch(0.2_0.014_110)] dark:shadow-[0_18px_38px_rgba(0,0,0,0.32)]"
            />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-[oklch(0.31_0.08_145)] sm:text-4xl dark:text-[oklch(0.8_0.11_155)]">
            韩方圆
          </h1>
          <p className="mt-1 text-muted-foreground">全栈开发 · AI 工程师 · 开源作者 · 内容创作者</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            我是方圆，专注 AI 工程与全栈开发。曾参与 LLMOps 平台从 0 到 1 的 Agent 与 Workflow
            体系建设，主导 AI 智能客服平台的产品设计与研发落地。
            创建并维护开源项目 Dify-on-WeChat（2800+ stars），被 Dify 官方文档用例收录。
            与香港理工大学 CPI Lab 合作发表中科院一区论文，研究自然语言转 SQL 技术。
            同时运营技术内容账号，在 CSDN 积累了 1.5w+ 粉丝，持续分享 AI 编程实践。
          </p>
        </div>
      </section>

      <hr className="mb-16 border-[oklch(0.72_0.045_100/0.14)] dark:border-white/[0.06]" />

      {/* 教育背景 */}
      <section className="mb-16">
        <h2 className="mb-6 text-xl font-bold">教育背景</h2>
        <div className="flex flex-col gap-4">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className={`${aboutCardClassName} p-5`}
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-sm text-[oklch(0.45_0.1_155)] dark:text-[oklch(0.76_0.11_155)]">{edu.school}</p>
                </div>
                <span className="text-xs text-muted-foreground sm:shrink-0">{edu.period}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{edu.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 技能专长 */}
      <section className="mb-16">
        <h2 className="mb-6 text-xl font-bold">技能专长</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className={`rounded-lg border p-5 transition-all ${skillCardStyle.wrapper}`}
            >
              <h3 className={`mb-3 font-semibold ${skillCardStyle.titleColor}`}>{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`rounded-md px-2.5 py-1 text-xs font-medium ${skillCardStyle.tagStyle}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 代表项目 */}
      <section className="mb-16" id="projects-preview">
        <h2 className="mb-2 text-xl font-bold">代表项目</h2>
        <p className="mb-6 text-sm text-muted-foreground">
          代表性项目速览，涵盖开源、平台工程与企业场景等方向。
        </p>
        <ul className="mb-8 flex flex-col gap-4">
          {aboutProjectTeasers.map((p) => (
            <li
              key={p.id}
              className={`${aboutCardClassName} px-5 py-4`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-foreground">{p.name}</h3>
                {(p.links.github || p.links.demo || p.links.paper) && (
                  <div className="flex shrink-0 items-center gap-2">
                    {p.links.github && (
                      <Link
                        href={p.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={projectIconLinkClassName}
                        aria-label={`${p.name} · GitHub`}
                      >
                        <Github className="h-4 w-4" />
                      </Link>
                    )}
                    {p.links.demo && (
                      <Link
                        href={p.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={projectIconLinkClassName}
                        aria-label={`${p.name} · 官方文档教程`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    )}
                    {p.links.paper && (
                      <Link
                        href={p.links.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={projectIconLinkClassName}
                        aria-label={`${p.name} · 论文（ScienceDirect）`}
                      >
                        <BookOpen className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                )}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              {p.highlights.length > 0 ? (
                <p className="mt-2 text-xs text-[oklch(0.45_0.1_155)] dark:text-[oklch(0.76_0.11_155)]">
                  {p.highlights.join(" · ")}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
        <Button
          asChild
          size="lg"
          className="border-0 bg-[oklch(0.42_0.105_155)] px-6 text-white shadow-[0_14px_28px_oklch(0.42_0.105_155/0.22)] hover:bg-[oklch(0.47_0.115_155)] hover:shadow-[0_16px_32px_oklch(0.42_0.105_155/0.28)] dark:bg-[oklch(0.72_0.12_155)] dark:text-[oklch(0.15_0.012_110)] dark:hover:bg-[oklch(0.78_0.12_155)]"
        >
          <Link href="/projects">
            查看项目经历 <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
          </Link>
        </Button>
      </section>

      {/* 成果与荣誉 */}
      <section className="mb-16">
        <h2 className="mb-6 text-xl font-bold">成果 &amp; 荣誉</h2>
        <ul className="flex flex-col gap-3">
          {honors.map((h, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
              <span className="mt-0.5 shrink-0 text-[oklch(0.72_0.14_78)] dark:text-[oklch(0.82_0.13_78)]">✦</span>
              {h}
            </li>
          ))}
        </ul>
      </section>

      <ContactSection />
    </div>
  );
}
