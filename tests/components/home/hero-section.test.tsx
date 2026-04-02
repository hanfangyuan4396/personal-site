import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { HeroSection } from "@/components/home/hero-section";

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.runOnlyPendingTimers();
  vi.useRealTimers();
  cleanup();
});

describe("<HeroSection />", () => {
  it("renders name", () => {
    render(<HeroSection />);
    expect(screen.getByText("韩方圆")).toBeInTheDocument();
  });

  it("renders dynamic role text", async () => {
    render(<HeroSection />);
    const roleText = screen.getByTestId("hero-role-text");
    const firstRole = "Web 全栈开发";

    for (let i = 0; i < firstRole.length; i += 1) {
      await act(async () => {
        await vi.advanceTimersByTimeAsync(110);
      });
    }

    expect(roleText).toHaveTextContent(firstRole);
  });

  it("renders CTA links", () => {
    render(<HeroSection />);
    expect(screen.getByRole("link", { name: /查看项目/ })).toHaveAttribute("href", "/projects");
    expect(screen.getByRole("link", { name: "关于我" })).toHaveAttribute("href", "/about");
  });
});
