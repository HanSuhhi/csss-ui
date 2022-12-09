import type { Ref } from "vue";
import { ref } from "vue";
import type { StyleSetter } from "@/packages/tool/styleSetter.tool";

export function useLayout(styleSetter: StyleSetter | Ref<StyleSetter | undefined>) {

  const styleValueList = ref<Partial<CTabsCustomProperties>>({});
  const setStyleValue = (list: Partial<CTabsCustomProperties>) => {
    styleValueList.value = list;
  };

  return {
    setStyleValue,
  };
}
