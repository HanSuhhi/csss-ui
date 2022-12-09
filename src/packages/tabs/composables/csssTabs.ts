import { ref, watch } from "vue";
import { forEach } from "lodash-es";

/**
* @description use csss tabs composable
*/
export const useCsssTabs = (props: UseCsssTabsProps) => {
  const COMP = ref<CTabsApi>();
  const init = watch(COMP, (el) => {
    forEach(props, (value, fn) => {
      if (value) (el as any)![fn].apply(null, value);
    });
    init();
  });

  return { COMP };
};