import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import ProjectsPage from "@/app/projects/page";

afterEach(() => {
  cleanup();
});

describe("<ProjectsPage />", () => {
  it("renders page heading and resume-style detail bullets", () => {
    render(<ProjectsPage />);
    expect(screen.getByRole("heading", { name: "项目经历", level: 1 })).toBeInTheDocument();
    expect(
      screen.getByText(/调研 LangChain、Dify、Qwen 等 ReAct 模板并做工程化优化/)
    ).toBeInTheDocument();
    expect(screen.getByText(/参与 TestX、MDevOps 相关功能迭代/)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "企业 AI 场景落地（技术顾问）", level: 2 })
    ).toBeInTheDocument();
    expect(screen.getByText(/关税 AI（2C）/)).toBeInTheDocument();
    expect(screen.getByText("2024.04 – 2025.03")).toBeInTheDocument();

    const difyCard = screen.getByRole("link", { name: /Dify-on-WeChat/ });
    expect(difyCard).toHaveAttribute(
      "href",
      "https://github.com/hanfangyuan4396/dify-on-wechat"
    );

    const mesCard = screen.getByRole("link", { name: /Chat with MES/ });
    expect(mesCard).toHaveAttribute(
      "href",
      "https://www.sciencedirect.com/science/article/pii/S027861252500038X"
    );
  });

  it("does not show selected employer names on project cards", () => {
    render(<ProjectsPage />);
    expect(screen.queryByText(/星环科技/)).not.toBeInTheDocument();
    expect(screen.queryByText(/艾杰泰思/)).not.toBeInTheDocument();
  });

  it("does not render category section titles", () => {
    render(<ProjectsPage />);
    expect(screen.queryByRole("heading", { name: "开源项目" })).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "AI 工程" })).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "全栈开发" })).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "学术研究" })).not.toBeInTheDocument();
  });
});
