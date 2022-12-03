import { forEach } from "lodash-es";
import type { Ref } from "vue";
import { ref, unref, watchEffect } from "vue";
import type { StyleSetter } from "../../tool/styleSetter.tool";

export function useLayout(styleSetter: StyleSetter | Ref<StyleSetter | undefined>) {
  /**
   * @description 设置 css 变量回调方法
   */
  const cLayoutCssPropsResolver: CLayoutCssPropsResolver = {
    "--aside-width": (value) => {
      unref(styleSetter)?.setRemNumber(value, "--aside-width");
    },
    "--header-height": (value) => {
      unref(styleSetter)?.setRemNumber(value, "--header-height");
    },
    "--footer-height": (value) => {
      unref(styleSetter)?.setRemNumber(value, "--footer-height");
    },
    "--grid-template-areas": (value) => {
      unref(styleSetter)?.setString(value, "--grid-template-areas");
    },
  };
  const styleValueList = ref<Partial<CLayoutCssCustomProperties>>({});
  const setValue = (list: Partial<CLayoutCssCustomProperties>) => {
    styleValueList.value = list;
  };

  /**
   * @description 设置 css 变量
   */
  watchEffect(() => {
    forEach(styleValueList.value, (value, key) => cLayoutCssPropsResolver[key as keyof CLayoutCssCustomProperties](value));
  });

  /**
   * @description 布局类型
   */
  const layoutType = ref<CLayoutType>("header-footer-aside");
  const setLayoutType = (type: CLayoutType) => {
    layoutType.value = type;
  };
  watchEffect(() => {
    unref(styleSetter)?.addClass(`csss-layout-${layoutType.value}`);
  });

  return {
    setValue,
    setLayoutType,
  };
}
