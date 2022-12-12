import { isNumber, isString, isUndefined } from "lodash-es";
import { warn } from "./console.tool";

/**
 * @description 用 var 将 css 包裹
 */
export const VAR = (key: string) => `var(${key})`;

/**
 * @description Style 属性设置器
 */
export class StyleSetter {
  /**
   * @constructor
   * @description 获取父元素
   */
  constructor(private ele: HTMLElement, private componentName: string) {}

  /**
   * @description 数字检验
   */
  public setRemNumber(value: number, key: string): void | null {
    if (isNumber(value)) {
      this.ele.style.setProperty(key, `${value}rem`);
    } else return warn(`${key}: 不是一个数值 `);
  }
  /**
   * @description 字符串检验
   */
  public setString(value: string, key: string): void | null {
    if (isString(value)) {
      this.ele.style.setProperty(key, value);
    } else return warn(`${key}: 不是可信字符串 `);
  }

  /**
   * @description 设置 css 尺寸变量
   */
  public setStyleSize<T = BaseSize>(key: string, size: T): void | null {
    if (isUndefined(size)) return warn(`${key}: 请检查参数，获取为非法值`);
    this.ele.classList.add(`${this.componentName}-${key}-${size}`);
  }
  /**
   * @description 增加 class
   */
  public addClass(className: string) {
    return this.ele.classList.add(className);
  }
}
