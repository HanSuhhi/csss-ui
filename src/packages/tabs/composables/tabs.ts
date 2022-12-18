import type { StyleSetter } from "@/tool/styleSetter.tool";
import type { Ref } from "vue";
import { ref } from "vue";
import { useTemplateClassList } from "@/packages/composables/templateClassList";

export function useTabs(styleSetter: StyleSetter | Ref<StyleSetter | undefined>) {
  const styleValueList = ref<Partial<CTabsCustomProperties>>({});
  const setStyleValue = (list: Partial<CTabsCustomProperties>) => {
    styleValueList.value = list;
  };

  return {
    setStyleValue,
    ...useTemplateClassList(["csss-tabs"])
  };
}
