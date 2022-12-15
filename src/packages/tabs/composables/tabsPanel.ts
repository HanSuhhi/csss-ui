import type { Ref } from "vue";
import { computed, ref } from "vue";
import { range } from "lodash-es";
import { useTemplateClasses } from "../../composables/templateClasses";

export const useTabsPanel = (total: Ref<number>) => {
  /**
   * @description panels
   */
  const panels = computed(() => range(total.value).map((index) => `panel-${index}`));

  /**
   * @description style
   */
  const needClassPanelStyle = ref(true);
  const needDefaultPanelStyle: CTabsApi["needDefaultPanelStyle"] = (need) => {
    needClassPanelStyle.value = need;
  };
  const classes = computed(() => [`csss-tabs__panel__control`, needClassPanelStyle.value ? "csss-tabs__panel" : ""]);

  /**
   * @description panel style
   */
  const { setExtraClasses, classes: templateClasses } = useTemplateClasses(["csss-tabs__panels"]);

  return { panels, classes, needDefaultPanelStyle, setExtraClasses, templateClasses };
};
