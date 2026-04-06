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
    <section id="services" className="border-t border-blue-500/10 py-16 sm:py-24">
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
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-blue-500/40 hover:shadow-[0_0_24px_rgba(59,130,246,0.08)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-300">
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
            className="inline-flex items-center gap-1.5 rounded-full border border-blue-300/60 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700 transition-all hover:border-blue-400 hover:bg-blue-100 hover:text-blue-800 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300 dark:hover:border-blue-400/60 dark:hover:bg-blue-500/15 dark:hover:text-blue-200"
          >
            了解详细服务内容 <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
