import { forEach, isObject } from "lodash-es";
import { computed, Ref, ref, watch } from 'vue';

const useCsssProps = (obj: object, el: object) => {

  forEach(obj, (v: Object, key) => {
    if (v.constructor === Object) useCsssProps(v, (el as any)[key]);
    else (el as any)[key] = v;
  });
};

/**
 * @description use csss tabs composable
 */
export const useCsssTabs = (props?: UseCsssTabsProps) => {
  const COMP = ref<CTabsApi>();
  const state = computed(() => COMP.value?.state);
  const read = computed(() => COMP.value?.read);
  const style = computed(() => COMP.value?.style);

  /**
   * @description init function
   */
  const init = watch(COMP, (el) => {
    if (!props) return;
    useCsssProps(props, el!);
    init();
  });

  return { COMP, state, read, style };
};
