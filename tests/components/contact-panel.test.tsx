import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { ContactPanel } from "@/components/shared/contact-panel";

afterEach(() => {
  cleanup();
});

describe("<ContactPanel />", () => {
  it("renders all shared contact links", () => {
    render(<ContactPanel />);
    expect(screen.getByRole("link", { name: "GitHub" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "X (Twitter)" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "CSDN 博客" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "小红书" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "知乎" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "hanfangyuan_ustb@163.com" })).toBeInTheDocument();
  });

  it("renders wechat card and mp entry", () => {
    render(<ContactPanel />);
    expect(screen.getByText("方圆AI分享")).toBeInTheDocument();
    expect(screen.getByText("加我好友")).toBeInTheDocument();
    expect(screen.getByText("公众号")).toBeInTheDocument();
  });
});
