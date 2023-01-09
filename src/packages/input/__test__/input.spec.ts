import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import CInput from "../CInput";

describe("CInput.tsx", () => {
  it("render", () => {
    const wrapper = shallowMount(CInput);
    expect(wrapper.classes()).toContain("csss-input");
  });
});
