/**
* @description css custom properties
*/
interface CMenuCssCustomProperties {

}

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
    }>,
    property: Partial<CMenuCssCustomProperties>
  };
}>

type UseCsssMenuProps = UseCsssProps<CMenuApi>