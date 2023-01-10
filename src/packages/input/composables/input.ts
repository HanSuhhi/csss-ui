import { useTemplateClassList } from "@/packages/composables/templateClassList";
import { ref, watchEffect } from "vue";

export function useInput() {
  const model = ref("");
  /**
   * @description placeholder
   */
  const placeholder = ref("");

  return {
    ...useTemplateClassList(["csss-input"]),
    model,
    placeholder,
  };
}
