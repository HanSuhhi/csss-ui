import { useTemplateClassList } from "@/packages/composables/templateClassList";

export function useMenu() {

  return {
    ...useTemplateClassList(["csss-menu"])
  };
}
