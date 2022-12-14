import { forEach, isUndefined } from "lodash-es";
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

export const useTabsList = () => {
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
  const isActive = (index: number) => {
    return index === active.value;
  };
  const setActive: CTabsApi["setActive"] = (index) => {
    if (checkIftheIndexIsDisabled(index)) return;
    active.value = index;
    forEach(TabsList.value?.children, (el, _index) => {
      if (index === _index) el.children[0].setAttribute("data-active", "");
      else el.children[0].removeAttribute("data-active");
    });
  };
  const setDefaultActive = () => {
    if (!isUndefined(active.value)) return;
    if (!disabledIndexs.value.length || disabledIndexs.value[0] !== 0) return (active.value = 0);
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
   * @description need list style
   */
  const needClassListStyle = ref(true);
  const classes = computed(() => (needClassListStyle.value ? ["csss-tabs__list__item", "csss-tabs__list__item__hover"] : []));
  const needDefaultListStyle: CTabsApi["needDefaultListStyle"] = (need) => {
    needClassListStyle.value = need;
  };

  watchEffect(() => {
    if (!TabsList.value) return;
    children.value = checkListChildren(TabsList.value);
    setDisabledIndexs();
    setTotal();
    setDefaultActive();
  });

  return { total, active, TabsList, isActive, setActive, classes, needDefaultListStyle };
};
