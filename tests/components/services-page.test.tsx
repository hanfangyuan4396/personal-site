import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import ServicesPage from "@/app/services/page";

afterEach(() => {
  cleanup();
});

describe("<ServicesPage />", () => {
  it("renders core service offerings", () => {
    render(<ServicesPage />);

    expect(
      screen.getByRole("heading", { name: "AI 咨询、AI 智能体开发与企业 AI 落地服务", level: 1 }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "AI 咨询与 AI提效方案", level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "AI 智能体开发", level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "微信接入与部署支持", level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "你将获得什么", level: 2 })).toBeInTheDocument();
    expect(screen.getByText("更清晰的落地方向")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "适合谁", level: 2 })).toBeInTheDocument();
    expect(screen.getByText("个人创作者与独立开发者")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "能解决什么问题", level: 2 })).toBeInTheDocument();
    expect(screen.getByText("想用 AI提效，但不想在工具选择和流程试错上反复消耗时间")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "为什么找我", level: 2 })).toBeInTheDocument();
    expect(screen.getByText("开源项目 dify-on-wechat 获得 2700+ stars，有真实项目实践基础。")).toBeInTheDocument();
    expect(screen.getByText("方圆 AI 社区知识星球")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "常见问题", level: 2 })).toBeInTheDocument();
    expect(screen.getByText("哪些人适合先找我做 AI 咨询？")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "如果你希望把 AI 真正用到实际工作里，可以从这里开始", level: 2 }),
    ).toBeInTheDocument();
    expect(screen.getByText("专注 AI 干货分享与应用实践，帮你减少信息噪音、降低试错成本，更快把 AI 真正用到实际工作中。")).toBeInTheDocument();
    expect(screen.getByText("筛选值得关注的 AI 工具、信息和方向，少走弯路")).toBeInTheDocument();
    expect(screen.getByText("星球会员专属微信微信群，持续交流与答疑")).toBeInTheDocument();
    expect(screen.getByText("扫码领券")).toBeInTheDocument();
    expect(screen.getByAltText("知识星球优惠券二维码")).toBeInTheDocument();
    expect(document.getElementById("zsxq-coupon")).not.toBeNull();
    expect(screen.getByRole("link", { name: "知识星球" })).toHaveAttribute("href", "#zsxq-coupon");
    expect(screen.getAllByRole("link", { name: /联系咨询/ })).toHaveLength(2);
    expect(screen.getAllByRole("link", { name: /联系咨询/ })[0]).toHaveAttribute(
      "href",
      "/#contact",
    );
  });
});
