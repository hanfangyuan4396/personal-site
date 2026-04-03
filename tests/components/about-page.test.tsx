import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import AboutPage from "@/app/about/page";

afterEach(() => {
  cleanup();
});

describe("<AboutPage />", () => {
  it("renders project teaser section and link to projects page", () => {
    render(<AboutPage />);

    expect(screen.getByRole("heading", { name: "代表项目", level: 2 })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /查看项目经历/ })).toHaveAttribute("href", "/projects");
    expect(
      screen.getByRole("heading", { name: "Dify-on-WeChat", level: 3 })
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /Dify-on-WeChat · GitHub/ })).toHaveAttribute(
      "href",
      "https://github.com/hanfangyuan4396/dify-on-wechat"
    );
    expect(screen.getByRole("link", { name: /Dify-on-WeChat · 官方文档教程/ })).toHaveAttribute(
      "href",
      "https://legacy-docs.dify.ai/zh-hans/learn-more/use-cases/dify-on-wechat"
    );
    expect(screen.getByRole("link", { name: /Chat with MES · 论文/ })).toHaveAttribute(
      "href",
      "https://www.sciencedirect.com/science/article/pii/S027861252500038X"
    );
  });
});
