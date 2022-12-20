import type { StyleSetter } from "@/tool/styleSetter.tool";
import type { Ref } from "vue";
import { ref } from "vue";
import { useTemplateClassList } from "@/packages/composables/templateClassList";

export function useTabs(styleSetter: StyleSetter | Ref<StyleSetter | undefined>) {
  const styleValueList = ref<Partial<CTabsCssCustomProperties>>({});
  const setStyleValue = (list: Partial<CTabsCssCustomProperties>) => {
    styleValueList.value = list;
  };

  return {
    setStyleValue,
    ...useTemplateClassList(["csss-tabs"])
  };
}
