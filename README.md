# 方圆AI个人网站

基于 Next.js 16、React 19、TypeScript 构建的个人网站项目。当前站点既用于展示个人信息、项目经历和博客内容，也承接 AI 咨询、AI 智能体开发、企业 AI 落地等付费服务。

这个仓库可以直接作为个人网站模板使用，你可以在我的基础上替换个人信息、项目内容、联系方式和服务介绍，快速改成你自己的版本。

## 功能介绍

### 页面结构

项目当前包含以下核心页面：

- 首页：个人介绍、项目经历、技能时间线、服务入口、联系方式等内容聚合页。
- 服务页：AI 咨询、AI 智能体开发、企业 AI 落地服务介绍页，包含问题场景、服务内容、FAQ 和转化入口。
- 项目页：展示项目案例、开源项目与实践经验。
- 博客页：承接博客内容与后续 SEO 长尾流量。
- 关于我：介绍个人背景、经验、能力和合作方向。

此外，项目还保留了后端 API 能力与示例业务页面：

- `src/app/api/students/route.ts`：基于 App Router Route Handlers 的示例 API。
- `src/app/students-management/`：学生管理示例页面，包含表单、列表、分页与测试样例。

### 可复用能力

- 可直接作为个人网站模板使用，修改页面内容、导航、主题、文案和服务介绍即可复用。
- 页面采用组件化结构，首页区块、导航、页脚、联系卡片等都可独立调整。
- 保留服务页、博客页和 API 扩展能力，既能做展示站，也能继续往内容站或轻后台方向扩展。

### 主题切换

- 支持深色和浅色两套主题。
- 使用 `next-themes` 管理主题切换。
- 当前导航栏保留了主题切换按钮。

### 多语言能力

- 支持中英文多语言能力。
- 使用 `next-intl` 管理语言配置和文案。
- 当前站点已隐藏语言切换入口，但底层国际化能力仍然保留，可随时重新启用。

### SEO 基础能力

- 支持页面级 `title`、`description`、`keywords` 配置。
- 支持 `canonical`、Open Graph、Twitter 分享元数据。
- 提供 `robots.txt` 与 `sitemap.xml`。
- 服务页已接入 FAQ 结构化数据，具备基础 SEO 能力。

### 测试与质量保障

- 单元测试、集成测试、组件测试使用 `Vitest`。
- 组件测试结合 `Testing Library` 与 `happy-dom`。
- 端到端测试使用 `Playwright`。
- 提供 `ESLint`、`husky`、`lint-staged` 作为本地质量保障基础设施。

### CI/CD 与部署

- GitHub Actions 已配置基础自动化流程。
- 提交到 `main` 后会自动构建 Docker 镜像并推送到阿里云镜像仓库。
- 镜像构建成功后可自动通过 SSH 触发服务器部署脚本。
- PR 阶段提供独立构建校验，Vitest 工作流会自动跑测试覆盖率。

### 技术栈

- 框架：`Next.js 16`（App Router）
- 语言：`TypeScript`
- UI：`React 19` + `Tailwind CSS 4` + `shadcn/ui`
- 主题：`next-themes`
- 国际化：`next-intl`
- 数据层：`Prisma` + `SQLite`
- 表单校验：`react-hook-form` + `zod`
- 测试：`Vitest` + `Testing Library` + `Playwright`

## 源码启动

适用于本地直接使用 Node.js 和 `npm` 启动项目。

### 开发模式

在项目根目录执行：

```bash
npm install
npm run dev
```

启动后默认访问 `http://localhost:3000`。

### 生产模式

在项目根目录执行：

```bash
npm install
npm run build
npm run start
```

如需在提交前检查前端代码质量，可额外执行：

```bash
npm run lint
npm run test
```

## Docker Compose 启动

项目提供了 `docker/docker-compose.yaml` 和 `docker/personal-site-service.sh`，可用于在服务器或本地以容器方式启动服务。

### 启动前准备

在项目根目录执行以下命令：

```bash
cp docker/.env.example docker/.env
mkdir -p docker/volumes
touch docker/volumes/app.db
cd docker
./personal-site-service.sh start
```

### 说明

- `docker/.env` 由 `docker/.env.example` 复制而来，可按实际部署环境补充变量。
- SQLite 数据库文件挂载为 `docker/volumes/app.db`，用于持久化 Prisma 数据。
- 默认会将容器内 `3000` 端口映射到宿主机 `3001` 端口。
- 如需停止服务，可在 `docker/` 目录执行 `./personal-site-service.sh stop`。
- 如需查看日志，可在 `docker/` 目录执行 `./personal-site-service.sh logs`。

## GitHub Actions 变量与 Secrets 表

| 名称 | 类型 | 作用范围 / Workflow | 是否必填 | 默认值 | 说明 |
|---|---|---|---|---|---|
| `ALIYUN_REGISTRY_USER` | Secret | `build-push.yaml` | 是 | 无 | 阿里云镜像仓库登录用户名。 |
| `ALIYUN_REGISTRY_PWD` | Secret | `build-push.yaml` | 是 | 无 | 阿里云镜像仓库登录密码 / Access Key。 |
| `ALIYUN_REGISTRY` | Variable | `build-push.yaml` | 否 | `registry.cn-hangzhou.aliyuncs.com` | 镜像仓库地址（含 region）。 |
| `PROJ_WEB_IMAGE_NAME` | Variable | `build-push.yaml` | 否 | `hanfangyuan/personal-site` | Web 镜像名称（不含 registry）。 |
| `SERVER_SSH_USER` | Secret | `deploy.yaml` | 是 | 无 | 目标服务器 SSH 用户名。 |
| `SERVER_SSH_KEY` | Secret | `deploy.yaml` | 是 | 无 | 目标服务器 SSH 私钥。 |
| `SERVER_SSH_HOST` | Variable | `deploy.yaml` | 是 | 无 | 目标服务器主机名或 IP（`deploy.yaml` 无默认值）。 |
| `SERVER_SSH_SCRIPT` | Variable | `deploy.yaml` | 否 | `cd services/personal-site/docker && ./personal-site-service.sh start && docker image prune -af` | 在服务器上执行的部署脚本命令。 |

## 初始化记录

```bash
npx create-next-app@latest personal-site \
  --ts \
  --app \
  --eslint \
  --src-dir \
  --use-npm \
  --import-alias "@/*" \
  --tailwind \
  --use-turbopack
```

- 使用 `npm` 作为包管理器。
- `--use-turbopack` 启用 Turbopack 开发构建工具。

## UI 组件库集成

```bash
npx shadcn@latest init
```

- 选择基础主题色：`Neutral`。
- CLI 自动更新 `src/app/globals.css`、`src/lib/utils.ts` 并生成 `components.json`。

### 已添加组件

```bash
npx shadcn@latest add button input label select form table dropdown-menu pagination
```

- 组件文件生成于 `src/components/ui/`。
