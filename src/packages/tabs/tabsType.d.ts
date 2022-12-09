/**
* @description 布局可供修改的 css 变量的可选值
*/
interface CTabsCustomProperties {

}

/**
* @description API
*/
interface CTabsApi extends ComponentBase {
  setStyleValue: (value: Partial<CTabsCustomProperties>) => void;
}

/**
* @description useCsssLayout props
*/
type UseCsssTabsProps = {
  [key in keyof CTabsApi]?: Parameters<CTabsApi[key]>;
};

/**
* @description css 变量设置方法
*/
type CTabsCssPropsResolver = { [key in keyof CTabsCustomProperties]: (value: any) => void };