import type { StyleSetter } from "@/tool/styleSetter.tool";
import { union } from "lodash-es";
import type { Ref } from "vue";
import { ref, computed } from "vue";

export function useTabs(styleSetter: StyleSetter | Ref<StyleSetter | undefined>) {
  const styleValueList = ref<Partial<CTabsCustomProperties>>({});
  const setStyleValue = (list: Partial<CTabsCustomProperties>) => {
    styleValueList.value = list;
  };

  /**
   * @description tabs class
   */
  const baseClasses = ref<Classes>(["csss-tabs"]);
  const extraClasses = ref<Classes>([]);
  const setExtraClasses: CTabsApi["setTabsClasses"] = (classes, options) => {
    extraClasses.value = classes;
    if (options) {
      const { baseClass } = options;
      baseClasses.value = [baseClass ? "csss-tabs" : ""];
    }
  };
  const classes = computed(() => union(baseClasses.value, extraClasses.value));

  return {
    setStyleValue,
    classes,
    setExtraClasses,
  };
}
