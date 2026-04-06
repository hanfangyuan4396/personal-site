import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { TimelineSection } from "@/app/home/_components/timeline-section";

afterEach(() => {
  cleanup();
});

describe("<TimelineSection />", () => {
  it("renders timeline heading", () => {
    render(<TimelineSection />);
    expect(screen.getByText("成长轨迹")).toBeInTheDocument();
  });

  it("renders descriptions as bullet points", () => {
    render(<TimelineSection />);
    expect(screen.getByText("通信工程专业")).toBeInTheDocument();
    expect(screen.getByText("人民一等奖学金")).toBeInTheDocument();
    expect(screen.getByText("优化 ReAct 提示词")).toBeInTheDocument();
  });
});
