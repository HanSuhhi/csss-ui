import { forEach } from "lodash-es";
import { computed, ref, watch } from "vue";

/**
 * @description use csss tabs composable
 */
export const useCsssTabs = (props?: UseCsssTabsProps) => {
  const COMP = ref<CTabsApi>();
  const total = computed(() => COMP.value?.total);
  const active = computed({
    get() {
      return COMP.value?.active;
    },
    set(index: number) {
      COMP.value?.setActive(index);
    },
  });
  const panels = computed(() => COMP.value?.panels);

  /**
   * @description init function
   */
  const init = watch(COMP, (el) => {
    forEach(props, (value, key) => {
      if (value) {
        console.log("(el as any)![key]: ", (el as any)![key]);
        (el as any)![key].apply(null, value);
      }
    });
    init();
  });

  /**
   * @description set tabs class
   */
  const setTabsClasses: CTabsApi["setTabsClasses"] = (classes, options) => COMP.value?.setTabsClasses(classes, options);

  return { COMP, total, active, panels, setTabsClasses };
};
