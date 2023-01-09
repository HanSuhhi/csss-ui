import { useTemplateClassList } from "@/packages/composables/templateClassList";
import { ref, watchEffect } from "vue";

export function useInput() {
  const model = ref("");

  return {
    ...useTemplateClassList(["csss-input"]),
    model,
  };
}
