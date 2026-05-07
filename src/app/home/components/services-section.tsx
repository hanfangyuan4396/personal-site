import Link from "next/link";
import { ArrowRight, MessagesSquare, Sparkles, Wrench } from "lucide-react";

const services = [
  {
    icon: MessagesSquare,
    title: "AI 相关付费咨询",
    description: "面向个人创作者与企业团队，提供 AI 编程实践、应用设计、个人提效等咨询服务。",
  },
  {
    icon: Sparkles,
    title: "AI 智能体开发",
    description: "围绕客服、问答、流程自动化等场景，提供智能体方案设计与原型交付。",
  },
  {
    icon: Wrench,
    title: "小龙虾安装接入",
    description: "协助完成小龙虾的安装、部署与个人微信接入，降低上手和试错成本。",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="border-t border-[oklch(0.72_0.045_100/0.14)] py-16 sm:py-24 dark:border-white/[0.06]"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-bold sm:text-3xl">我能提供的服务</h2>
          <p className="mt-2 text-muted-foreground">AI 咨询、智能体开发与工具接入</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="rounded-lg border border-[oklch(0.84_0.018_105)] bg-[oklch(0.995_0.003_95/0.78)] p-6 shadow-[0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-sm transition-all hover:border-[oklch(0.58_0.09_145/0.55)] hover:shadow-[0_16px_34px_rgba(45,60,43,0.1)] dark:border-white/10 dark:bg-white/[0.045] dark:shadow-none dark:hover:border-[oklch(0.74_0.12_155/0.45)] dark:hover:shadow-[0_18px_38px_rgba(0,0,0,0.24)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[oklch(0.68_0.09_155/0.34)] bg-[oklch(0.94_0.035_150)] text-[oklch(0.38_0.11_155)] dark:border-[oklch(0.74_0.12_155/0.28)] dark:bg-[oklch(0.74_0.12_155/0.08)] dark:text-[oklch(0.78_0.12_155)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 rounded-full border border-[oklch(0.66_0.09_155/0.45)] bg-[oklch(0.94_0.035_150)] px-5 py-2 text-sm font-medium text-[oklch(0.36_0.11_155)] transition-all hover:border-[oklch(0.52_0.11_155)] hover:bg-[oklch(0.9_0.05_150)] hover:text-[oklch(0.3_0.1_155)] dark:border-[oklch(0.74_0.12_155/0.34)] dark:bg-[oklch(0.74_0.12_155/0.1)] dark:text-[oklch(0.78_0.12_155)] dark:hover:border-[oklch(0.78_0.12_155/0.58)] dark:hover:bg-[oklch(0.74_0.12_155/0.16)] dark:hover:text-[oklch(0.86_0.11_155)]"
          >
            了解详细服务内容 <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
