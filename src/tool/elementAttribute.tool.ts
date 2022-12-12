import { isNull, isUndefined } from "lodash-es";

export function haveAttribute(ele: Element, name: string): HavaAttribute {
  const result = ele.getAttribute(name);
  return checkAttribute(result);
}

export function checkAttribute(name: string | null | undefined): HavaAttribute {
  if (isNull(name) || isUndefined(name)) return [false, null];
  return [true, name === "" ? null : name];
}

export function lintAttribute(result: boolean): "" | null {
  return result ? "" : null;
}
