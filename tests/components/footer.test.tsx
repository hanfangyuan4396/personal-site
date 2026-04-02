import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { Footer } from "@/components/footer";

afterEach(() => {
  cleanup();
});

describe("<Footer />", () => {
  it("renders brand name", () => {
    render(<Footer />);
    expect(screen.getByText("方圆")).toBeInTheDocument();
  });

  it("renders tagline", () => {
    render(<Footer />);
    expect(screen.getByText("全栈开发 · AI 工程师 · 开源作者")).toBeInTheDocument();
  });

  it("renders social links", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/hanfangyuan4396"
    );
    expect(screen.getByRole("link", { name: "X" })).toHaveAttribute(
      "href",
      "https://x.com/hanfangyuan"
    );
    expect(screen.getByRole("link", { name: "CSDN" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "知识星球" })).toBeInTheDocument();
  });

  it("renders copyright with current year", () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(String(year)))).toBeInTheDocument();
  });
});
