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
  "--header-height": string;
  "--aside-width": string;
  "--footer-height": string;
}

/**
 * @description Layout API
 */
type CLayoutApi = import("vue").UnwrapNestedRefs<{
  read: {
  };
  state: {
  };
  style: {
    headerHeightSize: CLayoutHeaderHeightSize;
    asideWidthSize: CLayoutAsideWidthSize;
    footerHeightSize: CLayoutFooterHeightSize;
    layoutType: CLayoutType;

    classList?: Partial<{}>,
    property: Partial<CLayoutCssCustomProperties>
  };
}>

type UseCsssLayoutProps = UseCsssProps<CLayoutApi>


/**
 * @description 布局类型
 */
type CLayoutType = "header-footer" | "header-aside" | "footer-aside" | "aside";
