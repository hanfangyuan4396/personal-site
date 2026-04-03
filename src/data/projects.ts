const CHAT_WITH_MES_SCIENCEDIRECT =
  "https://www.sciencedirect.com/science/article/pii/S027861252500038X";

const DIFY_ON_WECHAT_GITHUB = "https://github.com/hanfangyuan4396/dify-on-wechat";

/** 精选项目（首页默认展示摘要；项目页可展示 organization / period / details） */
export type FeaturedProject = {
  id: string;
  name: string;
  category: string;
  description: string;
  organization?: string;
  period?: string;
  /** 项目页展开的要点列表（简历级细节） */
  details?: string[];
  tags: string[];
  highlights: string[];
  links: { github?: string; demo?: string; paper?: string };
  /**
   * 存在时整张卡片区域可点击在新标签打开该 URL（首页与 /projects 一致）。
   * 卡片内额外链接需在点击时使用 stopPropagation，避免触发卡片跳转；勿嵌套 `<a>`。
   */
  cardHref?: string;
  /** 为 false 时仅在 /projects 展示 */
  showOnHome?: boolean;
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "dify-on-wechat",
    name: "Dify-on-WeChat",
    category: "开源项目",
    organization: "开源维护",
    period: "2024.03 – 至今",
    description:
      "将 Dify 接入微信生态（个人/企业微信、公众号等），降低 AI 对话在 IM 侧的落地门槛；持续维护并被 Dify 官方应用案例收录。",
    details: [
      "创建并持续维护本开源项目，聚焦微信多渠道接入、兼容性与工程化封装，便于开发者快速把 Dify 应用接到 IM。",
      "社区与收录：GitHub 2800+ stars、镜像 10k+ 次下载，用例收录于 Dify 官方中文文档（Dify-on-WeChat）。",
      "技术实现：Python 侧对接 Dify API 与微信侧协议，结合 Wechaty、Flask 等组件提供可运行示例与文档说明。",
    ],
    tags: ["Python", "Dify", "WeChat", "Wechaty", "Flask"],
    highlights: ["2800+ stars", "10k+ 镜像 · 官方收录"],
    links: {
      github: DIFY_ON_WECHAT_GITHUB,
      demo: "https://legacy-docs.dify.ai/zh-hans/learn-more/use-cases/dify-on-wechat",
    },
    cardHref: DIFY_ON_WECHAT_GITHUB,
  },
  {
    id: "enterprise-ai-scenarios",
    name: "企业 AI 场景落地（技术顾问）",
    category: "AI 应用",
    period: "2024.04 – 2025.03",
    description:
      "依托 Dify 与 Dify-on-WeChat 的实践积累，曾以技术顾问身份参与企业 AI 转型，完成数字员工、关税查询与物流等场景的落地交付。",
    details: [
      "在合作周期内参与多家企业的 AI 转型规划、AI 数字员工系统设计与场景选型，将开源能力与 Dify 应用编排结合为可交付方案。",
      "AI 数字员工（2B）：参考微秘书、LinkAI 等产品形态，基于 Wechaty、Flask、Dify 完成 2B 产品设计与团队落地，将企业微信接入 AI 客服，支持客户群聊自动应答，上线后多家公司采购。",
      "关税 AI（2C）：用 Dify 搭建出口商品关税查询——支持商品图或名称输入，输出税率、资质认证、反垄断审查等信息，作为 2C 产品发布并提升外贸人员效率。",
      "物流场景：在 Dify 中搭建订单轨迹、运价查询等应用，经数字员工系统接入企业微信，在群内自动答疑，显著降低内部客服工作量。",
    ],
    tags: ["Dify", "Wechaty", "Flask", "企业微信", "2B / 2C"],
    highlights: ["AI 数字员工", "关税 AI", "物流场景"],
    links: {},
    showOnHome: false,
  },
  {
    id: "llmops",
    name: "LLMOps · Agent & Workflow",
    category: "AI 工程",
    period: "2023.06 – 2025.05",
    description:
      "从 0 到 1 搭建 Agent 与 Workflow 能力，扩展数十个业务节点，并提供运行期可观测的实时调试体验。",
    details: [
      "Agent：调研 LangChain、Dify、Qwen 等 ReAct 模板并做工程化优化，在上下文中整合用户指令、历史对话、上传文件、知识库召回、可用工具与引用溯源；支持解析文件、工具调用、知识检索与流式输出。Agent 可拆解为多个 Workflow 节点，复用 Workflow 能力。",
      "Workflow：在 Kapacitor 框架上实现编排引擎，将用户搭建的流程映射为可执行节点；扩展问题分类、工具参数提取、安全审查、代码执行等数十类节点，支撑复杂应用组装。",
      "Debug：设计运行态观测——实时记录并推送各节点状态、耗时、输入与输出，降低排障成本。",
      "引用溯源（RAG）：两套方案——（一）提示词嵌入知识与角标生成规则；（二）用 Rerank 度量输出与片段相关度，在保持流式生成的同时动态插入引用角标，减少格式错误。",
      "Agent 工具服务：从 0 搭建工具侧能力，预置搜索引擎、代码解释器、PPT 生成等十余类工具。",
    ],
    tags: ["Python", "LLMOps", "Agent", "Workflow", "Kapacitor", "RAG"],
    highlights: ["ReAct 工程化", "数十个 Workflow 节点", "可视化调试"],
    links: {},
  },
  {
    id: "chat-with-mes",
    name: "Chat with MES",
    category: "学术研究",
    organization: "香港理工大学 CPI Lab",
    period: "2024.05 – 2024.07",
    description:
      "结合 LLM 实现制造场景下的自然语言转 SQL，多步查询与实体规范化改写显著提升执行准确率。",
    details: [
      "论文 Chat with MES - A Case Study of Garment Manufacturing System（已发表）：面向服装制造管理系统，以对话完成 CRUD 类操作；期刊中科院一区，影响因子 14.2。",
      "多步 SQL：借助 ChatDB 思路将用户问题拆解为多段查询 SQL 依次执行。",
      "问题优化：针对实体名称不规范，使用 LLM 抽取实体并在库中匹配标准名称后改写原问题，减少语义漂移。",
      "效果：相比直接使用 GPT-4o 单段生成 SQL，执行准确率由 58.2% 提升至 85.5%（+27.3%），消融实验验证各模块收益。",
    ],
    tags: ["LLM", "NL2SQL", "RAG", "Python", "ChatDB"],
    highlights: ["中科院一区 · IF 14.2", "准确率 +27.3%"],
    links: {
      paper: CHAT_WITH_MES_SCIENCEDIRECT,
    },
    cardHref: CHAT_WITH_MES_SCIENCEDIRECT,
  },
  {
    id: "ai-cs-platform",
    name: "AI 智能客服平台",
    category: "全栈开发",
    period: "2025.05 – 至今",
    description:
      "从产品设计到全栈交付的智能客服平台：多模态知识库、聊天助手与多渠道接入，并配合 CI/CD 与数据迁移规范落地。",
    details: [
      "聊天助手：可配置提示词、知识库、开场白与示例问题；支持网页分享、品牌素材（Logo/背景）、iframe 嵌入第三方站点，以及小程序、WhatsApp、微信公众号等渠道。",
      "多模态知识库：支持网址抓取与文本、图片、音频、视频入库；助手可引用图片、视频等形式作答。",
      "工程侧：使用 Figma 做原型，技术栈以 Next.js、Flask 为主，参与语音、应用市场、Stripe 支付等模块；完善 CI/CD（GitHub Actions），构建结果同步微信群，优化触发策略以降低频率与耗时。",
      "数据层：制定表结构变更规范，使用 SQLAlchemy + Alembic 生成迁移脚本，测试环境可自动同步结构。",
      "提效实践：团队内 Spec 驱动 AI 编程（Cursor 等）、命令化规范提交、CodeRabbit 自动 PR Review 等。",
    ],
    tags: ["Next.js", "Flask", "Figma", "多模态", "CI/CD", "Alembic"],
    highlights: ["产品 + 全栈", "多模态知识库", "CI/CD 落地"],
    links: {},
  },
  {
    id: "meituan-test-tooling",
    name: "内部测试工具链（实习）",
    category: "全栈开发",
    organization: "美团 · 测试部工具链组",
    period: "2022.06 – 2022.09",
    description:
      "参与公司内部 TestX、MDevOps 等系统的前端开发（Vue），完成多项需求迭代与展示优化并上线。",
    details: [
      "参与 TestX、MDevOps 相关功能迭代，承担新增组件、页面版本更新与展示效果优化等工作。",
      "完成十余个需求交付并上线，熟悉团队开发流程、规范与内部基础设施。",
      "通过新人培训计划与实习生大作业完成能力夯实与代码评审流程实践。",
    ],
    tags: ["Vue", "前端工程", "实习"],
    highlights: ["测试工具链", "十余个需求上线"],
    links: {},
    showOnHome: false,
  },
];
