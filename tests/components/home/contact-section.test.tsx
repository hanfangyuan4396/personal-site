import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { ContactSection } from "@/components/home/contact-section";

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
  });

  it("renders QR code labels", () => {
    render(<ContactSection />);
    expect(screen.getByText("公众号")).toBeInTheDocument();
    expect(screen.getByText("微信")).toBeInTheDocument();
    expect(screen.getByText("知识星球")).toBeInTheDocument();
  });
});
