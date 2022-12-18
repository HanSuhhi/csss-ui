import { forEach } from "lodash-es";
import type { UnwrapRef } from 'vue';
import { computed, ref, watch, reactive } from 'vue';

/**
 * @description use csss tabs composable
 */
export const useCsssTabs = (props?: UseCsssTabsProps) => {
  const COMP = ref<CTabsApi>();
  const state = computed(() => COMP.value?.state);
  const read = computed(() => COMP.value?.read);

  /**
   * @description init function
   */
  const init = watch(COMP, (el) => {
    if (!props) return;
    forEach(props, (_props, type) => {
      forEach(_props, (value, key) => {
        (el as any)[type][key] = value;
      });
    });
    init();
  });

  return { COMP, state, read };
};
