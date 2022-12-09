import { warn } from "@/packages/tool/console.tool";
import { ref, unref, watchEffect } from "vue";

const checkListChildren = (el: HTMLElement): HTMLElement[] => {
  const listChildren = Array.from(unref(el)?.children) as HTMLElement[];
  if (!listChildren) warn(`Tabs: list 缺少子元素`);
  return listChildren;
};

export const useTabsList = () => {
  const TabsList = ref<HTMLElement>();
  /**
   * @description number of list
   */
  const listNum = ref();
  /**
   * @description active num
   */
  const active = ref(0);
  /**
   * @description func that change active
   */
  const activeClick = (index: number) => {
    active.value = index;
  };

  watchEffect(() => {
    const el = unref(TabsList);
    if (!el) return;
    const listChildren = checkListChildren(el);
    listNum.value = listChildren.length;
  });

  return { TabsList, listNum, active, activeClick };
};
