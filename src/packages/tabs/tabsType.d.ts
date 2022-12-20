type listStatus = "normal" | "disabled" | "null";

type CheckListChildrenResult = [is: listStatus, element: HTMLElement][];


/**
 * @description css custom properties
 */
interface CTabsCssCustomProperties {
  "--list-item-x": string;
  "--list-item-y": string;
  "--list-item-color": string;
  "--list-item-bg-color": string;
  "--list-item-tag-width": string;
  "--list-item-tag-bg-color": string;
  "--list-item-hover-bg-color": string;
  "--list-item-active-bg-color": string;
  "--list-item-active-x": string;
  "--list-item-active-y": string;
  "--list-item-active-tag-bg-color": string
}

/**
 * @description API
 */
type CTabsApi = import("vue").UnwrapNestedRefs<{
  read: {
    total: Readonly<import("vue").Ref<number>>;
    panels: Readonly<import("vue").Ref<readonly string[]>>;
  };
  state: {
    active: number;
  };
  style: {
    needTransition: boolean;
    classList?: Partial<{
      tabs: string[];
      list: string[];
      listItem: string[];
      panel: string[];
      panelItem: string[];
    }>,
    property?: Partial<CTabsCssCustomProperties>
  };
}>

type UseCsssTabsProps = UseCsssProps<CTabsApi>

