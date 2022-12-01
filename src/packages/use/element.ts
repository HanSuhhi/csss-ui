import { onMounted, ref } from 'vue';
import { StyleSetter } from '../tool/styleSetter.tool';

export function useElement() {
  const element = ref<HTMLElement>();
  const styleSetter = ref<StyleSetter>();
  onMounted(() => (styleSetter.value = new StyleSetter(element.value!)));

  return {
    element,
    styleSetter
  };
};