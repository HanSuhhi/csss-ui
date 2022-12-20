import { useTemplateClassList } from "@/packages/composables/templateClassList";

export function useTabs() {

  return {
    ...useTemplateClassList(["csss-tabs"])
  };
}
