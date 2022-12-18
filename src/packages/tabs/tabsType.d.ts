/**
 * @description 布局可供修改的 css 变量的可选值
 */
interface CTabsCustomProperties { }

/**
 * @description API
 */
interface CTabsApi {
  read: import("vue").UnwrapNestedRefs<{
    total: Readonly<import("vue").Ref<number>>;
    panels: Readonly<import("vue").Ref<readonly string[]>>;
  }>;
  state: import("vue").UnwrapNestedRefs<{
    active: number;
  }>;
  style: import("vue").UnwrapNestedRefs<{
    needTransition: boolean;
    classList?: Partial<{
      tabs: string[];
      list: string[];
      listItem: string[];
      panel: string[];
      panelItem: string[];
    }>,
    property?: {}
  }>

  // setStyleValue: (value: Partial<CTabsCustomProperties>) => void;
}

/**
 * @description useCsssLayout props
 */
type UseCsssTabsProps = Omit<{ [key in keyof CTabsApi]?: Partial<import("vue").UnwrapRef<Omit<CTabsApi[key], "total" | "panels">>> }, "readonly">

/**
 * @description css 变量设置方法
 */
type CTabsCssPropsResolver = Record<keyof CTabsCustomProperties, (value: any) => void>;

type listStatus = "normal" | "disabled" | "null";

type CheckListChildrenResult = [is: listStatus, element: HTMLElement][];
