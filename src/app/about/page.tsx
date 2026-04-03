import Image from "next/image";

import { ContactSection } from "@/components/home/contact-section";
import { skillGroups } from "@/data/home";

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
  wrapper: "border-border bg-card hover:border-blue-500/40 hover:shadow-[0_0_24px_rgba(59,130,246,0.08)]",
  titleColor: "text-blue-400/80",
  tagStyle: "rounded-full border border-cyan-500/40 text-cyan-400 bg-cyan-500/5",
};

export const metadata = {
  title: "关于我 · 方圆",
  description: "方圆的个人简介、教育背景、技能与成就",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      {/* 个人简介 */}
      <section className="mb-16 flex flex-col gap-8 md:flex-row md:gap-14">
        <div className="shrink-0">
          <div className="relative">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 opacity-30 blur-md" />
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-50" />
            <Image
              src="/avatar.jpg"
              alt="方圆头像"
              width={120}
              height={120}
              className="relative rounded-full"
            />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-blue-400 sm:text-4xl">
            韩方圆
          </h1>
          <p className="mt-1 text-muted-foreground">全栈开发 · AI 工程师 · 开源作者 · 内容创作者</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            我是方圆，专注 AI 工程与全栈开发。曾参与 LLMOps 平台从 0 到 1 的 Agent 与 Workflow
            体系建设，主导 AI 智能客服平台的产品设计与研发落地。
            创建并维护开源项目 Dify-on-WeChat（2800+ stars），被 Dify 官网应用案例收录。
            与香港理工大学 CPI Lab 合作发表中科院一区论文，研究自然语言转 SQL 技术。
            同时运营技术内容账号，在 CSDN 积累了 1.5w+ 粉丝，持续分享 AI 编程实践。
          </p>
        </div>
      </section>

      <hr className="mb-16 border-blue-500/10" />

      {/* 教育背景 */}
      <section className="mb-16">
        <h2 className="mb-6 text-xl font-bold">教育背景</h2>
        <div className="flex flex-col gap-4">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-950/20 to-card p-5 transition-all hover:border-blue-500/40"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-sm text-blue-400/70">{edu.school}</p>
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
              className={`rounded-xl border p-5 transition-all ${skillCardStyle.wrapper}`}
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

      {/* 成果与荣誉 */}
      <section className="mb-16">
        <h2 className="mb-6 text-xl font-bold">成果 &amp; 荣誉</h2>
        <ul className="flex flex-col gap-3">
          {honors.map((h, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
              <span className="mt-0.5 shrink-0 text-blue-400">✦</span>
              {h}
            </li>
          ))}
        </ul>
      </section>

      <ContactSection />
    </div>
  );
}
