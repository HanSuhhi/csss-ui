/**
 * @description css custom properties
 */
type CButtonCssCustomProperties = CssCustomProperty<>;

type CButtonPropColor = "green" | "red" | "blue" | "yellow";

/**
 * @description API
 */
type CButtonApi = import("vue").UnwrapNestedRefs<{
  read: {};
  state: {};
  style: {
    classList?: Partial<{
      buttonClassList: string[];
    }>;
    property: Partial<CButtonCssCustomProperties>;
  };
}>;

type UseCsssButtonProps = UseCsssProps<CButtonApi>;
