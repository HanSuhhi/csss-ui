import { useTemplateClassList } from "@/packages/composables/templateClassList";
import { ref, watchEffect } from "vue";

export const useInputMain = () => {
  const inputRef = ref<HTMLInputElement>();

  /**
   * @description active
   */
  const active = ref(false);

  watchEffect(() => {
    if (inputRef.value && active.value) {
      inputRef.value.focus();
    }
  });

  return {
    ...useTemplateClassList(["csss-input__main"]),
    active,
    inputRef,
  };
};
