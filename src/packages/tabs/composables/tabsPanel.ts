import type { Ref } from "vue";
import { computed } from "vue";
import { range } from "lodash-es";

export const useTabsPanel = (total: Ref<number>) => {
  /**
   * @description panels
   */
  const panels = computed(() => range(total.value).map((index) => `panel-${index}`));

  /**
   * @description classes
   */
  const classes = () => [`csss-tabs__panel`];

  return { panels, classes };
};
