import { useTemplateClassList } from "@/packages/composables/templateClassList";

export const useInputFooter = () => {
  return {
    ...useTemplateClassList(["csss-input__footer"]),
  };
};
