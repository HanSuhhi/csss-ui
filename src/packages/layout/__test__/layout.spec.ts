import { shallowMount } from "@vue/test-utils";
import { defer } from "lodash-es";
import { describe, expect, it } from "vitest";
import CLayout from "../CLayout";

describe("CLayout.tsx", () => {
  it("render", () => {
    const wrapper = shallowMount(CLayout);
    expect(wrapper.classes()).toContain("csss-layout");
  });
  it("render main", () => {
    const wrapper = shallowMount(CLayout, {
      slots: {
        default: "<p>hello world</p>",
      },
    });
    expect(wrapper.find(".csss-layout__main").find("p").exists()).toBeTruthy();
  });
  it("render aside", () => {
    const wrapper = shallowMount(CLayout, {
      slots: {
        aside: "<p>hello world</p>",
      },
    });
    expect(wrapper.find(".csss-layout__aside").exists()).toBeTruthy();
  });
  it("render header", () => {
    const wrapper = shallowMount(CLayout, {
      slots: {
        header: "<p>hello world</p>",
      },
    });
    expect(wrapper.find(".csss-layout__header").exists()).toBeTruthy();
  });
  it("render footer", () => {
    const wrapper = shallowMount(CLayout, {
      slots: {
        footer: "<p>hello world</p>",
      },
    });
    expect(wrapper.find(".csss-layout__footer").exists()).toBeTruthy();
  });
  it("set header height size", () => {
    const wrapper = shallowMount(CLayout, {
      slots: {
        header: "header",
        default: "main",
      },
    });
    (wrapper.vm as unknown as CLayoutApi).setHeaderHeightSize("large");
    defer(() => {
      expect(wrapper.classes()).toContain("csss-layout-header-height-large");
    });
  });
  it("set aside width size", () => {
    const wrapper = shallowMount(CLayout, {
      slots: {
        default: "main",
        aside: "aside",
      },
    });
    (wrapper.vm as unknown as CLayoutApi).setAsideWidthSize("small");
    defer(() => {
      expect(wrapper.classes()).toContain("csss-layout-aside-width-small");
    });
  });
  it("set footer height size", () => {
    const wrapper = shallowMount(CLayout, {
      slots: {
        default: "main",
        footer: "footer",
      },
    });
    (wrapper.vm as unknown as CLayoutApi).setFooterHeightSize("normal");
    defer(() => {
      expect(wrapper.classes()).toContain("csss-layout-footer-height-normal");
    });
  });
  it("set layout type", () => {
    const wrapper = shallowMount(CLayout, {
      slots: {
        header: "header",
        default: "main",
        aside: "aside",
        footer: "footer",
      },
    });
    (wrapper.vm as unknown as CLayoutApi).setLayoutType("footer-aside");
    defer(() => {
      expect(wrapper.classes()).toContain("csss-layout-footer-aside");
    });
  });
  it("set value", () => {
    const wrapper = shallowMount(CLayout, {
      slots: {
        header: "header",
        default: "main",
        aside: "aside",
        footer: "footer",
      },
    });
    (wrapper.vm as unknown as CLayoutApi).setStyleValue({
      "--aside-width": 4,
      "--footer-height": 3,
      "--header-height": 2,
    });
    defer(() => {
      const style = wrapper.find("article").element.style;
      const asideWidth = style.getPropertyValue("--aside-width");
      const headerHeight = style.getPropertyValue("--header-height");
      const footerHeight = style.getPropertyValue("--footer-height");
      expect(asideWidth).toBe("4rem");
      expect(headerHeight).toBe("2rem");
      expect(footerHeight).toBe("3rem");
    });
  });
});
