import { forEach } from "lodash-es";
import { ref, watch } from "vue";

/**
 * @description use csss layout composable
 */
export const useCsssLayout = (props?: UseCsssLayoutProps) => {
  const COMP = ref<CLayoutApi>();
  const init = watch(COMP, (el) => {
    forEach(props, (value, fn) => {
      if (value) (el as any)![fn].apply(null, value);
    });
    init();
  });

  return { COMP };
};
