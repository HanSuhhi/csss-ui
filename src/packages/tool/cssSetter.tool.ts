import { isNumber, isUndefined } from "lodash-es";

/**
 * @description 用 var 将 css 包裹
 */
export const VAR = (key: string) => `var(${key})`;

/**
 * @description Css 属性设置器
 */
export class CssCustomPropertySetter {
  /**
   * @constructor
   * @description 获取父元素
   */
  constructor(private ele: HTMLElement) { }

  /**
   * @description 数字检验
   */
  public setRemNumber(value: number, key: string): void {
    if (isUndefined(value)) return;
    if (isNumber(value)) {
      this.ele.style.setProperty(key, `${value}rem`);
    } else console.warn("--aside-width: 不是一个可信值 ");
  }

  /**
   * @description 设置 css 尺寸变量
   */
  public setCssSizeProps<T = BaseSize>(key: string, size: T) {
    this.ele.style.setProperty(key, VAR(`${key}-${size}`));
  }

  /**
   * @description 获取 css 变量
   */
  public getCssProp(key: string) {
    return this.ele.style.getPropertyValue(key);
  }
}