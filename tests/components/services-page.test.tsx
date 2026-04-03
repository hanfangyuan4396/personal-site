import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import ServicesPage from "@/app/services/page";

afterEach(() => {
  cleanup();
});

describe("<ServicesPage />", () => {
  it("renders core service offerings", () => {
    render(<ServicesPage />);

    expect(screen.getByRole("heading", { name: "我能提供哪些服务", level: 1 })).toBeInTheDocument();
    expect(screen.getByText("AI 相关付费咨询")).toBeInTheDocument();
    expect(screen.getByText("AI 智能体开发")).toBeInTheDocument();
    expect(screen.getByText("小龙虾安装接入个人微信")).toBeInTheDocument();
    expect(screen.getByText("方圆 AI 社区知识星球")).toBeInTheDocument();
    expect(screen.getByText("扫码领券")).toBeInTheDocument();
    expect(screen.getByAltText("知识星球优惠券二维码")).toBeInTheDocument();
  });
});
