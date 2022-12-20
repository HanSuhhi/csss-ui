import type { Slot } from "vue";
import { useTemplateClassList } from '../../composables/templateClassList';

export const useMain = () => {

  return {
    ...useTemplateClassList(['csss-layout__main'])
  };
};