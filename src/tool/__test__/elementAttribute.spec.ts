import { describe, expect, it } from "vitest";
import { haveAttribute } from "../elementAttribute.tool";

describe("elementAttribute.tool.ts", () => {
  it("return [false, null]", () => {
    const attributeName = "data-test";
    const ele = document.createElement("p");
    const [have, result] = haveAttribute(ele, attributeName);
    expect(have).toBeFalsy();
    expect(result).toBeFalsy();
  });
  it("return [true, false]", () => {
    const attributeName = "data-test";
    const ele = document.createElement("p");
    ele.setAttribute(attributeName, "");
    const [have, result] = haveAttribute(ele, attributeName);
    expect(have).toBeTruthy();
    expect(result).toBeFalsy();
  });
  it("return [true, test-word]", () => {
    const attributeName = "data-test";
    const attributeValue = "value";
    const ele = document.createElement("p");
    ele.setAttribute(attributeName, attributeValue);
    const [have, result] = haveAttribute(ele, attributeName);
    expect(have).toBeTruthy();
    expect(result).toBe(attributeValue);
  });
});
