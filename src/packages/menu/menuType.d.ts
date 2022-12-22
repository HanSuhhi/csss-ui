/**
* @description css custom properties
*/
type CMenuCssCustomProperties = CssCustomProperty<>;

/**
* @description API
*/
type CMenuApi  = import("vue").UnwrapNestedRefs<{
  read: {
  };
  state: {
  };
  style: {
    classList?: Partial<{
      menu: string[];
    }>,
    property: Partial<CMenuCssCustomProperties>
  };
}>

type UseCsssMenuProps = UseCsssProps<CMenuApi>