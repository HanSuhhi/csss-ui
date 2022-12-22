/**
 * @description css custom properties
 */
type CButtonCssCustomProperties = CssCustomProperty<"--font-size" | "--padding-y" | "--padding-x" | "--transition-time" | "--cursor" | "--active-transform-y" | "--color" | "   --border-radius" | " --hover-opacity" | " --active-opacity" | " --bg-color-main" | " --bg-color-sub">;

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
