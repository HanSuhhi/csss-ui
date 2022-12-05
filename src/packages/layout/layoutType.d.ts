/**
 * @description header height 尺寸
 */
type CLayoutHeaderHeightSize = BaseSize;
/**
 * @description aside width 尺寸
 */
type CLayoutAsideWidthSize = BaseSize;
/**
 * @description footer height 尺寸
 */
type CLayoutFooterHeightSize = BaseSize;

/**
 * @description 布局可供修改的 css 变量的可选值
 */
interface CLayoutCssCustomProperties {
  "--header-height": number;
  "--aside-width": number;
  "--footer-height": number;
}

/**
 * @description Layout API
 */
interface CLayoutApi extends ComponentBase {
  setHeaderHeightSize: (size: CLayoutHeaderHeightSize = "normal") => CLayoutHeaderHeightSize;
  setAsideWidthSize: (size: CLayoutAsideWidthSize = "normal") => CLayoutAsideWidthSize;
  setFooterHeightSize: (size: CLayoutFooterHeightSize = "setFooterHeightSizeal") => CLayoutFooterHeightSize;
  setLayoutType: (type: CLayoutType = "header-footer") => void;

  setStyleValue: (value: Partial<CLayoutCssCustomProperties>) => void;
}

/**
 * @description css 变量设置方法
 */
type CLayoutCssPropsResolver = { [key in keyof CLayoutCssCustomProperties]: (value: any) => void };

/**
 * @description 布局类型
 */
type CLayoutType = "header-footer" | "header-aside" | "footer-aside" | "aside";
