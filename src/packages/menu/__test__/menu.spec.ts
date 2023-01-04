import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import CMenu from "../CMenu";

describe("CMenu.tsx", () => {
  it("render", () => {
    const wrapper = shallowMount(CMenu);
    expect(wrapper.classes()).toContain("csss-menu");
  });
});
