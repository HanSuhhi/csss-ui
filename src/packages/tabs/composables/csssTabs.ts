import { ref, watch, computed, watchEffect, readonly, nextTick } from "vue";
import { forEach, range, map, delay, defer } from "lodash-es";

/**
 * @description use csss tabs composable
 */
export const useCsssTabs = (props?: UseCsssTabsProps) => {
  const COMP = ref<CTabsApi>();
  const total = computed(() => COMP.value?.total);
  const active = computed({
    get() {
      return COMP.value?.active;
    },
    set(index: number) {
      COMP.value!.active = index;
    },
  });
  const panels = computed(() => COMP.value?.panels);

  /**
   * @description init function
   */
  const init = watch(COMP, (el) => {
    forEach(props, (value, key) => {
      if (key === "active") return nextTick(() => (active.value = value));
      if (value) (el as any)![key].apply(null, value);
    });
    init();
  });

  return { COMP, total, active, panels };
};
