import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { StatsSection } from "@/components/home/stats-section";

afterEach(() => {
  cleanup();
});

describe("<StatsSection />", () => {
  it("renders all stat values", () => {
    render(<StatsSection />);
    expect(screen.getByText("3.2k+")).toBeInTheDocument();
    expect(screen.getByText("1.5w+")).toBeInTheDocument();
    expect(screen.getByText("1w+")).toBeInTheDocument();
  });

  it("renders stat labels", () => {
    render(<StatsSection />);
    expect(screen.getByText("GitHub Stars")).toBeInTheDocument();
    expect(screen.getByText("CSDN 粉丝")).toBeInTheDocument();
    expect(screen.getByText("中科院一区论文")).toBeInTheDocument();
  });

  it("renders stat icons container for each stat", () => {
    const { container } = render(<StatsSection />);
    expect(container.querySelectorAll(".rounded-full.border.border-blue-500\\/20").length).toBe(4);
  });
});
