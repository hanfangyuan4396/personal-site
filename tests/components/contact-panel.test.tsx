import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

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
    expect(screen.getByText("fangyuan_ai")).toBeInTheDocument();
    expect(screen.getByText("公众号")).toBeInTheDocument();
  });

  it("on narrow viewport, clicking 公众号 opens centered dialog with search hint", async () => {
    const user = userEvent.setup();
    const origMatchMedia = window.matchMedia.bind(window);
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: query.includes("max-width: 767px"),
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })) as typeof window.matchMedia;

    try {
      render(<ContactPanel />);
      await user.click(screen.getByRole("button", { name: /公众号「方圆AI分享」/ }));

      const dialog = screen.getByRole("dialog");
      expect(dialog).toBeInTheDocument();
      expect(within(dialog).getByText('微信搜索「方圆AI分享」')).toBeInTheDocument();
    } finally {
      window.matchMedia = origMatchMedia;
    }
  });
});
