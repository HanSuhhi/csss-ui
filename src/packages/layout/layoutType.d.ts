/**
 * @description header height 尺寸
 */
type CLayoutHeaderHeight = BaseSize;

/**
 * @description 布局可供修改的 css 变量的可选值
 */
interface CLayoutCssCustomProperties {
  "--header-height"?: number;
  "--aside-width"?: number;
}

/**
 * @description Layout API
 */
interface CLayoutApi extends ComponentBase {
  setHeaderHeight: (size: CLayoutHeaderHeight = "normal") => CLayoutHeaderHeight

  override setValue: (value: CLayoutCssCustomProperties) => void
}
