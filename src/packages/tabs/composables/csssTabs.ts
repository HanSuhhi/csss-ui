import { parseCsssProps } from "@/tool/useCsss.tool";
import { computed, ref, watch } from 'vue';

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
    parseCsssProps(props, el!);
    init();
  });

  return { COMP, state, read, style };
};
