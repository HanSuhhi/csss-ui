import { isNumber, isString, isUndefined } from "lodash-es";

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
  constructor(private ele: HTMLElement) {}

  /**
   * @description 数字检验
   */
  public setRemNumber(value: number, key: string): void {
    if (isUndefined(value)) return;
    if (isNumber(value)) {
      console.log(this.getCssProp(key), key);
      this.ele.style.setProperty(key, `${value}rem`);
      console.log(this.getCssProp(key), key);
    } else console.warn(`${key}: 不是一个数值 `);
  }
  /**
   * @description 字符串检验
   */
  public setString(value: string, key: string): void {
    if (isUndefined(value)) return;
    if (isString(value)) {
      this.ele.style.setProperty(key, value);
    } else console.warn(`${key}: 不是可信字符串 `);
  }

  /**
   * @description 设置 css 尺寸变量
   */
  public setCssSizeProps<T = BaseSize>(key: string, size: T) {
    if (isUndefined(size)) console.warn(`${key}: 请检查参数，获取为非法值`);
    this.ele.style.setProperty(key, VAR(`${key}-${size}`));
  }

  /**
   * @description 获取 css 变量
   */
  public getCssProp(key: string) {
    return this.ele.style.getPropertyValue(key);
  }

  /**
   * @description 增加 class
   */
  public addClass(className: string) {
    return this.ele.classList.add(className);
  }
}
