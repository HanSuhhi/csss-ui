/**
 * @description header height size
 */
type CLayoutHeaderHeightSize = BaseSize | number;
/**
 * @description aside width size
 */
type CLayoutAsideWidthSize = BaseSize | number;
/**
 * @description footer height size
 */
type CLayoutFooterHeightSize = BaseSize | number;
/**
 * @description layout type
 */
type CLayoutType = "header-footer" | "header-aside" | "footer-aside" | "aside";

/**
 * @description css custom properties
 */
type CLayoutCssCustomProperties = CssCustomProperty<"--header-height" | "--aside-width" | "--footer-height">;

/**
 * @description Layout API
 */
type CLayoutApi = import("vue").UnwrapNestedRefs<{
  read: {};
  state: {};
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
    }>;
    property: Partial<CLayoutCssCustomProperties>;
  };
}>;

type UseCsssLayoutProps = UseCsssProps<CLayoutApi>;
