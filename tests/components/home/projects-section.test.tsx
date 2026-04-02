import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { ProjectsSection } from "@/components/home/projects-section";

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

  it("renders github link for dify-on-wechat", () => {
    render(<ProjectsSection />);
    const githubLink = screen.getByRole("link", { name: "GitHub" });
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/hanfangyuan4396/dify-on-wechat"
    );
  });
});
