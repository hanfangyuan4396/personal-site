export type HomeStatIcon = "star" | "trend" | "boxes" | "paper";

export const stats = [
  { value: "3.2k+", label: "GitHub Stars", icon: "star" },
  { value: "1.5w+", label: "CSDN 粉丝", icon: "trend" },
  { value: "1w+", label: "开源下载量", icon: "boxes" },
  { value: "2", label: "中科院一区论文", icon: "paper" },
] satisfies Array<{
  value: string;
  label: string;
  icon: HomeStatIcon;
}>;

export const skillGroups = [
  {
    title: "AI 工程",
    items: ["Agent 开发", "Workflow 引擎", "RAG / 知识库", "LLMOps", "Prompt 优化", "NL2SQL"],
  },
  {
    title: "后端开发",
    items: ["Python", "Go", "MySQL", "Flask", "SQLAlchemy", "Prisma"],
  },
  {
    title: "前端开发",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Vue"],
  },
  {
    title: "工具链",
    items: ["Docker", "GitHub Actions", "Git", "Cursor", "Claude Code", "Nginx"],
  },
];

export const timelineItems = [
  {
    date: "2016 – 2020",
    title: "本科 · 通信工程",
    description: "北京科技大学，通信工程专业，人民一等奖学金",
    type: "education" as const,
  },
  {
    date: "2020 – 2023",
    title: "硕士 · 计算机科学与技术",
    description: "北京科技大学，计算机科学与技术（保研），研究生一等奖学金，北科大优秀毕业生",
    type: "education" as const,
  },
  {
    date: "2022.06 – 2022.09",
    title: "前端开发实习",
    description: "测试工具链部门，参与内部系统前端开发（Vue），完成十余个需求上线",
    type: "work" as const,
  },
  {
    date: "2023.06 – 2025.05",
    title: "后端工程师 · LLMOps 平台",
    description:
      "从 0 到 1 实现 AI Agent，优化 ReAct 提示词，开发 Workflow 引擎数十个节点，支持实时可视化调试",
    type: "work" as const,
  },
  {
    date: "2024.03 – 至今",
    title: "开源项目维护者 · Dify-on-WeChat",
    description: "创建并维护 Dify-on-WeChat，2800+ stars，1w+ 下载，被 Dify 官网应用案例收录",
    type: "opensource" as const,
  },
  {
    date: "2025.05 – 至今",
    title: "全栈工程师 · AI 智能客服平台",
    description:
      "负责产品原型设计、全栈开发与 CI/CD，支持多模态知识库及微信、WhatsApp 等多渠道接入",
    type: "work" as const,
  },
];

export const featuredProjects = [
  {
    id: "dify-on-wechat",
    name: "Dify-on-WeChat",
    category: "开源项目",
    description:
      "Dify 接入微信生态，支持个人微信、企业微信、公众号等渠道，实现 AI 对话能力快速落地，被 Dify 官网应用案例收录。",
    tags: ["Python", "Dify", "WeChat", "AI"],
    highlights: ["2800+ stars", "1w+ 镜像下载"],
    links: {
      github: "https://github.com/hanfangyuan4396/dify-on-wechat",
      demo: "https://docs.dify.ai/v/zh-hans/learn-more/use-cases/dify-on-wechat",
    },
  },
  {
    id: "llmops",
    name: "LLMOps · Agent & Workflow",
    category: "AI 工程",
    description:
      "从 0 到 1 实现 AI Agent，开发问题分类、代码执行、安全审查等数十个 Workflow 节点，支持实时可视化调试。",
    tags: ["Python", "LLMOps", "Agent", "Workflow", "RAG"],
    highlights: ["ReAct Prompt 优化", "Workflow 可视化调试"],
    links: {},
  },
  {
    id: "chat-with-mes",
    name: "Chat with MES",
    category: "学术研究",
    description:
      "结合 LLM 实现自然语言转 SQL，使用多步 SQL 与实体改写优化，执行准确率从 58.2% 提升至 85.5%。",
    tags: ["LLM", "NL2SQL", "RAG", "Python"],
    highlights: ["中科院一区 · 影响因子 14.2", "准确率提升 27.3%"],
    links: {},
  },
  {
    id: "ai-cs-platform",
    name: "AI 智能客服平台",
    category: "全栈开发",
    description:
      "多模态知识库问答系统，支持图片、音视频文件，可通过网页分享、iframe 嵌入及微信、WhatsApp 等多渠道接入。",
    tags: ["Next.js", "Flask", "多模态", "CI/CD"],
    highlights: ["多模态知识库", "多渠道接入"],
    links: {},
  },
];

export const contactLinks = [
  { label: "GitHub", href: "https://github.com/hanfangyuan4396" },
  { label: "X (Twitter)", href: "https://x.com/hanfangyuan" },
  { label: "CSDN 博客", href: "https://blog.csdn.net/weixin_44387339" },
  { label: "邮箱", href: "mailto:hanfangyuan_ustb@163.com" },
];

export const qrCodes = [
  { src: "/wechat_mp_qr.jpg", label: "公众号", sub: "方圆AI分享" },
  { src: "/wechat_qr.png", label: "微信", sub: "加我好友" },
  { src: "/zsxq.jpg", label: "知识星球", sub: "方圆AI社区" },
];
