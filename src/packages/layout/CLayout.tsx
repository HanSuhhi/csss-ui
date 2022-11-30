import { defineComponent, onMounted, ref } from "vue";
import { CssCustomPropertySetter } from "../tool/cssSetter.tool";

export default defineComponent({
  name: "CLayout",
  setup: (props, { slots, expose }) => {
    /**
     * @description 根元素
     */
    const LayoutEle = ref<HTMLElement>();
    const cssSetter = ref<CssCustomPropertySetter>();
    onMounted(() => (cssSetter.value = new CssCustomPropertySetter(LayoutEle.value!)));

    /**
     * @mount
     * @description 根据使用到的插件自动化布局
     */
    const initLayout = () => {
      // 如果没有 aside，则取消其宽度
      if (!slots.aside) LayoutEle.value?.style.setProperty("--aside-width", "0");
    };
    onMounted(initLayout);

    /**
     * @expose
     * @description 设置 header 长度
     */
    const setHeaderHeight: CLayoutApi["setHeaderHeight"] = (size = "normal") => {
      cssSetter.value?.setCssSizeProps("--header-height", size);
      return size;
    };
    /**
     * @must
     * @expose
     * @description 设置 css 变量
     */
    const setValue: CLayoutApi["setValue"] = (list) => {
      // aside-width
      cssSetter.value?.setRemNumber(list["--aside-width"] || cssSetter.value.getCssProp("--aside-width") || 0, "--aside-width");
      // header-height
      cssSetter.value?.setRemNumber(list["--header-height"]!, "--header-height");
    };

    expose({
      setHeaderHeight,
      setValue,
    });

    return () => {
      return (
        <article ref={LayoutEle} class="csss-layout">
          <header class="csss-layout__header">{slots.header?.()}</header>
          {slots.aside && <aside class="csss-layout__aside">{slots.aside?.()}</aside>}
          <div class="csss-layout__main">{slots.default?.()}</div>
        </article>
      );
    };
  },
});
