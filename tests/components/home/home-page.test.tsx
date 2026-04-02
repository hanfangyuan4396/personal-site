import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import HomePage from "@/app/page";

afterEach(() => {
  cleanup();
});

describe("<HomePage />", () => {
  it("renders homepage sections in the optimized order", () => {
    render(<HomePage />);

    const projectsHeading = screen.getByRole("heading", { name: "精选项目", level: 2 });
    const skillsHeading = screen.getByRole("heading", { name: "技能专长", level: 2 });
    const timelineHeading = screen.getByRole("heading", { name: "职业历程", level: 2 });
    const contactHeading = screen.getByRole("heading", { name: "联系我", level: 2 });

    expect(projectsHeading.compareDocumentPosition(skillsHeading)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING
    );
    expect(skillsHeading.compareDocumentPosition(timelineHeading)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING
    );
    expect(timelineHeading.compareDocumentPosition(contactHeading)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING
    );
  });
});
