/**
 * @description 布局可供修改的 css 变量的可选值
 */
interface CTabsCustomProperties { }

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
    property?: {}
  };
  // setStyleValue: (value: Partial<CTabsCustomProperties>) => void;
}>

type UseCsssTabsProps = UseCsssProps<CTabsApi>

/**
 * @description css 变量设置方法
 */
type CTabsCssPropsResolver = Record<keyof CTabsCustomProperties, (value: any) => void>;

type listStatus = "normal" | "disabled" | "null";

type CheckListChildrenResult = [is: listStatus, element: HTMLElement][];
