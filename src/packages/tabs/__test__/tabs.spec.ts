import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import CTabs from "../CTabs";

describe("CTabs.tsx", () => {
  it("render", () => {
    const wrapper = shallowMount(CTabs);
    expect(wrapper.classes()).toContain("csss-tabs");
  });
});
