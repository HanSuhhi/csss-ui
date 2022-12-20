import { parseCsssProps } from '@/tool/useCsss.tool';
import { ref, watch } from "vue";

/**
 * @description use csss layout composable
 */
export const useCsssLayout = (props?: UseCsssLayoutProps) => {
  const COMP = ref<CLayoutApi>();

  const init = watch(COMP, (el) => {
    if (!props) return;
    parseCsssProps(props, el!);

    init();
  });

  return { COMP };
};
