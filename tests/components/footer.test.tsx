import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { Footer } from "@/components/footer";

afterEach(() => {
  cleanup();
});

describe("<Footer />", () => {
  it("renders brand title", () => {
    render(<Footer />);
    expect(screen.getByText("方圆AI", { exact: true })).toBeInTheDocument();
  });

  it("renders role labels", () => {
    render(<Footer />);
    expect(screen.getByText("Web 全栈开发 · AI 工程师 · AI 科技博主")).toBeInTheDocument();
  });

  it("renders contact icons: four scroll to #contact, 知识星球 links to services coupon section", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "前往联系我 — 微信" })).toHaveAttribute("href", "/#contact");
    expect(screen.getByRole("link", { name: "前往联系我 — GitHub" })).toHaveAttribute("href", "/#contact");
    expect(screen.getByRole("link", { name: "前往联系我 — CSDN" })).toHaveAttribute("href", "/#contact");
    expect(screen.getByRole("link", { name: "前往联系我 — 邮箱" })).toHaveAttribute("href", "/#contact");
    expect(screen.getByRole("link", { name: "知识星球" })).toHaveAttribute(
      "href",
      "/services#zsxq-coupon"
    );
  });

  it("renders copyright with current year", () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(String(year)))).toBeInTheDocument();
  });

  it("renders filing information", () => {
    render(<Footer />);
    expect(screen.getByAltText("公安备案图标")).toBeInTheDocument();
    expect(screen.getByText("京公网安备 11010802039582号")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "京ICP备2022015055号-2" })).toHaveAttribute(
      "href",
      "https://beian.miit.gov.cn/"
    );
  });
});
