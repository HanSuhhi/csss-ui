/**
 * @description menu list
 */
type CMenuList = Array<
  | Record<string, any>
  | {
      children?: CMenuList;
      isOpen?: boolean;
      toggle?: () => void;
      key: number[];
      disabled: boolean;
      hide: boolean;
    }
>;

/**
 * @description css custom properties
 */
type CMenuCssCustomProperties = CssCustomProperty<>;

/**
 * @description API
 */
type CMenuApi = import("vue").UnwrapNestedRefs<{
  read: {};
  state: {
    menuList?: CMenuList;
    active?: number[];
  };
  style: {
    classList?: Partial<{
      menu: string[];
      items: Record<number, string[]>;
    }>;
    property: Partial<CMenuCssCustomProperties>;
  };
}>;

type UseCsssMenuProps = UseCsssProps<CMenuApi>;
