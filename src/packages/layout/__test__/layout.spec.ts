import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import CLayout from "../CLayout";

describe("CLayout.tsx", () => {
  it("render", () => {
    const wrapper = mount(CLayout);
    expect(wrapper.classes()).toContain("csss-layout");
  });
});
