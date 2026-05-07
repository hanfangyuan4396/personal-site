import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, MessagesSquare, Sparkles, Wrench } from "lucide-react";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/seo";

const services = [
  {
    title: "AI 咨询与 AI提效方案",
    description: "适合想把 AI 真正用到工作流、业务流程或个人项目中的个人和团队。",
    icon: MessagesSquare,
    bullets: [
      "适合先梳理方向、优先级和落地路径的人或团队",
      "提供场景判断、工具选型、流程建议和执行思路",
      "你会更清楚先做什么、哪些值得做、如何开始推进",
    ],
  },
  {
    title: "AI 智能体开发",
    description: "适合要做客服、问答、知识库、流程自动化等 AI 应用场景的团队或项目。",
    icon: Sparkles,
    bullets: [
      "适合已经有目标场景，准备推进原型或方案设计的项目",
      "提供 Agent / Workflow 方案、关键能力拆解和技术路径建议",
      "你会得到更清晰的实现方向，而不是继续零散尝试",
    ],
  },
  {
    title: "微信接入与部署支持",
    description: "适合希望把 AI 接入个人微信，并尽快完成部署、配置和可用验证的用户。",
    icon: Wrench,
    bullets: [
      "适合卡在安装、部署、配置或调试阶段的用户",
      "协助完成环境准备、个人微信接入和常见问题排查",
      "你可以更快打通从安装到可用的完整链路",
    ],
  },
];

const supportOptions = [
  {
    title: "方圆 AI 社区知识星球",
    description: "加入知识星球，获取 AI 工具、实战经验、项目拆解与持续交流。",
    intro:
      "专注 AI 干货分享与应用实践，帮你减少信息噪音、降低试错成本，更快把 AI 真正用到实际工作中。",
    highlights: [
      "筛选值得关注的 AI 工具、信息和方向，少走弯路",
      "分享能直接上手的 AI 工作流、案例和落地经验",
      "星球会员专属微信微信群，持续交流与答疑",
    ],
    href: "https://t.zsxq.com/gqdRp",
    action: "加入知识星球",
    qrCode: {
      src: "/zsxq.jpg",
      alt: "知识星球优惠券二维码",
      title: "扫码领券",
      description: "扫码领取知识星球优惠券，再加入方圆 AI 社区知识星球。",
    },
  },
];

const heroSignals = [
  "AI 咨询",
  "AI 智能体开发",
  "企业 AI 落地",
  "AI提效",
];

const deliveryHighlights = [
  { label: "服务方向", value: "3 类" },
  { label: "核心关注", value: "落地与提效" },
  { label: "适合对象", value: "个人/企业" },
];

const heroNotes = [
  {
    title: "从想法到落地",
    description: "不只聊概念，也会给出可执行方案和关键取舍。",
  },
  {
    title: "偏真实业务场景",
    description: "更关注客服、知识库、流程自动化和 AI提效。",
  },
  {
    title: "先判断再动手",
    description: "先明确哪些值得做，再决定咨询、开发还是接入。",
  },
];

const fitCustomers = [
  {
    title: "个人创作者与独立开发者",
    description: "想把 AI 用到内容生产、工作流或个人项目，但缺少实战路径。",
  },
  {
    title: "中小团队与业务负责人",
    description: "想把 AI 用在客服、知识库、流程自动化和提效场景，但不知道从哪开始。",
  },
  {
    title: "已经开始尝试 AI 的执行者",
    description: "试过一些工具和方案，但还没形成稳定流程，想减少试错、尽快落地。",
  },
];

const problemScenarios = [
  "想做 AI 咨询或落地规划，但不知道哪些方向值得投入",
  "想做 AI 智能体或工作流，却缺少完整方案和落地路径",
  "想把 AI 用到客服、知识库或流程自动化中，但不知道如何开始",
  "想把微信接入 AI，但不清楚部署、配置和调试怎么做",
  "想用 AI提效，但不想在工具选择和流程试错上反复消耗时间",
];

const trustSignals = [
  {
    title: "开源项目经验",
    description: "开源项目 dify-on-wechat 获得 2700+ stars，有真实项目实践基础。",
  },
  {
    title: "企业 AI 落地经验",
    description: "参与过 LLMOps 平台核心能力建设，也做过 AI 应用设计与落地推进。",
  },
  {
    title: "持续内容输出",
    description: "长期输出 AI 与技术文章，累计阅读量 20w+，内容和实践持续沉淀。",
  },
  {
    title: "结果导向",
    description: "更关注能不能真正用起来、能否提效，而不是停留在概念和演示层面。",
  },
];

const deliverables = [
  {
    title: "更清晰的落地方向",
    description: "明确先做什么、哪些值得做、哪些可以先不做，减少方向上的反复试错。",
  },
  {
    title: "可执行的方案建议",
    description: "不是停留在概念层面，而是给出更贴近实际场景的方案、路径和关键取舍。",
  },
  {
    title: "更短的试错周期",
    description: "通过经验判断、工具筛选和问题排查，帮助你更快进入可推进状态。",
  },
];

const faqs = [
  {
    question: "哪些人适合先找我做 AI 咨询？",
    answer:
      "如果你已经明确想把 AI 用到工作、业务或项目里，但还不清楚从哪里开始、做什么最值、怎么落地，先从 AI 咨询切入会更合适。",
  },
  {
    question: "你提供的是只讲思路，还是会给可执行建议？",
    answer:
      "重点不是泛泛讲趋势，而是结合你的目标和场景，给出更具体的方向判断、方案建议、工具选择和执行路径。",
  },
  {
    question: "AI 智能体开发更适合什么场景？",
    answer:
      "更适合客服问答、知识库检索、流程自动化、内容处理等需要稳定流程和明确目标的场景。",
  },
  {
    question: "微信接入支持主要能帮到什么？",
    answer:
      "如果你想把 AI 接入个人微信，但卡在安装、部署、配置或调试阶段，这部分服务会帮助你更快打通从接入到可用的完整链路。",
  },
  {
    question: "如果我还没准备好直接咨询，可以先从哪里开始？",
    answer:
      "可以先加入知识星球，先了解 AI 工具、实战案例和落地经验，再根据自己的情况决定是否进一步咨询或合作。",
  },
];

const serviceCardClassName =
  "rounded-lg border border-[oklch(0.84_0.018_105)] bg-[oklch(0.995_0.003_95/0.78)] p-6 shadow-[0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-sm transition-all hover:border-[oklch(0.58_0.09_145/0.55)] hover:shadow-[0_16px_34px_rgba(45,60,43,0.1)] dark:border-white/10 dark:bg-white/[0.045] dark:shadow-none dark:hover:border-[oklch(0.74_0.12_155/0.45)] dark:hover:shadow-[0_18px_38px_rgba(0,0,0,0.24)]";

const staticCardClassName =
  "rounded-lg border border-[oklch(0.84_0.018_105)] bg-[oklch(0.995_0.003_95/0.78)] p-6 shadow-[0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.045] dark:shadow-none";

const iconBoxClassName =
  "flex h-11 w-11 items-center justify-center rounded-lg border border-[oklch(0.68_0.09_155/0.34)] bg-[oklch(0.94_0.035_150)] text-[oklch(0.38_0.11_155)] dark:border-[oklch(0.74_0.12_155/0.28)] dark:bg-[oklch(0.74_0.12_155/0.08)] dark:text-[oklch(0.78_0.12_155)]";

const pillClassName =
  "rounded-full border border-[oklch(0.66_0.09_155/0.36)] bg-[oklch(0.94_0.035_150)] px-3 py-1 text-xs font-medium tracking-wide text-[oklch(0.36_0.11_155)] dark:border-[oklch(0.74_0.12_155/0.28)] dark:bg-[oklch(0.74_0.12_155/0.08)] dark:text-[oklch(0.78_0.12_155)]";

const bulletDotClassName =
  "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[oklch(0.72_0.14_78)] dark:bg-[oklch(0.82_0.13_78)]";

const primaryButtonClassName =
  "border-0 bg-[oklch(0.42_0.105_155)] text-white shadow-[0_14px_28px_oklch(0.42_0.105_155/0.22)] hover:bg-[oklch(0.47_0.115_155)] hover:shadow-[0_16px_32px_oklch(0.42_0.105_155/0.28)] dark:bg-[oklch(0.72_0.12_155)] dark:text-[oklch(0.15_0.012_110)] dark:hover:bg-[oklch(0.78_0.12_155)]";

const outlineButtonClassName =
  "border-[oklch(0.66_0.09_155/0.45)] bg-[oklch(0.995_0.003_95/0.72)] text-[oklch(0.36_0.11_155)] hover:border-[oklch(0.52_0.11_155)] hover:bg-[oklch(0.94_0.035_150)] hover:text-[oklch(0.3_0.1_155)] dark:border-[oklch(0.74_0.12_155/0.34)] dark:bg-transparent dark:text-[oklch(0.78_0.12_155)] dark:hover:border-[oklch(0.78_0.12_155/0.58)] dark:hover:bg-[oklch(0.74_0.12_155/0.1)] dark:hover:text-[oklch(0.86_0.11_155)]";

export const metadata: Metadata = createMetadata({
  title: "AI 咨询、AI 智能体开发与企业 AI 落地服务",
  description:
    "提供 AI 咨询、AI 智能体开发、企业 AI 落地、AI提效与微信接入支持，帮助个人和团队更快把 AI 真正用到实际工作中。",
  path: "/services",
  keywords: [
    "AI 咨询",
    "AI 智能体开发",
    "企业 AI 落地",
    "AI提效",
    "AI 技术顾问",
    "AI Agent 开发",
    "微信接入 AI",
  ],
});

export default function ServicesPage() {
  const knowledgePlanetOption = supportOptions[0];
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <section className="relative isolate overflow-hidden py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,oklch(0.985_0.006_95),oklch(0.955_0.018_112)_48%,oklch(0.985_0.004_85))] dark:bg-[linear-gradient(135deg,oklch(0.145_0.012_110),oklch(0.18_0.018_125)_52%,oklch(0.13_0.01_95))]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.3] [background-image:radial-gradient(oklch(0.42_0.045_115/0.22)_0.65px,transparent_0.65px)] [background-size:18px_18px] dark:opacity-[0.16] dark:[background-image:radial-gradient(oklch(0.88_0.025_110/0.26)_0.65px,transparent_0.65px)]" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between md:gap-14">
            <div className="max-w-2xl">
              <p className="text-sm font-medium tracking-[0.18em] text-[oklch(0.45_0.1_155)] dark:text-[oklch(0.76_0.11_155)]">
                SERVICES
              </p>
              <h1 className="mt-3 max-w-[12ch] text-4xl font-bold tracking-tight sm:text-5xl lg:text-[4.25rem] lg:leading-[1.02]">
                AI 咨询、AI 智能体开发与企业 AI 落地服务
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                基于开源项目、LLMOps 平台建设和企业 AI 落地经验，我提供 AI 咨询、智能体方案设计与微信接入支持，
                帮助个人和团队少走弯路，更快把 AI 用到实际工作中。
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {heroSignals.map((signal) => (
                  <span
                    key={signal}
                    className={pillClassName}
                  >
                    {signal}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className={primaryButtonClassName}
                >
                  <Link href="/home#contact">
                    联系咨询 <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className={outlineButtonClassName}
                >
                  <Link href="#zsxq-coupon">知识星球</Link>
                </Button>
              </div>
            </div>

            <div className="w-full max-w-md self-start">
              <div className="relative overflow-hidden rounded-lg border border-[oklch(0.84_0.018_105)] bg-[oklch(0.995_0.003_95/0.78)] p-6 shadow-[0_16px_34px_rgba(45,60,43,0.1)] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.045] dark:shadow-[0_18px_38px_rgba(0,0,0,0.24)]">
                <div className="pointer-events-none absolute inset-x-8 top-6 h-px bg-gradient-to-r from-transparent via-[oklch(0.72_0.14_78/0.42)] to-transparent" />

                <div className="relative">
                  <div className="space-y-3">
                    {heroNotes.map((note) => (
                      <div
                        key={note.title}
                        className="rounded-lg border border-[oklch(0.82_0.016_105)] bg-white/70 px-4 py-3 backdrop-blur-sm dark:border-white/10 dark:bg-background/40"
                      >
                        <p className="text-sm font-semibold text-foreground">{note.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{note.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {deliveryHighlights.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-lg border border-[oklch(0.82_0.016_105)] bg-white/60 px-3 py-3 text-center backdrop-blur-sm dark:border-white/10 dark:bg-background/35"
                      >
                        <div
                          className={`font-semibold text-[oklch(0.36_0.1_155)] dark:text-[oklch(0.78_0.12_155)] ${item.value.length > 8 ? "text-sm whitespace-nowrap" : "text-base"}`}
                        >
                          {item.value}
                        </div>
                        <div className="mt-1 text-[11px] text-muted-foreground">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 sm:pb-24">
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold sm:text-3xl">服务内容</h2>
            <p className="mt-2 text-muted-foreground">
              按咨询、开发与接入三个方向提供支持，重点围绕真实问题、可执行方案和落地结果。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className={serviceCardClassName}
                >
                  <div className={iconBoxClassName}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className={bulletDotClassName} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold sm:text-3xl">你将获得什么</h2>
            <p className="mt-2 text-muted-foreground">
              无论你选择咨询、智能体开发还是接入支持，核心目标都是让你更快进入可执行状态。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {deliverables.map((item) => (
              <div
                key={item.title}
                className={staticCardClassName}
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold sm:text-3xl">为什么找我</h2>
            <p className="mt-2 text-muted-foreground">
              不是泛泛聊趋势，而是基于真实项目、开源实践和落地经验提供支持。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {trustSignals.map((signal) => (
              <div
                key={signal.title}
                className={staticCardClassName}
              >
                <h3 className="text-lg font-semibold">{signal.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {signal.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold sm:text-3xl">适合谁</h2>
            <p className="mt-2 text-muted-foreground">
              如果你想把 AI 真正用到工作或业务中，而不只是停留在尝试阶段，这部分服务更适合你。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {fitCustomers.map((customer) => (
              <div
                key={customer.title}
                className={staticCardClassName}
              >
                <h3 className="text-lg font-semibold">{customer.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {customer.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold sm:text-3xl">能解决什么问题</h2>
            <p className="mt-2 text-muted-foreground">
              先从真实问题出发，再判断该做咨询、智能体开发还是微信接入。
            </p>
          </div>

          <div className="rounded-lg border border-[oklch(0.84_0.018_105)] bg-[oklch(0.995_0.003_95/0.78)] p-6 shadow-[0_16px_34px_rgba(45,60,43,0.08)] backdrop-blur-sm sm:p-8 dark:border-white/10 dark:bg-white/[0.045] dark:shadow-none">
            <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {problemScenarios.map((scenario) => (
                <li
                  key={scenario}
                  className="rounded-lg border border-[oklch(0.82_0.016_105)] bg-white/70 px-4 py-4 text-sm leading-relaxed text-muted-foreground dark:border-white/10 dark:bg-background/50"
                >
                  <span className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[oklch(0.72_0.14_78)] dark:bg-[oklch(0.82_0.13_78)]" />
                    <span>{scenario}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="zsxq-coupon" className="mt-16 scroll-mt-24 space-y-5">
          <div className="rounded-lg border border-[oklch(0.84_0.018_105)] bg-[oklch(0.995_0.003_95/0.78)] p-6 shadow-[0_16px_34px_rgba(45,60,43,0.1)] backdrop-blur-sm sm:p-8 dark:border-white/10 dark:bg-white/[0.045] dark:shadow-none">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold sm:text-3xl">{knowledgePlanetOption.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {knowledgePlanetOption.description}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {knowledgePlanetOption.intro}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {knowledgePlanetOption.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className={bulletDotClassName} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 rounded-lg border border-[oklch(0.82_0.016_105)] bg-white/75 p-5 dark:border-white/10 dark:bg-background/60">
                  <p className="text-base font-semibold text-foreground">
                    {knowledgePlanetOption.qrCode?.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {knowledgePlanetOption.qrCode?.description}
                  </p>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className={`mt-6 ${outlineButtonClassName}`}
                >
                  <Link
                    href={knowledgePlanetOption.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {knowledgePlanetOption.action}
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="mx-auto w-full max-w-[280px] shrink-0">
                <div className="overflow-hidden rounded-lg border border-[oklch(0.8_0.022_105)] bg-white p-3 shadow-[0_10px_22px_rgba(45,60,43,0.1)] dark:border-white/10 dark:shadow-none">
                  <Image
                    src={knowledgePlanetOption.qrCode!.src}
                    alt={knowledgePlanetOption.qrCode!.alt}
                    width={280}
                    height={280}
                    className="h-full w-full rounded-[18px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold sm:text-3xl">常见问题</h2>
            <p className="mt-2 text-muted-foreground">
              这些问题通常会直接影响是否继续咨询、加入知识星球或启动 AI 项目。
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className={staticCardClassName}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="rounded-lg border border-[oklch(0.84_0.018_105)] bg-[oklch(0.995_0.003_95/0.78)] px-6 py-10 shadow-[0_16px_34px_rgba(45,60,43,0.1)] backdrop-blur-sm sm:px-8 sm:py-12 dark:border-white/10 dark:bg-white/[0.045] dark:shadow-none">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                如果你希望把 AI 真正用到实际工作里，可以从这里开始
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                无论你是先做 AI 咨询、推进智能体开发，还是先进入知识星球了解方向，都可以先迈出第一步。
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className={primaryButtonClassName}
              >
                <Link href="/home#contact">
                  联系咨询 <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className={outlineButtonClassName}
              >
                <Link href="#zsxq-coupon">加入知识星球</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
