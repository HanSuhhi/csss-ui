import { StyleSetter } from "@/tool/styleSetter.tool";
import { onMounted, ref } from "vue";

export function useElement(componentName: string) {
  const element = ref<HTMLElement>();
  const styleSetter = ref<StyleSetter>();

  onMounted(() => (styleSetter.value = new StyleSetter(element.value!, componentName)));

  return {
    element,
    styleSetter,
  };
}
