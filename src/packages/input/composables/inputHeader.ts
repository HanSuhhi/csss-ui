import { useTemplateClassList } from "@/packages/composables/templateClassList";

export const useInputHeader = () => {
  return {
    ...useTemplateClassList(["csss-input__header"]),
  };
};
