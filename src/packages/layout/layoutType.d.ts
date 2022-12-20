/**
 * @description header height 尺寸
 */
type CLayoutHeaderHeightSize = BaseSize | number;
/**
 * @description aside width 尺寸
 */
type CLayoutAsideWidthSize = BaseSize | number;
/**
 * @description footer height 尺寸
 */
type CLayoutFooterHeightSize = BaseSize | number;
/**
 * @description 布局类型
 */
type CLayoutType = "header-footer" | "header-aside" | "footer-aside" | "aside";


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

    classList?: Partial<{
      layout: string[];
      header: string[];
      aside: string[];
      footer: string[];
      main: string[];
    }>,
    property: Partial<CLayoutCssCustomProperties>
  };
}>

type UseCsssLayoutProps = UseCsssProps<CLayoutApi>


