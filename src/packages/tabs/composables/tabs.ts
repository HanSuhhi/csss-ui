import type { StyleSetter } from "@/tool/styleSetter.tool";
import type { Ref } from "vue";
import { ref } from "vue";

export function useLayout(styleSetter: StyleSetter | Ref<StyleSetter | undefined>) {
  const styleValueList = ref<Partial<CTabsCustomProperties>>({});
  const setStyleValue = (list: Partial<CTabsCustomProperties>) => {
    styleValueList.value = list;
  };

  return {
    setStyleValue,
  };
}
