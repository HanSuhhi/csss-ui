import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import CButton from "../CButton";

describe("CButton.tsx", () => {
  it("render", () => {
    const wrapper = shallowMount(CButton);
    expect(wrapper.classes()).toContain("csss-button");
  });

  it("render deafault slot", () => {
    const wrapper = shallowMount(CButton, {
      slots: {
        default: "<span class='test-class'>hello world</span>",
      },
    });
    expect(wrapper.find(".test-class").exists()).toBeTruthy();
    expect(wrapper.find(".test-class").text()).toBe("hello world");
  });
});
