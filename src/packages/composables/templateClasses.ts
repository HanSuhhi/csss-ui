import { union } from "lodash-es";
import { computed, ref } from "vue";

export const useTemplateClasses = (defaultClasses: Classes) => {
  const baseClasses = ref<Classes>(defaultClasses);
  const extraClasses = ref<Classes>([]);
  const setExtraClasses: setTemplateClasses = (classes, options) => {
    extraClasses.value = classes;
    if (options) {
      const { baseClass } = options;
      baseClasses.value = [baseClass ? "csss-tabs" : ""];
    }
  };
  const classes = computed(() => union(baseClasses.value, extraClasses.value));

  return { setExtraClasses, classes };
};
