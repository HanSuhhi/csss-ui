import { onMounted, ref } from "vue";
import { StyleSetter } from "../tool/styleSetter.tool";

export function useElement(componentName: string) {
  const element = ref<HTMLElement>();
  const styleSetter = ref<StyleSetter>();
  onMounted(() => (styleSetter.value = new StyleSetter(element.value!, componentName)));

  return {
    element,
    styleSetter,
  };
}
