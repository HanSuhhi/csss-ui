import type { StyleSetter } from "@/tool/styleSetter.tool";
import type { Ref } from "vue";
import { ref } from "vue";
import { useTemplateClasses } from "@/packages/composables/templateClasses";

export function useTabs(styleSetter: StyleSetter | Ref<StyleSetter | undefined>) {
  const styleValueList = ref<Partial<CTabsCustomProperties>>({});
  const setStyleValue = (list: Partial<CTabsCustomProperties>) => {
    styleValueList.value = list;
  };

  return {
    setStyleValue,
    ...useTemplateClasses(["csss-tabs"])
  };
}
