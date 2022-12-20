import { parseCsssProps } from '@/tool/useCsss.tool';
import { ref, watch, computed } from 'vue';

/**
 * @description use csss layout composable
 */
export const useCsssLayout = (props?: UseCsssLayoutProps) => {
  const COMP = ref<CLayoutApi>();
  const state = computed(() => COMP.value?.state);
  const read = computed(() => COMP.value?.read);
  const style = computed(() => COMP.value?.style);

  const init = watch(COMP, (el) => {
    if (!props) return;
    parseCsssProps(props, el!);

    init();
  });

  return { COMP, state, style, read };
};
