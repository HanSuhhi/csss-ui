import { range } from "lodash-es";
import type { Ref } from "vue";
import { computed } from "vue";
import { useTemplateClasses } from "../../composables/templateClasses";

export const useTabsPanel = (total: Ref<number>, active: Ref<number>) => {
  /**
   * @description panels
   */
  const panels = computed(() => range(total.value).map((index) => `panel-${index}`));

  /**
   * @description style
   */
  const { classList: panelItemClassList } = useTemplateClasses(["csss-tabs__panel"]);


  return {
    panels, panelItemClassList,
    ...useTemplateClasses(["csss-tabs__panels"]),
  };
};
