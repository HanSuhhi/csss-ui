/**
 * @description 布局可供修改的 css 变量的可选值
 */
interface CTabsCustomProperties {}

/**
 * @description API
 */
interface CTabsApi extends ComponentBase {
  total: Readonly<number>;
  panels: Readonly<string[]>;
  active: Ref<number>;
  needDefaultListStyle: (need: boolean) => void;
  needDefaultPanelStyle: (need: boolean) => void;
  setActive: (index: number) => void;
  setTabsClasses: (classes: Classes, options?: ClassesOptions) => void;
  setStyleValue: (value: Partial<CTabsCustomProperties>) => void;
}

/**
 * @description useCsssLayout props
 */
type UseCsssTabsProps = {
  [key in keyof Omit<CTabsApi, "total" | "panels" | "active">]?: Parameters<CTabsApi[key]> | CTabsApi[key];
};
/**
 * @description css 变量设置方法
 */
type CTabsCssPropsResolver = { [key in keyof CTabsCustomProperties]: (value: any) => void };

type listStatus = "normal" | "disabled" | "null";

type CheckListChildrenResult = [is: listStatus, element: HTMLElement][];
