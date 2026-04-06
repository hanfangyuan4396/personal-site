import { afterEach, describe, expect, it, vi } from "vitest";

const redirectMock = vi.fn();

vi.mock("next/navigation", () => ({
  redirect: redirectMock,
}));

describe("<RootPage />", () => {
  afterEach(() => {
    redirectMock.mockClear();
  });

  it("redirects root route to /home", async () => {
    const mod = await import("@/app/page");

    mod.default();

    expect(redirectMock).toHaveBeenCalledWith("/home");
  });
});
