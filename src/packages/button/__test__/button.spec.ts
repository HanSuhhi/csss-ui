import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import CButton from "../CButton";

describe("CButton.tsx", () => {
  it("render", () => {
    const wrapper = shallowMount(CButton);
    expect(wrapper.classes()).toContain("csss-button");
  });
});
