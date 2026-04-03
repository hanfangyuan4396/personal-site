import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, MessagesSquare, Sparkles, Wrench } from "lucide-react";

import { Button } from "@/components/ui/button";

const services = [
  {
    title: "AI 相关付费咨询",
    description:
      "面向个人创作者、独立开发者与企业团队，提供 AI 编程实践、企业 AI 应用设计、个人 AI 提效方案等咨询服务。",
    icon: MessagesSquare,
    bullets: ["AI 编程工具链与工作流设计", "企业 AI 应用选型与落地建议", "个人知识工作流与效率优化"],
  },
  {
    title: "AI 智能体开发",
    description:
      "围绕客服、问答、流程自动化等场景，提供智能体方案设计、能力拆解、工具接入与交付建议。",
    icon: Sparkles,
    bullets: ["Agent / Workflow 架构设计", "知识库、工具调用与调试方案", "从 Demo 到可落地原型的实现建议"],
  },
  {
    title: "小龙虾安装接入个人微信",
    description:
      "协助完成小龙虾的安装、部署与接入，打通个人微信使用链路，降低上手和试错成本。",
    icon: Wrench,
    bullets: ["环境准备与部署安装", "个人微信接入与基础配置", "常见问题排查与使用建议"],
  },
];

const supportOptions = [
  {
    title: "方圆 AI 社区知识星球",
    description: "加入知识星球，获取 AI 工具、实战经验、项目拆解与持续交流。",
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
  "智能体开发",
  "个人微信接入",
  "知识社区",
];

const deliveryHighlights = [
  { label: "服务方向", value: "4 类" },
  { label: "核心关注", value: "落地与提效" },
  { label: "适合对象", value: "个人/企业" },
];

export const metadata = {
  title: "方圆AI分享",
  description: "方圆提供的 AI 咨询、智能体开发、小龙虾接入与知识社区服务",
};

export default function ServicesPage() {
  const knowledgePlanetOption = supportOptions[0];

  return (
    <>
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.12),transparent)]" />
        <div className="pointer-events-none absolute left-1/2 top-16 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between md:gap-14">
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-[0.18em] text-blue-300/80">SERVICES</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">我能提供哪些服务</h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                结合开源项目、LLMOps 平台建设和企业 AI 落地经验，我提供从咨询、方案设计到具体接入的服务，
                重点帮助你把 AI 能力真正用起来，而不只是停留在概念验证。
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {heroSignals.map((signal) => (
                  <span
                    key={signal}
                    className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium tracking-wide text-blue-200"
                  >
                    {signal}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="border-0 bg-blue-600 text-white shadow-[0_0_16px_rgba(59,130,246,0.25)] hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]"
                >
                  <Link href="/#contact">
                    联系咨询 <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-blue-500/30 bg-background/80 hover:border-blue-400/60 hover:bg-blue-500/10 hover:text-blue-300"
                >
                  <Link href="#zsxq-coupon">知识星球</Link>
                </Button>
              </div>
            </div>

            <div className="w-full max-w-md self-stretch">
              <div className="relative h-full min-h-72 overflow-hidden rounded-[28px] border border-blue-500/15 bg-gradient-to-br from-blue-950/35 via-background to-cyan-950/20 p-6">
                <div className="pointer-events-none absolute inset-x-8 top-6 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
                <div className="pointer-events-none absolute -right-10 top-10 h-32 w-32 rounded-full bg-cyan-500/15 blur-3xl" />
                <div className="pointer-events-none absolute -left-6 bottom-10 h-28 w-28 rounded-full bg-blue-500/15 blur-3xl" />

                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <div className="space-y-3">
                      <div className="rounded-2xl border border-blue-500/15 bg-background/40 px-4 py-3 backdrop-blur-sm">
                        <p className="text-sm font-semibold text-foreground">从想法到落地</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          不只聊概念，也会给出可执行的方案、步骤和取舍建议。
                        </p>
                      </div>
                      <div className="rounded-2xl border border-blue-500/15 bg-background/30 px-4 py-3 backdrop-blur-sm">
                        <p className="text-sm font-semibold text-foreground">偏真实业务场景</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          更关注客服、知识库、流程自动化、个人提效这些实际问题。
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {deliveryHighlights.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-blue-500/10 bg-background/35 px-3 py-3 text-center backdrop-blur-sm"
                      >
                        <div
                          className={`font-semibold text-blue-300 ${item.value.length > 8 ? "text-sm whitespace-nowrap" : "text-base"}`}
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
            <p className="mt-2 text-muted-foreground">按咨询、开发与接入三个方向提供支持</p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-blue-500/40 hover:shadow-[0_0_24px_rgba(59,130,246,0.08)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        <section id="zsxq-coupon" className="mt-16 scroll-mt-24 space-y-5">
          <div className="rounded-[28px] border border-blue-500/20 bg-gradient-to-br from-blue-950/30 via-card to-cyan-950/20 p-6 sm:p-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold sm:text-3xl">{knowledgePlanetOption.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {knowledgePlanetOption.description}
                </p>
                <div className="mt-5 rounded-2xl border border-blue-500/15 bg-background/60 p-5">
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
                  className="mt-6 border-blue-500/30 hover:border-blue-400/60 hover:text-blue-300"
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
                <div className="overflow-hidden rounded-[24px] border border-blue-500/20 bg-white p-3 shadow-[0_0_24px_rgba(59,130,246,0.12)]">
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
      </div>
    </>
  );
}
