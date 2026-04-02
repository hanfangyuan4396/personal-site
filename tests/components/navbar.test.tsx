import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { Navbar } from "@/components/navbar";

// mock next/navigation
vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

// mock theme-toggle to avoid next-themes context requirement
vi.mock("@/components/theme-toggle", () => ({
  ThemeToggle: () => <button aria-label="切换主题">toggle</button>,
}));

afterEach(() => {
  cleanup();
});

describe("<Navbar />", () => {
  it("renders logo", () => {
    render(<Navbar />);
    expect(screen.getByText("方圆")).toBeInTheDocument();
  });

  it("renders all nav links", () => {
    render(<Navbar />);
    expect(screen.getAllByRole("link", { name: "首页" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "项目" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "博客" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "关于" }).length).toBeGreaterThan(0);
  });

  it("highlights active link for home route", () => {
    render(<Navbar />);
    const homeLinks = screen.getAllByRole("link", { name: "首页" });
    // 首页链接 aria-current 为 page
    expect(homeLinks[0]).toHaveAttribute("aria-current", "page");
  });
});
