import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { ContactSection } from "@/app/home/_components/contact-section";

afterEach(() => {
  cleanup();
});

describe("<ContactSection />", () => {
  it("renders section heading", () => {
    render(<ContactSection />);
    expect(screen.getByText("联系我")).toBeInTheDocument();
  });

  it("renders social links", () => {
    render(<ContactSection />);
    expect(screen.getByRole("link", { name: "GitHub" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "X (Twitter)" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "CSDN 博客" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "小红书" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "知乎" })).toBeInTheDocument();
  });

  it("renders wechat card and mp entry", () => {
    render(<ContactSection />);
    expect(screen.getByText("方圆AI分享")).toBeInTheDocument();
    expect(screen.getByText("加我好友")).toBeInTheDocument();
    expect(screen.getByText("公众号")).toBeInTheDocument();
  });
});
