/**
* @description css custom properties
*/
interface CButtonCssCustomProperties {

}

/**
* @description API
*/
type CButtonApi  = import("vue").UnwrapNestedRefs<{
  read: {
  };
  state: {
  };
  style: {
    classList?: Partial<{
    }>,
    property: Partial<CButtonCssCustomProperties>
  };
}>

type UseCsssButtonProps = UseCsssProps<CButtonApi>