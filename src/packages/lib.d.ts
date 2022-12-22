/**
 * @description base size
 */
type BaseSize = "large" | "normal" | "small";

/**
 * @description css custom properties
 */
type CssCustomProperty<T> = Record<T, string>;

/**
 * @description useCsssLayout props
 */
type UseCsssProps<T> = Omit<{ [key in keyof T]?: Partial<import("vue").UnwrapRef<Omit<T[key], "total" | "panels">>> }, "readonly">;

/**
 * @description classes
 */
type Classes = string[];

type CsssAPI = import("vue").UnwrapNestedRefs<{
  read: {};
  state: {};
  style: {
    classList?: Partial<{}>;
    property?: Partial<Record<string, string>>;
  };
}>;
