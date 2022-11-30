/**
 * @description 常用基本尺寸
 */
type BaseSize = "large" | "normal" | "small"

/**
 * @description css 元属性
 */
type CssCustomProperty = [key: string, value: string];

/**
 * @description 组件基本方法
 */
interface ComponentBase {
  setValue: (cssCustomProperties: Array<CssCustomProperty>) => void;
}