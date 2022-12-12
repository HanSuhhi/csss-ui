import { forEach } from "lodash-es";
import type { Slot } from "vue";
import { computed, ref, unref, watchEffect } from "vue";
import { haveAttribute } from "../../../tool/elementAttribute.tool";

/**
 * 1. check if the child element is exists.
 * 2. check if the child element has the `data-disabled` attribute.
 */
const checkListChildren = (el: HTMLElement): CheckListChildrenResult => {
  const listChildren = Array.from(unref(el)?.children) as HTMLElement[];
  return listChildren.map((el) => {
    return [!haveAttribute(el.children[0], "data-disabled")[0] ? "normal" : "disabled", el];
  });
};

export const useTabsList = (list?: Slot) => {
  /**
   * @description number of list
   */
  const children = ref<CheckListChildrenResult>();
  const total = ref(0);
  const setTotal = () => {
    total.value = children.value?.length || 0;
  };

  /**
   * @description active num
   */
  const active = ref();
  const isActive = (index: number) => index === active.value;
  const changeActive = (index: number) => {
    if (checkIftheIndexIsDisabled(index)) return;
    active.value = index;
  };
  const setDefaultActive = () => {
    if (!disabledIndexs.value.length || disabledIndexs.value[0] !== 0) active.value = 0;
    let index = 0;
    for (const _index of disabledIndexs.value) {
      if (index === _index) index++;
      else break;
    }
    active.value = index;
  };

  /**
   * @description TabsList
   */
  const TabsList = ref<HTMLElement>();

  /**
   * @description disabled index list
   */
  const disabledIndexs = ref<number[]>([]);
  const setDisabledIndexs = () => {
    disabledIndexs.value = [];
    forEach(children.value, ([is, ele], index) => {
      if (is === "disabled") {
        disabledIndexs.value.push(index);
        ele.setAttribute("data-disabled", "");
        ele.classList.remove("csss-tabs__list__item__hover");
      }
    });
  };
  const checkIftheIndexIsDisabled = (index: number) => {
    return disabledIndexs.value.includes(index);
  };

  /**
   * @description classes
   */
  const classes = ["csss-tabs__list__item", "csss-tabs__list__item__hover"];

  watchEffect(() => {
    if (!TabsList.value) return;
    children.value = checkListChildren(TabsList.value);
    setDisabledIndexs();
    setTotal();
    setDefaultActive();
  });

  return { total, active, TabsList, isActive, changeActive, classes };
};
