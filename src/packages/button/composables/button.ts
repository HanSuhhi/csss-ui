import { useTemplateClassList } from "@/packages/composables/templateClassList";

export function useButton() {

  return {
    ...useTemplateClassList(["csss-button"])
  };
}
