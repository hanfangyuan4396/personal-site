import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { ProjectsSection } from "@/app/home/_components/projects-section";

afterEach(() => {
  cleanup();
});

describe("<ProjectsSection />", () => {
  it("renders section heading", () => {
    render(<ProjectsSection />);
    expect(screen.getByText("精选项目")).toBeInTheDocument();
  });

  it("renders featured project names", () => {
    render(<ProjectsSection />);
    expect(screen.getByText("Dify-on-WeChat")).toBeInTheDocument();
    expect(screen.getByText("LLMOps · Agent & Workflow")).toBeInTheDocument();
    expect(screen.getByText("Chat with MES")).toBeInTheDocument();
  });

  it("makes Dify-on-WeChat card open GitHub", () => {
    render(<ProjectsSection />);
    const difyCard = screen.getByRole("link", { name: /Dify-on-WeChat/ });
    expect(difyCard).toHaveAttribute(
      "href",
      "https://github.com/hanfangyuan4396/dify-on-wechat"
    );
  });

  it("renders GitHub icon on Dify-on-WeChat card", () => {
    render(<ProjectsSection />);
    const github = screen.getByRole("link", { name: "GitHub" });
    expect(github).toHaveAttribute(
      "href",
      "https://github.com/hanfangyuan4396/dify-on-wechat"
    );
  });

  it("keeps demo link on Dify-on-WeChat card", () => {
    render(<ProjectsSection />);
    const demo = screen.getByRole("link", { name: "在线体验" });
    expect(demo).toHaveAttribute(
      "href",
      "https://legacy-docs.dify.ai/zh-hans/learn-more/use-cases/dify-on-wechat"
    );
  });

  it("makes Chat with MES card a link to ScienceDirect", () => {
    render(<ProjectsSection />);
    const mesCard = screen.getByRole("link", { name: /Chat with MES/ });
    expect(mesCard).toHaveAttribute(
      "href",
      "https://www.sciencedirect.com/science/article/pii/S027861252500038X"
    );
  });

  it("renders paper icon on Chat with MES card", () => {
    render(<ProjectsSection />);
    const paper = screen.getByRole("link", { name: "论文（ScienceDirect）" });
    expect(paper).toHaveAttribute(
      "href",
      "https://www.sciencedirect.com/science/article/pii/S027861252500038X"
    );
  });

  it("renders bottom CTA to projects page", () => {
    render(<ProjectsSection />);
    const cta = screen.getByRole("link", { name: /了解详细项目/ });
    expect(cta).toHaveAttribute("href", "/projects");
  });

  it("does not render home-only-hidden projects on the homepage", () => {
    render(<ProjectsSection />);
    expect(screen.queryByText("内部测试工具链（实习）")).not.toBeInTheDocument();
    expect(screen.queryByText("企业 AI 场景落地（技术顾问）")).not.toBeInTheDocument();
  });
});
