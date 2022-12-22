import { union } from "lodash-es";
import { computed, ref } from "vue";

export const useTemplateClassList = (defaultClasses?: Classes, fixed?: Classes) => {
  // private
  const fixedClasses = ref<Classes>(fixed || []);
  const baseClasses = ref<Classes>(defaultClasses || []);
  const extraClasses = ref<Classes>([]);

  // public
  const classList = computed({
    get: () => union(baseClasses.value, extraClasses.value, fixedClasses.value),
    set: (_extraClasses) => {
      const needBaseClass = Boolean(_extraClasses[0]);
      // default class
      if (!needBaseClass) {
        baseClasses.value = defaultClasses || [];
        extraClasses.value = _extraClasses.splice(_extraClasses.length - 1);
      } else {
        baseClasses.value = [];
        extraClasses.value = _extraClasses;
      }
    },
  });

  return { classList };
};
