/**
 * @description css custom properties
 */
type CInputCssCustomProperties = CssCustomProperty<"--border-color" | "--border-radius">;

/**
 * @description API
 */
type CInputApi = import("vue").UnwrapNestedRefs<{
  read: {};
  state: {
    model?: string;
    active?: boolean;
  };
  style: {
    classList?: Partial<{
      input: string[];
    }>;
    property: Partial<CInputCssCustomProperties>;
  };
}>;

type UseCsssInputProps = UseCsssProps<CInputApi>;
